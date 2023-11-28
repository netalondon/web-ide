"use strict";(self.webpackChunk_nand2tetris_web=self.webpackChunk_nand2tetris_web||[]).push([[678],{1539:(e,t,n)=>{n.d(t,{M:()=>g});var s=n(8061),r=n(9659),a=n(7536),o=n(6167),i=n(8016),l=n(1510),c=n(7878);const u=e=>{var t,n;let{error:r}=e;return null!==r&&void 0!==r&&r.failed()?(0,c.jsxs)("details",{className:"ErrorPanel",open:!0,children:[(0,c.jsx)("summary",{role:"button",className:"secondary",children:(0,c.jsx)(s.cC,{id:"Parse Error"})}),(0,c.jsx)("pre",{children:(0,c.jsx)("code",{children:null!==(t=null!==(n=null===r||void 0===r?void 0:r.message)&&void 0!==n?n:null===r||void 0===r?void 0:r.shortMessage)&&void 0!==t?t:l.eP})})]}):(0,c.jsx)(c.Fragment,{})},d=e=>{let{value:t,onChange:n,language:s,disabled:r=!1}=e;const[a,i]=(0,o.useState)(t);return(0,c.jsx)("textarea",{"data-testid":`editor-${s}`,disabled:r,value:a,onChange:e=>{var t;const s=null===(t=e.target)||void 0===t?void 0:t.value;i(s),n(s)}})},h=e=>{let{value:t,onChange:n,onCursorPositionChange:s,language:r,error:l,disabled:u=!1,highlight:d,dynamicHeight:h=!1,lineNumberTransform:g}=e;const{theme:m}=(0,o.useContext)(i.Il),p=(0,a.Ik)(),[f,x]=(0,o.useState)(0),v=(0,o.useRef)(),b=(0,o.useRef)([]),y=(0,o.useRef)(void 0),j=(0,o.useCallback)((()=>("system"===m?window.matchMedia("(prefers-color-scheme: dark)").matches:"dark"===m)?"vs-dark":"vs"),[m]),C=(0,o.useCallback)((()=>{var e;b.current=((e,t,n,s)=>{if(!t||!n)return s;const r=t.getModel();if(!r)return s;const a=r.getPositionAt(n.start),o=r.getPositionAt(n.end),i=null===e||void 0===e?void 0:e.Range.fromPositions(a,o),l=[];return i&&(l.push({range:i,options:{inlineClassName:"highlight"}}),t.revealRangeInCenter(i)),t.deltaDecorations(s,l)})(p,v.current,null!==(e=y.current)&&void 0!==e?e:{start:0,end:0},b.current)}),[b,p,v,y]),k=()=>{if(h){var e;const t=null===(e=v.current)||void 0===e?void 0:e.getContentHeight();t&&x(t)}};(0,o.useEffect)((()=>{y.current=d,C()}),[d]);const w=(0,o.useCallback)((e=>{var t,n;v.current=e,null===(t=v.current)||void 0===t||t.updateOptions({fontFamily:'"JetBrains Mono", source-code-pro, Menlo, Monaco,\n      Consolas, "Roboto Mono", "Ubuntu Monospace", "Noto Mono", "Oxygen Mono",\n      "Liberation Mono", monospace, "Apple Color Emoji", "Segoe UI Emoji",\n      "Segoe UI Symbol", "Noto Color Emoji"',fontSize:16,minimap:{enabled:!1},theme:j(),scrollBeyondLastLine:!1,readOnly:u,lineNumbers:null!==g&&void 0!==g?g:"on"}),C(),k(),null===(n=v.current)||void 0===n||n.onDidChangeCursorPosition((e=>{var t,n;const r=null===(t=v.current)||void 0===t||null===(n=t.getModel())||void 0===n?void 0:n.getOffsetAt(e.position);void 0!==r&&(null===s||void 0===s||s(r))}))}),[j]);(0,o.useEffect)((()=>{void 0!==v.current&&v.current.updateOptions({lineNumbers:null!==g&&void 0!==g?g:"on"})}),[g]),(0,o.useEffect)((()=>{void 0!==v.current&&v.current.updateOptions({theme:j()})}),[v,j]),(0,o.useEffect)((()=>{void 0!==v.current&&v.current.updateOptions({readOnly:u})}),[v,u]),(0,o.useEffect)((()=>{var e,t,n,s,a;if(void 0===v.current)return;if(null===p)return;const o=v.current.getModel();if(null===o)return;if(void 0===l||l.succeeded())return void p.editor.setModelMarkers(o,r,[]);const{line:i,column:c,message:u}=null!==(e=null===(t=/Line (?<line>\d+), col (?<column>\d+): (?<message>.*)/.exec(null!==(n=l.shortMessage)&&void 0!==n?n:""))||void 0===t?void 0:t.groups)&&void 0!==e?e:{line:1,column:1,message:"could not parse error"},d=Number(i),h=d,g=Number(c);let m=g+(null!==(s=null===(a=o.getLineContent(d).substring(g-1).match(/([^\s]+)/))||void 0===a?void 0:a[0].length)&&void 0!==s?s:1);m<=g&&(m=g+1),p.editor.setModelMarkers(o,r,[{message:u,startColumn:g,startLineNumber:d,endColumn:m,endLineNumber:h,severity:8}])}),[l,v,p,r]);return(0,c.jsx)(c.Fragment,{children:(0,c.jsx)(a.ZP,{value:t,onChange:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";k(),n(e)},language:r,onMount:w,height:h?f:void 0})})},g=e=>{let{className:t="",style:n={},disabled:s=!1,value:a,onChange:l,onCursorPositionChange:g,grammar:m,language:p,highlight:f,dynamicHeight:x=!1,lineNumberTransform:v}=e;const[b,y]=(0,o.useState)(),{monaco:j}=(0,o.useContext)(i.Il),C=(0,o.useCallback)((function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";if(m){const t=m.match(e);y(t.failed()?t:void 0)}}),[y,m]);(0,o.useEffect)((()=>C(a)),[C,a]);const k=(0,o.useMemo)((()=>(0,r.D)(C,500)),[C]),w=(0,o.useCallback)((function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";l(e),k(e)}),[k,l]);return(0,c.jsx)("div",{className:`Editor ${x?"dynamic-height":""} ${t}`,style:n,children:j.canUse&&j.wants?(0,c.jsx)(h,{value:a,onChange:w,onCursorPositionChange:g,language:p,error:b,disabled:s,highlight:f,dynamicHeight:x,lineNumberTransform:v}):(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(d,{value:a,onChange:w,language:p,disabled:s}),(0,c.jsx)(u,{error:b})]})})}},1124:(e,t,n)=>{n.d(t,{G:()=>a,s:()=>r});var s=n(7878);const r=e=>{var t;return(0,s.jsxs)("article",{className:["panel",null!==(t=e.className)&&void 0!==t?t:""].join(" "),children:[e.header&&(0,s.jsx)("header",{children:e.header}),(0,s.jsx)("main",{children:e.children}),e.footer&&(0,s.jsx)("footer",{children:e.footer})]})},a=e=>{var t;return(0,s.jsxs)("details",{className:null!==(t=e.className)&&void 0!==t?t:"",open:e.open,style:e.style,children:[(0,s.jsx)("summary",{children:(0,s.jsx)("div",{className:"flex row align-baseline",children:e.summary})}),e.children]})}},2277:(e,t,n)=>{n.d(t,{N:()=>l});var s=n(7878),r=n(6167),a=n(6830);const o={Enter:128,Backspace:129,ArrowLeft:130,ArrowUp:131,ArrowRight:132,ArrowDown:133,Home:134,End:135,PageUp:136,PageDown:137,Insert:138,Delete:139,Escape:140,F1:141,F2:142,F3:143,F4:144,F5:145,F6:146,F7:147,F8:148,F9:149,F10:150,F11:151,F12:152},i={ArrowLeft:"L-arrow",ArrowUp:"U-arrow",ArrowRight:"R-arrow",ArrowDown:"D-arrow"};const l=e=>{let{keyboard:t,update:n}=e;const[l,c]=(0,r.useState)(!1),[u,d]=(0,r.useState)(""),[h,g]=(0,r.useState)(t.getKey());let m=0;const p=e=>{if(!l)return;d(function(e){return i[e]||e}(e.key));const t=function(e){const t=o[e.key];if(void 0!==t)return t;if(1===e.key.length){const t=e.key.charCodeAt(0);if(t>=32&&t<=126)return t}return 0}(e);t!==m&&(x(t),n?.())},f=e=>{l&&(m=0,t.clearKey(),n?.(),g(t.getKey()),d(""))},x=e=>{0!==e&&(t.setKey(e),g(t.getKey()),m=e)};return(0,r.useEffect)((()=>(window.addEventListener("keydown",p),window.addEventListener("keyup",f),()=>{window.removeEventListener("keydown",p),window.removeEventListener("keyup",f)}))),(0,s.jsxs)("div",{className:"flex row align-baseline",children:[(0,s.jsx)("div",{className:"flex-2",children:(0,s.jsx)(a.y,{name:"Key",bits:h})}),(0,s.jsx)("div",{className:"flex-2",children:`Char: ${u}`}),(0,s.jsx)("div",{className:"flex-3",children:(0,s.jsx)("button",{onClick:()=>{c(!l)},children:(l?"Disable":"Enable")+" Keyboard"})})]})}},6832:(e,t,n)=>{n.d(t,{zp:()=>j,ZP:()=>C});var s=n(7878),r=n(8039),a=n(6167),o=n(5838),i=n(8786),l=n(7693),c=n(326),u=n(7030),d=n(290);var h=n(7559);const g=0,m=1,p=e=>{const[t,n]=(0,a.useState)(e.mode??g),[r,o]=(0,h.i)(e.value),i=()=>{return(0,s.jsx)("span",{style:{cursor:"text",...(e="full",t="inline",void 0===e&&void 0!==d.BM[t]&&(e=t),{..."inline"===t?{display:"inline-block"}:{},width:d.BM[e]??"0"})},onClick:()=>{n(m)},children:r});var e,t},l=(0,a.useCallback)((e=>e?.select()),[]),c=(0,a.useCallback)((t=>{n(g),o(t.value??""),e.onChange(t.value??"")}),[e,n,o]),u=()=>(0,s.jsx)("span",{style:{display:"block",position:"relative"},children:(0,s.jsx)("input",{ref:l,style:{zIndex:"10",position:"absolute",left:"0",marginTop:"-0.375rem",color:"black"},onFocus:e.onFocus,onBlur:e=>{let{target:t}=e;return c(t)},onKeyPress:e=>{let{key:t,target:n}=e;"Enter"===t&&c(n)},type:"text",defaultValue:r})});return(()=>{switch(t){case m:return u();case g:return i();default:return(0,s.jsx)("span",{})}})()};var f=n(8698);function x(e,t,n){const{totalHeight:s,toleranceHeight:r,bufferedItems:a,settings:{itemHeight:o,minIndex:i,maxIndex:l}}=t,c=i+Math.floor((e-r)/o),u=function(e,t,n,s,r){const a=Math.max(0,e,n);return[...r(a,Math.min(t,n+s-1)-a)]}(i,l,c,a,n),d=Math.max((c-i)*o,0);return{scrollTop:e,topPaddingHeight:d,bottomPaddingHeight:Math.max(s-(d+u.length*o),0),data:u}}const v=e=>{const t=(0,a.useRef)(null),{settings:n,startState:r,reducer:o}=(0,a.useMemo)((()=>{const t=function(e){const{minIndex:t=0,maxIndex:n=Number.MAX_SAFE_INTEGER,startIndex:s=0,itemHeight:r=20,count:a=Math.max(n-t,1),tolerance:o=a}=e;return{minIndex:t,maxIndex:n,startIndex:s,itemHeight:r,count:a,tolerance:o}}(e.settings??{}),n=function(e,t){const{minIndex:n,maxIndex:s,startIndex:r,itemHeight:a,count:o,tolerance:i}=e,l=o+2*i,c=Math.max(0,r-i-n),u=o*a,d=Math.max(s-n,1)*a,h=i*a,g=c*a,m={scrollTop:0,settings:e,viewportHeight:u,totalHeight:d,toleranceHeight:h,bufferedItems:l,topPaddingHeight:g,bottomPaddingHeight:d-(g+(u+2*h)),data:[]};return{...m,...x(g+h,m,t)}}(t,e.get),s=(r=e.get,(e,t)=>({...e,...x(t,e,r)}));var r;return{settings:t,reducer:s,startState:n}}),[e.settings,e.get]),[i,l]=(0,a.useReducer)(o,r);(0,a.useEffect)((()=>{null!==t.current&&l(t.current.scrollTop)}),[n,e.row]);const c=(0,a.useCallback)((e=>{e&&(e.scrollTop=t.current?t.current.scrollTop:n.startIndex*n.itemHeight),t.current=e}),[t,n.startIndex,n.itemHeight]),u=i.data.map((t=>(0,s.jsx)("div",{style:{height:`${n.itemHeight}px`},children:e.row(t)},e.rowKey(t))));return(0,s.jsxs)("div",{ref:c,style:{height:`${i.viewportHeight}px`,overflowY:"scroll",overflowAnchor:"none"},className:e.className??"",onScroll:e=>l(e.target.scrollTop),children:[(0,s.jsx)("div",{style:{height:`${i.topPaddingHeight}px`}}),u,(0,s.jsx)("div",{style:{height:`${i.bottomPaddingHeight}px`}})]})},b=e=>{let{memory:t,jmp:n={value:0},highlight:r=-1,editable:o=!1,justifyLeft:i=!1,format:l=c.E_,onChange:u=(()=>{}),onFocus:d=(()=>{})}=e;const h=(0,a.useMemo)((()=>({count:Math.min(t.size,25),maxIndex:t.size,itemHeight:34,startIndex:n.value})),[t.size,n]),g=(0,a.useCallback)(((e,n)=>t.range(e,e+n).map(((t,n)=>[n+e,t]))),[t]),m=(0,a.useCallback)((e=>{let[n,a]=e;return(0,s.jsx)(y,{index:n,value:l(a),size:t.size,editable:o,justifyLeft:i,highlight:n===r,onChange:u,onFocus:d})}),[l,o,r,u]);return(0,s.jsx)(v,{settings:h,get:g,row:m,rowKey:e=>{let[t]=e;return t}})},y=e=>{let{index:t,value:n,size:a,highlight:o=!1,editable:i=!1,justifyLeft:l=!1,onChange:u=(()=>{}),onFocus:d=(()=>{})}=e;return(0,s.jsxs)("div",{style:{display:"flex",height:"100%"},children:[(0,s.jsx)("code",{style:{...(0,r.eP)("none"),...o?{background:"var(--mark-background-color)"}:{},whiteSpace:"pre"},children:a?(0,c.E_)(t).padStart(Math.ceil(Math.log10(a))," "):(0,c.E_)(t)}),(0,s.jsx)("code",{style:{flex:"1",textAlign:l?"left":"right",color:"black",...(0,r.eP)("none"),...o?{background:"var(--mark-background-color)"}:{}},children:i?(0,s.jsx)(p,{value:n,highlight:o,onChange:e=>u(t,e,Number(n)),onFocus:()=>d(t)}):(0,s.jsx)("span",{style:{color:"black"},children:n})})]})},j=e=>{let{name:t="Memory",displayEnabled:n=!0,highlight:r=-1,editable:d=!0,memory:g,format:m="dec",onUpload:p,onChange:x}=e;const[v,y]=(0,a.useState)(m),[j,C]=(0,a.useState)(""),[k,w]=(0,a.useState)({value:0}),[N,S]=(0,h.i)(r),[M,E]=(0,a.useState)(0),F=()=>{const e=!isNaN(parseInt(j))&&isFinite(parseInt(j))?Number(j):0;S(e),w({value:e})},I=(0,a.useRef)(null),P=(0,a.useCallback)((()=>{x?.(),I.current?.click()}),[I]),{setStatus:H}=(0,a.useContext)(f.r),L=(0,a.useCallback)((async e=>{if(!e.target.files?.length)return void H("No file selected");const t=e.target.files[0];p?.(t.name);const n=await t.text(),s=t.name.endsWith("hack")?i.$W:t.name.endsWith("asm")?i.eC:i.uC,r=await s(n);g.loadBytes(r),e.target.value="",F()}),[]),R=()=>{E(M+1)};return(0,u._W)((()=>{C(""),w({value:0})})),(0,s.jsxs)("article",{className:`panel memory ${t}`,children:[(0,s.jsxs)("header",{children:[(0,s.jsx)("div",{children:t}),(0,s.jsxs)("fieldset",{role:"group",children:[(0,s.jsx)("input",{type:"file",style:{display:"none"},ref:I,onChange:L}),(0,s.jsx)("button",{onClick:P,className:"flex-0","data-tooltip":"Load file","data-placement":"bottom",children:"\ud83d\udcc2"}),(0,s.jsx)("button",{onClick:()=>{g.reset(),x?.(),R()},className:"flex-0","data-tooltip":"Clear","data-placement":"bottom",children:"\ud83c\udd91"}),(0,s.jsx)("input",{style:{width:"4em",height:"100%"},placeholder:"Addr",value:j,onKeyDown:e=>{let{key:t}=e;return"Enter"===t&&F()},onChange:e=>{let{target:{value:t}}=e;return C(t)}}),(0,s.jsx)("button",{onClick:F,className:"flex-0","data-tooltip":"Scroll to address","data-placement":"bottom",children:"\u2935\ufe0f"}),(0,s.jsx)("select",{value:v,onChange:e=>y(e.target.value),children:o.I2.map((e=>(0,s.jsx)("option",{children:e},e)))})]})]}),n?(0,s.jsx)(b,{jmp:k,memory:g,highlight:N,editable:d,justifyLeft:"asm"==v,format:e=>function(e,t){switch(e){case"bin":return(0,c.Ly)(t);case"hex":return(0,c.$v)(t);case"asm":return(0,l.a)(t);default:return(0,c.E_)(t)}}(v,e),onChange:(e,t)=>{g.update(e,t,v??"dec"),x?.(),R()},onFocus:e=>S(e)},M):"Memory display is disabled"]})},C=j},6830:(e,t,n)=>{n.d(t,{y:()=>a});var s=n(7878),r=n(326);const a=e=>{let{name:t,bits:n}=e;return(0,s.jsxs)("div",{children:[t,": ",(0,r.E_)(n)]})}},9613:(e,t,n)=>{n.d(t,{l:()=>c});var s=n(7878),r=n(5541),a=n(6167),o=n(7030);const i="white";function l(e,t,n,s){const r=4*(512*n+t),a=s===i?255:0;e[r]=a,e[r+1]=a,e[r+2]=a,e[r+3]=255}const c=e=>{let{memory:t}=e;const n=(0,a.useRef)(),c=(0,a.useCallback)((()=>{const e=n.current?.getContext("2d")??void 0;e&&function(e,t){const n=(0,r.kP)(e.getImageData(0,0,512,256),"Failed to create Context2d");for(let r=0;r<512;r++)for(let e=0;e<256;e++){const o=(s=r,a=e,0===(t.get(32*a+(s/16|0))&1<<s%16)?i:"black");l(n.data,r,e,o)}var s,a;e.putImageData(n,0,0)}(e,t)}),[t]),u=(0,a.useCallback)((e=>{n.current=e??void 0,c()}),[n,c]);return(0,o.RC)(c),(0,o._W)((()=>{n.current?.getContext("2d")?.clearRect(0,0,n.current.width,n.current.height)})),(0,s.jsxs)("article",{className:"panel",children:[(0,s.jsx)("header",{children:"Screen"}),(0,s.jsx)("main",{style:{backgroundColor:"var(--code-background-color)"},children:(0,s.jsx)("figure",{style:{width:"100%",maxWidth:"512px",boxSizing:"content-box",marginInline:"auto",margin:"auto",borderTop:"2px solid gray",borderLeft:"2px solid gray",borderBottom:"2px solid lightgray",borderRight:"2px solid lightgray"},children:(0,s.jsx)("canvas",{ref:u,width:512,height:256})})})]})}},7030:(e,t,n)=>{n.d(t,{RC:()=>i,_W:()=>l,uY:()=>u});var s=n(7878),r=n(6167),a=n(4408),o=n(6531);function i(e){(0,r.useEffect)((()=>{const t=o.S.get().frame$.subscribe((()=>{e()}));return()=>t.unsubscribe()}),[e])}function l(e){(0,r.useEffect)((()=>{const t=o.S.get().reset$.subscribe((()=>{e()}));return()=>t.unsubscribe()}),[e])}function c(){return(0,a.j)(o.S.get())}const u=()=>{const e=function(){const[e,t]=(0,r.useState)(c());return(0,r.useEffect)((()=>{const e=o.S.get().$.subscribe((()=>{t(c())}));return()=>e.unsubscribe()}),[]),e}();return(0,s.jsx)("span",{style:{whiteSpace:"nowrap"},children:e})}},7746:(e,t,n)=>{n.d(t,{q:()=>a});var s=n(4625),r=n(8365);const a=(e,t)=>{const n=r.lA.parse(e),a=r.lA.parse(t);if((0,s.dZ)(n)||(0,s.dZ)(a))return!1;const o=(0,s.Ok)(n),i=(0,s.Ok)(a);for(let s=0;s<Math.min(o.length,i.length);s++){const e=o[s]??[],t=i[s]??[];for(let n=0;n<Math.max(e.length,t.length);n++){const s=e[n]??"",r=t[n]??"";if(null===s?.trim().match(/^\*+$/)&&r?.trim()!==s?.trim())return!1}}return!0}},7559:(e,t,n)=>{n.d(t,{C:()=>a,i:()=>o});var s=n(1408),r=n(6167);function a(e,t){return(0,r.useReducer)(((t,n)=>(0,s.ZP)(t,(t=>{e[n.action](t,n.payload)}))),t)}function o(e){const[t,n]=(0,r.useState)(e);return(0,r.useEffect)((()=>{n(e)}),[e]),[t,n]}},258:(e,t,n)=>{n.d(t,{D:()=>o});var s=n(7878),r=n(6167),a=n(7559);const o=e=>{const t=function(e){const t=(0,r.useRef)((()=>{})),{initialState:n,reducers:s,actions:o}=(0,r.useMemo)((()=>((e,t)=>{const n={running:e.running,speed:e.speed,steps:e.steps},s=e.finishFrame.bind(e);return e.finishFrame=function(){s(),t.current({action:"update"})},{initialState:n,reducers:{update(t){t.running=e.running,t.speed=e.speed,t.steps=e.steps},setSteps(t,n){t.steps=n,e.steps=n},setSpeed(t,n){t.speed=n,e.speed=n}},actions:{frame(){e.frame()},start(){e.start(),t.current({action:"update"})},stop(){e.stop(),t.current({action:"update"})},reset(){e.reset(),t.current({action:"update"})}}}})(e,t)),[e,t]),[i,l]=(0,a.C)(s,n);return t.current=l,{state:i,dispatch:t.current,actions:o}}(e.runner),[n,o]=(0,r.useState)(0),i={0:[1e3,1],1:[500,1],2:[16,1],3:[16,16666],4:[16,499980]};(0,r.useEffect)((()=>{l()}),[n]);const l=()=>{const[e,s]=i[n];t.dispatch({action:"setSpeed",payload:e}),t.dispatch({action:"setSteps",payload:s})};return(0,s.jsxs)("fieldset",{role:"group",children:[e.prefix,(0,s.jsx)("button",{className:"flex-0",onClick:()=>t.actions.frame(),"data-tooltip":e.overrideTooltips?.[0]??"Step","data-placement":"bottom",children:"\u27a1\ufe0f"}),(0,s.jsx)("button",{className:"flex-0",onClick:()=>t.state.running?t.actions.stop():t.actions.start(),"data-tooltip":t.state.running?e.overrideTooltips?.[2]??"Pause":e.overrideTooltips?.[1]??"Run","data-placement":"bottom",children:t.state.running?"\u23f8":"\ufe0f\u23e9"}),(0,s.jsx)("button",{className:"flex-0",onClick:()=>t.actions.reset(),"data-tooltip":e.overrideTooltips?.[3]??"Reset","data-placement":"bottom",children:"\u23ee"}),(0,s.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",fontSize:16,fontWeight:"normal"},children:[(0,s.jsx)("span",{style:{padding:"0.2rem"},children:"Slow"}),(0,s.jsx)("input",{type:"range",min:0,max:4,step:1,value:n,disabled:t.state.running,onChange:e=>{o(Number(e.target.value))},style:{width:"150px",padding:"0.2rem"},"data-tooltip":"Execution speed","data-placement":"bottom"}),(0,s.jsx)("span",{style:{padding:"0.2rem"},children:"Fast"})]}),e.children]})}},8923:(e,t,n)=>{n.d(t,{B:()=>r});const s=n(6531).S.get();class r{frame(){this.tick(),this.finishFrame()}finishFrame(){s.frame()}steps=1;speed=1e3;get running(){return this.#e}#e=!1;#t=0;#n=0;#s=async()=>{if(!this.#e)return;const e=Date.now(),t=e-this.#n;if(this.#n=e,this.#t+=t,this.#t>this.speed){let e=!1,t=this.steps;const n=`Timing ${t} steps`;for(console.time(n);!e&&t--;)e=this.tick();console.timeEnd(n),this.finishFrame(),e&&this.stop(),this.#t-=this.speed}requestAnimationFrame(this.#s)};start(){this.#e=!0,this.#n=Date.now()-this.speed,this.#s(),this.toggle()}stop(){this.#e=!1,this.toggle()}}}}]);
//# sourceMappingURL=678.f5fd443a.chunk.js.map