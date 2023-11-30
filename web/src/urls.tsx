import { t } from "@lingui/macro";
import { lazy } from "react";

const Home = lazy(() => import("./pages/home"));
const Chip = lazy(() => import("./pages/chip"));
const CPU = lazy(() => import("./pages/cpu"));
const ASM = lazy(() => import("./pages/asm"));
const Util = lazy(() => import("./pages/util"));
const Guide = lazy(() => import("./pages/user_guide"));

const URLs = [
  { href: "/", link: t`Home`, icon: "home", target: <Home /> },
  {
    href: "/chip",
    tool: "chip",
    link: t`Chip`,
    icon: "memory",
    target: <Chip />,
  },
  {
    href: "/cpu",
    tool: "cpu",
    link: t`CPU`,
    icon: "developer_board",
    target: <CPU />,
  },
  {
    href: "/asm",
    tool: "asm",
    link: t`Asm`,
    icon: "list_alt",
    target: <ASM />,
  },
  // { href: "/vm", link: `VM`, icon: "computer", target: <VM /> },
  { href: "/util", link: t`Conv`, icon: "function", target: <Util /> },
  { href: "/guide", link: t`Guide`, icon: "menu_book", target: <Guide /> },
];

export default URLs;
