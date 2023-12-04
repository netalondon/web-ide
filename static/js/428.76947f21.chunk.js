"use strict";(self.webpackChunk_nand2tetris_web=self.webpackChunk_nand2tetris_web||[]).push([[428],{6393:(e,t,s)=>{s.r(t),s.d(t,{Asm:()=>N,default:()=>w});var r=s(5072),i=s(6791),n=s(7054),l=s(2201),a=s(7472),o=s(5150),c=s(6845),u=s(6604),h=s(5692);class d{asm=null;current=-1;done=!1;symbols=[];hiddenSymbols=new Map;result="";lineNumbers=[];load(e,t){this.symbols=[["R0","0"],["R1","1"],["R2","2"],["...",""],["R15","15"],["SCREEN",l.GD.toString()],["KBD",l.eu.toString()]],this.hiddenSymbols.clear(),this.asm=e,(0,a.$o)(e,((e,t,s)=>{s?this.hiddenSymbols.set(t,[e,!1]):this.symbols.push([e,t.toString()])})),e.instructions=e.instructions.filter((e=>"L"!==e.type)),this.resolveLineNumbers(t),this.reset()}resolveLineNumbers(e){if(null===this.asm)return;this.lineNumbers=Array(e);let t=0;for(const s of this.asm.instructions)"A"!==s.type&&"C"!==s.type||(this.lineNumbers[s.lineNum]=t,t++)}step(e){if(null===this.asm||this.current>=this.asm.instructions.length-1)return;this.current++;const t=this.asm.instructions[this.current];if("A"===t.type||"C"===t.type){e.sourceHighlight=t.span;const s=(0,a.Y_)(this.asm.instructions[this.current]);if(void 0===s)return;if(this.result+=`${(0,o.Ly)(s)}\n`,e.resultHighlight={start:17*this.current,end:17*(this.current+1)},e.highlightMap.set(t.span,e.resultHighlight),"A"===t.type&&(0,a.w_)(t)){const e=this.hiddenSymbols.get(t.value);void 0==e||e[1]||(this.symbols.push([e[0],t.value.toString()]),this.hiddenSymbols.set(t.value,[e[0],!0]))}this.current===this.asm.instructions.length-1&&(this.done=!0)}}resetSymbols(){const e=new Set;for(const[t,s]of this.hiddenSymbols)e.add(s[0]),this.hiddenSymbols.set(t,[s[0],!1]);this.symbols=this.symbols.filter((t=>!e.has(t[0])))}reset(){this.current=-1,this.result="",this.done=!1,this.resetSymbols()}}function m(){const{setStatus:e}=(0,c.useContext)(h.r),t=(0,c.useRef)((()=>{})),{initialState:s,reducers:r,actions:i}=(0,c.useMemo)((()=>function(e,t){const s=new d,r={resultHighlight:void 0,sourceHighlight:void 0,highlightMap:new Map};let i=!0;const l={setAsm(e,t){let{asm:s}=t;e.asm=s},setCmp(t,s){let{cmp:r}=s;t.compare=r,e("Loaded compare file")},update(e){e.current=s.current,e.result=s.result,e.symbols=Array.from(s.symbols),e.lineNumbers=Array.from(s.lineNumbers),e.sourceHighlight=r.sourceHighlight,e.resultHighlight=r.resultHighlight},compare(t){const s=t.result.split("\n"),r=t.compare.split("\n");if(s.length==r.length){for(let i=0;i<r.length;i++)for(let n=0;n<r[i].length;n++)if(s[i][n]!==r[i][n])return e(`Comparison failed at ${i}:${n}`),void(t.resultHighlight={start:17*i,end:17*(i+1)});e("Comparison successful")}else e("Comparison failed - different lengths")}},o={loadAsm(r){t.current({action:"setAsm",payload:{asm:r}});const i=a.Ww.parse(r);(0,n.dZ)(i)?e(`Error parsing asm file - ${(0,n.UG)(i).message}`):(s.load((0,n.Ok)(i),r.split("\n").length),t.current({action:"update"}),e("Loaded asm file"))},setAnimate(e){i=e},step:()=>(s.step(r),(i||s.done)&&t.current({action:"update"}),s.done&&e("Translation done."),s.done),updateHighlight(e,s){for(const[t,i]of r.highlightMap)(s&&t.start<=e&&e<=t.end||!s&&i.start<=e&&e<=i.end)&&(r.sourceHighlight=t,r.resultHighlight=i);t.current({action:"update"})},resetHighlightInfo(){r.sourceHighlight=void 0,r.resultHighlight=void 0,r.highlightMap.clear()},reset(){e("Reset"),s.reset(),this.resetHighlightInfo(),t.current({action:"update"})}};return{initialState:{asm:"",current:-1,resultHighlight:void 0,sourceHighlight:void 0,symbols:[],result:"",compare:"",lineNumbers:[]},reducers:l,actions:o}}(e,t)),[e,t]),[l,o]=(0,u.C)(r,s);return t.current=o,{state:l,dispatch:t,actions:i}}var g=s(864),p=s(4089);const f=e=>{let{values:t=[],highlight:s=-1,onClick:r}=e;return(0,g.jsx)("div",{children:t.map(((e,t)=>(0,g.jsx)(b,{identifier:e[0],value:e[1],highlight:t===s,onClick:()=>r?.(e[0],e[1])},t)))})},b=e=>{let{identifier:t,value:s,highlight:r=!1,onClick:i}=e;return(0,g.jsxs)("div",{style:{display:"flex",alignItems:"center"},onClick:i,children:[t.length>0&&(0,g.jsx)("code",{style:{flex:"1",...(0,p.eP)("none"),...r?{background:"var(--mark-background-color)"}:{},whiteSpace:"pre",padding:"3px"},children:t}),s.length>0&&(0,g.jsx)("code",{style:{flex:"1",textAlign:"right",color:"black",padding:"3px",...(0,p.eP)("none"),...r?{background:"var(--mark-background-color)"}:{}},children:s})]})};var x=s(6699),v=s(4619),y=s(9200),C=s(8398),j=s(1881),S=s(8722),k=s(7457),H=s(8079);const N=()=>{const{state:e,actions:t,dispatch:s}=m(),{toolStates:n}=(0,c.useContext)(S.Il),[l,o]=(0,c.useState)(""),[u,d]=(0,c.useState)(""),p=(0,c.useRef)(0),b=(0,c.useRef)(0),N=(0,c.useRef)(),[w,A]=(0,c.useState)(!1),R=(0,k.R)();(0,c.useEffect)((()=>{n.setTool("asm"),n.asmState.program&&(t.loadAsm(n.asmState.program),n.asmState.name&&o(n.asmState.name),n.asmState.compare&&s.current({action:"setCmp",payload:{cmp:n.asmState.compare}}),n.asmState.compareName&&d(n.asmState.compareName))}),[]),(0,c.useEffect)((()=>{n.setAsmState(l,e.asm,u,e.compare)}),[e,n.setAsmState,l,u]),(0,c.useEffect)((()=>(N.current=new class extends v.B{async tick(){return p.current=0,b.current=0,t.step()}reset(){t.reset()}toggle(){}},A(!0),()=>{var e;null===(e=N.current)||void 0===e||e.stop()})),[t,s]);const L=(0,c.useRef)(null),M=(0,c.useRef)(null),T=(0,c.useRef)(null);let P="asm";const{setStatus:$}=(0,c.useContext)(h.r);return(0,g.jsxs)("div",{className:"AsmPage grid",children:[(0,g.jsx)(C.s,{className:"source",header:(0,g.jsxs)(g.Fragment,{children:[(0,g.jsxs)("div",{children:[(0,g.jsx)(r.cC,{id:"Source"}),l&&`: ${l}`]}),(0,g.jsx)("input",{type:"file",style:{display:"none"},ref:L,onChange:async e=>{var r;if(null===(r=e.target.files)||void 0===r||!r.length)return void $("No file selected");$("Loading");const i=e.target.files[0],n=await i.text();if("asm"===P){if(!i.name.endsWith(".asm"))return void $("File must be .asm file");t.loadAsm(n),o(i.name)}else{if(!i.name.endsWith(".hack"))return void $("File must be .hack file");s.current({action:"setCmp",payload:{cmp:n}}),d(i.name)}}}),(0,g.jsx)("div",{className:"flex-1",children:w&&N.current&&(0,g.jsx)(i.D,{runner:N.current,prefix:(0,g.jsx)("button",{className:"flex-0",onClick:()=>{var e;P="asm",null===(e=L.current)||void 0===e||e.click()},"data-tooltip":"Load file","data-placement":"bottom",children:"\ud83d\udcc2"}),overrideTooltips:["Translate","Translate all"],onSpeedChange:e=>{t.setAnimate(e<=2)}})})]}),children:(0,g.jsx)(y.M,{value:e.asm,onChange:e=>{},onCursorPositionChange:e=>{e!=p.current&&(p.current=e,t.updateHighlight(e,!0))},grammar:a.Ww.parser,language:"asm",highlight:e.sourceHighlight,disabled:!0,lineNumberTransform:t=>{const s=e.lineNumbers[t];return(void 0===s?"":s).toString()}})}),(0,g.jsxs)(C.s,{className:"result",header:(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)("div",{children:(0,g.jsx)(r.cC,{id:"Binary Code"})}),(0,g.jsxs)("div",{children:[(0,g.jsx)("a",{ref:M,style:{display:"none"}}),(0,g.jsx)("fieldset",{role:"group",children:(0,g.jsx)("button",{onClick:R.open,children:"\ud83d\udcc2"})}),(0,g.jsx)("dialog",{open:R.isOpen,children:(0,g.jsxs)("article",{children:[(0,g.jsx)("header",{style:{display:"flex",flexDirection:"row-reverse"},children:(0,g.jsx)("a",{style:{color:"rgba(0, 0, 0, 0)"},className:"close",href:"#root",onClick:e=>{e.preventDefault(),R.close()}})}),(0,g.jsxs)("main",{children:[(0,g.jsx)("button",{onClick:()=>{(()=>{const t=new Blob([e.result],{type:"text/plain"}),s=URL.createObjectURL(t);M.current&&(M.current.href=s,M.current.download=l.replace(".asm",".hack"),M.current.click(),URL.revokeObjectURL(s))})(),R.close()},children:"Download"}),(0,g.jsx)(j.rU,{ref:T,style:{display:"none"},to:H.ZP.cpu.href}),(0,g.jsx)("button",{onClick:async()=>{var t;n.setTool("cpu");const s=await(0,x.$W)(e.result);n.setCpuState(l.replace(".asm",".hack"),s),null===(t=T.current)||void 0===t||t.click()},children:"Load in CPU Emulator"})]})]})})]})]}),children:[(0,g.jsx)(y.M,{value:e.result,highlight:e.resultHighlight,disabled:!0,onChange:function(e){},onCursorPositionChange:e=>{e!=b.current&&(b.current=e,t.updateHighlight(e,!1))},grammar:void 0,language:"",dynamicHeight:!0,lineNumberTransform:e=>(e-1).toString()}),e.symbols.length>0&&"Symbol Table",(0,g.jsx)(f,{values:e.symbols})]}),(0,g.jsx)(C.s,{className:"compare",header:(0,g.jsxs)(g.Fragment,{children:[(0,g.jsxs)("div",{children:[(0,g.jsx)(r.cC,{id:"Compare"}),u&&`: ${u}`]}),(0,g.jsx)("div",{children:(0,g.jsxs)("fieldset",{role:"group",children:[(0,g.jsx)("button",{onClick:()=>{s.current({action:"compare"})},children:"Compare"}),(0,g.jsx)("button",{onClick:()=>{var e;P="cmp",null===(e=L.current)||void 0===e||e.click()},"data-tooltip":"Load file","data-placement":"left",children:"\ud83d\udcc2"})]})})]}),children:(0,g.jsx)(y.M,{value:e.compare,highlight:e.resultHighlight,disabled:!0,onChange:function(e){},onCursorPositionChange:e=>{e!=b.current&&(b.current=e,t.updateHighlight(e,!1))},language:"",lineNumberTransform:e=>(e-1).toString()})})]})},w=N}}]);