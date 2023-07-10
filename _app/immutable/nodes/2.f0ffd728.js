import{s as re,f as w,a as A,g as T,h as D,d as y,c as L,j as v,i as U,I as g,J as M,K as ae,u as ce,o as ue,l as C,m as H,T as X,p as he,U as P,q as fe,V as me,n as _e}from"../chunks/scheduler.e949bcc4.js";import{S as ne,i as oe,b as B,d as F,m as K,a as z,t as R,e as N,c as de,g as ge}from"../chunks/index.42c33976.js";import{e as Z}from"../chunks/each.9bfefcd6.js";import{I as Y,g as Q,M as ve,b as pe,T as W,H as ke}from"../chunks/params.6d8c7a1f.js";import{I as G}from"../chunks/Icon.d9163c64.js";import{u as x}from"../chunks/helpers.6c89fbfa.js";import{i as ye}from"../chunks/index.97b3c5e0.js";function ee(l,e,s){const a=l.slice();return a[16]=e[s],a}function te(l){let e,s,a,i,r,n,u=l[16].name+"",m,p;return{c(){e=w("div"),s=w("img"),r=A(),n=w("span"),m=C(u),p=A(),this.h()},l(k){e=T(k,"DIV",{class:!0});var _=D(e);s=T(_,"IMG",{class:!0,src:!0,alt:!0}),r=L(_),n=T(_,"SPAN",{class:!0});var I=D(n);m=H(I,u),I.forEach(y),p=L(_),_.forEach(y),this.h()},h(){v(s,"class","carrousel-item-img svelte-1d4ils5"),X(s.src,a=Q(l[16].logo))||v(s,"src",a),v(s,"alt",i=l[16].name),v(n,"class","carrousel-item-label svelte-1d4ils5"),v(e,"class","carrousel-item svelte-1d4ils5")},m(k,_){U(k,e,_),g(e,s),g(e,r),g(e,n),g(n,m),g(e,p)},p(k,_){_&1&&!X(s.src,a=Q(k[16].logo))&&v(s,"src",a),_&1&&i!==(i=k[16].name)&&v(s,"alt",i),_&1&&u!==(u=k[16].name+"")&&he(m,u)},d(k){k&&y(e)}}}function be(l){let e,s,a,i,r,n,u,m,p,k,_;a=new G({props:{icon:Y.LeftArrow,size:"20px",color:"var(--border-hover)"}});let I=Z(l[0]),d=[];for(let o=0;o<I.length;o+=1)d[o]=te(ee(l,I,o));return m=new G({props:{icon:Y.RightArrow,color:"var(--border-hover)",size:"20px"}}),{c(){e=w("div"),s=w("div"),B(a.$$.fragment),i=A(),r=w("div");for(let o=0;o<d.length;o+=1)d[o].c();n=A(),u=w("div"),B(m.$$.fragment),this.h()},l(o){e=T(o,"DIV",{class:!0});var b=D(e);s=T(b,"DIV",{class:!0});var c=D(s);F(a.$$.fragment,c),c.forEach(y),i=L(b),r=T(b,"DIV",{class:!0});var $=D(r);for(let t=0;t<d.length;t+=1)d[t].l($);$.forEach(y),n=L(b),u=T(b,"DIV",{class:!0});var V=D(u);F(m.$$.fragment,V),V.forEach(y),b.forEach(y),this.h()},h(){v(s,"class","carrousel-btn svelte-1d4ils5"),v(r,"class","carrousel-content svelte-1d4ils5"),v(u,"class","carrousel-btn svelte-1d4ils5"),v(e,"class","carrousel svelte-1d4ils5")},m(o,b){U(o,e,b),g(e,s),K(a,s,null),g(e,i),g(e,r);for(let c=0;c<d.length;c+=1)d[c]&&d[c].m(r,null);l[11](r),g(e,n),g(e,u),K(m,u,null),p=!0,k||(_=[M(s,"click",l[2]),M(s,"keyup",l[8]),M(s,"keydown",l[9]),M(s,"keypress",l[10]),M(u,"click",l[3]),M(u,"keyup",l[5]),M(u,"keydown",l[6]),M(u,"keypress",l[7])],k=!0)},p(o,[b]){if(b&1){I=Z(o[0]);let c;for(c=0;c<I.length;c+=1){const $=ee(o,I,c);d[c]?d[c].p($,b):(d[c]=te($),d[c].c(),d[c].m(r,null))}for(;c<d.length;c+=1)d[c].d(1);d.length=I.length}},i(o){p||(z(a.$$.fragment,o),z(m.$$.fragment,o),p=!0)},o(o){R(a.$$.fragment,o),R(m.$$.fragment,o),p=!1},d(o){o&&y(e),N(a),ae(d,o),l[11](null),N(m),k=!1,ce(_)}}}const Ie=2e3;function Ee(l,e,s){let{items:a=[]}=e,i,r,n=0,u=!0;const m=t=>{t?n<a.length-1?s(4,n=n+1):(s(4,n=n-1),u=!1):n>0?s(4,n=n-1):(s(4,n=n+1),u=!0)},p=t=>{clearTimeout(r),r=setTimeout(()=>{m(t),p(u)},Ie)},k=()=>{clearTimeout(r),u=!1,m(!1),p(u)},_=()=>{clearTimeout(r),u=!0,m(!0),p(u)};ue(()=>{p(!0)});function I(t){P.call(this,l,t)}function d(t){P.call(this,l,t)}function o(t){P.call(this,l,t)}function b(t){P.call(this,l,t)}function c(t){P.call(this,l,t)}function $(t){P.call(this,l,t)}function V(t){fe[t?"unshift":"push"](()=>{i=t,s(1,i)})}return l.$$set=t=>{"items"in t&&s(0,a=t.items)},l.$$.update=()=>{l.$$.dirty&18&&i&&i.scroll({left:n*150,behavior:"smooth"})},[a,i,k,_,n,I,d,o,b,c,$,V]}class $e extends ne{constructor(e){super(),oe(this,e,Ee,be,re,{items:0})}}function le(l,e,s){const a=l.slice();return a[7]=e[s],a}function se(l){let e,s,a,i;return s=new G({props:{icon:pe(l[7].platform),color:"var(--accent-text)"}}),{c(){e=w("a"),B(s.$$.fragment),a=A(),this.h()},l(r){e=T(r,"A",{class:!0,href:!0,target:!0,rel:!0});var n=D(e);F(s.$$.fragment,n),a=L(n),n.forEach(y),this.h()},h(){v(e,"class","home-social-item svelte-yhat8"),v(e,"href",`${l[6](l[7].link)?"mailto:":""}${l[7].link}`),v(e,"target","_blank"),v(e,"rel","noreferrer")},m(r,n){U(r,e,n),K(s,e,null),g(e,a),i=!0},p:_e,i(r){i||(z(s.$$.fragment,r),i=!0)},o(r){R(s.$$.fragment,r),i=!1},d(r){r&&y(e),N(s)}}}function we(l){let e,s,a,i,r,n,u,m,p,k,_,I,d,o,b,c,$;document.title=e=x(l[4],W);let V=Z(l[2]),t=[];for(let h=0;h<V.length;h+=1)t[h]=se(le(l,V,h));const ie=h=>R(t[h],1,1,()=>{t[h]=null});return c=new $e({props:{items:l[5]??ve}}),{c(){s=A(),a=w("div"),i=w("div"),r=w("h1"),n=C(l[3]),u=A(),m=C(l[1]),p=C(","),k=A(),_=w("p"),I=C(l[0]),d=A(),o=w("div");for(let h=0;h<t.length;h+=1)t[h].c();b=A(),B(c.$$.fragment),this.h()},l(h){me("svelte-gorrxo",document.head).forEach(y),s=L(h),a=T(h,"DIV",{class:!0});var f=D(a);i=T(f,"DIV",{class:!0});var S=D(i);r=T(S,"H1",{class:!0});var q=D(r);n=H(q,l[3]),u=L(q),m=H(q,l[1]),p=H(q,","),q.forEach(y),k=L(S),_=T(S,"P",{class:!0});var J=D(_);I=H(J,l[0]),J.forEach(y),d=L(S),o=T(S,"DIV",{class:!0});var O=D(o);for(let j=0;j<t.length;j+=1)t[j].l(O);O.forEach(y),S.forEach(y),b=L(f),F(c.$$.fragment,f),f.forEach(y),this.h()},h(){v(r,"class","home-title svelte-yhat8"),v(_,"class","home-subtitle svelte-yhat8"),v(o,"class","home-social svelte-yhat8"),v(i,"class","home-section svelte-yhat8"),v(a,"class","home svelte-yhat8")},m(h,E){U(h,s,E),U(h,a,E),g(a,i),g(i,r),g(r,n),g(r,u),g(r,m),g(r,p),g(i,k),g(i,_),g(_,I),g(i,d),g(i,o);for(let f=0;f<t.length;f+=1)t[f]&&t[f].m(o,null);g(a,b),K(c,a,null),$=!0},p(h,[E]){if((!$||E&16)&&e!==(e=x(h[4],W))&&(document.title=e),E&68){V=Z(h[2]);let f;for(f=0;f<V.length;f+=1){const S=le(h,V,f);t[f]?(t[f].p(S,E),z(t[f],1)):(t[f]=se(S),t[f].c(),z(t[f],1),t[f].m(o,null))}for(ge(),f=V.length;f<t.length;f+=1)ie(f);de()}},i(h){if(!$){for(let E=0;E<V.length;E+=1)z(t[E]);z(c.$$.fragment,h),$=!0}},o(h){t=t.filter(Boolean);for(let E=0;E<t.length;E+=1)R(t[E]);R(c.$$.fragment,h),$=!1},d(h){h&&(y(s),y(a)),ae(t,h),N(c)}}}function Te(l){const{description:e,lastName:s,links:a,name:i,title:r,skills:n}=ke;return[e,s,a,i,r,n,m=>{const p=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return!ye(m)&&p.test(m)}]}class Pe extends ne{constructor(e){super(),oe(this,e,Te,we,re,{})}}export{Pe as component};