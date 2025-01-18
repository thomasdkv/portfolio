import{s as q,o as F,f as m,g as d,h,d as f,j as p,i as u,q as M,a as P,e as y,c as j,l as V,m as A,T as O,n as z,K as D,I as L}from"../chunks/scheduler.7a274a43.js";import{S as N,i as T,b as k,d as w,m as C,a as g,t as v,e as x}from"../chunks/index.28409b7f.js";import{t as I,_ as G,a as K,d as b}from"../chunks/pdf.42f2b5e5.js";import{C as S}from"../chunks/Chip.59bf2bda.js";import{C as R}from"../chunks/CommonPage.7d06ddfc.js";import{b as W}from"../chunks/paths.842868eb.js";function B(c){let e,s;return e=new S({props:{$$slots:{default:[J]},$$scope:{ctx:c}}}),{c(){k(e.$$.fragment)},l(t){w(e.$$.fragment,t)},m(t,n){C(e,t,n),s=!0},p(t,n){const o={};n&64&&(o.$$scope={dirty:n,ctx:t}),e.$set(o)},i(t){s||(g(e.$$.fragment,t),s=!0)},o(t){v(e.$$.fragment,t),s=!1},d(t){x(e,t)}}}function H(c){let e,s,t,n,o;s=new S({props:{size:"1.25em",$$slots:{default:[Q]},$$scope:{ctx:c}}});function l(r,i){return r[2]=="Phone"?X:U}let a=l(c)(c);return{c(){e=m("a"),k(s.$$.fragment),t=P(),a.c(),n=y(),this.h()},l(r){e=d(r,"A",{href:!0,download:!0});var i=h(e);w(s.$$.fragment,i),i.forEach(f),t=j(r),a.l(r),n=y(),this.h()},h(){p(e,"href",b),p(e,"download","")},m(r,i){u(r,e,i),C(s,e,null),u(r,t,i),a.m(r,i),u(r,n,i),o=!0},p(r,i){const $={};i&64&&($.$$scope={dirty:i,ctx:r}),s.$set($),a.p(r,i)},i(r){o||(g(s.$$.fragment,r),o=!0)},o(r){v(s.$$.fragment,r),o=!1},d(r){r&&(f(e),f(t),f(n)),x(s),a.d(r)}}}function J(c){let e;return{c(){e=V("Ooops! no CV at the moment.")},l(s){e=A(s,"Ooops! no CV at the moment.")},m(s,t){u(s,e,t)},d(s){s&&f(e)}}}function Q(c){let e;return{c(){e=V("Download")},l(s){e=A(s,"Download")},m(s,t){u(s,e,t)},d(s){s&&f(e)}}}function U(c){let e,s;return{c(){e=m("iframe"),this.h()},l(t){e=d(t,"IFRAME",{src:!0,class:!0,title:!0}),h(e).forEach(f),this.h()},h(){O(e.src,s=b)||p(e,"src",s),p(e,"class","iframe-full svelte-11dfsjn"),p(e,"title",I)},m(t,n){u(t,e,n)},p:z,d(t){t&&f(e)}}}function X(c){let e,s,t,n,o=c[1]&&E();return{c(){o&&o.c(),e=P(),s=m("div"),t=m("div"),n=m("canvas"),this.h()},l(l){o&&o.l(l),e=j(l),s=d(l,"DIV",{class:!0});var _=h(s);t=d(_,"DIV",{class:!0});var a=h(t);n=d(a,"CANVAS",{class:!0}),h(n).forEach(f),a.forEach(f),_.forEach(f),this.h()},h(){p(n,"class","svelte-11dfsjn"),p(t,"class","pdf-fullpage svelte-11dfsjn"),p(s,"class","pdf-preview svelte-11dfsjn")},m(l,_){o&&o.m(l,_),u(l,e,_),u(l,s,_),D(s,t),D(t,n),c[3](n)},p(l,_){l[1]?o||(o=E(),o.c(),o.m(e.parentNode,e)):o&&(o.d(1),o=null)},d(l){l&&(f(e),f(s)),o&&o.d(l),c[3](null)}}}function E(c){let e,s="Loading PDF...";return{c(){e=m("p"),e.textContent=s},l(t){e=d(t,"P",{["data-svelte-h"]:!0}),L(e)!=="svelte-svdz0k"&&(e.textContent=s)},m(t,n){u(t,e,n)},d(t){t&&f(e)}}}function Y(c){let e,s,t,n;const o=[H,B],l=[];function _(a,r){return b?0:1}return s=_(),t=l[s]=o[s](c),{c(){e=m("div"),t.c(),this.h()},l(a){e=d(a,"DIV",{class:!0});var r=h(e);t.l(r),r.forEach(f),this.h()},h(){p(e,"class","resume svelte-11dfsjn")},m(a,r){u(a,e,r),l[s].m(e,null),n=!0},p(a,r){t.p(a,r)},i(a){n||(g(t),n=!0)},o(a){v(t),n=!1},d(a){a&&f(e),l[s].d()}}}function Z(c){let e,s;return e=new R({props:{title:I,$$slots:{default:[Y]},$$scope:{ctx:c}}}),{c(){k(e.$$.fragment)},l(t){w(e.$$.fragment,t)},m(t,n){C(e,t,n),s=!0},p(t,[n]){const o={};n&67&&(o.$$scope={dirty:n,ctx:t}),e.$set(o)},i(t){s||(g(e.$$.fragment,t),s=!0)},o(t){v(e.$$.fragment,t),s=!1},d(t){x(e,t)}}}function ee(){const c=navigator.userAgent.toLowerCase();return/iphone|ipod|android|windows phone|blackberry|mobile/i.test(c)}function te(c,e,s){let t=`${W}/documents/pdf.worker.mjs`,n,o=!0;F(async()=>{G.workerSrc=t;const r=await(await K(b).promise).getPage(1),i=r.getViewport({scale:1.5}),$=n.getContext("2d");if(!$)throw new Error("Failed to get the 2D context from the canvas");s(0,n.width=i.width,n),s(0,n.height=i.height,n),await r.render({canvasContext:$,viewport:i}).promise,s(1,o=!1)});const l=ee()?"Phone":"PC";function _(a){M[a?"unshift":"push"](()=>{n=a,s(0,n)})}return[n,o,l,_]}class le extends N{constructor(e){super(),T(this,e,te,Z,q,{})}}export{le as component};
