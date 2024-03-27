"use strict";(globalThis.webpackChunk_nand2tetris_web=globalThis.webpackChunk_nand2tetris_web||[]).push([[71],{2745:(e,t,s)=>{s.r(t),s.d(t,{Asm:()=>S,default:()=>N});var r=s(4621),i=s(7022),n=s(5874),a=s(7076),l=s(4666),o=s(7844),c=s(8878),u=s(8177),h=s(3761);class d{asm={instructions:[]};current=-1;done=!1;symbols=[];variables=new Map;lines=[];lineNumbers=[];getResult(){return this.lines.join("\n")}load(e,t){this.symbols=[{name:"R0",value:"0"},{name:"R1",value:"1"},{name:"R2",value:"2"},{name:"...",value:""},{name:"R15",value:"15"},{name:"SCREEN",value:a.L7.toString()},{name:"KBD",value:a.ky.toString()}],this.variables.clear(),this.asm=e,(0,l.EU)(e,((e,t,s)=>{s?this.variables.set(t,{name:e,isHidden:!0}):this.symbols.push({name:e,value:t.toString()})})),e.instructions=e.instructions.filter((({type:e})=>"L"!==e)),this.resolveLineNumbers(t),this.reset()}resolveLineNumbers(e){this.lineNumbers=Array(e);let t=0;for(const s of this.asm.instructions)"A"!==s.type&&"C"!==s.type||void 0==s.span||(this.lineNumbers[s.span.line]=t,t+=1)}step(e){if(this.current>=this.asm.instructions.length-1)return;this.current+=1;const t=this.asm.instructions[this.current];if("A"===t.type||"C"===t.type){e.sourceHighlight=t.span;const s=(0,l.ld)(this.asm.instructions[this.current]);if(void 0===s)return;if(this.lines.push(`${(0,o.e5)(s)}`),e.resultHighlight={start:17*this.current,end:17*(this.current+1),line:-1},e.sourceHighlight&&e.highlightMap.set(e.sourceHighlight,e.resultHighlight),(0,l.J$)(t)){const e=this.variables.get(t.value);void 0!=e&&e.isHidden&&(this.symbols.push({name:e.name,value:t.value.toString()}),e.isHidden=!1)}this.current===this.asm.instructions.length-1&&(this.done=!0)}}resetSymbols(){for(const t of this.variables.values())t.isHidden=!0;const e=new Set(Array.from(this.variables.values()).map((e=>e.name)));this.symbols=this.symbols.filter((t=>!e.has(t.name)))}reset(){this.current=-1,this.lines=[],this.done=!1,this.resetSymbols()}}function m(){const{setStatus:e,fs:t}=(0,c.useContext)(h.L),s=(0,c.useRef)((()=>{})),{initialState:r,reducers:i,actions:a}=(0,c.useMemo)((()=>function(e,t,s){const r=new d,i={resultHighlight:void 0,sourceHighlight:void 0,highlightMap:new Map};let a,o=!0,c=!1,u=!1;const h={setAsm(e,{asm:t,path:s}){e.asm=t,s&&(e.path=s)},setCmp(e,{cmp:s,name:r}){e.compare=s,e.compareName=r,t("Loaded compare file")},setError(e,s){s&&t(s.message),e.error=s},update(e){e.translating=u,e.current=r.current,e.result=r.getResult(),e.symbols=Array.from(r.symbols),e.lineNumbers=Array.from(r.lineNumbers),e.sourceHighlight=i.sourceHighlight,e.resultHighlight=i.resultHighlight},compare(e){const s=e.result.split("\n"),r=e.compare.split("\n").filter((e=>""!=e.trim()));if(s.length==r.length){for(let i=0;i<r.length;i++)for(let n=0;n<r[i].length;n++)if(s[i][n]!==r[i][n])return t(`Comparison failed at ${i}:${n}`),void(e.resultHighlight={start:17*i,end:17*(i+1),line:-1});t("Comparison successful")}else t("Comparison failed - different lengths")}},m={async loadAsm(t){a=t;const s=await e.readFile(a);m.setAsm(s,a)},setAsm(e,t){e=e.replace(/\r\n/g,"\n"),s.current({action:"setAsm",payload:{asm:e,path:t}}),u=!1,this.saveAsm(e),requestAnimationFrame((()=>{this.compileAsm(e)}))},saveAsm(t){a&&e.writeFile(a,t)},compileAsm(e){this.reset();const i=l.y0.parse(e);if((0,n.ys)(i))return s.current({action:"setError",payload:(0,n._)(i)}),void(c=!1);r.load((0,n.Ok)(i),e.split("\n").length),c=r.asm.instructions.length>0,t(""),s.current({action:"setError"}),s.current({action:"update"})},setAnimate(e){o=e},step:()=>(c&&(u=!0),r.step(i),(o||r.done)&&s.current({action:"update"}),r.done&&t("Translation done."),r.done),updateHighlight(e,t){for(const[s,r]of i.highlightMap)(t&&s.start<=e&&e<=s.end||!t&&r.start<=e&&e<=r.end)&&(i.sourceHighlight=s,i.resultHighlight=r);s.current({action:"update"})},resetHighlightInfo(){i.sourceHighlight=void 0,i.resultHighlight=void 0,i.highlightMap.clear()},reset(){t("Reset"),r.reset(),this.resetHighlightInfo(),s.current({action:"update"})},overrideState(e){if(this.resetHighlightInfo(),this.setAsm(e.asm,e.path),s.current({action:"setCmp",payload:{cmp:e.compare,name:e.compareName}}),e.translating)for(let t=0;t<=e.current;t++)this.step();s.current({action:"update"})}};return{initialState:{asm:"",path:void 0,translating:!1,current:-1,resultHighlight:void 0,sourceHighlight:void 0,symbols:[],result:"",compare:"",compareName:void 0,lineNumbers:[]},reducers:h,actions:m}}(t,e,s)),[e,s]),[o,m]=(0,u.A)(i,r);return s.current=m,{state:o,dispatch:s,actions:a}}var g=s(782),p=s(135);const v=({values:e=[],highlight:t=-1,onClick:s})=>(0,g.jsx)("div",{children:e.map(((e,r)=>(0,g.jsx)(f,{identifier:e.name,value:e.value,highlight:r===t,onClick:()=>s?.(e.name,e.value)},r)))}),f=({identifier:e,value:t,highlight:s=!1,onClick:r})=>(0,g.jsxs)("div",{style:{display:"flex",alignItems:"center"},onClick:r,children:[e.length>0&&(0,g.jsx)("code",{style:{flex:"1",...(0,p.Wf)("none"),...s?{background:"var(--mark-background-color)"}:{},whiteSpace:"pre",padding:"3px"},children:e}),t.length>0&&(0,g.jsx)("code",{style:{flex:"1",textAlign:"right",color:"black",padding:"3px",...(0,p.Wf)("none"),...s?{background:"var(--mark-background-color)"}:{}},children:t})]});var b=s(9547),x=s(1091),y=s(2675),j=s(4280),C=s(2144),H=s(8330),A=s(8029),k=s(3499);const S=()=>{const{state:e,actions:t,dispatch:s}=m(),{toolStates:n,filePicker:o}=(0,c.useContext)(A.BR),u=(0,c.useRef)(0),d=(0,c.useRef)(0),p=(0,c.useRef)(),[f,S]=(0,c.useState)(!1);(0,c.useEffect)((()=>{n.asmState&&t.overrideState(n.asmState)}),[]),(0,c.useEffect)((()=>{n.setAsmState(e)}),[e,n.setAsmState]),(0,c.useEffect)((()=>(p.current=new class extends x.M{async tick(){return u.current=0,d.current=0,t.step()}reset(){t.reset()}toggle(){}},S(!0),()=>{var e;null===(e=p.current)||void 0===e||e.stop()})),[t,s]);const N=(0,c.useRef)(null),w=(0,c.useRef)(null),{setStatus:R}=(0,c.useContext)(h.L);return(0,g.jsxs)("div",{className:"AsmPage grid",children:[(0,g.jsx)(j.Z,{className:"source",header:(0,g.jsxs)(g.Fragment,{children:[(0,g.jsxs)("div",{children:[(0,g.jsx)(r.x6,{id:"Source"}),e.path&&`: ${e.path.split("/").pop()}`]}),(0,g.jsx)("div",{className:"flex-1",children:f&&p.current&&(0,g.jsx)(i.T,{runner:p.current,disabled:void 0!=e.error,prefix:(0,g.jsx)("button",{className:"flex-0",onClick:async()=>{const e=await o.select(".asm");R(C.F),requestAnimationFrame((async()=>{await t.loadAsm(e),R("")}))},"data-tooltip":"Load file","data-placement":"bottom",children:"\ud83d\udcc2"}),overrideTooltips:{step:"Translate",run:"Translate all"},onSpeedChange:e=>{t.setAnimate(e<=2)}})})]}),children:(0,g.jsx)(y.K,{value:e.asm,error:e.error,onChange:e=>{t.setAsm(e)},onCursorPositionChange:e=>{e!=u.current&&(u.current=e,setTimeout((()=>{t.updateHighlight(e,!0)}),100))},grammar:l.y0.parser,language:"asm",highlight:e.translating?e.sourceHighlight:void 0,lineNumberTransform:t=>{if(!e.translating)return"";const s=e.lineNumbers[t];return(void 0===s?"":s).toString()}})}),(0,g.jsxs)(j.Z,{className:"result",header:(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)("div",{children:(0,g.jsx)(r.x6,{id:"Binary Code"})}),(0,g.jsxs)("div",{children:[(0,g.jsx)("a",{ref:N,style:{display:"none"}}),(0,g.jsx)(H.N_,{ref:w,style:{display:"none"},to:k.Ay.cpu.href}),(0,g.jsxs)("fieldset",{role:"group",children:[(0,g.jsx)("button",{"data-tooltip":"Load to the CPU Emulator","data-placement":"bottom",onClick:async()=>{var t;const s=await(0,b.aU)(e.result);n.setCpuState(e.path,new a.n9(new Int16Array(s))),null===(t=w.current)||void 0===t||t.click()},children:"\u21a9\ufe0f"}),(0,g.jsx)("button",{onClick:()=>{var t,s,r;const i=new Blob([e.result],{type:"text/plain"}),n=URL.createObjectURL(i);N.current&&(N.current.href=n,N.current.download=null!==(t=null===(s=e.path)||void 0===s||null===(r=s.split("/").pop())||void 0===r?void 0:r.replace(".asm",".hack"))&&void 0!==t?t:"result.hack",N.current.click(),URL.revokeObjectURL(n))},children:"Download"})]})]})]}),children:[(0,g.jsx)(y.K,{value:e.result,highlight:e.resultHighlight,disabled:!0,onChange:function(e){},onCursorPositionChange:e=>{e!=d.current&&(d.current=e,t.updateHighlight(e,!1))},grammar:void 0,language:"",dynamicHeight:!0,lineNumberTransform:e=>(e-1).toString()}),e.symbols.length>0&&e.translating&&"Symbol Table",e.translating&&(0,g.jsx)(v,{values:e.symbols})]}),(0,g.jsx)(j.Z,{className:"compare",header:(0,g.jsxs)(g.Fragment,{children:[(0,g.jsxs)("div",{children:[(0,g.jsx)(r.x6,{id:"Compare"}),e.compareName&&`: ${e.compareName}`]}),(0,g.jsx)("div",{children:(0,g.jsx)("fieldset",{role:"group",children:(0,g.jsx)("button",{onClick:()=>{s.current({action:"compare"})},children:"Compare"})})})]}),children:(0,g.jsx)(y.K,{value:e.compare,highlight:e.translating?e.resultHighlight:void 0,onChange:function(e){s.current({action:"setCmp",payload:{cmp:e}})},onCursorPositionChange:e=>{e!=d.current&&(d.current=e,t.updateHighlight(e,!1))},language:"",lineNumberTransform:e=>(e-1).toString()})})]})},N=S}}]);