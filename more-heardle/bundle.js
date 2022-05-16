var app = function() {
    "use strict";

    function e() {}

    function t(e) {
        return e()
    }

    function n() {
        return Object.create(null)
    }

    function r(e) {
        e.forEach(t)
    }

    function s(e) {
        return "function" == typeof e
    }

    function i(e, t) {
        return e != e ? t == t : e !== t || e && "object" == typeof e || "function" == typeof e
    }
    let o, a;

    function l(t, n, r) {
        t.$$.on_destroy.push(function(t, ...n) {
            if (null == t) return e;
            const r = t.subscribe(...n);
            return r.unsubscribe ? () => r.unsubscribe() : r
        }(n, r))
    }

    function c(e, t, n, r) {
        if (e) {
            const s = u(e, t, n, r);
            return e[0](s)
        }
    }

    function u(e, t, n, r) {
        return e[1] && r ? function(e, t) {
            for (const n in t) e[n] = t[n];
            return e
        }(n.ctx.slice(), e[1](r(t))) : n.ctx
    }

    function d(e, t, n, r) {
        if (e[2] && r) {
            const s = e[2](r(n));
            if (void 0 === t.dirty) return s;
            if ("object" == typeof s) {
                const e = [],
                    n = Math.max(t.dirty.length, s.length);
                for (let r = 0; r < n; r += 1) e[r] = t.dirty[r] | s[r];
                return e
            }
            return t.dirty | s
        }
        return t.dirty
    }

    function f(e, t, n, r, s, i) {
        if (s) {
            const o = u(t, n, r, i);
            e.p(o, s)
        }
    }

    function h(e) {
        if (e.ctx.length > 32) {
            const t = [],
                n = e.ctx.length / 32;
            for (let e = 0; e < n; e++) t[e] = -1;
            return t
        }
        return -1
    }

    function m(e, t, n) {
        return e.set(n), t
    }

    function p(e, t) {
        e.appendChild(t)
    }

    function g(e, t, n) {
        e.insertBefore(t, n || null)
    }

    function y(e) {
        e.parentNode.removeChild(e)
    }

    function v(e, t) {
        for (let n = 0; n < e.length; n += 1) e[n] && e[n].d(t)
    }

    function w(e) {
        return document.createElement(e)
    }

    function x(e) {
        return document.createElementNS("http://www.w3.org/2000/svg", e)
    }

    function _(e) {
        return document.createTextNode(e)
    }

    function k() {
        return _(" ")
    }

    function b() {
        return _("")
    }

    function $(e, t, n, r) {
        return e.addEventListener(t, n, r), () => e.removeEventListener(t, n, r)
    }

    function S(e, t, n) {
        null == n ? e.removeAttribute(t) : e.getAttribute(t) !== n && e.setAttribute(t, n)
    }

    function M(e, t) {
        t = "" + t, e.wholeText !== t && (e.data = t)
    }

    function D(e, t) {
        e.value = null == t ? "" : t
    }

    function Y(e, t, n, r) {
        null === n ? e.style.removeProperty(t) : e.style.setProperty(t, n, r ? "important" : "")
    }

    function O(e, t, n) {
        e.classList[n ? "add" : "remove"](t)
    }

    function T(e) {
        a = e
    }

    function C() {
        if (!a) throw new Error("Function called outside component initialization");
        return a
    }

    function L(e) {
        C().$$.on_mount.push(e)
    }

    function N() {
        const e = C();
        return (t, n) => {
            const r = e.$$.callbacks[t];
            if (r) {
                const s = function(e, t, n = !1) {
                    const r = document.createEvent("CustomEvent");
                    return r.initCustomEvent(e, n, !1, t), r
                }(t, n);
                r.slice().forEach((t => {
                    t.call(e, s)
                }))
            }
        }
    }

    function P(e, t) {
        const n = e.$$.callbacks[t.type];
        n && n.slice().forEach((e => e.call(this, t)))
    }
    const j = [],
        A = [],
        H = [],
        E = [],
        I = Promise.resolve();
    let R = !1;

    function W(e) {
        H.push(e)
    }
    const F = new Set;
    let G = 0;

    function U() {
        const e = a;
        do {
            for (; G < j.length;) {
                const e = j[G];
                G++, T(e), V(e.$$)
            }
            for (T(null), j.length = 0, G = 0; A.length;) A.pop()();
            for (let e = 0; e < H.length; e += 1) {
                const t = H[e];
                F.has(t) || (F.add(t), t())
            }
            H.length = 0
        } while (j.length);
        for (; E.length;) E.pop()();
        R = !1, F.clear(), T(e)
    }

    function V(e) {
        if (null !== e.fragment) {
            e.update(), r(e.before_update);
            const t = e.dirty;
            e.dirty = [-1], e.fragment && e.fragment.p(e.ctx, t), e.after_update.forEach(W)
        }
    }
    const z = new Set;
    let B;

    function Z() {
        B = {
            r: 0,
            c: [],
            p: B
        }
    }

    function q() {
        B.r || r(B.c), B = B.p
    }

    function J(e, t) {
        e && e.i && (z.delete(e), e.i(t))
    }

    function K(e, t, n, r) {
        if (e && e.o) {
            if (z.has(e)) return;
            z.add(e), B.c.push((() => {
                z.delete(e), r && (n && e.d(1), r())
            })), e.o(t)
        }
    }
    const Q = "undefined" != typeof window ? window : "undefined" != typeof globalThis ? globalThis : global;

    function X(e) {
        e && e.c()
    }

    function ee(e, n, i, o) {
        const {
            fragment: a,
            on_mount: l,
            on_destroy: c,
            after_update: u
        } = e.$$;
        a && a.m(n, i), o || W((() => {
            const n = l.map(t).filter(s);
            c ? c.push(...n) : r(n), e.$$.on_mount = []
        })), u.forEach(W)
    }

    function te(e, t) {
        const n = e.$$;
        null !== n.fragment && (r(n.on_destroy), n.fragment && n.fragment.d(t), n.on_destroy = n.fragment = null, n.ctx = [])
    }

    function ne(e, t) {
        -1 === e.$$.dirty[0] && (j.push(e), R || (R = !0, I.then(U)), e.$$.dirty.fill(0)), e.$$.dirty[t / 31 | 0] |= 1 << t % 31
    }

    function re(t, s, i, o, l, c, u, d = [-1]) {
        const f = a;
        T(t);
        const h = t.$$ = {
            fragment: null,
            ctx: null,
            props: c,
            update: e,
            not_equal: l,
            bound: n(),
            on_mount: [],
            on_destroy: [],
            on_disconnect: [],
            before_update: [],
            after_update: [],
            context: new Map(s.context || (f ? f.$$.context : [])),
            callbacks: n(),
            dirty: d,
            skip_bound: !1,
            root: s.target || f.$$.root
        };
        u && u(h.root);
        let m = !1;
        if (h.ctx = i ? i(t, s.props || {}, ((e, n, ...r) => {
                const s = r.length ? r[0] : n;
                return h.ctx && l(h.ctx[e], h.ctx[e] = s) && (!h.skip_bound && h.bound[e] && h.bound[e](s), m && ne(t, e)), n
            })) : [], h.update(), m = !0, r(h.before_update), h.fragment = !!o && o(h.ctx), s.target) {
            if (s.hydrate) {
                const e = function(e) {
                    return Array.from(e.childNodes)
                }(s.target);
                h.fragment && h.fragment.l(e), e.forEach(y)
            } else h.fragment && h.fragment.c();
            s.intro && J(t.$$.fragment), ee(t, s.target, s.anchor, s.customElement), U()
        }
        T(f)
    }
    class se {
        $destroy() {
            te(this, 1), this.$destroy = e
        }
        $on(e, t) {
            const n = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
            return n.push(t), () => {
                const e = n.indexOf(t); - 1 !== e && n.splice(e, 1)
            }
        }
        $set(e) {
            var t;
            this.$$set && (t = e, 0 !== Object.keys(t).length) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1)
        }
    }
    const ie = {
            name: "Heardle",
            localStorageName: "userStats",
            attemptInterval: [1e3, 2e3, 4e3, 7e3, 11e3, 16e3],
            startDate: "2022-02-25",
            separator: " - ",
            prefix: "",
            themeColor: "#1d7e05",
            description: "Guess the song from the intro in as few tries as possible.",
            url: "https://www.heardle.app",
            googleAnalytics: "G-3QSG4MYSLD",
            options: "https://api.heardle.app/api/o",
            answers: "https://downloador.github.io/more-heardle/all.json",
            supporters: "https://api.heardle.app/api/s"
        },
        oe = ["Unlucky!", "A virtuoso performance!", "An act of genius!", "You're a star!", "What a pro!", "You're a winner!", "Good result!"];

    function ae(e) {
        let t, n, r, s, i;
        const o = e[4].default,
            a = c(o, e, e[3], null);
        return {
            c() {
                t = w("button"), a && a.c(), S(t, "class", "px-2 py-2 uppercase tracking-widest bg-custom-mg border-none flex items-center font-semibold text-sm svelte-jsii56"), S(t, "style", n = e[0] ? "background-color: " + ie.themeColor : ""), t.disabled = e[2], O(t, "bg-custom-mg", e[1])
            },
            m(n, o) {
                g(n, t, o), a && a.m(t, null), r = !0, s || (i = $(t, "click", e[5]), s = !0)
            },
            p(e, [s]) {
                a && a.p && (!r || 8 & s) && f(a, o, e, e[3], r ? d(o, e[3], s, null) : h(e[3]), null), (!r || 1 & s && n !== (n = e[0] ? "background-color: " + ie.themeColor : "")) && S(t, "style", n), (!r || 4 & s) && (t.disabled = e[2]), 2 & s && O(t, "bg-custom-mg", e[1])
            },
            i(e) {
                r || (J(a, e), r = !0)
            },
            o(e) {
                K(a, e), r = !1
            },
            d(e) {
                e && y(t), a && a.d(e), s = !1, i()
            }
        }
    }

    function le(e, t, n) {
        let {
            $$slots: r = {},
            $$scope: s
        } = t, {
            primary: i = !1
        } = t, {
            secondary: o = !1
        } = t, {
            disabled: a = !1
        } = t;
        return e.$$set = e => {
            "primary" in e && n(0, i = e.primary), "secondary" in e && n(1, o = e.secondary), "disabled" in e && n(2, a = e.disabled), "$$scope" in e && n(3, s = e.$$scope)
        }, [i, o, a, s, r, function(t) {
            P.call(this, e, t)
        }]
    }
    class ce extends se {
        constructor(e) {
            super(), re(this, e, le, ae, i, {
                primary: 0,
                secondary: 1,
                disabled: 2
            })
        }
    }
    const ue = [];

    function de(t, n = e) {
        let r;
        const s = new Set;

        function o(e) {
            if (i(t, e) && (t = e, r)) {
                const e = !ue.length;
                for (const e of s) e[1](), ue.push(e, t);
                if (e) {
                    for (let e = 0; e < ue.length; e += 2) ue[e][0](ue[e + 1]);
                    ue.length = 0
                }
            }
        }
        return {
            set: o,
            update: function(e) {
                o(e(t))
            },
            subscribe: function(i, a = e) {
                const l = [i, a];
                return s.add(l), 1 === s.size && (r = n(o) || e), i(t), () => {
                    s.delete(l), 0 === s.size && (r(), r = null)
                }
            }
        }
    }
    const fe = de([]);

    function he() {
        return Boolean(window.dataLayer).valueOf() && Array.isArray(window.dataLayer)
    }

    function me() {
        window.dataLayer.push(arguments)
    }

    function pe(e, t, n) {
        let {
            properties: r
        } = t, {
            configurations: s = {}
        } = t, {
            enabled: i = !0
        } = t;

        function o() {
            ! function(e, t, n) {
                let r = e.length;

                function s() {
                    r = --r, r < 1 && n()
                }
                t() ? n() : e.forEach((({
                    type: e,
                    url: t,
                    options: n = {
                        async: !0,
                        defer: !0
                    }
                }) => {
                    const r = "script" === e,
                        i = document.createElement(r ? "script" : "link");
                    r ? (i.src = t, i.async = n.async, i.defer = n.defer) : (i.rel = "stylesheet", i.href = t), i.onload = s, document.body.appendChild(i)
                }))
            }([{
                type: "script",
                url: `//www.googletagmanager.com/gtag/js?id=${r[0]}`
            }], he, a)
        }

        function a() {
            return window.dataLayer = window.dataLayer || [], me("js", new Date), r.forEach((e => {
                me("config", e, s[e] || {})
            })), fe.subscribe((e => {
                let t = e.length && e.shift();
                for (; t;) {
                    const {
                        event: n,
                        data: r
                    } = t;
                    me("event", n, r), t = e.shift()
                }
            }))
        }
        return L((() => {
            i && o()
        })), e.$$set = e => {
            "properties" in e && n(0, r = e.properties), "configurations" in e && n(1, s = e.configurations), "enabled" in e && n(2, i = e.enabled)
        }, [r, s, i, o]
    }
    class ge extends se {
        constructor(e) {
            super(), re(this, e, pe, null, i, {
                properties: 0,
                configurations: 1,
                enabled: 2,
                init: 3
            })
        }
        get init() {
            return this.$$.ctx[3]
        }
    }

    function ye(e, t) {
        t.send_to || delete t.send_to, fe.update((n => [...n, {
            event: e,
            data: t
        }]))
    }

    function ve(e) {
        let t, n, r, s;
        return {
            c() {
                t = x("svg"), n = x("circle"), r = x("line"), s = x("line"), S(n, "cx", "12"), S(n, "cy", "12"), S(n, "r", "10"), S(r, "x1", "12"), S(r, "y1", "16"), S(r, "x2", "12"), S(r, "y2", "12"), S(s, "x1", "12"), S(s, "y1", "8"), S(s, "x2", "12.01"), S(s, "y2", "8"), S(t, "xmlns", "http://www.w3.org/2000/svg"), S(t, "width", "24"), S(t, "height", "24"), S(t, "viewBox", "0 0 24 24"), S(t, "fill", "none"), S(t, "stroke", "currentColor"), S(t, "stroke-width", "2"), S(t, "stroke-linecap", "round"), S(t, "stroke-linejoin", "round")
            },
            m(e, i) {
                g(e, t, i), p(t, n), p(t, r), p(t, s)
            },
            d(e) {
                e && y(t)
            }
        }
    }

    function we(e) {
        let t, n;
        return {
            c() {
                t = x("svg"), n = x("path"), S(n, "d", "M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"), S(t, "xmlns", "http://www.w3.org/2000/svg"), S(t, "width", "24"), S(t, "height", "24"), S(t, "viewBox", "0 0 24 24"), S(t, "fill", "none"), S(t, "stroke", "currentColor"), S(t, "stroke-width", "2"), S(t, "stroke-linecap", "round"), S(t, "stroke-linejoin", "round")
            },
            m(e, r) {
                g(e, t, r), p(t, n)
            },
            d(e) {
                e && y(t)
            }
        }
    }

    function xe(e) {
        let t, n;
        return {
            c() {
                t = x("svg"), n = x("path"), S(n, "d", "M12 20v-6M6 20V10M18 20V4"), S(t, "xmlns", "http://www.w3.org/2000/svg"), S(t, "width", "24"), S(t, "height", "24"), S(t, "viewBox", "0 0 24 24"), S(t, "fill", "none"), S(t, "stroke", "currentColor"), S(t, "stroke-width", "2"), S(t, "stroke-linecap", "round"), S(t, "stroke-linejoin", "round")
            },
            m(e, r) {
                g(e, t, r), p(t, n)
            },
            d(e) {
                e && y(t)
            }
        }
    }

    function _e(e) {
        let t, n, r, s;
        return {
            c() {
                t = x("svg"), n = x("circle"), r = x("path"), s = x("line"), S(n, "cx", "12"), S(n, "cy", "12"), S(n, "r", "10"), S(r, "d", "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"), S(s, "x1", "12"), S(s, "y1", "17"), S(s, "x2", "12.01"), S(s, "y2", "17"), S(t, "xmlns", "http://www.w3.org/2000/svg"), S(t, "width", "24"), S(t, "height", "24"), S(t, "viewBox", "0 0 24 24"), S(t, "fill", "none"), S(t, "stroke", "currentColor"), S(t, "stroke-width", "2"), S(t, "stroke-linecap", "round"), S(t, "stroke-linejoin", "round")
            },
            m(e, i) {
                g(e, t, i), p(t, n), p(t, r), p(t, s)
            },
            d(e) {
                e && y(t)
            }
        }
    }

    function ke(e) {
        let t, n, r, s, i, o, a, l, c, u, d, f, h, m, v, x, b, $, M = ie.prefix + "";
        return i = new ce({
            props: {
                $$slots: {
                    default: [ve]
                },
                $$scope: {
                    ctx: e
                }
            }
        }), i.$on("click", e[1]), a = new ce({
            props: {
                $$slots: {
                    default: [we]
                },
                $$scope: {
                    ctx: e
                }
            }
        }), a.$on("click", e[2]), v = new ce({
            props: {
                $$slots: {
                    default: [xe]
                },
                $$scope: {
                    ctx: e
                }
            }
        }), v.$on("click", e[3]), b = new ce({
            props: {
                $$slots: {
                    default: [_e]
                },
                $$scope: {
                    ctx: e
                }
            }
        }), b.$on("click", e[4]), {
            c() {
                t = w("header"), n = w("div"), r = w("div"), s = w("div"), X(i.$$.fragment), o = k(), X(a.$$.fragment), l = k(), c = w("h1"), u = w("sup"), d = _(M), f = _("\n                Heardle"), h = k(), m = w("div"), X(v.$$.fragment), x = k(), X(b.$$.fragment), S(s, "class", "flex flex-1"), Y(u, "color", ie.themeColor), Y(u, "font-size", "60%"), S(u, "class", "-top-3"), S(c, "class", "font-serif text-3xl font-bold flex-grow text-center flex-1"), S(m, "class", "flex flex-1 justify-end"), S(r, "class", "flex justify-evenly text-custom-fgcolor px-1 py-2 items-center"), S(n, "class", "max-w-screen-md mx-auto "), S(t, "class", "border-b border-custom-line")
            },
            m(e, y) {
                g(e, t, y), p(t, n), p(n, r), p(r, s), ee(i, s, null), p(s, o), ee(a, s, null), p(r, l), p(r, c), p(c, u), p(u, d), p(c, f), p(r, h), p(r, m), ee(v, m, null), p(m, x), ee(b, m, null), $ = !0
            },
            p(e, [t]) {
                const n = {};
                64 & t && (n.$$scope = {
                    dirty: t,
                    ctx: e
                }), i.$set(n);
                const r = {};
                64 & t && (r.$$scope = {
                    dirty: t,
                    ctx: e
                }), a.$set(r);
                const s = {};
                64 & t && (s.$$scope = {
                    dirty: t,
                    ctx: e
                }), v.$set(s);
                const o = {};
                64 & t && (o.$$scope = {
                    dirty: t,
                    ctx: e
                }), b.$set(o)
            },
            i(e) {
                $ || (J(i.$$.fragment, e), J(a.$$.fragment, e), J(v.$$.fragment, e), J(b.$$.fragment, e), $ = !0)
            },
            o(e) {
                K(i.$$.fragment, e), K(a.$$.fragment, e), K(v.$$.fragment, e), K(b.$$.fragment, e), $ = !1
            },
            d(e) {
                e && y(t), te(i), te(a), te(v), te(b)
            }
        }
    }

    function be(e) {
        const t = N();

        function n(e, n, r) {
            t("modal", {
                name: e,
                title: n,
                hasFrame: r
            })
        }
        return [n, () => {
            n("info", "about"), ye("clickInfo", {
                name: "clickInfo"
            })
        }, () => {
            n("donate", "support"), ye("clickDonate", {
                name: "clickDonate"
            })
        }, () => {
            n("results", "stats"), ye("clickStats", {
                name: "clickStats"
            })
        }, () => {
            n("help", "how to play"), ye("clickHelp", {
                name: "clickHelp"
            })
        }]
    }
    class $e extends se {
        constructor(e) {
            super(), re(this, e, be, ke, i, {})
        }
    }
    const Se = de({
            url: "",
            correctAnswer: "",
            id: null,
            guessList: [],
            hasFinished: !1,
            hasStarted: !1,
            gotCorrect: !1,
            score: 0
        }),
        Me = de({
            isActive: !1,
            musicIsPlaying: !1,
            playerReady: !1,
            hasError: !1,
            playCount: 0,
            errorMsg: "Oops. Something's not quite right."
        }),
        De = de([]);

    function Ye(e, t, n) {
        const r = e.slice();
        return r[2] = t[n], r[4] = n, r
    }

    function Oe(t) {
        let n;
        return {
            c() {
                n = w("div"), S(n, "class", "w-5 h-5")
            },
            m(e, t) {
                g(e, n, t)
            },
            p: e,
            d(e) {
                e && y(n)
            }
        }
    }

    function Te(e) {
        let t, n, r;

        function s(e, t) {
            return e[0].guessList[e[4]].isArtist ? Ne : e[0].guessList[e[4]].isCorrect || e[0].guessList[e[4]].isSkipped ? e[0].guessList[e[4]].isSkipped ? Ce : void 0 : Le
        }
        let i = s(e),
            o = i && i(e);

        function a(e, t) {
            return e[0].guessList[e[4]].isSkipped ? je : Pe
        }
        let l = a(e),
            c = l(e);
        return {
            c() {
                t = w("div"), o && o.c(), n = k(), r = w("div"), c.c(), S(t, "class", "mr-2"), S(r, "class", "flex flex-1 justify-between items-center")
            },
            m(e, s) {
                g(e, t, s), o && o.m(t, null), g(e, n, s), g(e, r, s), c.m(r, null)
            },
            p(e, n) {
                i !== (i = s(e)) && (o && o.d(1), o = i && i(e), o && (o.c(), o.m(t, null))), l === (l = a(e)) && c ? c.p(e, n) : (c.d(1), c = l(e), c && (c.c(), c.m(r, null)))
            },
            d(e) {
                e && y(t), o && o.d(), e && y(n), e && y(r), c.d()
            }
        }
    }

    function Ce(e) {
        let t, n;
        return {
            c() {
                t = x("svg"), n = x("rect"), S(n, "x", "3"), S(n, "y", "3"), S(n, "width", "18"), S(n, "height", "18"), S(n, "rx", "2"), S(n, "ry", "2"), S(t, "xmlns", "http://www.w3.org/2000/svg"), S(t, "class", "text-custom-mg ml-0.5 "), S(t, "width", "20"), S(t, "height", "20"), S(t, "viewBox", "0 0 24 24"), S(t, "fill", "none"), S(t, "stroke", "currentColor"), S(t, "stroke-width", "2"), S(t, "stroke-linecap", "round"), S(t, "stroke-linejoin", "round")
            },
            m(e, r) {
                g(e, t, r), p(t, n)
            },
            d(e) {
                e && y(t)
            }
        }
    }

    function Le(e) {
        let t, n, r;
        return {
            c() {
                t = x("svg"), n = x("line"), r = x("line"), S(n, "x1", "18"), S(n, "y1", "6"), S(n, "x2", "6"), S(n, "y2", "18"), S(r, "x1", "6"), S(r, "y1", "6"), S(r, "x2", "18"), S(r, "y2", "18"), S(t, "class", "ml-0.5 text-custom-negative"), S(t, "xmlns", "http://www.w3.org/2000/svg"), S(t, "width", "20"), S(t, "height", "20"), S(t, "viewBox", "0 0 24 24"), S(t, "fill", "none"), S(t, "stroke", "currentColor"), S(t, "stroke-width", "2"), S(t, "stroke-linecap", "round"), S(t, "stroke-linejoin", "round")
            },
            m(e, s) {
                g(e, t, s), p(t, n), p(t, r)
            },
            d(e) {
                e && y(t)
            }
        }
    }

    function Ne(e) {
        let t, n, r;
        return {
            c() {
                t = x("svg"), n = x("line"), r = x("line"), S(n, "x1", "18"), S(n, "y1", "6"), S(n, "x2", "6"), S(n, "y2", "18"), S(r, "x1", "6"), S(r, "y1", "6"), S(r, "x2", "18"), S(r, "y2", "18"), S(t, "class", "ml-0.5 text-custom-warning"), S(t, "xmlns", "http://www.w3.org/2000/svg"), S(t, "width", "20"), S(t, "height", "20"), S(t, "viewBox", "0 0 24 24"), S(t, "fill", "none"), S(t, "stroke", "currentColor"), S(t, "stroke-width", "2"), S(t, "stroke-linecap", "round"), S(t, "stroke-linejoin", "round")
            },
            m(e, s) {
                g(e, t, s), p(t, n), p(t, r)
            },
            d(e) {
                e && y(t)
            }
        }
    }

    function Pe(e) {
        let t, n, r, s, i = e[0].guessList[e[4]].answer.split(ie.separator)[0] + "",
            o = e[0].guessList[e[4]].answer.split(ie.separator)[1],
            a = o && Ae(e);
        return {
            c() {
                t = w("div"), n = w("span"), r = _(i), s = k(), a && a.c(), O(n, "text-white", e[0].guessList[e[4]].isArtist), S(t, "class", "text-custom-line text-sm")
            },
            m(e, i) {
                g(e, t, i), p(t, n), p(n, r), p(t, s), a && a.m(t, null)
            },
            p(e, s) {
                1 & s && i !== (i = e[0].guessList[e[4]].answer.split(ie.separator)[0] + "") && M(r, i), 1 & s && O(n, "text-white", e[0].guessList[e[4]].isArtist), 1 & s && (o = e[0].guessList[e[4]].answer.split(ie.separator)[1]), o ? a ? a.p(e, s) : (a = Ae(e), a.c(), a.m(t, null)) : a && (a.d(1), a = null)
            },
            d(e) {
                e && y(t), a && a.d()
            }
        }
    }

    function je(t) {
        let n;
        return {
            c() {
                n = w("div"), n.textContent = "SKIPPED", S(n, "class", "text-custom-line tracking-widest font-semibold text-sm -ml-1")
            },
            m(e, t) {
                g(e, n, t)
            },
            p: e,
            d(e) {
                e && y(n)
            }
        }
    }

    function Ae(e) {
        let t, n, r, s, i = ie.separator + "",
            o = e[0].guessList[e[4]].answer.split(ie.separator)[1] + "";
        return {
            c() {
                t = w("span"), n = _(i), r = k(), s = _(o)
            },
            m(e, i) {
                g(e, t, i), p(t, n), p(t, r), p(t, s)
            },
            p(e, t) {
                1 & t && o !== (o = e[0].guessList[e[4]].answer.split(ie.separator)[1] + "") && M(s, o)
            },
            d(e) {
                e && y(t)
            }
        }
    }

    function He(e) {
        let t;

        function n(e, t) {
            return e[4] < e[0].guessList.length ? Te : Oe
        }
        let r = n(e),
            s = r(e);
        return {
            c() {
                t = w("div"), s.c(), S(t, "class", "p-2 mb-2 border border-custom-mg flex items-center last:mb-0"), O(t, "border-custom-line", e[4] == e[0].guessList.length)
            },
            m(e, n) {
                g(e, t, n), s.m(t, null)
            },
            p(e, i) {
                r === (r = n(e)) && s ? s.p(e, i) : (s.d(1), s = r(e), s && (s.c(), s.m(t, null))), 1 & i && O(t, "border-custom-line", e[4] == e[0].guessList.length)
            },
            d(e) {
                e && y(t), s.d()
            }
        }
    }

    function Ee(t) {
        let n, r, s, i = Array(t[1]),
            o = [];
        for (let e = 0; e < i.length; e += 1) o[e] = He(Ye(t, i, e));
        return {
            c() {
                n = w("div");
                for (let e = 0; e < o.length; e += 1) o[e].c();
                r = k(), s = w("div"), S(s, "class", "absolute h-12 bottom-0 w-full border-custom-fg "), Y(s, "background", "linear-gradient(to bottom, rgba(18,18,18,0), rgba(18,18,18,1)) no-repeat bottom"), Y(s, "background-size", "100% 100%"), S(n, "class", "p-3 flex-col items-evenly overflow-auto")
            },
            m(e, t) {
                g(e, n, t);
                for (let e = 0; e < o.length; e += 1) o[e].m(n, null);
                p(n, r), p(n, s)
            },
            p(e, [t]) {
                if (3 & t) {
                    let s;
                    for (i = Array(e[1]), s = 0; s < i.length; s += 1) {
                        const a = Ye(e, i, s);
                        o[s] ? o[s].p(a, t) : (o[s] = He(a), o[s].c(), o[s].m(n, r))
                    }
                    for (; s < o.length; s += 1) o[s].d(1);
                    o.length = i.length
                }
            },
            i: e,
            o: e,
            d(e) {
                e && y(n), v(o, e)
            }
        }
    }

    function Ie(e, t, n) {
        let r, s;
        return l(e, Se, (e => n(0, s = e))), e.$$.update = () => {
            1 & e.$$.dirty && n(1, r = s.hasFinished && s.gotCorrect ? s.guessList.length : ie.attemptInterval.length)
        }, [s, r]
    }
    class Re extends se {
        constructor(e) {
            super(), re(this, e, Ie, Ee, i, {})
        }
    }

    function We(t) {
        let n, r;
        return {
            c() {
                n = w("div"), r = w("i"), S(r, "class", "gg-loadbar-sound svelte-1u9zefw"), O(r, "musicIsPlaying", t[0]), S(n, "class", "scale-150 transform relative")
            },
            m(e, t) {
                g(e, n, t), p(n, r)
            },
            p(e, [t]) {
                1 & t && O(r, "musicIsPlaying", e[0])
            },
            i: e,
            o: e,
            d(e) {
                e && y(n)
            }
        }
    }

    function Fe(e, t, n) {
        let {
            musicIsPlaying: r
        } = t;
        return e.$$set = e => {
            "musicIsPlaying" in e && n(0, r = e.musicIsPlaying)
        }, [r]
    }
    class Ge extends se {
        constructor(e) {
            super(), re(this, e, Fe, We, i, {
                musicIsPlaying: 0
            })
        }
    }

    function Ue(t) {
        let n, r, s, i, o, a, l, c, u;
        return {
            c() {
                n = w("div"), r = w("p"), s = _(t[0]), i = k(), o = w("p"), a = _("Try again? "), l = w("span"), l.innerHTML = '<svg class="block ml-2" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2.5 2v6h6M2.66 15.57a10 10 0 1 0 .57-8.38"></path></svg>', S(r, "class", "mb-3 text-custom-line"), S(l, "role", "button"), S(l, "class", ""), S(o, "class", "text-custom-line flex items-center justify-center"), S(n, "class", "w-full flex flex-col justify-center text-center flex-grow relative p-3")
            },
            m(e, d) {
                g(e, n, d), p(n, r), p(r, s), p(n, i), p(n, o), p(o, a), p(o, l), c || (u = $(l, "click", t[1]), c = !0)
            },
            p(e, [t]) {
                1 & t && M(s, e[0])
            },
            i: e,
            o: e,
            d(e) {
                e && y(n), c = !1, u()
            }
        }
    }

    function Ve(e) {
        if (!e.ok) throw Error(e.statusText);
        return e
    }

    function ze(e, t, n) {
        let {
            errorMsg: r
        } = t;
        const s = N();
        return e.$$set = e => {
            "errorMsg" in e && n(0, r = e.errorMsg)
        }, [r, function() {
            s("retry")
        }]
    }
    class Be extends se {
        constructor(e) {
            super(), re(this, e, ze, Ue, i, {
                errorMsg: 0
            })
        }
    }

    function Ze(t) {
        let n;
        return {
            c() {
                n = w("div"), n.innerHTML = '<span class="loader svelte-57p3aa"></span>', S(n, "class", "flex justify-center m-3")
            },
            m(e, t) {
                g(e, n, t)
            },
            p: e,
            i: e,
            o: e,
            d(e) {
                e && y(n)
            }
        }
    }
    class qe extends se {
        constructor(e) {
            super(), re(this, e, null, Ze, i, {})
        }
    }
    const {
        document: Je
    } = Q;

    function Ke(e, t, n) {
        const r = e.slice();
        return r[23] = t[n], r[25] = n, r
    }

    function Qe(e) {
        let t, n, r, s;
        const i = [tt, et],
            o = [];

        function a(e, t) {
            return e[4] ? 0 : 1
        }
        return n = a(e), r = o[n] = i[n](e), {
            c() {
                t = w("div"), r.c(), S(t, "class", "text-sm text-center text-custom-line p-6")
            },
            m(e, r) {
                g(e, t, r), o[n].m(t, null), s = !0
            },
            p(e, s) {
                let l = n;
                n = a(e), n === l ? o[n].p(e, s) : (Z(), K(o[l], 1, 1, (() => {
                    o[l] = null
                })), q(), r = o[n], r ? r.p(e, s) : (r = o[n] = i[n](e), r.c()), J(r, 1), r.m(t, null))
            },
            i(e) {
                s || (J(r), s = !0)
            },
            o(e) {
                K(r), s = !1
            },
            d(e) {
                e && y(t), o[n].d()
            }
        }
    }

    function Xe(e) {
        let t, n, r, s;
        const i = [rt, nt],
            o = [];

        function a(e, t) {
            return e[2].songRestricted ? 1 : 0
        }
        return t = a(e), n = o[t] = i[t](e), {
            c() {
                n.c(), r = b()
            },
            m(e, n) {
                o[t].m(e, n), g(e, r, n), s = !0
            },
            p(e, s) {
                let l = t;
                t = a(e), t === l ? o[t].p(e, s) : (Z(), K(o[l], 1, 1, (() => {
                    o[l] = null
                })), q(), n = o[t], n ? n.p(e, s) : (n = o[t] = i[t](e), n.c()), J(n, 1), n.m(r.parentNode, r))
            },
            i(e) {
                s || (J(n), s = !0)
            },
            o(e) {
                K(n), s = !1
            },
            d(e) {
                o[t].d(e), e && y(r)
            }
        }
    }

    function et(t) {
        let n, r, s, i;
        return n = new qe({}), {
            c() {
                X(n.$$.fragment), r = k(), s = w("p"), s.textContent = "Loading Player..."
            },
            m(e, t) {
                ee(n, e, t), g(e, r, t), g(e, s, t), i = !0
            },
            p: e,
            i(e) {
                i || (J(n.$$.fragment, e), i = !0)
            },
            o(e) {
                K(n.$$.fragment, e), i = !1
            },
            d(e) {
                te(n, e), e && y(r), e && y(s)
            }
        }
    }

    function tt(t) {
        let n, r;
        return n = new Be({
            props: {
                errorMsg: "Hmm...There was an error loading the player..."
            }
        }), n.$on("retry", yt), {
            c() {
                X(n.$$.fragment)
            },
            m(e, t) {
                ee(n, e, t), r = !0
            },
            p: e,
            i(e) {
                r || (J(n.$$.fragment, e), r = !0)
            },
            o(e) {
                K(n.$$.fragment, e), r = !1
            },
            d(e) {
                te(n, e)
            }
        }
    }

    function nt(t) {
        let n, r, s, i;

        function o(e, t) {
            return e[2].isActive ? it : st
        }
        let a = o(t),
            l = a(t);
        return {
            c() {
                n = w("div"), r = w("div"), s = w("div"), s.innerHTML = '<div class=""><p class="text-sm mb-3">Oh no! For some reason today&#39;s track is blocked on\n                            SoundCloud where you are. We&#39;re really sorry, but\n                            it&#39;s out of our control.</p> \n                        <p class="text-sm ">We do want Heardle to be\n                            for everyone, thanks for your patience and playing\n                            with us so far!</p></div>', i = k(), l.c(), S(s, "class", "flex items-center bg-custom-mbg p-3 "), S(r, "class", "rounded-sm overflow-hidden "), S(n, "class", "max-w-screen-sm w-full mx-auto px-3 flex-col")
            },
            m(e, t) {
                g(e, n, t), p(n, r), p(r, s), p(r, i), l.m(r, null)
            },
            p(e, t) {
                a === (a = o(e)) && l ? l.p(e, t) : (l.d(1), l = a(e), l && (l.c(), l.m(r, null)))
            },
            i: e,
            o: e,
            d(e) {
                e && y(n), l.d()
            }
        }
    }

    function rt(e) {
        let t, n, r, s, i, o, a, l, c, u, d, f, h, m, v, x, $, D, O, T, C, L, N, P, j, A = vt(e[6]) + "",
            H = vt(e[2].isActive ? ie.attemptInterval.slice(-1)[0] : e[9]) + "",
            E = e[2].isActive && ot(e);
        const I = [ct, lt],
            R = [];

        function W(e, t) {
            return e[2].musicIsPlaying ? 0 : 1
        }
        D = W(e), O = R[D] = I[D](e);
        let F = !e[3].hasStarted && 1 == e[1] && mt();
        return {
            c() {
                t = w("div"), n = w("div"), r = w("div"), s = w("div"), i = w("div"), o = k(), a = w("div"), E && E.c(), l = k(), c = w("div"), u = w("div"), d = w("div"), f = w("div"), h = w("div"), m = w("div"), v = _(A), x = k(), $ = w("div"), O.c(), T = k(), C = w("div"), L = _(H), N = k(), F && F.c(), P = b(), S(i, "class", "h-full absolute bg-custom-positive"), Y(i, "width", e[5] + "%"), S(s, "class", "h-full absolute bg-custom-mg overflow-hidden"), Y(s, "width", (e[2].isActive ? e[10] : "100") + "%"), S(a, "class", "w-full h-full absolute"), S(r, "class", "h-3 w-full relative overflow-hidden "), S(n, "class", "max-w-screen-sm w-full mx-auto px-3 flex-col"), S(t, "class", "border-t border-custom-line"), S(h, "class", "flex items-center"), S($, "class", "flex justify-center items-center"), S(f, "class", "flex justify-between items-center"), S(d, "class", "px-3 "), S(u, "class", "max-w-screen-sm w-full mx-auto flex-col"), S(c, "class", "border-t border-custom-line")
            },
            m(e, y) {
                g(e, t, y), p(t, n), p(n, r), p(r, s), p(s, i), p(r, o), p(r, a), E && E.m(a, null), g(e, l, y), g(e, c, y), p(c, u), p(u, d), p(d, f), p(f, h), p(h, m), p(m, v), p(f, x), p(f, $), R[D].m($, null), p(f, T), p(f, C), p(C, L), g(e, N, y), F && F.m(e, y), g(e, P, y), j = !0
            },
            p(e, t) {
                (!j || 32 & t) && Y(i, "width", e[5] + "%"), (!j || 1028 & t) && Y(s, "width", (e[2].isActive ? e[10] : "100") + "%"), e[2].isActive ? E ? E.p(e, t) : (E = ot(e), E.c(), E.m(a, null)) : E && (E.d(1), E = null), (!j || 64 & t) && A !== (A = vt(e[6]) + "") && M(v, A);
                let n = D;
                D = W(e), D === n ? R[D].p(e, t) : (Z(), K(R[n], 1, 1, (() => {
                    R[n] = null
                })), q(), O = R[D], O ? O.p(e, t) : (O = R[D] = I[D](e), O.c()), J(O, 1), O.m($, null)), (!j || 516 & t) && H !== (H = vt(e[2].isActive ? ie.attemptInterval.slice(-1)[0] : e[9]) + "") && M(L, H), e[3].hasStarted || 1 != e[1] ? F && (F.d(1), F = null) : F || (F = mt(), F.c(), F.m(P.parentNode, P))
            },
            i(e) {
                j || (J(O), j = !0)
            },
            o(e) {
                K(O), j = !1
            },
            d(e) {
                e && y(t), E && E.d(), e && y(l), e && y(c), R[D].d(), e && y(N), F && F.d(e), e && y(P)
            }
        }
    }

    function st(t) {
        let n;
        return {
            c() {
                n = w("div"), S(n, "class", "mb-3")
            },
            m(e, t) {
                g(e, n, t)
            },
            p: e,
            d(e) {
                e && y(n)
            }
        }
    }

    function it(t) {
        let n, r, s, i;
        return {
            c() {
                n = w("div"), r = w("button"), r.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" class="mr-2" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg> \n\n                            <span class="uppercase tracking-widest text-xs">see today&#39;s answer</span>', S(r, "title", "Today's answer"), S(r, "class", "flex text-sm items-center"), S(n, "class", "flex justify-center p-3 items-center bg-custom-highlight mb-3")
            },
            m(e, o) {
                g(e, n, o), p(n, r), s || (i = $(r, "click", t[12]), s = !0)
            },
            p: e,
            d(e) {
                e && y(n), s = !1, i()
            }
        }
    }

    function ot(e) {
        let t, n, r, s, i = ie.attemptInterval,
            o = [];
        for (let t = 0; t < i.length; t += 1) o[t] = at(Ke(e, i, t));
        return {
            c() {
                t = w("div"), n = k();
                for (let e = 0; e < o.length; e += 1) o[e].c();
                r = k(), s = w("div"), S(t, "class", "bg-custom-line w-px h-full absolute right-0"), S(s, "class", "bg-custom-mg w-px h-full absolute right-0")
            },
            m(e, i) {
                g(e, t, i), g(e, n, i);
                for (let t = 0; t < o.length; t += 1) o[t].m(e, i);
                g(e, r, i), g(e, s, i)
            },
            p(e, t) {
                if (2 & t) {
                    let n;
                    for (i = ie.attemptInterval, n = 0; n < i.length; n += 1) {
                        const s = Ke(e, i, n);
                        o[n] ? o[n].p(s, t) : (o[n] = at(s), o[n].c(), o[n].m(r.parentNode, r))
                    }
                    for (; n < o.length; n += 1) o[n].d(1);
                    o.length = i.length
                }
            },
            d(e) {
                e && y(t), e && y(n), v(o, e), e && y(r), e && y(s)
            }
        }
    }

    function at(e) {
        let t;
        return {
            c() {
                t = w("div"), S(t, "class", "w-px h-full absolute"), Y(t, "left", ie.attemptInterval[e[25]] / ie.attemptInterval.slice(-1)[0] * 100 + "%"), O(t, "bg-custom-bg", e[25] < e[1] - 1), O(t, "bg-custom-mg", e[25] > e[1] - 1), O(t, "bg-custom-line", e[25] == e[1] - 1)
            },
            m(e, n) {
                g(e, t, n)
            },
            p(e, n) {
                2 & n && O(t, "bg-custom-bg", e[25] < e[1] - 1), 2 & n && O(t, "bg-custom-mg", e[25] > e[1] - 1), 2 & n && O(t, "bg-custom-line", e[25] == e[1] - 1)
            },
            d(e) {
                e && y(t)
            }
        }
    }

    function lt(e) {
        let t, n;
        return t = new ce({
            props: {
                $$slots: {
                    default: [ut]
                },
                $$scope: {
                    ctx: e
                }
            }
        }), t.$on("click", e[0]), {
            c() {
                X(t.$$.fragment)
            },
            m(e, r) {
                ee(t, e, r), n = !0
            },
            p(e, n) {
                const r = {};
                67108864 & n && (r.$$scope = {
                    dirty: n,
                    ctx: e
                }), t.$set(r)
            },
            i(e) {
                n || (J(t.$$.fragment, e), n = !0)
            },
            o(e) {
                K(t.$$.fragment, e), n = !1
            },
            d(e) {
                te(t, e)
            }
        }
    }

    function ct(e) {
        let t, n;
        return t = new ce({
            props: {
                $$slots: {
                    default: [ht]
                },
                $$scope: {
                    ctx: e
                }
            }
        }), t.$on("click", e[11]), {
            c() {
                X(t.$$.fragment)
            },
            m(e, r) {
                ee(t, e, r), n = !0
            },
            p(e, n) {
                const r = {};
                67108992 & n && (r.$$scope = {
                    dirty: n,
                    ctx: e
                }), t.$set(r)
            },
            i(e) {
                n || (J(t.$$.fragment, e), n = !0)
            },
            o(e) {
                K(t.$$.fragment, e), n = !1
            },
            d(e) {
                te(t, e)
            }
        }
    }

    function ut(e) {
        let t;
        return {
            c() {
                t = w("div"), t.innerHTML = '<div class="ml-1 relative z-10"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg></div>', S(t, "class", "flex justify-center items-center text-custom-fg h-12 w-12 border-2 rounded-full relative overflow-hidden")
            },
            m(e, n) {
                g(e, t, n)
            },
            d(e) {
                e && y(t)
            }
        }
    }

    function dt(e) {
        let t, n;
        return t = new qe({}), {
            c() {
                X(t.$$.fragment)
            },
            m(e, r) {
                ee(t, e, r), n = !0
            },
            i(e) {
                n || (J(t.$$.fragment, e), n = !0)
            },
            o(e) {
                K(t.$$.fragment, e), n = !1
            },
            d(e) {
                te(t, e)
            }
        }
    }

    function ft(e) {
        let t, n;
        return t = new Ge({
            props: {
                musicIsPlaying: !0
            }
        }), {
            c() {
                X(t.$$.fragment)
            },
            m(e, r) {
                ee(t, e, r), n = !0
            },
            i(e) {
                n || (J(t.$$.fragment, e), n = !0)
            },
            o(e) {
                K(t.$$.fragment, e), n = !1
            },
            d(e) {
                te(t, e)
            }
        }
    }

    function ht(e) {
        let t, n, r, s, i;
        const o = [ft, dt],
            a = [];

        function l(e, t) {
            return e[7] > 0 ? 0 : 1
        }
        return r = l(e), s = a[r] = o[r](e), {
            c() {
                t = w("div"), n = w("div"), s.c(), S(n, "class", "relative z-10"), S(t, "class", "flex justify-center items-center text-custom-fg h-12 w-12 border-2 rounded-full relative overflow-hidden")
            },
            m(e, s) {
                g(e, t, s), p(t, n), a[r].m(n, null), i = !0
            },
            p(e, t) {
                let i = r;
                r = l(e), r !== i && (Z(), K(a[i], 1, 1, (() => {
                    a[i] = null
                })), q(), s = a[r], s || (s = a[r] = o[r](e), s.c()), J(s, 1), s.m(n, null))
            },
            i(e) {
                i || (J(s), i = !0)
            },
            o(e) {
                K(s), i = !1
            },
            d(e) {
                e && y(t), a[r].d()
            }
        }
    }

    function mt(e) {
        let t;
        return {
            c() {
                t = w("div"), t.innerHTML = '<svg class="mb-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 15l-6-6-6 6"></path></svg> \n\n                <p>Turn up the volume and tap to start the track!</p>', S(t, "class", "text-center p-5 pt-0 flex flex-col items-center text-sm text-custom-line")
            },
            m(e, n) {
                g(e, t, n)
            },
            d(e) {
                e && y(t)
            }
        }
    }

    function pt(t) {
        let n, r;
        return {
            c() {
                n = w("div"), r = w("div"), S(n, "class", "hidden")
            },
            m(e, s) {
                g(e, n, s), p(n, r), t[15](r)
            },
            p: e,
            d(e) {
                e && y(n), t[15](null)
            }
        }
    }

    function gt(e) {
        let t, n, s, i, a, l, c, u, d, f;
        const h = [Xe, Qe],
            m = [];

        function v(e, t) {
            return e[2].playerReady ? 0 : 1
        }
        i = v(e), a = m[i] = h[i](e);
        let x = !e[2].songRestricted && pt(e);
        return {
            c() {
                var e, r;
                t = w("script"), s = k(), a.c(), l = k(), x && x.c(), c = b(), t.async = !0, e = t.src, r = n = "https://w.soundcloud.com/player/api.js", o || (o = document.createElement("a")), o.href = r, e !== o.href && S(t, "src", "https://w.soundcloud.com/player/api.js")
            },
            m(n, r) {
                p(Je.head, t), g(n, s, r), m[i].m(n, r), g(n, l, r), x && x.m(n, r), g(n, c, r), u = !0, d || (f = [$(t, "error", e[14]), $(t, "load", e[13])], d = !0)
            },
            p(e, [t]) {
                let n = i;
                i = v(e), i === n ? m[i].p(e, t) : (Z(), K(m[n], 1, 1, (() => {
                    m[n] = null
                })), q(), a = m[i], a ? a.p(e, t) : (a = m[i] = h[i](e), a.c()), J(a, 1), a.m(l.parentNode, l)), e[2].songRestricted ? x && (x.d(1), x = null) : x ? x.p(e, t) : (x = pt(e), x.c(), x.m(c.parentNode, c))
            },
            i(e) {
                u || (J(a), u = !0)
            },
            o(e) {
                K(a), u = !1
            },
            d(e) {
                y(t), e && y(s), m[i].d(e), e && y(l), x && x.d(e), e && y(c), d = !1, r(f)
            }
        }
    }

    function yt() {
        location.reload(!0)
    }

    function vt(e) {
        var t = Math.floor(e / 6e4),
            n = (e % 6e4 / 1e3).toFixed(0);
        return t + ":" + (n < 10 ? "0" : "") + n
    }

    function wt(e, t, n) {
        let r, s, i, o, a;
        var c;
        l(e, Me, (e => n(2, o = e))), l(e, Se, (e => n(3, a = e))), m(Me, o.songRestricted = !1, o);
        let u = !1,
            d = !1,
            f = !1,
            h = 0,
            p = 0,
            g = 0;

        function y() {
            c.seekTo(0), c.pause(), n(6, p = 0)
        }
        const v = N();
        let w;

        function x() {
            (c = SC.Widget("soundcloud" + a.id)).bind(SC.Widget.Events.READY, (function() {
                c.getCurrentSound((function(e) {
                    ! function(e) {
                        let t = e;
                        m(Se, a.img = t.artwork_url, a), m(Me, o.duration = t.duration, o), m(Me, o.playerReady = !0, o), m(Me, o.playCount = 0, o), a.hasFinished || m(Me, o.isActive = !0, o)
                    }(e), "BLOCK" === e.policy && (m(Me, o.songRestricted = !0, o), ye("trackBlocked", {
                        name: "trackBlocked"
                    }), ye("trackBlocked#" + a.id, {
                        name: "trackBlocked#" + a.id
                    }), a.hasStarted || v("startGame"))
                })), c.bind(SC.Widget.Events.PAUSE, (function() {
                    m(Me, o.musicIsPlaying = !1, o), a.hasFinished || m(Me, o.playCount++, o)
                })), c.bind(SC.Widget.Events.PLAY, (function() {
                    m(Me, o.musicIsPlaying = !0, o), a.hasStarted || v("startGame")
                })), c.bind(SC.Widget.Events.PLAY_PROGRESS, (function(e) {
                    n(6, p = e.currentPosition), n(7, g = e.loadedProgress), 1 == o.isActive ? (n(5, h = e.currentPosition / ie.attemptInterval[s - 1] * 100), e.currentPosition > ie.attemptInterval[s - 1] && y()) : (n(5, h = p / r * 100), p > r && y())
                }))
            }))
        }
        return L((() => {
            ! function() {
                const e = document.createElement("iframe");
                e.name = a.id, e.id = "soundcloud" + a.id, e.allow = "autoplay", e.height = 0, e.src = "https://w.soundcloud.com/player/?url=" + o.url + "&show_teaser=false&cache=" + a.id, w.appendChild(e), d = !0, u && (setTimeout((() => {
                    n(4, f = !0)
                }), 7e3), x())
            }()
        })), e.$$.update = () => {
            4 & e.$$.dirty && n(9, r = o.duration), 8 & e.$$.dirty && n(1, s = a.guessList.length + 1), 2 & e.$$.dirty && n(10, i = ie.attemptInterval[s - 1] / ie.attemptInterval.slice(-1)[0] * 100)
        }, [() => {
            c.seekTo(0), c.play()
        }, s, o, a, f, h, p, g, w, r, i, y, function() {
            v("modal", {
                name: "resultsCard",
                title: "today's answer",
                hasFrame: !0
            })
        }, function() {
            u = !0, d && (setTimeout((() => {
                n(4, f = !0)
            }), 7e3), x())
        }, function() {
            n(4, f = !0)
        }, function(e) {
            A[e ? "unshift" : "push"]((() => {
                w = e, n(8, w)
            }))
        }]
    }
    class xt extends se {
        constructor(e) {
            super(), re(this, e, wt, gt, i, {
                scPlay: 0
            })
        }
        get scPlay() {
            return this.$$.ctx[0]
        }
    }
    "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self && self;

    function _t(e) {
        var t = {
            exports: {}
        };
        return e(t, t.exports), t.exports
    }

    function kt(e) {
        throw new Error('Could not dynamically require "' + e + '". Please configure the dynamicRequireTargets option of @rollup/plugin-commonjs appropriately for this require call to behave properly.')
    }
    var bt = _t((function(e, t) {
            var n;
            n = function() {
                function e(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        }))), n.push.apply(n, r)
                    }
                    return n
                }

                function t(t) {
                    for (var n = 1; n < arguments.length; n++) {
                        var s = null != arguments[n] ? arguments[n] : {};
                        n % 2 ? e(Object(s), !0).forEach((function(e) {
                            r(t, e, s[e])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(s)) : e(Object(s)).forEach((function(e) {
                            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(s, e))
                        }))
                    }
                    return t
                }

                function n(e) {
                    return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    })(e)
                }

                function r(e, t, n) {
                    return t in e ? Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = n, e
                }

                function s(e) {
                    return function(e) {
                        if (Array.isArray(e)) return o(e)
                    }(e) || function(e) {
                        if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                    }(e) || i(e) || function() {
                        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }()
                }

                function i(e, t) {
                    if (e) {
                        if ("string" == typeof e) return o(e, t);
                        var n = Object.prototype.toString.call(e).slice(8, -1);
                        return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? o(e, t) : void 0
                    }
                }

                function o(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                    return r
                }
                var a = function(e) {
                        return "string" == typeof e ? document.querySelector(e) : e()
                    },
                    l = function(e, t) {
                        var n = "string" == typeof e ? document.createElement(e) : e;
                        for (var r in t) {
                            var s = t[r];
                            if ("inside" === r) s.append(n);
                            else if ("dest" === r) a(s[0]).insertAdjacentElement(s[1], n);
                            else if ("around" === r) {
                                var i = s;
                                i.parentNode.insertBefore(n, i), n.append(i), null != i.getAttribute("autofocus") && i.focus()
                            } else r in n ? n[r] = s : n.setAttribute(r, s)
                        }
                        return n
                    },
                    c = function(e, t) {
                        return e = e.toString().toLowerCase(), t ? e.normalize("NFD").replace(/[\u0300-\u036f]/g, "").normalize("NFC") : e
                    },
                    u = function(e, n) {
                        return l("mark", t({
                            innerHTML: e
                        }, "string" == typeof n && {
                            class: n
                        })).outerHTML
                    },
                    d = function(e, t) {
                        t.input.dispatchEvent(new CustomEvent(e, {
                            bubbles: !0,
                            detail: t.feedback,
                            cancelable: !0
                        }))
                    },
                    f = function(e, t, n) {
                        var r = n || {},
                            s = r.mode,
                            i = r.diacritics,
                            o = r.highlight,
                            a = c(t, i);
                        if (t = t.toString(), e = c(e, i), "loose" === s) {
                            var l = (e = e.replace(/ /g, "")).length,
                                d = 0,
                                f = Array.from(t).map((function(t, n) {
                                    return d < l && a[n] === e[d] && (t = o ? u(t, o) : t, d++), t
                                })).join("");
                            if (d === l) return f
                        } else {
                            var h = a.indexOf(e);
                            if (~h) return e = t.substring(h, h + e.length), o ? t.replace(e, u(e, o)) : t
                        }
                    },
                    h = function(e, t) {
                        return new Promise((function(n, r) {
                            var s;
                            return (s = e.data).cache && s.store ? n() : new Promise((function(e, n) {
                                return "function" == typeof s.src ? s.src(t).then(e, n) : e(s.src)
                            })).then((function(t) {
                                try {
                                    return e.feedback = s.store = t, d("response", e), n()
                                } catch (e) {
                                    return r(e)
                                }
                            }), r)
                        }))
                    },
                    m = function(e, t) {
                        var n = t.data,
                            r = t.searchEngine,
                            s = [];
                        n.store.forEach((function(o, a) {
                            var l = function(n) {
                                var i = n ? o[n] : o,
                                    a = "function" == typeof r ? r(e, i) : f(e, i, {
                                        mode: r,
                                        diacritics: t.diacritics,
                                        highlight: t.resultItem.highlight
                                    });
                                if (a) {
                                    var l = {
                                        match: a,
                                        value: o
                                    };
                                    n && (l.key = n), s.push(l)
                                }
                            };
                            if (n.keys) {
                                var c, u = function(e, t) {
                                    var n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                                    if (!n) {
                                        if (Array.isArray(e) || (n = i(e))) {
                                            n && (e = n);
                                            var r = 0,
                                                s = function() {};
                                            return {
                                                s: s,
                                                n: function() {
                                                    return r >= e.length ? {
                                                        done: !0
                                                    } : {
                                                        done: !1,
                                                        value: e[r++]
                                                    }
                                                },
                                                e: function(e) {
                                                    throw e
                                                },
                                                f: s
                                            }
                                        }
                                        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                                    }
                                    var o, a = !0,
                                        l = !1;
                                    return {
                                        s: function() {
                                            n = n.call(e)
                                        },
                                        n: function() {
                                            var e = n.next();
                                            return a = e.done, e
                                        },
                                        e: function(e) {
                                            l = !0, o = e
                                        },
                                        f: function() {
                                            try {
                                                a || null == n.return || n.return()
                                            } finally {
                                                if (l) throw o
                                            }
                                        }
                                    }
                                }(n.keys);
                                try {
                                    for (u.s(); !(c = u.n()).done;) l(c.value)
                                } catch (e) {
                                    u.e(e)
                                } finally {
                                    u.f()
                                }
                            } else l()
                        })), n.filter && (s = n.filter(s));
                        var o = s.slice(0, t.resultsList.maxResults);
                        t.feedback = {
                            query: e,
                            matches: s,
                            results: o
                        }, d("results", t)
                    },
                    p = "aria-expanded",
                    g = "aria-activedescendant",
                    y = "aria-selected",
                    v = function(e, n) {
                        e.feedback.selection = t({
                            index: n
                        }, e.feedback.results[n])
                    },
                    w = function(e) {
                        e.isOpen || ((e.wrapper || e.input).setAttribute(p, !0), e.list.removeAttribute("hidden"), e.isOpen = !0, d("open", e))
                    },
                    x = function(e) {
                        e.isOpen && ((e.wrapper || e.input).setAttribute(p, !1), e.input.setAttribute(g, ""), e.list.setAttribute("hidden", ""), e.isOpen = !1, d("close", e))
                    },
                    _ = function(e, t) {
                        var n = t.resultItem,
                            r = t.list.getElementsByTagName(n.tag),
                            i = !!n.selected && n.selected.split(" ");
                        if (t.isOpen && r.length) {
                            var o, a, l = t.cursor;
                            e >= r.length && (e = 0), e < 0 && (e = r.length - 1), t.cursor = e, l > -1 && (r[l].removeAttribute(y), i && (a = r[l].classList).remove.apply(a, s(i))), r[e].setAttribute(y, !0), i && (o = r[e].classList).add.apply(o, s(i)), t.input.setAttribute(g, r[t.cursor].id), t.list.scrollTop = r[e].offsetTop - t.list.clientHeight + r[e].clientHeight + 5, t.feedback.cursor = t.cursor, v(t, e), d("navigate", t)
                        }
                    },
                    k = function(e) {
                        _(e.cursor + 1, e)
                    },
                    b = function(e) {
                        _(e.cursor - 1, e)
                    },
                    $ = function(e, t, n) {
                        (n = n >= 0 ? n : e.cursor) < 0 || (e.feedback.event = t, v(e, n), d("selection", e), x(e))
                    };

                function S(e, n) {
                    var r = this;
                    return new Promise((function(s, i) {
                        var o, a;
                        return o = n || ((a = e.input) instanceof HTMLInputElement || a instanceof HTMLTextAreaElement ? a.value : a.innerHTML),
                            function(e, t, n) {
                                return t ? t(e) : e.length >= n
                            }(o = e.query ? e.query(o) : o, e.trigger, e.threshold) ? h(e, o).then((function(n) {
                                try {
                                    return e.feedback instanceof Error ? s() : (m(o, e), e.resultsList && function(e) {
                                        var n = e.resultsList,
                                            r = e.list,
                                            s = e.resultItem,
                                            i = e.feedback,
                                            o = i.matches,
                                            a = i.results;
                                        if (e.cursor = -1, r.innerHTML = "", o.length || n.noResults) {
                                            var c = new DocumentFragment;
                                            a.forEach((function(e, n) {
                                                var r = l(s.tag, t({
                                                    id: "".concat(s.id, "_").concat(n),
                                                    role: "option",
                                                    innerHTML: e.match,
                                                    inside: c
                                                }, s.class && {
                                                    class: s.class
                                                }));
                                                s.element && s.element(r, e)
                                            })), r.append(c), n.element && n.element(r, i), w(e)
                                        } else x(e)
                                    }(e), c.call(r))
                                } catch (e) {
                                    return i(e)
                                }
                            }), i) : (x(e), c.call(r));

                        function c() {
                            return s()
                        }
                    }))
                }
                var M = function(e, t) {
                    for (var n in e)
                        for (var r in e[n]) t(n, r)
                };

                function D(e) {
                    var n = this;
                    return new Promise((function(r, s) {
                        var i, o, a;
                        if (i = e.placeHolder, a = {
                                role: "combobox",
                                "aria-owns": (o = e.resultsList).id,
                                "aria-haspopup": !0,
                                "aria-expanded": !1
                            }, l(e.input, t(t({
                                "aria-controls": o.id,
                                "aria-autocomplete": "both"
                            }, i && {
                                placeholder: i
                            }), !e.wrapper && t({}, a))), e.wrapper && (e.wrapper = l("div", t({
                                around: e.input,
                                class: e.name + "_wrapper"
                            }, a))), o && (e.list = l(o.tag, t({
                                dest: [o.destination, o.position],
                                id: o.id,
                                role: "listbox",
                                hidden: "hidden"
                            }, o.class && {
                                class: o.class
                            }))), function(e) {
                                var n, r, s, i = e.events,
                                    o = (n = function() {
                                        return S(e)
                                    }, r = e.debounce, function() {
                                        clearTimeout(s), s = setTimeout((function() {
                                            return n()
                                        }), r)
                                    }),
                                    a = e.events = t({
                                        input: t({}, i && i.input)
                                    }, e.resultsList && {
                                        list: i ? t({}, i.list) : {}
                                    }),
                                    l = {
                                        input: {
                                            input: function() {
                                                o()
                                            },
                                            keydown: function(t) {
                                                ! function(e, t) {
                                                    switch (e.keyCode) {
                                                        case 40:
                                                        case 38:
                                                            e.preventDefault(), 40 === e.keyCode ? k(t) : b(t);
                                                            break;
                                                        case 13:
                                                            t.submit || e.preventDefault(), t.cursor >= 0 && $(t, e);
                                                            break;
                                                        case 9:
                                                            t.resultsList.tabSelect && t.cursor >= 0 && $(t, e);
                                                            break;
                                                        case 27:
                                                            t.input.value = "", x(t)
                                                    }
                                                }(t, e)
                                            },
                                            blur: function() {
                                                x(e)
                                            }
                                        },
                                        list: {
                                            mousedown: function(e) {
                                                e.preventDefault()
                                            },
                                            click: function(t) {
                                                ! function(e, t) {
                                                    var n = t.resultItem.tag.toUpperCase(),
                                                        r = Array.from(t.list.querySelectorAll(n)),
                                                        s = e.target.closest(n);
                                                    s && s.nodeName === n && $(t, e, r.indexOf(s))
                                                }(t, e)
                                            }
                                        }
                                    };
                                M(l, (function(t, n) {
                                    (e.resultsList || "input" === n) && (a[t][n] || (a[t][n] = l[t][n]))
                                })), M(a, (function(t, n) {
                                    e[t].addEventListener(n, a[t][n])
                                }))
                            }(e), e.data.cache) return h(e).then((function(e) {
                            try {
                                return c.call(n)
                            } catch (e) {
                                return s(e)
                            }
                        }), s);

                        function c() {
                            return d("init", e), r()
                        }
                        return c.call(n)
                    }))
                }

                function Y(e) {
                    var t = e.prototype;
                    t.init = function() {
                        D(this)
                    }, t.start = function(e) {
                        S(this, e)
                    }, t.unInit = function() {
                        if (this.wrapper) {
                            var e = this.wrapper.parentNode;
                            e.insertBefore(this.input, this.wrapper), e.removeChild(this.wrapper)
                        }
                        var t;
                        M((t = this).events, (function(e, n) {
                            t[e].removeEventListener(n, t.events[e][n])
                        }))
                    }, t.open = function() {
                        w(this)
                    }, t.close = function() {
                        x(this)
                    }, t.goTo = function(e) {
                        _(e, this)
                    }, t.next = function() {
                        k(this)
                    }, t.previous = function() {
                        b(this)
                    }, t.select = function(e) {
                        $(this, null, e)
                    }, t.search = function(e, t, n) {
                        return f(e, t, n)
                    }
                }
                return function e(t) {
                    this.options = t, this.id = e.instances = (e.instances || 0) + 1, this.name = "autoComplete", this.wrapper = 1, this.threshold = 1, this.debounce = 0, this.resultsList = {
                            position: "afterend",
                            tag: "ul",
                            maxResults: 5
                        }, this.resultItem = {
                            tag: "li"
                        },
                        function(e) {
                            var t = e.name,
                                r = e.options,
                                s = e.resultsList,
                                i = e.resultItem;
                            for (var o in r)
                                if ("object" === n(r[o]))
                                    for (var l in e[o] || (e[o] = {}), r[o]) e[o][l] = r[o][l];
                                else e[o] = r[o];
                            e.selector = e.selector || "#" + t, s.destination = s.destination || e.selector, s.id = s.id || t + "_list_" + e.id, i.id = i.id || t + "_result", e.input = a(e.selector)
                        }(this), Y.call(this, e), D(this)
                }
            }, e.exports = n()
        })),
        $t = St(2);

    function St(e) {
        if ("number" != typeof e || Number.isNaN(e) || e < 1 || e === Number.POSITIVE_INFINITY) throw new Error("`" + e + "` is not a valid argument for `n-gram`");
        return function(t) {
            var n, r, s = [];
            if (null == t) return s;
            if (r = t.slice ? t : String(t), (n = r.length - e + 1) < 1) return s;
            for (; n--;) s[n] = r.slice(n, n + e);
            return s
        }
    }

    function Mt(e, t) {
        let n, r, s, i;
        Array.isArray(e) ? s = e.map((e => String(e).toLowerCase())) : (n = String(e).toLowerCase(), s = 1 === n.length ? [n] : $t(n)), Array.isArray(t) ? i = t.map((e => String(e).toLowerCase())) : (r = String(t).toLowerCase(), i = 1 === r.length ? [r] : $t(r));
        let o, a, l, c = -1,
            u = 0;
        for (; ++c < s.length;)
            for (o = s[c], l = -1; ++l < i.length;)
                if (a = i[l], o === a) {
                    u++, i[l] = "";
                    break
                }
        return 2 * u / (s.length + i.length)
    }

    function Dt(e) {
        let t, n, s, i, o, a, l, c, u, d, f, h, m, v, _, b, M, Y, O, T, C;
        const L = [Ot, Yt],
            N = [];

        function P(e, t) {
            return !e[7] && e[5] ? 0 : !e[7] && e[8] ? 1 : -1
        }~(n = P(e)) && (s = N[n] = L[n](e));
        let j = "" != e[4] && Tt(e);
        return b = new ce({
            props: {
                secondary: !0,
                $$slots: {
                    default: [Ct]
                },
                $$scope: {
                    ctx: e
                }
            }
        }), b.$on("click", e[14]), Y = new ce({
            props: {
                primary: !0,
                disabled: "" != !e[3],
                $$slots: {
                    default: [Lt]
                },
                $$scope: {
                    ctx: e
                }
            }
        }), Y.$on("click", e[10]), {
            c() {
                t = w("div"), s && s.c(), i = k(), o = w("div"), a = w("div"), l = w("div"), c = x("svg"), u = x("circle"), d = x("line"), f = k(), h = w("input"), m = k(), j && j.c(), v = k(), _ = w("div"), X(b.$$.fragment), M = k(), X(Y.$$.fragment), S(u, "cx", "11"), S(u, "cy", "11"), S(u, "r", "8"), S(d, "x1", "21"), S(d, "y1", "21"), S(d, "x2", "16.65"), S(d, "y2", "16.65"), S(c, "class", "absolute left-3 top-0 h-full text-custom-line"), S(c, "xmlns", "http://www.w3.org/2000/svg"), S(c, "width", "20"), S(c, "height", "20"), S(c, "viewBox", "0 0 24 24"), S(c, "fill", "none"), S(c, "stroke", "currentColor"), S(c, "stroke-width", "2"), S(c, "stroke-linecap", "round"), S(c, "stroke-linejoin", "round"), S(h, "class", "focus:outline-none focus:border-custom-positive w-full p-3 px-9 placeholder:text-custom-line bg-custom-bg text-custom-fg border-custom-mg border text-sm truncate "), S(h, "id", "autoComplete"), S(h, "type", "search"), S(h, "dir", "ltr"), S(h, "spellcheck", "false"), S(h, "autocorrect", "off"), S(h, "autocomplete", "off"), S(h, "autocapitalize", "off"), S(l, "class", "relative"), S(l, "id", "autoComplete_wrapper"), S(_, "class", "flex justify-between pt-3 items-center"), S(a, "class", ""), S(o, "class", "m-3 mt-0"), S(t, "class", "max-w-screen-sm w-full mx-auto flex-col relative")
            },
            m(r, s) {
                g(r, t, s), ~n && N[n].m(t, null), p(t, i), p(t, o), p(o, a), p(a, l), p(l, c), p(c, u), p(c, d), p(l, f), p(l, h), D(h, e[4]), p(l, m), j && j.m(l, null), p(a, v), p(a, _), ee(b, _, null), p(_, M), ee(Y, _, null), O = !0, T || (C = [$(h, "input", e[11]), $(h, "focus", e[12])], T = !0)
            },
            p(e, r) {
                let o = n;
                n = P(e), n === o ? ~n && N[n].p(e, r) : (s && (Z(), K(N[o], 1, 1, (() => {
                    N[o] = null
                })), q()), ~n ? (s = N[n], s ? s.p(e, r) : (s = N[n] = L[n](e), s.c()), J(s, 1), s.m(t, i)) : s = null), 16 & r && D(h, e[4]), "" != e[4] ? j ? j.p(e, r) : (j = Tt(e), j.c(), j.m(l, null)) : j && (j.d(1), j = null);
                const a = {};
                2097664 & r && (a.$$scope = {
                    dirty: r,
                    ctx: e
                }), b.$set(a);
                const c = {};
                8 & r && (c.disabled = "" != !e[3]), 2097152 & r && (c.$$scope = {
                    dirty: r,
                    ctx: e
                }), Y.$set(c)
            },
            i(e) {
                O || (J(s), J(b.$$.fragment, e), J(Y.$$.fragment, e), O = !0)
            },
            o(e) {
                K(s), K(b.$$.fragment, e), K(Y.$$.fragment, e), O = !1
            },
            d(e) {
                e && y(t), ~n && N[n].d(), j && j.d(), te(b), te(Y), T = !1, r(C)
            }
        }
    }

    function Yt(t) {
        let n, r, s;
        return r = new Be({
            props: {
                errorMsg: "Oops! There was an error loading the answer options..."
            }
        }), r.$on("retry", t[0]), {
            c() {
                n = w("div"), X(r.$$.fragment), S(n, "class", "absolute h-full w-full flex items-center justify-center bg-custom-bg z-50")
            },
            m(e, t) {
                g(e, n, t), ee(r, n, null), s = !0
            },
            p: e,
            i(e) {
                s || (J(r.$$.fragment, e), s = !0)
            },
            o(e) {
                K(r.$$.fragment, e), s = !1
            },
            d(e) {
                e && y(n), te(r)
            }
        }
    }

    function Ot(t) {
        let n, r, s;
        return r = new qe({}), {
            c() {
                n = w("div"), X(r.$$.fragment), S(n, "class", "absolute h-full w-full flex items-center justify-center bg-custom-bg z-50")
            },
            m(e, t) {
                g(e, n, t), ee(r, n, null), s = !0
            },
            p: e,
            i(e) {
                s || (J(r.$$.fragment, e), s = !0)
            },
            o(e) {
                K(r.$$.fragment, e), s = !1
            },
            d(e) {
                e && y(n), te(r)
            }
        }
    }

    function Tt(t) {
        let n, r, s, i, o;
        return {
            c() {
                n = x("svg"), r = x("line"), s = x("line"), S(r, "x1", "18"), S(r, "y1", "6"), S(r, "x2", "6"), S(r, "y2", "18"), S(s, "x1", "6"), S(s, "y1", "6"), S(s, "x2", "18"), S(s, "y2", "18"), S(n, "class", "absolute right-3 top-0 h-full"), S(n, "xmlns", "http://www.w3.org/2000/svg"), S(n, "width", "20"), S(n, "height", "20"), S(n, "viewBox", "0 0 24 24"), S(n, "fill", "none"), S(n, "stroke", "currentColor"), S(n, "stroke-width", "2"), S(n, "stroke-linecap", "round"), S(n, "stroke-linejoin", "round")
            },
            m(e, a) {
                g(e, n, a), p(n, r), p(n, s), i || (o = $(n, "click", t[13]), i = !0)
            },
            p: e,
            d(e) {
                e && y(n), i = !1, o()
            }
        }
    }

    function Ct(e) {
        let t, n, r, s, i;
        return {
            c() {
                t = _("Skip "), n = w("span"), r = _("(+"), s = _(e[9]), i = _("s)"), S(n, "class", "tracking-normal lowercase"), O(n, "hidden", e[9] >= ie.attemptInterval.length)
            },
            m(e, o) {
                g(e, t, o), g(e, n, o), p(n, r), p(n, s), p(n, i)
            },
            p(e, t) {
                512 & t && M(s, e[9]), 512 & t && O(n, "hidden", e[9] >= ie.attemptInterval.length)
            },
            d(e) {
                e && y(t), e && y(n)
            }
        }
    }

    function Lt(e) {
        let t;
        return {
            c() {
                t = _("Submit")
            },
            m(e, n) {
                g(e, t, n)
            },
            d(e) {
                e && y(t)
            }
        }
    }

    function Nt(e) {
        let t, n, r = e[2].hasStarted && Dt(e);
        return {
            c() {
                r && r.c(), t = b()
            },
            m(e, s) {
                r && r.m(e, s), g(e, t, s), n = !0
            },
            p(e, [n]) {
                e[2].hasStarted ? r ? (r.p(e, n), 4 & n && J(r, 1)) : (r = Dt(e), r.c(), J(r, 1), r.m(t.parentNode, t)) : r && (Z(), K(r, 1, 1, (() => {
                    r = null
                })), q())
            },
            i(e) {
                n || (J(r), n = !0)
            },
            o(e) {
                K(r), n = !1
            },
            d(e) {
                r && r.d(e), e && y(t)
            }
        }
    }

    function Pt(e, t, n) {
        let r, s, i, o, a;
        l(e, Me, (e => n(16, o = e))), l(e, Se, (e => n(2, a = e)));
        let c, u = "",
            d = "",
            f = [],
            h = !1;
        document.getElementById("autoComplete"), L((() => {
            a.hasStarted && !a.hasFinished && m()
        }));
        const m = () => {
            n(5, h = !0), fetch(ie.options).then(Ve).then((e => e.json())).then((e => function(e) {
                n(5, h = !1), e.o.forEach((function(e) {
                    e.songs.forEach((function(t) {
                        f.push(e.artist + ie.separator + t)
                    }))
                })), f.push(o.correctAnswer), n(7, s = !0), new bt({
                    placeHolder: "Know it? Search for the artist / title",
                    threshold: 1,
                    wrapper: !1,
                    resultsList: {
                        maxResults: 6,
                        noResults: !0,
                        element: (e, t) => {
                            const n = document.createElement("div");
                            n.classList.add("text-custom-line", "text-xs"), t.results.length > 0 ? n.innerHTML = `${t.results.length} of ${t.matches.length} results for <strong>"${t.query}"</strong>` : n.innerHTML = `No results for <strong>"${t.query}"</strong>. Maybe it's something else...`, t.results.length, e.append(n)
                        }
                    },
                    diacritics: !0,
                    searchEngine: "strict",
                    data: {
                        src: f,
                        cache: !1,
                        filter: e => {
                            let t = document.getElementById("autoComplete").value.toLowerCase();
                            return e = e.sort(((e, n) => {
                                let r = Mt(t, e.value.toLowerCase()),
                                    s = Mt(t, n.value.toLowerCase());
                                return r === s ? e.value > n.value ? -1 : 1 : s > r ? 1 : -1
                            }))
                        }
                    },
                    resultItem: {
                        highlight: !0
                    },
                    events: {
                        focus: {
                            focus: e => {
                                error = !1
                            }
                        },
                        input: {
                            selection: e => {
                                const t = e.detail.selection.value;
                                p.unfocus(), n(3, u = t), document.getElementById("autoComplete").value = t, n(6, c = !0)
                            }
                        }
                    }
                })
            }(e))).catch((function(e) {
                n(5, h = !1), n(8, i = !0)
            }))
        };
        const p = {
                focus() {
                    document.getElementById("autoComplete").focus()
                },
                unfocus() {
                    document.getElementById("autoComplete").blur()
                },
                clear() {
                    document.getElementById("autoComplete").value = "", n(3, u = "")
                }
            },
            g = N();

        function y(e) {
            "skipped" == e ? (g("handleGuess", {
                guess: u,
                isSkipped: !0
            }), p.clear()) : void 0 !== u && "" !== u.trim() ? (g("handleGuess", {
                guess: u,
                isSkipped: !1
            }), p.clear()) : p.focus()
        }
        return e.$$.update = () => {
            4 & e.$$.dirty && n(9, r = a.guessList.length + 1)
        }, n(7, s = !1), n(8, i = !1), [m, p, a, u, d, h, c, s, i, r, y, function() {
            d = this.value, n(4, d)
        }, () => {
            p.clear(), n(6, c = !1)
        }, () => {
            p.clear(), p.focus()
        }, () => y("skipped")]
    }
    St(3);
    class jt extends se {
        constructor(e) {
            super(), re(this, e, Pt, Nt, i, {
                loadSelectOptions: 0,
                guessInput: 1
            })
        }
        get loadSelectOptions() {
            return this.$$.ctx[0]
        }
        get guessInput() {
            return this.$$.ctx[1]
        }
    }

    function At(e) {
        let t, n, r, s, i, o, a, l, u, m, v, x;
        const b = e[6].default,
            D = c(b, e, e[5], null);
        return {
            c() {
                t = w("div"), n = w("div"), r = w("div"), s = w("h2"), i = _(e[0]), o = k(), a = w("div"), l = w("button"), l.innerHTML = '<svg class="w-7 h-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>', u = k(), D && D.c(), S(s, "class", "text-sm text-center uppercase text-custom-line font-semibold tracking-widest"), S(r, "class", "flex-1 pl-7"), l.autofocus = !0, S(l, "class", "border-none text-custom-mg"), S(a, "class", "justify-self-end flex"), S(n, "class", "flex items-center justify-center mb-5"), S(t, "class", "bg-custom-bg border border-custom-mg p-5 rounded-sm")
            },
            m(c, d) {
                g(c, t, d), p(t, n), p(n, r), p(r, s), p(s, i), p(n, o), p(n, a), p(a, l), p(t, u), D && D.m(t, null), m = !0, l.focus(), v || (x = $(l, "click", e[3]), v = !0)
            },
            p(e, t) {
                (!m || 1 & t) && M(i, e[0]), D && D.p && (!m || 32 & t) && f(D, b, e, e[5], m ? d(b, e[5], t, null) : h(e[5]), null)
            },
            i(e) {
                m || (J(D, e), m = !0)
            },
            o(e) {
                K(D, e), m = !1
            },
            d(e) {
                e && y(t), D && D.d(e), v = !1, x()
            }
        }
    }

    function Ht(e) {
        let t, n, r, s, i;
        const o = e[6].default,
            a = c(o, e, e[5], null);
        return {
            c() {
                t = w("button"), t.innerHTML = '<svg class="w-7 h-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>', n = k(), a && a.c(), t.autofocus = !0, S(t, "class", "border-none text-custom-mg absolute right-3 top-3")
            },
            m(o, l) {
                g(o, t, l), g(o, n, l), a && a.m(o, l), r = !0, t.focus(), s || (i = $(t, "click", e[3]), s = !0)
            },
            p(e, t) {
                a && a.p && (!r || 32 & t) && f(a, o, e, e[5], r ? d(o, e[5], t, null) : h(e[5]), null)
            },
            i(e) {
                r || (J(a, e), r = !0)
            },
            o(e) {
                K(a, e), r = !1
            },
            d(e) {
                e && y(t), e && y(n), a && a.d(e), s = !1, i()
            }
        }
    }

    function Et(e) {
        let t, n, s, i, o, a, l, c, u;
        const d = [Ht, At],
            f = [];

        function h(e, t) {
            return 0 == e[1] ? 0 : 1
        }
        return o = h(e), a = f[o] = d[o](e), {
            c() {
                t = w("div"), n = k(), s = w("div"), i = w("div"), a.c(), S(t, "class", "modal-background p-3 flex justify-center svelte-1nyqrwd"), S(i, "class", "pointer-events-auto modal max-w-screen-xs w-full mx-auto top-14 relative "), S(i, "role", "dialog"), S(i, "aria-modal", "true"), S(s, "class", "modal-background p-3 pointer-events-none  svelte-1nyqrwd")
            },
            m(r, a) {
                g(r, t, a), g(r, n, a), g(r, s, a), p(s, i), f[o].m(i, null), e[7](i), l = !0, c || (u = [$(window, "keydown", e[4]), $(t, "click", e[3])], c = !0)
            },
            p(e, [t]) {
                let n = o;
                o = h(e), o === n ? f[o].p(e, t) : (Z(), K(f[n], 1, 1, (() => {
                    f[n] = null
                })), q(), a = f[o], a ? a.p(e, t) : (a = f[o] = d[o](e), a.c()), J(a, 1), a.m(i, null))
            },
            i(e) {
                l || (J(a), l = !0)
            },
            o(e) {
                K(a), l = !1
            },
            d(i) {
                i && y(t), i && y(n), i && y(s), f[o].d(), e[7](null), c = !1, r(u)
            }
        }
    }

    function It(e, t, n) {
        let {
            $$slots: r = {},
            $$scope: s
        } = t;
        const i = N(),
            o = () => i("close");
        let a, {
                title: l
            } = t,
            {
                hasFrame: c
            } = t;
        const u = "undefined" != typeof document && document.activeElement;
        var d;
        return u && (d = () => {
            u.focus()
        }, C().$$.on_destroy.push(d)), e.$$set = e => {
            "title" in e && n(0, l = e.title), "hasFrame" in e && n(1, c = e.hasFrame), "$$scope" in e && n(5, s = e.$$scope)
        }, [l, c, a, o, e => {
            if ("Escape" !== e.key) {
                if ("Tab" === e.key) {
                    const t = a.querySelectorAll("*"),
                        n = Array.from(t).filter((e => e.tabIndex >= 0));
                    let r = n.indexOf(document.activeElement); - 1 === r && e.shiftKey && (r = 0), r += n.length + (e.shiftKey ? -1 : 1), r %= n.length, n[r].focus(), e.preventDefault()
                }
            } else o()
        }, s, r, function(e) {
            A[e ? "unshift" : "push"]((() => {
                a = e, n(2, a)
            }))
        }]
    }
    class Rt extends se {
        constructor(e) {
            super(), re(this, e, It, Et, i, {
                title: 0,
                hasFrame: 1
            })
        }
    }

    function Wt(t) {
        let n, r, s, i, o, a, l, c, u, d, f, h, m;
        return {
            c() {
                n = w("div"), r = w("p"), r.innerHTML = 'A respectful homage to <a href="https://www.nytimes.com/games/wordle/index.html" title="Wordle">Wordle</a>, with a musical twist.', s = k(), i = w("p"), i.textContent = "Each daily Heardle is semi-randomly plucked from a long list of popular\n        tracks. Much love, and all relevant copyright, to those featured.", o = k(), a = w("p"), a.textContent = "We made this for a small group of friends, then gained millions of\n        players overnight. Please be kind 🖖🏽.", l = k(), c = w("p"), u = w("a"), u.innerHTML = '<svg class="mr-1" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M24 4.37a9.6 9.6 0 0 1-2.83.8 5.04 5.04 0 0 0 2.17-2.8c-.95.58-2 1-3.13 1.22A4.86 4.86 0 0 0 16.61 2a4.99 4.99 0 0 0-4.79 6.2A13.87 13.87 0 0 1 1.67 2.92 5.12 5.12 0 0 0 3.2 9.67a4.82 4.82 0 0 1-2.23-.64v.07c0 2.44 1.7 4.48 3.95 4.95a4.84 4.84 0 0 1-2.22.08c.63 2.01 2.45 3.47 4.6 3.51A9.72 9.72 0 0 1 0 19.74 13.68 13.68 0 0 0 7.55 22c9.06 0 14-7.7 14-14.37v-.65c.96-.71 1.79-1.6 2.45-2.61z"></path></svg> @Heardle_app', d = k(), f = w("p"), f.innerHTML = 'Prepared with <a href="https://developers.soundcloud.com">Soundcloud</a>,\n        <a href="https://svelte.dev">Svelte</a>,\n        <a href="https://tailwindcss.com">Tailwind</a>,\n        <a href="https://fonts.google.com/noto/specimen/Noto+Serif+Display">Noto Serif Display</a>,\n        <a href="https://fonts.google.com/noto/specimen/Noto+Sans">Noto Sans</a>,\n        <a href="https://iconsvg.xyz">IconSVG</a>,\n        <a href="https://momentjs.com">momentjs</a>,\n        <a href="https://tarekraafat.github.io/autoComplete.js/#/">autocomplete.js</a>, and powered by <a href="https://vercel.com/">Vercel</a>.\n        <a href="https://omakase.studio" title="Studio Omakase">Served omakase / お任せ</a>.', S(r, "class", "mb-3 text-sm"), S(i, "class", "mb-3 text-sm"), S(a, "class", "mb-3 text-sm"), S(u, "href", "https://twitter.com/Heardle_app"), S(u, "class", "flex items-center no-underline "), S(u, "title", "Heardle on Twitter"), S(c, "class", "mb-3"), S(f, "class", "text-xs mb-3 text-custom-line"), S(n, "class", "text")
            },
            m(e, y) {
                g(e, n, y), p(n, r), p(n, s), p(n, i), p(n, o), p(n, a), p(n, l), p(n, c), p(c, u), p(n, d), p(n, f), h || (m = $(u, "click", t[0]), h = !0)
            },
            p: e,
            i: e,
            o: e,
            d(e) {
                e && y(n), h = !1, m()
            }
        }
    }

    function Ft(e) {
        return [() => {
            ye("clickTwitterLink", {
                name: "clickTwitterLink"
            }), ye("clickTwitterLink#" + currentGame.id, {
                name: "clickTwitterLink"
            })
        }]
    }
    class Gt extends se {
        constructor(e) {
            super(), re(this, e, Ft, Wt, i, {})
        }
    }

    function Ut(t) {
        let n, r, s, i;
        return {
            c() {
                n = w("div"), r = w("a"), r.innerHTML = '<span class="kofitext text-sm svelte-1pj6ila"><img src="https://storage.ko-fi.com/cdn/cup-border.png" alt="Ko-fi donations" class="kofiimg mr-2 mb-0.5 w-7 h-auto svelte-1pj6ila"/>Support us on Ko-Fi</span> \n        <svg class="ml-1 -mr-1" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18l6-6-6-6"></path></svg>', S(r, "class", "kofi-button py-2 px-3 rounded-lg items-center flex  svelte-1pj6ila"), S(r, "href", "https://ko-fi.com/heardle"), S(r, "title", "Support us on Ko-Fi"), S(n, "class", "text-center flex justify-center items-center flex-col ")
            },
            m(e, o) {
                g(e, n, o), p(n, r), s || (i = $(r, "click", t[2]), s = !0)
            },
            p: e,
            i: e,
            o: e,
            d(e) {
                e && y(n), s = !1, i()
            }
        }
    }

    function Vt(e, t, n) {
        let r;
        l(e, Me, (e => n(1, r = e)));
        let {
            src: s = ""
        } = t;
        return e.$$set = e => {
            "src" in e && n(0, s = e.src)
        }, [s, r, () => {
            console.log("clickKofi-" + s), ye("clickKofi", {
                name: "clickKofi"
            }), ye("clickKofi-" + s, {
                name: "clickKofi-" + s
            }), ye("clickKofi#" + r.id, {
                name: "clickKofi#" + r.id
            })
        }]
    }
    class zt extends se {
        constructor(e) {
            super(), re(this, e, Vt, Ut, i, {
                src: 0
            })
        }
    }

    function Bt(t) {
        let n, r;
        return n = new qe({}), {
            c() {
                X(n.$$.fragment)
            },
            m(e, t) {
                ee(n, e, t), r = !0
            },
            p: e,
            i(e) {
                r || (J(n.$$.fragment, e), r = !0)
            },
            o(e) {
                K(n.$$.fragment, e), r = !1
            },
            d(e) {
                te(n, e)
            }
        }
    }

    function Zt(t) {
        let n, r;
        return n = new Be({
            props: {
                errorMsg: "Hmm... We couldn't get a list of our supporters..."
            }
        }), n.$on("retry", t[3]), {
            c() {
                X(n.$$.fragment)
            },
            m(e, t) {
                ee(n, e, t), r = !0
            },
            p: e,
            i(e) {
                r || (J(n.$$.fragment, e), r = !0)
            },
            o(e) {
                K(n.$$.fragment, e), r = !1
            },
            d(e) {
                te(n, e)
            }
        }
    }

    function qt(t) {
        let n, r, s, i, o, a, l, c, u, d;
        return {
            c() {
                n = w("div"), r = w("div"), r.innerHTML = '<span class="px-1 text-sm">Much love to all our supporters:</span>', s = k(), i = w("div"), o = w("p"), a = w("span"), a.innerHTML = '<svg class="inline" xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 24 24" fill="currentColor" stroke="" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>', l = _("\n                Jay, Raj & Kiran, Simon Wongsuwarn, Vin,\n                "), c = _(t[2]), u = k(), d = w("div"), S(r, "class", "flex justify-center items-center mt-6 mb-1"), S(a, "class", "text-custom-negative"), S(o, "class", "pb-6"), S(i, "class", "text-custom-line text-xs h-40 overflow-scroll relative"), S(d, "class", "absolute h-6 bottom-0 w-full border-custom-fg "), Y(d, "background", "linear-gradient(to bottom, rgba(18,18,18,0), rgba(18,18,18,1)) no-repeat bottom"), Y(d, "background-size", "100% 100%"), S(n, "class", "relative")
            },
            m(e, t) {
                g(e, n, t), p(n, r), p(n, s), p(n, i), p(i, o), p(o, a), p(o, l), p(o, c), p(n, u), p(n, d)
            },
            p(e, t) {
                4 & t && M(c, e[2])
            },
            i: e,
            o: e,
            d(e) {
                e && y(n)
            }
        }
    }

    function Jt(t) {
        let n, r, s;
        return r = new qe({}), {
            c() {
                n = w("div"), X(r.$$.fragment), S(n, "class", "mt-6")
            },
            m(e, t) {
                g(e, n, t), ee(r, n, null), s = !0
            },
            p: e,
            i(e) {
                s || (J(r.$$.fragment, e), s = !0)
            },
            o(e) {
                K(r.$$.fragment, e), s = !1
            },
            d(e) {
                e && y(n), te(r)
            }
        }
    }

    function Kt(e) {
        let t, n, r, s;
        const i = [Jt, qt, Zt, Bt],
            o = [];

        function a(e, t) {
            return e[1] ? 0 : e[2] ? 1 : e[0] ? 2 : 3
        }
        return t = a(e), n = o[t] = i[t](e), {
            c() {
                n.c(), r = b()
            },
            m(e, n) {
                o[t].m(e, n), g(e, r, n), s = !0
            },
            p(e, [s]) {
                let l = t;
                t = a(e), t === l ? o[t].p(e, s) : (Z(), K(o[l], 1, 1, (() => {
                    o[l] = null
                })), q(), n = o[t], n ? n.p(e, s) : (n = o[t] = i[t](e), n.c()), J(n, 1), n.m(r.parentNode, r))
            },
            i(e) {
                s || (J(n), s = !0)
            },
            o(e) {
                K(n), s = !1
            },
            d(e) {
                o[t].d(e), e && y(r)
            }
        }
    }

    function Qt(e, t, n) {
        let r, s = !1,
            i = !1;

        function o() {
            n(1, i = !0), fetch(ie.supporters).then(Ve).then((e => e.json())).then((e => function(e) {
                n(1, i = !1), e.supporters ? n(2, r = e.supporters) : n(0, s = !0)
            }(e))).catch((function(e) {
                n(0, s = !0), n(1, i = !1)
            }))
        }
        return L((() => {
            o()
        })), n(2, r = ""), [s, i, r, o]
    }
    class Xt extends se {
        constructor(e) {
            super(), re(this, e, Qt, Kt, i, {})
        }
    }

    function en(t) {
        let n, r, s, i, o, a, l;
        return s = new Xt({}), a = new zt({
            props: {
                src: "modal"
            }
        }), {
            c() {
                n = w("p"), n.textContent = "Heardle went from a small game played amongst friends to millions of players\n    overnight. If you've enjoyed playing, please consider supporting us –\n    we'll do our best to keep improving Heardle for everyone.", r = k(), X(s.$$.fragment), i = k(), o = w("div"), X(a.$$.fragment), S(n, "class", "mb-3 text-sm"), S(o, "class", "pt-6")
            },
            m(e, t) {
                g(e, n, t), g(e, r, t), ee(s, e, t), g(e, i, t), g(e, o, t), ee(a, o, null), l = !0
            },
            p: e,
            i(e) {
                l || (J(s.$$.fragment, e), J(a.$$.fragment, e), l = !0)
            },
            o(e) {
                K(s.$$.fragment, e), K(a.$$.fragment, e), l = !1
            },
            d(e) {
                e && y(n), e && y(r), te(s, e), e && y(i), e && y(o), te(a)
            }
        }
    }
    class tn extends se {
        constructor(e) {
            super(), re(this, e, null, en, i, {})
        }
    }

    function nn(t) {
        let n;
        return {
            c() {
                n = _(t[0])
            },
            m(e, t) {
                g(e, n, t)
            },
            p(e, [t]) {
                1 & t && M(n, e[0])
            },
            i: e,
            o: e,
            d(e) {
                e && y(n)
            }
        }
    }

    function rn(e, t, n) {
        let r = "",
            s = new Date,
            i = 3600 * (23 - s.getHours()) + 60 * (59 - s.getMinutes()) + (59 - s.getSeconds());

        function o() {
            let e = Math.floor(i / 3600),
                t = Math.floor((i - 3600 * e) / 60),
                s = Math.floor(i % 60);
            n(0, r = ("00" + e).slice(-2) + ":" + ("00" + t).slice(-2) + ":" + ("00" + s).slice(-2)), i--, 0 == e && 0 == t && 0 == s && location.reload(!0)
        }
        return o(), setInterval(o, 1e3), [r]
    }
    class sn extends se {
        constructor(e) {
            super(), re(this, e, rn, nn, i, {})
        }
    }

    function on(e) {
        let t;
        return {
            c() {
                t = w("div"), S(t, "class", "w-20 bg-cover bg-center"), Y(t, "background-image", "url(" + e[1].img + ")")
            },
            m(e, n) {
                g(e, t, n)
            },
            p(e, n) {
                2 & n && Y(t, "background-image", "url(" + e[1].img + ")")
            },
            d(e) {
                e && y(t)
            }
        }
    }

    function an(e) {
        let t, n, r, s, i, o = e[0].artist + "",
            a = e[0].title + "";
        return {
            c() {
                t = w("p"), n = _(o), r = k(), s = w("p"), i = _(a), S(s, "class", "text-sm opacity-75")
            },
            m(e, o) {
                g(e, t, o), p(t, n), g(e, r, o), g(e, s, o), p(s, i)
            },
            p(e, t) {
                1 & t && o !== (o = e[0].artist + "") && M(n, o), 1 & t && a !== (a = e[0].title + "") && M(i, a)
            },
            d(e) {
                e && y(t), e && y(r), e && y(s)
            }
        }
    }

    function ln(t) {
        let n, r, s, i, o, a, l, c, u, d, f, h, m, v, x = t[0].year + "",
            b = t[1].img && on(t),
            D = t[0].artist && an(t);
        return {
            c() {
                n = w("a"), r = w("div"), b && b.c(), s = k(), i = w("div"), D && D.c(), o = k(), a = w("div"), l = w("span"), c = _(x), u = k(), d = w("p"), d.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="100" height="14"><defs><linearGradient id="logo_hover_20" x1="0%" y1="0%" x2="0%" y2="100%" spreadMethod="pad"><stop offset="0%" stop-color="#ff7700" stop-opacity="1"></stop><stop offset="100%" stop-color="#ff3300" stop-opacity="1"></stop></linearGradient></defs><path class="text-custom-fg" fill="currentColor" d="M10.517 3.742c-.323 0-.49.363-.49.582 0 0-.244 3.591-.244 4.641 0 1.602.15 2.621.15 2.621 0 .222.261.401.584.401.321 0 .519-.179.519-.401 0 0 .398-1.038.398-2.639 0-1.837-.153-4.127-.284-4.592-.112-.395-.313-.613-.633-.613zm-1.996.268c-.323 0-.49.363-.49.582 0 0-.244 3.322-.244 4.372 0 1.602.119 2.621.119 2.621 0 .222.26.401.584.401.321 0 .581-.179.581-.401 0 0 .081-1.007.081-2.608 0-1.837-.206-4.386-.206-4.386 0-.218-.104-.581-.425-.581zm-2.021 1.729c-.324 0-.49.362-.49.582 0 0-.272 1.594-.272 2.644 0 1.602.179 2.559.179 2.559 0 .222.229.463.552.463.321 0 .519-.241.519-.463 0 0 .19-.944.19-2.546 0-1.837-.253-2.657-.253-2.657 0-.22-.104-.582-.425-.582zm-2.046-.358c-.323 0-.49.363-.49.582 0 0-.162 1.92-.162 2.97 0 1.602.069 2.496.069 2.496 0 .222.26.557.584.557.321 0 .581-.304.581-.526 0 0 .143-.936.143-2.538 0-1.837-.206-2.96-.206-2.96 0-.218-.198-.581-.519-.581zm-2.169 1.482c-.272 0-.232.218-.232.218v3.982s-.04.335.232.335c.351 0 .716-.832.716-2.348 0-1.245-.436-2.187-.716-2.187zm18.715-.976c-.289 0-.567.042-.832.116-.417-2.266-2.806-3.989-5.263-3.989-1.127 0-2.095.705-2.931 1.316v8.16s0 .484.5.484h8.526c1.655 0 3-1.55 3-3.155 0-1.607-1.346-2.932-3-2.932zm10.17.857c-1.077-.253-1.368-.389-1.368-.815 0-.3.242-.611.97-.611.621 0 1.106.253 1.542.699l.981-.951c-.641-.669-1.417-1.067-2.474-1.067-1.339 0-2.425.757-2.425 1.99 0 1.338.873 1.736 2.124 2.026 1.281.291 1.513.486 1.513.923 0 .514-.379.738-1.184.738-.65 0-1.26-.223-1.736-.777l-.98.873c.514.757 1.504 1.232 2.639 1.232 1.853 0 2.668-.873 2.668-2.163 0-1.477-1.193-1.845-2.27-2.097zm6.803-2.745c-1.853 0-2.949 1.435-2.949 3.502s1.096 3.501 2.949 3.501c1.852 0 2.949-1.434 2.949-3.501s-1.096-3.502-2.949-3.502zm0 5.655c-1.097 0-1.553-.941-1.553-2.153 0-1.213.456-2.153 1.553-2.153 1.096 0 1.551.94 1.551 2.153.001 1.213-.454 2.153-1.551 2.153zm8.939-1.736c0 1.086-.533 1.756-1.396 1.756-.864 0-1.388-.689-1.388-1.775v-3.897h-1.358v3.916c0 1.978 1.106 3.084 2.746 3.084 1.726 0 2.754-1.136 2.754-3.103v-3.897h-1.358v3.916zm8.142-.89l.019 1.485c-.087-.174-.31-.515-.475-.768l-2.703-3.692h-1.362v6.894h1.401v-2.988l-.02-1.484c.088.175.311.514.475.767l2.79 3.705h1.213v-6.894h-1.339v2.975zm5.895-2.923h-2.124v6.791h2.027c1.746 0 3.474-1.01 3.474-3.395 0-2.484-1.437-3.396-3.377-3.396zm-.097 5.472h-.67v-4.152h.719c1.436 0 2.028.688 2.028 2.076 0 1.242-.651 2.076-2.077 2.076zm7.909-4.229c.611 0 1 .271 1.242.737l1.26-.582c-.426-.883-1.202-1.503-2.483-1.503-1.775 0-3.016 1.435-3.016 3.502 0 2.143 1.191 3.501 2.968 3.501 1.232 0 2.047-.572 2.513-1.533l-1.145-.68c-.358.602-.718.864-1.329.864-1.019 0-1.611-.932-1.611-2.153-.001-1.261.583-2.153 1.601-2.153zm5.17-1.192h-1.359v6.791h4.083v-1.338h-2.724v-5.453zm6.396-.157c-1.854 0-2.949 1.435-2.949 3.502s1.095 3.501 2.949 3.501c1.853 0 2.95-1.434 2.95-3.501s-1.097-3.502-2.95-3.502zm0 5.655c-1.097 0-1.553-.941-1.553-2.153 0-1.213.456-2.153 1.553-2.153 1.095 0 1.55.94 1.55 2.153.001 1.213-.454 2.153-1.55 2.153zm8.557-1.736c0 1.086-.532 1.756-1.396 1.756-.864 0-1.388-.689-1.388-1.775v-3.794h-1.358v3.813c0 1.978 1.106 3.084 2.746 3.084 1.726 0 2.755-1.136 2.755-3.103v-3.794h-1.36v3.813zm5.449-3.907h-2.318v6.978h2.211c1.908 0 3.789-1.037 3.789-3.489 0-2.552-1.565-3.489-3.682-3.489zm-.108 5.623h-.729v-4.266h.783c1.565 0 2.21.706 2.21 2.133.001 1.276-.707 2.133-2.264 2.133z"></path></svg> \n                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18l6-6-6-6"></path></svg>', S(l, "class", "text-xs uppercase opacity-50 font-bold "), S(d, "class", "flex"), S(a, "class", "flex overflow-hidden justify-between items-center w-full mt-1 "), S(i, "class", "flex-1 m-2 text-white"), S(r, "class", "flex items-stretch rounded-md overflow-hidden"), O(r, "bg-custom-positive", t[1].gotCorrect), O(r, "bg-custom-mg", !t[1].gotCorrect), S(n, "href", f = t[0].url), S(n, "title", h = "Listen to " + t[0].artist + " - " + t[0].title + " on SoundCloud"), S(n, "class", "no-underline")
            },
            m(e, f) {
                g(e, n, f), p(n, r), b && b.m(r, null), p(r, s), p(r, i), D && D.m(i, null), p(i, o), p(i, a), p(a, l), p(l, c), p(a, u), p(a, d), m || (v = $(n, "click", t[2]), m = !0)
            },
            p(e, [t]) {
                e[1].img ? b ? b.p(e, t) : (b = on(e), b.c(), b.m(r, s)) : b && (b.d(1), b = null), e[0].artist ? D ? D.p(e, t) : (D = an(e), D.c(), D.m(i, o)) : D && (D.d(1), D = null), 1 & t && x !== (x = e[0].year + "") && M(c, x), 2 & t && O(r, "bg-custom-positive", e[1].gotCorrect), 2 & t && O(r, "bg-custom-mg", !e[1].gotCorrect), 1 & t && f !== (f = e[0].url) && S(n, "href", f), 1 & t && h !== (h = "Listen to " + e[0].artist + " - " + e[0].title + " on SoundCloud") && S(n, "title", h)
            },
            i: e,
            o: e,
            d(e) {
                e && y(n), b && b.d(), D && D.d(), m = !1, v()
            }
        }
    }

    function cn(e, t, n) {
        let r, s;
        l(e, Me, (e => n(0, r = e))), l(e, Se, (e => n(1, s = e)));
        return [r, s, () => {
            ye("clickPlayerLink", {
                name: "clickPlayerLink"
            }), ye("clickPlayerLink#" + Se.id, {
                name: "clickPlayerLink"
            })
        }]
    }
    class un extends se {
        constructor(e) {
            super(), re(this, e, cn, ln, i, {})
        }
    }

    function dn(e, t, n) {
        const r = e.slice();
        return r[7] = t[n], r[9] = n, r
    }

    function fn(t) {
        let n;
        return {
            c() {
                n = w("div"), S(n, "class", "w-4 h-0.5 mx-0.5 bg-custom-fg")
            },
            m(e, t) {
                g(e, n, t)
            },
            p: e,
            d(e) {
                e && y(n)
            }
        }
    }

    function hn(e) {
        let t;

        function n(e, t) {
            return e[0].guessList[e[9]].isSkipped ? yn : e[0].guessList[e[9]].isArtist && !e[0].guessList[e[9]].isSkipped ? gn : e[0].guessList[e[9]].isCorrect || e[0].guessList[e[9]].isSkipped ? e[0].guessList[e[9]].isCorrect ? mn : void 0 : pn
        }
        let r = n(e),
            s = r && r(e);
        return {
            c() {
                s && s.c(), t = b()
            },
            m(e, n) {
                s && s.m(e, n), g(e, t, n)
            },
            p(e, i) {
                r !== (r = n(e)) && (s && s.d(1), s = r && r(e), s && (s.c(), s.m(t.parentNode, t)))
            },
            d(e) {
                s && s.d(e), e && y(t)
            }
        }
    }

    function mn(e) {
        let t;
        return {
            c() {
                t = w("div"), S(t, "class", "w-4 h-0.5 mx-0.5 bg-custom-positive")
            },
            m(e, n) {
                g(e, t, n)
            },
            d(e) {
                e && y(t)
            }
        }
    }

    function pn(e) {
        let t;
        return {
            c() {
                t = w("div"), S(t, "class", "w-4 h-0.5 mx-0.5 bg-custom-negative")
            },
            m(e, n) {
                g(e, t, n)
            },
            d(e) {
                e && y(t)
            }
        }
    }

    function gn(e) {
        let t;
        return {
            c() {
                t = w("div"), S(t, "class", "w-4 h-0.5 mx-0.5 bg-custom-warning")
            },
            m(e, n) {
                g(e, t, n)
            },
            d(e) {
                e && y(t)
            }
        }
    }

    function yn(e) {
        let t;
        return {
            c() {
                t = w("div"), S(t, "class", "w-4 h-0.5 mx-0.5 bg-custom-mg")
            },
            m(e, n) {
                g(e, t, n)
            },
            d(e) {
                e && y(t)
            }
        }
    }

    function vn(e) {
        let t;

        function n(e, t) {
            return e[9] <= e[2] - 1 ? hn : fn
        }
        let r = n(e),
            s = r(e);
        return {
            c() {
                s.c(), t = b()
            },
            m(e, n) {
                s.m(e, n), g(e, t, n)
            },
            p(e, i) {
                r === (r = n(e)) && s ? s.p(e, i) : (s.d(1), s = r(e), s && (s.c(), s.m(t.parentNode, t)))
            },
            d(e) {
                s.d(e), e && y(t)
            }
        }
    }

    function wn(e) {
        let t, n, r, s, i, o, a, l, c = ie.name + "",
            u = ie.attemptInterval[e[2] - 1] / 1e3 + "",
            d = ie.attemptInterval[e[2] - 1] / 1e3 > 1 ? "s" : "";
        return {
            c() {
                t = _("You got today's "), n = w("sup"), n.textContent = `${ie.prefix}`, r = _(c), s = _(" within "), i = _(u), o = _("\n            second"), a = _(d), l = _(".")
            },
            m(e, c) {
                g(e, t, c), g(e, n, c), g(e, r, c), g(e, s, c), g(e, i, c), g(e, o, c), g(e, a, c), g(e, l, c)
            },
            p(e, t) {
                4 & t && u !== (u = ie.attemptInterval[e[2] - 1] / 1e3 + "") && M(i, u), 4 & t && d !== (d = ie.attemptInterval[e[2] - 1] / 1e3 > 1 ? "s" : "") && M(a, d)
            },
            d(e) {
                e && y(t), e && y(n), e && y(r), e && y(s), e && y(i), e && y(o), e && y(a), e && y(l)
            }
        }
    }

    function xn(t) {
        let n, r, s, i, o, a, l = ie.name + "";
        return {
            c() {
                n = _("You didn't get today's "), r = w("sup"), r.textContent = `${ie.prefix}`, s = _(l), i = _(".\n            "), o = w("br"), a = _("\n            Better luck tomorrow!")
            },
            m(e, t) {
                g(e, n, t), g(e, r, t), g(e, s, t), g(e, i, t), g(e, o, t), g(e, a, t)
            },
            p: e,
            d(e) {
                e && y(n), e && y(r), e && y(s), e && y(i), e && y(o), e && y(a)
            }
        }
    }

    function _n(e) {
        let t;
        return {
            c() {
                t = w("div"), t.textContent = "Copied to clipboard!", S(t, "class", "tracking-widest uppercase text-xs text-custom-line p-3 pb-0 text-center")
            },
            m(e, n) {
                g(e, t, n)
            },
            d(e) {
                e && y(t)
            }
        }
    }

    function kn(e) {
        let t, n, r, s, i, o, a;
        return {
            c() {
                t = _("Share\n            "), n = x("svg"), r = x("circle"), s = x("circle"), i = x("circle"), o = x("line"), a = x("line"), S(r, "cx", "18"), S(r, "cy", "5"), S(r, "r", "3"), S(s, "cx", "6"), S(s, "cy", "12"), S(s, "r", "3"), S(i, "cx", "18"), S(i, "cy", "19"), S(i, "r", "3"), S(o, "x1", "8.59"), S(o, "y1", "13.51"), S(o, "x2", "15.42"), S(o, "y2", "17.49"), S(a, "x1", "15.41"), S(a, "y1", "6.51"), S(a, "x2", "8.59"), S(a, "y2", "10.49"), S(n, "class", "inline-block ml-2"), S(n, "xmlns", "http://www.w3.org/2000/svg"), S(n, "width", "18"), S(n, "height", "18"), S(n, "viewBox", "0 0 24 24"), S(n, "fill", "none"), S(n, "stroke", "currentColor"), S(n, "stroke-width", "2"), S(n, "stroke-linecap", "round"), S(n, "stroke-linejoin", "round")
            },
            m(e, l) {
                g(e, t, l), g(e, n, l), p(n, r), p(n, s), p(n, i), p(n, o), p(n, a)
            },
            d(e) {
                e && y(t), e && y(n)
            }
        }
    }

    function bn(t) {
        let n, r, s, i, o, a, l, c, u, d;
        return u = new zt({
            props: {
                src: "results"
            }
        }), {
            c() {
                n = w("div"), r = w("div"), s = w("span"), s.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" stroke="" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>', i = k(), o = w("span"), a = w("sup"), a.textContent = `${ie.prefix}`, l = _("Heardle?"), c = k(), X(u.$$.fragment), S(s, "class", "text-custom-negative"), S(o, "class", "pr-4 pl-1 text-sm"), S(r, "class", "flex justify-center items-center mb-3"), S(n, "class", "bg-custom-highlight flex-col items-center justify-center flex p-4 mx-3 rounded-t-md")
            },
            m(e, t) {
                g(e, n, t), p(n, r), p(r, s), p(r, i), p(r, o), p(o, a), p(o, l), p(n, c), ee(u, n, null), d = !0
            },
            p: e,
            i(e) {
                d || (J(u.$$.fragment, e), d = !0)
            },
            o(e) {
                K(u.$$.fragment, e), d = !1
            },
            d(e) {
                e && y(n), te(u)
            }
        }
    }

    function $n(e) {
        let t, n, r, s, i, o, a, l, c, u, d, f, h, m, x, b, $, D, Y, O, T, C, L, N, P, j, A, H, E = (e[4] ? oe[e[2]] : oe[0]) + "";
        n = new un({});
        let I = Array(e[3]),
            R = [];
        for (let t = 0; t < I.length; t += 1) R[t] = vn(dn(e, I, t));

        function W(e, t) {
            return e[4] ? wn : xn
        }
        let F = W(e),
            G = F(e),
            U = e[1] && _n();
        m = new ce({
            props: {
                primary: !0,
                $$slots: {
                    default: [kn]
                },
                $$scope: {
                    ctx: e
                }
            }
        }), m.$on("click", e[6]), j = new sn({});
        let V = !e[5].songRestricted && bn();
        return {
            c() {
                t = w("div"), X(n.$$.fragment), r = k(), s = w("div"), i = w("p"), o = _(E), a = k(), l = w("div");
                for (let e = 0; e < R.length; e += 1) R[e].c();
                c = k(), u = w("p"), G.c(), d = k(), U && U.c(), f = k(), h = w("div"), X(m.$$.fragment), x = k(), b = w("div"), $ = w("div"), D = w("div"), Y = w("div"), O = w("div"), T = _("Next "), C = w("sup"), C.textContent = `${ie.prefix}`, L = _("Heardle in:"), N = k(), P = w("div"), X(j.$$.fragment), A = k(), V && V.c(), S(t, "class", "p-3 pb-0 flex-col items-evenly"), S(i, "class", "text-sm text-custom-line uppercase tracking-widest font-bold"), S(l, "class", "flex justify-center my-3"), S(u, "class", ""), S(h, "class", "flex flex-col justify-center items-center pt-3"), S(s, "class", "text-center px-3"), S(O, "class", "text-custom-line text-xs"), S(P, "class", "tracking-widest text-lg"), S(Y, "class", "text-center text-sm pr-1"), S(D, "class", "flex items-center justify-center pb-1"), S($, "class", "flex-col justify-center items-center m-3 ")
            },
            m(e, y) {
                g(e, t, y), ee(n, t, null), g(e, r, y), g(e, s, y), p(s, i), p(i, o), p(s, a), p(s, l);
                for (let e = 0; e < R.length; e += 1) R[e].m(l, null);
                p(s, c), p(s, u), G.m(u, null), p(s, d), U && U.m(s, null), p(s, f), p(s, h), ee(m, h, null), g(e, x, y), g(e, b, y), p(b, $), p($, D), p(D, Y), p(Y, O), p(O, T), p(O, C), p(O, L), p(Y, N), p(Y, P), ee(j, P, null), p(b, A), V && V.m(b, null), H = !0
            },
            p(e, [t]) {
                if ((!H || 20 & t) && E !== (E = (e[4] ? oe[e[2]] : oe[0]) + "") && M(o, E), 13 & t) {
                    let n;
                    for (I = Array(e[3]), n = 0; n < I.length; n += 1) {
                        const r = dn(e, I, n);
                        R[n] ? R[n].p(r, t) : (R[n] = vn(r), R[n].c(), R[n].m(l, null))
                    }
                    for (; n < R.length; n += 1) R[n].d(1);
                    R.length = I.length
                }
                F === (F = W(e)) && G ? G.p(e, t) : (G.d(1), G = F(e), G && (G.c(), G.m(u, null))), e[1] ? U || (U = _n(), U.c(), U.m(s, f)) : U && (U.d(1), U = null);
                const n = {};
                1024 & t && (n.$$scope = {
                    dirty: t,
                    ctx: e
                }), m.$set(n), e[5].songRestricted ? V && (Z(), K(V, 1, 1, (() => {
                    V = null
                })), q()) : V ? (V.p(e, t), 32 & t && J(V, 1)) : (V = bn(), V.c(), J(V, 1), V.m(b, null))
            },
            i(e) {
                H || (J(n.$$.fragment, e), J(m.$$.fragment, e), J(j.$$.fragment, e), J(V), H = !0)
            },
            o(e) {
                K(n.$$.fragment, e), K(m.$$.fragment, e), K(j.$$.fragment, e), K(V), H = !1
            },
            d(e) {
                e && y(t), te(n), e && y(r), e && y(s), v(R, e), G.d(), U && U.d(), te(m), e && y(x), e && y(b), te(j), V && V.d()
            }
        }
    }

    function Sn(e, t, n) {
        let r, s, i, o, a;
        l(e, Se, (e => n(0, o = e))), l(e, Me, (e => n(5, a = e)));
        let c = !1;
        return e.$$.update = () => {
            1 & e.$$.dirty && n(2, r = o.guessList.length), 1 & e.$$.dirty && n(4, s = o.gotCorrect)
        }, n(3, i = ie.attemptInterval.length), [o, c, r, i, s, a, () => {
            let e = "#" + ie.name + " #" + o.id,
                t = ie.url,
                s = "";
            o.gotCorrect ? r < i / 3 ? s += "🔊" : r < i / 3 * 2 ? s += "🔉" : r <= i && (s += "🔈") : s += "🔇";
            for (let e = 0; e < i; e++) r > e ? 1 == o.guessList[e].isCorrect ? s += "🟩" : 1 == o.guessList[e].isSkipped ? s += "⬛️" : 1 == o.guessList[e].isArtist ? s += "🟨" : s += "🟥" : s += "⬜️";
            let a = e + "\n\n" + s + "\n\n" + t;
            if (!navigator.share || !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || /Firefox/i.test(navigator.userAgent)) return navigator && navigator.clipboard && navigator.clipboard.writeText ? (ye("clickShareClipboard", {
                name: "clickShareClipboard"
            }), ye("clickShareClipboard#" + o.id, {
                name: "clickShareClipboard#" + o.id
            }), n(1, c = !0), setTimeout((() => {
                n(1, c = !1)
            }), 2e3), navigator.clipboard.writeText(a)) : Promise.reject("There was a problem copying your result to the clipboard");
            navigator.share({
                text: a
            }).then((() => {
                ye("clickSharePanel", {
                    name: "clickSharePanel"
                }), ye("clickSharePanel#" + o.id, {
                    name: "clickSharePanel#" + o.id
                })
            })).catch(console.error)
        }]
    }
    class Mn extends se {
        constructor(e) {
            super(), re(this, e, Sn, $n, i, {})
        }
    }

    function Dn(e) {
        let t;
        return {
            c() {
                t = _("Play")
            },
            m(e, n) {
                g(e, t, n)
            },
            d(e) {
                e && y(t)
            }
        }
    }

    function Yn(e) {
        let t, n, r, s, i, o, a, l, c, u;
        return c = new ce({
            props: {
                primary: !0,
                $$slots: {
                    default: [Dn]
                },
                $$scope: {
                    ctx: e
                }
            }
        }), c.$on("click", e[0]), {
            c() {
                t = w("div"), n = w("div"), n.innerHTML = '<div class="mr-4 w-8 text-custom-line"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-7 w-7"><circle cx="5.5" cy="17.5" r="2.5"></circle><circle cx="17.5" cy="15.5" r="2.5"></circle><path d="M8 17V5l12-2v12"></path></svg></div> \n        <div><p>Listen to the intro, then find the correct artist &amp; title in\n                the list.</p></div>', r = k(), s = w("div"), s.innerHTML = '<div class="mr-4 w-8 text-custom-line"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg></div> \n        <div><p>Skipped or incorrect attempts unlock more of the intro</p></div>', i = k(), o = w("div"), o.innerHTML = '<div class="mr-4 w-8 text-custom-line"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-7"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path></svg></div> \n        <div><p>Answer in as few tries as possible and share your score!</p></div>', a = k(), l = w("div"), X(c.$$.fragment), S(n, "class", "flex items-center mb-6"), S(s, "class", "flex items-center mb-6"), S(o, "class", "flex items-center mb-6"), S(l, "class", "justify-center flex py-2 mt-2")
            },
            m(e, d) {
                g(e, t, d), p(t, n), p(t, r), p(t, s), p(t, i), p(t, o), p(t, a), p(t, l), ee(c, l, null), u = !0
            },
            p(e, [t]) {
                const n = {};
                4 & t && (n.$$scope = {
                    dirty: t,
                    ctx: e
                }), c.$set(n)
            },
            i(e) {
                u || (J(c.$$.fragment, e), u = !0)
            },
            o(e) {
                K(c.$$.fragment, e), u = !1
            },
            d(e) {
                e && y(t), te(c)
            }
        }
    }

    function On(e) {
        const t = N();
        return [() => t("close")]
    }
    class Tn extends se {
        constructor(e) {
            super(), re(this, e, On, Yn, i, {})
        }
    }

    function Cn(e, t, n) {
        const r = e.slice();
        return r[16] = t[n], r[18] = n, r
    }

    function Ln(t) {
        let n;
        return {
            c() {
                n = w("div"), n.textContent = "Oops. There was an error loading your stats...", S(n, "class", "text-center py-3 text-custom-line font-semibold")
            },
            m(e, t) {
                g(e, n, t)
            },
            p: e,
            d(e) {
                e && y(n)
            }
        }
    }

    function Nn(e) {
        let t, n, r, s, i, o, a, l, c, u, d, f, h, m, x, b, $, D, Y, O, T, C, L, N, P, j, A, H, E, I, R, W, F, G, U = (e[2] > 0 ? (e[4] / e[2] * 100).toFixed(1) : 0) + "",
            V = Math.max(...e[3]) + "",
            z = e[6],
            B = [];
        for (let t = 0; t < z.length; t += 1) B[t] = An(Cn(e, z, t));
        return {
            c() {
                t = w("div");
                for (let e = 0; e < B.length; e += 1) B[e].c();
                n = k(), r = w("div"), s = w("div"), i = w("div"), o = _(e[2]), a = k(), l = w("div"), l.textContent = "Played", c = k(), u = w("div"), d = w("div"), f = _(e[4]), h = k(), m = w("div"), m.textContent = "Won", x = k(), b = w("div"), $ = w("div"), D = _(U), Y = _("%"), O = k(), T = w("div"), T.textContent = "Win rate", C = k(), L = w("div"), N = w("div"), P = w("div"), j = _(e[5]), A = k(), H = w("div"), H.textContent = "Current Streak", E = k(), I = w("div"), R = w("div"), W = _(V), F = k(), G = w("div"), G.textContent = "Max Streak", S(t, "class", "flex justify-between py-3"), S(i, "class", "text-xl font-semibold"), S(l, "class", "text-custom-line text-sm "), S(s, "class", "flex-1"), S(d, "class", "text-xl font-semibold"), S(m, "class", "text-custom-line text-sm "), S(u, "class", "flex-1"), S($, "class", "text-xl font-semibold"), S(T, "class", "text-custom-line text-sm"), S(b, "class", "flex-1"), S(r, "class", "flex justify-between text-center w-full py-3"), S(P, "class", "text-xl font-semibold"), S(H, "class", "text-custom-line text-sm"), S(N, "class", "flex-1"), S(R, "class", "text-xl font-semibold"), S(G, "class", "text-custom-line text-sm"), S(I, "class", "flex-1"), S(L, "class", "flex justify-between text-center w-full py-3 pt-0")
            },
            m(e, y) {
                g(e, t, y);
                for (let e = 0; e < B.length; e += 1) B[e].m(t, null);
                g(e, n, y), g(e, r, y), p(r, s), p(s, i), p(i, o), p(s, a), p(s, l), p(r, c), p(r, u), p(u, d), p(d, f), p(u, h), p(u, m), p(r, x), p(r, b), p(b, $), p($, D), p($, Y), p(b, O), p(b, T), g(e, C, y), g(e, L, y), p(L, N), p(N, P), p(P, j), p(N, A), p(N, H), p(L, E), p(L, I), p(I, R), p(R, W), p(I, F), p(I, G)
            },
            p(e, n) {
                if (961 & n) {
                    let r;
                    for (z = e[6], r = 0; r < z.length; r += 1) {
                        const s = Cn(e, z, r);
                        B[r] ? B[r].p(s, n) : (B[r] = An(s), B[r].c(), B[r].m(t, null))
                    }
                    for (; r < B.length; r += 1) B[r].d(1);
                    B.length = z.length
                }
                4 & n && M(o, e[2]), 16 & n && M(f, e[4]), 20 & n && U !== (U = (e[2] > 0 ? (e[4] / e[2] * 100).toFixed(1) : 0) + "") && M(D, U), 32 & n && M(j, e[5]), 8 & n && V !== (V = Math.max(...e[3]) + "") && M(W, V)
            },
            d(e) {
                e && y(t), v(B, e), e && y(n), e && y(r), e && y(C), e && y(L)
            }
        }
    }

    function Pn(e) {
        let t, n, r, s, i, o = e[18] + 1 + "";
        return {
            c() {
                t = w("span"), n = _(o), r = _("°"), s = k(), i = w("span"), O(t, "font-semibold", e[18] == e[0] - 1 && e[8]), O(t, "text-custom-positive", e[18] == e[0] - 1 && 0 != e[9] && e[8]), O(t, "text-custom-negative", e[18] == e[0] && 0 == e[9] && e[8]), S(i, "class", "text-custom-positive")
            },
            m(e, o) {
                g(e, t, o), p(t, n), p(t, r), g(e, s, o), g(e, i, o)
            },
            p(e, n) {
                257 & n && O(t, "font-semibold", e[18] == e[0] - 1 && e[8]), 769 & n && O(t, "text-custom-positive", e[18] == e[0] - 1 && 0 != e[9] && e[8]), 769 & n && O(t, "text-custom-negative", e[18] == e[0] && 0 == e[9] && e[8])
            },
            d(e) {
                e && y(t), e && y(s), e && y(i)
            }
        }
    }

    function jn(e) {
        let t, n, r;
        return {
            c() {
                t = x("svg"), n = x("line"), r = x("line"), S(n, "x1", "18"), S(n, "y1", "6"), S(n, "x2", "6"), S(n, "y2", "18"), S(r, "x1", "6"), S(r, "y1", "6"), S(r, "x2", "18"), S(r, "y2", "18"), S(t, "class", "mx-auto"), S(t, "xmlns", "http://www.w3.org/2000/svg"), S(t, "width", "16"), S(t, "height", "16"), S(t, "viewBox", "0 0 24 24"), S(t, "fill", "none"), S(t, "stroke", "currentColor"), S(t, "stroke-width", "2"), S(t, "stroke-linecap", "round"), S(t, "stroke-linejoin", "round"), O(t, "text-custom-negative", e[18] == e[0] && 0 == e[9] && e[8])
            },
            m(e, s) {
                g(e, t, s), p(t, n), p(t, r)
            },
            p(e, n) {
                769 & n && O(t, "text-custom-negative", e[18] == e[0] && 0 == e[9] && e[8])
            },
            d(e) {
                e && y(t)
            }
        }
    }

    function An(e) {
        let t, n, r, s, i, o, a, l, c, u = (e[16] > 0 ? e[16] : " ") + "";

        function d(e, t) {
            return e[18] === e[6].length - 1 ? jn : Pn
        }
        let f = d(e),
            h = f(e);
        return {
            c() {
                t = w("div"), n = w("div"), r = w("div"), s = w("div"), i = w("span"), o = _(u), a = k(), l = w("div"), h.c(), c = k(), S(i, "class", "absolute -top-5 w-full text-center left-0"), S(s, "class", "h-full absolute text-center w-full py-1 text-xs "), O(s, "bg-custom-positive", e[18] == e[0] - 1 && 0 != e[9] && e[8]), O(s, "bg-custom-negative", e[18] == e[0] && 0 == e[9] && e[8]), S(r, "class", "absolute bg-custom-mg w-6"), Y(r, "height", 0 == e[16] ? "0.5px" : e[16] / e[7] * 100 + "%"), S(n, "class", "h-32 relative w-9 flex justify-center items-end"), S(l, "class", "text-center border-right text-xs pt-1 text-custom-line"), S(t, "class", "flex flex-col items-stretch ")
            },
            m(e, u) {
                g(e, t, u), p(t, n), p(n, r), p(r, s), p(s, i), p(i, o), p(t, a), p(t, l), h.m(l, null), p(t, c)
            },
            p(e, t) {
                64 & t && u !== (u = (e[16] > 0 ? e[16] : " ") + "") && M(o, u), 769 & t && O(s, "bg-custom-positive", e[18] == e[0] - 1 && 0 != e[9] && e[8]), 769 & t && O(s, "bg-custom-negative", e[18] == e[0] && 0 == e[9] && e[8]), 192 & t && Y(r, "height", 0 == e[16] ? "0.5px" : e[16] / e[7] * 100 + "%"), f === (f = d(e)) && h ? h.p(e, t) : (h.d(1), h = f(e), h && (h.c(), h.m(l, null)))
            },
            d(e) {
                e && y(t), h.d()
            }
        }
    }

    function Hn(t) {
        let n;

        function r(e, t) {
            return e[1] ? Nn : Ln
        }
        let s = r(t),
            i = s(t);
        return {
            c() {
                i.c(), n = b()
            },
            m(e, t) {
                i.m(e, t), g(e, n, t)
            },
            p(e, [t]) {
                s === (s = r(e)) && i ? i.p(e, t) : (i.d(1), i = s(e), i && (i.c(), i.m(n.parentNode, n)))
            },
            i: e,
            o: e,
            d(e) {
                i.d(e), e && y(n)
            }
        }
    }

    function En(e, t, n) {
        let r, s;
        l(e, Se, (e => n(12, r = e))), l(e, De, (e => n(13, s = e)));
        let {
            todaysScore: i
        } = t, o = !1, a = 0, c = [], u = Array(r.id + 1).fill(0), d = 0, f = 0;
        const h = ie.attemptInterval.length;
        let m = r.hasFinished;
        i = r.guessList.length;
        let p = r.gotCorrect ? r.guessList.length + 1 : 0,
            g = [];
        for (let e = 0; e < h + 1; e++) g[e] = 0;
        let y = s.sort(((e, t) => e.id > t.id ? 1 : -1)),
            v = 0;
        return y.length > 0 && (o = !0, y.forEach((function(e) {
            e.id <= r.id && !0 === e.hasFinished && (n(2, ++a), !0 === e.gotCorrect ? (u[e.id] = 1, n(4, ++d), n(6, ++g[e.score - 1], g), g[e.score - 1] > v && n(7, v = g[e.score - 1])) : (n(6, ++g[h], g), g[h] > v && n(7, v = g[h])))
        })), c = u.reduce(((e, t) => (t ? e[e.length - 1]++ : e.push(0), e)), [0]), f = c.slice(m ? -1 : -2)[0]), e.$$set = e => {
            "todaysScore" in e && n(0, i = e.todaysScore)
        }, [i, o, a, c, d, f, g, v, m, p]
    }
    class In extends se {
        constructor(e) {
            super(), re(this, e, En, Hn, i, {
                todaysScore: 0
            })
        }
    }

    function Rn(t) {
        let n;
        return {
            c() {
                n = w("a"), n.innerHTML = '<h1 class="font-serif text-3xl font-bold flex-grow text-center flex-1"><sup style="font-size:60%" class="-top-3">80s</sup>\n        Heardle</h1>', S(n, "href", "http://80s.heardle.app"), S(n, "class", "flex items-center")
            },
            m(e, t) {
                g(e, n, t)
            },
            p: e,
            i: e,
            o: e,
            d(e) {
                e && y(n)
            }
        }
    }
    class Wn extends se {
        constructor(e) {
            super(), re(this, e, null, Rn, i, {})
        }
    }
    var Fn = _t((function(e, t) {
        e.exports = function() {
            var t, n;

            function r() {
                return t.apply(null, arguments)
            }

            function s(e) {
                t = e
            }

            function i(e) {
                return e instanceof Array || "[object Array]" === Object.prototype.toString.call(e)
            }

            function o(e) {
                return null != e && "[object Object]" === Object.prototype.toString.call(e)
            }

            function a(e, t) {
                return Object.prototype.hasOwnProperty.call(e, t)
            }

            function l(e) {
                if (Object.getOwnPropertyNames) return 0 === Object.getOwnPropertyNames(e).length;
                var t;
                for (t in e)
                    if (a(e, t)) return !1;
                return !0
            }

            function c(e) {
                return void 0 === e
            }

            function u(e) {
                return "number" == typeof e || "[object Number]" === Object.prototype.toString.call(e)
            }

            function d(e) {
                return e instanceof Date || "[object Date]" === Object.prototype.toString.call(e)
            }

            function f(e, t) {
                var n, r = [];
                for (n = 0; n < e.length; ++n) r.push(t(e[n], n));
                return r
            }

            function h(e, t) {
                for (var n in t) a(t, n) && (e[n] = t[n]);
                return a(t, "toString") && (e.toString = t.toString), a(t, "valueOf") && (e.valueOf = t.valueOf), e
            }

            function m(e, t, n, r) {
                return Zn(e, t, n, r, !0).utc()
            }

            function p() {
                return {
                    empty: !1,
                    unusedTokens: [],
                    unusedInput: [],
                    overflow: -2,
                    charsLeftOver: 0,
                    nullInput: !1,
                    invalidEra: null,
                    invalidMonth: null,
                    invalidFormat: !1,
                    userInvalidated: !1,
                    iso: !1,
                    parsedDateParts: [],
                    era: null,
                    meridiem: null,
                    rfc2822: !1,
                    weekdayMismatch: !1
                }
            }

            function g(e) {
                return null == e._pf && (e._pf = p()), e._pf
            }

            function y(e) {
                if (null == e._isValid) {
                    var t = g(e),
                        r = n.call(t.parsedDateParts, (function(e) {
                            return null != e
                        })),
                        s = !isNaN(e._d.getTime()) && t.overflow < 0 && !t.empty && !t.invalidEra && !t.invalidMonth && !t.invalidWeekday && !t.weekdayMismatch && !t.nullInput && !t.invalidFormat && !t.userInvalidated && (!t.meridiem || t.meridiem && r);
                    if (e._strict && (s = s && 0 === t.charsLeftOver && 0 === t.unusedTokens.length && void 0 === t.bigHour), null != Object.isFrozen && Object.isFrozen(e)) return s;
                    e._isValid = s
                }
                return e._isValid
            }

            function v(e) {
                var t = m(NaN);
                return null != e ? h(g(t), e) : g(t).userInvalidated = !0, t
            }
            n = Array.prototype.some ? Array.prototype.some : function(e) {
                var t, n = Object(this),
                    r = n.length >>> 0;
                for (t = 0; t < r; t++)
                    if (t in n && e.call(this, n[t], t, n)) return !0;
                return !1
            };
            var w = r.momentProperties = [],
                x = !1;

            function _(e, t) {
                var n, r, s;
                if (c(t._isAMomentObject) || (e._isAMomentObject = t._isAMomentObject), c(t._i) || (e._i = t._i), c(t._f) || (e._f = t._f), c(t._l) || (e._l = t._l), c(t._strict) || (e._strict = t._strict), c(t._tzm) || (e._tzm = t._tzm), c(t._isUTC) || (e._isUTC = t._isUTC), c(t._offset) || (e._offset = t._offset), c(t._pf) || (e._pf = g(t)), c(t._locale) || (e._locale = t._locale), w.length > 0)
                    for (n = 0; n < w.length; n++) c(s = t[r = w[n]]) || (e[r] = s);
                return e
            }

            function k(e) {
                _(this, e), this._d = new Date(null != e._d ? e._d.getTime() : NaN), this.isValid() || (this._d = new Date(NaN)), !1 === x && (x = !0, r.updateOffset(this), x = !1)
            }

            function b(e) {
                return e instanceof k || null != e && null != e._isAMomentObject
            }

            function $(e) {
                !1 === r.suppressDeprecationWarnings && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + e)
            }

            function S(e, t) {
                var n = !0;
                return h((function() {
                    if (null != r.deprecationHandler && r.deprecationHandler(null, e), n) {
                        var s, i, o, l = [];
                        for (i = 0; i < arguments.length; i++) {
                            if (s = "", "object" == typeof arguments[i]) {
                                for (o in s += "\n[" + i + "] ", arguments[0]) a(arguments[0], o) && (s += o + ": " + arguments[0][o] + ", ");
                                s = s.slice(0, -2)
                            } else s = arguments[i];
                            l.push(s)
                        }
                        $(e + "\nArguments: " + Array.prototype.slice.call(l).join("") + "\n" + (new Error).stack), n = !1
                    }
                    return t.apply(this, arguments)
                }), t)
            }
            var M, D = {};

            function Y(e, t) {
                null != r.deprecationHandler && r.deprecationHandler(e, t), D[e] || ($(t), D[e] = !0)
            }

            function O(e) {
                return "undefined" != typeof Function && e instanceof Function || "[object Function]" === Object.prototype.toString.call(e)
            }

            function T(e) {
                var t, n;
                for (n in e) a(e, n) && (O(t = e[n]) ? this[n] = t : this["_" + n] = t);
                this._config = e, this._dayOfMonthOrdinalParseLenient = new RegExp((this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source)
            }

            function C(e, t) {
                var n, r = h({}, e);
                for (n in t) a(t, n) && (o(e[n]) && o(t[n]) ? (r[n] = {}, h(r[n], e[n]), h(r[n], t[n])) : null != t[n] ? r[n] = t[n] : delete r[n]);
                for (n in e) a(e, n) && !a(t, n) && o(e[n]) && (r[n] = h({}, r[n]));
                return r
            }

            function L(e) {
                null != e && this.set(e)
            }
            r.suppressDeprecationWarnings = !1, r.deprecationHandler = null, M = Object.keys ? Object.keys : function(e) {
                var t, n = [];
                for (t in e) a(e, t) && n.push(t);
                return n
            };
            var N = {
                sameDay: "[Today at] LT",
                nextDay: "[Tomorrow at] LT",
                nextWeek: "dddd [at] LT",
                lastDay: "[Yesterday at] LT",
                lastWeek: "[Last] dddd [at] LT",
                sameElse: "L"
            };

            function P(e, t, n) {
                var r = this._calendar[e] || this._calendar.sameElse;
                return O(r) ? r.call(t, n) : r
            }

            function j(e, t, n) {
                var r = "" + Math.abs(e),
                    s = t - r.length;
                return (e >= 0 ? n ? "+" : "" : "-") + Math.pow(10, Math.max(0, s)).toString().substr(1) + r
            }
            var A = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
                H = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
                E = {},
                I = {};

            function R(e, t, n, r) {
                var s = r;
                "string" == typeof r && (s = function() {
                    return this[r]()
                }), e && (I[e] = s), t && (I[t[0]] = function() {
                    return j(s.apply(this, arguments), t[1], t[2])
                }), n && (I[n] = function() {
                    return this.localeData().ordinal(s.apply(this, arguments), e)
                })
            }

            function W(e) {
                return e.match(/\[[\s\S]/) ? e.replace(/^\[|\]$/g, "") : e.replace(/\\/g, "")
            }

            function F(e) {
                var t, n, r = e.match(A);
                for (t = 0, n = r.length; t < n; t++) I[r[t]] ? r[t] = I[r[t]] : r[t] = W(r[t]);
                return function(t) {
                    var s, i = "";
                    for (s = 0; s < n; s++) i += O(r[s]) ? r[s].call(t, e) : r[s];
                    return i
                }
            }

            function G(e, t) {
                return e.isValid() ? (t = U(t, e.localeData()), E[t] = E[t] || F(t), E[t](e)) : e.localeData().invalidDate()
            }

            function U(e, t) {
                var n = 5;

                function r(e) {
                    return t.longDateFormat(e) || e
                }
                for (H.lastIndex = 0; n >= 0 && H.test(e);) e = e.replace(H, r), H.lastIndex = 0, n -= 1;
                return e
            }
            var V = {
                LTS: "h:mm:ss A",
                LT: "h:mm A",
                L: "MM/DD/YYYY",
                LL: "MMMM D, YYYY",
                LLL: "MMMM D, YYYY h:mm A",
                LLLL: "dddd, MMMM D, YYYY h:mm A"
            };

            function z(e) {
                var t = this._longDateFormat[e],
                    n = this._longDateFormat[e.toUpperCase()];
                return t || !n ? t : (this._longDateFormat[e] = n.match(A).map((function(e) {
                    return "MMMM" === e || "MM" === e || "DD" === e || "dddd" === e ? e.slice(1) : e
                })).join(""), this._longDateFormat[e])
            }
            var B = "Invalid date";

            function Z() {
                return this._invalidDate
            }
            var q = "%d",
                J = /\d{1,2}/;

            function K(e) {
                return this._ordinal.replace("%d", e)
            }
            var Q = {
                future: "in %s",
                past: "%s ago",
                s: "a few seconds",
                ss: "%d seconds",
                m: "a minute",
                mm: "%d minutes",
                h: "an hour",
                hh: "%d hours",
                d: "a day",
                dd: "%d days",
                w: "a week",
                ww: "%d weeks",
                M: "a month",
                MM: "%d months",
                y: "a year",
                yy: "%d years"
            };

            function X(e, t, n, r) {
                var s = this._relativeTime[n];
                return O(s) ? s(e, t, n, r) : s.replace(/%d/i, e)
            }

            function ee(e, t) {
                var n = this._relativeTime[e > 0 ? "future" : "past"];
                return O(n) ? n(t) : n.replace(/%s/i, t)
            }
            var te = {};

            function ne(e, t) {
                var n = e.toLowerCase();
                te[n] = te[n + "s"] = te[t] = e
            }

            function re(e) {
                return "string" == typeof e ? te[e] || te[e.toLowerCase()] : void 0
            }

            function se(e) {
                var t, n, r = {};
                for (n in e) a(e, n) && (t = re(n)) && (r[t] = e[n]);
                return r
            }
            var ie = {};

            function oe(e, t) {
                ie[e] = t
            }

            function ae(e) {
                var t, n = [];
                for (t in e) a(e, t) && n.push({
                    unit: t,
                    priority: ie[t]
                });
                return n.sort((function(e, t) {
                    return e.priority - t.priority
                })), n
            }

            function le(e) {
                return e % 4 == 0 && e % 100 != 0 || e % 400 == 0
            }

            function ce(e) {
                return e < 0 ? Math.ceil(e) || 0 : Math.floor(e)
            }

            function ue(e) {
                var t = +e,
                    n = 0;
                return 0 !== t && isFinite(t) && (n = ce(t)), n
            }

            function de(e, t) {
                return function(n) {
                    return null != n ? (he(this, e, n), r.updateOffset(this, t), this) : fe(this, e)
                }
            }

            function fe(e, t) {
                return e.isValid() ? e._d["get" + (e._isUTC ? "UTC" : "") + t]() : NaN
            }

            function he(e, t, n) {
                e.isValid() && !isNaN(n) && ("FullYear" === t && le(e.year()) && 1 === e.month() && 29 === e.date() ? (n = ue(n), e._d["set" + (e._isUTC ? "UTC" : "") + t](n, e.month(), Xe(n, e.month()))) : e._d["set" + (e._isUTC ? "UTC" : "") + t](n))
            }

            function me(e) {
                return O(this[e = re(e)]) ? this[e]() : this
            }

            function pe(e, t) {
                if ("object" == typeof e) {
                    var n, r = ae(e = se(e));
                    for (n = 0; n < r.length; n++) this[r[n].unit](e[r[n].unit])
                } else if (O(this[e = re(e)])) return this[e](t);
                return this
            }
            var ge, ye = /\d/,
                ve = /\d\d/,
                we = /\d{3}/,
                xe = /\d{4}/,
                _e = /[+-]?\d{6}/,
                ke = /\d\d?/,
                be = /\d\d\d\d?/,
                $e = /\d\d\d\d\d\d?/,
                Se = /\d{1,3}/,
                Me = /\d{1,4}/,
                De = /[+-]?\d{1,6}/,
                Ye = /\d+/,
                Oe = /[+-]?\d+/,
                Te = /Z|[+-]\d\d:?\d\d/gi,
                Ce = /Z|[+-]\d\d(?::?\d\d)?/gi,
                Le = /[+-]?\d+(\.\d{1,3})?/,
                Ne = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i;

            function Pe(e, t, n) {
                ge[e] = O(t) ? t : function(e, r) {
                    return e && n ? n : t
                }
            }

            function je(e, t) {
                return a(ge, e) ? ge[e](t._strict, t._locale) : new RegExp(Ae(e))
            }

            function Ae(e) {
                return He(e.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, (function(e, t, n, r, s) {
                    return t || n || r || s
                })))
            }

            function He(e) {
                return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
            }
            ge = {};
            var Ee = {};

            function Ie(e, t) {
                var n, r = t;
                for ("string" == typeof e && (e = [e]), u(t) && (r = function(e, n) {
                        n[t] = ue(e)
                    }), n = 0; n < e.length; n++) Ee[e[n]] = r
            }

            function Re(e, t) {
                Ie(e, (function(e, n, r, s) {
                    r._w = r._w || {}, t(e, r._w, r, s)
                }))
            }

            function We(e, t, n) {
                null != t && a(Ee, e) && Ee[e](t, n._a, n, e)
            }
            var Fe, Ge = 0,
                Ue = 1,
                Ve = 2,
                ze = 3,
                Be = 4,
                Ze = 5,
                qe = 6,
                Je = 7,
                Ke = 8;

            function Qe(e, t) {
                return (e % t + t) % t
            }

            function Xe(e, t) {
                if (isNaN(e) || isNaN(t)) return NaN;
                var n = Qe(t, 12);
                return e += (t - n) / 12, 1 === n ? le(e) ? 29 : 28 : 31 - n % 7 % 2
            }
            Fe = Array.prototype.indexOf ? Array.prototype.indexOf : function(e) {
                var t;
                for (t = 0; t < this.length; ++t)
                    if (this[t] === e) return t;
                return -1
            }, R("M", ["MM", 2], "Mo", (function() {
                return this.month() + 1
            })), R("MMM", 0, 0, (function(e) {
                return this.localeData().monthsShort(this, e)
            })), R("MMMM", 0, 0, (function(e) {
                return this.localeData().months(this, e)
            })), ne("month", "M"), oe("month", 8), Pe("M", ke), Pe("MM", ke, ve), Pe("MMM", (function(e, t) {
                return t.monthsShortRegex(e)
            })), Pe("MMMM", (function(e, t) {
                return t.monthsRegex(e)
            })), Ie(["M", "MM"], (function(e, t) {
                t[Ue] = ue(e) - 1
            })), Ie(["MMM", "MMMM"], (function(e, t, n, r) {
                var s = n._locale.monthsParse(e, r, n._strict);
                null != s ? t[Ue] = s : g(n).invalidMonth = e
            }));
            var et = "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
                tt = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
                nt = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
                rt = Ne,
                st = Ne;

            function it(e, t) {
                return e ? i(this._months) ? this._months[e.month()] : this._months[(this._months.isFormat || nt).test(t) ? "format" : "standalone"][e.month()] : i(this._months) ? this._months : this._months.standalone
            }

            function ot(e, t) {
                return e ? i(this._monthsShort) ? this._monthsShort[e.month()] : this._monthsShort[nt.test(t) ? "format" : "standalone"][e.month()] : i(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone
            }

            function at(e, t, n) {
                var r, s, i, o = e.toLocaleLowerCase();
                if (!this._monthsParse)
                    for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], r = 0; r < 12; ++r) i = m([2e3, r]), this._shortMonthsParse[r] = this.monthsShort(i, "").toLocaleLowerCase(), this._longMonthsParse[r] = this.months(i, "").toLocaleLowerCase();
                return n ? "MMM" === t ? -1 !== (s = Fe.call(this._shortMonthsParse, o)) ? s : null : -1 !== (s = Fe.call(this._longMonthsParse, o)) ? s : null : "MMM" === t ? -1 !== (s = Fe.call(this._shortMonthsParse, o)) || -1 !== (s = Fe.call(this._longMonthsParse, o)) ? s : null : -1 !== (s = Fe.call(this._longMonthsParse, o)) || -1 !== (s = Fe.call(this._shortMonthsParse, o)) ? s : null
            }

            function lt(e, t, n) {
                var r, s, i;
                if (this._monthsParseExact) return at.call(this, e, t, n);
                for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), r = 0; r < 12; r++) {
                    if (s = m([2e3, r]), n && !this._longMonthsParse[r] && (this._longMonthsParse[r] = new RegExp("^" + this.months(s, "").replace(".", "") + "$", "i"), this._shortMonthsParse[r] = new RegExp("^" + this.monthsShort(s, "").replace(".", "") + "$", "i")), n || this._monthsParse[r] || (i = "^" + this.months(s, "") + "|^" + this.monthsShort(s, ""), this._monthsParse[r] = new RegExp(i.replace(".", ""), "i")), n && "MMMM" === t && this._longMonthsParse[r].test(e)) return r;
                    if (n && "MMM" === t && this._shortMonthsParse[r].test(e)) return r;
                    if (!n && this._monthsParse[r].test(e)) return r
                }
            }

            function ct(e, t) {
                var n;
                if (!e.isValid()) return e;
                if ("string" == typeof t)
                    if (/^\d+$/.test(t)) t = ue(t);
                    else if (!u(t = e.localeData().monthsParse(t))) return e;
                return n = Math.min(e.date(), Xe(e.year(), t)), e._d["set" + (e._isUTC ? "UTC" : "") + "Month"](t, n), e
            }

            function ut(e) {
                return null != e ? (ct(this, e), r.updateOffset(this, !0), this) : fe(this, "Month")
            }

            function dt() {
                return Xe(this.year(), this.month())
            }

            function ft(e) {
                return this._monthsParseExact ? (a(this, "_monthsRegex") || mt.call(this), e ? this._monthsShortStrictRegex : this._monthsShortRegex) : (a(this, "_monthsShortRegex") || (this._monthsShortRegex = rt), this._monthsShortStrictRegex && e ? this._monthsShortStrictRegex : this._monthsShortRegex)
            }

            function ht(e) {
                return this._monthsParseExact ? (a(this, "_monthsRegex") || mt.call(this), e ? this._monthsStrictRegex : this._monthsRegex) : (a(this, "_monthsRegex") || (this._monthsRegex = st), this._monthsStrictRegex && e ? this._monthsStrictRegex : this._monthsRegex)
            }

            function mt() {
                function e(e, t) {
                    return t.length - e.length
                }
                var t, n, r = [],
                    s = [],
                    i = [];
                for (t = 0; t < 12; t++) n = m([2e3, t]), r.push(this.monthsShort(n, "")), s.push(this.months(n, "")), i.push(this.months(n, "")), i.push(this.monthsShort(n, ""));
                for (r.sort(e), s.sort(e), i.sort(e), t = 0; t < 12; t++) r[t] = He(r[t]), s[t] = He(s[t]);
                for (t = 0; t < 24; t++) i[t] = He(i[t]);
                this._monthsRegex = new RegExp("^(" + i.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp("^(" + s.join("|") + ")", "i"), this._monthsShortStrictRegex = new RegExp("^(" + r.join("|") + ")", "i")
            }

            function pt(e) {
                return le(e) ? 366 : 365
            }
            R("Y", 0, 0, (function() {
                var e = this.year();
                return e <= 9999 ? j(e, 4) : "+" + e
            })), R(0, ["YY", 2], 0, (function() {
                return this.year() % 100
            })), R(0, ["YYYY", 4], 0, "year"), R(0, ["YYYYY", 5], 0, "year"), R(0, ["YYYYYY", 6, !0], 0, "year"), ne("year", "y"), oe("year", 1), Pe("Y", Oe), Pe("YY", ke, ve), Pe("YYYY", Me, xe), Pe("YYYYY", De, _e), Pe("YYYYYY", De, _e), Ie(["YYYYY", "YYYYYY"], Ge), Ie("YYYY", (function(e, t) {
                t[Ge] = 2 === e.length ? r.parseTwoDigitYear(e) : ue(e)
            })), Ie("YY", (function(e, t) {
                t[Ge] = r.parseTwoDigitYear(e)
            })), Ie("Y", (function(e, t) {
                t[Ge] = parseInt(e, 10)
            })), r.parseTwoDigitYear = function(e) {
                return ue(e) + (ue(e) > 68 ? 1900 : 2e3)
            };
            var gt = de("FullYear", !0);

            function yt() {
                return le(this.year())
            }

            function vt(e, t, n, r, s, i, o) {
                var a;
                return e < 100 && e >= 0 ? (a = new Date(e + 400, t, n, r, s, i, o), isFinite(a.getFullYear()) && a.setFullYear(e)) : a = new Date(e, t, n, r, s, i, o), a
            }

            function wt(e) {
                var t, n;
                return e < 100 && e >= 0 ? ((n = Array.prototype.slice.call(arguments))[0] = e + 400, t = new Date(Date.UTC.apply(null, n)), isFinite(t.getUTCFullYear()) && t.setUTCFullYear(e)) : t = new Date(Date.UTC.apply(null, arguments)), t
            }

            function xt(e, t, n) {
                var r = 7 + t - n;
                return -(7 + wt(e, 0, r).getUTCDay() - t) % 7 + r - 1
            }

            function _t(e, t, n, r, s) {
                var i, o, a = 1 + 7 * (t - 1) + (7 + n - r) % 7 + xt(e, r, s);
                return a <= 0 ? o = pt(i = e - 1) + a : a > pt(e) ? (i = e + 1, o = a - pt(e)) : (i = e, o = a), {
                    year: i,
                    dayOfYear: o
                }
            }

            function bt(e, t, n) {
                var r, s, i = xt(e.year(), t, n),
                    o = Math.floor((e.dayOfYear() - i - 1) / 7) + 1;
                return o < 1 ? r = o + $t(s = e.year() - 1, t, n) : o > $t(e.year(), t, n) ? (r = o - $t(e.year(), t, n), s = e.year() + 1) : (s = e.year(), r = o), {
                    week: r,
                    year: s
                }
            }

            function $t(e, t, n) {
                var r = xt(e, t, n),
                    s = xt(e + 1, t, n);
                return (pt(e) - r + s) / 7
            }

            function St(e) {
                return bt(e, this._week.dow, this._week.doy).week
            }
            R("w", ["ww", 2], "wo", "week"), R("W", ["WW", 2], "Wo", "isoWeek"), ne("week", "w"), ne("isoWeek", "W"), oe("week", 5), oe("isoWeek", 5), Pe("w", ke), Pe("ww", ke, ve), Pe("W", ke), Pe("WW", ke, ve), Re(["w", "ww", "W", "WW"], (function(e, t, n, r) {
                t[r.substr(0, 1)] = ue(e)
            }));
            var Mt = {
                dow: 0,
                doy: 6
            };

            function Dt() {
                return this._week.dow
            }

            function Yt() {
                return this._week.doy
            }

            function Ot(e) {
                var t = this.localeData().week(this);
                return null == e ? t : this.add(7 * (e - t), "d")
            }

            function Tt(e) {
                var t = bt(this, 1, 4).week;
                return null == e ? t : this.add(7 * (e - t), "d")
            }

            function Ct(e, t) {
                return "string" != typeof e ? e : isNaN(e) ? "number" == typeof(e = t.weekdaysParse(e)) ? e : null : parseInt(e, 10)
            }

            function Lt(e, t) {
                return "string" == typeof e ? t.weekdaysParse(e) % 7 || 7 : isNaN(e) ? null : e
            }

            function Nt(e, t) {
                return e.slice(t, 7).concat(e.slice(0, t))
            }
            R("d", 0, "do", "day"), R("dd", 0, 0, (function(e) {
                return this.localeData().weekdaysMin(this, e)
            })), R("ddd", 0, 0, (function(e) {
                return this.localeData().weekdaysShort(this, e)
            })), R("dddd", 0, 0, (function(e) {
                return this.localeData().weekdays(this, e)
            })), R("e", 0, 0, "weekday"), R("E", 0, 0, "isoWeekday"), ne("day", "d"), ne("weekday", "e"), ne("isoWeekday", "E"), oe("day", 11), oe("weekday", 11), oe("isoWeekday", 11), Pe("d", ke), Pe("e", ke), Pe("E", ke), Pe("dd", (function(e, t) {
                return t.weekdaysMinRegex(e)
            })), Pe("ddd", (function(e, t) {
                return t.weekdaysShortRegex(e)
            })), Pe("dddd", (function(e, t) {
                return t.weekdaysRegex(e)
            })), Re(["dd", "ddd", "dddd"], (function(e, t, n, r) {
                var s = n._locale.weekdaysParse(e, r, n._strict);
                null != s ? t.d = s : g(n).invalidWeekday = e
            })), Re(["d", "e", "E"], (function(e, t, n, r) {
                t[r] = ue(e)
            }));
            var Pt = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
                jt = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
                At = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
                Ht = Ne,
                Et = Ne,
                It = Ne;

            function Rt(e, t) {
                var n = i(this._weekdays) ? this._weekdays : this._weekdays[e && !0 !== e && this._weekdays.isFormat.test(t) ? "format" : "standalone"];
                return !0 === e ? Nt(n, this._week.dow) : e ? n[e.day()] : n
            }

            function Wt(e) {
                return !0 === e ? Nt(this._weekdaysShort, this._week.dow) : e ? this._weekdaysShort[e.day()] : this._weekdaysShort
            }

            function Ft(e) {
                return !0 === e ? Nt(this._weekdaysMin, this._week.dow) : e ? this._weekdaysMin[e.day()] : this._weekdaysMin
            }

            function Gt(e, t, n) {
                var r, s, i, o = e.toLocaleLowerCase();
                if (!this._weekdaysParse)
                    for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], r = 0; r < 7; ++r) i = m([2e3, 1]).day(r), this._minWeekdaysParse[r] = this.weekdaysMin(i, "").toLocaleLowerCase(), this._shortWeekdaysParse[r] = this.weekdaysShort(i, "").toLocaleLowerCase(), this._weekdaysParse[r] = this.weekdays(i, "").toLocaleLowerCase();
                return n ? "dddd" === t ? -1 !== (s = Fe.call(this._weekdaysParse, o)) ? s : null : "ddd" === t ? -1 !== (s = Fe.call(this._shortWeekdaysParse, o)) ? s : null : -1 !== (s = Fe.call(this._minWeekdaysParse, o)) ? s : null : "dddd" === t ? -1 !== (s = Fe.call(this._weekdaysParse, o)) || -1 !== (s = Fe.call(this._shortWeekdaysParse, o)) || -1 !== (s = Fe.call(this._minWeekdaysParse, o)) ? s : null : "ddd" === t ? -1 !== (s = Fe.call(this._shortWeekdaysParse, o)) || -1 !== (s = Fe.call(this._weekdaysParse, o)) || -1 !== (s = Fe.call(this._minWeekdaysParse, o)) ? s : null : -1 !== (s = Fe.call(this._minWeekdaysParse, o)) || -1 !== (s = Fe.call(this._weekdaysParse, o)) || -1 !== (s = Fe.call(this._shortWeekdaysParse, o)) ? s : null
            }

            function Ut(e, t, n) {
                var r, s, i;
                if (this._weekdaysParseExact) return Gt.call(this, e, t, n);
                for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), r = 0; r < 7; r++) {
                    if (s = m([2e3, 1]).day(r), n && !this._fullWeekdaysParse[r] && (this._fullWeekdaysParse[r] = new RegExp("^" + this.weekdays(s, "").replace(".", "\\.?") + "$", "i"), this._shortWeekdaysParse[r] = new RegExp("^" + this.weekdaysShort(s, "").replace(".", "\\.?") + "$", "i"), this._minWeekdaysParse[r] = new RegExp("^" + this.weekdaysMin(s, "").replace(".", "\\.?") + "$", "i")), this._weekdaysParse[r] || (i = "^" + this.weekdays(s, "") + "|^" + this.weekdaysShort(s, "") + "|^" + this.weekdaysMin(s, ""), this._weekdaysParse[r] = new RegExp(i.replace(".", ""), "i")), n && "dddd" === t && this._fullWeekdaysParse[r].test(e)) return r;
                    if (n && "ddd" === t && this._shortWeekdaysParse[r].test(e)) return r;
                    if (n && "dd" === t && this._minWeekdaysParse[r].test(e)) return r;
                    if (!n && this._weekdaysParse[r].test(e)) return r
                }
            }

            function Vt(e) {
                if (!this.isValid()) return null != e ? this : NaN;
                var t = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
                return null != e ? (e = Ct(e, this.localeData()), this.add(e - t, "d")) : t
            }

            function zt(e) {
                if (!this.isValid()) return null != e ? this : NaN;
                var t = (this.day() + 7 - this.localeData()._week.dow) % 7;
                return null == e ? t : this.add(e - t, "d")
            }

            function Bt(e) {
                if (!this.isValid()) return null != e ? this : NaN;
                if (null != e) {
                    var t = Lt(e, this.localeData());
                    return this.day(this.day() % 7 ? t : t - 7)
                }
                return this.day() || 7
            }

            function Zt(e) {
                return this._weekdaysParseExact ? (a(this, "_weekdaysRegex") || Kt.call(this), e ? this._weekdaysStrictRegex : this._weekdaysRegex) : (a(this, "_weekdaysRegex") || (this._weekdaysRegex = Ht), this._weekdaysStrictRegex && e ? this._weekdaysStrictRegex : this._weekdaysRegex)
            }

            function qt(e) {
                return this._weekdaysParseExact ? (a(this, "_weekdaysRegex") || Kt.call(this), e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (a(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = Et), this._weekdaysShortStrictRegex && e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex)
            }

            function Jt(e) {
                return this._weekdaysParseExact ? (a(this, "_weekdaysRegex") || Kt.call(this), e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (a(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = It), this._weekdaysMinStrictRegex && e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex)
            }

            function Kt() {
                function e(e, t) {
                    return t.length - e.length
                }
                var t, n, r, s, i, o = [],
                    a = [],
                    l = [],
                    c = [];
                for (t = 0; t < 7; t++) n = m([2e3, 1]).day(t), r = He(this.weekdaysMin(n, "")), s = He(this.weekdaysShort(n, "")), i = He(this.weekdays(n, "")), o.push(r), a.push(s), l.push(i), c.push(r), c.push(s), c.push(i);
                o.sort(e), a.sort(e), l.sort(e), c.sort(e), this._weekdaysRegex = new RegExp("^(" + c.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp("^(" + l.join("|") + ")", "i"), this._weekdaysShortStrictRegex = new RegExp("^(" + a.join("|") + ")", "i"), this._weekdaysMinStrictRegex = new RegExp("^(" + o.join("|") + ")", "i")
            }

            function Qt() {
                return this.hours() % 12 || 12
            }

            function Xt() {
                return this.hours() || 24
            }

            function en(e, t) {
                R(e, 0, 0, (function() {
                    return this.localeData().meridiem(this.hours(), this.minutes(), t)
                }))
            }

            function tn(e, t) {
                return t._meridiemParse
            }

            function nn(e) {
                return "p" === (e + "").toLowerCase().charAt(0)
            }
            R("H", ["HH", 2], 0, "hour"), R("h", ["hh", 2], 0, Qt), R("k", ["kk", 2], 0, Xt), R("hmm", 0, 0, (function() {
                return "" + Qt.apply(this) + j(this.minutes(), 2)
            })), R("hmmss", 0, 0, (function() {
                return "" + Qt.apply(this) + j(this.minutes(), 2) + j(this.seconds(), 2)
            })), R("Hmm", 0, 0, (function() {
                return "" + this.hours() + j(this.minutes(), 2)
            })), R("Hmmss", 0, 0, (function() {
                return "" + this.hours() + j(this.minutes(), 2) + j(this.seconds(), 2)
            })), en("a", !0), en("A", !1), ne("hour", "h"), oe("hour", 13), Pe("a", tn), Pe("A", tn), Pe("H", ke), Pe("h", ke), Pe("k", ke), Pe("HH", ke, ve), Pe("hh", ke, ve), Pe("kk", ke, ve), Pe("hmm", be), Pe("hmmss", $e), Pe("Hmm", be), Pe("Hmmss", $e), Ie(["H", "HH"], ze), Ie(["k", "kk"], (function(e, t, n) {
                var r = ue(e);
                t[ze] = 24 === r ? 0 : r
            })), Ie(["a", "A"], (function(e, t, n) {
                n._isPm = n._locale.isPM(e), n._meridiem = e
            })), Ie(["h", "hh"], (function(e, t, n) {
                t[ze] = ue(e), g(n).bigHour = !0
            })), Ie("hmm", (function(e, t, n) {
                var r = e.length - 2;
                t[ze] = ue(e.substr(0, r)), t[Be] = ue(e.substr(r)), g(n).bigHour = !0
            })), Ie("hmmss", (function(e, t, n) {
                var r = e.length - 4,
                    s = e.length - 2;
                t[ze] = ue(e.substr(0, r)), t[Be] = ue(e.substr(r, 2)), t[Ze] = ue(e.substr(s)), g(n).bigHour = !0
            })), Ie("Hmm", (function(e, t, n) {
                var r = e.length - 2;
                t[ze] = ue(e.substr(0, r)), t[Be] = ue(e.substr(r))
            })), Ie("Hmmss", (function(e, t, n) {
                var r = e.length - 4,
                    s = e.length - 2;
                t[ze] = ue(e.substr(0, r)), t[Be] = ue(e.substr(r, 2)), t[Ze] = ue(e.substr(s))
            }));
            var rn = /[ap]\.?m?\.?/i,
                sn = de("Hours", !0);

            function on(e, t, n) {
                return e > 11 ? n ? "pm" : "PM" : n ? "am" : "AM"
            }
            var an, ln = {
                    calendar: N,
                    longDateFormat: V,
                    invalidDate: B,
                    ordinal: q,
                    dayOfMonthOrdinalParse: J,
                    relativeTime: Q,
                    months: et,
                    monthsShort: tt,
                    week: Mt,
                    weekdays: Pt,
                    weekdaysMin: At,
                    weekdaysShort: jt,
                    meridiemParse: rn
                },
                cn = {},
                un = {};

            function dn(e, t) {
                var n, r = Math.min(e.length, t.length);
                for (n = 0; n < r; n += 1)
                    if (e[n] !== t[n]) return n;
                return r
            }

            function fn(e) {
                return e ? e.toLowerCase().replace("_", "-") : e
            }

            function hn(e) {
                for (var t, n, r, s, i = 0; i < e.length;) {
                    for (t = (s = fn(e[i]).split("-")).length, n = (n = fn(e[i + 1])) ? n.split("-") : null; t > 0;) {
                        if (r = mn(s.slice(0, t).join("-"))) return r;
                        if (n && n.length >= t && dn(s, n) >= t - 1) break;
                        t--
                    }
                    i++
                }
                return an
            }

            function mn(t) {
                var n = null;
                if (void 0 === cn[t] && e && e.exports) try {
                    n = an._abbr, kt("./locale/" + t), pn(n)
                } catch (e) {
                    cn[t] = null
                }
                return cn[t]
            }

            function pn(e, t) {
                var n;
                return e && ((n = c(t) ? vn(e) : gn(e, t)) ? an = n : "undefined" != typeof console && console.warn && console.warn("Locale " + e + " not found. Did you forget to load it?")), an._abbr
            }

            function gn(e, t) {
                if (null !== t) {
                    var n, r = ln;
                    if (t.abbr = e, null != cn[e]) Y("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."), r = cn[e]._config;
                    else if (null != t.parentLocale)
                        if (null != cn[t.parentLocale]) r = cn[t.parentLocale]._config;
                        else {
                            if (null == (n = mn(t.parentLocale))) return un[t.parentLocale] || (un[t.parentLocale] = []), un[t.parentLocale].push({
                                name: e,
                                config: t
                            }), null;
                            r = n._config
                        }
                    return cn[e] = new L(C(r, t)), un[e] && un[e].forEach((function(e) {
                        gn(e.name, e.config)
                    })), pn(e), cn[e]
                }
                return delete cn[e], null
            }

            function yn(e, t) {
                if (null != t) {
                    var n, r, s = ln;
                    null != cn[e] && null != cn[e].parentLocale ? cn[e].set(C(cn[e]._config, t)) : (null != (r = mn(e)) && (s = r._config), t = C(s, t), null == r && (t.abbr = e), (n = new L(t)).parentLocale = cn[e], cn[e] = n), pn(e)
                } else null != cn[e] && (null != cn[e].parentLocale ? (cn[e] = cn[e].parentLocale, e === pn() && pn(e)) : null != cn[e] && delete cn[e]);
                return cn[e]
            }

            function vn(e) {
                var t;
                if (e && e._locale && e._locale._abbr && (e = e._locale._abbr), !e) return an;
                if (!i(e)) {
                    if (t = mn(e)) return t;
                    e = [e]
                }
                return hn(e)
            }

            function wn() {
                return M(cn)
            }

            function xn(e) {
                var t, n = e._a;
                return n && -2 === g(e).overflow && (t = n[Ue] < 0 || n[Ue] > 11 ? Ue : n[Ve] < 1 || n[Ve] > Xe(n[Ge], n[Ue]) ? Ve : n[ze] < 0 || n[ze] > 24 || 24 === n[ze] && (0 !== n[Be] || 0 !== n[Ze] || 0 !== n[qe]) ? ze : n[Be] < 0 || n[Be] > 59 ? Be : n[Ze] < 0 || n[Ze] > 59 ? Ze : n[qe] < 0 || n[qe] > 999 ? qe : -1, g(e)._overflowDayOfYear && (t < Ge || t > Ve) && (t = Ve), g(e)._overflowWeeks && -1 === t && (t = Je), g(e)._overflowWeekday && -1 === t && (t = Ke), g(e).overflow = t), e
            }
            var _n = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
                kn = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
                bn = /Z|[+-]\d\d(?::?\d\d)?/,
                $n = [
                    ["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/],
                    ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/],
                    ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/],
                    ["GGGG-[W]WW", /\d{4}-W\d\d/, !1],
                    ["YYYY-DDD", /\d{4}-\d{3}/],
                    ["YYYY-MM", /\d{4}-\d\d/, !1],
                    ["YYYYYYMMDD", /[+-]\d{10}/],
                    ["YYYYMMDD", /\d{8}/],
                    ["GGGG[W]WWE", /\d{4}W\d{3}/],
                    ["GGGG[W]WW", /\d{4}W\d{2}/, !1],
                    ["YYYYDDD", /\d{7}/],
                    ["YYYYMM", /\d{6}/, !1],
                    ["YYYY", /\d{4}/, !1]
                ],
                Sn = [
                    ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
                    ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
                    ["HH:mm:ss", /\d\d:\d\d:\d\d/],
                    ["HH:mm", /\d\d:\d\d/],
                    ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
                    ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
                    ["HHmmss", /\d\d\d\d\d\d/],
                    ["HHmm", /\d\d\d\d/],
                    ["HH", /\d\d/]
                ],
                Mn = /^\/?Date\((-?\d+)/i,
                Dn = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,
                Yn = {
                    UT: 0,
                    GMT: 0,
                    EDT: -240,
                    EST: -300,
                    CDT: -300,
                    CST: -360,
                    MDT: -360,
                    MST: -420,
                    PDT: -420,
                    PST: -480
                };

            function On(e) {
                var t, n, r, s, i, o, a = e._i,
                    l = _n.exec(a) || kn.exec(a);
                if (l) {
                    for (g(e).iso = !0, t = 0, n = $n.length; t < n; t++)
                        if ($n[t][1].exec(l[1])) {
                            s = $n[t][0], r = !1 !== $n[t][2];
                            break
                        }
                    if (null == s) return void(e._isValid = !1);
                    if (l[3]) {
                        for (t = 0, n = Sn.length; t < n; t++)
                            if (Sn[t][1].exec(l[3])) {
                                i = (l[2] || " ") + Sn[t][0];
                                break
                            }
                        if (null == i) return void(e._isValid = !1)
                    }
                    if (!r && null != i) return void(e._isValid = !1);
                    if (l[4]) {
                        if (!bn.exec(l[4])) return void(e._isValid = !1);
                        o = "Z"
                    }
                    e._f = s + (i || "") + (o || ""), Wn(e)
                } else e._isValid = !1
            }

            function Tn(e, t, n, r, s, i) {
                var o = [Cn(e), tt.indexOf(t), parseInt(n, 10), parseInt(r, 10), parseInt(s, 10)];
                return i && o.push(parseInt(i, 10)), o
            }

            function Cn(e) {
                var t = parseInt(e, 10);
                return t <= 49 ? 2e3 + t : t <= 999 ? 1900 + t : t
            }

            function Ln(e) {
                return e.replace(/\([^)]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "")
            }

            function Nn(e, t, n) {
                return !e || jt.indexOf(e) === new Date(t[0], t[1], t[2]).getDay() || (g(n).weekdayMismatch = !0, n._isValid = !1, !1)
            }

            function Pn(e, t, n) {
                if (e) return Yn[e];
                if (t) return 0;
                var r = parseInt(n, 10),
                    s = r % 100;
                return (r - s) / 100 * 60 + s
            }

            function jn(e) {
                var t, n = Dn.exec(Ln(e._i));
                if (n) {
                    if (t = Tn(n[4], n[3], n[2], n[5], n[6], n[7]), !Nn(n[1], t, e)) return;
                    e._a = t, e._tzm = Pn(n[8], n[9], n[10]), e._d = wt.apply(null, e._a), e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), g(e).rfc2822 = !0
                } else e._isValid = !1
            }

            function An(e) {
                var t = Mn.exec(e._i);
                null === t ? (On(e), !1 === e._isValid && (delete e._isValid, jn(e), !1 === e._isValid && (delete e._isValid, e._strict ? e._isValid = !1 : r.createFromInputFallback(e)))) : e._d = new Date(+t[1])
            }

            function Hn(e, t, n) {
                return null != e ? e : null != t ? t : n
            }

            function En(e) {
                var t = new Date(r.now());
                return e._useUTC ? [t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate()] : [t.getFullYear(), t.getMonth(), t.getDate()]
            }

            function In(e) {
                var t, n, r, s, i, o = [];
                if (!e._d) {
                    for (r = En(e), e._w && null == e._a[Ve] && null == e._a[Ue] && Rn(e), null != e._dayOfYear && (i = Hn(e._a[Ge], r[Ge]), (e._dayOfYear > pt(i) || 0 === e._dayOfYear) && (g(e)._overflowDayOfYear = !0), n = wt(i, 0, e._dayOfYear), e._a[Ue] = n.getUTCMonth(), e._a[Ve] = n.getUTCDate()), t = 0; t < 3 && null == e._a[t]; ++t) e._a[t] = o[t] = r[t];
                    for (; t < 7; t++) e._a[t] = o[t] = null == e._a[t] ? 2 === t ? 1 : 0 : e._a[t];
                    24 === e._a[ze] && 0 === e._a[Be] && 0 === e._a[Ze] && 0 === e._a[qe] && (e._nextDay = !0, e._a[ze] = 0), e._d = (e._useUTC ? wt : vt).apply(null, o), s = e._useUTC ? e._d.getUTCDay() : e._d.getDay(), null != e._tzm && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), e._nextDay && (e._a[ze] = 24), e._w && void 0 !== e._w.d && e._w.d !== s && (g(e).weekdayMismatch = !0)
                }
            }

            function Rn(e) {
                var t, n, r, s, i, o, a, l, c;
                null != (t = e._w).GG || null != t.W || null != t.E ? (i = 1, o = 4, n = Hn(t.GG, e._a[Ge], bt(qn(), 1, 4).year), r = Hn(t.W, 1), ((s = Hn(t.E, 1)) < 1 || s > 7) && (l = !0)) : (i = e._locale._week.dow, o = e._locale._week.doy, c = bt(qn(), i, o), n = Hn(t.gg, e._a[Ge], c.year), r = Hn(t.w, c.week), null != t.d ? ((s = t.d) < 0 || s > 6) && (l = !0) : null != t.e ? (s = t.e + i, (t.e < 0 || t.e > 6) && (l = !0)) : s = i), r < 1 || r > $t(n, i, o) ? g(e)._overflowWeeks = !0 : null != l ? g(e)._overflowWeekday = !0 : (a = _t(n, r, s, i, o), e._a[Ge] = a.year, e._dayOfYear = a.dayOfYear)
            }

            function Wn(e) {
                if (e._f !== r.ISO_8601)
                    if (e._f !== r.RFC_2822) {
                        e._a = [], g(e).empty = !0;
                        var t, n, s, i, o, a, l = "" + e._i,
                            c = l.length,
                            u = 0;
                        for (s = U(e._f, e._locale).match(A) || [], t = 0; t < s.length; t++) i = s[t], (n = (l.match(je(i, e)) || [])[0]) && ((o = l.substr(0, l.indexOf(n))).length > 0 && g(e).unusedInput.push(o), l = l.slice(l.indexOf(n) + n.length), u += n.length), I[i] ? (n ? g(e).empty = !1 : g(e).unusedTokens.push(i), We(i, n, e)) : e._strict && !n && g(e).unusedTokens.push(i);
                        g(e).charsLeftOver = c - u, l.length > 0 && g(e).unusedInput.push(l), e._a[ze] <= 12 && !0 === g(e).bigHour && e._a[ze] > 0 && (g(e).bigHour = void 0), g(e).parsedDateParts = e._a.slice(0), g(e).meridiem = e._meridiem, e._a[ze] = Fn(e._locale, e._a[ze], e._meridiem), null !== (a = g(e).era) && (e._a[Ge] = e._locale.erasConvertYear(a, e._a[Ge])), In(e), xn(e)
                    } else jn(e);
                else On(e)
            }

            function Fn(e, t, n) {
                var r;
                return null == n ? t : null != e.meridiemHour ? e.meridiemHour(t, n) : null != e.isPM ? ((r = e.isPM(n)) && t < 12 && (t += 12), r || 12 !== t || (t = 0), t) : t
            }

            function Gn(e) {
                var t, n, r, s, i, o, a = !1;
                if (0 === e._f.length) return g(e).invalidFormat = !0, void(e._d = new Date(NaN));
                for (s = 0; s < e._f.length; s++) i = 0, o = !1, t = _({}, e), null != e._useUTC && (t._useUTC = e._useUTC), t._f = e._f[s], Wn(t), y(t) && (o = !0), i += g(t).charsLeftOver, i += 10 * g(t).unusedTokens.length, g(t).score = i, a ? i < r && (r = i, n = t) : (null == r || i < r || o) && (r = i, n = t, o && (a = !0));
                h(e, n || t)
            }

            function Un(e) {
                if (!e._d) {
                    var t = se(e._i),
                        n = void 0 === t.day ? t.date : t.day;
                    e._a = f([t.year, t.month, n, t.hour, t.minute, t.second, t.millisecond], (function(e) {
                        return e && parseInt(e, 10)
                    })), In(e)
                }
            }

            function Vn(e) {
                var t = new k(xn(zn(e)));
                return t._nextDay && (t.add(1, "d"), t._nextDay = void 0), t
            }

            function zn(e) {
                var t = e._i,
                    n = e._f;
                return e._locale = e._locale || vn(e._l), null === t || void 0 === n && "" === t ? v({
                    nullInput: !0
                }) : ("string" == typeof t && (e._i = t = e._locale.preparse(t)), b(t) ? new k(xn(t)) : (d(t) ? e._d = t : i(n) ? Gn(e) : n ? Wn(e) : Bn(e), y(e) || (e._d = null), e))
            }

            function Bn(e) {
                var t = e._i;
                c(t) ? e._d = new Date(r.now()) : d(t) ? e._d = new Date(t.valueOf()) : "string" == typeof t ? An(e) : i(t) ? (e._a = f(t.slice(0), (function(e) {
                    return parseInt(e, 10)
                })), In(e)) : o(t) ? Un(e) : u(t) ? e._d = new Date(t) : r.createFromInputFallback(e)
            }

            function Zn(e, t, n, r, s) {
                var a = {};
                return !0 !== t && !1 !== t || (r = t, t = void 0), !0 !== n && !1 !== n || (r = n, n = void 0), (o(e) && l(e) || i(e) && 0 === e.length) && (e = void 0), a._isAMomentObject = !0, a._useUTC = a._isUTC = s, a._l = n, a._i = e, a._f = t, a._strict = r, Vn(a)
            }

            function qn(e, t, n, r) {
                return Zn(e, t, n, r, !1)
            }
            r.createFromInputFallback = S("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.", (function(e) {
                e._d = new Date(e._i + (e._useUTC ? " UTC" : ""))
            })), r.ISO_8601 = function() {}, r.RFC_2822 = function() {};
            var Jn = S("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/", (function() {
                    var e = qn.apply(null, arguments);
                    return this.isValid() && e.isValid() ? e < this ? this : e : v()
                })),
                Kn = S("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/", (function() {
                    var e = qn.apply(null, arguments);
                    return this.isValid() && e.isValid() ? e > this ? this : e : v()
                }));

            function Qn(e, t) {
                var n, r;
                if (1 === t.length && i(t[0]) && (t = t[0]), !t.length) return qn();
                for (n = t[0], r = 1; r < t.length; ++r) t[r].isValid() && !t[r][e](n) || (n = t[r]);
                return n
            }

            function Xn() {
                return Qn("isBefore", [].slice.call(arguments, 0))
            }

            function er() {
                return Qn("isAfter", [].slice.call(arguments, 0))
            }
            var tr = function() {
                    return Date.now ? Date.now() : +new Date
                },
                nr = ["year", "quarter", "month", "week", "day", "hour", "minute", "second", "millisecond"];

            function rr(e) {
                var t, n, r = !1;
                for (t in e)
                    if (a(e, t) && (-1 === Fe.call(nr, t) || null != e[t] && isNaN(e[t]))) return !1;
                for (n = 0; n < nr.length; ++n)
                    if (e[nr[n]]) {
                        if (r) return !1;
                        parseFloat(e[nr[n]]) !== ue(e[nr[n]]) && (r = !0)
                    }
                return !0
            }

            function sr() {
                return this._isValid
            }

            function ir() {
                return Yr(NaN)
            }

            function or(e) {
                var t = se(e),
                    n = t.year || 0,
                    r = t.quarter || 0,
                    s = t.month || 0,
                    i = t.week || t.isoWeek || 0,
                    o = t.day || 0,
                    a = t.hour || 0,
                    l = t.minute || 0,
                    c = t.second || 0,
                    u = t.millisecond || 0;
                this._isValid = rr(t), this._milliseconds = +u + 1e3 * c + 6e4 * l + 1e3 * a * 60 * 60, this._days = +o + 7 * i, this._months = +s + 3 * r + 12 * n, this._data = {}, this._locale = vn(), this._bubble()
            }

            function ar(e) {
                return e instanceof or
            }

            function lr(e) {
                return e < 0 ? -1 * Math.round(-1 * e) : Math.round(e)
            }

            function cr(e, t, n) {
                var r, s = Math.min(e.length, t.length),
                    i = Math.abs(e.length - t.length),
                    o = 0;
                for (r = 0; r < s; r++)(n && e[r] !== t[r] || !n && ue(e[r]) !== ue(t[r])) && o++;
                return o + i
            }

            function ur(e, t) {
                R(e, 0, 0, (function() {
                    var e = this.utcOffset(),
                        n = "+";
                    return e < 0 && (e = -e, n = "-"), n + j(~~(e / 60), 2) + t + j(~~e % 60, 2)
                }))
            }
            ur("Z", ":"), ur("ZZ", ""), Pe("Z", Ce), Pe("ZZ", Ce), Ie(["Z", "ZZ"], (function(e, t, n) {
                n._useUTC = !0, n._tzm = fr(Ce, e)
            }));
            var dr = /([\+\-]|\d\d)/gi;

            function fr(e, t) {
                var n, r, s = (t || "").match(e);
                return null === s ? null : 0 === (r = 60 * (n = ((s[s.length - 1] || []) + "").match(dr) || ["-", 0, 0])[1] + ue(n[2])) ? 0 : "+" === n[0] ? r : -r
            }

            function hr(e, t) {
                var n, s;
                return t._isUTC ? (n = t.clone(), s = (b(e) || d(e) ? e.valueOf() : qn(e).valueOf()) - n.valueOf(), n._d.setTime(n._d.valueOf() + s), r.updateOffset(n, !1), n) : qn(e).local()
            }

            function mr(e) {
                return -Math.round(e._d.getTimezoneOffset())
            }

            function pr(e, t, n) {
                var s, i = this._offset || 0;
                if (!this.isValid()) return null != e ? this : NaN;
                if (null != e) {
                    if ("string" == typeof e) {
                        if (null === (e = fr(Ce, e))) return this
                    } else Math.abs(e) < 16 && !n && (e *= 60);
                    return !this._isUTC && t && (s = mr(this)), this._offset = e, this._isUTC = !0, null != s && this.add(s, "m"), i !== e && (!t || this._changeInProgress ? Nr(this, Yr(e - i, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, r.updateOffset(this, !0), this._changeInProgress = null)), this
                }
                return this._isUTC ? i : mr(this)
            }

            function gr(e, t) {
                return null != e ? ("string" != typeof e && (e = -e), this.utcOffset(e, t), this) : -this.utcOffset()
            }

            function yr(e) {
                return this.utcOffset(0, e)
            }

            function vr(e) {
                return this._isUTC && (this.utcOffset(0, e), this._isUTC = !1, e && this.subtract(mr(this), "m")), this
            }

            function wr() {
                if (null != this._tzm) this.utcOffset(this._tzm, !1, !0);
                else if ("string" == typeof this._i) {
                    var e = fr(Te, this._i);
                    null != e ? this.utcOffset(e) : this.utcOffset(0, !0)
                }
                return this
            }

            function xr(e) {
                return !!this.isValid() && (e = e ? qn(e).utcOffset() : 0, (this.utcOffset() - e) % 60 == 0)
            }

            function _r() {
                return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset()
            }

            function kr() {
                if (!c(this._isDSTShifted)) return this._isDSTShifted;
                var e, t = {};
                return _(t, this), (t = zn(t))._a ? (e = t._isUTC ? m(t._a) : qn(t._a), this._isDSTShifted = this.isValid() && cr(t._a, e.toArray()) > 0) : this._isDSTShifted = !1, this._isDSTShifted
            }

            function br() {
                return !!this.isValid() && !this._isUTC
            }

            function $r() {
                return !!this.isValid() && this._isUTC
            }

            function Sr() {
                return !!this.isValid() && this._isUTC && 0 === this._offset
            }
            r.updateOffset = function() {};
            var Mr = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/,
                Dr = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;

            function Yr(e, t) {
                var n, r, s, i = e,
                    o = null;
                return ar(e) ? i = {
                    ms: e._milliseconds,
                    d: e._days,
                    M: e._months
                } : u(e) || !isNaN(+e) ? (i = {}, t ? i[t] = +e : i.milliseconds = +e) : (o = Mr.exec(e)) ? (n = "-" === o[1] ? -1 : 1, i = {
                    y: 0,
                    d: ue(o[Ve]) * n,
                    h: ue(o[ze]) * n,
                    m: ue(o[Be]) * n,
                    s: ue(o[Ze]) * n,
                    ms: ue(lr(1e3 * o[qe])) * n
                }) : (o = Dr.exec(e)) ? (n = "-" === o[1] ? -1 : 1, i = {
                    y: Or(o[2], n),
                    M: Or(o[3], n),
                    w: Or(o[4], n),
                    d: Or(o[5], n),
                    h: Or(o[6], n),
                    m: Or(o[7], n),
                    s: Or(o[8], n)
                }) : null == i ? i = {} : "object" == typeof i && ("from" in i || "to" in i) && (s = Cr(qn(i.from), qn(i.to)), (i = {}).ms = s.milliseconds, i.M = s.months), r = new or(i), ar(e) && a(e, "_locale") && (r._locale = e._locale), ar(e) && a(e, "_isValid") && (r._isValid = e._isValid), r
            }

            function Or(e, t) {
                var n = e && parseFloat(e.replace(",", "."));
                return (isNaN(n) ? 0 : n) * t
            }

            function Tr(e, t) {
                var n = {};
                return n.months = t.month() - e.month() + 12 * (t.year() - e.year()), e.clone().add(n.months, "M").isAfter(t) && --n.months, n.milliseconds = +t - +e.clone().add(n.months, "M"), n
            }

            function Cr(e, t) {
                var n;
                return e.isValid() && t.isValid() ? (t = hr(t, e), e.isBefore(t) ? n = Tr(e, t) : ((n = Tr(t, e)).milliseconds = -n.milliseconds, n.months = -n.months), n) : {
                    milliseconds: 0,
                    months: 0
                }
            }

            function Lr(e, t) {
                return function(n, r) {
                    var s;
                    return null === r || isNaN(+r) || (Y(t, "moment()." + t + "(period, number) is deprecated. Please use moment()." + t + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."), s = n, n = r, r = s), Nr(this, Yr(n, r), e), this
                }
            }

            function Nr(e, t, n, s) {
                var i = t._milliseconds,
                    o = lr(t._days),
                    a = lr(t._months);
                e.isValid() && (s = null == s || s, a && ct(e, fe(e, "Month") + a * n), o && he(e, "Date", fe(e, "Date") + o * n), i && e._d.setTime(e._d.valueOf() + i * n), s && r.updateOffset(e, o || a))
            }
            Yr.fn = or.prototype, Yr.invalid = ir;
            var Pr = Lr(1, "add"),
                jr = Lr(-1, "subtract");

            function Ar(e) {
                return "string" == typeof e || e instanceof String
            }

            function Hr(e) {
                return b(e) || d(e) || Ar(e) || u(e) || Ir(e) || Er(e) || null == e
            }

            function Er(e) {
                var t, n, r = o(e) && !l(e),
                    s = !1,
                    i = ["years", "year", "y", "months", "month", "M", "days", "day", "d", "dates", "date", "D", "hours", "hour", "h", "minutes", "minute", "m", "seconds", "second", "s", "milliseconds", "millisecond", "ms"];
                for (t = 0; t < i.length; t += 1) n = i[t], s = s || a(e, n);
                return r && s
            }

            function Ir(e) {
                var t = i(e),
                    n = !1;
                return t && (n = 0 === e.filter((function(t) {
                    return !u(t) && Ar(e)
                })).length), t && n
            }

            function Rr(e) {
                var t, n, r = o(e) && !l(e),
                    s = !1,
                    i = ["sameDay", "nextDay", "lastDay", "nextWeek", "lastWeek", "sameElse"];
                for (t = 0; t < i.length; t += 1) n = i[t], s = s || a(e, n);
                return r && s
            }

            function Wr(e, t) {
                var n = e.diff(t, "days", !0);
                return n < -6 ? "sameElse" : n < -1 ? "lastWeek" : n < 0 ? "lastDay" : n < 1 ? "sameDay" : n < 2 ? "nextDay" : n < 7 ? "nextWeek" : "sameElse"
            }

            function Fr(e, t) {
                1 === arguments.length && (arguments[0] ? Hr(arguments[0]) ? (e = arguments[0], t = void 0) : Rr(arguments[0]) && (t = arguments[0], e = void 0) : (e = void 0, t = void 0));
                var n = e || qn(),
                    s = hr(n, this).startOf("day"),
                    i = r.calendarFormat(this, s) || "sameElse",
                    o = t && (O(t[i]) ? t[i].call(this, n) : t[i]);
                return this.format(o || this.localeData().calendar(i, this, qn(n)))
            }

            function Gr() {
                return new k(this)
            }

            function Ur(e, t) {
                var n = b(e) ? e : qn(e);
                return !(!this.isValid() || !n.isValid()) && ("millisecond" === (t = re(t) || "millisecond") ? this.valueOf() > n.valueOf() : n.valueOf() < this.clone().startOf(t).valueOf())
            }

            function Vr(e, t) {
                var n = b(e) ? e : qn(e);
                return !(!this.isValid() || !n.isValid()) && ("millisecond" === (t = re(t) || "millisecond") ? this.valueOf() < n.valueOf() : this.clone().endOf(t).valueOf() < n.valueOf())
            }

            function zr(e, t, n, r) {
                var s = b(e) ? e : qn(e),
                    i = b(t) ? t : qn(t);
                return !!(this.isValid() && s.isValid() && i.isValid()) && ("(" === (r = r || "()")[0] ? this.isAfter(s, n) : !this.isBefore(s, n)) && (")" === r[1] ? this.isBefore(i, n) : !this.isAfter(i, n))
            }

            function Br(e, t) {
                var n, r = b(e) ? e : qn(e);
                return !(!this.isValid() || !r.isValid()) && ("millisecond" === (t = re(t) || "millisecond") ? this.valueOf() === r.valueOf() : (n = r.valueOf(), this.clone().startOf(t).valueOf() <= n && n <= this.clone().endOf(t).valueOf()))
            }

            function Zr(e, t) {
                return this.isSame(e, t) || this.isAfter(e, t)
            }

            function qr(e, t) {
                return this.isSame(e, t) || this.isBefore(e, t)
            }

            function Jr(e, t, n) {
                var r, s, i;
                if (!this.isValid()) return NaN;
                if (!(r = hr(e, this)).isValid()) return NaN;
                switch (s = 6e4 * (r.utcOffset() - this.utcOffset()), t = re(t)) {
                    case "year":
                        i = Kr(this, r) / 12;
                        break;
                    case "month":
                        i = Kr(this, r);
                        break;
                    case "quarter":
                        i = Kr(this, r) / 3;
                        break;
                    case "second":
                        i = (this - r) / 1e3;
                        break;
                    case "minute":
                        i = (this - r) / 6e4;
                        break;
                    case "hour":
                        i = (this - r) / 36e5;
                        break;
                    case "day":
                        i = (this - r - s) / 864e5;
                        break;
                    case "week":
                        i = (this - r - s) / 6048e5;
                        break;
                    default:
                        i = this - r
                }
                return n ? i : ce(i)
            }

            function Kr(e, t) {
                if (e.date() < t.date()) return -Kr(t, e);
                var n = 12 * (t.year() - e.year()) + (t.month() - e.month()),
                    r = e.clone().add(n, "months");
                return -(n + (t - r < 0 ? (t - r) / (r - e.clone().add(n - 1, "months")) : (t - r) / (e.clone().add(n + 1, "months") - r))) || 0
            }

            function Qr() {
                return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
            }

            function Xr(e) {
                if (!this.isValid()) return null;
                var t = !0 !== e,
                    n = t ? this.clone().utc() : this;
                return n.year() < 0 || n.year() > 9999 ? G(n, t ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ") : O(Date.prototype.toISOString) ? t ? this.toDate().toISOString() : new Date(this.valueOf() + 60 * this.utcOffset() * 1e3).toISOString().replace("Z", G(n, "Z")) : G(n, t ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ")
            }

            function es() {
                if (!this.isValid()) return "moment.invalid(/* " + this._i + " */)";
                var e, t, n, r, s = "moment",
                    i = "";
                return this.isLocal() || (s = 0 === this.utcOffset() ? "moment.utc" : "moment.parseZone", i = "Z"), e = "[" + s + '("]', t = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY", n = "-MM-DD[T]HH:mm:ss.SSS", r = i + '[")]', this.format(e + t + n + r)
            }

            function ts(e) {
                e || (e = this.isUtc() ? r.defaultFormatUtc : r.defaultFormat);
                var t = G(this, e);
                return this.localeData().postformat(t)
            }

            function ns(e, t) {
                return this.isValid() && (b(e) && e.isValid() || qn(e).isValid()) ? Yr({
                    to: this,
                    from: e
                }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate()
            }

            function rs(e) {
                return this.from(qn(), e)
            }

            function ss(e, t) {
                return this.isValid() && (b(e) && e.isValid() || qn(e).isValid()) ? Yr({
                    from: this,
                    to: e
                }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate()
            }

            function is(e) {
                return this.to(qn(), e)
            }

            function os(e) {
                var t;
                return void 0 === e ? this._locale._abbr : (null != (t = vn(e)) && (this._locale = t), this)
            }
            r.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ", r.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
            var as = S("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", (function(e) {
                return void 0 === e ? this.localeData() : this.locale(e)
            }));

            function ls() {
                return this._locale
            }
            var cs = 1e3,
                us = 60 * cs,
                ds = 60 * us,
                fs = 3506328 * ds;

            function hs(e, t) {
                return (e % t + t) % t
            }

            function ms(e, t, n) {
                return e < 100 && e >= 0 ? new Date(e + 400, t, n) - fs : new Date(e, t, n).valueOf()
            }

            function ps(e, t, n) {
                return e < 100 && e >= 0 ? Date.UTC(e + 400, t, n) - fs : Date.UTC(e, t, n)
            }

            function gs(e) {
                var t, n;
                if (void 0 === (e = re(e)) || "millisecond" === e || !this.isValid()) return this;
                switch (n = this._isUTC ? ps : ms, e) {
                    case "year":
                        t = n(this.year(), 0, 1);
                        break;
                    case "quarter":
                        t = n(this.year(), this.month() - this.month() % 3, 1);
                        break;
                    case "month":
                        t = n(this.year(), this.month(), 1);
                        break;
                    case "week":
                        t = n(this.year(), this.month(), this.date() - this.weekday());
                        break;
                    case "isoWeek":
                        t = n(this.year(), this.month(), this.date() - (this.isoWeekday() - 1));
                        break;
                    case "day":
                    case "date":
                        t = n(this.year(), this.month(), this.date());
                        break;
                    case "hour":
                        t = this._d.valueOf(), t -= hs(t + (this._isUTC ? 0 : this.utcOffset() * us), ds);
                        break;
                    case "minute":
                        t = this._d.valueOf(), t -= hs(t, us);
                        break;
                    case "second":
                        t = this._d.valueOf(), t -= hs(t, cs)
                }
                return this._d.setTime(t), r.updateOffset(this, !0), this
            }

            function ys(e) {
                var t, n;
                if (void 0 === (e = re(e)) || "millisecond" === e || !this.isValid()) return this;
                switch (n = this._isUTC ? ps : ms, e) {
                    case "year":
                        t = n(this.year() + 1, 0, 1) - 1;
                        break;
                    case "quarter":
                        t = n(this.year(), this.month() - this.month() % 3 + 3, 1) - 1;
                        break;
                    case "month":
                        t = n(this.year(), this.month() + 1, 1) - 1;
                        break;
                    case "week":
                        t = n(this.year(), this.month(), this.date() - this.weekday() + 7) - 1;
                        break;
                    case "isoWeek":
                        t = n(this.year(), this.month(), this.date() - (this.isoWeekday() - 1) + 7) - 1;
                        break;
                    case "day":
                    case "date":
                        t = n(this.year(), this.month(), this.date() + 1) - 1;
                        break;
                    case "hour":
                        t = this._d.valueOf(), t += ds - hs(t + (this._isUTC ? 0 : this.utcOffset() * us), ds) - 1;
                        break;
                    case "minute":
                        t = this._d.valueOf(), t += us - hs(t, us) - 1;
                        break;
                    case "second":
                        t = this._d.valueOf(), t += cs - hs(t, cs) - 1
                }
                return this._d.setTime(t), r.updateOffset(this, !0), this
            }

            function vs() {
                return this._d.valueOf() - 6e4 * (this._offset || 0)
            }

            function ws() {
                return Math.floor(this.valueOf() / 1e3)
            }

            function xs() {
                return new Date(this.valueOf())
            }

            function _s() {
                var e = this;
                return [e.year(), e.month(), e.date(), e.hour(), e.minute(), e.second(), e.millisecond()]
            }

            function ks() {
                var e = this;
                return {
                    years: e.year(),
                    months: e.month(),
                    date: e.date(),
                    hours: e.hours(),
                    minutes: e.minutes(),
                    seconds: e.seconds(),
                    milliseconds: e.milliseconds()
                }
            }

            function bs() {
                return this.isValid() ? this.toISOString() : null
            }

            function $s() {
                return y(this)
            }

            function Ss() {
                return h({}, g(this))
            }

            function Ms() {
                return g(this).overflow
            }

            function Ds() {
                return {
                    input: this._i,
                    format: this._f,
                    locale: this._locale,
                    isUTC: this._isUTC,
                    strict: this._strict
                }
            }

            function Ys(e, t) {
                var n, s, i, o = this._eras || vn("en")._eras;
                for (n = 0, s = o.length; n < s; ++n) switch ("string" == typeof o[n].since && (i = r(o[n].since).startOf("day"), o[n].since = i.valueOf()), typeof o[n].until) {
                    case "undefined":
                        o[n].until = 1 / 0;
                        break;
                    case "string":
                        i = r(o[n].until).startOf("day").valueOf(), o[n].until = i.valueOf()
                }
                return o
            }

            function Os(e, t, n) {
                var r, s, i, o, a, l = this.eras();
                for (e = e.toUpperCase(), r = 0, s = l.length; r < s; ++r)
                    if (i = l[r].name.toUpperCase(), o = l[r].abbr.toUpperCase(), a = l[r].narrow.toUpperCase(), n) switch (t) {
                        case "N":
                        case "NN":
                        case "NNN":
                            if (o === e) return l[r];
                            break;
                        case "NNNN":
                            if (i === e) return l[r];
                            break;
                        case "NNNNN":
                            if (a === e) return l[r]
                    } else if ([i, o, a].indexOf(e) >= 0) return l[r]
            }

            function Ts(e, t) {
                var n = e.since <= e.until ? 1 : -1;
                return void 0 === t ? r(e.since).year() : r(e.since).year() + (t - e.offset) * n
            }

            function Cs() {
                var e, t, n, r = this.localeData().eras();
                for (e = 0, t = r.length; e < t; ++e) {
                    if (n = this.clone().startOf("day").valueOf(), r[e].since <= n && n <= r[e].until) return r[e].name;
                    if (r[e].until <= n && n <= r[e].since) return r[e].name
                }
                return ""
            }

            function Ls() {
                var e, t, n, r = this.localeData().eras();
                for (e = 0, t = r.length; e < t; ++e) {
                    if (n = this.clone().startOf("day").valueOf(), r[e].since <= n && n <= r[e].until) return r[e].narrow;
                    if (r[e].until <= n && n <= r[e].since) return r[e].narrow
                }
                return ""
            }

            function Ns() {
                var e, t, n, r = this.localeData().eras();
                for (e = 0, t = r.length; e < t; ++e) {
                    if (n = this.clone().startOf("day").valueOf(), r[e].since <= n && n <= r[e].until) return r[e].abbr;
                    if (r[e].until <= n && n <= r[e].since) return r[e].abbr
                }
                return ""
            }

            function Ps() {
                var e, t, n, s, i = this.localeData().eras();
                for (e = 0, t = i.length; e < t; ++e)
                    if (n = i[e].since <= i[e].until ? 1 : -1, s = this.clone().startOf("day").valueOf(), i[e].since <= s && s <= i[e].until || i[e].until <= s && s <= i[e].since) return (this.year() - r(i[e].since).year()) * n + i[e].offset;
                return this.year()
            }

            function js(e) {
                return a(this, "_erasNameRegex") || Fs.call(this), e ? this._erasNameRegex : this._erasRegex
            }

            function As(e) {
                return a(this, "_erasAbbrRegex") || Fs.call(this), e ? this._erasAbbrRegex : this._erasRegex
            }

            function Hs(e) {
                return a(this, "_erasNarrowRegex") || Fs.call(this), e ? this._erasNarrowRegex : this._erasRegex
            }

            function Es(e, t) {
                return t.erasAbbrRegex(e)
            }

            function Is(e, t) {
                return t.erasNameRegex(e)
            }

            function Rs(e, t) {
                return t.erasNarrowRegex(e)
            }

            function Ws(e, t) {
                return t._eraYearOrdinalRegex || Ye
            }

            function Fs() {
                var e, t, n = [],
                    r = [],
                    s = [],
                    i = [],
                    o = this.eras();
                for (e = 0, t = o.length; e < t; ++e) r.push(He(o[e].name)), n.push(He(o[e].abbr)), s.push(He(o[e].narrow)), i.push(He(o[e].name)), i.push(He(o[e].abbr)), i.push(He(o[e].narrow));
                this._erasRegex = new RegExp("^(" + i.join("|") + ")", "i"), this._erasNameRegex = new RegExp("^(" + r.join("|") + ")", "i"), this._erasAbbrRegex = new RegExp("^(" + n.join("|") + ")", "i"), this._erasNarrowRegex = new RegExp("^(" + s.join("|") + ")", "i")
            }

            function Gs(e, t) {
                R(0, [e, e.length], 0, t)
            }

            function Us(e) {
                return Js.call(this, e, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy)
            }

            function Vs(e) {
                return Js.call(this, e, this.isoWeek(), this.isoWeekday(), 1, 4)
            }

            function zs() {
                return $t(this.year(), 1, 4)
            }

            function Bs() {
                return $t(this.isoWeekYear(), 1, 4)
            }

            function Zs() {
                var e = this.localeData()._week;
                return $t(this.year(), e.dow, e.doy)
            }

            function qs() {
                var e = this.localeData()._week;
                return $t(this.weekYear(), e.dow, e.doy)
            }

            function Js(e, t, n, r, s) {
                var i;
                return null == e ? bt(this, r, s).year : (t > (i = $t(e, r, s)) && (t = i), Ks.call(this, e, t, n, r, s))
            }

            function Ks(e, t, n, r, s) {
                var i = _t(e, t, n, r, s),
                    o = wt(i.year, 0, i.dayOfYear);
                return this.year(o.getUTCFullYear()), this.month(o.getUTCMonth()), this.date(o.getUTCDate()), this
            }

            function Qs(e) {
                return null == e ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (e - 1) + this.month() % 3)
            }
            R("N", 0, 0, "eraAbbr"), R("NN", 0, 0, "eraAbbr"), R("NNN", 0, 0, "eraAbbr"), R("NNNN", 0, 0, "eraName"), R("NNNNN", 0, 0, "eraNarrow"), R("y", ["y", 1], "yo", "eraYear"), R("y", ["yy", 2], 0, "eraYear"), R("y", ["yyy", 3], 0, "eraYear"), R("y", ["yyyy", 4], 0, "eraYear"), Pe("N", Es), Pe("NN", Es), Pe("NNN", Es), Pe("NNNN", Is), Pe("NNNNN", Rs), Ie(["N", "NN", "NNN", "NNNN", "NNNNN"], (function(e, t, n, r) {
                var s = n._locale.erasParse(e, r, n._strict);
                s ? g(n).era = s : g(n).invalidEra = e
            })), Pe("y", Ye), Pe("yy", Ye), Pe("yyy", Ye), Pe("yyyy", Ye), Pe("yo", Ws), Ie(["y", "yy", "yyy", "yyyy"], Ge), Ie(["yo"], (function(e, t, n, r) {
                var s;
                n._locale._eraYearOrdinalRegex && (s = e.match(n._locale._eraYearOrdinalRegex)), n._locale.eraYearOrdinalParse ? t[Ge] = n._locale.eraYearOrdinalParse(e, s) : t[Ge] = parseInt(e, 10)
            })), R(0, ["gg", 2], 0, (function() {
                return this.weekYear() % 100
            })), R(0, ["GG", 2], 0, (function() {
                return this.isoWeekYear() % 100
            })), Gs("gggg", "weekYear"), Gs("ggggg", "weekYear"), Gs("GGGG", "isoWeekYear"), Gs("GGGGG", "isoWeekYear"), ne("weekYear", "gg"), ne("isoWeekYear", "GG"), oe("weekYear", 1), oe("isoWeekYear", 1), Pe("G", Oe), Pe("g", Oe), Pe("GG", ke, ve), Pe("gg", ke, ve), Pe("GGGG", Me, xe), Pe("gggg", Me, xe), Pe("GGGGG", De, _e), Pe("ggggg", De, _e), Re(["gggg", "ggggg", "GGGG", "GGGGG"], (function(e, t, n, r) {
                t[r.substr(0, 2)] = ue(e)
            })), Re(["gg", "GG"], (function(e, t, n, s) {
                t[s] = r.parseTwoDigitYear(e)
            })), R("Q", 0, "Qo", "quarter"), ne("quarter", "Q"), oe("quarter", 7), Pe("Q", ye), Ie("Q", (function(e, t) {
                t[Ue] = 3 * (ue(e) - 1)
            })), R("D", ["DD", 2], "Do", "date"), ne("date", "D"), oe("date", 9), Pe("D", ke), Pe("DD", ke, ve), Pe("Do", (function(e, t) {
                return e ? t._dayOfMonthOrdinalParse || t._ordinalParse : t._dayOfMonthOrdinalParseLenient
            })), Ie(["D", "DD"], Ve), Ie("Do", (function(e, t) {
                t[Ve] = ue(e.match(ke)[0])
            }));
            var Xs = de("Date", !0);

            function ei(e) {
                var t = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
                return null == e ? t : this.add(e - t, "d")
            }
            R("DDD", ["DDDD", 3], "DDDo", "dayOfYear"), ne("dayOfYear", "DDD"), oe("dayOfYear", 4), Pe("DDD", Se), Pe("DDDD", we), Ie(["DDD", "DDDD"], (function(e, t, n) {
                n._dayOfYear = ue(e)
            })), R("m", ["mm", 2], 0, "minute"), ne("minute", "m"), oe("minute", 14), Pe("m", ke), Pe("mm", ke, ve), Ie(["m", "mm"], Be);
            var ti = de("Minutes", !1);
            R("s", ["ss", 2], 0, "second"), ne("second", "s"), oe("second", 15), Pe("s", ke), Pe("ss", ke, ve), Ie(["s", "ss"], Ze);
            var ni, ri, si = de("Seconds", !1);
            for (R("S", 0, 0, (function() {
                    return ~~(this.millisecond() / 100)
                })), R(0, ["SS", 2], 0, (function() {
                    return ~~(this.millisecond() / 10)
                })), R(0, ["SSS", 3], 0, "millisecond"), R(0, ["SSSS", 4], 0, (function() {
                    return 10 * this.millisecond()
                })), R(0, ["SSSSS", 5], 0, (function() {
                    return 100 * this.millisecond()
                })), R(0, ["SSSSSS", 6], 0, (function() {
                    return 1e3 * this.millisecond()
                })), R(0, ["SSSSSSS", 7], 0, (function() {
                    return 1e4 * this.millisecond()
                })), R(0, ["SSSSSSSS", 8], 0, (function() {
                    return 1e5 * this.millisecond()
                })), R(0, ["SSSSSSSSS", 9], 0, (function() {
                    return 1e6 * this.millisecond()
                })), ne("millisecond", "ms"), oe("millisecond", 16), Pe("S", Se, ye), Pe("SS", Se, ve), Pe("SSS", Se, we), ni = "SSSS"; ni.length <= 9; ni += "S") Pe(ni, Ye);

            function ii(e, t) {
                t[qe] = ue(1e3 * ("0." + e))
            }
            for (ni = "S"; ni.length <= 9; ni += "S") Ie(ni, ii);

            function oi() {
                return this._isUTC ? "UTC" : ""
            }

            function ai() {
                return this._isUTC ? "Coordinated Universal Time" : ""
            }
            ri = de("Milliseconds", !1), R("z", 0, 0, "zoneAbbr"), R("zz", 0, 0, "zoneName");
            var li = k.prototype;

            function ci(e) {
                return qn(1e3 * e)
            }

            function ui() {
                return qn.apply(null, arguments).parseZone()
            }

            function di(e) {
                return e
            }
            li.add = Pr, li.calendar = Fr, li.clone = Gr, li.diff = Jr, li.endOf = ys, li.format = ts, li.from = ns, li.fromNow = rs, li.to = ss, li.toNow = is, li.get = me, li.invalidAt = Ms, li.isAfter = Ur, li.isBefore = Vr, li.isBetween = zr, li.isSame = Br, li.isSameOrAfter = Zr, li.isSameOrBefore = qr, li.isValid = $s, li.lang = as, li.locale = os, li.localeData = ls, li.max = Kn, li.min = Jn, li.parsingFlags = Ss, li.set = pe, li.startOf = gs, li.subtract = jr, li.toArray = _s, li.toObject = ks, li.toDate = xs, li.toISOString = Xr, li.inspect = es, "undefined" != typeof Symbol && null != Symbol.for && (li[Symbol.for("nodejs.util.inspect.custom")] = function() {
                return "Moment<" + this.format() + ">"
            }), li.toJSON = bs, li.toString = Qr, li.unix = ws, li.valueOf = vs, li.creationData = Ds, li.eraName = Cs, li.eraNarrow = Ls, li.eraAbbr = Ns, li.eraYear = Ps, li.year = gt, li.isLeapYear = yt, li.weekYear = Us, li.isoWeekYear = Vs, li.quarter = li.quarters = Qs, li.month = ut, li.daysInMonth = dt, li.week = li.weeks = Ot, li.isoWeek = li.isoWeeks = Tt, li.weeksInYear = Zs, li.weeksInWeekYear = qs, li.isoWeeksInYear = zs, li.isoWeeksInISOWeekYear = Bs, li.date = Xs, li.day = li.days = Vt, li.weekday = zt, li.isoWeekday = Bt, li.dayOfYear = ei, li.hour = li.hours = sn, li.minute = li.minutes = ti, li.second = li.seconds = si, li.millisecond = li.milliseconds = ri, li.utcOffset = pr, li.utc = yr, li.local = vr, li.parseZone = wr, li.hasAlignedHourOffset = xr, li.isDST = _r, li.isLocal = br, li.isUtcOffset = $r, li.isUtc = Sr, li.isUTC = Sr, li.zoneAbbr = oi, li.zoneName = ai, li.dates = S("dates accessor is deprecated. Use date instead.", Xs), li.months = S("months accessor is deprecated. Use month instead", ut), li.years = S("years accessor is deprecated. Use year instead", gt), li.zone = S("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/", gr), li.isDSTShifted = S("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information", kr);
            var fi = L.prototype;

            function hi(e, t, n, r) {
                var s = vn(),
                    i = m().set(r, t);
                return s[n](i, e)
            }

            function mi(e, t, n) {
                if (u(e) && (t = e, e = void 0), e = e || "", null != t) return hi(e, t, n, "month");
                var r, s = [];
                for (r = 0; r < 12; r++) s[r] = hi(e, r, n, "month");
                return s
            }

            function pi(e, t, n, r) {
                "boolean" == typeof e ? (u(t) && (n = t, t = void 0), t = t || "") : (n = t = e, e = !1, u(t) && (n = t, t = void 0), t = t || "");
                var s, i = vn(),
                    o = e ? i._week.dow : 0,
                    a = [];
                if (null != n) return hi(t, (n + o) % 7, r, "day");
                for (s = 0; s < 7; s++) a[s] = hi(t, (s + o) % 7, r, "day");
                return a
            }

            function gi(e, t) {
                return mi(e, t, "months")
            }

            function yi(e, t) {
                return mi(e, t, "monthsShort")
            }

            function vi(e, t, n) {
                return pi(e, t, n, "weekdays")
            }

            function wi(e, t, n) {
                return pi(e, t, n, "weekdaysShort")
            }

            function xi(e, t, n) {
                return pi(e, t, n, "weekdaysMin")
            }
            fi.calendar = P, fi.longDateFormat = z, fi.invalidDate = Z, fi.ordinal = K, fi.preparse = di, fi.postformat = di, fi.relativeTime = X, fi.pastFuture = ee, fi.set = T, fi.eras = Ys, fi.erasParse = Os, fi.erasConvertYear = Ts, fi.erasAbbrRegex = As, fi.erasNameRegex = js, fi.erasNarrowRegex = Hs, fi.months = it, fi.monthsShort = ot, fi.monthsParse = lt, fi.monthsRegex = ht, fi.monthsShortRegex = ft, fi.week = St, fi.firstDayOfYear = Yt, fi.firstDayOfWeek = Dt, fi.weekdays = Rt, fi.weekdaysMin = Ft, fi.weekdaysShort = Wt, fi.weekdaysParse = Ut, fi.weekdaysRegex = Zt, fi.weekdaysShortRegex = qt, fi.weekdaysMinRegex = Jt, fi.isPM = nn, fi.meridiem = on, pn("en", {
                eras: [{
                    since: "0001-01-01",
                    until: 1 / 0,
                    offset: 1,
                    name: "Anno Domini",
                    narrow: "AD",
                    abbr: "AD"
                }, {
                    since: "0000-12-31",
                    until: -1 / 0,
                    offset: 1,
                    name: "Before Christ",
                    narrow: "BC",
                    abbr: "BC"
                }],
                dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
                ordinal: function(e) {
                    var t = e % 10;
                    return e + (1 === ue(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th")
                }
            }), r.lang = S("moment.lang is deprecated. Use moment.locale instead.", pn), r.langData = S("moment.langData is deprecated. Use moment.localeData instead.", vn);
            var _i = Math.abs;

            function ki() {
                var e = this._data;
                return this._milliseconds = _i(this._milliseconds), this._days = _i(this._days), this._months = _i(this._months), e.milliseconds = _i(e.milliseconds), e.seconds = _i(e.seconds), e.minutes = _i(e.minutes), e.hours = _i(e.hours), e.months = _i(e.months), e.years = _i(e.years), this
            }

            function bi(e, t, n, r) {
                var s = Yr(t, n);
                return e._milliseconds += r * s._milliseconds, e._days += r * s._days, e._months += r * s._months, e._bubble()
            }

            function $i(e, t) {
                return bi(this, e, t, 1)
            }

            function Si(e, t) {
                return bi(this, e, t, -1)
            }

            function Mi(e) {
                return e < 0 ? Math.floor(e) : Math.ceil(e)
            }

            function Di() {
                var e, t, n, r, s, i = this._milliseconds,
                    o = this._days,
                    a = this._months,
                    l = this._data;
                return i >= 0 && o >= 0 && a >= 0 || i <= 0 && o <= 0 && a <= 0 || (i += 864e5 * Mi(Oi(a) + o), o = 0, a = 0), l.milliseconds = i % 1e3, e = ce(i / 1e3), l.seconds = e % 60, t = ce(e / 60), l.minutes = t % 60, n = ce(t / 60), l.hours = n % 24, o += ce(n / 24), a += s = ce(Yi(o)), o -= Mi(Oi(s)), r = ce(a / 12), a %= 12, l.days = o, l.months = a, l.years = r, this
            }

            function Yi(e) {
                return 4800 * e / 146097
            }

            function Oi(e) {
                return 146097 * e / 4800
            }

            function Ti(e) {
                if (!this.isValid()) return NaN;
                var t, n, r = this._milliseconds;
                if ("month" === (e = re(e)) || "quarter" === e || "year" === e) switch (t = this._days + r / 864e5, n = this._months + Yi(t), e) {
                    case "month":
                        return n;
                    case "quarter":
                        return n / 3;
                    case "year":
                        return n / 12
                } else switch (t = this._days + Math.round(Oi(this._months)), e) {
                    case "week":
                        return t / 7 + r / 6048e5;
                    case "day":
                        return t + r / 864e5;
                    case "hour":
                        return 24 * t + r / 36e5;
                    case "minute":
                        return 1440 * t + r / 6e4;
                    case "second":
                        return 86400 * t + r / 1e3;
                    case "millisecond":
                        return Math.floor(864e5 * t) + r;
                    default:
                        throw new Error("Unknown unit " + e)
                }
            }

            function Ci() {
                return this.isValid() ? this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * ue(this._months / 12) : NaN
            }

            function Li(e) {
                return function() {
                    return this.as(e)
                }
            }
            var Ni = Li("ms"),
                Pi = Li("s"),
                ji = Li("m"),
                Ai = Li("h"),
                Hi = Li("d"),
                Ei = Li("w"),
                Ii = Li("M"),
                Ri = Li("Q"),
                Wi = Li("y");

            function Fi() {
                return Yr(this)
            }

            function Gi(e) {
                return e = re(e), this.isValid() ? this[e + "s"]() : NaN
            }

            function Ui(e) {
                return function() {
                    return this.isValid() ? this._data[e] : NaN
                }
            }
            var Vi = Ui("milliseconds"),
                zi = Ui("seconds"),
                Bi = Ui("minutes"),
                Zi = Ui("hours"),
                qi = Ui("days"),
                Ji = Ui("months"),
                Ki = Ui("years");

            function Qi() {
                return ce(this.days() / 7)
            }
            var Xi = Math.round,
                eo = {
                    ss: 44,
                    s: 45,
                    m: 45,
                    h: 22,
                    d: 26,
                    w: null,
                    M: 11
                };

            function to(e, t, n, r, s) {
                return s.relativeTime(t || 1, !!n, e, r)
            }

            function no(e, t, n, r) {
                var s = Yr(e).abs(),
                    i = Xi(s.as("s")),
                    o = Xi(s.as("m")),
                    a = Xi(s.as("h")),
                    l = Xi(s.as("d")),
                    c = Xi(s.as("M")),
                    u = Xi(s.as("w")),
                    d = Xi(s.as("y")),
                    f = i <= n.ss && ["s", i] || i < n.s && ["ss", i] || o <= 1 && ["m"] || o < n.m && ["mm", o] || a <= 1 && ["h"] || a < n.h && ["hh", a] || l <= 1 && ["d"] || l < n.d && ["dd", l];
                return null != n.w && (f = f || u <= 1 && ["w"] || u < n.w && ["ww", u]), (f = f || c <= 1 && ["M"] || c < n.M && ["MM", c] || d <= 1 && ["y"] || ["yy", d])[2] = t, f[3] = +e > 0, f[4] = r, to.apply(null, f)
            }

            function ro(e) {
                return void 0 === e ? Xi : "function" == typeof e && (Xi = e, !0)
            }

            function so(e, t) {
                return void 0 !== eo[e] && (void 0 === t ? eo[e] : (eo[e] = t, "s" === e && (eo.ss = t - 1), !0))
            }

            function io(e, t) {
                if (!this.isValid()) return this.localeData().invalidDate();
                var n, r, s = !1,
                    i = eo;
                return "object" == typeof e && (t = e, e = !1), "boolean" == typeof e && (s = e), "object" == typeof t && (i = Object.assign({}, eo, t), null != t.s && null == t.ss && (i.ss = t.s - 1)), r = no(this, !s, i, n = this.localeData()), s && (r = n.pastFuture(+this, r)), n.postformat(r)
            }
            var oo = Math.abs;

            function ao(e) {
                return (e > 0) - (e < 0) || +e
            }

            function lo() {
                if (!this.isValid()) return this.localeData().invalidDate();
                var e, t, n, r, s, i, o, a, l = oo(this._milliseconds) / 1e3,
                    c = oo(this._days),
                    u = oo(this._months),
                    d = this.asSeconds();
                return d ? (e = ce(l / 60), t = ce(e / 60), l %= 60, e %= 60, n = ce(u / 12), u %= 12, r = l ? l.toFixed(3).replace(/\.?0+$/, "") : "", s = d < 0 ? "-" : "", i = ao(this._months) !== ao(d) ? "-" : "", o = ao(this._days) !== ao(d) ? "-" : "", a = ao(this._milliseconds) !== ao(d) ? "-" : "", s + "P" + (n ? i + n + "Y" : "") + (u ? i + u + "M" : "") + (c ? o + c + "D" : "") + (t || e || l ? "T" : "") + (t ? a + t + "H" : "") + (e ? a + e + "M" : "") + (l ? a + r + "S" : "")) : "P0D"
            }
            var co = or.prototype;
            return co.isValid = sr, co.abs = ki, co.add = $i, co.subtract = Si, co.as = Ti, co.asMilliseconds = Ni, co.asSeconds = Pi, co.asMinutes = ji, co.asHours = Ai, co.asDays = Hi, co.asWeeks = Ei, co.asMonths = Ii, co.asQuarters = Ri, co.asYears = Wi, co.valueOf = Ci, co._bubble = Di, co.clone = Fi, co.get = Gi, co.milliseconds = Vi, co.seconds = zi, co.minutes = Bi, co.hours = Zi, co.days = qi, co.weeks = Qi, co.months = Ji, co.years = Ki, co.humanize = io, co.toISOString = lo, co.toString = lo, co.toJSON = lo, co.locale = os, co.localeData = ls, co.toIsoString = S("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", lo), co.lang = as, R("X", 0, 0, "unix"), R("x", 0, 0, "valueOf"), Pe("x", Oe), Pe("X", Le), Ie("X", (function(e, t, n) {
                    n._d = new Date(1e3 * parseFloat(e))
                })), Ie("x", (function(e, t, n) {
                    n._d = new Date(ue(e))
                })),
                //! moment.js
                r.version = "2.29.1", s(qn), r.fn = li, r.min = Xn, r.max = er, r.now = tr, r.utc = m, r.unix = ci, r.months = gi, r.isDate = d, r.locale = pn, r.invalid = v, r.duration = Yr, r.isMoment = b, r.weekdays = vi, r.parseZone = ui, r.localeData = vn, r.isDuration = ar, r.monthsShort = yi, r.weekdaysMin = xi, r.defineLocale = gn, r.updateLocale = yn, r.locales = wn, r.weekdaysShort = wi, r.normalizeUnits = re, r.relativeTimeRounding = ro, r.relativeTimeThreshold = so, r.calendarFormat = Wr, r.prototype = li, r.HTML5_FMT = {
                    DATETIME_LOCAL: "YYYY-MM-DDTHH:mm",
                    DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss",
                    DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS",
                    DATE: "YYYY-MM-DD",
                    TIME: "HH:mm",
                    TIME_SECONDS: "HH:mm:ss",
                    TIME_MS: "HH:mm:ss.SSS",
                    WEEK: "GGGG-[W]WW",
                    MONTH: "YYYY-MM"
                }, r
        }()
    }));
    const {
        window: Gn
    } = Q;

    function Un(e) {
        let t, n;
        return t = new Rt({
            props: {
                hasFrame: e[4].hasFrame,
                title: e[4].title,
                $$slots: {
                    default: [Kn]
                },
                $$scope: {
                    ctx: e
                }
            }
        }), t.$on("close", e[15]), {
            c() {
                X(t.$$.fragment)
            },
            m(e, r) {
                ee(t, e, r), n = !0
            },
            p(e, n) {
                const r = {};
                16 & n && (r.hasFrame = e[4].hasFrame), 16 & n && (r.title = e[4].title), 16777232 & n && (r.$$scope = {
                    dirty: n,
                    ctx: e
                }), t.$set(r)
            },
            i(e) {
                n || (J(t.$$.fragment, e), n = !0)
            },
            o(e) {
                K(t.$$.fragment, e), n = !1
            },
            d(e) {
                te(t, e)
            }
        }
    }

    function Vn(t) {
        let n, r, s, i;
        return n = new un({}), {
            c() {
                X(n.$$.fragment), r = k(), s = w("p"), s.textContent = "You can still enter the correct answer if you want to maintain your streak - we won't tell anyone...", S(s, "class", "text-center text-sm my-6 ")
            },
            m(e, t) {
                ee(n, e, t), g(e, r, t), g(e, s, t), i = !0
            },
            p: e,
            i(e) {
                i || (J(n.$$.fragment, e), i = !0)
            },
            o(e) {
                K(n.$$.fragment, e), i = !1
            },
            d(e) {
                te(n, e), e && y(r), e && y(s)
            }
        }
    }

    function zn(t) {
        let n, r;
        return n = new Wn({}), {
            c() {
                X(n.$$.fragment)
            },
            m(e, t) {
                ee(n, e, t), r = !0
            },
            p: e,
            i(e) {
                r || (J(n.$$.fragment, e), r = !0)
            },
            o(e) {
                K(n.$$.fragment, e), r = !1
            },
            d(e) {
                te(n, e)
            }
        }
    }

    function Bn(t) {
        let n, r;
        return n = new Tn({}), n.$on("close", t[14]), {
            c() {
                X(n.$$.fragment)
            },
            m(e, t) {
                ee(n, e, t), r = !0
            },
            p: e,
            i(e) {
                r || (J(n.$$.fragment, e), r = !0)
            },
            o(e) {
                K(n.$$.fragment, e), r = !1
            },
            d(e) {
                te(n, e)
            }
        }
    }

    function Zn(t) {
        let n, r;
        return n = new In({}), {
            c() {
                X(n.$$.fragment)
            },
            m(e, t) {
                ee(n, e, t), r = !0
            },
            p: e,
            i(e) {
                r || (J(n.$$.fragment, e), r = !0)
            },
            o(e) {
                K(n.$$.fragment, e), r = !1
            },
            d(e) {
                te(n, e)
            }
        }
    }

    function qn(t) {
        let n, r;
        return n = new tn({}), {
            c() {
                X(n.$$.fragment)
            },
            m(e, t) {
                ee(n, e, t), r = !0
            },
            p: e,
            i(e) {
                r || (J(n.$$.fragment, e), r = !0)
            },
            o(e) {
                K(n.$$.fragment, e), r = !1
            },
            d(e) {
                te(n, e)
            }
        }
    }

    function Jn(t) {
        let n, r;
        return n = new Gt({}), {
            c() {
                X(n.$$.fragment)
            },
            m(e, t) {
                ee(n, e, t), r = !0
            },
            p: e,
            i(e) {
                r || (J(n.$$.fragment, e), r = !0)
            },
            o(e) {
                K(n.$$.fragment, e), r = !1
            },
            d(e) {
                te(n, e)
            }
        }
    }

    function Kn(e) {
        let t, n, r, s;
        const i = [Jn, qn, Zn, Bn, zn, Vn],
            o = [];

        function a(e, t) {
            return "info" == e[4].name ? 0 : "donate" == e[4].name ? 1 : "results" == e[4].name ? 2 : "help" == e[4].name ? 3 : "switcher" == e[4].name ? 4 : "resultsCard" == e[4].name ? 5 : -1
        }
        return ~(t = a(e)) && (n = o[t] = i[t](e)), {
            c() {
                n && n.c(), r = b()
            },
            m(e, n) {
                ~t && o[t].m(e, n), g(e, r, n), s = !0
            },
            p(e, s) {
                let l = t;
                t = a(e), t === l ? ~t && o[t].p(e, s) : (n && (Z(), K(o[l], 1, 1, (() => {
                    o[l] = null
                })), q()), ~t ? (n = o[t], n ? n.p(e, s) : (n = o[t] = i[t](e), n.c()), J(n, 1), n.m(r.parentNode, r)) : n = null)
            },
            i(e) {
                s || (J(n), s = !0)
            },
            o(e) {
                K(n), s = !1
            },
            d(e) {
                ~t && o[t].d(e), e && y(r)
            }
        }
    }

    function Qn(e) {
        let t, n;
        return t = new Be({
            props: {
                errorMsg: e[6].errorMsg
            }
        }), t.$on("retry", e[8]), {
            c() {
                X(t.$$.fragment)
            },
            m(e, r) {
                ee(t, e, r), n = !0
            },
            p(e, n) {
                const r = {};
                64 & n && (r.errorMsg = e[6].errorMsg), t.$set(r)
            },
            i(e) {
                n || (J(t.$$.fragment, e), n = !0)
            },
            o(e) {
                K(t.$$.fragment, e), n = !1
            },
            d(e) {
                te(t, e)
            }
        }
    }

    function Xn(e) {
        let t, n, r, s, i, o, a, l;
        const c = [nr, tr],
            u = [];

        function d(e, t) {
            return e[5].hasFinished ? 0 : 1
        }
        r = d(e), s = u[r] = c[r](e);
        let f = null !== e[5].id && rr(e),
            h = null !== e[5].id && !e[5].hasFinished && sr(e);
        return {
            c() {
                t = w("div"), n = w("div"), s.c(), i = k(), f && f.c(), o = k(), h && h.c(), a = b(), S(n, "class", "max-w-screen-sm w-full mx-auto h-full flex flex-col justify-between overflow-auto"), S(t, "class", "w-full flex flex-col flex-grow relative")
            },
            m(e, s) {
                g(e, t, s), p(t, n), u[r].m(n, null), g(e, i, s), f && f.m(e, s), g(e, o, s), h && h.m(e, s), g(e, a, s), l = !0
            },
            p(e, t) {
                let i = r;
                r = d(e), r !== i && (Z(), K(u[i], 1, 1, (() => {
                    u[i] = null
                })), q(), s = u[r], s || (s = u[r] = c[r](e), s.c()), J(s, 1), s.m(n, null)), null !== e[5].id ? f ? (f.p(e, t), 32 & t && J(f, 1)) : (f = rr(e), f.c(), J(f, 1), f.m(o.parentNode, o)) : f && (Z(), K(f, 1, 1, (() => {
                    f = null
                })), q()), null === e[5].id || e[5].hasFinished ? h && (Z(), K(h, 1, 1, (() => {
                    h = null
                })), q()) : h ? (h.p(e, t), 32 & t && J(h, 1)) : (h = sr(e), h.c(), J(h, 1), h.m(a.parentNode, a))
            },
            i(e) {
                l || (J(s), J(f), J(h), l = !0)
            },
            o(e) {
                K(s), K(f), K(h), l = !1
            },
            d(e) {
                e && y(t), u[r].d(), e && y(i), f && f.d(e), e && y(o), h && h.d(e), e && y(a)
            }
        }
    }

    function er(t) {
        let n, r, s, i;
        return s = new qe({}), {
            c() {
                n = w("div"), r = w("div"), X(s.$$.fragment), S(r, "class", "max-w-screen-sm w-full mx-auto h-full flex flex-col justify-center overflow-auto"), S(n, "class", "w-full flex flex-col flex-grow relative")
            },
            m(e, t) {
                g(e, n, t), p(n, r), ee(s, r, null), i = !0
            },
            p: e,
            i(e) {
                i || (J(s.$$.fragment, e), i = !0)
            },
            o(e) {
                K(s.$$.fragment, e), i = !1
            },
            d(e) {
                e && y(n), te(s)
            }
        }
    }

    function tr(e) {
        let t, n;
        return t = new Re({}), {
            c() {
                X(t.$$.fragment)
            },
            m(e, r) {
                ee(t, e, r), n = !0
            },
            i(e) {
                n || (J(t.$$.fragment, e), n = !0)
            },
            o(e) {
                K(t.$$.fragment, e), n = !1
            },
            d(e) {
                te(t, e)
            }
        }
    }

    function nr(e) {
        let t, n;
        return t = new Mn({}), {
            c() {
                X(t.$$.fragment)
            },
            m(e, r) {
                ee(t, e, r), n = !0
            },
            i(e) {
                n || (J(t.$$.fragment, e), n = !0)
            },
            o(e) {
                K(t.$$.fragment, e), n = !1
            },
            d(e) {
                te(t, e)
            }
        }
    }

    function rr(e) {
        let t, n;
        return t = new xt({
            props: {}
        }), e[16](t), t.$on("startGame", e[9]), t.$on("modal", e[11]), {
            c() {
                X(t.$$.fragment)
            },
            m(e, r) {
                ee(t, e, r), n = !0
            },
            p(e, n) {
                t.$set({})
            },
            i(e) {
                n || (J(t.$$.fragment, e), n = !0)
            },
            o(e) {
                K(t.$$.fragment, e), n = !1
            },
            d(n) {
                e[16](null), te(t, n)
            }
        }
    }

    function sr(e) {
        let t, n;
        return t = new jt({
            props: {}
        }), e[17](t), t.$on("handleGuess", e[10]), {
            c() {
                X(t.$$.fragment)
            },
            m(e, r) {
                ee(t, e, r), n = !0
            },
            p(e, n) {
                t.$set({})
            },
            i(e) {
                n || (J(t.$$.fragment, e), n = !0)
            },
            o(e) {
                K(t.$$.fragment, e), n = !1
            },
            d(n) {
                e[17](null), te(t, n)
            }
        }
    }

    function ir(e) {
        let t, n, s, i, o, a, l, c, u, d, f, h;
        W(e[13]), t = new ge({
            props: {
                properties: [ie.googleAnalytics]
            }
        });
        let m = e[4].isActive && Un(e);
        a = new $e({}), a.$on("modal", e[11]);
        const v = [er, Xn, Qn],
            x = [];

        function _(e, t) {
            return e[2] ? 0 : e[6].hasError ? 2 : 1
        }
        return c = _(e), u = x[c] = v[c](e), {
            c() {
                X(t.$$.fragment), n = k(), s = w("main"), m && m.c(), i = k(), o = w("div"), X(a.$$.fragment), l = k(), u.c(), S(o, "class", "flex-none"), S(s, "class", "bg-custom-bg text-custom-fg overflow-x-hidden flex flex-col"), Y(s, "height", e[3] + "px")
            },
            m(r, u) {
                ee(t, r, u), g(r, n, u), g(r, s, u), m && m.m(s, null), p(s, i), p(s, o), ee(a, o, null), p(s, l), x[c].m(s, null), d = !0, f || (h = [$(Gn, "resize", e[12]), $(Gn, "resize", e[13])], f = !0)
            },
            p(e, [t]) {
                e[4].isActive ? m ? (m.p(e, t), 16 & t && J(m, 1)) : (m = Un(e), m.c(), J(m, 1), m.m(s, i)) : m && (Z(), K(m, 1, 1, (() => {
                    m = null
                })), q());
                let n = c;
                c = _(e), c === n ? x[c].p(e, t) : (Z(), K(x[n], 1, 1, (() => {
                    x[n] = null
                })), q(), u = x[c], u ? u.p(e, t) : (u = x[c] = v[c](e), u.c()), J(u, 1), u.m(s, null)), (!d || 8 & t) && Y(s, "height", e[3] + "px")
            },
            i(e) {
                d || (J(t.$$.fragment, e), J(m), J(a.$$.fragment, e), J(u), d = !0)
            },
            o(e) {
                K(t.$$.fragment, e), K(m), K(a.$$.fragment, e), K(u), d = !1
            },
            d(e) {
                te(t, e), e && y(n), e && y(s), m && m.d(), te(a), x[c].d(), f = !1, r(h)
            }
        }
    }

    function or(e, t, n) {
        let r, s, i, o, a;
        l(e, Se, (e => n(5, r = e))), l(e, De, (e => n(20, s = e))), l(e, Me, (e => n(6, i = e)));
        let c = !1;
        var u, d;

        function f(e) {
            var t = Fn(e, "YYYY-MM-DD");
            return Fn().diff(t, "days")
        }
        void 0 !== document.hidden ? (u = "hidden", d = "visibilitychange") : void 0 !== document.msHidden ? (u = "msHidden", d = "msvisibilitychange") : void 0 !== document.webkitHidden && (u = "webkitHidden", d = "webkitvisibilitychange"), void 0 === document.addEventListener || void 0 === u || document.addEventListener(d, (() => {
            document[u] || i.id === f(ie.startDate) || location.reload(!0)
        }), !1);
        let h = 0;

        function p() {
            n(3, h = window.innerHeight)
        }

        function g() {
            n(2, c = !0), fetch(ie.answers).then(Ve).then((e => e.json())).then((e => {
                ! function(e) {
                    // här ska vi välja slumpmässigt låt från e

                    e = e[Math.floor(Math.random() * e.length)]

                    const t = e[0];
                    if (n(2, c = !1), t) {
                        m(Me, i.hasError = !1, i), m(Me, i.url = t.url, i), m(Me, i.artist = t.artist, i), m(Me, i.title = t.title, i), m(Me, i.year = t.year, i), m(Me, i.correctAnswer = i.artist + ie.separator + i.title, i);
                        null !== localStorage.getItem(ie.localStorageName) && m(De, s = JSON.parse(["Hey guys, it's me. Quandale Dingle here, today; I am locked up in a prison chamber, no noes, however you can bail me out by giving your credit card number, the expiration date and the three numbers on the back. Please save me, from Quandale Dingle."]), s);
                        const e = s.find((e => e.id === i.id));
                        void 0 === e ? (m(Se, r = {
                            id: i.id,
                            guessList: [],
                            hasFinished: !1,
                            hasStarted: !1
                        }, r), m(De, s = [...s, r], s)) : m(Se, r = e, r)
                    } else m(Me, i.hasError = !0, i), m(Me, i.errorMsg = "Hmm. We can't find today's track. Are you time travelling?", i)
                }(e)
            })).catch((function(e) {
                n(2, c = !1), m(Me, i.hasError = !0, i), m(Me, i.errorMsg = "Hmm... There was a problem getting today's track...", i)
            }))
        }
        L((() => {
            p(), m(Me, i.id = f(ie.startDate), i), g()
        }));
        let y = {
            isActive: !1,
            hasFrame: !0,
            title: "",
            name: ""
        };

        function v(e, t, r) {
            n(4, y.isActive = !0, y), n(4, y.name = e, y), n(4, y.title = t, y), n(4, y.hasFrame = r, y)
        }
        null == true && (v("help", "how to play"), localStorage.setItem("firstTime", "true"));
        return [o, a, c, h, y, r, i, p, g, function() {
            if (!r.hasStarted) {
                ye("startGame#" + r.id, {
                    name: "startGame"
                }), ye("startGame", {
                    name: "startGame"
                }), m(Se, r.hasStarted = !0, r);
                let e = s.findIndex((e => e.id === i.id));
                m(De, s[e].hasStarted = !0, s), a.loadSelectOptions()
            }
        }, function(e) {
            let t = e.detail.guess,
                n = e.detail.isSkipped,
                a = !1,
                l = !1;
            if (n) n ? (ye("skippedGuess", {
                name: "skippedGuess"
            }), ye("skippedGuess#" + r.id, {
                name: "skippedGuess"
            })) : a || (ye("incorrectGuess", {
                name: "incorrectGuess"
            }), ye("incorrectGuess#" + r.id, {
                name: "incorrectGuess"
            }));
            else {
                let e = t.split(ie.separator)[0];
                t.split(ie.separator)[1], t == i.correctAnswer ? (a = !0, ye("correctGuess", {
                    name: "correctGuess"
                }), ye("correctGuess#" + r.id, {
                    name: "correctGuess"
                })) : e == i.artist && (l = !0, ye("correctArtist", {
                    name: "correctArtist"
                }), ye("correctArtist#" + r.id, {
                    name: "correctArtist"
                }))
            }
            m(Se, r.guessList = r.guessList.concat({
                answer: e.detail.guess,
                isCorrect: a,
                isSkipped: n,
                isArtist: l,
                playCount: i.playCount
            }), r);
            let c = s.findIndex((e => e.id === i.id));
            if (m(De, s[c].guessList = r.guessList, s), m(Me, i.playCount = 0, i), r.guessList.length >= ie.attemptInterval.length || 1 == a) {
                m(Me, i.isActive = !1, i), m(Se, r.hasFinished = !0, r), m(Se, r.gotCorrect = a, r), m(Se, r.score = r.guessList.length, r), ye("endGame", {
                    name: "endGame"
                }), ye("endGame#" + r.id, {
                    name: "endGame"
                }), a ? (ye("wonGame", {
                    name: "won"
                }), ye("wonGame#" + r.id, {
                    name: "won"
                })) : (ye("lostGame", {
                    name: "lost"
                }), ye("lostGame#" + r.id, {
                    name: "lost"
                }));
                let e = "#" + r.id;
                r.gotCorrect ? e += "|won" : e += "|lost", e += "|" + r.score + "|";
                for (let t = 0; t < ie.attemptInterval.length; t++) r.score > t ? (1 == r.guessList[t].isCorrect ? e += "o" : 1 == r.guessList[t].isSkipped ? e += "_" : 1 == r.guessList[t].isArtist ? e += "-" : e += "x", e += r.guessList[t].playCount + "/") : e += " /";
                ye(e, {
                    name: e
                }), o.scPlay()
            }
        }, function(e) {
            v(e.detail.name, e.detail.title, e.detail.hasFrame)
        }, () => {}, function() {
            n(3, h = Gn.innerHeight)
        }, () => n(4, y.isActive = !1, y), () => n(4, y.isActive = !1, y), function(e) {
            A[e ? "unshift" : "push"]((() => {
                o = e, n(0, o)
            }))
        }, function(e) {
            A[e ? "unshift" : "push"]((() => {
                a = e, n(1, a)
            }))
        }]
    }
    return new class extends se {
        constructor(e) {
            super(), re(this, e, or, ir, i, {})
        }
    }({
        target: document.body,
        props: {}
    })
}();