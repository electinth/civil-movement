(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __markAsModule = (target) => __defProp(target, "__esModule", {value: true});
  var __commonJS = (callback, module) => () => {
    if (!module) {
      module = {exports: {}};
      callback(module.exports, module);
    }
    return module.exports;
  };
  var __export = (target, all) => {
    __markAsModule(target);
    for (var name2 in all)
      __defProp(target, name2, {get: all[name2], enumerable: true});
  };
  var __exportStar = (target, module, desc) => {
    __markAsModule(target);
    if (typeof module === "object" || typeof module === "function") {
      for (let key of __getOwnPropNames(module))
        if (!__hasOwnProp.call(target, key) && key !== "default")
          __defProp(target, key, {get: () => module[key], enumerable: !(desc = __getOwnPropDesc(module, key)) || desc.enumerable});
    }
    return target;
  };
  var __toModule = (module) => {
    if (module && module.__esModule)
      return module;
    return __exportStar(__defProp(__create(__getProtoOf(module)), "default", {value: module, enumerable: true}), module);
  };

  // dist/build/_fallback-f7f325a6.js
  var require_fallback_f7f325a6 = __commonJS((exports) => {
    __export(exports, {
      default: () => fallback_f7f325a6_default
    });
    const main = __toModule(require_main());
    function v(s2) {
      let a2, t2, d2, f2, v2, g2, h, m;
      return {c() {
        a2 = main.e("div"), t2 = main.e("div"), t2.textContent = "404", d2 = main.a(), f2 = main.e("div"), v2 = main.t("Page not found.\n    \n    "), g2 = main.e("a"), h = main.t("Go back"), main.b(t2, "class", "huge svelte-s04wto"), main.b(g2, "href", m = s2[0]("../")), main.b(f2, "class", "big"), main.b(a2, "class", "e404 svelte-s04wto");
      }, m(s3, e2) {
        main.c(s3, a2, e2), main.d(a2, t2), main.d(a2, d2), main.d(a2, f2), main.d(f2, v2), main.d(f2, g2), main.d(g2, h);
      }, p(s3, [a3]) {
        1 & a3 && m !== (m = s3[0]("../")) && main.b(g2, "href", m);
      }, i: main.n, o: main.n, d(s3) {
        s3 && main.f(a2);
      }};
    }
    function g(s2, a2, t2) {
      let e2;
      return main.g(s2, main.u, (s3) => t2(0, e2 = s3)), [e2];
    }
    class fallback_f7f325a6_default extends main.S {
      constructor(s2) {
        super(), main.i(this, s2, g, v, main.s, {});
      }
    }
  });

  // dist/build/index-3d453069.js
  var require_index_3d453069 = __commonJS((exports) => {
    __export(exports, {
      default: () => index_3d453069_default
    });
    const main = __toModule(require_main());
    function m(t2) {
      let s2;
      return {c() {
        s2 = main.e("div"), s2.innerHTML = '<h1 class="text-2xl font-bold">Welcome to Routify!</h1> \n  <p>Routify starter template</p>';
      }, m(t3, e2) {
        main.c(t3, s2, e2);
      }, p: main.n, i: main.n, o: main.n, d(t3) {
        t3 && main.f(s2);
      }};
    }
    class d extends main.S {
      constructor(t2) {
        super(), main.i(this, t2, null, m, main.s, {});
      }
    }
    function $(t2) {
      let s2, e2;
      return s2 = new d({}), {c() {
        main.h(s2.$$.fragment);
      }, m(t3, n2) {
        main.m(s2, t3, n2), e2 = true;
      }, p: main.n, i(t3) {
        e2 || (main.j(s2.$$.fragment, t3), e2 = true);
      }, o(t3) {
        main.k(s2.$$.fragment, t3), e2 = false;
      }, d(t3) {
        main.l(s2, t3);
      }};
    }
    function h(t2) {
      return main.o.title = "My Routify app", main.o.description = "Description coming soon...", [];
    }
    class index_3d453069_default extends main.S {
      constructor(t2) {
        super(), main.i(this, t2, h, $, main.s, {});
      }
    }
  });

  // dist/build/_layout-7f056b1b.js
  var require_layout_7f056b1b = __commonJS((exports) => {
    __export(exports, {
      default: () => layout_7f056b1b_default
    });
    const main = __toModule(require_main());
    function c(s2) {
      let t2;
      const e2 = s2[1].default, c2 = main.p(e2, s2, s2[0], null);
      return {c() {
        c2 && c2.c();
      }, m(s3, e3) {
        c2 && c2.m(s3, e3), t2 = true;
      }, p(s3, [t3]) {
        c2 && c2.p && 1 & t3 && main.q(c2, e2, s3, s3[0], t3, null, null);
      }, i(s3) {
        t2 || (main.j(c2, s3), t2 = true);
      }, o(s3) {
        main.k(c2, s3), t2 = false;
      }, d(s3) {
        c2 && c2.d(s3);
      }};
    }
    function u(s2, t2, e2) {
      let {$$slots: n2 = {}, $$scope: o2} = t2;
      return s2.$$set = (s3) => {
        "$$scope" in s3 && e2(0, o2 = s3.$$scope);
      }, [o2, n2];
    }
    class layout_7f056b1b_default extends main.S {
      constructor(s2) {
        super(), main.i(this, s2, u, c, main.s, {});
      }
    }
  });

  // dist/build/main.js
  var require_main = __commonJS((exports) => {
    __export(exports, {
      S: () => X,
      a: () => $,
      b: () => w,
      c: () => h,
      d: () => d,
      e: () => g,
      f: () => m,
      g: () => l,
      h: () => G,
      i: () => Z,
      j: () => K,
      k: () => D,
      l: () => V,
      m: () => Q,
      n: () => t,
      o: () => At,
      p: () => u,
      q: () => f,
      s: () => s,
      t: () => y,
      u: () => Lt
    });
    function t() {
    }
    function e(t2, e2) {
      for (const n2 in e2)
        t2[n2] = e2[n2];
      return t2;
    }
    function n(t2) {
      return t2();
    }
    function o() {
      return Object.create(null);
    }
    function r(t2) {
      t2.forEach(n);
    }
    function i(t2) {
      return typeof t2 == "function";
    }
    function s(t2, e2) {
      return t2 != t2 ? e2 == e2 : t2 !== e2 || t2 && typeof t2 == "object" || typeof t2 == "function";
    }
    function a(e2, ...n2) {
      if (e2 == null)
        return t;
      const o2 = e2.subscribe(...n2);
      return o2.unsubscribe ? () => o2.unsubscribe() : o2;
    }
    function c(t2) {
      let e2;
      return a(t2, (t3) => e2 = t3)(), e2;
    }
    function l(t2, e2, n2) {
      t2.$$.on_destroy.push(a(e2, n2));
    }
    function u(t2, e2, n2, o2) {
      if (t2) {
        const r2 = p(t2, e2, n2, o2);
        return t2[0](r2);
      }
    }
    function p(t2, n2, o2, r2) {
      return t2[1] && r2 ? e(o2.ctx.slice(), t2[1](r2(n2))) : o2.ctx;
    }
    function f(t2, e2, n2, o2, r2, i2, s2) {
      const a2 = function(t3, e3, n3, o3) {
        if (t3[2] && o3) {
          const r3 = t3[2](o3(n3));
          if (e3.dirty === void 0)
            return r3;
          if (typeof r3 == "object") {
            const t4 = [], n4 = Math.max(e3.dirty.length, r3.length);
            for (let o4 = 0; o4 < n4; o4 += 1)
              t4[o4] = e3.dirty[o4] | r3[o4];
            return t4;
          }
          return e3.dirty | r3;
        }
        return e3.dirty;
      }(e2, o2, r2, i2);
      if (a2) {
        const r3 = p(e2, n2, o2, s2);
        t2.p(r3, a2);
      }
    }
    function d(t2, e2) {
      t2.appendChild(e2);
    }
    function h(t2, e2, n2) {
      t2.insertBefore(e2, n2 || null);
    }
    function m(t2) {
      t2.parentNode.removeChild(t2);
    }
    function g(t2) {
      return document.createElement(t2);
    }
    function y(t2) {
      return document.createTextNode(t2);
    }
    function $() {
      return y(" ");
    }
    function b() {
      return y("");
    }
    function w(t2, e2, n2) {
      n2 == null ? t2.removeAttribute(e2) : t2.getAttribute(e2) !== n2 && t2.setAttribute(e2, n2);
    }
    let _;
    function x(t2) {
      _ = t2;
    }
    function v() {
      if (!_)
        throw new Error("Function called outside component initialization");
      return _;
    }
    function k(t2, e2) {
      v().$$.context.set(t2, e2);
    }
    function P(t2) {
      return v().$$.context.get(t2);
    }
    const O = [];
    const E = [];
    const j = [];
    const I = [];
    const S = Promise.resolve();
    let L = false;
    function R() {
      L || (L = true, S.then(T));
    }
    function A() {
      return R(), S;
    }
    function F(t2) {
      j.push(t2);
    }
    let M = false;
    const N = new Set();
    function T() {
      if (!M) {
        M = true;
        do {
          for (let t2 = 0; t2 < O.length; t2 += 1) {
            const e2 = O[t2];
            x(e2), q(e2.$$);
          }
          for (x(null), O.length = 0; E.length; )
            E.pop()();
          for (let t2 = 0; t2 < j.length; t2 += 1) {
            const e2 = j[t2];
            N.has(e2) || (N.add(e2), e2());
          }
          j.length = 0;
        } while (O.length);
        for (; I.length; )
          I.pop()();
        L = false, M = false, N.clear();
      }
    }
    function q(t2) {
      if (t2.fragment !== null) {
        t2.update(), r(t2.before_update);
        const e2 = t2.dirty;
        t2.dirty = [-1], t2.fragment && t2.fragment.p(t2.ctx, e2), t2.after_update.forEach(F);
      }
    }
    const C = new Set();
    let B;
    function U() {
      B = {r: 0, c: [], p: B};
    }
    function H() {
      B.r || r(B.c), B = B.p;
    }
    function K(t2, e2) {
      t2 && t2.i && (C.delete(t2), t2.i(e2));
    }
    function D(t2, e2, n2, o2) {
      if (t2 && t2.o) {
        if (C.has(t2))
          return;
        C.add(t2), B.c.push(() => {
          C.delete(t2), o2 && (n2 && t2.d(1), o2());
        }), t2.o(e2);
      }
    }
    function J(t2, e2) {
      t2.d(1), e2.delete(t2.key);
    }
    function z(t2, e2) {
      D(t2, 1, 1, () => {
        e2.delete(t2.key);
      });
    }
    function W(t2, e2, n2, o2, r2, i2, s2, a2, c2, l2, u2, p2) {
      let f2 = t2.length, d2 = i2.length, h2 = f2;
      const m2 = {};
      for (; h2--; )
        m2[t2[h2].key] = h2;
      const g2 = [], y2 = new Map(), $2 = new Map();
      for (h2 = d2; h2--; ) {
        const t3 = p2(r2, i2, h2), a3 = n2(t3);
        let c3 = s2.get(a3);
        c3 ? o2 && c3.p(t3, e2) : (c3 = l2(a3, t3), c3.c()), y2.set(a3, g2[h2] = c3), a3 in m2 && $2.set(a3, Math.abs(h2 - m2[a3]));
      }
      const b2 = new Set(), w2 = new Set();
      function _2(t3) {
        K(t3, 1), t3.m(a2, u2), s2.set(t3.key, t3), u2 = t3.first, d2--;
      }
      for (; f2 && d2; ) {
        const e3 = g2[d2 - 1], n3 = t2[f2 - 1], o3 = e3.key, r3 = n3.key;
        e3 === n3 ? (u2 = e3.first, f2--, d2--) : y2.has(r3) ? !s2.has(o3) || b2.has(o3) ? _2(e3) : w2.has(r3) ? f2-- : $2.get(o3) > $2.get(r3) ? (w2.add(o3), _2(e3)) : (b2.add(r3), f2--) : (c2(n3, s2), f2--);
      }
      for (; f2--; ) {
        const e3 = t2[f2];
        y2.has(e3.key) || c2(e3, s2);
      }
      for (; d2; )
        _2(g2[d2 - 1]);
      return g2;
    }
    function G(t2) {
      t2 && t2.c();
    }
    function Q(t2, e2, o2) {
      const {fragment: s2, on_mount: a2, on_destroy: c2, after_update: l2} = t2.$$;
      s2 && s2.m(e2, o2), F(() => {
        const e3 = a2.map(n).filter(i);
        c2 ? c2.push(...e3) : r(e3), t2.$$.on_mount = [];
      }), l2.forEach(F);
    }
    function V(t2, e2) {
      const n2 = t2.$$;
      n2.fragment !== null && (r(n2.on_destroy), n2.fragment && n2.fragment.d(e2), n2.on_destroy = n2.fragment = null, n2.ctx = []);
    }
    function Z(e2, n2, i2, s2, a2, c2, l2 = [-1]) {
      const u2 = _;
      x(e2);
      const p2 = n2.props || {}, f2 = e2.$$ = {fragment: null, ctx: null, props: c2, update: t, not_equal: a2, bound: o(), on_mount: [], on_destroy: [], before_update: [], after_update: [], context: new Map(u2 ? u2.$$.context : []), callbacks: o(), dirty: l2, skip_bound: false};
      let d2 = false;
      if (f2.ctx = i2 ? i2(e2, p2, (t2, n3, ...o2) => {
        const r2 = o2.length ? o2[0] : n3;
        return f2.ctx && a2(f2.ctx[t2], f2.ctx[t2] = r2) && (!f2.skip_bound && f2.bound[t2] && f2.bound[t2](r2), d2 && function(t3, e3) {
          t3.$$.dirty[0] === -1 && (O.push(t3), R(), t3.$$.dirty.fill(0)), t3.$$.dirty[e3 / 31 | 0] |= 1 << e3 % 31;
        }(e2, t2)), n3;
      }) : [], f2.update(), d2 = true, r(f2.before_update), f2.fragment = !!s2 && s2(f2.ctx), n2.target) {
        if (n2.hydrate) {
          const t2 = function(t3) {
            return Array.from(t3.childNodes);
          }(n2.target);
          f2.fragment && f2.fragment.l(t2), t2.forEach(m);
        } else
          f2.fragment && f2.fragment.c();
        n2.intro && K(e2.$$.fragment), Q(e2, n2.target, n2.anchor), T();
      }
      x(u2);
    }
    class X {
      $destroy() {
        V(this, 1), this.$destroy = t;
      }
      $on(t2, e2) {
        const n2 = this.$$.callbacks[t2] || (this.$$.callbacks[t2] = []);
        return n2.push(e2), () => {
          const t3 = n2.indexOf(e2);
          t3 !== -1 && n2.splice(t3, 1);
        };
      }
      $set(t2) {
        var e2;
        this.$$set && (e2 = t2, Object.keys(e2).length !== 0) && (this.$$.skip_bound = true, this.$$set(t2), this.$$.skip_bound = false);
      }
    }
    var Y = {queryHandler: {parse: (t2) => {
      return e2 = new URLSearchParams(t2), [...e2].reduce((t3, [e3, n2]) => (t3[e3] = n2, t3), {});
      var e2;
    }, stringify: (t2) => "?" + new URLSearchParams(t2).toString()}, urlTransform: {apply: (t2) => t2, remove: (t2) => t2}, useHash: false};
    const tt = RegExp(/\:([^/()]+)/g);
    function et(t2) {
      if (navigator.userAgent.includes("jsdom"))
        return false;
      nt(t2), function() {
        if (navigator.userAgent.includes("jsdom"))
          return false;
        const {hash: t3} = window.location;
        if (t3) {
          if (/^[A-Za-z]+[\w\-\:\.]*$/.test(t3.substring(1))) {
            const e2 = document.querySelector(t3);
            e2 && e2.scrollIntoView();
          }
        }
      }();
    }
    function nt(t2) {
      t2 && t2.scrollTo && t2.dataset.routify !== "scroll-lock" && t2.dataset["routify-scroll"] !== "lock" && (t2.style["scroll-behavior"] = "auto", t2.scrollTo({top: 0, behavior: "auto"}), t2.style["scroll-behavior"] = "", nt(t2.parentElement));
    }
    const ot = (t2) => {
      const e2 = [];
      let n2;
      for (; n2 = tt.exec(t2); )
        e2.push(n2[1]);
      return e2;
    };
    function rt(t2, e2) {
      rt._console = rt._console || {log: console.log, warn: console.warn};
      const {_console: n2} = rt;
      name = t2.componentFile.name.replace(/Proxy<_?(.+)>/, "$1").replace(/^Index$/, t2.component.shortPath.split("/").pop()).replace(/^./, (t3) => t3.toUpperCase()).replace(/\:(.+)/, "U5B$1u5D");
      const o2 = [`<${name}> received an unexpected slot "default".`, `<${name}> was created with unknown prop 'scoped'`, `<${name}> was created with unknown prop 'scopedSync'`];
      for (const t3 of ["log", "warn"])
        console[t3] = (...e3) => {
          o2.includes(e3[0]) || n2[t3](...e3);
        }, e2().then(() => {
          console[t3] = n2[t3];
        });
    }
    function it() {
      let {url: t2, options: e2} = function(t3) {
        t3 = t3 || window.location.pathname + window.location.search + window.location.hash;
        const [, , e3, n3] = t3.match(/^(\/__routify_([^/]+))?(.*)/), o3 = JSON.parse(decodeURIComponent(e3 || "") || "{}");
        return window.routify = window.routify || {}, window.routify.prefetched = o3.prefetch, {url: n3, options: o3};
      }();
      Y.useHash && (t2 = t2.replace(/.*#(.+)/, "$1"));
      const {path: n2, search: o2, hash: r2} = st(t2);
      return {url: t2, path: n2, search: o2, hash: r2, options: e2};
    }
    function st(t2) {
      const [, e2, n2, o2] = t2.match(/([^?#]*)([^#]*)(.*)/);
      return {path: e2, search: n2, hash: o2};
    }
    function at(t2) {
      let e2;
      const n2 = t2[1].default, o2 = u(n2, t2, t2[0], null);
      return {c() {
        o2 && o2.c();
      }, m(t3, n3) {
        o2 && o2.m(t3, n3), e2 = true;
      }, p(t3, [e3]) {
        o2 && o2.p && 1 & e3 && f(o2, n2, t3, t3[0], e3, null, null);
      }, i(t3) {
        e2 || (K(o2, t3), e2 = true);
      }, o(t3) {
        D(o2, t3), e2 = false;
      }, d(t3) {
        o2 && o2.d(t3);
      }};
    }
    function ct(t2, e2, n2) {
      let {$$slots: o2 = {}, $$scope: r2} = e2;
      return t2.$$set = (t3) => {
        "$$scope" in t3 && n2(0, r2 = t3.$$scope);
      }, [r2, o2];
    }
    class lt extends X {
      constructor(t2) {
        super(), Z(this, t2, ct, at, s, {});
      }
    }
    const ut = [];
    function pt(e2, n2 = t) {
      let o2;
      const r2 = [];
      function i2(t2) {
        if (s(e2, t2) && (e2 = t2, o2)) {
          const t3 = !ut.length;
          for (let t4 = 0; t4 < r2.length; t4 += 1) {
            const n3 = r2[t4];
            n3[1](), ut.push(n3, e2);
          }
          if (t3) {
            for (let t4 = 0; t4 < ut.length; t4 += 2)
              ut[t4][0](ut[t4 + 1]);
            ut.length = 0;
          }
        }
      }
      return {set: i2, update: function(t2) {
        i2(t2(e2));
      }, subscribe: function(s2, a2 = t) {
        const c2 = [s2, a2];
        return r2.push(c2), r2.length === 1 && (o2 = n2(i2) || t), s2(e2), () => {
          const t2 = r2.indexOf(c2);
          t2 !== -1 && r2.splice(t2, 1), r2.length === 0 && (o2(), o2 = null);
        };
      }};
    }
    function ft(e2, n2, o2) {
      const s2 = !Array.isArray(e2), c2 = s2 ? [e2] : e2, l2 = n2.length < 2;
      return {subscribe: pt(o2, (e3) => {
        let o3 = false;
        const u2 = [];
        let p2 = 0, f2 = t;
        const d2 = () => {
          if (p2)
            return;
          f2();
          const o4 = n2(s2 ? u2[0] : u2, e3);
          l2 ? e3(o4) : f2 = i(o4) ? o4 : t;
        }, h2 = c2.map((t2, e4) => a(t2, (t3) => {
          u2[e4] = t3, p2 &= ~(1 << e4), o3 && d2();
        }, () => {
          p2 |= 1 << e4;
        }));
        return o3 = true, d2(), function() {
          r(h2), f2();
        };
      }).subscribe};
    }
    window.routify = window.routify || {};
    const dt = pt(null);
    const ht = pt([]);
    ht.subscribe((t2) => window.routify.routes = t2);
    let mt = pt({component: {params: {}}});
    const gt = pt(null);
    const yt = pt(true);
    function $t(t2, e2 = false) {
      t2 = Y.urlTransform.remove(t2);
      const {path: n2, search: o2, hash: r2} = st(t2), i2 = c(ht), s2 = i2.find((t3) => n2 === t3.meta.name) || i2.find((t3) => n2.match(t3.regex)), a2 = e2 ? Object.create(s2) : s2;
      if (!a2)
        throw new Error(`Route could not be found for "${n2}".`);
      if (Y.queryHandler && (a2.params = Y.queryHandler.parse(window.location.search)), a2.paramKeys) {
        const t3 = function(t4) {
          const e4 = [];
          return t4.forEach((t5) => {
            e4[t5.path.split("/").filter(Boolean).length - 1] = t5;
          }), e4;
        }(a2.layouts), e3 = n2.split("/").filter(Boolean);
        (function(t4) {
          return t4.split("/").filter(Boolean).map((t5) => t5.match(/\:(.+)/)).map((t5) => t5 && t5[1]);
        })(a2.path).forEach((n3, o3) => {
          n3 && (a2.params[n3] = e3[o3], t3[o3] ? t3[o3].param = {[n3]: e3[o3]} : a2.param = {[n3]: e3[o3]});
        });
      }
      return a2.leftover = t2.replace(new RegExp(a2.regex), ""), a2;
    }
    function bt(t2, e2, n2) {
      const o2 = t2.slice();
      return o2[1] = e2[n2], o2;
    }
    function wt(t2, e2) {
      let n2, o2;
      return {key: t2, first: null, c() {
        n2 = g("iframe"), n2.src !== (o2 = e2[1].url) && w(n2, "src", o2), w(n2, "frameborder", "0"), w(n2, "title", "routify prefetcher"), this.first = n2;
      }, m(t3, e3) {
        h(t3, n2, e3);
      }, p(t3, r2) {
        e2 = t3, 1 & r2 && n2.src !== (o2 = e2[1].url) && w(n2, "src", o2);
      }, d(t3) {
        t3 && m(n2);
      }};
    }
    function _t(e2) {
      let n2, o2 = [], r2 = new Map(), i2 = e2[0];
      const s2 = (t2) => t2[1].options.prefetch;
      for (let t2 = 0; t2 < i2.length; t2 += 1) {
        let n3 = bt(e2, i2, t2), a2 = s2(n3);
        r2.set(a2, o2[t2] = wt(a2, n3));
      }
      return {c() {
        n2 = g("div");
        for (let t3 = 0; t3 < o2.length; t3 += 1)
          o2[t3].c();
        var t2, e3, r3;
        w(n2, "id", "__routify_iframes"), t2 = "display", e3 = "none", n2.style.setProperty(t2, e3, r3 ? "important" : "");
      }, m(t2, e3) {
        h(t2, n2, e3);
        for (let t3 = 0; t3 < o2.length; t3 += 1)
          o2[t3].m(n2, null);
      }, p(t2, [e3]) {
        1 & e3 && (i2 = t2[0], o2 = W(o2, e3, s2, 1, t2, i2, r2, n2, J, wt, null, bt));
      }, i: t, o: t, d(t2) {
        t2 && m(n2);
        for (let t3 = 0; t3 < o2.length; t3 += 1)
          o2[t3].d();
      }};
    }
    const xt = pt([]);
    const vt = ft(xt, (t2) => t2.slice(0, 2));
    function kt(t2) {
      const e2 = t2.data ? t2.data.prefetchId : t2;
      if (!e2)
        return null;
      const n2 = c(xt).find((t3) => t3 && t3.options.prefetch == e2);
      if (n2) {
        const {gracePeriod: t3} = n2.options, o2 = new Promise((e3) => setTimeout(e3, t3)), r2 = new Promise((e3) => {
          window.requestIdleCallback ? window.requestIdleCallback(e3) : setTimeout(e3, t3 + 1e3);
        });
        Promise.all([o2, r2]).then(() => {
          xt.update((t4) => t4.filter((t5) => t5.options.prefetch != e2));
        });
      }
    }
    function Pt(t2, e2, n2) {
      let o2;
      return l(t2, vt, (t3) => n2(0, o2 = t3)), [o2];
    }
    vt.subscribe((t2) => t2.forEach(({options: t3}) => {
      setTimeout(() => kt(t3.prefetch), t3.timeout);
    })), addEventListener("message", kt, false);
    class Ot extends X {
      constructor(t2) {
        super(), Z(this, t2, Pt, _t, s, {});
      }
    }
    function Et() {
      return P("routify") || mt;
    }
    const jt = {_hooks: [(t2) => yt.set(false)], subscribe: St};
    const It = {_hooks: [], subscribe: St};
    function St(t2) {
      const e2 = this._hooks, n2 = e2.length;
      return t2((t3) => {
        e2[n2] = t3;
      }), () => delete e2[n2];
    }
    const Lt = {subscribe: (t2) => ft([Et(), dt, ht], (t3) => function(t4, e2, n2) {
      return function(o2, r2, i2) {
        const {component: s2} = t4;
        let a2 = o2 && o2.nodeType && o2;
        a2 && (o2 = o2.getAttribute("href")), o2 = o2 ? u2(o2) : s2.shortPath;
        const c2 = n2.find((t5) => [t5.shortPath || "/", t5.path].includes(o2));
        if (c2 && c2.meta.preload === "proximity" && window.requestIdleCallback) {
          const t5 = routify.appLoaded ? 0 : 1500;
          setTimeout(() => {
            window.requestIdleCallback(() => c2.api.preload());
          }, t5);
        }
        i2 && i2.strict !== false || (o2 = o2.replace(/index$/, ""));
        let l2 = p2(o2, r2);
        return a2 ? (a2.href = l2, {update(t5) {
          a2.href = p2(o2, t5);
        }}) : Y.urlTransform.apply(l2);
        function u2(t5) {
          if (t5.match(/^\.\.?\//)) {
            let [, e3, n3] = t5.match(/^([\.\/]+)(.*)/), o3 = s2.path.replace(/\/$/, "");
            const r3 = e3.match(/\.\.\//g) || [];
            s2.isPage && r3.push(null), r3.forEach(() => o3 = o3.replace(/\/[^\/]+\/?$/, "")), t5 = (t5 = `${o3}/${n3}`.replace(/\/$/, "")) || "/";
          } else if (t5.match(/^\//))
            ;
          else {
            const e3 = n2.find((e4) => e4.meta.name === t5);
            e3 && (t5 = e3.shortPath);
          }
          return t5;
        }
        function p2(t5, e3) {
          const n3 = f2(t5, e3);
          return Y.useHash ? `#${n3}` : n3;
        }
        function f2(t5, n3) {
          const o3 = Object.assign({}, e2.params, s2.params, n3);
          let r3 = t5;
          for (const [t6, e3] of Object.entries(o3))
            r3 = r3.replace(`:${t6}`, e3);
          return (r3 + function(t6, e3) {
            if (!Y.queryHandler)
              return "";
            const n4 = ot(t6), o4 = {};
            e3 && Object.entries(e3).forEach(([t7, e4]) => {
              n4.includes(t7) || (o4[t7] = e4);
            });
            return Y.queryHandler.stringify(o4);
          }(t5, n3)).replace(/\?$/, "");
        }
      };
    }(...t3)).subscribe(t2)};
    const Rt = {props: {}, templates: {}, services: {plain: {propField: "name", valueField: "content"}, twitter: {propField: "name", valueField: "content"}, og: {propField: "property", valueField: "content"}}, plugins: [{name: "applyTemplate", condition: () => true, action: (t2, e2) => [t2, (Rt.getLongest(Rt.templates, t2) || ((t3) => t3))(e2)]}, {name: "createMeta", condition: () => true, action(t2, e2) {
      Rt.writeMeta(t2, e2);
    }}, {name: "createOG", condition: (t2) => !t2.match(":"), action(t2, e2) {
      Rt.writeMeta(`og:${t2}`, e2);
    }}, {name: "createTitle", condition: (t2) => t2 === "title", action(t2, e2) {
      document.title = e2;
    }}], getLongest(t2, e2) {
      const n2 = t2[e2];
      if (n2) {
        const o2 = c(dt).path;
        return n2[Object.keys(t2[e2]).filter((t3) => o2.includes(t3)).sort((t3, e3) => e3.length - t3.length)[0]];
      }
    }, writeMeta(t2, e2) {
      const n2 = document.getElementsByTagName("head")[0], o2 = t2.match(/(.+)\:/), r2 = o2 && o2[1] || "plain", {propField: i2, valueField: s2} = At.services[r2] || At.services.plain, a2 = document.querySelector(`meta[${i2}='${t2}']`);
      a2 && a2.remove();
      const c2 = document.createElement("meta");
      c2.setAttribute(i2, t2), c2.setAttribute(s2, e2), c2.setAttribute("data-origin", "routify"), n2.appendChild(c2);
    }, set(t2, e2) {
      Rt.plugins.forEach((n2) => {
        n2.condition(t2, e2) && ([t2, e2] = n2.action(t2, e2) || [t2, e2]);
      });
    }, clear() {
      const t2 = document.querySelector("meta");
      t2 && t2.remove();
    }, template(t2, e2) {
      const n2 = Rt.getOrigin();
      Rt.templates[t2] = Rt.templates[t2] || {}, Rt.templates[t2][n2] = e2;
    }, update() {
      Object.keys(Rt.props).forEach((t2) => {
        let e2 = Rt.getLongest(Rt.props, t2);
        Rt.plugins.forEach((n2) => {
          n2.condition(t2, e2) && ([t2, e2] = n2.action(t2, e2) || [t2, e2]);
        });
      });
    }, batchedUpdate() {
      Rt._pendingUpdate || (Rt._pendingUpdate = true, setTimeout(() => {
        Rt._pendingUpdate = false, this.update();
      }));
    }, _updateQueued: false, getOrigin() {
      const t2 = Et();
      return t2 && c(t2).path || "/";
    }, _pendingUpdate: false};
    const At = new Proxy(Rt, {set(t2, e2, n2, o2) {
      const {props: r2, getOrigin: i2} = t2;
      return Reflect.has(t2, e2) ? Reflect.set(t2, e2, n2, o2) : (r2[e2] = r2[e2] || {}, r2[e2][i2()] = n2), window.routify.appLoaded && t2.batchedUpdate(), true;
    }});
    function Ft(t2, e2, n2) {
      const o2 = t2.slice();
      return o2[18] = e2[n2].component, o2[19] = e2[n2].componentFile, o2[1] = e2[n2].decorator, o2;
    }
    function Mt(t2) {
      let e2, n2, o2 = [], r2 = new Map(), i2 = [t2[3]];
      const s2 = (t3) => function({meta: t4, path: e3, param: n3, params: o3}) {
        return JSON.stringify({path: e3, param: (t4["param-is-page"] || t4["slug-is-page"]) && n3, queryParams: t4["query-params-is-page"] && o3});
      }(t3[18]);
      for (let e3 = 0; e3 < 1; e3 += 1) {
        let n3 = Ft(t2, i2, e3), a2 = s2(n3);
        r2.set(a2, o2[e3] = Ct(a2, n3));
      }
      return {c() {
        for (let t3 = 0; t3 < 1; t3 += 1)
          o2[t3].c();
        e2 = b();
      }, m(t3, r3) {
        for (let e3 = 0; e3 < 1; e3 += 1)
          o2[e3].m(t3, r3);
        h(t3, e2, r3), n2 = true;
      }, p(t3, n3) {
        4194367 & n3 && (i2 = [t3[3]], U(), o2 = W(o2, n3, s2, 1, t3, i2, r2, e2.parentNode, z, Ct, e2, Ft), H());
      }, i(t3) {
        if (!n2) {
          for (let t4 = 0; t4 < 1; t4 += 1)
            K(o2[t4]);
          n2 = true;
        }
      }, o(t3) {
        for (let t4 = 0; t4 < 1; t4 += 1)
          D(o2[t4]);
        n2 = false;
      }, d(t3) {
        for (let e3 = 0; e3 < 1; e3 += 1)
          o2[e3].d(t3);
        t3 && m(e2);
      }};
    }
    function Nt(t2) {
      let e2, n2;
      return e2 = new Ht({props: {decorator: t2[1], nodes: [...t2[4]], scoped: {...t2[0], ...t2[22]}}}), {c() {
        G(e2.$$.fragment);
      }, m(t3, o2) {
        Q(e2, t3, o2), n2 = true;
      }, p(t3, n3) {
        const o2 = {};
        2 & n3 && (o2.decorator = t3[1]), 16 & n3 && (o2.nodes = [...t3[4]]), 4194305 & n3 && (o2.scoped = {...t3[0], ...t3[22]}), e2.$set(o2);
      }, i(t3) {
        n2 || (K(e2.$$.fragment, t3), n2 = true);
      }, o(t3) {
        D(e2.$$.fragment, t3), n2 = false;
      }, d(t3) {
        V(e2, t3);
      }};
    }
    function Tt(t2) {
      let e2, n2, o2 = t2[18] && t2[4].length && Nt(t2);
      return {c() {
        o2 && o2.c(), e2 = b();
      }, m(t3, r2) {
        o2 && o2.m(t3, r2), h(t3, e2, r2), n2 = true;
      }, p(t3, n3) {
        t3[18] && t3[4].length ? o2 ? (o2.p(t3, n3), 24 & n3 && K(o2, 1)) : (o2 = Nt(t3), o2.c(), K(o2, 1), o2.m(e2.parentNode, e2)) : o2 && (U(), D(o2, 1, 1, () => {
          o2 = null;
        }), H());
      }, i(t3) {
        n2 || (K(o2), n2 = true);
      }, o(t3) {
        D(o2), n2 = false;
      }, d(t3) {
        o2 && o2.d(t3), t3 && m(e2);
      }};
    }
    function qt(t2) {
      let n2, o2, r2;
      const i2 = [{scoped: t2[0]}, {scopedSync: t2[5]}, t2[2].param || {}];
      var s2 = t2[19];
      function a2(t3) {
        let n3 = {$$slots: {default: [Tt, ({scoped: t4, decorator: e2}) => ({22: t4, 1: e2}), ({scoped: t4, decorator: e2}) => (t4 ? 4194304 : 0) | (e2 ? 2 : 0)]}, $$scope: {ctx: t3}};
        for (let t4 = 0; t4 < i2.length; t4 += 1)
          n3 = e(n3, i2[t4]);
        return {props: n3};
      }
      return s2 && (n2 = new s2(a2(t2))), {c() {
        n2 && G(n2.$$.fragment), o2 = $();
      }, m(t3, e2) {
        n2 && Q(n2, t3, e2), h(t3, o2, e2), r2 = true;
      }, p(t3, e2) {
        const r3 = 37 & e2 ? function(t4, e3) {
          const n3 = {}, o3 = {}, r4 = {$$scope: 1};
          let i3 = t4.length;
          for (; i3--; ) {
            const s3 = t4[i3], a3 = e3[i3];
            if (a3) {
              for (const t5 in s3)
                t5 in a3 || (o3[t5] = 1);
              for (const t5 in a3)
                r4[t5] || (n3[t5] = a3[t5], r4[t5] = 1);
              t4[i3] = a3;
            } else
              for (const t5 in s3)
                r4[t5] = 1;
          }
          for (const t5 in o3)
            t5 in n3 || (n3[t5] = void 0);
          return n3;
        }(i2, [1 & e2 && {scoped: t3[0]}, 32 & e2 && {scopedSync: t3[5]}, 4 & e2 && (c2 = t3[2].param || {}, typeof c2 == "object" && c2 !== null ? c2 : {})]) : {};
        var c2;
        if (12582939 & e2 && (r3.$$scope = {dirty: e2, ctx: t3}), s2 !== (s2 = t3[19])) {
          if (n2) {
            U();
            const t4 = n2;
            D(t4.$$.fragment, 1, 0, () => {
              V(t4, 1);
            }), H();
          }
          s2 ? (n2 = new s2(a2(t3)), G(n2.$$.fragment), K(n2.$$.fragment, 1), Q(n2, o2.parentNode, o2)) : n2 = null;
        } else
          s2 && n2.$set(r3);
      }, i(t3) {
        r2 || (n2 && K(n2.$$.fragment, t3), r2 = true);
      }, o(t3) {
        n2 && D(n2.$$.fragment, t3), r2 = false;
      }, d(t3) {
        n2 && V(n2, t3), t3 && m(o2);
      }};
    }
    function Ct(t2, e2) {
      let n2, o2, r2, i2;
      var s2 = e2[1];
      function a2(t3) {
        return {props: {$$slots: {default: [qt]}, $$scope: {ctx: t3}}};
      }
      return s2 && (o2 = new s2(a2(e2))), {key: t2, first: null, c() {
        n2 = b(), o2 && G(o2.$$.fragment), r2 = b(), this.first = n2;
      }, m(t3, e3) {
        h(t3, n2, e3), o2 && Q(o2, t3, e3), h(t3, r2, e3), i2 = true;
      }, p(t3, n3) {
        e2 = t3;
        const i3 = {};
        if (8388671 & n3 && (i3.$$scope = {dirty: n3, ctx: e2}), s2 !== (s2 = e2[1])) {
          if (o2) {
            U();
            const t4 = o2;
            D(t4.$$.fragment, 1, 0, () => {
              V(t4, 1);
            }), H();
          }
          s2 ? (o2 = new s2(a2(e2)), G(o2.$$.fragment), K(o2.$$.fragment, 1), Q(o2, r2.parentNode, r2)) : o2 = null;
        } else
          s2 && o2.$set(i3);
      }, i(t3) {
        i2 || (o2 && K(o2.$$.fragment, t3), i2 = true);
      }, o(t3) {
        o2 && D(o2.$$.fragment, t3), i2 = false;
      }, d(t3) {
        t3 && m(n2), t3 && m(r2), o2 && V(o2, t3);
      }};
    }
    function Bt(e2) {
      let n2, o2, r2, s2, a2, c2 = e2[3] && Mt(e2);
      return {c() {
        c2 && c2.c(), n2 = $(), o2 = g("span");
      }, m(l2, u2) {
        var p2;
        c2 && c2.m(l2, u2), h(l2, n2, u2), h(l2, o2, u2), r2 = true, s2 || (p2 = e2[8].call(null, o2), a2 = p2 && i(p2.destroy) ? p2.destroy : t, s2 = true);
      }, p(t2, [e3]) {
        t2[3] ? c2 ? (c2.p(t2, e3), 8 & e3 && K(c2, 1)) : (c2 = Mt(t2), c2.c(), K(c2, 1), c2.m(n2.parentNode, n2)) : c2 && (U(), D(c2, 1, 1, () => {
          c2 = null;
        }), H());
      }, i(t2) {
        r2 || (K(c2), r2 = true);
      }, o(t2) {
        D(c2), r2 = false;
      }, d(t2) {
        c2 && c2.d(t2), t2 && m(n2), t2 && m(o2), s2 = false, a2();
      }};
    }
    function Ut(t2, e2, n2) {
      let o2, r2, i2, s2;
      l(t2, dt, (t3) => n2(14, i2 = t3));
      let a2, {nodes: c2 = []} = e2, {scoped: u2 = {}} = e2, {isRoot: p2 = false} = e2, {decorator: f2} = e2, d2 = null, h2 = null, m2 = {};
      const g2 = pt(null);
      l(t2, g2, (t3) => n2(3, s2 = t3));
      const y2 = P("routify");
      l(t2, y2, (t3) => n2(11, r2 = t3));
      function $2(t3) {
        n2(5, m2 = {...u2}), h2.length === 0 && async function() {
          et(a2), setTimeout(() => {
            const t4 = s2.component.path === i2.path;
            !window.routify.stopAutoReady && t4 && async function({page: t5, metatags: e4, afterPageLoad: n3}) {
              const {path: o3} = t5, {options: r3} = it(), i3 = r3.prefetch;
              for (const e5 of n3._hooks)
                e5 && await e5(t5.api);
              e4.update(), dispatchEvent(new CustomEvent("app-loaded")), parent.postMessage({msg: "app-loaded", prefetched: window.routify.prefetched, path: o3, prefetchId: i3}, "*"), window.routify.appLoaded = true, window.routify.stopAutoReady = false;
            }({page: s2.component, metatags: At, afterPageLoad: jt});
          });
        }();
        const e3 = {decorator: (f2 === false || !o2) && lt || f2, layout: d2.isLayout && d2 || o2 && o2.layout, component: d2, route: i2, componentFile: t3, parentNode: a2 || o2 && o2.parentNode};
        g2.set(e3), p2 && mt.set(e3);
      }
      return k("routify", g2), t2.$$set = (t3) => {
        "nodes" in t3 && n2(9, c2 = t3.nodes), "scoped" in t3 && n2(0, u2 = t3.scoped), "isRoot" in t3 && n2(10, p2 = t3.isRoot), "decorator" in t3 && n2(1, f2 = t3.decorator);
      }, t2.$$.update = () => {
        2048 & t2.$$.dirty && (o2 = r2), 512 & t2.$$.dirty && n2(2, [d2, ...h2] = c2, d2, (n2(4, h2), n2(9, c2))), 4 & t2.$$.dirty && function(t3) {
          let e3 = t3.component();
          e3 instanceof Promise ? e3.then($2) : $2(e3);
        }(d2), 8 & t2.$$.dirty && s2 && rt(s2, A);
      }, [u2, f2, d2, s2, h2, m2, g2, y2, (t3) => a2 = t3.parentNode, c2, p2, r2];
    }
    class Ht extends X {
      constructor(t2) {
        super(), Z(this, t2, Ut, Bt, s, {nodes: 9, scoped: 0, isRoot: 10, decorator: 1});
      }
    }
    function Kt(t2, e2) {
      let n2 = false;
      function o2(o3, r3) {
        const i2 = $t(o3 || it().url), s2 = [...(r3 && $t(it().url, t2) || i2).layouts, i2];
        n2 && delete n2.last, i2.last = n2, n2 = i2, o3 || gt.set(i2), dt.set(i2), i2.api.preload().then(() => {
          yt.set(true), e2(s2);
        });
      }
      const r2 = function(t3) {
        ["pushState", "replaceState"].forEach((t4) => {
          const e4 = history[t4];
          history[t4] = async function(n4 = {}, o3, r3) {
            if (r3 === location.pathname + location.search + location.hash)
              return false;
            const {id: i2, path: s2, params: a2} = c(dt);
            n4 = {id: i2, path: s2, params: a2, ...n4};
            const l2 = new Event(t4.toLowerCase());
            return Object.assign(l2, {state: n4, title: o3, url: r3}), await Jt(l2, r3) ? (e4.apply(this, [n4, o3, r3]), dispatchEvent(l2)) : void 0;
          };
        });
        let e3 = false;
        const n3 = {click: Dt, pushstate: () => t3(), replacestate: () => t3(), popstate: async (n4) => {
          e3 ? e3 = false : await Jt(n4, it().url) ? t3() : (e3 = true, n4.preventDefault(), history.go(1));
        }};
        Object.entries(n3).forEach((t4) => addEventListener(...t4));
        return () => {
          Object.entries(n3).forEach((t4) => removeEventListener(...t4));
        };
      }(o2);
      return {updatePage: o2, destroy: r2};
    }
    function Dt(t2) {
      const e2 = t2.target.closest("a"), n2 = e2 && e2.getAttribute("href");
      t2.ctrlKey || t2.metaKey || t2.altKey || t2.shiftKey || t2.button || t2.defaultPrevented || n2 && !e2.target && e2.host === location.host && (t2.preventDefault(), history.pushState({}, "", n2));
    }
    async function Jt(t2, e2) {
      const n2 = $t(e2).api;
      for (const o2 of It._hooks.filter(Boolean)) {
        if (!await o2(t2, n2, {url: e2}))
          return false;
      }
      return true;
    }
    function zt(t2) {
      let e2, n2;
      return e2 = new Ht({props: {nodes: t2[0], isRoot: true}}), {c() {
        G(e2.$$.fragment);
      }, m(t3, o2) {
        Q(e2, t3, o2), n2 = true;
      }, p(t3, n3) {
        const o2 = {};
        1 & n3 && (o2.nodes = t3[0]), e2.$set(o2);
      }, i(t3) {
        n2 || (K(e2.$$.fragment, t3), n2 = true);
      }, o(t3) {
        D(e2.$$.fragment, t3), n2 = false;
      }, d(t3) {
        V(e2, t3);
      }};
    }
    function Wt(t2) {
      let e2, n2, o2, r2 = t2[0] && t2[1] !== null && zt(t2);
      return n2 = new Ot({}), {c() {
        r2 && r2.c(), e2 = $(), G(n2.$$.fragment);
      }, m(t3, i2) {
        r2 && r2.m(t3, i2), h(t3, e2, i2), Q(n2, t3, i2), o2 = true;
      }, p(t3, [n3]) {
        t3[0] && t3[1] !== null ? r2 ? (r2.p(t3, n3), 3 & n3 && K(r2, 1)) : (r2 = zt(t3), r2.c(), K(r2, 1), r2.m(e2.parentNode, e2)) : r2 && (U(), D(r2, 1, 1, () => {
          r2 = null;
        }), H());
      }, i(t3) {
        o2 || (K(r2), K(n2.$$.fragment, t3), o2 = true);
      }, o(t3) {
        D(r2), D(n2.$$.fragment, t3), o2 = false;
      }, d(t3) {
        r2 && r2.d(t3), t3 && m(e2), V(n2, t3);
      }};
    }
    function Gt(t2, e2, n2) {
      let o2;
      l(t2, dt, (t3) => n2(1, o2 = t3));
      let r2, i2, {routes: s2} = e2, {config: a2 = {}} = e2;
      window.routify = window.routify || {}, window.routify.inBrowser = !window.navigator.userAgent.match("jsdom"), Object.assign(Y, a2);
      k("routifyupdatepage", (...t3) => i2 && i2.updatePage(...t3));
      const c2 = (t3) => n2(0, r2 = t3), u2 = () => {
        i2 && (i2.destroy(), i2 = null);
      };
      let p2 = null;
      var f2;
      return f2 = u2, v().$$.on_destroy.push(f2), t2.$$set = (t3) => {
        "routes" in t3 && n2(2, s2 = t3.routes), "config" in t3 && n2(3, a2 = t3.config);
      }, t2.$$.update = () => {
        4 & t2.$$.dirty && s2 && (clearTimeout(p2), p2 = setTimeout(() => {
          u2(), i2 = Kt(s2, c2), ht.set(s2), i2.updatePage();
        }));
      }, [r2, o2, s2, a2];
    }
    class Qt extends X {
      constructor(t2) {
        super(), Z(this, t2, Gt, Wt, s, {routes: 2, config: 3});
      }
    }
    function Vt(t2) {
      const e2 = async function(e3) {
        return await Zt(t2, {file: e3.tree, state: {treePayload: e3}, scope: {}});
      };
      return e2.sync = function(e3) {
        return Xt(t2, {file: e3.tree, state: {treePayload: e3}, scope: {}});
      }, e2;
    }
    async function Zt(t2, e2) {
      const n2 = await t2(e2);
      if (n2 === false)
        return false;
      const o2 = n2 || e2.file;
      if (o2.children) {
        const n3 = await Promise.all(o2.children.map(async (n4) => Zt(t2, {state: e2.state, scope: Yt(e2.scope || {}), parent: e2.file, file: await n4})));
        o2.children = n3.filter(Boolean);
      }
      return o2;
    }
    function Xt(t2, e2) {
      const n2 = t2(e2);
      if (n2 === false)
        return false;
      const o2 = n2 || e2.file;
      if (o2.children) {
        const n3 = o2.children.map((n4) => Xt(t2, {state: e2.state, scope: Yt(e2.scope || {}), parent: e2.file, file: n4}));
        o2.children = n3.filter(Boolean);
      }
      return o2;
    }
    function Yt(t2) {
      return JSON.parse(JSON.stringify(t2));
    }
    const te = Vt(({file: t2}) => {
      (t2.isPage || t2.isFallback) && (t2.regex = ((t3, e2) => {
        const n2 = e2 ? "" : "/?$";
        return `^${t3 = (t3 = (t3 = t3.replace(/\/_fallback?$/, "(/|$)")).replace(/\/index$/, "(/index)?")).replace(tt, "([^/]+)") + n2}`;
      })(t2.path, t2.isFallback));
    });
    const ee = Vt(({file: t2}) => {
      t2.paramKeys = ot(t2.path);
    });
    const ne = Vt(({file: t2}) => {
      t2.isFallback || t2.isIndex ? t2.shortPath = t2.path.replace(/\/[^/]+$/, "") : t2.shortPath = t2.path;
    });
    const oe = Vt(({file: t2}) => {
      t2.ranking = (({path: t3}) => t3.split("/").filter(Boolean).map((t4) => t4 === "_fallback" ? "A" : t4.startsWith(":") ? "B" : "C").join(""))(t2);
    });
    const re = Vt(({file: t2}) => {
      const e2 = t2, n2 = t2.meta && t2.meta.children || [];
      n2.length && (e2.children = e2.children || [], e2.children.push(...n2.map((t3) => ({isMeta: true, ...t3, meta: t3}))));
    });
    const ie = Vt((t2) => {
      const {file: e2} = t2, {isFallback: n2, meta: o2} = e2, r2 = e2.path.match("/:"), i2 = e2.path.endsWith("/index"), s2 = o2.index || o2.index === 0, a2 = o2.index === false;
      e2.isIndexable = s2 || !n2 && !r2 && !i2 && !a2, e2.isNonIndexable = !e2.isIndexable;
    });
    const se = Vt(({file: t2, parent: e2}) => {
      Object.defineProperty(t2, "parent", {get: () => e2}), Object.defineProperty(t2, "nextSibling", {get: () => ce(t2, 1)}), Object.defineProperty(t2, "prevSibling", {get: () => ce(t2, -1)}), Object.defineProperty(t2, "lineage", {get: () => ae(e2)});
    });
    function ae(t2, e2 = []) {
      return t2 && (e2.unshift(t2), ae(t2.parent, e2)), e2;
    }
    function ce(t2, e2) {
      if (!t2.root) {
        const n2 = t2.parent.children.filter((t3) => t3.isIndexable), o2 = n2.indexOf(t2);
        return n2[o2 + e2];
      }
    }
    const le = Vt(({file: t2, parent: e2}) => {
      t2.isIndex && Object.defineProperty(e2, "index", {get: () => t2});
    });
    const ue = Vt(({file: t2, scope: e2}) => {
      function n2(t3) {
        const {parent: e3} = t3, o2 = e3 && e3.component && e3, r2 = o2 && o2.isReset, i2 = e3 && !r2 && n2(e3) || [];
        return o2 && i2.push(o2), i2;
      }
      Object.defineProperty(t2, "layouts", {get: () => n2(t2)});
    });
    const pe = Vt(({file: t2}) => {
      const e2 = t2.root ? function() {
      } : t2.children ? (t2.isPage, function() {
      }) : (t2.isReset || t2.isLayout || t2.isFallback, function() {
      });
      Object.setPrototypeOf(t2, e2.prototype);
    });
    var fe = Object.freeze({__proto__: null, setRegex: te, setParamKeys: ee, setShortPath: ne, setRank: oe, addMetaChildren: re, setIsIndexable: ie, assignRelations: se, assignIndex: le, assignLayout: ue, createFlatList: (t2) => {
      Vt((t3) => {
        (t3.file.isPage || t3.file.isFallback) && t3.state.treePayload.routes.push(t3.file);
      }).sync(t2), t2.routes.sort((t3, e2) => t3.ranking >= e2.ranking ? -1 : 1);
    }, setPrototype: pe});
    const de = {isDir: false, ext: "svelte", isLayout: false, isReset: false, isIndex: false, isFallback: false, isPage: false, ownMeta: {}, meta: {recursive: true, preload: false, prerender: true}, id: "__fallback"};
    function he(t2) {
      return Object.entries(de).forEach(([e2, n2]) => {
        t2[e2] === void 0 && (t2[e2] = n2);
      }), t2.children && (t2.children = t2.children.map(he)), t2;
    }
    const me = Vt(({file: t2}) => {
      t2.api = new ge(t2);
    });
    class ge {
      constructor(t2) {
        this.__file = t2, Object.defineProperty(this, "__file", {enumerable: false}), this.isMeta = !!t2.isMeta, this.path = t2.path, this.title = function(t3) {
          return t3.meta.title !== void 0 ? t3.meta.title : (t3.shortPath || t3.path).split("/").pop().replace(/-/g, " ");
        }(t2), this.meta = t2.meta;
      }
      get parent() {
        return !this.__file.root && this.__file.parent.api;
      }
      get children() {
        return (this.__file.children || this.__file.isLayout && this.__file.parent.children || []).filter((t2) => !t2.isNonIndexable).sort((t2, e2) => t2.isMeta && e2.isMeta ? 0 : (t2 = (t2.meta.index || t2.meta.title || t2.path).toString(), e2 = (e2.meta.index || e2.meta.title || e2.path).toString(), t2.localeCompare(e2, void 0, {numeric: true, sensitivity: "base"}))).map(({api: t2}) => t2);
      }
      get next() {
        return ye(this, 1);
      }
      get prev() {
        return ye(this, -1);
      }
      async preload() {
        const t2 = [...this.__file.layouts, this.__file].map((t3) => t3.component());
        await Promise.all(t2);
      }
      get component() {
        return this.__file.component ? this.__file.component() : !!this.__file.index && this.__file.index.component();
      }
    }
    function ye(t2, e2) {
      if (!t2.__file.root) {
        const n2 = t2.parent.children.indexOf(t2);
        return t2.parent.children[n2 + e2];
      }
    }
    const $e = {...fe, restoreDefaults: ({tree: t2}) => he(t2), assignAPI: me};
    const be = {root: true, ownMeta: {preload: "proximity"}, children: [{isFallback: true, meta: {recursive: true, preload: "proximity", prerender: true}, path: "/_fallback", component: () => Promise.resolve().then(() => __toModule(require_fallback_f7f325a6())).then((t2) => t2.default)}, {isIndex: true, isPage: true, meta: {recursive: true, preload: "proximity", prerender: true}, path: "/index", id: "_index", component: () => Promise.resolve().then(() => __toModule(require_index_3d453069())).then((t2) => t2.default)}], isLayout: true, meta: {preload: "proximity", recursive: true, prerender: true}, path: "/", id: "__layout", component: () => Promise.resolve().then(() => __toModule(require_layout_7f056b1b())).then((t2) => t2.default)};
    const {tree: we, routes: _e} = function(t2) {
      const e2 = ["restoreDefaults", "setParamKeys", "setRegex", "setShortPath", "setRank", "assignLayout", "setPrototype", "addMetaChildren", "assignRelations", "setIsIndexable", "assignIndex", "assignAPI", "createFlatList"], n2 = {tree: t2, routes: []};
      for (let t3 of e2) {
        ($e[t3].sync || $e[t3])(n2);
      }
      return n2;
    }(be);
    function xe(e2) {
      let n2, o2;
      return n2 = new Qt({props: {routes: _e, config: e2[0]}}), {c() {
        G(n2.$$.fragment);
      }, m(t2, e3) {
        Q(n2, t2, e3), o2 = true;
      }, p: t, i(t2) {
        o2 || (K(n2.$$.fragment, t2), o2 = true);
      }, o(t2) {
        D(n2.$$.fragment, t2), o2 = false;
      }, d(t2) {
        V(n2, t2);
      }};
    }
    function ve(t2) {
      const e2 = "/civil-movement";
      return [{urlTransform: {apply: (t3) => `${e2}${t3}`, remove: (t3) => t3.replace(e2, "")}}];
    }
    !function(t2, e2 = {target: document.body}, n2 = "hmr", o2 = "app-loaded") {
      const r2 = document.getElementById(n2), i2 = document.createElement("div");
      r2 ? i2.style.visibility = "hidden" : i2.setAttribute("id", n2), e2.target.appendChild(i2), addEventListener(o2, function() {
        r2 && r2.remove();
        i2.style.visibility = "initial", i2.setAttribute("id", n2);
      }), new t2({...e2, target: i2});
    }(class extends X {
      constructor(t2) {
        super(), Z(this, t2, ve, xe, s, {});
      }
    }, {target: document.body}, "routify-app");
  });
  require_main();
})();
