"use strict";(globalThis.webpackChunk_nand2tetris_web=globalThis.webpackChunk_nand2tetris_web||[]).push([[34],{1496:(e,s,t)=>{t.r(s),t.d(s,{default:()=>E});var n=t(6458),i=t(8256),a=t(8878),r=t(7437),o=t(64),l=t(4668),d=t(1593),c=t(7022),u=t(910),m=t(8849),h=t(1091),f=t(270),v=t(5087),p=t(8029),_=t(3600),x=t(2675),g=t(5168),S=t(9267),R=t(782);const j={[f.X.SYS_WAIT_DURATION_NOT_POSITIVE]:i.Ru._({id:"9dwWEz"}),[f.X.ARRAY_SIZE_NOT_POSITIVE]:i.Ru._({id:"zh5lcC"}),[f.X.DIVIDE_BY_ZERO]:i.Ru._({id:"iGq+of"}),[f.X.SQRT_NEG]:i.Ru._({id:"RsyXWz"}),[f.X.ALLOC_SIZE_NOT_POSITIVE]:i.Ru._({id:"Pza0F/"}),[f.X.HEAP_OVERFLOW]:i.Ru._({id:"EqbNAN"}),[f.X.ILLEGAL_PIXEL_COORD]:i.Ru._({id:"Lo+J/U"}),[f.X.ILLEGAL_LINE_COORD]:i.Ru._({id:"y4CC1u"}),[f.X.ILLEGAL_RECT_COORD]:i.Ru._({id:"5tI3XX"}),[f.X.ILLEGAL_CENTER_COORD]:i.Ru._({id:"SLzG45"}),[f.X.ILLEGAL_RADIUS]:i.Ru._({id:"ijwovO"}),[f.X.STRING_LENGTH_NEG]:i.Ru._({id:"etZuY4"}),[f.X.GET_CHAR_INDEX_OUT_OF_BOUNDS]:i.Ru._({id:"GbPVvk"}),[f.X.SET_CHAR_INDEX_OUT_OF_BOUNDS]:i.Ru._({id:"IgLZZI"}),[f.X.STRING_FULL]:i.Ru._({id:"CACwfm"}),[f.X.STRING_EMPTY]:i.Ru._({id:"RE1zuN"}),[f.X.STRING_INSUFFICIENT_CAPACITY]:i.Ru._({id:"fkP0ib"}),[f.X.ILLEGAL_CURSOR_LOCATION]:i.Ru._({id:"EQU4AC"})},E=()=>{const{filePicker:e}=(0,a.useContext)(p.BR),{setTool:s,stores:t}=(0,a.useContext)(_.NQ),{state:i,actions:v,dispatch:E}=t.vm,{setStatus:T,fs:C}=(0,a.useContext)(u.L),[A,N]=(0,d.b)(i.files.tst),[O,P]=(0,d.b)(i.files.out),[y,w]=(0,d.b)(i.files.cmp),[X,k]=(0,a.useState)();(0,a.useEffect)((()=>{s("vm")}),[s]),(0,a.useEffect)((()=>{X&&(v.loadTest(X,A),v.reset())}),[A,X]),(0,a.useEffect)((()=>{void 0!==i.controls.exitCode&&T(0==i.controls.exitCode?"Program halted":`Program exited with error code ${i.controls.exitCode}${(0,f.U)(i.controls.exitCode)?`: ${j[i.controls.exitCode]}`:""}`)}),[i.controls.exitCode]);const F=(0,a.useRef)(),b=(0,a.useRef)(),[G,M]=(0,a.useState)(!1);(0,a.useEffect)((()=>(F.current=new class extends h.M{async tick(){return v.step()}finishFrame(){E.current({action:"update"})}reset(){T("Reset"),v.reset()}toggle(){v.setPaused(!this.running),E.current({action:"update"})}},b.current=new class extends h.M{async tick(){return v.testStep()}finishFrame(){E.current({action:"update"})}reset(){T("Reset"),v.reset()}toggle(){v.setPaused(!this.running),E.current({action:"update"})}},M(!0),()=>{var e,s;null===(e=F.current)||void 0===e||e.stop(),null===(s=b.current)||void 0===s||s.stop()})),[v,E]);const $=async e=>{let s="";if(e.includes("."))s=e.replace(".vm","VME.tst");else{var t;s=`${e}/${null===(t=(await C.scandir(e)).find((e=>e.isFile()&&e.name.endsWith("VME.tst"))))||void 0===t?void 0:t.name}`}const n=await C.readFile(s);v.loadTest(s,n)},U=(e,s)=>{E.current({action:"updateConfig",payload:s?{testSpeed:e}:{speed:e}}),v.setAnimate(e<=2)},D=(0,a.useRef)();return(0,R.jsxs)("div",{className:"Page VmPage grid "+(0==i.config.screenScale?"no-screen":2==i.config.screenScale?"large-screen":"normal"),children:[(0,R.jsx)(g.Z,{className:"program",isEditorPanel:!0,header:(0,R.jsxs)(R.Fragment,{children:[(0,R.jsx)("div",{className:"flex-0",style:{whiteSpace:"nowrap"},children:(0,R.jsx)(n.x6,{id:"1qK+lw"})}),(0,R.jsx)("div",{className:"flex-1",children:G&&F.current&&(0,R.jsx)(c.T,{prefix:(0,R.jsx)("button",{className:"flex-0",onClick:async()=>{const s=await e.selectAllowLocal({suffix:"vm",allowFolders:!0});let t=[],n="";if("string"==typeof s){if(s.includes(".")){var i;t.push({name:s.replace(".vm",""),content:await C.readFile(s)}),n=null!==(i=s.split("/").pop())&&void 0!==i?i:""}else{for(const e of(await C.scandir(s)).filter((e=>e.isFile()&&e.name.endsWith(".vm"))))t.push({name:e.name.replace(".vm",""),content:await C.readFile(`${s}/${e.name}`)});n=`${s.split("/").pop()} / *.vm`}$(s)}else t=s.filter((e=>e.name.endsWith(".vm")));0!=t.length&&(E.current({action:"setTitle",payload:n}),v.loadVm(t),v.reset(),T(""))},"data-tooltip":"Load files","data-placement":"bottom",children:"\ud83d\udcc2"}),runner:F.current,disabled:!i.controls.valid,speed:i.config.speed,onSpeedChange:e=>U(e,!1)})})]}),children:(0,R.jsx)(x.K,{value:i.files.vm,onChange:e=>{v.setVm(e)},language:"vm",highlight:i.controls.valid&&i.vm.showHighlight?i.vm.highlight:void 0,error:i.controls.error})}),(0,R.jsx)(g.Z,{className:"vm",header:(0,R.jsx)(n.x6,{id:"2BSTzk"}),children:i.controls.valid&&i.vm.Stack.length>0&&(0,R.jsxs)(R.Fragment,{children:[(0,R.jsx)(L,{statics:i.vm.Statics,temp:i.vm.Temp,frame:i.vm.Stack[0]}),(0,R.jsx)(I,{stack:i.vm.Stack,addedSysInit:i.vm.AddedSysInit})]})}),(0,R.jsxs)(g.Z,{className:"display",style:{gridArea:"display"},children:[(0,R.jsx)(l.f,{memory:i.vm.Screen,showScaleControls:!0,scale:i.config.screenScale,onScale:e=>{E.current({action:"updateConfig",payload:{screenScale:e}})}}),(0,R.jsx)(r.s,{keyboard:i.vm.Keyboard})]}),(0,R.jsx)(o.Ay,{ref:D,name:"RAM",memory:i.vm.RAM,initialAddr:256,format:i.config.ram1Format,onSetFormat:e=>{E.current({action:"updateConfig",payload:{ram1Format:e}})},showClear:!1}),(0,R.jsx)(o.Ay,{name:"RAM",className:"Stack",memory:i.vm.RAM,format:i.config.ram2Format,onSetFormat:e=>{E.current({action:"updateConfig",payload:{ram2Format:e}})},cellLabels:["SP:","LCL:","ARG:","THIS:","THAT:","TEMP0:","TEMP1:","TEMP2:","TEMP3:","TEMP4:","TEMP5:","TEMP6:","TEMP7:","R13:","R14:","R15:"],onChange:()=>{var e;null===(e=D.current)||void 0===e||e.rerender()}}),G&&(0,R.jsx)(S.B,{runner:b,tst:[A,N,i.test.highlight],out:[O,P],cmp:[y,w],setPath:k,showClear:!0,defaultTst:m.$,speed:i.config.testSpeed,onSpeedChange:e=>U(e,!0),disabled:!i.controls.valid})]})},T="Unknown function";function C(e,s){const t={};e=e.filter((e=>{var s;return(null===(s=e.fn)||void 0===s?void 0:s.name)!=v.IG}));for(const i of e)i.fn&&(t[i.fn.name]?t[i.fn.name]++:t[i.fn.name]=1);const n=e.slice().reverse().map((e=>{var t,n,i;return(null===(t=e.fn)||void 0===t?void 0:t.name)==v.h0.name?s?`${v.h0.name} (built-in)`:v.h0.name:null!==(n=null===(i=e.fn)||void 0===i?void 0:i.name)&&void 0!==n?n:T}));for(const i of Object.keys(t))if(1!=t[i]){t[i]=0;for(let e=0;e<n.length;e++)n[e]===i&&(n[e]=`${i}[${t[i]}]`,t[i]++)}return n}function I({stack:e,addedSysInit:s}){return(0,R.jsx)("section",{children:(0,R.jsxs)("p",{children:["Call-stack:",(0,R.jsx)("code",{children:C(e,s).join(" > ")})]})})}function L({statics:e,temp:s,frame:t}){var n,i,a,r,o,l,d;return(0,R.jsx)("section",{children:(0,R.jsxs)("main",{children:[(0,R.jsxs)("p",{children:["Stack:",(0,R.jsxs)("code",{children:["[",t.stack.values.join(", "),"]"]})]}),(null===(n=t.usedSegments)||void 0===n?void 0:n.has("local"))&&(0,R.jsxs)("p",{children:["local:",(0,R.jsxs)("code",{children:["[",t.locals.values.join(", "),"]"]})]}),(null===(i=t.usedSegments)||void 0===i?void 0:i.has("argument"))&&(0,R.jsxs)("p",{children:["argument:",(0,R.jsxs)("code",{children:["[",t.args.values.join(", "),"]"]})]}),(null===(a=t.usedSegments)||void 0===a?void 0:a.has("static"))&&(0,R.jsxs)("p",{children:["static:",(0,R.jsxs)("code",{children:["[",e.join(", "),"]"]})]}),(null===(r=t.usedSegments)||void 0===r?void 0:r.has("pointer"))&&(0,R.jsxs)("p",{children:["pointer:",(0,R.jsxs)("code",{children:["[",`${t.frame.THIS}, ${t.frame.THAT}`,"]"]})]}),(null===(o=t.usedSegments)||void 0===o?void 0:o.has("this"))&&(0,R.jsxs)("p",{children:["this:",(0,R.jsxs)("code",{children:["[",t.this.values.join(", "),"]"]})]}),(null===(l=t.usedSegments)||void 0===l?void 0:l.has("that"))&&(0,R.jsxs)("p",{children:["that:",(0,R.jsxs)("code",{children:["[",t.that.values.join(", "),"]"]})]}),(null===(d=t.usedSegments)||void 0===d?void 0:d.has("temp"))&&(0,R.jsxs)("p",{children:["temp:",(0,R.jsxs)("code",{children:["[",s.join(", "),"]"]})]})]})})}}}]);