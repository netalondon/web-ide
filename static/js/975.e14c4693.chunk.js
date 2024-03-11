"use strict";(self.webpackChunk_nand2tetris_web=self.webpackChunk_nand2tetris_web||[]).push([[975],{127:(t,e,n)=>{n.r(e),n.d(e,{default:()=>G});var s=n(5072),r=n(1058),i=n(3478),o=n(3577),a=n(8963),c=n(6604),l=n(6791),u=n(5692),d=n(7054);const m="function Main.fibonacci 0\n    push argument 0\n    push constant 2\n    lt                     // checks if n<2\n    if-goto IF_TRUE\n    goto IF_FALSE\n    label IF_TRUE          // if n<2, return n\n    push argument 0        \n    return\n    label IF_FALSE         // if n>=2, returns fib(n-2)+fib(n-1)\n    push argument 0\n    push constant 2\n    sub\n    call Main.fibonacci 1  // computes fib(n-2)\n    push argument 0\n    push constant 1\n    sub\n    call Main.fibonacci 1  // computes fib(n-1)\n    add                    // returns fib(n-1) + fib(n-2)\n    return\nfunction Sys.init 0\n    push constant 4\n    call Main.fibonacci 1   // computes the 4'th fibonacci element\nlabel WHILE\n    goto WHILE              // loops infinitely\n";var p=n(2201),h=n(3583),g=n(4430),f=n(9814),v=n(3484);const S='\nVm <: Base {\n  Root := Vm\n\n  Vm = VmInstruction*\n\n  VmInstruction =\n    | StackInstruction\n    | OpInstruction\n    | FunctionInstruction\n    | CallInstruction\n    | ReturnInstruction\n    | GotoInstruction\n    | LabelInstruction\n  \n  StackInstruction = (Push | Pop) MemorySegment Number\n  OpInstruction = Add | Sub | Neg | Lt | Gt | Eq | And | Or | Not\n  FunctionInstruction = Function Name Number \n  CallInstruction =  Call Name Number\n  ReturnInstruction = Return\n  LabelInstruction = Label Name\n  GotoInstruction = (Goto | IfGoto) Name\n\n  MemorySegment = Argument | Local | Static | Constant | This | That | Pointer | Temp\n\n  Push = "push"\n  Pop = "pop"\n  Function = "function"\n  Call = "call"\n  Return = "return"\n  Goto = "goto"\n  IfGoto = "if-goto"\n  Label = "label"\n\n  Argument = "argument"\n  Local = "local"\n  Static = "static"\n  Constant = "constant"\n  This = "this"\n  That = "that"\n  Pointer = "pointer"\n  Temp = "temp"\n\n  Add = "add" \n  Sub = "sub" \n  Neg = "neg" \n  Eq = "eq"\n  Lt = "lt" \n  Gt = "gt" \n  And = "and" \n  Or = "or" \n  Not = "not"\n}',b=f.Z.grammar(S,v.y1),I=b.extendSemantics(v.rJ);I.addAttribute("op",{Push:t=>"push",Pop:t=>"pop",Function:t=>"function",Call:t=>"call",Return:t=>"return",Goto:t=>"goto",IfGoto:t=>"if-goto",Label:t=>"label",Add:t=>"add",Sub:t=>"sub",Neg:t=>"neg",Eq:t=>"eq",Lt:t=>"lt",Gt:t=>"gt",And:t=>"and",Or:t=>"or",Not:t=>"not"}),I.addAttribute("segment",{Argument:t=>"argument",Local:t=>"local",Static:t=>"static",Constant:t=>"constant",This:t=>"this",That:t=>"that",Pointer:t=>"pointer",Temp:t=>"temp"}),I.addAttribute("instruction",{StackInstruction(t,e,n){let{op:s}=t,{segment:r}=e;return{op:s,segment:r,offset:Number(n.sourceString),line:(0,v.yP)(this.source).line}},OpInstruction(t){let{op:e}=t;return{op:e,line:(0,v.yP)(this.source).line}},FunctionInstruction(t,e,n){let{name:s}=e;return{op:"function",name:s,nVars:Number(n.sourceString),line:(0,v.yP)(this.source).line}},CallInstruction(t,e,n){let{name:s}=e;return{op:"call",name:s,nArgs:Number(n.sourceString),line:(0,v.yP)(this.source).line}},ReturnInstruction(t){return{op:"return",line:(0,v.yP)(this.source).line}},LabelInstruction(t,e){let{name:n}=e;return{op:"label",label:n,line:(0,v.yP)(this.source).line}},GotoInstruction(t,e){let{op:n}=t,{name:s}=e;return{op:n,label:s,line:(0,v.yP)(this.source).line}}}),I.addAttribute("vm",{Vm:t=>({instructions:t.children.map((t=>t.instruction))})}),I.addAttribute("root",{Root(t){let{vm:e}=t;return e}});const x={grammar:S,semantics:I,parser:b,parse:(0,v.Pz)(b,I)};var y=n(4388),_=n(5920),C=n(6845),j=n(4913),T=n(5969);const E="repeat {\n\tvmstep;\n}";function A(t,e,n,s){const r=new T.j(t.vm.RAM,e),i=new T.j(t.vm.Screen,e),o=new p.qT(new T.j(t.vm.RAM,e)),a=t.vm.derivedLine();let c=[];try{c=t.vm.vmStack().reverse()}catch(l){n("Runtime error: Invalid stack")}return{Keyboard:o,RAM:r,Screen:i,Stack:c,Prog:t.vm.program,Statics:[...t.vm.memory.map(((t,e)=>e),16,16+t.vm.getStaticCount())],Temp:[...t.vm.memory.map(((t,e)=>e),5,13)],AddedSysInit:t.vm.addedSysInit,highlight:a,showHighlight:s}}function L(){const{fs:t,setStatus:e,storage:n}=(0,C.useContext)(u.r),s=(0,C.useRef)((()=>{})),{initialState:r,reducers:i,actions:o}=(0,C.useMemo)((()=>function(t,e,n,s){const r=(0,d.Wg)(x.parse(m));let i=(0,d.Wg)(_.Vm.build(r.instructions)),o=(new y.w).with(i),a=!1,c=!0,l="",u=!0;const p={setVm(t,e){t.files.vm=e},setTst(t,e){let{tst:n,cmp:s}=e;t.files.tst=n,t.files.cmp=s??""},setExitCode(t,e){t.controls.exitCode=e},setValid(t,e){t.controls.valid=e},setShowHighlight(t,e){t.vm.showHighlight=e},setError(t,e){t.controls.error=e},setPath(t,e){t.test.path=e},update(t){t.vm=A(o,s,e,u),t.test.highlight=o.currentStep?.span},setAnimate(t,e){t.controls.animate=e},testStep(t){t.files.out=o.log()},testFinished(t){const n=(0,j.q)(t.files.cmp.trim(),t.files.out);e(n?"Simulation successful: The output file is identical to the compare file":"Simulation error: The output file differs from the compare file")}},f={setParseError(t){s.current({action:"setValid",payload:!1});const n=(0,h.m)(t);s.current({action:"setError",payload:n}),e(`Parse error: ${n.message}`)},setVm(t){if(u=!1,s.current({action:"setVm",payload:t}),l==t)return;l=t;const e=x.parse(t);if((0,d.dZ)(e))return this.setParseError((0,d.UG)(e)),!1;const n=(0,d.Wg)(e).instructions,r=_.Vm.build(n);return this.replaceVm(r)},loadVm(t){u=!1;for(const s of t)s.content.endsWith("\n")&&(s.content=s.content.slice(0,-1));const e=t.map((t=>t.content)).join("\n");if(s.current({action:"setVm",payload:e}),l==e)return;l=e;const n=[];let r=0;for(const s of t){const t=x.parse(s.content);if((0,d.dZ)(t))return this.setParseError((0,d.UG)(t)),!1;const e=(0,d.Wg)(t).instructions;for(const n of e)void 0!=n.line&&(n.line+=r);r+=e.length,n.push({name:s.name,instructions:e})}const i=_.Vm.buildFromFiles(n);return this.replaceVm(i)},replaceVm:t=>(0,d.dZ)(t)?(s.current({action:"setValid",payload:!1}),e(`Build Error: ${t.err.message}`),!1):(s.current({action:"setValid",payload:!0}),e("Compiled VM code successfully"),i=(0,d.Wg)(t),o.vm=i,s.current({action:"update"}),!0),loadTest(n,r,a){s.current({action:"setTst",payload:{tst:r,cmp:a}});const c=g.qH.parse(r);return(0,d.dZ)(c)?(s.current({action:"setValid",payload:!1}),e("Failed to parse test"),!1):(s.current({action:"setValid",payload:!0}),e("Parsed tst"),i.reset(),o=y.w.from((0,d.Wg)(c),n,(t=>{this.loadVm(t)})).using(t),o.vm=i,s.current({action:"update"}),!0)},setAnimate(t){c=t,s.current({action:"setAnimate",payload:t})},async testStep(){u=!0;let t=!1;try{return t=await o.step(),s.current({action:"testStep"}),t&&s.current({action:"testFinished"}),c&&s.current({action:"update"}),t}catch(n){return e(`Runtime error: ${n.message}`),s.current({action:"setValid",payload:!1}),!0}},step(){u=!0;try{let t=!1;const e=i.step();return void 0!==e&&(t=!0,s.current({action:"setExitCode",payload:e})),c&&s.current({action:"update"}),t}catch(t){return e(`Runtime error: ${t.message}`),s.current({action:"setValid",payload:!1}),!0}},reset(){u=!0,o.reset(),i.reset(),s.current({action:"update"}),s.current({action:"setExitCode",payload:void 0}),s.current({action:"setValid",payload:!0})},toggleUseTest(){a=!a,s.current({action:"update"})},initialize(){this.loadVm([{name:"fib",content:m}])}};return{initialState:{vm:A(o,s,e,!0),controls:{exitCode:void 0,runningTest:!1,animate:!0,valid:!0},test:{highlight:void 0,path:"/"},files:{vm:"",tst:E,cmp:"",out:""}},reducers:p,actions:f}}(t,e,0,s)),[t,e,n,s]),[a,l]=(0,c.C)(i,r);return s.current=l,{state:a,dispatch:s,actions:o}}var R=n(4619),N=n(9882),P=n(8722),w=n(9200),V=n(8398),O=n(558),k=n(864);const M={[N.b.SYS_WAIT_DURATION_NOT_POSITIVE]:r.ag._("Duration must be positive (Sys.wait)"),[N.b.ARRAY_SIZE_NOT_POSITIVE]:r.ag._("Array size must be positive (Array.new)"),[N.b.DIVIDE_BY_ZERO]:r.ag._("Division by zero (Math.divide)"),[N.b.SQRT_NEG]:r.ag._("Cannot compute square root of a negative number (Math.sqrt)"),[N.b.ALLOC_SIZE_NOT_POSITIVE]:r.ag._("Allocated memory size must be positive (Memory.alloc)"),[N.b.HEAP_OVERFLOW]:r.ag._("Heap overflow (Memory.alloc)"),[N.b.ILLEGAL_PIXEL_COORD]:r.ag._("Illegal pixel coordinates (Screen.drawPixel)"),[N.b.ILLEGAL_LINE_COORD]:r.ag._("Illegal line coordinates (Screen.drawLine)"),[N.b.ILLEGAL_RECT_COORD]:r.ag._("Illegal rectangle coordinates (Screen.drawRectangle)"),[N.b.ILLEGAL_CENTER_COORD]:r.ag._("Illegal center coordinates (Screen.drawCircle)"),[N.b.ILLEGAL_RADIUS]:r.ag._("Illegal radius (Screen.drawCircle)"),[N.b.STRING_LENGTH_NEG]:r.ag._("Maximum length must be non-negative (String.new)"),[N.b.GET_CHAR_INDEX_OUT_OF_BOUNDS]:r.ag._("String index out of bounds (String.charAt)"),[N.b.SET_CHAR_INDEX_OUT_OF_BOUNDS]:r.ag._("String index out of bounds (String.setCharAt)"),[N.b.STRING_FULL]:r.ag._("String is full (String.appendChar)"),[N.b.STRING_EMPTY]:r.ag._("String is empty (String.eraseLastChar)"),[N.b.STRING_INSUFFICIENT_CAPACITY]:r.ag._("Insufficient string capacity (String.setInt)"),[N.b.ILLEGAL_CURSOR_LOCATION]:r.ag._("Illegal cursor location (Output.moveCursor)")},G=()=>{const{state:t,actions:e,dispatch:n}=L(),{toolStates:r}=(0,C.useContext)(P.Il),{setStatus:d}=(0,C.useContext)(u.r),[m,p]=(0,c.i)(t.files.tst),[h,g]=(0,c.i)(t.files.out),[f,v]=(0,c.i)(t.files.cmp),[S,b]=(0,C.useState)("/");(0,C.useEffect)((()=>{r.setTool("vm")}),[]),(0,C.useEffect)((()=>{e.initialize()}),[e]),(0,C.useEffect)((()=>{e.loadTest(S,m,f),e.reset()}),[m,f]),(0,C.useEffect)((()=>{void 0!==t.controls.exitCode&&d(0==t.controls.exitCode?"Program halted":`Program exited with error code ${t.controls.exitCode}${(0,N.q)(t.controls.exitCode)?`: ${M[t.controls.exitCode]}`:""}`)}),[t.controls.exitCode]);const I=(0,C.useRef)(),x=(0,C.useRef)(),[y,_]=(0,C.useState)(!1);(0,C.useEffect)((()=>(I.current=new class extends R.B{async tick(){return e.step()}finishFrame(){n.current({action:"update"})}reset(){d("Reset"),e.reset()}toggle(){n.current({action:"update"})}},x.current=new class extends R.B{async tick(){return e.testStep()}finishFrame(){n.current({action:"update"})}reset(){d("Reset"),e.reset()}toggle(){n.current({action:"update"})}},_(!0),()=>{var t,e;null===(t=I.current)||void 0===t||t.stop(),null===(e=x.current)||void 0===e||e.stop()})),[e,n]);const j=(0,C.useRef)(null),T=(0,C.useRef)(null),A=async t=>{var n;if(null===(n=t.target.files)||void 0===n||!n.length)return void d("No file selected");d("Loading");const s=[];for(const e of t.target.files)e.name.endsWith(".vm")&&s.push({name:e.name.replace(".vm",""),content:await e.text()});if(0==s.length)return void d("No .vm file was selected");const r=e.loadVm(s);e.reset(),r&&d("Loaded vm file")},G=t=>{e.setAnimate(t<=2)},F=(0,C.useRef)();return(0,k.jsxs)("div",{className:"Page VmPage grid",children:[(0,k.jsx)(V.s,{className:"program",header:(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)("div",{className:"flex-0",style:{whiteSpace:"nowrap"},children:(0,k.jsx)(s.cC,{id:"VM Code"})}),(0,k.jsx)("div",{className:"flex-1",children:y&&I.current&&(0,k.jsx)(l.D,{prefix:(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)("button",{className:"flex-0",onClick:()=>{var t;null===(t=j.current)||void 0===t||t.click()},"data-tooltip":"Load file","data-placement":"bottom",children:"\ud83d\udcc4"}),(0,k.jsx)("button",{className:"flex-0",onClick:()=>{var t;null===(t=T.current)||void 0===t||t.click()},"data-tooltip":"Load directory","data-placement":"bottom",children:"\ud83d\udcc2"})]}),runner:I.current,disabled:!t.controls.valid,onSpeedChange:G})}),(0,k.jsx)("input",{type:"file",style:{display:"none"},ref:j,onChange:A}),(0,k.jsx)("input",{type:"file",webkitdirectory:"",style:{display:"none"},ref:T,onChange:A})]}),children:(0,k.jsx)(w.M,{value:t.files.vm,onChange:t=>{e.setVm(t)},language:"vm",highlight:t.controls.valid&&t.vm.showHighlight?t.vm.highlight:void 0,error:t.controls.valid?void 0:t.controls.error})}),(0,k.jsx)(V.s,{className:"stack",header:(0,k.jsx)(s.cC,{id:"VM Structures"}),children:t.controls.valid&&t.vm.Stack.length>0&&(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(D,{statics:t.vm.Statics,temp:t.vm.Temp,frame:t.vm.Stack[0]}),(0,k.jsx)(U,{stack:t.vm.Stack,addedSysInit:t.vm.AddedSysInit})]})}),(0,k.jsxs)(V.s,{className:"display",style:{gridArea:"display"},children:[(0,k.jsx)(a.l,{memory:t.vm.Screen}),(0,k.jsx)(i.N,{keyboard:t.vm.Keyboard}),(0,k.jsxs)("div",{style:{display:"flex",flexDirection:"row"},children:[(0,k.jsx)(o.ZP,{ref:F,name:"Global Stack",memory:t.vm.RAM,initialAddr:256,format:"dec",showUpload:!1,showClear:!1}),(0,k.jsx)(o.ZP,{name:"RAM",memory:t.vm.RAM,format:"dec",cellLabels:["SP:","LCL:","ARG:","THIS:","THAT:","TEMP0:","TEMP1:","TEMP2:","TEMP3:","TEMP4:","TEMP5:","TEMP6:","TEMP7:","R13:","R14:","R15:"],showUpload:!1,onChange:()=>{var t;null===(t=F.current)||void 0===t||t.rerender()}})]})]}),y&&(0,k.jsx)(O.F,{runner:x,tst:[m,p,t.test.highlight],out:[h,g],cmp:[f,v],setPath:b,showClear:!0,defaultTst:E,onSpeedChange:G,disabled:!t.controls.valid})]})};function F(t,e){const n={};t=t.filter((t=>{var e;return(null===(e=t.fn)||void 0===e?void 0:e.name)!=_.tN}));for(const r of t)r.fn&&(n[r.fn.name]?n[r.fn.name]++:n[r.fn.name]=1);const s=t.slice().reverse().map((t=>{var n,s,r;return(null===(n=t.fn)||void 0===n?void 0:n.name)==_.bU.name?e?`${_.bU.name} (built-in)`:_.bU.name:null!==(s=null===(r=t.fn)||void 0===r?void 0:r.name)&&void 0!==s?s:"Unknown function"}));for(const r of Object.keys(n))if(1!=n[r]){n[r]=0;for(let t=0;t<s.length;t++)s[t]===r&&(s[t]=`${r}[${n[r]}]`,n[r]++)}return s}function U(t){let{stack:e,addedSysInit:n}=t;return(0,k.jsx)("section",{children:(0,k.jsxs)("p",{children:["Call-stack:",(0,k.jsx)("code",{children:F(e,n).join(" > ")})]})})}function D(t){var e,n,s,r,i,o,a;let{statics:c,temp:l,frame:u}=t;return(0,k.jsx)("section",{children:(0,k.jsxs)("main",{children:[(0,k.jsxs)("p",{children:["Stack:",(0,k.jsxs)("code",{children:["[",u.stack.values.join(", "),"]"]})]}),(null===(e=u.usedSegments)||void 0===e?void 0:e.has("local"))&&(0,k.jsxs)("p",{children:["local:",(0,k.jsxs)("code",{children:["[",u.locals.values.join(", "),"]"]})]}),(null===(n=u.usedSegments)||void 0===n?void 0:n.has("argument"))&&(0,k.jsxs)("p",{children:["argument:",(0,k.jsxs)("code",{children:["[",u.args.values.join(", "),"]"]})]}),(null===(s=u.usedSegments)||void 0===s?void 0:s.has("static"))&&(0,k.jsxs)("p",{children:["static:",(0,k.jsxs)("code",{children:["[",c.join(", "),"]"]})]}),(null===(r=u.usedSegments)||void 0===r?void 0:r.has("pointer"))&&(0,k.jsxs)("p",{children:["pointer:",(0,k.jsxs)("code",{children:["[",`${u.frame.THIS}, ${u.frame.THAT}`,"]"]})]}),(null===(i=u.usedSegments)||void 0===i?void 0:i.has("this"))&&(0,k.jsxs)("p",{children:["this:",(0,k.jsxs)("code",{children:["[",u.this.values.join(", "),"]"]})]}),(null===(o=u.usedSegments)||void 0===o?void 0:o.has("that"))&&(0,k.jsxs)("p",{children:["that:",(0,k.jsxs)("code",{children:["[",u.that.values.join(", "),"]"]})]}),(null===(a=u.usedSegments)||void 0===a?void 0:a.has("temp"))&&(0,k.jsxs)("p",{children:["temp:",(0,k.jsxs)("code",{children:["[",l.join(", "),"]"]})]})]})})}},5969:(t,e,n)=>{n.d(e,{j:()=>r});var s=n(2201);class r extends s.kG{dispatch;constructor(t,e){super(t,t.size,0),this.dispatch=e}async load(t,e){await super.load(t,e),this.dispatch.current({action:"update"})}}},554:(t,e,n)=>{n.d(e,{j:()=>s});const s=t=>{if((t=>"function"===typeof t?.toString||"string"===typeof t)(t)){const e=t.toString();return"[object Object]"===e?JSON.stringify(t):e}return JSON.stringify(t)}},2936:(t,e,n)=>{n.d(e,{b:()=>r});var s=n(5251);function r(t,e){return void 0===t&&void 0!==s.BM[e]&&(t=e),{..."inline"===e?{display:"inline-block"}:{},width:s.BM[t]??"0"}}},3583:(t,e,n)=>{n.d(e,{m:()=>s});function s(t){if(!t.message)return{message:"HDL statement has a syntax error",span:t.span};const e=t.message.match(/Line \d+, col \d+: (?<message>.*)/);return void 0!==e?.groups?.message?{message:e.groups.message,span:t.span}:{message:t.message,span:t.span}}}}]);