(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.RTK = {}));
}(this, (function (exports) { 'use strict';

    var __extends = (undefined && undefined.__extends) || (function () {
        var extendStatics = function (d, b) {
            extendStatics = Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
            return extendStatics(d, b);
        };
        return function (d, b) {
            if (typeof b !== "function" && b !== null)
                throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
            extendStatics(d, b);
            function __() { this.constructor = d; }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    })();
    var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    };
    var __spreadArray = (undefined && undefined.__spreadArray) || function (to, from) {
        for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
            to[j] = from[i];
        return to;
    };
    var __defProp = Object.defineProperty;
    var __defProps = Object.defineProperties;
    var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
    var __getOwnPropSymbols = Object.getOwnPropertySymbols;
    var __hasOwnProp = Object.prototype.hasOwnProperty;
    var __propIsEnum = Object.prototype.propertyIsEnumerable;
    var __defNormalProp = function (obj, key, value) { return key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value: value }) : obj[key] = value; };
    var __spreadValues = function (a2, b2) {
        for (var prop in b2 || (b2 = {}))
            if (__hasOwnProp.call(b2, prop))
                __defNormalProp(a2, prop, b2[prop]);
        if (__getOwnPropSymbols)
            for (var _b = 0, _c = __getOwnPropSymbols(b2); _b < _c.length; _b++) {
                var prop = _c[_b];
                if (__propIsEnum.call(b2, prop))
                    __defNormalProp(a2, prop, b2[prop]);
            }
        return a2;
    };
    var __spreadProps = function (a2, b2) { return __defProps(a2, __getOwnPropDescs(b2)); };
    var __async = function (__this, __arguments, generator) {
        return new Promise(function (resolve, reject) {
            var fulfilled = function (value) {
                try {
                    step(generator.next(value));
                }
                catch (e2) {
                    reject(e2);
                }
            };
            var rejected = function (value) {
                try {
                    step(generator.throw(value));
                }
                catch (e2) {
                    reject(e2);
                }
            };
            var step = function (x2) { return x2.done ? resolve(x2.value) : Promise.resolve(x2.value).then(fulfilled, rejected); };
            step((generator = generator.apply(__this, __arguments)).next());
        });
    };
    // ../../node_modules/immer/dist/immer.esm.js
    function n(n2) {
        for (var r2 = arguments.length, t2 = Array(r2 > 1 ? r2 - 1 : 0), e2 = 1; e2 < r2; e2++)
            t2[e2 - 1] = arguments[e2];
        {
            var i2 = Y[n2], o2 = i2 ? typeof i2 == "function" ? i2.apply(null, t2) : i2 : "unknown error nr: " + n2;
            throw Error("[Immer] " + o2);
        }
    }
    function r(n2) {
        return !!n2 && !!n2[Q];
    }
    function t(n2) {
        return !!n2 && (function (n3) {
            if (!n3 || typeof n3 != "object")
                return false;
            var r2 = Object.getPrototypeOf(n3);
            if (r2 === null)
                return true;
            var t2 = Object.hasOwnProperty.call(r2, "constructor") && r2.constructor;
            return typeof t2 == "function" && Function.toString.call(t2) === Z;
        }(n2) || Array.isArray(n2) || !!n2[L] || !!n2.constructor[L] || s(n2) || v(n2));
    }
    function e(t2) {
        return r(t2) || n(23, t2), t2[Q].t;
    }
    function i(n2, r2, t2) {
        t2 === void 0 && (t2 = false), o(n2) === 0 ? (t2 ? Object.keys : nn)(n2).forEach(function (e2) {
            t2 && typeof e2 == "symbol" || r2(e2, n2[e2], n2);
        }) : n2.forEach(function (t3, e2) {
            return r2(e2, t3, n2);
        });
    }
    function o(n2) {
        var r2 = n2[Q];
        return r2 ? r2.i > 3 ? r2.i - 4 : r2.i : Array.isArray(n2) ? 1 : s(n2) ? 2 : v(n2) ? 3 : 0;
    }
    function u(n2, r2) {
        return o(n2) === 2 ? n2.has(r2) : Object.prototype.hasOwnProperty.call(n2, r2);
    }
    function a(n2, r2) {
        return o(n2) === 2 ? n2.get(r2) : n2[r2];
    }
    function f(n2, r2, t2) {
        var e2 = o(n2);
        e2 === 2 ? n2.set(r2, t2) : e2 === 3 ? (n2.delete(r2), n2.add(t2)) : n2[r2] = t2;
    }
    function c(n2, r2) {
        return n2 === r2 ? n2 !== 0 || 1 / n2 == 1 / r2 : n2 != n2 && r2 != r2;
    }
    function s(n2) {
        return X && n2 instanceof Map;
    }
    function v(n2) {
        return q && n2 instanceof Set;
    }
    function p(n2) {
        return n2.o || n2.t;
    }
    function l(n2) {
        if (Array.isArray(n2))
            return Array.prototype.slice.call(n2);
        var r2 = rn(n2);
        delete r2[Q];
        for (var t2 = nn(r2), e2 = 0; e2 < t2.length; e2++) {
            var i2 = t2[e2], o2 = r2[i2];
            o2.writable === false && (o2.writable = true, o2.configurable = true), (o2.get || o2.set) && (r2[i2] = { configurable: true, writable: true, enumerable: o2.enumerable, value: n2[i2] });
        }
        return Object.create(Object.getPrototypeOf(n2), r2);
    }
    function d(n2, e2) {
        return e2 === void 0 && (e2 = false), y(n2) || r(n2) || !t(n2) ? n2 : (o(n2) > 1 && (n2.set = n2.add = n2.clear = n2.delete = h), Object.freeze(n2), e2 && i(n2, function (n3, r2) {
            return d(r2, true);
        }, true), n2);
    }
    function h() {
        n(2);
    }
    function y(n2) {
        return n2 == null || typeof n2 != "object" || Object.isFrozen(n2);
    }
    function b(r2) {
        var t2 = tn[r2];
        return t2 || n(18, r2), t2;
    }
    function m(n2, r2) {
        tn[n2] || (tn[n2] = r2);
    }
    function _() {
        return U || n(0), U;
    }
    function j(n2, r2) {
        r2 && (b("Patches"), n2.u = [], n2.s = [], n2.v = r2);
    }
    function g(n2) {
        O(n2), n2.p.forEach(S), n2.p = null;
    }
    function O(n2) {
        n2 === U && (U = n2.l);
    }
    function w(n2) {
        return U = { p: [], l: U, h: n2, m: true, _: 0 };
    }
    function S(n2) {
        var r2 = n2[Q];
        r2.i === 0 || r2.i === 1 ? r2.j() : r2.g = true;
    }
    function P(r2, e2) {
        e2._ = e2.p.length;
        var i2 = e2.p[0], o2 = r2 !== void 0 && r2 !== i2;
        return e2.h.O || b("ES5").S(e2, r2, o2), o2 ? (i2[Q].P && (g(e2), n(4)), t(r2) && (r2 = M(e2, r2), e2.l || x(e2, r2)), e2.u && b("Patches").M(i2[Q], r2, e2.u, e2.s)) : r2 = M(e2, i2, []), g(e2), e2.u && e2.v(e2.u, e2.s), r2 !== H ? r2 : void 0;
    }
    function M(n2, r2, t2) {
        if (y(r2))
            return r2;
        var e2 = r2[Q];
        if (!e2)
            return i(r2, function (i2, o3) {
                return A(n2, e2, r2, i2, o3, t2);
            }, true), r2;
        if (e2.A !== n2)
            return r2;
        if (!e2.P)
            return x(n2, e2.t, true), e2.t;
        if (!e2.I) {
            e2.I = true, e2.A._--;
            var o2 = e2.i === 4 || e2.i === 5 ? e2.o = l(e2.k) : e2.o;
            i(e2.i === 3 ? new Set(o2) : o2, function (r3, i2) {
                return A(n2, e2, o2, r3, i2, t2);
            }), x(n2, o2, false), t2 && n2.u && b("Patches").R(e2, t2, n2.u, n2.s);
        }
        return e2.o;
    }
    function A(e2, i2, o2, a2, c2, s2) {
        if (c2 === o2 && n(5), r(c2)) {
            var v2 = M(e2, c2, s2 && i2 && i2.i !== 3 && !u(i2.D, a2) ? s2.concat(a2) : void 0);
            if (f(o2, a2, v2), !r(v2))
                return;
            e2.m = false;
        }
        if (t(c2) && !y(c2)) {
            if (!e2.h.F && e2._ < 1)
                return;
            M(e2, c2), i2 && i2.A.l || x(e2, c2);
        }
    }
    function x(n2, r2, t2) {
        t2 === void 0 && (t2 = false), n2.h.F && n2.m && d(r2, t2);
    }
    function z(n2, r2) {
        var t2 = n2[Q];
        return (t2 ? p(t2) : n2)[r2];
    }
    function I(n2, r2) {
        if (r2 in n2)
            for (var t2 = Object.getPrototypeOf(n2); t2;) {
                var e2 = Object.getOwnPropertyDescriptor(t2, r2);
                if (e2)
                    return e2;
                t2 = Object.getPrototypeOf(t2);
            }
    }
    function k(n2) {
        n2.P || (n2.P = true, n2.l && k(n2.l));
    }
    function E(n2) {
        n2.o || (n2.o = l(n2.t));
    }
    function R(n2, r2, t2) {
        var e2 = s(r2) ? b("MapSet").N(r2, t2) : v(r2) ? b("MapSet").T(r2, t2) : n2.O ? function (n3, r3) {
            var t3 = Array.isArray(n3), e3 = { i: t3 ? 1 : 0, A: r3 ? r3.A : _(), P: false, I: false, D: {}, l: r3, t: n3, k: null, o: null, j: null, C: false }, i2 = e3, o2 = en;
            t3 && (i2 = [e3], o2 = on);
            var u2 = Proxy.revocable(i2, o2), a2 = u2.revoke, f2 = u2.proxy;
            return e3.k = f2, e3.j = a2, f2;
        }(r2, t2) : b("ES5").J(r2, t2);
        return (t2 ? t2.A : _()).p.push(e2), e2;
    }
    function D(e2) {
        return r(e2) || n(22, e2), function n2(r2) {
            if (!t(r2))
                return r2;
            var e3, u2 = r2[Q], c2 = o(r2);
            if (u2) {
                if (!u2.P && (u2.i < 4 || !b("ES5").K(u2)))
                    return u2.t;
                u2.I = true, e3 = F(r2, c2), u2.I = false;
            }
            else
                e3 = F(r2, c2);
            return i(e3, function (r3, t2) {
                u2 && a(u2.t, r3) === t2 || f(e3, r3, n2(t2));
            }), c2 === 3 ? new Set(e3) : e3;
        }(e2);
    }
    function F(n2, r2) {
        switch (r2) {
            case 2:
                return new Map(n2);
            case 3:
                return Array.from(n2);
        }
        return l(n2);
    }
    function N() {
        function t2(n2, r2) {
            var t3 = s2[n2];
            return t3 ? t3.enumerable = r2 : s2[n2] = t3 = { configurable: true, enumerable: r2, get: function () {
                    var r3 = this[Q];
                    return f2(r3), en.get(r3, n2);
                }, set: function (r3) {
                    var t4 = this[Q];
                    f2(t4), en.set(t4, n2, r3);
                } }, t3;
        }
        function e2(n2) {
            for (var r2 = n2.length - 1; r2 >= 0; r2--) {
                var t3 = n2[r2][Q];
                if (!t3.P)
                    switch (t3.i) {
                        case 5:
                            a2(t3) && k(t3);
                            break;
                        case 4:
                            o2(t3) && k(t3);
                    }
            }
        }
        function o2(n2) {
            for (var r2 = n2.t, t3 = n2.k, e3 = nn(t3), i2 = e3.length - 1; i2 >= 0; i2--) {
                var o3 = e3[i2];
                if (o3 !== Q) {
                    var a3 = r2[o3];
                    if (a3 === void 0 && !u(r2, o3))
                        return true;
                    var f3 = t3[o3], s3 = f3 && f3[Q];
                    if (s3 ? s3.t !== a3 : !c(f3, a3))
                        return true;
                }
            }
            var v2 = !!r2[Q];
            return e3.length !== nn(r2).length + (v2 ? 0 : 1);
        }
        function a2(n2) {
            var r2 = n2.k;
            if (r2.length !== n2.t.length)
                return true;
            var t3 = Object.getOwnPropertyDescriptor(r2, r2.length - 1);
            return !(!t3 || t3.get);
        }
        function f2(r2) {
            r2.g && n(3, JSON.stringify(p(r2)));
        }
        var s2 = {};
        m("ES5", { J: function (n2, r2) {
                var e3 = Array.isArray(n2), i2 = function (n3, r3) {
                    if (n3) {
                        for (var e4 = Array(r3.length), i3 = 0; i3 < r3.length; i3++)
                            Object.defineProperty(e4, "" + i3, t2(i3, true));
                        return e4;
                    }
                    var o4 = rn(r3);
                    delete o4[Q];
                    for (var u2 = nn(o4), a3 = 0; a3 < u2.length; a3++) {
                        var f3 = u2[a3];
                        o4[f3] = t2(f3, n3 || !!o4[f3].enumerable);
                    }
                    return Object.create(Object.getPrototypeOf(r3), o4);
                }(e3, n2), o3 = { i: e3 ? 5 : 4, A: r2 ? r2.A : _(), P: false, I: false, D: {}, l: r2, t: n2, k: i2, o: null, g: false, C: false };
                return Object.defineProperty(i2, Q, { value: o3, writable: true }), i2;
            }, S: function (n2, t3, o3) {
                o3 ? r(t3) && t3[Q].A === n2 && e2(n2.p) : (n2.u && function n3(r2) {
                    if (r2 && typeof r2 == "object") {
                        var t4 = r2[Q];
                        if (t4) {
                            var e3 = t4.t, o4 = t4.k, f3 = t4.D, c2 = t4.i;
                            if (c2 === 4)
                                i(o4, function (r3) {
                                    r3 !== Q && (e3[r3] !== void 0 || u(e3, r3) ? f3[r3] || n3(o4[r3]) : (f3[r3] = true, k(t4)));
                                }), i(e3, function (n4) {
                                    o4[n4] !== void 0 || u(o4, n4) || (f3[n4] = false, k(t4));
                                });
                            else if (c2 === 5) {
                                if (a2(t4) && (k(t4), f3.length = true), o4.length < e3.length)
                                    for (var s3 = o4.length; s3 < e3.length; s3++)
                                        f3[s3] = false;
                                else
                                    for (var v2 = e3.length; v2 < o4.length; v2++)
                                        f3[v2] = true;
                                for (var p2 = Math.min(o4.length, e3.length), l2 = 0; l2 < p2; l2++)
                                    f3[l2] === void 0 && n3(o4[l2]);
                            }
                        }
                    }
                }(n2.p[0]), e2(n2.p));
            }, K: function (n2) {
                return n2.i === 4 ? o2(n2) : a2(n2);
            } });
    }
    var G;
    var U;
    var W = typeof Symbol != "undefined" && typeof Symbol("x") == "symbol";
    var X = typeof Map != "undefined";
    var q = typeof Set != "undefined";
    var B = typeof Proxy != "undefined" && Proxy.revocable !== void 0 && typeof Reflect != "undefined";
    var H = W ? Symbol.for("immer-nothing") : ((G = {})["immer-nothing"] = true, G);
    var L = W ? Symbol.for("immer-draftable") : "__$immer_draftable";
    var Q = W ? Symbol.for("immer-state") : "__$immer_state";
    var Y = { 0: "Illegal state", 1: "Immer drafts cannot have computed properties", 2: "This object has been frozen and should not be mutated", 3: function (n2) {
            return "Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? " + n2;
        }, 4: "An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.", 5: "Immer forbids circular references", 6: "The first or second argument to `produce` must be a function", 7: "The third argument to `produce` must be a function or undefined", 8: "First argument to `createDraft` must be a plain object, an array, or an immerable object", 9: "First argument to `finishDraft` must be a draft returned by `createDraft`", 10: "The given draft is already finalized", 11: "Object.defineProperty() cannot be used on an Immer draft", 12: "Object.setPrototypeOf() cannot be used on an Immer draft", 13: "Immer only supports deleting array indices", 14: "Immer only supports setting array indices and the 'length' property", 15: function (n2) {
            return "Cannot apply patch, path doesn't resolve: " + n2;
        }, 16: 'Sets cannot have "replace" patches.', 17: function (n2) {
            return "Unsupported patch operation: " + n2;
        }, 18: function (n2) {
            return "The plugin for '" + n2 + "' has not been loaded into Immer. To enable the plugin, import and call `enable" + n2 + "()` when initializing your application.";
        }, 20: "Cannot use proxies if Proxy, Proxy.revocable or Reflect are not available", 21: function (n2) {
            return "produce can only be called on things that are draftable: plain objects, arrays, Map, Set or classes that are marked with '[immerable]: true'. Got '" + n2 + "'";
        }, 22: function (n2) {
            return "'current' expects a draft, got: " + n2;
        }, 23: function (n2) {
            return "'original' expects a draft, got: " + n2;
        }, 24: "Patching reserved attributes like __proto__, prototype and constructor is not allowed" };
    var Z = "" + Object.prototype.constructor;
    var nn = typeof Reflect != "undefined" && Reflect.ownKeys ? Reflect.ownKeys : Object.getOwnPropertySymbols !== void 0 ? function (n2) {
        return Object.getOwnPropertyNames(n2).concat(Object.getOwnPropertySymbols(n2));
    } : Object.getOwnPropertyNames;
    var rn = Object.getOwnPropertyDescriptors || function (n2) {
        var r2 = {};
        return nn(n2).forEach(function (t2) {
            r2[t2] = Object.getOwnPropertyDescriptor(n2, t2);
        }), r2;
    };
    var tn = {};
    var en = { get: function (n2, r2) {
            if (r2 === Q)
                return n2;
            var e2 = p(n2);
            if (!u(e2, r2))
                return function (n3, r3, t2) {
                    var e3, i3 = I(r3, t2);
                    return i3 ? "value" in i3 ? i3.value : (e3 = i3.get) === null || e3 === void 0 ? void 0 : e3.call(n3.k) : void 0;
                }(n2, e2, r2);
            var i2 = e2[r2];
            return n2.I || !t(i2) ? i2 : i2 === z(n2.t, r2) ? (E(n2), n2.o[r2] = R(n2.A.h, i2, n2)) : i2;
        }, has: function (n2, r2) {
            return r2 in p(n2);
        }, ownKeys: function (n2) {
            return Reflect.ownKeys(p(n2));
        }, set: function (n2, r2, t2) {
            var e2 = I(p(n2), r2);
            if (e2 == null ? void 0 : e2.set)
                return e2.set.call(n2.k, t2), true;
            if (!n2.P) {
                var i2 = z(p(n2), r2), o2 = i2 == null ? void 0 : i2[Q];
                if (o2 && o2.t === t2)
                    return n2.o[r2] = t2, n2.D[r2] = false, true;
                if (c(t2, i2) && (t2 !== void 0 || u(n2.t, r2)))
                    return true;
                E(n2), k(n2);
            }
            return n2.o[r2] === t2 && typeof t2 != "number" || (n2.o[r2] = t2, n2.D[r2] = true, true);
        }, deleteProperty: function (n2, r2) {
            return z(n2.t, r2) !== void 0 || r2 in n2.t ? (n2.D[r2] = false, E(n2), k(n2)) : delete n2.D[r2], n2.o && delete n2.o[r2], true;
        }, getOwnPropertyDescriptor: function (n2, r2) {
            var t2 = p(n2), e2 = Reflect.getOwnPropertyDescriptor(t2, r2);
            return e2 ? { writable: true, configurable: n2.i !== 1 || r2 !== "length", enumerable: e2.enumerable, value: t2[r2] } : e2;
        }, defineProperty: function () {
            n(11);
        }, getPrototypeOf: function (n2) {
            return Object.getPrototypeOf(n2.t);
        }, setPrototypeOf: function () {
            n(12);
        } };
    var on = {};
    i(en, function (n2, r2) {
        on[n2] = function () {
            return arguments[0] = arguments[0][0], r2.apply(this, arguments);
        };
    }), on.deleteProperty = function (r2, t2) {
        return isNaN(parseInt(t2)) && n(13), en.deleteProperty.call(this, r2[0], t2);
    }, on.set = function (r2, t2, e2) {
        return t2 !== "length" && isNaN(parseInt(t2)) && n(14), en.set.call(this, r2[0], t2, e2, r2[0]);
    };
    var un = function () {
        function e2(r2) {
            var e3 = this;
            this.O = B, this.F = true, this.produce = function (r3, i3, o2) {
                if (typeof r3 == "function" && typeof i3 != "function") {
                    var u2 = i3;
                    i3 = r3;
                    var a2 = e3;
                    return function (n2) {
                        var r4 = this;
                        n2 === void 0 && (n2 = u2);
                        for (var t2 = arguments.length, e4 = Array(t2 > 1 ? t2 - 1 : 0), o3 = 1; o3 < t2; o3++)
                            e4[o3 - 1] = arguments[o3];
                        return a2.produce(n2, function (n3) {
                            var t3;
                            return (t3 = i3).call.apply(t3, [r4, n3].concat(e4));
                        });
                    };
                }
                var f2;
                if (typeof i3 != "function" && n(6), o2 !== void 0 && typeof o2 != "function" && n(7), t(r3)) {
                    var c2 = w(e3), s2 = R(e3, r3, void 0), v2 = true;
                    try {
                        f2 = i3(s2), v2 = false;
                    }
                    finally {
                        v2 ? g(c2) : O(c2);
                    }
                    return typeof Promise != "undefined" && f2 instanceof Promise ? f2.then(function (n2) {
                        return j(c2, o2), P(n2, c2);
                    }, function (n2) {
                        throw g(c2), n2;
                    }) : (j(c2, o2), P(f2, c2));
                }
                if (!r3 || typeof r3 != "object") {
                    if ((f2 = i3(r3)) === H)
                        return;
                    return f2 === void 0 && (f2 = r3), e3.F && d(f2, true), f2;
                }
                n(21, r3);
            }, this.produceWithPatches = function (n2, r3) {
                return typeof n2 == "function" ? function (r4) {
                    for (var t3 = arguments.length, i4 = Array(t3 > 1 ? t3 - 1 : 0), o2 = 1; o2 < t3; o2++)
                        i4[o2 - 1] = arguments[o2];
                    return e3.produceWithPatches(r4, function (r5) {
                        return n2.apply(void 0, [r5].concat(i4));
                    });
                } : [e3.produce(n2, r3, function (n3, r4) {
                        t2 = n3, i3 = r4;
                    }), t2, i3];
                var t2, i3;
            }, typeof (r2 == null ? void 0 : r2.useProxies) == "boolean" && this.setUseProxies(r2.useProxies), typeof (r2 == null ? void 0 : r2.autoFreeze) == "boolean" && this.setAutoFreeze(r2.autoFreeze);
        }
        var i2 = e2.prototype;
        return i2.createDraft = function (e3) {
            t(e3) || n(8), r(e3) && (e3 = D(e3));
            var i3 = w(this), o2 = R(this, e3, void 0);
            return o2[Q].C = true, O(i3), o2;
        }, i2.finishDraft = function (r2, t2) {
            var e3 = r2 && r2[Q];
            e3 && e3.C || n(9), e3.I && n(10);
            var i3 = e3.A;
            return j(i3, t2), P(void 0, i3);
        }, i2.setAutoFreeze = function (n2) {
            this.F = n2;
        }, i2.setUseProxies = function (r2) {
            r2 && !B && n(20), this.O = r2;
        }, i2.applyPatches = function (n2, t2) {
            var e3;
            for (e3 = t2.length - 1; e3 >= 0; e3--) {
                var i3 = t2[e3];
                if (i3.path.length === 0 && i3.op === "replace") {
                    n2 = i3.value;
                    break;
                }
            }
            var o2 = b("Patches").$;
            return r(n2) ? o2(n2, t2) : this.produce(n2, function (n3) {
                return o2(n3, t2.slice(e3 + 1));
            });
        }, e2;
    }();
    var an = new un();
    var fn = an.produce;
    an.produceWithPatches.bind(an);
    an.setAutoFreeze.bind(an);
    an.setUseProxies.bind(an);
    an.applyPatches.bind(an);
    an.createDraft.bind(an);
    an.finishDraft.bind(an);
    var immer_esm_default = fn;
    // ../../node_modules/@babel/runtime/helpers/esm/defineProperty.js
    function _defineProperty(obj, key, value) {
        if (key in obj) {
            Object.defineProperty(obj, key, {
                value: value,
                enumerable: true,
                configurable: true,
                writable: true
            });
        }
        else {
            obj[key] = value;
        }
        return obj;
    }
    // ../../node_modules/@babel/runtime/helpers/esm/objectSpread2.js
    function ownKeys(object, enumerableOnly) {
        var keys = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
            var symbols = Object.getOwnPropertySymbols(object);
            if (enumerableOnly) {
                symbols = symbols.filter(function (sym) {
                    return Object.getOwnPropertyDescriptor(object, sym).enumerable;
                });
            }
            keys.push.apply(keys, symbols);
        }
        return keys;
    }
    function _objectSpread2(target) {
        for (var i2 = 1; i2 < arguments.length; i2++) {
            var source = arguments[i2] != null ? arguments[i2] : {};
            if (i2 % 2) {
                ownKeys(Object(source), true).forEach(function (key) {
                    _defineProperty(target, key, source[key]);
                });
            }
            else if (Object.getOwnPropertyDescriptors) {
                Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
            }
            else {
                ownKeys(Object(source)).forEach(function (key) {
                    Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
                });
            }
        }
        return target;
    }
    // ../../node_modules/redux/es/redux.js
    var $$observable = function () {
        return typeof Symbol === "function" && Symbol.observable || "@@observable";
    }();
    var randomString = function randomString2() {
        return Math.random().toString(36).substring(7).split("").join(".");
    };
    var ActionTypes = {
        INIT: "@@redux/INIT" + randomString(),
        REPLACE: "@@redux/REPLACE" + randomString(),
        PROBE_UNKNOWN_ACTION: function PROBE_UNKNOWN_ACTION() {
            return "@@redux/PROBE_UNKNOWN_ACTION" + randomString();
        }
    };
    function isPlainObject(obj) {
        if (typeof obj !== "object" || obj === null)
            return false;
        var proto = obj;
        while (Object.getPrototypeOf(proto) !== null) {
            proto = Object.getPrototypeOf(proto);
        }
        return Object.getPrototypeOf(obj) === proto;
    }
    function kindOf(val) {
        var typeOfVal = typeof val;
        {
            var miniKindOf = function (val2) {
                if (val2 === void 0)
                    return "undefined";
                if (val2 === null)
                    return "null";
                var type = typeof val2;
                switch (type) {
                    case "boolean":
                    case "string":
                    case "number":
                    case "symbol":
                    case "function": {
                        return type;
                    }
                }
                if (Array.isArray(val2))
                    return "array";
                if (isDate_1(val2))
                    return "date";
                if (isError_1(val2))
                    return "error";
                var constructorName = ctorName_1(val2);
                switch (constructorName) {
                    case "Symbol":
                    case "Promise":
                    case "WeakMap":
                    case "WeakSet":
                    case "Map":
                    case "Set":
                        return constructorName;
                }
                return type.slice(8, -1).toLowerCase().replace(/\s/g, "");
            }, ctorName_1 = function (val2) {
                return typeof val2.constructor === "function" ? val2.constructor.name : null;
            }, isError_1 = function (val2) {
                return val2 instanceof Error || typeof val2.message === "string" && val2.constructor && typeof val2.constructor.stackTraceLimit === "number";
            }, isDate_1 = function (val2) {
                if (val2 instanceof Date)
                    return true;
                return typeof val2.toDateString === "function" && typeof val2.getDate === "function" && typeof val2.setDate === "function";
            };
            typeOfVal = miniKindOf(val);
        }
        return typeOfVal;
    }
    function createStore(reducer, preloadedState, enhancer) {
        var _ref2;
        if (typeof preloadedState === "function" && typeof enhancer === "function" || typeof enhancer === "function" && typeof arguments[3] === "function") {
            throw new Error("It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function. See https://redux.js.org/tutorials/fundamentals/part-4-store#creating-a-store-with-enhancers for an example.");
        }
        if (typeof preloadedState === "function" && typeof enhancer === "undefined") {
            enhancer = preloadedState;
            preloadedState = void 0;
        }
        if (typeof enhancer !== "undefined") {
            if (typeof enhancer !== "function") {
                throw new Error("Expected the enhancer to be a function. Instead, received: '" + kindOf(enhancer) + "'");
            }
            return enhancer(createStore)(reducer, preloadedState);
        }
        if (typeof reducer !== "function") {
            throw new Error("Expected the root reducer to be a function. Instead, received: '" + kindOf(reducer) + "'");
        }
        var currentReducer = reducer;
        var currentState = preloadedState;
        var currentListeners = [];
        var nextListeners = currentListeners;
        var isDispatching = false;
        function ensureCanMutateNextListeners() {
            if (nextListeners === currentListeners) {
                nextListeners = currentListeners.slice();
            }
        }
        function getState() {
            if (isDispatching) {
                throw new Error("You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");
            }
            return currentState;
        }
        function subscribe(listener) {
            if (typeof listener !== "function") {
                throw new Error("Expected the listener to be a function. Instead, received: '" + kindOf(listener) + "'");
            }
            if (isDispatching) {
                throw new Error("You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api/store#subscribelistener for more details.");
            }
            var isSubscribed = true;
            ensureCanMutateNextListeners();
            nextListeners.push(listener);
            return function unsubscribe() {
                if (!isSubscribed) {
                    return;
                }
                if (isDispatching) {
                    throw new Error("You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api/store#subscribelistener for more details.");
                }
                isSubscribed = false;
                ensureCanMutateNextListeners();
                var index = nextListeners.indexOf(listener);
                nextListeners.splice(index, 1);
                currentListeners = null;
            };
        }
        function dispatch(action) {
            if (!isPlainObject(action)) {
                throw new Error("Actions must be plain objects. Instead, the actual type was: '" + kindOf(action) + "'. You may need to add middleware to your store setup to handle dispatching other values, such as 'redux-thunk' to handle dispatching functions. See https://redux.js.org/tutorials/fundamentals/part-4-store#middleware and https://redux.js.org/tutorials/fundamentals/part-6-async-logic#using-the-redux-thunk-middleware for examples.");
            }
            if (typeof action.type === "undefined") {
                throw new Error('Actions may not have an undefined "type" property. You may have misspelled an action type string constant.');
            }
            if (isDispatching) {
                throw new Error("Reducers may not dispatch actions.");
            }
            try {
                isDispatching = true;
                currentState = currentReducer(currentState, action);
            }
            finally {
                isDispatching = false;
            }
            var listeners = currentListeners = nextListeners;
            for (var i2 = 0; i2 < listeners.length; i2++) {
                var listener = listeners[i2];
                listener();
            }
            return action;
        }
        function replaceReducer(nextReducer) {
            if (typeof nextReducer !== "function") {
                throw new Error("Expected the nextReducer to be a function. Instead, received: '" + kindOf(nextReducer));
            }
            currentReducer = nextReducer;
            dispatch({
                type: ActionTypes.REPLACE
            });
        }
        function observable() {
            var _ref;
            var outerSubscribe = subscribe;
            return _ref = {
                subscribe: function subscribe2(observer) {
                    if (typeof observer !== "object" || observer === null) {
                        throw new Error("Expected the observer to be an object. Instead, received: '" + kindOf(observer) + "'");
                    }
                    function observeState() {
                        if (observer.next) {
                            observer.next(getState());
                        }
                    }
                    observeState();
                    var unsubscribe = outerSubscribe(observeState);
                    return {
                        unsubscribe: unsubscribe
                    };
                }
            }, _ref[$$observable] = function () {
                return this;
            }, _ref;
        }
        dispatch({
            type: ActionTypes.INIT
        });
        return _ref2 = {
            dispatch: dispatch,
            subscribe: subscribe,
            getState: getState,
            replaceReducer: replaceReducer
        }, _ref2[$$observable] = observable, _ref2;
    }
    function warning(message) {
        if (typeof console !== "undefined" && typeof console.error === "function") {
            console.error(message);
        }
        try {
            throw new Error(message);
        }
        catch (e2) {
        }
    }
    function getUnexpectedStateShapeWarningMessage(inputState, reducers, action, unexpectedKeyCache) {
        var reducerKeys = Object.keys(reducers);
        var argumentName = action && action.type === ActionTypes.INIT ? "preloadedState argument passed to createStore" : "previous state received by the reducer";
        if (reducerKeys.length === 0) {
            return "Store does not have a valid reducer. Make sure the argument passed to combineReducers is an object whose values are reducers.";
        }
        if (!isPlainObject(inputState)) {
            return "The " + argumentName + ' has unexpected type of "' + kindOf(inputState) + '". Expected argument to be an object with the following ' + ('keys: "' + reducerKeys.join('", "') + '"');
        }
        var unexpectedKeys = Object.keys(inputState).filter(function (key) {
            return !reducers.hasOwnProperty(key) && !unexpectedKeyCache[key];
        });
        unexpectedKeys.forEach(function (key) {
            unexpectedKeyCache[key] = true;
        });
        if (action && action.type === ActionTypes.REPLACE)
            return;
        if (unexpectedKeys.length > 0) {
            return "Unexpected " + (unexpectedKeys.length > 1 ? "keys" : "key") + " " + ('"' + unexpectedKeys.join('", "') + '" found in ' + argumentName + ". ") + "Expected to find one of the known reducer keys instead: " + ('"' + reducerKeys.join('", "') + '". Unexpected keys will be ignored.');
        }
    }
    function assertReducerShape(reducers) {
        Object.keys(reducers).forEach(function (key) {
            var reducer = reducers[key];
            var initialState = reducer(void 0, {
                type: ActionTypes.INIT
            });
            if (typeof initialState === "undefined") {
                throw new Error('The slice reducer for key "' + key + "\" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.");
            }
            if (typeof reducer(void 0, {
                type: ActionTypes.PROBE_UNKNOWN_ACTION()
            }) === "undefined") {
                throw new Error('The slice reducer for key "' + key + '" returned undefined when probed with a random type. ' + ("Don't try to handle '" + ActionTypes.INIT + "' or other actions in \"redux/*\" ") + "namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.");
            }
        });
    }
    function combineReducers(reducers) {
        var reducerKeys = Object.keys(reducers);
        var finalReducers = {};
        for (var i2 = 0; i2 < reducerKeys.length; i2++) {
            var key = reducerKeys[i2];
            {
                if (typeof reducers[key] === "undefined") {
                    warning('No reducer provided for key "' + key + '"');
                }
            }
            if (typeof reducers[key] === "function") {
                finalReducers[key] = reducers[key];
            }
        }
        var finalReducerKeys = Object.keys(finalReducers);
        var unexpectedKeyCache;
        {
            unexpectedKeyCache = {};
        }
        var shapeAssertionError;
        try {
            assertReducerShape(finalReducers);
        }
        catch (e2) {
            shapeAssertionError = e2;
        }
        return function combination(state, action) {
            if (state === void 0) {
                state = {};
            }
            if (shapeAssertionError) {
                throw shapeAssertionError;
            }
            {
                var warningMessage = getUnexpectedStateShapeWarningMessage(state, finalReducers, action, unexpectedKeyCache);
                if (warningMessage) {
                    warning(warningMessage);
                }
            }
            var hasChanged = false;
            var nextState = {};
            for (var _i = 0; _i < finalReducerKeys.length; _i++) {
                var _key = finalReducerKeys[_i];
                var reducer = finalReducers[_key];
                var previousStateForKey = state[_key];
                var nextStateForKey = reducer(previousStateForKey, action);
                if (typeof nextStateForKey === "undefined") {
                    var actionType = action && action.type;
                    throw new Error("When called with an action of type " + (actionType ? '"' + String(actionType) + '"' : "(unknown type)") + ', the slice reducer for key "' + _key + '" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.');
                }
                nextState[_key] = nextStateForKey;
                hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
            }
            hasChanged = hasChanged || finalReducerKeys.length !== Object.keys(state).length;
            return hasChanged ? nextState : state;
        };
    }
    function bindActionCreator(actionCreator, dispatch) {
        return function () {
            return dispatch(actionCreator.apply(this, arguments));
        };
    }
    function bindActionCreators(actionCreators, dispatch) {
        if (typeof actionCreators === "function") {
            return bindActionCreator(actionCreators, dispatch);
        }
        if (typeof actionCreators !== "object" || actionCreators === null) {
            throw new Error("bindActionCreators expected an object or a function, but instead received: '" + kindOf(actionCreators) + "'. Did you write \"import ActionCreators from\" instead of \"import * as ActionCreators from\"?");
        }
        var boundActionCreators = {};
        for (var key in actionCreators) {
            var actionCreator = actionCreators[key];
            if (typeof actionCreator === "function") {
                boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
            }
        }
        return boundActionCreators;
    }
    function compose() {
        for (var _len = arguments.length, funcs = new Array(_len), _key = 0; _key < _len; _key++) {
            funcs[_key] = arguments[_key];
        }
        if (funcs.length === 0) {
            return function (arg) {
                return arg;
            };
        }
        if (funcs.length === 1) {
            return funcs[0];
        }
        return funcs.reduce(function (a2, b2) {
            return function () {
                return a2(b2.apply(void 0, arguments));
            };
        });
    }
    function applyMiddleware() {
        for (var _len = arguments.length, middlewares = new Array(_len), _key = 0; _key < _len; _key++) {
            middlewares[_key] = arguments[_key];
        }
        return function (createStore2) {
            return function () {
                var store = createStore2.apply(void 0, arguments);
                var _dispatch = function dispatch() {
                    throw new Error("Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch.");
                };
                var middlewareAPI = {
                    getState: store.getState,
                    dispatch: function dispatch() {
                        return _dispatch.apply(void 0, arguments);
                    }
                };
                var chain = middlewares.map(function (middleware) {
                    return middleware(middlewareAPI);
                });
                _dispatch = compose.apply(void 0, chain)(store.dispatch);
                return _objectSpread2(_objectSpread2({}, store), {}, {
                    dispatch: _dispatch
                });
            };
        };
    }
    function isCrushed() {
    }
    if (typeof isCrushed.name === "string" && isCrushed.name !== "isCrushed") {
        warning('You are currently using minified code outside of NODE_ENV === "production". This means that you are running a slower development build of Redux. You can use loose-envify (https://github.com/zertosh/loose-envify) for browserify or setting mode to production in webpack (https://webpack.js.org/concepts/mode/) to ensure you have the correct code for your production build.');
    }
    // ../../node_modules/reselect/es/index.js
    function defaultEqualityCheck(a2, b2) {
        return a2 === b2;
    }
    function areArgumentsShallowlyEqual(equalityCheck, prev, next) {
        if (prev === null || next === null || prev.length !== next.length) {
            return false;
        }
        var length = prev.length;
        for (var i2 = 0; i2 < length; i2++) {
            if (!equalityCheck(prev[i2], next[i2])) {
                return false;
            }
        }
        return true;
    }
    function defaultMemoize(func) {
        var equalityCheck = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : defaultEqualityCheck;
        var lastArgs = null;
        var lastResult = null;
        return function () {
            if (!areArgumentsShallowlyEqual(equalityCheck, lastArgs, arguments)) {
                lastResult = func.apply(null, arguments);
            }
            lastArgs = arguments;
            return lastResult;
        };
    }
    function getDependencies(funcs) {
        var dependencies = Array.isArray(funcs[0]) ? funcs[0] : funcs;
        if (!dependencies.every(function (dep) {
            return typeof dep === "function";
        })) {
            var dependencyTypes = dependencies.map(function (dep) {
                return typeof dep;
            }).join(", ");
            throw new Error("Selector creators expect all input-selectors to be functions, " + ("instead received the following types: [" + dependencyTypes + "]"));
        }
        return dependencies;
    }
    function createSelectorCreator(memoize) {
        for (var _len = arguments.length, memoizeOptions = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            memoizeOptions[_key - 1] = arguments[_key];
        }
        return function () {
            for (var _len2 = arguments.length, funcs = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                funcs[_key2] = arguments[_key2];
            }
            var recomputations = 0;
            var resultFunc = funcs.pop();
            var dependencies = getDependencies(funcs);
            var memoizedResultFunc = memoize.apply(void 0, [function () {
                    recomputations++;
                    return resultFunc.apply(null, arguments);
                }].concat(memoizeOptions));
            var selector = memoize(function () {
                var params = [];
                var length = dependencies.length;
                for (var i2 = 0; i2 < length; i2++) {
                    params.push(dependencies[i2].apply(null, arguments));
                }
                return memoizedResultFunc.apply(null, params);
            });
            selector.resultFunc = resultFunc;
            selector.dependencies = dependencies;
            selector.recomputations = function () {
                return recomputations;
            };
            selector.resetRecomputations = function () {
                return recomputations = 0;
            };
            return selector;
        };
    }
    var createSelector = createSelectorCreator(defaultMemoize);
    // src/createDraftSafeSelector.ts
    var createDraftSafeSelector = function () {
        var args = [];
        for (var _b = 0; _b < arguments.length; _b++) {
            args[_b] = arguments[_b];
        }
        var selector = createSelector.apply(void 0, args);
        var wrappedSelector = function (value) {
            var rest = [];
            for (var _b = 1; _b < arguments.length; _b++) {
                rest[_b - 1] = arguments[_b];
            }
            return selector.apply(void 0, __spreadArray([r(value) ? D(value) : value], rest));
        };
        return wrappedSelector;
    };
    // src/devtoolsExtension.ts
    var composeWithDevTools = typeof window !== "undefined" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : function () {
        if (arguments.length === 0)
            return void 0;
        if (typeof arguments[0] === "object")
            return compose;
        return compose.apply(null, arguments);
    };
    // src/isPlainObject.ts
    function isPlainObject2(value) {
        if (typeof value !== "object" || value === null)
            return false;
        var proto = value;
        while (Object.getPrototypeOf(proto) !== null) {
            proto = Object.getPrototypeOf(proto);
        }
        return Object.getPrototypeOf(value) === proto;
    }
    // ../../node_modules/redux-thunk/es/index.js
    function createThunkMiddleware(extraArgument) {
        return function (_ref) {
            var dispatch = _ref.dispatch, getState = _ref.getState;
            return function (next) {
                return function (action) {
                    if (typeof action === "function") {
                        return action(dispatch, getState, extraArgument);
                    }
                    return next(action);
                };
            };
        };
    }
    var thunk = createThunkMiddleware();
    thunk.withExtraArgument = createThunkMiddleware;
    var es_default = thunk;
    // src/utils.ts
    function getTimeMeasureUtils(maxDelay, fnName) {
        var elapsed = 0;
        return {
            measureTime: function (fn2) {
                var started = Date.now();
                try {
                    return fn2();
                }
                finally {
                    var finished = Date.now();
                    elapsed += finished - started;
                }
            },
            warnIfExceeded: function () {
                if (elapsed > maxDelay) {
                    console.warn(fnName + " took " + elapsed + "ms, which is more than the warning threshold of " + maxDelay + "ms. \nIf your state or actions are very large, you may want to disable the middleware as it might cause too much of a slowdown in development mode. See https://redux-toolkit.js.org/api/getDefaultMiddleware for instructions.\nIt is disabled in production builds, so you don't need to worry about that.");
                }
            }
        };
    }
    var MiddlewareArray = /** @class */ (function (_super) {
        __extends(MiddlewareArray, _super);
        function MiddlewareArray() {
            var args = [];
            for (var _b = 0; _b < arguments.length; _b++) {
                args[_b] = arguments[_b];
            }
            var _this = _super.apply(this, args) || this;
            Object.setPrototypeOf(_this, MiddlewareArray.prototype);
            return _this;
        }
        Object.defineProperty(MiddlewareArray, Symbol.species, {
            get: function () {
                return MiddlewareArray;
            },
            enumerable: false,
            configurable: true
        });
        MiddlewareArray.prototype.concat = function () {
            var arr = [];
            for (var _b = 0; _b < arguments.length; _b++) {
                arr[_b] = arguments[_b];
            }
            return _super.prototype.concat.apply(this, arr);
        };
        MiddlewareArray.prototype.prepend = function () {
            var arr = [];
            for (var _b = 0; _b < arguments.length; _b++) {
                arr[_b] = arguments[_b];
            }
            if (arr.length === 1 && Array.isArray(arr[0])) {
                return new (MiddlewareArray.bind.apply(MiddlewareArray, __spreadArray([void 0], arr[0].concat(this))))();
            }
            return new (MiddlewareArray.bind.apply(MiddlewareArray, __spreadArray([void 0], arr.concat(this))))();
        };
        return MiddlewareArray;
    }(Array));
    var prefix = "Invariant failed";
    function invariant(condition, message) {
        if (condition) {
            return;
        }
        throw new Error(prefix + ": " + (message || ""));
    }
    function stringify(obj, serializer, indent, decycler) {
        return JSON.stringify(obj, getSerialize(serializer, decycler), indent);
    }
    function getSerialize(serializer, decycler) {
        var stack = [], keys = [];
        if (!decycler)
            decycler = function (_2, value) {
                if (stack[0] === value)
                    return "[Circular ~]";
                return "[Circular ~." + keys.slice(0, stack.indexOf(value)).join(".") + "]";
            };
        return function (key, value) {
            if (stack.length > 0) {
                var thisPos = stack.indexOf(this);
                ~thisPos ? stack.splice(thisPos + 1) : stack.push(this);
                ~thisPos ? keys.splice(thisPos, Infinity, key) : keys.push(key);
                if (~stack.indexOf(value))
                    value = decycler.call(this, key, value);
            }
            else
                stack.push(value);
            return serializer == null ? value : serializer.call(this, key, value);
        };
    }
    function isImmutableDefault(value) {
        return typeof value !== "object" || value === null || typeof value === "undefined" || Object.isFrozen(value);
    }
    function trackForMutations(isImmutable, ignorePaths, obj) {
        var trackedProperties = trackProperties(isImmutable, ignorePaths, obj);
        return {
            detectMutations: function () {
                return detectMutations(isImmutable, ignorePaths, trackedProperties, obj);
            }
        };
    }
    function trackProperties(isImmutable, ignorePaths, obj, path) {
        if (ignorePaths === void 0) { ignorePaths = []; }
        if (path === void 0) { path = ""; }
        var tracked = { value: obj };
        if (!isImmutable(obj)) {
            tracked.children = {};
            for (var key in obj) {
                var childPath = path ? path + "." + key : key;
                if (ignorePaths.length && ignorePaths.indexOf(childPath) !== -1) {
                    continue;
                }
                tracked.children[key] = trackProperties(isImmutable, ignorePaths, obj[key], childPath);
            }
        }
        return tracked;
    }
    function detectMutations(isImmutable, ignorePaths, trackedProperty, obj, sameParentRef, path) {
        if (ignorePaths === void 0) { ignorePaths = []; }
        if (sameParentRef === void 0) { sameParentRef = false; }
        if (path === void 0) { path = ""; }
        var prevObj = trackedProperty ? trackedProperty.value : void 0;
        var sameRef = prevObj === obj;
        if (sameParentRef && !sameRef && !Number.isNaN(obj)) {
            return { wasMutated: true, path: path };
        }
        if (isImmutable(prevObj) || isImmutable(obj)) {
            return { wasMutated: false };
        }
        var keysToDetect = {};
        for (var key in trackedProperty.children) {
            keysToDetect[key] = true;
        }
        for (var key in obj) {
            keysToDetect[key] = true;
        }
        for (var key in keysToDetect) {
            var childPath = path ? path + "." + key : key;
            if (ignorePaths.length && ignorePaths.indexOf(childPath) !== -1) {
                continue;
            }
            var result = detectMutations(isImmutable, ignorePaths, trackedProperty.children[key], obj[key], sameRef, childPath);
            if (result.wasMutated) {
                return result;
            }
        }
        return { wasMutated: false };
    }
    function createImmutableStateInvariantMiddleware(options) {
        if (options === void 0) { options = {}; }
        var _b = options.isImmutable, isImmutable = _b === void 0 ? isImmutableDefault : _b, ignoredPaths = options.ignoredPaths, _c = options.warnAfter, warnAfter = _c === void 0 ? 32 : _c, ignore = options.ignore;
        ignoredPaths = ignoredPaths || ignore;
        var track = trackForMutations.bind(null, isImmutable, ignoredPaths);
        return function (_b) {
            var getState = _b.getState;
            var state = getState();
            var tracker = track(state);
            var result;
            return function (next) { return function (action) {
                var measureUtils = getTimeMeasureUtils(warnAfter, "ImmutableStateInvariantMiddleware");
                measureUtils.measureTime(function () {
                    state = getState();
                    result = tracker.detectMutations();
                    tracker = track(state);
                    invariant(!result.wasMutated, "A state mutation was detected between dispatches, in the path '" + (result.path || "") + "'.  This may cause incorrect behavior. (https://redux.js.org/style-guide/style-guide#do-not-mutate-state)");
                });
                var dispatchedAction = next(action);
                measureUtils.measureTime(function () {
                    state = getState();
                    result = tracker.detectMutations();
                    tracker = track(state);
                    result.wasMutated && invariant(!result.wasMutated, "A state mutation was detected inside a dispatch, in the path: " + (result.path || "") + ". Take a look at the reducer(s) handling the action " + stringify(action) + ". (https://redux.js.org/style-guide/style-guide#do-not-mutate-state)");
                });
                measureUtils.warnIfExceeded();
                return dispatchedAction;
            }; };
        };
    }
    // src/serializableStateInvariantMiddleware.ts
    function isPlain(val) {
        var type = typeof val;
        return type === "undefined" || val === null || type === "string" || type === "boolean" || type === "number" || Array.isArray(val) || isPlainObject2(val);
    }
    function findNonSerializableValue(value, path, isSerializable, getEntries, ignoredPaths) {
        if (path === void 0) { path = ""; }
        if (isSerializable === void 0) { isSerializable = isPlain; }
        if (ignoredPaths === void 0) { ignoredPaths = []; }
        var foundNestedSerializable;
        if (!isSerializable(value)) {
            return {
                keyPath: path || "<root>",
                value: value
            };
        }
        if (typeof value !== "object" || value === null) {
            return false;
        }
        var entries = getEntries != null ? getEntries(value) : Object.entries(value);
        var hasIgnoredPaths = ignoredPaths.length > 0;
        for (var _b = 0, entries_1 = entries; _b < entries_1.length; _b++) {
            var _c = entries_1[_b], key = _c[0], nestedValue = _c[1];
            var nestedPath = path ? path + "." + key : key;
            if (hasIgnoredPaths && ignoredPaths.indexOf(nestedPath) >= 0) {
                continue;
            }
            if (!isSerializable(nestedValue)) {
                return {
                    keyPath: nestedPath,
                    value: nestedValue
                };
            }
            if (typeof nestedValue === "object") {
                foundNestedSerializable = findNonSerializableValue(nestedValue, nestedPath, isSerializable, getEntries, ignoredPaths);
                if (foundNestedSerializable) {
                    return foundNestedSerializable;
                }
            }
        }
        return false;
    }
    function createSerializableStateInvariantMiddleware(options) {
        if (options === void 0) { options = {}; }
        var _b = options.isSerializable, isSerializable = _b === void 0 ? isPlain : _b, getEntries = options.getEntries, _c = options.ignoredActions, ignoredActions = _c === void 0 ? [] : _c, _d = options.ignoredActionPaths, ignoredActionPaths = _d === void 0 ? ["meta.arg", "meta.baseQueryMeta"] : _d, _e = options.ignoredPaths, ignoredPaths = _e === void 0 ? [] : _e, _f = options.warnAfter, warnAfter = _f === void 0 ? 32 : _f, _g = options.ignoreState, ignoreState = _g === void 0 ? false : _g;
        return function (storeAPI) { return function (next) { return function (action) {
            if (ignoredActions.length && ignoredActions.indexOf(action.type) !== -1) {
                return next(action);
            }
            var measureUtils = getTimeMeasureUtils(warnAfter, "SerializableStateInvariantMiddleware");
            measureUtils.measureTime(function () {
                var foundActionNonSerializableValue = findNonSerializableValue(action, "", isSerializable, getEntries, ignoredActionPaths);
                if (foundActionNonSerializableValue) {
                    var keyPath = foundActionNonSerializableValue.keyPath, value = foundActionNonSerializableValue.value;
                    console.error("A non-serializable value was detected in an action, in the path: `" + keyPath + "`. Value:", value, "\nTake a look at the logic that dispatched this action: ", action, "\n(See https://redux.js.org/faq/actions#why-should-type-be-a-string-or-at-least-serializable-why-should-my-action-types-be-constants)", "\n(To allow non-serializable values see: https://redux-toolkit.js.org/usage/usage-guide#working-with-non-serializable-data)");
                }
            });
            var result = next(action);
            if (!ignoreState) {
                measureUtils.measureTime(function () {
                    var state = storeAPI.getState();
                    var foundStateNonSerializableValue = findNonSerializableValue(state, "", isSerializable, getEntries, ignoredPaths);
                    if (foundStateNonSerializableValue) {
                        var keyPath = foundStateNonSerializableValue.keyPath, value = foundStateNonSerializableValue.value;
                        console.error("A non-serializable value was detected in the state, in the path: `" + keyPath + "`. Value:", value, "\nTake a look at the reducer(s) handling this action type: " + action.type + ".\n(See https://redux.js.org/faq/organizing-state#can-i-put-functions-promises-or-other-non-serializable-items-in-my-store-state)");
                    }
                });
                measureUtils.warnIfExceeded();
            }
            return result;
        }; }; };
    }
    // src/getDefaultMiddleware.ts
    function isBoolean(x2) {
        return typeof x2 === "boolean";
    }
    function curryGetDefaultMiddleware() {
        return function curriedGetDefaultMiddleware(options) {
            return getDefaultMiddleware(options);
        };
    }
    function getDefaultMiddleware(options) {
        if (options === void 0) { options = {}; }
        var _b = options.thunk, thunk2 = _b === void 0 ? true : _b, _c = options.immutableCheck, immutableCheck = _c === void 0 ? true : _c, _d = options.serializableCheck, serializableCheck = _d === void 0 ? true : _d;
        var middlewareArray = new MiddlewareArray();
        if (thunk2) {
            if (isBoolean(thunk2)) {
                middlewareArray.push(es_default);
            }
            else {
                middlewareArray.push(es_default.withExtraArgument(thunk2.extraArgument));
            }
        }
        {
            if (immutableCheck) {
                var immutableOptions = {};
                if (!isBoolean(immutableCheck)) {
                    immutableOptions = immutableCheck;
                }
                middlewareArray.unshift(createImmutableStateInvariantMiddleware(immutableOptions));
            }
            if (serializableCheck) {
                var serializableOptions = {};
                if (!isBoolean(serializableCheck)) {
                    serializableOptions = serializableCheck;
                }
                middlewareArray.push(createSerializableStateInvariantMiddleware(serializableOptions));
            }
        }
        return middlewareArray;
    }
    // src/configureStore.ts
    var IS_PRODUCTION = false;
    function configureStore(options) {
        var curriedGetDefaultMiddleware = curryGetDefaultMiddleware();
        var _b = options || {}, _c = _b.reducer, reducer = _c === void 0 ? void 0 : _c, _d = _b.middleware, middleware = _d === void 0 ? curriedGetDefaultMiddleware() : _d, _e = _b.devTools, devTools = _e === void 0 ? true : _e, _f = _b.preloadedState, preloadedState = _f === void 0 ? void 0 : _f, _g = _b.enhancers, enhancers = _g === void 0 ? void 0 : _g;
        var rootReducer;
        if (typeof reducer === "function") {
            rootReducer = reducer;
        }
        else if (isPlainObject2(reducer)) {
            rootReducer = combineReducers(reducer);
        }
        else {
            throw new Error('"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers');
        }
        var finalMiddleware = middleware;
        if (typeof finalMiddleware === "function") {
            finalMiddleware = finalMiddleware(curriedGetDefaultMiddleware);
            if (!Array.isArray(finalMiddleware)) {
                throw new Error("when using a middleware builder function, an array of middleware must be returned");
            }
        }
        if (finalMiddleware.some(function (item) { return typeof item !== "function"; })) {
            throw new Error("each middleware provided to configureStore must be a function");
        }
        var middlewareEnhancer = applyMiddleware.apply(void 0, finalMiddleware);
        var finalCompose = compose;
        if (devTools) {
            finalCompose = composeWithDevTools(__spreadValues({
                trace: !IS_PRODUCTION
            }, typeof devTools === "object" && devTools));
        }
        var storeEnhancers = [middlewareEnhancer];
        if (Array.isArray(enhancers)) {
            storeEnhancers = __spreadArray([middlewareEnhancer], enhancers);
        }
        else if (typeof enhancers === "function") {
            storeEnhancers = enhancers(storeEnhancers);
        }
        var composedEnhancer = finalCompose.apply(void 0, storeEnhancers);
        return createStore(rootReducer, preloadedState, composedEnhancer);
    }
    // src/createAction.ts
    function createAction(type, prepareAction) {
        function actionCreator() {
            var args = [];
            for (var _b = 0; _b < arguments.length; _b++) {
                args[_b] = arguments[_b];
            }
            if (prepareAction) {
                var prepared = prepareAction.apply(void 0, args);
                if (!prepared) {
                    throw new Error("prepareAction did not return an object");
                }
                return __spreadValues(__spreadValues({
                    type: type,
                    payload: prepared.payload
                }, "meta" in prepared && { meta: prepared.meta }), "error" in prepared && { error: prepared.error });
            }
            return { type: type, payload: args[0] };
        }
        actionCreator.toString = function () { return "" + type; };
        actionCreator.type = type;
        actionCreator.match = function (action) { return action.type === type; };
        return actionCreator;
    }
    function isFSA(action) {
        return isPlainObject2(action) && typeof action.type === "string" && Object.keys(action).every(isValidKey);
    }
    function isValidKey(key) {
        return ["type", "payload", "error", "meta"].indexOf(key) > -1;
    }
    function getType(actionCreator) {
        return "" + actionCreator;
    }
    // src/mapBuilders.ts
    function executeReducerBuilderCallback(builderCallback) {
        var actionsMap = {};
        var actionMatchers = [];
        var defaultCaseReducer;
        var builder = {
            addCase: function (typeOrActionCreator, reducer) {
                {
                    if (actionMatchers.length > 0) {
                        throw new Error("`builder.addCase` should only be called before calling `builder.addMatcher`");
                    }
                    if (defaultCaseReducer) {
                        throw new Error("`builder.addCase` should only be called before calling `builder.addDefaultCase`");
                    }
                }
                var type = typeof typeOrActionCreator === "string" ? typeOrActionCreator : typeOrActionCreator.type;
                if (type in actionsMap) {
                    throw new Error("addCase cannot be called with two reducers for the same action type");
                }
                actionsMap[type] = reducer;
                return builder;
            },
            addMatcher: function (matcher, reducer) {
                {
                    if (defaultCaseReducer) {
                        throw new Error("`builder.addMatcher` should only be called before calling `builder.addDefaultCase`");
                    }
                }
                actionMatchers.push({ matcher: matcher, reducer: reducer });
                return builder;
            },
            addDefaultCase: function (reducer) {
                {
                    if (defaultCaseReducer) {
                        throw new Error("`builder.addDefaultCase` can only be called once");
                    }
                }
                defaultCaseReducer = reducer;
                return builder;
            }
        };
        builderCallback(builder);
        return [actionsMap, actionMatchers, defaultCaseReducer];
    }
    // src/createReducer.ts
    function createReducer(initialState, mapOrBuilderCallback, actionMatchers, defaultCaseReducer) {
        if (actionMatchers === void 0) { actionMatchers = []; }
        var _b = typeof mapOrBuilderCallback === "function" ? executeReducerBuilderCallback(mapOrBuilderCallback) : [mapOrBuilderCallback, actionMatchers, defaultCaseReducer], actionsMap = _b[0], finalActionMatchers = _b[1], finalDefaultCaseReducer = _b[2];
        var frozenInitialState = immer_esm_default(initialState, function () {
        });
        return function (state, action) {
            if (state === void 0) { state = frozenInitialState; }
            var caseReducers = __spreadArray([
                actionsMap[action.type]
            ], finalActionMatchers.filter(function (_b) {
                var matcher = _b.matcher;
                return matcher(action);
            }).map(function (_b) {
                var reducer = _b.reducer;
                return reducer;
            }));
            if (caseReducers.filter(function (cr) { return !!cr; }).length === 0) {
                caseReducers = [finalDefaultCaseReducer];
            }
            return caseReducers.reduce(function (previousState, caseReducer) {
                if (caseReducer) {
                    if (r(previousState)) {
                        var draft = previousState;
                        var result = caseReducer(draft, action);
                        if (typeof result === "undefined") {
                            return previousState;
                        }
                        return result;
                    }
                    else if (!t(previousState)) {
                        var result = caseReducer(previousState, action);
                        if (typeof result === "undefined") {
                            if (previousState === null) {
                                return previousState;
                            }
                            throw Error("A case reducer on a non-draftable value must not return undefined");
                        }
                        return result;
                    }
                    else {
                        return immer_esm_default(previousState, function (draft) {
                            return caseReducer(draft, action);
                        });
                    }
                }
                return previousState;
            }, state);
        };
    }
    // src/createSlice.ts
    function getType2(slice, actionKey) {
        return slice + "/" + actionKey;
    }
    function createSlice(options) {
        var name = options.name, initialState = options.initialState;
        if (!name) {
            throw new Error("`name` is a required option for createSlice");
        }
        var reducers = options.reducers || {};
        var _b = typeof options.extraReducers === "function" ? executeReducerBuilderCallback(options.extraReducers) : [options.extraReducers], _c = _b[0], extraReducers = _c === void 0 ? {} : _c, _d = _b[1], actionMatchers = _d === void 0 ? [] : _d, _e = _b[2], defaultCaseReducer = _e === void 0 ? void 0 : _e;
        var reducerNames = Object.keys(reducers);
        var sliceCaseReducersByName = {};
        var sliceCaseReducersByType = {};
        var actionCreators = {};
        reducerNames.forEach(function (reducerName) {
            var maybeReducerWithPrepare = reducers[reducerName];
            var type = getType2(name, reducerName);
            var caseReducer;
            var prepareCallback;
            if ("reducer" in maybeReducerWithPrepare) {
                caseReducer = maybeReducerWithPrepare.reducer;
                prepareCallback = maybeReducerWithPrepare.prepare;
            }
            else {
                caseReducer = maybeReducerWithPrepare;
            }
            sliceCaseReducersByName[reducerName] = caseReducer;
            sliceCaseReducersByType[type] = caseReducer;
            actionCreators[reducerName] = prepareCallback ? createAction(type, prepareCallback) : createAction(type);
        });
        var finalCaseReducers = __spreadValues(__spreadValues({}, extraReducers), sliceCaseReducersByType);
        var reducer = createReducer(initialState, finalCaseReducers, actionMatchers, defaultCaseReducer);
        return {
            name: name,
            reducer: reducer,
            actions: actionCreators,
            caseReducers: sliceCaseReducersByName
        };
    }
    // src/entities/entity_state.ts
    function getInitialEntityState() {
        return {
            ids: [],
            entities: {}
        };
    }
    function createInitialStateFactory() {
        function getInitialState(additionalState) {
            if (additionalState === void 0) { additionalState = {}; }
            return Object.assign(getInitialEntityState(), additionalState);
        }
        return { getInitialState: getInitialState };
    }
    // src/entities/state_selectors.ts
    function createSelectorsFactory() {
        function getSelectors(selectState) {
            var selectIds = function (state) { return state.ids; };
            var selectEntities = function (state) { return state.entities; };
            var selectAll = createDraftSafeSelector(selectIds, selectEntities, function (ids, entities) { return ids.map(function (id) { return entities[id]; }); });
            var selectId = function (_2, id) { return id; };
            var selectById = function (entities, id) { return entities[id]; };
            var selectTotal = createDraftSafeSelector(selectIds, function (ids) { return ids.length; });
            if (!selectState) {
                return {
                    selectIds: selectIds,
                    selectEntities: selectEntities,
                    selectAll: selectAll,
                    selectTotal: selectTotal,
                    selectById: createDraftSafeSelector(selectEntities, selectId, selectById)
                };
            }
            var selectGlobalizedEntities = createDraftSafeSelector(selectState, selectEntities);
            return {
                selectIds: createDraftSafeSelector(selectState, selectIds),
                selectEntities: selectGlobalizedEntities,
                selectAll: createDraftSafeSelector(selectState, selectAll),
                selectTotal: createDraftSafeSelector(selectState, selectTotal),
                selectById: createDraftSafeSelector(selectGlobalizedEntities, selectId, selectById)
            };
        }
        return { getSelectors: getSelectors };
    }
    // src/entities/state_adapter.ts
    function createSingleArgumentStateOperator(mutator) {
        var operator = createStateOperator(function (_2, state) { return mutator(state); });
        return function operation(state) {
            return operator(state, void 0);
        };
    }
    function createStateOperator(mutator) {
        return function operation(state, arg) {
            function isPayloadActionArgument(arg2) {
                return isFSA(arg2);
            }
            var runMutator = function (draft) {
                if (isPayloadActionArgument(arg)) {
                    mutator(arg.payload, draft);
                }
                else {
                    mutator(arg, draft);
                }
            };
            if (r(state)) {
                runMutator(state);
                return state;
            }
            else {
                return immer_esm_default(state, runMutator);
            }
        };
    }
    // src/entities/utils.ts
    function selectIdValue(entity, selectId) {
        var key = selectId(entity);
        if (key === void 0) {
            console.warn("The entity passed to the `selectId` implementation returned undefined.", "You should probably provide your own `selectId` implementation.", "The entity that was passed:", entity, "The `selectId` implementation:", selectId.toString());
        }
        return key;
    }
    function ensureEntitiesArray(entities) {
        if (!Array.isArray(entities)) {
            entities = Object.values(entities);
        }
        return entities;
    }
    function splitAddedUpdatedEntities(newEntities, selectId, state) {
        newEntities = ensureEntitiesArray(newEntities);
        var added = [];
        var updated = [];
        for (var _b = 0, newEntities_1 = newEntities; _b < newEntities_1.length; _b++) {
            var entity = newEntities_1[_b];
            var id = selectIdValue(entity, selectId);
            if (id in state.entities) {
                updated.push({ id: id, changes: entity });
            }
            else {
                added.push(entity);
            }
        }
        return [added, updated];
    }
    // src/entities/unsorted_state_adapter.ts
    function createUnsortedStateAdapter(selectId) {
        function addOneMutably(entity, state) {
            var key = selectIdValue(entity, selectId);
            if (key in state.entities) {
                return;
            }
            state.ids.push(key);
            state.entities[key] = entity;
        }
        function addManyMutably(newEntities, state) {
            newEntities = ensureEntitiesArray(newEntities);
            for (var _b = 0, newEntities_2 = newEntities; _b < newEntities_2.length; _b++) {
                var entity = newEntities_2[_b];
                addOneMutably(entity, state);
            }
        }
        function setOneMutably(entity, state) {
            var key = selectIdValue(entity, selectId);
            if (!(key in state.entities)) {
                state.ids.push(key);
            }
            state.entities[key] = entity;
        }
        function setManyMutably(newEntities, state) {
            newEntities = ensureEntitiesArray(newEntities);
            for (var _b = 0, newEntities_3 = newEntities; _b < newEntities_3.length; _b++) {
                var entity = newEntities_3[_b];
                setOneMutably(entity, state);
            }
        }
        function setAllMutably(newEntities, state) {
            newEntities = ensureEntitiesArray(newEntities);
            state.ids = [];
            state.entities = {};
            addManyMutably(newEntities, state);
        }
        function removeOneMutably(key, state) {
            return removeManyMutably([key], state);
        }
        function removeManyMutably(keys, state) {
            var didMutate = false;
            keys.forEach(function (key) {
                if (key in state.entities) {
                    delete state.entities[key];
                    didMutate = true;
                }
            });
            if (didMutate) {
                state.ids = state.ids.filter(function (id) { return id in state.entities; });
            }
        }
        function removeAllMutably(state) {
            Object.assign(state, {
                ids: [],
                entities: {}
            });
        }
        function takeNewKey(keys, update, state) {
            var original = state.entities[update.id];
            var updated = Object.assign({}, original, update.changes);
            var newKey = selectIdValue(updated, selectId);
            var hasNewKey = newKey !== update.id;
            if (hasNewKey) {
                keys[update.id] = newKey;
                delete state.entities[update.id];
            }
            state.entities[newKey] = updated;
            return hasNewKey;
        }
        function updateOneMutably(update, state) {
            return updateManyMutably([update], state);
        }
        function updateManyMutably(updates, state) {
            var newKeys = {};
            var updatesPerEntity = {};
            updates.forEach(function (update) {
                if (update.id in state.entities) {
                    updatesPerEntity[update.id] = {
                        id: update.id,
                        changes: __spreadValues(__spreadValues({}, updatesPerEntity[update.id] ? updatesPerEntity[update.id].changes : null), update.changes)
                    };
                }
            });
            updates = Object.values(updatesPerEntity);
            var didMutateEntities = updates.length > 0;
            if (didMutateEntities) {
                var didMutateIds = updates.filter(function (update) { return takeNewKey(newKeys, update, state); }).length > 0;
                if (didMutateIds) {
                    state.ids = state.ids.map(function (id) { return newKeys[id] || id; });
                }
            }
        }
        function upsertOneMutably(entity, state) {
            return upsertManyMutably([entity], state);
        }
        function upsertManyMutably(newEntities, state) {
            var _b = splitAddedUpdatedEntities(newEntities, selectId, state), added = _b[0], updated = _b[1];
            updateManyMutably(updated, state);
            addManyMutably(added, state);
        }
        return {
            removeAll: createSingleArgumentStateOperator(removeAllMutably),
            addOne: createStateOperator(addOneMutably),
            addMany: createStateOperator(addManyMutably),
            setOne: createStateOperator(setOneMutably),
            setMany: createStateOperator(setManyMutably),
            setAll: createStateOperator(setAllMutably),
            updateOne: createStateOperator(updateOneMutably),
            updateMany: createStateOperator(updateManyMutably),
            upsertOne: createStateOperator(upsertOneMutably),
            upsertMany: createStateOperator(upsertManyMutably),
            removeOne: createStateOperator(removeOneMutably),
            removeMany: createStateOperator(removeManyMutably)
        };
    }
    // src/entities/sorted_state_adapter.ts
    function createSortedStateAdapter(selectId, sort) {
        var _b = createUnsortedStateAdapter(selectId), removeOne = _b.removeOne, removeMany = _b.removeMany, removeAll = _b.removeAll;
        function addOneMutably(entity, state) {
            return addManyMutably([entity], state);
        }
        function addManyMutably(newEntities, state) {
            newEntities = ensureEntitiesArray(newEntities);
            var models = newEntities.filter(function (model) { return !(selectIdValue(model, selectId) in state.entities); });
            if (models.length !== 0) {
                merge(models, state);
            }
        }
        function setOneMutably(entity, state) {
            return setManyMutably([entity], state);
        }
        function setManyMutably(newEntities, state) {
            newEntities = ensureEntitiesArray(newEntities);
            if (newEntities.length !== 0) {
                merge(newEntities, state);
            }
        }
        function setAllMutably(newEntities, state) {
            newEntities = ensureEntitiesArray(newEntities);
            state.entities = {};
            state.ids = [];
            addManyMutably(newEntities, state);
        }
        function updateOneMutably(update, state) {
            return updateManyMutably([update], state);
        }
        function takeUpdatedModel(models, update, state) {
            if (!(update.id in state.entities)) {
                return false;
            }
            var original = state.entities[update.id];
            var updated = Object.assign({}, original, update.changes);
            var newKey = selectIdValue(updated, selectId);
            delete state.entities[update.id];
            models.push(updated);
            return newKey !== update.id;
        }
        function updateManyMutably(updates, state) {
            var models = [];
            updates.forEach(function (update) { return takeUpdatedModel(models, update, state); });
            if (models.length !== 0) {
                merge(models, state);
            }
        }
        function upsertOneMutably(entity, state) {
            return upsertManyMutably([entity], state);
        }
        function upsertManyMutably(newEntities, state) {
            var _b = splitAddedUpdatedEntities(newEntities, selectId, state), added = _b[0], updated = _b[1];
            updateManyMutably(updated, state);
            addManyMutably(added, state);
        }
        function areArraysEqual(a2, b2) {
            if (a2.length !== b2.length) {
                return false;
            }
            for (var i2 = 0; i2 < a2.length && i2 < b2.length; i2++) {
                if (a2[i2] === b2[i2]) {
                    continue;
                }
                return false;
            }
            return true;
        }
        function merge(models, state) {
            models.forEach(function (model) {
                state.entities[selectId(model)] = model;
            });
            var allEntities = Object.values(state.entities);
            allEntities.sort(sort);
            var newSortedIds = allEntities.map(selectId);
            var ids = state.ids;
            if (!areArraysEqual(ids, newSortedIds)) {
                state.ids = newSortedIds;
            }
        }
        return {
            removeOne: removeOne,
            removeMany: removeMany,
            removeAll: removeAll,
            addOne: createStateOperator(addOneMutably),
            updateOne: createStateOperator(updateOneMutably),
            upsertOne: createStateOperator(upsertOneMutably),
            setOne: createStateOperator(setOneMutably),
            setMany: createStateOperator(setManyMutably),
            setAll: createStateOperator(setAllMutably),
            addMany: createStateOperator(addManyMutably),
            updateMany: createStateOperator(updateManyMutably),
            upsertMany: createStateOperator(upsertManyMutably)
        };
    }
    // src/entities/create_adapter.ts
    function createEntityAdapter(options) {
        if (options === void 0) { options = {}; }
        var _b = __spreadValues({
            sortComparer: false,
            selectId: function (instance) { return instance.id; }
        }, options), selectId = _b.selectId, sortComparer = _b.sortComparer;
        var stateFactory = createInitialStateFactory();
        var selectorsFactory = createSelectorsFactory();
        var stateAdapter = sortComparer ? createSortedStateAdapter(selectId, sortComparer) : createUnsortedStateAdapter(selectId);
        return __spreadValues(__spreadValues(__spreadValues({
            selectId: selectId,
            sortComparer: sortComparer
        }, stateFactory), selectorsFactory), stateAdapter);
    }
    // src/nanoid.ts
    var urlAlphabet = "ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW";
    var nanoid = function (size) {
        if (size === void 0) { size = 21; }
        var id = "";
        var i2 = size;
        while (i2--) {
            id += urlAlphabet[Math.random() * 64 | 0];
        }
        return id;
    };
    // src/createAsyncThunk.ts
    var commonProperties = [
        "name",
        "message",
        "stack",
        "code"
    ];
    var RejectWithValue = /** @class */ (function () {
        function RejectWithValue(payload, meta) {
            this.payload = payload;
            this.meta = meta;
        }
        return RejectWithValue;
    }());
    var FulfillWithMeta = /** @class */ (function () {
        function FulfillWithMeta(payload, meta) {
            this.payload = payload;
            this.meta = meta;
        }
        return FulfillWithMeta;
    }());
    var miniSerializeError = function (value) {
        if (typeof value === "object" && value !== null) {
            var simpleError = {};
            for (var _b = 0, commonProperties_1 = commonProperties; _b < commonProperties_1.length; _b++) {
                var property = commonProperties_1[_b];
                if (typeof value[property] === "string") {
                    simpleError[property] = value[property];
                }
            }
            return simpleError;
        }
        return { message: String(value) };
    };
    function createAsyncThunk(typePrefix, payloadCreator, options) {
        var fulfilled = createAction(typePrefix + "/fulfilled", function (payload, requestId, arg, meta) { return ({
            payload: payload,
            meta: __spreadProps(__spreadValues({}, meta || {}), {
                arg: arg,
                requestId: requestId,
                requestStatus: "fulfilled"
            })
        }); });
        var pending = createAction(typePrefix + "/pending", function (requestId, arg, meta) { return ({
            payload: void 0,
            meta: __spreadProps(__spreadValues({}, meta || {}), {
                arg: arg,
                requestId: requestId,
                requestStatus: "pending"
            })
        }); });
        var rejected = createAction(typePrefix + "/rejected", function (error, requestId, arg, payload, meta) { return ({
            payload: payload,
            error: (options && options.serializeError || miniSerializeError)(error || "Rejected"),
            meta: __spreadProps(__spreadValues({}, meta || {}), {
                arg: arg,
                requestId: requestId,
                rejectedWithValue: !!payload,
                requestStatus: "rejected",
                aborted: (error == null ? void 0 : error.name) === "AbortError",
                condition: (error == null ? void 0 : error.name) === "ConditionError"
            })
        }); });
        var displayedWarning = false;
        var AC = typeof AbortController !== "undefined" ? AbortController : /** @class */ (function () {
            function class_1() {
                this.signal = {
                    aborted: false,
                    addEventListener: function () {
                    },
                    dispatchEvent: function () {
                        return false;
                    },
                    onabort: function () {
                    },
                    removeEventListener: function () {
                    }
                };
            }
            class_1.prototype.abort = function () {
                {
                    if (!displayedWarning) {
                        displayedWarning = true;
                        console.info("This platform does not implement AbortController. \nIf you want to use the AbortController to react to `abort` events, please consider importing a polyfill like 'abortcontroller-polyfill/dist/abortcontroller-polyfill-only'.");
                    }
                }
            };
            return class_1;
        }());
        function actionCreator(arg) {
            return function (dispatch, getState, extra) {
                var _a;
                var requestId = ((_a = options == null ? void 0 : options.idGenerator) != null ? _a : nanoid)();
                var abortController = new AC();
                var abortReason;
                var abortedPromise = new Promise(function (_2, reject) { return abortController.signal.addEventListener("abort", function () { return reject({ name: "AbortError", message: abortReason || "Aborted" }); }); });
                var started = false;
                function abort(reason) {
                    if (started) {
                        abortReason = reason;
                        abortController.abort();
                    }
                }
                var promise = function () {
                    return __async(this, null, function () {
                        var _a2, finalAction, err_1, skipDispatch;
                        return __generator(this, function (_b) {
                            switch (_b.label) {
                                case 0:
                                    _b.trys.push([0, 2, , 3]);
                                    if (options && options.condition && options.condition(arg, { getState: getState, extra: extra }) === false) {
                                        throw {
                                            name: "ConditionError",
                                            message: "Aborted due to condition callback returning false."
                                        };
                                    }
                                    started = true;
                                    dispatch(pending(requestId, arg, (_a2 = options == null ? void 0 : options.getPendingMeta) == null ? void 0 : _a2.call(options, { requestId: requestId, arg: arg }, { getState: getState, extra: extra })));
                                    return [4 /*yield*/, Promise.race([
                                            abortedPromise,
                                            Promise.resolve(payloadCreator(arg, {
                                                dispatch: dispatch,
                                                getState: getState,
                                                extra: extra,
                                                requestId: requestId,
                                                signal: abortController.signal,
                                                rejectWithValue: function (value, meta) {
                                                    return new RejectWithValue(value, meta);
                                                },
                                                fulfillWithValue: function (value, meta) {
                                                    return new FulfillWithMeta(value, meta);
                                                }
                                            })).then(function (result) {
                                                if (result instanceof RejectWithValue) {
                                                    throw result;
                                                }
                                                if (result instanceof FulfillWithMeta) {
                                                    return fulfilled(result.payload, requestId, arg, result.meta);
                                                }
                                                return fulfilled(result, requestId, arg);
                                            })
                                        ])];
                                case 1:
                                    finalAction = _b.sent();
                                    return [3 /*break*/, 3];
                                case 2:
                                    err_1 = _b.sent();
                                    finalAction = err_1 instanceof RejectWithValue ? rejected(null, requestId, arg, err_1.payload, err_1.meta) : rejected(err_1, requestId, arg);
                                    return [3 /*break*/, 3];
                                case 3:
                                    skipDispatch = options && !options.dispatchConditionRejection && rejected.match(finalAction) && finalAction.meta.condition;
                                    if (!skipDispatch) {
                                        dispatch(finalAction);
                                    }
                                    return [2 /*return*/, finalAction];
                            }
                        });
                    });
                }();
                return Object.assign(promise, {
                    abort: abort,
                    requestId: requestId,
                    arg: arg,
                    unwrap: function () {
                        return promise.then(unwrapResult);
                    }
                });
            };
        }
        return Object.assign(actionCreator, {
            pending: pending,
            rejected: rejected,
            fulfilled: fulfilled,
            typePrefix: typePrefix
        });
    }
    function unwrapResult(action) {
        if (action.meta && action.meta.rejectedWithValue) {
            throw action.payload;
        }
        if (action.error) {
            throw action.error;
        }
        return action.payload;
    }
    // src/tsHelpers.ts
    var hasMatchFunction = function (v2) {
        return v2 && typeof v2.match === "function";
    };
    // src/matchers.ts
    var matches = function (matcher, action) {
        if (hasMatchFunction(matcher)) {
            return matcher.match(action);
        }
        else {
            return matcher(action);
        }
    };
    function isAnyOf() {
        var matchers = [];
        for (var _b = 0; _b < arguments.length; _b++) {
            matchers[_b] = arguments[_b];
        }
        return function (action) {
            return matchers.some(function (matcher) { return matches(matcher, action); });
        };
    }
    function isAllOf() {
        var matchers = [];
        for (var _b = 0; _b < arguments.length; _b++) {
            matchers[_b] = arguments[_b];
        }
        return function (action) {
            return matchers.every(function (matcher) { return matches(matcher, action); });
        };
    }
    function hasExpectedRequestMetadata(action, validStatus) {
        if (!action || !action.meta)
            return false;
        var hasValidRequestId = typeof action.meta.requestId === "string";
        var hasValidRequestStatus = validStatus.indexOf(action.meta.requestStatus) > -1;
        return hasValidRequestId && hasValidRequestStatus;
    }
    function isAsyncThunkArray(a2) {
        return typeof a2[0] === "function" && "pending" in a2[0] && "fulfilled" in a2[0] && "rejected" in a2[0];
    }
    function isPending() {
        var asyncThunks = [];
        for (var _b = 0; _b < arguments.length; _b++) {
            asyncThunks[_b] = arguments[_b];
        }
        if (asyncThunks.length === 0) {
            return function (action) { return hasExpectedRequestMetadata(action, ["pending"]); };
        }
        if (!isAsyncThunkArray(asyncThunks)) {
            return isPending()(asyncThunks[0]);
        }
        return function (action) {
            var matchers = asyncThunks.map(function (asyncThunk) { return asyncThunk.pending; });
            var combinedMatcher = isAnyOf.apply(void 0, matchers);
            return combinedMatcher(action);
        };
    }
    function isRejected() {
        var asyncThunks = [];
        for (var _b = 0; _b < arguments.length; _b++) {
            asyncThunks[_b] = arguments[_b];
        }
        if (asyncThunks.length === 0) {
            return function (action) { return hasExpectedRequestMetadata(action, ["rejected"]); };
        }
        if (!isAsyncThunkArray(asyncThunks)) {
            return isRejected()(asyncThunks[0]);
        }
        return function (action) {
            var matchers = asyncThunks.map(function (asyncThunk) { return asyncThunk.rejected; });
            var combinedMatcher = isAnyOf.apply(void 0, matchers);
            return combinedMatcher(action);
        };
    }
    function isRejectedWithValue() {
        var asyncThunks = [];
        for (var _b = 0; _b < arguments.length; _b++) {
            asyncThunks[_b] = arguments[_b];
        }
        var hasFlag = function (action) {
            return action && action.meta && action.meta.rejectedWithValue;
        };
        if (asyncThunks.length === 0) {
            return function (action) {
                var combinedMatcher = isAllOf(isRejected.apply(void 0, asyncThunks), hasFlag);
                return combinedMatcher(action);
            };
        }
        if (!isAsyncThunkArray(asyncThunks)) {
            return isRejectedWithValue()(asyncThunks[0]);
        }
        return function (action) {
            var combinedMatcher = isAllOf(isRejected.apply(void 0, asyncThunks), hasFlag);
            return combinedMatcher(action);
        };
    }
    function isFulfilled() {
        var asyncThunks = [];
        for (var _b = 0; _b < arguments.length; _b++) {
            asyncThunks[_b] = arguments[_b];
        }
        if (asyncThunks.length === 0) {
            return function (action) { return hasExpectedRequestMetadata(action, ["fulfilled"]); };
        }
        if (!isAsyncThunkArray(asyncThunks)) {
            return isFulfilled()(asyncThunks[0]);
        }
        return function (action) {
            var matchers = asyncThunks.map(function (asyncThunk) { return asyncThunk.fulfilled; });
            var combinedMatcher = isAnyOf.apply(void 0, matchers);
            return combinedMatcher(action);
        };
    }
    function isAsyncThunkAction() {
        var asyncThunks = [];
        for (var _b = 0; _b < arguments.length; _b++) {
            asyncThunks[_b] = arguments[_b];
        }
        if (asyncThunks.length === 0) {
            return function (action) { return hasExpectedRequestMetadata(action, ["pending", "fulfilled", "rejected"]); };
        }
        if (!isAsyncThunkArray(asyncThunks)) {
            return isAsyncThunkAction()(asyncThunks[0]);
        }
        return function (action) {
            var matchers = [];
            for (var _b = 0, asyncThunks_1 = asyncThunks; _b < asyncThunks_1.length; _b++) {
                var asyncThunk = asyncThunks_1[_b];
                matchers.push(asyncThunk.pending, asyncThunk.rejected, asyncThunk.fulfilled);
            }
            var combinedMatcher = isAnyOf.apply(void 0, matchers);
            return combinedMatcher(action);
        };
    }
    // src/index.ts
    N();

    exports.MiddlewareArray = MiddlewareArray;
    exports.__DO_NOT_USE__ActionTypes = ActionTypes;
    exports.applyMiddleware = applyMiddleware;
    exports.bindActionCreators = bindActionCreators;
    exports.combineReducers = combineReducers;
    exports.compose = compose;
    exports.configureStore = configureStore;
    exports.createAction = createAction;
    exports.createAsyncThunk = createAsyncThunk;
    exports.createDraftSafeSelector = createDraftSafeSelector;
    exports.createEntityAdapter = createEntityAdapter;
    exports.createImmutableStateInvariantMiddleware = createImmutableStateInvariantMiddleware;
    exports.createNextState = immer_esm_default;
    exports.createReducer = createReducer;
    exports.createSelector = createSelector;
    exports.createSerializableStateInvariantMiddleware = createSerializableStateInvariantMiddleware;
    exports.createSlice = createSlice;
    exports.createStore = createStore;
    exports.current = D;
    exports.findNonSerializableValue = findNonSerializableValue;
    exports.freeze = d;
    exports.getDefaultMiddleware = getDefaultMiddleware;
    exports.getType = getType;
    exports.isAllOf = isAllOf;
    exports.isAnyOf = isAnyOf;
    exports.isAsyncThunkAction = isAsyncThunkAction;
    exports.isDraft = r;
    exports.isFulfilled = isFulfilled;
    exports.isImmutableDefault = isImmutableDefault;
    exports.isPending = isPending;
    exports.isPlain = isPlain;
    exports.isPlainObject = isPlainObject2;
    exports.isRejected = isRejected;
    exports.isRejectedWithValue = isRejectedWithValue;
    exports.miniSerializeError = miniSerializeError;
    exports.nanoid = nanoid;
    exports.original = e;
    exports.unwrapResult = unwrapResult;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=redux-toolkit.umd.js.map
