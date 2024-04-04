import { FileSystem } from "@davidsouther/jiffies/lib/esm/fs.js";
import { AsmPageState } from "@nand2tetris/components/stores/asm.store";
import { MemoryAdapter } from "@nand2tetris/simulator/cpu/memory";
import { VmFile } from "@nand2tetris/simulator/test/vmtst";
import { createContext, useCallback, useState } from "react";
import { useDialog } from "./shell/dialog";
import { useFilePicker } from "./shell/file_select";
import { useTracking } from "./tracking";

export type Theme = "light" | "dark" | "system";

export function useMonaco() {
  const canUseMonaco = true;
  const [wantsMonaco, setWantsMonaco] = useState(canUseMonaco);
  const toggleMonaco = useCallback(
    (pleaseUseMonaco: boolean) => {
      if (canUseMonaco && pleaseUseMonaco) {
        setWantsMonaco(true);
      } else {
        setWantsMonaco(false);
      }
    },
    [canUseMonaco]
  );

  return {
    canUse: canUseMonaco,
    wants: wantsMonaco,
    toggle: toggleMonaco,
  };
}

export function useToolStates() {
  const [rom, setRom] = useState<MemoryAdapter>();
  const [cpuPath, setCpuPath] = useState<string>();

  const [asmState, setAsmState] = useState<AsmPageState>();
  const [vmState, setVmState] = useState<VmFile[]>();

  const setCpuState = (
    path: string | undefined,
    rom: MemoryAdapter | undefined
  ) => {
    setCpuPath(path);
    setRom(rom);
  };

  return {
    cpuState: { rom: rom, path: cpuPath },
    setCpuState,
    asmState,
    setAsmState,
    vmState,
    setVmState,
  };
}

export function useAppContext(fs: FileSystem = new FileSystem()) {
  const [theme, setTheme] = useState<Theme>("system");
  const [title, setTitle] = useState<string>();

  return {
    monaco: useMonaco(),
    settings: useDialog(),
    filePicker: useFilePicker(),
    tracking: useTracking(),
    theme,
    setTheme,
    toolStates: useToolStates(),
    title,
    setTitle,
  };
}

export const AppContext = createContext<ReturnType<typeof useAppContext>>({
  monaco: {
    canUse: true,
    wants: true,
    toggle() {
      return undefined;
    },
  },
  filePicker: {
    close() {
      return undefined;
    },
    open() {
      return undefined;
    },
    select() {
      return Promise.reject("");
    },
    isOpen: false,
    suffix: undefined,
  } as ReturnType<typeof useFilePicker>,
  settings: {
    close() {
      return undefined;
    },
    open() {
      return undefined;
    },
    isOpen: false,
  },
  tracking: {
    canTrack: false,
    haveAsked: false,
    accept() {
      return undefined;
    },
    reject() {
      return undefined;
    },
    trackEvent() {
      return undefined;
    },
    trackPage() {
      return undefined;
    },
  },
  theme: "system",
  setTheme() {
    return undefined;
  },
  title: undefined,
  setTitle() {
    return undefined;
  },
  toolStates: {
    cpuState: { rom: undefined, path: undefined },
    setCpuState() {
      return undefined;
    },
    asmState: {
      asm: "",
      path: undefined,
      translating: false,
      current: -1,
      resultHighlight: undefined,
      sourceHighlight: undefined,
      symbols: [],
      result: "",
      compare: "",
      compareName: undefined,
      lineNumbers: [],
    },
    setAsmState() {
      return undefined;
    },
    vmState: undefined,
    setVmState() {
      return undefined;
    },
  },
});
