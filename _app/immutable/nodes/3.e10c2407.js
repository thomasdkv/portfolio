import{s as ce,f as k,a as P,l as te,g as C,h as I,c as B,d as x,m as re,j as E,i as Z,I as p,p as ge,K as de,n as ee}from"../chunks/scheduler.2731f2b7.js";import{S as fe,i as $e,b as D,d as V,m as L,a as v,t as b,e as S,g as me,c as ue}from"../chunks/index.8b1b8c23.js";import{e as G,u as he,o as _e}from"../chunks/each.bd6a99e2.js";import{c as ve,g as ne}from"../chunks/MainTitle.1d2f0d8f.js";import{C as we}from"../chunks/Card.ebef2bb0.js";import{C as xe}from"../chunks/CardLogo.7598c5c9.js";import{C as be,a as X}from"../chunks/ChipIcon.5220c53b.js";import{g as J,E as Ee}from"../chunks/params.c8375a6a.js";import{b as ae}from"../chunks/paths.49a4bf7b.js";import{U as O}from"../chunks/UIcon.712d7398.js";import{S as ke}from"../chunks/SearchPage.5ddd948b.js";import{i as Ce}from"../chunks/index.97b3c5e0.js";function oe(s,t,r){const e=s.slice();return e[5]=t[r],e}function Ie(s){let t,r;return t=new O({props:{icon:"i-carbon-building"}}),{c(){D(t.$$.fragment)},l(e){V(t.$$.fragment,e)},m(e,n){L(t,e,n),r=!0},p:ee,i(e){r||(v(t.$$.fragment,e),r=!0)},o(e){b(t.$$.fragment,e),r=!1},d(e){S(t,e)}}}function De(s){let t,r;return t=new O({props:{icon:"i-carbon-location"}}),{c(){D(t.$$.fragment)},l(e){V(t.$$.fragment,e)},m(e,n){L(t,e,n),r=!0},p:ee,i(e){r||(v(t.$$.fragment,e),r=!0)},o(e){b(t.$$.fragment,e),r=!1},d(e){S(t,e)}}}function Ve(s){let t,r;return t=new O({props:{icon:"i-carbon-hourglass"}}),{c(){D(t.$$.fragment)},l(e){V(t.$$.fragment,e)},m(e,n){L(t,e,n),r=!0},p:ee,i(e){r||(v(t.$$.fragment,e),r=!0)},o(e){b(t.$$.fragment,e),r=!1},d(e){S(t,e)}}}function se(s){let t,r;return t=new X({props:{logo:J(s[5].logo),name:s[5].name,href:`${ae}/skills/${s[5].slug}`}}),{c(){D(t.$$.fragment)},l(e){V(t.$$.fragment,e)},m(e,n){L(t,e,n),r=!0},p(e,n){const l={};n&1&&(l.logo=J(e[5].logo)),n&1&&(l.name=e[5].name),n&1&&(l.href=`${ae}/skills/${e[5].slug}`),t.$set(l)},i(e){r||(v(t.$$.fragment,e),r=!0)},o(e){b(t.$$.fragment,e),r=!1},d(e){S(t,e)}}}function Le(s){let t,r,e,n,l,m,_,f,a,i,$,j,g,w,M,F,Q,N,A=s[0].description+"",T,W,q,H;r=new xe({props:{src:J(s[0].logo),alt:s[0].company,size:75}}),m=new be({props:{title:s[0].name}}),a=new X({props:{name:`Company: ${s[0].company}`,$$slots:{default:[Ie]},$$scope:{ctx:s}}}),$=new X({props:{name:`Location: ${s[0].location}`,$$slots:{default:[De]},$$scope:{ctx:s}}}),g=new X({props:{name:`Contract: ${s[0].contract}`,$$slots:{default:[Ve]},$$scope:{ctx:s}}});let y=G(s[0].skills),u=[];for(let o=0;o<y.length;o+=1)u[o]=se(oe(s,y,o));const pe=o=>b(u[o],1,1,()=>{u[o]=null});return{c(){t=k("div"),D(r.$$.fragment),e=P(),n=k("div"),l=k("h3"),D(m.$$.fragment),_=P(),f=k("div"),D(a.$$.fragment),i=P(),D($.$$.fragment),j=P(),D(g.$$.fragment),w=P(),M=k("div"),F=te(s[1]),Q=P(),N=k("div"),T=te(A),W=P(),q=k("div");for(let o=0;o<u.length;o+=1)u[o].c();this.h()},l(o){t=C(o,"DIV",{class:!0});var c=I(t);V(r.$$.fragment,c),e=B(c),n=C(c,"DIV",{class:!0});var d=I(n);l=C(d,"H3",{class:!0});var K=I(l);V(m.$$.fragment,K),K.forEach(x),_=B(d),f=C(d,"DIV",{class:!0});var U=I(f);V(a.$$.fragment,U),i=B(U),V($.$$.fragment,U),j=B(U),V(g.$$.fragment,U),U.forEach(x),w=B(d),M=C(d,"DIV",{class:!0});var R=I(M);F=re(R,s[1]),R.forEach(x),Q=B(d),N=C(d,"DIV",{class:!0});var Y=I(N);T=re(Y,A),Y.forEach(x),W=B(d),q=C(d,"DIV",{class:!0});var h=I(q);for(let z=0;z<u.length;z+=1)u[z].l(h);h.forEach(x),d.forEach(x),c.forEach(x),this.h()},h(){E(l,"class","flex text-[0.9em] flex-col items-start sm:flex-row sm:items-center justify-between sm:gap-5 md:flex-col md:items-start md:gap-0 lg:flex-row lg:items-center"),E(f,"class","row flex-wrap m-b-2 gap-1 text-0.9em font-300"),E(M,"class","text-[var(--accent-text)] text-[0.9em] font-200"),E(N,"class","experience-description"),E(q,"class","flex flex-row flex-wrap mt-5"),E(n,"class","col ml-0 md:ml-[20px] gap-3 w-full"),E(t,"class","col md:flex-row items-start gap-5 md:gap-1")},m(o,c){Z(o,t,c),L(r,t,null),p(t,e),p(t,n),p(n,l),L(m,l,null),p(n,_),p(n,f),L(a,f,null),p(f,i),L($,f,null),p(f,j),L(g,f,null),p(n,w),p(n,M),p(M,F),p(n,Q),p(n,N),p(N,T),p(n,W),p(n,q);for(let d=0;d<u.length;d+=1)u[d]&&u[d].m(q,null);H=!0},p(o,c){const d={};c&1&&(d.src=J(o[0].logo)),c&1&&(d.alt=o[0].company),r.$set(d);const K={};c&1&&(K.title=o[0].name),m.$set(K);const U={};c&1&&(U.name=`Company: ${o[0].company}`),c&256&&(U.$$scope={dirty:c,ctx:o}),a.$set(U);const R={};c&1&&(R.name=`Location: ${o[0].location}`),c&256&&(R.$$scope={dirty:c,ctx:o}),$.$set(R);const Y={};if(c&1&&(Y.name=`Contract: ${o[0].contract}`),c&256&&(Y.$$scope={dirty:c,ctx:o}),g.$set(Y),(!H||c&1)&&A!==(A=o[0].description+"")&&ge(T,A),c&1){y=G(o[0].skills);let h;for(h=0;h<y.length;h+=1){const z=oe(o,y,h);u[h]?(u[h].p(z,c),v(u[h],1)):(u[h]=se(z),u[h].c(),v(u[h],1),u[h].m(q,null))}for(me(),h=y.length;h<u.length;h+=1)pe(h);ue()}},i(o){if(!H){v(r.$$.fragment,o),v(m.$$.fragment,o),v(a.$$.fragment,o),v($.$$.fragment,o),v(g.$$.fragment,o);for(let c=0;c<y.length;c+=1)v(u[c]);H=!0}},o(o){b(r.$$.fragment,o),b(m.$$.fragment,o),b(a.$$.fragment,o),b($.$$.fragment,o),b(g.$$.fragment,o),u=u.filter(Boolean);for(let c=0;c<u.length;c+=1)b(u[c]);H=!1},d(o){o&&x(t),S(r),S(m),S(a),S($),S(g),de(u,o)}}}function Se(s){let t,r;return t=new we({props:{margin:"0px 0px 20px 0px",tiltDegree:2,$$slots:{default:[Le]},$$scope:{ctx:s}}}),{c(){D(t.$$.fragment)},l(e){V(t.$$.fragment,e)},m(e,n){L(t,e,n),r=!0},p(e,[n]){const l={};n&257&&(l.$$scope={dirty:n,ctx:e}),t.$set(l)},i(e){r||(v(t.$$.fragment,e),r=!0)},o(e){b(t.$$.fragment,e),r=!1},d(e){S(t,e)}}}function Me(s,t,r){let{experience:e}=t;const n=ve(e.period.from,e.period.to),l=`${ne(e.period.from.getMonth())} ${e.period.from.getFullYear()}`,m=e.period.to?`${ne(e.period.to.getMonth())} ${e.period.to.getFullYear()}`:"Present",_=`${l} - ${m} · ${n} month${n>1?"s":""}`;return s.$$set=f=>{"experience"in f&&r(0,e=f.experience)},[e,_]}class Pe extends fe{constructor(t){super(),$e(this,t,Me,Se,ce,{experience:0})}}function le(s,t,r){const e=s.slice();return e[4]=t[r],e[6]=r,e}function ie(s,t){let r,e,n,l,m,_,f,a,i,$,j;return m=new O({props:{icon:"i-carbon-condition-point",classes:""}}),a=new Pe({props:{experience:t[4]}}),{key:s,first:null,c(){r=k("div"),e=k("div"),n=P(),l=k("div"),D(m.$$.fragment),_=P(),f=k("div"),D(a.$$.fragment),i=P(),this.h()},l(g){r=C(g,"DIV",{class:!0});var w=I(r);e=C(w,"DIV",{class:!0}),I(e).forEach(x),n=B(w),l=C(w,"DIV",{class:!0});var M=I(l);V(m.$$.fragment,M),M.forEach(x),_=B(w),f=C(w,"DIV",{class:!0});var F=I(f);V(a.$$.fragment,F),F.forEach(x),i=B(w),w.forEach(x),this.h()},h(){E(e,"class","flex-1 hidden lg:flex"),E(l,"class","hidden lg:inline p-15px bg-[var(--main)] rounded"),E(f,"class","flex-1 col items-stretch"),E(r,"class",$=`flex ${t[6]%2!==0?"flex-row":"flex-row-reverse"} relative items-center w-full my-[10px]`),this.first=r},m(g,w){Z(g,r,w),p(r,e),p(r,n),p(r,l),L(m,l,null),p(r,_),p(r,f),L(a,f,null),p(r,i),j=!0},p(g,w){t=g;const M={};w&1&&(M.experience=t[4]),a.$set(M),(!j||w&1&&$!==($=`flex ${t[6]%2!==0?"flex-row":"flex-row-reverse"} relative items-center w-full my-[10px]`))&&E(r,"class",$)},i(g){j||(v(m.$$.fragment,g),v(a.$$.fragment,g),j=!0)},o(g){b(m.$$.fragment,g),b(a.$$.fragment,g),j=!1},d(g){g&&x(r),S(m),S(a)}}}function Be(s){let t,r,e,n=[],l=new Map,m,_=G(s[0]);const f=a=>a[4].slug;for(let a=0;a<_.length;a+=1){let i=le(s,_,a),$=f(i);l.set($,n[a]=ie($,i))}return{c(){t=k("div"),r=k("div"),e=P();for(let a=0;a<n.length;a+=1)n[a].c();this.h()},l(a){t=C(a,"DIV",{class:!0});var i=I(t);r=C(i,"DIV",{class:!0}),I(r).forEach(x),e=B(i);for(let $=0;$<n.length;$+=1)n[$].l(i);i.forEach(x),this.h()},h(){E(r,"class","w-[0.5px] hidden lg:flex top-0 bottom-0 py-50px bg-[var(--border)] absolute rounded"),E(t,"class","col items-center relative mt-10")},m(a,i){Z(a,t,i),p(t,r),p(t,e);for(let $=0;$<n.length;$+=1)n[$]&&n[$].m(t,null);m=!0},p(a,i){i&1&&(_=G(a[0]),me(),n=he(n,i,f,1,a,_,l,t,_e,ie,null,le),ue())},i(a){if(!m){for(let i=0;i<_.length;i+=1)v(n[i]);m=!0}},o(a){for(let i=0;i<n.length;i+=1)b(n[i]);m=!1},d(a){a&&x(t);for(let i=0;i<n.length;i+=1)n[i].d()}}}function Ue(s){let t,r;return t=new ke({props:{title:s[1],$$slots:{default:[Be]},$$scope:{ctx:s}}}),t.$on("search",s[2]),{c(){D(t.$$.fragment)},l(e){V(t.$$.fragment,e)},m(e,n){L(t,e,n),r=!0},p(e,[n]){const l={};n&129&&(l.$$scope={dirty:n,ctx:e}),t.$set(l)},i(e){r||(v(t.$$.fragment,e),r=!0)},o(e){b(t.$$.fragment,e),r=!1},d(e){S(t,e)}}}function je(s,t,r){const{items:e,title:n}=Ee;let l=[...e];return[l,n,_=>{const f=_.detail.search;Ce(f)&&r(0,l=e),r(0,l=e.filter(a=>a.name.toLowerCase().includes(f)||a.company.toLowerCase().includes(f)||a.description.toLowerCase().includes(f)))}]}class Ge extends fe{constructor(t){super(),$e(this,t,je,Ue,ce,{})}}export{Ge as component};
