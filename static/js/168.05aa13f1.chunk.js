"use strict";(self.webpackChunkcomputron5k=self.webpackChunkcomputron5k||[]).push([[168],{9168:function(n,e,r){r.r(e),r.d(e,{Util:function(){return i}});var t=r(9439),u=r(2791),c=r(1291),a=r(6509),o=r(184),i=function(){var n=(0,u.useState)(0),e=(0,t.Z)(n,2),r=e[0],i=e[1],s=(0,u.useCallback)((function(){return(0,a.Ly)(r)}),[r]),l=(0,u.useCallback)((function(){return(0,a.E_)(r)}),[r]),f=(0,u.useCallback)((function(){return(0,a.nN)(r)}),[r]),p=(0,u.useCallback)((function(){return(0,a.$v)(r)}),[r]),v=(0,u.useCallback)((function(){return(0,c.a)(r)}),[r]),b=function(n){return function(e){var r=e.target.value;i(n(r))}};return(0,o.jsx)("form",{children:(0,o.jsxs)("div",{className:"grid",children:[(0,o.jsxs)("label",{children:["Binary ",(0,o.jsx)("input",{type:"text",value:s(),onChange:b(a.C$)})]}),(0,o.jsxs)("label",{children:["Decimal ",(0,o.jsx)("input",{type:"text",value:l(),onChange:b(a.o5)})]}),(0,o.jsxs)("label",{children:["Unsigned"," ",(0,o.jsx)("input",{type:"text",value:f(),onChange:b(a.o5)})]}),(0,o.jsxs)("label",{children:["Hex ",(0,o.jsx)("input",{type:"text",value:p(),onChange:b(a.Af)})]}),(0,o.jsxs)("label",{children:["HACK ASM ",(0,o.jsx)("input",{type:"text",value:v(),onChange:b(c.op)})]})]})})};e.default=i},5782:function(n,e,r){r.d(e,{Bb:function(){return o},PH:function(){return t},Uc:function(){return u},lK:function(){return c},vU:function(){return a}});var t={asm:{0:42,1:63,"-1":58,D:12,A:48,M:48,"!D":13,"!A":49,"-D":15,"-A":51,"D+1":31,"A+1":55,"D-1":14,"A-1":50,"D+A":2,"D-A":19,"D-M":19,"A-D":7,"D&A":0,"D&M":0,"D|A":21,"D|M":21},op:{42:"0",63:"1",58:"-1",12:"D",48:"A",13:"!D",49:"!A",15:"-D",51:"-A",31:"D+1",55:"A+1",14:"D-1",50:"A-1",2:"D+A",19:"D-A",7:"A-D",0:"D&A",21:"D|A"}},u={asm:{"":0,M:1,D:2,MD:3,A:4,AM:5,AD:6,AMD:7},op:{0:"",1:"M",2:"D",3:"MD",4:"A",5:"AM",6:"AD",7:"AMD"}},c={asm:{"":0,JGT:1,JEQ:2,JGE:3,JLT:4,JNE:5,JLE:6,JMP:7},op:{0:"",1:"JGT",2:"JEQ",3:"JGE",4:"JLT",5:"JNE",6:"JLE",7:"JMP"}},a={1:"Positive",0:"Zero",15:"Negative",Positive:1,Zero:0,Negative:15};function o(n,e,r){var t=0;switch(n){case 42:t=0;break;case 63:t=1;break;case 58:t=-1;break;case 12:t=e;break;case 48:t=r;break;case 13:t=~e;break;case 49:t=~r;break;case 15:t=-e;break;case 51:t=-r;break;case 31:t=e+1;break;case 55:t=r+1;break;case 14:t=e-1;break;case 50:t=r-1;break;case 2:t=e+r;break;case 19:t=e-r;break;case 7:t=r-e;break;case 0:t=e&r;break;case 21:t=e|r}return[t&=65535,0===t?a.Zero:32768&t?a.Negative:a.Positive]}},1291:function(n,e,r){r.d(e,{a:function(){return c},op:function(){return a},p:function(){return o}});var t=r(804),u=r(5782);function c(n){return 32768&n?function(n){var e=(4096&(n&=65535))>>12,r=(4032&n)>>6,t=(56&n)>>3,c=7&n;if(void 0===u.PH.op[r])return"#ERR";var a=u.PH.op[r];e&&(a=a.replace(/A/g,"M"));var o=u.Uc.op[t],i=u.lK.op[c],s=a;o&&(s="".concat(o,"=").concat(s));i&&(s="".concat(s,";").concat(i));return s}(n):function(n){return"@"+(32767&n).toString(10)}(n)}function a(n){return"@"===n[0]?function(n){return parseInt(n.substring(1),10)}(n):function(n){var e,r,c,a,i=n.match((0,t.Z)(/(?:([AMD]{1,3})=)?([-!01ADM&|]{1,3})(?:;(JGT|JLT|JGE|JLE|JEQ|JMP))?/,{assign:1,operation:2,jump:3})),s=null!==(e=null===i||void 0===i?void 0:i.groups)&&void 0!==e?e:{},l=s.assign,f=s.operation,p=s.jump,v=f.includes("M")||l.includes("M"),b=u.Uc.asm[null!==(r=l)&&void 0!==r?r:""],A=u.lK.asm[null!==(c=p)&&void 0!==c?c:""],d=u.PH.asm[null!==(a=f)&&void 0!==a?a:""];return o(v,d,b,A)}(n)}function o(n,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,t=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,u=57344,c=n?4096:0,a=e<<6,o=(null!==r&&void 0!==r?r:0)<<3,i=null!==t&&void 0!==t?t:0;return u+c+a+o+i}},6509:function(n,e,r){r.d(e,{$v:function(){return l},Af:function(){return o},C$:function(){return s},C2:function(){return b},E_:function(){return p},Ly:function(){return f},nN:function(){return v},o5:function(){return i}});var t=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];function u(n){var e;return null!==(e=t[n])&&void 0!==e?e:"X"}function c(n){switch(n){case 0:return"0000";case 1:return"0001";case 2:return"0010";case 3:return"0011";case 4:return"0100";case 5:return"0101";case 6:return"0110";case 7:return"0111";case 8:return"1000";case 9:return"1001";case 10:return"1010";case 11:return"1011";case 12:return"1100";case 13:return"1101";case 14:return"1110";case 15:return"1111";default:return"erro"}}function a(n,e){return 65535&parseInt(n.replace(/[^\d+-.xa-fA-F]/g,""),e)}function o(n){return a(n,16)}function i(n){return a(n,10)}function s(n){return a(n,2)}function l(n){var e=u((61440&n)>>12),r=u((3840&n)>>8),t=u((240&n)>>4),c=u(15&n);return"0x".concat(e).concat(r).concat(t).concat(c)}function f(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:16,r=c((61440&n)>>12),t=c((3840&n)>>8),u=c((240&n)>>4),a=c(15&n);return"".concat(r).concat(t).concat(u).concat(a).substring(16-e)}function p(n){return 32768===(n&=65535)?"-32768":32768&n?"-".concat(n=1+~n&32767):"".concat(n)}function v(n){return"".concat(n&=65535)}function b(n,e){var r=~((n&=65535)&(e&=65535));return r&=65535}},804:function(n,e,r){r.d(e,{Z:function(){return a}});var t=r(1002),u=r(9611),c=r(136);function a(){a=function(n,e){return new r(n,void 0,e)};var n=RegExp.prototype,e=new WeakMap;function r(n,t,c){var a=new RegExp(n,t);return e.set(a,c||e.get(n)),(0,u.Z)(a,r.prototype)}function o(n,r){var t=e.get(r);return Object.keys(t).reduce((function(e,r){return e[r]=n[t[r]],e}),Object.create(null))}return(0,c.Z)(r,RegExp),r.prototype.exec=function(e){var r=n.exec.call(this,e);return r&&(r.groups=o(r,this)),r},r.prototype[Symbol.replace]=function(r,u){if("string"==typeof u){var c=e.get(this);return n[Symbol.replace].call(this,r,u.replace(/\$<([^>]+)>/g,(function(n,e){return"$"+c[e]})))}if("function"==typeof u){var a=this;return n[Symbol.replace].call(this,r,(function(){var n=arguments;return"object"!=(0,t.Z)(n[n.length-1])&&(n=[].slice.call(n)).push(o(n,a)),u.apply(this,n)}))}return n[Symbol.replace].call(this,r,u)},a.apply(this,arguments)}}}]);
//# sourceMappingURL=168.05aa13f1.chunk.js.map