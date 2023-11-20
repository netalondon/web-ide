"use strict";(self.webpackChunk_nand2tetris_web=self.webpackChunk_nand2tetris_web||[]).push([[255],{9811:(e,t,s)=>{s.r(t),s.d(t,{CPU:()=>w,default:()=>M});var a=s(8061),r=s(8923),n=s(2277),c=s(3052),i=s(9613),l=s(5838);const d=new Int16Array([2,55944,0,64528,15,54018,1,64528,2,61584,54024,0,64648,2,55943,15,55943]);var u=s(3389),o=s(6167),p=s(7559),h=s(8698);class x extends l.kG{dispatch;constructor(e,t){super(e,e.size,0),this.dispatch=t}async load(e,t){await super.load(e,t),this.dispatch.current({action:"update"})}}function b(e,t){const s=new x(e.cpu.RAM,t),a=new x(e.cpu.ROM,t),r=new x(e.cpu.Screen,t),n=new l.qT(new x(e.cpu.RAM,t));return{A:e.cpu.A,D:e.cpu.D,PC:e.cpu.PC,RAM:s,ROM:a,Screen:r,Keyboard:n}}function m(){const{fs:e,setStatus:t,storage:s}=(0,o.useContext)(h.r),a=(0,o.useRef)((()=>{})),{initialState:r,reducers:n,actions:c}=(0,o.useMemo)((()=>function(e,t,s,a){const r=new u.o6(new l.eD(d)),n={update(e){e.sim=b(r,a),e.test.highlight=r.currentStep?.span}},c={tick(){r.cpu.tick()},testStep(){r.step()},resetRAM(){r.cpu.RAM.loadBytes([]),a.current({action:"update"}),t("Reset RAM")},toggleUseTest(){a.current({action:"update"})},resetCPU(){r.reset(),a.current({action:"update"}),t("Reset CPU")},reset(){this.resetCPU(),t("Reset CPU & RAM")}};return{initialState:{sim:b(r,a),test:{highlight:r.currentStep?.span}},reducers:n,actions:c}}(0,t,0,a)),[e,t,s,a]),[i,x]=(0,p.C)(n,r);return a.current=x,{state:i,dispatch:a,actions:c}}var j=s(258),g=s(1124),C=s(8582),v=s(8365),k=s(9647),y=s(8016),f=s(1539),R=s(7878);const S=e=>{let{runner:t,tst:[s,r,n],cmp:[c,i],out:[l],disabled:d=!1}=e;const{fs:u,setStatus:p}=(0,o.useContext)(h.r),{filePicker:x,tracking:b}=(0,o.useContext)(y.Il),[m,S]=(0,o.useState)("tst"),w=(0,o.useCallback)((e=>{S(e),b.trackEvent("tab","change",e)}),[b]),M=(0,o.useCallback)((async()=>{try{const e=await x.select(),t=await u.readFile(e);r(t)}catch(e){console.error(e),p("Failed to load test")}}),[x,p,u]);return(0,R.jsx)(g.s,{className:"_test_panel",header:(0,R.jsxs)(R.Fragment,{children:[(0,R.jsx)("div",{className:"flex-0",children:(0,R.jsx)(a.cC,{id:"Test"})}),(0,R.jsx)("div",{className:"flex-1",children:t.current&&(0,R.jsx)(j.D,{runner:t.current})}),(0,R.jsx)("div",{children:(0,R.jsx)("fieldset",{role:"group",children:(0,R.jsx)("button",{onClick:M,children:"\ud83d\udcc2"})})})]}),children:(0,R.jsxs)("div",{role:"tablist",style:{"--tab-count":"3"},children:[(0,R.jsx)("div",{role:"tab",id:"test-tab-tst","aria-controls":"test-tabpanel-tst","aria-selected":"tst"===m,children:(0,R.jsxs)("label",{children:[(0,R.jsx)("input",{type:"radio",name:"test-tabs","aria-controls":"test-tabpanel-tst",value:"tst",checked:"tst"===m,onChange:()=>w("tst")}),"Test Script"]})}),(0,R.jsx)("div",{role:"tabpanel","aria-labelledby":"test-tab-tst",id:"test-tabpanel-tst",children:(0,R.jsx)(f.M,{value:s,onChange:r,grammar:k.qH.parser,language:"tst",highlight:n,disabled:d})}),(0,R.jsx)("div",{role:"tab",id:"test-tab-cmp","aria-controls":"test-tablpanel-cmp","aria-selected":"cmp"===m,children:(0,R.jsxs)("label",{children:[(0,R.jsx)("input",{type:"radio",name:"test-tabs","aria-controls":"test-tabpanel-cmp",value:"cmp",checked:"cmp"===m,onChange:()=>w("cmp")}),"Compare File"]})}),(0,R.jsx)("div",{role:"tabpanel","aria-labelledby":"test-tab-cmp",id:"test-tabpanel-cmp",style:{position:"relative"},children:(0,R.jsx)(f.M,{value:c,onChange:i,grammar:v.lA.parser,language:"cmp",disabled:d})}),(0,R.jsx)("div",{role:"tab",id:"test-tab-out","aria-controls":"test-tabpanel-out","aria-selected":"out"===m,children:(0,R.jsxs)("label",{children:[(0,R.jsx)("input",{type:"radio",name:"test-tabs","aria-controls":"test-tabpanel-out",value:"out",checked:"out"===m,onChange:()=>w("out")}),"Output File"]})}),(0,R.jsx)("div",{role:"tabpanel",id:"test-tabpanel-out","aria-labelledby":"test-tab-out",children:(0,R.jsx)(C.M,{cmp:c,out:l})})]})})},w=()=>{const{state:e,actions:t,dispatch:s}=m(),[l,d]=(0,o.useState)("repeat {\n\tticktock;\n}"),[u,p]=(0,o.useState)(""),[h,x]=(0,o.useState)(""),[b,C]=(0,o.useState)(null),[v,k]=(0,o.useState)(!0),y=(0,o.useRef)(),f=(0,o.useRef)(),[w,M]=(0,o.useState)(!1);(0,o.useEffect)((()=>(y.current=new class extends r.B{tick(){return t.tick(),!1}finishFrame(){s.current({action:"update"})}reset(){t.reset()}toggle(){s.current({action:"update"})}},f.current=new class extends r.B{tick(){return t.testStep(),!1}finishFrame(){s.current({action:"update"})}reset(){t.reset()}toggle(){s.current({action:"update"})}},M(!0),()=>{var e,t;null===(e=y.current)||void 0===e||e.stop(),null===(t=f.current)||void 0===t||t.stop()})),[t,s]);return(0,R.jsxs)("div",{className:"CpuPage grid",children:[(0,R.jsx)(c.ZP,{name:"ROM",displayEnabled:v,memory:e.sim.ROM,highlight:e.sim.PC,format:"asm",onUpload:e=>{C(e),t.reset()}}),(0,R.jsx)(c.ZP,{name:"RAM",displayEnabled:v,memory:e.sim.RAM,format:"hex"}),(0,R.jsxs)(g.s,{className:"IO",header:(0,R.jsxs)(R.Fragment,{children:[b&&(0,R.jsx)("div",{className:"flex-0",children:b}),(0,R.jsx)("div",{className:"flex-1",children:w&&y.current&&(0,R.jsx)(j.D,{runner:y.current})})]}),children:[(0,R.jsx)(i.l,{memory:e.sim.Screen}),(0,R.jsx)(n.N,{keyboard:e.sim.Keyboard}),(0,R.jsxs)("label",{children:[(0,R.jsx)("input",{type:"checkbox",role:"switch",checked:v,onChange:()=>{k(!v)}}),(0,R.jsx)(a.cC,{id:"{0}",values:{0:v?"Disable display":"Enable display"}})]}),v&&(0,R.jsx)("div",{children:(0,R.jsxs)("dl",{children:[(0,R.jsx)("dt",{children:"PC"}),(0,R.jsx)("dd",{children:e.sim.PC}),(0,R.jsx)("dt",{children:"A"}),(0,R.jsx)("dd",{children:e.sim.A}),(0,R.jsx)("dt",{children:"D"}),(0,R.jsx)("dd",{children:e.sim.D})]})})]}),w&&(0,R.jsx)(S,{runner:f,tst:[l,d,e.test.highlight],out:[u,p],cmp:[h,x]})]})},M=w}}]);
//# sourceMappingURL=255.c21e991d.chunk.js.map