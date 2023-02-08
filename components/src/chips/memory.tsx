import { rounded } from "@davidsouther/jiffies/lib/esm/dom/css/border.js";
import {
  ChangeEvent,
  ReactNode,
  useCallback,
  useContext,
  useMemo,
  useRef,
  useState,
} from "react";

import {
  Format,
  FORMATS,
  MemoryAdapter,
} from "@nand2tetris/simulator/cpu/memory.js";
import { asm } from "@nand2tetris/simulator/util/asm.js";
import { bin, dec, hex } from "@nand2tetris/simulator/util/twos.js";
import { loadBlob, loadAsm, loadHack } from "@nand2tetris/simulator/loader.js";

import InlineEdit from "../inline_edit.js";
import VirtualScroll, { VirtualScrollSettings } from "../virtual_scroll.js";
import { BaseContext } from "../stores/base.context.js";

const ITEM_HEIGHT = 34;

export const MemoryBlock = ({
  memory,
  jmp = { value: 0 },
  highlight = -1,
  editable = false,
  format = dec,
  onChange = () => undefined,
}: {
  jmp?: { value: number };
  memory: MemoryAdapter;
  highlight?: number;
  editable?: boolean;
  format?: (v: number) => string;
  onChange?: (i: number, value: string, previous: number) => void;
}) => {
  const settings = useMemo<Partial<VirtualScrollSettings>>(
    () => ({
      count: Math.min(memory.size, 20),
      maxIndex: memory.size,
      itemHeight: ITEM_HEIGHT,
      startIndex: jmp.value,
    }),
    [memory.size, jmp]
  );
  const get = useCallback(
    (offset: number, count: number) =>
      memory
        .range(offset, offset + count)
        .map((v, i) => [i + offset, v] as [number, number]),
    [memory]
  );
  const row = useCallback(
    ([i, v]: [number, number]) => (
      <MemoryCell
        index={i}
        value={format(v)}
        editable={editable}
        highlight={i === highlight}
        onChange={onChange}
      />
    ),
    [format, editable, highlight, onChange]
  );

  return (
    <VirtualScroll<[number, number], ReactNode>
      settings={settings}
      get={get}
      row={row}
      rowKey={([i]) => i}
    />
  );
};

export const MemoryCell = ({
  index,
  value,
  highlight = false,
  editable = false,
  onChange = () => undefined,
}: {
  index: number;
  value: string;
  highlight?: boolean;
  editable?: boolean;
  onChange?: (i: number, value: string, previous: number) => void;
}) => (
  <div style={{ display: "flex", height: "100%" }}>
    <code
      style={{
        ...rounded("none"),
        ...(highlight ? { background: "var(--mark-background-color)" } : {}),
      }}
    >
      {hex(index)}
    </code>
    <code
      style={{
        flex: "1",
        textAlign: "right",
        ...rounded("none"),
        ...(highlight ? { background: "var(--mark-background-color)" } : {}),
      }}
    >
      {editable ? (
        <InlineEdit
          value={value}
          onChange={(newValue: string) =>
            onChange(index, newValue, Number(value))
          }
        />
      ) : (
        <span>{value}</span>
      )}
    </code>
  </div>
);

export const Memory = ({
  name = "Memory",
  highlight = -1,
  editable = true,
  memory,
  format = "dec",
}: {
  name?: string;
  editable?: boolean;
  highlight?: number;
  memory: MemoryAdapter;
  format: Format;
}) => {
  const [fmt, setFormat] = useState(format);
  const [jmp, setJmp] = useState("0");
  const [goto, setGoto] = useState({ value: 0 });

  const jumpTo = () => {
    setGoto({ value: Number(jmp) });
  };

  const fileUploadRef = useRef<HTMLInputElement>(null);
  const doLoad = useCallback(() => {
    fileUploadRef.current?.click();
  }, [fileUploadRef]);

  const { setStatus } = useContext(BaseContext);
  const upload = useCallback(async (event: ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files?.length) {
      setStatus("No file selected");
      return;
    }
    const file = event.target.files[0];
    const source = await file.text();
    const loader = file.name.endsWith("hack")
      ? loadHack
      : file.name.endsWith("asm")
      ? loadAsm
      : loadBlob;
    const bytes = await loader(source);
    memory.loadBytes(bytes);
    event.target.value = ""; // Clear the input out
    jumpTo();
  }, []);

  const doUpdate = useCallback(
    (i: number, v: string) => {
      memory.update(i, v, fmt ?? "dec");
    },
    [memory, fmt]
  );

  return (
    <article className="panel">
      <header>
        <div>{name}</div>
        <fieldset role="group">
          <input
            type="file"
            style={{ display: "none" }}
            ref={fileUploadRef}
            onChange={upload}
          />
          <button onClick={doLoad} className="flex-0">
            {/* <Icon name="upload_file" /> */}
            📂
          </button>
          <input
            style={{ width: "4em", height: "100%" }}
            placeholder="Goto"
            onKeyDown={({ key }) => key === "Enter" && jumpTo()}
            onChange={({ target: { value } }) => setJmp(value ?? "0")}
          />
          <button onClick={jumpTo} className="flex-0">
            {/* <Icon name="move_down" /> */}
            ⤵️
          </button>
          <select value={fmt} onChange={(e) => setFormat(e.target.value)}>
            {FORMATS.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </fieldset>
      </header>
      <MemoryBlock
        jmp={goto}
        memory={memory}
        highlight={highlight}
        editable={editable}
        format={(v: number) => doFormat(fmt, v)}
        onChange={doUpdate}
      />
    </article>
  );
};

export default Memory;

function doFormat(format: Format, v: number): string {
  switch (format) {
    case "bin":
      return bin(v);
    case "hex":
      return hex(v);
    case "asm":
      return asm(v);
    case "dec":
    default:
      return dec(v);
  }
}
