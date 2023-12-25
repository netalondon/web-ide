"use strict";(self.webpackChunk_nand2tetris_web=self.webpackChunk_nand2tetris_web||[]).push([[654],{8815:(e,t,s)=>{s.r(t),s.d(t,{VMInstructionRow:()=>T,default:()=>w});var n=s(5072),a=s(3478),i=s(8963),r=s(5692),l=s(7054);var c=s(2201),o=s(4430),d=s(8637),u=s(4388),h=s(6391),p=s(6845),m=s(4913),x=s(6604),g=s(5969);function j(e,t){const s=new g.j(e.vm.RAM,t),n=new g.j(e.vm.Screen,t),a=new c.qT(new g.j(e.vm.Keyboard,t)),i=e.vm.derivedLine();return{Keyboard:a,RAM:s,Screen:n,Stack:e.vm.vmStack().reverse(),Prog:e.vm.program,highlight:i}}function b(){const{fs:e,setStatus:t,storage:s}=(0,p.useContext)(r.r),n=(0,p.useRef)((()=>{})),{initialState:a,reducers:i,actions:c}=(0,p.useMemo)((()=>function(e,t,s,n){const a=(0,l.Wg)(d.VM.parse("\nfunction Main.fibonacci 0\npush argument 0\npush constant 2\nlt                     // checks if n<2\nif-goto IF_TRUE\ngoto IF_FALSE\nlabel IF_TRUE          // if n<2, return n\npush argument 0        \nreturn\nlabel IF_FALSE         // if n>=2, returns fib(n-2)+fib(n-1)\npush argument 0\npush constant 2\nsub\ncall Main.fibonacci 1  // computes fib(n-2)\npush argument 0\npush constant 1\nsub\ncall Main.fibonacci 1  // computes fib(n-1)\nadd                    // returns fib(n-1) + fib(n-2)\nreturn\n\nfunction Sys.init 0\npush constant 4\ncall Main.fibonacci 1   // computes the 4'th fibonacci element\nlabel WHILE\ngoto WHILE              // loops infinitely\n"));let i=(0,l.Wg)(h.Vm.build(a.instructions)),r=(new u.w).with(i),c=!1;const p={setTst(e,t){let{tst:s,cmp:n}=t;e.files.tst=s,e.files.cmp=n??""},update(e){e.vm=j(r,n),e.test.useTest=c,e.test.highlight=r.currentStep?.span},testStep(e){e.files.out=r.log()},testFinished(e){const s=(0,m.q)(e.files.cmp.trim(),e.files.out);t(s?"Simulation successful: The output file is identical to the compare file":"Simulation error: The output file differs from the compare file")}};return{initialState:{vm:j(r,n),controls:{error:"",runningTest:!1},test:{useTest:c,highlight:void 0},files:{tst:"",cmp:"",out:""}},reducers:p,actions:{loadVm(e){const s=d.VM.parse(e);if((0,l.dZ)(s))return void t(`Error parsing vm file = ${s.err}`);const a=h.Vm.build((0,l.Wg)(s).instructions);(0,l.dZ)(a)?t(`Error building vm file = ${a.err}`):(i=(0,l.Wg)(a),r.vm=i,r.reset(),n.current({action:"update"}))},loadTest(e,s){n.current({action:"setTst",payload:{tst:e,cmp:s}});const a=o.qH.parse(e);return(0,l.dZ)(a)?(t("Failed to parse test"),!1):(t("Parsed tst"),i.reset(),r=u.w.from((0,l.Wg)(a)),r.vm=i,n.current({action:"update"}),!0)},step(){let e=!1;return c?(e=r.step(),n.current({action:"testStep"}),e&&n.current({action:"testFinished"})):i.step(),n.current({action:"update"}),e},reset(){r.reset(),i.reset(),n.current({action:"update"})},toggleUseTest(){c=!c,n.current({action:"update"})},initialize(){this.loadTest("repeat {\n\tvmstep;\n}",""),n.current({action:"update"})}}}}(0,t,0,n)),[e,t,s,n]),[g,b]=(0,x.C)(i,a);return n.current=b,{state:g,dispatch:n,actions:c}}var f=s(4619),v=s(8722),k=s(8398),y=s(558),S=s(864);const w=()=>{const{state:e,actions:t,dispatch:s}=b(),{toolStates:l}=(0,p.useContext)(v.Il),[c,o]=(0,x.i)(e.files.tst),[d,u]=(0,x.i)(e.files.out),[h,m]=(0,x.i)(e.files.cmp);(0,p.useEffect)((()=>{l.setTool("vm")}),[]),(0,p.useEffect)((()=>{t.initialize()}),[t]);const g=(0,p.useRef)(),[j,w]=(0,p.useState)(!1);(0,p.useEffect)((()=>(g.current=new class extends f.B{async tick(){return t.step()}finishFrame(){s.current({action:"update"})}reset(){t.reset()}toggle(){s.current({action:"update"})}},w(!0),()=>{var e;null===(e=g.current)||void 0===e||e.stop()})),[t,s]);const C=(0,p.useRef)(null),{setStatus:F}=(0,p.useContext)(r.r);return(0,S.jsxs)("div",{className:"Page VmPage grid",children:[(0,S.jsx)(k.s,{className:"program",header:(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(n.cC,{id:"Program"}),(0,S.jsx)("input",{type:"file",style:{display:"none"},ref:C,onChange:async e=>{var s;if(null===(s=e.target.files)||void 0===s||!s.length)return void F("No file selected");F("Loading");const n=e.target.files[0],a=await n.text();n.name.endsWith(".vm")?(t.loadVm(a),F("Loaded vm file")):F("File must be .vm file")}}),(0,S.jsx)("button",{className:"flex-0",onClick:()=>{var e;null===(e=C.current)||void 0===e||e.click()},"data-tooltip":"Load file","data-placement":"bottom",children:"\ud83d\udcc2"})]}),children:(0,S.jsx)("main",{children:(0,S.jsxs)("table",{children:[(0,S.jsx)("thead",{children:(0,S.jsxs)("tr",{children:[(0,S.jsx)("td",{children:"Inst"}),(0,S.jsx)("td",{children:"Target"}),(0,S.jsx)("td",{children:"Val"})]})}),(0,S.jsx)("tbody",{children:e.vm.Prog.map(((t,s)=>T({inst:t,key:s,highlighted:s===e.vm.highlight})))})]})})}),(0,S.jsxs)(k.s,{className:"IO",children:[(0,S.jsx)("div",{children:(0,S.jsxs)("label",{children:[(0,S.jsx)("input",{type:"checkbox",onChange:t.toggleUseTest,checked:e.test.useTest,role:"switch"}),"Use Test Script"]})}),(0,S.jsx)(i.l,{memory:e.vm.Screen}),(0,S.jsx)(a.N,{keyboard:e.vm.Keyboard}),(0,S.jsx)("div",{children:e.vm.Stack.map(((e,t)=>{var s,n;return(0,S.jsxs)("section",{children:[(0,S.jsx)("header",{children:(0,S.jsxs)("h3",{children:["Function",(0,S.jsx)("code",{children:null!==(s=null===(n=e.fn)||void 0===n?void 0:n.name)&&void 0!==s?s:"Unknown Function"})]})}),(0,S.jsxs)("main",{children:[(0,S.jsxs)("p",{children:[(0,S.jsx)("em",{children:"Args:"}),(0,S.jsxs)("code",{children:["[",e.args.values.join(", "),"]"]})]}),(0,S.jsxs)("p",{children:[(0,S.jsx)("em",{children:"Locals:"}),(0,S.jsxs)("code",{children:["[",e.locals.values.join(", "),"]"]})]}),(0,S.jsxs)("p",{children:[(0,S.jsx)("em",{children:"Stack:"}),(0,S.jsxs)("code",{children:["[",e.stack.values.join(", "),"]"]})]})]})]},t)}))})]}),j&&(0,S.jsx)(y.F,{runner:g,tst:[c,o,e.test.highlight],out:[d,u],cmp:[h,m],onLoadTest:t.loadTest})]})};function T(e){let{inst:t,key:s,highlighted:n}=e;switch(t.op){case"add":case"and":case"eq":case"gt":case"lt":case"neg":case"not":case"or":case"sub":case"return":return(0,S.jsxs)("tr",{className:n?"highlight":"",children:[(0,S.jsx)("td",{children:t.op}),(0,S.jsx)("td",{colSpan:2})]},s);case"if-goto":case"label":case"goto":return(0,S.jsxs)("tr",{className:n?"highlight":"",children:[(0,S.jsx)("td",{children:t.op}),(0,S.jsx)("td",{colSpan:2,children:t.label})]},s);case"function":case"call":return(0,S.jsxs)("tr",{className:n?"highlight":"",children:[(0,S.jsx)("td",{children:t.op}),(0,S.jsx)("td",{children:t.name}),(0,S.jsx)("td",{children:"call"===t.op?t.nArgs:t.nVars})]},s);case"pop":case"push":return(0,S.jsxs)("tr",{className:n?"highlight":"",children:[(0,S.jsx)("td",{children:t.op}),(0,S.jsx)("td",{children:t.segment}),(0,S.jsx)("td",{children:t.offset})]},s);default:return(0,S.jsx)("tr",{className:n?"highlight":"",children:(0,S.jsx)("td",{colSpan:3,children:"Unknown"})},s)}}},558:(e,t,s)=>{s.d(t,{F:()=>m});var n=s(5072),a=s(6845),i=s(1965),r=s(6791),l=s(7880),c=s(5692),o=s(4430),d=s(8722),u=s(9200),h=s(8398),p=s(864);const m=e=>{let{runner:t,tst:[s,m,x],cmp:[g,j],out:[b],disabled:f=!1,onLoadTest:v}=e;const{fs:k,setStatus:y}=(0,a.useContext)(c.r),{filePicker:S,tracking:w}=(0,a.useContext)(d.Il),[T,C]=(0,a.useState)("tst"),F=(0,a.useCallback)((e=>{C(e),w.trackEvent("tab","change",e)}),[w]),N=(0,a.useCallback)((async()=>{try{const e=await S.select(),t=await k.readFile(e),s=e.includes(".vm_tst")?e.replace(".vm_tst",".cmp"):e.replace(".tst",".cmp"),n=await k.readFile(s);null===v||void 0===v||v(t,n)}catch(e){console.error(e),y("Failed to load test")}}),[S,y,k]);return(0,p.jsx)(h.s,{className:"_test_panel",header:(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)("div",{className:"flex-0",children:(0,p.jsx)(n.cC,{id:"Test"})}),(0,p.jsx)("div",{className:"flex-1",children:t.current&&(0,p.jsx)(r.D,{runner:t.current})}),(0,p.jsx)("div",{children:(0,p.jsx)("fieldset",{role:"group",children:(0,p.jsx)("button",{onClick:N,children:"\ud83d\udcc2"})})})]}),children:(0,p.jsxs)("div",{role:"tablist",style:{"--tab-count":"3"},children:[(0,p.jsx)("div",{role:"tab",id:"test-tab-tst","aria-controls":"test-tabpanel-tst","aria-selected":"tst"===T,children:(0,p.jsxs)("label",{children:[(0,p.jsx)("input",{type:"radio",name:"test-tabs","aria-controls":"test-tabpanel-tst",value:"tst",checked:"tst"===T,onChange:()=>F("tst")}),"Test Script"]})}),(0,p.jsx)("div",{role:"tabpanel","aria-labelledby":"test-tab-tst",id:"test-tabpanel-tst",children:(0,p.jsx)(u.M,{value:s,onChange:m,grammar:o.qH.parser,language:"tst",highlight:x,disabled:f})}),(0,p.jsx)("div",{role:"tab",id:"test-tab-cmp","aria-controls":"test-tablpanel-cmp","aria-selected":"cmp"===T,children:(0,p.jsxs)("label",{children:[(0,p.jsx)("input",{type:"radio",name:"test-tabs","aria-controls":"test-tabpanel-cmp",value:"cmp",checked:"cmp"===T,onChange:()=>F("cmp")}),"Compare File"]})}),(0,p.jsx)("div",{role:"tabpanel","aria-labelledby":"test-tab-cmp",id:"test-tabpanel-cmp",style:{position:"relative"},children:(0,p.jsx)(u.M,{value:g,onChange:j,grammar:l.lA.parser,language:"cmp",disabled:f})}),(0,p.jsx)("div",{role:"tab",id:"test-tab-out","aria-controls":"test-tabpanel-out","aria-selected":"out"===T,children:(0,p.jsxs)("label",{children:[(0,p.jsx)("input",{type:"radio",name:"test-tabs","aria-controls":"test-tabpanel-out",value:"out",checked:"out"===T,onChange:()=>F("out")}),"Output File"]})}),(0,p.jsx)("div",{role:"tabpanel",id:"test-tabpanel-out","aria-labelledby":"test-tab-out",children:(0,p.jsx)(i.M,{cmp:g,out:b})})]})})}},5969:(e,t,s)=>{s.d(t,{j:()=>a});var n=s(2201);class a extends n.kG{dispatch;constructor(e,t){super(e,e.size,0),this.dispatch=t}async load(e,t){await super.load(e,t),this.dispatch.current({action:"update"})}}}}]);