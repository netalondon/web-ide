"use strict";(self.webpackChunk_nand2tetris_web=self.webpackChunk_nand2tetris_web||[]).push([[255],{9811:function(e,t,n){n.r(t),n.d(t,{CPU:function(){return _},default:function(){return I}});var s=n(2951),r=n(1976),a=n(7591),i=n(4337),c=n(1026),u=n(8923),l=n(3052),o=n(9613),d=n(2277),p=n(1092),h=n(7791),x=n(7169),b=n(3243),f=n(7597),m=n(4649),v=n(5838),j=new Int16Array([2,55944,0,64528,15,54018,1,64528,2,61584,54024,0,64648,2,55943,15,55943]),g=n(3389),k=n(6167),C=n(7559),Z=n(8698),y=function(e){(0,a.Z)(n,e);var t=(0,i.Z)(n);function n(e,r){var a;return(0,s.Z)(this,n),a=t.call(this,e,e.size,0),(0,m.Z)((0,x.Z)(a),"dispatch",void 0),a.dispatch=r,a}return(0,r.Z)(n,[{key:"load",value:function(){var e=(0,h.Z)((0,p.Z)().mark((function e(t,s){return(0,p.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,b.Z)((0,f.Z)(n.prototype),"load",this).call(this,t,s);case 2:this.dispatch.current({action:"update"});case 3:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()}]),n}(v.kG);function R(e,t){var n=new y(e.cpu.RAM,t),s=new y(e.cpu.ROM,t),r=new y(e.cpu.Screen,t),a=new v.qT(new y(e.cpu.RAM,t));return{A:e.cpu.A,D:e.cpu.D,PC:e.cpu.PC,RAM:n,ROM:s,Screen:r,Keyboard:a}}function w(){var e=(0,k.useContext)(Z.r),t=e.fs,n=e.setStatus,s=e.storage,r=(0,k.useRef)((function(){})),a=(0,k.useMemo)((function(){return function(e,t,n,s){var r,a=new g.o6(new v.eD(j)),i=!1,c={update:function(e){var t;e.sim=R(a,s),e.test.useTest=i,e.test.highlight=null===(t=a.currentStep)||void 0===t?void 0:t.span}},u={tick:function(){i?a.step():a.cpu.tick()},resetRAM:function(){a.cpu.RAM.loadBytes([]),s.current({action:"update"}),t("Reset RAM")},toggleUseTest:function(){i=!i,s.current({action:"update"})},resetCPU:function(){a.reset(),s.current({action:"update"}),t("Reset CPU")},reset:function(){this.resetRAM(),this.resetCPU(),t("Reset CPU & RAM")}};return{initialState:{sim:R(a,s),test:{useTest:i,highlight:null===(r=a.currentStep)||void 0===r?void 0:r.span}},reducers:c,actions:u}}(0,n,0,r)}),[t,n,s,r]),i=a.initialState,u=a.reducers,l=a.actions,o=(0,C.C)(u,i),d=(0,c.Z)(o,2),p=d[0],h=d[1];return r.current=h,{state:p,dispatch:r,actions:l}}var M=n(8061),A=n(8582),S=n(258),P=n(8365),T=n(9647),U=n(8016),D=n(1539),F=n(1124),N=n(7878),O=function(e){var t=e.runner,n=(0,c.Z)(e.tst,3),s=n[0],r=n[1],a=n[2],i=(0,c.Z)(e.cmp,2),u=i[0],l=i[1],o=(0,c.Z)(e.out,1)[0],d=e.disabled,x=void 0!==d&&d,b=(0,k.useContext)(Z.r),f=b.fs,m=b.setStatus,v=(0,k.useContext)(U.Il),j=v.filePicker,g=v.tracking,C=(0,k.useState)("tst"),y=(0,c.Z)(C,2),R=y[0],w=y[1],O=(0,k.useCallback)((function(e){w(e),g.trackEvent("tab","change",e)}),[g]),_=(0,k.useCallback)((0,h.Z)((0,p.Z)().mark((function e(){var t,n;return(0,p.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,j.select();case 3:return t=e.sent,e.next=6,f.readFile(t);case 6:n=e.sent,r(n),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(0),console.error(e.t0),m("Failed to load test");case 14:case"end":return e.stop()}}),e,null,[[0,10]])}))),[j,m,f]);return(0,N.jsx)(F.s,{className:"_test_panel",header:(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)("div",{className:"flex-0",children:(0,N.jsx)(M.cC,{id:"Test"})}),(0,N.jsx)("div",{className:"flex-1",children:t.current&&(0,N.jsx)(S.D,{runner:t.current})}),(0,N.jsx)("div",{children:(0,N.jsx)("fieldset",{role:"group",children:(0,N.jsx)("button",{onClick:_,children:"\ud83d\udcc2"})})})]}),children:(0,N.jsxs)("div",{role:"tablist",style:{"--tab-count":"3"},children:[(0,N.jsx)("div",{role:"tab",id:"test-tab-tst","aria-controls":"test-tabpanel-tst","aria-selected":"tst"===R,children:(0,N.jsxs)("label",{children:[(0,N.jsx)("input",{type:"radio",name:"test-tabs","aria-controls":"test-tabpanel-tst",value:"tst",checked:"tst"===R,onChange:function(){return O("tst")}}),"Test Script"]})}),(0,N.jsx)("div",{role:"tabpanel","aria-labelledby":"test-tab-tst",id:"test-tabpanel-tst",children:(0,N.jsx)(D.M,{value:s,onChange:r,grammar:T.qH.parser,language:"tst",highlight:a,disabled:x})}),(0,N.jsx)("div",{role:"tab",id:"test-tab-cmp","aria-controls":"test-tablpanel-cmp","aria-selected":"cmp"===R,children:(0,N.jsxs)("label",{children:[(0,N.jsx)("input",{type:"radio",name:"test-tabs","aria-controls":"test-tabpanel-cmp",value:"cmp",checked:"cmp"===R,onChange:function(){return O("cmp")}}),"Compare File"]})}),(0,N.jsx)("div",{role:"tabpanel","aria-labelledby":"test-tab-cmp",id:"test-tabpanel-cmp",style:{position:"relative"},children:(0,N.jsx)(D.M,{value:u,onChange:l,grammar:P.lA.parser,language:"cmp",disabled:x})}),(0,N.jsx)("div",{role:"tab",id:"test-tab-out","aria-controls":"test-tabpanel-out","aria-selected":"out"===R,children:(0,N.jsxs)("label",{children:[(0,N.jsx)("input",{type:"radio",name:"test-tabs","aria-controls":"test-tabpanel-out",value:"out",checked:"out"===R,onChange:function(){return O("out")}}),"Output File"]})}),(0,N.jsx)("div",{role:"tabpanel",id:"test-tabpanel-out","aria-labelledby":"test-tab-out",children:(0,N.jsx)(A.M,{cmp:u,out:o})})]})})},_=function(){var e=w(),t=e.state,n=e.actions,p=e.dispatch,h=(0,k.useState)("repeat {\n\tticktock;\n}"),x=(0,c.Z)(h,2),b=x[0],f=x[1],m=(0,k.useState)(""),v=(0,c.Z)(m,2),j=v[0],g=v[1],C=(0,k.useState)(""),Z=(0,c.Z)(C,2),y=Z[0],R=Z[1],M=(0,k.useRef)();return(0,k.useEffect)((function(){return M.current=new(function(e){(0,a.Z)(c,e);var t=(0,i.Z)(c);function c(){return(0,s.Z)(this,c),t.apply(this,arguments)}return(0,r.Z)(c,[{key:"tick",value:function(){return n.tick(),!1}},{key:"finishFrame",value:function(){p.current({action:"update"})}},{key:"reset",value:function(){n.reset()}},{key:"toggle",value:function(){p.current({action:"update"})}}]),c}(u.B)),function(){var e;null===(e=M.current)||void 0===e||e.stop()}}),[n,p]),(0,N.jsxs)("div",{className:"CpuPage grid",children:[(0,N.jsx)(l.ZP,{name:"ROM",memory:t.sim.ROM,highlight:t.sim.PC,format:"asm",editable:!1}),(0,N.jsx)(l.ZP,{name:"RAM",memory:t.sim.RAM,format:"hex"}),(0,N.jsxs)(F.s,{className:"IO",children:[(0,N.jsx)("div",{children:(0,N.jsxs)("label",{children:[(0,N.jsx)("input",{type:"checkbox",onChange:n.toggleUseTest,checked:t.test.useTest,role:"switch"}),"Use Test Script"]})}),(0,N.jsx)(o.l,{memory:t.sim.Screen}),(0,N.jsx)(d.N,{keyboard:t.sim.Keyboard}),(0,N.jsx)("div",{children:(0,N.jsxs)("dl",{children:[(0,N.jsx)("dt",{children:"PC"}),(0,N.jsx)("dd",{children:t.sim.PC}),(0,N.jsx)("dt",{children:"A"}),(0,N.jsx)("dd",{children:t.sim.A}),(0,N.jsx)("dt",{children:"D"}),(0,N.jsx)("dd",{children:t.sim.D})]})})]}),(0,N.jsx)(O,{disabled:!t.test.useTest,runner:M,tst:[b,f,t.test.highlight],out:[j,g],cmp:[y,R]})]})},I=_}}]);
//# sourceMappingURL=255.e46a7b16.chunk.js.map