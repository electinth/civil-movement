function t(){}function e(t,e){for(const n in e)t[n]=e[n];return t}function n(t){return t()}function r(){return Object.create(null)}function o(t){t.forEach(n)}function s(t){return"function"==typeof t}function l(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function c(t,e,n,r){if(t){const o=a(t,e,n,r);return t[0](o)}}function a(t,n,r,o){return t[1]&&o?e(r.ctx.slice(),t[1](o(n))):r.ctx}function i(t,e,n,r,o,s,l){const c=function(t,e,n,r){if(t[2]&&r){const o=t[2](r(n));if(void 0===e.dirty)return o;if("object"==typeof o){const t=[],n=Math.max(e.dirty.length,o.length);for(let r=0;r<n;r+=1)t[r]=e.dirty[r]|o[r];return t}return e.dirty|o}return e.dirty}(e,r,o,s);if(c){const o=a(e,n,r,l);t.p(o,c)}}function f(e){return e&&s(e.destroy)?e.destroy:t}function u(t,e){t.appendChild(e)}function h(t,e,n){t.insertBefore(e,n||null)}function d(t){t.parentNode.removeChild(t)}function p(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function m(t){return document.createElement(t)}function g(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function $(t){return document.createTextNode(t)}function b(){return $(" ")}function v(){return $("")}function x(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function y(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function E(t){return Array.from(t.childNodes)}function w(t,e,n,r){for(let r=0;r<t.length;r+=1){const o=t[r];if(o.nodeName===e){let e=0;const s=[];for(;e<o.attributes.length;){const t=o.attributes[e++];n[t.name]||s.push(t.name)}for(let t=0;t<s.length;t++)o.removeAttribute(s[t]);return t.splice(r,1)[0]}}return r?g(e):m(e)}function _(t,e){for(let n=0;n<t.length;n+=1){const r=t[n];if(3===r.nodeType)return r.data=""+e,t.splice(n,1)[0]}return $(e)}function S(t){return _(t," ")}function k(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function I(t,e,n){t.classList[n?"add":"remove"](e)}function A(t,e=document.body){return Array.from(e.querySelectorAll(t))}let L;function O(t){L=t}function N(){if(!L)throw new Error("Function called outside component initialization");return L}function P(t){N().$$.on_mount.push(t)}function T(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach((t=>t(e)))}const C=[],V=[],R=[],D=[],j=Promise.resolve();let U=!1;function M(t){R.push(t)}function q(t){D.push(t)}let B=!1;const H=new Set;function G(){if(!B){B=!0;do{for(let t=0;t<C.length;t+=1){const e=C[t];O(e),J(e.$$)}for(O(null),C.length=0;V.length;)V.pop()();for(let t=0;t<R.length;t+=1){const e=R[t];H.has(e)||(H.add(e),e())}R.length=0}while(C.length);for(;D.length;)D.pop()();U=!1,B=!1,H.clear()}}function J(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(M)}}const F=new Set;let z;function K(){z={r:0,c:[],p:z}}function W(){z.r||o(z.c),z=z.p}function Y(t,e){t&&t.i&&(F.delete(t),t.i(e))}function X(t,e,n,r){if(t&&t.o){if(F.has(t))return;F.add(t),z.c.push((()=>{F.delete(t),r&&(n&&t.d(1),r())})),t.o(e)}}function Z(t,e){const n={},r={},o={$$scope:1};let s=t.length;for(;s--;){const l=t[s],c=e[s];if(c){for(const t in l)t in c||(r[t]=1);for(const t in c)o[t]||(n[t]=c[t],o[t]=1);t[s]=c}else for(const t in l)o[t]=1}for(const t in r)t in n||(n[t]=void 0);return n}function Q(t){return"object"==typeof t&&null!==t?t:{}}function tt(t,e,n){const r=t.$$.props[e];void 0!==r&&(t.$$.bound[r]=n,n(t.$$.ctx[r]))}function et(t){t&&t.c()}function nt(t,e){t&&t.l(e)}function rt(t,e,r){const{fragment:l,on_mount:c,on_destroy:a,after_update:i}=t.$$;l&&l.m(e,r),M((()=>{const e=c.map(n).filter(s);a?a.push(...e):o(e),t.$$.on_mount=[]})),i.forEach(M)}function ot(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function st(t,e){-1===t.$$.dirty[0]&&(C.push(t),U||(U=!0,j.then(G)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function lt(e,n,s,l,c,a,i=[-1]){const f=L;O(e);const u=n.props||{},h=e.$$={fragment:null,ctx:null,props:a,update:t,not_equal:c,bound:r(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(f?f.$$.context:[]),callbacks:r(),dirty:i,skip_bound:!1};let p=!1;if(h.ctx=s?s(e,u,((t,n,...r)=>{const o=r.length?r[0]:n;return h.ctx&&c(h.ctx[t],h.ctx[t]=o)&&(!h.skip_bound&&h.bound[t]&&h.bound[t](o),p&&st(e,t)),n})):[],h.update(),p=!0,o(h.before_update),h.fragment=!!l&&l(h.ctx),n.target){if(n.hydrate){const t=E(n.target);h.fragment&&h.fragment.l(t),t.forEach(d)}else h.fragment&&h.fragment.c();n.intro&&Y(e.$$.fragment),rt(e,n.target,n.anchor),G()}O(f)}class ct{$destroy(){ot(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const at=[];function it(e,n=t){let r;const o=[];function s(t){if(l(e,t)&&(e=t,r)){const t=!at.length;for(let t=0;t<o.length;t+=1){const n=o[t];n[1](),at.push(n,e)}if(t){for(let t=0;t<at.length;t+=2)at[t][0](at[t+1]);at.length=0}}}return{set:s,update:function(t){s(t(e))},subscribe:function(l,c=t){const a=[l,c];return o.push(a),1===o.length&&(r=n(s)||t),l(e),()=>{const t=o.indexOf(a);-1!==t&&o.splice(t,1),0===o.length&&(r(),r=null)}}}}const ft={};function ut(t){let e,n,r;const o=t[4].default,s=c(o,t,t[3],null);return{c(){e=m("p"),s&&s.c(),this.h()},l(t){e=w(t,"P",{class:!0});var n=E(e);s&&s.l(n),n.forEach(d),this.h()},h(){y(e,"class",n="font-subtitle "+t[2](t[0])),I(e,"font-semibold",t[0].includes("subtitle")&&t[1]),I(e,"font-bold",t[0].includes("body")&&t[1])},m(t,n){h(t,e,n),s&&s.m(e,null),r=!0},p(t,l){s&&s.p&&8&l&&i(s,o,t,t[3],l,null,null),(!r||1&l&&n!==(n="font-subtitle "+t[2](t[0])))&&y(e,"class",n),3&l&&I(e,"font-semibold",t[0].includes("subtitle")&&t[1]),3&l&&I(e,"font-bold",t[0].includes("body")&&t[1])},i(t){r||(Y(s,t),r=!0)},o(t){X(s,t),r=!1},d(t){t&&d(e),s&&s.d(t)}}}function ht(t){let e,n;const r=t[4].default,o=c(r,t,t[3],null);return{c(){e=m("h5"),o&&o.c(),this.h()},l(t){e=w(t,"H5",{class:!0});var n=E(e);o&&o.l(n),n.forEach(d),this.h()},h(){y(e,"class","font-heading text-12 md:text-16"),I(e,"font-black",t[1])},m(t,r){h(t,e,r),o&&o.m(e,null),n=!0},p(t,n){o&&o.p&&8&n&&i(o,r,t,t[3],n,null,null),2&n&&I(e,"font-black",t[1])},i(t){n||(Y(o,t),n=!0)},o(t){X(o,t),n=!1},d(t){t&&d(e),o&&o.d(t)}}}function dt(t){let e,n;const r=t[4].default,o=c(r,t,t[3],null);return{c(){e=m("h4"),o&&o.c(),this.h()},l(t){e=w(t,"H4",{class:!0});var n=E(e);o&&o.l(n),n.forEach(d),this.h()},h(){y(e,"class","font-heading text-14 md:text-18"),I(e,"font-black",t[1])},m(t,r){h(t,e,r),o&&o.m(e,null),n=!0},p(t,n){o&&o.p&&8&n&&i(o,r,t,t[3],n,null,null),2&n&&I(e,"font-black",t[1])},i(t){n||(Y(o,t),n=!0)},o(t){X(o,t),n=!1},d(t){t&&d(e),o&&o.d(t)}}}function pt(t){let e,n;const r=t[4].default,o=c(r,t,t[3],null);return{c(){e=m("h3"),o&&o.c(),this.h()},l(t){e=w(t,"H3",{class:!0});var n=E(e);o&&o.l(n),n.forEach(d),this.h()},h(){y(e,"class","font-heading text-16 md:text-21"),I(e,"font-black",t[1])},m(t,r){h(t,e,r),o&&o.m(e,null),n=!0},p(t,n){o&&o.p&&8&n&&i(o,r,t,t[3],n,null,null),2&n&&I(e,"font-black",t[1])},i(t){n||(Y(o,t),n=!0)},o(t){X(o,t),n=!1},d(t){t&&d(e),o&&o.d(t)}}}function mt(t){let e,n;const r=t[4].default,o=c(r,t,t[3],null);return{c(){e=m("h2"),o&&o.c(),this.h()},l(t){e=w(t,"H2",{class:!0});var n=E(e);o&&o.l(n),n.forEach(d),this.h()},h(){y(e,"class","font-heading text-18 md:text-24"),I(e,"font-black",t[1])},m(t,r){h(t,e,r),o&&o.m(e,null),n=!0},p(t,n){o&&o.p&&8&n&&i(o,r,t,t[3],n,null,null),2&n&&I(e,"font-black",t[1])},i(t){n||(Y(o,t),n=!0)},o(t){X(o,t),n=!1},d(t){t&&d(e),o&&o.d(t)}}}function gt(t){let e,n;const r=t[4].default,o=c(r,t,t[3],null);return{c(){e=m("h1"),o&&o.c(),this.h()},l(t){e=w(t,"H1",{class:!0});var n=E(e);o&&o.l(n),n.forEach(d),this.h()},h(){y(e,"class","font-heading text-21 md:text-36"),I(e,"font-black",t[1])},m(t,r){h(t,e,r),o&&o.m(e,null),n=!0},p(t,n){o&&o.p&&8&n&&i(o,r,t,t[3],n,null,null),2&n&&I(e,"font-black",t[1])},i(t){n||(Y(o,t),n=!0)},o(t){X(o,t),n=!1},d(t){t&&d(e),o&&o.d(t)}}}function $t(t){let e,n,r,o;const s=[gt,mt,pt,dt,ht,ut],l=[];function c(t,e){return"h1"===t[0]?0:"h2"===t[0]?1:"h3"===t[0]?2:"h4"===t[0]?3:"h5"===t[0]?4:5}return e=c(t),n=l[e]=s[e](t),{c(){n.c(),r=v()},l(t){n.l(t),r=v()},m(t,n){l[e].m(t,n),h(t,r,n),o=!0},p(t,[o]){let a=e;e=c(t),e===a?l[e].p(t,o):(K(),X(l[a],1,1,(()=>{l[a]=null})),W(),n=l[e],n?n.p(t,o):(n=l[e]=s[e](t),n.c()),Y(n,1),n.m(r.parentNode,r))},i(t){o||(Y(n),o=!0)},o(t){X(n),o=!1},d(t){l[e].d(t),t&&d(r)}}}function bt(t,e,n){let{$$slots:r={},$$scope:o}=e,{as:s}=e,{bold:l=!1}=e;return t.$$set=t=>{"as"in t&&n(0,s=t.as),"bold"in t&&n(1,l=t.bold),"$$scope"in t&&n(3,o=t.$$scope)},[s,l,t=>{switch(t){case"subtitle1":return"font-subtitle text-18 md:text-24";case"subtitle2":return"font-subtitle text-16 md:text-18";case"subtitle3":return"font-subtitle text-14 md:text-16";case"subtitle4":return"font-subtitle text-12 md:text-14";case"subtitle5":return"font-subtitle text-10 md:text-12";case"body1":return"font-body text-15 md:text-17";case"body2":return"font-body text-12 md:text-14"}},o,r]}class vt extends ct{constructor(t){super(),lt(this,t,bt,$t,l,{as:0,bold:1})}}function xt(t,e,n){const r=t.slice();return r[1]=e[n].href,r[2]=e[n].label,r}function yt(t){let e;return{c(){e=$("CIVIL MOVEMENT 2020")},l(t){e=_(t,"CIVIL MOVEMENT 2020")},m(t,n){h(t,e,n)},d(t){t&&d(e)}}}function Et(e){let n,r=e[2]+"";return{c(){n=$(r)},l(t){n=_(t,r)},m(t,e){h(t,n,e)},p:t,d(t){t&&d(n)}}}function wt(t){let e,n,r,o;return n=new vt({props:{as:"subtitle5",bold:!0,$$slots:{default:[Et]},$$scope:{ctx:t}}}),{c(){e=m("a"),et(n.$$.fragment),r=b(),this.h()},l(t){e=w(t,"A",{href:!0,alt:!0,class:!0});var o=E(e);nt(n.$$.fragment,o),r=S(o),o.forEach(d),this.h()},h(){y(e,"href",t[1]),y(e,"alt",t[2]),y(e,"class","my-auto px-2 py-1 rounded-full hover:bg-gray hover:text-white")},m(t,s){h(t,e,s),rt(n,e,null),u(e,r),o=!0},p(t,e){const r={};32&e&&(r.$$scope={dirty:e,ctx:t}),n.$set(r)},i(t){o||(Y(n.$$.fragment,t),o=!0)},o(t){X(n.$$.fragment,t),o=!1},d(t){t&&d(e),ot(n)}}}function _t(t){let e,n,r,o,s,l,c,a,i,f,g,$;i=new vt({props:{as:"h3",$$slots:{default:[yt]},$$scope:{ctx:t}}});let v=t[0],x=[];for(let e=0;e<v.length;e+=1)x[e]=wt(xt(t,v,e));const _=t=>X(x[t],1,1,(()=>{x[t]=null}));return{c(){e=m("div"),n=m("div"),r=m("a"),o=m("img"),l=b(),c=m("div"),a=m("a"),et(i.$$.fragment),f=b(),g=m("div");for(let t=0;t<x.length;t+=1)x[t].c();this.h()},l(t){e=w(t,"DIV",{class:!0});var s=E(e);n=w(s,"DIV",{class:!0});var u=E(n);r=w(u,"A",{href:!0,class:!0});var h=E(r);o=w(h,"IMG",{src:!0,alt:!0,class:!0}),h.forEach(d),u.forEach(d),l=S(s),c=w(s,"DIV",{class:!0});var p=E(c);a=w(p,"A",{href:!0});var m=E(a);nt(i.$$.fragment,m),m.forEach(d),p.forEach(d),f=S(s),g=w(s,"DIV",{class:!0});var $=E(g);for(let t=0;t<x.length;t+=1)x[t].l($);$.forEach(d),s.forEach(d),this.h()},h(){o.src!==(s="images/logo-elect-header.svg")&&y(o,"src","images/logo-elect-header.svg"),y(o,"alt","ELECT"),y(o,"class","h-4 md:h-5"),y(r,"href","/"),y(r,"class","h-4 md:h-5 my-auto"),y(n,"class","md:flex-1 flex"),y(a,"href","/"),y(c,"class","hidden md:flex"),y(g,"class","flex-1 flex justify-end space-x-1"),y(e,"class","flex flex-row py-2 px-3 bg-white")},m(t,s){h(t,e,s),u(e,n),u(n,r),u(r,o),u(e,l),u(e,c),u(c,a),rt(i,a,null),u(e,f),u(e,g);for(let t=0;t<x.length;t+=1)x[t].m(g,null);$=!0},p(t,[e]){const n={};if(32&e&&(n.$$scope={dirty:e,ctx:t}),i.$set(n),1&e){let n;for(v=t[0],n=0;n<v.length;n+=1){const r=xt(t,v,n);x[n]?(x[n].p(r,e),Y(x[n],1)):(x[n]=wt(r),x[n].c(),Y(x[n],1),x[n].m(g,null))}for(K(),n=v.length;n<x.length;n+=1)_(n);W()}},i(t){if(!$){Y(i.$$.fragment,t);for(let t=0;t<v.length;t+=1)Y(x[t]);$=!0}},o(t){X(i.$$.fragment,t),x=x.filter(Boolean);for(let t=0;t<x.length;t+=1)X(x[t]);$=!1},d(t){t&&d(e),ot(i),p(x,t)}}}function St(t){return[[{label:"Explore",href:"/"},{label:"Summary",href:"/summary"},{label:"About",href:"/about"}]]}class kt extends ct{constructor(t){super(),lt(this,t,St,_t,l,{})}}function It(t,e,n){const r=t.slice();return r[3]=e[n].image,r[4]=e[n].alt,r[5]=e[n].url,r}function At(t,e,n){const r=t.slice();return r[8]=e[n].text,r[9]=e[n].link,r}function Lt(t,e,n){const r=t.slice();return r[3]=e[n].image,r[12]=e[n].imageMd,r[4]=e[n].alt,r[5]=e[n].url,r}function Ot(e){let n,r,o,s,l,c,a;return{c(){n=m("a"),r=m("img"),s=b(),l=m("img"),a=b(),this.h()},l(t){n=w(t,"A",{href:!0,target:!0,rel:!0});var e=E(n);r=w(e,"IMG",{src:!0,alt:!0,class:!0}),s=S(e),l=w(e,"IMG",{src:!0,alt:!0,class:!0}),a=S(e),e.forEach(d),this.h()},h(){r.src!==(o=e[3])&&y(r,"src",o),y(r,"alt",e[4]),y(r,"class","md:hidden h-5 md:h-6"),l.src!==(c=e[12])&&y(l,"src",c),y(l,"alt",e[4]),y(l,"class","hidden md:block h-4 lg:h-6"),y(n,"href",e[5]),y(n,"target","_blank"),y(n,"rel","noopener noreferrer")},m(t,e){h(t,n,e),u(n,r),u(n,s),u(n,l),u(n,a)},p:t,d(t){t&&d(n)}}}function Nt(e){let n,r,o,s,l=e[8]+"";return{c(){n=m("div"),r=m("a"),o=$(l),s=b(),this.h()},l(t){n=w(t,"DIV",{class:!0});var e=E(n);r=w(e,"A",{href:!0,class:!0});var c=E(r);o=_(c,l),c.forEach(d),s=S(e),e.forEach(d),this.h()},h(){y(r,"href",e[9]),y(r,"class","block hover:bg-white p-1 hover:text-black font-heading text-12 md:text-14 lg:text-16"),y(n,"class","flex justify-start lg:justify-center")},m(t,e){h(t,n,e),u(n,r),u(r,o),u(n,s)},p:t,d(t){t&&d(n)}}}function Pt(e){let n,r,o,s;return{c(){n=m("a"),r=m("img"),s=b(),this.h()},l(t){n=w(t,"A",{href:!0,target:!0,rel:!0});var e=E(n);r=w(e,"IMG",{src:!0,alt:!0,class:!0}),s=S(e),e.forEach(d),this.h()},h(){r.src!==(o=e[3])&&y(r,"src",o),y(r,"alt",e[4]),y(r,"class","h-4 m-2"),y(n,"href",e[5]),y(n,"target","_blank"),y(n,"rel","noopener noreferrer")},m(t,e){h(t,n,e),u(n,r),u(n,s)},p:t,d(t){t&&d(n)}}}function Tt(e){let n,r,o,s,l,c,a,i,f,g,v,x,k,I,A,L,O,N,P,T,C,V,R,D,j,U,M,q,B,H,G,J=e[1],F=[];for(let t=0;t<J.length;t+=1)F[t]=Ot(Lt(e,J,t));let z=e[0],K=[];for(let t=0;t<z.length;t+=1)K[t]=Nt(At(e,z,t));let W=e[2],Y=[];for(let t=0;t<W.length;t+=1)Y[t]=Pt(It(e,W,t));return{c(){n=m("div"),r=m("div"),o=m("div"),s=m("a"),l=m("img"),a=b(),i=m("div");for(let t=0;t<F.length;t+=1)F[t].c();f=b(),g=m("div");for(let t=0;t<K.length;t+=1)K[t].c();v=b(),x=m("div"),k=m("div"),I=m("p"),A=$("ABOUT US"),L=b(),O=m("a"),N=$("เราคือใคร.. ทำไมต้อง Elect?"),P=b(),T=m("div"),C=m("p"),V=$("CONTACT US"),R=b(),D=m("a"),j=$("E-mail : contact@elect.in.th"),U=b(),M=m("div"),q=m("p"),B=$("FOLLOW US"),H=b(),G=m("div");for(let t=0;t<Y.length;t+=1)Y[t].c();this.h()},l(t){n=w(t,"DIV",{class:!0});var e=E(n);r=w(e,"DIV",{class:!0});var c=E(r);o=w(c,"DIV",{class:!0});var u=E(o);s=w(u,"A",{href:!0,class:!0});var h=E(s);l=w(h,"IMG",{src:!0,alt:!0,class:!0}),h.forEach(d),u.forEach(d),a=S(c),i=w(c,"DIV",{class:!0});var p=E(i);for(let t=0;t<F.length;t+=1)F[t].l(p);p.forEach(d),c.forEach(d),f=S(e),g=w(e,"DIV",{class:!0});var m=E(g);for(let t=0;t<K.length;t+=1)K[t].l(m);m.forEach(d),v=S(e),x=w(e,"DIV",{class:!0});var $=E(x);k=w($,"DIV",{class:!0});var b=E(k);I=w(b,"P",{class:!0});var y=E(I);A=_(y,"ABOUT US"),y.forEach(d),L=S(b),O=w(b,"A",{href:!0,class:!0});var J=E(O);N=_(J,"เราคือใคร.. ทำไมต้อง Elect?"),J.forEach(d),b.forEach(d),P=S($),T=w($,"DIV",{class:!0});var z=E(T);C=w(z,"P",{class:!0});var W=E(C);V=_(W,"CONTACT US"),W.forEach(d),R=S(z),D=w(z,"A",{href:!0,class:!0});var X=E(D);j=_(X,"E-mail : contact@elect.in.th"),X.forEach(d),z.forEach(d),U=S($),M=w($,"DIV",{class:!0});var Z=E(M);q=w(Z,"P",{class:!0});var Q=E(q);B=_(Q,"FOLLOW US"),Q.forEach(d),H=S(Z),G=w(Z,"DIV",{class:!0});var tt=E(G);for(let t=0;t<Y.length;t+=1)Y[t].l(tt);tt.forEach(d),Z.forEach(d),$.forEach(d),e.forEach(d),this.h()},h(){l.src!==(c="images/logo-elect-footer.png")&&y(l,"src","images/logo-elect-footer.png"),y(l,"alt","ELECT"),y(l,"class","w-20 md:w-28 lg:w-32 h-auto"),y(s,"href","https://elect.in.th"),y(s,"class","mb-auto"),y(o,"class","flex-1 flex"),y(i,"class","flex-1 md:flex-grow-0 flex flex-row space-x-4"),y(r,"class","col-span-2 lg:col-span-1 flex flex-row md:flex-col mb-8 md:mb-0"),y(g,"class","flex-1 flex flex-col justify-between md:text-center"),y(I,"class","font-heading text-10 md:text-12 lg:text-14 font-black"),y(O,"href","https://elect.in.th/about/"),y(O,"class","hover:underline text-10 md:text-11 lg:text-12"),y(k,"class","flex flex-col space-y-1"),y(C,"class","font-heading text-10 md:text-12 lg:text-14 font-black"),y(D,"href","mailto:contact@elect.in.th"),y(D,"class","hover:underline text-10 md:text-11 lg:text-12"),y(T,"class","flex flex-col space-y-1"),y(q,"class","font-heading text-10 md:text-12 lg:text-14 font-black"),y(G,"class","flex flex-row"),y(M,"class","flex flex-col space-y-1"),y(x,"class","flex flex-col space-y-6 md:ml-auto"),y(n,"class","grid grid-cols-2 md:grid-cols-4 lg:grid-cols-3 px-8 py-16 bg-black text-white")},m(t,e){h(t,n,e),u(n,r),u(r,o),u(o,s),u(s,l),u(r,a),u(r,i);for(let t=0;t<F.length;t+=1)F[t].m(i,null);u(n,f),u(n,g);for(let t=0;t<K.length;t+=1)K[t].m(g,null);u(n,v),u(n,x),u(x,k),u(k,I),u(I,A),u(k,L),u(k,O),u(O,N),u(x,P),u(x,T),u(T,C),u(C,V),u(T,R),u(T,D),u(D,j),u(x,U),u(x,M),u(M,q),u(q,B),u(M,H),u(M,G);for(let t=0;t<Y.length;t+=1)Y[t].m(G,null)},p(t,[e]){if(2&e){let n;for(J=t[1],n=0;n<J.length;n+=1){const r=Lt(t,J,n);F[n]?F[n].p(r,e):(F[n]=Ot(r),F[n].c(),F[n].m(i,null))}for(;n<F.length;n+=1)F[n].d(1);F.length=J.length}if(1&e){let n;for(z=t[0],n=0;n<z.length;n+=1){const r=At(t,z,n);K[n]?K[n].p(r,e):(K[n]=Nt(r),K[n].c(),K[n].m(g,null))}for(;n<K.length;n+=1)K[n].d(1);K.length=z.length}if(4&e){let n;for(W=t[2],n=0;n<W.length;n+=1){const r=It(t,W,n);Y[n]?Y[n].p(r,e):(Y[n]=Pt(r),Y[n].c(),Y[n].m(G,null))}for(;n<Y.length;n+=1)Y[n].d(1);Y.length=W.length}},i:t,o:t,d(t){t&&d(n),p(F,t),p(K,t),p(Y,t)}}}function Ct(t){return[[{text:"VISUALIZATION",link:"https://elect.in.th/visualization/"},{text:"TOOLS",link:"https://elect.in.th/tool/"},{text:"ARTICLE",link:"https://elect.in.th/article/"},{text:"INFOGRAPHIC",link:"https://elect.in.th/infographic/"},{text:"DOWNLOAD DATA",link:"https://elect.in.th/download-data/"}],[{image:"images/logo-punchup.svg",imageMd:"images/logo-punchup-full.svg",alt:"PunchUp",url:"https://punchup.world/"},{image:"images/logo-boonmee.svg",imageMd:"images/logo-boonme-full.svg",alt:"BoonmeLab",url:"https://www.boonmeelab.com/"},{image:"images/logo-ilaw.png",imageMd:"images/logo-ilaw.png",alt:"iLaw",url:"https://ilaw.or.th"}],[{image:"images/follow-facebook.svg",alt:"Facebook",url:"https://www.facebook.com/electinth/"},{image:"images/follow-twitter.svg",alt:"Twitter",url:"https://twitter.com/electinth/"}]]}class Vt extends ct{constructor(t){super(),lt(this,t,Ct,Tt,l,{})}}function Rt(t){let e,n,r,o,s,l,a;n=new kt({});const f=t[1].default,p=c(f,t,t[0],null);return l=new Vt({}),{c(){e=m("div"),et(n.$$.fragment),r=b(),o=m("main"),p&&p.c(),s=b(),et(l.$$.fragment),this.h()},l(t){e=w(t,"DIV",{class:!0});var c=E(e);nt(n.$$.fragment,c),r=S(c),o=w(c,"MAIN",{class:!0});var a=E(o);p&&p.l(a),a.forEach(d),s=S(c),nt(l.$$.fragment,c),c.forEach(d),this.h()},h(){y(o,"class","flex-1"),y(e,"class","flex flex-col min-h-screen")},m(t,c){h(t,e,c),rt(n,e,null),u(e,r),u(e,o),p&&p.m(o,null),u(e,s),rt(l,e,null),a=!0},p(t,[e]){p&&p.p&&1&e&&i(p,f,t,t[0],e,null,null)},i(t){a||(Y(n.$$.fragment,t),Y(p,t),Y(l.$$.fragment,t),a=!0)},o(t){X(n.$$.fragment,t),X(p,t),X(l.$$.fragment,t),a=!1},d(t){t&&d(e),ot(n),p&&p.d(t),ot(l)}}}function Dt(t,e,n){let{$$slots:r={},$$scope:o}=e;return t.$$set=t=>{"$$scope"in t&&n(0,o=t.$$scope)},[o,r]}class jt extends ct{constructor(t){super(),lt(this,t,Dt,Rt,l,{})}}function Ut(t){let e,n,r=t[1].stack+"";return{c(){e=m("pre"),n=$(r)},l(t){e=w(t,"PRE",{});var o=E(e);n=_(o,r),o.forEach(d)},m(t,r){h(t,e,r),u(e,n)},p(t,e){2&e&&r!==(r=t[1].stack+"")&&k(n,r)},d(t){t&&d(e)}}}function Mt(e){let n,r,o,s,l,c,a,i,f,p=e[1].message+"";document.title=n=e[0];let g=e[2]&&e[1].stack&&Ut(e);return{c(){r=b(),o=m("h1"),s=$(e[0]),l=b(),c=m("p"),a=$(p),i=b(),g&&g.c(),f=v(),this.h()},l(t){A('[data-svelte="svelte-1o9r2ue"]',document.head).forEach(d),r=S(t),o=w(t,"H1",{class:!0});var n=E(o);s=_(n,e[0]),n.forEach(d),l=S(t),c=w(t,"P",{class:!0});var u=E(c);a=_(u,p),u.forEach(d),i=S(t),g&&g.l(t),f=v(),this.h()},h(){y(o,"class","svelte-q86zst"),y(c,"class","svelte-q86zst")},m(t,e){h(t,r,e),h(t,o,e),u(o,s),h(t,l,e),h(t,c,e),u(c,a),h(t,i,e),g&&g.m(t,e),h(t,f,e)},p(t,[e]){1&e&&n!==(n=t[0])&&(document.title=n),1&e&&k(s,t[0]),2&e&&p!==(p=t[1].message+"")&&k(a,p),t[2]&&t[1].stack?g?g.p(t,e):(g=Ut(t),g.c(),g.m(f.parentNode,f)):g&&(g.d(1),g=null)},i:t,o:t,d(t){t&&d(r),t&&d(o),t&&d(l),t&&d(c),t&&d(i),g&&g.d(t),t&&d(f)}}}function qt(t,e,n){let{status:r}=e,{error:o}=e;return t.$$set=t=>{"status"in t&&n(0,r=t.status),"error"in t&&n(1,o=t.error)},[r,o,false]}class Bt extends ct{constructor(t){super(),lt(this,t,qt,Mt,l,{status:0,error:1})}}function Ht(t){let n,r,o;const s=[t[4].props];var l=t[4].component;function c(t){let n={};for(let t=0;t<s.length;t+=1)n=e(n,s[t]);return{props:n}}return l&&(n=new l(c())),{c(){n&&et(n.$$.fragment),r=v()},l(t){n&&nt(n.$$.fragment,t),r=v()},m(t,e){n&&rt(n,t,e),h(t,r,e),o=!0},p(t,e){const o=16&e?Z(s,[Q(t[4].props)]):{};if(l!==(l=t[4].component)){if(n){K();const t=n;X(t.$$.fragment,1,0,(()=>{ot(t,1)})),W()}l?(n=new l(c()),et(n.$$.fragment),Y(n.$$.fragment,1),rt(n,r.parentNode,r)):n=null}else l&&n.$set(o)},i(t){o||(n&&Y(n.$$.fragment,t),o=!0)},o(t){n&&X(n.$$.fragment,t),o=!1},d(t){t&&d(r),n&&ot(n,t)}}}function Gt(t){let e,n;return e=new Bt({props:{error:t[0],status:t[1]}}),{c(){et(e.$$.fragment)},l(t){nt(e.$$.fragment,t)},m(t,r){rt(e,t,r),n=!0},p(t,n){const r={};1&n&&(r.error=t[0]),2&n&&(r.status=t[1]),e.$set(r)},i(t){n||(Y(e.$$.fragment,t),n=!0)},o(t){X(e.$$.fragment,t),n=!1},d(t){ot(e,t)}}}function Jt(t){let e,n,r,o;const s=[Gt,Ht],l=[];function c(t,e){return t[0]?0:1}return e=c(t),n=l[e]=s[e](t),{c(){n.c(),r=v()},l(t){n.l(t),r=v()},m(t,n){l[e].m(t,n),h(t,r,n),o=!0},p(t,o){let a=e;e=c(t),e===a?l[e].p(t,o):(K(),X(l[a],1,1,(()=>{l[a]=null})),W(),n=l[e],n?n.p(t,o):(n=l[e]=s[e](t),n.c()),Y(n,1),n.m(r.parentNode,r))},i(t){o||(Y(n),o=!0)},o(t){X(n),o=!1},d(t){l[e].d(t),t&&d(r)}}}function Ft(t){let n,r;const o=[{segment:t[2][0]},t[3].props];let s={$$slots:{default:[Jt]},$$scope:{ctx:t}};for(let t=0;t<o.length;t+=1)s=e(s,o[t]);return n=new jt({props:s}),{c(){et(n.$$.fragment)},l(t){nt(n.$$.fragment,t)},m(t,e){rt(n,t,e),r=!0},p(t,[e]){const r=12&e?Z(o,[4&e&&{segment:t[2][0]},8&e&&Q(t[3].props)]):{};147&e&&(r.$$scope={dirty:e,ctx:t}),n.$set(r)},i(t){r||(Y(n.$$.fragment,t),r=!0)},o(t){X(n.$$.fragment,t),r=!1},d(t){ot(n,t)}}}function zt(t,e,n){let{stores:r}=e,{error:o}=e,{status:s}=e,{segments:l}=e,{level0:c}=e,{level1:a=null}=e,{notify:i}=e;var f,u,h;return f=i,N().$$.after_update.push(f),u=ft,h=r,N().$$.context.set(u,h),t.$$set=t=>{"stores"in t&&n(5,r=t.stores),"error"in t&&n(0,o=t.error),"status"in t&&n(1,s=t.status),"segments"in t&&n(2,l=t.segments),"level0"in t&&n(3,c=t.level0),"level1"in t&&n(4,a=t.level1),"notify"in t&&n(6,i=t.notify)},[o,s,l,c,a,r,i]}class Kt extends ct{constructor(t){super(),lt(this,t,zt,Ft,l,{stores:5,error:0,status:1,segments:2,level0:3,level1:4,notify:6})}}const Wt=[],Yt=[{js:()=>Promise.all([import("./index.1f16d7c0.js"),__inject_styles(["client-fc448987.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./summary.45799489.js"),__inject_styles(["client-fc448987.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./about.09a11d7e.js"),__inject_styles(["client-fc448987.css"])]).then((function(t){return t[0]}))}],Xt=[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/summary\/?$/,parts:[{i:1}]},{pattern:/^\/about\/?$/,parts:[{i:2}]}];
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
function Zt(t,e,n,r){return new(n||(n=Promise))((function(o,s){function l(t){try{a(r.next(t))}catch(t){s(t)}}function c(t){try{a(r.throw(t))}catch(t){s(t)}}function a(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(l,c)}a((r=r.apply(t,e||[])).next())}))}function Qt(t){for(;t&&"A"!==t.nodeName.toUpperCase();)t=t.parentNode;return t}let te,ee=1;const ne="undefined"!=typeof history?history:{pushState:()=>{},replaceState:()=>{},scrollRestoration:"auto"},re={};let oe,se;function le(t){const e=Object.create(null);return t.length>0&&t.slice(1).split("&").forEach((t=>{const[,n,r=""]=/([^=]*)(?:=(.*))?/.exec(decodeURIComponent(t.replace(/\+/g," ")));"string"==typeof e[n]&&(e[n]=[e[n]]),"object"==typeof e[n]?e[n].push(r):e[n]=r})),e}function ce(t){if(t.origin!==location.origin)return null;if(!t.pathname.startsWith(oe))return null;let e=t.pathname.slice(oe.length);if(""===e&&(e="/"),!Wt.some((t=>t.test(e))))for(let n=0;n<Xt.length;n+=1){const r=Xt[n],o=r.pattern.exec(e);if(o){const n=le(t.search),s=r.parts[r.parts.length-1],l=s.params?s.params(o):{},c={host:location.host,path:e,query:n,params:l};return{href:t.href,route:r,match:o,page:c}}}}function ae(t){if(1!==function(t){return null===t.which?t.button:t.which}(t))return;if(t.metaKey||t.ctrlKey||t.shiftKey||t.altKey)return;if(t.defaultPrevented)return;const e=Qt(t.target);if(!e)return;if(!e.href)return;const n="object"==typeof e.href&&"SVGAnimatedString"===e.href.constructor.name,r=String(n?e.href.baseVal:e.href);if(r===location.href)return void(location.hash||t.preventDefault());if(e.hasAttribute("download")||"external"===e.getAttribute("rel"))return;if(n?e.target.baseVal:e.target)return;const o=new URL(r);if(o.pathname===location.pathname&&o.search===location.search)return;const s=ce(o);if(s){ue(s,null,e.hasAttribute("sapper:noscroll"),o.hash),t.preventDefault(),ne.pushState({id:te},"",o.href)}}function ie(){return{x:pageXOffset,y:pageYOffset}}function fe(t){if(re[te]=ie(),t.state){const e=ce(new URL(location.href));e?ue(e,t.state.id):location.href=location.href}else ee=ee+1,function(t){te=t}(ee),ne.replaceState({id:te},"",location.href)}function ue(t,e,n,r){return Zt(this,void 0,void 0,(function*(){const o=!!e;if(o)te=e;else{const t=ie();re[te]=t,te=e=++ee,re[te]=n?t:{x:0,y:0}}if(yield se(t),document.activeElement&&document.activeElement instanceof HTMLElement&&document.activeElement.blur(),!n){let t,n=re[e];r&&(t=document.getElementById(r.slice(1)),t&&(n={x:0,y:t.getBoundingClientRect().top+scrollY})),re[te]=n,o||t?scrollTo(n.x,n.y):scrollTo(0,0)}}))}function he(t){let e=t.baseURI;if(!e){const n=t.getElementsByTagName("base");e=n.length?n[0].href:t.URL}return e}let de,pe=null;function me(t){const e=Qt(t.target);e&&"prefetch"===e.rel&&function(t){const e=ce(new URL(t,he(document)));if(e)pe&&t===pe.href||(pe={href:t,promise:Pe(e)}),pe.promise}(e.href)}function ge(t){clearTimeout(de),de=setTimeout((()=>{me(t)}),20)}function $e(t,e={noscroll:!1,replaceState:!1}){const n=ce(new URL(t,he(document)));return n?(ne[e.replaceState?"replaceState":"pushState"]({id:te},"",t),ue(n,null,e.noscroll)):(location.href=t,new Promise((()=>{})))}const be="undefined"!=typeof __SAPPER__&&__SAPPER__;let ve,xe,ye,Ee=!1,we=[],_e="{}";const Se={page:function(t){const e=it(t);let n=!0;return{notify:function(){n=!0,e.update((t=>t))},set:function(t){n=!1,e.set(t)},subscribe:function(t){let r;return e.subscribe((e=>{(void 0===r||n&&e!==r)&&t(r=e)}))}}}({}),preloading:it(null),session:it(be&&be.session)};let ke,Ie,Ae;function Le(t,e){const{error:n}=t;return Object.assign({error:n},e)}function Oe(t){return Zt(this,void 0,void 0,(function*(){ve&&Se.preloading.set(!0);const e=function(t){return pe&&pe.href===t.href?pe.promise:Pe(t)}(t),n=xe={},r=yield e,{redirect:o}=r;if(n===xe)if(o)yield $e(o.location,{replaceState:!0});else{const{props:e,branch:n}=r;yield Ne(n,e,Le(e,t.page))}}))}function Ne(t,e,n){return Zt(this,void 0,void 0,(function*(){Se.page.set(n),Se.preloading.set(!1),ve?ve.$set(e):(e.stores={page:{subscribe:Se.page.subscribe},preloading:{subscribe:Se.preloading.subscribe},session:Se.session},e.level0={props:yield ye},e.notify=Se.page.notify,ve=new Kt({target:Ae,props:e,hydrate:!0})),we=t,_e=JSON.stringify(n.query),Ee=!0,Ie=!1}))}function Pe(t){return Zt(this,void 0,void 0,(function*(){const{route:e,page:n}=t,r=n.path.split("/").filter(Boolean);let o=null;const s={error:null,status:200,segments:[r[0]]},l={fetch:(t,e)=>fetch(t,e),redirect:(t,e)=>{if(o&&(o.statusCode!==t||o.location!==e))throw new Error("Conflicting redirects");o={statusCode:t,location:e}},error:(t,e)=>{s.error="string"==typeof e?new Error(e):e,s.status=t}};if(!ye){const t=()=>({});ye=be.preloaded[0]||t.call(l,{host:n.host,path:n.path,query:n.query,params:{}},ke)}let c,a=1;try{const o=JSON.stringify(n.query),i=e.pattern.exec(n.path);let f=!1;c=yield Promise.all(e.parts.map(((e,c)=>Zt(this,void 0,void 0,(function*(){const u=r[c];if(function(t,e,n,r){if(r!==_e)return!0;const o=we[t];return!!o&&(e!==o.segment||!(!o.match||JSON.stringify(o.match.slice(1,t+2))===JSON.stringify(n.slice(1,t+2)))||void 0)}(c,u,i,o)&&(f=!0),s.segments[a]=r[c+1],!e)return{segment:u};const h=a++;if(!Ie&&!f&&we[c]&&we[c].part===e.i)return we[c];f=!1;const{default:d,preload:p}=yield Yt[e.i].js();let m;return m=Ee||!be.preloaded[c+1]?p?yield p.call(l,{host:n.host,path:n.path,query:n.query,params:e.params?e.params(t.match):{}},ke):{}:be.preloaded[c+1],s[`level${h}`]={component:d,props:m,segment:u,match:i,part:e.i}})))))}catch(t){s.error=t,s.status=500,c=[]}return{redirect:o,props:s,branch:c}}))}var Te,Ce,Ve;Se.session.subscribe((t=>Zt(void 0,void 0,void 0,(function*(){if(ke=t,!Ee)return;Ie=!0;const e=ce(new URL(location.href)),n=xe={},{redirect:r,props:o,branch:s}=yield Pe(e);n===xe&&(r?yield $e(r.location,{replaceState:!0}):yield Ne(s,o,Le(o,e.page)))})))),Te={target:document.querySelector("#sapper")},Ce=Te.target,Ae=Ce,Ve=be.baseUrl,oe=Ve,se=Oe,"scrollRestoration"in ne&&(ne.scrollRestoration="manual"),addEventListener("beforeunload",(()=>{ne.scrollRestoration="auto"})),addEventListener("load",(()=>{ne.scrollRestoration="manual"})),addEventListener("click",ae),addEventListener("popstate",fe),addEventListener("touchstart",me),addEventListener("mousemove",ge),be.error?Promise.resolve().then((()=>function(){const{host:t,pathname:e,search:n}=location,{session:r,preloaded:o,status:s,error:l}=be;ye||(ye=o&&o[0]);const c={error:l,status:s,session:r,level0:{props:ye},level1:{props:{status:s,error:l},component:Bt},segments:o},a=le(n);Ne([],c,{host:t,path:e,query:a,params:{},error:l})}())):Promise.resolve().then((()=>{const{hash:t,href:e}=location;ne.replaceState({id:ee},"",e);const n=ce(new URL(location.href));if(n)return ue(n,ee,!0,t)}));export{I as A,f as B,s as C,o as D,v as E,t as F,P as G,V as H,A as I,tt as J,q as K,ct as S,vt as T,g as a,E as b,w as c,d,y as e,h as f,m as g,b as h,lt as i,et as j,S as k,nt as l,u as m,rt as n,x as o,X as p,ot as q,$ as r,l as s,Y as t,_ as u,k as v,T as w,K as x,W as y,p as z};

import __inject_styles from './inject_styles.5607aec6.js';