/* eslint-disable */
(function (t) {
  var e = {};
  function n(r) {
    if (e[r]) return e[r].exports;
    var i = (e[r] = { i: r, l: !1, exports: {} });
    return t[r].call(i.exports, i, i.exports, n), (i.l = !0), i.exports;
  }
  (n.m = t),
    (n.c = e),
    (n.d = function (t, e, r) {
      n.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: r });
    }),
    (n.r = function (t) {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    (n.t = function (t, e) {
      if ((1 & e && (t = n(t)), 8 & e)) return t;
      if (4 & e && "object" === typeof t && t && t.__esModule) return t;
      var r = Object.create(null);
      if (
        (n.r(r),
        Object.defineProperty(r, "default", { enumerable: !0, value: t }),
        2 & e && "string" != typeof t)
      )
        for (var i in t)
          n.d(
            r,
            i,
            function (e) {
              return t[e];
            }.bind(null, i)
          );
      return r;
    }),
    (n.n = function (t) {
      var e =
        t && t.__esModule
          ? function () {
              return t["default"];
            }
          : function () {
              return t;
            };
      return n.d(e, "a", e), e;
    }),
    (n.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (n.p = "/"),
    n((n.s = 0));
})({
  0: function (t, e, n) {
    t.exports = n("56d7");
  },
  "00ee": function (t, e, n) {
    var r = n("b622"),
      i = r("toStringTag"),
      o = {};
    (o[i] = "z"), (t.exports = "[object z]" === String(o));
  },
  "0366": function (t, e, n) {
    var r = n("1c0b");
    t.exports = function (t, e, n) {
      if ((r(t), void 0 === e)) return t;
      switch (n) {
        case 0:
          return function () {
            return t.call(e);
          };
        case 1:
          return function (n) {
            return t.call(e, n);
          };
        case 2:
          return function (n, r) {
            return t.call(e, n, r);
          };
        case 3:
          return function (n, r, i) {
            return t.call(e, n, r, i);
          };
      }
      return function () {
        return t.apply(e, arguments);
      };
    };
  },
  "0554": function (t, e, n) {
    var r = n("96a4");
    r.__esModule && (r = r.default),
      "string" === typeof r && (r = [[t.i, r, ""]]),
      r.locals && (t.exports = r.locals);
    var i = n("499e").default;
    i("17611838", r, !0, { sourceMap: !1, shadowMode: !1 });
  },
  "06cf": function (t, e, n) {
    var r = n("83ab"),
      i = n("d1e7"),
      o = n("5c6c"),
      a = n("fc6a"),
      s = n("c04e"),
      l = n("5135"),
      c = n("0cfb"),
      u = Object.getOwnPropertyDescriptor;
    e.f = r
      ? u
      : function (t, e) {
          if (((t = a(t)), (e = s(e, !0)), c))
            try {
              return u(t, e);
            } catch (n) {}
          if (l(t, e)) return o(!i.f.call(t, e), t[e]);
        };
  },
  "0a06": function (t, e, n) {
    "use strict";
    var r = n("c532"),
      i = n("30b5"),
      o = n("f6b4"),
      a = n("5270"),
      s = n("4a7b");
    function l(t) {
      (this.defaults = t),
        (this.interceptors = { request: new o(), response: new o() });
    }
    (l.prototype.request = function (t) {
      "string" === typeof t
        ? ((t = arguments[1] || {}), (t.url = arguments[0]))
        : (t = t || {}),
        (t = s(this.defaults, t)),
        t.method
          ? (t.method = t.method.toLowerCase())
          : this.defaults.method
          ? (t.method = this.defaults.method.toLowerCase())
          : (t.method = "get");
      var e = [a, void 0],
        n = Promise.resolve(t);
      this.interceptors.request.forEach(function (t) {
        e.unshift(t.fulfilled, t.rejected);
      }),
        this.interceptors.response.forEach(function (t) {
          e.push(t.fulfilled, t.rejected);
        });
      while (e.length) n = n.then(e.shift(), e.shift());
      return n;
    }),
      (l.prototype.getUri = function (t) {
        return (
          (t = s(this.defaults, t)),
          i(t.url, t.params, t.paramsSerializer).replace(/^\?/, "")
        );
      }),
      r.forEach(["delete", "get", "head", "options"], function (t) {
        l.prototype[t] = function (e, n) {
          return this.request(
            s(n || {}, { method: t, url: e, data: (n || {}).data })
          );
        };
      }),
      r.forEach(["post", "put", "patch"], function (t) {
        l.prototype[t] = function (e, n, r) {
          return this.request(s(r || {}, { method: t, url: e, data: n }));
        };
      }),
      (t.exports = l);
  },
  "0bed": function (t, e, n) {
    "use strict";
    n("8f28");
  },
  "0cfb": function (t, e, n) {
    var r = n("83ab"),
      i = n("d039"),
      o = n("cc12");
    t.exports =
      !r &&
      !i(function () {
        return (
          7 !=
          Object.defineProperty(o("div"), "a", {
            get: function () {
              return 7;
            },
          }).a
        );
      });
  },
  "0df6": function (t, e, n) {
    "use strict";
    t.exports = function (t) {
      return function (e) {
        return t.apply(null, e);
      };
    };
  },
  1148: function (t, e, n) {
    "use strict";
    var r = n("a691"),
      i = n("1d80");
    t.exports = function (t) {
      var e = String(i(this)),
        n = "",
        o = r(t);
      if (o < 0 || o == 1 / 0) throw RangeError("Wrong number of repetitions");
      for (; o > 0; (o >>>= 1) && (e += e)) 1 & o && (n += e);
      return n;
    };
  },
  1276: function (t, e, n) {
    "use strict";
    var r = n("d784"),
      i = n("44e7"),
      o = n("825a"),
      a = n("1d80"),
      s = n("4840"),
      l = n("8aa5"),
      c = n("50c4"),
      u = n("14c3"),
      d = n("9263"),
      f = n("d039"),
      h = [].push,
      p = Math.min,
      g = 4294967295,
      v = !f(function () {
        return !RegExp(g, "y");
      });
    r(
      "split",
      2,
      function (t, e, n) {
        var r;
        return (
          (r =
            "c" == "abbc".split(/(b)*/)[1] ||
            4 != "test".split(/(?:)/, -1).length ||
            2 != "ab".split(/(?:ab)*/).length ||
            4 != ".".split(/(.?)(.?)/).length ||
            ".".split(/()()/).length > 1 ||
            "".split(/.?/).length
              ? function (t, n) {
                  var r = String(a(this)),
                    o = void 0 === n ? g : n >>> 0;
                  if (0 === o) return [];
                  if (void 0 === t) return [r];
                  if (!i(t)) return e.call(r, t, o);
                  var s,
                    l,
                    c,
                    u = [],
                    f =
                      (t.ignoreCase ? "i" : "") +
                      (t.multiline ? "m" : "") +
                      (t.unicode ? "u" : "") +
                      (t.sticky ? "y" : ""),
                    p = 0,
                    v = new RegExp(t.source, f + "g");
                  while ((s = d.call(v, r))) {
                    if (
                      ((l = v.lastIndex),
                      l > p &&
                        (u.push(r.slice(p, s.index)),
                        s.length > 1 &&
                          s.index < r.length &&
                          h.apply(u, s.slice(1)),
                        (c = s[0].length),
                        (p = l),
                        u.length >= o))
                    )
                      break;
                    v.lastIndex === s.index && v.lastIndex++;
                  }
                  return (
                    p === r.length
                      ? (!c && v.test("")) || u.push("")
                      : u.push(r.slice(p)),
                    u.length > o ? u.slice(0, o) : u
                  );
                }
              : "0".split(void 0, 0).length
              ? function (t, n) {
                  return void 0 === t && 0 === n ? [] : e.call(this, t, n);
                }
              : e),
          [
            function (e, n) {
              var i = a(this),
                o = void 0 == e ? void 0 : e[t];
              return void 0 !== o ? o.call(e, i, n) : r.call(String(i), e, n);
            },
            function (t, i) {
              var a = n(r, t, this, i, r !== e);
              if (a.done) return a.value;
              var d = o(t),
                f = String(this),
                h = s(d, RegExp),
                m = d.unicode,
                b =
                  (d.ignoreCase ? "i" : "") +
                  (d.multiline ? "m" : "") +
                  (d.unicode ? "u" : "") +
                  (v ? "y" : "g"),
                y = new h(v ? d : "^(?:" + d.source + ")", b),
                x = void 0 === i ? g : i >>> 0;
              if (0 === x) return [];
              if (0 === f.length) return null === u(y, f) ? [f] : [];
              var _ = 0,
                w = 0,
                k = [];
              while (w < f.length) {
                y.lastIndex = v ? w : 0;
                var C,
                  M = u(y, v ? f : f.slice(w));
                if (
                  null === M ||
                  (C = p(c(y.lastIndex + (v ? 0 : w)), f.length)) === _
                )
                  w = l(f, w, m);
                else {
                  if ((k.push(f.slice(_, w)), k.length === x)) return k;
                  for (var S = 1; S <= M.length - 1; S++)
                    if ((k.push(M[S]), k.length === x)) return k;
                  w = _ = C;
                }
              }
              return k.push(f.slice(_)), k;
            },
          ]
        );
      },
      !v
    );
  },
  "13d5": function (t, e, n) {
    "use strict";
    var r = n("23e7"),
      i = n("d58f").left,
      o = n("a640"),
      a = n("2d00"),
      s = n("605d"),
      l = o("reduce"),
      c = !s && a > 79 && a < 83;
    r(
      { target: "Array", proto: !0, forced: !l || c },
      {
        reduce: function (t) {
          return i(
            this,
            t,
            arguments.length,
            arguments.length > 1 ? arguments[1] : void 0
          );
        },
      }
    );
  },
  "14c3": function (t, e, n) {
    var r = n("c6b6"),
      i = n("9263");
    t.exports = function (t, e) {
      var n = t.exec;
      if ("function" === typeof n) {
        var o = n.call(t, e);
        if ("object" !== typeof o)
          throw TypeError(
            "RegExp exec method returned something other than an Object or null"
          );
        return o;
      }
      if ("RegExp" !== r(t))
        throw TypeError("RegExp#exec called on incompatible receiver");
      return i.call(t, e);
    };
  },
  "159b": function (t, e, n) {
    var r = n("da84"),
      i = n("fdbc"),
      o = n("17c2"),
      a = n("9112");
    for (var s in i) {
      var l = r[s],
        c = l && l.prototype;
      if (c && c.forEach !== o)
        try {
          a(c, "forEach", o);
        } catch (u) {
          c.forEach = o;
        }
    }
  },
  "17c2": function (t, e, n) {
    "use strict";
    var r = n("b727").forEach,
      i = n("a640"),
      o = i("forEach");
    t.exports = o
      ? [].forEach
      : function (t) {
          return r(this, t, arguments.length > 1 ? arguments[1] : void 0);
        };
  },
  "19aa": function (t, e) {
    t.exports = function (t, e, n) {
      if (!(t instanceof e))
        throw TypeError("Incorrect " + (n ? n + " " : "") + "invocation");
      return t;
    };
  },
  "1be4": function (t, e, n) {
    var r = n("d066");
    t.exports = r("document", "documentElement");
  },
  "1c0b": function (t, e) {
    t.exports = function (t) {
      if ("function" != typeof t)
        throw TypeError(String(t) + " is not a function");
      return t;
    };
  },
  "1c7e": function (t, e, n) {
    var r = n("b622"),
      i = r("iterator"),
      o = !1;
    try {
      var a = 0,
        s = {
          next: function () {
            return { done: !!a++ };
          },
          return: function () {
            o = !0;
          },
        };
      (s[i] = function () {
        return this;
      }),
        Array.from(s, function () {
          throw 2;
        });
    } catch (l) {}
    t.exports = function (t, e) {
      if (!e && !o) return !1;
      var n = !1;
      try {
        var r = {};
        (r[i] = function () {
          return {
            next: function () {
              return { done: (n = !0) };
            },
          };
        }),
          t(r);
      } catch (l) {}
      return n;
    };
  },
  "1cdc": function (t, e, n) {
    var r = n("342f");
    t.exports = /(iphone|ipod|ipad).*applewebkit/i.test(r);
  },
  "1d2b": function (t, e, n) {
    "use strict";
    t.exports = function (t, e) {
      return function () {
        for (var n = new Array(arguments.length), r = 0; r < n.length; r++)
          n[r] = arguments[r];
        return t.apply(e, n);
      };
    };
  },
  "1d80": function (t, e) {
    t.exports = function (t) {
      if (void 0 == t) throw TypeError("Can't call method on " + t);
      return t;
    };
  },
  "1dde": function (t, e, n) {
    var r = n("d039"),
      i = n("b622"),
      o = n("2d00"),
      a = i("species");
    t.exports = function (t) {
      return (
        o >= 51 ||
        !r(function () {
          var e = [],
            n = (e.constructor = {});
          return (
            (n[a] = function () {
              return { foo: 1 };
            }),
            1 !== e[t](Boolean).foo
          );
        })
      );
    };
  },
  2266: function (t, e, n) {
    var r = n("825a"),
      i = n("e95a"),
      o = n("50c4"),
      a = n("0366"),
      s = n("35a1"),
      l = n("2a62"),
      c = function (t, e) {
        (this.stopped = t), (this.result = e);
      };
    t.exports = function (t, e, n) {
      var u,
        d,
        f,
        h,
        p,
        g,
        v,
        m = n && n.that,
        b = !(!n || !n.AS_ENTRIES),
        y = !(!n || !n.IS_ITERATOR),
        x = !(!n || !n.INTERRUPTED),
        _ = a(e, m, 1 + b + x),
        w = function (t) {
          return u && l(u), new c(!0, t);
        },
        k = function (t) {
          return b
            ? (r(t), x ? _(t[0], t[1], w) : _(t[0], t[1]))
            : x
            ? _(t, w)
            : _(t);
        };
      if (y) u = t;
      else {
        if (((d = s(t)), "function" != typeof d))
          throw TypeError("Target is not iterable");
        if (i(d)) {
          for (f = 0, h = o(t.length); h > f; f++)
            if (((p = k(t[f])), p && p instanceof c)) return p;
          return new c(!1);
        }
        u = d.call(t);
      }
      g = u.next;
      while (!(v = g.call(u)).done) {
        try {
          p = k(v.value);
        } catch (C) {
          throw (l(u), C);
        }
        if ("object" == typeof p && p && p instanceof c) return p;
      }
      return new c(!1);
    };
  },
  "23cb": function (t, e, n) {
    var r = n("a691"),
      i = Math.max,
      o = Math.min;
    t.exports = function (t, e) {
      var n = r(t);
      return n < 0 ? i(n + e, 0) : o(n, e);
    };
  },
  "23e7": function (t, e, n) {
    var r = n("da84"),
      i = n("06cf").f,
      o = n("9112"),
      a = n("6eeb"),
      s = n("ce4e"),
      l = n("e893"),
      c = n("94ca");
    t.exports = function (t, e) {
      var n,
        u,
        d,
        f,
        h,
        p,
        g = t.target,
        v = t.global,
        m = t.stat;
      if (((u = v ? r : m ? r[g] || s(g, {}) : (r[g] || {}).prototype), u))
        for (d in e) {
          if (
            ((h = e[d]),
            t.noTargetGet ? ((p = i(u, d)), (f = p && p.value)) : (f = u[d]),
            (n = c(v ? d : g + (m ? "." : "#") + d, t.forced)),
            !n && void 0 !== f)
          ) {
            if (typeof h === typeof f) continue;
            l(h, f);
          }
          (t.sham || (f && f.sham)) && o(h, "sham", !0), a(u, d, h, t);
        }
    };
  },
  "241c": function (t, e, n) {
    var r = n("ca84"),
      i = n("7839"),
      o = i.concat("length", "prototype");
    e.f =
      Object.getOwnPropertyNames ||
      function (t) {
        return r(t, o);
      };
  },
  2444: function (t, e, n) {
    "use strict";
    (function (e) {
      var r = n("c532"),
        i = n("c8af"),
        o = { "Content-Type": "application/x-www-form-urlencoded" };
      function a(t, e) {
        !r.isUndefined(t) &&
          r.isUndefined(t["Content-Type"]) &&
          (t["Content-Type"] = e);
      }
      function s() {
        var t;
        return (
          ("undefined" !== typeof XMLHttpRequest ||
            ("undefined" !== typeof e &&
              "[object process]" === Object.prototype.toString.call(e))) &&
            (t = n("b50d")),
          t
        );
      }
      var l = {
        adapter: s(),
        transformRequest: [
          function (t, e) {
            return (
              i(e, "Accept"),
              i(e, "Content-Type"),
              r.isFormData(t) ||
              r.isArrayBuffer(t) ||
              r.isBuffer(t) ||
              r.isStream(t) ||
              r.isFile(t) ||
              r.isBlob(t)
                ? t
                : r.isArrayBufferView(t)
                ? t.buffer
                : r.isURLSearchParams(t)
                ? (a(e, "application/x-www-form-urlencoded;charset=utf-8"),
                  t.toString())
                : r.isObject(t)
                ? (a(e, "application/json;charset=utf-8"), JSON.stringify(t))
                : t
            );
          },
        ],
        transformResponse: [
          function (t) {
            if ("string" === typeof t)
              try {
                t = JSON.parse(t);
              } catch (e) {}
            return t;
          },
        ],
        timeout: 0,
        xsrfCookieName: "XSRF-TOKEN",
        xsrfHeaderName: "X-XSRF-TOKEN",
        maxContentLength: -1,
        maxBodyLength: -1,
        validateStatus: function (t) {
          return t >= 200 && t < 300;
        },
        headers: { common: { Accept: "application/json, text/plain, */*" } },
      };
      r.forEach(["delete", "get", "head"], function (t) {
        l.headers[t] = {};
      }),
        r.forEach(["post", "put", "patch"], function (t) {
          l.headers[t] = r.merge(o);
        }),
        (t.exports = l);
    }).call(this, n("4362"));
  },
  "24aa": function (t, e) {
    var n;
    n = (function () {
      return this;
    })();
    try {
      n = n || new Function("return this")();
    } catch (r) {
      "object" === typeof window && (n = window);
    }
    t.exports = n;
  },
  "24fb": function (t, e, n) {
    "use strict";
    function r(t, e) {
      var n = t[1] || "",
        r = t[3];
      if (!r) return n;
      if (e && "function" === typeof btoa) {
        var o = i(r),
          a = r.sources.map(function (t) {
            return "/*# sourceURL=".concat(r.sourceRoot || "").concat(t, " */");
          });
        return [n].concat(a).concat([o]).join("\n");
      }
      return [n].join("\n");
    }
    function i(t) {
      var e = btoa(unescape(encodeURIComponent(JSON.stringify(t)))),
        n =
          "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(
            e
          );
      return "/*# ".concat(n, " */");
    }
    t.exports = function (t) {
      var e = [];
      return (
        (e.toString = function () {
          return this.map(function (e) {
            var n = r(e, t);
            return e[2] ? "@media ".concat(e[2], " {").concat(n, "}") : n;
          }).join("");
        }),
        (e.i = function (t, n, r) {
          "string" === typeof t && (t = [[null, t, ""]]);
          var i = {};
          if (r)
            for (var o = 0; o < this.length; o++) {
              var a = this[o][0];
              null != a && (i[a] = !0);
            }
          for (var s = 0; s < t.length; s++) {
            var l = [].concat(t[s]);
            (r && i[l[0]]) ||
              (n &&
                (l[2]
                  ? (l[2] = "".concat(n, " and ").concat(l[2]))
                  : (l[2] = n)),
              e.push(l));
          }
        }),
        e
      );
    };
  },
  2626: function (t, e, n) {
    "use strict";
    var r = n("d066"),
      i = n("9bf2"),
      o = n("b622"),
      a = n("83ab"),
      s = o("species");
    t.exports = function (t) {
      var e = r(t),
        n = i.f;
      a &&
        e &&
        !e[s] &&
        n(e, s, {
          configurable: !0,
          get: function () {
            return this;
          },
        });
    };
  },
  "289e": function (t, e) {
    /*! (C) Andrea Giammarchi - @WebReflection - ISC Style License */
    !(function (t, e) {
      "use strict";
      function n() {
        var t = A.splice(0, A.length);
        for (Qt = 0; t.length; ) t.shift().call(null, t.shift());
      }
      function r(t, e) {
        for (var n = 0, r = t.length; n < r; n++) v(t[n], e);
      }
      function i(t) {
        for (var e, n = 0, r = t.length; n < r; n++) (e = t[n]), I(e, at[a(e)]);
      }
      function o(t) {
        return function (e) {
          jt(e) && (v(e, t), st.length && r(e.querySelectorAll(st), t));
        };
      }
      function a(t) {
        var e = Wt.call(t, "is"),
          n = t.nodeName.toUpperCase(),
          r = ct.call(ot, e ? nt + e.toUpperCase() : et + n);
        return e && -1 < r && !s(n, e) ? -1 : r;
      }
      function s(t, e) {
        return -1 < st.indexOf(t + '[is="' + e + '"]');
      }
      function l(t) {
        var e = t.currentTarget,
          n = t.attrChange,
          r = t.attrName,
          i = t.target,
          o = t[K] || 2,
          a = t[Z] || 3;
        !oe ||
          (i && i !== e) ||
          !e[W] ||
          "style" === r ||
          (t.prevValue === t.newValue &&
            ("" !== t.newValue || (n !== o && n !== a))) ||
          e[W](r, n === o ? null : t.prevValue, n === a ? null : t.newValue);
      }
      function c(t) {
        var e = o(t);
        return function (t) {
          A.push(e, t.target), Qt && clearTimeout(Qt), (Qt = setTimeout(n, 1));
        };
      }
      function u(t) {
        ie && ((ie = !1), t.currentTarget.removeEventListener(Q, u)),
          st.length &&
            r((t.target || C).querySelectorAll(st), t.detail === V ? V : H),
          Ft && p();
      }
      function d(t, e) {
        var n = this;
        Yt.call(n, t, e), T.call(n, { target: n });
      }
      function f(t, e, n) {
        var r = e.apply(t, n),
          o = a(r);
        return (
          -1 < o && I(r, at[o]),
          n.pop() && st.length && i(r.querySelectorAll(st)),
          r
        );
      }
      function h(t, e) {
        Lt(t, e),
          P
            ? P.observe(t, Zt)
            : (re && ((t.setAttribute = d), (t[j] = E(t)), t[z](tt, T)),
              t[z](J, l)),
          t[G] && oe && ((t.created = !0), t[G](), (t.created = !1));
      }
      function p() {
        for (var t, e = 0, n = zt.length; e < n; e++)
          (t = zt[e]), lt.contains(t) || (n--, zt.splice(e--, 1), v(t, V));
      }
      function g(t) {
        throw new Error("A " + t + " type is already registered");
      }
      function v(t, e) {
        var n,
          r,
          i = a(t);
        -1 < i &&
          !Vt.call(t, "TEMPLATE") &&
          (D(t, at[i]),
          (i = 0),
          e !== H || t[H]
            ? e !== V ||
              t[V] ||
              ((t[H] = !1), (t[V] = !0), (r = "disconnected"), (i = 1))
            : ((t[V] = !1),
              (t[H] = !0),
              (r = "connected"),
              (i = 1),
              Ft && ct.call(zt, t) < 0 && zt.push(t)),
          i && (n = t[e + B] || t[r + B]) && n.call(t));
      }
      function m() {}
      function b(t, e, n) {
        var r = (n && n[$]) || "",
          i = e.prototype,
          o = Pt(i),
          a = e.observedAttributes || pt,
          s = { prototype: o };
        Rt(o, G, {
          value: function () {
            if (St) St = !1;
            else if (!this[xt]) {
              (this[xt] = !0), new e(this), i[G] && i[G].call(this);
              var t = At[Ot.get(e)];
              (!wt || t.create.length > 1) && _(this);
            }
          },
        }),
          Rt(o, W, {
            value: function (t) {
              -1 < ct.call(a, t) && i[W] && i[W].apply(this, arguments);
            },
          }),
          i[q] && Rt(o, U, { value: i[q] }),
          i[Y] && Rt(o, X, { value: i[Y] }),
          r && (s[$] = r),
          (t = t.toUpperCase()),
          (At[t] = { constructor: e, create: r ? [r, Et(t)] : [t] }),
          Ot.set(e, t),
          C[F](t.toLowerCase(), s),
          w(t),
          Tt[t].r();
      }
      function y(t) {
        var e = At[t.toUpperCase()];
        return e && e.constructor;
      }
      function x(t) {
        return "string" == typeof t ? t : (t && t.is) || "";
      }
      function _(t) {
        for (var e, n = t[W], r = n ? t.attributes : pt, i = r.length; i--; )
          (e = r[i]),
            n.call(t, e.name || e.nodeName, null, e.value || e.nodeValue);
      }
      function w(t) {
        return (
          (t = t.toUpperCase()),
          t in Tt ||
            ((Tt[t] = {}),
            (Tt[t].p = new Mt(function (e) {
              Tt[t].r = e;
            }))),
          Tt[t].p
        );
      }
      function k() {
        _t && delete t.customElements,
          ht(t, "customElements", { configurable: !0, value: new m() }),
          ht(t, "CustomElementRegistry", { configurable: !0, value: m });
        for (
          var e = S.get(/^HTML[A-Z]*[a-z]/), n = e.length;
          n--;
          (function (e) {
            var n = t[e];
            if (n) {
              (t[e] = function (t) {
                var e, r;
                return (
                  t || (t = this),
                  t[xt] ||
                    ((St = !0),
                    (e = At[Ot.get(t.constructor)]),
                    (r = wt && 1 === e.create.length),
                    (t = r
                      ? Reflect.construct(n, pt, e.constructor)
                      : C.createElement.apply(C, e.create)),
                    (t[xt] = !0),
                    (St = !1),
                    r || _(t)),
                  t
                );
              }),
                (t[e].prototype = n.prototype);
              try {
                n.prototype.constructor = t[e];
              } catch (r) {
                !0, ht(n, xt, { value: t[e] });
              }
            }
          })(e[n])
        );
        (C.createElement = function (t, e) {
          var n = x(e);
          return n ? Kt.call(this, t, Et(n)) : Kt.call(this, t);
        }),
          te || ((ne = !0), C[F](""));
      }
      var C = t.document,
        M = t.Object,
        S = (function (t) {
          var e,
            n,
            r,
            i,
            o = /^[A-Z]+[a-z]/,
            a = function (t) {
              var e,
                n = [];
              for (e in l) t.test(e) && n.push(e);
              return n;
            },
            s = function (t, e) {
              (e = e.toLowerCase()) in l ||
                ((l[t] = (l[t] || []).concat(e)),
                (l[e] = l[e.toUpperCase()] = t));
            },
            l = (M.create || M)(null),
            c = {};
          for (n in t)
            for (i in t[n])
              for (r = t[n][i], l[i] = r, e = 0; e < r.length; e++)
                l[r[e].toLowerCase()] = l[r[e].toUpperCase()] = i;
          return (
            (c.get = function (t) {
              return "string" == typeof t
                ? l[t] || (o.test(t) ? [] : "")
                : a(t);
            }),
            (c.set = function (t, e) {
              return o.test(t) ? s(t, e) : s(e, t), c;
            }),
            c
          );
        })({
          collections: {
            HTMLAllCollection: ["all"],
            HTMLCollection: ["forms"],
            HTMLFormControlsCollection: ["elements"],
            HTMLOptionsCollection: ["options"],
          },
          elements: {
            Element: ["element"],
            HTMLAnchorElement: ["a"],
            HTMLAppletElement: ["applet"],
            HTMLAreaElement: ["area"],
            HTMLAttachmentElement: ["attachment"],
            HTMLAudioElement: ["audio"],
            HTMLBRElement: ["br"],
            HTMLBaseElement: ["base"],
            HTMLBodyElement: ["body"],
            HTMLButtonElement: ["button"],
            HTMLCanvasElement: ["canvas"],
            HTMLContentElement: ["content"],
            HTMLDListElement: ["dl"],
            HTMLDataElement: ["data"],
            HTMLDataListElement: ["datalist"],
            HTMLDetailsElement: ["details"],
            HTMLDialogElement: ["dialog"],
            HTMLDirectoryElement: ["dir"],
            HTMLDivElement: ["div"],
            HTMLDocument: ["document"],
            HTMLElement: [
              "element",
              "abbr",
              "address",
              "article",
              "aside",
              "b",
              "bdi",
              "bdo",
              "cite",
              "code",
              "command",
              "dd",
              "dfn",
              "dt",
              "em",
              "figcaption",
              "figure",
              "footer",
              "header",
              "i",
              "kbd",
              "mark",
              "nav",
              "noscript",
              "rp",
              "rt",
              "ruby",
              "s",
              "samp",
              "section",
              "small",
              "strong",
              "sub",
              "summary",
              "sup",
              "u",
              "var",
              "wbr",
            ],
            HTMLEmbedElement: ["embed"],
            HTMLFieldSetElement: ["fieldset"],
            HTMLFontElement: ["font"],
            HTMLFormElement: ["form"],
            HTMLFrameElement: ["frame"],
            HTMLFrameSetElement: ["frameset"],
            HTMLHRElement: ["hr"],
            HTMLHeadElement: ["head"],
            HTMLHeadingElement: ["h1", "h2", "h3", "h4", "h5", "h6"],
            HTMLHtmlElement: ["html"],
            HTMLIFrameElement: ["iframe"],
            HTMLImageElement: ["img"],
            HTMLInputElement: ["input"],
            HTMLKeygenElement: ["keygen"],
            HTMLLIElement: ["li"],
            HTMLLabelElement: ["label"],
            HTMLLegendElement: ["legend"],
            HTMLLinkElement: ["link"],
            HTMLMapElement: ["map"],
            HTMLMarqueeElement: ["marquee"],
            HTMLMediaElement: ["media"],
            HTMLMenuElement: ["menu"],
            HTMLMenuItemElement: ["menuitem"],
            HTMLMetaElement: ["meta"],
            HTMLMeterElement: ["meter"],
            HTMLModElement: ["del", "ins"],
            HTMLOListElement: ["ol"],
            HTMLObjectElement: ["object"],
            HTMLOptGroupElement: ["optgroup"],
            HTMLOptionElement: ["option"],
            HTMLOutputElement: ["output"],
            HTMLParagraphElement: ["p"],
            HTMLParamElement: ["param"],
            HTMLPictureElement: ["picture"],
            HTMLPreElement: ["pre"],
            HTMLProgressElement: ["progress"],
            HTMLQuoteElement: ["blockquote", "q", "quote"],
            HTMLScriptElement: ["script"],
            HTMLSelectElement: ["select"],
            HTMLShadowElement: ["shadow"],
            HTMLSlotElement: ["slot"],
            HTMLSourceElement: ["source"],
            HTMLSpanElement: ["span"],
            HTMLStyleElement: ["style"],
            HTMLTableCaptionElement: ["caption"],
            HTMLTableCellElement: ["td", "th"],
            HTMLTableColElement: ["col", "colgroup"],
            HTMLTableElement: ["table"],
            HTMLTableRowElement: ["tr"],
            HTMLTableSectionElement: ["thead", "tbody", "tfoot"],
            HTMLTemplateElement: ["template"],
            HTMLTextAreaElement: ["textarea"],
            HTMLTimeElement: ["time"],
            HTMLTitleElement: ["title"],
            HTMLTrackElement: ["track"],
            HTMLUListElement: ["ul"],
            HTMLUnknownElement: ["unknown", "vhgroupv", "vkeygen"],
            HTMLVideoElement: ["video"],
          },
          nodes: {
            Attr: ["node"],
            Audio: ["audio"],
            CDATASection: ["node"],
            CharacterData: ["node"],
            Comment: ["#comment"],
            Document: ["#document"],
            DocumentFragment: ["#document-fragment"],
            DocumentType: ["node"],
            HTMLDocument: ["#document"],
            Image: ["img"],
            Option: ["option"],
            ProcessingInstruction: ["node"],
            ShadowRoot: ["#shadow-root"],
            Text: ["#text"],
            XMLDocument: ["xml"],
          },
        });
      "object" != typeof e && (e = { type: e || "auto" });
      var A,
        T,
        O,
        E,
        P,
        L,
        D,
        I,
        N,
        F = "registerElement",
        R = (1e5 * t.Math.random()) >> 0,
        j = "__" + F + R,
        z = "addEventListener",
        H = "attached",
        B = "Callback",
        V = "detached",
        $ = "extends",
        W = "attributeChanged" + B,
        U = H + B,
        q = "connected" + B,
        Y = "disconnected" + B,
        G = "created" + B,
        X = V + B,
        K = "ADDITION",
        Z = "REMOVAL",
        J = "DOMAttrModified",
        Q = "DOMContentLoaded",
        tt = "DOMSubtreeModified",
        et = "<",
        nt = "=",
        rt = /^[A-Z][._A-Z0-9]*-[-._A-Z0-9]*$/,
        it = [
          "ANNOTATION-XML",
          "COLOR-PROFILE",
          "FONT-FACE",
          "FONT-FACE-SRC",
          "FONT-FACE-URI",
          "FONT-FACE-FORMAT",
          "FONT-FACE-NAME",
          "MISSING-GLYPH",
        ],
        ot = [],
        at = [],
        st = "",
        lt = C.documentElement,
        ct =
          ot.indexOf ||
          function (t) {
            for (var e = this.length; e-- && this[e] !== t; );
            return e;
          },
        ut = M.prototype,
        dt = ut.hasOwnProperty,
        ft = ut.isPrototypeOf,
        ht = M.defineProperty,
        pt = [],
        gt = M.getOwnPropertyDescriptor,
        vt = M.getOwnPropertyNames,
        mt = M.getPrototypeOf,
        bt = M.setPrototypeOf,
        yt = !!M.__proto__,
        xt = "__dreCEv1",
        _t = t.customElements,
        wt =
          !/^force/.test(e.type) &&
          !!(_t && _t.define && _t.get && _t.whenDefined),
        kt = M.create || M,
        Ct =
          t.Map ||
          function () {
            var t,
              e = [],
              n = [];
            return {
              get: function (t) {
                return n[ct.call(e, t)];
              },
              set: function (r, i) {
                (t = ct.call(e, r)),
                  t < 0 ? (n[e.push(r) - 1] = i) : (n[t] = i);
              },
            };
          },
        Mt =
          t.Promise ||
          function (t) {
            function e(t) {
              for (r = !0; n.length; ) n.shift()(t);
            }
            var n = [],
              r = !1,
              i = {
                catch: function () {
                  return i;
                },
                then: function (t) {
                  return n.push(t), r && setTimeout(e, 1), i;
                },
              };
            return t(e), i;
          },
        St = !1,
        At = kt(null),
        Tt = kt(null),
        Ot = new Ct(),
        Et = function (t) {
          return t.toLowerCase();
        },
        Pt =
          M.create ||
          function t(e) {
            return e ? ((t.prototype = e), new t()) : this;
          },
        Lt =
          bt ||
          (yt
            ? function (t, e) {
                return (t.__proto__ = e), t;
              }
            : vt && gt
            ? (function () {
                function t(t, e) {
                  for (var n, r = vt(e), i = 0, o = r.length; i < o; i++)
                    (n = r[i]), dt.call(t, n) || ht(t, n, gt(e, n));
                }
                return function (e, n) {
                  do {
                    t(e, n);
                  } while ((n = mt(n)) && !ft.call(n, e));
                  return e;
                };
              })()
            : function (t, e) {
                for (var n in e) t[n] = e[n];
                return t;
              }),
        Dt = t.MutationObserver || t.WebKitMutationObserver,
        It = t.HTMLAnchorElement,
        Nt = (t.HTMLElement || t.Element || t.Node).prototype,
        Ft = !ft.call(Nt, lt),
        Rt = Ft
          ? function (t, e, n) {
              return (t[e] = n.value), t;
            }
          : ht,
        jt = Ft
          ? function (t) {
              return 1 === t.nodeType;
            }
          : function (t) {
              return ft.call(Nt, t);
            },
        zt = Ft && [],
        Ht = Nt.attachShadow,
        Bt = Nt.cloneNode,
        Vt =
          Nt.closest ||
          function (t) {
            for (var e = this; e && e.nodeName !== t; ) e = e.parentNode;
            return e;
          },
        $t = Nt.dispatchEvent,
        Wt = Nt.getAttribute,
        Ut = Nt.hasAttribute,
        qt = Nt.removeAttribute,
        Yt = Nt.setAttribute,
        Gt = C.createElement,
        Xt = C.importNode,
        Kt = Gt,
        Zt = Dt && { attributes: !0, characterData: !0, attributeOldValue: !0 },
        Jt =
          Dt ||
          function (t) {
            (re = !1), lt.removeEventListener(J, Jt);
          },
        Qt = 0,
        te = F in C && !/^force-all/.test(e.type),
        ee = !0,
        ne = !1,
        re = !0,
        ie = !0,
        oe = !0;
      if (
        (Dt &&
          ((N = C.createElement("div")),
          (N.innerHTML = "<div><div></div></div>"),
          new Dt(function (t, e) {
            if (
              t[0] &&
              "childList" == t[0].type &&
              !t[0].removedNodes[0].childNodes.length
            ) {
              N = gt(Nt, "innerHTML");
              var n = N && N.set;
              n &&
                ht(Nt, "innerHTML", {
                  set: function (t) {
                    for (; this.lastChild; ) this.removeChild(this.lastChild);
                    n.call(this, t);
                  },
                });
            }
            e.disconnect(), (N = null);
          }).observe(N, { childList: !0, subtree: !0 }),
          (N.innerHTML = "")),
        te ||
          (bt || yt
            ? ((D = function (t, e) {
                ft.call(e, t) || h(t, e);
              }),
              (I = h))
            : ((D = function (t, e) {
                t[j] || ((t[j] = M(!0)), h(t, e));
              }),
              (I = D)),
          Ft
            ? ((re = !1),
              (function () {
                var t = gt(Nt, z),
                  e = t.value,
                  n = function (t) {
                    var e = new CustomEvent(J, { bubbles: !0 });
                    (e.attrName = t),
                      (e.prevValue = Wt.call(this, t)),
                      (e.newValue = null),
                      (e[Z] = e.attrChange = 2),
                      qt.call(this, t),
                      $t.call(this, e);
                  },
                  r = function (t, e) {
                    var n = Ut.call(this, t),
                      r = n && Wt.call(this, t),
                      i = new CustomEvent(J, { bubbles: !0 });
                    Yt.call(this, t, e),
                      (i.attrName = t),
                      (i.prevValue = n ? r : null),
                      (i.newValue = e),
                      n
                        ? (i.MODIFICATION = i.attrChange = 1)
                        : (i[K] = i.attrChange = 0),
                      $t.call(this, i);
                  },
                  i = function (t) {
                    var e,
                      n = t.currentTarget,
                      r = n[j],
                      i = t.propertyName;
                    r.hasOwnProperty(i) &&
                      ((r = r[i]),
                      (e = new CustomEvent(J, { bubbles: !0 })),
                      (e.attrName = r.name),
                      (e.prevValue = r.value || null),
                      (e.newValue = r.value = n[i] || null),
                      null == e.prevValue
                        ? (e[K] = e.attrChange = 0)
                        : (e.MODIFICATION = e.attrChange = 1),
                      $t.call(n, e));
                  };
                (t.value = function (t, o, a) {
                  t === J &&
                    this[W] &&
                    this.setAttribute !== r &&
                    ((this[j] = {
                      className: { name: "class", value: this.className },
                    }),
                    (this.setAttribute = r),
                    (this.removeAttribute = n),
                    e.call(this, "propertychange", i)),
                    e.call(this, t, o, a);
                }),
                  ht(Nt, z, t);
              })())
            : Dt ||
              (lt[z](J, Jt),
              lt.setAttribute(j, 1),
              lt.removeAttribute(j),
              re &&
                ((T = function (t) {
                  var e,
                    n,
                    r,
                    i = this;
                  if (i === t.target) {
                    for (r in ((e = i[j]), (i[j] = n = E(i)), n)) {
                      if (!(r in e)) return O(0, i, r, e[r], n[r], K);
                      if (n[r] !== e[r])
                        return O(1, i, r, e[r], n[r], "MODIFICATION");
                    }
                    for (r in e)
                      if (!(r in n)) return O(2, i, r, e[r], n[r], Z);
                  }
                }),
                (O = function (t, e, n, r, i, o) {
                  var a = {
                    attrChange: t,
                    currentTarget: e,
                    attrName: n,
                    prevValue: r,
                    newValue: i,
                  };
                  (a[o] = t), l(a);
                }),
                (E = function (t) {
                  for (
                    var e, n, r = {}, i = t.attributes, o = 0, a = i.length;
                    o < a;
                    o++
                  )
                    (e = i[o]),
                      "setAttribute" !== (n = e.name) && (r[n] = e.value);
                  return r;
                }))),
          (C[F] = function (t, e) {
            if (
              ((n = t.toUpperCase()),
              ee &&
                ((ee = !1),
                Dt
                  ? ((P = (function (t, e) {
                      function n(t, e) {
                        for (var n = 0, r = t.length; n < r; e(t[n++]));
                      }
                      return new Dt(function (r) {
                        for (var i, o, a, s = 0, l = r.length; s < l; s++)
                          (i = r[s]),
                            "childList" === i.type
                              ? (n(i.addedNodes, t), n(i.removedNodes, e))
                              : ((o = i.target),
                                oe &&
                                  o[W] &&
                                  "style" !== i.attributeName &&
                                  (a = Wt.call(o, i.attributeName)) !==
                                    i.oldValue &&
                                  o[W](i.attributeName, i.oldValue, a));
                      });
                    })(o(H), o(V))),
                    (L = function (t) {
                      return P.observe(t, { childList: !0, subtree: !0 }), t;
                    }),
                    L(C),
                    Ht &&
                      (Nt.attachShadow = function () {
                        return L(Ht.apply(this, arguments));
                      }))
                  : ((A = []),
                    C[z]("DOMNodeInserted", c(H)),
                    C[z]("DOMNodeRemoved", c(V))),
                C[z](Q, u),
                C[z]("readystatechange", u),
                (C.importNode = function (t, e) {
                  switch (t.nodeType) {
                    case 1:
                      return f(C, Xt, [t, !!e]);
                    case 11:
                      for (
                        var n = C.createDocumentFragment(),
                          r = t.childNodes,
                          i = r.length,
                          o = 0;
                        o < i;
                        o++
                      )
                        n.appendChild(C.importNode(r[o], !!e));
                      return n;
                    default:
                      return Bt.call(t, !!e);
                  }
                }),
                (Nt.cloneNode = function (t) {
                  return f(this, Bt, [!!t]);
                })),
              ne)
            )
              return (ne = !1);
            if (
              (-2 < ct.call(ot, nt + n) + ct.call(ot, et + n) && g(t),
              !rt.test(n) || -1 < ct.call(it, n))
            )
              throw new Error("The type " + t + " is invalid");
            var n,
              i,
              a = function () {
                return l ? C.createElement(d, n) : C.createElement(d);
              },
              s = e || ut,
              l = dt.call(s, $),
              d = l ? e[$].toUpperCase() : n;
            return (
              l && -1 < ct.call(ot, et + d) && g(d),
              (i = ot.push((l ? nt : et) + n) - 1),
              (st = st.concat(
                st.length ? "," : "",
                l ? d + '[is="' + t.toLowerCase() + '"]' : d
              )),
              (a.prototype = at[i] =
                dt.call(s, "prototype") ? s.prototype : Pt(Nt)),
              st.length && r(C.querySelectorAll(st), H),
              a
            );
          }),
          (C.createElement = Kt =
            function (t, e) {
              var n = x(e),
                r = n ? Gt.call(C, t, Et(n)) : Gt.call(C, t),
                i = "" + t,
                o = ct.call(ot, (n ? nt : et) + (n || i).toUpperCase()),
                a = -1 < o;
              return (
                n &&
                  (r.setAttribute("is", (n = n.toLowerCase())),
                  a && (a = s(i.toUpperCase(), n))),
                (oe = !C.createElement.innerHTMLHelper),
                a && I(r, at[o]),
                r
              );
            })),
        addEventListener(
          "beforeunload",
          function () {
            delete C.createElement, delete C.importNode, delete C[F];
          },
          !1
        ),
        (m.prototype = {
          constructor: m,
          define: wt
            ? function (t, e, n) {
                if (n) b(t, e, n);
                else {
                  var r = t.toUpperCase();
                  (At[r] = { constructor: e, create: [r] }),
                    Ot.set(e, r),
                    _t.define(t, e);
                }
              }
            : b,
          get: wt
            ? function (t) {
                return _t.get(t) || y(t);
              }
            : y,
          whenDefined: wt
            ? function (t) {
                return Mt.race([_t.whenDefined(t), w(t)]);
              }
            : w,
        }),
        !_t || /^force/.test(e.type))
      )
        k();
      else if (!e.noBuiltIn)
        try {
          !(function (e, n, r) {
            var i = new RegExp("^<a\\s+is=('|\")" + r + "\\1></a>$");
            if (
              ((n[$] = "a"),
              (e.prototype = Pt(It.prototype)),
              (e.prototype.constructor = e),
              t.customElements.define(r, e, n),
              !i.test(C.createElement("a", { is: r }).outerHTML) ||
                !i.test(new e().outerHTML))
            )
              throw n;
          })(
            function t() {
              return Reflect.construct(It, [], t);
            },
            {},
            "document-register-element-a" + R
          );
        } catch (ae) {
          k();
        }
      if (!e.noBuiltIn)
        try {
          if (Gt.call(C, "a", "a").outerHTML.indexOf("is") < 0) throw {};
        } catch (se) {
          Et = function (t) {
            return { is: t.toLowerCase() };
          };
        }
    })(window);
  },
  "2a62": function (t, e, n) {
    var r = n("825a");
    t.exports = function (t) {
      var e = t["return"];
      if (void 0 !== e) return r(e.call(t)).value;
    };
  },
  "2b0e": function (t, e, n) {
    "use strict";
    (function (t) {
      /*!
       * Vue.js v2.6.12
       * (c) 2014-2020 Evan You
       * Released under the MIT License.
       */
      var n = Object.freeze({});
      function r(t) {
        return void 0 === t || null === t;
      }
      function i(t) {
        return void 0 !== t && null !== t;
      }
      function o(t) {
        return !0 === t;
      }
      function a(t) {
        return !1 === t;
      }
      function s(t) {
        return (
          "string" === typeof t ||
          "number" === typeof t ||
          "symbol" === typeof t ||
          "boolean" === typeof t
        );
      }
      function l(t) {
        return null !== t && "object" === typeof t;
      }
      var c = Object.prototype.toString;
      function u(t) {
        return "[object Object]" === c.call(t);
      }
      function d(t) {
        return "[object RegExp]" === c.call(t);
      }
      function f(t) {
        var e = parseFloat(String(t));
        return e >= 0 && Math.floor(e) === e && isFinite(t);
      }
      function h(t) {
        return (
          i(t) && "function" === typeof t.then && "function" === typeof t.catch
        );
      }
      function p(t) {
        return null == t
          ? ""
          : Array.isArray(t) || (u(t) && t.toString === c)
          ? JSON.stringify(t, null, 2)
          : String(t);
      }
      function g(t) {
        var e = parseFloat(t);
        return isNaN(e) ? t : e;
      }
      function v(t, e) {
        for (
          var n = Object.create(null), r = t.split(","), i = 0;
          i < r.length;
          i++
        )
          n[r[i]] = !0;
        return e
          ? function (t) {
              return n[t.toLowerCase()];
            }
          : function (t) {
              return n[t];
            };
      }
      v("slot,component", !0);
      var m = v("key,ref,slot,slot-scope,is");
      function b(t, e) {
        if (t.length) {
          var n = t.indexOf(e);
          if (n > -1) return t.splice(n, 1);
        }
      }
      var y = Object.prototype.hasOwnProperty;
      function x(t, e) {
        return y.call(t, e);
      }
      function _(t) {
        var e = Object.create(null);
        return function (n) {
          var r = e[n];
          return r || (e[n] = t(n));
        };
      }
      var w = /-(\w)/g,
        k = _(function (t) {
          return t.replace(w, function (t, e) {
            return e ? e.toUpperCase() : "";
          });
        }),
        C = _(function (t) {
          return t.charAt(0).toUpperCase() + t.slice(1);
        }),
        M = /\B([A-Z])/g,
        S = _(function (t) {
          return t.replace(M, "-$1").toLowerCase();
        });
      function A(t, e) {
        function n(n) {
          var r = arguments.length;
          return r ? (r > 1 ? t.apply(e, arguments) : t.call(e, n)) : t.call(e);
        }
        return (n._length = t.length), n;
      }
      function T(t, e) {
        return t.bind(e);
      }
      var O = Function.prototype.bind ? T : A;
      function E(t, e) {
        e = e || 0;
        var n = t.length - e,
          r = new Array(n);
        while (n--) r[n] = t[n + e];
        return r;
      }
      function P(t, e) {
        for (var n in e) t[n] = e[n];
        return t;
      }
      function L(t) {
        for (var e = {}, n = 0; n < t.length; n++) t[n] && P(e, t[n]);
        return e;
      }
      function D(t, e, n) {}
      var I = function (t, e, n) {
          return !1;
        },
        N = function (t) {
          return t;
        };
      function F(t, e) {
        if (t === e) return !0;
        var n = l(t),
          r = l(e);
        if (!n || !r) return !n && !r && String(t) === String(e);
        try {
          var i = Array.isArray(t),
            o = Array.isArray(e);
          if (i && o)
            return (
              t.length === e.length &&
              t.every(function (t, n) {
                return F(t, e[n]);
              })
            );
          if (t instanceof Date && e instanceof Date)
            return t.getTime() === e.getTime();
          if (i || o) return !1;
          var a = Object.keys(t),
            s = Object.keys(e);
          return (
            a.length === s.length &&
            a.every(function (n) {
              return F(t[n], e[n]);
            })
          );
        } catch (c) {
          return !1;
        }
      }
      function R(t, e) {
        for (var n = 0; n < t.length; n++) if (F(t[n], e)) return n;
        return -1;
      }
      function j(t) {
        var e = !1;
        return function () {
          e || ((e = !0), t.apply(this, arguments));
        };
      }
      var z = "data-server-rendered",
        H = ["component", "directive", "filter"],
        B = [
          "beforeCreate",
          "created",
          "beforeMount",
          "mounted",
          "beforeUpdate",
          "updated",
          "beforeDestroy",
          "destroyed",
          "activated",
          "deactivated",
          "errorCaptured",
          "serverPrefetch",
        ],
        V = {
          optionMergeStrategies: Object.create(null),
          silent: !1,
          productionTip: !1,
          devtools: !1,
          performance: !1,
          errorHandler: null,
          warnHandler: null,
          ignoredElements: [],
          keyCodes: Object.create(null),
          isReservedTag: I,
          isReservedAttr: I,
          isUnknownElement: I,
          getTagNamespace: D,
          parsePlatformTagName: N,
          mustUseProp: I,
          async: !0,
          _lifecycleHooks: B,
        },
        $ =
          /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;
      function W(t) {
        var e = (t + "").charCodeAt(0);
        return 36 === e || 95 === e;
      }
      function U(t, e, n, r) {
        Object.defineProperty(t, e, {
          value: n,
          enumerable: !!r,
          writable: !0,
          configurable: !0,
        });
      }
      var q = new RegExp("[^" + $.source + ".$_\\d]");
      function Y(t) {
        if (!q.test(t)) {
          var e = t.split(".");
          return function (t) {
            for (var n = 0; n < e.length; n++) {
              if (!t) return;
              t = t[e[n]];
            }
            return t;
          };
        }
      }
      var G,
        X = "__proto__" in {},
        K = "undefined" !== typeof window,
        Z = "undefined" !== typeof WXEnvironment && !!WXEnvironment.platform,
        J = Z && WXEnvironment.platform.toLowerCase(),
        Q = K && window.navigator.userAgent.toLowerCase(),
        tt = Q && /msie|trident/.test(Q),
        et = Q && Q.indexOf("msie 9.0") > 0,
        nt = Q && Q.indexOf("edge/") > 0,
        rt =
          (Q && Q.indexOf("android"),
          (Q && /iphone|ipad|ipod|ios/.test(Q)) || "ios" === J),
        it =
          (Q && /chrome\/\d+/.test(Q),
          Q && /phantomjs/.test(Q),
          Q && Q.match(/firefox\/(\d+)/)),
        ot = {}.watch,
        at = !1;
      if (K)
        try {
          var st = {};
          Object.defineProperty(st, "passive", {
            get: function () {
              at = !0;
            },
          }),
            window.addEventListener("test-passive", null, st);
        } catch (ka) {}
      var lt = function () {
          return (
            void 0 === G &&
              (G =
                !K &&
                !Z &&
                "undefined" !== typeof t &&
                t["process"] &&
                "server" === t["process"].env.VUE_ENV),
            G
          );
        },
        ct = K && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;
      function ut(t) {
        return "function" === typeof t && /native code/.test(t.toString());
      }
      var dt,
        ft =
          "undefined" !== typeof Symbol &&
          ut(Symbol) &&
          "undefined" !== typeof Reflect &&
          ut(Reflect.ownKeys);
      dt =
        "undefined" !== typeof Set && ut(Set)
          ? Set
          : (function () {
              function t() {
                this.set = Object.create(null);
              }
              return (
                (t.prototype.has = function (t) {
                  return !0 === this.set[t];
                }),
                (t.prototype.add = function (t) {
                  this.set[t] = !0;
                }),
                (t.prototype.clear = function () {
                  this.set = Object.create(null);
                }),
                t
              );
            })();
      var ht = D,
        pt = 0,
        gt = function () {
          (this.id = pt++), (this.subs = []);
        };
      (gt.prototype.addSub = function (t) {
        this.subs.push(t);
      }),
        (gt.prototype.removeSub = function (t) {
          b(this.subs, t);
        }),
        (gt.prototype.depend = function () {
          gt.target && gt.target.addDep(this);
        }),
        (gt.prototype.notify = function () {
          var t = this.subs.slice();
          for (var e = 0, n = t.length; e < n; e++) t[e].update();
        }),
        (gt.target = null);
      var vt = [];
      function mt(t) {
        vt.push(t), (gt.target = t);
      }
      function bt() {
        vt.pop(), (gt.target = vt[vt.length - 1]);
      }
      var yt = function (t, e, n, r, i, o, a, s) {
          (this.tag = t),
            (this.data = e),
            (this.children = n),
            (this.text = r),
            (this.elm = i),
            (this.ns = void 0),
            (this.context = o),
            (this.fnContext = void 0),
            (this.fnOptions = void 0),
            (this.fnScopeId = void 0),
            (this.key = e && e.key),
            (this.componentOptions = a),
            (this.componentInstance = void 0),
            (this.parent = void 0),
            (this.raw = !1),
            (this.isStatic = !1),
            (this.isRootInsert = !0),
            (this.isComment = !1),
            (this.isCloned = !1),
            (this.isOnce = !1),
            (this.asyncFactory = s),
            (this.asyncMeta = void 0),
            (this.isAsyncPlaceholder = !1);
        },
        xt = { child: { configurable: !0 } };
      (xt.child.get = function () {
        return this.componentInstance;
      }),
        Object.defineProperties(yt.prototype, xt);
      var _t = function (t) {
        void 0 === t && (t = "");
        var e = new yt();
        return (e.text = t), (e.isComment = !0), e;
      };
      function wt(t) {
        return new yt(void 0, void 0, void 0, String(t));
      }
      function kt(t) {
        var e = new yt(
          t.tag,
          t.data,
          t.children && t.children.slice(),
          t.text,
          t.elm,
          t.context,
          t.componentOptions,
          t.asyncFactory
        );
        return (
          (e.ns = t.ns),
          (e.isStatic = t.isStatic),
          (e.key = t.key),
          (e.isComment = t.isComment),
          (e.fnContext = t.fnContext),
          (e.fnOptions = t.fnOptions),
          (e.fnScopeId = t.fnScopeId),
          (e.asyncMeta = t.asyncMeta),
          (e.isCloned = !0),
          e
        );
      }
      var Ct = Array.prototype,
        Mt = Object.create(Ct),
        St = ["push", "pop", "shift", "unshift", "splice", "sort", "reverse"];
      St.forEach(function (t) {
        var e = Ct[t];
        U(Mt, t, function () {
          var n = [],
            r = arguments.length;
          while (r--) n[r] = arguments[r];
          var i,
            o = e.apply(this, n),
            a = this.__ob__;
          switch (t) {
            case "push":
            case "unshift":
              i = n;
              break;
            case "splice":
              i = n.slice(2);
              break;
          }
          return i && a.observeArray(i), a.dep.notify(), o;
        });
      });
      var At = Object.getOwnPropertyNames(Mt),
        Tt = !0;
      function Ot(t) {
        Tt = t;
      }
      var Et = function (t) {
        (this.value = t),
          (this.dep = new gt()),
          (this.vmCount = 0),
          U(t, "__ob__", this),
          Array.isArray(t)
            ? (X ? Pt(t, Mt) : Lt(t, Mt, At), this.observeArray(t))
            : this.walk(t);
      };
      function Pt(t, e) {
        t.__proto__ = e;
      }
      function Lt(t, e, n) {
        for (var r = 0, i = n.length; r < i; r++) {
          var o = n[r];
          U(t, o, e[o]);
        }
      }
      function Dt(t, e) {
        var n;
        if (l(t) && !(t instanceof yt))
          return (
            x(t, "__ob__") && t.__ob__ instanceof Et
              ? (n = t.__ob__)
              : Tt &&
                !lt() &&
                (Array.isArray(t) || u(t)) &&
                Object.isExtensible(t) &&
                !t._isVue &&
                (n = new Et(t)),
            e && n && n.vmCount++,
            n
          );
      }
      function It(t, e, n, r, i) {
        var o = new gt(),
          a = Object.getOwnPropertyDescriptor(t, e);
        if (!a || !1 !== a.configurable) {
          var s = a && a.get,
            l = a && a.set;
          (s && !l) || 2 !== arguments.length || (n = t[e]);
          var c = !i && Dt(n);
          Object.defineProperty(t, e, {
            enumerable: !0,
            configurable: !0,
            get: function () {
              var e = s ? s.call(t) : n;
              return (
                gt.target &&
                  (o.depend(),
                  c && (c.dep.depend(), Array.isArray(e) && Rt(e))),
                e
              );
            },
            set: function (e) {
              var r = s ? s.call(t) : n;
              e === r ||
                (e !== e && r !== r) ||
                (s && !l) ||
                (l ? l.call(t, e) : (n = e), (c = !i && Dt(e)), o.notify());
            },
          });
        }
      }
      function Nt(t, e, n) {
        if (Array.isArray(t) && f(e))
          return (t.length = Math.max(t.length, e)), t.splice(e, 1, n), n;
        if (e in t && !(e in Object.prototype)) return (t[e] = n), n;
        var r = t.__ob__;
        return t._isVue || (r && r.vmCount)
          ? n
          : r
          ? (It(r.value, e, n), r.dep.notify(), n)
          : ((t[e] = n), n);
      }
      function Ft(t, e) {
        if (Array.isArray(t) && f(e)) t.splice(e, 1);
        else {
          var n = t.__ob__;
          t._isVue ||
            (n && n.vmCount) ||
            (x(t, e) && (delete t[e], n && n.dep.notify()));
        }
      }
      function Rt(t) {
        for (var e = void 0, n = 0, r = t.length; n < r; n++)
          (e = t[n]),
            e && e.__ob__ && e.__ob__.dep.depend(),
            Array.isArray(e) && Rt(e);
      }
      (Et.prototype.walk = function (t) {
        for (var e = Object.keys(t), n = 0; n < e.length; n++) It(t, e[n]);
      }),
        (Et.prototype.observeArray = function (t) {
          for (var e = 0, n = t.length; e < n; e++) Dt(t[e]);
        });
      var jt = V.optionMergeStrategies;
      function zt(t, e) {
        if (!e) return t;
        for (
          var n, r, i, o = ft ? Reflect.ownKeys(e) : Object.keys(e), a = 0;
          a < o.length;
          a++
        )
          (n = o[a]),
            "__ob__" !== n &&
              ((r = t[n]),
              (i = e[n]),
              x(t, n) ? r !== i && u(r) && u(i) && zt(r, i) : Nt(t, n, i));
        return t;
      }
      function Ht(t, e, n) {
        return n
          ? function () {
              var r = "function" === typeof e ? e.call(n, n) : e,
                i = "function" === typeof t ? t.call(n, n) : t;
              return r ? zt(r, i) : i;
            }
          : e
          ? t
            ? function () {
                return zt(
                  "function" === typeof e ? e.call(this, this) : e,
                  "function" === typeof t ? t.call(this, this) : t
                );
              }
            : e
          : t;
      }
      function Bt(t, e) {
        var n = e ? (t ? t.concat(e) : Array.isArray(e) ? e : [e]) : t;
        return n ? Vt(n) : n;
      }
      function Vt(t) {
        for (var e = [], n = 0; n < t.length; n++)
          -1 === e.indexOf(t[n]) && e.push(t[n]);
        return e;
      }
      function $t(t, e, n, r) {
        var i = Object.create(t || null);
        return e ? P(i, e) : i;
      }
      (jt.data = function (t, e, n) {
        return n ? Ht(t, e, n) : e && "function" !== typeof e ? t : Ht(t, e);
      }),
        B.forEach(function (t) {
          jt[t] = Bt;
        }),
        H.forEach(function (t) {
          jt[t + "s"] = $t;
        }),
        (jt.watch = function (t, e, n, r) {
          if ((t === ot && (t = void 0), e === ot && (e = void 0), !e))
            return Object.create(t || null);
          if (!t) return e;
          var i = {};
          for (var o in (P(i, t), e)) {
            var a = i[o],
              s = e[o];
            a && !Array.isArray(a) && (a = [a]),
              (i[o] = a ? a.concat(s) : Array.isArray(s) ? s : [s]);
          }
          return i;
        }),
        (jt.props =
          jt.methods =
          jt.inject =
          jt.computed =
            function (t, e, n, r) {
              if (!t) return e;
              var i = Object.create(null);
              return P(i, t), e && P(i, e), i;
            }),
        (jt.provide = Ht);
      var Wt = function (t, e) {
        return void 0 === e ? t : e;
      };
      function Ut(t, e) {
        var n = t.props;
        if (n) {
          var r,
            i,
            o,
            a = {};
          if (Array.isArray(n)) {
            r = n.length;
            while (r--)
              (i = n[r]),
                "string" === typeof i && ((o = k(i)), (a[o] = { type: null }));
          } else if (u(n))
            for (var s in n)
              (i = n[s]), (o = k(s)), (a[o] = u(i) ? i : { type: i });
          else 0;
          t.props = a;
        }
      }
      function qt(t, e) {
        var n = t.inject;
        if (n) {
          var r = (t.inject = {});
          if (Array.isArray(n))
            for (var i = 0; i < n.length; i++) r[n[i]] = { from: n[i] };
          else if (u(n))
            for (var o in n) {
              var a = n[o];
              r[o] = u(a) ? P({ from: o }, a) : { from: a };
            }
          else 0;
        }
      }
      function Yt(t) {
        var e = t.directives;
        if (e)
          for (var n in e) {
            var r = e[n];
            "function" === typeof r && (e[n] = { bind: r, update: r });
          }
      }
      function Gt(t, e, n) {
        if (
          ("function" === typeof e && (e = e.options),
          Ut(e, n),
          qt(e, n),
          Yt(e),
          !e._base && (e.extends && (t = Gt(t, e.extends, n)), e.mixins))
        )
          for (var r = 0, i = e.mixins.length; r < i; r++)
            t = Gt(t, e.mixins[r], n);
        var o,
          a = {};
        for (o in t) s(o);
        for (o in e) x(t, o) || s(o);
        function s(r) {
          var i = jt[r] || Wt;
          a[r] = i(t[r], e[r], n, r);
        }
        return a;
      }
      function Xt(t, e, n, r) {
        if ("string" === typeof n) {
          var i = t[e];
          if (x(i, n)) return i[n];
          var o = k(n);
          if (x(i, o)) return i[o];
          var a = C(o);
          if (x(i, a)) return i[a];
          var s = i[n] || i[o] || i[a];
          return s;
        }
      }
      function Kt(t, e, n, r) {
        var i = e[t],
          o = !x(n, t),
          a = n[t],
          s = te(Boolean, i.type);
        if (s > -1)
          if (o && !x(i, "default")) a = !1;
          else if ("" === a || a === S(t)) {
            var l = te(String, i.type);
            (l < 0 || s < l) && (a = !0);
          }
        if (void 0 === a) {
          a = Zt(r, i, t);
          var c = Tt;
          Ot(!0), Dt(a), Ot(c);
        }
        return a;
      }
      function Zt(t, e, n) {
        if (x(e, "default")) {
          var r = e.default;
          return t &&
            t.$options.propsData &&
            void 0 === t.$options.propsData[n] &&
            void 0 !== t._props[n]
            ? t._props[n]
            : "function" === typeof r && "Function" !== Jt(e.type)
            ? r.call(t)
            : r;
        }
      }
      function Jt(t) {
        var e = t && t.toString().match(/^\s*function (\w+)/);
        return e ? e[1] : "";
      }
      function Qt(t, e) {
        return Jt(t) === Jt(e);
      }
      function te(t, e) {
        if (!Array.isArray(e)) return Qt(e, t) ? 0 : -1;
        for (var n = 0, r = e.length; n < r; n++) if (Qt(e[n], t)) return n;
        return -1;
      }
      function ee(t, e, n) {
        mt();
        try {
          if (e) {
            var r = e;
            while ((r = r.$parent)) {
              var i = r.$options.errorCaptured;
              if (i)
                for (var o = 0; o < i.length; o++)
                  try {
                    var a = !1 === i[o].call(r, t, e, n);
                    if (a) return;
                  } catch (ka) {
                    re(ka, r, "errorCaptured hook");
                  }
            }
          }
          re(t, e, n);
        } finally {
          bt();
        }
      }
      function ne(t, e, n, r, i) {
        var o;
        try {
          (o = n ? t.apply(e, n) : t.call(e)),
            o &&
              !o._isVue &&
              h(o) &&
              !o._handled &&
              (o.catch(function (t) {
                return ee(t, r, i + " (Promise/async)");
              }),
              (o._handled = !0));
        } catch (ka) {
          ee(ka, r, i);
        }
        return o;
      }
      function re(t, e, n) {
        if (V.errorHandler)
          try {
            return V.errorHandler.call(null, t, e, n);
          } catch (ka) {
            ka !== t && ie(ka, null, "config.errorHandler");
          }
        ie(t, e, n);
      }
      function ie(t, e, n) {
        if ((!K && !Z) || "undefined" === typeof console) throw t;
      }
      var oe,
        ae = !1,
        se = [],
        le = !1;
      function ce() {
        le = !1;
        var t = se.slice(0);
        se.length = 0;
        for (var e = 0; e < t.length; e++) t[e]();
      }
      if ("undefined" !== typeof Promise && ut(Promise)) {
        var ue = Promise.resolve();
        (oe = function () {
          ue.then(ce), rt && setTimeout(D);
        }),
          (ae = !0);
      } else if (
        tt ||
        "undefined" === typeof MutationObserver ||
        (!ut(MutationObserver) &&
          "[object MutationObserverConstructor]" !==
            MutationObserver.toString())
      )
        oe =
          "undefined" !== typeof setImmediate && ut(setImmediate)
            ? function () {
                setImmediate(ce);
              }
            : function () {
                setTimeout(ce, 0);
              };
      else {
        var de = 1,
          fe = new MutationObserver(ce),
          he = document.createTextNode(String(de));
        fe.observe(he, { characterData: !0 }),
          (oe = function () {
            (de = (de + 1) % 2), (he.data = String(de));
          }),
          (ae = !0);
      }
      function pe(t, e) {
        var n;
        if (
          (se.push(function () {
            if (t)
              try {
                t.call(e);
              } catch (ka) {
                ee(ka, e, "nextTick");
              }
            else n && n(e);
          }),
          le || ((le = !0), oe()),
          !t && "undefined" !== typeof Promise)
        )
          return new Promise(function (t) {
            n = t;
          });
      }
      var ge = new dt();
      function ve(t) {
        me(t, ge), ge.clear();
      }
      function me(t, e) {
        var n,
          r,
          i = Array.isArray(t);
        if (!((!i && !l(t)) || Object.isFrozen(t) || t instanceof yt)) {
          if (t.__ob__) {
            var o = t.__ob__.dep.id;
            if (e.has(o)) return;
            e.add(o);
          }
          if (i) {
            n = t.length;
            while (n--) me(t[n], e);
          } else {
            (r = Object.keys(t)), (n = r.length);
            while (n--) me(t[r[n]], e);
          }
        }
      }
      var be = _(function (t) {
        var e = "&" === t.charAt(0);
        t = e ? t.slice(1) : t;
        var n = "~" === t.charAt(0);
        t = n ? t.slice(1) : t;
        var r = "!" === t.charAt(0);
        return (
          (t = r ? t.slice(1) : t), { name: t, once: n, capture: r, passive: e }
        );
      });
      function ye(t, e) {
        function n() {
          var t = arguments,
            r = n.fns;
          if (!Array.isArray(r))
            return ne(r, null, arguments, e, "v-on handler");
          for (var i = r.slice(), o = 0; o < i.length; o++)
            ne(i[o], null, t, e, "v-on handler");
        }
        return (n.fns = t), n;
      }
      function xe(t, e, n, i, a, s) {
        var l, c, u, d;
        for (l in t)
          (c = t[l]),
            (u = e[l]),
            (d = be(l)),
            r(c) ||
              (r(u)
                ? (r(c.fns) && (c = t[l] = ye(c, s)),
                  o(d.once) && (c = t[l] = a(d.name, c, d.capture)),
                  n(d.name, c, d.capture, d.passive, d.params))
                : c !== u && ((u.fns = c), (t[l] = u)));
        for (l in e) r(t[l]) && ((d = be(l)), i(d.name, e[l], d.capture));
      }
      function _e(t, e, n) {
        var a;
        t instanceof yt && (t = t.data.hook || (t.data.hook = {}));
        var s = t[e];
        function l() {
          n.apply(this, arguments), b(a.fns, l);
        }
        r(s)
          ? (a = ye([l]))
          : i(s.fns) && o(s.merged)
          ? ((a = s), a.fns.push(l))
          : (a = ye([s, l])),
          (a.merged = !0),
          (t[e] = a);
      }
      function we(t, e, n) {
        var o = e.options.props;
        if (!r(o)) {
          var a = {},
            s = t.attrs,
            l = t.props;
          if (i(s) || i(l))
            for (var c in o) {
              var u = S(c);
              ke(a, l, c, u, !0) || ke(a, s, c, u, !1);
            }
          return a;
        }
      }
      function ke(t, e, n, r, o) {
        if (i(e)) {
          if (x(e, n)) return (t[n] = e[n]), o || delete e[n], !0;
          if (x(e, r)) return (t[n] = e[r]), o || delete e[r], !0;
        }
        return !1;
      }
      function Ce(t) {
        for (var e = 0; e < t.length; e++)
          if (Array.isArray(t[e])) return Array.prototype.concat.apply([], t);
        return t;
      }
      function Me(t) {
        return s(t) ? [wt(t)] : Array.isArray(t) ? Ae(t) : void 0;
      }
      function Se(t) {
        return i(t) && i(t.text) && a(t.isComment);
      }
      function Ae(t, e) {
        var n,
          a,
          l,
          c,
          u = [];
        for (n = 0; n < t.length; n++)
          (a = t[n]),
            r(a) ||
              "boolean" === typeof a ||
              ((l = u.length - 1),
              (c = u[l]),
              Array.isArray(a)
                ? a.length > 0 &&
                  ((a = Ae(a, (e || "") + "_" + n)),
                  Se(a[0]) &&
                    Se(c) &&
                    ((u[l] = wt(c.text + a[0].text)), a.shift()),
                  u.push.apply(u, a))
                : s(a)
                ? Se(c)
                  ? (u[l] = wt(c.text + a))
                  : "" !== a && u.push(wt(a))
                : Se(a) && Se(c)
                ? (u[l] = wt(c.text + a.text))
                : (o(t._isVList) &&
                    i(a.tag) &&
                    r(a.key) &&
                    i(e) &&
                    (a.key = "__vlist" + e + "_" + n + "__"),
                  u.push(a)));
        return u;
      }
      function Te(t) {
        var e = t.$options.provide;
        e && (t._provided = "function" === typeof e ? e.call(t) : e);
      }
      function Oe(t) {
        var e = Ee(t.$options.inject, t);
        e &&
          (Ot(!1),
          Object.keys(e).forEach(function (n) {
            It(t, n, e[n]);
          }),
          Ot(!0));
      }
      function Ee(t, e) {
        if (t) {
          for (
            var n = Object.create(null),
              r = ft ? Reflect.ownKeys(t) : Object.keys(t),
              i = 0;
            i < r.length;
            i++
          ) {
            var o = r[i];
            if ("__ob__" !== o) {
              var a = t[o].from,
                s = e;
              while (s) {
                if (s._provided && x(s._provided, a)) {
                  n[o] = s._provided[a];
                  break;
                }
                s = s.$parent;
              }
              if (!s)
                if ("default" in t[o]) {
                  var l = t[o].default;
                  n[o] = "function" === typeof l ? l.call(e) : l;
                } else 0;
            }
          }
          return n;
        }
      }
      function Pe(t, e) {
        if (!t || !t.length) return {};
        for (var n = {}, r = 0, i = t.length; r < i; r++) {
          var o = t[r],
            a = o.data;
          if (
            (a && a.attrs && a.attrs.slot && delete a.attrs.slot,
            (o.context !== e && o.fnContext !== e) || !a || null == a.slot)
          )
            (n.default || (n.default = [])).push(o);
          else {
            var s = a.slot,
              l = n[s] || (n[s] = []);
            "template" === o.tag
              ? l.push.apply(l, o.children || [])
              : l.push(o);
          }
        }
        for (var c in n) n[c].every(Le) && delete n[c];
        return n;
      }
      function Le(t) {
        return (t.isComment && !t.asyncFactory) || " " === t.text;
      }
      function De(t, e, r) {
        var i,
          o = Object.keys(e).length > 0,
          a = t ? !!t.$stable : !o,
          s = t && t.$key;
        if (t) {
          if (t._normalized) return t._normalized;
          if (a && r && r !== n && s === r.$key && !o && !r.$hasNormal)
            return r;
          for (var l in ((i = {}), t))
            t[l] && "$" !== l[0] && (i[l] = Ie(e, l, t[l]));
        } else i = {};
        for (var c in e) c in i || (i[c] = Ne(e, c));
        return (
          t && Object.isExtensible(t) && (t._normalized = i),
          U(i, "$stable", a),
          U(i, "$key", s),
          U(i, "$hasNormal", o),
          i
        );
      }
      function Ie(t, e, n) {
        var r = function () {
          var t = arguments.length ? n.apply(null, arguments) : n({});
          return (
            (t = t && "object" === typeof t && !Array.isArray(t) ? [t] : Me(t)),
            t && (0 === t.length || (1 === t.length && t[0].isComment))
              ? void 0
              : t
          );
        };
        return (
          n.proxy &&
            Object.defineProperty(t, e, {
              get: r,
              enumerable: !0,
              configurable: !0,
            }),
          r
        );
      }
      function Ne(t, e) {
        return function () {
          return t[e];
        };
      }
      function Fe(t, e) {
        var n, r, o, a, s;
        if (Array.isArray(t) || "string" === typeof t)
          for (n = new Array(t.length), r = 0, o = t.length; r < o; r++)
            n[r] = e(t[r], r);
        else if ("number" === typeof t)
          for (n = new Array(t), r = 0; r < t; r++) n[r] = e(r + 1, r);
        else if (l(t))
          if (ft && t[Symbol.iterator]) {
            n = [];
            var c = t[Symbol.iterator](),
              u = c.next();
            while (!u.done) n.push(e(u.value, n.length)), (u = c.next());
          } else
            for (
              a = Object.keys(t), n = new Array(a.length), r = 0, o = a.length;
              r < o;
              r++
            )
              (s = a[r]), (n[r] = e(t[s], s, r));
        return i(n) || (n = []), (n._isVList = !0), n;
      }
      function Re(t, e, n, r) {
        var i,
          o = this.$scopedSlots[t];
        o
          ? ((n = n || {}), r && (n = P(P({}, r), n)), (i = o(n) || e))
          : (i = this.$slots[t] || e);
        var a = n && n.slot;
        return a ? this.$createElement("template", { slot: a }, i) : i;
      }
      function je(t) {
        return Xt(this.$options, "filters", t, !0) || N;
      }
      function ze(t, e) {
        return Array.isArray(t) ? -1 === t.indexOf(e) : t !== e;
      }
      function He(t, e, n, r, i) {
        var o = V.keyCodes[e] || n;
        return i && r && !V.keyCodes[e]
          ? ze(i, r)
          : o
          ? ze(o, t)
          : r
          ? S(r) !== e
          : void 0;
      }
      function Be(t, e, n, r, i) {
        if (n)
          if (l(n)) {
            var o;
            Array.isArray(n) && (n = L(n));
            var a = function (a) {
              if ("class" === a || "style" === a || m(a)) o = t;
              else {
                var s = t.attrs && t.attrs.type;
                o =
                  r || V.mustUseProp(e, s, a)
                    ? t.domProps || (t.domProps = {})
                    : t.attrs || (t.attrs = {});
              }
              var l = k(a),
                c = S(a);
              if (!(l in o) && !(c in o) && ((o[a] = n[a]), i)) {
                var u = t.on || (t.on = {});
                u["update:" + a] = function (t) {
                  n[a] = t;
                };
              }
            };
            for (var s in n) a(s);
          } else;
        return t;
      }
      function Ve(t, e) {
        var n = this._staticTrees || (this._staticTrees = []),
          r = n[t];
        return (
          (r && !e) ||
            ((r = n[t] =
              this.$options.staticRenderFns[t].call(
                this._renderProxy,
                null,
                this
              )),
            We(r, "__static__" + t, !1)),
          r
        );
      }
      function $e(t, e, n) {
        return We(t, "__once__" + e + (n ? "_" + n : ""), !0), t;
      }
      function We(t, e, n) {
        if (Array.isArray(t))
          for (var r = 0; r < t.length; r++)
            t[r] && "string" !== typeof t[r] && Ue(t[r], e + "_" + r, n);
        else Ue(t, e, n);
      }
      function Ue(t, e, n) {
        (t.isStatic = !0), (t.key = e), (t.isOnce = n);
      }
      function qe(t, e) {
        if (e)
          if (u(e)) {
            var n = (t.on = t.on ? P({}, t.on) : {});
            for (var r in e) {
              var i = n[r],
                o = e[r];
              n[r] = i ? [].concat(i, o) : o;
            }
          } else;
        return t;
      }
      function Ye(t, e, n, r) {
        e = e || { $stable: !n };
        for (var i = 0; i < t.length; i++) {
          var o = t[i];
          Array.isArray(o)
            ? Ye(o, e, n)
            : o && (o.proxy && (o.fn.proxy = !0), (e[o.key] = o.fn));
        }
        return r && (e.$key = r), e;
      }
      function Ge(t, e) {
        for (var n = 0; n < e.length; n += 2) {
          var r = e[n];
          "string" === typeof r && r && (t[e[n]] = e[n + 1]);
        }
        return t;
      }
      function Xe(t, e) {
        return "string" === typeof t ? e + t : t;
      }
      function Ke(t) {
        (t._o = $e),
          (t._n = g),
          (t._s = p),
          (t._l = Fe),
          (t._t = Re),
          (t._q = F),
          (t._i = R),
          (t._m = Ve),
          (t._f = je),
          (t._k = He),
          (t._b = Be),
          (t._v = wt),
          (t._e = _t),
          (t._u = Ye),
          (t._g = qe),
          (t._d = Ge),
          (t._p = Xe);
      }
      function Ze(t, e, r, i, a) {
        var s,
          l = this,
          c = a.options;
        x(i, "_uid")
          ? ((s = Object.create(i)), (s._original = i))
          : ((s = i), (i = i._original));
        var u = o(c._compiled),
          d = !u;
        (this.data = t),
          (this.props = e),
          (this.children = r),
          (this.parent = i),
          (this.listeners = t.on || n),
          (this.injections = Ee(c.inject, i)),
          (this.slots = function () {
            return (
              l.$slots || De(t.scopedSlots, (l.$slots = Pe(r, i))), l.$slots
            );
          }),
          Object.defineProperty(this, "scopedSlots", {
            enumerable: !0,
            get: function () {
              return De(t.scopedSlots, this.slots());
            },
          }),
          u &&
            ((this.$options = c),
            (this.$slots = this.slots()),
            (this.$scopedSlots = De(t.scopedSlots, this.$slots))),
          c._scopeId
            ? (this._c = function (t, e, n, r) {
                var o = dn(s, t, e, n, r, d);
                return (
                  o &&
                    !Array.isArray(o) &&
                    ((o.fnScopeId = c._scopeId), (o.fnContext = i)),
                  o
                );
              })
            : (this._c = function (t, e, n, r) {
                return dn(s, t, e, n, r, d);
              });
      }
      function Je(t, e, r, o, a) {
        var s = t.options,
          l = {},
          c = s.props;
        if (i(c)) for (var u in c) l[u] = Kt(u, c, e || n);
        else i(r.attrs) && tn(l, r.attrs), i(r.props) && tn(l, r.props);
        var d = new Ze(r, l, a, o, t),
          f = s.render.call(null, d._c, d);
        if (f instanceof yt) return Qe(f, r, d.parent, s, d);
        if (Array.isArray(f)) {
          for (
            var h = Me(f) || [], p = new Array(h.length), g = 0;
            g < h.length;
            g++
          )
            p[g] = Qe(h[g], r, d.parent, s, d);
          return p;
        }
      }
      function Qe(t, e, n, r, i) {
        var o = kt(t);
        return (
          (o.fnContext = n),
          (o.fnOptions = r),
          e.slot && ((o.data || (o.data = {})).slot = e.slot),
          o
        );
      }
      function tn(t, e) {
        for (var n in e) t[k(n)] = e[n];
      }
      Ke(Ze.prototype);
      var en = {
          init: function (t, e) {
            if (
              t.componentInstance &&
              !t.componentInstance._isDestroyed &&
              t.data.keepAlive
            ) {
              var n = t;
              en.prepatch(n, n);
            } else {
              var r = (t.componentInstance = on(t, En));
              r.$mount(e ? t.elm : void 0, e);
            }
          },
          prepatch: function (t, e) {
            var n = e.componentOptions,
              r = (e.componentInstance = t.componentInstance);
            Nn(r, n.propsData, n.listeners, e, n.children);
          },
          insert: function (t) {
            var e = t.context,
              n = t.componentInstance;
            n._isMounted || ((n._isMounted = !0), zn(n, "mounted")),
              t.data.keepAlive && (e._isMounted ? Jn(n) : Rn(n, !0));
          },
          destroy: function (t) {
            var e = t.componentInstance;
            e._isDestroyed || (t.data.keepAlive ? jn(e, !0) : e.$destroy());
          },
        },
        nn = Object.keys(en);
      function rn(t, e, n, a, s) {
        if (!r(t)) {
          var c = n.$options._base;
          if ((l(t) && (t = c.extend(t)), "function" === typeof t)) {
            var u;
            if (r(t.cid) && ((u = t), (t = _n(u, c)), void 0 === t))
              return xn(u, e, n, a, s);
            (e = e || {}), _r(t), i(e.model) && ln(t.options, e);
            var d = we(e, t, s);
            if (o(t.options.functional)) return Je(t, d, e, n, a);
            var f = e.on;
            if (((e.on = e.nativeOn), o(t.options.abstract))) {
              var h = e.slot;
              (e = {}), h && (e.slot = h);
            }
            an(e);
            var p = t.options.name || s,
              g = new yt(
                "vue-component-" + t.cid + (p ? "-" + p : ""),
                e,
                void 0,
                void 0,
                void 0,
                n,
                { Ctor: t, propsData: d, listeners: f, tag: s, children: a },
                u
              );
            return g;
          }
        }
      }
      function on(t, e) {
        var n = { _isComponent: !0, _parentVnode: t, parent: e },
          r = t.data.inlineTemplate;
        return (
          i(r) &&
            ((n.render = r.render), (n.staticRenderFns = r.staticRenderFns)),
          new t.componentOptions.Ctor(n)
        );
      }
      function an(t) {
        for (var e = t.hook || (t.hook = {}), n = 0; n < nn.length; n++) {
          var r = nn[n],
            i = e[r],
            o = en[r];
          i === o || (i && i._merged) || (e[r] = i ? sn(o, i) : o);
        }
      }
      function sn(t, e) {
        var n = function (n, r) {
          t(n, r), e(n, r);
        };
        return (n._merged = !0), n;
      }
      function ln(t, e) {
        var n = (t.model && t.model.prop) || "value",
          r = (t.model && t.model.event) || "input";
        (e.attrs || (e.attrs = {}))[n] = e.model.value;
        var o = e.on || (e.on = {}),
          a = o[r],
          s = e.model.callback;
        i(a)
          ? (Array.isArray(a) ? -1 === a.indexOf(s) : a !== s) &&
            (o[r] = [s].concat(a))
          : (o[r] = s);
      }
      var cn = 1,
        un = 2;
      function dn(t, e, n, r, i, a) {
        return (
          (Array.isArray(n) || s(n)) && ((i = r), (r = n), (n = void 0)),
          o(a) && (i = un),
          fn(t, e, n, r, i)
        );
      }
      function fn(t, e, n, r, o) {
        if (i(n) && i(n.__ob__)) return _t();
        if ((i(n) && i(n.is) && (e = n.is), !e)) return _t();
        var a, s, l;
        (Array.isArray(r) &&
          "function" === typeof r[0] &&
          ((n = n || {}), (n.scopedSlots = { default: r[0] }), (r.length = 0)),
        o === un ? (r = Me(r)) : o === cn && (r = Ce(r)),
        "string" === typeof e)
          ? ((s = (t.$vnode && t.$vnode.ns) || V.getTagNamespace(e)),
            (a = V.isReservedTag(e)
              ? new yt(V.parsePlatformTagName(e), n, r, void 0, void 0, t)
              : (n && n.pre) || !i((l = Xt(t.$options, "components", e)))
              ? new yt(e, n, r, void 0, void 0, t)
              : rn(l, n, t, r, e)))
          : (a = rn(e, n, t, r));
        return Array.isArray(a)
          ? a
          : i(a)
          ? (i(s) && hn(a, s), i(n) && pn(n), a)
          : _t();
      }
      function hn(t, e, n) {
        if (
          ((t.ns = e),
          "foreignObject" === t.tag && ((e = void 0), (n = !0)),
          i(t.children))
        )
          for (var a = 0, s = t.children.length; a < s; a++) {
            var l = t.children[a];
            i(l.tag) && (r(l.ns) || (o(n) && "svg" !== l.tag)) && hn(l, e, n);
          }
      }
      function pn(t) {
        l(t.style) && ve(t.style), l(t.class) && ve(t.class);
      }
      function gn(t) {
        (t._vnode = null), (t._staticTrees = null);
        var e = t.$options,
          r = (t.$vnode = e._parentVnode),
          i = r && r.context;
        (t.$slots = Pe(e._renderChildren, i)),
          (t.$scopedSlots = n),
          (t._c = function (e, n, r, i) {
            return dn(t, e, n, r, i, !1);
          }),
          (t.$createElement = function (e, n, r, i) {
            return dn(t, e, n, r, i, !0);
          });
        var o = r && r.data;
        It(t, "$attrs", (o && o.attrs) || n, null, !0),
          It(t, "$listeners", e._parentListeners || n, null, !0);
      }
      var vn,
        mn = null;
      function bn(t) {
        Ke(t.prototype),
          (t.prototype.$nextTick = function (t) {
            return pe(t, this);
          }),
          (t.prototype._render = function () {
            var t,
              e = this,
              n = e.$options,
              r = n.render,
              i = n._parentVnode;
            i &&
              (e.$scopedSlots = De(
                i.data.scopedSlots,
                e.$slots,
                e.$scopedSlots
              )),
              (e.$vnode = i);
            try {
              (mn = e), (t = r.call(e._renderProxy, e.$createElement));
            } catch (ka) {
              ee(ka, e, "render"), (t = e._vnode);
            } finally {
              mn = null;
            }
            return (
              Array.isArray(t) && 1 === t.length && (t = t[0]),
              t instanceof yt || (t = _t()),
              (t.parent = i),
              t
            );
          });
      }
      function yn(t, e) {
        return (
          (t.__esModule || (ft && "Module" === t[Symbol.toStringTag])) &&
            (t = t.default),
          l(t) ? e.extend(t) : t
        );
      }
      function xn(t, e, n, r, i) {
        var o = _t();
        return (
          (o.asyncFactory = t),
          (o.asyncMeta = { data: e, context: n, children: r, tag: i }),
          o
        );
      }
      function _n(t, e) {
        if (o(t.error) && i(t.errorComp)) return t.errorComp;
        if (i(t.resolved)) return t.resolved;
        var n = mn;
        if (
          (n && i(t.owners) && -1 === t.owners.indexOf(n) && t.owners.push(n),
          o(t.loading) && i(t.loadingComp))
        )
          return t.loadingComp;
        if (n && !i(t.owners)) {
          var a = (t.owners = [n]),
            s = !0,
            c = null,
            u = null;
          n.$on("hook:destroyed", function () {
            return b(a, n);
          });
          var d = function (t) {
              for (var e = 0, n = a.length; e < n; e++) a[e].$forceUpdate();
              t &&
                ((a.length = 0),
                null !== c && (clearTimeout(c), (c = null)),
                null !== u && (clearTimeout(u), (u = null)));
            },
            f = j(function (n) {
              (t.resolved = yn(n, e)), s ? (a.length = 0) : d(!0);
            }),
            p = j(function (e) {
              i(t.errorComp) && ((t.error = !0), d(!0));
            }),
            g = t(f, p);
          return (
            l(g) &&
              (h(g)
                ? r(t.resolved) && g.then(f, p)
                : h(g.component) &&
                  (g.component.then(f, p),
                  i(g.error) && (t.errorComp = yn(g.error, e)),
                  i(g.loading) &&
                    ((t.loadingComp = yn(g.loading, e)),
                    0 === g.delay
                      ? (t.loading = !0)
                      : (c = setTimeout(function () {
                          (c = null),
                            r(t.resolved) &&
                              r(t.error) &&
                              ((t.loading = !0), d(!1));
                        }, g.delay || 200))),
                  i(g.timeout) &&
                    (u = setTimeout(function () {
                      (u = null), r(t.resolved) && p(null);
                    }, g.timeout)))),
            (s = !1),
            t.loading ? t.loadingComp : t.resolved
          );
        }
      }
      function wn(t) {
        return t.isComment && t.asyncFactory;
      }
      function kn(t) {
        if (Array.isArray(t))
          for (var e = 0; e < t.length; e++) {
            var n = t[e];
            if (i(n) && (i(n.componentOptions) || wn(n))) return n;
          }
      }
      function Cn(t) {
        (t._events = Object.create(null)), (t._hasHookEvent = !1);
        var e = t.$options._parentListeners;
        e && Tn(t, e);
      }
      function Mn(t, e) {
        vn.$on(t, e);
      }
      function Sn(t, e) {
        vn.$off(t, e);
      }
      function An(t, e) {
        var n = vn;
        return function r() {
          var i = e.apply(null, arguments);
          null !== i && n.$off(t, r);
        };
      }
      function Tn(t, e, n) {
        (vn = t), xe(e, n || {}, Mn, Sn, An, t), (vn = void 0);
      }
      function On(t) {
        var e = /^hook:/;
        (t.prototype.$on = function (t, n) {
          var r = this;
          if (Array.isArray(t))
            for (var i = 0, o = t.length; i < o; i++) r.$on(t[i], n);
          else
            (r._events[t] || (r._events[t] = [])).push(n),
              e.test(t) && (r._hasHookEvent = !0);
          return r;
        }),
          (t.prototype.$once = function (t, e) {
            var n = this;
            function r() {
              n.$off(t, r), e.apply(n, arguments);
            }
            return (r.fn = e), n.$on(t, r), n;
          }),
          (t.prototype.$off = function (t, e) {
            var n = this;
            if (!arguments.length) return (n._events = Object.create(null)), n;
            if (Array.isArray(t)) {
              for (var r = 0, i = t.length; r < i; r++) n.$off(t[r], e);
              return n;
            }
            var o,
              a = n._events[t];
            if (!a) return n;
            if (!e) return (n._events[t] = null), n;
            var s = a.length;
            while (s--)
              if (((o = a[s]), o === e || o.fn === e)) {
                a.splice(s, 1);
                break;
              }
            return n;
          }),
          (t.prototype.$emit = function (t) {
            var e = this,
              n = e._events[t];
            if (n) {
              n = n.length > 1 ? E(n) : n;
              for (
                var r = E(arguments, 1),
                  i = 'event handler for "' + t + '"',
                  o = 0,
                  a = n.length;
                o < a;
                o++
              )
                ne(n[o], e, r, e, i);
            }
            return e;
          });
      }
      var En = null;
      function Pn(t) {
        var e = En;
        return (
          (En = t),
          function () {
            En = e;
          }
        );
      }
      function Ln(t) {
        var e = t.$options,
          n = e.parent;
        if (n && !e.abstract) {
          while (n.$options.abstract && n.$parent) n = n.$parent;
          n.$children.push(t);
        }
        (t.$parent = n),
          (t.$root = n ? n.$root : t),
          (t.$children = []),
          (t.$refs = {}),
          (t._watcher = null),
          (t._inactive = null),
          (t._directInactive = !1),
          (t._isMounted = !1),
          (t._isDestroyed = !1),
          (t._isBeingDestroyed = !1);
      }
      function Dn(t) {
        (t.prototype._update = function (t, e) {
          var n = this,
            r = n.$el,
            i = n._vnode,
            o = Pn(n);
          (n._vnode = t),
            (n.$el = i ? n.__patch__(i, t) : n.__patch__(n.$el, t, e, !1)),
            o(),
            r && (r.__vue__ = null),
            n.$el && (n.$el.__vue__ = n),
            n.$vnode &&
              n.$parent &&
              n.$vnode === n.$parent._vnode &&
              (n.$parent.$el = n.$el);
        }),
          (t.prototype.$forceUpdate = function () {
            var t = this;
            t._watcher && t._watcher.update();
          }),
          (t.prototype.$destroy = function () {
            var t = this;
            if (!t._isBeingDestroyed) {
              zn(t, "beforeDestroy"), (t._isBeingDestroyed = !0);
              var e = t.$parent;
              !e ||
                e._isBeingDestroyed ||
                t.$options.abstract ||
                b(e.$children, t),
                t._watcher && t._watcher.teardown();
              var n = t._watchers.length;
              while (n--) t._watchers[n].teardown();
              t._data.__ob__ && t._data.__ob__.vmCount--,
                (t._isDestroyed = !0),
                t.__patch__(t._vnode, null),
                zn(t, "destroyed"),
                t.$off(),
                t.$el && (t.$el.__vue__ = null),
                t.$vnode && (t.$vnode.parent = null);
            }
          });
      }
      function In(t, e, n) {
        var r;
        return (
          (t.$el = e),
          t.$options.render || (t.$options.render = _t),
          zn(t, "beforeMount"),
          (r = function () {
            t._update(t._render(), n);
          }),
          new nr(
            t,
            r,
            D,
            {
              before: function () {
                t._isMounted && !t._isDestroyed && zn(t, "beforeUpdate");
              },
            },
            !0
          ),
          (n = !1),
          null == t.$vnode && ((t._isMounted = !0), zn(t, "mounted")),
          t
        );
      }
      function Nn(t, e, r, i, o) {
        var a = i.data.scopedSlots,
          s = t.$scopedSlots,
          l = !!(
            (a && !a.$stable) ||
            (s !== n && !s.$stable) ||
            (a && t.$scopedSlots.$key !== a.$key)
          ),
          c = !!(o || t.$options._renderChildren || l);
        if (
          ((t.$options._parentVnode = i),
          (t.$vnode = i),
          t._vnode && (t._vnode.parent = i),
          (t.$options._renderChildren = o),
          (t.$attrs = i.data.attrs || n),
          (t.$listeners = r || n),
          e && t.$options.props)
        ) {
          Ot(!1);
          for (
            var u = t._props, d = t.$options._propKeys || [], f = 0;
            f < d.length;
            f++
          ) {
            var h = d[f],
              p = t.$options.props;
            u[h] = Kt(h, p, e, t);
          }
          Ot(!0), (t.$options.propsData = e);
        }
        r = r || n;
        var g = t.$options._parentListeners;
        (t.$options._parentListeners = r),
          Tn(t, r, g),
          c && ((t.$slots = Pe(o, i.context)), t.$forceUpdate());
      }
      function Fn(t) {
        while (t && (t = t.$parent)) if (t._inactive) return !0;
        return !1;
      }
      function Rn(t, e) {
        if (e) {
          if (((t._directInactive = !1), Fn(t))) return;
        } else if (t._directInactive) return;
        if (t._inactive || null === t._inactive) {
          t._inactive = !1;
          for (var n = 0; n < t.$children.length; n++) Rn(t.$children[n]);
          zn(t, "activated");
        }
      }
      function jn(t, e) {
        if ((!e || ((t._directInactive = !0), !Fn(t))) && !t._inactive) {
          t._inactive = !0;
          for (var n = 0; n < t.$children.length; n++) jn(t.$children[n]);
          zn(t, "deactivated");
        }
      }
      function zn(t, e) {
        mt();
        var n = t.$options[e],
          r = e + " hook";
        if (n)
          for (var i = 0, o = n.length; i < o; i++) ne(n[i], t, null, t, r);
        t._hasHookEvent && t.$emit("hook:" + e), bt();
      }
      var Hn = [],
        Bn = [],
        Vn = {},
        $n = !1,
        Wn = !1,
        Un = 0;
      function qn() {
        (Un = Hn.length = Bn.length = 0), (Vn = {}), ($n = Wn = !1);
      }
      var Yn = 0,
        Gn = Date.now;
      if (K && !tt) {
        var Xn = window.performance;
        Xn &&
          "function" === typeof Xn.now &&
          Gn() > document.createEvent("Event").timeStamp &&
          (Gn = function () {
            return Xn.now();
          });
      }
      function Kn() {
        var t, e;
        for (
          Yn = Gn(),
            Wn = !0,
            Hn.sort(function (t, e) {
              return t.id - e.id;
            }),
            Un = 0;
          Un < Hn.length;
          Un++
        )
          (t = Hn[Un]),
            t.before && t.before(),
            (e = t.id),
            (Vn[e] = null),
            t.run();
        var n = Bn.slice(),
          r = Hn.slice();
        qn(), Qn(n), Zn(r), ct && V.devtools && ct.emit("flush");
      }
      function Zn(t) {
        var e = t.length;
        while (e--) {
          var n = t[e],
            r = n.vm;
          r._watcher === n &&
            r._isMounted &&
            !r._isDestroyed &&
            zn(r, "updated");
        }
      }
      function Jn(t) {
        (t._inactive = !1), Bn.push(t);
      }
      function Qn(t) {
        for (var e = 0; e < t.length; e++) (t[e]._inactive = !0), Rn(t[e], !0);
      }
      function tr(t) {
        var e = t.id;
        if (null == Vn[e]) {
          if (((Vn[e] = !0), Wn)) {
            var n = Hn.length - 1;
            while (n > Un && Hn[n].id > t.id) n--;
            Hn.splice(n + 1, 0, t);
          } else Hn.push(t);
          $n || (($n = !0), pe(Kn));
        }
      }
      var er = 0,
        nr = function (t, e, n, r, i) {
          (this.vm = t),
            i && (t._watcher = this),
            t._watchers.push(this),
            r
              ? ((this.deep = !!r.deep),
                (this.user = !!r.user),
                (this.lazy = !!r.lazy),
                (this.sync = !!r.sync),
                (this.before = r.before))
              : (this.deep = this.user = this.lazy = this.sync = !1),
            (this.cb = n),
            (this.id = ++er),
            (this.active = !0),
            (this.dirty = this.lazy),
            (this.deps = []),
            (this.newDeps = []),
            (this.depIds = new dt()),
            (this.newDepIds = new dt()),
            (this.expression = ""),
            "function" === typeof e
              ? (this.getter = e)
              : ((this.getter = Y(e)), this.getter || (this.getter = D)),
            (this.value = this.lazy ? void 0 : this.get());
        };
      (nr.prototype.get = function () {
        var t;
        mt(this);
        var e = this.vm;
        try {
          t = this.getter.call(e, e);
        } catch (ka) {
          if (!this.user) throw ka;
          ee(ka, e, 'getter for watcher "' + this.expression + '"');
        } finally {
          this.deep && ve(t), bt(), this.cleanupDeps();
        }
        return t;
      }),
        (nr.prototype.addDep = function (t) {
          var e = t.id;
          this.newDepIds.has(e) ||
            (this.newDepIds.add(e),
            this.newDeps.push(t),
            this.depIds.has(e) || t.addSub(this));
        }),
        (nr.prototype.cleanupDeps = function () {
          var t = this.deps.length;
          while (t--) {
            var e = this.deps[t];
            this.newDepIds.has(e.id) || e.removeSub(this);
          }
          var n = this.depIds;
          (this.depIds = this.newDepIds),
            (this.newDepIds = n),
            this.newDepIds.clear(),
            (n = this.deps),
            (this.deps = this.newDeps),
            (this.newDeps = n),
            (this.newDeps.length = 0);
        }),
        (nr.prototype.update = function () {
          this.lazy ? (this.dirty = !0) : this.sync ? this.run() : tr(this);
        }),
        (nr.prototype.run = function () {
          if (this.active) {
            var t = this.get();
            if (t !== this.value || l(t) || this.deep) {
              var e = this.value;
              if (((this.value = t), this.user))
                try {
                  this.cb.call(this.vm, t, e);
                } catch (ka) {
                  ee(
                    ka,
                    this.vm,
                    'callback for watcher "' + this.expression + '"'
                  );
                }
              else this.cb.call(this.vm, t, e);
            }
          }
        }),
        (nr.prototype.evaluate = function () {
          (this.value = this.get()), (this.dirty = !1);
        }),
        (nr.prototype.depend = function () {
          var t = this.deps.length;
          while (t--) this.deps[t].depend();
        }),
        (nr.prototype.teardown = function () {
          if (this.active) {
            this.vm._isBeingDestroyed || b(this.vm._watchers, this);
            var t = this.deps.length;
            while (t--) this.deps[t].removeSub(this);
            this.active = !1;
          }
        });
      var rr = { enumerable: !0, configurable: !0, get: D, set: D };
      function ir(t, e, n) {
        (rr.get = function () {
          return this[e][n];
        }),
          (rr.set = function (t) {
            this[e][n] = t;
          }),
          Object.defineProperty(t, n, rr);
      }
      function or(t) {
        t._watchers = [];
        var e = t.$options;
        e.props && ar(t, e.props),
          e.methods && pr(t, e.methods),
          e.data ? sr(t) : Dt((t._data = {}), !0),
          e.computed && ur(t, e.computed),
          e.watch && e.watch !== ot && gr(t, e.watch);
      }
      function ar(t, e) {
        var n = t.$options.propsData || {},
          r = (t._props = {}),
          i = (t.$options._propKeys = []),
          o = !t.$parent;
        o || Ot(!1);
        var a = function (o) {
          i.push(o);
          var a = Kt(o, e, n, t);
          It(r, o, a), o in t || ir(t, "_props", o);
        };
        for (var s in e) a(s);
        Ot(!0);
      }
      function sr(t) {
        var e = t.$options.data;
        (e = t._data = "function" === typeof e ? lr(e, t) : e || {}),
          u(e) || (e = {});
        var n = Object.keys(e),
          r = t.$options.props,
          i = (t.$options.methods, n.length);
        while (i--) {
          var o = n[i];
          0, (r && x(r, o)) || W(o) || ir(t, "_data", o);
        }
        Dt(e, !0);
      }
      function lr(t, e) {
        mt();
        try {
          return t.call(e, e);
        } catch (ka) {
          return ee(ka, e, "data()"), {};
        } finally {
          bt();
        }
      }
      var cr = { lazy: !0 };
      function ur(t, e) {
        var n = (t._computedWatchers = Object.create(null)),
          r = lt();
        for (var i in e) {
          var o = e[i],
            a = "function" === typeof o ? o : o.get;
          0, r || (n[i] = new nr(t, a || D, D, cr)), i in t || dr(t, i, o);
        }
      }
      function dr(t, e, n) {
        var r = !lt();
        "function" === typeof n
          ? ((rr.get = r ? fr(e) : hr(n)), (rr.set = D))
          : ((rr.get = n.get ? (r && !1 !== n.cache ? fr(e) : hr(n.get)) : D),
            (rr.set = n.set || D)),
          Object.defineProperty(t, e, rr);
      }
      function fr(t) {
        return function () {
          var e = this._computedWatchers && this._computedWatchers[t];
          if (e)
            return e.dirty && e.evaluate(), gt.target && e.depend(), e.value;
        };
      }
      function hr(t) {
        return function () {
          return t.call(this, this);
        };
      }
      function pr(t, e) {
        t.$options.props;
        for (var n in e) t[n] = "function" !== typeof e[n] ? D : O(e[n], t);
      }
      function gr(t, e) {
        for (var n in e) {
          var r = e[n];
          if (Array.isArray(r))
            for (var i = 0; i < r.length; i++) vr(t, n, r[i]);
          else vr(t, n, r);
        }
      }
      function vr(t, e, n, r) {
        return (
          u(n) && ((r = n), (n = n.handler)),
          "string" === typeof n && (n = t[n]),
          t.$watch(e, n, r)
        );
      }
      function mr(t) {
        var e = {
            get: function () {
              return this._data;
            },
          },
          n = {
            get: function () {
              return this._props;
            },
          };
        Object.defineProperty(t.prototype, "$data", e),
          Object.defineProperty(t.prototype, "$props", n),
          (t.prototype.$set = Nt),
          (t.prototype.$delete = Ft),
          (t.prototype.$watch = function (t, e, n) {
            var r = this;
            if (u(e)) return vr(r, t, e, n);
            (n = n || {}), (n.user = !0);
            var i = new nr(r, t, e, n);
            if (n.immediate)
              try {
                e.call(r, i.value);
              } catch (o) {
                ee(
                  o,
                  r,
                  'callback for immediate watcher "' + i.expression + '"'
                );
              }
            return function () {
              i.teardown();
            };
          });
      }
      var br = 0;
      function yr(t) {
        t.prototype._init = function (t) {
          var e = this;
          (e._uid = br++),
            (e._isVue = !0),
            t && t._isComponent
              ? xr(e, t)
              : (e.$options = Gt(_r(e.constructor), t || {}, e)),
            (e._renderProxy = e),
            (e._self = e),
            Ln(e),
            Cn(e),
            gn(e),
            zn(e, "beforeCreate"),
            Oe(e),
            or(e),
            Te(e),
            zn(e, "created"),
            e.$options.el && e.$mount(e.$options.el);
        };
      }
      function xr(t, e) {
        var n = (t.$options = Object.create(t.constructor.options)),
          r = e._parentVnode;
        (n.parent = e.parent), (n._parentVnode = r);
        var i = r.componentOptions;
        (n.propsData = i.propsData),
          (n._parentListeners = i.listeners),
          (n._renderChildren = i.children),
          (n._componentTag = i.tag),
          e.render &&
            ((n.render = e.render), (n.staticRenderFns = e.staticRenderFns));
      }
      function _r(t) {
        var e = t.options;
        if (t.super) {
          var n = _r(t.super),
            r = t.superOptions;
          if (n !== r) {
            t.superOptions = n;
            var i = wr(t);
            i && P(t.extendOptions, i),
              (e = t.options = Gt(n, t.extendOptions)),
              e.name && (e.components[e.name] = t);
          }
        }
        return e;
      }
      function wr(t) {
        var e,
          n = t.options,
          r = t.sealedOptions;
        for (var i in n) n[i] !== r[i] && (e || (e = {}), (e[i] = n[i]));
        return e;
      }
      function kr(t) {
        this._init(t);
      }
      function Cr(t) {
        t.use = function (t) {
          var e = this._installedPlugins || (this._installedPlugins = []);
          if (e.indexOf(t) > -1) return this;
          var n = E(arguments, 1);
          return (
            n.unshift(this),
            "function" === typeof t.install
              ? t.install.apply(t, n)
              : "function" === typeof t && t.apply(null, n),
            e.push(t),
            this
          );
        };
      }
      function Mr(t) {
        t.mixin = function (t) {
          return (this.options = Gt(this.options, t)), this;
        };
      }
      function Sr(t) {
        t.cid = 0;
        var e = 1;
        t.extend = function (t) {
          t = t || {};
          var n = this,
            r = n.cid,
            i = t._Ctor || (t._Ctor = {});
          if (i[r]) return i[r];
          var o = t.name || n.options.name;
          var a = function (t) {
            this._init(t);
          };
          return (
            (a.prototype = Object.create(n.prototype)),
            (a.prototype.constructor = a),
            (a.cid = e++),
            (a.options = Gt(n.options, t)),
            (a["super"] = n),
            a.options.props && Ar(a),
            a.options.computed && Tr(a),
            (a.extend = n.extend),
            (a.mixin = n.mixin),
            (a.use = n.use),
            H.forEach(function (t) {
              a[t] = n[t];
            }),
            o && (a.options.components[o] = a),
            (a.superOptions = n.options),
            (a.extendOptions = t),
            (a.sealedOptions = P({}, a.options)),
            (i[r] = a),
            a
          );
        };
      }
      function Ar(t) {
        var e = t.options.props;
        for (var n in e) ir(t.prototype, "_props", n);
      }
      function Tr(t) {
        var e = t.options.computed;
        for (var n in e) dr(t.prototype, n, e[n]);
      }
      function Or(t) {
        H.forEach(function (e) {
          t[e] = function (t, n) {
            return n
              ? ("component" === e &&
                  u(n) &&
                  ((n.name = n.name || t), (n = this.options._base.extend(n))),
                "directive" === e &&
                  "function" === typeof n &&
                  (n = { bind: n, update: n }),
                (this.options[e + "s"][t] = n),
                n)
              : this.options[e + "s"][t];
          };
        });
      }
      function Er(t) {
        return t && (t.Ctor.options.name || t.tag);
      }
      function Pr(t, e) {
        return Array.isArray(t)
          ? t.indexOf(e) > -1
          : "string" === typeof t
          ? t.split(",").indexOf(e) > -1
          : !!d(t) && t.test(e);
      }
      function Lr(t, e) {
        var n = t.cache,
          r = t.keys,
          i = t._vnode;
        for (var o in n) {
          var a = n[o];
          if (a) {
            var s = Er(a.componentOptions);
            s && !e(s) && Dr(n, o, r, i);
          }
        }
      }
      function Dr(t, e, n, r) {
        var i = t[e];
        !i || (r && i.tag === r.tag) || i.componentInstance.$destroy(),
          (t[e] = null),
          b(n, e);
      }
      yr(kr), mr(kr), On(kr), Dn(kr), bn(kr);
      var Ir = [String, RegExp, Array],
        Nr = {
          name: "keep-alive",
          abstract: !0,
          props: { include: Ir, exclude: Ir, max: [String, Number] },
          created: function () {
            (this.cache = Object.create(null)), (this.keys = []);
          },
          destroyed: function () {
            for (var t in this.cache) Dr(this.cache, t, this.keys);
          },
          mounted: function () {
            var t = this;
            this.$watch("include", function (e) {
              Lr(t, function (t) {
                return Pr(e, t);
              });
            }),
              this.$watch("exclude", function (e) {
                Lr(t, function (t) {
                  return !Pr(e, t);
                });
              });
          },
          render: function () {
            var t = this.$slots.default,
              e = kn(t),
              n = e && e.componentOptions;
            if (n) {
              var r = Er(n),
                i = this,
                o = i.include,
                a = i.exclude;
              if ((o && (!r || !Pr(o, r))) || (a && r && Pr(a, r))) return e;
              var s = this,
                l = s.cache,
                c = s.keys,
                u =
                  null == e.key
                    ? n.Ctor.cid + (n.tag ? "::" + n.tag : "")
                    : e.key;
              l[u]
                ? ((e.componentInstance = l[u].componentInstance),
                  b(c, u),
                  c.push(u))
                : ((l[u] = e),
                  c.push(u),
                  this.max &&
                    c.length > parseInt(this.max) &&
                    Dr(l, c[0], c, this._vnode)),
                (e.data.keepAlive = !0);
            }
            return e || (t && t[0]);
          },
        },
        Fr = { KeepAlive: Nr };
      function Rr(t) {
        var e = {
          get: function () {
            return V;
          },
        };
        Object.defineProperty(t, "config", e),
          (t.util = {
            warn: ht,
            extend: P,
            mergeOptions: Gt,
            defineReactive: It,
          }),
          (t.set = Nt),
          (t.delete = Ft),
          (t.nextTick = pe),
          (t.observable = function (t) {
            return Dt(t), t;
          }),
          (t.options = Object.create(null)),
          H.forEach(function (e) {
            t.options[e + "s"] = Object.create(null);
          }),
          (t.options._base = t),
          P(t.options.components, Fr),
          Cr(t),
          Mr(t),
          Sr(t),
          Or(t);
      }
      Rr(kr),
        Object.defineProperty(kr.prototype, "$isServer", { get: lt }),
        Object.defineProperty(kr.prototype, "$ssrContext", {
          get: function () {
            return this.$vnode && this.$vnode.ssrContext;
          },
        }),
        Object.defineProperty(kr, "FunctionalRenderContext", { value: Ze }),
        (kr.version = "2.6.12");
      var jr = v("style,class"),
        zr = v("input,textarea,option,select,progress"),
        Hr = function (t, e, n) {
          return (
            ("value" === n && zr(t) && "button" !== e) ||
            ("selected" === n && "option" === t) ||
            ("checked" === n && "input" === t) ||
            ("muted" === n && "video" === t)
          );
        },
        Br = v("contenteditable,draggable,spellcheck"),
        Vr = v("events,caret,typing,plaintext-only"),
        $r = function (t, e) {
          return Gr(e) || "false" === e
            ? "false"
            : "contenteditable" === t && Vr(e)
            ? e
            : "true";
        },
        Wr = v(
          "allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,translate,truespeed,typemustmatch,visible"
        ),
        Ur = "http://www.w3.org/1999/xlink",
        qr = function (t) {
          return ":" === t.charAt(5) && "xlink" === t.slice(0, 5);
        },
        Yr = function (t) {
          return qr(t) ? t.slice(6, t.length) : "";
        },
        Gr = function (t) {
          return null == t || !1 === t;
        };
      function Xr(t) {
        var e = t.data,
          n = t,
          r = t;
        while (i(r.componentInstance))
          (r = r.componentInstance._vnode), r && r.data && (e = Kr(r.data, e));
        while (i((n = n.parent))) n && n.data && (e = Kr(e, n.data));
        return Zr(e.staticClass, e.class);
      }
      function Kr(t, e) {
        return {
          staticClass: Jr(t.staticClass, e.staticClass),
          class: i(t.class) ? [t.class, e.class] : e.class,
        };
      }
      function Zr(t, e) {
        return i(t) || i(e) ? Jr(t, Qr(e)) : "";
      }
      function Jr(t, e) {
        return t ? (e ? t + " " + e : t) : e || "";
      }
      function Qr(t) {
        return Array.isArray(t)
          ? ti(t)
          : l(t)
          ? ei(t)
          : "string" === typeof t
          ? t
          : "";
      }
      function ti(t) {
        for (var e, n = "", r = 0, o = t.length; r < o; r++)
          i((e = Qr(t[r]))) && "" !== e && (n && (n += " "), (n += e));
        return n;
      }
      function ei(t) {
        var e = "";
        for (var n in t) t[n] && (e && (e += " "), (e += n));
        return e;
      }
      var ni = {
          svg: "http://www.w3.org/2000/svg",
          math: "http://www.w3.org/1998/Math/MathML",
        },
        ri = v(
          "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template,blockquote,iframe,tfoot"
        ),
        ii = v(
          "svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view",
          !0
        ),
        oi = function (t) {
          return ri(t) || ii(t);
        };
      function ai(t) {
        return ii(t) ? "svg" : "math" === t ? "math" : void 0;
      }
      var si = Object.create(null);
      function li(t) {
        if (!K) return !0;
        if (oi(t)) return !1;
        if (((t = t.toLowerCase()), null != si[t])) return si[t];
        var e = document.createElement(t);
        return t.indexOf("-") > -1
          ? (si[t] =
              e.constructor === window.HTMLUnknownElement ||
              e.constructor === window.HTMLElement)
          : (si[t] = /HTMLUnknownElement/.test(e.toString()));
      }
      var ci = v("text,number,password,search,email,tel,url");
      function ui(t) {
        if ("string" === typeof t) {
          var e = document.querySelector(t);
          return e || document.createElement("div");
        }
        return t;
      }
      function di(t, e) {
        var n = document.createElement(t);
        return (
          "select" !== t ||
            (e.data &&
              e.data.attrs &&
              void 0 !== e.data.attrs.multiple &&
              n.setAttribute("multiple", "multiple")),
          n
        );
      }
      function fi(t, e) {
        return document.createElementNS(ni[t], e);
      }
      function hi(t) {
        return document.createTextNode(t);
      }
      function pi(t) {
        return document.createComment(t);
      }
      function gi(t, e, n) {
        t.insertBefore(e, n);
      }
      function vi(t, e) {
        t.removeChild(e);
      }
      function mi(t, e) {
        t.appendChild(e);
      }
      function bi(t) {
        return t.parentNode;
      }
      function yi(t) {
        return t.nextSibling;
      }
      function xi(t) {
        return t.tagName;
      }
      function _i(t, e) {
        t.textContent = e;
      }
      function wi(t, e) {
        t.setAttribute(e, "");
      }
      var ki = Object.freeze({
          createElement: di,
          createElementNS: fi,
          createTextNode: hi,
          createComment: pi,
          insertBefore: gi,
          removeChild: vi,
          appendChild: mi,
          parentNode: bi,
          nextSibling: yi,
          tagName: xi,
          setTextContent: _i,
          setStyleScope: wi,
        }),
        Ci = {
          create: function (t, e) {
            Mi(e);
          },
          update: function (t, e) {
            t.data.ref !== e.data.ref && (Mi(t, !0), Mi(e));
          },
          destroy: function (t) {
            Mi(t, !0);
          },
        };
      function Mi(t, e) {
        var n = t.data.ref;
        if (i(n)) {
          var r = t.context,
            o = t.componentInstance || t.elm,
            a = r.$refs;
          e
            ? Array.isArray(a[n])
              ? b(a[n], o)
              : a[n] === o && (a[n] = void 0)
            : t.data.refInFor
            ? Array.isArray(a[n])
              ? a[n].indexOf(o) < 0 && a[n].push(o)
              : (a[n] = [o])
            : (a[n] = o);
        }
      }
      var Si = new yt("", {}, []),
        Ai = ["create", "activate", "update", "remove", "destroy"];
      function Ti(t, e) {
        return (
          t.key === e.key &&
          ((t.tag === e.tag &&
            t.isComment === e.isComment &&
            i(t.data) === i(e.data) &&
            Oi(t, e)) ||
            (o(t.isAsyncPlaceholder) &&
              t.asyncFactory === e.asyncFactory &&
              r(e.asyncFactory.error)))
        );
      }
      function Oi(t, e) {
        if ("input" !== t.tag) return !0;
        var n,
          r = i((n = t.data)) && i((n = n.attrs)) && n.type,
          o = i((n = e.data)) && i((n = n.attrs)) && n.type;
        return r === o || (ci(r) && ci(o));
      }
      function Ei(t, e, n) {
        var r,
          o,
          a = {};
        for (r = e; r <= n; ++r) (o = t[r].key), i(o) && (a[o] = r);
        return a;
      }
      function Pi(t) {
        var e,
          n,
          a = {},
          l = t.modules,
          c = t.nodeOps;
        for (e = 0; e < Ai.length; ++e)
          for (a[Ai[e]] = [], n = 0; n < l.length; ++n)
            i(l[n][Ai[e]]) && a[Ai[e]].push(l[n][Ai[e]]);
        function u(t) {
          return new yt(c.tagName(t).toLowerCase(), {}, [], void 0, t);
        }
        function d(t, e) {
          function n() {
            0 === --n.listeners && f(t);
          }
          return (n.listeners = e), n;
        }
        function f(t) {
          var e = c.parentNode(t);
          i(e) && c.removeChild(e, t);
        }
        function h(t, e, n, r, a, s, l) {
          if (
            (i(t.elm) && i(s) && (t = s[l] = kt(t)),
            (t.isRootInsert = !a),
            !p(t, e, n, r))
          ) {
            var u = t.data,
              d = t.children,
              f = t.tag;
            i(f)
              ? ((t.elm = t.ns
                  ? c.createElementNS(t.ns, f)
                  : c.createElement(f, t)),
                w(t),
                y(t, d, e),
                i(u) && _(t, e),
                b(n, t.elm, r))
              : o(t.isComment)
              ? ((t.elm = c.createComment(t.text)), b(n, t.elm, r))
              : ((t.elm = c.createTextNode(t.text)), b(n, t.elm, r));
          }
        }
        function p(t, e, n, r) {
          var a = t.data;
          if (i(a)) {
            var s = i(t.componentInstance) && a.keepAlive;
            if (
              (i((a = a.hook)) && i((a = a.init)) && a(t, !1),
              i(t.componentInstance))
            )
              return g(t, e), b(n, t.elm, r), o(s) && m(t, e, n, r), !0;
          }
        }
        function g(t, e) {
          i(t.data.pendingInsert) &&
            (e.push.apply(e, t.data.pendingInsert),
            (t.data.pendingInsert = null)),
            (t.elm = t.componentInstance.$el),
            x(t) ? (_(t, e), w(t)) : (Mi(t), e.push(t));
        }
        function m(t, e, n, r) {
          var o,
            s = t;
          while (s.componentInstance)
            if (
              ((s = s.componentInstance._vnode),
              i((o = s.data)) && i((o = o.transition)))
            ) {
              for (o = 0; o < a.activate.length; ++o) a.activate[o](Si, s);
              e.push(s);
              break;
            }
          b(n, t.elm, r);
        }
        function b(t, e, n) {
          i(t) &&
            (i(n)
              ? c.parentNode(n) === t && c.insertBefore(t, e, n)
              : c.appendChild(t, e));
        }
        function y(t, e, n) {
          if (Array.isArray(e)) {
            0;
            for (var r = 0; r < e.length; ++r)
              h(e[r], n, t.elm, null, !0, e, r);
          } else
            s(t.text) && c.appendChild(t.elm, c.createTextNode(String(t.text)));
        }
        function x(t) {
          while (t.componentInstance) t = t.componentInstance._vnode;
          return i(t.tag);
        }
        function _(t, n) {
          for (var r = 0; r < a.create.length; ++r) a.create[r](Si, t);
          (e = t.data.hook),
            i(e) && (i(e.create) && e.create(Si, t), i(e.insert) && n.push(t));
        }
        function w(t) {
          var e;
          if (i((e = t.fnScopeId))) c.setStyleScope(t.elm, e);
          else {
            var n = t;
            while (n)
              i((e = n.context)) &&
                i((e = e.$options._scopeId)) &&
                c.setStyleScope(t.elm, e),
                (n = n.parent);
          }
          i((e = En)) &&
            e !== t.context &&
            e !== t.fnContext &&
            i((e = e.$options._scopeId)) &&
            c.setStyleScope(t.elm, e);
        }
        function k(t, e, n, r, i, o) {
          for (; r <= i; ++r) h(n[r], o, t, e, !1, n, r);
        }
        function C(t) {
          var e,
            n,
            r = t.data;
          if (i(r))
            for (
              i((e = r.hook)) && i((e = e.destroy)) && e(t), e = 0;
              e < a.destroy.length;
              ++e
            )
              a.destroy[e](t);
          if (i((e = t.children)))
            for (n = 0; n < t.children.length; ++n) C(t.children[n]);
        }
        function M(t, e, n) {
          for (; e <= n; ++e) {
            var r = t[e];
            i(r) && (i(r.tag) ? (S(r), C(r)) : f(r.elm));
          }
        }
        function S(t, e) {
          if (i(e) || i(t.data)) {
            var n,
              r = a.remove.length + 1;
            for (
              i(e) ? (e.listeners += r) : (e = d(t.elm, r)),
                i((n = t.componentInstance)) &&
                  i((n = n._vnode)) &&
                  i(n.data) &&
                  S(n, e),
                n = 0;
              n < a.remove.length;
              ++n
            )
              a.remove[n](t, e);
            i((n = t.data.hook)) && i((n = n.remove)) ? n(t, e) : e();
          } else f(t.elm);
        }
        function A(t, e, n, o, a) {
          var s,
            l,
            u,
            d,
            f = 0,
            p = 0,
            g = e.length - 1,
            v = e[0],
            m = e[g],
            b = n.length - 1,
            y = n[0],
            x = n[b],
            _ = !a;
          while (f <= g && p <= b)
            r(v)
              ? (v = e[++f])
              : r(m)
              ? (m = e[--g])
              : Ti(v, y)
              ? (O(v, y, o, n, p), (v = e[++f]), (y = n[++p]))
              : Ti(m, x)
              ? (O(m, x, o, n, b), (m = e[--g]), (x = n[--b]))
              : Ti(v, x)
              ? (O(v, x, o, n, b),
                _ && c.insertBefore(t, v.elm, c.nextSibling(m.elm)),
                (v = e[++f]),
                (x = n[--b]))
              : Ti(m, y)
              ? (O(m, y, o, n, p),
                _ && c.insertBefore(t, m.elm, v.elm),
                (m = e[--g]),
                (y = n[++p]))
              : (r(s) && (s = Ei(e, f, g)),
                (l = i(y.key) ? s[y.key] : T(y, e, f, g)),
                r(l)
                  ? h(y, o, t, v.elm, !1, n, p)
                  : ((u = e[l]),
                    Ti(u, y)
                      ? (O(u, y, o, n, p),
                        (e[l] = void 0),
                        _ && c.insertBefore(t, u.elm, v.elm))
                      : h(y, o, t, v.elm, !1, n, p)),
                (y = n[++p]));
          f > g
            ? ((d = r(n[b + 1]) ? null : n[b + 1].elm), k(t, d, n, p, b, o))
            : p > b && M(e, f, g);
        }
        function T(t, e, n, r) {
          for (var o = n; o < r; o++) {
            var a = e[o];
            if (i(a) && Ti(t, a)) return o;
          }
        }
        function O(t, e, n, s, l, u) {
          if (t !== e) {
            i(e.elm) && i(s) && (e = s[l] = kt(e));
            var d = (e.elm = t.elm);
            if (o(t.isAsyncPlaceholder))
              i(e.asyncFactory.resolved)
                ? L(t.elm, e, n)
                : (e.isAsyncPlaceholder = !0);
            else if (
              o(e.isStatic) &&
              o(t.isStatic) &&
              e.key === t.key &&
              (o(e.isCloned) || o(e.isOnce))
            )
              e.componentInstance = t.componentInstance;
            else {
              var f,
                h = e.data;
              i(h) && i((f = h.hook)) && i((f = f.prepatch)) && f(t, e);
              var p = t.children,
                g = e.children;
              if (i(h) && x(e)) {
                for (f = 0; f < a.update.length; ++f) a.update[f](t, e);
                i((f = h.hook)) && i((f = f.update)) && f(t, e);
              }
              r(e.text)
                ? i(p) && i(g)
                  ? p !== g && A(d, p, g, n, u)
                  : i(g)
                  ? (i(t.text) && c.setTextContent(d, ""),
                    k(d, null, g, 0, g.length - 1, n))
                  : i(p)
                  ? M(p, 0, p.length - 1)
                  : i(t.text) && c.setTextContent(d, "")
                : t.text !== e.text && c.setTextContent(d, e.text),
                i(h) && i((f = h.hook)) && i((f = f.postpatch)) && f(t, e);
            }
          }
        }
        function E(t, e, n) {
          if (o(n) && i(t.parent)) t.parent.data.pendingInsert = e;
          else for (var r = 0; r < e.length; ++r) e[r].data.hook.insert(e[r]);
        }
        var P = v("attrs,class,staticClass,staticStyle,key");
        function L(t, e, n, r) {
          var a,
            s = e.tag,
            l = e.data,
            c = e.children;
          if (
            ((r = r || (l && l.pre)),
            (e.elm = t),
            o(e.isComment) && i(e.asyncFactory))
          )
            return (e.isAsyncPlaceholder = !0), !0;
          if (
            i(l) &&
            (i((a = l.hook)) && i((a = a.init)) && a(e, !0),
            i((a = e.componentInstance)))
          )
            return g(e, n), !0;
          if (i(s)) {
            if (i(c))
              if (t.hasChildNodes())
                if (i((a = l)) && i((a = a.domProps)) && i((a = a.innerHTML))) {
                  if (a !== t.innerHTML) return !1;
                } else {
                  for (var u = !0, d = t.firstChild, f = 0; f < c.length; f++) {
                    if (!d || !L(d, c[f], n, r)) {
                      u = !1;
                      break;
                    }
                    d = d.nextSibling;
                  }
                  if (!u || d) return !1;
                }
              else y(e, c, n);
            if (i(l)) {
              var h = !1;
              for (var p in l)
                if (!P(p)) {
                  (h = !0), _(e, n);
                  break;
                }
              !h && l["class"] && ve(l["class"]);
            }
          } else t.data !== e.text && (t.data = e.text);
          return !0;
        }
        return function (t, e, n, s) {
          if (!r(e)) {
            var l = !1,
              d = [];
            if (r(t)) (l = !0), h(e, d);
            else {
              var f = i(t.nodeType);
              if (!f && Ti(t, e)) O(t, e, d, null, null, s);
              else {
                if (f) {
                  if (
                    (1 === t.nodeType &&
                      t.hasAttribute(z) &&
                      (t.removeAttribute(z), (n = !0)),
                    o(n) && L(t, e, d))
                  )
                    return E(e, d, !0), t;
                  t = u(t);
                }
                var p = t.elm,
                  g = c.parentNode(p);
                if (
                  (h(e, d, p._leaveCb ? null : g, c.nextSibling(p)),
                  i(e.parent))
                ) {
                  var v = e.parent,
                    m = x(e);
                  while (v) {
                    for (var b = 0; b < a.destroy.length; ++b) a.destroy[b](v);
                    if (((v.elm = e.elm), m)) {
                      for (var y = 0; y < a.create.length; ++y)
                        a.create[y](Si, v);
                      var _ = v.data.hook.insert;
                      if (_.merged)
                        for (var w = 1; w < _.fns.length; w++) _.fns[w]();
                    } else Mi(v);
                    v = v.parent;
                  }
                }
                i(g) ? M([t], 0, 0) : i(t.tag) && C(t);
              }
            }
            return E(e, d, l), e.elm;
          }
          i(t) && C(t);
        };
      }
      var Li = {
        create: Di,
        update: Di,
        destroy: function (t) {
          Di(t, Si);
        },
      };
      function Di(t, e) {
        (t.data.directives || e.data.directives) && Ii(t, e);
      }
      function Ii(t, e) {
        var n,
          r,
          i,
          o = t === Si,
          a = e === Si,
          s = Fi(t.data.directives, t.context),
          l = Fi(e.data.directives, e.context),
          c = [],
          u = [];
        for (n in l)
          (r = s[n]),
            (i = l[n]),
            r
              ? ((i.oldValue = r.value),
                (i.oldArg = r.arg),
                ji(i, "update", e, t),
                i.def && i.def.componentUpdated && u.push(i))
              : (ji(i, "bind", e, t), i.def && i.def.inserted && c.push(i));
        if (c.length) {
          var d = function () {
            for (var n = 0; n < c.length; n++) ji(c[n], "inserted", e, t);
          };
          o ? _e(e, "insert", d) : d();
        }
        if (
          (u.length &&
            _e(e, "postpatch", function () {
              for (var n = 0; n < u.length; n++)
                ji(u[n], "componentUpdated", e, t);
            }),
          !o)
        )
          for (n in s) l[n] || ji(s[n], "unbind", t, t, a);
      }
      var Ni = Object.create(null);
      function Fi(t, e) {
        var n,
          r,
          i = Object.create(null);
        if (!t) return i;
        for (n = 0; n < t.length; n++)
          (r = t[n]),
            r.modifiers || (r.modifiers = Ni),
            (i[Ri(r)] = r),
            (r.def = Xt(e.$options, "directives", r.name, !0));
        return i;
      }
      function Ri(t) {
        return (
          t.rawName || t.name + "." + Object.keys(t.modifiers || {}).join(".")
        );
      }
      function ji(t, e, n, r, i) {
        var o = t.def && t.def[e];
        if (o)
          try {
            o(n.elm, t, n, r, i);
          } catch (ka) {
            ee(ka, n.context, "directive " + t.name + " " + e + " hook");
          }
      }
      var zi = [Ci, Li];
      function Hi(t, e) {
        var n = e.componentOptions;
        if (
          (!i(n) || !1 !== n.Ctor.options.inheritAttrs) &&
          (!r(t.data.attrs) || !r(e.data.attrs))
        ) {
          var o,
            a,
            s,
            l = e.elm,
            c = t.data.attrs || {},
            u = e.data.attrs || {};
          for (o in (i(u.__ob__) && (u = e.data.attrs = P({}, u)), u))
            (a = u[o]), (s = c[o]), s !== a && Bi(l, o, a);
          for (o in ((tt || nt) &&
            u.value !== c.value &&
            Bi(l, "value", u.value),
          c))
            r(u[o]) &&
              (qr(o)
                ? l.removeAttributeNS(Ur, Yr(o))
                : Br(o) || l.removeAttribute(o));
        }
      }
      function Bi(t, e, n) {
        t.tagName.indexOf("-") > -1
          ? Vi(t, e, n)
          : Wr(e)
          ? Gr(n)
            ? t.removeAttribute(e)
            : ((n =
                "allowfullscreen" === e && "EMBED" === t.tagName ? "true" : e),
              t.setAttribute(e, n))
          : Br(e)
          ? t.setAttribute(e, $r(e, n))
          : qr(e)
          ? Gr(n)
            ? t.removeAttributeNS(Ur, Yr(e))
            : t.setAttributeNS(Ur, e, n)
          : Vi(t, e, n);
      }
      function Vi(t, e, n) {
        if (Gr(n)) t.removeAttribute(e);
        else {
          if (
            tt &&
            !et &&
            "TEXTAREA" === t.tagName &&
            "placeholder" === e &&
            "" !== n &&
            !t.__ieph
          ) {
            var r = function (e) {
              e.stopImmediatePropagation(), t.removeEventListener("input", r);
            };
            t.addEventListener("input", r), (t.__ieph = !0);
          }
          t.setAttribute(e, n);
        }
      }
      var $i = { create: Hi, update: Hi };
      function Wi(t, e) {
        var n = e.elm,
          o = e.data,
          a = t.data;
        if (
          !(
            r(o.staticClass) &&
            r(o.class) &&
            (r(a) || (r(a.staticClass) && r(a.class)))
          )
        ) {
          var s = Xr(e),
            l = n._transitionClasses;
          i(l) && (s = Jr(s, Qr(l))),
            s !== n._prevClass &&
              (n.setAttribute("class", s), (n._prevClass = s));
        }
      }
      var Ui,
        qi = { create: Wi, update: Wi },
        Yi = "__r",
        Gi = "__c";
      function Xi(t) {
        if (i(t[Yi])) {
          var e = tt ? "change" : "input";
          (t[e] = [].concat(t[Yi], t[e] || [])), delete t[Yi];
        }
        i(t[Gi]) &&
          ((t.change = [].concat(t[Gi], t.change || [])), delete t[Gi]);
      }
      function Ki(t, e, n) {
        var r = Ui;
        return function i() {
          var o = e.apply(null, arguments);
          null !== o && Qi(t, i, n, r);
        };
      }
      var Zi = ae && !(it && Number(it[1]) <= 53);
      function Ji(t, e, n, r) {
        if (Zi) {
          var i = Yn,
            o = e;
          e = o._wrapper = function (t) {
            if (
              t.target === t.currentTarget ||
              t.timeStamp >= i ||
              t.timeStamp <= 0 ||
              t.target.ownerDocument !== document
            )
              return o.apply(this, arguments);
          };
        }
        Ui.addEventListener(t, e, at ? { capture: n, passive: r } : n);
      }
      function Qi(t, e, n, r) {
        (r || Ui).removeEventListener(t, e._wrapper || e, n);
      }
      function to(t, e) {
        if (!r(t.data.on) || !r(e.data.on)) {
          var n = e.data.on || {},
            i = t.data.on || {};
          (Ui = e.elm), Xi(n), xe(n, i, Ji, Qi, Ki, e.context), (Ui = void 0);
        }
      }
      var eo,
        no = { create: to, update: to };
      function ro(t, e) {
        if (!r(t.data.domProps) || !r(e.data.domProps)) {
          var n,
            o,
            a = e.elm,
            s = t.data.domProps || {},
            l = e.data.domProps || {};
          for (n in (i(l.__ob__) && (l = e.data.domProps = P({}, l)), s))
            n in l || (a[n] = "");
          for (n in l) {
            if (((o = l[n]), "textContent" === n || "innerHTML" === n)) {
              if ((e.children && (e.children.length = 0), o === s[n])) continue;
              1 === a.childNodes.length && a.removeChild(a.childNodes[0]);
            }
            if ("value" === n && "PROGRESS" !== a.tagName) {
              a._value = o;
              var c = r(o) ? "" : String(o);
              io(a, c) && (a.value = c);
            } else if ("innerHTML" === n && ii(a.tagName) && r(a.innerHTML)) {
              (eo = eo || document.createElement("div")),
                (eo.innerHTML = "<svg>" + o + "</svg>");
              var u = eo.firstChild;
              while (a.firstChild) a.removeChild(a.firstChild);
              while (u.firstChild) a.appendChild(u.firstChild);
            } else if (o !== s[n])
              try {
                a[n] = o;
              } catch (ka) {}
          }
        }
      }
      function io(t, e) {
        return !t.composing && ("OPTION" === t.tagName || oo(t, e) || ao(t, e));
      }
      function oo(t, e) {
        var n = !0;
        try {
          n = document.activeElement !== t;
        } catch (ka) {}
        return n && t.value !== e;
      }
      function ao(t, e) {
        var n = t.value,
          r = t._vModifiers;
        if (i(r)) {
          if (r.number) return g(n) !== g(e);
          if (r.trim) return n.trim() !== e.trim();
        }
        return n !== e;
      }
      var so = { create: ro, update: ro },
        lo = _(function (t) {
          var e = {},
            n = /;(?![^(]*\))/g,
            r = /:(.+)/;
          return (
            t.split(n).forEach(function (t) {
              if (t) {
                var n = t.split(r);
                n.length > 1 && (e[n[0].trim()] = n[1].trim());
              }
            }),
            e
          );
        });
      function co(t) {
        var e = uo(t.style);
        return t.staticStyle ? P(t.staticStyle, e) : e;
      }
      function uo(t) {
        return Array.isArray(t) ? L(t) : "string" === typeof t ? lo(t) : t;
      }
      function fo(t, e) {
        var n,
          r = {};
        if (e) {
          var i = t;
          while (i.componentInstance)
            (i = i.componentInstance._vnode),
              i && i.data && (n = co(i.data)) && P(r, n);
        }
        (n = co(t.data)) && P(r, n);
        var o = t;
        while ((o = o.parent)) o.data && (n = co(o.data)) && P(r, n);
        return r;
      }
      var ho,
        po = /^--/,
        go = /\s*!important$/,
        vo = function (t, e, n) {
          if (po.test(e)) t.style.setProperty(e, n);
          else if (go.test(n))
            t.style.setProperty(S(e), n.replace(go, ""), "important");
          else {
            var r = bo(e);
            if (Array.isArray(n))
              for (var i = 0, o = n.length; i < o; i++) t.style[r] = n[i];
            else t.style[r] = n;
          }
        },
        mo = ["Webkit", "Moz", "ms"],
        bo = _(function (t) {
          if (
            ((ho = ho || document.createElement("div").style),
            (t = k(t)),
            "filter" !== t && t in ho)
          )
            return t;
          for (
            var e = t.charAt(0).toUpperCase() + t.slice(1), n = 0;
            n < mo.length;
            n++
          ) {
            var r = mo[n] + e;
            if (r in ho) return r;
          }
        });
      function yo(t, e) {
        var n = e.data,
          o = t.data;
        if (
          !(r(n.staticStyle) && r(n.style) && r(o.staticStyle) && r(o.style))
        ) {
          var a,
            s,
            l = e.elm,
            c = o.staticStyle,
            u = o.normalizedStyle || o.style || {},
            d = c || u,
            f = uo(e.data.style) || {};
          e.data.normalizedStyle = i(f.__ob__) ? P({}, f) : f;
          var h = fo(e, !0);
          for (s in d) r(h[s]) && vo(l, s, "");
          for (s in h) (a = h[s]), a !== d[s] && vo(l, s, null == a ? "" : a);
        }
      }
      var xo = { create: yo, update: yo },
        _o = /\s+/;
      function wo(t, e) {
        if (e && (e = e.trim()))
          if (t.classList)
            e.indexOf(" ") > -1
              ? e.split(_o).forEach(function (e) {
                  return t.classList.add(e);
                })
              : t.classList.add(e);
          else {
            var n = " " + (t.getAttribute("class") || "") + " ";
            n.indexOf(" " + e + " ") < 0 &&
              t.setAttribute("class", (n + e).trim());
          }
      }
      function ko(t, e) {
        if (e && (e = e.trim()))
          if (t.classList)
            e.indexOf(" ") > -1
              ? e.split(_o).forEach(function (e) {
                  return t.classList.remove(e);
                })
              : t.classList.remove(e),
              t.classList.length || t.removeAttribute("class");
          else {
            var n = " " + (t.getAttribute("class") || "") + " ",
              r = " " + e + " ";
            while (n.indexOf(r) >= 0) n = n.replace(r, " ");
            (n = n.trim()),
              n ? t.setAttribute("class", n) : t.removeAttribute("class");
          }
      }
      function Co(t) {
        if (t) {
          if ("object" === typeof t) {
            var e = {};
            return !1 !== t.css && P(e, Mo(t.name || "v")), P(e, t), e;
          }
          return "string" === typeof t ? Mo(t) : void 0;
        }
      }
      var Mo = _(function (t) {
          return {
            enterClass: t + "-enter",
            enterToClass: t + "-enter-to",
            enterActiveClass: t + "-enter-active",
            leaveClass: t + "-leave",
            leaveToClass: t + "-leave-to",
            leaveActiveClass: t + "-leave-active",
          };
        }),
        So = K && !et,
        Ao = "transition",
        To = "animation",
        Oo = "transition",
        Eo = "transitionend",
        Po = "animation",
        Lo = "animationend";
      So &&
        (void 0 === window.ontransitionend &&
          void 0 !== window.onwebkittransitionend &&
          ((Oo = "WebkitTransition"), (Eo = "webkitTransitionEnd")),
        void 0 === window.onanimationend &&
          void 0 !== window.onwebkitanimationend &&
          ((Po = "WebkitAnimation"), (Lo = "webkitAnimationEnd")));
      var Do = K
        ? window.requestAnimationFrame
          ? window.requestAnimationFrame.bind(window)
          : setTimeout
        : function (t) {
            return t();
          };
      function Io(t) {
        Do(function () {
          Do(t);
        });
      }
      function No(t, e) {
        var n = t._transitionClasses || (t._transitionClasses = []);
        n.indexOf(e) < 0 && (n.push(e), wo(t, e));
      }
      function Fo(t, e) {
        t._transitionClasses && b(t._transitionClasses, e), ko(t, e);
      }
      function Ro(t, e, n) {
        var r = zo(t, e),
          i = r.type,
          o = r.timeout,
          a = r.propCount;
        if (!i) return n();
        var s = i === Ao ? Eo : Lo,
          l = 0,
          c = function () {
            t.removeEventListener(s, u), n();
          },
          u = function (e) {
            e.target === t && ++l >= a && c();
          };
        setTimeout(function () {
          l < a && c();
        }, o + 1),
          t.addEventListener(s, u);
      }
      var jo = /\b(transform|all)(,|$)/;
      function zo(t, e) {
        var n,
          r = window.getComputedStyle(t),
          i = (r[Oo + "Delay"] || "").split(", "),
          o = (r[Oo + "Duration"] || "").split(", "),
          a = Ho(i, o),
          s = (r[Po + "Delay"] || "").split(", "),
          l = (r[Po + "Duration"] || "").split(", "),
          c = Ho(s, l),
          u = 0,
          d = 0;
        e === Ao
          ? a > 0 && ((n = Ao), (u = a), (d = o.length))
          : e === To
          ? c > 0 && ((n = To), (u = c), (d = l.length))
          : ((u = Math.max(a, c)),
            (n = u > 0 ? (a > c ? Ao : To) : null),
            (d = n ? (n === Ao ? o.length : l.length) : 0));
        var f = n === Ao && jo.test(r[Oo + "Property"]);
        return { type: n, timeout: u, propCount: d, hasTransform: f };
      }
      function Ho(t, e) {
        while (t.length < e.length) t = t.concat(t);
        return Math.max.apply(
          null,
          e.map(function (e, n) {
            return Bo(e) + Bo(t[n]);
          })
        );
      }
      function Bo(t) {
        return 1e3 * Number(t.slice(0, -1).replace(",", "."));
      }
      function Vo(t, e) {
        var n = t.elm;
        i(n._leaveCb) && ((n._leaveCb.cancelled = !0), n._leaveCb());
        var o = Co(t.data.transition);
        if (!r(o) && !i(n._enterCb) && 1 === n.nodeType) {
          var a = o.css,
            s = o.type,
            c = o.enterClass,
            u = o.enterToClass,
            d = o.enterActiveClass,
            f = o.appearClass,
            h = o.appearToClass,
            p = o.appearActiveClass,
            v = o.beforeEnter,
            m = o.enter,
            b = o.afterEnter,
            y = o.enterCancelled,
            x = o.beforeAppear,
            _ = o.appear,
            w = o.afterAppear,
            k = o.appearCancelled,
            C = o.duration,
            M = En,
            S = En.$vnode;
          while (S && S.parent) (M = S.context), (S = S.parent);
          var A = !M._isMounted || !t.isRootInsert;
          if (!A || _ || "" === _) {
            var T = A && f ? f : c,
              O = A && p ? p : d,
              E = A && h ? h : u,
              P = (A && x) || v,
              L = A && "function" === typeof _ ? _ : m,
              D = (A && w) || b,
              I = (A && k) || y,
              N = g(l(C) ? C.enter : C);
            0;
            var F = !1 !== a && !et,
              R = Uo(L),
              z = (n._enterCb = j(function () {
                F && (Fo(n, E), Fo(n, O)),
                  z.cancelled ? (F && Fo(n, T), I && I(n)) : D && D(n),
                  (n._enterCb = null);
              }));
            t.data.show ||
              _e(t, "insert", function () {
                var e = n.parentNode,
                  r = e && e._pending && e._pending[t.key];
                r && r.tag === t.tag && r.elm._leaveCb && r.elm._leaveCb(),
                  L && L(n, z);
              }),
              P && P(n),
              F &&
                (No(n, T),
                No(n, O),
                Io(function () {
                  Fo(n, T),
                    z.cancelled ||
                      (No(n, E), R || (Wo(N) ? setTimeout(z, N) : Ro(n, s, z)));
                })),
              t.data.show && (e && e(), L && L(n, z)),
              F || R || z();
          }
        }
      }
      function $o(t, e) {
        var n = t.elm;
        i(n._enterCb) && ((n._enterCb.cancelled = !0), n._enterCb());
        var o = Co(t.data.transition);
        if (r(o) || 1 !== n.nodeType) return e();
        if (!i(n._leaveCb)) {
          var a = o.css,
            s = o.type,
            c = o.leaveClass,
            u = o.leaveToClass,
            d = o.leaveActiveClass,
            f = o.beforeLeave,
            h = o.leave,
            p = o.afterLeave,
            v = o.leaveCancelled,
            m = o.delayLeave,
            b = o.duration,
            y = !1 !== a && !et,
            x = Uo(h),
            _ = g(l(b) ? b.leave : b);
          0;
          var w = (n._leaveCb = j(function () {
            n.parentNode &&
              n.parentNode._pending &&
              (n.parentNode._pending[t.key] = null),
              y && (Fo(n, u), Fo(n, d)),
              w.cancelled ? (y && Fo(n, c), v && v(n)) : (e(), p && p(n)),
              (n._leaveCb = null);
          }));
          m ? m(k) : k();
        }
        function k() {
          w.cancelled ||
            (!t.data.show &&
              n.parentNode &&
              ((n.parentNode._pending || (n.parentNode._pending = {}))[t.key] =
                t),
            f && f(n),
            y &&
              (No(n, c),
              No(n, d),
              Io(function () {
                Fo(n, c),
                  w.cancelled ||
                    (No(n, u), x || (Wo(_) ? setTimeout(w, _) : Ro(n, s, w)));
              })),
            h && h(n, w),
            y || x || w());
        }
      }
      function Wo(t) {
        return "number" === typeof t && !isNaN(t);
      }
      function Uo(t) {
        if (r(t)) return !1;
        var e = t.fns;
        return i(e)
          ? Uo(Array.isArray(e) ? e[0] : e)
          : (t._length || t.length) > 1;
      }
      function qo(t, e) {
        !0 !== e.data.show && Vo(e);
      }
      var Yo = K
          ? {
              create: qo,
              activate: qo,
              remove: function (t, e) {
                !0 !== t.data.show ? $o(t, e) : e();
              },
            }
          : {},
        Go = [$i, qi, no, so, xo, Yo],
        Xo = Go.concat(zi),
        Ko = Pi({ nodeOps: ki, modules: Xo });
      et &&
        document.addEventListener("selectionchange", function () {
          var t = document.activeElement;
          t && t.vmodel && ia(t, "input");
        });
      var Zo = {
        inserted: function (t, e, n, r) {
          "select" === n.tag
            ? (r.elm && !r.elm._vOptions
                ? _e(n, "postpatch", function () {
                    Zo.componentUpdated(t, e, n);
                  })
                : Jo(t, e, n.context),
              (t._vOptions = [].map.call(t.options, ea)))
            : ("textarea" === n.tag || ci(t.type)) &&
              ((t._vModifiers = e.modifiers),
              e.modifiers.lazy ||
                (t.addEventListener("compositionstart", na),
                t.addEventListener("compositionend", ra),
                t.addEventListener("change", ra),
                et && (t.vmodel = !0)));
        },
        componentUpdated: function (t, e, n) {
          if ("select" === n.tag) {
            Jo(t, e, n.context);
            var r = t._vOptions,
              i = (t._vOptions = [].map.call(t.options, ea));
            if (
              i.some(function (t, e) {
                return !F(t, r[e]);
              })
            ) {
              var o = t.multiple
                ? e.value.some(function (t) {
                    return ta(t, i);
                  })
                : e.value !== e.oldValue && ta(e.value, i);
              o && ia(t, "change");
            }
          }
        },
      };
      function Jo(t, e, n) {
        Qo(t, e, n),
          (tt || nt) &&
            setTimeout(function () {
              Qo(t, e, n);
            }, 0);
      }
      function Qo(t, e, n) {
        var r = e.value,
          i = t.multiple;
        if (!i || Array.isArray(r)) {
          for (var o, a, s = 0, l = t.options.length; s < l; s++)
            if (((a = t.options[s]), i))
              (o = R(r, ea(a)) > -1), a.selected !== o && (a.selected = o);
            else if (F(ea(a), r))
              return void (t.selectedIndex !== s && (t.selectedIndex = s));
          i || (t.selectedIndex = -1);
        }
      }
      function ta(t, e) {
        return e.every(function (e) {
          return !F(e, t);
        });
      }
      function ea(t) {
        return "_value" in t ? t._value : t.value;
      }
      function na(t) {
        t.target.composing = !0;
      }
      function ra(t) {
        t.target.composing &&
          ((t.target.composing = !1), ia(t.target, "input"));
      }
      function ia(t, e) {
        var n = document.createEvent("HTMLEvents");
        n.initEvent(e, !0, !0), t.dispatchEvent(n);
      }
      function oa(t) {
        return !t.componentInstance || (t.data && t.data.transition)
          ? t
          : oa(t.componentInstance._vnode);
      }
      var aa = {
          bind: function (t, e, n) {
            var r = e.value;
            n = oa(n);
            var i = n.data && n.data.transition,
              o = (t.__vOriginalDisplay =
                "none" === t.style.display ? "" : t.style.display);
            r && i
              ? ((n.data.show = !0),
                Vo(n, function () {
                  t.style.display = o;
                }))
              : (t.style.display = r ? o : "none");
          },
          update: function (t, e, n) {
            var r = e.value,
              i = e.oldValue;
            if (!r !== !i) {
              n = oa(n);
              var o = n.data && n.data.transition;
              o
                ? ((n.data.show = !0),
                  r
                    ? Vo(n, function () {
                        t.style.display = t.__vOriginalDisplay;
                      })
                    : $o(n, function () {
                        t.style.display = "none";
                      }))
                : (t.style.display = r ? t.__vOriginalDisplay : "none");
            }
          },
          unbind: function (t, e, n, r, i) {
            i || (t.style.display = t.__vOriginalDisplay);
          },
        },
        sa = { model: Zo, show: aa },
        la = {
          name: String,
          appear: Boolean,
          css: Boolean,
          mode: String,
          type: String,
          enterClass: String,
          leaveClass: String,
          enterToClass: String,
          leaveToClass: String,
          enterActiveClass: String,
          leaveActiveClass: String,
          appearClass: String,
          appearActiveClass: String,
          appearToClass: String,
          duration: [Number, String, Object],
        };
      function ca(t) {
        var e = t && t.componentOptions;
        return e && e.Ctor.options.abstract ? ca(kn(e.children)) : t;
      }
      function ua(t) {
        var e = {},
          n = t.$options;
        for (var r in n.propsData) e[r] = t[r];
        var i = n._parentListeners;
        for (var o in i) e[k(o)] = i[o];
        return e;
      }
      function da(t, e) {
        if (/\d-keep-alive$/.test(e.tag))
          return t("keep-alive", { props: e.componentOptions.propsData });
      }
      function fa(t) {
        while ((t = t.parent)) if (t.data.transition) return !0;
      }
      function ha(t, e) {
        return e.key === t.key && e.tag === t.tag;
      }
      var pa = function (t) {
          return t.tag || wn(t);
        },
        ga = function (t) {
          return "show" === t.name;
        },
        va = {
          name: "transition",
          props: la,
          abstract: !0,
          render: function (t) {
            var e = this,
              n = this.$slots.default;
            if (n && ((n = n.filter(pa)), n.length)) {
              0;
              var r = this.mode;
              0;
              var i = n[0];
              if (fa(this.$vnode)) return i;
              var o = ca(i);
              if (!o) return i;
              if (this._leaving) return da(t, i);
              var a = "__transition-" + this._uid + "-";
              o.key =
                null == o.key
                  ? o.isComment
                    ? a + "comment"
                    : a + o.tag
                  : s(o.key)
                  ? 0 === String(o.key).indexOf(a)
                    ? o.key
                    : a + o.key
                  : o.key;
              var l = ((o.data || (o.data = {})).transition = ua(this)),
                c = this._vnode,
                u = ca(c);
              if (
                (o.data.directives &&
                  o.data.directives.some(ga) &&
                  (o.data.show = !0),
                u &&
                  u.data &&
                  !ha(o, u) &&
                  !wn(u) &&
                  (!u.componentInstance ||
                    !u.componentInstance._vnode.isComment))
              ) {
                var d = (u.data.transition = P({}, l));
                if ("out-in" === r)
                  return (
                    (this._leaving = !0),
                    _e(d, "afterLeave", function () {
                      (e._leaving = !1), e.$forceUpdate();
                    }),
                    da(t, i)
                  );
                if ("in-out" === r) {
                  if (wn(o)) return c;
                  var f,
                    h = function () {
                      f();
                    };
                  _e(l, "afterEnter", h),
                    _e(l, "enterCancelled", h),
                    _e(d, "delayLeave", function (t) {
                      f = t;
                    });
                }
              }
              return i;
            }
          },
        },
        ma = P({ tag: String, moveClass: String }, la);
      delete ma.mode;
      var ba = {
        props: ma,
        beforeMount: function () {
          var t = this,
            e = this._update;
          this._update = function (n, r) {
            var i = Pn(t);
            t.__patch__(t._vnode, t.kept, !1, !0),
              (t._vnode = t.kept),
              i(),
              e.call(t, n, r);
          };
        },
        render: function (t) {
          for (
            var e = this.tag || this.$vnode.data.tag || "span",
              n = Object.create(null),
              r = (this.prevChildren = this.children),
              i = this.$slots.default || [],
              o = (this.children = []),
              a = ua(this),
              s = 0;
            s < i.length;
            s++
          ) {
            var l = i[s];
            if (l.tag)
              if (null != l.key && 0 !== String(l.key).indexOf("__vlist"))
                o.push(l),
                  (n[l.key] = l),
                  ((l.data || (l.data = {})).transition = a);
              else;
          }
          if (r) {
            for (var c = [], u = [], d = 0; d < r.length; d++) {
              var f = r[d];
              (f.data.transition = a),
                (f.data.pos = f.elm.getBoundingClientRect()),
                n[f.key] ? c.push(f) : u.push(f);
            }
            (this.kept = t(e, null, c)), (this.removed = u);
          }
          return t(e, null, o);
        },
        updated: function () {
          var t = this.prevChildren,
            e = this.moveClass || (this.name || "v") + "-move";
          t.length &&
            this.hasMove(t[0].elm, e) &&
            (t.forEach(ya),
            t.forEach(xa),
            t.forEach(_a),
            (this._reflow = document.body.offsetHeight),
            t.forEach(function (t) {
              if (t.data.moved) {
                var n = t.elm,
                  r = n.style;
                No(n, e),
                  (r.transform = r.WebkitTransform = r.transitionDuration = ""),
                  n.addEventListener(
                    Eo,
                    (n._moveCb = function t(r) {
                      (r && r.target !== n) ||
                        (r && !/transform$/.test(r.propertyName)) ||
                        (n.removeEventListener(Eo, t),
                        (n._moveCb = null),
                        Fo(n, e));
                    })
                  );
              }
            }));
        },
        methods: {
          hasMove: function (t, e) {
            if (!So) return !1;
            if (this._hasMove) return this._hasMove;
            var n = t.cloneNode();
            t._transitionClasses &&
              t._transitionClasses.forEach(function (t) {
                ko(n, t);
              }),
              wo(n, e),
              (n.style.display = "none"),
              this.$el.appendChild(n);
            var r = zo(n);
            return this.$el.removeChild(n), (this._hasMove = r.hasTransform);
          },
        },
      };
      function ya(t) {
        t.elm._moveCb && t.elm._moveCb(), t.elm._enterCb && t.elm._enterCb();
      }
      function xa(t) {
        t.data.newPos = t.elm.getBoundingClientRect();
      }
      function _a(t) {
        var e = t.data.pos,
          n = t.data.newPos,
          r = e.left - n.left,
          i = e.top - n.top;
        if (r || i) {
          t.data.moved = !0;
          var o = t.elm.style;
          (o.transform = o.WebkitTransform =
            "translate(" + r + "px," + i + "px)"),
            (o.transitionDuration = "0s");
        }
      }
      var wa = { Transition: va, TransitionGroup: ba };
      (kr.config.mustUseProp = Hr),
        (kr.config.isReservedTag = oi),
        (kr.config.isReservedAttr = jr),
        (kr.config.getTagNamespace = ai),
        (kr.config.isUnknownElement = li),
        P(kr.options.directives, sa),
        P(kr.options.components, wa),
        (kr.prototype.__patch__ = K ? Ko : D),
        (kr.prototype.$mount = function (t, e) {
          return (t = t && K ? ui(t) : void 0), In(this, t, e);
        }),
        K &&
          setTimeout(function () {
            V.devtools && ct && ct.emit("init", kr);
          }, 0),
        (e["a"] = kr);
    }).call(this, n("24aa"));
  },
  "2cf4": function (t, e, n) {
    var r,
      i,
      o,
      a = n("da84"),
      s = n("d039"),
      l = n("0366"),
      c = n("1be4"),
      u = n("cc12"),
      d = n("1cdc"),
      f = n("605d"),
      h = a.location,
      p = a.setImmediate,
      g = a.clearImmediate,
      v = a.process,
      m = a.MessageChannel,
      b = a.Dispatch,
      y = 0,
      x = {},
      _ = "onreadystatechange",
      w = function (t) {
        if (x.hasOwnProperty(t)) {
          var e = x[t];
          delete x[t], e();
        }
      },
      k = function (t) {
        return function () {
          w(t);
        };
      },
      C = function (t) {
        w(t.data);
      },
      M = function (t) {
        a.postMessage(t + "", h.protocol + "//" + h.host);
      };
    (p && g) ||
      ((p = function (t) {
        var e = [],
          n = 1;
        while (arguments.length > n) e.push(arguments[n++]);
        return (
          (x[++y] = function () {
            ("function" == typeof t ? t : Function(t)).apply(void 0, e);
          }),
          r(y),
          y
        );
      }),
      (g = function (t) {
        delete x[t];
      }),
      f
        ? (r = function (t) {
            v.nextTick(k(t));
          })
        : b && b.now
        ? (r = function (t) {
            b.now(k(t));
          })
        : m && !d
        ? ((i = new m()),
          (o = i.port2),
          (i.port1.onmessage = C),
          (r = l(o.postMessage, o, 1)))
        : a.addEventListener &&
          "function" == typeof postMessage &&
          !a.importScripts &&
          h &&
          "file:" !== h.protocol &&
          !s(M)
        ? ((r = M), a.addEventListener("message", C, !1))
        : (r =
            _ in u("script")
              ? function (t) {
                  c.appendChild(u("script"))[_] = function () {
                    c.removeChild(this), w(t);
                  };
                }
              : function (t) {
                  setTimeout(k(t), 0);
                })),
      (t.exports = { set: p, clear: g });
  },
  "2d00": function (t, e, n) {
    var r,
      i,
      o = n("da84"),
      a = n("342f"),
      s = o.process,
      l = s && s.versions,
      c = l && l.v8;
    c
      ? ((r = c.split(".")), (i = r[0] + r[1]))
      : a &&
        ((r = a.match(/Edge\/(\d+)/)),
        (!r || r[1] >= 74) &&
          ((r = a.match(/Chrome\/(\d+)/)), r && (i = r[1]))),
      (t.exports = i && +i);
  },
  "2d83": function (t, e, n) {
    "use strict";
    var r = n("387f");
    t.exports = function (t, e, n, i, o) {
      var a = new Error(t);
      return r(a, e, n, i, o);
    };
  },
  "2e67": function (t, e, n) {
    "use strict";
    t.exports = function (t) {
      return !(!t || !t.__CANCEL__);
    };
  },
  "30b5": function (t, e, n) {
    "use strict";
    var r = n("c532");
    function i(t) {
      return encodeURIComponent(t)
        .replace(/%3A/gi, ":")
        .replace(/%24/g, "$")
        .replace(/%2C/gi, ",")
        .replace(/%20/g, "+")
        .replace(/%5B/gi, "[")
        .replace(/%5D/gi, "]");
    }
    t.exports = function (t, e, n) {
      if (!e) return t;
      var o;
      if (n) o = n(e);
      else if (r.isURLSearchParams(e)) o = e.toString();
      else {
        var a = [];
        r.forEach(e, function (t, e) {
          null !== t &&
            "undefined" !== typeof t &&
            (r.isArray(t) ? (e += "[]") : (t = [t]),
            r.forEach(t, function (t) {
              r.isDate(t)
                ? (t = t.toISOString())
                : r.isObject(t) && (t = JSON.stringify(t)),
                a.push(i(e) + "=" + i(t));
            }));
        }),
          (o = a.join("&"));
      }
      if (o) {
        var s = t.indexOf("#");
        -1 !== s && (t = t.slice(0, s)),
          (t += (-1 === t.indexOf("?") ? "?" : "&") + o);
      }
      return t;
    };
  },
  "30ef": function (t, e, n) {
    /*!
     * Chart.js v2.9.4
     * https://www.chartjs.org
     * (c) 2020 Chart.js Contributors
     * Released under the MIT License
     */
    (function (e, r) {
      t.exports = r(
        (function () {
          try {
            return n(
              !(function () {
                var t = new Error("Cannot find module 'moment'");
                throw ((t.code = "MODULE_NOT_FOUND"), t);
              })()
            );
          } catch (t) {}
        })()
      );
    })(0, function (t) {
      "use strict";
      function e(t, e) {
        return (e = { exports: {} }), t(e, e.exports), e.exports;
      }
      function n(t) {
        return (t && t["default"]) || t;
      }
      t = t && t.hasOwnProperty("default") ? t["default"] : t;
      var r = {
          aliceblue: [240, 248, 255],
          antiquewhite: [250, 235, 215],
          aqua: [0, 255, 255],
          aquamarine: [127, 255, 212],
          azure: [240, 255, 255],
          beige: [245, 245, 220],
          bisque: [255, 228, 196],
          black: [0, 0, 0],
          blanchedalmond: [255, 235, 205],
          blue: [0, 0, 255],
          blueviolet: [138, 43, 226],
          brown: [165, 42, 42],
          burlywood: [222, 184, 135],
          cadetblue: [95, 158, 160],
          chartreuse: [127, 255, 0],
          chocolate: [210, 105, 30],
          coral: [255, 127, 80],
          cornflowerblue: [100, 149, 237],
          cornsilk: [255, 248, 220],
          crimson: [220, 20, 60],
          cyan: [0, 255, 255],
          darkblue: [0, 0, 139],
          darkcyan: [0, 139, 139],
          darkgoldenrod: [184, 134, 11],
          darkgray: [169, 169, 169],
          darkgreen: [0, 100, 0],
          darkgrey: [169, 169, 169],
          darkkhaki: [189, 183, 107],
          darkmagenta: [139, 0, 139],
          darkolivegreen: [85, 107, 47],
          darkorange: [255, 140, 0],
          darkorchid: [153, 50, 204],
          darkred: [139, 0, 0],
          darksalmon: [233, 150, 122],
          darkseagreen: [143, 188, 143],
          darkslateblue: [72, 61, 139],
          darkslategray: [47, 79, 79],
          darkslategrey: [47, 79, 79],
          darkturquoise: [0, 206, 209],
          darkviolet: [148, 0, 211],
          deeppink: [255, 20, 147],
          deepskyblue: [0, 191, 255],
          dimgray: [105, 105, 105],
          dimgrey: [105, 105, 105],
          dodgerblue: [30, 144, 255],
          firebrick: [178, 34, 34],
          floralwhite: [255, 250, 240],
          forestgreen: [34, 139, 34],
          fuchsia: [255, 0, 255],
          gainsboro: [220, 220, 220],
          ghostwhite: [248, 248, 255],
          gold: [255, 215, 0],
          goldenrod: [218, 165, 32],
          gray: [128, 128, 128],
          green: [0, 128, 0],
          greenyellow: [173, 255, 47],
          grey: [128, 128, 128],
          honeydew: [240, 255, 240],
          hotpink: [255, 105, 180],
          indianred: [205, 92, 92],
          indigo: [75, 0, 130],
          ivory: [255, 255, 240],
          khaki: [240, 230, 140],
          lavender: [230, 230, 250],
          lavenderblush: [255, 240, 245],
          lawngreen: [124, 252, 0],
          lemonchiffon: [255, 250, 205],
          lightblue: [173, 216, 230],
          lightcoral: [240, 128, 128],
          lightcyan: [224, 255, 255],
          lightgoldenrodyellow: [250, 250, 210],
          lightgray: [211, 211, 211],
          lightgreen: [144, 238, 144],
          lightgrey: [211, 211, 211],
          lightpink: [255, 182, 193],
          lightsalmon: [255, 160, 122],
          lightseagreen: [32, 178, 170],
          lightskyblue: [135, 206, 250],
          lightslategray: [119, 136, 153],
          lightslategrey: [119, 136, 153],
          lightsteelblue: [176, 196, 222],
          lightyellow: [255, 255, 224],
          lime: [0, 255, 0],
          limegreen: [50, 205, 50],
          linen: [250, 240, 230],
          magenta: [255, 0, 255],
          maroon: [128, 0, 0],
          mediumaquamarine: [102, 205, 170],
          mediumblue: [0, 0, 205],
          mediumorchid: [186, 85, 211],
          mediumpurple: [147, 112, 219],
          mediumseagreen: [60, 179, 113],
          mediumslateblue: [123, 104, 238],
          mediumspringgreen: [0, 250, 154],
          mediumturquoise: [72, 209, 204],
          mediumvioletred: [199, 21, 133],
          midnightblue: [25, 25, 112],
          mintcream: [245, 255, 250],
          mistyrose: [255, 228, 225],
          moccasin: [255, 228, 181],
          navajowhite: [255, 222, 173],
          navy: [0, 0, 128],
          oldlace: [253, 245, 230],
          olive: [128, 128, 0],
          olivedrab: [107, 142, 35],
          orange: [255, 165, 0],
          orangered: [255, 69, 0],
          orchid: [218, 112, 214],
          palegoldenrod: [238, 232, 170],
          palegreen: [152, 251, 152],
          paleturquoise: [175, 238, 238],
          palevioletred: [219, 112, 147],
          papayawhip: [255, 239, 213],
          peachpuff: [255, 218, 185],
          peru: [205, 133, 63],
          pink: [255, 192, 203],
          plum: [221, 160, 221],
          powderblue: [176, 224, 230],
          purple: [128, 0, 128],
          rebeccapurple: [102, 51, 153],
          red: [255, 0, 0],
          rosybrown: [188, 143, 143],
          royalblue: [65, 105, 225],
          saddlebrown: [139, 69, 19],
          salmon: [250, 128, 114],
          sandybrown: [244, 164, 96],
          seagreen: [46, 139, 87],
          seashell: [255, 245, 238],
          sienna: [160, 82, 45],
          silver: [192, 192, 192],
          skyblue: [135, 206, 235],
          slateblue: [106, 90, 205],
          slategray: [112, 128, 144],
          slategrey: [112, 128, 144],
          snow: [255, 250, 250],
          springgreen: [0, 255, 127],
          steelblue: [70, 130, 180],
          tan: [210, 180, 140],
          teal: [0, 128, 128],
          thistle: [216, 191, 216],
          tomato: [255, 99, 71],
          turquoise: [64, 224, 208],
          violet: [238, 130, 238],
          wheat: [245, 222, 179],
          white: [255, 255, 255],
          whitesmoke: [245, 245, 245],
          yellow: [255, 255, 0],
          yellowgreen: [154, 205, 50],
        },
        i = e(function (t) {
          var e = {};
          for (var n in r) r.hasOwnProperty(n) && (e[r[n]] = n);
          var i = (t.exports = {
            rgb: { channels: 3, labels: "rgb" },
            hsl: { channels: 3, labels: "hsl" },
            hsv: { channels: 3, labels: "hsv" },
            hwb: { channels: 3, labels: "hwb" },
            cmyk: { channels: 4, labels: "cmyk" },
            xyz: { channels: 3, labels: "xyz" },
            lab: { channels: 3, labels: "lab" },
            lch: { channels: 3, labels: "lch" },
            hex: { channels: 1, labels: ["hex"] },
            keyword: { channels: 1, labels: ["keyword"] },
            ansi16: { channels: 1, labels: ["ansi16"] },
            ansi256: { channels: 1, labels: ["ansi256"] },
            hcg: { channels: 3, labels: ["h", "c", "g"] },
            apple: { channels: 3, labels: ["r16", "g16", "b16"] },
            gray: { channels: 1, labels: ["gray"] },
          });
          for (var o in i)
            if (i.hasOwnProperty(o)) {
              if (!("channels" in i[o]))
                throw new Error("missing channels property: " + o);
              if (!("labels" in i[o]))
                throw new Error("missing channel labels property: " + o);
              if (i[o].labels.length !== i[o].channels)
                throw new Error("channel and label counts mismatch: " + o);
              var a = i[o].channels,
                s = i[o].labels;
              delete i[o].channels,
                delete i[o].labels,
                Object.defineProperty(i[o], "channels", { value: a }),
                Object.defineProperty(i[o], "labels", { value: s });
            }
          function l(t, e) {
            return (
              Math.pow(t[0] - e[0], 2) +
              Math.pow(t[1] - e[1], 2) +
              Math.pow(t[2] - e[2], 2)
            );
          }
          (i.rgb.hsl = function (t) {
            var e,
              n,
              r,
              i = t[0] / 255,
              o = t[1] / 255,
              a = t[2] / 255,
              s = Math.min(i, o, a),
              l = Math.max(i, o, a),
              c = l - s;
            return (
              l === s
                ? (e = 0)
                : i === l
                ? (e = (o - a) / c)
                : o === l
                ? (e = 2 + (a - i) / c)
                : a === l && (e = 4 + (i - o) / c),
              (e = Math.min(60 * e, 360)),
              e < 0 && (e += 360),
              (r = (s + l) / 2),
              (n = l === s ? 0 : r <= 0.5 ? c / (l + s) : c / (2 - l - s)),
              [e, 100 * n, 100 * r]
            );
          }),
            (i.rgb.hsv = function (t) {
              var e,
                n,
                r,
                i,
                o,
                a = t[0] / 255,
                s = t[1] / 255,
                l = t[2] / 255,
                c = Math.max(a, s, l),
                u = c - Math.min(a, s, l),
                d = function (t) {
                  return (c - t) / 6 / u + 0.5;
                };
              return (
                0 === u
                  ? (i = o = 0)
                  : ((o = u / c),
                    (e = d(a)),
                    (n = d(s)),
                    (r = d(l)),
                    a === c
                      ? (i = r - n)
                      : s === c
                      ? (i = 1 / 3 + e - r)
                      : l === c && (i = 2 / 3 + n - e),
                    i < 0 ? (i += 1) : i > 1 && (i -= 1)),
                [360 * i, 100 * o, 100 * c]
              );
            }),
            (i.rgb.hwb = function (t) {
              var e = t[0],
                n = t[1],
                r = t[2],
                o = i.rgb.hsl(t)[0],
                a = (1 / 255) * Math.min(e, Math.min(n, r));
              return (
                (r = 1 - (1 / 255) * Math.max(e, Math.max(n, r))),
                [o, 100 * a, 100 * r]
              );
            }),
            (i.rgb.cmyk = function (t) {
              var e,
                n,
                r,
                i,
                o = t[0] / 255,
                a = t[1] / 255,
                s = t[2] / 255;
              return (
                (i = Math.min(1 - o, 1 - a, 1 - s)),
                (e = (1 - o - i) / (1 - i) || 0),
                (n = (1 - a - i) / (1 - i) || 0),
                (r = (1 - s - i) / (1 - i) || 0),
                [100 * e, 100 * n, 100 * r, 100 * i]
              );
            }),
            (i.rgb.keyword = function (t) {
              var n = e[t];
              if (n) return n;
              var i,
                o = 1 / 0;
              for (var a in r)
                if (r.hasOwnProperty(a)) {
                  var s = r[a],
                    c = l(t, s);
                  c < o && ((o = c), (i = a));
                }
              return i;
            }),
            (i.keyword.rgb = function (t) {
              return r[t];
            }),
            (i.rgb.xyz = function (t) {
              var e = t[0] / 255,
                n = t[1] / 255,
                r = t[2] / 255;
              (e =
                e > 0.04045 ? Math.pow((e + 0.055) / 1.055, 2.4) : e / 12.92),
                (n =
                  n > 0.04045 ? Math.pow((n + 0.055) / 1.055, 2.4) : n / 12.92),
                (r =
                  r > 0.04045 ? Math.pow((r + 0.055) / 1.055, 2.4) : r / 12.92);
              var i = 0.4124 * e + 0.3576 * n + 0.1805 * r,
                o = 0.2126 * e + 0.7152 * n + 0.0722 * r,
                a = 0.0193 * e + 0.1192 * n + 0.9505 * r;
              return [100 * i, 100 * o, 100 * a];
            }),
            (i.rgb.lab = function (t) {
              var e,
                n,
                r,
                o = i.rgb.xyz(t),
                a = o[0],
                s = o[1],
                l = o[2];
              return (
                (a /= 95.047),
                (s /= 100),
                (l /= 108.883),
                (a = a > 0.008856 ? Math.pow(a, 1 / 3) : 7.787 * a + 16 / 116),
                (s = s > 0.008856 ? Math.pow(s, 1 / 3) : 7.787 * s + 16 / 116),
                (l = l > 0.008856 ? Math.pow(l, 1 / 3) : 7.787 * l + 16 / 116),
                (e = 116 * s - 16),
                (n = 500 * (a - s)),
                (r = 200 * (s - l)),
                [e, n, r]
              );
            }),
            (i.hsl.rgb = function (t) {
              var e,
                n,
                r,
                i,
                o,
                a = t[0] / 360,
                s = t[1] / 100,
                l = t[2] / 100;
              if (0 === s) return (o = 255 * l), [o, o, o];
              (n = l < 0.5 ? l * (1 + s) : l + s - l * s),
                (e = 2 * l - n),
                (i = [0, 0, 0]);
              for (var c = 0; c < 3; c++)
                (r = a + (1 / 3) * -(c - 1)),
                  r < 0 && r++,
                  r > 1 && r--,
                  (o =
                    6 * r < 1
                      ? e + 6 * (n - e) * r
                      : 2 * r < 1
                      ? n
                      : 3 * r < 2
                      ? e + (n - e) * (2 / 3 - r) * 6
                      : e),
                  (i[c] = 255 * o);
              return i;
            }),
            (i.hsl.hsv = function (t) {
              var e,
                n,
                r = t[0],
                i = t[1] / 100,
                o = t[2] / 100,
                a = i,
                s = Math.max(o, 0.01);
              return (
                (o *= 2),
                (i *= o <= 1 ? o : 2 - o),
                (a *= s <= 1 ? s : 2 - s),
                (n = (o + i) / 2),
                (e = 0 === o ? (2 * a) / (s + a) : (2 * i) / (o + i)),
                [r, 100 * e, 100 * n]
              );
            }),
            (i.hsv.rgb = function (t) {
              var e = t[0] / 60,
                n = t[1] / 100,
                r = t[2] / 100,
                i = Math.floor(e) % 6,
                o = e - Math.floor(e),
                a = 255 * r * (1 - n),
                s = 255 * r * (1 - n * o),
                l = 255 * r * (1 - n * (1 - o));
              switch (((r *= 255), i)) {
                case 0:
                  return [r, l, a];
                case 1:
                  return [s, r, a];
                case 2:
                  return [a, r, l];
                case 3:
                  return [a, s, r];
                case 4:
                  return [l, a, r];
                case 5:
                  return [r, a, s];
              }
            }),
            (i.hsv.hsl = function (t) {
              var e,
                n,
                r,
                i = t[0],
                o = t[1] / 100,
                a = t[2] / 100,
                s = Math.max(a, 0.01);
              return (
                (r = (2 - o) * a),
                (e = (2 - o) * s),
                (n = o * s),
                (n /= e <= 1 ? e : 2 - e),
                (n = n || 0),
                (r /= 2),
                [i, 100 * n, 100 * r]
              );
            }),
            (i.hwb.rgb = function (t) {
              var e,
                n,
                r,
                i,
                o,
                a,
                s,
                l = t[0] / 360,
                c = t[1] / 100,
                u = t[2] / 100,
                d = c + u;
              switch (
                (d > 1 && ((c /= d), (u /= d)),
                (e = Math.floor(6 * l)),
                (n = 1 - u),
                (r = 6 * l - e),
                0 !== (1 & e) && (r = 1 - r),
                (i = c + r * (n - c)),
                e)
              ) {
                default:
                case 6:
                case 0:
                  (o = n), (a = i), (s = c);
                  break;
                case 1:
                  (o = i), (a = n), (s = c);
                  break;
                case 2:
                  (o = c), (a = n), (s = i);
                  break;
                case 3:
                  (o = c), (a = i), (s = n);
                  break;
                case 4:
                  (o = i), (a = c), (s = n);
                  break;
                case 5:
                  (o = n), (a = c), (s = i);
                  break;
              }
              return [255 * o, 255 * a, 255 * s];
            }),
            (i.cmyk.rgb = function (t) {
              var e,
                n,
                r,
                i = t[0] / 100,
                o = t[1] / 100,
                a = t[2] / 100,
                s = t[3] / 100;
              return (
                (e = 1 - Math.min(1, i * (1 - s) + s)),
                (n = 1 - Math.min(1, o * (1 - s) + s)),
                (r = 1 - Math.min(1, a * (1 - s) + s)),
                [255 * e, 255 * n, 255 * r]
              );
            }),
            (i.xyz.rgb = function (t) {
              var e,
                n,
                r,
                i = t[0] / 100,
                o = t[1] / 100,
                a = t[2] / 100;
              return (
                (e = 3.2406 * i + -1.5372 * o + -0.4986 * a),
                (n = -0.9689 * i + 1.8758 * o + 0.0415 * a),
                (r = 0.0557 * i + -0.204 * o + 1.057 * a),
                (e =
                  e > 0.0031308
                    ? 1.055 * Math.pow(e, 1 / 2.4) - 0.055
                    : 12.92 * e),
                (n =
                  n > 0.0031308
                    ? 1.055 * Math.pow(n, 1 / 2.4) - 0.055
                    : 12.92 * n),
                (r =
                  r > 0.0031308
                    ? 1.055 * Math.pow(r, 1 / 2.4) - 0.055
                    : 12.92 * r),
                (e = Math.min(Math.max(0, e), 1)),
                (n = Math.min(Math.max(0, n), 1)),
                (r = Math.min(Math.max(0, r), 1)),
                [255 * e, 255 * n, 255 * r]
              );
            }),
            (i.xyz.lab = function (t) {
              var e,
                n,
                r,
                i = t[0],
                o = t[1],
                a = t[2];
              return (
                (i /= 95.047),
                (o /= 100),
                (a /= 108.883),
                (i = i > 0.008856 ? Math.pow(i, 1 / 3) : 7.787 * i + 16 / 116),
                (o = o > 0.008856 ? Math.pow(o, 1 / 3) : 7.787 * o + 16 / 116),
                (a = a > 0.008856 ? Math.pow(a, 1 / 3) : 7.787 * a + 16 / 116),
                (e = 116 * o - 16),
                (n = 500 * (i - o)),
                (r = 200 * (o - a)),
                [e, n, r]
              );
            }),
            (i.lab.xyz = function (t) {
              var e,
                n,
                r,
                i = t[0],
                o = t[1],
                a = t[2];
              (n = (i + 16) / 116), (e = o / 500 + n), (r = n - a / 200);
              var s = Math.pow(n, 3),
                l = Math.pow(e, 3),
                c = Math.pow(r, 3);
              return (
                (n = s > 0.008856 ? s : (n - 16 / 116) / 7.787),
                (e = l > 0.008856 ? l : (e - 16 / 116) / 7.787),
                (r = c > 0.008856 ? c : (r - 16 / 116) / 7.787),
                (e *= 95.047),
                (n *= 100),
                (r *= 108.883),
                [e, n, r]
              );
            }),
            (i.lab.lch = function (t) {
              var e,
                n,
                r,
                i = t[0],
                o = t[1],
                a = t[2];
              return (
                (e = Math.atan2(a, o)),
                (n = (360 * e) / 2 / Math.PI),
                n < 0 && (n += 360),
                (r = Math.sqrt(o * o + a * a)),
                [i, r, n]
              );
            }),
            (i.lch.lab = function (t) {
              var e,
                n,
                r,
                i = t[0],
                o = t[1],
                a = t[2];
              return (
                (r = (a / 360) * 2 * Math.PI),
                (e = o * Math.cos(r)),
                (n = o * Math.sin(r)),
                [i, e, n]
              );
            }),
            (i.rgb.ansi16 = function (t) {
              var e = t[0],
                n = t[1],
                r = t[2],
                o = 1 in arguments ? arguments[1] : i.rgb.hsv(t)[2];
              if (((o = Math.round(o / 50)), 0 === o)) return 30;
              var a =
                30 +
                ((Math.round(r / 255) << 2) |
                  (Math.round(n / 255) << 1) |
                  Math.round(e / 255));
              return 2 === o && (a += 60), a;
            }),
            (i.hsv.ansi16 = function (t) {
              return i.rgb.ansi16(i.hsv.rgb(t), t[2]);
            }),
            (i.rgb.ansi256 = function (t) {
              var e = t[0],
                n = t[1],
                r = t[2];
              if (e === n && n === r)
                return e < 8
                  ? 16
                  : e > 248
                  ? 231
                  : Math.round(((e - 8) / 247) * 24) + 232;
              var i =
                16 +
                36 * Math.round((e / 255) * 5) +
                6 * Math.round((n / 255) * 5) +
                Math.round((r / 255) * 5);
              return i;
            }),
            (i.ansi16.rgb = function (t) {
              var e = t % 10;
              if (0 === e || 7 === e)
                return t > 50 && (e += 3.5), (e = (e / 10.5) * 255), [e, e, e];
              var n = 0.5 * (1 + ~~(t > 50)),
                r = (1 & e) * n * 255,
                i = ((e >> 1) & 1) * n * 255,
                o = ((e >> 2) & 1) * n * 255;
              return [r, i, o];
            }),
            (i.ansi256.rgb = function (t) {
              if (t >= 232) {
                var e = 10 * (t - 232) + 8;
                return [e, e, e];
              }
              var n;
              t -= 16;
              var r = (Math.floor(t / 36) / 5) * 255,
                i = (Math.floor((n = t % 36) / 6) / 5) * 255,
                o = ((n % 6) / 5) * 255;
              return [r, i, o];
            }),
            (i.rgb.hex = function (t) {
              var e =
                  ((255 & Math.round(t[0])) << 16) +
                  ((255 & Math.round(t[1])) << 8) +
                  (255 & Math.round(t[2])),
                n = e.toString(16).toUpperCase();
              return "000000".substring(n.length) + n;
            }),
            (i.hex.rgb = function (t) {
              var e = t.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
              if (!e) return [0, 0, 0];
              var n = e[0];
              3 === e[0].length &&
                (n = n
                  .split("")
                  .map(function (t) {
                    return t + t;
                  })
                  .join(""));
              var r = parseInt(n, 16),
                i = (r >> 16) & 255,
                o = (r >> 8) & 255,
                a = 255 & r;
              return [i, o, a];
            }),
            (i.rgb.hcg = function (t) {
              var e,
                n,
                r = t[0] / 255,
                i = t[1] / 255,
                o = t[2] / 255,
                a = Math.max(Math.max(r, i), o),
                s = Math.min(Math.min(r, i), o),
                l = a - s;
              return (
                (e = l < 1 ? s / (1 - l) : 0),
                (n =
                  l <= 0
                    ? 0
                    : a === r
                    ? ((i - o) / l) % 6
                    : a === i
                    ? 2 + (o - r) / l
                    : 4 + (r - i) / l + 4),
                (n /= 6),
                (n %= 1),
                [360 * n, 100 * l, 100 * e]
              );
            }),
            (i.hsl.hcg = function (t) {
              var e = t[1] / 100,
                n = t[2] / 100,
                r = 1,
                i = 0;
              return (
                (r = n < 0.5 ? 2 * e * n : 2 * e * (1 - n)),
                r < 1 && (i = (n - 0.5 * r) / (1 - r)),
                [t[0], 100 * r, 100 * i]
              );
            }),
            (i.hsv.hcg = function (t) {
              var e = t[1] / 100,
                n = t[2] / 100,
                r = e * n,
                i = 0;
              return r < 1 && (i = (n - r) / (1 - r)), [t[0], 100 * r, 100 * i];
            }),
            (i.hcg.rgb = function (t) {
              var e = t[0] / 360,
                n = t[1] / 100,
                r = t[2] / 100;
              if (0 === n) return [255 * r, 255 * r, 255 * r];
              var i = [0, 0, 0],
                o = (e % 1) * 6,
                a = o % 1,
                s = 1 - a,
                l = 0;
              switch (Math.floor(o)) {
                case 0:
                  (i[0] = 1), (i[1] = a), (i[2] = 0);
                  break;
                case 1:
                  (i[0] = s), (i[1] = 1), (i[2] = 0);
                  break;
                case 2:
                  (i[0] = 0), (i[1] = 1), (i[2] = a);
                  break;
                case 3:
                  (i[0] = 0), (i[1] = s), (i[2] = 1);
                  break;
                case 4:
                  (i[0] = a), (i[1] = 0), (i[2] = 1);
                  break;
                default:
                  (i[0] = 1), (i[1] = 0), (i[2] = s);
              }
              return (
                (l = (1 - n) * r),
                [
                  255 * (n * i[0] + l),
                  255 * (n * i[1] + l),
                  255 * (n * i[2] + l),
                ]
              );
            }),
            (i.hcg.hsv = function (t) {
              var e = t[1] / 100,
                n = t[2] / 100,
                r = e + n * (1 - e),
                i = 0;
              return r > 0 && (i = e / r), [t[0], 100 * i, 100 * r];
            }),
            (i.hcg.hsl = function (t) {
              var e = t[1] / 100,
                n = t[2] / 100,
                r = n * (1 - e) + 0.5 * e,
                i = 0;
              return (
                r > 0 && r < 0.5
                  ? (i = e / (2 * r))
                  : r >= 0.5 && r < 1 && (i = e / (2 * (1 - r))),
                [t[0], 100 * i, 100 * r]
              );
            }),
            (i.hcg.hwb = function (t) {
              var e = t[1] / 100,
                n = t[2] / 100,
                r = e + n * (1 - e);
              return [t[0], 100 * (r - e), 100 * (1 - r)];
            }),
            (i.hwb.hcg = function (t) {
              var e = t[1] / 100,
                n = t[2] / 100,
                r = 1 - n,
                i = r - e,
                o = 0;
              return i < 1 && (o = (r - i) / (1 - i)), [t[0], 100 * i, 100 * o];
            }),
            (i.apple.rgb = function (t) {
              return [
                (t[0] / 65535) * 255,
                (t[1] / 65535) * 255,
                (t[2] / 65535) * 255,
              ];
            }),
            (i.rgb.apple = function (t) {
              return [
                (t[0] / 255) * 65535,
                (t[1] / 255) * 65535,
                (t[2] / 255) * 65535,
              ];
            }),
            (i.gray.rgb = function (t) {
              return [
                (t[0] / 100) * 255,
                (t[0] / 100) * 255,
                (t[0] / 100) * 255,
              ];
            }),
            (i.gray.hsl = i.gray.hsv =
              function (t) {
                return [0, 0, t[0]];
              }),
            (i.gray.hwb = function (t) {
              return [0, 100, t[0]];
            }),
            (i.gray.cmyk = function (t) {
              return [0, 0, 0, t[0]];
            }),
            (i.gray.lab = function (t) {
              return [t[0], 0, 0];
            }),
            (i.gray.hex = function (t) {
              var e = 255 & Math.round((t[0] / 100) * 255),
                n = (e << 16) + (e << 8) + e,
                r = n.toString(16).toUpperCase();
              return "000000".substring(r.length) + r;
            }),
            (i.rgb.gray = function (t) {
              var e = (t[0] + t[1] + t[2]) / 3;
              return [(e / 255) * 100];
            });
        });
      i.rgb,
        i.hsl,
        i.hsv,
        i.hwb,
        i.cmyk,
        i.xyz,
        i.lab,
        i.lch,
        i.hex,
        i.keyword,
        i.ansi16,
        i.ansi256,
        i.hcg,
        i.apple,
        i.gray;
      function o() {
        for (var t = {}, e = Object.keys(i), n = e.length, r = 0; r < n; r++)
          t[e[r]] = { distance: -1, parent: null };
        return t;
      }
      function a(t) {
        var e = o(),
          n = [t];
        e[t].distance = 0;
        while (n.length)
          for (
            var r = n.pop(), a = Object.keys(i[r]), s = a.length, l = 0;
            l < s;
            l++
          ) {
            var c = a[l],
              u = e[c];
            -1 === u.distance &&
              ((u.distance = e[r].distance + 1), (u.parent = r), n.unshift(c));
          }
        return e;
      }
      function s(t, e) {
        return function (n) {
          return e(t(n));
        };
      }
      function l(t, e) {
        var n = [e[t].parent, t],
          r = i[e[t].parent][t],
          o = e[t].parent;
        while (e[o].parent)
          n.unshift(e[o].parent),
            (r = s(i[e[o].parent][o], r)),
            (o = e[o].parent);
        return (r.conversion = n), r;
      }
      var c = function (t) {
          for (
            var e = a(t), n = {}, r = Object.keys(e), i = r.length, o = 0;
            o < i;
            o++
          ) {
            var s = r[o],
              c = e[s];
            null !== c.parent && (n[s] = l(s, e));
          }
          return n;
        },
        u = {},
        d = Object.keys(i);
      function f(t) {
        var e = function (e) {
          return void 0 === e || null === e
            ? e
            : (arguments.length > 1 &&
                (e = Array.prototype.slice.call(arguments)),
              t(e));
        };
        return "conversion" in t && (e.conversion = t.conversion), e;
      }
      function h(t) {
        var e = function (e) {
          if (void 0 === e || null === e) return e;
          arguments.length > 1 && (e = Array.prototype.slice.call(arguments));
          var n = t(e);
          if ("object" === typeof n)
            for (var r = n.length, i = 0; i < r; i++) n[i] = Math.round(n[i]);
          return n;
        };
        return "conversion" in t && (e.conversion = t.conversion), e;
      }
      d.forEach(function (t) {
        (u[t] = {}),
          Object.defineProperty(u[t], "channels", { value: i[t].channels }),
          Object.defineProperty(u[t], "labels", { value: i[t].labels });
        var e = c(t),
          n = Object.keys(e);
        n.forEach(function (n) {
          var r = e[n];
          (u[t][n] = h(r)), (u[t][n].raw = f(r));
        });
      });
      var p = u,
        g = {
          aliceblue: [240, 248, 255],
          antiquewhite: [250, 235, 215],
          aqua: [0, 255, 255],
          aquamarine: [127, 255, 212],
          azure: [240, 255, 255],
          beige: [245, 245, 220],
          bisque: [255, 228, 196],
          black: [0, 0, 0],
          blanchedalmond: [255, 235, 205],
          blue: [0, 0, 255],
          blueviolet: [138, 43, 226],
          brown: [165, 42, 42],
          burlywood: [222, 184, 135],
          cadetblue: [95, 158, 160],
          chartreuse: [127, 255, 0],
          chocolate: [210, 105, 30],
          coral: [255, 127, 80],
          cornflowerblue: [100, 149, 237],
          cornsilk: [255, 248, 220],
          crimson: [220, 20, 60],
          cyan: [0, 255, 255],
          darkblue: [0, 0, 139],
          darkcyan: [0, 139, 139],
          darkgoldenrod: [184, 134, 11],
          darkgray: [169, 169, 169],
          darkgreen: [0, 100, 0],
          darkgrey: [169, 169, 169],
          darkkhaki: [189, 183, 107],
          darkmagenta: [139, 0, 139],
          darkolivegreen: [85, 107, 47],
          darkorange: [255, 140, 0],
          darkorchid: [153, 50, 204],
          darkred: [139, 0, 0],
          darksalmon: [233, 150, 122],
          darkseagreen: [143, 188, 143],
          darkslateblue: [72, 61, 139],
          darkslategray: [47, 79, 79],
          darkslategrey: [47, 79, 79],
          darkturquoise: [0, 206, 209],
          darkviolet: [148, 0, 211],
          deeppink: [255, 20, 147],
          deepskyblue: [0, 191, 255],
          dimgray: [105, 105, 105],
          dimgrey: [105, 105, 105],
          dodgerblue: [30, 144, 255],
          firebrick: [178, 34, 34],
          floralwhite: [255, 250, 240],
          forestgreen: [34, 139, 34],
          fuchsia: [255, 0, 255],
          gainsboro: [220, 220, 220],
          ghostwhite: [248, 248, 255],
          gold: [255, 215, 0],
          goldenrod: [218, 165, 32],
          gray: [128, 128, 128],
          green: [0, 128, 0],
          greenyellow: [173, 255, 47],
          grey: [128, 128, 128],
          honeydew: [240, 255, 240],
          hotpink: [255, 105, 180],
          indianred: [205, 92, 92],
          indigo: [75, 0, 130],
          ivory: [255, 255, 240],
          khaki: [240, 230, 140],
          lavender: [230, 230, 250],
          lavenderblush: [255, 240, 245],
          lawngreen: [124, 252, 0],
          lemonchiffon: [255, 250, 205],
          lightblue: [173, 216, 230],
          lightcoral: [240, 128, 128],
          lightcyan: [224, 255, 255],
          lightgoldenrodyellow: [250, 250, 210],
          lightgray: [211, 211, 211],
          lightgreen: [144, 238, 144],
          lightgrey: [211, 211, 211],
          lightpink: [255, 182, 193],
          lightsalmon: [255, 160, 122],
          lightseagreen: [32, 178, 170],
          lightskyblue: [135, 206, 250],
          lightslategray: [119, 136, 153],
          lightslategrey: [119, 136, 153],
          lightsteelblue: [176, 196, 222],
          lightyellow: [255, 255, 224],
          lime: [0, 255, 0],
          limegreen: [50, 205, 50],
          linen: [250, 240, 230],
          magenta: [255, 0, 255],
          maroon: [128, 0, 0],
          mediumaquamarine: [102, 205, 170],
          mediumblue: [0, 0, 205],
          mediumorchid: [186, 85, 211],
          mediumpurple: [147, 112, 219],
          mediumseagreen: [60, 179, 113],
          mediumslateblue: [123, 104, 238],
          mediumspringgreen: [0, 250, 154],
          mediumturquoise: [72, 209, 204],
          mediumvioletred: [199, 21, 133],
          midnightblue: [25, 25, 112],
          mintcream: [245, 255, 250],
          mistyrose: [255, 228, 225],
          moccasin: [255, 228, 181],
          navajowhite: [255, 222, 173],
          navy: [0, 0, 128],
          oldlace: [253, 245, 230],
          olive: [128, 128, 0],
          olivedrab: [107, 142, 35],
          orange: [255, 165, 0],
          orangered: [255, 69, 0],
          orchid: [218, 112, 214],
          palegoldenrod: [238, 232, 170],
          palegreen: [152, 251, 152],
          paleturquoise: [175, 238, 238],
          palevioletred: [219, 112, 147],
          papayawhip: [255, 239, 213],
          peachpuff: [255, 218, 185],
          peru: [205, 133, 63],
          pink: [255, 192, 203],
          plum: [221, 160, 221],
          powderblue: [176, 224, 230],
          purple: [128, 0, 128],
          rebeccapurple: [102, 51, 153],
          red: [255, 0, 0],
          rosybrown: [188, 143, 143],
          royalblue: [65, 105, 225],
          saddlebrown: [139, 69, 19],
          salmon: [250, 128, 114],
          sandybrown: [244, 164, 96],
          seagreen: [46, 139, 87],
          seashell: [255, 245, 238],
          sienna: [160, 82, 45],
          silver: [192, 192, 192],
          skyblue: [135, 206, 235],
          slateblue: [106, 90, 205],
          slategray: [112, 128, 144],
          slategrey: [112, 128, 144],
          snow: [255, 250, 250],
          springgreen: [0, 255, 127],
          steelblue: [70, 130, 180],
          tan: [210, 180, 140],
          teal: [0, 128, 128],
          thistle: [216, 191, 216],
          tomato: [255, 99, 71],
          turquoise: [64, 224, 208],
          violet: [238, 130, 238],
          wheat: [245, 222, 179],
          white: [255, 255, 255],
          whitesmoke: [245, 245, 245],
          yellow: [255, 255, 0],
          yellowgreen: [154, 205, 50],
        },
        v = {
          getRgba: m,
          getHsla: b,
          getRgb: x,
          getHsl: _,
          getHwb: y,
          getAlpha: w,
          hexString: k,
          rgbString: C,
          rgbaString: M,
          percentString: S,
          percentaString: A,
          hslString: T,
          hslaString: O,
          hwbString: E,
          keyword: P,
        };
      function m(t) {
        if (t) {
          var e = /^#([a-fA-F0-9]{3,4})$/i,
            n = /^#([a-fA-F0-9]{6}([a-fA-F0-9]{2})?)$/i,
            r =
              /^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/i,
            i =
              /^rgba?\(\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/i,
            o = /(\w+)/,
            a = [0, 0, 0],
            s = 1,
            l = t.match(e),
            c = "";
          if (l) {
            (l = l[1]), (c = l[3]);
            for (var u = 0; u < a.length; u++) a[u] = parseInt(l[u] + l[u], 16);
            c && (s = Math.round((parseInt(c + c, 16) / 255) * 100) / 100);
          } else if ((l = t.match(n))) {
            (c = l[2]), (l = l[1]);
            for (u = 0; u < a.length; u++)
              a[u] = parseInt(l.slice(2 * u, 2 * u + 2), 16);
            c && (s = Math.round((parseInt(c, 16) / 255) * 100) / 100);
          } else if ((l = t.match(r))) {
            for (u = 0; u < a.length; u++) a[u] = parseInt(l[u + 1]);
            s = parseFloat(l[4]);
          } else if ((l = t.match(i))) {
            for (u = 0; u < a.length; u++)
              a[u] = Math.round(2.55 * parseFloat(l[u + 1]));
            s = parseFloat(l[4]);
          } else if ((l = t.match(o))) {
            if ("transparent" == l[1]) return [0, 0, 0, 0];
            if (((a = g[l[1]]), !a)) return;
          }
          for (u = 0; u < a.length; u++) a[u] = L(a[u], 0, 255);
          return (s = s || 0 == s ? L(s, 0, 1) : 1), (a[3] = s), a;
        }
      }
      function b(t) {
        if (t) {
          var e =
              /^hsla?\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/,
            n = t.match(e);
          if (n) {
            var r = parseFloat(n[4]),
              i = L(parseInt(n[1]), 0, 360),
              o = L(parseFloat(n[2]), 0, 100),
              a = L(parseFloat(n[3]), 0, 100),
              s = L(isNaN(r) ? 1 : r, 0, 1);
            return [i, o, a, s];
          }
        }
      }
      function y(t) {
        if (t) {
          var e =
              /^hwb\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/,
            n = t.match(e);
          if (n) {
            var r = parseFloat(n[4]),
              i = L(parseInt(n[1]), 0, 360),
              o = L(parseFloat(n[2]), 0, 100),
              a = L(parseFloat(n[3]), 0, 100),
              s = L(isNaN(r) ? 1 : r, 0, 1);
            return [i, o, a, s];
          }
        }
      }
      function x(t) {
        var e = m(t);
        return e && e.slice(0, 3);
      }
      function _(t) {
        var e = b(t);
        return e && e.slice(0, 3);
      }
      function w(t) {
        var e = m(t);
        return e || (e = b(t)) || (e = y(t)) ? e[3] : void 0;
      }
      function k(t, e) {
        e = void 0 !== e && 3 === t.length ? e : t[3];
        return (
          "#" +
          D(t[0]) +
          D(t[1]) +
          D(t[2]) +
          (e >= 0 && e < 1 ? D(Math.round(255 * e)) : "")
        );
      }
      function C(t, e) {
        return e < 1 || (t[3] && t[3] < 1)
          ? M(t, e)
          : "rgb(" + t[0] + ", " + t[1] + ", " + t[2] + ")";
      }
      function M(t, e) {
        return (
          void 0 === e && (e = void 0 !== t[3] ? t[3] : 1),
          "rgba(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + e + ")"
        );
      }
      function S(t, e) {
        if (e < 1 || (t[3] && t[3] < 1)) return A(t, e);
        var n = Math.round((t[0] / 255) * 100),
          r = Math.round((t[1] / 255) * 100),
          i = Math.round((t[2] / 255) * 100);
        return "rgb(" + n + "%, " + r + "%, " + i + "%)";
      }
      function A(t, e) {
        var n = Math.round((t[0] / 255) * 100),
          r = Math.round((t[1] / 255) * 100),
          i = Math.round((t[2] / 255) * 100);
        return (
          "rgba(" + n + "%, " + r + "%, " + i + "%, " + (e || t[3] || 1) + ")"
        );
      }
      function T(t, e) {
        return e < 1 || (t[3] && t[3] < 1)
          ? O(t, e)
          : "hsl(" + t[0] + ", " + t[1] + "%, " + t[2] + "%)";
      }
      function O(t, e) {
        return (
          void 0 === e && (e = void 0 !== t[3] ? t[3] : 1),
          "hsla(" + t[0] + ", " + t[1] + "%, " + t[2] + "%, " + e + ")"
        );
      }
      function E(t, e) {
        return (
          void 0 === e && (e = void 0 !== t[3] ? t[3] : 1),
          "hwb(" +
            t[0] +
            ", " +
            t[1] +
            "%, " +
            t[2] +
            "%" +
            (void 0 !== e && 1 !== e ? ", " + e : "") +
            ")"
        );
      }
      function P(t) {
        return I[t.slice(0, 3)];
      }
      function L(t, e, n) {
        return Math.min(Math.max(e, t), n);
      }
      function D(t) {
        var e = t.toString(16).toUpperCase();
        return e.length < 2 ? "0" + e : e;
      }
      var I = {};
      for (var N in g) I[g[N]] = N;
      var F = function (t) {
        return t instanceof F
          ? t
          : this instanceof F
          ? ((this.valid = !1),
            (this.values = {
              rgb: [0, 0, 0],
              hsl: [0, 0, 0],
              hsv: [0, 0, 0],
              hwb: [0, 0, 0],
              cmyk: [0, 0, 0, 0],
              alpha: 1,
            }),
            void ("string" === typeof t
              ? ((e = v.getRgba(t)),
                e
                  ? this.setValues("rgb", e)
                  : (e = v.getHsla(t))
                  ? this.setValues("hsl", e)
                  : (e = v.getHwb(t)) && this.setValues("hwb", e))
              : "object" === typeof t &&
                ((e = t),
                void 0 !== e.r || void 0 !== e.red
                  ? this.setValues("rgb", e)
                  : void 0 !== e.l || void 0 !== e.lightness
                  ? this.setValues("hsl", e)
                  : void 0 !== e.v || void 0 !== e.value
                  ? this.setValues("hsv", e)
                  : void 0 !== e.w || void 0 !== e.whiteness
                  ? this.setValues("hwb", e)
                  : (void 0 === e.c && void 0 === e.cyan) ||
                    this.setValues("cmyk", e))))
          : new F(t);
        var e;
      };
      (F.prototype = {
        isValid: function () {
          return this.valid;
        },
        rgb: function () {
          return this.setSpace("rgb", arguments);
        },
        hsl: function () {
          return this.setSpace("hsl", arguments);
        },
        hsv: function () {
          return this.setSpace("hsv", arguments);
        },
        hwb: function () {
          return this.setSpace("hwb", arguments);
        },
        cmyk: function () {
          return this.setSpace("cmyk", arguments);
        },
        rgbArray: function () {
          return this.values.rgb;
        },
        hslArray: function () {
          return this.values.hsl;
        },
        hsvArray: function () {
          return this.values.hsv;
        },
        hwbArray: function () {
          var t = this.values;
          return 1 !== t.alpha ? t.hwb.concat([t.alpha]) : t.hwb;
        },
        cmykArray: function () {
          return this.values.cmyk;
        },
        rgbaArray: function () {
          var t = this.values;
          return t.rgb.concat([t.alpha]);
        },
        hslaArray: function () {
          var t = this.values;
          return t.hsl.concat([t.alpha]);
        },
        alpha: function (t) {
          return void 0 === t
            ? this.values.alpha
            : (this.setValues("alpha", t), this);
        },
        red: function (t) {
          return this.setChannel("rgb", 0, t);
        },
        green: function (t) {
          return this.setChannel("rgb", 1, t);
        },
        blue: function (t) {
          return this.setChannel("rgb", 2, t);
        },
        hue: function (t) {
          return (
            t && ((t %= 360), (t = t < 0 ? 360 + t : t)),
            this.setChannel("hsl", 0, t)
          );
        },
        saturation: function (t) {
          return this.setChannel("hsl", 1, t);
        },
        lightness: function (t) {
          return this.setChannel("hsl", 2, t);
        },
        saturationv: function (t) {
          return this.setChannel("hsv", 1, t);
        },
        whiteness: function (t) {
          return this.setChannel("hwb", 1, t);
        },
        blackness: function (t) {
          return this.setChannel("hwb", 2, t);
        },
        value: function (t) {
          return this.setChannel("hsv", 2, t);
        },
        cyan: function (t) {
          return this.setChannel("cmyk", 0, t);
        },
        magenta: function (t) {
          return this.setChannel("cmyk", 1, t);
        },
        yellow: function (t) {
          return this.setChannel("cmyk", 2, t);
        },
        black: function (t) {
          return this.setChannel("cmyk", 3, t);
        },
        hexString: function () {
          return v.hexString(this.values.rgb);
        },
        rgbString: function () {
          return v.rgbString(this.values.rgb, this.values.alpha);
        },
        rgbaString: function () {
          return v.rgbaString(this.values.rgb, this.values.alpha);
        },
        percentString: function () {
          return v.percentString(this.values.rgb, this.values.alpha);
        },
        hslString: function () {
          return v.hslString(this.values.hsl, this.values.alpha);
        },
        hslaString: function () {
          return v.hslaString(this.values.hsl, this.values.alpha);
        },
        hwbString: function () {
          return v.hwbString(this.values.hwb, this.values.alpha);
        },
        keyword: function () {
          return v.keyword(this.values.rgb, this.values.alpha);
        },
        rgbNumber: function () {
          var t = this.values.rgb;
          return (t[0] << 16) | (t[1] << 8) | t[2];
        },
        luminosity: function () {
          for (var t = this.values.rgb, e = [], n = 0; n < t.length; n++) {
            var r = t[n] / 255;
            e[n] =
              r <= 0.03928 ? r / 12.92 : Math.pow((r + 0.055) / 1.055, 2.4);
          }
          return 0.2126 * e[0] + 0.7152 * e[1] + 0.0722 * e[2];
        },
        contrast: function (t) {
          var e = this.luminosity(),
            n = t.luminosity();
          return e > n ? (e + 0.05) / (n + 0.05) : (n + 0.05) / (e + 0.05);
        },
        level: function (t) {
          var e = this.contrast(t);
          return e >= 7.1 ? "AAA" : e >= 4.5 ? "AA" : "";
        },
        dark: function () {
          var t = this.values.rgb,
            e = (299 * t[0] + 587 * t[1] + 114 * t[2]) / 1e3;
          return e < 128;
        },
        light: function () {
          return !this.dark();
        },
        negate: function () {
          for (var t = [], e = 0; e < 3; e++) t[e] = 255 - this.values.rgb[e];
          return this.setValues("rgb", t), this;
        },
        lighten: function (t) {
          var e = this.values.hsl;
          return (e[2] += e[2] * t), this.setValues("hsl", e), this;
        },
        darken: function (t) {
          var e = this.values.hsl;
          return (e[2] -= e[2] * t), this.setValues("hsl", e), this;
        },
        saturate: function (t) {
          var e = this.values.hsl;
          return (e[1] += e[1] * t), this.setValues("hsl", e), this;
        },
        desaturate: function (t) {
          var e = this.values.hsl;
          return (e[1] -= e[1] * t), this.setValues("hsl", e), this;
        },
        whiten: function (t) {
          var e = this.values.hwb;
          return (e[1] += e[1] * t), this.setValues("hwb", e), this;
        },
        blacken: function (t) {
          var e = this.values.hwb;
          return (e[2] += e[2] * t), this.setValues("hwb", e), this;
        },
        greyscale: function () {
          var t = this.values.rgb,
            e = 0.3 * t[0] + 0.59 * t[1] + 0.11 * t[2];
          return this.setValues("rgb", [e, e, e]), this;
        },
        clearer: function (t) {
          var e = this.values.alpha;
          return this.setValues("alpha", e - e * t), this;
        },
        opaquer: function (t) {
          var e = this.values.alpha;
          return this.setValues("alpha", e + e * t), this;
        },
        rotate: function (t) {
          var e = this.values.hsl,
            n = (e[0] + t) % 360;
          return (e[0] = n < 0 ? 360 + n : n), this.setValues("hsl", e), this;
        },
        mix: function (t, e) {
          var n = this,
            r = t,
            i = void 0 === e ? 0.5 : e,
            o = 2 * i - 1,
            a = n.alpha() - r.alpha(),
            s = ((o * a === -1 ? o : (o + a) / (1 + o * a)) + 1) / 2,
            l = 1 - s;
          return this.rgb(
            s * n.red() + l * r.red(),
            s * n.green() + l * r.green(),
            s * n.blue() + l * r.blue()
          ).alpha(n.alpha() * i + r.alpha() * (1 - i));
        },
        toJSON: function () {
          return this.rgb();
        },
        clone: function () {
          var t,
            e,
            n = new F(),
            r = this.values,
            i = n.values;
          for (var o in r)
            r.hasOwnProperty(o) &&
              ((t = r[o]),
              (e = {}.toString.call(t)),
              "[object Array]" === e
                ? (i[o] = t.slice(0))
                : "[object Number]" === e
                ? (i[o] = t)
                : console.error("unexpected color value:", t));
          return n;
        },
      }),
        (F.prototype.spaces = {
          rgb: ["red", "green", "blue"],
          hsl: ["hue", "saturation", "lightness"],
          hsv: ["hue", "saturation", "value"],
          hwb: ["hue", "whiteness", "blackness"],
          cmyk: ["cyan", "magenta", "yellow", "black"],
        }),
        (F.prototype.maxes = {
          rgb: [255, 255, 255],
          hsl: [360, 100, 100],
          hsv: [360, 100, 100],
          hwb: [360, 100, 100],
          cmyk: [100, 100, 100, 100],
        }),
        (F.prototype.getValues = function (t) {
          for (var e = this.values, n = {}, r = 0; r < t.length; r++)
            n[t.charAt(r)] = e[t][r];
          return 1 !== e.alpha && (n.a = e.alpha), n;
        }),
        (F.prototype.setValues = function (t, e) {
          var n,
            r,
            i = this.values,
            o = this.spaces,
            a = this.maxes,
            s = 1;
          if (((this.valid = !0), "alpha" === t)) s = e;
          else if (e.length) (i[t] = e.slice(0, t.length)), (s = e[t.length]);
          else if (void 0 !== e[t.charAt(0)]) {
            for (n = 0; n < t.length; n++) i[t][n] = e[t.charAt(n)];
            s = e.a;
          } else if (void 0 !== e[o[t][0]]) {
            var l = o[t];
            for (n = 0; n < t.length; n++) i[t][n] = e[l[n]];
            s = e.alpha;
          }
          if (
            ((i.alpha = Math.max(0, Math.min(1, void 0 === s ? i.alpha : s))),
            "alpha" === t)
          )
            return !1;
          for (n = 0; n < t.length; n++)
            (r = Math.max(0, Math.min(a[t][n], i[t][n]))),
              (i[t][n] = Math.round(r));
          for (var c in o) c !== t && (i[c] = p[t][c](i[t]));
          return !0;
        }),
        (F.prototype.setSpace = function (t, e) {
          var n = e[0];
          return void 0 === n
            ? this.getValues(t)
            : ("number" === typeof n && (n = Array.prototype.slice.call(e)),
              this.setValues(t, n),
              this);
        }),
        (F.prototype.setChannel = function (t, e, n) {
          var r = this.values[t];
          return void 0 === n
            ? r[e]
            : (n === r[e] || ((r[e] = n), this.setValues(t, r)), this);
        }),
        "undefined" !== typeof window && (window.Color = F);
      var R = F;
      function j(t) {
        return -1 === ["__proto__", "prototype", "constructor"].indexOf(t);
      }
      var z = {
          noop: function () {},
          uid: (function () {
            var t = 0;
            return function () {
              return t++;
            };
          })(),
          isNullOrUndef: function (t) {
            return null === t || "undefined" === typeof t;
          },
          isArray: function (t) {
            if (Array.isArray && Array.isArray(t)) return !0;
            var e = Object.prototype.toString.call(t);
            return "[object" === e.substr(0, 7) && "Array]" === e.substr(-6);
          },
          isObject: function (t) {
            return (
              null !== t &&
              "[object Object]" === Object.prototype.toString.call(t)
            );
          },
          isFinite: function (t) {
            return (
              ("number" === typeof t || t instanceof Number) && isFinite(t)
            );
          },
          valueOrDefault: function (t, e) {
            return "undefined" === typeof t ? e : t;
          },
          valueAtIndexOrDefault: function (t, e, n) {
            return z.valueOrDefault(z.isArray(t) ? t[e] : t, n);
          },
          callback: function (t, e, n) {
            if (t && "function" === typeof t.call) return t.apply(n, e);
          },
          each: function (t, e, n, r) {
            var i, o, a;
            if (z.isArray(t))
              if (((o = t.length), r))
                for (i = o - 1; i >= 0; i--) e.call(n, t[i], i);
              else for (i = 0; i < o; i++) e.call(n, t[i], i);
            else if (z.isObject(t))
              for (a = Object.keys(t), o = a.length, i = 0; i < o; i++)
                e.call(n, t[a[i]], a[i]);
          },
          arrayEquals: function (t, e) {
            var n, r, i, o;
            if (!t || !e || t.length !== e.length) return !1;
            for (n = 0, r = t.length; n < r; ++n)
              if (
                ((i = t[n]),
                (o = e[n]),
                i instanceof Array && o instanceof Array)
              ) {
                if (!z.arrayEquals(i, o)) return !1;
              } else if (i !== o) return !1;
            return !0;
          },
          clone: function (t) {
            if (z.isArray(t)) return t.map(z.clone);
            if (z.isObject(t)) {
              for (
                var e = Object.create(t),
                  n = Object.keys(t),
                  r = n.length,
                  i = 0;
                i < r;
                ++i
              )
                e[n[i]] = z.clone(t[n[i]]);
              return e;
            }
            return t;
          },
          _merger: function (t, e, n, r) {
            if (j(t)) {
              var i = e[t],
                o = n[t];
              z.isObject(i) && z.isObject(o)
                ? z.merge(i, o, r)
                : (e[t] = z.clone(o));
            }
          },
          _mergerIf: function (t, e, n) {
            if (j(t)) {
              var r = e[t],
                i = n[t];
              z.isObject(r) && z.isObject(i)
                ? z.mergeIf(r, i)
                : e.hasOwnProperty(t) || (e[t] = z.clone(i));
            }
          },
          merge: function (t, e, n) {
            var r,
              i,
              o,
              a,
              s,
              l = z.isArray(e) ? e : [e],
              c = l.length;
            if (!z.isObject(t)) return t;
            for (n = n || {}, r = n.merger || z._merger, i = 0; i < c; ++i)
              if (((e = l[i]), z.isObject(e)))
                for (o = Object.keys(e), s = 0, a = o.length; s < a; ++s)
                  r(o[s], t, e, n);
            return t;
          },
          mergeIf: function (t, e) {
            return z.merge(t, e, { merger: z._mergerIf });
          },
          extend:
            Object.assign ||
            function (t) {
              return z.merge(t, [].slice.call(arguments, 1), {
                merger: function (t, e, n) {
                  e[t] = n[t];
                },
              });
            },
          inherits: function (t) {
            var e = this,
              n =
                t && t.hasOwnProperty("constructor")
                  ? t.constructor
                  : function () {
                      return e.apply(this, arguments);
                    },
              r = function () {
                this.constructor = n;
              };
            return (
              (r.prototype = e.prototype),
              (n.prototype = new r()),
              (n.extend = z.inherits),
              t && z.extend(n.prototype, t),
              (n.__super__ = e.prototype),
              n
            );
          },
          _deprecated: function (t, e, n, r) {
            void 0 !== e &&
              console.warn(
                t +
                  ': "' +
                  n +
                  '" is deprecated. Please use "' +
                  r +
                  '" instead'
              );
          },
        },
        H = z;
      (z.callCallback = z.callback),
        (z.indexOf = function (t, e, n) {
          return Array.prototype.indexOf.call(t, e, n);
        }),
        (z.getValueOrDefault = z.valueOrDefault),
        (z.getValueAtIndexOrDefault = z.valueAtIndexOrDefault);
      var B = {
          linear: function (t) {
            return t;
          },
          easeInQuad: function (t) {
            return t * t;
          },
          easeOutQuad: function (t) {
            return -t * (t - 2);
          },
          easeInOutQuad: function (t) {
            return (t /= 0.5) < 1 ? 0.5 * t * t : -0.5 * (--t * (t - 2) - 1);
          },
          easeInCubic: function (t) {
            return t * t * t;
          },
          easeOutCubic: function (t) {
            return (t -= 1) * t * t + 1;
          },
          easeInOutCubic: function (t) {
            return (t /= 0.5) < 1
              ? 0.5 * t * t * t
              : 0.5 * ((t -= 2) * t * t + 2);
          },
          easeInQuart: function (t) {
            return t * t * t * t;
          },
          easeOutQuart: function (t) {
            return -((t -= 1) * t * t * t - 1);
          },
          easeInOutQuart: function (t) {
            return (t /= 0.5) < 1
              ? 0.5 * t * t * t * t
              : -0.5 * ((t -= 2) * t * t * t - 2);
          },
          easeInQuint: function (t) {
            return t * t * t * t * t;
          },
          easeOutQuint: function (t) {
            return (t -= 1) * t * t * t * t + 1;
          },
          easeInOutQuint: function (t) {
            return (t /= 0.5) < 1
              ? 0.5 * t * t * t * t * t
              : 0.5 * ((t -= 2) * t * t * t * t + 2);
          },
          easeInSine: function (t) {
            return 1 - Math.cos(t * (Math.PI / 2));
          },
          easeOutSine: function (t) {
            return Math.sin(t * (Math.PI / 2));
          },
          easeInOutSine: function (t) {
            return -0.5 * (Math.cos(Math.PI * t) - 1);
          },
          easeInExpo: function (t) {
            return 0 === t ? 0 : Math.pow(2, 10 * (t - 1));
          },
          easeOutExpo: function (t) {
            return 1 === t ? 1 : 1 - Math.pow(2, -10 * t);
          },
          easeInOutExpo: function (t) {
            return 0 === t
              ? 0
              : 1 === t
              ? 1
              : (t /= 0.5) < 1
              ? 0.5 * Math.pow(2, 10 * (t - 1))
              : 0.5 * (2 - Math.pow(2, -10 * --t));
          },
          easeInCirc: function (t) {
            return t >= 1 ? t : -(Math.sqrt(1 - t * t) - 1);
          },
          easeOutCirc: function (t) {
            return Math.sqrt(1 - (t -= 1) * t);
          },
          easeInOutCirc: function (t) {
            return (t /= 0.5) < 1
              ? -0.5 * (Math.sqrt(1 - t * t) - 1)
              : 0.5 * (Math.sqrt(1 - (t -= 2) * t) + 1);
          },
          easeInElastic: function (t) {
            var e = 1.70158,
              n = 0,
              r = 1;
            return 0 === t
              ? 0
              : 1 === t
              ? 1
              : (n || (n = 0.3),
                r < 1
                  ? ((r = 1), (e = n / 4))
                  : (e = (n / (2 * Math.PI)) * Math.asin(1 / r)),
                -r *
                  Math.pow(2, 10 * (t -= 1)) *
                  Math.sin(((t - e) * (2 * Math.PI)) / n));
          },
          easeOutElastic: function (t) {
            var e = 1.70158,
              n = 0,
              r = 1;
            return 0 === t
              ? 0
              : 1 === t
              ? 1
              : (n || (n = 0.3),
                r < 1
                  ? ((r = 1), (e = n / 4))
                  : (e = (n / (2 * Math.PI)) * Math.asin(1 / r)),
                r *
                  Math.pow(2, -10 * t) *
                  Math.sin(((t - e) * (2 * Math.PI)) / n) +
                  1);
          },
          easeInOutElastic: function (t) {
            var e = 1.70158,
              n = 0,
              r = 1;
            return 0 === t
              ? 0
              : 2 === (t /= 0.5)
              ? 1
              : (n || (n = 0.45),
                r < 1
                  ? ((r = 1), (e = n / 4))
                  : (e = (n / (2 * Math.PI)) * Math.asin(1 / r)),
                t < 1
                  ? r *
                    Math.pow(2, 10 * (t -= 1)) *
                    Math.sin(((t - e) * (2 * Math.PI)) / n) *
                    -0.5
                  : r *
                      Math.pow(2, -10 * (t -= 1)) *
                      Math.sin(((t - e) * (2 * Math.PI)) / n) *
                      0.5 +
                    1);
          },
          easeInBack: function (t) {
            var e = 1.70158;
            return t * t * ((e + 1) * t - e);
          },
          easeOutBack: function (t) {
            var e = 1.70158;
            return (t -= 1) * t * ((e + 1) * t + e) + 1;
          },
          easeInOutBack: function (t) {
            var e = 1.70158;
            return (t /= 0.5) < 1
              ? t * t * ((1 + (e *= 1.525)) * t - e) * 0.5
              : 0.5 * ((t -= 2) * t * ((1 + (e *= 1.525)) * t + e) + 2);
          },
          easeInBounce: function (t) {
            return 1 - B.easeOutBounce(1 - t);
          },
          easeOutBounce: function (t) {
            return t < 1 / 2.75
              ? 7.5625 * t * t
              : t < 2 / 2.75
              ? 7.5625 * (t -= 1.5 / 2.75) * t + 0.75
              : t < 2.5 / 2.75
              ? 7.5625 * (t -= 2.25 / 2.75) * t + 0.9375
              : 7.5625 * (t -= 2.625 / 2.75) * t + 0.984375;
          },
          easeInOutBounce: function (t) {
            return t < 0.5
              ? 0.5 * B.easeInBounce(2 * t)
              : 0.5 * B.easeOutBounce(2 * t - 1) + 0.5;
          },
        },
        V = { effects: B };
      H.easingEffects = B;
      var $ = Math.PI,
        W = $ / 180,
        U = 2 * $,
        q = $ / 2,
        Y = $ / 4,
        G = (2 * $) / 3,
        X = {
          clear: function (t) {
            t.ctx.clearRect(0, 0, t.width, t.height);
          },
          roundedRect: function (t, e, n, r, i, o) {
            if (o) {
              var a = Math.min(o, i / 2, r / 2),
                s = e + a,
                l = n + a,
                c = e + r - a,
                u = n + i - a;
              t.moveTo(e, l),
                s < c && l < u
                  ? (t.arc(s, l, a, -$, -q),
                    t.arc(c, l, a, -q, 0),
                    t.arc(c, u, a, 0, q),
                    t.arc(s, u, a, q, $))
                  : s < c
                  ? (t.moveTo(s, n),
                    t.arc(c, l, a, -q, q),
                    t.arc(s, l, a, q, $ + q))
                  : l < u
                  ? (t.arc(s, l, a, -$, 0), t.arc(s, u, a, 0, $))
                  : t.arc(s, l, a, -$, $),
                t.closePath(),
                t.moveTo(e, n);
            } else t.rect(e, n, r, i);
          },
          drawPoint: function (t, e, n, r, i, o) {
            var a,
              s,
              l,
              c,
              u,
              d = (o || 0) * W;
            if (
              e &&
              "object" === typeof e &&
              ((a = e.toString()),
              "[object HTMLImageElement]" === a ||
                "[object HTMLCanvasElement]" === a)
            )
              return (
                t.save(),
                t.translate(r, i),
                t.rotate(d),
                t.drawImage(e, -e.width / 2, -e.height / 2, e.width, e.height),
                void t.restore()
              );
            if (!(isNaN(n) || n <= 0)) {
              switch ((t.beginPath(), e)) {
                default:
                  t.arc(r, i, n, 0, U), t.closePath();
                  break;
                case "triangle":
                  t.moveTo(r + Math.sin(d) * n, i - Math.cos(d) * n),
                    (d += G),
                    t.lineTo(r + Math.sin(d) * n, i - Math.cos(d) * n),
                    (d += G),
                    t.lineTo(r + Math.sin(d) * n, i - Math.cos(d) * n),
                    t.closePath();
                  break;
                case "rectRounded":
                  (u = 0.516 * n),
                    (c = n - u),
                    (s = Math.cos(d + Y) * c),
                    (l = Math.sin(d + Y) * c),
                    t.arc(r - s, i - l, u, d - $, d - q),
                    t.arc(r + l, i - s, u, d - q, d),
                    t.arc(r + s, i + l, u, d, d + q),
                    t.arc(r - l, i + s, u, d + q, d + $),
                    t.closePath();
                  break;
                case "rect":
                  if (!o) {
                    (c = Math.SQRT1_2 * n), t.rect(r - c, i - c, 2 * c, 2 * c);
                    break;
                  }
                  d += Y;
                case "rectRot":
                  (s = Math.cos(d) * n),
                    (l = Math.sin(d) * n),
                    t.moveTo(r - s, i - l),
                    t.lineTo(r + l, i - s),
                    t.lineTo(r + s, i + l),
                    t.lineTo(r - l, i + s),
                    t.closePath();
                  break;
                case "crossRot":
                  d += Y;
                case "cross":
                  (s = Math.cos(d) * n),
                    (l = Math.sin(d) * n),
                    t.moveTo(r - s, i - l),
                    t.lineTo(r + s, i + l),
                    t.moveTo(r + l, i - s),
                    t.lineTo(r - l, i + s);
                  break;
                case "star":
                  (s = Math.cos(d) * n),
                    (l = Math.sin(d) * n),
                    t.moveTo(r - s, i - l),
                    t.lineTo(r + s, i + l),
                    t.moveTo(r + l, i - s),
                    t.lineTo(r - l, i + s),
                    (d += Y),
                    (s = Math.cos(d) * n),
                    (l = Math.sin(d) * n),
                    t.moveTo(r - s, i - l),
                    t.lineTo(r + s, i + l),
                    t.moveTo(r + l, i - s),
                    t.lineTo(r - l, i + s);
                  break;
                case "line":
                  (s = Math.cos(d) * n),
                    (l = Math.sin(d) * n),
                    t.moveTo(r - s, i - l),
                    t.lineTo(r + s, i + l);
                  break;
                case "dash":
                  t.moveTo(r, i),
                    t.lineTo(r + Math.cos(d) * n, i + Math.sin(d) * n);
                  break;
              }
              t.fill(), t.stroke();
            }
          },
          _isPointInArea: function (t, e) {
            var n = 1e-6;
            return (
              t.x > e.left - n &&
              t.x < e.right + n &&
              t.y > e.top - n &&
              t.y < e.bottom + n
            );
          },
          clipArea: function (t, e) {
            t.save(),
              t.beginPath(),
              t.rect(e.left, e.top, e.right - e.left, e.bottom - e.top),
              t.clip();
          },
          unclipArea: function (t) {
            t.restore();
          },
          lineTo: function (t, e, n, r) {
            var i = n.steppedLine;
            if (i) {
              if ("middle" === i) {
                var o = (e.x + n.x) / 2;
                t.lineTo(o, r ? n.y : e.y), t.lineTo(o, r ? e.y : n.y);
              } else
                ("after" === i && !r) || ("after" !== i && r)
                  ? t.lineTo(e.x, n.y)
                  : t.lineTo(n.x, e.y);
              t.lineTo(n.x, n.y);
            } else
              n.tension
                ? t.bezierCurveTo(
                    r ? e.controlPointPreviousX : e.controlPointNextX,
                    r ? e.controlPointPreviousY : e.controlPointNextY,
                    r ? n.controlPointNextX : n.controlPointPreviousX,
                    r ? n.controlPointNextY : n.controlPointPreviousY,
                    n.x,
                    n.y
                  )
                : t.lineTo(n.x, n.y);
          },
        },
        K = X;
      (H.clear = X.clear),
        (H.drawRoundedRectangle = function (t) {
          t.beginPath(), X.roundedRect.apply(X, arguments);
        });
      var Z = {
        _set: function (t, e) {
          return H.merge(this[t] || (this[t] = {}), e);
        },
      };
      Z._set("global", {
        defaultColor: "rgba(0,0,0,0.1)",
        defaultFontColor: "#666",
        defaultFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
        defaultFontSize: 12,
        defaultFontStyle: "normal",
        defaultLineHeight: 1.2,
        showLines: !0,
      });
      var J = Z,
        Q = H.valueOrDefault;
      function tt(t) {
        return !t || H.isNullOrUndef(t.size) || H.isNullOrUndef(t.family)
          ? null
          : (t.style ? t.style + " " : "") +
              (t.weight ? t.weight + " " : "") +
              t.size +
              "px " +
              t.family;
      }
      var et = {
          toLineHeight: function (t, e) {
            var n = ("" + t).match(/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/);
            if (!n || "normal" === n[1]) return 1.2 * e;
            switch (((t = +n[2]), n[3])) {
              case "px":
                return t;
              case "%":
                t /= 100;
                break;
            }
            return e * t;
          },
          toPadding: function (t) {
            var e, n, r, i;
            return (
              H.isObject(t)
                ? ((e = +t.top || 0),
                  (n = +t.right || 0),
                  (r = +t.bottom || 0),
                  (i = +t.left || 0))
                : (e = n = r = i = +t || 0),
              {
                top: e,
                right: n,
                bottom: r,
                left: i,
                height: e + r,
                width: i + n,
              }
            );
          },
          _parseFont: function (t) {
            var e = J.global,
              n = Q(t.fontSize, e.defaultFontSize),
              r = {
                family: Q(t.fontFamily, e.defaultFontFamily),
                lineHeight: H.options.toLineHeight(
                  Q(t.lineHeight, e.defaultLineHeight),
                  n
                ),
                size: n,
                style: Q(t.fontStyle, e.defaultFontStyle),
                weight: null,
                string: "",
              };
            return (r.string = tt(r)), r;
          },
          resolve: function (t, e, n, r) {
            var i,
              o,
              a,
              s = !0;
            for (i = 0, o = t.length; i < o; ++i)
              if (
                ((a = t[i]),
                void 0 !== a &&
                  (void 0 !== e &&
                    "function" === typeof a &&
                    ((a = a(e)), (s = !1)),
                  void 0 !== n && H.isArray(a) && ((a = a[n]), (s = !1)),
                  void 0 !== a))
              )
                return r && !s && (r.cacheable = !1), a;
          },
        },
        nt = {
          _factorize: function (t) {
            var e,
              n = [],
              r = Math.sqrt(t);
            for (e = 1; e < r; e++) t % e === 0 && (n.push(e), n.push(t / e));
            return (
              r === (0 | r) && n.push(r),
              n
                .sort(function (t, e) {
                  return t - e;
                })
                .pop(),
              n
            );
          },
          log10:
            Math.log10 ||
            function (t) {
              var e = Math.log(t) * Math.LOG10E,
                n = Math.round(e),
                r = t === Math.pow(10, n);
              return r ? n : e;
            },
        },
        rt = nt;
      H.log10 = nt.log10;
      var it = function (t, e) {
          return {
            x: function (n) {
              return t + t + e - n;
            },
            setWidth: function (t) {
              e = t;
            },
            textAlign: function (t) {
              return "center" === t ? t : "right" === t ? "left" : "right";
            },
            xPlus: function (t, e) {
              return t - e;
            },
            leftForLtr: function (t, e) {
              return t - e;
            },
          };
        },
        ot = function () {
          return {
            x: function (t) {
              return t;
            },
            setWidth: function (t) {},
            textAlign: function (t) {
              return t;
            },
            xPlus: function (t, e) {
              return t + e;
            },
            leftForLtr: function (t, e) {
              return t;
            },
          };
        },
        at = function (t, e, n) {
          return t ? it(e, n) : ot();
        },
        st = function (t, e) {
          var n, r;
          ("ltr" !== e && "rtl" !== e) ||
            ((n = t.canvas.style),
            (r = [
              n.getPropertyValue("direction"),
              n.getPropertyPriority("direction"),
            ]),
            n.setProperty("direction", e, "important"),
            (t.prevTextDirection = r));
        },
        lt = function (t) {
          var e = t.prevTextDirection;
          void 0 !== e &&
            (delete t.prevTextDirection,
            t.canvas.style.setProperty("direction", e[0], e[1]));
        },
        ct = {
          getRtlAdapter: at,
          overrideTextDirection: st,
          restoreTextDirection: lt,
        },
        ut = H,
        dt = V,
        ft = K,
        ht = et,
        pt = rt,
        gt = ct;
      function vt(t, e, n, r) {
        var i,
          o,
          a,
          s,
          l,
          c,
          u,
          d,
          f,
          h = Object.keys(n);
        for (i = 0, o = h.length; i < o; ++i)
          if (
            ((a = h[i]),
            (c = n[a]),
            e.hasOwnProperty(a) || (e[a] = c),
            (s = e[a]),
            s !== c && "_" !== a[0])
          ) {
            if (
              (t.hasOwnProperty(a) || (t[a] = s),
              (l = t[a]),
              (u = typeof c),
              u === typeof l)
            )
              if ("string" === u) {
                if (((d = R(l)), d.valid && ((f = R(c)), f.valid))) {
                  e[a] = f.mix(d, r).rgbString();
                  continue;
                }
              } else if (ut.isFinite(l) && ut.isFinite(c)) {
                e[a] = l + (c - l) * r;
                continue;
              }
            e[a] = c;
          }
      }
      (ut.easing = dt),
        (ut.canvas = ft),
        (ut.options = ht),
        (ut.math = pt),
        (ut.rtl = gt);
      var mt = function (t) {
        ut.extend(this, t), this.initialize.apply(this, arguments);
      };
      ut.extend(mt.prototype, {
        _type: void 0,
        initialize: function () {
          this.hidden = !1;
        },
        pivot: function () {
          var t = this;
          return (
            t._view || (t._view = ut.extend({}, t._model)), (t._start = {}), t
          );
        },
        transition: function (t) {
          var e = this,
            n = e._model,
            r = e._start,
            i = e._view;
          return n && 1 !== t
            ? (i || (i = e._view = {}),
              r || (r = e._start = {}),
              vt(r, i, n, t),
              e)
            : ((e._view = ut.extend({}, n)), (e._start = null), e);
        },
        tooltipPosition: function () {
          return { x: this._model.x, y: this._model.y };
        },
        hasValue: function () {
          return ut.isNumber(this._model.x) && ut.isNumber(this._model.y);
        },
      }),
        (mt.extend = ut.inherits);
      var bt = mt,
        yt = bt.extend({
          chart: null,
          currentStep: 0,
          numSteps: 60,
          easing: "",
          render: null,
          onAnimationProgress: null,
          onAnimationComplete: null,
        }),
        xt = yt;
      Object.defineProperty(yt.prototype, "animationObject", {
        get: function () {
          return this;
        },
      }),
        Object.defineProperty(yt.prototype, "chartInstance", {
          get: function () {
            return this.chart;
          },
          set: function (t) {
            this.chart = t;
          },
        }),
        J._set("global", {
          animation: {
            duration: 1e3,
            easing: "easeOutQuart",
            onProgress: ut.noop,
            onComplete: ut.noop,
          },
        });
      var _t = {
          animations: [],
          request: null,
          addAnimation: function (t, e, n, r) {
            var i,
              o,
              a = this.animations;
            for (
              e.chart = t,
                e.startTime = Date.now(),
                e.duration = n,
                r || (t.animating = !0),
                i = 0,
                o = a.length;
              i < o;
              ++i
            )
              if (a[i].chart === t) return void (a[i] = e);
            a.push(e), 1 === a.length && this.requestAnimationFrame();
          },
          cancelAnimation: function (t) {
            var e = ut.findIndex(this.animations, function (e) {
              return e.chart === t;
            });
            -1 !== e && (this.animations.splice(e, 1), (t.animating = !1));
          },
          requestAnimationFrame: function () {
            var t = this;
            null === t.request &&
              (t.request = ut.requestAnimFrame.call(window, function () {
                (t.request = null), t.startDigest();
              }));
          },
          startDigest: function () {
            var t = this;
            t.advance(), t.animations.length > 0 && t.requestAnimationFrame();
          },
          advance: function () {
            var t,
              e,
              n,
              r,
              i = this.animations,
              o = 0;
            while (o < i.length)
              (t = i[o]),
                (e = t.chart),
                (n = t.numSteps),
                (r =
                  Math.floor(((Date.now() - t.startTime) / t.duration) * n) +
                  1),
                (t.currentStep = Math.min(r, n)),
                ut.callback(t.render, [e, t], e),
                ut.callback(t.onAnimationProgress, [t], e),
                t.currentStep >= n
                  ? (ut.callback(t.onAnimationComplete, [t], e),
                    (e.animating = !1),
                    i.splice(o, 1))
                  : ++o;
          },
        },
        wt = ut.options.resolve,
        kt = ["push", "pop", "shift", "splice", "unshift"];
      function Ct(t, e) {
        t._chartjs
          ? t._chartjs.listeners.push(e)
          : (Object.defineProperty(t, "_chartjs", {
              configurable: !0,
              enumerable: !1,
              value: { listeners: [e] },
            }),
            kt.forEach(function (e) {
              var n = "onData" + e.charAt(0).toUpperCase() + e.slice(1),
                r = t[e];
              Object.defineProperty(t, e, {
                configurable: !0,
                enumerable: !1,
                value: function () {
                  var e = Array.prototype.slice.call(arguments),
                    i = r.apply(this, e);
                  return (
                    ut.each(t._chartjs.listeners, function (t) {
                      "function" === typeof t[n] && t[n].apply(t, e);
                    }),
                    i
                  );
                },
              });
            }));
      }
      function Mt(t, e) {
        var n = t._chartjs;
        if (n) {
          var r = n.listeners,
            i = r.indexOf(e);
          -1 !== i && r.splice(i, 1),
            r.length > 0 ||
              (kt.forEach(function (e) {
                delete t[e];
              }),
              delete t._chartjs);
        }
      }
      var St = function (t, e) {
        this.initialize(t, e);
      };
      ut.extend(St.prototype, {
        datasetElementType: null,
        dataElementType: null,
        _datasetElementOptions: [
          "backgroundColor",
          "borderCapStyle",
          "borderColor",
          "borderDash",
          "borderDashOffset",
          "borderJoinStyle",
          "borderWidth",
        ],
        _dataElementOptions: [
          "backgroundColor",
          "borderColor",
          "borderWidth",
          "pointStyle",
        ],
        initialize: function (t, e) {
          var n = this;
          (n.chart = t),
            (n.index = e),
            n.linkScales(),
            n.addElements(),
            (n._type = n.getMeta().type);
        },
        updateIndex: function (t) {
          this.index = t;
        },
        linkScales: function () {
          var t = this,
            e = t.getMeta(),
            n = t.chart,
            r = n.scales,
            i = t.getDataset(),
            o = n.options.scales;
          (null !== e.xAxisID && e.xAxisID in r && !i.xAxisID) ||
            (e.xAxisID = i.xAxisID || o.xAxes[0].id),
            (null !== e.yAxisID && e.yAxisID in r && !i.yAxisID) ||
              (e.yAxisID = i.yAxisID || o.yAxes[0].id);
        },
        getDataset: function () {
          return this.chart.data.datasets[this.index];
        },
        getMeta: function () {
          return this.chart.getDatasetMeta(this.index);
        },
        getScaleForId: function (t) {
          return this.chart.scales[t];
        },
        _getValueScaleId: function () {
          return this.getMeta().yAxisID;
        },
        _getIndexScaleId: function () {
          return this.getMeta().xAxisID;
        },
        _getValueScale: function () {
          return this.getScaleForId(this._getValueScaleId());
        },
        _getIndexScale: function () {
          return this.getScaleForId(this._getIndexScaleId());
        },
        reset: function () {
          this._update(!0);
        },
        destroy: function () {
          this._data && Mt(this._data, this);
        },
        createMetaDataset: function () {
          var t = this,
            e = t.datasetElementType;
          return e && new e({ _chart: t.chart, _datasetIndex: t.index });
        },
        createMetaData: function (t) {
          var e = this,
            n = e.dataElementType;
          return (
            n && new n({ _chart: e.chart, _datasetIndex: e.index, _index: t })
          );
        },
        addElements: function () {
          var t,
            e,
            n = this,
            r = n.getMeta(),
            i = n.getDataset().data || [],
            o = r.data;
          for (t = 0, e = i.length; t < e; ++t)
            o[t] = o[t] || n.createMetaData(t);
          r.dataset = r.dataset || n.createMetaDataset();
        },
        addElementAndReset: function (t) {
          var e = this.createMetaData(t);
          this.getMeta().data.splice(t, 0, e), this.updateElement(e, t, !0);
        },
        buildOrUpdateElements: function () {
          var t = this,
            e = t.getDataset(),
            n = e.data || (e.data = []);
          t._data !== n &&
            (t._data && Mt(t._data, t),
            n && Object.isExtensible(n) && Ct(n, t),
            (t._data = n)),
            t.resyncElements();
        },
        _configure: function () {
          var t = this;
          t._config = ut.merge(
            Object.create(null),
            [t.chart.options.datasets[t._type], t.getDataset()],
            {
              merger: function (t, e, n) {
                "_meta" !== t && "data" !== t && ut._merger(t, e, n);
              },
            }
          );
        },
        _update: function (t) {
          var e = this;
          e._configure(), (e._cachedDataOpts = null), e.update(t);
        },
        update: ut.noop,
        transition: function (t) {
          for (
            var e = this.getMeta(), n = e.data || [], r = n.length, i = 0;
            i < r;
            ++i
          )
            n[i].transition(t);
          e.dataset && e.dataset.transition(t);
        },
        draw: function () {
          var t = this.getMeta(),
            e = t.data || [],
            n = e.length,
            r = 0;
          for (t.dataset && t.dataset.draw(); r < n; ++r) e[r].draw();
        },
        getStyle: function (t) {
          var e,
            n = this,
            r = n.getMeta(),
            i = r.dataset;
          return (
            n._configure(),
            i && void 0 === t
              ? (e = n._resolveDatasetElementOptions(i || {}))
              : ((t = t || 0),
                (e = n._resolveDataElementOptions(r.data[t] || {}, t))),
            (!1 !== e.fill && null !== e.fill) ||
              (e.backgroundColor = e.borderColor),
            e
          );
        },
        _resolveDatasetElementOptions: function (t, e) {
          var n,
            r,
            i,
            o,
            a = this,
            s = a.chart,
            l = a._config,
            c = t.custom || {},
            u = s.options.elements[a.datasetElementType.prototype._type] || {},
            d = a._datasetElementOptions,
            f = {},
            h = {
              chart: s,
              dataset: a.getDataset(),
              datasetIndex: a.index,
              hover: e,
            };
          for (n = 0, r = d.length; n < r; ++n)
            (i = d[n]),
              (o = e ? "hover" + i.charAt(0).toUpperCase() + i.slice(1) : i),
              (f[i] = wt([c[o], l[o], u[o]], h));
          return f;
        },
        _resolveDataElementOptions: function (t, e) {
          var n = this,
            r = t && t.custom,
            i = n._cachedDataOpts;
          if (i && !r) return i;
          var o,
            a,
            s,
            l,
            c = n.chart,
            u = n._config,
            d = c.options.elements[n.dataElementType.prototype._type] || {},
            f = n._dataElementOptions,
            h = {},
            p = {
              chart: c,
              dataIndex: e,
              dataset: n.getDataset(),
              datasetIndex: n.index,
            },
            g = { cacheable: !r };
          if (((r = r || {}), ut.isArray(f)))
            for (a = 0, s = f.length; a < s; ++a)
              (l = f[a]), (h[l] = wt([r[l], u[l], d[l]], p, e, g));
          else
            for (o = Object.keys(f), a = 0, s = o.length; a < s; ++a)
              (l = o[a]), (h[l] = wt([r[l], u[f[l]], u[l], d[l]], p, e, g));
          return g.cacheable && (n._cachedDataOpts = Object.freeze(h)), h;
        },
        removeHoverStyle: function (t) {
          ut.merge(t._model, t.$previousStyle || {}), delete t.$previousStyle;
        },
        setHoverStyle: function (t) {
          var e = this.chart.data.datasets[t._datasetIndex],
            n = t._index,
            r = t.custom || {},
            i = t._model,
            o = ut.getHoverColor;
          (t.$previousStyle = {
            backgroundColor: i.backgroundColor,
            borderColor: i.borderColor,
            borderWidth: i.borderWidth,
          }),
            (i.backgroundColor = wt(
              [
                r.hoverBackgroundColor,
                e.hoverBackgroundColor,
                o(i.backgroundColor),
              ],
              void 0,
              n
            )),
            (i.borderColor = wt(
              [r.hoverBorderColor, e.hoverBorderColor, o(i.borderColor)],
              void 0,
              n
            )),
            (i.borderWidth = wt(
              [r.hoverBorderWidth, e.hoverBorderWidth, i.borderWidth],
              void 0,
              n
            ));
        },
        _removeDatasetHoverStyle: function () {
          var t = this.getMeta().dataset;
          t && this.removeHoverStyle(t);
        },
        _setDatasetHoverStyle: function () {
          var t,
            e,
            n,
            r,
            i,
            o,
            a = this.getMeta().dataset,
            s = {};
          if (a) {
            for (
              o = a._model,
                i = this._resolveDatasetElementOptions(a, !0),
                r = Object.keys(i),
                t = 0,
                e = r.length;
              t < e;
              ++t
            )
              (n = r[t]), (s[n] = o[n]), (o[n] = i[n]);
            a.$previousStyle = s;
          }
        },
        resyncElements: function () {
          var t = this,
            e = t.getMeta(),
            n = t.getDataset().data,
            r = e.data.length,
            i = n.length;
          i < r ? e.data.splice(i, r - i) : i > r && t.insertElements(r, i - r);
        },
        insertElements: function (t, e) {
          for (var n = 0; n < e; ++n) this.addElementAndReset(t + n);
        },
        onDataPush: function () {
          var t = arguments.length;
          this.insertElements(this.getDataset().data.length - t, t);
        },
        onDataPop: function () {
          this.getMeta().data.pop();
        },
        onDataShift: function () {
          this.getMeta().data.shift();
        },
        onDataSplice: function (t, e) {
          this.getMeta().data.splice(t, e),
            this.insertElements(t, arguments.length - 2);
        },
        onDataUnshift: function () {
          this.insertElements(0, arguments.length);
        },
      }),
        (St.extend = ut.inherits);
      var At = St,
        Tt = 2 * Math.PI;
      function Ot(t, e) {
        var n = e.startAngle,
          r = e.endAngle,
          i = e.pixelMargin,
          o = i / e.outerRadius,
          a = e.x,
          s = e.y;
        t.beginPath(),
          t.arc(a, s, e.outerRadius, n - o, r + o),
          e.innerRadius > i
            ? ((o = i / e.innerRadius),
              t.arc(a, s, e.innerRadius - i, r + o, n - o, !0))
            : t.arc(a, s, i, r + Math.PI / 2, n - Math.PI / 2),
          t.closePath(),
          t.clip();
      }
      function Et(t, e, n, r) {
        var i,
          o = n.endAngle;
        for (
          r &&
            ((n.endAngle = n.startAngle + Tt),
            Ot(t, n),
            (n.endAngle = o),
            n.endAngle === n.startAngle &&
              n.fullCircles &&
              ((n.endAngle += Tt), n.fullCircles--)),
            t.beginPath(),
            t.arc(n.x, n.y, n.innerRadius, n.startAngle + Tt, n.startAngle, !0),
            i = 0;
          i < n.fullCircles;
          ++i
        )
          t.stroke();
        for (
          t.beginPath(),
            t.arc(n.x, n.y, e.outerRadius, n.startAngle, n.startAngle + Tt),
            i = 0;
          i < n.fullCircles;
          ++i
        )
          t.stroke();
      }
      function Pt(t, e, n) {
        var r = "inner" === e.borderAlign;
        r
          ? ((t.lineWidth = 2 * e.borderWidth), (t.lineJoin = "round"))
          : ((t.lineWidth = e.borderWidth), (t.lineJoin = "bevel")),
          n.fullCircles && Et(t, e, n, r),
          r && Ot(t, n),
          t.beginPath(),
          t.arc(n.x, n.y, e.outerRadius, n.startAngle, n.endAngle),
          t.arc(n.x, n.y, n.innerRadius, n.endAngle, n.startAngle, !0),
          t.closePath(),
          t.stroke();
      }
      J._set("global", {
        elements: {
          arc: {
            backgroundColor: J.global.defaultColor,
            borderColor: "#fff",
            borderWidth: 2,
            borderAlign: "center",
          },
        },
      });
      var Lt = bt.extend({
          _type: "arc",
          inLabelRange: function (t) {
            var e = this._view;
            return (
              !!e &&
              Math.pow(t - e.x, 2) < Math.pow(e.radius + e.hoverRadius, 2)
            );
          },
          inRange: function (t, e) {
            var n = this._view;
            if (n) {
              var r = ut.getAngleFromPoint(n, { x: t, y: e }),
                i = r.angle,
                o = r.distance,
                a = n.startAngle,
                s = n.endAngle;
              while (s < a) s += Tt;
              while (i > s) i -= Tt;
              while (i < a) i += Tt;
              var l = i >= a && i <= s,
                c = o >= n.innerRadius && o <= n.outerRadius;
              return l && c;
            }
            return !1;
          },
          getCenterPoint: function () {
            var t = this._view,
              e = (t.startAngle + t.endAngle) / 2,
              n = (t.innerRadius + t.outerRadius) / 2;
            return { x: t.x + Math.cos(e) * n, y: t.y + Math.sin(e) * n };
          },
          getArea: function () {
            var t = this._view;
            return (
              Math.PI *
              ((t.endAngle - t.startAngle) / (2 * Math.PI)) *
              (Math.pow(t.outerRadius, 2) - Math.pow(t.innerRadius, 2))
            );
          },
          tooltipPosition: function () {
            var t = this._view,
              e = t.startAngle + (t.endAngle - t.startAngle) / 2,
              n = (t.outerRadius - t.innerRadius) / 2 + t.innerRadius;
            return { x: t.x + Math.cos(e) * n, y: t.y + Math.sin(e) * n };
          },
          draw: function () {
            var t,
              e = this._chart.ctx,
              n = this._view,
              r = "inner" === n.borderAlign ? 0.33 : 0,
              i = {
                x: n.x,
                y: n.y,
                innerRadius: n.innerRadius,
                outerRadius: Math.max(n.outerRadius - r, 0),
                pixelMargin: r,
                startAngle: n.startAngle,
                endAngle: n.endAngle,
                fullCircles: Math.floor(n.circumference / Tt),
              };
            if (
              (e.save(),
              (e.fillStyle = n.backgroundColor),
              (e.strokeStyle = n.borderColor),
              i.fullCircles)
            ) {
              for (
                i.endAngle = i.startAngle + Tt,
                  e.beginPath(),
                  e.arc(i.x, i.y, i.outerRadius, i.startAngle, i.endAngle),
                  e.arc(i.x, i.y, i.innerRadius, i.endAngle, i.startAngle, !0),
                  e.closePath(),
                  t = 0;
                t < i.fullCircles;
                ++t
              )
                e.fill();
              i.endAngle = i.startAngle + (n.circumference % Tt);
            }
            e.beginPath(),
              e.arc(i.x, i.y, i.outerRadius, i.startAngle, i.endAngle),
              e.arc(i.x, i.y, i.innerRadius, i.endAngle, i.startAngle, !0),
              e.closePath(),
              e.fill(),
              n.borderWidth && Pt(e, n, i),
              e.restore();
          },
        }),
        Dt = ut.valueOrDefault,
        It = J.global.defaultColor;
      J._set("global", {
        elements: {
          line: {
            tension: 0.4,
            backgroundColor: It,
            borderWidth: 3,
            borderColor: It,
            borderCapStyle: "butt",
            borderDash: [],
            borderDashOffset: 0,
            borderJoinStyle: "miter",
            capBezierPoints: !0,
            fill: !0,
          },
        },
      });
      var Nt = bt.extend({
          _type: "line",
          draw: function () {
            var t,
              e,
              n,
              r = this,
              i = r._view,
              o = r._chart.ctx,
              a = i.spanGaps,
              s = r._children.slice(),
              l = J.global,
              c = l.elements.line,
              u = -1,
              d = r._loop;
            if (s.length) {
              if (r._loop) {
                for (t = 0; t < s.length; ++t)
                  if (
                    ((e = ut.previousItem(s, t)),
                    !s[t]._view.skip && e._view.skip)
                  ) {
                    (s = s.slice(t).concat(s.slice(0, t))), (d = a);
                    break;
                  }
                d && s.push(s[0]);
              }
              for (
                o.save(),
                  o.lineCap = i.borderCapStyle || c.borderCapStyle,
                  o.setLineDash && o.setLineDash(i.borderDash || c.borderDash),
                  o.lineDashOffset = Dt(i.borderDashOffset, c.borderDashOffset),
                  o.lineJoin = i.borderJoinStyle || c.borderJoinStyle,
                  o.lineWidth = Dt(i.borderWidth, c.borderWidth),
                  o.strokeStyle = i.borderColor || l.defaultColor,
                  o.beginPath(),
                  n = s[0]._view,
                  n.skip || (o.moveTo(n.x, n.y), (u = 0)),
                  t = 1;
                t < s.length;
                ++t
              )
                (n = s[t]._view),
                  (e = -1 === u ? ut.previousItem(s, t) : s[u]),
                  n.skip ||
                    ((u !== t - 1 && !a) || -1 === u
                      ? o.moveTo(n.x, n.y)
                      : ut.canvas.lineTo(o, e._view, n),
                    (u = t));
              d && o.closePath(), o.stroke(), o.restore();
            }
          },
        }),
        Ft = ut.valueOrDefault,
        Rt = J.global.defaultColor;
      function jt(t) {
        var e = this._view;
        return !!e && Math.abs(t - e.x) < e.radius + e.hitRadius;
      }
      function zt(t) {
        var e = this._view;
        return !!e && Math.abs(t - e.y) < e.radius + e.hitRadius;
      }
      J._set("global", {
        elements: {
          point: {
            radius: 3,
            pointStyle: "circle",
            backgroundColor: Rt,
            borderColor: Rt,
            borderWidth: 1,
            hitRadius: 1,
            hoverRadius: 4,
            hoverBorderWidth: 1,
          },
        },
      });
      var Ht = bt.extend({
          _type: "point",
          inRange: function (t, e) {
            var n = this._view;
            return (
              !!n &&
              Math.pow(t - n.x, 2) + Math.pow(e - n.y, 2) <
                Math.pow(n.hitRadius + n.radius, 2)
            );
          },
          inLabelRange: jt,
          inXRange: jt,
          inYRange: zt,
          getCenterPoint: function () {
            var t = this._view;
            return { x: t.x, y: t.y };
          },
          getArea: function () {
            return Math.PI * Math.pow(this._view.radius, 2);
          },
          tooltipPosition: function () {
            var t = this._view;
            return { x: t.x, y: t.y, padding: t.radius + t.borderWidth };
          },
          draw: function (t) {
            var e = this._view,
              n = this._chart.ctx,
              r = e.pointStyle,
              i = e.rotation,
              o = e.radius,
              a = e.x,
              s = e.y,
              l = J.global,
              c = l.defaultColor;
            e.skip ||
              ((void 0 === t || ut.canvas._isPointInArea(e, t)) &&
                ((n.strokeStyle = e.borderColor || c),
                (n.lineWidth = Ft(e.borderWidth, l.elements.point.borderWidth)),
                (n.fillStyle = e.backgroundColor || c),
                ut.canvas.drawPoint(n, r, o, a, s, i)));
          },
        }),
        Bt = J.global.defaultColor;
      function Vt(t) {
        return t && void 0 !== t.width;
      }
      function $t(t) {
        var e, n, r, i, o;
        return (
          Vt(t)
            ? ((o = t.width / 2),
              (e = t.x - o),
              (n = t.x + o),
              (r = Math.min(t.y, t.base)),
              (i = Math.max(t.y, t.base)))
            : ((o = t.height / 2),
              (e = Math.min(t.x, t.base)),
              (n = Math.max(t.x, t.base)),
              (r = t.y - o),
              (i = t.y + o)),
          { left: e, top: r, right: n, bottom: i }
        );
      }
      function Wt(t, e, n) {
        return t === e ? n : t === n ? e : t;
      }
      function Ut(t) {
        var e = t.borderSkipped,
          n = {};
        return e
          ? (t.horizontal
              ? t.base > t.x && (e = Wt(e, "left", "right"))
              : t.base < t.y && (e = Wt(e, "bottom", "top")),
            (n[e] = !0),
            n)
          : n;
      }
      function qt(t, e, n) {
        var r,
          i,
          o,
          a,
          s = t.borderWidth,
          l = Ut(t);
        return (
          ut.isObject(s)
            ? ((r = +s.top || 0),
              (i = +s.right || 0),
              (o = +s.bottom || 0),
              (a = +s.left || 0))
            : (r = i = o = a = +s || 0),
          {
            t: l.top || r < 0 ? 0 : r > n ? n : r,
            r: l.right || i < 0 ? 0 : i > e ? e : i,
            b: l.bottom || o < 0 ? 0 : o > n ? n : o,
            l: l.left || a < 0 ? 0 : a > e ? e : a,
          }
        );
      }
      function Yt(t) {
        var e = $t(t),
          n = e.right - e.left,
          r = e.bottom - e.top,
          i = qt(t, n / 2, r / 2);
        return {
          outer: { x: e.left, y: e.top, w: n, h: r },
          inner: {
            x: e.left + i.l,
            y: e.top + i.t,
            w: n - i.l - i.r,
            h: r - i.t - i.b,
          },
        };
      }
      function Gt(t, e, n) {
        var r = null === e,
          i = null === n,
          o = !(!t || (r && i)) && $t(t);
        return (
          o &&
          (r || (e >= o.left && e <= o.right)) &&
          (i || (n >= o.top && n <= o.bottom))
        );
      }
      J._set("global", {
        elements: {
          rectangle: {
            backgroundColor: Bt,
            borderColor: Bt,
            borderSkipped: "bottom",
            borderWidth: 0,
          },
        },
      });
      var Xt = bt.extend({
          _type: "rectangle",
          draw: function () {
            var t = this._chart.ctx,
              e = this._view,
              n = Yt(e),
              r = n.outer,
              i = n.inner;
            (t.fillStyle = e.backgroundColor),
              t.fillRect(r.x, r.y, r.w, r.h),
              (r.w === i.w && r.h === i.h) ||
                (t.save(),
                t.beginPath(),
                t.rect(r.x, r.y, r.w, r.h),
                t.clip(),
                (t.fillStyle = e.borderColor),
                t.rect(i.x, i.y, i.w, i.h),
                t.fill("evenodd"),
                t.restore());
          },
          height: function () {
            var t = this._view;
            return t.base - t.y;
          },
          inRange: function (t, e) {
            return Gt(this._view, t, e);
          },
          inLabelRange: function (t, e) {
            var n = this._view;
            return Vt(n) ? Gt(n, t, null) : Gt(n, null, e);
          },
          inXRange: function (t) {
            return Gt(this._view, t, null);
          },
          inYRange: function (t) {
            return Gt(this._view, null, t);
          },
          getCenterPoint: function () {
            var t,
              e,
              n = this._view;
            return (
              Vt(n)
                ? ((t = n.x), (e = (n.y + n.base) / 2))
                : ((t = (n.x + n.base) / 2), (e = n.y)),
              { x: t, y: e }
            );
          },
          getArea: function () {
            var t = this._view;
            return Vt(t)
              ? t.width * Math.abs(t.y - t.base)
              : t.height * Math.abs(t.x - t.base);
          },
          tooltipPosition: function () {
            var t = this._view;
            return { x: t.x, y: t.y };
          },
        }),
        Kt = {},
        Zt = Lt,
        Jt = Nt,
        Qt = Ht,
        te = Xt;
      (Kt.Arc = Zt), (Kt.Line = Jt), (Kt.Point = Qt), (Kt.Rectangle = te);
      var ee = ut._deprecated,
        ne = ut.valueOrDefault;
      function re(t, e) {
        var n,
          r,
          i,
          o,
          a = t._length;
        for (i = 1, o = e.length; i < o; ++i)
          a = Math.min(a, Math.abs(e[i] - e[i - 1]));
        for (i = 0, o = t.getTicks().length; i < o; ++i)
          (r = t.getPixelForTick(i)),
            (a = i > 0 ? Math.min(a, Math.abs(r - n)) : a),
            (n = r);
        return a;
      }
      function ie(t, e, n) {
        var r,
          i,
          o = n.barThickness,
          a = e.stackCount,
          s = e.pixels[t],
          l = ut.isNullOrUndef(o) ? re(e.scale, e.pixels) : -1;
        return (
          ut.isNullOrUndef(o)
            ? ((r = l * n.categoryPercentage), (i = n.barPercentage))
            : ((r = o * a), (i = 1)),
          { chunk: r / a, ratio: i, start: s - r / 2 }
        );
      }
      function oe(t, e, n) {
        var r,
          i,
          o = e.pixels,
          a = o[t],
          s = t > 0 ? o[t - 1] : null,
          l = t < o.length - 1 ? o[t + 1] : null,
          c = n.categoryPercentage;
        return (
          null === s && (s = a - (null === l ? e.end - e.start : l - a)),
          null === l && (l = a + a - s),
          (r = a - ((a - Math.min(s, l)) / 2) * c),
          (i = (Math.abs(l - s) / 2) * c),
          { chunk: i / e.stackCount, ratio: n.barPercentage, start: r }
        );
      }
      J._set("bar", {
        hover: { mode: "label" },
        scales: {
          xAxes: [
            {
              type: "category",
              offset: !0,
              gridLines: { offsetGridLines: !0 },
            },
          ],
          yAxes: [{ type: "linear" }],
        },
      }),
        J._set("global", {
          datasets: { bar: { categoryPercentage: 0.8, barPercentage: 0.9 } },
        });
      var ae = At.extend({
          dataElementType: Kt.Rectangle,
          _dataElementOptions: [
            "backgroundColor",
            "borderColor",
            "borderSkipped",
            "borderWidth",
            "barPercentage",
            "barThickness",
            "categoryPercentage",
            "maxBarThickness",
            "minBarLength",
          ],
          initialize: function () {
            var t,
              e,
              n = this;
            At.prototype.initialize.apply(n, arguments),
              (t = n.getMeta()),
              (t.stack = n.getDataset().stack),
              (t.bar = !0),
              (e = n._getIndexScale().options),
              ee(
                "bar chart",
                e.barPercentage,
                "scales.[x/y]Axes.barPercentage",
                "dataset.barPercentage"
              ),
              ee(
                "bar chart",
                e.barThickness,
                "scales.[x/y]Axes.barThickness",
                "dataset.barThickness"
              ),
              ee(
                "bar chart",
                e.categoryPercentage,
                "scales.[x/y]Axes.categoryPercentage",
                "dataset.categoryPercentage"
              ),
              ee(
                "bar chart",
                n._getValueScale().options.minBarLength,
                "scales.[x/y]Axes.minBarLength",
                "dataset.minBarLength"
              ),
              ee(
                "bar chart",
                e.maxBarThickness,
                "scales.[x/y]Axes.maxBarThickness",
                "dataset.maxBarThickness"
              );
          },
          update: function (t) {
            var e,
              n,
              r = this,
              i = r.getMeta().data;
            for (r._ruler = r.getRuler(), e = 0, n = i.length; e < n; ++e)
              r.updateElement(i[e], e, t);
          },
          updateElement: function (t, e, n) {
            var r = this,
              i = r.getMeta(),
              o = r.getDataset(),
              a = r._resolveDataElementOptions(t, e);
            (t._xScale = r.getScaleForId(i.xAxisID)),
              (t._yScale = r.getScaleForId(i.yAxisID)),
              (t._datasetIndex = r.index),
              (t._index = e),
              (t._model = {
                backgroundColor: a.backgroundColor,
                borderColor: a.borderColor,
                borderSkipped: a.borderSkipped,
                borderWidth: a.borderWidth,
                datasetLabel: o.label,
                label: r.chart.data.labels[e],
              }),
              ut.isArray(o.data[e]) && (t._model.borderSkipped = null),
              r._updateElementGeometry(t, e, n, a),
              t.pivot();
          },
          _updateElementGeometry: function (t, e, n, r) {
            var i = this,
              o = t._model,
              a = i._getValueScale(),
              s = a.getBasePixel(),
              l = a.isHorizontal(),
              c = i._ruler || i.getRuler(),
              u = i.calculateBarValuePixels(i.index, e, r),
              d = i.calculateBarIndexPixels(i.index, e, c, r);
            (o.horizontal = l),
              (o.base = n ? s : u.base),
              (o.x = l ? (n ? s : u.head) : d.center),
              (o.y = l ? d.center : n ? s : u.head),
              (o.height = l ? d.size : void 0),
              (o.width = l ? void 0 : d.size);
          },
          _getStacks: function (t) {
            var e,
              n,
              r = this,
              i = r._getIndexScale(),
              o = i._getMatchingVisibleMetas(r._type),
              a = i.options.stacked,
              s = o.length,
              l = [];
            for (e = 0; e < s; ++e)
              if (
                ((n = o[e]),
                (!1 === a ||
                  -1 === l.indexOf(n.stack) ||
                  (void 0 === a && void 0 === n.stack)) &&
                  l.push(n.stack),
                n.index === t)
              )
                break;
            return l;
          },
          getStackCount: function () {
            return this._getStacks().length;
          },
          getStackIndex: function (t, e) {
            var n = this._getStacks(t),
              r = void 0 !== e ? n.indexOf(e) : -1;
            return -1 === r ? n.length - 1 : r;
          },
          getRuler: function () {
            var t,
              e,
              n = this,
              r = n._getIndexScale(),
              i = [];
            for (t = 0, e = n.getMeta().data.length; t < e; ++t)
              i.push(r.getPixelForValue(null, t, n.index));
            return {
              pixels: i,
              start: r._startPixel,
              end: r._endPixel,
              stackCount: n.getStackCount(),
              scale: r,
            };
          },
          calculateBarValuePixels: function (t, e, n) {
            var r,
              i,
              o,
              a,
              s,
              l,
              c,
              u = this,
              d = u.chart,
              f = u._getValueScale(),
              h = f.isHorizontal(),
              p = d.data.datasets,
              g = f._getMatchingVisibleMetas(u._type),
              v = f._parseValue(p[t].data[e]),
              m = n.minBarLength,
              b = f.options.stacked,
              y = u.getMeta().stack,
              x =
                void 0 === v.start
                  ? 0
                  : v.max >= 0 && v.min >= 0
                  ? v.min
                  : v.max,
              _ =
                void 0 === v.start
                  ? v.end
                  : v.max >= 0 && v.min >= 0
                  ? v.max - v.min
                  : v.min - v.max,
              w = g.length;
            if (b || (void 0 === b && void 0 !== y))
              for (r = 0; r < w; ++r) {
                if (((i = g[r]), i.index === t)) break;
                i.stack === y &&
                  ((c = f._parseValue(p[i.index].data[e])),
                  (o =
                    void 0 === c.start
                      ? c.end
                      : c.min >= 0 && c.max >= 0
                      ? c.max
                      : c.min),
                  ((v.min < 0 && o < 0) || (v.max >= 0 && o > 0)) && (x += o));
              }
            return (
              (a = f.getPixelForValue(x)),
              (s = f.getPixelForValue(x + _)),
              (l = s - a),
              void 0 !== m &&
                Math.abs(l) < m &&
                ((l = m), (s = (_ >= 0 && !h) || (_ < 0 && h) ? a - m : a + m)),
              { size: l, base: a, head: s, center: s + l / 2 }
            );
          },
          calculateBarIndexPixels: function (t, e, n, r) {
            var i = this,
              o = "flex" === r.barThickness ? oe(e, n, r) : ie(e, n, r),
              a = i.getStackIndex(t, i.getMeta().stack),
              s = o.start + o.chunk * a + o.chunk / 2,
              l = Math.min(ne(r.maxBarThickness, 1 / 0), o.chunk * o.ratio);
            return { base: s - l / 2, head: s + l / 2, center: s, size: l };
          },
          draw: function () {
            var t = this,
              e = t.chart,
              n = t._getValueScale(),
              r = t.getMeta().data,
              i = t.getDataset(),
              o = r.length,
              a = 0;
            for (ut.canvas.clipArea(e.ctx, e.chartArea); a < o; ++a) {
              var s = n._parseValue(i.data[a]);
              isNaN(s.min) || isNaN(s.max) || r[a].draw();
            }
            ut.canvas.unclipArea(e.ctx);
          },
          _resolveDataElementOptions: function () {
            var t = this,
              e = ut.extend(
                {},
                At.prototype._resolveDataElementOptions.apply(t, arguments)
              ),
              n = t._getIndexScale().options,
              r = t._getValueScale().options;
            return (
              (e.barPercentage = ne(n.barPercentage, e.barPercentage)),
              (e.barThickness = ne(n.barThickness, e.barThickness)),
              (e.categoryPercentage = ne(
                n.categoryPercentage,
                e.categoryPercentage
              )),
              (e.maxBarThickness = ne(n.maxBarThickness, e.maxBarThickness)),
              (e.minBarLength = ne(r.minBarLength, e.minBarLength)),
              e
            );
          },
        }),
        se = ut.valueOrDefault,
        le = ut.options.resolve;
      J._set("bubble", {
        hover: { mode: "single" },
        scales: {
          xAxes: [{ type: "linear", position: "bottom", id: "x-axis-0" }],
          yAxes: [{ type: "linear", position: "left", id: "y-axis-0" }],
        },
        tooltips: {
          callbacks: {
            title: function () {
              return "";
            },
            label: function (t, e) {
              var n = e.datasets[t.datasetIndex].label || "",
                r = e.datasets[t.datasetIndex].data[t.index];
              return n + ": (" + t.xLabel + ", " + t.yLabel + ", " + r.r + ")";
            },
          },
        },
      });
      var ce = At.extend({
          dataElementType: Kt.Point,
          _dataElementOptions: [
            "backgroundColor",
            "borderColor",
            "borderWidth",
            "hoverBackgroundColor",
            "hoverBorderColor",
            "hoverBorderWidth",
            "hoverRadius",
            "hitRadius",
            "pointStyle",
            "rotation",
          ],
          update: function (t) {
            var e = this,
              n = e.getMeta(),
              r = n.data;
            ut.each(r, function (n, r) {
              e.updateElement(n, r, t);
            });
          },
          updateElement: function (t, e, n) {
            var r = this,
              i = r.getMeta(),
              o = t.custom || {},
              a = r.getScaleForId(i.xAxisID),
              s = r.getScaleForId(i.yAxisID),
              l = r._resolveDataElementOptions(t, e),
              c = r.getDataset().data[e],
              u = r.index,
              d = n
                ? a.getPixelForDecimal(0.5)
                : a.getPixelForValue("object" === typeof c ? c : NaN, e, u),
              f = n ? s.getBasePixel() : s.getPixelForValue(c, e, u);
            (t._xScale = a),
              (t._yScale = s),
              (t._options = l),
              (t._datasetIndex = u),
              (t._index = e),
              (t._model = {
                backgroundColor: l.backgroundColor,
                borderColor: l.borderColor,
                borderWidth: l.borderWidth,
                hitRadius: l.hitRadius,
                pointStyle: l.pointStyle,
                rotation: l.rotation,
                radius: n ? 0 : l.radius,
                skip: o.skip || isNaN(d) || isNaN(f),
                x: d,
                y: f,
              }),
              t.pivot();
          },
          setHoverStyle: function (t) {
            var e = t._model,
              n = t._options,
              r = ut.getHoverColor;
            (t.$previousStyle = {
              backgroundColor: e.backgroundColor,
              borderColor: e.borderColor,
              borderWidth: e.borderWidth,
              radius: e.radius,
            }),
              (e.backgroundColor = se(
                n.hoverBackgroundColor,
                r(n.backgroundColor)
              )),
              (e.borderColor = se(n.hoverBorderColor, r(n.borderColor))),
              (e.borderWidth = se(n.hoverBorderWidth, n.borderWidth)),
              (e.radius = n.radius + n.hoverRadius);
          },
          _resolveDataElementOptions: function (t, e) {
            var n = this,
              r = n.chart,
              i = n.getDataset(),
              o = t.custom || {},
              a = i.data[e] || {},
              s = At.prototype._resolveDataElementOptions.apply(n, arguments),
              l = { chart: r, dataIndex: e, dataset: i, datasetIndex: n.index };
            return (
              n._cachedDataOpts === s && (s = ut.extend({}, s)),
              (s.radius = le(
                [
                  o.radius,
                  a.r,
                  n._config.radius,
                  r.options.elements.point.radius,
                ],
                l,
                e
              )),
              s
            );
          },
        }),
        ue = ut.valueOrDefault,
        de = Math.PI,
        fe = 2 * de,
        he = de / 2;
      J._set("doughnut", {
        animation: { animateRotate: !0, animateScale: !1 },
        hover: { mode: "single" },
        legendCallback: function (t) {
          var e,
            n,
            r,
            i,
            o = document.createElement("ul"),
            a = t.data,
            s = a.datasets,
            l = a.labels;
          if ((o.setAttribute("class", t.id + "-legend"), s.length))
            for (e = 0, n = s[0].data.length; e < n; ++e)
              (r = o.appendChild(document.createElement("li"))),
                (i = r.appendChild(document.createElement("span"))),
                (i.style.backgroundColor = s[0].backgroundColor[e]),
                l[e] && r.appendChild(document.createTextNode(l[e]));
          return o.outerHTML;
        },
        legend: {
          labels: {
            generateLabels: function (t) {
              var e = t.data;
              return e.labels.length && e.datasets.length
                ? e.labels.map(function (n, r) {
                    var i = t.getDatasetMeta(0),
                      o = i.controller.getStyle(r);
                    return {
                      text: n,
                      fillStyle: o.backgroundColor,
                      strokeStyle: o.borderColor,
                      lineWidth: o.borderWidth,
                      hidden: isNaN(e.datasets[0].data[r]) || i.data[r].hidden,
                      index: r,
                    };
                  })
                : [];
            },
          },
          onClick: function (t, e) {
            var n,
              r,
              i,
              o = e.index,
              a = this.chart;
            for (n = 0, r = (a.data.datasets || []).length; n < r; ++n)
              (i = a.getDatasetMeta(n)),
                i.data[o] && (i.data[o].hidden = !i.data[o].hidden);
            a.update();
          },
        },
        cutoutPercentage: 50,
        rotation: -he,
        circumference: fe,
        tooltips: {
          callbacks: {
            title: function () {
              return "";
            },
            label: function (t, e) {
              var n = e.labels[t.index],
                r = ": " + e.datasets[t.datasetIndex].data[t.index];
              return (
                ut.isArray(n) ? ((n = n.slice()), (n[0] += r)) : (n += r), n
              );
            },
          },
        },
      });
      var pe = At.extend({
        dataElementType: Kt.Arc,
        linkScales: ut.noop,
        _dataElementOptions: [
          "backgroundColor",
          "borderColor",
          "borderWidth",
          "borderAlign",
          "hoverBackgroundColor",
          "hoverBorderColor",
          "hoverBorderWidth",
        ],
        getRingIndex: function (t) {
          for (var e = 0, n = 0; n < t; ++n)
            this.chart.isDatasetVisible(n) && ++e;
          return e;
        },
        update: function (t) {
          var e,
            n,
            r,
            i,
            o = this,
            a = o.chart,
            s = a.chartArea,
            l = a.options,
            c = 1,
            u = 1,
            d = 0,
            f = 0,
            h = o.getMeta(),
            p = h.data,
            g = l.cutoutPercentage / 100 || 0,
            v = l.circumference,
            m = o._getRingWeight(o.index);
          if (v < fe) {
            var b = l.rotation % fe;
            b += b >= de ? -fe : b < -de ? fe : 0;
            var y = b + v,
              x = Math.cos(b),
              _ = Math.sin(b),
              w = Math.cos(y),
              k = Math.sin(y),
              C = (b <= 0 && y >= 0) || y >= fe,
              M = (b <= he && y >= he) || y >= fe + he,
              S = b === -de || y >= de,
              A = (b <= -he && y >= -he) || y >= de + he,
              T = S ? -1 : Math.min(x, x * g, w, w * g),
              O = A ? -1 : Math.min(_, _ * g, k, k * g),
              E = C ? 1 : Math.max(x, x * g, w, w * g),
              P = M ? 1 : Math.max(_, _ * g, k, k * g);
            (c = (E - T) / 2),
              (u = (P - O) / 2),
              (d = -(E + T) / 2),
              (f = -(P + O) / 2);
          }
          for (r = 0, i = p.length; r < i; ++r)
            p[r]._options = o._resolveDataElementOptions(p[r], r);
          for (
            a.borderWidth = o.getMaxBorderWidth(),
              e = (s.right - s.left - a.borderWidth) / c,
              n = (s.bottom - s.top - a.borderWidth) / u,
              a.outerRadius = Math.max(Math.min(e, n) / 2, 0),
              a.innerRadius = Math.max(a.outerRadius * g, 0),
              a.radiusLength =
                (a.outerRadius - a.innerRadius) /
                (o._getVisibleDatasetWeightTotal() || 1),
              a.offsetX = d * a.outerRadius,
              a.offsetY = f * a.outerRadius,
              h.total = o.calculateTotal(),
              o.outerRadius =
                a.outerRadius -
                a.radiusLength * o._getRingWeightOffset(o.index),
              o.innerRadius = Math.max(o.outerRadius - a.radiusLength * m, 0),
              r = 0,
              i = p.length;
            r < i;
            ++r
          )
            o.updateElement(p[r], r, t);
        },
        updateElement: function (t, e, n) {
          var r = this,
            i = r.chart,
            o = i.chartArea,
            a = i.options,
            s = a.animation,
            l = (o.left + o.right) / 2,
            c = (o.top + o.bottom) / 2,
            u = a.rotation,
            d = a.rotation,
            f = r.getDataset(),
            h =
              (n && s.animateRotate) || t.hidden
                ? 0
                : r.calculateCircumference(f.data[e]) * (a.circumference / fe),
            p = n && s.animateScale ? 0 : r.innerRadius,
            g = n && s.animateScale ? 0 : r.outerRadius,
            v = t._options || {};
          ut.extend(t, {
            _datasetIndex: r.index,
            _index: e,
            _model: {
              backgroundColor: v.backgroundColor,
              borderColor: v.borderColor,
              borderWidth: v.borderWidth,
              borderAlign: v.borderAlign,
              x: l + i.offsetX,
              y: c + i.offsetY,
              startAngle: u,
              endAngle: d,
              circumference: h,
              outerRadius: g,
              innerRadius: p,
              label: ut.valueAtIndexOrDefault(f.label, e, i.data.labels[e]),
            },
          });
          var m = t._model;
          (n && s.animateRotate) ||
            ((m.startAngle =
              0 === e ? a.rotation : r.getMeta().data[e - 1]._model.endAngle),
            (m.endAngle = m.startAngle + m.circumference)),
            t.pivot();
        },
        calculateTotal: function () {
          var t,
            e = this.getDataset(),
            n = this.getMeta(),
            r = 0;
          return (
            ut.each(n.data, function (n, i) {
              (t = e.data[i]), isNaN(t) || n.hidden || (r += Math.abs(t));
            }),
            r
          );
        },
        calculateCircumference: function (t) {
          var e = this.getMeta().total;
          return e > 0 && !isNaN(t) ? fe * (Math.abs(t) / e) : 0;
        },
        getMaxBorderWidth: function (t) {
          var e,
            n,
            r,
            i,
            o,
            a,
            s,
            l,
            c = this,
            u = 0,
            d = c.chart;
          if (!t)
            for (e = 0, n = d.data.datasets.length; e < n; ++e)
              if (d.isDatasetVisible(e)) {
                (r = d.getDatasetMeta(e)),
                  (t = r.data),
                  e !== c.index && (o = r.controller);
                break;
              }
          if (!t) return 0;
          for (e = 0, n = t.length; e < n; ++e)
            (i = t[e]),
              o
                ? (o._configure(), (a = o._resolveDataElementOptions(i, e)))
                : (a = i._options),
              "inner" !== a.borderAlign &&
                ((s = a.borderWidth),
                (l = a.hoverBorderWidth),
                (u = s > u ? s : u),
                (u = l > u ? l : u));
          return u;
        },
        setHoverStyle: function (t) {
          var e = t._model,
            n = t._options,
            r = ut.getHoverColor;
          (t.$previousStyle = {
            backgroundColor: e.backgroundColor,
            borderColor: e.borderColor,
            borderWidth: e.borderWidth,
          }),
            (e.backgroundColor = ue(
              n.hoverBackgroundColor,
              r(n.backgroundColor)
            )),
            (e.borderColor = ue(n.hoverBorderColor, r(n.borderColor))),
            (e.borderWidth = ue(n.hoverBorderWidth, n.borderWidth));
        },
        _getRingWeightOffset: function (t) {
          for (var e = 0, n = 0; n < t; ++n)
            this.chart.isDatasetVisible(n) && (e += this._getRingWeight(n));
          return e;
        },
        _getRingWeight: function (t) {
          return Math.max(ue(this.chart.data.datasets[t].weight, 1), 0);
        },
        _getVisibleDatasetWeightTotal: function () {
          return this._getRingWeightOffset(this.chart.data.datasets.length);
        },
      });
      J._set("horizontalBar", {
        hover: { mode: "index", axis: "y" },
        scales: {
          xAxes: [{ type: "linear", position: "bottom" }],
          yAxes: [
            {
              type: "category",
              position: "left",
              offset: !0,
              gridLines: { offsetGridLines: !0 },
            },
          ],
        },
        elements: { rectangle: { borderSkipped: "left" } },
        tooltips: { mode: "index", axis: "y" },
      }),
        J._set("global", {
          datasets: {
            horizontalBar: { categoryPercentage: 0.8, barPercentage: 0.9 },
          },
        });
      var ge = ae.extend({
          _getValueScaleId: function () {
            return this.getMeta().xAxisID;
          },
          _getIndexScaleId: function () {
            return this.getMeta().yAxisID;
          },
        }),
        ve = ut.valueOrDefault,
        me = ut.options.resolve,
        be = ut.canvas._isPointInArea;
      function ye(t, e) {
        var n = (t && t.options.ticks) || {},
          r = n.reverse,
          i = void 0 === n.min ? e : 0,
          o = void 0 === n.max ? e : 0;
        return { start: r ? o : i, end: r ? i : o };
      }
      function xe(t, e, n) {
        var r = n / 2,
          i = ye(t, r),
          o = ye(e, r);
        return { top: o.end, right: i.end, bottom: o.start, left: i.start };
      }
      function _e(t) {
        var e, n, r, i;
        return (
          ut.isObject(t)
            ? ((e = t.top), (n = t.right), (r = t.bottom), (i = t.left))
            : (e = n = r = i = t),
          { top: e, right: n, bottom: r, left: i }
        );
      }
      J._set("line", {
        showLines: !0,
        spanGaps: !1,
        hover: { mode: "label" },
        scales: {
          xAxes: [{ type: "category", id: "x-axis-0" }],
          yAxes: [{ type: "linear", id: "y-axis-0" }],
        },
      });
      var we = At.extend({
          datasetElementType: Kt.Line,
          dataElementType: Kt.Point,
          _datasetElementOptions: [
            "backgroundColor",
            "borderCapStyle",
            "borderColor",
            "borderDash",
            "borderDashOffset",
            "borderJoinStyle",
            "borderWidth",
            "cubicInterpolationMode",
            "fill",
          ],
          _dataElementOptions: {
            backgroundColor: "pointBackgroundColor",
            borderColor: "pointBorderColor",
            borderWidth: "pointBorderWidth",
            hitRadius: "pointHitRadius",
            hoverBackgroundColor: "pointHoverBackgroundColor",
            hoverBorderColor: "pointHoverBorderColor",
            hoverBorderWidth: "pointHoverBorderWidth",
            hoverRadius: "pointHoverRadius",
            pointStyle: "pointStyle",
            radius: "pointRadius",
            rotation: "pointRotation",
          },
          update: function (t) {
            var e,
              n,
              r = this,
              i = r.getMeta(),
              o = i.dataset,
              a = i.data || [],
              s = r.chart.options,
              l = r._config,
              c = (r._showLine = ve(l.showLine, s.showLines));
            for (
              r._xScale = r.getScaleForId(i.xAxisID),
                r._yScale = r.getScaleForId(i.yAxisID),
                c &&
                  (void 0 !== l.tension &&
                    void 0 === l.lineTension &&
                    (l.lineTension = l.tension),
                  (o._scale = r._yScale),
                  (o._datasetIndex = r.index),
                  (o._children = a),
                  (o._model = r._resolveDatasetElementOptions(o)),
                  o.pivot()),
                e = 0,
                n = a.length;
              e < n;
              ++e
            )
              r.updateElement(a[e], e, t);
            for (
              c && 0 !== o._model.tension && r.updateBezierControlPoints(),
                e = 0,
                n = a.length;
              e < n;
              ++e
            )
              a[e].pivot();
          },
          updateElement: function (t, e, n) {
            var r,
              i,
              o = this,
              a = o.getMeta(),
              s = t.custom || {},
              l = o.getDataset(),
              c = o.index,
              u = l.data[e],
              d = o._xScale,
              f = o._yScale,
              h = a.dataset._model,
              p = o._resolveDataElementOptions(t, e);
            (r = d.getPixelForValue("object" === typeof u ? u : NaN, e, c)),
              (i = n ? f.getBasePixel() : o.calculatePointY(u, e, c)),
              (t._xScale = d),
              (t._yScale = f),
              (t._options = p),
              (t._datasetIndex = c),
              (t._index = e),
              (t._model = {
                x: r,
                y: i,
                skip: s.skip || isNaN(r) || isNaN(i),
                radius: p.radius,
                pointStyle: p.pointStyle,
                rotation: p.rotation,
                backgroundColor: p.backgroundColor,
                borderColor: p.borderColor,
                borderWidth: p.borderWidth,
                tension: ve(s.tension, h ? h.tension : 0),
                steppedLine: !!h && h.steppedLine,
                hitRadius: p.hitRadius,
              });
          },
          _resolveDatasetElementOptions: function (t) {
            var e = this,
              n = e._config,
              r = t.custom || {},
              i = e.chart.options,
              o = i.elements.line,
              a = At.prototype._resolveDatasetElementOptions.apply(
                e,
                arguments
              );
            return (
              (a.spanGaps = ve(n.spanGaps, i.spanGaps)),
              (a.tension = ve(n.lineTension, o.tension)),
              (a.steppedLine = me([r.steppedLine, n.steppedLine, o.stepped])),
              (a.clip = _e(
                ve(n.clip, xe(e._xScale, e._yScale, a.borderWidth))
              )),
              a
            );
          },
          calculatePointY: function (t, e, n) {
            var r,
              i,
              o,
              a,
              s,
              l,
              c,
              u = this,
              d = u.chart,
              f = u._yScale,
              h = 0,
              p = 0;
            if (f.options.stacked) {
              for (
                s = +f.getRightValue(t),
                  l = d._getSortedVisibleDatasetMetas(),
                  c = l.length,
                  r = 0;
                r < c;
                ++r
              ) {
                if (((o = l[r]), o.index === n)) break;
                (i = d.data.datasets[o.index]),
                  "line" === o.type &&
                    o.yAxisID === f.id &&
                    ((a = +f.getRightValue(i.data[e])),
                    a < 0 ? (p += a || 0) : (h += a || 0));
              }
              return s < 0
                ? f.getPixelForValue(p + s)
                : f.getPixelForValue(h + s);
            }
            return f.getPixelForValue(t);
          },
          updateBezierControlPoints: function () {
            var t,
              e,
              n,
              r,
              i = this,
              o = i.chart,
              a = i.getMeta(),
              s = a.dataset._model,
              l = o.chartArea,
              c = a.data || [];
            function u(t, e, n) {
              return Math.max(Math.min(t, n), e);
            }
            if (
              (s.spanGaps &&
                (c = c.filter(function (t) {
                  return !t._model.skip;
                })),
              "monotone" === s.cubicInterpolationMode)
            )
              ut.splineCurveMonotone(c);
            else
              for (t = 0, e = c.length; t < e; ++t)
                (n = c[t]._model),
                  (r = ut.splineCurve(
                    ut.previousItem(c, t)._model,
                    n,
                    ut.nextItem(c, t)._model,
                    s.tension
                  )),
                  (n.controlPointPreviousX = r.previous.x),
                  (n.controlPointPreviousY = r.previous.y),
                  (n.controlPointNextX = r.next.x),
                  (n.controlPointNextY = r.next.y);
            if (o.options.elements.line.capBezierPoints)
              for (t = 0, e = c.length; t < e; ++t)
                (n = c[t]._model),
                  be(n, l) &&
                    (t > 0 &&
                      be(c[t - 1]._model, l) &&
                      ((n.controlPointPreviousX = u(
                        n.controlPointPreviousX,
                        l.left,
                        l.right
                      )),
                      (n.controlPointPreviousY = u(
                        n.controlPointPreviousY,
                        l.top,
                        l.bottom
                      ))),
                    t < c.length - 1 &&
                      be(c[t + 1]._model, l) &&
                      ((n.controlPointNextX = u(
                        n.controlPointNextX,
                        l.left,
                        l.right
                      )),
                      (n.controlPointNextY = u(
                        n.controlPointNextY,
                        l.top,
                        l.bottom
                      ))));
          },
          draw: function () {
            var t,
              e = this,
              n = e.chart,
              r = e.getMeta(),
              i = r.data || [],
              o = n.chartArea,
              a = n.canvas,
              s = 0,
              l = i.length;
            for (
              e._showLine &&
              ((t = r.dataset._model.clip),
              ut.canvas.clipArea(n.ctx, {
                left: !1 === t.left ? 0 : o.left - t.left,
                right: !1 === t.right ? a.width : o.right + t.right,
                top: !1 === t.top ? 0 : o.top - t.top,
                bottom: !1 === t.bottom ? a.height : o.bottom + t.bottom,
              }),
              r.dataset.draw(),
              ut.canvas.unclipArea(n.ctx));
              s < l;
              ++s
            )
              i[s].draw(o);
          },
          setHoverStyle: function (t) {
            var e = t._model,
              n = t._options,
              r = ut.getHoverColor;
            (t.$previousStyle = {
              backgroundColor: e.backgroundColor,
              borderColor: e.borderColor,
              borderWidth: e.borderWidth,
              radius: e.radius,
            }),
              (e.backgroundColor = ve(
                n.hoverBackgroundColor,
                r(n.backgroundColor)
              )),
              (e.borderColor = ve(n.hoverBorderColor, r(n.borderColor))),
              (e.borderWidth = ve(n.hoverBorderWidth, n.borderWidth)),
              (e.radius = ve(n.hoverRadius, n.radius));
          },
        }),
        ke = ut.options.resolve;
      J._set("polarArea", {
        scale: {
          type: "radialLinear",
          angleLines: { display: !1 },
          gridLines: { circular: !0 },
          pointLabels: { display: !1 },
          ticks: { beginAtZero: !0 },
        },
        animation: { animateRotate: !0, animateScale: !0 },
        startAngle: -0.5 * Math.PI,
        legendCallback: function (t) {
          var e,
            n,
            r,
            i,
            o = document.createElement("ul"),
            a = t.data,
            s = a.datasets,
            l = a.labels;
          if ((o.setAttribute("class", t.id + "-legend"), s.length))
            for (e = 0, n = s[0].data.length; e < n; ++e)
              (r = o.appendChild(document.createElement("li"))),
                (i = r.appendChild(document.createElement("span"))),
                (i.style.backgroundColor = s[0].backgroundColor[e]),
                l[e] && r.appendChild(document.createTextNode(l[e]));
          return o.outerHTML;
        },
        legend: {
          labels: {
            generateLabels: function (t) {
              var e = t.data;
              return e.labels.length && e.datasets.length
                ? e.labels.map(function (n, r) {
                    var i = t.getDatasetMeta(0),
                      o = i.controller.getStyle(r);
                    return {
                      text: n,
                      fillStyle: o.backgroundColor,
                      strokeStyle: o.borderColor,
                      lineWidth: o.borderWidth,
                      hidden: isNaN(e.datasets[0].data[r]) || i.data[r].hidden,
                      index: r,
                    };
                  })
                : [];
            },
          },
          onClick: function (t, e) {
            var n,
              r,
              i,
              o = e.index,
              a = this.chart;
            for (n = 0, r = (a.data.datasets || []).length; n < r; ++n)
              (i = a.getDatasetMeta(n)), (i.data[o].hidden = !i.data[o].hidden);
            a.update();
          },
        },
        tooltips: {
          callbacks: {
            title: function () {
              return "";
            },
            label: function (t, e) {
              return e.labels[t.index] + ": " + t.yLabel;
            },
          },
        },
      });
      var Ce = At.extend({
        dataElementType: Kt.Arc,
        linkScales: ut.noop,
        _dataElementOptions: [
          "backgroundColor",
          "borderColor",
          "borderWidth",
          "borderAlign",
          "hoverBackgroundColor",
          "hoverBorderColor",
          "hoverBorderWidth",
        ],
        _getIndexScaleId: function () {
          return this.chart.scale.id;
        },
        _getValueScaleId: function () {
          return this.chart.scale.id;
        },
        update: function (t) {
          var e,
            n,
            r,
            i = this,
            o = i.getDataset(),
            a = i.getMeta(),
            s = i.chart.options.startAngle || 0,
            l = (i._starts = []),
            c = (i._angles = []),
            u = a.data;
          for (
            i._updateRadius(),
              a.count = i.countVisibleElements(),
              e = 0,
              n = o.data.length;
            e < n;
            e++
          )
            (l[e] = s), (r = i._computeAngle(e)), (c[e] = r), (s += r);
          for (e = 0, n = u.length; e < n; ++e)
            (u[e]._options = i._resolveDataElementOptions(u[e], e)),
              i.updateElement(u[e], e, t);
        },
        _updateRadius: function () {
          var t = this,
            e = t.chart,
            n = e.chartArea,
            r = e.options,
            i = Math.min(n.right - n.left, n.bottom - n.top);
          (e.outerRadius = Math.max(i / 2, 0)),
            (e.innerRadius = Math.max(
              r.cutoutPercentage
                ? (e.outerRadius / 100) * r.cutoutPercentage
                : 1,
              0
            )),
            (e.radiusLength =
              (e.outerRadius - e.innerRadius) / e.getVisibleDatasetCount()),
            (t.outerRadius = e.outerRadius - e.radiusLength * t.index),
            (t.innerRadius = t.outerRadius - e.radiusLength);
        },
        updateElement: function (t, e, n) {
          var r = this,
            i = r.chart,
            o = r.getDataset(),
            a = i.options,
            s = a.animation,
            l = i.scale,
            c = i.data.labels,
            u = l.xCenter,
            d = l.yCenter,
            f = a.startAngle,
            h = t.hidden ? 0 : l.getDistanceFromCenterForValue(o.data[e]),
            p = r._starts[e],
            g = p + (t.hidden ? 0 : r._angles[e]),
            v = s.animateScale ? 0 : l.getDistanceFromCenterForValue(o.data[e]),
            m = t._options || {};
          ut.extend(t, {
            _datasetIndex: r.index,
            _index: e,
            _scale: l,
            _model: {
              backgroundColor: m.backgroundColor,
              borderColor: m.borderColor,
              borderWidth: m.borderWidth,
              borderAlign: m.borderAlign,
              x: u,
              y: d,
              innerRadius: 0,
              outerRadius: n ? v : h,
              startAngle: n && s.animateRotate ? f : p,
              endAngle: n && s.animateRotate ? f : g,
              label: ut.valueAtIndexOrDefault(c, e, c[e]),
            },
          }),
            t.pivot();
        },
        countVisibleElements: function () {
          var t = this.getDataset(),
            e = this.getMeta(),
            n = 0;
          return (
            ut.each(e.data, function (e, r) {
              isNaN(t.data[r]) || e.hidden || n++;
            }),
            n
          );
        },
        setHoverStyle: function (t) {
          var e = t._model,
            n = t._options,
            r = ut.getHoverColor,
            i = ut.valueOrDefault;
          (t.$previousStyle = {
            backgroundColor: e.backgroundColor,
            borderColor: e.borderColor,
            borderWidth: e.borderWidth,
          }),
            (e.backgroundColor = i(
              n.hoverBackgroundColor,
              r(n.backgroundColor)
            )),
            (e.borderColor = i(n.hoverBorderColor, r(n.borderColor))),
            (e.borderWidth = i(n.hoverBorderWidth, n.borderWidth));
        },
        _computeAngle: function (t) {
          var e = this,
            n = this.getMeta().count,
            r = e.getDataset(),
            i = e.getMeta();
          if (isNaN(r.data[t]) || i.data[t].hidden) return 0;
          var o = {
            chart: e.chart,
            dataIndex: t,
            dataset: r,
            datasetIndex: e.index,
          };
          return ke(
            [e.chart.options.elements.arc.angle, (2 * Math.PI) / n],
            o,
            t
          );
        },
      });
      J._set("pie", ut.clone(J.doughnut)),
        J._set("pie", { cutoutPercentage: 0 });
      var Me = pe,
        Se = ut.valueOrDefault;
      J._set("radar", {
        spanGaps: !1,
        scale: { type: "radialLinear" },
        elements: { line: { fill: "start", tension: 0 } },
      });
      var Ae = At.extend({
        datasetElementType: Kt.Line,
        dataElementType: Kt.Point,
        linkScales: ut.noop,
        _datasetElementOptions: [
          "backgroundColor",
          "borderWidth",
          "borderColor",
          "borderCapStyle",
          "borderDash",
          "borderDashOffset",
          "borderJoinStyle",
          "fill",
        ],
        _dataElementOptions: {
          backgroundColor: "pointBackgroundColor",
          borderColor: "pointBorderColor",
          borderWidth: "pointBorderWidth",
          hitRadius: "pointHitRadius",
          hoverBackgroundColor: "pointHoverBackgroundColor",
          hoverBorderColor: "pointHoverBorderColor",
          hoverBorderWidth: "pointHoverBorderWidth",
          hoverRadius: "pointHoverRadius",
          pointStyle: "pointStyle",
          radius: "pointRadius",
          rotation: "pointRotation",
        },
        _getIndexScaleId: function () {
          return this.chart.scale.id;
        },
        _getValueScaleId: function () {
          return this.chart.scale.id;
        },
        update: function (t) {
          var e,
            n,
            r = this,
            i = r.getMeta(),
            o = i.dataset,
            a = i.data || [],
            s = r.chart.scale,
            l = r._config;
          for (
            void 0 !== l.tension &&
              void 0 === l.lineTension &&
              (l.lineTension = l.tension),
              o._scale = s,
              o._datasetIndex = r.index,
              o._children = a,
              o._loop = !0,
              o._model = r._resolveDatasetElementOptions(o),
              o.pivot(),
              e = 0,
              n = a.length;
            e < n;
            ++e
          )
            r.updateElement(a[e], e, t);
          for (r.updateBezierControlPoints(), e = 0, n = a.length; e < n; ++e)
            a[e].pivot();
        },
        updateElement: function (t, e, n) {
          var r = this,
            i = t.custom || {},
            o = r.getDataset(),
            a = r.chart.scale,
            s = a.getPointPositionForValue(e, o.data[e]),
            l = r._resolveDataElementOptions(t, e),
            c = r.getMeta().dataset._model,
            u = n ? a.xCenter : s.x,
            d = n ? a.yCenter : s.y;
          (t._scale = a),
            (t._options = l),
            (t._datasetIndex = r.index),
            (t._index = e),
            (t._model = {
              x: u,
              y: d,
              skip: i.skip || isNaN(u) || isNaN(d),
              radius: l.radius,
              pointStyle: l.pointStyle,
              rotation: l.rotation,
              backgroundColor: l.backgroundColor,
              borderColor: l.borderColor,
              borderWidth: l.borderWidth,
              tension: Se(i.tension, c ? c.tension : 0),
              hitRadius: l.hitRadius,
            });
        },
        _resolveDatasetElementOptions: function () {
          var t = this,
            e = t._config,
            n = t.chart.options,
            r = At.prototype._resolveDatasetElementOptions.apply(t, arguments);
          return (
            (r.spanGaps = Se(e.spanGaps, n.spanGaps)),
            (r.tension = Se(e.lineTension, n.elements.line.tension)),
            r
          );
        },
        updateBezierControlPoints: function () {
          var t,
            e,
            n,
            r,
            i = this,
            o = i.getMeta(),
            a = i.chart.chartArea,
            s = o.data || [];
          function l(t, e, n) {
            return Math.max(Math.min(t, n), e);
          }
          for (
            o.dataset._model.spanGaps &&
              (s = s.filter(function (t) {
                return !t._model.skip;
              })),
              t = 0,
              e = s.length;
            t < e;
            ++t
          )
            (n = s[t]._model),
              (r = ut.splineCurve(
                ut.previousItem(s, t, !0)._model,
                n,
                ut.nextItem(s, t, !0)._model,
                n.tension
              )),
              (n.controlPointPreviousX = l(r.previous.x, a.left, a.right)),
              (n.controlPointPreviousY = l(r.previous.y, a.top, a.bottom)),
              (n.controlPointNextX = l(r.next.x, a.left, a.right)),
              (n.controlPointNextY = l(r.next.y, a.top, a.bottom));
        },
        setHoverStyle: function (t) {
          var e = t._model,
            n = t._options,
            r = ut.getHoverColor;
          (t.$previousStyle = {
            backgroundColor: e.backgroundColor,
            borderColor: e.borderColor,
            borderWidth: e.borderWidth,
            radius: e.radius,
          }),
            (e.backgroundColor = Se(
              n.hoverBackgroundColor,
              r(n.backgroundColor)
            )),
            (e.borderColor = Se(n.hoverBorderColor, r(n.borderColor))),
            (e.borderWidth = Se(n.hoverBorderWidth, n.borderWidth)),
            (e.radius = Se(n.hoverRadius, n.radius));
        },
      });
      J._set("scatter", {
        hover: { mode: "single" },
        scales: {
          xAxes: [{ id: "x-axis-1", type: "linear", position: "bottom" }],
          yAxes: [{ id: "y-axis-1", type: "linear", position: "left" }],
        },
        tooltips: {
          callbacks: {
            title: function () {
              return "";
            },
            label: function (t) {
              return "(" + t.xLabel + ", " + t.yLabel + ")";
            },
          },
        },
      }),
        J._set("global", { datasets: { scatter: { showLine: !1 } } });
      var Te = we,
        Oe = {
          bar: ae,
          bubble: ce,
          doughnut: pe,
          horizontalBar: ge,
          line: we,
          polarArea: Ce,
          pie: Me,
          radar: Ae,
          scatter: Te,
        };
      function Ee(t, e) {
        return t.native ? { x: t.x, y: t.y } : ut.getRelativePosition(t, e);
      }
      function Pe(t, e) {
        var n,
          r,
          i,
          o,
          a,
          s,
          l = t._getSortedVisibleDatasetMetas();
        for (r = 0, o = l.length; r < o; ++r)
          for (n = l[r].data, i = 0, a = n.length; i < a; ++i)
            (s = n[i]), s._view.skip || e(s);
      }
      function Le(t, e) {
        var n = [];
        return (
          Pe(t, function (t) {
            t.inRange(e.x, e.y) && n.push(t);
          }),
          n
        );
      }
      function De(t, e, n, r) {
        var i = Number.POSITIVE_INFINITY,
          o = [];
        return (
          Pe(t, function (t) {
            if (!n || t.inRange(e.x, e.y)) {
              var a = t.getCenterPoint(),
                s = r(e, a);
              s < i ? ((o = [t]), (i = s)) : s === i && o.push(t);
            }
          }),
          o
        );
      }
      function Ie(t) {
        var e = -1 !== t.indexOf("x"),
          n = -1 !== t.indexOf("y");
        return function (t, r) {
          var i = e ? Math.abs(t.x - r.x) : 0,
            o = n ? Math.abs(t.y - r.y) : 0;
          return Math.sqrt(Math.pow(i, 2) + Math.pow(o, 2));
        };
      }
      function Ne(t, e, n) {
        var r = Ee(e, t);
        n.axis = n.axis || "x";
        var i = Ie(n.axis),
          o = n.intersect ? Le(t, r) : De(t, r, !1, i),
          a = [];
        return o.length
          ? (t._getSortedVisibleDatasetMetas().forEach(function (t) {
              var e = t.data[o[0]._index];
              e && !e._view.skip && a.push(e);
            }),
            a)
          : [];
      }
      var Fe = {
          modes: {
            single: function (t, e) {
              var n = Ee(e, t),
                r = [];
              return (
                Pe(t, function (t) {
                  if (t.inRange(n.x, n.y)) return r.push(t), r;
                }),
                r.slice(0, 1)
              );
            },
            label: Ne,
            index: Ne,
            dataset: function (t, e, n) {
              var r = Ee(e, t);
              n.axis = n.axis || "xy";
              var i = Ie(n.axis),
                o = n.intersect ? Le(t, r) : De(t, r, !1, i);
              return (
                o.length > 0 && (o = t.getDatasetMeta(o[0]._datasetIndex).data),
                o
              );
            },
            "x-axis": function (t, e) {
              return Ne(t, e, { intersect: !1 });
            },
            point: function (t, e) {
              var n = Ee(e, t);
              return Le(t, n);
            },
            nearest: function (t, e, n) {
              var r = Ee(e, t);
              n.axis = n.axis || "xy";
              var i = Ie(n.axis);
              return De(t, r, n.intersect, i);
            },
            x: function (t, e, n) {
              var r = Ee(e, t),
                i = [],
                o = !1;
              return (
                Pe(t, function (t) {
                  t.inXRange(r.x) && i.push(t), t.inRange(r.x, r.y) && (o = !0);
                }),
                n.intersect && !o && (i = []),
                i
              );
            },
            y: function (t, e, n) {
              var r = Ee(e, t),
                i = [],
                o = !1;
              return (
                Pe(t, function (t) {
                  t.inYRange(r.y) && i.push(t), t.inRange(r.x, r.y) && (o = !0);
                }),
                n.intersect && !o && (i = []),
                i
              );
            },
          },
        },
        Re = ut.extend;
      function je(t, e) {
        return ut.where(t, function (t) {
          return t.pos === e;
        });
      }
      function ze(t, e) {
        return t.sort(function (t, n) {
          var r = e ? n : t,
            i = e ? t : n;
          return r.weight === i.weight
            ? r.index - i.index
            : r.weight - i.weight;
        });
      }
      function He(t) {
        var e,
          n,
          r,
          i = [];
        for (e = 0, n = (t || []).length; e < n; ++e)
          (r = t[e]),
            i.push({
              index: e,
              box: r,
              pos: r.position,
              horizontal: r.isHorizontal(),
              weight: r.weight,
            });
        return i;
      }
      function Be(t, e) {
        var n, r, i;
        for (n = 0, r = t.length; n < r; ++n)
          (i = t[n]),
            (i.width = i.horizontal
              ? i.box.fullWidth && e.availableWidth
              : e.vBoxMaxWidth),
            (i.height = i.horizontal && e.hBoxMaxHeight);
      }
      function Ve(t) {
        var e = He(t),
          n = ze(je(e, "left"), !0),
          r = ze(je(e, "right")),
          i = ze(je(e, "top"), !0),
          o = ze(je(e, "bottom"));
        return {
          leftAndTop: n.concat(i),
          rightAndBottom: r.concat(o),
          chartArea: je(e, "chartArea"),
          vertical: n.concat(r),
          horizontal: i.concat(o),
        };
      }
      function $e(t, e, n, r) {
        return Math.max(t[n], e[n]) + Math.max(t[r], e[r]);
      }
      function We(t, e, n) {
        var r,
          i,
          o = n.box,
          a = t.maxPadding;
        if (
          (n.size && (t[n.pos] -= n.size),
          (n.size = n.horizontal ? o.height : o.width),
          (t[n.pos] += n.size),
          o.getPadding)
        ) {
          var s = o.getPadding();
          (a.top = Math.max(a.top, s.top)),
            (a.left = Math.max(a.left, s.left)),
            (a.bottom = Math.max(a.bottom, s.bottom)),
            (a.right = Math.max(a.right, s.right));
        }
        if (
          ((r = e.outerWidth - $e(a, t, "left", "right")),
          (i = e.outerHeight - $e(a, t, "top", "bottom")),
          r !== t.w || i !== t.h)
        ) {
          (t.w = r), (t.h = i);
          var l = n.horizontal ? [r, t.w] : [i, t.h];
          return l[0] !== l[1] && (!isNaN(l[0]) || !isNaN(l[1]));
        }
      }
      function Ue(t) {
        var e = t.maxPadding;
        function n(n) {
          var r = Math.max(e[n] - t[n], 0);
          return (t[n] += r), r;
        }
        (t.y += n("top")), (t.x += n("left")), n("right"), n("bottom");
      }
      function qe(t, e) {
        var n = e.maxPadding;
        function r(t) {
          var r = { left: 0, top: 0, right: 0, bottom: 0 };
          return (
            t.forEach(function (t) {
              r[t] = Math.max(e[t], n[t]);
            }),
            r
          );
        }
        return r(t ? ["left", "right"] : ["top", "bottom"]);
      }
      function Ye(t, e, n) {
        var r,
          i,
          o,
          a,
          s,
          l,
          c = [];
        for (r = 0, i = t.length; r < i; ++r)
          (o = t[r]),
            (a = o.box),
            a.update(o.width || e.w, o.height || e.h, qe(o.horizontal, e)),
            We(e, n, o) && ((l = !0), c.length && (s = !0)),
            a.fullWidth || c.push(o);
        return (s && Ye(c, e, n)) || l;
      }
      function Ge(t, e, n) {
        var r,
          i,
          o,
          a,
          s = n.padding,
          l = e.x,
          c = e.y;
        for (r = 0, i = t.length; r < i; ++r)
          (o = t[r]),
            (a = o.box),
            o.horizontal
              ? ((a.left = a.fullWidth ? s.left : e.left),
                (a.right = a.fullWidth ? n.outerWidth - s.right : e.left + e.w),
                (a.top = c),
                (a.bottom = c + a.height),
                (a.width = a.right - a.left),
                (c = a.bottom))
              : ((a.left = l),
                (a.right = l + a.width),
                (a.top = e.top),
                (a.bottom = e.top + e.h),
                (a.height = a.bottom - a.top),
                (l = a.right));
        (e.x = l), (e.y = c);
      }
      J._set("global", {
        layout: { padding: { top: 0, right: 0, bottom: 0, left: 0 } },
      });
      var Xe = {
          defaults: {},
          addBox: function (t, e) {
            t.boxes || (t.boxes = []),
              (e.fullWidth = e.fullWidth || !1),
              (e.position = e.position || "top"),
              (e.weight = e.weight || 0),
              (e._layers =
                e._layers ||
                function () {
                  return [
                    {
                      z: 0,
                      draw: function () {
                        e.draw.apply(e, arguments);
                      },
                    },
                  ];
                }),
              t.boxes.push(e);
          },
          removeBox: function (t, e) {
            var n = t.boxes ? t.boxes.indexOf(e) : -1;
            -1 !== n && t.boxes.splice(n, 1);
          },
          configure: function (t, e, n) {
            for (
              var r,
                i = ["fullWidth", "position", "weight"],
                o = i.length,
                a = 0;
              a < o;
              ++a
            )
              (r = i[a]), n.hasOwnProperty(r) && (e[r] = n[r]);
          },
          update: function (t, e, n) {
            if (t) {
              var r = t.options.layout || {},
                i = ut.options.toPadding(r.padding),
                o = e - i.width,
                a = n - i.height,
                s = Ve(t.boxes),
                l = s.vertical,
                c = s.horizontal,
                u = Object.freeze({
                  outerWidth: e,
                  outerHeight: n,
                  padding: i,
                  availableWidth: o,
                  vBoxMaxWidth: o / 2 / l.length,
                  hBoxMaxHeight: a / 2,
                }),
                d = Re(
                  { maxPadding: Re({}, i), w: o, h: a, x: i.left, y: i.top },
                  i
                );
              Be(l.concat(c), u),
                Ye(l, d, u),
                Ye(c, d, u) && Ye(l, d, u),
                Ue(d),
                Ge(s.leftAndTop, d, u),
                (d.x += d.w),
                (d.y += d.h),
                Ge(s.rightAndBottom, d, u),
                (t.chartArea = {
                  left: d.left,
                  top: d.top,
                  right: d.left + d.w,
                  bottom: d.top + d.h,
                }),
                ut.each(s.chartArea, function (e) {
                  var n = e.box;
                  Re(n, t.chartArea), n.update(d.w, d.h);
                });
            }
          },
        },
        Ke = {
          acquireContext: function (t) {
            return (
              t && t.canvas && (t = t.canvas), (t && t.getContext("2d")) || null
            );
          },
        },
        Ze =
          "/*\r\n * DOM element rendering detection\r\n * https://davidwalsh.name/detect-node-insertion\r\n */\r\n@keyframes chartjs-render-animation {\r\n\tfrom { opacity: 0.99; }\r\n\tto { opacity: 1; }\r\n}\r\n\r\n.chartjs-render-monitor {\r\n\tanimation: chartjs-render-animation 0.001s;\r\n}\r\n\r\n/*\r\n * DOM element resizing detection\r\n * https://github.com/marcj/css-element-queries\r\n */\r\n.chartjs-size-monitor,\r\n.chartjs-size-monitor-expand,\r\n.chartjs-size-monitor-shrink {\r\n\tposition: absolute;\r\n\tdirection: ltr;\r\n\tleft: 0;\r\n\ttop: 0;\r\n\tright: 0;\r\n\tbottom: 0;\r\n\toverflow: hidden;\r\n\tpointer-events: none;\r\n\tvisibility: hidden;\r\n\tz-index: -1;\r\n}\r\n\r\n.chartjs-size-monitor-expand > div {\r\n\tposition: absolute;\r\n\twidth: 1000000px;\r\n\theight: 1000000px;\r\n\tleft: 0;\r\n\ttop: 0;\r\n}\r\n\r\n.chartjs-size-monitor-shrink > div {\r\n\tposition: absolute;\r\n\twidth: 200%;\r\n\theight: 200%;\r\n\tleft: 0;\r\n\ttop: 0;\r\n}\r\n",
        Je = Object.freeze({ __proto__: null, default: Ze }),
        Qe = n(Je),
        tn = "$chartjs",
        en = "chartjs-",
        nn = en + "size-monitor",
        rn = en + "render-monitor",
        on = en + "render-animation",
        an = ["animationstart", "webkitAnimationStart"],
        sn = {
          touchstart: "mousedown",
          touchmove: "mousemove",
          touchend: "mouseup",
          pointerenter: "mouseenter",
          pointerdown: "mousedown",
          pointermove: "mousemove",
          pointerup: "mouseup",
          pointerleave: "mouseout",
          pointerout: "mouseout",
        };
      function ln(t, e) {
        var n = ut.getStyle(t, e),
          r = n && n.match(/^(\d+)(\.\d+)?px$/);
        return r ? Number(r[1]) : void 0;
      }
      function cn(t, e) {
        var n = t.style,
          r = t.getAttribute("height"),
          i = t.getAttribute("width");
        if (
          ((t[tn] = {
            initial: {
              height: r,
              width: i,
              style: { display: n.display, height: n.height, width: n.width },
            },
          }),
          (n.display = n.display || "block"),
          null === i || "" === i)
        ) {
          var o = ln(t, "width");
          void 0 !== o && (t.width = o);
        }
        if (null === r || "" === r)
          if ("" === t.style.height)
            t.height = t.width / (e.options.aspectRatio || 2);
          else {
            var a = ln(t, "height");
            void 0 !== o && (t.height = a);
          }
        return t;
      }
      var un = (function () {
          var t = !1;
          try {
            var e = Object.defineProperty({}, "passive", {
              get: function () {
                t = !0;
              },
            });
            window.addEventListener("e", null, e);
          } catch (n) {}
          return t;
        })(),
        dn = !!un && { passive: !0 };
      function fn(t, e, n) {
        t.addEventListener(e, n, dn);
      }
      function hn(t, e, n) {
        t.removeEventListener(e, n, dn);
      }
      function pn(t, e, n, r, i) {
        return {
          type: t,
          chart: e,
          native: i || null,
          x: void 0 !== n ? n : null,
          y: void 0 !== r ? r : null,
        };
      }
      function gn(t, e) {
        var n = sn[t.type] || t.type,
          r = ut.getRelativePosition(t, e);
        return pn(n, e, r.x, r.y, t);
      }
      function vn(t, e) {
        var n = !1,
          r = [];
        return function () {
          (r = Array.prototype.slice.call(arguments)),
            (e = e || this),
            n ||
              ((n = !0),
              ut.requestAnimFrame.call(window, function () {
                (n = !1), t.apply(e, r);
              }));
        };
      }
      function mn(t) {
        var e = document.createElement("div");
        return (e.className = t || ""), e;
      }
      function bn(t) {
        var e = 1e6,
          n = mn(nn),
          r = mn(nn + "-expand"),
          i = mn(nn + "-shrink");
        r.appendChild(mn()),
          i.appendChild(mn()),
          n.appendChild(r),
          n.appendChild(i),
          (n._reset = function () {
            (r.scrollLeft = e),
              (r.scrollTop = e),
              (i.scrollLeft = e),
              (i.scrollTop = e);
          });
        var o = function () {
          n._reset(), t();
        };
        return (
          fn(r, "scroll", o.bind(r, "expand")),
          fn(i, "scroll", o.bind(i, "shrink")),
          n
        );
      }
      function yn(t, e) {
        var n = t[tn] || (t[tn] = {}),
          r = (n.renderProxy = function (t) {
            t.animationName === on && e();
          });
        ut.each(an, function (e) {
          fn(t, e, r);
        }),
          (n.reflow = !!t.offsetParent),
          t.classList.add(rn);
      }
      function xn(t) {
        var e = t[tn] || {},
          n = e.renderProxy;
        n &&
          (ut.each(an, function (e) {
            hn(t, e, n);
          }),
          delete e.renderProxy),
          t.classList.remove(rn);
      }
      function _n(t, e, n) {
        var r = t[tn] || (t[tn] = {}),
          i = (r.resizer = bn(
            vn(function () {
              if (r.resizer) {
                var i = n.options.maintainAspectRatio && t.parentNode,
                  o = i ? i.clientWidth : 0;
                e(pn("resize", n)),
                  i && i.clientWidth < o && n.canvas && e(pn("resize", n));
              }
            })
          ));
        yn(t, function () {
          if (r.resizer) {
            var e = t.parentNode;
            e && e !== i.parentNode && e.insertBefore(i, e.firstChild),
              i._reset();
          }
        });
      }
      function wn(t) {
        var e = t[tn] || {},
          n = e.resizer;
        delete e.resizer,
          xn(t),
          n && n.parentNode && n.parentNode.removeChild(n);
      }
      function kn(t, e) {
        var n = t[tn] || (t[tn] = {});
        if (!n.containsStyles) {
          (n.containsStyles = !0), (e = "/* Chart.js */\n" + e);
          var r = document.createElement("style");
          r.setAttribute("type", "text/css"),
            r.appendChild(document.createTextNode(e)),
            t.appendChild(r);
        }
      }
      var Cn = {
        disableCSSInjection: !1,
        _enabled:
          "undefined" !== typeof window && "undefined" !== typeof document,
        _ensureLoaded: function (t) {
          if (!this.disableCSSInjection) {
            var e = t.getRootNode ? t.getRootNode() : document,
              n = e.host ? e : document.head;
            kn(n, Qe);
          }
        },
        acquireContext: function (t, e) {
          "string" === typeof t
            ? (t = document.getElementById(t))
            : t.length && (t = t[0]),
            t && t.canvas && (t = t.canvas);
          var n = t && t.getContext && t.getContext("2d");
          return n && n.canvas === t
            ? (this._ensureLoaded(t), cn(t, e), n)
            : null;
        },
        releaseContext: function (t) {
          var e = t.canvas;
          if (e[tn]) {
            var n = e[tn].initial;
            ["height", "width"].forEach(function (t) {
              var r = n[t];
              ut.isNullOrUndef(r) ? e.removeAttribute(t) : e.setAttribute(t, r);
            }),
              ut.each(n.style || {}, function (t, n) {
                e.style[n] = t;
              }),
              (e.width = e.width),
              delete e[tn];
          }
        },
        addEventListener: function (t, e, n) {
          var r = t.canvas;
          if ("resize" !== e) {
            var i = n[tn] || (n[tn] = {}),
              o = i.proxies || (i.proxies = {}),
              a = (o[t.id + "_" + e] = function (e) {
                n(gn(e, t));
              });
            fn(r, e, a);
          } else _n(r, n, t);
        },
        removeEventListener: function (t, e, n) {
          var r = t.canvas;
          if ("resize" !== e) {
            var i = n[tn] || {},
              o = i.proxies || {},
              a = o[t.id + "_" + e];
            a && hn(r, e, a);
          } else wn(r);
        },
      };
      (ut.addEvent = fn), (ut.removeEvent = hn);
      var Mn = Cn._enabled ? Cn : Ke,
        Sn = ut.extend(
          {
            initialize: function () {},
            acquireContext: function () {},
            releaseContext: function () {},
            addEventListener: function () {},
            removeEventListener: function () {},
          },
          Mn
        );
      J._set("global", { plugins: {} });
      var An = {
          _plugins: [],
          _cacheId: 0,
          register: function (t) {
            var e = this._plugins;
            [].concat(t).forEach(function (t) {
              -1 === e.indexOf(t) && e.push(t);
            }),
              this._cacheId++;
          },
          unregister: function (t) {
            var e = this._plugins;
            [].concat(t).forEach(function (t) {
              var n = e.indexOf(t);
              -1 !== n && e.splice(n, 1);
            }),
              this._cacheId++;
          },
          clear: function () {
            (this._plugins = []), this._cacheId++;
          },
          count: function () {
            return this._plugins.length;
          },
          getAll: function () {
            return this._plugins;
          },
          notify: function (t, e, n) {
            var r,
              i,
              o,
              a,
              s,
              l = this.descriptors(t),
              c = l.length;
            for (r = 0; r < c; ++r)
              if (
                ((i = l[r]),
                (o = i.plugin),
                (s = o[e]),
                "function" === typeof s &&
                  ((a = [t].concat(n || [])),
                  a.push(i.options),
                  !1 === s.apply(o, a)))
              )
                return !1;
            return !0;
          },
          descriptors: function (t) {
            var e = t.$plugins || (t.$plugins = {});
            if (e.id === this._cacheId) return e.descriptors;
            var n = [],
              r = [],
              i = (t && t.config) || {},
              o = (i.options && i.options.plugins) || {};
            return (
              this._plugins.concat(i.plugins || []).forEach(function (t) {
                var e = n.indexOf(t);
                if (-1 === e) {
                  var i = t.id,
                    a = o[i];
                  !1 !== a &&
                    (!0 === a && (a = ut.clone(J.global.plugins[i])),
                    n.push(t),
                    r.push({ plugin: t, options: a || {} }));
                }
              }),
              (e.descriptors = r),
              (e.id = this._cacheId),
              r
            );
          },
          _invalidate: function (t) {
            delete t.$plugins;
          },
        },
        Tn = {
          constructors: {},
          defaults: {},
          registerScaleType: function (t, e, n) {
            (this.constructors[t] = e), (this.defaults[t] = ut.clone(n));
          },
          getScaleConstructor: function (t) {
            return this.constructors.hasOwnProperty(t)
              ? this.constructors[t]
              : void 0;
          },
          getScaleDefaults: function (t) {
            return this.defaults.hasOwnProperty(t)
              ? ut.merge(Object.create(null), [J.scale, this.defaults[t]])
              : {};
          },
          updateScaleDefaults: function (t, e) {
            var n = this;
            n.defaults.hasOwnProperty(t) &&
              (n.defaults[t] = ut.extend(n.defaults[t], e));
          },
          addScalesToLayout: function (t) {
            ut.each(t.scales, function (e) {
              (e.fullWidth = e.options.fullWidth),
                (e.position = e.options.position),
                (e.weight = e.options.weight),
                Xe.addBox(t, e);
            });
          },
        },
        On = ut.valueOrDefault,
        En = ut.rtl.getRtlAdapter;
      J._set("global", {
        tooltips: {
          enabled: !0,
          custom: null,
          mode: "nearest",
          position: "average",
          intersect: !0,
          backgroundColor: "rgba(0,0,0,0.8)",
          titleFontStyle: "bold",
          titleSpacing: 2,
          titleMarginBottom: 6,
          titleFontColor: "#fff",
          titleAlign: "left",
          bodySpacing: 2,
          bodyFontColor: "#fff",
          bodyAlign: "left",
          footerFontStyle: "bold",
          footerSpacing: 2,
          footerMarginTop: 6,
          footerFontColor: "#fff",
          footerAlign: "left",
          yPadding: 6,
          xPadding: 6,
          caretPadding: 2,
          caretSize: 5,
          cornerRadius: 6,
          multiKeyBackground: "#fff",
          displayColors: !0,
          borderColor: "rgba(0,0,0,0)",
          borderWidth: 0,
          callbacks: {
            beforeTitle: ut.noop,
            title: function (t, e) {
              var n = "",
                r = e.labels,
                i = r ? r.length : 0;
              if (t.length > 0) {
                var o = t[0];
                o.label
                  ? (n = o.label)
                  : o.xLabel
                  ? (n = o.xLabel)
                  : i > 0 && o.index < i && (n = r[o.index]);
              }
              return n;
            },
            afterTitle: ut.noop,
            beforeBody: ut.noop,
            beforeLabel: ut.noop,
            label: function (t, e) {
              var n = e.datasets[t.datasetIndex].label || "";
              return (
                n && (n += ": "),
                ut.isNullOrUndef(t.value) ? (n += t.yLabel) : (n += t.value),
                n
              );
            },
            labelColor: function (t, e) {
              var n = e.getDatasetMeta(t.datasetIndex),
                r = n.data[t.index],
                i = r._view;
              return {
                borderColor: i.borderColor,
                backgroundColor: i.backgroundColor,
              };
            },
            labelTextColor: function () {
              return this._options.bodyFontColor;
            },
            afterLabel: ut.noop,
            afterBody: ut.noop,
            beforeFooter: ut.noop,
            footer: ut.noop,
            afterFooter: ut.noop,
          },
        },
      });
      var Pn = {
        average: function (t) {
          if (!t.length) return !1;
          var e,
            n,
            r = 0,
            i = 0,
            o = 0;
          for (e = 0, n = t.length; e < n; ++e) {
            var a = t[e];
            if (a && a.hasValue()) {
              var s = a.tooltipPosition();
              (r += s.x), (i += s.y), ++o;
            }
          }
          return { x: r / o, y: i / o };
        },
        nearest: function (t, e) {
          var n,
            r,
            i,
            o = e.x,
            a = e.y,
            s = Number.POSITIVE_INFINITY;
          for (n = 0, r = t.length; n < r; ++n) {
            var l = t[n];
            if (l && l.hasValue()) {
              var c = l.getCenterPoint(),
                u = ut.distanceBetweenPoints(e, c);
              u < s && ((s = u), (i = l));
            }
          }
          if (i) {
            var d = i.tooltipPosition();
            (o = d.x), (a = d.y);
          }
          return { x: o, y: a };
        },
      };
      function Ln(t, e) {
        return (
          e && (ut.isArray(e) ? Array.prototype.push.apply(t, e) : t.push(e)), t
        );
      }
      function Dn(t) {
        return ("string" === typeof t || t instanceof String) &&
          t.indexOf("\n") > -1
          ? t.split("\n")
          : t;
      }
      function In(t) {
        var e = t._xScale,
          n = t._yScale || t._scale,
          r = t._index,
          i = t._datasetIndex,
          o = t._chart.getDatasetMeta(i).controller,
          a = o._getIndexScale(),
          s = o._getValueScale();
        return {
          xLabel: e ? e.getLabelForIndex(r, i) : "",
          yLabel: n ? n.getLabelForIndex(r, i) : "",
          label: a ? "" + a.getLabelForIndex(r, i) : "",
          value: s ? "" + s.getLabelForIndex(r, i) : "",
          index: r,
          datasetIndex: i,
          x: t._model.x,
          y: t._model.y,
        };
      }
      function Nn(t) {
        var e = J.global;
        return {
          xPadding: t.xPadding,
          yPadding: t.yPadding,
          xAlign: t.xAlign,
          yAlign: t.yAlign,
          rtl: t.rtl,
          textDirection: t.textDirection,
          bodyFontColor: t.bodyFontColor,
          _bodyFontFamily: On(t.bodyFontFamily, e.defaultFontFamily),
          _bodyFontStyle: On(t.bodyFontStyle, e.defaultFontStyle),
          _bodyAlign: t.bodyAlign,
          bodyFontSize: On(t.bodyFontSize, e.defaultFontSize),
          bodySpacing: t.bodySpacing,
          titleFontColor: t.titleFontColor,
          _titleFontFamily: On(t.titleFontFamily, e.defaultFontFamily),
          _titleFontStyle: On(t.titleFontStyle, e.defaultFontStyle),
          titleFontSize: On(t.titleFontSize, e.defaultFontSize),
          _titleAlign: t.titleAlign,
          titleSpacing: t.titleSpacing,
          titleMarginBottom: t.titleMarginBottom,
          footerFontColor: t.footerFontColor,
          _footerFontFamily: On(t.footerFontFamily, e.defaultFontFamily),
          _footerFontStyle: On(t.footerFontStyle, e.defaultFontStyle),
          footerFontSize: On(t.footerFontSize, e.defaultFontSize),
          _footerAlign: t.footerAlign,
          footerSpacing: t.footerSpacing,
          footerMarginTop: t.footerMarginTop,
          caretSize: t.caretSize,
          cornerRadius: t.cornerRadius,
          backgroundColor: t.backgroundColor,
          opacity: 0,
          legendColorBackground: t.multiKeyBackground,
          displayColors: t.displayColors,
          borderColor: t.borderColor,
          borderWidth: t.borderWidth,
        };
      }
      function Fn(t, e) {
        var n = t._chart.ctx,
          r = 2 * e.yPadding,
          i = 0,
          o = e.body,
          a = o.reduce(function (t, e) {
            return t + e.before.length + e.lines.length + e.after.length;
          }, 0);
        a += e.beforeBody.length + e.afterBody.length;
        var s = e.title.length,
          l = e.footer.length,
          c = e.titleFontSize,
          u = e.bodyFontSize,
          d = e.footerFontSize;
        (r += s * c),
          (r += s ? (s - 1) * e.titleSpacing : 0),
          (r += s ? e.titleMarginBottom : 0),
          (r += a * u),
          (r += a ? (a - 1) * e.bodySpacing : 0),
          (r += l ? e.footerMarginTop : 0),
          (r += l * d),
          (r += l ? (l - 1) * e.footerSpacing : 0);
        var f = 0,
          h = function (t) {
            i = Math.max(i, n.measureText(t).width + f);
          };
        return (
          (n.font = ut.fontString(c, e._titleFontStyle, e._titleFontFamily)),
          ut.each(e.title, h),
          (n.font = ut.fontString(u, e._bodyFontStyle, e._bodyFontFamily)),
          ut.each(e.beforeBody.concat(e.afterBody), h),
          (f = e.displayColors ? u + 2 : 0),
          ut.each(o, function (t) {
            ut.each(t.before, h), ut.each(t.lines, h), ut.each(t.after, h);
          }),
          (f = 0),
          (n.font = ut.fontString(d, e._footerFontStyle, e._footerFontFamily)),
          ut.each(e.footer, h),
          (i += 2 * e.xPadding),
          { width: i, height: r }
        );
      }
      function Rn(t, e) {
        var n,
          r,
          i,
          o,
          a,
          s = t._model,
          l = t._chart,
          c = t._chart.chartArea,
          u = "center",
          d = "center";
        s.y < e.height
          ? (d = "top")
          : s.y > l.height - e.height && (d = "bottom");
        var f = (c.left + c.right) / 2,
          h = (c.top + c.bottom) / 2;
        "center" === d
          ? ((n = function (t) {
              return t <= f;
            }),
            (r = function (t) {
              return t > f;
            }))
          : ((n = function (t) {
              return t <= e.width / 2;
            }),
            (r = function (t) {
              return t >= l.width - e.width / 2;
            })),
          (i = function (t) {
            return t + e.width + s.caretSize + s.caretPadding > l.width;
          }),
          (o = function (t) {
            return t - e.width - s.caretSize - s.caretPadding < 0;
          }),
          (a = function (t) {
            return t <= h ? "top" : "bottom";
          }),
          n(s.x)
            ? ((u = "left"), i(s.x) && ((u = "center"), (d = a(s.y))))
            : r(s.x) &&
              ((u = "right"), o(s.x) && ((u = "center"), (d = a(s.y))));
        var p = t._options;
        return {
          xAlign: p.xAlign ? p.xAlign : u,
          yAlign: p.yAlign ? p.yAlign : d,
        };
      }
      function jn(t, e, n, r) {
        var i = t.x,
          o = t.y,
          a = t.caretSize,
          s = t.caretPadding,
          l = t.cornerRadius,
          c = n.xAlign,
          u = n.yAlign,
          d = a + s,
          f = l + s;
        return (
          "right" === c
            ? (i -= e.width)
            : "center" === c &&
              ((i -= e.width / 2),
              i + e.width > r.width && (i = r.width - e.width),
              i < 0 && (i = 0)),
          "top" === u
            ? (o += d)
            : (o -= "bottom" === u ? e.height + d : e.height / 2),
          "center" === u
            ? "left" === c
              ? (i += d)
              : "right" === c && (i -= d)
            : "left" === c
            ? (i -= f)
            : "right" === c && (i += f),
          { x: i, y: o }
        );
      }
      function zn(t, e) {
        return "center" === e
          ? t.x + t.width / 2
          : "right" === e
          ? t.x + t.width - t.xPadding
          : t.x + t.xPadding;
      }
      function Hn(t) {
        return Ln([], Dn(t));
      }
      var Bn = bt.extend({
          initialize: function () {
            (this._model = Nn(this._options)), (this._lastActive = []);
          },
          getTitle: function () {
            var t = this,
              e = t._options,
              n = e.callbacks,
              r = n.beforeTitle.apply(t, arguments),
              i = n.title.apply(t, arguments),
              o = n.afterTitle.apply(t, arguments),
              a = [];
            return (
              (a = Ln(a, Dn(r))), (a = Ln(a, Dn(i))), (a = Ln(a, Dn(o))), a
            );
          },
          getBeforeBody: function () {
            return Hn(
              this._options.callbacks.beforeBody.apply(this, arguments)
            );
          },
          getBody: function (t, e) {
            var n = this,
              r = n._options.callbacks,
              i = [];
            return (
              ut.each(t, function (t) {
                var o = { before: [], lines: [], after: [] };
                Ln(o.before, Dn(r.beforeLabel.call(n, t, e))),
                  Ln(o.lines, r.label.call(n, t, e)),
                  Ln(o.after, Dn(r.afterLabel.call(n, t, e))),
                  i.push(o);
              }),
              i
            );
          },
          getAfterBody: function () {
            return Hn(this._options.callbacks.afterBody.apply(this, arguments));
          },
          getFooter: function () {
            var t = this,
              e = t._options.callbacks,
              n = e.beforeFooter.apply(t, arguments),
              r = e.footer.apply(t, arguments),
              i = e.afterFooter.apply(t, arguments),
              o = [];
            return (
              (o = Ln(o, Dn(n))), (o = Ln(o, Dn(r))), (o = Ln(o, Dn(i))), o
            );
          },
          update: function (t) {
            var e,
              n,
              r = this,
              i = r._options,
              o = r._model,
              a = (r._model = Nn(i)),
              s = r._active,
              l = r._data,
              c = { xAlign: o.xAlign, yAlign: o.yAlign },
              u = { x: o.x, y: o.y },
              d = { width: o.width, height: o.height },
              f = { x: o.caretX, y: o.caretY };
            if (s.length) {
              a.opacity = 1;
              var h = [],
                p = [];
              f = Pn[i.position].call(r, s, r._eventPosition);
              var g = [];
              for (e = 0, n = s.length; e < n; ++e) g.push(In(s[e]));
              i.filter &&
                (g = g.filter(function (t) {
                  return i.filter(t, l);
                })),
                i.itemSort &&
                  (g = g.sort(function (t, e) {
                    return i.itemSort(t, e, l);
                  })),
                ut.each(g, function (t) {
                  h.push(i.callbacks.labelColor.call(r, t, r._chart)),
                    p.push(i.callbacks.labelTextColor.call(r, t, r._chart));
                }),
                (a.title = r.getTitle(g, l)),
                (a.beforeBody = r.getBeforeBody(g, l)),
                (a.body = r.getBody(g, l)),
                (a.afterBody = r.getAfterBody(g, l)),
                (a.footer = r.getFooter(g, l)),
                (a.x = f.x),
                (a.y = f.y),
                (a.caretPadding = i.caretPadding),
                (a.labelColors = h),
                (a.labelTextColors = p),
                (a.dataPoints = g),
                (d = Fn(this, a)),
                (c = Rn(this, d)),
                (u = jn(a, d, c, r._chart));
            } else a.opacity = 0;
            return (
              (a.xAlign = c.xAlign),
              (a.yAlign = c.yAlign),
              (a.x = u.x),
              (a.y = u.y),
              (a.width = d.width),
              (a.height = d.height),
              (a.caretX = f.x),
              (a.caretY = f.y),
              (r._model = a),
              t && i.custom && i.custom.call(r, a),
              r
            );
          },
          drawCaret: function (t, e) {
            var n = this._chart.ctx,
              r = this._view,
              i = this.getCaretPosition(t, e, r);
            n.lineTo(i.x1, i.y1), n.lineTo(i.x2, i.y2), n.lineTo(i.x3, i.y3);
          },
          getCaretPosition: function (t, e, n) {
            var r,
              i,
              o,
              a,
              s,
              l,
              c = n.caretSize,
              u = n.cornerRadius,
              d = n.xAlign,
              f = n.yAlign,
              h = t.x,
              p = t.y,
              g = e.width,
              v = e.height;
            if ("center" === f)
              (s = p + v / 2),
                "left" === d
                  ? ((r = h), (i = r - c), (o = r), (a = s + c), (l = s - c))
                  : ((r = h + g),
                    (i = r + c),
                    (o = r),
                    (a = s - c),
                    (l = s + c));
            else if (
              ("left" === d
                ? ((i = h + u + c), (r = i - c), (o = i + c))
                : "right" === d
                ? ((i = h + g - u - c), (r = i - c), (o = i + c))
                : ((i = n.caretX), (r = i - c), (o = i + c)),
              "top" === f)
            )
              (a = p), (s = a - c), (l = a);
            else {
              (a = p + v), (s = a + c), (l = a);
              var m = o;
              (o = r), (r = m);
            }
            return { x1: r, x2: i, x3: o, y1: a, y2: s, y3: l };
          },
          drawTitle: function (t, e, n) {
            var r,
              i,
              o,
              a = e.title,
              s = a.length;
            if (s) {
              var l = En(e.rtl, e.x, e.width);
              for (
                t.x = zn(e, e._titleAlign),
                  n.textAlign = l.textAlign(e._titleAlign),
                  n.textBaseline = "middle",
                  r = e.titleFontSize,
                  i = e.titleSpacing,
                  n.fillStyle = e.titleFontColor,
                  n.font = ut.fontString(
                    r,
                    e._titleFontStyle,
                    e._titleFontFamily
                  ),
                  o = 0;
                o < s;
                ++o
              )
                n.fillText(a[o], l.x(t.x), t.y + r / 2),
                  (t.y += r + i),
                  o + 1 === s && (t.y += e.titleMarginBottom - i);
            }
          },
          drawBody: function (t, e, n) {
            var r,
              i,
              o,
              a,
              s,
              l,
              c,
              u,
              d = e.bodyFontSize,
              f = e.bodySpacing,
              h = e._bodyAlign,
              p = e.body,
              g = e.displayColors,
              v = 0,
              m = g ? zn(e, "left") : 0,
              b = En(e.rtl, e.x, e.width),
              y = function (e) {
                n.fillText(e, b.x(t.x + v), t.y + d / 2), (t.y += d + f);
              },
              x = b.textAlign(h);
            for (
              n.textAlign = h,
                n.textBaseline = "middle",
                n.font = ut.fontString(d, e._bodyFontStyle, e._bodyFontFamily),
                t.x = zn(e, x),
                n.fillStyle = e.bodyFontColor,
                ut.each(e.beforeBody, y),
                v =
                  g && "right" !== x ? ("center" === h ? d / 2 + 1 : d + 2) : 0,
                s = 0,
                c = p.length;
              s < c;
              ++s
            ) {
              for (
                r = p[s],
                  i = e.labelTextColors[s],
                  o = e.labelColors[s],
                  n.fillStyle = i,
                  ut.each(r.before, y),
                  a = r.lines,
                  l = 0,
                  u = a.length;
                l < u;
                ++l
              ) {
                if (g) {
                  var _ = b.x(m);
                  (n.fillStyle = e.legendColorBackground),
                    n.fillRect(b.leftForLtr(_, d), t.y, d, d),
                    (n.lineWidth = 1),
                    (n.strokeStyle = o.borderColor),
                    n.strokeRect(b.leftForLtr(_, d), t.y, d, d),
                    (n.fillStyle = o.backgroundColor),
                    n.fillRect(
                      b.leftForLtr(b.xPlus(_, 1), d - 2),
                      t.y + 1,
                      d - 2,
                      d - 2
                    ),
                    (n.fillStyle = i);
                }
                y(a[l]);
              }
              ut.each(r.after, y);
            }
            (v = 0), ut.each(e.afterBody, y), (t.y -= f);
          },
          drawFooter: function (t, e, n) {
            var r,
              i,
              o = e.footer,
              a = o.length;
            if (a) {
              var s = En(e.rtl, e.x, e.width);
              for (
                t.x = zn(e, e._footerAlign),
                  t.y += e.footerMarginTop,
                  n.textAlign = s.textAlign(e._footerAlign),
                  n.textBaseline = "middle",
                  r = e.footerFontSize,
                  n.fillStyle = e.footerFontColor,
                  n.font = ut.fontString(
                    r,
                    e._footerFontStyle,
                    e._footerFontFamily
                  ),
                  i = 0;
                i < a;
                ++i
              )
                n.fillText(o[i], s.x(t.x), t.y + r / 2),
                  (t.y += r + e.footerSpacing);
            }
          },
          drawBackground: function (t, e, n, r) {
            (n.fillStyle = e.backgroundColor),
              (n.strokeStyle = e.borderColor),
              (n.lineWidth = e.borderWidth);
            var i = e.xAlign,
              o = e.yAlign,
              a = t.x,
              s = t.y,
              l = r.width,
              c = r.height,
              u = e.cornerRadius;
            n.beginPath(),
              n.moveTo(a + u, s),
              "top" === o && this.drawCaret(t, r),
              n.lineTo(a + l - u, s),
              n.quadraticCurveTo(a + l, s, a + l, s + u),
              "center" === o && "right" === i && this.drawCaret(t, r),
              n.lineTo(a + l, s + c - u),
              n.quadraticCurveTo(a + l, s + c, a + l - u, s + c),
              "bottom" === o && this.drawCaret(t, r),
              n.lineTo(a + u, s + c),
              n.quadraticCurveTo(a, s + c, a, s + c - u),
              "center" === o && "left" === i && this.drawCaret(t, r),
              n.lineTo(a, s + u),
              n.quadraticCurveTo(a, s, a + u, s),
              n.closePath(),
              n.fill(),
              e.borderWidth > 0 && n.stroke();
          },
          draw: function () {
            var t = this._chart.ctx,
              e = this._view;
            if (0 !== e.opacity) {
              var n = { width: e.width, height: e.height },
                r = { x: e.x, y: e.y },
                i = Math.abs(e.opacity < 0.001) ? 0 : e.opacity,
                o =
                  e.title.length ||
                  e.beforeBody.length ||
                  e.body.length ||
                  e.afterBody.length ||
                  e.footer.length;
              this._options.enabled &&
                o &&
                (t.save(),
                (t.globalAlpha = i),
                this.drawBackground(r, e, t, n),
                (r.y += e.yPadding),
                ut.rtl.overrideTextDirection(t, e.textDirection),
                this.drawTitle(r, e, t),
                this.drawBody(r, e, t),
                this.drawFooter(r, e, t),
                ut.rtl.restoreTextDirection(t, e.textDirection),
                t.restore());
            }
          },
          handleEvent: function (t) {
            var e = this,
              n = e._options,
              r = !1;
            return (
              (e._lastActive = e._lastActive || []),
              "mouseout" === t.type
                ? (e._active = [])
                : ((e._active = e._chart.getElementsAtEventForMode(
                    t,
                    n.mode,
                    n
                  )),
                  n.reverse && e._active.reverse()),
              (r = !ut.arrayEquals(e._active, e._lastActive)),
              r &&
                ((e._lastActive = e._active),
                (n.enabled || n.custom) &&
                  ((e._eventPosition = { x: t.x, y: t.y }),
                  e.update(!0),
                  e.pivot())),
              r
            );
          },
        }),
        Vn = Pn,
        $n = Bn;
      $n.positioners = Vn;
      var Wn = ut.valueOrDefault;
      function Un() {
        return ut.merge(Object.create(null), [].slice.call(arguments), {
          merger: function (t, e, n, r) {
            if ("xAxes" === t || "yAxes" === t) {
              var i,
                o,
                a,
                s = n[t].length;
              for (e[t] || (e[t] = []), i = 0; i < s; ++i)
                (a = n[t][i]),
                  (o = Wn(a.type, "xAxes" === t ? "category" : "linear")),
                  i >= e[t].length && e[t].push({}),
                  !e[t][i].type || (a.type && a.type !== e[t][i].type)
                    ? ut.merge(e[t][i], [Tn.getScaleDefaults(o), a])
                    : ut.merge(e[t][i], a);
            } else ut._merger(t, e, n, r);
          },
        });
      }
      function qn() {
        return ut.merge(Object.create(null), [].slice.call(arguments), {
          merger: function (t, e, n, r) {
            var i = e[t] || Object.create(null),
              o = n[t];
            "scales" === t
              ? (e[t] = Un(i, o))
              : "scale" === t
              ? (e[t] = ut.merge(i, [Tn.getScaleDefaults(o.type), o]))
              : ut._merger(t, e, n, r);
          },
        });
      }
      function Yn(t) {
        t = t || Object.create(null);
        var e = (t.data = t.data || {});
        return (
          (e.datasets = e.datasets || []),
          (e.labels = e.labels || []),
          (t.options = qn(J.global, J[t.type], t.options || {})),
          t
        );
      }
      function Gn(t) {
        var e = t.options;
        ut.each(t.scales, function (e) {
          Xe.removeBox(t, e);
        }),
          (e = qn(J.global, J[t.config.type], e)),
          (t.options = t.config.options = e),
          t.ensureScalesHaveIDs(),
          t.buildOrUpdateScales(),
          (t.tooltip._options = e.tooltips),
          t.tooltip.initialize();
      }
      function Xn(t, e, n) {
        var r,
          i = function (t) {
            return t.id === r;
          };
        do {
          r = e + n++;
        } while (ut.findIndex(t, i) >= 0);
        return r;
      }
      function Kn(t) {
        return "top" === t || "bottom" === t;
      }
      function Zn(t, e) {
        return function (n, r) {
          return n[t] === r[t] ? n[e] - r[e] : n[t] - r[t];
        };
      }
      J._set("global", {
        elements: {},
        events: ["mousemove", "mouseout", "click", "touchstart", "touchmove"],
        hover: {
          onHover: null,
          mode: "nearest",
          intersect: !0,
          animationDuration: 400,
        },
        onClick: null,
        maintainAspectRatio: !0,
        responsive: !0,
        responsiveAnimationDuration: 0,
      });
      var Jn = function (t, e) {
        return this.construct(t, e), this;
      };
      ut.extend(Jn.prototype, {
        construct: function (t, e) {
          var n = this;
          e = Yn(e);
          var r = Sn.acquireContext(t, e),
            i = r && r.canvas,
            o = i && i.height,
            a = i && i.width;
          (n.id = ut.uid()),
            (n.ctx = r),
            (n.canvas = i),
            (n.config = e),
            (n.width = a),
            (n.height = o),
            (n.aspectRatio = o ? a / o : null),
            (n.options = e.options),
            (n._bufferedRender = !1),
            (n._layers = []),
            (n.chart = n),
            (n.controller = n),
            (Jn.instances[n.id] = n),
            Object.defineProperty(n, "data", {
              get: function () {
                return n.config.data;
              },
              set: function (t) {
                n.config.data = t;
              },
            }),
            r && i
              ? (n.initialize(), n.update())
              : console.error(
                  "Failed to create chart: can't acquire context from the given item"
                );
        },
        initialize: function () {
          var t = this;
          return (
            An.notify(t, "beforeInit"),
            ut.retinaScale(t, t.options.devicePixelRatio),
            t.bindEvents(),
            t.options.responsive && t.resize(!0),
            t.initToolTip(),
            An.notify(t, "afterInit"),
            t
          );
        },
        clear: function () {
          return ut.canvas.clear(this), this;
        },
        stop: function () {
          return _t.cancelAnimation(this), this;
        },
        resize: function (t) {
          var e = this,
            n = e.options,
            r = e.canvas,
            i = (n.maintainAspectRatio && e.aspectRatio) || null,
            o = Math.max(0, Math.floor(ut.getMaximumWidth(r))),
            a = Math.max(0, Math.floor(i ? o / i : ut.getMaximumHeight(r)));
          if (
            (e.width !== o || e.height !== a) &&
            ((r.width = e.width = o),
            (r.height = e.height = a),
            (r.style.width = o + "px"),
            (r.style.height = a + "px"),
            ut.retinaScale(e, n.devicePixelRatio),
            !t)
          ) {
            var s = { width: o, height: a };
            An.notify(e, "resize", [s]),
              n.onResize && n.onResize(e, s),
              e.stop(),
              e.update({ duration: n.responsiveAnimationDuration });
          }
        },
        ensureScalesHaveIDs: function () {
          var t = this.options,
            e = t.scales || {},
            n = t.scale;
          ut.each(e.xAxes, function (t, n) {
            t.id || (t.id = Xn(e.xAxes, "x-axis-", n));
          }),
            ut.each(e.yAxes, function (t, n) {
              t.id || (t.id = Xn(e.yAxes, "y-axis-", n));
            }),
            n && (n.id = n.id || "scale");
        },
        buildOrUpdateScales: function () {
          var t = this,
            e = t.options,
            n = t.scales || {},
            r = [],
            i = Object.keys(n).reduce(function (t, e) {
              return (t[e] = !1), t;
            }, {});
          e.scales &&
            (r = r.concat(
              (e.scales.xAxes || []).map(function (t) {
                return { options: t, dtype: "category", dposition: "bottom" };
              }),
              (e.scales.yAxes || []).map(function (t) {
                return { options: t, dtype: "linear", dposition: "left" };
              })
            )),
            e.scale &&
              r.push({
                options: e.scale,
                dtype: "radialLinear",
                isDefault: !0,
                dposition: "chartArea",
              }),
            ut.each(r, function (e) {
              var r = e.options,
                o = r.id,
                a = Wn(r.type, e.dtype);
              Kn(r.position) !== Kn(e.dposition) && (r.position = e.dposition),
                (i[o] = !0);
              var s = null;
              if (o in n && n[o].type === a)
                (s = n[o]), (s.options = r), (s.ctx = t.ctx), (s.chart = t);
              else {
                var l = Tn.getScaleConstructor(a);
                if (!l) return;
                (s = new l({
                  id: o,
                  type: a,
                  options: r,
                  ctx: t.ctx,
                  chart: t,
                })),
                  (n[s.id] = s);
              }
              s.mergeTicksOptions(), e.isDefault && (t.scale = s);
            }),
            ut.each(i, function (t, e) {
              t || delete n[e];
            }),
            (t.scales = n),
            Tn.addScalesToLayout(this);
        },
        buildOrUpdateControllers: function () {
          var t,
            e,
            n = this,
            r = [],
            i = n.data.datasets;
          for (t = 0, e = i.length; t < e; t++) {
            var o = i[t],
              a = n.getDatasetMeta(t),
              s = o.type || n.config.type;
            if (
              (a.type &&
                a.type !== s &&
                (n.destroyDatasetMeta(t), (a = n.getDatasetMeta(t))),
              (a.type = s),
              (a.order = o.order || 0),
              (a.index = t),
              a.controller)
            )
              a.controller.updateIndex(t), a.controller.linkScales();
            else {
              var l = Oe[a.type];
              if (void 0 === l)
                throw new Error('"' + a.type + '" is not a chart type.');
              (a.controller = new l(n, t)), r.push(a.controller);
            }
          }
          return r;
        },
        resetElements: function () {
          var t = this;
          ut.each(
            t.data.datasets,
            function (e, n) {
              t.getDatasetMeta(n).controller.reset();
            },
            t
          );
        },
        reset: function () {
          this.resetElements(), this.tooltip.initialize();
        },
        update: function (t) {
          var e,
            n,
            r = this;
          if (
            ((t && "object" === typeof t) ||
              (t = { duration: t, lazy: arguments[1] }),
            Gn(r),
            An._invalidate(r),
            !1 !== An.notify(r, "beforeUpdate"))
          ) {
            r.tooltip._data = r.data;
            var i = r.buildOrUpdateControllers();
            for (e = 0, n = r.data.datasets.length; e < n; e++)
              r.getDatasetMeta(e).controller.buildOrUpdateElements();
            r.updateLayout(),
              r.options.animation &&
                r.options.animation.duration &&
                ut.each(i, function (t) {
                  t.reset();
                }),
              r.updateDatasets(),
              r.tooltip.initialize(),
              (r.lastActive = []),
              An.notify(r, "afterUpdate"),
              r._layers.sort(Zn("z", "_idx")),
              r._bufferedRender
                ? (r._bufferedRequest = {
                    duration: t.duration,
                    easing: t.easing,
                    lazy: t.lazy,
                  })
                : r.render(t);
          }
        },
        updateLayout: function () {
          var t = this;
          !1 !== An.notify(t, "beforeLayout") &&
            (Xe.update(this, this.width, this.height),
            (t._layers = []),
            ut.each(
              t.boxes,
              function (e) {
                e._configure && e._configure(),
                  t._layers.push.apply(t._layers, e._layers());
              },
              t
            ),
            t._layers.forEach(function (t, e) {
              t._idx = e;
            }),
            An.notify(t, "afterScaleUpdate"),
            An.notify(t, "afterLayout"));
        },
        updateDatasets: function () {
          var t = this;
          if (!1 !== An.notify(t, "beforeDatasetsUpdate")) {
            for (var e = 0, n = t.data.datasets.length; e < n; ++e)
              t.updateDataset(e);
            An.notify(t, "afterDatasetsUpdate");
          }
        },
        updateDataset: function (t) {
          var e = this,
            n = e.getDatasetMeta(t),
            r = { meta: n, index: t };
          !1 !== An.notify(e, "beforeDatasetUpdate", [r]) &&
            (n.controller._update(), An.notify(e, "afterDatasetUpdate", [r]));
        },
        render: function (t) {
          var e = this;
          (t && "object" === typeof t) ||
            (t = { duration: t, lazy: arguments[1] });
          var n = e.options.animation,
            r = Wn(t.duration, n && n.duration),
            i = t.lazy;
          if (!1 !== An.notify(e, "beforeRender")) {
            var o = function (t) {
              An.notify(e, "afterRender"),
                ut.callback(n && n.onComplete, [t], e);
            };
            if (n && r) {
              var a = new xt({
                numSteps: r / 16.66,
                easing: t.easing || n.easing,
                render: function (t, e) {
                  var n = ut.easing.effects[e.easing],
                    r = e.currentStep,
                    i = r / e.numSteps;
                  t.draw(n(i), i, r);
                },
                onAnimationProgress: n.onProgress,
                onAnimationComplete: o,
              });
              _t.addAnimation(e, a, r, i);
            } else e.draw(), o(new xt({ numSteps: 0, chart: e }));
            return e;
          }
        },
        draw: function (t) {
          var e,
            n,
            r = this;
          if (
            (r.clear(),
            ut.isNullOrUndef(t) && (t = 1),
            r.transition(t),
            !(r.width <= 0 || r.height <= 0) &&
              !1 !== An.notify(r, "beforeDraw", [t]))
          ) {
            for (n = r._layers, e = 0; e < n.length && n[e].z <= 0; ++e)
              n[e].draw(r.chartArea);
            for (r.drawDatasets(t); e < n.length; ++e) n[e].draw(r.chartArea);
            r._drawTooltip(t), An.notify(r, "afterDraw", [t]);
          }
        },
        transition: function (t) {
          for (
            var e = this, n = 0, r = (e.data.datasets || []).length;
            n < r;
            ++n
          )
            e.isDatasetVisible(n) &&
              e.getDatasetMeta(n).controller.transition(t);
          e.tooltip.transition(t);
        },
        _getSortedDatasetMetas: function (t) {
          var e,
            n,
            r = this,
            i = r.data.datasets || [],
            o = [];
          for (e = 0, n = i.length; e < n; ++e)
            (t && !r.isDatasetVisible(e)) || o.push(r.getDatasetMeta(e));
          return o.sort(Zn("order", "index")), o;
        },
        _getSortedVisibleDatasetMetas: function () {
          return this._getSortedDatasetMetas(!0);
        },
        drawDatasets: function (t) {
          var e,
            n,
            r = this;
          if (!1 !== An.notify(r, "beforeDatasetsDraw", [t])) {
            for (
              e = r._getSortedVisibleDatasetMetas(), n = e.length - 1;
              n >= 0;
              --n
            )
              r.drawDataset(e[n], t);
            An.notify(r, "afterDatasetsDraw", [t]);
          }
        },
        drawDataset: function (t, e) {
          var n = this,
            r = { meta: t, index: t.index, easingValue: e };
          !1 !== An.notify(n, "beforeDatasetDraw", [r]) &&
            (t.controller.draw(e), An.notify(n, "afterDatasetDraw", [r]));
        },
        _drawTooltip: function (t) {
          var e = this,
            n = e.tooltip,
            r = { tooltip: n, easingValue: t };
          !1 !== An.notify(e, "beforeTooltipDraw", [r]) &&
            (n.draw(), An.notify(e, "afterTooltipDraw", [r]));
        },
        getElementAtEvent: function (t) {
          return Fe.modes.single(this, t);
        },
        getElementsAtEvent: function (t) {
          return Fe.modes.label(this, t, { intersect: !0 });
        },
        getElementsAtXAxis: function (t) {
          return Fe.modes["x-axis"](this, t, { intersect: !0 });
        },
        getElementsAtEventForMode: function (t, e, n) {
          var r = Fe.modes[e];
          return "function" === typeof r ? r(this, t, n) : [];
        },
        getDatasetAtEvent: function (t) {
          return Fe.modes.dataset(this, t, { intersect: !0 });
        },
        getDatasetMeta: function (t) {
          var e = this,
            n = e.data.datasets[t];
          n._meta || (n._meta = {});
          var r = n._meta[e.id];
          return (
            r ||
              (r = n._meta[e.id] =
                {
                  type: null,
                  data: [],
                  dataset: null,
                  controller: null,
                  hidden: null,
                  xAxisID: null,
                  yAxisID: null,
                  order: n.order || 0,
                  index: t,
                }),
            r
          );
        },
        getVisibleDatasetCount: function () {
          for (var t = 0, e = 0, n = this.data.datasets.length; e < n; ++e)
            this.isDatasetVisible(e) && t++;
          return t;
        },
        isDatasetVisible: function (t) {
          var e = this.getDatasetMeta(t);
          return "boolean" === typeof e.hidden
            ? !e.hidden
            : !this.data.datasets[t].hidden;
        },
        generateLegend: function () {
          return this.options.legendCallback(this);
        },
        destroyDatasetMeta: function (t) {
          var e = this.id,
            n = this.data.datasets[t],
            r = n._meta && n._meta[e];
          r && (r.controller.destroy(), delete n._meta[e]);
        },
        destroy: function () {
          var t,
            e,
            n = this,
            r = n.canvas;
          for (n.stop(), t = 0, e = n.data.datasets.length; t < e; ++t)
            n.destroyDatasetMeta(t);
          r &&
            (n.unbindEvents(),
            ut.canvas.clear(n),
            Sn.releaseContext(n.ctx),
            (n.canvas = null),
            (n.ctx = null)),
            An.notify(n, "destroy"),
            delete Jn.instances[n.id];
        },
        toBase64Image: function () {
          return this.canvas.toDataURL.apply(this.canvas, arguments);
        },
        initToolTip: function () {
          var t = this;
          t.tooltip = new $n(
            {
              _chart: t,
              _chartInstance: t,
              _data: t.data,
              _options: t.options.tooltips,
            },
            t
          );
        },
        bindEvents: function () {
          var t = this,
            e = (t._listeners = {}),
            n = function () {
              t.eventHandler.apply(t, arguments);
            };
          ut.each(t.options.events, function (r) {
            Sn.addEventListener(t, r, n), (e[r] = n);
          }),
            t.options.responsive &&
              ((n = function () {
                t.resize();
              }),
              Sn.addEventListener(t, "resize", n),
              (e.resize = n));
        },
        unbindEvents: function () {
          var t = this,
            e = t._listeners;
          e &&
            (delete t._listeners,
            ut.each(e, function (e, n) {
              Sn.removeEventListener(t, n, e);
            }));
        },
        updateHoverStyle: function (t, e, n) {
          var r,
            i,
            o,
            a = n ? "set" : "remove";
          for (i = 0, o = t.length; i < o; ++i)
            (r = t[i]),
              r &&
                this.getDatasetMeta(r._datasetIndex).controller[
                  a + "HoverStyle"
                ](r);
          "dataset" === e &&
            this.getDatasetMeta(t[0]._datasetIndex).controller[
              "_" + a + "DatasetHoverStyle"
            ]();
        },
        eventHandler: function (t) {
          var e = this,
            n = e.tooltip;
          if (!1 !== An.notify(e, "beforeEvent", [t])) {
            (e._bufferedRender = !0), (e._bufferedRequest = null);
            var r = e.handleEvent(t);
            n && (r = n._start ? n.handleEvent(t) : r | n.handleEvent(t)),
              An.notify(e, "afterEvent", [t]);
            var i = e._bufferedRequest;
            return (
              i
                ? e.render(i)
                : r &&
                  !e.animating &&
                  (e.stop(),
                  e.render({
                    duration: e.options.hover.animationDuration,
                    lazy: !0,
                  })),
              (e._bufferedRender = !1),
              (e._bufferedRequest = null),
              e
            );
          }
        },
        handleEvent: function (t) {
          var e = this,
            n = e.options || {},
            r = n.hover,
            i = !1;
          return (
            (e.lastActive = e.lastActive || []),
            "mouseout" === t.type
              ? (e.active = [])
              : (e.active = e.getElementsAtEventForMode(t, r.mode, r)),
            ut.callback(n.onHover || n.hover.onHover, [t.native, e.active], e),
            ("mouseup" !== t.type && "click" !== t.type) ||
              (n.onClick && n.onClick.call(e, t.native, e.active)),
            e.lastActive.length && e.updateHoverStyle(e.lastActive, r.mode, !1),
            e.active.length &&
              r.mode &&
              e.updateHoverStyle(e.active, r.mode, !0),
            (i = !ut.arrayEquals(e.active, e.lastActive)),
            (e.lastActive = e.active),
            i
          );
        },
      }),
        (Jn.instances = {});
      var Qn = Jn;
      (Jn.Controller = Jn),
        (Jn.types = {}),
        (ut.configMerge = qn),
        (ut.scaleMerge = Un);
      var tr = function () {
        function t(t, e, n) {
          var r;
          return (
            "string" === typeof t
              ? ((r = parseInt(t, 10)),
                -1 !== t.indexOf("%") && (r = (r / 100) * e.parentNode[n]))
              : (r = t),
            r
          );
        }
        function e(t) {
          return void 0 !== t && null !== t && "none" !== t;
        }
        function n(n, r, i) {
          var o = document.defaultView,
            a = ut._getParentNode(n),
            s = o.getComputedStyle(n)[r],
            l = o.getComputedStyle(a)[r],
            c = e(s),
            u = e(l),
            d = Number.POSITIVE_INFINITY;
          return c || u
            ? Math.min(c ? t(s, n, i) : d, u ? t(l, a, i) : d)
            : "none";
        }
        (ut.where = function (t, e) {
          if (ut.isArray(t) && Array.prototype.filter) return t.filter(e);
          var n = [];
          return (
            ut.each(t, function (t) {
              e(t) && n.push(t);
            }),
            n
          );
        }),
          (ut.findIndex = Array.prototype.findIndex
            ? function (t, e, n) {
                return t.findIndex(e, n);
              }
            : function (t, e, n) {
                n = void 0 === n ? t : n;
                for (var r = 0, i = t.length; r < i; ++r)
                  if (e.call(n, t[r], r, t)) return r;
                return -1;
              }),
          (ut.findNextWhere = function (t, e, n) {
            ut.isNullOrUndef(n) && (n = -1);
            for (var r = n + 1; r < t.length; r++) {
              var i = t[r];
              if (e(i)) return i;
            }
          }),
          (ut.findPreviousWhere = function (t, e, n) {
            ut.isNullOrUndef(n) && (n = t.length);
            for (var r = n - 1; r >= 0; r--) {
              var i = t[r];
              if (e(i)) return i;
            }
          }),
          (ut.isNumber = function (t) {
            return !isNaN(parseFloat(t)) && isFinite(t);
          }),
          (ut.almostEquals = function (t, e, n) {
            return Math.abs(t - e) < n;
          }),
          (ut.almostWhole = function (t, e) {
            var n = Math.round(t);
            return n - e <= t && n + e >= t;
          }),
          (ut.max = function (t) {
            return t.reduce(function (t, e) {
              return isNaN(e) ? t : Math.max(t, e);
            }, Number.NEGATIVE_INFINITY);
          }),
          (ut.min = function (t) {
            return t.reduce(function (t, e) {
              return isNaN(e) ? t : Math.min(t, e);
            }, Number.POSITIVE_INFINITY);
          }),
          (ut.sign = Math.sign
            ? function (t) {
                return Math.sign(t);
              }
            : function (t) {
                return (t = +t), 0 === t || isNaN(t) ? t : t > 0 ? 1 : -1;
              }),
          (ut.toRadians = function (t) {
            return t * (Math.PI / 180);
          }),
          (ut.toDegrees = function (t) {
            return t * (180 / Math.PI);
          }),
          (ut._decimalPlaces = function (t) {
            if (ut.isFinite(t)) {
              var e = 1,
                n = 0;
              while (Math.round(t * e) / e !== t) (e *= 10), n++;
              return n;
            }
          }),
          (ut.getAngleFromPoint = function (t, e) {
            var n = e.x - t.x,
              r = e.y - t.y,
              i = Math.sqrt(n * n + r * r),
              o = Math.atan2(r, n);
            return (
              o < -0.5 * Math.PI && (o += 2 * Math.PI),
              { angle: o, distance: i }
            );
          }),
          (ut.distanceBetweenPoints = function (t, e) {
            return Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2));
          }),
          (ut.aliasPixel = function (t) {
            return t % 2 === 0 ? 0 : 0.5;
          }),
          (ut._alignPixel = function (t, e, n) {
            var r = t.currentDevicePixelRatio,
              i = n / 2;
            return Math.round((e - i) * r) / r + i;
          }),
          (ut.splineCurve = function (t, e, n, r) {
            var i = t.skip ? e : t,
              o = e,
              a = n.skip ? e : n,
              s = Math.sqrt(Math.pow(o.x - i.x, 2) + Math.pow(o.y - i.y, 2)),
              l = Math.sqrt(Math.pow(a.x - o.x, 2) + Math.pow(a.y - o.y, 2)),
              c = s / (s + l),
              u = l / (s + l);
            (c = isNaN(c) ? 0 : c), (u = isNaN(u) ? 0 : u);
            var d = r * c,
              f = r * u;
            return {
              previous: { x: o.x - d * (a.x - i.x), y: o.y - d * (a.y - i.y) },
              next: { x: o.x + f * (a.x - i.x), y: o.y + f * (a.y - i.y) },
            };
          }),
          (ut.EPSILON = Number.EPSILON || 1e-14),
          (ut.splineCurveMonotone = function (t) {
            var e,
              n,
              r,
              i,
              o,
              a,
              s,
              l,
              c,
              u = (t || []).map(function (t) {
                return { model: t._model, deltaK: 0, mK: 0 };
              }),
              d = u.length;
            for (e = 0; e < d; ++e)
              if (((r = u[e]), !r.model.skip)) {
                if (
                  ((n = e > 0 ? u[e - 1] : null),
                  (i = e < d - 1 ? u[e + 1] : null),
                  i && !i.model.skip)
                ) {
                  var f = i.model.x - r.model.x;
                  r.deltaK = 0 !== f ? (i.model.y - r.model.y) / f : 0;
                }
                !n || n.model.skip
                  ? (r.mK = r.deltaK)
                  : !i || i.model.skip
                  ? (r.mK = n.deltaK)
                  : this.sign(n.deltaK) !== this.sign(r.deltaK)
                  ? (r.mK = 0)
                  : (r.mK = (n.deltaK + r.deltaK) / 2);
              }
            for (e = 0; e < d - 1; ++e)
              (r = u[e]),
                (i = u[e + 1]),
                r.model.skip ||
                  i.model.skip ||
                  (ut.almostEquals(r.deltaK, 0, this.EPSILON)
                    ? (r.mK = i.mK = 0)
                    : ((o = r.mK / r.deltaK),
                      (a = i.mK / r.deltaK),
                      (l = Math.pow(o, 2) + Math.pow(a, 2)),
                      l <= 9 ||
                        ((s = 3 / Math.sqrt(l)),
                        (r.mK = o * s * r.deltaK),
                        (i.mK = a * s * r.deltaK))));
            for (e = 0; e < d; ++e)
              (r = u[e]),
                r.model.skip ||
                  ((n = e > 0 ? u[e - 1] : null),
                  (i = e < d - 1 ? u[e + 1] : null),
                  n &&
                    !n.model.skip &&
                    ((c = (r.model.x - n.model.x) / 3),
                    (r.model.controlPointPreviousX = r.model.x - c),
                    (r.model.controlPointPreviousY = r.model.y - c * r.mK)),
                  i &&
                    !i.model.skip &&
                    ((c = (i.model.x - r.model.x) / 3),
                    (r.model.controlPointNextX = r.model.x + c),
                    (r.model.controlPointNextY = r.model.y + c * r.mK)));
          }),
          (ut.nextItem = function (t, e, n) {
            return n
              ? e >= t.length - 1
                ? t[0]
                : t[e + 1]
              : e >= t.length - 1
              ? t[t.length - 1]
              : t[e + 1];
          }),
          (ut.previousItem = function (t, e, n) {
            return n
              ? e <= 0
                ? t[t.length - 1]
                : t[e - 1]
              : e <= 0
              ? t[0]
              : t[e - 1];
          }),
          (ut.niceNum = function (t, e) {
            var n,
              r = Math.floor(ut.log10(t)),
              i = t / Math.pow(10, r);
            return (
              (n = e
                ? i < 1.5
                  ? 1
                  : i < 3
                  ? 2
                  : i < 7
                  ? 5
                  : 10
                : i <= 1
                ? 1
                : i <= 2
                ? 2
                : i <= 5
                ? 5
                : 10),
              n * Math.pow(10, r)
            );
          }),
          (ut.requestAnimFrame = (function () {
            return "undefined" === typeof window
              ? function (t) {
                  t();
                }
              : window.requestAnimationFrame ||
                  window.webkitRequestAnimationFrame ||
                  window.mozRequestAnimationFrame ||
                  window.oRequestAnimationFrame ||
                  window.msRequestAnimationFrame ||
                  function (t) {
                    return window.setTimeout(t, 1e3 / 60);
                  };
          })()),
          (ut.getRelativePosition = function (t, e) {
            var n,
              r,
              i = t.originalEvent || t,
              o = t.target || t.srcElement,
              a = o.getBoundingClientRect(),
              s = i.touches;
            s && s.length > 0
              ? ((n = s[0].clientX), (r = s[0].clientY))
              : ((n = i.clientX), (r = i.clientY));
            var l = parseFloat(ut.getStyle(o, "padding-left")),
              c = parseFloat(ut.getStyle(o, "padding-top")),
              u = parseFloat(ut.getStyle(o, "padding-right")),
              d = parseFloat(ut.getStyle(o, "padding-bottom")),
              f = a.right - a.left - l - u,
              h = a.bottom - a.top - c - d;
            return (
              (n = Math.round(
                (((n - a.left - l) / f) * o.width) / e.currentDevicePixelRatio
              )),
              (r = Math.round(
                (((r - a.top - c) / h) * o.height) / e.currentDevicePixelRatio
              )),
              { x: n, y: r }
            );
          }),
          (ut.getConstraintWidth = function (t) {
            return n(t, "max-width", "clientWidth");
          }),
          (ut.getConstraintHeight = function (t) {
            return n(t, "max-height", "clientHeight");
          }),
          (ut._calculatePadding = function (t, e, n) {
            return (
              (e = ut.getStyle(t, e)),
              e.indexOf("%") > -1
                ? (n * parseInt(e, 10)) / 100
                : parseInt(e, 10)
            );
          }),
          (ut._getParentNode = function (t) {
            var e = t.parentNode;
            return (
              e && "[object ShadowRoot]" === e.toString() && (e = e.host), e
            );
          }),
          (ut.getMaximumWidth = function (t) {
            var e = ut._getParentNode(t);
            if (!e) return t.clientWidth;
            var n = e.clientWidth,
              r = ut._calculatePadding(e, "padding-left", n),
              i = ut._calculatePadding(e, "padding-right", n),
              o = n - r - i,
              a = ut.getConstraintWidth(t);
            return isNaN(a) ? o : Math.min(o, a);
          }),
          (ut.getMaximumHeight = function (t) {
            var e = ut._getParentNode(t);
            if (!e) return t.clientHeight;
            var n = e.clientHeight,
              r = ut._calculatePadding(e, "padding-top", n),
              i = ut._calculatePadding(e, "padding-bottom", n),
              o = n - r - i,
              a = ut.getConstraintHeight(t);
            return isNaN(a) ? o : Math.min(o, a);
          }),
          (ut.getStyle = function (t, e) {
            return t.currentStyle
              ? t.currentStyle[e]
              : document.defaultView
                  .getComputedStyle(t, null)
                  .getPropertyValue(e);
          }),
          (ut.retinaScale = function (t, e) {
            var n = (t.currentDevicePixelRatio =
              e ||
              ("undefined" !== typeof window && window.devicePixelRatio) ||
              1);
            if (1 !== n) {
              var r = t.canvas,
                i = t.height,
                o = t.width;
              (r.height = i * n),
                (r.width = o * n),
                t.ctx.scale(n, n),
                r.style.height ||
                  r.style.width ||
                  ((r.style.height = i + "px"), (r.style.width = o + "px"));
            }
          }),
          (ut.fontString = function (t, e, n) {
            return e + " " + t + "px " + n;
          }),
          (ut.longestText = function (t, e, n, r) {
            r = r || {};
            var i = (r.data = r.data || {}),
              o = (r.garbageCollect = r.garbageCollect || []);
            r.font !== e &&
              ((i = r.data = {}), (o = r.garbageCollect = []), (r.font = e)),
              (t.font = e);
            var a,
              s,
              l,
              c,
              u,
              d = 0,
              f = n.length;
            for (a = 0; a < f; a++)
              if (
                ((c = n[a]), void 0 !== c && null !== c && !0 !== ut.isArray(c))
              )
                d = ut.measureText(t, i, o, d, c);
              else if (ut.isArray(c))
                for (s = 0, l = c.length; s < l; s++)
                  (u = c[s]),
                    void 0 === u ||
                      null === u ||
                      ut.isArray(u) ||
                      (d = ut.measureText(t, i, o, d, u));
            var h = o.length / 2;
            if (h > n.length) {
              for (a = 0; a < h; a++) delete i[o[a]];
              o.splice(0, h);
            }
            return d;
          }),
          (ut.measureText = function (t, e, n, r, i) {
            var o = e[i];
            return (
              o || ((o = e[i] = t.measureText(i).width), n.push(i)),
              o > r && (r = o),
              r
            );
          }),
          (ut.numberOfLabelLines = function (t) {
            var e = 1;
            return (
              ut.each(t, function (t) {
                ut.isArray(t) && t.length > e && (e = t.length);
              }),
              e
            );
          }),
          (ut.color = R
            ? function (t) {
                return (
                  t instanceof CanvasGradient && (t = J.global.defaultColor),
                  R(t)
                );
              }
            : function (t) {
                return console.error("Color.js not found!"), t;
              }),
          (ut.getHoverColor = function (t) {
            return t instanceof CanvasPattern || t instanceof CanvasGradient
              ? t
              : ut.color(t).saturate(0.5).darken(0.1).rgbString();
          });
      };
      function er() {
        throw new Error(
          "This method is not implemented: either no adapter can be found or an incomplete integration was provided."
        );
      }
      function nr(t) {
        this.options = t || {};
      }
      ut.extend(nr.prototype, {
        formats: er,
        parse: er,
        format: er,
        add: er,
        diff: er,
        startOf: er,
        endOf: er,
        _create: function (t) {
          return t;
        },
      }),
        (nr.override = function (t) {
          ut.extend(nr.prototype, t);
        });
      var rr = nr,
        ir = { _date: rr },
        or = {
          formatters: {
            values: function (t) {
              return ut.isArray(t) ? t : "" + t;
            },
            linear: function (t, e, n) {
              var r = n.length > 3 ? n[2] - n[1] : n[1] - n[0];
              Math.abs(r) > 1 && t !== Math.floor(t) && (r = t - Math.floor(t));
              var i = ut.log10(Math.abs(r)),
                o = "";
              if (0 !== t) {
                var a = Math.max(Math.abs(n[0]), Math.abs(n[n.length - 1]));
                if (a < 1e-4) {
                  var s = ut.log10(Math.abs(t)),
                    l = Math.floor(s) - Math.floor(i);
                  (l = Math.max(Math.min(l, 20), 0)), (o = t.toExponential(l));
                } else {
                  var c = -1 * Math.floor(i);
                  (c = Math.max(Math.min(c, 20), 0)), (o = t.toFixed(c));
                }
              } else o = "0";
              return o;
            },
            logarithmic: function (t, e, n) {
              var r = t / Math.pow(10, Math.floor(ut.log10(t)));
              return 0 === t
                ? "0"
                : 1 === r || 2 === r || 5 === r || 0 === e || e === n.length - 1
                ? t.toExponential()
                : "";
            },
          },
        },
        ar = ut.isArray,
        sr = ut.isNullOrUndef,
        lr = ut.valueOrDefault,
        cr = ut.valueAtIndexOrDefault;
      function ur(t, e) {
        for (var n = [], r = t.length / e, i = 0, o = t.length; i < o; i += r)
          n.push(t[Math.floor(i)]);
        return n;
      }
      function dr(t, e, n) {
        var r,
          i = t.getTicks().length,
          o = Math.min(e, i - 1),
          a = t.getPixelForTick(o),
          s = t._startPixel,
          l = t._endPixel,
          c = 1e-6;
        if (
          !(
            n &&
            ((r =
              1 === i
                ? Math.max(a - s, l - a)
                : 0 === e
                ? (t.getPixelForTick(1) - a) / 2
                : (a - t.getPixelForTick(o - 1)) / 2),
            (a += o < e ? r : -r),
            a < s - c || a > l + c)
          )
        )
          return a;
      }
      function fr(t, e) {
        ut.each(t, function (t) {
          var n,
            r = t.gc,
            i = r.length / 2;
          if (i > e) {
            for (n = 0; n < i; ++n) delete t.data[r[n]];
            r.splice(0, i);
          }
        });
      }
      function hr(t, e, n, r) {
        var i,
          o,
          a,
          s,
          l,
          c,
          u,
          d,
          f,
          h,
          p,
          g,
          v,
          m = n.length,
          b = [],
          y = [],
          x = [],
          _ = 0,
          w = 0;
        for (i = 0; i < m; ++i) {
          if (
            ((s = n[i].label),
            (l = n[i].major ? e.major : e.minor),
            (t.font = c = l.string),
            (u = r[c] = r[c] || { data: {}, gc: [] }),
            (d = l.lineHeight),
            (f = h = 0),
            sr(s) || ar(s))
          ) {
            if (ar(s))
              for (o = 0, a = s.length; o < a; ++o)
                (p = s[o]),
                  sr(p) ||
                    ar(p) ||
                    ((f = ut.measureText(t, u.data, u.gc, f, p)), (h += d));
          } else (f = ut.measureText(t, u.data, u.gc, f, s)), (h = d);
          b.push(f),
            y.push(h),
            x.push(d / 2),
            (_ = Math.max(f, _)),
            (w = Math.max(h, w));
        }
        function k(t) {
          return { width: b[t] || 0, height: y[t] || 0, offset: x[t] || 0 };
        }
        return (
          fr(r, m),
          (g = b.indexOf(_)),
          (v = y.indexOf(w)),
          { first: k(0), last: k(m - 1), widest: k(g), highest: k(v) }
        );
      }
      function pr(t) {
        return t.drawTicks ? t.tickMarkLength : 0;
      }
      function gr(t) {
        var e, n;
        return t.display
          ? ((e = ut.options._parseFont(t)),
            (n = ut.options.toPadding(t.padding)),
            e.lineHeight + n.height)
          : 0;
      }
      function vr(t, e) {
        return ut.extend(
          ut.options._parseFont({
            fontFamily: lr(e.fontFamily, t.fontFamily),
            fontSize: lr(e.fontSize, t.fontSize),
            fontStyle: lr(e.fontStyle, t.fontStyle),
            lineHeight: lr(e.lineHeight, t.lineHeight),
          }),
          {
            color: ut.options.resolve([
              e.fontColor,
              t.fontColor,
              J.global.defaultFontColor,
            ]),
          }
        );
      }
      function mr(t) {
        var e = vr(t, t.minor),
          n = t.major.enabled ? vr(t, t.major) : e;
        return { minor: e, major: n };
      }
      function br(t) {
        var e,
          n,
          r,
          i = [];
        for (n = 0, r = t.length; n < r; ++n)
          (e = t[n]), "undefined" !== typeof e._index && i.push(e);
        return i;
      }
      function yr(t) {
        var e,
          n,
          r = t.length;
        if (r < 2) return !1;
        for (n = t[0], e = 1; e < r; ++e) if (t[e] - t[e - 1] !== n) return !1;
        return n;
      }
      function xr(t, e, n, r) {
        var i,
          o,
          a,
          s,
          l = yr(t),
          c = (e.length - 1) / r;
        if (!l) return Math.max(c, 1);
        for (i = ut.math._factorize(l), a = 0, s = i.length - 1; a < s; a++)
          if (((o = i[a]), o > c)) return o;
        return Math.max(c, 1);
      }
      function _r(t) {
        var e,
          n,
          r = [];
        for (e = 0, n = t.length; e < n; e++) t[e].major && r.push(e);
        return r;
      }
      function wr(t, e, n) {
        var r,
          i,
          o = 0,
          a = e[0];
        for (n = Math.ceil(n), r = 0; r < t.length; r++)
          (i = t[r]),
            r === a ? ((i._index = r), o++, (a = e[o * n])) : delete i.label;
      }
      function kr(t, e, n, r) {
        var i,
          o,
          a,
          s,
          l = lr(n, 0),
          c = Math.min(lr(r, t.length), t.length),
          u = 0;
        (e = Math.ceil(e)),
          r && ((i = r - n), (e = i / Math.floor(i / e))),
          (s = l);
        while (s < 0) u++, (s = Math.round(l + u * e));
        for (o = Math.max(l, 0); o < c; o++)
          (a = t[o]),
            o === s
              ? ((a._index = o), u++, (s = Math.round(l + u * e)))
              : delete a.label;
      }
      J._set("scale", {
        display: !0,
        position: "left",
        offset: !1,
        gridLines: {
          display: !0,
          color: "rgba(0,0,0,0.1)",
          lineWidth: 1,
          drawBorder: !0,
          drawOnChartArea: !0,
          drawTicks: !0,
          tickMarkLength: 10,
          zeroLineWidth: 1,
          zeroLineColor: "rgba(0,0,0,0.25)",
          zeroLineBorderDash: [],
          zeroLineBorderDashOffset: 0,
          offsetGridLines: !1,
          borderDash: [],
          borderDashOffset: 0,
        },
        scaleLabel: {
          display: !1,
          labelString: "",
          padding: { top: 4, bottom: 4 },
        },
        ticks: {
          beginAtZero: !1,
          minRotation: 0,
          maxRotation: 50,
          mirror: !1,
          padding: 0,
          reverse: !1,
          display: !0,
          autoSkip: !0,
          autoSkipPadding: 0,
          labelOffset: 0,
          callback: or.formatters.values,
          minor: {},
          major: {},
        },
      });
      var Cr = bt.extend({
        zeroLineIndex: 0,
        getPadding: function () {
          var t = this;
          return {
            left: t.paddingLeft || 0,
            top: t.paddingTop || 0,
            right: t.paddingRight || 0,
            bottom: t.paddingBottom || 0,
          };
        },
        getTicks: function () {
          return this._ticks;
        },
        _getLabels: function () {
          var t = this.chart.data;
          return (
            this.options.labels ||
            (this.isHorizontal() ? t.xLabels : t.yLabels) ||
            t.labels ||
            []
          );
        },
        mergeTicksOptions: function () {},
        beforeUpdate: function () {
          ut.callback(this.options.beforeUpdate, [this]);
        },
        update: function (t, e, n) {
          var r,
            i,
            o,
            a,
            s,
            l = this,
            c = l.options.ticks,
            u = c.sampleSize;
          if (
            (l.beforeUpdate(),
            (l.maxWidth = t),
            (l.maxHeight = e),
            (l.margins = ut.extend(
              { left: 0, right: 0, top: 0, bottom: 0 },
              n
            )),
            (l._ticks = null),
            (l.ticks = null),
            (l._labelSizes = null),
            (l._maxLabelLines = 0),
            (l.longestLabelWidth = 0),
            (l.longestTextCache = l.longestTextCache || {}),
            (l._gridLineItems = null),
            (l._labelItems = null),
            l.beforeSetDimensions(),
            l.setDimensions(),
            l.afterSetDimensions(),
            l.beforeDataLimits(),
            l.determineDataLimits(),
            l.afterDataLimits(),
            l.beforeBuildTicks(),
            (a = l.buildTicks() || []),
            (a = l.afterBuildTicks(a) || a),
            (!a || !a.length) && l.ticks)
          )
            for (a = [], r = 0, i = l.ticks.length; r < i; ++r)
              a.push({ value: l.ticks[r], major: !1 });
          return (
            (l._ticks = a),
            (s = u < a.length),
            (o = l._convertTicksToLabels(s ? ur(a, u) : a)),
            l._configure(),
            l.beforeCalculateTickRotation(),
            l.calculateTickRotation(),
            l.afterCalculateTickRotation(),
            l.beforeFit(),
            l.fit(),
            l.afterFit(),
            (l._ticksToDraw =
              c.display && (c.autoSkip || "auto" === c.source)
                ? l._autoSkip(a)
                : a),
            s && (o = l._convertTicksToLabels(l._ticksToDraw)),
            (l.ticks = o),
            l.afterUpdate(),
            l.minSize
          );
        },
        _configure: function () {
          var t,
            e,
            n = this,
            r = n.options.ticks.reverse;
          n.isHorizontal()
            ? ((t = n.left), (e = n.right))
            : ((t = n.top), (e = n.bottom), (r = !r)),
            (n._startPixel = t),
            (n._endPixel = e),
            (n._reversePixels = r),
            (n._length = e - t);
        },
        afterUpdate: function () {
          ut.callback(this.options.afterUpdate, [this]);
        },
        beforeSetDimensions: function () {
          ut.callback(this.options.beforeSetDimensions, [this]);
        },
        setDimensions: function () {
          var t = this;
          t.isHorizontal()
            ? ((t.width = t.maxWidth), (t.left = 0), (t.right = t.width))
            : ((t.height = t.maxHeight), (t.top = 0), (t.bottom = t.height)),
            (t.paddingLeft = 0),
            (t.paddingTop = 0),
            (t.paddingRight = 0),
            (t.paddingBottom = 0);
        },
        afterSetDimensions: function () {
          ut.callback(this.options.afterSetDimensions, [this]);
        },
        beforeDataLimits: function () {
          ut.callback(this.options.beforeDataLimits, [this]);
        },
        determineDataLimits: ut.noop,
        afterDataLimits: function () {
          ut.callback(this.options.afterDataLimits, [this]);
        },
        beforeBuildTicks: function () {
          ut.callback(this.options.beforeBuildTicks, [this]);
        },
        buildTicks: ut.noop,
        afterBuildTicks: function (t) {
          var e = this;
          return ar(t) && t.length
            ? ut.callback(e.options.afterBuildTicks, [e, t])
            : ((e.ticks =
                ut.callback(e.options.afterBuildTicks, [e, e.ticks]) ||
                e.ticks),
              t);
        },
        beforeTickToLabelConversion: function () {
          ut.callback(this.options.beforeTickToLabelConversion, [this]);
        },
        convertTicksToLabels: function () {
          var t = this,
            e = t.options.ticks;
          t.ticks = t.ticks.map(e.userCallback || e.callback, this);
        },
        afterTickToLabelConversion: function () {
          ut.callback(this.options.afterTickToLabelConversion, [this]);
        },
        beforeCalculateTickRotation: function () {
          ut.callback(this.options.beforeCalculateTickRotation, [this]);
        },
        calculateTickRotation: function () {
          var t,
            e,
            n,
            r,
            i,
            o,
            a,
            s = this,
            l = s.options,
            c = l.ticks,
            u = s.getTicks().length,
            d = c.minRotation || 0,
            f = c.maxRotation,
            h = d;
          !s._isVisible() || !c.display || d >= f || u <= 1 || !s.isHorizontal()
            ? (s.labelRotation = d)
            : ((t = s._getLabelSizes()),
              (e = t.widest.width),
              (n = t.highest.height - t.highest.offset),
              (r = Math.min(s.maxWidth, s.chart.width - e)),
              (i = l.offset ? s.maxWidth / u : r / (u - 1)),
              e + 6 > i &&
                ((i = r / (u - (l.offset ? 0.5 : 1))),
                (o =
                  s.maxHeight - pr(l.gridLines) - c.padding - gr(l.scaleLabel)),
                (a = Math.sqrt(e * e + n * n)),
                (h = ut.toDegrees(
                  Math.min(
                    Math.asin(Math.min((t.highest.height + 6) / i, 1)),
                    Math.asin(Math.min(o / a, 1)) - Math.asin(n / a)
                  )
                )),
                (h = Math.max(d, Math.min(f, h)))),
              (s.labelRotation = h));
        },
        afterCalculateTickRotation: function () {
          ut.callback(this.options.afterCalculateTickRotation, [this]);
        },
        beforeFit: function () {
          ut.callback(this.options.beforeFit, [this]);
        },
        fit: function () {
          var t = this,
            e = (t.minSize = { width: 0, height: 0 }),
            n = t.chart,
            r = t.options,
            i = r.ticks,
            o = r.scaleLabel,
            a = r.gridLines,
            s = t._isVisible(),
            l = "bottom" === r.position,
            c = t.isHorizontal();
          if (
            (c ? (e.width = t.maxWidth) : s && (e.width = pr(a) + gr(o)),
            c ? s && (e.height = pr(a) + gr(o)) : (e.height = t.maxHeight),
            i.display && s)
          ) {
            var u = mr(i),
              d = t._getLabelSizes(),
              f = d.first,
              h = d.last,
              p = d.widest,
              g = d.highest,
              v = 0.4 * u.minor.lineHeight,
              m = i.padding;
            if (c) {
              var b = 0 !== t.labelRotation,
                y = ut.toRadians(t.labelRotation),
                x = Math.cos(y),
                _ = Math.sin(y),
                w =
                  _ * p.width +
                  x * (g.height - (b ? g.offset : 0)) +
                  (b ? 0 : v);
              e.height = Math.min(t.maxHeight, e.height + w + m);
              var k,
                C,
                M = t.getPixelForTick(0) - t.left,
                S = t.right - t.getPixelForTick(t.getTicks().length - 1);
              b
                ? ((k = l
                    ? x * f.width + _ * f.offset
                    : _ * (f.height - f.offset)),
                  (C = l
                    ? _ * (h.height - h.offset)
                    : x * h.width + _ * h.offset))
                : ((k = f.width / 2), (C = h.width / 2)),
                (t.paddingLeft =
                  Math.max(((k - M) * t.width) / (t.width - M), 0) + 3),
                (t.paddingRight =
                  Math.max(((C - S) * t.width) / (t.width - S), 0) + 3);
            } else {
              var A = i.mirror ? 0 : p.width + m + v;
              (e.width = Math.min(t.maxWidth, e.width + A)),
                (t.paddingTop = f.height / 2),
                (t.paddingBottom = h.height / 2);
            }
          }
          t.handleMargins(),
            c
              ? ((t.width = t._length =
                  n.width - t.margins.left - t.margins.right),
                (t.height = e.height))
              : ((t.width = e.width),
                (t.height = t._length =
                  n.height - t.margins.top - t.margins.bottom));
        },
        handleMargins: function () {
          var t = this;
          t.margins &&
            ((t.margins.left = Math.max(t.paddingLeft, t.margins.left)),
            (t.margins.top = Math.max(t.paddingTop, t.margins.top)),
            (t.margins.right = Math.max(t.paddingRight, t.margins.right)),
            (t.margins.bottom = Math.max(t.paddingBottom, t.margins.bottom)));
        },
        afterFit: function () {
          ut.callback(this.options.afterFit, [this]);
        },
        isHorizontal: function () {
          var t = this.options.position;
          return "top" === t || "bottom" === t;
        },
        isFullWidth: function () {
          return this.options.fullWidth;
        },
        getRightValue: function (t) {
          if (sr(t)) return NaN;
          if (("number" === typeof t || t instanceof Number) && !isFinite(t))
            return NaN;
          if (t)
            if (this.isHorizontal()) {
              if (void 0 !== t.x) return this.getRightValue(t.x);
            } else if (void 0 !== t.y) return this.getRightValue(t.y);
          return t;
        },
        _convertTicksToLabels: function (t) {
          var e,
            n,
            r,
            i = this;
          for (
            i.ticks = t.map(function (t) {
              return t.value;
            }),
              i.beforeTickToLabelConversion(),
              e = i.convertTicksToLabels(t) || i.ticks,
              i.afterTickToLabelConversion(),
              n = 0,
              r = t.length;
            n < r;
            ++n
          )
            t[n].label = e[n];
          return e;
        },
        _getLabelSizes: function () {
          var t = this,
            e = t._labelSizes;
          return (
            e ||
              ((t._labelSizes = e =
                hr(
                  t.ctx,
                  mr(t.options.ticks),
                  t.getTicks(),
                  t.longestTextCache
                )),
              (t.longestLabelWidth = e.widest.width)),
            e
          );
        },
        _parseValue: function (t) {
          var e, n, r, i;
          return (
            ar(t)
              ? ((e = +this.getRightValue(t[0])),
                (n = +this.getRightValue(t[1])),
                (r = Math.min(e, n)),
                (i = Math.max(e, n)))
              : ((t = +this.getRightValue(t)),
                (e = void 0),
                (n = t),
                (r = t),
                (i = t)),
            { min: r, max: i, start: e, end: n }
          );
        },
        _getScaleLabel: function (t) {
          var e = this._parseValue(t);
          return void 0 !== e.start
            ? "[" + e.start + ", " + e.end + "]"
            : +this.getRightValue(t);
        },
        getLabelForIndex: ut.noop,
        getPixelForValue: ut.noop,
        getValueForPixel: ut.noop,
        getPixelForTick: function (t) {
          var e = this,
            n = e.options.offset,
            r = e._ticks.length,
            i = 1 / Math.max(r - (n ? 0 : 1), 1);
          return t < 0 || t > r - 1
            ? null
            : e.getPixelForDecimal(t * i + (n ? i / 2 : 0));
        },
        getPixelForDecimal: function (t) {
          var e = this;
          return e._reversePixels && (t = 1 - t), e._startPixel + t * e._length;
        },
        getDecimalForPixel: function (t) {
          var e = (t - this._startPixel) / this._length;
          return this._reversePixels ? 1 - e : e;
        },
        getBasePixel: function () {
          return this.getPixelForValue(this.getBaseValue());
        },
        getBaseValue: function () {
          var t = this,
            e = t.min,
            n = t.max;
          return t.beginAtZero
            ? 0
            : e < 0 && n < 0
            ? n
            : e > 0 && n > 0
            ? e
            : 0;
        },
        _autoSkip: function (t) {
          var e,
            n,
            r,
            i,
            o = this,
            a = o.options.ticks,
            s = o._length,
            l = a.maxTicksLimit || s / o._tickSize() + 1,
            c = a.major.enabled ? _r(t) : [],
            u = c.length,
            d = c[0],
            f = c[u - 1];
          if (u > l) return wr(t, c, u / l), br(t);
          if (((r = xr(c, t, s, l)), u > 0)) {
            for (e = 0, n = u - 1; e < n; e++) kr(t, r, c[e], c[e + 1]);
            return (
              (i = u > 1 ? (f - d) / (u - 1) : null),
              kr(t, r, ut.isNullOrUndef(i) ? 0 : d - i, d),
              kr(t, r, f, ut.isNullOrUndef(i) ? t.length : f + i),
              br(t)
            );
          }
          return kr(t, r), br(t);
        },
        _tickSize: function () {
          var t = this,
            e = t.options.ticks,
            n = ut.toRadians(t.labelRotation),
            r = Math.abs(Math.cos(n)),
            i = Math.abs(Math.sin(n)),
            o = t._getLabelSizes(),
            a = e.autoSkipPadding || 0,
            s = o ? o.widest.width + a : 0,
            l = o ? o.highest.height + a : 0;
          return t.isHorizontal()
            ? l * r > s * i
              ? s / r
              : l / i
            : l * i < s * r
            ? l / r
            : s / i;
        },
        _isVisible: function () {
          var t,
            e,
            n,
            r = this,
            i = r.chart,
            o = r.options.display;
          if ("auto" !== o) return !!o;
          for (t = 0, e = i.data.datasets.length; t < e; ++t)
            if (
              i.isDatasetVisible(t) &&
              ((n = i.getDatasetMeta(t)),
              n.xAxisID === r.id || n.yAxisID === r.id)
            )
              return !0;
          return !1;
        },
        _computeGridLineItems: function (t) {
          var e,
            n,
            r,
            i,
            o,
            a,
            s,
            l,
            c,
            u,
            d,
            f,
            h,
            p,
            g,
            v,
            m,
            b = this,
            y = b.chart,
            x = b.options,
            _ = x.gridLines,
            w = x.position,
            k = _.offsetGridLines,
            C = b.isHorizontal(),
            M = b._ticksToDraw,
            S = M.length + (k ? 1 : 0),
            A = pr(_),
            T = [],
            O = _.drawBorder ? cr(_.lineWidth, 0, 0) : 0,
            E = O / 2,
            P = ut._alignPixel,
            L = function (t) {
              return P(y, t, O);
            };
          for (
            "top" === w
              ? ((e = L(b.bottom)),
                (s = b.bottom - A),
                (c = e - E),
                (d = L(t.top) + E),
                (h = t.bottom))
              : "bottom" === w
              ? ((e = L(b.top)),
                (d = t.top),
                (h = L(t.bottom) - E),
                (s = e + E),
                (c = b.top + A))
              : "left" === w
              ? ((e = L(b.right)),
                (a = b.right - A),
                (l = e - E),
                (u = L(t.left) + E),
                (f = t.right))
              : ((e = L(b.left)),
                (u = t.left),
                (f = L(t.right) - E),
                (a = e + E),
                (l = b.left + A)),
              n = 0;
            n < S;
            ++n
          )
            (r = M[n] || {}),
              (sr(r.label) && n < M.length) ||
                (n === b.zeroLineIndex && x.offset === k
                  ? ((p = _.zeroLineWidth),
                    (g = _.zeroLineColor),
                    (v = _.zeroLineBorderDash || []),
                    (m = _.zeroLineBorderDashOffset || 0))
                  : ((p = cr(_.lineWidth, n, 1)),
                    (g = cr(_.color, n, "rgba(0,0,0,0.1)")),
                    (v = _.borderDash || []),
                    (m = _.borderDashOffset || 0)),
                (i = dr(b, r._index || n, k)),
                void 0 !== i &&
                  ((o = P(y, i, p)),
                  C ? (a = l = u = f = o) : (s = c = d = h = o),
                  T.push({
                    tx1: a,
                    ty1: s,
                    tx2: l,
                    ty2: c,
                    x1: u,
                    y1: d,
                    x2: f,
                    y2: h,
                    width: p,
                    color: g,
                    borderDash: v,
                    borderDashOffset: m,
                  })));
          return (T.ticksLength = S), (T.borderValue = e), T;
        },
        _computeLabelItems: function () {
          var t,
            e,
            n,
            r,
            i,
            o,
            a,
            s,
            l,
            c,
            u,
            d,
            f = this,
            h = f.options,
            p = h.ticks,
            g = h.position,
            v = p.mirror,
            m = f.isHorizontal(),
            b = f._ticksToDraw,
            y = mr(p),
            x = p.padding,
            _ = pr(h.gridLines),
            w = -ut.toRadians(f.labelRotation),
            k = [];
          for (
            "top" === g
              ? ((o = f.bottom - _ - x), (a = w ? "left" : "center"))
              : "bottom" === g
              ? ((o = f.top + _ + x), (a = w ? "right" : "center"))
              : "left" === g
              ? ((i = f.right - (v ? 0 : _) - x), (a = v ? "left" : "right"))
              : ((i = f.left + (v ? 0 : _) + x), (a = v ? "right" : "left")),
              t = 0,
              e = b.length;
            t < e;
            ++t
          )
            (n = b[t]),
              (r = n.label),
              sr(r) ||
                ((s = f.getPixelForTick(n._index || t) + p.labelOffset),
                (l = n.major ? y.major : y.minor),
                (c = l.lineHeight),
                (u = ar(r) ? r.length : 1),
                m
                  ? ((i = s),
                    (d =
                      "top" === g
                        ? ((w ? 1 : 0.5) - u) * c
                        : (w ? 0 : 0.5) * c))
                  : ((o = s), (d = ((1 - u) * c) / 2)),
                k.push({
                  x: i,
                  y: o,
                  rotation: w,
                  label: r,
                  font: l,
                  textOffset: d,
                  textAlign: a,
                }));
          return k;
        },
        _drawGrid: function (t) {
          var e = this,
            n = e.options.gridLines;
          if (n.display) {
            var r,
              i,
              o,
              a,
              s,
              l = e.ctx,
              c = e.chart,
              u = ut._alignPixel,
              d = n.drawBorder ? cr(n.lineWidth, 0, 0) : 0,
              f =
                e._gridLineItems ||
                (e._gridLineItems = e._computeGridLineItems(t));
            for (o = 0, a = f.length; o < a; ++o)
              (s = f[o]),
                (r = s.width),
                (i = s.color),
                r &&
                  i &&
                  (l.save(),
                  (l.lineWidth = r),
                  (l.strokeStyle = i),
                  l.setLineDash &&
                    (l.setLineDash(s.borderDash),
                    (l.lineDashOffset = s.borderDashOffset)),
                  l.beginPath(),
                  n.drawTicks &&
                    (l.moveTo(s.tx1, s.ty1), l.lineTo(s.tx2, s.ty2)),
                  n.drawOnChartArea &&
                    (l.moveTo(s.x1, s.y1), l.lineTo(s.x2, s.y2)),
                  l.stroke(),
                  l.restore());
            if (d) {
              var h,
                p,
                g,
                v,
                m = d,
                b = cr(n.lineWidth, f.ticksLength - 1, 1),
                y = f.borderValue;
              e.isHorizontal()
                ? ((h = u(c, e.left, m) - m / 2),
                  (p = u(c, e.right, b) + b / 2),
                  (g = v = y))
                : ((g = u(c, e.top, m) - m / 2),
                  (v = u(c, e.bottom, b) + b / 2),
                  (h = p = y)),
                (l.lineWidth = d),
                (l.strokeStyle = cr(n.color, 0)),
                l.beginPath(),
                l.moveTo(h, g),
                l.lineTo(p, v),
                l.stroke();
            }
          }
        },
        _drawLabels: function () {
          var t = this,
            e = t.options.ticks;
          if (e.display) {
            var n,
              r,
              i,
              o,
              a,
              s,
              l,
              c,
              u = t.ctx,
              d = t._labelItems || (t._labelItems = t._computeLabelItems());
            for (n = 0, i = d.length; n < i; ++n) {
              if (
                ((a = d[n]),
                (s = a.font),
                u.save(),
                u.translate(a.x, a.y),
                u.rotate(a.rotation),
                (u.font = s.string),
                (u.fillStyle = s.color),
                (u.textBaseline = "middle"),
                (u.textAlign = a.textAlign),
                (l = a.label),
                (c = a.textOffset),
                ar(l))
              )
                for (r = 0, o = l.length; r < o; ++r)
                  u.fillText("" + l[r], 0, c), (c += s.lineHeight);
              else u.fillText(l, 0, c);
              u.restore();
            }
          }
        },
        _drawTitle: function () {
          var t = this,
            e = t.ctx,
            n = t.options,
            r = n.scaleLabel;
          if (r.display) {
            var i,
              o,
              a = lr(r.fontColor, J.global.defaultFontColor),
              s = ut.options._parseFont(r),
              l = ut.options.toPadding(r.padding),
              c = s.lineHeight / 2,
              u = n.position,
              d = 0;
            if (t.isHorizontal())
              (i = t.left + t.width / 2),
                (o =
                  "bottom" === u ? t.bottom - c - l.bottom : t.top + c + l.top);
            else {
              var f = "left" === u;
              (i = f ? t.left + c + l.top : t.right - c - l.top),
                (o = t.top + t.height / 2),
                (d = f ? -0.5 * Math.PI : 0.5 * Math.PI);
            }
            e.save(),
              e.translate(i, o),
              e.rotate(d),
              (e.textAlign = "center"),
              (e.textBaseline = "middle"),
              (e.fillStyle = a),
              (e.font = s.string),
              e.fillText(r.labelString, 0, 0),
              e.restore();
          }
        },
        draw: function (t) {
          var e = this;
          e._isVisible() && (e._drawGrid(t), e._drawTitle(), e._drawLabels());
        },
        _layers: function () {
          var t = this,
            e = t.options,
            n = (e.ticks && e.ticks.z) || 0,
            r = (e.gridLines && e.gridLines.z) || 0;
          return t._isVisible() && n !== r && t.draw === t._draw
            ? [
                {
                  z: r,
                  draw: function () {
                    t._drawGrid.apply(t, arguments),
                      t._drawTitle.apply(t, arguments);
                  },
                },
                {
                  z: n,
                  draw: function () {
                    t._drawLabels.apply(t, arguments);
                  },
                },
              ]
            : [
                {
                  z: n,
                  draw: function () {
                    t.draw.apply(t, arguments);
                  },
                },
              ];
        },
        _getMatchingVisibleMetas: function (t) {
          var e = this,
            n = e.isHorizontal();
          return e.chart._getSortedVisibleDatasetMetas().filter(function (r) {
            return (
              (!t || r.type === t) &&
              (n ? r.xAxisID === e.id : r.yAxisID === e.id)
            );
          });
        },
      });
      Cr.prototype._draw = Cr.prototype.draw;
      var Mr = Cr,
        Sr = ut.isNullOrUndef,
        Ar = { position: "bottom" },
        Tr = Mr.extend({
          determineDataLimits: function () {
            var t,
              e = this,
              n = e._getLabels(),
              r = e.options.ticks,
              i = r.min,
              o = r.max,
              a = 0,
              s = n.length - 1;
            void 0 !== i && ((t = n.indexOf(i)), t >= 0 && (a = t)),
              void 0 !== o && ((t = n.indexOf(o)), t >= 0 && (s = t)),
              (e.minIndex = a),
              (e.maxIndex = s),
              (e.min = n[a]),
              (e.max = n[s]);
          },
          buildTicks: function () {
            var t = this,
              e = t._getLabels(),
              n = t.minIndex,
              r = t.maxIndex;
            t.ticks = 0 === n && r === e.length - 1 ? e : e.slice(n, r + 1);
          },
          getLabelForIndex: function (t, e) {
            var n = this,
              r = n.chart;
            return r.getDatasetMeta(e).controller._getValueScaleId() === n.id
              ? n.getRightValue(r.data.datasets[e].data[t])
              : n._getLabels()[t];
          },
          _configure: function () {
            var t = this,
              e = t.options.offset,
              n = t.ticks;
            Mr.prototype._configure.call(t),
              t.isHorizontal() || (t._reversePixels = !t._reversePixels),
              n &&
                ((t._startValue = t.minIndex - (e ? 0.5 : 0)),
                (t._valueRange = Math.max(n.length - (e ? 0 : 1), 1)));
          },
          getPixelForValue: function (t, e, n) {
            var r,
              i,
              o,
              a = this;
            return (
              Sr(e) || Sr(n) || (t = a.chart.data.datasets[n].data[e]),
              Sr(t) || (r = a.isHorizontal() ? t.x : t.y),
              (void 0 !== r || (void 0 !== t && isNaN(e))) &&
                ((i = a._getLabels()),
                (t = ut.valueOrDefault(r, t)),
                (o = i.indexOf(t)),
                (e = -1 !== o ? o : e),
                isNaN(e) && (e = t)),
              a.getPixelForDecimal((e - a._startValue) / a._valueRange)
            );
          },
          getPixelForTick: function (t) {
            var e = this.ticks;
            return t < 0 || t > e.length - 1
              ? null
              : this.getPixelForValue(e[t], t + this.minIndex);
          },
          getValueForPixel: function (t) {
            var e = this,
              n = Math.round(
                e._startValue + e.getDecimalForPixel(t) * e._valueRange
              );
            return Math.min(Math.max(n, 0), e.ticks.length - 1);
          },
          getBasePixel: function () {
            return this.bottom;
          },
        }),
        Or = Ar;
      Tr._defaults = Or;
      var Er = ut.noop,
        Pr = ut.isNullOrUndef;
      function Lr(t, e) {
        var n,
          r,
          i,
          o,
          a = [],
          s = 1e-14,
          l = t.stepSize,
          c = l || 1,
          u = t.maxTicks - 1,
          d = t.min,
          f = t.max,
          h = t.precision,
          p = e.min,
          g = e.max,
          v = ut.niceNum((g - p) / u / c) * c;
        if (v < s && Pr(d) && Pr(f)) return [p, g];
        (o = Math.ceil(g / v) - Math.floor(p / v)),
          o > u && (v = ut.niceNum((o * v) / u / c) * c),
          l || Pr(h)
            ? (n = Math.pow(10, ut._decimalPlaces(v)))
            : ((n = Math.pow(10, h)), (v = Math.ceil(v * n) / n)),
          (r = Math.floor(p / v) * v),
          (i = Math.ceil(g / v) * v),
          l &&
            (!Pr(d) && ut.almostWhole(d / v, v / 1e3) && (r = d),
            !Pr(f) && ut.almostWhole(f / v, v / 1e3) && (i = f)),
          (o = (i - r) / v),
          (o = ut.almostEquals(o, Math.round(o), v / 1e3)
            ? Math.round(o)
            : Math.ceil(o)),
          (r = Math.round(r * n) / n),
          (i = Math.round(i * n) / n),
          a.push(Pr(d) ? r : d);
        for (var m = 1; m < o; ++m) a.push(Math.round((r + m * v) * n) / n);
        return a.push(Pr(f) ? i : f), a;
      }
      var Dr = Mr.extend({
          getRightValue: function (t) {
            return "string" === typeof t
              ? +t
              : Mr.prototype.getRightValue.call(this, t);
          },
          handleTickRangeOptions: function () {
            var t = this,
              e = t.options,
              n = e.ticks;
            if (n.beginAtZero) {
              var r = ut.sign(t.min),
                i = ut.sign(t.max);
              r < 0 && i < 0 ? (t.max = 0) : r > 0 && i > 0 && (t.min = 0);
            }
            var o = void 0 !== n.min || void 0 !== n.suggestedMin,
              a = void 0 !== n.max || void 0 !== n.suggestedMax;
            void 0 !== n.min
              ? (t.min = n.min)
              : void 0 !== n.suggestedMin &&
                (null === t.min
                  ? (t.min = n.suggestedMin)
                  : (t.min = Math.min(t.min, n.suggestedMin))),
              void 0 !== n.max
                ? (t.max = n.max)
                : void 0 !== n.suggestedMax &&
                  (null === t.max
                    ? (t.max = n.suggestedMax)
                    : (t.max = Math.max(t.max, n.suggestedMax))),
              o !== a &&
                t.min >= t.max &&
                (o ? (t.max = t.min + 1) : (t.min = t.max - 1)),
              t.min === t.max && (t.max++, n.beginAtZero || t.min--);
          },
          getTickLimit: function () {
            var t,
              e = this,
              n = e.options.ticks,
              r = n.stepSize,
              i = n.maxTicksLimit;
            return (
              r
                ? (t = Math.ceil(e.max / r) - Math.floor(e.min / r) + 1)
                : ((t = e._computeTickLimit()), (i = i || 11)),
              i && (t = Math.min(i, t)),
              t
            );
          },
          _computeTickLimit: function () {
            return Number.POSITIVE_INFINITY;
          },
          handleDirectionalChanges: Er,
          buildTicks: function () {
            var t = this,
              e = t.options,
              n = e.ticks,
              r = t.getTickLimit();
            r = Math.max(2, r);
            var i = {
                maxTicks: r,
                min: n.min,
                max: n.max,
                precision: n.precision,
                stepSize: ut.valueOrDefault(n.fixedStepSize, n.stepSize),
              },
              o = (t.ticks = Lr(i, t));
            t.handleDirectionalChanges(),
              (t.max = ut.max(o)),
              (t.min = ut.min(o)),
              n.reverse
                ? (o.reverse(), (t.start = t.max), (t.end = t.min))
                : ((t.start = t.min), (t.end = t.max));
          },
          convertTicksToLabels: function () {
            var t = this;
            (t.ticksAsNumbers = t.ticks.slice()),
              (t.zeroLineIndex = t.ticks.indexOf(0)),
              Mr.prototype.convertTicksToLabels.call(t);
          },
          _configure: function () {
            var t,
              e = this,
              n = e.getTicks(),
              r = e.min,
              i = e.max;
            Mr.prototype._configure.call(e),
              e.options.offset &&
                n.length &&
                ((t = (i - r) / Math.max(n.length - 1, 1) / 2),
                (r -= t),
                (i += t)),
              (e._startValue = r),
              (e._endValue = i),
              (e._valueRange = i - r);
          },
        }),
        Ir = { position: "left", ticks: { callback: or.formatters.linear } },
        Nr = 0,
        Fr = 1;
      function Rr(t, e, n) {
        var r = [
          n.type,
          void 0 === e && void 0 === n.stack ? n.index : "",
          n.stack,
        ].join(".");
        return void 0 === t[r] && (t[r] = { pos: [], neg: [] }), t[r];
      }
      function jr(t, e, n, r) {
        var i,
          o,
          a = t.options,
          s = a.stacked,
          l = Rr(e, s, n),
          c = l.pos,
          u = l.neg,
          d = r.length;
        for (i = 0; i < d; ++i)
          (o = t._parseValue(r[i])),
            isNaN(o.min) ||
              isNaN(o.max) ||
              n.data[i].hidden ||
              ((c[i] = c[i] || 0),
              (u[i] = u[i] || 0),
              a.relativePoints
                ? (c[i] = 100)
                : o.min < 0 || o.max < 0
                ? (u[i] += o.min)
                : (c[i] += o.max));
      }
      function zr(t, e, n) {
        var r,
          i,
          o = n.length;
        for (r = 0; r < o; ++r)
          (i = t._parseValue(n[r])),
            isNaN(i.min) ||
              isNaN(i.max) ||
              e.data[r].hidden ||
              ((t.min = Math.min(t.min, i.min)),
              (t.max = Math.max(t.max, i.max)));
      }
      var Hr = Dr.extend({
          determineDataLimits: function () {
            var t,
              e,
              n,
              r,
              i = this,
              o = i.options,
              a = i.chart,
              s = a.data.datasets,
              l = i._getMatchingVisibleMetas(),
              c = o.stacked,
              u = {},
              d = l.length;
            if (
              ((i.min = Number.POSITIVE_INFINITY),
              (i.max = Number.NEGATIVE_INFINITY),
              void 0 === c)
            )
              for (t = 0; !c && t < d; ++t)
                (e = l[t]), (c = void 0 !== e.stack);
            for (t = 0; t < d; ++t)
              (e = l[t]),
                (n = s[e.index].data),
                c ? jr(i, u, e, n) : zr(i, e, n);
            ut.each(u, function (t) {
              (r = t.pos.concat(t.neg)),
                (i.min = Math.min(i.min, ut.min(r))),
                (i.max = Math.max(i.max, ut.max(r)));
            }),
              (i.min = ut.isFinite(i.min) && !isNaN(i.min) ? i.min : Nr),
              (i.max = ut.isFinite(i.max) && !isNaN(i.max) ? i.max : Fr),
              i.handleTickRangeOptions();
          },
          _computeTickLimit: function () {
            var t,
              e = this;
            return e.isHorizontal()
              ? Math.ceil(e.width / 40)
              : ((t = ut.options._parseFont(e.options.ticks)),
                Math.ceil(e.height / t.lineHeight));
          },
          handleDirectionalChanges: function () {
            this.isHorizontal() || this.ticks.reverse();
          },
          getLabelForIndex: function (t, e) {
            return this._getScaleLabel(this.chart.data.datasets[e].data[t]);
          },
          getPixelForValue: function (t) {
            var e = this;
            return e.getPixelForDecimal(
              (+e.getRightValue(t) - e._startValue) / e._valueRange
            );
          },
          getValueForPixel: function (t) {
            return (
              this._startValue + this.getDecimalForPixel(t) * this._valueRange
            );
          },
          getPixelForTick: function (t) {
            var e = this.ticksAsNumbers;
            return t < 0 || t > e.length - 1
              ? null
              : this.getPixelForValue(e[t]);
          },
        }),
        Br = Ir;
      Hr._defaults = Br;
      var Vr = ut.valueOrDefault,
        $r = ut.math.log10;
      function Wr(t, e) {
        var n,
          r,
          i = [],
          o = Vr(t.min, Math.pow(10, Math.floor($r(e.min)))),
          a = Math.floor($r(e.max)),
          s = Math.ceil(e.max / Math.pow(10, a));
        0 === o
          ? ((n = Math.floor($r(e.minNotZero))),
            (r = Math.floor(e.minNotZero / Math.pow(10, n))),
            i.push(o),
            (o = r * Math.pow(10, n)))
          : ((n = Math.floor($r(o))), (r = Math.floor(o / Math.pow(10, n))));
        var l = n < 0 ? Math.pow(10, Math.abs(n)) : 1;
        do {
          i.push(o),
            ++r,
            10 === r && ((r = 1), ++n, (l = n >= 0 ? 1 : l)),
            (o = Math.round(r * Math.pow(10, n) * l) / l);
        } while (n < a || (n === a && r < s));
        var c = Vr(t.max, o);
        return i.push(c), i;
      }
      var Ur = {
        position: "left",
        ticks: { callback: or.formatters.logarithmic },
      };
      function qr(t, e) {
        return ut.isFinite(t) && t >= 0 ? t : e;
      }
      var Yr = Mr.extend({
          determineDataLimits: function () {
            var t,
              e,
              n,
              r,
              i,
              o,
              a = this,
              s = a.options,
              l = a.chart,
              c = l.data.datasets,
              u = a.isHorizontal();
            function d(t) {
              return u ? t.xAxisID === a.id : t.yAxisID === a.id;
            }
            (a.min = Number.POSITIVE_INFINITY),
              (a.max = Number.NEGATIVE_INFINITY),
              (a.minNotZero = Number.POSITIVE_INFINITY);
            var f = s.stacked;
            if (void 0 === f)
              for (t = 0; t < c.length; t++)
                if (
                  ((e = l.getDatasetMeta(t)),
                  l.isDatasetVisible(t) && d(e) && void 0 !== e.stack)
                ) {
                  f = !0;
                  break;
                }
            if (s.stacked || f) {
              var h = {};
              for (t = 0; t < c.length; t++) {
                e = l.getDatasetMeta(t);
                var p = [
                  e.type,
                  void 0 === s.stacked && void 0 === e.stack ? t : "",
                  e.stack,
                ].join(".");
                if (l.isDatasetVisible(t) && d(e))
                  for (
                    void 0 === h[p] && (h[p] = []),
                      r = c[t].data,
                      i = 0,
                      o = r.length;
                    i < o;
                    i++
                  ) {
                    var g = h[p];
                    (n = a._parseValue(r[i])),
                      isNaN(n.min) ||
                        isNaN(n.max) ||
                        e.data[i].hidden ||
                        n.min < 0 ||
                        n.max < 0 ||
                        ((g[i] = g[i] || 0), (g[i] += n.max));
                  }
              }
              ut.each(h, function (t) {
                if (t.length > 0) {
                  var e = ut.min(t),
                    n = ut.max(t);
                  (a.min = Math.min(a.min, e)), (a.max = Math.max(a.max, n));
                }
              });
            } else
              for (t = 0; t < c.length; t++)
                if (((e = l.getDatasetMeta(t)), l.isDatasetVisible(t) && d(e)))
                  for (r = c[t].data, i = 0, o = r.length; i < o; i++)
                    (n = a._parseValue(r[i])),
                      isNaN(n.min) ||
                        isNaN(n.max) ||
                        e.data[i].hidden ||
                        n.min < 0 ||
                        n.max < 0 ||
                        ((a.min = Math.min(n.min, a.min)),
                        (a.max = Math.max(n.max, a.max)),
                        0 !== n.min &&
                          (a.minNotZero = Math.min(n.min, a.minNotZero)));
            (a.min = ut.isFinite(a.min) ? a.min : null),
              (a.max = ut.isFinite(a.max) ? a.max : null),
              (a.minNotZero = ut.isFinite(a.minNotZero) ? a.minNotZero : null),
              this.handleTickRangeOptions();
          },
          handleTickRangeOptions: function () {
            var t = this,
              e = t.options.ticks,
              n = 1,
              r = 10;
            (t.min = qr(e.min, t.min)),
              (t.max = qr(e.max, t.max)),
              t.min === t.max &&
                (0 !== t.min && null !== t.min
                  ? ((t.min = Math.pow(10, Math.floor($r(t.min)) - 1)),
                    (t.max = Math.pow(10, Math.floor($r(t.max)) + 1)))
                  : ((t.min = n), (t.max = r))),
              null === t.min &&
                (t.min = Math.pow(10, Math.floor($r(t.max)) - 1)),
              null === t.max &&
                (t.max =
                  0 !== t.min ? Math.pow(10, Math.floor($r(t.min)) + 1) : r),
              null === t.minNotZero &&
                (t.min > 0
                  ? (t.minNotZero = t.min)
                  : t.max < 1
                  ? (t.minNotZero = Math.pow(10, Math.floor($r(t.max))))
                  : (t.minNotZero = n));
          },
          buildTicks: function () {
            var t = this,
              e = t.options.ticks,
              n = !t.isHorizontal(),
              r = { min: qr(e.min), max: qr(e.max) },
              i = (t.ticks = Wr(r, t));
            (t.max = ut.max(i)),
              (t.min = ut.min(i)),
              e.reverse
                ? ((n = !n), (t.start = t.max), (t.end = t.min))
                : ((t.start = t.min), (t.end = t.max)),
              n && i.reverse();
          },
          convertTicksToLabels: function () {
            (this.tickValues = this.ticks.slice()),
              Mr.prototype.convertTicksToLabels.call(this);
          },
          getLabelForIndex: function (t, e) {
            return this._getScaleLabel(this.chart.data.datasets[e].data[t]);
          },
          getPixelForTick: function (t) {
            var e = this.tickValues;
            return t < 0 || t > e.length - 1
              ? null
              : this.getPixelForValue(e[t]);
          },
          _getFirstTickValue: function (t) {
            var e = Math.floor($r(t)),
              n = Math.floor(t / Math.pow(10, e));
            return n * Math.pow(10, e);
          },
          _configure: function () {
            var t = this,
              e = t.min,
              n = 0;
            Mr.prototype._configure.call(t),
              0 === e &&
                ((e = t._getFirstTickValue(t.minNotZero)),
                (n =
                  Vr(t.options.ticks.fontSize, J.global.defaultFontSize) /
                  t._length)),
              (t._startValue = $r(e)),
              (t._valueOffset = n),
              (t._valueRange = ($r(t.max) - $r(e)) / (1 - n));
          },
          getPixelForValue: function (t) {
            var e = this,
              n = 0;
            return (
              (t = +e.getRightValue(t)),
              t > e.min &&
                t > 0 &&
                (n = ($r(t) - e._startValue) / e._valueRange + e._valueOffset),
              e.getPixelForDecimal(n)
            );
          },
          getValueForPixel: function (t) {
            var e = this,
              n = e.getDecimalForPixel(t);
            return 0 === n && 0 === e.min
              ? 0
              : Math.pow(
                  10,
                  e._startValue + (n - e._valueOffset) * e._valueRange
                );
          },
        }),
        Gr = Ur;
      Yr._defaults = Gr;
      var Xr = ut.valueOrDefault,
        Kr = ut.valueAtIndexOrDefault,
        Zr = ut.options.resolve,
        Jr = {
          display: !0,
          animate: !0,
          position: "chartArea",
          angleLines: {
            display: !0,
            color: "rgba(0,0,0,0.1)",
            lineWidth: 1,
            borderDash: [],
            borderDashOffset: 0,
          },
          gridLines: { circular: !1 },
          ticks: {
            showLabelBackdrop: !0,
            backdropColor: "rgba(255,255,255,0.75)",
            backdropPaddingY: 2,
            backdropPaddingX: 2,
            callback: or.formatters.linear,
          },
          pointLabels: {
            display: !0,
            fontSize: 10,
            callback: function (t) {
              return t;
            },
          },
        };
      function Qr(t) {
        var e = t.ticks;
        return e.display && t.display
          ? Xr(e.fontSize, J.global.defaultFontSize) + 2 * e.backdropPaddingY
          : 0;
      }
      function ti(t, e, n) {
        return ut.isArray(n)
          ? { w: ut.longestText(t, t.font, n), h: n.length * e }
          : { w: t.measureText(n).width, h: e };
      }
      function ei(t, e, n, r, i) {
        return t === r || t === i
          ? { start: e - n / 2, end: e + n / 2 }
          : t < r || t > i
          ? { start: e - n, end: e }
          : { start: e, end: e + n };
      }
      function ni(t) {
        var e,
          n,
          r,
          i = ut.options._parseFont(t.options.pointLabels),
          o = { l: 0, r: t.width, t: 0, b: t.height - t.paddingTop },
          a = {};
        (t.ctx.font = i.string), (t._pointLabelSizes = []);
        var s = t.chart.data.labels.length;
        for (e = 0; e < s; e++) {
          (r = t.getPointPosition(e, t.drawingArea + 5)),
            (n = ti(t.ctx, i.lineHeight, t.pointLabels[e])),
            (t._pointLabelSizes[e] = n);
          var l = t.getIndexAngle(e),
            c = ut.toDegrees(l) % 360,
            u = ei(c, r.x, n.w, 0, 180),
            d = ei(c, r.y, n.h, 90, 270);
          u.start < o.l && ((o.l = u.start), (a.l = l)),
            u.end > o.r && ((o.r = u.end), (a.r = l)),
            d.start < o.t && ((o.t = d.start), (a.t = l)),
            d.end > o.b && ((o.b = d.end), (a.b = l));
        }
        t.setReductions(t.drawingArea, o, a);
      }
      function ri(t) {
        return 0 === t || 180 === t ? "center" : t < 180 ? "left" : "right";
      }
      function ii(t, e, n, r) {
        var i,
          o,
          a = n.y + r / 2;
        if (ut.isArray(e))
          for (i = 0, o = e.length; i < o; ++i)
            t.fillText(e[i], n.x, a), (a += r);
        else t.fillText(e, n.x, a);
      }
      function oi(t, e, n) {
        90 === t || 270 === t
          ? (n.y -= e.h / 2)
          : (t > 270 || t < 90) && (n.y -= e.h);
      }
      function ai(t) {
        var e = t.ctx,
          n = t.options,
          r = n.pointLabels,
          i = Qr(n),
          o = t.getDistanceFromCenterForValue(n.ticks.reverse ? t.min : t.max),
          a = ut.options._parseFont(r);
        e.save(), (e.font = a.string), (e.textBaseline = "middle");
        for (var s = t.chart.data.labels.length - 1; s >= 0; s--) {
          var l = 0 === s ? i / 2 : 0,
            c = t.getPointPosition(s, o + l + 5),
            u = Kr(r.fontColor, s, J.global.defaultFontColor);
          e.fillStyle = u;
          var d = t.getIndexAngle(s),
            f = ut.toDegrees(d);
          (e.textAlign = ri(f)),
            oi(f, t._pointLabelSizes[s], c),
            ii(e, t.pointLabels[s], c, a.lineHeight);
        }
        e.restore();
      }
      function si(t, e, n, r) {
        var i,
          o = t.ctx,
          a = e.circular,
          s = t.chart.data.labels.length,
          l = Kr(e.color, r - 1),
          c = Kr(e.lineWidth, r - 1);
        if ((a || s) && l && c) {
          if (
            (o.save(),
            (o.strokeStyle = l),
            (o.lineWidth = c),
            o.setLineDash &&
              (o.setLineDash(e.borderDash || []),
              (o.lineDashOffset = e.borderDashOffset || 0)),
            o.beginPath(),
            a)
          )
            o.arc(t.xCenter, t.yCenter, n, 0, 2 * Math.PI);
          else {
            (i = t.getPointPosition(0, n)), o.moveTo(i.x, i.y);
            for (var u = 1; u < s; u++)
              (i = t.getPointPosition(u, n)), o.lineTo(i.x, i.y);
          }
          o.closePath(), o.stroke(), o.restore();
        }
      }
      function li(t) {
        return ut.isNumber(t) ? t : 0;
      }
      var ci = Dr.extend({
          setDimensions: function () {
            var t = this;
            (t.width = t.maxWidth),
              (t.height = t.maxHeight),
              (t.paddingTop = Qr(t.options) / 2),
              (t.xCenter = Math.floor(t.width / 2)),
              (t.yCenter = Math.floor((t.height - t.paddingTop) / 2)),
              (t.drawingArea = Math.min(t.height - t.paddingTop, t.width) / 2);
          },
          determineDataLimits: function () {
            var t = this,
              e = t.chart,
              n = Number.POSITIVE_INFINITY,
              r = Number.NEGATIVE_INFINITY;
            ut.each(e.data.datasets, function (i, o) {
              if (e.isDatasetVisible(o)) {
                var a = e.getDatasetMeta(o);
                ut.each(i.data, function (e, i) {
                  var o = +t.getRightValue(e);
                  isNaN(o) ||
                    a.data[i].hidden ||
                    ((n = Math.min(o, n)), (r = Math.max(o, r)));
                });
              }
            }),
              (t.min = n === Number.POSITIVE_INFINITY ? 0 : n),
              (t.max = r === Number.NEGATIVE_INFINITY ? 0 : r),
              t.handleTickRangeOptions();
          },
          _computeTickLimit: function () {
            return Math.ceil(this.drawingArea / Qr(this.options));
          },
          convertTicksToLabels: function () {
            var t = this;
            Dr.prototype.convertTicksToLabels.call(t),
              (t.pointLabels = t.chart.data.labels.map(function () {
                var e = ut.callback(
                  t.options.pointLabels.callback,
                  arguments,
                  t
                );
                return e || 0 === e ? e : "";
              }));
          },
          getLabelForIndex: function (t, e) {
            return +this.getRightValue(this.chart.data.datasets[e].data[t]);
          },
          fit: function () {
            var t = this,
              e = t.options;
            e.display && e.pointLabels.display
              ? ni(t)
              : t.setCenterPoint(0, 0, 0, 0);
          },
          setReductions: function (t, e, n) {
            var r = this,
              i = e.l / Math.sin(n.l),
              o = Math.max(e.r - r.width, 0) / Math.sin(n.r),
              a = -e.t / Math.cos(n.t),
              s = -Math.max(e.b - (r.height - r.paddingTop), 0) / Math.cos(n.b);
            (i = li(i)),
              (o = li(o)),
              (a = li(a)),
              (s = li(s)),
              (r.drawingArea = Math.min(
                Math.floor(t - (i + o) / 2),
                Math.floor(t - (a + s) / 2)
              )),
              r.setCenterPoint(i, o, a, s);
          },
          setCenterPoint: function (t, e, n, r) {
            var i = this,
              o = i.width - e - i.drawingArea,
              a = t + i.drawingArea,
              s = n + i.drawingArea,
              l = i.height - i.paddingTop - r - i.drawingArea;
            (i.xCenter = Math.floor((a + o) / 2 + i.left)),
              (i.yCenter = Math.floor((s + l) / 2 + i.top + i.paddingTop));
          },
          getIndexAngle: function (t) {
            var e = this.chart,
              n = 360 / e.data.labels.length,
              r = e.options || {},
              i = r.startAngle || 0,
              o = (t * n + i) % 360;
            return ((o < 0 ? o + 360 : o) * Math.PI * 2) / 360;
          },
          getDistanceFromCenterForValue: function (t) {
            var e = this;
            if (ut.isNullOrUndef(t)) return NaN;
            var n = e.drawingArea / (e.max - e.min);
            return e.options.ticks.reverse ? (e.max - t) * n : (t - e.min) * n;
          },
          getPointPosition: function (t, e) {
            var n = this,
              r = n.getIndexAngle(t) - Math.PI / 2;
            return {
              x: Math.cos(r) * e + n.xCenter,
              y: Math.sin(r) * e + n.yCenter,
            };
          },
          getPointPositionForValue: function (t, e) {
            return this.getPointPosition(
              t,
              this.getDistanceFromCenterForValue(e)
            );
          },
          getBasePosition: function (t) {
            var e = this,
              n = e.min,
              r = e.max;
            return e.getPointPositionForValue(
              t || 0,
              e.beginAtZero ? 0 : n < 0 && r < 0 ? r : n > 0 && r > 0 ? n : 0
            );
          },
          _drawGrid: function () {
            var t,
              e,
              n,
              r = this,
              i = r.ctx,
              o = r.options,
              a = o.gridLines,
              s = o.angleLines,
              l = Xr(s.lineWidth, a.lineWidth),
              c = Xr(s.color, a.color);
            if (
              (o.pointLabels.display && ai(r),
              a.display &&
                ut.each(r.ticks, function (t, n) {
                  0 !== n &&
                    ((e = r.getDistanceFromCenterForValue(r.ticksAsNumbers[n])),
                    si(r, a, e, n));
                }),
              s.display && l && c)
            ) {
              for (
                i.save(),
                  i.lineWidth = l,
                  i.strokeStyle = c,
                  i.setLineDash &&
                    (i.setLineDash(Zr([s.borderDash, a.borderDash, []])),
                    (i.lineDashOffset = Zr([
                      s.borderDashOffset,
                      a.borderDashOffset,
                      0,
                    ]))),
                  t = r.chart.data.labels.length - 1;
                t >= 0;
                t--
              )
                (e = r.getDistanceFromCenterForValue(
                  o.ticks.reverse ? r.min : r.max
                )),
                  (n = r.getPointPosition(t, e)),
                  i.beginPath(),
                  i.moveTo(r.xCenter, r.yCenter),
                  i.lineTo(n.x, n.y),
                  i.stroke();
              i.restore();
            }
          },
          _drawLabels: function () {
            var t = this,
              e = t.ctx,
              n = t.options,
              r = n.ticks;
            if (r.display) {
              var i,
                o,
                a = t.getIndexAngle(0),
                s = ut.options._parseFont(r),
                l = Xr(r.fontColor, J.global.defaultFontColor);
              e.save(),
                (e.font = s.string),
                e.translate(t.xCenter, t.yCenter),
                e.rotate(a),
                (e.textAlign = "center"),
                (e.textBaseline = "middle"),
                ut.each(t.ticks, function (n, a) {
                  (0 !== a || r.reverse) &&
                    ((i = t.getDistanceFromCenterForValue(t.ticksAsNumbers[a])),
                    r.showLabelBackdrop &&
                      ((o = e.measureText(n).width),
                      (e.fillStyle = r.backdropColor),
                      e.fillRect(
                        -o / 2 - r.backdropPaddingX,
                        -i - s.size / 2 - r.backdropPaddingY,
                        o + 2 * r.backdropPaddingX,
                        s.size + 2 * r.backdropPaddingY
                      )),
                    (e.fillStyle = l),
                    e.fillText(n, 0, -i));
                }),
                e.restore();
            }
          },
          _drawTitle: ut.noop,
        }),
        ui = Jr;
      ci._defaults = ui;
      var di = ut._deprecated,
        fi = ut.options.resolve,
        hi = ut.valueOrDefault,
        pi = Number.MIN_SAFE_INTEGER || -9007199254740991,
        gi = Number.MAX_SAFE_INTEGER || 9007199254740991,
        vi = {
          millisecond: { common: !0, size: 1, steps: 1e3 },
          second: { common: !0, size: 1e3, steps: 60 },
          minute: { common: !0, size: 6e4, steps: 60 },
          hour: { common: !0, size: 36e5, steps: 24 },
          day: { common: !0, size: 864e5, steps: 30 },
          week: { common: !1, size: 6048e5, steps: 4 },
          month: { common: !0, size: 2628e6, steps: 12 },
          quarter: { common: !1, size: 7884e6, steps: 4 },
          year: { common: !0, size: 3154e7 },
        },
        mi = Object.keys(vi);
      function bi(t, e) {
        return t - e;
      }
      function yi(t) {
        var e,
          n,
          r,
          i = {},
          o = [];
        for (e = 0, n = t.length; e < n; ++e)
          (r = t[e]), i[r] || ((i[r] = !0), o.push(r));
        return o;
      }
      function xi(t) {
        return ut.valueOrDefault(t.time.min, t.ticks.min);
      }
      function _i(t) {
        return ut.valueOrDefault(t.time.max, t.ticks.max);
      }
      function wi(t, e, n, r) {
        if ("linear" === r || !t.length)
          return [
            { time: e, pos: 0 },
            { time: n, pos: 1 },
          ];
        var i,
          o,
          a,
          s,
          l,
          c = [],
          u = [e];
        for (i = 0, o = t.length; i < o; ++i)
          (s = t[i]), s > e && s < n && u.push(s);
        for (u.push(n), i = 0, o = u.length; i < o; ++i)
          (l = u[i + 1]),
            (a = u[i - 1]),
            (s = u[i]),
            (void 0 !== a && void 0 !== l && Math.round((l + a) / 2) === s) ||
              c.push({ time: s, pos: i / (o - 1) });
        return c;
      }
      function ki(t, e, n) {
        var r,
          i,
          o,
          a = 0,
          s = t.length - 1;
        while (a >= 0 && a <= s) {
          if (((r = (a + s) >> 1), (i = t[r - 1] || null), (o = t[r]), !i))
            return { lo: null, hi: o };
          if (o[e] < n) a = r + 1;
          else {
            if (!(i[e] > n)) return { lo: i, hi: o };
            s = r - 1;
          }
        }
        return { lo: o, hi: null };
      }
      function Ci(t, e, n, r) {
        var i = ki(t, e, n),
          o = i.lo ? (i.hi ? i.lo : t[t.length - 2]) : t[0],
          a = i.lo ? (i.hi ? i.hi : t[t.length - 1]) : t[1],
          s = a[e] - o[e],
          l = s ? (n - o[e]) / s : 0,
          c = (a[r] - o[r]) * l;
        return o[r] + c;
      }
      function Mi(t, e) {
        var n = t._adapter,
          r = t.options.time,
          i = r.parser,
          o = i || r.format,
          a = e;
        return (
          "function" === typeof i && (a = i(a)),
          ut.isFinite(a) ||
            (a = "string" === typeof o ? n.parse(a, o) : n.parse(a)),
          null !== a
            ? +a
            : (i ||
                "function" !== typeof o ||
                ((a = o(e)), ut.isFinite(a) || (a = n.parse(a))),
              a)
        );
      }
      function Si(t, e) {
        if (ut.isNullOrUndef(e)) return null;
        var n = t.options.time,
          r = Mi(t, t.getRightValue(e));
        return (
          null === r || (n.round && (r = +t._adapter.startOf(r, n.round))), r
        );
      }
      function Ai(t, e, n, r) {
        var i,
          o,
          a,
          s = mi.length;
        for (i = mi.indexOf(t); i < s - 1; ++i)
          if (
            ((o = vi[mi[i]]),
            (a = o.steps ? o.steps : gi),
            o.common && Math.ceil((n - e) / (a * o.size)) <= r)
          )
            return mi[i];
        return mi[s - 1];
      }
      function Ti(t, e, n, r, i) {
        var o, a;
        for (o = mi.length - 1; o >= mi.indexOf(n); o--)
          if (((a = mi[o]), vi[a].common && t._adapter.diff(i, r, a) >= e - 1))
            return a;
        return mi[n ? mi.indexOf(n) : 0];
      }
      function Oi(t) {
        for (var e = mi.indexOf(t) + 1, n = mi.length; e < n; ++e)
          if (vi[mi[e]].common) return mi[e];
      }
      function Ei(t, e, n, r) {
        var i,
          o = t._adapter,
          a = t.options,
          s = a.time,
          l = s.unit || Ai(s.minUnit, e, n, r),
          c = fi([s.stepSize, s.unitStepSize, 1]),
          u = "week" === l && s.isoWeekday,
          d = e,
          f = [];
        if (
          (u && (d = +o.startOf(d, "isoWeek", u)),
          (d = +o.startOf(d, u ? "day" : l)),
          o.diff(n, e, l) > 1e5 * c)
        )
          throw (
            e +
            " and " +
            n +
            " are too far apart with stepSize of " +
            c +
            " " +
            l
          );
        for (i = d; i < n; i = +o.add(i, c, l)) f.push(i);
        return (i !== n && "ticks" !== a.bounds) || f.push(i), f;
      }
      function Pi(t, e, n, r, i) {
        var o,
          a,
          s = 0,
          l = 0;
        return (
          i.offset &&
            e.length &&
            ((o = Ci(t, "time", e[0], "pos")),
            (s = 1 === e.length ? 1 - o : (Ci(t, "time", e[1], "pos") - o) / 2),
            (a = Ci(t, "time", e[e.length - 1], "pos")),
            (l =
              1 === e.length
                ? a
                : (a - Ci(t, "time", e[e.length - 2], "pos")) / 2)),
          { start: s, end: l, factor: 1 / (s + 1 + l) }
        );
      }
      function Li(t, e, n, r) {
        var i,
          o,
          a = t._adapter,
          s = +a.startOf(e[0].value, r),
          l = e[e.length - 1].value;
        for (i = s; i <= l; i = +a.add(i, 1, r))
          (o = n[i]), o >= 0 && (e[o].major = !0);
        return e;
      }
      function Di(t, e, n) {
        var r,
          i,
          o = [],
          a = {},
          s = e.length;
        for (r = 0; r < s; ++r)
          (i = e[r]), (a[i] = r), o.push({ value: i, major: !1 });
        return 0 !== s && n ? Li(t, o, a, n) : o;
      }
      var Ii = {
          position: "bottom",
          distribution: "linear",
          bounds: "data",
          adapters: {},
          time: {
            parser: !1,
            unit: !1,
            round: !1,
            displayFormat: !1,
            isoWeekday: !1,
            minUnit: "millisecond",
            displayFormats: {},
          },
          ticks: { autoSkip: !1, source: "auto", major: { enabled: !1 } },
        },
        Ni = Mr.extend({
          initialize: function () {
            this.mergeTicksOptions(), Mr.prototype.initialize.call(this);
          },
          update: function () {
            var t = this,
              e = t.options,
              n = e.time || (e.time = {}),
              r = (t._adapter = new ir._date(e.adapters.date));
            return (
              di("time scale", n.format, "time.format", "time.parser"),
              di("time scale", n.min, "time.min", "ticks.min"),
              di("time scale", n.max, "time.max", "ticks.max"),
              ut.mergeIf(n.displayFormats, r.formats()),
              Mr.prototype.update.apply(t, arguments)
            );
          },
          getRightValue: function (t) {
            return (
              t && void 0 !== t.t && (t = t.t),
              Mr.prototype.getRightValue.call(this, t)
            );
          },
          determineDataLimits: function () {
            var t,
              e,
              n,
              r,
              i,
              o,
              a,
              s = this,
              l = s.chart,
              c = s._adapter,
              u = s.options,
              d = u.time.unit || "day",
              f = gi,
              h = pi,
              p = [],
              g = [],
              v = [],
              m = s._getLabels();
            for (t = 0, n = m.length; t < n; ++t) v.push(Si(s, m[t]));
            for (t = 0, n = (l.data.datasets || []).length; t < n; ++t)
              if (l.isDatasetVisible(t))
                if (((i = l.data.datasets[t].data), ut.isObject(i[0])))
                  for (g[t] = [], e = 0, r = i.length; e < r; ++e)
                    (o = Si(s, i[e])), p.push(o), (g[t][e] = o);
                else (g[t] = v.slice(0)), a || ((p = p.concat(v)), (a = !0));
              else g[t] = [];
            v.length &&
              ((f = Math.min(f, v[0])), (h = Math.max(h, v[v.length - 1]))),
              p.length &&
                ((p = n > 1 ? yi(p).sort(bi) : p.sort(bi)),
                (f = Math.min(f, p[0])),
                (h = Math.max(h, p[p.length - 1]))),
              (f = Si(s, xi(u)) || f),
              (h = Si(s, _i(u)) || h),
              (f = f === gi ? +c.startOf(Date.now(), d) : f),
              (h = h === pi ? +c.endOf(Date.now(), d) + 1 : h),
              (s.min = Math.min(f, h)),
              (s.max = Math.max(f + 1, h)),
              (s._table = []),
              (s._timestamps = { data: p, datasets: g, labels: v });
          },
          buildTicks: function () {
            var t,
              e,
              n,
              r = this,
              i = r.min,
              o = r.max,
              a = r.options,
              s = a.ticks,
              l = a.time,
              c = r._timestamps,
              u = [],
              d = r.getLabelCapacity(i),
              f = s.source,
              h = a.distribution;
            for (
              c =
                "data" === f || ("auto" === f && "series" === h)
                  ? c.data
                  : "labels" === f
                  ? c.labels
                  : Ei(r, i, o, d),
                "ticks" === a.bounds &&
                  c.length &&
                  ((i = c[0]), (o = c[c.length - 1])),
                i = Si(r, xi(a)) || i,
                o = Si(r, _i(a)) || o,
                t = 0,
                e = c.length;
              t < e;
              ++t
            )
              (n = c[t]), n >= i && n <= o && u.push(n);
            return (
              (r.min = i),
              (r.max = o),
              (r._unit =
                l.unit ||
                (s.autoSkip
                  ? Ai(l.minUnit, r.min, r.max, d)
                  : Ti(r, u.length, l.minUnit, r.min, r.max))),
              (r._majorUnit =
                s.major.enabled && "year" !== r._unit ? Oi(r._unit) : void 0),
              (r._table = wi(r._timestamps.data, i, o, h)),
              (r._offsets = Pi(r._table, u, i, o, a)),
              s.reverse && u.reverse(),
              Di(r, u, r._majorUnit)
            );
          },
          getLabelForIndex: function (t, e) {
            var n = this,
              r = n._adapter,
              i = n.chart.data,
              o = n.options.time,
              a = i.labels && t < i.labels.length ? i.labels[t] : "",
              s = i.datasets[e].data[t];
            return (
              ut.isObject(s) && (a = n.getRightValue(s)),
              o.tooltipFormat
                ? r.format(Mi(n, a), o.tooltipFormat)
                : "string" === typeof a
                ? a
                : r.format(Mi(n, a), o.displayFormats.datetime)
            );
          },
          tickFormatFunction: function (t, e, n, r) {
            var i = this,
              o = i._adapter,
              a = i.options,
              s = a.time.displayFormats,
              l = s[i._unit],
              c = i._majorUnit,
              u = s[c],
              d = n[e],
              f = a.ticks,
              h = c && u && d && d.major,
              p = o.format(t, r || (h ? u : l)),
              g = h ? f.major : f.minor,
              v = fi([g.callback, g.userCallback, f.callback, f.userCallback]);
            return v ? v(p, e, n) : p;
          },
          convertTicksToLabels: function (t) {
            var e,
              n,
              r = [];
            for (e = 0, n = t.length; e < n; ++e)
              r.push(this.tickFormatFunction(t[e].value, e, t));
            return r;
          },
          getPixelForOffset: function (t) {
            var e = this,
              n = e._offsets,
              r = Ci(e._table, "time", t, "pos");
            return e.getPixelForDecimal((n.start + r) * n.factor);
          },
          getPixelForValue: function (t, e, n) {
            var r = this,
              i = null;
            if (
              (void 0 !== e &&
                void 0 !== n &&
                (i = r._timestamps.datasets[n][e]),
              null === i && (i = Si(r, t)),
              null !== i)
            )
              return r.getPixelForOffset(i);
          },
          getPixelForTick: function (t) {
            var e = this.getTicks();
            return t >= 0 && t < e.length
              ? this.getPixelForOffset(e[t].value)
              : null;
          },
          getValueForPixel: function (t) {
            var e = this,
              n = e._offsets,
              r = e.getDecimalForPixel(t) / n.factor - n.end,
              i = Ci(e._table, "pos", r, "time");
            return e._adapter._create(i);
          },
          _getLabelSize: function (t) {
            var e = this,
              n = e.options.ticks,
              r = e.ctx.measureText(t).width,
              i = ut.toRadians(
                e.isHorizontal() ? n.maxRotation : n.minRotation
              ),
              o = Math.cos(i),
              a = Math.sin(i),
              s = hi(n.fontSize, J.global.defaultFontSize);
            return { w: r * o + s * a, h: r * a + s * o };
          },
          getLabelWidth: function (t) {
            return this._getLabelSize(t).w;
          },
          getLabelCapacity: function (t) {
            var e = this,
              n = e.options.time,
              r = n.displayFormats,
              i = r[n.unit] || r.millisecond,
              o = e.tickFormatFunction(t, 0, Di(e, [t], e._majorUnit), i),
              a = e._getLabelSize(o),
              s = Math.floor(e.isHorizontal() ? e.width / a.w : e.height / a.h);
            return e.options.offset && s--, s > 0 ? s : 1;
          },
        }),
        Fi = Ii;
      Ni._defaults = Fi;
      var Ri = {
          category: Tr,
          linear: Hr,
          logarithmic: Yr,
          radialLinear: ci,
          time: Ni,
        },
        ji = {
          datetime: "MMM D, YYYY, h:mm:ss a",
          millisecond: "h:mm:ss.SSS a",
          second: "h:mm:ss a",
          minute: "h:mm a",
          hour: "hA",
          day: "MMM D",
          week: "ll",
          month: "MMM YYYY",
          quarter: "[Q]Q - YYYY",
          year: "YYYY",
        };
      ir._date.override(
        "function" === typeof t
          ? {
              _id: "moment",
              formats: function () {
                return ji;
              },
              parse: function (e, n) {
                return (
                  "string" === typeof e && "string" === typeof n
                    ? (e = t(e, n))
                    : e instanceof t || (e = t(e)),
                  e.isValid() ? e.valueOf() : null
                );
              },
              format: function (e, n) {
                return t(e).format(n);
              },
              add: function (e, n, r) {
                return t(e).add(n, r).valueOf();
              },
              diff: function (e, n, r) {
                return t(e).diff(t(n), r);
              },
              startOf: function (e, n, r) {
                return (
                  (e = t(e)),
                  "isoWeek" === n
                    ? e.isoWeekday(r).valueOf()
                    : e.startOf(n).valueOf()
                );
              },
              endOf: function (e, n) {
                return t(e).endOf(n).valueOf();
              },
              _create: function (e) {
                return t(e);
              },
            }
          : {}
      ),
        J._set("global", { plugins: { filler: { propagate: !0 } } });
      var zi = {
        dataset: function (t) {
          var e = t.fill,
            n = t.chart,
            r = n.getDatasetMeta(e),
            i = r && n.isDatasetVisible(e),
            o = (i && r.dataset._children) || [],
            a = o.length || 0;
          return a
            ? function (t, e) {
                return (e < a && o[e]._view) || null;
              }
            : null;
        },
        boundary: function (t) {
          var e = t.boundary,
            n = e ? e.x : null,
            r = e ? e.y : null;
          return ut.isArray(e)
            ? function (t, n) {
                return e[n];
              }
            : function (t) {
                return { x: null === n ? t.x : n, y: null === r ? t.y : r };
              };
        },
      };
      function Hi(t, e, n) {
        var r,
          i = t._model || {},
          o = i.fill;
        if ((void 0 === o && (o = !!i.backgroundColor), !1 === o || null === o))
          return !1;
        if (!0 === o) return "origin";
        if (((r = parseFloat(o, 10)), isFinite(r) && Math.floor(r) === r))
          return (
            ("-" !== o[0] && "+" !== o[0]) || (r = e + r),
            !(r === e || r < 0 || r >= n) && r
          );
        switch (o) {
          case "bottom":
            return "start";
          case "top":
            return "end";
          case "zero":
            return "origin";
          case "origin":
          case "start":
          case "end":
            return o;
          default:
            return !1;
        }
      }
      function Bi(t) {
        var e,
          n = t.el._model || {},
          r = t.el._scale || {},
          i = t.fill,
          o = null;
        if (isFinite(i)) return null;
        if (
          ("start" === i
            ? (o = void 0 === n.scaleBottom ? r.bottom : n.scaleBottom)
            : "end" === i
            ? (o = void 0 === n.scaleTop ? r.top : n.scaleTop)
            : void 0 !== n.scaleZero
            ? (o = n.scaleZero)
            : r.getBasePixel && (o = r.getBasePixel()),
          void 0 !== o && null !== o)
        ) {
          if (void 0 !== o.x && void 0 !== o.y) return o;
          if (ut.isFinite(o))
            return (e = r.isHorizontal()), { x: e ? o : null, y: e ? null : o };
        }
        return null;
      }
      function Vi(t) {
        var e,
          n,
          r,
          i,
          o,
          a = t.el._scale,
          s = a.options,
          l = a.chart.data.labels.length,
          c = t.fill,
          u = [];
        if (!l) return null;
        for (
          e = s.ticks.reverse ? a.max : a.min,
            n = s.ticks.reverse ? a.min : a.max,
            r = a.getPointPositionForValue(0, e),
            i = 0;
          i < l;
          ++i
        )
          (o =
            "start" === c || "end" === c
              ? a.getPointPositionForValue(i, "start" === c ? e : n)
              : a.getBasePosition(i)),
            s.gridLines.circular &&
              ((o.cx = r.x),
              (o.cy = r.y),
              (o.angle = a.getIndexAngle(i) - Math.PI / 2)),
            u.push(o);
        return u;
      }
      function $i(t) {
        var e = t.el._scale || {};
        return e.getPointPositionForValue ? Vi(t) : Bi(t);
      }
      function Wi(t, e, n) {
        var r,
          i = t[e],
          o = i.fill,
          a = [e];
        if (!n) return o;
        while (!1 !== o && -1 === a.indexOf(o)) {
          if (!isFinite(o)) return o;
          if (((r = t[o]), !r)) return !1;
          if (r.visible) return o;
          a.push(o), (o = r.fill);
        }
        return !1;
      }
      function Ui(t) {
        var e = t.fill,
          n = "dataset";
        return !1 === e ? null : (isFinite(e) || (n = "boundary"), zi[n](t));
      }
      function qi(t) {
        return t && !t.skip;
      }
      function Yi(t, e, n, r, i) {
        var o, a, s, l;
        if (r && i) {
          for (t.moveTo(e[0].x, e[0].y), o = 1; o < r; ++o)
            ut.canvas.lineTo(t, e[o - 1], e[o]);
          if (void 0 === n[0].angle)
            for (t.lineTo(n[i - 1].x, n[i - 1].y), o = i - 1; o > 0; --o)
              ut.canvas.lineTo(t, n[o], n[o - 1], !0);
          else
            for (
              a = n[0].cx,
                s = n[0].cy,
                l = Math.sqrt(
                  Math.pow(n[0].x - a, 2) + Math.pow(n[0].y - s, 2)
                ),
                o = i - 1;
              o > 0;
              --o
            )
              t.arc(a, s, l, n[o].angle, n[o - 1].angle, !0);
        }
      }
      function Gi(t, e, n, r, i, o) {
        var a,
          s,
          l,
          c,
          u,
          d,
          f,
          h,
          p = e.length,
          g = r.spanGaps,
          v = [],
          m = [],
          b = 0,
          y = 0;
        for (t.beginPath(), a = 0, s = p; a < s; ++a)
          (l = a % p),
            (c = e[l]._view),
            (u = n(c, l, r)),
            (d = qi(c)),
            (f = qi(u)),
            o && void 0 === h && d && ((h = a + 1), (s = p + h)),
            d && f
              ? ((b = v.push(c)), (y = m.push(u)))
              : b &&
                y &&
                (g
                  ? (d && v.push(c), f && m.push(u))
                  : (Yi(t, v, m, b, y), (b = y = 0), (v = []), (m = [])));
        Yi(t, v, m, b, y), t.closePath(), (t.fillStyle = i), t.fill();
      }
      var Xi = {
          id: "filler",
          afterDatasetsUpdate: function (t, e) {
            var n,
              r,
              i,
              o,
              a = (t.data.datasets || []).length,
              s = e.propagate,
              l = [];
            for (r = 0; r < a; ++r)
              (n = t.getDatasetMeta(r)),
                (i = n.dataset),
                (o = null),
                i &&
                  i._model &&
                  i instanceof Kt.Line &&
                  (o = {
                    visible: t.isDatasetVisible(r),
                    fill: Hi(i, r, a),
                    chart: t,
                    el: i,
                  }),
                (n.$filler = o),
                l.push(o);
            for (r = 0; r < a; ++r)
              (o = l[r]),
                o &&
                  ((o.fill = Wi(l, r, s)),
                  (o.boundary = $i(o)),
                  (o.mapper = Ui(o)));
          },
          beforeDatasetsDraw: function (t) {
            var e,
              n,
              r,
              i,
              o,
              a,
              s,
              l = t._getSortedVisibleDatasetMetas(),
              c = t.ctx;
            for (n = l.length - 1; n >= 0; --n)
              (e = l[n].$filler),
                e &&
                  e.visible &&
                  ((r = e.el),
                  (i = r._view),
                  (o = r._children || []),
                  (a = e.mapper),
                  (s = i.backgroundColor || J.global.defaultColor),
                  a &&
                    s &&
                    o.length &&
                    (ut.canvas.clipArea(c, t.chartArea),
                    Gi(c, o, a, i, s, r._loop),
                    ut.canvas.unclipArea(c)));
          },
        },
        Ki = ut.rtl.getRtlAdapter,
        Zi = ut.noop,
        Ji = ut.valueOrDefault;
      function Qi(t, e) {
        return t.usePointStyle && t.boxWidth > e ? e : t.boxWidth;
      }
      J._set("global", {
        legend: {
          display: !0,
          position: "top",
          align: "center",
          fullWidth: !0,
          reverse: !1,
          weight: 1e3,
          onClick: function (t, e) {
            var n = e.datasetIndex,
              r = this.chart,
              i = r.getDatasetMeta(n);
            (i.hidden = null === i.hidden ? !r.data.datasets[n].hidden : null),
              r.update();
          },
          onHover: null,
          onLeave: null,
          labels: {
            boxWidth: 40,
            padding: 10,
            generateLabels: function (t) {
              var e = t.data.datasets,
                n = t.options.legend || {},
                r = n.labels && n.labels.usePointStyle;
              return t._getSortedDatasetMetas().map(function (n) {
                var i = n.controller.getStyle(r ? 0 : void 0);
                return {
                  text: e[n.index].label,
                  fillStyle: i.backgroundColor,
                  hidden: !t.isDatasetVisible(n.index),
                  lineCap: i.borderCapStyle,
                  lineDash: i.borderDash,
                  lineDashOffset: i.borderDashOffset,
                  lineJoin: i.borderJoinStyle,
                  lineWidth: i.borderWidth,
                  strokeStyle: i.borderColor,
                  pointStyle: i.pointStyle,
                  rotation: i.rotation,
                  datasetIndex: n.index,
                };
              }, this);
            },
          },
        },
        legendCallback: function (t) {
          var e,
            n,
            r,
            i,
            o = document.createElement("ul"),
            a = t.data.datasets;
          for (
            o.setAttribute("class", t.id + "-legend"), e = 0, n = a.length;
            e < n;
            e++
          )
            (r = o.appendChild(document.createElement("li"))),
              (i = r.appendChild(document.createElement("span"))),
              (i.style.backgroundColor = a[e].backgroundColor),
              a[e].label && r.appendChild(document.createTextNode(a[e].label));
          return o.outerHTML;
        },
      });
      var to = bt.extend({
        initialize: function (t) {
          var e = this;
          ut.extend(e, t),
            (e.legendHitBoxes = []),
            (e._hoveredItem = null),
            (e.doughnutMode = !1);
        },
        beforeUpdate: Zi,
        update: function (t, e, n) {
          var r = this;
          return (
            r.beforeUpdate(),
            (r.maxWidth = t),
            (r.maxHeight = e),
            (r.margins = n),
            r.beforeSetDimensions(),
            r.setDimensions(),
            r.afterSetDimensions(),
            r.beforeBuildLabels(),
            r.buildLabels(),
            r.afterBuildLabels(),
            r.beforeFit(),
            r.fit(),
            r.afterFit(),
            r.afterUpdate(),
            r.minSize
          );
        },
        afterUpdate: Zi,
        beforeSetDimensions: Zi,
        setDimensions: function () {
          var t = this;
          t.isHorizontal()
            ? ((t.width = t.maxWidth), (t.left = 0), (t.right = t.width))
            : ((t.height = t.maxHeight), (t.top = 0), (t.bottom = t.height)),
            (t.paddingLeft = 0),
            (t.paddingTop = 0),
            (t.paddingRight = 0),
            (t.paddingBottom = 0),
            (t.minSize = { width: 0, height: 0 });
        },
        afterSetDimensions: Zi,
        beforeBuildLabels: Zi,
        buildLabels: function () {
          var t = this,
            e = t.options.labels || {},
            n = ut.callback(e.generateLabels, [t.chart], t) || [];
          e.filter &&
            (n = n.filter(function (n) {
              return e.filter(n, t.chart.data);
            })),
            t.options.reverse && n.reverse(),
            (t.legendItems = n);
        },
        afterBuildLabels: Zi,
        beforeFit: Zi,
        fit: function () {
          var t = this,
            e = t.options,
            n = e.labels,
            r = e.display,
            i = t.ctx,
            o = ut.options._parseFont(n),
            a = o.size,
            s = (t.legendHitBoxes = []),
            l = t.minSize,
            c = t.isHorizontal();
          if (
            (c
              ? ((l.width = t.maxWidth), (l.height = r ? 10 : 0))
              : ((l.width = r ? 10 : 0), (l.height = t.maxHeight)),
            r)
          ) {
            if (((i.font = o.string), c)) {
              var u = (t.lineWidths = [0]),
                d = 0;
              (i.textAlign = "left"),
                (i.textBaseline = "middle"),
                ut.each(t.legendItems, function (t, e) {
                  var r = Qi(n, a),
                    o = r + a / 2 + i.measureText(t.text).width;
                  (0 === e || u[u.length - 1] + o + 2 * n.padding > l.width) &&
                    ((d += a + n.padding), (u[u.length - (e > 0 ? 0 : 1)] = 0)),
                    (s[e] = { left: 0, top: 0, width: o, height: a }),
                    (u[u.length - 1] += o + n.padding);
                }),
                (l.height += d);
            } else {
              var f = n.padding,
                h = (t.columnWidths = []),
                p = (t.columnHeights = []),
                g = n.padding,
                v = 0,
                m = 0;
              ut.each(t.legendItems, function (t, e) {
                var r = Qi(n, a),
                  o = r + a / 2 + i.measureText(t.text).width;
                e > 0 &&
                  m + a + 2 * f > l.height &&
                  ((g += v + n.padding),
                  h.push(v),
                  p.push(m),
                  (v = 0),
                  (m = 0)),
                  (v = Math.max(v, o)),
                  (m += a + f),
                  (s[e] = { left: 0, top: 0, width: o, height: a });
              }),
                (g += v),
                h.push(v),
                p.push(m),
                (l.width += g);
            }
            (t.width = l.width), (t.height = l.height);
          } else t.width = l.width = t.height = l.height = 0;
        },
        afterFit: Zi,
        isHorizontal: function () {
          return (
            "top" === this.options.position ||
            "bottom" === this.options.position
          );
        },
        draw: function () {
          var t = this,
            e = t.options,
            n = e.labels,
            r = J.global,
            i = r.defaultColor,
            o = r.elements.line,
            a = t.height,
            s = t.columnHeights,
            l = t.width,
            c = t.lineWidths;
          if (e.display) {
            var u,
              d = Ki(e.rtl, t.left, t.minSize.width),
              f = t.ctx,
              h = Ji(n.fontColor, r.defaultFontColor),
              p = ut.options._parseFont(n),
              g = p.size;
            (f.textAlign = d.textAlign("left")),
              (f.textBaseline = "middle"),
              (f.lineWidth = 0.5),
              (f.strokeStyle = h),
              (f.fillStyle = h),
              (f.font = p.string);
            var v = Qi(n, g),
              m = t.legendHitBoxes,
              b = function (t, e, r) {
                if (!(isNaN(v) || v <= 0)) {
                  f.save();
                  var a = Ji(r.lineWidth, o.borderWidth);
                  if (
                    ((f.fillStyle = Ji(r.fillStyle, i)),
                    (f.lineCap = Ji(r.lineCap, o.borderCapStyle)),
                    (f.lineDashOffset = Ji(
                      r.lineDashOffset,
                      o.borderDashOffset
                    )),
                    (f.lineJoin = Ji(r.lineJoin, o.borderJoinStyle)),
                    (f.lineWidth = a),
                    (f.strokeStyle = Ji(r.strokeStyle, i)),
                    f.setLineDash &&
                      f.setLineDash(Ji(r.lineDash, o.borderDash)),
                    n && n.usePointStyle)
                  ) {
                    var s = (v * Math.SQRT2) / 2,
                      l = d.xPlus(t, v / 2),
                      c = e + g / 2;
                    ut.canvas.drawPoint(f, r.pointStyle, s, l, c, r.rotation);
                  } else
                    f.fillRect(d.leftForLtr(t, v), e, v, g),
                      0 !== a && f.strokeRect(d.leftForLtr(t, v), e, v, g);
                  f.restore();
                }
              },
              y = function (t, e, n, r) {
                var i = g / 2,
                  o = d.xPlus(t, v + i),
                  a = e + i;
                f.fillText(n.text, o, a),
                  n.hidden &&
                    (f.beginPath(),
                    (f.lineWidth = 2),
                    f.moveTo(o, a),
                    f.lineTo(d.xPlus(o, r), a),
                    f.stroke());
              },
              x = function (t, r) {
                switch (e.align) {
                  case "start":
                    return n.padding;
                  case "end":
                    return t - r;
                  default:
                    return (t - r + n.padding) / 2;
                }
              },
              _ = t.isHorizontal();
            (u = _
              ? { x: t.left + x(l, c[0]), y: t.top + n.padding, line: 0 }
              : { x: t.left + n.padding, y: t.top + x(a, s[0]), line: 0 }),
              ut.rtl.overrideTextDirection(t.ctx, e.textDirection);
            var w = g + n.padding;
            ut.each(t.legendItems, function (e, r) {
              var i = f.measureText(e.text).width,
                o = v + g / 2 + i,
                h = u.x,
                p = u.y;
              d.setWidth(t.minSize.width),
                _
                  ? r > 0 &&
                    h + o + n.padding > t.left + t.minSize.width &&
                    ((p = u.y += w),
                    u.line++,
                    (h = u.x = t.left + x(l, c[u.line])))
                  : r > 0 &&
                    p + w > t.top + t.minSize.height &&
                    ((h = u.x = h + t.columnWidths[u.line] + n.padding),
                    u.line++,
                    (p = u.y = t.top + x(a, s[u.line])));
              var k = d.x(h);
              b(k, p, e),
                (m[r].left = d.leftForLtr(k, m[r].width)),
                (m[r].top = p),
                y(k, p, e, i),
                _ ? (u.x += o + n.padding) : (u.y += w);
            }),
              ut.rtl.restoreTextDirection(t.ctx, e.textDirection);
          }
        },
        _getLegendItemAt: function (t, e) {
          var n,
            r,
            i,
            o = this;
          if (t >= o.left && t <= o.right && e >= o.top && e <= o.bottom)
            for (i = o.legendHitBoxes, n = 0; n < i.length; ++n)
              if (
                ((r = i[n]),
                t >= r.left &&
                  t <= r.left + r.width &&
                  e >= r.top &&
                  e <= r.top + r.height)
              )
                return o.legendItems[n];
          return null;
        },
        handleEvent: function (t) {
          var e,
            n = this,
            r = n.options,
            i = "mouseup" === t.type ? "click" : t.type;
          if ("mousemove" === i) {
            if (!r.onHover && !r.onLeave) return;
          } else {
            if ("click" !== i) return;
            if (!r.onClick) return;
          }
          (e = n._getLegendItemAt(t.x, t.y)),
            "click" === i
              ? e && r.onClick && r.onClick.call(n, t.native, e)
              : (r.onLeave &&
                  e !== n._hoveredItem &&
                  (n._hoveredItem &&
                    r.onLeave.call(n, t.native, n._hoveredItem),
                  (n._hoveredItem = e)),
                r.onHover && e && r.onHover.call(n, t.native, e));
        },
      });
      function eo(t, e) {
        var n = new to({ ctx: t.ctx, options: e, chart: t });
        Xe.configure(t, n, e), Xe.addBox(t, n), (t.legend = n);
      }
      var no = {
          id: "legend",
          _element: to,
          beforeInit: function (t) {
            var e = t.options.legend;
            e && eo(t, e);
          },
          beforeUpdate: function (t) {
            var e = t.options.legend,
              n = t.legend;
            e
              ? (ut.mergeIf(e, J.global.legend),
                n ? (Xe.configure(t, n, e), (n.options = e)) : eo(t, e))
              : n && (Xe.removeBox(t, n), delete t.legend);
          },
          afterEvent: function (t, e) {
            var n = t.legend;
            n && n.handleEvent(e);
          },
        },
        ro = ut.noop;
      J._set("global", {
        title: {
          display: !1,
          fontStyle: "bold",
          fullWidth: !0,
          padding: 10,
          position: "top",
          text: "",
          weight: 2e3,
        },
      });
      var io = bt.extend({
        initialize: function (t) {
          var e = this;
          ut.extend(e, t), (e.legendHitBoxes = []);
        },
        beforeUpdate: ro,
        update: function (t, e, n) {
          var r = this;
          return (
            r.beforeUpdate(),
            (r.maxWidth = t),
            (r.maxHeight = e),
            (r.margins = n),
            r.beforeSetDimensions(),
            r.setDimensions(),
            r.afterSetDimensions(),
            r.beforeBuildLabels(),
            r.buildLabels(),
            r.afterBuildLabels(),
            r.beforeFit(),
            r.fit(),
            r.afterFit(),
            r.afterUpdate(),
            r.minSize
          );
        },
        afterUpdate: ro,
        beforeSetDimensions: ro,
        setDimensions: function () {
          var t = this;
          t.isHorizontal()
            ? ((t.width = t.maxWidth), (t.left = 0), (t.right = t.width))
            : ((t.height = t.maxHeight), (t.top = 0), (t.bottom = t.height)),
            (t.paddingLeft = 0),
            (t.paddingTop = 0),
            (t.paddingRight = 0),
            (t.paddingBottom = 0),
            (t.minSize = { width: 0, height: 0 });
        },
        afterSetDimensions: ro,
        beforeBuildLabels: ro,
        buildLabels: ro,
        afterBuildLabels: ro,
        beforeFit: ro,
        fit: function () {
          var t,
            e,
            n = this,
            r = n.options,
            i = (n.minSize = {}),
            o = n.isHorizontal();
          r.display
            ? ((t = ut.isArray(r.text) ? r.text.length : 1),
              (e = t * ut.options._parseFont(r).lineHeight + 2 * r.padding),
              (n.width = i.width = o ? n.maxWidth : e),
              (n.height = i.height = o ? e : n.maxHeight))
            : (n.width = i.width = n.height = i.height = 0);
        },
        afterFit: ro,
        isHorizontal: function () {
          var t = this.options.position;
          return "top" === t || "bottom" === t;
        },
        draw: function () {
          var t = this,
            e = t.ctx,
            n = t.options;
          if (n.display) {
            var r,
              i,
              o,
              a = ut.options._parseFont(n),
              s = a.lineHeight,
              l = s / 2 + n.padding,
              c = 0,
              u = t.top,
              d = t.left,
              f = t.bottom,
              h = t.right;
            (e.fillStyle = ut.valueOrDefault(
              n.fontColor,
              J.global.defaultFontColor
            )),
              (e.font = a.string),
              t.isHorizontal()
                ? ((i = d + (h - d) / 2), (o = u + l), (r = h - d))
                : ((i = "left" === n.position ? d + l : h - l),
                  (o = u + (f - u) / 2),
                  (r = f - u),
                  (c = Math.PI * ("left" === n.position ? -0.5 : 0.5))),
              e.save(),
              e.translate(i, o),
              e.rotate(c),
              (e.textAlign = "center"),
              (e.textBaseline = "middle");
            var p = n.text;
            if (ut.isArray(p))
              for (var g = 0, v = 0; v < p.length; ++v)
                e.fillText(p[v], 0, g, r), (g += s);
            else e.fillText(p, 0, 0, r);
            e.restore();
          }
        },
      });
      function oo(t, e) {
        var n = new io({ ctx: t.ctx, options: e, chart: t });
        Xe.configure(t, n, e), Xe.addBox(t, n), (t.titleBlock = n);
      }
      var ao = {
          id: "title",
          _element: io,
          beforeInit: function (t) {
            var e = t.options.title;
            e && oo(t, e);
          },
          beforeUpdate: function (t) {
            var e = t.options.title,
              n = t.titleBlock;
            e
              ? (ut.mergeIf(e, J.global.title),
                n ? (Xe.configure(t, n, e), (n.options = e)) : oo(t, e))
              : n && (Xe.removeBox(t, n), delete t.titleBlock);
          },
        },
        so = {},
        lo = Xi,
        co = no,
        uo = ao;
      for (var fo in ((so.filler = lo),
      (so.legend = co),
      (so.title = uo),
      (Qn.helpers = ut),
      tr(),
      (Qn._adapters = ir),
      (Qn.Animation = xt),
      (Qn.animationService = _t),
      (Qn.controllers = Oe),
      (Qn.DatasetController = At),
      (Qn.defaults = J),
      (Qn.Element = bt),
      (Qn.elements = Kt),
      (Qn.Interaction = Fe),
      (Qn.layouts = Xe),
      (Qn.platform = Sn),
      (Qn.plugins = An),
      (Qn.Scale = Mr),
      (Qn.scaleService = Tn),
      (Qn.Ticks = or),
      (Qn.Tooltip = $n),
      Qn.helpers.each(Ri, function (t, e) {
        Qn.scaleService.registerScaleType(e, t, t._defaults);
      }),
      so))
        so.hasOwnProperty(fo) && Qn.plugins.register(so[fo]);
      Qn.platform.initialize();
      var ho = Qn;
      return (
        "undefined" !== typeof window && (window.Chart = Qn),
        (Qn.Chart = Qn),
        (Qn.Legend = so.legend._element),
        (Qn.Title = so.title._element),
        (Qn.pluginService = Qn.plugins),
        (Qn.PluginBase = Qn.Element.extend({})),
        (Qn.canvasHelpers = Qn.helpers.canvas),
        (Qn.layoutService = Qn.layouts),
        (Qn.LinearScaleBase = Dr),
        Qn.helpers.each(
          [
            "Bar",
            "Bubble",
            "Doughnut",
            "Line",
            "PolarArea",
            "Radar",
            "Scatter",
          ],
          function (t) {
            Qn[t] = function (e, n) {
              return new Qn(
                e,
                Qn.helpers.merge(n || {}, {
                  type: t.charAt(0).toLowerCase() + t.slice(1),
                })
              );
            };
          }
        ),
        ho
      );
    });
  },
  "342f": function (t, e, n) {
    var r = n("d066");
    t.exports = r("navigator", "userAgent") || "";
  },
  "35a1": function (t, e, n) {
    var r = n("f5df"),
      i = n("3f8c"),
      o = n("b622"),
      a = o("iterator");
    t.exports = function (t) {
      if (void 0 != t) return t[a] || t["@@iterator"] || i[r(t)];
    };
  },
  "37e8": function (t, e, n) {
    var r = n("83ab"),
      i = n("9bf2"),
      o = n("825a"),
      a = n("df75");
    t.exports = r
      ? Object.defineProperties
      : function (t, e) {
          o(t);
          var n,
            r = a(e),
            s = r.length,
            l = 0;
          while (s > l) i.f(t, (n = r[l++]), e[n]);
          return t;
        };
  },
  "387f": function (t, e, n) {
    "use strict";
    t.exports = function (t, e, n, r, i) {
      return (
        (t.config = e),
        n && (t.code = n),
        (t.request = r),
        (t.response = i),
        (t.isAxiosError = !0),
        (t.toJSON = function () {
          return {
            message: this.message,
            name: this.name,
            description: this.description,
            number: this.number,
            fileName: this.fileName,
            lineNumber: this.lineNumber,
            columnNumber: this.columnNumber,
            stack: this.stack,
            config: this.config,
            code: this.code,
          };
        }),
        t
      );
    };
  },
  3934: function (t, e, n) {
    "use strict";
    var r = n("c532");
    t.exports = r.isStandardBrowserEnv()
      ? (function () {
          var t,
            e = /(msie|trident)/i.test(navigator.userAgent),
            n = document.createElement("a");
          function i(t) {
            var r = t;
            return (
              e && (n.setAttribute("href", r), (r = n.href)),
              n.setAttribute("href", r),
              {
                href: n.href,
                protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
                host: n.host,
                search: n.search ? n.search.replace(/^\?/, "") : "",
                hash: n.hash ? n.hash.replace(/^#/, "") : "",
                hostname: n.hostname,
                port: n.port,
                pathname:
                  "/" === n.pathname.charAt(0) ? n.pathname : "/" + n.pathname,
              }
            );
          }
          return (
            (t = i(window.location.href)),
            function (e) {
              var n = r.isString(e) ? i(e) : e;
              return n.protocol === t.protocol && n.host === t.host;
            }
          );
        })()
      : (function () {
          return function () {
            return !0;
          };
        })();
  },
  "3bbe": function (t, e, n) {
    var r = n("861d");
    t.exports = function (t) {
      if (!r(t) && null !== t)
        throw TypeError("Can't set " + String(t) + " as a prototype");
      return t;
    };
  },
  "3ca3": function (t, e, n) {
    "use strict";
    var r = n("6547").charAt,
      i = n("69f3"),
      o = n("7dd0"),
      a = "String Iterator",
      s = i.set,
      l = i.getterFor(a);
    o(
      String,
      "String",
      function (t) {
        s(this, { type: a, string: String(t), index: 0 });
      },
      function () {
        var t,
          e = l(this),
          n = e.string,
          i = e.index;
        return i >= n.length
          ? { value: void 0, done: !0 }
          : ((t = r(n, i)), (e.index += t.length), { value: t, done: !1 });
      }
    );
  },
  "3f8c": function (t, e) {
    t.exports = {};
  },
  "408a": function (t, e, n) {
    var r = n("c6b6");
    t.exports = function (t) {
      if ("number" != typeof t && "Number" != r(t))
        throw TypeError("Incorrect invocation");
      return +t;
    };
  },
  "423e": function (t, e, n) {
    var r = n("6783");
    r.__esModule && (r = r.default),
      "string" === typeof r && (r = [[t.i, r, ""]]),
      r.locals && (t.exports = r.locals);
    var i = n("499e").default;
    i("84d50884", r, !0, { sourceMap: !1, shadowMode: !1 });
  },
  "428f": function (t, e, n) {
    var r = n("da84");
    t.exports = r;
  },
  4362: function (t, e, n) {
    (e.nextTick = function (t) {
      var e = Array.prototype.slice.call(arguments);
      e.shift(),
        setTimeout(function () {
          t.apply(null, e);
        }, 0);
    }),
      (e.platform = e.arch = e.execPath = e.title = "browser"),
      (e.pid = 1),
      (e.browser = !0),
      (e.env = {}),
      (e.argv = []),
      (e.binding = function (t) {
        throw new Error("No such module. (Possibly not yet loaded)");
      }),
      (function () {
        var t,
          r = "/";
        (e.cwd = function () {
          return r;
        }),
          (e.chdir = function (e) {
            t || (t = n("df7c")), (r = t.resolve(e, r));
          });
      })(),
      (e.exit =
        e.kill =
        e.umask =
        e.dlopen =
        e.uptime =
        e.memoryUsage =
        e.uvCounters =
          function () {}),
      (e.features = {});
  },
  "44ad": function (t, e, n) {
    var r = n("d039"),
      i = n("c6b6"),
      o = "".split;
    t.exports = r(function () {
      return !Object("z").propertyIsEnumerable(0);
    })
      ? function (t) {
          return "String" == i(t) ? o.call(t, "") : Object(t);
        }
      : Object;
  },
  "44d2": function (t, e, n) {
    var r = n("b622"),
      i = n("7c73"),
      o = n("9bf2"),
      a = r("unscopables"),
      s = Array.prototype;
    void 0 == s[a] && o.f(s, a, { configurable: !0, value: i(null) }),
      (t.exports = function (t) {
        s[a][t] = !0;
      });
  },
  "44de": function (t, e, n) {
    var r = n("da84");
    t.exports = function (t, e) {
      var n = r.console;
      n && n.error && (1 === arguments.length ? n.error(t) : n.error(t, e));
    };
  },
  "44e7": function (t, e, n) {
    var r = n("861d"),
      i = n("c6b6"),
      o = n("b622"),
      a = o("match");
    t.exports = function (t) {
      var e;
      return r(t) && (void 0 !== (e = t[a]) ? !!e : "RegExp" == i(t));
    };
  },
  "467f": function (t, e, n) {
    "use strict";
    var r = n("2d83");
    t.exports = function (t, e, n) {
      var i = n.config.validateStatus;
      n.status && i && !i(n.status)
        ? e(
            r(
              "Request failed with status code " + n.status,
              n.config,
              null,
              n.request,
              n
            )
          )
        : t(n);
    };
  },
  4840: function (t, e, n) {
    var r = n("825a"),
      i = n("1c0b"),
      o = n("b622"),
      a = o("species");
    t.exports = function (t, e) {
      var n,
        o = r(t).constructor;
      return void 0 === o || void 0 == (n = r(o)[a]) ? e : i(n);
    };
  },
  4930: function (t, e, n) {
    var r = n("605d"),
      i = n("2d00"),
      o = n("d039");
    t.exports =
      !!Object.getOwnPropertySymbols &&
      !o(function () {
        return !Symbol.sham && (r ? 38 === i : i > 37 && i < 41);
      });
  },
  "499e": function (t, e, n) {
    "use strict";
    function r(t, e) {
      for (var n = [], r = {}, i = 0; i < e.length; i++) {
        var o = e[i],
          a = o[0],
          s = o[1],
          l = o[2],
          c = o[3],
          u = { id: t + ":" + i, css: s, media: l, sourceMap: c };
        r[a] ? r[a].parts.push(u) : n.push((r[a] = { id: a, parts: [u] }));
      }
      return n;
    }
    n.r(e),
      n.d(e, "default", function () {
        return p;
      });
    var i = "undefined" !== typeof document;
    if ("undefined" !== typeof DEBUG && DEBUG && !i)
      throw new Error(
        "vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
      );
    var o = {},
      a = i && (document.head || document.getElementsByTagName("head")[0]),
      s = null,
      l = 0,
      c = !1,
      u = function () {},
      d = null,
      f = "data-vue-ssr-id",
      h =
        "undefined" !== typeof navigator &&
        /msie [6-9]\b/.test(navigator.userAgent.toLowerCase());
    function p(t, e, n, i) {
      (c = n), (d = i || {});
      var a = r(t, e);
      return (
        g(a),
        function (e) {
          for (var n = [], i = 0; i < a.length; i++) {
            var s = a[i],
              l = o[s.id];
            l.refs--, n.push(l);
          }
          e ? ((a = r(t, e)), g(a)) : (a = []);
          for (i = 0; i < n.length; i++) {
            l = n[i];
            if (0 === l.refs) {
              for (var c = 0; c < l.parts.length; c++) l.parts[c]();
              delete o[l.id];
            }
          }
        }
      );
    }
    function g(t) {
      for (var e = 0; e < t.length; e++) {
        var n = t[e],
          r = o[n.id];
        if (r) {
          r.refs++;
          for (var i = 0; i < r.parts.length; i++) r.parts[i](n.parts[i]);
          for (; i < n.parts.length; i++) r.parts.push(m(n.parts[i]));
          r.parts.length > n.parts.length && (r.parts.length = n.parts.length);
        } else {
          var a = [];
          for (i = 0; i < n.parts.length; i++) a.push(m(n.parts[i]));
          o[n.id] = { id: n.id, refs: 1, parts: a };
        }
      }
    }
    function v() {
      var t = document.createElement("style");
      return (t.type = "text/css"), a.appendChild(t), t;
    }
    function m(t) {
      var e,
        n,
        r = document.querySelector("style[" + f + '~="' + t.id + '"]');
      if (r) {
        if (c) return u;
        r.parentNode.removeChild(r);
      }
      if (h) {
        var i = l++;
        (r = s || (s = v())),
          (e = y.bind(null, r, i, !1)),
          (n = y.bind(null, r, i, !0));
      } else
        (r = v()),
          (e = x.bind(null, r)),
          (n = function () {
            r.parentNode.removeChild(r);
          });
      return (
        e(t),
        function (r) {
          if (r) {
            if (
              r.css === t.css &&
              r.media === t.media &&
              r.sourceMap === t.sourceMap
            )
              return;
            e((t = r));
          } else n();
        }
      );
    }
    var b = (function () {
      var t = [];
      return function (e, n) {
        return (t[e] = n), t.filter(Boolean).join("\n");
      };
    })();
    function y(t, e, n, r) {
      var i = n ? "" : r.css;
      if (t.styleSheet) t.styleSheet.cssText = b(e, i);
      else {
        var o = document.createTextNode(i),
          a = t.childNodes;
        a[e] && t.removeChild(a[e]),
          a.length ? t.insertBefore(o, a[e]) : t.appendChild(o);
      }
    }
    function x(t, e) {
      var n = e.css,
        r = e.media,
        i = e.sourceMap;
      if (
        (r && t.setAttribute("media", r),
        d.ssrId && t.setAttribute(f, e.id),
        i &&
          ((n += "\n/*# sourceURL=" + i.sources[0] + " */"),
          (n +=
            "\n/*# sourceMappingURL=data:application/json;base64," +
            btoa(unescape(encodeURIComponent(JSON.stringify(i)))) +
            " */")),
        t.styleSheet)
      )
        t.styleSheet.cssText = n;
      else {
        while (t.firstChild) t.removeChild(t.firstChild);
        t.appendChild(document.createTextNode(n));
      }
    }
  },
  "4a7b": function (t, e, n) {
    "use strict";
    var r = n("c532");
    t.exports = function (t, e) {
      e = e || {};
      var n = {},
        i = ["url", "method", "data"],
        o = ["headers", "auth", "proxy", "params"],
        a = [
          "baseURL",
          "transformRequest",
          "transformResponse",
          "paramsSerializer",
          "timeout",
          "timeoutMessage",
          "withCredentials",
          "adapter",
          "responseType",
          "xsrfCookieName",
          "xsrfHeaderName",
          "onUploadProgress",
          "onDownloadProgress",
          "decompress",
          "maxContentLength",
          "maxBodyLength",
          "maxRedirects",
          "transport",
          "httpAgent",
          "httpsAgent",
          "cancelToken",
          "socketPath",
          "responseEncoding",
        ],
        s = ["validateStatus"];
      function l(t, e) {
        return r.isPlainObject(t) && r.isPlainObject(e)
          ? r.merge(t, e)
          : r.isPlainObject(e)
          ? r.merge({}, e)
          : r.isArray(e)
          ? e.slice()
          : e;
      }
      function c(i) {
        r.isUndefined(e[i])
          ? r.isUndefined(t[i]) || (n[i] = l(void 0, t[i]))
          : (n[i] = l(t[i], e[i]));
      }
      r.forEach(i, function (t) {
        r.isUndefined(e[t]) || (n[t] = l(void 0, e[t]));
      }),
        r.forEach(o, c),
        r.forEach(a, function (i) {
          r.isUndefined(e[i])
            ? r.isUndefined(t[i]) || (n[i] = l(void 0, t[i]))
            : (n[i] = l(void 0, e[i]));
        }),
        r.forEach(s, function (r) {
          r in e ? (n[r] = l(t[r], e[r])) : r in t && (n[r] = l(void 0, t[r]));
        });
      var u = i.concat(o).concat(a).concat(s),
        d = Object.keys(t)
          .concat(Object.keys(e))
          .filter(function (t) {
            return -1 === u.indexOf(t);
          });
      return r.forEach(d, c), n;
    };
  },
  "4d64": function (t, e, n) {
    var r = n("fc6a"),
      i = n("50c4"),
      o = n("23cb"),
      a = function (t) {
        return function (e, n, a) {
          var s,
            l = r(e),
            c = i(l.length),
            u = o(a, c);
          if (t && n != n) {
            while (c > u) if (((s = l[u++]), s != s)) return !0;
          } else
            for (; c > u; u++)
              if ((t || u in l) && l[u] === n) return t || u || 0;
          return !t && -1;
        };
      };
    t.exports = { includes: a(!0), indexOf: a(!1) };
  },
  "4de4": function (t, e, n) {
    "use strict";
    var r = n("23e7"),
      i = n("b727").filter,
      o = n("1dde"),
      a = o("filter");
    r(
      { target: "Array", proto: !0, forced: !a },
      {
        filter: function (t) {
          return i(this, t, arguments.length > 1 ? arguments[1] : void 0);
        },
      }
    );
  },
  "50c4": function (t, e, n) {
    var r = n("a691"),
      i = Math.min;
    t.exports = function (t) {
      return t > 0 ? i(r(t), 9007199254740991) : 0;
    };
  },
  5135: function (t, e) {
    var n = {}.hasOwnProperty;
    t.exports = function (t, e) {
      return n.call(t, e);
    };
  },
  5270: function (t, e, n) {
    "use strict";
    var r = n("c532"),
      i = n("c401"),
      o = n("2e67"),
      a = n("2444");
    function s(t) {
      t.cancelToken && t.cancelToken.throwIfRequested();
    }
    t.exports = function (t) {
      s(t),
        (t.headers = t.headers || {}),
        (t.data = i(t.data, t.headers, t.transformRequest)),
        (t.headers = r.merge(
          t.headers.common || {},
          t.headers[t.method] || {},
          t.headers
        )),
        r.forEach(
          ["delete", "get", "head", "post", "put", "patch", "common"],
          function (e) {
            delete t.headers[e];
          }
        );
      var e = t.adapter || a.adapter;
      return e(t).then(
        function (e) {
          return s(t), (e.data = i(e.data, e.headers, t.transformResponse)), e;
        },
        function (e) {
          return (
            o(e) ||
              (s(t),
              e &&
                e.response &&
                (e.response.data = i(
                  e.response.data,
                  e.response.headers,
                  t.transformResponse
                ))),
            Promise.reject(e)
          );
        }
      );
    };
  },
  5692: function (t, e, n) {
    var r = n("c430"),
      i = n("c6cd");
    (t.exports = function (t, e) {
      return i[t] || (i[t] = void 0 !== e ? e : {});
    })("versions", []).push({
      version: "3.10.0",
      mode: r ? "pure" : "global",
      copyright: "© 2021 Denis Pushkarev (zloirock.ru)",
    });
  },
  "56d7": function (t, e, n) {
    "use strict";
    n.r(e);
    n("e260"), n("e6cf"), n("cca6"), n("a79d");
    var r = n("2b0e"),
      i = function () {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n(
          "section",
          {
            staticClass: "open-budget-widget",
            class: t.wrapperClass,
            style:
              "background-color:" +
              t.background +
              ";max-width:" +
              t.width +
              "px;height:" +
              t.height +
              "px;border-width:" +
              t.appBorderStyle[0] +
              "px;border-color:" +
              t.appBorderStyle[1] +
              ";",
            attrs: { id: "open-budget-widget" },
          },
          [
            t.showLoader
              ? n("div", { attrs: { id: "loader" } })
              : t.errorState
              ? n("div", { attrs: { id: "error" } }, [
                  n(
                    "div",
                    {
                      staticClass:
                        "cont_principal cont_principal cont_error_active",
                    },
                    [
                      n("div", { staticClass: "cont_error" }, [
                        n("h2", [t._v("Error")]),
                        n("p", [
                          t._v("Виникла помилка під час отримання даних."),
                        ]),
                        n(
                          "button",
                          { staticClass: "btn", on: { click: t.loadWidget } },
                          [t._v("Спробуйте пізніше")]
                        ),
                      ]),
                      n("div", { staticClass: "cont_aura_1" }),
                      n("div", { staticClass: "cont_aura_2" }),
                    ]
                  ),
                ])
              : [
                  n("h1", [
                    t._v(
                      t._s(
                        t.titleText
                          ? t.titleText
                          : "Структура річного бюджету громади"
                      )
                    ),
                  ]),
                  n("the-period", {
                    attrs: {
                      title: "За період січень - ",
                      year: t.lastAvailableYear,
                      month: t.lastAvailableMonth,
                    },
                  }),
                  n(
                    "div",
                    { staticClass: "open-budget-widget__wrapper" },
                    [
                      t.hasData
                        ? [
                            n("the-chart-section", {
                              ref: "childComponent",
                              attrs: {
                                title: "за доходами",
                                text: "Виконання з початку року",
                                percent: t.incomePercent,
                                chartData: t.dataIncomes,
                                "tooltip-id": "incomes",
                                total: t.totalIn,
                                width: t.width,
                              },
                            }),
                            n("the-chart-section", {
                              ref: "childComponent1",
                              attrs: {
                                title: "за видатками",
                                text: "Виконання з початку року",
                                percent: t.expensePercent,
                                chartData: t.dataExpenses,
                                "tooltip-id": "expenses",
                                total: t.totalEx,
                                width: t.width,
                              },
                            }),
                          ]
                        : [t._m(0)],
                    ],
                    2
                  ),
                  n("div", { staticClass: "footer", class: t.footerClass }, [
                    n(
                      "button",
                      {
                        staticClass: "btn",
                        on: {
                          click: function (e) {
                            return t.goToSource();
                          },
                        },
                      },
                      [t._v("повна версія бюджету")]
                    ),
                  ]),
                ],
          ],
          2
        );
      },
      o = [
        function () {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e;
          //hide parent component open-budget-widget
          this.$parent.$el.style.display = "none";
          return n(
            "div",
            { staticClass: "cont_principal cont_principal cont_error_active" },
            [
              n("div", { staticClass: "cont_error" }, [
                n("h2", [t._v("ДАНІ ВІДСУТНІ")]),
              ]),
            ]
          );
        },
      ];
    n("d3b7");
    function a(t, e, n, r, i, o, a) {
      try {
        var s = t[o](a),
          l = s.value;
      } catch (c) {
        return void n(c);
      }
      s.done ? e(l) : Promise.resolve(l).then(r, i);
    }
    function s(t) {
      return function () {
        var e = this,
          n = arguments;
        return new Promise(function (r, i) {
          var o = t.apply(e, n);
          function s(t) {
            a(o, r, i, s, l, "next", t);
          }
          function l(t) {
            a(o, r, i, s, l, "throw", t);
          }
          s(void 0);
        });
      };
    }
    n("96cf"),
      n("a9e3"),
      n("1276"),
      n("ac1f"),
      n("159b"),
      n("4de4"),
      n("3ca3"),
      n("ddb0"),
      n("99af");
    var l = n("bc3a"),
      c = n.n(l),
      u = function () {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n("div", { staticClass: "select__block" }, [
          n("span", { staticClass: "select__title" }, [
            t._v(t._s(t.title) + t._s(t.getUAMonth) + " " + t._s(t.year)),
          ]),
        ]);
      },
      d = [],
      f = {
        name: "ThePeriod",
        props: {
          title: {
            type: String,
            default: function () {
              return "Станом на";
            },
          },
          year: { type: Number, default: null },
          month: { type: Number, default: null },
        },
        data: function () {
          return {
            months: [
              "січень",
              "лютий",
              "березень",
              "квітень",
              "травень",
              "червень",
              "липень",
              "серпень",
              "вересень",
              "жовтень",
              "листопад",
              "грудень",
            ],
          };
        },
        computed: {
          getUAMonth: function () {
            return this.month ? this.months[this.month - 1] : "";
          },
        },
      },
      h = f;
    n("0bed");
    function p(t, e, n, r, i, o, a, s) {
      var l,
        c = "function" === typeof t ? t.options : t;
      if (
        (e && ((c.render = e), (c.staticRenderFns = n), (c._compiled = !0)),
        r && (c.functional = !0),
        o && (c._scopeId = "data-v-" + o),
        a
          ? ((l = function (t) {
              (t =
                t ||
                (this.$vnode && this.$vnode.ssrContext) ||
                (this.parent &&
                  this.parent.$vnode &&
                  this.parent.$vnode.ssrContext)),
                t ||
                  "undefined" === typeof __VUE_SSR_CONTEXT__ ||
                  (t = __VUE_SSR_CONTEXT__),
                i && i.call(this, t),
                t && t._registeredComponents && t._registeredComponents.add(a);
            }),
            (c._ssrRegister = l))
          : i &&
            (l = s
              ? function () {
                  i.call(
                    this,
                    (c.functional ? this.parent : this).$root.$options
                      .shadowRoot
                  );
                }
              : i),
        l)
      )
        if (c.functional) {
          c._injectStyles = l;
          var u = c.render;
          c.render = function (t, e) {
            return l.call(e), u(t, e);
          };
        } else {
          var d = c.beforeCreate;
          c.beforeCreate = d ? [].concat(d, l) : [l];
        }
      return { exports: t, options: c };
    }
    var g = p(h, u, d, !1, null, null, null),
      v = g.exports,
      m = function () {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n(
          "section",
          {
            staticClass: "open-budget-widget__column",
            class: [t.mdOnlyClass, t.xsOnlyClass],
          },
          [
            n("h3", [t._v(t._s(t.title))]),
            t.chartData.datasets[0].data.length > 0
              ? [
                  n(
                    "div",
                    {
                      staticClass: "chart-section",
                      attrs: { id: "id-" + t.tooltipId },
                    },
                    [
                      n("the-donut-chart", {
                        ref: t.tooltipId,
                        attrs: {
                          width: t.chartSize,
                          height: t.chartSize,
                          "tooltip-id": t.tooltipId,
                          "chart-data": t.chartData,
                        },
                        on: { generated: t.setLegend },
                      }),
                      t.percent
                        ? n(
                            "h2",
                            { staticClass: "chart-section-text--center" },
                            [
                              t._v(" " + t._s(t.percent) + "% "),
                              n("span", [
                                t._v("Виконання до уточненого річного розпису"),
                              ]),
                            ]
                          )
                        : t._e(),
                    ],
                    1
                  ),
                  n("div", { staticClass: "block total" }, [
                    n("span", { staticClass: "block__text" }, [
                      t._v(t._s(t.total.title)),
                    ]),
                    n("span", { staticClass: "block__sum" }, [
                      t._v(t._s(t.formatAmountRange(t.total.sum)) + " грн."),
                    ]),
                  ]),
                  n("div", {
                    staticClass: "legend-con",
                    domProps: { innerHTML: t._s(t.legend) },
                  }),
                ]
              : [
                  n(
                    "div",
                    {
                      staticClass: "no-data__section",
                      style:
                        "width:" +
                        t.chartSize +
                        "px;height:" +
                        t.chartSize +
                        "px;",
                    },
                    [n("span", [t._v("ДАНІ ВІДСУТНІ")])]
                  ),
                ],
          ],
          2
        );
      },
      b = [];
    n("13d5"), n("b680"), n("a15b"), n("d81d"), n("b0c0"), n("c35a");
    function y(t, e) {
      if (e) {
        var n = this.$data._chart,
          r = t.datasets.map(function (t) {
            return t.label;
          }),
          i = e.datasets.map(function (t) {
            return t.label;
          }),
          o = JSON.stringify(i),
          a = JSON.stringify(r);
        a === o && e.datasets.length === t.datasets.length
          ? (t.datasets.forEach(function (t, r) {
              var i = Object.keys(e.datasets[r]),
                o = Object.keys(t),
                a = i.filter(function (t) {
                  return "_meta" !== t && -1 === o.indexOf(t);
                });
              for (var s in (a.forEach(function (t) {
                delete n.data.datasets[r][t];
              }),
              t))
                t.hasOwnProperty(s) && (n.data.datasets[r][s] = t[s]);
            }),
            t.hasOwnProperty("labels") &&
              ((n.data.labels = t.labels), this.$emit("labels:update")),
            t.hasOwnProperty("xLabels") &&
              ((n.data.xLabels = t.xLabels), this.$emit("xlabels:update")),
            t.hasOwnProperty("yLabels") &&
              ((n.data.yLabels = t.yLabels), this.$emit("ylabels:update")),
            n.update(),
            this.$emit("chart:update"))
          : (n && (n.destroy(), this.$emit("chart:destroy")),
            this.renderChart(this.chartData, this.options),
            this.$emit("chart:render"));
      } else
        this.$data._chart &&
          (this.$data._chart.destroy(), this.$emit("chart:destroy")),
          this.renderChart(this.chartData, this.options),
          this.$emit("chart:render");
    }
    var x = {
        data: function () {
          return { chartData: null };
        },
        watch: { chartData: y },
      },
      _ = {
        props: {
          chartData: { type: Object, required: !0, default: function () {} },
        },
        watch: { chartData: y },
      },
      w = { reactiveData: x, reactiveProp: _ },
      k = n("30ef"),
      C = n.n(k);
    function M(t, e) {
      return {
        render: function (t) {
          return t("div", { style: this.styles, class: this.cssClasses }, [
            t("canvas", {
              attrs: {
                id: this.chartId,
                width: this.width,
                height: this.height,
              },
              ref: "canvas",
            }),
          ]);
        },
        props: {
          chartId: { default: t, type: String },
          width: { default: 400, type: Number },
          height: { default: 400, type: Number },
          cssClasses: { type: String, default: "" },
          styles: { type: Object },
          plugins: {
            type: Array,
            default: function () {
              return [];
            },
          },
        },
        data: function () {
          return { _chart: null, _plugins: this.plugins };
        },
        methods: {
          addPlugin: function (t) {
            this.$data._plugins.push(t);
          },
          generateLegend: function () {
            if (this.$data._chart) return this.$data._chart.generateLegend();
          },
          renderChart: function (t, n) {
            if (
              (this.$data._chart && this.$data._chart.destroy(),
              !this.$refs.canvas)
            )
              throw new Error(
                "Please remove the <template></template> tags from your chart component. See https://vue-chartjs.org/guide/#vue-single-file-components"
              );
            this.$data._chart = new C.a(this.$refs.canvas.getContext("2d"), {
              type: e,
              data: t,
              options: n,
              plugins: this.$data._plugins,
            });
          },
        },
        beforeDestroy: function () {
          this.$data._chart && this.$data._chart.destroy();
        },
      };
    }
    M("bar-chart", "bar"), M("horizontalbar-chart", "horizontalBar");
    var S,
      A,
      T = M("doughnut-chart", "doughnut"),
      O =
        (M("line-chart", "line"),
        M("pie-chart", "pie"),
        M("polar-chart", "polarArea"),
        M("radar-chart", "radar"),
        M("bubble-chart", "bubble"),
        M("scatter-chart", "scatter"),
        n("b65f"),
        {
          methods: {
            formatAmountRange: function (t) {
              var e = t,
                n = Math.trunc(100 * e) / 100,
                r = String(n).split(".")[0].split("").reverse(),
                i =
                  String(n).split(".").length > 1 ? String(n).split(".")[1] : 0,
                o = 0 === i ? "00" : String(i),
                a = [];
              return (
                r.forEach(function (t, e) {
                  (e + 1) % 3 === 0 ? (a.push(t), a.push(" ")) : a.push(t);
                }),
                e ? "".concat(a.reverse().join(""), ".").concat(o) : ""
              );
            },
          },
        }),
      E = { formatAmount: O },
      P = w.reactiveProp,
      L = E.formatAmount.methods.formatAmountRange,
      D = [],
      I = {
        name: "TheDonutChart",
        extends: T,
        mixins: [P],
        props: ["chartData", "width", "tooltipId"],
        data: function () {
          return {
            options: {
              tooltipId: this.tooltipId,
              responsive: !0,
              maintainAspectRatio: !0,
              animation: { animateRotate: !0 },
              cutoutPercentage: 60,
              legendCallback: function (t) {
                for (
                  var e = t.data.datasets[0].data.reduce(function (t, e) {
                      return t + e;
                    }, 0),
                    n = [],
                    r = 0;
                  r < t.data.datasets[0].data.length;
                  r++
                )
                  if (t.data.datasets[0].data[r] > 0) {
                    var i =
                        ((t.data.datasets[0].data[r] / e) * 100).toFixed(2) +
                        "%",
                      o = {};
                    (o.name = t.data.labels[r]),
                      (o.percent = i),
                      D.push(o),
                      n.push(
                        '<div class="block ' +
                          t.data.labels[r] +
                          '"><div class="block__color" style="background-color:' +
                          t.data.datasets[0].backgroundColor[r] +
                          '"></div><span class="block__text" title="' +
                          t.data.labels[r] +
                          '">'
                      ),
                      t.data.labels[r] && n.push(t.data.labels[r]),
                      n.push('</span><span class="block__sum">'),
                      t.data.labels[r] &&
                        n.push(L(t.data.datasets[0].data[r]) + " грн. - " + i),
                      n.push("</span></div>");
                  }
                return n.join("");
              },
              legend: { display: !1 },
              tooltips: {
                enabled: !1,
                custom: function (t) {
                  var e = document.getElementById(
                      "id-".concat(this._chart.options.tooltipId)
                    ),
                    n = document.getElementById(this._chart.options.tooltipId);
                  if (
                    (n ||
                      ((n = document.createElement("div")),
                      (n.id = this._chart.options.tooltipId),
                      (n.innerHTML = "<table></table>"),
                      e.appendChild(n)),
                    !t.body)
                  )
                    return (
                      (n.style.opacity = 0),
                      void (n.style.visibility = "hidden")
                    );
                  function r(t) {
                    return t.lines;
                  }
                  if (
                    (n.classList.remove("above", "below", "no-transform"),
                    t.yAlign
                      ? n.classList.add(t.yAlign)
                      : n.classList.add("no-transform"),
                    t.body)
                  ) {
                    var i = t.body.map(r),
                      o = "<tbody>";
                    i.forEach(function (e, n) {
                      var r = e[0].split(":"),
                        i = t.labelColors[n],
                        a = "background:" + i.backgroundColor,
                        s = "tooltip-text",
                        l = '<span style="' + a + '" class="' + s + '"></span>',
                        c = D.filter(function (t) {
                          return t.name === r[0];
                        });
                      o +=
                        "<tr><td>" +
                        l +
                        r[0] +
                        '</td></tr><tr><td class="pt-2 sum">' +
                        Number.parseFloat(c[0].percent).toFixed(2) +
                        "% - " +
                        L(r[1]) +
                        " грн.</td></tr>";
                    }),
                      (o += "</tbody>");
                    var a = n.querySelector("table");
                    a.innerHTML = o;
                  }
                  var s = document
                    .getElementById("id-".concat(this._chart.options.tooltipId))
                    .getBoundingClientRect();
                  (n.style.opacity = 1),
                    (n.style.visibility = "visible"),
                    (n.style.position = "absolute"),
                    window.innerWidth - s.right < 150
                      ? (n.style.left = "0px")
                      : (n.style.left = "20px"),
                    (n.style.top = t.caretY + "px"),
                    (n.style.fontFamily = t._bodyFontFamily),
                    (n.style.fontSize = t.bodyFontSize + "px"),
                    (n.style.fontStyle = t._bodyFontStyle),
                    (n.style.padding = t.yPadding + "px " + t.xPadding + "px");
                },
              },
            },
          };
        },
        methods: {
          update: function () {
            this.$data._chart.update();
          },
          drawChart: function () {
            this.renderChart(this.chartData, this.options);
            var t = this.$data._chart.generateLegend();
            this.$emit("generated", t);
          },
        },
        mounted: function () {
          this.drawChart();
        },
        watch: {
          chartData: function () {
            this.drawChart();
          },
          width: function (t) {
            var e = document.getElementsByTagName("canvas");
            e.forEach(function (e) {
              (e.style["height"] = t + "px"), (e.style["width"] = t + "px");
            }),
              this.$data._chart && this.$data._chart.render();
          },
        },
      },
      N = I,
      F = p(N, S, A, !1, null, null, null),
      R = F.exports,
      j = {
        name: "TheChartSection",
        mixins: [E.formatAmount],
        components: { TheDonutChart: R },
        props: {
          title: {
            type: String,
            default: function () {
              return "Chart";
            },
          },
          width: { type: Number, default: 250 },
          percent: { type: Number, default: null },
          text: {
            type: String,
            default: function () {
              return "";
            },
          },
          tooltipId: {
            type: String,
            default: function () {
              return "chartjs-tooltip";
            },
          },
          chartData: {
            type: Object,
            default: function () {
              return {};
            },
          },
          total: {
            type: Object,
            default: function () {
              return { title: "Разом", sum: "" };
            },
          },
        },
        data: function () {
          return { legend: "", innerWidth: 0 };
        },
        created: function () {
          (this.innerWidth = window.innerWidth),
            window.addEventListener("resize", this.myEventHandler);
        },
        destroyed: function () {
          window.removeEventListener("resize", this.myEventHandler);
        },
        methods: {
          setLegend: function (t) {
            this.legend = t;
          },
          myEventHandler: function (t) {
            var e = this;
            this.$nextTick(function () {
              e.innerWidth = t.path[0].innerWidth;
            });
          },
        },
        computed: {
          chartSize: function () {
            return this.innerWidth < 550 || this.width < 550 ? 180 : 230;
          },
          mdOnlyClass: function () {
            return this.width < 750 && this.width > 550 ? "mdOnly" : "";
          },
          xsOnlyClass: function () {
            return this.width < 470 ? "xsOnly" : "";
          },
        },
      },
      z = j,
      H = (n("c290"), p(z, m, b, !1, null, null, null)),
      B = H.exports,
      V = "https://openbudget.gov.ua/api/",
      $ = [
        "#F6B83D",
        "#516696",
        "#2AC9D4",
        "#9591C2",
        "#A1DDFF",
        "#98df8a",
        "#d62728",
        "#ff9896",
        "#9467bd",
        "#c5b0d5",
        "#8c564b",
        "#c49c94",
        "#e377c2",
        "#f7b6d2",
        "#7f7f7f",
        "#c7c7c7",
        "#bcbd22",
        "#dbdb8d",
        "#17becf",
        "#9edae5",
      ],
      W = {
        name: "App",
        props: {
          budgetId: { type: String, default: "" },
          width: { type: Number, default: 1422 },
          height: { type: Number, default: 765 },
          border: { type: Boolean, default: !1 },
          borderStyle: { type: String, default: "0,transparent" },
          background: {
            type: String,
            default: function () {
              return "transparent";
            },
          },
          titleText: { type: String, default: "" },
        },
        components: { ThePeriod: v, TheChartSection: B },
        data: function () {
          return {
            errorState: !1,
            showLoader: !0,
            lastAvailableYear: null,
            lastAvailableMonth: null,
            totalEx: { sum: 0, title: "Разом" },
            totalIn: { sum: 0, title: "Разом" },
            expensePercent: "",
            incomePercent: "",
            dataExpenses: {
              labels: [],
              percents: [],
              datasets: [{ backgroundColor: $, data: [], borderWidth: 1 }],
            },
            dataIncomes: {
              labels: [],
              percents: [],
              datasets: [{ backgroundColor: $, data: [], borderWidth: 1 }],
            },
            appBorderStyle: [0, "transparent"],
          };
        },
        created: function () {
          this.loadWidget(),
            this.border && (this.appBorderStyle = this.borderStyle.split(",")),
            window.addEventListener("resize", this.changeHeight);
        },
        mounted: function () {
          this.changeHeight();
        },
        destroyed: function () {
          window.removeEventListener("resize", this.changeHeight);
        },
        methods: {
          changeHeight: function () {
            var t = document.getElementById("open-budget-widget"),
              e = 30;
            t &&
              t.childNodes &&
              (t.childNodes.forEach(function (t) {
                e += t.offsetHeight;
              }),
              e > this.height && (t.style["height"] = "auto"));
          },
          loadWidget: function () {
            var t = this;
            return s(
              regeneratorRuntime.mark(function e() {
                return regeneratorRuntime.wrap(function (e) {
                  while (1)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (t.showLoader = !0),
                          (e.next = 3),
                          c.a
                            .get("".concat(V, "periods/loaded"))
                            .then(function (e) {
                              var n = e.data.filter(function (t) {
                                return "MAIN" === t["tableName"];
                              })[0].localDate;
                              (t.lastAvailableMonth =
                                new Date(n).getMonth() + 1),
                                (t.lastAvailableYear = new Date(
                                  n
                                ).getFullYear());
                            })
                            .catch(function (e) {
                              console.log(e),
                                (t.errorState = !0),
                                (t.showLoader = !1);
                            })
                        );
                      case 3:
                        t.getLocalBudgetData(
                          t.lastAvailableYear,
                          t.lastAvailableMonth
                        );
                      case 4:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            )();
          },
          fillDataForChart: function (t) {
            var e = {
              labels: [],
              percents: [],
              datasets: [
                {
                  backgroundColor: $,
                  hoverOffset: 10,
                  hoverBorderColor: $,
                  hoverBorderWidth: 0,
                  data: [],
                  borderWidth: 1,
                },
              ],
            };
            return (
              t.shift(),
              t.forEach(function (t) {
                t.data.donePeriod > 0 &&
                  (e.labels.push(t.codeName),
                  e.datasets[0].data.push(t.data.donePeriod),
                  e.percents.push(
                    t.data.correctionYearDonePercent
                      ? t.data.correctionYearDonePercent
                      : 0
                  ));
              }),
              e
            );
          },
          getLocalBudgetData: function (t, e) {
            var n = this;
            return s(
              regeneratorRuntime.mark(function r() {
                return regeneratorRuntime.wrap(function (r) {
                  while (1)
                    switch ((r.prev = r.next)) {
                      case 0:
                        return (
                          (r.next = 2),
                          Promise.all([n.getExpense(t, e), n.getIncome(t, e)])
                            .then(function (t) {
                              (n.totalIn.sum =
                                t[0].data.items[0].data.donePeriod),
                                (n.incomePercent =
                                  t[0].data.items[0].data.correctionYearDonePercent),
                                (n.totalEx.sum =
                                  t[1].data.items[0].data.donePeriod),
                                (n.expensePercent =
                                  t[1].data.items[0].data.correctionYearDonePercent),
                                (n.dataIncomes = n.fillDataForChart(
                                  t[0].data.items
                                )),
                                (n.dataExpenses = n.fillDataForChart(
                                  t[1].data.items
                                ));
                            })
                            .catch(function (t) {
                              console.log(t), (n.errorState = !0);
                            })
                            .finally(function () {
                              n.showLoader = !1;
                            })
                        );
                      case 2:
                      case "end":
                        return r.stop();
                    }
                }, r);
              })
            )();
          },
          getExpense: function (t, e) {
            return c.a.get(
              ""
                .concat(V, "localBudgets/incomesLocal?year=")
                .concat(t, "&periodType=MONTH&periodTo=")
                .concat(e, "&codeBudget=")
                .concat(this.budgetId, "&periodFrom=1&fundType=TOTAL")
            );
          },
          getIncome: function (t, e) {
            return c.a.get(
              ""
                .concat(V, "localBudgets/functional?year=")
                .concat(t, "&periodType=MONTH&periodTo=")
                .concat(e, "&codeBudget=")
                .concat(this.budgetId, "&periodFrom=1&fundType=TOTAL")
            );
          },
          goToSource: function () {
            window.open(
              "https://openbudget.gov.ua/local-budget/".concat(
                this.budgetId,
                "/info/indicators"
              )
            );
          },
        },
        computed: {
          hasData: function () {
            return (
              this.expensePercent ||
              this.incomePercent ||
              this.dataExpenses.datasets[0].data.length > 0 ||
              this.dataIncomes.datasets[0].data.length > 0
            );
          },
          footerClass: function () {
            return this.width < 880 ? "mdAndDown" : "";
          },
          wrapperClass: function () {
            return this.width < 880 && this.width > 550
              ? "mdWrapper"
              : this.width < 550
              ? "smAndDown"
              : "";
          },
        },
      },
      U = W,
      q = (n("5c0b"), p(U, i, o, !1, null, null, null)),
      Y = q.exports;
    function G(t, e) {
      return (t.__proto__ = e), t;
    }
    /**
     * vue-custom-element v3.3.0
     * (c) 2021 Karol Fabjańczuk
     * @license MIT
     */
    Object.setPrototypeOf = Object.setPrototypeOf || G;
    G.bind(Object);
    function X() {
      return (
        "undefined" !== typeof Symbol &&
        "undefined" !== typeof Reflect &&
        "undefined" !== typeof Proxy &&
        !Object.isSealed(Proxy)
      );
    }
    var K = X(),
      Z = (function () {
        function t(t, e) {
          for (var n = 0; n < e.length; n++) {
            var r = e[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(t, r.key, r);
          }
        }
        return function (e, n, r) {
          return n && t(e.prototype, n), r && t(e, r), e;
        };
      })();
    function J(t, e) {
      if (!(t instanceof e))
        throw new TypeError("Cannot call a class as a function");
    }
    function Q(t, e) {
      if (!t)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return !e || ("object" !== typeof e && "function" !== typeof e) ? t : e;
    }
    function tt(t, e) {
      if ("function" !== typeof e && null !== e)
        throw new TypeError(
          "Super expression must either be null or a function, not " + typeof e
        );
      (t.prototype = Object.create(e && e.prototype, {
        constructor: {
          value: t,
          enumerable: !1,
          writable: !0,
          configurable: !0,
        },
      })),
        e &&
          (Object.setPrototypeOf
            ? Object.setPrototypeOf(t, e)
            : (t.__proto__ = e));
    }
    function et() {
      return Reflect.construct(HTMLElement, [], this.__proto__.constructor);
    }
    function nt(t) {
      var e =
        arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      if ("undefined" !== typeof customElements) {
        if (K) {
          var n = (function (t) {
            function n(t) {
              var e;
              J(this, n);
              var r = Q(
                  this,
                  (n.__proto__ || Object.getPrototypeOf(n)).call(this)
                ),
                o = t ? HTMLElement.call(t) : r;
              return i.call(o), (e = o), Q(r, e);
            }
            return (
              tt(n, t),
              Z(n, null, [
                {
                  key: "observedAttributes",
                  get: function () {
                    return e.observedAttributes || [];
                  },
                },
              ]),
              n
            );
          })(et);
          return (
            (n.prototype.connectedCallback = o),
            (n.prototype.disconnectedCallback = a),
            (n.prototype.attributeChangedCallback = s),
            l(t, n),
            n
          );
        }
        var r = function (t) {
          var e = t ? HTMLElement.call(t) : this;
          return i.call(e), e;
        };
        return (
          (r.observedAttributes = e.observedAttributes || []),
          (r.prototype = Object.create(HTMLElement.prototype, {
            constructor: { configurable: !0, writable: !0, value: r },
          })),
          (r.prototype.connectedCallback = o),
          (r.prototype.disconnectedCallback = a),
          (r.prototype.attributeChangedCallback = s),
          l(t, r),
          r
        );
      }
      function i() {
        !0 === e.shadow &&
          HTMLElement.prototype.attachShadow &&
          this.attachShadow({ mode: "open" }),
          "function" === typeof e.constructorCallback &&
            e.constructorCallback.call(this);
      }
      function o() {
        "function" === typeof e.connectedCallback &&
          e.connectedCallback.call(this);
      }
      function a() {
        "function" === typeof e.disconnectedCallback &&
          e.disconnectedCallback.call(this);
      }
      function s(t, n, r) {
        "function" === typeof e.attributeChangedCallback &&
          e.attributeChangedCallback.call(this, t, n, r);
      }
      function l(t, e) {
        var n = customElements.get(t);
        return "undefined" !== typeof n ? n : customElements.define(t, e);
      }
    }
    Object.setPrototypeOf(et.prototype, HTMLElement.prototype),
      Object.setPrototypeOf(et, HTMLElement);
    var rt = /-(\w)/g,
      it = function (t) {
        return t.replace(rt, function (t, e) {
          return e ? e.toUpperCase() : "";
        });
      },
      ot = /([^-])([A-Z])/g,
      at = function (t) {
        return t.replace(ot, "$1-$2").replace(ot, "$1-$2").toLowerCase();
      };
    function st(t) {
      var e =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        n = t.length - e,
        r = new Array(n);
      while (n--) r[n] = t[n + e];
      return r;
    }
    var lt =
      "function" === typeof Symbol && "symbol" === typeof Symbol.iterator
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              "function" === typeof Symbol &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          };
    function ct(t, e) {
      if (null === t || void 0 === t) return e !== Boolean && void 0;
      var n = t,
        r = ["true", "false"].indexOf(t) > -1,
        i = parseFloat(n, 10),
        o =
          !isNaN(i) &&
          isFinite(n) &&
          "string" === typeof n &&
          !n.match(/^0+[^.]\d*$/g);
      return (
        e &&
        e !== Boolean &&
        ("undefined" === typeof n ? "undefined" : lt(n)) !== e
          ? (n = e(t))
          : r || e === Boolean
          ? (n = "" === n || "true" === n || !0 === n)
          : o && (n = i),
        n
      );
    }
    function ut(t, e) {
      if (t && t.length)
        t.forEach(function (t) {
          var n = it(t);
          -1 === e.camelCase.indexOf(n) && e.camelCase.push(n);
        });
      else if (
        t &&
        "object" === ("undefined" === typeof t ? "undefined" : lt(t))
      )
        for (var n in t) {
          var r = it(n);
          -1 === e.camelCase.indexOf(r) && e.camelCase.push(r),
            t[r] && t[r].type && (e.types[n] = [].concat(t[r].type)[0]);
        }
    }
    function dt() {
      var t =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        e = { camelCase: [], hyphenate: [], types: {} };
      if (
        (t.mixins &&
          t.mixins.forEach(function (t) {
            ut(t.props, e);
          }),
        t.extends && t.extends.props)
      ) {
        var n = t.extends.props;
        ut(n, e);
      }
      return (
        ut(t.props, e),
        e.camelCase.forEach(function (t) {
          e.hyphenate.push(at(t));
        }),
        e
      );
    }
    function ft(t, e) {
      e.camelCase.forEach(function (n, r) {
        Object.defineProperty(t, n, {
          get: function () {
            return this.__vue_custom_element__[n];
          },
          set: function (t) {
            if (
              ("object" !== ("undefined" === typeof t ? "undefined" : lt(t)) &&
                "function" !== typeof t) ||
              !this.__vue_custom_element__
            ) {
              var n = e.types[e.camelCase[r]];
              this.setAttribute(e.hyphenate[r], ct(t, n));
            } else {
              var i = e.camelCase[r];
              this.__vue_custom_element__[i] = t;
            }
          },
        });
      });
    }
    function ht(t, e, n) {
      var r = e.propsData || {};
      return (
        n.hyphenate.forEach(function (e, i) {
          var o = n.camelCase[i],
            a = t.attributes[e] || t[o],
            s = null;
          n.types[o] && (s = n.types[o]),
            a instanceof Attr
              ? (r[o] = ct(a.value, s))
              : "undefined" !== typeof a && (r[o] = a);
        }),
        r
      );
    }
    function pt(t) {
      var e = {};
      return (
        st(t.attributes).forEach(function (t) {
          e["vue-slot" === t.nodeName ? "slot" : t.nodeName] = t.nodeValue;
        }),
        e
      );
    }
    function gt(t) {
      if (t.childNodes.length) return t.childNodes;
      if (t.content && t.content.childNodes && t.content.childNodes.length)
        return t.content.childNodes;
      var e = document.createElement("div");
      return (e.innerHTML = t.innerHTML), e.childNodes;
    }
    function vt(t, e, n) {
      var r = gt(e),
        i = st(r).map(function (e) {
          return "#text" === e.nodeName
            ? e.nodeValue
            : t(e.tagName, {
                attrs: pt(e),
                domProps: { innerHTML: e.innerHTML },
              });
        });
      return (n.slot = e.id), t("template", n, i);
    }
    function mt() {
      var t =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
        e = arguments[1],
        n = [];
      return (
        st(t).forEach(function (t) {
          if ("#text" === t.nodeName)
            t.nodeValue.trim() && n.push(e("span", t.nodeValue));
          else if ("#comment" !== t.nodeName) {
            var r = pt(t),
              i = {
                attrs: r,
                domProps: {
                  innerHTML: "" === t.innerHTML ? t.innerText : t.innerHTML,
                },
              };
            r.slot && ((i.slot = r.slot), (r.slot = void 0));
            var o = "TEMPLATE" === t.tagName ? vt(e, t, i) : e(t.tagName, i);
            n.push(o);
          }
        }),
        n
      );
    }
    function bt(t, e) {
      var n = { bubbles: !1, cancelable: !1, detail: e },
        r = void 0;
      return (
        "function" === typeof window.CustomEvent
          ? (r = new CustomEvent(t, n))
          : ((r = document.createEvent("CustomEvent")),
            r.initCustomEvent(t, n.bubbles, n.cancelable, n.detail)),
        r
      );
    }
    function yt(t, e) {
      for (
        var n = arguments.length, r = Array(n > 2 ? n - 2 : 0), i = 2;
        i < n;
        i++
      )
        r[i - 2] = arguments[i];
      var o = bt(e, [].concat(r));
      t.dispatchEvent(o);
    }
    function xt(t, e, n, r, i) {
      if (t.__vue_custom_element__) return Promise.resolve(t);
      var o = e.util.extend({}, n),
        a = ht(t, o, r),
        s = (e.version && parseInt(e.version.split(".")[0], 10)) || 0;
      function l() {
        this.$emit = function () {
          for (var e, n = arguments.length, r = Array(n), i = 0; i < n; i++)
            r[i] = arguments[i];
          yt.apply(void 0, [t].concat(r)),
            this.__proto__ &&
              (e = this.__proto__.$emit).call.apply(e, [this].concat(r));
        };
      }
      if (
        ((o.beforeCreate = [].concat(o.beforeCreate || [], l)), o._compiled)
      ) {
        var c = {},
          u = o._Ctor;
        u &&
          (c = Object.keys(u).map(function (t) {
            return u[t];
          })[0].options),
          (c.beforeCreate = o.beforeCreate);
      }
      var d = void 0;
      if (s >= 2) {
        var f = t.cloneNode(!0).childNodes;
        d = {
          propsData: a,
          props: r.camelCase,
          computed: {
            reactiveProps: function () {
              var t = this,
                e = {};
              return (
                r.camelCase.forEach(function (n) {
                  "undefined" !== typeof t[n] && (e[n] = t[n]);
                }),
                e
              );
            },
          },
          render: function (t) {
            var e = { props: this.reactiveProps };
            return t(o, e, mt(f, t));
          },
        };
      } else if (1 === s) (d = o), (d.propsData = a);
      else {
        d = o;
        var h = {};
        Object.keys(a).forEach(function (t) {
          h[t] = { default: a[t] };
        }),
          (d.props = h);
      }
      var p =
        s >= 2
          ? "<div></div>"
          : ("<div>" + t.innerHTML + "</div>").replace(/vue-slot=/g, "slot=");
      if (
        (i.shadow && t.shadowRoot
          ? ((t.shadowRoot.innerHTML = p), (d.el = t.shadowRoot.children[0]))
          : ((t.innerHTML = p), (d.el = t.children[0])),
        i.shadow && i.shadowCss && t.shadowRoot)
      ) {
        var g = document.createElement("style");
        (g.type = "text/css"),
          g.appendChild(document.createTextNode(i.shadowCss)),
          t.shadowRoot.appendChild(g);
      }
      return (
        ft(t, r),
        "function" === typeof i.beforeCreateVueInstance &&
          (d = i.beforeCreateVueInstance(d) || d),
        Promise.resolve(d).then(function (n) {
          return (
            (t.__vue_custom_element__ = new e(n)),
            (t.__vue_custom_element_props__ = r),
            (t.getVueInstance = function () {
              var e = t.__vue_custom_element__;
              return e.$children.length ? e.$children[0] : e;
            }),
            t.removeAttribute("vce-cloak"),
            t.setAttribute("vce-ready", ""),
            yt(t, "vce-ready"),
            t
          );
        })
      );
    }
    function _t(t) {
      t.customElement = function (e, n) {
        var r =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          i = "function" === typeof n,
          o = i && { props: r.props || [] },
          a = dt(i ? o : n),
          s = nt(e, {
            constructorCallback: function () {
              "function" === typeof r.constructorCallback &&
                r.constructorCallback.call(this);
            },
            connectedCallback: function () {
              var o = this,
                s = i && n(),
                l = s && s.then && "function" === typeof s.then;
              if (
                ("function" === typeof r.connectedCallback &&
                  r.connectedCallback.call(this),
                i && !l)
              )
                throw new Error(
                  "Async component " + e + " do not returns Promise"
                );
              this.__detached__ ||
                (l
                  ? s.then(function (e) {
                      var n = dt(e);
                      xt(o, t, e, n, r).then(function () {
                        "function" === typeof r.vueInstanceCreatedCallback &&
                          r.vueInstanceCreatedCallback.call(o);
                      });
                    })
                  : xt(this, t, n, a, r).then(function () {
                      "function" === typeof r.vueInstanceCreatedCallback &&
                        r.vueInstanceCreatedCallback.call(o);
                    })),
                (this.__detached__ = !1);
            },
            disconnectedCallback: function () {
              var t = this;
              (this.__detached__ = !0),
                "function" === typeof r.disconnectedCallback &&
                  r.disconnectedCallback.call(this),
                null !== r.destroyTimeout &&
                  setTimeout(function () {
                    t.__detached__ &&
                      t.__vue_custom_element__ &&
                      ((t.__detached__ = !1),
                      t.__vue_custom_element__.$destroy(!0),
                      delete t.__vue_custom_element__,
                      delete t.__vue_custom_element_props__);
                  }, r.destroyTimeout || 3e3);
            },
            attributeChangedCallback: function (t, e, n) {
              if (this.__vue_custom_element__ && "undefined" !== typeof n) {
                var i = it(t);
                "function" === typeof r.attributeChangedCallback &&
                  r.attributeChangedCallback.call(this, t, e, n);
                var o = this.__vue_custom_element_props__.types[i];
                this.__vue_custom_element__[i] = ct(n, o);
              }
            },
            observedAttributes: a.hyphenate,
            shadow: !!r.shadow && !!HTMLElement.prototype.attachShadow,
          });
        return s;
      };
    }
    "undefined" !== typeof window &&
      window.Vue &&
      (window.Vue.use(_t), _t.installed && (_t.installed = !1));
    var wt = _t;
    n("289e");
    (r["a"].config.productionTip = !1),
      r["a"].use(wt),
      r["a"].customElement("open-budget-widget", Y);
  },
  "56ef": function (t, e, n) {
    var r = n("d066"),
      i = n("241c"),
      o = n("7418"),
      a = n("825a");
    t.exports =
      r("Reflect", "ownKeys") ||
      function (t) {
        var e = i.f(a(t)),
          n = o.f;
        return n ? e.concat(n(t)) : e;
      };
  },
  5899: function (t, e) {
    t.exports = "\t\n\v\f\r                　\u2028\u2029\ufeff";
  },
  "58a8": function (t, e, n) {
    var r = n("1d80"),
      i = n("5899"),
      o = "[" + i + "]",
      a = RegExp("^" + o + o + "*"),
      s = RegExp(o + o + "*$"),
      l = function (t) {
        return function (e) {
          var n = String(r(e));
          return (
            1 & t && (n = n.replace(a, "")), 2 & t && (n = n.replace(s, "")), n
          );
        };
      };
    t.exports = { start: l(1), end: l(2), trim: l(3) };
  },
  "5c0b": function (t, e, n) {
    "use strict";
    n("0554");
  },
  "5c6c": function (t, e) {
    t.exports = function (t, e) {
      return {
        enumerable: !(1 & t),
        configurable: !(2 & t),
        writable: !(4 & t),
        value: e,
      };
    };
  },
  "5f02": function (t, e, n) {
    "use strict";
    t.exports = function (t) {
      return "object" === typeof t && !0 === t.isAxiosError;
    };
  },
  "605d": function (t, e, n) {
    var r = n("c6b6"),
      i = n("da84");
    t.exports = "process" == r(i.process);
  },
  "60da": function (t, e, n) {
    "use strict";
    var r = n("83ab"),
      i = n("d039"),
      o = n("df75"),
      a = n("7418"),
      s = n("d1e7"),
      l = n("7b0b"),
      c = n("44ad"),
      u = Object.assign,
      d = Object.defineProperty;
    t.exports =
      !u ||
      i(function () {
        if (
          r &&
          1 !==
            u(
              { b: 1 },
              u(
                d({}, "a", {
                  enumerable: !0,
                  get: function () {
                    d(this, "b", { value: 3, enumerable: !1 });
                  },
                }),
                { b: 2 }
              )
            ).b
        )
          return !0;
        var t = {},
          e = {},
          n = Symbol(),
          i = "abcdefghijklmnopqrst";
        return (
          (t[n] = 7),
          i.split("").forEach(function (t) {
            e[t] = t;
          }),
          7 != u({}, t)[n] || o(u({}, e)).join("") != i
        );
      })
        ? function (t, e) {
            var n = l(t),
              i = arguments.length,
              u = 1,
              d = a.f,
              f = s.f;
            while (i > u) {
              var h,
                p = c(arguments[u++]),
                g = d ? o(p).concat(d(p)) : o(p),
                v = g.length,
                m = 0;
              while (v > m) (h = g[m++]), (r && !f.call(p, h)) || (n[h] = p[h]);
            }
            return n;
          }
        : u;
  },
  6547: function (t, e, n) {
    var r = n("a691"),
      i = n("1d80"),
      o = function (t) {
        return function (e, n) {
          var o,
            a,
            s = String(i(e)),
            l = r(n),
            c = s.length;
          return l < 0 || l >= c
            ? t
              ? ""
              : void 0
            : ((o = s.charCodeAt(l)),
              o < 55296 ||
              o > 56319 ||
              l + 1 === c ||
              (a = s.charCodeAt(l + 1)) < 56320 ||
              a > 57343
                ? t
                  ? s.charAt(l)
                  : o
                : t
                ? s.slice(l, l + 2)
                : a - 56320 + ((o - 55296) << 10) + 65536);
        };
      };
    t.exports = { codeAt: o(!1), charAt: o(!0) };
  },
  "65f0": function (t, e, n) {
    var r = n("861d"),
      i = n("e8b5"),
      o = n("b622"),
      a = o("species");
    t.exports = function (t, e) {
      var n;
      return (
        i(t) &&
          ((n = t.constructor),
          "function" != typeof n || (n !== Array && !i(n.prototype))
            ? r(n) && ((n = n[a]), null === n && (n = void 0))
            : (n = void 0)),
        new (void 0 === n ? Array : n)(0 === e ? 0 : e)
      );
    };
  },
  6783: function (t, e, n) {
    var r = n("24fb");
    (e = r(!1)),
      e.push([
        t.i,
        "#open-budget-widget .no-data__section{display:flex;align-items:center;justify-content:center;font-size:18px}#open-budget-widget .chart-section{position:relative}#open-budget-widget .chart-section .chart-section-text--center{font-size:28px;line-height:1.4;margin:0;position:absolute;top:50%;left:50%;padding:10px;transform:translate(-50%,-50%);cursor:default;color:#8694b6;z-index:0}#open-budget-widget .chart-section .chart-section-text--center span{display:none}#open-budget-widget .chart-section .chart-section-text--center:hover span{font-size:12px;font-style:normal;padding:6px;display:block;z-index:100;left:4px;min-width:170px;border-radius:6px;color:var(--primary);background:var(--chart-text-center);position:absolute;top:40px}#open-budget-widget .open-budget-widget__column{display:flex;flex-direction:column;align-items:center;flex-basis:47%;padding:0 15px;max-width:51%}#open-budget-widget .open-budget-widget__column h3{font-size:1.07rem;text-transform:uppercase;margin:10px auto 10px 0}#open-budget-widget .block{display:flex;justify-content:flex-start;color:var(--primary);height:20px;margin-bottom:10px;align-items:end;position:relative;flex-wrap:wrap;cursor:default}#open-budget-widget .total{margin-top:15px;font-weight:700;width:100%}#open-budget-widget .total .block__text{padding-left:24px}#open-budget-widget .total .block__sum{padding-right:58px}#open-budget-widget .block__text{overflow:hidden;text-overflow:ellipsis;width:50%;padding-right:10px;white-space:nowrap;text-align:left}#open-budget-widget .block__sum{white-space:nowrap;position:relative;margin-left:auto;right:0}#open-budget-widget .legend-con{width:100%}#open-budget-widget .legend-con .block__color{width:16px;min-width:16px;height:16px;border-radius:50%;margin-right:8px}#expenses,#incomes{border-radius:6px;background:hsla(0,0%,100%,.8);pointer-events:none}#expenses table,#incomes table{border:none;background:none;display:flex;align-items:center;height:100%;color:var(--primary);text-align:left}#expenses .pt-2,#incomes .pt-2{padding-top:5px}#expenses .sum,#incomes .sum{white-space:nowrap}#expenses .tooltip-text,#incomes .tooltip-text{display:inline-block;width:10px;height:10px;margin-right:6px;border-radius:50%}#open-budget-widget .mdOnly .block{flex-wrap:wrap;padding-top:8px;cursor:default;box-sizing:content-box}#open-budget-widget .mdOnly .legend-con .block__color{position:absolute;top:8px;left:0}#open-budget-widget .mdOnly .block__text{width:100%;padding-left:22px}#open-budget-widget .open-budget-widget__column.xsOnly{min-width:100%;flex-basis:100%}#open-budget-widget .block{flex-wrap:nowrap;padding-top:8px}#open-budget-widget .legend-con .block__color{position:absolute;top:8px;left:0}#open-budget-widget .block__text{width:100%;padding-left:22px}#open-budget-widget.smAndDown .open-budget-widget__column{padding:0 5px;min-width:100%}#open-budget-widget.smAndDown .open-budget-widget__column .block{flex-wrap:nowrap}#open-budget-widget.smAndDown .open-budget-widget__column .total .block__text{padding-left:8px}#open-budget-widget.smAndDown .open-budget-widget__column .total .block__sum{padding-right:0}#open-budget-widget.smAndDown .open-budget-widget__column .chart-section .chart-section-text--center{font-size:20px;line-height:1.3}@media(max-width:750px)and (min-width:800px){#open-budget-widget .block{flex-wrap:wrap;padding-top:8px;cursor:default;box-sizing:content-box}#open-budget-widget .legend-con .block__color{position:absolute;top:8px;left:0}#open-budget-widget .block__text{width:100%;padding-left:22px}}@media(max-width:470px){#open-budget-widget .open-budget-widget__column{min-width:100%;flex-basis:100%}#open-budget-widget .block{flex-wrap:nowrap;padding-top:8px}#open-budget-widget .legend-con .block__color{position:absolute;top:8px;left:0}#open-budget-widget .block__text{width:100%;padding-left:22px}}",
        "",
      ]),
      (t.exports = e);
  },
  "69f3": function (t, e, n) {
    var r,
      i,
      o,
      a = n("7f9a"),
      s = n("da84"),
      l = n("861d"),
      c = n("9112"),
      u = n("5135"),
      d = n("c6cd"),
      f = n("f772"),
      h = n("d012"),
      p = s.WeakMap,
      g = function (t) {
        return o(t) ? i(t) : r(t, {});
      },
      v = function (t) {
        return function (e) {
          var n;
          if (!l(e) || (n = i(e)).type !== t)
            throw TypeError("Incompatible receiver, " + t + " required");
          return n;
        };
      };
    if (a) {
      var m = d.state || (d.state = new p()),
        b = m.get,
        y = m.has,
        x = m.set;
      (r = function (t, e) {
        return (e.facade = t), x.call(m, t, e), e;
      }),
        (i = function (t) {
          return b.call(m, t) || {};
        }),
        (o = function (t) {
          return y.call(m, t);
        });
    } else {
      var _ = f("state");
      (h[_] = !0),
        (r = function (t, e) {
          return (e.facade = t), c(t, _, e), e;
        }),
        (i = function (t) {
          return u(t, _) ? t[_] : {};
        }),
        (o = function (t) {
          return u(t, _);
        });
    }
    t.exports = { set: r, get: i, has: o, enforce: g, getterFor: v };
  },
  "6eeb": function (t, e, n) {
    var r = n("da84"),
      i = n("9112"),
      o = n("5135"),
      a = n("ce4e"),
      s = n("8925"),
      l = n("69f3"),
      c = l.get,
      u = l.enforce,
      d = String(String).split("String");
    (t.exports = function (t, e, n, s) {
      var l,
        c = !!s && !!s.unsafe,
        f = !!s && !!s.enumerable,
        h = !!s && !!s.noTargetGet;
      "function" == typeof n &&
        ("string" != typeof e || o(n, "name") || i(n, "name", e),
        (l = u(n)),
        l.source || (l.source = d.join("string" == typeof e ? e : ""))),
        t !== r
          ? (c ? !h && t[e] && (f = !0) : delete t[e],
            f ? (t[e] = n) : i(t, e, n))
          : f
          ? (t[e] = n)
          : a(e, n);
    })(Function.prototype, "toString", function () {
      return ("function" == typeof this && c(this).source) || s(this);
    });
  },
  7156: function (t, e, n) {
    var r = n("861d"),
      i = n("d2bb");
    t.exports = function (t, e, n) {
      var o, a;
      return (
        i &&
          "function" == typeof (o = e.constructor) &&
          o !== n &&
          r((a = o.prototype)) &&
          a !== n.prototype &&
          i(t, a),
        t
      );
    };
  },
  7418: function (t, e) {
    e.f = Object.getOwnPropertySymbols;
  },
  7839: function (t, e) {
    t.exports = [
      "constructor",
      "hasOwnProperty",
      "isPrototypeOf",
      "propertyIsEnumerable",
      "toLocaleString",
      "toString",
      "valueOf",
    ];
  },
  "7a77": function (t, e, n) {
    "use strict";
    function r(t) {
      this.message = t;
    }
    (r.prototype.toString = function () {
      return "Cancel" + (this.message ? ": " + this.message : "");
    }),
      (r.prototype.__CANCEL__ = !0),
      (t.exports = r);
  },
  "7aac": function (t, e, n) {
    "use strict";
    var r = n("c532");
    t.exports = r.isStandardBrowserEnv()
      ? (function () {
          return {
            write: function (t, e, n, i, o, a) {
              var s = [];
              s.push(t + "=" + encodeURIComponent(e)),
                r.isNumber(n) && s.push("expires=" + new Date(n).toGMTString()),
                r.isString(i) && s.push("path=" + i),
                r.isString(o) && s.push("domain=" + o),
                !0 === a && s.push("secure"),
                (document.cookie = s.join("; "));
            },
            read: function (t) {
              var e = document.cookie.match(
                new RegExp("(^|;\\s*)(" + t + ")=([^;]*)")
              );
              return e ? decodeURIComponent(e[3]) : null;
            },
            remove: function (t) {
              this.write(t, "", Date.now() - 864e5);
            },
          };
        })()
      : (function () {
          return {
            write: function () {},
            read: function () {
              return null;
            },
            remove: function () {},
          };
        })();
  },
  "7b0b": function (t, e, n) {
    var r = n("1d80");
    t.exports = function (t) {
      return Object(r(t));
    };
  },
  "7c73": function (t, e, n) {
    var r,
      i = n("825a"),
      o = n("37e8"),
      a = n("7839"),
      s = n("d012"),
      l = n("1be4"),
      c = n("cc12"),
      u = n("f772"),
      d = ">",
      f = "<",
      h = "prototype",
      p = "script",
      g = u("IE_PROTO"),
      v = function () {},
      m = function (t) {
        return f + p + d + t + f + "/" + p + d;
      },
      b = function (t) {
        t.write(m("")), t.close();
        var e = t.parentWindow.Object;
        return (t = null), e;
      },
      y = function () {
        var t,
          e = c("iframe"),
          n = "java" + p + ":";
        return (
          (e.style.display = "none"),
          l.appendChild(e),
          (e.src = String(n)),
          (t = e.contentWindow.document),
          t.open(),
          t.write(m("document.F=Object")),
          t.close(),
          t.F
        );
      },
      x = function () {
        try {
          r = document.domain && new ActiveXObject("htmlfile");
        } catch (e) {}
        x = r ? b(r) : y();
        var t = a.length;
        while (t--) delete x[h][a[t]];
        return x();
      };
    (s[g] = !0),
      (t.exports =
        Object.create ||
        function (t, e) {
          var n;
          return (
            null !== t
              ? ((v[h] = i(t)), (n = new v()), (v[h] = null), (n[g] = t))
              : (n = x()),
            void 0 === e ? n : o(n, e)
          );
        });
  },
  "7dd0": function (t, e, n) {
    "use strict";
    var r = n("23e7"),
      i = n("9ed3"),
      o = n("e163"),
      a = n("d2bb"),
      s = n("d44e"),
      l = n("9112"),
      c = n("6eeb"),
      u = n("b622"),
      d = n("c430"),
      f = n("3f8c"),
      h = n("ae93"),
      p = h.IteratorPrototype,
      g = h.BUGGY_SAFARI_ITERATORS,
      v = u("iterator"),
      m = "keys",
      b = "values",
      y = "entries",
      x = function () {
        return this;
      };
    t.exports = function (t, e, n, u, h, _, w) {
      i(n, e, u);
      var k,
        C,
        M,
        S = function (t) {
          if (t === h && P) return P;
          if (!g && t in O) return O[t];
          switch (t) {
            case m:
              return function () {
                return new n(this, t);
              };
            case b:
              return function () {
                return new n(this, t);
              };
            case y:
              return function () {
                return new n(this, t);
              };
          }
          return function () {
            return new n(this);
          };
        },
        A = e + " Iterator",
        T = !1,
        O = t.prototype,
        E = O[v] || O["@@iterator"] || (h && O[h]),
        P = (!g && E) || S(h),
        L = ("Array" == e && O.entries) || E;
      if (
        (L &&
          ((k = o(L.call(new t()))),
          p !== Object.prototype &&
            k.next &&
            (d ||
              o(k) === p ||
              (a ? a(k, p) : "function" != typeof k[v] && l(k, v, x)),
            s(k, A, !0, !0),
            d && (f[A] = x))),
        h == b &&
          E &&
          E.name !== b &&
          ((T = !0),
          (P = function () {
            return E.call(this);
          })),
        (d && !w) || O[v] === P || l(O, v, P),
        (f[e] = P),
        h)
      )
        if (((C = { values: S(b), keys: _ ? P : S(m), entries: S(y) }), w))
          for (M in C) (g || T || !(M in O)) && c(O, M, C[M]);
        else r({ target: e, proto: !0, forced: g || T }, C);
      return C;
    };
  },
  "7e12": function (t, e, n) {
    var r = n("da84"),
      i = n("58a8").trim,
      o = n("5899"),
      a = r.parseFloat,
      s = 1 / a(o + "-0") !== -1 / 0;
    t.exports = s
      ? function (t) {
          var e = i(String(t)),
            n = a(e);
          return 0 === n && "-" == e.charAt(0) ? -0 : n;
        }
      : a;
  },
  "7f9a": function (t, e, n) {
    var r = n("da84"),
      i = n("8925"),
      o = r.WeakMap;
    t.exports = "function" === typeof o && /native code/.test(i(o));
  },
  "7ffa": function (t, e, n) {
    var r = n("24fb");
    (e = r(!1)),
      e.push([
        t.i,
        "#open-budget-widget .select__block{display:flex;flex-direction:row;flex-wrap:wrap;align-items:baseline;justify-content:flex-start;padding:0 16px}#open-budget-widget .select__block .select__title{margin-right:10px;font-size:1rem}",
        "",
      ]),
      (t.exports = e);
  },
  "825a": function (t, e, n) {
    var r = n("861d");
    t.exports = function (t) {
      if (!r(t)) throw TypeError(String(t) + " is not an object");
      return t;
    };
  },
  "83ab": function (t, e, n) {
    var r = n("d039");
    t.exports = !r(function () {
      return (
        7 !=
        Object.defineProperty({}, 1, {
          get: function () {
            return 7;
          },
        })[1]
      );
    });
  },
  "83b9": function (t, e, n) {
    "use strict";
    var r = n("d925"),
      i = n("e683");
    t.exports = function (t, e) {
      return t && !r(e) ? i(t, e) : e;
    };
  },
  8418: function (t, e, n) {
    "use strict";
    var r = n("c04e"),
      i = n("9bf2"),
      o = n("5c6c");
    t.exports = function (t, e, n) {
      var a = r(e);
      a in t ? i.f(t, a, o(0, n)) : (t[a] = n);
    };
  },
  "861d": function (t, e) {
    t.exports = function (t) {
      return "object" === typeof t ? null !== t : "function" === typeof t;
    };
  },
  8925: function (t, e, n) {
    var r = n("c6cd"),
      i = Function.toString;
    "function" != typeof r.inspectSource &&
      (r.inspectSource = function (t) {
        return i.call(t);
      }),
      (t.exports = r.inspectSource);
  },
  "8aa5": function (t, e, n) {
    "use strict";
    var r = n("6547").charAt;
    t.exports = function (t, e, n) {
      return e + (n ? r(t, e).length : 1);
    };
  },
  "8df4": function (t, e, n) {
    "use strict";
    var r = n("7a77");
    function i(t) {
      if ("function" !== typeof t)
        throw new TypeError("executor must be a function.");
      var e;
      this.promise = new Promise(function (t) {
        e = t;
      });
      var n = this;
      t(function (t) {
        n.reason || ((n.reason = new r(t)), e(n.reason));
      });
    }
    (i.prototype.throwIfRequested = function () {
      if (this.reason) throw this.reason;
    }),
      (i.source = function () {
        var t,
          e = new i(function (e) {
            t = e;
          });
        return { token: e, cancel: t };
      }),
      (t.exports = i);
  },
  "8f28": function (t, e, n) {
    var r = n("7ffa");
    r.__esModule && (r = r.default),
      "string" === typeof r && (r = [[t.i, r, ""]]),
      r.locals && (t.exports = r.locals);
    var i = n("499e").default;
    i("b55c2a84", r, !0, { sourceMap: !1, shadowMode: !1 });
  },
  "90e3": function (t, e) {
    var n = 0,
      r = Math.random();
    t.exports = function (t) {
      return (
        "Symbol(" +
        String(void 0 === t ? "" : t) +
        ")_" +
        (++n + r).toString(36)
      );
    };
  },
  9112: function (t, e, n) {
    var r = n("83ab"),
      i = n("9bf2"),
      o = n("5c6c");
    t.exports = r
      ? function (t, e, n) {
          return i.f(t, e, o(1, n));
        }
      : function (t, e, n) {
          return (t[e] = n), t;
        };
  },
  9263: function (t, e, n) {
    "use strict";
    var r = n("ad6d"),
      i = n("9f7f"),
      o = n("5692"),
      a = RegExp.prototype.exec,
      s = o("native-string-replace", String.prototype.replace),
      l = a,
      c = (function () {
        var t = /a/,
          e = /b*/g;
        return (
          a.call(t, "a"), a.call(e, "a"), 0 !== t.lastIndex || 0 !== e.lastIndex
        );
      })(),
      u = i.UNSUPPORTED_Y || i.BROKEN_CARET,
      d = void 0 !== /()??/.exec("")[1],
      f = c || d || u;
    f &&
      (l = function (t) {
        var e,
          n,
          i,
          o,
          l = this,
          f = u && l.sticky,
          h = r.call(l),
          p = l.source,
          g = 0,
          v = t;
        return (
          f &&
            ((h = h.replace("y", "")),
            -1 === h.indexOf("g") && (h += "g"),
            (v = String(t).slice(l.lastIndex)),
            l.lastIndex > 0 &&
              (!l.multiline || (l.multiline && "\n" !== t[l.lastIndex - 1])) &&
              ((p = "(?: " + p + ")"), (v = " " + v), g++),
            (n = new RegExp("^(?:" + p + ")", h))),
          d && (n = new RegExp("^" + p + "$(?!\\s)", h)),
          c && (e = l.lastIndex),
          (i = a.call(f ? n : l, v)),
          f
            ? i
              ? ((i.input = i.input.slice(g)),
                (i[0] = i[0].slice(g)),
                (i.index = l.lastIndex),
                (l.lastIndex += i[0].length))
              : (l.lastIndex = 0)
            : c && i && (l.lastIndex = l.global ? i.index + i[0].length : e),
          d &&
            i &&
            i.length > 1 &&
            s.call(i[0], n, function () {
              for (o = 1; o < arguments.length - 2; o++)
                void 0 === arguments[o] && (i[o] = void 0);
            }),
          i
        );
      }),
      (t.exports = l);
  },
  "94ca": function (t, e, n) {
    var r = n("d039"),
      i = /#|\.prototype\./,
      o = function (t, e) {
        var n = s[a(t)];
        return n == c || (n != l && ("function" == typeof e ? r(e) : !!e));
      },
      a = (o.normalize = function (t) {
        return String(t).replace(i, ".").toLowerCase();
      }),
      s = (o.data = {}),
      l = (o.NATIVE = "N"),
      c = (o.POLYFILL = "P");
    t.exports = o;
  },
  "96a4": function (t, e, n) {
    var r = n("24fb");
    (e = r(!1)),
      e.push([
        t.i,
        ':root{--white:#fff;--primary:#516696;--yellow:#f6b83d;--yellow-light:rgba(246,184,61,0.5);--blue:#a1ddff;--red:#d62728;--error-text:#9294ae;--cont-aura-from:rgba(81,102,150,0.5);--cont-aura-to:rgba(0,0,0,0.1);--chart-text-center:hsla(0,0%,100%,0.8)}#open-budget-widget{font-family:Open Sans,sans-serif;font-size:14px;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-align:center;color:var(--primary);margin-top:60px;padding:15px;display:flex;flex-direction:column;border-style:solid;border-radius:6px;position:relative;min-width:248px;min-height:650px}#open-budget-widget *{box-sizing:border-box}#open-budget-widget h1{font-size:28px;margin:16px;text-align:left}#open-budget-widget .open-budget-widget__wrapper{display:flex;flex:1 0 auto;flex-direction:row;flex-wrap:nowrap;justify-content:space-around;padding-top:10px}#open-budget-widget .open-budget-widget__wrapper .chartjs-tooltip-key{border-radius:5px}#open-budget-widget .open-budget-widget__wrapper .cont_error h2{color:var(--primary);font-size:32px}#open-budget-widget .footer{display:flex;align-items:flex-start}#open-budget-widget .btn{font-size:14px;font-family:Open Sans,sans-serif;height:33px;margin:15px;padding:5px 20px;max-width:260px;border:1px solid var(--primary);border-radius:5px;background-color:transparent;cursor:pointer;align-items:center;display:inline-flex;flex:0 0 auto;font-weight:500;color:var(--primary);letter-spacing:.0892857143em;justify-content:center;outline:0;position:relative;text-decoration:none;text-indent:.0892857143em;text-transform:uppercase;transition-duration:.28s;transition-property:box-shadow,transform,opacity;transition-timing-function:cubic-bezier(.4,0,.2,1);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;vertical-align:middle;white-space:nowrap}#open-budget-widget .btn:before{background-color:currentColor;border-radius:inherit;bottom:0;color:inherit;content:"";left:0;opacity:0;pointer-events:none;position:absolute;right:0;top:0;transition:opacity .2s cubic-bezier(.4,0,.6,1)}#open-budget-widget .btn:hover:before{background-color:var(--primary);opacity:.08}#open-budget-widget.smAndDown{padding-bottom:36px}#open-budget-widget.smAndDown .open-budget-widget__wrapper{max-width:280px;margin:0 auto}#open-budget-widget.smAndDown h1{font-size:22px;margin:6px;text-align:center}#open-budget-widget.smAndDown .select__block{display:block;padding:5px 0 0 0}#open-budget-widget.smAndDown .open-budget-widget__column h3,#open-budget-widget.smAndDown .select__block .select__title{font-size:14px}#open-budget-widget.smAndDown .footer{margin:10px auto 5px;align-items:center}#open-budget-widget.smAndDown .btn{font-size:12px;height:32px;padding:5px 10px}#open-budget-widget.smAndDown .open-budget-widget__wrapper{flex-wrap:wrap}#open-budget-widget.smAndDown .open-budget-widget__wrapper .legend-con{display:none}#open-budget-widget .mdWrapper.footer{position:absolute;bottom:15px;left:15px}#loader{display:block;position:absolute;top:50%;left:50%;height:50px;width:50px;margin:-25px 0 0 -25px;border:2px solid transparent;border-top-color:var(--primary);border-radius:50%;-webkit-animation:spin11 2s linear infinite;animation:spin11 2s linear infinite}#loader:before{content:"";position:absolute;top:7px;right:7px;bottom:7px;left:7px;border:2px solid transparent;border-radius:50%;border-top-color:var(--yellow);-webkit-animation:spin11 3s linear infinite;animation:spin11 3s linear infinite}#loader:after{content:"";position:absolute;top:15px;right:15px;bottom:15px;left:15px;border:2px solid transparent;border-radius:50%;border-top-color:var(--blue);-webkit-animation:spin11 1.5s linear infinite;animation:spin11 1.5s linear infinite}@-webkit-keyframes spin11{0%{transform:rotate(0deg)}to{transform:rotate(359deg)}}@keyframes spin11{0%{transform:rotate(0deg)}to{transform:rotate(359deg)}}#error{position:relative;height:100%}.cont_principal{height:100%;overflow:hidden}.cont_error,.cont_principal{position:absolute;width:100%}.cont_error{height:300px;top:50%;margin-top:-150px;z-index:2}.cont_error .btn{margin-top:10px}.cont_error>h2{font-weight:400;margin:0;font-size:42px;color:var(--red);position:relative;transition:all .5s}.cont_error>p{font-weight:300;font-size:24px;letter-spacing:5px;color:var(--error-text)}.cont_aura_1{position:absolute;width:300px;height:120%;top:25px;right:-340px;background-color:var(--yellow);box-shadow:0 0 60px 20px var(--yellow-light);transition:all .5s}.cont_aura_2{position:absolute;width:100%;height:300px;right:-10%;bottom:-301px;background-color:var(--primary);box-shadow:0 0 60px 10px var(--cont-aura-from),0 0 20px 0 var(--cont-aura-to);z-index:5}.cont_error_active>.cont_aura_2{transform:rotate(-20deg)}.cont_error_active>.cont_aura_1{transform:rotate(20deg);right:-170px}@media(max-width:550px){#open-budget-widget .open-budget-widget__column{padding:0 5px;min-width:100%}#open-budget-widget .open-budget-widget__column .block{flex-wrap:nowrap}#open-budget-widget .open-budget-widget__column .total .block__text{padding-left:8px}#open-budget-widget .open-budget-widget__column .total .block__sum{padding-right:0}#open-budget-widget .open-budget-widget__column .chart-section .chart-section-text--center{font-size:20px;line-height:1.3}#open-budget-widget{padding-bottom:36px}#open-budget-widget .open-budget-widget__wrapper{max-width:280px;margin:0 auto}#open-budget-widget h1{font-size:22px;margin:6px;text-align:center}#open-budget-widget .select__block{display:block;padding:5px 0 0 0}#open-budget-widget .open-budget-widget__column h3,#open-budget-widget .select__block .select__title{font-size:14px}#open-budget-widget .footer{margin:10px auto 5px;align-items:center}#open-budget-widget .btn{font-size:12px;height:32px;padding:5px 10px}#open-budget-widget .open-budget-widget__wrapper{flex-wrap:wrap}#open-budget-widget .open-budget-widget__wrapper .legend-con{display:none}}@media(max-width:880px)and (min-width:550px){#open-budget-widget .mdWrapper.footer{position:absolute;bottom:15px;left:15px}}',
        "",
      ]),
      (t.exports = e);
  },
  "96cf": function (t, e, n) {
    var r = (function (t) {
      "use strict";
      var e,
        n = Object.prototype,
        r = n.hasOwnProperty,
        i = "function" === typeof Symbol ? Symbol : {},
        o = i.iterator || "@@iterator",
        a = i.asyncIterator || "@@asyncIterator",
        s = i.toStringTag || "@@toStringTag";
      function l(t, e, n) {
        return (
          Object.defineProperty(t, e, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          }),
          t[e]
        );
      }
      try {
        l({}, "");
      } catch (L) {
        l = function (t, e, n) {
          return (t[e] = n);
        };
      }
      function c(t, e, n, r) {
        var i = e && e.prototype instanceof v ? e : v,
          o = Object.create(i.prototype),
          a = new O(r || []);
        return (o._invoke = M(t, n, a)), o;
      }
      function u(t, e, n) {
        try {
          return { type: "normal", arg: t.call(e, n) };
        } catch (L) {
          return { type: "throw", arg: L };
        }
      }
      t.wrap = c;
      var d = "suspendedStart",
        f = "suspendedYield",
        h = "executing",
        p = "completed",
        g = {};
      function v() {}
      function m() {}
      function b() {}
      var y = {};
      y[o] = function () {
        return this;
      };
      var x = Object.getPrototypeOf,
        _ = x && x(x(E([])));
      _ && _ !== n && r.call(_, o) && (y = _);
      var w = (b.prototype = v.prototype = Object.create(y));
      function k(t) {
        ["next", "throw", "return"].forEach(function (e) {
          l(t, e, function (t) {
            return this._invoke(e, t);
          });
        });
      }
      function C(t, e) {
        function n(i, o, a, s) {
          var l = u(t[i], t, o);
          if ("throw" !== l.type) {
            var c = l.arg,
              d = c.value;
            return d && "object" === typeof d && r.call(d, "__await")
              ? e.resolve(d.__await).then(
                  function (t) {
                    n("next", t, a, s);
                  },
                  function (t) {
                    n("throw", t, a, s);
                  }
                )
              : e.resolve(d).then(
                  function (t) {
                    (c.value = t), a(c);
                  },
                  function (t) {
                    return n("throw", t, a, s);
                  }
                );
          }
          s(l.arg);
        }
        var i;
        function o(t, r) {
          function o() {
            return new e(function (e, i) {
              n(t, r, e, i);
            });
          }
          return (i = i ? i.then(o, o) : o());
        }
        this._invoke = o;
      }
      function M(t, e, n) {
        var r = d;
        return function (i, o) {
          if (r === h) throw new Error("Generator is already running");
          if (r === p) {
            if ("throw" === i) throw o;
            return P();
          }
          (n.method = i), (n.arg = o);
          while (1) {
            var a = n.delegate;
            if (a) {
              var s = S(a, n);
              if (s) {
                if (s === g) continue;
                return s;
              }
            }
            if ("next" === n.method) n.sent = n._sent = n.arg;
            else if ("throw" === n.method) {
              if (r === d) throw ((r = p), n.arg);
              n.dispatchException(n.arg);
            } else "return" === n.method && n.abrupt("return", n.arg);
            r = h;
            var l = u(t, e, n);
            if ("normal" === l.type) {
              if (((r = n.done ? p : f), l.arg === g)) continue;
              return { value: l.arg, done: n.done };
            }
            "throw" === l.type &&
              ((r = p), (n.method = "throw"), (n.arg = l.arg));
          }
        };
      }
      function S(t, n) {
        var r = t.iterator[n.method];
        if (r === e) {
          if (((n.delegate = null), "throw" === n.method)) {
            if (
              t.iterator["return"] &&
              ((n.method = "return"),
              (n.arg = e),
              S(t, n),
              "throw" === n.method)
            )
              return g;
            (n.method = "throw"),
              (n.arg = new TypeError(
                "The iterator does not provide a 'throw' method"
              ));
          }
          return g;
        }
        var i = u(r, t.iterator, n.arg);
        if ("throw" === i.type)
          return (n.method = "throw"), (n.arg = i.arg), (n.delegate = null), g;
        var o = i.arg;
        return o
          ? o.done
            ? ((n[t.resultName] = o.value),
              (n.next = t.nextLoc),
              "return" !== n.method && ((n.method = "next"), (n.arg = e)),
              (n.delegate = null),
              g)
            : o
          : ((n.method = "throw"),
            (n.arg = new TypeError("iterator result is not an object")),
            (n.delegate = null),
            g);
      }
      function A(t) {
        var e = { tryLoc: t[0] };
        1 in t && (e.catchLoc = t[1]),
          2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
          this.tryEntries.push(e);
      }
      function T(t) {
        var e = t.completion || {};
        (e.type = "normal"), delete e.arg, (t.completion = e);
      }
      function O(t) {
        (this.tryEntries = [{ tryLoc: "root" }]),
          t.forEach(A, this),
          this.reset(!0);
      }
      function E(t) {
        if (t) {
          var n = t[o];
          if (n) return n.call(t);
          if ("function" === typeof t.next) return t;
          if (!isNaN(t.length)) {
            var i = -1,
              a = function n() {
                while (++i < t.length)
                  if (r.call(t, i)) return (n.value = t[i]), (n.done = !1), n;
                return (n.value = e), (n.done = !0), n;
              };
            return (a.next = a);
          }
        }
        return { next: P };
      }
      function P() {
        return { value: e, done: !0 };
      }
      return (
        (m.prototype = w.constructor = b),
        (b.constructor = m),
        (m.displayName = l(b, s, "GeneratorFunction")),
        (t.isGeneratorFunction = function (t) {
          var e = "function" === typeof t && t.constructor;
          return (
            !!e &&
            (e === m || "GeneratorFunction" === (e.displayName || e.name))
          );
        }),
        (t.mark = function (t) {
          return (
            Object.setPrototypeOf
              ? Object.setPrototypeOf(t, b)
              : ((t.__proto__ = b), l(t, s, "GeneratorFunction")),
            (t.prototype = Object.create(w)),
            t
          );
        }),
        (t.awrap = function (t) {
          return { __await: t };
        }),
        k(C.prototype),
        (C.prototype[a] = function () {
          return this;
        }),
        (t.AsyncIterator = C),
        (t.async = function (e, n, r, i, o) {
          void 0 === o && (o = Promise);
          var a = new C(c(e, n, r, i), o);
          return t.isGeneratorFunction(n)
            ? a
            : a.next().then(function (t) {
                return t.done ? t.value : a.next();
              });
        }),
        k(w),
        l(w, s, "Generator"),
        (w[o] = function () {
          return this;
        }),
        (w.toString = function () {
          return "[object Generator]";
        }),
        (t.keys = function (t) {
          var e = [];
          for (var n in t) e.push(n);
          return (
            e.reverse(),
            function n() {
              while (e.length) {
                var r = e.pop();
                if (r in t) return (n.value = r), (n.done = !1), n;
              }
              return (n.done = !0), n;
            }
          );
        }),
        (t.values = E),
        (O.prototype = {
          constructor: O,
          reset: function (t) {
            if (
              ((this.prev = 0),
              (this.next = 0),
              (this.sent = this._sent = e),
              (this.done = !1),
              (this.delegate = null),
              (this.method = "next"),
              (this.arg = e),
              this.tryEntries.forEach(T),
              !t)
            )
              for (var n in this)
                "t" === n.charAt(0) &&
                  r.call(this, n) &&
                  !isNaN(+n.slice(1)) &&
                  (this[n] = e);
          },
          stop: function () {
            this.done = !0;
            var t = this.tryEntries[0],
              e = t.completion;
            if ("throw" === e.type) throw e.arg;
            return this.rval;
          },
          dispatchException: function (t) {
            if (this.done) throw t;
            var n = this;
            function i(r, i) {
              return (
                (s.type = "throw"),
                (s.arg = t),
                (n.next = r),
                i && ((n.method = "next"), (n.arg = e)),
                !!i
              );
            }
            for (var o = this.tryEntries.length - 1; o >= 0; --o) {
              var a = this.tryEntries[o],
                s = a.completion;
              if ("root" === a.tryLoc) return i("end");
              if (a.tryLoc <= this.prev) {
                var l = r.call(a, "catchLoc"),
                  c = r.call(a, "finallyLoc");
                if (l && c) {
                  if (this.prev < a.catchLoc) return i(a.catchLoc, !0);
                  if (this.prev < a.finallyLoc) return i(a.finallyLoc);
                } else if (l) {
                  if (this.prev < a.catchLoc) return i(a.catchLoc, !0);
                } else {
                  if (!c)
                    throw new Error("try statement without catch or finally");
                  if (this.prev < a.finallyLoc) return i(a.finallyLoc);
                }
              }
            }
          },
          abrupt: function (t, e) {
            for (var n = this.tryEntries.length - 1; n >= 0; --n) {
              var i = this.tryEntries[n];
              if (
                i.tryLoc <= this.prev &&
                r.call(i, "finallyLoc") &&
                this.prev < i.finallyLoc
              ) {
                var o = i;
                break;
              }
            }
            o &&
              ("break" === t || "continue" === t) &&
              o.tryLoc <= e &&
              e <= o.finallyLoc &&
              (o = null);
            var a = o ? o.completion : {};
            return (
              (a.type = t),
              (a.arg = e),
              o
                ? ((this.method = "next"), (this.next = o.finallyLoc), g)
                : this.complete(a)
            );
          },
          complete: function (t, e) {
            if ("throw" === t.type) throw t.arg;
            return (
              "break" === t.type || "continue" === t.type
                ? (this.next = t.arg)
                : "return" === t.type
                ? ((this.rval = this.arg = t.arg),
                  (this.method = "return"),
                  (this.next = "end"))
                : "normal" === t.type && e && (this.next = e),
              g
            );
          },
          finish: function (t) {
            for (var e = this.tryEntries.length - 1; e >= 0; --e) {
              var n = this.tryEntries[e];
              if (n.finallyLoc === t)
                return this.complete(n.completion, n.afterLoc), T(n), g;
            }
          },
          catch: function (t) {
            for (var e = this.tryEntries.length - 1; e >= 0; --e) {
              var n = this.tryEntries[e];
              if (n.tryLoc === t) {
                var r = n.completion;
                if ("throw" === r.type) {
                  var i = r.arg;
                  T(n);
                }
                return i;
              }
            }
            throw new Error("illegal catch attempt");
          },
          delegateYield: function (t, n, r) {
            return (
              (this.delegate = { iterator: E(t), resultName: n, nextLoc: r }),
              "next" === this.method && (this.arg = e),
              g
            );
          },
        }),
        t
      );
    })(t.exports);
    try {
      regeneratorRuntime = r;
    } catch (i) {
      Function("r", "regeneratorRuntime = r")(r);
    }
  },
  "99af": function (t, e, n) {
    "use strict";
    var r = n("23e7"),
      i = n("d039"),
      o = n("e8b5"),
      a = n("861d"),
      s = n("7b0b"),
      l = n("50c4"),
      c = n("8418"),
      u = n("65f0"),
      d = n("1dde"),
      f = n("b622"),
      h = n("2d00"),
      p = f("isConcatSpreadable"),
      g = 9007199254740991,
      v = "Maximum allowed index exceeded",
      m =
        h >= 51 ||
        !i(function () {
          var t = [];
          return (t[p] = !1), t.concat()[0] !== t;
        }),
      b = d("concat"),
      y = function (t) {
        if (!a(t)) return !1;
        var e = t[p];
        return void 0 !== e ? !!e : o(t);
      },
      x = !m || !b;
    r(
      { target: "Array", proto: !0, forced: x },
      {
        concat: function (t) {
          var e,
            n,
            r,
            i,
            o,
            a = s(this),
            d = u(a, 0),
            f = 0;
          for (e = -1, r = arguments.length; e < r; e++)
            if (((o = -1 === e ? a : arguments[e]), y(o))) {
              if (((i = l(o.length)), f + i > g)) throw TypeError(v);
              for (n = 0; n < i; n++, f++) n in o && c(d, f, o[n]);
            } else {
              if (f >= g) throw TypeError(v);
              c(d, f++, o);
            }
          return (d.length = f), d;
        },
      }
    );
  },
  "9bf2": function (t, e, n) {
    var r = n("83ab"),
      i = n("0cfb"),
      o = n("825a"),
      a = n("c04e"),
      s = Object.defineProperty;
    e.f = r
      ? s
      : function (t, e, n) {
          if ((o(t), (e = a(e, !0)), o(n), i))
            try {
              return s(t, e, n);
            } catch (r) {}
          if ("get" in n || "set" in n)
            throw TypeError("Accessors not supported");
          return "value" in n && (t[e] = n.value), t;
        };
  },
  "9ed3": function (t, e, n) {
    "use strict";
    var r = n("ae93").IteratorPrototype,
      i = n("7c73"),
      o = n("5c6c"),
      a = n("d44e"),
      s = n("3f8c"),
      l = function () {
        return this;
      };
    t.exports = function (t, e, n) {
      var c = e + " Iterator";
      return (
        (t.prototype = i(r, { next: o(1, n) })), a(t, c, !1, !0), (s[c] = l), t
      );
    };
  },
  "9f7f": function (t, e, n) {
    "use strict";
    var r = n("d039");
    function i(t, e) {
      return RegExp(t, e);
    }
    (e.UNSUPPORTED_Y = r(function () {
      var t = i("a", "y");
      return (t.lastIndex = 2), null != t.exec("abcd");
    })),
      (e.BROKEN_CARET = r(function () {
        var t = i("^r", "gy");
        return (t.lastIndex = 2), null != t.exec("str");
      }));
  },
  a15b: function (t, e, n) {
    "use strict";
    var r = n("23e7"),
      i = n("44ad"),
      o = n("fc6a"),
      a = n("a640"),
      s = [].join,
      l = i != Object,
      c = a("join", ",");
    r(
      { target: "Array", proto: !0, forced: l || !c },
      {
        join: function (t) {
          return s.call(o(this), void 0 === t ? "," : t);
        },
      }
    );
  },
  a4b4: function (t, e, n) {
    var r = n("342f");
    t.exports = /web0s(?!.*chrome)/i.test(r);
  },
  a640: function (t, e, n) {
    "use strict";
    var r = n("d039");
    t.exports = function (t, e) {
      var n = [][t];
      return (
        !!n &&
        r(function () {
          n.call(
            null,
            e ||
              function () {
                throw 1;
              },
            1
          );
        })
      );
    };
  },
  a691: function (t, e) {
    var n = Math.ceil,
      r = Math.floor;
    t.exports = function (t) {
      return isNaN((t = +t)) ? 0 : (t > 0 ? r : n)(t);
    };
  },
  a79d: function (t, e, n) {
    "use strict";
    var r = n("23e7"),
      i = n("c430"),
      o = n("fea9"),
      a = n("d039"),
      s = n("d066"),
      l = n("4840"),
      c = n("cdf9"),
      u = n("6eeb"),
      d =
        !!o &&
        a(function () {
          o.prototype["finally"].call({ then: function () {} }, function () {});
        });
    r(
      { target: "Promise", proto: !0, real: !0, forced: d },
      {
        finally: function (t) {
          var e = l(this, s("Promise")),
            n = "function" == typeof t;
          return this.then(
            n
              ? function (n) {
                  return c(e, t()).then(function () {
                    return n;
                  });
                }
              : t,
            n
              ? function (n) {
                  return c(e, t()).then(function () {
                    throw n;
                  });
                }
              : t
          );
        },
      }
    ),
      i ||
        "function" != typeof o ||
        o.prototype["finally"] ||
        u(o.prototype, "finally", s("Promise").prototype["finally"]);
  },
  a9e3: function (t, e, n) {
    "use strict";
    var r = n("83ab"),
      i = n("da84"),
      o = n("94ca"),
      a = n("6eeb"),
      s = n("5135"),
      l = n("c6b6"),
      c = n("7156"),
      u = n("c04e"),
      d = n("d039"),
      f = n("7c73"),
      h = n("241c").f,
      p = n("06cf").f,
      g = n("9bf2").f,
      v = n("58a8").trim,
      m = "Number",
      b = i[m],
      y = b.prototype,
      x = l(f(y)) == m,
      _ = function (t) {
        var e,
          n,
          r,
          i,
          o,
          a,
          s,
          l,
          c = u(t, !1);
        if ("string" == typeof c && c.length > 2)
          if (((c = v(c)), (e = c.charCodeAt(0)), 43 === e || 45 === e)) {
            if (((n = c.charCodeAt(2)), 88 === n || 120 === n)) return NaN;
          } else if (48 === e) {
            switch (c.charCodeAt(1)) {
              case 66:
              case 98:
                (r = 2), (i = 49);
                break;
              case 79:
              case 111:
                (r = 8), (i = 55);
                break;
              default:
                return +c;
            }
            for (o = c.slice(2), a = o.length, s = 0; s < a; s++)
              if (((l = o.charCodeAt(s)), l < 48 || l > i)) return NaN;
            return parseInt(o, r);
          }
        return +c;
      };
    if (o(m, !b(" 0o1") || !b("0b1") || b("+0x1"))) {
      for (
        var w,
          k = function (t) {
            var e = arguments.length < 1 ? 0 : t,
              n = this;
            return n instanceof k &&
              (x
                ? d(function () {
                    y.valueOf.call(n);
                  })
                : l(n) != m)
              ? c(new b(_(e)), n, k)
              : _(e);
          },
          C = r
            ? h(b)
            : "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(
                ","
              ),
          M = 0;
        C.length > M;
        M++
      )
        s(b, (w = C[M])) && !s(k, w) && g(k, w, p(b, w));
      (k.prototype = y), (y.constructor = k), a(i, m, k);
    }
  },
  ac1f: function (t, e, n) {
    "use strict";
    var r = n("23e7"),
      i = n("9263");
    r({ target: "RegExp", proto: !0, forced: /./.exec !== i }, { exec: i });
  },
  ad6d: function (t, e, n) {
    "use strict";
    var r = n("825a");
    t.exports = function () {
      var t = r(this),
        e = "";
      return (
        t.global && (e += "g"),
        t.ignoreCase && (e += "i"),
        t.multiline && (e += "m"),
        t.dotAll && (e += "s"),
        t.unicode && (e += "u"),
        t.sticky && (e += "y"),
        e
      );
    };
  },
  ae93: function (t, e, n) {
    "use strict";
    var r,
      i,
      o,
      a = n("d039"),
      s = n("e163"),
      l = n("9112"),
      c = n("5135"),
      u = n("b622"),
      d = n("c430"),
      f = u("iterator"),
      h = !1,
      p = function () {
        return this;
      };
    [].keys &&
      ((o = [].keys()),
      "next" in o
        ? ((i = s(s(o))), i !== Object.prototype && (r = i))
        : (h = !0));
    var g =
      void 0 == r ||
      a(function () {
        var t = {};
        return r[f].call(t) !== t;
      });
    g && (r = {}),
      (d && !g) || c(r, f) || l(r, f, p),
      (t.exports = { IteratorPrototype: r, BUGGY_SAFARI_ITERATORS: h });
  },
  b041: function (t, e, n) {
    "use strict";
    var r = n("00ee"),
      i = n("f5df");
    t.exports = r
      ? {}.toString
      : function () {
          return "[object " + i(this) + "]";
        };
  },
  b0c0: function (t, e, n) {
    var r = n("83ab"),
      i = n("9bf2").f,
      o = Function.prototype,
      a = o.toString,
      s = /^\s*function ([^ (]*)/,
      l = "name";
    r &&
      !(l in o) &&
      i(o, l, {
        configurable: !0,
        get: function () {
          try {
            return a.call(this).match(s)[1];
          } catch (t) {
            return "";
          }
        },
      });
  },
  b50d: function (t, e, n) {
    "use strict";
    var r = n("c532"),
      i = n("467f"),
      o = n("7aac"),
      a = n("30b5"),
      s = n("83b9"),
      l = n("c345"),
      c = n("3934"),
      u = n("2d83");
    t.exports = function (t) {
      return new Promise(function (e, n) {
        var d = t.data,
          f = t.headers;
        r.isFormData(d) && delete f["Content-Type"];
        var h = new XMLHttpRequest();
        if (t.auth) {
          var p = t.auth.username || "",
            g = t.auth.password
              ? unescape(encodeURIComponent(t.auth.password))
              : "";
          f.Authorization = "Basic " + btoa(p + ":" + g);
        }
        var v = s(t.baseURL, t.url);
        if (
          (h.open(
            t.method.toUpperCase(),
            a(v, t.params, t.paramsSerializer),
            !0
          ),
          (h.timeout = t.timeout),
          (h.onreadystatechange = function () {
            if (
              h &&
              4 === h.readyState &&
              (0 !== h.status ||
                (h.responseURL && 0 === h.responseURL.indexOf("file:")))
            ) {
              var r =
                  "getAllResponseHeaders" in h
                    ? l(h.getAllResponseHeaders())
                    : null,
                o =
                  t.responseType && "text" !== t.responseType
                    ? h.response
                    : h.responseText,
                a = {
                  data: o,
                  status: h.status,
                  statusText: h.statusText,
                  headers: r,
                  config: t,
                  request: h,
                };
              i(e, n, a), (h = null);
            }
          }),
          (h.onabort = function () {
            h && (n(u("Request aborted", t, "ECONNABORTED", h)), (h = null));
          }),
          (h.onerror = function () {
            n(u("Network Error", t, null, h)), (h = null);
          }),
          (h.ontimeout = function () {
            var e = "timeout of " + t.timeout + "ms exceeded";
            t.timeoutErrorMessage && (e = t.timeoutErrorMessage),
              n(u(e, t, "ECONNABORTED", h)),
              (h = null);
          }),
          r.isStandardBrowserEnv())
        ) {
          var m =
            (t.withCredentials || c(v)) && t.xsrfCookieName
              ? o.read(t.xsrfCookieName)
              : void 0;
          m && (f[t.xsrfHeaderName] = m);
        }
        if (
          ("setRequestHeader" in h &&
            r.forEach(f, function (t, e) {
              "undefined" === typeof d && "content-type" === e.toLowerCase()
                ? delete f[e]
                : h.setRequestHeader(e, t);
            }),
          r.isUndefined(t.withCredentials) ||
            (h.withCredentials = !!t.withCredentials),
          t.responseType)
        )
          try {
            h.responseType = t.responseType;
          } catch (b) {
            if ("json" !== t.responseType) throw b;
          }
        "function" === typeof t.onDownloadProgress &&
          h.addEventListener("progress", t.onDownloadProgress),
          "function" === typeof t.onUploadProgress &&
            h.upload &&
            h.upload.addEventListener("progress", t.onUploadProgress),
          t.cancelToken &&
            t.cancelToken.promise.then(function (t) {
              h && (h.abort(), n(t), (h = null));
            }),
          d || (d = null),
          h.send(d);
      });
    };
  },
  b575: function (t, e, n) {
    var r,
      i,
      o,
      a,
      s,
      l,
      c,
      u,
      d = n("da84"),
      f = n("06cf").f,
      h = n("2cf4").set,
      p = n("1cdc"),
      g = n("a4b4"),
      v = n("605d"),
      m = d.MutationObserver || d.WebKitMutationObserver,
      b = d.document,
      y = d.process,
      x = d.Promise,
      _ = f(d, "queueMicrotask"),
      w = _ && _.value;
    w ||
      ((r = function () {
        var t, e;
        v && (t = y.domain) && t.exit();
        while (i) {
          (e = i.fn), (i = i.next);
          try {
            e();
          } catch (n) {
            throw (i ? a() : (o = void 0), n);
          }
        }
        (o = void 0), t && t.enter();
      }),
      p || v || g || !m || !b
        ? x && x.resolve
          ? ((c = x.resolve(void 0)),
            (u = c.then),
            (a = function () {
              u.call(c, r);
            }))
          : (a = v
              ? function () {
                  y.nextTick(r);
                }
              : function () {
                  h.call(d, r);
                })
        : ((s = !0),
          (l = b.createTextNode("")),
          new m(r).observe(l, { characterData: !0 }),
          (a = function () {
            l.data = s = !s;
          }))),
      (t.exports =
        w ||
        function (t) {
          var e = { fn: t, next: void 0 };
          o && (o.next = e), i || ((i = e), a()), (o = e);
        });
  },
  b622: function (t, e, n) {
    var r = n("da84"),
      i = n("5692"),
      o = n("5135"),
      a = n("90e3"),
      s = n("4930"),
      l = n("fdbf"),
      c = i("wks"),
      u = r.Symbol,
      d = l ? u : (u && u.withoutSetter) || a;
    t.exports = function (t) {
      return (
        (o(c, t) && (s || "string" == typeof c[t])) ||
          (s && o(u, t) ? (c[t] = u[t]) : (c[t] = d("Symbol." + t))),
        c[t]
      );
    };
  },
  b65f: function (t, e, n) {
    var r = n("23e7"),
      i = Math.ceil,
      o = Math.floor;
    r(
      { target: "Math", stat: !0 },
      {
        trunc: function (t) {
          return (t > 0 ? o : i)(t);
        },
      }
    );
  },
  b680: function (t, e, n) {
    "use strict";
    var r = n("23e7"),
      i = n("a691"),
      o = n("408a"),
      a = n("1148"),
      s = n("d039"),
      l = (1).toFixed,
      c = Math.floor,
      u = function (t, e, n) {
        return 0 === e
          ? n
          : e % 2 === 1
          ? u(t, e - 1, n * t)
          : u(t * t, e / 2, n);
      },
      d = function (t) {
        var e = 0,
          n = t;
        while (n >= 4096) (e += 12), (n /= 4096);
        while (n >= 2) (e += 1), (n /= 2);
        return e;
      },
      f = function (t, e, n) {
        var r = -1,
          i = n;
        while (++r < 6) (i += e * t[r]), (t[r] = i % 1e7), (i = c(i / 1e7));
      },
      h = function (t, e) {
        var n = 6,
          r = 0;
        while (--n >= 0) (r += t[n]), (t[n] = c(r / e)), (r = (r % e) * 1e7);
      },
      p = function (t) {
        var e = 6,
          n = "";
        while (--e >= 0)
          if ("" !== n || 0 === e || 0 !== t[e]) {
            var r = String(t[e]);
            n = "" === n ? r : n + a.call("0", 7 - r.length) + r;
          }
        return n;
      },
      g =
        (l &&
          ("0.000" !== (8e-5).toFixed(3) ||
            "1" !== (0.9).toFixed(0) ||
            "1.25" !== (1.255).toFixed(2) ||
            "1000000000000000128" !== (0xde0b6b3a7640080).toFixed(0))) ||
        !s(function () {
          l.call({});
        });
    r(
      { target: "Number", proto: !0, forced: g },
      {
        toFixed: function (t) {
          var e,
            n,
            r,
            s,
            l = o(this),
            c = i(t),
            g = [0, 0, 0, 0, 0, 0],
            v = "",
            m = "0";
          if (c < 0 || c > 20) throw RangeError("Incorrect fraction digits");
          if (l != l) return "NaN";
          if (l <= -1e21 || l >= 1e21) return String(l);
          if ((l < 0 && ((v = "-"), (l = -l)), l > 1e-21))
            if (
              ((e = d(l * u(2, 69, 1)) - 69),
              (n = e < 0 ? l * u(2, -e, 1) : l / u(2, e, 1)),
              (n *= 4503599627370496),
              (e = 52 - e),
              e > 0)
            ) {
              f(g, 0, n), (r = c);
              while (r >= 7) f(g, 1e7, 0), (r -= 7);
              f(g, u(10, r, 1), 0), (r = e - 1);
              while (r >= 23) h(g, 1 << 23), (r -= 23);
              h(g, 1 << r), f(g, 1, 1), h(g, 2), (m = p(g));
            } else f(g, 0, n), f(g, 1 << -e, 0), (m = p(g) + a.call("0", c));
          return (
            c > 0
              ? ((s = m.length),
                (m =
                  v +
                  (s <= c
                    ? "0." + a.call("0", c - s) + m
                    : m.slice(0, s - c) + "." + m.slice(s - c))))
              : (m = v + m),
            m
          );
        },
      }
    );
  },
  b727: function (t, e, n) {
    var r = n("0366"),
      i = n("44ad"),
      o = n("7b0b"),
      a = n("50c4"),
      s = n("65f0"),
      l = [].push,
      c = function (t) {
        var e = 1 == t,
          n = 2 == t,
          c = 3 == t,
          u = 4 == t,
          d = 6 == t,
          f = 7 == t,
          h = 5 == t || d;
        return function (p, g, v, m) {
          for (
            var b,
              y,
              x = o(p),
              _ = i(x),
              w = r(g, v, 3),
              k = a(_.length),
              C = 0,
              M = m || s,
              S = e ? M(p, k) : n || f ? M(p, 0) : void 0;
            k > C;
            C++
          )
            if ((h || C in _) && ((b = _[C]), (y = w(b, C, x)), t))
              if (e) S[C] = y;
              else if (y)
                switch (t) {
                  case 3:
                    return !0;
                  case 5:
                    return b;
                  case 6:
                    return C;
                  case 2:
                    l.call(S, b);
                }
              else
                switch (t) {
                  case 4:
                    return !1;
                  case 7:
                    l.call(S, b);
                }
          return d ? -1 : c || u ? u : S;
        };
      };
    t.exports = {
      forEach: c(0),
      map: c(1),
      filter: c(2),
      some: c(3),
      every: c(4),
      find: c(5),
      findIndex: c(6),
      filterOut: c(7),
    };
  },
  bc3a: function (t, e, n) {
    t.exports = n("cee4");
  },
  c04e: function (t, e, n) {
    var r = n("861d");
    t.exports = function (t, e) {
      if (!r(t)) return t;
      var n, i;
      if (e && "function" == typeof (n = t.toString) && !r((i = n.call(t))))
        return i;
      if ("function" == typeof (n = t.valueOf) && !r((i = n.call(t)))) return i;
      if (!e && "function" == typeof (n = t.toString) && !r((i = n.call(t))))
        return i;
      throw TypeError("Can't convert object to primitive value");
    };
  },
  c290: function (t, e, n) {
    "use strict";
    n("423e");
  },
  c345: function (t, e, n) {
    "use strict";
    var r = n("c532"),
      i = [
        "age",
        "authorization",
        "content-length",
        "content-type",
        "etag",
        "expires",
        "from",
        "host",
        "if-modified-since",
        "if-unmodified-since",
        "last-modified",
        "location",
        "max-forwards",
        "proxy-authorization",
        "referer",
        "retry-after",
        "user-agent",
      ];
    t.exports = function (t) {
      var e,
        n,
        o,
        a = {};
      return t
        ? (r.forEach(t.split("\n"), function (t) {
            if (
              ((o = t.indexOf(":")),
              (e = r.trim(t.substr(0, o)).toLowerCase()),
              (n = r.trim(t.substr(o + 1))),
              e)
            ) {
              if (a[e] && i.indexOf(e) >= 0) return;
              a[e] =
                "set-cookie" === e
                  ? (a[e] ? a[e] : []).concat([n])
                  : a[e]
                  ? a[e] + ", " + n
                  : n;
            }
          }),
          a)
        : a;
    };
  },
  c35a: function (t, e, n) {
    var r = n("23e7"),
      i = n("7e12");
    r(
      { target: "Number", stat: !0, forced: Number.parseFloat != i },
      { parseFloat: i }
    );
  },
  c401: function (t, e, n) {
    "use strict";
    var r = n("c532");
    t.exports = function (t, e, n) {
      return (
        r.forEach(n, function (n) {
          t = n(t, e);
        }),
        t
      );
    };
  },
  c430: function (t, e) {
    t.exports = !1;
  },
  c532: function (t, e, n) {
    "use strict";
    var r = n("1d2b"),
      i = Object.prototype.toString;
    function o(t) {
      return "[object Array]" === i.call(t);
    }
    function a(t) {
      return "undefined" === typeof t;
    }
    function s(t) {
      return (
        null !== t &&
        !a(t) &&
        null !== t.constructor &&
        !a(t.constructor) &&
        "function" === typeof t.constructor.isBuffer &&
        t.constructor.isBuffer(t)
      );
    }
    function l(t) {
      return "[object ArrayBuffer]" === i.call(t);
    }
    function c(t) {
      return "undefined" !== typeof FormData && t instanceof FormData;
    }
    function u(t) {
      var e;
      return (
        (e =
          "undefined" !== typeof ArrayBuffer && ArrayBuffer.isView
            ? ArrayBuffer.isView(t)
            : t && t.buffer && t.buffer instanceof ArrayBuffer),
        e
      );
    }
    function d(t) {
      return "string" === typeof t;
    }
    function f(t) {
      return "number" === typeof t;
    }
    function h(t) {
      return null !== t && "object" === typeof t;
    }
    function p(t) {
      if ("[object Object]" !== i.call(t)) return !1;
      var e = Object.getPrototypeOf(t);
      return null === e || e === Object.prototype;
    }
    function g(t) {
      return "[object Date]" === i.call(t);
    }
    function v(t) {
      return "[object File]" === i.call(t);
    }
    function m(t) {
      return "[object Blob]" === i.call(t);
    }
    function b(t) {
      return "[object Function]" === i.call(t);
    }
    function y(t) {
      return h(t) && b(t.pipe);
    }
    function x(t) {
      return (
        "undefined" !== typeof URLSearchParams && t instanceof URLSearchParams
      );
    }
    function _(t) {
      return t.replace(/^\s*/, "").replace(/\s*$/, "");
    }
    function w() {
      return (
        ("undefined" === typeof navigator ||
          ("ReactNative" !== navigator.product &&
            "NativeScript" !== navigator.product &&
            "NS" !== navigator.product)) &&
        "undefined" !== typeof window &&
        "undefined" !== typeof document
      );
    }
    function k(t, e) {
      if (null !== t && "undefined" !== typeof t)
        if (("object" !== typeof t && (t = [t]), o(t)))
          for (var n = 0, r = t.length; n < r; n++) e.call(null, t[n], n, t);
        else
          for (var i in t)
            Object.prototype.hasOwnProperty.call(t, i) &&
              e.call(null, t[i], i, t);
    }
    function C() {
      var t = {};
      function e(e, n) {
        p(t[n]) && p(e)
          ? (t[n] = C(t[n], e))
          : p(e)
          ? (t[n] = C({}, e))
          : o(e)
          ? (t[n] = e.slice())
          : (t[n] = e);
      }
      for (var n = 0, r = arguments.length; n < r; n++) k(arguments[n], e);
      return t;
    }
    function M(t, e, n) {
      return (
        k(e, function (e, i) {
          t[i] = n && "function" === typeof e ? r(e, n) : e;
        }),
        t
      );
    }
    function S(t) {
      return 65279 === t.charCodeAt(0) && (t = t.slice(1)), t;
    }
    t.exports = {
      isArray: o,
      isArrayBuffer: l,
      isBuffer: s,
      isFormData: c,
      isArrayBufferView: u,
      isString: d,
      isNumber: f,
      isObject: h,
      isPlainObject: p,
      isUndefined: a,
      isDate: g,
      isFile: v,
      isBlob: m,
      isFunction: b,
      isStream: y,
      isURLSearchParams: x,
      isStandardBrowserEnv: w,
      forEach: k,
      merge: C,
      extend: M,
      trim: _,
      stripBOM: S,
    };
  },
  c6b6: function (t, e) {
    var n = {}.toString;
    t.exports = function (t) {
      return n.call(t).slice(8, -1);
    };
  },
  c6cd: function (t, e, n) {
    var r = n("da84"),
      i = n("ce4e"),
      o = "__core-js_shared__",
      a = r[o] || i(o, {});
    t.exports = a;
  },
  c8af: function (t, e, n) {
    "use strict";
    var r = n("c532");
    t.exports = function (t, e) {
      r.forEach(t, function (n, r) {
        r !== e &&
          r.toUpperCase() === e.toUpperCase() &&
          ((t[e] = n), delete t[r]);
      });
    };
  },
  ca84: function (t, e, n) {
    var r = n("5135"),
      i = n("fc6a"),
      o = n("4d64").indexOf,
      a = n("d012");
    t.exports = function (t, e) {
      var n,
        s = i(t),
        l = 0,
        c = [];
      for (n in s) !r(a, n) && r(s, n) && c.push(n);
      while (e.length > l) r(s, (n = e[l++])) && (~o(c, n) || c.push(n));
      return c;
    };
  },
  cc12: function (t, e, n) {
    var r = n("da84"),
      i = n("861d"),
      o = r.document,
      a = i(o) && i(o.createElement);
    t.exports = function (t) {
      return a ? o.createElement(t) : {};
    };
  },
  cca6: function (t, e, n) {
    var r = n("23e7"),
      i = n("60da");
    r(
      { target: "Object", stat: !0, forced: Object.assign !== i },
      { assign: i }
    );
  },
  cdf9: function (t, e, n) {
    var r = n("825a"),
      i = n("861d"),
      o = n("f069");
    t.exports = function (t, e) {
      if ((r(t), i(e) && e.constructor === t)) return e;
      var n = o.f(t),
        a = n.resolve;
      return a(e), n.promise;
    };
  },
  ce4e: function (t, e, n) {
    var r = n("da84"),
      i = n("9112");
    t.exports = function (t, e) {
      try {
        i(r, t, e);
      } catch (n) {
        r[t] = e;
      }
      return e;
    };
  },
  cee4: function (t, e, n) {
    "use strict";
    var r = n("c532"),
      i = n("1d2b"),
      o = n("0a06"),
      a = n("4a7b"),
      s = n("2444");
    function l(t) {
      var e = new o(t),
        n = i(o.prototype.request, e);
      return r.extend(n, o.prototype, e), r.extend(n, e), n;
    }
    var c = l(s);
    (c.Axios = o),
      (c.create = function (t) {
        return l(a(c.defaults, t));
      }),
      (c.Cancel = n("7a77")),
      (c.CancelToken = n("8df4")),
      (c.isCancel = n("2e67")),
      (c.all = function (t) {
        return Promise.all(t);
      }),
      (c.spread = n("0df6")),
      (c.isAxiosError = n("5f02")),
      (t.exports = c),
      (t.exports.default = c);
  },
  d012: function (t, e) {
    t.exports = {};
  },
  d039: function (t, e) {
    t.exports = function (t) {
      try {
        return !!t();
      } catch (e) {
        return !0;
      }
    };
  },
  d066: function (t, e, n) {
    var r = n("428f"),
      i = n("da84"),
      o = function (t) {
        return "function" == typeof t ? t : void 0;
      };
    t.exports = function (t, e) {
      return arguments.length < 2
        ? o(r[t]) || o(i[t])
        : (r[t] && r[t][e]) || (i[t] && i[t][e]);
    };
  },
  d1e7: function (t, e, n) {
    "use strict";
    var r = {}.propertyIsEnumerable,
      i = Object.getOwnPropertyDescriptor,
      o = i && !r.call({ 1: 2 }, 1);
    e.f = o
      ? function (t) {
          var e = i(this, t);
          return !!e && e.enumerable;
        }
      : r;
  },
  d2bb: function (t, e, n) {
    var r = n("825a"),
      i = n("3bbe");
    t.exports =
      Object.setPrototypeOf ||
      ("__proto__" in {}
        ? (function () {
            var t,
              e = !1,
              n = {};
            try {
              (t = Object.getOwnPropertyDescriptor(
                Object.prototype,
                "__proto__"
              ).set),
                t.call(n, []),
                (e = n instanceof Array);
            } catch (o) {}
            return function (n, o) {
              return r(n), i(o), e ? t.call(n, o) : (n.__proto__ = o), n;
            };
          })()
        : void 0);
  },
  d3b7: function (t, e, n) {
    var r = n("00ee"),
      i = n("6eeb"),
      o = n("b041");
    r || i(Object.prototype, "toString", o, { unsafe: !0 });
  },
  d44e: function (t, e, n) {
    var r = n("9bf2").f,
      i = n("5135"),
      o = n("b622"),
      a = o("toStringTag");
    t.exports = function (t, e, n) {
      t &&
        !i((t = n ? t : t.prototype), a) &&
        r(t, a, { configurable: !0, value: e });
    };
  },
  d58f: function (t, e, n) {
    var r = n("1c0b"),
      i = n("7b0b"),
      o = n("44ad"),
      a = n("50c4"),
      s = function (t) {
        return function (e, n, s, l) {
          r(n);
          var c = i(e),
            u = o(c),
            d = a(c.length),
            f = t ? d - 1 : 0,
            h = t ? -1 : 1;
          if (s < 2)
            while (1) {
              if (f in u) {
                (l = u[f]), (f += h);
                break;
              }
              if (((f += h), t ? f < 0 : d <= f))
                throw TypeError("Reduce of empty array with no initial value");
            }
          for (; t ? f >= 0 : d > f; f += h) f in u && (l = n(l, u[f], f, c));
          return l;
        };
      };
    t.exports = { left: s(!1), right: s(!0) };
  },
  d784: function (t, e, n) {
    "use strict";
    n("ac1f");
    var r = n("6eeb"),
      i = n("d039"),
      o = n("b622"),
      a = n("9263"),
      s = n("9112"),
      l = o("species"),
      c = !i(function () {
        var t = /./;
        return (
          (t.exec = function () {
            var t = [];
            return (t.groups = { a: "7" }), t;
          }),
          "7" !== "".replace(t, "$<a>")
        );
      }),
      u = (function () {
        return "$0" === "a".replace(/./, "$0");
      })(),
      d = o("replace"),
      f = (function () {
        return !!/./[d] && "" === /./[d]("a", "$0");
      })(),
      h = !i(function () {
        var t = /(?:)/,
          e = t.exec;
        t.exec = function () {
          return e.apply(this, arguments);
        };
        var n = "ab".split(t);
        return 2 !== n.length || "a" !== n[0] || "b" !== n[1];
      });
    t.exports = function (t, e, n, d) {
      var p = o(t),
        g = !i(function () {
          var e = {};
          return (
            (e[p] = function () {
              return 7;
            }),
            7 != ""[t](e)
          );
        }),
        v =
          g &&
          !i(function () {
            var e = !1,
              n = /a/;
            return (
              "split" === t &&
                ((n = {}),
                (n.constructor = {}),
                (n.constructor[l] = function () {
                  return n;
                }),
                (n.flags = ""),
                (n[p] = /./[p])),
              (n.exec = function () {
                return (e = !0), null;
              }),
              n[p](""),
              !e
            );
          });
      if (
        !g ||
        !v ||
        ("replace" === t && (!c || !u || f)) ||
        ("split" === t && !h)
      ) {
        var m = /./[p],
          b = n(
            p,
            ""[t],
            function (t, e, n, r, i) {
              return e.exec === a
                ? g && !i
                  ? { done: !0, value: m.call(e, n, r) }
                  : { done: !0, value: t.call(n, e, r) }
                : { done: !1 };
            },
            {
              REPLACE_KEEPS_$0: u,
              REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE: f,
            }
          ),
          y = b[0],
          x = b[1];
        r(String.prototype, t, y),
          r(
            RegExp.prototype,
            p,
            2 == e
              ? function (t, e) {
                  return x.call(t, this, e);
                }
              : function (t) {
                  return x.call(t, this);
                }
          );
      }
      d && s(RegExp.prototype[p], "sham", !0);
    };
  },
  d81d: function (t, e, n) {
    "use strict";
    var r = n("23e7"),
      i = n("b727").map,
      o = n("1dde"),
      a = o("map");
    r(
      { target: "Array", proto: !0, forced: !a },
      {
        map: function (t) {
          return i(this, t, arguments.length > 1 ? arguments[1] : void 0);
        },
      }
    );
  },
  d925: function (t, e, n) {
    "use strict";
    t.exports = function (t) {
      return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(t);
    };
  },
  da84: function (t, e, n) {
    (function (e) {
      var n = function (t) {
        return t && t.Math == Math && t;
      };
      t.exports =
        n("object" == typeof globalThis && globalThis) ||
        n("object" == typeof window && window) ||
        n("object" == typeof self && self) ||
        n("object" == typeof e && e) ||
        (function () {
          return this;
        })() ||
        Function("return this")();
    }).call(this, n("24aa"));
  },
  ddb0: function (t, e, n) {
    var r = n("da84"),
      i = n("fdbc"),
      o = n("e260"),
      a = n("9112"),
      s = n("b622"),
      l = s("iterator"),
      c = s("toStringTag"),
      u = o.values;
    for (var d in i) {
      var f = r[d],
        h = f && f.prototype;
      if (h) {
        if (h[l] !== u)
          try {
            a(h, l, u);
          } catch (g) {
            h[l] = u;
          }
        if ((h[c] || a(h, c, d), i[d]))
          for (var p in o)
            if (h[p] !== o[p])
              try {
                a(h, p, o[p]);
              } catch (g) {
                h[p] = o[p];
              }
      }
    }
  },
  df75: function (t, e, n) {
    var r = n("ca84"),
      i = n("7839");
    t.exports =
      Object.keys ||
      function (t) {
        return r(t, i);
      };
  },
  df7c: function (t, e, n) {
    (function (t) {
      function n(t, e) {
        for (var n = 0, r = t.length - 1; r >= 0; r--) {
          var i = t[r];
          "." === i
            ? t.splice(r, 1)
            : ".." === i
            ? (t.splice(r, 1), n++)
            : n && (t.splice(r, 1), n--);
        }
        if (e) for (; n--; n) t.unshift("..");
        return t;
      }
      function r(t) {
        "string" !== typeof t && (t += "");
        var e,
          n = 0,
          r = -1,
          i = !0;
        for (e = t.length - 1; e >= 0; --e)
          if (47 === t.charCodeAt(e)) {
            if (!i) {
              n = e + 1;
              break;
            }
          } else -1 === r && ((i = !1), (r = e + 1));
        return -1 === r ? "" : t.slice(n, r);
      }
      function i(t, e) {
        if (t.filter) return t.filter(e);
        for (var n = [], r = 0; r < t.length; r++)
          e(t[r], r, t) && n.push(t[r]);
        return n;
      }
      (e.resolve = function () {
        for (var e = "", r = !1, o = arguments.length - 1; o >= -1 && !r; o--) {
          var a = o >= 0 ? arguments[o] : t.cwd();
          if ("string" !== typeof a)
            throw new TypeError("Arguments to path.resolve must be strings");
          a && ((e = a + "/" + e), (r = "/" === a.charAt(0)));
        }
        return (
          (e = n(
            i(e.split("/"), function (t) {
              return !!t;
            }),
            !r
          ).join("/")),
          (r ? "/" : "") + e || "."
        );
      }),
        (e.normalize = function (t) {
          var r = e.isAbsolute(t),
            a = "/" === o(t, -1);
          return (
            (t = n(
              i(t.split("/"), function (t) {
                return !!t;
              }),
              !r
            ).join("/")),
            t || r || (t = "."),
            t && a && (t += "/"),
            (r ? "/" : "") + t
          );
        }),
        (e.isAbsolute = function (t) {
          return "/" === t.charAt(0);
        }),
        (e.join = function () {
          var t = Array.prototype.slice.call(arguments, 0);
          return e.normalize(
            i(t, function (t, e) {
              if ("string" !== typeof t)
                throw new TypeError("Arguments to path.join must be strings");
              return t;
            }).join("/")
          );
        }),
        (e.relative = function (t, n) {
          function r(t) {
            for (var e = 0; e < t.length; e++) if ("" !== t[e]) break;
            for (var n = t.length - 1; n >= 0; n--) if ("" !== t[n]) break;
            return e > n ? [] : t.slice(e, n - e + 1);
          }
          (t = e.resolve(t).substr(1)), (n = e.resolve(n).substr(1));
          for (
            var i = r(t.split("/")),
              o = r(n.split("/")),
              a = Math.min(i.length, o.length),
              s = a,
              l = 0;
            l < a;
            l++
          )
            if (i[l] !== o[l]) {
              s = l;
              break;
            }
          var c = [];
          for (l = s; l < i.length; l++) c.push("..");
          return (c = c.concat(o.slice(s))), c.join("/");
        }),
        (e.sep = "/"),
        (e.delimiter = ":"),
        (e.dirname = function (t) {
          if (("string" !== typeof t && (t += ""), 0 === t.length)) return ".";
          for (
            var e = t.charCodeAt(0),
              n = 47 === e,
              r = -1,
              i = !0,
              o = t.length - 1;
            o >= 1;
            --o
          )
            if (((e = t.charCodeAt(o)), 47 === e)) {
              if (!i) {
                r = o;
                break;
              }
            } else i = !1;
          return -1 === r
            ? n
              ? "/"
              : "."
            : n && 1 === r
            ? "/"
            : t.slice(0, r);
        }),
        (e.basename = function (t, e) {
          var n = r(t);
          return (
            e &&
              n.substr(-1 * e.length) === e &&
              (n = n.substr(0, n.length - e.length)),
            n
          );
        }),
        (e.extname = function (t) {
          "string" !== typeof t && (t += "");
          for (
            var e = -1, n = 0, r = -1, i = !0, o = 0, a = t.length - 1;
            a >= 0;
            --a
          ) {
            var s = t.charCodeAt(a);
            if (47 !== s)
              -1 === r && ((i = !1), (r = a + 1)),
                46 === s
                  ? -1 === e
                    ? (e = a)
                    : 1 !== o && (o = 1)
                  : -1 !== e && (o = -1);
            else if (!i) {
              n = a + 1;
              break;
            }
          }
          return -1 === e ||
            -1 === r ||
            0 === o ||
            (1 === o && e === r - 1 && e === n + 1)
            ? ""
            : t.slice(e, r);
        });
      var o =
        "b" === "ab".substr(-1)
          ? function (t, e, n) {
              return t.substr(e, n);
            }
          : function (t, e, n) {
              return e < 0 && (e = t.length + e), t.substr(e, n);
            };
    }).call(this, n("4362"));
  },
  e163: function (t, e, n) {
    var r = n("5135"),
      i = n("7b0b"),
      o = n("f772"),
      a = n("e177"),
      s = o("IE_PROTO"),
      l = Object.prototype;
    t.exports = a
      ? Object.getPrototypeOf
      : function (t) {
          return (
            (t = i(t)),
            r(t, s)
              ? t[s]
              : "function" == typeof t.constructor && t instanceof t.constructor
              ? t.constructor.prototype
              : t instanceof Object
              ? l
              : null
          );
        };
  },
  e177: function (t, e, n) {
    var r = n("d039");
    t.exports = !r(function () {
      function t() {}
      return (
        (t.prototype.constructor = null),
        Object.getPrototypeOf(new t()) !== t.prototype
      );
    });
  },
  e260: function (t, e, n) {
    "use strict";
    var r = n("fc6a"),
      i = n("44d2"),
      o = n("3f8c"),
      a = n("69f3"),
      s = n("7dd0"),
      l = "Array Iterator",
      c = a.set,
      u = a.getterFor(l);
    (t.exports = s(
      Array,
      "Array",
      function (t, e) {
        c(this, { type: l, target: r(t), index: 0, kind: e });
      },
      function () {
        var t = u(this),
          e = t.target,
          n = t.kind,
          r = t.index++;
        return !e || r >= e.length
          ? ((t.target = void 0), { value: void 0, done: !0 })
          : "keys" == n
          ? { value: r, done: !1 }
          : "values" == n
          ? { value: e[r], done: !1 }
          : { value: [r, e[r]], done: !1 };
      },
      "values"
    )),
      (o.Arguments = o.Array),
      i("keys"),
      i("values"),
      i("entries");
  },
  e2cc: function (t, e, n) {
    var r = n("6eeb");
    t.exports = function (t, e, n) {
      for (var i in e) r(t, i, e[i], n);
      return t;
    };
  },
  e667: function (t, e) {
    t.exports = function (t) {
      try {
        return { error: !1, value: t() };
      } catch (e) {
        return { error: !0, value: e };
      }
    };
  },
  e683: function (t, e, n) {
    "use strict";
    t.exports = function (t, e) {
      return e ? t.replace(/\/+$/, "") + "/" + e.replace(/^\/+/, "") : t;
    };
  },
  e6cf: function (t, e, n) {
    "use strict";
    var r,
      i,
      o,
      a,
      s = n("23e7"),
      l = n("c430"),
      c = n("da84"),
      u = n("d066"),
      d = n("fea9"),
      f = n("6eeb"),
      h = n("e2cc"),
      p = n("d44e"),
      g = n("2626"),
      v = n("861d"),
      m = n("1c0b"),
      b = n("19aa"),
      y = n("8925"),
      x = n("2266"),
      _ = n("1c7e"),
      w = n("4840"),
      k = n("2cf4").set,
      C = n("b575"),
      M = n("cdf9"),
      S = n("44de"),
      A = n("f069"),
      T = n("e667"),
      O = n("69f3"),
      E = n("94ca"),
      P = n("b622"),
      L = n("605d"),
      D = n("2d00"),
      I = P("species"),
      N = "Promise",
      F = O.get,
      R = O.set,
      j = O.getterFor(N),
      z = d,
      H = c.TypeError,
      B = c.document,
      V = c.process,
      $ = u("fetch"),
      W = A.f,
      U = W,
      q = !!(B && B.createEvent && c.dispatchEvent),
      Y = "function" == typeof PromiseRejectionEvent,
      G = "unhandledrejection",
      X = "rejectionhandled",
      K = 0,
      Z = 1,
      J = 2,
      Q = 1,
      tt = 2,
      et = E(N, function () {
        var t = y(z) !== String(z);
        if (!t) {
          if (66 === D) return !0;
          if (!L && !Y) return !0;
        }
        if (l && !z.prototype["finally"]) return !0;
        if (D >= 51 && /native code/.test(z)) return !1;
        var e = z.resolve(1),
          n = function (t) {
            t(
              function () {},
              function () {}
            );
          },
          r = (e.constructor = {});
        return (r[I] = n), !(e.then(function () {}) instanceof n);
      }),
      nt =
        et ||
        !_(function (t) {
          z.all(t)["catch"](function () {});
        }),
      rt = function (t) {
        var e;
        return !(!v(t) || "function" != typeof (e = t.then)) && e;
      },
      it = function (t, e) {
        if (!t.notified) {
          t.notified = !0;
          var n = t.reactions;
          C(function () {
            var r = t.value,
              i = t.state == Z,
              o = 0;
            while (n.length > o) {
              var a,
                s,
                l,
                c = n[o++],
                u = i ? c.ok : c.fail,
                d = c.resolve,
                f = c.reject,
                h = c.domain;
              try {
                u
                  ? (i || (t.rejection === tt && lt(t), (t.rejection = Q)),
                    !0 === u
                      ? (a = r)
                      : (h && h.enter(), (a = u(r)), h && (h.exit(), (l = !0))),
                    a === c.promise
                      ? f(H("Promise-chain cycle"))
                      : (s = rt(a))
                      ? s.call(a, d, f)
                      : d(a))
                  : f(r);
              } catch (p) {
                h && !l && h.exit(), f(p);
              }
            }
            (t.reactions = []), (t.notified = !1), e && !t.rejection && at(t);
          });
        }
      },
      ot = function (t, e, n) {
        var r, i;
        q
          ? ((r = B.createEvent("Event")),
            (r.promise = e),
            (r.reason = n),
            r.initEvent(t, !1, !0),
            c.dispatchEvent(r))
          : (r = { promise: e, reason: n }),
          !Y && (i = c["on" + t])
            ? i(r)
            : t === G && S("Unhandled promise rejection", n);
      },
      at = function (t) {
        k.call(c, function () {
          var e,
            n = t.facade,
            r = t.value,
            i = st(t);
          if (
            i &&
            ((e = T(function () {
              L ? V.emit("unhandledRejection", r, n) : ot(G, n, r);
            })),
            (t.rejection = L || st(t) ? tt : Q),
            e.error)
          )
            throw e.value;
        });
      },
      st = function (t) {
        return t.rejection !== Q && !t.parent;
      },
      lt = function (t) {
        k.call(c, function () {
          var e = t.facade;
          L ? V.emit("rejectionHandled", e) : ot(X, e, t.value);
        });
      },
      ct = function (t, e, n) {
        return function (r) {
          t(e, r, n);
        };
      },
      ut = function (t, e, n) {
        t.done ||
          ((t.done = !0),
          n && (t = n),
          (t.value = e),
          (t.state = J),
          it(t, !0));
      },
      dt = function (t, e, n) {
        if (!t.done) {
          (t.done = !0), n && (t = n);
          try {
            if (t.facade === e) throw H("Promise can't be resolved itself");
            var r = rt(e);
            r
              ? C(function () {
                  var n = { done: !1 };
                  try {
                    r.call(e, ct(dt, n, t), ct(ut, n, t));
                  } catch (i) {
                    ut(n, i, t);
                  }
                })
              : ((t.value = e), (t.state = Z), it(t, !1));
          } catch (i) {
            ut({ done: !1 }, i, t);
          }
        }
      };
    et &&
      ((z = function (t) {
        b(this, z, N), m(t), r.call(this);
        var e = F(this);
        try {
          t(ct(dt, e), ct(ut, e));
        } catch (n) {
          ut(e, n);
        }
      }),
      (r = function (t) {
        R(this, {
          type: N,
          done: !1,
          notified: !1,
          parent: !1,
          reactions: [],
          rejection: !1,
          state: K,
          value: void 0,
        });
      }),
      (r.prototype = h(z.prototype, {
        then: function (t, e) {
          var n = j(this),
            r = W(w(this, z));
          return (
            (r.ok = "function" != typeof t || t),
            (r.fail = "function" == typeof e && e),
            (r.domain = L ? V.domain : void 0),
            (n.parent = !0),
            n.reactions.push(r),
            n.state != K && it(n, !1),
            r.promise
          );
        },
        catch: function (t) {
          return this.then(void 0, t);
        },
      })),
      (i = function () {
        var t = new r(),
          e = F(t);
        (this.promise = t),
          (this.resolve = ct(dt, e)),
          (this.reject = ct(ut, e));
      }),
      (A.f = W =
        function (t) {
          return t === z || t === o ? new i(t) : U(t);
        }),
      l ||
        "function" != typeof d ||
        ((a = d.prototype.then),
        f(
          d.prototype,
          "then",
          function (t, e) {
            var n = this;
            return new z(function (t, e) {
              a.call(n, t, e);
            }).then(t, e);
          },
          { unsafe: !0 }
        ),
        "function" == typeof $ &&
          s(
            { global: !0, enumerable: !0, forced: !0 },
            {
              fetch: function (t) {
                return M(z, $.apply(c, arguments));
              },
            }
          ))),
      s({ global: !0, wrap: !0, forced: et }, { Promise: z }),
      p(z, N, !1, !0),
      g(N),
      (o = u(N)),
      s(
        { target: N, stat: !0, forced: et },
        {
          reject: function (t) {
            var e = W(this);
            return e.reject.call(void 0, t), e.promise;
          },
        }
      ),
      s(
        { target: N, stat: !0, forced: l || et },
        {
          resolve: function (t) {
            return M(l && this === o ? z : this, t);
          },
        }
      ),
      s(
        { target: N, stat: !0, forced: nt },
        {
          all: function (t) {
            var e = this,
              n = W(e),
              r = n.resolve,
              i = n.reject,
              o = T(function () {
                var n = m(e.resolve),
                  o = [],
                  a = 0,
                  s = 1;
                x(t, function (t) {
                  var l = a++,
                    c = !1;
                  o.push(void 0),
                    s++,
                    n.call(e, t).then(function (t) {
                      c || ((c = !0), (o[l] = t), --s || r(o));
                    }, i);
                }),
                  --s || r(o);
              });
            return o.error && i(o.value), n.promise;
          },
          race: function (t) {
            var e = this,
              n = W(e),
              r = n.reject,
              i = T(function () {
                var i = m(e.resolve);
                x(t, function (t) {
                  i.call(e, t).then(n.resolve, r);
                });
              });
            return i.error && r(i.value), n.promise;
          },
        }
      );
  },
  e893: function (t, e, n) {
    var r = n("5135"),
      i = n("56ef"),
      o = n("06cf"),
      a = n("9bf2");
    t.exports = function (t, e) {
      for (var n = i(e), s = a.f, l = o.f, c = 0; c < n.length; c++) {
        var u = n[c];
        r(t, u) || s(t, u, l(e, u));
      }
    };
  },
  e8b5: function (t, e, n) {
    var r = n("c6b6");
    t.exports =
      Array.isArray ||
      function (t) {
        return "Array" == r(t);
      };
  },
  e95a: function (t, e, n) {
    var r = n("b622"),
      i = n("3f8c"),
      o = r("iterator"),
      a = Array.prototype;
    t.exports = function (t) {
      return void 0 !== t && (i.Array === t || a[o] === t);
    };
  },
  f069: function (t, e, n) {
    "use strict";
    var r = n("1c0b"),
      i = function (t) {
        var e, n;
        (this.promise = new t(function (t, r) {
          if (void 0 !== e || void 0 !== n)
            throw TypeError("Bad Promise constructor");
          (e = t), (n = r);
        })),
          (this.resolve = r(e)),
          (this.reject = r(n));
      };
    t.exports.f = function (t) {
      return new i(t);
    };
  },
  f5df: function (t, e, n) {
    var r = n("00ee"),
      i = n("c6b6"),
      o = n("b622"),
      a = o("toStringTag"),
      s =
        "Arguments" ==
        i(
          (function () {
            return arguments;
          })()
        ),
      l = function (t, e) {
        try {
          return t[e];
        } catch (n) {}
      };
    t.exports = r
      ? i
      : function (t) {
          var e, n, r;
          return void 0 === t
            ? "Undefined"
            : null === t
            ? "Null"
            : "string" == typeof (n = l((e = Object(t)), a))
            ? n
            : s
            ? i(e)
            : "Object" == (r = i(e)) && "function" == typeof e.callee
            ? "Arguments"
            : r;
        };
  },
  f6b4: function (t, e, n) {
    "use strict";
    var r = n("c532");
    function i() {
      this.handlers = [];
    }
    (i.prototype.use = function (t, e) {
      return (
        this.handlers.push({ fulfilled: t, rejected: e }),
        this.handlers.length - 1
      );
    }),
      (i.prototype.eject = function (t) {
        this.handlers[t] && (this.handlers[t] = null);
      }),
      (i.prototype.forEach = function (t) {
        r.forEach(this.handlers, function (e) {
          null !== e && t(e);
        });
      }),
      (t.exports = i);
  },
  f772: function (t, e, n) {
    var r = n("5692"),
      i = n("90e3"),
      o = r("keys");
    t.exports = function (t) {
      return o[t] || (o[t] = i(t));
    };
  },
  fc6a: function (t, e, n) {
    var r = n("44ad"),
      i = n("1d80");
    t.exports = function (t) {
      return r(i(t));
    };
  },
  fdbc: function (t, e) {
    t.exports = {
      CSSRuleList: 0,
      CSSStyleDeclaration: 0,
      CSSValueList: 0,
      ClientRectList: 0,
      DOMRectList: 0,
      DOMStringList: 0,
      DOMTokenList: 1,
      DataTransferItemList: 0,
      FileList: 0,
      HTMLAllCollection: 0,
      HTMLCollection: 0,
      HTMLFormElement: 0,
      HTMLSelectElement: 0,
      MediaList: 0,
      MimeTypeArray: 0,
      NamedNodeMap: 0,
      NodeList: 1,
      PaintRequestList: 0,
      Plugin: 0,
      PluginArray: 0,
      SVGLengthList: 0,
      SVGNumberList: 0,
      SVGPathSegList: 0,
      SVGPointList: 0,
      SVGStringList: 0,
      SVGTransformList: 0,
      SourceBufferList: 0,
      StyleSheetList: 0,
      TextTrackCueList: 0,
      TextTrackList: 0,
      TouchList: 0,
    };
  },
  fdbf: function (t, e, n) {
    var r = n("4930");
    t.exports = r && !Symbol.sham && "symbol" == typeof Symbol.iterator;
  },
  fea9: function (t, e, n) {
    var r = n("da84");
    t.exports = r.Promise;
  },
});
/* eslint-enable */
