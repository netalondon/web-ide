"use strict";(globalThis.webpackChunk_nand2tetris_web=globalThis.webpackChunk_nand2tetris_web||[]).push([[744],{5178:(e,t,s)=>{s.r(t),s.d(t,{CPU:()=>x,default:()=>j});var a=s(6458),n=s(1091),r=s(7437),c=s(64),i=s(4668),o=s(8878),l=s(1593),d=s(7022),u=s(910),m=s(8029),p=s(3600),h=s(5168),g=s(9267),f=s(782);const x=()=>{const{filePicker:e}=(0,o.useContext)(m.BR),{setTool:t,stores:s}=(0,o.useContext)(p.NQ),{state:x,actions:j,dispatch:C}=s.cpu,{fs:y}=(0,o.useContext)(u.L),[S,v]=(0,l.b)(x.test.tst),[b,k]=(0,l.b)(x.test.out),[F,w]=(0,l.b)(x.test.cmp),[P,T]=(0,o.useState)(),[A,R]=(0,o.useState)(0);(0,o.useEffect)((()=>{t("cpu")}),[t]),(0,o.useEffect)((()=>{j.compileTest(S,F,P),j.reset()}),[S,F,P]);const M=(0,o.useRef)(),N=(0,o.useRef)(),[_,E]=(0,o.useState)(!1);(0,o.useEffect)((()=>(M.current=new class extends n.M{async tick(){return j.tick(),!1}finishFrame(){C.current({action:"update"})}reset(){j.reset()}toggle(){C.current({action:"update"})}},N.current=new class extends n.M{async tick(){return j.testStep()}finishFrame(){C.current({action:"update"})}reset(){j.reset()}toggle(){C.current({action:"update"})}},E(!0),()=>{var e,t;null===(e=M.current)||void 0===e||e.stop(),null===(t=N.current)||void 0===t||t.stop()})),[j,C]);return(0,f.jsxs)("div",{className:"Page CpuPage grid "+(2==x.config.screenScale?"large-screen":"normal"),children:[(0,f.jsx)(c.Ay,{name:"ROM",memory:x.sim.ROM,highlight:x.sim.PC,format:x.config.romFormat,fileSelect:async()=>{var t;const s=await e.selectAllowLocal({suffix:[".asm",".hack"]}),a="string"==typeof s?null!==(t=s.split("/").pop())&&void 0!==t?t:"":s[0].name;var n;return C.current({action:"setTitle",payload:a}),"string"===typeof s?((async e=>{T(e),j.setPath(e),j.reset()})(s),{name:null!==(n=s.split("/").pop())&&void 0!==n?n:"",content:await y.readFile(s)}):(j.clearTest(),s[0])},onSetFormat:e=>{C.current({action:"updateConfig",payload:{romFormat:e}})},onClear:()=>j.clear(),loadTooltip:{value:"Load an .asm or .hack file",placement:"right"}}),(0,f.jsx)(c.Ay,{name:"RAM",memory:x.sim.RAM,format:x.config.ramFormat,excludedFormats:["asm"],onChange:()=>{R(A+1)},onSetFormat:e=>{C.current({action:"updateConfig",payload:{ramFormat:e}})}}),(0,f.jsxs)(h.Z,{className:"IO",header:(0,f.jsx)(f.Fragment,{children:(0,f.jsx)("div",{className:"flex-1",children:_&&M.current&&(0,f.jsx)(d.T,{runner:M.current,speed:x.config.speed,onSpeedChange:e=>{C.current({action:"updateConfig",payload:{speed:e}})}})})}),children:[(0,f.jsx)(i.f,{memory:x.sim.Screen,showScaleControls:!0,scale:x.config.screenScale,onScale:e=>{C.current({action:"updateConfig",payload:{screenScale:e}})}},A),(0,f.jsx)(r.s,{update:()=>{C.current({action:"update"})},keyboard:x.sim.Keyboard}),(0,f.jsx)(h.p,{summary:(0,f.jsx)(a.x6,{id:"rdShiY"}),open:!0,children:(0,f.jsx)("main",{children:(0,f.jsx)("div",{children:(0,f.jsxs)("dl",{children:[(0,f.jsx)("dt",{children:"PC"}),(0,f.jsx)("dd",{children:x.sim.PC}),(0,f.jsx)("dt",{children:"A"}),(0,f.jsx)("dd",{children:x.sim.A}),(0,f.jsx)("dt",{children:"D"}),(0,f.jsx)("dd",{children:x.sim.D})]})})})})]}),_&&(0,f.jsx)(g.B,{runner:N,tst:[S,v,x.test.highlight],out:[b,k],cmp:[F,w],setPath:T,tstName:x.test.name,disabled:!x.test.valid,showName:x.tests.length<2,speed:x.config.testSpeed,onSpeedChange:e=>{C.current({action:"updateConfig",payload:{testSpeed:e}}),j.setAnimate(e<=2)},prefix:x.tests.length>1?(0,f.jsx)("select",{value:x.test.name,onChange:({target:{value:e}})=>{j.loadTest(e)},"data-testid":"test-picker",children:x.tests.map((e=>(0,f.jsx)("option",{value:e,children:e},e)))}):(0,f.jsx)(f.Fragment,{})})]})},j=x}}]);