"use strict";(self.webpackChunk_nand2tetris_web=self.webpackChunk_nand2tetris_web||[]).push([[432],{1539:function(e,n,t){t.d(n,{M:function(){return g}});var r=t(9422),i=t(1026),a=t(8061),o=t(9659),u=t(7536),s=t(6167),c=t(8016),l=t(1510),d=t(7878),f=function(e){var n,t,r=e.error;return null!==r&&void 0!==r&&r.failed()?(0,d.jsxs)("details",{className:"ErrorPanel",open:!0,children:[(0,d.jsx)("summary",{role:"button",className:"secondary",children:(0,d.jsx)(a.cC,{id:"Parse Error"})}),(0,d.jsx)("pre",{children:(0,d.jsx)("code",{children:null!==(n=null!==(t=null===r||void 0===r?void 0:r.message)&&void 0!==t?t:null===r||void 0===r?void 0:r.shortMessage)&&void 0!==n?n:l.eP})})]}):(0,d.jsx)(d.Fragment,{})},v=function(e){var n=e.value,t=e.onChange,r=e.language,a=e.disabled,o=void 0!==a&&a,u=(0,s.useState)(n),c=(0,i.Z)(u,2),l=c[0],f=c[1];return(0,d.jsx)("textarea",{"data-testid":"editor-".concat(r),disabled:o,value:l,onChange:function(e){var n,r=null===(n=e.target)||void 0===n?void 0:n.value;f(r),t(r)}})},h=function(e){var n=e.value,t=e.onChange,i=e.language,a=e.error,o=e.disabled,l=void 0!==o&&o,f=e.highlight,v=(0,s.useContext)(c.Il).theme,h=(0,u.Ik)(),g=(0,s.useRef)(),m=(0,s.useRef)([]),p=(0,s.useRef)(void 0),x=(0,s.useCallback)((function(){return("system"===v?window.matchMedia("(prefers-color-scheme: dark)").matches:"dark"===v)?"vs-dark":"vs"}),[v]),b=(0,s.useCallback)((function(){var e;m.current=function(e,n,t,r){if(!n||!t)return r;var i=n.getModel();if(!i)return r;var a=i.getPositionAt(t.start),o=i.getPositionAt(t.end),u=null===e||void 0===e?void 0:e.Range.fromPositions(a,o),s=[];return u&&(s.push({range:u,options:{inlineClassName:"highlight"}}),n.revealRangeInCenter(u)),n.deltaDecorations(r,s)}(h,g.current,null!==(e=p.current)&&void 0!==e?e:{start:0,end:0},m.current)}),[m,h,g,p]);(0,s.useEffect)((function(){p.current=f,b()}),[f]);var y=(0,s.useCallback)((function(e){var n;g.current=e,null===(n=g.current)||void 0===n||n.updateOptions({fontFamily:'"JetBrains Mono", source-code-pro, Menlo, Monaco,\n      Consolas, "Roboto Mono", "Ubuntu Monospace", "Noto Mono", "Oxygen Mono",\n      "Liberation Mono", monospace, "Apple Color Emoji", "Segoe UI Emoji",\n      "Segoe UI Symbol", "Noto Color Emoji"',fontSize:16,minimap:{enabled:!1},theme:x(),scrollBeyondLastLine:!1,readOnly:l}),b()}),[x]);return(0,s.useEffect)((function(){void 0!==g.current&&g.current.updateOptions({theme:x()})}),[g,x]),(0,s.useEffect)((function(){void 0!==g.current&&g.current.updateOptions({readOnly:l})}),[g,l]),(0,s.useEffect)((function(){var e,n,t,o,u;if(void 0!==g.current&&null!==h){var s=g.current.getModel();if(null!==s)if(void 0===a||a.succeeded())h.editor.setModelMarkers(s,i,[]);else{var c=null!==(e=null===(n=(0,r.Z)(/Line (\d+), col (\d+): (.*)/,{line:1,column:2,message:3}).exec(null!==(t=a.shortMessage)&&void 0!==t?t:""))||void 0===n?void 0:n.groups)&&void 0!==e?e:{line:1,column:1,message:"could not parse error"},l=c.line,d=c.column,f=c.message,v=Number(l),m=v,p=Number(d),x=p+(null!==(o=null===(u=s.getLineContent(v).substring(p-1).match(/([^\s]+)/))||void 0===u?void 0:u[0].length)&&void 0!==o?o:1);x<=p&&(x=p+1),h.editor.setModelMarkers(s,i,[{message:f,startColumn:p,startLineNumber:v,endColumn:x,endLineNumber:m,severity:8}])}}}),[a,g,h,i]),(0,d.jsx)(d.Fragment,{children:(0,d.jsx)(u.ZP,{value:n,onChange:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return t(e)},language:i,onMount:y})})},g=function(e){var n=e.className,t=void 0===n?"":n,r=e.style,a=void 0===r?{}:r,u=e.disabled,l=void 0!==u&&u,g=e.value,m=e.onChange,p=e.grammar,x=e.language,b=e.highlight,y=(0,s.useState)(),j=(0,i.Z)(y,2),k=j[0],C=j[1],Z=(0,s.useContext)(c.Il).monaco,w=(0,s.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=p.match(e);C(n.failed()?n:void 0)}),[C,p]);(0,s.useEffect)((function(){return w(g)}),[w,g]);var M=(0,s.useMemo)((function(){return(0,o.D)(w,500)}),[w]),N=(0,s.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";m(e),M(e)}),[M,m]);return(0,d.jsx)("div",{className:"Editor ".concat(t),style:a,children:Z.canUse&&Z.wants?(0,d.jsx)(h,{value:g,onChange:N,language:x,error:k,disabled:l,highlight:b}):(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(v,{value:g,onChange:N,language:x,disabled:l}),(0,d.jsx)(f,{error:k})]})})}},1124:function(e,n,t){t.d(n,{G:function(){return a},s:function(){return i}});var r=t(7878),i=function(e){var n;return(0,r.jsxs)("article",{className:["panel",null!==(n=e.className)&&void 0!==n?n:""].join(" "),children:[e.header&&(0,r.jsx)("header",{children:e.header}),(0,r.jsx)("main",{children:e.children}),e.footer&&(0,r.jsx)("footer",{children:e.footer})]})},a=function(e){var n;return(0,r.jsxs)("details",{className:null!==(n=e.className)&&void 0!==n?n:"",open:e.open,style:e.style,children:[(0,r.jsx)("summary",{children:(0,r.jsx)("div",{className:"flex row align-baseline",children:e.summary})}),e.children]})}},2277:function(e,n,t){t.d(n,{N:function(){return s}});var r=t(1026),i=t(7878),a=t(6167),o=t(6830),u={Enter:128,Backspace:129,ArrowLeft:130,ArrowUp:131,ArrowRight:132,ArrowDown:133,Home:134,End:135,PageUp:136,PageDown:137,Insert:138,Delete:139,Escape:140,F1:141,F2:142,F3:143,F4:144,F5:145,F6:146,F7:147,F8:148,F9:149,F10:150,F11:151,F12:152};var s=function(e){var n=e.keyboard,t=e.update,s=(0,a.useState)(!1),c=(0,r.Z)(s,2),l=c[0],d=c[1],f=(0,a.useState)(""),v=(0,r.Z)(f,2),h=v[0],g=v[1],m=(0,a.useState)(n.getKey()),p=(0,r.Z)(m,2),x=p[0],b=p[1],y=0,j=function(e){0!==e&&(n.setKey(e),b(n.getKey()),y=e)};return(0,i.jsxs)("div",{className:"flex row align-baseline",children:[(0,i.jsx)("div",{className:"flex-1",children:(0,i.jsx)(o.y,{name:"Keyboard",bits:x})}),(0,i.jsx)("div",{className:"flex-1",children:"Character: ".concat(h)}),(0,i.jsx)("div",{className:"flex-1",children:(0,i.jsxs)("button",{onClick:function(){d(!l)},onKeyDown:function(e){if(e.preventDefault(),l){g(e.key);var n=function(e){var n=u[e.key];if(void 0!==n)return n;if(1===e.key.length){var t=e.key.charCodeAt(0);if(t>=32&&t<=126)return t}return 0}(e);n!==y&&(j(n),null===t||void 0===t||t())}},onKeyUp:function(e){l&&(y=0,n.clearKey(),null===t||void 0===t||t(),b(n.getKey()),g(""))},children:[l?"Disable   ":"Enable   ","\u2328\ufe0f"]})})]})}},3052:function(e,n,t){t.d(n,{zp:function(){return M},ZP:function(){return N}});var r=t(1092),i=t(7791),a=t(189),o=t(1026),u=t(7878),s=t(8039),c=t(6167),l=t(5838),d=t(7693),f=t(326),v=t(2724),h=t(8285),g=t(7559),m=0,p=1,x=function(e){var n,t=(0,c.useState)(null!==(n=e.mode)&&void 0!==n?n:m),r=(0,o.Z)(t,2),i=r[0],s=r[1],l=(0,g.i)(e.value),d=(0,o.Z)(l,2),f=d[0],v=d[1],x=function(){return(0,u.jsx)("span",{style:(0,a.Z)({cursor:"text"},(0,h.b)("full","inline")),onClick:function(){s(p)},children:f})},b=(0,c.useCallback)((function(e){return null===e||void 0===e?void 0:e.select()}),[]),y=(0,c.useCallback)((function(n){var t,r;s(m),v(null!==(t=n.value)&&void 0!==t?t:""),e.onChange(null!==(r=n.value)&&void 0!==r?r:"")}),[e,s,v]),j=function(){var n=(0,u.jsx)("span",{style:{display:"block",position:"relative"},children:(0,u.jsx)("input",{ref:b,style:{zIndex:"10",position:"absolute",left:"0",marginTop:"-0.375rem"},onFocus:e.onFocus,onBlur:function(e){var n=e.target;return y(n)},onKeyPress:function(e){var n=e.key,t=e.target;"Enter"===n&&y(t)},type:"text",defaultValue:f})});return n};return function(){switch(i){case p:return j();case m:return x();default:return(0,u.jsx)("span",{})}}()},b=t(649);function y(e,n,t){var r=n.totalHeight,i=n.toleranceHeight,a=n.bufferedItems,o=n.settings,u=o.itemHeight,s=o.minIndex,c=o.maxIndex,l=s+Math.floor((e-i)/u),d=function(e,n,t,r,i){var a=Math.max(0,e,t),o=i(a,Math.min(n,t+r-1)-a);return(0,b.Z)(o)}(s,c,l,a,t),f=Math.max((l-s)*u,0);return{scrollTop:e,topPaddingHeight:f,bottomPaddingHeight:Math.max(r-(f+d.length*u),0),data:d}}var j=function(e){var n,t=(0,c.useRef)(null),r=(0,c.useMemo)((function(){var n,t,r=function(e){var n=e.minIndex,t=void 0===n?0:n,r=e.maxIndex,i=void 0===r?Number.MAX_SAFE_INTEGER:r,a=e.startIndex,o=void 0===a?0:a,u=e.itemHeight,s=void 0===u?20:u,c=e.count,l=void 0===c?Math.max(i-t,1):c,d=e.tolerance;return{minIndex:t,maxIndex:i,startIndex:o,itemHeight:s,count:l,tolerance:void 0===d?l:d}}(null!==(n=e.settings)&&void 0!==n?n:{}),i=function(e,n){var t=e.minIndex,r=e.maxIndex,i=e.startIndex,o=e.itemHeight,u=e.count,s=e.tolerance,c=u+2*s,l=Math.max(0,i-s-t),d=u*o,f=Math.max(r-t,1)*o,v=s*o,h=l*o,g={scrollTop:0,settings:e,viewportHeight:d,totalHeight:f,toleranceHeight:v,bufferedItems:c,topPaddingHeight:h,bottomPaddingHeight:f-(h+(d+2*v)),data:[]};return(0,a.Z)((0,a.Z)({},g),y(h+v,g,n))}(r,e.get),o=(t=e.get,function(e,n){return(0,a.Z)((0,a.Z)({},e),y(n,e,t))});return{settings:r,reducer:o,startState:i}}),[e.settings,e.get]),i=r.settings,s=r.startState,l=r.reducer,d=(0,c.useReducer)(l,s),f=(0,o.Z)(d,2),v=f[0],h=f[1];(0,c.useEffect)((function(){null!==t.current&&h(t.current.scrollTop)}),[i,e.row]);var g=(0,c.useCallback)((function(e){e&&(e.scrollTop=t.current?t.current.scrollTop:i.startIndex*i.itemHeight),t.current=e}),[t,i.startIndex,i.itemHeight]),m=v.data.map((function(n){return(0,u.jsx)("div",{style:{height:"".concat(i.itemHeight,"px")},children:e.row(n)},e.rowKey(n))}));return(0,u.jsxs)("div",{ref:g,style:{height:"".concat(v.viewportHeight,"px"),overflowY:"scroll",overflowAnchor:"none"},className:null!==(n=e.className)&&void 0!==n?n:"",onScroll:function(e){return h(e.target.scrollTop)},children:[(0,u.jsx)("div",{style:{height:"".concat(v.topPaddingHeight,"px")}}),m,(0,u.jsx)("div",{style:{height:"".concat(v.bottomPaddingHeight,"px")}})]})},k=t(7030),C=t(8698),Z=function(e){var n=e.memory,t=e.jmp,r=void 0===t?{value:0}:t,i=e.highlight,a=void 0===i?-1:i,s=e.editable,l=void 0!==s&&s,d=e.justifyLeft,v=void 0!==d&&d,h=e.format,g=void 0===h?f.E_:h,m=e.onChange,p=void 0===m?function(){}:m,x=e.onFocus,b=void 0===x?function(){}:x,y=(0,c.useMemo)((function(){return{count:Math.min(n.size,25),maxIndex:n.size,itemHeight:34,startIndex:r.value}}),[n.size,r]),k=(0,c.useCallback)((function(e,t){return n.range(e,e+t).map((function(n,t){return[t+e,n]}))}),[n]),C=(0,c.useCallback)((function(e){var t=(0,o.Z)(e,2),r=t[0],i=t[1];return(0,u.jsx)(w,{index:r,value:g(i),size:n.size,editable:l,justifyLeft:v,highlight:r===a,onChange:p,onFocus:b})}),[g,l,a,p]);return(0,u.jsx)(j,{settings:y,get:k,row:C,rowKey:function(e){return(0,o.Z)(e,1)[0]}})},w=function(e){var n=e.index,t=e.value,r=e.size,i=e.highlight,o=void 0!==i&&i,c=e.editable,l=void 0!==c&&c,d=e.justifyLeft,v=void 0!==d&&d,h=e.onChange,g=void 0===h?function(){}:h,m=e.onFocus,p=void 0===m?function(){}:m;return(0,u.jsxs)("div",{style:{display:"flex",height:"100%"},children:[(0,u.jsx)("code",{style:(0,a.Z)((0,a.Z)((0,a.Z)({},(0,s.eP)("none")),o?{background:"var(--mark-background-color)"}:{}),{},{whiteSpace:"pre"}),children:r?(0,f.E_)(n).padStart(Math.ceil(Math.log10(r))," "):(0,f.E_)(n)}),(0,u.jsx)("code",{style:(0,a.Z)((0,a.Z)({flex:"1",textAlign:v?"left":"right"},(0,s.eP)("none")),o?{background:"var(--mark-background-color)"}:{}),children:l?(0,u.jsx)(x,{value:t,highlight:o,onChange:function(e){return g(n,e,Number(t))},onFocus:function(){return p(n)}}):(0,u.jsx)("span",{children:t})})]})},M=function(e){var n=e.name,t=void 0===n?"Memory":n,a=e.highlight,s=void 0===a?-1:a,h=e.editable,m=void 0===h||h,p=e.memory,x=e.format,b=void 0===x?"dec":x,y=(0,c.useState)(b),j=(0,o.Z)(y,2),w=j[0],M=j[1],N=(0,c.useState)(""),S=(0,o.Z)(N,2),F=S[0],I=S[1],E=(0,c.useState)({value:0}),H=(0,o.Z)(E,2),P=H[0],R=H[1],A=(0,g.i)(s),D=(0,o.Z)(A,2),L=D[0],_=D[1],z=function(){var e=!isNaN(parseInt(F))&&isFinite(parseInt(F))?Number(F):0;_(e),R({value:e})},K=(0,c.useRef)(null),T=(0,c.useCallback)((function(){var e;null===(e=K.current)||void 0===e||e.click()}),[K]),W=(0,c.useContext)(C.r).setStatus,B=(0,c.useCallback)(function(){var e=(0,i.Z)((0,r.Z)().mark((function e(n){var t,i,a,o,u;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!==(t=n.target.files)&&void 0!==t&&t.length){e.next=3;break}return W("No file selected"),e.abrupt("return");case 3:return i=n.target.files[0],e.next=6,i.text();case 6:return a=e.sent,o=i.name.endsWith("hack")?v.loadHack:i.name.endsWith("asm")?v.loadAsm:v.loadBlob,e.next=10,o(a);case 10:u=e.sent,p.loadBytes(u),n.target.value="",z();case 14:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),[]),U=(0,c.useCallback)((function(e,n){p.update(e,n,null!==w&&void 0!==w?w:"dec")}),[p,w]);return(0,k._W)((function(){I(""),R({value:0})})),(0,u.jsxs)("article",{className:"panel memory ".concat(t),children:[(0,u.jsxs)("header",{children:[(0,u.jsx)("div",{children:t}),(0,u.jsxs)("fieldset",{role:"group",children:[(0,u.jsx)("input",{type:"file",style:{display:"none"},ref:K,onChange:B}),(0,u.jsx)("button",{onClick:T,className:"flex-0",children:"\ud83d\udcc2"}),(0,u.jsx)("input",{style:{width:"4em",height:"100%"},placeholder:"Jump",value:F,onKeyDown:function(e){return"Enter"===e.key&&z()},onChange:function(e){var n=e.target.value;return I(n)}}),(0,u.jsx)("button",{onClick:z,className:"flex-0",children:"\u2935\ufe0f"}),(0,u.jsx)("select",{value:w,onChange:function(e){return M(e.target.value)},children:l.I2.map((function(e){return(0,u.jsx)("option",{children:e},e)}))})]})]}),(0,u.jsx)(Z,{jmp:P,memory:p,highlight:L,editable:m,justifyLeft:"asm"==w,format:function(e){return function(e,n){switch(e){case"bin":return(0,f.Ly)(n);case"hex":return(0,f.$v)(n);case"asm":return(0,d.a)(n);default:return(0,f.E_)(n)}}(w,e)},onChange:U,onFocus:function(e){return _(e)}})]})},N=M},6830:function(e,n,t){t.d(n,{y:function(){return a}});var r=t(7878),i=t(326),a=function(e){var n=e.name,t=e.bits;return(0,r.jsxs)("div",{children:[n,": ",(0,i.E_)(t)]})}},9613:function(e,n,t){t.d(n,{l:function(){return c}});var r=t(7878),i=t(5541),a=t(6167),o=t(7030),u="white";function s(e,n,t,r){var i=4*(512*t+n),a=r===u?255:0;e[i]=a,e[i+1]=a,e[i+2]=a,e[i+3]=255}var c=function(e){var n=e.memory,t=(0,a.useRef)(),c=(0,a.useCallback)((function(){var e,r,a=null!==(e=null===(r=t.current)||void 0===r?void 0:r.getContext("2d"))&&void 0!==e?e:void 0;a&&function(e,n){for(var t,r,a=(0,i.kP)(e.getImageData(0,0,512,256),"Failed to create Context2d"),o=0;o<512;o++)for(var c=0;c<256;c++){var l=(t=o,r=c,0===(n.get(32*r+(t/16|0))&1<<t%16)?u:"black");s(a.data,o,c,l)}e.putImageData(a,0,0)}(a,n)}),[n]),l=(0,a.useCallback)((function(e){t.current=null!==e&&void 0!==e?e:void 0,c()}),[t,c]);return(0,o.RC)(c),(0,o._W)((function(){var e,n;null===(e=t.current)||void 0===e||null===(n=e.getContext("2d"))||void 0===n||n.clearRect(0,0,t.current.width,t.current.height)})),(0,r.jsxs)("article",{className:"panel",children:[(0,r.jsx)("header",{children:"Screen"}),(0,r.jsx)("main",{style:{backgroundColor:"var(--code-background-color)"},children:(0,r.jsx)("figure",{style:{width:"100%",maxWidth:"512px",boxSizing:"content-box",marginInline:"auto",margin:"auto",borderTop:"2px solid gray",borderLeft:"2px solid gray",borderBottom:"2px solid lightgray",borderRight:"2px solid lightgray"},children:(0,r.jsx)("canvas",{ref:l,width:512,height:256})})})]})}},7030:function(e,n,t){t.d(n,{RC:function(){return s},_W:function(){return c},uY:function(){return d}});var r=t(1026),i=t(7878),a=t(6167),o=t(4408),u=t(6531);function s(e){(0,a.useEffect)((function(){var n=u.S.get().frame$.subscribe((function(){e()}));return function(){return n.unsubscribe()}}),[e])}function c(e){(0,a.useEffect)((function(){var n=u.S.get().reset$.subscribe((function(){e()}));return function(){return n.unsubscribe()}}),[e])}function l(){return(0,o.j)(u.S.get())}var d=function(){var e=function(){var e=(0,a.useState)(l()),n=(0,r.Z)(e,2),t=n[0],i=n[1];return(0,a.useEffect)((function(){var e=u.S.get().$.subscribe((function(){i(l())}));return function(){return e.unsubscribe()}}),[]),t}();return(0,i.jsx)("span",{style:{whiteSpace:"nowrap"},children:e})}},7559:function(e,n,t){t.d(n,{C:function(){return o},i:function(){return u}});var r=t(1026),i=t(1408),a=t(6167);function o(e,n){return(0,a.useReducer)((function(n,t){return(0,i.ZP)(n,(function(n){e[t.action](n,t.payload)}))}),n)}function u(e){var n=(0,a.useState)(e),t=(0,r.Z)(n,2),i=t[0],o=t[1];return(0,a.useEffect)((function(){o(e)}),[e]),[i,o]}},258:function(e,n,t){t.d(n,{D:function(){return s}});var r=t(649),i=t(1026),a=t(7878),o=t(7559),u=t(6167);var s=function(e){var n=function(e){var n=(0,u.useRef)((function(){})),t=(0,u.useMemo)((function(){return function(e,n){var t={running:e.running,speed:e.speed,steps:e.steps},r=e.finishFrame.bind(e);return e.finishFrame=function(){r(),n.current({action:"update"})},{initialState:t,reducers:{update:function(n){n.running=e.running,n.speed=e.speed,n.steps=e.steps},setSteps:function(n,t){n.steps=t,e.steps=t},setSpeed:function(n,t){n.speed=t,e.speed=t}},actions:{frame:function(){e.frame()},start:function(){e.start(),n.current({action:"update"})},stop:function(){e.stop(),n.current({action:"update"})},reset:function(){e.reset(),n.current({action:"update"})}}}}(e,n)}),[e,n]),r=t.initialState,a=t.reducers,s=t.actions,c=(0,o.C)(a,r),l=(0,i.Z)(c,2),d=l[0],f=l[1];return n.current=f,{state:d,dispatch:n.current,actions:s}}(e.runner);return(0,a.jsxs)("fieldset",{role:"group",children:[(0,a.jsx)("button",{className:"flex-0",onClick:function(){return n.actions.frame()},"data-tooltip":"Step","data-placement":"bottom",children:"\u27a1\ufe0f"}),(0,a.jsx)("button",{className:"flex-0",onClick:function(){return n.state.running?n.actions.stop():n.actions.start()},"data-tooltip":n.state.running?"Pause":"Play","data-placement":"bottom",children:n.state.running?"\u23f8":"\ufe0f\u23e9"}),(0,a.jsx)("button",{className:"flex-0",onClick:function(){return n.actions.reset()},"data-tooltip":"Reset","data-placement":"bottom",children:"\u23ee"}),(0,a.jsx)("select",{className:"flex-1",name:"speed",value:n.state.speed,onChange:function(e){var t,r;n.dispatch({action:"setSpeed",payload:Number(null!==(t=null===(r=e.target)||void 0===r?void 0:r.value)&&void 0!==t?t:n.state.speed)})},disabled:n.state.running,children:[[1e3,"Slow"],[500,"Fast"],[16,"Faster"]].map((function(e){var n=(0,i.Z)(e,2),t=n[0],r=n[1];return(0,a.jsx)("option",{value:t,children:r},t)}))}),(0,a.jsx)("select",{className:"flex-1",name:"steps",value:n.state.steps,onChange:function(e){var t,r;n.dispatch({action:"setSteps",payload:Number(null!==(t=null===(r=e.target)||void 0===r?void 0:r.value)&&void 0!==t?t:n.state.steps)})},disabled:n.state.running,children:[[1,"1 Step"],[500,"500"],[1e3,"1000"],[2e3,"2000"],[8e3,"8000"]].concat((0,r.Z)(16===n.state.speed?[[16666,"1MHz"],[499980,"30MHz"]]:[])).map((function(e){var n=(0,i.Z)(e,2),t=n[0],r=n[1];return(0,a.jsx)("option",{value:t,children:r},t)}))}),e.children]})}},8923:function(e,n,t){t.d(n,{B:function(){return m}});var r=t(1092),i=t(7791),a=t(2951),o=t(1976),u=t(7538),s=t(4649),c=t(2648),l=t(3943),d=t(6531).S.get(),f=new WeakMap,v=new WeakMap,h=new WeakMap,g=new WeakMap,m=function(){function e(){var n=this;(0,a.Z)(this,e),(0,s.Z)(this,"steps",1),(0,s.Z)(this,"speed",1e3),(0,u.Z)(this,f,{writable:!0,value:!1}),(0,u.Z)(this,v,{writable:!0,value:0}),(0,u.Z)(this,h,{writable:!0,value:0}),(0,u.Z)(this,g,{writable:!0,value:function(){var e=(0,i.Z)((0,r.Z)().mark((function e(){var t,i,a,o,u;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((0,l.Z)(n,f)){e.next=2;break}return e.abrupt("return");case 2:if(t=Date.now(),i=t-(0,l.Z)(n,h),(0,c.Z)(n,h,t),(0,c.Z)(n,v,(0,l.Z)(n,v)+i),(0,l.Z)(n,v)>n.speed){for(a=!1,o=n.steps,u="Timing ".concat(o," steps"),console.time(u);!a&&o--;)a=n.tick();console.timeEnd(u),n.finishFrame(),a&&n.stop(),(0,c.Z)(n,v,(0,l.Z)(n,v)-n.speed)}requestAnimationFrame((0,l.Z)(n,g));case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()})}return(0,o.Z)(e,[{key:"frame",value:function(){this.tick(),this.finishFrame()}},{key:"finishFrame",value:function(){d.frame()}},{key:"running",get:function(){return(0,l.Z)(this,f)}},{key:"start",value:function(){(0,c.Z)(this,f,!0),(0,c.Z)(this,h,Date.now()-this.speed),(0,l.Z)(this,g).call(this),this.toggle()}},{key:"stop",value:function(){(0,c.Z)(this,f,!1),this.toggle()}}]),e}()}}]);
//# sourceMappingURL=432.6ddd64da.chunk.js.map