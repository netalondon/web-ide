"use strict";(self.webpackChunk_nand2tetris_web=self.webpackChunk_nand2tetris_web||[]).push([[493],{1293:(t,e,s)=>{s.r(e),s.d(e,{CPU:()=>M,default:()=>w});var n=s(5072),r=s(4619),i=s(3478),c=s(3577),a=s(8963),u=s(7054),o=s(2201),d=s(4430),l=s(1003);const p=new Int16Array([2,55944,0,64528,15,54018,1,64528,2,61584,54024,0,64648,2,55943,15,55943]);var m=s(6845),h=s(4913),f=s(6604),x=s(5692),S=s(5969);function g(t,e){const s=new S.j(t.cpu.RAM,e),n=new S.j(t.cpu.ROM,e),r=new S.j(t.cpu.Screen,e),i=new o.qT(new S.j(t.cpu.RAM,e));return{A:t.cpu.A,D:t.cpu.D,PC:t.cpu.PC,RAM:s,ROM:n,Screen:r,Keyboard:i}}function j(){const{fs:t,setStatus:e,storage:s}=(0,m.useContext)(x.r),n=(0,m.useRef)((()=>{})),{initialState:r,reducers:i,actions:c}=(0,m.useMemo)((()=>function(t,e,s,n){let r=new l.o(new o.eD(p)),i=!0,c=!0;const a={update(t){t.sim=g(r,n),t.test.highlight=r.currentStep?.span,t.test.valid=c},setTest(t,e){let{tst:s,cmp:n}=e;t.test.tst=s??t.test.tst,t.test.cmp=n??t.test.cmp,t.test.out=""},testStep(t){t.test.out=r.log(),this.update(t)},testFinished(t){if(""===t.test.cmp.trim())return;const s=(0,h.q)(t.test.cmp.trim(),r.log().trim());e(s?"Simulation successful: The output file is identical to the compare file":"Simulation error: The output file differs from the compare file")}},m={tick(){r.cpu.tick()},setAnimate(t){i=t},testStep(){const t=r.step();return(i||t)&&n.current({action:"testStep"}),t&&n.current({action:"testFinished"}),t},resetRAM(){r.cpu.RAM.loadBytes([]),n.current({action:"update"}),e("Reset RAM")},toggleUseTest(){n.current({action:"update"})},reset(){r.reset(),n.current({action:"setTest",payload:{}}),n.current({action:"update"})},compileTest(t,s){n.current({action:"setTest",payload:{tst:t,cmp:s}});const i=d.qH.parse(t);return(0,u.dZ)(i)?(e(`Failed to parse test - ${(0,u.UG)(i).message}`),c=!1,n.current({action:"update"}),!1):(c=!0,e("Parsed tst"),r=l.o.from((0,u.Ok)(i),r.cpu.ROM),n.current({action:"update"}),!0)}};return{initialState:{sim:g(r,n),test:{highlight:r.currentStep?.span,tst:"repeat {\n  ticktock;\n}",cmp:"",out:"",valid:!0}},reducers:a,actions:m}}(0,e,0,n)),[t,e,s,n]),[a,S]=(0,f.C)(i,r);return n.current=S,{state:a,dispatch:n,actions:c}}var y=s(6791),b=s(8722),R=s(8398),k=s(558),v=s(864);const M=()=>{const{state:t,actions:e,dispatch:s}=j(),{toolStates:u}=(0,m.useContext)(b.Il),[o,d]=(0,f.i)(t.test.tst),[l,p]=(0,f.i)(t.test.out),[h,x]=(0,f.i)(t.test.cmp),[S,g]=(0,m.useState)(),[M,w]=(0,m.useState)("asm"),[C,A]=(0,m.useState)(!0),[O,P]=(0,m.useState)(0);(0,m.useEffect)((()=>{u.cpuState.rom&&(t.sim.ROM.loadBytes(u.cpuState.rom),u.cpuState.name&&(g(u.cpuState.name),u.cpuState.name.endsWith(".hack")&&w("bin")))}),[]),(0,m.useEffect)((()=>{u.setCpuState(S,Array.from(t.sim.ROM.map(((t,e)=>e))))}),[t]),(0,m.useEffect)((()=>{e.compileTest(o,h),e.reset()}),[o,h]);const T=(0,m.useRef)(),D=(0,m.useRef)(),[E,F]=(0,m.useState)(!1);(0,m.useEffect)((()=>(T.current=new class extends r.B{async tick(){return e.tick(),!1}finishFrame(){s.current({action:"update"})}reset(){e.reset()}toggle(){s.current({action:"update"})}},D.current=new class extends r.B{async tick(){return e.testStep()}finishFrame(){s.current({action:"update"})}reset(){e.reset()}toggle(){s.current({action:"update"})}},F(!0),()=>{var t,e;null===(t=T.current)||void 0===t||t.stop(),null===(e=D.current)||void 0===e||e.stop()})),[e,s]);return(0,v.jsxs)("div",{className:"Page CpuPage grid",children:[(0,v.jsx)(c.ZP,{name:"ROM",displayEnabled:C,memory:t.sim.ROM,highlight:t.sim.PC,format:M,onUpload:t=>{g(t),e.reset()}}),(0,v.jsx)(c.ZP,{name:"RAM",displayEnabled:C,memory:t.sim.RAM,format:"hex",onChange:()=>{P(O+1)}}),(0,v.jsxs)(R.s,{className:"IO",header:(0,v.jsxs)(v.Fragment,{children:[S&&(0,v.jsx)("div",{className:"flex-0",children:S}),(0,v.jsx)("div",{className:"flex-1",children:E&&T.current&&(0,v.jsx)(y.D,{runner:T.current})})]}),children:[(0,v.jsx)(a.l,{memory:t.sim.Screen},O),(0,v.jsx)(i.N,{update:()=>{s.current({action:"update"})},keyboard:t.sim.Keyboard}),(0,v.jsxs)("label",{children:[(0,v.jsx)("input",{type:"checkbox",role:"switch",checked:C,onChange:()=>{A(!C)}}),(0,v.jsx)(n.cC,{id:"{0}",values:{0:C?"Disable display":"Enable display"}})]}),C&&(0,v.jsx)("div",{children:(0,v.jsxs)("dl",{children:[(0,v.jsx)("dt",{children:"PC"}),(0,v.jsx)("dd",{children:t.sim.PC}),(0,v.jsx)("dt",{children:"A"}),(0,v.jsx)("dd",{children:t.sim.A}),(0,v.jsx)("dt",{children:"D"}),(0,v.jsx)("dd",{children:t.sim.D})]})})]}),E&&(0,v.jsx)(k.F,{runner:D,tst:[o,d,t.test.highlight],out:[l,p],cmp:[h,x],disabled:!t.test.valid,onSpeedChange:t=>{e.setAnimate(t<=2)}})]})},w=M},5969:(t,e,s)=>{s.d(e,{j:()=>r});var n=s(2201);class r extends n.kG{dispatch;constructor(t,e){super(t,t.size,0),this.dispatch=e}async load(t,e){await super.load(t,e),this.dispatch.current({action:"update"})}}},554:(t,e,s)=>{s.d(e,{j:()=>n});const n=t=>{if((t=>"function"===typeof t?.toString||"string"===typeof t)(t)){const e=t.toString();return"[object Object]"===e?JSON.stringify(t):e}return JSON.stringify(t)}},2936:(t,e,s)=>{s.d(e,{b:()=>r});var n=s(5251);function r(t,e){return void 0===t&&void 0!==n.BM[e]&&(t=e),{..."inline"===e?{display:"inline-block"}:{},width:n.BM[t]??"0"}}}}]);