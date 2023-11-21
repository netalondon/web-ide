"use strict";(self.webpackChunk_nand2tetris_web=self.webpackChunk_nand2tetris_web||[]).push([[876],{3530:(t,e,s)=>{s.r(e),s.d(e,{Chip:()=>it,default:()=>nt});var i=s(8061),n=s(6167),a=s(7878),l=s(3300),r=s(3118),o=s(7039),c=s(3116),d=s(6329),p=s(6693),h=s(134);const u=t=>{let{A:e,op:s,D:i,out:n,flag:l}=t;return(0,a.jsxs)("div",{children:[(0,a.jsx)("span",{children:"ALU"}),(0,a.jsx)("svg",{width:"250",height:"250",xmlns:"http://www.w3.org/2000/svg",children:(0,a.jsxs)("g",{children:[(0,a.jsx)("rect",{x:"1",y:"20",height:"85",width:"70",fill:"black"}),(0,a.jsx)("rect",{x:"1",y:"145",height:"85",width:"70",fill:"black"}),(0,a.jsx)("rect",{x:"180",y:"95",height:"60",width:"70",fill:"black"}),(0,a.jsx)("polygon",{points:"70,10 180,85 180,165 70,240 70,135 90,125 70,115",stroke:"#000",fill:"#6D97AB"}),(0,a.jsx)("text",{xmlSpace:"preserve",textAnchor:"middle",fontFamily:"Noto Sans JP",fontSize:"14",strokeWidth:"0",id:"svg_9",y:"63",x:"35",stroke:"white",fill:"#ffffff",children:e}),(0,a.jsx)("text",{xmlSpace:"preserve",textAnchor:"middle",fontFamily:"Noto Sans JP",fontSize:"14",id:"svg_10",y:"188",x:"35",strokeWidth:"0",stroke:"white",fill:"#ffffff",children:i}),(0,a.jsx)("text",{xmlSpace:"preserve",textAnchor:"middle",fontFamily:"Noto Sans JP",fontSize:"14",id:"svg_11",y:"125",x:"215",strokeWidth:"0",stroke:"white",fill:"#ffffff",children:n}),(0,a.jsx)("text",{xmlSpace:"preserve",textAnchor:"middle",fontFamily:"Noto Sans JP",fontSize:"14",id:"svg_13",y:"125",x:"135",strokeWidth:"0",stroke:"white",fill:"#ffffff",children:p.NM.op[s]??"(??)"})]})})]})};var m=s(2277),f=s(3052),g=s(6830),x=s(9613);function b(t,e){if(t instanceof r.JU)return(0,a.jsx)(u,{A:t.in("x").busVoltage,op:t.op(),D:t.in("y").busVoltage,out:t.out().busVoltage,flag:t.out("zr").voltage()===d.lj?p.vU.Zero:t.out("ng").voltage()===d.lj?p.vU.Negative:p.vU.Positive});if(t instanceof o.aX)return(0,a.jsx)(g.y,{name:t.name??`Chip ${t.id}`,bits:t.bits});if(t instanceof o.PC)return(0,a.jsx)(g.y,{name:"PC",bits:t.bits});if(t instanceof l.N1)return(0,a.jsx)(m.N,{keyboard:t,update:e});if(t instanceof l.lL)return(0,a.jsx)(x.l,{memory:t.memory});if(t instanceof c.FH)return(0,a.jsx)(f.zp,{name:t.name,memory:t.memory,format:t instanceof l.m1?"asm":"dec",highlight:t.address});if(t instanceof c.HX)return(0,a.jsxs)("span",{children:["RAM ",t.width]});if(t instanceof l.Z9){const e=(0,h.Jx)(t.in("instruction").busVoltage);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(g.y,{name:"A",bits:t.state.A}),(0,a.jsx)(g.y,{name:"D",bits:t.state.D}),(0,a.jsx)(g.y,{name:"PC",bits:t.state.PC}),(0,a.jsx)(u,{A:e.am?t.in("inM").busVoltage:t.state.A,D:t.state.D,out:t.state.ALU,op:e.op,flag:t.state.flag})]})}const s=[...t.parts].map((t=>b(t,e))).filter((t=>void 0!==t));return s.length>0?(0,a.jsx)(a.Fragment,{children:s}):void 0}var j=s(7030),v=s(8582),C=s(1585),y=s(4625);class k{signBehaviors=new Map;constructor(t,e){if(r.zZ.has(t)){const s=(0,r.cT)(t);if((0,y.IY)(s)){const t=Array.from((0,y.Ok)(s).ins.entries()).concat(Array.from((0,y.Ok)(s).outs.entries()));for(const s of t)this.signBehaviors.set(s.name,!e||!e.includes(s.name))}}}isSigned(t){return this.signBehaviors.get(t)}}const w=new Map([["Mux4Way16",["sel"]],["Mux8Way16",["sel"]],["DMux4Way",["sel"]],["DMux8Way",["sel"]],["RAM8",["address"]],["RAM64",["address"]],["RAM512",["address"]],["RAM4K",["address"]],["RAM16K",["address"]],["Screen",["address"]],["Memory",["address"]],["CPU",["addressM","pc"]]]),P=(0,n.createContext)({});function S(t){return{pin:t,bits:(0,C.w)(0,t.width).map((e=>[e,t.voltage(e)])).reverse()}}function F(t){return[...t.entries()].map(S)}const I=t=>{const{inPins:e,outPins:s,internalPins:i}=t.sim,n=(l=t.sim.chip[0].name??"",new k(l,w.get(l)));var l;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("style",{children:"\n        table.pinout th {\n          font-weight: bold;\n        }\n\n        table.pinout tbody td:first-child {\n          text-align: right;\n          --font-size: 1rem;\n          width: 0;\n          white-space: nowrap;\n          border-right: var(--border-width) solid var(--table-border-color);\n        }\n\n        table.pinout tbody button {\n          --font-size: 0.875em;\n          font-family: var(--font-family-monospace);\n          max-width: 2em;\n        }\n        "}),(0,a.jsx)("table",{className:"pinout",children:(0,a.jsxs)("tbody",{children:[(0,a.jsx)(N,{pins:e,header:"Input pins",toggle:t.toggle,setInputValid:t.setInputValid,displayInfo:n}),(0,a.jsx)(N,{pins:s,header:"Output pins",disabled:t.sim.pending,enableEdit:!1,displayInfo:n}),!t.hideInternal&&(0,a.jsx)(N,{pins:i,header:"Internal pins",disabled:t.sim.pending,enableEdit:!1,displayInfo:n})]})})]})},N=t=>(0,a.jsxs)(a.Fragment,{children:[t.pins.length>0&&(0,a.jsx)("tr",{children:(0,a.jsx)("th",{colSpan:2,children:t.header})}),[...t.pins].map((e=>(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:e.pin.name}),(0,a.jsx)("td",{children:(0,a.jsx)(T,{pin:e,toggle:t.toggle,disabled:t.disabled,enableEdit:t.enableEdit,signed:t.displayInfo.isSigned(e.pin.name),setInputValid:t.setInputValid,internal:"Internal pins"===t.header})})]},e.pin.name)))]}),T=t=>{let{pin:e,toggle:s,disabled:i=!1,enableEdit:l=!0,signed:r=!0,setInputValid:o,internal:c=!1}=t;const[d,p]=(0,n.useState)(!0);let h=!0;const[u,m]=(0,n.useState)(""),f=(0,n.useContext)(P);f instanceof _&&f.registerCallback((()=>{p(!0)}));const g=t=>{h=t,o?.(t)},x=t=>{for(let i=0;i<e.bits.length;i++)e.bits[e.bits.length-i-1][1]!==(t>>i&1)&&s?.(e.pin,i)};return(0,n.useEffect)((()=>{if(!d&&h){let t=0;if(r&&e.bits[0][1]){for(const[s,i]of e.bits)s<e.bits.length-1&&!i&&(t+=2**s);t=-t-1}else{const s=r?e.bits.length-1:e.bits.length;for(const[i,n]of e.bits)i<s&&n&&(t+=2**i)}m(t.toString())}}),[e,d]),(0,a.jsxs)("div",{style:{display:"flex",flexDirection:"row",alignItems:"center"},children:[(0,a.jsx)("fieldset",{role:"group",style:{width:`${e.bits.length}rem`},children:d?e.bits.map((t=>{let[n,l]=t;return(0,a.jsx)("button",{disabled:i,style:c?{backgroundColor:"grey"}:{},onClick:()=>s?.(e.pin,n),"data-testid":`pin-${n}`,children:l},n)})):(0,a.jsx)("input",{className:"colored",value:u,onChange:t=>{(t=>{const s=t.replace(/[^\d]/g,""),i=r&&"-"===t[0]?`-${s}`:s;if(m(i),isNaN(parseInt(i)))g(!1);else{const t=parseInt(i);!r&&t>=Math.pow(2,e.bits.length)||r&&(t>=Math.pow(2,e.bits.length-1)||t<-Math.pow(2,e.bits.length-1))?g(!1):(x(t),g(!0))}})(t.target.value)},disabled:!l})}),e.bits.length>1&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("div",{style:{width:"1em"}}),(0,a.jsx)("button",{style:{maxWidth:"3em",margin:0},onClick:()=>{p(!d)},children:d?"dec":"bin"})]})]})};class _{callbacks=[];registerCallback(t){this.callbacks.push(t)}reset(){for(const t of this.callbacks)t()}}var E=s(7559),O=s(258),A=s(8698),M=s(4408),R=s(691),$=s(6531),B=s(8090),V=s(9647),D=s(214),H=s(3389),U=s(5541),z=s(7746);const J=[["01","Project 1"],["02","Project 2"],["03","Project 3"],["05","Project 5"]];function W(t){return t in D.CHIP_ORDER?D.CHIP_ORDER[t]:D.BUILTIN_CHIP_PROJECTS[t].concat(D.CHIP_PROJECTS[t])}function L(t){return Object.values(D.BUILTIN_CHIP_PROJECTS).flat().includes(t)}function Z(t,e){const s=function(t,e){return L(e)?D.ChipProjects[t].BUILTIN_CHIPS[e]:D.ChipProjects[t].CHIPS[e][`${e}.hdl`]}(t,e);if(L(e))return s;const i="//// Replace this comment with your code.",n=`BUILTIN ${e};`;return s.includes(i)?s.replace(i,n):s.replace("PARTS:",`PARTS:\n    ${n}`)}function G(t){let e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],s=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return{clocked:t.clocked,inPins:F(t.ins),outPins:F(t.outs),internalPins:F(t.pins),chip:[t],pending:e,invalid:s}}const q=$.S.get();function K(t,e,s,i){const n=function(t){const e=t["/chip/project"]??"01";return{project:e,chips:W(e),chipName:t["/chip/chip"]??D.CHIP_PROJECTS[e][0]}}(s);let{project:a,chipName:l}=n;const{chips:o}=n;let c=new d.P9,p=new H.l1,h=!1,u=!1;const m={setFiles(t,e){let{hdl:s=t.files.hdl,tst:i=t.files.tst,cmp:n=t.files.cmp,out:a=""}=e;t.files.hdl=s,t.files.tst=i,t.files.cmp=n,t.files.out=a},updateChip(t,e){t.sim=G(c,e?.pending??t.sim.pending,e?.invalid??t.sim.invalid),t.controls.error=t.sim.invalid?e?.error??t.controls.error:"",t.controls.chips=W(t.controls.project),t.controls.chipName=t.sim.invalid?e?.chipName??l:c.name??e?.chipName??l,t.controls.chips.includes(t.controls.chipName)||(t.controls.chips=[...t.controls.chips,t.controls.chipName])},setProject(t,e){const s=W(e),i=t.controls.chipName&&s.includes(t.controls.chipName)?t.controls.chipName:s[0];t.controls.project=e,t.controls.chips=s,this.setChip(t,i)},setChip(t,e){t.controls.chipName=e,t.controls.hasBuiltin=r.zZ.has(e),t.controls.builtinOnly=L(e)},testRunning(t){t.controls.runningTest=!0},testFinished(t){t.controls.runningTest=!1;const s=(0,z.q)(t.files.cmp.trim(),t.files.out.trim());e(s?"Simulation successful: The output file is identical to the compare file":"Simulation error: The output file differs from the compare file")},updateTestStep(t){if(t.files.out=p?.log()??"",p?.currentStep?.span)t.controls.span=p.currentStep.span;else if(p.done){const e=t.files.tst.length;t.controls.span={start:e-1,end:e}}this.updateChip(t,{pending:t.sim.pending,invalid:t.sim.invalid})}},f={setProject(t){a=s["/chip/project"]=t,i.current({action:"setProject",payload:a}),this.setChip(D.CHIP_PROJECTS[a][0])},async setChip(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:s["/chip/project"]??"01";if(l=s["/chip/chip"]=t,i.current({action:"setChip",payload:l}),u=L(l),u)return i.current({action:"setFiles",payload:{hdl:"",tst:"",cmp:""}}),void this.useBuiltin();await this.loadChip(e,l),h&&this.useBuiltin()},reset(){$.S.get().reset(),c.reset(),p.reset(),i.current({action:"setFiles",payload:{}}),i.current({action:"updateChip"})},async updateFiles(t){let{hdl:s,tst:n,cmp:a}=t;i.current({action:"setFiles",payload:{hdl:s,tst:n,cmp:a}});try{s&&await this.compileChip(s),n&&this.compileTest(n)}catch(l){e((0,M.j)(l))}},async compileChip(t){c.remove();const s=B.Gq.parse(t);if((0,y.dZ)(s))return e("Failed to parse chip"),void i.current({action:"updateChip",payload:{invalid:!0,error:(0,M.j)((0,y.UG)(s))}});const n=await(0,R.J_)((0,y.Ok)(s));if((0,y.dZ)(n)){const t=(0,M.j)((0,y.UG)(n));return e(t),void i.current({action:"updateChip",payload:{invalid:!0,error:t}})}e(`Compiled ${c.name}`),this.replaceChip((0,y.Ok)(n))},replaceChip(t){const e=c.ins;for(const[s,{busVoltage:i}]of e){const e=t.ins.get(s);e&&(e.busVoltage=i)}q.reset(),t.eval(),c=t,c.reset(),p=p.with(c).reset(),i.current({action:"updateChip",payload:{invalid:!1}}),i.current({action:"updateTestStep"})},async loadChip(e,n){s["/chip/chip"]=n;const a=t=>`/projects/${e}/${n}/${n}.${t}`,[l,r,o]=await Promise.all([t.readFile(a("hdl")).catch((()=>function(t){return`CHIP ${t} {\n  IN in;\n  OUT out;\n  PARTS:\n}`}(n))),t.readFile(a("tst")).catch((t=>"repeat 10 {\n  tick,\n  tock;\n}")),t.readFile(a("cmp")).catch((()=>"| in|out|"))]);i.current({action:"setFiles",payload:{hdl:l,tst:r,cmp:o}}),await this.compileChip(l),this.compileTest(r)},async saveChip(s){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:a,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:l;i.current({action:"setFiles",payload:{hdl:s}});const o=`/projects/${n}/${r}/${r}.hdl`;await t.writeFile(o,s),e(`Saved ${o}`)},toggle(t,e){void 0!==e?t.busVoltage=t.busVoltage^1<<e:1===t.width?t.toggle():t.busVoltage+=1,i.current({action:"updateChip",payload:{pending:!0}})},eval(){c.eval(),i.current({action:"updateChip",payload:{pending:!1}})},clock(){q.toggle(),q.isLow&&q.frame(),i.current({action:"updateChip"})},async useBuiltin(){let t=arguments.length>1?arguments[1]:void 0;if(!(!(arguments.length>0&&void 0!==arguments[0])||arguments[0]))return u||(h=!1),void await this.loadChip(a,l);u||(h=!0);const s=l,n=(0,r.cT)(s);if((0,y.dZ)(n))return void e(`Failed to load builtin ${s}: ${(0,M.j)((0,y.UG)(n))}`);t&&await this.saveChip(t,a,l);const o=Z(a,s);i.current({action:"setFiles",payload:{hdl:o}}),this.replaceChip((0,y.Ok)(n))},async initialize(){await this.setChip(l,a)},compileTest(s){i.current({action:"setFiles",payload:{tst:s}});const n=V.qH.parse(s);return(0,y.dZ)(n)?(e("Failed to parse test"),!1):(e("Parsed tst"),p=H.l1.from((0,y.Ok)(n)).with(c).reset(),p.setFileSystem(t),i.current({action:"updateTestStep"}),!0)},async runTest(e){this.compileTest(e)&&(i.current({action:"testRunning"}),t.pushd("/samples"),await p.run(),t.popd(),i.current({action:"updateTestStep"}),i.current({action:"testFinished"}))},tick(){return this.stepTest()},stepTest(){(0,U.hu)(p.chipId===c.id,"Test and chip out of sync");const t=p.step();return i.current({action:"updateTestStep"}),t&&i.current({action:"testFinished"}),t}};return{initialState:(()=>{const t={project:a,chips:o,chipName:l,hasBuiltin:r.zZ.has(l),builtinOnly:L(l),runningTest:!1,error:""},s=(0,r.cT)(t.chipName);(0,y.dZ)(s)?(e((0,M.j)((0,y.UG)(s))),c=new d.P9):c=(0,y.Ok)(s);return{controls:t,files:{hdl:"",cmp:"",tst:"",out:""},sim:G(c)}})(),reducers:m,actions:f}}var X=s(8365),Y=s(8923),Q=s(8016),tt=s(659),et=s(1539),st=s(1124);const it=()=>{const{fs:t,setStatus:e}=(0,n.useContext)(A.r),{filePicker:s,tracking:l}=(0,n.useContext)(Q.Il),{state:r,actions:o,dispatch:c}=function(){const{fs:t,setStatus:e,storage:s}=(0,n.useContext)(A.r),i=(0,n.useRef)((()=>{})),{initialState:a,reducers:l,actions:r}=(0,n.useMemo)((()=>K(t,e,s,i)),[t,e,s,i]),[o,c]=(0,E.C)(l,a);return i.current=c,{state:o,dispatch:i,actions:r}}(),[d,p]=(0,E.i)(r.files.hdl),[h,u]=(0,E.i)(r.files.tst),[m,f]=(0,E.i)(r.files.cmp),[g]=(0,E.i)(r.files.out);(0,n.useEffect)((()=>{o.initialize()}),[o]),(0,n.useEffect)((()=>{l.trackPage("/chip")}),[l]);(0,n.useEffect)((()=>{l.trackEvent("action","setProject",r.controls.project),l.trackEvent("action","setChip",r.controls.chipName)}),[]);const x=(0,n.useCallback)((t=>{o.setProject(t),l.trackEvent("action","setProject",t)}),[o,l]),C=(0,n.useCallback)((t=>{o.setChip(t),l.trackEvent("action","setChip",t),z.reset()}),[o,l]),y=(0,n.useCallback)((()=>{o.eval(),l.trackEvent("action","eval")}),[o,l]),k=(0,n.useRef)((()=>{}));k.current=async function(){var t,e;let s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};await o.updateFiles({hdl:s.hdl,tst:null!==(t=s.tst)&&void 0!==t?t:h,cmp:null!==(e=s.cmp)&&void 0!==e?e:m})};const w=(0,n.useCallback)((async()=>{try{const e=await s.select(),i=await t.readFile(e);await k.current({tst:i})}catch(i){console.error(i),e("Failed to load into memory")}}),[s,e,t,k]),S=(0,n.useRef)();(0,n.useEffect)((()=>(S.current=new class extends Y.B{async reset(){await k.current(),await o.reset()}finishFrame(){super.finishFrame(),c.current({action:"updateTestStep"})}tick(){return o.stepTest()}toggle(){c.current({action:"updateTestStep"})}},()=>{var t;null===(t=S.current)||void 0===t||t.stop()})),[k,o,c]);const F=(0,n.useMemo)((()=>({toggle(){o.clock(),l.trackEvent("action","toggleClock")},reset(){l.trackEvent("action","resetClock"),o.reset()}})),[o]),[N,T]=(0,n.useState)(!1),M=(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("fieldset",{role:"group",children:[(0,a.jsx)("select",{value:r.controls.project,onChange:t=>{let{target:{value:e}}=t;x(e)},"data-testid":"project-picker",children:J.map((t=>{let[e,s]=t;return(0,a.jsx)("option",{value:e,children:s},e)}))}),(0,a.jsx)("select",{value:r.controls.chipName,onChange:t=>{let{target:{value:e}}=t;C(e)},"data-testid":"chip-picker",children:r.controls.chips.map((t=>(0,a.jsx)("option",{value:t,style:L(t)?{color:"rgb(170, 170, 170)"}:{},children:`${t} ${L(t)?"(given)":""}`},t)))}),(0,a.jsx)("button",{className:"flex-0",onClick:()=>{o.saveChip(d)},disabled:N,children:(0,a.jsx)(i.cC,{id:"Save"})})]})}),R=(0,a.jsx)(st.s,{className:"_hdl_panel",header:(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("div",{tabIndex:0,children:"HDL"}),(0,a.jsx)("fieldset",{children:r.controls.hasBuiltin&&!r.controls.builtinOnly&&(0,a.jsxs)("label",{children:[(0,a.jsx)("input",{type:"checkbox",role:"switch",checked:N,onChange:()=>{N?(T(!1),o.useBuiltin(!1)):(T(!0),o.useBuiltin(!0,d)),z.reset()}}),(0,a.jsx)(i.cC,{id:"Builtin"})]})}),M]}),children:(0,a.jsx)(et.M,{className:"flex-1",value:d,onChange:t=>{p(t),k.current(N||r.controls.builtinOnly?{}:{hdl:t})},grammar:B.Gq.parser,language:"hdl",disabled:N||r.controls.builtinOnly})}),[$,D]=(0,n.useState)(!0),H=(0,a.jsxs)("fieldset",{role:"group",children:[(0,a.jsx)("button",{onClick:y,onKeyDown:y,disabled:!r.sim.pending||!$,children:(0,a.jsx)(i.cC,{id:"Eval"})}),(0,a.jsxs)("button",{onClick:F.toggle,style:{maxWidth:"initial"},disabled:!r.sim.clocked,children:[(0,a.jsx)(i.cC,{id:"Clock"}),":","\xa0",(0,a.jsx)(j.uY,{})]}),(0,a.jsx)("button",{onClick:F.reset,style:{maxWidth:"initial"},disabled:!r.sim.clocked,children:(0,a.jsx)(i.cC,{id:"Reset"})})]}),U=function(t,e){return[...t.parts].map(((t,s)=>[`${t.id}_${s}`,b(t,e)])).filter((t=>{let[e,s]=t;return void 0!==s}))}({parts:r.sim.chip},(()=>{c.current({action:"updateChip"})})),z=new _,W=(0,a.jsx)(st.s,{className:"_parts_panel",header:(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("div",{children:[(0,a.jsx)(i.cC,{id:"Chip"})," ",r.controls.chipName]}),H]}),children:r.sim.invalid?(0,a.jsx)(i.cC,{id:"Syntax errors in the HDL code"}):(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(P.Provider,{value:z,children:(0,a.jsx)(I,{sim:r.sim,toggle:o.toggle,setInputValid:D,hideInternal:r.controls.builtinOnly||N})}),U.length>0&&(0,a.jsx)(st.G,{summary:(0,a.jsx)(i.cC,{id:"Visualization"}),open:!0,children:(0,a.jsx)("main",{children:U.map((t=>{let[e,s]=t;return s}))})})]})}),[Z,G]=(0,n.useState)("tst"),q=(0,n.useCallback)((t=>{G(t),l.trackEvent("tab","change",t)}),[l]),it=(0,a.jsx)(st.s,{className:"_test_panel",header:(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("div",{className:"flex-1",children:(0,a.jsx)(i.cC,{id:"Test"})}),(0,a.jsx)("div",{className:"flex-2",children:S.current&&(0,a.jsx)(O.D,{runner:S.current})}),(0,a.jsx)("div",{children:(0,a.jsxs)("button",{onClick:w,children:[(0,a.jsx)(tt.J,{name:"upload_file"})," "]})})]}),children:(0,a.jsxs)("div",{role:"tablist",style:{"--tab-count":"3"},children:[(0,a.jsx)("div",{role:"tab",id:"test-tab-tst","aria-controls":"test-tabpanel-tst","aria-selected":"tst"===Z,children:(0,a.jsxs)("label",{children:[(0,a.jsx)("input",{type:"radio",name:"test-tabs","aria-controls":"test-tabpanel-tst",value:"tst",checked:"tst"===Z,onChange:()=>q("tst")}),"Test Script"]})}),(0,a.jsx)("div",{role:"tabpanel","aria-labelledby":"test-tab-tst",id:"test-tabpanel-tst",children:(0,a.jsx)(et.M,{value:h,onChange:u,grammar:V.qH.parser,language:"tst",highlight:r.controls.span,disabled:r.controls.builtinOnly})}),(0,a.jsx)("div",{role:"tab",id:"test-tab-cmp","aria-controls":"test-tablpanel-cmp","aria-selected":"cmp"===Z,children:(0,a.jsxs)("label",{children:[(0,a.jsx)("input",{type:"radio",name:"test-tabs","aria-controls":"test-tabpanel-cmp",value:"cmp",checked:"cmp"===Z,onChange:()=>q("cmp")}),"Compare File"]})}),(0,a.jsx)("div",{role:"tabpanel","aria-labelledby":"test-tab-cmp",id:"test-tabpanel-cmp",style:{position:"relative"},children:(0,a.jsx)(et.M,{value:m,onChange:f,grammar:X.lA.parser,language:"cmp",disabled:r.controls.builtinOnly})}),(0,a.jsx)("div",{role:"tab",id:"test-tab-out","aria-controls":"test-tabpanel-out","aria-selected":"out"===Z,children:(0,a.jsxs)("label",{children:[(0,a.jsx)("input",{type:"radio",name:"test-tabs","aria-controls":"test-tabpanel-out",value:"out",checked:"out"===Z,onChange:()=>q("out")}),"Output File"]})}),(0,a.jsx)("div",{role:"tabpanel",id:"test-tabpanel-out","aria-labelledby":"test-tab-out",children:(0,a.jsx)(v.M,{cmp:m,out:g})})]})});return(0,a.jsxs)("div",{className:"ChipPage grid",children:[R,W,it]})},nt=it}}]);
//# sourceMappingURL=876.18b6d988.chunk.js.map