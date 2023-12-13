"use strict";(self.webpackChunk_nand2tetris_web=self.webpackChunk_nand2tetris_web||[]).push([[846],{1846:(e,t,n)=>{n.r(t),n.d(t,{Util:()=>c,default:()=>u});var r=n(6845),s=n(6871),a=n(5150),i=n(864);const c=()=>{const[e,t]=(0,r.useState)(0),[n,c]=(0,r.useState)("@0"),u=e=>n=>{let{target:{value:r}}=n;r="-"===r?"-1":r;const a=e(r);t(a),c((0,s.a)(a))},l=u(a.C$),o=u(a.o5),d=u(a.o5),x=u(a.Af);return(0,i.jsxs)("article",{children:[(0,i.jsx)("header",{children:(0,i.jsx)("h2",{children:"Convert Hack Number Types"})}),(0,i.jsx)("main",{children:(0,i.jsxs)("dl",{children:[(0,i.jsx)("dt",{children:(0,i.jsx)("label",{htmlFor:"util_setBin",children:"Binary"})}),(0,i.jsx)("dd",{children:(0,i.jsx)("input",{id:"util_setBin",type:"text",value:(0,a.Ly)(e),onChange:l})}),(0,i.jsx)("dt",{children:(0,i.jsx)("label",{htmlFor:"util_setInt",children:"Decimal"})}),(0,i.jsx)("dd",{children:(0,i.jsx)("input",{id:"util_setInt",type:"text",value:(0,a.E_)(e),onChange:o})}),(0,i.jsx)("dt",{children:(0,i.jsx)("label",{htmlFor:"util_setUns",children:"Unsigned"})}),(0,i.jsx)("dd",{children:(0,i.jsx)("input",{id:"util_setUns",type:"text",value:(0,a.nN)(e),onChange:d})}),(0,i.jsx)("dt",{children:(0,i.jsx)("label",{htmlFor:"util_setHex",children:"Hex"})}),(0,i.jsx)("dd",{children:(0,i.jsx)("input",{id:"util_setHex",type:"text",value:(0,a.$v)(e),onChange:x})}),(0,i.jsx)("dt",{children:(0,i.jsx)("label",{htmlFor:"util_setAsm",children:"HACK ASM"})}),(0,i.jsx)("dd",{children:(0,i.jsx)("input",{id:"util_setAsm",type:"text",value:n,onChange:e=>{let{target:{value:n}}=e;c(n),t((0,s.op)(n))}})})]})})]})},u=c},137:(e,t,n)=>{n.d(t,{Bb:()=>u,NM:()=>r,PH:()=>s,Uc:()=>a,lK:()=>i,vU:()=>c});const r={op:{42:"0",63:"1",58:"-1",12:"x",48:"y",13:"!x",49:"!y",15:"-x",51:"-y",31:"x+1",55:"y+1",14:"x-1",50:"y-1",2:"x+y",19:"x-y",7:"y-x",0:"x&y",21:"x|y"}},s={asm:{0:42,1:63,"-1":58,D:12,A:48,M:48,"!D":13,"!A":49,"-D":15,"-A":51,"D+1":31,"A+1":55,"D-1":14,"A-1":50,"D+A":2,"D-A":19,"D-M":19,"A-D":7,"D&A":0,"D&M":0,"D|A":21,"D|M":21},op:{42:"0",63:"1",58:"-1",12:"D",48:"A",13:"!D",49:"!A",15:"-D",51:"-A",31:"D+1",55:"A+1",14:"D-1",50:"A-1",2:"D+A",19:"D-A",7:"A-D",0:"D&A",21:"D|A"}},a={asm:{"":0,M:1,D:2,MD:3,A:4,AM:5,AD:6,AMD:7},op:{0:"",1:"M",2:"D",3:"MD",4:"A",5:"AM",6:"AD",7:"AMD"}},i={asm:{"":0,JGT:1,JEQ:2,JGE:3,JLT:4,JNE:5,JLE:6,JMP:7},op:{0:"",1:"JGT",2:"JEQ",3:"JGE",4:"JLT",5:"JNE",6:"JLE",7:"JMP"}},c={1:"Positive",0:"Zero",15:"Negative",Positive:1,Zero:0,Negative:15};function u(e,t,n){let r=0;switch(e){case 42:r=0;break;case 63:r=1;break;case 58:r=-1;break;case 12:r=t;break;case 48:r=n;break;case 13:r=~t;break;case 49:r=~n;break;case 15:r=-t;break;case 51:r=-n;break;case 31:r=t+1;break;case 55:r=n+1;break;case 14:r=t-1;break;case 50:r=n-1;break;case 2:r=t+n;break;case 19:r=t-n;break;case 7:r=n-t;break;case 0:r=t&n;break;case 21:r=t|n}r&=65535;return[r,0===r?c.Zero:32768&r?c.Negative:c.Positive]}},6871:(e,t,n)=>{n.d(t,{a:()=>s,op:()=>a,p:()=>i});var r=n(137);function s(e){return 32768&e?function(e){e&=65535;const t=(4096&e)>>12,n=(4032&e)>>6,s=(56&e)>>3,a=7&e;if(void 0===r.PH.op[n])return"#ERR";let i=r.PH.op[n];t&&(i=i.replace(/A/g,"M"));const c=r.Uc.op[s],u=r.lK.op[a];let l=i;c&&(l=`${c}=${l}`);u&&(l=`${l};${u}`);return l}(e):function(e){return"@"+(32767&e).toString(10)}(e)}function a(e){return"@"===e[0]?function(e){return parseInt(e.substring(1),10)}(e):function(e){const t=e.match(/(?:(?<assignExists>.+)=)?(.+)(?:;(?<jumpExists>.+))?/),{assignExists:n,jumpExists:s}=t?.groups??{},a=e.match(/(?:(?<assign>[AMD]{1,3})=)?(?<operation>[-+!01ADM&|]{1,3})(?:;(?<jump>JGT|JLT|JGE|JLE|JEQ|JMP))?/),{assign:c,operation:u,jump:l}=a?.groups??{},o=u.includes("M")||(c?.includes("M")??!1),d=r.Uc.asm[c??(n?void 0:"")],x=r.lK.asm[l??(s?void 0:"")],h=r.PH.asm[u];return i(o,h,d,x)}(e)}function i(e,t,n,r){if(void 0===t||void 0===n||void 0===r)throw new Error("Invalid c instruction");return 57344+(e?4096:0)+(t<<6)+(n<<3)+r}},5150:(e,t,n)=>{n.d(t,{$v:()=>d,Af:()=>c,C$:()=>l,C2:()=>A,E_:()=>h,Ly:()=>x,nN:()=>p,o5:()=>u,t1:()=>o});const r=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];function s(e){return r[e]??"X"}function a(e){switch(e){case 0:return"0000";case 1:return"0001";case 2:return"0010";case 3:return"0011";case 4:return"0100";case 5:return"0101";case 6:return"0110";case 7:return"0111";case 8:return"1000";case 9:return"1001";case 10:return"1010";case 11:return"1011";case 12:return"1100";case 13:return"1101";case 14:return"1110";case 15:return"1111";default:return"erro"}}function i(e,t){return 65535&parseInt(e.replace(/[^\d a-f A-F +-.]/g,""),t)}function c(e){return i(e,16)}function u(e){return i(e,10)}function l(e){return i(e.replaceAll(" ",""),2)}function o(e){return e.toUpperCase().includes("X")?c(e):u(e)}function d(e){return`0x${s((61440&e)>>12)}${s((3840&e)>>8)}${s((240&e)>>4)}${s(15&e)}`}function x(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:16;const n=a((61440&e)>>12),r=a((3840&e)>>8),s=a((240&e)>>4),i=a(15&e);return`${n}${r}${s}${i}`.substring(16-t)}function h(e){return 32768===(e&=65535)?"-32768":32768&e?`-${e=1+~e&32767}`:`${e}`}function p(e){return`${e&=65535}`}function A(e,t){let n=~((e&=65535)&(t&=65535));return n&=65535,n}}}]);