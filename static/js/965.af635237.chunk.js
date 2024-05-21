"use strict";(globalThis.webpackChunk_nand2tetris_web=globalThis.webpackChunk_nand2tetris_web||[]).push([[965,983],{8965:(e,t,n)=>{n.r(t),n.d(t,{MONACO_DARK_THEME:()=>l,MONACO_LIGHT_THEME:()=>a,Monaco:()=>s,makeDecorations:()=>c});var r=n(7983),o=n(8878),i=n(8029),u=n(782);const c=(e,t,n,r,o,i="highlight",u=!0)=>{if(!t||!n)return o;const c=t.getModel();if(!c)return o;const a=c.getPositionAt(n.start),l=c.getPositionAt(n.end),s=null===e||void 0===e?void 0:e.Range.fromPositions(a,l),d=[];s&&(d.push({range:s,options:{inlineClassName:"error"==i?"error-highlight":"highlight"}}),n.start!=n.end&&(!u&&((e,t)=>{for(const r of null!==(n=null===e||void 0===e?void 0:e.getVisibleRanges())&&void 0!==n?n:[]){var n;if(r.containsRange(t))return!0}return!1})(t,s)||t.revealRangeInCenter(s)));for(const f of r){const t=null===e||void 0===e?void 0:e.Range.fromPositions(c.getPositionAt(f.span.start),c.getPositionAt(f.span.end));t&&d.push({range:t,options:{inlineClassName:f.cssClass}})}return t.deltaDecorations(o,d)},a="vs",l="vs-dark",s=({value:e,onChange:t,onCursorPositionChange:n,language:s,error:d,disabled:f=!1,highlight:g,highlightType:p="highlight",customDecorations:h=[],dynamicHeight:v=!1,alwaysRecenter:m=!0,lineNumberTransform:y})=>{const{theme:b}=(0,o.useContext)(i.BR),O=(0,r.dJ)(),[w,M]=(0,o.useState)(0),j=(0,o.useRef)(),E=(0,o.useRef)([]),P=(0,o.useRef)(void 0),R=(0,o.useRef)([]),C=(0,o.useCallback)((()=>("system"===b?window.matchMedia("(prefers-color-scheme: dark)").matches:"dark"===b)?l:a),[b]),k=(0,o.useCallback)((()=>{var e;let t;if("number"==typeof P.current){var n,r,o;const e=null!==(n=null===(r=j.current)||void 0===r||null===(o=r.getModel())||void 0===o?void 0:o.getLineCount())&&void 0!==n?n:0;if(P.current<=e){var i,u,a,l,s,d,f,g,h;t={start:null!==(i=null===(u=j.current)||void 0===u||null===(a=u.getModel())||void 0===a?void 0:a.getOffsetAt({lineNumber:P.current,column:0}))&&void 0!==i?i:0,end:P.current==e?null!==(l=null===(s=j.current)||void 0===s||null===(d=s.getModel())||void 0===d?void 0:d.getValueLength())&&void 0!==l?l:0:(null!==(f=null===(g=j.current)||void 0===g||null===(h=g.getModel())||void 0===h?void 0:h.getOffsetAt({lineNumber:P.current+1,column:0}))&&void 0!==f?f:1)-1,line:P.current}}}else t=P.current;E.current=c(O,j.current,null!==(e=t)&&void 0!==e?e:{start:0,end:0,line:0},R.current,E.current,p,m)}),[E,O,j,P,p]),S=()=>{if(v){var e;const t=null===(e=j.current)||void 0===e?void 0:e.getContentHeight();t&&M(t)}};(0,o.useEffect)((()=>{P.current=g,k()}),[g]),(0,o.useEffect)((()=>{R.current=h,k()}),[h]);const A=(0,o.useCallback)((e=>{var t,r;j.current=e,null===(t=j.current)||void 0===t||t.updateOptions({fontFamily:'"JetBrains Mono", source-code-pro, Menlo, Monaco,\n      Consolas, "Roboto Mono", "Ubuntu Monospace", "Noto Mono", "Oxygen Mono",\n      "Liberation Mono", monospace, "Apple Color Emoji", "Segoe UI Emoji",\n      "Segoe UI Symbol", "Noto Color Emoji"',fontSize:16,minimap:{enabled:!1},theme:C(),scrollBeyondLastLine:!1,readOnly:f,lineNumbers:null!==y&&void 0!==y?y:"on",folding:!1,quickSuggestions:{other:"inline"}}),k(),S(),null===(r=j.current)||void 0===r||r.onDidChangeCursorPosition((e=>{var t,r;const o=null===(t=j.current)||void 0===t||null===(r=t.getModel())||void 0===r?void 0:r.getOffsetAt(e.position);void 0!==o&&(null===n||void 0===n||n(o))}))}),[C]);(0,o.useEffect)((()=>{void 0!==j.current&&j.current.updateOptions({lineNumbers:null!==y&&void 0!==y?y:"on"})}),[y]),(0,o.useEffect)((()=>{void 0!==j.current&&j.current.updateOptions({theme:C()})}),[j,C]),(0,o.useEffect)((()=>{void 0!==j.current&&j.current.updateOptions({readOnly:f})}),[j,f]),(0,o.useEffect)((()=>{if(void 0===j.current)return;if(null===O)return;const e=j.current.getModel();if(null===e)return;if(void 0===d||void 0===d.span)return void O.editor.setModelMarkers(e,s,[]);const t=e.getPositionAt(d.span.start),n=e.getPositionAt(d.span.end);O.editor.setModelMarkers(e,s,[{message:d.message,startColumn:t.column,startLineNumber:t.lineNumber,endColumn:n.column,endLineNumber:n.lineNumber,severity:8}])}),[d,j,O,s]);return(0,u.jsx)(u.Fragment,{children:(0,u.jsx)(r.Ay,{value:e,onChange:(e="")=>{S(),t(e)},language:s,onMount:A,height:v?w:void 0})})}},7983:(e,t,n)=>{function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e){return function t(){for(var n=this,r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return o.length>=e.length?e.apply(this,o):function(){for(var e=arguments.length,r=new Array(e),i=0;i<e;i++)r[i]=arguments[i];return t.apply(n,[].concat(o,r))}}}function f(e){return{}.toString.call(e).includes("Object")}function g(e){return"function"===typeof e}n.d(t,{Ay:()=>ie,loader:()=>U,dJ:()=>te});var p=d((function(e,t){throw new Error(e[t]||e.default)}))({initialIsRequired:"initial state is required",initialType:"initial state should be an object",initialContent:"initial state shouldn't be an empty object",handlerType:"handler should be an object or a function",handlersType:"all handlers should be a functions",selectorType:"selector should be a function",changeType:"provided value of changes should be an object",changeField:'it seams you want to change a field in the state which is not specified in the "initial" state',default:"an unknown error accured in `state-local` package"}),h={changes:function(e,t){return f(t)||p("changeType"),Object.keys(t).some((function(t){return n=e,r=t,!Object.prototype.hasOwnProperty.call(n,r);var n,r}))&&p("changeField"),t},selector:function(e){g(e)||p("selectorType")},handler:function(e){g(e)||f(e)||p("handlerType"),f(e)&&Object.values(e).some((function(e){return!g(e)}))&&p("handlersType")},initial:function(e){var t;e||p("initialIsRequired"),f(e)||p("initialType"),t=e,Object.keys(t).length||p("initialContent")}};function v(e,t){return g(t)?t(e.current):t}function m(e,t){return e.current=s(s({},e.current),t),t}function y(e,t,n){return g(t)?t(e.current):Object.keys(n).forEach((function(n){var r;return null===(r=t[n])||void 0===r?void 0:r.call(t,e.current[n])})),n}const b={create:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};h.initial(e),h.handler(t);var n={current:e},r=d(y)(n,t),o=d(m)(n),i=d(h.changes)(e),u=d(v)(n);return[function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(e){return e};return h.selector(e),e(n.current)},function(e){!function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){return t.reduceRight((function(e,t){return t(e)}),e)}}(r,o,i,u)(e)}]}};const O={paths:{vs:"https://cdn.jsdelivr.net/npm/monaco-editor@0.43.0/min/vs"}};const w=function(e){return{}.toString.call(e).includes("Object")};var M={configIsRequired:"the configuration object is required",configType:"the configuration object should be an object",default:"an unknown error accured in `@monaco-editor/loader` package",deprecation:"Deprecation warning!\n    You are using deprecated way of configuration.\n\n    Instead of using\n      monaco.config({ urls: { monacoBase: '...' } })\n    use\n      monaco.config({ paths: { vs: '...' } })\n\n    For more please check the link https://github.com/suren-atoyan/monaco-loader#config\n  "},j=function(e){return function t(){for(var n=this,r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return o.length>=e.length?e.apply(this,o):function(){for(var e=arguments.length,r=new Array(e),i=0;i<e;i++)r[i]=arguments[i];return t.apply(n,[].concat(o,r))}}}((function(e,t){throw new Error(e[t]||e.default)}))(M),E={config:function(e){return e||j("configIsRequired"),w(e)||j("configType"),e.urls?(console.warn(M.deprecation),{paths:{vs:e.urls.monacoBase}}):e}};const P=E;const R=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){return t.reduceRight((function(e,t){return t(e)}),e)}};const C=function e(t,n){return Object.keys(n).forEach((function(r){n[r]instanceof Object&&t[r]&&Object.assign(n[r],e(t[r],n[r]))})),i(i({},t),n)};var k={type:"cancelation",msg:"operation is manually canceled"};const S=function(e){var t=!1,n=new Promise((function(n,r){e.then((function(e){return t?r(k):n(e)})),e.catch(r)}));return n.cancel=function(){return t=!0},n};var A,T,I=b.create({config:O,isInitialized:!1,resolve:null,reject:null,monaco:null}),N=(T=2,function(e){if(Array.isArray(e))return e}(A=I)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,o=!1,i=void 0;try{for(var u,c=e[Symbol.iterator]();!(r=(u=c.next()).done)&&(n.push(u.value),!t||n.length!==t);r=!0);}catch(a){o=!0,i=a}finally{try{r||null==c.return||c.return()}finally{if(o)throw i}}return n}}(A,T)||function(e,t){if(e){if("string"===typeof e)return c(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?c(e,t):void 0}}(A,T)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),x=N[0],L=N[1];function D(e){return document.body.appendChild(e)}function V(e){var t=x((function(e){return{config:e.config,reject:e.reject}})),n=function(e){var t=document.createElement("script");return e&&(t.src=e),t}("".concat(t.config.paths.vs,"/loader.js"));return n.onload=function(){return e()},n.onerror=t.reject,n}function _(){var e=x((function(e){return{config:e.config,resolve:e.resolve,reject:e.reject}})),t=window.require;t.config(e.config),t(["vs/editor/editor.main"],(function(t){q(t),e.resolve(t)}),(function(t){e.reject(t)}))}function q(e){x().monaco||L({monaco:e})}var z=new Promise((function(e,t){return L({resolve:e,reject:t})})),F={config:function(e){var t=P.config(e),n=t.monaco,r=u(t,["monaco"]);L((function(e){return{config:C(e.config,r),monaco:n}}))},init:function(){var e=x((function(e){return{monaco:e.monaco,isInitialized:e.isInitialized,resolve:e.resolve}}));if(!e.isInitialized){if(L({isInitialized:!0}),e.monaco)return e.resolve(e.monaco),S(z);if(window.monaco&&window.monaco.editor)return q(window.monaco),e.resolve(window.monaco),S(z);R(D,V)(_)}return S(z)},__getMonacoInstance:function(){return x((function(e){return e.monaco}))}};const U=F;var B=n(8878),H={wrapper:{display:"flex",position:"relative",textAlign:"initial"},fullWidth:{width:"100%"},hide:{display:"none"}},J={container:{display:"flex",height:"100%",width:"100%",justifyContent:"center",alignItems:"center"}};var W=function({children:e}){return B.createElement("div",{style:J.container},e)};var G=function({width:e,height:t,isEditorReady:n,loading:r,_ref:o,className:i,wrapperProps:u}){return B.createElement("section",{style:{...H.wrapper,width:e,height:t},...u},!n&&B.createElement(W,null,r),B.createElement("div",{ref:o,style:{...H.fullWidth,...!n&&H.hide},className:i}))},K=(0,B.memo)(G);var Y=function(e){(0,B.useEffect)(e,[])};var $=function(e,t,n=!0){let r=(0,B.useRef)(!0);(0,B.useEffect)(r.current||!n?()=>{r.current=!1}:e,t)};function Q(){}function X(e,t,n,r){return function(e,t){return e.editor.getModel(Z(e,t))}(e,r)||function(e,t,n,r){return e.editor.createModel(t,n,r?Z(e,r):void 0)}(e,t,n,r)}function Z(e,t){return e.Uri.parse(t)}var ee=function({original:e,modified:t,language:n,originalLanguage:r,modifiedLanguage:o,originalModelPath:i,modifiedModelPath:u,keepCurrentOriginalModel:c=!1,keepCurrentModifiedModel:a=!1,theme:l="light",loading:s="Loading...",options:d={},height:f="100%",width:g="100%",className:p,wrapperProps:h={},beforeMount:v=Q,onMount:m=Q}){let[y,b]=(0,B.useState)(!1),[O,w]=(0,B.useState)(!0),M=(0,B.useRef)(null),j=(0,B.useRef)(null),E=(0,B.useRef)(null),P=(0,B.useRef)(m),R=(0,B.useRef)(v),C=(0,B.useRef)(!1);Y((()=>{let e=U.init();return e.then((e=>(j.current=e)&&w(!1))).catch((e=>"cancelation"!==e?.type&&console.error("Monaco initialization: error:",e))),()=>M.current?function(){let e=M.current?.getModel();c||e?.original?.dispose(),a||e?.modified?.dispose(),M.current?.dispose()}():e.cancel()})),$((()=>{if(M.current&&j.current){let t=M.current.getOriginalEditor(),o=X(j.current,e||"",r||n||"text",i||"");o!==t.getModel()&&t.setModel(o)}}),[i],y),$((()=>{if(M.current&&j.current){let e=M.current.getModifiedEditor(),r=X(j.current,t||"",o||n||"text",u||"");r!==e.getModel()&&e.setModel(r)}}),[u],y),$((()=>{let e=M.current.getModifiedEditor();e.getOption(j.current.editor.EditorOption.readOnly)?e.setValue(t||""):t!==e.getValue()&&(e.executeEdits("",[{range:e.getModel().getFullModelRange(),text:t||"",forceMoveMarkers:!0}]),e.pushUndoStop())}),[t],y),$((()=>{M.current?.getModel()?.original.setValue(e||"")}),[e],y),$((()=>{let{original:e,modified:t}=M.current.getModel();j.current.editor.setModelLanguage(e,r||n||"text"),j.current.editor.setModelLanguage(t,o||n||"text")}),[n,r,o],y),$((()=>{j.current?.editor.setTheme(l)}),[l],y),$((()=>{M.current?.updateOptions(d)}),[d],y);let k=(0,B.useCallback)((()=>{if(!j.current)return;R.current(j.current);let c=X(j.current,e||"",r||n||"text",i||""),a=X(j.current,t||"",o||n||"text",u||"");M.current?.setModel({original:c,modified:a})}),[n,t,o,e,r,i,u]),S=(0,B.useCallback)((()=>{!C.current&&E.current&&(M.current=j.current.editor.createDiffEditor(E.current,{automaticLayout:!0,...d}),k(),j.current?.editor.setTheme(l),b(!0),C.current=!0)}),[d,l,k]);return(0,B.useEffect)((()=>{y&&P.current(M.current,j.current)}),[y]),(0,B.useEffect)((()=>{!O&&!y&&S()}),[O,y,S]),B.createElement(K,{width:g,height:f,isEditorReady:y,loading:s,_ref:E,className:p,wrapperProps:h})};(0,B.memo)(ee);var te=function(){let[e,t]=(0,B.useState)(U.__getMonacoInstance());return Y((()=>{let n;return e||(n=U.init(),n.then((e=>{t(e)}))),()=>n?.cancel()})),e};var ne=function(e){let t=(0,B.useRef)();return(0,B.useEffect)((()=>{t.current=e}),[e]),t.current},re=new Map;var oe=function({defaultValue:e,defaultLanguage:t,defaultPath:n,value:r,language:o,path:i,theme:u="light",line:c,loading:a="Loading...",options:l={},overrideServices:s={},saveViewState:d=!0,keepCurrentModel:f=!1,width:g="100%",height:p="100%",className:h,wrapperProps:v={},beforeMount:m=Q,onMount:y=Q,onChange:b,onValidate:O=Q}){let[w,M]=(0,B.useState)(!1),[j,E]=(0,B.useState)(!0),P=(0,B.useRef)(null),R=(0,B.useRef)(null),C=(0,B.useRef)(null),k=(0,B.useRef)(y),S=(0,B.useRef)(m),A=(0,B.useRef)(),T=(0,B.useRef)(r),I=ne(i),N=(0,B.useRef)(!1),x=(0,B.useRef)(!1);Y((()=>{let e=U.init();return e.then((e=>(P.current=e)&&E(!1))).catch((e=>"cancelation"!==e?.type&&console.error("Monaco initialization: error:",e))),()=>R.current?(A.current?.dispose(),f?d&&re.set(i,R.current.saveViewState()):R.current.getModel()?.dispose(),void R.current.dispose()):e.cancel()})),$((()=>{let u=X(P.current,e||r||"",t||o||"",i||n||"");u!==R.current?.getModel()&&(d&&re.set(I,R.current?.saveViewState()),R.current?.setModel(u),d&&R.current?.restoreViewState(re.get(i)))}),[i],w),$((()=>{R.current?.updateOptions(l)}),[l],w),$((()=>{!R.current||void 0===r||(R.current.getOption(P.current.editor.EditorOption.readOnly)?R.current.setValue(r):r!==R.current.getValue()&&(x.current=!0,R.current.executeEdits("",[{range:R.current.getModel().getFullModelRange(),text:r,forceMoveMarkers:!0}]),R.current.pushUndoStop(),x.current=!1))}),[r],w),$((()=>{let e=R.current?.getModel();e&&o&&P.current?.editor.setModelLanguage(e,o)}),[o],w),$((()=>{void 0!==c&&R.current?.revealLine(c)}),[c],w),$((()=>{P.current?.editor.setTheme(u)}),[u],w);let L=(0,B.useCallback)((()=>{if(C.current&&P.current&&!N.current){S.current(P.current);let a=i||n,f=X(P.current,r||e||"",t||o||"",a||"");R.current=P.current?.editor.create(C.current,{model:f,automaticLayout:!0,...l},s),d&&R.current.restoreViewState(re.get(a)),P.current.editor.setTheme(u),void 0!==c&&R.current.revealLine(c),M(!0),N.current=!0}}),[e,t,n,r,o,i,l,s,d,u,c]);return(0,B.useEffect)((()=>{w&&k.current(R.current,P.current)}),[w]),(0,B.useEffect)((()=>{!j&&!w&&L()}),[j,w,L]),T.current=r,(0,B.useEffect)((()=>{w&&b&&(A.current?.dispose(),A.current=R.current?.onDidChangeModelContent((e=>{x.current||b(R.current.getValue(),e)})))}),[w,b]),(0,B.useEffect)((()=>{if(w){let e=P.current.editor.onDidChangeMarkers((e=>{let t=R.current.getModel()?.uri;if(t&&e.find((e=>e.path===t.path))){let e=P.current.editor.getModelMarkers({resource:t});O?.(e)}}));return()=>{e?.dispose()}}return()=>{}}),[w,O]),B.createElement(K,{width:g,height:p,isEditorReady:w,loading:a,_ref:C,className:h,wrapperProps:v})},ie=(0,B.memo)(oe)}}]);