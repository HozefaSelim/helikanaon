/*!
 * Webflow: Front-end site library
 * @license MIT
 * Inline scripts may access the api using an async handler:
 *   var Webflow = Webflow || [];
 *   Webflow.push(readyFunction);
 */
! function(t) {
    var e = {};

    function n(r) {
        if (e[r]) return e[r].exports;
        var i = e[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return t[r].call(i.exports, i, i.exports, n), i.l = !0, i.exports
    }
    n.m = t, n.c = e, n.d = function(t, e, r) {
        n.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: r
        })
    }, n.r = function(t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, n.t = function(t, e) {
        if (1 & e && (t = n(t)), 8 & e) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var r = Object.create(null);
        if (n.r(r), Object.defineProperty(r, "default", {
                enumerable: !0,
                value: t
            }), 2 & e && "string" != typeof t)
            for (var i in t) n.d(r, i, function(e) {
                return t[e]
            }.bind(null, i));
        return r
    }, n.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t.default
        } : function() {
            return t
        };
        return n.d(e, "a", e), e
    }, n.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, n.p = "", n(n.s = 130)
}([function(t, e, n) {
    (function(e) {
        var n = function(t) {
            return t && t.Math == Math && t
        };
        t.exports = n("object" == typeof globalThis && globalThis) || n("object" == typeof window && window) || n("object" == typeof self && self) || n("object" == typeof e && e) || function() {
            return this
        }() || Function("return this")()
    }).call(this, n(25))
}, function(t, e) {
    t.exports = function(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
}, function(t, e) {
    var n = Array.isArray;
    t.exports = n
}, function(t, e, n) {
    "use strict";
    var r = n(17);
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var i = {
        IX2EngineActionTypes: !0,
        IX2EngineConstants: !0
    };
    e.IX2EngineConstants = e.IX2EngineActionTypes = void 0;
    var o = n(188);
    Object.keys(o).forEach(function(t) {
        "default" !== t && "__esModule" !== t && (Object.prototype.hasOwnProperty.call(i, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: function() {
                return o[t]
            }
        }))
    });
    var a = n(94);
    Object.keys(a).forEach(function(t) {
        "default" !== t && "__esModule" !== t && (Object.prototype.hasOwnProperty.call(i, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: function() {
                return a[t]
            }
        }))
    });
    var u = n(189);
    Object.keys(u).forEach(function(t) {
        "default" !== t && "__esModule" !== t && (Object.prototype.hasOwnProperty.call(i, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: function() {
                return u[t]
            }
        }))
    });
    var c = n(190);
    Object.keys(c).forEach(function(t) {
        "default" !== t && "__esModule" !== t && (Object.prototype.hasOwnProperty.call(i, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: function() {
                return c[t]
            }
        }))
    });
    var s = r(n(191));
    e.IX2EngineActionTypes = s;
    var f = r(n(192));
    e.IX2EngineConstants = f
}, function(t, e, n) {
    "use strict";
    var r = {},
        i = {},
        o = [],
        a = window.Webflow || [],
        u = window.jQuery,
        c = u(window),
        s = u(document),
        f = u.isFunction,
        l = r._ = n(132),
        d = r.tram = n(69) && u.tram,
        p = !1,
        v = !1;

    function h(t) {
        r.env() && (f(t.design) && c.on("__wf_design", t.design), f(t.preview) && c.on("__wf_preview", t.preview)), f(t.destroy) && c.on("__wf_destroy", t.destroy), t.ready && f(t.ready) && function(t) {
            if (p) return void t.ready();
            if (l.contains(o, t.ready)) return;
            o.push(t.ready)
        }(t)
    }

    function E(t) {
        f(t.design) && c.off("__wf_design", t.design), f(t.preview) && c.off("__wf_preview", t.preview), f(t.destroy) && c.off("__wf_destroy", t.destroy), t.ready && f(t.ready) && function(t) {
            o = l.filter(o, function(e) {
                return e !== t.ready
            })
        }(t)
    }
    d.config.hideBackface = !1, d.config.keepInherited = !0, r.define = function(t, e, n) {
        i[t] && E(i[t]);
        var r = i[t] = e(u, l, n) || {};
        return h(r), r
    }, r.require = function(t) {
        return i[t]
    }, r.push = function(t) {
        p ? f(t) && t() : a.push(t)
    }, r.env = function(t) {
        var e = window.__wf_design,
            n = void 0 !== e;
        return t ? "design" === t ? n && e : "preview" === t ? n && !e : "slug" === t ? n && window.__wf_slug : "editor" === t ? window.WebflowEditor : "test" === t ? window.__wf_test : "frame" === t ? window !== window.top : void 0 : n
    };
    var g, _ = navigator.userAgent.toLowerCase(),
        y = r.env.touch = "ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch,
        m = r.env.chrome = /chrome/.test(_) && /Google/.test(navigator.vendor) && parseInt(_.match(/chrome\/(\d+)\./)[1], 10),
        I = r.env.ios = /(ipod|iphone|ipad)/.test(_);
    r.env.safari = /safari/.test(_) && !m && !I, y && s.on("touchstart mousedown", function(t) {
        g = t.target
    }), r.validClick = y ? function(t) {
        return t === g || u.contains(t, g)
    } : function() {
        return !0
    };
    var T, O = "resize.webflow orientationchange.webflow load.webflow";

    function b(t, e) {
        var n = [],
            r = {};
        return r.up = l.throttle(function(t) {
            l.each(n, function(e) {
                e(t)
            })
        }), t && e && t.on(e, r.up), r.on = function(t) {
            "function" == typeof t && (l.contains(n, t) || n.push(t))
        }, r.off = function(t) {
            n = arguments.length ? l.filter(n, function(e) {
                return e !== t
            }) : []
        }, r
    }

    function A(t) {
        f(t) && t()
    }

    function w() {
        T && (T.reject(), c.off("load", T.resolve)), T = new u.Deferred, c.on("load", T.resolve)
    }
    r.resize = b(c, O), r.scroll = b(c, "scroll.webflow resize.webflow orientationchange.webflow load.webflow"), r.redraw = b(), r.location = function(t) {
        window.location = t
    }, r.env() && (r.location = function() {}), r.ready = function() {
        p = !0, v ? (v = !1, l.each(i, h)) : l.each(o, A), l.each(a, A), r.resize.up()
    }, r.load = function(t) {
        T.then(t)
    }, r.destroy = function(t) {
        t = t || {}, v = !0, c.triggerHandler("__wf_destroy"), null != t.domready && (p = t.domready), l.each(i, E), r.resize.off(), r.scroll.off(), r.redraw.off(), o = [], a = [], "pending" === T.state() && w()
    }, u(r.ready), w(), t.exports = window.Webflow = r
}, function(t, e) {
    var n = Function.prototype,
        r = n.bind,
        i = n.call,
        o = r && r.bind(i);
    t.exports = r ? function(t) {
        return t && o(i, t)
    } : function(t) {
        return t && function() {
            return i.apply(t, arguments)
        }
    }
}, function(t, e, n) {
    var r = n(99),
        i = "object" == typeof self && self && self.Object === Object && self,
        o = r || i || Function("return this")();
    t.exports = o
}, function(t, e) {
    t.exports = function(t) {
        return "function" == typeof t
    }
}, function(t, e) {
    t.exports = function(t) {
        var e = typeof t;
        return null != t && ("object" == e || "function" == e)
    }
}, function(t, e, n) {
    var r = n(5),
        i = n(156),
        o = r({}.hasOwnProperty);
    t.exports = Object.hasOwn || function(t, e) {
        return o(i(t), e)
    }
}, function(t, e, n) {
    var r = n(195),
        i = n(249),
        o = n(63),
        a = n(2),
        u = n(258);
    t.exports = function(t) {
        return "function" == typeof t ? t : null == t ? o : "object" == typeof t ? a(t) ? i(t[0], t[1]) : r(t) : u(t)
    }
}, function(t, e, n) {
    var r = n(207),
        i = n(212);
    t.exports = function(t, e) {
        var n = i(t, e);
        return r(n) ? n : void 0
    }
}, function(t, e) {
    t.exports = function(t) {
        return null != t && "object" == typeof t
    }
}, function(t, e, n) {
    var r = n(18);
    t.exports = !r(function() {
        return 7 != Object.defineProperty({}, 1, {
            get: function() {
                return 7
            }
        })[1]
    })
}, function(t, e, n) {
    "use strict";
    var r = n(17);
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.IX2VanillaUtils = e.IX2VanillaPlugins = e.IX2ElementsReducer = e.IX2EasingUtils = e.IX2Easings = e.IX2BrowserSupport = void 0;
    var i = r(n(48));
    e.IX2BrowserSupport = i;
    var o = r(n(116));
    e.IX2Easings = o;
    var a = r(n(118));
    e.IX2EasingUtils = a;
    var u = r(n(267));
    e.IX2ElementsReducer = u;
    var c = r(n(120));
    e.IX2VanillaPlugins = c;
    var s = r(n(269));
    e.IX2VanillaUtils = s
}, function(t, e, n) {
    var r = n(22),
        i = n(208),
        o = n(209),
        a = "[object Null]",
        u = "[object Undefined]",
        c = r ? r.toStringTag : void 0;
    t.exports = function(t) {
        return null == t ? void 0 === t ? u : a : c && c in Object(t) ? i(t) : o(t)
    }
}, function(t, e, n) {
    var r = n(98),
        i = n(56);
    t.exports = function(t) {
        return null != t && i(t.length) && !r(t)
    }
}, function(t, e) {
    t.exports = function(t) {
        if (t && t.__esModule) return t;
        var e = {};
        if (null != t)
            for (var n in t)
                if (Object.prototype.hasOwnProperty.call(t, n)) {
                    var r = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(t, n) : {};
                    r.get || r.set ? Object.defineProperty(e, n, r) : e[n] = t[n]
                }
        return e.default = t, e
    }
}, function(t, e) {
    t.exports = function(t) {
        try {
            return !!t()
        } catch (t) {
            return !0
        }
    }
}, function(t, e, n) {
    var r = n(7);
    t.exports = function(t) {
        return "object" == typeof t ? null !== t : r(t)
    }
}, function(t, e) {
    t.exports = function(t, e, n) {
        return e in t ? Object.defineProperty(t, e, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = n, t
    }
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    };
    e.clone = c, e.addLast = l, e.addFirst = d, e.removeLast = p, e.removeFirst = v, e.insert = h, e.removeAt = E, e.replaceAt = g, e.getIn = _, e.set = y, e.setIn = m, e.update = I, e.updateIn = T, e.merge = O, e.mergeDeep = b, e.mergeIn = A, e.omit = w, e.addDefaults = S;
    /*!
     * Timm
     *
     * Immutability helpers with fast reads and acceptable writes.
     *
     * @copyright Guillermo Grau Panea 2016
     * @license MIT
     */
    var i = "INVALID_ARGS";

    function o(t) {
        throw new Error(t)
    }

    function a(t) {
        var e = Object.keys(t);
        return Object.getOwnPropertySymbols ? e.concat(Object.getOwnPropertySymbols(t)) : e
    }
    var u = {}.hasOwnProperty;

    function c(t) {
        if (Array.isArray(t)) return t.slice();
        for (var e = a(t), n = {}, r = 0; r < e.length; r++) {
            var i = e[r];
            n[i] = t[i]
        }
        return n
    }

    function s(t, e, n) {
        var r = n;
        null == r && o(i);
        for (var u = !1, l = arguments.length, d = Array(l > 3 ? l - 3 : 0), p = 3; p < l; p++) d[p - 3] = arguments[p];
        for (var v = 0; v < d.length; v++) {
            var h = d[v];
            if (null != h) {
                var E = a(h);
                if (E.length)
                    for (var g = 0; g <= E.length; g++) {
                        var _ = E[g];
                        if (!t || void 0 === r[_]) {
                            var y = h[_];
                            e && f(r[_]) && f(y) && (y = s(t, e, r[_], y)), void 0 !== y && y !== r[_] && (u || (u = !0, r = c(r)), r[_] = y)
                        }
                    }
            }
        }
        return r
    }

    function f(t) {
        var e = void 0 === t ? "undefined" : r(t);
        return null != t && ("object" === e || "function" === e)
    }

    function l(t, e) {
        return Array.isArray(e) ? t.concat(e) : t.concat([e])
    }

    function d(t, e) {
        return Array.isArray(e) ? e.concat(t) : [e].concat(t)
    }

    function p(t) {
        return t.length ? t.slice(0, t.length - 1) : t
    }

    function v(t) {
        return t.length ? t.slice(1) : t
    }

    function h(t, e, n) {
        return t.slice(0, e).concat(Array.isArray(n) ? n : [n]).concat(t.slice(e))
    }

    function E(t, e) {
        return e >= t.length || e < 0 ? t : t.slice(0, e).concat(t.slice(e + 1))
    }

    function g(t, e, n) {
        if (t[e] === n) return t;
        for (var r = t.length, i = Array(r), o = 0; o < r; o++) i[o] = t[o];
        return i[e] = n, i
    }

    function _(t, e) {
        if (!Array.isArray(e) && o(i), null != t) {
            for (var n = t, r = 0; r < e.length; r++) {
                var a = e[r];
                if (void 0 === (n = null != n ? n[a] : void 0)) return n
            }
            return n
        }
    }

    function y(t, e, n) {
        var r = null == t ? "number" == typeof e ? [] : {} : t;
        if (r[e] === n) return r;
        var i = c(r);
        return i[e] = n, i
    }

    function m(t, e, n) {
        return e.length ? function t(e, n, r, i) {
            var o = void 0,
                a = n[i];
            o = i === n.length - 1 ? r : t(f(e) && f(e[a]) ? e[a] : "number" == typeof n[i + 1] ? [] : {}, n, r, i + 1);
            return y(e, a, o)
        }(t, e, n, 0) : n
    }

    function I(t, e, n) {
        return y(t, e, n(null == t ? void 0 : t[e]))
    }

    function T(t, e, n) {
        return m(t, e, n(_(t, e)))
    }

    function O(t, e, n, r, i, o) {
        for (var a = arguments.length, u = Array(a > 6 ? a - 6 : 0), c = 6; c < a; c++) u[c - 6] = arguments[c];
        return u.length ? s.call.apply(s, [null, !1, !1, t, e, n, r, i, o].concat(u)) : s(!1, !1, t, e, n, r, i, o)
    }

    function b(t, e, n, r, i, o) {
        for (var a = arguments.length, u = Array(a > 6 ? a - 6 : 0), c = 6; c < a; c++) u[c - 6] = arguments[c];
        return u.length ? s.call.apply(s, [null, !1, !0, t, e, n, r, i, o].concat(u)) : s(!1, !0, t, e, n, r, i, o)
    }

    function A(t, e, n, r, i, o, a) {
        var u = _(t, e);
        null == u && (u = {});
        for (var c = arguments.length, f = Array(c > 7 ? c - 7 : 0), l = 7; l < c; l++) f[l - 7] = arguments[l];
        return m(t, e, f.length ? s.call.apply(s, [null, !1, !1, u, n, r, i, o, a].concat(f)) : s(!1, !1, u, n, r, i, o, a))
    }

    function w(t, e) {
        for (var n = Array.isArray(e) ? e : [e], r = !1, i = 0; i < n.length; i++)
            if (u.call(t, n[i])) {
                r = !0;
                break
            }
        if (!r) return t;
        for (var o = {}, c = a(t), s = 0; s < c.length; s++) {
            var f = c[s];
            n.indexOf(f) >= 0 || (o[f] = t[f])
        }
        return o
    }

    function S(t, e, n, r, i, o) {
        for (var a = arguments.length, u = Array(a > 6 ? a - 6 : 0), c = 6; c < a; c++) u[c - 6] = arguments[c];
        return u.length ? s.call.apply(s, [null, !0, !1, t, e, n, r, i, o].concat(u)) : s(!0, !1, t, e, n, r, i, o)
    }
    var R = {
        clone: c,
        addLast: l,
        addFirst: d,
        removeLast: p,
        removeFirst: v,
        insert: h,
        removeAt: E,
        replaceAt: g,
        getIn: _,
        set: y,
        setIn: m,
        update: I,
        updateIn: T,
        merge: O,
        mergeDeep: b,
        mergeIn: A,
        omit: w,
        addDefaults: S
    };
    e.default = R
}, function(t, e, n) {
    var r = n(6).Symbol;
    t.exports = r
}, function(t, e, n) {
    var r = n(38),
        i = 1 / 0;
    t.exports = function(t) {
        if ("string" == typeof t || r(t)) return t;
        var e = t + "";
        return "0" == e && 1 / t == -i ? "-0" : e
    }
}, function(t, e) {
    function n(t) {
        return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function r(e) {
        return "function" == typeof Symbol && "symbol" === n(Symbol.iterator) ? t.exports = r = function(t) {
            return n(t)
        } : t.exports = r = function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : n(t)
        }, r(e)
    }
    t.exports = r
}, function(t, e) {
    var n;
    n = function() {
        return this
    }();
    try {
        n = n || new Function("return this")()
    } catch (t) {
        "object" == typeof window && (n = window)
    }
    t.exports = n
}, function(t, e, n) {
    var r = n(145),
        i = n(72);
    t.exports = function(t) {
        return r(i(t))
    }
}, function(t, e, n) {
    var r = n(0),
        i = n(7);
    t.exports = function(t, e) {
        return arguments.length < 2 ? (n = r[t], i(n) ? n : void 0) : r[t] && r[t][e];
        var n
    }
}, function(t, e, n) {
    var r = n(0),
        i = n(13),
        o = n(80),
        a = n(29),
        u = n(73),
        c = r.TypeError,
        s = Object.defineProperty;
    e.f = i ? s : function(t, e, n) {
        if (a(t), e = u(e), a(n), o) try {
            return s(t, e, n)
        } catch (t) {}
        if ("get" in n || "set" in n) throw c("Accessors not supported");
        return "value" in n && (t[e] = n.value), t
    }
}, function(t, e, n) {
    var r = n(0),
        i = n(19),
        o = r.String,
        a = r.TypeError;
    t.exports = function(t) {
        if (i(t)) return t;
        throw a(o(t) + " is not an object")
    }
}, function(t, e) {
    function n() {
        return t.exports = n = Object.assign || function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
            }
            return t
        }, n.apply(this, arguments)
    }
    t.exports = n
}, function(t, e, n) {
    var r = n(197),
        i = n(198),
        o = n(199),
        a = n(200),
        u = n(201);

    function c(t) {
        var e = -1,
            n = null == t ? 0 : t.length;
        for (this.clear(); ++e < n;) {
            var r = t[e];
            this.set(r[0], r[1])
        }
    }
    c.prototype.clear = r, c.prototype.delete = i, c.prototype.get = o, c.prototype.has = a, c.prototype.set = u, t.exports = c
}, function(t, e, n) {
    var r = n(49);
    t.exports = function(t, e) {
        for (var n = t.length; n--;)
            if (r(t[n][0], e)) return n;
        return -1
    }
}, function(t, e, n) {
    var r = n(11)(Object, "create");
    t.exports = r
}, function(t, e, n) {
    var r = n(221);
    t.exports = function(t, e) {
        var n = t.__data__;
        return r(e) ? n["string" == typeof e ? "string" : "hash"] : n.map
    }
}, function(t, e, n) {
    var r = n(106),
        i = n(57),
        o = n(16);
    t.exports = function(t) {
        return o(t) ? r(t) : i(t)
    }
}, function(t, e, n) {
    var r = n(239),
        i = n(12),
        o = Object.prototype,
        a = o.hasOwnProperty,
        u = o.propertyIsEnumerable,
        c = r(function() {
            return arguments
        }()) ? r : function(t) {
            return i(t) && a.call(t, "callee") && !u.call(t, "callee")
        };
    t.exports = c
}, function(t, e, n) {
    var r = n(2),
        i = n(62),
        o = n(250),
        a = n(253);
    t.exports = function(t, e) {
        return r(t) ? t : i(t, e) ? [t] : o(a(t))
    }
}, function(t, e, n) {
    var r = n(15),
        i = n(12),
        o = "[object Symbol]";
    t.exports = function(t) {
        return "symbol" == typeof t || i(t) && r(t) == o
    }
}, function(t, e, n) {
    "use strict";
    var r = n(136);

    function i(t, e) {
        var n = document.createEvent("CustomEvent");
        n.initCustomEvent(e, !0, !0, null), t.dispatchEvent(n)
    }
    var o = window.jQuery,
        a = {},
        u = {
            reset: function(t, e) {
                r.triggers.reset(t, e)
            },
            intro: function(t, e) {
                r.triggers.intro(t, e), i(e, "COMPONENT_ACTIVE")
            },
            outro: function(t, e) {
                r.triggers.outro(t, e), i(e, "COMPONENT_INACTIVE")
            }
        };
    a.triggers = {}, a.types = {
        INTRO: "w-ix-intro.w-ix",
        OUTRO: "w-ix-outro.w-ix"
    }, o.extend(a.triggers, u), t.exports = a
}, function(t, e) {
    var n = Function.prototype.call;
    t.exports = n.bind ? n.bind(n) : function() {
        return n.apply(n, arguments)
    }
}, function(t, e, n) {
    var r = n(0),
        i = n(42),
        o = r["__core-js_shared__"] || i("__core-js_shared__", {});
    t.exports = o
}, function(t, e, n) {
    var r = n(0),
        i = Object.defineProperty;
    t.exports = function(t, e) {
        try {
            i(r, t, {
                value: e,
                configurable: !0,
                writable: !0
            })
        } catch (n) {
            r[t] = e
        }
        return e
    }
}, function(t, e, n) {
    var r = n(13),
        i = n(28),
        o = n(71);
    t.exports = r ? function(t, e, n) {
        return i.f(t, e, o(1, n))
    } : function(t, e, n) {
        return t[e] = n, t
    }
}, function(t, e) {
    t.exports = {}
}, function(t, e) {
    t.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"]
}, function(t, e, n) {
    "use strict";
    n.r(e), n.d(e, "ActionTypes", function() {
        return o
    }), n.d(e, "default", function() {
        return a
    });
    var r = n(88),
        i = n(183),
        o = {
            INIT: "@@redux/INIT"
        };

    function a(t, e, n) {
        var u;
        if ("function" == typeof e && void 0 === n && (n = e, e = void 0), void 0 !== n) {
            if ("function" != typeof n) throw new Error("Expected the enhancer to be a function.");
            return n(a)(t, e)
        }
        if ("function" != typeof t) throw new Error("Expected the reducer to be a function.");
        var c = t,
            s = e,
            f = [],
            l = f,
            d = !1;

        function p() {
            l === f && (l = f.slice())
        }

        function v() {
            return s
        }

        function h(t) {
            if ("function" != typeof t) throw new Error("Expected listener to be a function.");
            var e = !0;
            return p(), l.push(t),
                function() {
                    if (e) {
                        e = !1, p();
                        var n = l.indexOf(t);
                        l.splice(n, 1)
                    }
                }
        }

        function E(t) {
            if (!Object(r.default)(t)) throw new Error("Actions must be plain objects. Use custom middleware for async actions.");
            if (void 0 === t.type) throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');
            if (d) throw new Error("Reducers may not dispatch actions.");
            try {
                d = !0, s = c(s, t)
            } finally {
                d = !1
            }
            for (var e = f = l, n = 0; n < e.length; n++) e[n]();
            return t
        }
        return E({
            type: o.INIT
        }), (u = {
            dispatch: E,
            subscribe: h,
            getState: v,
            replaceReducer: function(t) {
                if ("function" != typeof t) throw new Error("Expected the nextReducer to be a function.");
                c = t, E({
                    type: o.INIT
                })
            }
        })[i.default] = function() {
            var t, e = h;
            return (t = {
                subscribe: function(t) {
                    if ("object" != typeof t) throw new TypeError("Expected the observer to be an object.");

                    function n() {
                        t.next && t.next(v())
                    }
                    return n(), {
                        unsubscribe: e(n)
                    }
                }
            })[i.default] = function() {
                return this
            }, t
        }, u
    }
}, function(t, e, n) {
    "use strict";

    function r() {
        for (var t = arguments.length, e = Array(t), n = 0; n < t; n++) e[n] = arguments[n];
        if (0 === e.length) return function(t) {
            return t
        };
        if (1 === e.length) return e[0];
        var r = e[e.length - 1],
            i = e.slice(0, -1);
        return function() {
            return i.reduceRight(function(t, e) {
                return e(t)
            }, r.apply(void 0, arguments))
        }
    }
    n.r(e), n.d(e, "default", function() {
        return r
    })
}, function(t, e, n) {
    "use strict";
    var r = n(1);
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.TRANSFORM_STYLE_PREFIXED = e.TRANSFORM_PREFIXED = e.FLEX_PREFIXED = e.ELEMENT_MATCHES = e.withBrowser = e.IS_BROWSER_ENV = void 0;
    var i = r(n(95)),
        o = "undefined" != typeof window;
    e.IS_BROWSER_ENV = o;
    var a = function(t, e) {
        return o ? t() : e
    };
    e.withBrowser = a;
    var u = a(function() {
        return (0, i.default)(["matches", "matchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector", "webkitMatchesSelector"], function(t) {
            return t in Element.prototype
        })
    });
    e.ELEMENT_MATCHES = u;
    var c = a(function() {
        var t = document.createElement("i"),
            e = ["flex", "-webkit-flex", "-ms-flexbox", "-moz-box", "-webkit-box"];
        try {
            for (var n = e.length, r = 0; r < n; r++) {
                var i = e[r];
                if (t.style.display = i, t.style.display === i) return i
            }
            return ""
        } catch (t) {
            return ""
        }
    }, "flex");
    e.FLEX_PREFIXED = c;
    var s = a(function() {
        var t = document.createElement("i");
        if (null == t.style.transform)
            for (var e = ["Webkit", "Moz", "ms"], n = e.length, r = 0; r < n; r++) {
                var i = e[r] + "Transform";
                if (void 0 !== t.style[i]) return i
            }
        return "transform"
    }, "transform");
    e.TRANSFORM_PREFIXED = s;
    var f = s.split("transform")[0],
        l = f ? f + "TransformStyle" : "transformStyle";
    e.TRANSFORM_STYLE_PREFIXED = l
}, function(t, e) {
    t.exports = function(t, e) {
        return t === e || t != t && e != e
    }
}, function(t, e, n) {
    var r = n(11)(n(6), "Map");
    t.exports = r
}, function(t, e, n) {
    var r = n(213),
        i = n(220),
        o = n(222),
        a = n(223),
        u = n(224);

    function c(t) {
        var e = -1,
            n = null == t ? 0 : t.length;
        for (this.clear(); ++e < n;) {
            var r = t[e];
            this.set(r[0], r[1])
        }
    }
    c.prototype.clear = r, c.prototype.delete = i, c.prototype.get = o, c.prototype.has = a, c.prototype.set = u, t.exports = c
}, function(t, e) {
    t.exports = function(t, e) {
        for (var n = -1, r = e.length, i = t.length; ++n < r;) t[i + n] = e[n];
        return t
    }
}, function(t, e, n) {
    (function(t) {
        var r = n(6),
            i = n(240),
            o = e && !e.nodeType && e,
            a = o && "object" == typeof t && t && !t.nodeType && t,
            u = a && a.exports === o ? r.Buffer : void 0,
            c = (u ? u.isBuffer : void 0) || i;
        t.exports = c
    }).call(this, n(107)(t))
}, function(t, e) {
    var n = 9007199254740991,
        r = /^(?:0|[1-9]\d*)$/;
    t.exports = function(t, e) {
        var i = typeof t;
        return !!(e = null == e ? n : e) && ("number" == i || "symbol" != i && r.test(t)) && t > -1 && t % 1 == 0 && t < e
    }
}, function(t, e, n) {
    var r = n(241),
        i = n(242),
        o = n(243),
        a = o && o.isTypedArray,
        u = a ? i(a) : r;
    t.exports = u
}, function(t, e) {
    var n = 9007199254740991;
    t.exports = function(t) {
        return "number" == typeof t && t > -1 && t % 1 == 0 && t <= n
    }
}, function(t, e, n) {
    var r = n(58),
        i = n(244),
        o = Object.prototype.hasOwnProperty;
    t.exports = function(t) {
        if (!r(t)) return i(t);
        var e = [];
        for (var n in Object(t)) o.call(t, n) && "constructor" != n && e.push(n);
        return e
    }
}, function(t, e) {
    var n = Object.prototype;
    t.exports = function(t) {
        var e = t && t.constructor;
        return t === ("function" == typeof e && e.prototype || n)
    }
}, function(t, e, n) {
    var r = n(245),
        i = n(50),
        o = n(246),
        a = n(247),
        u = n(109),
        c = n(15),
        s = n(100),
        f = s(r),
        l = s(i),
        d = s(o),
        p = s(a),
        v = s(u),
        h = c;
    (r && "[object DataView]" != h(new r(new ArrayBuffer(1))) || i && "[object Map]" != h(new i) || o && "[object Promise]" != h(o.resolve()) || a && "[object Set]" != h(new a) || u && "[object WeakMap]" != h(new u)) && (h = function(t) {
        var e = c(t),
            n = "[object Object]" == e ? t.constructor : void 0,
            r = n ? s(n) : "";
        if (r) switch (r) {
            case f:
                return "[object DataView]";
            case l:
                return "[object Map]";
            case d:
                return "[object Promise]";
            case p:
                return "[object Set]";
            case v:
                return "[object WeakMap]"
        }
        return e
    }), t.exports = h
}, function(t, e, n) {
    var r = n(61);
    t.exports = function(t, e, n) {
        var i = null == t ? void 0 : r(t, e);
        return void 0 === i ? n : i
    }
}, function(t, e, n) {
    var r = n(37),
        i = n(23);
    t.exports = function(t, e) {
        for (var n = 0, o = (e = r(e, t)).length; null != t && n < o;) t = t[i(e[n++])];
        return n && n == o ? t : void 0
    }
}, function(t, e, n) {
    var r = n(2),
        i = n(38),
        o = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
        a = /^\w*$/;
    t.exports = function(t, e) {
        if (r(t)) return !1;
        var n = typeof t;
        return !("number" != n && "symbol" != n && "boolean" != n && null != t && !i(t)) || a.test(t) || !o.test(t) || null != e && t in Object(e)
    }
}, function(t, e) {
    t.exports = function(t) {
        return t
    }
}, function(t, e, n) {
    var r = n(262),
        i = n(8),
        o = n(38),
        a = NaN,
        u = /^[-+]0x[0-9a-f]+$/i,
        c = /^0b[01]+$/i,
        s = /^0o[0-7]+$/i,
        f = parseInt;
    t.exports = function(t) {
        if ("number" == typeof t) return t;
        if (o(t)) return a;
        if (i(t)) {
            var e = "function" == typeof t.valueOf ? t.valueOf() : t;
            t = i(e) ? e + "" : e
        }
        if ("string" != typeof t) return 0 === t ? t : +t;
        t = r(t);
        var n = c.test(t);
        return n || s.test(t) ? f(t.slice(2), n ? 2 : 8) : u.test(t) ? a : +t
    }
}, function(t, e, n) {
    "use strict";
    var r = n(1);
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.mediaQueriesDefined = e.viewportWidthChanged = e.actionListPlaybackChanged = e.elementStateChanged = e.instanceRemoved = e.instanceStarted = e.instanceAdded = e.parameterChanged = e.animationFrameChanged = e.eventStateChanged = e.testFrameRendered = e.eventListenerAdded = e.clearRequested = e.stopRequested = e.playbackRequested = e.previewRequested = e.sessionStopped = e.sessionStarted = e.sessionInitialized = e.rawDataImported = void 0;
    var i = r(n(30)),
        o = n(3),
        a = n(14),
        u = o.IX2EngineActionTypes,
        c = u.IX2_RAW_DATA_IMPORTED,
        s = u.IX2_SESSION_INITIALIZED,
        f = u.IX2_SESSION_STARTED,
        l = u.IX2_SESSION_STOPPED,
        d = u.IX2_PREVIEW_REQUESTED,
        p = u.IX2_PLAYBACK_REQUESTED,
        v = u.IX2_STOP_REQUESTED,
        h = u.IX2_CLEAR_REQUESTED,
        E = u.IX2_EVENT_LISTENER_ADDED,
        g = u.IX2_TEST_FRAME_RENDERED,
        _ = u.IX2_EVENT_STATE_CHANGED,
        y = u.IX2_ANIMATION_FRAME_CHANGED,
        m = u.IX2_PARAMETER_CHANGED,
        I = u.IX2_INSTANCE_ADDED,
        T = u.IX2_INSTANCE_STARTED,
        O = u.IX2_INSTANCE_REMOVED,
        b = u.IX2_ELEMENT_STATE_CHANGED,
        A = u.IX2_ACTION_LIST_PLAYBACK_CHANGED,
        w = u.IX2_VIEWPORT_WIDTH_CHANGED,
        S = u.IX2_MEDIA_QUERIES_DEFINED,
        R = a.IX2VanillaUtils.reifyState;
    e.rawDataImported = function(t) {
        return {
            type: c,
            payload: (0, i.default)({}, R(t))
        }
    };
    e.sessionInitialized = function(t) {
        var e = t.hasBoundaryNodes,
            n = t.reducedMotion;
        return {
            type: s,
            payload: {
                hasBoundaryNodes: e,
                reducedMotion: n
            }
        }
    };
    e.sessionStarted = function() {
        return {
            type: f
        }
    };
    e.sessionStopped = function() {
        return {
            type: l
        }
    };
    e.previewRequested = function(t) {
        var e = t.rawData,
            n = t.defer;
        return {
            type: d,
            payload: {
                defer: n,
                rawData: e
            }
        }
    };
    e.playbackRequested = function(t) {
        var e = t.actionTypeId,
            n = void 0 === e ? o.ActionTypeConsts.GENERAL_START_ACTION : e,
            r = t.actionListId,
            i = t.actionItemId,
            a = t.eventId,
            u = t.allowEvents,
            c = t.immediate,
            s = t.testManual,
            f = t.verbose,
            l = t.rawData;
        return {
            type: p,
            payload: {
                actionTypeId: n,
                actionListId: r,
                actionItemId: i,
                testManual: s,
                eventId: a,
                allowEvents: u,
                immediate: c,
                verbose: f,
                rawData: l
            }
        }
    };
    e.stopRequested = function(t) {
        return {
            type: v,
            payload: {
                actionListId: t
            }
        }
    };
    e.clearRequested = function() {
        return {
            type: h
        }
    };
    e.eventListenerAdded = function(t, e) {
        return {
            type: E,
            payload: {
                target: t,
                listenerParams: e
            }
        }
    };
    e.testFrameRendered = function() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
        return {
            type: g,
            payload: {
                step: t
            }
        }
    };
    e.eventStateChanged = function(t, e) {
        return {
            type: _,
            payload: {
                stateKey: t,
                newState: e
            }
        }
    };
    e.animationFrameChanged = function(t, e) {
        return {
            type: y,
            payload: {
                now: t,
                parameters: e
            }
        }
    };
    e.parameterChanged = function(t, e) {
        return {
            type: m,
            payload: {
                key: t,
                value: e
            }
        }
    };
    e.instanceAdded = function(t) {
        return {
            type: I,
            payload: (0, i.default)({}, t)
        }
    };
    e.instanceStarted = function(t, e) {
        return {
            type: T,
            payload: {
                instanceId: t,
                time: e
            }
        }
    };
    e.instanceRemoved = function(t) {
        return {
            type: O,
            payload: {
                instanceId: t
            }
        }
    };
    e.elementStateChanged = function(t, e, n, r) {
        return {
            type: b,
            payload: {
                elementId: t,
                actionTypeId: e,
                current: n,
                actionItem: r
            }
        }
    };
    e.actionListPlaybackChanged = function(t) {
        var e = t.actionListId,
            n = t.isPlaying;
        return {
            type: A,
            payload: {
                actionListId: e,
                isPlaying: n
            }
        }
    };
    e.viewportWidthChanged = function(t) {
        var e = t.width,
            n = t.mediaQueries;
        return {
            type: w,
            payload: {
                width: e,
                mediaQueries: n
            }
        }
    };
    e.mediaQueriesDefined = function() {
        return {
            type: S
        }
    }
}, function(t, e, n) {
    var r = n(127),
        i = n(67);

    function o(t, e) {
        this.__wrapped__ = t, this.__actions__ = [], this.__chain__ = !!e, this.__index__ = 0, this.__values__ = void 0
    }
    o.prototype = r(i.prototype), o.prototype.constructor = o, t.exports = o
}, function(t, e) {
    t.exports = function() {}
}, function(t, e, n) {
    var r = n(127),
        i = n(67),
        o = 4294967295;

    function a(t) {
        this.__wrapped__ = t, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = o, this.__views__ = []
    }
    a.prototype = r(i.prototype), a.prototype.constructor = a, t.exports = a
}, function(t, e, n) {
    "use strict";
    var r = n(1)(n(24));
    window.tram = function(t) {
        function e(t, e) {
            return (new F.Bare).init(t, e)
        }

        function n(t) {
            return t.replace(/[A-Z]/g, function(t) {
                return "-" + t.toLowerCase()
            })
        }

        function i(t) {
            var e = parseInt(t.slice(1), 16);
            return [e >> 16 & 255, e >> 8 & 255, 255 & e]
        }

        function o(t, e, n) {
            return "#" + (1 << 24 | t << 16 | e << 8 | n).toString(16).slice(1)
        }

        function a() {}

        function u(t, e, n) {
            s("Units do not match [" + t + "]: " + e + ", " + n)
        }

        function c(t, e, n) {
            if (void 0 !== e && (n = e), void 0 === t) return n;
            var r = n;
            return $.test(t) || !Z.test(t) ? r = parseInt(t, 10) : Z.test(t) && (r = 1e3 * parseFloat(t)), 0 > r && (r = 0), r == r ? r : n
        }

        function s(t) {
            H.debug && window && window.console.warn(t)
        }
        var f = function(t, e, n) {
                function i(t) {
                    return "object" == (0, r.default)(t)
                }

                function o(t) {
                    return "function" == typeof t
                }

                function a() {}
                return function r(u, c) {
                    function s() {
                        var t = new f;
                        return o(t.init) && t.init.apply(t, arguments), t
                    }

                    function f() {}
                    c === n && (c = u, u = Object), s.Bare = f;
                    var l, d = a[t] = u[t],
                        p = f[t] = s[t] = new a;
                    return p.constructor = s, s.mixin = function(e) {
                        return f[t] = s[t] = r(s, e)[t], s
                    }, s.open = function(t) {
                        if (l = {}, o(t) ? l = t.call(s, p, d, s, u) : i(t) && (l = t), i(l))
                            for (var n in l) e.call(l, n) && (p[n] = l[n]);
                        return o(p.init) || (p.init = u), s
                    }, s.open(c)
                }
            }("prototype", {}.hasOwnProperty),
            l = {
                ease: ["ease", function(t, e, n, r) {
                    var i = (t /= r) * t,
                        o = i * t;
                    return e + n * (-2.75 * o * i + 11 * i * i + -15.5 * o + 8 * i + .25 * t)
                }],
                "ease-in": ["ease-in", function(t, e, n, r) {
                    var i = (t /= r) * t,
                        o = i * t;
                    return e + n * (-1 * o * i + 3 * i * i + -3 * o + 2 * i)
                }],
                "ease-out": ["ease-out", function(t, e, n, r) {
                    var i = (t /= r) * t,
                        o = i * t;
                    return e + n * (.3 * o * i + -1.6 * i * i + 2.2 * o + -1.8 * i + 1.9 * t)
                }],
                "ease-in-out": ["ease-in-out", function(t, e, n, r) {
                    var i = (t /= r) * t,
                        o = i * t;
                    return e + n * (2 * o * i + -5 * i * i + 2 * o + 2 * i)
                }],
                linear: ["linear", function(t, e, n, r) {
                    return n * t / r + e
                }],
                "ease-in-quad": ["cubic-bezier(0.550, 0.085, 0.680, 0.530)", function(t, e, n, r) {
                    return n * (t /= r) * t + e
                }],
                "ease-out-quad": ["cubic-bezier(0.250, 0.460, 0.450, 0.940)", function(t, e, n, r) {
                    return -n * (t /= r) * (t - 2) + e
                }],
                "ease-in-out-quad": ["cubic-bezier(0.455, 0.030, 0.515, 0.955)", function(t, e, n, r) {
                    return (t /= r / 2) < 1 ? n / 2 * t * t + e : -n / 2 * (--t * (t - 2) - 1) + e
                }],
                "ease-in-cubic": ["cubic-bezier(0.550, 0.055, 0.675, 0.190)", function(t, e, n, r) {
                    return n * (t /= r) * t * t + e
                }],
                "ease-out-cubic": ["cubic-bezier(0.215, 0.610, 0.355, 1)", function(t, e, n, r) {
                    return n * ((t = t / r - 1) * t * t + 1) + e
                }],
                "ease-in-out-cubic": ["cubic-bezier(0.645, 0.045, 0.355, 1)", function(t, e, n, r) {
                    return (t /= r / 2) < 1 ? n / 2 * t * t * t + e : n / 2 * ((t -= 2) * t * t + 2) + e
                }],
                "ease-in-quart": ["cubic-bezier(0.895, 0.030, 0.685, 0.220)", function(t, e, n, r) {
                    return n * (t /= r) * t * t * t + e
                }],
                "ease-out-quart": ["cubic-bezier(0.165, 0.840, 0.440, 1)", function(t, e, n, r) {
                    return -n * ((t = t / r - 1) * t * t * t - 1) + e
                }],
                "ease-in-out-quart": ["cubic-bezier(0.770, 0, 0.175, 1)", function(t, e, n, r) {
                    return (t /= r / 2) < 1 ? n / 2 * t * t * t * t + e : -n / 2 * ((t -= 2) * t * t * t - 2) + e
                }],
                "ease-in-quint": ["cubic-bezier(0.755, 0.050, 0.855, 0.060)", function(t, e, n, r) {
                    return n * (t /= r) * t * t * t * t + e
                }],
                "ease-out-quint": ["cubic-bezier(0.230, 1, 0.320, 1)", function(t, e, n, r) {
                    return n * ((t = t / r - 1) * t * t * t * t + 1) + e
                }],
                "ease-in-out-quint": ["cubic-bezier(0.860, 0, 0.070, 1)", function(t, e, n, r) {
                    return (t /= r / 2) < 1 ? n / 2 * t * t * t * t * t + e : n / 2 * ((t -= 2) * t * t * t * t + 2) + e
                }],
                "ease-in-sine": ["cubic-bezier(0.470, 0, 0.745, 0.715)", function(t, e, n, r) {
                    return -n * Math.cos(t / r * (Math.PI / 2)) + n + e
                }],
                "ease-out-sine": ["cubic-bezier(0.390, 0.575, 0.565, 1)", function(t, e, n, r) {
                    return n * Math.sin(t / r * (Math.PI / 2)) + e
                }],
                "ease-in-out-sine": ["cubic-bezier(0.445, 0.050, 0.550, 0.950)", function(t, e, n, r) {
                    return -n / 2 * (Math.cos(Math.PI * t / r) - 1) + e
                }],
                "ease-in-expo": ["cubic-bezier(0.950, 0.050, 0.795, 0.035)", function(t, e, n, r) {
                    return 0 === t ? e : n * Math.pow(2, 10 * (t / r - 1)) + e
                }],
                "ease-out-expo": ["cubic-bezier(0.190, 1, 0.220, 1)", function(t, e, n, r) {
                    return t === r ? e + n : n * (1 - Math.pow(2, -10 * t / r)) + e
                }],
                "ease-in-out-expo": ["cubic-bezier(1, 0, 0, 1)", function(t, e, n, r) {
                    return 0 === t ? e : t === r ? e + n : (t /= r / 2) < 1 ? n / 2 * Math.pow(2, 10 * (t - 1)) + e : n / 2 * (2 - Math.pow(2, -10 * --t)) + e
                }],
                "ease-in-circ": ["cubic-bezier(0.600, 0.040, 0.980, 0.335)", function(t, e, n, r) {
                    return -n * (Math.sqrt(1 - (t /= r) * t) - 1) + e
                }],
                "ease-out-circ": ["cubic-bezier(0.075, 0.820, 0.165, 1)", function(t, e, n, r) {
                    return n * Math.sqrt(1 - (t = t / r - 1) * t) + e
                }],
                "ease-in-out-circ": ["cubic-bezier(0.785, 0.135, 0.150, 0.860)", function(t, e, n, r) {
                    return (t /= r / 2) < 1 ? -n / 2 * (Math.sqrt(1 - t * t) - 1) + e : n / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + e
                }],
                "ease-in-back": ["cubic-bezier(0.600, -0.280, 0.735, 0.045)", function(t, e, n, r, i) {
                    return void 0 === i && (i = 1.70158), n * (t /= r) * t * ((i + 1) * t - i) + e
                }],
                "ease-out-back": ["cubic-bezier(0.175, 0.885, 0.320, 1.275)", function(t, e, n, r, i) {
                    return void 0 === i && (i = 1.70158), n * ((t = t / r - 1) * t * ((i + 1) * t + i) + 1) + e
                }],
                "ease-in-out-back": ["cubic-bezier(0.680, -0.550, 0.265, 1.550)", function(t, e, n, r, i) {
                    return void 0 === i && (i = 1.70158), (t /= r / 2) < 1 ? n / 2 * t * t * ((1 + (i *= 1.525)) * t - i) + e : n / 2 * ((t -= 2) * t * ((1 + (i *= 1.525)) * t + i) + 2) + e
                }]
            },
            d = {
                "ease-in-back": "cubic-bezier(0.600, 0, 0.735, 0.045)",
                "ease-out-back": "cubic-bezier(0.175, 0.885, 0.320, 1)",
                "ease-in-out-back": "cubic-bezier(0.680, 0, 0.265, 1)"
            },
            p = document,
            v = window,
            h = "bkwld-tram",
            E = /[\-\.0-9]/g,
            g = /[A-Z]/,
            _ = "number",
            y = /^(rgb|#)/,
            m = /(em|cm|mm|in|pt|pc|px)$/,
            I = /(em|cm|mm|in|pt|pc|px|%)$/,
            T = /(deg|rad|turn)$/,
            O = "unitless",
            b = /(all|none) 0s ease 0s/,
            A = /^(width|height)$/,
            w = " ",
            S = p.createElement("a"),
            R = ["Webkit", "Moz", "O", "ms"],
            N = ["-webkit-", "-moz-", "-o-", "-ms-"],
            x = function(t) {
                if (t in S.style) return {
                    dom: t,
                    css: t
                };
                var e, n, r = "",
                    i = t.split("-");
                for (e = 0; e < i.length; e++) r += i[e].charAt(0).toUpperCase() + i[e].slice(1);
                for (e = 0; e < R.length; e++)
                    if ((n = R[e] + r) in S.style) return {
                        dom: n,
                        css: N[e] + t
                    }
            },
            C = e.support = {
                bind: Function.prototype.bind,
                transform: x("transform"),
                transition: x("transition"),
                backface: x("backface-visibility"),
                timing: x("transition-timing-function")
            };
        if (C.transition) {
            var L = C.timing.dom;
            if (S.style[L] = l["ease-in-back"][0], !S.style[L])
                for (var P in d) l[P][0] = d[P]
        }
        var D = e.frame = function() {
                var t = v.requestAnimationFrame || v.webkitRequestAnimationFrame || v.mozRequestAnimationFrame || v.oRequestAnimationFrame || v.msRequestAnimationFrame;
                return t && C.bind ? t.bind(v) : function(t) {
                    v.setTimeout(t, 16)
                }
            }(),
            M = e.now = function() {
                var t = v.performance,
                    e = t && (t.now || t.webkitNow || t.msNow || t.mozNow);
                return e && C.bind ? e.bind(t) : Date.now || function() {
                    return +new Date
                }
            }(),
            j = f(function(e) {
                function i(t, e) {
                    var n = function(t) {
                            for (var e = -1, n = t ? t.length : 0, r = []; ++e < n;) {
                                var i = t[e];
                                i && r.push(i)
                            }
                            return r
                        }(("" + t).split(w)),
                        r = n[0];
                    e = e || {};
                    var i = Q[r];
                    if (!i) return s("Unsupported property: " + r);
                    if (!e.weak || !this.props[r]) {
                        var o = i[0],
                            a = this.props[r];
                        return a || (a = this.props[r] = new o.Bare), a.init(this.$el, n, i, e), a
                    }
                }

                function o(t, e, n) {
                    if (t) {
                        var o = (0, r.default)(t);
                        if (e || (this.timer && this.timer.destroy(), this.queue = [], this.active = !1), "number" == o && e) return this.timer = new W({
                            duration: t,
                            context: this,
                            complete: a
                        }), void(this.active = !0);
                        if ("string" == o && e) {
                            switch (t) {
                                case "hide":
                                    f.call(this);
                                    break;
                                case "stop":
                                    u.call(this);
                                    break;
                                case "redraw":
                                    l.call(this);
                                    break;
                                default:
                                    i.call(this, t, n && n[1])
                            }
                            return a.call(this)
                        }
                        if ("function" == o) return void t.call(this, this);
                        if ("object" == o) {
                            var s = 0;
                            p.call(this, t, function(t, e) {
                                t.span > s && (s = t.span), t.stop(), t.animate(e)
                            }, function(t) {
                                "wait" in t && (s = c(t.wait, 0))
                            }), d.call(this), s > 0 && (this.timer = new W({
                                duration: s,
                                context: this
                            }), this.active = !0, e && (this.timer.complete = a));
                            var v = this,
                                h = !1,
                                E = {};
                            D(function() {
                                p.call(v, t, function(t) {
                                    t.active && (h = !0, E[t.name] = t.nextStyle)
                                }), h && v.$el.css(E)
                            })
                        }
                    }
                }

                function a() {
                    if (this.timer && this.timer.destroy(), this.active = !1, this.queue.length) {
                        var t = this.queue.shift();
                        o.call(this, t.options, !0, t.args)
                    }
                }

                function u(t) {
                    var e;
                    this.timer && this.timer.destroy(), this.queue = [], this.active = !1, "string" == typeof t ? (e = {})[t] = 1 : e = "object" == (0, r.default)(t) && null != t ? t : this.props, p.call(this, e, v), d.call(this)
                }

                function f() {
                    u.call(this), this.el.style.display = "none"
                }

                function l() {
                    this.el.offsetHeight
                }

                function d() {
                    var t, e, n = [];
                    for (t in this.upstream && n.push(this.upstream), this.props)(e = this.props[t]).active && n.push(e.string);
                    n = n.join(","), this.style !== n && (this.style = n, this.el.style[C.transition.dom] = n)
                }

                function p(t, e, r) {
                    var o, a, u, c, s = e !== v,
                        f = {};
                    for (o in t) u = t[o], o in q ? (f.transform || (f.transform = {}), f.transform[o] = u) : (g.test(o) && (o = n(o)), o in Q ? f[o] = u : (c || (c = {}), c[o] = u));
                    for (o in f) {
                        if (u = f[o], !(a = this.props[o])) {
                            if (!s) continue;
                            a = i.call(this, o)
                        }
                        e.call(this, a, u)
                    }
                    r && c && r.call(this, c)
                }

                function v(t) {
                    t.stop()
                }

                function E(t, e) {
                    t.set(e)
                }

                function _(t) {
                    this.$el.css(t)
                }

                function y(t, n) {
                    e[t] = function() {
                        return this.children ? function(t, e) {
                            var n, r = this.children.length;
                            for (n = 0; r > n; n++) t.apply(this.children[n], e);
                            return this
                        }.call(this, n, arguments) : (this.el && n.apply(this, arguments), this)
                    }
                }
                e.init = function(e) {
                    if (this.$el = t(e), this.el = this.$el[0], this.props = {}, this.queue = [], this.style = "", this.active = !1, H.keepInherited && !H.fallback) {
                        var n = K(this.el, "transition");
                        n && !b.test(n) && (this.upstream = n)
                    }
                    C.backface && H.hideBackface && z(this.el, C.backface.css, "hidden")
                }, y("add", i), y("start", o), y("wait", function(t) {
                    t = c(t, 0), this.active ? this.queue.push({
                        options: t
                    }) : (this.timer = new W({
                        duration: t,
                        context: this,
                        complete: a
                    }), this.active = !0)
                }), y("then", function(t) {
                    return this.active ? (this.queue.push({
                        options: t,
                        args: arguments
                    }), void(this.timer.complete = a)) : s("No active transition timer. Use start() or wait() before then().")
                }), y("next", a), y("stop", u), y("set", function(t) {
                    u.call(this, t), p.call(this, t, E, _)
                }), y("show", function(t) {
                    "string" != typeof t && (t = "block"), this.el.style.display = t
                }), y("hide", f), y("redraw", l), y("destroy", function() {
                    u.call(this), t.removeData(this.el, h), this.$el = this.el = null
                })
            }),
            F = f(j, function(e) {
                function n(e, n) {
                    var r = t.data(e, h) || t.data(e, h, new j.Bare);
                    return r.el || r.init(e), n ? r.start(n) : r
                }
                e.init = function(e, r) {
                    var i = t(e);
                    if (!i.length) return this;
                    if (1 === i.length) return n(i[0], r);
                    var o = [];
                    return i.each(function(t, e) {
                        o.push(n(e, r))
                    }), this.children = o, this
                }
            }),
            G = f(function(t) {
                function e() {
                    var t = this.get();
                    this.update("auto");
                    var e = this.get();
                    return this.update(t), e
                }

                function n(t) {
                    var e = /rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(t);
                    return (e ? o(e[1], e[2], e[3]) : t).replace(/#(\w)(\w)(\w)$/, "#$1$1$2$2$3$3")
                }
                var i = 500,
                    a = "ease",
                    u = 0;
                t.init = function(t, e, n, r) {
                    this.$el = t, this.el = t[0];
                    var o = e[0];
                    n[2] && (o = n[2]), Y[o] && (o = Y[o]), this.name = o, this.type = n[1], this.duration = c(e[1], this.duration, i), this.ease = function(t, e, n) {
                        return void 0 !== e && (n = e), t in l ? t : n
                    }(e[2], this.ease, a), this.delay = c(e[3], this.delay, u), this.span = this.duration + this.delay, this.active = !1, this.nextStyle = null, this.auto = A.test(this.name), this.unit = r.unit || this.unit || H.defaultUnit, this.angle = r.angle || this.angle || H.defaultAngle, H.fallback || r.fallback ? this.animate = this.fallback : (this.animate = this.transition, this.string = this.name + w + this.duration + "ms" + ("ease" != this.ease ? w + l[this.ease][0] : "") + (this.delay ? w + this.delay + "ms" : ""))
                }, t.set = function(t) {
                    t = this.convert(t, this.type), this.update(t), this.redraw()
                }, t.transition = function(t) {
                    this.active = !0, t = this.convert(t, this.type), this.auto && ("auto" == this.el.style[this.name] && (this.update(this.get()), this.redraw()), "auto" == t && (t = e.call(this))), this.nextStyle = t
                }, t.fallback = function(t) {
                    var n = this.el.style[this.name] || this.convert(this.get(), this.type);
                    t = this.convert(t, this.type), this.auto && ("auto" == n && (n = this.convert(this.get(), this.type)), "auto" == t && (t = e.call(this))), this.tween = new U({
                        from: n,
                        to: t,
                        duration: this.duration,
                        delay: this.delay,
                        ease: this.ease,
                        update: this.update,
                        context: this
                    })
                }, t.get = function() {
                    return K(this.el, this.name)
                }, t.update = function(t) {
                    z(this.el, this.name, t)
                }, t.stop = function() {
                    (this.active || this.nextStyle) && (this.active = !1, this.nextStyle = null, z(this.el, this.name, this.get()));
                    var t = this.tween;
                    t && t.context && t.destroy()
                }, t.convert = function(t, e) {
                    if ("auto" == t && this.auto) return t;
                    var i, o = "number" == typeof t,
                        a = "string" == typeof t;
                    switch (e) {
                        case _:
                            if (o) return t;
                            if (a && "" === t.replace(E, "")) return +t;
                            i = "number(unitless)";
                            break;
                        case y:
                            if (a) {
                                if ("" === t && this.original) return this.original;
                                if (e.test(t)) return "#" == t.charAt(0) && 7 == t.length ? t : n(t)
                            }
                            i = "hex or rgb string";
                            break;
                        case m:
                            if (o) return t + this.unit;
                            if (a && e.test(t)) return t;
                            i = "number(px) or string(unit)";
                            break;
                        case I:
                            if (o) return t + this.unit;
                            if (a && e.test(t)) return t;
                            i = "number(px) or string(unit or %)";
                            break;
                        case T:
                            if (o) return t + this.angle;
                            if (a && e.test(t)) return t;
                            i = "number(deg) or string(angle)";
                            break;
                        case O:
                            if (o) return t;
                            if (a && I.test(t)) return t;
                            i = "number(unitless) or string(unit or %)"
                    }
                    return function(t, e) {
                        s("Type warning: Expected: [" + t + "] Got: [" + (0, r.default)(e) + "] " + e)
                    }(i, t), t
                }, t.redraw = function() {
                    this.el.offsetHeight
                }
            }),
            k = f(G, function(t, e) {
                t.init = function() {
                    e.init.apply(this, arguments), this.original || (this.original = this.convert(this.get(), y))
                }
            }),
            X = f(G, function(t, e) {
                t.init = function() {
                    e.init.apply(this, arguments), this.animate = this.fallback
                }, t.get = function() {
                    return this.$el[this.name]()
                }, t.update = function(t) {
                    this.$el[this.name](t)
                }
            }),
            V = f(G, function(t, e) {
                function n(t, e) {
                    var n, r, i, o, a;
                    for (n in t) i = (o = q[n])[0], r = o[1] || n, a = this.convert(t[n], i), e.call(this, r, a, i)
                }
                t.init = function() {
                    e.init.apply(this, arguments), this.current || (this.current = {}, q.perspective && H.perspective && (this.current.perspective = H.perspective, z(this.el, this.name, this.style(this.current)), this.redraw()))
                }, t.set = function(t) {
                    n.call(this, t, function(t, e) {
                        this.current[t] = e
                    }), z(this.el, this.name, this.style(this.current)), this.redraw()
                }, t.transition = function(t) {
                    var e = this.values(t);
                    this.tween = new B({
                        current: this.current,
                        values: e,
                        duration: this.duration,
                        delay: this.delay,
                        ease: this.ease
                    });
                    var n, r = {};
                    for (n in this.current) r[n] = n in e ? e[n] : this.current[n];
                    this.active = !0, this.nextStyle = this.style(r)
                }, t.fallback = function(t) {
                    var e = this.values(t);
                    this.tween = new B({
                        current: this.current,
                        values: e,
                        duration: this.duration,
                        delay: this.delay,
                        ease: this.ease,
                        update: this.update,
                        context: this
                    })
                }, t.update = function() {
                    z(this.el, this.name, this.style(this.current))
                }, t.style = function(t) {
                    var e, n = "";
                    for (e in t) n += e + "(" + t[e] + ") ";
                    return n
                }, t.values = function(t) {
                    var e, r = {};
                    return n.call(this, t, function(t, n, i) {
                        r[t] = n, void 0 === this.current[t] && (e = 0, ~t.indexOf("scale") && (e = 1), this.current[t] = this.convert(e, i))
                    }), r
                }
            }),
            U = f(function(e) {
                function n() {
                    var t, e, r, i = c.length;
                    if (i)
                        for (D(n), e = M(), t = i; t--;)(r = c[t]) && r.render(e)
                }
                var r = {
                    ease: l.ease[1],
                    from: 0,
                    to: 1
                };
                e.init = function(t) {
                    this.duration = t.duration || 0, this.delay = t.delay || 0;
                    var e = t.ease || r.ease;
                    l[e] && (e = l[e][1]), "function" != typeof e && (e = r.ease), this.ease = e, this.update = t.update || a, this.complete = t.complete || a, this.context = t.context || this, this.name = t.name;
                    var n = t.from,
                        i = t.to;
                    void 0 === n && (n = r.from), void 0 === i && (i = r.to), this.unit = t.unit || "", "number" == typeof n && "number" == typeof i ? (this.begin = n, this.change = i - n) : this.format(i, n), this.value = this.begin + this.unit, this.start = M(), !1 !== t.autoplay && this.play()
                }, e.play = function() {
                    var t;
                    this.active || (this.start || (this.start = M()), this.active = !0, t = this, 1 === c.push(t) && D(n))
                }, e.stop = function() {
                    var e, n, r;
                    this.active && (this.active = !1, e = this, (r = t.inArray(e, c)) >= 0 && (n = c.slice(r + 1), c.length = r, n.length && (c = c.concat(n))))
                }, e.render = function(t) {
                    var e, n = t - this.start;
                    if (this.delay) {
                        if (n <= this.delay) return;
                        n -= this.delay
                    }
                    if (n < this.duration) {
                        var r = this.ease(n, 0, 1, this.duration);
                        return e = this.startRGB ? function(t, e, n) {
                            return o(t[0] + n * (e[0] - t[0]), t[1] + n * (e[1] - t[1]), t[2] + n * (e[2] - t[2]))
                        }(this.startRGB, this.endRGB, r) : function(t) {
                            return Math.round(t * s) / s
                        }(this.begin + r * this.change), this.value = e + this.unit, void this.update.call(this.context, this.value)
                    }
                    e = this.endHex || this.begin + this.change, this.value = e + this.unit, this.update.call(this.context, this.value), this.complete.call(this.context), this.destroy()
                }, e.format = function(t, e) {
                    if (e += "", "#" == (t += "").charAt(0)) return this.startRGB = i(e), this.endRGB = i(t), this.endHex = t, this.begin = 0, void(this.change = 1);
                    if (!this.unit) {
                        var n = e.replace(E, "");
                        n !== t.replace(E, "") && u("tween", e, t), this.unit = n
                    }
                    e = parseFloat(e), t = parseFloat(t), this.begin = this.value = e, this.change = t - e
                }, e.destroy = function() {
                    this.stop(), this.context = null, this.ease = this.update = this.complete = a
                };
                var c = [],
                    s = 1e3
            }),
            W = f(U, function(t) {
                t.init = function(t) {
                    this.duration = t.duration || 0, this.complete = t.complete || a, this.context = t.context, this.play()
                }, t.render = function(t) {
                    t - this.start < this.duration || (this.complete.call(this.context), this.destroy())
                }
            }),
            B = f(U, function(t, e) {
                t.init = function(t) {
                    var e, n;
                    for (e in this.context = t.context, this.update = t.update, this.tweens = [], this.current = t.current, t.values) n = t.values[e], this.current[e] !== n && this.tweens.push(new U({
                        name: e,
                        from: this.current[e],
                        to: n,
                        duration: t.duration,
                        delay: t.delay,
                        ease: t.ease,
                        autoplay: !1
                    }));
                    this.play()
                }, t.render = function(t) {
                    var e, n, r = !1;
                    for (e = this.tweens.length; e--;)(n = this.tweens[e]).context && (n.render(t), this.current[n.name] = n.value, r = !0);
                    return r ? void(this.update && this.update.call(this.context)) : this.destroy()
                }, t.destroy = function() {
                    if (e.destroy.call(this), this.tweens) {
                        var t;
                        for (t = this.tweens.length; t--;) this.tweens[t].destroy();
                        this.tweens = null, this.current = null
                    }
                }
            }),
            H = e.config = {
                debug: !1,
                defaultUnit: "px",
                defaultAngle: "deg",
                keepInherited: !1,
                hideBackface: !1,
                perspective: "",
                fallback: !C.transition,
                agentTests: []
            };
        e.fallback = function(t) {
            if (!C.transition) return H.fallback = !0;
            H.agentTests.push("(" + t + ")");
            var e = new RegExp(H.agentTests.join("|"), "i");
            H.fallback = e.test(navigator.userAgent)
        }, e.fallback("6.0.[2-5] Safari"), e.tween = function(t) {
            return new U(t)
        }, e.delay = function(t, e, n) {
            return new W({
                complete: e,
                duration: t,
                context: n
            })
        }, t.fn.tram = function(t) {
            return e.call(null, this, t)
        };
        var z = t.style,
            K = t.css,
            Y = {
                transform: C.transform && C.transform.css
            },
            Q = {
                color: [k, y],
                background: [k, y, "background-color"],
                "outline-color": [k, y],
                "border-color": [k, y],
                "border-top-color": [k, y],
                "border-right-color": [k, y],
                "border-bottom-color": [k, y],
                "border-left-color": [k, y],
                "border-width": [G, m],
                "border-top-width": [G, m],
                "border-right-width": [G, m],
                "border-bottom-width": [G, m],
                "border-left-width": [G, m],
                "border-spacing": [G, m],
                "letter-spacing": [G, m],
                margin: [G, m],
                "margin-top": [G, m],
                "margin-right": [G, m],
                "margin-bottom": [G, m],
                "margin-left": [G, m],
                padding: [G, m],
                "padding-top": [G, m],
                "padding-right": [G, m],
                "padding-bottom": [G, m],
                "padding-left": [G, m],
                "outline-width": [G, m],
                opacity: [G, _],
                top: [G, I],
                right: [G, I],
                bottom: [G, I],
                left: [G, I],
                "font-size": [G, I],
                "text-indent": [G, I],
                "word-spacing": [G, I],
                width: [G, I],
                "min-width": [G, I],
                "max-width": [G, I],
                height: [G, I],
                "min-height": [G, I],
                "max-height": [G, I],
                "line-height": [G, O],
                "scroll-top": [X, _, "scrollTop"],
                "scroll-left": [X, _, "scrollLeft"]
            },
            q = {};
        C.transform && (Q.transform = [V], q = {
            x: [I, "translateX"],
            y: [I, "translateY"],
            rotate: [T],
            rotateX: [T],
            rotateY: [T],
            scale: [_],
            scaleX: [_],
            scaleY: [_],
            skew: [T],
            skewX: [T],
            skewY: [T]
        }), C.transform && C.backface && (q.z = [I, "translateZ"], q.rotateZ = [T], q.scaleZ = [_], q.perspective = [m]);
        var $ = /ms/,
            Z = /s|\./;
        return t.tram = e
    }(window.jQuery)
}, function(t, e, n) {
    var r = n(13),
        i = n(40),
        o = n(144),
        a = n(71),
        u = n(26),
        c = n(73),
        s = n(9),
        f = n(80),
        l = Object.getOwnPropertyDescriptor;
    e.f = r ? l : function(t, e) {
        if (t = u(t), e = c(e), f) try {
            return l(t, e)
        } catch (t) {}
        if (s(t, e)) return a(!i(o.f, t, e), t[e])
    }
}, function(t, e) {
    t.exports = function(t, e) {
        return {
            enumerable: !(1 & t),
            configurable: !(2 & t),
            writable: !(4 & t),
            value: e
        }
    }
}, function(t, e, n) {
    var r = n(0).TypeError;
    t.exports = function(t) {
        if (null == t) throw r("Can't call method on " + t);
        return t
    }
}, function(t, e, n) {
    var r = n(147),
        i = n(74);
    t.exports = function(t) {
        var e = r(t, "string");
        return i(e) ? e : e + ""
    }
}, function(t, e, n) {
    var r = n(0),
        i = n(27),
        o = n(7),
        a = n(148),
        u = n(75),
        c = r.Object;
    t.exports = u ? function(t) {
        return "symbol" == typeof t
    } : function(t) {
        var e = i("Symbol");
        return o(e) && a(e.prototype, c(t))
    }
}, function(t, e, n) {
    var r = n(76);
    t.exports = r && !Symbol.sham && "symbol" == typeof Symbol.iterator
}, function(t, e, n) {
    var r = n(149),
        i = n(18);
    t.exports = !!Object.getOwnPropertySymbols && !i(function() {
        var t = Symbol();
        return !String(t) || !(Object(t) instanceof Symbol) || !Symbol.sham && r && r < 41
    })
}, function(t, e, n) {
    var r = n(0),
        i = n(78),
        o = n(9),
        a = n(79),
        u = n(76),
        c = n(75),
        s = i("wks"),
        f = r.Symbol,
        l = f && f.for,
        d = c ? f : f && f.withoutSetter || a;
    t.exports = function(t) {
        if (!o(s, t) || !u && "string" != typeof s[t]) {
            var e = "Symbol." + t;
            u && o(f, t) ? s[t] = f[t] : s[t] = c && l ? l(e) : d(e)
        }
        return s[t]
    }
}, function(t, e, n) {
    var r = n(155),
        i = n(41);
    (t.exports = function(t, e) {
        return i[t] || (i[t] = void 0 !== e ? e : {})
    })("versions", []).push({
        version: "3.19.0",
        mode: r ? "pure" : "global",
        copyright: "© 2021 Denis Pushkarev (zloirock.ru)"
    })
}, function(t, e, n) {
    var r = n(5),
        i = 0,
        o = Math.random(),
        a = r(1..toString);
    t.exports = function(t) {
        return "Symbol(" + (void 0 === t ? "" : t) + ")_" + a(++i + o, 36)
    }
}, function(t, e, n) {
    var r = n(13),
        i = n(18),
        o = n(81);
    t.exports = !r && !i(function() {
        return 7 != Object.defineProperty(o("div"), "a", {
            get: function() {
                return 7
            }
        }).a
    })
}, function(t, e, n) {
    var r = n(0),
        i = n(19),
        o = r.document,
        a = i(o) && i(o.createElement);
    t.exports = function(t) {
        return a ? o.createElement(t) : {}
    }
}, function(t, e, n) {
    var r = n(5),
        i = n(7),
        o = n(41),
        a = r(Function.toString);
    i(o.inspectSource) || (o.inspectSource = function(t) {
        return a(t)
    }), t.exports = o.inspectSource
}, function(t, e, n) {
    var r = n(78),
        i = n(79),
        o = r("keys");
    t.exports = function(t) {
        return o[t] || (o[t] = i(t))
    }
}, function(t, e, n) {
    var r = n(5),
        i = n(9),
        o = n(26),
        a = n(85).indexOf,
        u = n(44),
        c = r([].push);
    t.exports = function(t, e) {
        var n, r = o(t),
            s = 0,
            f = [];
        for (n in r) !i(u, n) && i(r, n) && c(f, n);
        for (; e.length > s;) i(r, n = e[s++]) && (~a(f, n) || c(f, n));
        return f
    }
}, function(t, e, n) {
    var r = n(26),
        i = n(164),
        o = n(165),
        a = function(t) {
            return function(e, n, a) {
                var u, c = r(e),
                    s = o(c),
                    f = i(a, s);
                if (t && n != n) {
                    for (; s > f;)
                        if ((u = c[f++]) != u) return !0
                } else
                    for (; s > f; f++)
                        if ((t || f in c) && c[f] === n) return t || f || 0;
                return !t && -1
            }
        };
    t.exports = {
        includes: a(!0),
        indexOf: a(!1)
    }
}, function(t, e) {
    var n = Math.ceil,
        r = Math.floor;
    t.exports = function(t) {
        var e = +t;
        return e != e || 0 === e ? 0 : (e > 0 ? r : n)(e)
    }
}, function(t, e, n) {
    "use strict";
    n.r(e);
    var r = n(46);
    n.d(e, "createStore", function() {
        return r.default
    });
    var i = n(90);
    n.d(e, "combineReducers", function() {
        return i.default
    });
    var o = n(92);
    n.d(e, "bindActionCreators", function() {
        return o.default
    });
    var a = n(93);
    n.d(e, "applyMiddleware", function() {
        return a.default
    });
    var u = n(47);
    n.d(e, "compose", function() {
        return u.default
    });
    n(91)
}, function(t, e, n) {
    "use strict";
    n.r(e);
    var r = n(175),
        i = n(180),
        o = n(182),
        a = "[object Object]",
        u = Function.prototype,
        c = Object.prototype,
        s = u.toString,
        f = c.hasOwnProperty,
        l = s.call(Object);
    e.default = function(t) {
        if (!Object(o.default)(t) || Object(r.default)(t) != a) return !1;
        var e = Object(i.default)(t);
        if (null === e) return !0;
        var n = f.call(e, "constructor") && e.constructor;
        return "function" == typeof n && n instanceof n && s.call(n) == l
    }
}, function(t, e, n) {
    "use strict";
    n.r(e);
    var r = n(176).default.Symbol;
    e.default = r
}, function(t, e, n) {
    "use strict";
    n.r(e), n.d(e, "default", function() {
        return o
    });
    var r = n(46);
    n(88), n(91);

    function i(t, e) {
        var n = e && e.type;
        return "Given action " + (n && '"' + n.toString() + '"' || "an action") + ', reducer "' + t + '" returned undefined. To ignore an action, you must explicitly return the previous state.'
    }

    function o(t) {
        for (var e = Object.keys(t), n = {}, o = 0; o < e.length; o++) {
            var a = e[o];
            0, "function" == typeof t[a] && (n[a] = t[a])
        }
        var u, c = Object.keys(n);
        try {
            ! function(t) {
                Object.keys(t).forEach(function(e) {
                    var n = t[e];
                    if (void 0 === n(void 0, {
                            type: r.ActionTypes.INIT
                        })) throw new Error('Reducer "' + e + '" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined.');
                    if (void 0 === n(void 0, {
                            type: "@@redux/PROBE_UNKNOWN_ACTION_" + Math.random().toString(36).substring(7).split("").join(".")
                        })) throw new Error('Reducer "' + e + "\" returned undefined when probed with a random type. Don't try to handle " + r.ActionTypes.INIT + ' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined.')
                })
            }(n)
        } catch (t) {
            u = t
        }
        return function() {
            var t = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0],
                e = arguments[1];
            if (u) throw u;
            for (var r = !1, o = {}, a = 0; a < c.length; a++) {
                var s = c[a],
                    f = n[s],
                    l = t[s],
                    d = f(l, e);
                if (void 0 === d) {
                    var p = i(s, e);
                    throw new Error(p)
                }
                o[s] = d, r = r || d !== l
            }
            return r ? o : t
        }
    }
}, function(t, e, n) {
    "use strict";

    function r(t) {
        "undefined" != typeof console && "function" == typeof console.error && console.error(t);
        try {
            throw new Error(t)
        } catch (t) {}
    }
    n.r(e), n.d(e, "default", function() {
        return r
    })
}, function(t, e, n) {
    "use strict";

    function r(t, e) {
        return function() {
            return e(t.apply(void 0, arguments))
        }
    }

    function i(t, e) {
        if ("function" == typeof t) return r(t, e);
        if ("object" != typeof t || null === t) throw new Error("bindActionCreators expected an object or a function, instead received " + (null === t ? "null" : typeof t) + '. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
        for (var n = Object.keys(t), i = {}, o = 0; o < n.length; o++) {
            var a = n[o],
                u = t[a];
            "function" == typeof u && (i[a] = r(u, e))
        }
        return i
    }
    n.r(e), n.d(e, "default", function() {
        return i
    })
}, function(t, e, n) {
    "use strict";
    n.r(e), n.d(e, "default", function() {
        return o
    });
    var r = n(47),
        i = Object.assign || function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
            }
            return t
        };

    function o() {
        for (var t = arguments.length, e = Array(t), n = 0; n < t; n++) e[n] = arguments[n];
        return function(t) {
            return function(n, o, a) {
                var u, c = t(n, o, a),
                    s = c.dispatch,
                    f = {
                        getState: c.getState,
                        dispatch: function(t) {
                            return s(t)
                        }
                    };
                return u = e.map(function(t) {
                    return t(f)
                }), s = r.default.apply(void 0, u)(c.dispatch), i({}, c, {
                    dispatch: s
                })
            }
        }
    }
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.ActionAppliesTo = e.ActionTypeConsts = void 0;
    e.ActionTypeConsts = {
        TRANSFORM_MOVE: "TRANSFORM_MOVE",
        TRANSFORM_SCALE: "TRANSFORM_SCALE",
        TRANSFORM_ROTATE: "TRANSFORM_ROTATE",
        TRANSFORM_SKEW: "TRANSFORM_SKEW",
        STYLE_OPACITY: "STYLE_OPACITY",
        STYLE_SIZE: "STYLE_SIZE",
        STYLE_FILTER: "STYLE_FILTER",
        STYLE_BACKGROUND_COLOR: "STYLE_BACKGROUND_COLOR",
        STYLE_BORDER: "STYLE_BORDER",
        STYLE_TEXT_COLOR: "STYLE_TEXT_COLOR",
        PLUGIN_LOTTIE: "PLUGIN_LOTTIE",
        GENERAL_DISPLAY: "GENERAL_DISPLAY",
        GENERAL_START_ACTION: "GENERAL_START_ACTION",
        GENERAL_CONTINUOUS_ACTION: "GENERAL_CONTINUOUS_ACTION",
        GENERAL_COMBO_CLASS: "GENERAL_COMBO_CLASS",
        GENERAL_STOP_ACTION: "GENERAL_STOP_ACTION",
        GENERAL_LOOP: "GENERAL_LOOP",
        STYLE_BOX_SHADOW: "STYLE_BOX_SHADOW"
    };
    e.ActionAppliesTo = {
        ELEMENT: "ELEMENT",
        ELEMENT_CLASS: "ELEMENT_CLASS",
        TRIGGER_ELEMENT: "TRIGGER_ELEMENT"
    }
}, function(t, e, n) {
    var r = n(96)(n(260));
    t.exports = r
}, function(t, e, n) {
    var r = n(10),
        i = n(16),
        o = n(35);
    t.exports = function(t) {
        return function(e, n, a) {
            var u = Object(e);
            if (!i(e)) {
                var c = r(n, 3);
                e = o(e), n = function(t) {
                    return c(u[t], t, u)
                }
            }
            var s = t(e, n, a);
            return s > -1 ? u[c ? e[s] : s] : void 0
        }
    }
}, function(t, e, n) {
    var r = n(31),
        i = n(202),
        o = n(203),
        a = n(204),
        u = n(205),
        c = n(206);

    function s(t) {
        var e = this.__data__ = new r(t);
        this.size = e.size
    }
    s.prototype.clear = i, s.prototype.delete = o, s.prototype.get = a, s.prototype.has = u, s.prototype.set = c, t.exports = s
}, function(t, e, n) {
    var r = n(15),
        i = n(8),
        o = "[object AsyncFunction]",
        a = "[object Function]",
        u = "[object GeneratorFunction]",
        c = "[object Proxy]";
    t.exports = function(t) {
        if (!i(t)) return !1;
        var e = r(t);
        return e == a || e == u || e == o || e == c
    }
}, function(t, e, n) {
    (function(e) {
        var n = "object" == typeof e && e && e.Object === Object && e;
        t.exports = n
    }).call(this, n(25))
}, function(t, e) {
    var n = Function.prototype.toString;
    t.exports = function(t) {
        if (null != t) {
            try {
                return n.call(t)
            } catch (t) {}
            try {
                return t + ""
            } catch (t) {}
        }
        return ""
    }
}, function(t, e, n) {
    var r = n(225),
        i = n(12);
    t.exports = function t(e, n, o, a, u) {
        return e === n || (null == e || null == n || !i(e) && !i(n) ? e != e && n != n : r(e, n, o, a, t, u))
    }
}, function(t, e, n) {
    var r = n(226),
        i = n(229),
        o = n(230),
        a = 1,
        u = 2;
    t.exports = function(t, e, n, c, s, f) {
        var l = n & a,
            d = t.length,
            p = e.length;
        if (d != p && !(l && p > d)) return !1;
        var v = f.get(t),
            h = f.get(e);
        if (v && h) return v == e && h == t;
        var E = -1,
            g = !0,
            _ = n & u ? new r : void 0;
        for (f.set(t, e), f.set(e, t); ++E < d;) {
            var y = t[E],
                m = e[E];
            if (c) var I = l ? c(m, y, E, e, t, f) : c(y, m, E, t, e, f);
            if (void 0 !== I) {
                if (I) continue;
                g = !1;
                break
            }
            if (_) {
                if (!i(e, function(t, e) {
                        if (!o(_, e) && (y === t || s(y, t, n, c, f))) return _.push(e)
                    })) {
                    g = !1;
                    break
                }
            } else if (y !== m && !s(y, m, n, c, f)) {
                g = !1;
                break
            }
        }
        return f.delete(t), f.delete(e), g
    }
}, function(t, e, n) {
    var r = n(52),
        i = n(2);
    t.exports = function(t, e, n) {
        var o = e(t);
        return i(t) ? o : r(o, n(t))
    }
}, function(t, e, n) {
    var r = n(237),
        i = n(105),
        o = Object.prototype.propertyIsEnumerable,
        a = Object.getOwnPropertySymbols,
        u = a ? function(t) {
            return null == t ? [] : (t = Object(t), r(a(t), function(e) {
                return o.call(t, e)
            }))
        } : i;
    t.exports = u
}, function(t, e) {
    t.exports = function() {
        return []
    }
}, function(t, e, n) {
    var r = n(238),
        i = n(36),
        o = n(2),
        a = n(53),
        u = n(54),
        c = n(55),
        s = Object.prototype.hasOwnProperty;
    t.exports = function(t, e) {
        var n = o(t),
            f = !n && i(t),
            l = !n && !f && a(t),
            d = !n && !f && !l && c(t),
            p = n || f || l || d,
            v = p ? r(t.length, String) : [],
            h = v.length;
        for (var E in t) !e && !s.call(t, E) || p && ("length" == E || l && ("offset" == E || "parent" == E) || d && ("buffer" == E || "byteLength" == E || "byteOffset" == E) || u(E, h)) || v.push(E);
        return v
    }
}, function(t, e) {
    t.exports = function(t) {
        return t.webpackPolyfill || (t.deprecate = function() {}, t.paths = [], t.children || (t.children = []), Object.defineProperty(t, "loaded", {
            enumerable: !0,
            get: function() {
                return t.l
            }
        }), Object.defineProperty(t, "id", {
            enumerable: !0,
            get: function() {
                return t.i
            }
        }), t.webpackPolyfill = 1), t
    }
}, function(t, e) {
    t.exports = function(t, e) {
        return function(n) {
            return t(e(n))
        }
    }
}, function(t, e, n) {
    var r = n(11)(n(6), "WeakMap");
    t.exports = r
}, function(t, e, n) {
    var r = n(8);
    t.exports = function(t) {
        return t == t && !r(t)
    }
}, function(t, e) {
    t.exports = function(t, e) {
        return function(n) {
            return null != n && n[t] === e && (void 0 !== e || t in Object(n))
        }
    }
}, function(t, e) {
    t.exports = function(t, e) {
        for (var n = -1, r = null == t ? 0 : t.length, i = Array(r); ++n < r;) i[n] = e(t[n], n, t);
        return i
    }
}, function(t, e) {
    t.exports = function(t) {
        return function(e) {
            return null == e ? void 0 : e[t]
        }
    }
}, function(t, e) {
    t.exports = function(t, e, n, r) {
        for (var i = t.length, o = n + (r ? 1 : -1); r ? o-- : ++o < i;)
            if (e(t[o], o, t)) return o;
        return -1
    }
}, function(t, e, n) {
    var r = n(261);
    t.exports = function(t) {
        var e = r(t),
            n = e % 1;
        return e == e ? n ? e - n : e : 0
    }
}, function(t, e, n) {
    "use strict";
    var r = n(1);
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.inQuad = function(t) {
        return Math.pow(t, 2)
    }, e.outQuad = function(t) {
        return -(Math.pow(t - 1, 2) - 1)
    }, e.inOutQuad = function(t) {
        if ((t /= .5) < 1) return .5 * Math.pow(t, 2);
        return -.5 * ((t -= 2) * t - 2)
    }, e.inCubic = function(t) {
        return Math.pow(t, 3)
    }, e.outCubic = function(t) {
        return Math.pow(t - 1, 3) + 1
    }, e.inOutCubic = function(t) {
        if ((t /= .5) < 1) return .5 * Math.pow(t, 3);
        return .5 * (Math.pow(t - 2, 3) + 2)
    }, e.inQuart = function(t) {
        return Math.pow(t, 4)
    }, e.outQuart = function(t) {
        return -(Math.pow(t - 1, 4) - 1)
    }, e.inOutQuart = function(t) {
        if ((t /= .5) < 1) return .5 * Math.pow(t, 4);
        return -.5 * ((t -= 2) * Math.pow(t, 3) - 2)
    }, e.inQuint = function(t) {
        return Math.pow(t, 5)
    }, e.outQuint = function(t) {
        return Math.pow(t - 1, 5) + 1
    }, e.inOutQuint = function(t) {
        if ((t /= .5) < 1) return .5 * Math.pow(t, 5);
        return .5 * (Math.pow(t - 2, 5) + 2)
    }, e.inSine = function(t) {
        return 1 - Math.cos(t * (Math.PI / 2))
    }, e.outSine = function(t) {
        return Math.sin(t * (Math.PI / 2))
    }, e.inOutSine = function(t) {
        return -.5 * (Math.cos(Math.PI * t) - 1)
    }, e.inExpo = function(t) {
        return 0 === t ? 0 : Math.pow(2, 10 * (t - 1))
    }, e.outExpo = function(t) {
        return 1 === t ? 1 : 1 - Math.pow(2, -10 * t)
    }, e.inOutExpo = function(t) {
        if (0 === t) return 0;
        if (1 === t) return 1;
        if ((t /= .5) < 1) return .5 * Math.pow(2, 10 * (t - 1));
        return .5 * (2 - Math.pow(2, -10 * --t))
    }, e.inCirc = function(t) {
        return -(Math.sqrt(1 - t * t) - 1)
    }, e.outCirc = function(t) {
        return Math.sqrt(1 - Math.pow(t - 1, 2))
    }, e.inOutCirc = function(t) {
        if ((t /= .5) < 1) return -.5 * (Math.sqrt(1 - t * t) - 1);
        return .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
    }, e.outBounce = function(t) {
        return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
    }, e.inBack = function(t) {
        return t * t * ((o + 1) * t - o)
    }, e.outBack = function(t) {
        return (t -= 1) * t * ((o + 1) * t + o) + 1
    }, e.inOutBack = function(t) {
        var e = o;
        if ((t /= .5) < 1) return t * t * ((1 + (e *= 1.525)) * t - e) * .5;
        return .5 * ((t -= 2) * t * ((1 + (e *= 1.525)) * t + e) + 2)
    }, e.inElastic = function(t) {
        var e = o,
            n = 0,
            r = 1;
        if (0 === t) return 0;
        if (1 === t) return 1;
        n || (n = .3);
        r < 1 ? (r = 1, e = n / 4) : e = n / (2 * Math.PI) * Math.asin(1 / r);
        return -r * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / n)
    }, e.outElastic = function(t) {
        var e = o,
            n = 0,
            r = 1;
        if (0 === t) return 0;
        if (1 === t) return 1;
        n || (n = .3);
        r < 1 ? (r = 1, e = n / 4) : e = n / (2 * Math.PI) * Math.asin(1 / r);
        return r * Math.pow(2, -10 * t) * Math.sin((t - e) * (2 * Math.PI) / n) + 1
    }, e.inOutElastic = function(t) {
        var e = o,
            n = 0,
            r = 1;
        if (0 === t) return 0;
        if (2 == (t /= .5)) return 1;
        n || (n = .3 * 1.5);
        r < 1 ? (r = 1, e = n / 4) : e = n / (2 * Math.PI) * Math.asin(1 / r);
        if (t < 1) return r * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / n) * -.5;
        return r * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / n) * .5 + 1
    }, e.swingFromTo = function(t) {
        var e = o;
        return (t /= .5) < 1 ? t * t * ((1 + (e *= 1.525)) * t - e) * .5 : .5 * ((t -= 2) * t * ((1 + (e *= 1.525)) * t + e) + 2)
    }, e.swingFrom = function(t) {
        return t * t * ((o + 1) * t - o)
    }, e.swingTo = function(t) {
        return (t -= 1) * t * ((o + 1) * t + o) + 1
    }, e.bounce = function(t) {
        return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
    }, e.bouncePast = function(t) {
        return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 2 - (7.5625 * (t -= 1.5 / 2.75) * t + .75) : t < 2.5 / 2.75 ? 2 - (7.5625 * (t -= 2.25 / 2.75) * t + .9375) : 2 - (7.5625 * (t -= 2.625 / 2.75) * t + .984375)
    }, e.easeInOut = e.easeOut = e.easeIn = e.ease = void 0;
    var i = r(n(117)),
        o = 1.70158,
        a = (0, i.default)(.25, .1, .25, 1);
    e.ease = a;
    var u = (0, i.default)(.42, 0, 1, 1);
    e.easeIn = u;
    var c = (0, i.default)(0, 0, .58, 1);
    e.easeOut = c;
    var s = (0, i.default)(.42, 0, .58, 1);
    e.easeInOut = s
}, function(t, e) {
    var n = 4,
        r = .001,
        i = 1e-7,
        o = 10,
        a = 11,
        u = 1 / (a - 1),
        c = "function" == typeof Float32Array;

    function s(t, e) {
        return 1 - 3 * e + 3 * t
    }

    function f(t, e) {
        return 3 * e - 6 * t
    }

    function l(t) {
        return 3 * t
    }

    function d(t, e, n) {
        return ((s(e, n) * t + f(e, n)) * t + l(e)) * t
    }

    function p(t, e, n) {
        return 3 * s(e, n) * t * t + 2 * f(e, n) * t + l(e)
    }
    t.exports = function(t, e, s, f) {
        if (!(0 <= t && t <= 1 && 0 <= s && s <= 1)) throw new Error("bezier x values must be in [0, 1] range");
        var l = c ? new Float32Array(a) : new Array(a);
        if (t !== e || s !== f)
            for (var v = 0; v < a; ++v) l[v] = d(v * u, t, s);

        function h(e) {
            for (var c = 0, f = 1, v = a - 1; f !== v && l[f] <= e; ++f) c += u;
            var h = c + (e - l[--f]) / (l[f + 1] - l[f]) * u,
                E = p(h, t, s);
            return E >= r ? function(t, e, r, i) {
                for (var o = 0; o < n; ++o) {
                    var a = p(e, r, i);
                    if (0 === a) return e;
                    e -= (d(e, r, i) - t) / a
                }
                return e
            }(e, h, t, s) : 0 === E ? h : function(t, e, n, r, a) {
                var u, c, s = 0;
                do {
                    (u = d(c = e + (n - e) / 2, r, a) - t) > 0 ? n = c : e = c
                } while (Math.abs(u) > i && ++s < o);
                return c
            }(e, c, c + u, t, s)
        }
        return function(n) {
            return t === e && s === f ? n : 0 === n ? 0 : 1 === n ? 1 : d(h(n), e, f)
        }
    }
}, function(t, e, n) {
    "use strict";
    var r = n(1)(n(119)),
        i = n(1),
        o = n(17);
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.optimizeFloat = c, e.createBezierEasing = function(t) {
        return u.default.apply(void 0, (0, r.default)(t))
    }, e.applyEasing = function(t, e, n) {
        if (0 === e) return 0;
        if (1 === e) return 1;
        if (n) return c(e > 0 ? n(e) : e);
        return c(e > 0 && t && a[t] ? a[t](e) : e)
    };
    var a = o(n(116)),
        u = i(n(117));

    function c(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 5,
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 10,
            r = Math.pow(n, e),
            i = Number(Math.round(t * r) / r);
        return Math.abs(i) > 1e-4 ? i : 0
    }
}, function(t, e, n) {
    var r = n(264),
        i = n(265),
        o = n(266);
    t.exports = function(t) {
        return r(t) || i(t) || o()
    }
}, function(t, e, n) {
    "use strict";
    var r = n(1)(n(20));
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.isPluginType = function(t) {
        return t === o.ActionTypeConsts.PLUGIN_LOTTIE
    }, e.clearPlugin = e.renderPlugin = e.createPluginInstance = e.getPluginDestination = e.getPluginDuration = e.getPluginOrigin = e.getPluginConfig = void 0;
    var i = n(268),
        o = n(3),
        a = n(48),
        u = (0, r.default)({}, o.ActionTypeConsts.PLUGIN_LOTTIE, {
            getConfig: i.getPluginConfig,
            getOrigin: i.getPluginOrigin,
            getDuration: i.getPluginDuration,
            getDestination: i.getPluginDestination,
            createInstance: i.createPluginInstance,
            render: i.renderPlugin,
            clear: i.clearPlugin
        });
    var c = function(t) {
            return function(e) {
                if (!a.IS_BROWSER_ENV) return function() {
                    return null
                };
                var n = u[e];
                if (!n) throw new Error("IX2 no plugin configured for: ".concat(e));
                var r = n[t];
                if (!r) throw new Error("IX2 invalid plugin method: ".concat(t));
                return r
            }
        },
        s = c("getConfig");
    e.getPluginConfig = s;
    var f = c("getOrigin");
    e.getPluginOrigin = f;
    var l = c("getDuration");
    e.getPluginDuration = l;
    var d = c("getDestination");
    e.getPluginDestination = d;
    var p = c("createInstance");
    e.createPluginInstance = p;
    var v = c("render");
    e.renderPlugin = v;
    var h = c("clear");
    e.clearPlugin = h
}, function(t, e, n) {
    var r = n(122),
        i = n(275)(r);
    t.exports = i
}, function(t, e, n) {
    var r = n(273),
        i = n(35);
    t.exports = function(t, e) {
        return t && r(t, e, i)
    }
}, function(t, e, n) {
    "use strict";
    var r = n(279);
    e.__esModule = !0, e.default = void 0;
    var i = r(n(280)).default;
    e.default = i
}, function(t, e, n) {
    "use strict";
    var r = n(1)(n(119)),
        i = n(17),
        o = n(1);
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.observeRequests = function(t) {
        D({
            store: t,
            select: function(t) {
                var e = t.ixRequest;
                return e.preview
            },
            onChange: et
        }), D({
            store: t,
            select: function(t) {
                var e = t.ixRequest;
                return e.playback
            },
            onChange: rt
        }), D({
            store: t,
            select: function(t) {
                var e = t.ixRequest;
                return e.stop
            },
            onChange: it
        }), D({
            store: t,
            select: function(t) {
                var e = t.ixRequest;
                return e.clear
            },
            onChange: ot
        })
    }, e.startEngine = at, e.stopEngine = ut, e.stopAllActionGroups = ht, e.stopActionGroup = Et, e.startActionGroup = gt;
    var a = o(n(30)),
        u = o(n(283)),
        c = o(n(95)),
        s = o(n(60)),
        f = o(n(284)),
        l = o(n(290)),
        d = o(n(302)),
        p = o(n(303)),
        v = o(n(304)),
        h = o(n(307)),
        E = o(n(123)),
        g = n(3),
        _ = n(14),
        y = n(65),
        m = i(n(310)),
        I = o(n(311)),
        T = Object.keys(g.QuickEffectIds),
        O = function(t) {
            return T.includes(t)
        },
        b = g.IX2EngineConstants,
        A = b.COLON_DELIMITER,
        w = b.BOUNDARY_SELECTOR,
        S = b.HTML_ELEMENT,
        R = b.RENDER_GENERAL,
        N = b.W_MOD_IX,
        x = _.IX2VanillaUtils,
        C = x.getAffectedElements,
        L = x.getElementId,
        P = x.getDestinationValues,
        D = x.observeStore,
        M = x.getInstanceId,
        j = x.renderHTMLElement,
        F = x.clearAllStyles,
        G = x.getMaxDurationItemIndex,
        k = x.getComputedStyle,
        X = x.getInstanceOrigin,
        V = x.reduceListToGroup,
        U = x.shouldNamespaceEventParameter,
        W = x.getNamespacedParameterId,
        B = x.shouldAllowMediaQuery,
        H = x.cleanupHTMLElement,
        z = x.stringifyTarget,
        K = x.mediaQueriesEqual,
        Y = _.IX2VanillaPlugins,
        Q = Y.isPluginType,
        q = Y.createPluginInstance,
        $ = Y.getPluginDuration,
        Z = navigator.userAgent,
        J = Z.match(/iPad/i) || Z.match(/iPhone/),
        tt = 12;

    function et(t, e) {
        var n = t.rawData,
            r = function() {
                at({
                    store: e,
                    rawData: n,
                    allowEvents: !0
                }), nt()
            };
        t.defer ? setTimeout(r, 0) : r()
    }

    function nt() {
        document.dispatchEvent(new CustomEvent("IX2_PAGE_UPDATE"))
    }

    function rt(t, e) {
        var n = t.actionTypeId,
            r = t.actionListId,
            i = t.actionItemId,
            o = t.eventId,
            a = t.allowEvents,
            u = t.immediate,
            c = t.testManual,
            s = t.verbose,
            f = void 0 === s || s,
            l = t.rawData;
        if (r && i && l && u) {
            var d = l.actionLists[r];
            d && (l = V({
                actionList: d,
                actionItemId: i,
                rawData: l
            }))
        }
        if (at({
                store: e,
                rawData: l,
                allowEvents: a,
                testManual: c
            }), r && n === g.ActionTypeConsts.GENERAL_START_ACTION || O(n)) {
            Et({
                store: e,
                actionListId: r
            }), vt({
                store: e,
                actionListId: r,
                eventId: o
            });
            var p = gt({
                store: e,
                eventId: o,
                actionListId: r,
                immediate: u,
                verbose: f
            });
            f && p && e.dispatch((0, y.actionListPlaybackChanged)({
                actionListId: r,
                isPlaying: !u
            }))
        }
    }

    function it(t, e) {
        var n = t.actionListId;
        n ? Et({
            store: e,
            actionListId: n
        }) : ht({
            store: e
        }), ut(e)
    }

    function ot(t, e) {
        ut(e), F({
            store: e,
            elementApi: m
        })
    }

    function at(t) {
        var e, n = t.store,
            i = t.rawData,
            o = t.allowEvents,
            a = t.testManual,
            u = n.getState().ixSession;
        i && n.dispatch((0, y.rawDataImported)(i)), u.active || (n.dispatch((0, y.sessionInitialized)({
            hasBoundaryNodes: Boolean(document.querySelector(w)),
            reducedMotion: document.body.hasAttribute("data-wf-ix-vacation") && window.matchMedia("(prefers-reduced-motion)").matches
        })), o && (function(t) {
            var e = t.getState().ixData.eventTypeMap;
            ft(t), (0, v.default)(e, function(e, n) {
                var i = I.default[n];
                i ? function(t) {
                    var e = t.logic,
                        n = t.store,
                        i = t.events;
                    ! function(t) {
                        if (J) {
                            var e = {},
                                n = "";
                            for (var r in t) {
                                var i = t[r],
                                    o = i.eventTypeId,
                                    a = i.target,
                                    u = m.getQuerySelector(a);
                                e[u] || o !== g.EventTypeConsts.MOUSE_CLICK && o !== g.EventTypeConsts.MOUSE_SECOND_CLICK || (e[u] = !0, n += u + "{cursor: pointer;touch-action: manipulation;}")
                            }
                            if (n) {
                                var c = document.createElement("style");
                                c.textContent = n, document.body.appendChild(c)
                            }
                        }
                    }(i);
                    var o = e.types,
                        a = e.handler,
                        u = n.getState().ixData,
                        l = u.actionLists,
                        d = lt(i, pt);
                    if ((0, f.default)(d)) {
                        (0, v.default)(d, function(t, e) {
                            var o = i[e],
                                a = o.action,
                                f = o.id,
                                d = o.mediaQueries,
                                p = void 0 === d ? u.mediaQueryKeys : d,
                                v = a.config.actionListId;
                            if (K(p, u.mediaQueryKeys) || n.dispatch((0, y.mediaQueriesDefined)()), a.actionTypeId === g.ActionTypeConsts.GENERAL_CONTINUOUS_ACTION) {
                                var h = Array.isArray(o.config) ? o.config : [o.config];
                                h.forEach(function(e) {
                                    var i = e.continuousParameterGroupId,
                                        o = (0, s.default)(l, "".concat(v, ".continuousParameterGroups"), []),
                                        a = (0, c.default)(o, function(t) {
                                            var e = t.id;
                                            return e === i
                                        }),
                                        u = (e.smoothing || 0) / 100,
                                        d = (e.restingState || 0) / 100;
                                    a && t.forEach(function(t, i) {
                                        var o = f + A + i;
                                        ! function(t) {
                                            var e = t.store,
                                                n = t.eventStateKey,
                                                i = t.eventTarget,
                                                o = t.eventId,
                                                a = t.eventConfig,
                                                u = t.actionListId,
                                                c = t.parameterGroup,
                                                f = t.smoothing,
                                                l = t.restingValue,
                                                d = e.getState(),
                                                p = d.ixData,
                                                v = d.ixSession,
                                                h = p.events[o],
                                                E = h.eventTypeId,
                                                g = {},
                                                _ = {},
                                                y = [],
                                                I = c.continuousActionGroups,
                                                T = c.id;
                                            U(E, a) && (T = W(n, T));
                                            var O = v.hasBoundaryNodes && i ? m.getClosestElement(i, w) : null;
                                            I.forEach(function(t) {
                                                var e = t.keyframe,
                                                    n = t.actionItems;
                                                n.forEach(function(t) {
                                                    var n = t.actionTypeId,
                                                        o = t.config.target;
                                                    if (o) {
                                                        var a = o.boundaryMode ? O : null,
                                                            u = z(o) + A + n;
                                                        if (_[u] = function() {
                                                                var t, e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                                                                    n = arguments.length > 1 ? arguments[1] : void 0,
                                                                    i = arguments.length > 2 ? arguments[2] : void 0,
                                                                    o = (0, r.default)(e);
                                                                return o.some(function(e, r) {
                                                                    return e.keyframe === n && (t = r, !0)
                                                                }), null == t && (t = o.length, o.push({
                                                                    keyframe: n,
                                                                    actionItems: []
                                                                })), o[t].actionItems.push(i), o
                                                            }(_[u], e, t), !g[u]) {
                                                            g[u] = !0;
                                                            var c = t.config;
                                                            C({
                                                                config: c,
                                                                event: h,
                                                                eventTarget: i,
                                                                elementRoot: a,
                                                                elementApi: m
                                                            }).forEach(function(t) {
                                                                y.push({
                                                                    element: t,
                                                                    key: u
                                                                })
                                                            })
                                                        }
                                                    }
                                                })
                                            }), y.forEach(function(t) {
                                                var n = t.element,
                                                    r = t.key,
                                                    i = _[r],
                                                    a = (0, s.default)(i, "[0].actionItems[0]", {}),
                                                    c = a.actionTypeId,
                                                    d = Q(c) ? q(c)(n, a) : null,
                                                    p = P({
                                                        element: n,
                                                        actionItem: a,
                                                        elementApi: m
                                                    }, d);
                                                _t({
                                                    store: e,
                                                    element: n,
                                                    eventId: o,
                                                    actionListId: u,
                                                    actionItem: a,
                                                    destination: p,
                                                    continuous: !0,
                                                    parameterId: T,
                                                    actionGroups: i,
                                                    smoothing: f,
                                                    restingValue: l,
                                                    pluginInstance: d
                                                })
                                            })
                                        }({
                                            store: n,
                                            eventStateKey: o,
                                            eventTarget: t,
                                            eventId: f,
                                            eventConfig: e,
                                            actionListId: v,
                                            parameterGroup: a,
                                            smoothing: u,
                                            restingValue: d
                                        })
                                    })
                                })
                            }(a.actionTypeId === g.ActionTypeConsts.GENERAL_START_ACTION || O(a.actionTypeId)) && vt({
                                store: n,
                                actionListId: v,
                                eventId: f
                            })
                        });
                        var p = function(t) {
                                var e = n.getState(),
                                    r = e.ixSession;
                                dt(d, function(e, o, c) {
                                    var s = i[o],
                                        f = r.eventState[c],
                                        l = s.action,
                                        d = s.mediaQueries,
                                        p = void 0 === d ? u.mediaQueryKeys : d;
                                    if (B(p, r.mediaQueryKey)) {
                                        var v = function() {
                                            var r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                                i = a({
                                                    store: n,
                                                    element: e,
                                                    event: s,
                                                    eventConfig: r,
                                                    nativeEvent: t,
                                                    eventStateKey: c
                                                }, f);
                                            (0, E.default)(i, f) || n.dispatch((0, y.eventStateChanged)(c, i))
                                        };
                                        if (l.actionTypeId === g.ActionTypeConsts.GENERAL_CONTINUOUS_ACTION) {
                                            var h = Array.isArray(s.config) ? s.config : [s.config];
                                            h.forEach(v)
                                        } else v()
                                    }
                                })
                            },
                            _ = (0, h.default)(p, tt),
                            I = function(t) {
                                var e = t.target,
                                    r = void 0 === e ? document : e,
                                    i = t.types,
                                    o = t.throttle;
                                i.split(" ").filter(Boolean).forEach(function(t) {
                                    var e = o ? _ : p;
                                    r.addEventListener(t, e), n.dispatch((0, y.eventListenerAdded)(r, [t, e]))
                                })
                            };
                        Array.isArray(o) ? o.forEach(I) : "string" == typeof o && I(e)
                    }
                }({
                    logic: i,
                    store: t,
                    events: e
                }) : console.warn("IX2 event type not configured: ".concat(n))
            }), t.getState().ixSession.eventListeners.length && function(t) {
                var e = function() {
                    ft(t)
                };
                st.forEach(function(n) {
                    window.addEventListener(n, e), t.dispatch((0, y.eventListenerAdded)(window, [n, e]))
                }), e()
            }(t)
        }(n), -1 === (e = document.documentElement).className.indexOf(N) && (e.className += " ".concat(N)), n.getState().ixSession.hasDefinedMediaQueries && function(t) {
            D({
                store: t,
                select: function(t) {
                    return t.ixSession.mediaQueryKey
                },
                onChange: function() {
                    ut(t), F({
                        store: t,
                        elementApi: m
                    }), at({
                        store: t,
                        allowEvents: !0
                    }), nt()
                }
            })
        }(n)), n.dispatch((0, y.sessionStarted)()), function(t, e) {
            ! function n(r) {
                var i = t.getState(),
                    o = i.ixSession,
                    a = i.ixParameters;
                o.active && (t.dispatch((0, y.animationFrameChanged)(r, a)), e ? function(t, e) {
                    var n = D({
                        store: t,
                        select: function(t) {
                            return t.ixSession.tick
                        },
                        onChange: function(t) {
                            e(t), n()
                        }
                    })
                }(t, n) : requestAnimationFrame(n))
            }(window.performance.now())
        }(n, a))
    }

    function ut(t) {
        var e = t.getState().ixSession;
        e.active && (e.eventListeners.forEach(ct), t.dispatch((0, y.sessionStopped)()))
    }

    function ct(t) {
        var e = t.target,
            n = t.listenerParams;
        e.removeEventListener.apply(e, n)
    }
    var st = ["resize", "orientationchange"];

    function ft(t) {
        var e = t.getState(),
            n = e.ixSession,
            r = e.ixData,
            i = window.innerWidth;
        if (i !== n.viewportWidth) {
            var o = r.mediaQueries;
            t.dispatch((0, y.viewportWidthChanged)({
                width: i,
                mediaQueries: o
            }))
        }
    }
    var lt = function(t, e) {
            return (0, l.default)((0, p.default)(t, e), d.default)
        },
        dt = function(t, e) {
            (0, v.default)(t, function(t, n) {
                t.forEach(function(t, r) {
                    e(t, n, n + A + r)
                })
            })
        },
        pt = function(t) {
            var e = {
                target: t.target,
                targets: t.targets
            };
            return C({
                config: e,
                elementApi: m
            })
        };

    function vt(t) {
        var e = t.store,
            n = t.actionListId,
            r = t.eventId,
            i = e.getState(),
            o = i.ixData,
            a = i.ixSession,
            u = o.actionLists,
            c = o.events[r],
            f = u[n];
        if (f && f.useFirstGroupAsInitialState) {
            var l = (0, s.default)(f, "actionItemGroups[0].actionItems", []),
                d = (0, s.default)(c, "mediaQueries", o.mediaQueryKeys);
            if (!B(d, a.mediaQueryKey)) return;
            l.forEach(function(t) {
                var i, o = t.config,
                    a = t.actionTypeId,
                    u = !0 === (null == o ? void 0 : null === (i = o.target) || void 0 === i ? void 0 : i.useEventTarget) ? {
                        target: c.target,
                        targets: c.targets
                    } : o,
                    s = C({
                        config: u,
                        event: c,
                        elementApi: m
                    }),
                    f = Q(a);
                s.forEach(function(i) {
                    var o = f ? q(a)(i, t) : null;
                    _t({
                        destination: P({
                            element: i,
                            actionItem: t,
                            elementApi: m
                        }, o),
                        immediate: !0,
                        store: e,
                        element: i,
                        eventId: r,
                        actionItem: t,
                        actionListId: n,
                        pluginInstance: o
                    })
                })
            })
        }
    }

    function ht(t) {
        var e = t.store,
            n = e.getState().ixInstances;
        (0, v.default)(n, function(t) {
            if (!t.continuous) {
                var n = t.actionListId,
                    r = t.verbose;
                yt(t, e), r && e.dispatch((0, y.actionListPlaybackChanged)({
                    actionListId: n,
                    isPlaying: !1
                }))
            }
        })
    }

    function Et(t) {
        var e = t.store,
            n = t.eventId,
            r = t.eventTarget,
            i = t.eventStateKey,
            o = t.actionListId,
            a = e.getState(),
            u = a.ixInstances,
            c = a.ixSession.hasBoundaryNodes && r ? m.getClosestElement(r, w) : null;
        (0, v.default)(u, function(t) {
            var r = (0, s.default)(t, "actionItem.config.target.boundaryMode"),
                a = !i || t.eventStateKey === i;
            if (t.actionListId === o && t.eventId === n && a) {
                if (c && r && !m.elementContains(c, t.element)) return;
                yt(t, e), t.verbose && e.dispatch((0, y.actionListPlaybackChanged)({
                    actionListId: o,
                    isPlaying: !1
                }))
            }
        })
    }

    function gt(t) {
        var e, n = t.store,
            r = t.eventId,
            i = t.eventTarget,
            o = t.eventStateKey,
            a = t.actionListId,
            u = t.groupIndex,
            c = void 0 === u ? 0 : u,
            f = t.immediate,
            l = t.verbose,
            d = n.getState(),
            p = d.ixData,
            v = d.ixSession,
            h = p.events[r] || {},
            E = h.mediaQueries,
            g = void 0 === E ? p.mediaQueryKeys : E,
            _ = (0, s.default)(p, "actionLists.".concat(a), {}),
            y = _.actionItemGroups,
            I = _.useFirstGroupAsInitialState;
        if (!y || !y.length) return !1;
        c >= y.length && (0, s.default)(h, "config.loop") && (c = 0), 0 === c && I && c++;
        var T = (0 === c || 1 === c && I) && O(null === (e = h.action) || void 0 === e ? void 0 : e.actionTypeId) ? h.config.delay : void 0,
            b = (0, s.default)(y, [c, "actionItems"], []);
        if (!b.length) return !1;
        if (!B(g, v.mediaQueryKey)) return !1;
        var A = v.hasBoundaryNodes && i ? m.getClosestElement(i, w) : null,
            S = G(b),
            R = !1;
        return b.forEach(function(t, e) {
            var u = t.config,
                s = t.actionTypeId,
                d = Q(s),
                p = u.target;
            if (p) {
                var v = p.boundaryMode ? A : null;
                C({
                    config: u,
                    event: h,
                    eventTarget: i,
                    elementRoot: v,
                    elementApi: m
                }).forEach(function(u, p) {
                    var v = d ? q(s)(u, t) : null,
                        h = d ? $(s)(u, t) : null;
                    R = !0;
                    var E = S === e && 0 === p,
                        g = k({
                            element: u,
                            actionItem: t
                        }),
                        _ = P({
                            element: u,
                            actionItem: t,
                            elementApi: m
                        }, v);
                    _t({
                        store: n,
                        element: u,
                        actionItem: t,
                        eventId: r,
                        eventTarget: i,
                        eventStateKey: o,
                        actionListId: a,
                        groupIndex: c,
                        isCarrier: E,
                        computedStyle: g,
                        destination: _,
                        immediate: f,
                        verbose: l,
                        pluginInstance: v,
                        pluginDuration: h,
                        instanceDelay: T
                    })
                })
            }
        }), R
    }

    function _t(t) {
        var e, n, r = t.store,
            i = t.computedStyle,
            o = (0, u.default)(t, ["store", "computedStyle"]),
            c = o.element,
            s = o.actionItem,
            f = o.immediate,
            l = o.pluginInstance,
            d = o.continuous,
            p = o.restingValue,
            v = o.eventId,
            h = !d,
            E = M(),
            _ = r.getState(),
            I = _.ixElements,
            T = _.ixSession,
            O = _.ixData,
            b = L(I, c),
            A = (I[b] || {}).refState,
            w = m.getRefType(c),
            S = T.reducedMotion && g.ReducedMotionTypes[s.actionTypeId];
        if (S && d) switch (null === (e = O.events[v]) || void 0 === e ? void 0 : e.eventTypeId) {
            case g.EventTypeConsts.MOUSE_MOVE:
            case g.EventTypeConsts.MOUSE_MOVE_IN_VIEWPORT:
                n = p;
                break;
            default:
                n = .5
        }
        var R = X(c, A, i, s, m, l);
        r.dispatch((0, y.instanceAdded)((0, a.default)({
            instanceId: E,
            elementId: b,
            origin: R,
            refType: w,
            skipMotion: S,
            skipToValue: n
        }, o))), mt(document.body, "ix2-animation-started", E), f ? function(t, e) {
            var n = t.getState().ixParameters;
            t.dispatch((0, y.instanceStarted)(e, 0)), t.dispatch((0, y.animationFrameChanged)(performance.now(), n)), It(t.getState().ixInstances[e], t)
        }(r, E) : (D({
            store: r,
            select: function(t) {
                return t.ixInstances[E]
            },
            onChange: It
        }), h && r.dispatch((0, y.instanceStarted)(E, T.tick)))
    }

    function yt(t, e) {
        mt(document.body, "ix2-animation-stopping", {
            instanceId: t.id,
            state: e.getState()
        });
        var n = t.elementId,
            r = t.actionItem,
            i = e.getState().ixElements[n] || {},
            o = i.ref;
        i.refType === S && H(o, r, m), e.dispatch((0, y.instanceRemoved)(t.id))
    }

    function mt(t, e, n) {
        var r = document.createEvent("CustomEvent");
        r.initCustomEvent(e, !0, !0, n), t.dispatchEvent(r)
    }

    function It(t, e) {
        var n = t.active,
            r = t.continuous,
            i = t.complete,
            o = t.elementId,
            a = t.actionItem,
            u = t.actionTypeId,
            c = t.renderType,
            s = t.current,
            f = t.groupIndex,
            l = t.eventId,
            d = t.eventTarget,
            p = t.eventStateKey,
            v = t.actionListId,
            h = t.isCarrier,
            E = t.styleProp,
            g = t.verbose,
            _ = t.pluginInstance,
            I = e.getState(),
            T = I.ixData,
            O = I.ixSession,
            b = (T.events[l] || {}).mediaQueries,
            A = void 0 === b ? T.mediaQueryKeys : b;
        if (B(A, O.mediaQueryKey) && (r || n || i)) {
            if (s || c === R && i) {
                e.dispatch((0, y.elementStateChanged)(o, u, s, a));
                var w = e.getState().ixElements[o] || {},
                    N = w.ref,
                    x = w.refType,
                    C = w.refState,
                    L = C && C[u];
                switch (x) {
                    case S:
                        j(N, C, L, l, a, E, m, c, _)
                }
            }
            if (i) {
                if (h) {
                    var P = gt({
                        store: e,
                        eventId: l,
                        eventTarget: d,
                        eventStateKey: p,
                        actionListId: v,
                        groupIndex: f + 1,
                        verbose: g
                    });
                    g && !P && e.dispatch((0, y.actionListPlaybackChanged)({
                        actionListId: v,
                        isPlaying: !1
                    }))
                }
                yt(t, e)
            }
        }
    }
}, function(t, e, n) {
    var r = n(126);
    t.exports = function(t, e, n) {
        "__proto__" == e && r ? r(t, e, {
            configurable: !0,
            enumerable: !0,
            value: n,
            writable: !0
        }) : t[e] = n
    }
}, function(t, e, n) {
    var r = n(11),
        i = function() {
            try {
                var t = r(Object, "defineProperty");
                return t({}, "", {}), t
            } catch (t) {}
        }();
    t.exports = i
}, function(t, e, n) {
    var r = n(8),
        i = Object.create,
        o = function() {
            function t() {}
            return function(e) {
                if (!r(e)) return {};
                if (i) return i(e);
                t.prototype = e;
                var n = new t;
                return t.prototype = void 0, n
            }
        }();
    t.exports = o
}, function(t, e, n) {
    var r = n(324),
        i = n(325),
        o = r ? function(t) {
            return r.get(t)
        } : i;
    t.exports = o
}, function(t, e, n) {
    var r = n(326),
        i = Object.prototype.hasOwnProperty;
    t.exports = function(t) {
        for (var e = t.name + "", n = r[e], o = i.call(r, e) ? n.length : 0; o--;) {
            var a = n[o],
                u = a.func;
            if (null == u || u == t) return a.name
        }
        return e
    }
}, function(t, e, n) {
    n(131), n(133), n(134), n(135), n(39), n(137), n(333), n(334), n(335), n(336), t.exports = n(337)
}, function(t, e, n) {
    "use strict";
    var r = n(4);
    r.define("brand", t.exports = function(t) {
        var e, n = {},
            i = document,
            o = t("html"),
            a = t("body"),
            u = ".w-webflow-badge",
            c = window.location,
            s = /PhantomJS/i.test(navigator.userAgent),
            f = "fullscreenchange webkitfullscreenchange mozfullscreenchange msfullscreenchange";

        function l() {
            var n = i.fullScreen || i.mozFullScreen || i.webkitIsFullScreen || i.msFullscreenElement || Boolean(i.webkitFullscreenElement);
            t(e).attr("style", n ? "display: none !important;" : "")
        }

        function d() {
            var t = a.children(u),
                n = t.length && t.get(0) === e,
                i = r.env("editor");
            n ? i && t.remove() : (t.length && t.remove(), i || a.append(e))
        }
        return n.ready = function() {
            var n, r, a, u = o.attr("data-wf-status"),
                p = o.attr("data-wf-domain") || "";
            /\.webflow\.io$/i.test(p) && c.hostname !== p && (u = !0), u && !s && (e = e || (n = t('<a class="w-webflow-badge"></a>').attr("href", "https://webflow.com?utm_campaign=brandjs"), r = t("<img>").attr("src", "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-icon.f67cd735e3.svg").attr("alt", "").css({
                marginRight: "8px",
                width: "16px"
            }), a = t("<img>").attr("src", "https://d1otoma47x30pg.cloudfront.net/img/webflow-badge-text.6faa6a38cd.svg").attr("alt", "Made in Webflow"), n.append(r, a), n[0]), d(), setTimeout(d, 500), t(i).off(f, l).on(f, l))
        }, n
    })
}, function(t, e, n) {
    "use strict";
    var r = window.$,
        i = n(69) && r.tram;
    /*!
     * Webflow._ (aka) Underscore.js 1.6.0 (custom build)
     * _.each
     * _.map
     * _.find
     * _.filter
     * _.any
     * _.contains
     * _.delay
     * _.defer
     * _.throttle (webflow)
     * _.debounce
     * _.keys
     * _.has
     * _.now
     *
     * http://underscorejs.org
     * (c) 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
     * Underscore may be freely distributed under the MIT license.
     * @license MIT
     */
    t.exports = function() {
        var t = {
                VERSION: "1.6.0-Webflow"
            },
            e = {},
            n = Array.prototype,
            r = Object.prototype,
            o = Function.prototype,
            a = (n.push, n.slice),
            u = (n.concat, r.toString, r.hasOwnProperty),
            c = n.forEach,
            s = n.map,
            f = (n.reduce, n.reduceRight, n.filter),
            l = (n.every, n.some),
            d = n.indexOf,
            p = (n.lastIndexOf, Array.isArray, Object.keys),
            v = (o.bind, t.each = t.forEach = function(n, r, i) {
                if (null == n) return n;
                if (c && n.forEach === c) n.forEach(r, i);
                else if (n.length === +n.length) {
                    for (var o = 0, a = n.length; o < a; o++)
                        if (r.call(i, n[o], o, n) === e) return
                } else {
                    var u = t.keys(n);
                    for (o = 0, a = u.length; o < a; o++)
                        if (r.call(i, n[u[o]], u[o], n) === e) return
                }
                return n
            });
        t.map = t.collect = function(t, e, n) {
            var r = [];
            return null == t ? r : s && t.map === s ? t.map(e, n) : (v(t, function(t, i, o) {
                r.push(e.call(n, t, i, o))
            }), r)
        }, t.find = t.detect = function(t, e, n) {
            var r;
            return h(t, function(t, i, o) {
                if (e.call(n, t, i, o)) return r = t, !0
            }), r
        }, t.filter = t.select = function(t, e, n) {
            var r = [];
            return null == t ? r : f && t.filter === f ? t.filter(e, n) : (v(t, function(t, i, o) {
                e.call(n, t, i, o) && r.push(t)
            }), r)
        };
        var h = t.some = t.any = function(n, r, i) {
            r || (r = t.identity);
            var o = !1;
            return null == n ? o : l && n.some === l ? n.some(r, i) : (v(n, function(t, n, a) {
                if (o || (o = r.call(i, t, n, a))) return e
            }), !!o)
        };
        t.contains = t.include = function(t, e) {
            return null != t && (d && t.indexOf === d ? -1 != t.indexOf(e) : h(t, function(t) {
                return t === e
            }))
        }, t.delay = function(t, e) {
            var n = a.call(arguments, 2);
            return setTimeout(function() {
                return t.apply(null, n)
            }, e)
        }, t.defer = function(e) {
            return t.delay.apply(t, [e, 1].concat(a.call(arguments, 1)))
        }, t.throttle = function(t) {
            var e, n, r;
            return function() {
                e || (e = !0, n = arguments, r = this, i.frame(function() {
                    e = !1, t.apply(r, n)
                }))
            }
        }, t.debounce = function(e, n, r) {
            var i, o, a, u, c, s = function s() {
                var f = t.now() - u;
                f < n ? i = setTimeout(s, n - f) : (i = null, r || (c = e.apply(a, o), a = o = null))
            };
            return function() {
                a = this, o = arguments, u = t.now();
                var f = r && !i;
                return i || (i = setTimeout(s, n)), f && (c = e.apply(a, o), a = o = null), c
            }
        }, t.defaults = function(e) {
            if (!t.isObject(e)) return e;
            for (var n = 1, r = arguments.length; n < r; n++) {
                var i = arguments[n];
                for (var o in i) void 0 === e[o] && (e[o] = i[o])
            }
            return e
        }, t.keys = function(e) {
            if (!t.isObject(e)) return [];
            if (p) return p(e);
            var n = [];
            for (var r in e) t.has(e, r) && n.push(r);
            return n
        }, t.has = function(t, e) {
            return u.call(t, e)
        }, t.isObject = function(t) {
            return t === Object(t)
        }, t.now = Date.now || function() {
            return (new Date).getTime()
        }, t.templateSettings = {
            evaluate: /<%([\s\S]+?)%>/g,
            interpolate: /<%=([\s\S]+?)%>/g,
            escape: /<%-([\s\S]+?)%>/g
        };
        var E = /(.)^/,
            g = {
                "'": "'",
                "\\": "\\",
                "\r": "r",
                "\n": "n",
                "\u2028": "u2028",
                "\u2029": "u2029"
            },
            _ = /\\|'|\r|\n|\u2028|\u2029/g,
            y = function(t) {
                return "\\" + g[t]
            };
        return t.template = function(e, n, r) {
            !n && r && (n = r), n = t.defaults({}, n, t.templateSettings);
            var i = RegExp([(n.escape || E).source, (n.interpolate || E).source, (n.evaluate || E).source].join("|") + "|$", "g"),
                o = 0,
                a = "__p+='";
            e.replace(i, function(t, n, r, i, u) {
                return a += e.slice(o, u).replace(_, y), o = u + t.length, n ? a += "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'" : r ? a += "'+\n((__t=(" + r + "))==null?'':__t)+\n'" : i && (a += "';\n" + i + "\n__p+='"), t
            }), a += "';\n", n.variable || (a = "with(obj||{}){\n" + a + "}\n"), a = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + a + "return __p;\n";
            try {
                var u = new Function(n.variable || "obj", "_", a)
            } catch (t) {
                throw t.source = a, t
            }
            var c = function(e) {
                    return u.call(this, e, t)
                },
                s = n.variable || "obj";
            return c.source = "function(" + s + "){\n" + a + "}", c
        }, t
    }()
}, function(t, e, n) {
    "use strict";
    n(4).define("focus-visible", t.exports = function() {
        function t(t) {
            var e = !0,
                n = !1,
                r = null,
                i = {
                    text: !0,
                    search: !0,
                    url: !0,
                    tel: !0,
                    email: !0,
                    password: !0,
                    number: !0,
                    date: !0,
                    month: !0,
                    week: !0,
                    time: !0,
                    datetime: !0,
                    "datetime-local": !0
                };

            function o(t) {
                return !!(t && t !== document && "HTML" !== t.nodeName && "BODY" !== t.nodeName && "classList" in t && "contains" in t.classList)
            }

            function a(t) {
                t.getAttribute("data-wf-focus-visible") || t.setAttribute("data-wf-focus-visible", "true")
            }

            function u() {
                e = !1
            }

            function c() {
                document.addEventListener("mousemove", s), document.addEventListener("mousedown", s), document.addEventListener("mouseup", s), document.addEventListener("pointermove", s), document.addEventListener("pointerdown", s), document.addEventListener("pointerup", s), document.addEventListener("touchmove", s), document.addEventListener("touchstart", s), document.addEventListener("touchend", s)
            }

            function s(t) {
                t.target.nodeName && "html" === t.target.nodeName.toLowerCase() || (e = !1, document.removeEventListener("mousemove", s), document.removeEventListener("mousedown", s), document.removeEventListener("mouseup", s), document.removeEventListener("pointermove", s), document.removeEventListener("pointerdown", s), document.removeEventListener("pointerup", s), document.removeEventListener("touchmove", s), document.removeEventListener("touchstart", s), document.removeEventListener("touchend", s))
            }
            document.addEventListener("keydown", function(n) {
                n.metaKey || n.altKey || n.ctrlKey || (o(t.activeElement) && a(t.activeElement), e = !0)
            }, !0), document.addEventListener("mousedown", u, !0), document.addEventListener("pointerdown", u, !0), document.addEventListener("touchstart", u, !0), document.addEventListener("visibilitychange", function() {
                "hidden" === document.visibilityState && (n && (e = !0), c())
            }, !0), c(), t.addEventListener("focus", function(t) {
                var n, r, u;
                o(t.target) && (e || (n = t.target, r = n.type, "INPUT" === (u = n.tagName) && i[r] && !n.readOnly || "TEXTAREA" === u && !n.readOnly || n.isContentEditable)) && a(t.target)
            }, !0), t.addEventListener("blur", function(t) {
                var e;
                o(t.target) && t.target.hasAttribute("data-wf-focus-visible") && (n = !0, window.clearTimeout(r), r = window.setTimeout(function() {
                    n = !1
                }, 100), (e = t.target).getAttribute("data-wf-focus-visible") && e.removeAttribute("data-wf-focus-visible"))
            }, !0)
        }
        return {
            ready: function() {
                if ("undefined" != typeof document) try {
                    document.querySelector(":focus-visible")
                } catch (e) {
                    t(document)
                }
            }
        }
    })
}, function(t, e, n) {
    "use strict";
    n(4).define("focus-within", t.exports = function() {
        function t(t) {
            for (var e = [t], n = null; n = t.parentNode || t.host || t.defaultView;) e.push(n), t = n;
            return e
        }

        function e(t) {
            "function" != typeof t.getAttribute || t.getAttribute("data-wf-focus-within") || t.setAttribute("data-wf-focus-within", "true")
        }

        function n(t) {
            "function" == typeof t.getAttribute && t.getAttribute("data-wf-focus-within") && t.removeAttribute("data-wf-focus-within")
        }
        return {
            ready: function() {
                if ("undefined" != typeof document && document.body.hasAttribute("data-wf-focus-within")) try {
                    document.querySelector(":focus-within")
                } catch (i) {
                    r = function(r) {
                        var i;
                        i || (window.requestAnimationFrame(function() {
                            i = !1, "blur" === r.type && Array.prototype.slice.call(t(r.target)).forEach(n), "focus" === r.type && Array.prototype.slice.call(t(r.target)).forEach(e)
                        }), i = !0)
                    }, document.addEventListener("focus", r, !0), document.addEventListener("blur", r, !0), e(document.body)
                }
                var r
            }
        }
    })
}, function(t, e, n) {
    "use strict";
    var r = n(4);
    r.define("focus", t.exports = function() {
        var t = [],
            e = !1;

        function n(n) {
            e && (n.preventDefault(), n.stopPropagation(), n.stopImmediatePropagation(), t.unshift(n))
        }

        function i(n) {
            (function(t) {
                var e = t.target,
                    n = e.tagName;
                return /^a$/i.test(n) && null != e.href || /^(button|textarea)$/i.test(n) && !0 !== e.disabled || /^input$/i.test(n) && /^(button|reset|submit|radio|checkbox)$/i.test(e.type) && !e.disabled || !/^(button|input|textarea|select|a)$/i.test(n) && !Number.isNaN(Number.parseFloat(e.tabIndex)) || /^audio$/i.test(n) || /^video$/i.test(n) && !0 === e.controls
            })(n) && (e = !0, setTimeout(function() {
                for (e = !1, n.target.focus(); t.length > 0;) {
                    var r = t.pop();
                    r.target.dispatchEvent(new MouseEvent(r.type, r))
                }
            }, 0))
        }
        return {
            ready: function() {
                "undefined" != typeof document && document.body.hasAttribute("data-wf-focus-within") && r.env.safari && (document.addEventListener("mousedown", i, !0), document.addEventListener("mouseup", n, !0), document.addEventListener("click", n, !0))
            }
        }
    })
}, function(t, e, n) {
    "use strict";
    var r = window.jQuery,
        i = {},
        o = [],
        a = {
            reset: function(t, e) {
                e.__wf_intro = null
            },
            intro: function(t, e) {
                e.__wf_intro || (e.__wf_intro = !0, r(e).triggerHandler(i.types.INTRO))
            },
            outro: function(t, e) {
                e.__wf_intro && (e.__wf_intro = null, r(e).triggerHandler(i.types.OUTRO))
            }
        };
    i.triggers = {}, i.types = {
        INTRO: "w-ix-intro.w-ix",
        OUTRO: "w-ix-outro.w-ix"
    }, i.init = function() {
        for (var t = o.length, e = 0; e < t; e++) {
            var n = o[e];
            n[0](0, n[1])
        }
        o = [], r.extend(i.triggers, a)
    }, i.async = function() {
        for (var t in a) {
            var e = a[t];
            a.hasOwnProperty(t) && (i.triggers[t] = function(t, n) {
                o.push([e, n])
            })
        }
    }, i.async(), t.exports = i
}, function(t, e, n) {
    "use strict";
    var r = n(4),
        i = n(138);
    i.setEnv(r.env), r.define("ix2", t.exports = function() {
        return i
    })
}, function(t, e, n) {
    "use strict";
    var r = n(17),
        i = n(1);
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.setEnv = function(t) {
        t() && (0, u.observeRequests)(s)
    }, e.init = function(t) {
        f(), (0, u.startEngine)({
            store: s,
            rawData: t,
            allowEvents: !0
        })
    }, e.destroy = f, e.actions = e.store = void 0, n(139);
    var o = n(87),
        a = i(n(186)),
        u = n(124),
        c = r(n(65));
    e.actions = c;
    var s = (0, o.createStore)(a.default);

    function f() {
        (0, u.stopEngine)(s)
    }
    e.store = s
}, function(t, e, n) {
    var r = n(140);
    t.exports = r
}, function(t, e, n) {
    var r = n(141);
    t.exports = r
}, function(t, e, n) {
    n(142);
    var r = n(174);
    t.exports = r("Array", "includes")
}, function(t, e, n) {
    "use strict";
    var r = n(143),
        i = n(85).includes,
        o = n(169);
    r({
        target: "Array",
        proto: !0
    }, {
        includes: function(t) {
            return i(this, t, arguments.length > 1 ? arguments[1] : void 0)
        }
    }), o("includes")
}, function(t, e, n) {
    var r = n(0),
        i = n(70).f,
        o = n(43),
        a = n(157),
        u = n(42),
        c = n(161),
        s = n(168);
    t.exports = function(t, e) {
        var n, f, l, d, p, v = t.target,
            h = t.global,
            E = t.stat;
        if (n = h ? r : E ? r[v] || u(v, {}) : (r[v] || {}).prototype)
            for (f in e) {
                if (d = e[f], l = t.noTargetGet ? (p = i(n, f)) && p.value : n[f], !s(h ? f : v + (E ? "." : "#") + f, t.forced) && void 0 !== l) {
                    if (typeof d == typeof l) continue;
                    c(d, l)
                }(t.sham || l && l.sham) && o(d, "sham", !0), a(n, f, d, t)
            }
    }
}, function(t, e, n) {
    "use strict";
    var r = {}.propertyIsEnumerable,
        i = Object.getOwnPropertyDescriptor,
        o = i && !r.call({
            1: 2
        }, 1);
    e.f = o ? function(t) {
        var e = i(this, t);
        return !!e && e.enumerable
    } : r
}, function(t, e, n) {
    var r = n(0),
        i = n(5),
        o = n(18),
        a = n(146),
        u = r.Object,
        c = i("".split);
    t.exports = o(function() {
        return !u("z").propertyIsEnumerable(0)
    }) ? function(t) {
        return "String" == a(t) ? c(t, "") : u(t)
    } : u
}, function(t, e, n) {
    var r = n(5),
        i = r({}.toString),
        o = r("".slice);
    t.exports = function(t) {
        return o(i(t), 8, -1)
    }
}, function(t, e, n) {
    var r = n(0),
        i = n(40),
        o = n(19),
        a = n(74),
        u = n(151),
        c = n(154),
        s = n(77),
        f = r.TypeError,
        l = s("toPrimitive");
    t.exports = function(t, e) {
        if (!o(t) || a(t)) return t;
        var n, r = u(t, l);
        if (r) {
            if (void 0 === e && (e = "default"), n = i(r, t, e), !o(n) || a(n)) return n;
            throw f("Can't convert object to primitive value")
        }
        return void 0 === e && (e = "number"), c(t, e)
    }
}, function(t, e, n) {
    var r = n(5);
    t.exports = r({}.isPrototypeOf)
}, function(t, e, n) {
    var r, i, o = n(0),
        a = n(150),
        u = o.process,
        c = o.Deno,
        s = u && u.versions || c && c.version,
        f = s && s.v8;
    f && (i = (r = f.split("."))[0] > 0 && r[0] < 4 ? 1 : +(r[0] + r[1])), !i && a && (!(r = a.match(/Edge\/(\d+)/)) || r[1] >= 74) && (r = a.match(/Chrome\/(\d+)/)) && (i = +r[1]), t.exports = i
}, function(t, e, n) {
    var r = n(27);
    t.exports = r("navigator", "userAgent") || ""
}, function(t, e, n) {
    var r = n(152);
    t.exports = function(t, e) {
        var n = t[e];
        return null == n ? void 0 : r(n)
    }
}, function(t, e, n) {
    var r = n(0),
        i = n(7),
        o = n(153),
        a = r.TypeError;
    t.exports = function(t) {
        if (i(t)) return t;
        throw a(o(t) + " is not a function")
    }
}, function(t, e, n) {
    var r = n(0).String;
    t.exports = function(t) {
        try {
            return r(t)
        } catch (t) {
            return "Object"
        }
    }
}, function(t, e, n) {
    var r = n(0),
        i = n(40),
        o = n(7),
        a = n(19),
        u = r.TypeError;
    t.exports = function(t, e) {
        var n, r;
        if ("string" === e && o(n = t.toString) && !a(r = i(n, t))) return r;
        if (o(n = t.valueOf) && !a(r = i(n, t))) return r;
        if ("string" !== e && o(n = t.toString) && !a(r = i(n, t))) return r;
        throw u("Can't convert object to primitive value")
    }
}, function(t, e) {
    t.exports = !1
}, function(t, e, n) {
    var r = n(0),
        i = n(72),
        o = r.Object;
    t.exports = function(t) {
        return o(i(t))
    }
}, function(t, e, n) {
    var r = n(0),
        i = n(7),
        o = n(9),
        a = n(43),
        u = n(42),
        c = n(82),
        s = n(158),
        f = n(160).CONFIGURABLE,
        l = s.get,
        d = s.enforce,
        p = String(String).split("String");
    (t.exports = function(t, e, n, c) {
        var s, l = !!c && !!c.unsafe,
            v = !!c && !!c.enumerable,
            h = !!c && !!c.noTargetGet,
            E = c && void 0 !== c.name ? c.name : e;
        i(n) && ("Symbol(" === String(E).slice(0, 7) && (E = "[" + String(E).replace(/^Symbol\(([^)]*)\)/, "$1") + "]"), (!o(n, "name") || f && n.name !== E) && a(n, "name", E), (s = d(n)).source || (s.source = p.join("string" == typeof E ? E : ""))), t !== r ? (l ? !h && t[e] && (v = !0) : delete t[e], v ? t[e] = n : a(t, e, n)) : v ? t[e] = n : u(e, n)
    })(Function.prototype, "toString", function() {
        return i(this) && l(this).source || c(this)
    })
}, function(t, e, n) {
    var r, i, o, a = n(159),
        u = n(0),
        c = n(5),
        s = n(19),
        f = n(43),
        l = n(9),
        d = n(41),
        p = n(83),
        v = n(44),
        h = u.TypeError,
        E = u.WeakMap;
    if (a || d.state) {
        var g = d.state || (d.state = new E),
            _ = c(g.get),
            y = c(g.has),
            m = c(g.set);
        r = function(t, e) {
            if (y(g, t)) throw new h("Object already initialized");
            return e.facade = t, m(g, t, e), e
        }, i = function(t) {
            return _(g, t) || {}
        }, o = function(t) {
            return y(g, t)
        }
    } else {
        var I = p("state");
        v[I] = !0, r = function(t, e) {
            if (l(t, I)) throw new h("Object already initialized");
            return e.facade = t, f(t, I, e), e
        }, i = function(t) {
            return l(t, I) ? t[I] : {}
        }, o = function(t) {
            return l(t, I)
        }
    }
    t.exports = {
        set: r,
        get: i,
        has: o,
        enforce: function(t) {
            return o(t) ? i(t) : r(t, {})
        },
        getterFor: function(t) {
            return function(e) {
                var n;
                if (!s(e) || (n = i(e)).type !== t) throw h("Incompatible receiver, " + t + " required");
                return n
            }
        }
    }
}, function(t, e, n) {
    var r = n(0),
        i = n(7),
        o = n(82),
        a = r.WeakMap;
    t.exports = i(a) && /native code/.test(o(a))
}, function(t, e, n) {
    var r = n(13),
        i = n(9),
        o = Function.prototype,
        a = r && Object.getOwnPropertyDescriptor,
        u = i(o, "name"),
        c = u && "something" === function() {}.name,
        s = u && (!r || r && a(o, "name").configurable);
    t.exports = {
        EXISTS: u,
        PROPER: c,
        CONFIGURABLE: s
    }
}, function(t, e, n) {
    var r = n(9),
        i = n(162),
        o = n(70),
        a = n(28);
    t.exports = function(t, e) {
        for (var n = i(e), u = a.f, c = o.f, s = 0; s < n.length; s++) {
            var f = n[s];
            r(t, f) || u(t, f, c(e, f))
        }
    }
}, function(t, e, n) {
    var r = n(27),
        i = n(5),
        o = n(163),
        a = n(167),
        u = n(29),
        c = i([].concat);
    t.exports = r("Reflect", "ownKeys") || function(t) {
        var e = o.f(u(t)),
            n = a.f;
        return n ? c(e, n(t)) : e
    }
}, function(t, e, n) {
    var r = n(84),
        i = n(45).concat("length", "prototype");
    e.f = Object.getOwnPropertyNames || function(t) {
        return r(t, i)
    }
}, function(t, e, n) {
    var r = n(86),
        i = Math.max,
        o = Math.min;
    t.exports = function(t, e) {
        var n = r(t);
        return n < 0 ? i(n + e, 0) : o(n, e)
    }
}, function(t, e, n) {
    var r = n(166);
    t.exports = function(t) {
        return r(t.length)
    }
}, function(t, e, n) {
    var r = n(86),
        i = Math.min;
    t.exports = function(t) {
        return t > 0 ? i(r(t), 9007199254740991) : 0
    }
}, function(t, e) {
    e.f = Object.getOwnPropertySymbols
}, function(t, e, n) {
    var r = n(18),
        i = n(7),
        o = /#|\.prototype\./,
        a = function(t, e) {
            var n = c[u(t)];
            return n == f || n != s && (i(e) ? r(e) : !!e)
        },
        u = a.normalize = function(t) {
            return String(t).replace(o, ".").toLowerCase()
        },
        c = a.data = {},
        s = a.NATIVE = "N",
        f = a.POLYFILL = "P";
    t.exports = a
}, function(t, e, n) {
    var r = n(77),
        i = n(170),
        o = n(28),
        a = r("unscopables"),
        u = Array.prototype;
    null == u[a] && o.f(u, a, {
        configurable: !0,
        value: i(null)
    }), t.exports = function(t) {
        u[a][t] = !0
    }
}, function(t, e, n) {
    var r, i = n(29),
        o = n(171),
        a = n(45),
        u = n(44),
        c = n(173),
        s = n(81),
        f = n(83),
        l = f("IE_PROTO"),
        d = function() {},
        p = function(t) {
            return "<script>" + t + "<\/script>"
        },
        v = function(t) {
            t.write(p("")), t.close();
            var e = t.parentWindow.Object;
            return t = null, e
        },
        h = function() {
            try {
                r = new ActiveXObject("htmlfile")
            } catch (t) {}
            var t, e;
            h = "undefined" != typeof document ? document.domain && r ? v(r) : ((e = s("iframe")).style.display = "none", c.appendChild(e), e.src = String("javascript:"), (t = e.contentWindow.document).open(), t.write(p("document.F=Object")), t.close(), t.F) : v(r);
            for (var n = a.length; n--;) delete h.prototype[a[n]];
            return h()
        };
    u[l] = !0, t.exports = Object.create || function(t, e) {
        var n;
        return null !== t ? (d.prototype = i(t), n = new d, d.prototype = null, n[l] = t) : n = h(), void 0 === e ? n : o(n, e)
    }
}, function(t, e, n) {
    var r = n(13),
        i = n(28),
        o = n(29),
        a = n(26),
        u = n(172);
    t.exports = r ? Object.defineProperties : function(t, e) {
        o(t);
        for (var n, r = a(e), c = u(e), s = c.length, f = 0; s > f;) i.f(t, n = c[f++], r[n]);
        return t
    }
}, function(t, e, n) {
    var r = n(84),
        i = n(45);
    t.exports = Object.keys || function(t) {
        return r(t, i)
    }
}, function(t, e, n) {
    var r = n(27);
    t.exports = r("document", "documentElement")
}, function(t, e, n) {
    var r = n(0),
        i = n(5);
    t.exports = function(t, e) {
        return i(r[t].prototype[e])
    }
}, function(t, e, n) {
    "use strict";
    n.r(e);
    var r = n(89),
        i = n(178),
        o = n(179),
        a = "[object Null]",
        u = "[object Undefined]",
        c = r.default ? r.default.toStringTag : void 0;
    e.default = function(t) {
        return null == t ? void 0 === t ? u : a : c && c in Object(t) ? Object(i.default)(t) : Object(o.default)(t)
    }
}, function(t, e, n) {
    "use strict";
    n.r(e);
    var r = n(177),
        i = "object" == typeof self && self && self.Object === Object && self,
        o = r.default || i || Function("return this")();
    e.default = o
}, function(t, e, n) {
    "use strict";
    n.r(e),
        function(t) {
            var n = "object" == typeof t && t && t.Object === Object && t;
            e.default = n
        }.call(this, n(25))
}, function(t, e, n) {
    "use strict";
    n.r(e);
    var r = n(89),
        i = Object.prototype,
        o = i.hasOwnProperty,
        a = i.toString,
        u = r.default ? r.default.toStringTag : void 0;
    e.default = function(t) {
        var e = o.call(t, u),
            n = t[u];
        try {
            t[u] = void 0;
            var r = !0
        } catch (t) {}
        var i = a.call(t);
        return r && (e ? t[u] = n : delete t[u]), i
    }
}, function(t, e, n) {
    "use strict";
    n.r(e);
    var r = Object.prototype.toString;
    e.default = function(t) {
        return r.call(t)
    }
}, function(t, e, n) {
    "use strict";
    n.r(e);
    var r = n(181),
        i = Object(r.default)(Object.getPrototypeOf, Object);
    e.default = i
}, function(t, e, n) {
    "use strict";
    n.r(e), e.default = function(t, e) {
        return function(n) {
            return t(e(n))
        }
    }
}, function(t, e, n) {
    "use strict";
    n.r(e), e.default = function(t) {
        return null != t && "object" == typeof t
    }
}, function(t, e, n) {
    "use strict";
    n.r(e),
        function(t, r) {
            var i, o = n(185);
            i = "undefined" != typeof self ? self : "undefined" != typeof window ? window : void 0 !== t ? t : r;
            var a = Object(o.default)(i);
            e.default = a
        }.call(this, n(25), n(184)(t))
}, function(t, e) {
    t.exports = function(t) {
        if (!t.webpackPolyfill) {
            var e = Object.create(t);
            e.children || (e.children = []), Object.defineProperty(e, "loaded", {
                enumerable: !0,
                get: function() {
                    return e.l
                }
            }), Object.defineProperty(e, "id", {
                enumerable: !0,
                get: function() {
                    return e.i
                }
            }), Object.defineProperty(e, "exports", {
                enumerable: !0
            }), e.webpackPolyfill = 1
        }
        return e
    }
}, function(t, e, n) {
    "use strict";

    function r(t) {
        var e, n = t.Symbol;
        return "function" == typeof n ? n.observable ? e = n.observable : (e = n("observable"), n.observable = e) : e = "@@observable", e
    }
    n.r(e), n.d(e, "default", function() {
        return r
    })
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0;
    var r = n(87),
        i = n(187),
        o = n(193),
        a = n(194),
        u = n(14),
        c = n(281),
        s = n(282),
        f = u.IX2ElementsReducer.ixElements,
        l = (0, r.combineReducers)({
            ixData: i.ixData,
            ixRequest: o.ixRequest,
            ixSession: a.ixSession,
            ixElements: f,
            ixInstances: c.ixInstances,
            ixParameters: s.ixParameters
        });
    e.default = l
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.ixData = void 0;
    var r = n(3).IX2EngineActionTypes.IX2_RAW_DATA_IMPORTED;
    e.ixData = function() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Object.freeze({}),
            e = arguments.length > 1 ? arguments[1] : void 0;
        switch (e.type) {
            case r:
                return e.payload.ixData || Object.freeze({});
            default:
                return t
        }
    }
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.QuickEffectDirectionConsts = e.QuickEffectIds = e.EventLimitAffectedElements = e.EventContinuousMouseAxes = e.EventBasedOn = e.EventAppliesTo = e.EventTypeConsts = void 0;
    e.EventTypeConsts = {
        NAVBAR_OPEN: "NAVBAR_OPEN",
        NAVBAR_CLOSE: "NAVBAR_CLOSE",
        TAB_ACTIVE: "TAB_ACTIVE",
        TAB_INACTIVE: "TAB_INACTIVE",
        SLIDER_ACTIVE: "SLIDER_ACTIVE",
        SLIDER_INACTIVE: "SLIDER_INACTIVE",
        DROPDOWN_OPEN: "DROPDOWN_OPEN",
        DROPDOWN_CLOSE: "DROPDOWN_CLOSE",
        MOUSE_CLICK: "MOUSE_CLICK",
        MOUSE_SECOND_CLICK: "MOUSE_SECOND_CLICK",
        MOUSE_DOWN: "MOUSE_DOWN",
        MOUSE_UP: "MOUSE_UP",
        MOUSE_OVER: "MOUSE_OVER",
        MOUSE_OUT: "MOUSE_OUT",
        MOUSE_MOVE: "MOUSE_MOVE",
        MOUSE_MOVE_IN_VIEWPORT: "MOUSE_MOVE_IN_VIEWPORT",
        SCROLL_INTO_VIEW: "SCROLL_INTO_VIEW",
        SCROLL_OUT_OF_VIEW: "SCROLL_OUT_OF_VIEW",
        SCROLLING_IN_VIEW: "SCROLLING_IN_VIEW",
        ECOMMERCE_CART_OPEN: "ECOMMERCE_CART_OPEN",
        ECOMMERCE_CART_CLOSE: "ECOMMERCE_CART_CLOSE",
        PAGE_START: "PAGE_START",
        PAGE_FINISH: "PAGE_FINISH",
        PAGE_SCROLL_UP: "PAGE_SCROLL_UP",
        PAGE_SCROLL_DOWN: "PAGE_SCROLL_DOWN",
        PAGE_SCROLL: "PAGE_SCROLL"
    };
    e.EventAppliesTo = {
        ELEMENT: "ELEMENT",
        CLASS: "CLASS",
        PAGE: "PAGE"
    };
    e.EventBasedOn = {
        ELEMENT: "ELEMENT",
        VIEWPORT: "VIEWPORT"
    };
    e.EventContinuousMouseAxes = {
        X_AXIS: "X_AXIS",
        Y_AXIS: "Y_AXIS"
    };
    e.EventLimitAffectedElements = {
        CHILDREN: "CHILDREN",
        SIBLINGS: "SIBLINGS",
        IMMEDIATE_CHILDREN: "IMMEDIATE_CHILDREN"
    };
    e.QuickEffectIds = {
        FADE_EFFECT: "FADE_EFFECT",
        SLIDE_EFFECT: "SLIDE_EFFECT",
        GROW_EFFECT: "GROW_EFFECT",
        SHRINK_EFFECT: "SHRINK_EFFECT",
        SPIN_EFFECT: "SPIN_EFFECT",
        FLY_EFFECT: "FLY_EFFECT",
        POP_EFFECT: "POP_EFFECT",
        FLIP_EFFECT: "FLIP_EFFECT",
        JIGGLE_EFFECT: "JIGGLE_EFFECT",
        PULSE_EFFECT: "PULSE_EFFECT",
        DROP_EFFECT: "DROP_EFFECT",
        BLINK_EFFECT: "BLINK_EFFECT",
        BOUNCE_EFFECT: "BOUNCE_EFFECT",
        FLIP_LEFT_TO_RIGHT_EFFECT: "FLIP_LEFT_TO_RIGHT_EFFECT",
        FLIP_RIGHT_TO_LEFT_EFFECT: "FLIP_RIGHT_TO_LEFT_EFFECT",
        RUBBER_BAND_EFFECT: "RUBBER_BAND_EFFECT",
        JELLO_EFFECT: "JELLO_EFFECT",
        GROW_BIG_EFFECT: "GROW_BIG_EFFECT",
        SHRINK_BIG_EFFECT: "SHRINK_BIG_EFFECT",
        PLUGIN_LOTTIE_EFFECT: "PLUGIN_LOTTIE_EFFECT"
    };
    e.QuickEffectDirectionConsts = {
        LEFT: "LEFT",
        RIGHT: "RIGHT",
        BOTTOM: "BOTTOM",
        TOP: "TOP",
        BOTTOM_LEFT: "BOTTOM_LEFT",
        BOTTOM_RIGHT: "BOTTOM_RIGHT",
        TOP_RIGHT: "TOP_RIGHT",
        TOP_LEFT: "TOP_LEFT",
        CLOCKWISE: "CLOCKWISE",
        COUNTER_CLOCKWISE: "COUNTER_CLOCKWISE"
    }
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.InteractionTypeConsts = void 0;
    e.InteractionTypeConsts = {
        MOUSE_CLICK_INTERACTION: "MOUSE_CLICK_INTERACTION",
        MOUSE_HOVER_INTERACTION: "MOUSE_HOVER_INTERACTION",
        MOUSE_MOVE_INTERACTION: "MOUSE_MOVE_INTERACTION",
        SCROLL_INTO_VIEW_INTERACTION: "SCROLL_INTO_VIEW_INTERACTION",
        SCROLLING_IN_VIEW_INTERACTION: "SCROLLING_IN_VIEW_INTERACTION",
        MOUSE_MOVE_IN_VIEWPORT_INTERACTION: "MOUSE_MOVE_IN_VIEWPORT_INTERACTION",
        PAGE_IS_SCROLLING_INTERACTION: "PAGE_IS_SCROLLING_INTERACTION",
        PAGE_LOAD_INTERACTION: "PAGE_LOAD_INTERACTION",
        PAGE_SCROLLED_INTERACTION: "PAGE_SCROLLED_INTERACTION",
        NAVBAR_INTERACTION: "NAVBAR_INTERACTION",
        DROPDOWN_INTERACTION: "DROPDOWN_INTERACTION",
        ECOMMERCE_CART_INTERACTION: "ECOMMERCE_CART_INTERACTION",
        TAB_INTERACTION: "TAB_INTERACTION",
        SLIDER_INTERACTION: "SLIDER_INTERACTION"
    }
}, function(t, e, n) {
    "use strict";
    var r, i = n(1)(n(20));
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.ReducedMotionTypes = void 0;
    var o = n(94).ActionTypeConsts,
        a = o.TRANSFORM_MOVE,
        u = o.TRANSFORM_SCALE,
        c = o.TRANSFORM_ROTATE,
        s = o.TRANSFORM_SKEW,
        f = o.STYLE_SIZE,
        l = o.STYLE_FILTER,
        d = (r = {}, (0, i.default)(r, a, !0), (0, i.default)(r, u, !0), (0, i.default)(r, c, !0), (0, i.default)(r, s, !0), (0, i.default)(r, f, !0), (0, i.default)(r, l, !0), r);
    e.ReducedMotionTypes = d
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.IX2_TEST_FRAME_RENDERED = e.IX2_MEDIA_QUERIES_DEFINED = e.IX2_VIEWPORT_WIDTH_CHANGED = e.IX2_ACTION_LIST_PLAYBACK_CHANGED = e.IX2_ELEMENT_STATE_CHANGED = e.IX2_INSTANCE_REMOVED = e.IX2_INSTANCE_STARTED = e.IX2_INSTANCE_ADDED = e.IX2_PARAMETER_CHANGED = e.IX2_ANIMATION_FRAME_CHANGED = e.IX2_EVENT_STATE_CHANGED = e.IX2_EVENT_LISTENER_ADDED = e.IX2_CLEAR_REQUESTED = e.IX2_STOP_REQUESTED = e.IX2_PLAYBACK_REQUESTED = e.IX2_PREVIEW_REQUESTED = e.IX2_SESSION_STOPPED = e.IX2_SESSION_STARTED = e.IX2_SESSION_INITIALIZED = e.IX2_RAW_DATA_IMPORTED = void 0;
    e.IX2_RAW_DATA_IMPORTED = "IX2_RAW_DATA_IMPORTED";
    e.IX2_SESSION_INITIALIZED = "IX2_SESSION_INITIALIZED";
    e.IX2_SESSION_STARTED = "IX2_SESSION_STARTED";
    e.IX2_SESSION_STOPPED = "IX2_SESSION_STOPPED";
    e.IX2_PREVIEW_REQUESTED = "IX2_PREVIEW_REQUESTED";
    e.IX2_PLAYBACK_REQUESTED = "IX2_PLAYBACK_REQUESTED";
    e.IX2_STOP_REQUESTED = "IX2_STOP_REQUESTED";
    e.IX2_CLEAR_REQUESTED = "IX2_CLEAR_REQUESTED";
    e.IX2_EVENT_LISTENER_ADDED = "IX2_EVENT_LISTENER_ADDED";
    e.IX2_EVENT_STATE_CHANGED = "IX2_EVENT_STATE_CHANGED";
    e.IX2_ANIMATION_FRAME_CHANGED = "IX2_ANIMATION_FRAME_CHANGED";
    e.IX2_PARAMETER_CHANGED = "IX2_PARAMETER_CHANGED";
    e.IX2_INSTANCE_ADDED = "IX2_INSTANCE_ADDED";
    e.IX2_INSTANCE_STARTED = "IX2_INSTANCE_STARTED";
    e.IX2_INSTANCE_REMOVED = "IX2_INSTANCE_REMOVED";
    e.IX2_ELEMENT_STATE_CHANGED = "IX2_ELEMENT_STATE_CHANGED";
    e.IX2_ACTION_LIST_PLAYBACK_CHANGED = "IX2_ACTION_LIST_PLAYBACK_CHANGED";
    e.IX2_VIEWPORT_WIDTH_CHANGED = "IX2_VIEWPORT_WIDTH_CHANGED";
    e.IX2_MEDIA_QUERIES_DEFINED = "IX2_MEDIA_QUERIES_DEFINED";
    e.IX2_TEST_FRAME_RENDERED = "IX2_TEST_FRAME_RENDERED"
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.RENDER_PLUGIN = e.RENDER_STYLE = e.RENDER_GENERAL = e.RENDER_TRANSFORM = e.ABSTRACT_NODE = e.PLAIN_OBJECT = e.HTML_ELEMENT = e.PRESERVE_3D = e.PARENT = e.SIBLINGS = e.IMMEDIATE_CHILDREN = e.CHILDREN = e.BAR_DELIMITER = e.COLON_DELIMITER = e.COMMA_DELIMITER = e.AUTO = e.WILL_CHANGE = e.FLEX = e.DISPLAY = e.COLOR = e.BORDER_COLOR = e.BACKGROUND = e.BACKGROUND_COLOR = e.HEIGHT = e.WIDTH = e.FILTER = e.OPACITY = e.SKEW_Y = e.SKEW_X = e.SKEW = e.ROTATE_Z = e.ROTATE_Y = e.ROTATE_X = e.SCALE_3D = e.SCALE_Z = e.SCALE_Y = e.SCALE_X = e.TRANSLATE_3D = e.TRANSLATE_Z = e.TRANSLATE_Y = e.TRANSLATE_X = e.TRANSFORM = e.CONFIG_UNIT = e.CONFIG_Z_UNIT = e.CONFIG_Y_UNIT = e.CONFIG_X_UNIT = e.CONFIG_VALUE = e.CONFIG_Z_VALUE = e.CONFIG_Y_VALUE = e.CONFIG_X_VALUE = e.BOUNDARY_SELECTOR = e.W_MOD_IX = e.W_MOD_JS = e.WF_PAGE = e.IX2_ID_DELIMITER = void 0;
    e.IX2_ID_DELIMITER = "|";
    e.WF_PAGE = "data-wf-page";
    e.W_MOD_JS = "w-mod-js";
    e.W_MOD_IX = "w-mod-ix";
    e.BOUNDARY_SELECTOR = ".w-dyn-item";
    e.CONFIG_X_VALUE = "xValue";
    e.CONFIG_Y_VALUE = "yValue";
    e.CONFIG_Z_VALUE = "zValue";
    e.CONFIG_VALUE = "value";
    e.CONFIG_X_UNIT = "xUnit";
    e.CONFIG_Y_UNIT = "yUnit";
    e.CONFIG_Z_UNIT = "zUnit";
    e.CONFIG_UNIT = "unit";
    e.TRANSFORM = "transform";
    e.TRANSLATE_X = "translateX";
    e.TRANSLATE_Y = "translateY";
    e.TRANSLATE_Z = "translateZ";
    e.TRANSLATE_3D = "translate3d";
    e.SCALE_X = "scaleX";
    e.SCALE_Y = "scaleY";
    e.SCALE_Z = "scaleZ";
    e.SCALE_3D = "scale3d";
    e.ROTATE_X = "rotateX";
    e.ROTATE_Y = "rotateY";
    e.ROTATE_Z = "rotateZ";
    e.SKEW = "skew";
    e.SKEW_X = "skewX";
    e.SKEW_Y = "skewY";
    e.OPACITY = "opacity";
    e.FILTER = "filter";
    e.WIDTH = "width";
    e.HEIGHT = "height";
    e.BACKGROUND_COLOR = "backgroundColor";
    e.BACKGROUND = "background";
    e.BORDER_COLOR = "borderColor";
    e.COLOR = "color";
    e.DISPLAY = "display";
    e.FLEX = "flex";
    e.WILL_CHANGE = "willChange";
    e.AUTO = "AUTO";
    e.COMMA_DELIMITER = ",";
    e.COLON_DELIMITER = ":";
    e.BAR_DELIMITER = "|";
    e.CHILDREN = "CHILDREN";
    e.IMMEDIATE_CHILDREN = "IMMEDIATE_CHILDREN";
    e.SIBLINGS = "SIBLINGS";
    e.PARENT = "PARENT";
    e.PRESERVE_3D = "preserve-3d";
    e.HTML_ELEMENT = "HTML_ELEMENT";
    e.PLAIN_OBJECT = "PLAIN_OBJECT";
    e.ABSTRACT_NODE = "ABSTRACT_NODE";
    e.RENDER_TRANSFORM = "RENDER_TRANSFORM";
    e.RENDER_GENERAL = "RENDER_GENERAL";
    e.RENDER_STYLE = "RENDER_STYLE";
    e.RENDER_PLUGIN = "RENDER_PLUGIN"
}, function(t, e, n) {
    "use strict";
    var r, i = n(1)(n(20)),
        o = n(1);
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.ixRequest = void 0;
    var a = o(n(30)),
        u = n(3),
        c = n(21),
        s = u.IX2EngineActionTypes,
        f = s.IX2_PREVIEW_REQUESTED,
        l = s.IX2_PLAYBACK_REQUESTED,
        d = s.IX2_STOP_REQUESTED,
        p = s.IX2_CLEAR_REQUESTED,
        v = {
            preview: {},
            playback: {},
            stop: {},
            clear: {}
        },
        h = Object.create(null, (r = {}, (0, i.default)(r, f, {
            value: "preview"
        }), (0, i.default)(r, l, {
            value: "playback"
        }), (0, i.default)(r, d, {
            value: "stop"
        }), (0, i.default)(r, p, {
            value: "clear"
        }), r));
    e.ixRequest = function() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : v,
            e = arguments.length > 1 ? arguments[1] : void 0;
        if (e.type in h) {
            var n = [h[e.type]];
            return (0, c.setIn)(t, [n], (0, a.default)({}, e.payload))
        }
        return t
    }
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.ixSession = void 0;
    var r = n(3),
        i = n(21),
        o = r.IX2EngineActionTypes,
        a = o.IX2_SESSION_INITIALIZED,
        u = o.IX2_SESSION_STARTED,
        c = o.IX2_TEST_FRAME_RENDERED,
        s = o.IX2_SESSION_STOPPED,
        f = o.IX2_EVENT_LISTENER_ADDED,
        l = o.IX2_EVENT_STATE_CHANGED,
        d = o.IX2_ANIMATION_FRAME_CHANGED,
        p = o.IX2_ACTION_LIST_PLAYBACK_CHANGED,
        v = o.IX2_VIEWPORT_WIDTH_CHANGED,
        h = o.IX2_MEDIA_QUERIES_DEFINED,
        E = {
            active: !1,
            tick: 0,
            eventListeners: [],
            eventState: {},
            playbackState: {},
            viewportWidth: 0,
            mediaQueryKey: null,
            hasBoundaryNodes: !1,
            hasDefinedMediaQueries: !1,
            reducedMotion: !1
        };
    e.ixSession = function() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : E,
            e = arguments.length > 1 ? arguments[1] : void 0;
        switch (e.type) {
            case a:
                var n = e.payload,
                    r = n.hasBoundaryNodes,
                    o = n.reducedMotion;
                return (0, i.merge)(t, {
                    hasBoundaryNodes: r,
                    reducedMotion: o
                });
            case u:
                return (0, i.set)(t, "active", !0);
            case c:
                var g = e.payload.step,
                    _ = void 0 === g ? 20 : g;
                return (0, i.set)(t, "tick", t.tick + _);
            case s:
                return E;
            case d:
                var y = e.payload.now;
                return (0, i.set)(t, "tick", y);
            case f:
                var m = (0, i.addLast)(t.eventListeners, e.payload);
                return (0, i.set)(t, "eventListeners", m);
            case l:
                var I = e.payload,
                    T = I.stateKey,
                    O = I.newState;
                return (0, i.setIn)(t, ["eventState", T], O);
            case p:
                var b = e.payload,
                    A = b.actionListId,
                    w = b.isPlaying;
                return (0, i.setIn)(t, ["playbackState", A], w);
            case v:
                for (var S = e.payload, R = S.width, N = S.mediaQueries, x = N.length, C = null, L = 0; L < x; L++) {
                    var P = N[L],
                        D = P.key,
                        M = P.min,
                        j = P.max;
                    if (R >= M && R <= j) {
                        C = D;
                        break
                    }
                }
                return (0, i.merge)(t, {
                    viewportWidth: R,
                    mediaQueryKey: C
                });
            case h:
                return (0, i.set)(t, "hasDefinedMediaQueries", !0);
            default:
                return t
        }
    }
}, function(t, e, n) {
    var r = n(196),
        i = n(248),
        o = n(111);
    t.exports = function(t) {
        var e = i(t);
        return 1 == e.length && e[0][2] ? o(e[0][0], e[0][1]) : function(n) {
            return n === t || r(n, t, e)
        }
    }
}, function(t, e, n) {
    var r = n(97),
        i = n(101),
        o = 1,
        a = 2;
    t.exports = function(t, e, n, u) {
        var c = n.length,
            s = c,
            f = !u;
        if (null == t) return !s;
        for (t = Object(t); c--;) {
            var l = n[c];
            if (f && l[2] ? l[1] !== t[l[0]] : !(l[0] in t)) return !1
        }
        for (; ++c < s;) {
            var d = (l = n[c])[0],
                p = t[d],
                v = l[1];
            if (f && l[2]) {
                if (void 0 === p && !(d in t)) return !1
            } else {
                var h = new r;
                if (u) var E = u(p, v, d, t, e, h);
                if (!(void 0 === E ? i(v, p, o | a, u, h) : E)) return !1
            }
        }
        return !0
    }
}, function(t, e) {
    t.exports = function() {
        this.__data__ = [], this.size = 0
    }
}, function(t, e, n) {
    var r = n(32),
        i = Array.prototype.splice;
    t.exports = function(t) {
        var e = this.__data__,
            n = r(e, t);
        return !(n < 0 || (n == e.length - 1 ? e.pop() : i.call(e, n, 1), --this.size, 0))
    }
}, function(t, e, n) {
    var r = n(32);
    t.exports = function(t) {
        var e = this.__data__,
            n = r(e, t);
        return n < 0 ? void 0 : e[n][1]
    }
}, function(t, e, n) {
    var r = n(32);
    t.exports = function(t) {
        return r(this.__data__, t) > -1
    }
}, function(t, e, n) {
    var r = n(32);
    t.exports = function(t, e) {
        var n = this.__data__,
            i = r(n, t);
        return i < 0 ? (++this.size, n.push([t, e])) : n[i][1] = e, this
    }
}, function(t, e, n) {
    var r = n(31);
    t.exports = function() {
        this.__data__ = new r, this.size = 0
    }
}, function(t, e) {
    t.exports = function(t) {
        var e = this.__data__,
            n = e.delete(t);
        return this.size = e.size, n
    }
}, function(t, e) {
    t.exports = function(t) {
        return this.__data__.get(t)
    }
}, function(t, e) {
    t.exports = function(t) {
        return this.__data__.has(t)
    }
}, function(t, e, n) {
    var r = n(31),
        i = n(50),
        o = n(51),
        a = 200;
    t.exports = function(t, e) {
        var n = this.__data__;
        if (n instanceof r) {
            var u = n.__data__;
            if (!i || u.length < a - 1) return u.push([t, e]), this.size = ++n.size, this;
            n = this.__data__ = new o(u)
        }
        return n.set(t, e), this.size = n.size, this
    }
}, function(t, e, n) {
    var r = n(98),
        i = n(210),
        o = n(8),
        a = n(100),
        u = /^\[object .+?Constructor\]$/,
        c = Function.prototype,
        s = Object.prototype,
        f = c.toString,
        l = s.hasOwnProperty,
        d = RegExp("^" + f.call(l).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
    t.exports = function(t) {
        return !(!o(t) || i(t)) && (r(t) ? d : u).test(a(t))
    }
}, function(t, e, n) {
    var r = n(22),
        i = Object.prototype,
        o = i.hasOwnProperty,
        a = i.toString,
        u = r ? r.toStringTag : void 0;
    t.exports = function(t) {
        var e = o.call(t, u),
            n = t[u];
        try {
            t[u] = void 0;
            var r = !0
        } catch (t) {}
        var i = a.call(t);
        return r && (e ? t[u] = n : delete t[u]), i
    }
}, function(t, e) {
    var n = Object.prototype.toString;
    t.exports = function(t) {
        return n.call(t)
    }
}, function(t, e, n) {
    var r, i = n(211),
        o = (r = /[^.]+$/.exec(i && i.keys && i.keys.IE_PROTO || "")) ? "Symbol(src)_1." + r : "";
    t.exports = function(t) {
        return !!o && o in t
    }
}, function(t, e, n) {
    var r = n(6)["__core-js_shared__"];
    t.exports = r
}, function(t, e) {
    t.exports = function(t, e) {
        return null == t ? void 0 : t[e]
    }
}, function(t, e, n) {
    var r = n(214),
        i = n(31),
        o = n(50);
    t.exports = function() {
        this.size = 0, this.__data__ = {
            hash: new r,
            map: new(o || i),
            string: new r
        }
    }
}, function(t, e, n) {
    var r = n(215),
        i = n(216),
        o = n(217),
        a = n(218),
        u = n(219);

    function c(t) {
        var e = -1,
            n = null == t ? 0 : t.length;
        for (this.clear(); ++e < n;) {
            var r = t[e];
            this.set(r[0], r[1])
        }
    }
    c.prototype.clear = r, c.prototype.delete = i, c.prototype.get = o, c.prototype.has = a, c.prototype.set = u, t.exports = c
}, function(t, e, n) {
    var r = n(33);
    t.exports = function() {
        this.__data__ = r ? r(null) : {}, this.size = 0
    }
}, function(t, e) {
    t.exports = function(t) {
        var e = this.has(t) && delete this.__data__[t];
        return this.size -= e ? 1 : 0, e
    }
}, function(t, e, n) {
    var r = n(33),
        i = "__lodash_hash_undefined__",
        o = Object.prototype.hasOwnProperty;
    t.exports = function(t) {
        var e = this.__data__;
        if (r) {
            var n = e[t];
            return n === i ? void 0 : n
        }
        return o.call(e, t) ? e[t] : void 0
    }
}, function(t, e, n) {
    var r = n(33),
        i = Object.prototype.hasOwnProperty;
    t.exports = function(t) {
        var e = this.__data__;
        return r ? void 0 !== e[t] : i.call(e, t)
    }
}, function(t, e, n) {
    var r = n(33),
        i = "__lodash_hash_undefined__";
    t.exports = function(t, e) {
        var n = this.__data__;
        return this.size += this.has(t) ? 0 : 1, n[t] = r && void 0 === e ? i : e, this
    }
}, function(t, e, n) {
    var r = n(34);
    t.exports = function(t) {
        var e = r(this, t).delete(t);
        return this.size -= e ? 1 : 0, e
    }
}, function(t, e) {
    t.exports = function(t) {
        var e = typeof t;
        return "string" == e || "number" == e || "symbol" == e || "boolean" == e ? "__proto__" !== t : null === t
    }
}, function(t, e, n) {
    var r = n(34);
    t.exports = function(t) {
        return r(this, t).get(t)
    }
}, function(t, e, n) {
    var r = n(34);
    t.exports = function(t) {
        return r(this, t).has(t)
    }
}, function(t, e, n) {
    var r = n(34);
    t.exports = function(t, e) {
        var n = r(this, t),
            i = n.size;
        return n.set(t, e), this.size += n.size == i ? 0 : 1, this
    }
}, function(t, e, n) {
    var r = n(97),
        i = n(102),
        o = n(231),
        a = n(235),
        u = n(59),
        c = n(2),
        s = n(53),
        f = n(55),
        l = 1,
        d = "[object Arguments]",
        p = "[object Array]",
        v = "[object Object]",
        h = Object.prototype.hasOwnProperty;
    t.exports = function(t, e, n, E, g, _) {
        var y = c(t),
            m = c(e),
            I = y ? p : u(t),
            T = m ? p : u(e),
            O = (I = I == d ? v : I) == v,
            b = (T = T == d ? v : T) == v,
            A = I == T;
        if (A && s(t)) {
            if (!s(e)) return !1;
            y = !0, O = !1
        }
        if (A && !O) return _ || (_ = new r), y || f(t) ? i(t, e, n, E, g, _) : o(t, e, I, n, E, g, _);
        if (!(n & l)) {
            var w = O && h.call(t, "__wrapped__"),
                S = b && h.call(e, "__wrapped__");
            if (w || S) {
                var R = w ? t.value() : t,
                    N = S ? e.value() : e;
                return _ || (_ = new r), g(R, N, n, E, _)
            }
        }
        return !!A && (_ || (_ = new r), a(t, e, n, E, g, _))
    }
}, function(t, e, n) {
    var r = n(51),
        i = n(227),
        o = n(228);

    function a(t) {
        var e = -1,
            n = null == t ? 0 : t.length;
        for (this.__data__ = new r; ++e < n;) this.add(t[e])
    }
    a.prototype.add = a.prototype.push = i, a.prototype.has = o, t.exports = a
}, function(t, e) {
    var n = "__lodash_hash_undefined__";
    t.exports = function(t) {
        return this.__data__.set(t, n), this
    }
}, function(t, e) {
    t.exports = function(t) {
        return this.__data__.has(t)
    }
}, function(t, e) {
    t.exports = function(t, e) {
        for (var n = -1, r = null == t ? 0 : t.length; ++n < r;)
            if (e(t[n], n, t)) return !0;
        return !1
    }
}, function(t, e) {
    t.exports = function(t, e) {
        return t.has(e)
    }
}, function(t, e, n) {
    var r = n(22),
        i = n(232),
        o = n(49),
        a = n(102),
        u = n(233),
        c = n(234),
        s = 1,
        f = 2,
        l = "[object Boolean]",
        d = "[object Date]",
        p = "[object Error]",
        v = "[object Map]",
        h = "[object Number]",
        E = "[object RegExp]",
        g = "[object Set]",
        _ = "[object String]",
        y = "[object Symbol]",
        m = "[object ArrayBuffer]",
        I = "[object DataView]",
        T = r ? r.prototype : void 0,
        O = T ? T.valueOf : void 0;
    t.exports = function(t, e, n, r, T, b, A) {
        switch (n) {
            case I:
                if (t.byteLength != e.byteLength || t.byteOffset != e.byteOffset) return !1;
                t = t.buffer, e = e.buffer;
            case m:
                return !(t.byteLength != e.byteLength || !b(new i(t), new i(e)));
            case l:
            case d:
            case h:
                return o(+t, +e);
            case p:
                return t.name == e.name && t.message == e.message;
            case E:
            case _:
                return t == e + "";
            case v:
                var w = u;
            case g:
                var S = r & s;
                if (w || (w = c), t.size != e.size && !S) return !1;
                var R = A.get(t);
                if (R) return R == e;
                r |= f, A.set(t, e);
                var N = a(w(t), w(e), r, T, b, A);
                return A.delete(t), N;
            case y:
                if (O) return O.call(t) == O.call(e)
        }
        return !1
    }
}, function(t, e, n) {
    var r = n(6).Uint8Array;
    t.exports = r
}, function(t, e) {
    t.exports = function(t) {
        var e = -1,
            n = Array(t.size);
        return t.forEach(function(t, r) {
            n[++e] = [r, t]
        }), n
    }
}, function(t, e) {
    t.exports = function(t) {
        var e = -1,
            n = Array(t.size);
        return t.forEach(function(t) {
            n[++e] = t
        }), n
    }
}, function(t, e, n) {
    var r = n(236),
        i = 1,
        o = Object.prototype.hasOwnProperty;
    t.exports = function(t, e, n, a, u, c) {
        var s = n & i,
            f = r(t),
            l = f.length;
        if (l != r(e).length && !s) return !1;
        for (var d = l; d--;) {
            var p = f[d];
            if (!(s ? p in e : o.call(e, p))) return !1
        }
        var v = c.get(t),
            h = c.get(e);
        if (v && h) return v == e && h == t;
        var E = !0;
        c.set(t, e), c.set(e, t);
        for (var g = s; ++d < l;) {
            var _ = t[p = f[d]],
                y = e[p];
            if (a) var m = s ? a(y, _, p, e, t, c) : a(_, y, p, t, e, c);
            if (!(void 0 === m ? _ === y || u(_, y, n, a, c) : m)) {
                E = !1;
                break
            }
            g || (g = "constructor" == p)
        }
        if (E && !g) {
            var I = t.constructor,
                T = e.constructor;
            I != T && "constructor" in t && "constructor" in e && !("function" == typeof I && I instanceof I && "function" == typeof T && T instanceof T) && (E = !1)
        }
        return c.delete(t), c.delete(e), E
    }
}, function(t, e, n) {
    var r = n(103),
        i = n(104),
        o = n(35);
    t.exports = function(t) {
        return r(t, o, i)
    }
}, function(t, e) {
    t.exports = function(t, e) {
        for (var n = -1, r = null == t ? 0 : t.length, i = 0, o = []; ++n < r;) {
            var a = t[n];
            e(a, n, t) && (o[i++] = a)
        }
        return o
    }
}, function(t, e) {
    t.exports = function(t, e) {
        for (var n = -1, r = Array(t); ++n < t;) r[n] = e(n);
        return r
    }
}, function(t, e, n) {
    var r = n(15),
        i = n(12),
        o = "[object Arguments]";
    t.exports = function(t) {
        return i(t) && r(t) == o
    }
}, function(t, e) {
    t.exports = function() {
        return !1
    }
}, function(t, e, n) {
    var r = n(15),
        i = n(56),
        o = n(12),
        a = {};
    a["[object Float32Array]"] = a["[object Float64Array]"] = a["[object Int8Array]"] = a["[object Int16Array]"] = a["[object Int32Array]"] = a["[object Uint8Array]"] = a["[object Uint8ClampedArray]"] = a["[object Uint16Array]"] = a["[object Uint32Array]"] = !0, a["[object Arguments]"] = a["[object Array]"] = a["[object ArrayBuffer]"] = a["[object Boolean]"] = a["[object DataView]"] = a["[object Date]"] = a["[object Error]"] = a["[object Function]"] = a["[object Map]"] = a["[object Number]"] = a["[object Object]"] = a["[object RegExp]"] = a["[object Set]"] = a["[object String]"] = a["[object WeakMap]"] = !1, t.exports = function(t) {
        return o(t) && i(t.length) && !!a[r(t)]
    }
}, function(t, e) {
    t.exports = function(t) {
        return function(e) {
            return t(e)
        }
    }
}, function(t, e, n) {
    (function(t) {
        var r = n(99),
            i = e && !e.nodeType && e,
            o = i && "object" == typeof t && t && !t.nodeType && t,
            a = o && o.exports === i && r.process,
            u = function() {
                try {
                    var t = o && o.require && o.require("util").types;
                    return t || a && a.binding && a.binding("util")
                } catch (t) {}
            }();
        t.exports = u
    }).call(this, n(107)(t))
}, function(t, e, n) {
    var r = n(108)(Object.keys, Object);
    t.exports = r
}, function(t, e, n) {
    var r = n(11)(n(6), "DataView");
    t.exports = r
}, function(t, e, n) {
    var r = n(11)(n(6), "Promise");
    t.exports = r
}, function(t, e, n) {
    var r = n(11)(n(6), "Set");
    t.exports = r
}, function(t, e, n) {
    var r = n(110),
        i = n(35);
    t.exports = function(t) {
        for (var e = i(t), n = e.length; n--;) {
            var o = e[n],
                a = t[o];
            e[n] = [o, a, r(a)]
        }
        return e
    }
}, function(t, e, n) {
    var r = n(101),
        i = n(60),
        o = n(255),
        a = n(62),
        u = n(110),
        c = n(111),
        s = n(23),
        f = 1,
        l = 2;
    t.exports = function(t, e) {
        return a(t) && u(e) ? c(s(t), e) : function(n) {
            var a = i(n, t);
            return void 0 === a && a === e ? o(n, t) : r(e, a, f | l)
        }
    }
}, function(t, e, n) {
    var r = n(251),
        i = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
        o = /\\(\\)?/g,
        a = r(function(t) {
            var e = [];
            return 46 === t.charCodeAt(0) && e.push(""), t.replace(i, function(t, n, r, i) {
                e.push(r ? i.replace(o, "$1") : n || t)
            }), e
        });
    t.exports = a
}, function(t, e, n) {
    var r = n(252),
        i = 500;
    t.exports = function(t) {
        var e = r(t, function(t) {
                return n.size === i && n.clear(), t
            }),
            n = e.cache;
        return e
    }
}, function(t, e, n) {
    var r = n(51),
        i = "Expected a function";

    function o(t, e) {
        if ("function" != typeof t || null != e && "function" != typeof e) throw new TypeError(i);
        var n = function() {
            var r = arguments,
                i = e ? e.apply(this, r) : r[0],
                o = n.cache;
            if (o.has(i)) return o.get(i);
            var a = t.apply(this, r);
            return n.cache = o.set(i, a) || o, a
        };
        return n.cache = new(o.Cache || r), n
    }
    o.Cache = r, t.exports = o
}, function(t, e, n) {
    var r = n(254);
    t.exports = function(t) {
        return null == t ? "" : r(t)
    }
}, function(t, e, n) {
    var r = n(22),
        i = n(112),
        o = n(2),
        a = n(38),
        u = 1 / 0,
        c = r ? r.prototype : void 0,
        s = c ? c.toString : void 0;
    t.exports = function t(e) {
        if ("string" == typeof e) return e;
        if (o(e)) return i(e, t) + "";
        if (a(e)) return s ? s.call(e) : "";
        var n = e + "";
        return "0" == n && 1 / e == -u ? "-0" : n
    }
}, function(t, e, n) {
    var r = n(256),
        i = n(257);
    t.exports = function(t, e) {
        return null != t && i(t, e, r)
    }
}, function(t, e) {
    t.exports = function(t, e) {
        return null != t && e in Object(t)
    }
}, function(t, e, n) {
    var r = n(37),
        i = n(36),
        o = n(2),
        a = n(54),
        u = n(56),
        c = n(23);
    t.exports = function(t, e, n) {
        for (var s = -1, f = (e = r(e, t)).length, l = !1; ++s < f;) {
            var d = c(e[s]);
            if (!(l = null != t && n(t, d))) break;
            t = t[d]
        }
        return l || ++s != f ? l : !!(f = null == t ? 0 : t.length) && u(f) && a(d, f) && (o(t) || i(t))
    }
}, function(t, e, n) {
    var r = n(113),
        i = n(259),
        o = n(62),
        a = n(23);
    t.exports = function(t) {
        return o(t) ? r(a(t)) : i(t)
    }
}, function(t, e, n) {
    var r = n(61);
    t.exports = function(t) {
        return function(e) {
            return r(e, t)
        }
    }
}, function(t, e, n) {
    var r = n(114),
        i = n(10),
        o = n(115),
        a = Math.max;
    t.exports = function(t, e, n) {
        var u = null == t ? 0 : t.length;
        if (!u) return -1;
        var c = null == n ? 0 : o(n);
        return c < 0 && (c = a(u + c, 0)), r(t, i(e, 3), c)
    }
}, function(t, e, n) {
    var r = n(64),
        i = 1 / 0,
        o = 1.7976931348623157e308;
    t.exports = function(t) {
        return t ? (t = r(t)) === i || t === -i ? (t < 0 ? -1 : 1) * o : t == t ? t : 0 : 0 === t ? t : 0
    }
}, function(t, e, n) {
    var r = n(263),
        i = /^\s+/;
    t.exports = function(t) {
        return t ? t.slice(0, r(t) + 1).replace(i, "") : t
    }
}, function(t, e) {
    var n = /\s/;
    t.exports = function(t) {
        for (var e = t.length; e-- && n.test(t.charAt(e)););
        return e
    }
}, function(t, e) {
    t.exports = function(t) {
        if (Array.isArray(t)) {
            for (var e = 0, n = new Array(t.length); e < t.length; e++) n[e] = t[e];
            return n
        }
    }
}, function(t, e) {
    t.exports = function(t) {
        if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t)
    }
}, function(t, e) {
    t.exports = function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance")
    }
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.createElementState = I, e.mergeActionState = T, e.ixElements = void 0;
    var r = n(21),
        i = n(3),
        o = i.IX2EngineConstants,
        a = (o.HTML_ELEMENT, o.PLAIN_OBJECT),
        u = (o.ABSTRACT_NODE, o.CONFIG_X_VALUE),
        c = o.CONFIG_Y_VALUE,
        s = o.CONFIG_Z_VALUE,
        f = o.CONFIG_VALUE,
        l = o.CONFIG_X_UNIT,
        d = o.CONFIG_Y_UNIT,
        p = o.CONFIG_Z_UNIT,
        v = o.CONFIG_UNIT,
        h = i.IX2EngineActionTypes,
        E = h.IX2_SESSION_STOPPED,
        g = h.IX2_INSTANCE_ADDED,
        _ = h.IX2_ELEMENT_STATE_CHANGED,
        y = {},
        m = "refState";

    function I(t, e, n, i, o) {
        var u = n === a ? (0, r.getIn)(o, ["config", "target", "objectId"]) : null;
        return (0, r.mergeIn)(t, [i], {
            id: i,
            ref: e,
            refId: u,
            refType: n
        })
    }

    function T(t, e, n, i, o) {
        var a = function(t) {
                var e = t.config;
                return O.reduce(function(t, n) {
                    var r = n[0],
                        i = n[1],
                        o = e[r],
                        a = e[i];
                    return null != o && null != a && (t[i] = a), t
                }, {})
            }(o),
            u = [e, m, n];
        return (0, r.mergeIn)(t, u, i, a)
    }
    e.ixElements = function() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : y,
            e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        switch (e.type) {
            case E:
                return y;
            case g:
                var n = e.payload,
                    i = n.elementId,
                    o = n.element,
                    a = n.origin,
                    u = n.actionItem,
                    c = n.refType,
                    s = u.actionTypeId,
                    f = t;
                return (0, r.getIn)(f, [i, o]) !== o && (f = I(f, o, c, i, u)), T(f, i, s, a, u);
            case _:
                var l = e.payload;
                return T(t, l.elementId, l.actionTypeId, l.current, l.actionItem);
            default:
                return t
        }
    };
    var O = [
        [u, l],
        [c, d],
        [s, p],
        [f, v]
    ]
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.clearPlugin = e.renderPlugin = e.createPluginInstance = e.getPluginDestination = e.getPluginOrigin = e.getPluginDuration = e.getPluginConfig = void 0;
    e.getPluginConfig = function(t) {
        return t.value
    };
    e.getPluginDuration = function(t, e) {
        if ("auto" !== e.config.duration) return null;
        var n = parseFloat(t.getAttribute("data-duration"));
        return n > 0 ? 1e3 * n : 1e3 * parseFloat(t.getAttribute("data-default-duration"))
    };
    e.getPluginOrigin = function(t) {
        return t || {
            value: 0
        }
    };
    e.getPluginDestination = function(t) {
        return {
            value: t.value
        }
    };
    e.createPluginInstance = function(t) {
        var e = window.Webflow.require("lottie").createInstance(t);
        return e.stop(), e.setSubframe(!0), e
    };
    e.renderPlugin = function(t, e, n) {
        if (t) {
            var r = e[n.actionTypeId].value / 100;
            t.goToFrame(t.frames * r)
        }
    };
    e.clearPlugin = function(t) {
        window.Webflow.require("lottie").createInstance(t).stop()
    }
}, function(t, e, n) {
    "use strict";
    var r, i, o, a = n(1),
        u = a(n(24)),
        c = a(n(20)),
        s = n(1);
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.getInstanceId = function() {
        return "i" + vt++
    }, e.getElementId = function(t, e) {
        for (var n in t) {
            var r = t[n];
            if (r && r.ref === e) return r.id
        }
        return "e" + ht++
    }, e.reifyState = function() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            e = t.events,
            n = t.actionLists,
            r = t.site,
            i = (0, l.default)(e, function(t, e) {
                var n = e.eventTypeId;
                return t[n] || (t[n] = {}), t[n][e.id] = e, t
            }, {}),
            o = r && r.mediaQueries,
            a = [];
        o ? a = o.map(function(t) {
            return t.key
        }) : (o = [], console.warn("IX2 missing mediaQueries in site data"));
        return {
            ixData: {
                events: e,
                actionLists: n,
                eventTypeMap: i,
                mediaQueries: o,
                mediaQueryKeys: a
            }
        }
    }, e.observeStore = function(t) {
        var e = t.store,
            n = t.select,
            r = t.onChange,
            i = t.comparator,
            o = void 0 === i ? Et : i,
            a = e.getState,
            u = (0, e.subscribe)(function() {
                var t = n(a());
                if (null == t) return void u();
                o(t, c) || r(c = t, e)
            }),
            c = n(a());
        return u
    }, e.getAffectedElements = _t, e.getComputedStyle = function(t) {
        var e = t.element,
            n = t.actionItem;
        if (!_.IS_BROWSER_ENV) return {};
        switch (n.actionTypeId) {
            case it:
            case ot:
            case at:
            case ut:
            case ct:
                return window.getComputedStyle(e);
            default:
                return {}
        }
    }, e.getInstanceOrigin = function(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            r = arguments.length > 3 ? arguments[3] : void 0,
            i = (arguments.length > 4 ? arguments[4] : void 0).getStyle,
            o = r.actionTypeId,
            a = r.config;
        if ((0, g.isPluginType)(o)) return (0, g.getPluginOrigin)(o)(e[o]);
        switch (o) {
            case Z:
            case J:
            case tt:
            case et:
                return e[o] || Ot[o];
            case rt:
                return mt(e[o], r.config.filters);
            case nt:
                return {
                    value: (0, f.default)(parseFloat(i(t, x)), 1)
                };
            case it:
                var u, c, s = i(t, L),
                    l = i(t, P);
                return u = a.widthUnit === W ? yt.test(s) ? parseFloat(s) : parseFloat(n.width) : (0, f.default)(parseFloat(s), parseFloat(n.width)), c = a.heightUnit === W ? yt.test(l) ? parseFloat(l) : parseFloat(n.height) : (0, f.default)(parseFloat(l), parseFloat(n.height)), {
                    widthValue: u,
                    heightValue: c
                };
            case ot:
            case at:
            case ut:
                return function(t) {
                    var e = t.element,
                        n = t.actionTypeId,
                        r = t.computedStyle,
                        i = t.getStyle,
                        o = lt[n],
                        a = i(e, o),
                        u = St.test(a) ? a : r[o],
                        c = function(t, e) {
                            var n = t.exec(e);
                            return n ? n[1] : ""
                        }(Rt, u).split(B);
                    return {
                        rValue: (0, f.default)(parseInt(c[0], 10), 255),
                        gValue: (0, f.default)(parseInt(c[1], 10), 255),
                        bValue: (0, f.default)(parseInt(c[2], 10), 255),
                        aValue: (0, f.default)(parseFloat(c[3]), 1)
                    }
                }({
                    element: t,
                    actionTypeId: o,
                    computedStyle: n,
                    getStyle: i
                });
            case ct:
                return {
                    value: (0, f.default)(i(t, V), n.display)
                };
            case st:
                return e[o] || {
                    value: 0
                };
            default:
                return
        }
    }, e.getDestinationValues = function(t) {
        var e = t.element,
            n = t.actionItem,
            r = t.elementApi,
            i = n.actionTypeId;
        if ((0, g.isPluginType)(i)) return (0, g.getPluginDestination)(i)(n.config);
        switch (i) {
            case Z:
            case J:
            case tt:
            case et:
                var o = n.config,
                    a = o.xValue,
                    u = o.yValue,
                    c = o.zValue;
                return {
                    xValue: a,
                    yValue: u,
                    zValue: c
                };
            case it:
                var s = r.getStyle,
                    f = r.setStyle,
                    l = r.getProperty,
                    d = n.config,
                    p = d.widthUnit,
                    v = d.heightUnit,
                    h = n.config,
                    E = h.widthValue,
                    y = h.heightValue;
                if (!_.IS_BROWSER_ENV) return {
                    widthValue: E,
                    heightValue: y
                };
                if (p === W) {
                    var m = s(e, L);
                    f(e, L, ""), E = l(e, "offsetWidth"), f(e, L, m)
                }
                if (v === W) {
                    var I = s(e, P);
                    f(e, P, ""), y = l(e, "offsetHeight"), f(e, P, I)
                }
                return {
                    widthValue: E,
                    heightValue: y
                };
            case ot:
            case at:
            case ut:
                var T = n.config,
                    O = T.rValue,
                    b = T.gValue,
                    A = T.bValue,
                    w = T.aValue;
                return {
                    rValue: O,
                    gValue: b,
                    bValue: A,
                    aValue: w
                };
            case rt:
                return n.config.filters.reduce(It, {});
            default:
                var S = n.config.value;
                return {
                    value: S
                }
        }
    }, e.getRenderType = Tt, e.getStyleProp = function(t, e) {
        return t === Q ? e.replace("STYLE_", "").toLowerCase() : null
    }, e.renderHTMLElement = function(t, e, n, r, i, o, a, u, c) {
        switch (u) {
            case K:
                return function(t, e, n, r, i) {
                    var o = wt.map(function(t) {
                            var n = Ot[t],
                                r = e[t] || {},
                                i = r.xValue,
                                o = void 0 === i ? n.xValue : i,
                                a = r.yValue,
                                u = void 0 === a ? n.yValue : a,
                                c = r.zValue,
                                s = void 0 === c ? n.zValue : c,
                                f = r.xUnit,
                                l = void 0 === f ? "" : f,
                                d = r.yUnit,
                                p = void 0 === d ? "" : d,
                                v = r.zUnit,
                                h = void 0 === v ? "" : v;
                            switch (t) {
                                case Z:
                                    return "".concat(T, "(").concat(o).concat(l, ", ").concat(u).concat(p, ", ").concat(s).concat(h, ")");
                                case J:
                                    return "".concat(O, "(").concat(o).concat(l, ", ").concat(u).concat(p, ", ").concat(s).concat(h, ")");
                                case tt:
                                    return "".concat(b, "(").concat(o).concat(l, ") ").concat(A, "(").concat(u).concat(p, ") ").concat(w, "(").concat(s).concat(h, ")");
                                case et:
                                    return "".concat(S, "(").concat(o).concat(l, ", ").concat(u).concat(p, ")");
                                default:
                                    return ""
                            }
                        }).join(" "),
                        a = i.setStyle;
                    Nt(t, _.TRANSFORM_PREFIXED, i), a(t, _.TRANSFORM_PREFIXED, o), u = r, c = n, s = u.actionTypeId, f = c.xValue, l = c.yValue, d = c.zValue, (s === Z && void 0 !== d || s === J && void 0 !== d || s === tt && (void 0 !== f || void 0 !== l)) && a(t, _.TRANSFORM_STYLE_PREFIXED, R);
                    var u, c, s, f, l, d
                }(t, e, n, i, a);
            case Q:
                return function(t, e, n, r, i, o) {
                    var a = o.setStyle,
                        u = r.actionTypeId,
                        c = r.config;
                    switch (u) {
                        case it:
                            var s = r.config,
                                f = s.widthUnit,
                                d = void 0 === f ? "" : f,
                                p = s.heightUnit,
                                v = void 0 === p ? "" : p,
                                h = n.widthValue,
                                E = n.heightValue;
                            void 0 !== h && (d === W && (d = "px"), Nt(t, L, o), a(t, L, h + d)), void 0 !== E && (v === W && (v = "px"), Nt(t, P, o), a(t, P, E + v));
                            break;
                        case rt:
                            ! function(t, e, n, r) {
                                var i = (0, l.default)(e, function(t, e, r) {
                                        return "".concat(t, " ").concat(r, "(").concat(e).concat(At(r, n), ")")
                                    }, ""),
                                    o = r.setStyle;
                                Nt(t, C, r), o(t, C, i)
                            }(t, n, c, o);
                            break;
                        case ot:
                        case at:
                        case ut:
                            var g = lt[u],
                                _ = Math.round(n.rValue),
                                y = Math.round(n.gValue),
                                m = Math.round(n.bValue),
                                I = n.aValue;
                            Nt(t, g, o), a(t, g, I >= 1 ? "rgb(".concat(_, ",").concat(y, ",").concat(m, ")") : "rgba(".concat(_, ",").concat(y, ",").concat(m, ",").concat(I, ")"));
                            break;
                        default:
                            var T = c.unit,
                                O = void 0 === T ? "" : T;
                            Nt(t, i, o), a(t, i, n.value + O)
                    }
                }(t, 0, n, i, o, a);
            case Y:
                return function(t, e, n) {
                    var r = n.setStyle;
                    switch (e.actionTypeId) {
                        case ct:
                            var i = e.config.value;
                            return void(i === N && _.IS_BROWSER_ENV ? r(t, V, _.FLEX_PREFIXED) : r(t, V, i))
                    }
                }(t, i, a);
            case q:
                var s = i.actionTypeId;
                if ((0, g.isPluginType)(s)) return (0, g.renderPlugin)(s)(c, e, i)
        }
    }, e.clearAllStyles = function(t) {
        var e = t.store,
            n = t.elementApi,
            r = e.getState().ixData,
            i = r.events,
            o = void 0 === i ? {} : i,
            a = r.actionLists,
            u = void 0 === a ? {} : a;
        Object.keys(o).forEach(function(t) {
            var e = o[t],
                r = e.action.config,
                i = r.actionListId,
                a = u[i];
            a && Ct({
                actionList: a,
                event: e,
                elementApi: n
            })
        }), Object.keys(u).forEach(function(t) {
            Ct({
                actionList: u[t],
                elementApi: n
            })
        })
    }, e.cleanupHTMLElement = function(t, e, n) {
        var r = n.setStyle,
            i = n.getStyle,
            o = e.actionTypeId;
        if (o === it) {
            var a = e.config;
            a.widthUnit === W && r(t, L, ""), a.heightUnit === W && r(t, P, "")
        }
        i(t, U) && Pt({
            effect: xt,
            actionTypeId: o,
            elementApi: n
        })(t)
    }, e.getMaxDurationItemIndex = Mt, e.getActionListProgress = function(t, e) {
        var n = t.actionItemGroups,
            r = t.useFirstGroupAsInitialState,
            i = e.actionItem,
            o = e.verboseTimeElapsed,
            a = void 0 === o ? 0 : o,
            u = 0,
            c = 0;
        return n.forEach(function(t, e) {
            if (!r || 0 !== e) {
                var n = t.actionItems,
                    o = n[Mt(n)],
                    s = o.config,
                    f = o.actionTypeId;
                i.id === o.id && (c = u + a);
                var l = Tt(f) === Y ? 0 : s.duration;
                u += s.delay + l
            }
        }), u > 0 ? (0, E.optimizeFloat)(c / u) : 0
    }, e.reduceListToGroup = function(t) {
        var e = t.actionList,
            n = t.actionItemId,
            r = t.rawData,
            i = e.actionItemGroups,
            o = e.continuousParameterGroups,
            a = [],
            u = function(t) {
                return a.push((0, p.mergeIn)(t, ["config"], {
                    delay: 0,
                    duration: 0
                })), t.id === n
            };
        return i && i.some(function(t) {
            return t.actionItems.some(u)
        }), o && o.some(function(t) {
            return t.continuousActionGroups.some(function(t) {
                return t.actionItems.some(u)
            })
        }), (0, p.setIn)(r, ["actionLists"], (0, c.default)({}, e.id, {
            id: e.id,
            actionItemGroups: [{
                actionItems: a
            }]
        }))
    }, e.shouldNamespaceEventParameter = function(t, e) {
        var n = e.basedOn;
        return t === h.EventTypeConsts.SCROLLING_IN_VIEW && (n === h.EventBasedOn.ELEMENT || null == n) || t === h.EventTypeConsts.MOUSE_MOVE && n === h.EventBasedOn.ELEMENT
    }, e.getNamespacedParameterId = function(t, e) {
        return t + H + e
    }, e.shouldAllowMediaQuery = function(t, e) {
        if (null == e) return !0;
        return -1 !== t.indexOf(e)
    }, e.mediaQueriesEqual = function(t, e) {
        return (0, v.default)(t && t.sort(), e && e.sort())
    }, e.stringifyTarget = function(t) {
        if ("string" == typeof t) return t;
        var e = t.id,
            n = void 0 === e ? "" : e,
            r = t.selector,
            i = void 0 === r ? "" : r,
            o = t.useEventTarget;
        return n + z + i + z + (void 0 === o ? "" : o)
    }, e.getItemConfigByKey = void 0;
    var f = s(n(270)),
        l = s(n(271)),
        d = s(n(277)),
        p = n(21),
        v = s(n(123)),
        h = n(3),
        E = n(118),
        g = n(120),
        _ = n(48),
        y = h.IX2EngineConstants,
        m = y.BACKGROUND,
        I = y.TRANSFORM,
        T = y.TRANSLATE_3D,
        O = y.SCALE_3D,
        b = y.ROTATE_X,
        A = y.ROTATE_Y,
        w = y.ROTATE_Z,
        S = y.SKEW,
        R = y.PRESERVE_3D,
        N = y.FLEX,
        x = y.OPACITY,
        C = y.FILTER,
        L = y.WIDTH,
        P = y.HEIGHT,
        D = y.BACKGROUND_COLOR,
        M = y.BORDER_COLOR,
        j = y.COLOR,
        F = y.CHILDREN,
        G = y.IMMEDIATE_CHILDREN,
        k = y.SIBLINGS,
        X = y.PARENT,
        V = y.DISPLAY,
        U = y.WILL_CHANGE,
        W = y.AUTO,
        B = y.COMMA_DELIMITER,
        H = y.COLON_DELIMITER,
        z = y.BAR_DELIMITER,
        K = y.RENDER_TRANSFORM,
        Y = y.RENDER_GENERAL,
        Q = y.RENDER_STYLE,
        q = y.RENDER_PLUGIN,
        $ = h.ActionTypeConsts,
        Z = $.TRANSFORM_MOVE,
        J = $.TRANSFORM_SCALE,
        tt = $.TRANSFORM_ROTATE,
        et = $.TRANSFORM_SKEW,
        nt = $.STYLE_OPACITY,
        rt = $.STYLE_FILTER,
        it = $.STYLE_SIZE,
        ot = $.STYLE_BACKGROUND_COLOR,
        at = $.STYLE_BORDER,
        ut = $.STYLE_TEXT_COLOR,
        ct = $.GENERAL_DISPLAY,
        st = "OBJECT_VALUE",
        ft = function(t) {
            return t.trim()
        },
        lt = Object.freeze((r = {}, (0, c.default)(r, ot, D), (0, c.default)(r, at, M), (0, c.default)(r, ut, j), r)),
        dt = Object.freeze((i = {}, (0, c.default)(i, _.TRANSFORM_PREFIXED, I), (0, c.default)(i, D, m), (0, c.default)(i, x, x), (0, c.default)(i, C, C), (0, c.default)(i, L, L), (0, c.default)(i, P, P), i)),
        pt = {},
        vt = 1;
    var ht = 1;
    var Et = function(t, e) {
        return t === e
    };

    function gt(t) {
        var e = (0, u.default)(t);
        return "string" === e ? {
            id: t
        } : null != t && "object" === e ? {
            id: t.id,
            objectId: t.objectId,
            selector: t.selector,
            selectorGuids: t.selectorGuids,
            appliesTo: t.appliesTo,
            useEventTarget: t.useEventTarget
        } : {}
    }

    function _t(t) {
        var e, n, r, i = t.config,
            o = t.event,
            a = t.eventTarget,
            u = t.elementRoot,
            c = t.elementApi;
        if (!c) throw new Error("IX2 missing elementApi");
        var s = i.targets;
        if (Array.isArray(s) && s.length > 0) return s.reduce(function(t, e) {
            return t.concat(_t({
                config: {
                    target: e
                },
                event: o,
                eventTarget: a,
                elementRoot: u,
                elementApi: c
            }))
        }, []);
        var f = c.getValidDocument,
            l = c.getQuerySelector,
            d = c.queryDocument,
            p = c.getChildElements,
            v = c.getSiblingElements,
            E = c.matchSelector,
            g = c.elementContains,
            y = c.isSiblingNode,
            m = i.target;
        if (!m) return [];
        var I = gt(m),
            T = I.id,
            O = I.objectId,
            b = I.selector,
            A = I.selectorGuids,
            w = I.appliesTo,
            S = I.useEventTarget;
        if (O) return [pt[O] || (pt[O] = {})];
        if (w === h.EventAppliesTo.PAGE) {
            var R = f(T);
            return R ? [R] : []
        }
        var N, x, C, L = (null !== (e = null == o ? void 0 : null === (n = o.action) || void 0 === n ? void 0 : null === (r = n.config) || void 0 === r ? void 0 : r.affectedElements) && void 0 !== e ? e : {})[T || b] || {},
            P = Boolean(L.id || L.selector),
            D = o && l(gt(o.target));
        if (P ? (N = L.limitAffectedElements, x = D, C = l(L)) : x = C = l({
                id: T,
                selector: b,
                selectorGuids: A
            }), o && S) {
            var M = a && (C || !0 === S) ? [a] : d(D);
            if (C) {
                if (S === X) return d(C).filter(function(t) {
                    return M.some(function(e) {
                        return g(t, e)
                    })
                });
                if (S === F) return d(C).filter(function(t) {
                    return M.some(function(e) {
                        return g(e, t)
                    })
                });
                if (S === k) return d(C).filter(function(t) {
                    return M.some(function(e) {
                        return y(e, t)
                    })
                })
            }
            return M
        }
        return null == x || null == C ? [] : _.IS_BROWSER_ENV && u ? d(C).filter(function(t) {
            return u.contains(t)
        }) : N === F ? d(x, C) : N === G ? p(d(x)).filter(E(C)) : N === k ? v(d(x)).filter(E(C)) : d(C)
    }
    var yt = /px/,
        mt = function(t, e) {
            return e.reduce(function(t, e) {
                return null == t[e.type] && (t[e.type] = bt[e.type]), t
            }, t || {})
        };
    var It = function(t, e) {
        return e && (t[e.type] = e.value || 0), t
    };

    function Tt(t) {
        return /^TRANSFORM_/.test(t) ? K : /^STYLE_/.test(t) ? Q : /^GENERAL_/.test(t) ? Y : /^PLUGIN_/.test(t) ? q : void 0
    }
    e.getItemConfigByKey = function(t, e, n) {
        if ((0, g.isPluginType)(t)) return (0, g.getPluginConfig)(t)(n, e);
        switch (t) {
            case rt:
                var r = (0, d.default)(n.filters, function(t) {
                    return t.type === e
                });
                return r ? r.value : 0;
            default:
                return n[e]
        }
    };
    var Ot = (o = {}, (0, c.default)(o, Z, Object.freeze({
            xValue: 0,
            yValue: 0,
            zValue: 0
        })), (0, c.default)(o, J, Object.freeze({
            xValue: 1,
            yValue: 1,
            zValue: 1
        })), (0, c.default)(o, tt, Object.freeze({
            xValue: 0,
            yValue: 0,
            zValue: 0
        })), (0, c.default)(o, et, Object.freeze({
            xValue: 0,
            yValue: 0
        })), o),
        bt = Object.freeze({
            blur: 0,
            "hue-rotate": 0,
            invert: 0,
            grayscale: 0,
            saturate: 100,
            sepia: 0,
            contrast: 100,
            brightness: 100
        }),
        At = function(t, e) {
            var n = (0, d.default)(e.filters, function(e) {
                return e.type === t
            });
            if (n && n.unit) return n.unit;
            switch (t) {
                case "blur":
                    return "px";
                case "hue-rotate":
                    return "deg";
                default:
                    return "%"
            }
        },
        wt = Object.keys(Ot);
    var St = /^rgb/,
        Rt = RegExp("rgba?".concat("\\(([^)]+)\\)"));

    function Nt(t, e, n) {
        if (_.IS_BROWSER_ENV) {
            var r = dt[e];
            if (r) {
                var i = n.getStyle,
                    o = n.setStyle,
                    a = i(t, U);
                if (a) {
                    var u = a.split(B).map(ft); - 1 === u.indexOf(r) && o(t, U, u.concat(r).join(B))
                } else o(t, U, r)
            }
        }
    }

    function xt(t, e, n) {
        if (_.IS_BROWSER_ENV) {
            var r = dt[e];
            if (r) {
                var i = n.getStyle,
                    o = n.setStyle,
                    a = i(t, U);
                a && -1 !== a.indexOf(r) && o(t, U, a.split(B).map(ft).filter(function(t) {
                    return t !== r
                }).join(B))
            }
        }
    }

    function Ct(t) {
        var e = t.actionList,
            n = void 0 === e ? {} : e,
            r = t.event,
            i = t.elementApi,
            o = n.actionItemGroups,
            a = n.continuousParameterGroups;
        o && o.forEach(function(t) {
            Lt({
                actionGroup: t,
                event: r,
                elementApi: i
            })
        }), a && a.forEach(function(t) {
            t.continuousActionGroups.forEach(function(t) {
                Lt({
                    actionGroup: t,
                    event: r,
                    elementApi: i
                })
            })
        })
    }

    function Lt(t) {
        var e = t.actionGroup,
            n = t.event,
            r = t.elementApi;
        e.actionItems.forEach(function(t) {
            var e, i = t.actionTypeId,
                o = t.config;
            e = (0, g.isPluginType)(i) ? (0, g.clearPlugin)(i) : Pt({
                effect: Dt,
                actionTypeId: i,
                elementApi: r
            }), _t({
                config: o,
                event: n,
                elementApi: r
            }).forEach(e)
        })
    }
    var Pt = function(t) {
        var e = t.effect,
            n = t.actionTypeId,
            r = t.elementApi;
        return function(t) {
            switch (n) {
                case Z:
                case J:
                case tt:
                case et:
                    e(t, _.TRANSFORM_PREFIXED, r);
                    break;
                case rt:
                    e(t, C, r);
                    break;
                case nt:
                    e(t, x, r);
                    break;
                case it:
                    e(t, L, r), e(t, P, r);
                    break;
                case ot:
                case at:
                case ut:
                    e(t, lt[n], r);
                    break;
                case ct:
                    e(t, V, r)
            }
        }
    };

    function Dt(t, e, n) {
        var r = n.setStyle;
        xt(t, e, n), r(t, e, ""), e === _.TRANSFORM_PREFIXED && r(t, _.TRANSFORM_STYLE_PREFIXED, "")
    }

    function Mt(t) {
        var e = 0,
            n = 0;
        return t.forEach(function(t, r) {
            var i = t.config,
                o = i.delay + i.duration;
            o >= e && (e = o, n = r)
        }), n
    }
}, function(t, e) {
    t.exports = function(t, e) {
        return null == t || t != t ? e : t
    }
}, function(t, e, n) {
    var r = n(272),
        i = n(121),
        o = n(10),
        a = n(276),
        u = n(2);
    t.exports = function(t, e, n) {
        var c = u(t) ? r : a,
            s = arguments.length < 3;
        return c(t, o(e, 4), n, s, i)
    }
}, function(t, e) {
    t.exports = function(t, e, n, r) {
        var i = -1,
            o = null == t ? 0 : t.length;
        for (r && o && (n = t[++i]); ++i < o;) n = e(n, t[i], i, t);
        return n
    }
}, function(t, e, n) {
    var r = n(274)();
    t.exports = r
}, function(t, e) {
    t.exports = function(t) {
        return function(e, n, r) {
            for (var i = -1, o = Object(e), a = r(e), u = a.length; u--;) {
                var c = a[t ? u : ++i];
                if (!1 === n(o[c], c, o)) break
            }
            return e
        }
    }
}, function(t, e, n) {
    var r = n(16);
    t.exports = function(t, e) {
        return function(n, i) {
            if (null == n) return n;
            if (!r(n)) return t(n, i);
            for (var o = n.length, a = e ? o : -1, u = Object(n);
                (e ? a-- : ++a < o) && !1 !== i(u[a], a, u););
            return n
        }
    }
}, function(t, e) {
    t.exports = function(t, e, n, r, i) {
        return i(t, function(t, i, o) {
            n = r ? (r = !1, t) : e(n, t, i, o)
        }), n
    }
}, function(t, e, n) {
    var r = n(96)(n(278));
    t.exports = r
}, function(t, e, n) {
    var r = n(114),
        i = n(10),
        o = n(115),
        a = Math.max,
        u = Math.min;
    t.exports = function(t, e, n) {
        var c = null == t ? 0 : t.length;
        if (!c) return -1;
        var s = c - 1;
        return void 0 !== n && (s = o(n), s = n < 0 ? a(c + s, 0) : u(s, c - 1)), r(t, i(e, 3), s, !0)
    }
}, function(t, e) {
    t.exports = function(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
}, function(t, e, n) {
    "use strict";
    var r = Object.prototype.hasOwnProperty;

    function i(t, e) {
        return t === e ? 0 !== t || 0 !== e || 1 / t == 1 / e : t != t && e != e
    }
    t.exports = function(t, e) {
        if (i(t, e)) return !0;
        if ("object" != typeof t || null === t || "object" != typeof e || null === e) return !1;
        var n = Object.keys(t),
            o = Object.keys(e);
        if (n.length !== o.length) return !1;
        for (var a = 0; a < n.length; a++)
            if (!r.call(e, n[a]) || !i(t[n[a]], e[n[a]])) return !1;
        return !0
    }
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.ixInstances = void 0;
    var r = n(3),
        i = n(14),
        o = n(21),
        a = r.IX2EngineActionTypes,
        u = a.IX2_RAW_DATA_IMPORTED,
        c = a.IX2_SESSION_STOPPED,
        s = a.IX2_INSTANCE_ADDED,
        f = a.IX2_INSTANCE_STARTED,
        l = a.IX2_INSTANCE_REMOVED,
        d = a.IX2_ANIMATION_FRAME_CHANGED,
        p = i.IX2EasingUtils,
        v = p.optimizeFloat,
        h = p.applyEasing,
        E = p.createBezierEasing,
        g = r.IX2EngineConstants.RENDER_GENERAL,
        _ = i.IX2VanillaUtils,
        y = _.getItemConfigByKey,
        m = _.getRenderType,
        I = _.getStyleProp,
        T = function(t, e) {
            var n = t.position,
                r = t.parameterId,
                i = t.actionGroups,
                a = t.destinationKeys,
                u = t.smoothing,
                c = t.restingValue,
                s = t.actionTypeId,
                f = t.customEasingFn,
                l = t.skipMotion,
                d = t.skipToValue,
                p = e.payload.parameters,
                E = Math.max(1 - u, .01),
                g = p[r];
            null == g && (E = 1, g = c);
            var _, m, I, T, O = Math.max(g, 0) || 0,
                b = v(O - n),
                A = l ? d : v(n + b * E),
                w = 100 * A;
            if (A === n && t.current) return t;
            for (var S = 0, R = i.length; S < R; S++) {
                var N = i[S],
                    x = N.keyframe,
                    C = N.actionItems;
                if (0 === S && (_ = C[0]), w >= x) {
                    _ = C[0];
                    var L = i[S + 1],
                        P = L && w !== x;
                    m = P ? L.actionItems[0] : null, P && (I = x / 100, T = (L.keyframe - x) / 100)
                }
            }
            var D = {};
            if (_ && !m)
                for (var M = 0, j = a.length; M < j; M++) {
                    var F = a[M];
                    D[F] = y(s, F, _.config)
                } else if (_ && m && void 0 !== I && void 0 !== T)
                    for (var G = (A - I) / T, k = _.config.easing, X = h(k, G, f), V = 0, U = a.length; V < U; V++) {
                        var W = a[V],
                            B = y(s, W, _.config),
                            H = (y(s, W, m.config) - B) * X + B;
                        D[W] = H
                    }
            return (0, o.merge)(t, {
                position: A,
                current: D
            })
        },
        O = function(t, e) {
            var n = t,
                r = n.active,
                i = n.origin,
                a = n.start,
                u = n.immediate,
                c = n.renderType,
                s = n.verbose,
                f = n.actionItem,
                l = n.destination,
                d = n.destinationKeys,
                p = n.pluginDuration,
                E = n.instanceDelay,
                _ = n.customEasingFn,
                y = n.skipMotion,
                m = f.config.easing,
                I = f.config,
                T = I.duration,
                O = I.delay;
            null != p && (T = p), O = null != E ? E : O, c === g ? T = 0 : (u || y) && (T = O = 0);
            var b = e.payload.now;
            if (r && i) {
                var A = b - (a + O);
                if (s) {
                    var w = b - a,
                        S = T + O,
                        R = v(Math.min(Math.max(0, w / S), 1));
                    t = (0, o.set)(t, "verboseTimeElapsed", S * R)
                }
                if (A < 0) return t;
                var N = v(Math.min(Math.max(0, A / T), 1)),
                    x = h(m, N, _),
                    C = {},
                    L = null;
                return d.length && (L = d.reduce(function(t, e) {
                    var n = l[e],
                        r = parseFloat(i[e]) || 0,
                        o = (parseFloat(n) - r) * x + r;
                    return t[e] = o, t
                }, {})), C.current = L, C.position = N, 1 === N && (C.active = !1, C.complete = !0), (0, o.merge)(t, C)
            }
            return t
        };
    e.ixInstances = function() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Object.freeze({}),
            e = arguments.length > 1 ? arguments[1] : void 0;
        switch (e.type) {
            case u:
                return e.payload.ixInstances || Object.freeze({});
            case c:
                return Object.freeze({});
            case s:
                var n = e.payload,
                    r = n.instanceId,
                    i = n.elementId,
                    a = n.actionItem,
                    p = n.eventId,
                    v = n.eventTarget,
                    h = n.eventStateKey,
                    g = n.actionListId,
                    _ = n.groupIndex,
                    y = n.isCarrier,
                    b = n.origin,
                    A = n.destination,
                    w = n.immediate,
                    S = n.verbose,
                    R = n.continuous,
                    N = n.parameterId,
                    x = n.actionGroups,
                    C = n.smoothing,
                    L = n.restingValue,
                    P = n.pluginInstance,
                    D = n.pluginDuration,
                    M = n.instanceDelay,
                    j = n.skipMotion,
                    F = n.skipToValue,
                    G = a.actionTypeId,
                    k = m(G),
                    X = I(k, G),
                    V = Object.keys(A).filter(function(t) {
                        return null != A[t]
                    }),
                    U = a.config.easing;
                return (0, o.set)(t, r, {
                    id: r,
                    elementId: i,
                    active: !1,
                    position: 0,
                    start: 0,
                    origin: b,
                    destination: A,
                    destinationKeys: V,
                    immediate: w,
                    verbose: S,
                    current: null,
                    actionItem: a,
                    actionTypeId: G,
                    eventId: p,
                    eventTarget: v,
                    eventStateKey: h,
                    actionListId: g,
                    groupIndex: _,
                    renderType: k,
                    isCarrier: y,
                    styleProp: X,
                    continuous: R,
                    parameterId: N,
                    actionGroups: x,
                    smoothing: C,
                    restingValue: L,
                    pluginInstance: P,
                    pluginDuration: D,
                    instanceDelay: M,
                    skipMotion: j,
                    skipToValue: F,
                    customEasingFn: Array.isArray(U) && 4 === U.length ? E(U) : void 0
                });
            case f:
                var W = e.payload,
                    B = W.instanceId,
                    H = W.time;
                return (0, o.mergeIn)(t, [B], {
                    active: !0,
                    complete: !1,
                    start: H
                });
            case l:
                var z = e.payload.instanceId;
                if (!t[z]) return t;
                for (var K = {}, Y = Object.keys(t), Q = Y.length, q = 0; q < Q; q++) {
                    var $ = Y[q];
                    $ !== z && (K[$] = t[$])
                }
                return K;
            case d:
                for (var Z = t, J = Object.keys(t), tt = J.length, et = 0; et < tt; et++) {
                    var nt = J[et],
                        rt = t[nt],
                        it = rt.continuous ? T : O;
                    Z = (0, o.set)(Z, nt, it(rt, e))
                }
                return Z;
            default:
                return t
        }
    }
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.ixParameters = void 0;
    var r = n(3).IX2EngineActionTypes,
        i = r.IX2_RAW_DATA_IMPORTED,
        o = r.IX2_SESSION_STOPPED,
        a = r.IX2_PARAMETER_CHANGED;
    e.ixParameters = function() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            e = arguments.length > 1 ? arguments[1] : void 0;
        switch (e.type) {
            case i:
                return e.payload.ixParameters || {};
            case o:
                return {};
            case a:
                var n = e.payload,
                    r = n.key,
                    u = n.value;
                return t[r] = u, t;
            default:
                return t
        }
    }
}, function(t, e) {
    t.exports = function(t, e) {
        if (null == t) return {};
        var n, r, i = {},
            o = Object.keys(t);
        for (r = 0; r < o.length; r++) n = o[r], e.indexOf(n) >= 0 || (i[n] = t[n]);
        return i
    }
}, function(t, e, n) {
    var r = n(57),
        i = n(59),
        o = n(16),
        a = n(285),
        u = n(286),
        c = "[object Map]",
        s = "[object Set]";
    t.exports = function(t) {
        if (null == t) return 0;
        if (o(t)) return a(t) ? u(t) : t.length;
        var e = i(t);
        return e == c || e == s ? t.size : r(t).length
    }
}, function(t, e, n) {
    var r = n(15),
        i = n(2),
        o = n(12),
        a = "[object String]";
    t.exports = function(t) {
        return "string" == typeof t || !i(t) && o(t) && r(t) == a
    }
}, function(t, e, n) {
    var r = n(287),
        i = n(288),
        o = n(289);
    t.exports = function(t) {
        return i(t) ? o(t) : r(t)
    }
}, function(t, e, n) {
    var r = n(113)("length");
    t.exports = r
}, function(t, e) {
    var n = RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");
    t.exports = function(t) {
        return n.test(t)
    }
}, function(t, e) {
    var n = "[\\ud800-\\udfff]",
        r = "[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",
        i = "\\ud83c[\\udffb-\\udfff]",
        o = "[^\\ud800-\\udfff]",
        a = "(?:\\ud83c[\\udde6-\\uddff]){2}",
        u = "[\\ud800-\\udbff][\\udc00-\\udfff]",
        c = "(?:" + r + "|" + i + ")" + "?",
        s = "[\\ufe0e\\ufe0f]?" + c + ("(?:\\u200d(?:" + [o, a, u].join("|") + ")[\\ufe0e\\ufe0f]?" + c + ")*"),
        f = "(?:" + [o + r + "?", r, a, u, n].join("|") + ")",
        l = RegExp(i + "(?=" + i + ")|" + f + s, "g");
    t.exports = function(t) {
        for (var e = l.lastIndex = 0; l.test(t);) ++e;
        return e
    }
}, function(t, e, n) {
    var r = n(10),
        i = n(291),
        o = n(292);
    t.exports = function(t, e) {
        return o(t, i(r(e)))
    }
}, function(t, e) {
    var n = "Expected a function";
    t.exports = function(t) {
        if ("function" != typeof t) throw new TypeError(n);
        return function() {
            var e = arguments;
            switch (e.length) {
                case 0:
                    return !t.call(this);
                case 1:
                    return !t.call(this, e[0]);
                case 2:
                    return !t.call(this, e[0], e[1]);
                case 3:
                    return !t.call(this, e[0], e[1], e[2])
            }
            return !t.apply(this, e)
        }
    }
}, function(t, e, n) {
    var r = n(112),
        i = n(10),
        o = n(293),
        a = n(296);
    t.exports = function(t, e) {
        if (null == t) return {};
        var n = r(a(t), function(t) {
            return [t]
        });
        return e = i(e), o(t, n, function(t, n) {
            return e(t, n[0])
        })
    }
}, function(t, e, n) {
    var r = n(61),
        i = n(294),
        o = n(37);
    t.exports = function(t, e, n) {
        for (var a = -1, u = e.length, c = {}; ++a < u;) {
            var s = e[a],
                f = r(t, s);
            n(f, s) && i(c, o(s, t), f)
        }
        return c
    }
}, function(t, e, n) {
    var r = n(295),
        i = n(37),
        o = n(54),
        a = n(8),
        u = n(23);
    t.exports = function(t, e, n, c) {
        if (!a(t)) return t;
        for (var s = -1, f = (e = i(e, t)).length, l = f - 1, d = t; null != d && ++s < f;) {
            var p = u(e[s]),
                v = n;
            if ("__proto__" === p || "constructor" === p || "prototype" === p) return t;
            if (s != l) {
                var h = d[p];
                void 0 === (v = c ? c(h, p, d) : void 0) && (v = a(h) ? h : o(e[s + 1]) ? [] : {})
            }
            r(d, p, v), d = d[p]
        }
        return t
    }
}, function(t, e, n) {
    var r = n(125),
        i = n(49),
        o = Object.prototype.hasOwnProperty;
    t.exports = function(t, e, n) {
        var a = t[e];
        o.call(t, e) && i(a, n) && (void 0 !== n || e in t) || r(t, e, n)
    }
}, function(t, e, n) {
    var r = n(103),
        i = n(297),
        o = n(299);
    t.exports = function(t) {
        return r(t, o, i)
    }
}, function(t, e, n) {
    var r = n(52),
        i = n(298),
        o = n(104),
        a = n(105),
        u = Object.getOwnPropertySymbols ? function(t) {
            for (var e = []; t;) r(e, o(t)), t = i(t);
            return e
        } : a;
    t.exports = u
}, function(t, e, n) {
    var r = n(108)(Object.getPrototypeOf, Object);
    t.exports = r
}, function(t, e, n) {
    var r = n(106),
        i = n(300),
        o = n(16);
    t.exports = function(t) {
        return o(t) ? r(t, !0) : i(t)
    }
}, function(t, e, n) {
    var r = n(8),
        i = n(58),
        o = n(301),
        a = Object.prototype.hasOwnProperty;
    t.exports = function(t) {
        if (!r(t)) return o(t);
        var e = i(t),
            n = [];
        for (var u in t)("constructor" != u || !e && a.call(t, u)) && n.push(u);
        return n
    }
}, function(t, e) {
    t.exports = function(t) {
        var e = [];
        if (null != t)
            for (var n in Object(t)) e.push(n);
        return e
    }
}, function(t, e, n) {
    var r = n(57),
        i = n(59),
        o = n(36),
        a = n(2),
        u = n(16),
        c = n(53),
        s = n(58),
        f = n(55),
        l = "[object Map]",
        d = "[object Set]",
        p = Object.prototype.hasOwnProperty;
    t.exports = function(t) {
        if (null == t) return !0;
        if (u(t) && (a(t) || "string" == typeof t || "function" == typeof t.splice || c(t) || f(t) || o(t))) return !t.length;
        var e = i(t);
        if (e == l || e == d) return !t.size;
        if (s(t)) return !r(t).length;
        for (var n in t)
            if (p.call(t, n)) return !1;
        return !0
    }
}, function(t, e, n) {
    var r = n(125),
        i = n(122),
        o = n(10);
    t.exports = function(t, e) {
        var n = {};
        return e = o(e, 3), i(t, function(t, i, o) {
            r(n, i, e(t, i, o))
        }), n
    }
}, function(t, e, n) {
    var r = n(305),
        i = n(121),
        o = n(306),
        a = n(2);
    t.exports = function(t, e) {
        return (a(t) ? r : i)(t, o(e))
    }
}, function(t, e) {
    t.exports = function(t, e) {
        for (var n = -1, r = null == t ? 0 : t.length; ++n < r && !1 !== e(t[n], n, t););
        return t
    }
}, function(t, e, n) {
    var r = n(63);
    t.exports = function(t) {
        return "function" == typeof t ? t : r
    }
}, function(t, e, n) {
    var r = n(308),
        i = n(8),
        o = "Expected a function";
    t.exports = function(t, e, n) {
        var a = !0,
            u = !0;
        if ("function" != typeof t) throw new TypeError(o);
        return i(n) && (a = "leading" in n ? !!n.leading : a, u = "trailing" in n ? !!n.trailing : u), r(t, e, {
            leading: a,
            maxWait: e,
            trailing: u
        })
    }
}, function(t, e, n) {
    var r = n(8),
        i = n(309),
        o = n(64),
        a = "Expected a function",
        u = Math.max,
        c = Math.min;
    t.exports = function(t, e, n) {
        var s, f, l, d, p, v, h = 0,
            E = !1,
            g = !1,
            _ = !0;
        if ("function" != typeof t) throw new TypeError(a);

        function y(e) {
            var n = s,
                r = f;
            return s = f = void 0, h = e, d = t.apply(r, n)
        }

        function m(t) {
            var n = t - v;
            return void 0 === v || n >= e || n < 0 || g && t - h >= l
        }

        function I() {
            var t = i();
            if (m(t)) return T(t);
            p = setTimeout(I, function(t) {
                var n = e - (t - v);
                return g ? c(n, l - (t - h)) : n
            }(t))
        }

        function T(t) {
            return p = void 0, _ && s ? y(t) : (s = f = void 0, d)
        }

        function O() {
            var t = i(),
                n = m(t);
            if (s = arguments, f = this, v = t, n) {
                if (void 0 === p) return function(t) {
                    return h = t, p = setTimeout(I, e), E ? y(t) : d
                }(v);
                if (g) return clearTimeout(p), p = setTimeout(I, e), y(v)
            }
            return void 0 === p && (p = setTimeout(I, e)), d
        }
        return e = o(e) || 0, r(n) && (E = !!n.leading, l = (g = "maxWait" in n) ? u(o(n.maxWait) || 0, e) : l, _ = "trailing" in n ? !!n.trailing : _), O.cancel = function() {
            void 0 !== p && clearTimeout(p), h = 0, s = v = f = p = void 0
        }, O.flush = function() {
            return void 0 === p ? d : T(i())
        }, O
    }
}, function(t, e, n) {
    var r = n(6);
    t.exports = function() {
        return r.Date.now()
    }
}, function(t, e, n) {
    "use strict";
    var r = n(1)(n(24));
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.setStyle = function(t, e, n) {
        t.style[e] = n
    }, e.getStyle = function(t, e) {
        return t.style[e]
    }, e.getProperty = function(t, e) {
        return t[e]
    }, e.matchSelector = function(t) {
        return function(e) {
            return e[a](t)
        }
    }, e.getQuerySelector = function(t) {
        var e = t.id,
            n = t.selector;
        if (e) {
            var r = e;
            if (-1 !== e.indexOf(c)) {
                var i = e.split(c),
                    o = i[0];
                if (r = i[1], o !== document.documentElement.getAttribute(l)) return null
            }
            return '[data-w-id="'.concat(r, '"], [data-w-id^="').concat(r, '_instance"]')
        }
        return n
    }, e.getValidDocument = function(t) {
        if (null == t || t === document.documentElement.getAttribute(l)) return document;
        return null
    }, e.queryDocument = function(t, e) {
        return Array.prototype.slice.call(document.querySelectorAll(e ? t + " " + e : t))
    }, e.elementContains = function(t, e) {
        return t.contains(e)
    }, e.isSiblingNode = function(t, e) {
        return t !== e && t.parentNode === e.parentNode
    }, e.getChildElements = function(t) {
        for (var e = [], n = 0, r = (t || []).length; n < r; n++) {
            var i = t[n].children,
                o = i.length;
            if (o)
                for (var a = 0; a < o; a++) e.push(i[a])
        }
        return e
    }, e.getSiblingElements = function() {
        for (var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], e = [], n = [], r = 0, i = t.length; r < i; r++) {
            var o = t[r].parentNode;
            if (o && o.children && o.children.length && -1 === n.indexOf(o)) {
                n.push(o);
                for (var a = o.firstElementChild; null != a;) - 1 === t.indexOf(a) && e.push(a), a = a.nextElementSibling
            }
        }
        return e
    }, e.getRefType = function(t) {
        if (null != t && "object" == (0, r.default)(t)) return t instanceof Element ? s : f;
        return null
    }, e.getClosestElement = void 0;
    var i = n(14),
        o = n(3),
        a = i.IX2BrowserSupport.ELEMENT_MATCHES,
        u = o.IX2EngineConstants,
        c = u.IX2_ID_DELIMITER,
        s = u.HTML_ELEMENT,
        f = u.PLAIN_OBJECT,
        l = u.WF_PAGE;
    var d = Element.prototype.closest ? function(t, e) {
        return document.documentElement.contains(t) ? t.closest(e) : null
    } : function(t, e) {
        if (!document.documentElement.contains(t)) return null;
        var n = t;
        do {
            if (n[a] && n[a](e)) return n;
            n = n.parentNode
        } while (null != n);
        return null
    };
    e.getClosestElement = d
}, function(t, e, n) {
    "use strict";
    var r, i = n(1),
        o = i(n(20)),
        a = i(n(24)),
        u = n(1);
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0;
    var c, s, f, l = u(n(30)),
        d = u(n(312)),
        p = u(n(60)),
        v = u(n(331)),
        h = n(3),
        E = n(124),
        g = n(65),
        _ = n(14),
        y = h.EventTypeConsts,
        m = y.MOUSE_CLICK,
        I = y.MOUSE_SECOND_CLICK,
        T = y.MOUSE_DOWN,
        O = y.MOUSE_UP,
        b = y.MOUSE_OVER,
        A = y.MOUSE_OUT,
        w = y.DROPDOWN_CLOSE,
        S = y.DROPDOWN_OPEN,
        R = y.SLIDER_ACTIVE,
        N = y.SLIDER_INACTIVE,
        x = y.TAB_ACTIVE,
        C = y.TAB_INACTIVE,
        L = y.NAVBAR_CLOSE,
        P = y.NAVBAR_OPEN,
        D = y.MOUSE_MOVE,
        M = y.PAGE_SCROLL_DOWN,
        j = y.SCROLL_INTO_VIEW,
        F = y.SCROLL_OUT_OF_VIEW,
        G = y.PAGE_SCROLL_UP,
        k = y.SCROLLING_IN_VIEW,
        X = y.PAGE_FINISH,
        V = y.ECOMMERCE_CART_CLOSE,
        U = y.ECOMMERCE_CART_OPEN,
        W = y.PAGE_START,
        B = y.PAGE_SCROLL,
        H = "COMPONENT_ACTIVE",
        z = "COMPONENT_INACTIVE",
        K = h.IX2EngineConstants.COLON_DELIMITER,
        Y = _.IX2VanillaUtils.getNamespacedParameterId,
        Q = function(t) {
            return function(e) {
                return !("object" !== (0, a.default)(e) || !t(e)) || e
            }
        },
        q = Q(function(t) {
            return t.element === t.nativeEvent.target
        }),
        $ = Q(function(t) {
            var e = t.element,
                n = t.nativeEvent;
            return e.contains(n.target)
        }),
        Z = (0, d.default)([q, $]),
        J = function(t, e) {
            if (e) {
                var n = t.getState().ixData.events[e];
                if (n && !at[n.eventTypeId]) return n
            }
            return null
        },
        tt = function(t, e) {
            var n = t.store,
                r = t.event,
                i = t.element,
                o = t.eventStateKey,
                a = r.action,
                u = r.id,
                c = a.config,
                s = c.actionListId,
                f = c.autoStopEventId,
                l = J(n, f);
            return l && (0, E.stopActionGroup)({
                store: n,
                eventId: f,
                eventTarget: i,
                eventStateKey: f + K + o.split(K)[1],
                actionListId: (0, p.default)(l, "action.config.actionListId")
            }), (0, E.stopActionGroup)({
                store: n,
                eventId: u,
                eventTarget: i,
                eventStateKey: o,
                actionListId: s
            }), (0, E.startActionGroup)({
                store: n,
                eventId: u,
                eventTarget: i,
                eventStateKey: o,
                actionListId: s
            }), e
        },
        et = function(t, e) {
            return function(n, r) {
                return !0 === t(n, r) ? e(n, r) : r
            }
        },
        nt = {
            handler: et(Z, tt)
        },
        rt = (0, l.default)({}, nt, {
            types: [H, z].join(" ")
        }),
        it = [{
            target: window,
            types: "resize orientationchange",
            throttle: !0
        }, {
            target: document,
            types: "scroll wheel readystatechange IX2_PAGE_UPDATE",
            throttle: !0
        }],
        ot = {
            types: it
        },
        at = {
            PAGE_START: W,
            PAGE_FINISH: X
        },
        ut = (c = void 0 !== window.pageXOffset, s = "CSS1Compat" === document.compatMode ? document.documentElement : document.body, function() {
            return {
                scrollLeft: c ? window.pageXOffset : s.scrollLeft,
                scrollTop: c ? window.pageYOffset : s.scrollTop,
                stiffScrollTop: (0, v.default)(c ? window.pageYOffset : s.scrollTop, 0, s.scrollHeight - window.innerHeight),
                scrollWidth: s.scrollWidth,
                scrollHeight: s.scrollHeight,
                clientWidth: s.clientWidth,
                clientHeight: s.clientHeight,
                innerWidth: window.innerWidth,
                innerHeight: window.innerHeight
            }
        }),
        ct = function(t) {
            var e = t.element,
                n = t.nativeEvent,
                r = n.type,
                i = n.target,
                o = n.relatedTarget,
                a = e.contains(i);
            if ("mouseover" === r && a) return !0;
            var u = e.contains(o);
            return !("mouseout" !== r || !a || !u)
        },
        st = function(t) {
            var e, n, r = t.element,
                i = t.event.config,
                o = ut(),
                a = o.clientWidth,
                u = o.clientHeight,
                c = i.scrollOffsetValue,
                s = "PX" === i.scrollOffsetUnit ? c : u * (c || 0) / 100;
            return e = r.getBoundingClientRect(), n = {
                left: 0,
                top: s,
                right: a,
                bottom: u - s
            }, !(e.left > n.right || e.right < n.left || e.top > n.bottom || e.bottom < n.top)
        },
        ft = function(t) {
            return function(e, n) {
                var r = e.nativeEvent.type,
                    i = -1 !== [H, z].indexOf(r) ? r === H : n.isActive,
                    o = (0, l.default)({}, n, {
                        isActive: i
                    });
                return n && o.isActive === n.isActive ? o : t(e, o) || o
            }
        },
        lt = function(t) {
            return function(e, n) {
                var r = {
                    elementHovered: ct(e)
                };
                return (n ? r.elementHovered !== n.elementHovered : r.elementHovered) && t(e, r) || r
            }
        },
        dt = function(t) {
            return function(e) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    r = ut(),
                    i = r.stiffScrollTop,
                    o = r.scrollHeight,
                    a = r.innerHeight,
                    u = e.event,
                    c = u.config,
                    s = u.eventTypeId,
                    f = c.scrollOffsetValue,
                    d = "PX" === c.scrollOffsetUnit,
                    p = o - a,
                    v = Number((i / p).toFixed(2));
                if (n && n.percentTop === v) return n;
                var h, E, g = (d ? f : a * (f || 0) / 100) / p,
                    _ = 0;
                n && (h = v > n.percentTop, _ = (E = n.scrollingDown !== h) ? v : n.anchorTop);
                var y = s === M ? v >= _ + g : v <= _ - g,
                    m = (0, l.default)({}, n, {
                        percentTop: v,
                        inBounds: y,
                        anchorTop: _,
                        scrollingDown: h
                    });
                return n && y && (E || m.inBounds !== n.inBounds) && t(e, m) || m
            }
        },
        pt = function(t) {
            return function(e) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                        clickCount: 0
                    },
                    r = {
                        clickCount: n.clickCount % 2 + 1
                    };
                return r.clickCount !== n.clickCount && t(e, r) || r
            }
        },
        vt = function() {
            var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
            return (0, l.default)({}, rt, {
                handler: et(t ? Z : q, ft(function(t, e) {
                    return e.isActive ? nt.handler(t, e) : e
                }))
            })
        },
        ht = function() {
            var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
            return (0, l.default)({}, rt, {
                handler: et(t ? Z : q, ft(function(t, e) {
                    return e.isActive ? e : nt.handler(t, e)
                }))
            })
        },
        Et = (0, l.default)({}, ot, {
            handler: (f = function(t, e) {
                var n = e.elementVisible,
                    r = t.event;
                return !t.store.getState().ixData.events[r.action.config.autoStopEventId] && e.triggered ? e : r.eventTypeId === j === n ? (tt(t), (0, l.default)({}, e, {
                    triggered: !0
                })) : e
            }, function(t, e) {
                var n = (0, l.default)({}, e, {
                    elementVisible: st(t)
                });
                return (e ? n.elementVisible !== e.elementVisible : n.elementVisible) && f(t, n) || n
            })
        }),
        gt = (r = {}, (0, o.default)(r, R, vt()), (0, o.default)(r, N, ht()), (0, o.default)(r, S, vt()), (0, o.default)(r, w, ht()), (0, o.default)(r, P, vt(!1)), (0, o.default)(r, L, ht(!1)), (0, o.default)(r, x, vt()), (0, o.default)(r, C, ht()), (0, o.default)(r, U, {
            types: "ecommerce-cart-open",
            handler: et(Z, tt)
        }), (0, o.default)(r, V, {
            types: "ecommerce-cart-close",
            handler: et(Z, tt)
        }), (0, o.default)(r, m, {
            types: "click",
            handler: et(Z, pt(function(t, e) {
                var n, r, i, o = e.clickCount;
                r = (n = t).store, i = n.event.action.config.autoStopEventId, Boolean(J(r, i)) ? 1 === o && tt(t) : tt(t)
            }))
        }), (0, o.default)(r, I, {
            types: "click",
            handler: et(Z, pt(function(t, e) {
                2 === e.clickCount && tt(t)
            }))
        }), (0, o.default)(r, T, (0, l.default)({}, nt, {
            types: "mousedown"
        })), (0, o.default)(r, O, (0, l.default)({}, nt, {
            types: "mouseup"
        })), (0, o.default)(r, b, {
            types: "mouseover mouseout",
            handler: et(Z, lt(function(t, e) {
                e.elementHovered && tt(t)
            }))
        }), (0, o.default)(r, A, {
            types: "mouseover mouseout",
            handler: et(Z, lt(function(t, e) {
                e.elementHovered || tt(t)
            }))
        }), (0, o.default)(r, D, {
            types: "mousemove mouseout scroll",
            handler: function(t) {
                var e = t.store,
                    n = t.element,
                    r = t.eventConfig,
                    i = t.nativeEvent,
                    o = t.eventStateKey,
                    a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                        clientX: 0,
                        clientY: 0,
                        pageX: 0,
                        pageY: 0
                    },
                    u = r.basedOn,
                    c = r.selectedAxis,
                    s = r.continuousParameterGroupId,
                    f = r.reverse,
                    l = r.restingState,
                    d = void 0 === l ? 0 : l,
                    p = i.clientX,
                    v = void 0 === p ? a.clientX : p,
                    E = i.clientY,
                    _ = void 0 === E ? a.clientY : E,
                    y = i.pageX,
                    m = void 0 === y ? a.pageX : y,
                    I = i.pageY,
                    T = void 0 === I ? a.pageY : I,
                    O = "X_AXIS" === c,
                    b = "mouseout" === i.type,
                    A = d / 100,
                    w = s,
                    S = !1;
                switch (u) {
                    case h.EventBasedOn.VIEWPORT:
                        A = O ? Math.min(v, window.innerWidth) / window.innerWidth : Math.min(_, window.innerHeight) / window.innerHeight;
                        break;
                    case h.EventBasedOn.PAGE:
                        var R = ut(),
                            N = R.scrollLeft,
                            x = R.scrollTop,
                            C = R.scrollWidth,
                            L = R.scrollHeight;
                        A = O ? Math.min(N + m, C) / C : Math.min(x + T, L) / L;
                        break;
                    case h.EventBasedOn.ELEMENT:
                    default:
                        w = Y(o, s);
                        var P = 0 === i.type.indexOf("mouse");
                        if (P && !0 !== Z({
                                element: n,
                                nativeEvent: i
                            })) break;
                        var D = n.getBoundingClientRect(),
                            M = D.left,
                            j = D.top,
                            F = D.width,
                            G = D.height;
                        if (!P && ! function(t, e) {
                                return t.left > e.left && t.left < e.right && t.top > e.top && t.top < e.bottom
                            }({
                                left: v,
                                top: _
                            }, D)) break;
                        S = !0, A = O ? (v - M) / F : (_ - j) / G
                }
                return b && (A > .95 || A < .05) && (A = Math.round(A)), (u !== h.EventBasedOn.ELEMENT || S || S !== a.elementHovered) && (A = f ? 1 - A : A, e.dispatch((0, g.parameterChanged)(w, A))), {
                    elementHovered: S,
                    clientX: v,
                    clientY: _,
                    pageX: m,
                    pageY: T
                }
            }
        }), (0, o.default)(r, B, {
            types: it,
            handler: function(t) {
                var e = t.store,
                    n = t.eventConfig,
                    r = n.continuousParameterGroupId,
                    i = n.reverse,
                    o = ut(),
                    a = o.scrollTop / (o.scrollHeight - o.clientHeight);
                a = i ? 1 - a : a, e.dispatch((0, g.parameterChanged)(r, a))
            }
        }), (0, o.default)(r, k, {
            types: it,
            handler: function(t) {
                var e = t.element,
                    n = t.store,
                    r = t.eventConfig,
                    i = t.eventStateKey,
                    o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                        scrollPercent: 0
                    },
                    a = ut(),
                    u = a.scrollLeft,
                    c = a.scrollTop,
                    s = a.scrollWidth,
                    f = a.scrollHeight,
                    l = a.clientHeight,
                    d = r.basedOn,
                    p = r.selectedAxis,
                    v = r.continuousParameterGroupId,
                    E = r.startsEntering,
                    _ = r.startsExiting,
                    y = r.addEndOffset,
                    m = r.addStartOffset,
                    I = r.addOffsetValue,
                    T = void 0 === I ? 0 : I,
                    O = r.endOffsetValue,
                    b = void 0 === O ? 0 : O,
                    A = "X_AXIS" === p;
                if (d === h.EventBasedOn.VIEWPORT) {
                    var w = A ? u / s : c / f;
                    return w !== o.scrollPercent && n.dispatch((0, g.parameterChanged)(v, w)), {
                        scrollPercent: w
                    }
                }
                var S = Y(i, v),
                    R = e.getBoundingClientRect(),
                    N = (m ? T : 0) / 100,
                    x = (y ? b : 0) / 100;
                N = E ? N : 1 - N, x = _ ? x : 1 - x;
                var C = R.top + Math.min(R.height * N, l),
                    L = R.top + R.height * x - C,
                    P = Math.min(l + L, f),
                    D = Math.min(Math.max(0, l - C), P) / P;
                return D !== o.scrollPercent && n.dispatch((0, g.parameterChanged)(S, D)), {
                    scrollPercent: D
                }
            }
        }), (0, o.default)(r, j, Et), (0, o.default)(r, F, Et), (0, o.default)(r, M, (0, l.default)({}, ot, {
            handler: dt(function(t, e) {
                e.scrollingDown && tt(t)
            })
        })), (0, o.default)(r, G, (0, l.default)({}, ot, {
            handler: dt(function(t, e) {
                e.scrollingDown || tt(t)
            })
        })), (0, o.default)(r, X, {
            types: "readystatechange IX2_PAGE_UPDATE",
            handler: et(q, function(t) {
                return function(e, n) {
                    var r = {
                        finished: "complete" === document.readyState
                    };
                    return !r.finished || n && n.finshed || t(e), r
                }
            }(tt))
        }), (0, o.default)(r, W, {
            types: "readystatechange IX2_PAGE_UPDATE",
            handler: et(q, function(t) {
                return function(e, n) {
                    return n || t(e), {
                        started: !0
                    }
                }
            }(tt))
        }), r);
    e.default = gt
}, function(t, e, n) {
    var r = n(313)();
    t.exports = r
}, function(t, e, n) {
    var r = n(66),
        i = n(314),
        o = n(128),
        a = n(129),
        u = n(2),
        c = n(327),
        s = "Expected a function",
        f = 8,
        l = 32,
        d = 128,
        p = 256;
    t.exports = function(t) {
        return i(function(e) {
            var n = e.length,
                i = n,
                v = r.prototype.thru;
            for (t && e.reverse(); i--;) {
                var h = e[i];
                if ("function" != typeof h) throw new TypeError(s);
                if (v && !E && "wrapper" == a(h)) var E = new r([], !0)
            }
            for (i = E ? i : n; ++i < n;) {
                h = e[i];
                var g = a(h),
                    _ = "wrapper" == g ? o(h) : void 0;
                E = _ && c(_[0]) && _[1] == (d | f | l | p) && !_[4].length && 1 == _[9] ? E[a(_[0])].apply(E, _[3]) : 1 == h.length && c(h) ? E[g]() : E.thru(h)
            }
            return function() {
                var t = arguments,
                    r = t[0];
                if (E && 1 == t.length && u(r)) return E.plant(r).value();
                for (var i = 0, o = n ? e[i].apply(this, t) : r; ++i < n;) o = e[i].call(this, o);
                return o
            }
        })
    }
}, function(t, e, n) {
    var r = n(315),
        i = n(318),
        o = n(320);
    t.exports = function(t) {
        return o(i(t, void 0, r), t + "")
    }
}, function(t, e, n) {
    var r = n(316);
    t.exports = function(t) {
        return null != t && t.length ? r(t, 1) : []
    }
}, function(t, e, n) {
    var r = n(52),
        i = n(317);
    t.exports = function t(e, n, o, a, u) {
        var c = -1,
            s = e.length;
        for (o || (o = i), u || (u = []); ++c < s;) {
            var f = e[c];
            n > 0 && o(f) ? n > 1 ? t(f, n - 1, o, a, u) : r(u, f) : a || (u[u.length] = f)
        }
        return u
    }
}, function(t, e, n) {
    var r = n(22),
        i = n(36),
        o = n(2),
        a = r ? r.isConcatSpreadable : void 0;
    t.exports = function(t) {
        return o(t) || i(t) || !!(a && t && t[a])
    }
}, function(t, e, n) {
    var r = n(319),
        i = Math.max;
    t.exports = function(t, e, n) {
        return e = i(void 0 === e ? t.length - 1 : e, 0),
            function() {
                for (var o = arguments, a = -1, u = i(o.length - e, 0), c = Array(u); ++a < u;) c[a] = o[e + a];
                a = -1;
                for (var s = Array(e + 1); ++a < e;) s[a] = o[a];
                return s[e] = n(c), r(t, this, s)
            }
    }
}, function(t, e) {
    t.exports = function(t, e, n) {
        switch (n.length) {
            case 0:
                return t.call(e);
            case 1:
                return t.call(e, n[0]);
            case 2:
                return t.call(e, n[0], n[1]);
            case 3:
                return t.call(e, n[0], n[1], n[2])
        }
        return t.apply(e, n)
    }
}, function(t, e, n) {
    var r = n(321),
        i = n(323)(r);
    t.exports = i
}, function(t, e, n) {
    var r = n(322),
        i = n(126),
        o = n(63),
        a = i ? function(t, e) {
            return i(t, "toString", {
                configurable: !0,
                enumerable: !1,
                value: r(e),
                writable: !0
            })
        } : o;
    t.exports = a
}, function(t, e) {
    t.exports = function(t) {
        return function() {
            return t
        }
    }
}, function(t, e) {
    var n = 800,
        r = 16,
        i = Date.now;
    t.exports = function(t) {
        var e = 0,
            o = 0;
        return function() {
            var a = i(),
                u = r - (a - o);
            if (o = a, u > 0) {
                if (++e >= n) return arguments[0]
            } else e = 0;
            return t.apply(void 0, arguments)
        }
    }
}, function(t, e, n) {
    var r = n(109),
        i = r && new r;
    t.exports = i
}, function(t, e) {
    t.exports = function() {}
}, function(t, e) {
    t.exports = {}
}, function(t, e, n) {
    var r = n(68),
        i = n(128),
        o = n(129),
        a = n(328);
    t.exports = function(t) {
        var e = o(t),
            n = a[e];
        if ("function" != typeof n || !(e in r.prototype)) return !1;
        if (t === n) return !0;
        var u = i(n);
        return !!u && t === u[0]
    }
}, function(t, e, n) {
    var r = n(68),
        i = n(66),
        o = n(67),
        a = n(2),
        u = n(12),
        c = n(329),
        s = Object.prototype.hasOwnProperty;

    function f(t) {
        if (u(t) && !a(t) && !(t instanceof r)) {
            if (t instanceof i) return t;
            if (s.call(t, "__wrapped__")) return c(t)
        }
        return new i(t)
    }
    f.prototype = o.prototype, f.prototype.constructor = f, t.exports = f
}, function(t, e, n) {
    var r = n(68),
        i = n(66),
        o = n(330);
    t.exports = function(t) {
        if (t instanceof r) return t.clone();
        var e = new i(t.__wrapped__, t.__chain__);
        return e.__actions__ = o(t.__actions__), e.__index__ = t.__index__, e.__values__ = t.__values__, e
    }
}, function(t, e) {
    t.exports = function(t, e) {
        var n = -1,
            r = t.length;
        for (e || (e = Array(r)); ++n < r;) e[n] = t[n];
        return e
    }
}, function(t, e, n) {
    var r = n(332),
        i = n(64);
    t.exports = function(t, e, n) {
        return void 0 === n && (n = e, e = void 0), void 0 !== n && (n = (n = i(n)) == n ? n : 0), void 0 !== e && (e = (e = i(e)) == e ? e : 0), r(i(t), e, n)
    }
}, function(t, e) {
    t.exports = function(t, e, n) {
        return t == t && (void 0 !== n && (t = t <= n ? t : n), void 0 !== e && (t = t >= e ? t : e)), t
    }
}, function(t, e, n) {
    "use strict";
    var r = n(4);
    r.define("links", t.exports = function(t, e) {
        var n, i, o, a = {},
            u = t(window),
            c = r.env(),
            s = window.location,
            f = document.createElement("a"),
            l = "w--current",
            d = /index\.(html|php)$/,
            p = /\/$/;

        function v(e) {
            var r = n && e.getAttribute("href-disabled") || e.getAttribute("href");
            if (f.href = r, !(r.indexOf(":") >= 0)) {
                var a = t(e);
                if (f.hash.length > 1 && f.host + f.pathname === s.host + s.pathname) {
                    if (!/^#[a-zA-Z0-9\-\_]+$/.test(f.hash)) return;
                    var u = t(f.hash);
                    u.length && i.push({
                        link: a,
                        sec: u,
                        active: !1
                    })
                } else if ("#" !== r && "" !== r) {
                    var c = f.href === s.href || r === o || d.test(r) && p.test(o);
                    E(a, l, c)
                }
            }
        }

        function h() {
            var t = u.scrollTop(),
                n = u.height();
            e.each(i, function(e) {
                var r = e.link,
                    i = e.sec,
                    o = i.offset().top,
                    a = i.outerHeight(),
                    u = .5 * n,
                    c = i.is(":visible") && o + a - u >= t && o + u <= t + n;
                e.active !== c && (e.active = c, E(r, l, c))
            })
        }

        function E(t, e, n) {
            var r = t.hasClass(e);
            n && r || (n || r) && (n ? t.addClass(e) : t.removeClass(e))
        }
        return a.ready = a.design = a.preview = function() {
            n = c && r.env("design"), o = r.env("slug") || s.pathname || "", r.scroll.off(h), i = [];
            for (var t = document.links, e = 0; e < t.length; ++e) v(t[e]);
            i.length && (r.scroll.on(h), h())
        }, a
    })
}, function(t, e, n) {
    "use strict";
    var r = n(4);
    r.define("scroll", t.exports = function(t) {
        var e = {
                WF_CLICK_EMPTY: "click.wf-empty-link",
                WF_CLICK_SCROLL: "click.wf-scroll"
            },
            n = window.location,
            i = function() {
                try {
                    return Boolean(window.frameElement)
                } catch (t) {
                    return !0
                }
            }() ? null : window.history,
            o = t(window),
            a = t(document),
            u = t(document.body),
            c = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || function(t) {
                window.setTimeout(t, 15)
            },
            s = r.env("editor") ? ".w-editor-body" : "body",
            f = "header, " + s + " > .header, " + s + " > .w-nav:not([data-no-scroll])",
            l = 'a[href="#"]',
            d = 'a[href*="#"]:not(.w-tab-link):not(' + l + ")",
            p = document.createElement("style");
        p.appendChild(document.createTextNode('.wf-force-outline-none[tabindex="-1"]:focus{outline:none;}'));
        var v = /^#[a-zA-Z0-9][\w:.-]*$/;
        var h = "function" == typeof window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)");

        function E(t, e) {
            var n;
            switch (e) {
                case "add":
                    (n = t.attr("tabindex")) ? t.attr("data-wf-tabindex-swap", n): t.attr("tabindex", "-1");
                    break;
                case "remove":
                    (n = t.attr("data-wf-tabindex-swap")) ? (t.attr("tabindex", n), t.removeAttr("data-wf-tabindex-swap")) : t.removeAttr("tabindex")
            }
            t.toggleClass("wf-force-outline-none", "add" === e)
        }

        function g(e) {
            var a = e.currentTarget;
            if (!(r.env("design") || window.$.mobile && /(?:^|\s)ui-link(?:$|\s)/.test(a.className))) {
                var s, l = (s = a, v.test(s.hash) && s.host + s.pathname === n.host + n.pathname ? a.hash : "");
                if ("" !== l) {
                    var d = t(l);
                    d.length && (e && (e.preventDefault(), e.stopPropagation()), function(t) {
                        if (n.hash !== t && i && i.pushState && (!r.env.chrome || "file:" !== n.protocol)) {
                            var e = i.state && i.state.hash;
                            e !== t && i.pushState({
                                hash: t
                            }, "", t)
                        }
                    }(l), window.setTimeout(function() {
                        ! function(e, n) {
                            var r = o.scrollTop(),
                                i = function(e) {
                                    var n = t(f),
                                        r = "fixed" === n.css("position") ? n.outerHeight() : 0,
                                        i = e.offset().top - r;
                                    if ("mid" === e.data("scroll")) {
                                        var a = o.height() - r,
                                            u = e.outerHeight();
                                        u < a && (i -= Math.round((a - u) / 2))
                                    }
                                    return i
                                }(e);
                            if (r === i) return;
                            var a = function(t, e, n) {
                                    if ("none" === document.body.getAttribute("data-wf-scroll-motion") || h.matches) return 0;
                                    var r = 1;
                                    return u.add(t).each(function(t, e) {
                                        var n = parseFloat(e.getAttribute("data-scroll-time"));
                                        !isNaN(n) && n >= 0 && (r = n)
                                    }), (472.143 * Math.log(Math.abs(e - n) + 125) - 2e3) * r
                                }(e, r, i),
                                s = Date.now();
                            c(function t() {
                                var e = Date.now() - s;
                                window.scroll(0, function(t, e, n, r) {
                                    return n > r ? e : t + (e - t) * ((i = n / r) < .5 ? 4 * i * i * i : (i - 1) * (2 * i - 2) * (2 * i - 2) + 1);
                                    var i
                                }(r, i, e, a)), e <= a ? c(t) : "function" == typeof n && n()
                            })
                        }(d, function() {
                            E(d, "add"), d.get(0).focus({
                                preventScroll: !0
                            }), E(d, "remove")
                        })
                    }, e ? 0 : 300))
                }
            }
        }
        return {
            ready: function() {
                var t = e.WF_CLICK_EMPTY,
                    n = e.WF_CLICK_SCROLL;
                a.on(n, d, g), a.on(t, l, function(t) {
                    t.preventDefault()
                }), document.head.insertBefore(p, document.head.firstChild)
            }
        }
    })
}, function(t, e, n) {
    "use strict";
    n(4).define("touch", t.exports = function(t) {
        var e = {},
            n = window.getSelection;

        function r(e) {
            var r, i, o = !1,
                a = !1,
                u = Math.min(Math.round(.04 * window.innerWidth), 40);

            function c(t) {
                var e = t.touches;
                e && e.length > 1 || (o = !0, e ? (a = !0, r = e[0].clientX) : r = t.clientX, i = r)
            }

            function s(e) {
                if (o) {
                    if (a && "mousemove" === e.type) return e.preventDefault(), void e.stopPropagation();
                    var r = e.touches,
                        c = r ? r[0].clientX : e.clientX,
                        s = c - i;
                    i = c, Math.abs(s) > u && n && "" === String(n()) && (! function(e, n, r) {
                        var i = t.Event(e, {
                            originalEvent: n
                        });
                        t(n.target).trigger(i, r)
                    }("swipe", e, {
                        direction: s > 0 ? "right" : "left"
                    }), l())
                }
            }

            function f(t) {
                if (o) return o = !1, a && "mouseup" === t.type ? (t.preventDefault(), t.stopPropagation(), void(a = !1)) : void 0
            }

            function l() {
                o = !1
            }
            e.addEventListener("touchstart", c, !1), e.addEventListener("touchmove", s, !1), e.addEventListener("touchend", f, !1), e.addEventListener("touchcancel", l, !1), e.addEventListener("mousedown", c, !1), e.addEventListener("mousemove", s, !1), e.addEventListener("mouseup", f, !1), e.addEventListener("mouseout", l, !1), this.destroy = function() {
                e.removeEventListener("touchstart", c, !1), e.removeEventListener("touchmove", s, !1), e.removeEventListener("touchend", f, !1), e.removeEventListener("touchcancel", l, !1), e.removeEventListener("mousedown", c, !1), e.removeEventListener("mousemove", s, !1), e.removeEventListener("mouseup", f, !1), e.removeEventListener("mouseout", l, !1), e = null
            }
        }
        return t.event.special.tap = {
            bindType: "click",
            delegateType: "click"
        }, e.init = function(e) {
            return (e = "string" == typeof e ? t(e).get(0) : e) ? new r(e) : null
        }, e.instance = e.init(document), e
    })
}, function(t, e, n) {
    "use strict";
    var r = n(4),
        i = n(39),
        o = {
            ARROW_LEFT: 37,
            ARROW_UP: 38,
            ARROW_RIGHT: 39,
            ARROW_DOWN: 40,
            ESCAPE: 27,
            SPACE: 32,
            ENTER: 13,
            HOME: 36,
            END: 35
        },
        a = !0,
        u = /^#[a-zA-Z0-9\-_]+$/;
    r.define("dropdown", t.exports = function(t, e) {
        var n, c, s = e.debounce,
            f = {},
            l = r.env(),
            d = !1,
            p = r.env.touch,
            v = ".w-dropdown",
            h = "w--open",
            E = i.triggers,
            g = 900,
            _ = "focusout" + v,
            y = "keydown" + v,
            m = "mouseenter" + v,
            I = "mousemove" + v,
            T = "mouseleave" + v,
            O = (p ? "click" : "mouseup") + v,
            b = "w-close" + v,
            A = "setting" + v,
            w = t(document);

        function S() {
            n = l && r.env("design"), (c = w.find(v)).each(R)
        }

        function R(e, i) {
            var c = t(i),
                f = t.data(i, v);
            f || (f = t.data(i, v, {
                open: !1,
                el: c,
                config: {},
                selectedIdx: -1
            })), f.toggle = f.el.children(".w-dropdown-toggle"), f.list = f.el.children(".w-dropdown-list"), f.links = f.list.find("a:not(.w-dropdown .w-dropdown a)"), f.complete = function(t) {
                return function() {
                    t.list.removeClass(h), t.toggle.removeClass(h), t.manageZ && t.el.css("z-index", "")
                }
            }(f), f.mouseLeave = function(t) {
                return function() {
                    t.hovering = !1, t.links.is(":focus") || L(t)
                }
            }(f), f.mouseUpOutside = function(e) {
                e.mouseUpOutside && w.off(O, e.mouseUpOutside);
                return s(function(n) {
                    if (e.open) {
                        var i = t(n.target);
                        if (!i.closest(".w-dropdown-toggle").length) {
                            var o = -1 === t.inArray(e.el[0], i.parents(v)),
                                a = r.env("editor");
                            if (o) {
                                if (a) {
                                    var u = 1 === i.parents().length && 1 === i.parents("svg").length,
                                        c = i.parents(".w-editor-bem-EditorHoverControls").length;
                                    if (u || c) return
                                }
                                L(e)
                            }
                        }
                    }
                })
            }(f), f.mouseMoveOutside = function(e) {
                return s(function(n) {
                    if (e.open) {
                        var r = t(n.target),
                            i = -1 === t.inArray(e.el[0], r.parents(v));
                        if (i) {
                            var o = r.parents(".w-editor-bem-EditorHoverControls").length,
                                a = r.parents(".w-editor-bem-RTToolbar").length,
                                u = t(".w-editor-bem-EditorOverlay"),
                                c = u.find(".w-editor-edit-outline").length || u.find(".w-editor-bem-RTToolbar").length;
                            if (o || a || c) return;
                            e.hovering = !1, L(e)
                        }
                    }
                })
            }(f), N(f);
            var d = f.toggle.attr("id"),
                p = f.list.attr("id");
            d || (d = "w-dropdown-toggle-" + e), p || (p = "w-dropdown-list-" + e), f.toggle.attr("id", d), f.toggle.attr("aria-controls", p), f.toggle.attr("aria-haspopup", "menu"), f.toggle.attr("aria-expanded", "false"), f.toggle.find(".w-icon-dropdown-toggle").attr("aria-hidden", "true"), "BUTTON" !== f.toggle.prop("tagName") && (f.toggle.attr("role", "button"), f.toggle.attr("tabindex") || f.toggle.attr("tabindex", "0")), f.list.attr("id", p), f.list.attr("aria-labelledby", d), f.links.each(function(t, e) {
                e.hasAttribute("tabindex") || e.setAttribute("tabindex", "0"), u.test(e.hash) && e.addEventListener("click", L.bind(null, f))
            }), f.el.off(v), f.toggle.off(v), f.nav && f.nav.off(v);
            var E = x(f, a);
            n && f.el.on(A, function(t) {
                return function(e, n) {
                    n = n || {}, N(t), !0 === n.open && C(t), !1 === n.open && L(t, {
                        immediate: !0
                    })
                }
            }(f)), n || (l && (f.hovering = !1, L(f)), f.config.hover && f.toggle.on(m, function(t) {
                return function() {
                    t.hovering = !0, C(t)
                }
            }(f)), f.el.on(b, E), f.el.on(y, function(t) {
                return function(e) {
                    if (!n && t.open) switch (t.selectedIdx = t.links.index(document.activeElement), e.keyCode) {
                        case o.HOME:
                            if (!t.open) return;
                            return t.selectedIdx = 0, P(t), e.preventDefault();
                        case o.END:
                            if (!t.open) return;
                            return t.selectedIdx = t.links.length - 1, P(t), e.preventDefault();
                        case o.ESCAPE:
                            return L(t), t.toggle.focus(), e.stopPropagation();
                        case o.ARROW_RIGHT:
                        case o.ARROW_DOWN:
                            return t.selectedIdx = Math.min(t.links.length - 1, t.selectedIdx + 1), P(t), e.preventDefault();
                        case o.ARROW_LEFT:
                        case o.ARROW_UP:
                            return t.selectedIdx = Math.max(-1, t.selectedIdx - 1), P(t), e.preventDefault()
                    }
                }
            }(f)), f.el.on(_, function(t) {
                return s(function(e) {
                    var n = e.relatedTarget,
                        r = e.target,
                        i = t.el[0],
                        o = i.contains(n) || i.contains(r);
                    return o || L(t), e.stopPropagation()
                })
            }(f)), f.toggle.on(O, E), f.toggle.on(y, function(t) {
                var e = x(t, a);
                return function(r) {
                    if (!n) {
                        if (!t.open) switch (r.keyCode) {
                            case o.ARROW_UP:
                            case o.ARROW_DOWN:
                                return r.stopPropagation()
                        }
                        switch (r.keyCode) {
                            case o.SPACE:
                            case o.ENTER:
                                return e(), r.stopPropagation(), r.preventDefault()
                        }
                    }
                }
            }(f)), f.nav = f.el.closest(".w-nav"), f.nav.on(b, E))
        }

        function N(t) {
            var e = Number(t.el.css("z-index"));
            t.manageZ = e === g || e === g + 1, t.config = {
                hover: "true" === t.el.attr("data-hover") && !p,
                delay: t.el.attr("data-delay")
            }
        }

        function x(t, e) {
            return s(function(n) {
                if (t.open || n && "w-close" === n.type) return L(t, {
                    forceClose: e
                });
                C(t)
            })
        }

        function C(e) {
            if (!e.open) {
                ! function(e) {
                    var n = e.el[0];
                    c.each(function(e, r) {
                        var i = t(r);
                        i.is(n) || i.has(n).length || i.triggerHandler(b)
                    })
                }(e), e.open = !0, e.list.addClass(h), e.toggle.addClass(h), e.toggle.attr("aria-expanded", "true"), E.intro(0, e.el[0]), r.redraw.up(), e.manageZ && e.el.css("z-index", g + 1);
                var i = r.env("editor");
                n || w.on(O, e.mouseUpOutside), e.hovering && !i && e.el.on(T, e.mouseLeave), e.hovering && i && w.on(I, e.mouseMoveOutside), window.clearTimeout(e.delayId)
            }
        }

        function L(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                n = e.immediate,
                r = e.forceClose;
            if (t.open && (!t.config.hover || !t.hovering || r)) {
                t.toggle.attr("aria-expanded", "false"), t.open = !1;
                var i = t.config;
                if (E.outro(0, t.el[0]), w.off(O, t.mouseUpOutside), w.off(I, t.mouseMoveOutside), t.el.off(T, t.mouseLeave), window.clearTimeout(t.delayId), !i.delay || n) return t.complete();
                t.delayId = window.setTimeout(t.complete, i.delay)
            }
        }

        function P(t) {
            t.links[t.selectedIdx] && t.links[t.selectedIdx].focus()
        }
        return f.ready = S, f.design = function() {
            d && w.find(v).each(function(e, n) {
                t(n).triggerHandler(b)
            }), d = !1, S()
        }, f.preview = function() {
            d = !0, S()
        }, f
    })
}, function(t, e, n) {
    "use strict";
    var r = n(4),
        i = n(39),
        o = {
            ARROW_LEFT: 37,
            ARROW_UP: 38,
            ARROW_RIGHT: 39,
            ARROW_DOWN: 40,
            ESCAPE: 27,
            SPACE: 32,
            ENTER: 13,
            HOME: 36,
            END: 35
        };
    r.define("navbar", t.exports = function(t, e) {
        var n, a, u, c, s = {},
            f = t.tram,
            l = t(window),
            d = t(document),
            p = e.debounce,
            v = r.env(),
            h = '<div class="w-nav-overlay" data-wf-ignore />',
            E = ".w-nav",
            g = "w--open",
            _ = "w--nav-dropdown-open",
            y = "w--nav-dropdown-toggle-open",
            m = "w--nav-dropdown-list-open",
            I = "w--nav-link-open",
            T = i.triggers,
            O = t();

        function b() {
            r.resize.off(A)
        }

        function A() {
            a.each(M)
        }

        function w(n, r) {
            var i = t(r),
                a = t.data(r, E);
            a || (a = t.data(r, E, {
                open: !1,
                el: i,
                config: {},
                selectedIdx: -1
            })), a.menu = i.find(".w-nav-menu"), a.links = a.menu.find(".w-nav-link"), a.dropdowns = a.menu.find(".w-dropdown"), a.dropdownToggle = a.menu.find(".w-dropdown-toggle"), a.dropdownList = a.menu.find(".w-dropdown-list"), a.button = i.find(".w-nav-button"), a.container = i.find(".w-container"), a.overlayContainerId = "w-nav-overlay-" + n, a.outside = function(e) {
                e.outside && d.off("click" + E, e.outside);
                return function(n) {
                    var r = t(n.target);
                    c && r.closest(".w-editor-bem-EditorOverlay").length || D(e, r)
                }
            }(a);
            var s = i.find(".w-nav-brand");
            s && "/" === s.attr("href") && null == s.attr("aria-label") && s.attr("aria-label", "home"), a.button.attr("style", "-webkit-user-select: text;"), null == a.button.attr("aria-label") && a.button.attr("aria-label", "menu"), a.button.attr("role", "button"), a.button.attr("tabindex", "0"), a.button.attr("aria-controls", a.overlayContainerId), a.button.attr("aria-haspopup", "menu"), a.button.attr("aria-expanded", "false"), a.el.off(E), a.button.off(E), a.menu.off(E), N(a), u ? (R(a), a.el.on("setting" + E, function(t) {
                return function(n, r) {
                    r = r || {};
                    var i = l.width();
                    N(t), !0 === r.open && k(t, !0), !1 === r.open && V(t, !0), t.open && e.defer(function() {
                        i !== l.width() && C(t)
                    })
                }
            }(a))) : (! function(e) {
                if (e.overlay) return;
                e.overlay = t(h).appendTo(e.el), e.overlay.attr("id", e.overlayContainerId), e.parent = e.menu.parent(), V(e, !0)
            }(a), a.button.on("click" + E, L(a)), a.menu.on("click" + E, "a", P(a)), a.button.on("keydown" + E, function(t) {
                return function(e) {
                    switch (e.keyCode) {
                        case o.SPACE:
                        case o.ENTER:
                            return L(t)(), e.preventDefault(), e.stopPropagation();
                        case o.ESCAPE:
                            return V(t), e.preventDefault(), e.stopPropagation();
                        case o.ARROW_RIGHT:
                        case o.ARROW_DOWN:
                        case o.HOME:
                        case o.END:
                            return t.open ? (e.keyCode === o.END ? t.selectedIdx = t.links.length - 1 : t.selectedIdx = 0, x(t), e.preventDefault(), e.stopPropagation()) : (e.preventDefault(), e.stopPropagation())
                    }
                }
            }(a)), a.el.on("keydown" + E, function(t) {
                return function(e) {
                    if (t.open) switch (t.selectedIdx = t.links.index(document.activeElement), e.keyCode) {
                        case o.HOME:
                        case o.END:
                            return e.keyCode === o.END ? t.selectedIdx = t.links.length - 1 : t.selectedIdx = 0, x(t), e.preventDefault(), e.stopPropagation();
                        case o.ESCAPE:
                            return V(t), t.button.focus(), e.preventDefault(), e.stopPropagation();
                        case o.ARROW_LEFT:
                        case o.ARROW_UP:
                            return t.selectedIdx = Math.max(-1, t.selectedIdx - 1), x(t), e.preventDefault(), e.stopPropagation();
                        case o.ARROW_RIGHT:
                        case o.ARROW_DOWN:
                            return t.selectedIdx = Math.min(t.links.length - 1, t.selectedIdx + 1), x(t), e.preventDefault(), e.stopPropagation()
                    }
                }
            }(a))), M(n, r)
        }

        function S(e, n) {
            var r = t.data(n, E);
            r && (R(r), t.removeData(n, E))
        }

        function R(t) {
            t.overlay && (V(t, !0), t.overlay.remove(), t.overlay = null)
        }

        function N(t) {
            var n = {},
                r = t.config || {},
                i = n.animation = t.el.attr("data-animation") || "default";
            n.animOver = /^over/.test(i), n.animDirect = /left$/.test(i) ? -1 : 1, r.animation !== i && t.open && e.defer(C, t), n.easing = t.el.attr("data-easing") || "ease", n.easing2 = t.el.attr("data-easing2") || "ease";
            var o = t.el.attr("data-duration");
            n.duration = null != o ? Number(o) : 400, n.docHeight = t.el.attr("data-doc-height"), t.config = n
        }

        function x(t) {
            if (t.links[t.selectedIdx]) {
                var e = t.links[t.selectedIdx];
                e.focus(), P(e)
            }
        }

        function C(t) {
            t.open && (V(t, !0), k(t, !0))
        }

        function L(t) {
            return p(function() {
                t.open ? V(t) : k(t)
            })
        }

        function P(e) {
            return function(n) {
                var i = t(this).attr("href");
                r.validClick(n.currentTarget) ? i && 0 === i.indexOf("#") && e.open && V(e) : n.preventDefault()
            }
        }
        s.ready = s.design = s.preview = function() {
            if (u = v && r.env("design"), c = r.env("editor"), n = t(document.body), !(a = d.find(E)).length) return;
            a.each(w), b(), r.resize.on(A)
        }, s.destroy = function() {
            O = t(), b(), a && a.length && a.each(S)
        };
        var D = p(function(t, e) {
            if (t.open) {
                var n = e.closest(".w-nav-menu");
                t.menu.is(n) || V(t)
            }
        });

        function M(e, n) {
            var r = t.data(n, E),
                i = r.collapsed = "none" !== r.button.css("display");
            if (!r.open || i || u || V(r, !0), r.container.length) {
                var o = function(e) {
                    var n = e.container.css(j);
                    "none" === n && (n = "");
                    return function(e, r) {
                        (r = t(r)).css(j, ""), "none" === r.css(j) && r.css(j, n)
                    }
                }(r);
                r.links.each(o), r.dropdowns.each(o)
            }
            r.open && X(r)
        }
        var j = "max-width";

        function F(t, e) {
            e.setAttribute("data-nav-menu-open", "")
        }

        function G(t, e) {
            e.removeAttribute("data-nav-menu-open")
        }

        function k(t, e) {
            if (!t.open) {
                t.open = !0, t.menu.each(F), t.links.addClass(I), t.dropdowns.addClass(_), t.dropdownToggle.addClass(y), t.dropdownList.addClass(m), t.button.addClass(g);
                var n = t.config;
                ("none" === n.animation || !f.support.transform || n.duration <= 0) && (e = !0);
                var i = X(t),
                    o = t.menu.outerHeight(!0),
                    a = t.menu.outerWidth(!0),
                    c = t.el.height(),
                    s = t.el[0];
                if (M(0, s), T.intro(0, s), r.redraw.up(), u || d.on("click" + E, t.outside), e) v();
                else {
                    var l = "transform " + n.duration + "ms " + n.easing;
                    if (t.overlay && (O = t.menu.prev(), t.overlay.show().append(t.menu)), n.animOver) return f(t.menu).add(l).set({
                        x: n.animDirect * a,
                        height: i
                    }).start({
                        x: 0
                    }).then(v), void(t.overlay && t.overlay.width(a));
                    var p = c + o;
                    f(t.menu).add(l).set({
                        y: -p
                    }).start({
                        y: 0
                    }).then(v)
                }
            }

            function v() {
                t.button.attr("aria-expanded", "true")
            }
        }

        function X(t) {
            var e = t.config,
                r = e.docHeight ? d.height() : n.height();
            return e.animOver ? t.menu.height(r) : "fixed" !== t.el.css("position") && (r -= t.el.outerHeight(!0)), t.overlay && t.overlay.height(r), r
        }

        function V(t, e) {
            if (t.open) {
                t.open = !1, t.button.removeClass(g);
                var n = t.config;
                if (("none" === n.animation || !f.support.transform || n.duration <= 0) && (e = !0), T.outro(0, t.el[0]), d.off("click" + E, t.outside), e) return f(t.menu).stop(), void c();
                var r = "transform " + n.duration + "ms " + n.easing2,
                    i = t.menu.outerHeight(!0),
                    o = t.menu.outerWidth(!0),
                    a = t.el.height();
                if (n.animOver) f(t.menu).add(r).start({
                    x: o * n.animDirect
                }).then(c);
                else {
                    var u = a + i;
                    f(t.menu).add(r).start({
                        y: -u
                    }).then(c)
                }
            }

            function c() {
                t.menu.height(""), f(t.menu).set({
                    x: 0,
                    y: 0
                }), t.menu.each(G), t.links.removeClass(I), t.dropdowns.removeClass(_), t.dropdownToggle.removeClass(y), t.dropdownList.removeClass(m), t.overlay && t.overlay.children().length && (O.length ? t.menu.insertAfter(O) : t.menu.prependTo(t.parent), t.overlay.attr("style", "").hide()), t.el.triggerHandler("w-close"), t.button.attr("aria-expanded", "false")
            }
        }
        return s
    })
}]);
/**
 * ----------------------------------------------------------------------
 * Webflow: Interactions 2.0: Init
 */
Webflow.require('ix2').init({
    "events": {
        "e-11": {
            "id": "e-11",
            "animationType": "custom",
            "eventTypeId": "MOUSE_MOVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-11",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "610d3887fad63a102758cff1|c4b1c450-2db7-6fcd-0360-b15d8a515666",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "selector": ".cta-a-container",
                "originalId": "610d3887fad63a102758cff1|1e15bf88-e516-dcff-6b53-97ab31d92d0c",
                "appliesTo": "CLASS"
            }],
            "config": [{
                "continuousParameterGroupId": "a-11-p",
                "selectedAxis": "X_AXIS",
                "basedOn": "ELEMENT",
                "reverse": false,
                "smoothing": 90,
                "restingState": 50
            }, {
                "continuousParameterGroupId": "a-11-p-2",
                "selectedAxis": "Y_AXIS",
                "basedOn": "ELEMENT",
                "reverse": false,
                "smoothing": 90,
                "restingState": 50
            }],
            "createdOn": 1596719266460
        },
        "e-14": {
            "id": "e-14",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_MOVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-11",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "610d3887fad63a102758cff1|52c0fa8f-d06a-7281-4ad2-790ee0472eb3",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "610d3887fad63a102758cff1|52c0fa8f-d06a-7281-4ad2-790ee0472eb3",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-11-p",
                "selectedAxis": "X_AXIS",
                "basedOn": "ELEMENT",
                "reverse": false,
                "smoothing": 90,
                "restingState": 50
            }, {
                "continuousParameterGroupId": "a-11-p-2",
                "selectedAxis": "Y_AXIS",
                "basedOn": "ELEMENT",
                "reverse": false,
                "smoothing": 90,
                "restingState": 50
            }],
            "createdOn": 1621267056000
        },
        "e-20": {
            "id": "e-20",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_MOVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-16",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "8202f430-7c81-dd83-9bd5-3db75f70a362",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "8202f430-7c81-dd83-9bd5-3db75f70a362",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-16-p",
                "selectedAxis": "X_AXIS",
                "basedOn": "ELEMENT",
                "reverse": false,
                "smoothing": 90,
                "restingState": 50
            }, {
                "continuousParameterGroupId": "a-16-p-2",
                "selectedAxis": "Y_AXIS",
                "basedOn": "ELEMENT",
                "reverse": false,
                "smoothing": 90,
                "restingState": 50
            }],
            "createdOn": 1621324528470
        },
        "e-21": {
            "id": "e-21",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_MOVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-16",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "8202f430-7c81-dd83-9bd5-3db75f70a369",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "8202f430-7c81-dd83-9bd5-3db75f70a369",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-16-p",
                "selectedAxis": "X_AXIS",
                "basedOn": "ELEMENT",
                "reverse": false,
                "smoothing": 90,
                "restingState": 50
            }, {
                "continuousParameterGroupId": "a-16-p-2",
                "selectedAxis": "Y_AXIS",
                "basedOn": "ELEMENT",
                "reverse": false,
                "smoothing": 90,
                "restingState": 50
            }],
            "createdOn": 1621324528971
        },
        "e-22": {
            "id": "e-22",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_MOVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-17",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "610d3887fad63a102758cff1",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "610d3887fad63a102758cff1",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-17-p",
                "selectedAxis": "X_AXIS",
                "basedOn": "VIEWPORT",
                "reverse": false,
                "smoothing": 85,
                "restingState": 50
            }, {
                "continuousParameterGroupId": "a-17-p-2",
                "selectedAxis": "Y_AXIS",
                "basedOn": "VIEWPORT",
                "reverse": false,
                "smoothing": 85,
                "restingState": 50
            }],
            "createdOn": 1621328124373
        },
        "e-24": {
            "id": "e-24",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-14",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-25"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "selector": ".navlink",
                "originalId": "8202f430-7c81-dd83-9bd5-3db75f70a35a",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".navlink",
                "originalId": "8202f430-7c81-dd83-9bd5-3db75f70a35a",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1621330078514
        },
        "e-25": {
            "id": "e-25",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-15",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-24"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "selector": ".navlink",
                "originalId": "8202f430-7c81-dd83-9bd5-3db75f70a35a",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".navlink",
                "originalId": "8202f430-7c81-dd83-9bd5-3db75f70a35a",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1621330078515
        },
        "e-26": {
            "id": "e-26",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-14",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-27"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "selector": ".link-block",
                "originalId": "610d3887fad63a102758cff1|c2e79628-a93c-aee3-f205-2891c2b18d19",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".link-block",
                "originalId": "610d3887fad63a102758cff1|c2e79628-a93c-aee3-f205-2891c2b18d19",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1621330241019
        },
        "e-27": {
            "id": "e-27",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-15",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-26"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "selector": ".link-block",
                "originalId": "610d3887fad63a102758cff1|c2e79628-a93c-aee3-f205-2891c2b18d19",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".link-block",
                "originalId": "610d3887fad63a102758cff1|c2e79628-a93c-aee3-f205-2891c2b18d19",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1621330241020
        },
        "e-29": {
            "id": "e-29",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_FINISH",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-19",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-28"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "610d3887fad63a102758cff1",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "610d3887fad63a102758cff1",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1621341642744
        },
        "e-32": {
            "id": "e-32",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-22",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-33"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "610d3887fad63a102758cff1|134d000e-1f27-fdc9-5788-770af3a585b2",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "610d3887fad63a102758cff1|134d000e-1f27-fdc9-5788-770af3a585b2",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 50,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1621352045750
        },
        "e-33": {
            "id": "e-33",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_OUT_OF_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-23",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-32"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "610d3887fad63a102758cff1|134d000e-1f27-fdc9-5788-770af3a585b2",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "610d3887fad63a102758cff1|134d000e-1f27-fdc9-5788-770af3a585b2",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 50,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1621352045751
        },
        "e-34": {
            "id": "e-34",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_MOVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-11",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "610d3887fad63a102758cff1|f3b15792-deb8-39b3-96b8-26dce97919f6",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "610d3887fad63a102758cff1|f3b15792-deb8-39b3-96b8-26dce97919f6",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-11-p",
                "selectedAxis": "X_AXIS",
                "basedOn": "ELEMENT",
                "reverse": false,
                "smoothing": 90,
                "restingState": 50
            }, {
                "continuousParameterGroupId": "a-11-p-2",
                "selectedAxis": "Y_AXIS",
                "basedOn": "ELEMENT",
                "reverse": false,
                "smoothing": 90,
                "restingState": 50
            }],
            "createdOn": 1621354329625
        },
        "e-36": {
            "id": "e-36",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_MOVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-16",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "724b4703-0a40-a6ae-9e73-23751d22e535",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "724b4703-0a40-a6ae-9e73-23751d22e535",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-16-p",
                "selectedAxis": "X_AXIS",
                "basedOn": "ELEMENT",
                "reverse": false,
                "smoothing": 90,
                "restingState": 50
            }, {
                "continuousParameterGroupId": "a-16-p-2",
                "selectedAxis": "Y_AXIS",
                "basedOn": "ELEMENT",
                "reverse": false,
                "smoothing": 90,
                "restingState": 50
            }],
            "createdOn": 1621410132577
        },
        "e-37": {
            "id": "e-37",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_MOVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-16",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "724b4703-0a40-a6ae-9e73-23751d22e53a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "724b4703-0a40-a6ae-9e73-23751d22e53a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-16-p",
                "selectedAxis": "X_AXIS",
                "basedOn": "ELEMENT",
                "reverse": false,
                "smoothing": 90,
                "restingState": 50
            }, {
                "continuousParameterGroupId": "a-16-p-2",
                "selectedAxis": "Y_AXIS",
                "basedOn": "ELEMENT",
                "reverse": false,
                "smoothing": 90,
                "restingState": 50
            }],
            "createdOn": 1621410133372
        },
        "e-40": {
            "id": "e-40",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-14",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-41"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "selector": ".press-link",
                "originalId": "610d3887fad63a102758cff1|c6cab80a-9044-9d0a-11cf-f8ab1e90b497",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".press-link",
                "originalId": "610d3887fad63a102758cff1|c6cab80a-9044-9d0a-11cf-f8ab1e90b497",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1621426180607
        },
        "e-41": {
            "id": "e-41",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-15",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-40"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "selector": ".press-link",
                "originalId": "610d3887fad63a102758cff1|c6cab80a-9044-9d0a-11cf-f8ab1e90b497",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".press-link",
                "originalId": "610d3887fad63a102758cff1|c6cab80a-9044-9d0a-11cf-f8ab1e90b497",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1621426180609
        },
        "e-42": {
            "id": "e-42",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_MOVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-24",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".press-link",
                "originalId": "610d3887fad63a102758cff1|c6cab80a-9044-9d0a-11cf-f8ab1e90b497",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".press-link",
                "originalId": "610d3887fad63a102758cff1|c6cab80a-9044-9d0a-11cf-f8ab1e90b497",
                "appliesTo": "CLASS"
            }],
            "config": [{
                "continuousParameterGroupId": "a-24-p",
                "selectedAxis": "X_AXIS",
                "basedOn": "ELEMENT",
                "reverse": false,
                "smoothing": 93,
                "restingState": 50
            }, {
                "continuousParameterGroupId": "a-24-p-2",
                "selectedAxis": "Y_AXIS",
                "basedOn": "ELEMENT",
                "reverse": false,
                "smoothing": 93,
                "restingState": 50
            }],
            "createdOn": 1621426439917
        },
        "e-43": {
            "id": "e-43",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-26",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-44"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "610d3887fad63a102758cff1|43f8f9f9-abc6-8c7a-23a5-bdb75ff9696d",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "610d3887fad63a102758cff1|43f8f9f9-abc6-8c7a-23a5-bdb75ff9696d",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1621502982070
        },
        "e-44": {
            "id": "e-44",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-27",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-43"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "610d3887fad63a102758cff1|43f8f9f9-abc6-8c7a-23a5-bdb75ff9696d",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "610d3887fad63a102758cff1|43f8f9f9-abc6-8c7a-23a5-bdb75ff9696d",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1621502982072
        },
        "e-45": {
            "id": "e-45",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-14",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-46"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "610d3887fad63a102758cff1|43f8f9f9-abc6-8c7a-23a5-bdb75ff9696d",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "610d3887fad63a102758cff1|43f8f9f9-abc6-8c7a-23a5-bdb75ff9696d",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1621504206997
        },
        "e-46": {
            "id": "e-46",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-15",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-45"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "610d3887fad63a102758cff1|43f8f9f9-abc6-8c7a-23a5-bdb75ff9696d",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "610d3887fad63a102758cff1|43f8f9f9-abc6-8c7a-23a5-bdb75ff9696d",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1621504206999
        },
        "e-47": {
            "id": "e-47",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-14",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-48"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "610d3887fad63a102758cff1|5d85766c-792a-c810-d78d-c2d5e3a729e6",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "610d3887fad63a102758cff1|5d85766c-792a-c810-d78d-c2d5e3a729e6",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1621513241019
        },
        "e-48": {
            "id": "e-48",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-15",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-47"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "610d3887fad63a102758cff1|5d85766c-792a-c810-d78d-c2d5e3a729e6",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "610d3887fad63a102758cff1|5d85766c-792a-c810-d78d-c2d5e3a729e6",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1621513241019
        },
        "e-49": {
            "id": "e-49",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-26",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-50"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "610d3887fad63a102758cff1|5d85766c-792a-c810-d78d-c2d5e3a729e6",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "610d3887fad63a102758cff1|5d85766c-792a-c810-d78d-c2d5e3a729e6",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1621513241019
        },
        "e-50": {
            "id": "e-50",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-27",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-49"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "610d3887fad63a102758cff1|5d85766c-792a-c810-d78d-c2d5e3a729e6",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "610d3887fad63a102758cff1|5d85766c-792a-c810-d78d-c2d5e3a729e6",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1621513241019
        },
        "e-51": {
            "id": "e-51",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-20",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-52"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "610d3887fad63a102758cff1|5d85766c-792a-c810-d78d-c2d5e3a729eb",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "610d3887fad63a102758cff1|5d85766c-792a-c810-d78d-c2d5e3a729eb",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 45,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1621513241019
        },
        "e-52": {
            "id": "e-52",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_OUT_OF_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-21",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-51"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "610d3887fad63a102758cff1|5d85766c-792a-c810-d78d-c2d5e3a729eb",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "610d3887fad63a102758cff1|5d85766c-792a-c810-d78d-c2d5e3a729eb",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 45,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1621513241019
        },
        "e-53": {
            "id": "e-53",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_MOVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-28",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".hover",
                "originalId": "610d3887fad63a102758cff1|43f8f9f9-abc6-8c7a-23a5-bdb75ff9696d",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".hover",
                "originalId": "610d3887fad63a102758cff1|43f8f9f9-abc6-8c7a-23a5-bdb75ff9696d",
                "appliesTo": "CLASS"
            }],
            "config": [{
                "continuousParameterGroupId": "a-28-p",
                "selectedAxis": "X_AXIS",
                "basedOn": "ELEMENT",
                "reverse": false,
                "smoothing": 90,
                "restingState": 50
            }, {
                "continuousParameterGroupId": "a-28-p-2",
                "selectedAxis": "Y_AXIS",
                "basedOn": "ELEMENT",
                "reverse": false,
                "smoothing": 90,
                "restingState": 50
            }],
            "createdOn": 1621516052736
        },
        "e-56": {
            "id": "e-56",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "FADE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "fadeIn",
                    "autoStopEventId": "e-57"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "610d3887fad63a102758cff1|e6721518-2f52-ca8b-9b75-b6cc705ff5f4",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "610d3887fad63a102758cff1|e6721518-2f52-ca8b-9b75-b6cc705ff5f4",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 20,
                "scrollOffsetUnit": "%",
                "delay": 0,
                "direction": null,
                "effectIn": true
            },
            "createdOn": 1621519755904
        },
        "e-58": {
            "id": "e-58",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "FADE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "fadeIn",
                    "autoStopEventId": "e-59"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "610d3887fad63a102758cff1|376c2db6-9fa0-998d-93a2-c19196f26442",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "610d3887fad63a102758cff1|376c2db6-9fa0-998d-93a2-c19196f26442",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 20,
                "scrollOffsetUnit": "%",
                "delay": 100,
                "direction": null,
                "effectIn": true
            },
            "createdOn": 1621519799302
        },
        "e-60": {
            "id": "e-60",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "FADE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "fadeIn",
                    "autoStopEventId": "e-61"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "610d3887fad63a102758cff1|70e06fc5-e9e6-dd90-c212-81a9f256718f",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "610d3887fad63a102758cff1|70e06fc5-e9e6-dd90-c212-81a9f256718f",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 20,
                "scrollOffsetUnit": "%",
                "delay": 500,
                "direction": null,
                "effectIn": true
            },
            "createdOn": 1621519829550
        },
        "e-62": {
            "id": "e-62",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "FADE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "fadeIn",
                    "autoStopEventId": "e-63"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "610d3887fad63a102758cff1|66bff4bf-b4cc-9a57-3ea2-0de4a6ebf5aa",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "610d3887fad63a102758cff1|66bff4bf-b4cc-9a57-3ea2-0de4a6ebf5aa",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 20,
                "scrollOffsetUnit": "%",
                "delay": 200,
                "direction": null,
                "effectIn": true
            },
            "createdOn": 1621519847749
        },
        "e-64": {
            "id": "e-64",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "FADE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "fadeIn",
                    "autoStopEventId": "e-65"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "610d3887fad63a102758cff1|3e190b2b-24b8-948c-831e-76aafb8657f0",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "610d3887fad63a102758cff1|3e190b2b-24b8-948c-831e-76aafb8657f0",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 20,
                "scrollOffsetUnit": "%",
                "delay": 100,
                "direction": null,
                "effectIn": true
            },
            "createdOn": 1621519865226
        },
        "e-66": {
            "id": "e-66",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "FADE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "fadeIn",
                    "autoStopEventId": "e-67"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "610d3887fad63a102758cff1|020d090d-239b-7e03-70d1-709afaf28a6b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "610d3887fad63a102758cff1|020d090d-239b-7e03-70d1-709afaf28a6b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 20,
                "scrollOffsetUnit": "%",
                "delay": 300,
                "direction": null,
                "effectIn": true
            },
            "createdOn": 1621519877448
        },
        "e-68": {
            "id": "e-68",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "FADE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "fadeIn",
                    "autoStopEventId": "e-69"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "610d3887fad63a102758cff1|2e1e5314-599b-a53a-f6c5-c3ce51721bf3",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "610d3887fad63a102758cff1|2e1e5314-599b-a53a-f6c5-c3ce51721bf3",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 20,
                "scrollOffsetUnit": "%",
                "delay": 200,
                "direction": null,
                "effectIn": true
            },
            "createdOn": 1621519901001
        },
        "e-70": {
            "id": "e-70",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "FADE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "fadeIn",
                    "autoStopEventId": "e-71"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "610d3887fad63a102758cff1|4fd551f7-0992-fc3e-a02f-b47c04236038",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "610d3887fad63a102758cff1|4fd551f7-0992-fc3e-a02f-b47c04236038",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 20,
                "scrollOffsetUnit": "%",
                "delay": 0,
                "direction": null,
                "effectIn": true
            },
            "createdOn": 1621519918193
        },
        "e-73": {
            "id": "e-73",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_FINISH",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-30",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-72"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "610d3887fad63a102758cff1",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "610d3887fad63a102758cff1",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1621521708866
        },
        "e-77": {
            "id": "e-77",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_FINISH",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-30",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-76"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "610d3887fad63a3cd958d003",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "610d3887fad63a3cd958d003",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1621522386599
        },
        "e-78": {
            "id": "e-78",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_MOVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-17",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "610d3887fad63a3cd958d003",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "610d3887fad63a3cd958d003",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-17-p",
                "selectedAxis": "X_AXIS",
                "basedOn": "VIEWPORT",
                "reverse": false,
                "smoothing": 85,
                "restingState": 50
            }, {
                "continuousParameterGroupId": "a-17-p-2",
                "selectedAxis": "Y_AXIS",
                "basedOn": "VIEWPORT",
                "reverse": false,
                "smoothing": 85,
                "restingState": 50
            }],
            "createdOn": 1621522543500
        },
        "e-85": {
            "id": "e-85",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_MOVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-16",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "8202f430-7c81-dd83-9bd5-3db75f70a34e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "8202f430-7c81-dd83-9bd5-3db75f70a34e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-16-p",
                "selectedAxis": "X_AXIS",
                "basedOn": "ELEMENT",
                "reverse": false,
                "smoothing": 90,
                "restingState": 50
            }, {
                "continuousParameterGroupId": "a-16-p-2",
                "selectedAxis": "Y_AXIS",
                "basedOn": "ELEMENT",
                "reverse": false,
                "smoothing": 90,
                "restingState": 50
            }],
            "createdOn": 1621585003947
        },
        "e-86": {
            "id": "e-86",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-14",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-87"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "8202f430-7c81-dd83-9bd5-3db75f70a350",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "8202f430-7c81-dd83-9bd5-3db75f70a350",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1621585399633
        },
        "e-87": {
            "id": "e-87",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-15",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-86"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "8202f430-7c81-dd83-9bd5-3db75f70a350",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "8202f430-7c81-dd83-9bd5-3db75f70a350",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1621585399636
        },
        "e-109": {
            "id": "e-109",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_FINISH",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-30",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-108"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "610d3887fad63a62d258cffd",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "610d3887fad63a62d258cffd",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1622100635046
        },
        "e-111": {
            "id": "e-111",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_MOVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-11",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "610d3887fad63a62d258cffd|6d9d1ad8-21cb-5f24-0fc5-5e895471336c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "610d3887fad63a62d258cffd|6d9d1ad8-21cb-5f24-0fc5-5e895471336c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-11-p",
                "selectedAxis": "X_AXIS",
                "basedOn": "ELEMENT",
                "reverse": false,
                "smoothing": 90,
                "restingState": 50
            }, {
                "continuousParameterGroupId": "a-11-p-2",
                "selectedAxis": "Y_AXIS",
                "basedOn": "ELEMENT",
                "reverse": false,
                "smoothing": 90,
                "restingState": 50
            }],
            "createdOn": 1622111033620
        },
        "e-120": {
            "id": "e-120",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_MOVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-11",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "610d3887fad63a62d258cffd|74445969-ec34-9bae-f042-3c8765e196d7",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "610d3887fad63a62d258cffd|74445969-ec34-9bae-f042-3c8765e196d7",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-11-p",
                "selectedAxis": "X_AXIS",
                "basedOn": "ELEMENT",
                "reverse": false,
                "smoothing": 90,
                "restingState": 50
            }, {
                "continuousParameterGroupId": "a-11-p-2",
                "selectedAxis": "Y_AXIS",
                "basedOn": "ELEMENT",
                "reverse": false,
                "smoothing": 90,
                "restingState": 50
            }],
            "createdOn": 1622121510669
        },
        "e-121": {
            "id": "e-121",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_MOVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-11",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "610d3887fad63a62d258cffd|b7e2d73a-8fd0-c54d-f3c2-d5149a66d99b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "610d3887fad63a62d258cffd|b7e2d73a-8fd0-c54d-f3c2-d5149a66d99b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-11-p",
                "selectedAxis": "X_AXIS",
                "basedOn": "ELEMENT",
                "reverse": false,
                "smoothing": 90,
                "restingState": 50
            }, {
                "continuousParameterGroupId": "a-11-p-2",
                "selectedAxis": "Y_AXIS",
                "basedOn": "ELEMENT",
                "reverse": false,
                "smoothing": 90,
                "restingState": 50
            }],
            "createdOn": 1622121511491
        },
        "e-122": {
            "id": "e-122",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_MOVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-11",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "610d3887fad63a62d258cffd|3c065f40-4bd1-22a4-3e44-241a141d8850",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "610d3887fad63a62d258cffd|3c065f40-4bd1-22a4-3e44-241a141d8850",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-11-p",
                "selectedAxis": "X_AXIS",
                "basedOn": "ELEMENT",
                "reverse": false,
                "smoothing": 90,
                "restingState": 50
            }, {
                "continuousParameterGroupId": "a-11-p-2",
                "selectedAxis": "Y_AXIS",
                "basedOn": "ELEMENT",
                "reverse": false,
                "smoothing": 90,
                "restingState": 50
            }],
            "createdOn": 1622121590795
        },
        "e-147": {
            "id": "e-147",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "FADE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "fadeIn",
                    "autoStopEventId": "e-148"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "610d3887fad63a62d258cffd|b7e2d73a-8fd0-c54d-f3c2-d5149a66d99d",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "610d3887fad63a62d258cffd|b7e2d73a-8fd0-c54d-f3c2-d5149a66d99d",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 5,
                "scrollOffsetUnit": "%",
                "delay": 200,
                "direction": null,
                "effectIn": true
            },
            "createdOn": 1622129346678
        },
        "e-149": {
            "id": "e-149",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "FADE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "fadeIn",
                    "autoStopEventId": "e-150"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "610d3887fad63a62d258cffd|74445969-ec34-9bae-f042-3c8765e196d9",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "610d3887fad63a62d258cffd|74445969-ec34-9bae-f042-3c8765e196d9",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 5,
                "scrollOffsetUnit": "%",
                "delay": 200,
                "direction": null,
                "effectIn": true
            },
            "createdOn": 1622129356794
        },
        "e-155": {
            "id": "e-155",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "FADE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "fadeIn",
                    "autoStopEventId": "e-156"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "610d3887fad63a62d258cffd|3c065f40-4bd1-22a4-3e44-241a141d8852",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "610d3887fad63a62d258cffd|3c065f40-4bd1-22a4-3e44-241a141d8852",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 5,
                "scrollOffsetUnit": "%",
                "delay": 200,
                "direction": null,
                "effectIn": true
            },
            "createdOn": 1622129395765
        },
        "e-159": {
            "id": "e-159",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "FADE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "fadeIn",
                    "autoStopEventId": "e-160"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "610d3887fad63a62d258cffd|3c065f40-4bd1-22a4-3e44-241a141d884d",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "610d3887fad63a62d258cffd|3c065f40-4bd1-22a4-3e44-241a141d884d",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 5,
                "scrollOffsetUnit": "%",
                "delay": 200,
                "direction": null,
                "effectIn": true
            },
            "createdOn": 1622129512616
        },
        "e-161": {
            "id": "e-161",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "FADE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "fadeIn",
                    "autoStopEventId": "e-162"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "610d3887fad63a62d258cffd|da2ce33f-b82e-8304-0ed4-cfc6961a464b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "610d3887fad63a62d258cffd|da2ce33f-b82e-8304-0ed4-cfc6961a464b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 5,
                "scrollOffsetUnit": "%",
                "delay": 200,
                "direction": null,
                "effectIn": true
            },
            "createdOn": 1622129524454
        },
        "e-163": {
            "id": "e-163",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "FADE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "fadeIn",
                    "autoStopEventId": "e-164"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "610d3887fad63a62d258cffd|08f53df3-bf17-870d-1289-04709d03f53a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "610d3887fad63a62d258cffd|08f53df3-bf17-870d-1289-04709d03f53a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 5,
                "scrollOffsetUnit": "%",
                "delay": 200,
                "direction": null,
                "effectIn": true
            },
            "createdOn": 1622129534064
        },
        "e-180": {
            "id": "e-180",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_FINISH",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-30",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-179"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "610d3887fad63a12b758d001",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "610d3887fad63a12b758d001",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1622541432488
        },
        "e-198": {
            "id": "e-198",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_MOVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-34",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "selector": ".text-box",
                "originalId": "610d3887fad63a12b758d001|bef27c8e-ada6-d8a4-9dc3-997a86950a6c",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".text-box",
                "originalId": "610d3887fad63a12b758d001|bef27c8e-ada6-d8a4-9dc3-997a86950a6c",
                "appliesTo": "CLASS"
            }],
            "config": [{
                "continuousParameterGroupId": "a-34-p",
                "selectedAxis": "X_AXIS",
                "basedOn": "ELEMENT",
                "reverse": false,
                "smoothing": 85,
                "restingState": 50
            }, {
                "continuousParameterGroupId": "a-34-p-2",
                "selectedAxis": "Y_AXIS",
                "basedOn": "ELEMENT",
                "reverse": false,
                "smoothing": 85,
                "restingState": 50
            }],
            "createdOn": 1622542017609
        },
        "e-256": {
            "id": "e-256",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_MOVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-13",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "610d3887fad63a209958cfff|6b105ecd-d346-6ea5-8be0-bb24b20f7cee",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "610d3887fad63a209958cfff|6b105ecd-d346-6ea5-8be0-bb24b20f7cee",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-13-p",
                "selectedAxis": "X_AXIS",
                "basedOn": "ELEMENT",
                "reverse": false,
                "smoothing": 90,
                "restingState": 50
            }, {
                "continuousParameterGroupId": "a-13-p-2",
                "selectedAxis": "Y_AXIS",
                "basedOn": "ELEMENT",
                "reverse": false,
                "smoothing": 90,
                "restingState": 50
            }],
            "createdOn": 1624285226964
        },
        "e-257": {
            "id": "e-257",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_MOVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-13",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "610d3887fad63a209958cfff|ce5c2110-51dd-46b0-0aac-120a34aa608a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "610d3887fad63a209958cfff|ce5c2110-51dd-46b0-0aac-120a34aa608a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-13-p",
                "selectedAxis": "X_AXIS",
                "basedOn": "ELEMENT",
                "reverse": false,
                "smoothing": 90,
                "restingState": 50
            }, {
                "continuousParameterGroupId": "a-13-p-2",
                "selectedAxis": "Y_AXIS",
                "basedOn": "ELEMENT",
                "reverse": false,
                "smoothing": 90,
                "restingState": 50
            }],
            "createdOn": 1624285399146
        },
        "e-265": {
            "id": "e-265",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-20",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-266"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "610d3887fad63a209958cfff|da524152-7982-6eff-0ee5-bf5f614a353c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "610d3887fad63a209958cfff|da524152-7982-6eff-0ee5-bf5f614a353c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 50,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1624287965308
        },
        "e-266": {
            "id": "e-266",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_OUT_OF_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-21",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-265"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "610d3887fad63a209958cfff|da524152-7982-6eff-0ee5-bf5f614a353c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "610d3887fad63a209958cfff|da524152-7982-6eff-0ee5-bf5f614a353c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 50,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1624287965308
        },
        "e-270": {
            "id": "e-270",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-35",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-271"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "610d3887fad63a209958cfff|da524152-7982-6eff-0ee5-bf5f614a3523",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "610d3887fad63a209958cfff|da524152-7982-6eff-0ee5-bf5f614a3523",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1624432003929
        },
        "e-271": {
            "id": "e-271",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_OUT_OF_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-36",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-270"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "610d3887fad63a209958cfff|da524152-7982-6eff-0ee5-bf5f614a3523",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "610d3887fad63a209958cfff|da524152-7982-6eff-0ee5-bf5f614a3523",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1624432003939
        },
        "e-272": {
            "id": "e-272",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-37",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-273"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "610d3887fad63a209958cfff|ca11e478-86ee-addf-7940-40129eb3d361",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "610d3887fad63a209958cfff|ca11e478-86ee-addf-7940-40129eb3d361",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 10,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1624440387495
        },
        "e-273": {
            "id": "e-273",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_OUT_OF_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-38",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-272"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "610d3887fad63a209958cfff|ca11e478-86ee-addf-7940-40129eb3d361",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "610d3887fad63a209958cfff|ca11e478-86ee-addf-7940-40129eb3d361",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 10,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1624440387503
        },
        "e-274": {
            "id": "e-274",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-39",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-275"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "610d3887fad63a209958cfff|eba9a722-5b09-a12b-a9fb-27eef99c4824",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "610d3887fad63a209958cfff|eba9a722-5b09-a12b-a9fb-27eef99c4824",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 10,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1624440407607
        },
        "e-275": {
            "id": "e-275",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_OUT_OF_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-40",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-274"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "610d3887fad63a209958cfff|eba9a722-5b09-a12b-a9fb-27eef99c4824",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "610d3887fad63a209958cfff|eba9a722-5b09-a12b-a9fb-27eef99c4824",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 10,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1624440407651
        },
        "e-276": {
            "id": "e-276",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-41",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-277"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "610d3887fad63a209958cfff|2504c49b-6a05-9318-009d-e2f4a7977ae3",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "610d3887fad63a209958cfff|2504c49b-6a05-9318-009d-e2f4a7977ae3",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 10,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1624442284499
        },
        "e-277": {
            "id": "e-277",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_OUT_OF_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-42",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-276"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "610d3887fad63a209958cfff|2504c49b-6a05-9318-009d-e2f4a7977ae3",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "610d3887fad63a209958cfff|2504c49b-6a05-9318-009d-e2f4a7977ae3",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 10,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1624442284509
        },
        "e-278": {
            "id": "e-278",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-43",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-279"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "610d3887fad63a209958cfff|154c2eab-0085-22ad-cd1f-7247ff8b4196",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "610d3887fad63a209958cfff|154c2eab-0085-22ad-cd1f-7247ff8b4196",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 10,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1624442377714
        },
        "e-279": {
            "id": "e-279",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_OUT_OF_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-44",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-278"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "610d3887fad63a209958cfff|154c2eab-0085-22ad-cd1f-7247ff8b4196",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "610d3887fad63a209958cfff|154c2eab-0085-22ad-cd1f-7247ff8b4196",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 10,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1624442377757
        },
        "e-280": {
            "id": "e-280",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-45",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "610d3887fad63a209958cfff|ca11e478-86ee-addf-7940-40129eb3d361",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "610d3887fad63a209958cfff|ca11e478-86ee-addf-7940-40129eb3d361",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-45-p",
                "smoothing": 84,
                "startsEntering": false,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1624443086853
        },
        "e-281": {
            "id": "e-281",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-46",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "610d3887fad63a209958cfff|eba9a722-5b09-a12b-a9fb-27eef99c4824",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "610d3887fad63a209958cfff|eba9a722-5b09-a12b-a9fb-27eef99c4824",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-46-p",
                "smoothing": 50,
                "startsEntering": false,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1624445851577
        },
        "e-282": {
            "id": "e-282",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-47",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "610d3887fad63a209958cfff|2504c49b-6a05-9318-009d-e2f4a7977ae3",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "610d3887fad63a209958cfff|2504c49b-6a05-9318-009d-e2f4a7977ae3",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-47-p",
                "smoothing": 50,
                "startsEntering": false,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1624445972243
        },
        "e-283": {
            "id": "e-283",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-48",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "610d3887fad63a209958cfff|154c2eab-0085-22ad-cd1f-7247ff8b4196",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "610d3887fad63a209958cfff|154c2eab-0085-22ad-cd1f-7247ff8b4196",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-48-p",
                "smoothing": 50,
                "startsEntering": false,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1624446023912
        },
        "e-289": {
            "id": "e-289",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_MOVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-11",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "610d3887fad63a209958cfff|40545235-7949-3b6e-2369-69047b884fce",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "610d3887fad63a209958cfff|40545235-7949-3b6e-2369-69047b884fce",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-11-p",
                "selectedAxis": "X_AXIS",
                "basedOn": "ELEMENT",
                "reverse": false,
                "smoothing": 90,
                "restingState": 50
            }, {
                "continuousParameterGroupId": "a-11-p-2",
                "selectedAxis": "Y_AXIS",
                "basedOn": "ELEMENT",
                "reverse": false,
                "smoothing": 90,
                "restingState": 50
            }],
            "createdOn": 1624542047173
        },
        "e-290": {
            "id": "e-290",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-20",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-291"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "610d3887fad63a209958cfff|81a646c2-28ff-cd6e-f74e-e45d9e5aec39",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "610d3887fad63a209958cfff|81a646c2-28ff-cd6e-f74e-e45d9e5aec39",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 50,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1624548207995
        },
        "e-291": {
            "id": "e-291",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_OUT_OF_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-21",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-290"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "610d3887fad63a209958cfff|81a646c2-28ff-cd6e-f74e-e45d9e5aec39",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "610d3887fad63a209958cfff|81a646c2-28ff-cd6e-f74e-e45d9e5aec39",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 50,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1624548207995
        },
        "e-293": {
            "id": "e-293",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_FINISH",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-30",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-292"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "610d3887fad63a209958cfff",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "610d3887fad63a209958cfff",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1624550152603
        },
        "e-305": {
            "id": "e-305",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_MOVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-13",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "610d3887fad63aff5158cffe|6b105ecd-d346-6ea5-8be0-bb24b20f7cee",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "610d3887fad63aff5158cffe|6b105ecd-d346-6ea5-8be0-bb24b20f7cee",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-13-p",
                "selectedAxis": "X_AXIS",
                "basedOn": "ELEMENT",
                "reverse": false,
                "smoothing": 90,
                "restingState": 50
            }, {
                "continuousParameterGroupId": "a-13-p-2",
                "selectedAxis": "Y_AXIS",
                "basedOn": "ELEMENT",
                "reverse": false,
                "smoothing": 90,
                "restingState": 50
            }],
            "createdOn": 1624552238451
        },
        "e-306": {
            "id": "e-306",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_MOVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-13",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "610d3887fad63aff5158cffe|ce5c2110-51dd-46b0-0aac-120a34aa608a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "610d3887fad63aff5158cffe|ce5c2110-51dd-46b0-0aac-120a34aa608a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-13-p",
                "selectedAxis": "X_AXIS",
                "basedOn": "ELEMENT",
                "reverse": false,
                "smoothing": 90,
                "restingState": 50
            }, {
                "continuousParameterGroupId": "a-13-p-2",
                "selectedAxis": "Y_AXIS",
                "basedOn": "ELEMENT",
                "reverse": false,
                "smoothing": 90,
                "restingState": 50
            }],
            "createdOn": 1624552238451
        },
        "e-307": {
            "id": "e-307",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-20",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-308"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "610d3887fad63aff5158cffe|da524152-7982-6eff-0ee5-bf5f614a353c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "610d3887fad63aff5158cffe|da524152-7982-6eff-0ee5-bf5f614a353c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 50,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1624552238451
        },
        "e-308": {
            "id": "e-308",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_OUT_OF_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-21",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-307"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "610d3887fad63aff5158cffe|da524152-7982-6eff-0ee5-bf5f614a353c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "610d3887fad63aff5158cffe|da524152-7982-6eff-0ee5-bf5f614a353c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 50,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1624552238451
        },
        "e-312": {
            "id": "e-312",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-50",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-313"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "610d3887fad63aff5158cffe|da524152-7982-6eff-0ee5-bf5f614a3523",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "610d3887fad63aff5158cffe|da524152-7982-6eff-0ee5-bf5f614a3523",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 10,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1624552238451
        },
        "e-313": {
            "id": "e-313",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_OUT_OF_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-51",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-312"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "610d3887fad63aff5158cffe|da524152-7982-6eff-0ee5-bf5f614a3523",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "610d3887fad63aff5158cffe|da524152-7982-6eff-0ee5-bf5f614a3523",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 10,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1624552238451
        },
        "e-314": {
            "id": "e-314",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-52",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-315"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "610d3887fad63aff5158cffe|ca11e478-86ee-addf-7940-40129eb3d361",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "610d3887fad63aff5158cffe|ca11e478-86ee-addf-7940-40129eb3d361",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 10,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1624552238451
        },
        "e-315": {
            "id": "e-315",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_OUT_OF_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-53",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-314"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "610d3887fad63aff5158cffe|ca11e478-86ee-addf-7940-40129eb3d361",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "610d3887fad63aff5158cffe|ca11e478-86ee-addf-7940-40129eb3d361",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 10,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1624552238451
        },
        "e-316": {
            "id": "e-316",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-54",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-317"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "610d3887fad63aff5158cffe|eba9a722-5b09-a12b-a9fb-27eef99c4824",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "610d3887fad63aff5158cffe|eba9a722-5b09-a12b-a9fb-27eef99c4824",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 10,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1624552238451
        },
        "e-317": {
            "id": "e-317",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_OUT_OF_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-55",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-316"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "610d3887fad63aff5158cffe|eba9a722-5b09-a12b-a9fb-27eef99c4824",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "610d3887fad63aff5158cffe|eba9a722-5b09-a12b-a9fb-27eef99c4824",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 10,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1624552238451
        },
        "e-318": {
            "id": "e-318",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-56",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-319"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "610d3887fad63aff5158cffe|2504c49b-6a05-9318-009d-e2f4a7977ae3",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "610d3887fad63aff5158cffe|2504c49b-6a05-9318-009d-e2f4a7977ae3",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 10,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1624552238451
        },
        "e-319": {
            "id": "e-319",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_OUT_OF_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-57",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-318"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "610d3887fad63aff5158cffe|2504c49b-6a05-9318-009d-e2f4a7977ae3",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "610d3887fad63aff5158cffe|2504c49b-6a05-9318-009d-e2f4a7977ae3",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 10,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1624552238451
        },
        "e-323": {
            "id": "e-323",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-61",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "610d3887fad63aff5158cffe|eba9a722-5b09-a12b-a9fb-27eef99c4824",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "610d3887fad63aff5158cffe|eba9a722-5b09-a12b-a9fb-27eef99c4824",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-61-p",
                "smoothing": 50,
                "startsEntering": false,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1624552238451
        },
        "e-324": {
            "id": "e-324",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-62",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "610d3887fad63aff5158cffe|2504c49b-6a05-9318-009d-e2f4a7977ae3",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "610d3887fad63aff5158cffe|2504c49b-6a05-9318-009d-e2f4a7977ae3",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-62-p",
                "smoothing": 50,
                "startsEntering": false,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1624552238451
        },
        "e-331": {
            "id": "e-331",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "PAGE_FINISH",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-30",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-330"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "610d3887fad63aff5158cffe",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "610d3887fad63aff5158cffe",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1624552238451
        },
        "e-336": {
            "id": "e-336",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-64",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "610d3887fad63aff5158cffe|78ef174c-c0d8-86d2-0996-e4b948a3cf3e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "610d3887fad63aff5158cffe|78ef174c-c0d8-86d2-0996-e4b948a3cf3e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-64-p",
                "smoothing": 50,
                "startsEntering": false,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1624597397245
        },
        "e-337": {
            "id": "e-337",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-65",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-338"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "610d3887fad63aff5158cffe|78ef174c-c0d8-86d2-0996-e4b948a3cf3e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "610d3887fad63aff5158cffe|78ef174c-c0d8-86d2-0996-e4b948a3cf3e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 10,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1624597397245
        },
        "e-338": {
            "id": "e-338",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_OUT_OF_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-66",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-337"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "610d3887fad63aff5158cffe|78ef174c-c0d8-86d2-0996-e4b948a3cf3e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "610d3887fad63aff5158cffe|78ef174c-c0d8-86d2-0996-e4b948a3cf3e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 10,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1624597397245
        },
        "e-339": {
            "id": "e-339",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-63",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "610d3887fad63aff5158cffe|dbddc235-9969-d462-1b0a-98f309c98104",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "610d3887fad63aff5158cffe|dbddc235-9969-d462-1b0a-98f309c98104",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-63-p",
                "smoothing": 50,
                "startsEntering": false,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1624597401769
        },
        "e-340": {
            "id": "e-340",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-58",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-341"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "610d3887fad63aff5158cffe|dbddc235-9969-d462-1b0a-98f309c98104",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "610d3887fad63aff5158cffe|dbddc235-9969-d462-1b0a-98f309c98104",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 10,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1624597401769
        },
        "e-341": {
            "id": "e-341",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_OUT_OF_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-59",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-340"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "610d3887fad63aff5158cffe|dbddc235-9969-d462-1b0a-98f309c98104",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "610d3887fad63aff5158cffe|dbddc235-9969-d462-1b0a-98f309c98104",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 10,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1624597401769
        },
        "e-342": {
            "id": "e-342",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-60",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "610d3887fad63aff5158cffe|ca11e478-86ee-addf-7940-40129eb3d361",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "610d3887fad63aff5158cffe|ca11e478-86ee-addf-7940-40129eb3d361",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-60-p",
                "smoothing": 50,
                "startsEntering": false,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1625140962707
        },
        "e-357": {
            "id": "e-357",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-20",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-358"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "610d3887fad63a209958cfff|7db2da30-b952-6daa-c09c-c9199d813236",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "610d3887fad63a209958cfff|7db2da30-b952-6daa-c09c-c9199d813236",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 50,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1625143027023
        },
        "e-358": {
            "id": "e-358",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_OUT_OF_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-21",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-357"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "610d3887fad63a209958cfff|7db2da30-b952-6daa-c09c-c9199d813236",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "610d3887fad63a209958cfff|7db2da30-b952-6daa-c09c-c9199d813236",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 50,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1625143027023
        },
        "e-359": {
            "id": "e-359",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-67",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["tiny"],
            "target": {
                "id": "610d3887fad63a209958cfff|7db2da30-b952-6daa-c09c-c9199d813205",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "610d3887fad63a209958cfff|7db2da30-b952-6daa-c09c-c9199d813205",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-67-p",
                "smoothing": 50,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1625146997630
        },
        "e-360": {
            "id": "e-360",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-68",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["tiny"],
            "target": {
                "id": "610d3887fad63a209958cfff|7db2da30-b952-6daa-c09c-c9199d81320c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "610d3887fad63a209958cfff|7db2da30-b952-6daa-c09c-c9199d81320c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-68-p",
                "smoothing": 50,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1625147352765
        },
        "e-361": {
            "id": "e-361",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-69",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["tiny"],
            "target": {
                "id": "610d3887fad63a209958cfff|7db2da30-b952-6daa-c09c-c9199d813213",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "610d3887fad63a209958cfff|7db2da30-b952-6daa-c09c-c9199d813213",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-69-p",
                "smoothing": 50,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1625147560644
        },
        "e-362": {
            "id": "e-362",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-70",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["tiny"],
            "target": {
                "id": "610d3887fad63a209958cfff|7db2da30-b952-6daa-c09c-c9199d81321a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "610d3887fad63a209958cfff|7db2da30-b952-6daa-c09c-c9199d81321a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-70-p",
                "smoothing": 50,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1625147646906
        },
        "e-388": {
            "id": "e-388",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_MOVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-11",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "610d3887fad63a12b758d001|395a1199-1f0e-9f9a-5c17-7dda9744edea",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "610d3887fad63a12b758d001|395a1199-1f0e-9f9a-5c17-7dda9744edea",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-11-p",
                "selectedAxis": "X_AXIS",
                "basedOn": "ELEMENT",
                "reverse": false,
                "smoothing": 90,
                "restingState": 50
            }, {
                "continuousParameterGroupId": "a-11-p-2",
                "selectedAxis": "Y_AXIS",
                "basedOn": "ELEMENT",
                "reverse": false,
                "smoothing": 90,
                "restingState": 50
            }],
            "createdOn": 1625493897955
        },
        "e-394": {
            "id": "e-394",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_MOVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-11",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "610d3887fad63a12b758d001|cd99b061-b487-d218-5f70-d78b3ecc6014",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "610d3887fad63a12b758d001|cd99b061-b487-d218-5f70-d78b3ecc6014",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-11-p",
                "selectedAxis": "X_AXIS",
                "basedOn": "ELEMENT",
                "reverse": false,
                "smoothing": 90,
                "restingState": 50
            }, {
                "continuousParameterGroupId": "a-11-p-2",
                "selectedAxis": "Y_AXIS",
                "basedOn": "ELEMENT",
                "reverse": false,
                "smoothing": 90,
                "restingState": 50
            }],
            "createdOn": 1625493905749
        },
        "e-415": {
            "id": "e-415",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-20",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-416"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "610d3887fad63aff5158cffe|30a46525-1890-cc01-8c8c-459963277491",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "610d3887fad63aff5158cffe|30a46525-1890-cc01-8c8c-459963277491",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 50,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1625552839944
        },
        "e-416": {
            "id": "e-416",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_OUT_OF_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-21",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-415"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "610d3887fad63aff5158cffe|30a46525-1890-cc01-8c8c-459963277491",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "610d3887fad63aff5158cffe|30a46525-1890-cc01-8c8c-459963277491",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 50,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1625552839944
        },
        "e-417": {
            "id": "e-417",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-71",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["tiny"],
            "target": {
                "id": "610d3887fad63aff5158cffe|30a46525-1890-cc01-8c8c-459963277456",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "610d3887fad63aff5158cffe|30a46525-1890-cc01-8c8c-459963277456",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-71-p",
                "smoothing": 50,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1625572559013
        },
        "e-418": {
            "id": "e-418",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-72",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["tiny"],
            "target": {
                "id": "610d3887fad63aff5158cffe|30a46525-1890-cc01-8c8c-45996327745d",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "610d3887fad63aff5158cffe|30a46525-1890-cc01-8c8c-45996327745d",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-72-p",
                "smoothing": 50,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1625572588366
        },
        "e-419": {
            "id": "e-419",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-73",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["tiny"],
            "target": {
                "id": "610d3887fad63aff5158cffe|30a46525-1890-cc01-8c8c-459963277464",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "610d3887fad63aff5158cffe|30a46525-1890-cc01-8c8c-459963277464",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-73-p",
                "smoothing": 50,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1625572608607
        },
        "e-420": {
            "id": "e-420",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-74",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["tiny"],
            "target": {
                "id": "610d3887fad63aff5158cffe|30a46525-1890-cc01-8c8c-45996327746b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "610d3887fad63aff5158cffe|30a46525-1890-cc01-8c8c-45996327746b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-74-p",
                "smoothing": 50,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1625575128507
        },
        "e-421": {
            "id": "e-421",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-75",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["tiny"],
            "target": {
                "id": "610d3887fad63aff5158cffe|30a46525-1890-cc01-8c8c-459963277472",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "610d3887fad63aff5158cffe|30a46525-1890-cc01-8c8c-459963277472",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-75-p",
                "smoothing": 50,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1625575142175
        },
        "e-422": {
            "id": "e-422",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-77",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-423"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "610d3887fad63aff5158cffe|cecbd82a-0450-41b9-f96b-88e7c33ff154",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "610d3887fad63aff5158cffe|cecbd82a-0450-41b9-f96b-88e7c33ff154",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 29,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1625575769451
        },
        "e-423": {
            "id": "e-423",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_OUT_OF_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-76",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-422"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "610d3887fad63aff5158cffe|cecbd82a-0450-41b9-f96b-88e7c33ff154",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "610d3887fad63aff5158cffe|cecbd82a-0450-41b9-f96b-88e7c33ff154",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 32,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1625575769462
        },
        "e-432": {
            "id": "e-432",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-77",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-433"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "610d3887fad63a209958cfff|cecbd82a-0450-41b9-f96b-88e7c33ff154",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "610d3887fad63a209958cfff|cecbd82a-0450-41b9-f96b-88e7c33ff154",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 27,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1625585172229
        },
        "e-433": {
            "id": "e-433",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_OUT_OF_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-76",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-432"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "610d3887fad63a209958cfff|cecbd82a-0450-41b9-f96b-88e7c33ff154",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "610d3887fad63a209958cfff|cecbd82a-0450-41b9-f96b-88e7c33ff154",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 31,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1625585172238
        },
        "e-436": {
            "id": "e-436",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_START",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-81",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-437"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "610d3887fad63a102758cff1",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "610d3887fad63a102758cff1",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1625735390817
        },
        "e-437": {
            "id": "e-437",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_FINISH",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-79",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-436"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "610d3887fad63a102758cff1",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "610d3887fad63a102758cff1",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1625735390827
        },
        "e-438": {
            "id": "e-438",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_START",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-80",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-439"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "610d3887fad63a102758cff1",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "610d3887fad63a102758cff1",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": true,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1625737874064
        },
        "e-440": {
            "id": "e-440",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_START",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-81",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-441"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "610d3887fad63aff5158cffe",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "610d3887fad63aff5158cffe",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1625738627147
        },
        "e-441": {
            "id": "e-441",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_FINISH",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-79",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-440"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "610d3887fad63aff5158cffe",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "610d3887fad63aff5158cffe",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1625738627155
        },
        "e-442": {
            "id": "e-442",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_START",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-80",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-443"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "610d3887fad63aff5158cffe",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "610d3887fad63aff5158cffe",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": true,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1625738647654
        },
        "e-444": {
            "id": "e-444",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_START",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-81",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-445"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "610d3887fad63a209958cfff",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "610d3887fad63a209958cfff",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1625738986044
        },
        "e-445": {
            "id": "e-445",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_FINISH",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-79",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-444"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "610d3887fad63a209958cfff",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "610d3887fad63a209958cfff",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1625738986052
        },
        "e-446": {
            "id": "e-446",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_START",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-80",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-447"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "610d3887fad63a209958cfff",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "610d3887fad63a209958cfff",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": true,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1625739001609
        },
        "e-452": {
            "id": "e-452",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_START",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-81",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-453"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "610d3887fad63a62d258cffd",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "610d3887fad63a62d258cffd",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1625739103147
        },
        "e-453": {
            "id": "e-453",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_FINISH",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-79",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-452"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "610d3887fad63a62d258cffd",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "610d3887fad63a62d258cffd",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1625739103156
        },
        "e-454": {
            "id": "e-454",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_START",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-80",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-455"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "610d3887fad63a62d258cffd",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "610d3887fad63a62d258cffd",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": true,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1625739123509
        },
        "e-456": {
            "id": "e-456",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_START",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-81",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-457"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "610d3887fad63a12b758d001",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "610d3887fad63a12b758d001",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1625739152752
        },
        "e-457": {
            "id": "e-457",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_FINISH",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-79",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-456"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "610d3887fad63a12b758d001",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "610d3887fad63a12b758d001",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1625739152763
        },
        "e-458": {
            "id": "e-458",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_START",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-80",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-459"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "610d3887fad63a12b758d001",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "610d3887fad63a12b758d001",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": true,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1625739170799
        },
        "e-462": {
            "id": "e-462",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_MOVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-13",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "610d3887fad63aff5158cffe|9576b3e4-f8a0-7feb-05b1-6887fcdcfe56",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "610d3887fad63aff5158cffe|9576b3e4-f8a0-7feb-05b1-6887fcdcfe56",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-13-p",
                "selectedAxis": "X_AXIS",
                "basedOn": "ELEMENT",
                "reverse": false,
                "smoothing": 90,
                "restingState": 50
            }, {
                "continuousParameterGroupId": "a-13-p-2",
                "selectedAxis": "Y_AXIS",
                "basedOn": "ELEMENT",
                "reverse": false,
                "smoothing": 90,
                "restingState": 50
            }],
            "createdOn": 1627392023182
        },
        "e-463": {
            "id": "e-463",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_MOVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-13",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "610d3887fad63aff5158cffe|9576b3e4-f8a0-7feb-05b1-6887fcdcfe5f",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "610d3887fad63aff5158cffe|9576b3e4-f8a0-7feb-05b1-6887fcdcfe5f",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-13-p",
                "selectedAxis": "X_AXIS",
                "basedOn": "ELEMENT",
                "reverse": false,
                "smoothing": 90,
                "restingState": 50
            }, {
                "continuousParameterGroupId": "a-13-p-2",
                "selectedAxis": "Y_AXIS",
                "basedOn": "ELEMENT",
                "reverse": false,
                "smoothing": 90,
                "restingState": 50
            }],
            "createdOn": 1627392023182
        },
        "e-464": {
            "id": "e-464",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_MOVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-11",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "610d3887fad63aff5158cffe|bbe33ef3-0e11-d115-f6c2-e1959fc18dac",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "610d3887fad63aff5158cffe|bbe33ef3-0e11-d115-f6c2-e1959fc18dac",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-11-p",
                "selectedAxis": "X_AXIS",
                "basedOn": "ELEMENT",
                "reverse": false,
                "smoothing": 90,
                "restingState": 50
            }, {
                "continuousParameterGroupId": "a-11-p-2",
                "selectedAxis": "Y_AXIS",
                "basedOn": "ELEMENT",
                "reverse": false,
                "smoothing": 90,
                "restingState": 50
            }],
            "createdOn": 1627393134102
        },
        "e-467": {
            "id": "e-467",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_MOVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-11",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "610d3887fad63a209958cfff|e321731d-0bfb-cdaf-7bd9-d2f8ee28f4c8",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "610d3887fad63a209958cfff|e321731d-0bfb-cdaf-7bd9-d2f8ee28f4c8",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-11-p",
                "selectedAxis": "X_AXIS",
                "basedOn": "ELEMENT",
                "reverse": false,
                "smoothing": 90,
                "restingState": 50
            }, {
                "continuousParameterGroupId": "a-11-p-2",
                "selectedAxis": "Y_AXIS",
                "basedOn": "ELEMENT",
                "reverse": false,
                "smoothing": 90,
                "restingState": 50
            }],
            "createdOn": 1627472242702
        },
        "e-468": {
            "id": "e-468",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_MOVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-13",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "610d3887fad63a209958cfff|c6697335-e17d-22ce-5b8b-9ff5bff23faf",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "610d3887fad63a209958cfff|c6697335-e17d-22ce-5b8b-9ff5bff23faf",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-13-p",
                "selectedAxis": "X_AXIS",
                "basedOn": "ELEMENT",
                "reverse": false,
                "smoothing": 90,
                "restingState": 50
            }, {
                "continuousParameterGroupId": "a-13-p-2",
                "selectedAxis": "Y_AXIS",
                "basedOn": "ELEMENT",
                "reverse": false,
                "smoothing": 90,
                "restingState": 50
            }],
            "createdOn": 1627472274938
        },
        "e-469": {
            "id": "e-469",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_MOVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-13",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "610d3887fad63a209958cfff|c6697335-e17d-22ce-5b8b-9ff5bff23fb8",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "610d3887fad63a209958cfff|c6697335-e17d-22ce-5b8b-9ff5bff23fb8",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-13-p",
                "selectedAxis": "X_AXIS",
                "basedOn": "ELEMENT",
                "reverse": false,
                "smoothing": 90,
                "restingState": 50
            }, {
                "continuousParameterGroupId": "a-13-p-2",
                "selectedAxis": "Y_AXIS",
                "basedOn": "ELEMENT",
                "reverse": false,
                "smoothing": 90,
                "restingState": 50
            }],
            "createdOn": 1627472274938
        },
        "e-482": {
            "id": "e-482",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_MOVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-11",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "610d3887fad63a62d258cffd|d9686eb0-e1fb-37d0-a94c-cdbd6e9c1eef",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "610d3887fad63a62d258cffd|d9686eb0-e1fb-37d0-a94c-cdbd6e9c1eef",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-11-p",
                "selectedAxis": "X_AXIS",
                "basedOn": "ELEMENT",
                "reverse": false,
                "smoothing": 90,
                "restingState": 50
            }, {
                "continuousParameterGroupId": "a-11-p-2",
                "selectedAxis": "Y_AXIS",
                "basedOn": "ELEMENT",
                "reverse": false,
                "smoothing": 90,
                "restingState": 50
            }],
            "createdOn": 1627562214950
        },
        "e-483": {
            "id": "e-483",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "FADE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "fadeIn",
                    "autoStopEventId": "e-484"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "610d3887fad63a62d258cffd|d9686eb0-e1fb-37d0-a94c-cdbd6e9c1ef1",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "610d3887fad63a62d258cffd|d9686eb0-e1fb-37d0-a94c-cdbd6e9c1ef1",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 5,
                "scrollOffsetUnit": "%",
                "delay": 200,
                "direction": null,
                "effectIn": true
            },
            "createdOn": 1627562214950
        },
        "e-498": {
            "id": "e-498",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_MOVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-11",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "610d3887fad63a07f658cffb|d026f0ed-72e8-5ad1-e847-428a033b6f9b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "610d3887fad63a07f658cffb|d026f0ed-72e8-5ad1-e847-428a033b6f9b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-11-p",
                "selectedAxis": "X_AXIS",
                "basedOn": "ELEMENT",
                "reverse": false,
                "smoothing": 90,
                "restingState": 50
            }, {
                "continuousParameterGroupId": "a-11-p-2",
                "selectedAxis": "Y_AXIS",
                "basedOn": "ELEMENT",
                "reverse": false,
                "smoothing": 90,
                "restingState": 50
            }],
            "createdOn": 1627567642407
        },
        "e-501": {
            "id": "e-501",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_FINISH",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-30",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-500"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "610d3887fad63a07f658cffb",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "610d3887fad63a07f658cffb",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1627568817048
        },
        "e-521": {
            "id": "e-521",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_FINISH",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-83",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-520"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "610d3887fad63a102758cff1",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "610d3887fad63a102758cff1",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1628269544029
        },
        "e-535": {
            "id": "e-535",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "PAGE_FINISH",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-30",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-534"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "611a381142bd801a078a3df3",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "611a381142bd801a078a3df3",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1629108241716
        },
        "e-591": {
            "id": "e-591",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "PAGE_START",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-81",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-592"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "611a381142bd801a078a3df3",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "611a381142bd801a078a3df3",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1629108241716
        },
        "e-592": {
            "id": "e-592",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "PAGE_FINISH",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-79",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-591"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "611a381142bd801a078a3df3",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "611a381142bd801a078a3df3",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1629108241716
        },
        "e-593": {
            "id": "e-593",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "PAGE_START",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-80",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-594"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "611a381142bd801a078a3df3",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "611a381142bd801a078a3df3",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": true,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1629108241716
        },
        "e-630": {
            "id": "e-630",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_MOVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-16",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "611a381142bd801a078a3df3|558069cc-b830-e242-886b-86523f194759",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "611a381142bd801a078a3df3|558069cc-b830-e242-886b-86523f194759",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-16-p",
                "selectedAxis": "X_AXIS",
                "basedOn": "ELEMENT",
                "reverse": false,
                "smoothing": 90,
                "restingState": 50
            }, {
                "continuousParameterGroupId": "a-16-p-2",
                "selectedAxis": "Y_AXIS",
                "basedOn": "ELEMENT",
                "reverse": false,
                "smoothing": 90,
                "restingState": 50
            }],
            "createdOn": 1629108264659
        },
        "e-631": {
            "id": "e-631",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "FADE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "fadeIn",
                    "autoStopEventId": "e-634"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "610d3887fad63a62d258cffd|0813b15c-8cfc-a0c2-c221-f205a9c3acbc",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "610d3887fad63a62d258cffd|0813b15c-8cfc-a0c2-c221-f205a9c3acbc",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 15,
                "scrollOffsetUnit": "%",
                "delay": 300,
                "direction": null,
                "effectIn": true
            },
            "createdOn": 1622128663071
        },
        "e-632": {
            "id": "e-632",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "FADE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "fadeIn",
                    "autoStopEventId": "e-637"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "610d3887fad63a62d258cffd|0813b15c-8cfc-a0c2-c221-f205a9c3acca",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "610d3887fad63a62d258cffd|0813b15c-8cfc-a0c2-c221-f205a9c3acca",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 15,
                "scrollOffsetUnit": "%",
                "delay": 300,
                "direction": null,
                "effectIn": true
            },
            "createdOn": 1622128694624
        },
        "e-633": {
            "id": "e-633",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "FADE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "fadeIn",
                    "autoStopEventId": "e-639"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "610d3887fad63a62d258cffd|0813b15c-8cfc-a0c2-c221-f205a9c3acc3",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "610d3887fad63a62d258cffd|0813b15c-8cfc-a0c2-c221-f205a9c3acc3",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 15,
                "scrollOffsetUnit": "%",
                "delay": 400,
                "direction": null,
                "effectIn": true
            },
            "createdOn": 1622128680080
        },
        "e-635": {
            "id": "e-635",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "FADE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "fadeIn",
                    "autoStopEventId": "e-641"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "610d3887fad63a62d258cffd|0813b15c-8cfc-a0c2-c221-f205a9c3acae",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "610d3887fad63a62d258cffd|0813b15c-8cfc-a0c2-c221-f205a9c3acae",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 15,
                "scrollOffsetUnit": "%",
                "delay": 300,
                "direction": null,
                "effectIn": true
            },
            "createdOn": 1622128177425
        },
        "e-636": {
            "id": "e-636",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "FADE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "fadeIn",
                    "autoStopEventId": "e-640"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "610d3887fad63a62d258cffd|0813b15c-8cfc-a0c2-c221-f205a9c3aca7",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "610d3887fad63a62d258cffd|0813b15c-8cfc-a0c2-c221-f205a9c3aca7",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 15,
                "scrollOffsetUnit": "%",
                "delay": 200,
                "direction": null,
                "effectIn": true
            },
            "createdOn": 1622128165357
        },
        "e-644": {
            "id": "e-644",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "FADE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "fadeIn",
                    "autoStopEventId": "e-638"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "610d3887fad63a62d258cffd|0813b15c-8cfc-a0c2-c221-f205a9c3aca0",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "610d3887fad63a62d258cffd|0813b15c-8cfc-a0c2-c221-f205a9c3aca0",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 15,
                "scrollOffsetUnit": "%",
                "delay": 400,
                "direction": null,
                "effectIn": true
            },
            "createdOn": 1622128144910
        },
        "e-645": {
            "id": "e-645",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "FADE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "fadeIn",
                    "autoStopEventId": "e-642"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "610d3887fad63a62d258cffd|0813b15c-8cfc-a0c2-c221-f205a9c3ac99",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "610d3887fad63a62d258cffd|0813b15c-8cfc-a0c2-c221-f205a9c3ac99",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 15,
                "scrollOffsetUnit": "%",
                "delay": 0,
                "direction": null,
                "effectIn": true
            },
            "createdOn": 1622127899043
        },
        "e-646": {
            "id": "e-646",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "FADE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "fadeIn",
                    "autoStopEventId": "e-643"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "610d3887fad63a62d258cffd|0813b15c-8cfc-a0c2-c221-f205a9c3acb5",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "610d3887fad63a62d258cffd|0813b15c-8cfc-a0c2-c221-f205a9c3acb5",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 15,
                "scrollOffsetUnit": "%",
                "delay": 100,
                "direction": null,
                "effectIn": true
            },
            "createdOn": 1622128650462
        },
        "e-647": {
            "id": "e-647",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_MOVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-16",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "558069cc-b830-e242-886b-86523f194759",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "558069cc-b830-e242-886b-86523f194759",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-16-p",
                "selectedAxis": "X_AXIS",
                "basedOn": "ELEMENT",
                "reverse": false,
                "smoothing": 86,
                "restingState": 50
            }, {
                "continuousParameterGroupId": "a-16-p-2",
                "selectedAxis": "Y_AXIS",
                "basedOn": "ELEMENT",
                "reverse": false,
                "smoothing": 86,
                "restingState": 50
            }],
            "createdOn": 1629112039302
        },
        "e-653": {
            "id": "e-653",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_MOVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-16",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "610d3887fad63a102758cff1|2fa5abf0-0fd5-7f7b-c215-c8c6548c2361",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "610d3887fad63a102758cff1|2fa5abf0-0fd5-7f7b-c215-c8c6548c2361",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-16-p",
                "selectedAxis": "X_AXIS",
                "basedOn": "ELEMENT",
                "reverse": false,
                "smoothing": 90,
                "restingState": 50
            }, {
                "continuousParameterGroupId": "a-16-p-2",
                "selectedAxis": "Y_AXIS",
                "basedOn": "ELEMENT",
                "reverse": false,
                "smoothing": 90,
                "restingState": 50
            }],
            "createdOn": 1629287006343
        },
        "e-654": {
            "id": "e-654",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_MOVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-16",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "610d3887fad63a102758cff1|52da3bfc-a949-0d3d-7fcf-925deb11e2a4",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "610d3887fad63a102758cff1|52da3bfc-a949-0d3d-7fcf-925deb11e2a4",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-16-p",
                "selectedAxis": "X_AXIS",
                "basedOn": "ELEMENT",
                "reverse": false,
                "smoothing": 90,
                "restingState": 50
            }, {
                "continuousParameterGroupId": "a-16-p-2",
                "selectedAxis": "Y_AXIS",
                "basedOn": "ELEMENT",
                "reverse": false,
                "smoothing": 90,
                "restingState": 50
            }],
            "createdOn": 1629287007270
        },
        "e-656": {
            "id": "e-656",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "PAGE_FINISH",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-30",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-655"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "611e5a75bb73111851e95675",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "611e5a75bb73111851e95675",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1629379189699
        },
        "e-659": {
            "id": "e-659",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "PAGE_START",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-81",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-660"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "611e5a75bb73111851e95675",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "611e5a75bb73111851e95675",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1629379189699
        },
        "e-660": {
            "id": "e-660",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "PAGE_FINISH",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-79",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-659"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "611e5a75bb73111851e95675",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "611e5a75bb73111851e95675",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1629379189699
        },
        "e-661": {
            "id": "e-661",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "PAGE_START",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-80",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-662"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "611e5a75bb73111851e95675",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "611e5a75bb73111851e95675",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": true,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1629379189699
        },
        "e-663": {
            "id": "e-663",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_MOVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-11",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "610d3887fad63a62d258cffd|1a45abf4-713b-e2b1-d2f8-bcd9857903e1",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "610d3887fad63a62d258cffd|1a45abf4-713b-e2b1-d2f8-bcd9857903e1",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-11-p",
                "selectedAxis": "X_AXIS",
                "basedOn": "ELEMENT",
                "reverse": false,
                "smoothing": 90,
                "restingState": 50
            }, {
                "continuousParameterGroupId": "a-11-p-2",
                "selectedAxis": "Y_AXIS",
                "basedOn": "ELEMENT",
                "reverse": false,
                "smoothing": 90,
                "restingState": 50
            }],
            "createdOn": 1630492480717
        },
        "e-664": {
            "id": "e-664",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "FADE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "fadeIn",
                    "autoStopEventId": "e-665"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "610d3887fad63a62d258cffd|1a45abf4-713b-e2b1-d2f8-bcd9857903e3",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "610d3887fad63a62d258cffd|1a45abf4-713b-e2b1-d2f8-bcd9857903e3",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 5,
                "scrollOffsetUnit": "%",
                "delay": 200,
                "direction": null,
                "effectIn": true
            },
            "createdOn": 1630492480717
        },
        "e-666": {
            "id": "e-666",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_MOVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-11",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "610d3887fad63a62d258cffd|6a016518-66c0-dbdc-a568-5a62790b1d07",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "610d3887fad63a62d258cffd|6a016518-66c0-dbdc-a568-5a62790b1d07",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-11-p",
                "selectedAxis": "X_AXIS",
                "basedOn": "ELEMENT",
                "reverse": false,
                "smoothing": 90,
                "restingState": 50
            }, {
                "continuousParameterGroupId": "a-11-p-2",
                "selectedAxis": "Y_AXIS",
                "basedOn": "ELEMENT",
                "reverse": false,
                "smoothing": 90,
                "restingState": 50
            }],
            "createdOn": 1630492728036
        },
        "e-667": {
            "id": "e-667",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-85",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-668"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "abb3311c-57e7-9a3b-8cf0-8936d2879c8b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "abb3311c-57e7-9a3b-8cf0-8936d2879c8b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1630493420369
        },
        "e-668": {
            "id": "e-668",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-86",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-667"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "abb3311c-57e7-9a3b-8cf0-8936d2879c8b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "abb3311c-57e7-9a3b-8cf0-8936d2879c8b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1630493420379
        },
        "e-669": {
            "id": "e-669",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_MOVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-84",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "afb98085-94b6-bff7-91e0-10f9e30d69ef",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "afb98085-94b6-bff7-91e0-10f9e30d69ef",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-84-p",
                "selectedAxis": "X_AXIS",
                "basedOn": "ELEMENT",
                "reverse": false,
                "smoothing": 85,
                "restingState": 50
            }, {
                "continuousParameterGroupId": "a-84-p-2",
                "selectedAxis": "Y_AXIS",
                "basedOn": "ELEMENT",
                "reverse": false,
                "smoothing": 85,
                "restingState": 50
            }],
            "createdOn": 1630496340267
        },
        "e-672": {
            "id": "e-672",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_MOVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-11",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "610d3887fad63a62d258cffd|fcc80d8e-b2e6-7fec-3391-bc806a66fb8c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "610d3887fad63a62d258cffd|fcc80d8e-b2e6-7fec-3391-bc806a66fb8c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-11-p",
                "selectedAxis": "X_AXIS",
                "basedOn": "ELEMENT",
                "reverse": false,
                "smoothing": 90,
                "restingState": 50
            }, {
                "continuousParameterGroupId": "a-11-p-2",
                "selectedAxis": "Y_AXIS",
                "basedOn": "ELEMENT",
                "reverse": false,
                "smoothing": 90,
                "restingState": 50
            }],
            "createdOn": 1630498194647
        },
        "e-673": {
            "id": "e-673",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "FADE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "fadeIn",
                    "autoStopEventId": "e-674"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "610d3887fad63a62d258cffd|fcc80d8e-b2e6-7fec-3391-bc806a66fb8e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "610d3887fad63a62d258cffd|fcc80d8e-b2e6-7fec-3391-bc806a66fb8e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 5,
                "scrollOffsetUnit": "%",
                "delay": 200,
                "direction": null,
                "effectIn": true
            },
            "createdOn": 1630498194647
        },
        "e-675": {
            "id": "e-675",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_MOVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-11",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "610d3887fad63a62d258cffd|6034f32d-0f8e-822e-8ee1-5ac7314ce420",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "610d3887fad63a62d258cffd|6034f32d-0f8e-822e-8ee1-5ac7314ce420",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-11-p",
                "selectedAxis": "X_AXIS",
                "basedOn": "ELEMENT",
                "reverse": false,
                "smoothing": 90,
                "restingState": 50
            }, {
                "continuousParameterGroupId": "a-11-p-2",
                "selectedAxis": "Y_AXIS",
                "basedOn": "ELEMENT",
                "reverse": false,
                "smoothing": 90,
                "restingState": 50
            }],
            "createdOn": 1636355766452
        },
        "e-676": {
            "id": "e-676",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "FADE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "fadeIn",
                    "autoStopEventId": "e-677"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "610d3887fad63a62d258cffd|6034f32d-0f8e-822e-8ee1-5ac7314ce422",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "610d3887fad63a62d258cffd|6034f32d-0f8e-822e-8ee1-5ac7314ce422",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 5,
                "scrollOffsetUnit": "%",
                "delay": 200,
                "direction": null,
                "effectIn": true
            },
            "createdOn": 1636355766452
        },
        "e-678": {
            "id": "e-678",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_MOVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-11",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "610d3887fad63a62d258cffd|fc15ac58-295f-c7ea-0dcf-a4cbfc92679a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "610d3887fad63a62d258cffd|fc15ac58-295f-c7ea-0dcf-a4cbfc92679a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-11-p",
                "selectedAxis": "X_AXIS",
                "basedOn": "ELEMENT",
                "reverse": false,
                "smoothing": 90,
                "restingState": 50
            }, {
                "continuousParameterGroupId": "a-11-p-2",
                "selectedAxis": "Y_AXIS",
                "basedOn": "ELEMENT",
                "reverse": false,
                "smoothing": 90,
                "restingState": 50
            }],
            "createdOn": 1636355798729
        },
        "e-679": {
            "id": "e-679",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "FADE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "fadeIn",
                    "autoStopEventId": "e-680"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "610d3887fad63a62d258cffd|fc15ac58-295f-c7ea-0dcf-a4cbfc92679c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "610d3887fad63a62d258cffd|fc15ac58-295f-c7ea-0dcf-a4cbfc92679c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 5,
                "scrollOffsetUnit": "%",
                "delay": 200,
                "direction": null,
                "effectIn": true
            },
            "createdOn": 1636355798729
        },
        "e-684": {
            "id": "e-684",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "FADE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "fadeIn",
                    "autoStopEventId": "e-685"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "610d3887fad63a62d258cffd|c5cf2cbe-fa50-1634-bcbf-615558017d0e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "610d3887fad63a62d258cffd|c5cf2cbe-fa50-1634-bcbf-615558017d0e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 5,
                "scrollOffsetUnit": "%",
                "delay": 200,
                "direction": null,
                "effectIn": true
            },
            "createdOn": 1638863756617
        },
        "e-686": {
            "id": "e-686",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_MOVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-11",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "610d3887fad63a62d258cffd|c5cf2cbe-fa50-1634-bcbf-615558017d11",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "610d3887fad63a62d258cffd|c5cf2cbe-fa50-1634-bcbf-615558017d11",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-11-p",
                "selectedAxis": "X_AXIS",
                "basedOn": "ELEMENT",
                "reverse": false,
                "smoothing": 90,
                "restingState": 50
            }, {
                "continuousParameterGroupId": "a-11-p-2",
                "selectedAxis": "Y_AXIS",
                "basedOn": "ELEMENT",
                "reverse": false,
                "smoothing": 90,
                "restingState": 50
            }],
            "createdOn": 1638863756617
        },
        "e-687": {
            "id": "e-687",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "FADE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "fadeIn",
                    "autoStopEventId": "e-688"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "610d3887fad63a62d258cffd|c5cf2cbe-fa50-1634-bcbf-615558017d13",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "610d3887fad63a62d258cffd|c5cf2cbe-fa50-1634-bcbf-615558017d13",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 5,
                "scrollOffsetUnit": "%",
                "delay": 200,
                "direction": null,
                "effectIn": true
            },
            "createdOn": 1638863756617
        },
        "e-689": {
            "id": "e-689",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_MOVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-11",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "610d3887fad63a62d258cffd|49b26c8b-3745-b3ce-081d-2e4fb3263bc3",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "610d3887fad63a62d258cffd|49b26c8b-3745-b3ce-081d-2e4fb3263bc3",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-11-p",
                "selectedAxis": "X_AXIS",
                "basedOn": "ELEMENT",
                "reverse": false,
                "smoothing": 90,
                "restingState": 50
            }, {
                "continuousParameterGroupId": "a-11-p-2",
                "selectedAxis": "Y_AXIS",
                "basedOn": "ELEMENT",
                "reverse": false,
                "smoothing": 90,
                "restingState": 50
            }],
            "createdOn": 1638873307665
        },
        "e-690": {
            "id": "e-690",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "FADE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "fadeIn",
                    "autoStopEventId": "e-691"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "610d3887fad63a62d258cffd|49b26c8b-3745-b3ce-081d-2e4fb3263bc5",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "610d3887fad63a62d258cffd|49b26c8b-3745-b3ce-081d-2e4fb3263bc5",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 5,
                "scrollOffsetUnit": "%",
                "delay": 200,
                "direction": null,
                "effectIn": true
            },
            "createdOn": 1638873307665
        }
    },
    "actionLists": {
        "a-11": {
            "id": "a-11",
            "title": "cta-move",
            "continuousParameterGroups": [{
                "id": "a-11-p",
                "type": "MOUSE_X",
                "parameterLabel": "Mouse X",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-11-n",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "easeInOut",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".move",
                                "selectorGuids": ["f9c74904-3d03-5160-8be8-77b218a8b6a7"]
                            },
                            "xValue": -16,
                            "xUnit": "px",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-11-n-2",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "easeInOut",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".text-block",
                                "selectorGuids": ["52789cb1-8dc7-2823-29b0-dd2346a28f75"]
                            },
                            "xValue": 8,
                            "xUnit": "px",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 100,
                    "actionItems": [{
                        "id": "a-11-n-5",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "easeInOut",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".move",
                                "selectorGuids": ["f9c74904-3d03-5160-8be8-77b218a8b6a7"]
                            },
                            "xValue": 16,
                            "xUnit": "px",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-11-n-6",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "easeInOut",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".text-block",
                                "selectorGuids": ["52789cb1-8dc7-2823-29b0-dd2346a28f75"]
                            },
                            "xValue": -8,
                            "xUnit": "px",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }]
                }]
            }, {
                "id": "a-11-p-2",
                "type": "MOUSE_Y",
                "parameterLabel": "Mouse Y",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-11-n-9",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "easeInOut",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".move",
                                "selectorGuids": ["f9c74904-3d03-5160-8be8-77b218a8b6a7"]
                            },
                            "yValue": -16,
                            "xUnit": "PX",
                            "yUnit": "px",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-11-n-10",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "easeInOut",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".text-block",
                                "selectorGuids": ["52789cb1-8dc7-2823-29b0-dd2346a28f75"]
                            },
                            "yValue": 8,
                            "xUnit": "PX",
                            "yUnit": "px",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 100,
                    "actionItems": [{
                        "id": "a-11-n-13",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "easeInOut",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".move",
                                "selectorGuids": ["f9c74904-3d03-5160-8be8-77b218a8b6a7"]
                            },
                            "yValue": 16,
                            "xUnit": "PX",
                            "yUnit": "px",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-11-n-14",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "easeInOut",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".text-block",
                                "selectorGuids": ["52789cb1-8dc7-2823-29b0-dd2346a28f75"]
                            },
                            "yValue": -8,
                            "xUnit": "PX",
                            "yUnit": "px",
                            "zUnit": "PX"
                        }
                    }]
                }]
            }],
            "createdOn": 1596719249543
        },
        "a-16": {
            "id": "a-16",
            "title": "nav-move",
            "continuousParameterGroups": [{
                "id": "a-16-p",
                "type": "MOUSE_X",
                "parameterLabel": "Mouse X",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-16-n",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "easeInOut",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".move",
                                "selectorGuids": ["f9c74904-3d03-5160-8be8-77b218a8b6a7"]
                            },
                            "xValue": -16,
                            "xUnit": "px",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-16-n-2",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "easeInOut",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".navlink-text",
                                "selectorGuids": ["5833fd1f-8032-0ab3-91b2-9b176f79034c"]
                            },
                            "xValue": 8,
                            "xUnit": "px",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 100,
                    "actionItems": [{
                        "id": "a-16-n-3",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "easeInOut",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".move",
                                "selectorGuids": ["f9c74904-3d03-5160-8be8-77b218a8b6a7"]
                            },
                            "xValue": 16,
                            "xUnit": "px",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-16-n-4",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "easeInOut",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".navlink-text",
                                "selectorGuids": ["5833fd1f-8032-0ab3-91b2-9b176f79034c"]
                            },
                            "xValue": -8,
                            "xUnit": "px",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }]
                }]
            }, {
                "id": "a-16-p-2",
                "type": "MOUSE_Y",
                "parameterLabel": "Mouse Y",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-16-n-5",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "easeInOut",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".move",
                                "selectorGuids": ["f9c74904-3d03-5160-8be8-77b218a8b6a7"]
                            },
                            "yValue": -16,
                            "xUnit": "PX",
                            "yUnit": "px",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-16-n-6",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "easeInOut",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".navlink-text",
                                "selectorGuids": ["5833fd1f-8032-0ab3-91b2-9b176f79034c"]
                            },
                            "yValue": 8,
                            "xUnit": "PX",
                            "yUnit": "px",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 100,
                    "actionItems": [{
                        "id": "a-16-n-7",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "easeInOut",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".move",
                                "selectorGuids": ["f9c74904-3d03-5160-8be8-77b218a8b6a7"]
                            },
                            "yValue": 16,
                            "xUnit": "PX",
                            "yUnit": "px",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-16-n-8",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "easeInOut",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".navlink-text",
                                "selectorGuids": ["5833fd1f-8032-0ab3-91b2-9b176f79034c"]
                            },
                            "yValue": -8,
                            "xUnit": "PX",
                            "yUnit": "px",
                            "zUnit": "PX"
                        }
                    }]
                }]
            }],
            "createdOn": 1596719249543
        },
        "a-17": {
            "id": "a-17",
            "title": "Cursor Large",
            "continuousParameterGroups": [{
                "id": "a-17-p",
                "type": "MOUSE_X",
                "parameterLabel": "Mouse X",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-17-n",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "selector": ".cursor",
                                "selectorGuids": ["0ec3c840-ca35-4603-222c-6de384ef9420"]
                            },
                            "xValue": -50,
                            "xUnit": "vw",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 100,
                    "actionItems": [{
                        "id": "a-17-n-2",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "selector": ".cursor",
                                "selectorGuids": ["0ec3c840-ca35-4603-222c-6de384ef9420"]
                            },
                            "xValue": 50,
                            "xUnit": "vw",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }]
                }]
            }, {
                "id": "a-17-p-2",
                "type": "MOUSE_Y",
                "parameterLabel": "Mouse Y",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-17-n-3",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "selector": ".cursor",
                                "selectorGuids": ["0ec3c840-ca35-4603-222c-6de384ef9420"]
                            },
                            "yValue": -50,
                            "xUnit": "PX",
                            "yUnit": "vh",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 100,
                    "actionItems": [{
                        "id": "a-17-n-4",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "selector": ".cursor",
                                "selectorGuids": ["0ec3c840-ca35-4603-222c-6de384ef9420"]
                            },
                            "yValue": 50,
                            "xUnit": "PX",
                            "yUnit": "vh",
                            "zUnit": "PX"
                        }
                    }]
                }]
            }],
            "createdOn": 1621328176574
        },
        "a-14": {
            "id": "a-14",
            "title": "cursor inc",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-14-n",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "easeInOut",
                        "duration": 300,
                        "target": {
                            "selector": ".cursor",
                            "selectorGuids": ["0ec3c840-ca35-4603-222c-6de384ef9420"]
                        },
                        "widthValue": 100,
                        "heightValue": 100,
                        "widthUnit": "px",
                        "heightUnit": "px",
                        "locked": false
                    }
                }, {
                    "id": "a-14-n-3",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "easeInOut",
                        "duration": 300,
                        "target": {
                            "selector": ".cursor",
                            "selectorGuids": ["0ec3c840-ca35-4603-222c-6de384ef9420"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-14-n-2",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "easeInOut",
                        "duration": 300,
                        "target": {
                            "selector": ".cursor-small",
                            "selectorGuids": ["0ec3c840-ca35-4603-222c-6de384ef941f"]
                        },
                        "xValue": 0,
                        "yValue": 0,
                        "locked": true
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1621271307012
        },
        "a-15": {
            "id": "a-15",
            "title": "cursor dec",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-15-n",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "easeInOut",
                        "duration": 300,
                        "target": {
                            "selector": ".cursor",
                            "selectorGuids": ["0ec3c840-ca35-4603-222c-6de384ef9420"]
                        },
                        "widthValue": 31,
                        "heightValue": 31,
                        "widthUnit": "px",
                        "heightUnit": "px",
                        "locked": false
                    }
                }, {
                    "id": "a-15-n-3",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "easeInOut",
                        "duration": 300,
                        "target": {
                            "selector": ".cursor",
                            "selectorGuids": ["0ec3c840-ca35-4603-222c-6de384ef9420"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-15-n-2",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "easeInOut",
                        "duration": 300,
                        "target": {
                            "selector": ".cursor-small",
                            "selectorGuids": ["0ec3c840-ca35-4603-222c-6de384ef941f"]
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1621271307012
        },
        "a-19": {
            "id": "a-19",
            "title": "blob on load",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-19-n-5",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "610d3887fad63a102758cff1|134d000e-1f27-fdc9-5788-770af3a585b2"
                        },
                        "xValue": 0.6,
                        "yValue": 0.6,
                        "locked": true
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-19-n-6",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "outCubic",
                        "duration": 1000,
                        "target": {
                            "id": "610d3887fad63a102758cff1|134d000e-1f27-fdc9-5788-770af3a585b2"
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1621341649517
        },
        "a-22": {
            "id": "a-22",
            "title": "orange blob on scroll in",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-22-n-5",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": true,
                            "id": "610d3887fad63a102758cff1|8832dbc6-32a2-1076-e8a1-8f7106536cec"
                        },
                        "xValue": 0.6,
                        "yValue": 0.6,
                        "locked": true
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-22-n-6",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "outCubic",
                        "duration": 1000,
                        "target": {
                            "useEventTarget": true,
                            "id": "610d3887fad63a102758cff1|8832dbc6-32a2-1076-e8a1-8f7106536cec"
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1621341649517
        },
        "a-23": {
            "id": "a-23",
            "title": "orange blob on scroll out",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-23-n-5",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": true,
                            "id": "610d3887fad63a102758cff1|8832dbc6-32a2-1076-e8a1-8f7106536cec"
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-23-n-6",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "outCubic",
                        "duration": 1000,
                        "target": {
                            "useEventTarget": true,
                            "id": "610d3887fad63a102758cff1|8832dbc6-32a2-1076-e8a1-8f7106536cec"
                        },
                        "xValue": 0.6,
                        "yValue": 0.6,
                        "locked": true
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1621341649517
        },
        "a-24": {
            "id": "a-24",
            "title": "press-move",
            "continuousParameterGroups": [{
                "id": "a-24-p",
                "type": "MOUSE_X",
                "parameterLabel": "Mouse X",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-24-n",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "easeInOut",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".press-logo-img",
                                "selectorGuids": ["6b3d1067-e0a8-bf50-fb02-1321bc9671c8"]
                            },
                            "xValue": -16,
                            "xUnit": "px",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 100,
                    "actionItems": [{
                        "id": "a-24-n-3",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "easeInOut",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".press-logo-img",
                                "selectorGuids": ["6b3d1067-e0a8-bf50-fb02-1321bc9671c8"]
                            },
                            "xValue": 16,
                            "xUnit": "px",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }]
                }]
            }, {
                "id": "a-24-p-2",
                "type": "MOUSE_Y",
                "parameterLabel": "Mouse Y",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-24-n-5",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "easeInOut",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".press-logo-img",
                                "selectorGuids": ["6b3d1067-e0a8-bf50-fb02-1321bc9671c8"]
                            },
                            "yValue": -16,
                            "xUnit": "PX",
                            "yUnit": "px",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 100,
                    "actionItems": [{
                        "id": "a-24-n-7",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "easeInOut",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".press-logo-img",
                                "selectorGuids": ["6b3d1067-e0a8-bf50-fb02-1321bc9671c8"]
                            },
                            "yValue": 16,
                            "xUnit": "PX",
                            "yUnit": "px",
                            "zUnit": "PX"
                        }
                    }]
                }]
            }],
            "createdOn": 1596719249543
        },
        "a-26": {
            "id": "a-26",
            "title": "Lensa iphone hover On",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-26-n-5",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "easeInOut",
                        "duration": 100,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".after-pen",
                            "selectorGuids": ["81fdeb2a-1a0d-548c-dd36-40cdb4b30de5"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-26-n",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".before",
                            "selectorGuids": ["2034fb1b-153e-8254-60b3-7c29a2f37f8f"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-26-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".before-pen",
                            "selectorGuids": ["aeba922b-4bee-0c7a-2a5d-3a3a593531b7"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-26-n-3",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "easeInOut",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".before",
                            "selectorGuids": ["2034fb1b-153e-8254-60b3-7c29a2f37f8f"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-26-n-4",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "easeInOut",
                        "duration": 1000,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".before-pen",
                            "selectorGuids": ["aeba922b-4bee-0c7a-2a5d-3a3a593531b7"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-26-n-6",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "easeInOut",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".after-pen",
                            "selectorGuids": ["81fdeb2a-1a0d-548c-dd36-40cdb4b30de5"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1621502988062
        },
        "a-27": {
            "id": "a-27",
            "title": "Lensa iphone hover Out",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-27-n-5",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "easeInOut",
                        "duration": 100,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".after-pen",
                            "selectorGuids": ["81fdeb2a-1a0d-548c-dd36-40cdb4b30de5"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-27-n",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".before",
                            "selectorGuids": ["2034fb1b-153e-8254-60b3-7c29a2f37f8f"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-27-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".before-pen",
                            "selectorGuids": ["aeba922b-4bee-0c7a-2a5d-3a3a593531b7"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-27-n-3",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "easeInOut",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".before",
                            "selectorGuids": ["2034fb1b-153e-8254-60b3-7c29a2f37f8f"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-27-n-4",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "easeInOut",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".before-pen",
                            "selectorGuids": ["aeba922b-4bee-0c7a-2a5d-3a3a593531b7"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-27-n-7",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "easeInOut",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".after-pen",
                            "selectorGuids": ["81fdeb2a-1a0d-548c-dd36-40cdb4b30de5"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-27-n-6",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 1000,
                        "easing": "easeInOut",
                        "duration": 1000,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".after-pen",
                            "selectorGuids": ["81fdeb2a-1a0d-548c-dd36-40cdb4b30de5"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1621502988062
        },
        "a-20": {
            "id": "a-20",
            "title": "blob on scroll in",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-20-n-5",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": true,
                            "id": "610d3887fad63a102758cff1|5d85766c-792a-c810-d78d-c2d5e3a729eb"
                        },
                        "xValue": 0.6,
                        "yValue": 0.6,
                        "locked": true
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-20-n-6",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "outCubic",
                        "duration": 1000,
                        "target": {
                            "useEventTarget": true,
                            "id": "610d3887fad63a102758cff1|5d85766c-792a-c810-d78d-c2d5e3a729eb"
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1621341649517
        },
        "a-21": {
            "id": "a-21",
            "title": "blob on scroll out",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-21-n-5",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": true,
                            "id": "610d3887fad63a102758cff1|8832dbc6-32a2-1076-e8a1-8f7106536cec"
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-21-n-6",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "outCubic",
                        "duration": 1000,
                        "target": {
                            "useEventTarget": true,
                            "id": "610d3887fad63a102758cff1|8832dbc6-32a2-1076-e8a1-8f7106536cec"
                        },
                        "xValue": 0.6,
                        "yValue": 0.6,
                        "locked": true
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1621341649517
        },
        "a-28": {
            "id": "a-28",
            "title": "hover over iphone",
            "continuousParameterGroups": [{
                "id": "a-28-p",
                "type": "MOUSE_X",
                "parameterLabel": "Mouse X",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-28-n",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "easeInOut",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "SIBLINGS",
                                "selector": ".before",
                                "selectorGuids": ["2034fb1b-153e-8254-60b3-7c29a2f37f8f"]
                            },
                            "xValue": -20,
                            "xUnit": "px",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-28-n-5",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "easeInOut",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "SIBLINGS",
                                "selector": ".iphone",
                                "selectorGuids": ["84ab1736-2fa8-af8a-9df9-5fbe6e9b5a48"]
                            },
                            "xValue": -20,
                            "xUnit": "px",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-28-n-9",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "easeInOut",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "SIBLINGS",
                                "selector": ".before-pen",
                                "selectorGuids": ["aeba922b-4bee-0c7a-2a5d-3a3a593531b7"]
                            },
                            "xValue": -10,
                            "xUnit": "px",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-28-n-13",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "easeInOut",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "SIBLINGS",
                                "selector": ".after-pen",
                                "selectorGuids": ["81fdeb2a-1a0d-548c-dd36-40cdb4b30de5"]
                            },
                            "xValue": -10,
                            "xUnit": "px",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 100,
                    "actionItems": [{
                        "id": "a-28-n-2",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "easeInOut",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "SIBLINGS",
                                "selector": ".before",
                                "selectorGuids": ["2034fb1b-153e-8254-60b3-7c29a2f37f8f"]
                            },
                            "xValue": 20,
                            "xUnit": "px",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-28-n-6",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "easeInOut",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "SIBLINGS",
                                "selector": ".iphone",
                                "selectorGuids": ["84ab1736-2fa8-af8a-9df9-5fbe6e9b5a48"]
                            },
                            "xValue": 20,
                            "xUnit": "px",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-28-n-10",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "easeInOut",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "SIBLINGS",
                                "selector": ".before-pen",
                                "selectorGuids": ["aeba922b-4bee-0c7a-2a5d-3a3a593531b7"]
                            },
                            "xValue": 10,
                            "xUnit": "px",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-28-n-14",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "easeInOut",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "SIBLINGS",
                                "selector": ".after-pen",
                                "selectorGuids": ["81fdeb2a-1a0d-548c-dd36-40cdb4b30de5"]
                            },
                            "xValue": 10,
                            "xUnit": "px",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }]
                }]
            }, {
                "id": "a-28-p-2",
                "type": "MOUSE_Y",
                "parameterLabel": "Mouse Y",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-28-n-3",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "easeInOut",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "SIBLINGS",
                                "selector": ".before",
                                "selectorGuids": ["2034fb1b-153e-8254-60b3-7c29a2f37f8f"]
                            },
                            "yValue": -20,
                            "xUnit": "PX",
                            "yUnit": "px",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-28-n-7",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "easeInOut",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "SIBLINGS",
                                "selector": ".iphone",
                                "selectorGuids": ["84ab1736-2fa8-af8a-9df9-5fbe6e9b5a48"]
                            },
                            "yValue": -20,
                            "xUnit": "PX",
                            "yUnit": "px",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-28-n-11",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "easeInOut",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "SIBLINGS",
                                "selector": ".before-pen",
                                "selectorGuids": ["aeba922b-4bee-0c7a-2a5d-3a3a593531b7"]
                            },
                            "yValue": -10,
                            "xUnit": "PX",
                            "yUnit": "px",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-28-n-15",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "easeInOut",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "SIBLINGS",
                                "selector": ".after-pen",
                                "selectorGuids": ["81fdeb2a-1a0d-548c-dd36-40cdb4b30de5"]
                            },
                            "yValue": -10,
                            "xUnit": "PX",
                            "yUnit": "px",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 100,
                    "actionItems": [{
                        "id": "a-28-n-4",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "easeInOut",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "SIBLINGS",
                                "selector": ".before",
                                "selectorGuids": ["2034fb1b-153e-8254-60b3-7c29a2f37f8f"]
                            },
                            "yValue": 20,
                            "xUnit": "PX",
                            "yUnit": "px",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-28-n-8",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "easeInOut",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "SIBLINGS",
                                "selector": ".iphone",
                                "selectorGuids": ["84ab1736-2fa8-af8a-9df9-5fbe6e9b5a48"]
                            },
                            "yValue": 20,
                            "xUnit": "PX",
                            "yUnit": "px",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-28-n-12",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "easeInOut",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "SIBLINGS",
                                "selector": ".before-pen",
                                "selectorGuids": ["aeba922b-4bee-0c7a-2a5d-3a3a593531b7"]
                            },
                            "yValue": 10,
                            "xUnit": "PX",
                            "yUnit": "px",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-28-n-16",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "easeInOut",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "SIBLINGS",
                                "selector": ".after-pen",
                                "selectorGuids": ["81fdeb2a-1a0d-548c-dd36-40cdb4b30de5"]
                            },
                            "yValue": 10,
                            "xUnit": "PX",
                            "yUnit": "px",
                            "zUnit": "PX"
                        }
                    }]
                }]
            }],
            "createdOn": 1621516061402
        },
        "a-30": {
            "id": "a-30",
            "title": "on load fade",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-30-n",
                    "actionTypeId": "STYLE_BACKGROUND_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".cursor-wrapper",
                            "selectorGuids": ["0ec3c840-ca35-4603-222c-6de384ef941e"]
                        },
                        "globalSwatchId": "",
                        "rValue": 255,
                        "bValue": 255,
                        "gValue": 255,
                        "aValue": 1
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-30-n-2",
                    "actionTypeId": "STYLE_BACKGROUND_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "easeInOut",
                        "duration": 1000,
                        "target": {
                            "selector": ".cursor-wrapper",
                            "selectorGuids": ["0ec3c840-ca35-4603-222c-6de384ef941e"]
                        },
                        "globalSwatchId": "",
                        "rValue": 255,
                        "bValue": 255,
                        "gValue": 255,
                        "aValue": 0
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1621521713723
        },
        "a-34": {
            "id": "a-34",
            "title": "cta-move 4",
            "continuousParameterGroups": [{
                "id": "a-34-p",
                "type": "MOUSE_X",
                "parameterLabel": "Mouse X",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-34-n",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "easeInOut",
                            "duration": 500,
                            "target": {
                                "useEventTarget": true,
                                "id": "610d3887fad63a12b758d001|87836845-189c-ddb3-1ad8-7a62f0223159"
                            },
                            "xValue": -16,
                            "xUnit": "px",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 100,
                    "actionItems": [{
                        "id": "a-34-n-3",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "easeInOut",
                            "duration": 500,
                            "target": {
                                "useEventTarget": true,
                                "id": "610d3887fad63a12b758d001|87836845-189c-ddb3-1ad8-7a62f0223159"
                            },
                            "xValue": 16,
                            "xUnit": "px",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }]
                }]
            }, {
                "id": "a-34-p-2",
                "type": "MOUSE_Y",
                "parameterLabel": "Mouse Y",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-34-n-5",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "easeInOut",
                            "duration": 500,
                            "target": {
                                "useEventTarget": true,
                                "id": "610d3887fad63a12b758d001|87836845-189c-ddb3-1ad8-7a62f0223156"
                            },
                            "yValue": -16,
                            "xUnit": "PX",
                            "yUnit": "px",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 100,
                    "actionItems": [{
                        "id": "a-34-n-7",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "easeInOut",
                            "duration": 500,
                            "target": {
                                "useEventTarget": true,
                                "id": "610d3887fad63a12b758d001|87836845-189c-ddb3-1ad8-7a62f0223156"
                            },
                            "yValue": 16,
                            "xUnit": "PX",
                            "yUnit": "px",
                            "zUnit": "PX"
                        }
                    }]
                }]
            }],
            "createdOn": 1596719249543
        },
        "a-13": {
            "id": "a-13",
            "title": "apple-move",
            "continuousParameterGroups": [{
                "id": "a-13-p",
                "type": "MOUSE_X",
                "parameterLabel": "Mouse X",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-13-n",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "easeInOut",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".apple-move",
                                "selectorGuids": ["53abad68-05f4-df55-4241-8e37442cb3e9"]
                            },
                            "xValue": -16,
                            "xUnit": "px",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-13-n-2",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "easeInOut",
                            "duration": 500,
                            "target": {},
                            "xValue": 8,
                            "xUnit": "px",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 100,
                    "actionItems": [{
                        "id": "a-13-n-3",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "easeInOut",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".apple-move",
                                "selectorGuids": ["53abad68-05f4-df55-4241-8e37442cb3e9"]
                            },
                            "xValue": 16,
                            "xUnit": "px",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-13-n-4",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "easeInOut",
                            "duration": 500,
                            "target": {},
                            "xValue": -8,
                            "xUnit": "px",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }]
                }]
            }, {
                "id": "a-13-p-2",
                "type": "MOUSE_Y",
                "parameterLabel": "Mouse Y",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-13-n-5",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "easeInOut",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".apple-move",
                                "selectorGuids": ["53abad68-05f4-df55-4241-8e37442cb3e9"]
                            },
                            "yValue": -16,
                            "xUnit": "PX",
                            "yUnit": "px",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-13-n-6",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "easeInOut",
                            "duration": 500,
                            "target": {},
                            "yValue": 8,
                            "xUnit": "PX",
                            "yUnit": "px",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 100,
                    "actionItems": [{
                        "id": "a-13-n-7",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "easeInOut",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".apple-move",
                                "selectorGuids": ["53abad68-05f4-df55-4241-8e37442cb3e9"]
                            },
                            "yValue": 16,
                            "xUnit": "PX",
                            "yUnit": "px",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-13-n-8",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "easeInOut",
                            "duration": 500,
                            "target": {},
                            "yValue": -8,
                            "xUnit": "PX",
                            "yUnit": "px",
                            "zUnit": "PX"
                        }
                    }]
                }]
            }],
            "createdOn": 1596719249543
        },
        "a-35": {
            "id": "a-35",
            "title": "prisma-1-on",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-35-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "id": "610d3887fad63a209958cfff|66c27a21-887d-4338-1cec-839df40b9c10"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-35-n",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "easeInOut",
                        "duration": 500,
                        "target": {
                            "id": "610d3887fad63a209958cfff|66c27a21-887d-4338-1cec-839df40b9c10"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1624432014734
        },
        "a-36": {
            "id": "a-36",
            "title": "prisma-1-off",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-36-n",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "easeInOut",
                        "duration": 0,
                        "target": {
                            "id": "610d3887fad63a209958cfff|66c27a21-887d-4338-1cec-839df40b9c10"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-36-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "easeInOut",
                        "duration": 500,
                        "target": {
                            "id": "610d3887fad63a209958cfff|66c27a21-887d-4338-1cec-839df40b9c10"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1624432014734
        },
        "a-37": {
            "id": "a-37",
            "title": "prisma-2-on",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-37-n",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "easeInOut",
                        "duration": 0,
                        "target": {
                            "id": "610d3887fad63a209958cfff|a5a1a067-2ed7-7fa1-36bc-7b6840069428"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-37-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "easeInOut",
                        "duration": 500,
                        "target": {
                            "id": "610d3887fad63a209958cfff|a5a1a067-2ed7-7fa1-36bc-7b6840069428"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1624432014734
        },
        "a-38": {
            "id": "a-38",
            "title": "prisma-2-off",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-38-n",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "easeInOut",
                        "duration": 0,
                        "target": {
                            "id": "610d3887fad63a209958cfff|a5a1a067-2ed7-7fa1-36bc-7b6840069428"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-38-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "easeInOut",
                        "duration": 500,
                        "target": {
                            "id": "610d3887fad63a209958cfff|a5a1a067-2ed7-7fa1-36bc-7b6840069428"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1624432014734
        },
        "a-39": {
            "id": "a-39",
            "title": "prisma-3-on",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-39-n",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "easeInOut",
                        "duration": 0,
                        "target": {
                            "id": "610d3887fad63a209958cfff|05d33276-35f9-64c8-bba6-bb9b3108e8d8"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-39-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "easeInOut",
                        "duration": 500,
                        "target": {
                            "id": "610d3887fad63a209958cfff|05d33276-35f9-64c8-bba6-bb9b3108e8d8"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1624432014734
        },
        "a-40": {
            "id": "a-40",
            "title": "prisma-3-off",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-40-n",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "easeInOut",
                        "duration": 0,
                        "target": {
                            "id": "610d3887fad63a209958cfff|05d33276-35f9-64c8-bba6-bb9b3108e8d8"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-40-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "easeInOut",
                        "duration": 500,
                        "target": {
                            "id": "610d3887fad63a209958cfff|05d33276-35f9-64c8-bba6-bb9b3108e8d8"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1624432014734
        },
        "a-41": {
            "id": "a-41",
            "title": "prisma-4-on",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-41-n",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "easeInOut",
                        "duration": 0,
                        "target": {
                            "id": "610d3887fad63a209958cfff|1c282e92-b17f-fed8-8b79-64a105b988bc"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-41-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "easeInOut",
                        "duration": 500,
                        "target": {
                            "id": "610d3887fad63a209958cfff|1c282e92-b17f-fed8-8b79-64a105b988bc"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1624432014734
        },
        "a-42": {
            "id": "a-42",
            "title": "prisma-4-off",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-42-n",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "easeInOut",
                        "duration": 0,
                        "target": {
                            "id": "610d3887fad63a209958cfff|1c282e92-b17f-fed8-8b79-64a105b988bc"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-42-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "easeInOut",
                        "duration": 500,
                        "target": {
                            "id": "610d3887fad63a209958cfff|1c282e92-b17f-fed8-8b79-64a105b988bc"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1624432014734
        },
        "a-43": {
            "id": "a-43",
            "title": "prisma-5-on",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-43-n",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "easeInOut",
                        "duration": 0,
                        "target": {
                            "id": "610d3887fad63a209958cfff|5fdeefe2-168a-4a1b-ad48-c2e43d0befc6"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-43-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "easeInOut",
                        "duration": 500,
                        "target": {
                            "id": "610d3887fad63a209958cfff|5fdeefe2-168a-4a1b-ad48-c2e43d0befc6"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1624432014734
        },
        "a-44": {
            "id": "a-44",
            "title": "prisma-5-off",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-44-n",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "easeInOut",
                        "duration": 0,
                        "target": {
                            "id": "610d3887fad63a209958cfff|5fdeefe2-168a-4a1b-ad48-c2e43d0befc6"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-44-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "easeInOut",
                        "duration": 500,
                        "target": {
                            "id": "610d3887fad63a209958cfff|5fdeefe2-168a-4a1b-ad48-c2e43d0befc6"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1624432014734
        },
        "a-45": {
            "id": "a-45",
            "title": "p2-2",
            "continuousParameterGroups": [{
                "id": "a-45-p",
                "type": "SCROLL_PROGRESS",
                "parameterLabel": "Scroll",
                "continuousActionGroups": [{
                    "keyframe": 47,
                    "actionItems": [{
                        "id": "a-45-n",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "610d3887fad63a209958cfff|e94d9da7-ef4b-a11d-7cfc-19246b4cd5b6"
                            },
                            "value": 1,
                            "unit": ""
                        }
                    }]
                }, {
                    "keyframe": 53,
                    "actionItems": [{
                        "id": "a-45-n-2",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "610d3887fad63a209958cfff|e94d9da7-ef4b-a11d-7cfc-19246b4cd5b6"
                            },
                            "value": 0,
                            "unit": ""
                        }
                    }]
                }]
            }],
            "createdOn": 1624443092082
        },
        "a-46": {
            "id": "a-46",
            "title": "p3-2",
            "continuousParameterGroups": [{
                "id": "a-46-p",
                "type": "SCROLL_PROGRESS",
                "parameterLabel": "Scroll",
                "continuousActionGroups": [{
                    "keyframe": 47,
                    "actionItems": [{
                        "id": "a-46-n",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "610d3887fad63a209958cfff|e1eb11ba-1c6e-9a3a-0460-41c5d24f3631"
                            },
                            "value": 1,
                            "unit": ""
                        }
                    }]
                }, {
                    "keyframe": 53,
                    "actionItems": [{
                        "id": "a-46-n-2",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "610d3887fad63a209958cfff|e1eb11ba-1c6e-9a3a-0460-41c5d24f3631"
                            },
                            "value": 0,
                            "unit": ""
                        }
                    }]
                }]
            }],
            "createdOn": 1624443092082
        },
        "a-47": {
            "id": "a-47",
            "title": "p4-2",
            "continuousParameterGroups": [{
                "id": "a-47-p",
                "type": "SCROLL_PROGRESS",
                "parameterLabel": "Scroll",
                "continuousActionGroups": [{
                    "keyframe": 47,
                    "actionItems": [{
                        "id": "a-47-n",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "610d3887fad63a209958cfff|d27e6b64-168e-c944-c4a2-4d323c8baf96"
                            },
                            "value": 1,
                            "unit": ""
                        }
                    }]
                }, {
                    "keyframe": 53,
                    "actionItems": [{
                        "id": "a-47-n-2",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "610d3887fad63a209958cfff|d27e6b64-168e-c944-c4a2-4d323c8baf96"
                            },
                            "value": 0,
                            "unit": ""
                        }
                    }]
                }]
            }],
            "createdOn": 1624443092082
        },
        "a-48": {
            "id": "a-48",
            "title": "p5-2",
            "continuousParameterGroups": [{
                "id": "a-48-p",
                "type": "SCROLL_PROGRESS",
                "parameterLabel": "Scroll",
                "continuousActionGroups": [{
                    "keyframe": 47,
                    "actionItems": [{
                        "id": "a-48-n",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "610d3887fad63a209958cfff|b295262c-df09-2119-7423-8eb0359896e1"
                            },
                            "value": 1,
                            "unit": ""
                        }
                    }]
                }, {
                    "keyframe": 53,
                    "actionItems": [{
                        "id": "a-48-n-2",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "610d3887fad63a209958cfff|b295262c-df09-2119-7423-8eb0359896e1"
                            },
                            "value": 0,
                            "unit": ""
                        }
                    }]
                }]
            }],
            "createdOn": 1624443092082
        },
        "a-50": {
            "id": "a-50",
            "title": "prisma-1-on 2",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-50-n",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "id": "610d3887fad63aff5158cffe|66c27a21-887d-4338-1cec-839df40b9c10"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-50-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "easeInOut",
                        "duration": 500,
                        "target": {
                            "id": "610d3887fad63aff5158cffe|66c27a21-887d-4338-1cec-839df40b9c10"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1624432014734
        },
        "a-51": {
            "id": "a-51",
            "title": "prisma-1-off 2",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-51-n",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "easeInOut",
                        "duration": 0,
                        "target": {
                            "id": "610d3887fad63aff5158cffe|66c27a21-887d-4338-1cec-839df40b9c10"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-51-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "easeInOut",
                        "duration": 500,
                        "target": {
                            "id": "610d3887fad63aff5158cffe|66c27a21-887d-4338-1cec-839df40b9c10"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1624432014734
        },
        "a-52": {
            "id": "a-52",
            "title": "prisma-2-on 2",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-52-n",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "easeInOut",
                        "duration": 0,
                        "target": {
                            "id": "610d3887fad63aff5158cffe|a5a1a067-2ed7-7fa1-36bc-7b6840069428"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-52-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "easeInOut",
                        "duration": 500,
                        "target": {
                            "id": "610d3887fad63aff5158cffe|a5a1a067-2ed7-7fa1-36bc-7b6840069428"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1624432014734
        },
        "a-53": {
            "id": "a-53",
            "title": "prisma-2-off 2",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-53-n",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "easeInOut",
                        "duration": 0,
                        "target": {
                            "id": "610d3887fad63aff5158cffe|a5a1a067-2ed7-7fa1-36bc-7b6840069428"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-53-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "easeInOut",
                        "duration": 500,
                        "target": {
                            "id": "610d3887fad63aff5158cffe|a5a1a067-2ed7-7fa1-36bc-7b6840069428"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1624432014734
        },
        "a-54": {
            "id": "a-54",
            "title": "prisma-3-on 2",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-54-n",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "easeInOut",
                        "duration": 0,
                        "target": {
                            "id": "610d3887fad63aff5158cffe|05d33276-35f9-64c8-bba6-bb9b3108e8d8"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-54-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "easeInOut",
                        "duration": 500,
                        "target": {
                            "id": "610d3887fad63aff5158cffe|05d33276-35f9-64c8-bba6-bb9b3108e8d8"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1624432014734
        },
        "a-55": {
            "id": "a-55",
            "title": "prisma-3-off 2",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-55-n",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "easeInOut",
                        "duration": 0,
                        "target": {
                            "id": "610d3887fad63aff5158cffe|05d33276-35f9-64c8-bba6-bb9b3108e8d8"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-55-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "easeInOut",
                        "duration": 500,
                        "target": {
                            "id": "610d3887fad63aff5158cffe|05d33276-35f9-64c8-bba6-bb9b3108e8d8"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1624432014734
        },
        "a-56": {
            "id": "a-56",
            "title": "prisma-4-on 2",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-56-n",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "easeInOut",
                        "duration": 0,
                        "target": {
                            "id": "610d3887fad63aff5158cffe|1c282e92-b17f-fed8-8b79-64a105b988bc"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-56-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "easeInOut",
                        "duration": 500,
                        "target": {
                            "id": "610d3887fad63aff5158cffe|1c282e92-b17f-fed8-8b79-64a105b988bc"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1624432014734
        },
        "a-57": {
            "id": "a-57",
            "title": "prisma-4-off 2",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-57-n",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "easeInOut",
                        "duration": 0,
                        "target": {
                            "id": "610d3887fad63aff5158cffe|1c282e92-b17f-fed8-8b79-64a105b988bc"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-57-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "easeInOut",
                        "duration": 500,
                        "target": {
                            "id": "610d3887fad63aff5158cffe|1c282e92-b17f-fed8-8b79-64a105b988bc"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1624432014734
        },
        "a-61": {
            "id": "a-61",
            "title": "l3-2",
            "continuousParameterGroups": [{
                "id": "a-61-p",
                "type": "SCROLL_PROGRESS",
                "parameterLabel": "Scroll",
                "continuousActionGroups": [{
                    "keyframe": 47,
                    "actionItems": [{
                        "id": "a-61-n",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "610d3887fad63aff5158cffe|e1eb11ba-1c6e-9a3a-0460-41c5d24f3631"
                            },
                            "value": 1,
                            "unit": ""
                        }
                    }]
                }, {
                    "keyframe": 53,
                    "actionItems": [{
                        "id": "a-61-n-2",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "610d3887fad63aff5158cffe|e1eb11ba-1c6e-9a3a-0460-41c5d24f3631"
                            },
                            "value": 0,
                            "unit": ""
                        }
                    }]
                }]
            }],
            "createdOn": 1624443092082
        },
        "a-62": {
            "id": "a-62",
            "title": "l4-2",
            "continuousParameterGroups": [{
                "id": "a-62-p",
                "type": "SCROLL_PROGRESS",
                "parameterLabel": "Scroll",
                "continuousActionGroups": [{
                    "keyframe": 47,
                    "actionItems": [{
                        "id": "a-62-n",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "610d3887fad63aff5158cffe|d27e6b64-168e-c944-c4a2-4d323c8baf96"
                            },
                            "value": 1,
                            "unit": ""
                        }
                    }]
                }, {
                    "keyframe": 53,
                    "actionItems": [{
                        "id": "a-62-n-2",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "610d3887fad63aff5158cffe|d27e6b64-168e-c944-c4a2-4d323c8baf96"
                            },
                            "value": 0,
                            "unit": ""
                        }
                    }]
                }]
            }],
            "createdOn": 1624443092082
        },
        "a-64": {
            "id": "a-64",
            "title": "l6-2",
            "continuousParameterGroups": [{
                "id": "a-64-p",
                "type": "SCROLL_PROGRESS",
                "parameterLabel": "Scroll",
                "continuousActionGroups": [{
                    "keyframe": 47,
                    "actionItems": [{
                        "id": "a-64-n",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "610d3887fad63aff5158cffe|b295262c-df09-2119-7423-8eb0359896e1"
                            },
                            "value": 1,
                            "unit": ""
                        }
                    }]
                }, {
                    "keyframe": 53,
                    "actionItems": [{
                        "id": "a-64-n-2",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "610d3887fad63aff5158cffe|b295262c-df09-2119-7423-8eb0359896e1"
                            },
                            "value": 0,
                            "unit": ""
                        }
                    }]
                }]
            }],
            "createdOn": 1624443092082
        },
        "a-65": {
            "id": "a-65",
            "title": "prisma-6-on 2",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-65-n",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "easeInOut",
                        "duration": 0,
                        "target": {
                            "id": "610d3887fad63aff5158cffe|5fdeefe2-168a-4a1b-ad48-c2e43d0befc6"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-65-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "easeInOut",
                        "duration": 500,
                        "target": {
                            "id": "610d3887fad63aff5158cffe|5fdeefe2-168a-4a1b-ad48-c2e43d0befc6"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1624432014734
        },
        "a-66": {
            "id": "a-66",
            "title": "prisma-6-off 2",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-66-n",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "easeInOut",
                        "duration": 0,
                        "target": {
                            "id": "610d3887fad63aff5158cffe|5fdeefe2-168a-4a1b-ad48-c2e43d0befc6"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-66-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "easeInOut",
                        "duration": 500,
                        "target": {
                            "id": "610d3887fad63aff5158cffe|5fdeefe2-168a-4a1b-ad48-c2e43d0befc6"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1624432014734
        },
        "a-63": {
            "id": "a-63",
            "title": "l5-2",
            "continuousParameterGroups": [{
                "id": "a-63-p",
                "type": "SCROLL_PROGRESS",
                "parameterLabel": "Scroll",
                "continuousActionGroups": [{
                    "keyframe": 47,
                    "actionItems": [{
                        "id": "a-63-n",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "610d3887fad63aff5158cffe|0a5fc807-5961-3eaa-9e49-7ed2128d173d"
                            },
                            "value": 1,
                            "unit": ""
                        }
                    }]
                }, {
                    "keyframe": 53,
                    "actionItems": [{
                        "id": "a-63-n-2",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "610d3887fad63aff5158cffe|0a5fc807-5961-3eaa-9e49-7ed2128d173d"
                            },
                            "value": 0,
                            "unit": ""
                        }
                    }]
                }]
            }],
            "createdOn": 1624443092082
        },
        "a-58": {
            "id": "a-58",
            "title": "prisma-5-on 2",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-58-n",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "easeInOut",
                        "duration": 0,
                        "target": {
                            "id": "610d3887fad63aff5158cffe|0a5fc807-5961-3eaa-9e49-7ed2128d173b"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-58-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "easeInOut",
                        "duration": 500,
                        "target": {
                            "id": "610d3887fad63aff5158cffe|0a5fc807-5961-3eaa-9e49-7ed2128d173b"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1624432014734
        },
        "a-59": {
            "id": "a-59",
            "title": "prisma-5-off 2",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-59-n",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "easeInOut",
                        "duration": 0,
                        "target": {
                            "id": "610d3887fad63aff5158cffe|0a5fc807-5961-3eaa-9e49-7ed2128d173b"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-59-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "easeInOut",
                        "duration": 500,
                        "target": {
                            "id": "610d3887fad63aff5158cffe|0a5fc807-5961-3eaa-9e49-7ed2128d173b"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1624432014734
        },
        "a-60": {
            "id": "a-60",
            "title": "l1-2",
            "continuousParameterGroups": [{
                "id": "a-60-p",
                "type": "SCROLL_PROGRESS",
                "parameterLabel": "Scroll",
                "continuousActionGroups": [{
                    "keyframe": 47,
                    "actionItems": [{
                        "id": "a-60-n",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "610d3887fad63aff5158cffe|e94d9da7-ef4b-a11d-7cfc-19246b4cd5b6"
                            },
                            "value": 1,
                            "unit": ""
                        }
                    }]
                }, {
                    "keyframe": 53,
                    "actionItems": [{
                        "id": "a-60-n-2",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "610d3887fad63aff5158cffe|e94d9da7-ef4b-a11d-7cfc-19246b4cd5b6"
                            },
                            "value": 0,
                            "unit": ""
                        }
                    }]
                }]
            }],
            "createdOn": 1624443092082
        },
        "a-67": {
            "id": "a-67",
            "title": "p-1-mob",
            "continuousParameterGroups": [{
                "id": "a-67-p",
                "type": "SCROLL_PROGRESS",
                "parameterLabel": "Scroll",
                "continuousActionGroups": [{
                    "keyframe": 45,
                    "actionItems": [{
                        "id": "a-67-n",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "610d3887fad63a209958cfff|7db2da30-b952-6daa-c09c-c9199d813234"
                            },
                            "value": 1,
                            "unit": ""
                        }
                    }, {
                        "id": "a-67-n-4",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "610d3887fad63a209958cfff|7db2da30-b952-6daa-c09c-c9199d813231"
                            },
                            "value": 0,
                            "unit": ""
                        }
                    }]
                }, {
                    "keyframe": 46,
                    "actionItems": [{
                        "id": "a-67-n-3",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "610d3887fad63a209958cfff|7db2da30-b952-6daa-c09c-c9199d813234"
                            },
                            "value": 0,
                            "unit": ""
                        }
                    }, {
                        "id": "a-67-n-5",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "610d3887fad63a209958cfff|7db2da30-b952-6daa-c09c-c9199d813231"
                            },
                            "value": 1,
                            "unit": ""
                        }
                    }]
                }]
            }],
            "createdOn": 1625147102083
        },
        "a-68": {
            "id": "a-68",
            "title": "p-2-mob",
            "continuousParameterGroups": [{
                "id": "a-68-p",
                "type": "SCROLL_PROGRESS",
                "parameterLabel": "Scroll",
                "continuousActionGroups": [{
                    "keyframe": 45,
                    "actionItems": [{
                        "id": "a-68-n",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "610d3887fad63a209958cfff|7db2da30-b952-6daa-c09c-c9199d813231"
                            },
                            "value": 1,
                            "unit": ""
                        }
                    }, {
                        "id": "a-68-n-2",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "610d3887fad63a209958cfff|7db2da30-b952-6daa-c09c-c9199d81322e"
                            },
                            "value": 0,
                            "unit": ""
                        }
                    }]
                }, {
                    "keyframe": 46,
                    "actionItems": [{
                        "id": "a-68-n-3",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "610d3887fad63a209958cfff|7db2da30-b952-6daa-c09c-c9199d813231"
                            },
                            "value": 0,
                            "unit": ""
                        }
                    }, {
                        "id": "a-68-n-4",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "610d3887fad63a209958cfff|7db2da30-b952-6daa-c09c-c9199d81322e"
                            },
                            "value": 1,
                            "unit": ""
                        }
                    }]
                }]
            }],
            "createdOn": 1625147102083
        },
        "a-69": {
            "id": "a-69",
            "title": "p-3-mob",
            "continuousParameterGroups": [{
                "id": "a-69-p",
                "type": "SCROLL_PROGRESS",
                "parameterLabel": "Scroll",
                "continuousActionGroups": [{
                    "keyframe": 45,
                    "actionItems": [{
                        "id": "a-69-n",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "610d3887fad63a209958cfff|7db2da30-b952-6daa-c09c-c9199d81322e"
                            },
                            "value": 1,
                            "unit": ""
                        }
                    }, {
                        "id": "a-69-n-2",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "610d3887fad63a209958cfff|7db2da30-b952-6daa-c09c-c9199d81322b"
                            },
                            "value": 0,
                            "unit": ""
                        }
                    }]
                }, {
                    "keyframe": 46,
                    "actionItems": [{
                        "id": "a-69-n-3",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "610d3887fad63a209958cfff|7db2da30-b952-6daa-c09c-c9199d81322e"
                            },
                            "value": 0,
                            "unit": ""
                        }
                    }, {
                        "id": "a-69-n-4",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "610d3887fad63a209958cfff|7db2da30-b952-6daa-c09c-c9199d81322b"
                            },
                            "value": 1,
                            "unit": ""
                        }
                    }]
                }]
            }],
            "createdOn": 1625147102083
        },
        "a-70": {
            "id": "a-70",
            "title": "p-4-mob",
            "continuousParameterGroups": [{
                "id": "a-70-p",
                "type": "SCROLL_PROGRESS",
                "parameterLabel": "Scroll",
                "continuousActionGroups": [{
                    "keyframe": 45,
                    "actionItems": [{
                        "id": "a-70-n",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "610d3887fad63a209958cfff|7db2da30-b952-6daa-c09c-c9199d81322b"
                            },
                            "value": 1,
                            "unit": ""
                        }
                    }, {
                        "id": "a-70-n-2",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "610d3887fad63a209958cfff|7db2da30-b952-6daa-c09c-c9199d813228"
                            },
                            "value": 0,
                            "unit": ""
                        }
                    }]
                }, {
                    "keyframe": 46,
                    "actionItems": [{
                        "id": "a-70-n-3",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "610d3887fad63a209958cfff|7db2da30-b952-6daa-c09c-c9199d81322b"
                            },
                            "value": 0,
                            "unit": ""
                        }
                    }, {
                        "id": "a-70-n-4",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "610d3887fad63a209958cfff|7db2da30-b952-6daa-c09c-c9199d813228"
                            },
                            "value": 1,
                            "unit": ""
                        }
                    }]
                }]
            }],
            "createdOn": 1625147102083
        },
        "a-71": {
            "id": "a-71",
            "title": "l-1-mob",
            "continuousParameterGroups": [{
                "id": "a-71-p",
                "type": "SCROLL_PROGRESS",
                "parameterLabel": "Scroll",
                "continuousActionGroups": [{
                    "keyframe": 45,
                    "actionItems": [{
                        "id": "a-71-n",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "610d3887fad63aff5158cffe|30a46525-1890-cc01-8c8c-45996327748d"
                            },
                            "value": 1,
                            "unit": ""
                        }
                    }, {
                        "id": "a-71-n-2",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "610d3887fad63aff5158cffe|30a46525-1890-cc01-8c8c-45996327748c"
                            },
                            "value": 0,
                            "unit": ""
                        }
                    }]
                }, {
                    "keyframe": 46,
                    "actionItems": [{
                        "id": "a-71-n-3",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "610d3887fad63aff5158cffe|30a46525-1890-cc01-8c8c-45996327748d"
                            },
                            "value": 0,
                            "unit": ""
                        }
                    }, {
                        "id": "a-71-n-4",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "610d3887fad63aff5158cffe|30a46525-1890-cc01-8c8c-45996327748c"
                            },
                            "value": 1,
                            "unit": ""
                        }
                    }]
                }]
            }],
            "createdOn": 1625147102083
        },
        "a-72": {
            "id": "a-72",
            "title": "l-2-mob",
            "continuousParameterGroups": [{
                "id": "a-72-p",
                "type": "SCROLL_PROGRESS",
                "parameterLabel": "Scroll",
                "continuousActionGroups": [{
                    "keyframe": 45,
                    "actionItems": [{
                        "id": "a-72-n",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "610d3887fad63aff5158cffe|30a46525-1890-cc01-8c8c-45996327748c"
                            },
                            "value": 1,
                            "unit": ""
                        }
                    }, {
                        "id": "a-72-n-2",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "610d3887fad63aff5158cffe|30a46525-1890-cc01-8c8c-459963277489"
                            },
                            "value": 0,
                            "unit": ""
                        }
                    }]
                }, {
                    "keyframe": 46,
                    "actionItems": [{
                        "id": "a-72-n-3",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "610d3887fad63aff5158cffe|30a46525-1890-cc01-8c8c-45996327748c"
                            },
                            "value": 0,
                            "unit": ""
                        }
                    }, {
                        "id": "a-72-n-4",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "610d3887fad63aff5158cffe|30a46525-1890-cc01-8c8c-459963277489"
                            },
                            "value": 1,
                            "unit": ""
                        }
                    }]
                }]
            }],
            "createdOn": 1625147102083
        },
        "a-73": {
            "id": "a-73",
            "title": "l-3-mob",
            "continuousParameterGroups": [{
                "id": "a-73-p",
                "type": "SCROLL_PROGRESS",
                "parameterLabel": "Scroll",
                "continuousActionGroups": [{
                    "keyframe": 45,
                    "actionItems": [{
                        "id": "a-73-n",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "610d3887fad63aff5158cffe|30a46525-1890-cc01-8c8c-459963277489"
                            },
                            "value": 1,
                            "unit": ""
                        }
                    }, {
                        "id": "a-73-n-2",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "610d3887fad63aff5158cffe|30a46525-1890-cc01-8c8c-459963277486"
                            },
                            "value": 0,
                            "unit": ""
                        }
                    }]
                }, {
                    "keyframe": 46,
                    "actionItems": [{
                        "id": "a-73-n-3",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "610d3887fad63aff5158cffe|30a46525-1890-cc01-8c8c-459963277489"
                            },
                            "value": 0,
                            "unit": ""
                        }
                    }, {
                        "id": "a-73-n-4",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "610d3887fad63aff5158cffe|30a46525-1890-cc01-8c8c-459963277486"
                            },
                            "value": 1,
                            "unit": ""
                        }
                    }]
                }]
            }],
            "createdOn": 1625147102083
        },
        "a-74": {
            "id": "a-74",
            "title": "l-4-mob",
            "continuousParameterGroups": [{
                "id": "a-74-p",
                "type": "SCROLL_PROGRESS",
                "parameterLabel": "Scroll",
                "continuousActionGroups": [{
                    "keyframe": 45,
                    "actionItems": [{
                        "id": "a-74-n",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "610d3887fad63aff5158cffe|30a46525-1890-cc01-8c8c-459963277486"
                            },
                            "value": 1,
                            "unit": ""
                        }
                    }, {
                        "id": "a-74-n-2",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "610d3887fad63aff5158cffe|30a46525-1890-cc01-8c8c-459963277483"
                            },
                            "value": 0,
                            "unit": ""
                        }
                    }]
                }, {
                    "keyframe": 46,
                    "actionItems": [{
                        "id": "a-74-n-3",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "610d3887fad63aff5158cffe|30a46525-1890-cc01-8c8c-459963277486"
                            },
                            "value": 0,
                            "unit": ""
                        }
                    }, {
                        "id": "a-74-n-4",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "610d3887fad63aff5158cffe|30a46525-1890-cc01-8c8c-459963277483"
                            },
                            "value": 1,
                            "unit": ""
                        }
                    }]
                }]
            }],
            "createdOn": 1625147102083
        },
        "a-75": {
            "id": "a-75",
            "title": "l-5-mob",
            "continuousParameterGroups": [{
                "id": "a-75-p",
                "type": "SCROLL_PROGRESS",
                "parameterLabel": "Scroll",
                "continuousActionGroups": [{
                    "keyframe": 45,
                    "actionItems": [{
                        "id": "a-75-n",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "610d3887fad63aff5158cffe|30a46525-1890-cc01-8c8c-459963277483"
                            },
                            "value": 1,
                            "unit": ""
                        }
                    }, {
                        "id": "a-75-n-2",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "610d3887fad63aff5158cffe|30a46525-1890-cc01-8c8c-459963277480"
                            },
                            "value": 0,
                            "unit": ""
                        }
                    }]
                }, {
                    "keyframe": 46,
                    "actionItems": [{
                        "id": "a-75-n-3",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "610d3887fad63aff5158cffe|30a46525-1890-cc01-8c8c-459963277483"
                            },
                            "value": 0,
                            "unit": ""
                        }
                    }, {
                        "id": "a-75-n-4",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "610d3887fad63aff5158cffe|30a46525-1890-cc01-8c8c-459963277480"
                            },
                            "value": 1,
                            "unit": ""
                        }
                    }]
                }]
            }],
            "createdOn": 1625147102083
        },
        "a-77": {
            "id": "a-77",
            "title": "sticky menu out",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-77-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "easeInOut",
                        "duration": 500,
                        "target": {},
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1625575778919
        },
        "a-76": {
            "id": "a-76",
            "title": "sticky menu on",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-76-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "easeInOut",
                        "duration": 500,
                        "target": {},
                        "yValue": -68,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1625575778919
        },
        "a-81": {
            "id": "a-81",
            "title": "spinner in",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-81-n",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "easeInOut",
                        "duration": 0,
                        "target": {
                            "selector": ".image-5",
                            "selectorGuids": ["fd73183f-4482-ed62-1ae3-9336de1d183a"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-81-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "easeInOut",
                        "duration": 300,
                        "target": {
                            "selector": ".image-5",
                            "selectorGuids": ["fd73183f-4482-ed62-1ae3-9336de1d183a"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1625735401830
        },
        "a-79": {
            "id": "a-79",
            "title": "spinner out",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-79-n",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "easeInOut",
                        "duration": 500,
                        "target": {
                            "selector": ".image-5",
                            "selectorGuids": ["fd73183f-4482-ed62-1ae3-9336de1d183a"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-79-n-2",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".navbar.load",
                            "selectorGuids": ["08f3b3fd-15ad-465c-0b77-81220e19354f", "cd166d15-b8ac-de0e-0e8c-3d63d0ee6555"]
                        },
                        "value": "none"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1625735401830
        },
        "a-80": {
            "id": "a-80",
            "title": "spinner",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-80-n-6",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".image-5",
                            "selectorGuids": ["fd73183f-4482-ed62-1ae3-9336de1d183a"]
                        },
                        "zValue": 0,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-80-n",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "swingTo",
                        "duration": 500,
                        "target": {
                            "selector": ".image-5",
                            "selectorGuids": ["fd73183f-4482-ed62-1ae3-9336de1d183a"]
                        },
                        "zValue": 120,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-80-n-2",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "swingTo",
                        "duration": 500,
                        "target": {
                            "selector": ".image-5",
                            "selectorGuids": ["fd73183f-4482-ed62-1ae3-9336de1d183a"]
                        },
                        "zValue": 240,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-80-n-3",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "swingTo",
                        "duration": 500,
                        "target": {
                            "selector": ".image-5",
                            "selectorGuids": ["fd73183f-4482-ed62-1ae3-9336de1d183a"]
                        },
                        "zValue": 360,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }, {
                    "id": "a-80-n-5",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".image-5",
                            "selectorGuids": ["fd73183f-4482-ed62-1ae3-9336de1d183a"]
                        },
                        "zValue": 0,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1625736774785
        },
        "a-83": {
            "id": "a-83",
            "title": "Cookie 5 on load",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-83-n-3",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "easeInOut",
                        "duration": 500,
                        "target": {},
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-83-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "easeInOut",
                        "duration": 500,
                        "target": {},
                        "xValue": null,
                        "yValue": 130,
                        "xUnit": "%",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-83-n-4",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outCubic",
                        "duration": 1000,
                        "target": {},
                        "xValue": null,
                        "yValue": 0,
                        "xUnit": "%",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-83-n-5",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "easeIn",
                        "duration": 500,
                        "target": {},
                        "value": 1,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1599836825752
        },
        "a-85": {
            "id": "a-85",
            "title": "dropdown - opens",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-85-n-4",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "easeInOut",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".dropdown-list",
                            "selectorGuids": ["5240745f-fbff-4b0d-5894-f51e2033ef5f"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-85-n-5",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "easeInOut",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".dropdown-list",
                            "selectorGuids": ["5240745f-fbff-4b0d-5894-f51e2033ef5f"]
                        },
                        "xValue": 0,
                        "yValue": 0,
                        "zValue": 0,
                        "xUnit": "px",
                        "yUnit": "px",
                        "zUnit": "px"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-85-n-7",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "easeInOut",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".dropdown-list",
                            "selectorGuids": ["5240745f-fbff-4b0d-5894-f51e2033ef5f"]
                        },
                        "xValue": 0,
                        "yValue": 0,
                        "zValue": 0,
                        "xUnit": "px",
                        "yUnit": "px",
                        "zUnit": "px"
                    }
                }, {
                    "id": "a-85-n-6",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "easeInOut",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".dropdown-list",
                            "selectorGuids": ["5240745f-fbff-4b0d-5894-f51e2033ef5f"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1629286503780
        },
        "a-86": {
            "id": "a-86",
            "title": "dropdown - closes",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-86-n-2",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "easeInOut",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".dropdown-list",
                            "selectorGuids": ["5240745f-fbff-4b0d-5894-f51e2033ef5f"]
                        },
                        "xValue": 0,
                        "yValue": 0,
                        "zValue": 0,
                        "xUnit": "px",
                        "yUnit": "px",
                        "zUnit": "px"
                    }
                }, {
                    "id": "a-86-n",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".dropdown-list",
                            "selectorGuids": ["5240745f-fbff-4b0d-5894-f51e2033ef5f"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-86-n-4",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "easeInOut",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".dropdown-list",
                            "selectorGuids": ["5240745f-fbff-4b0d-5894-f51e2033ef5f"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-86-n-6",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "easeInOut",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".dropdown-list",
                            "selectorGuids": ["5240745f-fbff-4b0d-5894-f51e2033ef5f"]
                        },
                        "xValue": 0,
                        "yValue": -20,
                        "zValue": 0,
                        "xUnit": "px",
                        "yUnit": "px",
                        "zUnit": "px"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1629286503780
        },
        "a-84": {
            "id": "a-84",
            "title": "nav-move 2",
            "continuousParameterGroups": [{
                "id": "a-84-p",
                "type": "MOUSE_X",
                "parameterLabel": "Mouse X",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-84-n",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "easeInOut",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".move",
                                "selectorGuids": ["f9c74904-3d03-5160-8be8-77b218a8b6a7"]
                            },
                            "xValue": -16,
                            "xUnit": "px",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-84-n-2",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "easeInOut",
                            "duration": 500,
                            "target": {
                                "useEventTarget": true,
                                "id": "afb98085-94b6-bff7-91e0-10f9e30d69ef"
                            },
                            "xValue": 8,
                            "xUnit": "px",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 100,
                    "actionItems": [{
                        "id": "a-84-n-3",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "easeInOut",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".move",
                                "selectorGuids": ["f9c74904-3d03-5160-8be8-77b218a8b6a7"]
                            },
                            "xValue": 16,
                            "xUnit": "px",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-84-n-4",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "easeInOut",
                            "duration": 500,
                            "target": {
                                "useEventTarget": true,
                                "id": "afb98085-94b6-bff7-91e0-10f9e30d69ef"
                            },
                            "xValue": -8,
                            "xUnit": "px",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }]
                }]
            }, {
                "id": "a-84-p-2",
                "type": "MOUSE_Y",
                "parameterLabel": "Mouse Y",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-84-n-5",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "easeInOut",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".move",
                                "selectorGuids": ["f9c74904-3d03-5160-8be8-77b218a8b6a7"]
                            },
                            "yValue": -16,
                            "xUnit": "PX",
                            "yUnit": "px",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-84-n-6",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "easeInOut",
                            "duration": 500,
                            "target": {
                                "useEventTarget": true,
                                "id": "afb98085-94b6-bff7-91e0-10f9e30d69ef"
                            },
                            "yValue": 8,
                            "xUnit": "PX",
                            "yUnit": "px",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 100,
                    "actionItems": [{
                        "id": "a-84-n-7",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "easeInOut",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".move",
                                "selectorGuids": ["f9c74904-3d03-5160-8be8-77b218a8b6a7"]
                            },
                            "yValue": 16,
                            "xUnit": "PX",
                            "yUnit": "px",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-84-n-8",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "easeInOut",
                            "duration": 500,
                            "target": {
                                "useEventTarget": true,
                                "id": "afb98085-94b6-bff7-91e0-10f9e30d69ef"
                            },
                            "yValue": -8,
                            "xUnit": "PX",
                            "yUnit": "px",
                            "zUnit": "PX"
                        }
                    }]
                }]
            }],
            "createdOn": 1596719249543
        },
        "fadeIn": {
            "id": "fadeIn",
            "useFirstGroupAsInitialState": true,
            "actionItemGroups": [{
                "actionItems": [{
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "duration": 0,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "value": 0
                    }
                }]
            }, {
                "actionItems": [{
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 1000,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "value": 1
                    }
                }]
            }]
        }
    },
    "site": {
        "mediaQueries": [{
            "key": "main",
            "min": 992,
            "max": 10000
        }, {
            "key": "medium",
            "min": 768,
            "max": 991
        }, {
            "key": "small",
            "min": 480,
            "max": 767
        }, {
            "key": "tiny",
            "min": 0,
            "max": 479
        }]
    }
});