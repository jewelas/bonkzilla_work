(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const l of document.querySelectorAll('link[rel="modulepreload"]')) r(l);
  new MutationObserver((l) => {
    for (const o of l)
      if (o.type === "childList")
        for (const i of o.addedNodes)
          i.tagName === "LINK" && i.rel === "modulepreload" && r(i);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(l) {
    const o = {};
    return (
      l.integrity && (o.integrity = l.integrity),
      l.referrerPolicy && (o.referrerPolicy = l.referrerPolicy),
      l.crossOrigin === "use-credentials"
        ? (o.credentials = "include")
        : l.crossOrigin === "anonymous"
        ? (o.credentials = "omit")
        : (o.credentials = "same-origin"),
      o
    );
  }
  function r(l) {
    if (l.ep) return;
    l.ep = !0;
    const o = n(l);
    fetch(l.href, o);
  }
})();
var Nc =
  typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
    ? window
    : typeof global < "u"
    ? global
    : typeof self < "u"
    ? self
    : {};
function as(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var cs = { exports: {} },
  yl = {},
  fs = { exports: {} },
  I = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var pr = Symbol.for("react.element"),
  zc = Symbol.for("react.portal"),
  jc = Symbol.for("react.fragment"),
  Pc = Symbol.for("react.strict_mode"),
  Lc = Symbol.for("react.profiler"),
  Tc = Symbol.for("react.provider"),
  Oc = Symbol.for("react.context"),
  Mc = Symbol.for("react.forward_ref"),
  Rc = Symbol.for("react.suspense"),
  Dc = Symbol.for("react.memo"),
  Ic = Symbol.for("react.lazy"),
  Zi = Symbol.iterator;
function Fc(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Zi && e[Zi]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var ds = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  ps = Object.assign,
  ms = {};
function Nn(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = ms),
    (this.updater = n || ds);
}
Nn.prototype.isReactComponent = {};
Nn.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
Nn.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function hs() {}
hs.prototype = Nn.prototype;
function bo(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = ms),
    (this.updater = n || ds);
}
var ei = (bo.prototype = new hs());
ei.constructor = bo;
ps(ei, Nn.prototype);
ei.isPureReactComponent = !0;
var Xi = Array.isArray,
  vs = Object.prototype.hasOwnProperty,
  ti = { current: null },
  ys = { key: !0, ref: !0, __self: !0, __source: !0 };
function gs(e, t, n) {
  var r,
    l = {},
    o = null,
    i = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (i = t.ref),
    t.key !== void 0 && (o = "" + t.key),
    t))
      vs.call(t, r) && !ys.hasOwnProperty(r) && (l[r] = t[r]);
  var u = arguments.length - 2;
  if (u === 1) l.children = n;
  else if (1 < u) {
    for (var s = Array(u), a = 0; a < u; a++) s[a] = arguments[a + 2];
    l.children = s;
  }
  if (e && e.defaultProps)
    for (r in ((u = e.defaultProps), u)) l[r] === void 0 && (l[r] = u[r]);
  return {
    $$typeof: pr,
    type: e,
    key: o,
    ref: i,
    props: l,
    _owner: ti.current,
  };
}
function Bc(e, t) {
  return {
    $$typeof: pr,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function ni(e) {
  return typeof e == "object" && e !== null && e.$$typeof === pr;
}
function Ac(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Gi = /\/+/g;
function Ml(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? Ac("" + e.key)
    : t.toString(36);
}
function Dr(e, t, n, r, l) {
  var o = typeof e;
  (o === "undefined" || o === "boolean") && (e = null);
  var i = !1;
  if (e === null) i = !0;
  else
    switch (o) {
      case "string":
      case "number":
        i = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case pr:
          case zc:
            i = !0;
        }
    }
  if (i)
    return (
      (i = e),
      (l = l(i)),
      (e = r === "" ? "." + Ml(i, 0) : r),
      Xi(l)
        ? ((n = ""),
          e != null && (n = e.replace(Gi, "$&/") + "/"),
          Dr(l, t, n, "", function (a) {
            return a;
          }))
        : l != null &&
          (ni(l) &&
            (l = Bc(
              l,
              n +
                (!l.key || (i && i.key === l.key)
                  ? ""
                  : ("" + l.key).replace(Gi, "$&/") + "/") +
                e
            )),
          t.push(l)),
      1
    );
  if (((i = 0), (r = r === "" ? "." : r + ":"), Xi(e)))
    for (var u = 0; u < e.length; u++) {
      o = e[u];
      var s = r + Ml(o, u);
      i += Dr(o, t, n, s, l);
    }
  else if (((s = Fc(e)), typeof s == "function"))
    for (e = s.call(e), u = 0; !(o = e.next()).done; )
      (o = o.value), (s = r + Ml(o, u++)), (i += Dr(o, t, n, s, l));
  else if (o === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return i;
}
function gr(e, t, n) {
  if (e == null) return e;
  var r = [],
    l = 0;
  return (
    Dr(e, r, "", "", function (o) {
      return t.call(n, o, l++);
    }),
    r
  );
}
function Uc(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var xe = { current: null },
  Ir = { transition: null },
  Hc = {
    ReactCurrentDispatcher: xe,
    ReactCurrentBatchConfig: Ir,
    ReactCurrentOwner: ti,
  };
I.Children = {
  map: gr,
  forEach: function (e, t, n) {
    gr(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      gr(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      gr(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!ni(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
I.Component = Nn;
I.Fragment = jc;
I.Profiler = Lc;
I.PureComponent = bo;
I.StrictMode = Pc;
I.Suspense = Rc;
I.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Hc;
I.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = ps({}, e.props),
    l = e.key,
    o = e.ref,
    i = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((o = t.ref), (i = ti.current)),
      t.key !== void 0 && (l = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var u = e.type.defaultProps;
    for (s in t)
      vs.call(t, s) &&
        !ys.hasOwnProperty(s) &&
        (r[s] = t[s] === void 0 && u !== void 0 ? u[s] : t[s]);
  }
  var s = arguments.length - 2;
  if (s === 1) r.children = n;
  else if (1 < s) {
    u = Array(s);
    for (var a = 0; a < s; a++) u[a] = arguments[a + 2];
    r.children = u;
  }
  return { $$typeof: pr, type: e.type, key: l, ref: o, props: r, _owner: i };
};
I.createContext = function (e) {
  return (
    (e = {
      $$typeof: Oc,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: Tc, _context: e }),
    (e.Consumer = e)
  );
};
I.createElement = gs;
I.createFactory = function (e) {
  var t = gs.bind(null, e);
  return (t.type = e), t;
};
I.createRef = function () {
  return { current: null };
};
I.forwardRef = function (e) {
  return { $$typeof: Mc, render: e };
};
I.isValidElement = ni;
I.lazy = function (e) {
  return { $$typeof: Ic, _payload: { _status: -1, _result: e }, _init: Uc };
};
I.memo = function (e, t) {
  return { $$typeof: Dc, type: e, compare: t === void 0 ? null : t };
};
I.startTransition = function (e) {
  var t = Ir.transition;
  Ir.transition = {};
  try {
    e();
  } finally {
    Ir.transition = t;
  }
};
I.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
I.useCallback = function (e, t) {
  return xe.current.useCallback(e, t);
};
I.useContext = function (e) {
  return xe.current.useContext(e);
};
I.useDebugValue = function () {};
I.useDeferredValue = function (e) {
  return xe.current.useDeferredValue(e);
};
I.useEffect = function (e, t) {
  return xe.current.useEffect(e, t);
};
I.useId = function () {
  return xe.current.useId();
};
I.useImperativeHandle = function (e, t, n) {
  return xe.current.useImperativeHandle(e, t, n);
};
I.useInsertionEffect = function (e, t) {
  return xe.current.useInsertionEffect(e, t);
};
I.useLayoutEffect = function (e, t) {
  return xe.current.useLayoutEffect(e, t);
};
I.useMemo = function (e, t) {
  return xe.current.useMemo(e, t);
};
I.useReducer = function (e, t, n) {
  return xe.current.useReducer(e, t, n);
};
I.useRef = function (e) {
  return xe.current.useRef(e);
};
I.useState = function (e) {
  return xe.current.useState(e);
};
I.useSyncExternalStore = function (e, t, n) {
  return xe.current.useSyncExternalStore(e, t, n);
};
I.useTransition = function () {
  return xe.current.useTransition();
};
I.version = "18.2.0";
fs.exports = I;
var qe = fs.exports;
const Ct = as(qe);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var $c = qe,
  Vc = Symbol.for("react.element"),
  Wc = Symbol.for("react.fragment"),
  Qc = Object.prototype.hasOwnProperty,
  Kc = $c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Yc = { key: !0, ref: !0, __self: !0, __source: !0 };
function ws(e, t, n) {
  var r,
    l = {},
    o = null,
    i = null;
  n !== void 0 && (o = "" + n),
    t.key !== void 0 && (o = "" + t.key),
    t.ref !== void 0 && (i = t.ref);
  for (r in t) Qc.call(t, r) && !Yc.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) l[r] === void 0 && (l[r] = t[r]);
  return {
    $$typeof: Vc,
    type: e,
    key: o,
    ref: i,
    props: l,
    _owner: Kc.current,
  };
}
yl.Fragment = Wc;
yl.jsx = ws;
yl.jsxs = ws;
cs.exports = yl;
var y = cs.exports,
  oo = {},
  xs = { exports: {} },
  Re = {},
  ks = { exports: {} },
  Ss = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(E, L) {
    var M = E.length;
    E.push(L);
    e: for (; 0 < M; ) {
      var $ = (M - 1) >>> 1,
        Q = E[$];
      if (0 < l(Q, L)) (E[$] = L), (E[M] = Q), (M = $);
      else break e;
    }
  }
  function n(E) {
    return E.length === 0 ? null : E[0];
  }
  function r(E) {
    if (E.length === 0) return null;
    var L = E[0],
      M = E.pop();
    if (M !== L) {
      E[0] = M;
      e: for (var $ = 0, Q = E.length, ye = Q >>> 1; $ < ye; ) {
        var ee = 2 * ($ + 1) - 1,
          Se = E[ee],
          ie = ee + 1,
          J = E[ie];
        if (0 > l(Se, M))
          ie < Q && 0 > l(J, Se)
            ? ((E[$] = J), (E[ie] = M), ($ = ie))
            : ((E[$] = Se), (E[ee] = M), ($ = ee));
        else if (ie < Q && 0 > l(J, M)) (E[$] = J), (E[ie] = M), ($ = ie);
        else break e;
      }
    }
    return L;
  }
  function l(E, L) {
    var M = E.sortIndex - L.sortIndex;
    return M !== 0 ? M : E.id - L.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var o = performance;
    e.unstable_now = function () {
      return o.now();
    };
  } else {
    var i = Date,
      u = i.now();
    e.unstable_now = function () {
      return i.now() - u;
    };
  }
  var s = [],
    a = [],
    h = 1,
    p = null,
    m = 3,
    v = !1,
    w = !1,
    k = !1,
    R = typeof setTimeout == "function" ? setTimeout : null,
    f = typeof clearTimeout == "function" ? clearTimeout : null,
    c = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function d(E) {
    for (var L = n(a); L !== null; ) {
      if (L.callback === null) r(a);
      else if (L.startTime <= E)
        r(a), (L.sortIndex = L.expirationTime), t(s, L);
      else break;
      L = n(a);
    }
  }
  function g(E) {
    if (((k = !1), d(E), !w))
      if (n(s) !== null) (w = !0), ve(C);
      else {
        var L = n(a);
        L !== null && Ie(g, L.startTime - E);
      }
  }
  function C(E, L) {
    (w = !1), k && ((k = !1), f(S), (S = -1)), (v = !0);
    var M = m;
    try {
      for (
        d(L), p = n(s);
        p !== null && (!(p.expirationTime > L) || (E && !P()));

      ) {
        var $ = p.callback;
        if (typeof $ == "function") {
          (p.callback = null), (m = p.priorityLevel);
          var Q = $(p.expirationTime <= L);
          (L = e.unstable_now()),
            typeof Q == "function" ? (p.callback = Q) : p === n(s) && r(s),
            d(L);
        } else r(s);
        p = n(s);
      }
      if (p !== null) var ye = !0;
      else {
        var ee = n(a);
        ee !== null && Ie(g, ee.startTime - L), (ye = !1);
      }
      return ye;
    } finally {
      (p = null), (m = M), (v = !1);
    }
  }
  var _ = !1,
    j = null,
    S = -1,
    F = 5,
    O = -1;
  function P() {
    return !(e.unstable_now() - O < F);
  }
  function N() {
    if (j !== null) {
      var E = e.unstable_now();
      O = E;
      var L = !0;
      try {
        L = j(!0, E);
      } finally {
        L ? D() : ((_ = !1), (j = null));
      }
    } else _ = !1;
  }
  var D;
  if (typeof c == "function")
    D = function () {
      c(N);
    };
  else if (typeof MessageChannel < "u") {
    var T = new MessageChannel(),
      oe = T.port2;
    (T.port1.onmessage = N),
      (D = function () {
        oe.postMessage(null);
      });
  } else
    D = function () {
      R(N, 0);
    };
  function ve(E) {
    (j = E), _ || ((_ = !0), D());
  }
  function Ie(E, L) {
    S = R(function () {
      E(e.unstable_now());
    }, L);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (E) {
      E.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      w || v || ((w = !0), ve(C));
    }),
    (e.unstable_forceFrameRate = function (E) {
      0 > E || 125 < E
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (F = 0 < E ? Math.floor(1e3 / E) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return m;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(s);
    }),
    (e.unstable_next = function (E) {
      switch (m) {
        case 1:
        case 2:
        case 3:
          var L = 3;
          break;
        default:
          L = m;
      }
      var M = m;
      m = L;
      try {
        return E();
      } finally {
        m = M;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (E, L) {
      switch (E) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          E = 3;
      }
      var M = m;
      m = E;
      try {
        return L();
      } finally {
        m = M;
      }
    }),
    (e.unstable_scheduleCallback = function (E, L, M) {
      var $ = e.unstable_now();
      switch (
        (typeof M == "object" && M !== null
          ? ((M = M.delay), (M = typeof M == "number" && 0 < M ? $ + M : $))
          : (M = $),
        E)
      ) {
        case 1:
          var Q = -1;
          break;
        case 2:
          Q = 250;
          break;
        case 5:
          Q = 1073741823;
          break;
        case 4:
          Q = 1e4;
          break;
        default:
          Q = 5e3;
      }
      return (
        (Q = M + Q),
        (E = {
          id: h++,
          callback: L,
          priorityLevel: E,
          startTime: M,
          expirationTime: Q,
          sortIndex: -1,
        }),
        M > $
          ? ((E.sortIndex = M),
            t(a, E),
            n(s) === null &&
              E === n(a) &&
              (k ? (f(S), (S = -1)) : (k = !0), Ie(g, M - $)))
          : ((E.sortIndex = Q), t(s, E), w || v || ((w = !0), ve(C))),
        E
      );
    }),
    (e.unstable_shouldYield = P),
    (e.unstable_wrapCallback = function (E) {
      var L = m;
      return function () {
        var M = m;
        m = L;
        try {
          return E.apply(this, arguments);
        } finally {
          m = M;
        }
      };
    });
})(Ss);
ks.exports = Ss;
var Zc = ks.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Es = qe,
  Me = Zc;
function x(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var Cs = new Set(),
  Gn = {};
function Jt(e, t) {
  wn(e, t), wn(e + "Capture", t);
}
function wn(e, t) {
  for (Gn[e] = t, e = 0; e < t.length; e++) Cs.add(t[e]);
}
var st = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  io = Object.prototype.hasOwnProperty,
  Xc =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Ji = {},
  qi = {};
function Gc(e) {
  return io.call(qi, e)
    ? !0
    : io.call(Ji, e)
    ? !1
    : Xc.test(e)
    ? (qi[e] = !0)
    : ((Ji[e] = !0), !1);
}
function Jc(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function qc(e, t, n, r) {
  if (t === null || typeof t > "u" || Jc(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function ke(e, t, n, r, l, o, i) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = l),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = o),
    (this.removeEmptyString = i);
}
var fe = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    fe[e] = new ke(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  fe[t] = new ke(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  fe[e] = new ke(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  fe[e] = new ke(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    fe[e] = new ke(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  fe[e] = new ke(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  fe[e] = new ke(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  fe[e] = new ke(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  fe[e] = new ke(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var ri = /[\-:]([a-z])/g;
function li(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(ri, li);
    fe[t] = new ke(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(ri, li);
    fe[t] = new ke(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(ri, li);
  fe[t] = new ke(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  fe[e] = new ke(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
fe.xlinkHref = new ke(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  fe[e] = new ke(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function oi(e, t, n, r) {
  var l = fe.hasOwnProperty(t) ? fe[t] : null;
  (l !== null
    ? l.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (qc(t, n, l, r) && (n = null),
    r || l === null
      ? Gc(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : l.mustUseProperty
      ? (e[l.propertyName] = n === null ? (l.type === 3 ? !1 : "") : n)
      : ((t = l.attributeName),
        (r = l.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((l = l.type),
            (n = l === 3 || (l === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var dt = Es.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  wr = Symbol.for("react.element"),
  en = Symbol.for("react.portal"),
  tn = Symbol.for("react.fragment"),
  ii = Symbol.for("react.strict_mode"),
  uo = Symbol.for("react.profiler"),
  _s = Symbol.for("react.provider"),
  Ns = Symbol.for("react.context"),
  ui = Symbol.for("react.forward_ref"),
  so = Symbol.for("react.suspense"),
  ao = Symbol.for("react.suspense_list"),
  si = Symbol.for("react.memo"),
  gt = Symbol.for("react.lazy"),
  zs = Symbol.for("react.offscreen"),
  bi = Symbol.iterator;
function Pn(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (bi && e[bi]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var G = Object.assign,
  Rl;
function Fn(e) {
  if (Rl === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Rl = (t && t[1]) || "";
    }
  return (
    `
` +
    Rl +
    e
  );
}
var Dl = !1;
function Il(e, t) {
  if (!e || Dl) return "";
  Dl = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (a) {
          var r = a;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (a) {
          r = a;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (a) {
        r = a;
      }
      e();
    }
  } catch (a) {
    if (a && r && typeof a.stack == "string") {
      for (
        var l = a.stack.split(`
`),
          o = r.stack.split(`
`),
          i = l.length - 1,
          u = o.length - 1;
        1 <= i && 0 <= u && l[i] !== o[u];

      )
        u--;
      for (; 1 <= i && 0 <= u; i--, u--)
        if (l[i] !== o[u]) {
          if (i !== 1 || u !== 1)
            do
              if ((i--, u--, 0 > u || l[i] !== o[u])) {
                var s =
                  `
` + l[i].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    s.includes("<anonymous>") &&
                    (s = s.replace("<anonymous>", e.displayName)),
                  s
                );
              }
            while (1 <= i && 0 <= u);
          break;
        }
    }
  } finally {
    (Dl = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? Fn(e) : "";
}
function bc(e) {
  switch (e.tag) {
    case 5:
      return Fn(e.type);
    case 16:
      return Fn("Lazy");
    case 13:
      return Fn("Suspense");
    case 19:
      return Fn("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Il(e.type, !1)), e;
    case 11:
      return (e = Il(e.type.render, !1)), e;
    case 1:
      return (e = Il(e.type, !0)), e;
    default:
      return "";
  }
}
function co(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case tn:
      return "Fragment";
    case en:
      return "Portal";
    case uo:
      return "Profiler";
    case ii:
      return "StrictMode";
    case so:
      return "Suspense";
    case ao:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Ns:
        return (e.displayName || "Context") + ".Consumer";
      case _s:
        return (e._context.displayName || "Context") + ".Provider";
      case ui:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case si:
        return (
          (t = e.displayName || null), t !== null ? t : co(e.type) || "Memo"
        );
      case gt:
        (t = e._payload), (e = e._init);
        try {
          return co(e(t));
        } catch {}
    }
  return null;
}
function ef(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return co(t);
    case 8:
      return t === ii ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function Rt(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function js(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function tf(e) {
  var t = js(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var l = n.get,
      o = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return l.call(this);
        },
        set: function (i) {
          (r = "" + i), o.call(this, i);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (i) {
          r = "" + i;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function xr(e) {
  e._valueTracker || (e._valueTracker = tf(e));
}
function Ps(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = js(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Yr(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function fo(e, t) {
  var n = t.checked;
  return G({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function eu(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = Rt(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function Ls(e, t) {
  (t = t.checked), t != null && oi(e, "checked", t, !1);
}
function po(e, t) {
  Ls(e, t);
  var n = Rt(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? mo(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && mo(e, t.type, Rt(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function tu(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function mo(e, t, n) {
  (t !== "number" || Yr(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Bn = Array.isArray;
function pn(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
    for (n = 0; n < e.length; n++)
      (l = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== l && (e[n].selected = l),
        l && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + Rt(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        (e[l].selected = !0), r && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function ho(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(x(91));
  return G({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function nu(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(x(92));
      if (Bn(n)) {
        if (1 < n.length) throw Error(x(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: Rt(n) };
}
function Ts(e, t) {
  var n = Rt(t.value),
    r = Rt(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function ru(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Os(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function vo(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Os(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var kr,
  Ms = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, l) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, l);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        kr = kr || document.createElement("div"),
          kr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = kr.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Jn(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Hn = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  nf = ["Webkit", "ms", "Moz", "O"];
Object.keys(Hn).forEach(function (e) {
  nf.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Hn[t] = Hn[e]);
  });
});
function Rs(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Hn.hasOwnProperty(e) && Hn[e])
    ? ("" + t).trim()
    : t + "px";
}
function Ds(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        l = Rs(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : (e[n] = l);
    }
}
var rf = G(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function yo(e, t) {
  if (t) {
    if (rf[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(x(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(x(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(x(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(x(62));
  }
}
function go(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var wo = null;
function ai(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var xo = null,
  mn = null,
  hn = null;
function lu(e) {
  if ((e = vr(e))) {
    if (typeof xo != "function") throw Error(x(280));
    var t = e.stateNode;
    t && ((t = Sl(t)), xo(e.stateNode, e.type, t));
  }
}
function Is(e) {
  mn ? (hn ? hn.push(e) : (hn = [e])) : (mn = e);
}
function Fs() {
  if (mn) {
    var e = mn,
      t = hn;
    if (((hn = mn = null), lu(e), t)) for (e = 0; e < t.length; e++) lu(t[e]);
  }
}
function Bs(e, t) {
  return e(t);
}
function As() {}
var Fl = !1;
function Us(e, t, n) {
  if (Fl) return e(t, n);
  Fl = !0;
  try {
    return Bs(e, t, n);
  } finally {
    (Fl = !1), (mn !== null || hn !== null) && (As(), Fs());
  }
}
function qn(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Sl(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(x(231, t, typeof n));
  return n;
}
var ko = !1;
if (st)
  try {
    var Ln = {};
    Object.defineProperty(Ln, "passive", {
      get: function () {
        ko = !0;
      },
    }),
      window.addEventListener("test", Ln, Ln),
      window.removeEventListener("test", Ln, Ln);
  } catch {
    ko = !1;
  }
function lf(e, t, n, r, l, o, i, u, s) {
  var a = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, a);
  } catch (h) {
    this.onError(h);
  }
}
var $n = !1,
  Zr = null,
  Xr = !1,
  So = null,
  of = {
    onError: function (e) {
      ($n = !0), (Zr = e);
    },
  };
function uf(e, t, n, r, l, o, i, u, s) {
  ($n = !1), (Zr = null), lf.apply(of, arguments);
}
function sf(e, t, n, r, l, o, i, u, s) {
  if ((uf.apply(this, arguments), $n)) {
    if ($n) {
      var a = Zr;
      ($n = !1), (Zr = null);
    } else throw Error(x(198));
    Xr || ((Xr = !0), (So = a));
  }
}
function qt(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function Hs(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function ou(e) {
  if (qt(e) !== e) throw Error(x(188));
}
function af(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = qt(e)), t === null)) throw Error(x(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var l = n.return;
    if (l === null) break;
    var o = l.alternate;
    if (o === null) {
      if (((r = l.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (l.child === o.child) {
      for (o = l.child; o; ) {
        if (o === n) return ou(l), e;
        if (o === r) return ou(l), t;
        o = o.sibling;
      }
      throw Error(x(188));
    }
    if (n.return !== r.return) (n = l), (r = o);
    else {
      for (var i = !1, u = l.child; u; ) {
        if (u === n) {
          (i = !0), (n = l), (r = o);
          break;
        }
        if (u === r) {
          (i = !0), (r = l), (n = o);
          break;
        }
        u = u.sibling;
      }
      if (!i) {
        for (u = o.child; u; ) {
          if (u === n) {
            (i = !0), (n = o), (r = l);
            break;
          }
          if (u === r) {
            (i = !0), (r = o), (n = l);
            break;
          }
          u = u.sibling;
        }
        if (!i) throw Error(x(189));
      }
    }
    if (n.alternate !== r) throw Error(x(190));
  }
  if (n.tag !== 3) throw Error(x(188));
  return n.stateNode.current === n ? e : t;
}
function $s(e) {
  return (e = af(e)), e !== null ? Vs(e) : null;
}
function Vs(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Vs(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Ws = Me.unstable_scheduleCallback,
  iu = Me.unstable_cancelCallback,
  cf = Me.unstable_shouldYield,
  ff = Me.unstable_requestPaint,
  b = Me.unstable_now,
  df = Me.unstable_getCurrentPriorityLevel,
  ci = Me.unstable_ImmediatePriority,
  Qs = Me.unstable_UserBlockingPriority,
  Gr = Me.unstable_NormalPriority,
  pf = Me.unstable_LowPriority,
  Ks = Me.unstable_IdlePriority,
  gl = null,
  et = null;
function mf(e) {
  if (et && typeof et.onCommitFiberRoot == "function")
    try {
      et.onCommitFiberRoot(gl, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Ye = Math.clz32 ? Math.clz32 : yf,
  hf = Math.log,
  vf = Math.LN2;
function yf(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((hf(e) / vf) | 0)) | 0;
}
var Sr = 64,
  Er = 4194304;
function An(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Jr(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    l = e.suspendedLanes,
    o = e.pingedLanes,
    i = n & 268435455;
  if (i !== 0) {
    var u = i & ~l;
    u !== 0 ? (r = An(u)) : ((o &= i), o !== 0 && (r = An(o)));
  } else (i = n & ~l), i !== 0 ? (r = An(i)) : o !== 0 && (r = An(o));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & l) &&
    ((l = r & -r), (o = t & -t), l >= o || (l === 16 && (o & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - Ye(t)), (l = 1 << n), (r |= e[n]), (t &= ~l);
  return r;
}
function gf(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function wf(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      l = e.expirationTimes,
      o = e.pendingLanes;
    0 < o;

  ) {
    var i = 31 - Ye(o),
      u = 1 << i,
      s = l[i];
    s === -1
      ? (!(u & n) || u & r) && (l[i] = gf(u, t))
      : s <= t && (e.expiredLanes |= u),
      (o &= ~u);
  }
}
function Eo(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Ys() {
  var e = Sr;
  return (Sr <<= 1), !(Sr & 4194240) && (Sr = 64), e;
}
function Bl(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function mr(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Ye(t)),
    (e[t] = n);
}
function xf(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var l = 31 - Ye(n),
      o = 1 << l;
    (t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~o);
  }
}
function fi(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Ye(n),
      l = 1 << r;
    (l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l);
  }
}
var A = 0;
function Zs(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Xs,
  di,
  Gs,
  Js,
  qs,
  Co = !1,
  Cr = [],
  _t = null,
  Nt = null,
  zt = null,
  bn = new Map(),
  er = new Map(),
  xt = [],
  kf =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function uu(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      _t = null;
      break;
    case "dragenter":
    case "dragleave":
      Nt = null;
      break;
    case "mouseover":
    case "mouseout":
      zt = null;
      break;
    case "pointerover":
    case "pointerout":
      bn.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      er.delete(t.pointerId);
  }
}
function Tn(e, t, n, r, l, o) {
  return e === null || e.nativeEvent !== o
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [l],
      }),
      t !== null && ((t = vr(t)), t !== null && di(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      l !== null && t.indexOf(l) === -1 && t.push(l),
      e);
}
function Sf(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return (_t = Tn(_t, e, t, n, r, l)), !0;
    case "dragenter":
      return (Nt = Tn(Nt, e, t, n, r, l)), !0;
    case "mouseover":
      return (zt = Tn(zt, e, t, n, r, l)), !0;
    case "pointerover":
      var o = l.pointerId;
      return bn.set(o, Tn(bn.get(o) || null, e, t, n, r, l)), !0;
    case "gotpointercapture":
      return (
        (o = l.pointerId), er.set(o, Tn(er.get(o) || null, e, t, n, r, l)), !0
      );
  }
  return !1;
}
function bs(e) {
  var t = Ht(e.target);
  if (t !== null) {
    var n = qt(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Hs(n)), t !== null)) {
          (e.blockedOn = t),
            qs(e.priority, function () {
              Gs(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Fr(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = _o(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (wo = r), n.target.dispatchEvent(r), (wo = null);
    } else return (t = vr(n)), t !== null && di(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function su(e, t, n) {
  Fr(e) && n.delete(t);
}
function Ef() {
  (Co = !1),
    _t !== null && Fr(_t) && (_t = null),
    Nt !== null && Fr(Nt) && (Nt = null),
    zt !== null && Fr(zt) && (zt = null),
    bn.forEach(su),
    er.forEach(su);
}
function On(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Co ||
      ((Co = !0),
      Me.unstable_scheduleCallback(Me.unstable_NormalPriority, Ef)));
}
function tr(e) {
  function t(l) {
    return On(l, e);
  }
  if (0 < Cr.length) {
    On(Cr[0], e);
    for (var n = 1; n < Cr.length; n++) {
      var r = Cr[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    _t !== null && On(_t, e),
      Nt !== null && On(Nt, e),
      zt !== null && On(zt, e),
      bn.forEach(t),
      er.forEach(t),
      n = 0;
    n < xt.length;
    n++
  )
    (r = xt[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < xt.length && ((n = xt[0]), n.blockedOn === null); )
    bs(n), n.blockedOn === null && xt.shift();
}
var vn = dt.ReactCurrentBatchConfig,
  qr = !0;
function Cf(e, t, n, r) {
  var l = A,
    o = vn.transition;
  vn.transition = null;
  try {
    (A = 1), pi(e, t, n, r);
  } finally {
    (A = l), (vn.transition = o);
  }
}
function _f(e, t, n, r) {
  var l = A,
    o = vn.transition;
  vn.transition = null;
  try {
    (A = 4), pi(e, t, n, r);
  } finally {
    (A = l), (vn.transition = o);
  }
}
function pi(e, t, n, r) {
  if (qr) {
    var l = _o(e, t, n, r);
    if (l === null) Zl(e, t, r, br, n), uu(e, r);
    else if (Sf(l, e, t, n, r)) r.stopPropagation();
    else if ((uu(e, r), t & 4 && -1 < kf.indexOf(e))) {
      for (; l !== null; ) {
        var o = vr(l);
        if (
          (o !== null && Xs(o),
          (o = _o(e, t, n, r)),
          o === null && Zl(e, t, r, br, n),
          o === l)
        )
          break;
        l = o;
      }
      l !== null && r.stopPropagation();
    } else Zl(e, t, r, null, n);
  }
}
var br = null;
function _o(e, t, n, r) {
  if (((br = null), (e = ai(r)), (e = Ht(e)), e !== null))
    if (((t = qt(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Hs(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (br = e), null;
}
function ea(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (df()) {
        case ci:
          return 1;
        case Qs:
          return 4;
        case Gr:
        case pf:
          return 16;
        case Ks:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var St = null,
  mi = null,
  Br = null;
function ta() {
  if (Br) return Br;
  var e,
    t = mi,
    n = t.length,
    r,
    l = "value" in St ? St.value : St.textContent,
    o = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++);
  var i = n - e;
  for (r = 1; r <= i && t[n - r] === l[o - r]; r++);
  return (Br = l.slice(e, 1 < r ? 1 - r : void 0));
}
function Ar(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function _r() {
  return !0;
}
function au() {
  return !1;
}
function De(e) {
  function t(n, r, l, o, i) {
    (this._reactName = n),
      (this._targetInst = l),
      (this.type = r),
      (this.nativeEvent = o),
      (this.target = i),
      (this.currentTarget = null);
    for (var u in e)
      e.hasOwnProperty(u) && ((n = e[u]), (this[u] = n ? n(o) : o[u]));
    return (
      (this.isDefaultPrevented = (
        o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
      )
        ? _r
        : au),
      (this.isPropagationStopped = au),
      this
    );
  }
  return (
    G(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = _r));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = _r));
      },
      persist: function () {},
      isPersistent: _r,
    }),
    t
  );
}
var zn = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  hi = De(zn),
  hr = G({}, zn, { view: 0, detail: 0 }),
  Nf = De(hr),
  Al,
  Ul,
  Mn,
  wl = G({}, hr, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: vi,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== Mn &&
            (Mn && e.type === "mousemove"
              ? ((Al = e.screenX - Mn.screenX), (Ul = e.screenY - Mn.screenY))
              : (Ul = Al = 0),
            (Mn = e)),
          Al);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Ul;
    },
  }),
  cu = De(wl),
  zf = G({}, wl, { dataTransfer: 0 }),
  jf = De(zf),
  Pf = G({}, hr, { relatedTarget: 0 }),
  Hl = De(Pf),
  Lf = G({}, zn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Tf = De(Lf),
  Of = G({}, zn, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  Mf = De(Of),
  Rf = G({}, zn, { data: 0 }),
  fu = De(Rf),
  Df = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  If = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  Ff = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function Bf(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Ff[e]) ? !!t[e] : !1;
}
function vi() {
  return Bf;
}
var Af = G({}, hr, {
    key: function (e) {
      if (e.key) {
        var t = Df[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Ar(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? If[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: vi,
    charCode: function (e) {
      return e.type === "keypress" ? Ar(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Ar(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  Uf = De(Af),
  Hf = G({}, wl, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  du = De(Hf),
  $f = G({}, hr, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: vi,
  }),
  Vf = De($f),
  Wf = G({}, zn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Qf = De(Wf),
  Kf = G({}, wl, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  Yf = De(Kf),
  Zf = [9, 13, 27, 32],
  yi = st && "CompositionEvent" in window,
  Vn = null;
st && "documentMode" in document && (Vn = document.documentMode);
var Xf = st && "TextEvent" in window && !Vn,
  na = st && (!yi || (Vn && 8 < Vn && 11 >= Vn)),
  pu = " ",
  mu = !1;
function ra(e, t) {
  switch (e) {
    case "keyup":
      return Zf.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function la(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var nn = !1;
function Gf(e, t) {
  switch (e) {
    case "compositionend":
      return la(t);
    case "keypress":
      return t.which !== 32 ? null : ((mu = !0), pu);
    case "textInput":
      return (e = t.data), e === pu && mu ? null : e;
    default:
      return null;
  }
}
function Jf(e, t) {
  if (nn)
    return e === "compositionend" || (!yi && ra(e, t))
      ? ((e = ta()), (Br = mi = St = null), (nn = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return na && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var qf = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function hu(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!qf[e.type] : t === "textarea";
}
function oa(e, t, n, r) {
  Is(r),
    (t = el(t, "onChange")),
    0 < t.length &&
      ((n = new hi("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var Wn = null,
  nr = null;
function bf(e) {
  va(e, 0);
}
function xl(e) {
  var t = on(e);
  if (Ps(t)) return e;
}
function ed(e, t) {
  if (e === "change") return t;
}
var ia = !1;
if (st) {
  var $l;
  if (st) {
    var Vl = "oninput" in document;
    if (!Vl) {
      var vu = document.createElement("div");
      vu.setAttribute("oninput", "return;"),
        (Vl = typeof vu.oninput == "function");
    }
    $l = Vl;
  } else $l = !1;
  ia = $l && (!document.documentMode || 9 < document.documentMode);
}
function yu() {
  Wn && (Wn.detachEvent("onpropertychange", ua), (nr = Wn = null));
}
function ua(e) {
  if (e.propertyName === "value" && xl(nr)) {
    var t = [];
    oa(t, nr, e, ai(e)), Us(bf, t);
  }
}
function td(e, t, n) {
  e === "focusin"
    ? (yu(), (Wn = t), (nr = n), Wn.attachEvent("onpropertychange", ua))
    : e === "focusout" && yu();
}
function nd(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return xl(nr);
}
function rd(e, t) {
  if (e === "click") return xl(t);
}
function ld(e, t) {
  if (e === "input" || e === "change") return xl(t);
}
function od(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Xe = typeof Object.is == "function" ? Object.is : od;
function rr(e, t) {
  if (Xe(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!io.call(t, l) || !Xe(e[l], t[l])) return !1;
  }
  return !0;
}
function gu(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function wu(e, t) {
  var n = gu(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = gu(n);
  }
}
function sa(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? sa(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function aa() {
  for (var e = window, t = Yr(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Yr(e.document);
  }
  return t;
}
function gi(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function id(e) {
  var t = aa(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    sa(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && gi(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var l = n.textContent.length,
          o = Math.min(r.start, l);
        (r = r.end === void 0 ? o : Math.min(r.end, l)),
          !e.extend && o > r && ((l = r), (r = o), (o = l)),
          (l = wu(n, o));
        var i = wu(n, r);
        l &&
          i &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== l.node ||
            e.anchorOffset !== l.offset ||
            e.focusNode !== i.node ||
            e.focusOffset !== i.offset) &&
          ((t = t.createRange()),
          t.setStart(l.node, l.offset),
          e.removeAllRanges(),
          o > r
            ? (e.addRange(t), e.extend(i.node, i.offset))
            : (t.setEnd(i.node, i.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var ud = st && "documentMode" in document && 11 >= document.documentMode,
  rn = null,
  No = null,
  Qn = null,
  zo = !1;
function xu(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  zo ||
    rn == null ||
    rn !== Yr(r) ||
    ((r = rn),
    "selectionStart" in r && gi(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Qn && rr(Qn, r)) ||
      ((Qn = r),
      (r = el(No, "onSelect")),
      0 < r.length &&
        ((t = new hi("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = rn))));
}
function Nr(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var ln = {
    animationend: Nr("Animation", "AnimationEnd"),
    animationiteration: Nr("Animation", "AnimationIteration"),
    animationstart: Nr("Animation", "AnimationStart"),
    transitionend: Nr("Transition", "TransitionEnd"),
  },
  Wl = {},
  ca = {};
st &&
  ((ca = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete ln.animationend.animation,
    delete ln.animationiteration.animation,
    delete ln.animationstart.animation),
  "TransitionEvent" in window || delete ln.transitionend.transition);
function kl(e) {
  if (Wl[e]) return Wl[e];
  if (!ln[e]) return e;
  var t = ln[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in ca) return (Wl[e] = t[n]);
  return e;
}
var fa = kl("animationend"),
  da = kl("animationiteration"),
  pa = kl("animationstart"),
  ma = kl("transitionend"),
  ha = new Map(),
  ku =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function It(e, t) {
  ha.set(e, t), Jt(t, [e]);
}
for (var Ql = 0; Ql < ku.length; Ql++) {
  var Kl = ku[Ql],
    sd = Kl.toLowerCase(),
    ad = Kl[0].toUpperCase() + Kl.slice(1);
  It(sd, "on" + ad);
}
It(fa, "onAnimationEnd");
It(da, "onAnimationIteration");
It(pa, "onAnimationStart");
It("dblclick", "onDoubleClick");
It("focusin", "onFocus");
It("focusout", "onBlur");
It(ma, "onTransitionEnd");
wn("onMouseEnter", ["mouseout", "mouseover"]);
wn("onMouseLeave", ["mouseout", "mouseover"]);
wn("onPointerEnter", ["pointerout", "pointerover"]);
wn("onPointerLeave", ["pointerout", "pointerover"]);
Jt(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
Jt(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
Jt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Jt(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
Jt(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
Jt(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var Un =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  cd = new Set("cancel close invalid load scroll toggle".split(" ").concat(Un));
function Su(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), sf(r, t, void 0, e), (e.currentTarget = null);
}
function va(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      l = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t)
        for (var i = r.length - 1; 0 <= i; i--) {
          var u = r[i],
            s = u.instance,
            a = u.currentTarget;
          if (((u = u.listener), s !== o && l.isPropagationStopped())) break e;
          Su(l, u, a), (o = s);
        }
      else
        for (i = 0; i < r.length; i++) {
          if (
            ((u = r[i]),
            (s = u.instance),
            (a = u.currentTarget),
            (u = u.listener),
            s !== o && l.isPropagationStopped())
          )
            break e;
          Su(l, u, a), (o = s);
        }
    }
  }
  if (Xr) throw ((e = So), (Xr = !1), (So = null), e);
}
function V(e, t) {
  var n = t[Oo];
  n === void 0 && (n = t[Oo] = new Set());
  var r = e + "__bubble";
  n.has(r) || (ya(t, e, 2, !1), n.add(r));
}
function Yl(e, t, n) {
  var r = 0;
  t && (r |= 4), ya(n, e, r, t);
}
var zr = "_reactListening" + Math.random().toString(36).slice(2);
function lr(e) {
  if (!e[zr]) {
    (e[zr] = !0),
      Cs.forEach(function (n) {
        n !== "selectionchange" && (cd.has(n) || Yl(n, !1, e), Yl(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[zr] || ((t[zr] = !0), Yl("selectionchange", !1, t));
  }
}
function ya(e, t, n, r) {
  switch (ea(t)) {
    case 1:
      var l = Cf;
      break;
    case 4:
      l = _f;
      break;
    default:
      l = pi;
  }
  (n = l.bind(null, t, n, e)),
    (l = void 0),
    !ko ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (l = !0),
    r
      ? l !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: l })
        : e.addEventListener(t, n, !0)
      : l !== void 0
      ? e.addEventListener(t, n, { passive: l })
      : e.addEventListener(t, n, !1);
}
function Zl(e, t, n, r, l) {
  var o = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var i = r.tag;
      if (i === 3 || i === 4) {
        var u = r.stateNode.containerInfo;
        if (u === l || (u.nodeType === 8 && u.parentNode === l)) break;
        if (i === 4)
          for (i = r.return; i !== null; ) {
            var s = i.tag;
            if (
              (s === 3 || s === 4) &&
              ((s = i.stateNode.containerInfo),
              s === l || (s.nodeType === 8 && s.parentNode === l))
            )
              return;
            i = i.return;
          }
        for (; u !== null; ) {
          if (((i = Ht(u)), i === null)) return;
          if (((s = i.tag), s === 5 || s === 6)) {
            r = o = i;
            continue e;
          }
          u = u.parentNode;
        }
      }
      r = r.return;
    }
  Us(function () {
    var a = o,
      h = ai(n),
      p = [];
    e: {
      var m = ha.get(e);
      if (m !== void 0) {
        var v = hi,
          w = e;
        switch (e) {
          case "keypress":
            if (Ar(n) === 0) break e;
          case "keydown":
          case "keyup":
            v = Uf;
            break;
          case "focusin":
            (w = "focus"), (v = Hl);
            break;
          case "focusout":
            (w = "blur"), (v = Hl);
            break;
          case "beforeblur":
          case "afterblur":
            v = Hl;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            v = cu;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            v = jf;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            v = Vf;
            break;
          case fa:
          case da:
          case pa:
            v = Tf;
            break;
          case ma:
            v = Qf;
            break;
          case "scroll":
            v = Nf;
            break;
          case "wheel":
            v = Yf;
            break;
          case "copy":
          case "cut":
          case "paste":
            v = Mf;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            v = du;
        }
        var k = (t & 4) !== 0,
          R = !k && e === "scroll",
          f = k ? (m !== null ? m + "Capture" : null) : m;
        k = [];
        for (var c = a, d; c !== null; ) {
          d = c;
          var g = d.stateNode;
          if (
            (d.tag === 5 &&
              g !== null &&
              ((d = g),
              f !== null && ((g = qn(c, f)), g != null && k.push(or(c, g, d)))),
            R)
          )
            break;
          c = c.return;
        }
        0 < k.length &&
          ((m = new v(m, w, null, n, h)), p.push({ event: m, listeners: k }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((m = e === "mouseover" || e === "pointerover"),
          (v = e === "mouseout" || e === "pointerout"),
          m &&
            n !== wo &&
            (w = n.relatedTarget || n.fromElement) &&
            (Ht(w) || w[at]))
        )
          break e;
        if (
          (v || m) &&
          ((m =
            h.window === h
              ? h
              : (m = h.ownerDocument)
              ? m.defaultView || m.parentWindow
              : window),
          v
            ? ((w = n.relatedTarget || n.toElement),
              (v = a),
              (w = w ? Ht(w) : null),
              w !== null &&
                ((R = qt(w)), w !== R || (w.tag !== 5 && w.tag !== 6)) &&
                (w = null))
            : ((v = null), (w = a)),
          v !== w)
        ) {
          if (
            ((k = cu),
            (g = "onMouseLeave"),
            (f = "onMouseEnter"),
            (c = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((k = du),
              (g = "onPointerLeave"),
              (f = "onPointerEnter"),
              (c = "pointer")),
            (R = v == null ? m : on(v)),
            (d = w == null ? m : on(w)),
            (m = new k(g, c + "leave", v, n, h)),
            (m.target = R),
            (m.relatedTarget = d),
            (g = null),
            Ht(h) === a &&
              ((k = new k(f, c + "enter", w, n, h)),
              (k.target = d),
              (k.relatedTarget = R),
              (g = k)),
            (R = g),
            v && w)
          )
            t: {
              for (k = v, f = w, c = 0, d = k; d; d = bt(d)) c++;
              for (d = 0, g = f; g; g = bt(g)) d++;
              for (; 0 < c - d; ) (k = bt(k)), c--;
              for (; 0 < d - c; ) (f = bt(f)), d--;
              for (; c--; ) {
                if (k === f || (f !== null && k === f.alternate)) break t;
                (k = bt(k)), (f = bt(f));
              }
              k = null;
            }
          else k = null;
          v !== null && Eu(p, m, v, k, !1),
            w !== null && R !== null && Eu(p, R, w, k, !0);
        }
      }
      e: {
        if (
          ((m = a ? on(a) : window),
          (v = m.nodeName && m.nodeName.toLowerCase()),
          v === "select" || (v === "input" && m.type === "file"))
        )
          var C = ed;
        else if (hu(m))
          if (ia) C = ld;
          else {
            C = nd;
            var _ = td;
          }
        else
          (v = m.nodeName) &&
            v.toLowerCase() === "input" &&
            (m.type === "checkbox" || m.type === "radio") &&
            (C = rd);
        if (C && (C = C(e, a))) {
          oa(p, C, n, h);
          break e;
        }
        _ && _(e, m, a),
          e === "focusout" &&
            (_ = m._wrapperState) &&
            _.controlled &&
            m.type === "number" &&
            mo(m, "number", m.value);
      }
      switch (((_ = a ? on(a) : window), e)) {
        case "focusin":
          (hu(_) || _.contentEditable === "true") &&
            ((rn = _), (No = a), (Qn = null));
          break;
        case "focusout":
          Qn = No = rn = null;
          break;
        case "mousedown":
          zo = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (zo = !1), xu(p, n, h);
          break;
        case "selectionchange":
          if (ud) break;
        case "keydown":
        case "keyup":
          xu(p, n, h);
      }
      var j;
      if (yi)
        e: {
          switch (e) {
            case "compositionstart":
              var S = "onCompositionStart";
              break e;
            case "compositionend":
              S = "onCompositionEnd";
              break e;
            case "compositionupdate":
              S = "onCompositionUpdate";
              break e;
          }
          S = void 0;
        }
      else
        nn
          ? ra(e, n) && (S = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (S = "onCompositionStart");
      S &&
        (na &&
          n.locale !== "ko" &&
          (nn || S !== "onCompositionStart"
            ? S === "onCompositionEnd" && nn && (j = ta())
            : ((St = h),
              (mi = "value" in St ? St.value : St.textContent),
              (nn = !0))),
        (_ = el(a, S)),
        0 < _.length &&
          ((S = new fu(S, e, null, n, h)),
          p.push({ event: S, listeners: _ }),
          j ? (S.data = j) : ((j = la(n)), j !== null && (S.data = j)))),
        (j = Xf ? Gf(e, n) : Jf(e, n)) &&
          ((a = el(a, "onBeforeInput")),
          0 < a.length &&
            ((h = new fu("onBeforeInput", "beforeinput", null, n, h)),
            p.push({ event: h, listeners: a }),
            (h.data = j)));
    }
    va(p, t);
  });
}
function or(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function el(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var l = e,
      o = l.stateNode;
    l.tag === 5 &&
      o !== null &&
      ((l = o),
      (o = qn(e, n)),
      o != null && r.unshift(or(e, o, l)),
      (o = qn(e, t)),
      o != null && r.push(or(e, o, l))),
      (e = e.return);
  }
  return r;
}
function bt(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Eu(e, t, n, r, l) {
  for (var o = t._reactName, i = []; n !== null && n !== r; ) {
    var u = n,
      s = u.alternate,
      a = u.stateNode;
    if (s !== null && s === r) break;
    u.tag === 5 &&
      a !== null &&
      ((u = a),
      l
        ? ((s = qn(n, o)), s != null && i.unshift(or(n, s, u)))
        : l || ((s = qn(n, o)), s != null && i.push(or(n, s, u)))),
      (n = n.return);
  }
  i.length !== 0 && e.push({ event: t, listeners: i });
}
var fd = /\r\n?/g,
  dd = /\u0000|\uFFFD/g;
function Cu(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      fd,
      `
`
    )
    .replace(dd, "");
}
function jr(e, t, n) {
  if (((t = Cu(t)), Cu(e) !== t && n)) throw Error(x(425));
}
function tl() {}
var jo = null,
  Po = null;
function Lo(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var To = typeof setTimeout == "function" ? setTimeout : void 0,
  pd = typeof clearTimeout == "function" ? clearTimeout : void 0,
  _u = typeof Promise == "function" ? Promise : void 0,
  md =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof _u < "u"
      ? function (e) {
          return _u.resolve(null).then(e).catch(hd);
        }
      : To;
function hd(e) {
  setTimeout(function () {
    throw e;
  });
}
function Xl(e, t) {
  var n = t,
    r = 0;
  do {
    var l = n.nextSibling;
    if ((e.removeChild(n), l && l.nodeType === 8))
      if (((n = l.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(l), tr(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = l;
  } while (n);
  tr(t);
}
function jt(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function Nu(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var jn = Math.random().toString(36).slice(2),
  be = "__reactFiber$" + jn,
  ir = "__reactProps$" + jn,
  at = "__reactContainer$" + jn,
  Oo = "__reactEvents$" + jn,
  vd = "__reactListeners$" + jn,
  yd = "__reactHandles$" + jn;
function Ht(e) {
  var t = e[be];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[at] || n[be])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Nu(e); e !== null; ) {
          if ((n = e[be])) return n;
          e = Nu(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function vr(e) {
  return (
    (e = e[be] || e[at]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function on(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(x(33));
}
function Sl(e) {
  return e[ir] || null;
}
var Mo = [],
  un = -1;
function Ft(e) {
  return { current: e };
}
function W(e) {
  0 > un || ((e.current = Mo[un]), (Mo[un] = null), un--);
}
function H(e, t) {
  un++, (Mo[un] = e.current), (e.current = t);
}
var Dt = {},
  he = Ft(Dt),
  Ne = Ft(!1),
  Kt = Dt;
function xn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Dt;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var l = {},
    o;
  for (o in n) l[o] = t[o];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = l)),
    l
  );
}
function ze(e) {
  return (e = e.childContextTypes), e != null;
}
function nl() {
  W(Ne), W(he);
}
function zu(e, t, n) {
  if (he.current !== Dt) throw Error(x(168));
  H(he, t), H(Ne, n);
}
function ga(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(x(108, ef(e) || "Unknown", l));
  return G({}, n, r);
}
function rl(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Dt),
    (Kt = he.current),
    H(he, e),
    H(Ne, Ne.current),
    !0
  );
}
function ju(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(x(169));
  n
    ? ((e = ga(e, t, Kt)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      W(Ne),
      W(he),
      H(he, e))
    : W(Ne),
    H(Ne, n);
}
var lt = null,
  El = !1,
  Gl = !1;
function wa(e) {
  lt === null ? (lt = [e]) : lt.push(e);
}
function gd(e) {
  (El = !0), wa(e);
}
function Bt() {
  if (!Gl && lt !== null) {
    Gl = !0;
    var e = 0,
      t = A;
    try {
      var n = lt;
      for (A = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (lt = null), (El = !1);
    } catch (l) {
      throw (lt !== null && (lt = lt.slice(e + 1)), Ws(ci, Bt), l);
    } finally {
      (A = t), (Gl = !1);
    }
  }
  return null;
}
var sn = [],
  an = 0,
  ll = null,
  ol = 0,
  Fe = [],
  Be = 0,
  Yt = null,
  ot = 1,
  it = "";
function At(e, t) {
  (sn[an++] = ol), (sn[an++] = ll), (ll = e), (ol = t);
}
function xa(e, t, n) {
  (Fe[Be++] = ot), (Fe[Be++] = it), (Fe[Be++] = Yt), (Yt = e);
  var r = ot;
  e = it;
  var l = 32 - Ye(r) - 1;
  (r &= ~(1 << l)), (n += 1);
  var o = 32 - Ye(t) + l;
  if (30 < o) {
    var i = l - (l % 5);
    (o = (r & ((1 << i) - 1)).toString(32)),
      (r >>= i),
      (l -= i),
      (ot = (1 << (32 - Ye(t) + l)) | (n << l) | r),
      (it = o + e);
  } else (ot = (1 << o) | (n << l) | r), (it = e);
}
function wi(e) {
  e.return !== null && (At(e, 1), xa(e, 1, 0));
}
function xi(e) {
  for (; e === ll; )
    (ll = sn[--an]), (sn[an] = null), (ol = sn[--an]), (sn[an] = null);
  for (; e === Yt; )
    (Yt = Fe[--Be]),
      (Fe[Be] = null),
      (it = Fe[--Be]),
      (Fe[Be] = null),
      (ot = Fe[--Be]),
      (Fe[Be] = null);
}
var Oe = null,
  Te = null,
  K = !1,
  Ke = null;
function ka(e, t) {
  var n = Ae(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Pu(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Oe = e), (Te = jt(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Oe = e), (Te = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Yt !== null ? { id: ot, overflow: it } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Ae(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Oe = e),
            (Te = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Ro(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Do(e) {
  if (K) {
    var t = Te;
    if (t) {
      var n = t;
      if (!Pu(e, t)) {
        if (Ro(e)) throw Error(x(418));
        t = jt(n.nextSibling);
        var r = Oe;
        t && Pu(e, t)
          ? ka(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (K = !1), (Oe = e));
      }
    } else {
      if (Ro(e)) throw Error(x(418));
      (e.flags = (e.flags & -4097) | 2), (K = !1), (Oe = e);
    }
  }
}
function Lu(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Oe = e;
}
function Pr(e) {
  if (e !== Oe) return !1;
  if (!K) return Lu(e), (K = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Lo(e.type, e.memoizedProps))),
    t && (t = Te))
  ) {
    if (Ro(e)) throw (Sa(), Error(x(418)));
    for (; t; ) ka(e, t), (t = jt(t.nextSibling));
  }
  if ((Lu(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(x(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Te = jt(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Te = null;
    }
  } else Te = Oe ? jt(e.stateNode.nextSibling) : null;
  return !0;
}
function Sa() {
  for (var e = Te; e; ) e = jt(e.nextSibling);
}
function kn() {
  (Te = Oe = null), (K = !1);
}
function ki(e) {
  Ke === null ? (Ke = [e]) : Ke.push(e);
}
var wd = dt.ReactCurrentBatchConfig;
function We(e, t) {
  if (e && e.defaultProps) {
    (t = G({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var il = Ft(null),
  ul = null,
  cn = null,
  Si = null;
function Ei() {
  Si = cn = ul = null;
}
function Ci(e) {
  var t = il.current;
  W(il), (e._currentValue = t);
}
function Io(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function yn(e, t) {
  (ul = e),
    (Si = cn = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (_e = !0), (e.firstContext = null));
}
function He(e) {
  var t = e._currentValue;
  if (Si !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), cn === null)) {
      if (ul === null) throw Error(x(308));
      (cn = e), (ul.dependencies = { lanes: 0, firstContext: e });
    } else cn = cn.next = e;
  return t;
}
var $t = null;
function _i(e) {
  $t === null ? ($t = [e]) : $t.push(e);
}
function Ea(e, t, n, r) {
  var l = t.interleaved;
  return (
    l === null ? ((n.next = n), _i(t)) : ((n.next = l.next), (l.next = n)),
    (t.interleaved = n),
    ct(e, r)
  );
}
function ct(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var wt = !1;
function Ni(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Ca(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function ut(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function Pt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), B & 2)) {
    var l = r.pending;
    return (
      l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
      (r.pending = t),
      ct(e, n)
    );
  }
  return (
    (l = r.interleaved),
    l === null ? ((t.next = t), _i(r)) : ((t.next = l.next), (l.next = t)),
    (r.interleaved = t),
    ct(e, n)
  );
}
function Ur(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), fi(e, n);
  }
}
function Tu(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var l = null,
      o = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var i = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        o === null ? (l = o = i) : (o = o.next = i), (n = n.next);
      } while (n !== null);
      o === null ? (l = o = t) : (o = o.next = t);
    } else l = o = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: l,
      lastBaseUpdate: o,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function sl(e, t, n, r) {
  var l = e.updateQueue;
  wt = !1;
  var o = l.firstBaseUpdate,
    i = l.lastBaseUpdate,
    u = l.shared.pending;
  if (u !== null) {
    l.shared.pending = null;
    var s = u,
      a = s.next;
    (s.next = null), i === null ? (o = a) : (i.next = a), (i = s);
    var h = e.alternate;
    h !== null &&
      ((h = h.updateQueue),
      (u = h.lastBaseUpdate),
      u !== i &&
        (u === null ? (h.firstBaseUpdate = a) : (u.next = a),
        (h.lastBaseUpdate = s)));
  }
  if (o !== null) {
    var p = l.baseState;
    (i = 0), (h = a = s = null), (u = o);
    do {
      var m = u.lane,
        v = u.eventTime;
      if ((r & m) === m) {
        h !== null &&
          (h = h.next =
            {
              eventTime: v,
              lane: 0,
              tag: u.tag,
              payload: u.payload,
              callback: u.callback,
              next: null,
            });
        e: {
          var w = e,
            k = u;
          switch (((m = t), (v = n), k.tag)) {
            case 1:
              if (((w = k.payload), typeof w == "function")) {
                p = w.call(v, p, m);
                break e;
              }
              p = w;
              break e;
            case 3:
              w.flags = (w.flags & -65537) | 128;
            case 0:
              if (
                ((w = k.payload),
                (m = typeof w == "function" ? w.call(v, p, m) : w),
                m == null)
              )
                break e;
              p = G({}, p, m);
              break e;
            case 2:
              wt = !0;
          }
        }
        u.callback !== null &&
          u.lane !== 0 &&
          ((e.flags |= 64),
          (m = l.effects),
          m === null ? (l.effects = [u]) : m.push(u));
      } else
        (v = {
          eventTime: v,
          lane: m,
          tag: u.tag,
          payload: u.payload,
          callback: u.callback,
          next: null,
        }),
          h === null ? ((a = h = v), (s = p)) : (h = h.next = v),
          (i |= m);
      if (((u = u.next), u === null)) {
        if (((u = l.shared.pending), u === null)) break;
        (m = u),
          (u = m.next),
          (m.next = null),
          (l.lastBaseUpdate = m),
          (l.shared.pending = null);
      }
    } while (!0);
    if (
      (h === null && (s = p),
      (l.baseState = s),
      (l.firstBaseUpdate = a),
      (l.lastBaseUpdate = h),
      (t = l.shared.interleaved),
      t !== null)
    ) {
      l = t;
      do (i |= l.lane), (l = l.next);
      while (l !== t);
    } else o === null && (l.shared.lanes = 0);
    (Xt |= i), (e.lanes = i), (e.memoizedState = p);
  }
}
function Ou(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        l = r.callback;
      if (l !== null) {
        if (((r.callback = null), (r = n), typeof l != "function"))
          throw Error(x(191, l));
        l.call(r);
      }
    }
}
var _a = new Es.Component().refs;
function Fo(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : G({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Cl = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? qt(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = we(),
      l = Tt(e),
      o = ut(r, l);
    (o.payload = t),
      n != null && (o.callback = n),
      (t = Pt(e, o, l)),
      t !== null && (Ze(t, e, l, r), Ur(t, e, l));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = we(),
      l = Tt(e),
      o = ut(r, l);
    (o.tag = 1),
      (o.payload = t),
      n != null && (o.callback = n),
      (t = Pt(e, o, l)),
      t !== null && (Ze(t, e, l, r), Ur(t, e, l));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = we(),
      r = Tt(e),
      l = ut(n, r);
    (l.tag = 2),
      t != null && (l.callback = t),
      (t = Pt(e, l, r)),
      t !== null && (Ze(t, e, r, n), Ur(t, e, r));
  },
};
function Mu(e, t, n, r, l, o, i) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, o, i)
      : t.prototype && t.prototype.isPureReactComponent
      ? !rr(n, r) || !rr(l, o)
      : !0
  );
}
function Na(e, t, n) {
  var r = !1,
    l = Dt,
    o = t.contextType;
  return (
    typeof o == "object" && o !== null
      ? (o = He(o))
      : ((l = ze(t) ? Kt : he.current),
        (r = t.contextTypes),
        (o = (r = r != null) ? xn(e, l) : Dt)),
    (t = new t(n, o)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Cl),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = l),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    t
  );
}
function Ru(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Cl.enqueueReplaceState(t, t.state, null);
}
function Bo(e, t, n, r) {
  var l = e.stateNode;
  (l.props = n), (l.state = e.memoizedState), (l.refs = _a), Ni(e);
  var o = t.contextType;
  typeof o == "object" && o !== null
    ? (l.context = He(o))
    : ((o = ze(t) ? Kt : he.current), (l.context = xn(e, o))),
    (l.state = e.memoizedState),
    (o = t.getDerivedStateFromProps),
    typeof o == "function" && (Fo(e, t, o, n), (l.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof l.getSnapshotBeforeUpdate == "function" ||
      (typeof l.UNSAFE_componentWillMount != "function" &&
        typeof l.componentWillMount != "function") ||
      ((t = l.state),
      typeof l.componentWillMount == "function" && l.componentWillMount(),
      typeof l.UNSAFE_componentWillMount == "function" &&
        l.UNSAFE_componentWillMount(),
      t !== l.state && Cl.enqueueReplaceState(l, l.state, null),
      sl(e, n, l, r),
      (l.state = e.memoizedState)),
    typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function Rn(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(x(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(x(147, e));
      var l = r,
        o = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === o
        ? t.ref
        : ((t = function (i) {
            var u = l.refs;
            u === _a && (u = l.refs = {}),
              i === null ? delete u[o] : (u[o] = i);
          }),
          (t._stringRef = o),
          t);
    }
    if (typeof e != "string") throw Error(x(284));
    if (!n._owner) throw Error(x(290, e));
  }
  return e;
}
function Lr(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      x(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function Du(e) {
  var t = e._init;
  return t(e._payload);
}
function za(e) {
  function t(f, c) {
    if (e) {
      var d = f.deletions;
      d === null ? ((f.deletions = [c]), (f.flags |= 16)) : d.push(c);
    }
  }
  function n(f, c) {
    if (!e) return null;
    for (; c !== null; ) t(f, c), (c = c.sibling);
    return null;
  }
  function r(f, c) {
    for (f = new Map(); c !== null; )
      c.key !== null ? f.set(c.key, c) : f.set(c.index, c), (c = c.sibling);
    return f;
  }
  function l(f, c) {
    return (f = Ot(f, c)), (f.index = 0), (f.sibling = null), f;
  }
  function o(f, c, d) {
    return (
      (f.index = d),
      e
        ? ((d = f.alternate),
          d !== null
            ? ((d = d.index), d < c ? ((f.flags |= 2), c) : d)
            : ((f.flags |= 2), c))
        : ((f.flags |= 1048576), c)
    );
  }
  function i(f) {
    return e && f.alternate === null && (f.flags |= 2), f;
  }
  function u(f, c, d, g) {
    return c === null || c.tag !== 6
      ? ((c = ro(d, f.mode, g)), (c.return = f), c)
      : ((c = l(c, d)), (c.return = f), c);
  }
  function s(f, c, d, g) {
    var C = d.type;
    return C === tn
      ? h(f, c, d.props.children, g, d.key)
      : c !== null &&
        (c.elementType === C ||
          (typeof C == "object" &&
            C !== null &&
            C.$$typeof === gt &&
            Du(C) === c.type))
      ? ((g = l(c, d.props)), (g.ref = Rn(f, c, d)), (g.return = f), g)
      : ((g = Kr(d.type, d.key, d.props, null, f.mode, g)),
        (g.ref = Rn(f, c, d)),
        (g.return = f),
        g);
  }
  function a(f, c, d, g) {
    return c === null ||
      c.tag !== 4 ||
      c.stateNode.containerInfo !== d.containerInfo ||
      c.stateNode.implementation !== d.implementation
      ? ((c = lo(d, f.mode, g)), (c.return = f), c)
      : ((c = l(c, d.children || [])), (c.return = f), c);
  }
  function h(f, c, d, g, C) {
    return c === null || c.tag !== 7
      ? ((c = Qt(d, f.mode, g, C)), (c.return = f), c)
      : ((c = l(c, d)), (c.return = f), c);
  }
  function p(f, c, d) {
    if ((typeof c == "string" && c !== "") || typeof c == "number")
      return (c = ro("" + c, f.mode, d)), (c.return = f), c;
    if (typeof c == "object" && c !== null) {
      switch (c.$$typeof) {
        case wr:
          return (
            (d = Kr(c.type, c.key, c.props, null, f.mode, d)),
            (d.ref = Rn(f, null, c)),
            (d.return = f),
            d
          );
        case en:
          return (c = lo(c, f.mode, d)), (c.return = f), c;
        case gt:
          var g = c._init;
          return p(f, g(c._payload), d);
      }
      if (Bn(c) || Pn(c))
        return (c = Qt(c, f.mode, d, null)), (c.return = f), c;
      Lr(f, c);
    }
    return null;
  }
  function m(f, c, d, g) {
    var C = c !== null ? c.key : null;
    if ((typeof d == "string" && d !== "") || typeof d == "number")
      return C !== null ? null : u(f, c, "" + d, g);
    if (typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case wr:
          return d.key === C ? s(f, c, d, g) : null;
        case en:
          return d.key === C ? a(f, c, d, g) : null;
        case gt:
          return (C = d._init), m(f, c, C(d._payload), g);
      }
      if (Bn(d) || Pn(d)) return C !== null ? null : h(f, c, d, g, null);
      Lr(f, d);
    }
    return null;
  }
  function v(f, c, d, g, C) {
    if ((typeof g == "string" && g !== "") || typeof g == "number")
      return (f = f.get(d) || null), u(c, f, "" + g, C);
    if (typeof g == "object" && g !== null) {
      switch (g.$$typeof) {
        case wr:
          return (f = f.get(g.key === null ? d : g.key) || null), s(c, f, g, C);
        case en:
          return (f = f.get(g.key === null ? d : g.key) || null), a(c, f, g, C);
        case gt:
          var _ = g._init;
          return v(f, c, d, _(g._payload), C);
      }
      if (Bn(g) || Pn(g)) return (f = f.get(d) || null), h(c, f, g, C, null);
      Lr(c, g);
    }
    return null;
  }
  function w(f, c, d, g) {
    for (
      var C = null, _ = null, j = c, S = (c = 0), F = null;
      j !== null && S < d.length;
      S++
    ) {
      j.index > S ? ((F = j), (j = null)) : (F = j.sibling);
      var O = m(f, j, d[S], g);
      if (O === null) {
        j === null && (j = F);
        break;
      }
      e && j && O.alternate === null && t(f, j),
        (c = o(O, c, S)),
        _ === null ? (C = O) : (_.sibling = O),
        (_ = O),
        (j = F);
    }
    if (S === d.length) return n(f, j), K && At(f, S), C;
    if (j === null) {
      for (; S < d.length; S++)
        (j = p(f, d[S], g)),
          j !== null &&
            ((c = o(j, c, S)), _ === null ? (C = j) : (_.sibling = j), (_ = j));
      return K && At(f, S), C;
    }
    for (j = r(f, j); S < d.length; S++)
      (F = v(j, f, S, d[S], g)),
        F !== null &&
          (e && F.alternate !== null && j.delete(F.key === null ? S : F.key),
          (c = o(F, c, S)),
          _ === null ? (C = F) : (_.sibling = F),
          (_ = F));
    return (
      e &&
        j.forEach(function (P) {
          return t(f, P);
        }),
      K && At(f, S),
      C
    );
  }
  function k(f, c, d, g) {
    var C = Pn(d);
    if (typeof C != "function") throw Error(x(150));
    if (((d = C.call(d)), d == null)) throw Error(x(151));
    for (
      var _ = (C = null), j = c, S = (c = 0), F = null, O = d.next();
      j !== null && !O.done;
      S++, O = d.next()
    ) {
      j.index > S ? ((F = j), (j = null)) : (F = j.sibling);
      var P = m(f, j, O.value, g);
      if (P === null) {
        j === null && (j = F);
        break;
      }
      e && j && P.alternate === null && t(f, j),
        (c = o(P, c, S)),
        _ === null ? (C = P) : (_.sibling = P),
        (_ = P),
        (j = F);
    }
    if (O.done) return n(f, j), K && At(f, S), C;
    if (j === null) {
      for (; !O.done; S++, O = d.next())
        (O = p(f, O.value, g)),
          O !== null &&
            ((c = o(O, c, S)), _ === null ? (C = O) : (_.sibling = O), (_ = O));
      return K && At(f, S), C;
    }
    for (j = r(f, j); !O.done; S++, O = d.next())
      (O = v(j, f, S, O.value, g)),
        O !== null &&
          (e && O.alternate !== null && j.delete(O.key === null ? S : O.key),
          (c = o(O, c, S)),
          _ === null ? (C = O) : (_.sibling = O),
          (_ = O));
    return (
      e &&
        j.forEach(function (N) {
          return t(f, N);
        }),
      K && At(f, S),
      C
    );
  }
  function R(f, c, d, g) {
    if (
      (typeof d == "object" &&
        d !== null &&
        d.type === tn &&
        d.key === null &&
        (d = d.props.children),
      typeof d == "object" && d !== null)
    ) {
      switch (d.$$typeof) {
        case wr:
          e: {
            for (var C = d.key, _ = c; _ !== null; ) {
              if (_.key === C) {
                if (((C = d.type), C === tn)) {
                  if (_.tag === 7) {
                    n(f, _.sibling),
                      (c = l(_, d.props.children)),
                      (c.return = f),
                      (f = c);
                    break e;
                  }
                } else if (
                  _.elementType === C ||
                  (typeof C == "object" &&
                    C !== null &&
                    C.$$typeof === gt &&
                    Du(C) === _.type)
                ) {
                  n(f, _.sibling),
                    (c = l(_, d.props)),
                    (c.ref = Rn(f, _, d)),
                    (c.return = f),
                    (f = c);
                  break e;
                }
                n(f, _);
                break;
              } else t(f, _);
              _ = _.sibling;
            }
            d.type === tn
              ? ((c = Qt(d.props.children, f.mode, g, d.key)),
                (c.return = f),
                (f = c))
              : ((g = Kr(d.type, d.key, d.props, null, f.mode, g)),
                (g.ref = Rn(f, c, d)),
                (g.return = f),
                (f = g));
          }
          return i(f);
        case en:
          e: {
            for (_ = d.key; c !== null; ) {
              if (c.key === _)
                if (
                  c.tag === 4 &&
                  c.stateNode.containerInfo === d.containerInfo &&
                  c.stateNode.implementation === d.implementation
                ) {
                  n(f, c.sibling),
                    (c = l(c, d.children || [])),
                    (c.return = f),
                    (f = c);
                  break e;
                } else {
                  n(f, c);
                  break;
                }
              else t(f, c);
              c = c.sibling;
            }
            (c = lo(d, f.mode, g)), (c.return = f), (f = c);
          }
          return i(f);
        case gt:
          return (_ = d._init), R(f, c, _(d._payload), g);
      }
      if (Bn(d)) return w(f, c, d, g);
      if (Pn(d)) return k(f, c, d, g);
      Lr(f, d);
    }
    return (typeof d == "string" && d !== "") || typeof d == "number"
      ? ((d = "" + d),
        c !== null && c.tag === 6
          ? (n(f, c.sibling), (c = l(c, d)), (c.return = f), (f = c))
          : (n(f, c), (c = ro(d, f.mode, g)), (c.return = f), (f = c)),
        i(f))
      : n(f, c);
  }
  return R;
}
var Sn = za(!0),
  ja = za(!1),
  yr = {},
  tt = Ft(yr),
  ur = Ft(yr),
  sr = Ft(yr);
function Vt(e) {
  if (e === yr) throw Error(x(174));
  return e;
}
function zi(e, t) {
  switch ((H(sr, t), H(ur, e), H(tt, yr), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : vo(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = vo(t, e));
  }
  W(tt), H(tt, t);
}
function En() {
  W(tt), W(ur), W(sr);
}
function Pa(e) {
  Vt(sr.current);
  var t = Vt(tt.current),
    n = vo(t, e.type);
  t !== n && (H(ur, e), H(tt, n));
}
function ji(e) {
  ur.current === e && (W(tt), W(ur));
}
var Z = Ft(0);
function al(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var Jl = [];
function Pi() {
  for (var e = 0; e < Jl.length; e++)
    Jl[e]._workInProgressVersionPrimary = null;
  Jl.length = 0;
}
var Hr = dt.ReactCurrentDispatcher,
  ql = dt.ReactCurrentBatchConfig,
  Zt = 0,
  X = null,
  re = null,
  ue = null,
  cl = !1,
  Kn = !1,
  ar = 0,
  xd = 0;
function de() {
  throw Error(x(321));
}
function Li(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Xe(e[n], t[n])) return !1;
  return !0;
}
function Ti(e, t, n, r, l, o) {
  if (
    ((Zt = o),
    (X = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Hr.current = e === null || e.memoizedState === null ? Cd : _d),
    (e = n(r, l)),
    Kn)
  ) {
    o = 0;
    do {
      if (((Kn = !1), (ar = 0), 25 <= o)) throw Error(x(301));
      (o += 1),
        (ue = re = null),
        (t.updateQueue = null),
        (Hr.current = Nd),
        (e = n(r, l));
    } while (Kn);
  }
  if (
    ((Hr.current = fl),
    (t = re !== null && re.next !== null),
    (Zt = 0),
    (ue = re = X = null),
    (cl = !1),
    t)
  )
    throw Error(x(300));
  return e;
}
function Oi() {
  var e = ar !== 0;
  return (ar = 0), e;
}
function Je() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return ue === null ? (X.memoizedState = ue = e) : (ue = ue.next = e), ue;
}
function $e() {
  if (re === null) {
    var e = X.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = re.next;
  var t = ue === null ? X.memoizedState : ue.next;
  if (t !== null) (ue = t), (re = e);
  else {
    if (e === null) throw Error(x(310));
    (re = e),
      (e = {
        memoizedState: re.memoizedState,
        baseState: re.baseState,
        baseQueue: re.baseQueue,
        queue: re.queue,
        next: null,
      }),
      ue === null ? (X.memoizedState = ue = e) : (ue = ue.next = e);
  }
  return ue;
}
function cr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function bl(e) {
  var t = $e(),
    n = t.queue;
  if (n === null) throw Error(x(311));
  n.lastRenderedReducer = e;
  var r = re,
    l = r.baseQueue,
    o = n.pending;
  if (o !== null) {
    if (l !== null) {
      var i = l.next;
      (l.next = o.next), (o.next = i);
    }
    (r.baseQueue = l = o), (n.pending = null);
  }
  if (l !== null) {
    (o = l.next), (r = r.baseState);
    var u = (i = null),
      s = null,
      a = o;
    do {
      var h = a.lane;
      if ((Zt & h) === h)
        s !== null &&
          (s = s.next =
            {
              lane: 0,
              action: a.action,
              hasEagerState: a.hasEagerState,
              eagerState: a.eagerState,
              next: null,
            }),
          (r = a.hasEagerState ? a.eagerState : e(r, a.action));
      else {
        var p = {
          lane: h,
          action: a.action,
          hasEagerState: a.hasEagerState,
          eagerState: a.eagerState,
          next: null,
        };
        s === null ? ((u = s = p), (i = r)) : (s = s.next = p),
          (X.lanes |= h),
          (Xt |= h);
      }
      a = a.next;
    } while (a !== null && a !== o);
    s === null ? (i = r) : (s.next = u),
      Xe(r, t.memoizedState) || (_e = !0),
      (t.memoizedState = r),
      (t.baseState = i),
      (t.baseQueue = s),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    l = e;
    do (o = l.lane), (X.lanes |= o), (Xt |= o), (l = l.next);
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function eo(e) {
  var t = $e(),
    n = t.queue;
  if (n === null) throw Error(x(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    l = n.pending,
    o = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var i = (l = l.next);
    do (o = e(o, i.action)), (i = i.next);
    while (i !== l);
    Xe(o, t.memoizedState) || (_e = !0),
      (t.memoizedState = o),
      t.baseQueue === null && (t.baseState = o),
      (n.lastRenderedState = o);
  }
  return [o, r];
}
function La() {}
function Ta(e, t) {
  var n = X,
    r = $e(),
    l = t(),
    o = !Xe(r.memoizedState, l);
  if (
    (o && ((r.memoizedState = l), (_e = !0)),
    (r = r.queue),
    Mi(Ra.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || o || (ue !== null && ue.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      fr(9, Ma.bind(null, n, r, l, t), void 0, null),
      se === null)
    )
      throw Error(x(349));
    Zt & 30 || Oa(n, t, l);
  }
  return l;
}
function Oa(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = X.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (X.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Ma(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), Da(t) && Ia(e);
}
function Ra(e, t, n) {
  return n(function () {
    Da(t) && Ia(e);
  });
}
function Da(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Xe(e, n);
  } catch {
    return !0;
  }
}
function Ia(e) {
  var t = ct(e, 1);
  t !== null && Ze(t, e, 1, -1);
}
function Iu(e) {
  var t = Je();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: cr,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = Ed.bind(null, X, e)),
    [t.memoizedState, e]
  );
}
function fr(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = X.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (X.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function Fa() {
  return $e().memoizedState;
}
function $r(e, t, n, r) {
  var l = Je();
  (X.flags |= e),
    (l.memoizedState = fr(1 | t, n, void 0, r === void 0 ? null : r));
}
function _l(e, t, n, r) {
  var l = $e();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (re !== null) {
    var i = re.memoizedState;
    if (((o = i.destroy), r !== null && Li(r, i.deps))) {
      l.memoizedState = fr(t, n, o, r);
      return;
    }
  }
  (X.flags |= e), (l.memoizedState = fr(1 | t, n, o, r));
}
function Fu(e, t) {
  return $r(8390656, 8, e, t);
}
function Mi(e, t) {
  return _l(2048, 8, e, t);
}
function Ba(e, t) {
  return _l(4, 2, e, t);
}
function Aa(e, t) {
  return _l(4, 4, e, t);
}
function Ua(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function Ha(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), _l(4, 4, Ua.bind(null, t, e), n)
  );
}
function Ri() {}
function $a(e, t) {
  var n = $e();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Li(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function Va(e, t) {
  var n = $e();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Li(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Wa(e, t, n) {
  return Zt & 21
    ? (Xe(n, t) || ((n = Ys()), (X.lanes |= n), (Xt |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (_e = !0)), (e.memoizedState = n));
}
function kd(e, t) {
  var n = A;
  (A = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = ql.transition;
  ql.transition = {};
  try {
    e(!1), t();
  } finally {
    (A = n), (ql.transition = r);
  }
}
function Qa() {
  return $e().memoizedState;
}
function Sd(e, t, n) {
  var r = Tt(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Ka(e))
  )
    Ya(t, n);
  else if (((n = Ea(e, t, n, r)), n !== null)) {
    var l = we();
    Ze(n, e, r, l), Za(n, t, r);
  }
}
function Ed(e, t, n) {
  var r = Tt(e),
    l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Ka(e)) Ya(t, l);
  else {
    var o = e.alternate;
    if (
      e.lanes === 0 &&
      (o === null || o.lanes === 0) &&
      ((o = t.lastRenderedReducer), o !== null)
    )
      try {
        var i = t.lastRenderedState,
          u = o(i, n);
        if (((l.hasEagerState = !0), (l.eagerState = u), Xe(u, i))) {
          var s = t.interleaved;
          s === null
            ? ((l.next = l), _i(t))
            : ((l.next = s.next), (s.next = l)),
            (t.interleaved = l);
          return;
        }
      } catch {
      } finally {
      }
    (n = Ea(e, t, l, r)),
      n !== null && ((l = we()), Ze(n, e, r, l), Za(n, t, r));
  }
}
function Ka(e) {
  var t = e.alternate;
  return e === X || (t !== null && t === X);
}
function Ya(e, t) {
  Kn = cl = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function Za(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), fi(e, n);
  }
}
var fl = {
    readContext: He,
    useCallback: de,
    useContext: de,
    useEffect: de,
    useImperativeHandle: de,
    useInsertionEffect: de,
    useLayoutEffect: de,
    useMemo: de,
    useReducer: de,
    useRef: de,
    useState: de,
    useDebugValue: de,
    useDeferredValue: de,
    useTransition: de,
    useMutableSource: de,
    useSyncExternalStore: de,
    useId: de,
    unstable_isNewReconciler: !1,
  },
  Cd = {
    readContext: He,
    useCallback: function (e, t) {
      return (Je().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: He,
    useEffect: Fu,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        $r(4194308, 4, Ua.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return $r(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return $r(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Je();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = Je();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = Sd.bind(null, X, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Je();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: Iu,
    useDebugValue: Ri,
    useDeferredValue: function (e) {
      return (Je().memoizedState = e);
    },
    useTransition: function () {
      var e = Iu(!1),
        t = e[0];
      return (e = kd.bind(null, e[1])), (Je().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = X,
        l = Je();
      if (K) {
        if (n === void 0) throw Error(x(407));
        n = n();
      } else {
        if (((n = t()), se === null)) throw Error(x(349));
        Zt & 30 || Oa(r, t, n);
      }
      l.memoizedState = n;
      var o = { value: n, getSnapshot: t };
      return (
        (l.queue = o),
        Fu(Ra.bind(null, r, o, e), [e]),
        (r.flags |= 2048),
        fr(9, Ma.bind(null, r, o, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Je(),
        t = se.identifierPrefix;
      if (K) {
        var n = it,
          r = ot;
        (n = (r & ~(1 << (32 - Ye(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = ar++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = xd++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  _d = {
    readContext: He,
    useCallback: $a,
    useContext: He,
    useEffect: Mi,
    useImperativeHandle: Ha,
    useInsertionEffect: Ba,
    useLayoutEffect: Aa,
    useMemo: Va,
    useReducer: bl,
    useRef: Fa,
    useState: function () {
      return bl(cr);
    },
    useDebugValue: Ri,
    useDeferredValue: function (e) {
      var t = $e();
      return Wa(t, re.memoizedState, e);
    },
    useTransition: function () {
      var e = bl(cr)[0],
        t = $e().memoizedState;
      return [e, t];
    },
    useMutableSource: La,
    useSyncExternalStore: Ta,
    useId: Qa,
    unstable_isNewReconciler: !1,
  },
  Nd = {
    readContext: He,
    useCallback: $a,
    useContext: He,
    useEffect: Mi,
    useImperativeHandle: Ha,
    useInsertionEffect: Ba,
    useLayoutEffect: Aa,
    useMemo: Va,
    useReducer: eo,
    useRef: Fa,
    useState: function () {
      return eo(cr);
    },
    useDebugValue: Ri,
    useDeferredValue: function (e) {
      var t = $e();
      return re === null ? (t.memoizedState = e) : Wa(t, re.memoizedState, e);
    },
    useTransition: function () {
      var e = eo(cr)[0],
        t = $e().memoizedState;
      return [e, t];
    },
    useMutableSource: La,
    useSyncExternalStore: Ta,
    useId: Qa,
    unstable_isNewReconciler: !1,
  };
function Cn(e, t) {
  try {
    var n = "",
      r = t;
    do (n += bc(r)), (r = r.return);
    while (r);
    var l = n;
  } catch (o) {
    l =
      `
Error generating stack: ` +
      o.message +
      `
` +
      o.stack;
  }
  return { value: e, source: t, stack: l, digest: null };
}
function to(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Ao(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var zd = typeof WeakMap == "function" ? WeakMap : Map;
function Xa(e, t, n) {
  (n = ut(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      pl || ((pl = !0), (Xo = r)), Ao(e, t);
    }),
    n
  );
}
function Ga(e, t, n) {
  (n = ut(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = t.value;
    (n.payload = function () {
      return r(l);
    }),
      (n.callback = function () {
        Ao(e, t);
      });
  }
  var o = e.stateNode;
  return (
    o !== null &&
      typeof o.componentDidCatch == "function" &&
      (n.callback = function () {
        Ao(e, t),
          typeof r != "function" &&
            (Lt === null ? (Lt = new Set([this])) : Lt.add(this));
        var i = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: i !== null ? i : "",
        });
      }),
    n
  );
}
function Bu(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new zd();
    var l = new Set();
    r.set(t, l);
  } else (l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l));
  l.has(n) || (l.add(n), (e = Hd.bind(null, e, t, n)), t.then(e, e));
}
function Au(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Uu(e, t, n, r, l) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = l), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = ut(-1, 1)), (t.tag = 2), Pt(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var jd = dt.ReactCurrentOwner,
  _e = !1;
function ge(e, t, n, r) {
  t.child = e === null ? ja(t, null, n, r) : Sn(t, e.child, n, r);
}
function Hu(e, t, n, r, l) {
  n = n.render;
  var o = t.ref;
  return (
    yn(t, l),
    (r = Ti(e, t, n, r, o, l)),
    (n = Oi()),
    e !== null && !_e
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        ft(e, t, l))
      : (K && n && wi(t), (t.flags |= 1), ge(e, t, r, l), t.child)
  );
}
function $u(e, t, n, r, l) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" &&
      !$i(o) &&
      o.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = o), Ja(e, t, o, r, l))
      : ((e = Kr(n.type, null, r, t, t.mode, l)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((o = e.child), !(e.lanes & l))) {
    var i = o.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : rr), n(i, r) && e.ref === t.ref)
    )
      return ft(e, t, l);
  }
  return (
    (t.flags |= 1),
    (e = Ot(o, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function Ja(e, t, n, r, l) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (rr(o, r) && e.ref === t.ref)
      if (((_e = !1), (t.pendingProps = r = o), (e.lanes & l) !== 0))
        e.flags & 131072 && (_e = !0);
      else return (t.lanes = e.lanes), ft(e, t, l);
  }
  return Uo(e, t, n, r, l);
}
function qa(e, t, n) {
  var r = t.pendingProps,
    l = r.children,
    o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        H(dn, Le),
        (Le |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = o !== null ? o.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          H(dn, Le),
          (Le |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = o !== null ? o.baseLanes : n),
        H(dn, Le),
        (Le |= r);
    }
  else
    o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
      H(dn, Le),
      (Le |= r);
  return ge(e, t, l, n), t.child;
}
function ba(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Uo(e, t, n, r, l) {
  var o = ze(n) ? Kt : he.current;
  return (
    (o = xn(t, o)),
    yn(t, l),
    (n = Ti(e, t, n, r, o, l)),
    (r = Oi()),
    e !== null && !_e
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        ft(e, t, l))
      : (K && r && wi(t), (t.flags |= 1), ge(e, t, n, l), t.child)
  );
}
function Vu(e, t, n, r, l) {
  if (ze(n)) {
    var o = !0;
    rl(t);
  } else o = !1;
  if ((yn(t, l), t.stateNode === null))
    Vr(e, t), Na(t, n, r), Bo(t, n, r, l), (r = !0);
  else if (e === null) {
    var i = t.stateNode,
      u = t.memoizedProps;
    i.props = u;
    var s = i.context,
      a = n.contextType;
    typeof a == "object" && a !== null
      ? (a = He(a))
      : ((a = ze(n) ? Kt : he.current), (a = xn(t, a)));
    var h = n.getDerivedStateFromProps,
      p =
        typeof h == "function" ||
        typeof i.getSnapshotBeforeUpdate == "function";
    p ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((u !== r || s !== a) && Ru(t, i, r, a)),
      (wt = !1);
    var m = t.memoizedState;
    (i.state = m),
      sl(t, r, i, l),
      (s = t.memoizedState),
      u !== r || m !== s || Ne.current || wt
        ? (typeof h == "function" && (Fo(t, n, h, r), (s = t.memoizedState)),
          (u = wt || Mu(t, n, u, r, m, s, a))
            ? (p ||
                (typeof i.UNSAFE_componentWillMount != "function" &&
                  typeof i.componentWillMount != "function") ||
                (typeof i.componentWillMount == "function" &&
                  i.componentWillMount(),
                typeof i.UNSAFE_componentWillMount == "function" &&
                  i.UNSAFE_componentWillMount()),
              typeof i.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = s)),
          (i.props = r),
          (i.state = s),
          (i.context = a),
          (r = u))
        : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (i = t.stateNode),
      Ca(e, t),
      (u = t.memoizedProps),
      (a = t.type === t.elementType ? u : We(t.type, u)),
      (i.props = a),
      (p = t.pendingProps),
      (m = i.context),
      (s = n.contextType),
      typeof s == "object" && s !== null
        ? (s = He(s))
        : ((s = ze(n) ? Kt : he.current), (s = xn(t, s)));
    var v = n.getDerivedStateFromProps;
    (h =
      typeof v == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function") ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((u !== p || m !== s) && Ru(t, i, r, s)),
      (wt = !1),
      (m = t.memoizedState),
      (i.state = m),
      sl(t, r, i, l);
    var w = t.memoizedState;
    u !== p || m !== w || Ne.current || wt
      ? (typeof v == "function" && (Fo(t, n, v, r), (w = t.memoizedState)),
        (a = wt || Mu(t, n, a, r, m, w, s) || !1)
          ? (h ||
              (typeof i.UNSAFE_componentWillUpdate != "function" &&
                typeof i.componentWillUpdate != "function") ||
              (typeof i.componentWillUpdate == "function" &&
                i.componentWillUpdate(r, w, s),
              typeof i.UNSAFE_componentWillUpdate == "function" &&
                i.UNSAFE_componentWillUpdate(r, w, s)),
            typeof i.componentDidUpdate == "function" && (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof i.componentDidUpdate != "function" ||
              (u === e.memoizedProps && m === e.memoizedState) ||
              (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate != "function" ||
              (u === e.memoizedProps && m === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = w)),
        (i.props = r),
        (i.state = w),
        (i.context = s),
        (r = a))
      : (typeof i.componentDidUpdate != "function" ||
          (u === e.memoizedProps && m === e.memoizedState) ||
          (t.flags |= 4),
        typeof i.getSnapshotBeforeUpdate != "function" ||
          (u === e.memoizedProps && m === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Ho(e, t, n, r, o, l);
}
function Ho(e, t, n, r, l, o) {
  ba(e, t);
  var i = (t.flags & 128) !== 0;
  if (!r && !i) return l && ju(t, n, !1), ft(e, t, o);
  (r = t.stateNode), (jd.current = t);
  var u =
    i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && i
      ? ((t.child = Sn(t, e.child, null, o)), (t.child = Sn(t, null, u, o)))
      : ge(e, t, u, o),
    (t.memoizedState = r.state),
    l && ju(t, n, !0),
    t.child
  );
}
function ec(e) {
  var t = e.stateNode;
  t.pendingContext
    ? zu(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && zu(e, t.context, !1),
    zi(e, t.containerInfo);
}
function Wu(e, t, n, r, l) {
  return kn(), ki(l), (t.flags |= 256), ge(e, t, n, r), t.child;
}
var $o = { dehydrated: null, treeContext: null, retryLane: 0 };
function Vo(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function tc(e, t, n) {
  var r = t.pendingProps,
    l = Z.current,
    o = !1,
    i = (t.flags & 128) !== 0,
    u;
  if (
    ((u = i) ||
      (u = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
    u
      ? ((o = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (l |= 1),
    H(Z, l & 1),
    e === null)
  )
    return (
      Do(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((i = r.children),
          (e = r.fallback),
          o
            ? ((r = t.mode),
              (o = t.child),
              (i = { mode: "hidden", children: i }),
              !(r & 1) && o !== null
                ? ((o.childLanes = 0), (o.pendingProps = i))
                : (o = jl(i, r, 0, null)),
              (e = Qt(e, r, n, null)),
              (o.return = t),
              (e.return = t),
              (o.sibling = e),
              (t.child = o),
              (t.child.memoizedState = Vo(n)),
              (t.memoizedState = $o),
              e)
            : Di(t, i))
    );
  if (((l = e.memoizedState), l !== null && ((u = l.dehydrated), u !== null)))
    return Pd(e, t, i, r, u, l, n);
  if (o) {
    (o = r.fallback), (i = t.mode), (l = e.child), (u = l.sibling);
    var s = { mode: "hidden", children: r.children };
    return (
      !(i & 1) && t.child !== l
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = s),
          (t.deletions = null))
        : ((r = Ot(l, s)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
      u !== null ? (o = Ot(u, o)) : ((o = Qt(o, i, n, null)), (o.flags |= 2)),
      (o.return = t),
      (r.return = t),
      (r.sibling = o),
      (t.child = r),
      (r = o),
      (o = t.child),
      (i = e.child.memoizedState),
      (i =
        i === null
          ? Vo(n)
          : {
              baseLanes: i.baseLanes | n,
              cachePool: null,
              transitions: i.transitions,
            }),
      (o.memoizedState = i),
      (o.childLanes = e.childLanes & ~n),
      (t.memoizedState = $o),
      r
    );
  }
  return (
    (o = e.child),
    (e = o.sibling),
    (r = Ot(o, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function Di(e, t) {
  return (
    (t = jl({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Tr(e, t, n, r) {
  return (
    r !== null && ki(r),
    Sn(t, e.child, null, n),
    (e = Di(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function Pd(e, t, n, r, l, o, i) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = to(Error(x(422)))), Tr(e, t, i, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((o = r.fallback),
        (l = t.mode),
        (r = jl({ mode: "visible", children: r.children }, l, 0, null)),
        (o = Qt(o, l, i, null)),
        (o.flags |= 2),
        (r.return = t),
        (o.return = t),
        (r.sibling = o),
        (t.child = r),
        t.mode & 1 && Sn(t, e.child, null, i),
        (t.child.memoizedState = Vo(i)),
        (t.memoizedState = $o),
        o);
  if (!(t.mode & 1)) return Tr(e, t, i, null);
  if (l.data === "$!") {
    if (((r = l.nextSibling && l.nextSibling.dataset), r)) var u = r.dgst;
    return (r = u), (o = Error(x(419))), (r = to(o, r, void 0)), Tr(e, t, i, r);
  }
  if (((u = (i & e.childLanes) !== 0), _e || u)) {
    if (((r = se), r !== null)) {
      switch (i & -i) {
        case 4:
          l = 2;
          break;
        case 16:
          l = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          l = 32;
          break;
        case 536870912:
          l = 268435456;
          break;
        default:
          l = 0;
      }
      (l = l & (r.suspendedLanes | i) ? 0 : l),
        l !== 0 &&
          l !== o.retryLane &&
          ((o.retryLane = l), ct(e, l), Ze(r, e, l, -1));
    }
    return Hi(), (r = to(Error(x(421)))), Tr(e, t, i, r);
  }
  return l.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = $d.bind(null, e)),
      (l._reactRetry = t),
      null)
    : ((e = o.treeContext),
      (Te = jt(l.nextSibling)),
      (Oe = t),
      (K = !0),
      (Ke = null),
      e !== null &&
        ((Fe[Be++] = ot),
        (Fe[Be++] = it),
        (Fe[Be++] = Yt),
        (ot = e.id),
        (it = e.overflow),
        (Yt = t)),
      (t = Di(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Qu(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Io(e.return, t, n);
}
function no(e, t, n, r, l) {
  var o = e.memoizedState;
  o === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: l,
      })
    : ((o.isBackwards = t),
      (o.rendering = null),
      (o.renderingStartTime = 0),
      (o.last = r),
      (o.tail = n),
      (o.tailMode = l));
}
function nc(e, t, n) {
  var r = t.pendingProps,
    l = r.revealOrder,
    o = r.tail;
  if ((ge(e, t, r.children, n), (r = Z.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Qu(e, n, t);
        else if (e.tag === 19) Qu(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((H(Z, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (l) {
      case "forwards":
        for (n = t.child, l = null; n !== null; )
          (e = n.alternate),
            e !== null && al(e) === null && (l = n),
            (n = n.sibling);
        (n = l),
          n === null
            ? ((l = t.child), (t.child = null))
            : ((l = n.sibling), (n.sibling = null)),
          no(t, !1, l, n, o);
        break;
      case "backwards":
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (((e = l.alternate), e !== null && al(e) === null)) {
            t.child = l;
            break;
          }
          (e = l.sibling), (l.sibling = n), (n = l), (l = e);
        }
        no(t, !0, n, null, o);
        break;
      case "together":
        no(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Vr(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function ft(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Xt |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(x(153));
  if (t.child !== null) {
    for (
      e = t.child, n = Ot(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = Ot(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function Ld(e, t, n) {
  switch (t.tag) {
    case 3:
      ec(t), kn();
      break;
    case 5:
      Pa(t);
      break;
    case 1:
      ze(t.type) && rl(t);
      break;
    case 4:
      zi(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        l = t.memoizedProps.value;
      H(il, r._currentValue), (r._currentValue = l);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (H(Z, Z.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? tc(e, t, n)
          : (H(Z, Z.current & 1),
            (e = ft(e, t, n)),
            e !== null ? e.sibling : null);
      H(Z, Z.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return nc(e, t, n);
        t.flags |= 128;
      }
      if (
        ((l = t.memoizedState),
        l !== null &&
          ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
        H(Z, Z.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), qa(e, t, n);
  }
  return ft(e, t, n);
}
var rc, Wo, lc, oc;
rc = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
Wo = function () {};
lc = function (e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    (e = t.stateNode), Vt(tt.current);
    var o = null;
    switch (n) {
      case "input":
        (l = fo(e, l)), (r = fo(e, r)), (o = []);
        break;
      case "select":
        (l = G({}, l, { value: void 0 })),
          (r = G({}, r, { value: void 0 })),
          (o = []);
        break;
      case "textarea":
        (l = ho(e, l)), (r = ho(e, r)), (o = []);
        break;
      default:
        typeof l.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = tl);
    }
    yo(n, r);
    var i;
    n = null;
    for (a in l)
      if (!r.hasOwnProperty(a) && l.hasOwnProperty(a) && l[a] != null)
        if (a === "style") {
          var u = l[a];
          for (i in u) u.hasOwnProperty(i) && (n || (n = {}), (n[i] = ""));
        } else
          a !== "dangerouslySetInnerHTML" &&
            a !== "children" &&
            a !== "suppressContentEditableWarning" &&
            a !== "suppressHydrationWarning" &&
            a !== "autoFocus" &&
            (Gn.hasOwnProperty(a)
              ? o || (o = [])
              : (o = o || []).push(a, null));
    for (a in r) {
      var s = r[a];
      if (
        ((u = l != null ? l[a] : void 0),
        r.hasOwnProperty(a) && s !== u && (s != null || u != null))
      )
        if (a === "style")
          if (u) {
            for (i in u)
              !u.hasOwnProperty(i) ||
                (s && s.hasOwnProperty(i)) ||
                (n || (n = {}), (n[i] = ""));
            for (i in s)
              s.hasOwnProperty(i) &&
                u[i] !== s[i] &&
                (n || (n = {}), (n[i] = s[i]));
          } else n || (o || (o = []), o.push(a, n)), (n = s);
        else
          a === "dangerouslySetInnerHTML"
            ? ((s = s ? s.__html : void 0),
              (u = u ? u.__html : void 0),
              s != null && u !== s && (o = o || []).push(a, s))
            : a === "children"
            ? (typeof s != "string" && typeof s != "number") ||
              (o = o || []).push(a, "" + s)
            : a !== "suppressContentEditableWarning" &&
              a !== "suppressHydrationWarning" &&
              (Gn.hasOwnProperty(a)
                ? (s != null && a === "onScroll" && V("scroll", e),
                  o || u === s || (o = []))
                : (o = o || []).push(a, s));
    }
    n && (o = o || []).push("style", n);
    var a = o;
    (t.updateQueue = a) && (t.flags |= 4);
  }
};
oc = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Dn(e, t) {
  if (!K)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function pe(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags & 14680064),
        (r |= l.flags & 14680064),
        (l.return = e),
        (l = l.sibling);
  else
    for (l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags),
        (r |= l.flags),
        (l.return = e),
        (l = l.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function Td(e, t, n) {
  var r = t.pendingProps;
  switch ((xi(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return pe(t), null;
    case 1:
      return ze(t.type) && nl(), pe(t), null;
    case 3:
      return (
        (r = t.stateNode),
        En(),
        W(Ne),
        W(he),
        Pi(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Pr(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Ke !== null && (qo(Ke), (Ke = null)))),
        Wo(e, t),
        pe(t),
        null
      );
    case 5:
      ji(t);
      var l = Vt(sr.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        lc(e, t, n, r, l),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(x(166));
          return pe(t), null;
        }
        if (((e = Vt(tt.current)), Pr(t))) {
          (r = t.stateNode), (n = t.type);
          var o = t.memoizedProps;
          switch (((r[be] = t), (r[ir] = o), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              V("cancel", r), V("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              V("load", r);
              break;
            case "video":
            case "audio":
              for (l = 0; l < Un.length; l++) V(Un[l], r);
              break;
            case "source":
              V("error", r);
              break;
            case "img":
            case "image":
            case "link":
              V("error", r), V("load", r);
              break;
            case "details":
              V("toggle", r);
              break;
            case "input":
              eu(r, o), V("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!o.multiple }),
                V("invalid", r);
              break;
            case "textarea":
              nu(r, o), V("invalid", r);
          }
          yo(n, o), (l = null);
          for (var i in o)
            if (o.hasOwnProperty(i)) {
              var u = o[i];
              i === "children"
                ? typeof u == "string"
                  ? r.textContent !== u &&
                    (o.suppressHydrationWarning !== !0 &&
                      jr(r.textContent, u, e),
                    (l = ["children", u]))
                  : typeof u == "number" &&
                    r.textContent !== "" + u &&
                    (o.suppressHydrationWarning !== !0 &&
                      jr(r.textContent, u, e),
                    (l = ["children", "" + u]))
                : Gn.hasOwnProperty(i) &&
                  u != null &&
                  i === "onScroll" &&
                  V("scroll", r);
            }
          switch (n) {
            case "input":
              xr(r), tu(r, o, !0);
              break;
            case "textarea":
              xr(r), ru(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = tl);
          }
          (r = l), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (i = l.nodeType === 9 ? l : l.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Os(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = i.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = i.createElement(n, { is: r.is }))
                : ((e = i.createElement(n)),
                  n === "select" &&
                    ((i = e),
                    r.multiple
                      ? (i.multiple = !0)
                      : r.size && (i.size = r.size)))
              : (e = i.createElementNS(e, n)),
            (e[be] = t),
            (e[ir] = r),
            rc(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((i = go(n, r)), n)) {
              case "dialog":
                V("cancel", e), V("close", e), (l = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                V("load", e), (l = r);
                break;
              case "video":
              case "audio":
                for (l = 0; l < Un.length; l++) V(Un[l], e);
                l = r;
                break;
              case "source":
                V("error", e), (l = r);
                break;
              case "img":
              case "image":
              case "link":
                V("error", e), V("load", e), (l = r);
                break;
              case "details":
                V("toggle", e), (l = r);
                break;
              case "input":
                eu(e, r), (l = fo(e, r)), V("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (l = G({}, r, { value: void 0 })),
                  V("invalid", e);
                break;
              case "textarea":
                nu(e, r), (l = ho(e, r)), V("invalid", e);
                break;
              default:
                l = r;
            }
            yo(n, l), (u = l);
            for (o in u)
              if (u.hasOwnProperty(o)) {
                var s = u[o];
                o === "style"
                  ? Ds(e, s)
                  : o === "dangerouslySetInnerHTML"
                  ? ((s = s ? s.__html : void 0), s != null && Ms(e, s))
                  : o === "children"
                  ? typeof s == "string"
                    ? (n !== "textarea" || s !== "") && Jn(e, s)
                    : typeof s == "number" && Jn(e, "" + s)
                  : o !== "suppressContentEditableWarning" &&
                    o !== "suppressHydrationWarning" &&
                    o !== "autoFocus" &&
                    (Gn.hasOwnProperty(o)
                      ? s != null && o === "onScroll" && V("scroll", e)
                      : s != null && oi(e, o, s, i));
              }
            switch (n) {
              case "input":
                xr(e), tu(e, r, !1);
                break;
              case "textarea":
                xr(e), ru(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Rt(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (o = r.value),
                  o != null
                    ? pn(e, !!r.multiple, o, !1)
                    : r.defaultValue != null &&
                      pn(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = tl);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return pe(t), null;
    case 6:
      if (e && t.stateNode != null) oc(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(x(166));
        if (((n = Vt(sr.current)), Vt(tt.current), Pr(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[be] = t),
            (o = r.nodeValue !== n) && ((e = Oe), e !== null))
          )
            switch (e.tag) {
              case 3:
                jr(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  jr(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          o && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[be] = t),
            (t.stateNode = r);
      }
      return pe(t), null;
    case 13:
      if (
        (W(Z),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (K && Te !== null && t.mode & 1 && !(t.flags & 128))
          Sa(), kn(), (t.flags |= 98560), (o = !1);
        else if (((o = Pr(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!o) throw Error(x(318));
            if (
              ((o = t.memoizedState),
              (o = o !== null ? o.dehydrated : null),
              !o)
            )
              throw Error(x(317));
            o[be] = t;
          } else
            kn(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          pe(t), (o = !1);
        } else Ke !== null && (qo(Ke), (Ke = null)), (o = !0);
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || Z.current & 1 ? le === 0 && (le = 3) : Hi())),
          t.updateQueue !== null && (t.flags |= 4),
          pe(t),
          null);
    case 4:
      return (
        En(), Wo(e, t), e === null && lr(t.stateNode.containerInfo), pe(t), null
      );
    case 10:
      return Ci(t.type._context), pe(t), null;
    case 17:
      return ze(t.type) && nl(), pe(t), null;
    case 19:
      if ((W(Z), (o = t.memoizedState), o === null)) return pe(t), null;
      if (((r = (t.flags & 128) !== 0), (i = o.rendering), i === null))
        if (r) Dn(o, !1);
        else {
          if (le !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((i = al(e)), i !== null)) {
                for (
                  t.flags |= 128,
                    Dn(o, !1),
                    r = i.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (o = n),
                    (e = r),
                    (o.flags &= 14680066),
                    (i = o.alternate),
                    i === null
                      ? ((o.childLanes = 0),
                        (o.lanes = e),
                        (o.child = null),
                        (o.subtreeFlags = 0),
                        (o.memoizedProps = null),
                        (o.memoizedState = null),
                        (o.updateQueue = null),
                        (o.dependencies = null),
                        (o.stateNode = null))
                      : ((o.childLanes = i.childLanes),
                        (o.lanes = i.lanes),
                        (o.child = i.child),
                        (o.subtreeFlags = 0),
                        (o.deletions = null),
                        (o.memoizedProps = i.memoizedProps),
                        (o.memoizedState = i.memoizedState),
                        (o.updateQueue = i.updateQueue),
                        (o.type = i.type),
                        (e = i.dependencies),
                        (o.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return H(Z, (Z.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          o.tail !== null &&
            b() > _n &&
            ((t.flags |= 128), (r = !0), Dn(o, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = al(i)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Dn(o, !0),
              o.tail === null && o.tailMode === "hidden" && !i.alternate && !K)
            )
              return pe(t), null;
          } else
            2 * b() - o.renderingStartTime > _n &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Dn(o, !1), (t.lanes = 4194304));
        o.isBackwards
          ? ((i.sibling = t.child), (t.child = i))
          : ((n = o.last),
            n !== null ? (n.sibling = i) : (t.child = i),
            (o.last = i));
      }
      return o.tail !== null
        ? ((t = o.tail),
          (o.rendering = t),
          (o.tail = t.sibling),
          (o.renderingStartTime = b()),
          (t.sibling = null),
          (n = Z.current),
          H(Z, r ? (n & 1) | 2 : n & 1),
          t)
        : (pe(t), null);
    case 22:
    case 23:
      return (
        Ui(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? Le & 1073741824 && (pe(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : pe(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(x(156, t.tag));
}
function Od(e, t) {
  switch ((xi(t), t.tag)) {
    case 1:
      return (
        ze(t.type) && nl(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        En(),
        W(Ne),
        W(he),
        Pi(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return ji(t), null;
    case 13:
      if ((W(Z), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(x(340));
        kn();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return W(Z), null;
    case 4:
      return En(), null;
    case 10:
      return Ci(t.type._context), null;
    case 22:
    case 23:
      return Ui(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Or = !1,
  me = !1,
  Md = typeof WeakSet == "function" ? WeakSet : Set,
  z = null;
function fn(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        q(e, t, r);
      }
    else n.current = null;
}
function Qo(e, t, n) {
  try {
    n();
  } catch (r) {
    q(e, t, r);
  }
}
var Ku = !1;
function Rd(e, t) {
  if (((jo = qr), (e = aa()), gi(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var l = r.anchorOffset,
            o = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, o.nodeType;
          } catch {
            n = null;
            break e;
          }
          var i = 0,
            u = -1,
            s = -1,
            a = 0,
            h = 0,
            p = e,
            m = null;
          t: for (;;) {
            for (
              var v;
              p !== n || (l !== 0 && p.nodeType !== 3) || (u = i + l),
                p !== o || (r !== 0 && p.nodeType !== 3) || (s = i + r),
                p.nodeType === 3 && (i += p.nodeValue.length),
                (v = p.firstChild) !== null;

            )
              (m = p), (p = v);
            for (;;) {
              if (p === e) break t;
              if (
                (m === n && ++a === l && (u = i),
                m === o && ++h === r && (s = i),
                (v = p.nextSibling) !== null)
              )
                break;
              (p = m), (m = p.parentNode);
            }
            p = v;
          }
          n = u === -1 || s === -1 ? null : { start: u, end: s };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Po = { focusedElem: e, selectionRange: n }, qr = !1, z = t; z !== null; )
    if (((t = z), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (z = e);
    else
      for (; z !== null; ) {
        t = z;
        try {
          var w = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (w !== null) {
                  var k = w.memoizedProps,
                    R = w.memoizedState,
                    f = t.stateNode,
                    c = f.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? k : We(t.type, k),
                      R
                    );
                  f.__reactInternalSnapshotBeforeUpdate = c;
                }
                break;
              case 3:
                var d = t.stateNode.containerInfo;
                d.nodeType === 1
                  ? (d.textContent = "")
                  : d.nodeType === 9 &&
                    d.documentElement &&
                    d.removeChild(d.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(x(163));
            }
        } catch (g) {
          q(t, t.return, g);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (z = e);
          break;
        }
        z = t.return;
      }
  return (w = Ku), (Ku = !1), w;
}
function Yn(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var l = (r = r.next);
    do {
      if ((l.tag & e) === e) {
        var o = l.destroy;
        (l.destroy = void 0), o !== void 0 && Qo(t, n, o);
      }
      l = l.next;
    } while (l !== r);
  }
}
function Nl(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function Ko(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function ic(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), ic(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[be], delete t[ir], delete t[Oo], delete t[vd], delete t[yd])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function uc(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Yu(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || uc(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Yo(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = tl));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Yo(e, t, n), e = e.sibling; e !== null; ) Yo(e, t, n), (e = e.sibling);
}
function Zo(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Zo(e, t, n), e = e.sibling; e !== null; ) Zo(e, t, n), (e = e.sibling);
}
var ae = null,
  Qe = !1;
function yt(e, t, n) {
  for (n = n.child; n !== null; ) sc(e, t, n), (n = n.sibling);
}
function sc(e, t, n) {
  if (et && typeof et.onCommitFiberUnmount == "function")
    try {
      et.onCommitFiberUnmount(gl, n);
    } catch {}
  switch (n.tag) {
    case 5:
      me || fn(n, t);
    case 6:
      var r = ae,
        l = Qe;
      (ae = null),
        yt(e, t, n),
        (ae = r),
        (Qe = l),
        ae !== null &&
          (Qe
            ? ((e = ae),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : ae.removeChild(n.stateNode));
      break;
    case 18:
      ae !== null &&
        (Qe
          ? ((e = ae),
            (n = n.stateNode),
            e.nodeType === 8
              ? Xl(e.parentNode, n)
              : e.nodeType === 1 && Xl(e, n),
            tr(e))
          : Xl(ae, n.stateNode));
      break;
    case 4:
      (r = ae),
        (l = Qe),
        (ae = n.stateNode.containerInfo),
        (Qe = !0),
        yt(e, t, n),
        (ae = r),
        (Qe = l);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !me &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        l = r = r.next;
        do {
          var o = l,
            i = o.destroy;
          (o = o.tag),
            i !== void 0 && (o & 2 || o & 4) && Qo(n, t, i),
            (l = l.next);
        } while (l !== r);
      }
      yt(e, t, n);
      break;
    case 1:
      if (
        !me &&
        (fn(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (u) {
          q(n, t, u);
        }
      yt(e, t, n);
      break;
    case 21:
      yt(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((me = (r = me) || n.memoizedState !== null), yt(e, t, n), (me = r))
        : yt(e, t, n);
      break;
    default:
      yt(e, t, n);
  }
}
function Zu(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Md()),
      t.forEach(function (r) {
        var l = Vd.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(l, l));
      });
  }
}
function Ve(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var l = n[r];
      try {
        var o = e,
          i = t,
          u = i;
        e: for (; u !== null; ) {
          switch (u.tag) {
            case 5:
              (ae = u.stateNode), (Qe = !1);
              break e;
            case 3:
              (ae = u.stateNode.containerInfo), (Qe = !0);
              break e;
            case 4:
              (ae = u.stateNode.containerInfo), (Qe = !0);
              break e;
          }
          u = u.return;
        }
        if (ae === null) throw Error(x(160));
        sc(o, i, l), (ae = null), (Qe = !1);
        var s = l.alternate;
        s !== null && (s.return = null), (l.return = null);
      } catch (a) {
        q(l, t, a);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) ac(t, e), (t = t.sibling);
}
function ac(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Ve(t, e), Ge(e), r & 4)) {
        try {
          Yn(3, e, e.return), Nl(3, e);
        } catch (k) {
          q(e, e.return, k);
        }
        try {
          Yn(5, e, e.return);
        } catch (k) {
          q(e, e.return, k);
        }
      }
      break;
    case 1:
      Ve(t, e), Ge(e), r & 512 && n !== null && fn(n, n.return);
      break;
    case 5:
      if (
        (Ve(t, e),
        Ge(e),
        r & 512 && n !== null && fn(n, n.return),
        e.flags & 32)
      ) {
        var l = e.stateNode;
        try {
          Jn(l, "");
        } catch (k) {
          q(e, e.return, k);
        }
      }
      if (r & 4 && ((l = e.stateNode), l != null)) {
        var o = e.memoizedProps,
          i = n !== null ? n.memoizedProps : o,
          u = e.type,
          s = e.updateQueue;
        if (((e.updateQueue = null), s !== null))
          try {
            u === "input" && o.type === "radio" && o.name != null && Ls(l, o),
              go(u, i);
            var a = go(u, o);
            for (i = 0; i < s.length; i += 2) {
              var h = s[i],
                p = s[i + 1];
              h === "style"
                ? Ds(l, p)
                : h === "dangerouslySetInnerHTML"
                ? Ms(l, p)
                : h === "children"
                ? Jn(l, p)
                : oi(l, h, p, a);
            }
            switch (u) {
              case "input":
                po(l, o);
                break;
              case "textarea":
                Ts(l, o);
                break;
              case "select":
                var m = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!o.multiple;
                var v = o.value;
                v != null
                  ? pn(l, !!o.multiple, v, !1)
                  : m !== !!o.multiple &&
                    (o.defaultValue != null
                      ? pn(l, !!o.multiple, o.defaultValue, !0)
                      : pn(l, !!o.multiple, o.multiple ? [] : "", !1));
            }
            l[ir] = o;
          } catch (k) {
            q(e, e.return, k);
          }
      }
      break;
    case 6:
      if ((Ve(t, e), Ge(e), r & 4)) {
        if (e.stateNode === null) throw Error(x(162));
        (l = e.stateNode), (o = e.memoizedProps);
        try {
          l.nodeValue = o;
        } catch (k) {
          q(e, e.return, k);
        }
      }
      break;
    case 3:
      if (
        (Ve(t, e), Ge(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          tr(t.containerInfo);
        } catch (k) {
          q(e, e.return, k);
        }
      break;
    case 4:
      Ve(t, e), Ge(e);
      break;
    case 13:
      Ve(t, e),
        Ge(e),
        (l = e.child),
        l.flags & 8192 &&
          ((o = l.memoizedState !== null),
          (l.stateNode.isHidden = o),
          !o ||
            (l.alternate !== null && l.alternate.memoizedState !== null) ||
            (Bi = b())),
        r & 4 && Zu(e);
      break;
    case 22:
      if (
        ((h = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((me = (a = me) || h), Ve(t, e), (me = a)) : Ve(t, e),
        Ge(e),
        r & 8192)
      ) {
        if (
          ((a = e.memoizedState !== null),
          (e.stateNode.isHidden = a) && !h && e.mode & 1)
        )
          for (z = e, h = e.child; h !== null; ) {
            for (p = z = h; z !== null; ) {
              switch (((m = z), (v = m.child), m.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Yn(4, m, m.return);
                  break;
                case 1:
                  fn(m, m.return);
                  var w = m.stateNode;
                  if (typeof w.componentWillUnmount == "function") {
                    (r = m), (n = m.return);
                    try {
                      (t = r),
                        (w.props = t.memoizedProps),
                        (w.state = t.memoizedState),
                        w.componentWillUnmount();
                    } catch (k) {
                      q(r, n, k);
                    }
                  }
                  break;
                case 5:
                  fn(m, m.return);
                  break;
                case 22:
                  if (m.memoizedState !== null) {
                    Gu(p);
                    continue;
                  }
              }
              v !== null ? ((v.return = m), (z = v)) : Gu(p);
            }
            h = h.sibling;
          }
        e: for (h = null, p = e; ; ) {
          if (p.tag === 5) {
            if (h === null) {
              h = p;
              try {
                (l = p.stateNode),
                  a
                    ? ((o = l.style),
                      typeof o.setProperty == "function"
                        ? o.setProperty("display", "none", "important")
                        : (o.display = "none"))
                    : ((u = p.stateNode),
                      (s = p.memoizedProps.style),
                      (i =
                        s != null && s.hasOwnProperty("display")
                          ? s.display
                          : null),
                      (u.style.display = Rs("display", i)));
              } catch (k) {
                q(e, e.return, k);
              }
            }
          } else if (p.tag === 6) {
            if (h === null)
              try {
                p.stateNode.nodeValue = a ? "" : p.memoizedProps;
              } catch (k) {
                q(e, e.return, k);
              }
          } else if (
            ((p.tag !== 22 && p.tag !== 23) ||
              p.memoizedState === null ||
              p === e) &&
            p.child !== null
          ) {
            (p.child.return = p), (p = p.child);
            continue;
          }
          if (p === e) break e;
          for (; p.sibling === null; ) {
            if (p.return === null || p.return === e) break e;
            h === p && (h = null), (p = p.return);
          }
          h === p && (h = null), (p.sibling.return = p.return), (p = p.sibling);
        }
      }
      break;
    case 19:
      Ve(t, e), Ge(e), r & 4 && Zu(e);
      break;
    case 21:
      break;
    default:
      Ve(t, e), Ge(e);
  }
}
function Ge(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (uc(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(x(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (Jn(l, ""), (r.flags &= -33));
          var o = Yu(e);
          Zo(e, o, l);
          break;
        case 3:
        case 4:
          var i = r.stateNode.containerInfo,
            u = Yu(e);
          Yo(e, u, i);
          break;
        default:
          throw Error(x(161));
      }
    } catch (s) {
      q(e, e.return, s);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Dd(e, t, n) {
  (z = e), cc(e);
}
function cc(e, t, n) {
  for (var r = (e.mode & 1) !== 0; z !== null; ) {
    var l = z,
      o = l.child;
    if (l.tag === 22 && r) {
      var i = l.memoizedState !== null || Or;
      if (!i) {
        var u = l.alternate,
          s = (u !== null && u.memoizedState !== null) || me;
        u = Or;
        var a = me;
        if (((Or = i), (me = s) && !a))
          for (z = l; z !== null; )
            (i = z),
              (s = i.child),
              i.tag === 22 && i.memoizedState !== null
                ? Ju(l)
                : s !== null
                ? ((s.return = i), (z = s))
                : Ju(l);
        for (; o !== null; ) (z = o), cc(o), (o = o.sibling);
        (z = l), (Or = u), (me = a);
      }
      Xu(e);
    } else
      l.subtreeFlags & 8772 && o !== null ? ((o.return = l), (z = o)) : Xu(e);
  }
}
function Xu(e) {
  for (; z !== null; ) {
    var t = z;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              me || Nl(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !me)
                if (n === null) r.componentDidMount();
                else {
                  var l =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : We(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    l,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var o = t.updateQueue;
              o !== null && Ou(t, o, r);
              break;
            case 3:
              var i = t.updateQueue;
              if (i !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                Ou(t, i, n);
              }
              break;
            case 5:
              var u = t.stateNode;
              if (n === null && t.flags & 4) {
                n = u;
                var s = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    s.autoFocus && n.focus();
                    break;
                  case "img":
                    s.src && (n.src = s.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var a = t.alternate;
                if (a !== null) {
                  var h = a.memoizedState;
                  if (h !== null) {
                    var p = h.dehydrated;
                    p !== null && tr(p);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(x(163));
          }
        me || (t.flags & 512 && Ko(t));
      } catch (m) {
        q(t, t.return, m);
      }
    }
    if (t === e) {
      z = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (z = n);
      break;
    }
    z = t.return;
  }
}
function Gu(e) {
  for (; z !== null; ) {
    var t = z;
    if (t === e) {
      z = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (z = n);
      break;
    }
    z = t.return;
  }
}
function Ju(e) {
  for (; z !== null; ) {
    var t = z;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Nl(4, t);
          } catch (s) {
            q(t, n, s);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (s) {
              q(t, l, s);
            }
          }
          var o = t.return;
          try {
            Ko(t);
          } catch (s) {
            q(t, o, s);
          }
          break;
        case 5:
          var i = t.return;
          try {
            Ko(t);
          } catch (s) {
            q(t, i, s);
          }
      }
    } catch (s) {
      q(t, t.return, s);
    }
    if (t === e) {
      z = null;
      break;
    }
    var u = t.sibling;
    if (u !== null) {
      (u.return = t.return), (z = u);
      break;
    }
    z = t.return;
  }
}
var Id = Math.ceil,
  dl = dt.ReactCurrentDispatcher,
  Ii = dt.ReactCurrentOwner,
  Ue = dt.ReactCurrentBatchConfig,
  B = 0,
  se = null,
  te = null,
  ce = 0,
  Le = 0,
  dn = Ft(0),
  le = 0,
  dr = null,
  Xt = 0,
  zl = 0,
  Fi = 0,
  Zn = null,
  Ce = null,
  Bi = 0,
  _n = 1 / 0,
  rt = null,
  pl = !1,
  Xo = null,
  Lt = null,
  Mr = !1,
  Et = null,
  ml = 0,
  Xn = 0,
  Go = null,
  Wr = -1,
  Qr = 0;
function we() {
  return B & 6 ? b() : Wr !== -1 ? Wr : (Wr = b());
}
function Tt(e) {
  return e.mode & 1
    ? B & 2 && ce !== 0
      ? ce & -ce
      : wd.transition !== null
      ? (Qr === 0 && (Qr = Ys()), Qr)
      : ((e = A),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : ea(e.type))),
        e)
    : 1;
}
function Ze(e, t, n, r) {
  if (50 < Xn) throw ((Xn = 0), (Go = null), Error(x(185)));
  mr(e, n, r),
    (!(B & 2) || e !== se) &&
      (e === se && (!(B & 2) && (zl |= n), le === 4 && kt(e, ce)),
      je(e, r),
      n === 1 && B === 0 && !(t.mode & 1) && ((_n = b() + 500), El && Bt()));
}
function je(e, t) {
  var n = e.callbackNode;
  wf(e, t);
  var r = Jr(e, e === se ? ce : 0);
  if (r === 0)
    n !== null && iu(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && iu(n), t === 1))
      e.tag === 0 ? gd(qu.bind(null, e)) : wa(qu.bind(null, e)),
        md(function () {
          !(B & 6) && Bt();
        }),
        (n = null);
    else {
      switch (Zs(r)) {
        case 1:
          n = ci;
          break;
        case 4:
          n = Qs;
          break;
        case 16:
          n = Gr;
          break;
        case 536870912:
          n = Ks;
          break;
        default:
          n = Gr;
      }
      n = gc(n, fc.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function fc(e, t) {
  if (((Wr = -1), (Qr = 0), B & 6)) throw Error(x(327));
  var n = e.callbackNode;
  if (gn() && e.callbackNode !== n) return null;
  var r = Jr(e, e === se ? ce : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = hl(e, r);
  else {
    t = r;
    var l = B;
    B |= 2;
    var o = pc();
    (se !== e || ce !== t) && ((rt = null), (_n = b() + 500), Wt(e, t));
    do
      try {
        Ad();
        break;
      } catch (u) {
        dc(e, u);
      }
    while (!0);
    Ei(),
      (dl.current = o),
      (B = l),
      te !== null ? (t = 0) : ((se = null), (ce = 0), (t = le));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((l = Eo(e)), l !== 0 && ((r = l), (t = Jo(e, l)))), t === 1)
    )
      throw ((n = dr), Wt(e, 0), kt(e, r), je(e, b()), n);
    if (t === 6) kt(e, r);
    else {
      if (
        ((l = e.current.alternate),
        !(r & 30) &&
          !Fd(l) &&
          ((t = hl(e, r)),
          t === 2 && ((o = Eo(e)), o !== 0 && ((r = o), (t = Jo(e, o)))),
          t === 1))
      )
        throw ((n = dr), Wt(e, 0), kt(e, r), je(e, b()), n);
      switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(x(345));
        case 2:
          Ut(e, Ce, rt);
          break;
        case 3:
          if (
            (kt(e, r), (r & 130023424) === r && ((t = Bi + 500 - b()), 10 < t))
          ) {
            if (Jr(e, 0) !== 0) break;
            if (((l = e.suspendedLanes), (l & r) !== r)) {
              we(), (e.pingedLanes |= e.suspendedLanes & l);
              break;
            }
            e.timeoutHandle = To(Ut.bind(null, e, Ce, rt), t);
            break;
          }
          Ut(e, Ce, rt);
          break;
        case 4:
          if ((kt(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var i = 31 - Ye(r);
            (o = 1 << i), (i = t[i]), i > l && (l = i), (r &= ~o);
          }
          if (
            ((r = l),
            (r = b() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * Id(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = To(Ut.bind(null, e, Ce, rt), r);
            break;
          }
          Ut(e, Ce, rt);
          break;
        case 5:
          Ut(e, Ce, rt);
          break;
        default:
          throw Error(x(329));
      }
    }
  }
  return je(e, b()), e.callbackNode === n ? fc.bind(null, e) : null;
}
function Jo(e, t) {
  var n = Zn;
  return (
    e.current.memoizedState.isDehydrated && (Wt(e, t).flags |= 256),
    (e = hl(e, t)),
    e !== 2 && ((t = Ce), (Ce = n), t !== null && qo(t)),
    e
  );
}
function qo(e) {
  Ce === null ? (Ce = e) : Ce.push.apply(Ce, e);
}
function Fd(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var l = n[r],
            o = l.getSnapshot;
          l = l.value;
          try {
            if (!Xe(o(), l)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function kt(e, t) {
  for (
    t &= ~Fi,
      t &= ~zl,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - Ye(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function qu(e) {
  if (B & 6) throw Error(x(327));
  gn();
  var t = Jr(e, 0);
  if (!(t & 1)) return je(e, b()), null;
  var n = hl(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Eo(e);
    r !== 0 && ((t = r), (n = Jo(e, r)));
  }
  if (n === 1) throw ((n = dr), Wt(e, 0), kt(e, t), je(e, b()), n);
  if (n === 6) throw Error(x(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Ut(e, Ce, rt),
    je(e, b()),
    null
  );
}
function Ai(e, t) {
  var n = B;
  B |= 1;
  try {
    return e(t);
  } finally {
    (B = n), B === 0 && ((_n = b() + 500), El && Bt());
  }
}
function Gt(e) {
  Et !== null && Et.tag === 0 && !(B & 6) && gn();
  var t = B;
  B |= 1;
  var n = Ue.transition,
    r = A;
  try {
    if (((Ue.transition = null), (A = 1), e)) return e();
  } finally {
    (A = r), (Ue.transition = n), (B = t), !(B & 6) && Bt();
  }
}
function Ui() {
  (Le = dn.current), W(dn);
}
function Wt(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), pd(n)), te !== null))
    for (n = te.return; n !== null; ) {
      var r = n;
      switch ((xi(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && nl();
          break;
        case 3:
          En(), W(Ne), W(he), Pi();
          break;
        case 5:
          ji(r);
          break;
        case 4:
          En();
          break;
        case 13:
          W(Z);
          break;
        case 19:
          W(Z);
          break;
        case 10:
          Ci(r.type._context);
          break;
        case 22:
        case 23:
          Ui();
      }
      n = n.return;
    }
  if (
    ((se = e),
    (te = e = Ot(e.current, null)),
    (ce = Le = t),
    (le = 0),
    (dr = null),
    (Fi = zl = Xt = 0),
    (Ce = Zn = null),
    $t !== null)
  ) {
    for (t = 0; t < $t.length; t++)
      if (((n = $t[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var l = r.next,
          o = n.pending;
        if (o !== null) {
          var i = o.next;
          (o.next = l), (r.next = i);
        }
        n.pending = r;
      }
    $t = null;
  }
  return e;
}
function dc(e, t) {
  do {
    var n = te;
    try {
      if ((Ei(), (Hr.current = fl), cl)) {
        for (var r = X.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), (r = r.next);
        }
        cl = !1;
      }
      if (
        ((Zt = 0),
        (ue = re = X = null),
        (Kn = !1),
        (ar = 0),
        (Ii.current = null),
        n === null || n.return === null)
      ) {
        (le = 1), (dr = t), (te = null);
        break;
      }
      e: {
        var o = e,
          i = n.return,
          u = n,
          s = t;
        if (
          ((t = ce),
          (u.flags |= 32768),
          s !== null && typeof s == "object" && typeof s.then == "function")
        ) {
          var a = s,
            h = u,
            p = h.tag;
          if (!(h.mode & 1) && (p === 0 || p === 11 || p === 15)) {
            var m = h.alternate;
            m
              ? ((h.updateQueue = m.updateQueue),
                (h.memoizedState = m.memoizedState),
                (h.lanes = m.lanes))
              : ((h.updateQueue = null), (h.memoizedState = null));
          }
          var v = Au(i);
          if (v !== null) {
            (v.flags &= -257),
              Uu(v, i, u, o, t),
              v.mode & 1 && Bu(o, a, t),
              (t = v),
              (s = a);
            var w = t.updateQueue;
            if (w === null) {
              var k = new Set();
              k.add(s), (t.updateQueue = k);
            } else w.add(s);
            break e;
          } else {
            if (!(t & 1)) {
              Bu(o, a, t), Hi();
              break e;
            }
            s = Error(x(426));
          }
        } else if (K && u.mode & 1) {
          var R = Au(i);
          if (R !== null) {
            !(R.flags & 65536) && (R.flags |= 256),
              Uu(R, i, u, o, t),
              ki(Cn(s, u));
            break e;
          }
        }
        (o = s = Cn(s, u)),
          le !== 4 && (le = 2),
          Zn === null ? (Zn = [o]) : Zn.push(o),
          (o = i);
        do {
          switch (o.tag) {
            case 3:
              (o.flags |= 65536), (t &= -t), (o.lanes |= t);
              var f = Xa(o, s, t);
              Tu(o, f);
              break e;
            case 1:
              u = s;
              var c = o.type,
                d = o.stateNode;
              if (
                !(o.flags & 128) &&
                (typeof c.getDerivedStateFromError == "function" ||
                  (d !== null &&
                    typeof d.componentDidCatch == "function" &&
                    (Lt === null || !Lt.has(d))))
              ) {
                (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                var g = Ga(o, u, t);
                Tu(o, g);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      hc(n);
    } catch (C) {
      (t = C), te === n && n !== null && (te = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function pc() {
  var e = dl.current;
  return (dl.current = fl), e === null ? fl : e;
}
function Hi() {
  (le === 0 || le === 3 || le === 2) && (le = 4),
    se === null || (!(Xt & 268435455) && !(zl & 268435455)) || kt(se, ce);
}
function hl(e, t) {
  var n = B;
  B |= 2;
  var r = pc();
  (se !== e || ce !== t) && ((rt = null), Wt(e, t));
  do
    try {
      Bd();
      break;
    } catch (l) {
      dc(e, l);
    }
  while (!0);
  if ((Ei(), (B = n), (dl.current = r), te !== null)) throw Error(x(261));
  return (se = null), (ce = 0), le;
}
function Bd() {
  for (; te !== null; ) mc(te);
}
function Ad() {
  for (; te !== null && !cf(); ) mc(te);
}
function mc(e) {
  var t = yc(e.alternate, e, Le);
  (e.memoizedProps = e.pendingProps),
    t === null ? hc(e) : (te = t),
    (Ii.current = null);
}
function hc(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = Od(n, t)), n !== null)) {
        (n.flags &= 32767), (te = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (le = 6), (te = null);
        return;
      }
    } else if (((n = Td(n, t, Le)), n !== null)) {
      te = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      te = t;
      return;
    }
    te = t = e;
  } while (t !== null);
  le === 0 && (le = 5);
}
function Ut(e, t, n) {
  var r = A,
    l = Ue.transition;
  try {
    (Ue.transition = null), (A = 1), Ud(e, t, n, r);
  } finally {
    (Ue.transition = l), (A = r);
  }
  return null;
}
function Ud(e, t, n, r) {
  do gn();
  while (Et !== null);
  if (B & 6) throw Error(x(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(x(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var o = n.lanes | n.childLanes;
  if (
    (xf(e, o),
    e === se && ((te = se = null), (ce = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Mr ||
      ((Mr = !0),
      gc(Gr, function () {
        return gn(), null;
      })),
    (o = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || o)
  ) {
    (o = Ue.transition), (Ue.transition = null);
    var i = A;
    A = 1;
    var u = B;
    (B |= 4),
      (Ii.current = null),
      Rd(e, n),
      ac(n, e),
      id(Po),
      (qr = !!jo),
      (Po = jo = null),
      (e.current = n),
      Dd(n),
      ff(),
      (B = u),
      (A = i),
      (Ue.transition = o);
  } else e.current = n;
  if (
    (Mr && ((Mr = !1), (Et = e), (ml = l)),
    (o = e.pendingLanes),
    o === 0 && (Lt = null),
    mf(n.stateNode),
    je(e, b()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest });
  if (pl) throw ((pl = !1), (e = Xo), (Xo = null), e);
  return (
    ml & 1 && e.tag !== 0 && gn(),
    (o = e.pendingLanes),
    o & 1 ? (e === Go ? Xn++ : ((Xn = 0), (Go = e))) : (Xn = 0),
    Bt(),
    null
  );
}
function gn() {
  if (Et !== null) {
    var e = Zs(ml),
      t = Ue.transition,
      n = A;
    try {
      if (((Ue.transition = null), (A = 16 > e ? 16 : e), Et === null))
        var r = !1;
      else {
        if (((e = Et), (Et = null), (ml = 0), B & 6)) throw Error(x(331));
        var l = B;
        for (B |= 4, z = e.current; z !== null; ) {
          var o = z,
            i = o.child;
          if (z.flags & 16) {
            var u = o.deletions;
            if (u !== null) {
              for (var s = 0; s < u.length; s++) {
                var a = u[s];
                for (z = a; z !== null; ) {
                  var h = z;
                  switch (h.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Yn(8, h, o);
                  }
                  var p = h.child;
                  if (p !== null) (p.return = h), (z = p);
                  else
                    for (; z !== null; ) {
                      h = z;
                      var m = h.sibling,
                        v = h.return;
                      if ((ic(h), h === a)) {
                        z = null;
                        break;
                      }
                      if (m !== null) {
                        (m.return = v), (z = m);
                        break;
                      }
                      z = v;
                    }
                }
              }
              var w = o.alternate;
              if (w !== null) {
                var k = w.child;
                if (k !== null) {
                  w.child = null;
                  do {
                    var R = k.sibling;
                    (k.sibling = null), (k = R);
                  } while (k !== null);
                }
              }
              z = o;
            }
          }
          if (o.subtreeFlags & 2064 && i !== null) (i.return = o), (z = i);
          else
            e: for (; z !== null; ) {
              if (((o = z), o.flags & 2048))
                switch (o.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Yn(9, o, o.return);
                }
              var f = o.sibling;
              if (f !== null) {
                (f.return = o.return), (z = f);
                break e;
              }
              z = o.return;
            }
        }
        var c = e.current;
        for (z = c; z !== null; ) {
          i = z;
          var d = i.child;
          if (i.subtreeFlags & 2064 && d !== null) (d.return = i), (z = d);
          else
            e: for (i = c; z !== null; ) {
              if (((u = z), u.flags & 2048))
                try {
                  switch (u.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Nl(9, u);
                  }
                } catch (C) {
                  q(u, u.return, C);
                }
              if (u === i) {
                z = null;
                break e;
              }
              var g = u.sibling;
              if (g !== null) {
                (g.return = u.return), (z = g);
                break e;
              }
              z = u.return;
            }
        }
        if (
          ((B = l), Bt(), et && typeof et.onPostCommitFiberRoot == "function")
        )
          try {
            et.onPostCommitFiberRoot(gl, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (A = n), (Ue.transition = t);
    }
  }
  return !1;
}
function bu(e, t, n) {
  (t = Cn(n, t)),
    (t = Xa(e, t, 1)),
    (e = Pt(e, t, 1)),
    (t = we()),
    e !== null && (mr(e, 1, t), je(e, t));
}
function q(e, t, n) {
  if (e.tag === 3) bu(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        bu(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (Lt === null || !Lt.has(r)))
        ) {
          (e = Cn(n, e)),
            (e = Ga(t, e, 1)),
            (t = Pt(t, e, 1)),
            (e = we()),
            t !== null && (mr(t, 1, e), je(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function Hd(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = we()),
    (e.pingedLanes |= e.suspendedLanes & n),
    se === e &&
      (ce & n) === n &&
      (le === 4 || (le === 3 && (ce & 130023424) === ce && 500 > b() - Bi)
        ? Wt(e, 0)
        : (Fi |= n)),
    je(e, t);
}
function vc(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = Er), (Er <<= 1), !(Er & 130023424) && (Er = 4194304))
      : (t = 1));
  var n = we();
  (e = ct(e, t)), e !== null && (mr(e, t, n), je(e, n));
}
function $d(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), vc(e, n);
}
function Vd(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        l = e.memoizedState;
      l !== null && (n = l.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(x(314));
  }
  r !== null && r.delete(t), vc(e, n);
}
var yc;
yc = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Ne.current) _e = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (_e = !1), Ld(e, t, n);
      _e = !!(e.flags & 131072);
    }
  else (_e = !1), K && t.flags & 1048576 && xa(t, ol, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Vr(e, t), (e = t.pendingProps);
      var l = xn(t, he.current);
      yn(t, n), (l = Ti(null, t, r, e, l, n));
      var o = Oi();
      return (
        (t.flags |= 1),
        typeof l == "object" &&
        l !== null &&
        typeof l.render == "function" &&
        l.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            ze(r) ? ((o = !0), rl(t)) : (o = !1),
            (t.memoizedState =
              l.state !== null && l.state !== void 0 ? l.state : null),
            Ni(t),
            (l.updater = Cl),
            (t.stateNode = l),
            (l._reactInternals = t),
            Bo(t, r, e, n),
            (t = Ho(null, t, r, !0, o, n)))
          : ((t.tag = 0), K && o && wi(t), ge(null, t, l, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Vr(e, t),
          (e = t.pendingProps),
          (l = r._init),
          (r = l(r._payload)),
          (t.type = r),
          (l = t.tag = Qd(r)),
          (e = We(r, e)),
          l)
        ) {
          case 0:
            t = Uo(null, t, r, e, n);
            break e;
          case 1:
            t = Vu(null, t, r, e, n);
            break e;
          case 11:
            t = Hu(null, t, r, e, n);
            break e;
          case 14:
            t = $u(null, t, r, We(r.type, e), n);
            break e;
        }
        throw Error(x(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : We(r, l)),
        Uo(e, t, r, l, n)
      );
    case 1:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : We(r, l)),
        Vu(e, t, r, l, n)
      );
    case 3:
      e: {
        if ((ec(t), e === null)) throw Error(x(387));
        (r = t.pendingProps),
          (o = t.memoizedState),
          (l = o.element),
          Ca(e, t),
          sl(t, r, null, n);
        var i = t.memoizedState;
        if (((r = i.element), o.isDehydrated))
          if (
            ((o = {
              element: r,
              isDehydrated: !1,
              cache: i.cache,
              pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
              transitions: i.transitions,
            }),
            (t.updateQueue.baseState = o),
            (t.memoizedState = o),
            t.flags & 256)
          ) {
            (l = Cn(Error(x(423)), t)), (t = Wu(e, t, r, n, l));
            break e;
          } else if (r !== l) {
            (l = Cn(Error(x(424)), t)), (t = Wu(e, t, r, n, l));
            break e;
          } else
            for (
              Te = jt(t.stateNode.containerInfo.firstChild),
                Oe = t,
                K = !0,
                Ke = null,
                n = ja(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((kn(), r === l)) {
            t = ft(e, t, n);
            break e;
          }
          ge(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Pa(t),
        e === null && Do(t),
        (r = t.type),
        (l = t.pendingProps),
        (o = e !== null ? e.memoizedProps : null),
        (i = l.children),
        Lo(r, l) ? (i = null) : o !== null && Lo(r, o) && (t.flags |= 32),
        ba(e, t),
        ge(e, t, i, n),
        t.child
      );
    case 6:
      return e === null && Do(t), null;
    case 13:
      return tc(e, t, n);
    case 4:
      return (
        zi(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = Sn(t, null, r, n)) : ge(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : We(r, l)),
        Hu(e, t, r, l, n)
      );
    case 7:
      return ge(e, t, t.pendingProps, n), t.child;
    case 8:
      return ge(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return ge(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (l = t.pendingProps),
          (o = t.memoizedProps),
          (i = l.value),
          H(il, r._currentValue),
          (r._currentValue = i),
          o !== null)
        )
          if (Xe(o.value, i)) {
            if (o.children === l.children && !Ne.current) {
              t = ft(e, t, n);
              break e;
            }
          } else
            for (o = t.child, o !== null && (o.return = t); o !== null; ) {
              var u = o.dependencies;
              if (u !== null) {
                i = o.child;
                for (var s = u.firstContext; s !== null; ) {
                  if (s.context === r) {
                    if (o.tag === 1) {
                      (s = ut(-1, n & -n)), (s.tag = 2);
                      var a = o.updateQueue;
                      if (a !== null) {
                        a = a.shared;
                        var h = a.pending;
                        h === null
                          ? (s.next = s)
                          : ((s.next = h.next), (h.next = s)),
                          (a.pending = s);
                      }
                    }
                    (o.lanes |= n),
                      (s = o.alternate),
                      s !== null && (s.lanes |= n),
                      Io(o.return, n, t),
                      (u.lanes |= n);
                    break;
                  }
                  s = s.next;
                }
              } else if (o.tag === 10) i = o.type === t.type ? null : o.child;
              else if (o.tag === 18) {
                if (((i = o.return), i === null)) throw Error(x(341));
                (i.lanes |= n),
                  (u = i.alternate),
                  u !== null && (u.lanes |= n),
                  Io(i, n, t),
                  (i = o.sibling);
              } else i = o.child;
              if (i !== null) i.return = o;
              else
                for (i = o; i !== null; ) {
                  if (i === t) {
                    i = null;
                    break;
                  }
                  if (((o = i.sibling), o !== null)) {
                    (o.return = i.return), (i = o);
                    break;
                  }
                  i = i.return;
                }
              o = i;
            }
        ge(e, t, l.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (l = t.type),
        (r = t.pendingProps.children),
        yn(t, n),
        (l = He(l)),
        (r = r(l)),
        (t.flags |= 1),
        ge(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (l = We(r, t.pendingProps)),
        (l = We(r.type, l)),
        $u(e, t, r, l, n)
      );
    case 15:
      return Ja(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : We(r, l)),
        Vr(e, t),
        (t.tag = 1),
        ze(r) ? ((e = !0), rl(t)) : (e = !1),
        yn(t, n),
        Na(t, r, l),
        Bo(t, r, l, n),
        Ho(null, t, r, !0, e, n)
      );
    case 19:
      return nc(e, t, n);
    case 22:
      return qa(e, t, n);
  }
  throw Error(x(156, t.tag));
};
function gc(e, t) {
  return Ws(e, t);
}
function Wd(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function Ae(e, t, n, r) {
  return new Wd(e, t, n, r);
}
function $i(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function Qd(e) {
  if (typeof e == "function") return $i(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === ui)) return 11;
    if (e === si) return 14;
  }
  return 2;
}
function Ot(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Ae(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function Kr(e, t, n, r, l, o) {
  var i = 2;
  if (((r = e), typeof e == "function")) $i(e) && (i = 1);
  else if (typeof e == "string") i = 5;
  else
    e: switch (e) {
      case tn:
        return Qt(n.children, l, o, t);
      case ii:
        (i = 8), (l |= 8);
        break;
      case uo:
        return (
          (e = Ae(12, n, t, l | 2)), (e.elementType = uo), (e.lanes = o), e
        );
      case so:
        return (e = Ae(13, n, t, l)), (e.elementType = so), (e.lanes = o), e;
      case ao:
        return (e = Ae(19, n, t, l)), (e.elementType = ao), (e.lanes = o), e;
      case zs:
        return jl(n, l, o, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case _s:
              i = 10;
              break e;
            case Ns:
              i = 9;
              break e;
            case ui:
              i = 11;
              break e;
            case si:
              i = 14;
              break e;
            case gt:
              (i = 16), (r = null);
              break e;
          }
        throw Error(x(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Ae(i, n, t, l)), (t.elementType = e), (t.type = r), (t.lanes = o), t
  );
}
function Qt(e, t, n, r) {
  return (e = Ae(7, e, r, t)), (e.lanes = n), e;
}
function jl(e, t, n, r) {
  return (
    (e = Ae(22, e, r, t)),
    (e.elementType = zs),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function ro(e, t, n) {
  return (e = Ae(6, e, null, t)), (e.lanes = n), e;
}
function lo(e, t, n) {
  return (
    (t = Ae(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function Kd(e, t, n, r, l) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Bl(0)),
    (this.expirationTimes = Bl(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Bl(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = l),
    (this.mutableSourceEagerHydrationData = null);
}
function Vi(e, t, n, r, l, o, i, u, s) {
  return (
    (e = new Kd(e, t, n, u, s)),
    t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
    (o = Ae(3, null, null, t)),
    (e.current = o),
    (o.stateNode = e),
    (o.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Ni(o),
    e
  );
}
function Yd(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: en,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function wc(e) {
  if (!e) return Dt;
  e = e._reactInternals;
  e: {
    if (qt(e) !== e || e.tag !== 1) throw Error(x(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (ze(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(x(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (ze(n)) return ga(e, n, t);
  }
  return t;
}
function xc(e, t, n, r, l, o, i, u, s) {
  return (
    (e = Vi(n, r, !0, e, l, o, i, u, s)),
    (e.context = wc(null)),
    (n = e.current),
    (r = we()),
    (l = Tt(n)),
    (o = ut(r, l)),
    (o.callback = t ?? null),
    Pt(n, o, l),
    (e.current.lanes = l),
    mr(e, l, r),
    je(e, r),
    e
  );
}
function Pl(e, t, n, r) {
  var l = t.current,
    o = we(),
    i = Tt(l);
  return (
    (n = wc(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = ut(o, i)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = Pt(l, t, i)),
    e !== null && (Ze(e, l, i, o), Ur(e, l, i)),
    i
  );
}
function vl(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function es(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Wi(e, t) {
  es(e, t), (e = e.alternate) && es(e, t);
}
function Zd() {
  return null;
}
var kc =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Qi(e) {
  this._internalRoot = e;
}
Ll.prototype.render = Qi.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(x(409));
  Pl(e, t, null, null);
};
Ll.prototype.unmount = Qi.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Gt(function () {
      Pl(null, e, null, null);
    }),
      (t[at] = null);
  }
};
function Ll(e) {
  this._internalRoot = e;
}
Ll.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Js();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < xt.length && t !== 0 && t < xt[n].priority; n++);
    xt.splice(n, 0, e), n === 0 && bs(e);
  }
};
function Ki(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Tl(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function ts() {}
function Xd(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var o = r;
      r = function () {
        var a = vl(i);
        o.call(a);
      };
    }
    var i = xc(t, r, e, 0, null, !1, !1, "", ts);
    return (
      (e._reactRootContainer = i),
      (e[at] = i.current),
      lr(e.nodeType === 8 ? e.parentNode : e),
      Gt(),
      i
    );
  }
  for (; (l = e.lastChild); ) e.removeChild(l);
  if (typeof r == "function") {
    var u = r;
    r = function () {
      var a = vl(s);
      u.call(a);
    };
  }
  var s = Vi(e, 0, !1, null, null, !1, !1, "", ts);
  return (
    (e._reactRootContainer = s),
    (e[at] = s.current),
    lr(e.nodeType === 8 ? e.parentNode : e),
    Gt(function () {
      Pl(t, s, n, r);
    }),
    s
  );
}
function Ol(e, t, n, r, l) {
  var o = n._reactRootContainer;
  if (o) {
    var i = o;
    if (typeof l == "function") {
      var u = l;
      l = function () {
        var s = vl(i);
        u.call(s);
      };
    }
    Pl(t, i, e, l);
  } else i = Xd(n, t, e, l, r);
  return vl(i);
}
Xs = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = An(t.pendingLanes);
        n !== 0 &&
          (fi(t, n | 1), je(t, b()), !(B & 6) && ((_n = b() + 500), Bt()));
      }
      break;
    case 13:
      Gt(function () {
        var r = ct(e, 1);
        if (r !== null) {
          var l = we();
          Ze(r, e, 1, l);
        }
      }),
        Wi(e, 1);
  }
};
di = function (e) {
  if (e.tag === 13) {
    var t = ct(e, 134217728);
    if (t !== null) {
      var n = we();
      Ze(t, e, 134217728, n);
    }
    Wi(e, 134217728);
  }
};
Gs = function (e) {
  if (e.tag === 13) {
    var t = Tt(e),
      n = ct(e, t);
    if (n !== null) {
      var r = we();
      Ze(n, e, t, r);
    }
    Wi(e, t);
  }
};
Js = function () {
  return A;
};
qs = function (e, t) {
  var n = A;
  try {
    return (A = e), t();
  } finally {
    A = n;
  }
};
xo = function (e, t, n) {
  switch (t) {
    case "input":
      if ((po(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var l = Sl(r);
            if (!l) throw Error(x(90));
            Ps(r), po(r, l);
          }
        }
      }
      break;
    case "textarea":
      Ts(e, n);
      break;
    case "select":
      (t = n.value), t != null && pn(e, !!n.multiple, t, !1);
  }
};
Bs = Ai;
As = Gt;
var Gd = { usingClientEntryPoint: !1, Events: [vr, on, Sl, Is, Fs, Ai] },
  In = {
    findFiberByHostInstance: Ht,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  Jd = {
    bundleType: In.bundleType,
    version: In.version,
    rendererPackageName: In.rendererPackageName,
    rendererConfig: In.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: dt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = $s(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: In.findFiberByHostInstance || Zd,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Rr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Rr.isDisabled && Rr.supportsFiber)
    try {
      (gl = Rr.inject(Jd)), (et = Rr);
    } catch {}
}
Re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Gd;
Re.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Ki(t)) throw Error(x(200));
  return Yd(e, t, null, n);
};
Re.createRoot = function (e, t) {
  if (!Ki(e)) throw Error(x(299));
  var n = !1,
    r = "",
    l = kc;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
    (t = Vi(e, 1, !1, null, null, n, !1, r, l)),
    (e[at] = t.current),
    lr(e.nodeType === 8 ? e.parentNode : e),
    new Qi(t)
  );
};
Re.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(x(188))
      : ((e = Object.keys(e).join(",")), Error(x(268, e)));
  return (e = $s(t)), (e = e === null ? null : e.stateNode), e;
};
Re.flushSync = function (e) {
  return Gt(e);
};
Re.hydrate = function (e, t, n) {
  if (!Tl(t)) throw Error(x(200));
  return Ol(null, e, t, !0, n);
};
Re.hydrateRoot = function (e, t, n) {
  if (!Ki(e)) throw Error(x(405));
  var r = (n != null && n.hydratedSources) || null,
    l = !1,
    o = "",
    i = kc;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (l = !0),
      n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (i = n.onRecoverableError)),
    (t = xc(t, null, e, 1, n ?? null, l, !1, o, i)),
    (e[at] = t.current),
    lr(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (l = n._getVersion),
        (l = l(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, l])
          : t.mutableSourceEagerHydrationData.push(n, l);
  return new Ll(t);
};
Re.render = function (e, t, n) {
  if (!Tl(t)) throw Error(x(200));
  return Ol(null, e, t, !1, n);
};
Re.unmountComponentAtNode = function (e) {
  if (!Tl(e)) throw Error(x(40));
  return e._reactRootContainer
    ? (Gt(function () {
        Ol(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[at] = null);
        });
      }),
      !0)
    : !1;
};
Re.unstable_batchedUpdates = Ai;
Re.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Tl(n)) throw Error(x(200));
  if (e == null || e._reactInternals === void 0) throw Error(x(38));
  return Ol(e, t, n, !1, r);
};
Re.version = "18.2.0-next-9e3b772b8-20220608";
function Sc() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Sc);
    } catch (e) {
      console.error(e);
    }
}
Sc(), (xs.exports = Re);
var qd = xs.exports,
  ns = qd;
(oo.createRoot = ns.createRoot), (oo.hydrateRoot = ns.hydrateRoot);
function bd(e) {
  return y.jsxs("div", {
    className: "secondary my-16 relative space-y-4",
    id: "hero",
    ...e,
    children: [
      y.jsxs("div", {
        className: "text-9xl leading-snug",
        "data-aos": "fade-down-right",
        "data-aos-duration": "1200",
        children: [
          y.jsx("span", {
            className:
              "bg-gradient-to-r from-purple-500 via-blue-400 to-green-400 bg-clip-text text-transparent",
            "data-aos": "fade-down-right",
            "data-aos-duration": "2000",
            children: "Bonkzilla",
          }),
          " ",
          "in Action",
        ],
      }),
      y.jsx("div", {
        className:
          "text-gray-300 max-w-2xl text-xl leading-loose tracking-widest",
        "data-aos": "fade-down-right",
        "data-aos-duration": "1500",
        "data-aos-delay": "300",
        children:
          "First came Doge, then came Shiba. Now the throne is set for Bonkzilla reign. Memecoins are taking the world by storm, and we just happen to be the biggest and baddest.",
      }),
      y.jsxs("div", {
        className: "flex gap-10 pt-4",
        "data-aos": "fade-down-right",
        "data-aos-duration": "1500",
        "data-aos-delay": "500",
        children: [
          y.jsx("div", {
            className:
              "bg-gradient-to-r from-purple-500 via-blue-400 to-green-400 px-4 py-4 rounded-xl",
            children: "Bonkzilla Chart",
          }),
          y.jsx("div", {
            className:
              "bg-gradient-to-r from-purple-500 via-blue-400 to-green-400 px-4 py-4 rounded-xl bg-clip-text text-transparent",
            children: "Buy $BonkZilla",
          }),
        ],
      }),
    ],
  });
}
function ep(e) {
  return y.jsxs("div", {
    className: "secondary my-16 relative space-y-4 px-3",
    ...e,
    children: [
      y.jsxs("div", {
        className: "text-5xl leading-snug",
        children: [
          y.jsx("span", {
            className:
              "bg-gradient-to-r from-purple-500 via-blue-400 to-green-400 bg-clip-text text-transparent",
            children: "Bonkzilla",
          }),
          " ",
          "in Action",
        ],
      }),
      y.jsx("div", {
        className: "text-gray-300 leading-loose",
        children:
          "First came Doge, then came Shiba. Now the throne is set for Bonkzilla reign. Memecoins are taking the world by storm, and we just happen to be the biggest and baddest.",
      }),
      y.jsxs("div", {
        className: "block w-max gap-10 pt-4 space-y-8",
        children: [
          y.jsx("div", {
            className:
              "bg-gradient-to-r from-purple-500 via-blue-400 to-green-400 px-4 py-4 rounded-xl",
            children: "Bonkzilla Chart",
          }),
          y.jsx("div", {
            className:
              "bg-gradient-to-r from-purple-500 via-blue-400 to-green-400 px-4 py-4 rounded-xl bg-clip-text text-transparent",
            children: "Buy $BonkZilla",
          }),
        ],
      }),
    ],
  });
}
const tp = () =>
    y.jsxs("div", {
      className: "starter text-white relative",
      children: [
        y.jsx("div", {
          className:
            "absolute lg:top-[200px] left-0 lg:left-1/4 xl:left-0 h-[300px] md:h-[300px] w-[80%] md:w-[400px] max-w-[400px] max-h-[400px] sampleF blur-[100px] ",
        }),
        y.jsx("div", {
          className: "xs:hidden md:block",
          children: y.jsx(bd, {}),
        }),
        y.jsx("div", {
          className: "xs:block md:hidden",
          children: y.jsx(ep, {}),
        }),
      ],
    }),
  rs = "/assets/BonkPutanginamo-2ymr9hwm.png";
var Ec = {
    color: void 0,
    size: void 0,
    className: void 0,
    style: void 0,
    attr: void 0,
  },
  ls = Ct.createContext && Ct.createContext(Ec),
  Mt = function () {
    return (
      (Mt =
        Object.assign ||
        function (e) {
          for (var t, n = 1, r = arguments.length; n < r; n++) {
            t = arguments[n];
            for (var l in t)
              Object.prototype.hasOwnProperty.call(t, l) && (e[l] = t[l]);
          }
          return e;
        }),
      Mt.apply(this, arguments)
    );
  },
  np = function (e, t) {
    var n = {};
    for (var r in e)
      Object.prototype.hasOwnProperty.call(e, r) &&
        t.indexOf(r) < 0 &&
        (n[r] = e[r]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
      for (var l = 0, r = Object.getOwnPropertySymbols(e); l < r.length; l++)
        t.indexOf(r[l]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(e, r[l]) &&
          (n[r[l]] = e[r[l]]);
    return n;
  };
function Cc(e) {
  return (
    e &&
    e.map(function (t, n) {
      return Ct.createElement(t.tag, Mt({ key: n }, t.attr), Cc(t.child));
    })
  );
}
function pt(e) {
  return function (t) {
    return Ct.createElement(rp, Mt({ attr: Mt({}, e.attr) }, t), Cc(e.child));
  };
}
function rp(e) {
  var t = function (n) {
    var r = e.attr,
      l = e.size,
      o = e.title,
      i = np(e, ["attr", "size", "title"]),
      u = l || n.size || "1em",
      s;
    return (
      n.className && (s = n.className),
      e.className && (s = (s ? s + " " : "") + e.className),
      Ct.createElement(
        "svg",
        Mt(
          { stroke: "currentColor", fill: "currentColor", strokeWidth: "0" },
          n.attr,
          r,
          i,
          {
            className: s,
            style: Mt(Mt({ color: e.color || n.color }, n.style), e.style),
            height: u,
            width: u,
            xmlns: "http://www.w3.org/2000/svg",
          }
        ),
        o && Ct.createElement("title", null, o),
        e.children
      )
    );
  };
  return ls !== void 0
    ? Ct.createElement(ls.Consumer, null, function (n) {
        return t(n);
      })
    : t(Ec);
}
function lp(e) {
  return pt({
    tag: "svg",
    attr: { viewBox: "0 0 24 24", fill: "none" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M6.2253 4.81108C5.83477 4.42056 5.20161 4.42056 4.81108 4.81108C4.42056 5.20161 4.42056 5.83477 4.81108 6.2253L10.5858 12L4.81114 17.7747C4.42062 18.1652 4.42062 18.7984 4.81114 19.1889C5.20167 19.5794 5.83483 19.5794 6.22535 19.1889L12 13.4142L17.7747 19.1889C18.1652 19.5794 18.7984 19.5794 19.1889 19.1889C19.5794 18.7984 19.5794 18.1652 19.1889 17.7747L13.4142 12L19.189 6.2253C19.5795 5.83477 19.5795 5.20161 19.189 4.81108C18.7985 4.42056 18.1653 4.42056 17.7748 4.81108L12 10.5858L6.2253 4.81108Z",
          fill: "currentColor",
        },
      },
    ],
  })(e);
}
function op(e) {
  return pt({
    tag: "svg",
    attr: { viewBox: "0 0 24 24", fill: "none" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M22 18.0048C22 18.5544 21.5544 19 21.0048 19H12.9952C12.4456 19 12 18.5544 12 18.0048C12 17.4552 12.4456 17.0096 12.9952 17.0096H21.0048C21.5544 17.0096 22 17.4552 22 18.0048Z",
          fill: "currentColor",
        },
      },
      {
        tag: "path",
        attr: {
          d: "M22 12.0002C22 12.5499 21.5544 12.9954 21.0048 12.9954H2.99519C2.44556 12.9954 2 12.5499 2 12.0002C2 11.4506 2.44556 11.0051 2.99519 11.0051H21.0048C21.5544 11.0051 22 11.4506 22 12.0002Z",
          fill: "currentColor",
        },
      },
      {
        tag: "path",
        attr: {
          d: "M21.0048 6.99039C21.5544 6.99039 22 6.54482 22 5.99519C22 5.44556 21.5544 5 21.0048 5H8.99519C8.44556 5 8 5.44556 8 5.99519C8 6.54482 8.44556 6.99039 8.99519 6.99039H21.0048Z",
          fill: "currentColor",
        },
      },
    ],
  })(e);
}
function os(e) {
  return pt({
    tag: "svg",
    attr: { viewBox: "0 0 496 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M248,8C111.033,8,0,119.033,0,256S111.033,504,248,504,496,392.967,496,256,384.967,8,248,8ZM362.952,176.66c-3.732,39.215-19.881,134.378-28.1,178.3-3.476,18.584-10.322,24.816-16.948,25.425-14.4,1.326-25.338-9.517-39.287-18.661-21.827-14.308-34.158-23.215-55.346-37.177-24.485-16.135-8.612-25,5.342-39.5,3.652-3.793,67.107-61.51,68.335-66.746.153-.655.3-3.1-1.154-4.384s-3.59-.849-5.135-.5q-3.283.746-104.608,69.142-14.845,10.194-26.894,9.934c-8.855-.191-25.888-5.006-38.551-9.123-15.531-5.048-27.875-7.717-26.8-16.291q.84-6.7,18.45-13.7,108.446-47.248,144.628-62.3c68.872-28.647,83.183-33.623,92.511-33.789,2.052-.034,6.639.474,9.61,2.885a10.452,10.452,0,0,1,3.53,6.716A43.765,43.765,0,0,1,362.952,176.66Z",
        },
      },
    ],
  })(e);
}
function is(e) {
  return pt({
    tag: "svg",
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z",
        },
      },
    ],
  })(e);
}
function ip(e) {
  return pt({
    tag: "svg",
    attr: { viewBox: "0 0 384 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V160H256c-17.7 0-32-14.3-32-32V0H64zM256 0V128H384L256 0zM80 64h64c8.8 0 16 7.2 16 16s-7.2 16-16 16H80c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64h64c8.8 0 16 7.2 16 16s-7.2 16-16 16H80c-8.8 0-16-7.2-16-16s7.2-16 16-16zm54.2 253.8c-6.1 20.3-24.8 34.2-46 34.2H80c-8.8 0-16-7.2-16-16s7.2-16 16-16h8.2c7.1 0 13.3-4.6 15.3-11.4l14.9-49.5c3.4-11.3 13.8-19.1 25.6-19.1s22.2 7.7 25.6 19.1l11.6 38.6c7.4-6.2 16.8-9.7 26.8-9.7c15.9 0 30.4 9 37.5 23.2l4.4 8.8H304c8.8 0 16 7.2 16 16s-7.2 16-16 16H240c-6.1 0-11.6-3.4-14.3-8.8l-8.8-17.7c-1.7-3.4-5.1-5.5-8.8-5.5s-7.2 2.1-8.8 5.5l-8.8 17.7c-2.9 5.9-9.2 9.4-15.7 8.8s-12.1-5.1-13.9-11.3L144 349l-9.8 32.8z",
        },
      },
    ],
  })(e);
}
const us = "/assets/bonk-cfu-evY4.mp3",
  up = () => {
    const [e, t] = qe.useState(!1),
      [n, r] = qe.useState(!1),
      l = qe.useRef(null),
      [o, i] = qe.useState(!1),
      u = () => {
        t(!e);
      },
      s = () => {
        n && o ? l.current.pause() : (i(!o), l.current.play()), r(!n);
      };
    qe.useEffect(
      () => (
        l.current.play(),
        r(!0),
        () => {
          l.current.pause(), r(!1);
        }
      ),
      []
    );
    const a = [
      { title: "HOME", link: "#home" },
      { title: "ABOUT", link: "#about" },
      { title: "TOKENOMICS", link: "#tokenomics" },
      { title: "ROADMAP", link: "#roadmap" },
    ];
    return y.jsxs("div", {
      className: "starter xs:py-4 md:py-8 font-roboto z-20 relative",
      children: [
        y.jsx("div", {
          className: ` ${
            o ? "hidden" : "flex"
          } w-full h-[105vh] fixed bg-[black] overflow-hidden inset-0 z-[1000] flex justify-center items-center`,
          children: y.jsx("div", {
            className:
              "text-white font-merriweather xs:text-xl md:text-4xl bg-gradient-to-br from-purple-500 via-blue-400 to-green-400 xs:p-4 md:p-8 rounded-lg shadow-inner cursor-pointer select-none",
            onClick: s,
            children: "Enter to the BonkZilla",
          }),
        }),
        y.jsx("audio", { ref: l, src: us }),
        y.jsxs("div", {
          className: "secondary flex justify-between relative items-center",
          children: [
            y.jsx("img", {
              src: rs,
              className: "xs:w-20 md:w-20 rounded-full xs:px-2",
            }),
            y.jsxs("div", {
              className:
                "xs:hidden md:flex items-center divide-x-2 divide-x-white",
              children: [
                y.jsx("div", {
                  className: "text text-white space-x-8 px-4 xs:hidden md:flex",
                  children: a.map((h, p) =>
                    y.jsx(
                      "a",
                      {
                        href: h.link,
                        className: "font-normal text-gray-200 text-base",
                        children: h.title,
                      },
                      p
                    )
                  ),
                }),
                y.jsxs("div", {
                  className: "px-4 text-gray-300 flex gap-5",
                  children: [
                    y.jsx("a", {
                      href: "https://twitter.com/#",
                      target: "_blank",
                      children: y.jsx(is, { size: 35 }),
                    }),
                    y.jsxs("a", {
                      href: "https://t.me/#",
                      target: "_blank",
                      children: [" ", y.jsx(os, { size: 35 })],
                    }),
                  ],
                }),
              ],
            }),
            y.jsx("div", {
              className: "xs:flex md:hidden items-center relative z-10 mr-4",
              children: e
                ? y.jsx(lp, {
                    className: "text-3xl text-purple-200",
                    onClick: u,
                  })
                : y.jsx(op, {
                    className: "text-3xl text-gray-200",
                    onClick: u,
                  }),
            }),
          ],
        }),
        y.jsx("audio", { ref: l, src: us }),
        y.jsxs("div", {
          className: `${
            e ? "w-3/4 overflow-hidden" : "w-0 overflow-auto"
          } fixed h-[110vh] bg-gradient-to-br from-purple-500 via-blue-400 to-green-400 transition-all ease-out duration-700 inset-0 flex justify-start items-start flex-col space-y-8 py-6`,
          children: [
            y.jsx("img", {
              src: rs,
              className: "xs:w-24 rounded-full xs:px-4",
            }),
            a.map((h, p) =>
              y.jsx(
                "a",
                {
                  onClick: u,
                  href: h.link,
                  className: `text-white ${
                    e ? "block" : "hidden"
                  } px-4 relative text-xl font-chronosfer text-white font-bold tracking-widest`,
                  children: h.title,
                },
                p
              )
            ),
            y.jsxs("div", {
              className: "px-4 text-gray-300 flex gap-5",
              children: [
                y.jsx("a", {
                  href: "https://twitter.com/#",
                  target: "_blank",
                  children: y.jsx(is, { size: 35 }),
                }),
                y.jsxs("a", {
                  href: "https://t.me/#",
                  target: "_blank",
                  children: [" ", y.jsx(os, { size: 35 })],
                }),
              ],
            }),
          ],
        }),
      ],
    });
  },
  sp = "/assets/Gray-dSsVVXMz.png",
  ap = () =>
    y.jsxs("div", {
      className: "starter",
      id: "about",
      children: [
        y.jsx("div", {
          className:
            "absolute lg:top-[200px] xl:right-0 h-[300px] md:h-[800px] w-[80%] md:w-[400px] max-w-[800px] max-h-[400px] sampleF blur-[100px] ",
        }),
        y.jsx("div", {
          className: "secondary my-24 relative",
          children: y.jsxs("div", {
            className:
              "flex xs:flex-col md:flex-row justify-between items-center",
            children: [
              y.jsx("div", {
                className: "img flex-1 sticky",
                "data-aos": "fade-down-left",
                "data-aos-duration": "1500",
                "data-aos-delay": "300",
                children: y.jsx("img", { src: sp, className: "select-none" }),
              }),
              y.jsxs("div", {
                className: " flex-1 space-y-6",
                children: [
                  y.jsxs("div", {
                    className:
                      "xs:text-4xl md:first-letter:text-6xl text-white xs:px-3 md:px-0",
                    children: [
                      "About",
                      " ",
                      y.jsx("span", {
                        className:
                          "bg-gradient-to-r from-purple-500 via-blue-400 to-green-400 px-4 py-4 rounded-xl bg-clip-text text-transparent",
                        children: "BonkZilla",
                      }),
                    ],
                  }),
                  y.jsxs("div", {
                    className:
                      "text-gray-300 tracking-widest text-xl leading-relaxed xs:px-3 md:px-0",
                    "data-aos": "fade-down-right",
                    "data-aos-duration": "1000",
                    "data-aos-delay": "300",
                    children: [
                      "In the world of cryptocurrency, Shiba Inu, Bonk, and Shibzilla three distinct memecoins with unique traits. Shiba Inu, the prankster, loved spreading memes and joy; Bonk, the disciplined one, focused on stability; and Shibzilla, the visionary, aimed to revolutionize the blockchain.",
                      y.jsx("br", {}),
                      y.jsx("br", {}),
                      " One day, a rare alignment of blockchain energies occurred, merging the essence of Shiba Inu, Bonk, and Shibzilla . The result was the birth of a new, powerful memecoin - Bonkzilla.",
                      y.jsx("br", {}),
                      y.jsx("br", {}),
                      "This fusion brought together humor, stability, and innovation, creating a coin that captured the imagination of the crypto community. And so, Bonkzilla emerged, a symbol of unity in the ever-evolving landscape of memecoins.",
                      y.jsx("br", {}),
                      y.jsx("br", {}),
                      "Here to set the record straight and show what a real memecoin look like. Because for far too long we’ve been patient, loyal beyond diamonds, and now its time for the Heavyweight to enter the main stage. Behold BonkZilla’s presence, the token to take over as King of memecoins.",
                    ],
                  }),
                ],
              }),
            ],
          }),
        }),
      ],
    });
function cp(e) {
  return pt({
    tag: "svg",
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M256 117c-65.2 0-124.2 11.6-166.13 29.7-20.95 9.1-37.57 19.8-48.57 31.1S25 200.4 25 212c0 11.6 5.3 22.9 16.3 34.2 11 11.3 27.62 22 48.57 31.1C131.8 295.4 190.8 307 256 307c65.2 0 124.2-11.6 166.1-29.7 21-9.1 37.6-19.8 48.6-31.1S487 223.6 487 212c0-11.6-5.3-22.9-16.3-34.2-11-11.3-27.6-22-48.6-31.1C380.2 128.6 321.2 117 256 117zM25 255.1v50.2c0 6.3 5.3 17.6 16.3 28.9 11 11.3 27.62 22 48.57 31.1C131.8 383.4 190.8 395 256 395c65.2 0 124.2-11.6 166.1-29.7 21-9.1 37.6-19.8 48.6-31.1s16.3-22.6 16.3-28.9v-50.2c-1.1 1.3-2.2 2.5-3.4 3.7-13.3 13.6-31.8 25.3-54.3 35-45 19.5-106 31.2-173.3 31.2-67.3 0-128.3-11.7-173.28-31.2-22.49-9.7-41.01-21.4-54.3-35-1.19-1.2-2.32-2.5-3.42-3.7z",
        },
      },
    ],
  })(e);
}
function fp(e) {
  return pt({
    tag: "svg",
    attr: { viewBox: "0 0 448 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M433.941 65.941l-51.882-51.882A48 48 0 0 0 348.118 0H176c-26.51 0-48 21.49-48 48v48H48c-26.51 0-48 21.49-48 48v320c0 26.51 21.49 48 48 48h224c26.51 0 48-21.49 48-48v-48h80c26.51 0 48-21.49 48-48V99.882a48 48 0 0 0-14.059-33.941zM266 464H54a6 6 0 0 1-6-6V150a6 6 0 0 1 6-6h74v224c0 26.51 21.49 48 48 48h96v42a6 6 0 0 1-6 6zm128-96H182a6 6 0 0 1-6-6V54a6 6 0 0 1 6-6h106v88c0 13.255 10.745 24 24 24h88v202a6 6 0 0 1-6 6zm6-256h-64V48h9.632c1.591 0 3.117.632 4.243 1.757l48.368 48.368a6 6 0 0 1 1.757 4.243V112z",
        },
      },
    ],
  })(e);
}
function dp(e) {
  return pt({
    tag: "svg",
    attr: { fill: "currentColor", viewBox: "0 0 16 16" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z",
        },
      },
    ],
  })(e);
}
function pp(e) {
  return pt({
    tag: "svg",
    attr: { viewBox: "0 0 24 24" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M19.5611 12.0985L21.0926 14.7501C22.0591 16.4241 21.4855 18.5647 19.8115 19.5312C19.2794 19.8384 18.6759 20.0001 18.0615 20.0001L15.9993 19.9995V22.0001L10.9993 18.5001L15.9993 15.0001V16.9995L18.0615 17.0001C18.1493 17.0001 18.2355 16.977 18.3115 16.9331C18.5241 16.8104 18.6124 16.5551 18.5325 16.332L18.4945 16.2501L16.9631 13.5985L19.5611 12.0985ZM7.73617 9.38407L8.26726 15.4642L6.53571 14.4645L5.50412 16.2501C5.46023 16.3261 5.43713 16.4123 5.43713 16.5001C5.43713 16.7456 5.614 16.9497 5.84725 16.992L5.93713 17.0001L8.99919 16.9997V19.9996L5.93713 20.0001C4.00413 20.0001 2.43713 18.4331 2.43713 16.5001C2.43713 15.8857 2.59885 15.2822 2.90604 14.7501L3.93763 12.9645L2.20508 11.9642L7.73617 9.38407ZM13.7493 2.96901C14.2814 3.2762 14.7232 3.71803 15.0304 4.2501L16.061 6.03629L17.7935 5.03599L17.2624 11.1161L11.7314 8.53599L13.4629 7.53629L12.4323 5.7501C12.3884 5.67409 12.3253 5.61097 12.2493 5.56708C12.0367 5.44435 11.7715 5.49546 11.6182 5.67629L11.5663 5.7501L10.0356 8.40209L7.4376 6.90216L8.96822 4.2501C9.93472 2.57607 12.0753 2.00251 13.7493 2.96901Z",
        },
      },
    ],
  })(e);
}
const mp = () => {
    const [e, t] = qe.useState(""),
      n = async (l) => {
        try {
          await navigator.clipboard.writeText(l),
            t("Copied!"),
            l.target.focus(),
            t("Copied!");
        } catch {
          t(alert("0x0123456789 Copied"));
        }
      },
      r = [
        {
          id: 1,
          icon: y.jsx(cp, {}),
          title: "Total Token Supply",
          text: "100,000,000 TOKENS",
        },
        {
          id: 2,
          icon: y.jsx(pp, {}),
          title: "Liquidity Pool Tokens",
          text: "50% of Total Tokens Goes to Liquidity Pool",
        },
        {
          id: 3,
          icon: y.jsx(dp, {}),
          title: "Remaining Supply",
          text: "50% of the token supply goes to Presalers",
        },
        {
          id: 4,
          icon: y.jsx(ip, {}),
          title: "Contract Address",
          text: "0x0123...6789",
          icon2: y.jsx(fp, {}),
        },
      ];
    return y.jsx("div", {
      className: "starter",
      id: "tokenomics",
      children: y.jsxs("div", {
        className: "secondary my-24 space-y-12",
        children: [
          y.jsxs("div", {
            className: "xs:text-4xl md:text-6xl text-white xs:px-3 md:px-0",
            children: [
              y.jsx("span", {
                className:
                  "bg-gradient-to-r from-purple-500 via-blue-400 to-green-400 px-4 py-4 rounded-xl bg-clip-text text-transparent",
                children: "Bonkzilla",
              }),
              " ",
              "Tokenomics",
            ],
          }),
          y.jsx("div", {
            className: "grid grid-cols-4 gap-4 xs:px-3 md:px-0",
            "data-aos": "fade-down-right",
            "data-aos-duration": "1500",
            "data-aos-delay": "300",
            children: r.map((l, o) =>
              y.jsxs(
                "div",
                {
                  className:
                    "xs:col-span-4 md:col-span-2 bg-[#252831] bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-40 rounded-xl flex items-center justify-start xs:px-2 md:px-8 py-8 gap-4",
                  children: [
                    y.jsx("div", {
                      className: "text-5xl text-white",
                      children: l.icon,
                    }),
                    y.jsxs("div", {
                      className: "space-y-3",
                      children: [
                        y.jsxs("div", {
                          className:
                            "text-lg flex items-center gap-5 text-gray-200",
                          onClick: () => n("0x0123456789"),
                          children: [
                            l.text,
                            y.jsx("span", {
                              className: "text-white cursor-pointer",
                              children: l.icon2,
                            }),
                          ],
                        }),
                        y.jsx("div", {
                          className:
                            "text-xl font-bold text-start bg-gradient-to-r from-purple-500 via-blue-400 to-green-400 bg-clip-text text-transparent",
                          children: l.title,
                        }),
                      ],
                    }),
                  ],
                },
                o
              )
            ),
          }),
        ],
      }),
    });
  },
  hp = () =>
    y.jsx("div", {
      className: "starter",
      id: "roadmap",
      children: y.jsxs("div", {
        className: "secondary my-24 space-y-24 xs:px-3 md:px-0",
        children: [
          y.jsxs("div", {
            className:
              "xs:text-4xl md:text-6xl text-white xs:text-start md:text-end",
            children: [
              y.jsx("span", {
                className:
                  "bg-gradient-to-r from-purple-500 via-blue-400 to-green-400 px-4 py-4 rounded-xl bg-clip-text text-transparent",
                children: "Bonkzilla",
              }),
              " ",
              "Roadmap",
            ],
          }),
          y.jsxs("div", {
            className:
              "flex xs:flex-col md:flex-row xs:space-y-8 md:space-y-0 justify-between items-center",
            "data-aos": "fade-down-left",
            "data-aos-duration": "1500",
            "data-aos-delay": "300",
            children: [
              y.jsxs("div", {
                className: "text-white text-3xl",
                children: [
                  "Phase 1: ",
                  y.jsx("span", {
                    className:
                      "bg-gradient-to-r from-purple-500 via-blue-400 to-green-400 px-4 py-4 rounded-xl bg-clip-text text-transparent",
                    children: "BUY",
                  }),
                ],
              }),
              y.jsxs("div", {
                className: "text-white text-3xl",
                children: [
                  "Phase 2: ",
                  y.jsx("span", {
                    className:
                      "bg-gradient-to-r from-purple-500 via-blue-400 to-green-400 px-4 py-4 rounded-xl bg-clip-text text-transparent",
                    children: "HODL",
                  }),
                ],
              }),
              y.jsxs("div", {
                className: "text-white text-3xl",
                children: [
                  "Phase 3: ",
                  y.jsx("span", {
                    className:
                      "bg-gradient-to-r from-purple-500 via-blue-400 to-green-400 px-4 py-4 rounded-xl bg-clip-text text-transparent",
                    children: "MOON",
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    }),
  vp = () =>
    y.jsx("div", {
      className: "starter bg-[#1f1d1d]",
      children: y.jsxs("div", {
        className:
          "secondary my-4 flex xs:flex-col md:flex-row text-center space-y-4 justify-between items-center",
        children: [
          y.jsx("div", {
            className: "text-white text-2xl",
            children: " BONKZILLA ",
          }),
          y.jsx("div", {
            className: "text-white",
            children: " Copyright © 2024 All rights reserved ",
          }),
        ],
      }),
    });
var _c = { exports: {} };
(function (e, t) {
  (function (n, r) {
    e.exports = r();
  })(Nc, function () {
    return (function (n) {
      function r(o) {
        if (l[o]) return l[o].exports;
        var i = (l[o] = { exports: {}, id: o, loaded: !1 });
        return (
          n[o].call(i.exports, i, i.exports, r), (i.loaded = !0), i.exports
        );
      }
      var l = {};
      return (r.m = n), (r.c = l), (r.p = "dist/"), r(0);
    })([
      function (n, r, l) {
        function o(T) {
          return T && T.__esModule ? T : { default: T };
        }
        var i =
            Object.assign ||
            function (T) {
              for (var oe = 1; oe < arguments.length; oe++) {
                var ve = arguments[oe];
                for (var Ie in ve)
                  Object.prototype.hasOwnProperty.call(ve, Ie) &&
                    (T[Ie] = ve[Ie]);
              }
              return T;
            },
          u = l(1),
          s = (o(u), l(6)),
          a = o(s),
          h = l(7),
          p = o(h),
          m = l(8),
          v = o(m),
          w = l(9),
          k = o(w),
          R = l(10),
          f = o(R),
          c = l(11),
          d = o(c),
          g = l(14),
          C = o(g),
          _ = [],
          j = !1,
          S = {
            offset: 120,
            delay: 0,
            easing: "ease",
            duration: 400,
            disable: !1,
            once: !1,
            startEvent: "DOMContentLoaded",
            throttleDelay: 99,
            debounceDelay: 50,
            disableMutationObserver: !1,
          },
          F = function () {
            var T =
              arguments.length > 0 && arguments[0] !== void 0 && arguments[0];
            if ((T && (j = !0), j))
              return (_ = (0, d.default)(_, S)), (0, f.default)(_, S.once), _;
          },
          O = function () {
            (_ = (0, C.default)()), F();
          },
          P = function () {
            _.forEach(function (T, oe) {
              T.node.removeAttribute("data-aos"),
                T.node.removeAttribute("data-aos-easing"),
                T.node.removeAttribute("data-aos-duration"),
                T.node.removeAttribute("data-aos-delay");
            });
          },
          N = function (T) {
            return (
              T === !0 ||
              (T === "mobile" && k.default.mobile()) ||
              (T === "phone" && k.default.phone()) ||
              (T === "tablet" && k.default.tablet()) ||
              (typeof T == "function" && T() === !0)
            );
          },
          D = function (T) {
            (S = i(S, T)), (_ = (0, C.default)());
            var oe = document.all && !window.atob;
            return N(S.disable) || oe
              ? P()
              : (S.disableMutationObserver ||
                  v.default.isSupported() ||
                  (console.info(`
      aos: MutationObserver is not supported on this browser,
      code mutations observing has been disabled.
      You may have to call "refreshHard()" by yourself.
    `),
                  (S.disableMutationObserver = !0)),
                document
                  .querySelector("body")
                  .setAttribute("data-aos-easing", S.easing),
                document
                  .querySelector("body")
                  .setAttribute("data-aos-duration", S.duration),
                document
                  .querySelector("body")
                  .setAttribute("data-aos-delay", S.delay),
                S.startEvent === "DOMContentLoaded" &&
                ["complete", "interactive"].indexOf(document.readyState) > -1
                  ? F(!0)
                  : S.startEvent === "load"
                  ? window.addEventListener(S.startEvent, function () {
                      F(!0);
                    })
                  : document.addEventListener(S.startEvent, function () {
                      F(!0);
                    }),
                window.addEventListener(
                  "resize",
                  (0, p.default)(F, S.debounceDelay, !0)
                ),
                window.addEventListener(
                  "orientationchange",
                  (0, p.default)(F, S.debounceDelay, !0)
                ),
                window.addEventListener(
                  "scroll",
                  (0, a.default)(function () {
                    (0, f.default)(_, S.once);
                  }, S.throttleDelay)
                ),
                S.disableMutationObserver || v.default.ready("[data-aos]", O),
                _);
          };
        n.exports = { init: D, refresh: F, refreshHard: O };
      },
      function (n, r) {},
      ,
      ,
      ,
      ,
      function (n, r) {
        (function (l) {
          function o(N, D, T) {
            function oe(U) {
              var Ee = ee,
                vt = Se;
              return (ee = Se = void 0), (mt = U), (J = N.apply(vt, Ee));
            }
            function ve(U) {
              return (mt = U), (ne = setTimeout(L, D)), ht ? oe(U) : J;
            }
            function Ie(U) {
              var Ee = U - Pe,
                vt = U - mt,
                Yi = D - Ee;
              return nt ? O(Yi, ie - vt) : Yi;
            }
            function E(U) {
              var Ee = U - Pe,
                vt = U - mt;
              return Pe === void 0 || Ee >= D || Ee < 0 || (nt && vt >= ie);
            }
            function L() {
              var U = P();
              return E(U) ? M(U) : void (ne = setTimeout(L, Ie(U)));
            }
            function M(U) {
              return (ne = void 0), Y && ee ? oe(U) : ((ee = Se = void 0), J);
            }
            function $() {
              ne !== void 0 && clearTimeout(ne),
                (mt = 0),
                (ee = Pe = Se = ne = void 0);
            }
            function Q() {
              return ne === void 0 ? J : M(P());
            }
            function ye() {
              var U = P(),
                Ee = E(U);
              if (((ee = arguments), (Se = this), (Pe = U), Ee)) {
                if (ne === void 0) return ve(Pe);
                if (nt) return (ne = setTimeout(L, D)), oe(Pe);
              }
              return ne === void 0 && (ne = setTimeout(L, D)), J;
            }
            var ee,
              Se,
              ie,
              J,
              ne,
              Pe,
              mt = 0,
              ht = !1,
              nt = !1,
              Y = !0;
            if (typeof N != "function") throw new TypeError(m);
            return (
              (D = h(D) || 0),
              u(T) &&
                ((ht = !!T.leading),
                (nt = "maxWait" in T),
                (ie = nt ? F(h(T.maxWait) || 0, D) : ie),
                (Y = "trailing" in T ? !!T.trailing : Y)),
              (ye.cancel = $),
              (ye.flush = Q),
              ye
            );
          }
          function i(N, D, T) {
            var oe = !0,
              ve = !0;
            if (typeof N != "function") throw new TypeError(m);
            return (
              u(T) &&
                ((oe = "leading" in T ? !!T.leading : oe),
                (ve = "trailing" in T ? !!T.trailing : ve)),
              o(N, D, { leading: oe, maxWait: D, trailing: ve })
            );
          }
          function u(N) {
            var D = typeof N > "u" ? "undefined" : p(N);
            return !!N && (D == "object" || D == "function");
          }
          function s(N) {
            return !!N && (typeof N > "u" ? "undefined" : p(N)) == "object";
          }
          function a(N) {
            return (
              (typeof N > "u" ? "undefined" : p(N)) == "symbol" ||
              (s(N) && S.call(N) == w)
            );
          }
          function h(N) {
            if (typeof N == "number") return N;
            if (a(N)) return v;
            if (u(N)) {
              var D = typeof N.valueOf == "function" ? N.valueOf() : N;
              N = u(D) ? D + "" : D;
            }
            if (typeof N != "string") return N === 0 ? N : +N;
            N = N.replace(k, "");
            var T = f.test(N);
            return T || c.test(N)
              ? d(N.slice(2), T ? 2 : 8)
              : R.test(N)
              ? v
              : +N;
          }
          var p =
              typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
                ? function (N) {
                    return typeof N;
                  }
                : function (N) {
                    return N &&
                      typeof Symbol == "function" &&
                      N.constructor === Symbol &&
                      N !== Symbol.prototype
                      ? "symbol"
                      : typeof N;
                  },
            m = "Expected a function",
            v = NaN,
            w = "[object Symbol]",
            k = /^\s+|\s+$/g,
            R = /^[-+]0x[0-9a-f]+$/i,
            f = /^0b[01]+$/i,
            c = /^0o[0-7]+$/i,
            d = parseInt,
            g =
              (typeof l > "u" ? "undefined" : p(l)) == "object" &&
              l &&
              l.Object === Object &&
              l,
            C =
              (typeof self > "u" ? "undefined" : p(self)) == "object" &&
              self &&
              self.Object === Object &&
              self,
            _ = g || C || Function("return this")(),
            j = Object.prototype,
            S = j.toString,
            F = Math.max,
            O = Math.min,
            P = function () {
              return _.Date.now();
            };
          n.exports = i;
        }).call(
          r,
          (function () {
            return this;
          })()
        );
      },
      function (n, r) {
        (function (l) {
          function o(P, N, D) {
            function T(Y) {
              var U = ye,
                Ee = ee;
              return (ye = ee = void 0), (Pe = Y), (ie = P.apply(Ee, U));
            }
            function oe(Y) {
              return (Pe = Y), (J = setTimeout(E, N)), mt ? T(Y) : ie;
            }
            function ve(Y) {
              var U = Y - ne,
                Ee = Y - Pe,
                vt = N - U;
              return ht ? F(vt, Se - Ee) : vt;
            }
            function Ie(Y) {
              var U = Y - ne,
                Ee = Y - Pe;
              return ne === void 0 || U >= N || U < 0 || (ht && Ee >= Se);
            }
            function E() {
              var Y = O();
              return Ie(Y) ? L(Y) : void (J = setTimeout(E, ve(Y)));
            }
            function L(Y) {
              return (J = void 0), nt && ye ? T(Y) : ((ye = ee = void 0), ie);
            }
            function M() {
              J !== void 0 && clearTimeout(J),
                (Pe = 0),
                (ye = ne = ee = J = void 0);
            }
            function $() {
              return J === void 0 ? ie : L(O());
            }
            function Q() {
              var Y = O(),
                U = Ie(Y);
              if (((ye = arguments), (ee = this), (ne = Y), U)) {
                if (J === void 0) return oe(ne);
                if (ht) return (J = setTimeout(E, N)), T(ne);
              }
              return J === void 0 && (J = setTimeout(E, N)), ie;
            }
            var ye,
              ee,
              Se,
              ie,
              J,
              ne,
              Pe = 0,
              mt = !1,
              ht = !1,
              nt = !0;
            if (typeof P != "function") throw new TypeError(p);
            return (
              (N = a(N) || 0),
              i(D) &&
                ((mt = !!D.leading),
                (ht = "maxWait" in D),
                (Se = ht ? S(a(D.maxWait) || 0, N) : Se),
                (nt = "trailing" in D ? !!D.trailing : nt)),
              (Q.cancel = M),
              (Q.flush = $),
              Q
            );
          }
          function i(P) {
            var N = typeof P > "u" ? "undefined" : h(P);
            return !!P && (N == "object" || N == "function");
          }
          function u(P) {
            return !!P && (typeof P > "u" ? "undefined" : h(P)) == "object";
          }
          function s(P) {
            return (
              (typeof P > "u" ? "undefined" : h(P)) == "symbol" ||
              (u(P) && j.call(P) == v)
            );
          }
          function a(P) {
            if (typeof P == "number") return P;
            if (s(P)) return m;
            if (i(P)) {
              var N = typeof P.valueOf == "function" ? P.valueOf() : P;
              P = i(N) ? N + "" : N;
            }
            if (typeof P != "string") return P === 0 ? P : +P;
            P = P.replace(w, "");
            var D = R.test(P);
            return D || f.test(P)
              ? c(P.slice(2), D ? 2 : 8)
              : k.test(P)
              ? m
              : +P;
          }
          var h =
              typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
                ? function (P) {
                    return typeof P;
                  }
                : function (P) {
                    return P &&
                      typeof Symbol == "function" &&
                      P.constructor === Symbol &&
                      P !== Symbol.prototype
                      ? "symbol"
                      : typeof P;
                  },
            p = "Expected a function",
            m = NaN,
            v = "[object Symbol]",
            w = /^\s+|\s+$/g,
            k = /^[-+]0x[0-9a-f]+$/i,
            R = /^0b[01]+$/i,
            f = /^0o[0-7]+$/i,
            c = parseInt,
            d =
              (typeof l > "u" ? "undefined" : h(l)) == "object" &&
              l &&
              l.Object === Object &&
              l,
            g =
              (typeof self > "u" ? "undefined" : h(self)) == "object" &&
              self &&
              self.Object === Object &&
              self,
            C = d || g || Function("return this")(),
            _ = Object.prototype,
            j = _.toString,
            S = Math.max,
            F = Math.min,
            O = function () {
              return C.Date.now();
            };
          n.exports = o;
        }).call(
          r,
          (function () {
            return this;
          })()
        );
      },
      function (n, r) {
        function l(h) {
          var p = void 0,
            m = void 0;
          for (p = 0; p < h.length; p += 1)
            if (
              ((m = h[p]),
              (m.dataset && m.dataset.aos) || (m.children && l(m.children)))
            )
              return !0;
          return !1;
        }
        function o() {
          return (
            window.MutationObserver ||
            window.WebKitMutationObserver ||
            window.MozMutationObserver
          );
        }
        function i() {
          return !!o();
        }
        function u(h, p) {
          var m = window.document,
            v = o(),
            w = new v(s);
          (a = p),
            w.observe(m.documentElement, {
              childList: !0,
              subtree: !0,
              removedNodes: !0,
            });
        }
        function s(h) {
          h &&
            h.forEach(function (p) {
              var m = Array.prototype.slice.call(p.addedNodes),
                v = Array.prototype.slice.call(p.removedNodes),
                w = m.concat(v);
              if (l(w)) return a();
            });
        }
        Object.defineProperty(r, "__esModule", { value: !0 });
        var a = function () {};
        r.default = { isSupported: i, ready: u };
      },
      function (n, r) {
        function l(m, v) {
          if (!(m instanceof v))
            throw new TypeError("Cannot call a class as a function");
        }
        function o() {
          return navigator.userAgent || navigator.vendor || window.opera || "";
        }
        Object.defineProperty(r, "__esModule", { value: !0 });
        var i = (function () {
            function m(v, w) {
              for (var k = 0; k < w.length; k++) {
                var R = w[k];
                (R.enumerable = R.enumerable || !1),
                  (R.configurable = !0),
                  "value" in R && (R.writable = !0),
                  Object.defineProperty(v, R.key, R);
              }
            }
            return function (v, w, k) {
              return w && m(v.prototype, w), k && m(v, k), v;
            };
          })(),
          u =
            /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,
          s =
            /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
          a =
            /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,
          h =
            /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
          p = (function () {
            function m() {
              l(this, m);
            }
            return (
              i(m, [
                {
                  key: "phone",
                  value: function () {
                    var v = o();
                    return !(!u.test(v) && !s.test(v.substr(0, 4)));
                  },
                },
                {
                  key: "mobile",
                  value: function () {
                    var v = o();
                    return !(!a.test(v) && !h.test(v.substr(0, 4)));
                  },
                },
                {
                  key: "tablet",
                  value: function () {
                    return this.mobile() && !this.phone();
                  },
                },
              ]),
              m
            );
          })();
        r.default = new p();
      },
      function (n, r) {
        Object.defineProperty(r, "__esModule", { value: !0 });
        var l = function (i, u, s) {
            var a = i.node.getAttribute("data-aos-once");
            u > i.position
              ? i.node.classList.add("aos-animate")
              : typeof a < "u" &&
                (a === "false" || (!s && a !== "true")) &&
                i.node.classList.remove("aos-animate");
          },
          o = function (i, u) {
            var s = window.pageYOffset,
              a = window.innerHeight;
            i.forEach(function (h, p) {
              l(h, a + s, u);
            });
          };
        r.default = o;
      },
      function (n, r, l) {
        function o(a) {
          return a && a.__esModule ? a : { default: a };
        }
        Object.defineProperty(r, "__esModule", { value: !0 });
        var i = l(12),
          u = o(i),
          s = function (a, h) {
            return (
              a.forEach(function (p, m) {
                p.node.classList.add("aos-init"),
                  (p.position = (0, u.default)(p.node, h.offset));
              }),
              a
            );
          };
        r.default = s;
      },
      function (n, r, l) {
        function o(a) {
          return a && a.__esModule ? a : { default: a };
        }
        Object.defineProperty(r, "__esModule", { value: !0 });
        var i = l(13),
          u = o(i),
          s = function (a, h) {
            var p = 0,
              m = 0,
              v = window.innerHeight,
              w = {
                offset: a.getAttribute("data-aos-offset"),
                anchor: a.getAttribute("data-aos-anchor"),
                anchorPlacement: a.getAttribute("data-aos-anchor-placement"),
              };
            switch (
              (w.offset && !isNaN(w.offset) && (m = parseInt(w.offset)),
              w.anchor &&
                document.querySelectorAll(w.anchor) &&
                (a = document.querySelectorAll(w.anchor)[0]),
              (p = (0, u.default)(a).top),
              w.anchorPlacement)
            ) {
              case "top-bottom":
                break;
              case "center-bottom":
                p += a.offsetHeight / 2;
                break;
              case "bottom-bottom":
                p += a.offsetHeight;
                break;
              case "top-center":
                p += v / 2;
                break;
              case "bottom-center":
                p += v / 2 + a.offsetHeight;
                break;
              case "center-center":
                p += v / 2 + a.offsetHeight / 2;
                break;
              case "top-top":
                p += v;
                break;
              case "bottom-top":
                p += a.offsetHeight + v;
                break;
              case "center-top":
                p += a.offsetHeight / 2 + v;
            }
            return w.anchorPlacement || w.offset || isNaN(h) || (m = h), p + m;
          };
        r.default = s;
      },
      function (n, r) {
        Object.defineProperty(r, "__esModule", { value: !0 });
        var l = function (o) {
          for (
            var i = 0, u = 0;
            o && !isNaN(o.offsetLeft) && !isNaN(o.offsetTop);

          )
            (i += o.offsetLeft - (o.tagName != "BODY" ? o.scrollLeft : 0)),
              (u += o.offsetTop - (o.tagName != "BODY" ? o.scrollTop : 0)),
              (o = o.offsetParent);
          return { top: u, left: i };
        };
        r.default = l;
      },
      function (n, r) {
        Object.defineProperty(r, "__esModule", { value: !0 });
        var l = function (o) {
          return (
            (o = o || document.querySelectorAll("[data-aos]")),
            Array.prototype.map.call(o, function (i) {
              return { node: i };
            })
          );
        };
        r.default = l;
      },
    ]);
  });
})(_c);
var yp = _c.exports;
const ss = as(yp),
  gp = "/assets/logo-jKDMvBdu.png";
function wp() {
  return (
    qe.useEffect(() => {
      ss.init(), ss.refresh();
    }, []),
    y.jsxs("div", {
      className: "bg-black/95 font-superMilk relative overflow-x-hidden",
      children: [
        y.jsx("div", {
          className:
            "fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20",
          children: y.jsx("img", { src: gp, className: "rounded-full" }),
        }),
        y.jsx(up, {}),
        y.jsx(tp, {}),
        y.jsx(ap, {}),
        y.jsx(mp, {}),
        y.jsx(hp, {}),
        y.jsx(vp, {}),
      ],
    })
  );
}
oo.createRoot(document.getElementById("root")).render(
  y.jsx(Ct.StrictMode, { children: y.jsx(wp, {}) })
);
