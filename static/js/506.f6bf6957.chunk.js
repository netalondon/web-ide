"use strict";(self.webpackChunk_nand2tetris_web=self.webpackChunk_nand2tetris_web||[]).push([[506],{9506:function(n,e,r){r.r(e),r.d(e,{Util:function(){return i}});var t=r(1026),a=r(6167),u=r(7693),c=r(326),o=r(7878),i=function(){var n=(0,a.useState)(0),e=(0,t.Z)(n,2),r=e[0],i=e[1],s=(0,a.useState)("@0"),l=(0,t.Z)(s,2),f=l[0],v=l[1],p=(0,a.useCallback)((function(){return(0,c.Ly)(r)}),[r]),b=(0,a.useCallback)((function(){return(0,c.E_)(r)}),[r]),d=(0,a.useCallback)((function(){return(0,c.nN)(r)}),[r]),A=(0,a.useCallback)((function(){return(0,c.$v)(r)}),[r]),g=(0,a.useCallback)((function(n){var e=n.target.value,r=(0,c.C$)(e);i(r),v((0,u.a)(r))}),[i,v]),D=(0,a.useCallback)((function(n){var e=n.target.value,r=(0,c.o5)(e);i(r),v((0,u.a)(r))}),[i,v]),h=(0,a.useCallback)((function(n){var e=n.target.value,r=(0,c.o5)(e);i(r),v((0,u.a)(r))}),[i,v]),k=(0,a.useCallback)((function(n){var e=n.target.value,r=(0,c.Af)(e);i(r),v((0,u.a)(r))}),[i,v]),x=(0,a.useCallback)((function(n){var e=n.target.value;v(e),i((0,u.op)(e))}),[i,v]);return(0,o.jsx)("form",{children:(0,o.jsxs)("div",{className:"grid",children:[(0,o.jsxs)("label",{children:["Binary ",(0,o.jsx)("input",{type:"text",value:p(),onChange:g})]}),(0,o.jsxs)("label",{children:["Decimal ",(0,o.jsx)("input",{type:"text",value:b(),onChange:D})]}),(0,o.jsxs)("label",{children:["Unsigned",(0,o.jsx)("input",{type:"text",value:d(),onChange:h})]}),(0,o.jsxs)("label",{children:["Hex ",(0,o.jsx)("input",{type:"text",value:A(),onChange:k})]}),(0,o.jsxs)("label",{children:["HACK ASM",(0,o.jsx)("input",{type:"text",value:f,onChange:x})]})]})})};e.default=i},9422:function(n,e,r){r.d(e,{Z:function(){return c}});var t=r(3940),a=r(6983),u=r(7591);function c(){c=function(n,e){return new r(n,void 0,e)};var n=RegExp.prototype,e=new WeakMap;function r(n,t,u){var c=new RegExp(n,t);return e.set(c,u||e.get(n)),(0,a.Z)(c,r.prototype)}function o(n,r){var t=e.get(r);return Object.keys(t).reduce((function(e,r){var a=t[r];if("number"==typeof a)e[r]=n[a];else{for(var u=0;void 0===n[a[u]]&&u+1<a.length;)u++;e[r]=n[a[u]]}return e}),Object.create(null))}return(0,u.Z)(r,RegExp),r.prototype.exec=function(e){var r=n.exec.call(this,e);if(r){r.groups=o(r,this);var t=r.indices;t&&(t.groups=o(t,this))}return r},r.prototype[Symbol.replace]=function(r,a){if("string"==typeof a){var u=e.get(this);return n[Symbol.replace].call(this,r,a.replace(/\$<([^>]+)>/g,(function(n,e){var r=u[e];return"$"+(Array.isArray(r)?r.join("$"):r)})))}if("function"==typeof a){var c=this;return n[Symbol.replace].call(this,r,(function(){var n=arguments;return"object"!=(0,t.Z)(n[n.length-1])&&(n=[].slice.call(n)).push(o(n,c)),a.apply(this,n)}))}return n[Symbol.replace].call(this,r,a)},c.apply(this,arguments)}},6693:function(n,e,r){r.d(e,{Bb:function(){return o},PH:function(){return t},Uc:function(){return a},lK:function(){return u},vU:function(){return c}});var t={asm:{0:42,1:63,"-1":58,D:12,A:48,M:48,"!D":13,"!A":49,"-D":15,"-A":51,"D+1":31,"A+1":55,"D-1":14,"A-1":50,"D+A":2,"D-A":19,"D-M":19,"A-D":7,"D&A":0,"D&M":0,"D|A":21,"D|M":21},op:{42:"0",63:"1",58:"-1",12:"D",48:"A",13:"!D",49:"!A",15:"-D",51:"-A",31:"D+1",55:"A+1",14:"D-1",50:"A-1",2:"D+A",19:"D-A",7:"A-D",0:"D&A",21:"D|A"}},a={asm:{"":0,M:1,D:2,MD:3,A:4,AM:5,AD:6,AMD:7},op:{0:"",1:"M",2:"D",3:"MD",4:"A",5:"AM",6:"AD",7:"AMD"}},u={asm:{"":0,JGT:1,JEQ:2,JGE:3,JLT:4,JNE:5,JLE:6,JMP:7},op:{0:"",1:"JGT",2:"JEQ",3:"JGE",4:"JLT",5:"JNE",6:"JLE",7:"JMP"}},c={1:"Positive",0:"Zero",15:"Negative",Positive:1,Zero:0,Negative:15};function o(n,e,r){var t=0;switch(n){case 42:t=0;break;case 63:t=1;break;case 58:t=-1;break;case 12:t=e;break;case 48:t=r;break;case 13:t=~e;break;case 49:t=~r;break;case 15:t=-e;break;case 51:t=-r;break;case 31:t=e+1;break;case 55:t=r+1;break;case 14:t=e-1;break;case 50:t=r-1;break;case 2:t=e+r;break;case 19:t=e-r;break;case 7:t=r-e;break;case 0:t=e&r;break;case 21:t=e|r}return[t&=65535,0===t?c.Zero:32768&t?c.Negative:c.Positive]}},7693:function(n,e,r){r.d(e,{a:function(){return u},op:function(){return c},p:function(){return o}});var t=r(9422),a=r(6693);function u(n){return 32768&n?function(n){n&=65535;var e=(4096&n)>>12,r=(4032&n)>>6,t=(56&n)>>3,u=7&n;if(void 0===a.PH.op[r])return"#ERR";var c=a.PH.op[r];e&&(c=c.replace(/A/g,"M"));var o=a.Uc.op[t],i=a.lK.op[u],s=c;o&&(s="".concat(o,"=").concat(s));i&&(s="".concat(s,";").concat(i));return s}(n):function(n){return"@"+(32767&n).toString(10)}(n)}function c(n){return"@"===n[0]?function(n){return parseInt(n.substring(1),10)}(n):function(n){var e,r=n.match((0,t.Z)(/(?:([AMD]{1,3})=)?([-!01ADM&|]{1,3})(?:;(JGT|JLT|JGE|JLE|JEQ|JMP))?/,{assign:1,operation:2,jump:3})),u=null!==(e=null===r||void 0===r?void 0:r.groups)&&void 0!==e?e:{},c=u.assign,i=u.operation,s=u.jump,l=i.includes("M")||c.includes("M"),f=a.Uc.asm[null!==c&&void 0!==c?c:""],v=a.lK.asm[null!==s&&void 0!==s?s:""],p=a.PH.asm[null!==i&&void 0!==i?i:""];return o(l,p,f,v)}(n)}function o(n,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,t=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,a=57344,u=n?4096:0,c=e<<6,o=(null!==r&&void 0!==r?r:0)<<3,i=null!==t&&void 0!==t?t:0;return a+u+c+o+i}},326:function(n,e,r){r.d(e,{$v:function(){return l},Af:function(){return o},C$:function(){return s},C2:function(){return b},E_:function(){return v},Ly:function(){return f},nN:function(){return p},o5:function(){return i}});var t=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];function a(n){var e;return null!==(e=t[n])&&void 0!==e?e:"X"}function u(n){switch(n){case 0:return"0000";case 1:return"0001";case 2:return"0010";case 3:return"0011";case 4:return"0100";case 5:return"0101";case 6:return"0110";case 7:return"0111";case 8:return"1000";case 9:return"1001";case 10:return"1010";case 11:return"1011";case 12:return"1100";case 13:return"1101";case 14:return"1110";case 15:return"1111";default:return"erro"}}function c(n,e){return 65535&parseInt(n.replace(/[^\d+-.xa-fA-F]/g,""),e)}function o(n){return c(n,16)}function i(n){return c(n,10)}function s(n){return c(n,2)}function l(n){var e=a((61440&n)>>12),r=a((3840&n)>>8),t=a((240&n)>>4),u=a(15&n);return"0x".concat(e).concat(r).concat(t).concat(u)}function f(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:16,r=u((61440&n)>>12),t=u((3840&n)>>8),a=u((240&n)>>4),c=u(15&n);return"".concat(r).concat(t).concat(a).concat(c).substring(16-e)}function v(n){return 32768===(n&=65535)?"-32768":32768&n?"-".concat(n=1+~n&32767):"".concat(n)}function p(n){return"".concat(n&=65535)}function b(n,e){var r=~((n&=65535)&(e&=65535));return r&=65535}}}]);
//# sourceMappingURL=506.f6bf6957.chunk.js.map