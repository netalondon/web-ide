"use strict";(self.webpackChunk_nand2tetris_web=self.webpackChunk_nand2tetris_web||[]).push([[996],{9200:(t,e,n)=>{n.d(e,{M:()=>h});var s=n(5072),i=n(1703),r=n(6845),o=n(8722),a=n(864);const u=t=>{let{error:e}=t;return e?(0,a.jsxs)("details",{className:"ErrorPanel",open:!0,children:[(0,a.jsx)("summary",{role:"button",className:"secondary",children:(0,a.jsx)(s.cC,{id:"Parse Error"})}),(0,a.jsx)("pre",{children:(0,a.jsx)("code",{children:null===e||void 0===e?void 0:e.message})})]}):(0,a.jsx)(a.Fragment,{})},l=t=>{let{value:e,onChange:n,language:s,disabled:i=!1}=t;const[o,u]=(0,r.useState)(e);return(0,a.jsx)("textarea",{"data-testid":`editor-${s}`,disabled:i,value:o,onChange:t=>{var e;const s=null===(e=t.target)||void 0===e?void 0:e.value;u(s),n(s)}})},c=t=>{let{value:e,onChange:n,onCursorPositionChange:s,language:u,error:l,disabled:c=!1,highlight:h,customDecorations:d=[],dynamicHeight:m=!1,lineNumberTransform:p}=t;const{theme:g}=(0,r.useContext)(o.Il),f=(0,i.Ik)(),[b,v]=(0,r.useState)(0),w=(0,r.useRef)(),A=(0,r.useRef)([]),y=(0,r.useRef)(void 0),x=(0,r.useRef)([]),D=(0,r.useCallback)((()=>("system"===g?window.matchMedia("(prefers-color-scheme: dark)").matches:"dark"===g)?"vs-dark":"vs"),[g]),M=(0,r.useCallback)((()=>{var t;A.current=((t,e,n,s,i)=>{if(!e||!n)return i;const r=e.getModel();if(!r)return i;const o=r.getPositionAt(n.start),a=r.getPositionAt(n.end),u=null===t||void 0===t?void 0:t.Range.fromPositions(o,a),l=[];u&&(l.push({range:u,options:{inlineClassName:"highlight"}}),n.start!=n.end&&e.revealRangeInCenter(u));for(const c of s){const e=null===t||void 0===t?void 0:t.Range.fromPositions(r.getPositionAt(c.span.start),r.getPositionAt(c.span.end));e&&l.push({range:e,options:{inlineClassName:c.cssClass}})}return e.deltaDecorations(i,l)})(f,w.current,null!==(t=y.current)&&void 0!==t?t:{start:0,end:0,line:0},x.current,A.current)}),[A,f,w,y]),S=()=>{if(m){var t;const e=null===(t=w.current)||void 0===t?void 0:t.getContentHeight();e&&v(e)}};(0,r.useEffect)((()=>{y.current=h,M()}),[h]),(0,r.useEffect)((()=>{x.current=d,M()}),[d]);const C=(0,r.useCallback)((t=>{var e,n;w.current=t,null===(e=w.current)||void 0===e||e.updateOptions({fontFamily:'"JetBrains Mono", source-code-pro, Menlo, Monaco,\n      Consolas, "Roboto Mono", "Ubuntu Monospace", "Noto Mono", "Oxygen Mono",\n      "Liberation Mono", monospace, "Apple Color Emoji", "Segoe UI Emoji",\n      "Segoe UI Symbol", "Noto Color Emoji"',fontSize:16,minimap:{enabled:!1},theme:D(),scrollBeyondLastLine:!1,readOnly:c,lineNumbers:null!==p&&void 0!==p?p:"on",folding:!1}),M(),S(),null===(n=w.current)||void 0===n||n.onDidChangeCursorPosition((t=>{var e,n;const i=null===(e=w.current)||void 0===e||null===(n=e.getModel())||void 0===n?void 0:n.getOffsetAt(t.position);void 0!==i&&(null===s||void 0===s||s(i))}))}),[D]);(0,r.useEffect)((()=>{void 0!==w.current&&w.current.updateOptions({lineNumbers:null!==p&&void 0!==p?p:"on"})}),[p]),(0,r.useEffect)((()=>{void 0!==w.current&&w.current.updateOptions({theme:D()})}),[w,D]),(0,r.useEffect)((()=>{void 0!==w.current&&w.current.updateOptions({readOnly:c})}),[w,c]),(0,r.useEffect)((()=>{if(void 0===w.current)return;if(null===f)return;const t=w.current.getModel();if(null===t)return;if(void 0===l||void 0===l.span)return void f.editor.setModelMarkers(t,u,[]);const e=t.getPositionAt(l.span.start),n=t.getPositionAt(l.span.end);f.editor.setModelMarkers(t,u,[{message:l.message,startColumn:e.column,startLineNumber:e.lineNumber,endColumn:n.column,endLineNumber:n.lineNumber,severity:8}])}),[l,w,f,u]);return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(i.ZP,{value:e,onChange:function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";S(),n(t)},language:u,onMount:C,height:m?b:void 0})})},h=t=>{let{className:e="",style:n={},disabled:s=!1,value:i,error:h,onChange:d,onCursorPositionChange:m,grammar:p,language:g,highlight:f,customDecorations:b=[],dynamicHeight:v=!1,lineNumberTransform:w}=t;const{monaco:A}=(0,r.useContext)(o.Il);return(0,a.jsx)("div",{className:`Editor ${v?"dynamic-height":""} ${e}`,style:n,children:A.canUse&&A.wants?(0,a.jsx)(c,{value:i,onChange:d,onCursorPositionChange:m,language:g,error:h,disabled:s,highlight:f,customDecorations:b,dynamicHeight:v,lineNumberTransform:w}):(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(l,{value:i,onChange:d,language:g,disabled:s}),(0,a.jsx)(u,{error:h})]})})}},8398:(t,e,n)=>{n.d(e,{G:()=>r,s:()=>i});var s=n(864);const i=t=>{var e;return(0,s.jsxs)("article",{className:["panel",null!==(e=t.className)&&void 0!==e?e:""].join(" "),children:[t.header&&(0,s.jsx)("header",{children:t.header}),(0,s.jsx)("main",{children:t.children}),t.footer&&(0,s.jsx)("footer",{children:t.footer})]})},r=t=>{var e;return(0,s.jsxs)("details",{className:null!==(e=t.className)&&void 0!==e?e:"",open:t.open,style:t.style,children:[(0,s.jsx)("summary",{children:(0,s.jsx)("div",{className:"flex row align-baseline",children:t.summary})}),t.children]})}},6604:(t,e,n)=>{n.d(e,{C:()=>r,i:()=>o});var s=n(4983),i=n(6845);function r(t,e){return(0,i.useReducer)(((e,n)=>(0,s.ZP)(e,(e=>{t[n.action](e,n.payload)}))),e)}function o(t){const[e,n]=(0,i.useState)(t);return(0,i.useEffect)((()=>{n(t)}),[t]),[e,n]}},6791:(t,e,n)=>{n.d(e,{D:()=>o});var s=n(864),i=n(6845),r=n(6604);const o=t=>{const e=function(t){const e=(0,i.useRef)((()=>{})),{initialState:n,reducers:s,actions:o}=(0,i.useMemo)((()=>((t,e)=>{const n={running:t.running,speed:t.speed,steps:t.steps},s=t.finishFrame.bind(t);return t.finishFrame=function(){s(),e.current({action:"update"})},{initialState:n,reducers:{update(e){e.running=t.running,e.speed=t.speed,e.steps=t.steps},setSteps(e,n){e.steps=n,t.steps=n},setSpeed(e,n){e.speed=n,t.speed=n}},actions:{frame(){t.frame()},start(){t.start(),e.current({action:"update"})},stop(){t.stop(),e.current({action:"update"})},reset(){t.reset(),e.current({action:"update"})}}}})(t,e)),[t,e]),[a,u]=(0,r.C)(s,n);return e.current=u,{state:a,dispatch:e.current,actions:o}}(t.runner),[n,o]=(0,i.useState)(0),a={0:[1e3,1],1:[500,1],2:[16,1],3:[16,16666],4:[16,499980]};(0,i.useEffect)((()=>{u()}),[n]);const u=()=>{const[t,s]=a[n];e.dispatch({action:"setSpeed",payload:t}),e.dispatch({action:"setSteps",payload:s})};return(0,s.jsxs)("fieldset",{role:"group",children:[t.prefix,(0,s.jsx)("button",{className:"flex-0",disabled:t.disabled,onClick:()=>e.actions.frame(),"data-tooltip":t.overrideTooltips?.step??"Step","data-placement":"bottom",children:"\u27a1\ufe0f"}),(0,s.jsx)("button",{className:"flex-0",disabled:t.disabled,onClick:()=>e.state.running?e.actions.stop():e.actions.start(),"data-tooltip":e.state.running?t.overrideTooltips?.pause??"Pause":t.overrideTooltips?.run??"Run","data-placement":"bottom",children:e.state.running?"\u23f8":"\ufe0f\u23e9"}),(0,s.jsx)("button",{className:"flex-0",disabled:t.disabled,onClick:()=>e.actions.reset(),"data-tooltip":t.overrideTooltips?.reset??"Reset","data-placement":"bottom",children:"\u23ee"}),(0,s.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",fontSize:16,fontWeight:"normal"},children:[(0,s.jsx)("span",{style:{padding:"0.2rem"},children:"Slow"}),(0,s.jsx)("input",{type:"range",min:0,max:4,step:1,value:n,disabled:e.state.running,onChange:e=>{o(Number(e.target.value)),t.onSpeedChange?.(Number(e.target.value))},style:{width:"150px",padding:"0.2rem"},"data-tooltip":"Execution speed","data-placement":"bottom"}),(0,s.jsx)("span",{style:{padding:"0.2rem"},children:"Fast"})]}),t.children]})}},5524:(t,e,n)=>{n.d(e,{Af:()=>b,Gc:()=>u,P9:()=>v,lj:()=>o,qP:()=>h,tI:()=>w,yE:()=>a});var s=n(7239),i=n(8177),r=n(5424);const o=1,a=0;class u{name;width;state;next=[];constructor(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;this.name=t,this.width=e,this.state=(0,i.w)(0,this.width).map((()=>a))}ensureWidth(t){(0,s.hu)(t<=16,`Cannot widen past 16 to ${t} bits`),this.width<t&&(this.width=t,this.state=[...this.state,...(0,i.w)(this.width,t).map((()=>a))])}connect(t){this.next.push(t),t.busVoltage=this.busVoltage}pull(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;(0,s.hu)(e>=0&&e<this.width,`Bit out of bounds: ${this.name}@${e}`),this.state[e]=t,this.next.forEach((n=>n.pull(t,e)))}voltage(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return(0,s.hu)(t>=0&&t<this.width),this.state[t]}set busVoltage(t){for(const e of(0,i.w)(0,this.width))this.state[e]=(t&1<<e)>>e;this.next.forEach((t=>t.busVoltage=this.busVoltage))}get busVoltage(){return(0,i.w)(0,this.width).reduce(((t,e)=>t|this.state[e]<<e),0)}toggle(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;const e=this.voltage(t)===a?o:a;this.pull(e,t)}}class l extends u{bus;start;width;constructor(t,e){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;super(t.name),this.bus=t,this.start=e,this.width=n,(0,s.hu)(e>=0&&e+n<=t.width,`Mismatched InSubBus dimensions on ${t.name} (${n} + ${e} > ${t.width})`),this.connect(t)}pull(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;(0,s.hu)(e>=0&&e<this.width),this.bus.pull(t,this.start+e)}voltage(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return(0,s.hu)(t>=0&&t<this.width),this.bus.voltage(this.start+t)}set busVoltage(t){const e=this.bus.busVoltage&~A(this.width+this.start),n=this.bus.busVoltage&A(this.start),s=(t&A(this.width))<<this.start;this.bus.busVoltage=e|s|n}get busVoltage(){return this.bus.busVoltage>>this.start&A(this.width)}connect(t){(0,s.hu)(this.start+this.width<=t.width,`Mismatched InSubBus connection dimensions (From ${t.name} to ${this.name})`),this.bus=t}}class c extends u{bus;start;width;constructor(t,e){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;super(t.name),this.bus=t,this.start=e,this.width=n,(0,s.hu)(e>=0&&n<=t.width,"Mismatched OutSubBus dimensions"),this.connect(t)}set busVoltage(t){this.bus.busVoltage=(t&A(this.width+this.start))>>this.start}get busVoltage(){return this.bus.busVoltage&A(this.width)}connect(t){(0,s.hu)(this.width<=t.width,"Mismatched OutSubBus connection dimensions"),this.bus=t}}class h extends u{value;constructor(t,e){super(t,16),this.value=e}pullHigh(){}pullLow(){}voltage(){return 1&this.busVoltage}set busVoltage(t){}get busVoltage(){return this.value}}const d=new h("true",65535),m=new h("false",0);function p(t){const{pin:e,w:n}=t.match(/(?<pin>[a-zA-Z]+)(\[(?<w>\d+)\])?/)?.groups;return{pin:e,width:n?Number(n):1}}class g{map=new Map;insert(t){const{name:e}=t;(0,s.hu)(!this.map.has(e),`Pins already has ${e}!`),this.map.set(e,t)}emplace(t,e){if(this.has(t))return this.get(t);{const n=new u(t,e);return this.insert(n),n}}has(t){return this.map.has(t)}get(t){return this.map.get(t)}entries(){return this.map.values()}[Symbol.iterator](){return this.map[Symbol.iterator]()}}let f=0;class b{name;id=f++;ins=new g;outs=new g;pins=new g;parts=new Set;clockedPins;get clocked(){if(this.clockedPins.size>0)return!0;for(const t of this.parts)if(t.clocked)return!0;return!1}constructor(t,e,n){let s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:[];this.name=n;for(const r of t){const{pin:t,width:e=1}=void 0!==r.pin?r:p(r);this.ins.insert(new u(t,e))}for(const r of e){const{pin:t,width:e=1}=void 0!==r.pin?r:p(r);this.outs.insert(new u(t,e))}for(const r of s){const{pin:t,width:e=1}=void 0!==r.pin?r:p(r);this.pins.insert(new u(t,e))}this.clockedPins=new Set(i),r.S.get().$.subscribe((()=>this.eval()))}reset(){for(const[t,e]of this.ins)e.busVoltage=0;for(const t of this.parts)t.reset();this.eval()}in(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"in";return(0,s.hu)(this.hasIn(t),`No in pin ${t}`),this.ins.get(t)}out(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"out";return(0,s.hu)(this.hasOut(t),`No in pin ${t}`),this.outs.get(t)}hasIn(t){return this.ins.has(t)}hasOut(t){return this.outs.has(t)}pin(t){return(0,s.hu)(this.pins.has(t)),this.pins.get(t)}get(t,e){return this.ins.has(t)?this.ins.get(t):this.outs.has(t)?this.outs.get(t):this.pins.has(t)?this.pins.get(t):this.getBuiltin(t,e)}getBuiltin(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;if(y.includes(t))for(const n of this.parts){const s=n.get(t,e);if(s)return s}}isInPin(t){return this.ins.has(t)}isOutPin(t){return this.outs.has(t)}wire(t,e){this.parts.add(t);for(const{to:n,from:s}of e)t.isOutPin(n.name)?this.wireOutPin(t,n,s):this.wireInPin(t,n,s)}findPin(t,e){return"true"===t||"1"===t?d:"false"===t||"0"===t?m:this.ins.has(t)?this.ins.get(t):this.outs.has(t)?this.outs.get(t):this.pins.emplace(t,e)}wireOutPin(t,e,n){const i=(0,s.kP)(t.outs.get(e.name),(()=>`Cannot wire to missing pin ${e.name}`));e.width??=i.width;let r=this.findPin(n.name,n.width??e.width);const o=this.pins.has(r.name);if(n.width??=r.width,r instanceof h)throw new Error("Cannot wire to constant bus");o&&r instanceof u&&r.ensureWidth(n.start+n.width),(n.start>0||n.width!==r.width)&&(r=new l(r,n.start,n.width)),(e.start>0||e.width!==r.width)&&(r=new c(r,e.start,e.width)),i.connect(r)}wireInPin(t,e,n){let i=(0,s.kP)(t.ins.get(e.name),(()=>`Cannot wire to missing pin ${e.name}`));e.width??=i.width;const r=this.findPin(n.name,n.width??e.width);n.width??=r.width,(e.start>0||e.width!==r.width)&&(i=new l(i,e.start,e.width)),["true","false"].includes(r.name)||(n.start>0||n.width!==r.width)&&(i=new c(i,n.start,n.width)),r.connect(i)}eval(){for(const t of this.parts)d.next.forEach((t=>t.busVoltage=d.busVoltage)),m.next.forEach((t=>t.busVoltage=m.busVoltage)),t.eval()}tick(){this.eval()}tock(){this.eval()}remove(){for(const t of this.parts)t.remove()}async load(t,e){for(const n of this.parts)"ROM32K"===n.name&&await n.load(t,e)}}class v extends b{constructor(){super([],[]),this.outs.insert(m)}}class w extends b{get clocked(){return!0}#t=r.S.get().$.subscribe((t=>{let{level:e}=t;e===a?this.tock():this.tick()}));remove(){this.#t.unsubscribe(),super.remove()}reset(){super.reset(),this.tick(),this.tock()}}function A(t){return Math.pow(2,t)-1}const y=["Register","ARegister","DRegister","PC","RAM8","RAM64","RAM512","RAM4K","RAM16K","ROM32K","Screen","Keyboard","Memory"]},5424:(t,e,n)=>{n.d(e,{S:()=>u});var s=n(5728),i=n(1370),r=n(7239),o=n(5524);let a;class u{level=o.yE;ticks=0;static get(){return void 0===a&&(a=new u),a}get isHigh(){return this.level===o.lj}get isLow(){return this.level===o.yE}subject=new s.X({level:this.level,ticks:this.ticks});frameSubject=new i.x;resetSubject=new i.x;$=this.subject;frame$=this.frameSubject;reset$=this.resetSubject;next(){this.subject.next({level:this.level,ticks:this.ticks})}constructor(){}reset(){this.level=o.yE,this.ticks=0,this.next(),this.resetSubject.next()}tick(){(0,r.hu)(this.level===o.yE,"Can only tick up from LOW"),this.level=o.lj,this.next()}tock(){(0,r.hu)(this.level===o.lj,"Can only tock down from HIGH"),this.level=o.yE,this.ticks+=1,this.next()}toggle(){this.level===o.lj?this.tock():this.tick()}eval(){this.tick(),this.tock()}frame(){this.frameSubject.next()}toString(){return`${this.ticks}${this.level===o.lj?"+":""}`}}},137:(t,e,n)=>{n.d(e,{Bb:()=>p,Mr:()=>h,NM:()=>r,PH:()=>o,PK:()=>u,Uc:()=>l,lK:()=>d,uc:()=>i,vU:()=>m});const s=new Set(["0","1","-1","D","A","!D","!A","-D","-A","D+1","A+1","D-1","A-1","D+A","D-A","A-D","D&A","D|A"]);function i(t){return s.has(t)}const r={op:{42:"0",63:"1",58:"-1",12:"x",48:"y",13:"!x",49:"!y",15:"-x",51:"-y",31:"x+1",55:"y+1",14:"x-1",50:"y-1",2:"x+y",19:"x-y",7:"y-x",0:"x&y",21:"x|y"}},o={asm:{0:42,1:63,"-1":58,D:12,A:48,"!D":13,"!A":49,"-D":15,"-A":51,"D+1":31,"A+1":55,"D-1":14,"A-1":50,"D+A":2,"D-A":19,"A-D":7,"D&A":0,"D|A":21},op:{42:"0",63:"1",58:"-1",12:"D",48:"A",13:"!D",49:"!A",15:"-D",51:"-A",31:"D+1",55:"A+1",14:"D-1",50:"A-1",2:"D+A",19:"D-A",7:"A-D",0:"D&A",21:"D|A"},getOp:t=>o.asm[t.replace("M","A")]},a=new Set(["","M","D","MD","A","AM","AD","AMD"]);function u(t){return a.has(t)}const l={asm:{"":0,M:1,D:2,MD:3,A:4,AM:5,AD:6,AMD:7},op:{0:"",1:"M",2:"D",3:"MD",4:"A",5:"AM",6:"AD",7:"AMD"}},c=new Set(["","JGT","JEQ","JGE","JLT","JNE","JLE","JMP"]);function h(t){return c.has(t)}const d={asm:{"":0,JGT:1,JEQ:2,JGE:3,JLT:4,JNE:5,JLE:6,JMP:7},op:{0:"",1:"JGT",2:"JEQ",3:"JGE",4:"JLT",5:"JNE",6:"JLE",7:"JMP"}},m={1:"Positive",0:"Zero",15:"Negative",Positive:1,Zero:0,Negative:15};function p(t,e,n){let s=0;switch(t){case 42:s=0;break;case 63:s=1;break;case 58:s=-1;break;case 12:s=e;break;case 48:s=n;break;case 13:s=~e;break;case 49:s=~n;break;case 15:s=-e;break;case 51:s=-n;break;case 31:s=e+1;break;case 55:s=n+1;break;case 14:s=e-1;break;case 50:s=n-1;break;case 2:s=e+n;break;case 19:s=e-n;break;case 7:s=n-e;break;case 0:s=e&n;break;case 21:s=e|n}s&=65535;return[s,0===s?m.Zero:32768&s?m.Negative:m.Positive]}},2201:(t,e,n)=>{n.d(e,{FH:()=>g,GD:()=>u,I2:()=>a,eD:()=>p,eu:()=>c,kG:()=>d,qT:()=>m,yJ:()=>l,zp:()=>h});var s=n(7239),i=n(9415),r=n(6871),o=n(5150);const a=["bin","dec","hex","asm"],u=16384,l=8192,c=24576;class h{memory;get size(){return this.memory.length}constructor(t){this.memory=new Int16Array(t)}get(t){return t<0||t>=this.size?65535:this.memory[t]??0}set(t,e){t>=0&&t<this.size&&(this.memory[t]=65535&e)}reset(){this.memory.fill(0)}update(t,e,n){let s;switch(n){case"asm":try{s=(0,r.op)(e)}catch{s=void 0}break;case"bin":s=(0,o.C$)(e);break;case"hex":s=(0,o.Af)(e);break;default:s=(0,o.o5)(e)}void 0!==s&&isFinite(s)&&s<=65535&&this.set(t,s)}async load(t,e,n){try{this.loadBytes(await(0,i.zD)(t,e),n)}catch(s){throw new Error(`Memory Failed to load file ${e}`)}}loadBytes(t,e){this.memory.set(new Int16Array(t),e),this.memory.fill(0,t.length,this.size)}range(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.size;return[...this.memory.slice(t,e)]}map(t){var e=this;let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this.size;return function*(){(0,s.hu)(n<=i);for(let s=n;s<i;s++)yield t(s,e.get(s))}()}[Symbol.iterator](){return this.map(((t,e)=>e))}}class d{parent;size;offset;constructor(t,e,n){this.parent=t,this.size=e,this.offset=n}get(t){return t<0||t>=this.size?65535:this.parent.get(this.offset+t)}set(t,e){t>=0&&t<this.size&&this.parent.set(t+this.offset,e)}reset(){for(let t=0;t<this.size;t++)this.set(t,0)}update(t,e,n){t>=0&&t<this.size&&this.parent.update(t+this.offset,e,n)}load(t,e){return this.parent.load(t,e,this.offset)}loadBytes(t){return this.parent.loadBytes(t,this.offset)}range(t,e){return this.parent.range(t,e)}map(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this.size;return this.parent.map(t,e+this.offset,n+this.offset)}[Symbol.iterator](){return this.map(((t,e)=>e))}}class m extends d{constructor(t){super(t,1,24576)}getKey(){return this.get(0)}setKey(t){this.set(0,65535&t)}clearKey(){this.set(0,0)}}class p extends h{static SIZE=32768;constructor(t){const e=new Int16Array(p.SIZE);e.set(t),super(e)}}class g extends h{keyboard=new d(this,1,c);screen=new d(this,l,u);static SIZE=32768;constructor(){super(g.SIZE)}}},9415:(t,e,n)=>{n.d(e,{zD:()=>i});var s=n(6699);async function i(t,e){if(e.endsWith(".hack"))return async function(t,e){return s.$W(await t.readFile(e))}(t,e);if(e.endsWith(".asm"))return async function(t,e){return s.eC(await t.readFile(e))}(t,e);throw new Error(`Cannot load file without hack or asm extension ${e}`)}},7472:(t,e,n)=>{n.d(e,{Ww:()=>w,$o:()=>p,w_:()=>d,Y_:()=>g});var s=n(7239),i=n(9814),r=n(137),o=n(2201),a=n(6871),u=n(3484);const l='\nASM <: Base {\n  Root := ASM\n  ASM = Instruction*\n  \n  Instruction = Label|AInstruction|CInstruction\n  \n  Label = OpenParen identifier closeParen\n  AInstruction = at (identifier | decNumber)\n  CInstruction = assign? op jmp?\n  \n  assign = (\n      "AMD"\n      | "AM"\n      | "AD"\n      | "MD"\n      | "M"\n      | "D"\n      | "A"\n      ) equal\n      \n  op =\n      | "0" | "1" | "-1"\n      | "!D" | "!A" | "!M"\n      | "-D" | "-A" | "-M"\n      | "D+1" | "A+1" | "M+1"\n      | "D-1" | "A-1" | "M-1"\n      | "D+A" | "D+M"\n      | "D-A" | "D-M"\n      | "A-D" | "M-D"\n      | "D&A" | "D&M"\n      | "D|A" | "D|M"\n      | "D" | "A" | "M"\n\n\n  jmp = semi ("JGT" | "JEQ" | "JGE" | "JLT" | "JNE" | "JLE" | "JMP")\n}',c=i.Z.grammar(l,u.y1),h=c.extendSemantics(u.rJ);function d(t){return"A"==t.type&&void 0!==t.value}function m(t){return"A"==t.type&&void 0!==t.label}function p(t,e){let n=16;const i=new Map([["R0",0],["R1",1],["R2",2],["R3",3],["R4",4],["R5",5],["R6",6],["R7",7],["R8",8],["R9",9],["R10",10],["R11",11],["R12",12],["R13",13],["R14",14],["R15",15],["SP",0],["LCL",1],["ARG",2],["THIS",3],["THAT",4],["SCREEN",o.GD],["KBD",o.eu]]);const r=[];let a=0;for(const s of t.instructions)if("L"!==s.type)a+=1,"A"===s.type&&m(s)&&r.push(s);else{if(i.has(s.label))throw new Error(`ASM Duplicate label ${s.label}`);i.set(s.label,a),e?.(s.label,a,!1)}r.forEach((function(t){const r=(o=t.label,i.has(o)||(i.set(o,n),e?.(o,n,!0),n+=1),(0,s.kP)(i.get(o),`Label not in symbols: ${o}`));var o;t.value=r,delete t.label}))}h.addAttribute("root",{Root(t){return this.asm}}),h.addAttribute("asm",{Root:t=>({instructions:t.child(0).children.map((t=>{let{instruction:e}=t;return e}))})}),h.addAttribute("instruction",{AInstruction(t,e){return f(e.value,(0,u.yP)(this.source))},CInstruction(t,e,n){const s=t.child(0)?.child(0)?.sourceString??"",i=e.sourceString,r=n.child(0)?.child(1)?.sourceString??"";return b(s,i,r,(0,u.yP)(this.source))},Label(t,e,n){let{name:s}=e;return v(s,(0,u.yP)(this.source))}});function g(t){if("A"===t.type){if(m(t))throw new Error("ASM Emitting unfilled A instruction");return t.value}if("C"===t.type)return(0,a.p)(t.isM,t.op,t.store??0,t.jump??0)}const f=(t,e)=>"string"===typeof t?{type:"A",label:t,span:e}:{type:"A",value:t,span:e},b=(t,e,n,s)=>{const i={type:"C",op:r.PH.getOp(e),isM:e.includes("M"),span:s};return n&&(i.jump=r.lK.asm[n]),t&&(i.store=r.Uc.asm[t]),i},v=(t,e)=>({type:"L",label:t,span:e}),w={grammar:l,semantics:h,parser:c,parse:(0,u.Pz)(c,h),passes:{fillLabel:p,emit:function(t){return t.instructions.map(g).filter((t=>void 0!==t))}},A:f,C:b,AC:(t,e,n,s)=>[f(t),b(e,n,s)],L:v}},3484:(t,e,n)=>{n.d(e,{rJ:()=>a,y1:()=>o,Pz:()=>u,yP:()=>l});var s=n(7054),i=n(9814),r=n(5150);const o={Base:i.Z.grammar('\nBase {\n  Root = Value*\n\n  At = at\n  Bang = bang\n  Bar = bar\n  CloseAngle = closeAngle\n  CloseBrace = closeBrace\n  CloseParen = closeParen\n  CloseSquare = closeSquare\n  Comma = comma\n  Dollar = dollar\n  Dot = dot\n  DoubleQuote = doubleQuote\n  Equal = equal\n  OpenAngle = openAngle\n  OpenBrace = openBrace\n  OpenParen = openParen\n  OpenSquare = openSquare\n  Percent = percent\n  Semi = semi\n  Underscore = underscore\n\n  at = "@"\n  bang = "!"\n  bar = "|"\n  closeAngle = ">"\n  closeBrace = "}"\n  closeParen = ")"\n  closeSquare = "]"\n  comma = ","\n  dollar = "$"\n  dot = "."\n  doubleQuote = "\\""\n  equal = "="\n  minus = "-"\n  newline = "\\r"? "\\n"\n  openAngle = "<"\n  openBrace = "{"\n  openParen = "("\n  openSquare = "["\n  percent = "%"\n  semi = ";"\n  underscore = "_"\n\n  Value = identifier | number | boolean\n\n  boolean = true | false\n  True = true\n  False = false\n  true = "true"\n  false = "false"\n\n  Name = identifier\n  identifier = (letter|underscore) (alnum|underscore|dot|dollar)*\n\n  Number = number\n  number = hexNumber | decNumber | binNumber\n  binNumber = ("%B") ("0"|"1")+\n  hexNumber = ("%X") hexDigit+\n  decNumber = ("%D")? (wholeDec | realDec)\n  wholeDec = minus? digit+\n  realDec = minus? digit* "." digit+\n\n  String = DoubleQuote (~doubleQuote any)* doubleQuote\n  \n  spaces := (lineComment | comment | space)*\n  commentStart = "/*"\n  commentEnd = "*/"\n  comment = commentStart (~commentEnd any)* commentEnd\n  lineCommentStart = "//"\n  lineComment = lineCommentStart (~"\\n" any)* "\\n"\n\n  List<elem, sep> = NonemptyListOf<elem, sep> sep?\n  EmptyList<elem, sep> = EmptyList<elem, sep> sep?\n}')},a=o.Base.createSemantics();function u(t,e){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:t=>{let{root:e}=t;return e};return function(i){try{const r=t.match(i);if(r.succeeded()){const t=e(r),i=n(t);return(0,s.Ok)(i)}return(0,s.UG)({message:r.shortMessage,span:l(r.getInterval())})}catch(r){return(0,s.UG)(r)}}}function l(t){return{start:t.startIdx,end:t.endIdx,line:t.getLineAndColumn().lineNum}}a.extendOperation("asIteration",{List:(t,e)=>t.asIteration()}),a.addAttribute("value",{decNumber:(t,e)=>(0,r.o5)(e.sourceString),wholeDec:(t,e)=>(0,r.o5)(e.sourceString),binNumber:(t,e)=>(0,r.C$)(e.sourceString),hexNumber:(t,e)=>(0,r.Af)(e.sourceString),Number:t=>t.value,Name:t=>t.name,identifier(t,e){return this.sourceString}}),a.addAttribute("name",{identifier(t,e){return this.sourceString},Name(t){return this.child(0)?.name}}),a.addAttribute("String",{String:(t,e,n)=>e.sourceString})},6699:(t,e,n)=>{n.d(e,{$W:()=>a,eC:()=>o,uC:()=>u});var s=n(7054),i=n(7472),r=n(5150);async function o(t){const e=(0,s.Wg)(i.Ww.parse(t));return i.Ww.passes.fillLabel(e),i.Ww.passes.emit(e)}async function a(t){return t.split("\n").filter((t=>""!==t.trim())).map(r.C$)}async function u(t){return t.split("\n").filter((t=>""!==t.trim())).map(r.t1)}},4619:(t,e,n)=>{n.d(e,{B:()=>i});const s=n(5424).S.get();class i{frame(){this.tick(),this.finishFrame()}finishFrame(){s.frame()}steps=1;speed=1e3;get running(){return this.#e}#e=!1;#n=0;#s=0;#i=async()=>{if(!this.#e)return;const t=Date.now(),e=t-this.#s;if(this.#s=t,this.#n+=e,this.#n>this.speed){let t=!1,e=this.steps;const n=`Timing ${e} steps`;for(console.time(n);!t&&e--;)t=await this.tick();console.timeEnd(n),this.finishFrame(),t&&this.stop(),this.#n-=this.speed}requestAnimationFrame(this.#i)};start(){this.#e=!0,this.#s=Date.now()-this.speed,this.#i(),this.toggle()}stop(){this.#e=!1,this.toggle()}}},6871:(t,e,n)=>{n.d(e,{a:()=>i,op:()=>r,p:()=>o});var s=n(137);function i(t){return 32768&t?function(t){t&=65535;const e=(4096&t)>>12,n=(4032&t)>>6,i=(56&t)>>3,r=7&t;if(void 0===s.PH.op[n])return"#ERR";let o=s.PH.op[n];e&&(o=o.replace(/A/g,"M"));const a=s.Uc.op[i],u=s.lK.op[r];let l=o;a&&(l=`${a}=${l}`);u&&(l=`${l};${u}`);return l}(t):function(t){return"@"+(32767&t).toString(10)}(t)}function r(t){return"@"===t[0]?function(t){return parseInt(t.substring(1),10)}(t):function(t){const e=t.match(/(?:(?<assignExists>.+)=)?(.+)(?:;(?<jumpExists>.+))?/),{assignExists:n,jumpExists:i}=e?.groups??{},r=t.match(/(?:(?<assign>[AMD]{1,3})=)?(?<operation>[-+!01ADM&|]{1,3})(?:;(?<jump>JGT|JLT|JGE|JLE|JEQ|JMP))?/);let{assign:a,jump:u}=r?.groups??{};const{operation:l}=r?.groups??{};if(a=a??(n?void 0:""),u=u??(i?void 0:""),!(0,s.PK)(a)||!(0,s.Mr)(u)||!(0,s.uc)(l)&&!(0,s.uc)(l.replace("M","A")))throw new Error("Invalid c instruction");const c=l.includes("M"),h=s.Uc.asm[a],d=s.lK.asm[u],m=s.PH.getOp(l);return o(c,m,h,d)}(t)}function o(t,e,n,s){return 57344+(t?4096:0)+(e<<6)+(n<<3)+s}},5150:(t,e,n)=>{n.d(e,{$v:()=>h,Af:()=>a,C$:()=>l,C2:()=>g,E_:()=>m,Ly:()=>d,nN:()=>p,o5:()=>u,t1:()=>c});const s=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];function i(t){return s[t]??"X"}function r(t){switch(t){case 0:return"0000";case 1:return"0001";case 2:return"0010";case 3:return"0011";case 4:return"0100";case 5:return"0101";case 6:return"0110";case 7:return"0111";case 8:return"1000";case 9:return"1001";case 10:return"1010";case 11:return"1011";case 12:return"1100";case 13:return"1101";case 14:return"1110";case 15:return"1111";default:return"erro"}}function o(t,e){return 65535&parseInt(t.replace(/[^\d a-f A-F +-.]/g,""),e)}function a(t){return o(t,16)}function u(t){return o(t,10)}function l(t){return o(t.replaceAll(" ",""),2)}function c(t){return t.toUpperCase().includes("X")?a(t):u(t)}function h(t){return`0x${i((61440&t)>>12)}${i((3840&t)>>8)}${i((240&t)>>4)}${i(15&t)}`}function d(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:16;const n=r((61440&t)>>12),s=r((3840&t)>>8),i=r((240&t)>>4),o=r(15&t);return`${n}${s}${i}${o}`.substring(16-e)}function m(t){return 32768===(t&=65535)?"-32768":32768&t?`-${t=1+~t&32767}`:`${t}`}function p(t){return`${t&=65535}`}function g(t,e){let n=~((t&=65535)&(e&=65535));return n&=65535,n}}}]);