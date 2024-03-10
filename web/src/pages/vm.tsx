import { Trans, t } from "@lingui/macro";
import { Keyboard } from "@nand2tetris/components/chips/keyboard.js";
import Memory from "@nand2tetris/components/chips/memory";
import { Screen } from "@nand2tetris/components/chips/screen.js";
import { useStateInitializer } from "@nand2tetris/components/react";
import { Runbar } from "@nand2tetris/components/runbar";
import { BaseContext } from "@nand2tetris/components/stores/base.context";
import {
  DEFAULT_TEST,
  useVmPageStore,
} from "@nand2tetris/components/stores/vm.store.js";
import { Timer } from "@nand2tetris/simulator/timer.js";
import { ERRNO, isSysError } from "@nand2tetris/simulator/vm/os/errors.js";
import { IMPLICIT, SYS_INIT, VmFrame } from "@nand2tetris/simulator/vm/vm.js";
import { ChangeEvent, useContext, useEffect, useRef, useState } from "react";
import { AppContext } from "src/App.context";
import { Editor } from "src/shell/editor";
import { Panel } from "../shell/panel";
import { TestPanel } from "../shell/test_panel";
import "./vm.scss";

const ERROR_MESSAGES: Record<ERRNO, string> = {
  [ERRNO.SYS_WAIT_DURATION_NOT_POSITIVE]: t`Duration must be positive (Sys.wait)`,
  [ERRNO.ARRAY_SIZE_NOT_POSITIVE]: t`Array size must be positive (Array.new)`,
  [ERRNO.DIVIDE_BY_ZERO]: t`Division by zero (Math.divide)`,
  [ERRNO.SQRT_NEG]: t`Cannot compute square root of a negative number (Math.sqrt)`,
  [ERRNO.ALLOC_SIZE_NOT_POSITIVE]: t`Allocated memory size must be positive (Memory.alloc)`,
  [ERRNO.HEAP_OVERFLOW]: t`Heap overflow (Memory.alloc)`,
  [ERRNO.ILLEGAL_PIXEL_COORD]: t`Illegal pixel coordinates (Screen.drawPixel)`,
  [ERRNO.ILLEGAL_LINE_COORD]: t`Illegal line coordinates (Screen.drawLine)`,
  [ERRNO.ILLEGAL_RECT_COORD]: t`Illegal rectangle coordinates (Screen.drawRectangle)`,
  [ERRNO.ILLEGAL_CENTER_COORD]: t`Illegal center coordinates (Screen.drawCircle)`,
  [ERRNO.ILLEGAL_RADIUS]: t`Illegal radius (Screen.drawCircle)`,
  [ERRNO.STRING_LENGTH_NEG]: t`Maximum length must be non-negative (String.new)`,
  [ERRNO.GET_CHAR_INDEX_OUT_OF_BOUNDS]: t`String index out of bounds (String.charAt)`,
  [ERRNO.SET_CHAR_INDEX_OUT_OF_BOUNDS]: t`String index out of bounds (String.setCharAt)`,
  [ERRNO.STRING_FULL]: t`String is full (String.appendChar)`,
  [ERRNO.STRING_EMPTY]: t`String is empty (String.eraseLastChar)`,
  [ERRNO.STRING_INSUFFICIENT_CAPACITY]: t`Insufficient string capacity (String.setInt)`,
  [ERRNO.ILLEGAL_CURSOR_LOCATION]: t`Illegal cursor location (Output.moveCursor)`,
};

interface Rerenderable {
  rerender: () => void;
}

const VM = () => {
  const { state, actions, dispatch } = useVmPageStore();
  const { toolStates } = useContext(AppContext);
  const { setStatus } = useContext(BaseContext);

  const [tst, setTst] = useStateInitializer(state.files.tst);
  const [out, setOut] = useStateInitializer(state.files.out);
  const [cmp, setCmp] = useStateInitializer(state.files.cmp);

  useEffect(() => {
    toolStates.setTool("vm");
  }, []);

  useEffect(() => {
    actions.initialize();
  }, [actions]);

  useEffect(() => {
    actions.loadTest(tst, cmp);
    actions.reset();
  }, [tst, cmp]);

  useEffect(() => {
    if (state.controls.exitCode !== undefined) {
      setStatus(
        state.controls.exitCode == 0
          ? "Program halted"
          : `Program exited with error code ${state.controls.exitCode}${
              isSysError(state.controls.exitCode)
                ? `: ${ERROR_MESSAGES[state.controls.exitCode]}`
                : ""
            }`
      );
    }
  }, [state.controls.exitCode]);

  const vmRunner = useRef<Timer>();
  const testRunner = useRef<Timer>();
  const [runnersAssigned, setRunnersAssigned] = useState(false);
  useEffect(() => {
    vmRunner.current = new (class VMTimer extends Timer {
      override async tick() {
        return actions.step();
      }

      override finishFrame() {
        dispatch.current({ action: "update" });
      }

      override reset() {
        setStatus("Reset");
        actions.reset();
      }

      override toggle() {
        dispatch.current({ action: "update" });
      }
    })();

    testRunner.current = new (class TestTimer extends Timer {
      override async tick() {
        return actions.testStep();
      }

      override finishFrame() {
        dispatch.current({ action: "update" });
      }

      override reset() {
        setStatus("Reset");
        actions.reset();
      }

      override toggle() {
        dispatch.current({ action: "update" });
      }
    })();

    setRunnersAssigned(true);

    return () => {
      vmRunner.current?.stop();
      testRunner.current?.stop();
    };
  }, [actions, dispatch]);

  const fileUploadRef = useRef<HTMLInputElement>(null);
  const dirUploadRef = useRef<HTMLInputElement>(null);

  const loadFile = () => {
    fileUploadRef.current?.click();
  };

  const loadDir = () => {
    dirUploadRef.current?.click();
  };

  const uploadFile = async (event: ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files?.length) {
      setStatus("No file selected");
      return;
    }
    setStatus("Loading");

    const sources = [];
    for (const file of event.target.files) {
      if (file.name.endsWith(".vm")) {
        sources.push({
          name: file.name.replace(".vm", ""),
          content: await file.text(),
        });
      }
    }

    if (sources.length == 0) {
      setStatus("No .vm file was selected");
      return;
    }
    const success = actions.loadVm(sources);
    if (success) {
      setStatus("Loaded vm file");
    }
  };

  const onSpeedChange = (speed: number) => {
    actions.setAnimate(speed <= 2);
  };

  const stackRef = useRef<Rerenderable>();

  return (
    <div className="Page VmPage grid">
      <Panel
        className="program"
        header={
          <>
            <Trans>VM Code</Trans>
            <input
              type="file"
              style={{ display: "none" }}
              ref={fileUploadRef}
              onChange={uploadFile}
            />
            <input
              type="file"
              webkitdirectory=""
              style={{ display: "none" }}
              ref={dirUploadRef}
              onChange={uploadFile}
            />
            <fieldset role="group">
              <button
                className="flex-0"
                onClick={loadFile}
                data-tooltip="Load file"
                data-placement="bottom"
              >
                📄
              </button>
              <button
                className="flex-0"
                onClick={loadDir}
                data-tooltip="Load directory"
                data-placement="bottom"
              >
                📂
              </button>
            </fieldset>
          </>
        }
      >
        <Editor
          value={state.files.vm}
          onChange={(source: string) => {
            actions.setVm(source);
          }}
          language={"vm"}
          highlight={state.controls.valid ? state.vm.highlight : undefined}
        />
      </Panel>
      <Panel className="stack" header={<Trans>VM Structures</Trans>}>
        <VMStackFrame
          statics={state.vm.Statics}
          temp={state.vm.Temp}
          frame={state.vm.Stack[0]}
        />
        <CallStack
          stack={state.vm.Stack}
          addedSysInit={state.vm.AddedSysInit}
        />
      </Panel>
      <Panel className="display" style={{ gridArea: "display" }}>
        {runnersAssigned && vmRunner.current && (
          <Runbar
            runner={vmRunner.current}
            disabled={!state.controls.valid}
            onSpeedChange={onSpeedChange}
          />
        )}
        <Screen memory={state.vm.Screen} />
        <Keyboard keyboard={state.vm.Keyboard} />

        <div style={{ display: "flex", flexDirection: "row" }}>
          <Memory
            ref={stackRef}
            name="Global Stack"
            memory={state.vm.RAM}
            maxSize={1792}
            offset={256}
            format="dec"
            showUpload={false}
            showClear={false}
          />
          <Memory
            name="RAM"
            memory={state.vm.RAM}
            format="dec"
            cellLabels={[
              "SP:",
              "LCL:",
              "ARG:",
              "THIS:",
              "THAT:",
              "TEMP1:",
              "TEMP2:",
              "TEMP3:",
              "TEMP4:",
              "TEMP5:",
              "TEMP6:",
              "TEMP7:",
              "TEMP8:",
              "R13:",
              "R14:",
              "R15:",
            ]}
            showUpload={false}
            onChange={() => {
              stackRef.current?.rerender();
            }}
          />
        </div>
      </Panel>
      {runnersAssigned && (
        <TestPanel
          runner={testRunner}
          tst={[tst, setTst, state.test.highlight]}
          out={[out, setOut]}
          cmp={[cmp, setCmp]}
          showClear={true}
          defaultTst={DEFAULT_TEST}
          onSpeedChange={onSpeedChange}
          disabled={!state.controls.valid}
        />
      )}
    </div>
  );
};

export default VM;

const UNKNOWN = "Unknown function";

function callStack(frames: VmFrame[], addedSysInit: boolean) {
  const nameCounts: Record<string, number> = {};
  frames = frames.filter((frame) => frame.fn?.name != IMPLICIT);

  for (const frame of frames) {
    if (!frame.fn) {
      continue;
    }

    if (nameCounts[frame.fn.name]) {
      nameCounts[frame.fn.name]++;
    } else {
      nameCounts[frame.fn.name] = 1;
    }
  }

  const names = frames
    .slice()
    .reverse()
    .map((frame) =>
      frame.fn?.name == SYS_INIT.name
        ? addedSysInit
          ? `${SYS_INIT.name} (built-in)`
          : SYS_INIT.name
        : frame.fn?.name ?? UNKNOWN
    );

  for (const name of Object.keys(nameCounts)) {
    if (nameCounts[name] == 1) {
      continue;
    }

    nameCounts[name] = 0;
    for (let i = 0; i < names.length; i++) {
      if (names[i] === name) {
        names[i] = `${name}[${nameCounts[name]}]`;
        nameCounts[name]++;
      }
    }
  }

  return names;
}

function CallStack({
  stack,
  addedSysInit,
}: {
  stack: VmFrame[];
  addedSysInit: boolean;
}) {
  return (
    <section>
      <p>
        Call-stack:
        <code>{callStack(stack, addedSysInit).join(" > ")}</code>
      </p>
    </section>
  );
}

function VMStackFrame({
  statics,
  temp,
  frame,
}: {
  statics: number[];
  temp: number[];
  frame: VmFrame;
}) {
  return (
    <section>
      <main>
        <p>
          Stack:
          <code>[{frame.stack.values.join(", ")}]</code>
        </p>
        {frame.usedSegments?.has("local") && (
          <p>
            local:
            <code>[{frame.locals.values.join(", ")}]</code>
          </p>
        )}
        {frame.usedSegments?.has("argument") && (
          <p>
            argument:
            <code>[{frame.args.values.join(", ")}]</code>
          </p>
        )}
        {frame.usedSegments?.has("static") && (
          <p>
            static:
            <code>[{statics.join(", ")}]</code>
          </p>
        )}
        {frame.usedSegments?.has("this") && (
          <p>
            this:
            <code>[{frame.this.values.join(", ")}]</code>
          </p>
        )}
        {frame.usedSegments?.has("that") && (
          <p>
            that:
            <code>[{frame.that.values.join(", ")}]</code>
          </p>
        )}
        {frame.usedSegments?.has("temp") && (
          <p>
            temp:
            <code>[{temp.join(", ")}]</code>
          </p>
        )}
      </main>
    </section>
  );
}
