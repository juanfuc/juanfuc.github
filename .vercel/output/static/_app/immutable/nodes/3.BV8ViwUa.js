import{s as Y,e as _,a as I,c as m,b as E,l as B,g as y,f as d,m as D,i as N,h as n,n as w,o as F,p as V,q as L,t as T,d as x,j as A}from"../chunks/scheduler.DsjCYe6-.js";import{e as Q,c as X}from"../chunks/dsv.CcDVc-A1.js";import{S as j,i as z}from"../chunks/index.BXruS39i.js";function Z(p,e,t){const s=p.slice();return s[3]=e[t],s}function M(p){let e,t=Q(p[0]),s=[];for(let a=0;a<t.length;a+=1)s[a]=q(Z(p,t,a));return{c(){for(let a=0;a<s.length;a+=1)s[a].c();e=V()},l(a){for(let c=0;c<s.length;c+=1)s[c].l(a);e=V()},m(a,c){for(let l=0;l<s.length;l+=1)s[l]&&s[l].m(a,c);N(a,e,c)},p(a,c){if(c&1){t=Q(a[0]);let l;for(l=0;l<t.length;l+=1){const i=Z(a,t,l);s[l]?s[l].p(i,c):(s[l]=q(i),s[l].c(),s[l].m(e.parentNode,e))}for(;l<s.length;l+=1)s[l].d(1);s.length=t.length}},d(a){a&&d(e),L(s,a)}}}function K(p){let e;return{c(){e=_("p"),this.h()},l(t){e=m(t,"P",{class:!0}),E(e).forEach(d),this.h()},h(){D(e,"class","svelte-1gm358")},m(t,s){N(t,e,s)},p:w,d(t){t&&d(e)}}}function q(p){let e,t,s,a=p[3].Cargo+"",c,l,i,u=p[3].Institución+"",f,h,o,r=p[3].Periodo+"",S,J,b,P=p[3].Descripción+"",k,O;return{c(){e=_("div"),t=_("div"),s=_("h2"),c=T(a),l=I(),i=_("p"),f=T(u),h=I(),o=_("p"),S=T(r),J=I(),b=_("p"),k=T(P),O=I(),this.h()},l(g){e=m(g,"DIV",{class:!0});var v=E(e);t=m(v,"DIV",{class:!0});var C=E(t);s=m(C,"H2",{class:!0});var G=E(s);c=x(G,a),G.forEach(d),l=y(C),i=m(C,"P",{class:!0});var H=E(i);f=x(H,u),H.forEach(d),h=y(C),o=m(C,"P",{class:!0});var R=E(o);S=x(R,r),R.forEach(d),J=y(C),b=m(C,"P",{class:!0});var U=E(b);k=x(U,P),U.forEach(d),C.forEach(d),O=y(v),v.forEach(d),this.h()},h(){D(s,"class","svelte-1gm358"),D(i,"class","svelte-1gm358"),D(o,"class","svelte-1gm358"),D(b,"class","description svelte-1gm358"),D(t,"class","card-content svelte-1gm358"),D(e,"class","card svelte-1gm358")},m(g,v){N(g,e,v),n(e,t),n(t,s),n(s,c),n(t,l),n(t,i),n(i,f),n(t,h),n(t,o),n(o,S),n(t,J),n(t,b),n(b,k),n(e,O)},p(g,v){v&1&&a!==(a=g[3].Cargo+"")&&A(c,a),v&1&&u!==(u=g[3].Institución+"")&&A(f,u),v&1&&r!==(r=g[3].Periodo+"")&&A(S,r),v&1&&P!==(P=g[3].Descripción+"")&&A(k,P)},d(g){g&&d(e)}}}function W(p){let e,t,s="Experiencia Profesional",a,c,l,i;function u(o,r){return o[1]?K:M}let f=u(p),h=f(p);return{c(){e=_("div"),t=_("h1"),t.textContent=s,a=I(),c=_("br"),l=_("br"),i=I(),h.c(),this.h()},l(o){e=m(o,"DIV",{class:!0});var r=E(e);t=m(r,"H1",{class:!0,"data-svelte-h":!0}),B(t)!=="svelte-10ryc75"&&(t.textContent=s),a=y(r),c=m(r,"BR",{}),l=m(r,"BR",{}),i=y(r),h.l(r),r.forEach(d),this.h()},h(){D(t,"class","svelte-1gm358"),D(e,"class","container svelte-1gm358")},m(o,r){N(o,e,r),n(e,t),n(e,a),n(e,c),n(e,l),n(e,i),h.m(e,null)},p(o,[r]){f===(f=u(o))&&h?h.p(o,r):(h.d(1),h=f(o),h&&(h.c(),h.m(e,null)))},i:w,o:w,d(o){o&&d(e),h.d()}}}function $(p,e,t){let s=[],a=!0;async function c(){const i=Date.now(),u=localStorage.getItem("experienceData"),f=localStorage.getItem("experienceDataTimestamp");if(console.log("Cache Timestamp:",f),console.log("Current Time:",i),console.log("Cache Duration:",36e5),u&&f&&i-f<36e5)console.log("Using cached data"),t(0,s=JSON.parse(u)),t(1,a=!1);else{console.log("Fetching new data from Google Sheets");const h="https://docs.google.com/spreadsheets/d/e/2PACX-1vQlN-YyegviJd-QDECGZZ3YJqw4edEV11bZYppkOuLxd63z7uca-VxI5psQQG_4TZdUtGSJx_JXy11G/pub?output=csv";try{const o=await X(h);console.log("Fetched Data:",o),t(0,s=o),localStorage.setItem("experienceData",JSON.stringify(s)),localStorage.setItem("experienceDataTimestamp",i)}catch(o){console.error("Error fetching data:",o)}finally{t(1,a=!1)}}}return F(()=>{c()}),[s,a]}class ae extends j{constructor(e){super(),z(this,e,$,W,Y,{})}}export{ae as component};