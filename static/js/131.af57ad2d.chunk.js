"use strict";(globalThis.webpackChunk_nand2tetris_web=globalThis.webpackChunk_nand2tetris_web||[]).push([[131],{5131:(e,t,n)=>{n.r(t),n.d(t,{Compiler:()=>O,default:()=>_});var r=n(4621),s=n(3761),i=n(5874),a=n(3977);const o='Jack <: Base {\n    Root := Class\n\n    Class = "class" jackIdentifier OpenBrace ClassVarDec* SubroutineDec* CloseBrace\n\n    Type = "int" | "char" | "boolean" | jackIdentifier\n\n    ClassVarType = "static" | "field"\n    ClassVarDec = ClassVarType Type jackIdentifier TrailingIdentifier* Semi\n    TrailingIdentifier = Comma jackIdentifier\n\n    ReturnType = Type | "void"\n    SubroutineType = "constructor" | "function" | "method" \n    SubroutineDec = SubroutineType ReturnType jackIdentifier OpenParen ParameterList CloseParen SubroutineBody\n\n\n    Parameter = Type jackIdentifier\n    Parameters = Parameter TrailingParameter*\n    TrailingParameter = Comma Parameter\n    ParameterList = Parameters?\n\n    SubroutineBody = OpenBrace VarDec* Statement* CloseBrace\n\n    VarDec = "var" Type jackIdentifier TrailingIdentifier* Semi\n\n    Statement = LetStatement | IfStatement | WhileStatement | DoStatement | ReturnStatement\n\n    LetStatement = "let" jackIdentifier ArrayIndex? Equal Expression Semi\n    ArrayIndex = OpenSquare Expression CloseSquare\n\n    IfStatement = "if" OpenParen Expression CloseParen OpenBrace Statement* CloseBrace ElseBlock?\n    ElseBlock = "else" OpenBrace Statement* CloseBrace\n\n    WhileStatement = "while" OpenParen Expression CloseParen OpenBrace Statement* CloseBrace\n    DoStatement = "do" SubroutineCall Semi\n    ReturnStatement = "return" Expression? Semi\n\n    op = "+" | "-" | "*" | "/" | "&" | "|" | "<" | ">" | "="\n    ExpressionPart = op Term\n    Expression = Term ExpressionPart*\n\n    integerConstant = digit+\n    stringConstant = doubleQuote (~doubleQuote ~newline any)* doubleQuote\n    keywordConstant = "true" | "false" | "null" | "this"\n\n    ArrayAccess = jackIdentifier ArrayIndex\n    GroupedExpression = OpenParen Expression CloseParen\n\n    unaryOp = "-" | "~"\n    UnaryExpression = unaryOp Term\n\n    Term = integerConstant | stringConstant | keywordConstant | SubroutineCall  | ArrayAccess | jackIdentifier | GroupedExpression | UnaryExpression\n\n    CompoundIdentifier = jackIdentifier Dot jackIdentifier\n    SubroutineName = CompoundIdentifier | jackIdentifier\n    SubroutineCall = SubroutineName OpenParen ExpressionList CloseParen\n\n    ExpressionList = Expressions?\n    Expressions = Expression TrailingExpression*\n    TrailingExpression = Comma Expression\n\n    jackIdentifier = letter (alnum | underscore)*\n}',l=n(4533).A.grammar(o,a.lN),c=l.extendSemantics(a.JE);function u(e){return e.children.map((e=>e.statement))}c.addAttribute("Root",{Root(e){return this.class}}),c.addAttribute("class",{Class:(e,t,n,r,s,i)=>({name:{value:t.sourceString,span:(0,a.Ln)(t.source)},varDecs:r.children.map((e=>e.classVarDec)),subroutines:s.children.map((e=>e.subroutineDec))})}),c.addAttribute("classVarDec",{ClassVarDec:(e,t,n,r,s)=>({varType:e.sourceString,type:t.sourceString,names:[n.sourceString,...r.children.map((e=>e.child(1).sourceString))]})}),c.addAttribute("subroutineDec",{SubroutineDec:(e,t,n,r,s,i,a)=>({type:e.sourceString,returnType:t.sourceString,name:n.sourceString,parameters:s.parameterList,body:a.subroutineBody})}),c.addAttribute("parameter",{Parameter:(e,t)=>({type:e.sourceString,name:t.sourceString})}),c.addAttribute("parameterList",{ParameterList:e=>e.child(0)?.parameters??[]}),c.addAttribute("parameters",{Parameters:(e,t)=>[e.parameter,...t.children.map((e=>e.child(1).parameter))]}),c.addAttribute("subroutineBody",{SubroutineBody:(e,t,n,r)=>({varDecs:t.children.map((e=>e.varDec)),statements:u(n)})}),c.addAttribute("varDec",{VarDec:(e,t,n,r,s)=>({type:t.sourceString,names:[n.sourceString,...r.children.map((e=>e.child(1).sourceString))]})}),c.addAttribute("statement",{LetStatement(e,t,n,r,s,i){return{statementType:"letStatement",name:{value:t.sourceString,span:(0,a.Ln)(t.source)},arrayIndex:n?.child(0)?.child(1)?.expression,value:s.expression,span:(0,a.Ln)(this.source)}},IfStatement:(e,t,n,r,s,i,a,o)=>({statementType:"ifStatement",condition:n.expression,body:u(i),else:o.child(0)?.else??[]}),WhileStatement:(e,t,n,r,s,i,a)=>({statementType:"whileStatement",condition:n.expression,body:u(i)}),DoStatement:(e,t,n)=>({statementType:"doStatement",call:t.term}),ReturnStatement:(e,t,n)=>({statementType:"returnStatement",value:t.children.length>0?t.child(0).expression:void 0})}),c.addAttribute("else",{ElseBlock:(e,t,n,r)=>u(n)}),c.addAttribute("term",{integerConstant:e=>({termType:"numericLiteral",value:Number(e.sourceString)}),stringConstant(e,t,n){return{termType:"stringLiteral",value:this.sourceString.slice(1,-1)}},keywordConstant(e){return{termType:"keywordLiteral",value:this.sourceString}},SubroutineCall(e,t,n,r){return{termType:"subroutineCall",name:{value:e.sourceString,span:(0,a.Ln)(e.source)},parameters:n.expressionList,span:(0,a.Ln)(this.source)}},ArrayAccess(e,t){return{termType:"arrayAccess",name:{value:e.sourceString,span:(0,a.Ln)(e.source)},index:t.child(1).expression,span:(0,a.Ln)(this.source)}},jackIdentifier(e,t){return{termType:"variable",name:`${e.sourceString}${t.sourceString}`,span:(0,a.Ln)(this.source)}},GroupedExpression:(e,t,n)=>({termType:"groupedExpression",expression:t.expression}),UnaryExpression:(e,t)=>({termType:"unaryExpression",op:e.sourceString,term:t.term})}),c.addAttribute("expressionList",{ExpressionList:e=>e.child(0)?.expressions??[]}),c.addAttribute("expressions",{Expressions:(e,t)=>[e.expression,...t.children.map((e=>e.child(1).expression))]}),c.addAttribute("expression",{Expression:(e,t)=>({nodeType:"expression",term:e.term,rest:t.children.map((e=>e.expressionPart))})}),c.addAttribute("expressionPart",{ExpressionPart:(e,t)=>({op:e.sourceString,term:t.term})});const m={parser:l,grammar:o,semantics:c,parse:(0,a.Q5)(l,c,(e=>e.class))};var d=n(2548);function p(e){return void 0!=e.message}const h={"+":"add","-":"sub","*":"call Math.multiply 2","/":"call Math.divide 2","&":"and","|":"or","<":"lt",">":"gt","=":"eq"},g={"-":"neg","~":"not"};class f{instructions=[];globalSymbolTable={};localSymbolTable={};className="";classes={};labelNum=0;fieldNum=0;staticNum=0;localNum=0;get output(){return Array.from(this.instructions)}varData(e){return this.localSymbolTable[e]||this.globalSymbolTable[e]}var(e){let t,n;"string"==typeof e?t=e:"string"==typeof e.name?(t=e.name,n=e.span):(t=e.name.value,n=e.name.span);const r=this.varData(t);if(!r)throw(0,a.$5)(`Undeclared variable ${t}`,n);return`${r.segment} ${r.index}`}write(...e){this.instructions.push(...e)}getLabel(){const e=`L${this.labelNum}`;return this.labelNum+=1,e}compile(e,t){this.className=e.name.value,this.classes=t??{};for(const n of e.varDecs)this.compileClassVarDec(n);for(const n of e.subroutines)this.compileSubroutineDec(n);return(0,i.Ok)(this.instructions.join("\n"))}compileClassVarDec(e){for(const t of e.names)"field"==e.varType?(this.globalSymbolTable[t]={type:e.type,segment:"this",index:this.fieldNum},this.fieldNum+=1):(this.globalSymbolTable[t]={type:e.type,segment:"static",index:this.staticNum},this.staticNum+=1)}compileVarDec(e){for(const t of e.names)this.localSymbolTable[t]={type:e.type,segment:"local",index:this.localNum},this.localNum+=1}registerArgs(e,t=!1){let n=0;for(const r of e)this.localSymbolTable[r.name]={type:r.type,segment:"argument",index:n+(t?1:0)},n+=1}compileSubroutineDec(e){switch(e.type){case"method":this.compileMethod(e);break;case"constructor":this.compileConstructor(e);break;case"function":this.compileFunction(e)}}compileSubroutineStart(e,t=!1){this.localSymbolTable={},this.localNum=0,this.registerArgs(e.parameters,t);const n=e.body.varDecs.map((e=>e.names.length)).reduce(((e,t)=>e+t),0);this.write(`function ${this.className}.${e.name} ${n}`);for(const r of e.body.varDecs)this.compileVarDec(r)}compileFunction(e){this.compileSubroutineStart(e),this.compileStatements(e.body.statements)}compileMethod(e){this.compileSubroutineStart(e,!0),this.write("push argument 0","pop pointer 0"),this.compileStatements(e.body.statements)}compileConstructor(e){this.compileSubroutineStart(e),this.write(`push constant ${this.fieldNum}`,"call Memory.alloc 1","pop pointer 0"),this.compileStatements(e.body.statements)}compileExpression(e){this.compileTerm(e.term);for(const t of e.rest)this.compileTerm(t.term),this.compileOp(t.op)}compileOp(e){this.write(h[e])}compileTerm(e){switch(e.termType){case"numericLiteral":this.write(`push constant ${e.value}`);break;case"stringLiteral":this.compileStringLiteral(e.value);break;case"variable":this.write(`push ${this.var(e)}`);break;case"keywordLiteral":this.compileKeywordLiteral(e.value);break;case"subroutineCall":this.compileSubroutineCall(e);break;case"arrayAccess":this.compileExpression(e.index),this.write(`push ${this.var(e)}`,"add","pop pointer 1","push that 0");break;case"groupedExpression":this.compileExpression(e.expression);break;case"unaryExpression":this.compileTerm(e.term),this.write(g[e.op])}}validateArgNum(e,t,n){const r=n.parameters.length;if(t!=r)throw(0,a.$5)(`${e} expected ${t} arguments, got ${r}`,n.span)}validateSubroutineCall(e,t,n,r){if(this.classes[e]){for(const i of this.classes[e].subroutines)if(i.name==t){if("method"==i.type&&!r)throw(0,a.$5)(`Method ${e}.${t} was called as a function/constructor`,n.name.span);if("method"!=i.type&&r)throw(0,a.$5)(`${s=i.name,s.charAt(0).toUpperCase()+s.slice(1)} ${e}.${t} was called as a method`,n.name.span);return void this.validateArgNum(`${e}.${t}`,i.parameters.length,n)}throw(0,a.$5)(`Class ${e} doesn't contain a function/constructor ${t}`,n.name.span)}throw(0,a.$5)(`Class ${e} doesn't exist`,n.name.span);var s}classifySubroutineCall(e){let t,n="",r="";if(e.name.value.includes(".")){const[s,i]=e.name.value.split(".",2);r=i;const a=this.varData(s);a?(t=this.var(s),n=a.type):n=s}else t="pointer 0",n=this.className,r=e.name.value;const s=d.P[`${n}.${r}`];return s?this.validateArgNum(`${n}.${r}`,s.nArgs,e):this.validateSubroutineCall(n,r,e,void 0!=t),{className:n,subroutineName:r,object:t}}compileSubroutineCall(e){const t=this.classifySubroutineCall(e);t.object&&this.write(`push ${t.object}`);for(const n of e.parameters)this.compileExpression(n);this.write(`call ${t.className}.${t.subroutineName} ${e.parameters.length+(t.object?1:0)}`)}compileStringLiteral(e){this.write(`push constant ${e.length}`,"call String.new 1");for(let t=0;t<e.length;t++)this.write(`push constant ${e.charCodeAt(t)}`,"call String.appendChar 2")}compileKeywordLiteral(e){switch(e){case"true":this.write("push constant 1");break;case"false":case"null":this.write("push constant 0");break;case"this":this.write("push pointer 0")}}compileStatements(e){for(const t of e)this.compileStatement(t)}compileStatement(e){switch(e.statementType){case"doStatement":this.compileDoStatement(e);break;case"ifStatement":this.compileIf(e);break;case"letStatement":this.compileLet(e);break;case"returnStatement":this.compileReturn(e);break;case"whileStatement":this.compileWhile(e)}}compileReturn(e){e.value?this.compileExpression(e.value):this.write("push constant 0"),this.write("return")}compileLet(e){e.arrayIndex?(this.compileExpression(e.arrayIndex),this.write(`push ${this.var(e)}`,"add"),this.compileExpression(e.value),this.write("pop temp 0","pop pointer 1","push temp 0","pop that 0")):(this.compileExpression(e.value),this.write(`pop ${this.var(e)}`))}compileDoStatement(e){this.compileSubroutineCall(e.call),this.write("pop temp 0")}compileIf(e){const t=this.getLabel(),n=this.getLabel();this.compileExpression(e.condition),this.write("not",`if-goto ${n}`),this.compileStatements(e.body),this.write(`goto ${t}`,`label ${n}`),this.compileStatements(e.else),this.write(`label ${t}`)}compileWhile(e){const t=this.getLabel(),n=this.getLabel();this.write(`label ${t}`),this.compileExpression(e.condition),this.write("not",`if-goto ${n}`),this.compileStatements(e.body),this.write(`goto ${t}`,`label ${n}`)}}var b=n(8878),S=n(8177);function y(e,t,n){return{initialState:{files:{},compiled:{},selected:""},reducers:{reset(e){e.files={}},setFiles(e,t){e.files=t;const n=function(e){const t={};for(const[o,l]of Object.entries(e)){const e=m.parse(l);if((0,i.ys)(e))t[o]=(0,i._)(e);else{const n=(0,i.Ok)(e);t[o]=n.name.value==o?n:(0,a.$5)(`Class name ${n.name.value} doesn't match file name ${o}`,n.name.span)}}const n=Object.fromEntries(Object.entries(t).filter((([e,t])=>!p(t)))),r={};for(const[a,o]of Object.entries(t))if(p(o))r[a]=o;else try{const e=(new f).compile(o,n);(0,i.ys)(e)?r[a]=(0,i._)(e):r[a]=(0,i.Ok)(e)}catch(s){r[a]=s}return r}(t);e.compiled={};for(const[r,s]of Object.entries(n))e.compiled[r]="string"===typeof s?{valid:!0,vm:s}:{valid:!1,error:s}},setSelected(e,t){e.selected=t}},actions:{async loadFiles(e){this.reset(),n.current({action:"setFiles",payload:e}),Object.entries(e).length>0&&n.current({action:"setSelected",payload:Object.keys(e)[0]})},async reset(){n.current({action:"reset"})}}}}var v=n(5608),C=n.n(v),A=n(8330),x=n(2675),E=n(1384),L=n(3499),N=n(8029),T=n(4280),I=n(782);const O=()=>{const{setStatus:e}=(0,b.useContext)(s.L),{tracking:t,toolStates:n,setTitle:i}=(0,b.useContext)(N.BR),{state:a,dispatch:o,actions:l}=function(){const{setStatus:e,fs:t}=(0,b.useContext)(s.L),n=(0,b.useRef)((()=>{})),{initialState:r,reducers:i,actions:a}=(0,b.useMemo)((()=>y(0,0,n)),[e,n]),[o,l]=(0,S.A)(i,r);return n.current=l,{state:o,dispatch:n,actions:a}}(),c=(0,b.useRef)(null),u=(0,b.useRef)(null),m=(0,b.useRef)(null);(0,b.useEffect)((()=>{i(n.compiler.title)})),(0,b.useEffect)((()=>{l.loadFiles(n.compiler.files)}),[l,n.compiler.files]),(0,b.useEffect)((()=>{var t,r;n.compiler.compiled&&e(p()?"Compiled successfully":null!==(t=null===(r=a.compiled[a.selected].error)||void 0===r?void 0:r.message)&&void 0!==t?t:"")}));const d=(0,b.useCallback)((e=>{o.current({action:"setSelected",payload:e}),t.trackEvent("tab","change",e)}),[t]),p=()=>Object.keys(a.files).map((e=>a.compiled[e].valid)).reduce(((e,t)=>e&&t),!0),h=()=>{const e=[];for(const n of Object.keys(a.files)){var t;let r=null!==(t=a.compiled[n].vm)&&void 0!==t?t:"";r=`// Compiled ${n}.jack:\n`.concat(r),e.push({name:n,content:r})}return e};return(0,I.jsxs)("div",{className:"Page CompilerPage grid",children:[(0,I.jsx)("a",{style:{display:"none"},ref:u}),(0,I.jsx)("input",{style:{display:"none"},ref:c,type:"file",webkitdirectory:"",onChange:async t=>{if(!t.target.files||0==t.target.files.length)return;await l.reset();const r={};for(const e of t.target.files)if(e.name.endsWith(".jack")){const t=await e.text();r[e.name.replace(".jack","")]=t}await l.loadFiles(r);const s=t.target.files[0].webkitRelativePath.split("/")[0];n.compiler.setTitle(`${s} / *.jack`),n.compiler.setCompiled(!1),n.compiler.setFiles(r),e("")}}),(0,I.jsx)(A.N_,{ref:m,to:L.Ay.vm.href,style:{display:"none"}}),(0,I.jsx)(T.Z,{className:"code",header:(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)("div",{children:(0,I.jsx)(r.x6,{id:"Source"})}),(0,I.jsxs)("div",{className:"flex row flex-1",children:[(0,I.jsx)("button",{className:"flex-0",onClick:()=>{c.current&&(c.current.value="",c.current.click())},children:"\ud83d\udcc2"}),(0,I.jsx)("button",{className:"flex-0","data-tooltip":"Compiles into VM code","data-placement":"bottom",onClick:()=>{n.compiler.setCompiled(!0)},disabled:0==Object.keys(a.files).length,children:"Compile"}),(0,I.jsx)("button",{className:"flex-0",disabled:!n.compiler.compiled||!p(),"data-tooltip":"Loads the compiled code into the VM emulators","data-placement":"right",onClick:()=>{var e,t;n.vm.setTitle(null===(e=n.compiler.title)||void 0===e?void 0:e.replace("jack","vm")),n.vm.setFiles(h()),null===(t=m.current)||void 0===t||t.click()},children:"Run"}),(0,I.jsx)("button",{className:"flex-0",disabled:!n.compiler.compiled||!p(),"data-tooltip":"Downloads the compiled VM code","data-placement":"bottom",onClick:async()=>{if(!u.current)return;const e=new(C());for(const r of h())e.file(`${r.name}.vm`,r.content);const t=await e.generateAsync({type:"blob"}),n=URL.createObjectURL(t);u.current.href=n,u.current.download="VMcode",u.current.click(),URL.revokeObjectURL(n)},children:"Download"})]})]}),children:(0,I.jsx)(E.w,{children:Object.keys(a.files).map((e=>(0,I.jsx)(E.o,{title:`${e}.jack`,onSelect:()=>d(e),style:{backgroundColor:n.compiler.compiled&&!a.compiled[e].valid?"#ffaaaa":void 0},children:(0,I.jsx)(x.K,{value:a.files[e],disabled:!0,onChange:e=>{},error:n.compiler.compiled?a.compiled[e].error:void 0,language:"jack"})},e)))})})]})},_=O},2675:(e,t,n)=>{n.d(t,{K:()=>m});var r=n(4621),s=n(7983),i=n(8878),a=n(8029),o=n(782);const l=({error:e})=>e?(0,o.jsxs)("details",{className:"ErrorPanel",open:!0,children:[(0,o.jsx)("summary",{role:"button",className:"secondary",children:(0,o.jsx)(r.x6,{id:"Parse Error"})}),(0,o.jsx)("pre",{children:(0,o.jsx)("code",{children:null===e||void 0===e?void 0:e.message})})]}):(0,o.jsx)(o.Fragment,{}),c=({value:e,onChange:t,language:n,disabled:r=!1})=>{const[s,a]=(0,i.useState)(e);return(0,o.jsx)("textarea",{"data-testid":`editor-${n}`,disabled:r,value:s,onChange:e=>{var n;const r=null===(n=e.target)||void 0===n?void 0:n.value;a(r),t(r)}})},u=({value:e,onChange:t,onCursorPositionChange:n,language:r,error:l,disabled:c=!1,highlight:u,highlightType:m="highlight",customDecorations:d=[],dynamicHeight:p=!1,alwaysRecenter:h=!0,lineNumberTransform:g})=>{const{theme:f}=(0,i.useContext)(a.BR),b=(0,s.dJ)(),[S,y]=(0,i.useState)(0),v=(0,i.useRef)(),C=(0,i.useRef)([]),A=(0,i.useRef)(void 0),x=(0,i.useRef)([]),E=(0,i.useCallback)((()=>("system"===f?window.matchMedia("(prefers-color-scheme: dark)").matches:"dark"===f)?"vs-dark":"vs"),[f]),L=(0,i.useCallback)((()=>{var e;let t;if("number"==typeof A.current){var n,r,s;const e=null!==(n=null===(r=v.current)||void 0===r||null===(s=r.getModel())||void 0===s?void 0:s.getLineCount())&&void 0!==n?n:0;if(A.current<=e){var i,a,o,l,c,u,d,p,g;t={start:null!==(i=null===(a=v.current)||void 0===a||null===(o=a.getModel())||void 0===o?void 0:o.getOffsetAt({lineNumber:A.current,column:0}))&&void 0!==i?i:0,end:A.current==e?null!==(l=null===(c=v.current)||void 0===c||null===(u=c.getModel())||void 0===u?void 0:u.getValueLength())&&void 0!==l?l:0:(null!==(d=null===(p=v.current)||void 0===p||null===(g=p.getModel())||void 0===g?void 0:g.getOffsetAt({lineNumber:A.current+1,column:0}))&&void 0!==d?d:1)-1,line:A.current}}}else t=A.current;C.current=((e,t,n,r,s,i="highlight",a=!0)=>{if(!t||!n)return s;const o=t.getModel();if(!o)return s;const l=o.getPositionAt(n.start),c=o.getPositionAt(n.end),u=null===e||void 0===e?void 0:e.Range.fromPositions(l,c),m=[];u&&(m.push({range:u,options:{inlineClassName:"error"==i?"error-highlight":"highlight"}}),n.start!=n.end&&(!a&&((e,t)=>{for(const r of null!==(n=null===e||void 0===e?void 0:e.getVisibleRanges())&&void 0!==n?n:[]){var n;if(r.containsRange(t))return!0}return!1})(t,u)||t.revealRangeInCenter(u)));for(const d of r){const t=null===e||void 0===e?void 0:e.Range.fromPositions(o.getPositionAt(d.span.start),o.getPositionAt(d.span.end));t&&m.push({range:t,options:{inlineClassName:d.cssClass}})}return t.deltaDecorations(s,m)})(b,v.current,null!==(e=t)&&void 0!==e?e:{start:0,end:0,line:0},x.current,C.current,m,h)}),[C,b,v,A,m]),N=()=>{if(p){var e;const t=null===(e=v.current)||void 0===e?void 0:e.getContentHeight();t&&y(t)}};(0,i.useEffect)((()=>{A.current=u,L()}),[u]),(0,i.useEffect)((()=>{x.current=d,L()}),[d]);const T=(0,i.useCallback)((e=>{var t,r;v.current=e,null===(t=v.current)||void 0===t||t.updateOptions({fontFamily:'"JetBrains Mono", source-code-pro, Menlo, Monaco,\n      Consolas, "Roboto Mono", "Ubuntu Monospace", "Noto Mono", "Oxygen Mono",\n      "Liberation Mono", monospace, "Apple Color Emoji", "Segoe UI Emoji",\n      "Segoe UI Symbol", "Noto Color Emoji"',fontSize:16,minimap:{enabled:!1},theme:E(),scrollBeyondLastLine:!1,readOnly:c,lineNumbers:null!==g&&void 0!==g?g:"on",folding:!1,renderValidationDecorations:"on",quickSuggestions:{other:"inline"}}),L(),N(),null===(r=v.current)||void 0===r||r.onDidChangeCursorPosition((e=>{var t,r;const s=null===(t=v.current)||void 0===t||null===(r=t.getModel())||void 0===r?void 0:r.getOffsetAt(e.position);void 0!==s&&(null===n||void 0===n||n(s))}))}),[E]);(0,i.useEffect)((()=>{void 0!==v.current&&v.current.updateOptions({lineNumbers:null!==g&&void 0!==g?g:"on"})}),[g]),(0,i.useEffect)((()=>{void 0!==v.current&&v.current.updateOptions({theme:E()})}),[v,E]),(0,i.useEffect)((()=>{void 0!==v.current&&v.current.updateOptions({readOnly:c,renderValidationDecorations:"on"})}),[v,c]),(0,i.useEffect)((()=>{if(void 0===v.current)return;if(null===b)return;const e=v.current.getModel();if(null===e)return;if(void 0===l||void 0===l.span)return void b.editor.setModelMarkers(e,r,[]);const t=e.getPositionAt(l.span.start),n=e.getPositionAt(l.span.end);b.editor.setModelMarkers(e,r,[{message:l.message,startColumn:t.column,startLineNumber:t.lineNumber,endColumn:n.column,endLineNumber:n.lineNumber,severity:8}])}),[l,v,b,r]);return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(s.Ay,{value:e,onChange:(e="")=>{N(),t(e)},language:r,onMount:T,height:p?S:void 0})})},m=({className:e="",style:t={},disabled:n=!1,value:r,error:s,onChange:m,onCursorPositionChange:d,grammar:p,language:h,highlight:g,highlightType:f="highlight",customDecorations:b=[],dynamicHeight:S=!1,alwaysRecenter:y=!0,lineNumberTransform:v})=>{const{monaco:C}=(0,i.useContext)(a.BR);return(0,o.jsx)("div",{className:`Editor ${S?"dynamic-height":""} ${e}`,style:t,children:C.canUse&&C.wants?(0,o.jsx)(u,{value:r,onChange:m,onCursorPositionChange:d,language:h,error:s,disabled:n,highlight:g,highlightType:f,customDecorations:b,dynamicHeight:S,alwaysRecenter:y,lineNumberTransform:v}):(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(c,{value:r,onChange:m,language:h,disabled:n}),(0,o.jsx)(l,{error:s})]})})}},4280:(e,t,n)=>{n.d(t,{Z:()=>s,p:()=>i});var r=n(782);const s=e=>{var t;return(0,r.jsxs)("article",{className:["panel",null!==(t=e.className)&&void 0!==t?t:""].join(" "),children:[e.header&&(0,r.jsx)("header",{children:e.header}),(0,r.jsx)("main",{children:e.children}),e.footer&&(0,r.jsx)("footer",{children:e.footer})]})},i=e=>{var t;return(0,r.jsxs)("details",{className:null!==(t=e.className)&&void 0!==t?t:"",open:e.open,style:e.style,children:[(0,r.jsx)("summary",{children:(0,r.jsx)("div",{className:"flex row align-baseline",children:e.summary})}),e.children]})}},1384:(e,t,n)=>{n.d(t,{o:()=>i,w:()=>a});var r=n(8878),s=n(782);const i=e=>{const t=(0,r.useId)(),n=`tab-${t}`,i=`panel-${t}`;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{role:"tab",id:n,"aria-controls":i,style:e.style,children:(0,s.jsxs)("label",{children:[e.title,(0,s.jsx)("input",{type:"radio",name:e.parent,"aria-controls":i,value:n,checked:e.checked,onChange:t=>{var n;return 1==t.target.checked&&(null===(n=e.onSelect)||void 0===n?void 0:n.call(e))}})]})}),(0,s.jsx)("div",{role:"tabpanel",id:i,"aria-labelledby":n,children:e.children})]})},a=e=>{const t=(0,r.useId)(),[n,i]=(0,r.useState)(0);return(0,s.jsx)("section",{role:"tablist",style:{"--tab-count":e.children.length},children:r.Children.map(e.children,((e,s)=>(0,r.cloneElement)(e,{checked:s===n,parent:t,idx:s,onSelect:()=>{var t,n;i(s),null===(t=e.props)||void 0===t||null===(n=t.onSelect)||void 0===n||n.call(t)}})))})}},8177:(e,t,n)=>{n.d(t,{A:()=>i,b:()=>a});var r=n(8727),s=n(8878);function i(e,t){return(0,s.useReducer)(((t,n)=>(0,r.Ay)(t,(t=>{e[n.action](t,n.payload)}))),t)}function a(e){const[t,n]=(0,s.useState)(e);return(0,s.useEffect)((()=>{n(e)}),[e]),[t,n]}},3977:(e,t,n)=>{n.d(t,{JE:()=>o,$5:()=>c,lN:()=>a,Q5:()=>u,Ln:()=>m});var r=n(5874),s=n(4533),i=n(7844);const a={Base:s.A.grammar('\nBase {\n  Root = Value*\n\n  At = at\n  Bang = bang\n  Bar = bar\n  CloseAngle = closeAngle\n  CloseBrace = closeBrace\n  CloseParen = closeParen\n  CloseSquare = closeSquare\n  Comma = comma\n  Dollar = dollar\n  Dot = dot\n  DoubleQuote = doubleQuote\n  Equal = equal\n  OpenAngle = openAngle\n  OpenBrace = openBrace\n  OpenParen = openParen\n  OpenSquare = openSquare\n  Percent = percent\n  Semi = semi\n  Underscore = underscore\n\n  at = "@"\n  bang = "!"\n  bar = "|"\n  closeAngle = ">"\n  closeBrace = "}"\n  closeParen = ")"\n  closeSquare = "]"\n  comma = ","\n  dollar = "$"\n  dot = "."\n  doubleQuote = "\\""\n  equal = "="\n  minus = "-"\n  newline = "\\r"? "\\n"\n  openAngle = "<"\n  openBrace = "{"\n  openParen = "("\n  openSquare = "["\n  percent = "%"\n  semi = ";"\n  underscore = "_"\n\n  Value = identifier | number | boolean\n\n  boolean = true | false\n  True = true\n  False = false\n  true = "true"\n  false = "false"\n\n  Name = identifier\n  identifier = (letter|underscore|dot|dollar) (alnum|underscore|dot|dollar)*\n\n  Number = number\n  number = hexNumber | decNumber | binNumber\n  binNumber = ("%B") ("0"|"1")+\n  hexNumber = ("%X") hexDigit+\n  decNumber = ("%D")? (wholeDec | realDec)\n  wholeDec = minus? digit+\n  realDec = minus? digit* "." digit+\n\n  String = DoubleQuote (~doubleQuote any)* doubleQuote\n  \n  spaces := (lineComment | comment | space)*\n  commentStart = "/*"\n  commentEnd = "*/"\n  comment = commentStart (~commentEnd any)* commentEnd\n  lineCommentStart = "//"\n  lineComment = lineCommentStart (~"\\n" any)*\n\n  List<elem, sep> = NonemptyListOf<elem, sep> sep?\n  EmptyList<elem, sep> = EmptyList<elem, sep> sep?\n}')},o=a.Base.createSemantics();o.extendOperation("asIteration",{List:(e,t)=>e.asIteration()}),o.addAttribute("value",{decNumber:(e,t)=>(0,i.ZR)(t.sourceString),wholeDec:(e,t)=>(0,i.ZR)(t.sourceString),binNumber:(e,t)=>(0,i.Yp)(t.sourceString),hexNumber:(e,t)=>(0,i.l8)(t.sourceString),Number:e=>e.value,Name:e=>e.name,identifier(e,t){return this.sourceString}}),o.addAttribute("name",{identifier(e,t){return this.sourceString},Name(e){return this.child(0)?.name}}),o.addAttribute("String",{String:(e,t,n)=>t.sourceString});const l="HDL statement has a syntax error";function c(e,t){const n=e.match(/Line \d+, col \d+: (?<message>.*)/),r=n?.groups?.message?n.groups.message:e;return{message:`${void 0!=t?.line?`Line ${t.line}: `:""}${r}`,span:t}}function u(e,t,n=(({root:e})=>e)){return function(s){try{const i=e.match(s);if(i.succeeded()){const e=t(i),s=n(e);return(0,r.Ok)(s)}return(0,r._)(c(i.shortMessage??l,m(i.getInterval())))}catch(i){return(0,r._)(i)}}}function m(e){return{start:e.startIdx,end:e.endIdx,line:e.getLineAndColumn().lineNum}}},7844:(e,t,n)=>{n.d(t,{FN:()=>p,Yp:()=>c,ZR:()=>l,_Q:()=>u,ad:()=>h,e5:()=>d,l8:()=>o,uh:()=>m,xu:()=>g});const r=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];function s(e){return r[e]??"X"}function i(e){switch(e){case 0:return"0000";case 1:return"0001";case 2:return"0010";case 3:return"0011";case 4:return"0100";case 5:return"0101";case 6:return"0110";case 7:return"0111";case 8:return"1000";case 9:return"1001";case 10:return"1010";case 11:return"1011";case 12:return"1100";case 13:return"1101";case 14:return"1110";case 15:return"1111";default:return"erro"}}function a(e,t){return 65535&parseInt(e.replace(/[^\d a-f A-F +-.]/g,""),t)}function o(e){return a(e,16)}function l(e){return a(e,10)}function c(e){return a(e.replaceAll(" ",""),2)}function u(e){return e.toUpperCase().includes("X")?o(e):l(e)}function m(e){return`0x${s((61440&e)>>12)}${s((3840&e)>>8)}${s((240&e)>>4)}${s(15&e)}`}function d(e,t=16){return`${i((61440&e)>>12)}${i((3840&e)>>8)}${i((240&e)>>4)}${i(15&e)}`.substring(16-t)}function p(e){return 32768===(e&=65535)?"-32768":32768&e?`-${e=1+~e&32767}`:`${e}`}function h(e){return`${e&=65535}`}function g(e,t){let n=~((e&=65535)&(t&=65535));return n&=65535,n}},2548:(e,t,n)=>{n.d(t,{P:()=>a});var r=n(270),s=n(8032);function i(e,t){const n=[];for(let r=0;r<t;r++)n.push(e.get(e.SP-t+r));return n}const a={"Math.multiply":{func:(e,t)=>{const[n,r]=i(e,2);return n*r&65535},nArgs:2},"Math.divide":{func:(e,t)=>{const[n,s]=i(e,2);return 0==s?(t.sys.error(r.X.DIVIDE_BY_ZERO),0):65535&Math.floor(n/s)},nArgs:2},"Math.min":{func:(e,t)=>{const[n,r]=i(e,2);return 65535&Math.min(n,r)},nArgs:2},"Math.max":{func:(e,t)=>{const[n,r]=i(e,2);return 65535&Math.max(n,r)},nArgs:2},"Math.sqrt":{func:(e,t)=>{const[n]=i(e,1);return n<0?(t.sys.error(r.X.SQRT_NEG),0):65535&Math.floor(Math.sqrt(n))},nArgs:1},"Math.abs":{func:(e,t)=>{const[n]=i(e,1);return 65535&Math.abs(n)},nArgs:1},"Screen.clearScreen":{func:(e,t)=>(t.screen.clear(),0),nArgs:0},"Screen.setColor":{func:(e,t)=>{const[n]=i(e,1);return t.screen.color=0!==n,0},nArgs:1},"Screen.drawPixel":{func:(e,t)=>{const[n,r]=i(e,2);return t.screen.drawPixel(n,r),0},nArgs:2},"Screen.drawLine":{func:(e,t)=>{const[n,r,s,a]=i(e,4);return t.screen.drawLine(n,r,s,a),0},nArgs:4},"Screen.drawRectangle":{func:(e,t)=>{const[n,r,s,a]=i(e,4);return t.screen.drawRect(n,r,s,a),0},nArgs:4},"Screen.drawCircle":{func:(e,t)=>{const[n,r,s]=i(e,3);return t.screen.drawCircle(n,r,s),0},nArgs:3},"Memory.peek":{func:(e,t)=>{const[n]=i(e,1);return e.get(n)},nArgs:1},"Memory.poke":{func:(e,t)=>{const[n,r]=i(e,2);return e.set(n,r),0},nArgs:2},"Memory.alloc":{func:(e,t)=>{const[n]=i(e,1);return t.memory.alloc(n)},nArgs:1},"Memory.deAlloc":{func:(e,t)=>{const[n]=i(e,1);return t.memory.deAlloc(n),0},nArgs:1},"Array.new":{func:(e,t)=>{const[n]=i(e,1);return n<=0?(t.sys.error(r.X.ARRAY_SIZE_NOT_POSITIVE),0):t.memory.alloc(n)},nArgs:1},"Array.dispose":{func:(e,t)=>{const[n]=i(e,1);return t.memory.deAlloc(n),0},nArgs:1},"String.new":{func:(e,t)=>{const[n]=i(e,1);return t.string.new(n)},nArgs:1},"String.dispose":{func:(e,t)=>{const[n]=i(e,1);return t.string.dispose(n),0},nArgs:1},"String.length":{func:(e,t)=>{const[n]=i(e,1);return t.string.length(n)},nArgs:1},"String.charAt":{func:(e,t)=>{const[n,r]=i(e,2);return t.string.charAt(n,r)},nArgs:2},"String.setCharAt":{func:(e,t)=>{const[n,r,s]=i(e,3);return t.string.setCharAt(n,r,s),0},nArgs:3},"String.appendChar":{func:(e,t)=>{const[n,r]=i(e,2);return t.string.appendChar(n,r)},nArgs:2},"String.eraseLastChar":{func:(e,t)=>{const[n]=i(e,1);return t.string.eraseLastChar(n),0},nArgs:1},"String.intValue":{func:(e,t)=>{const[n]=i(e,1);return t.string.intValue(n)},nArgs:1},"String.setInt":{func:(e,t)=>{const[n,r]=i(e,2);return t.string.setInt(n,r),0},nArgs:2},"String.backSpace":{func:(e,t)=>s.G_,nArgs:0},"String.doubleQuote":{func:(e,t)=>s.MD,nArgs:0},"String.newLine":{func:(e,t)=>s.qK,nArgs:0},"Output.moveCursor":{func:(e,t)=>{const[n,r]=i(e,2);return t.output.moveCursor(n,r),0},nArgs:2},"Output.printChar":{func:(e,t)=>{const[n]=i(e,1);return t.output.printChar(n),0},nArgs:1},"Output.printString":{func:(e,t)=>{const[n]=i(e,1);return t.output.printString(n),0},nArgs:1},"Output.printInt":{func:(e,t)=>{const[n]=i(e,1);return t.output.printInt(n),0},nArgs:1},"Output.println":{func:(e,t)=>(t.output.println(),0),nArgs:0},"Output.backSpace":{func:(e,t)=>(t.output.backspace(),0),nArgs:0},"Keyboard.keyPressed":{func:(e,t)=>t.keyboard.keyPressed(),nArgs:0},"Keyboard.readChar":{func:(e,t)=>(t.keyboard.readChar(),0),nArgs:0},"Keyboard.readLine":{func:(e,t)=>{const[n]=i(e,1);return t.keyboard.readLine(n),0},nArgs:1},"Keyboard.readInt":{func:(e,t)=>{const[n]=i(e,1);return t.keyboard.readInt(n),0},nArgs:1},"Sys.halt":{func:(e,t)=>(t.sys.halt(),0),nArgs:0},"Sys.error":{func:(e,t)=>{const[n]=i(e,1);return t.sys.error(n),0},nArgs:1},"Sys.wait":{func:(e,t)=>{const[n]=i(e,1);return t.sys.wait(n),0},nArgs:1}}},270:(e,t,n)=>{var r;function s(e){return Object.values(r).includes(e)}n.d(t,{U:()=>s,X:()=>r}),function(e){e[e.SYS_WAIT_DURATION_NOT_POSITIVE=1]="SYS_WAIT_DURATION_NOT_POSITIVE",e[e.ARRAY_SIZE_NOT_POSITIVE=2]="ARRAY_SIZE_NOT_POSITIVE",e[e.DIVIDE_BY_ZERO=3]="DIVIDE_BY_ZERO",e[e.SQRT_NEG=4]="SQRT_NEG",e[e.ALLOC_SIZE_NOT_POSITIVE=5]="ALLOC_SIZE_NOT_POSITIVE",e[e.HEAP_OVERFLOW=6]="HEAP_OVERFLOW",e[e.ILLEGAL_PIXEL_COORD=7]="ILLEGAL_PIXEL_COORD",e[e.ILLEGAL_LINE_COORD=8]="ILLEGAL_LINE_COORD",e[e.ILLEGAL_RECT_COORD=9]="ILLEGAL_RECT_COORD",e[e.ILLEGAL_CENTER_COORD=12]="ILLEGAL_CENTER_COORD",e[e.ILLEGAL_RADIUS=13]="ILLEGAL_RADIUS",e[e.STRING_LENGTH_NEG=14]="STRING_LENGTH_NEG",e[e.GET_CHAR_INDEX_OUT_OF_BOUNDS=15]="GET_CHAR_INDEX_OUT_OF_BOUNDS",e[e.SET_CHAR_INDEX_OUT_OF_BOUNDS=16]="SET_CHAR_INDEX_OUT_OF_BOUNDS",e[e.STRING_FULL=17]="STRING_FULL",e[e.STRING_EMPTY=18]="STRING_EMPTY",e[e.STRING_INSUFFICIENT_CAPACITY=19]="STRING_INSUFFICIENT_CAPACITY",e[e.ILLEGAL_CURSOR_LOCATION=20]="ILLEGAL_CURSOR_LOCATION"}(r||(r={}))},8032:(e,t,n)=>{n.d(t,{Fz:()=>c,G_:()=>i,MD:()=>a,eY:()=>l,qK:()=>s});var r=n(270);const s=128,i=129,a=34;function o(e){return e-48}function l(e){return e.toString().split("").map((e=>Number(e)+48))}class c{memory;os;constructor(e,t){this.memory=e,this.os=t}new(e){e<=0&&this.os.sys.error(r.X.STRING_LENGTH_NEG);const t=this.os.memory.alloc(e+2);return this.os.sys.halted?0:(this.memory.set(t,e),this.memory.set(t+1,0),t)}dispose(e){this.os.memory.deAlloc(e)}maxLength(e){return this.memory.get(e)}length(e){return this.memory.get(e+1)}setLength(e,t){this.memory.set(e+1,t)}charAt(e,t){return t<0||t>=this.length(e)?(this.os.sys.error(r.X.GET_CHAR_INDEX_OUT_OF_BOUNDS),0):this.memory.get(e+t+2)}setCharAt(e,t,n){t<0||t>=this.length(e)?this.os.sys.error(r.X.SET_CHAR_INDEX_OUT_OF_BOUNDS):this.memory.set(e+t+2,n)}appendChar(e,t){const n=this.length(e);return n==this.maxLength(e)?(this.os.sys.error(r.X.STRING_FULL),0):(this.setLength(e,n+1),this.setCharAt(e,n,t),e)}eraseLastChar(e){const t=this.length(e);0!=t?this.setLength(e,t-1):this.os.sys.error(r.X.STRING_EMPTY)}intValue(e){const t=[];for(let r=0;r<this.length(e)&&((n=this.charAt(e,r))>=48&&n<=57);r++)t.push(o(this.charAt(e,r)));var n;return t.reduce(((e,t)=>10*e+t),0)}setInt(e,t){const n=l(t);if(n.length>this.maxLength(e))this.os.sys.error(r.X.STRING_INSUFFICIENT_CAPACITY);else{this.setLength(e,0);for(const t of n)this.appendChar(e,t)}}}}}]);