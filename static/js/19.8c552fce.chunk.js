"use strict";(globalThis.webpackChunk_nand2tetris_web=globalThis.webpackChunk_nand2tetris_web||[]).push([[19],{445:(t,e,s)=>{s.r(e),s.d(e,{CPU:()=>M,default:()=>k});var a=s(4621),n=s(1091),c=s(7437),r=s(64),i=s(4668),o=s(5874),u=s(7076),l=s(6554),p=s(6418),d=s(8878),m=s(7365),h=s(1296),f=s(8177),g=s(3761),x=s(4256);function S(t,e){const s=new x.X(t.cpu.RAM,e),a=new x.X(t.cpu.ROM,e),n=new x.X(t.cpu.Screen,e),c=new u.PC(new x.X(t.cpu.RAM,e));return{A:t.cpu.A,D:t.cpu.D,PC:t.cpu.PC,RAM:s,ROM:a,Screen:n,Keyboard:c}}function j(){const{fs:t,setStatus:e,storage:s}=(0,d.useContext)(g.L),a=(0,d.useRef)((()=>{})),{initialState:n,reducers:c,actions:r}=(0,d.useMemo)((()=>function(t,e,s,a){let n=new p.b,c=!0,r=!0,i="",u=[],d="";const f={update(t){t.sim=S(n,a),t.test.highlight=n.currentStep?.span,t.test.valid=r,t.path=i,t.tests=Array.from(u),t.test.name=d},setTest(t,{tst:e,cmp:s}){t.test.tst=e??t.test.tst,t.test.cmp=s??t.test.cmp,t.test.out=""},testStep(t){t.test.out=n.log(),this.update(t)},testFinished(t){if(""===t.test.cmp.trim())return;const s=(0,m.U)(t.test.cmp.trim(),n.log().trim());e(s?"Simulation successful: The output file is identical to the compare file":"Simulation error: The output file differs from the compare file")},replaceROM(t,e){n=new p.b(e),n.reset(),this.update(t)}},g={tick(){n.cpu.tick()},setAnimate(t){c=t},async setPath(e){i=e;const s=i.split("/").slice(0,-1).join("/"),n=await t.scandir(s);u=n.filter((t=>t.name.endsWith(".tst"))).map((t=>t.name)),u.length>0?this.loadTest(u[0]):(d="Default",this.compileTest("repeat {\n  ticktock;\n}","")),a.current({action:"update"})},async testStep(){const t=await n.step();return(c||t)&&a.current({action:"testStep"}),t&&a.current({action:"testFinished"}),t},resetRAM(){n.cpu.RAM.loadBytes([]),a.current({action:"update"}),e("Reset RAM")},toggleUseTest(){a.current({action:"update"})},reset(){n.reset(),a.current({action:"setTest",payload:{}}),a.current({action:"update"})},compileTest(t,s){a.current({action:"setTest",payload:{tst:t,cmp:s}});const c=l.uG.parse(t);return(0,o.ys)(c)?(e(`Failed to parse test - ${(0,o._)(c).message}`),r=!1,a.current({action:"update"}),!1):(r=!0,n=p.b.from((0,o.Ok)(c),n.cpu.ROM),a.current({action:"update"}),!0)},async loadTest(s){const a=i.split("/").slice(0,-1).join("/"),n=await(0,h.g)(t,`${a}/${s}`);if((0,o.ys)(n))return void e("Failed to load test");d=s;const{tst:c,cmp:r}=(0,o.oA)(n);this.compileTest(c,r??"")}};return{initialState:{sim:S(n,a),test:{highlight:n.currentStep?.span,name:"",tst:"repeat {\n  ticktock;\n}",cmp:"",out:"",valid:!0},path:"",tests:[]},reducers:f,actions:g}}(t,e,0,a)),[t,e,s,a]),[i,u]=(0,f.A)(c,n);return a.current=u,{state:i,dispatch:a,actions:r}}var y=s(7022),R=s(8029),w=s(4280),v=s(9267),A=s(782);const M=()=>{const{state:t,actions:e,dispatch:s}=j(),{toolStates:o,filePicker:u,setTitle:l}=(0,d.useContext)(R.BR),[p,m]=(0,f.b)(t.test.tst),[h,g]=(0,f.b)(t.test.out),[x,S]=(0,f.b)(t.test.cmp),[M,k]=(0,d.useState)(),[C,T]=(0,d.useState)("asm"),[b,P]=(0,d.useState)(0);(0,d.useEffect)((()=>{if(o.cpuState.rom&&(s.current({action:"replaceROM",payload:o.cpuState.rom}),T(o.cpuState.format),o.cpuState.path)){var t;const e=null!==(t=o.cpuState.path.split("/").pop())&&void 0!==t?t:"";l(e),k(e),X(o.cpuState.path)}}),[]),(0,d.useEffect)((()=>{o.setCpuState(M,t.sim.ROM,C)})),(0,d.useEffect)((()=>{e.compileTest(p,x),e.reset()}),[p,x]);const O=(0,d.useRef)(),F=(0,d.useRef)(),[N,D]=(0,d.useState)(!1);(0,d.useEffect)((()=>(O.current=new class extends n.M{async tick(){return e.tick(),!1}finishFrame(){s.current({action:"update"})}reset(){e.reset()}toggle(){s.current({action:"update"})}},F.current=new class extends n.M{async tick(){return e.testStep()}finishFrame(){s.current({action:"update"})}reset(){e.reset()}toggle(){s.current({action:"update"})}},D(!0),()=>{var t,e;null===(t=O.current)||void 0===t||t.stop(),null===(e=F.current)||void 0===e||e.stop()})),[e,s]);const X=async t=>{var s;const a=null!==(s=t.split("/").pop())&&void 0!==s?s:"";k(a),l(a),e.setPath(t),e.reset()},[_,E]=(0,d.useState)(1);return(0,A.jsxs)("div",{className:"Page CpuPage grid "+(2==_?"large-screen":"normal"),children:[(0,A.jsx)(r.Ay,{name:"ROM",memory:t.sim.ROM,highlight:t.sim.PC,format:C,onUpload:X,fileSelect:async()=>await u.select([".asm",".hack"])}),(0,A.jsx)(r.Ay,{name:"RAM",memory:t.sim.RAM,format:"dec",excludedFormats:["asm"],onChange:()=>{P(b+1)}}),(0,A.jsxs)(w.Z,{className:"IO",header:(0,A.jsx)(A.Fragment,{children:(0,A.jsx)("div",{className:"flex-1",children:N&&O.current&&(0,A.jsx)(y.T,{runner:O.current})})}),children:[(0,A.jsx)(i.f,{memory:t.sim.Screen,showScaleControls:!0,onScale:t=>{E(t)}},b),(0,A.jsx)(c.s,{update:()=>{s.current({action:"update"})},keyboard:t.sim.Keyboard}),(0,A.jsx)(w.p,{summary:(0,A.jsx)(a.x6,{id:"Registers"}),open:!0,children:(0,A.jsx)("main",{children:(0,A.jsx)("div",{children:(0,A.jsxs)("dl",{children:[(0,A.jsx)("dt",{children:"PC"}),(0,A.jsx)("dd",{children:t.sim.PC}),(0,A.jsx)("dt",{children:"A"}),(0,A.jsx)("dd",{children:t.sim.A}),(0,A.jsx)("dt",{children:"D"}),(0,A.jsx)("dd",{children:t.sim.D})]})})})})]}),N&&(0,A.jsx)(v.B,{runner:F,tst:[p,m,t.test.highlight],out:[h,g],cmp:[x,S],tstName:t.test.name,disabled:!t.test.valid,showLoad:!1,showName:t.tests.length<2,onSpeedChange:t=>{e.setAnimate(t<=2)},prefix:t.tests.length>1?(0,A.jsx)("select",{value:t.test.name,onChange:({target:{value:t}})=>{e.loadTest(t)},"data-testid":"test-picker",children:t.tests.map((t=>(0,A.jsx)("option",{value:t,children:t},t)))}):(0,A.jsx)(A.Fragment,{})})]})},k=M},4256:(t,e,s)=>{s.d(e,{X:()=>n});var a=s(7076);class n extends a.qN{dispatch;constructor(t,e){super(t,t.size,0),this.dispatch=e}async load(t,e){await super.load(t,e),this.dispatch.current({action:"update"})}}}}]);