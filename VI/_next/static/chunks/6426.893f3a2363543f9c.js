try {
    let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
        t = (new e.Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "49e53975-6694-496b-946c-a8558825c9eb", e._sentryDebugIdIdentifier = "sentry-dbid-49e53975-6694-496b-946c-a8558825c9eb")
} catch (e) {}(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6426], {
        46648: function(e, t, n) {
            var r = n(44564),
                o = n(70061),
                a = n(22749);

            function i(e) {
                var t = -1,
                    n = null == e ? 0 : e.length;
                for (this.__data__ = new r; ++t < n;) this.add(e[t])
            }
            i.prototype.add = i.prototype.push = o, i.prototype.has = a, e.exports = i
        },
        78738: function(e) {
            e.exports = function(e, t) {
                for (var n = -1, r = null == e ? 0 : e.length; ++n < r;)
                    if (t(e[n], n, e)) return !0;
                return !1
            }
        },
        31484: function(e, t, n) {
            var r = n(27831),
                o = n(89641);
            e.exports = function e(t, n, a, i, s) {
                return t === n || (null != t && null != n && (o(t) || o(n)) ? r(t, n, a, i, e, s) : t != t && n != n)
            }
        },
        27831: function(e, t, n) {
            var r = n(37481),
                o = n(43724),
                a = n(674),
                i = n(15004),
                s = n(26249),
                u = n(10057),
                c = n(18167),
                l = n(17531),
                f = "[object Arguments]",
                p = "[object Array]",
                d = "[object Object]",
                h = Object.prototype.hasOwnProperty;
            e.exports = function(e, t, n, y, v, m) {
                var g = u(e),
                    b = u(t),
                    _ = g ? p : s(e),
                    S = b ? p : s(t);
                _ = _ == f ? d : _, S = S == f ? d : S;
                var E = _ == d,
                    w = S == d,
                    j = _ == S;
                if (j && c(e)) {
                    if (!c(t)) return !1;
                    g = !0, E = !1
                }
                if (j && !E) return m || (m = new r), g || l(e) ? o(e, t, n, y, v, m) : a(e, t, _, n, y, v, m);
                if (!(1 & n)) {
                    var O = E && h.call(e, "__wrapped__"),
                        C = w && h.call(t, "__wrapped__");
                    if (O || C) {
                        var k = O ? e.value() : e,
                            R = C ? t.value() : t;
                        return m || (m = new r), v(k, R, n, y, m)
                    }
                }
                return !!j && (m || (m = new r), i(e, t, n, y, v, m))
            }
        },
        981: function(e) {
            e.exports = function(e, t) {
                return e.has(t)
            }
        },
        43724: function(e, t, n) {
            var r = n(46648),
                o = n(78738),
                a = n(981);
            e.exports = function(e, t, n, i, s, u) {
                var c = 1 & n,
                    l = e.length,
                    f = t.length;
                if (l != f && !(c && f > l)) return !1;
                var p = u.get(e),
                    d = u.get(t);
                if (p && d) return p == t && d == e;
                var h = -1,
                    y = !0,
                    v = 2 & n ? new r : void 0;
                for (u.set(e, t), u.set(t, e); ++h < l;) {
                    var m = e[h],
                        g = t[h];
                    if (i) var b = c ? i(g, m, h, t, e, u) : i(m, g, h, e, t, u);
                    if (void 0 !== b) {
                        if (b) continue;
                        y = !1;
                        break
                    }
                    if (v) {
                        if (!o(t, function(e, t) {
                                if (!a(v, t) && (m === e || s(m, e, n, i, u))) return v.push(t)
                            })) {
                            y = !1;
                            break
                        }
                    } else if (!(m === g || s(m, g, n, i, u))) {
                        y = !1;
                        break
                    }
                }
                return u.delete(e), u.delete(t), y
            }
        },
        674: function(e, t, n) {
            var r = n(67692),
                o = n(69157),
                a = n(38376),
                i = n(43724),
                s = n(78862),
                u = n(23625),
                c = r ? r.prototype : void 0,
                l = c ? c.valueOf : void 0;
            e.exports = function(e, t, n, r, c, f, p) {
                switch (n) {
                    case "[object DataView]":
                        if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) break;
                        e = e.buffer, t = t.buffer;
                    case "[object ArrayBuffer]":
                        if (e.byteLength != t.byteLength || !f(new o(e), new o(t))) break;
                        return !0;
                    case "[object Boolean]":
                    case "[object Date]":
                    case "[object Number]":
                        return a(+e, +t);
                    case "[object Error]":
                        return e.name == t.name && e.message == t.message;
                    case "[object RegExp]":
                    case "[object String]":
                        return e == t + "";
                    case "[object Map]":
                        var d = s;
                    case "[object Set]":
                        var h = 1 & r;
                        if (d || (d = u), e.size != t.size && !h) break;
                        var y = p.get(e);
                        if (y) return y == t;
                        r |= 2, p.set(e, t);
                        var v = i(d(e), d(t), r, c, f, p);
                        return p.delete(e), v;
                    case "[object Symbol]":
                        if (l) return l.call(e) == l.call(t)
                }
                return !1
            }
        },
        15004: function(e, t, n) {
            var r = n(51421),
                o = Object.prototype.hasOwnProperty;
            e.exports = function(e, t, n, a, i, s) {
                var u = 1 & n,
                    c = r(e),
                    l = c.length;
                if (l != r(t).length && !u) return !1;
                for (var f = l; f--;) {
                    var p = c[f];
                    if (!(u ? p in t : o.call(t, p))) return !1
                }
                var d = s.get(e),
                    h = s.get(t);
                if (d && h) return d == t && h == e;
                var y = !0;
                s.set(e, t), s.set(t, e);
                for (var v = u; ++f < l;) {
                    var m = e[p = c[f]],
                        g = t[p];
                    if (a) var b = u ? a(g, m, p, t, e, s) : a(m, g, p, e, t, s);
                    if (!(void 0 === b ? m === g || i(m, g, n, a, s) : b)) {
                        y = !1;
                        break
                    }
                    v || (v = "constructor" == p)
                }
                if (y && !v) {
                    var _ = e.constructor,
                        S = t.constructor;
                    _ != S && "constructor" in e && "constructor" in t && !("function" == typeof _ && _ instanceof _ && "function" == typeof S && S instanceof S) && (y = !1)
                }
                return s.delete(e), s.delete(t), y
            }
        },
        78862: function(e) {
            e.exports = function(e) {
                var t = -1,
                    n = Array(e.size);
                return e.forEach(function(e, r) {
                    n[++t] = [r, e]
                }), n
            }
        },
        70061: function(e) {
            e.exports = function(e) {
                return this.__data__.set(e, "__lodash_hash_undefined__"), this
            }
        },
        22749: function(e) {
            e.exports = function(e) {
                return this.__data__.has(e)
            }
        },
        23625: function(e) {
            e.exports = function(e) {
                var t = -1,
                    n = Array(e.size);
                return e.forEach(function(e) {
                    n[++t] = e
                }), n
            }
        },
        52490: function(e, t, n) {
            var r = n(31484);
            e.exports = function(e, t) {
                return r(e, t)
            }
        },
        94718: function() {},
        88294: function(e, t, n) {
            "use strict";
            var r = n(7653);
            Symbol.for("react.element"), Symbol.for("react.fragment"), Object.prototype.hasOwnProperty, r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner
        },
        3547: function(e, t) {
            "use strict";
            var n = Symbol.for("react.element"),
                r = Symbol.for("react.portal"),
                o = Symbol.for("react.fragment"),
                a = Symbol.for("react.strict_mode"),
                i = Symbol.for("react.profiler"),
                s = Symbol.for("react.provider"),
                u = Symbol.for("react.context"),
                c = Symbol.for("react.forward_ref"),
                l = Symbol.for("react.suspense"),
                f = Symbol.for("react.memo"),
                p = Symbol.for("react.lazy"),
                d = Symbol.iterator,
                h = {
                    isMounted: function() {
                        return !1
                    },
                    enqueueForceUpdate: function() {},
                    enqueueReplaceState: function() {},
                    enqueueSetState: function() {}
                },
                y = Object.assign,
                v = {};

            function m(e, t, n) {
                this.props = e, this.context = t, this.refs = v, this.updater = n || h
            }

            function g() {}

            function b(e, t, n) {
                this.props = e, this.context = t, this.refs = v, this.updater = n || h
            }
            m.prototype.isReactComponent = {}, m.prototype.setState = function(e, t) {
                if ("object" != typeof e && "function" != typeof e && null != e) throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
                this.updater.enqueueSetState(this, e, t, "setState")
            }, m.prototype.forceUpdate = function(e) {
                this.updater.enqueueForceUpdate(this, e, "forceUpdate")
            }, g.prototype = m.prototype;
            var _ = b.prototype = new g;
            _.constructor = b, y(_, m.prototype), _.isPureReactComponent = !0;
            var S = Array.isArray,
                E = {
                    current: null
                },
                w = {
                    current: null
                },
                j = {
                    transition: null
                },
                O = {
                    ReactCurrentDispatcher: E,
                    ReactCurrentCache: w,
                    ReactCurrentBatchConfig: j,
                    ReactCurrentOwner: {
                        current: null
                    }
                },
                C = Object.prototype.hasOwnProperty,
                k = O.ReactCurrentOwner;

            function R(e, t, r) {
                var o, a = {},
                    i = null,
                    s = null;
                if (null != t)
                    for (o in void 0 !== t.ref && (s = t.ref), void 0 !== t.key && (i = "" + t.key), t) C.call(t, o) && "key" !== o && "ref" !== o && "__self" !== o && "__source" !== o && (a[o] = t[o]);
                var u = arguments.length - 2;
                if (1 === u) a.children = r;
                else if (1 < u) {
                    for (var c = Array(u), l = 0; l < u; l++) c[l] = arguments[l + 2];
                    a.children = c
                }
                if (e && e.defaultProps)
                    for (o in u = e.defaultProps) void 0 === a[o] && (a[o] = u[o]);
                return {
                    $$typeof: n,
                    type: e,
                    key: i,
                    ref: s,
                    props: a,
                    _owner: k.current
                }
            }

            function A(e) {
                return "object" == typeof e && null !== e && e.$$typeof === n
            }
            var x = /\/+/g;

            function L(e, t) {
                var n, r;
                return "object" == typeof e && null !== e && null != e.key ? (n = "" + e.key, r = {
                    "=": "=0",
                    ":": "=2"
                }, "$" + n.replace(/[=:]/g, function(e) {
                    return r[e]
                })) : t.toString(36)
            }

            function T() {}

            function $(e, t, o) {
                if (null == e) return e;
                var a = [],
                    i = 0;
                return ! function e(t, o, a, i, s) {
                    var u, c, l, f = typeof t;
                    ("undefined" === f || "boolean" === f) && (t = null);
                    var h = !1;
                    if (null === t) h = !0;
                    else switch (f) {
                        case "string":
                        case "number":
                            h = !0;
                            break;
                        case "object":
                            switch (t.$$typeof) {
                                case n:
                                case r:
                                    h = !0;
                                    break;
                                case p:
                                    return e((h = t._init)(t._payload), o, a, i, s)
                            }
                    }
                    if (h) return s = s(t), h = "" === i ? "." + L(t, 0) : i, S(s) ? (a = "", null != h && (a = h.replace(x, "$&/") + "/"), e(s, o, a, "", function(e) {
                        return e
                    })) : null != s && (A(s) && (u = s, c = a + (!s.key || t && t.key === s.key ? "" : ("" + s.key).replace(x, "$&/") + "/") + h, s = {
                        $$typeof: n,
                        type: u.type,
                        key: c,
                        ref: u.ref,
                        props: u.props,
                        _owner: u._owner
                    }), o.push(s)), 1;
                    h = 0;
                    var y = "" === i ? "." : i + ":";
                    if (S(t))
                        for (var v = 0; v < t.length; v++) f = y + L(i = t[v], v), h += e(i, o, a, f, s);
                    else if ("function" == typeof(v = null === (l = t) || "object" != typeof l ? null : "function" == typeof(l = d && l[d] || l["@@iterator"]) ? l : null))
                        for (t = v.call(t), v = 0; !(i = t.next()).done;) f = y + L(i = i.value, v++), h += e(i, o, a, f, s);
                    else if ("object" === f) {
                        if ("function" == typeof t.then) return e(function(e) {
                            switch (e.status) {
                                case "fulfilled":
                                    return e.value;
                                case "rejected":
                                    throw e.reason;
                                default:
                                    switch ("string" == typeof e.status ? e.then(T, T) : (e.status = "pending", e.then(function(t) {
                                        "pending" === e.status && (e.status = "fulfilled", e.value = t)
                                    }, function(t) {
                                        "pending" === e.status && (e.status = "rejected", e.reason = t)
                                    })), e.status) {
                                        case "fulfilled":
                                            return e.value;
                                        case "rejected":
                                            throw e.reason
                                    }
                            }
                            throw e
                        }(t), o, a, i, s);
                        throw Error("Objects are not valid as a React child (found: " + ("[object Object]" === (o = String(t)) ? "object with keys {" + Object.keys(t).join(", ") + "}" : o) + "). If you meant to render a collection of children, use an array instead.")
                    }
                    return h
                }(e, a, "", "", function(e) {
                    return t.call(o, e, i++)
                }), a
            }

            function P(e) {
                if (-1 === e._status) {
                    var t = e._result;
                    (t = t()).then(function(t) {
                        (0 === e._status || -1 === e._status) && (e._status = 1, e._result = t)
                    }, function(t) {
                        (0 === e._status || -1 === e._status) && (e._status = 2, e._result = t)
                    }), -1 === e._status && (e._status = 0, e._result = t)
                }
                if (1 === e._status) return e._result.default;
                throw e._result
            }

            function D() {
                return new WeakMap
            }

            function I() {
                return {
                    s: 0,
                    v: void 0,
                    o: null,
                    p: null
                }
            }

            function M() {}
            var N = "function" == typeof reportError ? reportError : function(e) {
                console.error(e)
            };
            t.Children = {
                map: $,
                forEach: function(e, t, n) {
                    $(e, function() {
                        t.apply(this, arguments)
                    }, n)
                },
                count: function(e) {
                    var t = 0;
                    return $(e, function() {
                        t++
                    }), t
                },
                toArray: function(e) {
                    return $(e, function(e) {
                        return e
                    }) || []
                },
                only: function(e) {
                    if (!A(e)) throw Error("React.Children.only expected to receive a single React element child.");
                    return e
                }
            }, t.Component = m, t.Fragment = o, t.Profiler = i, t.PureComponent = b, t.StrictMode = a, t.Suspense = l, t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = O, t.act = function() {
                throw Error("act(...) is not supported in production builds of React.")
            }, t.cache = function(e) {
                return function() {
                    var t = w.current;
                    if (!t) return e.apply(null, arguments);
                    var n = t.getCacheForType(D);
                    void 0 === (t = n.get(e)) && (t = I(), n.set(e, t)), n = 0;
                    for (var r = arguments.length; n < r; n++) {
                        var o = arguments[n];
                        if ("function" == typeof o || "object" == typeof o && null !== o) {
                            var a = t.o;
                            null === a && (t.o = a = new WeakMap), void 0 === (t = a.get(o)) && (t = I(), a.set(o, t))
                        } else null === (a = t.p) && (t.p = a = new Map), void 0 === (t = a.get(o)) && (t = I(), a.set(o, t))
                    }
                    if (1 === t.s) return t.v;
                    if (2 === t.s) throw t.v;
                    try {
                        var i = e.apply(null, arguments);
                        return (n = t).s = 1, n.v = i
                    } catch (e) {
                        throw (i = t).s = 2, i.v = e, e
                    }
                }
            }, t.cloneElement = function(e, t, r) {
                if (null == e) throw Error("The argument must be a React element, but you passed " + e + ".");
                var o = y({}, e.props),
                    a = e.key,
                    i = e.ref,
                    s = e._owner;
                if (null != t) {
                    if (void 0 !== t.ref && (i = t.ref, s = k.current), void 0 !== t.key && (a = "" + t.key), e.type && e.type.defaultProps) var u = e.type.defaultProps;
                    for (c in t) C.call(t, c) && "key" !== c && "ref" !== c && "__self" !== c && "__source" !== c && (o[c] = void 0 === t[c] && void 0 !== u ? u[c] : t[c])
                }
                var c = arguments.length - 2;
                if (1 === c) o.children = r;
                else if (1 < c) {
                    u = Array(c);
                    for (var l = 0; l < c; l++) u[l] = arguments[l + 2];
                    o.children = u
                }
                return {
                    $$typeof: n,
                    type: e.type,
                    key: a,
                    ref: i,
                    props: o,
                    _owner: s
                }
            }, t.createContext = function(e) {
                return (e = {
                    $$typeof: u,
                    _currentValue: e,
                    _currentValue2: e,
                    _threadCount: 0,
                    Provider: null,
                    Consumer: null
                }).Provider = {
                    $$typeof: s,
                    _context: e
                }, e.Consumer = e
            }, t.createElement = R, t.createFactory = function(e) {
                var t = R.bind(null, e);
                return t.type = e, t
            }, t.createRef = function() {
                return {
                    current: null
                }
            }, t.forwardRef = function(e) {
                return {
                    $$typeof: c,
                    render: e
                }
            }, t.isValidElement = A, t.lazy = function(e) {
                return {
                    $$typeof: p,
                    _payload: {
                        _status: -1,
                        _result: e
                    },
                    _init: P
                }
            }, t.memo = function(e, t) {
                return {
                    $$typeof: f,
                    type: e,
                    compare: void 0 === t ? null : t
                }
            }, t.startTransition = function(e) {
                var t = j.transition,
                    n = new Set;
                j.transition = {
                    _callbacks: n
                };
                var r = j.transition;
                try {
                    var o = e();
                    "object" == typeof o && null !== o && "function" == typeof o.then && (n.forEach(function(e) {
                        return e(r, o)
                    }), o.then(M, N))
                } catch (e) {
                    N(e)
                } finally {
                    j.transition = t
                }
            }, t.unstable_useCacheRefresh = function() {
                return E.current.useCacheRefresh()
            }, t.use = function(e) {
                return E.current.use(e)
            }, t.useCallback = function(e, t) {
                return E.current.useCallback(e, t)
            }, t.useContext = function(e) {
                return E.current.useContext(e)
            }, t.useDebugValue = function() {}, t.useDeferredValue = function(e, t) {
                return E.current.useDeferredValue(e, t)
            }, t.useEffect = function(e, t) {
                return E.current.useEffect(e, t)
            }, t.useId = function() {
                return E.current.useId()
            }, t.useImperativeHandle = function(e, t, n) {
                return E.current.useImperativeHandle(e, t, n)
            }, t.useInsertionEffect = function(e, t) {
                return E.current.useInsertionEffect(e, t)
            }, t.useLayoutEffect = function(e, t) {
                return E.current.useLayoutEffect(e, t)
            }, t.useMemo = function(e, t) {
                return E.current.useMemo(e, t)
            }, t.useOptimistic = function(e, t) {
                return E.current.useOptimistic(e, t)
            }, t.useReducer = function(e, t, n) {
                return E.current.useReducer(e, t, n)
            }, t.useRef = function(e) {
                return E.current.useRef(e)
            }, t.useState = function(e) {
                return E.current.useState(e)
            }, t.useSyncExternalStore = function(e, t, n) {
                return E.current.useSyncExternalStore(e, t, n)
            }, t.useTransition = function() {
                return E.current.useTransition()
            }, t.version = "18.3.0-canary-178c267a4e-20241218"
        },
        7653: function(e, t, n) {
            "use strict";
            e.exports = n(3547)
        },
        27573: function(e, t, n) {
            "use strict";
            n(88294)
        },
        93229: function(e, t, n) {},
        29742: function(e, t, n) {
            "use strict";
            n(93229), n(7653)
        },
        47005: function(e, t, n) {
            "use strict";
            var r, o;
            n.d(t, {
                KP: function() {
                    return a
                }
            }), n(93229), n(66571), n(48838), n(43810), n(92872), n(87862), n(73498), n(3486), (o = r || (r = {})).Pending = "pending", o.Fulfilled = "fulfilled", o.Rejected = "rejected";
            class a {
                _promise;
                _resolve;
                _reject;
                _state = null;
                [Symbol.toStringTag] = "ExternalPromise";
                get State() {
                    return this._state
                }
                constructor(e) {
                    this._promise = new Promise((t, n) => {
                        this._resolve = e => {
                            this._state = r.Fulfilled, t(e)
                        }, this._reject = e => {
                            this._state = r.Rejected, n(e)
                        }, this._state = r.Pending, e ? .(this._resolve, this._reject)
                    })
                }
                then(e, t) {
                    return this._promise ? .then(e, t)
                } catch (e) {
                    return this._promise ? .catch(e)
                } finally(e) {
                    return this._promise ? .finally(e)
                }
                resolve(e) {
                    this._resolve ? .(e)
                }
                reject(e) {
                    this.reject ? .(e)
                }
            }
        },
        14899: function(e, t, n) {
            "use strict";
            n(27573), n(7653)
        },
        54599: function(e, t, n) {
            "use strict";
            n.d(t, {
                d_: function() {
                    return o
                }
            }), n(27573), n(47005);
            var r = n(60342);
            n(7653);
            class o {
                constructor(e = !1) {
                    this.eventHandlers = new Map, this.state = {
                        enabled: e,
                        active: !1,
                        complete: !1
                    }
                }
                dispatchEvent(e) {
                    let t = { ...this.state
                    };
                    this.eventHandlers.get(e) ? .forEach(e => e ? .(t))
                }
                addEventListener(e, t) {
                    this.eventHandlers.has(e) || this.eventHandlers.set(e, new Set), this.eventHandlers.get(e) ? .add(t)
                }
                removeEventListener(e, t) {
                    this.eventHandlers.get(e) ? .delete(t)
                }
                update(e) {
                    this.state.enabled !== e && (this.state.enabled = e, !this.state.enabled && this.state.active && (this.state.active = !1, this.dispatchEvent("stop")), this.dispatchEvent("update"))
                }
                reset() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    this.state.enabled = !1, e && (this.state.complete = !1), !this.state.enabled && this.state.active && (this.state.active = !1, this.dispatchEvent("stop")), this.dispatchEvent("update")
                }
                start() {
                    this.state.enabled && !this.state.active && (this.state.active = !0, this.dispatchEvent("start"))
                }
                stop() {
                    this.state.enabled && this.state.active && (this.state.active = !1, this.dispatchEvent("stop"))
                }
                complete() {
                    this.state.enabled && this.state.active && (this.state.active = !1, this.state.complete = !0, this.dispatchEvent("complete"))
                }
                get preloadState() {
                    return { ...this.state
                    }
                }
                get enabled() {
                    return this.state.enabled
                }
                get active() {
                    return this.state.active
                }
                get completed() {
                    return this.state.complete
                }
            }
            let a = "FinalizationRegistry" in globalThis ? new FinalizationRegistry(async e => {
                e.postMessage(null), e.close()
            }) : void 0;
            r.Y6.set("abortsignal", {
                canHandle: e => e instanceof AbortSignal || e ? .constructor ? .name === "AbortSignal",
                serialize(e) {
                    let {
                        port1: t,
                        port2: n
                    } = new MessageChannel;
                    return e.aborted ? [{
                            aborted: !0,
                            reason: e.reason
                        },
                        [n]
                    ] : (t.addEventListener("message", () => {}), e.addEventListener("abort", () => t.postMessage({
                        reason: e.reason
                    }), {
                        once: !0
                    }), a ? .register(e, t), [{
                            aborted: !1,
                            port: n
                        },
                        [n]
                    ])
                },
                deserialize({
                    aborted: e,
                    reason: t,
                    port: n
                }) {
                    if (e && t || !n) return n ? .close(), AbortSignal.abort(t);
                    let r = new AbortController;
                    return n.addEventListener("message", e => {
                        e.data && "reason" in e.data && r.abort(e.data.reason), n.close()
                    }, {
                        once: !0
                    }), n.start(), r.signal
                }
            }), r.Y6.set("preloadcontroller", {
                canHandle: e => e instanceof o || e ? .constructor ? .name === "PreloadController",
                serialize(e) {
                    let {
                        port1: t,
                        port2: n
                    } = new MessageChannel;
                    return t.addEventListener("message", t => {
                        if (t.data ? .event) switch (t.data.event) {
                            case "start":
                                return e.start();
                            case "stop":
                                return e.stop();
                            case "complete":
                                return e.complete()
                        }
                    }), e.addEventListener("update", e => {
                        t.postMessage({
                            event: "update",
                            state: e
                        })
                    }), a ? .register(e, t), t.start(), [{
                            state: e.preloadState,
                            port: n
                        },
                        [n]
                    ]
                },
                deserialize({
                    state: e,
                    port: t
                }) {
                    let n = new o(e.enabled);
                    return t ? .addEventListener("message", e => {
                        if (e.data ? .event && "update" === e.data.event) return n.update(e.data ? .state ? .enabled ? ? !1)
                    }), n.addEventListener("start", e => {
                        t ? .postMessage({
                            event: "start",
                            state: e
                        })
                    }), n.addEventListener("stop", e => {
                        t ? .postMessage({
                            event: "stop",
                            state: e
                        })
                    }), n.addEventListener("complete", e => {
                        t ? .postMessage({
                            event: "complete",
                            state: e
                        })
                    }), t ? .start(), n
                }
            }), n(72338), n(52490), n(14899), n(29742), n(94718)
        },
        94088: function(e, t, n) {
            "use strict";
            n.d(t, {
                $e: function() {
                    return s
                },
                aF: function() {
                    return i
                },
                nZ: function() {
                    return a
                },
                s3: function() {
                    return u
                }
            });
            var r = n(54816),
                o = n(26418);

            function a() {
                let e = (0, o.cu)();
                return (0, r.G)(e).getCurrentScope()
            }

            function i() {
                let e = (0, o.cu)();
                return (0, r.G)(e).getIsolationScope()
            }

            function s(...e) {
                let t = (0, o.cu)(),
                    n = (0, r.G)(t);
                if (2 === e.length) {
                    let [t, r] = e;
                    return t ? n.withSetScope(t, r) : n.withScope(r)
                }
                return n.withScope(e[0])
            }

            function u() {
                return a().getClient()
            }
        },
        38683: function(e, t, n) {
            "use strict";
            n.d(t, {
                uE: function() {
                    return s
                }
            });
            var r = n(50015),
                o = n(72337),
                a = n(97957),
                i = n(58781);

            function s(e, t) {
                let n = (0, r.jC)(e[0]),
                    s = t ? .getDsn(),
                    u = t ? .getOptions().tunnel,
                    c = {
                        sent_at: new Date().toISOString(),
                        ...!!n.trace_id && !!n.public_key && {
                            trace: n
                        },
                        ...!!u && s && {
                            dsn: (0, o.RA)(s)
                        }
                    },
                    l = t ? .getOptions().beforeSendSpan,
                    f = l ? e => {
                        let t = (0, i.XU)(e);
                        return l(t) || ((0, i.R6)(), t)
                    } : i.XU,
                    p = [];
                for (let t of e) {
                    let e = f(t);
                    e && p.push((0, a.KQ)(e))
                }
                return (0, a.Jd)(c, p)
            }
        },
        84731: function(e, t, n) {
            "use strict";
            n.d(t, {
                $J: function() {
                    return a
                },
                E1: function() {
                    return s
                },
                JQ: function() {
                    return f
                },
                S3: function() {
                    return i
                },
                TE: function() {
                    return o
                },
                Wb: function() {
                    return u
                },
                Zj: function() {
                    return r
                },
                p6: function() {
                    return l
                },
                xF: function() {
                    return c
                }
            });
            let r = "sentry.source",
                o = "sentry.sample_rate",
                a = "sentry.op",
                i = "sentry.origin",
                s = "sentry.measurement_unit",
                u = "sentry.measurement_value",
                c = "sentry.custom_span_name",
                l = "sentry.profile_id",
                f = "sentry.exclusive_time"
        },
        74266: function(e, t, n) {
            "use strict";
            n.d(t, {
                CT: function() {
                    return a
                }
            });
            var r = n(37510),
                o = n(67088);

            function a(e, t = {}) {
                if (!t.user || (!e.ipAddress && t.user.ip_address && (e.ipAddress = t.user.ip_address), e.did || t.did || (e.did = t.user.id || t.user.email || t.user.username)), e.timestamp = t.timestamp || (0, r.ph)(), t.abnormal_mechanism && (e.abnormal_mechanism = t.abnormal_mechanism), t.ignoreDuration && (e.ignoreDuration = t.ignoreDuration), t.sid && (e.sid = 32 === t.sid.length ? t.sid : (0, o.DM)()), void 0 !== t.init && (e.init = t.init), !e.did && t.did && (e.did = `${t.did}`), "number" == typeof t.started && (e.started = t.started), e.ignoreDuration) e.duration = void 0;
                else if ("number" == typeof t.duration) e.duration = t.duration;
                else {
                    let t = e.timestamp - e.started;
                    e.duration = t >= 0 ? t : 0
                }
                t.release && (e.release = t.release), t.environment && (e.environment = t.environment), !e.ipAddress && t.ipAddress && (e.ipAddress = t.ipAddress), !e.userAgent && t.userAgent && (e.userAgent = t.userAgent), "number" == typeof t.errors && (e.errors = t.errors), t.status && (e.status = t.status)
            }
        },
        50015: function(e, t, n) {
            "use strict";
            n.d(t, {
                Lh: function() {
                    return p
                },
                jC: function() {
                    return d
                }
            });
            var r = n(58314),
                o = n(94088),
                a = n(84731),
                i = n(23610),
                s = n(21370),
                u = n(80844),
                c = n(58781),
                l = n(86004);
            let f = "_frozenDsc";

            function p(e, t) {
                (0, s.xp)(e, f, t)
            }

            function d(e) {
                let t = (0, o.s3)();
                if (!t) return {};
                let n = (0, c.Gx)(e),
                    s = (0, c.XU)(n),
                    p = s.data,
                    d = n.spanContext().traceState,
                    h = d ? .get("sentry.sample_rate") ? ? p[a.TE];

                function y(e) {
                    return ("number" == typeof h || "string" == typeof h) && (e.sample_rate = `${h}`), e
                }
                let v = n[f];
                if (v) return y(v);
                let m = d ? .get("sentry.dsc"),
                    g = m && (0, i.EN)(m);
                if (g) return y(g);
                let b = function(e, t) {
                        let n = t.getOptions(),
                            {
                                publicKey: o
                            } = t.getDsn() || {},
                            a = {
                                environment: n.environment || r.J,
                                release: n.release,
                                public_key: o,
                                trace_id: e
                            };
                        return t.emit("createDsc", a), a
                    }(e.spanContext().traceId, t),
                    _ = p[a.Zj],
                    S = s.description;
                return "url" !== _ && S && (b.transaction = S), (0, u.f)() && (b.sampled = String((0, c.Tt)(n)), b.sample_rand = d ? .get("sentry.sample_rand") ? ? l.I(n).scope ? .getPropagationContext().sampleRand.toString()), y(b), t.emit("createDsc", b, n), b
            }
        },
        59560: function(e, t, n) {
            "use strict";
            n.d(t, {
                l: function() {
                    return o
                }
            });
            var r = n(84731);

            function o(e) {
                if (!e || 0 === e.length) return;
                let t = {};
                return e.forEach(e => {
                    let n = e.attributes || {},
                        o = n[r.E1],
                        a = n[r.Wb];
                    "string" == typeof o && "number" == typeof a && (t[e.name] = {
                        value: a,
                        unit: o
                    })
                }), t
            }
        },
        88879: function(e, t, n) {
            "use strict";
            n.d(t, {
                OP: function() {
                    return o
                },
                pq: function() {
                    return r
                }
            });
            let r = 0,
                o = 1
        },
        83726: function(e, t, n) {
            "use strict";
            n.d(t, {
                qp: function() {
                    return _
                }
            });
            var r = n(26418),
                o = n(94088),
                a = n(54816),
                i = n(91475),
                s = n(84731),
                u = n(74076),
                c = n(80844),
                l = n(22602),
                f = n(48925),
                p = n(58781),
                d = n(50015),
                h = n(20669),
                y = n(64332),
                v = n(94583),
                m = n(376),
                g = n(86004);
            let b = "__SENTRY_SUPPRESS_TRACING__";

            function _(e) {
                let t = S();
                if (t.startInactiveSpan) return t.startInactiveSpan(e);
                let n = function(e) {
                        let t = {
                            isStandalone: (e.experimental || {}).standalone,
                            ...e
                        };
                        if (e.startTime) {
                            let n = { ...t
                            };
                            return n.startTimestamp = (0, p.$k)(e.startTime), delete n.startTime, n
                        }
                        return t
                    }(e),
                    {
                        forceTransaction: r,
                        parentSpan: a
                    } = e;
                return (e.scope ? t => (0, o.$e)(e.scope, t) : void 0 !== a ? e => (function(e, t) {
                    let n = S();
                    return n.withActiveSpan ? n.withActiveSpan(e, t) : (0, o.$e)(n => ((0, f.D)(n, e || void 0), t(n)))
                })(a, e) : e => e())(() => {
                    let t = (0, o.nZ)(),
                        a = function(e) {
                            let t = (0, f.Y)(e);
                            if (!t) return;
                            let n = (0, o.s3)();
                            return (n ? n.getOptions() : {}).parentSpanIsAlwaysRootSpan ? (0, p.Gx)(t) : t
                        }(t);
                    return e.onlyIfParent && !a ? new v.b : function({
                        parentSpan: e,
                        spanArguments: t,
                        forceTransaction: n,
                        scope: r
                    }) {
                        let a;
                        if (!(0, c.f)()) {
                            let r = new v.b;
                            if (n || !e) {
                                let e = {
                                    sampled: "false",
                                    sample_rate: "0",
                                    transaction: t.name,
                                    ...(0, d.jC)(r)
                                };
                                (0, d.Lh)(r, e)
                            }
                            return r
                        }
                        let i = (0, o.aF)();
                        if (e && !n) a = function(e, t, n) {
                            let {
                                spanId: r,
                                traceId: a
                            } = e.spanContext(), i = !t.getScopeData().sdkProcessingMetadata[b] && (0, p.Tt)(e), s = i ? new m.s({ ...n,
                                parentSpanId: r,
                                traceId: a,
                                sampled: i
                            }) : new v.b({
                                traceId: a
                            });
                            (0, p.j5)(e, s);
                            let u = (0, o.s3)();
                            return u && (u.emit("spanStart", s), n.endTimestamp && u.emit("spanEnd", s)), s
                        }(e, r, t), (0, p.j5)(e, a);
                        else if (e) {
                            let n = (0, d.jC)(e),
                                {
                                    traceId: o,
                                    spanId: i
                                } = e.spanContext(),
                                s = (0, p.Tt)(e);
                            a = E({
                                traceId: o,
                                parentSpanId: i,
                                ...t
                            }, r, s), (0, d.Lh)(a, n)
                        } else {
                            let {
                                traceId: e,
                                dsc: n,
                                parentSpanId: o,
                                sampled: s
                            } = { ...i.getPropagationContext(),
                                ...r.getPropagationContext()
                            };
                            a = E({
                                traceId: e,
                                parentSpanId: o,
                                ...t
                            }, r, s), n && (0, d.Lh)(a, n)
                        }
                        return (0, h.Z)(a), (0, g.Y)(a, r, i), a
                    }({
                        parentSpan: a,
                        spanArguments: n,
                        forceTransaction: r,
                        scope: t
                    })
                })
            }

            function S() {
                let e = (0, r.cu)();
                return (0, a.G)(e)
            }

            function E(e, t, n) {
                let r = (0, o.s3)(),
                    a = r ? .getOptions() || {},
                    {
                        name: c = "",
                        attributes: f
                    } = e,
                    p = t.getPropagationContext(),
                    [d, h, v] = t.getScopeData().sdkProcessingMetadata[b] ? [!1] : (0, y.R)(a, {
                        name: c,
                        parentSampled: n,
                        attributes: f,
                        parentSampleRate: (0, l.o)(p.dsc ? .sample_rate)
                    }, p.sampleRand),
                    g = new m.s({ ...e,
                        attributes: {
                            [s.Zj]: "custom",
                            [s.TE]: void 0 !== h && v ? h : void 0,
                            ...e.attributes
                        },
                        sampled: d
                    });
                return !d && r && (i.X && u.kg.log("[Tracing] Discarding root span because its trace was not chosen to be sampled."), r.recordDroppedEvent("sample_rate", "transaction")), r && r.emit("spanStart", g), g
            }
        },
        23610: function(e, t, n) {
            "use strict";
            n.d(t, {
                EN: function() {
                    return a
                }
            });
            var r = n(79985);
            let o = /^sentry-/;

            function a(e) {
                let t = e && ((0, r.HD)(e) || Array.isArray(e)) ? Array.isArray(e) ? e.reduce((e, t) => (Object.entries(i(t)).forEach(([t, n]) => {
                    e[t] = n
                }), e), {}) : i(e) : void 0;
                if (!t) return;
                let n = Object.entries(t).reduce((e, [t, n]) => (t.match(o) && (e[t.slice("sentry-".length)] = n), e), {});
                return Object.keys(n).length > 0 ? n : void 0
            }

            function i(e) {
                return e.split(",").map(e => e.split("=").map(e => decodeURIComponent(e.trim()))).reduce((e, [t, n]) => (t && n && (e[t] = n), e), {})
            }
        },
        72337: function(e, t, n) {
            "use strict";

            function r(e, t = !1) {
                let {
                    host: n,
                    path: r,
                    pass: o,
                    port: a,
                    projectId: i,
                    protocol: s,
                    publicKey: u
                } = e;
                return `${s}://${u}${t&&o?`:${o}`:""}@${n}${a?`:${a}`:""}/${r?`${r}/`:r}${i}`
            }
            n.d(t, {
                RA: function() {
                    return r
                }
            })
        },
        97957: function(e, t, n) {
            "use strict";

            function r(e, t = []) {
                return [e, t]
            }

            function o(e) {
                return [{
                    type: "span"
                }, e]
            }
            n.d(t, {
                Jd: function() {
                    return r
                },
                KQ: function() {
                    return o
                }
            })
        },
        79985: function(e, t, n) {
            "use strict";
            n.d(t, {
                HD: function() {
                    return a
                },
                J8: function() {
                    return s
                },
                PO: function() {
                    return i
                }
            });
            let r = Object.prototype.toString;

            function o(e, t) {
                return r.call(e) === `[object ${t}]`
            }

            function a(e) {
                return o(e, "String")
            }

            function i(e) {
                return o(e, "Object")
            }

            function s(e) {
                return !!(e ? .then && "function" == typeof e.then)
            }
        },
        74076: function(e, t, n) {
            "use strict";
            n.d(t, {
                Cf: function() {
                    return u
                },
                kg: function() {
                    return c
                }
            });
            var r = n(26418),
                o = n(49090),
                a = n(8557);
            let i = ["debug", "info", "warn", "error", "log", "assert", "trace"],
                s = {};

            function u(e) {
                if (!("console" in a.GLOBAL_OBJ)) return e();
                let t = a.GLOBAL_OBJ.console,
                    n = {},
                    r = Object.keys(s);
                r.forEach(e => {
                    let r = s[e];
                    n[e] = t[e], t[e] = r
                });
                try {
                    return e()
                } finally {
                    r.forEach(e => {
                        t[e] = n[e]
                    })
                }
            }
            let c = (0, r.YO)("logger", function() {
                let e = !1,
                    t = {
                        enable: () => {
                            e = !0
                        },
                        disable: () => {
                            e = !1
                        },
                        isEnabled: () => e
                    };
                return o.X ? i.forEach(n => {
                    t[n] = (...t) => {
                        e && u(() => {
                            a.GLOBAL_OBJ.console[n](`Sentry Logger [${n}]:`, ...t)
                        })
                    }
                }) : i.forEach(e => {
                    t[e] = () => void 0
                }), t
            })
        },
        67088: function(e, t, n) {
            "use strict";
            n.d(t, {
                DM: function() {
                    return o
                }
            });
            var r = n(8557);

            function o(e = function() {
                let e = r.GLOBAL_OBJ;
                return e.crypto || e.msCrypto
            }()) {
                let t = () => 16 * Math.random();
                try {
                    if (e ? .randomUUID) return e.randomUUID().replace(/-/g, "");
                    e ? .getRandomValues && (t = () => {
                        let t = new Uint8Array(1);
                        return e.getRandomValues(t), t[0]
                    })
                } catch (e) {}
                return "10000000100040008000100000000000".replace(/[018]/g, e => (e ^ (15 & t()) >> e / 4).toString(16))
            }
        },
        21370: function(e, t, n) {
            "use strict";
            n.d(t, {
                xp: function() {
                    return a
                }
            });
            var r = n(49090),
                o = n(74076);

            function a(e, t, n) {
                try {
                    Object.defineProperty(e, t, {
                        value: n,
                        writable: !0,
                        configurable: !0
                    })
                } catch (n) {
                    r.X && o.kg.log(`Failed to add non-enumerable property "${t}" to object`, e)
                }
            }
        },
        79683: function(e, t, n) {
            "use strict";

            function r(e, t = 0) {
                return "string" != typeof e || 0 === t ? e : e.length <= t ? e : `${e.slice(0,t)}...`
            }
            n.d(t, {
                $G: function() {
                    return r
                }
            })
        },
        37510: function(e, t, n) {
            "use strict";
            n.d(t, {
                ph: function() {
                    return a
                },
                yW: function() {
                    return o
                }
            });
            var r = n(8557);

            function o() {
                return Date.now() / 1e3
            }
            let a = function() {
                let {
                    performance: e
                } = r.GLOBAL_OBJ;
                if (!e ? .now) return o;
                let t = Date.now() - e.now(),
                    n = void 0 == e.timeOrigin ? t : e.timeOrigin;
                return () => (n + e.now()) / 1e3
            }()
        },
        58781: function(e, t, n) {
            "use strict";
            n.d(t, {
                $k: function() {
                    return d
                },
                Dp: function() {
                    return S
                },
                FF: function() {
                    return p
                },
                Gx: function() {
                    return E
                },
                HR: function() {
                    return f
                },
                R6: function() {
                    return w
                },
                Tt: function() {
                    return v
                },
                XU: function() {
                    return y
                },
                _4: function() {
                    return m
                },
                i0: function() {
                    return c
                },
                j5: function() {
                    return _
                },
                ve: function() {
                    return u
                }
            });
            var r = n(84731),
                o = n(88879),
                a = n(74076),
                i = n(21370),
                s = n(37510);
            let u = 0,
                c = 1,
                l = !1;

            function f(e) {
                let {
                    spanId: t,
                    traceId: n
                } = e.spanContext(), {
                    data: r,
                    op: o,
                    parent_span_id: a,
                    status: i,
                    origin: s,
                    links: u
                } = y(e);
                return {
                    parent_span_id: a,
                    span_id: t,
                    trace_id: n,
                    data: r,
                    op: o,
                    status: i,
                    origin: s,
                    links: u
                }
            }

            function p(e) {
                return e && e.length > 0 ? e.map(({
                    context: {
                        spanId: e,
                        traceId: t,
                        traceFlags: n,
                        ...r
                    },
                    attributes: o
                }) => ({
                    span_id: e,
                    trace_id: t,
                    sampled: n === c,
                    attributes: o,
                    ...r
                })) : void 0
            }

            function d(e) {
                return "number" == typeof e ? h(e) : Array.isArray(e) ? e[0] + e[1] / 1e9 : e instanceof Date ? h(e.getTime()) : (0, s.ph)()
            }

            function h(e) {
                return e > 9999999999 ? e / 1e3 : e
            }

            function y(e) {
                if ("function" == typeof e.getSpanJSON) return e.getSpanJSON();
                let {
                    spanId: t,
                    traceId: n
                } = e.spanContext();
                if (e.attributes && e.startTime && e.name && e.endTime && e.status) {
                    let {
                        attributes: o,
                        startTime: a,
                        name: i,
                        endTime: s,
                        parentSpanId: u,
                        status: c,
                        links: l
                    } = e;
                    return {
                        span_id: t,
                        trace_id: n,
                        data: o,
                        description: i,
                        parent_span_id: u,
                        start_timestamp: d(a),
                        timestamp: d(s) || void 0,
                        status: m(c),
                        op: o[r.$J],
                        origin: o[r.S3],
                        links: p(l)
                    }
                }
                return {
                    span_id: t,
                    trace_id: n,
                    start_timestamp: 0,
                    data: {}
                }
            }

            function v(e) {
                let {
                    traceFlags: t
                } = e.spanContext();
                return t === c
            }

            function m(e) {
                return e && e.code !== o.pq ? e.code === o.OP ? "ok" : e.message || "unknown_error" : void 0
            }
            let g = "_sentryChildSpans",
                b = "_sentryRootSpan";

            function _(e, t) {
                let n = e[b] || e;
                (0, i.xp)(t, b, n), e[g] ? e[g].add(t) : (0, i.xp)(e, g, new Set([t]))
            }

            function S(e) {
                let t = new Set;
                return ! function e(n) {
                    if (!t.has(n) && v(n))
                        for (let r of (t.add(n), n[g] ? Array.from(n[g]) : [])) e(r)
                }(e), Array.from(t)
            }

            function E(e) {
                return e[b] || e
            }

            function w() {
                l || ((0, a.Cf)(() => {
                    console.warn("[Sentry] Returning null from `beforeSendSpan` is disallowed. To drop certain spans, configure the respective integrations directly.")
                }), l = !0)
            }
        },
        60342: function(e, t, n) {
            "use strict";
            n.d(t, {
                Jj: function() {
                    return l
                },
                Y6: function() {
                    return c
                }
            });
            let r = Symbol("Comlink.proxy"),
                o = Symbol("Comlink.endpoint"),
                a = Symbol("Comlink.releaseProxy"),
                i = Symbol("Comlink.finalizer"),
                s = Symbol("Comlink.thrown"),
                u = e => "object" == typeof e && null !== e || "function" == typeof e,
                c = new Map([
                    ["proxy", {
                        canHandle: e => u(e) && e[r],
                        serialize(e) {
                            let {
                                port1: t,
                                port2: n
                            } = new MessageChannel;
                            return l(e, t), [n, [n]]
                        },
                        deserialize: e => (e.start(), function(e, t) {
                            let n = new Map;
                            return e.addEventListener("message", function(e) {
                                    let {
                                        data: t
                                    } = e;
                                    if (!t || !t.id) return;
                                    let r = n.get(t.id);
                                    if (r) try {
                                        r(t)
                                    } finally {
                                        n.delete(t.id)
                                    }
                                }),
                                function e(t, n, r = [], i = function() {}) {
                                    let s = !1,
                                        u = new Proxy(i, {
                                            get(o, i) {
                                                if (p(s), i === a) return () => {
                                                    y && y.unregister(u), d(t), n.clear(), s = !0
                                                };
                                                if ("then" === i) {
                                                    if (0 === r.length) return {
                                                        then: () => u
                                                    };
                                                    let e = _(t, n, {
                                                        type: "GET",
                                                        path: r.map(e => e.toString())
                                                    }).then(b);
                                                    return e.then.bind(e)
                                                }
                                                return e(t, n, [...r, i])
                                            },
                                            set(e, o, a) {
                                                p(s);
                                                let [i, u] = g(a);
                                                return _(t, n, {
                                                    type: "SET",
                                                    path: [...r, o].map(e => e.toString()),
                                                    value: i
                                                }, u).then(b)
                                            },
                                            apply(a, i, u) {
                                                p(s);
                                                let c = r[r.length - 1];
                                                if (c === o) return _(t, n, {
                                                    type: "ENDPOINT"
                                                }).then(b);
                                                if ("bind" === c) return e(t, n, r.slice(0, -1));
                                                let [l, f] = v(u);
                                                return _(t, n, {
                                                    type: "APPLY",
                                                    path: r.map(e => e.toString()),
                                                    argumentList: l
                                                }, f).then(b)
                                            },
                                            construct(e, o) {
                                                p(s);
                                                let [a, i] = v(o);
                                                return _(t, n, {
                                                    type: "CONSTRUCT",
                                                    path: r.map(e => e.toString()),
                                                    argumentList: a
                                                }, i).then(b)
                                            }
                                        });
                                    return function(e, t) {
                                        let n = (h.get(t) || 0) + 1;
                                        h.set(t, n), y && y.register(e, t, e)
                                    }(u, t), u
                                }(e, n, [], void 0)
                        }(e))
                    }],
                    ["throw", {
                        canHandle: e => u(e) && s in e,
                        serialize: ({
                            value: e
                        }) => [e instanceof Error ? {
                                isError: !0,
                                value: {
                                    message: e.message,
                                    name: e.name,
                                    stack: e.stack
                                }
                            } : {
                                isError: !1,
                                value: e
                            },
                            []
                        ],
                        deserialize(e) {
                            if (e.isError) throw Object.assign(Error(e.value.message), e.value);
                            throw e.value
                        }
                    }]
                ]);

            function l(e, t = globalThis, n = ["*"]) {
                t.addEventListener("message", function o(a) {
                    let u;
                    if (!a || !a.data) return;
                    if (! function(e, t) {
                            for (let n of e)
                                if (t === n || "*" === n || n instanceof RegExp && n.test(t)) return !0;
                            return !1
                        }(n, a.origin)) {
                        console.warn(`Invalid origin '${a.origin}' for comlink proxy`);
                        return
                    }
                    let {
                        id: c,
                        type: p,
                        path: d
                    } = Object.assign({
                        path: []
                    }, a.data), h = (a.data.argumentList || []).map(b);
                    try {
                        var y, v;
                        let t = d.slice(0, -1).reduce((e, t) => e[t], e),
                            n = d.reduce((e, t) => e[t], e);
                        switch (p) {
                            case "GET":
                                u = n;
                                break;
                            case "SET":
                                t[d.slice(-1)[0]] = b(a.data.value), u = !0;
                                break;
                            case "APPLY":
                                u = n.apply(t, h);
                                break;
                            case "CONSTRUCT":
                                y = new n(...h), u = Object.assign(y, {
                                    [r]: !0
                                });
                                break;
                            case "ENDPOINT":
                                {
                                    let {
                                        port1: t,
                                        port2: n
                                    } = new MessageChannel;l(e, n),
                                    v = [t],
                                    m.set(t, v),
                                    u = t
                                }
                                break;
                            case "RELEASE":
                                u = void 0;
                                break;
                            default:
                                return
                        }
                    } catch (e) {
                        u = {
                            value: e,
                            [s]: 0
                        }
                    }
                    Promise.resolve(u).catch(e => ({
                        value: e,
                        [s]: 0
                    })).then(n => {
                        let [r, a] = g(n);
                        t.postMessage(Object.assign(Object.assign({}, r), {
                            id: c
                        }), a), "RELEASE" === p && (t.removeEventListener("message", o), f(t), i in e && "function" == typeof e[i] && e[i]())
                    }).catch(e => {
                        let [n, r] = g({
                            value: TypeError("Unserializable return value"),
                            [s]: 0
                        });
                        t.postMessage(Object.assign(Object.assign({}, n), {
                            id: c
                        }), r)
                    })
                }), t.start && t.start()
            }

            function f(e) {
                "MessagePort" === e.constructor.name && e.close()
            }

            function p(e) {
                if (e) throw Error("Proxy has been released and is not useable")
            }

            function d(e) {
                return _(e, new Map, {
                    type: "RELEASE"
                }).then(() => {
                    f(e)
                })
            }
            let h = new WeakMap,
                y = "FinalizationRegistry" in globalThis && new FinalizationRegistry(e => {
                    let t = (h.get(e) || 0) - 1;
                    h.set(e, t), 0 === t && d(e)
                });

            function v(e) {
                var t;
                let n = e.map(g);
                return [n.map(e => e[0]), (t = n.map(e => e[1]), Array.prototype.concat.apply([], t))]
            }
            let m = new WeakMap;

            function g(e) {
                for (let [t, n] of c)
                    if (n.canHandle(e)) {
                        let [r, o] = n.serialize(e);
                        return [{
                            type: "HANDLER",
                            name: t,
                            value: r
                        }, o]
                    }
                return [{
                    type: "RAW",
                    value: e
                }, m.get(e) || []]
            }

            function b(e) {
                switch (e.type) {
                    case "HANDLER":
                        return c.get(e.name).deserialize(e.value);
                    case "RAW":
                        return e.value
                }
            }

            function _(e, t, n, r) {
                return new Promise(o => {
                    let a = [, , , , ].fill(0).map(() => Math.floor(Math.random() * Number.MAX_SAFE_INTEGER).toString(16)).join("-");
                    t.set(a, o), e.start && e.start(), e.postMessage(Object.assign({
                        id: a
                    }, n), r)
                })
            }
        }
    }
]);