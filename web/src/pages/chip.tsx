import { Trans } from "@lingui/macro";
import {
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import "./chip.scss";

import { makeVisualizationsWithId } from "@nand2tetris/components/chips/visualizations.js";
import { Clockface } from "@nand2tetris/components/clockface.js";
import { FullPinout } from "@nand2tetris/components/pinout.js";
import { useStateInitializer } from "@nand2tetris/components/react.js";
import { HDL } from "@nand2tetris/simulator/languages/hdl.js";
import { CHIP_PROJECTS } from "@nand2tetris/projects/index.js";
import { Timer } from "@nand2tetris/simulator/timer.js";
import {
  Files,
  PROJECT_NAMES,
  useChipPageStore,
} from "@nand2tetris/components/stores/chip.store.js";
import { AppContext } from "../App.context";
import { Editor } from "../shell/editor";
import { Accordian, Panel } from "../shell/panel";
import { TestPanel } from "src/shell/test_panel";

export const Chip = () => {
  const { tracking } = useContext(AppContext);
  const { state, actions, dispatch } = useChipPageStore();

  const [hdl, setHdl] = useStateInitializer(state.files.hdl);
  const [tst, setTst] = useStateInitializer(state.files.tst);
  const [cmp, setCmp] = useStateInitializer(state.files.cmp);
  const [out, setOut] = useStateInitializer(state.files.out);

  useEffect(() => {
    actions.initialize();
  }, [actions]);

  useEffect(() => {
    tracking.trackPage("/chip");
  }, [tracking]);

  const saveChip = () => {
    actions.saveChip(hdl);
  };

  useEffect(() => {
    tracking.trackEvent("action", "setProject", state.controls.project);
    tracking.trackEvent("action", "setChip", state.controls.chipName);
  }, []);

  const setProject = useCallback(
    (project: keyof typeof CHIP_PROJECTS) => {
      actions.setProject(project);
      tracking.trackEvent("action", "setProject", project);
    },
    [actions, tracking]
  );

  const tstSetter = useCallback(
    (tst: string) => {
      setTst(tst);
      actions.compileTest(tst);
    },
    [setTst]
  );

  const setChip = useCallback(
    (chip: string) => {
      actions.setChip(chip);
      tracking.trackEvent("action", "setChip", chip);
    },
    [actions, tracking]
  );

  const doEval = useCallback(() => {
    actions.eval();
    tracking.trackEvent("action", "eval");
  }, [actions, tracking]);

  const compile = useRef<(files?: Partial<Files>) => void>(() => undefined);
  compile.current = async (files: Partial<Files> = {}) => {
    await actions.updateFiles({
      hdl: files.hdl ?? hdl,
      tst: files.tst ?? tst,
      cmp: files.cmp ?? cmp,
    });
  };

  const runner = useRef<Timer>();
  useEffect(() => {
    runner.current = new (class ChipTimer extends Timer {
      async reset(): Promise<void> {
        await compile.current();
        await actions.reset();
      }

      override finishFrame(): void {
        super.finishFrame();
        dispatch.current({ action: "updateTestStep" });
      }

      tick(): boolean {
        return actions.stepTest();
      }

      toggle(): void {
        dispatch.current({ action: "updateTestStep" });
      }
    })();

    return () => {
      runner.current?.stop();
    };
  }, [compile, actions, dispatch]);

  const clockActions = useMemo(
    () => ({
      toggle() {
        actions.clock();
        tracking.trackEvent("action", "toggleClock");
      },
      reset() {
        tracking.trackEvent("action", "resetClock");
        actions.reset();
      },
    }),
    [actions]
  );

  const [useBuiltin, setUseBuiltin] = useState(false);
  const toggleUseBuiltin = async () => {
    if (useBuiltin) {
      actions.useBuiltin(false);
      compile.current();
      setUseBuiltin(false);
    } else {
      actions.useBuiltin();
      setUseBuiltin(true);
    }
  };

  const selectors = (
    <>
      <fieldset role="group">
        <select
          value={state.controls.project}
          onChange={({ target: { value } }) => {
            setProject(value as keyof typeof CHIP_PROJECTS);
          }}
          data-testid="project-picker"
        >
          {PROJECT_NAMES.map(([number, label]) => (
            <option key={number} value={number}>
              {label}
            </option>
          ))}
        </select>
        <select
          value={state.controls.chipName}
          onChange={({ target: { value } }) => {
            setChip(value);
          }}
          data-testid="chip-picker"
        >
          {state.controls.chips.map((chip) => (
            <option key={chip} value={chip}>
              {chip}
            </option>
          ))}
        </select>
        <button className="flex-0" onClick={saveChip} disabled={useBuiltin}>
          <Trans>Save</Trans>
        </button>
      </fieldset>
    </>
  );
  const hdlPanel = (
    <Panel
      className="_hdl_panel"
      header={
        <>
          <div tabIndex={0}>HDL</div>
          <fieldset>
            {state.controls.hasBuiltin && (
              <label>
                <input
                  type="checkbox"
                  role="switch"
                  checked={useBuiltin}
                  onChange={toggleUseBuiltin}
                />
                <Trans>Builtin</Trans>
              </label>
            )}
          </fieldset>
          {selectors}
        </>
      }
    >
      <Editor
        className="flex-1"
        value={hdl}
        onChange={(source) => {
          setHdl(source);
          compile.current({ hdl: source });
        }}
        grammar={HDL.parser}
        language={"hdl"}
        disabled={useBuiltin}
      />
    </Panel>
  );

  const chipButtons = (
    <fieldset role="group">
      <button onClick={doEval} onKeyDown={doEval} disabled={!state.sim.pending}>
        <Trans>Eval</Trans>
      </button>
      <button
        onClick={clockActions.toggle}
        style={{ maxWidth: "initial" }}
        disabled={!state.sim.clocked}
      >
        <Trans>Clock</Trans>:{"\u00a0"}
        <Clockface />
      </button>
      <button
        onClick={clockActions.reset}
        style={{ maxWidth: "initial" }}
        disabled={!state.sim.clocked}
      >
        <Trans>Reset</Trans>
      </button>
    </fieldset>
  );

  const visualizations: [string, ReactNode][] = makeVisualizationsWithId({
    parts: state.sim.chip,
  });

  const pinsPanel = (
    <Panel
      className="_parts_panel"
      header={
        <>
          <div>
            <Trans>Chip</Trans>
          </div>
          {chipButtons}
        </>
      }
    >
      {state.sim.invalid ? (
        <Trans>Invalid Chip</Trans>
      ) : (
        <>
          <FullPinout sim={state.sim} toggle={actions.toggle} />
          <Accordian summary={<Trans>Visualizations</Trans>} open={true}>
            <main>
              {visualizations.length > 0 ? (
                visualizations.map(([_, v]) => v)
              ) : (
                <p>None</p>
              )}
            </main>
          </Accordian>
        </>
      )}
    </Panel>
  );

  const testPanel = (
    <TestPanel
      runner={runner}
      tst={[tst, tstSetter, state.controls.span]}
      cmp={[cmp, setCmp]}
      out={[out, setOut]}
    />
  );

  return (
    <div className="ChipPage grid">
      {hdlPanel}
      {pinsPanel}
      {testPanel}
    </div>
  );
};

export default Chip;
