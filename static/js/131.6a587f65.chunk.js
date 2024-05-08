"use strict";(globalThis.webpackChunk_nand2tetris_web=globalThis.webpackChunk_nand2tetris_web||[]).push([[131],{5131:(e,t,n)=>{n.r(t),n.d(t,{Compiler:()=>T,default:()=>$});var r=n(4621),i=n(5874),a=n(4533),s=n(3977);const o='Jack <: Base {\n    Root := Class\n\n    Class = "class" jackIdentifier OpenBrace ClassVarDec* SubroutineDec* CloseBrace\n\n    Type = "int" | "char" | "boolean" | jackIdentifier\n\n    ClassVarType = "static" | "field"\n    ClassVarDec = ClassVarType Type jackIdentifier TrailingIdentifier* Semi\n    TrailingIdentifier = Comma jackIdentifier\n\n    ReturnType = Type | "void"\n    SubroutineType = "constructor" | "function" | "method" \n    SubroutineDec = SubroutineType ReturnType jackIdentifier OpenParen ParameterList CloseParen SubroutineBody\n\n\n    Parameter = Type jackIdentifier\n    Parameters = Parameter TrailingParameter*\n    TrailingParameter = Comma Parameter\n    ParameterList = Parameters?\n\n    SubroutineBody = OpenBrace VarDec* Statement* CloseBrace\n\n    VarDec = "var" Type jackIdentifier TrailingIdentifier* Semi\n\n    Statement = LetStatement | IfStatement | WhileStatement | DoStatement | ReturnStatement\n\n    LetStatement = "let" jackIdentifier ArrayIndex? Equal Expression Semi\n    ArrayIndex = OpenSquare Expression CloseSquare\n\n    IfStatement = "if" OpenParen Expression CloseParen OpenBrace Statement* CloseBrace ElseBlock?\n    ElseBlock = "else" OpenBrace Statement* CloseBrace\n\n    WhileStatement = "while" OpenParen Expression CloseParen OpenBrace Statement* CloseBrace\n    DoStatement = "do" SubroutineCall Semi\n    ReturnStatement = "return" Expression? Semi\n\n    op = "+" | "-" | "*" | "/" | "&" | "|" | "<" | ">" | "="\n    ExpressionPart = op Term\n    Expression = Term ExpressionPart*\n\n    integerConstant = digit+\n    stringConstant = doubleQuote (~doubleQuote ~newline any)* doubleQuote\n    keywordConstant = "true" | "false" | "null" | "this"\n\n    ArrayAccess = jackIdentifier ArrayIndex\n    GroupedExpression = OpenParen Expression CloseParen\n\n    unaryOp = "-" | "~"\n    UnaryExpression = unaryOp Term\n\n    Term = integerConstant | stringConstant | keywordConstant | SubroutineCall  | ArrayAccess | jackIdentifier | GroupedExpression | UnaryExpression\n\n    CompoundIdentifier = jackIdentifier Dot jackIdentifier\n    SubroutineName = CompoundIdentifier | jackIdentifier\n    SubroutineCall = SubroutineName OpenParen ExpressionList CloseParen\n\n    ExpressionList = Expressions?\n    Expressions = Expression TrailingExpression*\n    TrailingExpression = Comma Expression\n\n    jackIdentifier = letter (alnum | underscore)*\n}',l=a.A.grammar(o,s.lN),c=l.extendSemantics(s.JE);function u(e){return e.children.map((e=>e.statement))}c.addAttribute("Root",{Root(e){return this.class}}),c.addAttribute("class",{Class:(e,t,n,r,i,a)=>({name:t.sourceString,varDecs:r.children.map((e=>e.classVarDec)),subroutines:i.children.map((e=>e.subroutineDec))})}),c.addAttribute("classVarDec",{ClassVarDec:(e,t,n,r,i)=>({varType:e.sourceString,type:t.sourceString,names:[n.sourceString,...r.children.map((e=>e.child(1).sourceString))]})}),c.addAttribute("subroutineDec",{SubroutineDec:(e,t,n,r,i,a,s)=>({type:e.sourceString,returnType:t.sourceString,name:n.sourceString,parameters:i.parameterList,body:s.subroutineBody})}),c.addAttribute("parameter",{Parameter:(e,t)=>({type:e.sourceString,name:t.sourceString})}),c.addAttribute("parameterList",{ParameterList:e=>e.child(0)?.parameters??[]}),c.addAttribute("parameters",{Parameters:(e,t)=>[e.parameter,...t.children.map((e=>e.child(1).parameter))]}),c.addAttribute("subroutineBody",{SubroutineBody:(e,t,n,r)=>({varDecs:t.children.map((e=>e.varDec)),statements:u(n)})}),c.addAttribute("varDec",{VarDec:(e,t,n,r,i)=>({type:t.sourceString,names:[n.sourceString,...r.children.map((e=>e.child(1).sourceString))]})}),c.addAttribute("statement",{LetStatement:(e,t,n,r,i,a)=>({statementType:"letStatement",name:t.sourceString,arrayIndex:n?.child(0)?.child(1)?.expression,value:i.expression}),IfStatement:(e,t,n,r,i,a,s,o)=>({statementType:"ifStatement",condition:n.expression,body:u(a),else:o.child(0)?.else??[]}),WhileStatement:(e,t,n,r,i,a,s)=>({statementType:"whileStatement",condition:n.expression,body:u(a)}),DoStatement:(e,t,n)=>({statementType:"doStatement",call:t.term}),ReturnStatement:(e,t,n)=>({statementType:"returnStatement",value:t.children.length>0?t.child(0).expression:void 0})}),c.addAttribute("else",{ElseBlock:(e,t,n,r)=>u(n)}),c.addAttribute("term",{integerConstant:e=>({termType:"numericLiteral",value:Number(e.sourceString)}),stringConstant(e,t,n){return{termType:"stringLiteral",value:this.sourceString.slice(1,-1)}},keywordConstant(e){return{termType:"keywordLiteral",value:this.sourceString}},SubroutineCall:(e,t,n,r)=>({termType:"subroutineCall",name:e.sourceString,parameters:n.expressionList}),ArrayAccess:(e,t)=>({termType:"arrayAccess",name:e.sourceString,index:t.child(1).expression}),jackIdentifier:(e,t)=>({termType:"variable",name:`${e.sourceString}${t.sourceString}`}),GroupedExpression:(e,t,n)=>({termType:"groupedExpression",expression:t.expression}),UnaryExpression:(e,t)=>({termType:"unaryExpression",op:e.sourceString,term:t.term})}),c.addAttribute("expressionList",{ExpressionList:e=>e.child(0)?.expressions??[]}),c.addAttribute("expressions",{Expressions:(e,t)=>[e.expression,...t.children.map((e=>e.child(1).expression))]}),c.addAttribute("expression",{Expression:(e,t)=>({nodeType:"expression",term:e.term,rest:t.children.map((e=>e.expressionPart))})}),c.addAttribute("expressionPart",{ExpressionPart:(e,t)=>({op:e.sourceString,term:t.term})});const m={parser:l,grammar:o,semantics:c,parse:(0,s.Q5)(l,c,(e=>e.class))};function d(e){const t=m.parse(e);if((0,i.ys)(t))return t;try{return(new g).compile((0,i.Ok)(t))}catch(n){return console.error(n),(0,i._)(n)}}const p={"+":"add","-":"sub","*":"call Math.multiply 2","/":"call Math.divide 2","&":"and","|":"or","<":"lt",">":"gt","=":"eq"},h={"-":"neg","~":"not"};class g{instructions=[];globalSymbolTable={};localSymbolTable={};className="";labelNum=0;fieldNum=0;staticNum=0;localNum=0;varData(e){return this.localSymbolTable[e]||this.globalSymbolTable[e]}var(e){const t=this.varData(e);return`${t?.segment} ${t?.index}`}write(e){this.instructions.push(e)}writeMultiple(e){for(const t of e)this.write(t)}getLabel(){const e=`L${this.labelNum}`;return this.labelNum+=1,e}compile(e){this.className=e.name;for(const t of e.varDecs)this.compileClassVarDec(t);for(const t of e.subroutines)this.compileSubroutineDec(t);return(0,i.Ok)(this.instructions.join("\n"))}compileClassVarDec(e){for(const t of e.names)"field"==e.varType?(this.globalSymbolTable[t]={type:e.type,segment:"this",index:this.fieldNum},this.fieldNum+=1):(this.globalSymbolTable[t]={type:e.type,segment:"static",index:this.staticNum},this.staticNum+=1)}compileVarDec(e){for(const t of e.names)this.localSymbolTable[t]={type:e.type,segment:"local",index:this.localNum},this.localNum+=1}registerArgs(e,t=!1){let n=0;for(const r of e)this.localSymbolTable[r.name]={type:r.type,segment:"argument",index:n+(t?1:0)},n+=1}compileSubroutineDec(e){switch(e.type){case"method":this.compileMethod(e);break;case"constructor":this.compileConstructor(e);break;case"function":this.compileFunction(e)}}compileSubroutineStart(e,t=!1){this.localSymbolTable={},this.localNum=0,this.registerArgs(e.parameters,t);const n=e.body.varDecs.map((e=>e.names.length)).reduce(((e,t)=>e+t),0);this.write(`function ${this.className}.${e.name} ${n}`);for(const r of e.body.varDecs)this.compileVarDec(r)}compileFunction(e){this.compileSubroutineStart(e),this.compileStatements(e.body.statements)}compileMethod(e){this.compileSubroutineStart(e,!0),this.writeMultiple(["push argument 0","pop pointer 0"]),this.compileStatements(e.body.statements)}compileConstructor(e){this.compileSubroutineStart(e),this.writeMultiple([`push constant ${this.fieldNum}`,"call Memory.alloc 1","pop pointer 0"]),this.compileStatements(e.body.statements)}compileExpression(e){this.compileTerm(e.term);for(const t of e.rest)this.compileTerm(t.term),this.compileOp(t.op)}compileOp(e){this.write(p[e])}compileTerm(e){switch(e.termType){case"numericLiteral":this.write(`push constant ${e.value}`);break;case"stringLiteral":this.compileStringLiteral(e.value);break;case"variable":this.write(`push ${this.var(e.name)}`);break;case"keywordLiteral":this.compileKeywordLiteral(e.value);break;case"subroutineCall":this.compileSubroutineCall(e);break;case"arrayAccess":this.compileExpression(e.index),this.writeMultiple([`push ${this.var(e.name)}`,"add","pop pointer 1","push that 0"]);break;case"groupedExpression":this.compileExpression(e.expression);break;case"unaryExpression":this.compileTerm(e.term),this.write(h[e.op])}}compileSubroutineCall(e){let t="",n="",r="",i=!0;if(e.name.includes(".")){const[a,s]=e.name.split(".");r=s;const o=this.varData(a);o?(t=this.var(a),n=o.type):(i=!1,n=a)}else t="pointer 0",n=this.className,r=e.name;i&&this.write(`push ${t}`);for(const a of e.parameters)this.compileExpression(a);this.write(`call ${n}.${r} ${e.parameters.length+(i?1:0)}`)}compileStringLiteral(e){this.writeMultiple([`push constant ${e.length}`,"call String.new 1"]);for(let t=0;t<e.length;t++)this.writeMultiple([`push constant ${e.charCodeAt(t)}`,"call String.appendChar 2"])}compileKeywordLiteral(e){switch(e){case"true":this.write("push constant 1");break;case"false":case"null":this.write("push constant 0");break;case"this":this.write("push pointer 0")}}compileStatements(e){for(const t of e)this.compileStatement(t)}compileStatement(e){switch(e.statementType){case"doStatement":this.compileDoStatement(e);break;case"ifStatement":this.compileIf(e);break;case"letStatement":this.compileLet(e);break;case"returnStatement":this.compileReturn(e);break;case"whileStatement":this.compileWhile(e)}}compileReturn(e){e.value?this.compileExpression(e.value):this.write("push constant 0"),this.write("return")}compileLet(e){e.arrayIndex?(this.compileExpression(e.arrayIndex),this.writeMultiple([`push ${this.var(e.name)}`,"add"]),this.compileExpression(e.value),this.writeMultiple(["pop temp 0","pop pointer 1","push temp 0","pop that 0"])):(this.compileExpression(e.value),this.write(`pop ${this.var(e.name)}`))}compileDoStatement(e){this.compileSubroutineCall(e.call),this.write("pop temp 0")}compileIf(e){const t=this.getLabel(),n=this.getLabel();this.compileExpression(e.condition),this.writeMultiple(["not",`if-goto ${n}`]),this.compileStatements(e.body),this.writeMultiple([`goto ${t}`,`label ${n}`]),this.compileStatements(e.else),this.write(`label ${t}`)}compileWhile(e){const t=this.getLabel(),n=this.getLabel();this.write(`label ${t}`),this.compileExpression(e.condition),this.writeMultiple(["not",`if-goto ${n}`]),this.compileStatements(e.body),this.writeMultiple([`goto ${t}`,`label ${n}`])}}var b=n(8878),f=n(8177),y=n(3761);function S(e,t,n){return{initialState:{files:{},selected:""},reducers:{setFile(e,{name:t,content:n}){n??="";const r=d(n);e.files[t]={content:n,valid:!(0,i.ys)(r),error:(0,i.ys)(r)?(0,i._)(r):void 0}},deleteFile(e,t){delete e.files[t]},copyFile(e,{oldName:t,newName:n}){e.files[n]=e.files[t]},setSelected(e,t){e.selected=t}},actions:{async editFile(t,r){n.current({action:"setFile",payload:{name:t,content:r}}),await e.writeFile(`/jack/${t}.jack`,r)},async addFile(t,r){n.current({action:"setFile",payload:{name:t,content:r}}),await e.writeFile(`/jack/${t}.jack`,r??""),n.current({action:"setSelected",payload:t})},async deleteFile(e){n.current({action:"deleteFile",payload:e}),function(e){for(const t of Object.keys(localStorage))t.startsWith(e)&&localStorage.removeItem(t)}(`/jack/${e}.jack`)},async reset(){for(const t of await e.scandir("/jack"))await this.deleteFile(t.name.replace(".jack",""))},async renameFile(t,r){n.current({action:"copyFile",payload:{oldName:t,newName:r}});const i=await e.readFile(`/jack/${t}.jack`);await e.writeFile(`/jack/${r}.jack`,i),await this.deleteFile(t)},async _loadFiles(){const t=(await e.scandir("/jack")).filter((e=>e.isFile()&&e.name.endsWith(".jack")));for(const r of t)n.current({action:"setFile",payload:{name:r.name.replace(".jack",""),content:await e.readFile(`/jack/${r.name}`)}});n.current({action:"setSelected",payload:t[0].name.replace(".jack","")})},async initialize(){0==(await e.scandir("/jack")).length&&(e.mkdir("/jack"),e.writeFile("/jack/Main.jack","")),await this._loadFiles()}}}}var v=n(5608),x=n.n(v),C=n(8330),k=n(3499),j=n(8029),w=n(2675),N=n(4280),E=n(782);const T=()=>{const{tracking:e,toolStates:t,setTitle:n}=(0,b.useContext)(j.BR),{state:a,dispatch:s,actions:o}=function(){const{setStatus:e,fs:t}=(0,b.useContext)(y.L),n=(0,b.useRef)((()=>{})),{initialState:r,reducers:i,actions:a}=(0,b.useMemo)((()=>S(t,0,n)),[e,n]),[s,o]=(0,f.A)(i,r);return n.current=o,{state:s,dispatch:n,actions:a}}(),l=(0,b.useRef)(null),c=(0,b.useRef)(null),u=(0,b.useRef)(null);(0,b.useEffect)((()=>{o.initialize()}),[o]),(0,b.useEffect)((()=>{n(t.compiler.title)}));const m=(0,b.useCallback)((t=>{s.current({action:"setSelected",payload:t}),e.trackEvent("tab","change",t)}),[e]),p=()=>Object.keys(a.files).map((e=>a.files[e].valid)).reduce(((e,t)=>e&&t),!0),h=()=>{const e=[];for(const t of Object.keys(a.files)){let n=(0,i.oA)(d(a.files[t].content));n=`// Compiled ${t}.jack:\n`.concat(n),e.push({name:t,content:n})}return e};return(0,E.jsxs)("div",{className:"Page CompilerPage grid",children:[(0,E.jsx)("a",{style:{display:"none"},ref:c}),(0,E.jsx)("input",{style:{display:"none"},ref:l,type:"file",webkitdirectory:"",onChange:async e=>{if(!e.target.files||0==e.target.files.length)return;await o.reset();for(const t of e.target.files)if(t.name.endsWith(".jack")){const e=await t.text();o.addFile(t.name.replace(".jack",""),e)}const n=e.target.files[0].webkitRelativePath.split("/")[0];t.compiler.setTitle(`Folder name: ${n}`)}}),(0,E.jsx)(C.N_,{ref:u,to:k.Ay.vm.href,style:{display:"none"}}),(0,E.jsx)(N.Z,{className:"code",header:(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)("div",{children:(0,E.jsx)(r.x6,{id:"Source"})}),(0,E.jsx)("div",{className:"flex-1",children:(0,E.jsx)("fieldset",{role:"group",children:(0,E.jsx)("button",{className:"flex-0",onClick:()=>{var e;null===(e=l.current)||void 0===e||e.click()},children:"\ud83d\udcc2"})})}),(0,E.jsxs)("fieldset",{role:"group",children:[(0,E.jsx)("button",{disabled:!p(),"data-tooltip":"Run in VM Emulator","data-placement":"left",onClick:()=>{var e;t.vm.setTitle(t.compiler.title),t.vm.setFiles(h()),null===(e=u.current)||void 0===e||e.click()},children:"\u25b6\ufe0f"}),(0,E.jsx)("button",{disabled:!p(),"data-tooltip":"Download compiled code","data-placement":"left",onClick:async()=>{if(!c.current)return;const e=new(x());for(const r of h())e.file(`${r.name}.vm`,r.content);const t=await e.generateAsync({type:"blob"}),n=URL.createObjectURL(t);c.current.href=n,c.current.download="VmCode",c.current.click(),URL.revokeObjectURL(n)},children:"\u2b07\ufe0f"})]})]}),children:(0,E.jsx)("div",{role:"tablist",style:{"--tab-count":`${Object.keys(a.files).length}`},children:Object.keys(a.files).map((e=>(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)("div",{role:"tab",id:`jack-tab-${e}`,"aria-controls":`jack-tabpanel-${e}`,"aria-selected":a.selected===e,children:(0,E.jsxs)("label",{children:[(0,E.jsx)("input",{type:"radio",name:"tabs","aria-controls":`jack-tabpanel-${e}`,value:e,checked:a.selected===e,onChange:()=>m(e)}),e,".jack"]})},`tab-${e}`),(0,E.jsx)("div",{role:"tabpanel","aria-labelledby":`jack-tab-${e}`,id:`jack-tabpanel-${e}`,children:(0,E.jsx)(w.K,{value:a.files[e].content,disabled:!0,onChange:e=>{},error:a.files[e].error,language:""})},`tabpanel-${e}`)]})))})})]})},$=T},2675:(e,t,n)=>{n.d(t,{K:()=>m});var r=n(4621),i=n(7983),a=n(8878),s=n(8029),o=n(782);const l=({error:e})=>e?(0,o.jsxs)("details",{className:"ErrorPanel",open:!0,children:[(0,o.jsx)("summary",{role:"button",className:"secondary",children:(0,o.jsx)(r.x6,{id:"Parse Error"})}),(0,o.jsx)("pre",{children:(0,o.jsx)("code",{children:null===e||void 0===e?void 0:e.message})})]}):(0,o.jsx)(o.Fragment,{}),c=({value:e,onChange:t,language:n,disabled:r=!1})=>{const[i,s]=(0,a.useState)(e);return(0,o.jsx)("textarea",{"data-testid":`editor-${n}`,disabled:r,value:i,onChange:e=>{var n;const r=null===(n=e.target)||void 0===n?void 0:n.value;s(r),t(r)}})},u=({value:e,onChange:t,onCursorPositionChange:n,language:r,error:l,disabled:c=!1,highlight:u,highlightType:m="highlight",customDecorations:d=[],dynamicHeight:p=!1,alwaysRecenter:h=!0,lineNumberTransform:g})=>{const{theme:b}=(0,a.useContext)(s.BR),f=(0,i.dJ)(),[y,S]=(0,a.useState)(0),v=(0,a.useRef)(),x=(0,a.useRef)([]),C=(0,a.useRef)(void 0),k=(0,a.useRef)([]),j=(0,a.useCallback)((()=>("system"===b?window.matchMedia("(prefers-color-scheme: dark)").matches:"dark"===b)?"vs-dark":"vs"),[b]),w=(0,a.useCallback)((()=>{var e;let t;if("number"==typeof C.current){var n,r,i;const e=null!==(n=null===(r=v.current)||void 0===r||null===(i=r.getModel())||void 0===i?void 0:i.getLineCount())&&void 0!==n?n:0;if(C.current<=e){var a,s,o,l,c,u,d,p,g;t={start:null!==(a=null===(s=v.current)||void 0===s||null===(o=s.getModel())||void 0===o?void 0:o.getOffsetAt({lineNumber:C.current,column:0}))&&void 0!==a?a:0,end:C.current==e?null!==(l=null===(c=v.current)||void 0===c||null===(u=c.getModel())||void 0===u?void 0:u.getValueLength())&&void 0!==l?l:0:(null!==(d=null===(p=v.current)||void 0===p||null===(g=p.getModel())||void 0===g?void 0:g.getOffsetAt({lineNumber:C.current+1,column:0}))&&void 0!==d?d:1)-1,line:C.current}}}else t=C.current;x.current=((e,t,n,r,i,a="highlight",s=!0)=>{if(!t||!n)return i;const o=t.getModel();if(!o)return i;const l=o.getPositionAt(n.start),c=o.getPositionAt(n.end),u=null===e||void 0===e?void 0:e.Range.fromPositions(l,c),m=[];u&&(m.push({range:u,options:{inlineClassName:"error"==a?"error-highlight":"highlight"}}),n.start!=n.end&&(!s&&((e,t)=>{for(const r of null!==(n=null===e||void 0===e?void 0:e.getVisibleRanges())&&void 0!==n?n:[]){var n;if(r.containsRange(t))return!0}return!1})(t,u)||t.revealRangeInCenter(u)));for(const d of r){const t=null===e||void 0===e?void 0:e.Range.fromPositions(o.getPositionAt(d.span.start),o.getPositionAt(d.span.end));t&&m.push({range:t,options:{inlineClassName:d.cssClass}})}return t.deltaDecorations(i,m)})(f,v.current,null!==(e=t)&&void 0!==e?e:{start:0,end:0,line:0},k.current,x.current,m,h)}),[x,f,v,C,m]),N=()=>{if(p){var e;const t=null===(e=v.current)||void 0===e?void 0:e.getContentHeight();t&&S(t)}};(0,a.useEffect)((()=>{C.current=u,w()}),[u]),(0,a.useEffect)((()=>{k.current=d,w()}),[d]);const E=(0,a.useCallback)((e=>{var t,r;v.current=e,null===(t=v.current)||void 0===t||t.updateOptions({fontFamily:'"JetBrains Mono", source-code-pro, Menlo, Monaco,\n      Consolas, "Roboto Mono", "Ubuntu Monospace", "Noto Mono", "Oxygen Mono",\n      "Liberation Mono", monospace, "Apple Color Emoji", "Segoe UI Emoji",\n      "Segoe UI Symbol", "Noto Color Emoji"',fontSize:16,minimap:{enabled:!1},theme:j(),scrollBeyondLastLine:!1,readOnly:c,lineNumbers:null!==g&&void 0!==g?g:"on",folding:!1,quickSuggestions:{other:"inline"}}),w(),N(),null===(r=v.current)||void 0===r||r.onDidChangeCursorPosition((e=>{var t,r;const i=null===(t=v.current)||void 0===t||null===(r=t.getModel())||void 0===r?void 0:r.getOffsetAt(e.position);void 0!==i&&(null===n||void 0===n||n(i))}))}),[j]);(0,a.useEffect)((()=>{void 0!==v.current&&v.current.updateOptions({lineNumbers:null!==g&&void 0!==g?g:"on"})}),[g]),(0,a.useEffect)((()=>{void 0!==v.current&&v.current.updateOptions({theme:j()})}),[v,j]),(0,a.useEffect)((()=>{void 0!==v.current&&v.current.updateOptions({readOnly:c})}),[v,c]),(0,a.useEffect)((()=>{if(void 0===v.current)return;if(null===f)return;const e=v.current.getModel();if(null===e)return;if(void 0===l||void 0===l.span)return void f.editor.setModelMarkers(e,r,[]);const t=e.getPositionAt(l.span.start),n=e.getPositionAt(l.span.end);f.editor.setModelMarkers(e,r,[{message:l.message,startColumn:t.column,startLineNumber:t.lineNumber,endColumn:n.column,endLineNumber:n.lineNumber,severity:8}])}),[l,v,f,r]);return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(i.Ay,{value:e,onChange:(e="")=>{N(),t(e)},language:r,onMount:E,height:p?y:void 0})})},m=({className:e="",style:t={},disabled:n=!1,value:r,error:i,onChange:m,onCursorPositionChange:d,grammar:p,language:h,highlight:g,highlightType:b="highlight",customDecorations:f=[],dynamicHeight:y=!1,alwaysRecenter:S=!0,lineNumberTransform:v})=>{const{monaco:x}=(0,a.useContext)(s.BR);return(0,o.jsx)("div",{className:`Editor ${y?"dynamic-height":""} ${e}`,style:t,children:x.canUse&&x.wants?(0,o.jsx)(u,{value:r,onChange:m,onCursorPositionChange:d,language:h,error:i,disabled:n,highlight:g,highlightType:b,customDecorations:f,dynamicHeight:y,alwaysRecenter:S,lineNumberTransform:v}):(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(c,{value:r,onChange:m,language:h,disabled:n}),(0,o.jsx)(l,{error:i})]})})}},4280:(e,t,n)=>{n.d(t,{Z:()=>i,p:()=>a});var r=n(782);const i=e=>{var t;return(0,r.jsxs)("article",{className:["panel",null!==(t=e.className)&&void 0!==t?t:""].join(" "),children:[e.header&&(0,r.jsx)("header",{children:e.header}),(0,r.jsx)("main",{children:e.children}),e.footer&&(0,r.jsx)("footer",{children:e.footer})]})},a=e=>{var t;return(0,r.jsxs)("details",{className:null!==(t=e.className)&&void 0!==t?t:"",open:e.open,style:e.style,children:[(0,r.jsx)("summary",{children:(0,r.jsx)("div",{className:"flex row align-baseline",children:e.summary})}),e.children]})}},8177:(e,t,n)=>{n.d(t,{A:()=>a,b:()=>s});var r=n(8727),i=n(8878);function a(e,t){return(0,i.useReducer)(((t,n)=>(0,r.Ay)(t,(t=>{e[n.action](t,n.payload)}))),t)}function s(e){const[t,n]=(0,i.useState)(e);return(0,i.useEffect)((()=>{n(e)}),[e]),[t,n]}},3977:(e,t,n)=>{n.d(t,{JE:()=>o,$5:()=>c,lN:()=>s,Q5:()=>u,Ln:()=>m});var r=n(5874),i=n(4533),a=n(7844);const s={Base:i.A.grammar('\nBase {\n  Root = Value*\n\n  At = at\n  Bang = bang\n  Bar = bar\n  CloseAngle = closeAngle\n  CloseBrace = closeBrace\n  CloseParen = closeParen\n  CloseSquare = closeSquare\n  Comma = comma\n  Dollar = dollar\n  Dot = dot\n  DoubleQuote = doubleQuote\n  Equal = equal\n  OpenAngle = openAngle\n  OpenBrace = openBrace\n  OpenParen = openParen\n  OpenSquare = openSquare\n  Percent = percent\n  Semi = semi\n  Underscore = underscore\n\n  at = "@"\n  bang = "!"\n  bar = "|"\n  closeAngle = ">"\n  closeBrace = "}"\n  closeParen = ")"\n  closeSquare = "]"\n  comma = ","\n  dollar = "$"\n  dot = "."\n  doubleQuote = "\\""\n  equal = "="\n  minus = "-"\n  newline = "\\r"? "\\n"\n  openAngle = "<"\n  openBrace = "{"\n  openParen = "("\n  openSquare = "["\n  percent = "%"\n  semi = ";"\n  underscore = "_"\n\n  Value = identifier | number | boolean\n\n  boolean = true | false\n  True = true\n  False = false\n  true = "true"\n  false = "false"\n\n  Name = identifier\n  identifier = (letter|underscore|dot|dollar) (alnum|underscore|dot|dollar)*\n\n  Number = number\n  number = hexNumber | decNumber | binNumber\n  binNumber = ("%B") ("0"|"1")+\n  hexNumber = ("%X") hexDigit+\n  decNumber = ("%D")? (wholeDec | realDec)\n  wholeDec = minus? digit+\n  realDec = minus? digit* "." digit+\n\n  String = DoubleQuote (~doubleQuote any)* doubleQuote\n  \n  spaces := (lineComment | comment | space)*\n  commentStart = "/*"\n  commentEnd = "*/"\n  comment = commentStart (~commentEnd any)* commentEnd\n  lineCommentStart = "//"\n  lineComment = lineCommentStart (~"\\n" any)*\n\n  List<elem, sep> = NonemptyListOf<elem, sep> sep?\n  EmptyList<elem, sep> = EmptyList<elem, sep> sep?\n}')},o=s.Base.createSemantics();o.extendOperation("asIteration",{List:(e,t)=>e.asIteration()}),o.addAttribute("value",{decNumber:(e,t)=>(0,a.ZR)(t.sourceString),wholeDec:(e,t)=>(0,a.ZR)(t.sourceString),binNumber:(e,t)=>(0,a.Yp)(t.sourceString),hexNumber:(e,t)=>(0,a.l8)(t.sourceString),Number:e=>e.value,Name:e=>e.name,identifier(e,t){return this.sourceString}}),o.addAttribute("name",{identifier(e,t){return this.sourceString},Name(e){return this.child(0)?.name}}),o.addAttribute("String",{String:(e,t,n)=>t.sourceString});const l="HDL statement has a syntax error";function c(e,t){const n=e.match(/Line \d+, col \d+: (?<message>.*)/),r=n?.groups?.message?n.groups.message:e;return{message:`${void 0!=t?.line?`Line ${t.line}: `:""}${r}`,span:t}}function u(e,t,n=(({root:e})=>e)){return function(i){try{const a=e.match(i);if(a.succeeded()){const e=t(a),i=n(e);return(0,r.Ok)(i)}return(0,r._)(c(a.shortMessage??l,m(a.getInterval())))}catch(a){return(0,r._)(a)}}}function m(e){return{start:e.startIdx,end:e.endIdx,line:e.getLineAndColumn().lineNum}}},7844:(e,t,n)=>{n.d(t,{FN:()=>p,Yp:()=>c,ZR:()=>l,_Q:()=>u,ad:()=>h,e5:()=>d,l8:()=>o,uh:()=>m,xu:()=>g});const r=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];function i(e){return r[e]??"X"}function a(e){switch(e){case 0:return"0000";case 1:return"0001";case 2:return"0010";case 3:return"0011";case 4:return"0100";case 5:return"0101";case 6:return"0110";case 7:return"0111";case 8:return"1000";case 9:return"1001";case 10:return"1010";case 11:return"1011";case 12:return"1100";case 13:return"1101";case 14:return"1110";case 15:return"1111";default:return"erro"}}function s(e,t){return 65535&parseInt(e.replace(/[^\d a-f A-F +-.]/g,""),t)}function o(e){return s(e,16)}function l(e){return s(e,10)}function c(e){return s(e.replaceAll(" ",""),2)}function u(e){return e.toUpperCase().includes("X")?o(e):l(e)}function m(e){return`0x${i((61440&e)>>12)}${i((3840&e)>>8)}${i((240&e)>>4)}${i(15&e)}`}function d(e,t=16){return`${a((61440&e)>>12)}${a((3840&e)>>8)}${a((240&e)>>4)}${a(15&e)}`.substring(16-t)}function p(e){return 32768===(e&=65535)?"-32768":32768&e?`-${e=1+~e&32767}`:`${e}`}function h(e){return`${e&=65535}`}function g(e,t){let n=~((e&=65535)&(t&=65535));return n&=65535,n}}}]);