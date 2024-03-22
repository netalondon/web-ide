"use strict";(globalThis.webpackChunk_nand2tetris_web=globalThis.webpackChunk_nand2tetris_web||[]).push([[457],{8215:(t,e,s)=>{s.r(e),s.d(e,{CPU:()=>A,default:()=>k});var a=s(4621),n=s(1091),r=s(7437),c=s(64),i=s(4668),u=s(5874),o=s(7076),d=s(6554),l=s(6418),p=s(8878),m=s(7365),h=s(8177),f=s(3761),x=s(4256);function S(t,e){const s=new x.X(t.cpu.RAM,e),a=new x.X(t.cpu.ROM,e),n=new x.X(t.cpu.Screen,e),r=new o.PC(new x.X(t.cpu.RAM,e));return{A:t.cpu.A,D:t.cpu.D,PC:t.cpu.PC,RAM:s,ROM:a,Screen:n,Keyboard:r}}function g(){const{fs:t,setStatus:e,storage:s}=(0,p.useContext)(f.L),a=(0,p.useRef)((()=>{})),{initialState:n,reducers:r,actions:c}=(0,p.useMemo)((()=>function(t,e,s,a){let n=new l.b,r=!0,c=!0;const i={update(t){t.sim=S(n,a),t.test.highlight=n.currentStep?.span,t.test.valid=c},setTest(t,{tst:e,cmp:s}){t.test.tst=e??t.test.tst,t.test.cmp=s??t.test.cmp,t.test.out=""},testStep(t){t.test.out=n.log(),this.update(t)},testFinished(t){if(""===t.test.cmp.trim())return;const s=(0,m.U)(t.test.cmp.trim(),n.log().trim());e(s?"Simulation successful: The output file is identical to the compare file":"Simulation error: The output file differs from the compare file")},replaceROM(t,e){n=new l.b(e),n.reset(),this.update(t)}},o={tick(){n.cpu.tick()},setAnimate(t){r=t},async testStep(){const t=await n.step();return(r||t)&&a.current({action:"testStep"}),t&&a.current({action:"testFinished"}),t},resetRAM(){n.cpu.RAM.loadBytes([]),a.current({action:"update"}),e("Reset RAM")},toggleUseTest(){a.current({action:"update"})},reset(){n.reset(),a.current({action:"setTest",payload:{}}),a.current({action:"update"})},compileTest(t,s){a.current({action:"setTest",payload:{tst:t,cmp:s}});const r=d.uG.parse(t);return(0,u.ys)(r)?(e(`Failed to parse test - ${(0,u._)(r).message}`),c=!1,a.current({action:"update"}),!1):(c=!0,n=l.b.from((0,u.Ok)(r),n.cpu.ROM),a.current({action:"update"}),!0)}};return{initialState:{sim:S(n,a),test:{highlight:n.currentStep?.span,tst:"repeat {\n  ticktock;\n}",cmp:"",out:"",valid:!0}},reducers:i,actions:o}}(0,e,0,a)),[t,e,s,a]),[i,o]=(0,h.A)(r,n);return a.current=o,{state:i,dispatch:a,actions:c}}var y=s(7022);const b=new Int16Array([2,55944,0,64528,15,54018,1,64528,2,61584,54024,0,64648,2,55943,15,55943]);var R=s(8029),j=s(4280),M=s(9267),w=s(782);const A=()=>{const{state:t,actions:e,dispatch:s}=g(),{toolStates:u,filePicker:o,setTitle:d}=(0,p.useContext)(R.BR),[l,m]=(0,h.b)(t.test.tst),[f,x]=(0,h.b)(t.test.out),[S,A]=(0,h.b)(t.test.cmp),[k,C]=(0,p.useState)(),[v,T]=(0,p.useState)("asm"),[O,P]=(0,p.useState)(!0),[E,F]=(0,p.useState)(0);(0,p.useEffect)((()=>{u.cpuState.rom?(s.current({action:"replaceROM",payload:u.cpuState.rom}),u.cpuState.name&&(d(u.cpuState.name),C(u.cpuState.name),u.cpuState.name.endsWith(".hack")&&T("bin"))):t.sim.ROM.loadBytes(Array.from(b))}),[]),(0,p.useEffect)((()=>{u.setCpuState(k,t.sim.ROM)})),(0,p.useEffect)((()=>{e.compileTest(l,S),e.reset()}),[l,S]);const D=(0,p.useRef)(),N=(0,p.useRef)(),[X,_]=(0,p.useState)(!1);(0,p.useEffect)((()=>(D.current=new class extends n.M{async tick(){return e.tick(),!1}finishFrame(){s.current({action:"update"})}reset(){e.reset()}toggle(){s.current({action:"update"})}},N.current=new class extends n.M{async tick(){return e.testStep()}finishFrame(){s.current({action:"update"})}reset(){e.reset()}toggle(){s.current({action:"update"})}},_(!0),()=>{var t,e;null===(t=D.current)||void 0===t||t.stop(),null===(e=N.current)||void 0===e||e.stop()})),[e,s]);return(0,w.jsxs)("div",{className:"Page CpuPage grid",children:[(0,w.jsx)(c.Ay,{name:"ROM",displayEnabled:O,memory:t.sim.ROM,highlight:t.sim.PC,format:v,onUpload:t=>{C(t),d(t),e.reset()},fileSelect:async()=>await o.select([".asm",",hack"])}),(0,w.jsx)(c.Ay,{name:"RAM",displayEnabled:O,memory:t.sim.RAM,format:"hex",onChange:()=>{F(E+1)}}),(0,w.jsxs)(j.Z,{className:"IO",header:(0,w.jsx)(w.Fragment,{children:(0,w.jsx)("div",{className:"flex-1",children:X&&D.current&&(0,w.jsx)(y.T,{runner:D.current})})}),children:[(0,w.jsx)(i.f,{memory:t.sim.Screen},E),(0,w.jsx)(r.s,{update:()=>{s.current({action:"update"})},keyboard:t.sim.Keyboard}),(0,w.jsxs)("label",{children:[(0,w.jsx)("input",{type:"checkbox",role:"switch",checked:O,onChange:()=>{P(!O)}}),(0,w.jsx)(a.x6,{id:"{0}",values:{0:O?"Disable display":"Enable display"}})]}),O&&(0,w.jsx)("div",{children:(0,w.jsxs)("dl",{children:[(0,w.jsx)("dt",{children:"PC"}),(0,w.jsx)("dd",{children:t.sim.PC}),(0,w.jsx)("dt",{children:"A"}),(0,w.jsx)("dd",{children:t.sim.A}),(0,w.jsx)("dt",{children:"D"}),(0,w.jsx)("dd",{children:t.sim.D})]})})]}),X&&(0,w.jsx)(M.B,{runner:N,tst:[l,m,t.test.highlight],out:[f,x],cmp:[S,A],disabled:!t.test.valid,showName:!0,onSpeedChange:t=>{e.setAnimate(t<=2)}})]})},k=A},4256:(t,e,s)=>{s.d(e,{X:()=>n});var a=s(7076);class n extends a.qN{dispatch;constructor(t,e){super(t,t.size,0),this.dispatch=e}async load(t,e){await super.load(t,e),this.dispatch.current({action:"update"})}}}}]);