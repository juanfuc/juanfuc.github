import{s as H,e as v,a as I,c as _,b,l as R,g as P,f as m,m as E,i as B,h as r,n as Y,o as X,p as $,t as S,d as J,j as V}from"../chunks/scheduler.BaiVm2Fr.js";import{e as q,c as j}from"../chunks/dsv.CP827gCi.js";import{S as L,i as M}from"../chunks/index.DWRkMoV3.js";function w(h,e,s){const o=h.slice();return o[3]=e[s],o}function A(h){let e,s,o,d=h[3].Cargo+"",f,g,n,i=h[3].Institución+"",a,l,c,t=h[3].Periodo+"",D,k,z,C=h[3].Descripción+"",y,G;return{c(){e=v("div"),s=v("div"),o=v("h2"),f=S(d),g=I(),n=v("p"),a=S(i),l=I(),c=v("p"),D=S(t),k=I(),z=v("p"),y=S(C),G=I(),this.h()},l(p){e=_(p,"DIV",{class:!0});var u=b(e);s=_(u,"DIV",{class:!0});var x=b(s);o=_(x,"H2",{class:!0});var Q=b(o);f=J(Q,d),Q.forEach(m),g=P(x),n=_(x,"P",{class:!0});var Z=b(n);a=J(Z,i),Z.forEach(m),l=P(x),c=_(x,"P",{class:!0});var N=b(c);D=J(N,t),N.forEach(m),k=P(x),z=_(x,"P",{class:!0});var O=b(z);y=J(O,C),O.forEach(m),x.forEach(m),G=P(u),u.forEach(m),this.h()},h(){E(o,"class","svelte-izctxe"),E(n,"class","svelte-izctxe"),E(c,"class","svelte-izctxe"),E(z,"class","description svelte-izctxe"),E(s,"class","card-content svelte-izctxe"),E(e,"class","card svelte-izctxe")},m(p,u){B(p,e,u),r(e,s),r(s,o),r(o,f),r(s,g),r(s,n),r(n,a),r(s,l),r(s,c),r(c,D),r(s,k),r(s,z),r(z,y),r(e,G)},p(p,u){u&1&&d!==(d=p[3].Cargo+"")&&V(f,d),u&1&&i!==(i=p[3].Institución+"")&&V(a,i),u&1&&t!==(t=p[3].Periodo+"")&&V(D,t),u&1&&C!==(C=p[3].Descripción+"")&&V(y,C)},d(p){p&&m(e)}}}function T(h){let e,s,o="Experiencia Profesional",d,f,g,n,i=q(h[0]),a=[];for(let l=0;l<i.length;l+=1)a[l]=A(w(h,i,l));return{c(){e=v("div"),s=v("h1"),s.textContent=o,d=I(),f=v("br"),g=v("br"),n=I();for(let l=0;l<a.length;l+=1)a[l].c();this.h()},l(l){e=_(l,"DIV",{class:!0});var c=b(e);s=_(c,"H1",{class:!0,"data-svelte-h":!0}),R(s)!=="svelte-10ryc75"&&(s.textContent=o),d=P(c),f=_(c,"BR",{}),g=_(c,"BR",{}),n=P(c);for(let t=0;t<a.length;t+=1)a[t].l(c);c.forEach(m),this.h()},h(){E(s,"class","svelte-izctxe"),E(e,"class","container svelte-izctxe")},m(l,c){B(l,e,c),r(e,s),r(e,d),r(e,f),r(e,g),r(e,n);for(let t=0;t<a.length;t+=1)a[t]&&a[t].m(e,null)},p(l,[c]){if(c&1){i=q(l[0]);let t;for(t=0;t<i.length;t+=1){const D=w(l,i,t);a[t]?a[t].p(D,c):(a[t]=A(D),a[t].c(),a[t].m(e,null))}for(;t<a.length;t+=1)a[t].d(1);a.length=i.length}},i:Y,o:Y,d(l){l&&m(e),X(a,l)}}}function U(h,e,s){let o=[];async function d(){const f=localStorage.getItem("experienceData");if(f)s(0,o=JSON.parse(f));else{let g="https://docs.google.com/spreadsheets/d/e/2PACX-1vQlN-YyegviJd-QDECGZZ3YJqw4edEV11bZYppkOuLxd63z7uca-VxI5psQQG_4TZdUtGSJx_JXy11G/pub?output=csv";try{const n=await j(g);s(0,o=n),localStorage.setItem("experienceData",JSON.stringify(o))}catch(n){console.error("Error fetching data:",n)}finally{}}}return $(()=>{d()}),[o]}class ee extends L{constructor(e){super(),M(this,e,U,T,H,{})}}export{ee as component};