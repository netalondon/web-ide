"use strict";(globalThis.webpackChunk_nand2tetris_web=globalThis.webpackChunk_nand2tetris_web||[]).push([[71],{2745:(e,t,s)=>{s.r(t),s.d(t,{Asm:()=>A,default:()=>w});var r=s(4621),i=s(7022),n=s(5874),a=s(7076),l=s(4666),o=s(7844),c=s(8878),h=s(8177),u=s(3761);class d{asm={instructions:[]};current=-1;done=!1;symbols=[];variables=new Map;lines=[];lineNumbers=[];getResult(){return this.lines.join("\n")}load(e,t){this.symbols=[{name:"R0",value:"0"},{name:"R1",value:"1"},{name:"R2",value:"2"},{name:"...",value:""},{name:"R15",value:"15"},{name:"SCREEN",value:a.L7.toString()},{name:"KBD",value:a.ky.toString()}],this.variables.clear(),this.asm=e,(0,l.EU)(e,((e,t,s)=>{s?this.variables.set(t,{name:e,isHidden:!0}):this.symbols.push({name:e,value:t.toString()})})),e.instructions=e.instructions.filter((({type:e})=>"L"!==e)),this.resolveLineNumbers(t),this.reset()}resolveLineNumbers(e){this.lineNumbers=Array(e);let t=0;for(const s of this.asm.instructions)"A"!==s.type&&"C"!==s.type||void 0==s.span||(this.lineNumbers[s.span.line]=t,t+=1)}step(e){if(this.current>=this.asm.instructions.length-1)return;this.current+=1;const t=this.asm.instructions[this.current];if("A"===t.type||"C"===t.type){e.sourceHighlight=t.span;const s=(0,l.ld)(this.asm.instructions[this.current]);if(void 0===s)return;if(this.lines.push(`${(0,o.e5)(s)}`),e.resultHighlight={start:17*this.current,end:17*(this.current+1),line:-1},e.sourceHighlight&&e.highlightMap.set(e.sourceHighlight,e.resultHighlight),(0,l.J$)(t)){const e=this.variables.get(t.value);void 0!=e&&e.isHidden&&(this.symbols.push({name:e.name,value:t.value.toString()}),e.isHidden=!1)}this.current===this.asm.instructions.length-1&&(this.done=!0)}}resetSymbols(){for(const t of this.variables.values())t.isHidden=!0;const e=new Set(Array.from(this.variables.values()).map((e=>e.name)));this.symbols=this.symbols.filter((t=>!e.has(t.name)))}reset(){this.current=-1,this.lines=[],this.done=!1,this.resetSymbols()}}function m(){const{setStatus:e,fs:t}=(0,c.useContext)(u.L),s=(0,c.useRef)((()=>{})),{initialState:r,reducers:i,actions:a}=(0,c.useMemo)((()=>function(e,t,s){const r=new d,i={resultHighlight:void 0,sourceHighlight:void 0,highlightMap:new Map};let a,o=!0,c=!1,h=!1,u=!1;const m={setAsm(e,{asm:t,path:s}){e.asm=t,s&&(e.path=s)},setCmp(e,{cmp:s,name:r}){e.compare=s,e.compareName=r,t("Loaded compare file")},setError(e,s){s&&t(s.message),e.error=s},update(e){e.translating=h,e.current=r.current,e.result=r.getResult(),e.symbols=Array.from(r.symbols),e.lineNumbers=Array.from(r.lineNumbers),e.sourceHighlight=i.sourceHighlight,e.resultHighlight=i.resultHighlight,e.compareError=u},compare(e){const s=e.result.split("\n"),r=e.compare.split("\n").filter((e=>""!=e.trim()));if(s.length!=r.length)return u=!0,void t("Comparison failed - different lengths");for(let n=0;n<r.length;n++)for(let e=0;e<r[n].length;e++)if(s[n][e]!==r[n][e])return t(`Comparison failure: Line ${n}`),u=!0,void(i.resultHighlight={start:17*n,end:17*(n+1),line:-1});t("Comparison successful")}},g={async loadAsm(t){a=t;const s=await e.readFile(a);g.setAsm(s,a)},setAsm(e,t){e=e.replace(/\r\n/g,"\n"),s.current({action:"setAsm",payload:{asm:e,path:t}}),h=!1,this.saveAsm(e),requestAnimationFrame((()=>{this.compileAsm(e)}))},saveAsm(t){a&&e.writeFile(a,t)},compileAsm(e){this.reset();const i=l.y0.parse(e);if((0,n.ys)(i))return s.current({action:"setError",payload:(0,n._)(i)}),void(c=!1);r.load((0,n.Ok)(i),e.split("\n").length),c=r.asm.instructions.length>0,t(""),s.current({action:"setError"}),s.current({action:"update"})},setAnimate(e){o=e},step:()=>(c&&(h=!0),r.step(i),(o||r.done)&&s.current({action:"update"}),r.done&&t("Translation done."),r.done),compare(){s.current({action:"compare"}),this.updateHighlight(i.resultHighlight?.start??0,!1),s.current({action:"update"})},updateHighlight(e,t){if(!u){for(const[s,r]of i.highlightMap)(t&&s.start<=e&&e<=s.end||!t&&r.start<=e&&e<=r.end)&&(i.sourceHighlight=s,i.resultHighlight=r);s.current({action:"update"})}},resetHighlightInfo(){i.sourceHighlight=void 0,i.resultHighlight=void 0,i.highlightMap.clear()},reset(){u=!1,h=!1,t("Reset"),r.reset(),this.resetHighlightInfo(),s.current({action:"update"})},overrideState(e){if(this.resetHighlightInfo(),this.setAsm(e.asm,e.path),s.current({action:"setCmp",payload:{cmp:e.compare,name:e.compareName}}),e.translating)for(let t=0;t<=e.current;t++)this.step();s.current({action:"update"})}};return{initialState:{asm:"",path:void 0,translating:!1,current:-1,resultHighlight:void 0,sourceHighlight:void 0,symbols:[],result:"",compare:"",compareName:void 0,lineNumbers:[],compareError:!1},reducers:m,actions:g}}(t,e,s)),[e,s]),[o,m]=(0,h.A)(i,r);return s.current=m,{state:o,dispatch:s,actions:a}}var g=s(782),p=s(135);const v=({values:e=[],highlight:t=-1,onClick:s})=>(0,g.jsx)("div",{children:e.map(((e,r)=>(0,g.jsx)(f,{identifier:e.name,value:e.value,highlight:r===t,onClick:()=>s?.(e.name,e.value)},r)))}),f=({identifier:e,value:t,highlight:s=!1,onClick:r})=>(0,g.jsxs)("div",{style:{display:"flex",alignItems:"center"},onClick:r,children:[e.length>0&&(0,g.jsx)("code",{style:{flex:"1",...(0,p.Wf)("none"),...s?{background:"var(--mark-background-color)"}:{},whiteSpace:"pre",padding:"3px"},children:e}),t.length>0&&(0,g.jsx)("code",{style:{flex:"1",textAlign:"right",color:"black",padding:"3px",...(0,p.Wf)("none"),...s?{background:"var(--mark-background-color)"}:{}},children:t})]});var x=s(9547),b=s(1091),y=s(2675),j=s(4280),C=s(2144),H=s(8330),k=s(8029),S=s(3499);const A=()=>{const{state:e,actions:t,dispatch:s}=m(),{toolStates:n,filePicker:o,setTitle:h}=(0,c.useContext)(k.BR),d=(0,c.useRef)(0),p=(0,c.useRef)(0),f=(0,c.useRef)(),[A,w]=(0,c.useState)(!1),[N,R]=(0,c.useState)(!0);(0,c.useEffect)((()=>{var e;n.asmState&&(t.overrideState(n.asmState),n.asmState.path&&h(null!==(e=n.asmState.path.split("/").pop())&&void 0!==e?e:""))}),[]),(0,c.useEffect)((()=>{n.setAsmState(e)}),[e,n.setAsmState]),(0,c.useEffect)((()=>(f.current=new class extends b.M{async tick(){return d.current=0,p.current=0,t.step()}reset(){t.reset()}toggle(){}},w(!0),()=>{var e;null===(e=f.current)||void 0===e||e.stop()})),[t,s]);const L=(0,c.useRef)(null),T=(0,c.useRef)(null),{setStatus:E}=(0,c.useContext)(u.L),F=(e,t)=>{const s=new Blob([e],{type:"text/plain"}),r=URL.createObjectURL(s);L.current&&(L.current.href=r,L.current.download=t,L.current.click(),URL.revokeObjectURL(r))};return(0,g.jsxs)("div",{className:"AsmPage grid "+(N?"":"hide-sym"),children:[(0,g.jsx)(j.Z,{className:"source",header:(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)("div",{children:(0,g.jsx)(r.x6,{id:"Source"})}),(0,g.jsx)("div",{className:"flex-1",children:A&&f.current&&(0,g.jsx)(i.T,{runner:f.current,disabled:void 0!=e.error,prefix:(0,g.jsx)("button",{className:"flex-0",onClick:async()=>{const e=await o.select(".asm");E(C.F),requestAnimationFrame((async()=>{var s;await t.loadAsm(e),E(""),h(null!==(s=e.split("/").pop())&&void 0!==s?s:"")}))},"data-tooltip":"Load file","data-placement":"bottom",children:"\ud83d\udcc2"}),overrideTooltips:{step:"Translate",run:"Translate all"},onSpeedChange:e=>{t.setAnimate(e<=2)}})}),(0,g.jsx)("fieldset",{role:"group",children:(0,g.jsx)("button",{"data-tooltip":"Download file","data-placement":"left",onClick:()=>{var t,s;return F(e.asm,null!==(t=null===(s=e.path)||void 0===s?void 0:s.split("/").pop())&&void 0!==t?t:"source.asm")},children:"Download"})})]}),children:(0,g.jsx)(y.K,{value:e.asm,error:e.error,alwaysRecenter:!1,onChange:e=>{t.setAsm(e)},onCursorPositionChange:e=>{e!=d.current&&(d.current=e,setTimeout((()=>{t.updateHighlight(e,!0)}),100))},grammar:l.y0.parser,language:"asm",highlight:e.translating?e.sourceHighlight:void 0,lineNumberTransform:t=>{if(!e.translating)return"";const s=e.lineNumbers[t];return(void 0===s?"":s).toString()}})}),(0,g.jsx)(j.Z,{className:"result",header:(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)("div",{children:(0,g.jsx)(r.x6,{id:"Binary Code"})}),(0,g.jsxs)("div",{children:[(0,g.jsx)("a",{ref:L,style:{display:"none"}}),(0,g.jsx)(H.N_,{ref:T,style:{display:"none"},to:S.Ay.cpu.href}),(0,g.jsxs)("fieldset",{role:"group",children:[(0,g.jsx)("button",{"data-tooltip":"Load to the CPU Emulator","data-placement":"bottom",onClick:async()=>{var t,s;const r=await(0,x.aU)(e.result);n.setCpuState(null===(t=e.path)||void 0===t?void 0:t.replace(".asm",".hack"),new a.n9(new Int16Array(r)),"bin"),null===(s=T.current)||void 0===s||s.click()},children:"\u21a9\ufe0f"}),(0,g.jsx)("button",{"data-tooltip":"Download translated file","data-placement":"left",onClick:()=>{var t,s,r;return F(e.result,null!==(t=null===(s=e.path)||void 0===s||null===(r=s.split("/").pop())||void 0===r?void 0:r.replace(".asm",".hack"))&&void 0!==t?t:"result.hack")},children:"Download"})]})]})]}),children:(0,g.jsx)(y.K,{value:e.result,highlight:e.resultHighlight,disabled:!0,onChange:function(e){},onCursorPositionChange:e=>{e!=p.current&&(p.current=e,t.updateHighlight(e,!1))},grammar:void 0,language:"",alwaysRecenter:!1,lineNumberTransform:e=>(e-1).toString()})}),(0,g.jsx)(j.Z,{className:"sym",header:(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)("div",{className:"flex-1",children:(0,g.jsx)(r.x6,{id:"Symbol Table"})}),(0,g.jsx)("input",{type:"checkbox",role:"switch",checked:N,onChange:()=>R(!N)})]}),children:e.translating&&N&&(0,g.jsx)(v,{values:e.symbols})}),(0,g.jsx)(j.Z,{className:"compare",header:(0,g.jsxs)(g.Fragment,{children:[(0,g.jsxs)("div",{children:[(0,g.jsx)(r.x6,{id:"Compare Code"}),e.compareName&&`: ${e.compareName}`]}),(0,g.jsx)("div",{children:(0,g.jsx)("fieldset",{role:"group",children:(0,g.jsx)("button",{onClick:()=>{t.compare()},children:"Compare"})})})]}),children:(0,g.jsx)(y.K,{value:e.compare,highlight:e.translating?e.resultHighlight:void 0,highlightType:e.compareError?"error":"highlight",alwaysRecenter:!1,onChange:function(e){s.current({action:"setCmp",payload:{cmp:e}})},onCursorPositionChange:e=>{e!=p.current&&(p.current=e,t.updateHighlight(e,!1))},language:"",lineNumberTransform:e=>(e-1).toString()})})]})},w=A}}]);