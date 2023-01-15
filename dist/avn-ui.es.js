import r from "styled-components";
import H2, { useRef as u1, useState as k, useEffect as P } from "react";
var E1 = { exports: {} }, i1 = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var e2;
function Q2() {
  if (e2)
    return i1;
  e2 = 1;
  var C = H2, t = Symbol.for("react.element"), i = Symbol.for("react.fragment"), h = Object.prototype.hasOwnProperty, s = C.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, o = { key: !0, ref: !0, __self: !0, __source: !0 };
  function f(H, u, L) {
    var c, w = {}, m = null, F = null;
    L !== void 0 && (m = "" + L), u.key !== void 0 && (m = "" + u.key), u.ref !== void 0 && (F = u.ref);
    for (c in u)
      h.call(u, c) && !o.hasOwnProperty(c) && (w[c] = u[c]);
    if (H && H.defaultProps)
      for (c in u = H.defaultProps, u)
        w[c] === void 0 && (w[c] = u[c]);
    return { $$typeof: t, type: H, key: m, ref: F, props: w, _owner: s.current };
  }
  return i1.Fragment = i, i1.jsx = f, i1.jsxs = f, i1;
}
var l1 = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var C2;
function e0() {
  return C2 || (C2 = 1, process.env.NODE_ENV !== "production" && function() {
    var C = H2, t = Symbol.for("react.element"), i = Symbol.for("react.portal"), h = Symbol.for("react.fragment"), s = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), f = Symbol.for("react.provider"), H = Symbol.for("react.context"), u = Symbol.for("react.forward_ref"), L = Symbol.for("react.suspense"), c = Symbol.for("react.suspense_list"), w = Symbol.for("react.memo"), m = Symbol.for("react.lazy"), F = Symbol.for("react.offscreen"), T = Symbol.iterator, I = "@@iterator";
    function O(l) {
      if (l === null || typeof l != "object")
        return null;
      var a = T && l[T] || l[I];
      return typeof a == "function" ? a : null;
    }
    var j = C.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function E(l) {
      {
        for (var a = arguments.length, d = new Array(a > 1 ? a - 1 : 0), V = 1; V < a; V++)
          d[V - 1] = arguments[V];
        V1("error", l, d);
      }
    }
    function V1(l, a, d) {
      {
        var V = j.ReactDebugCurrentFrame, Z = V.getStackAddendum();
        Z !== "" && (a += "%s", d = d.concat([Z]));
        var M = d.map(function(x) {
          return String(x);
        });
        M.unshift("Warning: " + a), Function.prototype.apply.call(console[l], console, M);
      }
    }
    var A = !1, W = !1, Z2 = !1, L2 = !1, M2 = !1, k1;
    k1 = Symbol.for("react.module.reference");
    function F2(l) {
      return !!(typeof l == "string" || typeof l == "function" || l === h || l === o || M2 || l === s || l === L || l === c || L2 || l === F || A || W || Z2 || typeof l == "object" && l !== null && (l.$$typeof === m || l.$$typeof === w || l.$$typeof === f || l.$$typeof === H || l.$$typeof === u || l.$$typeof === k1 || l.getModuleId !== void 0));
    }
    function b2(l, a, d) {
      var V = l.displayName;
      if (V)
        return V;
      var Z = a.displayName || a.name || "";
      return Z !== "" ? d + "(" + Z + ")" : d;
    }
    function _1(l) {
      return l.displayName || "Context";
    }
    function R(l) {
      if (l == null)
        return null;
      if (typeof l.tag == "number" && E("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof l == "function")
        return l.displayName || l.name || null;
      if (typeof l == "string")
        return l;
      switch (l) {
        case h:
          return "Fragment";
        case i:
          return "Portal";
        case o:
          return "Profiler";
        case s:
          return "StrictMode";
        case L:
          return "Suspense";
        case c:
          return "SuspenseList";
      }
      if (typeof l == "object")
        switch (l.$$typeof) {
          case H:
            var a = l;
            return _1(a) + ".Consumer";
          case f:
            var d = l;
            return _1(d._context) + ".Provider";
          case u:
            return b2(l, l.render, "ForwardRef");
          case w:
            var V = l.displayName || null;
            return V !== null ? V : R(l.type) || "Memo";
          case m: {
            var Z = l, M = Z._payload, x = Z._init;
            try {
              return R(x(M));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var z = Object.assign, C1 = 0, $1, T1, I1, S1, A1, R1, B1;
    function j1() {
    }
    j1.__reactDisabledLog = !0;
    function y2() {
      {
        if (C1 === 0) {
          $1 = console.log, T1 = console.info, I1 = console.warn, S1 = console.error, A1 = console.group, R1 = console.groupCollapsed, B1 = console.groupEnd;
          var l = {
            configurable: !0,
            enumerable: !0,
            value: j1,
            writable: !0
          };
          Object.defineProperties(console, {
            info: l,
            log: l,
            warn: l,
            error: l,
            group: l,
            groupCollapsed: l,
            groupEnd: l
          });
        }
        C1++;
      }
    }
    function E2() {
      {
        if (C1--, C1 === 0) {
          var l = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: z({}, l, {
              value: $1
            }),
            info: z({}, l, {
              value: T1
            }),
            warn: z({}, l, {
              value: I1
            }),
            error: z({}, l, {
              value: S1
            }),
            group: z({}, l, {
              value: A1
            }),
            groupCollapsed: z({}, l, {
              value: R1
            }),
            groupEnd: z({}, l, {
              value: B1
            })
          });
        }
        C1 < 0 && E("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var g1 = j.ReactCurrentDispatcher, w1;
    function a1(l, a, d) {
      {
        if (w1 === void 0)
          try {
            throw Error();
          } catch (Z) {
            var V = Z.stack.trim().match(/\n( *(at )?)/);
            w1 = V && V[1] || "";
          }
        return `
` + w1 + l;
      }
    }
    var v1 = !1, r1;
    {
      var k2 = typeof WeakMap == "function" ? WeakMap : Map;
      r1 = new k2();
    }
    function D1(l, a) {
      if (!l || v1)
        return "";
      {
        var d = r1.get(l);
        if (d !== void 0)
          return d;
      }
      var V;
      v1 = !0;
      var Z = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var M;
      M = g1.current, g1.current = null, y2();
      try {
        if (a) {
          var x = function() {
            throw Error();
          };
          if (Object.defineProperty(x.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(x, []);
            } catch (B) {
              V = B;
            }
            Reflect.construct(l, [], x);
          } else {
            try {
              x.call();
            } catch (B) {
              V = B;
            }
            l.call(x.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (B) {
            V = B;
          }
          l();
        }
      } catch (B) {
        if (B && V && typeof B.stack == "string") {
          for (var v = B.stack.split(`
`), $ = V.stack.split(`
`), b = v.length - 1, y = $.length - 1; b >= 1 && y >= 0 && v[b] !== $[y]; )
            y--;
          for (; b >= 1 && y >= 0; b--, y--)
            if (v[b] !== $[y]) {
              if (b !== 1 || y !== 1)
                do
                  if (b--, y--, y < 0 || v[b] !== $[y]) {
                    var S = `
` + v[b].replace(" at new ", " at ");
                    return l.displayName && S.includes("<anonymous>") && (S = S.replace("<anonymous>", l.displayName)), typeof l == "function" && r1.set(l, S), S;
                  }
                while (b >= 1 && y >= 0);
              break;
            }
        }
      } finally {
        v1 = !1, g1.current = M, E2(), Error.prepareStackTrace = Z;
      }
      var Y = l ? l.displayName || l.name : "", Q1 = Y ? a1(Y) : "";
      return typeof l == "function" && r1.set(l, Q1), Q1;
    }
    function _2(l, a, d) {
      return D1(l, !1);
    }
    function $2(l) {
      var a = l.prototype;
      return !!(a && a.isReactComponent);
    }
    function o1(l, a, d) {
      if (l == null)
        return "";
      if (typeof l == "function")
        return D1(l, $2(l));
      if (typeof l == "string")
        return a1(l);
      switch (l) {
        case L:
          return a1("Suspense");
        case c:
          return a1("SuspenseList");
      }
      if (typeof l == "object")
        switch (l.$$typeof) {
          case u:
            return _2(l.render);
          case w:
            return o1(l.type, a, d);
          case m: {
            var V = l, Z = V._payload, M = V._init;
            try {
              return o1(M(Z), a, d);
            } catch {
            }
          }
        }
      return "";
    }
    var d1 = Object.prototype.hasOwnProperty, P1 = {}, z1 = j.ReactDebugCurrentFrame;
    function h1(l) {
      if (l) {
        var a = l._owner, d = o1(l.type, l._source, a ? a.type : null);
        z1.setExtraStackFrame(d);
      } else
        z1.setExtraStackFrame(null);
    }
    function T2(l, a, d, V, Z) {
      {
        var M = Function.call.bind(d1);
        for (var x in l)
          if (M(l, x)) {
            var v = void 0;
            try {
              if (typeof l[x] != "function") {
                var $ = Error((V || "React class") + ": " + d + " type `" + x + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof l[x] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw $.name = "Invariant Violation", $;
              }
              v = l[x](a, x, V, d, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (b) {
              v = b;
            }
            v && !(v instanceof Error) && (h1(Z), E("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", V || "React class", d, x, typeof v), h1(null)), v instanceof Error && !(v.message in P1) && (P1[v.message] = !0, h1(Z), E("Failed %s type: %s", d, v.message), h1(null));
          }
      }
    }
    var I2 = Array.isArray;
    function x1(l) {
      return I2(l);
    }
    function S2(l) {
      {
        var a = typeof Symbol == "function" && Symbol.toStringTag, d = a && l[Symbol.toStringTag] || l.constructor.name || "Object";
        return d;
      }
    }
    function A2(l) {
      try {
        return O1(l), !1;
      } catch {
        return !0;
      }
    }
    function O1(l) {
      return "" + l;
    }
    function W1(l) {
      if (A2(l))
        return E("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", S2(l)), O1(l);
    }
    var t1 = j.ReactCurrentOwner, R2 = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, N1, Y1, m1;
    m1 = {};
    function B2(l) {
      if (d1.call(l, "ref")) {
        var a = Object.getOwnPropertyDescriptor(l, "ref").get;
        if (a && a.isReactWarning)
          return !1;
      }
      return l.ref !== void 0;
    }
    function j2(l) {
      if (d1.call(l, "key")) {
        var a = Object.getOwnPropertyDescriptor(l, "key").get;
        if (a && a.isReactWarning)
          return !1;
      }
      return l.key !== void 0;
    }
    function D2(l, a) {
      if (typeof l.ref == "string" && t1.current && a && t1.current.stateNode !== a) {
        var d = R(t1.current.type);
        m1[d] || (E('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', R(t1.current.type), l.ref), m1[d] = !0);
      }
    }
    function P2(l, a) {
      {
        var d = function() {
          N1 || (N1 = !0, E("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", a));
        };
        d.isReactWarning = !0, Object.defineProperty(l, "key", {
          get: d,
          configurable: !0
        });
      }
    }
    function z2(l, a) {
      {
        var d = function() {
          Y1 || (Y1 = !0, E("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", a));
        };
        d.isReactWarning = !0, Object.defineProperty(l, "ref", {
          get: d,
          configurable: !0
        });
      }
    }
    var O2 = function(l, a, d, V, Z, M, x) {
      var v = {
        $$typeof: t,
        type: l,
        key: a,
        ref: d,
        props: x,
        _owner: M
      };
      return v._store = {}, Object.defineProperty(v._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(v, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: V
      }), Object.defineProperty(v, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Z
      }), Object.freeze && (Object.freeze(v.props), Object.freeze(v)), v;
    };
    function W2(l, a, d, V, Z) {
      {
        var M, x = {}, v = null, $ = null;
        d !== void 0 && (W1(d), v = "" + d), j2(a) && (W1(a.key), v = "" + a.key), B2(a) && ($ = a.ref, D2(a, Z));
        for (M in a)
          d1.call(a, M) && !R2.hasOwnProperty(M) && (x[M] = a[M]);
        if (l && l.defaultProps) {
          var b = l.defaultProps;
          for (M in b)
            x[M] === void 0 && (x[M] = b[M]);
        }
        if (v || $) {
          var y = typeof l == "function" ? l.displayName || l.name || "Unknown" : l;
          v && P2(x, y), $ && z2(x, y);
        }
        return O2(l, v, $, Z, V, t1.current, x);
      }
    }
    var Z1 = j.ReactCurrentOwner, U1 = j.ReactDebugCurrentFrame;
    function N(l) {
      if (l) {
        var a = l._owner, d = o1(l.type, l._source, a ? a.type : null);
        U1.setExtraStackFrame(d);
      } else
        U1.setExtraStackFrame(null);
    }
    var L1;
    L1 = !1;
    function M1(l) {
      return typeof l == "object" && l !== null && l.$$typeof === t;
    }
    function G1() {
      {
        if (Z1.current) {
          var l = R(Z1.current.type);
          if (l)
            return `

Check the render method of \`` + l + "`.";
        }
        return "";
      }
    }
    function N2(l) {
      {
        if (l !== void 0) {
          var a = l.fileName.replace(/^.*[\\\/]/, ""), d = l.lineNumber;
          return `

Check your code at ` + a + ":" + d + ".";
        }
        return "";
      }
    }
    var q1 = {};
    function Y2(l) {
      {
        var a = G1();
        if (!a) {
          var d = typeof l == "string" ? l : l.displayName || l.name;
          d && (a = `

Check the top-level render call using <` + d + ">.");
        }
        return a;
      }
    }
    function J1(l, a) {
      {
        if (!l._store || l._store.validated || l.key != null)
          return;
        l._store.validated = !0;
        var d = Y2(a);
        if (q1[d])
          return;
        q1[d] = !0;
        var V = "";
        l && l._owner && l._owner !== Z1.current && (V = " It was passed a child from " + R(l._owner.type) + "."), N(l), E('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', d, V), N(null);
      }
    }
    function X1(l, a) {
      {
        if (typeof l != "object")
          return;
        if (x1(l))
          for (var d = 0; d < l.length; d++) {
            var V = l[d];
            M1(V) && J1(V, a);
          }
        else if (M1(l))
          l._store && (l._store.validated = !0);
        else if (l) {
          var Z = O(l);
          if (typeof Z == "function" && Z !== l.entries)
            for (var M = Z.call(l), x; !(x = M.next()).done; )
              M1(x.value) && J1(x.value, a);
        }
      }
    }
    function U2(l) {
      {
        var a = l.type;
        if (a == null || typeof a == "string")
          return;
        var d;
        if (typeof a == "function")
          d = a.propTypes;
        else if (typeof a == "object" && (a.$$typeof === u || a.$$typeof === w))
          d = a.propTypes;
        else
          return;
        if (d) {
          var V = R(a);
          T2(d, l.props, "prop", V, l);
        } else if (a.PropTypes !== void 0 && !L1) {
          L1 = !0;
          var Z = R(a);
          E("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Z || "Unknown");
        }
        typeof a.getDefaultProps == "function" && !a.getDefaultProps.isReactClassApproved && E("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function G2(l) {
      {
        for (var a = Object.keys(l.props), d = 0; d < a.length; d++) {
          var V = a[d];
          if (V !== "children" && V !== "key") {
            N(l), E("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", V), N(null);
            break;
          }
        }
        l.ref !== null && (N(l), E("Invalid attribute `ref` supplied to `React.Fragment`."), N(null));
      }
    }
    function K1(l, a, d, V, Z, M) {
      {
        var x = F2(l);
        if (!x) {
          var v = "";
          (l === void 0 || typeof l == "object" && l !== null && Object.keys(l).length === 0) && (v += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var $ = N2(Z);
          $ ? v += $ : v += G1();
          var b;
          l === null ? b = "null" : x1(l) ? b = "array" : l !== void 0 && l.$$typeof === t ? (b = "<" + (R(l.type) || "Unknown") + " />", v = " Did you accidentally export a JSX literal instead of a component?") : b = typeof l, E("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", b, v);
        }
        var y = W2(l, a, d, Z, M);
        if (y == null)
          return y;
        if (x) {
          var S = a.children;
          if (S !== void 0)
            if (V)
              if (x1(S)) {
                for (var Y = 0; Y < S.length; Y++)
                  X1(S[Y], l);
                Object.freeze && Object.freeze(S);
              } else
                E("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              X1(S, l);
        }
        return l === h ? G2(y) : U2(y), y;
      }
    }
    function q2(l, a, d) {
      return K1(l, a, d, !0);
    }
    function J2(l, a, d) {
      return K1(l, a, d, !1);
    }
    var X2 = J2, K2 = q2;
    l1.Fragment = h, l1.jsx = X2, l1.jsxs = K2;
  }()), l1;
}
(function(C) {
  process.env.NODE_ENV === "production" ? C.exports = Q2() : C.exports = e0();
})(E1);
const e = E1.exports.jsx, n = E1.exports.jsxs;
var C0 = /* @__PURE__ */ ((C) => (C.PRIMARY = "primary", C.SUCCESS = "success", C.WARNING = "warning", C.DANGER = "danger", C))(C0 || {});
const t0 = ({
  children: C,
  disabled: t,
  onClick: i,
  variant: h = "primary",
  ...s
}) => /* @__PURE__ */ e("button", {
  disabled: t,
  onClick: (f) => {
    t || i && i(f);
  },
  ...s,
  children: C
}), u3 = r(t0)`
  background-color: var(
    --${(C) => {
  var t;
  return C.disabled ? "gray" : (t = C.variant) != null ? t : "primary";
}}
  );
  border-radius: 6px;
  border: none;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
  color: var(
    ${(C) => C.variant && C.variant === "success" ? "--dark" : "--light"}
  );
  cursor: ${(C) => C.disabled ? "default" : "pointer"};
  font-weight: 600;
  letter-spacing: 1px;
  opacity: ${(C) => C.disabled ? "0.6" : "1"};
  outline: none;
  padding: 0.8rem;
  text-transform: uppercase;
  transition: 0.4s;

  &:not([disabled]):hover {
    opacity: 0.8;
  }

  &:active {
    box-shadow: none;
  }
`, i0 = ({
  ...C
}) => /* @__PURE__ */ e("div", {
  ...C,
  onClick: C.onClick,
  children: C.children
}), _ = r(i0)`
  display: flex;
  flex-direction: ${(C) => C.direction || "row"};
  align-items: ${(C) => C.align || "stretch"};
  justify-content: ${(C) => C.justify || "stretch"};
  margin: ${(C) => C.margin || "0"};
  padding: ${(C) => C.padding || "0"};
  gap: ${(C) => C.gap || "0"};
  width: ${(C) => C.width || "auto"};
  cursor: ${(C) => C.cursor || "auto"};
`, l0 = () => /* @__PURE__ */ e("svg", {
  width: "20",
  height: "20",
  viewBox: "0 0 20 20",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  children: /* @__PURE__ */ e("g", {
    style: {
      mixBlendMode: "darken"
    },
    children: /* @__PURE__ */ e("path", {
      d: "M18 3C18.5523 3 19 3.44772 19 4C19 4.55228 18.5523 5 18 5V3ZM2 5C1.44772 5 1 4.55228 1 4C1 3.44772 1.44772 3 2 3V5ZM18 9.5C18.5523 9.5 19 9.94771 19 10.5C19 11.0523 18.5523 11.5 18 11.5V9.5ZM2 11.5C1.44772 11.5 1 11.0523 1 10.5C1 9.94771 1.44772 9.5 2 9.5V11.5ZM10 16C10.5523 16 11 16.4477 11 17C11 17.5523 10.5523 18 10 18V16ZM2 18C1.44772 18 1 17.5523 1 17C1 16.4477 1.44772 16 2 16V18ZM18 5H2V3H18V5ZM18 11.5H2V9.5H18V11.5ZM10 18H2V16H10V18Z",
      fill: "#64748B"
    })
  })
}), t2 = () => /* @__PURE__ */ e("svg", {
  width: "15",
  height: "14",
  viewBox: "0 0 15 14",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  children: /* @__PURE__ */ e("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M5.44194 10.3391C5.24098 10.1301 5.24749 9.79777 5.4565 9.59681L8.21292 7.00024L5.4565 4.40368C5.24749 4.20271 5.24098 3.87037 5.44194 3.66136C5.64291 3.45236 5.97526 3.44584 6.18426 3.64681L9.33426 6.62181C9.4372 6.72079 9.49538 6.85743 9.49538 7.00024C9.49538 7.14305 9.4372 7.2797 9.33426 7.37868L6.18426 10.3537C5.97526 10.5546 5.64291 10.5481 5.44194 10.3391Z",
    fill: "#2869FE"
  })
}), n0 = () => /* @__PURE__ */ e("svg", {
  width: "20",
  height: "20",
  viewBox: "0 0 20 20",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  children: /* @__PURE__ */ e("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M5.23017 7.20962C5.52875 6.92253 6.00353 6.93183 6.29063 7.23041L10 11.1682L13.7094 7.23041C13.9965 6.93183 14.4713 6.92253 14.7698 7.20962C15.0684 7.49672 15.0777 7.9715 14.7906 8.27008L10.5406 12.7701C10.3992 12.9171 10.204 13.0002 10 13.0002C9.79599 13.0002 9.60078 12.9171 9.45938 12.7701L5.20938 8.27008C4.92228 7.9715 4.93159 7.49672 5.23017 7.20962Z",
    fill: "#64748B"
  })
}), p2 = ({
  themeColor: C
}) => /* @__PURE__ */ e("svg", {
  width: "8",
  height: "6",
  viewBox: "0 0 8 6",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  children: /* @__PURE__ */ e("path", {
    d: "M0.935515 2.4141L3.52552 5.0041C3.91552 5.3941 4.54552 5.3941 4.93552 5.0041L7.52552 2.4141C8.15552 1.7841 7.70551 0.704102 6.81552 0.704102H1.63552C0.745515 0.704102 0.305515 1.7841 0.935515 2.4141Z",
    fill: C || "#64748B"
  })
}), a0 = ({
  menuIconColor: C
}) => C ? /* @__PURE__ */ n("svg", {
  width: "17",
  height: "18",
  viewBox: "0 0 17 18",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  children: [/* @__PURE__ */ e("path", {
    d: "M0 1.50024C0 0.947959 0.447715 0.500244 1 0.500244H3.43478C3.98707 0.500244 4.43478 0.947959 4.43478 1.50024V3.93503C4.43478 4.48731 3.98707 4.93503 3.43478 4.93503H1C0.447715 4.93503 0 4.48731 0 3.93503V1.50024Z",
    fill: C
  }), /* @__PURE__ */ e("path", {
    d: "M0 7.78285C0 7.23057 0.447715 6.78285 1 6.78285H3.43478C3.98707 6.78285 4.43478 7.23057 4.43478 7.78285V10.2176C4.43478 10.7699 3.98707 11.2176 3.43478 11.2176H1C0.447715 11.2176 0 10.7699 0 10.2176V7.78285Z",
    fill: C
  }), /* @__PURE__ */ e("path", {
    d: "M0 14.0655C0 13.5132 0.447715 13.0655 1 13.0655H3.43478C3.98707 13.0655 4.43478 13.5132 4.43478 14.0655V16.5002C4.43478 17.0525 3.98707 17.5002 3.43478 17.5002H1C0.447715 17.5002 0 17.0525 0 16.5002V14.0655Z",
    fill: C
  }), /* @__PURE__ */ e("path", {
    d: "M6.28261 1.50024C6.28261 0.947959 6.73032 0.500244 7.28261 0.500244H9.71739C10.2697 0.500244 10.7174 0.947959 10.7174 1.50024V3.93503C10.7174 4.48731 10.2697 4.93503 9.71739 4.93503H7.28261C6.73032 4.93503 6.28261 4.48731 6.28261 3.93503V1.50024Z",
    fill: C
  }), /* @__PURE__ */ e("path", {
    d: "M6.28261 7.78285C6.28261 7.23057 6.73032 6.78285 7.28261 6.78285H9.71739C10.2697 6.78285 10.7174 7.23057 10.7174 7.78285V10.2176C10.7174 10.7699 10.2697 11.2176 9.71739 11.2176H7.28261C6.73032 11.2176 6.28261 10.7699 6.28261 10.2176V7.78285Z",
    fill: C
  }), /* @__PURE__ */ e("path", {
    d: "M6.28261 14.0655C6.28261 13.5132 6.73032 13.0655 7.28261 13.0655H9.71739C10.2697 13.0655 10.7174 13.5132 10.7174 14.0655V16.5002C10.7174 17.0525 10.2697 17.5002 9.71739 17.5002H7.28261C6.73032 17.5002 6.28261 17.0525 6.28261 16.5002V14.0655Z",
    fill: C
  }), /* @__PURE__ */ e("path", {
    d: "M12.5652 1.50024C12.5652 0.947959 13.0129 0.500244 13.5652 0.500244H16C16.5523 0.500244 17 0.947959 17 1.50024V3.93503C17 4.48731 16.5523 4.93503 16 4.93503H13.5652C13.0129 4.93503 12.5652 4.48731 12.5652 3.93503V1.50024Z",
    fill: C
  }), /* @__PURE__ */ e("path", {
    d: "M12.5652 7.78285C12.5652 7.23057 13.0129 6.78285 13.5652 6.78285H16C16.5523 6.78285 17 7.23057 17 7.78285V10.2176C17 10.7699 16.5523 11.2176 16 11.2176H13.5652C13.0129 11.2176 12.5652 10.7699 12.5652 10.2176V7.78285Z",
    fill: C
  }), /* @__PURE__ */ e("path", {
    d: "M12.5652 14.0655C12.5652 13.5132 13.0129 13.0655 13.5652 13.0655H16C16.5523 13.0655 17 13.5132 17 14.0655V16.5002C17 17.0525 16.5523 17.5002 16 17.5002H13.5652C13.0129 17.5002 12.5652 17.0525 12.5652 16.5002V14.0655Z",
    fill: C
  })]
}) : /* @__PURE__ */ n("svg", {
  width: "17",
  height: "18",
  viewBox: "0 0 17 18",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  children: [/* @__PURE__ */ e("path", {
    d: "M0 1.50024C0 0.947959 0.447715 0.500244 1 0.500244H3.43478C3.98707 0.500244 4.43478 0.947959 4.43478 1.50024V3.93503C4.43478 4.48731 3.98707 4.93503 3.43478 4.93503H1C0.447715 4.93503 0 4.48731 0 3.93503V1.50024Z",
    fill: "#64748B"
  }), /* @__PURE__ */ e("path", {
    d: "M0 7.78285C0 7.23057 0.447715 6.78285 1 6.78285H3.43478C3.98707 6.78285 4.43478 7.23057 4.43478 7.78285V10.2176C4.43478 10.7699 3.98707 11.2176 3.43478 11.2176H1C0.447715 11.2176 0 10.7699 0 10.2176V7.78285Z",
    fill: "#64748B"
  }), /* @__PURE__ */ e("path", {
    d: "M0 14.0655C0 13.5132 0.447715 13.0655 1 13.0655H3.43478C3.98707 13.0655 4.43478 13.5132 4.43478 14.0655V16.5002C4.43478 17.0525 3.98707 17.5002 3.43478 17.5002H1C0.447715 17.5002 0 17.0525 0 16.5002V14.0655Z",
    fill: "#64748B"
  }), /* @__PURE__ */ e("path", {
    d: "M6.28261 1.50024C6.28261 0.947959 6.73032 0.500244 7.28261 0.500244H9.71739C10.2697 0.500244 10.7174 0.947959 10.7174 1.50024V3.93503C10.7174 4.48731 10.2697 4.93503 9.71739 4.93503H7.28261C6.73032 4.93503 6.28261 4.48731 6.28261 3.93503V1.50024Z",
    fill: "#64748B"
  }), /* @__PURE__ */ e("path", {
    d: "M6.28261 7.78285C6.28261 7.23057 6.73032 6.78285 7.28261 6.78285H9.71739C10.2697 6.78285 10.7174 7.23057 10.7174 7.78285V10.2176C10.7174 10.7699 10.2697 11.2176 9.71739 11.2176H7.28261C6.73032 11.2176 6.28261 10.7699 6.28261 10.2176V7.78285Z",
    fill: "#64748B"
  }), /* @__PURE__ */ e("path", {
    d: "M6.28261 14.0655C6.28261 13.5132 6.73032 13.0655 7.28261 13.0655H9.71739C10.2697 13.0655 10.7174 13.5132 10.7174 14.0655V16.5002C10.7174 17.0525 10.2697 17.5002 9.71739 17.5002H7.28261C6.73032 17.5002 6.28261 17.0525 6.28261 16.5002V14.0655Z",
    fill: "#64748B"
  }), /* @__PURE__ */ e("path", {
    d: "M12.5652 1.50024C12.5652 0.947959 13.0129 0.500244 13.5652 0.500244H16C16.5523 0.500244 17 0.947959 17 1.50024V3.93503C17 4.48731 16.5523 4.93503 16 4.93503H13.5652C13.0129 4.93503 12.5652 4.48731 12.5652 3.93503V1.50024Z",
    fill: "#64748B"
  }), /* @__PURE__ */ e("path", {
    d: "M12.5652 7.78285C12.5652 7.23057 13.0129 6.78285 13.5652 6.78285H16C16.5523 6.78285 17 7.23057 17 7.78285V10.2176C17 10.7699 16.5523 11.2176 16 11.2176H13.5652C13.0129 11.2176 12.5652 10.7699 12.5652 10.2176V7.78285Z",
    fill: "#64748B"
  }), /* @__PURE__ */ e("path", {
    d: "M12.5652 14.0655C12.5652 13.5132 13.0129 13.0655 13.5652 13.0655H16C16.5523 13.0655 17 13.5132 17 14.0655V16.5002C17 17.0525 16.5523 17.5002 16 17.5002H13.5652C13.0129 17.5002 12.5652 17.0525 12.5652 16.5002V14.0655Z",
    fill: "#64748B"
  })]
}), u2 = () => /* @__PURE__ */ e("svg", {
  width: "31",
  height: "30",
  viewBox: "0 0 31 30",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  children: /* @__PURE__ */ e("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M4.25 7.5C4.25 5.42893 5.92893 3.75 8 3.75H10.8125C12.8836 3.75 14.5625 5.42893 14.5625 7.5V10.3125C14.5625 12.3836 12.8836 14.0625 10.8125 14.0625H8C5.92893 14.0625 4.25 12.3836 4.25 10.3125V7.5ZM16.4375 7.5C16.4375 5.42893 18.1164 3.75 20.1875 3.75H23C25.0711 3.75 26.75 5.42893 26.75 7.5V10.3125C26.75 12.3836 25.0711 14.0625 23 14.0625H20.1875C18.1164 14.0625 16.4375 12.3836 16.4375 10.3125V7.5ZM4.25 19.6875C4.25 17.6164 5.92893 15.9375 8 15.9375H10.8125C12.8836 15.9375 14.5625 17.6164 14.5625 19.6875V22.5C14.5625 24.5711 12.8836 26.25 10.8125 26.25H8C5.92893 26.25 4.25 24.5711 4.25 22.5V19.6875ZM16.4375 19.6875C16.4375 17.6164 18.1164 15.9375 20.1875 15.9375H23C25.0711 15.9375 26.75 17.6164 26.75 19.6875V22.5C26.75 24.5711 25.0711 26.25 23 26.25H20.1875C18.1164 26.25 16.4375 24.5711 16.4375 22.5V19.6875Z",
    fill: "#64748B"
  })
}), V2 = ({
  color: C
}) => /* @__PURE__ */ n("svg", {
  width: "23",
  height: "22",
  viewBox: "0 0 23 22",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  children: [/* @__PURE__ */ e("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M14.9998 7.03601C14.9998 9.26537 13.1196 11.0723 10.7998 11.0723C8.48 11.0723 6.5998 9.26537 6.5998 7.03601C6.5998 4.80665 8.48 2.99976 10.7998 2.99976C13.1196 2.99976 14.9998 4.80665 14.9998 7.03601Z",
    stroke: C ? `${C}` : "#2869FE",
    strokeWidth: "1.5",
    strokeLinecap: "square"
  }), /* @__PURE__ */ e("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M17.7998 19.9998H3.7998C3.7998 19.0438 3.7998 18.1344 3.7998 17.3109C3.7998 15.0803 5.68021 13.2727 7.9998 13.2727H13.5998C15.9194 13.2727 17.7998 15.0803 17.7998 17.3109C17.7998 18.1344 17.7998 19.0438 17.7998 19.9998Z",
    stroke: C ? `${C}` : "#2869FE",
    strokeWidth: "1.5",
    strokeLinecap: "square"
  })]
}), g2 = ({
  unlock: C,
  color: t,
  func: i
}) => C ? /* @__PURE__ */ e("svg", {
  width: "21",
  height: "20",
  viewBox: "0 0 21 20",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  onClick: () => {
    i();
  },
  style: {
    cursor: "pointer"
  },
  children: /* @__PURE__ */ e("path", {
    d: "M6.96449 8.8311V5.32461C6.96449 3.38803 8.59254 1.81812 10.6009 1.81812C12.6092 1.81812 14.2372 3.38803 14.2372 5.32461V5.90902M4.54025 8.8311H16.6615C17.3309 8.8311 17.8736 9.35441 17.8736 9.99993V17.0129C17.8736 17.6584 17.3309 18.1818 16.6615 18.1818H4.54025C3.87081 18.1818 3.32812 17.6584 3.32812 17.0129V9.99993C3.32812 9.35441 3.87081 8.8311 4.54025 8.8311Z",
    stroke: t ? `${t}` : "#2869FE",
    strokeWidth: "1.5"
  })
}) : /* @__PURE__ */ e("svg", {
  width: "21",
  height: "20",
  viewBox: "0 0 21 20",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  onClick: () => {
    i();
  },
  style: {
    cursor: "pointer"
  },
  children: /* @__PURE__ */ e("path", {
    d: "M6.76429 8.8311V5.32461C6.76429 3.38803 8.39235 1.81812 10.4007 1.81812C12.409 1.81812 14.037 3.38803 14.037 5.32461V8.8311M4.34005 8.8311H16.4613C17.1307 8.8311 17.6734 9.35441 17.6734 9.99993V17.0129C17.6734 17.6584 17.1307 18.1818 16.4613 18.1818H4.34005C3.67061 18.1818 3.12793 17.6584 3.12793 17.0129V9.99993C3.12793 9.35441 3.67061 8.8311 4.34005 8.8311Z",
    stroke: t ? `${t}` : "#2869FE",
    strokeWidth: "1.5"
  })
}), D = () => /* @__PURE__ */ e("svg", {
  width: "14",
  height: "15",
  viewBox: "0 0 14 15",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  children: /* @__PURE__ */ e("path", {
    d: "M7.00033 1.66675C3.78616 1.66675 1.16699 4.28591 1.16699 7.50008C1.16699 10.7142 3.78616 13.3334 7.00033 13.3334C10.2145 13.3334 12.8337 10.7142 12.8337 7.50008C12.8337 4.28591 10.2145 1.66675 7.00033 1.66675ZM6.56283 5.16675C6.56283 4.92758 6.76116 4.72925 7.00033 4.72925C7.23949 4.72925 7.43783 4.92758 7.43783 5.16675V8.08342C7.43783 8.32258 7.23949 8.52092 7.00033 8.52092C6.76116 8.52092 6.56283 8.32258 6.56283 8.08342V5.16675ZM7.53699 10.0551C7.50783 10.1309 7.46699 10.1892 7.41449 10.2476C7.35616 10.3001 7.29199 10.3409 7.22199 10.3701C7.15199 10.3992 7.07616 10.4167 7.00033 10.4167C6.92449 10.4167 6.84866 10.3992 6.77866 10.3701C6.70866 10.3409 6.64449 10.3001 6.58616 10.2476C6.53366 10.1892 6.49283 10.1309 6.46366 10.0551C6.43449 9.98508 6.41699 9.90925 6.41699 9.83342C6.41699 9.75758 6.43449 9.68175 6.46366 9.61175C6.49283 9.54175 6.53366 9.47758 6.58616 9.41925C6.64449 9.36675 6.70866 9.32592 6.77866 9.29675C6.91866 9.23842 7.08199 9.23842 7.22199 9.29675C7.29199 9.32592 7.35616 9.36675 7.41449 9.41925C7.46699 9.47758 7.50783 9.54175 7.53699 9.61175C7.56616 9.68175 7.58366 9.75758 7.58366 9.83342C7.58366 9.90925 7.56616 9.98508 7.53699 10.0551Z",
    fill: "#FF2400"
  })
}), U = () => /* @__PURE__ */ e("svg", {
  width: "14",
  height: "15",
  viewBox: "0 0 14 15",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  children: /* @__PURE__ */ e("path", {
    d: "M7.00033 1.6665C3.78616 1.6665 1.16699 4.28567 1.16699 7.49984C1.16699 10.714 3.78616 13.3332 7.00033 13.3332C10.2145 13.3332 12.8337 10.714 12.8337 7.49984C12.8337 4.28567 10.2145 1.6665 7.00033 1.6665ZM6.56283 5.1665C6.56283 4.92734 6.76116 4.729 7.00033 4.729C7.23949 4.729 7.43783 4.92734 7.43783 5.1665V8.08317C7.43783 8.32234 7.23949 8.52067 7.00033 8.52067C6.76116 8.52067 6.56283 8.32234 6.56283 8.08317V5.1665ZM7.53699 10.0548C7.50783 10.1307 7.46699 10.189 7.41449 10.2473C7.35616 10.2998 7.29199 10.3407 7.22199 10.3698C7.15199 10.399 7.07616 10.4165 7.00033 10.4165C6.92449 10.4165 6.84866 10.399 6.77866 10.3698C6.70866 10.3407 6.64449 10.2998 6.58616 10.2473C6.53366 10.189 6.49283 10.1307 6.46366 10.0548C6.43449 9.98484 6.41699 9.909 6.41699 9.83317C6.41699 9.75734 6.43449 9.6815 6.46366 9.6115C6.49283 9.5415 6.53366 9.47734 6.58616 9.419C6.64449 9.3665 6.70866 9.32567 6.77866 9.2965C6.91866 9.23817 7.08199 9.23817 7.22199 9.2965C7.29199 9.32567 7.35616 9.3665 7.41449 9.419C7.46699 9.47734 7.50783 9.5415 7.53699 9.6115C7.56616 9.6815 7.58366 9.75734 7.58366 9.83317C7.58366 9.909 7.56616 9.98484 7.53699 10.0548Z",
    fill: "#64748B"
  })
}), G = () => /* @__PURE__ */ n("svg", {
  width: "12",
  height: "13",
  viewBox: "0 0 12 13",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  children: [/* @__PURE__ */ e("path", {
    d: "M0.259766 6.73324C0.259766 3.51907 2.87893 0.899902 6.0931 0.899902C9.30727 0.899902 11.9264 3.51907 11.9264 6.73324C11.9264 9.9474 9.30727 12.5666 6.0931 12.5666C2.87893 12.5666 0.259766 9.9474 0.259766 6.73324Z",
    fill: "#49D399"
  }), /* @__PURE__ */ e("path", {
    d: "M3.05957 6.74691L4.99803 8.59985L8.65957 5.09985",
    fill: "#49D399"
  }), /* @__PURE__ */ e("path", {
    d: "M3.05957 6.74691L4.99803 8.59985L8.65957 5.09985",
    stroke: "white",
    strokeLinecap: "round"
  })]
}), r0 = ({
  color: C
}) => /* @__PURE__ */ e("svg", {
  width: "12",
  height: "12",
  viewBox: "0 0 12 12",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  children: /* @__PURE__ */ e("path", {
    d: "M6.75 0.75C6.75 0.335786 6.41421 0 6 0C5.58579 0 5.25 0.335786 5.25 0.75V5.25H0.75C0.335786 5.25 0 5.58579 0 6C0 6.41421 0.335786 6.75 0.75 6.75L5.25 6.75V11.25C5.25 11.6642 5.58579 12 6 12C6.41421 12 6.75 11.6642 6.75 11.25V6.75L11.25 6.75C11.6642 6.75 12 6.41421 12 6C12 5.58579 11.6642 5.25 11.25 5.25H6.75V0.75Z",
    fill: C || "white"
  })
}), o0 = ({
  color: C
}) => /* @__PURE__ */ n("svg", {
  width: "21",
  height: "20",
  viewBox: "0 0 21 20",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  children: [/* @__PURE__ */ e("path", {
    d: "M18.5339 10.0001C18.5339 14.6001 14.8005 18.3334 10.2005 18.3334C5.60052 18.3334 1.86719 14.6001 1.86719 10.0001C1.86719 5.40008 5.60052 1.66675 10.2005 1.66675C14.8005 1.66675 18.5339 5.40008 18.5339 10.0001Z",
    stroke: "#2869FE",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ e("path", {
    d: "M13.2916 12.65L10.7083 11.1083C10.2583 10.8416 9.8916 10.2 9.8916 9.67497V6.2583",
    stroke: "#2869FE",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })]
}), d0 = ({
  color: C
}) => /* @__PURE__ */ e("svg", {
  width: "21",
  height: "20",
  viewBox: "0 0 21 20",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  children: /* @__PURE__ */ e("path", {
    d: "M5.74186 1V7.03448M15.1863 1V7.03448M5.15158 10.0517H8.69325M15.7766 10.0517H12.2349M5.15158 13.6724H8.69325M12.2349 13.6724H15.7766M3.38075 4.01724H17.5474C18.1994 4.01724 18.728 4.55759 18.728 5.22414V17.2931C18.728 17.9597 18.1994 18.5 17.5474 18.5H3.38075C2.72875 18.5 2.2002 17.9597 2.2002 17.2931V5.22414C2.2002 4.55759 2.72875 4.01724 3.38075 4.01724Z",
    stroke: "#2869FE",
    strokeWidth: "1.5"
  })
}), h0 = ({
  color: C
}) => /* @__PURE__ */ n("svg", {
  width: "21",
  height: "20",
  viewBox: "0 0 21 20",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  children: [/* @__PURE__ */ e("path", {
    d: "M9.78385 17.5001C14.1561 17.5001 17.7005 13.9557 17.7005 9.58341C17.7005 5.21116 14.1561 1.66675 9.78385 1.66675C5.4116 1.66675 1.86719 5.21116 1.86719 9.58341C1.86719 13.9557 5.4116 17.5001 9.78385 17.5001Z",
    stroke: "#2869FE",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ e("path", {
    d: "M18.5339 18.3334L16.8672 16.6667",
    stroke: "#2869FE",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })]
}), c0 = ({
  color: C = "var(--blue_gray)"
}) => /* @__PURE__ */ e("svg", {
  width: "20",
  height: "20",
  viewBox: "0 0 20 20",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  children: /* @__PURE__ */ e("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M7.83922 1.80413C7.9327 1.3367 8.34312 1.00024 8.8198 1.00024H11.1802C11.6569 1.00024 12.0673 1.3367 12.1608 1.80413L12.4913 3.45654C13.1956 3.72483 13.8454 4.10356 14.4196 4.57157L16.0179 4.03089C16.4694 3.87814 16.966 4.06534 17.2043 4.47816L18.3845 6.52232C18.6229 6.93513 18.5367 7.45879 18.1786 7.77347L16.9119 8.8867C16.9699 9.24934 17 9.62127 17 10.0002C17 10.3792 16.9699 10.7511 16.9119 11.1138L18.1786 12.227C18.5367 12.5417 18.6229 13.0653 18.3845 13.4782L17.2043 15.5223C16.966 15.9351 16.4694 16.1223 16.0179 15.9696L14.4196 15.4289C13.8454 15.8969 13.1956 16.2757 12.4913 16.544L12.1608 18.1964C12.0673 18.6638 11.6569 19.0002 11.1802 19.0002H8.8198C8.34312 19.0002 7.9327 18.6638 7.83922 18.1964L7.50874 16.544C6.80442 16.2757 6.1546 15.8969 5.58042 15.4289L3.98213 15.9696C3.53059 16.1223 3.034 15.9351 2.79566 15.5223L1.61546 13.4782C1.37712 13.0654 1.4633 12.5417 1.82136 12.227L3.08808 11.1138C3.03011 10.7512 2.99999 10.3792 2.99999 10.0002C2.99999 9.62128 3.03011 9.24935 3.08808 8.88671L1.82136 7.77348C1.4633 7.45881 1.37712 6.93515 1.61546 6.52233L2.79566 4.47817C3.034 4.06535 3.53059 3.87815 3.98213 4.03091L5.58041 4.57158C6.15459 4.10357 6.80442 3.72483 7.50874 3.45654L7.83922 1.80413ZM9.99999 13.0002C11.6568 13.0002 13 11.6571 13 10.0002C13 8.34339 11.6568 7.00024 9.99999 7.00024C8.34314 7.00024 6.99999 8.34339 6.99999 10.0002C6.99999 11.6571 8.34314 13.0002 9.99999 13.0002Z",
    fill: C
  })
}), f0 = ({
  color: C = "var(--blue_gray)"
}) => /* @__PURE__ */ e("svg", {
  width: "20",
  height: "20",
  viewBox: "0 0 20 20",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  children: /* @__PURE__ */ e("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M7.45519 2.00431C7.68518 2.18801 7.78646 2.48927 7.71414 2.7746C7.57443 3.32583 7.5 3.90385 7.5 4.50032C7.5 8.36632 10.634 11.5003 14.5 11.5003C15.6435 11.5003 16.721 11.2267 17.6724 10.742C17.9347 10.6084 18.2509 10.6406 18.4809 10.8243C18.7109 11.008 18.8122 11.3092 18.7399 11.5946C17.8069 15.2759 14.4725 18.0003 10.5 18.0003C5.80558 18.0003 2 14.1947 2 9.50032C2 6.19176 3.89048 3.32604 6.64671 1.92205C6.909 1.78844 7.22519 1.82062 7.45519 2.00431Z",
    fill: C
  })
}), s0 = ({
  color: C = "var(--blue_gray)"
}) => /* @__PURE__ */ n("svg", {
  width: "20",
  height: "20",
  viewBox: "0 0 20 20",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  children: [/* @__PURE__ */ e("path", {
    d: "M3.77583 17.9836L16.2057 17.9982C17.185 17.9993 17.9824 17.2038 17.9835 16.2245L17.9871 13.1731C17.9874 12.897 17.7638 12.6729 17.4877 12.6726L16.712 12.6716C16.4358 12.6713 16.2117 12.8949 16.2114 13.1711L16.2078 16.2225L3.77791 16.2079L3.79245 3.77802L16.2224 3.79256L16.2188 6.84396C16.2185 7.1201 16.4421 7.34422 16.7182 7.34454L17.4939 7.34545C17.77 7.34577 17.9942 7.12218 17.9945 6.84604L17.9981 3.79463C17.9992 2.81533 17.2037 2.018 16.2244 2.01686L3.79452 2.00232C2.81522 2.00118 2.01789 2.79665 2.01675 3.77594L2.00221 16.2059C2.00106 17.1852 2.79742 17.9825 3.77583 17.9836Z",
    fill: C
  }), /* @__PURE__ */ e("path", {
    d: "M10.8926 7.49024C10.8931 7.07098 10.4084 6.83733 10.0807 7.09885L6.93887 9.60627C6.68844 9.80614 6.68799 10.1867 6.93796 10.3871L10.0739 12.9019C10.401 13.1642 10.8862 12.9317 10.8867 12.5124L10.8886 10.8883L17.4914 10.896C17.7675 10.8963 17.9917 10.6727 17.992 10.3966L17.9929 9.62089C17.9932 9.34475 17.7696 9.12063 17.4935 9.12031L10.8907 9.11259L10.8926 7.49024Z",
    fill: C
  })]
}), H0 = () => /* @__PURE__ */ n("svg", {
  width: "8",
  height: "28",
  viewBox: "0 0 8 28",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  children: [/* @__PURE__ */ e("g", {
    clipPath: "url(#clip0_1051_1505)",
    children: /* @__PURE__ */ e("rect", {
      y: "0.000244141",
      width: "8",
      height: "28",
      fill: "#2869FE"
    })
  }), /* @__PURE__ */ e("defs", {
    children: /* @__PURE__ */ e("clipPath", {
      id: "clip0_1051_1505",
      children: /* @__PURE__ */ e("path", {
        d: "M0 0.000244141C4.41828 0.000244141 8 3.58197 8 8.00024V20.0002C8 24.4185 4.41828 28.0002 0 28.0002V0.000244141Z",
        fill: "white"
      })
    })
  })]
}), p0 = ({
  iconType: C
}) => {
  switch (C) {
    case "mistake":
      return /* @__PURE__ */ e("svg", {
        width: "20",
        height: "20",
        viewBox: "0 0 20 20",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: /* @__PURE__ */ e("path", {
          d: "M15 10.0002H5",
          stroke: "white",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        })
      });
    default:
      return /* @__PURE__ */ e("svg", {
        width: "20",
        height: "20",
        viewBox: "0 0 20 20",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: /* @__PURE__ */ e("path", {
          d: "M4.16699 10.8335L7.50033 14.1668L15.8337 5.8335",
          stroke: "white",
          strokeWidth: "2",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        })
      });
  }
}, p = {
  theme: {
    light: {
      bg_color: "var(--bg_light)"
    },
    dark: {
      bg_color: "var(--bg_dark)"
    },
    header_height: "57px",
    transition: "0.15s ease-out"
  },
  media: {
    phone: "(max-width: 430px)",
    tablet: "(max-width: 768px)",
    laptop: "(max-width: 1024px)"
  }
}, u0 = [{
  id: 1,
  name: "WorkPlace",
  path: "https://workplace.avn.kg/",
  icon: null
}, {
  id: 2,
  name: "AVN 13",
  path: "https://workplace.avn.kg/",
  icon: null
}, {
  id: 3,
  name: "AVN Visa",
  path: "https://workplace.avn.kg/",
  icon: null
}, {
  id: 4,
  name: "AVN Campus",
  path: "https://workplace.avn.kg/",
  icon: null
}, {
  id: 5,
  name: "AVN 11",
  path: "https://workplace.avn.kg/",
  icon: null
}, {
  id: 6,
  name: "WorkPlace",
  path: "https://workplace.avn.kg/",
  icon: null
}, {
  id: 7,
  name: "AVN 13",
  path: "https://workplace.avn.kg/",
  icon: null
}, {
  id: 8,
  name: "AVN Visa",
  path: "https://workplace.avn.kg/",
  icon: null
}];
function w2(C) {
  const t = u1(null), [i, h] = k(!1), s = () => {
    h(!i);
  }, o = (f) => {
    const H = f.composedPath && f.composedPath();
    t.current && !H.includes(t.current) && h(!1);
  };
  return P(() => {
    document.body.addEventListener("click", o);
  }, []), /* @__PURE__ */ n(V0, {
    ref: t,
    ...C,
    children: [/* @__PURE__ */ e(g0, {
      onClick: s,
      children: /* @__PURE__ */ e(a0, {
        menuIconColor: C.menuIconColor
      })
    }), /* @__PURE__ */ e(w0, {
      modal: i,
      children: u0.map((f, H) => /* @__PURE__ */ n(v0, {
        onClick: () => h(!1),
        href: f.path,
        children: [/* @__PURE__ */ e(x0, {
          children: f.icon ? /* @__PURE__ */ e("img", {
            src: `${`data:image/jpeg;base64,${f.icon}`}`,
            alt: f.name
          }) : /* @__PURE__ */ e(u2, {})
        }), /* @__PURE__ */ e(m0, {
          children: f.name
        })]
      }, f.id))
    })]
  });
}
const V0 = r.div`
  /* display: flex;
    align-items: center; */
  @media ${(C) => {
  var t, i;
  return ((i = (t = C == null ? void 0 : C.theme) == null ? void 0 : t.media) == null ? void 0 : i.phone) || p.media.phone;
}} {
    display: ${(C) => C.auto_media ? "none" : "block"};
  }
`, g0 = r.div`
  display: flex;
  align-items: center;
  max-width: 17px;
  max-height: 17px;
  width: 100%;
  cursor: pointer;
  svg {
    width: 17px;
    height: 17px;
    object-fit: cover;
  }
`, w0 = r.ul`
  max-height: 324px;
  overflow-y: auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 24px;
  opacity: ${(C) => C.modal ? "1" : "0"};
  visibility: ${(C) => C.modal ? "visible" : "hidden"};
  top: ${(C) => {
  var t, i;
  return ((i = (t = C == null ? void 0 : C.theme) == null ? void 0 : t.theme) == null ? void 0 : i.header_height) || p.theme.header_height;
}};
  right: 0;
  position: absolute;
  padding: 20px;
  background: var(--white);
  box-shadow: 0px 4px 40px 4px rgba(66, 133, 244, 0.1);
  border-radius: 0px 0px 0px 6px;
  transition: ${(C) => {
  var t, i;
  return ((i = (t = C == null ? void 0 : C.theme) == null ? void 0 : t.theme) == null ? void 0 : i.transition) || p.theme.transition;
}};
  z-index: ${(C) => C.modal ? "1" : "-10"};
`, v0 = r.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  width: 65px;
  text-decoration: none;
  transition: ${(C) => {
  var t, i;
  return ((i = (t = C == null ? void 0 : C.theme) == null ? void 0 : t.theme) == null ? void 0 : i.transition) || p.theme.transition;
}};
  cursor: pointer;

  :hover div {
    color: var(--main_color);
  }
`, x0 = r.div`
  max-width: 30px;
  max-height: 30px;
  width: 100%;
  height: 100%;
  overflow: hidden;
  img {
    width: 100%;
    /* height: 30px; */
    object-fit: cover;
  }
  svg {
    width: 30px;
    height: 30px;
    object-fit: cover;
  }
`, m0 = r.div`
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: var(--blue_gray);
  text-align: center;
`, f1 = ({
  white: C
}) => C ? /* @__PURE__ */ n("svg", {
  width: "165",
  height: "60",
  viewBox: "0 0 165 60",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  children: [/* @__PURE__ */ e("path", {
    d: "M0.498527 53.7127C0.498527 53.0905 1.08014 52.5502 2.24337 52.0917C3.4066 51.6333 5.19299 51.404 7.60254 51.404C10.1783 51.404 12.1308 51.666 13.4602 52.19C14.6235 52.6484 15.2051 53.1887 15.2051 53.8109H12.3386C12.3386 53.418 12.0062 53.0905 11.3415 52.8285C10.5937 52.5338 9.43048 52.3864 7.85181 52.3864C6.10696 52.3864 4.90219 52.5174 4.23748 52.7794C3.65587 53.0086 3.36506 53.2706 3.36506 53.5653C3.36506 53.86 3.53124 54.0729 3.86359 54.2039C4.27903 54.3676 5.02682 54.5313 6.10696 54.6951C8.01798 55.0225 10.1783 55.3991 12.5878 55.8248C13.2525 55.9231 13.8757 56.0868 14.4573 56.316C15.3713 56.6762 15.8282 57.1019 15.8282 57.5931C15.8282 58.2481 15.2466 58.8048 14.0834 59.2632C12.8371 59.7544 10.8014 60 7.97644 60C5.23454 60 3.1158 59.7053 1.62021 59.1158C0.540071 58.6901 0 58.068 0 57.2493H2.86653C2.86653 57.8387 3.19888 58.2644 3.86359 58.5264C4.77755 58.8866 6.19005 59.0667 8.10107 59.0667C9.84592 59.0667 11.1338 58.903 11.9647 58.5755C12.6294 58.3136 12.9617 58.0516 12.9617 57.7896C12.9617 57.4949 12.7124 57.2493 12.2139 57.0528C11.7985 56.8891 11.1338 56.7253 10.2198 56.5616C9.38893 56.3979 8.30879 56.2014 6.97938 55.9722C5.4838 55.7102 4.27903 55.4974 3.36506 55.3336C2.70036 55.2354 2.11874 55.088 1.62021 54.8915C0.872423 54.5968 0.498527 54.2039 0.498527 53.7127Z",
    fill: "white"
  }), /* @__PURE__ */ e("path", {
    d: "M48.8515 55.702C48.8515 54.3267 49.8485 53.246 51.8427 52.4601C53.5875 51.7724 55.7062 51.4286 58.1989 51.4286C60.6915 51.4286 62.8103 51.7724 64.5551 52.4601C66.5492 53.246 67.5463 54.3267 67.5463 55.702C67.5463 57.0774 66.5492 58.158 64.5551 58.9439C62.8103 59.6316 60.6915 59.9754 58.1989 59.9754C55.7062 59.9754 53.5875 59.6316 51.8427 58.9439C49.8485 58.158 48.8515 57.0774 48.8515 55.702ZM58.1989 52.3619C56.6202 52.3619 55.2077 52.6075 53.9614 53.0987C52.5489 53.6554 51.8427 54.5232 51.8427 55.702C51.8427 56.8809 52.5489 57.7487 53.9614 58.3054C55.2077 58.7966 56.6202 59.0422 58.1989 59.0422C59.7775 59.0422 61.19 58.7966 62.4364 58.3054C63.8489 57.7487 64.5551 56.8809 64.5551 55.702C64.5551 54.5232 63.8489 53.6554 62.4364 53.0987C61.19 52.6075 59.7775 52.3619 58.1989 52.3619Z",
    fill: "white"
  }), /* @__PURE__ */ e("path", {
    d: "M100.57 51.5023H114.902V52.4356H103.436V55.1863H112.41V56.1195H103.436V59.9018H100.57V51.5023Z",
    fill: "white"
  }), /* @__PURE__ */ e("path", {
    d: "M147.925 51.5023H165V52.4356H157.896V59.9018H155.029V52.4356H147.925V51.5023Z",
    fill: "white"
  }), /* @__PURE__ */ e("path", {
    d: "M72.9765 42.3165L45.2055 0H59.6646L77.3541 26.9546C77.6476 27.4018 78.3113 27.4018 78.6048 26.9546L96.2943 0H110.753L82.9824 42.3165C80.6342 45.8945 75.3247 45.8945 72.9765 42.3165Z",
    fill: "white"
  }), /* @__PURE__ */ e("path", {
    d: "M38.2111 2.68353L66.3014 45H51.6761L33.7832 18.0454C33.4863 17.5982 32.815 17.5982 32.5181 18.0454L23.8586 31.0905H39.0308L46.523 42.3771H16.3664L14.6253 45H0L28.0903 2.68352C30.4654 -0.894499 35.836 -0.894499 38.2111 2.68353Z",
    fill: "white"
  }), /* @__PURE__ */ e("path", {
    d: "M116.781 5.8681V45H129.49V20.8537L155.008 43.4737C158.854 46.8771 165 44.2063 165 39.1319V0H152.291L152.291 24.1463L126.773 1.52632C122.927 -1.87714 116.781 0.793667 116.781 5.8681Z",
    fill: "white"
  })]
}) : /* @__PURE__ */ n("svg", {
  width: "48",
  height: "18",
  viewBox: "0 0 48 18",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  children: [/* @__PURE__ */ e("path", {
    d: "M33.7999 1.67789C33.9235 1.14544 34.3001 0.745241 34.8435 0.568883C34.9531 0.533326 35.2405 0.517348 35.4821 0.533326C36.3522 0.591012 36.5254 0.724236 40.2939 4.23565L43.7445 7.45092L43.764 3.97558L43.7835 0.500244H45.5861H47.3887L47.3669 6.37221L47.3452 12.2442L47.1556 12.6172C46.8842 13.1511 46.4849 13.3495 45.7658 13.3078C44.8314 13.2536 44.6936 13.1486 40.8289 9.54959L37.3683 6.32698L37.3488 9.78986L37.3293 13.2527H35.5297H33.7301L33.7319 7.60785C33.7329 4.50323 33.7635 1.83467 33.7999 1.67789Z",
    fill: "#5183F4"
  }), /* @__PURE__ */ e("path", {
    d: "M14.2413 1.76904C13.8205 1.12601 13.4763 0.577434 13.4763 0.550054C13.4763 0.522674 14.4637 0.500694 15.6704 0.501219L17.8646 0.502119L20.3026 4.26656C21.6434 6.33696 22.7915 8.09409 22.8539 8.17121C22.9596 8.30188 23.1412 8.04473 25.5129 4.40586L28.0584 0.500244H30.298H32.5376L28.6142 6.37011C24.3301 12.7798 24.0622 13.1328 23.3139 13.3551C22.6588 13.5496 22.1657 13.3728 21.5279 12.7147C21.2915 12.4709 19.9439 10.486 18.0733 7.6266C16.3864 5.04798 14.662 2.41206 14.2413 1.76904Z",
    fill: "#FFDF00"
  }), /* @__PURE__ */ e("path", {
    d: "M7.40132 9.47701L5.226 12.7968H7.14068L13.8297 12.7776L11.6877 9.477L7.40132 9.47701Z",
    fill: "#FF2400"
  }), /* @__PURE__ */ e("path", {
    d: "M11.7294 1.55089C11.3418 1.15077 10.843 0.847336 10.3629 0.719662C9.87691 0.590412 9.48984 0.628971 8.97449 0.857914C8.14108 1.22811 8.0062 1.41474 4.10021 7.6044C2.09816 10.7769 0.472296 13.3848 0.487224 13.3996C0.498698 13.4111 2.30509 13.4159 4.82249 13.4126L7.42787 9.43649L9.92312 5.62852C9.9481 5.62627 11.1127 7.37823 12.5111 9.52184L15.0537 13.4193L17.2559 13.4226C19.0008 13.4252 19.4505 13.4062 19.4217 13.3311C19.3138 13.0497 11.9619 1.79094 11.7294 1.55089Z",
    fill: "#FF2400"
  }), /* @__PURE__ */ e("path", {
    d: "M0.143199 15.7188C0.143199 15.5425 0.310265 15.3894 0.644397 15.2595C0.978529 15.1296 1.49166 15.0647 2.18379 15.0647C2.92365 15.0647 3.48452 15.1389 3.86638 15.2874C4.20052 15.4173 4.36758 15.5704 4.36758 15.7466H3.54419C3.54419 15.6353 3.44872 15.5425 3.25779 15.4683C3.04299 15.3848 2.70886 15.343 2.25539 15.343C1.75419 15.343 1.40813 15.3802 1.2172 15.4544C1.05013 15.5193 0.966596 15.5936 0.966596 15.6771C0.966596 15.7606 1.01433 15.8209 1.1098 15.858C1.22913 15.9044 1.44393 15.9508 1.75419 15.9972C2.30312 16.0899 2.92365 16.1966 3.61579 16.3173C3.80672 16.3451 3.98572 16.3915 4.15278 16.4564C4.41532 16.5585 4.54658 16.6791 4.54658 16.8183C4.54658 17.0038 4.37952 17.1616 4.04538 17.2915C3.68738 17.4306 3.10265 17.5002 2.29119 17.5002C1.50359 17.5002 0.894996 17.4167 0.465398 17.2497C0.155133 17.1291 0 16.9528 0 16.7209H0.823397C0.823397 16.8879 0.918863 17.0085 1.1098 17.0827C1.37233 17.1848 1.77806 17.2358 2.32699 17.2358C2.82819 17.2358 3.19812 17.1894 3.43679 17.0966C3.62772 17.0224 3.72318 16.9482 3.72318 16.8739C3.72318 16.7904 3.65158 16.7209 3.50839 16.6652C3.38905 16.6188 3.19812 16.5724 2.93559 16.526C2.69692 16.4796 2.38666 16.424 2.00479 16.359C1.57519 16.2848 1.22913 16.2245 0.966596 16.1781C0.775663 16.1502 0.608598 16.1085 0.465398 16.0528C0.250599 15.9693 0.143199 15.858 0.143199 15.7188Z",
    fill: "url(#paint0_linear_514_5555)"
  }), /* @__PURE__ */ e("path", {
    d: "M14.0323 16.2825C14.0323 15.8928 14.3187 15.5866 14.8915 15.3639C15.3927 15.1691 16.0013 15.0717 16.7173 15.0717C17.4333 15.0717 18.0419 15.1691 18.5431 15.3639C19.1159 15.5866 19.4023 15.8928 19.4023 16.2825C19.4023 16.6721 19.1159 16.9783 18.5431 17.201C18.0419 17.3958 17.4333 17.4933 16.7173 17.4933C16.0013 17.4933 15.3927 17.3958 14.8915 17.201C14.3187 16.9783 14.0323 16.6721 14.0323 16.2825ZM16.7173 15.3361C16.2639 15.3361 15.8581 15.4057 15.5001 15.5448C15.0944 15.7026 14.8915 15.9484 14.8915 16.2825C14.8915 16.6165 15.0944 16.8623 15.5001 17.0201C15.8581 17.1593 16.2639 17.2288 16.7173 17.2288C17.1708 17.2288 17.5765 17.1593 17.9345 17.0201C18.3403 16.8623 18.5431 16.6165 18.5431 16.2825C18.5431 15.9484 18.3403 15.7026 17.9345 15.5448C17.5765 15.4057 17.1708 15.3361 16.7173 15.3361Z",
    fill: "url(#paint1_linear_514_5555)"
  }), /* @__PURE__ */ e("path", {
    d: "M28.8881 15.0925H33.0051V15.357H29.7115V16.1363H32.2891V16.4008H29.7115V17.4724H28.8881V15.0925Z",
    fill: "url(#paint2_linear_514_5555)"
  }), /* @__PURE__ */ e("path", {
    d: "M42.4908 15.0925H47.3954V15.357H45.3548V17.4724H44.5314V15.357H42.4908V15.0925Z",
    fill: "url(#paint3_linear_514_5555)"
  }), /* @__PURE__ */ n("defs", {
    children: [/* @__PURE__ */ n("linearGradient", {
      id: "paint0_linear_514_5555",
      x1: "0",
      y1: "16.2825",
      x2: "47.3954",
      y2: "16.2825",
      gradientUnits: "userSpaceOnUse",
      children: [/* @__PURE__ */ e("stop", {
        stopColor: "#7C7C7C"
      }), /* @__PURE__ */ e("stop", {
        offset: "1",
        stopColor: "#517FA4"
      })]
    }), /* @__PURE__ */ n("linearGradient", {
      id: "paint1_linear_514_5555",
      x1: "0",
      y1: "16.2825",
      x2: "47.3954",
      y2: "16.2825",
      gradientUnits: "userSpaceOnUse",
      children: [/* @__PURE__ */ e("stop", {
        stopColor: "#7C7C7C"
      }), /* @__PURE__ */ e("stop", {
        offset: "1",
        stopColor: "#517FA4"
      })]
    }), /* @__PURE__ */ n("linearGradient", {
      id: "paint2_linear_514_5555",
      x1: "0",
      y1: "16.2825",
      x2: "47.3954",
      y2: "16.2825",
      gradientUnits: "userSpaceOnUse",
      children: [/* @__PURE__ */ e("stop", {
        stopColor: "#7C7C7C"
      }), /* @__PURE__ */ e("stop", {
        offset: "1",
        stopColor: "#517FA4"
      })]
    }), /* @__PURE__ */ n("linearGradient", {
      id: "paint3_linear_514_5555",
      x1: "0",
      y1: "16.2825",
      x2: "47.3954",
      y2: "16.2825",
      gradientUnits: "userSpaceOnUse",
      children: [/* @__PURE__ */ e("stop", {
        stopColor: "#7C7C7C"
      }), /* @__PURE__ */ e("stop", {
        offset: "1",
        stopColor: "#517FA4"
      })]
    })]
  })]
}), i2 = [{
  title: "\u0420\u0443\u0441",
  key: "ru"
}, {
  title: "\u041A\u044B\u0440\u0433",
  key: "kg"
}, {
  title: "En",
  key: "en"
}];
function v2(C) {
  let t = localStorage.getItem("lang") || "";
  const i = u1(null), [h, s] = k(!1), [o, f] = k({
    title: "\u0420\u0443\u0441",
    key: "ru"
  });
  P(() => {
    if (t) {
      const c = i2.find((w) => w.key === t);
      f(c || o);
    }
  }, []);
  const H = (c, w) => {
    localStorage.setItem("lang", c), f({
      title: w,
      key: c
    }), u();
  }, u = () => {
    s(!h);
  }, L = (c) => {
    const w = c.composedPath && c.composedPath();
    i.current && !w.includes(i.current) && s(!1);
  };
  return P(() => {
    document.body.addEventListener("click", L);
  }, []), /* @__PURE__ */ n(Z0, {
    ref: i,
    children: [/* @__PURE__ */ n(_, {
      align: "center",
      gap: "10px",
      cursor: "pointer",
      padding: "20px",
      onClick: () => u(),
      children: [/* @__PURE__ */ e(l2, {
        active: !0,
        themeColor: C.themeColor,
        children: /* @__PURE__ */ e("div", {
          children: o.title
        })
      }), /* @__PURE__ */ e(M0, {
        modal: h,
        children: /* @__PURE__ */ e(p2, {
          themeColor: C.themeColor
        })
      })]
    }), /* @__PURE__ */ e(L0, {
      modal: h,
      children: i2.map((c, w) => {
        if (o.key !== c.key)
          return /* @__PURE__ */ e(_, {
            align: "center",
            gap: "10px",
            cursor: "pointer",
            padding: "5px",
            onClick: () => H(c.key, c.title),
            children: /* @__PURE__ */ e(l2, {
              children: c.title
            })
          }, w);
      })
    })]
  });
}
const Z0 = r.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`, L0 = r.ul`
  opacity: ${(C) => C.modal ? "1" : "0"};
  visibility: ${(C) => C.modal ? "visible" : "hidden"};
  top: ${(C) => {
  var t, i;
  return `calc(${((i = (t = C == null ? void 0 : C.theme) == null ? void 0 : t.theme) == null ? void 0 : i.header_height) || p.theme.header_height} + 1px)`;
}};
  left: 0;
  position: absolute;
  padding: 15px;
  background: var(--white);
  box-shadow: 0px 4px 40px 4px rgba(66, 133, 244, 0.1);
  border-radius: 0px 0px 4px 4px;
  transition: ${(C) => {
  var t, i;
  return ((i = (t = C == null ? void 0 : C.theme) == null ? void 0 : t.theme) == null ? void 0 : i.transition) || p.theme.transition;
}};
  z-index: ${(C) => C.modal ? "1" : "-10"};
`, l2 = r.h3`
  color: ${(C) => C.themeColor ? C.themeColor : C.active ? "var(--main_color)" : "var(--blue_gray)"};
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  transition: ${(C) => {
  var t, i;
  return ((i = (t = C == null ? void 0 : C.theme) == null ? void 0 : t.theme) == null ? void 0 : i.transition) || p.theme.transition;
}};
  & :hover {
    color: ${(C) => C.themeColor ? C.themeColor : "var(--main_color)"};
    transition: ${(C) => {
  var t, i;
  return ((i = (t = C == null ? void 0 : C.theme) == null ? void 0 : t.theme) == null ? void 0 : i.transition) || p.theme.transition;
}};
  }
`, M0 = r.div`
  display: flex;
  svg {
    transition: ${(C) => {
  var t, i;
  return ((i = (t = C == null ? void 0 : C.theme) == null ? void 0 : t.theme) == null ? void 0 : i.transition) || p.theme.transition;
}};
    transform: ${(C) => C.modal ? "scale(1, -1)" : "scale(1, 1)"};
  }
`;
function V3({
  authFunc: C,
  orgName: t,
  orgLogoPath: i,
  loginLength: h = 0,
  passwordLength: s = 0,
  appVersion: o = "\xA9 2022 App from AVN. v1.0.0"
}) {
  const [f, H] = k(!1), [u, L] = k(""), [c, w] = k(""), [m, F] = k({
    password: !1,
    login: !1
  });
  P(() => {
  }, []), window.onload = function() {
    console.log(1), T(), window.addEventListener("orientationchange", function() {
      T();
    }, !1);
  };
  function T() {
    return setTimeout(function() {
      document.body.style.height = window.outerHeight + "px", setTimeout(function() {
        window.scrollTo(0, 1);
      }, 1e4);
    }, 1e3), !1;
  }
  const I = () => {
    H(!f);
  };
  function O(A) {
    L(A.target.value);
  }
  function j(A) {
    w(A.target.value);
  }
  const E = () => {
    let A = !1, W = !1;
    return u.length < h && (A = !0), c.length < s && (W = !0), A || W ? (F({
      ...m,
      login: A,
      password: W
    }), !0) : (F({
      ...m,
      login: A,
      password: W
    }), !1);
  }, V1 = () => {
    E() || C();
  };
  return /* @__PURE__ */ n(F0, {
    children: [/* @__PURE__ */ n(b0, {
      children: [/* @__PURE__ */ e(f1, {}), /* @__PURE__ */ n(_, {
        gap: "5px",
        align: "center",
        children: [/* @__PURE__ */ e(v2, {
          themeColor: "white"
        }), /* @__PURE__ */ e(w2, {
          menuIconColor: "white"
        })]
      })]
    }), /* @__PURE__ */ e(k0, {
      children: /* @__PURE__ */ n(_0, {
        children: [/* @__PURE__ */ e(S0, {
          children: "\u0414\u043E\u0431\u0440\u043E \u043F\u043E\u0436\u0430\u043B\u043E\u0432\u0430\u0442\u044C \u0432 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u043E\u043D\u043D\u0443\u044E \u0441\u0438\u0441\u0442\u0435\u043C\u0443"
        }), /* @__PURE__ */ e(y0, {
          children: i ? /* @__PURE__ */ e("img", {
            src: i,
            alt: "organization logo"
          }) : /* @__PURE__ */ e(f1, {})
        }), /* @__PURE__ */ e(I0, {
          children: t
        }), /* @__PURE__ */ n($0, {
          children: [/* @__PURE__ */ n(_, {
            gap: "24px",
            direction: "column",
            width: "100%",
            align: "center",
            children: [/* @__PURE__ */ n(n2, {
              children: [/* @__PURE__ */ e(d2, {
                children: "\u041B\u043E\u0433\u0438\u043D"
              }), /* @__PURE__ */ n(a2, {
                invalid: m.login && m.login,
                children: [/* @__PURE__ */ e(r2, {
                  type: "text",
                  placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043B\u043E\u0433\u0438\u043D",
                  onChange: O,
                  value: u
                }), /* @__PURE__ */ e(V2, {
                  color: "var(--blue_gray)"
                })]
              }), m.login ? /* @__PURE__ */ n(o2, {
                children: [/* @__PURE__ */ e(D, {}), /* @__PURE__ */ n("span", {
                  children: ["\u041B\u043E\u0433\u0438\u043D \u043D\u0435 \u043C\u043E\u0436\u0435\u0442 \u0431\u044B\u0442\u044C \u043C\u0435\u043D\u044C\u0448\u0435 ", h, " \u0441\u0438\u043C\u043E\u0432\u043E\u043B\u043E\u0432"]
                })]
              }) : null]
            }), /* @__PURE__ */ n(n2, {
              children: [/* @__PURE__ */ e(d2, {
                children: "\u041F\u0430\u0440\u043E\u043B\u044C"
              }), /* @__PURE__ */ n(a2, {
                invalid: m.password && m.password,
                children: [/* @__PURE__ */ e(r2, {
                  type: f ? "text" : "password",
                  placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043F\u0430\u0440\u043E\u043B\u044C",
                  onChange: j,
                  value: c
                }), /* @__PURE__ */ e(g2, {
                  unlock: !!f,
                  color: "var(--blue_gray)",
                  func: I
                })]
              }), m.password ? /* @__PURE__ */ n(o2, {
                children: [/* @__PURE__ */ e(D, {}), /* @__PURE__ */ n("span", {
                  children: ["\u041F\u0430\u0440\u043E\u043B\u044C \u043D\u0435 \u043C\u043E\u0436\u0435\u0442 \u0431\u044B\u0442\u044C \u043C\u0435\u043D\u044C\u0448\u0435 ", s, " \u0441\u0438\u043C\u043E\u0432\u043E\u043B\u043E\u0432"]
                })]
              }) : null]
            })]
          }), /* @__PURE__ */ e(T0, {
            disabled: !u.length || !c.length,
            onClick: V1,
            children: "\u0412\u043E\u0439\u0442\u0438"
          })]
        })]
      })
    }), /* @__PURE__ */ e(A0, {
      children: /* @__PURE__ */ e(R0, {
        children: /* @__PURE__ */ n(E0, {
          children: [/* @__PURE__ */ e(B0, {
            children: /* @__PURE__ */ e(f1, {
              white: !0
            })
          }), /* @__PURE__ */ e(j0, {
            children: "\u041F\u0440\u043E\u0441\u0442\u044B\u0435 \u0440\u0435\u0448\u0435\u043D\u0438\u044F \u0434\u043B\u044F \u0441\u043B\u043E\u0436\u043D\u044B\u0445 \u0437\u0430\u0434\u0430\u0447"
          })]
        })
      })
    }), /* @__PURE__ */ e(D0, {
      children: o
    })]
  });
}
const F0 = r.div`
  width: 100%;
  min-height: 100vh;
  height: 100%;
  display: grid;
  grid-template-columns: minmax(650px, 1fr) minmax(360px, 1fr);
  align-items: center;
  background-image: var(--opacity_gradient), url("bg_login.jpg");
  background-size: 100%;
  overflow: hidden;

  @media ${(C) => {
  var t, i;
  return ((i = (t = C == null ? void 0 : C.theme) == null ? void 0 : t.media) == null ? void 0 : i.laptop) || p.media.laptop;
}} {
    grid-template-columns: auto;
    grid-template-rows: minmax(20%, 1fr) minmax(80%, 1fr);
    width: 100vw;
    max-height: 100vh;
    min-height: auto;
  }

  @media (max-height: 500px) {
    transition: 0.3s ease-out;
    height: 100%;
    grid-template-rows: minmax(0, 1fr) minmax(100%, 1fr);
  }

  @keyframes leftTranslate {
    0% {
      transform: translateX(-250%);
    }
    100% {
      transform: translateY(0);
    }
  }

  @keyframes opacityShow {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @keyframes rightTranslate {
    0% {
      transform: translateX(250%);
    }
    100% {
      transform: translateY(0);
    }
  }

  @keyframes topTranslate {
    0% {
      transform: translateY(-500%);
    }
    100% {
      transform: translateY(0);
    }
  }

  @keyframes bottomTranslate {
    0% {
      transform: translateY(250%);
    }
    100% {
      transform: translateY(0);
    }
  }
`, b0 = r.div`
  top: 0;
  width: 100%;
  position: absolute;
  padding: 0px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 5;

  svg {
    animation: topTranslate 1s forwards;
  }

  div {
    :nth-child(1) {
      animation: topTranslate 0.5s forwards;
    }
    :nth-child(2) {
      animation: topTranslate 1s forwards;
    }
  }

  ul {
    right: -20px !important;
  }
`, y0 = r.div`
  display: flex;
  justify-content: center;
  max-height: 90px;
  max-width: 200px;
  height: 100%;
  width: 100%;
  animation: leftTranslate 1s forwards;

  svg {
    max-height: 90px;
    height: 100%;
    object-fit: cover;
  }

  img {
    max-height: 90px;
    height: 100%;
    object-fit: cover;
  }

  @media ${(C) => {
  var t, i;
  return ((i = (t = C == null ? void 0 : C.theme) == null ? void 0 : t.media) == null ? void 0 : i.laptop) || p.media.laptop;
}} {
    animation: bottomTranslate 1s forwards;
  }
`, E0 = r.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 28px;
  animation: leftTranslate 1.3s ease-in-out forwards;

  div:nth-child(1) {
    animation: leftTranslate 1.5s ease-in-out forwards;
  }
  p:nth-child(2) {
    animation: leftTranslate 1.8s ease-in-out forwards;
  }

  @media ${(C) => {
  var t, i;
  return ((i = (t = C == null ? void 0 : C.theme) == null ? void 0 : t.media) == null ? void 0 : i.laptop) || p.media.laptop;
}} {
    flex-direction: row;
    animation: none;

    div:nth-child(1) {
      animation: leftTranslate 0.7s ease-in-out forwards;
    }
    p:nth-child(2) {
      animation: rightTranslate 0.7s ease-in-out forwards;
    }
  }

  @media (max-width: 375px) {
    gap: 10px;
  }
`, k0 = r.div`
  width: 100%;
  background-image: url("exclude_right.svg");
  background-size: cover;
  background-position: right;
  background-repeat: no-repeat;
  -webkit-transition: 0.15s ease-out;
  transition: 0.15s ease-out;
  z-index: 1;
  animation: leftTranslate 1s forwards;

  @media ${(C) => {
  var t, i;
  return ((i = (t = C == null ? void 0 : C.theme) == null ? void 0 : t.media) == null ? void 0 : i.laptop) || p.media.laptop;
}} {
    width: 100%;
    height: 100%;
    background-image: url("exclude_top.svg");
    background-size: cover;
    background-position: top;
    order: 2;
    animation: bottomTranslate 1s forwards;
  }
`, _0 = r.div`
  width: 100%;
  min-height: 100vh;
  height: 100%;
  color: var(--blue_gray);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 40px;

  @media ${(C) => {
  var t, i;
  return ((i = (t = C == null ? void 0 : C.theme) == null ? void 0 : t.media) == null ? void 0 : i.laptop) || p.media.laptop;
}} {
    height: initial;
    justify-content: start;
    padding: 0 15px;
    padding-top: 70px;
    gap: 20px;
  }

  @media (max-width: 375px) {
    padding-top: 45px;
  }
`, $0 = r.div`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  width: 100%;
  align-items: center;
  gap: 40px;

  /* @media ${(C) => {
  var t, i;
  return ((i = (t = C == null ? void 0 : C.theme) == null ? void 0 : t.media) == null ? void 0 : i.tablet) || p.media.tablet;
}} {
    padding: 40px;
    background: var(--blured);
    border-radius: 10px;
    border-top: 1px solid var(--white);
    border-bottom: 1px solid var(--white);
  } */
`, n2 = r.div`
  max-width: 400px;
  min-width: 200px;
  width: 100%;
  display: grid;
  gap: 5px;
  text-align: left;
  animation: leftTranslate 1.4s forwards;

  @media ${(C) => {
  var t, i;
  return ((i = (t = C == null ? void 0 : C.theme) == null ? void 0 : t.media) == null ? void 0 : i.laptop) || p.media.laptop;
}} {
    animation: bottomTranslate 1.4s forwards;
  }
`, a2 = r.div`
  padding: 15px 20px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 5px;
  border: 2px solid
    ${(C) => C.invalid ? "var(--red)" : "var(--stroke)"};
  border-radius: 10px;
  transition: ${(C) => {
  var t, i;
  return ((i = (t = C == null ? void 0 : C.theme) == null ? void 0 : t.theme) == null ? void 0 : i.transition) || p.theme.transition;
}};

  svg {
    max-width: 22px;
    width: 100%;
    max-height: 22px;
    object-fit: cover;
  }

  :focus-within {
    border-color: var(--main_color);
  }
`, r2 = r.input`
  border: none;
  outline: none;
  width: 100%;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  color: var(--black);
  background: none;
  ::placeholder {
    color: var(--blue_gray);
  }
`, o2 = r.div`
  display: flex;
  gap: 8px;

  svg {
    max-width: 14px;
    max-height: 14px;
    width: 100%;
    object-fit: cover;
  }
  span {
    font-weight: 400;
    font-size: 11px;
    line-height: 15px;
    color: var(--red);
  }
`, T0 = r.button`
  animation: leftTranslate 1.5s forwards;
  cursor: pointer;
  border: none;
  padding: 17px 35px;
  border-radius: 10px;
  max-width: 400px;
  width: 100%;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  /* transition: ${(C) => C.theme.theme.transition}; */
  color: var(--white);
  background: var(--main_color);
  :hover {
    background: var(--opacity_gradient);
  }

  :focus {
    background: ${(C) => C.disabled ? "var(--stroke)" : "var(--main_color)"};
    box-shadow: inset 0px 2px 4px rgba(0, 0, 0, 0.25),
      inset 0px -2px 4px rgba(255, 255, 255, 0.25);
  }

  @media ${(C) => {
  var t, i;
  return ((i = (t = C == null ? void 0 : C.theme) == null ? void 0 : t.media) == null ? void 0 : i.laptop) || p.media.laptop;
}} {
    animation: bottomTranslate 1.5s forwards;
  }
`, d2 = r.label`
  color: var(--blue_gray);
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;

  @media ${(C) => {
  var t, i;
  return ((i = (t = C == null ? void 0 : C.theme) == null ? void 0 : t.media) == null ? void 0 : i.laptop) || p.media.laptop;
}} {
    display: none;
  }
`, I0 = r.h3`
  max-width: 550px;
  text-align: center;
  font-weight: 700;
  font-size: 21px;
  line-height: 29px;
  letter-spacing: 0.005em;
  animation: leftTranslate 1.3s forwards;

  @media ${(C) => {
  var t, i;
  return ((i = (t = C == null ? void 0 : C.theme) == null ? void 0 : t.media) == null ? void 0 : i.laptop) || p.media.laptop;
}} {
    max-width: 450px;
    font-size: 18px;
    line-height: 25px;
    animation: bottomTranslate 1.3s forwards;
  }
`, S0 = r.p`
  width: 225px;
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;
  text-align: center;
  letter-spacing: 0.005em;
  animation: leftTranslate 1s forwards;

  @media ${(C) => {
  var t, i;
  return ((i = (t = C == null ? void 0 : C.theme) == null ? void 0 : t.media) == null ? void 0 : i.laptop) || p.media.laptop;
}} {
    animation: bottomTranslate 1s forwards;
  }
`, A0 = r.div`
  margin-left: -150px;
  min-height: 100vh;
  height: 100%;
  background-image: var(--opacity_gradient), url("bg_login.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  transition: ${(C) => {
  var t, i;
  return ((i = (t = C == null ? void 0 : C.theme) == null ? void 0 : t.theme) == null ? void 0 : i.transition) || p.theme.transition;
}};
  animation: opacityShow 2s forwards;
  visibility: visible;
  transition: 0.3s ease;

  @media ${(C) => {
  var t, i;
  return ((i = (t = C == null ? void 0 : C.theme) == null ? void 0 : t.media) == null ? void 0 : i.laptop) || p.media.laptop;
}} {
    margin-left: 0;
    min-height: 95vh;
  }

  @media (max-height: 500px) {
    visibility: hidden;
  }
`, R0 = r.div`
  padding-left: 120px;
  width: 100%;
  min-height: 100vh;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  opacity: 0;
  animation: opacityShow 1s ease forwards;
  transition: ${(C) => {
  var t, i;
  return ((i = (t = C == null ? void 0 : C.theme) == null ? void 0 : t.theme) == null ? void 0 : i.transition) || p.theme.transition;
}};

  @media ${(C) => {
  var t, i;
  return ((i = (t = C == null ? void 0 : C.theme) == null ? void 0 : t.media) == null ? void 0 : i.laptop) || p.media.laptop;
}} {
    padding-left: 0;
  }
`, B0 = r.div`
  max-width: 165px;
  max-height: 60px;
  width: 100%;
  height: 100%;
  overflow: hidden;
  svg {
    width: 165px;
    height: 60px;
    object-fit: cover;
  }

  @media ${(C) => {
  var t, i;
  return ((i = (t = C == null ? void 0 : C.theme) == null ? void 0 : t.media) == null ? void 0 : i.laptop) || p.media.laptop;
}} {
    max-height: 40px;
    svg {
      height: 40px;
    }
  }
`, j0 = r.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  color: var(--white);

  @media ${(C) => {
  var t, i;
  return ((i = (t = C == null ? void 0 : C.theme) == null ? void 0 : t.media) == null ? void 0 : i.laptop) || p.media.laptop;
}} {
    max-width: 150px;
  }
`, D0 = r.div`
  position: absolute;
  bottom: 20px;
  right: 20px;
  font-weight: 500;
  font-size: 10px;
  line-height: 10px;
  color: var(--white);
  transition: ${(C) => {
  var t, i;
  return ((i = (t = C == null ? void 0 : C.theme) == null ? void 0 : t.theme) == null ? void 0 : i.transition) || p.theme.transition;
}};
  animation: opacityShow 2s ease-in-out forwards;

  @media ${(C) => {
  var t, i;
  return ((i = (t = C == null ? void 0 : C.theme) == null ? void 0 : t.media) == null ? void 0 : i.laptop) || p.media.laptop;
}} {
    width: 100%;
    z-index: 1;
    bottom: 10px;
    text-align: center;
    color: var(--main_color);
    font-size: 9px;
    line-height: 9px;
    right: 0;
    letter-spacing: 0.1px;
    animation: bottomTranslate 0.3s ease-in-out forwards;
  }

  @media (max-height: 500px) {
    display: none;
  }
`;
function P0(C) {
  const {
    app_logo: t,
    logo_path: i
  } = C;
  return /* @__PURE__ */ e(z0, {
    ...C,
    children: !i && !t ? /* @__PURE__ */ e(f1, {}) : i ? /* @__PURE__ */ e("img", {
      src: i,
      alt: ""
    }) : t
  });
}
const z0 = r.div`
  max-width: 42px;
  max-height: 15px;
  width: 100%;
  height: 100%;
  overflow: hidden;
  svg {
    width: 42px;
    height: 15px;
    object-fit: cover;
  }
  img {
    max-height: 15px;
    height: 100%;
    object-fit: cover;
  }

  @media ${(C) => {
  var t, i;
  return ((i = (t = C == null ? void 0 : C.theme) == null ? void 0 : t.media) == null ? void 0 : i.phone) || p.media.phone;
}} {
    display: ${(C) => C.auto_media ? "none" : "block"};
  }
`, O0 = r.div`
  font-weight: 700;
  font-size: 16px;
  line-height: 18px;
  color: var(--black);

  @media ${(C) => {
  var t, i;
  return ((i = (t = C == null ? void 0 : C.theme) == null ? void 0 : t.media) == null ? void 0 : i.phone) || p.media.phone;
}} {
    font-size: 14px;
  }
`;
function W0(C) {
  return /* @__PURE__ */ n(_, {
    gap: "20px",
    align: "center",
    children: [/* @__PURE__ */ e(P0, {
      ...C
    }), /* @__PURE__ */ e(O0, {
      children: C == null ? void 0 : C.app_name
    })]
  });
}
function N0() {
  let C = localStorage.getItem("avatar");
  const t = C ? JSON.parse(C) : null, i = u1(null), [h, s] = k(!1);
  return /* @__PURE__ */ e(Y0, {
    ref: i,
    children: /* @__PURE__ */ n(_, {
      gap: "20px",
      align: "center",
      children: [/* @__PURE__ */ n(G0, {
        children: [/* @__PURE__ */ e("p", {
          children: "\u0423\u043B\u0443\u043A\u0431\u0435\u043A\u043E\u0432 \u0410. \u0423."
        }), /* @__PURE__ */ e("span", {
          children: "\u0421\u043F\u0435\u0446\u0438\u0430\u043B\u0438\u0441\u0442"
        })]
      }), /* @__PURE__ */ n(_, {
        gap: "10px",
        align: "center",
        children: [/* @__PURE__ */ e(U0, {
          children: /* @__PURE__ */ e("img", {
            src: `${t ? `data:image/jpeg;base64,${t}` : "./Avatar.jpg"}`,
            alt: "fio"
          })
        }), /* @__PURE__ */ e(q0, {
          modal: h,
          children: /* @__PURE__ */ e(p2, {})
        })]
      })]
    })
  });
}
const Y0 = r.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`, U0 = r.div`
  max-width: 40px;
  max-height: 40px;
  width: 100%;
  height: 100%;
  overflow: hidden;
  img {
    width: 40px;
    height: 40px;
    object-fit: cover;
  }
`, G0 = r.div`
  max-width: 200px;
  display: grid;
  justify-content: end;
  text-align: end;
  font-size: 14px;
  line-height: 18px;

  p {
    white-space: pre;
    color: var(--main_color);
    font-weight: 600;
    overflow: hidden;
  }

  span {
    white-space: pre;
    overflow: hidden;
    color: var(--blue_gray);
    font-weight: 400;
  }

  @media ${(C) => {
  var t, i;
  return ((i = (t = C == null ? void 0 : C.theme) == null ? void 0 : t.media) == null ? void 0 : i.phone) || p.media.phone;
}} {
    display: none;
  }
`, q0 = r.div`
  display: flex;
  svg {
    transition: ${(C) => {
  var t, i;
  return ((i = (t = C == null ? void 0 : C.theme) == null ? void 0 : t.theme) == null ? void 0 : i.transition) || p.theme.transition;
}};
    transform: ${(C) => C.modal ? "scale(1, -1)" : "scale(1, 1)"};
  }
`;
function J0(C) {
  return /* @__PURE__ */ n(_, {
    gap: "20px",
    align: "center",
    children: [/* @__PURE__ */ e(N0, {}), /* @__PURE__ */ e(w2, {
      ...C
    })]
  });
}
function X0() {
  return /* @__PURE__ */ n(_, {
    gap: "10px",
    align: "center",
    children: [/* @__PURE__ */ n(h2, {
      children: [/* @__PURE__ */ e(t2, {}), /* @__PURE__ */ e("a", {
        children: "appPage"
      })]
    }), /* @__PURE__ */ n(h2, {
      activeLink: !0,
      children: [/* @__PURE__ */ e(t2, {}), /* @__PURE__ */ e("a", {
        children: "subpage"
      })]
    })]
  });
}
const h2 = r.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  order: 2;
  
  svg {
    width: 14px;
    height: 14px;
    object-fit: cover;
  }

  a {
    cursor: pointer;
    color: ${(C) => C.activeLink ? "var(--main_color)" : "var(--blue_gray)"};
  }
`;
function g3() {
  return /* @__PURE__ */ e(Q0, {
    children: /* @__PURE__ */ n(_, {
      justify: "space-between",
      gap: "10px",
      padding: "0px 15px",
      width: "100%",
      children: [/* @__PURE__ */ n(_, {
        gap: "10px",
        align: "center",
        children: [/* @__PURE__ */ n(_, {
          gap: "20px",
          align: "center",
          children: [/* @__PURE__ */ e(e9, {
            children: /* @__PURE__ */ e(l0, {})
          }), /* @__PURE__ */ e(W0, {
            app_name: "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F",
            auto_media: !0
          })]
        }), /* @__PURE__ */ e(C9, {
          children: /* @__PURE__ */ e(X0, {})
        })]
      }), /* @__PURE__ */ n(_, {
        gap: "20px",
        align: "center",
        children: [/* @__PURE__ */ e(K0, {
          children: /* @__PURE__ */ e(v2, {})
        }), /* @__PURE__ */ e(J0, {
          auto_media: !0
        })]
      })]
    })
  });
}
const K0 = r.div`
  @media ${(C) => {
  var t, i;
  return ((i = (t = C == null ? void 0 : C.theme) == null ? void 0 : t.media) == null ? void 0 : i.tablet) || p.media.tablet;
}} {
    display: none;
  }
`, Q0 = r.div`
  width: 100%;
  background: var(--white);
  border-bottom: 1px solid #e3e8ef;
  display: flex;
  align-items: center;
  max-height: ${(C) => {
  var t, i;
  return ((i = (t = C == null ? void 0 : C.theme) == null ? void 0 : t.theme) == null ? void 0 : i.header_height) || p.theme.header_height;
}};
  min-height: ${(C) => {
  var t, i;
  return ((i = (t = C == null ? void 0 : C.theme) == null ? void 0 : t.theme) == null ? void 0 : i.header_height) || p.theme.header_height;
}};

  padding: 0px 5px;
  transition: ${(C) => {
  var t, i;
  return ((i = (t = C == null ? void 0 : C.theme) == null ? void 0 : t.theme) == null ? void 0 : i.transition) || p.theme.transition;
}};

  @media ${(C) => {
  var t, i;
  return ((i = (t = C == null ? void 0 : C.theme) == null ? void 0 : t.media) == null ? void 0 : i.laptop) || p.media.laptop;
}} {
    padding: 0px;
  }
`, e9 = r.div`
  display: none;
  max-width: 20px;
  max-height: 20px;
  width: 100%;
  height: 100%;
  overflow: hidden;
  cursor: pointer;
  svg {
    width: 20px;
    height: 20px;
    object-fit: cover;
  }

  @media ${(C) => {
  var t, i;
  return ((i = (t = C == null ? void 0 : C.theme) == null ? void 0 : t.media) == null ? void 0 : i.laptop) || p.media.laptop;
}} {
    display: block;
  }
`, C9 = r.div`
  @media ${(C) => {
  var t, i;
  return ((i = (t = C == null ? void 0 : C.theme) == null ? void 0 : t.media) == null ? void 0 : i.tablet) || p.media.tablet;
}} {
    display: none;
  }
`;
function t9(C) {
  return /* @__PURE__ */ e("div", {
    ...C,
    children: C.children
  });
}
const w3 = r(t9)`
  display: flex;
  align-items: ${(C) => C.align || "stretch"};
  justify-content: ${(C) => C.justify || "stretch"};
  margin: ${(C) => C.margin || "0"};
  padding: ${(C) => C.padding || "0"};
  gap: ${(C) => C.gap || "0"};
`;
function v3({
  small: C,
  big: t,
  buttonType: i,
  fullScreen: h,
  disabled: s,
  text: o,
  alignIcon: f,
  func: H,
  icon: u,
  iconPath: L,
  ...c
}) {
  return /* @__PURE__ */ e(i9, {
    size: C ? "small" : t ? "big" : "normal",
    btnType: i === "outline" ? "outline" : i === "link" ? "link" : i === "icon" ? "icon" : "normal",
    disabled: s,
    fullScreen: h,
    onClick: H ? () => H() : void 0,
    ...c,
    children: /* @__PURE__ */ n(l9, {
      size: C ? "small" : t ? "big" : "normal",
      alignIcon: i === "icon" ? f : "right",
      children: [o, i === "icon" && (u || (L ? /* @__PURE__ */ e("img", {
        src: L,
        alt: "btn icon"
      }) : /* @__PURE__ */ e(r0, {
        color: s ? "var(--stroke)" : "var(--white)"
      })))]
    })
  });
}
const i9 = r.button`
  width: ${(C) => C.fullScreen ? "100%" : "fit-content"};
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 400;
  outline: none;
  border-radius: 40px;
  border: none;
  cursor: pointer;
  transition: ${(C) => {
  var t, i;
  return ((i = (t = C == null ? void 0 : C.theme) == null ? void 0 : t.theme) == null ? void 0 : i.transition) || p.theme.transition;
}};

  ${(C) => C.size === "small" ? `padding: 4px 16px; 
         font-size: 12px; 
         line-height: 16px;` : C.size === "big" ? ` padding: 10.5px 24px; 
          font-size: 14px; 
          line-height: 19px;` : ` padding: 10.5px 24px; 
          font-size: 14px; 
          line-height: 19px;
  `};

  ${(C) => C.btnType === "outline" ? `color: var(--main_color);
         background: none;
         border: 1px solid var(--main_color);

         :hover {
            background: linear-gradient(180deg, #2869FE 0%, #023DC4 97.4%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            text-fill-color: transparent;
            box-shadow: 0px 0px 10px rgba(40, 105, 254, 0.5);
         }

         :disabled:hover {
            color: var(--blue_gray);
            background: var(--stroke);
            -webkit-background-clip:  var(--blue_gray);
            -webkit-text-fill-color:var(--blue_gray);
            background-clip:var(--blue_gray);
            text-fill-color: var(--blue_gray);
         }
         
          :active {
            box-shadow: inset 0px 1px 4px rgba(0, 0, 0, 0.25), 
                        inset 0px -1px 4px rgba(255, 255, 255, 0.25);
          }
        ` : C.btnType === "link" ? `color: var(--main_color);
         background: none;
         padding: 0;
         border-radius: 0;

         :hover {
            background: linear-gradient(180deg, #2869FE 0%, #023DC4 97.4%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            text-fill-color: transparent;
         }

         :disabled:hover {
            color: var(--blue_gray);
            background: none;
            -webkit-background-clip:  var(--blue_gray);
            -webkit-text-fill-color:var(--blue_gray);
            background-clip:var(--blue_gray);
            text-fill-color: var(--blue_gray);
         }
         
          :active {
            color: var(--main_color);
          }
        ` : `
         color: var(--white);
         background: var(--default_gradient);
         
        :hover {
          background: var(--main_gradient);
        }

        :active {
          background: var(--default_gradient);
          box-shadow: inset 0px 2px 4px rgba(0, 0, 0, 0.25),
            inset 0px -2px 4px rgba(255, 255, 255, 0.25);
        } 
  `};

  ${(C) => C.btnType === "icon" ? `
        :disabled,
        :disabled:hover,
        :disabled:active {
          background: var(--white);
          box-shadow: none;
          color: var(--stroke);
          border: 1px solid var(--stroke);
        }
        ` : C.btnType !== "link" ? `
        :disabled,
        :disabled:hover,
        :disabled:active {
          background: var(--stroke);
          box-shadow: none;
          color: var(--blue_gray);
          border: none;
        }` : `
        :disabled,
        :disabled:hover,
        :disabled:active {
          background: none;
          box-shadow: none;
          color: var(--blue_gray);
          border: none;
        }
  `}
`, l9 = r.div`
  display: flex;
  align-items: center;
  ${(C) => C.alignIcon === "left" ? "flex-direction: row-reverse;" : "flex-direction: row;"};

  gap: ${(C) => C.size === "small" ? "6px" : (C.size === "big", "10px")};

  svg {
    height: ${(C) => C.size === "small" ? "9px" : (C.size === "big", "12px")};
    object-fit: cover;
  }
  img {
    height: ${(C) => C.size === "small" ? "9px" : (C.size === "big", "12px")};
    object-fit: cover;
  }
`;
function x3({
  inputType: C,
  inputState: t,
  inputMsgs: i,
  disabled: h,
  label: s,
  placeholder: o,
  name: f,
  onChange: H,
  defaultValue: u,
  icon: L
}) {
  const [c, w] = k(!1), [m, F] = k("");
  k(new Date()), P(() => {
    u && F(u);
  }, [u]);
  const T = () => {
    w(!c);
  }, I = (O) => {
    H && H(O), F(O.target.value);
  };
  switch (C) {
    case "login":
      return /* @__PURE__ */ n(q, {
        children: [s ? /* @__PURE__ */ n(X, {
          children: [" ", s]
        }) : null, /* @__PURE__ */ n(J, {
          inputState: t,
          disabled: h,
          children: [/* @__PURE__ */ e(K, {
            type: "text",
            placeholder: o,
            disabled: h,
            onChange: I,
            value: m,
            name: f
          }), /* @__PURE__ */ e(V2, {
            iconType: ""
          })]
        }), t && !h ? /* @__PURE__ */ n(Q, {
          inputState: t,
          children: [t === "warning" && (i == null ? void 0 : i.warning) ? /* @__PURE__ */ e(U, {}) : t === "current" && (i == null ? void 0 : i.current) ? /* @__PURE__ */ e(G, {}) : t === "error" && (i == null ? void 0 : i.error) ? /* @__PURE__ */ e(D, {}) : null, /* @__PURE__ */ e("span", {
            children: i ? i[t] : null
          })]
        }) : null]
      });
    case "password":
      return /* @__PURE__ */ n(q, {
        children: [s ? /* @__PURE__ */ n(X, {
          children: [" ", s]
        }) : null, /* @__PURE__ */ n(J, {
          inputState: t,
          disabled: h,
          children: [/* @__PURE__ */ e(K, {
            type: c ? "text" : "password",
            placeholder: o,
            disabled: h,
            onChange: I,
            value: m,
            name: f
          }), /* @__PURE__ */ e(g2, {
            unlock: !!c,
            func: T,
            iconType: ""
          })]
        }), t && !h ? /* @__PURE__ */ n(Q, {
          inputState: t,
          children: [t === "warning" && (i == null ? void 0 : i.warning) ? /* @__PURE__ */ e(U, {}) : t === "current" && (i == null ? void 0 : i.current) ? /* @__PURE__ */ e(G, {}) : t === "error" && (i == null ? void 0 : i.error) ? /* @__PURE__ */ e(D, {}) : null, /* @__PURE__ */ e("span", {
            children: i ? i[t] : null
          })]
        }) : null]
      });
    case "time":
      return /* @__PURE__ */ n(q, {
        children: [s ? /* @__PURE__ */ n(X, {
          children: [" ", s]
        }) : null, /* @__PURE__ */ n(J, {
          inputState: t,
          disabled: h,
          children: [/* @__PURE__ */ e(K, {
            type: "text",
            placeholder: o,
            disabled: h,
            onChange: I,
            value: m,
            name: f
          }), /* @__PURE__ */ e(o0, {
            iconType: ""
          })]
        }), t && !h ? /* @__PURE__ */ n(Q, {
          inputState: t,
          children: [t === "warning" && (i == null ? void 0 : i.warning) ? /* @__PURE__ */ e(U, {}) : t === "current" && (i == null ? void 0 : i.current) ? /* @__PURE__ */ e(G, {}) : t === "error" && (i == null ? void 0 : i.error) ? /* @__PURE__ */ e(D, {}) : null, /* @__PURE__ */ e("span", {
            children: i ? i[t] : null
          })]
        }) : null]
      });
    case "date":
      return /* @__PURE__ */ n(q, {
        children: [s ? /* @__PURE__ */ n(X, {
          children: [" ", s]
        }) : null, /* @__PURE__ */ n(J, {
          inputState: t,
          disabled: h,
          children: [/* @__PURE__ */ e(K, {
            type: "date",
            placeholder: o,
            disabled: h,
            onChange: I,
            value: m,
            name: f
          }), /* @__PURE__ */ e("div", {
            style: {
              position: "absolute",
              right: "10px",
              top: "8px"
            },
            children: /* @__PURE__ */ e(d0, {
              iconType: ""
            })
          })]
        }), t && !h ? /* @__PURE__ */ n(Q, {
          inputState: t,
          children: [t === "warning" && (i == null ? void 0 : i.warning) ? /* @__PURE__ */ e(U, {}) : t === "current" && (i == null ? void 0 : i.current) ? /* @__PURE__ */ e(G, {}) : t === "error" && (i == null ? void 0 : i.error) ? /* @__PURE__ */ e(D, {}) : null, /* @__PURE__ */ e("span", {
            children: i ? i[t] : null
          })]
        }) : null]
      });
    case "search":
      return /* @__PURE__ */ n(q, {
        children: [s ? /* @__PURE__ */ n(X, {
          children: [" ", s]
        }) : null, /* @__PURE__ */ n(J, {
          inputState: t,
          disabled: h,
          children: [/* @__PURE__ */ e(K, {
            type: "text",
            placeholder: o,
            disabled: h,
            onChange: I,
            value: m,
            name: f
          }), /* @__PURE__ */ e(h0, {
            iconType: ""
          })]
        }), t && !h ? /* @__PURE__ */ n(Q, {
          inputState: t,
          children: [t === "warning" && (i == null ? void 0 : i.warning) ? /* @__PURE__ */ e(U, {}) : t === "current" && (i == null ? void 0 : i.current) ? /* @__PURE__ */ e(G, {}) : t === "error" && (i == null ? void 0 : i.error) ? /* @__PURE__ */ e(D, {}) : null, /* @__PURE__ */ e("span", {
            children: i ? i[t] : null
          })]
        }) : null]
      });
    default:
      return /* @__PURE__ */ n(q, {
        children: [s ? /* @__PURE__ */ n(X, {
          children: [" ", s]
        }) : null, /* @__PURE__ */ n(J, {
          inputState: t,
          disabled: h,
          children: [/* @__PURE__ */ e(K, {
            type: "text",
            placeholder: o,
            disabled: h,
            onChange: I,
            value: m,
            name: f
          }), L || null]
        }), t && !h ? /* @__PURE__ */ n(Q, {
          inputState: t,
          children: [t === "warning" && (i == null ? void 0 : i.warning) ? /* @__PURE__ */ e(U, {}) : t === "current" && (i == null ? void 0 : i.current) ? /* @__PURE__ */ e(G, {}) : t === "error" && (i == null ? void 0 : i.error) ? /* @__PURE__ */ e(D, {}) : null, /* @__PURE__ */ e("span", {
            children: i ? i[t] : null
          })]
        }) : null]
      });
  }
}
const q = r.div`
  width: 100%;
  display: grid;
  gap: 5px;
  text-align: left;
`, J = r.div`
  position: relative;
  padding: 8px 10px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 5px;
  border-radius: 6px;
  transition: ${(C) => {
  var t, i;
  return ((i = (t = C == null ? void 0 : C.theme) == null ? void 0 : t.theme) == null ? void 0 : i.transition) || p.theme.transition;
}};
  border: 1px solid var(--stroke);
  ${(C) => C.disabled ? "background: var(--stroke);" : "background: var(--white);"}
  ${(C) => !C.disabled && C.inputState === "current" ? "border: 1px solid var(--green);" : !C.disabled && C.inputState === "error" ? "border: 1px solid var(--red);" : `border: 1px solid var(--stroke);
  `}


  
  ::after svg {
    position: absolute;
  }

  img {
    height: 22px;
    width: 22px;
    object-fit: cover;
  }

  svg {
    width: 22px;
    height: 22px;
    object-fit: cover;
  }
  :focus-within {
    border-color: var(--main_color);
  }
`, X = r.label`
  color: var(--black);
  font-weight: 600;
  font-size: 14px;
  line-height: 19px;
`, K = r.input`
  border: none;
  outline: none;
  width: 100%;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  color: var(--black);
  background: none;
  -webkit-appearance: none;
  z-index: 1;
  ::placeholder {
    color: var(--blue_gray);
  }

  ::-webkit-inner-spin-button,
  ::-webkit-calendar-picker-indicator {
    background: rgb(255 255 255 / 0%);
    width: 22px;
    cursor: pointer;
    -webkit-appearance: none;
  }
`, Q = r.div`
  display: ${(C) => !C.inputState || C.inputState === "normal" ? "none" : "flex"};
  gap: 8px;

  svg {
    max-width: 14px;
    max-height: 14px;
    width: 100%;
    object-fit: cover;
  }
  span {
    font-weight: 400;
    font-size: 11px;
    line-height: 15px;
    ${(C) => C.inputState === "current" ? "color: var(--green);" : C.inputState === "error" ? "color: var(--red);" : `color: var(--blue_gray);
    `}
  }
`;
r.div`
  font-weight: 700;
  font-size: 16px;
  line-height: 18px;
  color: var(--black);

  @media ${(C) => {
  var t, i;
  return ((i = (t = C == null ? void 0 : C.theme) == null ? void 0 : t.media) == null ? void 0 : i.phone) || p.media.phone;
}} {
    font-size: 14px;
  }
`;
function m3() {
  return /* @__PURE__ */ e(_, {
    gap: "20px",
    align: "center",
    children: "SELECT"
  });
}
function F1(C) {
  return C ? /(?:\.([^.]+))?$/.exec(C)[1] : "";
}
const n9 = () => /* @__PURE__ */ n("svg", {
  id: "fileTypeId",
  width: "21",
  height: "24",
  viewBox: "0 0 21 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  children: [/* @__PURE__ */ e("g", {
    opacity: "0.3",
    children: /* @__PURE__ */ e("path", {
      opacity: "0.3",
      d: "M14.9645 4.92504C14.4177 4.92424 13.8935 4.70662 13.507 4.31989C13.1205 3.93316 12.9031 3.40891 12.9026 2.86212V0.000244141H3.68893C2.97526 0.000244141 2.29083 0.283743 1.78619 0.788383C1.28155 1.29302 0.998047 1.97747 0.998047 2.69114V18.9125C0.999107 19.6254 1.28308 20.3088 1.7876 20.8126C2.29213 21.3164 2.97596 21.5993 3.68893 21.5993H14.7495C15.4625 21.5993 16.1463 21.3164 16.6508 20.8126C17.1553 20.3088 17.4393 19.6254 17.4404 18.9125V4.92504H14.9645Z",
      fill: "#FF3E4C"
    })
  }), /* @__PURE__ */ e("path", {
    d: "M17.4402 4.92504H14.9643C14.4175 4.92424 13.8933 4.70662 13.5068 4.31989C13.1202 3.93316 12.9029 3.40891 12.9023 2.86212V0.000244141L17.4402 4.92504Z",
    fill: "#FF3E4C"
  }), /* @__PURE__ */ e("path", {
    d: "M19.3916 17.0605H6.88816C6.00123 17.0605 5.28223 17.7795 5.28223 18.6665V22.3943C5.28223 23.2813 6.00123 24.0003 6.88816 24.0003H19.3916C20.2786 24.0003 20.9976 23.2813 20.9976 22.3943V18.6665C20.9976 17.7795 20.2786 17.0605 19.3916 17.0605Z",
    fill: "#FF3E4C"
  }), /* @__PURE__ */ e("path", {
    d: "M10.2325 21.3374V22.0644H9.47949V21.3374H10.2325Z",
    fill: "white"
  }), /* @__PURE__ */ e("path", {
    d: "M11.3636 21.4773H12.6906V22.0643H10.5557V21.5113L11.8616 19.6404H10.5727V19.0574H12.6826V19.6104L11.3636 21.4773Z",
    fill: "white"
  }), /* @__PURE__ */ e("path", {
    d: "M13.8646 19.0574V22.0643H13.1406V19.0574H13.8646Z",
    fill: "white"
  }), /* @__PURE__ */ e("path", {
    d: "M15.0932 21.0093V22.0643H14.3662V19.0574H15.5402C15.8971 19.0574 16.1701 19.1454 16.3571 19.3234C16.4518 19.4161 16.5258 19.5279 16.5742 19.6513C16.6226 19.7747 16.6444 19.9069 16.6381 20.0393C16.6413 20.2142 16.5978 20.3868 16.5121 20.5393C16.4248 20.6885 16.2954 20.8085 16.1401 20.8843C15.9527 20.9724 15.7472 21.0152 15.5402 21.0093H15.0932ZM15.9011 20.0393C15.9011 19.776 15.7552 19.6427 15.4632 19.6394H15.0932V20.4213H15.4632C15.7552 20.4247 15.9011 20.2973 15.9011 20.0393V20.0393Z",
    fill: "white"
  }), /* @__PURE__ */ e("path", {
    d: "M9.21814 15.2515C8.88185 15.251 8.5595 15.1171 8.3218 14.8792C8.0841 14.6413 7.95046 14.3189 7.9502 13.9826V12.7136H10.4871V13.9826C10.4868 14.319 10.353 14.6416 10.1151 14.8796C9.87721 15.1175 9.55461 15.2513 9.21814 15.2515V15.2515ZM8.59917 13.3626V13.9826C8.59917 14.1468 8.66435 14.3044 8.7804 14.4206C8.89645 14.5368 9.05389 14.6023 9.21814 14.6025C9.38249 14.6023 9.54002 14.5369 9.65623 14.4207C9.77244 14.3045 9.83785 14.1469 9.83811 13.9826V13.3626H8.59917Z",
    fill: "#FF3E4C"
  }), /* @__PURE__ */ e("path", {
    d: "M7.94876 12.7148H9.2207V11.4429H7.94876V12.7148Z",
    fill: "#FF3E4C"
  }), /* @__PURE__ */ e("path", {
    d: "M9.21731 11.4438H10.4893V10.1719H9.21731V11.4438Z",
    fill: "#FF3E4C"
  }), /* @__PURE__ */ e("path", {
    d: "M7.94876 10.1729H9.2207V8.90091H7.94876V10.1729Z",
    fill: "#FF3E4C"
  }), /* @__PURE__ */ e("path", {
    d: "M9.21731 8.90186H10.4893V7.62991H9.21731V8.90186Z",
    fill: "#FF3E4C"
  })]
}), a9 = () => /* @__PURE__ */ n("svg", {
  id: "fileTypeId",
  width: "20",
  height: "24",
  viewBox: "0 0 20 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  children: [/* @__PURE__ */ e("g", {
    opacity: "0.3",
    children: /* @__PURE__ */ e("path", {
      opacity: "0.3",
      d: "M13.9655 4.92504C13.4188 4.92451 12.8946 4.70709 12.508 4.32052C12.1215 3.93395 11.9041 3.4098 11.9035 2.86311V0.000244141H2.68993C1.97626 0.000244141 1.29181 0.283756 0.787174 0.788395C0.282535 1.29303 -0.000976563 1.97746 -0.000976562 2.69112V18.9124C-0.000976562 19.6261 0.282535 20.3106 0.787174 20.8152C1.29181 21.3198 1.97626 21.6033 2.68993 21.6033H13.7495C14.4631 21.6033 15.1476 21.3198 15.6522 20.8152C16.1568 20.3106 16.4404 19.6261 16.4404 18.9124V4.92504H13.9655Z",
      fill: "#00C650"
    })
  }), /* @__PURE__ */ e("path", {
    d: "M16.4401 4.92504H13.9652C13.4186 4.92451 12.8944 4.70709 12.5078 4.32052C12.1213 3.93395 11.9038 3.4098 11.9033 2.86311V0.000244141L16.4401 4.92504Z",
    fill: "#00C650"
  }), /* @__PURE__ */ e("path", {
    d: "M18.3926 17.0605H5.88914C5.00221 17.0605 4.2832 17.7795 4.2832 18.6665V22.3943C4.2832 23.2813 5.00221 24.0003 5.88914 24.0003H18.3926C19.2796 24.0003 19.9985 23.2813 19.9985 22.3943V18.6665C19.9985 17.7795 19.2796 17.0605 18.3926 17.0605Z",
    fill: "#00C650"
  }), /* @__PURE__ */ e("path", {
    d: "M8.74125 21.3374V22.0644H7.98828V21.3374H8.74125Z",
    fill: "white"
  }), /* @__PURE__ */ e("path", {
    d: "M10.9442 22.0642L10.3113 21.1283L9.7663 22.0642H8.93332L9.89427 20.5163L8.90332 19.0574H9.7663L10.3833 19.9633L10.9152 19.0574H11.7442L10.7962 20.5713L11.8082 22.0642H10.9442Z",
    fill: "white"
  }), /* @__PURE__ */ e("path", {
    d: "M14.1288 21.6563C14.0425 21.7944 13.9187 21.9051 13.7718 21.9753C13.593 22.059 13.3972 22.0998 13.1998 22.0943C12.9021 22.1068 12.6088 22.0199 12.3659 21.8473C12.2584 21.7667 12.1705 21.6629 12.1087 21.5436C12.0469 21.4243 12.0128 21.2926 12.0089 21.1584H12.7829C12.7884 21.2596 12.8315 21.3552 12.9038 21.4263C12.9758 21.4935 13.0714 21.5294 13.1698 21.5263C13.2099 21.5287 13.2501 21.5231 13.288 21.5099C13.3259 21.4967 13.3609 21.4761 13.3908 21.4493C13.4175 21.4235 13.4385 21.3923 13.4524 21.3579C13.4664 21.3234 13.473 21.2865 13.4718 21.2493C13.4728 21.2141 13.4667 21.179 13.4538 21.1462C13.4409 21.1134 13.4215 21.0835 13.3968 21.0584C13.3439 21.0048 13.2811 20.962 13.2118 20.9324C13.1392 20.9004 13.0372 20.8613 12.9058 20.8153C12.7465 20.7628 12.5908 20.6997 12.4399 20.6264C12.3158 20.5625 12.2094 20.4691 12.1299 20.3544C12.0376 20.2156 11.9921 20.0509 11.9999 19.8844C11.9963 19.7194 12.0438 19.5573 12.1359 19.4204C12.2305 19.2866 12.3613 19.1826 12.5129 19.1204C12.6876 19.0493 12.8753 19.0153 13.0639 19.0204C13.3502 19.0046 13.6331 19.0892 13.8638 19.2594C13.962 19.3393 14.0425 19.4388 14.1 19.5516C14.1575 19.6644 14.1908 19.788 14.1978 19.9144H13.4108C13.4021 19.8259 13.3641 19.7429 13.3028 19.6784C13.2716 19.6484 13.2345 19.6252 13.1939 19.6101C13.1533 19.5949 13.1101 19.5882 13.0669 19.5904C12.9919 19.587 12.9182 19.6112 12.8599 19.6584C12.8329 19.6839 12.812 19.7151 12.7985 19.7497C12.785 19.7842 12.7793 19.8214 12.7819 19.8584C12.7803 19.9256 12.8055 19.9907 12.8518 20.0394C12.9016 20.0913 12.9615 20.1325 13.0278 20.1604C13.0988 20.1914 13.2008 20.2314 13.3338 20.2794C13.4961 20.3322 13.6542 20.3971 13.8068 20.4734C13.9315 20.5406 14.0389 20.6358 14.1208 20.7514C14.2141 20.8924 14.2603 21.0594 14.2528 21.2283C14.2514 21.3797 14.2086 21.5277 14.1288 21.6563Z",
    fill: "white"
  }), /* @__PURE__ */ e("path", {
    d: "M15.3812 21.5073H16.3552V22.0642H14.6553V19.0574H15.3832L15.3812 21.5073Z",
    fill: "white"
  }), /* @__PURE__ */ e("path", {
    d: "M11.888 15.0837H4.55625C3.92128 15.0837 3.4043 14.4517 3.4043 13.6738V8.355C3.4043 7.57803 3.92128 6.94604 4.55625 6.94604H11.891C12.5249 6.94604 13.0419 7.57803 13.0419 8.355V13.6738C13.0389 14.4517 12.5219 15.0837 11.888 15.0837ZM4.55625 7.66601C4.24526 7.66601 3.99329 7.97501 3.99329 8.355V13.6738C3.99329 14.0538 4.24526 14.3627 4.55625 14.3627H11.891C12.2009 14.3627 12.4529 14.0538 12.4529 13.6738V8.355C12.4529 7.97501 12.2009 7.66601 11.891 7.66601H4.55625Z",
    fill: "#00C650"
  }), /* @__PURE__ */ e("path", {
    d: "M12.7449 11.8809H3.69629V12.6018H12.7449V11.8809Z",
    fill: "#00C650"
  }), /* @__PURE__ */ e("path", {
    d: "M12.7449 9.40894H3.69629V10.1299H12.7449V9.40894Z",
    fill: "#00C650"
  }), /* @__PURE__ */ e("path", {
    d: "M10.427 7.30591H9.70605V14.7226H10.427V7.30591Z",
    fill: "#00C650"
  }), /* @__PURE__ */ e("path", {
    d: "M6.73366 7.30591H6.0127V14.7226H6.73366V7.30591Z",
    fill: "#00C650"
  })]
}), r9 = () => /* @__PURE__ */ n("svg", {
  id: "fileTypeId",
  width: "21",
  height: "24",
  viewBox: "0 0 21 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  children: [/* @__PURE__ */ e("g", {
    opacity: "0.3",
    children: /* @__PURE__ */ e("path", {
      opacity: "0.3",
      d: "M14.9651 4.92424C14.4184 4.92371 13.8942 4.7063 13.5076 4.31971C13.121 3.93313 12.9036 3.40896 12.9031 2.86224V0.000244141H3.68906C2.97536 0.000244141 2.29089 0.283758 1.78623 0.788419C1.28157 1.29308 0.998047 1.97755 0.998047 2.69124V18.9132C0.999107 19.6262 1.2831 20.3097 1.78765 20.8135C2.29219 21.3173 2.97606 21.6002 3.68906 21.6002H14.749C15.4627 21.6002 16.1472 21.3167 16.6519 20.8121C17.1565 20.3074 17.4401 19.6229 17.4401 18.9092V4.92424H14.9651Z",
      fill: "#9747FF"
    })
  }), /* @__PURE__ */ e("path", {
    d: "M17.4403 4.92424H14.9653C14.4186 4.92371 13.8944 4.7063 13.5079 4.31971C13.1213 3.93313 12.9038 3.40896 12.9033 2.86224V0.000244141L17.4403 4.92424Z",
    fill: "#9747FF"
  }), /* @__PURE__ */ e("path", {
    d: "M19.3922 17.0603H6.88823C6.00126 17.0603 5.28223 17.7793 5.28223 18.6663V22.3943C5.28223 23.2813 6.00126 24.0003 6.88823 24.0003H19.3922C20.2792 24.0003 20.9982 23.2813 20.9982 22.3943V18.6663C20.9982 17.7793 20.2792 17.0603 19.3922 17.0603Z",
    fill: "#9747FF"
  }), /* @__PURE__ */ e("path", {
    d: "M9.0821 21.3372V22.0642H8.3291V21.3372H9.0821Z",
    fill: "white"
  }), /* @__PURE__ */ e("path", {
    d: "M11.2852 22.0641L10.6511 21.1281L10.1072 22.0641H9.27314L10.2352 20.5161L9.24414 19.0571H10.1072L10.7241 19.9631L11.2552 19.0571H12.0852L11.1362 20.5711L12.1491 22.0641H11.2852Z",
    fill: "white"
  }), /* @__PURE__ */ e("path", {
    d: "M15.8107 19.0781V22.0641H15.0827V20.2001L14.4367 22.0671H13.8067L13.1567 20.1961V22.0671H12.4287V19.0811H13.3177L14.1307 21.1611L14.9257 19.0811L15.8107 19.0781Z",
    fill: "white"
  }), /* @__PURE__ */ e("path", {
    d: "M17.0406 21.5071H18.0105V22.0641H16.3105V19.0571H17.0385L17.0406 21.5071Z",
    fill: "white"
  }), /* @__PURE__ */ e("path", {
    d: "M5.04893 11.4193C5.04754 11.3763 5.06058 11.334 5.08594 11.2993C5.11627 11.2603 5.15274 11.2265 5.19392 11.1993C5.25631 11.167 5.3208 11.1389 5.38694 11.1153L5.57993 11.0353L6.35193 10.7103C6.45926 10.6603 6.65926 10.5769 6.95193 10.4603L7.31892 10.3103L7.45093 10.2633L7.47393 10.2533C7.48019 10.252 7.48666 10.252 7.49292 10.2533C7.50773 10.2467 7.52375 10.2433 7.53994 10.2433C7.57092 10.2416 7.60191 10.2461 7.63111 10.2566C7.66031 10.267 7.68712 10.2833 7.70994 10.3043C7.72929 10.3225 7.74468 10.3445 7.75518 10.3689C7.76567 10.3934 7.77103 10.4197 7.77093 10.4463V10.7003C7.76997 10.7474 7.75539 10.7933 7.72893 10.8323C7.70111 10.8758 7.65961 10.9089 7.61094 10.9263L6.03394 11.5713L7.61094 12.2163C7.65789 12.2357 7.69867 12.2675 7.72893 12.3083C7.75642 12.3456 7.77114 12.3909 7.77093 12.4373V12.6913C7.77095 12.7181 7.76556 12.7447 7.75508 12.7695C7.7446 12.7942 7.72926 12.8166 7.70994 12.8353C7.68749 12.8569 7.66078 12.8737 7.63152 12.8846C7.60226 12.8954 7.57109 12.9001 7.53994 12.8983C7.52387 12.8981 7.50793 12.8951 7.49292 12.8893L7.45093 12.8753L7.31892 12.8283L6.95493 12.6803L6.35493 12.4313L5.58294 12.1063L5.38994 12.0263C5.32794 12.0013 5.26293 11.9733 5.19693 11.9413C5.15597 11.9222 5.1209 11.8924 5.09539 11.8551C5.06988 11.8178 5.05487 11.7744 5.05193 11.7293L5.04893 11.4193Z",
    fill: "#9747FF"
  }), /* @__PURE__ */ e("path", {
    d: "M9.75972 13.1703C9.70967 13.1715 9.66019 13.1595 9.61628 13.1354C9.57238 13.1114 9.53561 13.0761 9.50972 13.0333C9.48823 13.0024 9.47107 12.9688 9.45872 12.9333L9.42571 12.8443L8.70571 11.2533L8.65371 11.1353C8.59371 11.0073 8.47771 10.7533 8.30571 10.3733C8.08238 9.88994 7.9707 9.62494 7.9707 9.57828C7.97073 9.55016 7.97716 9.52241 7.98945 9.49712C8.00175 9.47183 8.01962 9.44966 8.04172 9.43228C8.09162 9.39009 8.15541 9.36799 8.2207 9.37028H8.45471C8.50401 9.36943 8.55267 9.38166 8.5957 9.40572C8.63874 9.42979 8.67462 9.46483 8.69971 9.50728L8.75171 9.60728L8.78472 9.69628L8.97271 10.1103L9.50471 11.2873L9.57471 11.4373L9.90471 12.1623C10.0312 12.4224 10.1427 12.6895 10.2387 12.9623C10.2385 12.9902 10.2321 13.0178 10.2198 13.0429C10.2075 13.068 10.1897 13.09 10.1677 13.1073C10.1179 13.1495 10.054 13.1717 9.98872 13.1693L9.75972 13.1703Z",
    fill: "#9747FF"
  }), /* @__PURE__ */ e("path", {
    d: "M10.6306 12.9003C10.5986 12.9024 10.5666 12.8979 10.5365 12.887C10.5064 12.8762 10.4788 12.8593 10.4556 12.8373C10.4171 12.7992 10.3952 12.7475 10.3945 12.6933V12.4393C10.3941 12.3932 10.4081 12.3481 10.4346 12.3103C10.4645 12.2684 10.5063 12.2363 10.5546 12.2183L12.1366 11.5733L10.5546 10.9293C10.5065 10.9083 10.4658 10.8735 10.4376 10.8293C10.4103 10.7914 10.3953 10.746 10.3945 10.6993V10.4413C10.3942 10.4149 10.3994 10.3888 10.4097 10.3645C10.42 10.3402 10.4353 10.3184 10.4546 10.3003C10.5016 10.258 10.5634 10.2361 10.6266 10.2393C10.6412 10.2391 10.6556 10.2425 10.6685 10.2493C10.6771 10.2478 10.6859 10.2478 10.6945 10.2493L10.7156 10.2593C10.7096 10.2593 10.7515 10.2713 10.8425 10.3063L11.2146 10.4563C11.1952 10.4477 11.3952 10.531 11.8146 10.7063C12.0432 10.8003 12.3052 10.9117 12.6006 11.0403L12.6756 11.0683L12.7836 11.1113C12.8472 11.1339 12.9088 11.162 12.9675 11.1953C13.0095 11.2145 13.0454 11.2449 13.0712 11.2832C13.097 11.3215 13.1116 11.3662 13.1136 11.4123V11.7223C13.1127 11.7648 13.0987 11.806 13.0736 11.8403C13.0456 11.8791 13.0094 11.9112 12.9675 11.9343C12.9105 11.9623 12.8435 11.9923 12.7675 12.0243L12.5675 12.1043L10.8256 12.8333C10.7756 12.8583 10.7456 12.8743 10.7366 12.8803L10.7175 12.8943L10.6306 12.9003Z",
    fill: "#9747FF"
  })]
}), o9 = () => /* @__PURE__ */ n("svg", {
  id: "fileTypeId",
  width: "21",
  height: "24",
  viewBox: "0 0 21 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  children: [/* @__PURE__ */ e("g", {
    opacity: "0.3",
    children: /* @__PURE__ */ e("path", {
      opacity: "0.3",
      d: "M14.965 4.92424C14.4183 4.92371 13.8942 4.7063 13.5076 4.31971C13.121 3.93313 12.9036 3.40896 12.903 2.86224V0.000244141H3.68905C2.97552 0.000244091 2.29121 0.283624 1.78658 0.788068C1.28194 1.29251 0.998312 1.97672 0.998047 2.69024V18.9122C0.998842 19.6254 1.28271 20.3091 1.78728 20.8131C2.29186 21.3171 2.97587 21.6002 3.68905 21.6002H14.749C15.1025 21.6004 15.4526 21.5309 15.7792 21.3957C16.1058 21.2605 16.4025 21.0623 16.6525 20.8124C16.9025 20.5625 17.1008 20.2658 17.2361 19.9393C17.3714 19.6127 17.441 19.2627 17.441 18.9092V4.92424H14.965Z",
      fill: "#FF9908"
    })
  }), /* @__PURE__ */ e("path", {
    d: "M17.4413 4.92424H14.9653C14.4186 4.92371 13.8944 4.7063 13.5079 4.31971C13.1213 3.93313 12.9038 3.40896 12.9033 2.86224V0.000244141L17.4413 4.92424Z",
    fill: "#FF9908"
  }), /* @__PURE__ */ e("path", {
    d: "M19.3922 17.0603H6.88823C6.00126 17.0603 5.28223 17.7793 5.28223 18.6663V22.3943C5.28223 23.2813 6.00126 24.0003 6.88823 24.0003H19.3922C20.2792 24.0003 20.9982 23.2813 20.9982 22.3943V18.6663C20.9982 17.7793 20.2792 17.0603 19.3922 17.0603Z",
    fill: "#FF9908"
  }), /* @__PURE__ */ e("path", {
    d: "M7.69831 21.3372V22.0642H6.94531V21.3372H7.69831Z",
    fill: "white"
  }), /* @__PURE__ */ e("path", {
    d: "M12.1639 19.0571L11.4449 22.0641H10.5449L10.0649 20.0521L9.57994 22.0641H8.67994L7.96094 19.0571H8.75194L9.13894 21.2351L9.66694 19.0571H10.4669L10.9949 21.2351L11.3859 19.0571H12.1639Z",
    fill: "white"
  }), /* @__PURE__ */ e("path", {
    d: "M15.928 19.0781V22.0641H15.198V20.2001L14.551 22.0671H13.922L13.271 20.1961V22.0671H12.543V19.0811H13.432L14.245 21.1611L15.04 19.0811L15.928 19.0781Z",
    fill: "white"
  }), /* @__PURE__ */ e("path", {
    d: "M18.2979 21.5151H17.1659L16.9779 22.0641H16.2129L17.3129 19.0781H18.1509L19.2509 22.0641H18.4769L18.2979 21.5151ZM18.1109 20.9621L17.7359 19.8571L17.3579 20.9621H18.1109Z",
    fill: "white"
  }), /* @__PURE__ */ e("path", {
    d: "M12.7634 13.1924H11.6684V8.76635C11.6684 8.6181 11.6095 8.47591 11.5047 8.37108C11.3998 8.26625 11.2576 8.20735 11.1094 8.20735H8.30939C8.16113 8.20735 8.01895 8.26625 7.91412 8.37108C7.80929 8.47591 7.75039 8.6181 7.75039 8.76635V13.1924H6.65039V8.39235C6.65066 8.05225 6.78595 7.72617 7.02653 7.48578C7.26711 7.24539 7.59329 7.11035 7.93339 7.11035H11.4744C11.8144 7.11035 12.1405 7.24542 12.3809 7.48584C12.6213 7.72626 12.7564 8.05234 12.7564 8.39235L12.7634 13.1924Z",
    fill: "#FF9908"
  }), /* @__PURE__ */ e("path", {
    d: "M11.465 14.4903C12.1819 14.4903 12.763 13.9092 12.763 13.1923C12.763 12.4754 12.1819 11.8943 11.465 11.8943C10.7481 11.8943 10.167 12.4754 10.167 13.1923C10.167 13.9092 10.7481 14.4903 11.465 14.4903Z",
    fill: "#FF9908"
  }), /* @__PURE__ */ e("path", {
    d: "M6.45816 14.4903C7.17502 14.4903 7.75616 13.9092 7.75616 13.1923C7.75616 12.4754 7.17502 11.8943 6.45816 11.8943C5.74129 11.8943 5.16016 12.4754 5.16016 13.1923C5.16016 13.9092 5.74129 14.4903 6.45816 14.4903Z",
    fill: "#FF9908"
  })]
}), d9 = () => /* @__PURE__ */ n("svg", {
  id: "fileTypeId",
  width: "21",
  height: "24",
  viewBox: "0 0 21 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  children: [/* @__PURE__ */ e("g", {
    opacity: "0.3",
    children: /* @__PURE__ */ e("path", {
      opacity: "0.3",
      d: "M13.968 4.92424C13.4213 4.92371 12.8971 4.7063 12.5105 4.31971C12.1239 3.93313 11.9065 3.40896 11.906 2.86224V0.000244326H2.69298C2.33951 0.000112973 1.98947 0.069621 1.66287 0.204798C1.33626 0.339974 1.0395 0.538172 0.789514 0.788068C0.539526 1.03796 0.341218 1.33466 0.20592 1.66121C0.0706225 1.98776 0.000976538 2.33777 0.000976562 2.69124V18.9132C0.00203661 19.6264 0.286156 20.31 0.790918 20.8138C1.29568 21.3177 1.9798 21.6005 2.69298 21.6002H13.753C14.1064 21.6002 14.4563 21.5306 14.7828 21.3954C15.1093 21.2602 15.4059 21.062 15.6558 20.8121C15.9057 20.5622 16.1039 20.2655 16.2391 19.939C16.3744 19.6126 16.444 19.2626 16.444 18.9092V4.92424H13.968Z",
      fill: "#00C650"
    })
  }), /* @__PURE__ */ e("path", {
    d: "M16.4443 4.92424H13.9682C13.4215 4.92371 12.8974 4.7063 12.5108 4.31971C12.1242 3.93313 11.9068 3.40896 11.9062 2.86224V0.000244141L16.4443 4.92424Z",
    fill: "#00C650"
  }), /* @__PURE__ */ e("path", {
    d: "M18.3961 17.0603H5.89213C5.00516 17.0603 4.28613 17.7793 4.28613 18.6663V22.3943C4.28613 23.2813 5.00516 24.0003 5.89213 24.0003H18.3961C19.2831 24.0003 20.0021 23.2813 20.0021 22.3943V18.6663C20.0021 17.7793 19.2831 17.0603 18.3961 17.0603Z",
    fill: "#00C650"
  }), /* @__PURE__ */ e("path", {
    d: "M7.13582 21.3372V22.0642H6.38281V21.3372H7.13582Z",
    fill: "white"
  }), /* @__PURE__ */ e("path", {
    d: "M11.6024 19.0571L10.8834 22.0641H9.98342L9.50342 20.0521L9.01842 22.0641H8.11842L7.39941 19.0571H8.19042L8.57742 21.2351L9.10542 19.0571H9.90542L10.4334 21.2351L10.8244 19.0571H11.6024Z",
    fill: "white"
  }), /* @__PURE__ */ e("path", {
    d: "M13.8476 21.5151H12.7196L12.5326 22.0641H11.7676L12.8676 19.0781H13.7056L14.8056 22.0641H14.0316L13.8476 21.5151ZM13.6596 20.9621L13.2856 19.8571L12.9076 20.9621H13.6596Z",
    fill: "white"
  }), /* @__PURE__ */ e("path", {
    d: "M15.651 19.0571L16.387 21.3201L17.123 19.0571H17.901L16.855 22.0641H15.915L14.873 19.0571H15.651Z",
    fill: "white"
  }), /* @__PURE__ */ e("path", {
    d: "M12.0241 13.1924H10.9241V8.76635C10.9241 8.6181 10.8652 8.47591 10.7604 8.37108C10.6556 8.26625 10.5134 8.20735 10.3651 8.20735H7.56512C7.41687 8.20735 7.27468 8.26625 7.16985 8.37108C7.06502 8.47591 7.00613 8.6181 7.00613 8.76635V13.1924H5.91113V8.39235C5.91113 8.05234 6.0462 7.72626 6.28662 7.48584C6.52704 7.24542 6.85312 7.11035 7.19313 7.11035H10.7341C11.0741 7.11035 11.4002 7.24542 11.6406 7.48584C11.8811 7.72626 12.0161 8.05234 12.0161 8.39235L12.0241 13.1924Z",
    fill: "#00C650"
  }), /* @__PURE__ */ e("path", {
    d: "M10.7257 14.4903C11.4426 14.4903 12.0237 13.9092 12.0237 13.1923C12.0237 12.4754 11.4426 11.8943 10.7257 11.8943C10.0089 11.8943 9.42773 12.4754 9.42773 13.1923C9.42773 13.9092 10.0089 14.4903 10.7257 14.4903Z",
    fill: "#00C650"
  }), /* @__PURE__ */ e("path", {
    d: "M5.71987 14.4903C6.43674 14.4903 7.01787 13.9092 7.01787 13.1923C7.01787 12.4754 6.43674 11.8943 5.71987 11.8943C5.00301 11.8943 4.42188 12.4754 4.42188 13.1923C4.42188 13.9092 5.00301 14.4903 5.71987 14.4903Z",
    fill: "#00C650"
  })]
}), h9 = () => /* @__PURE__ */ n("svg", {
  id: "fileTypeId",
  width: "20",
  height: "24",
  viewBox: "0 0 20 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  children: [/* @__PURE__ */ e("g", {
    opacity: "0.3",
    children: /* @__PURE__ */ e("path", {
      opacity: "0.3",
      d: "M13.9674 4.92504C13.4206 4.92451 12.8963 4.70714 12.5096 4.3206C12.1229 3.93406 11.9053 3.4099 11.9045 2.86311V0.000244141H2.69186C1.97819 0.000244141 1.29374 0.283756 0.789103 0.788395C0.284464 1.29303 0.000976562 1.97746 0.000976562 2.69112V18.9124C0.000976562 19.6261 0.284464 20.3106 0.789103 20.8152C1.29374 21.3198 1.97819 21.6033 2.69186 21.6033H13.7514C14.4651 21.6033 15.1495 21.3198 15.6541 20.8152C16.1588 20.3106 16.4423 19.6261 16.4423 18.9124V4.92504H13.9674Z",
      fill: "#2869FE"
    })
  }), /* @__PURE__ */ e("path", {
    d: "M16.4421 4.92504H13.9672C13.4204 4.92451 12.8962 4.70714 12.5094 4.3206C12.1227 3.93406 11.9051 3.4099 11.9043 2.86311V0.000244141L16.4421 4.92504Z",
    fill: "#2869FE"
  }), /* @__PURE__ */ e("path", {
    d: "M13.0609 8.37299H2.73629C2.63718 8.37273 2.54222 8.33324 2.47214 8.26316C2.40206 8.19308 2.36257 8.09811 2.3623 7.99901C2.3623 7.89973 2.40167 7.80449 2.47177 7.7342C2.54188 7.6639 2.63701 7.62429 2.73629 7.62402H13.0609C13.1601 7.62429 13.2553 7.6639 13.3254 7.7342C13.3955 7.80449 13.4348 7.89973 13.4348 7.99901C13.4346 8.09811 13.3951 8.19308 13.325 8.26316C13.2549 8.33324 13.16 8.37273 13.0609 8.37299Z",
    fill: "#2869FE"
  }), /* @__PURE__ */ e("path", {
    d: "M13.0609 10.6098H2.73629C2.63718 10.6095 2.54222 10.5701 2.47214 10.5C2.40206 10.4299 2.36257 10.3349 2.3623 10.2358C2.3623 10.1365 2.40167 10.0413 2.47177 9.97102C2.54188 9.90072 2.63701 9.8611 2.73629 9.86084H13.0609C13.1601 9.8611 13.2553 9.90072 13.3254 9.97102C13.3955 10.0413 13.4348 10.1365 13.4348 10.2358C13.4346 10.3349 13.3951 10.4299 13.325 10.5C13.2549 10.5701 13.16 10.6095 13.0609 10.6098Z",
    fill: "#2869FE"
  }), /* @__PURE__ */ e("path", {
    d: "M13.0609 12.8466H2.73629C2.63701 12.8464 2.54188 12.8067 2.47177 12.7364C2.40167 12.6662 2.3623 12.5709 2.3623 12.4716C2.36257 12.3725 2.40206 12.2776 2.47214 12.2075C2.54222 12.1374 2.63718 12.0979 2.73629 12.0977H13.0609C13.16 12.0979 13.2549 12.1374 13.325 12.2075C13.3951 12.2776 13.4346 12.3725 13.4348 12.4716C13.4348 12.5709 13.3955 12.6662 13.3254 12.7364C13.2553 12.8067 13.1601 12.8464 13.0609 12.8466Z",
    fill: "#2869FE"
  }), /* @__PURE__ */ e("path", {
    d: "M13.0609 15.0827H2.73629C2.6371 15.0827 2.54198 15.0433 2.47185 14.9732C2.40171 14.903 2.3623 14.8079 2.3623 14.7087C2.3623 14.6094 2.40167 14.5142 2.47177 14.4439C2.54188 14.3736 2.63701 14.334 2.73629 14.3337H13.0609C13.1601 14.334 13.2553 14.3736 13.3254 14.4439C13.3955 14.5142 13.4348 14.6094 13.4348 14.7087C13.4348 14.8079 13.3954 14.903 13.3253 14.9732C13.2552 15.0433 13.16 15.0827 13.0609 15.0827Z",
    fill: "#2869FE"
  }), /* @__PURE__ */ e("path", {
    d: "M18.3946 17.0605H5.8911C5.00416 17.0605 4.28516 17.7795 4.28516 18.6665V22.3943C4.28516 23.2813 5.00416 24.0003 5.8911 24.0003H18.3946C19.2815 24.0003 20.0005 23.2813 20.0005 22.3943V18.6665C20.0005 17.7795 19.2815 17.0605 18.3946 17.0605Z",
    fill: "#2869FE"
  }), /* @__PURE__ */ e("path", {
    d: "M8.55668 21.3374V22.0644H7.80371V21.3374H8.55668Z",
    fill: "white"
  }), /* @__PURE__ */ e("path", {
    d: "M11.0952 19.0574V19.6364H10.2782V22.0642H9.54726V19.6364H8.73828V19.0574H11.0952Z",
    fill: "white"
  }), /* @__PURE__ */ e("path", {
    d: "M13.2265 22.0642L12.5925 21.1283L12.0475 22.0642H11.2146L12.1755 20.5163L11.1846 19.0574H12.0475L12.6645 19.9633L13.1965 19.0574H14.0255L13.0775 20.5713L14.0895 22.0642H13.2265Z",
    fill: "white"
  }), /* @__PURE__ */ e("path", {
    d: "M16.5307 19.0574V19.6364H15.7147V22.0642H14.9828V19.6364H14.1748V19.0574H16.5307Z",
    fill: "white"
  })]
}), c9 = () => /* @__PURE__ */ n("svg", {
  id: "fileTypeId",
  width: "21",
  height: "24",
  viewBox: "0 0 21 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  children: [/* @__PURE__ */ e("g", {
    opacity: "0.3",
    children: /* @__PURE__ */ e("path", {
      opacity: "0.3",
      d: "M14.9631 4.92424C14.4164 4.92371 13.8922 4.7063 13.5056 4.31971C13.119 3.93313 12.9016 3.40896 12.9011 2.86224V0.000244141H3.68709C3.33361 0.000244116 2.98361 0.0698778 2.65706 0.205176C2.3305 0.340474 2.03381 0.538781 1.78391 0.78877C1.53402 1.03876 1.33581 1.33553 1.20063 1.66213C1.06546 1.98874 0.995963 2.33878 0.996094 2.69225V18.9132C0.995963 19.2667 1.06546 19.6167 1.20063 19.9433C1.33581 20.27 1.53402 20.5667 1.78391 20.8167C2.03381 21.0667 2.3305 21.265 2.65706 21.4003C2.98361 21.5356 3.33361 21.6052 3.68709 21.6052H14.7471C15.4611 21.6052 16.1458 21.3216 16.6506 20.8168C17.1555 20.3119 17.4391 19.6272 17.4391 18.9132V4.92524L14.9631 4.92424Z",
      fill: "#9747FF"
    })
  }), /* @__PURE__ */ e("path", {
    d: "M17.4394 4.92424H14.9634C14.4166 4.92371 13.8925 4.7063 13.5059 4.31971C13.1193 3.93313 12.9019 3.40896 12.9014 2.86224V0.000244141L17.4394 4.92424Z",
    fill: "#9747FF"
  }), /* @__PURE__ */ e("path", {
    d: "M19.3903 17.0603H6.88625C5.99929 17.0603 5.28027 17.7793 5.28027 18.6663V22.3943C5.28027 23.2813 5.99929 24.0003 6.88625 24.0003H19.3903C20.2772 24.0003 20.9963 23.2813 20.9963 22.3943V18.6663C20.9963 17.7793 20.2772 17.0603 19.3903 17.0603Z",
    fill: "#9747FF"
  }), /* @__PURE__ */ e("path", {
    d: "M9.35942 21.3372V22.0652H8.60645V21.3372H9.35942Z",
    fill: "white"
  }), /* @__PURE__ */ e("path", {
    d: "M11.896 19.0583V19.6364H11.0801V22.0654H10.348V19.6364H9.54004V19.0583H11.896Z",
    fill: "white"
  }), /* @__PURE__ */ e("path", {
    d: "M12.9321 19.0583V22.0654H12.2041V19.0583H12.9321Z",
    fill: "white"
  }), /* @__PURE__ */ e("path", {
    d: "M15.3965 19.0583V19.6364H14.1635V20.2953H15.1165V20.8484H14.1635V22.0654H13.4365V19.0583H15.3965Z",
    fill: "white"
  }), /* @__PURE__ */ e("path", {
    d: "M17.7295 19.0583V19.6364H16.4965V20.2953H17.4495V20.8484H16.4965V22.0654H15.7695V19.0583H17.7295Z",
    fill: "white"
  }), /* @__PURE__ */ e("path", {
    d: "M11.4269 14.6412H7.00891C6.57651 14.6406 6.16198 14.4686 5.85623 14.1629C5.55047 13.8571 5.37846 13.4426 5.37793 13.0102V8.59316C5.37846 8.16076 5.55047 7.74621 5.85623 7.44045C6.16198 7.1347 6.57651 6.96269 7.00891 6.96216H11.4269C11.8591 6.96295 12.2733 7.13511 12.5786 7.44087C12.884 7.74663 13.0557 8.16102 13.0559 8.59316V13.0102C13.0557 13.4423 12.884 13.8567 12.5786 14.1625C12.2733 14.4682 11.8591 14.6404 11.4269 14.6412ZM7.00891 7.68315C6.76765 7.68342 6.53635 7.77939 6.36575 7.94999C6.19515 8.12059 6.09919 8.3519 6.09893 8.59316V13.0102C6.09919 13.2514 6.19515 13.4827 6.36575 13.6533C6.53635 13.8239 6.76765 13.9199 7.00891 13.9202H11.4269C11.668 13.9196 11.8991 13.8236 12.0695 13.653C12.2398 13.4824 12.3356 13.2512 12.3359 13.0102V8.59316C12.3356 8.35207 12.2398 8.12091 12.0695 7.95034C11.8991 7.77977 11.668 7.68368 11.4269 7.68315H7.00891Z",
    fill: "#9747FF"
  }), /* @__PURE__ */ e("path", {
    d: "M12.6963 12.1701V13.0101C12.6963 13.3468 12.5626 13.6697 12.3246 13.9078C12.0867 14.146 11.7639 14.2799 11.4273 14.2802H7.00925C6.67243 14.2802 6.3494 14.1463 6.11123 13.9082C5.87306 13.67 5.73926 13.347 5.73926 13.0101V11.6001C6.44626 11.4481 7.52327 11.4001 8.83127 11.9221L9.64026 11.1501L10.1923 12.5501C10.1923 12.5501 10.3403 12.0351 10.8183 12.1081C11.2963 12.1811 12.0703 12.4401 12.4013 12.2191C12.4905 12.1677 12.5952 12.1503 12.6963 12.1701Z",
    fill: "#9747FF"
  }), /* @__PURE__ */ e("path", {
    d: "M11.1502 9.49518C11.4214 9.49518 11.6412 9.27536 11.6412 9.00419C11.6412 8.73302 11.4214 8.51318 11.1502 8.51318C10.879 8.51318 10.6592 8.73302 10.6592 9.00419C10.6592 9.27536 10.879 9.49518 11.1502 9.49518Z",
    fill: "#9747FF"
  })]
}), f9 = () => /* @__PURE__ */ n("svg", {
  id: "fileTypeId",
  width: "20",
  height: "24",
  viewBox: "0 0 20 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  children: [/* @__PURE__ */ e("g", {
    opacity: "0.3",
    children: /* @__PURE__ */ e("path", {
      opacity: "0.3",
      d: "M13.966 4.92424C13.4193 4.92371 12.8951 4.7063 12.5086 4.31971C12.122 3.93313 11.9045 3.40896 11.904 2.86224V0.000244141H2.69103C1.97707 0.000244141 1.29234 0.283861 0.787488 0.788709C0.28264 1.29356 -0.000976562 1.97829 -0.000976562 2.69225V18.9132C-0.000976562 19.6272 0.28264 20.3119 0.787488 20.8168C1.29234 21.3216 1.97707 21.6052 2.69103 21.6052H13.751C14.1045 21.6052 14.4545 21.5356 14.7811 21.4003C15.1076 21.265 15.4043 21.0667 15.6542 20.8167C15.9041 20.5667 16.1023 20.27 16.2375 19.9433C16.3726 19.6167 16.4421 19.2667 16.442 18.9132V4.92524L13.966 4.92424Z",
      fill: "#FF9908"
    })
  }), /* @__PURE__ */ e("path", {
    d: "M16.4423 4.92424H13.9663C13.4196 4.92371 12.8954 4.7063 12.5088 4.31971C12.1223 3.93313 11.9048 3.40896 11.9043 2.86224V0.000244141L16.4423 4.92424Z",
    fill: "#FF9908"
  }), /* @__PURE__ */ e("path", {
    d: "M18.3942 17.0603H5.89018C5.00321 17.0603 4.28418 17.7793 4.28418 18.6663V22.3943C4.28418 23.2813 5.00321 24.0003 5.89018 24.0003H18.3942C19.2811 24.0003 20.0002 23.2813 20.0002 22.3943V18.6663C20.0002 17.7793 19.2811 17.0603 18.3942 17.0603Z",
    fill: "#FF9908"
  }), /* @__PURE__ */ e("path", {
    d: "M7.9991 21.3372V22.0652H7.24609V21.3372H7.9991Z",
    fill: "white"
  }), /* @__PURE__ */ e("path", {
    d: "M10.417 21.6562C10.331 21.7945 10.2071 21.9053 10.06 21.9752C9.88099 22.0594 9.68467 22.1002 9.48697 22.0942C9.18976 22.1063 8.89688 22.0198 8.65396 21.8482C8.54629 21.7678 8.45824 21.664 8.39641 21.5446C8.33459 21.4253 8.30059 21.2935 8.29696 21.1592H9.07096C9.07649 21.2605 9.11964 21.3561 9.19196 21.4272C9.26396 21.4943 9.35957 21.5303 9.45796 21.5272C9.53874 21.5318 9.61808 21.5045 9.67896 21.4512C9.70563 21.4253 9.72662 21.3942 9.74057 21.3597C9.75452 21.3253 9.76112 21.2883 9.75996 21.2512C9.76104 21.2158 9.75494 21.1805 9.74206 21.1475C9.72917 21.1145 9.70975 21.0845 9.68496 21.0592C9.63224 21.0056 9.56935 20.9631 9.49997 20.9342C9.42597 20.9015 9.32396 20.8625 9.19396 20.8172C9.03459 20.7647 8.87891 20.7015 8.72797 20.6282C8.60388 20.5639 8.49743 20.4702 8.41796 20.3552C8.3257 20.2164 8.28017 20.0517 8.28797 19.8852C8.28377 19.7204 8.33133 19.5585 8.42397 19.4222C8.51864 19.2885 8.6494 19.1844 8.80097 19.1222C8.97553 19.0516 9.16272 19.0175 9.35097 19.0222C9.63718 19.0062 9.92004 19.0903 10.151 19.2602C10.2473 19.3385 10.3266 19.4356 10.3841 19.5457C10.4415 19.6558 10.4758 19.7764 10.485 19.9002H9.69797C9.68892 19.8116 9.65056 19.7285 9.58897 19.6642C9.55761 19.6344 9.52051 19.6113 9.47994 19.5964C9.43936 19.5814 9.39616 19.5749 9.35297 19.5772C9.27823 19.5734 9.20474 19.5976 9.14696 19.6452C9.1198 19.6706 9.09863 19.7017 9.08496 19.7363C9.0713 19.7709 9.06549 19.8081 9.06796 19.8452C9.0673 19.8784 9.07323 19.9114 9.08542 19.9423C9.0976 19.9732 9.11581 20.0014 9.13897 20.0252C9.18874 20.0774 9.24863 20.1189 9.31497 20.1472C9.38597 20.1782 9.48796 20.2182 9.62096 20.2662C9.78309 20.3181 9.9409 20.3827 10.093 20.4592C10.2184 20.5262 10.3263 20.6218 10.408 20.7382C10.5011 20.879 10.5473 21.0456 10.54 21.2142C10.5415 21.3702 10.4989 21.5234 10.417 21.6562Z",
    fill: "white"
  }), /* @__PURE__ */ e("path", {
    d: "M11.5036 19.0583L12.2386 21.3203L12.9746 19.0583H13.7536L12.7066 22.0654H11.7666L10.7246 19.0583H11.5036Z",
    fill: "white"
  }), /* @__PURE__ */ e("path", {
    d: "M16.3728 19.3001C16.6152 19.4821 16.7784 19.7502 16.8288 20.0491H16.0588C16.0085 19.9418 15.9269 19.8522 15.8248 19.7921C15.7103 19.7241 15.579 19.6895 15.4458 19.6921C15.3422 19.6879 15.239 19.7065 15.1435 19.7466C15.0479 19.7867 14.9623 19.8473 14.8928 19.9241C14.7465 20.0992 14.6721 20.3233 14.6848 20.5511C14.6848 20.8371 14.7578 21.0568 14.9038 21.2101C14.9859 21.2897 15.0837 21.3513 15.191 21.3909C15.2983 21.4305 15.4127 21.4473 15.5268 21.4401C15.69 21.4431 15.8497 21.3929 15.9818 21.2971C16.1167 21.1964 16.2142 21.0535 16.2588 20.8911H15.3398V20.3681H16.8668V21.0871C16.8081 21.266 16.7157 21.4319 16.5948 21.5761C16.4632 21.7311 16.2999 21.8559 16.1158 21.9421C15.9075 22.0384 15.6802 22.0862 15.4508 22.0821C15.1718 22.0894 14.8958 22.0229 14.6508 21.8891C14.4267 21.7631 14.2442 21.5744 14.1258 21.3461C13.9985 21.099 13.935 20.824 13.9408 20.5461C13.9358 20.2699 13.9994 19.9968 14.1258 19.7511C14.244 19.5234 14.4257 19.3348 14.6488 19.2081C14.8901 19.0752 15.1624 19.0086 15.4378 19.0151C15.7725 19.0031 16.1017 19.1034 16.3728 19.3001Z",
    fill: "white"
  }), /* @__PURE__ */ e("path", {
    d: "M12.3024 12.7733H12.0534C12.0521 11.7641 11.6505 10.7966 10.9369 10.0831C10.2232 9.36961 9.2556 8.96832 8.24642 8.96726C7.23733 8.96832 6.26988 9.36964 5.55635 10.0832C4.84281 10.7967 4.44149 11.7642 4.44043 12.7733H4.19043C4.19175 11.698 4.61953 10.6672 5.37992 9.90704C6.14031 9.14684 7.1712 8.71932 8.24642 8.71826C9.32164 8.71932 10.3525 9.14684 11.1129 9.90704C11.8733 10.6672 12.3011 11.698 12.3024 12.7733Z",
    fill: "#FF9908"
  }), /* @__PURE__ */ e("path", {
    d: "M14.0094 8.71826H2.4834V8.96726H14.0094V8.71826Z",
    fill: "#FF9908"
  }), /* @__PURE__ */ e("path", {
    d: "M4.71302 12.3752H3.91602V13.1722H4.71302V12.3752Z",
    fill: "#FF9908"
  }), /* @__PURE__ */ e("path", {
    d: "M12.5753 12.3752H11.7783V13.1722H12.5753V12.3752Z",
    fill: "#FF9908"
  }), /* @__PURE__ */ e("path", {
    d: "M8.64368 8.43115H7.84668V9.22815H8.64368V8.43115Z",
    fill: "#FF9908"
  }), /* @__PURE__ */ e("path", {
    d: "M2.47029 9.22915C2.69065 9.22915 2.86929 9.05051 2.86929 8.83015C2.86929 8.60979 2.69065 8.43115 2.47029 8.43115C2.24993 8.43115 2.07129 8.60979 2.07129 8.83015C2.07129 9.05051 2.24993 9.22915 2.47029 9.22915Z",
    fill: "#FF9908"
  }), /* @__PURE__ */ e("path", {
    d: "M13.9713 9.22915C14.1916 9.22915 14.3703 9.05051 14.3703 8.83015C14.3703 8.60979 14.1916 8.43115 13.9713 8.43115C13.7509 8.43115 13.5723 8.60979 13.5723 8.83015C13.5723 9.05051 13.7509 9.22915 13.9713 9.22915Z",
    fill: "#FF9908"
  })]
}), s9 = () => /* @__PURE__ */ n("svg", {
  id: "fileTypeId",
  width: "20",
  height: "24",
  viewBox: "0 0 20 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  children: [/* @__PURE__ */ e("g", {
    opacity: "0.3",
    children: /* @__PURE__ */ e("path", {
      opacity: "0.3",
      d: "M13.967 4.92424C13.4202 4.92371 12.8959 4.70633 12.5092 4.31978C12.1224 3.93322 11.9048 3.40905 11.904 2.86224V0.000244141H2.69099C1.97729 0.000244141 1.29282 0.283758 0.788159 0.788419C0.283499 1.29308 0 1.97755 0 2.69124V18.9132C0.00105984 19.6262 0.28503 20.3097 0.789575 20.8135C1.29412 21.3173 1.97799 21.6002 2.69099 21.6002H13.751C14.4647 21.6002 15.1491 21.3167 15.6538 20.8121C16.1585 20.3074 16.442 19.6229 16.442 18.9092V4.92424H13.967Z",
      fill: "#FF9908"
    })
  }), /* @__PURE__ */ e("path", {
    d: "M16.4423 4.92424H13.9673C13.4205 4.92371 12.8962 4.70633 12.5095 4.31978C12.1227 3.93322 11.9051 3.40905 11.9043 2.86224V0.000244141L16.4423 4.92424Z",
    fill: "#FF9908"
  }), /* @__PURE__ */ e("path", {
    d: "M18.3942 17.0603H5.89019C5.00322 17.0603 4.28418 17.7793 4.28418 18.6663V22.3943C4.28418 23.2813 5.00322 24.0003 5.89019 24.0003H18.3942C19.2812 24.0003 20.0002 23.2813 20.0002 22.3943V18.6663C20.0002 17.7793 19.2812 17.0603 18.3942 17.0603Z",
    fill: "#FF9908"
  }), /* @__PURE__ */ e("path", {
    d: "M8.58992 21.3372V22.0642H7.83691V21.3372H8.58992Z",
    fill: "white"
  }), /* @__PURE__ */ e("path", {
    d: "M10.5137 22.0642L9.86272 20.9282H9.69673V22.0642H8.96973V19.0572H10.2137C10.4205 19.0514 10.6259 19.0935 10.8137 19.1802C10.9679 19.2535 11.0968 19.3712 11.1837 19.5182C11.2674 19.6684 11.3099 19.8382 11.3067 20.0102C11.3124 20.211 11.2488 20.4076 11.1267 20.5672C10.9921 20.7287 10.8067 20.8397 10.6007 20.8822L11.3157 22.0642H10.5137ZM9.69673 20.4312H10.1477C10.2629 20.4398 10.3771 20.404 10.4667 20.3312C10.5022 20.2936 10.5295 20.249 10.5467 20.2003C10.5639 20.1515 10.5708 20.0997 10.5667 20.0482C10.5703 19.9971 10.5632 19.9459 10.546 19.8977C10.5288 19.8495 10.5018 19.8054 10.4667 19.7682C10.4231 19.7314 10.3726 19.7036 10.3182 19.6865C10.2638 19.6693 10.2066 19.6631 10.1497 19.6682H9.69873L9.69673 20.4312Z",
    fill: "white"
  }), /* @__PURE__ */ e("path", {
    d: "M13.7138 21.6564C13.6271 21.7945 13.503 21.9051 13.3558 21.9754C13.1771 22.0592 12.9812 22.1 12.7838 22.0944C12.4864 22.1067 12.1934 22.0198 11.9508 21.8474C11.8431 21.7669 11.7549 21.6632 11.6929 21.5439C11.6309 21.4246 11.5967 21.2928 11.5928 21.1584H12.3668C12.3727 21.2598 12.4162 21.3553 12.4888 21.4264C12.5605 21.4933 12.6557 21.5293 12.7538 21.5264C12.835 21.5307 12.9147 21.5031 12.9758 21.4494C13.0022 21.4233 13.0229 21.3921 13.0366 21.3577C13.0504 21.3233 13.0569 21.2864 13.0558 21.2494C13.0569 21.2142 13.051 21.1792 13.0383 21.1463C13.0255 21.1135 13.0063 21.0836 12.9818 21.0584C12.9287 21.005 12.8659 20.9622 12.7968 20.9324C12.7228 20.9004 12.6208 20.8614 12.4908 20.8154C12.3314 20.7628 12.1758 20.6997 12.0248 20.6264C11.901 20.5622 11.7946 20.4688 11.7148 20.3544C11.6227 20.2155 11.5772 20.0509 11.5848 19.8844C11.5806 19.7193 11.6282 19.557 11.7208 19.4204C11.8156 19.2872 11.9459 19.1832 12.0968 19.1204C12.2717 19.0498 12.4593 19.0157 12.6478 19.0204C12.934 19.0049 13.2167 19.089 13.4478 19.2584C13.5459 19.3384 13.6262 19.438 13.6837 19.5508C13.7412 19.6635 13.7746 19.787 13.7818 19.9134H12.9948C12.9851 19.825 12.9468 19.7421 12.8858 19.6774C12.8544 19.6476 12.8173 19.6246 12.7768 19.6096C12.7362 19.5947 12.693 19.5881 12.6498 19.5904C12.5751 19.5865 12.5016 19.6108 12.4438 19.6584C12.4165 19.6837 12.3953 19.7148 12.3816 19.7494C12.3679 19.784 12.3622 19.8212 12.3648 19.8584C12.3637 19.9255 12.3888 19.9904 12.4348 20.0394C12.4852 20.091 12.5454 20.1322 12.6118 20.1604C12.6828 20.1914 12.7848 20.2314 12.9178 20.2794C13.0799 20.3318 13.2377 20.3966 13.3898 20.4734C13.5153 20.5399 13.6232 20.6351 13.7048 20.7514C13.7981 20.8924 13.8443 21.0594 13.8368 21.2284C13.8351 21.3795 13.7926 21.5274 13.7138 21.6564Z",
    fill: "white"
  }), /* @__PURE__ */ e("path", {
    d: "M16.2772 21.6561C16.1907 21.794 16.0669 21.9046 15.9202 21.9751C15.7415 22.059 15.5456 22.0997 15.3482 22.0941C15.0506 22.1065 14.7572 22.0196 14.5142 21.8471C14.4068 21.7665 14.3189 21.6627 14.2571 21.5434C14.1953 21.4241 14.1611 21.2924 14.1572 21.1581H14.9312C14.9367 21.2594 14.9799 21.355 15.0522 21.4261C15.1243 21.4931 15.2199 21.529 15.3182 21.5261C15.3992 21.5306 15.4786 21.5029 15.5392 21.4491C15.5659 21.4233 15.5869 21.3921 15.6008 21.3577C15.6148 21.3233 15.6214 21.2863 15.6202 21.2491C15.6211 21.214 15.615 21.179 15.6023 21.1462C15.5896 21.1134 15.5706 21.0835 15.5462 21.0581C15.493 21.0049 15.4302 20.9622 15.3612 20.9321C15.2872 20.9001 15.1852 20.8611 15.0542 20.8151C14.8951 20.7628 14.7397 20.6997 14.5892 20.6261C14.4651 20.562 14.3584 20.4686 14.2782 20.3541C14.1869 20.2149 14.1418 20.0505 14.1492 19.8841C14.145 19.7191 14.1926 19.5568 14.2852 19.4201C14.3798 19.2867 14.5101 19.1827 14.6612 19.1201C14.8361 19.0495 15.0237 19.0155 15.2122 19.0201C15.4984 19.0046 15.7811 19.0887 16.0122 19.2581C16.1104 19.338 16.1909 19.4376 16.2484 19.5504C16.3059 19.6632 16.3392 19.7867 16.3462 19.9131H15.5592C15.5505 19.8247 15.5125 19.7416 15.4512 19.6771C15.4199 19.6474 15.3827 19.6244 15.3422 19.6094C15.3016 19.5944 15.2584 19.5879 15.2152 19.5901C15.1405 19.5863 15.067 19.6106 15.0092 19.6581C14.9819 19.6835 14.9607 19.7146 14.947 19.7492C14.9333 19.7838 14.9276 19.821 14.9302 19.8581C14.9287 19.9254 14.9539 19.9905 15.0002 20.0391C15.0506 20.0908 15.1108 20.132 15.1772 20.1601C15.2472 20.1911 15.3492 20.2311 15.4832 20.2791C15.6453 20.3315 15.8031 20.3964 15.9552 20.4731C16.0807 20.5397 16.1886 20.6349 16.2702 20.7511C16.3635 20.8922 16.4097 21.0592 16.4022 21.2281C16.4003 21.3795 16.357 21.5275 16.2772 21.6561Z",
    fill: "white"
  }), /* @__PURE__ */ e("path", {
    d: "M5.78555 13.9612C6.18595 13.9612 6.51055 13.6366 6.51055 13.2362C6.51055 12.8358 6.18595 12.5112 5.78555 12.5112C5.38514 12.5112 5.06055 12.8358 5.06055 13.2362C5.06055 13.6366 5.38514 13.9612 5.78555 13.9612Z",
    fill: "#FF9908"
  }), /* @__PURE__ */ e("path", {
    d: "M5.06055 9.7002V10.6452C5.93994 10.6463 6.78303 10.9961 7.40486 11.6179C8.02669 12.2397 8.37648 13.0828 8.37754 13.9622H9.32256C9.32124 12.8322 8.87177 11.749 8.07278 10.95C7.27378 10.151 6.19049 9.70152 5.06055 9.7002Z",
    fill: "#FF9908"
  }), /* @__PURE__ */ e("path", {
    d: "M11.3805 13.9611H10.4355C10.434 12.5361 9.86716 11.1698 8.8595 10.1622C7.85183 9.1545 6.4856 8.5877 5.06055 8.58611V7.64111C6.73615 7.64297 8.34259 8.30942 9.52742 9.49424C10.7122 10.6791 11.3787 12.2855 11.3805 13.9611Z",
    fill: "#FF9908"
  })]
}), H9 = () => /* @__PURE__ */ n("svg", {
  id: "fileTypeId",
  width: "21",
  height: "24",
  viewBox: "0 0 21 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  children: [/* @__PURE__ */ e("g", {
    opacity: "0.3",
    children: /* @__PURE__ */ e("path", {
      opacity: "0.3",
      d: "M14.965 4.92424C14.4183 4.92371 13.8942 4.7063 13.5076 4.31971C13.121 3.93313 12.9036 3.40896 12.903 2.86224V0.000244141H3.68905C2.97552 0.000244091 2.29121 0.283624 1.78658 0.788068C1.28194 1.29251 0.998312 1.97672 0.998047 2.69025V18.9122C0.998842 19.6254 1.28271 20.3091 1.78728 20.8131C2.29186 21.3171 2.97587 21.6002 3.68905 21.6002H14.749C15.1025 21.6004 15.4526 21.5309 15.7792 21.3957C16.1058 21.2605 16.4025 21.0623 16.6525 20.8124C16.9025 20.5625 17.1008 20.2658 17.2361 19.9393C17.3714 19.6127 17.441 19.2627 17.441 18.9092V4.92424H14.965Z",
      fill: "#FF3E4C"
    })
  }), /* @__PURE__ */ e("path", {
    d: "M17.4413 4.92424H14.9653C14.4186 4.92371 13.8944 4.7063 13.5079 4.31971C13.1213 3.93313 12.9038 3.40896 12.9033 2.86224V0.000244141L17.4413 4.92424Z",
    fill: "#FF3E4C"
  }), /* @__PURE__ */ e("path", {
    d: "M19.3922 17.0603H6.88823C6.00126 17.0603 5.28223 17.7793 5.28223 18.6663V22.3943C5.28223 23.2813 6.00126 24.0003 6.88823 24.0003H19.3922C20.2792 24.0003 20.9982 23.2813 20.9982 22.3943V18.6663C20.9982 17.7793 20.2792 17.0603 19.3922 17.0603Z",
    fill: "#FF3E4C"
  }), /* @__PURE__ */ e("path", {
    d: "M8.26763 21.3372V22.0642H7.51562V21.3372H8.26763Z",
    fill: "white"
  }), /* @__PURE__ */ e("path", {
    d: "M10.1915 22.0642L9.54046 20.9292H9.37446V22.0642H8.64746V19.0572H9.88946C10.0964 19.0514 10.3018 19.0938 10.4895 19.1812C10.6439 19.2542 10.7728 19.372 10.8595 19.5192C10.9432 19.6691 10.9856 19.8385 10.9825 20.0102C10.9881 20.211 10.9246 20.4076 10.8025 20.5672C10.6678 20.7287 10.4824 20.8397 10.2765 20.8822L10.9985 22.0642H10.1915ZM9.37446 20.4312H9.82546C9.94067 20.4398 10.0548 20.404 10.1445 20.3312C10.18 20.2938 10.2073 20.2494 10.2245 20.2008C10.2417 20.1522 10.2485 20.1006 10.2445 20.0492C10.2478 19.998 10.2407 19.9467 10.2235 19.8983C10.2063 19.85 10.1794 19.8057 10.1445 19.7682C10.0561 19.6943 9.94219 19.6583 9.82746 19.6682H9.37646L9.37446 20.4312Z",
    fill: "white"
  }), /* @__PURE__ */ e("path", {
    d: "M13.2148 21.5163H12.0878L11.8978 22.0643H11.1318L12.2318 19.0793H13.0698L14.1698 22.0643H13.3978L13.2148 21.5163ZM13.0278 20.9633L12.6538 19.8573L12.2748 20.9633H13.0278Z",
    fill: "white"
  }), /* @__PURE__ */ e("path", {
    d: "M18.5438 19.0571L17.8258 22.0641H16.9258L16.4448 20.0531L15.9598 22.0641H15.0598L14.3408 19.0571H15.1318L15.5188 21.2351L16.0458 19.0571H16.8458L17.3728 21.2351L17.7638 19.0571H18.5438Z",
    fill: "white"
  }), /* @__PURE__ */ e("path", {
    d: "M7.53236 12.3662H5.10437C4.91444 11.8659 4.81751 11.3352 4.81836 10.8002C4.81763 10.2654 4.91456 9.73506 5.10437 9.23516C5.17996 9.03721 5.26986 8.84504 5.37337 8.66016L5.70837 9.23516L6.62737 10.8122L7.02737 11.5062L7.53236 12.3662Z",
    fill: "#FF3E4C"
  }), /* @__PURE__ */ e("path", {
    d: "M12.6303 13.5843C11.956 14.4111 11.0043 14.9648 9.95225 15.1423C9.73041 15.1791 9.50611 15.1991 9.28125 15.2023L9.63525 14.6023L10.5353 13.0663L10.9433 12.3663L11.4433 11.5103L11.9333 12.3663L12.3333 13.0663L12.6303 13.5843Z",
    fill: "#FF3E4C"
  }), /* @__PURE__ */ e("path", {
    d: "M13.6214 10.8002C13.6223 11.335 13.525 11.8655 13.3344 12.3652C13.2588 12.5641 13.1689 12.7573 13.0654 12.9432L12.7354 12.3652L11.8494 10.8182L11.4494 10.1182L10.9414 9.2312H13.3314C13.5235 9.73197 13.6218 10.2638 13.6214 10.8002V10.8002Z",
    fill: "#FF3E4C"
  }), /* @__PURE__ */ e("path", {
    d: "M12.9985 8.54112H8.73047L9.23947 7.65312L9.63947 6.95312L9.92447 6.45312C11.0041 6.62727 11.98 7.19777 12.6615 8.05312C12.7847 8.20799 12.8973 8.37103 12.9985 8.54112V8.54112Z",
    fill: "#FF3E4C"
  }), /* @__PURE__ */ e("path", {
    d: "M9.15543 6.40015L8.83843 6.95315L7.92943 8.54114L7.52943 9.24114L7.02943 10.1221L6.51543 9.24114L6.11543 8.54114L5.81543 8.02314C6.50338 7.17616 7.48186 6.61546 8.56043 6.45015C8.75742 6.42017 8.9562 6.40346 9.15543 6.40015V6.40015Z",
    fill: "#FF3E4C"
  }), /* @__PURE__ */ e("path", {
    d: "M9.73038 13.0623L9.23038 13.9083L8.83038 14.5963L8.50938 15.1463C7.45899 14.9744 6.50649 14.4276 5.82838 13.6073C5.68642 13.4354 5.5574 13.2532 5.44238 13.0623H9.73038Z",
    fill: "#FF3E4C"
  })]
}), p9 = () => /* @__PURE__ */ n("svg", {
  id: "fileTypeId",
  width: "21",
  height: "24",
  viewBox: "0 0 21 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  children: [/* @__PURE__ */ e("g", {
    opacity: "0.3",
    children: /* @__PURE__ */ e("path", {
      opacity: "0.3",
      d: "M14.9635 4.92504C14.4167 4.92424 13.8926 4.70662 13.506 4.31989C13.1195 3.93316 12.9021 3.40891 12.9016 2.86212V0.000244326H3.68896C3.33551 0.000112979 2.98548 0.0696181 2.65889 0.204789C2.3323 0.33996 2.03554 0.538144 1.78556 0.788029C1.53558 1.03791 1.33729 1.3346 1.20199 1.66114C1.0667 1.98768 0.99707 2.33768 0.99707 2.69114V18.9125C0.99707 19.2659 1.0667 19.6159 1.20199 19.9424C1.33729 20.269 1.53558 20.5657 1.78556 20.8155C2.03554 21.0654 2.3323 21.2636 2.65889 21.3988C2.98548 21.534 3.33551 21.6035 3.68896 21.6033H14.7485C15.4622 21.6033 16.1466 21.3198 16.6512 20.8152C17.1559 20.3106 17.4394 19.6261 17.4394 18.9125V4.92504H14.9635Z",
      fill: "#9747FF"
    })
  }), /* @__PURE__ */ e("path", {
    d: "M17.4392 4.92504H14.9633C14.4165 4.92424 13.8924 4.70662 13.5058 4.31989C13.1193 3.93316 12.9019 3.40891 12.9014 2.86212V0.000244141L17.4392 4.92504Z",
    fill: "#9747FF"
  }), /* @__PURE__ */ e("path", {
    d: "M19.3916 17.0605H6.88816C6.00123 17.0605 5.28223 17.7795 5.28223 18.6665V22.3943C5.28223 23.2813 6.00123 24.0003 6.88816 24.0003H19.3916C20.2786 24.0003 20.9976 23.2813 20.9976 22.3943V18.6665C20.9976 17.7795 20.2786 17.0605 19.3916 17.0605Z",
    fill: "#9747FF"
  }), /* @__PURE__ */ e("path", {
    d: "M9.18754 21.3374V22.0644H8.43457V21.3374H9.18754Z",
    fill: "white"
  }), /* @__PURE__ */ e("path", {
    d: "M11.1103 22.0643L10.4594 20.9283H10.2934V22.0643H9.56641V19.0574H10.8084C11.0151 19.0517 11.2205 19.0938 11.4083 19.1804C11.5625 19.2537 11.6914 19.3714 11.7783 19.5184C11.862 19.6686 11.9045 19.8384 11.9013 20.0104C11.9072 20.2113 11.8432 20.4082 11.7203 20.5673C11.5864 20.729 11.4011 20.8398 11.1953 20.8813L11.9103 22.0643H11.1103ZM10.2934 20.4313H10.7444C10.8596 20.44 10.9737 20.4042 11.0634 20.3313C11.0989 20.2938 11.1261 20.2492 11.1433 20.2004C11.1606 20.1517 11.1674 20.0999 11.1633 20.0483C11.1667 19.9972 11.1595 19.9459 11.1423 19.8976C11.1251 19.8492 11.0983 19.8049 11.0634 19.7674C10.9749 19.6937 10.8611 19.6578 10.7464 19.6674H10.2954L10.2934 20.4313Z",
    fill: "white"
  }), /* @__PURE__ */ e("path", {
    d: "M14.1346 21.5153H13.0077L12.8197 22.0642H12.0547L13.1546 19.0784H13.9916L15.0916 22.0642H14.3176L14.1346 21.5153ZM13.9476 20.9623L13.5726 19.8563L13.1946 20.9623H13.9476Z",
    fill: "white"
  }), /* @__PURE__ */ e("path", {
    d: "M16.9199 22.0643L16.2689 20.9283H16.1029V22.0643H15.376V19.0574H16.6179C16.8247 19.0517 17.03 19.0938 17.2179 19.1804C17.3721 19.2537 17.501 19.3714 17.5879 19.5184C17.6716 19.6686 17.7141 19.8384 17.7109 20.0104C17.7167 20.2113 17.6528 20.4082 17.5299 20.5673C17.396 20.729 17.2107 20.8398 17.0049 20.8813L17.7199 22.0643H16.9199ZM16.1029 20.4313H16.5539C16.6691 20.4398 16.7832 20.404 16.8729 20.3313C16.9084 20.2938 16.9357 20.2492 16.9529 20.2004C16.9701 20.1517 16.9769 20.0999 16.9729 20.0483C16.9762 19.9972 16.9691 19.9459 16.9519 19.8976C16.9347 19.8492 16.9078 19.8049 16.8729 19.7674C16.7845 19.6937 16.6706 19.6578 16.5559 19.6674H16.105L16.1029 20.4313Z",
    fill: "white"
  }), /* @__PURE__ */ e("path", {
    d: "M10.4939 15.0837H4.24215C4.14287 15.0834 4.04775 15.0438 3.97764 14.9735C3.90754 14.9032 3.86816 14.808 3.86816 14.7087C3.86816 14.6095 3.90757 14.5144 3.97771 14.4443C4.04784 14.3741 4.14296 14.3347 4.24215 14.3347H10.4939C10.5431 14.3346 10.5918 14.3442 10.6373 14.3629C10.6828 14.3816 10.7241 14.4092 10.759 14.4439C10.7938 14.4786 10.8215 14.5199 10.8403 14.5654C10.8592 14.6108 10.8689 14.6595 10.8689 14.7087C10.8689 14.8082 10.8294 14.9035 10.759 14.9739C10.6887 15.0442 10.5933 15.0837 10.4939 15.0837Z",
    fill: "#9747FF"
  }), /* @__PURE__ */ e("path", {
    d: "M10.4939 12.8747H4.24215C4.14287 12.8744 4.04775 12.8348 3.97764 12.7645C3.90754 12.6942 3.86816 12.599 3.86816 12.4997C3.86843 12.4006 3.90792 12.3056 3.978 12.2356C4.04808 12.1655 4.14304 12.126 4.24215 12.1257H10.4939C10.5932 12.1257 10.6884 12.1651 10.7587 12.2352C10.829 12.3053 10.8686 12.4004 10.8689 12.4997C10.8689 12.5992 10.8294 12.6945 10.759 12.7649C10.6887 12.8352 10.5933 12.8747 10.4939 12.8747Z",
    fill: "#9747FF"
  }), /* @__PURE__ */ e("path", {
    d: "M10.4939 10.6657H4.24215C4.14296 10.6657 4.04784 10.6263 3.97771 10.5562C3.90757 10.486 3.86816 10.3909 3.86816 10.2917C3.86816 10.1925 3.90754 10.0972 3.97764 10.0269C4.04775 9.95663 4.14287 9.91701 4.24215 9.91675H10.4939C10.5933 9.91675 10.6887 9.95625 10.759 10.0266C10.8294 10.0969 10.8689 10.1923 10.8689 10.2917C10.8689 10.3409 10.8592 10.3896 10.8403 10.4351C10.8215 10.4805 10.7938 10.5218 10.759 10.5565C10.7241 10.5913 10.6828 10.6188 10.6373 10.6375C10.5918 10.6563 10.5431 10.6658 10.4939 10.6657Z",
    fill: "#9747FF"
  }), /* @__PURE__ */ e("path", {
    d: "M10.4939 8.45695H4.24215C4.14296 8.45695 4.04784 8.41756 3.97771 8.34742C3.90757 8.27729 3.86816 8.18216 3.86816 8.08297C3.86816 7.98378 3.90757 7.88866 3.97771 7.81853C4.04784 7.74839 4.14296 7.70899 4.24215 7.70899H10.4939C10.5431 7.70885 10.5918 7.71843 10.6373 7.73717C10.6828 7.75591 10.7241 7.78343 10.759 7.81817C10.7938 7.85291 10.8215 7.89419 10.8403 7.93963C10.8592 7.98507 10.8689 8.03377 10.8689 8.08297C10.8689 8.13217 10.8592 8.18088 10.8403 8.22632C10.8215 8.27176 10.7938 8.31304 10.759 8.34778C10.7241 8.38252 10.6828 8.41004 10.6373 8.42878C10.5918 8.44752 10.5431 8.45708 10.4939 8.45695Z",
    fill: "#9747FF"
  }), /* @__PURE__ */ e("path", {
    d: "M13.2973 15.2515C12.9608 15.2513 12.6382 15.1175 12.4003 14.8796C12.1624 14.6416 12.0286 14.319 12.0283 13.9826V12.7136H14.5652V13.9826C14.5649 14.3189 14.4313 14.6413 14.1936 14.8792C13.9559 15.1171 13.6336 15.251 13.2973 15.2515ZM12.6773 13.3626V13.9826C12.6776 14.1469 12.743 14.3045 12.8592 14.4207C12.9754 14.5369 13.1329 14.6023 13.2973 14.6025C13.4616 14.6023 13.6192 14.5369 13.7354 14.4207C13.8516 14.3045 13.917 14.1469 13.9172 13.9826V13.3626H12.6773Z",
    fill: "#9747FF"
  }), /* @__PURE__ */ e("path", {
    d: "M12.0288 12.7148H13.3008V11.4429H12.0288V12.7148Z",
    fill: "#9747FF"
  }), /* @__PURE__ */ e("path", {
    d: "M13.2964 11.4438H14.5684V10.1719H13.2964V11.4438Z",
    fill: "#9747FF"
  }), /* @__PURE__ */ e("path", {
    d: "M12.0288 10.1729H13.3008V8.90091H12.0288V10.1729Z",
    fill: "#9747FF"
  }), /* @__PURE__ */ e("path", {
    d: "M13.2964 8.90186H14.5684V7.62991H13.2964V8.90186Z",
    fill: "#9747FF"
  })]
}), u9 = () => /* @__PURE__ */ n("svg", {
  id: "fileTypeId",
  width: "21",
  height: "24",
  viewBox: "0 0 21 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  children: [/* @__PURE__ */ e("g", {
    opacity: "0.3",
    children: /* @__PURE__ */ e("path", {
      opacity: "0.3",
      d: "M13.9724 4.92504C13.4256 4.92451 12.9013 4.70714 12.5146 4.3206C12.1279 3.93406 11.9102 3.4099 11.9095 2.86311V0.000244141H2.69283C1.97916 0.000244141 1.29473 0.283756 0.790092 0.788395C0.285452 1.29303 0.00195312 1.97746 0.00195312 2.69112V18.9124C0.00301292 19.6254 0.286983 20.3088 0.791508 20.8126C1.29603 21.3164 1.97986 21.5993 2.69283 21.5993H13.7524C14.4661 21.5993 15.1505 21.3158 15.6551 20.8112C16.1597 20.3066 16.4433 19.6221 16.4433 18.9085V4.92104L13.9724 4.92504Z",
      fill: "#FF3E4C"
    })
  }), /* @__PURE__ */ e("path", {
    d: "M16.443 4.92504H13.9721C13.4253 4.92451 12.9011 4.70714 12.5143 4.3206C12.1276 3.93406 11.91 3.4099 11.9092 2.86311V0.000244141L16.443 4.92504Z",
    fill: "#FF3E4C"
  }), /* @__PURE__ */ e("path", {
    d: "M18.3955 17.0605H5.89206C5.00513 17.0605 4.28613 17.7795 4.28613 18.6665V22.3943C4.28613 23.2813 5.00513 24.0003 5.89206 24.0003H18.3955C19.2825 24.0003 20.0015 23.2813 20.0015 22.3943V18.6665C20.0015 17.7795 19.2825 17.0605 18.3955 17.0605Z",
    fill: "#FF3E4C"
  }), /* @__PURE__ */ e("path", {
    d: "M8.90569 21.0093V22.0642H8.17773V19.0574H9.35668C9.714 19.0574 9.98599 19.146 10.1726 19.3234C10.2674 19.4163 10.3414 19.5282 10.3898 19.6518C10.4383 19.7753 10.46 19.9078 10.4536 20.0403C10.4569 20.2152 10.4134 20.3878 10.3276 20.5403C10.2409 20.6898 10.1113 20.81 9.95565 20.8853C9.76848 20.9742 9.56277 21.017 9.35568 21.0103L8.90569 21.0093ZM9.71367 20.0403C9.71367 19.7737 9.56767 19.6403 9.27569 19.6403H8.90569V20.4233H9.27569C9.56767 20.426 9.71367 20.2983 9.71367 20.0403Z",
    fill: "white"
  }), /* @__PURE__ */ e("path", {
    d: "M11.5167 19.0574V20.7923C11.5057 20.9554 11.5532 21.1171 11.6507 21.2483C11.6996 21.302 11.7599 21.344 11.8272 21.3712C11.8946 21.3984 11.9672 21.41 12.0397 21.4053C12.1123 21.4101 12.1851 21.3985 12.2526 21.3713C12.3201 21.3441 12.3806 21.3021 12.4296 21.2483C12.5271 21.1171 12.5747 20.9554 12.5637 20.7923V19.0574H13.2906V20.7923C13.2991 21.0417 13.2418 21.289 13.1246 21.5093C13.0203 21.6969 12.8626 21.8493 12.6716 21.9472C12.4703 22.0477 12.2477 22.0981 12.0227 22.0942C11.8013 22.0989 11.5823 22.0491 11.3847 21.9492C11.1986 21.8515 11.0474 21.6985 10.9517 21.5113C10.8402 21.2885 10.7858 21.0413 10.7937 20.7923V19.0574H11.5167Z",
    fill: "white"
  }), /* @__PURE__ */ e("path", {
    d: "M16.0103 20.7804C16.1155 20.9115 16.1718 21.0752 16.1693 21.2434C16.1746 21.3563 16.1542 21.469 16.1097 21.5729C16.0652 21.6768 15.9977 21.7693 15.9123 21.8433C15.7403 21.988 15.4943 22.0603 15.1744 22.0603H13.7744V19.0535H15.1393C15.4453 19.0535 15.682 19.1201 15.8493 19.2535C15.9333 19.3218 15.9998 19.4091 16.0435 19.5082C16.0871 19.6073 16.1066 19.7153 16.1003 19.8234C16.1061 19.9865 16.0552 20.1466 15.9563 20.2764C15.8609 20.3963 15.727 20.4796 15.5773 20.5124C15.7483 20.549 15.9013 20.6437 16.0103 20.7804ZM14.5024 20.2864H14.9784C15.2314 20.2864 15.3574 20.1794 15.3574 19.9634C15.3574 19.7474 15.2283 19.6404 14.9704 19.6404H14.5024V20.2864ZM15.4253 21.1414C15.4275 21.094 15.4192 21.0467 15.4008 21.0029C15.3825 20.9592 15.3547 20.9201 15.3193 20.8884C15.2335 20.8231 15.127 20.7908 15.0194 20.7974H14.5044V21.4734H15.0234C15.2907 21.4734 15.4247 21.3627 15.4253 21.1414Z",
    fill: "white"
  }), /* @__PURE__ */ e("path", {
    d: "M7.10309 8.37299H2.73727C2.63808 8.37299 2.54295 8.33359 2.47281 8.26345C2.40268 8.19331 2.36328 8.09819 2.36328 7.99901C2.36315 7.94981 2.37272 7.90107 2.39146 7.85558C2.41019 7.81009 2.43772 7.76874 2.47246 7.73391C2.5072 7.69907 2.54847 7.67144 2.59391 7.65259C2.63935 7.63373 2.68807 7.62402 2.73727 7.62402H7.10309C7.20184 7.62534 7.29608 7.66556 7.36536 7.73596C7.43463 7.80635 7.47334 7.90124 7.47307 8.00001C7.47255 8.09825 7.4335 8.19238 7.36431 8.26213C7.29512 8.33188 7.20133 8.37168 7.10309 8.37299Z",
    fill: "#FF3E4C"
  }), /* @__PURE__ */ e("path", {
    d: "M7.10309 10.6098H2.73727C2.63808 10.6098 2.54295 10.5704 2.47281 10.5003C2.40268 10.4301 2.36328 10.335 2.36328 10.2358C2.36315 10.1866 2.37272 10.1379 2.39146 10.0924C2.41019 10.0469 2.43772 10.0056 2.47246 9.97072C2.5072 9.93589 2.54847 9.90826 2.59391 9.8894C2.63935 9.87055 2.68807 9.86084 2.73727 9.86084H7.10309C7.20237 9.8611 7.29748 9.90072 7.36759 9.97102C7.4377 10.0413 7.47707 10.1365 7.47707 10.2358C7.47681 10.3349 7.43732 10.4299 7.36724 10.5C7.29716 10.5701 7.20219 10.6095 7.10309 10.6098Z",
    fill: "#FF3E4C"
  }), /* @__PURE__ */ e("path", {
    d: "M7.10309 12.8466H2.73727C2.68807 12.8466 2.63935 12.8369 2.59391 12.8181C2.54847 12.7992 2.5072 12.7716 2.47246 12.7367C2.43772 12.7019 2.41019 12.6606 2.39146 12.6151C2.37272 12.5696 2.36315 12.5208 2.36328 12.4716C2.36328 12.3725 2.40268 12.2773 2.47281 12.2072C2.54295 12.1371 2.63808 12.0977 2.73727 12.0977H7.10309C7.20219 12.0979 7.29716 12.1374 7.36724 12.2075C7.43732 12.2776 7.47681 12.3725 7.47707 12.4716C7.47707 12.5709 7.4377 12.6662 7.36759 12.7364C7.29748 12.8067 7.20237 12.8464 7.10309 12.8466Z",
    fill: "#FF3E4C"
  }), /* @__PURE__ */ e("path", {
    d: "M7.10309 15.0837H2.73727C2.68807 15.0837 2.63935 15.074 2.59391 15.0551C2.54847 15.0363 2.5072 15.0086 2.47246 14.9738C2.43772 14.9389 2.41019 14.8976 2.39146 14.8521C2.37272 14.8066 2.36315 14.7579 2.36328 14.7087C2.36328 14.6095 2.40268 14.5144 2.47281 14.4442C2.54295 14.3741 2.63808 14.3347 2.73727 14.3347H7.10309C7.20219 14.335 7.29716 14.3744 7.36724 14.4445C7.43732 14.5146 7.47681 14.6096 7.47707 14.7087C7.47707 14.808 7.4377 14.9032 7.36759 14.9735C7.29748 15.0438 7.20237 15.0834 7.10309 15.0837Z",
    fill: "#FF3E4C"
  }), /* @__PURE__ */ e("path", {
    d: "M13.0605 8.37299H8.80465C8.70546 8.37299 8.61034 8.33359 8.54021 8.26345C8.47007 8.19331 8.43067 8.09819 8.43067 7.99901C8.43053 7.94981 8.44011 7.90107 8.45885 7.85558C8.47759 7.81009 8.50511 7.76874 8.53985 7.73391C8.57459 7.69907 8.61587 7.67144 8.66131 7.65259C8.70675 7.63373 8.75545 7.62402 8.80465 7.62402H13.0605C13.1599 7.62402 13.2553 7.66353 13.3256 7.73386C13.396 7.80418 13.4355 7.89956 13.4355 7.99901C13.4352 8.09829 13.3956 8.19342 13.3253 8.26352C13.255 8.33363 13.1598 8.37299 13.0605 8.37299Z",
    fill: "#FF3E4C"
  }), /* @__PURE__ */ e("path", {
    d: "M13.0605 10.6098H8.80465C8.70546 10.6098 8.61034 10.5704 8.54021 10.5003C8.47007 10.4301 8.43067 10.335 8.43067 10.2358C8.43053 10.1866 8.44011 10.1379 8.45885 10.0924C8.47759 10.0469 8.50511 10.0056 8.53985 9.97072C8.57459 9.93589 8.61587 9.90826 8.66131 9.8894C8.70675 9.87055 8.75545 9.86084 8.80465 9.86084H13.0605C13.1599 9.86084 13.2553 9.90033 13.3256 9.97065C13.396 10.041 13.4355 10.1364 13.4355 10.2358C13.4352 10.3351 13.3956 10.4302 13.3253 10.5003C13.255 10.5704 13.1598 10.6098 13.0605 10.6098Z",
    fill: "#FF3E4C"
  }), /* @__PURE__ */ e("path", {
    d: "M13.0605 12.8466H8.80465C8.75545 12.8466 8.70675 12.8369 8.66131 12.8181C8.61587 12.7992 8.57459 12.7716 8.53985 12.7367C8.50511 12.7019 8.47759 12.6606 8.45885 12.6151C8.44011 12.5696 8.43053 12.5208 8.43067 12.4716C8.43067 12.3725 8.47007 12.2773 8.54021 12.2072C8.61034 12.1371 8.70546 12.0977 8.80465 12.0977H13.0605C13.1598 12.0977 13.255 12.137 13.3253 12.2071C13.3956 12.2772 13.4352 12.3724 13.4355 12.4716C13.4355 12.5711 13.396 12.6665 13.3256 12.7368C13.2553 12.8071 13.1599 12.8466 13.0605 12.8466Z",
    fill: "#FF3E4C"
  }), /* @__PURE__ */ e("path", {
    d: "M13.0605 15.0837H8.80465C8.75545 15.0837 8.70675 15.074 8.66131 15.0551C8.61587 15.0363 8.57459 15.0086 8.53985 14.9738C8.50511 14.9389 8.47759 14.8976 8.45885 14.8521C8.44011 14.8066 8.43053 14.7579 8.43067 14.7087C8.43067 14.6095 8.47007 14.5144 8.54021 14.4442C8.61034 14.3741 8.70546 14.3347 8.80465 14.3347H13.0605C13.1598 14.3347 13.255 14.3741 13.3253 14.4442C13.3956 14.5143 13.4352 14.6094 13.4355 14.7087C13.4355 14.8082 13.396 14.9035 13.3256 14.9739C13.2553 15.0442 13.1599 15.0837 13.0605 15.0837Z",
    fill: "#FF3E4C"
  })]
}), V9 = () => /* @__PURE__ */ n("svg", {
  id: "fileTypeId",
  width: "20",
  height: "24",
  viewBox: "0 0 20 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  children: [/* @__PURE__ */ e("g", {
    opacity: "0.3",
    children: /* @__PURE__ */ e("path", {
      opacity: "0.3",
      d: "M13.9664 4.92504C13.4196 4.92451 12.8953 4.70697 12.5087 4.32018C12.1221 3.9334 11.9048 3.40899 11.9045 2.86212V0.000244141H2.6909C1.97724 0.000244141 1.29279 0.283743 0.788151 0.788383C0.283511 1.29302 0 1.97747 0 2.69114V18.9125C0 19.6261 0.283511 20.3106 0.788151 20.8152C1.29279 21.3198 1.97724 21.6033 2.6909 21.6033H13.7504C14.4641 21.6033 15.1485 21.3198 15.6532 20.8152C16.1578 20.3106 16.4413 19.6261 16.4413 18.9125V4.92504H13.9664Z",
      fill: "#005FAD"
    })
  }), /* @__PURE__ */ e("path", {
    d: "M16.4411 4.92504H13.9662C13.4194 4.92451 12.895 4.70697 12.5084 4.32018C12.1218 3.9334 11.9046 3.40899 11.9043 2.86212V0.000244141L16.4411 4.92504Z",
    fill: "#005FAD"
  }), /* @__PURE__ */ e("path", {
    d: "M18.3936 17.0605H5.89012C5.00319 17.0605 4.28418 17.7795 4.28418 18.6665V22.3943C4.28418 23.2813 5.00319 24.0003 5.89012 24.0003H18.3936C19.2805 24.0003 19.9995 23.2813 19.9995 22.3943V18.6665C19.9995 17.7795 19.2805 17.0605 18.3936 17.0605Z",
    fill: "#005FAD"
  }), /* @__PURE__ */ e("path", {
    d: "M8.36821 21.3374V22.0644H7.61523V21.3374H8.36821Z",
    fill: "white"
  }), /* @__PURE__ */ e("path", {
    d: "M9.47504 21.0093V22.0643H8.74707V19.0574H9.92603C10.283 19.0574 10.555 19.1454 10.742 19.3234C10.8367 19.4161 10.9106 19.5279 10.9591 19.6513C11.0075 19.7747 11.0293 19.9069 11.023 20.0393C11.0257 20.2141 10.9826 20.3864 10.898 20.5393C10.8106 20.6887 10.6807 20.8088 10.525 20.8843C10.3376 20.9726 10.1321 21.0154 9.92502 21.0093H9.47504ZM10.283 20.0393C10.283 19.776 10.137 19.6427 9.84502 19.6394H9.47504V20.4213H9.84502C10.137 20.4247 10.283 20.2973 10.283 20.0393Z",
    fill: "white"
  }), /* @__PURE__ */ e("path", {
    d: "M13.4198 21.6564C13.3331 21.7945 13.2089 21.9051 13.0618 21.9754C12.8831 22.0592 12.6872 22.0999 12.4898 22.0943C12.1925 22.1061 11.8997 22.0193 11.6568 21.8474C11.5491 21.7669 11.4609 21.6632 11.3989 21.5439C11.337 21.4246 11.3027 21.2928 11.2989 21.1584H12.0738C12.0787 21.2598 12.1219 21.3557 12.1948 21.4264C12.2668 21.4935 12.3624 21.5295 12.4608 21.5264C12.5417 21.5306 12.621 21.5029 12.6818 21.4494C12.7085 21.4235 12.7294 21.3924 12.7434 21.3579C12.7573 21.3235 12.764 21.2865 12.7628 21.2494C12.7639 21.2141 12.7578 21.179 12.7449 21.1462C12.732 21.1134 12.7126 21.0835 12.6878 21.0584C12.6347 21.005 12.5719 20.9623 12.5028 20.9324C12.4288 20.9004 12.3268 20.8614 12.1968 20.8154C12.0374 20.7629 11.8818 20.6997 11.7308 20.6264C11.607 20.5622 11.5006 20.4689 11.4208 20.3544C11.3287 20.2155 11.2832 20.0509 11.2909 19.8844C11.2867 19.7194 11.3342 19.5571 11.4268 19.4205C11.5217 19.2873 11.6519 19.1833 11.8028 19.1205C11.9778 19.05 12.1653 19.0159 12.3538 19.0205C12.64 19.0045 12.9229 19.0886 13.1538 19.2585C13.2519 19.3384 13.3323 19.438 13.3898 19.5508C13.4473 19.6635 13.4807 19.7871 13.4878 19.9134H12.7008C12.6918 19.8248 12.6534 19.7418 12.5918 19.6775C12.5604 19.6477 12.5233 19.6247 12.4827 19.6097C12.4422 19.5948 12.399 19.5882 12.3558 19.5905C12.2811 19.5866 12.2076 19.6109 12.1498 19.6585C12.1225 19.6837 12.1012 19.7148 12.0875 19.7494C12.0738 19.7841 12.0681 19.8213 12.0708 19.8584C12.0697 19.9256 12.0948 19.9905 12.1408 20.0394C12.1912 20.0911 12.2514 20.1322 12.3178 20.1604C12.3888 20.1914 12.4908 20.2314 12.6238 20.2794C12.7859 20.3318 12.9437 20.3967 13.0958 20.4734C13.2214 20.5397 13.3294 20.635 13.4108 20.7514C13.5039 20.8922 13.5501 21.0588 13.5428 21.2274C13.5416 21.3789 13.4991 21.5272 13.4198 21.6564Z",
    fill: "white"
  }), /* @__PURE__ */ e("path", {
    d: "M16.4563 21.3394C16.331 21.5668 16.1414 21.7521 15.9113 21.8724C15.6536 22.0055 15.3664 22.0715 15.0764 22.0644H13.9404V19.0575H15.0764C15.3665 19.0498 15.6541 19.1141 15.9133 19.2445C16.1423 19.3628 16.3312 19.5462 16.4563 19.7715C16.5856 20.0118 16.6507 20.2815 16.6453 20.5544C16.6504 20.828 16.5854 21.0982 16.4563 21.3394ZM15.6733 21.1884C15.7548 21.1051 15.8179 21.0056 15.8585 20.8964C15.8992 20.7872 15.9165 20.6707 15.9093 20.5544C15.9165 20.4382 15.8992 20.3217 15.8585 20.2125C15.8179 20.1033 15.7548 20.0038 15.6733 19.9205C15.4912 19.7614 15.2537 19.6806 15.0124 19.6955H14.6674V21.4134H15.0124C15.2551 21.4294 15.4942 21.3485 15.6773 21.1884H15.6733Z",
    fill: "white"
  }), /* @__PURE__ */ e("path", {
    d: "M5.00465 13.0808C5.00465 13.0808 4.35367 11.6978 5.19663 10.3479C5.19663 10.3479 5.44563 11.0739 5.65062 11.0269C5.65062 11.0269 5.38963 9.98592 5.58163 9.67793C5.58163 9.67793 6.41359 8.48498 7.33155 7.84001C7.33155 7.84001 7.36155 8.54897 7.57754 8.60697C7.57754 8.60697 7.54354 8.16899 7.84852 7.50702C7.84852 7.50702 9.32846 6.36707 11.7984 6.47106C11.7984 6.47106 10.8234 7.981 10.2754 8.99896C9.9857 9.54862 9.66727 10.0827 9.32146 10.5989C9.32146 10.5989 8.59549 11.0229 8.12151 10.9829C8.12151 10.9829 8.5215 11.2969 8.95548 11.1419C8.95548 11.1419 7.85053 13.1418 5.70662 13.3938C5.70662 13.3938 5.30663 14.2167 5.22664 14.9377C5.22664 14.9377 4.82666 15.1797 4.63867 15.1377C4.63867 15.1377 5.67563 11.1549 9.21048 8.26898C9.21548 8.26898 7.17756 8.80797 5.00465 13.0808Z",
    fill: "#005FAD"
  })]
}), g9 = () => /* @__PURE__ */ n("svg", {
  id: "fileTypeId",
  width: "21",
  height: "24",
  viewBox: "0 0 21 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  children: [/* @__PURE__ */ e("g", {
    opacity: "0.3",
    children: /* @__PURE__ */ e("path", {
      opacity: "0.3",
      d: "M14.965 4.92424C14.4183 4.92371 13.8942 4.7063 13.5076 4.31971C13.121 3.93313 12.9036 3.40896 12.903 2.86224V0.000244141H3.68905C2.97535 0.000244141 2.29088 0.283755 1.78622 0.788416C1.28156 1.29308 0.998047 1.97755 0.998047 2.69125V18.9122C0.998842 19.6254 1.28271 20.3091 1.78728 20.8131C2.29186 21.3171 2.97587 21.6002 3.68905 21.6002H14.749C15.1026 21.6002 15.4526 21.5306 15.7792 21.3953C16.1058 21.26 16.4026 21.0618 16.6526 20.8118C16.9026 20.5618 17.1008 20.265 17.2361 19.9384C17.3714 19.6118 17.441 19.2618 17.441 18.9082V4.92024L14.965 4.92424Z",
      fill: "#005FAD"
    })
  }), /* @__PURE__ */ e("path", {
    d: "M17.4413 4.92424H14.9653C14.4186 4.92371 13.8944 4.7063 13.5079 4.31971C13.1213 3.93313 12.9038 3.40896 12.9033 2.86224V0.000244141L17.4413 4.92424Z",
    fill: "#005FAD"
  }), /* @__PURE__ */ e("path", {
    d: "M19.3922 17.0603H6.88823C6.00126 17.0603 5.28223 17.7793 5.28223 18.6663V22.3943C5.28223 23.2813 6.00126 24.0003 6.88823 24.0003H19.3922C20.2792 24.0003 20.9982 23.2813 20.9982 22.3943V18.6663C20.9982 17.7793 20.2792 17.0603 19.3922 17.0603Z",
    fill: "#005FAD"
  }), /* @__PURE__ */ e("path", {
    d: "M10.8096 21.3372V22.0652H10.0566V21.3372H10.8096Z",
    fill: "white"
  }), /* @__PURE__ */ e("path", {
    d: "M11.9165 21.0104V22.0654H11.1885V19.0583H12.3675C12.7241 19.0583 12.9961 19.1467 13.1835 19.3234C13.2781 19.4164 13.352 19.5283 13.4004 19.6519C13.4488 19.7754 13.4707 19.9078 13.4645 20.0404C13.4676 20.2153 13.4241 20.3878 13.3385 20.5404C13.2519 20.6899 13.1223 20.8097 12.9665 20.8844C12.7794 20.9736 12.5737 21.0168 12.3665 21.0104H11.9165ZM12.7245 20.0404C12.7245 19.7737 12.5785 19.6404 12.2865 19.6404H11.9165V20.4234H12.2865C12.5785 20.426 12.7245 20.2984 12.7245 20.0404V20.0404Z",
    fill: "white"
  }), /* @__PURE__ */ e("path", {
    d: "M15.8613 21.6562C15.7752 21.7948 15.6508 21.9055 15.5033 21.9752C15.3247 22.0594 15.1287 22.1002 14.9313 22.0941C14.6341 22.1063 14.3412 22.0198 14.0983 21.8482C13.9906 21.7676 13.9025 21.6638 13.8406 21.5446C13.7786 21.4253 13.7443 21.2935 13.7403 21.1591H14.5143C14.5206 21.2604 14.5641 21.3558 14.6363 21.4272C14.708 21.4941 14.8032 21.5301 14.9013 21.5272C14.9824 21.5319 15.0621 21.5046 15.1233 21.4512C15.1496 21.4251 15.1703 21.3939 15.1841 21.3595C15.1978 21.3251 15.2044 21.2882 15.2033 21.2512C15.2045 21.2158 15.1986 21.1806 15.1859 21.1476C15.1732 21.1146 15.1539 21.0845 15.1293 21.0592C15.0764 21.0058 15.0135 20.9633 14.9443 20.9342C14.8703 20.9015 14.7683 20.8625 14.6383 20.8172C14.4788 20.7648 14.3231 20.7017 14.1723 20.6282C14.0479 20.5639 13.9411 20.4702 13.8613 20.3552C13.7698 20.216 13.7247 20.0515 13.7323 19.8852C13.7281 19.7204 13.7756 19.5585 13.8683 19.4222C13.9628 19.2887 14.0932 19.1847 14.2443 19.1222C14.4192 19.0515 14.6067 19.0175 14.7953 19.0222C15.0815 19.0063 15.3643 19.0905 15.5953 19.2602C15.6934 19.3401 15.7737 19.4396 15.8311 19.5524C15.8884 19.6652 15.9215 19.7888 15.9283 19.9152H15.1423C15.1325 19.8267 15.0942 19.7439 15.0333 19.6792C15.0019 19.6494 14.9648 19.6264 14.9242 19.6114C14.8836 19.5965 14.8405 19.5899 14.7973 19.5922C14.7225 19.5883 14.6491 19.6126 14.5913 19.6602C14.5639 19.6854 14.5426 19.7165 14.529 19.7511C14.5153 19.7858 14.5096 19.823 14.5123 19.8602C14.5114 19.8933 14.5172 19.9263 14.5292 19.9572C14.5412 19.9881 14.5592 20.0163 14.5823 20.0402C14.6326 20.0922 14.6928 20.1336 14.7593 20.1622C14.8303 20.1932 14.9323 20.2332 15.0653 20.2812C15.2273 20.3333 15.3851 20.3978 15.5373 20.4742C15.6627 20.5412 15.7706 20.6367 15.8523 20.7532C15.9454 20.8939 15.9916 21.0605 15.9843 21.2292C15.9826 21.38 15.9401 21.5275 15.8613 21.6562Z",
    fill: "white"
  }), /* @__PURE__ */ e("path", {
    d: "M6.00372 13.0813C6.00372 13.0813 5.35172 11.6983 6.19472 10.3483C6.19472 10.3483 6.44372 11.0743 6.64872 11.0263C6.64872 11.0263 6.38772 9.98531 6.57972 9.67731C6.57972 9.67731 7.41172 8.48531 8.33072 7.84031C8.33072 7.84031 8.35972 8.5493 8.57572 8.6073C8.57572 8.6073 8.54172 8.1693 8.84672 7.5073C8.84672 7.5073 10.3267 6.36731 12.7967 6.47131C12.7967 6.47131 11.8217 7.98031 11.2737 8.99931C10.9842 9.54911 10.6657 10.0832 10.3197 10.5993C10.3197 10.5993 9.59372 11.0243 9.11972 10.9843C9.11972 10.9843 9.51972 11.2983 9.95372 11.1423C9.95372 11.1423 8.84872 13.1423 6.70472 13.3953C6.70472 13.3953 6.30472 14.2183 6.22472 14.9383C6.22472 14.9383 5.82472 15.1803 5.63672 15.1383C5.63672 15.1383 6.67372 11.1543 10.2087 8.2693C10.2137 8.2693 8.17572 8.80832 6.00372 13.0813Z",
    fill: "#005FAD"
  })]
}), w9 = () => /* @__PURE__ */ n("svg", {
  id: "fileTypeId",
  width: "21",
  height: "24",
  viewBox: "0 0 21 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  children: [/* @__PURE__ */ e("g", {
    opacity: "0.3",
    children: /* @__PURE__ */ e("path", {
      opacity: "0.3",
      d: "M14.9635 4.92504C14.4168 4.92451 13.8926 4.70709 13.5061 4.32052C13.1195 3.93395 12.9021 3.4098 12.9016 2.86311V0.000244141H3.68795C2.97428 0.000244141 2.28986 0.283756 1.78522 0.788395C1.28058 1.29303 0.99707 1.97746 0.99707 2.69112V18.9124C0.99707 19.6261 1.28058 20.3106 1.78522 20.8152C2.28986 21.3198 2.97428 21.6033 3.68795 21.6033H14.7475C15.101 21.6035 15.451 21.534 15.7776 21.3988C16.1041 21.2636 16.4009 21.0655 16.6509 20.8156C16.9009 20.5657 17.0992 20.269 17.2345 19.9425C17.3697 19.6159 17.4394 19.2659 17.4394 18.9124V4.92504H14.9635Z",
      fill: "#FF3E4C"
    })
  }), /* @__PURE__ */ e("path", {
    d: "M17.4392 4.92504H14.9633C14.4166 4.92451 13.8924 4.70709 13.5059 4.32052C13.1193 3.93395 12.9019 3.4098 12.9014 2.86311V0.000244141L17.4392 4.92504Z",
    fill: "#FF3E4C"
  }), /* @__PURE__ */ e("path", {
    d: "M19.3906 17.0605H6.88716C6.00023 17.0605 5.28125 17.7795 5.28125 18.6665V22.3943C5.28125 23.2813 6.00023 24.0003 6.88716 24.0003H19.3906C20.2776 24.0003 20.9966 23.2813 20.9966 22.3943V18.6665C20.9966 17.7795 20.2776 17.0605 19.3906 17.0605Z",
    fill: "#FF3E4C"
  }), /* @__PURE__ */ e("path", {
    d: "M9.6768 21.3374V22.0644H8.92383V21.3374H9.6768Z",
    fill: "white"
  }), /* @__PURE__ */ e("path", {
    d: "M10.7826 21.0093V22.0642H10.0557V19.0574H11.2336C11.5909 19.0574 11.8629 19.146 12.0496 19.3234C12.1443 19.4163 12.2184 19.5282 12.2668 19.6518C12.3152 19.7753 12.3369 19.9078 12.3306 20.0403C12.3337 20.2151 12.2906 20.3876 12.2056 20.5403C12.1182 20.6897 11.9883 20.8098 11.8326 20.8853C11.6454 20.9742 11.4397 21.017 11.2326 21.0103L10.7826 21.0093ZM11.5906 20.0403C11.5906 19.7737 11.4446 19.6403 11.1526 19.6403H10.7826V20.4233H11.1526C11.4446 20.426 11.5906 20.2983 11.5906 20.0403Z",
    fill: "white"
  }), /* @__PURE__ */ e("path", {
    d: "M13.4155 21.0093V22.0642H12.6875V19.0574H13.8655C14.2234 19.0574 14.4958 19.146 14.6824 19.3234C14.7772 19.4163 14.8512 19.5282 14.8996 19.6518C14.948 19.7753 14.9698 19.9078 14.9634 20.0403C14.9667 20.2152 14.9232 20.3878 14.8374 20.5403C14.7506 20.6898 14.6211 20.81 14.4654 20.8853C14.2783 20.9742 14.0725 21.017 13.8655 21.0103L13.4155 21.0093ZM14.2234 20.0403C14.2234 19.7737 14.0774 19.6403 13.7855 19.6403H13.4155V20.4233H13.7855C14.0774 20.426 14.2234 20.2983 14.2234 20.0403Z",
    fill: "white"
  }), /* @__PURE__ */ e("path", {
    d: "M17.4809 19.0574V19.6364H16.6639V22.0642H15.933V19.6364H15.124V19.0574H17.4809Z",
    fill: "white"
  }), /* @__PURE__ */ e("path", {
    d: "M8.46548 8.37299H4.09666C3.99739 8.37299 3.90215 8.33363 3.83186 8.26352C3.76156 8.19342 3.72194 8.09829 3.72168 7.99901C3.72168 7.89956 3.76119 7.80418 3.83151 7.73386C3.90184 7.66353 3.99721 7.62402 4.09666 7.62402H8.46147C8.56093 7.62402 8.65632 7.66353 8.72665 7.73386C8.79697 7.80418 8.83646 7.89956 8.83646 7.99901C8.8362 8.0976 8.79713 8.19211 8.7277 8.26211C8.65826 8.3321 8.56406 8.37194 8.46548 8.37299Z",
    fill: "#FF3E4C"
  }), /* @__PURE__ */ e("path", {
    d: "M8.46548 10.6098H4.09666C3.99739 10.6098 3.90215 10.5704 3.83186 10.5003C3.76156 10.4302 3.72194 10.3351 3.72168 10.2358C3.72168 10.1364 3.76119 10.041 3.83151 9.97065C3.90184 9.90033 3.99721 9.86084 4.09666 9.86084H8.46147C8.56093 9.86084 8.65632 9.90033 8.72665 9.97065C8.79697 10.041 8.83646 10.1364 8.83646 10.2358C8.8362 10.3344 8.79713 10.4289 8.7277 10.4989C8.65826 10.5689 8.56406 10.6088 8.46548 10.6098Z",
    fill: "#FF3E4C"
  }), /* @__PURE__ */ e("path", {
    d: "M8.46548 12.8468H4.09666C3.99721 12.8468 3.90184 12.8073 3.83151 12.737C3.76119 12.6667 3.72168 12.5713 3.72168 12.4718C3.72247 12.3729 3.76233 12.2783 3.83256 12.2086C3.9028 12.1389 3.99773 12.0999 4.09666 12.0999H8.46147C8.56075 12.0999 8.65599 12.1392 8.72628 12.2093C8.79658 12.2794 8.83619 12.3746 8.83646 12.4738C8.83594 12.5723 8.79676 12.6665 8.72736 12.7363C8.65795 12.8061 8.56389 12.8458 8.46548 12.8468Z",
    fill: "#FF3E4C"
  }), /* @__PURE__ */ e("path", {
    d: "M8.46548 15.0837H4.09666C3.99721 15.0837 3.90184 15.0442 3.83151 14.9739C3.76119 14.9035 3.72168 14.8082 3.72168 14.7087C3.72194 14.6094 3.76156 14.5143 3.83186 14.4442C3.90215 14.3741 3.99739 14.3347 4.09666 14.3347H8.46147C8.56075 14.3347 8.65599 14.3741 8.72628 14.4442C8.79658 14.5143 8.83619 14.6094 8.83646 14.7087C8.83646 14.8075 8.79752 14.9022 8.72806 14.9724C8.6586 15.0426 8.56423 15.0826 8.46548 15.0837Z",
    fill: "#FF3E4C"
  }), /* @__PURE__ */ e("path", {
    d: "M12.7216 11.7997V8.47583C11.9118 8.51859 11.1493 8.87034 10.5912 9.4586C10.033 10.0469 9.72183 10.8268 9.72168 11.6377C9.72155 12.0535 9.80334 12.4652 9.96239 12.8494C10.1214 13.2335 10.3546 13.5826 10.6486 13.8766C10.9426 14.1706 11.2917 14.4038 11.6759 14.5629C12.06 14.7219 12.4718 14.8037 12.8875 14.8036C13.6984 14.8036 14.4784 14.4925 15.0665 13.9343C15.6547 13.3761 16.0061 12.6135 16.0484 11.8037L12.7216 11.7997Z",
    fill: "#FF3E4C"
  }), /* @__PURE__ */ e("path", {
    d: "M13.3271 8.2229V11.2228H16.327C16.287 10.4401 15.958 9.70017 15.4039 9.14603C14.8498 8.59189 14.1098 8.26297 13.3271 8.2229Z",
    fill: "#FF3E4C"
  })]
}), v9 = () => /* @__PURE__ */ n("svg", {
  id: "fileTypeId",
  width: "21",
  height: "24",
  viewBox: "0 0 21 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  children: [/* @__PURE__ */ e("g", {
    opacity: "0.3",
    children: /* @__PURE__ */ e("path", {
      opacity: "0.3",
      d: "M14.9641 4.92424C14.4174 4.92371 13.8932 4.7063 13.5066 4.31971C13.12 3.93313 12.9026 3.40896 12.9021 2.86224V0.000244141H3.68807C2.97437 0.000244141 2.28991 0.283761 1.78525 0.788422C1.28059 1.29308 0.99707 1.97754 0.99707 2.69124V18.9132C0.99813 19.6262 1.28211 20.3097 1.78666 20.8135C2.2912 21.3173 2.97506 21.6002 3.68807 21.6002H14.7491C15.4622 21.6002 16.1463 21.3171 16.6508 20.8131C17.1554 20.3091 17.4393 19.6254 17.4401 18.9122V4.92424H14.9641Z",
      fill: "#005FAD"
    })
  }), /* @__PURE__ */ e("path", {
    d: "M17.4403 4.92424H14.9643C14.4176 4.92371 13.8935 4.7063 13.5069 4.31971C13.1203 3.93313 12.9029 3.40896 12.9023 2.86224V0.000244141L17.4403 4.92424Z",
    fill: "#005FAD"
  }), /* @__PURE__ */ e("path", {
    d: "M19.3913 17.0603H6.88725C6.00028 17.0603 5.28125 17.7793 5.28125 18.6663V22.3943C5.28125 23.2813 6.00028 24.0003 6.88725 24.0003H19.3913C20.2782 24.0003 20.9973 23.2813 20.9973 22.3943V18.6663C20.9973 17.7793 20.2782 17.0603 19.3913 17.0603Z",
    fill: "#005FAD"
  }), /* @__PURE__ */ e("path", {
    d: "M8.90339 21.3372V22.0642H8.15039V21.3372H8.90339Z",
    fill: "white"
  }), /* @__PURE__ */ e("path", {
    d: "M10.0093 21.0101V22.0641H9.28125V19.0571H10.4593C10.8173 19.0571 11.0896 19.1458 11.2763 19.3231C11.371 19.4161 11.445 19.528 11.4935 19.6516C11.5419 19.7751 11.5636 19.9076 11.5573 20.0401C11.5604 20.215 11.5169 20.3876 11.4313 20.5401C11.3444 20.6894 11.2148 20.8092 11.0593 20.8841C10.8722 20.9734 10.6664 21.0166 10.4593 21.0101H10.0093ZM10.8173 20.0401C10.8173 19.7735 10.6713 19.6401 10.3793 19.6401H10.0093V20.4231H10.3793C10.6713 20.4258 10.8173 20.2981 10.8173 20.0401V20.0401Z",
    fill: "white"
  }), /* @__PURE__ */ e("path", {
    d: "M14.5851 22.0641H13.8581L12.6401 20.2181V22.0641H11.9131V19.0571H12.6401L13.8571 20.9201V19.0571H14.5841L14.5851 22.0641Z",
    fill: "white"
  }), /* @__PURE__ */ e("path", {
    d: "M17.4256 19.3001C17.6682 19.4817 17.8313 19.7501 17.8806 20.0491H17.1106C17.0601 19.942 16.979 19.8523 16.8776 19.7911C16.763 19.7232 16.6318 19.6886 16.4986 19.6911C16.3951 19.6869 16.292 19.7053 16.1964 19.7452C16.1009 19.7852 16.0152 19.8455 15.9456 19.9221C15.7995 20.0977 15.7252 20.3221 15.7376 20.5501C15.7376 20.8361 15.8106 21.0558 15.9566 21.2091C16.0386 21.2888 16.1365 21.3504 16.2437 21.39C16.351 21.4296 16.4654 21.4464 16.5796 21.4391C16.7427 21.442 16.9024 21.3918 17.0346 21.2961C17.1692 21.1953 17.2664 21.0524 17.3106 20.8901H16.3926V20.3671H17.9196V21.1001C17.8604 21.279 17.7678 21.445 17.6466 21.5891C17.5157 21.7444 17.3526 21.8693 17.1686 21.9551C16.96 22.0515 16.7323 22.0993 16.5026 22.0951C16.2235 22.1022 15.9474 22.0353 15.7026 21.9011C15.4785 21.7755 15.296 21.5871 15.1776 21.3591C15.0508 21.1136 14.9872 20.8404 14.9926 20.5641C14.9866 20.2862 15.0502 20.0112 15.1776 19.7641C15.2959 19.5367 15.4775 19.3485 15.7006 19.2221C15.9419 19.0892 16.2141 19.0226 16.4896 19.0291C16.823 19.0128 17.1524 19.1082 17.4256 19.3001V19.3001Z",
    fill: "white"
  }), /* @__PURE__ */ e("path", {
    d: "M6.4668 6.67236H5.0918V8.04736H6.4668V6.67236Z",
    fill: "#005FAD"
  }), /* @__PURE__ */ e("path", {
    d: "M7.84277 8.04736H6.46777V9.42236H7.84277V8.04736Z",
    fill: "#005FAD"
  }), /* @__PURE__ */ e("path", {
    d: "M9.21777 6.67236H7.84277V8.04736H9.21777V6.67236Z",
    fill: "#005FAD"
  }), /* @__PURE__ */ e("path", {
    d: "M10.5928 8.04736H9.21777V9.42236H10.5928V8.04736Z",
    fill: "#005FAD"
  }), /* @__PURE__ */ e("path", {
    d: "M11.9697 6.67236H10.5947V8.04736H11.9697V6.67236Z",
    fill: "#005FAD"
  }), /* @__PURE__ */ e("path", {
    d: "M13.3447 8.04736H11.9697V9.42236H13.3447V8.04736Z",
    fill: "#005FAD"
  }), /* @__PURE__ */ e("path", {
    d: "M6.4668 9.42017H5.0918V10.7952H6.4668V9.42017Z",
    fill: "#005FAD"
  }), /* @__PURE__ */ e("path", {
    d: "M7.84277 10.7952H6.46777V12.1702H7.84277V10.7952Z",
    fill: "#005FAD"
  }), /* @__PURE__ */ e("path", {
    d: "M9.21777 9.42017H7.84277V10.7952H9.21777V9.42017Z",
    fill: "#005FAD"
  }), /* @__PURE__ */ e("path", {
    d: "M10.5928 10.7952H9.21777V12.1702H10.5928V10.7952Z",
    fill: "#005FAD"
  }), /* @__PURE__ */ e("path", {
    d: "M11.9697 9.42017H10.5947V10.7952H11.9697V9.42017Z",
    fill: "#005FAD"
  }), /* @__PURE__ */ e("path", {
    d: "M13.3447 10.7952H11.9697V12.1702H13.3447V10.7952Z",
    fill: "#005FAD"
  }), /* @__PURE__ */ e("path", {
    d: "M6.4668 12.1812H5.0918V13.5562H6.4668V12.1812Z",
    fill: "#005FAD"
  }), /* @__PURE__ */ e("path", {
    d: "M7.84277 13.5562H6.46777V14.9312H7.84277V13.5562Z",
    fill: "#005FAD"
  }), /* @__PURE__ */ e("path", {
    d: "M9.21777 12.1812H7.84277V13.5562H9.21777V12.1812Z",
    fill: "#005FAD"
  }), /* @__PURE__ */ e("path", {
    d: "M10.5928 13.5562H9.21777V14.9312H10.5928V13.5562Z",
    fill: "#005FAD"
  }), /* @__PURE__ */ e("path", {
    d: "M11.9697 12.1812H10.5947V13.5562H11.9697V12.1812Z",
    fill: "#005FAD"
  }), /* @__PURE__ */ e("path", {
    d: "M13.3447 13.5562H11.9697V14.9312H13.3447V13.5562Z",
    fill: "#005FAD"
  })]
}), x9 = () => /* @__PURE__ */ n("svg", {
  id: "fileTypeId",
  width: "21",
  height: "24",
  viewBox: "0 0 21 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  children: [/* @__PURE__ */ e("g", {
    opacity: "0.3",
    children: /* @__PURE__ */ e("path", {
      opacity: "0.3",
      d: "M14.9635 4.92504C14.4168 4.92451 13.8926 4.70709 13.5061 4.32052C13.1195 3.93395 12.9021 3.4098 12.9016 2.86311V0.000244141H3.68796C2.97429 0.000244141 2.28985 0.283756 1.78522 0.788395C1.28058 1.29303 0.99707 1.97746 0.99707 2.69112V18.9124C0.99813 19.6254 1.2821 20.3088 1.78662 20.8126C2.29115 21.3164 2.97498 21.5993 3.68796 21.5993H14.7485C15.4615 21.5993 16.1453 21.3164 16.6498 20.8126C17.1544 20.3088 17.4383 19.6254 17.4394 18.9124V4.92504H14.9635Z",
      fill: "#FF3E4C"
    })
  }), /* @__PURE__ */ e("path", {
    d: "M17.4392 4.92504H14.9633C14.4166 4.92451 13.8924 4.70709 13.5059 4.32052C13.1193 3.93395 12.9019 3.4098 12.9014 2.86311V0.000244141L17.4392 4.92504Z",
    fill: "#FF3E4C"
  }), /* @__PURE__ */ e("path", {
    d: "M14.057 15.0837H3.73338C3.63393 15.0837 3.53855 15.0442 3.46823 14.9739C3.3979 14.9035 3.3584 14.8082 3.3584 14.7087C3.35866 14.6094 3.39829 14.5143 3.46858 14.4442C3.53888 14.3741 3.6341 14.3347 3.73338 14.3347H14.057C14.1561 14.3347 14.2513 14.3741 14.3214 14.4442C14.3915 14.5144 14.4309 14.6095 14.4309 14.7087C14.4311 14.7579 14.4215 14.8066 14.4028 14.8521C14.384 14.8976 14.3565 14.9389 14.3218 14.9738C14.287 15.0086 14.2457 15.0363 14.2003 15.0551C14.1549 15.074 14.1061 15.0837 14.057 15.0837Z",
    fill: "#FF3E4C"
  }), /* @__PURE__ */ e("path", {
    d: "M14.057 10.8598H3.73338C3.6341 10.8598 3.53888 10.8204 3.46858 10.7503C3.39829 10.6802 3.35866 10.5851 3.3584 10.4858C3.3584 10.3864 3.3979 10.291 3.46823 10.2206C3.53855 10.1503 3.63393 10.1108 3.73338 10.1108H14.057C14.1061 10.1108 14.1549 10.1205 14.2003 10.1394C14.2457 10.1583 14.287 10.1859 14.3218 10.2207C14.3565 10.2556 14.384 10.2969 14.4028 10.3424C14.4215 10.3879 14.4311 10.4366 14.4309 10.4858C14.4309 10.585 14.3915 10.6801 14.3214 10.7503C14.2513 10.8204 14.1561 10.8598 14.057 10.8598Z",
    fill: "#FF3E4C"
  }), /* @__PURE__ */ e("path", {
    d: "M14.057 12.9716H3.73338C3.63393 12.9716 3.53855 12.9321 3.46823 12.8618C3.3979 12.7915 3.3584 12.6961 3.3584 12.5966C3.35866 12.4974 3.39829 12.4022 3.46858 12.3321C3.53888 12.262 3.6341 12.2227 3.73338 12.2227H14.057C14.1561 12.2227 14.2513 12.2621 14.3214 12.3322C14.3915 12.4023 14.4309 12.4975 14.4309 12.5966C14.4311 12.6458 14.4215 12.6946 14.4028 12.7401C14.384 12.7856 14.3565 12.8269 14.3218 12.8617C14.287 12.8966 14.2457 12.9242 14.2003 12.9431C14.1549 12.9619 14.1061 12.9716 14.057 12.9716Z",
    fill: "#FF3E4C"
  }), /* @__PURE__ */ e("path", {
    d: "M9.98512 8.74799H3.73338C3.6341 8.74799 3.53888 8.70863 3.46858 8.63852C3.39829 8.56842 3.35866 8.47329 3.3584 8.37401C3.3584 8.27456 3.3979 8.17918 3.46823 8.10886C3.53855 8.03853 3.63393 7.99902 3.73338 7.99902H9.98512C10.0844 7.99929 10.1795 8.0389 10.2496 8.1092C10.3197 8.17949 10.3591 8.27473 10.3591 8.37401C10.3588 8.47311 10.3194 8.56808 10.2493 8.63816C10.1792 8.70824 10.0842 8.74773 9.98512 8.74799V8.74799Z",
    fill: "#FF3E4C"
  }), /* @__PURE__ */ e("path", {
    d: "M9.98512 6.63593H3.73338C3.6341 6.63593 3.53888 6.59655 3.46858 6.52644C3.39829 6.45633 3.35866 6.36123 3.3584 6.26195C3.3584 6.1625 3.3979 6.0671 3.46823 5.99677C3.53855 5.92645 3.63393 5.88696 3.73338 5.88696H9.98512C10.0844 5.88723 10.1795 5.92684 10.2496 5.99714C10.3197 6.06743 10.3591 6.16267 10.3591 6.26195C10.3588 6.36105 10.3194 6.45602 10.2493 6.5261C10.1792 6.59618 10.0842 6.63567 9.98512 6.63593Z",
    fill: "#FF3E4C"
  }), /* @__PURE__ */ e("path", {
    d: "M19.3907 17.0605H6.88718C6.00025 17.0605 5.28125 17.7795 5.28125 18.6665V22.3943C5.28125 23.2813 6.00025 24.0003 6.88718 24.0003H19.3907C20.2776 24.0003 20.9966 23.2813 20.9966 22.3943V18.6665C20.9966 17.7795 20.2776 17.0605 19.3907 17.0605Z",
    fill: "#FF3E4C"
  }), /* @__PURE__ */ e("path", {
    d: "M9.38283 21.3374V22.0644H8.63086V21.3374H9.38283Z",
    fill: "white"
  }), /* @__PURE__ */ e("path", {
    d: "M10.4887 21.0093V22.0642H9.76172V19.0574H10.9397C11.2967 19.0574 11.5696 19.1464 11.7566 19.3234C11.8513 19.4163 11.9251 19.5283 11.9734 19.6519C12.0216 19.7754 12.0432 19.9078 12.0366 20.0403C12.0403 20.2151 11.9971 20.3878 11.9116 20.5403C11.8243 20.6894 11.6949 20.8095 11.5396 20.8853C11.3524 20.9738 11.1467 21.0167 10.9397 21.0103L10.4887 21.0093ZM11.2967 20.0403C11.2967 19.7737 11.1507 19.6403 10.8587 19.6403H10.4887V20.4233H10.8587C11.1507 20.426 11.2967 20.2983 11.2967 20.0403Z",
    fill: "white"
  }), /* @__PURE__ */ e("path", {
    d: "M14.9094 21.3393C14.7842 21.5667 14.5951 21.7524 14.3655 21.8733C14.1071 22.0056 13.8197 22.0712 13.5295 22.0643H12.3945V19.0574H13.5295C13.8199 19.0501 14.1077 19.1143 14.3675 19.2444C14.5965 19.3628 14.7851 19.5466 14.9094 19.7724C15.0395 20.0122 15.105 20.2817 15.0994 20.5544C15.1048 20.828 15.0394 21.0984 14.9094 21.3393V21.3393ZM14.1275 21.1883C14.2087 21.1049 14.2717 21.0054 14.3124 20.8963C14.353 20.7871 14.3704 20.6707 14.3634 20.5544C14.3704 20.4382 14.3531 20.3219 14.3124 20.2129C14.2718 20.1039 14.2088 20.0046 14.1275 19.9214C13.9456 19.7618 13.708 19.6806 13.4665 19.6954H13.1215V21.4133H13.4665C13.7078 21.428 13.9452 21.3472 14.1275 21.1883V21.1883Z",
    fill: "white"
  }), /* @__PURE__ */ e("path", {
    d: "M17.4726 19.0574V19.6364H16.2397V20.2953H17.1917V20.8483H16.2397V22.0642H15.5117V19.0574H17.4726Z",
    fill: "white"
  }), /* @__PURE__ */ e("path", {
    d: "M13.8738 5.88696H12.1058C11.7977 5.88696 11.5479 6.13678 11.5479 6.44494V8.21287C11.5479 8.52103 11.7977 8.77084 12.1058 8.77084H13.8738C14.1819 8.77084 14.4317 8.52103 14.4317 8.21287V6.44494C14.4317 6.13678 14.1819 5.88696 13.8738 5.88696Z",
    fill: "#FF3E4C"
  })]
}), m9 = () => /* @__PURE__ */ n("svg", {
  id: "fileTypeId",
  width: "20",
  height: "24",
  viewBox: "0 0 20 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  children: [/* @__PURE__ */ e("g", {
    opacity: "0.3",
    children: /* @__PURE__ */ e("path", {
      opacity: "0.3",
      d: "M13.967 4.92424C13.4202 4.92371 12.8959 4.70633 12.5092 4.31978C12.1224 3.93322 11.9048 3.40905 11.904 2.86224V0.000244141H2.69099C1.97729 0.000244141 1.29282 0.283761 0.788159 0.788422C0.283499 1.29308 0 1.97754 0 2.69124V18.9132C0.00105984 19.6262 0.28503 20.3097 0.789575 20.8135C1.29412 21.3173 1.97799 21.6002 2.69099 21.6002H13.751C14.4647 21.6002 15.1491 21.3167 15.6538 20.8121C16.1585 20.3074 16.442 19.6229 16.442 18.9092V4.92424H13.967Z",
      fill: "#00C650"
    })
  }), /* @__PURE__ */ e("path", {
    d: "M16.4423 4.92424H13.9673C13.4205 4.92371 12.8962 4.70633 12.5095 4.31978C12.1227 3.93322 11.9051 3.40905 11.9043 2.86224V0.000244141L16.4423 4.92424Z",
    fill: "#00C650"
  }), /* @__PURE__ */ e("path", {
    d: "M18.3942 17.0603H5.89019C5.00322 17.0603 4.28418 17.7793 4.28418 18.6663V22.3943C4.28418 23.2813 5.00322 24.0003 5.89019 24.0003H18.3942C19.2812 24.0003 20.0002 23.2813 20.0002 22.3943V18.6663C20.0002 17.7793 19.2812 17.0603 18.3942 17.0603Z",
    fill: "#00C650"
  }), /* @__PURE__ */ e("path", {
    d: "M6.50593 21.3372V22.0642H5.75293V21.3372H6.50593Z",
    fill: "white"
  }), /* @__PURE__ */ e("path", {
    d: "M10.2658 19.0793V22.0643H9.53779V20.2003L8.8918 22.0673H8.26179L7.61179 20.1963V22.0673H6.88379V19.0823H7.7728L8.58579 21.1613L9.38579 19.0823L10.2658 19.0793Z",
    fill: "white"
  }), /* @__PURE__ */ e("path", {
    d: "M11.4946 21.0101V22.0641H10.7676V19.0571H11.9456C12.3022 19.0571 12.5742 19.1458 12.7616 19.3231C12.8565 19.4159 12.9307 19.5278 12.9792 19.6514C13.0276 19.775 13.0492 19.9075 13.0426 20.0401C13.0453 20.2149 13.0022 20.3872 12.9176 20.5401C12.8302 20.689 12.7008 20.8087 12.5456 20.8841C12.3584 20.973 12.1527 21.0162 11.9456 21.0101H11.4946ZM12.3026 20.0401C12.3026 19.7735 12.1566 19.6401 11.8646 19.6401H11.4946V20.4231H11.8646C12.1566 20.4258 12.3026 20.2981 12.3026 20.0401Z",
    fill: "white"
  }), /* @__PURE__ */ e("path", {
    d: "M14.1284 19.6361V20.2651H15.1444V20.8141H14.1284V21.4821H15.2724V22.0641H13.4004V19.0571H15.2724V19.6361H14.1284Z",
    fill: "white"
  }), /* @__PURE__ */ e("path", {
    d: "M18.0242 19.3002C18.2666 19.4821 18.4295 19.7503 18.4792 20.0492H17.7142C17.6638 19.9417 17.5822 19.8519 17.4802 19.7912C17.3657 19.7231 17.2344 19.6885 17.1012 19.6912C16.9978 19.687 16.8947 19.7056 16.7992 19.7455C16.7036 19.7854 16.618 19.8457 16.5482 19.9222C16.4026 20.098 16.3283 20.3222 16.3402 20.5502C16.3402 20.8362 16.4132 21.0559 16.5592 21.2092C16.6413 21.2888 16.7391 21.3504 16.8464 21.39C16.9537 21.4296 17.0681 21.4464 17.1822 21.4392C17.3454 21.4422 17.5051 21.392 17.6372 21.2962C17.7703 21.198 17.8676 21.0589 17.9142 20.9002H16.9952V20.3772H18.5142V21.1002C18.4555 21.279 18.3631 21.445 18.2422 21.5892C18.1107 21.7441 17.9473 21.869 17.7632 21.9552C17.555 22.0514 17.3276 22.0993 17.0982 22.0952C16.8191 22.1022 16.5431 22.0353 16.2982 21.9012C16.0742 21.7756 15.8917 21.5872 15.7732 21.3592C15.6469 21.1135 15.5833 20.8404 15.5882 20.5642C15.5827 20.2863 15.6463 20.0114 15.7732 19.7642C15.8918 19.537 16.0734 19.3488 16.2962 19.2222C16.5376 19.0895 16.8098 19.0229 17.0852 19.0292C17.4196 19.0126 17.7501 19.108 18.0242 19.3002Z",
    fill: "white"
  }), /* @__PURE__ */ e("path", {
    d: "M11.9441 13.1913V8.42031C11.9438 8.39714 11.9415 8.37405 11.9371 8.35131C11.9376 8.34465 11.9376 8.33796 11.9371 8.3313C11.9371 8.3153 11.9281 8.3003 11.9231 8.2853L11.9141 8.26531C11.9076 8.25068 11.8999 8.23663 11.8911 8.2233L11.8821 8.20731C11.8692 8.18943 11.8552 8.17239 11.8401 8.1563L11.8331 8.1503C11.8194 8.13748 11.8051 8.12546 11.7901 8.11431L11.7721 8.10331C11.7591 8.09531 11.7451 8.0883 11.7311 8.0813L11.7111 8.0723C11.6951 8.06626 11.6787 8.06125 11.6621 8.05731H11.6461C11.6237 8.05246 11.6009 8.05011 11.5781 8.0503H4.84208C4.74951 8.05878 4.66343 8.10151 4.60072 8.17014C4.53802 8.23877 4.50318 8.32834 4.50307 8.42131C4.50307 8.42731 4.50307 8.4323 4.50307 8.4383V13.2063C4.50108 13.2676 4.52054 13.3278 4.55807 13.3763C4.59111 13.4317 4.63797 13.4776 4.69406 13.5095C4.75015 13.5414 4.81354 13.5582 4.87807 13.5583H11.5781C11.6747 13.5563 11.7667 13.5169 11.835 13.4485C11.9032 13.3801 11.9423 13.2879 11.9441 13.1913ZM4.89508 8.9483V8.2243H5.48407V8.9483H4.89508ZM5.88908 8.9483V8.2243H6.47807V8.9483H5.88908ZM6.88307 8.9483V8.2243H7.47209V8.9483H6.88307ZM7.87707 8.9483V8.2243H8.46608V8.9483H7.87707ZM8.87108 8.9483V8.2243H9.46007V8.9483H8.87108ZM9.86508 8.9483V8.2243H10.4541V8.9483H9.86508ZM10.8591 8.9483V8.2243H11.4481V8.9483H10.8591ZM4.75907 12.4593V9.1443H11.6811V12.4593H4.75907ZM4.89408 13.3783V12.6543H5.48307V13.3783H4.89408ZM5.88808 13.3783V12.6543H6.47707V13.3783H5.88808ZM6.88207 13.3783V12.6543H7.47109V13.3783H6.88207ZM7.87609 13.3783V12.6543H8.46508V13.3783H7.87609ZM8.87008 13.3783V12.6543H9.45907V13.3783H8.87008ZM9.86408 13.3783V12.6543H10.4531V13.3783H9.86408ZM10.8581 13.3783V12.6543H11.4471V13.3783H10.8581Z",
    fill: "#00C650"
  }), /* @__PURE__ */ e("path", {
    d: "M9.02217 10.5561L8.06516 10.0031C8.01563 9.97455 7.95944 9.95949 7.90225 9.95947C7.84505 9.95946 7.78886 9.97449 7.73931 10.0031C7.68976 10.0316 7.64858 10.0727 7.61995 10.1223C7.59131 10.1718 7.57623 10.2279 7.57617 10.2851V11.3911C7.57623 11.4483 7.59131 11.5045 7.61995 11.554C7.64858 11.6035 7.68976 11.6447 7.73931 11.6732C7.78886 11.7018 7.84505 11.7168 7.90225 11.7168C7.95944 11.7168 8.01563 11.7017 8.06516 11.6731L9.02217 11.1201C9.07157 11.0915 9.11258 11.0504 9.14109 11.0009C9.1696 10.9514 9.18459 10.8953 9.18459 10.8381C9.18459 10.781 9.1696 10.7249 9.14109 10.6754C9.11258 10.6259 9.07157 10.5848 9.02217 10.5561Z",
    fill: "#00C650"
  })]
}), Z9 = () => /* @__PURE__ */ n("svg", {
  id: "fileTypeId",
  width: "21",
  height: "24",
  viewBox: "0 0 21 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  children: [/* @__PURE__ */ e("g", {
    opacity: "0.3",
    children: /* @__PURE__ */ e("path", {
      opacity: "0.3",
      d: "M14.9631 4.92424C14.4164 4.92371 13.8922 4.7063 13.5056 4.31971C13.119 3.93313 12.9016 3.40896 12.9011 2.86224V0.000244141H3.68708C2.97356 0.000244091 2.28925 0.283624 1.78462 0.788068C1.27999 1.29251 0.996359 1.97672 0.996094 2.69025V18.9122C0.996889 19.6254 1.28075 20.3091 1.78533 20.8131C2.2899 21.3171 2.97391 21.6002 3.68708 21.6002H14.7471C15.1006 21.6004 15.4506 21.5309 15.7772 21.3957C16.1038 21.2605 16.4006 21.0623 16.6506 20.8124C16.9005 20.5625 17.0989 20.2658 17.2342 19.9393C17.3695 19.6127 17.4391 19.2627 17.4391 18.9092V4.92424H14.9631Z",
      fill: "#9747FF"
    })
  }), /* @__PURE__ */ e("path", {
    d: "M17.4394 4.92424H14.9634C14.4166 4.92371 13.8925 4.7063 13.5059 4.31971C13.1193 3.93313 12.9019 3.40896 12.9014 2.86224V0.000244141L17.4394 4.92424Z",
    fill: "#9747FF"
  }), /* @__PURE__ */ e("path", {
    d: "M19.3903 17.0603H6.88625C5.99929 17.0603 5.28027 17.7793 5.28027 18.6663V22.3943C5.28027 23.2813 5.99929 24.0003 6.88625 24.0003H19.3903C20.2772 24.0003 20.9963 23.2813 20.9963 22.3943V18.6663C20.9963 17.7793 20.2772 17.0603 19.3903 17.0603Z",
    fill: "#9747FF"
  }), /* @__PURE__ */ e("path", {
    d: "M8.85554 21.3372V22.0642H8.10254V21.3372H8.85554Z",
    fill: "white"
  }), /* @__PURE__ */ e("path", {
    d: "M12.6154 19.0793V22.0643H11.8884V20.2003L11.2414 22.0673H10.6124L9.96138 20.1963V22.0673H9.23438V19.0823H10.1234L10.9354 21.1613L11.7354 19.0823L12.6154 19.0793Z",
    fill: "white"
  }), /* @__PURE__ */ e("path", {
    d: "M13.8442 21.0101V22.0641H13.1172V19.0571H14.2962C14.6532 19.0571 14.9262 19.1461 15.1132 19.3231C15.2078 19.4161 15.2817 19.5281 15.33 19.6517C15.3782 19.7752 15.3998 19.9076 15.3932 20.0401C15.3966 20.2149 15.3535 20.3875 15.2682 20.5401C15.1808 20.689 15.0514 20.8087 14.8962 20.8841C14.709 20.973 14.5033 21.0162 14.2962 21.0101H13.8442ZM14.6522 20.0401C14.6522 19.7735 14.5062 19.6401 14.2142 19.6401H13.8442V20.4231H14.2142C14.5062 20.4258 14.6522 20.2981 14.6522 20.0401Z",
    fill: "white"
  }), /* @__PURE__ */ e("path", {
    d: "M15.6865 21.5111V20.9001L17.0605 19.0161H17.8425V20.8751H18.2045V21.5081H17.8425V22.0611H17.1065V21.5081L15.6865 21.5111ZM17.1665 19.8611L16.4265 20.8781H17.1665V19.8611Z",
    fill: "white"
  }), /* @__PURE__ */ e("path", {
    d: "M12.9403 13.1913V8.4203C12.9401 8.39714 12.9378 8.37404 12.9334 8.3513C12.9323 8.3445 12.9306 8.33781 12.9283 8.3313C12.9247 8.31566 12.9201 8.30029 12.9143 8.2853C12.9118 8.27845 12.9088 8.27178 12.9054 8.2653C12.8992 8.2507 12.8919 8.23665 12.8834 8.2233L12.8733 8.2073C12.8608 8.18919 12.8467 8.17213 12.8314 8.1563L12.8243 8.1503C12.8107 8.13748 12.7964 8.12546 12.7814 8.1143L12.7633 8.1033L12.7233 8.0813L12.7023 8.0723C12.6867 8.06625 12.6707 8.06124 12.6544 8.0573H12.6383C12.6157 8.0525 12.5925 8.05015 12.5693 8.0503H5.83335C5.74078 8.05877 5.65468 8.10151 5.59197 8.17014C5.52926 8.23876 5.49445 8.32834 5.49434 8.4213C5.49434 8.4273 5.49434 8.4323 5.49434 8.4383V13.2083C5.49193 13.2697 5.51143 13.33 5.54935 13.3783C5.58215 13.4337 5.62881 13.4796 5.68475 13.5115C5.74068 13.5435 5.80394 13.5603 5.86834 13.5603H12.5683C12.6663 13.5598 12.7602 13.5208 12.8298 13.4518C12.8993 13.3828 12.939 13.2893 12.9403 13.1913ZM5.89634 8.9483V8.2243H6.48533V8.9483H5.89634ZM6.89034 8.9483V8.2243H7.47935V8.9483H6.89034ZM7.88433 8.9483V8.2243H8.47334V8.9483H7.88433ZM8.87835 8.9483V8.2243H9.46734V8.9483H8.87835ZM9.87234 8.9483V8.2243H10.4613V8.9483H9.87234ZM10.8663 8.9483V8.2243H11.4554V8.9483H10.8663ZM11.8603 8.9483V8.2243H12.4493V8.9483H11.8603ZM5.76033 12.4593V9.1443H12.6834V12.4593H5.76033ZM5.89534 13.3783V12.6543H6.48433V13.3783H5.89534ZM6.88934 13.3783V12.6543H7.47835V13.3783H6.88934ZM7.88335 13.3783V12.6543H8.47234V13.3783H7.88335ZM8.87735 13.3783V12.6543H9.46634V13.3783H8.87735ZM9.87134 13.3783V12.6543H10.4603V13.3783H9.87134ZM10.8653 13.3783V12.6543H11.4544V13.3783H10.8653ZM11.8593 13.3783V12.6543H12.4483V13.3783H11.8593Z",
    fill: "#9747FF"
  }), /* @__PURE__ */ e("path", {
    d: "M10.0182 10.5563L9.06123 10.0033C9.01172 9.97496 8.95566 9.96009 8.89861 9.96021C8.84156 9.96032 8.78553 9.9754 8.73613 10.0039C8.68674 10.0325 8.6457 10.0735 8.61711 10.1229C8.58853 10.1722 8.5734 10.2283 8.57324 10.2853V11.3913C8.5734 11.4484 8.58853 11.5044 8.61711 11.5537C8.6457 11.6031 8.68674 11.6441 8.73613 11.6727C8.78553 11.7012 8.84156 11.7163 8.89861 11.7164C8.95566 11.7165 9.01172 11.7017 9.06123 11.6733L10.0182 11.1203C10.0676 11.0917 10.1086 11.0505 10.1372 11.001C10.1657 10.9515 10.1807 10.8954 10.1807 10.8383C10.1807 10.7812 10.1657 10.7251 10.1372 10.6756C10.1086 10.6261 10.0676 10.585 10.0182 10.5563Z",
    fill: "#9747FF"
  })]
}), L9 = () => /* @__PURE__ */ n("svg", {
  id: "fileTypeId",
  width: "21",
  height: "24",
  viewBox: "0 0 21 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  children: [/* @__PURE__ */ e("g", {
    opacity: "0.3",
    children: /* @__PURE__ */ e("path", {
      opacity: "0.3",
      d: "M14.9641 4.92424C14.4174 4.92371 13.8932 4.7063 13.5066 4.31971C13.12 3.93313 12.9026 3.40896 12.9021 2.86224V0.000244141H3.68807C2.97437 0.000244141 2.28991 0.283758 1.78525 0.788419C1.28059 1.29308 0.99707 1.97755 0.99707 2.69124V18.9132C0.99813 19.6262 1.28211 20.3097 1.78666 20.8135C2.2912 21.3173 2.97506 21.6002 3.68807 21.6002H14.7491C15.4622 21.6002 16.1463 21.3171 16.6508 20.8131C17.1554 20.3091 17.4393 19.6254 17.4401 18.9122V4.92424H14.9641Z",
      fill: "#FF3E4C"
    })
  }), /* @__PURE__ */ e("path", {
    d: "M17.4403 4.92424H14.9643C14.4176 4.92371 13.8935 4.7063 13.5069 4.31971C13.1203 3.93313 12.9029 3.40896 12.9023 2.86224V0.000244141L17.4403 4.92424Z",
    fill: "#FF3E4C"
  }), /* @__PURE__ */ e("path", {
    d: "M19.3913 17.0603H6.88725C6.00028 17.0603 5.28125 17.7793 5.28125 18.6663V22.3943C5.28125 23.2813 6.00028 24.0003 6.88725 24.0003H19.3913C20.2782 24.0003 20.9973 23.2813 20.9973 22.3943V18.6663C20.9973 17.7793 20.2782 17.0603 19.3913 17.0603Z",
    fill: "#FF3E4C"
  }), /* @__PURE__ */ e("path", {
    d: "M8.86335 21.3372V22.0642H8.11035V21.3372H8.86335Z",
    fill: "white"
  }), /* @__PURE__ */ e("path", {
    d: "M12.6232 19.0781V22.0641H11.8962V20.2001L11.2492 22.0671H10.6202L9.96923 20.1961V22.0671H9.24023V19.0811H10.1292L10.9412 21.1611L11.7412 19.0811L12.6232 19.0781Z",
    fill: "white"
  }), /* @__PURE__ */ e("path", {
    d: "M13.852 21.0091V22.0641H13.125V19.0571H14.303C14.66 19.0571 14.933 19.1461 15.12 19.3231C15.2145 19.416 15.2884 19.5278 15.3366 19.6512C15.3849 19.7746 15.4065 19.9068 15.4 20.0391C15.4036 20.214 15.3604 20.3866 15.275 20.5391C15.1877 20.6883 15.0583 20.8083 14.903 20.8841C14.7155 20.9722 14.51 21.015 14.303 21.0091H13.852ZM14.66 20.0391C14.66 19.7765 14.514 19.6448 14.222 19.6441H13.852V20.4271H14.222C14.514 20.4271 14.66 20.2978 14.66 20.0391Z",
    fill: "white"
  }), /* @__PURE__ */ e("path", {
    d: "M17.3307 19.0344C17.472 19.0985 17.5913 19.2028 17.6737 19.3344C17.7522 19.4631 17.7928 19.6115 17.7907 19.7624C17.7986 19.9327 17.745 20.1002 17.6397 20.2344C17.5437 20.3506 17.4105 20.43 17.2627 20.4594V20.4814C17.652 20.6054 17.8463 20.8477 17.8457 21.2084C17.8485 21.37 17.8074 21.5293 17.7267 21.6694C17.6448 21.8064 17.524 21.916 17.3797 21.9844C17.2088 22.0636 17.0219 22.1022 16.8337 22.0974C16.4877 22.0974 16.2127 22.0124 16.0107 21.8424C15.8087 21.6724 15.6977 21.4124 15.6807 21.0634H16.3907C16.3898 21.1781 16.4291 21.2895 16.5017 21.3784C16.5401 21.4185 16.5869 21.4496 16.6388 21.4695C16.6906 21.4894 16.7463 21.4975 16.8017 21.4934C16.8473 21.4958 16.8929 21.4887 16.9356 21.4725C16.9783 21.4564 17.0171 21.4314 17.0497 21.3994C17.0805 21.3673 17.1045 21.3293 17.1203 21.2877C17.1361 21.2461 17.1434 21.2018 17.1417 21.1574C17.1417 20.91 16.963 20.7867 16.6057 20.7874H16.4697V20.1964H16.6017C16.9217 20.201 17.0817 20.086 17.0817 19.8514C17.0846 19.8084 17.0788 19.7654 17.0645 19.7248C17.0502 19.6842 17.0278 19.647 16.9987 19.6154C16.9691 19.587 16.9341 19.5651 16.8957 19.5508C16.8574 19.5365 16.8165 19.5303 16.7757 19.5324C16.7304 19.5296 16.6851 19.5372 16.6432 19.5546C16.6013 19.5719 16.5638 19.5985 16.5337 19.6324C16.4708 19.712 16.4357 19.8099 16.4337 19.9114H15.7227C15.721 19.7754 15.7466 19.6406 15.7982 19.5148C15.8497 19.3891 15.9261 19.275 16.0227 19.1794C16.2067 19.0094 16.4647 18.9244 16.7967 18.9244C16.9807 18.9204 17.1632 18.958 17.3307 19.0344V19.0344Z",
    fill: "white"
  }), /* @__PURE__ */ e("path", {
    d: "M13.0202 13.1924H11.9252V8.76635C11.9252 8.6181 11.8663 8.47591 11.7615 8.37108C11.6567 8.26625 11.5145 8.20735 11.3662 8.20735H8.56623C8.49282 8.20735 8.42013 8.22181 8.35231 8.2499C8.28449 8.278 8.22286 8.31917 8.17095 8.37108C8.11905 8.42299 8.07787 8.48461 8.04978 8.55243C8.02169 8.62025 8.00723 8.69294 8.00723 8.76635V13.1924H6.90723V8.39235C6.90723 8.22391 6.94042 8.05712 7.00491 7.90152C7.0694 7.74592 7.16392 7.60454 7.28307 7.48549C7.40222 7.36643 7.54367 7.27202 7.69932 7.20765C7.85498 7.14328 8.02179 7.11022 8.19023 7.11035H11.7402C12.0802 7.11035 12.4063 7.24542 12.6467 7.48584C12.8872 7.72626 13.0222 8.05235 13.0222 8.39235L13.0202 13.1924Z",
    fill: "#FF3E4C"
  }), /* @__PURE__ */ e("path", {
    d: "M11.7218 14.4903C12.4387 14.4903 13.0198 13.9092 13.0198 13.1923C13.0198 12.4754 12.4387 11.8943 11.7218 11.8943C11.005 11.8943 10.4238 12.4754 10.4238 13.1923C10.4238 13.9092 11.005 14.4903 11.7218 14.4903Z",
    fill: "#FF3E4C"
  }), /* @__PURE__ */ e("path", {
    d: "M6.71499 14.4903C7.43186 14.4903 8.01299 13.9092 8.01299 13.1923C8.01299 12.4754 7.43186 11.8943 6.71499 11.8943C5.99813 11.8943 5.41699 12.4754 5.41699 13.1923C5.41699 13.9092 5.99813 14.4903 6.71499 14.4903Z",
    fill: "#FF3E4C"
  })]
}), M9 = () => /* @__PURE__ */ n("svg", {
  id: "fileTypeId",
  width: "21",
  height: "24",
  viewBox: "0 0 21 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  children: [/* @__PURE__ */ e("g", {
    opacity: "0.3",
    children: /* @__PURE__ */ e("path", {
      opacity: "0.3",
      d: "M14.9651 4.92424C14.4184 4.92371 13.8942 4.7063 13.5076 4.31971C13.121 3.93313 12.9036 3.40896 12.9031 2.86224V0.000244141H3.68906C2.97536 0.000244141 2.29089 0.283761 1.78623 0.788422C1.28157 1.29308 0.998047 1.97754 0.998047 2.69124V18.9132C0.999107 19.6262 1.2831 20.3097 1.78765 20.8135C2.29219 21.3173 2.97606 21.6002 3.68906 21.6002H14.749C15.1025 21.6004 15.4525 21.5309 15.779 21.3957C16.1056 21.2605 16.4023 21.0623 16.6522 20.8124C16.9021 20.5625 17.1003 20.2657 17.2355 19.9392C17.3707 19.6127 17.4402 19.2627 17.4401 18.9092V4.92424H14.9651Z",
      fill: "#2869FE"
    })
  }), /* @__PURE__ */ e("path", {
    d: "M17.4403 4.92424H14.9653C14.4186 4.92371 13.8944 4.7063 13.5079 4.31971C13.1213 3.93313 12.9038 3.40896 12.9033 2.86224V0.000244141L17.4403 4.92424Z",
    fill: "#2869FE"
  }), /* @__PURE__ */ e("path", {
    d: "M19.3922 17.0603H6.88823C6.00126 17.0603 5.28223 17.7793 5.28223 18.6663V22.3943C5.28223 23.2813 6.00126 24.0003 6.88823 24.0003H19.3922C20.2792 24.0003 20.9982 23.2813 20.9982 22.3943V18.6663C20.9982 17.7793 20.2792 17.0603 19.3922 17.0603Z",
    fill: "#2869FE"
  }), /* @__PURE__ */ e("path", {
    d: "M8.33892 21.3372V22.0642H7.58691V21.3372H8.33892Z",
    fill: "white"
  }), /* @__PURE__ */ e("path", {
    d: "M12.0988 19.0793V22.0643H11.3718V20.2003L10.7248 22.0673H10.0958L9.44478 20.1963V22.0673H8.71777V19.0823H9.60679L10.4188 21.1613L11.2188 19.0823L12.0988 19.0793Z",
    fill: "white"
  }), /* @__PURE__ */ e("path", {
    d: "M14.8019 19.2084C15.0307 19.3383 15.2198 19.5281 15.3489 19.7574C15.4842 19.9995 15.5532 20.273 15.5489 20.5504C15.5541 20.83 15.4851 21.1061 15.3489 21.3504C15.2194 21.5802 15.0296 21.7704 14.7999 21.9004C14.5662 22.0339 14.3011 22.1029 14.0319 22.1004C13.7628 22.1026 13.4978 22.0336 13.2639 21.9004C13.0346 21.7704 12.8451 21.5802 12.7159 21.3504C12.5793 21.1062 12.5103 20.8301 12.5159 20.5504C12.5108 20.2729 12.5798 19.9992 12.7159 19.7574C12.8457 19.5283 13.0351 19.3386 13.2639 19.2084C13.4978 19.0751 13.7628 19.0061 14.0319 19.0084C14.3018 19.0058 14.5674 19.0748 14.8019 19.2084ZM13.4619 19.9194C13.314 20.0952 13.2388 20.3209 13.2519 20.5504C13.2399 20.7793 13.3149 21.0044 13.4619 21.1804C13.5338 21.2585 13.6219 21.3199 13.72 21.3603C13.8181 21.4007 13.9239 21.4192 14.0299 21.4144C14.1356 21.4189 14.241 21.4003 14.3388 21.3599C14.4365 21.3195 14.5243 21.2582 14.5959 21.1804C14.7448 21.0053 14.821 20.7799 14.8089 20.5504C14.8207 20.3216 14.7453 20.0968 14.5979 19.9214C14.5261 19.8432 14.438 19.7818 14.3399 19.7413C14.2418 19.7009 14.136 19.6825 14.0299 19.6874C13.9241 19.6824 13.8184 19.7006 13.7203 19.7407C13.6222 19.7808 13.5341 19.8417 13.4619 19.9194Z",
    fill: "white"
  }), /* @__PURE__ */ e("path", {
    d: "M16.5182 19.0571L17.2552 21.3201L17.9912 19.0571H18.7692L17.7232 22.0641H16.7832L15.7412 19.0571H16.5182Z",
    fill: "white"
  }), /* @__PURE__ */ e("path", {
    d: "M8.8156 6.96118C7.79717 6.96118 6.82043 7.36576 6.10029 8.08589C5.38015 8.80603 4.97559 9.78275 4.97559 10.8012C4.97559 11.8196 5.38015 12.7963 6.10029 13.5165C6.82043 14.2366 7.79717 14.6412 8.8156 14.6412C9.83395 14.6407 10.8104 14.2357 11.5303 13.5155C12.2502 12.7952 12.6546 11.8185 12.6546 10.8002C12.6541 9.78218 12.2494 8.80603 11.5296 8.08619C10.8098 7.36635 9.8336 6.96171 8.8156 6.96118ZM8.8156 7.70919C9.01929 7.70919 9.21461 7.7901 9.35864 7.93412C9.50267 8.07815 9.58359 8.2735 9.58359 8.47719C9.58359 8.68087 9.50267 8.87621 9.35864 9.02024C9.21461 9.16427 9.01929 9.24518 8.8156 9.24518C8.61191 9.24518 8.41656 9.16427 8.27253 9.02024C8.12851 8.87621 8.04758 8.68087 8.04758 8.47719C8.04758 8.2735 8.12851 8.07815 8.27253 7.93412C8.41656 7.7901 8.61191 7.70919 8.8156 7.70919ZM6.1376 9.25518C6.23946 9.07883 6.40719 8.95016 6.60391 8.89747C6.80062 8.84477 7.01022 8.87236 7.1866 8.97418C7.274 9.02454 7.35063 9.09162 7.41211 9.17159C7.47359 9.25156 7.51869 9.34286 7.54487 9.44027C7.57106 9.53768 7.57781 9.6393 7.56472 9.73931C7.55163 9.83933 7.51895 9.93579 7.46858 10.0232C7.36653 10.1996 7.19861 10.3283 7.00173 10.381C6.80485 10.4337 6.59511 10.406 6.41858 10.3042C6.24223 10.2023 6.11356 10.0346 6.06086 9.83787C6.00817 9.64115 6.03578 9.43156 6.1376 9.25518ZM7.1866 12.6292C7.0992 12.6796 7.00273 12.7122 6.90271 12.7253C6.80269 12.7384 6.7011 12.7317 6.60369 12.7055C6.50627 12.6793 6.41496 12.6342 6.33499 12.5727C6.25501 12.5112 6.18795 12.4346 6.1376 12.3472C6.03578 12.1708 6.00817 11.9612 6.06086 11.7645C6.11356 11.5678 6.24223 11.4 6.41858 11.2982C6.59511 11.1963 6.80485 11.1687 7.00173 11.2214C7.19861 11.2741 7.36653 11.4028 7.46858 11.5792C7.57036 11.7558 7.59785 11.9657 7.54497 12.1626C7.49209 12.3595 7.36318 12.5273 7.1866 12.6292ZM8.8156 13.8942C8.61191 13.8942 8.41656 13.8133 8.27253 13.6692C8.12851 13.5252 8.04758 13.3299 8.04758 13.1262C8.04758 12.9225 8.12851 12.7272 8.27253 12.5831C8.41656 12.4391 8.61191 12.3582 8.8156 12.3582C8.91649 12.3581 9.01641 12.3778 9.10964 12.4164C9.20288 12.4549 9.28759 12.5115 9.35894 12.5828C9.43028 12.6542 9.48684 12.7389 9.52539 12.8321C9.56394 12.9254 9.58372 13.0253 9.58359 13.1262C9.58359 13.3299 9.50267 13.5252 9.35864 13.6692C9.21461 13.8133 9.01929 13.8942 8.8156 13.8942ZM11.4936 12.3472C11.4433 12.4347 11.3763 12.5114 11.2963 12.573C11.2164 12.6345 11.1251 12.6797 11.0276 12.7059C10.9302 12.7321 10.8285 12.7388 10.7285 12.7256C10.6284 12.7125 10.5319 12.6797 10.4446 12.6292C10.2682 12.5271 10.1395 12.3592 10.0868 12.1623C10.0341 11.9655 10.0617 11.7557 10.1636 11.5792C10.2655 11.4028 10.4332 11.2742 10.6299 11.2215C10.8266 11.1688 11.0362 11.1964 11.2126 11.2982C11.3 11.3485 11.3766 11.4156 11.4381 11.4956C11.4995 11.5756 11.5446 11.6669 11.5707 11.7644C11.5968 11.8618 11.6034 11.9635 11.5902 12.0635C11.577 12.1635 11.5441 12.2599 11.4936 12.3472ZM11.2126 10.3002C11.0362 10.402 10.8266 10.4296 10.6299 10.3769C10.4332 10.3242 10.2655 10.1955 10.1636 10.0192C10.0618 9.84281 10.0342 9.63322 10.0869 9.4365C10.1396 9.23978 10.2682 9.07205 10.4446 8.97018C10.621 8.86837 10.8306 8.84077 11.0273 8.89346C11.224 8.94616 11.3917 9.07483 11.4936 9.25118C11.5441 9.33848 11.577 9.4349 11.5902 9.5349C11.6034 9.6349 11.5968 9.73654 11.5707 9.83398C11.5446 9.93142 11.4995 10.0228 11.4381 10.1028C11.3766 10.1828 11.3 10.2498 11.2126 10.3002Z",
    fill: "#2869FE"
  }), /* @__PURE__ */ e("path", {
    d: "M12.4291 13.8481C12.3763 13.848 12.3237 13.8423 12.2721 13.8311C11.8451 13.7311 11.6721 13.2772 11.6721 13.2582C11.6661 13.2418 11.6634 13.2244 11.6642 13.207C11.665 13.1897 11.6692 13.1726 11.6766 13.1569C11.6841 13.1411 11.6946 13.127 11.7076 13.1154C11.7205 13.1038 11.7357 13.0949 11.7521 13.0892C11.7683 13.0833 11.7855 13.0806 11.8028 13.0814C11.82 13.0822 11.8369 13.0864 11.8525 13.0938C11.8681 13.1011 11.8821 13.1114 11.8937 13.1242C11.9053 13.137 11.9143 13.1519 11.9201 13.1681C11.9201 13.1741 12.0491 13.5111 12.3331 13.5741C12.5751 13.6271 12.8881 13.4742 13.2391 13.1202C13.2514 13.1078 13.2659 13.0981 13.282 13.0914C13.298 13.0848 13.3152 13.0813 13.3326 13.0813C13.35 13.0813 13.3672 13.0848 13.3832 13.0914C13.3993 13.0981 13.4138 13.1078 13.4261 13.1202C13.4507 13.1449 13.4644 13.1783 13.4644 13.2132C13.4644 13.248 13.4507 13.2814 13.4261 13.3061C13.0631 13.6671 12.7301 13.8481 12.4291 13.8481Z",
    fill: "#2869FE"
  })]
}), F9 = () => /* @__PURE__ */ n("svg", {
  id: "fileTypeId",
  width: "21",
  height: "24",
  viewBox: "0 0 21 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  children: [/* @__PURE__ */ e("g", {
    opacity: "0.3",
    children: /* @__PURE__ */ e("path", {
      opacity: "0.3",
      d: "M14.9641 4.92424C14.4174 4.92371 13.8932 4.7063 13.5066 4.31971C13.12 3.93313 12.9026 3.40896 12.9021 2.86224V0.000244326H3.68907C3.3356 0.000112973 2.98556 0.069621 2.65896 0.204798C2.33236 0.339974 2.03558 0.538172 1.7856 0.788068C1.53561 1.03796 1.3373 1.33466 1.202 1.66121C1.0667 1.98776 0.99707 2.33777 0.99707 2.69124V18.9132C0.99813 19.6264 1.28225 20.31 1.78701 20.8138C2.29177 21.3177 2.9759 21.6005 3.68907 21.6002H14.7491C15.4628 21.6002 16.1472 21.3167 16.6519 20.8121C17.1566 20.3074 17.4401 19.6229 17.4401 18.9092V4.92424H14.9641Z",
      fill: "#005FAD"
    })
  }), /* @__PURE__ */ e("path", {
    d: "M17.4403 4.92424H14.9644C14.4176 4.92371 13.8935 4.7063 13.5069 4.31971C13.1203 3.93313 12.9029 3.40896 12.9023 2.86224V0.000244141L17.4403 4.92424Z",
    fill: "#005FAD"
  }), /* @__PURE__ */ e("path", {
    d: "M19.3922 17.0603H6.88823C6.00126 17.0603 5.28223 17.7793 5.28223 18.6663V22.3943C5.28223 23.2813 6.00126 24.0003 6.88823 24.0003H19.3922C20.2792 24.0003 20.9982 23.2813 20.9982 22.3943V18.6663C20.9982 17.7793 20.2792 17.0603 19.3922 17.0603Z",
    fill: "#005FAD"
  }), /* @__PURE__ */ e("path", {
    d: "M9.33101 21.3372V22.0642H8.58301V21.3372H9.33101Z",
    fill: "white"
  }), /* @__PURE__ */ e("path", {
    d: "M13.0911 19.0781V22.0641H12.3631V20.2001L11.7171 22.0671H11.0831L10.4331 20.1961V22.0671H9.70508V19.0811H10.5941L11.4071 21.1611L12.2071 19.0811L13.0911 19.0781Z",
    fill: "white"
  }), /* @__PURE__ */ e("path", {
    d: "M14.3198 19.0571V22.0641H13.5928V19.0571H14.3198Z",
    fill: "white"
  }), /* @__PURE__ */ e("path", {
    d: "M17.3373 21.3393C17.2121 21.5666 17.0229 21.7523 16.7933 21.8733C16.5348 22.0056 16.2475 22.0712 15.9573 22.0643H14.8223V19.0573H15.9573C16.2478 19.0495 16.5357 19.1137 16.7953 19.2443C17.0243 19.3626 17.213 19.5464 17.3373 19.7723C17.4675 20.012 17.5329 20.2815 17.5273 20.5543C17.5327 20.8279 17.4672 21.0984 17.3373 21.3393ZM16.5553 21.1883C16.6366 21.1048 16.6995 21.0054 16.7402 20.8962C16.7808 20.787 16.7982 20.6706 16.7913 20.5543C16.7981 20.438 16.7807 20.3216 16.7401 20.2124C16.6995 20.1032 16.6365 20.0037 16.5553 19.9203C16.3727 19.7613 16.1349 19.6805 15.8933 19.6953H15.5493V21.4133H15.8933C16.1349 21.4281 16.3727 21.3473 16.5553 21.1883Z",
    fill: "white"
  }), /* @__PURE__ */ e("path", {
    d: "M13.0203 13.1924H11.9253V8.76635C11.9253 8.6181 11.8664 8.47591 11.7615 8.37108C11.6567 8.26625 11.5145 8.20735 11.3662 8.20735H8.56625C8.4179 8.20735 8.27562 8.26621 8.17063 8.37102C8.06564 8.47582 8.00651 8.618 8.00625 8.76635V13.1924H6.90625V8.39235C6.90652 8.05225 7.0418 7.72617 7.28239 7.48578C7.52297 7.24539 7.84916 7.11035 8.18926 7.11035H11.7302C12.0703 7.11035 12.3963 7.24542 12.6368 7.48584C12.8772 7.72626 13.0123 8.05234 13.0123 8.39235L13.0203 13.1924Z",
    fill: "#005FAD"
  }), /* @__PURE__ */ e("path", {
    d: "M11.7218 14.4903C12.4387 14.4903 13.0198 13.9092 13.0198 13.1923C13.0198 12.4754 12.4387 11.8943 11.7218 11.8943C11.005 11.8943 10.4238 12.4754 10.4238 13.1923C10.4238 13.9092 11.005 14.4903 11.7218 14.4903Z",
    fill: "#005FAD"
  }), /* @__PURE__ */ e("path", {
    d: "M6.71499 14.4903C7.43186 14.4903 8.01299 13.9092 8.01299 13.1923C8.01299 12.4754 7.43186 11.8943 6.71499 11.8943C5.99812 11.8943 5.41699 12.4754 5.41699 13.1923C5.41699 13.9092 5.99812 14.4903 6.71499 14.4903Z",
    fill: "#005FAD"
  })]
}), b9 = () => /* @__PURE__ */ n("svg", {
  id: "fileTypeId",
  width: "20",
  height: "24",
  viewBox: "0 0 20 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  children: [/* @__PURE__ */ e("g", {
    opacity: "0.3",
    children: /* @__PURE__ */ e("path", {
      opacity: "0.3",
      d: "M13.9664 4.92504C13.4196 4.92424 12.8955 4.70662 12.5089 4.31989C12.1224 3.93316 11.905 3.40891 11.9045 2.86212V0.000244141H2.69089C1.97722 0.000244141 1.29278 0.283743 0.788143 0.788383C0.283504 1.29302 0 1.97747 0 2.69114V18.9125C0.00105979 19.6254 0.285032 20.3088 0.789556 20.8126C1.29408 21.3164 1.97791 21.5993 2.69089 21.5993H13.7504C14.1039 21.5995 14.4539 21.53 14.7805 21.3948C15.1071 21.2596 15.4038 21.0614 15.6538 20.8116C15.9038 20.5617 16.1021 20.265 16.2374 19.9384C16.3727 19.6119 16.4423 19.2619 16.4423 18.9085V4.92103L13.9664 4.92504Z",
      fill: "#9747FF"
    })
  }), /* @__PURE__ */ e("path", {
    d: "M16.4421 4.92504H13.9662C13.4194 4.92424 12.8953 4.70662 12.5087 4.31989C12.1222 3.93316 11.9048 3.40891 11.9043 2.86212V0.000244141L16.4421 4.92504Z",
    fill: "#9747FF"
  }), /* @__PURE__ */ e("path", {
    d: "M18.3936 17.0605H5.89011C5.00318 17.0605 4.28418 17.7795 4.28418 18.6665V22.3943C4.28418 23.2813 5.00318 24.0003 5.89011 24.0003H18.3936C19.2805 24.0003 19.9995 23.2813 19.9995 22.3943V18.6665C19.9995 17.7795 19.2805 17.0605 18.3936 17.0605Z",
    fill: "#9747FF"
  }), /* @__PURE__ */ e("path", {
    d: "M7.52052 21.3374V22.0644H6.76855V21.3374H7.52052Z",
    fill: "white"
  }), /* @__PURE__ */ e("path", {
    d: "M11.2803 19.0784V22.0642H10.5533V20.1993L9.90633 22.0662H9.27736L8.62638 20.1943V22.0662H7.89941V19.0804H8.78838L9.60034 21.1603L10.4003 19.0804L11.2803 19.0784Z",
    fill: "white"
  }), /* @__PURE__ */ e("path", {
    d: "M14.2991 21.3394C14.1739 21.5665 13.9848 21.7518 13.7551 21.8724C13.497 22.0053 13.2095 22.0713 12.9192 22.0644H11.7822V19.0575H12.9182C13.2086 19.0499 13.4965 19.1142 13.7561 19.2445C13.9846 19.3631 14.1731 19.5464 14.2981 19.7715C14.4274 20.0118 14.4925 20.2815 14.4871 20.5544C14.4926 20.8279 14.4278 21.0981 14.2991 21.3394V21.3394ZM13.5162 21.1884C13.5976 21.1051 13.6607 21.0056 13.7013 20.8964C13.742 20.7872 13.7593 20.6707 13.7521 20.5544C13.7593 20.4381 13.742 20.3216 13.7013 20.2124C13.6607 20.1032 13.5976 20.0038 13.5162 19.9204C13.334 19.7614 13.0965 19.6806 12.8552 19.6955H12.5092V21.4134H12.8542C13.0955 21.4283 13.333 21.3474 13.5152 21.1884H13.5162Z",
    fill: "white"
  }), /* @__PURE__ */ e("path", {
    d: "M17.1353 20.7794C17.2406 20.9109 17.2968 21.0749 17.2943 21.2434C17.2998 21.3563 17.2794 21.469 17.2349 21.573C17.1904 21.6769 17.1228 21.7694 17.0373 21.8433C16.8653 21.9883 16.6203 22.0603 16.2994 22.0603H14.8994V19.0535H16.2644C16.5703 19.0535 16.807 19.1201 16.9743 19.2535C17.0583 19.3218 17.1248 19.4091 17.1685 19.5082C17.2121 19.6073 17.2316 19.7153 17.2253 19.8234C17.2311 19.9865 17.1802 20.1466 17.0813 20.2764C16.9855 20.3959 16.8518 20.4792 16.7023 20.5124C16.8734 20.5482 17.0266 20.6426 17.1353 20.7794ZM15.6274 20.2864H16.0994C16.352 20.2864 16.4783 20.1788 16.4783 19.9634C16.4783 19.7474 16.3494 19.6404 16.0914 19.6404H15.6234L15.6274 20.2864ZM16.5503 21.1414C16.5529 21.0939 16.5447 21.0465 16.5263 21.0027C16.508 20.9589 16.48 20.9198 16.4444 20.8884C16.3586 20.8227 16.2522 20.7901 16.1444 20.7964H15.6294V21.4734H16.1484C16.4163 21.4734 16.5503 21.3627 16.5503 21.1414V21.1414Z",
    fill: "white"
  }), /* @__PURE__ */ e("path", {
    d: "M8.22092 6.79297C7.97843 6.79297 7.73831 6.84075 7.51429 6.93358C7.29026 7.0264 7.08673 7.16246 6.9153 7.33397C6.74388 7.50549 6.60793 7.70911 6.51523 7.93318C6.42252 8.15725 6.37487 8.39739 6.375 8.63989C6.37492 9.01603 6.48981 9.38321 6.70427 9.69223C6.91874 10.0012 7.22254 10.2373 7.57495 10.3688V10.9598L7.77494 11.1598V11.7998L7.58595 11.9097V12.3827L7.77494 12.4927V12.8127L7.54995 12.9427V13.3327L7.77494 13.4637V13.9077L7.56795 14.0277V14.3736L8.11993 14.8086H8.7199L8.98589 14.4006V10.3188C9.30871 10.1721 9.58249 9.93566 9.77452 9.63759C9.96656 9.33952 10.0687 8.99246 10.0688 8.63789C10.0683 8.14823 9.87336 7.67881 9.52683 7.33285C9.18031 6.98689 8.71058 6.7927 8.22092 6.79297ZM8.26792 8.29291C8.1438 8.29291 8.02477 8.24359 7.93701 8.15583C7.84924 8.06806 7.79994 7.94904 7.79994 7.82492C7.80021 7.70098 7.84963 7.5822 7.93736 7.49465C8.0251 7.4071 8.14398 7.35794 8.26792 7.35794C8.32933 7.3578 8.39016 7.36979 8.44694 7.3932C8.50371 7.41661 8.5553 7.45098 8.59877 7.49436C8.64224 7.53773 8.67673 7.58926 8.70026 7.64599C8.72379 7.70271 8.7359 7.76351 8.7359 7.82492C8.73484 7.94825 8.68504 8.06616 8.59737 8.1529C8.50969 8.23964 8.39125 8.28817 8.26792 8.2879V8.29291Z",
    fill: "#9747FF"
  })]
}), c2 = () => /* @__PURE__ */ n("svg", {
  id: "fileTypeId",
  width: "21",
  height: "24",
  viewBox: "0 0 21 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  children: [/* @__PURE__ */ e("g", {
    opacity: "0.3",
    children: /* @__PURE__ */ e("path", {
      opacity: "0.3",
      d: "M14.9651 4.92424C14.4183 4.92398 13.8939 4.70665 13.5073 4.32001C13.1207 3.93336 12.9033 3.40904 12.9031 2.86224V0.000244141H3.68906C3.33559 0.000244116 2.98559 0.0698778 2.65903 0.205176C2.33248 0.340474 2.03576 0.538781 1.78586 0.78877C1.53597 1.03876 1.33779 1.33553 1.20261 1.66213C1.06744 1.98874 0.997916 2.33878 0.998047 2.69225V18.9132C0.997916 19.2667 1.06744 19.6167 1.20261 19.9433C1.33779 20.27 1.53597 20.5667 1.78586 20.8167C2.03576 21.0667 2.33248 21.265 2.65903 21.4003C2.98559 21.5356 3.33559 21.6052 3.68906 21.6052H14.749C15.1025 21.6052 15.4525 21.5356 15.7791 21.4003C16.1056 21.265 16.4023 21.0667 16.6522 20.8167C16.9021 20.5667 17.1003 20.27 17.2355 19.9433C17.3707 19.6167 17.4402 19.2667 17.4401 18.9132V4.92524L14.9651 4.92424Z",
      fill: "#00C650"
    })
  }), /* @__PURE__ */ e("path", {
    d: "M17.4403 4.92424H14.9653C14.4185 4.92398 13.8942 4.70665 13.5076 4.32001C13.1209 3.93336 12.9036 3.40904 12.9033 2.86224V0.000244141L17.4403 4.92424Z",
    fill: "#00C650"
  }), /* @__PURE__ */ e("path", {
    d: "M19.3922 17.0603H6.88823C6.00126 17.0603 5.28223 17.7793 5.28223 18.6663V22.3943C5.28223 23.2813 6.00126 24.0003 6.88823 24.0003H19.3922C20.2792 24.0003 20.9982 23.2813 20.9982 22.3943V18.6663C20.9982 17.7793 20.2792 17.0603 19.3922 17.0603Z",
    fill: "#00C650"
  }), /* @__PURE__ */ e("path", {
    d: "M9.41997 21.3372V22.0652H8.66699V21.3372H9.41997Z",
    fill: "white"
  }), /* @__PURE__ */ e("path", {
    d: "M11.6553 19.0583V21.1124C11.6553 21.4277 11.5696 21.67 11.3983 21.8394C11.3026 21.9275 11.1902 21.9956 11.0677 22.0394C10.9452 22.0832 10.8152 22.1019 10.6853 22.0943C10.543 22.102 10.4007 22.0813 10.2665 22.0336C10.1322 21.9859 10.0088 21.9121 9.90327 21.8164C9.7106 21.6304 9.61395 21.3637 9.61328 21.0164H10.3323C10.3323 21.2974 10.4393 21.4374 10.6513 21.4374C10.8363 21.4374 10.9283 21.3294 10.9283 21.1144V19.0604L11.6553 19.0583Z",
    fill: "white"
  }), /* @__PURE__ */ e("path", {
    d: "M12.8608 21.0104V22.0654H12.1338V19.0583H13.3118C13.6685 19.0583 13.9404 19.1467 14.1278 19.3234C14.2226 19.4163 14.2966 19.5282 14.3451 19.6518C14.3935 19.7753 14.4152 19.9078 14.4088 20.0404C14.4115 20.2151 14.3684 20.3875 14.2838 20.5404C14.1967 20.6894 14.0672 20.8092 13.9118 20.8844C13.7246 20.9732 13.5189 21.0164 13.3118 21.0104H12.8608ZM13.6688 20.0404C13.6688 19.7737 13.5228 19.6404 13.2308 19.6404H12.8608V20.4234H13.2308C13.5228 20.426 13.6688 20.2984 13.6688 20.0404Z",
    fill: "white"
  }), /* @__PURE__ */ e("path", {
    d: "M17.1063 19.3002C17.3484 19.4822 17.5113 19.7504 17.5613 20.0492H16.7913C16.7392 19.9445 16.657 19.8578 16.5553 19.8002C16.4407 19.7321 16.3095 19.6975 16.1763 19.7002C16.0729 19.6959 15.9698 19.7145 15.8744 19.7546C15.779 19.7947 15.6936 19.8553 15.6243 19.9322C15.4776 20.1071 15.4029 20.3312 15.4153 20.5592C15.4153 20.8452 15.4883 21.0648 15.6343 21.2182C15.7164 21.2978 15.8142 21.3594 15.9215 21.399C16.0288 21.4386 16.1431 21.4553 16.2573 21.4482C16.4204 21.4511 16.5801 21.4009 16.7123 21.3052C16.8472 21.2044 16.9447 21.0615 16.9893 20.8992H16.0703V20.3762H17.5973V21.0952C17.5389 21.2741 17.4466 21.4402 17.3253 21.5842C17.1939 21.7393 17.0305 21.8642 16.8463 21.9502C16.638 22.0464 16.4107 22.0942 16.1813 22.0902C15.9023 22.0975 15.6263 22.0309 15.3813 21.8972C15.1572 21.7711 14.9747 21.5824 14.8563 21.3542C14.729 21.107 14.6654 20.8321 14.6713 20.5542C14.6663 20.2779 14.7298 20.0048 14.8563 19.7592C14.9745 19.5314 15.1561 19.3428 15.3793 19.2162C15.6207 19.0835 15.8929 19.0169 16.1683 19.0232C16.503 19.0086 16.8331 19.106 17.1063 19.3002Z",
    fill: "white"
  }), /* @__PURE__ */ e("path", {
    d: "M11.4279 14.6412H7.01089C6.57848 14.6406 6.16394 14.4686 5.85818 14.1629C5.55242 13.8571 5.38041 13.4426 5.37988 13.0102V8.59316C5.38041 8.16076 5.55242 7.74621 5.85818 7.44045C6.16394 7.1347 6.57848 6.96269 7.01089 6.96216H11.4279C11.8602 6.96269 12.2746 7.13473 12.5802 7.44052C12.8858 7.7463 13.0576 8.16085 13.0579 8.59316V13.0102C13.0576 13.4425 12.8858 13.857 12.5802 14.1628C12.2746 14.4686 11.8602 14.6406 11.4279 14.6412ZM7.01089 7.68315C6.76962 7.68342 6.5383 7.77939 6.3677 7.94999C6.1971 8.12059 6.10114 8.3519 6.10088 8.59316V13.0102C6.10114 13.2514 6.1971 13.4827 6.3677 13.6533C6.5383 13.8239 6.76962 13.9199 7.01089 13.9202H11.4279C11.6691 13.9199 11.9003 13.8239 12.0707 13.6533C12.2411 13.4826 12.3369 13.2513 12.3369 13.0102V8.59316C12.3369 8.35199 12.2411 8.12068 12.0707 7.95005C11.9003 7.77942 11.6691 7.68342 11.4279 7.68315H7.01089Z",
    fill: "#00C650"
  }), /* @__PURE__ */ e("path", {
    d: "M12.6982 12.1701V13.0101C12.6979 13.3469 12.564 13.6698 12.3259 13.9079C12.0878 14.146 11.7649 14.2799 11.4282 14.2802H7.01121C6.67438 14.2802 6.35135 14.1463 6.11318 13.9082C5.87501 13.67 5.74121 13.347 5.74121 13.0101V11.6001C6.44821 11.4481 7.5252 11.4001 8.8322 11.9221L9.64221 11.1501L10.1942 12.5501C10.1942 12.5501 10.3422 12.0351 10.8202 12.1081C11.2982 12.1811 12.0722 12.4401 12.4032 12.2191C12.4924 12.1677 12.5972 12.1503 12.6982 12.1701Z",
    fill: "#00C650"
  }), /* @__PURE__ */ e("path", {
    d: "M11.1511 9.49518C11.4223 9.49518 11.6422 9.27536 11.6422 9.00419C11.6422 8.73302 11.4223 8.51318 11.1511 8.51318C10.88 8.51318 10.6602 8.73302 10.6602 9.00419C10.6602 9.27536 10.88 9.49518 11.1511 9.49518Z",
    fill: "#00C650"
  })]
}), y9 = () => /* @__PURE__ */ n("svg", {
  id: "fileTypeId",
  width: "21",
  height: "24",
  viewBox: "0 0 21 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  children: [/* @__PURE__ */ e("g", {
    opacity: "0.3",
    children: /* @__PURE__ */ e("path", {
      opacity: "0.3",
      d: "M13.9729 4.92424C13.4261 4.92371 12.9019 4.70633 12.5151 4.31978C12.1284 3.93322 11.9107 3.40905 11.9099 2.86224V0.000244141H2.69294C1.97925 0.000244141 1.29478 0.283758 0.790124 0.788419C0.285464 1.29308 0.00195312 1.97755 0.00195312 2.69124V18.9132C0.00301296 19.6262 0.286995 20.3097 0.791541 20.8135C1.29609 21.3173 1.97994 21.6002 2.69294 21.6002H13.753C14.4667 21.6002 15.1511 21.3167 15.6558 20.8121C16.1604 20.3074 16.4439 19.6229 16.4439 18.9092V4.92424H13.9729Z",
      fill: "#FF3E4C"
    })
  }), /* @__PURE__ */ e("path", {
    d: "M16.4442 4.92424H13.9732C13.4264 4.92371 12.9021 4.70633 12.5153 4.31978C12.1286 3.93322 11.911 3.40905 11.9102 2.86224V0.000244141L16.4442 4.92424Z",
    fill: "#FF3E4C"
  }), /* @__PURE__ */ e("path", {
    d: "M18.3961 17.0603H5.89213C5.00516 17.0603 4.28613 17.7793 4.28613 18.6663V22.3943C4.28613 23.2813 5.00516 24.0003 5.89213 24.0003H18.3961C19.2831 24.0003 20.0021 23.2813 20.0021 22.3943V18.6663C20.0021 17.7793 19.2831 17.0603 18.3961 17.0603Z",
    fill: "#FF3E4C"
  }), /* @__PURE__ */ e("path", {
    d: "M6.67292 21.3372V22.0642H5.91992V21.3372H6.67292Z",
    fill: "white"
  }), /* @__PURE__ */ e("path", {
    d: "M8.90431 19.0571V21.1111C8.90431 21.4261 8.8183 21.6681 8.6463 21.8391C8.55084 21.9273 8.4386 21.9953 8.31627 22.0391C8.19394 22.0829 8.06403 22.1016 7.9343 22.0941C7.79183 22.1016 7.6493 22.0808 7.51492 22.0329C7.38053 21.985 7.25695 21.911 7.15131 21.8151C6.95831 21.6301 6.8623 21.3621 6.8623 21.0151H7.5813C7.5813 21.2965 7.68764 21.4371 7.90031 21.4371C8.08431 21.4371 8.17631 21.3291 8.17631 21.1131V19.0591L8.90431 19.0571Z",
    fill: "white"
  }), /* @__PURE__ */ e("path", {
    d: "M11.247 21.5151H10.12L9.933 22.0641H9.16699L10.267 19.0781H11.105L12.205 22.0641H11.431L11.247 21.5151ZM11.06 20.9621L10.686 19.8571L10.307 20.9621H11.06Z",
    fill: "white"
  }), /* @__PURE__ */ e("path", {
    d: "M13.0514 19.0571L13.7864 21.3201L14.5224 19.0571H15.3014L14.2544 22.0641H13.3144L12.2734 19.0571H13.0514Z",
    fill: "white"
  }), /* @__PURE__ */ e("path", {
    d: "M17.4443 21.5151H16.3173L16.1303 22.0641H15.3643L16.4643 19.0781H17.3023L18.4023 22.0641H17.6283L17.4443 21.5151ZM17.2573 20.9621L16.8833 19.8571L16.5043 20.9621H17.2573Z",
    fill: "white"
  }), /* @__PURE__ */ e("path", {
    d: "M6.7132 15.4142H6.49219C5.98219 15.4142 5.57586 15.2646 5.27319 14.9652C4.97053 14.6659 4.81952 14.2616 4.82019 13.7522V12.1202C4.82019 11.4962 4.57186 11.1842 4.0752 11.1842V10.4182C4.57186 10.4182 4.82019 10.1062 4.82019 9.48223V7.85023C4.82019 7.34023 4.97119 6.93557 5.27319 6.63623C5.57519 6.3369 5.98152 6.18757 6.49219 6.18823H6.7132V6.95424H6.56219C5.96219 6.95424 5.66219 7.29323 5.66219 7.97123V9.64323C5.65486 10.2432 5.42153 10.6226 4.96219 10.7812V10.8212C5.41219 10.9692 5.64553 11.3386 5.66219 11.9292V13.6292C5.66219 14.3072 5.96219 14.6462 6.56219 14.6462H6.7132V15.4142Z",
    fill: "#FF3E4C"
  }), /* @__PURE__ */ e("path", {
    d: "M9.73242 15.4142V14.6482H9.88342C10.4834 14.6482 10.7834 14.3092 10.7834 13.6312V11.9312C10.7968 11.3399 11.0301 10.9705 11.4834 10.8232V10.7832C11.0261 10.6219 10.7928 10.2425 10.7834 9.64519V7.97319C10.7834 7.29519 10.4834 6.95619 9.88342 6.95619H9.73242V6.19019H9.95443C10.4644 6.19019 10.8704 6.33952 11.1724 6.63819C11.4744 6.93685 11.6258 7.34152 11.6264 7.85219V9.48419C11.6264 10.1082 11.8748 10.4202 12.3714 10.4202V11.1862C11.8748 11.1862 11.6264 11.4982 11.6264 12.1222V13.7542C11.6264 14.2642 11.4751 14.6685 11.1724 14.9672C10.8698 15.2659 10.4638 15.4155 9.95443 15.4162L9.73242 15.4142Z",
    fill: "#FF3E4C"
  }), /* @__PURE__ */ e("path", {
    d: "M8.13956 8.61726C8.50573 8.61726 8.80256 8.32044 8.80256 7.95427C8.80256 7.58811 8.50573 7.29126 8.13956 7.29126C7.7734 7.29126 7.47656 7.58811 7.47656 7.95427C7.47656 8.32044 7.7734 8.61726 8.13956 8.61726Z",
    fill: "#FF3E4C"
  }), /* @__PURE__ */ e("path", {
    d: "M8.13956 11.4642C8.50573 11.4642 8.80256 11.1674 8.80256 10.8012C8.80256 10.435 8.50573 10.1382 8.13956 10.1382C7.7734 10.1382 7.47656 10.435 7.47656 10.8012C7.47656 11.1674 7.7734 11.4642 8.13956 11.4642Z",
    fill: "#FF3E4C"
  }), /* @__PURE__ */ e("path", {
    d: "M8.13956 14.3114C8.50573 14.3114 8.80256 14.0145 8.80256 13.6483C8.80256 13.2822 8.50573 12.9854 8.13956 12.9854C7.7734 12.9854 7.47656 13.2822 7.47656 13.6483C7.47656 14.0145 7.7734 14.3114 8.13956 14.3114Z",
    fill: "#FF3E4C"
  })]
}), E9 = () => /* @__PURE__ */ n("svg", {
  id: "fileTypeId",
  width: "20",
  height: "24",
  viewBox: "0 0 20 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  children: [/* @__PURE__ */ e("g", {
    opacity: "0.3",
    children: /* @__PURE__ */ e("path", {
      opacity: "0.3",
      d: "M13.9664 4.92504C13.4196 4.92424 12.8955 4.70662 12.509 4.31989C12.1224 3.93316 11.905 3.40891 11.9045 2.86212V0.000244326H2.69189C2.33844 0.000112979 1.98841 0.0696181 1.66182 0.204789C1.33523 0.33996 1.03848 0.538144 0.788505 0.788029C0.538527 1.03791 0.340228 1.3346 0.204935 1.66114C0.069643 1.98768 -2.4405e-08 2.33768 0 2.69114V18.9125C-2.4405e-08 19.2659 0.069643 19.6159 0.204935 19.9424C0.340228 20.269 0.538527 20.5657 0.788505 20.8155C1.03848 21.0654 1.33523 21.2636 1.66182 21.3988C1.98841 21.534 2.33844 21.6035 2.69189 21.6033H13.7514C14.1048 21.6033 14.4547 21.5337 14.7812 21.3985C15.1077 21.2633 15.4043 21.0651 15.6542 20.8152C15.9041 20.5653 16.1023 20.2687 16.2375 19.9422C16.3727 19.6157 16.4423 19.2658 16.4423 18.9125V4.92504H13.9664Z",
      fill: "#2869FE"
    })
  }), /* @__PURE__ */ e("path", {
    d: "M16.4421 4.92504H13.9662C13.4194 4.92424 12.8953 4.70662 12.5087 4.31989C12.1222 3.93316 11.9048 3.40891 11.9043 2.86212V0.000244141L16.4421 4.92504Z",
    fill: "#2869FE"
  }), /* @__PURE__ */ e("path", {
    d: "M18.3946 17.0605H5.89108C5.00415 17.0605 4.28516 17.7795 4.28516 18.6665V22.3943C4.28516 23.2813 5.00415 24.0003 5.89108 24.0003H18.3946C19.2815 24.0003 20.0005 23.2813 20.0005 22.3943V18.6665C20.0005 17.7795 19.2815 17.0605 18.3946 17.0605Z",
    fill: "#2869FE"
  }), /* @__PURE__ */ e("path", {
    d: "M8.8936 21.3374V22.0644H8.14062V21.3374H8.8936Z",
    fill: "white"
  }), /* @__PURE__ */ e("path", {
    d: "M9.99844 19.0574V22.0643H9.27148V19.0574H9.99844Z",
    fill: "white"
  }), /* @__PURE__ */ e("path", {
    d: "M12.5409 21.6564C12.4542 21.7945 12.3301 21.9051 12.1829 21.9754C12.0042 22.0592 11.8083 22.0999 11.6109 22.0943C11.3136 22.1061 11.0208 22.0193 10.778 21.8474C10.6702 21.7669 10.5821 21.6632 10.5201 21.5439C10.4581 21.4246 10.4239 21.2928 10.42 21.1584H11.1949C11.1998 21.2598 11.243 21.3557 11.3159 21.4264C11.3879 21.4935 11.4835 21.5295 11.5819 21.5264C11.6628 21.5306 11.7421 21.5029 11.8029 21.4494C11.8296 21.4235 11.8506 21.3924 11.8645 21.3579C11.8785 21.3235 11.8851 21.2865 11.8839 21.2494C11.885 21.2141 11.8789 21.179 11.866 21.1462C11.8531 21.1134 11.8337 21.0835 11.8089 21.0584C11.756 21.0048 11.6931 20.962 11.6239 20.9324C11.5499 20.9004 11.4479 20.8614 11.3179 20.8154C11.1586 20.7629 11.0029 20.6997 10.8519 20.6264C10.7281 20.5622 10.6217 20.4689 10.542 20.3544C10.4498 20.2155 10.4043 20.0509 10.412 19.8844C10.4078 19.7194 10.4553 19.5571 10.548 19.4205C10.6429 19.287 10.7736 19.183 10.9249 19.1205C11.0995 19.0499 11.2867 19.0158 11.4749 19.0205C11.7611 19.0045 12.044 19.0886 12.2749 19.2585C12.373 19.3384 12.4534 19.438 12.5109 19.5508C12.5684 19.6635 12.6018 19.7871 12.6089 19.9134H11.8219C11.8129 19.8248 11.7745 19.7418 11.7129 19.6775C11.6816 19.6477 11.6445 19.6246 11.6039 19.6096C11.5633 19.5947 11.5201 19.5882 11.4769 19.5905C11.4022 19.5866 11.3287 19.6109 11.2709 19.6585C11.2438 19.6839 11.2226 19.715 11.2089 19.7496C11.1953 19.7841 11.1895 19.8213 11.1919 19.8584C11.1908 19.9258 11.2163 19.9909 11.2629 20.0394C11.3128 20.0913 11.3726 20.1325 11.4389 20.1604C11.5099 20.1914 11.6119 20.2314 11.7449 20.2794C11.907 20.3318 12.0648 20.3967 12.2169 20.4734C12.3425 20.5397 12.4505 20.635 12.5319 20.7514C12.625 20.8922 12.6712 21.0588 12.6639 21.2274C12.6627 21.3789 12.6202 21.5272 12.5409 21.6564Z",
    fill: "white"
  }), /* @__PURE__ */ e("path", {
    d: "M15.2667 19.2084C15.4952 19.3382 15.6843 19.5276 15.8137 19.7563C15.949 19.9988 16.018 20.2727 16.0137 20.5503C16.0192 20.83 15.9501 21.1061 15.8137 21.3503C15.6839 21.5802 15.4942 21.7706 15.2647 21.9013C15.031 22.0347 14.7659 22.1038 14.4968 22.1012C14.2276 22.1036 13.9626 22.0346 13.7288 21.9013C13.4994 21.7709 13.3099 21.5804 13.1808 21.3503C13.0439 21.1063 12.9749 20.83 12.9808 20.5503C12.9756 20.2726 13.0446 19.9985 13.1808 19.7563C13.3106 19.5275 13.5 19.3382 13.7288 19.2084C13.9626 19.075 14.2276 19.006 14.4968 19.0084C14.7666 19.0058 15.0322 19.0748 15.2667 19.2084ZM13.9268 19.9183C13.7792 20.0947 13.7041 20.3206 13.7168 20.5503C13.7049 20.779 13.7799 21.0036 13.9268 21.1793C13.9986 21.2574 14.0867 21.3188 14.1848 21.3592C14.283 21.3996 14.3887 21.4181 14.4948 21.4133C14.6004 21.4177 14.7058 21.399 14.8035 21.3586C14.9012 21.3182 14.989 21.257 15.0607 21.1793C15.2089 21.0043 15.2848 20.7793 15.2727 20.5503C15.2848 20.3213 15.2098 20.0963 15.0627 19.9203C14.9909 19.8422 14.9028 19.7807 14.8047 19.7403C14.7066 19.6999 14.6008 19.6815 14.4948 19.6863C14.3893 19.682 14.2841 19.7004 14.1864 19.7405C14.0887 19.7805 14.0008 19.8412 13.9288 19.9183H13.9268Z",
    fill: "white"
  }), /* @__PURE__ */ e("path", {
    d: "M7.84979 14.5597C6.90705 14.5586 6.00322 14.1837 5.3366 13.517C4.66998 12.8504 4.295 11.9466 4.29395 11.0039C4.295 10.0611 4.66998 9.15728 5.3366 8.49065C6.00322 7.82403 6.90705 7.44906 7.84979 7.448C8.79254 7.44906 9.69637 7.82403 10.363 8.49065C11.0296 9.15728 11.4046 10.0611 11.4056 11.0039C11.4046 11.9466 11.0296 12.8504 10.363 13.517C9.69637 14.1837 8.79254 14.5586 7.84979 14.5597ZM7.84979 7.65999C6.96425 7.66078 6.11521 8.01291 5.48904 8.63909C4.86286 9.26526 4.51073 10.1143 4.50994 10.9999C4.511 11.8853 4.86321 12.7342 5.48933 13.3603C6.11545 13.9864 6.96433 14.3387 7.84979 14.3397C8.73525 14.3387 9.58415 13.9864 10.2103 13.3603C10.8364 12.7342 11.1886 11.8853 11.1897 10.9999C11.1878 10.115 10.8352 9.26698 10.2091 8.64167C9.58308 8.01636 8.73464 7.66478 7.84979 7.66399V7.65999Z",
    fill: "#2869FE"
  }), /* @__PURE__ */ e("path", {
    d: "M7.85428 7.53694V10.3648C7.68498 10.3651 7.52271 10.4325 7.4031 10.5523C7.28348 10.6721 7.2163 10.8345 7.2163 11.0038C7.21634 11.115 7.24528 11.2242 7.30029 11.3208L4.8634 12.7277L4.80941 12.6277C4.53991 12.1253 4.39904 11.5639 4.39941 10.9938C4.39941 10.9658 4.39941 10.9398 4.39941 10.9138C4.41163 10.3231 4.57591 9.74556 4.8764 9.23687C5.17539 8.73124 5.59747 8.30949 6.10335 8.01092C6.61192 7.71101 7.189 7.54677 7.77928 7.53394L7.85428 7.53694Z",
    fill: "#2869FE"
  }), /* @__PURE__ */ e("path", {
    d: "M11.3143 10.9998C11.3148 11.5956 11.1604 12.1814 10.8664 12.6997C10.5579 13.2459 10.1064 13.6978 9.56041 14.0066C9.04074 14.3028 8.45264 14.4579 7.85449 14.4566V11.6417C8.02274 11.6402 8.18359 11.5723 8.30209 11.4528C8.4206 11.3334 8.48721 11.172 8.48746 11.0038C8.48799 10.8909 8.45792 10.78 8.40047 10.6828L10.8514 9.26685C11.142 9.76945 11.3009 10.3373 11.3133 10.9178C11.3143 10.9438 11.3143 10.9698 11.3143 10.9998Z",
    fill: "#2869FE"
  }), /* @__PURE__ */ e("path", {
    d: "M7.85004 11.4399C7.73441 11.4399 7.62353 11.3939 7.54177 11.3122C7.46 11.2304 7.41406 11.1195 7.41406 11.0039C7.41406 10.8882 7.45997 10.7772 7.54171 10.6952C7.62344 10.6133 7.73432 10.5672 7.85004 10.5669C7.96576 10.5672 8.07666 10.6133 8.15839 10.6952C8.24013 10.7772 8.28602 10.8882 8.28602 11.0039C8.28602 11.1195 8.24009 11.2304 8.15833 11.3122C8.07657 11.3939 7.96567 11.4399 7.85004 11.4399ZM7.85004 10.7839C7.7917 10.7839 7.73575 10.8071 7.6945 10.8483C7.65324 10.8896 7.63006 10.9455 7.63006 11.0039C7.63032 11.0621 7.65358 11.1179 7.69478 11.1591C7.73598 11.2003 7.79178 11.2236 7.85004 11.2239C7.90831 11.2236 7.96411 11.2003 8.00531 11.1591C8.04651 11.1179 8.06978 11.0621 8.07004 11.0039C8.07004 10.975 8.06435 10.9464 8.05329 10.9197C8.04224 10.893 8.02603 10.8687 8.0056 10.8483C7.98517 10.8279 7.96092 10.8117 7.93423 10.8006C7.90754 10.7896 7.87893 10.7839 7.85004 10.7839Z",
    fill: "#2869FE"
  })]
}), k9 = () => /* @__PURE__ */ n("svg", {
  id: "fileTypeId",
  width: "21",
  height: "24",
  viewBox: "0 0 21 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  children: [/* @__PURE__ */ e("g", {
    opacity: "0.3",
    children: /* @__PURE__ */ e("path", {
      opacity: "0.3",
      d: "M14.9631 4.92424C14.4164 4.92371 13.8922 4.7063 13.5056 4.31971C13.119 3.93313 12.9016 3.40896 12.9011 2.86224V0.000244141H3.68708C2.97356 0.000244091 2.28925 0.283624 1.78462 0.788068C1.27999 1.29251 0.996359 1.97672 0.996094 2.69024V18.9122C0.996889 19.6254 1.28075 20.3091 1.78533 20.8131C2.2899 21.3171 2.97391 21.6002 3.68708 21.6002H14.7471C15.1006 21.6004 15.4506 21.5309 15.7772 21.3957C16.1038 21.2605 16.4006 21.0623 16.6506 20.8124C16.9005 20.5625 17.0989 20.2658 17.2342 19.9393C17.3695 19.6127 17.4391 19.2627 17.4391 18.9092V4.92424H14.9631Z",
      fill: "#00C650"
    })
  }), /* @__PURE__ */ e("path", {
    d: "M17.4394 4.92424H14.9634C14.4166 4.92371 13.8925 4.7063 13.5059 4.31971C13.1193 3.93313 12.9019 3.40896 12.9014 2.86224V0.000244141L17.4394 4.92424Z",
    fill: "#00C650"
  }), /* @__PURE__ */ e("path", {
    d: "M19.3903 17.0603H6.88625C5.99929 17.0603 5.28027 17.7793 5.28027 18.6663V22.3943C5.28027 23.2813 5.99929 24.0003 6.88625 24.0003H19.3903C20.2772 24.0003 20.9963 23.2813 20.9963 22.3943V18.6663C20.9963 17.7793 20.2772 17.0603 19.3903 17.0603Z",
    fill: "#00C650"
  }), /* @__PURE__ */ e("path", {
    d: "M7.79597 21.3372V22.0642H7.04297V21.3372H7.79597Z",
    fill: "white"
  }), /* @__PURE__ */ e("path", {
    d: "M10.7777 19.0571V22.0641H10.0457V20.8091H8.90571V22.0641H8.17871V19.0571H8.90571V20.2221H10.0457V19.0571H10.7777Z",
    fill: "white"
  }), /* @__PURE__ */ e("path", {
    d: "M13.4399 19.0571V19.6351H12.6239V22.0641H11.8959V19.6351H11.0879V19.0571H13.4399Z",
    fill: "white"
  }), /* @__PURE__ */ e("path", {
    d: "M17.1282 19.0781V22.0641H16.3962V20.2001L15.7502 22.0671H15.1202L14.4702 20.1961V22.0671H13.7422V19.0811H14.6312L15.4442 21.1611L16.2392 19.0811L17.1282 19.0781Z",
    fill: "white"
  }), /* @__PURE__ */ e("path", {
    d: "M18.357 21.5071H19.327V22.0641H17.627V19.0571H18.355L18.357 21.5071Z",
    fill: "white"
  }), /* @__PURE__ */ e("path", {
    d: "M5.16022 11.4192C5.15912 11.3761 5.17251 11.3339 5.19823 11.2992C5.22857 11.2603 5.26505 11.2265 5.30624 11.1992C5.36854 11.1668 5.43302 11.1387 5.49923 11.1152L5.69223 11.0352L6.46422 10.7102C6.57156 10.6602 6.77156 10.5769 7.06422 10.4602L7.43124 10.3102L7.56322 10.2632L7.58622 10.2532C7.59247 10.2518 7.59898 10.2518 7.60524 10.2532C7.62002 10.2466 7.63604 10.2432 7.65224 10.2432C7.6832 10.2416 7.71416 10.2462 7.74335 10.2567C7.77253 10.2671 7.79935 10.2833 7.82223 10.3042C7.84131 10.3227 7.85653 10.3447 7.86701 10.3691C7.87748 10.3935 7.883 10.4197 7.88324 10.4462V10.7002C7.88234 10.7475 7.86736 10.7935 7.84022 10.8322C7.81301 10.8759 7.77176 10.9091 7.72323 10.9262L6.14623 11.5712L7.72323 12.2162C7.77005 12.2354 7.81057 12.2672 7.84022 12.3082C7.8684 12.3453 7.88354 12.3907 7.88324 12.4372V12.6912C7.88263 12.7454 7.8607 12.7971 7.82223 12.8352C7.79974 12.8569 7.77304 12.8736 7.74379 12.8844C7.71454 12.8953 7.68338 12.9 7.65224 12.8982C7.63615 12.8981 7.62022 12.8951 7.60524 12.8892L7.56322 12.8752L7.43124 12.8282L7.06422 12.6772L6.46422 12.4282L5.69223 12.1032L5.49923 12.0232C5.43623 11.9982 5.37224 11.9702 5.30624 11.9382C5.26516 11.9192 5.22994 11.8895 5.20426 11.8522C5.17858 11.8149 5.16336 11.7714 5.16022 11.7262V11.4192Z",
    fill: "#00C650"
  }), /* @__PURE__ */ e("path", {
    d: "M8.31812 13.1702C8.25578 13.1723 8.19485 13.1513 8.14712 13.1112C8.12587 13.0947 8.10863 13.0737 8.09668 13.0496C8.08473 13.0255 8.07839 12.999 8.07812 12.9722C8.07812 12.9342 8.19111 12.6722 8.41711 12.1722L8.74712 11.4472L8.81711 11.2962L9.34912 10.1152L9.53711 9.70617L9.57512 9.61217C9.5897 9.57747 9.60709 9.54402 9.62712 9.51217C9.65351 9.46886 9.69094 9.43335 9.73557 9.40928C9.7802 9.38521 9.83045 9.37343 9.88113 9.37517H10.1161C10.1787 9.37303 10.24 9.39403 10.2881 9.43417C10.3092 9.45072 10.3262 9.47182 10.338 9.49589C10.3498 9.51996 10.356 9.54638 10.3561 9.57317C10.2761 9.80635 10.1819 10.0344 10.0741 10.2562L10.0221 10.3692L9.62212 11.2442L9.09011 12.4252L8.90212 12.8352L8.86411 12.9292C8.85067 12.9667 8.83359 13.0029 8.81311 13.0372C8.78478 13.0798 8.74626 13.1146 8.70103 13.1386C8.65579 13.1625 8.60529 13.1747 8.55413 13.1742L8.31812 13.1702Z",
    fill: "#00C650"
  }), /* @__PURE__ */ e("path", {
    d: "M10.7887 12.9003C10.7569 12.9023 10.7251 12.8978 10.6952 12.8869C10.6652 12.8761 10.6378 12.8592 10.6147 12.8373C10.5954 12.8186 10.58 12.7963 10.5696 12.7715C10.5591 12.7468 10.5537 12.7202 10.5537 12.6933V12.4393C10.5533 12.3932 10.5672 12.3481 10.5937 12.3103C10.6236 12.2684 10.6654 12.2363 10.7137 12.2183L12.2947 11.5733L10.7137 10.9283C10.6656 10.9071 10.6246 10.8723 10.5957 10.8283C10.5691 10.7901 10.5545 10.7449 10.5537 10.6983V10.4403C10.5538 10.4136 10.5594 10.3871 10.5702 10.3627C10.5811 10.3382 10.5969 10.3163 10.6167 10.2983C10.6639 10.2563 10.7256 10.2344 10.7887 10.2373C10.8037 10.2369 10.8185 10.2404 10.8317 10.2473C10.8403 10.2458 10.8491 10.2458 10.8577 10.2473L10.8787 10.2573C10.8717 10.2573 10.9147 10.2693 11.0057 10.3043L11.3777 10.4543C11.3584 10.4456 11.5584 10.529 11.9777 10.7043C12.2064 10.7983 12.4684 10.9096 12.7637 11.0383C12.7827 11.0443 12.8077 11.0543 12.8397 11.0663L12.9477 11.1093C13.0111 11.1319 13.0723 11.16 13.1307 11.1933C13.1729 11.2123 13.2089 11.2427 13.2347 11.281C13.2605 11.3193 13.275 11.3641 13.2767 11.4103V11.7203C13.2763 11.7629 13.2623 11.8042 13.2367 11.8383C13.209 11.8773 13.1728 11.9095 13.1307 11.9323C13.0747 11.9603 13.0067 11.9903 12.9307 12.0223L12.7307 12.1023L10.9887 12.8313C10.9387 12.8563 10.9087 12.8723 10.8997 12.8783L10.8807 12.8923L10.7887 12.9003Z",
    fill: "#00C650"
  })]
}), _9 = () => /* @__PURE__ */ n("svg", {
  id: "fileTypeId",
  width: "21",
  height: "24",
  viewBox: "0 0 21 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  children: [/* @__PURE__ */ e("g", {
    opacity: "0.3",
    children: /* @__PURE__ */ e("path", {
      opacity: "0.3",
      d: "M14.9651 4.92424C14.4183 4.92371 13.8942 4.7063 13.5076 4.31971C13.121 3.93313 12.9036 3.40896 12.903 2.86224V0.000244326H3.69005C3.33658 0.000112973 2.98654 0.069621 2.65994 0.204798C2.33333 0.339974 2.03656 0.538172 1.78657 0.788068C1.53658 1.03796 1.33828 1.33466 1.20298 1.66121C1.06768 1.98776 0.998047 2.33777 0.998047 2.69124V18.9132C0.999107 19.6264 1.28323 20.31 1.78799 20.8138C2.29275 21.3177 2.97687 21.6005 3.69005 21.6002H14.75C15.4637 21.6002 16.1482 21.3167 16.6529 20.8121C17.1575 20.3074 17.441 19.6229 17.441 18.9092V4.92424H14.9651Z",
      fill: "#FF9908"
    })
  }), /* @__PURE__ */ e("path", {
    d: "M17.4413 4.92424H14.9653C14.4186 4.92371 13.8944 4.7063 13.5079 4.31971C13.1213 3.93313 12.9038 3.40896 12.9033 2.86224V0.000244141L17.4413 4.92424Z",
    fill: "#FF9908"
  }), /* @__PURE__ */ e("path", {
    d: "M19.3932 17.0603H6.8892C6.00223 17.0603 5.2832 17.7793 5.2832 18.6663V22.3943C5.2832 23.2813 6.00223 24.0003 6.8892 24.0003H19.3932C20.2802 24.0003 20.9992 23.2813 20.9992 22.3943V18.6663C20.9992 17.7793 20.2802 17.0603 19.3932 17.0603Z",
    fill: "#FF9908"
  }), /* @__PURE__ */ e("path", {
    d: "M10.044 21.3372V22.0642H9.29102V21.3372H10.044Z",
    fill: "white"
  }), /* @__PURE__ */ e("path", {
    d: "M12.7625 19.3001C13.0051 19.4817 13.1682 19.7501 13.2175 20.0491H12.4475C12.397 19.9417 12.3155 19.8518 12.2135 19.7911C12.0993 19.7232 11.9683 19.6885 11.8355 19.6911C11.732 19.6869 11.6289 19.7053 11.5333 19.7452C11.4378 19.7852 11.3521 19.8455 11.2825 19.9221C11.136 20.0976 11.0613 20.3219 11.0735 20.5501C11.0735 20.8361 11.1465 21.0558 11.2925 21.2091C11.3747 21.2888 11.4727 21.3505 11.5802 21.3901C11.6876 21.4297 11.8022 21.4464 11.9165 21.4391C12.0796 21.442 12.2393 21.3918 12.3715 21.2961C12.5058 21.195 12.6028 21.0523 12.6475 20.8901H11.7285V20.3671H13.2555V21.1001C13.1971 21.2791 13.1047 21.4452 12.9835 21.5891C12.8523 21.7441 12.6892 21.8689 12.5055 21.9551C12.2968 22.0514 12.0692 22.0992 11.8395 22.0951C11.5603 22.1024 11.2843 22.0354 11.0395 21.9011C10.8153 21.7752 10.6326 21.587 10.5135 21.3591C10.3871 21.1135 10.3236 20.8404 10.3285 20.5641C10.3229 20.2863 10.3865 20.0114 10.5135 19.7641C10.6324 19.5369 10.8143 19.3487 11.0375 19.2221C11.2788 19.0892 11.551 19.0226 11.8265 19.0291C12.1599 19.0128 12.4893 19.1082 12.7625 19.3001Z",
    fill: "white"
  }), /* @__PURE__ */ e("path", {
    d: "M14.3911 19.0571V22.0641H13.6641V19.0571H14.3911Z",
    fill: "white"
  }), /* @__PURE__ */ e("path", {
    d: "M16.8536 19.0571V19.6361H15.6196V20.3001H16.5726V20.8531H15.6196V22.0691H14.8926V19.0621L16.8536 19.0571Z",
    fill: "white"
  }), /* @__PURE__ */ e("path", {
    d: "M8.76246 15.4431C7.6715 15.4418 6.6256 15.0078 5.85417 14.2364C5.08275 13.465 4.64878 12.4191 4.64746 11.3281C4.64878 10.2372 5.08275 9.19127 5.85417 8.41985C6.6256 7.64842 7.6715 7.21446 8.76246 7.21313C9.85342 7.21446 10.8993 7.64842 11.6707 8.41985C12.4422 9.19127 12.8761 10.2372 12.8775 11.3281C12.8761 12.4191 12.4422 13.465 11.6707 14.2364C10.8993 15.0078 9.85342 15.4418 8.76246 15.4431ZM8.76246 7.93414C7.86281 7.93572 7.00045 8.29381 6.36429 8.92997C5.72814 9.56612 5.37004 10.4285 5.36846 11.3281C5.37004 12.2278 5.72814 13.0901 6.36429 13.7263C7.00045 14.3625 7.86281 14.7205 8.76246 14.7221C9.66212 14.7205 10.5245 14.3625 11.1606 13.7263C11.7968 13.0901 12.1549 12.2278 12.1565 11.3281C12.1549 10.4285 11.7968 9.56612 11.1606 8.92997C10.5245 8.29381 9.66212 7.93572 8.76246 7.93414Z",
    fill: "#FF9908"
  }), /* @__PURE__ */ e("path", {
    d: "M8.76179 13.6344C8.29157 13.635 7.82846 13.5195 7.41361 13.2982C6.99876 13.0768 6.64501 12.7564 6.38379 12.3654L6.98379 11.9654C7.17891 12.2574 7.44308 12.4968 7.75288 12.6624C8.06268 12.8279 8.40854 12.9145 8.75979 12.9144C9.11117 12.9145 9.45714 12.8279 9.76698 12.6622C10.0768 12.4964 10.3409 12.2567 10.5358 11.9644L11.1358 12.3644C10.8751 12.755 10.5221 13.0753 10.108 13.2969C9.69384 13.5184 9.23145 13.6343 8.76179 13.6344Z",
    fill: "#FF9908"
  }), /* @__PURE__ */ e("path", {
    d: "M7.6206 10.6973C7.88514 10.6973 8.0996 10.4828 8.0996 10.2183C8.0996 9.95372 7.88514 9.73926 7.6206 9.73926C7.35605 9.73926 7.1416 9.95372 7.1416 10.2183C7.1416 10.4828 7.35605 10.6973 7.6206 10.6973Z",
    fill: "#FF9908"
  }), /* @__PURE__ */ e("path", {
    d: "M9.90283 10.6973C10.1674 10.6973 10.3818 10.4828 10.3818 10.2183C10.3818 9.95372 10.1674 9.73926 9.90283 9.73926C9.63828 9.73926 9.42383 9.95372 9.42383 10.2183C9.42383 10.4828 9.63828 10.6973 9.90283 10.6973Z",
    fill: "#FF9908"
  })]
}), $9 = () => /* @__PURE__ */ n("svg", {
  id: "fileTypeId",
  width: "21",
  height: "24",
  viewBox: "0 0 21 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  children: [/* @__PURE__ */ e("g", {
    opacity: "0.3",
    children: /* @__PURE__ */ e("path", {
      opacity: "0.3",
      d: "M13.969 4.92424C13.4222 4.92371 12.8981 4.7063 12.5115 4.31971C12.1249 3.93313 11.9075 3.40896 11.907 2.86224V0.000244326H2.69396C2.34049 0.000112973 1.99045 0.069621 1.66384 0.204798C1.33724 0.339974 1.04048 0.538172 0.790491 0.788068C0.540502 1.03796 0.342195 1.33466 0.206897 1.66121C0.071599 1.98776 0.0019531 2.33777 0.00195312 2.69124V18.9132C0.00301317 19.6264 0.287133 20.31 0.791894 20.8138C1.29666 21.3177 1.98078 21.6005 2.69396 21.6002H13.754C14.1073 21.6002 14.4573 21.5306 14.7838 21.3954C15.1102 21.2602 15.4069 21.0619 15.6568 20.8121C15.9067 20.5622 16.1049 20.2655 16.2401 19.939C16.3753 19.6126 16.445 19.2626 16.445 18.9092V4.92424H13.969Z",
      fill: "#FF3E4C"
    })
  }), /* @__PURE__ */ e("path", {
    d: "M16.4452 4.92424H13.9692C13.4225 4.92371 12.8983 4.7063 12.5118 4.31971C12.1252 3.93313 11.9078 3.40896 11.9072 2.86224V0.000244141L16.4452 4.92424Z",
    fill: "#FF3E4C"
  }), /* @__PURE__ */ e("path", {
    d: "M18.3971 17.0603H5.8931C5.00613 17.0603 4.28711 17.7793 4.28711 18.6663V22.3943C4.28711 23.2813 5.00613 24.0003 5.8931 24.0003H18.3971C19.2841 24.0003 20.0031 23.2813 20.0031 22.3943V18.6663C20.0031 17.7793 19.2841 17.0603 18.3971 17.0603Z",
    fill: "#FF3E4C"
  }), /* @__PURE__ */ e("path", {
    d: "M8.74028 21.3372V22.0642H7.98828V21.3372H8.74028Z",
    fill: "white"
  }), /* @__PURE__ */ e("path", {
    d: "M11.0801 19.0571V19.6361H9.84614V20.3001H10.7991V20.8531H9.84614V22.0691H9.11914V19.0621L11.0801 19.0571Z",
    fill: "white"
  }), /* @__PURE__ */ e("path", {
    d: "M12.1812 21.5071H13.1512V22.0641H11.4512V19.0571H12.1782L12.1812 21.5071Z",
    fill: "white"
  }), /* @__PURE__ */ e("path", {
    d: "M14.0475 19.0571L14.7835 21.3201L15.5195 19.0571H16.2975L15.2515 22.0641H14.3115L13.2695 19.0571H14.0475Z",
    fill: "white"
  }), /* @__PURE__ */ e("path", {
    d: "M11.9473 13.1913V8.42031C11.9474 8.39718 11.9454 8.37408 11.9413 8.35131C11.941 8.34465 11.941 8.33797 11.9413 8.33131C11.9413 8.31531 11.9323 8.30031 11.9273 8.28531L11.9183 8.26531C11.9115 8.25088 11.9038 8.23686 11.8953 8.22331C11.8926 8.21762 11.8892 8.21226 11.8853 8.20731C11.8731 8.18922 11.8594 8.17216 11.8443 8.15631L11.8363 8.15031C11.8231 8.13699 11.8087 8.12494 11.7933 8.11431L11.7763 8.10331C11.7633 8.09531 11.7493 8.08831 11.7353 8.08131L11.7153 8.07231C11.6993 8.06627 11.683 8.06126 11.6663 8.05731H11.6503C11.6276 8.05241 11.6045 8.05006 11.5813 8.05031H4.84132C4.74874 8.05878 4.66267 8.10152 4.59996 8.17015C4.53725 8.23877 4.50243 8.32835 4.50232 8.42131C4.50183 8.42697 4.50183 8.43265 4.50232 8.43831V13.2063C4.4999 13.2677 4.5194 13.328 4.55732 13.3763C4.5902 13.4317 4.63688 13.4775 4.69279 13.5094C4.74871 13.5413 4.81194 13.5582 4.87631 13.5583H11.5763C11.6737 13.5573 11.7669 13.5184 11.8361 13.4499C11.9054 13.3814 11.9452 13.2887 11.9473 13.1913ZM4.89832 8.94831V8.22431H5.48732V8.94831H4.89832ZM5.89232 8.94831V8.22431H6.48132V8.94831H5.89232ZM6.88632 8.94831V8.22431H7.47531V8.94831H6.88632ZM7.88032 8.94831V8.22431H8.46932V8.94831H7.88032ZM8.87432 8.94831V8.22431H9.46331V8.94831H8.87432ZM9.86732 8.94831V8.22431H10.4563V8.94831H9.86732ZM10.8613 8.94831V8.22431H11.4503V8.94831H10.8613ZM4.76132 12.4593V9.14431H11.6833V12.4593H4.76132ZM4.89632 13.3783V12.6543H5.48532V13.3783H4.89632ZM5.89032 13.3783V12.6543H6.47932V13.3783H5.89032ZM6.88432 13.3783V12.6543H7.47332V13.3783H6.88432ZM7.87832 13.3783V12.6543H8.46732V13.3783H7.87832ZM8.87232 13.3783V12.6543H9.46132V13.3783H8.87232ZM9.86532 13.3783V12.6543H10.4543V13.3783H9.86532ZM10.8593 13.3783V12.6543H11.4483V13.3783H10.8593Z",
    fill: "#FF3E4C"
  }), /* @__PURE__ */ e("path", {
    d: "M9.0251 10.5561L8.0681 10.0031C8.01857 9.97455 7.96239 9.95949 7.90519 9.95947C7.84799 9.95946 7.7918 9.97449 7.74225 10.0031C7.6927 10.0316 7.65154 10.0727 7.6229 10.1223C7.59426 10.1718 7.57916 10.2279 7.5791 10.2851V11.3911C7.57916 11.4483 7.59426 11.5045 7.6229 11.554C7.65154 11.6035 7.6927 11.6447 7.74225 11.6732C7.7918 11.7018 7.84799 11.7168 7.90519 11.7168C7.96239 11.7168 8.01857 11.7017 8.0681 11.6731L9.0251 11.1201C9.0745 11.0915 9.11552 11.0504 9.14403 11.0009C9.17254 10.9514 9.18755 10.8953 9.18755 10.8381C9.18755 10.781 9.17254 10.7249 9.14403 10.6754C9.11552 10.6259 9.0745 10.5848 9.0251 10.5561Z",
    fill: "#FF3E4C"
  })]
}), T9 = () => /* @__PURE__ */ n("svg", {
  id: "fileTypeId",
  width: "21",
  height: "24",
  viewBox: "0 0 21 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  children: [/* @__PURE__ */ e("g", {
    opacity: "0.3",
    children: /* @__PURE__ */ e("path", {
      opacity: "0.3",
      d: "M13.9733 4.92504C13.4264 4.92451 12.902 4.707 12.5152 4.32024C12.1285 3.93349 11.911 3.40908 11.9104 2.86212V0.000244141H2.69381C1.98014 0.000244141 1.29571 0.283743 0.791068 0.788383C0.286429 1.29302 0.00292969 1.97747 0.00292969 2.69114V18.9125C0.00398948 19.6254 0.28796 20.3088 0.792484 20.8126C1.29701 21.3164 1.98083 21.5993 2.69381 21.5993H13.7534C14.467 21.5993 15.1514 21.3158 15.6561 20.8112C16.1607 20.3066 16.4442 19.6221 16.4442 18.9085V4.92103L13.9733 4.92504Z",
      fill: "#2869FE"
    })
  }), /* @__PURE__ */ e("path", {
    d: "M16.444 4.92504H13.9731C13.4261 4.92451 12.9017 4.707 12.515 4.32024C12.1282 3.93349 11.9107 3.40908 11.9102 2.86212V0.000244141L16.444 4.92504Z",
    fill: "#2869FE"
  }), /* @__PURE__ */ e("path", {
    d: "M18.3965 17.0605H5.89304C5.0061 17.0605 4.28711 17.7795 4.28711 18.6665V22.3943C4.28711 23.2813 5.0061 24.0003 5.89304 24.0003H18.3965C19.2835 24.0003 20.0025 23.2813 20.0025 22.3943V18.6665C20.0025 17.7795 19.2835 17.0605 18.3965 17.0605Z",
    fill: "#2869FE"
  }), /* @__PURE__ */ e("path", {
    d: "M8.7216 21.3374V22.0644H7.97363V21.3374H8.7216Z",
    fill: "white"
  }), /* @__PURE__ */ e("path", {
    d: "M9.82753 19.6354V20.2653H10.8435V20.8133H9.82753V21.4813H10.9735V22.0643H9.10156V19.0574H10.9735V19.6354H9.82753Z",
    fill: "white"
  }), /* @__PURE__ */ e("path", {
    d: "M13.2079 22.0643L12.574 21.1283L12.03 22.0643H11.196L12.157 20.5163L11.166 19.0574H12.03L12.6459 19.9633L13.1779 19.0574H14.0079L13.0589 20.5713L14.0709 22.0643H13.2079Z",
    fill: "white"
  }), /* @__PURE__ */ e("path", {
    d: "M15.0795 19.6354V20.2653H16.0965V20.8133H15.0795V21.4813H16.2235V22.0643H14.3525V19.0574H16.2235V19.6354H15.0795Z",
    fill: "white"
  }), /* @__PURE__ */ e("path", {
    d: "M8.22393 14.7707C8.10989 14.7707 8.00053 14.7254 7.91989 14.6447C7.83925 14.5641 7.79395 14.4547 7.79395 14.3407V13.6797C7.79395 13.6233 7.80507 13.5674 7.8267 13.5153C7.84832 13.4632 7.88001 13.4159 7.91995 13.376C7.95989 13.3362 8.0073 13.3046 8.05946 13.2831C8.11162 13.2616 8.16751 13.2506 8.22393 13.2507C8.33771 13.2507 8.44681 13.2959 8.52726 13.3764C8.60771 13.4568 8.65292 13.5659 8.65292 13.6797V14.3407C8.65292 14.4546 8.60775 14.5638 8.52733 14.6444C8.4469 14.725 8.3378 14.7704 8.22393 14.7707Z",
    fill: "#2869FE"
  }), /* @__PURE__ */ e("path", {
    d: "M8.22393 9.44192C8.10989 9.44192 8.00053 9.39661 7.91989 9.31598C7.83925 9.23534 7.79395 9.12598 7.79395 9.01194V8.24298C7.79395 8.12894 7.83925 8.01956 7.91989 7.93892C8.00053 7.85829 8.10989 7.81299 8.22393 7.81299C8.3378 7.81325 8.4469 7.85867 8.52733 7.93928C8.60775 8.01989 8.65292 8.12911 8.65292 8.24298V9.01194C8.65292 9.1258 8.60775 9.23501 8.52733 9.31562C8.4469 9.39623 8.3378 9.44166 8.22393 9.44192Z",
    fill: "#2869FE"
  }), /* @__PURE__ */ e("path", {
    d: "M9.74849 14.3626C9.6729 14.3627 9.59863 14.3429 9.53315 14.3051C9.46767 14.2674 9.41329 14.2131 9.3755 14.1476L9.05551 13.5916C8.99863 13.4931 8.98322 13.376 9.01266 13.2661C9.04211 13.1563 9.11399 13.0626 9.21251 13.0057C9.26134 12.9773 9.31528 12.9589 9.37123 12.9515C9.42719 12.9441 9.48405 12.9477 9.53858 12.9623C9.59311 12.9769 9.64422 13.0021 9.68899 13.0365C9.73376 13.0709 9.77131 13.1137 9.79948 13.1627L10.1195 13.7176C10.1764 13.8163 10.1918 13.9335 10.1624 14.0436C10.133 14.1537 10.0611 14.2475 9.96248 14.3046C9.89743 14.3423 9.82365 14.3623 9.74849 14.3626Z",
    fill: "#2869FE"
  }), /* @__PURE__ */ e("path", {
    d: "M7.09378 9.76289C7.0182 9.763 6.94393 9.74318 6.87845 9.70543C6.81297 9.66769 6.75859 9.61335 6.7208 9.54789L6.32682 8.86693C6.26998 8.76813 6.25468 8.6508 6.28431 8.54073C6.31393 8.43067 6.38605 8.33687 6.48481 8.27995C6.58349 8.22303 6.70072 8.20758 6.81078 8.23701C6.92083 8.26645 7.0147 8.33835 7.07179 8.43694L7.46478 9.11891C7.5217 9.21759 7.53714 9.33483 7.50771 9.44488C7.47827 9.55494 7.40636 9.64881 7.30778 9.7059C7.24266 9.7433 7.16887 9.76295 7.09378 9.76289Z",
    fill: "#2869FE"
  }), /* @__PURE__ */ e("path", {
    d: "M10.8634 13.2457C10.7883 13.2457 10.7145 13.2261 10.6494 13.1887L10.0934 12.8677C9.99484 12.8106 9.92294 12.7167 9.89351 12.6067C9.86407 12.4966 9.87951 12.3794 9.93644 12.2807C9.99336 12.182 10.0872 12.1098 10.1972 12.0802C10.3073 12.0506 10.4246 12.0659 10.5234 12.1227L11.0794 12.4437C11.178 12.5008 11.2499 12.5947 11.2793 12.7047C11.3088 12.8148 11.2933 12.932 11.2364 13.0307C11.1986 13.0961 11.1442 13.1505 11.0787 13.1882C11.0133 13.226 10.939 13.2458 10.8634 13.2457Z",
    fill: "#2869FE"
  }), /* @__PURE__ */ e("path", {
    d: "M6.26381 10.5907C6.18863 10.5905 6.11482 10.5705 6.04982 10.5327L5.36784 10.1398C5.26925 10.0827 5.19736 9.98881 5.16792 9.87875C5.13849 9.7687 5.15393 9.65147 5.21085 9.55279C5.23902 9.50388 5.27658 9.461 5.32135 9.42662C5.36612 9.39225 5.41723 9.36704 5.47176 9.35246C5.52629 9.33787 5.58315 9.33419 5.63911 9.34163C5.69506 9.34907 5.749 9.36747 5.79783 9.39579L6.47981 9.78878C6.57819 9.84605 6.64992 9.93991 6.67933 10.0499C6.70875 10.1599 6.69345 10.277 6.6368 10.3758C6.599 10.4412 6.54463 10.4955 6.47915 10.5333C6.41367 10.571 6.33939 10.5909 6.26381 10.5907Z",
    fill: "#2869FE"
  }), /* @__PURE__ */ e("path", {
    d: "M11.2736 11.7218H10.6116C10.4976 11.7218 10.3882 11.6765 10.3076 11.5958C10.227 11.5152 10.1816 11.4058 10.1816 11.2918C10.1819 11.1779 10.2273 11.0688 10.3079 10.9884C10.3886 10.908 10.4978 10.8628 10.6116 10.8628H11.2736C11.3875 10.8628 11.4967 10.908 11.5773 10.9884C11.6579 11.0688 11.7033 11.1779 11.7036 11.2918C11.7036 11.4058 11.6583 11.5152 11.5776 11.5958C11.497 11.6765 11.3876 11.7218 11.2736 11.7218Z",
    fill: "#2869FE"
  }), /* @__PURE__ */ e("path", {
    d: "M5.9421 11.7218H5.17413C5.06009 11.7218 4.95072 11.6765 4.87009 11.5958C4.78945 11.5152 4.74414 11.4058 4.74414 11.2918C4.74441 11.1779 4.78983 11.0688 4.87044 10.9884C4.95105 10.908 5.06026 10.8628 5.17413 10.8628H5.9411C5.99752 10.8627 6.05341 10.8737 6.10557 10.8952C6.15773 10.9167 6.20514 10.9482 6.24508 10.9881C6.28502 11.0279 6.3167 11.0753 6.33832 11.1274C6.35995 11.1795 6.37107 11.2354 6.37107 11.2918C6.37121 11.3482 6.36021 11.4041 6.33872 11.4563C6.31722 11.5084 6.28563 11.5558 6.24579 11.5958C6.20594 11.6357 6.1586 11.6674 6.10649 11.689C6.05437 11.7106 5.99852 11.7218 5.9421 11.7218Z",
    fill: "#2869FE"
  }), /* @__PURE__ */ e("path", {
    d: "M10.2613 10.5449C10.1859 10.545 10.1117 10.5253 10.0462 10.4877C9.98078 10.4502 9.92634 10.3961 9.88835 10.3309C9.8315 10.2321 9.81621 10.1148 9.84583 10.0047C9.87546 9.89462 9.94758 9.80081 10.0463 9.7439L10.6463 9.39591C10.745 9.33898 10.8622 9.32355 10.9723 9.35298C11.0823 9.38242 11.1762 9.45432 11.2333 9.55291C11.2902 9.65159 11.3057 9.76882 11.2762 9.87888C11.2468 9.98893 11.1749 10.0828 11.0763 10.1399L10.4763 10.4879C10.411 10.5255 10.3368 10.5452 10.2613 10.5449Z",
    fill: "#2869FE"
  }), /* @__PURE__ */ e("path", {
    d: "M5.58284 13.2457C5.50738 13.2458 5.43324 13.226 5.36791 13.1882C5.30259 13.1505 5.2484 13.0961 5.21085 13.0307C5.15393 12.932 5.13849 12.8147 5.16792 12.7047C5.19736 12.5946 5.26925 12.5008 5.36784 12.4437L6.00383 12.0767C6.10256 12.02 6.2197 12.0048 6.32968 12.0342C6.43965 12.0636 6.53353 12.1353 6.5908 12.2337C6.64765 12.3325 6.66293 12.4498 6.6333 12.5599C6.60368 12.67 6.53156 12.7638 6.4328 12.8207L5.79783 13.1877C5.73267 13.2259 5.65841 13.246 5.58284 13.2457Z",
    fill: "#2869FE"
  }), /* @__PURE__ */ e("path", {
    d: "M8.27368 14.1105H8.20468C7.71322 14.099 7.23386 13.9557 6.81674 13.6956C6.40453 13.44 6.06661 13.0807 5.83678 12.6536C5.62196 12.2514 5.50932 11.8026 5.50879 11.3467C5.50879 11.3237 5.50879 11.3007 5.50879 11.2777C5.52062 10.8078 5.65209 10.3486 5.89078 9.94371C6.12915 9.53932 6.46634 9.20213 6.87073 8.96376C7.27735 8.72489 7.73821 8.59375 8.20968 8.58277H8.27268C8.72919 8.58228 9.17866 8.69534 9.58062 8.91176C10.0074 9.14079 10.3664 9.47807 10.6216 9.88972C10.8821 10.3088 11.025 10.7903 11.0356 11.2837C11.0356 11.3007 11.0356 11.3237 11.0356 11.3467C11.0357 11.824 10.912 12.2933 10.6766 12.7086C10.4305 13.1445 10.0703 13.5051 9.63462 13.7516C9.21957 13.9867 8.75071 14.1104 8.27368 14.1105ZM8.26268 9.44074H8.23568C7.90899 9.44783 7.58955 9.53837 7.30771 9.70373C7.02904 9.86807 6.7965 10.1003 6.63174 10.3787C6.46862 10.6587 6.37981 10.9757 6.37376 11.2997C6.37376 11.3177 6.37376 11.3306 6.37376 11.3436C6.37355 11.6577 6.45119 11.9669 6.59975 12.2436C6.75798 12.5388 6.99111 12.7871 7.27572 12.9636C7.56446 13.1427 7.89596 13.2411 8.23568 13.2486H8.27968C8.60878 13.249 8.93232 13.1638 9.21863 13.0016C9.51929 12.8314 9.76787 12.5825 9.93761 12.2816C10.0997 11.9956 10.1848 11.6724 10.1846 11.3436V11.3057C10.1772 10.9639 10.0784 10.6304 9.89861 10.3397C9.72268 10.0558 9.47503 9.82338 9.18063 9.66573C8.89924 9.51546 8.58468 9.4381 8.26568 9.44074H8.26268Z",
    fill: "#2869FE"
  }), /* @__PURE__ */ e("path", {
    d: "M9.37909 9.71778C9.30397 9.71807 9.23012 9.69839 9.1651 9.66077C9.11618 9.6326 9.0733 9.59506 9.03893 9.55029C9.00455 9.50552 8.97935 9.4544 8.96476 9.39987C8.95018 9.34534 8.9465 9.28847 8.95393 9.23252C8.96137 9.17656 8.97977 9.12262 9.00809 9.0738L9.37508 8.43682C9.40325 8.38791 9.44079 8.34503 9.48557 8.31066C9.53034 8.27628 9.58146 8.25107 9.63599 8.23649C9.69052 8.22191 9.74738 8.21823 9.80334 8.22566C9.85929 8.2331 9.91323 8.25151 9.96206 8.27984C10.011 8.30801 10.0538 8.34555 10.0882 8.39032C10.1226 8.43509 10.1478 8.48621 10.1624 8.54074C10.177 8.59527 10.1807 8.65213 10.1732 8.70809C10.1658 8.76404 10.1474 8.81798 10.119 8.86681L9.75207 9.50278C9.71428 9.56824 9.6599 9.62258 9.59442 9.66032C9.52894 9.69806 9.45467 9.71788 9.37909 9.71778Z",
    fill: "#2869FE"
  }), /* @__PURE__ */ e("path", {
    d: "M6.69881 14.3626C6.6236 14.3625 6.54975 14.3425 6.48481 14.3046C6.38605 14.2476 6.31393 14.1538 6.28431 14.0438C6.25468 13.9337 6.26998 13.8164 6.32682 13.7176L6.67481 13.1176C6.73189 13.019 6.82577 12.9471 6.93582 12.9177C7.04587 12.8882 7.1631 12.9037 7.26178 12.9606C7.36037 13.0177 7.43228 13.1116 7.46171 13.2216C7.49115 13.3317 7.4757 13.4489 7.41877 13.5476L7.07179 14.1476C7.034 14.213 6.97962 14.2674 6.91414 14.3051C6.84866 14.3428 6.77439 14.3627 6.69881 14.3626Z",
    fill: "#2869FE"
  })]
}), I9 = () => /* @__PURE__ */ n("svg", {
  id: "fileTypeId",
  width: "20",
  height: "24",
  viewBox: "0 0 20 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  children: [/* @__PURE__ */ e("g", {
    opacity: "0.3",
    children: /* @__PURE__ */ e("path", {
      opacity: "0.3",
      d: "M13.967 4.92424C13.4203 4.92371 12.8961 4.7063 12.5095 4.31971C12.1229 3.93313 11.9055 3.40896 11.905 2.86224V0.000244141H2.692C2.33849 0.000244141 1.98842 0.0698779 1.66182 0.205164C1.33521 0.340449 1.03845 0.538733 0.788477 0.788709C0.538501 1.03868 0.340205 1.33545 0.204919 1.66206C0.0696338 1.98867 0 2.33873 0 2.69225V18.9132C0 19.2668 0.0696338 19.6168 0.204919 19.9434C0.340205 20.27 0.538501 20.5668 0.788477 20.8168C1.03845 21.0667 1.33521 21.265 1.66182 21.4003C1.98842 21.5356 2.33849 21.6052 2.692 21.6052H13.752C14.1055 21.6052 14.4555 21.5356 14.782 21.4003C15.1086 21.265 15.4053 21.0667 15.6552 20.8167C15.9051 20.5667 16.1033 20.27 16.2385 19.9433C16.3736 19.6167 16.4431 19.2667 16.443 18.9132V4.92524L13.967 4.92424Z",
      fill: "#FF9908"
    })
  }), /* @__PURE__ */ e("path", {
    d: "M16.4433 4.92424H13.9673C13.4206 4.92371 12.8964 4.7063 12.5098 4.31971C12.1232 3.93313 11.9058 3.40896 11.9053 2.86224V0.000244141L16.4433 4.92424Z",
    fill: "#FF9908"
  }), /* @__PURE__ */ e("path", {
    d: "M18.3952 17.0603H5.89115C5.00418 17.0603 4.28516 17.7793 4.28516 18.6663V22.3943C4.28516 23.2813 5.00418 24.0003 5.89115 24.0003H18.3952C19.2821 24.0003 20.0011 23.2813 20.0011 22.3943V18.6663C20.0011 17.7793 19.2821 17.0603 18.3952 17.0603Z",
    fill: "#FF9908"
  }), /* @__PURE__ */ e("path", {
    d: "M8.72859 21.3372V22.0652H7.97559V21.3372H8.72859Z",
    fill: "white"
  }), /* @__PURE__ */ e("path", {
    d: "M9.83445 19.6364V20.2654H10.8504V20.8144H9.83445V21.4823H10.9784V22.0654H9.10645V19.0583H10.9784V19.6364H9.83445Z",
    fill: "white"
  }), /* @__PURE__ */ e("path", {
    d: "M12.1177 21.0104V22.0654H11.3896V19.0583H12.5677C12.9257 19.0583 13.198 19.1467 13.3847 19.3234C13.4793 19.4164 13.5532 19.5283 13.6016 19.6519C13.65 19.7754 13.6718 19.9078 13.6656 20.0404C13.6688 20.2153 13.6253 20.3878 13.5396 20.5404C13.4531 20.6899 13.3235 20.8097 13.1677 20.8844C12.9806 20.9736 12.7748 21.0168 12.5677 21.0104H12.1177ZM12.9256 20.0404C12.9256 19.7737 12.7796 19.6404 12.4876 19.6404H12.1177V20.4234H12.4876C12.7816 20.426 12.9286 20.2984 12.9286 20.0404H12.9256Z",
    fill: "white"
  }), /* @__PURE__ */ e("path", {
    d: "M16.0624 21.6562C15.9767 21.7948 15.8527 21.9056 15.7054 21.9752C15.5268 22.0595 15.3308 22.1003 15.1334 22.0942C14.8359 22.1062 14.5428 22.0197 14.2994 21.8482C14.1923 21.7673 14.1046 21.6634 14.0428 21.5442C13.9811 21.4249 13.9468 21.2934 13.9424 21.1592H14.7164C14.7229 21.2603 14.7659 21.3555 14.8374 21.4272C14.9096 21.4941 15.0051 21.53 15.1034 21.5272C15.1842 21.5321 15.2637 21.5048 15.3244 21.4512C15.3511 21.4253 15.3721 21.3942 15.386 21.3598C15.4 21.3253 15.4066 21.2883 15.4054 21.2512C15.4064 21.2159 15.4004 21.1807 15.3877 21.1478C15.375 21.1148 15.3559 21.0847 15.3314 21.0592C15.2785 21.0058 15.2157 20.9634 15.1464 20.9342C15.0724 20.9015 14.9704 20.8625 14.8404 20.8172C14.681 20.7649 14.5253 20.7017 14.3744 20.6282C14.25 20.5639 14.1433 20.4702 14.0634 20.3552C13.972 20.2161 13.9268 20.0516 13.9344 19.8852C13.9302 19.7204 13.9778 19.5585 14.0704 19.4222C14.1647 19.2885 14.2951 19.1845 14.4464 19.1222C14.6213 19.0516 14.8089 19.0176 14.9974 19.0222C15.2836 19.0061 15.5665 19.0903 15.7974 19.2602C15.8939 19.3382 15.9732 19.4354 16.0303 19.5455C16.0874 19.6556 16.1212 19.7764 16.1294 19.9002H15.3424C15.3336 19.8117 15.2956 19.7287 15.2344 19.6642C15.203 19.6345 15.1659 19.6114 15.1253 19.5965C15.0848 19.5815 15.0416 19.575 14.9984 19.5772C14.9237 19.5734 14.8502 19.5976 14.7924 19.6452C14.7651 19.6705 14.7438 19.7016 14.7301 19.7362C14.7164 19.7708 14.7107 19.8081 14.7134 19.8452C14.7126 19.8783 14.7183 19.9113 14.7303 19.9422C14.7423 19.9731 14.7604 20.0013 14.7834 20.0252C14.8338 20.0772 14.8939 20.1187 14.9604 20.1472C15.0314 20.1782 15.1334 20.2182 15.2664 20.2662C15.4285 20.3183 15.5863 20.3828 15.7384 20.4592C15.8638 20.5262 15.9717 20.6218 16.0534 20.7382C16.1465 20.879 16.1927 21.0456 16.1854 21.2142C16.1869 21.3702 16.1443 21.5234 16.0624 21.6562Z",
    fill: "white"
  }), /* @__PURE__ */ e("path", {
    d: "M12.3034 12.7733H12.0544C12.0531 11.7641 11.6515 10.7966 10.9378 10.0831C10.2241 9.36961 9.25657 8.96832 8.24739 8.96726C7.2383 8.96832 6.27083 9.36964 5.5573 10.0832C4.84377 10.7967 4.44244 11.7642 4.44138 12.7733H4.19238C4.19371 11.6982 4.62136 10.6676 5.38153 9.9074C6.1417 9.14722 7.17234 8.71958 8.24739 8.71826C9.32261 8.71932 10.3535 9.14684 11.1139 9.90704C11.8743 10.6672 12.3021 11.698 12.3034 12.7733Z",
    fill: "#FF9908"
  }), /* @__PURE__ */ e("path", {
    d: "M14.0104 8.71826H2.48438V8.96726H14.0104V8.71826Z",
    fill: "#FF9908"
  }), /* @__PURE__ */ e("path", {
    d: "M4.71497 12.3752H3.91797V13.1722H4.71497V12.3752Z",
    fill: "#FF9908"
  }), /* @__PURE__ */ e("path", {
    d: "M12.5773 12.3752H11.7803V13.1722H12.5773V12.3752Z",
    fill: "#FF9908"
  }), /* @__PURE__ */ e("path", {
    d: "M8.64564 8.43115H7.84863V9.22815H8.64564V8.43115Z",
    fill: "#FF9908"
  }), /* @__PURE__ */ e("path", {
    d: "M2.47126 9.22915C2.69163 9.22915 2.87026 9.05051 2.87026 8.83015C2.87026 8.60979 2.69163 8.43115 2.47126 8.43115C2.2509 8.43115 2.07227 8.60979 2.07227 8.83015C2.07227 9.05051 2.2509 9.22915 2.47126 9.22915Z",
    fill: "#FF9908"
  }), /* @__PURE__ */ e("path", {
    d: "M13.9723 9.22915C14.1926 9.22915 14.3713 9.05051 14.3713 8.83015C14.3713 8.60979 14.1926 8.43115 13.9723 8.43115C13.7519 8.43115 13.5732 8.60979 13.5732 8.83015C13.5732 9.05051 13.7519 9.22915 13.9723 9.22915Z",
    fill: "#FF9908"
  })]
}), S9 = () => /* @__PURE__ */ n("svg", {
  id: "fileTypeId",
  width: "21",
  height: "24",
  viewBox: "0 0 21 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  children: [/* @__PURE__ */ e("g", {
    opacity: "0.3",
    children: /* @__PURE__ */ e("path", {
      opacity: "0.3",
      d: "M13.9729 4.92424C13.4261 4.92398 12.9016 4.70668 12.5148 4.32007C12.128 3.93345 11.9105 3.40913 11.9099 2.86224V0.000244141H2.69294C2.33947 0.000244116 1.98947 0.0698778 1.66292 0.205176C1.33636 0.340474 1.03967 0.538781 0.789771 0.78877C0.539875 1.03876 0.341683 1.33553 0.206507 1.66213C0.0713299 1.98874 0.00182196 2.33878 0.00195331 2.69225V18.9132C0.00301315 19.6262 0.286995 20.3097 0.791541 20.8135C1.29609 21.3173 1.97994 21.6002 2.69294 21.6002H13.753C14.1064 21.6002 14.4564 21.5306 14.783 21.3953C15.1095 21.26 15.4062 21.0617 15.6561 20.8117C15.906 20.5617 16.1042 20.265 16.2394 19.9384C16.3746 19.6118 16.4441 19.2617 16.4439 18.9082V4.92024L13.9729 4.92424Z",
      fill: "#005FAD"
    })
  }), /* @__PURE__ */ e("path", {
    d: "M16.4442 4.92424H13.9732C13.4263 4.92398 12.9018 4.70668 12.515 4.32007C12.1282 3.93345 11.9107 3.40913 11.9102 2.86224V0.000244141L16.4442 4.92424Z",
    fill: "#005FAD"
  }), /* @__PURE__ */ e("path", {
    d: "M12.3509 8.63428H3.45093C3.36526 8.63428 3.28311 8.60025 3.22253 8.53967C3.16196 8.4791 3.12793 8.39694 3.12793 8.31128C3.12793 8.22561 3.16196 8.14346 3.22253 8.08289C3.28311 8.02231 3.36526 7.98828 3.45093 7.98828H12.3509C12.3933 7.98828 12.4352 7.99665 12.4744 8.01289C12.5135 8.02914 12.5491 8.05294 12.579 8.08295C12.6089 8.11295 12.6326 8.14856 12.6487 8.18774C12.6648 8.22693 12.6731 8.26891 12.6729 8.31128C12.6729 8.39677 12.639 8.47877 12.5787 8.53932C12.5183 8.59986 12.4364 8.63401 12.3509 8.63428Z",
    fill: "#005FAD"
  }), /* @__PURE__ */ e("path", {
    d: "M18.3961 17.0603H5.89213C5.00516 17.0603 4.28613 17.7793 4.28613 18.6663V22.3943C4.28613 23.2813 5.00516 24.0003 5.89213 24.0003H18.3961C19.2831 24.0003 20.0021 23.2813 20.0021 22.3943V18.6663C20.0021 17.7793 19.2831 17.0603 18.3961 17.0603Z",
    fill: "#005FAD"
  }), /* @__PURE__ */ e("path", {
    d: "M7.07332 21.3372V22.0652H6.32031V21.3372H7.07332Z",
    fill: "white"
  }), /* @__PURE__ */ e("path", {
    d: "M9.97312 21.3392C9.8482 21.5668 9.65899 21.7525 9.42913 21.8732C9.17092 22.0062 8.88346 22.0722 8.59312 22.0652H7.45312V19.0582H8.58912C8.87959 19.0507 9.16743 19.1149 9.42712 19.2452C9.65583 19.3636 9.8444 19.5469 9.96912 19.7722C10.0984 20.0126 10.1635 20.2823 10.1581 20.5552C10.1646 20.8281 10.1009 21.0981 9.97312 21.3392ZM9.19012 21.1882C9.27177 21.1052 9.33506 21.0059 9.37589 20.8969C9.41672 20.7879 9.43417 20.6715 9.42712 20.5552C9.43419 20.4388 9.41674 20.3223 9.37592 20.2131C9.33509 20.1038 9.2718 20.0044 9.19012 19.9212C9.00803 19.7621 8.77049 19.6812 8.52913 19.6962H8.18512V21.4142H8.52913C8.76934 21.4283 9.00541 21.3471 9.18612 21.1882H9.19012Z",
    fill: "white"
  }), /* @__PURE__ */ e("path", {
    d: "M14.6581 19.0583L13.9401 22.0654H13.0401L12.5591 20.0534L12.0741 22.0654H11.1741L10.4551 19.0583H11.2461L11.6331 21.2354L12.1601 19.0583H12.9601L13.4871 21.2354L13.8781 19.0583H14.6581Z",
    fill: "white"
  }), /* @__PURE__ */ e("path", {
    d: "M17.3797 19.3002C17.6222 19.482 17.7852 19.7503 17.8348 20.0492H17.0657C17.0155 19.9419 16.9339 19.8523 16.8317 19.7922C16.7172 19.7242 16.5859 19.6895 16.4527 19.6922C16.3492 19.6879 16.246 19.7065 16.1504 19.7466C16.0548 19.7867 15.9692 19.8473 15.8997 19.9242C15.7534 20.0993 15.6791 20.3234 15.6917 20.5512C15.6917 20.8372 15.7647 21.0569 15.9107 21.2102C15.9928 21.2898 16.0907 21.3514 16.1979 21.391C16.3052 21.4306 16.4196 21.4474 16.5338 21.4402C16.6969 21.4432 16.8566 21.393 16.9887 21.2972C17.1234 21.1964 17.2205 21.0535 17.2647 20.8912H16.3467V20.3682H17.8727V21.0872C17.814 21.266 17.7217 21.432 17.6007 21.5762C17.4692 21.7311 17.3058 21.856 17.1217 21.9422C16.9131 22.0385 16.6855 22.0864 16.4557 22.0822C16.1767 22.0896 15.9007 22.023 15.6557 21.8892C15.4316 21.7632 15.2492 21.5744 15.1307 21.3462C15.0031 21.0992 14.9394 20.8241 14.9457 20.5462C14.9403 20.2699 15.0039 19.9967 15.1307 19.7512C15.2487 19.5233 15.4304 19.3346 15.6537 19.2082C15.8951 19.0753 16.1673 19.0087 16.4427 19.0152C16.7782 19.0027 17.1081 19.103 17.3797 19.3002Z",
    fill: "white"
  }), /* @__PURE__ */ e("path", {
    d: "M10.0542 5.81715V14.7172C10.0543 14.7596 10.046 14.8017 10.0299 14.8409C10.0137 14.8802 9.9899 14.9158 9.95988 14.9458C9.92986 14.9759 9.89419 14.9996 9.85495 15.0158C9.8157 15.032 9.77363 15.0403 9.73118 15.0401C9.68881 15.0401 9.64686 15.0318 9.60773 15.0155C9.5686 14.9993 9.53305 14.9755 9.50314 14.9455C9.47323 14.9155 9.44952 14.8799 9.4334 14.8407C9.41728 14.8015 9.40905 14.7595 9.40918 14.7172V5.81715C9.40918 5.73166 9.44307 5.64964 9.50343 5.5891C9.56379 5.52855 9.64569 5.49441 9.73118 5.49414C9.81684 5.49414 9.89901 5.52817 9.95958 5.58875C10.0202 5.64932 10.0542 5.73149 10.0542 5.81715Z",
    fill: "#005FAD"
  }), /* @__PURE__ */ e("path", {
    d: "M10.7827 7.23633H8.72168V9.29733H10.7827V7.23633Z",
    fill: "#005FAD"
  })]
}), A9 = () => /* @__PURE__ */ n("svg", {
  id: "fileTypeId",
  width: "21",
  height: "24",
  viewBox: "0 0 21 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  children: [/* @__PURE__ */ e("g", {
    opacity: "0.3",
    children: /* @__PURE__ */ e("path", {
      opacity: "0.3",
      d: "M14.9635 4.92504C14.4168 4.92451 13.8927 4.70709 13.5061 4.32052C13.1195 3.93395 12.9021 3.4098 12.9016 2.86311V0.000244326H3.68896C3.33551 0.000112979 2.98548 0.0696059 2.65889 0.204777C2.3323 0.339948 2.03554 0.538144 1.78556 0.788029C1.53558 1.03791 1.33729 1.3346 1.20199 1.66114C1.0667 1.98768 0.99707 2.33767 0.99707 2.69112V18.9124C0.99707 19.2659 1.0667 19.6159 1.20199 19.9425C1.33729 20.269 1.53558 20.5657 1.78556 20.8156C2.03554 21.0655 2.3323 21.2636 2.65889 21.3988C2.98548 21.534 3.33551 21.6035 3.68896 21.6033H14.7485C15.4622 21.6033 16.1466 21.3198 16.6512 20.8152C17.1559 20.3106 17.4394 19.6261 17.4394 18.9124V4.92504H14.9635Z",
      fill: "#2869FE"
    })
  }), /* @__PURE__ */ e("path", {
    d: "M17.4392 4.92504H14.9633C14.4166 4.92451 13.8925 4.70709 13.5059 4.32052C13.1193 3.93395 12.9019 3.4098 12.9014 2.86311V0.000244141L17.4392 4.92504Z",
    fill: "#2869FE"
  }), /* @__PURE__ */ e("path", {
    d: "M14.0569 8.37299H3.73336C3.63417 8.37299 3.53905 8.33359 3.46892 8.26345C3.39878 8.19331 3.35938 8.09819 3.35938 7.99901C3.35924 7.94981 3.36883 7.90107 3.38756 7.85558C3.4063 7.81009 3.43382 7.76874 3.46856 7.73391C3.5033 7.69907 3.54457 7.67144 3.59001 7.65259C3.63545 7.63373 3.68416 7.62402 3.73336 7.62402H14.0569C14.1564 7.62402 14.2518 7.66353 14.3221 7.73386C14.3924 7.80418 14.4319 7.89956 14.4319 7.99901C14.4316 8.09829 14.392 8.19342 14.3217 8.26352C14.2514 8.33363 14.1562 8.37299 14.0569 8.37299Z",
    fill: "#2869FE"
  }), /* @__PURE__ */ e("path", {
    d: "M14.0569 10.6098H3.73336C3.63417 10.6098 3.53905 10.5704 3.46892 10.5003C3.39878 10.4301 3.35938 10.335 3.35938 10.2358C3.35924 10.1866 3.36883 10.1379 3.38756 10.0924C3.4063 10.0469 3.43382 10.0056 3.46856 9.97072C3.5033 9.93589 3.54457 9.90826 3.59001 9.8894C3.63545 9.87055 3.68416 9.86084 3.73336 9.86084H14.0569C14.1564 9.86084 14.2518 9.90033 14.3221 9.97065C14.3924 10.041 14.4319 10.1364 14.4319 10.2358C14.4316 10.3351 14.392 10.4302 14.3217 10.5003C14.2514 10.5704 14.1562 10.6098 14.0569 10.6098Z",
    fill: "#2869FE"
  }), /* @__PURE__ */ e("path", {
    d: "M14.0569 12.8466H3.73336C3.68416 12.8466 3.63545 12.8369 3.59001 12.8181C3.54457 12.7992 3.5033 12.7716 3.46856 12.7367C3.43382 12.7019 3.4063 12.6606 3.38756 12.6151C3.36883 12.5696 3.35924 12.5208 3.35938 12.4716C3.35938 12.3725 3.39878 12.2773 3.46892 12.2072C3.53905 12.1371 3.63417 12.0977 3.73336 12.0977H14.0569C14.1562 12.0977 14.2514 12.137 14.3217 12.2071C14.392 12.2772 14.4316 12.3724 14.4319 12.4716C14.4319 12.5711 14.3924 12.6665 14.3221 12.7368C14.2518 12.8071 14.1564 12.8466 14.0569 12.8466Z",
    fill: "#2869FE"
  }), /* @__PURE__ */ e("path", {
    d: "M9.9831 15.0837H3.73336C3.68416 15.0837 3.63545 15.074 3.59001 15.0551C3.54457 15.0363 3.5033 15.0086 3.46856 14.9738C3.43382 14.9389 3.4063 14.8976 3.38756 14.8521C3.36883 14.8066 3.35924 14.7579 3.35938 14.7087C3.35938 14.6095 3.39878 14.5144 3.46892 14.4442C3.53905 14.3741 3.63417 14.3347 3.73336 14.3347H9.9831C10.0823 14.3347 10.1774 14.3741 10.2475 14.4442C10.3177 14.5144 10.3571 14.6095 10.3571 14.7087C10.3572 14.7579 10.3476 14.8066 10.3289 14.8521C10.3102 14.8976 10.2826 14.9389 10.2479 14.9738C10.2132 15.0086 10.1719 15.0363 10.1265 15.0551C10.081 15.074 10.0323 15.0837 9.9831 15.0837Z",
    fill: "#2869FE"
  }), /* @__PURE__ */ e("path", {
    d: "M19.3916 17.0605H6.88816C6.00123 17.0605 5.28223 17.7795 5.28223 18.6665V22.3943C5.28223 23.2813 6.00123 24.0003 6.88816 24.0003H19.3916C20.2786 24.0003 20.9976 23.2813 20.9976 22.3943V18.6665C20.9976 17.7795 20.2786 17.0605 19.3916 17.0605Z",
    fill: "#2869FE"
  }), /* @__PURE__ */ e("path", {
    d: "M7.11526 21.3374V22.0644H6.3623V21.3374H7.11526Z",
    fill: "white"
  }), /* @__PURE__ */ e("path", {
    d: "M10.0091 21.3393C9.88358 21.5664 9.69452 21.752 9.46508 21.8733C9.20663 22.0055 8.91931 22.0711 8.62912 22.0643H7.49316V19.0574H8.62912C8.91952 19.0503 9.20723 19.1145 9.46708 19.2444C9.69581 19.3631 9.88437 19.5468 10.0091 19.7724C10.1383 20.0124 10.2035 20.2818 10.1981 20.5543C10.2032 20.8279 10.1381 21.0981 10.0091 21.3393ZM9.22709 21.1883C9.30838 21.1049 9.37136 21.0054 9.41199 20.8962C9.45263 20.7871 9.47004 20.6706 9.46309 20.5543C9.47008 20.4382 9.4527 20.3219 9.41205 20.2129C9.37141 20.1039 9.3084 20.0046 9.22709 19.9214C9.0449 19.7616 8.80695 19.6804 8.56512 19.6954H8.22114V21.4133H8.56512C8.80676 21.4281 9.04453 21.3473 9.22709 21.1883Z",
    fill: "white"
  }), /* @__PURE__ */ e("path", {
    d: "M12.8116 19.2084C13.0403 19.3383 13.2294 19.5281 13.3585 19.7573C13.4939 19.9994 13.5628 20.273 13.5585 20.5503C13.5636 20.8283 13.4946 21.1027 13.3585 21.3453C13.2297 21.5756 13.0402 21.7661 12.8106 21.8962C12.5768 22.0297 12.3118 22.0987 12.0426 22.0962C11.7734 22.0987 11.5084 22.0297 11.2746 21.8962C11.045 21.7661 10.8555 21.5756 10.7266 21.3453C10.5906 21.1027 10.5216 20.8283 10.5266 20.5503C10.5215 20.2729 10.5905 19.9991 10.7266 19.7573C10.8561 19.528 11.0456 19.3383 11.2746 19.2084C11.5084 19.0749 11.7734 19.0058 12.0426 19.0084C12.3121 19.006 12.5774 19.075 12.8116 19.2084ZM11.4716 19.9183C11.3241 20.0948 11.249 20.3206 11.2616 20.5503C11.249 20.779 11.3241 21.004 11.4716 21.1793C11.5435 21.2574 11.6315 21.3188 11.7297 21.3592C11.8278 21.3996 11.9336 21.4181 12.0396 21.4132C12.1452 21.4176 12.2506 21.399 12.3483 21.3586C12.4461 21.3182 12.5338 21.257 12.6056 21.1793C12.7538 21.0043 12.8296 20.7793 12.8175 20.5503C12.8296 20.3216 12.7545 20.0969 12.6076 19.9213C12.5357 19.8432 12.4477 19.7817 12.3495 19.7413C12.2514 19.7009 12.1456 19.6824 12.0396 19.6873C11.9338 19.6825 11.8283 19.7006 11.7302 19.7405C11.6322 19.7804 11.5439 19.841 11.4716 19.9183Z",
    fill: "white"
  }), /* @__PURE__ */ e("path", {
    d: "M16.2902 19.3294C16.5438 19.5358 16.7163 19.8252 16.7772 20.1464H16.0072C15.9553 20.0133 15.8643 19.8989 15.7462 19.8184C15.6218 19.7374 15.4757 19.6959 15.3272 19.6994C15.2292 19.6963 15.1318 19.7157 15.0424 19.7563C14.9531 19.7969 14.8744 19.8575 14.8123 19.9334C14.6731 20.1116 14.6022 20.3336 14.6123 20.5594C14.6021 20.7843 14.6731 21.0054 14.8123 21.1824C14.8749 21.2575 14.9538 21.3173 15.0431 21.3574C15.1323 21.3974 15.2295 21.4165 15.3272 21.4133C15.4758 21.4173 15.622 21.3758 15.7462 21.2943C15.8636 21.2153 15.9546 21.1027 16.0072 20.9714H16.7772C16.7153 21.2917 16.5429 21.5801 16.2902 21.7863C16.0182 21.994 15.6822 22.1001 15.3402 22.0863C15.0708 22.092 14.8048 22.025 14.5703 21.8923C14.3507 21.7647 14.1726 21.5766 14.0573 21.3503C13.933 21.1023 13.8709 20.8278 13.8763 20.5504C13.871 20.273 13.9331 19.9985 14.0573 19.7504C14.1726 19.5242 14.3507 19.336 14.5703 19.2084C14.8048 19.0758 15.0708 19.0088 15.3402 19.0144C15.684 19.0053 16.02 19.1168 16.2902 19.3294Z",
    fill: "white"
  }), /* @__PURE__ */ e("path", {
    d: "M19.0106 22.0642L18.3767 21.1283L17.8327 22.0642H16.9987L17.9607 20.5163L16.9697 19.0574H17.8327L18.4497 19.9633L18.9806 19.0574H19.8106L18.8617 20.5713L19.8736 22.0642H19.0106Z",
    fill: "white"
  })]
}), R9 = () => /* @__PURE__ */ n("svg", {
  id: "fileTypeId",
  width: "20",
  height: "24",
  viewBox: "0 0 20 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  children: [/* @__PURE__ */ e("g", {
    opacity: "0.3",
    children: /* @__PURE__ */ e("path", {
      opacity: "0.3",
      d: "M13.9664 4.92504C13.4197 4.92451 12.8956 4.70709 12.509 4.32052C12.1224 3.93395 11.905 3.4098 11.9045 2.86311V0.000244326H2.69189C2.33844 0.000112979 1.98841 0.0696059 1.66182 0.204777C1.33523 0.339948 1.03848 0.538144 0.788505 0.788029C0.538527 1.03791 0.340228 1.3346 0.204935 1.66114C0.069643 1.98768 -2.4405e-08 2.33767 0 2.69112V18.9124C-2.4405e-08 19.2659 0.069643 19.6159 0.204935 19.9425C0.340228 20.269 0.538527 20.5657 0.788505 20.8156C1.03848 21.0655 1.33523 21.2636 1.66182 21.3988C1.98841 21.534 2.33844 21.6035 2.69189 21.6033H13.7514C14.1048 21.6033 14.4547 21.5338 14.7812 21.3985C15.1077 21.2633 15.4043 21.0651 15.6542 20.8152C15.9041 20.5653 16.1023 20.2687 16.2375 19.9422C16.3727 19.6157 16.4423 19.2658 16.4423 18.9124V4.92504H13.9664Z",
      fill: "#2869FE"
    })
  }), /* @__PURE__ */ e("path", {
    d: "M16.4421 4.92504H13.9662C13.4195 4.92451 12.8954 4.70709 12.5088 4.32052C12.1222 3.93395 11.9048 3.4098 11.9043 2.86311V0.000244141L16.4421 4.92504Z",
    fill: "#2869FE"
  }), /* @__PURE__ */ e("path", {
    d: "M13.0599 8.37299H2.73629C2.6371 8.37299 2.54198 8.33359 2.47185 8.26345C2.40171 8.19331 2.36231 8.09819 2.36231 7.99901C2.36217 7.94981 2.37176 7.90107 2.39049 7.85558C2.40923 7.81009 2.43675 7.76874 2.47149 7.73391C2.50623 7.69907 2.54751 7.67144 2.59295 7.65259C2.63839 7.63373 2.68709 7.62402 2.73629 7.62402H13.0599C13.1593 7.62402 13.2547 7.66353 13.325 7.73386C13.3953 7.80418 13.4349 7.89956 13.4349 7.99901C13.4346 8.09829 13.395 8.19342 13.3247 8.26352C13.2544 8.33363 13.1592 8.37299 13.0599 8.37299Z",
    fill: "#2869FE"
  }), /* @__PURE__ */ e("path", {
    d: "M13.0599 10.6098H2.73629C2.6371 10.6098 2.54198 10.5704 2.47185 10.5003C2.40171 10.4301 2.36231 10.335 2.36231 10.2358C2.36217 10.1866 2.37176 10.1379 2.39049 10.0924C2.40923 10.0469 2.43675 10.0056 2.47149 9.97072C2.50623 9.93589 2.54751 9.90826 2.59295 9.8894C2.63839 9.87055 2.68709 9.86084 2.73629 9.86084H13.0599C13.1593 9.86084 13.2547 9.90033 13.325 9.97065C13.3953 10.041 13.4349 10.1364 13.4349 10.2358C13.4346 10.3351 13.395 10.4302 13.3247 10.5003C13.2544 10.5704 13.1592 10.6098 13.0599 10.6098Z",
    fill: "#2869FE"
  }), /* @__PURE__ */ e("path", {
    d: "M13.0599 12.8466H2.73629C2.68709 12.8466 2.63839 12.8369 2.59295 12.8181C2.54751 12.7992 2.50623 12.7716 2.47149 12.7367C2.43675 12.7019 2.40923 12.6606 2.39049 12.6151C2.37176 12.5696 2.36217 12.5208 2.36231 12.4716C2.36231 12.3725 2.40171 12.2773 2.47185 12.2072C2.54198 12.1371 2.6371 12.0977 2.73629 12.0977H13.0599C13.1592 12.0977 13.2544 12.137 13.3247 12.2071C13.395 12.2772 13.4346 12.3724 13.4349 12.4716C13.4349 12.5711 13.3953 12.6665 13.325 12.7368C13.2547 12.8071 13.1593 12.8466 13.0599 12.8466Z",
    fill: "#2869FE"
  }), /* @__PURE__ */ e("path", {
    d: "M8.98803 15.0837H2.73629C2.68709 15.0837 2.63839 15.074 2.59295 15.0551C2.54751 15.0363 2.50623 15.0086 2.47149 14.9738C2.43675 14.9389 2.40923 14.8976 2.39049 14.8521C2.37176 14.8066 2.36217 14.7579 2.36231 14.7087C2.36231 14.6095 2.40171 14.5144 2.47185 14.4442C2.54198 14.3741 2.6371 14.3347 2.73629 14.3347H8.98803C9.08722 14.3347 9.18235 14.3741 9.25249 14.4442C9.32262 14.5144 9.36202 14.6095 9.36202 14.7087C9.36215 14.7579 9.35258 14.8066 9.33384 14.8521C9.31511 14.8976 9.28758 14.9389 9.25284 14.9738C9.2181 15.0086 9.17682 15.0363 9.13139 15.0551C9.08595 15.074 9.03723 15.0837 8.98803 15.0837Z",
    fill: "#2869FE"
  }), /* @__PURE__ */ e("path", {
    d: "M18.3946 17.0605H5.89108C5.00415 17.0605 4.28516 17.7795 4.28516 18.6665V22.3943C4.28516 23.2813 5.00415 24.0003 5.89108 24.0003H18.3946C19.2815 24.0003 20.0005 23.2813 20.0005 22.3943V18.6665C20.0005 17.7795 19.2815 17.0605 18.3946 17.0605Z",
    fill: "#2869FE"
  }), /* @__PURE__ */ e("path", {
    d: "M7.62211 21.3374V22.0644H6.86914V21.3374H7.62211Z",
    fill: "white"
  }), /* @__PURE__ */ e("path", {
    d: "M10.5159 21.3393C10.3907 21.5667 10.2016 21.7523 9.97193 21.8733C9.71348 22.0055 9.42615 22.0711 9.13595 22.0643H8V19.0574H9.13595C9.42637 19.0502 9.71411 19.1144 9.97392 19.2444C10.2026 19.3632 10.3912 19.5468 10.5159 19.7724C10.6452 20.0124 10.7103 20.2818 10.7049 20.5544C10.71 20.8279 10.645 21.0981 10.5159 21.3393ZM9.73394 21.1883C9.81522 21.1049 9.87819 21.0054 9.91883 20.8962C9.95947 20.7871 9.97687 20.6706 9.96993 20.5544C9.97692 20.4382 9.95953 20.3219 9.91889 20.2129C9.87825 20.1039 9.81525 20.0046 9.73394 19.9214C9.55175 19.7616 9.3138 19.6804 9.07196 19.6954H8.72897V21.4133H9.07295C9.31425 21.4279 9.55163 21.3471 9.73394 21.1883Z",
    fill: "white"
  }), /* @__PURE__ */ e("path", {
    d: "M13.3184 19.2084C13.5472 19.3383 13.7363 19.5281 13.8654 19.7573C14.0007 19.9995 14.0696 20.273 14.0654 20.5503C14.0699 20.8283 14.001 21.1025 13.8654 21.3453C13.7359 21.5754 13.5461 21.7659 13.3164 21.8962C13.0826 22.0297 12.8176 22.0987 12.5484 22.0962C12.2793 22.0986 12.0143 22.0296 11.7805 21.8962C11.5509 21.7661 11.3613 21.5756 11.2325 21.3453C11.0965 21.1027 11.0274 20.8283 11.0325 20.5503C11.0273 20.2729 11.0964 19.9991 11.2325 19.7573C11.362 19.528 11.5514 19.3383 11.7805 19.2084C12.0143 19.075 12.2793 19.006 12.5484 19.0084C12.8182 19.0058 13.0839 19.0748 13.3184 19.2084ZM11.9785 19.9183C11.8309 20.0948 11.7559 20.3206 11.7685 20.5503C11.7559 20.779 11.831 21.004 11.9785 21.1793C12.0503 21.2574 12.1384 21.3188 12.2365 21.3592C12.3346 21.3996 12.4404 21.4181 12.5464 21.4132C12.6521 21.4178 12.7575 21.3992 12.8553 21.3588C12.953 21.3184 13.0408 21.2571 13.1124 21.1793C13.2606 21.0043 13.3364 20.7793 13.3244 20.5503C13.3364 20.3216 13.2614 20.0969 13.1144 19.9213C13.0426 19.8432 12.9545 19.7817 12.8564 19.7413C12.7583 19.7009 12.6525 19.6824 12.5464 19.6873C12.4407 19.6825 12.3351 19.7006 12.2371 19.7405C12.139 19.7804 12.0508 19.841 11.9785 19.9183Z",
    fill: "white"
  }), /* @__PURE__ */ e("path", {
    d: "M16.797 19.3294C17.0507 19.5358 17.2232 19.8252 17.284 20.1464H16.5141C16.4621 20.0133 16.3711 19.8989 16.2531 19.8184C16.1286 19.7374 15.9826 19.6959 15.8341 19.6994C15.7361 19.6963 15.6386 19.7157 15.5493 19.7563C15.46 19.7969 15.3812 19.8575 15.3191 19.9334C15.1799 20.1115 15.1089 20.3335 15.1191 20.5594C15.1089 20.7843 15.1799 21.0054 15.3191 21.1824C15.3817 21.2575 15.4607 21.3173 15.5499 21.3574C15.6391 21.3974 15.7363 21.4165 15.8341 21.4133C15.9826 21.4173 16.1288 21.3758 16.2531 21.2943C16.3705 21.2153 16.4614 21.1027 16.5141 20.9714H17.284C17.2221 21.2917 17.0498 21.5801 16.797 21.7863C16.525 21.994 16.189 22.1001 15.8471 22.0863C15.5777 22.092 15.3117 22.025 15.0771 21.8923C14.8576 21.7647 14.6795 21.5766 14.5641 21.3503C14.4402 21.1022 14.3784 20.8277 14.3842 20.5504C14.3785 20.2731 14.4403 19.9986 14.5641 19.7504C14.6795 19.5242 14.8576 19.336 15.0771 19.2084C15.3117 19.0758 15.5777 19.0088 15.8471 19.0144C16.1908 19.0053 16.5269 19.1168 16.797 19.3294Z",
    fill: "white"
  })]
}), B9 = () => /* @__PURE__ */ n("svg", {
  id: "fileTypeId",
  width: "21",
  height: "24",
  viewBox: "0 0 21 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  children: [/* @__PURE__ */ e("g", {
    opacity: "0.3",
    children: /* @__PURE__ */ e("path", {
      opacity: "0.3",
      d: "M13.9684 4.92504C13.4214 4.92451 12.897 4.707 12.5102 4.32024C12.1235 3.93349 11.906 3.40908 11.9054 2.86212V0.000244141H2.69283C1.97916 0.000244141 1.29472 0.283743 0.790079 0.788383C0.28544 1.29302 0.00195312 1.97747 0.00195312 2.69114V18.9125C0.00195312 19.6261 0.28544 20.3106 0.790079 20.8152C1.29472 21.3198 1.97916 21.6033 2.69283 21.6033H13.7524C14.466 21.6033 15.1505 21.3198 15.6551 20.8152C16.1597 20.3106 16.4433 19.6261 16.4433 18.9125V4.92504H13.9684Z",
      fill: "#9747FF"
    })
  }), /* @__PURE__ */ e("path", {
    d: "M16.4431 4.92504H13.9682C13.4212 4.92451 12.8968 4.707 12.5101 4.32024C12.1233 3.93349 11.9058 3.40908 11.9053 2.86212V0.000244141L16.4431 4.92504Z",
    fill: "#9747FF"
  }), /* @__PURE__ */ e("path", {
    d: "M18.3956 17.0605H5.89207C5.00514 17.0605 4.28613 17.7795 4.28613 18.6665V22.3943C4.28613 23.2813 5.00514 24.0003 5.89207 24.0003H18.3956C19.2825 24.0003 20.0015 23.2813 20.0015 22.3943V18.6665C20.0015 17.7795 19.2825 17.0605 18.3956 17.0605Z",
    fill: "#9747FF"
  }), /* @__PURE__ */ e("path", {
    d: "M8.91606 21.3374V22.0644H8.16309V21.3374H8.91606Z",
    fill: "white"
  }), /* @__PURE__ */ e("path", {
    d: "M11.8158 21.3394C11.6909 21.5667 11.5016 21.7521 11.2718 21.8724C11.0137 22.0055 10.7262 22.0715 10.4358 22.0644H9.2959V19.0575H10.4308C10.7213 19.0498 11.0092 19.1141 11.2688 19.2445C11.4973 19.3631 11.6858 19.5464 11.8108 19.7715C11.9404 20.0118 12.0059 20.2815 12.0008 20.5544C12.0072 20.8276 11.9435 21.0978 11.8158 21.3394ZM11.0338 21.1884C11.1151 21.1049 11.178 21.0055 11.2186 20.8963C11.2593 20.7871 11.2767 20.6707 11.2698 20.5544C11.2767 20.4382 11.2593 20.3217 11.2186 20.2126C11.178 20.1034 11.1151 20.0039 11.0338 19.9205C10.8513 19.7615 10.6135 19.6807 10.3719 19.6955H10.0279V21.4134H10.3719C10.6118 21.4269 10.8475 21.3462 11.0288 21.1884H11.0338Z",
    fill: "white"
  }), /* @__PURE__ */ e("path", {
    d: "M13.1392 21.5073H14.1091V22.0643H12.4092V19.0574H13.1362L13.1392 21.5073Z",
    fill: "white"
  }), /* @__PURE__ */ e("path", {
    d: "M15.1724 21.5073H16.1423V22.0643H14.4424V19.0574H15.1694L15.1724 21.5073Z",
    fill: "white"
  }), /* @__PURE__ */ e("path", {
    d: "M6.84014 15.9396C6.7261 15.9396 6.61674 15.8943 6.5361 15.8137C6.45547 15.733 6.41016 15.6237 6.41016 15.5096V14.8487C6.41016 14.7922 6.4213 14.7364 6.44292 14.6843C6.46454 14.6322 6.49621 14.5848 6.53615 14.545C6.57609 14.5051 6.62351 14.4736 6.67567 14.4521C6.72783 14.4306 6.78372 14.4195 6.84014 14.4197C6.95392 14.4197 7.06303 14.4649 7.14348 14.5453C7.22392 14.6258 7.26913 14.7349 7.26913 14.8487V15.5096C7.26913 15.6235 7.22397 15.7327 7.14355 15.8133C7.06313 15.8939 6.95401 15.9394 6.84014 15.9396Z",
    fill: "#9747FF"
  }), /* @__PURE__ */ e("path", {
    d: "M6.84014 10.6099C6.78372 10.61 6.72783 10.599 6.67567 10.5775C6.62351 10.556 6.57609 10.5244 6.53615 10.4846C6.49621 10.4447 6.46454 10.3974 6.44292 10.3453C6.4213 10.2932 6.41016 10.2373 6.41016 10.1809V9.41192C6.41016 9.29788 6.45547 9.18852 6.5361 9.10788C6.61674 9.02724 6.7261 8.98193 6.84014 8.98193C6.95401 8.9822 7.06313 9.02763 7.14355 9.10823C7.22397 9.18884 7.26913 9.29806 7.26913 9.41192V10.1809C7.26913 10.2947 7.22392 10.4038 7.14348 10.4842C7.06303 10.5647 6.95392 10.6099 6.84014 10.6099Z",
    fill: "#9747FF"
  }), /* @__PURE__ */ e("path", {
    d: "M8.36476 15.5317C8.28922 15.5316 8.21503 15.5117 8.14959 15.474C8.08414 15.4362 8.02973 15.382 7.99178 15.3167L7.6718 14.7607C7.61487 14.662 7.59942 14.5448 7.62886 14.4348C7.65829 14.3247 7.73019 14.2308 7.82878 14.1737C7.92757 14.1169 8.04492 14.1016 8.15498 14.1312C8.26505 14.1609 8.35885 14.233 8.41576 14.3317L8.73675 14.8867C8.79359 14.9855 8.80888 15.1028 8.77925 15.2129C8.74962 15.323 8.6775 15.4168 8.57874 15.4737C8.5138 15.5116 8.43997 15.5316 8.36476 15.5317Z",
    fill: "#9747FF"
  }), /* @__PURE__ */ e("path", {
    d: "M5.70953 10.9317C5.63395 10.9318 5.55969 10.912 5.49421 10.8743C5.42873 10.8365 5.37434 10.7822 5.33655 10.7167L4.94357 10.0347C4.91528 9.98599 4.8969 9.93213 4.88947 9.87625C4.88205 9.82038 4.88572 9.76358 4.90031 9.70913C4.9149 9.65469 4.94009 9.60366 4.97445 9.55898C5.00882 9.5143 5.05169 9.47684 5.10057 9.44877C5.1494 9.42045 5.20333 9.40204 5.25928 9.39461C5.31524 9.38717 5.3721 9.39085 5.42663 9.40544C5.48116 9.42002 5.53227 9.44523 5.57704 9.4796C5.62181 9.51398 5.65937 9.55685 5.68754 9.60577L6.08051 10.2877C6.10883 10.3366 6.12725 10.3905 6.13468 10.4465C6.14212 10.5024 6.13843 10.5593 6.12385 10.6138C6.10926 10.6683 6.08408 10.7195 6.0497 10.7642C6.01533 10.809 5.97245 10.8465 5.92354 10.8747C5.85846 10.9122 5.78463 10.9319 5.70953 10.9317Z",
    fill: "#9747FF"
  }), /* @__PURE__ */ e("path", {
    d: "M9.48054 14.4146C9.40503 14.4145 9.3309 14.3944 9.26556 14.3566L8.70957 14.0356C8.61105 13.9787 8.53917 13.885 8.50973 13.7752C8.48029 13.6653 8.49572 13.5482 8.5526 13.4497C8.60951 13.3509 8.70331 13.2788 8.81338 13.2492C8.92344 13.2195 9.04076 13.2348 9.13956 13.2917L9.69554 13.6126C9.79413 13.6697 9.86603 13.7636 9.89546 13.8737C9.9249 13.9837 9.90947 14.1009 9.85254 14.1996C9.81499 14.2651 9.7608 14.3194 9.69547 14.3572C9.63014 14.3949 9.55599 14.4148 9.48054 14.4146Z",
    fill: "#9747FF"
  }), /* @__PURE__ */ e("path", {
    d: "M4.88001 11.7598C4.80484 11.7595 4.73108 11.7395 4.66603 11.7018L3.98405 11.3088C3.88546 11.2518 3.81357 11.1579 3.78413 11.0478C3.7547 10.9378 3.77015 10.8206 3.82707 10.7219C3.88399 10.6231 3.97779 10.551 4.08785 10.5214C4.19792 10.4917 4.31524 10.507 4.41404 10.5639L5.09601 10.9579C5.1946 11.0149 5.2665 11.1088 5.29593 11.2189C5.32537 11.3289 5.30994 11.4462 5.25302 11.5448C5.21522 11.6103 5.16084 11.6646 5.09536 11.7024C5.02987 11.7401 4.95559 11.7599 4.88001 11.7598Z",
    fill: "#9747FF"
  }), /* @__PURE__ */ e("path", {
    d: "M9.88882 12.8907H9.22686C9.1129 12.8904 9.00367 12.8451 8.92309 12.7645C8.84251 12.6839 8.79714 12.5747 8.79688 12.4607C8.79714 12.3469 8.84256 12.2378 8.92316 12.1573C9.00377 12.0769 9.113 12.0317 9.22686 12.0317H9.88882C10.0027 12.0317 10.1119 12.0769 10.1925 12.1573C10.2731 12.2378 10.3185 12.3469 10.3188 12.4607C10.3185 12.5747 10.2731 12.6839 10.1926 12.7645C10.112 12.8451 10.0028 12.8904 9.88882 12.8907Z",
    fill: "#9747FF"
  }), /* @__PURE__ */ e("path", {
    d: "M4.5583 12.8907H3.79034C3.67638 12.8904 3.56717 12.8451 3.48659 12.7645C3.40601 12.6839 3.36062 12.5747 3.36035 12.4607C3.36062 12.3469 3.40603 12.2378 3.48664 12.1573C3.56725 12.0769 3.67647 12.0317 3.79034 12.0317H4.5583C4.67207 12.0317 4.78118 12.0769 4.86163 12.1574C4.94208 12.2378 4.98729 12.347 4.98729 12.4607C4.98729 12.5746 4.94213 12.6838 4.8617 12.7644C4.78128 12.845 4.67216 12.8904 4.5583 12.8907Z",
    fill: "#9747FF"
  }), /* @__PURE__ */ e("path", {
    d: "M8.87748 11.7138C8.80189 11.7139 8.72761 11.6941 8.66213 11.6564C8.59665 11.6186 8.54226 11.5643 8.50447 11.4988C8.47635 11.45 8.45814 11.3961 8.45086 11.3402C8.44358 11.2843 8.44739 11.2275 8.46206 11.1731C8.47674 11.1187 8.50199 11.0677 8.53638 11.023C8.57077 10.9784 8.6136 10.941 8.66247 10.9129L9.26244 10.5639C9.36124 10.507 9.47858 10.4917 9.58865 10.5214C9.69872 10.551 9.79252 10.6231 9.84943 10.7219C9.90636 10.8206 9.92178 10.9378 9.89235 11.0478C9.86291 11.1579 9.79102 11.2518 9.69243 11.3088L9.09246 11.6568C9.02714 11.6946 8.95293 11.7143 8.87748 11.7138Z",
    fill: "#9747FF"
  }), /* @__PURE__ */ e("path", {
    d: "M4.19906 14.4146C4.12364 14.4145 4.04956 14.3946 3.98427 14.3569C3.91898 14.3192 3.86478 14.2649 3.82707 14.1996C3.77015 14.1009 3.7547 13.9837 3.78413 13.8736C3.81357 13.7636 3.88546 13.6697 3.98405 13.6126L4.62003 13.2456C4.71877 13.189 4.83592 13.1737 4.9459 13.2031C5.05587 13.2325 5.14973 13.3043 5.207 13.4026C5.26392 13.5013 5.27937 13.6186 5.24994 13.7286C5.2205 13.8387 5.14861 13.9325 5.05002 13.9896L4.41404 14.3566C4.34869 14.3944 4.27456 14.4144 4.19906 14.4146Z",
    fill: "#9747FF"
  }), /* @__PURE__ */ e("path", {
    d: "M6.8928 15.2787H6.82381C6.33235 15.2681 5.85285 15.1251 5.43586 14.8647C5.02364 14.6092 4.68573 14.2499 4.45589 13.8228C4.24108 13.4206 4.12846 12.9718 4.12793 12.5158C4.12793 12.4918 4.12793 12.4698 4.12793 12.4468C4.13976 11.9769 4.27121 11.5178 4.5099 11.1129C4.74827 10.7085 5.08547 10.3713 5.48986 10.1329C5.89648 9.89407 6.35733 9.76294 6.82879 9.75196H6.8918C7.34833 9.75139 7.79783 9.86445 8.19976 10.0809C8.62652 10.31 8.98551 10.6472 9.24071 11.0589C9.50159 11.4778 9.6446 11.9594 9.65468 12.4528C9.65468 12.4698 9.65468 12.4918 9.65468 12.5158C9.65477 12.9932 9.5311 13.4625 9.29571 13.8778C9.04963 14.3137 8.68938 14.6742 8.25373 14.9207C7.83861 15.1556 7.36975 15.2789 6.8928 15.2787ZM6.88179 10.6099H6.85479C6.52848 10.6165 6.20935 10.7067 5.92785 10.8719C5.64864 11.0363 5.41571 11.2689 5.25088 11.5479C5.08597 11.8281 4.99543 12.1458 4.98788 12.4708C4.98788 12.4888 4.98788 12.5018 4.98788 12.5148C4.98798 12.8287 5.06525 13.1378 5.21287 13.4148C5.37149 13.71 5.60496 13.9583 5.88984 14.1348C6.1783 14.3137 6.50944 14.4121 6.84881 14.4198H6.8928C7.2219 14.4201 7.54544 14.335 7.83175 14.1728C8.13241 14.0026 8.381 13.7537 8.55074 13.4528C8.71284 13.1668 8.79794 12.8436 8.79773 12.5148V12.4768C8.79033 12.1352 8.69195 11.8018 8.51273 11.5109C8.33604 11.227 8.08819 10.9943 7.79377 10.8359C7.51298 10.6868 7.19974 10.6091 6.88179 10.6099Z",
    fill: "#9747FF"
  }), /* @__PURE__ */ e("path", {
    d: "M7.9953 10.8867C7.92019 10.8869 7.84637 10.8672 7.78129 10.8297C7.73238 10.8015 7.6895 10.764 7.65512 10.7192C7.62075 10.6745 7.59557 10.6233 7.58098 10.5688C7.5664 10.5143 7.56271 10.4574 7.57014 10.4015C7.57758 10.3455 7.59599 10.2916 7.62431 10.2427L7.99129 9.60577C8.01946 9.55685 8.05701 9.51398 8.10179 9.4796C8.14656 9.44523 8.19766 9.42002 8.25219 9.40544C8.30672 9.39085 8.36359 9.38717 8.41955 9.39461C8.4755 9.40204 8.52943 9.42045 8.57825 9.44877C8.62712 9.47685 8.66998 9.5143 8.70437 9.55896C8.73876 9.60361 8.76401 9.65461 8.77869 9.70902C8.79336 9.76344 8.79717 9.82022 8.78989 9.87611C8.78261 9.932 8.76438 9.9859 8.73626 10.0347L8.36828 10.6717C8.33049 10.7372 8.2761 10.7915 8.21062 10.8293C8.14514 10.867 8.07088 10.8868 7.9953 10.8867Z",
    fill: "#9747FF"
  }), /* @__PURE__ */ e("path", {
    d: "M5.31561 15.5316C5.2404 15.5316 5.16657 15.5116 5.10163 15.4736C5.05271 15.4455 5.00984 15.4079 4.97546 15.3631C4.94108 15.3184 4.91588 15.2673 4.90129 15.2127C4.88671 15.1582 4.88302 15.1013 4.89045 15.0454C4.89789 14.9894 4.91631 14.9355 4.94463 14.8867L5.29161 14.2867C5.31978 14.2378 5.35733 14.1949 5.4021 14.1605C5.44687 14.1261 5.49798 14.1009 5.55251 14.0863C5.60704 14.0718 5.66391 14.0681 5.71986 14.0755C5.77582 14.083 5.82975 14.1014 5.87857 14.1297C5.97716 14.1868 6.04908 14.2806 6.07852 14.3907C6.10795 14.5007 6.0925 14.618 6.03557 14.7167L5.68859 15.3166C5.6508 15.3821 5.59644 15.4364 5.53096 15.4742C5.46547 15.5119 5.39119 15.5317 5.31561 15.5316Z",
    fill: "#9747FF"
  }), /* @__PURE__ */ e("path", {
    d: "M10.7991 10.0658C10.7296 10.0658 10.663 10.0382 10.6138 9.98904C10.5647 9.93991 10.5371 9.87328 10.5371 9.8038V9.40381C10.5371 9.36945 10.5439 9.33544 10.5571 9.30371C10.5703 9.27198 10.5896 9.24316 10.6139 9.21891C10.6383 9.19466 10.6671 9.17546 10.6989 9.1624C10.7307 9.14935 10.7648 9.14269 10.7991 9.14282C10.8683 9.14282 10.9347 9.17032 10.9836 9.21926C11.0326 9.26821 11.0601 9.33459 11.0601 9.40381V9.8038C11.0602 9.83815 11.0536 9.87219 11.0405 9.90397C11.0274 9.93575 11.0083 9.96464 10.984 9.98898C10.9598 10.0133 10.9309 10.0326 10.8992 10.0458C10.8675 10.059 10.8335 10.0658 10.7991 10.0658Z",
    fill: "#9747FF"
  }), /* @__PURE__ */ e("path", {
    d: "M10.7991 6.82299C10.7648 6.82312 10.7307 6.81647 10.6989 6.80341C10.6671 6.79036 10.6383 6.77116 10.6139 6.74691C10.5896 6.72266 10.5703 6.69384 10.5571 6.66211C10.5439 6.63038 10.5371 6.59636 10.5371 6.56201V6.09402C10.5371 6.02454 10.5647 5.95791 10.6138 5.90877C10.663 5.85964 10.7296 5.83203 10.7991 5.83203C10.8335 5.83203 10.8675 5.83882 10.8992 5.852C10.9309 5.86518 10.9598 5.88449 10.984 5.90883C11.0083 5.93318 11.0274 5.96206 11.0405 5.99384C11.0536 6.02562 11.0602 6.05966 11.0601 6.09402V6.56201C11.0601 6.63122 11.0326 6.69761 10.9836 6.74656C10.9347 6.7955 10.8683 6.82299 10.7991 6.82299Z",
    fill: "#9747FF"
  }), /* @__PURE__ */ e("path", {
    d: "M11.7273 9.81696C11.6813 9.81707 11.6362 9.80513 11.5964 9.78231C11.5565 9.7595 11.5234 9.72661 11.5003 9.68696L11.3053 9.34897C11.2711 9.28823 11.2624 9.21641 11.2812 9.14928C11.2999 9.08216 11.3446 9.02523 11.4052 8.99099C11.4353 8.97409 11.4683 8.96327 11.5025 8.95915C11.5367 8.95504 11.5713 8.9577 11.6045 8.96699C11.6376 8.97628 11.6686 8.992 11.6957 9.01328C11.7228 9.03455 11.7454 9.06096 11.7622 9.09098L11.9622 9.42897C11.9791 9.45897 11.99 9.492 11.9941 9.52618C11.9982 9.56037 11.9955 9.59503 11.9862 9.62818C11.9769 9.66134 11.9612 9.69234 11.9399 9.71941C11.9187 9.74648 11.8923 9.76909 11.8622 9.78595C11.8209 9.80844 11.7742 9.81917 11.7273 9.81696Z",
    fill: "#9747FF"
  }), /* @__PURE__ */ e("path", {
    d: "M10.1159 7.01906C10.0699 7.01897 10.0247 7.00684 9.98492 6.98385C9.94509 6.96087 9.91198 6.92784 9.8889 6.88807L9.64992 6.47308C9.63303 6.44308 9.62221 6.41004 9.61809 6.37586C9.61397 6.34168 9.61664 6.30702 9.62593 6.27386C9.63521 6.24071 9.65094 6.20971 9.67221 6.18264C9.69349 6.15557 9.7199 6.13296 9.74992 6.1161C9.77989 6.09908 9.81292 6.08815 9.84713 6.08397C9.88135 6.07978 9.91606 6.08241 9.94925 6.0917C9.98244 6.101 10.0134 6.11677 10.0405 6.13813C10.0676 6.15948 10.0901 6.18598 10.1069 6.2161L10.3459 6.63109C10.3628 6.66109 10.3736 6.69411 10.3777 6.7283C10.3818 6.76248 10.3792 6.79714 10.3699 6.8303C10.3606 6.86345 10.3449 6.89446 10.3236 6.92153C10.3023 6.9486 10.2759 6.97121 10.2459 6.98807C10.2059 7.00925 10.1612 7.01991 10.1159 7.01906Z",
    fill: "#9747FF"
  }), /* @__PURE__ */ e("path", {
    d: "M12.4064 9.13791C12.3604 9.13814 12.3152 9.12606 12.2754 9.10292L11.9374 8.90293C11.9074 8.88607 11.881 8.86345 11.8597 8.83638C11.8384 8.80931 11.8227 8.77831 11.8134 8.74516C11.8041 8.712 11.8015 8.67734 11.8056 8.64316C11.8097 8.60898 11.8205 8.57594 11.8374 8.54593C11.8542 8.51582 11.8767 8.48932 11.9038 8.46797C11.9309 8.44662 11.9619 8.43084 11.9951 8.42154C12.0283 8.41224 12.063 8.40961 12.0972 8.4138C12.1314 8.41799 12.1644 8.42891 12.1944 8.44594L12.5324 8.64593C12.5625 8.66269 12.589 8.68526 12.6104 8.71232C12.6317 8.73938 12.6475 8.7704 12.6568 8.80359C12.6661 8.83678 12.6687 8.87148 12.6645 8.9057C12.6604 8.93991 12.6494 8.97295 12.6324 9.00292C12.6101 9.0435 12.5775 9.07741 12.5377 9.10114C12.498 9.12487 12.4527 9.13756 12.4064 9.13791Z",
    fill: "#9747FF"
  }), /* @__PURE__ */ e("path", {
    d: "M9.60742 7.52182C9.56141 7.52204 9.5162 7.50996 9.47644 7.48683L9.06144 7.24783C9.03142 7.23097 9.00501 7.20837 8.98374 7.1813C8.96246 7.15423 8.94674 7.12322 8.93745 7.09006C8.92816 7.05691 8.9255 7.02225 8.92961 6.98807C8.93373 6.95388 8.94455 6.92086 8.96145 6.89085C8.99569 6.83016 9.05262 6.78552 9.11974 6.76677C9.18686 6.74803 9.2587 6.75669 9.31944 6.79086L9.73341 7.02985C9.79411 7.06409 9.83875 7.12102 9.8575 7.18814C9.87625 7.25527 9.86758 7.32709 9.83341 7.38783C9.81095 7.42815 9.77822 7.4618 9.73852 7.48534C9.69881 7.50888 9.65357 7.52146 9.60742 7.52182Z",
    fill: "#9747FF"
  }), /* @__PURE__ */ e("path", {
    d: "M12.6541 8.21097H12.2541C12.2198 8.21097 12.1858 8.20419 12.154 8.19101C12.1223 8.17783 12.0935 8.15852 12.0693 8.13418C12.045 8.10983 12.0258 8.08094 12.0127 8.04916C11.9997 8.01738 11.993 7.98334 11.9932 7.94898C11.9932 7.87976 12.0207 7.81337 12.0696 7.76443C12.1185 7.71548 12.1849 7.68799 12.2541 7.68799H12.6541C12.6885 7.68786 12.7225 7.69451 12.7543 7.70757C12.7861 7.72063 12.815 7.73983 12.8393 7.76407C12.8637 7.78832 12.883 7.81714 12.8962 7.84887C12.9093 7.8806 12.9161 7.91462 12.9161 7.94898C12.9161 8.01846 12.8885 8.0851 12.8394 8.13424C12.7903 8.18337 12.7236 8.21097 12.6541 8.21097Z",
    fill: "#9747FF"
  }), /* @__PURE__ */ e("path", {
    d: "M9.4155 8.21096H8.94753C8.91317 8.21096 8.87914 8.20419 8.84741 8.19101C8.81568 8.17783 8.78687 8.15851 8.76262 8.13417C8.73837 8.10983 8.71916 8.08094 8.7061 8.04915C8.69305 8.01737 8.68639 7.98333 8.68653 7.94898C8.68653 7.9147 8.69328 7.88077 8.7064 7.8491C8.71951 7.81744 8.73873 7.78866 8.76296 7.76443C8.7872 7.74019 8.81599 7.72098 8.84765 7.70786C8.87932 7.69474 8.91325 7.68799 8.94753 7.68799H9.4155C9.48472 7.68799 9.55109 7.71548 9.60004 7.76443C9.64898 7.81337 9.6765 7.87976 9.6765 7.94898C9.67663 7.98333 9.66998 8.01737 9.65692 8.04915C9.64386 8.08094 9.62465 8.10983 9.6004 8.13417C9.57616 8.15851 9.54735 8.17783 9.51562 8.19101C9.48389 8.20419 9.44986 8.21096 9.4155 8.21096Z",
    fill: "#9747FF"
  }), /* @__PURE__ */ e("path", {
    d: "M12.039 7.50003C11.993 7.49995 11.9479 7.48781 11.9081 7.46483C11.8682 7.44184 11.8351 7.40881 11.812 7.36903C11.7951 7.33903 11.7843 7.306 11.7802 7.27182C11.7761 7.23764 11.7787 7.20298 11.788 7.16982C11.7973 7.13667 11.813 7.10566 11.8343 7.07859C11.8556 7.05152 11.882 7.02891 11.912 7.01205L12.279 6.80006C12.309 6.78317 12.3421 6.77236 12.3762 6.76824C12.4104 6.76412 12.4451 6.76678 12.4782 6.77606C12.5114 6.78535 12.5424 6.80109 12.5695 6.82236C12.5965 6.84364 12.6191 6.87004 12.636 6.90006C12.653 6.93003 12.664 6.96307 12.6682 6.99728C12.6723 7.03149 12.6697 7.0662 12.6604 7.09939C12.6511 7.13258 12.6353 7.1636 12.614 7.19066C12.5926 7.21772 12.5661 7.24027 12.536 7.25704L12.169 7.46903C12.129 7.49021 12.0843 7.50089 12.039 7.50003Z",
    fill: "#9747FF"
  }), /* @__PURE__ */ e("path", {
    d: "M9.19232 9.13786C9.14644 9.13791 9.10138 9.12581 9.06169 9.10281C9.022 9.0798 8.98909 9.0467 8.96633 9.00686C8.94896 8.97723 8.93765 8.94446 8.93303 8.91042C8.92841 8.87638 8.93057 8.84176 8.9394 8.80857C8.94824 8.77538 8.96357 8.74427 8.98449 8.71703C9.00542 8.6898 9.03152 8.66697 9.06132 8.64988L9.44832 8.4269C9.47829 8.40987 9.51132 8.39894 9.54553 8.39476C9.57974 8.39057 9.61446 8.3932 9.64765 8.40249C9.68084 8.41179 9.71185 8.42757 9.73891 8.44892C9.76596 8.47027 9.78852 8.49677 9.80528 8.52689C9.82218 8.55689 9.833 8.58993 9.83712 8.62412C9.84124 8.6583 9.83857 8.69296 9.82928 8.72611C9.82 8.75927 9.80427 8.79026 9.783 8.81733C9.76172 8.8444 9.73531 8.86701 9.70529 8.88387L9.31932 9.10786C9.28018 9.12837 9.2365 9.13869 9.19232 9.13786Z",
    fill: "#9747FF"
  }), /* @__PURE__ */ e("path", {
    d: "M10.8314 9.66386H10.7884C10.4899 9.65736 10.1986 9.57029 9.94548 9.41187C9.69321 9.25698 9.48626 9.03831 9.3455 8.7779C9.21396 8.53178 9.14526 8.25699 9.14551 7.97793V7.93493C9.15278 7.64916 9.23297 7.37001 9.37848 7.12396C9.52402 6.87606 9.73056 6.66952 9.97846 6.52399C10.226 6.3787 10.5065 6.29887 10.7934 6.292H10.8314C11.1106 6.29113 11.3855 6.35986 11.6314 6.49199C11.8918 6.63279 12.1105 6.83973 12.2654 7.09197C12.4234 7.34713 12.5104 7.63988 12.5174 7.93993V7.97893C12.5176 8.26913 12.4425 8.55441 12.2994 8.80689C12.1494 9.07236 11.9299 9.29191 11.6644 9.44187C11.4108 9.58714 11.1237 9.66366 10.8314 9.66386ZM10.8244 6.82297H10.8094C10.6105 6.8263 10.4159 6.88107 10.2445 6.98196C10.0744 7.08207 9.93258 7.22386 9.83247 7.39394C9.73226 7.56427 9.67721 7.75737 9.67249 7.95493V7.98192C9.67239 8.17307 9.71943 8.3613 9.80947 8.52991C9.90601 8.70892 10.0477 8.85957 10.2205 8.96689C10.3962 9.07585 10.5977 9.13591 10.8044 9.14088H10.8314C11.0315 9.14101 11.2282 9.08933 11.4024 8.99089C11.5854 8.88733 11.7368 8.73593 11.8404 8.5529C11.9386 8.37861 11.9902 8.18197 11.9904 7.98192V7.95792C11.9859 7.75037 11.9262 7.54777 11.8174 7.37095C11.7097 7.19812 11.5587 7.05644 11.3794 6.95997C11.2086 6.86908 11.0179 6.822 10.8244 6.82297Z",
    fill: "#9747FF"
  }), /* @__PURE__ */ e("path", {
    d: "M11.502 6.99104C11.4563 6.99113 11.4114 6.97905 11.372 6.95604C11.342 6.93918 11.3156 6.91656 11.2943 6.88949C11.273 6.86242 11.2573 6.83143 11.248 6.79827C11.2387 6.76512 11.236 6.73046 11.2402 6.69628C11.2443 6.66209 11.2551 6.62905 11.272 6.59905L11.496 6.21207C11.5128 6.18205 11.5354 6.15565 11.5625 6.13437C11.5896 6.1131 11.6206 6.09736 11.6537 6.08808C11.6869 6.07879 11.7216 6.07613 11.7557 6.08025C11.7899 6.08437 11.823 6.09518 11.853 6.11207C11.883 6.12893 11.9094 6.15154 11.9307 6.17861C11.9519 6.20568 11.9677 6.23669 11.9769 6.26984C11.9862 6.303 11.9889 6.33766 11.9848 6.37184C11.9807 6.40602 11.9698 6.43905 11.9529 6.46905L11.729 6.85704C11.7065 6.89758 11.6736 6.93137 11.6337 6.95493C11.5938 6.97849 11.5483 6.99096 11.502 6.99104Z",
    fill: "#9747FF"
  }), /* @__PURE__ */ e("path", {
    d: "M9.87113 9.81672C9.82546 9.81682 9.78058 9.80473 9.74113 9.78172C9.71111 9.76486 9.6847 9.74225 9.66342 9.71518C9.64215 9.68811 9.62642 9.65711 9.61714 9.62396C9.60785 9.5908 9.60518 9.55615 9.6093 9.52196C9.61342 9.48778 9.62424 9.45474 9.64114 9.42474L9.85214 9.05875C9.869 9.02873 9.89159 9.00233 9.91866 8.98105C9.94573 8.95978 9.97674 8.94404 10.0099 8.93475C10.043 8.92547 10.0777 8.92281 10.1119 8.92693C10.1461 8.93105 10.1791 8.94186 10.2091 8.95875C10.2391 8.97561 10.2655 8.99823 10.2868 9.0253C10.3081 9.05237 10.3238 9.08337 10.3331 9.11652C10.3424 9.14968 10.3451 9.18434 10.3409 9.21852C10.3368 9.2527 10.326 9.28574 10.3091 9.31574L10.0981 9.68272C10.0753 9.72299 10.0424 9.75656 10.0025 9.78008C9.96271 9.8036 9.91739 9.81624 9.87113 9.81672Z",
    fill: "#9747FF"
  })]
}), j9 = () => /* @__PURE__ */ n("svg", {
  id: "fileTypeId",
  width: "20",
  height: "24",
  viewBox: "0 0 20 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  children: [/* @__PURE__ */ e("g", {
    opacity: "0.3",
    children: /* @__PURE__ */ e("path", {
      opacity: "0.3",
      d: "M13.9654 4.92504C13.4188 4.92451 12.8946 4.70709 12.508 4.32052C12.1215 3.93395 11.9041 3.4098 11.9035 2.86311V0.000244141H2.68991C1.97624 0.000244141 1.29181 0.283756 0.787167 0.788395C0.282527 1.29303 -0.000976562 1.97746 -0.000976562 2.69112V18.9124C8.32301e-05 19.6254 0.284055 20.3088 0.78858 20.8126C1.2931 21.3164 1.97694 21.5993 2.68991 21.5993H13.7495C14.1029 21.5995 14.4529 21.53 14.7795 21.3948C15.1061 21.2596 15.4029 21.0614 15.6528 20.8116C15.9028 20.5617 16.1011 20.265 16.2364 19.9385C16.3717 19.6119 16.4413 19.2619 16.4413 18.9085V4.92104L13.9654 4.92504Z",
      fill: "#00C650"
    })
  }), /* @__PURE__ */ e("path", {
    d: "M16.4411 4.92504H13.9652C13.4185 4.92451 12.8944 4.70709 12.5078 4.32052C12.1213 3.93395 11.9038 3.4098 11.9033 2.86311V0.000244141L16.4411 4.92504Z",
    fill: "#00C650"
  }), /* @__PURE__ */ e("path", {
    d: "M18.3926 17.0605H5.88914C5.0022 17.0605 4.2832 17.7795 4.2832 18.6665V22.3943C4.2832 23.2813 5.0022 24.0003 5.88914 24.0003H18.3926C19.2795 24.0003 19.9986 23.2813 19.9986 22.3943V18.6665C19.9986 17.7795 19.2795 17.0605 18.3926 17.0605Z",
    fill: "#00C650"
  }), /* @__PURE__ */ e("path", {
    d: "M8.0478 21.3113V22.0362H7.29883V21.3113H8.0478Z",
    fill: "white"
  }), /* @__PURE__ */ e("path", {
    d: "M10.7381 19.3134C10.9912 19.5182 11.1631 19.8064 11.2231 20.1264H10.4571C10.406 19.9936 10.3157 19.8795 10.1981 19.7994C10.0745 19.7183 9.929 19.6768 9.78115 19.6804C9.68367 19.6775 9.58681 19.6969 9.49805 19.7373C9.40928 19.7777 9.33098 19.8379 9.26917 19.9134C9.13176 20.091 9.06258 20.3121 9.07418 20.5364C9.0625 20.7598 9.13173 20.9799 9.26917 21.1563C9.33123 21.2314 9.40963 21.2912 9.49837 21.3312C9.58712 21.3712 9.68384 21.3904 9.78115 21.3873C9.929 21.3909 10.0745 21.3494 10.1981 21.2683C10.3156 21.1898 10.4066 21.0776 10.4591 20.9463H11.2251C11.1638 21.2653 10.9921 21.5524 10.7401 21.7573C10.4697 21.9652 10.1349 22.0713 9.79415 22.0573C9.52578 22.0632 9.2608 21.9965 9.02718 21.8643C8.80829 21.7377 8.63106 21.5501 8.5172 21.3243C8.39395 21.0792 8.33218 20.8077 8.33721 20.5334C8.33206 20.2587 8.39383 19.9869 8.5172 19.7414C8.63106 19.5156 8.80829 19.328 9.02718 19.2014C9.2608 19.0692 9.52578 19.0025 9.79415 19.0084C10.1348 18.9967 10.4687 19.1046 10.7381 19.3134V19.3134Z",
    fill: "white"
  }), /* @__PURE__ */ e("path", {
    d: "M13.6617 21.6293C13.5755 21.7669 13.4521 21.8771 13.3058 21.9473C13.1276 22.0307 12.9324 22.0711 12.7358 22.0653C12.4397 22.0773 12.1479 21.9912 11.9058 21.8203C11.7989 21.7399 11.7114 21.6366 11.6498 21.5178C11.5881 21.3991 11.554 21.2681 11.5498 21.1344H12.3208C12.3261 21.2351 12.3694 21.3301 12.4418 21.4003C12.5134 21.4674 12.6087 21.5034 12.7068 21.5003C12.7872 21.5044 12.866 21.4772 12.9268 21.4243C12.9531 21.3983 12.9738 21.3671 12.9876 21.3327C13.0013 21.2983 13.0079 21.2614 13.0068 21.2243C13.0077 21.1893 13.0016 21.1545 12.9889 21.1219C12.9762 21.0893 12.9571 21.0595 12.9328 21.0344C12.8802 20.981 12.8177 20.9385 12.7488 20.9094C12.6748 20.8764 12.5738 20.8373 12.4438 20.7923C12.2851 20.7401 12.1301 20.6773 11.9798 20.6044C11.8563 20.5405 11.7502 20.4475 11.6708 20.3334C11.5795 20.1949 11.5343 20.0311 11.5418 19.8654C11.5377 19.7011 11.5849 19.5396 11.6768 19.4034C11.7713 19.2703 11.9012 19.1664 12.0518 19.1034C12.226 19.0329 12.4129 18.9989 12.6008 19.0034C12.8849 18.9884 13.1654 19.0721 13.3947 19.2404C13.4927 19.3198 13.5728 19.4188 13.63 19.5311C13.6872 19.6435 13.7201 19.7665 13.7267 19.8924H12.9438C12.9341 19.8044 12.8962 19.722 12.8358 19.6574C12.8045 19.6278 12.7676 19.6048 12.7272 19.5899C12.6868 19.5749 12.6438 19.5683 12.6008 19.5704C12.526 19.5666 12.4526 19.5908 12.3948 19.6384C12.3678 19.6638 12.3467 19.695 12.3332 19.7296C12.3197 19.7642 12.3141 19.8013 12.3168 19.8384C12.3159 19.8715 12.3217 19.9045 12.3337 19.9354C12.3457 19.9663 12.3638 19.9945 12.3868 20.0184C12.4364 20.0706 12.4963 20.1118 12.5628 20.1394C12.6328 20.1704 12.7348 20.2104 12.8628 20.2584C13.0244 20.3104 13.1818 20.3746 13.3338 20.4504C13.4583 20.5174 13.5655 20.6126 13.6467 20.7284C13.7395 20.8685 13.7853 21.0345 13.7777 21.2023C13.7785 21.3525 13.7384 21.5001 13.6617 21.6293V21.6293Z",
    fill: "white"
  }), /* @__PURE__ */ e("path", {
    d: "M14.7427 19.0425L15.4757 21.2954L16.2087 19.0425H16.9836L15.9417 22.0364H15.0057L13.9678 19.0425H14.7427Z",
    fill: "white"
  }), /* @__PURE__ */ e("path", {
    d: "M11.888 15.0796H4.5533C3.91832 15.0796 3.40234 14.4476 3.40234 13.6696V8.35084C3.40234 7.57388 3.91832 6.94189 4.5533 6.94189H11.888C12.523 6.94189 13.0389 7.57388 13.0389 8.35084V13.6696C13.0389 14.4476 12.523 15.0796 11.888 15.0796ZM4.5533 7.66188C4.24331 7.66188 3.99032 7.97086 3.99032 8.35084V13.6696C3.99032 14.0496 4.24331 14.3586 4.5533 14.3586H11.888C12.198 14.3586 12.45 14.0496 12.45 13.6696V8.35084C12.45 7.97086 12.198 7.66188 11.888 7.66188H4.5533Z",
    fill: "#00C650"
  }), /* @__PURE__ */ e("path", {
    d: "M12.7449 11.8767H3.69629V12.5977H12.7449V11.8767Z",
    fill: "#00C650"
  }), /* @__PURE__ */ e("path", {
    d: "M12.7449 9.40479H3.69629V10.1258H12.7449V9.40479Z",
    fill: "#00C650"
  }), /* @__PURE__ */ e("path", {
    d: "M10.428 7.302H9.70703V14.7187H10.428V7.302Z",
    fill: "#00C650"
  }), /* @__PURE__ */ e("path", {
    d: "M6.73367 7.302H6.0127V14.7187H6.73367V7.302Z",
    fill: "#00C650"
  })]
}), D9 = () => /* @__PURE__ */ n("svg", {
  id: "fileTypeId",
  width: "21",
  height: "24",
  viewBox: "0 0 21 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  children: [/* @__PURE__ */ e("g", {
    opacity: "0.3",
    children: /* @__PURE__ */ e("path", {
      opacity: "0.3",
      d: "M14.9641 4.92424C14.4174 4.92371 13.8932 4.7063 13.5066 4.31971C13.12 3.93313 12.9026 3.40896 12.9021 2.86224V0.000244141H3.68807C3.3346 0.000244116 2.98459 0.0698778 2.65804 0.205176C2.33149 0.340474 2.03479 0.538781 1.78489 0.78877C1.535 1.03876 1.3368 1.33553 1.20162 1.66213C1.06645 1.98874 0.996939 2.33878 0.99707 2.69225V18.9132C0.99813 19.6262 1.28211 20.3097 1.78666 20.8135C2.2912 21.3173 2.97506 21.6002 3.68807 21.6002H14.7491C15.4622 21.6002 16.1463 21.3171 16.6508 20.8131C17.1554 20.3091 17.4393 19.6254 17.4401 18.9122V4.92424H14.9641Z",
      fill: "#00C650"
    })
  }), /* @__PURE__ */ e("path", {
    d: "M17.4403 4.92424H14.9643C14.4176 4.92371 13.8935 4.7063 13.5069 4.31971C13.1203 3.93313 12.9029 3.40896 12.9023 2.86224V0.000244141L17.4403 4.92424Z",
    fill: "#00C650"
  }), /* @__PURE__ */ e("path", {
    d: "M19.3913 17.0603H6.88725C6.00028 17.0603 5.28125 17.7793 5.28125 18.6663V22.3943C5.28125 23.2813 6.00028 24.0003 6.88725 24.0003H19.3913C20.2782 24.0003 20.9973 23.2813 20.9973 22.3943V18.6663C20.9973 17.7793 20.2782 17.0603 19.3913 17.0603Z",
    fill: "#00C650"
  }), /* @__PURE__ */ e("path", {
    d: "M8.90535 21.3372V22.0652H8.15234V21.3372H8.90535Z",
    fill: "white"
  }), /* @__PURE__ */ e("path", {
    d: "M11.6079 19.3302C11.8616 19.536 12.0342 19.8251 12.0949 20.1462H11.3249C11.273 20.013 11.1815 19.8989 11.0629 19.8192C10.9374 19.7371 10.7897 19.6956 10.6399 19.7002C10.542 19.697 10.4447 19.7165 10.3555 19.7571C10.2664 19.7977 10.1878 19.8583 10.1259 19.9342C9.9862 20.1117 9.91519 20.3336 9.92586 20.5592C9.91486 20.7842 9.98593 21.0056 10.1259 21.1822C10.188 21.2576 10.2667 21.3178 10.3558 21.3581C10.445 21.3983 10.5421 21.4175 10.6399 21.4142C10.7884 21.418 10.9345 21.3764 11.0589 21.2952C11.1764 21.2159 11.2676 21.1035 11.3209 20.9722H12.0909C12.0289 21.2922 11.8566 21.5803 11.6039 21.7862C11.3318 21.9945 10.9952 22.1006 10.6529 22.0862C10.3835 22.0922 10.1175 22.0255 9.88286 21.8932C9.66312 21.7657 9.48522 21.577 9.37086 21.3502C9.24591 21.1024 9.18375 20.8276 9.18986 20.5502C9.18457 20.2744 9.24671 20.0015 9.37086 19.7552C9.48522 19.5283 9.66312 19.3397 9.88286 19.2122C10.1175 19.0799 10.3835 19.0132 10.6529 19.0192C10.9979 19.0073 11.336 19.1175 11.6079 19.3302Z",
    fill: "white"
  }), /* @__PURE__ */ e("path", {
    d: "M14.0469 22.0651L13.3959 20.9291H13.2299V22.0651H12.5029V19.0581H13.7449C13.9517 19.0524 14.1571 19.0945 14.3449 19.1811C14.4994 19.2542 14.6283 19.3719 14.7149 19.5191C14.7987 19.669 14.8411 19.8385 14.8379 20.0101C14.8436 20.2113 14.7801 20.4083 14.6579 20.5681C14.5235 20.7296 14.3379 20.8404 14.1319 20.8821L14.8469 22.0651H14.0469ZM13.2299 20.4311H13.6809C13.7961 20.4393 13.91 20.4036 13.9999 20.3311C14.0354 20.2936 14.0627 20.249 14.0799 20.2002C14.0971 20.1515 14.104 20.0997 14.0999 20.0481C14.1034 19.9969 14.0964 19.9456 14.0792 19.8972C14.0619 19.8489 14.035 19.8046 13.9999 19.7671C13.9116 19.6933 13.7977 19.6573 13.6829 19.6671H13.2299V20.4311Z",
    fill: "white"
  }), /* @__PURE__ */ e("path", {
    d: "M17.724 21.3392C17.5991 21.5668 17.4099 21.7525 17.18 21.8732C16.9218 22.0062 16.6344 22.0722 16.344 22.0652H15.208V19.0582H16.34C16.6305 19.0507 16.9183 19.1149 17.178 19.2452C17.4067 19.3636 17.5953 19.5469 17.72 19.7722C17.8493 20.0126 17.9144 20.2823 17.909 20.5552C17.9155 20.8281 17.8518 21.0981 17.724 21.3392ZM16.941 21.1882C17.0225 21.1052 17.0857 21.0059 17.1263 20.8968C17.167 20.7878 17.1843 20.6714 17.177 20.5552C17.1842 20.4389 17.1669 20.3224 17.1263 20.2132C17.0856 20.104 17.0225 20.0045 16.941 19.9212C16.7589 19.7622 16.5214 19.6813 16.28 19.6962H15.94V21.4142H16.285C16.5245 21.4276 16.7597 21.3464 16.94 21.1882H16.941Z",
    fill: "white"
  }), /* @__PURE__ */ e("path", {
    d: "M9.19222 6.2002C9.19222 6.2002 11.5402 6.70019 9.36522 14.0492H9.06522C9.06522 14.0492 6.97522 7.2802 9.19222 6.2002Z",
    fill: "#00C650"
  }), /* @__PURE__ */ e("path", {
    d: "M9.71074 6.27222C9.71074 6.27222 12.9947 7.51123 9.55273 14.0062C9.55273 14.0062 14.7517 7.66922 9.71074 6.27222Z",
    fill: "#00C650"
  }), /* @__PURE__ */ e("path", {
    d: "M11.0791 6.71924C11.0791 6.71924 14.2331 8.28824 9.95605 13.7612C9.95605 13.7612 14.8671 8.47624 11.0791 6.71924Z",
    fill: "#00C650"
  }), /* @__PURE__ */ e("path", {
    d: "M8.72559 6.27222C8.72559 6.27222 5.44159 7.51123 8.88359 14.0062C8.88359 14.0062 3.68459 7.66922 8.72559 6.27222Z",
    fill: "#00C650"
  }), /* @__PURE__ */ e("path", {
    d: "M7.35855 6.71924C7.35855 6.71924 4.20455 8.28824 8.48155 13.7612C8.48155 13.7612 3.57055 8.47624 7.35855 6.71924Z",
    fill: "#00C650"
  }), /* @__PURE__ */ e("path", {
    d: "M9.65859 15.4032H8.81259L8.55859 14.5962H9.91259L9.65859 15.4032Z",
    fill: "#00C650"
  })]
}), P9 = () => /* @__PURE__ */ n("svg", {
  id: "fileTypeId",
  width: "20",
  height: "24",
  viewBox: "0 0 20 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  children: [/* @__PURE__ */ e("g", {
    opacity: "0.3",
    children: /* @__PURE__ */ e("path", {
      opacity: "0.3",
      d: "M13.967 4.92424C13.4201 4.92398 12.8957 4.70668 12.5089 4.32007C12.1221 3.93345 11.9045 3.40913 11.904 2.86224V0.000244141H2.69099C2.33752 0.000244116 1.98751 0.0698778 1.66096 0.205176C1.33441 0.340474 1.03771 0.538781 0.787818 0.78877C0.537922 1.03876 0.339718 1.33553 0.204541 1.66213C0.0693646 1.98874 -0.000131167 2.33878 1.85854e-07 2.69225V18.9132C-0.000131167 19.2667 0.0693646 19.6167 0.204541 19.9433C0.339718 20.27 0.537922 20.5667 0.787818 20.8167C1.03771 21.0667 1.33441 21.265 1.66096 21.4003C1.98751 21.5356 2.33752 21.6052 2.69099 21.6052H13.751C14.1045 21.6052 14.4545 21.5356 14.781 21.4003C15.1076 21.265 15.4043 21.0667 15.6542 20.8167C15.9041 20.5667 16.1022 20.27 16.2374 19.9433C16.3726 19.6167 16.4421 19.2667 16.442 18.9132V4.92524L13.967 4.92424Z",
      fill: "#9747FF"
    })
  }), /* @__PURE__ */ e("path", {
    d: "M16.4423 4.92424H13.9673C13.4204 4.92398 12.896 4.70668 12.5092 4.32007C12.1224 3.93345 11.9048 3.40913 11.9043 2.86224V0.000244141L16.4423 4.92424Z",
    fill: "#9747FF"
  }), /* @__PURE__ */ e("path", {
    d: "M18.3942 17.0603H5.89019C5.00322 17.0603 4.28418 17.7793 4.28418 18.6663V22.3943C4.28418 23.2813 5.00322 24.0003 5.89019 24.0003H18.3942C19.2812 24.0003 20.0002 23.2813 20.0002 22.3943V18.6663C20.0002 17.7793 19.2812 17.0603 18.3942 17.0603Z",
    fill: "#9747FF"
  }), /* @__PURE__ */ e("path", {
    d: "M7.86042 21.3372V22.0652H7.10742V21.3372H7.86042Z",
    fill: "white"
  }), /* @__PURE__ */ e("path", {
    d: "M10.4743 20.7802C10.5797 20.9116 10.636 21.0757 10.6333 21.2442C10.6385 21.3571 10.6181 21.4697 10.5736 21.5737C10.5291 21.6776 10.4616 21.7701 10.3763 21.8442C10.2043 21.9882 9.95828 22.0612 9.63828 22.0612H8.23828V19.0542H9.60327C9.90927 19.0542 10.1459 19.1209 10.3133 19.2542C10.3969 19.3228 10.4633 19.4102 10.5069 19.5092C10.5505 19.6082 10.5701 19.7161 10.5643 19.8242C10.5706 19.9874 10.5197 20.1476 10.4203 20.2772C10.3251 20.3974 10.1911 20.4808 10.0413 20.5132C10.2119 20.55 10.3648 20.6442 10.4743 20.7802ZM8.96628 20.2872H9.44229C9.69495 20.2872 9.82129 20.1792 9.82129 19.9632C9.82129 19.7472 9.69228 19.6395 9.43428 19.6402H8.96628V20.2872ZM9.88928 21.1422C9.89162 21.0948 9.88331 21.0475 9.86497 21.0037C9.84662 20.9599 9.81871 20.9208 9.78328 20.8892C9.69755 20.8235 9.59108 20.7909 9.48328 20.7972H8.96829V21.4732H9.48728C9.75528 21.4732 9.88928 21.3629 9.88928 21.1422Z",
    fill: "white"
  }), /* @__PURE__ */ e("path", {
    d: "M14.3967 19.0793V22.0653H13.6697V20.2003L13.0237 22.0683H12.3937L11.7427 20.1963V22.0683H11.0137V19.0823H11.9027L12.7147 21.1623L13.5147 19.0823L14.3967 19.0793Z",
    fill: "white"
  }), /* @__PURE__ */ e("path", {
    d: "M15.6274 21.0104V22.0654H14.8994V19.0583H16.0774C16.4354 19.0583 16.7077 19.1467 16.8944 19.3234C16.989 19.4164 17.0629 19.5283 17.1114 19.6519C17.1598 19.7754 17.1816 19.9078 17.1754 20.0404C17.1786 20.2153 17.1351 20.3878 17.0494 20.5404C16.9629 20.6899 16.8332 20.8097 16.6774 20.8844C16.4903 20.9736 16.2846 21.0168 16.0774 21.0104H15.6274ZM16.4354 20.0404C16.4354 19.7737 16.2894 19.6404 15.9974 19.6404H15.6274V20.4234H15.9974C16.2894 20.426 16.4354 20.2984 16.4354 20.0404Z",
    fill: "white"
  }), /* @__PURE__ */ e("path", {
    d: "M10.4298 14.6412H6.01382C5.58141 14.6406 5.16687 14.4686 4.86111 14.1629C4.55535 13.8571 4.38334 13.4426 4.38281 13.0102V8.59316C4.38334 8.16076 4.55535 7.74621 4.86111 7.44045C5.16687 7.1347 5.58141 6.96269 6.01382 6.96216H10.4308C10.8631 6.96269 11.2776 7.13473 11.5832 7.44052C11.8888 7.7463 12.0606 8.16085 12.0608 8.59316V13.0102C12.0606 13.4426 11.8886 13.8573 11.5828 14.1632C11.277 14.469 10.8623 14.6409 10.4298 14.6412ZM6.01382 7.68315C5.77255 7.68342 5.54126 7.77939 5.37065 7.94999C5.20005 8.12059 5.10407 8.3519 5.10381 8.59316V13.0102C5.10407 13.2514 5.20005 13.4827 5.37065 13.6533C5.54126 13.8239 5.77255 13.9199 6.01382 13.9202H10.4308C10.6719 13.9196 10.903 13.8236 11.0733 13.653C11.2437 13.4824 11.3396 13.2512 11.3398 13.0102V8.59316C11.3396 8.35207 11.2437 8.12091 11.0733 7.95034C10.903 7.77977 10.6719 7.68368 10.4308 7.68315H6.01382Z",
    fill: "#9747FF"
  }), /* @__PURE__ */ e("path", {
    d: "M11.7002 12.1701V13.0101C11.6999 13.3469 11.566 13.6698 11.3279 13.9079C11.0898 14.146 10.7669 14.2799 10.4302 14.2802H6.01416C5.67724 14.2802 5.3541 14.1464 5.11577 13.9082C4.87744 13.6701 4.74343 13.3471 4.74316 13.0101V11.6001C5.45116 11.4481 6.52816 11.4001 7.83516 11.9221L8.64517 11.1501L9.19717 12.5501C9.19717 12.5501 9.34517 12.0351 9.82317 12.1081C10.3012 12.1811 11.0752 12.4401 11.4062 12.2191C11.4951 12.1679 11.5995 12.1505 11.7002 12.1701Z",
    fill: "#9747FF"
  }), /* @__PURE__ */ e("path", {
    d: "M10.1531 9.49518C10.4243 9.49518 10.6441 9.27536 10.6441 9.00419C10.6441 8.73302 10.4243 8.51318 10.1531 8.51318C9.88193 8.51318 9.66211 8.73302 9.66211 9.00419C9.66211 9.27536 9.88193 9.49518 10.1531 9.49518Z",
    fill: "#9747FF"
  })]
}), z9 = () => /* @__PURE__ */ n("svg", {
  id: "fileTypeId",
  width: "21",
  height: "24",
  viewBox: "0 0 21 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  children: [/* @__PURE__ */ e("g", {
    opacity: "0.3",
    children: /* @__PURE__ */ e("path", {
      opacity: "0.3",
      d: "M13.9729 4.92424C13.4261 4.92371 12.9019 4.70633 12.5151 4.31978C12.1284 3.93322 11.9107 3.40905 11.9099 2.86224V0.000244141H2.69294C1.97925 0.000244141 1.29478 0.283761 0.790124 0.788422C0.285464 1.29308 0.00195312 1.97754 0.00195312 2.69124V18.9132C0.00274834 19.6263 0.286645 20.3099 0.791247 20.8138C1.29585 21.3176 1.97986 21.6005 2.69294 21.6002H13.753C14.4667 21.6002 15.1511 21.3167 15.6558 20.8121C16.1604 20.3074 16.4439 19.6229 16.4439 18.9092V4.92424H13.9729Z",
      fill: "#FF9908"
    })
  }), /* @__PURE__ */ e("path", {
    d: "M16.4442 4.92424H13.9732C13.4264 4.92371 12.9021 4.70633 12.5153 4.31978C12.1286 3.93322 11.911 3.40905 11.9102 2.86224V0.000244141L16.4442 4.92424Z",
    fill: "#FF9908"
  }), /* @__PURE__ */ e("path", {
    d: "M18.3961 17.0603H5.89213C5.00516 17.0603 4.28613 17.7793 4.28613 18.6663V22.3943C4.28613 23.2813 5.00516 24.0003 5.89213 24.0003H18.3961C19.2831 24.0003 20.0021 23.2813 20.0021 22.3943V18.6663C20.0021 17.7793 19.2831 17.0603 18.3961 17.0603Z",
    fill: "#FF9908"
  }), /* @__PURE__ */ e("path", {
    d: "M8.77253 21.3372V22.0642H8.01953V21.3372H8.77253Z",
    fill: "white"
  }), /* @__PURE__ */ e("path", {
    d: "M11.0175 21.5163H9.8895L9.7025 22.0643H8.9375L10.0375 19.0793H10.8725L11.9725 22.0643H11.1985L11.0175 21.5163ZM10.8295 20.9633L10.4555 19.8573L10.0775 20.9633H10.8295Z",
    fill: "white"
  }), /* @__PURE__ */ e("path", {
    d: "M12.8209 19.0571L13.5569 21.3201L14.2929 19.0571H15.0729L14.0269 22.0641H13.0869L12.0449 19.0571H12.8209Z",
    fill: "white"
  }), /* @__PURE__ */ e("path", {
    d: "M16.0786 19.0571V22.0641H15.3516V19.0571H16.0786Z",
    fill: "white"
  }), /* @__PURE__ */ e("path", {
    d: "M8.2068 14.9832C7.11584 14.9818 6.06995 14.5479 5.29852 13.7765C4.5271 13.005 4.09312 11.9591 4.0918 10.8682C4.09312 9.77721 4.5271 8.73131 5.29852 7.95989C6.06995 7.18846 7.11584 6.7545 8.2068 6.75317C9.29776 6.7545 10.3437 7.18846 11.1151 7.95989C11.8865 8.73131 12.3205 9.77721 12.3218 10.8682C12.3205 11.9591 11.8865 13.005 11.1151 13.7765C10.3437 14.5479 9.29776 14.9818 8.2068 14.9832ZM8.2068 7.47417C7.30714 7.47576 6.44479 7.83385 5.80863 8.47C5.17248 9.10616 4.81439 9.96851 4.81281 10.8682C4.8128 11.7689 5.17019 12.6328 5.80652 13.2702C6.44285 13.9077 7.3061 14.2666 8.2068 14.2682C9.1075 14.2666 9.97077 13.9077 10.6071 13.2702C11.2434 12.6328 11.6008 11.7689 11.6008 10.8682C11.5992 9.96851 11.2411 9.10616 10.605 8.47C9.96881 7.83385 9.10646 7.47576 8.2068 7.47417Z",
    fill: "#FF9908"
  }), /* @__PURE__ */ e("path", {
    d: "M9.3874 10.5862L8.4304 10.0342C8.38086 10.0056 8.32468 9.99049 8.26748 9.99048C8.21028 9.99046 8.15409 10.0055 8.10454 10.0341C8.05499 10.0626 8.01383 10.1038 7.98519 10.1533C7.95656 10.2028 7.94146 10.259 7.94141 10.3161V11.4212C7.94146 11.4784 7.95656 11.5345 7.98519 11.584C8.01383 11.6336 8.05499 11.6747 8.10454 11.7032C8.15409 11.7318 8.21028 11.7468 8.26748 11.7468C8.32468 11.7468 8.38086 11.7318 8.4304 11.7032L9.3874 11.1502C9.43681 11.1215 9.47781 11.0804 9.50632 11.0309C9.53483 10.9814 9.54984 10.9253 9.54984 10.8682C9.54984 10.811 9.53483 10.7549 9.50632 10.7054C9.47781 10.6559 9.43681 10.6148 9.3874 10.5862Z",
    fill: "#FF9908"
  }), /* @__PURE__ */ e("path", {
    d: "M7.45026 9.94824H7.10026C6.96992 9.94824 6.86426 10.0539 6.86426 10.1842V11.5532C6.86426 11.6836 6.96992 11.7892 7.10026 11.7892H7.45026C7.5806 11.7892 7.68625 11.6836 7.68625 11.5532V10.1842C7.68625 10.0539 7.5806 9.94824 7.45026 9.94824Z",
    fill: "#FF9908"
  })]
}), O9 = () => /* @__PURE__ */ n("svg", {
  id: "fileTypeId",
  width: "21",
  height: "24",
  viewBox: "0 0 21 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  children: [/* @__PURE__ */ e("g", {
    opacity: "0.3",
    children: /* @__PURE__ */ e("path", {
      opacity: "0.3",
      d: "M14.9645 4.92504C14.4177 4.92424 13.8935 4.70662 13.507 4.31989C13.1205 3.93316 12.9031 3.40891 12.9026 2.86212V0.000244141H3.68893C2.97526 0.000244141 2.29084 0.283743 1.7862 0.788383C1.28156 1.29302 0.998047 1.97747 0.998047 2.69114V18.9125C0.998047 19.6261 1.28156 20.3106 1.7862 20.8152C2.29084 21.3198 2.97526 21.6033 3.68893 21.6033H14.7485C15.1019 21.6035 15.4519 21.534 15.7785 21.3988C16.1051 21.2636 16.4019 21.0654 16.6519 20.8155C16.9018 20.5657 17.1001 20.269 17.2354 19.9424C17.3707 19.6159 17.4404 19.2659 17.4404 18.9125V4.92504H14.9645Z",
      fill: "#FF9908"
    })
  }), /* @__PURE__ */ e("path", {
    d: "M17.4401 4.92504H14.9642C14.4175 4.92424 13.8933 4.70662 13.5068 4.31989C13.1202 3.93316 12.9029 3.40891 12.9023 2.86212V0.000244141L17.4401 4.92504Z",
    fill: "#FF9908"
  }), /* @__PURE__ */ e("path", {
    d: "M19.3916 17.0605H6.88814C6.00121 17.0605 5.28223 17.7795 5.28223 18.6665V22.3943C5.28223 23.2813 6.00121 24.0003 6.88814 24.0003H19.3916C20.2786 24.0003 20.9976 23.2813 20.9976 22.3943V18.6665C20.9976 17.7795 20.2786 17.0605 19.3916 17.0605Z",
    fill: "#FF9908"
  }), /* @__PURE__ */ e("path", {
    d: "M11.377 21.3374V22.0644H10.624V21.3374H11.377Z",
    fill: "white"
  }), /* @__PURE__ */ e("path", {
    d: "M13.619 21.5153H12.491L12.304 22.0642H11.5391L12.639 19.0784H13.477L14.5769 22.0642H13.803L13.619 21.5153ZM13.431 20.9623L13.057 19.8563L12.679 20.9623H13.431Z",
    fill: "white"
  }), /* @__PURE__ */ e("path", {
    d: "M15.5873 19.0574V22.0643H14.8604V19.0574H15.5873Z",
    fill: "white"
  }), /* @__PURE__ */ e("path", {
    d: "M8.6044 11.4077C8.59905 11.3641 8.60376 11.32 8.61814 11.2785C8.63253 11.2371 8.6562 11.1995 8.68738 11.1687C8.71468 11.1413 8.74712 11.1197 8.78281 11.1049C8.8185 11.0901 8.85674 11.0824 8.89538 11.0824C8.93401 11.0824 8.97226 11.0901 9.00795 11.1049C9.04363 11.1197 9.07607 11.1413 9.10338 11.1687C9.13071 11.196 9.15237 11.2284 9.16717 11.2641C9.18196 11.2998 9.18958 11.338 9.18958 11.3767C9.18958 11.4153 9.18196 11.4535 9.16717 11.4892C9.15237 11.5249 9.13071 11.5573 9.10338 11.5846C9.07253 11.6158 9.03495 11.6395 8.99352 11.6539C8.95209 11.6683 8.9079 11.673 8.86437 11.6677L5.44852 15.0835L10.5483 12.5836C10.5483 12.5836 11.1213 10.4497 11.7713 9.79873L10.4713 8.49878C9.82034 9.14875 7.68642 9.72173 7.68642 9.72173L5.18652 14.8215L8.6044 11.4077Z",
    fill: "#FF9908"
  }), /* @__PURE__ */ e("path", {
    d: "M13.2497 9.04049L11.2324 7.02319L10.2432 8.01239L12.2605 10.0297L13.2497 9.04049Z",
    fill: "#FF9908"
  })]
}), f2 = () => /* @__PURE__ */ n("svg", {
  id: "fileTypeId",
  width: "20",
  height: "24",
  viewBox: "0 0 20 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  children: [/* @__PURE__ */ e("g", {
    opacity: "0.3",
    children: /* @__PURE__ */ e("path", {
      opacity: "0.3",
      d: "M13.9664 4.92504C13.4196 4.92424 12.8955 4.70662 12.5089 4.31989C12.1224 3.93316 11.905 3.40891 11.9045 2.86212V0.000244141H2.69089C1.97722 0.000244141 1.29278 0.283743 0.788143 0.788383C0.283504 1.29302 0 1.97747 0 2.69114V18.9125C0.00105979 19.6254 0.285031 20.3088 0.789556 20.8126C1.29408 21.3164 1.97791 21.5993 2.69089 21.5993H13.7504C14.1039 21.5995 14.4539 21.53 14.7805 21.3948C15.1071 21.2596 15.4038 21.0614 15.6538 20.8116C15.9038 20.5617 16.1021 20.265 16.2374 19.9384C16.3727 19.6119 16.4423 19.2619 16.4423 18.9085V4.92103L13.9664 4.92504Z",
      fill: "#005FAD"
    })
  }), /* @__PURE__ */ e("path", {
    d: "M16.4421 4.92504H13.9662C13.4194 4.92424 12.8953 4.70662 12.5087 4.31989C12.1222 3.93316 11.9048 3.40891 11.9043 2.86212V0.000244141L16.4421 4.92504Z",
    fill: "#005FAD"
  }), /* @__PURE__ */ e("path", {
    d: "M18.3936 17.0605H5.89011C5.00318 17.0605 4.28418 17.7795 4.28418 18.6665V22.3943C4.28418 23.2813 5.00318 24.0003 5.89011 24.0003H18.3936C19.2805 24.0003 19.9995 23.2813 19.9995 22.3943V18.6665C19.9995 17.7795 19.2805 17.0605 18.3936 17.0605Z",
    fill: "#005FAD"
  }), /* @__PURE__ */ e("path", {
    d: "M5.25438 6.80017V6.8C5.25438 6.51713 5.51196 6.25 5.875 6.25H8.6875V6.6V8.3C8.6875 8.71421 9.02329 9.05 9.4375 9.05H11.3438H11.75V13.2C11.75 13.4813 11.4897 13.75 11.125 13.75H5.87062C5.50761 13.75 5.25005 13.4829 5.25 13.2001C5.25 13.2001 5.25 13.2 5.25 13.2L5.25438 6.80017ZM9.10619 6.41549L8.92518 6.25H9.27794L10.5188 7.38451L11.75 8.51017V8.83269L11.5124 8.61549L9.10619 6.41549Z",
    stroke: "#005FAD",
    "stroke-width": "0.5"
  })]
});
function W9({
  name: C,
  path: t
}) {
  const i = F1(C);
  if (!i)
    return /* @__PURE__ */ e("a", {
      children: /* @__PURE__ */ e(f2, {})
    });
  switch (i.toLowerCase()) {
    case "zip":
      return /* @__PURE__ */ e(g, {
        href: t && t,
        children: /* @__PURE__ */ e(n9, {})
      });
    case "xls":
      return /* @__PURE__ */ e(g, {
        href: t && t,
        children: /* @__PURE__ */ e(a9, {})
      });
    case "xml":
      return /* @__PURE__ */ e(g, {
        href: t && t,
        children: /* @__PURE__ */ e(r9, {})
      });
    case "wma":
      return /* @__PURE__ */ e(g, {
        href: t && t,
        children: /* @__PURE__ */ e(o9, {})
      });
    case "wav":
      return /* @__PURE__ */ e(g, {
        href: t && t,
        children: /* @__PURE__ */ e(d9, {})
      });
    case "txt":
      return /* @__PURE__ */ e(g, {
        href: t && t,
        children: /* @__PURE__ */ e(h9, {})
      });
    case "tiff":
      return /* @__PURE__ */ e(g, {
        href: t && t,
        children: /* @__PURE__ */ e(c9, {})
      });
    case "svg":
      return /* @__PURE__ */ e(g, {
        href: t && t,
        children: /* @__PURE__ */ e(f9, {})
      });
    case "rss":
      return /* @__PURE__ */ e(g, {
        href: t && t,
        children: /* @__PURE__ */ e(s9, {})
      });
    case "raw":
      return /* @__PURE__ */ e(g, {
        href: t && t,
        children: /* @__PURE__ */ e(H9, {})
      });
    case "rar":
      return /* @__PURE__ */ e(g, {
        href: t && t,
        children: /* @__PURE__ */ e(p9, {})
      });
    case "pub":
      return /* @__PURE__ */ e(g, {
        href: t && t,
        children: /* @__PURE__ */ e(u9, {})
      });
    case "psd":
      return /* @__PURE__ */ e(g, {
        href: t && t,
        children: /* @__PURE__ */ e(V9, {})
      });
    case "ps":
      return /* @__PURE__ */ e(g, {
        href: t && t,
        children: /* @__PURE__ */ e(g9, {})
      });
    case "ppt":
      return /* @__PURE__ */ e(g, {
        href: t && t,
        children: /* @__PURE__ */ e(w9, {})
      });
    case "png":
      return /* @__PURE__ */ e(g, {
        href: t && t,
        children: /* @__PURE__ */ e(v9, {})
      });
    case "pdf":
      return /* @__PURE__ */ e(g, {
        href: t && t,
        children: /* @__PURE__ */ e(x9, {})
      });
    case "mpeg":
      return /* @__PURE__ */ e(g, {
        href: t && t,
        children: /* @__PURE__ */ e(m9, {})
      });
    case "mp4":
      return /* @__PURE__ */ e(g, {
        href: t && t,
        children: /* @__PURE__ */ e(Z9, {})
      });
    case "mp3":
      return /* @__PURE__ */ e(g, {
        href: t && t,
        children: /* @__PURE__ */ e(L9, {})
      });
    case "mov":
      return /* @__PURE__ */ e(g, {
        href: t && t,
        children: /* @__PURE__ */ e(M9, {})
      });
    case "mid":
      return /* @__PURE__ */ e(g, {
        href: t && t,
        children: /* @__PURE__ */ e(F9, {})
      });
    case "mdb":
      return /* @__PURE__ */ e(g, {
        href: t && t,
        children: /* @__PURE__ */ e(b9, {})
      });
    case "jpg":
      return /* @__PURE__ */ e(g, {
        href: t && t,
        children: /* @__PURE__ */ e(c2, {})
      });
    case "jpeg":
      return /* @__PURE__ */ e(g, {
        href: t && t,
        children: /* @__PURE__ */ e(c2, {})
      });
    case "java":
      return /* @__PURE__ */ e(g, {
        href: t && t,
        children: /* @__PURE__ */ e(y9, {})
      });
    case "iso":
      return /* @__PURE__ */ e(g, {
        href: t && t,
        children: /* @__PURE__ */ e(E9, {})
      });
    case "html":
      return /* @__PURE__ */ e(g, {
        href: t && t,
        children: /* @__PURE__ */ e(k9, {})
      });
    case "gif":
      return /* @__PURE__ */ e(g, {
        href: t && t,
        children: /* @__PURE__ */ e(_9, {})
      });
    case "flv":
      return /* @__PURE__ */ e(g, {
        href: t && t,
        children: /* @__PURE__ */ e($9, {})
      });
    case "exe":
      return /* @__PURE__ */ e(g, {
        href: t && t,
        children: /* @__PURE__ */ e(T9, {})
      });
    case "eps":
      return /* @__PURE__ */ e(g, {
        href: t && t,
        children: /* @__PURE__ */ e(I9, {})
      });
    case "dwg":
      return /* @__PURE__ */ e(g, {
        href: t && t,
        children: /* @__PURE__ */ e(S9, {})
      });
    case "docx":
      return /* @__PURE__ */ e(g, {
        href: t && t,
        children: /* @__PURE__ */ e(A9, {})
      });
    case "doc":
      return /* @__PURE__ */ e(g, {
        href: t && t,
        children: /* @__PURE__ */ e(R9, {})
      });
    case "dll":
      return /* @__PURE__ */ e(g, {
        href: t && t,
        children: /* @__PURE__ */ e(B9, {})
      });
    case "csv":
      return /* @__PURE__ */ e(g, {
        href: t && t,
        children: /* @__PURE__ */ e(j9, {})
      });
    case "crd":
      return /* @__PURE__ */ e(g, {
        href: t && t,
        children: /* @__PURE__ */ e(D9, {})
      });
    case "bmp":
      return /* @__PURE__ */ e(g, {
        href: t && t,
        children: /* @__PURE__ */ e(P9, {})
      });
    case "avi":
      return /* @__PURE__ */ e(g, {
        href: t && t,
        children: /* @__PURE__ */ e(z9, {})
      });
    case "ai":
      return /* @__PURE__ */ e(g, {
        href: t && t,
        children: /* @__PURE__ */ e(O9, {})
      });
    default:
      return /* @__PURE__ */ e("a", {
        children: /* @__PURE__ */ e(f2, {})
      });
  }
}
const g = r.a`
  width: 20px;
  height: 24px;
  svg {
    width: 20px;
    object-fit: cover;
  }
`;
function Z3({
  name: C,
  path: t,
  rightPosition: i
}) {
  function h(s) {
    const o = F1(s).length ? F1(s) : "";
    let f = "var(--f_blue)", H = "var(--fb_blue)";
    return o === "mdb" || o === "rar" || o === "dll" || o === "bmp" || o === "xml" || o === "mp4" || o === "mdb" || o === "tiff" ? (f = "var(--f_purple)", H = "var(--fb_purple)") : o === "cvg" || o === "crd" || o === "wav" || o === "xsl" || o === "jpg" || o === "mpeg" || o === "html" ? (f = "var(--f_green)", H = "var(--fb_green)") : o === "wma" || o === "gif" || o === "svg" || o === "eps" || o === "avi" || o === "rss" || o === "ai" ? (f = "var(--f_orange)", H = "var(--fb_orange)") : o === "raw" || o === "zip" || o === "pdf" || o === "mp3" || o === "flv" || o === "pub" || o === "ppt" || o === "java" ? (f = "var(--f_red)", H = "var(--fb_red)") : o === "ps" || o === "png" || o === "mid" || o === "dwg" || o === "psd" ? (f = "var(--f_dark_blue)", H = "var(--fb_dark_blue)") : (f = "var(--f_blue)", H = "var(--fb_blue)"), /* @__PURE__ */ n(N9, {
      reversPosition: i && i,
      style: {
        backgroundColor: H
      },
      children: [/* @__PURE__ */ e(W9, {
        name: s,
        path: t
      }), /* @__PURE__ */ e(Y9, {
        href: t && t,
        color: f,
        children: s.length > 25 ? s.substr(0, 25) + "..." : s
      })]
    });
  }
  return h(C);
}
const N9 = r.div`
  max-width: 250px;
  border-radius: 4px;
  padding: 8px 12px;
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  /* color: var(--black); */
  ${(C) => C.reversPosition && "flex-direction: row-reverse;"}
`, Y9 = r.a`
  text-decoration: none;
  color: ${(C) => C.color};
  :visited,
  :active {
    color: ${(C) => C.color};
  }
`, c1 = ({
  name: C,
  path: t,
  count: i,
  icon: h,
  disableIndicator: s,
  subLinks: o,
  iconPath: f
}) => {
  var m;
  const H = u1(null), [u, L] = k(!1), c = (F) => {
    o != null && o.length ? w() : console.log(F);
  }, w = () => {
    L(!u);
  };
  return /* @__PURE__ */ n(m2, {
    children: [!s && /* @__PURE__ */ e(x2, {
      children: /* @__PURE__ */ e(H0, {})
    }), /* @__PURE__ */ n(s2, {
      onClick: () => c(t),
      children: [/* @__PURE__ */ e(e1, {
        children: f ? /* @__PURE__ */ e("img", {
          src: f,
          alt: "name"
        }) : h
      }), /* @__PURE__ */ n(p1, {
        children: [/* @__PURE__ */ e(s1, {
          children: C
        }), /* @__PURE__ */ n(H1, {
          children: [o != null && o.length ? /* @__PURE__ */ e(G9, {
            active: u,
            onClick: w,
            children: /* @__PURE__ */ e(n0, {})
          }) : null, i && i > 0 ? /* @__PURE__ */ e(b1, {
            children: i
          }) : null]
        })]
      })]
    }), o != null && o.length ? /* @__PURE__ */ e(U9, {
      active: u,
      menuHeight: (m = H.current) == null ? void 0 : m.clientHeight,
      children: /* @__PURE__ */ e("div", {
        ref: H,
        children: o.map((F, T) => /* @__PURE__ */ n(s2, {
          onClick: () => c(F.path),
          children: [/* @__PURE__ */ e(e1, {}), /* @__PURE__ */ n(p1, {
            children: [/* @__PURE__ */ e(s1, {
              children: F.name
            }), /* @__PURE__ */ e(H1, {
              children: F.count && F.count > 0 ? /* @__PURE__ */ e(b1, {
                children: F.count
              }) : null
            })]
          })]
        }, T))
      })
    }) : null]
  });
}, U9 = r.div`
  padding-top: ${(C) => C.active ? "7px" : "0px"};
  height: ${(C) => C.active ? `calc(${C.menuHeight}px + 7px)` : "0px"};
  transition: all 0.2s ease-out;
  overflow: hidden;
`, s1 = r.p`
  font-weight: 600;
  font-size: 16px;
  line-height: 16px;
  color: var(--blue_gray);
  white-space: nowrap;
`, H1 = r.div`
  height: 20px;
  display: flex;
  align-items: center;
  gap: 5px;
`, G9 = r.div`
  height: 20px;
  width: 20px;
  svg {
    transition: 0.2s ease-out;
    transform: ${(C) => C.active && "scale(1, -1)"};
  }
`, b1 = r.div`
  width: 24px;
  height: 24px;
  background: var(--blue_gray);
  border-radius: 4px;
  font-weight: 700;
  font-size: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--white);
`, p1 = r.div`
  padding-left: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: 0.2s ease-out;
  width: 0px;
  /* overflow: hidden; */
`, e1 = r.div`
  max-width: 20px;
  max-height: 20px;
  width: 100%;
  height: 100%;
  svg {
    width: 20px;
    height: 100%;
    object-fit: cover;
  }

  img {
    width: 20px;
    height: 100%;
    object-fit: cover;
    filter: invert(49%) sepia(32%) saturate(315%) hue-rotate(176deg)
      brightness(84%) contrast(87%);
  }
`, s2 = r.div`
  padding: 4px 0px;
  display: flex;
  gap: 12px;
  align-items: center;
  cursor: pointer;
  transition: 0.2s ease-out;

  :active ${s1}, :hover ${s1} {
    color: var(--main_color);
    transition: 0.2s ease-out;
  }

  :active ${e1} svg path,
  :hover ${e1} svg path {
    fill: var(--main_color);
    transition: 0.2s ease-out;
  }

  :active ${e1} img,
  :hover ${e1} img {
    filter: invert(52%) sepia(80%) saturate(6180%) hue-rotate(214deg)
      brightness(98%) contrast(105%);
  }

  :active ${H1}, :hover ${H1} {
    svg path {
      fill: var(--main_color);
      transition: 0.2s ease-out;
    }

    ${b1} {
      background: var(--main_color);
      transition: 0.2s ease-out;
    }
  }
`, x2 = r.div`
  left: -10px;
  width: 8px;
  height: 28px;
  position: absolute;
  transition: ${(C) => {
  var t, i;
  return ((i = (t = C == null ? void 0 : C.theme) == null ? void 0 : t.theme) == null ? void 0 : i.transition) || p.theme.transition;
}};

  svg {
    width: 8px;
    height: 100%;
    object-fit: cover;
  }
`, m2 = r.div`
  padding: 10px 20px;
  position: relative;
  max-height: 48px;
  overflow: hidden;
  transition: 0.2s ease-out;

  :active ${x2} {
    left: 0;
    transition: ${(C) => {
  var t, i;
  return ((i = (t = C == null ? void 0 : C.theme) == null ? void 0 : t.theme) == null ? void 0 : i.transition) || p.theme.transition;
}};
  }
`;
function L3({
  releaseYear: C,
  appRelease: t,
  fixed: i,
  headerHeight: h,
  childLinks: s,
  settingsPath: o
}) {
  const f = h ? `${h}px` : void 0;
  return /* @__PURE__ */ e(e3, {
    fixed: i,
    children: /* @__PURE__ */ e(Q9, {
      children: /* @__PURE__ */ n(K9, {
        fixed: i,
        headerHeight: f,
        children: [/* @__PURE__ */ e(X9, {
          headerHeight: f,
          children: s.map((H, u) => /* @__PURE__ */ e(c1, {
            name: H.name,
            icon: H.icon ? H.icon : /* @__PURE__ */ e(u2, {}),
            path: H.path,
            iconPath: H.iconPath,
            count: H.count,
            subLinks: H.subLinks
          }, u))
        }), /* @__PURE__ */ n(J9, {
          children: [/* @__PURE__ */ e(c1, {
            disableIndicator: !0,
            name: "\u0422\u0435\u043C\u043D\u044B\u0439 \u0440\u0435\u0436\u0438\u043C",
            icon: /* @__PURE__ */ e(f0, {})
          }), /* @__PURE__ */ e(c1, {
            disableIndicator: !0,
            name: "\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438",
            icon: /* @__PURE__ */ e(c0, {}),
            path: o && o
          }), /* @__PURE__ */ e(c1, {
            disableIndicator: !0,
            name: "\u0412\u044B\u0445\u043E\u0434",
            icon: /* @__PURE__ */ e(s0, {})
          }), /* @__PURE__ */ e(q9, {
            children: /* @__PURE__ */ e(n1, {
              children: /* @__PURE__ */ n("div", {
                children: ["\xA9 ", C, " ", /* @__PURE__ */ e("p", {
                  children: t
                })]
              })
            })
          })]
        })]
      })
    })
  });
}
const n1 = r.div`
  position: absolute;
  align-items: center;
  justify-content: center;
  bottom: 0;
  transition: 0.2s ease-out;
  width: 34px;

  div {
    white-space: nowrap;
    font-weight: 500;
    font-size: 9px;
    line-height: 9px;
    letter-spacing: 0.1px;
    color: var(--black);
    display: flex;
    justify-content: center;
    gap: 2px;
    text-align: center;
    transition: 0.2s ease-out;
    p {
      width: 0px;
      overflow: hidden;
      transition: 0.2s ease-out;
    }
  }
`, q9 = r.div`
  padding: 10px 14.5px;
  position: relative;
`, J9 = r.div`
  padding-top: 20px;
  border-top: 1px solid var(--stroke);
  display: grid;
  gap: 3px;
`, X9 = r.div`
  max-height: ${(C) => {
  var t, i;
  return `calc(100vh - 230px - ${C.headerHeight ? C.headerHeight : ((i = (t = C == null ? void 0 : C.theme) == null ? void 0 : t.theme) == null ? void 0 : i.header_height) || p.theme.header_height})`;
}};
  display: grid;
  gap: 3px;
  overflow: hidden;
  overflow-y: auto;
`, K9 = r.div`
  width: ${(C) => C.fixed ? "300px" : "60px"};
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: var(--white);
  transition: 0.2s ease-out;
  min-height: ${(C) => {
  var t, i;
  return `calc(100vh - ${C.headerHeight ? C.headerHeight : ((i = (t = C == null ? void 0 : C.theme) == null ? void 0 : t.theme) == null ? void 0 : i.header_height) || p.theme.header_height})`;
}};
  border-right: 1px solid var(--stroke);
  box-shadow: 1px 1px 20px rgba(40, 105, 254, 0.06);
  height: 100%;
  overflow: hidden;

  :hover {
    width: 300px;
  }

  ${(C) => C.fixed ? `
        
      ${p1},  ${n1} {
        padding-left: 0px;
        width: 227px;
      }
      
      ${n1} div p {
        width: auto;
      }
  ` : `
      :hover {
        width: 300px;
      }

      :hover ${m2} {
        max-height: 300px; 
      }

      :hover ${p1} {
        padding-left: 0px;
        width: 227px;
      }

      :hover ${n1} {
        width: 270px;
      }

      :hover ${n1} div p {
        width: auto;
      }
      `}
`, Q9 = r.div`
  position: fixed;
  box-shadow: 1px 1px 20px rgba(40, 105, 254, 0.06);
`, e3 = r.div`
  width: ${(C) => C.fixed ? "300px" : "60px"};
  position: relative;
  z-index: 10;
`, M3 = (C) => {
  const {
    tabs: t,
    name: i,
    activeId: h,
    onChange: s
  } = C, [o, f] = k(h || ""), [H, u] = k({
    line: 0,
    left: 0
  });
  P(() => {
    const c = document.querySelector('[aria-selected="true"]'), w = c.offsetLeft, m = c.clientWidth, {
      id: F,
      name: T
    } = c;
    u({
      line: m,
      left: w
    }), f(F);
  }, []);
  const L = (c) => {
    const w = c.currentTarget, m = w.offsetLeft, F = w.clientWidth, {
      id: T,
      name: I
    } = w;
    s && s({
      name: I,
      id: T
    }), u({
      line: F,
      left: m
    }), f(T);
  };
  return /* @__PURE__ */ e(_, {
    padding: "2px 0px",
    align: "center",
    children: /* @__PURE__ */ n(l3, {
      children: [/* @__PURE__ */ e(_, {
        gap: "20px",
        children: t.map((c, w) => /* @__PURE__ */ e(i3, {
          children: /* @__PURE__ */ n(t3, {
            selected: o == c.id,
            onClick: (m) => L(m),
            role: "tab",
            "aria-selected": o == c.id,
            "aria-controls": "tabpanel-id",
            id: c.id,
            name: i,
            children: [c.title, c.count && c.count > 0 ? /* @__PURE__ */ e(y1, {
              children: c.count
            }) : null]
          })
        }, w))
      }), /* @__PURE__ */ e(C3, {
        lineWidth: H.line,
        left: H.left
      })]
    })
  });
}, C3 = r.span`
  width: ${(C) => C.lineWidth + "px"};
  left: ${(C) => C.left + "px"};
  height: 3px;
  bottom: 0;
  position: absolute;
  border-radius: 3px;
  transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  background-color: var(--main_color);
`, y1 = r.div`
  width: 24px;
  height: 24px;
  background: var(--blue_gray);
  border-radius: 4px;
  font-weight: 700;
  font-size: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--white);
  transition: ${(C) => {
  var t, i;
  return ((i = (t = C == null ? void 0 : C.theme) == null ? void 0 : t.theme) == null ? void 0 : i.transition) || p.theme.transition;
}};
`, t3 = r.button`
  display: flex;
  align-items: center;
  gap: 10px;
  box-sizing: border-box;
  background-color: transparent;
  cursor: pointer;
  border-radius: 0;
  outline: 0;
  border: 0;
  margin: 0;
  padding: 18px 0;
  font-weight: 700;
  font-size: 14px;
  line-height: 19px;
  transition: ${(C) => {
  var t, i;
  return ((i = (t = C == null ? void 0 : C.theme) == null ? void 0 : t.theme) == null ? void 0 : i.transition) || p.theme.transition;
}};
  color: var(--blue_gray);

  :hover,
  :focus {
    color: var(--main_color);
  }

  :hover ${y1}, :focus ${y1} {
    background: var(--main_color);
  }
`, i3 = r.div`
  padding: 0px;
  display: flex;
  align-items: center;
`, l3 = r.div`
  position: relative;
  width: 100%;
  display: inline-block;
  flex: 1 1 auto;
  white-space: nowrap;
`;
function F3(C) {
  const {
    label: t,
    name: i,
    onChange: h,
    size: s = "normal",
    iconType: o = "success",
    labelPosition: f = "left",
    disabled: H,
    checked: u,
    defaultChecked: L
  } = C, [c, w] = k(!1);
  return P(() => {
    if (u !== void 0)
      return w(u);
    if (L !== void 0)
      return w(L);
  }, [u, L]), /* @__PURE__ */ n(r3, {
    children: [t ? /* @__PURE__ */ e(n3, {
      position: f,
      children: t
    }) : null, /* @__PURE__ */ e(a3, {
      onClick: () => {
        u == null && (H || (w(!c), h && h({
          name: i || "",
          checked: !c
        })));
      },
      iconType: o,
      checked: c,
      size: s,
      disabled: !!H,
      children: /* @__PURE__ */ e(p0, {
        iconType: o
      })
    })]
  });
}
const n3 = r.label`
  font-weight: 400;
  font-size: 14px;
  line-height: 125%;
  letter-spacing: 0.005em;
  color: #000;
  order: ${(C) => C.position == "right" && 1};
`, a3 = r.div`
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.2s ease-out;
  cursor: ${(C) => !C.disabled && "pointer"};
  border-radius: 6px;
  background-color: var(--white);
  border: 2px solid
    ${(C) => C.disabled ? "var(--stroke)" : "var(--light_blue)"};
  width: ${(C) => C.size === "big" ? "24px" : C.size === "small" ? "16px" : "20px"};
  height: ${(C) => C.size === "big" ? "24px" : C.size === "small" ? "16px" : "20px"};

  svg {
    width: 0;
    height: 0;
    object-fit: cover;
    transition: 0.1s ease-out;
  }

  ${(C) => !C.disabled && `
      :hover {
        border-color: ${C.iconType === "mistake" ? "var(--f_red)" : "var(--main_color)"};
      }
  `}

  ${(C) => C.checked ? ` 
        svg {
        ${C.size === "big" ? `
              width: 20px;
              height: 20px;
            ` : C.size === "small" ? `
              width: 12px;
              height: 12px;
            ` : `
              width: 16px;
              height: 16px;
            `}
        object-fit: cover;
      }
      ${C.disabled ? `
            border-color:  var(--stroke);
            background-color: var(--stroke);
          ` : `
            border-color: ${C.iconType === "mistake" ? "var(--f_red)" : "var(--main_color)"};
            background-color: ${C.iconType === "mistake" ? "var(--f_red)" : "var(--main_color)"};
        `}
  ` : null}
`, r3 = r.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;
function b3(C) {
  const {
    label: t,
    name: i,
    onChange: h,
    size: s = "normal",
    labelPosition: o = "left",
    disabled: f,
    checked: H,
    defaultChecked: u
  } = C, [L, c] = k(!1);
  return P(() => {
    if (H !== void 0)
      return c(H);
    if (u !== void 0)
      return c(u);
  }, [H, u]), /* @__PURE__ */ n(h3, {
    children: [t ? /* @__PURE__ */ e(o3, {
      position: o,
      children: t
    }) : null, /* @__PURE__ */ e(d3, {
      onClick: () => {
        H == null && (f || (c(!L), h && h({
          name: i || "",
          checked: !L
        })));
      },
      checked: L,
      size: s,
      disabled: !!f
    })]
  });
}
const o3 = r.label`
  font-weight: 400;
  font-size: 14px;
  line-height: 125%;
  letter-spacing: 0.005em;
  color: #000;
  order: ${(C) => C.position == "right" && 1};
`, d3 = r.div`
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.1s ease-out;
  cursor: ${(C) => !C.disabled && "pointer"};
  border-radius: 20px;
  background-color: var(--white);
  border: 2px solid
    ${(C) => C.disabled ? "var(--stroke)" : "var(--light_blue)"};
  width: ${(C) => C.size === "big" ? "24px" : C.size === "small" ? "16px" : "20px"};
  height: ${(C) => C.size === "big" ? "24px" : C.size === "small" ? "16px" : "20px"};

  svg {
    width: 0;
    height: 0;
    object-fit: cover;
  }

  ${(C) => !C.disabled && `
      :hover {
        border-color: var(--main_color);
      }
  `}

  ${(C) => C.checked && ` 
      border: ${C.size === "big" ? "8px" : C.size === "small" ? "5px" : "6px"} solid;
      border-color:  ${C.disabled ? "var(--stroke)" : "var(--main_color)"};
  `}
`, h3 = r.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;
function y3(C) {
  const {
    theadChild: t,
    tbodyChild: i,
    border: h
  } = C, s = (h == null ? void 0 : h.x) && (h == null ? void 0 : h.y) ? "all" : h != null && h.y ? "y" : (h == null ? void 0 : h.x) == !1 ? "none" : "x";
  return /* @__PURE__ */ n(s3, {
    children: [/* @__PURE__ */ e(f3, {
      border: s,
      children: t && t
    }), /* @__PURE__ */ e(c3, {
      border: s,
      children: i && i
    })]
  });
}
const c3 = r.tbody`
  tr {
    cursor: pointer;
  }

  td {
    padding: 16px;
    color: var(--black);
    font-weight: 700;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    border: none;
    border-bottom: ${(C) => C.border !== "none" && C.border !== "y" ? "1px solid var(--stroke)" : "none"};
    border-right: ${(C) => C.border === "all" || C.border === "y" ? "1px solid var(--stroke)" : "none"};
  }
  ${(C) => C.border === "all" && `
      tr:last-child td {
        border-bottom: none;
      }
  `}

  td:first-child {
    padding-left: 21px;
  }

  td:last-child {
    padding-right: 21px;
    border-right: none;
  }

  tr:hover {
    background: linear-gradient(
      90deg,
      rgba(247, 249, 252, 0) 0%,
      #eff5ff 2.72%,
      rgba(239, 245, 255, 0.8883) 96.48%,
      rgba(247, 249, 252, 0) 100%
    );
    transition: ${(C) => C.theme.theme.transition};
  }
`, f3 = r.thead`
  th {
    height: 52px;
    padding: 8px 16px;
    color: var(--blue_gray);
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    border: none;
    border-bottom: ${(C) => C.border !== "none" && C.border !== "y" ? "1px solid var(--stroke)" : "none"};
    border-right: ${(C) => C.border === "all" || C.border === "y" ? "1px solid var(--stroke)" : "none"};
  }

  th:first-child {
    padding-left: 21px;
  }
  th:last-child {
    padding-right: 21px;
    border-right: none;
  }
`, s3 = r.table`
  border-spacing: 0;
  padding: 20px;
  background-color: var(--white);
  box-shadow: 0px 0px 20px rgba(40, 105, 254, 0.07);
  border-radius: 6px;
`;
export {
  P0 as AppLogo,
  W0 as AppTitle,
  w2 as AppsMenu,
  J0 as AvatarAppsContainer,
  V3 as AvnLogin,
  y3 as AvnTable,
  C0 as BUTTON_VARIANTS,
  v3 as Button,
  u3 as ButtonExemple,
  F3 as Checkbox,
  W9 as FileTypesIcon,
  Z3 as FileWrapper,
  _ as Flex,
  w3 as HeaderWrapper,
  x3 as Input,
  v2 as LangSwitch,
  g3 as Navbar,
  X0 as Navigation,
  N0 as Profile,
  b3 as RadioBtn,
  m3 as Select,
  L3 as Sidebar,
  M3 as Tabbar
};
