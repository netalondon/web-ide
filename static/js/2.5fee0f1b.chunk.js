"use strict";(self.webpackChunk_nand2tetris_web=self.webpackChunk_nand2tetris_web||[]).push([[2],{5002:(e,s,a)=>{a.r(s),a.d(s,{default:()=>f});var t=a(8061),n=a(8698),r=a(8582),i=a(214),l=a(4625),d=a(8090),c=a(9647),o=a(691),m=a(3389);const u=(e,s)=>{const a=(e=>async s=>{if((0,l.dZ)(s.maybeChip))return{...s,pass:!1,out:(0,l.UG)(s.maybeChip).message};if((0,l.dZ)(s.maybeTest))return{...s,pass:!1,out:(0,l.UG)(s.maybeTest).message};const a=(0,l.Ok)(s.maybeTest).with((0,l.Ok)(s.maybeChip)).setFileSystem(e);await a.run();const t=a.log(),n=t.trim()===s.cmp.trim();return{...s,out:t,pass:n}})(e),t=(e=>async s=>{const a=(0,l.IY)(s.maybeParsedHDL)?await(0,o.J_)((0,l.Ok)(s.maybeParsedHDL),e):(0,l.UG)(new Error("HDL Was not parsed")),t=(0,l.IY)(s.maybeParsedTST)?(0,l.Ok)(m.l1.from((0,l.Ok)(s.maybeParsedTST))):(0,l.UG)(new Error("TST Was not parsed"));return{...s,maybeChip:a,maybeTest:t}})(e);return async e=>{const[n,r]=await Promise.all([(async()=>a(await t(await(e=>{const s=d.Gq.parse(e.hdl),a=c.qH.parse(e.tst);return{...e,maybeParsedHDL:s,maybeParsedTST:a}})(e))))(),(async()=>s?.hdl(e))()]);return{...n,shadow:r}}};var h=a(6167),p=a(7878);function y(e){let{name:s,ext:a}=e;return void 0!==i.Assignments[s]&&".hdl"===a}const x=e=>(0,p.jsxs)("details",{children:[(0,p.jsxs)("summary",{children:[e.name," ",e.pass?(0,p.jsx)(t.cC,{id:"Passed"}):(0,p.jsx)(t.cC,{id:"Failed"})]}),(0,p.jsxs)("div",{className:"flex row",children:[(0,p.jsx)("pre",{children:(0,p.jsx)("code",{children:e.hdl})}),(0,p.jsx)("pre",{children:(0,p.jsx)("code",{children:e.tst})})]}),(0,p.jsx)(r.M,{cmp:e.cmp,out:e.out})]});async function b(e){var s,a;const t=i.Assignments[e.name],n=null!==(s=await(null===(a=e.file)||void 0===a?void 0:a.text()))&&void 0!==s?s:"",r=t[`${e.name}.tst`],l=t[`${e.name}.cmp`];return{...e,hdl:n,tst:r,cmp:l}}const f=()=>{const[e,s]=(0,h.useState)([]),{fs:a}=(0,n.Q)(),t=(0,h.useCallback)((async e=>{var t;let{target:n}=e;const r=await Promise.all([...null!==(t=n.files)&&void 0!==t?t:[]].filter((e=>e.name.endsWith(".hdl"))).map((e=>{var s,a,t,n;const{name:r,base:i,ext:l}=null!==(s=null===(a=e.name.match(/^(?<base>(?<name>.*)(?<ext>\.[^.]*))?$/))||void 0===a?void 0:a.groups)&&void 0!==s?s:{};return{name:r,base:i,ext:l,dir:null!==(t="/"+(null===(n=e.webkitRelativePath)||void 0===n?void 0:n.replace(i,"")))&&void 0!==t?t:"",root:"/",file:e}})).filter(y).map((async e=>{const s=await e.file.text();return{...e,hdl:s}}))),i=await async function(e,s,a,t){const n=u(a,t);return Promise.all(e.map(s).map((async e=>n(await e))))}(r,b,a);a.pushd("/samples"),s(i),a.popd()}),[s,a]);return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)("h1",{children:"NAND2Tetris Web IDE"}),(0,p.jsx)("form",{children:(0,p.jsxs)("fieldset",{children:[(0,p.jsx)("legend",{children:"Files for grading:"}),(0,p.jsx)("input",{type:"file",multiple:!0,directory:"",webkitdirectory:"",onChange:t})]})}),(0,p.jsx)("figure",{children:e.length>0?e.map(((e,s)=>(0,p.jsx)(x,{...e},e.name))):(0,p.jsx)(p.Fragment,{})})]})}}}]);
//# sourceMappingURL=2.5fee0f1b.chunk.js.map