function t(){}function e(t,e){for(const n in e)t[n]=e[n];return t}function n(t){return t()}function r(){return Object.create(null)}function o(t){t.forEach(n)}function s(t){return"function"==typeof t}function l(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function c(t,e,n,r){if(t){const o=a(t,e,n,r);return t[0](o)}}function a(t,n,r,o){return t[1]&&o?e(r.ctx.slice(),t[1](o(n))):r.ctx}function i(t,e,n,r,o,s,l){const c=function(t,e,n,r){if(t[2]&&r){const o=t[2](r(n));if(void 0===e.dirty)return o;if("object"==typeof o){const t=[],n=Math.max(e.dirty.length,o.length);for(let r=0;r<n;r+=1)t[r]=e.dirty[r]|o[r];return t}return e.dirty|o}return e.dirty}(e,r,o,s);if(c){const o=a(e,n,r,l);t.p(o,c)}}function f(t){const e={};for(const n in t)"$"!==n[0]&&(e[n]=t[n]);return e}function u(e){return e&&s(e.destroy)?e.destroy:t}function h(t,e){t.appendChild(e)}function d(t,e,n){t.insertBefore(e,n||null)}function p(t){t.parentNode.removeChild(t)}function m(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function g(t){return document.createElement(t)}function $(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function x(t){return document.createTextNode(t)}function b(){return x(" ")}function v(){return x("")}function y(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function E(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function w(t){return Array.from(t.childNodes)}function _(t,e,n,r){for(let r=0;r<t.length;r+=1){const o=t[r];if(o.nodeName===e){let e=0;const s=[];for(;e<o.attributes.length;){const t=o.attributes[e++];n[t.name]||s.push(t.name)}for(let t=0;t<s.length;t++)o.removeAttribute(s[t]);return t.splice(r,1)[0]}}return r?$(e):g(e)}function S(t,e){for(let n=0;n<t.length;n+=1){const r=t[n];if(3===r.nodeType)return r.data=""+e,t.splice(n,1)[0]}return x(e)}function k(t){return S(t," ")}function I(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function A(t,e,n,r){t.style.setProperty(e,n,r?"important":"")}function L(t,e,n){t.classList[n?"add":"remove"](e)}function O(t,e=document.body){return Array.from(e.querySelectorAll(t))}let N;function P(t){N=t}function T(){if(!N)throw new Error("Function called outside component initialization");return N}function C(t){T().$$.on_mount.push(t)}function V(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach((t=>t(e)))}const R=[],D=[],j=[],U=[],M=Promise.resolve();let q=!1;function B(t){j.push(t)}function H(t){U.push(t)}let G=!1;const J=new Set;function F(){if(!G){G=!0;do{for(let t=0;t<R.length;t+=1){const e=R[t];P(e),z(e.$$)}for(P(null),R.length=0;D.length;)D.pop()();for(let t=0;t<j.length;t+=1){const e=j[t];J.has(e)||(J.add(e),e())}j.length=0}while(R.length);for(;U.length;)U.pop()();q=!1,G=!1,J.clear()}}function z(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(B)}}const K=new Set;let W;function Y(){W={r:0,c:[],p:W}}function X(){W.r||o(W.c),W=W.p}function Z(t,e){t&&t.i&&(K.delete(t),t.i(e))}function Q(t,e,n,r){if(t&&t.o){if(K.has(t))return;K.add(t),W.c.push((()=>{K.delete(t),r&&(n&&t.d(1),r())})),t.o(e)}}function tt(t,e){const n={},r={},o={$$scope:1};let s=t.length;for(;s--;){const l=t[s],c=e[s];if(c){for(const t in l)t in c||(r[t]=1);for(const t in c)o[t]||(n[t]=c[t],o[t]=1);t[s]=c}else for(const t in l)o[t]=1}for(const t in r)t in n||(n[t]=void 0);return n}function et(t){return"object"==typeof t&&null!==t?t:{}}function nt(t,e,n){const r=t.$$.props[e];void 0!==r&&(t.$$.bound[r]=n,n(t.$$.ctx[r]))}function rt(t){t&&t.c()}function ot(t,e){t&&t.l(e)}function st(t,e,r){const{fragment:l,on_mount:c,on_destroy:a,after_update:i}=t.$$;l&&l.m(e,r),B((()=>{const e=c.map(n).filter(s);a?a.push(...e):o(e),t.$$.on_mount=[]})),i.forEach(B)}function lt(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function ct(t,e){-1===t.$$.dirty[0]&&(R.push(t),q||(q=!0,M.then(F)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function at(e,n,s,l,c,a,i=[-1]){const f=N;P(e);const u=n.props||{},h=e.$$={fragment:null,ctx:null,props:a,update:t,not_equal:c,bound:r(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(f?f.$$.context:[]),callbacks:r(),dirty:i,skip_bound:!1};let d=!1;if(h.ctx=s?s(e,u,((t,n,...r)=>{const o=r.length?r[0]:n;return h.ctx&&c(h.ctx[t],h.ctx[t]=o)&&(!h.skip_bound&&h.bound[t]&&h.bound[t](o),d&&ct(e,t)),n})):[],h.update(),d=!0,o(h.before_update),h.fragment=!!l&&l(h.ctx),n.target){if(n.hydrate){const t=w(n.target);h.fragment&&h.fragment.l(t),t.forEach(p)}else h.fragment&&h.fragment.c();n.intro&&Z(e.$$.fragment),st(e,n.target,n.anchor),F()}P(f)}class it{$destroy(){lt(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const ft=[];function ut(e,n=t){let r;const o=[];function s(t){if(l(e,t)&&(e=t,r)){const t=!ft.length;for(let t=0;t<o.length;t+=1){const n=o[t];n[1](),ft.push(n,e)}if(t){for(let t=0;t<ft.length;t+=2)ft[t][0](ft[t+1]);ft.length=0}}}return{set:s,update:function(t){s(t(e))},subscribe:function(l,c=t){const a=[l,c];return o.push(a),1===o.length&&(r=n(s)||t),l(e),()=>{const t=o.indexOf(a);-1!==t&&o.splice(t,1),0===o.length&&(r(),r=null)}}}}const ht={};function dt(t){let e,n,r;const o=t[5].default,s=c(o,t,t[4],null);return{c(){e=g("p"),s&&s.c(),this.h()},l(t){e=_(t,"P",{class:!0});var n=w(e);s&&s.l(n),n.forEach(p),this.h()},h(){E(e,"class",n="font-subtitle "+t[3](t[0])+" "+t[2]),L(e,"font-semibold",t[0].includes("subtitle")&&t[1]),L(e,"font-bold",t[0].includes("body")&&t[1])},m(t,n){d(t,e,n),s&&s.m(e,null),r=!0},p(t,l){s&&s.p&&16&l&&i(s,o,t,t[4],l,null,null),(!r||5&l&&n!==(n="font-subtitle "+t[3](t[0])+" "+t[2]))&&E(e,"class",n),7&l&&L(e,"font-semibold",t[0].includes("subtitle")&&t[1]),7&l&&L(e,"font-bold",t[0].includes("body")&&t[1])},i(t){r||(Z(s,t),r=!0)},o(t){Q(s,t),r=!1},d(t){t&&p(e),s&&s.d(t)}}}function pt(t){let e,n,r;const o=t[5].default,s=c(o,t,t[4],null);return{c(){e=g("h5"),s&&s.c(),this.h()},l(t){e=_(t,"H5",{class:!0});var n=w(e);s&&s.l(n),n.forEach(p),this.h()},h(){E(e,"class",n="font-heading text-12 md:text-16 "+t[2]),L(e,"font-black",t[1])},m(t,n){d(t,e,n),s&&s.m(e,null),r=!0},p(t,l){s&&s.p&&16&l&&i(s,o,t,t[4],l,null,null),(!r||4&l&&n!==(n="font-heading text-12 md:text-16 "+t[2]))&&E(e,"class",n),6&l&&L(e,"font-black",t[1])},i(t){r||(Z(s,t),r=!0)},o(t){Q(s,t),r=!1},d(t){t&&p(e),s&&s.d(t)}}}function mt(t){let e,n,r;const o=t[5].default,s=c(o,t,t[4],null);return{c(){e=g("h4"),s&&s.c(),this.h()},l(t){e=_(t,"H4",{class:!0});var n=w(e);s&&s.l(n),n.forEach(p),this.h()},h(){E(e,"class",n="font-heading text-14 md:text-18 "+t[2]),L(e,"font-black",t[1])},m(t,n){d(t,e,n),s&&s.m(e,null),r=!0},p(t,l){s&&s.p&&16&l&&i(s,o,t,t[4],l,null,null),(!r||4&l&&n!==(n="font-heading text-14 md:text-18 "+t[2]))&&E(e,"class",n),6&l&&L(e,"font-black",t[1])},i(t){r||(Z(s,t),r=!0)},o(t){Q(s,t),r=!1},d(t){t&&p(e),s&&s.d(t)}}}function gt(t){let e,n,r;const o=t[5].default,s=c(o,t,t[4],null);return{c(){e=g("h3"),s&&s.c(),this.h()},l(t){e=_(t,"H3",{class:!0});var n=w(e);s&&s.l(n),n.forEach(p),this.h()},h(){E(e,"class",n="font-heading text-16 md:text-21 "+t[2]),L(e,"font-black",t[1])},m(t,n){d(t,e,n),s&&s.m(e,null),r=!0},p(t,l){s&&s.p&&16&l&&i(s,o,t,t[4],l,null,null),(!r||4&l&&n!==(n="font-heading text-16 md:text-21 "+t[2]))&&E(e,"class",n),6&l&&L(e,"font-black",t[1])},i(t){r||(Z(s,t),r=!0)},o(t){Q(s,t),r=!1},d(t){t&&p(e),s&&s.d(t)}}}function $t(t){let e,n,r;const o=t[5].default,s=c(o,t,t[4],null);return{c(){e=g("h2"),s&&s.c(),this.h()},l(t){e=_(t,"H2",{class:!0});var n=w(e);s&&s.l(n),n.forEach(p),this.h()},h(){E(e,"class",n="font-heading text-18 md:text-24 "+t[2]),L(e,"font-black",t[1])},m(t,n){d(t,e,n),s&&s.m(e,null),r=!0},p(t,l){s&&s.p&&16&l&&i(s,o,t,t[4],l,null,null),(!r||4&l&&n!==(n="font-heading text-18 md:text-24 "+t[2]))&&E(e,"class",n),6&l&&L(e,"font-black",t[1])},i(t){r||(Z(s,t),r=!0)},o(t){Q(s,t),r=!1},d(t){t&&p(e),s&&s.d(t)}}}function xt(t){let e,n,r;const o=t[5].default,s=c(o,t,t[4],null);return{c(){e=g("h1"),s&&s.c(),this.h()},l(t){e=_(t,"H1",{class:!0});var n=w(e);s&&s.l(n),n.forEach(p),this.h()},h(){E(e,"class",n="font-heading text-21 md:text-36 "+t[2]),L(e,"font-black",t[1])},m(t,n){d(t,e,n),s&&s.m(e,null),r=!0},p(t,l){s&&s.p&&16&l&&i(s,o,t,t[4],l,null,null),(!r||4&l&&n!==(n="font-heading text-21 md:text-36 "+t[2]))&&E(e,"class",n),6&l&&L(e,"font-black",t[1])},i(t){r||(Z(s,t),r=!0)},o(t){Q(s,t),r=!1},d(t){t&&p(e),s&&s.d(t)}}}function bt(t){let e,n,r,o;const s=[xt,$t,gt,mt,pt,dt],l=[];function c(t,e){return"h1"===t[0]?0:"h2"===t[0]?1:"h3"===t[0]?2:"h4"===t[0]?3:"h5"===t[0]?4:5}return e=c(t),n=l[e]=s[e](t),{c(){n.c(),r=v()},l(t){n.l(t),r=v()},m(t,n){l[e].m(t,n),d(t,r,n),o=!0},p(t,[o]){let a=e;e=c(t),e===a?l[e].p(t,o):(Y(),Q(l[a],1,1,(()=>{l[a]=null})),X(),n=l[e],n?n.p(t,o):(n=l[e]=s[e](t),n.c()),Z(n,1),n.m(r.parentNode,r))},i(t){o||(Z(n),o=!0)},o(t){Q(n),o=!1},d(t){l[e].d(t),t&&p(r)}}}function vt(t,n,r){let o,{$$slots:s={},$$scope:l}=n,{as:c}=n,{bold:a=!1}=n;return t.$$set=t=>{r(6,n=e(e({},n),f(t))),"as"in t&&r(0,c=t.as),"bold"in t&&r(1,a=t.bold),"$$scope"in t&&r(4,l=t.$$scope)},t.$$.update=()=>{r(2,o=n.class||"")},n=f(n),[c,a,o,t=>{switch(t){case"subtitle1":return"font-subtitle text-18 md:text-24";case"subtitle2":return"font-subtitle text-16 md:text-18";case"subtitle3":return"font-subtitle text-14 md:text-16";case"subtitle4":return"font-subtitle text-12 md:text-14";case"subtitle5":return"font-subtitle text-10 md:text-12";case"body1":return"font-body text-15 md:text-17";case"body2":return"font-body text-12 md:text-14"}},l,s]}class yt extends it{constructor(t){super(),at(this,t,vt,bt,l,{as:0,bold:1})}}function Et(t,e,n){const r=t.slice();return r[1]=e[n].href,r[2]=e[n].label,r}function wt(t){let e;return{c(){e=x("CIVIL MOVEMENT 2020")},l(t){e=S(t,"CIVIL MOVEMENT 2020")},m(t,n){d(t,e,n)},d(t){t&&p(e)}}}function _t(e){let n,r=e[2]+"";return{c(){n=x(r)},l(t){n=S(t,r)},m(t,e){d(t,n,e)},p:t,d(t){t&&p(n)}}}function St(t){let e,n,r,o;return n=new yt({props:{as:"subtitle5",bold:!0,$$slots:{default:[_t]},$$scope:{ctx:t}}}),{c(){e=g("a"),rt(n.$$.fragment),r=b(),this.h()},l(t){e=_(t,"A",{href:!0,alt:!0,class:!0});var o=w(e);ot(n.$$.fragment,o),r=k(o),o.forEach(p),this.h()},h(){E(e,"href",t[1]),E(e,"alt",t[2]),E(e,"class","my-auto px-2 py-1 rounded-full hover:bg-gray hover:text-white")},m(t,s){d(t,e,s),st(n,e,null),h(e,r),o=!0},p(t,e){const r={};32&e&&(r.$$scope={dirty:e,ctx:t}),n.$set(r)},i(t){o||(Z(n.$$.fragment,t),o=!0)},o(t){Q(n.$$.fragment,t),o=!1},d(t){t&&p(e),lt(n)}}}function kt(t){let e,n,r,o,s,l,c,a,i,f,u,$;i=new yt({props:{as:"h3",$$slots:{default:[wt]},$$scope:{ctx:t}}});let x=t[0],v=[];for(let e=0;e<x.length;e+=1)v[e]=St(Et(t,x,e));const y=t=>Q(v[t],1,1,(()=>{v[t]=null}));return{c(){e=g("div"),n=g("div"),r=g("a"),o=g("img"),l=b(),c=g("div"),a=g("a"),rt(i.$$.fragment),f=b(),u=g("div");for(let t=0;t<v.length;t+=1)v[t].c();this.h()},l(t){e=_(t,"DIV",{class:!0});var s=w(e);n=_(s,"DIV",{class:!0});var h=w(n);r=_(h,"A",{href:!0,class:!0});var d=w(r);o=_(d,"IMG",{src:!0,alt:!0,class:!0}),d.forEach(p),h.forEach(p),l=k(s),c=_(s,"DIV",{class:!0});var m=w(c);a=_(m,"A",{href:!0});var g=w(a);ot(i.$$.fragment,g),g.forEach(p),m.forEach(p),f=k(s),u=_(s,"DIV",{class:!0});var $=w(u);for(let t=0;t<v.length;t+=1)v[t].l($);$.forEach(p),s.forEach(p),this.h()},h(){o.src!==(s="images/logo-elect-header.svg")&&E(o,"src","images/logo-elect-header.svg"),E(o,"alt","ELECT"),E(o,"class","h-4 md:h-5"),E(r,"href","/"),E(r,"class","h-4 md:h-5 my-auto"),E(n,"class","md:flex-1 flex"),E(a,"href","/"),E(c,"class","hidden md:flex"),E(u,"class","flex-1 flex justify-end space-x-1"),E(e,"class","flex flex-row py-2 px-3 bg-white")},m(t,s){d(t,e,s),h(e,n),h(n,r),h(r,o),h(e,l),h(e,c),h(c,a),st(i,a,null),h(e,f),h(e,u);for(let t=0;t<v.length;t+=1)v[t].m(u,null);$=!0},p(t,[e]){const n={};if(32&e&&(n.$$scope={dirty:e,ctx:t}),i.$set(n),1&e){let n;for(x=t[0],n=0;n<x.length;n+=1){const r=Et(t,x,n);v[n]?(v[n].p(r,e),Z(v[n],1)):(v[n]=St(r),v[n].c(),Z(v[n],1),v[n].m(u,null))}for(Y(),n=x.length;n<v.length;n+=1)y(n);X()}},i(t){if(!$){Z(i.$$.fragment,t);for(let t=0;t<x.length;t+=1)Z(v[t]);$=!0}},o(t){Q(i.$$.fragment,t),v=v.filter(Boolean);for(let t=0;t<v.length;t+=1)Q(v[t]);$=!1},d(t){t&&p(e),lt(i),m(v,t)}}}function It(t){return[[{label:"Explore",href:"/"},{label:"Summary",href:"/summary"},{label:"About",href:"/about"}]]}class At extends it{constructor(t){super(),at(this,t,It,kt,l,{})}}function Lt(t,e,n){const r=t.slice();return r[3]=e[n].image,r[4]=e[n].alt,r[5]=e[n].url,r}function Ot(t,e,n){const r=t.slice();return r[8]=e[n].text,r[9]=e[n].link,r}function Nt(t,e,n){const r=t.slice();return r[3]=e[n].image,r[12]=e[n].imageMd,r[4]=e[n].alt,r[5]=e[n].url,r}function Pt(e){let n,r,o,s,l,c,a;return{c(){n=g("a"),r=g("img"),s=b(),l=g("img"),a=b(),this.h()},l(t){n=_(t,"A",{href:!0,target:!0,rel:!0});var e=w(n);r=_(e,"IMG",{src:!0,alt:!0,class:!0}),s=k(e),l=_(e,"IMG",{src:!0,alt:!0,class:!0}),a=k(e),e.forEach(p),this.h()},h(){r.src!==(o=e[3])&&E(r,"src",o),E(r,"alt",e[4]),E(r,"class","md:hidden h-5 md:h-6"),l.src!==(c=e[12])&&E(l,"src",c),E(l,"alt",e[4]),E(l,"class","hidden md:block h-4 lg:h-6"),E(n,"href",e[5]),E(n,"target","_blank"),E(n,"rel","noopener noreferrer")},m(t,e){d(t,n,e),h(n,r),h(n,s),h(n,l),h(n,a)},p:t,d(t){t&&p(n)}}}function Tt(e){let n,r,o,s,l=e[8]+"";return{c(){n=g("div"),r=g("a"),o=x(l),s=b(),this.h()},l(t){n=_(t,"DIV",{class:!0});var e=w(n);r=_(e,"A",{href:!0,class:!0});var c=w(r);o=S(c,l),c.forEach(p),s=k(e),e.forEach(p),this.h()},h(){E(r,"href",e[9]),E(r,"class","block hover:bg-white p-1 hover:text-black font-heading text-12 md:text-14 lg:text-16"),E(n,"class","flex justify-start lg:justify-center")},m(t,e){d(t,n,e),h(n,r),h(r,o),h(n,s)},p:t,d(t){t&&p(n)}}}function Ct(e){let n,r,o,s;return{c(){n=g("a"),r=g("img"),s=b(),this.h()},l(t){n=_(t,"A",{href:!0,target:!0,rel:!0});var e=w(n);r=_(e,"IMG",{src:!0,alt:!0,class:!0}),s=k(e),e.forEach(p),this.h()},h(){r.src!==(o=e[3])&&E(r,"src",o),E(r,"alt",e[4]),E(r,"class","h-4 m-2"),E(n,"href",e[5]),E(n,"target","_blank"),E(n,"rel","noopener noreferrer")},m(t,e){d(t,n,e),h(n,r),h(n,s)},p:t,d(t){t&&p(n)}}}function Vt(e){let n,r,o,s,l,c,a,i,f,u,$,v,y,I,A,L,O,N,P,T,C,V,R,D,j,U,M,q,B,H,G,J=e[1],F=[];for(let t=0;t<J.length;t+=1)F[t]=Pt(Nt(e,J,t));let z=e[0],K=[];for(let t=0;t<z.length;t+=1)K[t]=Tt(Ot(e,z,t));let W=e[2],Y=[];for(let t=0;t<W.length;t+=1)Y[t]=Ct(Lt(e,W,t));return{c(){n=g("div"),r=g("div"),o=g("div"),s=g("a"),l=g("img"),a=b(),i=g("div");for(let t=0;t<F.length;t+=1)F[t].c();f=b(),u=g("div");for(let t=0;t<K.length;t+=1)K[t].c();$=b(),v=g("div"),y=g("div"),I=g("p"),A=x("ABOUT US"),L=b(),O=g("a"),N=x("เราคือใคร.. ทำไมต้อง Elect?"),P=b(),T=g("div"),C=g("p"),V=x("CONTACT US"),R=b(),D=g("a"),j=x("E-mail : contact@elect.in.th"),U=b(),M=g("div"),q=g("p"),B=x("FOLLOW US"),H=b(),G=g("div");for(let t=0;t<Y.length;t+=1)Y[t].c();this.h()},l(t){n=_(t,"DIV",{class:!0});var e=w(n);r=_(e,"DIV",{class:!0});var c=w(r);o=_(c,"DIV",{class:!0});var h=w(o);s=_(h,"A",{href:!0,class:!0});var d=w(s);l=_(d,"IMG",{src:!0,alt:!0,class:!0}),d.forEach(p),h.forEach(p),a=k(c),i=_(c,"DIV",{class:!0});var m=w(i);for(let t=0;t<F.length;t+=1)F[t].l(m);m.forEach(p),c.forEach(p),f=k(e),u=_(e,"DIV",{class:!0});var g=w(u);for(let t=0;t<K.length;t+=1)K[t].l(g);g.forEach(p),$=k(e),v=_(e,"DIV",{class:!0});var x=w(v);y=_(x,"DIV",{class:!0});var b=w(y);I=_(b,"P",{class:!0});var E=w(I);A=S(E,"ABOUT US"),E.forEach(p),L=k(b),O=_(b,"A",{href:!0,class:!0});var J=w(O);N=S(J,"เราคือใคร.. ทำไมต้อง Elect?"),J.forEach(p),b.forEach(p),P=k(x),T=_(x,"DIV",{class:!0});var z=w(T);C=_(z,"P",{class:!0});var W=w(C);V=S(W,"CONTACT US"),W.forEach(p),R=k(z),D=_(z,"A",{href:!0,class:!0});var X=w(D);j=S(X,"E-mail : contact@elect.in.th"),X.forEach(p),z.forEach(p),U=k(x),M=_(x,"DIV",{class:!0});var Z=w(M);q=_(Z,"P",{class:!0});var Q=w(q);B=S(Q,"FOLLOW US"),Q.forEach(p),H=k(Z),G=_(Z,"DIV",{class:!0});var tt=w(G);for(let t=0;t<Y.length;t+=1)Y[t].l(tt);tt.forEach(p),Z.forEach(p),x.forEach(p),e.forEach(p),this.h()},h(){l.src!==(c="images/logo-elect-footer.png")&&E(l,"src","images/logo-elect-footer.png"),E(l,"alt","ELECT"),E(l,"class","w-20 md:w-28 lg:w-32 h-auto"),E(s,"href","https://elect.in.th"),E(s,"class","mb-auto"),E(o,"class","flex-1 flex"),E(i,"class","flex-1 md:flex-grow-0 flex flex-row space-x-4"),E(r,"class","col-span-2 lg:col-span-1 flex flex-row md:flex-col mb-8 md:mb-0"),E(u,"class","flex-1 flex flex-col justify-between md:text-center"),E(I,"class","font-heading text-10 md:text-12 lg:text-14 font-black"),E(O,"href","https://elect.in.th/about/"),E(O,"class","hover:underline text-10 md:text-11 lg:text-12"),E(y,"class","flex flex-col space-y-1"),E(C,"class","font-heading text-10 md:text-12 lg:text-14 font-black"),E(D,"href","mailto:contact@elect.in.th"),E(D,"class","hover:underline text-10 md:text-11 lg:text-12"),E(T,"class","flex flex-col space-y-1"),E(q,"class","font-heading text-10 md:text-12 lg:text-14 font-black"),E(G,"class","flex flex-row"),E(M,"class","flex flex-col space-y-1"),E(v,"class","flex flex-col space-y-6 md:ml-auto"),E(n,"class","grid grid-cols-2 md:grid-cols-4 lg:grid-cols-3 px-8 py-16 bg-black text-white")},m(t,e){d(t,n,e),h(n,r),h(r,o),h(o,s),h(s,l),h(r,a),h(r,i);for(let t=0;t<F.length;t+=1)F[t].m(i,null);h(n,f),h(n,u);for(let t=0;t<K.length;t+=1)K[t].m(u,null);h(n,$),h(n,v),h(v,y),h(y,I),h(I,A),h(y,L),h(y,O),h(O,N),h(v,P),h(v,T),h(T,C),h(C,V),h(T,R),h(T,D),h(D,j),h(v,U),h(v,M),h(M,q),h(q,B),h(M,H),h(M,G);for(let t=0;t<Y.length;t+=1)Y[t].m(G,null)},p(t,[e]){if(2&e){let n;for(J=t[1],n=0;n<J.length;n+=1){const r=Nt(t,J,n);F[n]?F[n].p(r,e):(F[n]=Pt(r),F[n].c(),F[n].m(i,null))}for(;n<F.length;n+=1)F[n].d(1);F.length=J.length}if(1&e){let n;for(z=t[0],n=0;n<z.length;n+=1){const r=Ot(t,z,n);K[n]?K[n].p(r,e):(K[n]=Tt(r),K[n].c(),K[n].m(u,null))}for(;n<K.length;n+=1)K[n].d(1);K.length=z.length}if(4&e){let n;for(W=t[2],n=0;n<W.length;n+=1){const r=Lt(t,W,n);Y[n]?Y[n].p(r,e):(Y[n]=Ct(r),Y[n].c(),Y[n].m(G,null))}for(;n<Y.length;n+=1)Y[n].d(1);Y.length=W.length}},i:t,o:t,d(t){t&&p(n),m(F,t),m(K,t),m(Y,t)}}}function Rt(t){return[[{text:"VISUALIZATION",link:"https://elect.in.th/visualization/"},{text:"TOOLS",link:"https://elect.in.th/tool/"},{text:"ARTICLE",link:"https://elect.in.th/article/"},{text:"INFOGRAPHIC",link:"https://elect.in.th/infographic/"},{text:"DOWNLOAD DATA",link:"https://elect.in.th/download-data/"}],[{image:"images/logo-punchup.svg",imageMd:"images/logo-punchup-full.svg",alt:"PunchUp",url:"https://punchup.world/"},{image:"images/logo-boonmee.svg",imageMd:"images/logo-boonme-full.svg",alt:"BoonmeLab",url:"https://www.boonmeelab.com/"},{image:"images/logo-ilaw.png",imageMd:"images/logo-ilaw.png",alt:"iLaw",url:"https://ilaw.or.th"}],[{image:"images/follow-facebook.svg",alt:"Facebook",url:"https://www.facebook.com/electinth/"},{image:"images/follow-twitter.svg",alt:"Twitter",url:"https://twitter.com/electinth/"}]]}class Dt extends it{constructor(t){super(),at(this,t,Rt,Vt,l,{})}}function jt(t){let e,n,r,o,s,l,a;n=new At({});const f=t[1].default,u=c(f,t,t[0],null);return l=new Dt({}),{c(){e=g("div"),rt(n.$$.fragment),r=b(),o=g("main"),u&&u.c(),s=b(),rt(l.$$.fragment),this.h()},l(t){e=_(t,"DIV",{class:!0});var c=w(e);ot(n.$$.fragment,c),r=k(c),o=_(c,"MAIN",{class:!0});var a=w(o);u&&u.l(a),a.forEach(p),s=k(c),ot(l.$$.fragment,c),c.forEach(p),this.h()},h(){E(o,"class","flex-1"),E(e,"class","flex flex-col min-h-screen")},m(t,c){d(t,e,c),st(n,e,null),h(e,r),h(e,o),u&&u.m(o,null),h(e,s),st(l,e,null),a=!0},p(t,[e]){u&&u.p&&1&e&&i(u,f,t,t[0],e,null,null)},i(t){a||(Z(n.$$.fragment,t),Z(u,t),Z(l.$$.fragment,t),a=!0)},o(t){Q(n.$$.fragment,t),Q(u,t),Q(l.$$.fragment,t),a=!1},d(t){t&&p(e),lt(n),u&&u.d(t),lt(l)}}}function Ut(t,e,n){let{$$slots:r={},$$scope:o}=e;return t.$$set=t=>{"$$scope"in t&&n(0,o=t.$$scope)},[o,r]}class Mt extends it{constructor(t){super(),at(this,t,Ut,jt,l,{})}}function qt(t){let e,n,r=t[1].stack+"";return{c(){e=g("pre"),n=x(r)},l(t){e=_(t,"PRE",{});var o=w(e);n=S(o,r),o.forEach(p)},m(t,r){d(t,e,r),h(e,n)},p(t,e){2&e&&r!==(r=t[1].stack+"")&&I(n,r)},d(t){t&&p(e)}}}function Bt(e){let n,r,o,s,l,c,a,i,f,u=e[1].message+"";document.title=n=e[0];let m=e[2]&&e[1].stack&&qt(e);return{c(){r=b(),o=g("h1"),s=x(e[0]),l=b(),c=g("p"),a=x(u),i=b(),m&&m.c(),f=v(),this.h()},l(t){O('[data-svelte="svelte-1o9r2ue"]',document.head).forEach(p),r=k(t),o=_(t,"H1",{class:!0});var n=w(o);s=S(n,e[0]),n.forEach(p),l=k(t),c=_(t,"P",{class:!0});var h=w(c);a=S(h,u),h.forEach(p),i=k(t),m&&m.l(t),f=v(),this.h()},h(){E(o,"class","svelte-q86zst"),E(c,"class","svelte-q86zst")},m(t,e){d(t,r,e),d(t,o,e),h(o,s),d(t,l,e),d(t,c,e),h(c,a),d(t,i,e),m&&m.m(t,e),d(t,f,e)},p(t,[e]){1&e&&n!==(n=t[0])&&(document.title=n),1&e&&I(s,t[0]),2&e&&u!==(u=t[1].message+"")&&I(a,u),t[2]&&t[1].stack?m?m.p(t,e):(m=qt(t),m.c(),m.m(f.parentNode,f)):m&&(m.d(1),m=null)},i:t,o:t,d(t){t&&p(r),t&&p(o),t&&p(l),t&&p(c),t&&p(i),m&&m.d(t),t&&p(f)}}}function Ht(t,e,n){let{status:r}=e,{error:o}=e;return t.$$set=t=>{"status"in t&&n(0,r=t.status),"error"in t&&n(1,o=t.error)},[r,o,false]}class Gt extends it{constructor(t){super(),at(this,t,Ht,Bt,l,{status:0,error:1})}}function Jt(t){let n,r,o;const s=[t[4].props];var l=t[4].component;function c(t){let n={};for(let t=0;t<s.length;t+=1)n=e(n,s[t]);return{props:n}}return l&&(n=new l(c())),{c(){n&&rt(n.$$.fragment),r=v()},l(t){n&&ot(n.$$.fragment,t),r=v()},m(t,e){n&&st(n,t,e),d(t,r,e),o=!0},p(t,e){const o=16&e?tt(s,[et(t[4].props)]):{};if(l!==(l=t[4].component)){if(n){Y();const t=n;Q(t.$$.fragment,1,0,(()=>{lt(t,1)})),X()}l?(n=new l(c()),rt(n.$$.fragment),Z(n.$$.fragment,1),st(n,r.parentNode,r)):n=null}else l&&n.$set(o)},i(t){o||(n&&Z(n.$$.fragment,t),o=!0)},o(t){n&&Q(n.$$.fragment,t),o=!1},d(t){t&&p(r),n&&lt(n,t)}}}function Ft(t){let e,n;return e=new Gt({props:{error:t[0],status:t[1]}}),{c(){rt(e.$$.fragment)},l(t){ot(e.$$.fragment,t)},m(t,r){st(e,t,r),n=!0},p(t,n){const r={};1&n&&(r.error=t[0]),2&n&&(r.status=t[1]),e.$set(r)},i(t){n||(Z(e.$$.fragment,t),n=!0)},o(t){Q(e.$$.fragment,t),n=!1},d(t){lt(e,t)}}}function zt(t){let e,n,r,o;const s=[Ft,Jt],l=[];function c(t,e){return t[0]?0:1}return e=c(t),n=l[e]=s[e](t),{c(){n.c(),r=v()},l(t){n.l(t),r=v()},m(t,n){l[e].m(t,n),d(t,r,n),o=!0},p(t,o){let a=e;e=c(t),e===a?l[e].p(t,o):(Y(),Q(l[a],1,1,(()=>{l[a]=null})),X(),n=l[e],n?n.p(t,o):(n=l[e]=s[e](t),n.c()),Z(n,1),n.m(r.parentNode,r))},i(t){o||(Z(n),o=!0)},o(t){Q(n),o=!1},d(t){l[e].d(t),t&&p(r)}}}function Kt(t){let n,r;const o=[{segment:t[2][0]},t[3].props];let s={$$slots:{default:[zt]},$$scope:{ctx:t}};for(let t=0;t<o.length;t+=1)s=e(s,o[t]);return n=new Mt({props:s}),{c(){rt(n.$$.fragment)},l(t){ot(n.$$.fragment,t)},m(t,e){st(n,t,e),r=!0},p(t,[e]){const r=12&e?tt(o,[4&e&&{segment:t[2][0]},8&e&&et(t[3].props)]):{};147&e&&(r.$$scope={dirty:e,ctx:t}),n.$set(r)},i(t){r||(Z(n.$$.fragment,t),r=!0)},o(t){Q(n.$$.fragment,t),r=!1},d(t){lt(n,t)}}}function Wt(t,e,n){let{stores:r}=e,{error:o}=e,{status:s}=e,{segments:l}=e,{level0:c}=e,{level1:a=null}=e,{notify:i}=e;var f,u,h;return f=i,T().$$.after_update.push(f),u=ht,h=r,T().$$.context.set(u,h),t.$$set=t=>{"stores"in t&&n(5,r=t.stores),"error"in t&&n(0,o=t.error),"status"in t&&n(1,s=t.status),"segments"in t&&n(2,l=t.segments),"level0"in t&&n(3,c=t.level0),"level1"in t&&n(4,a=t.level1),"notify"in t&&n(6,i=t.notify)},[o,s,l,c,a,r,i]}class Yt extends it{constructor(t){super(),at(this,t,Wt,Kt,l,{stores:5,error:0,status:1,segments:2,level0:3,level1:4,notify:6})}}const Xt=[],Zt=[{js:()=>Promise.all([import("./index.39aa9431.js"),__inject_styles(["client-fc448987.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./summary.6e485d7e.js"),__inject_styles(["client-fc448987.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./about.262325af.js"),__inject_styles(["client-fc448987.css"])]).then((function(t){return t[0]}))}],Qt=[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/summary\/?$/,parts:[{i:1}]},{pattern:/^\/about\/?$/,parts:[{i:2}]}];
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function te(t,e,n,r){return new(n||(n=Promise))((function(o,s){function l(t){try{a(r.next(t))}catch(t){s(t)}}function c(t){try{a(r.throw(t))}catch(t){s(t)}}function a(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(l,c)}a((r=r.apply(t,e||[])).next())}))}function ee(t){for(;t&&"A"!==t.nodeName.toUpperCase();)t=t.parentNode;return t}let ne,re=1;const oe="undefined"!=typeof history?history:{pushState:()=>{},replaceState:()=>{},scrollRestoration:"auto"},se={};let le,ce;function ae(t){const e=Object.create(null);return t.length>0&&t.slice(1).split("&").forEach((t=>{const[,n,r=""]=/([^=]*)(?:=(.*))?/.exec(decodeURIComponent(t.replace(/\+/g," ")));"string"==typeof e[n]&&(e[n]=[e[n]]),"object"==typeof e[n]?e[n].push(r):e[n]=r})),e}function ie(t){if(t.origin!==location.origin)return null;if(!t.pathname.startsWith(le))return null;let e=t.pathname.slice(le.length);if(""===e&&(e="/"),!Xt.some((t=>t.test(e))))for(let n=0;n<Qt.length;n+=1){const r=Qt[n],o=r.pattern.exec(e);if(o){const n=ae(t.search),s=r.parts[r.parts.length-1],l=s.params?s.params(o):{},c={host:location.host,path:e,query:n,params:l};return{href:t.href,route:r,match:o,page:c}}}}function fe(t){if(1!==function(t){return null===t.which?t.button:t.which}(t))return;if(t.metaKey||t.ctrlKey||t.shiftKey||t.altKey)return;if(t.defaultPrevented)return;const e=ee(t.target);if(!e)return;if(!e.href)return;const n="object"==typeof e.href&&"SVGAnimatedString"===e.href.constructor.name,r=String(n?e.href.baseVal:e.href);if(r===location.href)return void(location.hash||t.preventDefault());if(e.hasAttribute("download")||"external"===e.getAttribute("rel"))return;if(n?e.target.baseVal:e.target)return;const o=new URL(r);if(o.pathname===location.pathname&&o.search===location.search)return;const s=ie(o);if(s){de(s,null,e.hasAttribute("sapper:noscroll"),o.hash),t.preventDefault(),oe.pushState({id:ne},"",o.href)}}function ue(){return{x:pageXOffset,y:pageYOffset}}function he(t){if(se[ne]=ue(),t.state){const e=ie(new URL(location.href));e?de(e,t.state.id):location.href=location.href}else re=re+1,function(t){ne=t}(re),oe.replaceState({id:ne},"",location.href)}function de(t,e,n,r){return te(this,void 0,void 0,(function*(){const o=!!e;if(o)ne=e;else{const t=ue();se[ne]=t,ne=e=++re,se[ne]=n?t:{x:0,y:0}}if(yield ce(t),document.activeElement&&document.activeElement instanceof HTMLElement&&document.activeElement.blur(),!n){let t,n=se[e];r&&(t=document.getElementById(r.slice(1)),t&&(n={x:0,y:t.getBoundingClientRect().top+scrollY})),se[ne]=n,o||t?scrollTo(n.x,n.y):scrollTo(0,0)}}))}function pe(t){let e=t.baseURI;if(!e){const n=t.getElementsByTagName("base");e=n.length?n[0].href:t.URL}return e}let me,ge=null;function $e(t){const e=ee(t.target);e&&"prefetch"===e.rel&&function(t){const e=ie(new URL(t,pe(document)));if(e)ge&&t===ge.href||(ge={href:t,promise:Ce(e)}),ge.promise}(e.href)}function xe(t){clearTimeout(me),me=setTimeout((()=>{$e(t)}),20)}function be(t,e={noscroll:!1,replaceState:!1}){const n=ie(new URL(t,pe(document)));return n?(oe[e.replaceState?"replaceState":"pushState"]({id:ne},"",t),de(n,null,e.noscroll)):(location.href=t,new Promise((()=>{})))}const ve="undefined"!=typeof __SAPPER__&&__SAPPER__;let ye,Ee,we,_e=!1,Se=[],ke="{}";const Ie={page:function(t){const e=ut(t);let n=!0;return{notify:function(){n=!0,e.update((t=>t))},set:function(t){n=!1,e.set(t)},subscribe:function(t){let r;return e.subscribe((e=>{(void 0===r||n&&e!==r)&&t(r=e)}))}}}({}),preloading:ut(null),session:ut(ve&&ve.session)};let Ae,Le,Oe;function Ne(t,e){const{error:n}=t;return Object.assign({error:n},e)}function Pe(t){return te(this,void 0,void 0,(function*(){ye&&Ie.preloading.set(!0);const e=function(t){return ge&&ge.href===t.href?ge.promise:Ce(t)}(t),n=Ee={},r=yield e,{redirect:o}=r;if(n===Ee)if(o)yield be(o.location,{replaceState:!0});else{const{props:e,branch:n}=r;yield Te(n,e,Ne(e,t.page))}}))}function Te(t,e,n){return te(this,void 0,void 0,(function*(){Ie.page.set(n),Ie.preloading.set(!1),ye?ye.$set(e):(e.stores={page:{subscribe:Ie.page.subscribe},preloading:{subscribe:Ie.preloading.subscribe},session:Ie.session},e.level0={props:yield we},e.notify=Ie.page.notify,ye=new Yt({target:Oe,props:e,hydrate:!0})),Se=t,ke=JSON.stringify(n.query),_e=!0,Le=!1}))}function Ce(t){return te(this,void 0,void 0,(function*(){const{route:e,page:n}=t,r=n.path.split("/").filter(Boolean);let o=null;const s={error:null,status:200,segments:[r[0]]},l={fetch:(t,e)=>fetch(t,e),redirect:(t,e)=>{if(o&&(o.statusCode!==t||o.location!==e))throw new Error("Conflicting redirects");o={statusCode:t,location:e}},error:(t,e)=>{s.error="string"==typeof e?new Error(e):e,s.status=t}};if(!we){const t=()=>({});we=ve.preloaded[0]||t.call(l,{host:n.host,path:n.path,query:n.query,params:{}},Ae)}let c,a=1;try{const o=JSON.stringify(n.query),i=e.pattern.exec(n.path);let f=!1;c=yield Promise.all(e.parts.map(((e,c)=>te(this,void 0,void 0,(function*(){const u=r[c];if(function(t,e,n,r){if(r!==ke)return!0;const o=Se[t];return!!o&&(e!==o.segment||!(!o.match||JSON.stringify(o.match.slice(1,t+2))===JSON.stringify(n.slice(1,t+2)))||void 0)}(c,u,i,o)&&(f=!0),s.segments[a]=r[c+1],!e)return{segment:u};const h=a++;if(!Le&&!f&&Se[c]&&Se[c].part===e.i)return Se[c];f=!1;const{default:d,preload:p}=yield Zt[e.i].js();let m;return m=_e||!ve.preloaded[c+1]?p?yield p.call(l,{host:n.host,path:n.path,query:n.query,params:e.params?e.params(t.match):{}},Ae):{}:ve.preloaded[c+1],s[`level${h}`]={component:d,props:m,segment:u,match:i,part:e.i}})))))}catch(t){s.error=t,s.status=500,c=[]}return{redirect:o,props:s,branch:c}}))}var Ve,Re,De;Ie.session.subscribe((t=>te(void 0,void 0,void 0,(function*(){if(Ae=t,!_e)return;Le=!0;const e=ie(new URL(location.href)),n=Ee={},{redirect:r,props:o,branch:s}=yield Ce(e);n===Ee&&(r?yield be(r.location,{replaceState:!0}):yield Te(s,o,Ne(o,e.page)))})))),Ve={target:document.querySelector("#sapper")},Re=Ve.target,Oe=Re,De=ve.baseUrl,le=De,ce=Pe,"scrollRestoration"in oe&&(oe.scrollRestoration="manual"),addEventListener("beforeunload",(()=>{oe.scrollRestoration="auto"})),addEventListener("load",(()=>{oe.scrollRestoration="manual"})),addEventListener("click",fe),addEventListener("popstate",he),addEventListener("touchstart",$e),addEventListener("mousemove",xe),ve.error?Promise.resolve().then((()=>function(){const{host:t,pathname:e,search:n}=location,{session:r,preloaded:o,status:s,error:l}=ve;we||(we=o&&o[0]);const c={error:l,status:s,session:r,level0:{props:we},level1:{props:{status:s,error:l},component:Gt},segments:o},a=ae(n);Te([],c,{host:t,path:e,query:a,params:{},error:l})}())):Promise.resolve().then((()=>{const{hash:t,href:e}=location;oe.replaceState({id:re},"",e);const n=ie(new URL(location.href));if(n)return de(n,re,!0,t)}));export{L as A,u as B,s as C,o as D,v as E,t as F,C as G,D as H,O as I,A as J,nt as K,H as L,it as S,yt as T,$ as a,w as b,_ as c,p as d,E as e,d as f,g,b as h,at as i,rt as j,k,ot as l,h as m,st as n,y as o,Q as p,lt as q,x as r,l as s,Z as t,S as u,I as v,V as w,Y as x,X as y,m as z};

import __inject_styles from './inject_styles.5607aec6.js';