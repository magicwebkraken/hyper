import { a as No, b as ec } from "./chunk-ZU6Q67UT.js";
import { a as os, b as Qa } from "./chunk-N4IN2AJ3.js";
import { a as ss, b as Ja } from "./chunk-QV7AMSUB.js";
import { a as Po, b as To, c as Co } from "./chunk-L4DL45FQ.js";
import {
  a as Bt,
  b as ts,
  c as ns,
  d as Lo,
  l as et,
  m as Ct,
  p as Fe,
  s as Yt,
  t as rs,
} from "./chunk-XMCF3TCT.js";
import { a as es, b as Oo, c as Xa } from "./chunk-CP7YJKJV.js";
import {
  a as F,
  b as Y,
  d as dt,
  e as le,
  f as St,
  g as Jr,
  i as rt,
  j as Qr,
  l as E,
} from "./chunk-QE6IBIJD.js";
function ht(r, e = "") {
  if (typeof r != "boolean") {
    let t = e && `"${e}"`;
    throw new Error(t + "expected boolean, got type=" + typeof r);
  }
  return r;
}
function Ye(r, e, t = "") {
  let n = Bt(r),
    s = r?.length,
    o = e !== void 0;
  if (!n || (o && s !== e)) {
    let i = t && `"${t}" `,
      c = o ? ` of length ${e}` : "",
      a = n ? `length=${s}` : `type=${typeof r}`;
    throw new Error(i + "expected Uint8Array" + c + ", got " + a);
  }
  return r;
}
function mn(r) {
  let e = r.toString(16);
  return e.length & 1 ? "0" + e : e;
}
function Uo(r) {
  if (typeof r != "string")
    throw new Error("hex string expected, got " + typeof r);
  return r === "" ? cs : BigInt("0x" + r);
}
function Zt(r) {
  return Uo(et(r));
}
function Ot(r) {
  return ns(r), Uo(et(Uint8Array.from(r).reverse()));
}
function jn(r, e) {
  return Ct(r.toString(16).padStart(e * 2, "0"));
}
function us(r, e) {
  return jn(r, e).reverse();
}
function ge(r, e, t) {
  let n;
  if (typeof e == "string")
    try {
      n = Ct(e);
    } catch (o) {
      throw new Error(r + " must be hex string or Uint8Array, cause: " + o);
    }
  else if (Bt(e)) n = Uint8Array.from(e);
  else throw new Error(r + " must be hex string or Uint8Array");
  let s = n.length;
  if (typeof t == "number" && s !== t)
    throw new Error(r + " of length " + t + " expected, got " + s);
  return n;
}
function fs(r) {
  return Uint8Array.from(r);
}
function zo(r, e, t) {
  return is(r) && is(e) && is(t) && e <= r && r < t;
}
function bn(r, e, t, n) {
  if (!zo(e, t, n))
    throw new Error(
      "expected valid " + r + ": " + t + " <= n < " + n + ", got " + e
    );
}
function Hn(r) {
  let e;
  for (e = 0; r > cs; r >>= as, e += 1);
  return e;
}
function Ko(r, e, t) {
  if (typeof r != "number" || r < 2)
    throw new Error("hashLen must be a number");
  if (typeof e != "number" || e < 2)
    throw new Error("qByteLen must be a number");
  if (typeof t != "function") throw new Error("hmacFn must be a function");
  let n = (l) => new Uint8Array(l),
    s = (l) => Uint8Array.of(l),
    o = n(r),
    i = n(r),
    c = 0,
    a = () => {
      o.fill(1), i.fill(0), (c = 0);
    },
    u = (...l) => t(i, o, ...l),
    d = (l = n(0)) => {
      (i = u(s(0), l)),
        (o = u()),
        l.length !== 0 && ((i = u(s(1), l)), (o = u()));
    },
    g = () => {
      if (c++ >= 1e3) throw new Error("drbg: tried 1000 values");
      let l = 0,
        h = [];
      for (; l < e; ) {
        o = u();
        let m = o.slice();
        h.push(m), (l += o.length);
      }
      return Fe(...h);
    };
  return (l, h) => {
    a(), d(l);
    let m;
    for (; !(m = h(g())); ) d();
    return a(), m;
  };
}
function It(r, e, t = {}) {
  if (!r || typeof r != "object")
    throw new Error("expected valid options object");
  function n(s, o, i) {
    let c = r[s];
    if (i && c === void 0) return;
    let a = typeof c;
    if (a !== o || c === null)
      throw new Error(`param "${s}" is invalid: expected ${o}, got ${a}`);
  }
  Object.entries(e).forEach(([s, o]) => n(s, o, !1)),
    Object.entries(t).forEach(([s, o]) => n(s, o, !0));
}
function Xt(r) {
  let e = new WeakMap();
  return (t, ...n) => {
    let s = e.get(t);
    if (s !== void 0) return s;
    let o = r(t, ...n);
    return e.set(t, o), o;
  };
}
var cs,
  as,
  is,
  Et,
  wn = le(() => {
    "use strict";
    rs();
    rs();
    (cs = BigInt(0)), (as = BigInt(1));
    is = (r) => typeof r == "bigint" && cs <= r;
    Et = (r) => (as << BigInt(r)) - as;
  });
function Ee(r, e) {
  let t = r % e;
  return t >= De ? t : e + t;
}
function me(r, e, t) {
  let n = r;
  for (; e-- > De; ) (n *= n), (n %= t);
  return n;
}
function qo(r, e) {
  if (r === De) throw new Error("invert: expected non-zero number");
  if (e <= De) throw new Error("invert: expected positive modulus, got " + e);
  let t = Ee(r, e),
    n = e,
    s = De,
    o = _e,
    i = _e,
    c = De;
  for (; t !== De; ) {
    let u = n / t,
      d = n % t,
      g = s - i * u,
      y = o - c * u;
    (n = t), (t = d), (s = i), (o = c), (i = g), (c = y);
  }
  if (n !== _e) throw new Error("invert: does not exist");
  return Ee(s, e);
}
function ls(r, e, t) {
  if (!r.eql(r.sqr(e), t)) throw new Error("Cannot find square root");
}
function jo(r, e) {
  let t = (r.ORDER + _e) / Mo,
    n = r.pow(e, t);
  return ls(r, n, e), n;
}
function rc(r, e) {
  let t = (r.ORDER - Vo) / $o,
    n = r.mul(e, Nt),
    s = r.pow(n, t),
    o = r.mul(e, s),
    i = r.mul(r.mul(o, Nt), s),
    c = r.mul(o, r.sub(i, r.ONE));
  return ls(r, c, e), c;
}
function sc(r) {
  let e = Je(r),
    t = Ho(r),
    n = t(e, e.neg(e.ONE)),
    s = t(e, n),
    o = t(e, e.neg(n)),
    i = (r + tc) / Fo;
  return (c, a) => {
    let u = c.pow(a, i),
      d = c.mul(u, n),
      g = c.mul(u, s),
      y = c.mul(u, o),
      l = c.eql(c.sqr(d), a),
      h = c.eql(c.sqr(g), a);
    (u = c.cmov(u, d, l)), (d = c.cmov(y, g, h));
    let m = c.eql(c.sqr(d), a),
      k = c.cmov(u, d, m);
    return ls(c, k, a), k;
  };
}
function Ho(r) {
  if (r < Do) throw new Error("sqrt is not defined for small field");
  let e = r - _e,
    t = 0;
  for (; e % Nt === De; ) (e /= Nt), t++;
  let n = Nt,
    s = Je(r);
  for (; Wo(s, n) === 1; )
    if (n++ > 1e3)
      throw new Error("Cannot find square root: probably non-prime P");
  if (t === 1) return jo;
  let o = s.pow(n, e),
    i = (e + _e) / Nt;
  return function (a, u) {
    if (a.is0(u)) return u;
    if (Wo(a, u) !== 1) throw new Error("Cannot find square root");
    let d = t,
      g = a.mul(a.ONE, o),
      y = a.pow(u, e),
      l = a.pow(u, i);
    for (; !a.eql(y, a.ONE); ) {
      if (a.is0(y)) return a.ZERO;
      let h = 1,
        m = a.sqr(y);
      for (; !a.eql(m, a.ONE); )
        if ((h++, (m = a.sqr(m)), h === d))
          throw new Error("Cannot find square root");
      let k = _e << BigInt(d - h - 1),
        w = a.pow(g, k);
      (d = h), (g = a.sqr(w)), (y = a.mul(y, g)), (l = a.mul(l, w));
    }
    return l;
  };
}
function oc(r) {
  return r % Mo === Do
    ? jo
    : r % $o === Vo
    ? rc
    : r % Fo === nc
    ? sc(r)
    : Ho(r);
}
function ds(r) {
  let e = { ORDER: "bigint", MASK: "bigint", BYTES: "number", BITS: "number" },
    t = ic.reduce((n, s) => ((n[s] = "function"), n), e);
  return It(r, t), r;
}
function ac(r, e, t) {
  if (t < De) throw new Error("invalid exponent, negatives unsupported");
  if (t === De) return r.ONE;
  if (t === _e) return e;
  let n = r.ONE,
    s = e;
  for (; t > De; ) t & _e && (n = r.mul(n, s)), (s = r.sqr(s)), (t >>= _e);
  return n;
}
function kn(r, e, t = !1) {
  let n = new Array(e.length).fill(t ? r.ZERO : void 0),
    s = e.reduce(
      (i, c, a) => (r.is0(c) ? i : ((n[a] = i), r.mul(i, c))),
      r.ONE
    ),
    o = r.inv(s);
  return (
    e.reduceRight(
      (i, c, a) => (r.is0(c) ? i : ((n[a] = r.mul(i, n[a])), r.mul(i, c))),
      o
    ),
    n
  );
}
function Wo(r, e) {
  let t = (r.ORDER - _e) / Nt,
    n = r.pow(e, t),
    s = r.eql(n, r.ONE),
    o = r.eql(n, r.ZERO),
    i = r.eql(n, r.neg(r.ONE));
  if (!s && !o && !i) throw new Error("invalid Legendre symbol result");
  return s ? 1 : o ? 0 : -1;
}
function Gn(r, e) {
  e !== void 0 && ts(e);
  let t = e !== void 0 ? e : r.toString(2).length,
    n = Math.ceil(t / 8);
  return { nBitLength: t, nByteLength: n };
}
function Je(r, e, t = !1, n = {}) {
  if (r <= De) throw new Error("invalid field: expected ORDER > 0, got " + r);
  let s,
    o,
    i = !1,
    c;
  if (typeof e == "object" && e != null) {
    if (n.sqrt || t) throw new Error("cannot specify opts in two arguments");
    let y = e;
    y.BITS && (s = y.BITS),
      y.sqrt && (o = y.sqrt),
      typeof y.isLE == "boolean" && (t = y.isLE),
      typeof y.modFromBytes == "boolean" && (i = y.modFromBytes),
      (c = y.allowedLengths);
  } else typeof e == "number" && (s = e), n.sqrt && (o = n.sqrt);
  let { nBitLength: a, nByteLength: u } = Gn(r, s);
  if (u > 2048)
    throw new Error("invalid field: expected ORDER of <= 2048 bytes");
  let d,
    g = Object.freeze({
      ORDER: r,
      isLE: t,
      BITS: a,
      BYTES: u,
      MASK: Et(a),
      ZERO: De,
      ONE: _e,
      allowedLengths: c,
      create: (y) => Ee(y, r),
      isValid: (y) => {
        if (typeof y != "bigint")
          throw new Error(
            "invalid field element: expected bigint, got " + typeof y
          );
        return De <= y && y < r;
      },
      is0: (y) => y === De,
      isValidNot0: (y) => !g.is0(y) && g.isValid(y),
      isOdd: (y) => (y & _e) === _e,
      neg: (y) => Ee(-y, r),
      eql: (y, l) => y === l,
      sqr: (y) => Ee(y * y, r),
      add: (y, l) => Ee(y + l, r),
      sub: (y, l) => Ee(y - l, r),
      mul: (y, l) => Ee(y * l, r),
      pow: (y, l) => ac(g, y, l),
      div: (y, l) => Ee(y * qo(l, r), r),
      sqrN: (y) => y * y,
      addN: (y, l) => y + l,
      subN: (y, l) => y - l,
      mulN: (y, l) => y * l,
      inv: (y) => qo(y, r),
      sqrt: o || ((y) => (d || (d = oc(r)), d(g, y))),
      toBytes: (y) => (t ? us(y, u) : jn(y, u)),
      fromBytes: (y, l = !0) => {
        if (c) {
          if (!c.includes(y.length) || y.length > u)
            throw new Error(
              "Field.fromBytes: expected " + c + " bytes, got " + y.length
            );
          let m = new Uint8Array(u);
          m.set(y, t ? 0 : m.length - y.length), (y = m);
        }
        if (y.length !== u)
          throw new Error(
            "Field.fromBytes: expected " + u + " bytes, got " + y.length
          );
        let h = t ? Ot(y) : Zt(y);
        if ((i && (h = Ee(h, r)), !l && !g.isValid(h)))
          throw new Error("invalid field element: outside of range 0..ORDER");
        return h;
      },
      invertBatch: (y) => kn(g, y),
      cmov: (y, l, h) => (h ? l : y),
    });
  return Object.freeze(g);
}
function Yo(r) {
  if (typeof r != "bigint") throw new Error("field order must be bigint");
  let e = r.toString(2).length;
  return Math.ceil(e / 8);
}
function hs(r) {
  let e = Yo(r);
  return e + Math.ceil(e / 2);
}
function ys(r, e, t = !1) {
  let n = r.length,
    s = Yo(e),
    o = hs(e);
  if (n < 16 || n < o || n > 1024)
    throw new Error("expected " + o + "-1024 bytes of input, got " + n);
  let i = t ? Ot(r) : Zt(r),
    c = Ee(i, e - _e) + _e;
  return t ? us(c, s) : jn(c, s);
}
var De,
  _e,
  Nt,
  Do,
  Mo,
  Vo,
  tc,
  $o,
  nc,
  Fo,
  Go,
  ic,
  Jt = le(() => {
    "use strict";
    wn();
    (De = BigInt(0)),
      (_e = BigInt(1)),
      (Nt = BigInt(2)),
      (Do = BigInt(3)),
      (Mo = BigInt(4)),
      (Vo = BigInt(5)),
      (tc = BigInt(7)),
      ($o = BigInt(8)),
      (nc = BigInt(9)),
      (Fo = BigInt(16));
    (Go = (r, e) => (Ee(r, e) & _e) === _e),
      (ic = [
        "create",
        "isValid",
        "is0",
        "neg",
        "inv",
        "sqrt",
        "sqr",
        "eql",
        "add",
        "sub",
        "mul",
        "pow",
        "div",
        "addN",
        "subN",
        "mulN",
        "sqrN",
      ]);
  });
function Sn(r, e) {
  let t = e.negate();
  return r ? t : e;
}
function yt(r, e) {
  let t = kn(
    r.Fp,
    e.map((n) => n.Z)
  );
  return e.map((n, s) => r.fromAffine(n.toAffine(t[s])));
}
function Qo(r, e) {
  if (!Number.isSafeInteger(r) || r <= 0 || r > e)
    throw new Error("invalid window size, expected [1.." + e + "], got W=" + r);
}
function ps(r, e) {
  Qo(r, e);
  let t = Math.ceil(e / r) + 1,
    n = 2 ** (r - 1),
    s = 2 ** r,
    o = Et(r),
    i = BigInt(r);
  return { windows: t, windowSize: n, mask: o, maxNumber: s, shiftBy: i };
}
function Zo(r, e, t) {
  let { windowSize: n, mask: s, maxNumber: o, shiftBy: i } = t,
    c = Number(r & s),
    a = r >> i;
  c > n && ((c -= o), (a += Ut));
  let u = e * n,
    d = u + Math.abs(c) - 1,
    g = c === 0,
    y = c < 0,
    l = e % 2 !== 0;
  return { nextN: a, offset: d, isZero: g, isNeg: y, isNegF: l, offsetF: u };
}
function cc(r, e) {
  if (!Array.isArray(r)) throw new Error("array expected");
  r.forEach((t, n) => {
    if (!(t instanceof e)) throw new Error("invalid point at index " + n);
  });
}
function uc(r, e) {
  if (!Array.isArray(r)) throw new Error("array of scalars expected");
  r.forEach((t, n) => {
    if (!e.isValid(t)) throw new Error("invalid scalar at index " + n);
  });
}
function ms(r) {
  return ei.get(r) || 1;
}
function Xo(r) {
  if (r !== Qt) throw new Error("invalid wNAF");
}
function ti(r, e, t, n) {
  let s = e,
    o = r.ZERO,
    i = r.ZERO;
  for (; t > Qt || n > Qt; )
    t & Ut && (o = o.add(s)),
      n & Ut && (i = i.add(s)),
      (s = s.double()),
      (t >>= Ut),
      (n >>= Ut);
  return { p1: o, p2: i };
}
function Yn(r, e, t, n) {
  cc(t, r), uc(n, e);
  let s = t.length,
    o = n.length;
  if (s !== o)
    throw new Error("arrays of points and scalars must have equal length");
  let i = r.ZERO,
    c = Hn(BigInt(s)),
    a = 1;
  c > 12 ? (a = c - 3) : c > 4 ? (a = c - 2) : c > 0 && (a = 2);
  let u = Et(a),
    d = new Array(Number(u) + 1).fill(i),
    g = Math.floor((e.BITS - 1) / a) * a,
    y = i;
  for (let l = g; l >= 0; l -= a) {
    d.fill(i);
    for (let m = 0; m < o; m++) {
      let k = n[m],
        w = Number((k >> BigInt(l)) & u);
      d[w] = d[w].add(t[m]);
    }
    let h = i;
    for (let m = d.length - 1, k = i; m > 0; m--)
      (k = k.add(d[m])), (h = h.add(k));
    if (((y = y.add(h)), l !== 0)) for (let m = 0; m < a; m++) y = y.double();
  }
  return y;
}
function Jo(r, e, t) {
  if (e) {
    if (e.ORDER !== r)
      throw new Error("Field.ORDER must match order: Fp == p, Fn == n");
    return ds(e), e;
  } else return Je(r, { isLE: t });
}
function Zn(r, e, t = {}, n) {
  if ((n === void 0 && (n = r === "edwards"), !e || typeof e != "object"))
    throw new Error(`expected valid ${r} CURVE object`);
  for (let a of ["p", "n", "h"]) {
    let u = e[a];
    if (!(typeof u == "bigint" && u > Qt))
      throw new Error(`CURVE.${a} must be positive bigint`);
  }
  let s = Jo(e.p, t.Fp, n),
    o = Jo(e.n, t.Fn, n),
    c = ["Gx", "Gy", "a", r === "weierstrass" ? "b" : "d"];
  for (let a of c)
    if (!s.isValid(e[a]))
      throw new Error(`CURVE.${a} must be valid field element of CURVE.Fp`);
  return (e = Object.freeze(Object.assign({}, e))), { CURVE: e, Fp: s, Fn: o };
}
var Qt,
  Ut,
  gs,
  ei,
  en,
  bs = le(() => {
    "use strict";
    wn();
    Jt();
    (Qt = BigInt(0)), (Ut = BigInt(1));
    (gs = new WeakMap()), (ei = new WeakMap());
    en = class {
      constructor(e, t) {
        (this.BASE = e.BASE),
          (this.ZERO = e.ZERO),
          (this.Fn = e.Fn),
          (this.bits = t);
      }
      _unsafeLadder(e, t, n = this.ZERO) {
        let s = e;
        for (; t > Qt; ) t & Ut && (n = n.add(s)), (s = s.double()), (t >>= Ut);
        return n;
      }
      precomputeWindow(e, t) {
        let { windows: n, windowSize: s } = ps(t, this.bits),
          o = [],
          i = e,
          c = i;
        for (let a = 0; a < n; a++) {
          (c = i), o.push(c);
          for (let u = 1; u < s; u++) (c = c.add(i)), o.push(c);
          i = c.double();
        }
        return o;
      }
      wNAF(e, t, n) {
        if (!this.Fn.isValid(n)) throw new Error("invalid scalar");
        let s = this.ZERO,
          o = this.BASE,
          i = ps(e, this.bits);
        for (let c = 0; c < i.windows; c++) {
          let {
            nextN: a,
            offset: u,
            isZero: d,
            isNeg: g,
            isNegF: y,
            offsetF: l,
          } = Zo(n, c, i);
          (n = a), d ? (o = o.add(Sn(y, t[l]))) : (s = s.add(Sn(g, t[u])));
        }
        return Xo(n), { p: s, f: o };
      }
      wNAFUnsafe(e, t, n, s = this.ZERO) {
        let o = ps(e, this.bits);
        for (let i = 0; i < o.windows && n !== Qt; i++) {
          let { nextN: c, offset: a, isZero: u, isNeg: d } = Zo(n, i, o);
          if (((n = c), !u)) {
            let g = t[a];
            s = s.add(d ? g.negate() : g);
          }
        }
        return Xo(n), s;
      }
      getPrecomputes(e, t, n) {
        let s = gs.get(t);
        return (
          s ||
            ((s = this.precomputeWindow(t, e)),
            e !== 1 && (typeof n == "function" && (s = n(s)), gs.set(t, s))),
          s
        );
      }
      cached(e, t, n) {
        let s = ms(e);
        return this.wNAF(s, this.getPrecomputes(s, e, n), t);
      }
      unsafe(e, t, n, s) {
        let o = ms(e);
        return o === 1
          ? this._unsafeLadder(e, t, s)
          : this.wNAFUnsafe(o, this.getPrecomputes(o, e, n), t, s);
      }
      createCache(e, t) {
        Qo(t, this.bits), ei.set(e, t), gs.delete(e);
      }
      hasCache(e) {
        return ms(e) !== 1;
      }
    };
  });
function lc(r, e, t, n) {
  let s = r.sqr(t),
    o = r.sqr(n),
    i = r.add(r.mul(e.a, s), o),
    c = r.add(r.ONE, r.mul(e.d, r.mul(s, o)));
  return r.eql(i, c);
}
function dc(r, e = {}) {
  let t = Zn("edwards", r, e, e.FpFnLE),
    { Fp: n, Fn: s } = t,
    o = t.CURVE,
    { h: i } = o;
  It(e, {}, { uvRatio: "function" });
  let c = ws << (BigInt(s.BYTES * 8) - xe),
    a = (k) => n.create(k),
    u =
      e.uvRatio ||
      ((k, w) => {
        try {
          return { isValid: !0, value: n.sqrt(n.div(k, w)) };
        } catch {
          return { isValid: !1, value: vt };
        }
      });
  if (!lc(n, o, o.Gx, o.Gy))
    throw new Error("bad curve params: generator point");
  function d(k, w, R = !1) {
    let x = R ? xe : vt;
    return bn("coordinate " + k, w, x, c), w;
  }
  function g(k) {
    if (!(k instanceof h)) throw new Error("ExtendedPoint expected");
  }
  let y = Xt((k, w) => {
      let { X: R, Y: x, Z: U } = k,
        J = k.is0();
      w == null && (w = J ? fc : n.inv(U));
      let ee = a(R * w),
        te = a(x * w),
        ne = n.mul(U, w);
      if (J) return { x: vt, y: xe };
      if (ne !== xe) throw new Error("invZ was invalid");
      return { x: ee, y: te };
    }),
    l = Xt((k) => {
      let { a: w, d: R } = o;
      if (k.is0()) throw new Error("bad point: ZERO");
      let { X: x, Y: U, Z: J, T: ee } = k,
        te = a(x * x),
        ne = a(U * U),
        _ = a(J * J),
        M = a(_ * _),
        H = a(te * w),
        V = a(_ * a(H + ne)),
        I = a(M + a(R * a(te * ne)));
      if (V !== I) throw new Error("bad point: equation left != right (1)");
      let S = a(x * U),
        B = a(J * ee);
      if (S !== B) throw new Error("bad point: equation left != right (2)");
      return !0;
    });
  class h {
    constructor(w, R, x, U) {
      (this.X = d("x", w)),
        (this.Y = d("y", R)),
        (this.Z = d("z", x, !0)),
        (this.T = d("t", U)),
        Object.freeze(this);
    }
    static CURVE() {
      return o;
    }
    static fromAffine(w) {
      if (w instanceof h) throw new Error("extended point not allowed");
      let { x: R, y: x } = w || {};
      return d("x", R), d("y", x), new h(R, x, xe, a(R * x));
    }
    static fromBytes(w, R = !1) {
      let x = n.BYTES,
        { a: U, d: J } = o;
      (w = fs(Ye(w, x, "point"))), ht(R, "zip215");
      let ee = fs(w),
        te = w[x - 1];
      ee[x - 1] = te & -129;
      let ne = Ot(ee),
        _ = R ? c : n.ORDER;
      bn("point.y", ne, vt, _);
      let M = a(ne * ne),
        H = a(M - xe),
        V = a(J * M - U),
        { isValid: I, value: S } = u(H, V);
      if (!I) throw new Error("bad point: invalid y coordinate");
      let B = (S & xe) === xe,
        L = (te & 128) !== 0;
      if (!R && S === vt && L) throw new Error("bad point: x=0 and x_0=1");
      return L !== B && (S = a(-S)), h.fromAffine({ x: S, y: ne });
    }
    static fromHex(w, R = !1) {
      return h.fromBytes(ge("point", w), R);
    }
    get x() {
      return this.toAffine().x;
    }
    get y() {
      return this.toAffine().y;
    }
    precompute(w = 8, R = !0) {
      return m.createCache(this, w), R || this.multiply(ws), this;
    }
    assertValidity() {
      l(this);
    }
    equals(w) {
      g(w);
      let { X: R, Y: x, Z: U } = this,
        { X: J, Y: ee, Z: te } = w,
        ne = a(R * te),
        _ = a(J * U),
        M = a(x * te),
        H = a(ee * U);
      return ne === _ && M === H;
    }
    is0() {
      return this.equals(h.ZERO);
    }
    negate() {
      return new h(a(-this.X), this.Y, this.Z, a(-this.T));
    }
    double() {
      let { a: w } = o,
        { X: R, Y: x, Z: U } = this,
        J = a(R * R),
        ee = a(x * x),
        te = a(ws * a(U * U)),
        ne = a(w * J),
        _ = R + x,
        M = a(a(_ * _) - J - ee),
        H = ne + ee,
        V = H - te,
        I = ne - ee,
        S = a(M * V),
        B = a(H * I),
        L = a(M * I),
        N = a(V * H);
      return new h(S, B, N, L);
    }
    add(w) {
      g(w);
      let { a: R, d: x } = o,
        { X: U, Y: J, Z: ee, T: te } = this,
        { X: ne, Y: _, Z: M, T: H } = w,
        V = a(U * ne),
        I = a(J * _),
        S = a(te * x * H),
        B = a(ee * M),
        L = a((U + J) * (ne + _) - V - I),
        N = B - S,
        W = B + S,
        K = a(I - R * V),
        q = a(L * N),
        j = a(W * K),
        G = a(L * K),
        ke = a(N * W);
      return new h(q, j, ke, G);
    }
    subtract(w) {
      return this.add(w.negate());
    }
    multiply(w) {
      if (!s.isValidNot0(w))
        throw new Error("invalid scalar: expected 1 <= sc < curve.n");
      let { p: R, f: x } = m.cached(this, w, (U) => yt(h, U));
      return yt(h, [R, x])[0];
    }
    multiplyUnsafe(w, R = h.ZERO) {
      if (!s.isValid(w))
        throw new Error("invalid scalar: expected 0 <= sc < curve.n");
      return w === vt
        ? h.ZERO
        : this.is0() || w === xe
        ? this
        : m.unsafe(this, w, (x) => yt(h, x), R);
    }
    isSmallOrder() {
      return this.multiplyUnsafe(i).is0();
    }
    isTorsionFree() {
      return m.unsafe(this, o.n).is0();
    }
    toAffine(w) {
      return y(this, w);
    }
    clearCofactor() {
      return i === xe ? this : this.multiplyUnsafe(i);
    }
    toBytes() {
      let { x: w, y: R } = this.toAffine(),
        x = n.toBytes(R);
      return (x[x.length - 1] |= w & xe ? 128 : 0), x;
    }
    toHex() {
      return et(this.toBytes());
    }
    toString() {
      return `<Point ${this.is0() ? "ZERO" : this.toHex()}>`;
    }
    get ex() {
      return this.X;
    }
    get ey() {
      return this.Y;
    }
    get ez() {
      return this.Z;
    }
    get et() {
      return this.T;
    }
    static normalizeZ(w) {
      return yt(h, w);
    }
    static msm(w, R) {
      return Yn(h, s, w, R);
    }
    _setWindowSize(w) {
      this.precompute(w);
    }
    toRawBytes() {
      return this.toBytes();
    }
  }
  (h.BASE = new h(o.Gx, o.Gy, xe, a(o.Gx * o.Gy))),
    (h.ZERO = new h(vt, xe, xe, vt)),
    (h.Fp = n),
    (h.Fn = s);
  let m = new en(h, s.BITS);
  return h.BASE.precompute(8), h;
}
function hc(r, e, t = {}) {
  if (typeof e != "function")
    throw new Error('"hash" function param is required');
  It(
    t,
    {},
    {
      adjustScalarBytes: "function",
      randomBytes: "function",
      domain: "function",
      prehash: "function",
      mapToCurve: "function",
    }
  );
  let { prehash: n } = t,
    { BASE: s, Fp: o, Fn: i } = r,
    c = t.randomBytes || Yt,
    a = t.adjustScalarBytes || ((_) => _),
    u =
      t.domain ||
      ((_, M, H) => {
        if ((ht(H, "phflag"), M.length || H))
          throw new Error("Contexts/pre-hash are not supported");
        return _;
      });
  function d(_) {
    return i.create(Ot(_));
  }
  function g(_) {
    let M = x.secretKey;
    _ = ge("private key", _, M);
    let H = ge("hashed private key", e(_), 2 * M),
      V = a(H.slice(0, M)),
      I = H.slice(M, 2 * M),
      S = d(V);
    return { head: V, prefix: I, scalar: S };
  }
  function y(_) {
    let { head: M, prefix: H, scalar: V } = g(_),
      I = s.multiply(V),
      S = I.toBytes();
    return { head: M, prefix: H, scalar: V, point: I, pointBytes: S };
  }
  function l(_) {
    return y(_).pointBytes;
  }
  function h(_ = Uint8Array.of(), ...M) {
    let H = Fe(...M);
    return d(e(u(H, ge("context", _), !!n)));
  }
  function m(_, M, H = {}) {
    (_ = ge("message", _)), n && (_ = n(_));
    let { prefix: V, scalar: I, pointBytes: S } = y(M),
      B = h(H.context, V, _),
      L = s.multiply(B).toBytes(),
      N = h(H.context, L, S, _),
      W = i.create(B + N * I);
    if (!i.isValid(W)) throw new Error("sign failed: invalid s");
    let K = Fe(L, i.toBytes(W));
    return Ye(K, x.signature, "result");
  }
  let k = { zip215: !0 };
  function w(_, M, H, V = k) {
    let { context: I, zip215: S } = V,
      B = x.signature;
    (_ = ge("signature", _, B)),
      (M = ge("message", M)),
      (H = ge("publicKey", H, x.publicKey)),
      S !== void 0 && ht(S, "zip215"),
      n && (M = n(M));
    let L = B / 2,
      N = _.subarray(0, L),
      W = Ot(_.subarray(L, B)),
      K,
      q,
      j;
    try {
      (K = r.fromBytes(H, S)),
        (q = r.fromBytes(N, S)),
        (j = s.multiplyUnsafe(W));
    } catch {
      return !1;
    }
    if (!S && K.isSmallOrder()) return !1;
    let G = h(I, q.toBytes(), K.toBytes(), M);
    return q.add(K.multiplyUnsafe(G)).subtract(j).clearCofactor().is0();
  }
  let R = o.BYTES,
    x = { secretKey: R, publicKey: R, signature: 2 * R, seed: R };
  function U(_ = c(x.seed)) {
    return Ye(_, x.seed, "seed");
  }
  function J(_) {
    let M = ne.randomSecretKey(_);
    return { secretKey: M, publicKey: l(M) };
  }
  function ee(_) {
    return Bt(_) && _.length === i.BYTES;
  }
  function te(_, M) {
    try {
      return !!r.fromBytes(_, M);
    } catch {
      return !1;
    }
  }
  let ne = {
    getExtendedPublicKey: y,
    randomSecretKey: U,
    isValidSecretKey: ee,
    isValidPublicKey: te,
    toMontgomery(_) {
      let { y: M } = r.fromBytes(_),
        H = x.publicKey,
        V = H === 32;
      if (!V && H !== 57) throw new Error("only defined for 25519 and 448");
      let I = V ? o.div(xe + M, xe - M) : o.div(M - xe, M + xe);
      return o.toBytes(I);
    },
    toMontgomerySecret(_) {
      let M = x.secretKey;
      Ye(_, M);
      let H = e(_.subarray(0, M));
      return a(H).subarray(0, M);
    },
    randomPrivateKey: U,
    precompute(_ = 8, M = r.BASE) {
      return M.precompute(_, !1);
    },
  };
  return Object.freeze({
    keygen: J,
    getPublicKey: l,
    sign: m,
    verify: w,
    utils: ne,
    Point: r,
    lengths: x,
  });
}
function yc(r) {
  let e = { a: r.a, d: r.d, p: r.Fp.ORDER, n: r.n, h: r.h, Gx: r.Gx, Gy: r.Gy },
    t = r.Fp,
    n = Je(e.n, r.nBitLength, !0),
    s = { Fp: t, Fn: n, uvRatio: r.uvRatio },
    o = {
      randomBytes: r.randomBytes,
      adjustScalarBytes: r.adjustScalarBytes,
      domain: r.domain,
      prehash: r.prehash,
      mapToCurve: r.mapToCurve,
    };
  return { CURVE: e, curveOpts: s, hash: r.hash, eddsaOpts: o };
}
function pc(r, e) {
  let t = e.Point;
  return Object.assign({}, e, {
    ExtendedPoint: t,
    CURVE: r,
    nBitLength: t.Fn.BITS,
    nByteLength: t.Fn.BYTES,
  });
}
function ni(r) {
  let { CURVE: e, curveOpts: t, hash: n, eddsaOpts: s } = yc(r),
    o = dc(e, t),
    i = hc(o, n, s);
  return pc(r, i);
}
var vt,
  xe,
  ws,
  fc,
  ri = le(() => {
    "use strict";
    wn();
    bs();
    Jt();
    (vt = BigInt(0)), (xe = BigInt(1)), (ws = BigInt(2)), (fc = BigInt(8));
  });
function wc(r) {
  let e = BigInt(10),
    t = BigInt(20),
    n = BigInt(40),
    s = BigInt(80),
    o = ks,
    c = (((r * r) % o) * r) % o,
    a = (me(c, si, o) * c) % o,
    u = (me(a, gc, o) * r) % o,
    d = (me(u, mc, o) * u) % o,
    g = (me(d, e, o) * d) % o,
    y = (me(g, t, o) * g) % o,
    l = (me(y, n, o) * y) % o,
    h = (me(l, s, o) * l) % o,
    m = (me(h, s, o) * l) % o,
    k = (me(m, e, o) * d) % o;
  return { pow_p_5_8: (me(k, si, o) * r) % o, b2: c };
}
function kc(r) {
  return (r[0] &= 248), (r[31] &= 127), (r[31] |= 64), r;
}
function Sc(r, e) {
  let t = ks,
    n = Ee(e * e * e, t),
    s = Ee(n * n * e, t),
    o = wc(r * s).pow_p_5_8,
    i = Ee(r * n * o, t),
    c = Ee(e * i * i, t),
    a = i,
    u = Ee(i * oi, t),
    d = c === r,
    g = c === Ee(-r, t),
    y = c === Ee(-r * oi, t);
  return (
    d && (i = a),
    (g || y) && (i = u),
    Go(i, t) && (i = Ee(-i, t)),
    { isValid: d || g, value: i }
  );
}
var gc,
  si,
  pd,
  mc,
  bc,
  ks,
  ii,
  oi,
  Bc,
  Ec,
  zt,
  ai = le(() => {
    "use strict";
    Co();
    ri();
    Jt();
    (gc = BigInt(1)),
      (si = BigInt(2)),
      (pd = BigInt(3)),
      (mc = BigInt(5)),
      (bc = BigInt(8)),
      (ks = BigInt(
        "0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffed"
      )),
      (ii = {
        p: ks,
        n: BigInt(
          "0x1000000000000000000000000000000014def9dea2f79cd65812631a5cf5d3ed"
        ),
        h: bc,
        a: BigInt(
          "0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffec"
        ),
        d: BigInt(
          "0x52036cee2b6ffe738cc740797779e89800700a4d4141d8ab75eb4dca135978a3"
        ),
        Gx: BigInt(
          "0x216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51a"
        ),
        Gy: BigInt(
          "0x6666666666666666666666666666666666666666666666666666666666666658"
        ),
      });
    oi = BigInt(
      "19681161376707505956807079304988542015446066515923890162744021073123829784752"
    );
    (Bc = Je(ii.p, { isLE: !0 })),
      (Ec = Y(F({}, ii), {
        Fp: Bc,
        hash: To,
        adjustScalarBytes: kc,
        uvRatio: Sc,
      })),
      (zt = ni(Ec));
  });
var ui = St((bd, ci) => {
  "use strict";
  var Xn = Xa().Buffer;
  function Ic(r) {
    if (r.length >= 255) throw new TypeError("Alphabet too long");
    for (var e = new Uint8Array(256), t = 0; t < e.length; t++) e[t] = 255;
    for (var n = 0; n < r.length; n++) {
      var s = r.charAt(n),
        o = s.charCodeAt(0);
      if (e[o] !== 255) throw new TypeError(s + " is ambiguous");
      e[o] = n;
    }
    var i = r.length,
      c = r.charAt(0),
      a = Math.log(i) / Math.log(256),
      u = Math.log(256) / Math.log(i);
    function d(l) {
      if (
        ((Array.isArray(l) || l instanceof Uint8Array) && (l = Xn.from(l)),
        !Xn.isBuffer(l))
      )
        throw new TypeError("Expected Buffer");
      if (l.length === 0) return "";
      for (var h = 0, m = 0, k = 0, w = l.length; k !== w && l[k] === 0; )
        k++, h++;
      for (var R = ((w - k) * u + 1) >>> 0, x = new Uint8Array(R); k !== w; ) {
        for (
          var U = l[k], J = 0, ee = R - 1;
          (U !== 0 || J < m) && ee !== -1;
          ee--, J++
        )
          (U += (256 * x[ee]) >>> 0),
            (x[ee] = U % i >>> 0),
            (U = (U / i) >>> 0);
        if (U !== 0) throw new Error("Non-zero carry");
        (m = J), k++;
      }
      for (var te = R - m; te !== R && x[te] === 0; ) te++;
      for (var ne = c.repeat(h); te < R; ++te) ne += r.charAt(x[te]);
      return ne;
    }
    function g(l) {
      if (typeof l != "string") throw new TypeError("Expected String");
      if (l.length === 0) return Xn.alloc(0);
      for (var h = 0, m = 0, k = 0; l[h] === c; ) m++, h++;
      for (
        var w = ((l.length - h) * a + 1) >>> 0, R = new Uint8Array(w);
        h < l.length;

      ) {
        var x = l.charCodeAt(h);
        if (x > 255) return;
        var U = e[x];
        if (U === 255) return;
        for (var J = 0, ee = w - 1; (U !== 0 || J < k) && ee !== -1; ee--, J++)
          (U += (i * R[ee]) >>> 0),
            (R[ee] = U % 256 >>> 0),
            (U = (U / 256) >>> 0);
        if (U !== 0) throw new Error("Non-zero carry");
        (k = J), h++;
      }
      for (var te = w - k; te !== w && R[te] === 0; ) te++;
      var ne = Xn.allocUnsafe(m + (w - te));
      ne.fill(0, 0, m);
      for (var _ = m; te !== w; ) ne[_++] = R[te++];
      return ne;
    }
    function y(l) {
      var h = g(l);
      if (h) return h;
      throw new Error("Non-base" + i + " character");
    }
    return { encode: d, decodeUnsafe: g, decode: y };
  }
  ci.exports = Ic;
});
var Ss = St((wd, fi) => {
  "use strict";
  var vc = ui(),
    _c = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";
  fi.exports = vc(_c);
});
var li = {};
Jr(li, { TextDecoder: () => er, TextEncoder: () => tr });
function pt(r, e, t) {
  return e <= r && r <= t;
}
function nr(r) {
  if (r === void 0) return {};
  if (r === Object(r)) return r;
  throw TypeError("Could not convert argument to dictionary");
}
function xc(r) {
  for (var e = String(r), t = e.length, n = 0, s = []; n < t; ) {
    var o = e.charCodeAt(n);
    if (o < 55296 || o > 57343) s.push(o);
    else if (56320 <= o && o <= 57343) s.push(65533);
    else if (55296 <= o && o <= 56319)
      if (n === t - 1) s.push(65533);
      else {
        var i = r.charCodeAt(n + 1);
        if (56320 <= i && i <= 57343) {
          var c = o & 1023,
            a = i & 1023;
          s.push(65536 + (c << 10) + a), (n += 1);
        } else s.push(65533);
      }
    n += 1;
  }
  return s;
}
function Ac(r) {
  for (var e = "", t = 0; t < r.length; ++t) {
    var n = r[t];
    n <= 65535
      ? (e += String.fromCharCode(n))
      : ((n -= 65536),
        (e += String.fromCharCode((n >> 10) + 55296, (n & 1023) + 56320)));
  }
  return e;
}
function Es(r) {
  this.tokens = [].slice.call(r);
}
function Bs(r, e) {
  if (r) throw TypeError("Decoder error");
  return e || 65533;
}
function Rc() {}
function Lc() {}
function er(r, e) {
  if (!(this instanceof er)) return new er(r, e);
  if (((r = r !== void 0 ? String(r).toLowerCase() : Qn), r !== Qn))
    throw new Error("Encoding not supported. Only utf-8 is supported");
  (e = nr(e)),
    (this._streaming = !1),
    (this._BOMseen = !1),
    (this._decoder = null),
    (this._fatal = !!e.fatal),
    (this._ignoreBOM = !!e.ignoreBOM),
    Object.defineProperty(this, "encoding", { value: "utf-8" }),
    Object.defineProperty(this, "fatal", { value: this._fatal }),
    Object.defineProperty(this, "ignoreBOM", { value: this._ignoreBOM });
}
function tr(r, e) {
  if (!(this instanceof tr)) return new tr(r, e);
  if (((r = r !== void 0 ? String(r).toLowerCase() : Qn), r !== Qn))
    throw new Error("Encoding not supported. Only utf-8 is supported");
  (e = nr(e)),
    (this._streaming = !1),
    (this._encoder = null),
    (this._options = { fatal: !!e.fatal }),
    Object.defineProperty(this, "encoding", { value: "utf-8" });
}
function Pc(r) {
  var e = r.fatal,
    t = 0,
    n = 0,
    s = 0,
    o = 128,
    i = 191;
  this.handler = function (c, a) {
    if (a === Jn && s !== 0) return (s = 0), Bs(e);
    if (a === Jn) return tn;
    if (s === 0) {
      if (pt(a, 0, 127)) return a;
      if (pt(a, 194, 223)) (s = 1), (t = a - 192);
      else if (pt(a, 224, 239))
        a === 224 && (o = 160), a === 237 && (i = 159), (s = 2), (t = a - 224);
      else if (pt(a, 240, 244))
        a === 240 && (o = 144), a === 244 && (i = 143), (s = 3), (t = a - 240);
      else return Bs(e);
      return (t = t << (6 * s)), null;
    }
    if (!pt(a, o, i))
      return (t = s = n = 0), (o = 128), (i = 191), c.prepend(a), Bs(e);
    if (
      ((o = 128),
      (i = 191),
      (n += 1),
      (t += (a - 128) << (6 * (s - n))),
      n !== s)
    )
      return null;
    var u = t;
    return (t = s = n = 0), u;
  };
}
function Tc(r) {
  var e = r.fatal;
  this.handler = function (t, n) {
    if (n === Jn) return tn;
    if (pt(n, 0, 127)) return n;
    var s, o;
    pt(n, 128, 2047)
      ? ((s = 1), (o = 192))
      : pt(n, 2048, 65535)
      ? ((s = 2), (o = 224))
      : pt(n, 65536, 1114111) && ((s = 3), (o = 240));
    for (var i = [(n >> (6 * s)) + o]; s > 0; ) {
      var c = n >> (6 * (s - 1));
      i.push(128 | (c & 63)), (s -= 1);
    }
    return i;
  };
}
var Jn,
  tn,
  Qn,
  di = le(() => {
    "use strict";
    Jn = -1;
    Es.prototype = {
      endOfStream: function () {
        return !this.tokens.length;
      },
      read: function () {
        return this.tokens.length ? this.tokens.shift() : Jn;
      },
      prepend: function (r) {
        if (Array.isArray(r))
          for (var e = r; e.length; ) this.tokens.unshift(e.pop());
        else this.tokens.unshift(r);
      },
      push: function (r) {
        if (Array.isArray(r))
          for (var e = r; e.length; ) this.tokens.push(e.shift());
        else this.tokens.push(r);
      },
    };
    tn = -1;
    Rc.prototype = { handler: function (r, e) {} };
    Lc.prototype = { handler: function (r, e) {} };
    Qn = "utf-8";
    er.prototype = {
      decode: function (e, t) {
        var n;
        typeof e == "object" && e instanceof ArrayBuffer
          ? (n = new Uint8Array(e))
          : typeof e == "object" &&
            "buffer" in e &&
            e.buffer instanceof ArrayBuffer
          ? (n = new Uint8Array(e.buffer, e.byteOffset, e.byteLength))
          : (n = new Uint8Array(0)),
          (t = nr(t)),
          this._streaming ||
            ((this._decoder = new Pc({ fatal: this._fatal })),
            (this._BOMseen = !1)),
          (this._streaming = !!t.stream);
        for (
          var s = new Es(n), o = [], i;
          !s.endOfStream() &&
          ((i = this._decoder.handler(s, s.read())), i !== tn);

        )
          i !== null && (Array.isArray(i) ? o.push.apply(o, i) : o.push(i));
        if (!this._streaming) {
          do {
            if (((i = this._decoder.handler(s, s.read())), i === tn)) break;
            i !== null && (Array.isArray(i) ? o.push.apply(o, i) : o.push(i));
          } while (!s.endOfStream());
          this._decoder = null;
        }
        return (
          o.length &&
            ["utf-8"].indexOf(this.encoding) !== -1 &&
            !this._ignoreBOM &&
            !this._BOMseen &&
            (o[0] === 65279
              ? ((this._BOMseen = !0), o.shift())
              : (this._BOMseen = !0)),
          Ac(o)
        );
      },
    };
    tr.prototype = {
      encode: function (e, t) {
        (e = e ? String(e) : ""),
          (t = nr(t)),
          this._streaming || (this._encoder = new Tc(this._options)),
          (this._streaming = !!t.stream);
        for (
          var n = [], s = new Es(xc(e)), o;
          !s.endOfStream() &&
          ((o = this._encoder.handler(s, s.read())), o !== tn);

        )
          Array.isArray(o) ? n.push.apply(n, o) : n.push(o);
        if (!this._streaming) {
          for (; (o = this._encoder.handler(s, s.read())), o !== tn; )
            Array.isArray(o) ? n.push.apply(n, o) : n.push(o);
          this._encoder = null;
        }
        return new Uint8Array(n);
      },
    };
  });
var mi = St((de) => {
  "use strict";
  var Cc =
      (de && de.__createBinding) ||
      (Object.create
        ? function (r, e, t, n) {
            n === void 0 && (n = t),
              Object.defineProperty(r, n, {
                enumerable: !0,
                get: function () {
                  return e[t];
                },
              });
          }
        : function (r, e, t, n) {
            n === void 0 && (n = t), (r[n] = e[t]);
          }),
    Oc =
      (de && de.__setModuleDefault) ||
      (Object.create
        ? function (r, e) {
            Object.defineProperty(r, "default", { enumerable: !0, value: e });
          }
        : function (r, e) {
            r.default = e;
          }),
    st =
      (de && de.__decorate) ||
      function (r, e, t, n) {
        var s = arguments.length,
          o =
            s < 3
              ? e
              : n === null
              ? (n = Object.getOwnPropertyDescriptor(e, t))
              : n,
          i;
        if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
          o = Reflect.decorate(r, e, t, n);
        else
          for (var c = r.length - 1; c >= 0; c--)
            (i = r[c]) &&
              (o = (s < 3 ? i(o) : s > 3 ? i(e, t, o) : i(e, t)) || o);
        return s > 3 && o && Object.defineProperty(e, t, o), o;
      },
    Nc =
      (de && de.__importStar) ||
      function (r) {
        if (r && r.__esModule) return r;
        var e = {};
        if (r != null)
          for (var t in r)
            t !== "default" && Object.hasOwnProperty.call(r, t) && Cc(e, r, t);
        return Oc(e, r), e;
      },
    hi =
      (de && de.__importDefault) ||
      function (r) {
        return r && r.__esModule ? r : { default: r };
      };
  Object.defineProperty(de, "__esModule", { value: !0 });
  de.deserializeUnchecked =
    de.deserialize =
    de.serialize =
    de.BinaryReader =
    de.BinaryWriter =
    de.BorshError =
    de.baseDecode =
    de.baseEncode =
      void 0;
  var _t = hi(Oo()),
    yi = hi(Ss()),
    Uc = Nc((di(), Qr(li))),
    zc = typeof TextDecoder != "function" ? Uc.TextDecoder : TextDecoder,
    Kc = new zc("utf-8", { fatal: !0 });
  function qc(r) {
    return (
      typeof r == "string" && (r = Buffer.from(r, "utf8")),
      yi.default.encode(Buffer.from(r))
    );
  }
  de.baseEncode = qc;
  function Wc(r) {
    return Buffer.from(yi.default.decode(r));
  }
  de.baseDecode = Wc;
  var Is = 1024,
    Le = class extends Error {
      constructor(e) {
        super(e), (this.fieldPath = []), (this.originalMessage = e);
      }
      addToFieldPath(e) {
        this.fieldPath.splice(0, 0, e),
          (this.message =
            this.originalMessage + ": " + this.fieldPath.join("."));
      }
    };
  de.BorshError = Le;
  var rr = class {
    constructor() {
      (this.buf = Buffer.alloc(Is)), (this.length = 0);
    }
    maybeResize() {
      this.buf.length < 16 + this.length &&
        (this.buf = Buffer.concat([this.buf, Buffer.alloc(Is)]));
    }
    writeU8(e) {
      this.maybeResize(),
        this.buf.writeUInt8(e, this.length),
        (this.length += 1);
    }
    writeU16(e) {
      this.maybeResize(),
        this.buf.writeUInt16LE(e, this.length),
        (this.length += 2);
    }
    writeU32(e) {
      this.maybeResize(),
        this.buf.writeUInt32LE(e, this.length),
        (this.length += 4);
    }
    writeU64(e) {
      this.maybeResize(),
        this.writeBuffer(Buffer.from(new _t.default(e).toArray("le", 8)));
    }
    writeU128(e) {
      this.maybeResize(),
        this.writeBuffer(Buffer.from(new _t.default(e).toArray("le", 16)));
    }
    writeU256(e) {
      this.maybeResize(),
        this.writeBuffer(Buffer.from(new _t.default(e).toArray("le", 32)));
    }
    writeU512(e) {
      this.maybeResize(),
        this.writeBuffer(Buffer.from(new _t.default(e).toArray("le", 64)));
    }
    writeBuffer(e) {
      (this.buf = Buffer.concat([
        Buffer.from(this.buf.subarray(0, this.length)),
        e,
        Buffer.alloc(Is),
      ])),
        (this.length += e.length);
    }
    writeString(e) {
      this.maybeResize();
      let t = Buffer.from(e, "utf8");
      this.writeU32(t.length), this.writeBuffer(t);
    }
    writeFixedArray(e) {
      this.writeBuffer(Buffer.from(e));
    }
    writeArray(e, t) {
      this.maybeResize(), this.writeU32(e.length);
      for (let n of e) this.maybeResize(), t(n);
    }
    toArray() {
      return this.buf.subarray(0, this.length);
    }
  };
  de.BinaryWriter = rr;
  function ot(r, e, t) {
    let n = t.value;
    t.value = function (...s) {
      try {
        return n.apply(this, s);
      } catch (o) {
        if (o instanceof RangeError) {
          let i = o.code;
          if (["ERR_BUFFER_OUT_OF_BOUNDS", "ERR_OUT_OF_RANGE"].indexOf(i) >= 0)
            throw new Le("Reached the end of buffer when deserializing");
        }
        throw o;
      }
    };
  }
  var Me = class {
    constructor(e) {
      (this.buf = e), (this.offset = 0);
    }
    readU8() {
      let e = this.buf.readUInt8(this.offset);
      return (this.offset += 1), e;
    }
    readU16() {
      let e = this.buf.readUInt16LE(this.offset);
      return (this.offset += 2), e;
    }
    readU32() {
      let e = this.buf.readUInt32LE(this.offset);
      return (this.offset += 4), e;
    }
    readU64() {
      let e = this.readBuffer(8);
      return new _t.default(e, "le");
    }
    readU128() {
      let e = this.readBuffer(16);
      return new _t.default(e, "le");
    }
    readU256() {
      let e = this.readBuffer(32);
      return new _t.default(e, "le");
    }
    readU512() {
      let e = this.readBuffer(64);
      return new _t.default(e, "le");
    }
    readBuffer(e) {
      if (this.offset + e > this.buf.length)
        throw new Le(`Expected buffer length ${e} isn't within bounds`);
      let t = this.buf.slice(this.offset, this.offset + e);
      return (this.offset += e), t;
    }
    readString() {
      let e = this.readU32(),
        t = this.readBuffer(e);
      try {
        return Kc.decode(t);
      } catch (n) {
        throw new Le(`Error decoding UTF-8 string: ${n}`);
      }
    }
    readFixedArray(e) {
      return new Uint8Array(this.readBuffer(e));
    }
    readArray(e) {
      let t = this.readU32(),
        n = Array();
      for (let s = 0; s < t; ++s) n.push(e());
      return n;
    }
  };
  st([ot], Me.prototype, "readU8", null);
  st([ot], Me.prototype, "readU16", null);
  st([ot], Me.prototype, "readU32", null);
  st([ot], Me.prototype, "readU64", null);
  st([ot], Me.prototype, "readU128", null);
  st([ot], Me.prototype, "readU256", null);
  st([ot], Me.prototype, "readU512", null);
  st([ot], Me.prototype, "readString", null);
  st([ot], Me.prototype, "readFixedArray", null);
  st([ot], Me.prototype, "readArray", null);
  de.BinaryReader = Me;
  function pi(r) {
    return r.charAt(0).toUpperCase() + r.slice(1);
  }
  function Kt(r, e, t, n, s) {
    try {
      if (typeof n == "string") s[`write${pi(n)}`](t);
      else if (n instanceof Array)
        if (typeof n[0] == "number") {
          if (t.length !== n[0])
            throw new Le(
              `Expecting byte array of length ${n[0]}, but got ${t.length} bytes`
            );
          s.writeFixedArray(t);
        } else if (n.length === 2 && typeof n[1] == "number") {
          if (t.length !== n[1])
            throw new Le(
              `Expecting byte array of length ${n[1]}, but got ${t.length} bytes`
            );
          for (let o = 0; o < n[1]; o++) Kt(r, null, t[o], n[0], s);
        } else
          s.writeArray(t, (o) => {
            Kt(r, e, o, n[0], s);
          });
      else if (n.kind !== void 0)
        switch (n.kind) {
          case "option": {
            t == null ? s.writeU8(0) : (s.writeU8(1), Kt(r, e, t, n.type, s));
            break;
          }
          case "map": {
            s.writeU32(t.size),
              t.forEach((o, i) => {
                Kt(r, e, i, n.key, s), Kt(r, e, o, n.value, s);
              });
            break;
          }
          default:
            throw new Le(`FieldType ${n} unrecognized`);
        }
      else gi(r, t, s);
    } catch (o) {
      throw (o instanceof Le && o.addToFieldPath(e), o);
    }
  }
  function gi(r, e, t) {
    if (typeof e.borshSerialize == "function") {
      e.borshSerialize(t);
      return;
    }
    let n = r.get(e.constructor);
    if (!n) throw new Le(`Class ${e.constructor.name} is missing in schema`);
    if (n.kind === "struct")
      n.fields.map(([s, o]) => {
        Kt(r, s, e[s], o, t);
      });
    else if (n.kind === "enum") {
      let s = e[n.field];
      for (let o = 0; o < n.values.length; ++o) {
        let [i, c] = n.values[o];
        if (i === s) {
          t.writeU8(o), Kt(r, i, e[i], c, t);
          break;
        }
      }
    } else
      throw new Le(
        `Unexpected schema kind: ${n.kind} for ${e.constructor.name}`
      );
  }
  function Dc(r, e, t = rr) {
    let n = new t();
    return gi(r, e, n), n.toArray();
  }
  de.serialize = Dc;
  function qt(r, e, t, n) {
    try {
      if (typeof t == "string") return n[`read${pi(t)}`]();
      if (t instanceof Array) {
        if (typeof t[0] == "number") return n.readFixedArray(t[0]);
        if (typeof t[1] == "number") {
          let s = [];
          for (let o = 0; o < t[1]; o++) s.push(qt(r, null, t[0], n));
          return s;
        } else return n.readArray(() => qt(r, e, t[0], n));
      }
      if (t.kind === "option") return n.readU8() ? qt(r, e, t.type, n) : void 0;
      if (t.kind === "map") {
        let s = new Map(),
          o = n.readU32();
        for (let i = 0; i < o; i++) {
          let c = qt(r, e, t.key, n),
            a = qt(r, e, t.value, n);
          s.set(c, a);
        }
        return s;
      }
      return vs(r, t, n);
    } catch (s) {
      throw (s instanceof Le && s.addToFieldPath(e), s);
    }
  }
  function vs(r, e, t) {
    if (typeof e.borshDeserialize == "function") return e.borshDeserialize(t);
    let n = r.get(e);
    if (!n) throw new Le(`Class ${e.name} is missing in schema`);
    if (n.kind === "struct") {
      let s = {};
      for (let [o, i] of r.get(e).fields) s[o] = qt(r, o, i, t);
      return new e(s);
    }
    if (n.kind === "enum") {
      let s = t.readU8();
      if (s >= n.values.length)
        throw new Le(`Enum index: ${s} is out of range`);
      let [o, i] = n.values[s],
        c = qt(r, o, i, t);
      return new e({ [o]: c });
    }
    throw new Le(`Unexpected schema kind: ${n.kind} for ${e.constructor.name}`);
  }
  function Mc(r, e, t, n = Me) {
    let s = new n(t),
      o = vs(r, e, s);
    if (s.offset < t.length)
      throw new Le(
        `Unexpected ${t.length - s.offset} bytes after deserialized data`
      );
    return o;
  }
  de.deserialize = Mc;
  function Vc(r, e, t, n = Me) {
    let s = new n(t);
    return vs(r, e, s);
  }
  de.deserializeUnchecked = Vc;
});
var Rs = St((b) => {
  "use strict";
  Object.defineProperty(b, "__esModule", { value: !0 });
  b.s16 =
    b.s8 =
    b.nu64be =
    b.u48be =
    b.u40be =
    b.u32be =
    b.u24be =
    b.u16be =
    b.nu64 =
    b.u48 =
    b.u40 =
    b.u32 =
    b.u24 =
    b.u16 =
    b.u8 =
    b.offset =
    b.greedy =
    b.Constant =
    b.UTF8 =
    b.CString =
    b.Blob =
    b.Boolean =
    b.BitField =
    b.BitStructure =
    b.VariantLayout =
    b.Union =
    b.UnionLayoutDiscriminator =
    b.UnionDiscriminator =
    b.Structure =
    b.Sequence =
    b.DoubleBE =
    b.Double =
    b.FloatBE =
    b.Float =
    b.NearInt64BE =
    b.NearInt64 =
    b.NearUInt64BE =
    b.NearUInt64 =
    b.IntBE =
    b.Int =
    b.UIntBE =
    b.UInt =
    b.OffsetLayout =
    b.GreedyCount =
    b.ExternalLayout =
    b.bindConstructorLayout =
    b.nameWithProperty =
    b.Layout =
    b.uint8ArrayToBuffer =
    b.checkUint8Array =
      void 0;
  b.constant =
    b.utf8 =
    b.cstr =
    b.blob =
    b.unionLayoutDiscriminator =
    b.union =
    b.seq =
    b.bits =
    b.struct =
    b.f64be =
    b.f64 =
    b.f32be =
    b.f32 =
    b.ns64be =
    b.s48be =
    b.s40be =
    b.s32be =
    b.s24be =
    b.s16be =
    b.ns64 =
    b.s48 =
    b.s40 =
    b.s32 =
    b.s24 =
      void 0;
  var xs = es();
  function sn(r) {
    if (!(r instanceof Uint8Array))
      throw new TypeError("b must be a Uint8Array");
  }
  b.checkUint8Array = sn;
  function oe(r) {
    return sn(r), xs.Buffer.from(r.buffer, r.byteOffset, r.length);
  }
  b.uint8ArrayToBuffer = oe;
  var ae = class {
    constructor(e, t) {
      if (!Number.isInteger(e)) throw new TypeError("span must be an integer");
      (this.span = e), (this.property = t);
    }
    makeDestinationObject() {
      return {};
    }
    getSpan(e, t) {
      if (0 > this.span) throw new RangeError("indeterminate span");
      return this.span;
    }
    replicate(e) {
      let t = Object.create(this.constructor.prototype);
      return Object.assign(t, this), (t.property = e), t;
    }
    fromArray(e) {}
  };
  b.Layout = ae;
  function As(r, e) {
    return e.property ? r + "[" + e.property + "]" : r;
  }
  b.nameWithProperty = As;
  function $c(r, e) {
    if (typeof r != "function")
      throw new TypeError("Class must be constructor");
    if (Object.prototype.hasOwnProperty.call(r, "layout_"))
      throw new Error("Class is already bound to a layout");
    if (!(e && e instanceof ae)) throw new TypeError("layout must be a Layout");
    if (Object.prototype.hasOwnProperty.call(e, "boundConstructor_"))
      throw new Error("layout is already bound to a constructor");
    (r.layout_ = e),
      (e.boundConstructor_ = r),
      (e.makeDestinationObject = () => new r()),
      Object.defineProperty(r.prototype, "encode", {
        value(t, n) {
          return e.encode(this, t, n);
        },
        writable: !0,
      }),
      Object.defineProperty(r, "decode", {
        value(t, n) {
          return e.decode(t, n);
        },
        writable: !0,
      });
  }
  b.bindConstructorLayout = $c;
  var Oe = class extends ae {
    isCount() {
      throw new Error("ExternalLayout is abstract");
    }
  };
  b.ExternalLayout = Oe;
  var sr = class extends Oe {
    constructor(e = 1, t) {
      if (!Number.isInteger(e) || 0 >= e)
        throw new TypeError("elementSpan must be a (positive) integer");
      super(-1, t), (this.elementSpan = e);
    }
    isCount() {
      return !0;
    }
    decode(e, t = 0) {
      sn(e);
      let n = e.length - t;
      return Math.floor(n / this.elementSpan);
    }
    encode(e, t, n) {
      return 0;
    }
  };
  b.GreedyCount = sr;
  var Bn = class extends Oe {
    constructor(e, t = 0, n) {
      if (!(e instanceof ae)) throw new TypeError("layout must be a Layout");
      if (!Number.isInteger(t))
        throw new TypeError("offset must be integer or undefined");
      super(e.span, n || e.property), (this.layout = e), (this.offset = t);
    }
    isCount() {
      return this.layout instanceof je || this.layout instanceof Ze;
    }
    decode(e, t = 0) {
      return this.layout.decode(e, t + this.offset);
    }
    encode(e, t, n = 0) {
      return this.layout.encode(e, t, n + this.offset);
    }
  };
  b.OffsetLayout = Bn;
  var je = class extends ae {
    constructor(e, t) {
      if ((super(e, t), 6 < this.span))
        throw new RangeError("span must not exceed 6 bytes");
    }
    decode(e, t = 0) {
      return oe(e).readUIntLE(t, this.span);
    }
    encode(e, t, n = 0) {
      return oe(t).writeUIntLE(e, n, this.span), this.span;
    }
  };
  b.UInt = je;
  var Ze = class extends ae {
    constructor(e, t) {
      if ((super(e, t), 6 < this.span))
        throw new RangeError("span must not exceed 6 bytes");
    }
    decode(e, t = 0) {
      return oe(e).readUIntBE(t, this.span);
    }
    encode(e, t, n = 0) {
      return oe(t).writeUIntBE(e, n, this.span), this.span;
    }
  };
  b.UIntBE = Ze;
  var gt = class extends ae {
    constructor(e, t) {
      if ((super(e, t), 6 < this.span))
        throw new RangeError("span must not exceed 6 bytes");
    }
    decode(e, t = 0) {
      return oe(e).readIntLE(t, this.span);
    }
    encode(e, t, n = 0) {
      return oe(t).writeIntLE(e, n, this.span), this.span;
    }
  };
  b.Int = gt;
  var xt = class extends ae {
    constructor(e, t) {
      if ((super(e, t), 6 < this.span))
        throw new RangeError("span must not exceed 6 bytes");
    }
    decode(e, t = 0) {
      return oe(e).readIntBE(t, this.span);
    }
    encode(e, t, n = 0) {
      return oe(t).writeIntBE(e, n, this.span), this.span;
    }
  };
  b.IntBE = xt;
  var _s = Math.pow(2, 32);
  function Sr(r) {
    let e = Math.floor(r / _s),
      t = r - e * _s;
    return { hi32: e, lo32: t };
  }
  function Br(r, e) {
    return r * _s + e;
  }
  var or = class extends ae {
    constructor(e) {
      super(8, e);
    }
    decode(e, t = 0) {
      let n = oe(e),
        s = n.readUInt32LE(t),
        o = n.readUInt32LE(t + 4);
      return Br(o, s);
    }
    encode(e, t, n = 0) {
      let s = Sr(e),
        o = oe(t);
      return o.writeUInt32LE(s.lo32, n), o.writeUInt32LE(s.hi32, n + 4), 8;
    }
  };
  b.NearUInt64 = or;
  var ir = class extends ae {
    constructor(e) {
      super(8, e);
    }
    decode(e, t = 0) {
      let n = oe(e),
        s = n.readUInt32BE(t),
        o = n.readUInt32BE(t + 4);
      return Br(s, o);
    }
    encode(e, t, n = 0) {
      let s = Sr(e),
        o = oe(t);
      return o.writeUInt32BE(s.hi32, n), o.writeUInt32BE(s.lo32, n + 4), 8;
    }
  };
  b.NearUInt64BE = ir;
  var ar = class extends ae {
    constructor(e) {
      super(8, e);
    }
    decode(e, t = 0) {
      let n = oe(e),
        s = n.readUInt32LE(t),
        o = n.readInt32LE(t + 4);
      return Br(o, s);
    }
    encode(e, t, n = 0) {
      let s = Sr(e),
        o = oe(t);
      return o.writeUInt32LE(s.lo32, n), o.writeInt32LE(s.hi32, n + 4), 8;
    }
  };
  b.NearInt64 = ar;
  var cr = class extends ae {
    constructor(e) {
      super(8, e);
    }
    decode(e, t = 0) {
      let n = oe(e),
        s = n.readInt32BE(t),
        o = n.readUInt32BE(t + 4);
      return Br(s, o);
    }
    encode(e, t, n = 0) {
      let s = Sr(e),
        o = oe(t);
      return o.writeInt32BE(s.hi32, n), o.writeUInt32BE(s.lo32, n + 4), 8;
    }
  };
  b.NearInt64BE = cr;
  var ur = class extends ae {
    constructor(e) {
      super(4, e);
    }
    decode(e, t = 0) {
      return oe(e).readFloatLE(t);
    }
    encode(e, t, n = 0) {
      return oe(t).writeFloatLE(e, n), 4;
    }
  };
  b.Float = ur;
  var fr = class extends ae {
    constructor(e) {
      super(4, e);
    }
    decode(e, t = 0) {
      return oe(e).readFloatBE(t);
    }
    encode(e, t, n = 0) {
      return oe(t).writeFloatBE(e, n), 4;
    }
  };
  b.FloatBE = fr;
  var lr = class extends ae {
    constructor(e) {
      super(8, e);
    }
    decode(e, t = 0) {
      return oe(e).readDoubleLE(t);
    }
    encode(e, t, n = 0) {
      return oe(t).writeDoubleLE(e, n), 8;
    }
  };
  b.Double = lr;
  var dr = class extends ae {
    constructor(e) {
      super(8, e);
    }
    decode(e, t = 0) {
      return oe(e).readDoubleBE(t);
    }
    encode(e, t, n = 0) {
      return oe(t).writeDoubleBE(e, n), 8;
    }
  };
  b.DoubleBE = dr;
  var hr = class extends ae {
    constructor(e, t, n) {
      if (!(e instanceof ae))
        throw new TypeError("elementLayout must be a Layout");
      if (
        !((t instanceof Oe && t.isCount()) || (Number.isInteger(t) && 0 <= t))
      )
        throw new TypeError(
          "count must be non-negative integer or an unsigned integer ExternalLayout"
        );
      let s = -1;
      !(t instanceof Oe) && 0 < e.span && (s = t * e.span),
        super(s, n),
        (this.elementLayout = e),
        (this.count = t);
    }
    getSpan(e, t = 0) {
      if (0 <= this.span) return this.span;
      let n = 0,
        s = this.count;
      if (
        (s instanceof Oe && (s = s.decode(e, t)), 0 < this.elementLayout.span)
      )
        n = s * this.elementLayout.span;
      else {
        let o = 0;
        for (; o < s; ) (n += this.elementLayout.getSpan(e, t + n)), ++o;
      }
      return n;
    }
    decode(e, t = 0) {
      let n = [],
        s = 0,
        o = this.count;
      for (o instanceof Oe && (o = o.decode(e, t)); s < o; )
        n.push(this.elementLayout.decode(e, t)),
          (t += this.elementLayout.getSpan(e, t)),
          (s += 1);
      return n;
    }
    encode(e, t, n = 0) {
      let s = this.elementLayout,
        o = e.reduce((i, c) => i + s.encode(c, t, n + i), 0);
      return this.count instanceof Oe && this.count.encode(e.length, t, n), o;
    }
  };
  b.Sequence = hr;
  var yr = class extends ae {
    constructor(e, t, n) {
      if (!(Array.isArray(e) && e.reduce((o, i) => o && i instanceof ae, !0)))
        throw new TypeError("fields must be array of Layout instances");
      typeof t == "boolean" && n === void 0 && ((n = t), (t = void 0));
      for (let o of e)
        if (0 > o.span && o.property === void 0)
          throw new Error(
            "fields cannot contain unnamed variable-length layout"
          );
      let s = -1;
      try {
        s = e.reduce((o, i) => o + i.getSpan(), 0);
      } catch {}
      super(s, t), (this.fields = e), (this.decodePrefixes = !!n);
    }
    getSpan(e, t = 0) {
      if (0 <= this.span) return this.span;
      let n = 0;
      try {
        n = this.fields.reduce((s, o) => {
          let i = o.getSpan(e, t);
          return (t += i), s + i;
        }, 0);
      } catch {
        throw new RangeError("indeterminate span");
      }
      return n;
    }
    decode(e, t = 0) {
      sn(e);
      let n = this.makeDestinationObject();
      for (let s of this.fields)
        if (
          (s.property !== void 0 && (n[s.property] = s.decode(e, t)),
          (t += s.getSpan(e, t)),
          this.decodePrefixes && e.length === t)
        )
          break;
      return n;
    }
    encode(e, t, n = 0) {
      let s = n,
        o = 0,
        i = 0;
      for (let c of this.fields) {
        let a = c.span;
        if (((i = 0 < a ? a : 0), c.property !== void 0)) {
          let u = e[c.property];
          u !== void 0 &&
            ((i = c.encode(u, t, n)), 0 > a && (a = c.getSpan(t, n)));
        }
        (o = n), (n += a);
      }
      return o + i - s;
    }
    fromArray(e) {
      let t = this.makeDestinationObject();
      for (let n of this.fields)
        n.property !== void 0 && 0 < e.length && (t[n.property] = e.shift());
      return t;
    }
    layoutFor(e) {
      if (typeof e != "string") throw new TypeError("property must be string");
      for (let t of this.fields) if (t.property === e) return t;
    }
    offsetOf(e) {
      if (typeof e != "string") throw new TypeError("property must be string");
      let t = 0;
      for (let n of this.fields) {
        if (n.property === e) return t;
        0 > n.span ? (t = -1) : 0 <= t && (t += n.span);
      }
    }
  };
  b.Structure = yr;
  var En = class {
    constructor(e) {
      this.property = e;
    }
    decode(e, t) {
      throw new Error("UnionDiscriminator is abstract");
    }
    encode(e, t, n) {
      throw new Error("UnionDiscriminator is abstract");
    }
  };
  b.UnionDiscriminator = En;
  var rn = class extends En {
    constructor(e, t) {
      if (!(e instanceof Oe && e.isCount()))
        throw new TypeError(
          "layout must be an unsigned integer ExternalLayout"
        );
      super(t || e.property || "variant"), (this.layout = e);
    }
    decode(e, t) {
      return this.layout.decode(e, t);
    }
    encode(e, t, n) {
      return this.layout.encode(e, t, n);
    }
  };
  b.UnionLayoutDiscriminator = rn;
  var In = class extends ae {
    constructor(e, t, n) {
      let s;
      if (e instanceof je || e instanceof Ze) s = new rn(new Bn(e));
      else if (e instanceof Oe && e.isCount()) s = new rn(e);
      else if (e instanceof En) s = e;
      else
        throw new TypeError(
          "discr must be a UnionDiscriminator or an unsigned integer layout"
        );
      if ((t === void 0 && (t = null), !(t === null || t instanceof ae)))
        throw new TypeError("defaultLayout must be null or a Layout");
      if (t !== null) {
        if (0 > t.span)
          throw new Error("defaultLayout must have constant span");
        t.property === void 0 && (t = t.replicate("content"));
      }
      let o = -1;
      t &&
        ((o = t.span),
        0 <= o && (e instanceof je || e instanceof Ze) && (o += s.layout.span)),
        super(o, n),
        (this.discriminator = s),
        (this.usesPrefixDiscriminator = e instanceof je || e instanceof Ze),
        (this.defaultLayout = t),
        (this.registry = {});
      let i = this.defaultGetSourceVariant.bind(this);
      (this.getSourceVariant = function (c) {
        return i(c);
      }),
        (this.configGetSourceVariant = function (c) {
          i = c.bind(this);
        });
    }
    getSpan(e, t = 0) {
      if (0 <= this.span) return this.span;
      let n = this.getVariant(e, t);
      if (!n)
        throw new Error("unable to determine span for unrecognized variant");
      return n.getSpan(e, t);
    }
    defaultGetSourceVariant(e) {
      if (
        Object.prototype.hasOwnProperty.call(e, this.discriminator.property)
      ) {
        if (
          this.defaultLayout &&
          this.defaultLayout.property &&
          Object.prototype.hasOwnProperty.call(e, this.defaultLayout.property)
        )
          return;
        let t = this.registry[e[this.discriminator.property]];
        if (
          t &&
          (!t.layout ||
            (t.property && Object.prototype.hasOwnProperty.call(e, t.property)))
        )
          return t;
      } else
        for (let t in this.registry) {
          let n = this.registry[t];
          if (n.property && Object.prototype.hasOwnProperty.call(e, n.property))
            return n;
        }
      throw new Error("unable to infer src variant");
    }
    decode(e, t = 0) {
      let n,
        s = this.discriminator,
        o = s.decode(e, t),
        i = this.registry[o];
      if (i === void 0) {
        let c = this.defaultLayout,
          a = 0;
        this.usesPrefixDiscriminator && (a = s.layout.span),
          (n = this.makeDestinationObject()),
          (n[s.property] = o),
          (n[c.property] = c.decode(e, t + a));
      } else n = i.decode(e, t);
      return n;
    }
    encode(e, t, n = 0) {
      let s = this.getSourceVariant(e);
      if (s === void 0) {
        let o = this.discriminator,
          i = this.defaultLayout,
          c = 0;
        return (
          this.usesPrefixDiscriminator && (c = o.layout.span),
          o.encode(e[o.property], t, n),
          c + i.encode(e[i.property], t, n + c)
        );
      }
      return s.encode(e, t, n);
    }
    addVariant(e, t, n) {
      let s = new pr(this, e, t, n);
      return (this.registry[e] = s), s;
    }
    getVariant(e, t = 0) {
      let n;
      return (
        e instanceof Uint8Array
          ? (n = this.discriminator.decode(e, t))
          : (n = e),
        this.registry[n]
      );
    }
  };
  b.Union = In;
  var pr = class extends ae {
    constructor(e, t, n, s) {
      if (!(e instanceof In)) throw new TypeError("union must be a Union");
      if (!Number.isInteger(t) || 0 > t)
        throw new TypeError("variant must be a (non-negative) integer");
      if ((typeof n == "string" && s === void 0 && ((s = n), (n = null)), n)) {
        if (!(n instanceof ae)) throw new TypeError("layout must be a Layout");
        if (
          e.defaultLayout !== null &&
          0 <= n.span &&
          n.span > e.defaultLayout.span
        )
          throw new Error("variant span exceeds span of containing union");
        if (typeof s != "string")
          throw new TypeError("variant must have a String property");
      }
      let o = e.span;
      0 > e.span &&
        ((o = n ? n.span : 0),
        0 <= o &&
          e.usesPrefixDiscriminator &&
          (o += e.discriminator.layout.span)),
        super(o, s),
        (this.union = e),
        (this.variant = t),
        (this.layout = n || null);
    }
    getSpan(e, t = 0) {
      if (0 <= this.span) return this.span;
      let n = 0;
      this.union.usesPrefixDiscriminator &&
        (n = this.union.discriminator.layout.span);
      let s = 0;
      return this.layout && (s = this.layout.getSpan(e, t + n)), n + s;
    }
    decode(e, t = 0) {
      let n = this.makeDestinationObject();
      if (this !== this.union.getVariant(e, t))
        throw new Error("variant mismatch");
      let s = 0;
      return (
        this.union.usesPrefixDiscriminator &&
          (s = this.union.discriminator.layout.span),
        this.layout
          ? (n[this.property] = this.layout.decode(e, t + s))
          : this.property
          ? (n[this.property] = !0)
          : this.union.usesPrefixDiscriminator &&
            (n[this.union.discriminator.property] = this.variant),
        n
      );
    }
    encode(e, t, n = 0) {
      let s = 0;
      if (
        (this.union.usesPrefixDiscriminator &&
          (s = this.union.discriminator.layout.span),
        this.layout && !Object.prototype.hasOwnProperty.call(e, this.property))
      )
        throw new TypeError("variant lacks property " + this.property);
      this.union.discriminator.encode(this.variant, t, n);
      let o = s;
      if (
        this.layout &&
        (this.layout.encode(e[this.property], t, n + s),
        (o += this.layout.getSpan(t, n + s)),
        0 <= this.union.span && o > this.union.span)
      )
        throw new Error("encoded variant overruns containing union");
      return o;
    }
    fromArray(e) {
      if (this.layout) return this.layout.fromArray(e);
    }
  };
  b.VariantLayout = pr;
  function nn(r) {
    return 0 > r && (r += 4294967296), r;
  }
  var vn = class extends ae {
    constructor(e, t, n) {
      if (!(e instanceof je || e instanceof Ze))
        throw new TypeError("word must be a UInt or UIntBE layout");
      if (
        (typeof t == "string" && n === void 0 && ((n = t), (t = !1)),
        4 < e.span)
      )
        throw new RangeError("word cannot exceed 32 bits");
      super(e.span, n), (this.word = e), (this.msb = !!t), (this.fields = []);
      let s = 0;
      (this._packedSetValue = function (o) {
        return (s = nn(o)), this;
      }),
        (this._packedGetValue = function () {
          return s;
        });
    }
    decode(e, t = 0) {
      let n = this.makeDestinationObject(),
        s = this.word.decode(e, t);
      this._packedSetValue(s);
      for (let o of this.fields)
        o.property !== void 0 && (n[o.property] = o.decode(e));
      return n;
    }
    encode(e, t, n = 0) {
      let s = this.word.decode(t, n);
      this._packedSetValue(s);
      for (let o of this.fields)
        if (o.property !== void 0) {
          let i = e[o.property];
          i !== void 0 && o.encode(i);
        }
      return this.word.encode(this._packedGetValue(), t, n);
    }
    addField(e, t) {
      let n = new _n(this, e, t);
      return this.fields.push(n), n;
    }
    addBoolean(e) {
      let t = new gr(this, e);
      return this.fields.push(t), t;
    }
    fieldFor(e) {
      if (typeof e != "string") throw new TypeError("property must be string");
      for (let t of this.fields) if (t.property === e) return t;
    }
  };
  b.BitStructure = vn;
  var _n = class {
    constructor(e, t, n) {
      if (!(e instanceof vn))
        throw new TypeError("container must be a BitStructure");
      if (!Number.isInteger(t) || 0 >= t)
        throw new TypeError("bits must be positive integer");
      let s = 8 * e.span,
        o = e.fields.reduce((i, c) => i + c.bits, 0);
      if (t + o > s)
        throw new Error(
          "bits too long for span remainder (" +
            (s - o) +
            " of " +
            s +
            " remain)"
        );
      (this.container = e),
        (this.bits = t),
        (this.valueMask = (1 << t) - 1),
        t === 32 && (this.valueMask = 4294967295),
        (this.start = o),
        this.container.msb && (this.start = s - o - t),
        (this.wordMask = nn(this.valueMask << this.start)),
        (this.property = n);
    }
    decode(e, t) {
      let n = this.container._packedGetValue();
      return nn(n & this.wordMask) >>> this.start;
    }
    encode(e) {
      if (
        typeof e != "number" ||
        !Number.isInteger(e) ||
        e !== nn(e & this.valueMask)
      )
        throw new TypeError(
          As("BitField.encode", this) +
            " value must be integer not exceeding " +
            this.valueMask
        );
      let t = this.container._packedGetValue(),
        n = nn(e << this.start);
      this.container._packedSetValue(nn(t & ~this.wordMask) | n);
    }
  };
  b.BitField = _n;
  var gr = class extends _n {
    constructor(e, t) {
      super(e, 1, t);
    }
    decode(e, t) {
      return !!super.decode(e, t);
    }
    encode(e) {
      typeof e == "boolean" && (e = +e), super.encode(e);
    }
  };
  b.Boolean = gr;
  var mr = class extends ae {
    constructor(e, t) {
      if (
        !((e instanceof Oe && e.isCount()) || (Number.isInteger(e) && 0 <= e))
      )
        throw new TypeError(
          "length must be positive integer or an unsigned integer ExternalLayout"
        );
      let n = -1;
      e instanceof Oe || (n = e), super(n, t), (this.length = e);
    }
    getSpan(e, t) {
      let n = this.span;
      return 0 > n && (n = this.length.decode(e, t)), n;
    }
    decode(e, t = 0) {
      let n = this.span;
      return 0 > n && (n = this.length.decode(e, t)), oe(e).slice(t, t + n);
    }
    encode(e, t, n) {
      let s = this.length;
      if (
        (this.length instanceof Oe && (s = e.length),
        !(e instanceof Uint8Array && s === e.length))
      )
        throw new TypeError(
          As("Blob.encode", this) +
            " requires (length " +
            s +
            ") Uint8Array as src"
        );
      if (n + s > t.length)
        throw new RangeError("encoding overruns Uint8Array");
      let o = oe(e);
      return (
        oe(t).write(o.toString("hex"), n, s, "hex"),
        this.length instanceof Oe && this.length.encode(s, t, n),
        s
      );
    }
  };
  b.Blob = mr;
  var br = class extends ae {
    constructor(e) {
      super(-1, e);
    }
    getSpan(e, t = 0) {
      sn(e);
      let n = t;
      for (; n < e.length && e[n] !== 0; ) n += 1;
      return 1 + n - t;
    }
    decode(e, t = 0) {
      let n = this.getSpan(e, t);
      return oe(e)
        .slice(t, t + n - 1)
        .toString("utf-8");
    }
    encode(e, t, n = 0) {
      typeof e != "string" && (e = String(e));
      let s = xs.Buffer.from(e, "utf8"),
        o = s.length;
      if (n + o > t.length) throw new RangeError("encoding overruns Buffer");
      let i = oe(t);
      return s.copy(i, n), (i[n + o] = 0), o + 1;
    }
  };
  b.CString = br;
  var wr = class extends ae {
    constructor(e, t) {
      if (
        (typeof e == "string" && t === void 0 && ((t = e), (e = void 0)),
        e === void 0)
      )
        e = -1;
      else if (!Number.isInteger(e))
        throw new TypeError("maxSpan must be an integer");
      super(-1, t), (this.maxSpan = e);
    }
    getSpan(e, t = 0) {
      return sn(e), e.length - t;
    }
    decode(e, t = 0) {
      let n = this.getSpan(e, t);
      if (0 <= this.maxSpan && this.maxSpan < n)
        throw new RangeError("text length exceeds maxSpan");
      return oe(e)
        .slice(t, t + n)
        .toString("utf-8");
    }
    encode(e, t, n = 0) {
      typeof e != "string" && (e = String(e));
      let s = xs.Buffer.from(e, "utf8"),
        o = s.length;
      if (0 <= this.maxSpan && this.maxSpan < o)
        throw new RangeError("text length exceeds maxSpan");
      if (n + o > t.length) throw new RangeError("encoding overruns Buffer");
      return s.copy(oe(t), n), o;
    }
  };
  b.UTF8 = wr;
  var kr = class extends ae {
    constructor(e, t) {
      super(0, t), (this.value = e);
    }
    decode(e, t) {
      return this.value;
    }
    encode(e, t, n) {
      return 0;
    }
  };
  b.Constant = kr;
  b.greedy = (r, e) => new sr(r, e);
  b.offset = (r, e, t) => new Bn(r, e, t);
  b.u8 = (r) => new je(1, r);
  b.u16 = (r) => new je(2, r);
  b.u24 = (r) => new je(3, r);
  b.u32 = (r) => new je(4, r);
  b.u40 = (r) => new je(5, r);
  b.u48 = (r) => new je(6, r);
  b.nu64 = (r) => new or(r);
  b.u16be = (r) => new Ze(2, r);
  b.u24be = (r) => new Ze(3, r);
  b.u32be = (r) => new Ze(4, r);
  b.u40be = (r) => new Ze(5, r);
  b.u48be = (r) => new Ze(6, r);
  b.nu64be = (r) => new ir(r);
  b.s8 = (r) => new gt(1, r);
  b.s16 = (r) => new gt(2, r);
  b.s24 = (r) => new gt(3, r);
  b.s32 = (r) => new gt(4, r);
  b.s40 = (r) => new gt(5, r);
  b.s48 = (r) => new gt(6, r);
  b.ns64 = (r) => new ar(r);
  b.s16be = (r) => new xt(2, r);
  b.s24be = (r) => new xt(3, r);
  b.s32be = (r) => new xt(4, r);
  b.s40be = (r) => new xt(5, r);
  b.s48be = (r) => new xt(6, r);
  b.ns64be = (r) => new cr(r);
  b.f32 = (r) => new ur(r);
  b.f32be = (r) => new fr(r);
  b.f64 = (r) => new lr(r);
  b.f64be = (r) => new dr(r);
  b.struct = (r, e, t) => new yr(r, e, t);
  b.bits = (r, e, t) => new vn(r, e, t);
  b.seq = (r, e, t) => new hr(r, e, t);
  b.union = (r, e, t) => new In(r, e, t);
  b.unionLayoutDiscriminator = (r, e) => new rn(r, e);
  b.blob = (r, e) => new mr(r, e);
  b.cstr = (r) => new br(r);
  b.utf8 = (r, e) => new wr(r, e);
  b.constant = (r, e) => new kr(r, e);
});
var bi = St((on) => {
  "use strict";
  Object.defineProperty(on, "__esModule", { value: !0 });
  var Er;
  function Fc(r) {
    {
      let e = Buffer.from(r);
      e.reverse();
      let t = e.toString("hex");
      return t.length === 0 ? BigInt(0) : BigInt(`0x${t}`);
    }
    return Er.toBigInt(r, !1);
  }
  on.toBigIntLE = Fc;
  function jc(r) {
    {
      let e = r.toString("hex");
      return e.length === 0 ? BigInt(0) : BigInt(`0x${e}`);
    }
    return Er.toBigInt(r, !0);
  }
  on.toBigIntBE = jc;
  function Hc(r, e) {
    {
      let t = r.toString(16),
        n = Buffer.from(t.padStart(e * 2, "0").slice(0, e * 2), "hex");
      return n.reverse(), n;
    }
    return Er.fromBigInt(r, Buffer.allocUnsafe(e), !1);
  }
  on.toBufferLE = Hc;
  function Gc(r, e) {
    {
      let t = r.toString(16);
      return Buffer.from(t.padStart(e * 2, "0").slice(0, e * 2), "hex");
    }
    return Er.fromBigInt(r, Buffer.allocUnsafe(e), !0);
  }
  on.toBufferBE = Gc;
});
function Yc(r) {
  return xn(r) && typeof r[Symbol.iterator] == "function";
}
function xn(r) {
  return typeof r == "object" && r != null;
}
function Ir(r) {
  return xn(r) && !Array.isArray(r);
}
function tt(r) {
  return typeof r == "symbol"
    ? r.toString()
    : typeof r == "string"
    ? JSON.stringify(r)
    : `${r}`;
}
function Zc(r) {
  let { done: e, value: t } = r.next();
  return e ? void 0 : t;
}
function Xc(r, e, t, n) {
  if (r === !0) return;
  r === !1 ? (r = {}) : typeof r == "string" && (r = { message: r });
  let { path: s, branch: o } = e,
    { type: i } = t,
    {
      refinement: c,
      message: a = `Expected a value of type \`${i}\`${
        c ? ` with refinement \`${c}\`` : ""
      }, but received: \`${tt(n)}\``,
    } = r;
  return Y(
    F(
      {
        value: n,
        type: i,
        refinement: c,
        key: s[s.length - 1],
        path: s,
        branch: o,
      },
      r
    ),
    { message: a }
  );
}
function* wi(r, e, t, n) {
  Yc(r) || (r = [r]);
  for (let s of r) {
    let o = Xc(s, e, t, n);
    o && (yield o);
  }
}
function* Ps(r, e, t = {}) {
  let { path: n = [], branch: s = [r], coerce: o = !1, mask: i = !1 } = t,
    c = { path: n, branch: s, mask: i };
  o && (r = e.coercer(r, c));
  let a = "valid";
  for (let u of e.validator(r, c))
    (u.explanation = t.message), (a = "not_valid"), yield [u, void 0];
  for (let [u, d, g] of e.entries(r, c)) {
    let y = Ps(d, g, {
      path: u === void 0 ? n : [...n, u],
      branch: u === void 0 ? s : [...s, d],
      coerce: o,
      mask: i,
      message: t.message,
    });
    for (let l of y)
      l[0]
        ? ((a = l[0].refinement != null ? "not_refined" : "not_valid"),
          yield [l[0], void 0])
        : o &&
          ((d = l[1]),
          u === void 0
            ? (r = d)
            : r instanceof Map
            ? r.set(u, d)
            : r instanceof Set
            ? r.add(d)
            : xn(r) && (d !== void 0 || u in r) && (r[u] = d));
  }
  if (a !== "not_valid")
    for (let u of e.refiner(r, c))
      (u.explanation = t.message), (a = "not_refined"), yield [u, void 0];
  a === "valid" && (yield [void 0, r]);
}
function Ts(r, e, t) {
  let n = An(r, e, { message: t });
  if (n[0]) throw n[0];
}
function P(r, e, t) {
  let n = An(r, e, { coerce: !0, message: t });
  if (n[0]) throw n[0];
  return n[1];
}
function Jc(r, e, t) {
  let n = An(r, e, { coerce: !0, mask: !0, message: t });
  if (n[0]) throw n[0];
  return n[1];
}
function ki(r, e) {
  return !An(r, e)[0];
}
function An(r, e, t = {}) {
  let n = Ps(r, e, t),
    s = Zc(n);
  return s[0]
    ? [
        new Ls(s[0], function* () {
          for (let i of n) i[0] && (yield i[0]);
        }),
        void 0,
      ]
    : [void 0, s[1]];
}
function Wt(r, e) {
  return new Qe({ type: r, schema: null, validator: e });
}
function Si() {
  return Wt("any", () => !0);
}
function C(r) {
  return new Qe({
    type: "array",
    schema: r,
    *entries(e) {
      if (r && Array.isArray(e))
        for (let [t, n] of e.entries()) yield [t, n, r];
    },
    coercer(e) {
      return Array.isArray(e) ? e.slice() : e;
    },
    validator(e) {
      return (
        Array.isArray(e) || `Expected an array value, but received: ${tt(e)}`
      );
    },
  });
}
function nt() {
  return Wt("boolean", (r) => typeof r == "boolean");
}
function vr(r) {
  return Wt(
    "instance",
    (e) =>
      e instanceof r ||
      `Expected a \`${r.name}\` instance, but received: ${tt(e)}`
  );
}
function be(r) {
  let e = tt(r),
    t = typeof r;
  return new Qe({
    type: "literal",
    schema: t === "string" || t === "number" || t === "boolean" ? r : null,
    validator(n) {
      return n === r || `Expected the literal \`${e}\`, but received: ${tt(n)}`;
    },
  });
}
function Qc() {
  return Wt("never", () => !1);
}
function O(r) {
  return new Qe(
    Y(F({}, r), {
      validator: (e, t) => e === null || r.validator(e, t),
      refiner: (e, t) => e === null || r.refiner(e, t),
    })
  );
}
function p() {
  return Wt(
    "number",
    (r) =>
      (typeof r == "number" && !isNaN(r)) ||
      `Expected a number, but received: ${tt(r)}`
  );
}
function D(r) {
  return new Qe(
    Y(F({}, r), {
      validator: (e, t) => e === void 0 || r.validator(e, t),
      refiner: (e, t) => e === void 0 || r.refiner(e, t),
    })
  );
}
function Cs(r, e) {
  return new Qe({
    type: "record",
    schema: null,
    *entries(t) {
      if (xn(t))
        for (let n in t) {
          let s = t[n];
          yield [n, n, r], yield [n, s, e];
        }
    },
    validator(t) {
      return Ir(t) || `Expected an object, but received: ${tt(t)}`;
    },
    coercer(t) {
      return Ir(t) ? F({}, t) : t;
    },
  });
}
function A() {
  return Wt(
    "string",
    (r) => typeof r == "string" || `Expected a string, but received: ${tt(r)}`
  );
}
function _r(r) {
  let e = Qc();
  return new Qe({
    type: "tuple",
    schema: null,
    *entries(t) {
      if (Array.isArray(t)) {
        let n = Math.max(r.length, t.length);
        for (let s = 0; s < n; s++) yield [s, t[s], r[s] || e];
      }
    },
    validator(t) {
      return Array.isArray(t) || `Expected an array, but received: ${tt(t)}`;
    },
    coercer(t) {
      return Array.isArray(t) ? t.slice() : t;
    },
  });
}
function v(r) {
  let e = Object.keys(r);
  return new Qe({
    type: "type",
    schema: r,
    *entries(t) {
      if (xn(t)) for (let n of e) yield [n, t[n], r[n]];
    },
    validator(t) {
      return Ir(t) || `Expected an object, but received: ${tt(t)}`;
    },
    coercer(t) {
      return Ir(t) ? F({}, t) : t;
    },
  });
}
function Ne(r) {
  let e = r.map((t) => t.type).join(" | ");
  return new Qe({
    type: "union",
    schema: null,
    coercer(t, n) {
      for (let s of r) {
        let [o, i] = s.validate(t, { coerce: !0, mask: n.mask });
        if (!o) return i;
      }
      return t;
    },
    validator(t, n) {
      let s = [];
      for (let o of r) {
        let [...i] = Ps(t, o, n),
          [c] = i;
        if (c[0]) for (let [a] of i) a && s.push(a);
        else return [];
      }
      return [
        `Expected the value to satisfy a union of \`${e}\`, but received: ${tt(
          t
        )}`,
        ...s,
      ];
    },
  });
}
function Dt() {
  return Wt("unknown", () => !0);
}
function an(r, e, t) {
  return new Qe(
    Y(F({}, r), {
      coercer: (n, s) => (ki(n, e) ? r.coercer(t(n, s), s) : r.coercer(n, s)),
    })
  );
}
var Ls,
  Qe,
  Bi = le(() => {
    "use strict";
    Ls = class extends TypeError {
      constructor(e, t) {
        let n,
          u = e,
          { message: s, explanation: o } = u,
          i = dt(u, ["message", "explanation"]),
          { path: c } = e,
          a = c.length === 0 ? s : `At path: ${c.join(".")} -- ${s}`;
        super(o ?? a),
          o != null && (this.cause = a),
          Object.assign(this, i),
          (this.name = this.constructor.name),
          (this.failures = () => n ?? (n = [e, ...t()]));
      }
    };
    Qe = class {
      constructor(e) {
        let {
          type: t,
          schema: n,
          validator: s,
          refiner: o,
          coercer: i = (a) => a,
          entries: c = function* () {},
        } = e;
        (this.type = t),
          (this.schema = n),
          (this.entries = c),
          (this.coercer = i),
          s
            ? (this.validator = (a, u) => {
                let d = s(a, u);
                return wi(d, u, this, a);
              })
            : (this.validator = () => []),
          o
            ? (this.refiner = (a, u) => {
                let d = o(a, u);
                return wi(d, u, this, a);
              })
            : (this.refiner = () => []);
      }
      assert(e, t) {
        return Ts(e, this, t);
      }
      create(e, t) {
        return P(e, this, t);
      }
      is(e) {
        return ki(e, this);
      }
      mask(e, t) {
        return Jc(e, this, t);
      }
      validate(e, t = {}) {
        return An(e, this, t);
      }
    };
  });
function Rn() {
  if (
    !xr &&
    ((xr =
      (typeof crypto < "u" &&
        crypto.getRandomValues &&
        crypto.getRandomValues.bind(crypto)) ||
      (typeof msCrypto < "u" &&
        typeof msCrypto.getRandomValues == "function" &&
        msCrypto.getRandomValues.bind(msCrypto))),
    !xr)
  )
    throw new Error(
      "crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported"
    );
  return xr(eu);
}
var xr,
  eu,
  Os = le(() => {
    "use strict";
    eu = new Uint8Array(16);
  });
var Ei,
  Ii = le(() => {
    "use strict";
    Ei =
      /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
  });
function tu(r) {
  return typeof r == "string" && Ei.test(r);
}
var At,
  Ln = le(() => {
    "use strict";
    Ii();
    At = tu;
  });
function nu(r) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0,
    t = (
      Pe[r[e + 0]] +
      Pe[r[e + 1]] +
      Pe[r[e + 2]] +
      Pe[r[e + 3]] +
      "-" +
      Pe[r[e + 4]] +
      Pe[r[e + 5]] +
      "-" +
      Pe[r[e + 6]] +
      Pe[r[e + 7]] +
      "-" +
      Pe[r[e + 8]] +
      Pe[r[e + 9]] +
      "-" +
      Pe[r[e + 10]] +
      Pe[r[e + 11]] +
      Pe[r[e + 12]] +
      Pe[r[e + 13]] +
      Pe[r[e + 14]] +
      Pe[r[e + 15]]
    ).toLowerCase();
  if (!At(t)) throw TypeError("Stringified UUID is invalid");
  return t;
}
var Pe,
  Ar,
  Rt,
  Pn = le(() => {
    "use strict";
    Ln();
    Pe = [];
    for (Ar = 0; Ar < 256; ++Ar) Pe.push((Ar + 256).toString(16).substr(1));
    Rt = nu;
  });
function ru(r, e, t) {
  var n = (e && t) || 0,
    s = e || new Array(16);
  r = r || {};
  var o = r.node || vi,
    i = r.clockseq !== void 0 ? r.clockseq : Ns;
  if (o == null || i == null) {
    var c = r.random || (r.rng || Rn)();
    o == null && (o = vi = [c[0] | 1, c[1], c[2], c[3], c[4], c[5]]),
      i == null && (i = Ns = ((c[6] << 8) | c[7]) & 16383);
  }
  var a = r.msecs !== void 0 ? r.msecs : Date.now(),
    u = r.nsecs !== void 0 ? r.nsecs : zs + 1,
    d = a - Us + (u - zs) / 1e4;
  if (
    (d < 0 && r.clockseq === void 0 && (i = (i + 1) & 16383),
    (d < 0 || a > Us) && r.nsecs === void 0 && (u = 0),
    u >= 1e4)
  )
    throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
  (Us = a), (zs = u), (Ns = i), (a += 122192928e5);
  var g = ((a & 268435455) * 1e4 + u) % 4294967296;
  (s[n++] = (g >>> 24) & 255),
    (s[n++] = (g >>> 16) & 255),
    (s[n++] = (g >>> 8) & 255),
    (s[n++] = g & 255);
  var y = ((a / 4294967296) * 1e4) & 268435455;
  (s[n++] = (y >>> 8) & 255),
    (s[n++] = y & 255),
    (s[n++] = ((y >>> 24) & 15) | 16),
    (s[n++] = (y >>> 16) & 255),
    (s[n++] = (i >>> 8) | 128),
    (s[n++] = i & 255);
  for (var l = 0; l < 6; ++l) s[n + l] = o[l];
  return e || Rt(s);
}
var vi,
  Ns,
  Us,
  zs,
  _i,
  xi = le(() => {
    "use strict";
    Os();
    Pn();
    (Us = 0), (zs = 0);
    _i = ru;
  });
function su(r) {
  if (!At(r)) throw TypeError("Invalid UUID");
  var e,
    t = new Uint8Array(16);
  return (
    (t[0] = (e = parseInt(r.slice(0, 8), 16)) >>> 24),
    (t[1] = (e >>> 16) & 255),
    (t[2] = (e >>> 8) & 255),
    (t[3] = e & 255),
    (t[4] = (e = parseInt(r.slice(9, 13), 16)) >>> 8),
    (t[5] = e & 255),
    (t[6] = (e = parseInt(r.slice(14, 18), 16)) >>> 8),
    (t[7] = e & 255),
    (t[8] = (e = parseInt(r.slice(19, 23), 16)) >>> 8),
    (t[9] = e & 255),
    (t[10] = ((e = parseInt(r.slice(24, 36), 16)) / 1099511627776) & 255),
    (t[11] = (e / 4294967296) & 255),
    (t[12] = (e >>> 24) & 255),
    (t[13] = (e >>> 16) & 255),
    (t[14] = (e >>> 8) & 255),
    (t[15] = e & 255),
    t
  );
}
var Rr,
  Ks = le(() => {
    "use strict";
    Ln();
    Rr = su;
  });
function ou(r) {
  r = unescape(encodeURIComponent(r));
  for (var e = [], t = 0; t < r.length; ++t) e.push(r.charCodeAt(t));
  return e;
}
function Lr(r, e, t) {
  function n(s, o, i, c) {
    if (
      (typeof s == "string" && (s = ou(s)),
      typeof o == "string" && (o = Rr(o)),
      o.length !== 16)
    )
      throw TypeError(
        "Namespace must be array-like (16 iterable integer values, 0-255)"
      );
    var a = new Uint8Array(16 + s.length);
    if (
      (a.set(o),
      a.set(s, o.length),
      (a = t(a)),
      (a[6] = (a[6] & 15) | e),
      (a[8] = (a[8] & 63) | 128),
      i)
    ) {
      c = c || 0;
      for (var u = 0; u < 16; ++u) i[c + u] = a[u];
      return i;
    }
    return Rt(a);
  }
  try {
    n.name = r;
  } catch {}
  return (n.DNS = iu), (n.URL = au), n;
}
var iu,
  au,
  qs = le(() => {
    "use strict";
    Pn();
    Ks();
    (iu = "6ba7b810-9dad-11d1-80b4-00c04fd430c8"),
      (au = "6ba7b811-9dad-11d1-80b4-00c04fd430c8");
  });
function cu(r) {
  if (typeof r == "string") {
    var e = unescape(encodeURIComponent(r));
    r = new Uint8Array(e.length);
    for (var t = 0; t < e.length; ++t) r[t] = e.charCodeAt(t);
  }
  return uu(fu(lu(r), r.length * 8));
}
function uu(r) {
  for (
    var e = [], t = r.length * 32, n = "0123456789abcdef", s = 0;
    s < t;
    s += 8
  ) {
    var o = (r[s >> 5] >>> s % 32) & 255,
      i = parseInt(n.charAt((o >>> 4) & 15) + n.charAt(o & 15), 16);
    e.push(i);
  }
  return e;
}
function Ai(r) {
  return (((r + 64) >>> 9) << 4) + 14 + 1;
}
function fu(r, e) {
  (r[e >> 5] |= 128 << e % 32), (r[Ai(e) - 1] = e);
  for (
    var t = 1732584193, n = -271733879, s = -1732584194, o = 271733878, i = 0;
    i < r.length;
    i += 16
  ) {
    var c = t,
      a = n,
      u = s,
      d = o;
    (t = Ue(t, n, s, o, r[i], 7, -680876936)),
      (o = Ue(o, t, n, s, r[i + 1], 12, -389564586)),
      (s = Ue(s, o, t, n, r[i + 2], 17, 606105819)),
      (n = Ue(n, s, o, t, r[i + 3], 22, -1044525330)),
      (t = Ue(t, n, s, o, r[i + 4], 7, -176418897)),
      (o = Ue(o, t, n, s, r[i + 5], 12, 1200080426)),
      (s = Ue(s, o, t, n, r[i + 6], 17, -1473231341)),
      (n = Ue(n, s, o, t, r[i + 7], 22, -45705983)),
      (t = Ue(t, n, s, o, r[i + 8], 7, 1770035416)),
      (o = Ue(o, t, n, s, r[i + 9], 12, -1958414417)),
      (s = Ue(s, o, t, n, r[i + 10], 17, -42063)),
      (n = Ue(n, s, o, t, r[i + 11], 22, -1990404162)),
      (t = Ue(t, n, s, o, r[i + 12], 7, 1804603682)),
      (o = Ue(o, t, n, s, r[i + 13], 12, -40341101)),
      (s = Ue(s, o, t, n, r[i + 14], 17, -1502002290)),
      (n = Ue(n, s, o, t, r[i + 15], 22, 1236535329)),
      (t = ze(t, n, s, o, r[i + 1], 5, -165796510)),
      (o = ze(o, t, n, s, r[i + 6], 9, -1069501632)),
      (s = ze(s, o, t, n, r[i + 11], 14, 643717713)),
      (n = ze(n, s, o, t, r[i], 20, -373897302)),
      (t = ze(t, n, s, o, r[i + 5], 5, -701558691)),
      (o = ze(o, t, n, s, r[i + 10], 9, 38016083)),
      (s = ze(s, o, t, n, r[i + 15], 14, -660478335)),
      (n = ze(n, s, o, t, r[i + 4], 20, -405537848)),
      (t = ze(t, n, s, o, r[i + 9], 5, 568446438)),
      (o = ze(o, t, n, s, r[i + 14], 9, -1019803690)),
      (s = ze(s, o, t, n, r[i + 3], 14, -187363961)),
      (n = ze(n, s, o, t, r[i + 8], 20, 1163531501)),
      (t = ze(t, n, s, o, r[i + 13], 5, -1444681467)),
      (o = ze(o, t, n, s, r[i + 2], 9, -51403784)),
      (s = ze(s, o, t, n, r[i + 7], 14, 1735328473)),
      (n = ze(n, s, o, t, r[i + 12], 20, -1926607734)),
      (t = Ke(t, n, s, o, r[i + 5], 4, -378558)),
      (o = Ke(o, t, n, s, r[i + 8], 11, -2022574463)),
      (s = Ke(s, o, t, n, r[i + 11], 16, 1839030562)),
      (n = Ke(n, s, o, t, r[i + 14], 23, -35309556)),
      (t = Ke(t, n, s, o, r[i + 1], 4, -1530992060)),
      (o = Ke(o, t, n, s, r[i + 4], 11, 1272893353)),
      (s = Ke(s, o, t, n, r[i + 7], 16, -155497632)),
      (n = Ke(n, s, o, t, r[i + 10], 23, -1094730640)),
      (t = Ke(t, n, s, o, r[i + 13], 4, 681279174)),
      (o = Ke(o, t, n, s, r[i], 11, -358537222)),
      (s = Ke(s, o, t, n, r[i + 3], 16, -722521979)),
      (n = Ke(n, s, o, t, r[i + 6], 23, 76029189)),
      (t = Ke(t, n, s, o, r[i + 9], 4, -640364487)),
      (o = Ke(o, t, n, s, r[i + 12], 11, -421815835)),
      (s = Ke(s, o, t, n, r[i + 15], 16, 530742520)),
      (n = Ke(n, s, o, t, r[i + 2], 23, -995338651)),
      (t = qe(t, n, s, o, r[i], 6, -198630844)),
      (o = qe(o, t, n, s, r[i + 7], 10, 1126891415)),
      (s = qe(s, o, t, n, r[i + 14], 15, -1416354905)),
      (n = qe(n, s, o, t, r[i + 5], 21, -57434055)),
      (t = qe(t, n, s, o, r[i + 12], 6, 1700485571)),
      (o = qe(o, t, n, s, r[i + 3], 10, -1894986606)),
      (s = qe(s, o, t, n, r[i + 10], 15, -1051523)),
      (n = qe(n, s, o, t, r[i + 1], 21, -2054922799)),
      (t = qe(t, n, s, o, r[i + 8], 6, 1873313359)),
      (o = qe(o, t, n, s, r[i + 15], 10, -30611744)),
      (s = qe(s, o, t, n, r[i + 6], 15, -1560198380)),
      (n = qe(n, s, o, t, r[i + 13], 21, 1309151649)),
      (t = qe(t, n, s, o, r[i + 4], 6, -145523070)),
      (o = qe(o, t, n, s, r[i + 11], 10, -1120210379)),
      (s = qe(s, o, t, n, r[i + 2], 15, 718787259)),
      (n = qe(n, s, o, t, r[i + 9], 21, -343485551)),
      (t = Lt(t, c)),
      (n = Lt(n, a)),
      (s = Lt(s, u)),
      (o = Lt(o, d));
  }
  return [t, n, s, o];
}
function lu(r) {
  if (r.length === 0) return [];
  for (var e = r.length * 8, t = new Uint32Array(Ai(e)), n = 0; n < e; n += 8)
    t[n >> 5] |= (r[n / 8] & 255) << n % 32;
  return t;
}
function Lt(r, e) {
  var t = (r & 65535) + (e & 65535),
    n = (r >> 16) + (e >> 16) + (t >> 16);
  return (n << 16) | (t & 65535);
}
function du(r, e) {
  return (r << e) | (r >>> (32 - e));
}
function Pr(r, e, t, n, s, o) {
  return Lt(du(Lt(Lt(e, r), Lt(n, o)), s), t);
}
function Ue(r, e, t, n, s, o, i) {
  return Pr((e & t) | (~e & n), r, e, s, o, i);
}
function ze(r, e, t, n, s, o, i) {
  return Pr((e & n) | (t & ~n), r, e, s, o, i);
}
function Ke(r, e, t, n, s, o, i) {
  return Pr(e ^ t ^ n, r, e, s, o, i);
}
function qe(r, e, t, n, s, o, i) {
  return Pr(t ^ (e | ~n), r, e, s, o, i);
}
var Ri,
  Li = le(() => {
    "use strict";
    Ri = cu;
  });
var hu,
  Pi,
  Ti = le(() => {
    "use strict";
    qs();
    Li();
    (hu = Lr("v3", 48, Ri)), (Pi = hu);
  });
function yu(r, e, t) {
  r = r || {};
  var n = r.random || (r.rng || Rn)();
  if (((n[6] = (n[6] & 15) | 64), (n[8] = (n[8] & 63) | 128), e)) {
    t = t || 0;
    for (var s = 0; s < 16; ++s) e[t + s] = n[s];
    return e;
  }
  return Rt(n);
}
var Ci,
  Oi = le(() => {
    "use strict";
    Os();
    Pn();
    Ci = yu;
  });
function pu(r, e, t, n) {
  switch (r) {
    case 0:
      return (e & t) ^ (~e & n);
    case 1:
      return e ^ t ^ n;
    case 2:
      return (e & t) ^ (e & n) ^ (t & n);
    case 3:
      return e ^ t ^ n;
  }
}
function Ws(r, e) {
  return (r << e) | (r >>> (32 - e));
}
function gu(r) {
  var e = [1518500249, 1859775393, 2400959708, 3395469782],
    t = [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
  if (typeof r == "string") {
    var n = unescape(encodeURIComponent(r));
    r = [];
    for (var s = 0; s < n.length; ++s) r.push(n.charCodeAt(s));
  } else Array.isArray(r) || (r = Array.prototype.slice.call(r));
  r.push(128);
  for (
    var o = r.length / 4 + 2, i = Math.ceil(o / 16), c = new Array(i), a = 0;
    a < i;
    ++a
  ) {
    for (var u = new Uint32Array(16), d = 0; d < 16; ++d)
      u[d] =
        (r[a * 64 + d * 4] << 24) |
        (r[a * 64 + d * 4 + 1] << 16) |
        (r[a * 64 + d * 4 + 2] << 8) |
        r[a * 64 + d * 4 + 3];
    c[a] = u;
  }
  (c[i - 1][14] = ((r.length - 1) * 8) / Math.pow(2, 32)),
    (c[i - 1][14] = Math.floor(c[i - 1][14])),
    (c[i - 1][15] = ((r.length - 1) * 8) & 4294967295);
  for (var g = 0; g < i; ++g) {
    for (var y = new Uint32Array(80), l = 0; l < 16; ++l) y[l] = c[g][l];
    for (var h = 16; h < 80; ++h)
      y[h] = Ws(y[h - 3] ^ y[h - 8] ^ y[h - 14] ^ y[h - 16], 1);
    for (
      var m = t[0], k = t[1], w = t[2], R = t[3], x = t[4], U = 0;
      U < 80;
      ++U
    ) {
      var J = Math.floor(U / 20),
        ee = (Ws(m, 5) + pu(J, k, w, R) + x + e[J] + y[U]) >>> 0;
      (x = R), (R = w), (w = Ws(k, 30) >>> 0), (k = m), (m = ee);
    }
    (t[0] = (t[0] + m) >>> 0),
      (t[1] = (t[1] + k) >>> 0),
      (t[2] = (t[2] + w) >>> 0),
      (t[3] = (t[3] + R) >>> 0),
      (t[4] = (t[4] + x) >>> 0);
  }
  return [
    (t[0] >> 24) & 255,
    (t[0] >> 16) & 255,
    (t[0] >> 8) & 255,
    t[0] & 255,
    (t[1] >> 24) & 255,
    (t[1] >> 16) & 255,
    (t[1] >> 8) & 255,
    t[1] & 255,
    (t[2] >> 24) & 255,
    (t[2] >> 16) & 255,
    (t[2] >> 8) & 255,
    t[2] & 255,
    (t[3] >> 24) & 255,
    (t[3] >> 16) & 255,
    (t[3] >> 8) & 255,
    t[3] & 255,
    (t[4] >> 24) & 255,
    (t[4] >> 16) & 255,
    (t[4] >> 8) & 255,
    t[4] & 255,
  ];
}
var Ni,
  Ui = le(() => {
    "use strict";
    Ni = gu;
  });
var mu,
  zi,
  Ki = le(() => {
    "use strict";
    qs();
    Ui();
    (mu = Lr("v5", 80, Ni)), (zi = mu);
  });
var qi,
  Wi = le(() => {
    "use strict";
    qi = "00000000-0000-0000-0000-000000000000";
  });
function bu(r) {
  if (!At(r)) throw TypeError("Invalid UUID");
  return parseInt(r.substr(14, 1), 16);
}
var Di,
  Mi = le(() => {
    "use strict";
    Ln();
    Di = bu;
  });
var Ds = {};
Jr(Ds, {
  NIL: () => qi,
  parse: () => Rr,
  stringify: () => Rt,
  v1: () => _i,
  v3: () => Pi,
  v4: () => Ci,
  v5: () => zi,
  validate: () => At,
  version: () => Di,
});
var Ms = le(() => {
  "use strict";
  xi();
  Ti();
  Oi();
  Ki();
  Wi();
  Mi();
  Ln();
  Pn();
  Ks();
});
var $i = St((uh, Vi) => {
  "use strict";
  var wu = (Ms(), Qr(Ds)).v4,
    ku = function (r, e, t, n) {
      if (typeof r != "string") throw new TypeError(r + " must be a string");
      n = n || {};
      let s = typeof n.version == "number" ? n.version : 2;
      if (s !== 1 && s !== 2) throw new TypeError(s + " must be 1 or 2");
      let o = { method: r };
      if ((s === 2 && (o.jsonrpc = "2.0"), e)) {
        if (typeof e != "object" && !Array.isArray(e))
          throw new TypeError(e + " must be an object, array or omitted");
        o.params = e;
      }
      if (typeof t > "u") {
        let i =
          typeof n.generator == "function"
            ? n.generator
            : function () {
                return wu();
              };
        o.id = i(o, n);
      } else
        s === 2 && t === null
          ? n.notificationIdNull && (o.id = null)
          : (o.id = t);
      return o;
    };
  Vi.exports = ku;
});
var ji = St((fh, Fi) => {
  "use strict";
  var Su = (Ms(), Qr(Ds)).v4,
    Bu = $i(),
    Tn = function (r, e) {
      if (!(this instanceof Tn)) return new Tn(r, e);
      e || (e = {}),
        (this.options = {
          reviver: typeof e.reviver < "u" ? e.reviver : null,
          replacer: typeof e.replacer < "u" ? e.replacer : null,
          generator:
            typeof e.generator < "u"
              ? e.generator
              : function () {
                  return Su();
                },
          version: typeof e.version < "u" ? e.version : 2,
          notificationIdNull:
            typeof e.notificationIdNull == "boolean"
              ? e.notificationIdNull
              : !1,
        }),
        (this.callServer = r);
    };
  Fi.exports = Tn;
  Tn.prototype.request = function (r, e, t, n) {
    let s = this,
      o = null,
      i = Array.isArray(r) && typeof e == "function";
    if (this.options.version === 1 && i)
      throw new TypeError("JSON-RPC 1.0 does not support batching");
    if (i || (!i && r && typeof r == "object" && typeof e == "function"))
      (n = e), (o = r);
    else {
      typeof t == "function" && ((n = t), (t = void 0));
      let u = typeof n == "function";
      try {
        o = Bu(r, e, t, {
          generator: this.options.generator,
          version: this.options.version,
          notificationIdNull: this.options.notificationIdNull,
        });
      } catch (d) {
        if (u) return n(d);
        throw d;
      }
      if (!u) return o;
    }
    let a;
    try {
      a = JSON.stringify(o, this.options.replacer);
    } catch (u) {
      return n(u);
    }
    return (
      this.callServer(a, function (u, d) {
        s._parseResponse(u, d, n);
      }),
      o
    );
  };
  Tn.prototype._parseResponse = function (r, e, t) {
    if (r) {
      t(r);
      return;
    }
    if (!e) return t();
    let n;
    try {
      n = JSON.parse(e, this.options.reviver);
    } catch (s) {
      return t(s);
    }
    if (t.length === 3)
      if (Array.isArray(n)) {
        let s = function (i) {
            return typeof i.error < "u";
          },
          o = function (i) {
            return !s(i);
          };
        return t(null, n.filter(s), n.filter(o));
      } else return t(null, n.error, n.result);
    t(null, n);
  };
});
var Gi = St((lh, Vs) => {
  "use strict";
  var Eu = Object.prototype.hasOwnProperty,
    Ve = "~";
  function Cn() {}
  Object.create &&
    ((Cn.prototype = Object.create(null)), new Cn().__proto__ || (Ve = !1));
  function Iu(r, e, t) {
    (this.fn = r), (this.context = e), (this.once = t || !1);
  }
  function Hi(r, e, t, n, s) {
    if (typeof t != "function")
      throw new TypeError("The listener must be a function");
    var o = new Iu(t, n || r, s),
      i = Ve ? Ve + e : e;
    return (
      r._events[i]
        ? r._events[i].fn
          ? (r._events[i] = [r._events[i], o])
          : r._events[i].push(o)
        : ((r._events[i] = o), r._eventsCount++),
      r
    );
  }
  function Tr(r, e) {
    --r._eventsCount === 0 ? (r._events = new Cn()) : delete r._events[e];
  }
  function We() {
    (this._events = new Cn()), (this._eventsCount = 0);
  }
  We.prototype.eventNames = function () {
    var e = [],
      t,
      n;
    if (this._eventsCount === 0) return e;
    for (n in (t = this._events)) Eu.call(t, n) && e.push(Ve ? n.slice(1) : n);
    return Object.getOwnPropertySymbols
      ? e.concat(Object.getOwnPropertySymbols(t))
      : e;
  };
  We.prototype.listeners = function (e) {
    var t = Ve ? Ve + e : e,
      n = this._events[t];
    if (!n) return [];
    if (n.fn) return [n.fn];
    for (var s = 0, o = n.length, i = new Array(o); s < o; s++) i[s] = n[s].fn;
    return i;
  };
  We.prototype.listenerCount = function (e) {
    var t = Ve ? Ve + e : e,
      n = this._events[t];
    return n ? (n.fn ? 1 : n.length) : 0;
  };
  We.prototype.emit = function (e, t, n, s, o, i) {
    var c = Ve ? Ve + e : e;
    if (!this._events[c]) return !1;
    var a = this._events[c],
      u = arguments.length,
      d,
      g;
    if (a.fn) {
      switch ((a.once && this.removeListener(e, a.fn, void 0, !0), u)) {
        case 1:
          return a.fn.call(a.context), !0;
        case 2:
          return a.fn.call(a.context, t), !0;
        case 3:
          return a.fn.call(a.context, t, n), !0;
        case 4:
          return a.fn.call(a.context, t, n, s), !0;
        case 5:
          return a.fn.call(a.context, t, n, s, o), !0;
        case 6:
          return a.fn.call(a.context, t, n, s, o, i), !0;
      }
      for (g = 1, d = new Array(u - 1); g < u; g++) d[g - 1] = arguments[g];
      a.fn.apply(a.context, d);
    } else {
      var y = a.length,
        l;
      for (g = 0; g < y; g++)
        switch ((a[g].once && this.removeListener(e, a[g].fn, void 0, !0), u)) {
          case 1:
            a[g].fn.call(a[g].context);
            break;
          case 2:
            a[g].fn.call(a[g].context, t);
            break;
          case 3:
            a[g].fn.call(a[g].context, t, n);
            break;
          case 4:
            a[g].fn.call(a[g].context, t, n, s);
            break;
          default:
            if (!d)
              for (l = 1, d = new Array(u - 1); l < u; l++)
                d[l - 1] = arguments[l];
            a[g].fn.apply(a[g].context, d);
        }
    }
    return !0;
  };
  We.prototype.on = function (e, t, n) {
    return Hi(this, e, t, n, !1);
  };
  We.prototype.once = function (e, t, n) {
    return Hi(this, e, t, n, !0);
  };
  We.prototype.removeListener = function (e, t, n, s) {
    var o = Ve ? Ve + e : e;
    if (!this._events[o]) return this;
    if (!t) return Tr(this, o), this;
    var i = this._events[o];
    if (i.fn)
      i.fn === t && (!s || i.once) && (!n || i.context === n) && Tr(this, o);
    else {
      for (var c = 0, a = [], u = i.length; c < u; c++)
        (i[c].fn !== t || (s && !i[c].once) || (n && i[c].context !== n)) &&
          a.push(i[c]);
      a.length ? (this._events[o] = a.length === 1 ? a[0] : a) : Tr(this, o);
    }
    return this;
  };
  We.prototype.removeAllListeners = function (e) {
    var t;
    return (
      e
        ? ((t = Ve ? Ve + e : e), this._events[t] && Tr(this, t))
        : ((this._events = new Cn()), (this._eventsCount = 0)),
      this
    );
  };
  We.prototype.off = We.prototype.removeListener;
  We.prototype.addListener = We.prototype.on;
  We.prefixed = Ve;
  We.EventEmitter = We;
  typeof Vs < "u" && (Vs.exports = We);
});
var Cr,
  Yi = le(() => {
    "use strict";
    Cr = rt(Gi(), 1);
  });
function Xi(r, e) {
  return new vu(r, e);
}
var Zi,
  vu,
  _u,
  Ji,
  Qi = le(() => {
    "use strict";
    Zi = rt(es(), 1);
    Yi();
    vu = class extends Cr.default {
      socket;
      constructor(r, e, t) {
        super(),
          (this.socket = new window.WebSocket(r, t)),
          (this.socket.onopen = () => this.emit("open")),
          (this.socket.onmessage = (n) => this.emit("message", n.data)),
          (this.socket.onerror = (n) => this.emit("error", n)),
          (this.socket.onclose = (n) => {
            this.emit("close", n.code, n.reason);
          });
      }
      send(r, e, t) {
        let n = t || e;
        try {
          this.socket.send(r), n();
        } catch (s) {
          n(s);
        }
      }
      close(r, e) {
        this.socket.close(r, e);
      }
      addEventListener(r, e, t) {
        this.socket.addEventListener(r, e, t);
      }
    };
    (_u = class {
      encode(r) {
        return JSON.stringify(r);
      }
      decode(r) {
        return JSON.parse(r);
      }
    }),
      (Ji = class extends Cr.default {
        address;
        rpc_id;
        queue;
        options;
        autoconnect;
        ready;
        reconnect;
        reconnect_timer_id;
        reconnect_interval;
        max_reconnects;
        rest_options;
        current_reconnects;
        generate_request_id;
        socket;
        webSocketFactory;
        dataPack;
        constructor(r, e = "ws://localhost:8080", u = {}, c, a) {
          var d = u,
            {
              autoconnect: t = !0,
              reconnect: n = !0,
              reconnect_interval: s = 1e3,
              max_reconnects: o = 5,
            } = d,
            i = dt(d, [
              "autoconnect",
              "reconnect",
              "reconnect_interval",
              "max_reconnects",
            ]);
          super(),
            (this.webSocketFactory = r),
            (this.queue = {}),
            (this.rpc_id = 0),
            (this.address = e),
            (this.autoconnect = t),
            (this.ready = !1),
            (this.reconnect = n),
            (this.reconnect_timer_id = void 0),
            (this.reconnect_interval = s),
            (this.max_reconnects = o),
            (this.rest_options = i),
            (this.current_reconnects = 0),
            (this.generate_request_id =
              c ||
              (() =>
                typeof this.rpc_id == "number"
                  ? ++this.rpc_id
                  : Number(this.rpc_id) + 1)),
            a ? (this.dataPack = a) : (this.dataPack = new _u()),
            this.autoconnect &&
              this._connect(
                this.address,
                F(
                  {
                    autoconnect: this.autoconnect,
                    reconnect: this.reconnect,
                    reconnect_interval: this.reconnect_interval,
                    max_reconnects: this.max_reconnects,
                  },
                  this.rest_options
                )
              );
        }
        connect() {
          this.socket ||
            this._connect(
              this.address,
              F(
                {
                  autoconnect: this.autoconnect,
                  reconnect: this.reconnect,
                  reconnect_interval: this.reconnect_interval,
                  max_reconnects: this.max_reconnects,
                },
                this.rest_options
              )
            );
        }
        call(r, e, t, n) {
          return (
            !n && typeof t == "object" && ((n = t), (t = null)),
            new Promise((s, o) => {
              if (!this.ready) return o(new Error("socket not ready"));
              let i = this.generate_request_id(r, e),
                c = { jsonrpc: "2.0", method: r, params: e || void 0, id: i };
              this.socket.send(this.dataPack.encode(c), n, (a) => {
                if (a) return o(a);
                (this.queue[i] = { promise: [s, o] }),
                  t &&
                    (this.queue[i].timeout = setTimeout(() => {
                      delete this.queue[i], o(new Error("reply timeout"));
                    }, t));
              });
            })
          );
        }
        login(r) {
          return E(this, null, function* () {
            let e = yield this.call("rpc.login", r);
            if (!e) throw new Error("authentication failed");
            return e;
          });
        }
        listMethods() {
          return E(this, null, function* () {
            return yield this.call("__listMethods");
          });
        }
        notify(r, e) {
          return new Promise((t, n) => {
            if (!this.ready) return n(new Error("socket not ready"));
            let s = { jsonrpc: "2.0", method: r, params: e };
            this.socket.send(this.dataPack.encode(s), (o) => {
              if (o) return n(o);
              t();
            });
          });
        }
        subscribe(r) {
          return E(this, null, function* () {
            typeof r == "string" && (r = [r]);
            let e = yield this.call("rpc.on", r);
            if (typeof r == "string" && e[r] !== "ok")
              throw new Error(
                "Failed subscribing to an event '" + r + "' with: " + e[r]
              );
            return e;
          });
        }
        unsubscribe(r) {
          return E(this, null, function* () {
            typeof r == "string" && (r = [r]);
            let e = yield this.call("rpc.off", r);
            if (typeof r == "string" && e[r] !== "ok")
              throw new Error("Failed unsubscribing from an event with: " + e);
            return e;
          });
        }
        close(r, e) {
          this.socket && this.socket.close(r || 1e3, e);
        }
        setAutoReconnect(r) {
          this.reconnect = r;
        }
        setReconnectInterval(r) {
          this.reconnect_interval = r;
        }
        setMaxReconnects(r) {
          this.max_reconnects = r;
        }
        getCurrentReconnects() {
          return this.current_reconnects;
        }
        getMaxReconnects() {
          return this.max_reconnects;
        }
        isReconnecting() {
          return this.reconnect_timer_id !== void 0;
        }
        willReconnect() {
          return (
            this.reconnect &&
            (this.max_reconnects === 0 ||
              this.current_reconnects < this.max_reconnects)
          );
        }
        _connect(r, e) {
          clearTimeout(this.reconnect_timer_id),
            (this.socket = this.webSocketFactory(r, e)),
            this.socket.addEventListener("open", () => {
              (this.ready = !0),
                this.emit("open"),
                (this.current_reconnects = 0);
            }),
            this.socket.addEventListener("message", ({ data: t }) => {
              t instanceof ArrayBuffer && (t = Zi.Buffer.from(t).toString());
              try {
                t = this.dataPack.decode(t);
              } catch {
                return;
              }
              if (t.notification && this.listeners(t.notification).length) {
                if (!Object.keys(t.params).length)
                  return this.emit(t.notification);
                let n = [t.notification];
                if (t.params.constructor === Object) n.push(t.params);
                else
                  for (let s = 0; s < t.params.length; s++) n.push(t.params[s]);
                return Promise.resolve().then(() => {
                  this.emit.apply(this, n);
                });
              }
              if (!this.queue[t.id])
                return t.method
                  ? Promise.resolve().then(() => {
                      this.emit(t.method, t?.params);
                    })
                  : void 0;
              "error" in t == "result" in t &&
                this.queue[t.id].promise[1](
                  new Error(
                    'Server response malformed. Response must include either "result" or "error", but not both.'
                  )
                ),
                this.queue[t.id].timeout &&
                  clearTimeout(this.queue[t.id].timeout),
                t.error
                  ? this.queue[t.id].promise[1](t.error)
                  : this.queue[t.id].promise[0](t.result),
                delete this.queue[t.id];
            }),
            this.socket.addEventListener("error", (t) => this.emit("error", t)),
            this.socket.addEventListener("close", ({ code: t, reason: n }) => {
              this.ready && setTimeout(() => this.emit("close", t, n), 0),
                (this.ready = !1),
                (this.socket = void 0),
                t !== 1e3 &&
                  (this.current_reconnects++,
                  this.reconnect &&
                  (this.max_reconnects > this.current_reconnects ||
                    this.max_reconnects === 0)
                    ? (this.reconnect_timer_id = setTimeout(
                        () => this._connect(r, e),
                        this.reconnect_interval
                      ))
                    : this.reconnect &&
                      this.max_reconnects > 0 &&
                      this.current_reconnects >= this.max_reconnects &&
                      setTimeout(
                        () => this.emit("max_reconnects_reached", t, n),
                        1
                      ));
            });
        }
      });
  });
function xu(r, e, t) {
  let [[n, s], [o, i]] = e,
    c = ea(i * r, t),
    a = ea(-s * r, t),
    u = r - c * n - a * o,
    d = -c * s - a * i,
    g = u < bt,
    y = d < bt;
  g && (u = -u), y && (d = -d);
  let l = Et(Math.ceil(Hn(t) / 2)) + un;
  if (u < bt || u >= l || d < bt || d >= l)
    throw new Error("splitScalar (endomorphism): failed, k=" + r);
  return { k1neg: g, k1: u, k2neg: y, k2: d };
}
function Fs(r) {
  if (!["compact", "recovered", "der"].includes(r))
    throw new Error(
      'Signature format must be "compact", "recovered", or "der"'
    );
  return r;
}
function $s(r, e) {
  let t = {};
  for (let n of Object.keys(e)) t[n] = r[n] === void 0 ? e[n] : r[n];
  return (
    ht(t.lowS, "lowS"),
    ht(t.prehash, "prehash"),
    t.format !== void 0 && Fs(t.format),
    t
  );
}
function cn(r, e) {
  let { BYTES: t } = r,
    n;
  if (typeof e == "bigint") n = e;
  else {
    let s = ge("private key", e);
    try {
      n = r.fromBytes(s);
    } catch {
      throw new Error(
        `invalid private key: expected ui8a of size ${t}, got ${typeof e}`
      );
    }
  }
  if (!r.isValidNot0(n))
    throw new Error("invalid private key: out of range [1..N-1]");
  return n;
}
function Ru(r, e = {}) {
  let t = Zn("weierstrass", r, e),
    { Fp: n, Fn: s } = t,
    o = t.CURVE,
    { h: i, n: c } = o;
  It(
    e,
    {},
    {
      allowInfinityPoint: "boolean",
      clearCofactor: "function",
      isTorsionFree: "function",
      fromBytes: "function",
      toBytes: "function",
      endo: "object",
      wrapPrivateKey: "boolean",
    }
  );
  let { endo: a } = e;
  if (
    a &&
    (!n.is0(o.a) || typeof a.beta != "bigint" || !Array.isArray(a.basises))
  )
    throw new Error(
      'invalid endo: expected "beta": bigint and "basises": array'
    );
  let u = ra(n, s);
  function d() {
    if (!n.isOdd)
      throw new Error(
        "compression is not supported: Field does not have .isOdd()"
      );
  }
  function g(V, I, S) {
    let { x: B, y: L } = I.toAffine(),
      N = n.toBytes(B);
    if ((ht(S, "isCompressed"), S)) {
      d();
      let W = !n.isOdd(L);
      return Fe(na(W), N);
    } else return Fe(Uint8Array.of(4), N, n.toBytes(L));
  }
  function y(V) {
    Ye(V, void 0, "Point");
    let { publicKey: I, publicKeyUncompressed: S } = u,
      B = V.length,
      L = V[0],
      N = V.subarray(1);
    if (B === I && (L === 2 || L === 3)) {
      let W = n.fromBytes(N);
      if (!n.isValid(W)) throw new Error("bad point: is not on curve, wrong x");
      let K = m(W),
        q;
      try {
        q = n.sqrt(K);
      } catch (ke) {
        let he = ke instanceof Error ? ": " + ke.message : "";
        throw new Error("bad point: is not on curve, sqrt error" + he);
      }
      d();
      let j = n.isOdd(q);
      return ((L & 1) === 1) !== j && (q = n.neg(q)), { x: W, y: q };
    } else if (B === S && L === 4) {
      let W = n.BYTES,
        K = n.fromBytes(N.subarray(0, W)),
        q = n.fromBytes(N.subarray(W, W * 2));
      if (!k(K, q)) throw new Error("bad point: is not on curve");
      return { x: K, y: q };
    } else
      throw new Error(
        `bad point: got length ${B}, expected compressed=${I} or uncompressed=${S}`
      );
  }
  let l = e.toBytes || g,
    h = e.fromBytes || y;
  function m(V) {
    let I = n.sqr(V),
      S = n.mul(I, V);
    return n.add(n.add(S, n.mul(V, o.a)), o.b);
  }
  function k(V, I) {
    let S = n.sqr(I),
      B = m(V);
    return n.eql(S, B);
  }
  if (!k(o.Gx, o.Gy)) throw new Error("bad curve params: generator point");
  let w = n.mul(n.pow(o.a, Or), Au),
    R = n.mul(n.sqr(o.b), BigInt(27));
  if (n.is0(n.add(w, R))) throw new Error("bad curve params: a or b");
  function x(V, I, S = !1) {
    if (!n.isValid(I) || (S && n.is0(I)))
      throw new Error(`bad point coordinate ${V}`);
    return I;
  }
  function U(V) {
    if (!(V instanceof _)) throw new Error("ProjectivePoint expected");
  }
  function J(V) {
    if (!a || !a.basises) throw new Error("no endo");
    return xu(V, a.basises, s.ORDER);
  }
  let ee = Xt((V, I) => {
      let { X: S, Y: B, Z: L } = V;
      if (n.eql(L, n.ONE)) return { x: S, y: B };
      let N = V.is0();
      I == null && (I = N ? n.ONE : n.inv(L));
      let W = n.mul(S, I),
        K = n.mul(B, I),
        q = n.mul(L, I);
      if (N) return { x: n.ZERO, y: n.ZERO };
      if (!n.eql(q, n.ONE)) throw new Error("invZ was invalid");
      return { x: W, y: K };
    }),
    te = Xt((V) => {
      if (V.is0()) {
        if (e.allowInfinityPoint && !n.is0(V.Y)) return;
        throw new Error("bad point: ZERO");
      }
      let { x: I, y: S } = V.toAffine();
      if (!n.isValid(I) || !n.isValid(S))
        throw new Error("bad point: x or y not field elements");
      if (!k(I, S)) throw new Error("bad point: equation left != right");
      if (!V.isTorsionFree())
        throw new Error("bad point: not in prime-order subgroup");
      return !0;
    });
  function ne(V, I, S, B, L) {
    return (
      (S = new _(n.mul(S.X, V), S.Y, S.Z)),
      (I = Sn(B, I)),
      (S = Sn(L, S)),
      I.add(S)
    );
  }
  class _ {
    constructor(I, S, B) {
      (this.X = x("x", I)),
        (this.Y = x("y", S, !0)),
        (this.Z = x("z", B)),
        Object.freeze(this);
    }
    static CURVE() {
      return o;
    }
    static fromAffine(I) {
      let { x: S, y: B } = I || {};
      if (!I || !n.isValid(S) || !n.isValid(B))
        throw new Error("invalid affine point");
      if (I instanceof _) throw new Error("projective point not allowed");
      return n.is0(S) && n.is0(B) ? _.ZERO : new _(S, B, n.ONE);
    }
    static fromBytes(I) {
      let S = _.fromAffine(h(Ye(I, void 0, "point")));
      return S.assertValidity(), S;
    }
    static fromHex(I) {
      return _.fromBytes(ge("pointHex", I));
    }
    get x() {
      return this.toAffine().x;
    }
    get y() {
      return this.toAffine().y;
    }
    precompute(I = 8, S = !0) {
      return H.createCache(this, I), S || this.multiply(Or), this;
    }
    assertValidity() {
      te(this);
    }
    hasEvenY() {
      let { y: I } = this.toAffine();
      if (!n.isOdd) throw new Error("Field doesn't support isOdd");
      return !n.isOdd(I);
    }
    equals(I) {
      U(I);
      let { X: S, Y: B, Z: L } = this,
        { X: N, Y: W, Z: K } = I,
        q = n.eql(n.mul(S, K), n.mul(N, L)),
        j = n.eql(n.mul(B, K), n.mul(W, L));
      return q && j;
    }
    negate() {
      return new _(this.X, n.neg(this.Y), this.Z);
    }
    double() {
      let { a: I, b: S } = o,
        B = n.mul(S, Or),
        { X: L, Y: N, Z: W } = this,
        K = n.ZERO,
        q = n.ZERO,
        j = n.ZERO,
        G = n.mul(L, L),
        ke = n.mul(N, N),
        he = n.mul(W, W),
        se = n.mul(L, N);
      return (
        (se = n.add(se, se)),
        (j = n.mul(L, W)),
        (j = n.add(j, j)),
        (K = n.mul(I, j)),
        (q = n.mul(B, he)),
        (q = n.add(K, q)),
        (K = n.sub(ke, q)),
        (q = n.add(ke, q)),
        (q = n.mul(K, q)),
        (K = n.mul(se, K)),
        (j = n.mul(B, j)),
        (he = n.mul(I, he)),
        (se = n.sub(G, he)),
        (se = n.mul(I, se)),
        (se = n.add(se, j)),
        (j = n.add(G, G)),
        (G = n.add(j, G)),
        (G = n.add(G, he)),
        (G = n.mul(G, se)),
        (q = n.add(q, G)),
        (he = n.mul(N, W)),
        (he = n.add(he, he)),
        (G = n.mul(he, se)),
        (K = n.sub(K, G)),
        (j = n.mul(he, ke)),
        (j = n.add(j, j)),
        (j = n.add(j, j)),
        new _(K, q, j)
      );
    }
    add(I) {
      U(I);
      let { X: S, Y: B, Z: L } = this,
        { X: N, Y: W, Z: K } = I,
        q = n.ZERO,
        j = n.ZERO,
        G = n.ZERO,
        ke = o.a,
        he = n.mul(o.b, Or),
        se = n.mul(S, N),
        Se = n.mul(B, W),
        ve = n.mul(L, K),
        $e = n.add(S, B),
        Be = n.add(N, W);
      ($e = n.mul($e, Be)),
        (Be = n.add(se, Se)),
        ($e = n.sub($e, Be)),
        (Be = n.add(S, L));
      let Ce = n.add(N, K);
      return (
        (Be = n.mul(Be, Ce)),
        (Ce = n.add(se, ve)),
        (Be = n.sub(Be, Ce)),
        (Ce = n.add(B, L)),
        (q = n.add(W, K)),
        (Ce = n.mul(Ce, q)),
        (q = n.add(Se, ve)),
        (Ce = n.sub(Ce, q)),
        (G = n.mul(ke, Be)),
        (q = n.mul(he, ve)),
        (G = n.add(q, G)),
        (q = n.sub(Se, G)),
        (G = n.add(Se, G)),
        (j = n.mul(q, G)),
        (Se = n.add(se, se)),
        (Se = n.add(Se, se)),
        (ve = n.mul(ke, ve)),
        (Be = n.mul(he, Be)),
        (Se = n.add(Se, ve)),
        (ve = n.sub(se, ve)),
        (ve = n.mul(ke, ve)),
        (Be = n.add(Be, ve)),
        (se = n.mul(Se, Be)),
        (j = n.add(j, se)),
        (se = n.mul(Ce, Be)),
        (q = n.mul($e, q)),
        (q = n.sub(q, se)),
        (se = n.mul($e, Se)),
        (G = n.mul(Ce, G)),
        (G = n.add(G, se)),
        new _(q, j, G)
      );
    }
    subtract(I) {
      return this.add(I.negate());
    }
    is0() {
      return this.equals(_.ZERO);
    }
    multiply(I) {
      let { endo: S } = e;
      if (!s.isValidNot0(I)) throw new Error("invalid scalar: out of range");
      let B,
        L,
        N = (W) => H.cached(this, W, (K) => yt(_, K));
      if (S) {
        let { k1neg: W, k1: K, k2neg: q, k2: j } = J(I),
          { p: G, f: ke } = N(K),
          { p: he, f: se } = N(j);
        (L = ke.add(se)), (B = ne(S.beta, G, he, W, q));
      } else {
        let { p: W, f: K } = N(I);
        (B = W), (L = K);
      }
      return yt(_, [B, L])[0];
    }
    multiplyUnsafe(I) {
      let { endo: S } = e,
        B = this;
      if (!s.isValid(I)) throw new Error("invalid scalar: out of range");
      if (I === bt || B.is0()) return _.ZERO;
      if (I === un) return B;
      if (H.hasCache(this)) return this.multiply(I);
      if (S) {
        let { k1neg: L, k1: N, k2neg: W, k2: K } = J(I),
          { p1: q, p2: j } = ti(_, B, N, K);
        return ne(S.beta, q, j, L, W);
      } else return H.unsafe(B, I);
    }
    multiplyAndAddUnsafe(I, S, B) {
      let L = this.multiplyUnsafe(S).add(I.multiplyUnsafe(B));
      return L.is0() ? void 0 : L;
    }
    toAffine(I) {
      return ee(this, I);
    }
    isTorsionFree() {
      let { isTorsionFree: I } = e;
      return i === un ? !0 : I ? I(_, this) : H.unsafe(this, c).is0();
    }
    clearCofactor() {
      let { clearCofactor: I } = e;
      return i === un ? this : I ? I(_, this) : this.multiplyUnsafe(i);
    }
    isSmallOrder() {
      return this.multiplyUnsafe(i).is0();
    }
    toBytes(I = !0) {
      return ht(I, "isCompressed"), this.assertValidity(), l(_, this, I);
    }
    toHex(I = !0) {
      return et(this.toBytes(I));
    }
    toString() {
      return `<Point ${this.is0() ? "ZERO" : this.toHex()}>`;
    }
    get px() {
      return this.X;
    }
    get py() {
      return this.X;
    }
    get pz() {
      return this.Z;
    }
    toRawBytes(I = !0) {
      return this.toBytes(I);
    }
    _setWindowSize(I) {
      this.precompute(I);
    }
    static normalizeZ(I) {
      return yt(_, I);
    }
    static msm(I, S) {
      return Yn(_, s, I, S);
    }
    static fromPrivateKey(I) {
      return _.BASE.multiply(cn(s, I));
    }
  }
  (_.BASE = new _(o.Gx, o.Gy, n.ONE)),
    (_.ZERO = new _(n.ZERO, n.ONE, n.ZERO)),
    (_.Fp = n),
    (_.Fn = s);
  let M = s.BITS,
    H = new en(_, e.endo ? Math.ceil(M / 2) : M);
  return _.BASE.precompute(8), _;
}
function na(r) {
  return Uint8Array.of(r ? 2 : 3);
}
function ra(r, e) {
  return {
    secretKey: e.BYTES,
    publicKey: 1 + r.BYTES,
    publicKeyUncompressed: 1 + 2 * r.BYTES,
    publicKeyHasPrefix: !0,
    signature: 2 * e.BYTES,
  };
}
function Lu(r, e = {}) {
  let { Fn: t } = r,
    n = e.randomBytes || Yt,
    s = Object.assign(ra(r.Fp, t), { seed: hs(t.ORDER) });
  function o(l) {
    try {
      return !!cn(t, l);
    } catch {
      return !1;
    }
  }
  function i(l, h) {
    let { publicKey: m, publicKeyUncompressed: k } = s;
    try {
      let w = l.length;
      return (h === !0 && w !== m) || (h === !1 && w !== k)
        ? !1
        : !!r.fromBytes(l);
    } catch {
      return !1;
    }
  }
  function c(l = n(s.seed)) {
    return ys(Ye(l, s.seed, "seed"), t.ORDER);
  }
  function a(l, h = !0) {
    return r.BASE.multiply(cn(t, l)).toBytes(h);
  }
  function u(l) {
    let h = c(l);
    return { secretKey: h, publicKey: a(h) };
  }
  function d(l) {
    if (typeof l == "bigint") return !1;
    if (l instanceof r) return !0;
    let { secretKey: h, publicKey: m, publicKeyUncompressed: k } = s;
    if (t.allowedLengths || h === m) return;
    let w = ge("key", l).length;
    return w === m || w === k;
  }
  function g(l, h, m = !0) {
    if (d(l) === !0) throw new Error("first arg must be private key");
    if (d(h) === !1) throw new Error("second arg must be public key");
    let k = cn(t, l);
    return r.fromHex(h).multiply(k).toBytes(m);
  }
  return Object.freeze({
    getPublicKey: a,
    getSharedSecret: g,
    keygen: u,
    Point: r,
    utils: {
      isValidSecretKey: o,
      isValidPublicKey: i,
      randomSecretKey: c,
      isValidPrivateKey: o,
      randomPrivateKey: c,
      normPrivateKeyToScalar: (l) => cn(t, l),
      precompute(l = 8, h = r.BASE) {
        return h.precompute(l, !1);
      },
    },
    lengths: s,
  });
}
function Pu(r, e, t = {}) {
  Lo(e),
    It(
      t,
      {},
      {
        hmac: "function",
        lowS: "boolean",
        randomBytes: "function",
        bits2int: "function",
        bits2int_modN: "function",
      }
    );
  let n = t.randomBytes || Yt,
    s = t.hmac || ((S, ...B) => No(e, S, Fe(...B))),
    { Fp: o, Fn: i } = r,
    { ORDER: c, BITS: a } = i,
    {
      keygen: u,
      getPublicKey: d,
      getSharedSecret: g,
      utils: y,
      lengths: l,
    } = Lu(r, t),
    h = {
      prehash: !1,
      lowS: typeof t.lowS == "boolean" ? t.lowS : !1,
      format: void 0,
      extraEntropy: !1,
    },
    m = "compact";
  function k(S) {
    let B = c >> un;
    return S > B;
  }
  function w(S, B) {
    if (!i.isValidNot0(B))
      throw new Error(`invalid signature ${S}: out of range 1..Point.Fn.ORDER`);
    return B;
  }
  function R(S, B) {
    Fs(B);
    let L = l.signature,
      N = B === "compact" ? L : B === "recovered" ? L + 1 : void 0;
    return Ye(S, N, `${B} signature`);
  }
  class x {
    constructor(B, L, N) {
      (this.r = w("r", B)),
        (this.s = w("s", L)),
        N != null && (this.recovery = N),
        Object.freeze(this);
    }
    static fromBytes(B, L = m) {
      R(B, L);
      let N;
      if (L === "der") {
        let { r: j, s: G } = mt.toSig(Ye(B));
        return new x(j, G);
      }
      L === "recovered" && ((N = B[0]), (L = "compact"), (B = B.subarray(1)));
      let W = i.BYTES,
        K = B.subarray(0, W),
        q = B.subarray(W, W * 2);
      return new x(i.fromBytes(K), i.fromBytes(q), N);
    }
    static fromHex(B, L) {
      return this.fromBytes(Ct(B), L);
    }
    addRecoveryBit(B) {
      return new x(this.r, this.s, B);
    }
    recoverPublicKey(B) {
      let L = o.ORDER,
        { r: N, s: W, recovery: K } = this;
      if (K == null || ![0, 1, 2, 3].includes(K))
        throw new Error("recovery id invalid");
      if (c * ta < L && K > 1)
        throw new Error("recovery id is ambiguous for h>1 curve");
      let j = K === 2 || K === 3 ? N + c : N;
      if (!o.isValid(j)) throw new Error("recovery id 2 or 3 invalid");
      let G = o.toBytes(j),
        ke = r.fromBytes(Fe(na((K & 1) === 0), G)),
        he = i.inv(j),
        se = J(ge("msgHash", B)),
        Se = i.create(-se * he),
        ve = i.create(W * he),
        $e = r.BASE.multiplyUnsafe(Se).add(ke.multiplyUnsafe(ve));
      if ($e.is0()) throw new Error("point at infinify");
      return $e.assertValidity(), $e;
    }
    hasHighS() {
      return k(this.s);
    }
    toBytes(B = m) {
      if ((Fs(B), B === "der")) return Ct(mt.hexFromSig(this));
      let L = i.toBytes(this.r),
        N = i.toBytes(this.s);
      if (B === "recovered") {
        if (this.recovery == null)
          throw new Error("recovery bit must be present");
        return Fe(Uint8Array.of(this.recovery), L, N);
      }
      return Fe(L, N);
    }
    toHex(B) {
      return et(this.toBytes(B));
    }
    assertValidity() {}
    static fromCompact(B) {
      return x.fromBytes(ge("sig", B), "compact");
    }
    static fromDER(B) {
      return x.fromBytes(ge("sig", B), "der");
    }
    normalizeS() {
      return this.hasHighS()
        ? new x(this.r, i.neg(this.s), this.recovery)
        : this;
    }
    toDERRawBytes() {
      return this.toBytes("der");
    }
    toDERHex() {
      return et(this.toBytes("der"));
    }
    toCompactRawBytes() {
      return this.toBytes("compact");
    }
    toCompactHex() {
      return et(this.toBytes("compact"));
    }
  }
  let U =
      t.bits2int ||
      function (B) {
        if (B.length > 8192) throw new Error("input is too large");
        let L = Zt(B),
          N = B.length * 8 - a;
        return N > 0 ? L >> BigInt(N) : L;
      },
    J =
      t.bits2int_modN ||
      function (B) {
        return i.create(U(B));
      },
    ee = Et(a);
  function te(S) {
    return bn("num < 2^" + a, S, bt, ee), i.toBytes(S);
  }
  function ne(S, B) {
    return (
      Ye(S, void 0, "message"), B ? Ye(e(S), void 0, "prehashed message") : S
    );
  }
  function _(S, B, L) {
    if (["recovered", "canonical"].some((Se) => Se in L))
      throw new Error("sign() legacy options not supported");
    let { lowS: N, prehash: W, extraEntropy: K } = $s(L, h);
    S = ne(S, W);
    let q = J(S),
      j = cn(i, B),
      G = [te(j), te(q)];
    if (K != null && K !== !1) {
      let Se = K === !0 ? n(l.secretKey) : K;
      G.push(ge("extraEntropy", Se));
    }
    let ke = Fe(...G),
      he = q;
    function se(Se) {
      let ve = U(Se);
      if (!i.isValidNot0(ve)) return;
      let $e = i.inv(ve),
        Be = r.BASE.multiply(ve).toAffine(),
        Ce = i.create(Be.x);
      if (Ce === bt) return;
      let Fn = i.create($e * i.create(he + Ce * j));
      if (Fn === bt) return;
      let Ao = (Be.x === Ce ? 0 : 2) | Number(Be.y & un),
        Ro = Fn;
      return N && k(Fn) && ((Ro = i.neg(Fn)), (Ao ^= 1)), new x(Ce, Ro, Ao);
    }
    return { seed: ke, k2sig: se };
  }
  function M(S, B, L = {}) {
    S = ge("message", S);
    let { seed: N, k2sig: W } = _(S, B, L);
    return Ko(e.outputLen, i.BYTES, s)(N, W);
  }
  function H(S) {
    let B,
      L = typeof S == "string" || Bt(S),
      N =
        !L &&
        S !== null &&
        typeof S == "object" &&
        typeof S.r == "bigint" &&
        typeof S.s == "bigint";
    if (!L && !N)
      throw new Error(
        "invalid signature, expected Uint8Array, hex string or Signature instance"
      );
    if (N) B = new x(S.r, S.s);
    else if (L) {
      try {
        B = x.fromBytes(ge("sig", S), "der");
      } catch (W) {
        if (!(W instanceof mt.Err)) throw W;
      }
      if (!B)
        try {
          B = x.fromBytes(ge("sig", S), "compact");
        } catch {
          return !1;
        }
    }
    return B || !1;
  }
  function V(S, B, L, N = {}) {
    let { lowS: W, prehash: K, format: q } = $s(N, h);
    if (
      ((L = ge("publicKey", L)), (B = ne(ge("message", B), K)), "strict" in N)
    )
      throw new Error("options.strict was renamed to lowS");
    let j = q === void 0 ? H(S) : x.fromBytes(ge("sig", S), q);
    if (j === !1) return !1;
    try {
      let G = r.fromBytes(L);
      if (W && j.hasHighS()) return !1;
      let { r: ke, s: he } = j,
        se = J(B),
        Se = i.inv(he),
        ve = i.create(se * Se),
        $e = i.create(ke * Se),
        Be = r.BASE.multiplyUnsafe(ve).add(G.multiplyUnsafe($e));
      return Be.is0() ? !1 : i.create(Be.x) === ke;
    } catch {
      return !1;
    }
  }
  function I(S, B, L = {}) {
    let { prehash: N } = $s(L, h);
    return (
      (B = ne(B, N)), x.fromBytes(S, "recovered").recoverPublicKey(B).toBytes()
    );
  }
  return Object.freeze({
    keygen: u,
    getPublicKey: d,
    getSharedSecret: g,
    utils: y,
    lengths: l,
    Point: r,
    sign: M,
    verify: V,
    recoverPublicKey: I,
    Signature: x,
    hash: e,
  });
}
function Tu(r) {
  let e = { a: r.a, b: r.b, p: r.Fp.ORDER, n: r.n, h: r.h, Gx: r.Gx, Gy: r.Gy },
    t = r.Fp,
    n = r.allowedPrivateKeyLengths
      ? Array.from(
          new Set(r.allowedPrivateKeyLengths.map((i) => Math.ceil(i / 2)))
        )
      : void 0,
    s = Je(e.n, {
      BITS: r.nBitLength,
      allowedLengths: n,
      modFromBytes: r.wrapPrivateKey,
    }),
    o = {
      Fp: t,
      Fn: s,
      allowInfinityPoint: r.allowInfinityPoint,
      endo: r.endo,
      isTorsionFree: r.isTorsionFree,
      clearCofactor: r.clearCofactor,
      fromBytes: r.fromBytes,
      toBytes: r.toBytes,
    };
  return { CURVE: e, curveOpts: o };
}
function Cu(r) {
  let { CURVE: e, curveOpts: t } = Tu(r),
    n = {
      hmac: r.hmac,
      randomBytes: r.randomBytes,
      lowS: r.lowS,
      bits2int: r.bits2int,
      bits2int_modN: r.bits2int_modN,
    };
  return { CURVE: e, curveOpts: t, hash: r.hash, ecdsaOpts: n };
}
function Ou(r, e) {
  let t = e.Point;
  return Object.assign({}, e, {
    ProjectivePoint: t,
    CURVE: Object.assign({}, r, Gn(t.Fn.ORDER, t.Fn.BITS)),
  });
}
function sa(r) {
  let { CURVE: e, curveOpts: t, hash: n, ecdsaOpts: s } = Cu(r),
    o = Ru(e, t),
    i = Pu(o, n, s);
  return Ou(r, i);
}
var ea,
  js,
  mt,
  bt,
  un,
  ta,
  Or,
  Au,
  oa = le(() => {
    "use strict";
    ec();
    rs();
    wn();
    bs();
    Jt();
    ea = (r, e) => (r + (r >= 0 ? e : -e) / ta) / e;
    (js = class extends Error {
      constructor(e = "") {
        super(e);
      }
    }),
      (mt = {
        Err: js,
        _tlv: {
          encode: (r, e) => {
            let { Err: t } = mt;
            if (r < 0 || r > 256) throw new t("tlv.encode: wrong tag");
            if (e.length & 1) throw new t("tlv.encode: unpadded data");
            let n = e.length / 2,
              s = mn(n);
            if ((s.length / 2) & 128)
              throw new t("tlv.encode: long form length too big");
            let o = n > 127 ? mn((s.length / 2) | 128) : "";
            return mn(r) + o + s + e;
          },
          decode(r, e) {
            let { Err: t } = mt,
              n = 0;
            if (r < 0 || r > 256) throw new t("tlv.encode: wrong tag");
            if (e.length < 2 || e[n++] !== r)
              throw new t("tlv.decode: wrong tlv");
            let s = e[n++],
              o = !!(s & 128),
              i = 0;
            if (!o) i = s;
            else {
              let a = s & 127;
              if (!a)
                throw new t(
                  "tlv.decode(long): indefinite length not supported"
                );
              if (a > 4)
                throw new t("tlv.decode(long): byte length is too big");
              let u = e.subarray(n, n + a);
              if (u.length !== a)
                throw new t("tlv.decode: length bytes not complete");
              if (u[0] === 0)
                throw new t("tlv.decode(long): zero leftmost byte");
              for (let d of u) i = (i << 8) | d;
              if (((n += a), i < 128))
                throw new t("tlv.decode(long): not minimal encoding");
            }
            let c = e.subarray(n, n + i);
            if (c.length !== i) throw new t("tlv.decode: wrong value length");
            return { v: c, l: e.subarray(n + i) };
          },
        },
        _int: {
          encode(r) {
            let { Err: e } = mt;
            if (r < bt)
              throw new e("integer: negative integers are not allowed");
            let t = mn(r);
            if ((Number.parseInt(t[0], 16) & 8 && (t = "00" + t), t.length & 1))
              throw new e("unexpected DER parsing assertion: unpadded hex");
            return t;
          },
          decode(r) {
            let { Err: e } = mt;
            if (r[0] & 128) throw new e("invalid signature integer: negative");
            if (r[0] === 0 && !(r[1] & 128))
              throw new e(
                "invalid signature integer: unnecessary leading zero"
              );
            return Zt(r);
          },
        },
        toSig(r) {
          let { Err: e, _int: t, _tlv: n } = mt,
            s = ge("signature", r),
            { v: o, l: i } = n.decode(48, s);
          if (i.length)
            throw new e("invalid signature: left bytes after parsing");
          let { v: c, l: a } = n.decode(2, o),
            { v: u, l: d } = n.decode(2, a);
          if (d.length)
            throw new e("invalid signature: left bytes after parsing");
          return { r: t.decode(c), s: t.decode(u) };
        },
        hexFromSig(r) {
          let { _tlv: e, _int: t } = mt,
            n = e.encode(2, t.encode(r.r)),
            s = e.encode(2, t.encode(r.s)),
            o = n + s;
          return e.encode(48, o);
        },
      }),
      (bt = BigInt(0)),
      (un = BigInt(1)),
      (ta = BigInt(2)),
      (Or = BigInt(3)),
      (Au = BigInt(4));
  });
function ia(r, e) {
  let t = (n) => sa(Y(F({}, r), { hash: n }));
  return Y(F({}, t(e)), { create: t });
}
var aa = le(() => {
  "use strict";
  oa();
});
function Uu(r) {
  let e = Gs.p,
    t = BigInt(3),
    n = BigInt(6),
    s = BigInt(11),
    o = BigInt(22),
    i = BigInt(23),
    c = BigInt(44),
    a = BigInt(88),
    u = (r * r * r) % e,
    d = (u * u * r) % e,
    g = (me(d, t, e) * d) % e,
    y = (me(g, t, e) * d) % e,
    l = (me(y, ca, e) * u) % e,
    h = (me(l, s, e) * l) % e,
    m = (me(h, o, e) * h) % e,
    k = (me(m, c, e) * m) % e,
    w = (me(k, a, e) * k) % e,
    R = (me(w, c, e) * m) % e,
    x = (me(R, t, e) * d) % e,
    U = (me(x, i, e) * h) % e,
    J = (me(U, n, e) * u) % e,
    ee = me(J, ca, e);
  if (!Hs.eql(Hs.sqr(ee), r)) throw new Error("Cannot find square root");
  return ee;
}
var Gs,
  Nu,
  ca,
  Hs,
  Nr,
  ua = le(() => {
    "use strict";
    Co();
    aa();
    Jt();
    (Gs = {
      p: BigInt(
        "0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f"
      ),
      n: BigInt(
        "0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141"
      ),
      h: BigInt(1),
      a: BigInt(0),
      b: BigInt(7),
      Gx: BigInt(
        "0x79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798"
      ),
      Gy: BigInt(
        "0x483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8"
      ),
    }),
      (Nu = {
        beta: BigInt(
          "0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee"
        ),
        basises: [
          [
            BigInt("0x3086d221a7d46bcde86c90e49284eb15"),
            -BigInt("0xe4437ed6010e88286f547fa90abfe4c3"),
          ],
          [
            BigInt("0x114ca50f7a8e2f3f657c1108d9d44cfd8"),
            BigInt("0x3086d221a7d46bcde86c90e49284eb15"),
          ],
        ],
      }),
      (ca = BigInt(2));
    (Hs = Je(Gs.p, { sqrt: Uu })),
      (Nr = ia(Y(F({}, Gs), { Fp: Hs, lowS: !0, endo: Nu }), Po));
  });
var Fl = {};
Jr(Fl, {
  Account: () => ro,
  AddressLookupTableAccount: () => Wn,
  AddressLookupTableInstruction: () => mo,
  AddressLookupTableProgram: () => Mn,
  Authorized: () => Hr,
  BLOCKHASH_CACHE_TIMEOUT_MS: () => Ka,
  BPF_LOADER_DEPRECATED_PROGRAM_ID: () => Wu,
  BPF_LOADER_PROGRAM_ID: () => of,
  BpfLoader: () => fo,
  COMPUTE_BUDGET_INSTRUCTION_LAYOUTS: () => ct,
  ComputeBudgetInstruction: () => bo,
  ComputeBudgetProgram: () => Vn,
  Connection: () => go,
  Ed25519Program: () => Fr,
  Enum: () => no,
  EpochSchedule: () => Mr,
  FeeCalculatorLayout: () => Na,
  Keypair: () => $r,
  LAMPORTS_PER_SOL: () => $l,
  LOOKUP_TABLE_INSTRUCTION_LAYOUTS: () => kt,
  Loader: () => uo,
  Lockup: () => jt,
  MAX_SEED_LENGTH: () => Pa,
  Message: () => lt,
  MessageAccountKeys: () => $t,
  MessageV0: () => fn,
  NONCE_ACCOUNT_LENGTH: () => ao,
  NonceAccount: () => Dr,
  PACKET_DATA_SIZE: () => Tt,
  PUBLIC_KEY_LENGTH: () => ft,
  PublicKey: () => T,
  SIGNATURE_LENGTH_IN_BYTES: () => zn,
  SOLANA_SCHEMA: () => Nn,
  STAKE_CONFIG_ID: () => Ya,
  STAKE_INSTRUCTION_LAYOUTS: () => Ae,
  SYSTEM_INSTRUCTION_LAYOUTS: () => pe,
  SYSVAR_CLOCK_PUBKEY: () => it,
  SYSVAR_EPOCH_SCHEDULE_PUBKEY: () => Zu,
  SYSVAR_INSTRUCTIONS_PUBKEY: () => Xu,
  SYSVAR_RECENT_BLOCKHASHES_PUBKEY: () => zr,
  SYSVAR_RENT_PUBKEY: () => ln,
  SYSVAR_REWARDS_PUBKEY: () => Ju,
  SYSVAR_SLOT_HASHES_PUBKEY: () => Qu,
  SYSVAR_SLOT_HISTORY_PUBKEY: () => ef,
  SYSVAR_STAKE_HISTORY_PUBKEY: () => Kr,
  Secp256k1Program: () => jr,
  SendTransactionError: () => Ft,
  SolanaJSONRPCError: () => z,
  SolanaJSONRPCErrorCode: () => tf,
  StakeAuthorizationLayout: () => Nl,
  StakeInstruction: () => wo,
  StakeProgram: () => hn,
  Struct: () => Un,
  SystemInstruction: () => co,
  SystemProgram: () => Te,
  Transaction: () => ue,
  TransactionExpiredBlockheightExceededError: () => Kn,
  TransactionExpiredNonceInvalidError: () => Pt,
  TransactionExpiredTimeoutError: () => qn,
  TransactionInstruction: () => fe,
  TransactionMessage: () => so,
  TransactionStatus: () => wt,
  VALIDATOR_INFO_KEY: () => Za,
  VERSION_PREFIX_MASK: () => Yr,
  VOTE_PROGRAM_ID: () => Kl,
  ValidatorInfo: () => So,
  VersionedMessage: () => Io,
  VersionedTransaction: () => oo,
  VoteAccount: () => Bo,
  VoteAuthorizationLayout: () => Ul,
  VoteInit: () => Gr,
  VoteInstruction: () => ko,
  VoteProgram: () => yn,
  clusterApiUrl: () => Ml,
  sendAndConfirmRawTransaction: () => Vl,
  sendAndConfirmTransaction: () => io,
});
function la(r) {
  try {
    return zt.ExtendedPoint.fromHex(r), !0;
  } catch {
    return !1;
  }
}
function qu(r) {
  return r._bn !== void 0;
}
function Ta(r, e) {
  let t = (s) => {
      if (s.span >= 0) return s.span;
      if (typeof s.alloc == "function") return s.alloc(e[s.property]);
      if ("count" in s && "elementLayout" in s) {
        let o = e[s.property];
        if (Array.isArray(o)) return o.length * t(s.elementLayout);
      } else if ("fields" in s) return Ta({ layout: s }, e[s.property]);
      return 0;
    },
    n = 0;
  return (
    r.layout.fields.forEach((s) => {
      n += t(s);
    }),
    n
  );
}
function He(r) {
  let e = 0,
    t = 0;
  for (;;) {
    let n = r.shift();
    if (((e |= (n & 127) << (t * 7)), (t += 1), !(n & 128))) break;
  }
  return e;
}
function Xe(r, e) {
  let t = e;
  for (;;) {
    let n = t & 127;
    if (((t >>= 7), t == 0)) {
      r.push(n);
      break;
    } else (n |= 128), r.push(n);
  }
}
function ie(r, e) {
  if (!r) throw new Error(e || "Assertion failed");
}
function at(r) {
  if (r.length === 0) throw new Error(Ca);
  return r.shift();
}
function Ge(r, ...e) {
  let [t] = e;
  if (e.length === 2 ? t + (e[1] ?? 0) > r.length : t >= r.length)
    throw new Error(Ca);
  return r.splice(...e);
}
function io(r, e, t, n) {
  return E(this, null, function* () {
    let s = n && {
        skipPreflight: n.skipPreflight,
        preflightCommitment: n.preflightCommitment || n.commitment,
        maxRetries: n.maxRetries,
        minContextSlot: n.minContextSlot,
      },
      o = yield r.sendTransaction(e, t, s),
      i;
    if (e.recentBlockhash != null && e.lastValidBlockHeight != null)
      i = (yield r.confirmTransaction(
        {
          abortSignal: n?.abortSignal,
          signature: o,
          blockhash: e.recentBlockhash,
          lastValidBlockHeight: e.lastValidBlockHeight,
        },
        n && n.commitment
      )).value;
    else if (e.minNonceContextSlot != null && e.nonceInfo != null) {
      let { nonceInstruction: c } = e.nonceInfo,
        a = c.keys[0].pubkey;
      i = (yield r.confirmTransaction(
        {
          abortSignal: n?.abortSignal,
          minContextSlot: e.minNonceContextSlot,
          nonceAccountPubkey: a,
          nonceValue: e.nonceInfo.nonce,
          signature: o,
        },
        n && n.commitment
      )).value;
    } else
      n?.abortSignal != null &&
        console.warn(
          "sendAndConfirmTransaction(): A transaction with a deprecated confirmation strategy was supplied along with an `abortSignal`. Only transactions having `lastValidBlockHeight` or a combination of `nonceInfo` and `minNonceContextSlot` are abortable."
        ),
        (i = (yield r.confirmTransaction(o, n && n.commitment)).value);
    if (i.err)
      throw o != null
        ? new Ft({
            action: "send",
            signature: o,
            transactionMessage: `Status: (${JSON.stringify(i)})`,
          })
        : new Error(`Transaction ${o} failed (${JSON.stringify(i)})`);
    return o;
  });
}
function Mt(r) {
  return new Promise((e) => setTimeout(e, r));
}
function re(r, e) {
  let t = r.layout.span >= 0 ? r.layout.span : Ta(r, e),
    n = $.Buffer.alloc(t),
    s = Object.assign({ instruction: r.index }, e);
  return r.layout.encode(s, n), n;
}
function ce(r, e) {
  let t;
  try {
    t = r.layout.decode(e);
  } catch (n) {
    throw new Error("invalid instruction; " + n);
  }
  if (t.instruction !== r.index)
    throw new Error(
      `invalid instruction; instruction index mismatch ${t.instruction} != ${r.index}`
    );
  return t;
}
function af(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default")
    ? r.default
    : r;
}
function cf() {
  if (ha) return Ys;
  ha = 1;
  var r = Object.prototype.toString,
    e =
      Object.keys ||
      function (n) {
        var s = [];
        for (var o in n) s.push(o);
        return s;
      };
  function t(n, s) {
    var o, i, c, a, u, d, g;
    if (n === !0) return "true";
    if (n === !1) return "false";
    switch (typeof n) {
      case "object":
        if (n === null) return null;
        if (n.toJSON && typeof n.toJSON == "function") return t(n.toJSON(), s);
        if (((g = r.call(n)), g === "[object Array]")) {
          for (c = "[", i = n.length - 1, o = 0; o < i; o++)
            c += t(n[o], !0) + ",";
          return i > -1 && (c += t(n[o], !0)), c + "]";
        } else if (g === "[object Object]") {
          for (a = e(n).sort(), i = a.length, c = "", o = 0; o < i; )
            (u = a[o]),
              (d = t(n[u], !1)),
              d !== void 0 &&
                (c && (c += ","), (c += JSON.stringify(u) + ":" + d)),
              o++;
          return "{" + c + "}";
        } else return JSON.stringify(n);
      case "function":
      case "undefined":
        return s ? null : void 0;
      case "string":
        return JSON.stringify(n);
      default:
        return isFinite(n) ? n : null;
    }
  }
  return (
    (Ys = function (n) {
      var s = t(n, !1);
      if (s !== void 0) return "" + s;
    }),
    Ys
  );
}
function Zs(r) {
  let e = 0;
  for (; r > 1; ) (r /= 2), e++;
  return e;
}
function ff(r) {
  return r === 0
    ? 1
    : (r--,
      (r |= r >> 1),
      (r |= r >> 2),
      (r |= r >> 4),
      (r |= r >> 8),
      (r |= r >> 16),
      (r |= r >> 32),
      r + 1);
}
function df(r, e) {
  let t;
  try {
    t = r.layout.decode(e);
  } catch (n) {
    throw new Error("invalid instruction; " + n);
  }
  if (t.typeIndex !== r.index)
    throw new Error(
      `invalid account data; account type mismatch ${t.typeIndex} != ${r.index}`
    );
  return t;
}
function pf(r) {
  let e = r.match(yf);
  if (e == null) throw TypeError(`Failed to validate endpoint URL \`${r}\``);
  let [t, n, s, o] = e,
    i = r.startsWith("https:") ? "wss:" : "ws:",
    c = s == null ? null : parseInt(s.slice(1), 10),
    a = c == null ? "" : `:${c + 1}`;
  return `${i}//${n}${a}${o}`;
}
function gf(r) {
  if (/^https?:/.test(r) === !1)
    throw new TypeError("Endpoint URL must start with `http:` or `https:`.");
  return r;
}
function ye(r) {
  let e, t;
  if (typeof r == "string") e = r;
  else if (r) {
    let n = r,
      { commitment: s } = n,
      o = dt(n, ["commitment"]);
    (e = s), (t = o);
  }
  return { commitment: e, config: t };
}
function ga(r) {
  return r.map((e) =>
    "memcmp" in e
      ? Y(F({}, e), {
          memcmp: Y(F({}, e.memcmp), {
            encoding: e.memcmp.encoding ?? "base58",
          }),
        })
      : e
  );
}
function qa(r) {
  return Ne([
    v({ jsonrpc: be("2.0"), id: A(), result: r }),
    v({
      jsonrpc: be("2.0"),
      id: A(),
      error: v({ code: Dt(), message: A(), data: D(Si()) }),
    }),
  ]);
}
function Z(r) {
  return an(qa(r), mf, (e) =>
    "error" in e ? e : Y(F({}, e), { result: P(e.result, r) })
  );
}
function Ie(r) {
  return Z(v({ context: v({ slot: p() }), value: r }));
}
function Zr(r) {
  return v({ context: v({ slot: p() }), value: r });
}
function Xs(r, e) {
  return r === 0
    ? new fn({
        header: e.header,
        staticAccountKeys: e.accountKeys.map((t) => new T(t)),
        recentBlockhash: e.recentBlockhash,
        compiledInstructions: e.instructions.map((t) => ({
          programIdIndex: t.programIdIndex,
          accountKeyIndexes: t.accounts,
          data: Re.default.decode(t.data),
        })),
        addressTableLookups: e.addressTableLookups,
      })
    : new lt(e);
}
function Pf(r, e, t, n, s, o) {
  let i = t || lf,
    c;
  o != null &&
    console.warn(
      "You have supplied an `httpAgent` when creating a `Connection` in a browser environment.It has been ignored; `httpAgent` is only used in Node environments."
    );
  let a;
  return (
    n &&
      (a = (d, g) =>
        E(this, null, function* () {
          let y = yield new Promise((l, h) => {
            try {
              n(d, g, (m, k) => l([m, k]));
            } catch (m) {
              h(m);
            }
          });
          return yield i(...y);
        })),
    new Ra.default(
      (d, g) =>
        E(this, null, function* () {
          let y = {
            method: "POST",
            body: d,
            agent: c,
            headers: Object.assign(
              { "Content-Type": "application/json" },
              e || {},
              Pl
            ),
          };
          try {
            let l = 5,
              h,
              m = 500;
            for (
              ;
              a ? (h = yield a(r, y)) : (h = yield i(r, y)),
                !(h.status !== 429 || s === !0 || ((l -= 1), l === 0));

            )
              console.error(
                `Server responded with ${h.status} ${h.statusText}.  Retrying after ${m}ms delay...`
              ),
                yield Mt(m),
                (m *= 2);
            let k = yield h.text();
            h.ok
              ? g(null, k)
              : g(new Error(`${h.status} ${h.statusText}: ${k}`));
          } catch (l) {
            l instanceof Error && g(l);
          }
        }),
      {}
    )
  );
}
function Tf(r) {
  return (e, t) =>
    new Promise((n, s) => {
      r.request(e, t, (o, i) => {
        if (o) {
          s(o);
          return;
        }
        n(i);
      });
    });
}
function Cf(r) {
  return (e) =>
    new Promise((t, n) => {
      e.length === 0 && t([]);
      let s = e.map((o) => r.request(o.methodName, o.args));
      r.request(s, (o, i) => {
        if (o) {
          n(o);
          return;
        }
        t(i);
      });
    });
}
function Wl({ authorizedVoter: r, epoch: e }) {
  return { epoch: e, authorizedVoter: new T(r) };
}
function _a({
  authorizedPubkey: r,
  epochOfLastAuthorizedSwitch: e,
  targetEpoch: t,
}) {
  return {
    authorizedPubkey: new T(r),
    epochOfLastAuthorizedSwitch: e,
    targetEpoch: t,
  };
}
function Dl({ buf: r, idx: e, isEmpty: t }) {
  return t ? [] : [...r.slice(e + 1).map(_a), ...r.slice(0, e).map(_a)];
}
function Ml(r, e) {
  let t = e === !1 ? "http" : "https";
  if (!r) return xa[t].devnet;
  let n = xa[t][r];
  if (!n) throw new Error(`Unknown ${t} cluster: ${r}`);
  return n;
}
function Vl(r, e, t, n) {
  return E(this, null, function* () {
    let s, o;
    (t && Object.prototype.hasOwnProperty.call(t, "lastValidBlockHeight")) ||
    (t && Object.prototype.hasOwnProperty.call(t, "nonceValue"))
      ? ((s = t), (o = n))
      : (o = t);
    let i = o && {
        skipPreflight: o.skipPreflight,
        preflightCommitment: o.preflightCommitment || o.commitment,
        minContextSlot: o.minContextSlot,
      },
      c = yield r.sendRawTransaction(e, i),
      a = o && o.commitment,
      d = (yield s ? r.confirmTransaction(s, a) : r.confirmTransaction(c, a))
        .value;
    if (d.err)
      throw c != null
        ? new Ft({
            action: i?.skipPreflight ? "send" : "simulate",
            signature: c,
            transactionMessage: `Status: (${JSON.stringify(d)})`,
          })
        : new Error(`Raw transaction ${c} failed (${JSON.stringify(d)})`);
    return c;
  });
}
var $,
  to,
  Re,
  pn,
  f,
  Aa,
  $n,
  Ra,
  zu,
  fa,
  qr,
  Eo,
  Ku,
  X,
  Un,
  no,
  Nn,
  La,
  Pa,
  ft,
  da,
  T,
  ro,
  Wu,
  Tt,
  Yr,
  zn,
  Kn,
  qn,
  Pt,
  $t,
  Q,
  Du,
  Vt,
  Mu,
  Vu,
  $u,
  Fu,
  Wr,
  Ca,
  lt,
  fn,
  Io,
  wt,
  ju,
  fe,
  ue,
  so,
  oo,
  Hu,
  Gu,
  Yu,
  Oa,
  it,
  Zu,
  Xu,
  zr,
  ln,
  Ju,
  Qu,
  ef,
  Kr,
  Ft,
  tf,
  z,
  Na,
  Ua,
  ao,
  Dr,
  nf,
  rf,
  dn,
  co,
  pe,
  Te,
  sf,
  uo,
  of,
  fo,
  Ys,
  ha,
  uf,
  ya,
  On,
  Mr,
  lf,
  lo,
  pa,
  Wn,
  hf,
  yf,
  we,
  za,
  vo,
  Ka,
  mf,
  bf,
  wf,
  kf,
  Sf,
  Bf,
  Ef,
  If,
  Ht,
  vf,
  _f,
  xf,
  Af,
  Rf,
  ma,
  Lf,
  Of,
  Nf,
  Uf,
  zf,
  Kf,
  qf,
  Wf,
  Df,
  ho,
  Mf,
  Vf,
  yo,
  $f,
  Ff,
  Dn,
  jf,
  Hf,
  po,
  Gf,
  Yf,
  Zf,
  Xf,
  Jf,
  Qf,
  el,
  tl,
  nl,
  rl,
  sl,
  ol,
  il,
  al,
  ba,
  cl,
  ul,
  fl,
  ll,
  dl,
  Wa,
  _o,
  Da,
  Ma,
  Va,
  $a,
  hl,
  yl,
  Fa,
  ja,
  Vr,
  Ha,
  Xr,
  xo,
  gn,
  Gt,
  pl,
  gl,
  ml,
  bl,
  wl,
  kl,
  Sl,
  wa,
  Js,
  Ur,
  Bl,
  El,
  Il,
  vl,
  _l,
  xl,
  Al,
  Rl,
  Ll,
  Pl,
  go,
  $r,
  kt,
  mo,
  Mn,
  bo,
  ct,
  Vn,
  ka,
  Sa,
  Ba,
  Ea,
  Fr,
  Tl,
  Cl,
  Ia,
  Qs,
  va,
  Ol,
  eo,
  jr,
  Ga,
  Ya,
  Hr,
  jt,
  wo,
  Ae,
  Nl,
  hn,
  Gr,
  ko,
  ut,
  Ul,
  yn,
  Za,
  zl,
  So,
  Kl,
  ql,
  Bo,
  xa,
  $l,
  jl = le(() => {
    $ = rt(es());
    ai();
    (to = rt(Oo())), (Re = rt(Ss()));
    Ja();
    (pn = rt(mi())), (f = rt(Rs())), (Aa = rt(Rs())), ($n = rt(bi()));
    Bi();
    Ra = rt(ji());
    Qi();
    Qa();
    ua();
    (zu = zt.utils.randomPrivateKey),
      (fa = () => {
        let r = zt.utils.randomPrivateKey(),
          e = qr(r),
          t = new Uint8Array(64);
        return t.set(r), t.set(e, 32), { publicKey: e, secretKey: t };
      }),
      (qr = zt.getPublicKey);
    (Eo = (r, e) => zt.sign(r, e.slice(0, 32))),
      (Ku = zt.verify),
      (X = (r) =>
        $.Buffer.isBuffer(r)
          ? r
          : r instanceof Uint8Array
          ? $.Buffer.from(r.buffer, r.byteOffset, r.byteLength)
          : $.Buffer.from(r)),
      (Un = class {
        constructor(e) {
          Object.assign(this, e);
        }
        encode() {
          return $.Buffer.from((0, pn.serialize)(Nn, this));
        }
        static decode(e) {
          return (0, pn.deserialize)(Nn, this, e);
        }
        static decodeUnchecked(e) {
          return (0, pn.deserializeUnchecked)(Nn, this, e);
        }
      }),
      (no = class extends Un {
        constructor(e) {
          if ((super(e), (this.enum = ""), Object.keys(e).length !== 1))
            throw new Error("Enum can only take single value");
          Object.keys(e).map((t) => {
            this.enum = t;
          });
        }
      }),
      (Nn = new Map()),
      (Pa = 32),
      (ft = 32);
    (da = 1),
      (T = class r extends Un {
        constructor(e) {
          if ((super({}), (this._bn = void 0), qu(e))) this._bn = e._bn;
          else {
            if (typeof e == "string") {
              let t = Re.default.decode(e);
              if (t.length != ft) throw new Error("Invalid public key input");
              this._bn = new to.default(t);
            } else this._bn = new to.default(e);
            if (this._bn.byteLength() > ft)
              throw new Error("Invalid public key input");
          }
        }
        static unique() {
          let e = new r(da);
          return (da += 1), new r(e.toBuffer());
        }
        equals(e) {
          return this._bn.eq(e._bn);
        }
        toBase58() {
          return Re.default.encode(this.toBytes());
        }
        toJSON() {
          return this.toBase58();
        }
        toBytes() {
          let e = this.toBuffer();
          return new Uint8Array(e.buffer, e.byteOffset, e.byteLength);
        }
        toBuffer() {
          let e = this._bn.toArrayLike($.Buffer);
          if (e.length === ft) return e;
          let t = $.Buffer.alloc(32);
          return e.copy(t, 32 - e.length), t;
        }
        get [Symbol.toStringTag]() {
          return `PublicKey(${this.toString()})`;
        }
        toString() {
          return this.toBase58();
        }
        static createWithSeed(e, t, n) {
          return E(this, null, function* () {
            let s = $.Buffer.concat([
                e.toBuffer(),
                $.Buffer.from(t),
                n.toBuffer(),
              ]),
              o = ss(s);
            return new r(o);
          });
        }
        static createProgramAddressSync(e, t) {
          let n = $.Buffer.alloc(0);
          e.forEach(function (o) {
            if (o.length > Pa) throw new TypeError("Max seed length exceeded");
            n = $.Buffer.concat([n, X(o)]);
          }),
            (n = $.Buffer.concat([
              n,
              t.toBuffer(),
              $.Buffer.from("ProgramDerivedAddress"),
            ]));
          let s = ss(n);
          if (la(s))
            throw new Error("Invalid seeds, address must fall off the curve");
          return new r(s);
        }
        static createProgramAddress(e, t) {
          return E(this, null, function* () {
            return this.createProgramAddressSync(e, t);
          });
        }
        static findProgramAddressSync(e, t) {
          let n = 255,
            s;
          for (; n != 0; ) {
            try {
              let o = e.concat($.Buffer.from([n]));
              s = this.createProgramAddressSync(o, t);
            } catch (o) {
              if (o instanceof TypeError) throw o;
              n--;
              continue;
            }
            return [s, n];
          }
          throw new Error("Unable to find a viable program address nonce");
        }
        static findProgramAddress(e, t) {
          return E(this, null, function* () {
            return this.findProgramAddressSync(e, t);
          });
        }
        static isOnCurve(e) {
          let t = new r(e);
          return la(t.toBytes());
        }
      });
    La = T;
    T.default = new La("11111111111111111111111111111111");
    Nn.set(T, { kind: "struct", fields: [["_bn", "u256"]] });
    (ro = class {
      constructor(e) {
        if (((this._publicKey = void 0), (this._secretKey = void 0), e)) {
          let t = X(e);
          if (e.length !== 64) throw new Error("bad secret key size");
          (this._publicKey = t.slice(32, 64)),
            (this._secretKey = t.slice(0, 32));
        } else
          (this._secretKey = X(zu())),
            (this._publicKey = X(qr(this._secretKey)));
      }
      get publicKey() {
        return new T(this._publicKey);
      }
      get secretKey() {
        return $.Buffer.concat([this._secretKey, this._publicKey], 64);
      }
    }),
      (Wu = new T("BPFLoader1111111111111111111111111111111111")),
      (Tt = 1232),
      (Yr = 127),
      (zn = 64),
      (Kn = class extends Error {
        constructor(e) {
          super(`Signature ${e} has expired: block height exceeded.`),
            (this.signature = void 0),
            (this.signature = e);
        }
      });
    Object.defineProperty(Kn.prototype, "name", {
      value: "TransactionExpiredBlockheightExceededError",
    });
    qn = class extends Error {
      constructor(e, t) {
        super(
          `Transaction was not confirmed in ${t.toFixed(
            2
          )} seconds. It is unknown if it succeeded or failed. Check signature ${e} using the Solana Explorer or CLI tools.`
        ),
          (this.signature = void 0),
          (this.signature = e);
      }
    };
    Object.defineProperty(qn.prototype, "name", {
      value: "TransactionExpiredTimeoutError",
    });
    Pt = class extends Error {
      constructor(e) {
        super(`Signature ${e} has expired: the nonce is no longer valid.`),
          (this.signature = void 0),
          (this.signature = e);
      }
    };
    Object.defineProperty(Pt.prototype, "name", {
      value: "TransactionExpiredNonceInvalidError",
    });
    ($t = class {
      constructor(e, t) {
        (this.staticAccountKeys = void 0),
          (this.accountKeysFromLookups = void 0),
          (this.staticAccountKeys = e),
          (this.accountKeysFromLookups = t);
      }
      keySegments() {
        let e = [this.staticAccountKeys];
        return (
          this.accountKeysFromLookups &&
            (e.push(this.accountKeysFromLookups.writable),
            e.push(this.accountKeysFromLookups.readonly)),
          e
        );
      }
      get(e) {
        for (let t of this.keySegments()) {
          if (e < t.length) return t[e];
          e -= t.length;
        }
      }
      get length() {
        return this.keySegments().flat().length;
      }
      compileInstructions(e) {
        if (this.length > 256)
          throw new Error(
            "Account index overflow encountered during compilation"
          );
        let n = new Map();
        this.keySegments()
          .flat()
          .forEach((o, i) => {
            n.set(o.toBase58(), i);
          });
        let s = (o) => {
          let i = n.get(o.toBase58());
          if (i === void 0)
            throw new Error(
              "Encountered an unknown instruction account key during compilation"
            );
          return i;
        };
        return e.map((o) => ({
          programIdIndex: s(o.programId),
          accountKeyIndexes: o.keys.map((i) => s(i.pubkey)),
          data: o.data,
        }));
      }
    }),
      (Q = (r = "publicKey") => f.blob(32, r)),
      (Du = (r = "signature") => f.blob(64, r)),
      (Vt = (r = "string") => {
        let e = f.struct(
            [
              f.u32("length"),
              f.u32("lengthPadding"),
              f.blob(f.offset(f.u32(), -8), "chars"),
            ],
            r
          ),
          t = e.decode.bind(e),
          n = e.encode.bind(e),
          s = e;
        return (
          (s.decode = (o, i) => t(o, i).chars.toString()),
          (s.encode = (o, i, c) => {
            let a = { chars: $.Buffer.from(o, "utf8") };
            return n(a, i, c);
          }),
          (s.alloc = (o) =>
            f.u32().span + f.u32().span + $.Buffer.from(o, "utf8").length),
          s
        );
      }),
      (Mu = (r = "authorized") => f.struct([Q("staker"), Q("withdrawer")], r)),
      (Vu = (r = "lockup") =>
        f.struct(
          [f.ns64("unixTimestamp"), f.ns64("epoch"), Q("custodian")],
          r
        )),
      ($u = (r = "voteInit") =>
        f.struct(
          [
            Q("nodePubkey"),
            Q("authorizedVoter"),
            Q("authorizedWithdrawer"),
            f.u8("commission"),
          ],
          r
        )),
      (Fu = (r = "voteAuthorizeWithSeedArgs") =>
        f.struct(
          [
            f.u32("voteAuthorizationType"),
            Q("currentAuthorityDerivedKeyOwnerPubkey"),
            Vt("currentAuthorityDerivedKeySeed"),
            Q("newAuthorized"),
          ],
          r
        ));
    (Wr = class r {
      constructor(e, t) {
        (this.payer = void 0),
          (this.keyMetaMap = void 0),
          (this.payer = e),
          (this.keyMetaMap = t);
      }
      static compile(e, t) {
        let n = new Map(),
          s = (i) => {
            let c = i.toBase58(),
              a = n.get(c);
            return (
              a === void 0 &&
                ((a = { isSigner: !1, isWritable: !1, isInvoked: !1 }),
                n.set(c, a)),
              a
            );
          },
          o = s(t);
        (o.isSigner = !0), (o.isWritable = !0);
        for (let i of e) {
          s(i.programId).isInvoked = !0;
          for (let c of i.keys) {
            let a = s(c.pubkey);
            (a.isSigner ||= c.isSigner), (a.isWritable ||= c.isWritable);
          }
        }
        return new r(t, n);
      }
      getMessageComponents() {
        let e = [...this.keyMetaMap.entries()];
        ie(e.length <= 256, "Max static account keys length exceeded");
        let t = e.filter(([, a]) => a.isSigner && a.isWritable),
          n = e.filter(([, a]) => a.isSigner && !a.isWritable),
          s = e.filter(([, a]) => !a.isSigner && a.isWritable),
          o = e.filter(([, a]) => !a.isSigner && !a.isWritable),
          i = {
            numRequiredSignatures: t.length + n.length,
            numReadonlySignedAccounts: n.length,
            numReadonlyUnsignedAccounts: o.length,
          };
        {
          ie(t.length > 0, "Expected at least one writable signer key");
          let [a] = t[0];
          ie(
            a === this.payer.toBase58(),
            "Expected first writable signer key to be the fee payer"
          );
        }
        let c = [
          ...t.map(([a]) => new T(a)),
          ...n.map(([a]) => new T(a)),
          ...s.map(([a]) => new T(a)),
          ...o.map(([a]) => new T(a)),
        ];
        return [i, c];
      }
      extractTableLookup(e) {
        let [t, n] = this.drainKeysFoundInLookupTable(
            e.state.addresses,
            (i) => !i.isSigner && !i.isInvoked && i.isWritable
          ),
          [s, o] = this.drainKeysFoundInLookupTable(
            e.state.addresses,
            (i) => !i.isSigner && !i.isInvoked && !i.isWritable
          );
        if (!(t.length === 0 && s.length === 0))
          return [
            { accountKey: e.key, writableIndexes: t, readonlyIndexes: s },
            { writable: n, readonly: o },
          ];
      }
      drainKeysFoundInLookupTable(e, t) {
        let n = new Array(),
          s = new Array();
        for (let [o, i] of this.keyMetaMap.entries())
          if (t(i)) {
            let c = new T(o),
              a = e.findIndex((u) => u.equals(c));
            a >= 0 &&
              (ie(a < 256, "Max lookup table index exceeded"),
              n.push(a),
              s.push(c),
              this.keyMetaMap.delete(o));
          }
        return [n, s];
      }
    }),
      (Ca = "Reached end of buffer unexpectedly");
    (lt = class r {
      constructor(e) {
        (this.header = void 0),
          (this.accountKeys = void 0),
          (this.recentBlockhash = void 0),
          (this.instructions = void 0),
          (this.indexToProgramIds = new Map()),
          (this.header = e.header),
          (this.accountKeys = e.accountKeys.map((t) => new T(t))),
          (this.recentBlockhash = e.recentBlockhash),
          (this.instructions = e.instructions),
          this.instructions.forEach((t) =>
            this.indexToProgramIds.set(
              t.programIdIndex,
              this.accountKeys[t.programIdIndex]
            )
          );
      }
      get version() {
        return "legacy";
      }
      get staticAccountKeys() {
        return this.accountKeys;
      }
      get compiledInstructions() {
        return this.instructions.map((e) => ({
          programIdIndex: e.programIdIndex,
          accountKeyIndexes: e.accounts,
          data: Re.default.decode(e.data),
        }));
      }
      get addressTableLookups() {
        return [];
      }
      getAccountKeys() {
        return new $t(this.staticAccountKeys);
      }
      static compile(e) {
        let t = Wr.compile(e.instructions, e.payerKey),
          [n, s] = t.getMessageComponents(),
          i = new $t(s)
            .compileInstructions(e.instructions)
            .map((c) => ({
              programIdIndex: c.programIdIndex,
              accounts: c.accountKeyIndexes,
              data: Re.default.encode(c.data),
            }));
        return new r({
          header: n,
          accountKeys: s,
          recentBlockhash: e.recentBlockhash,
          instructions: i,
        });
      }
      isAccountSigner(e) {
        return e < this.header.numRequiredSignatures;
      }
      isAccountWritable(e) {
        let t = this.header.numRequiredSignatures;
        if (e >= this.header.numRequiredSignatures) {
          let n = e - t,
            o =
              this.accountKeys.length -
              t -
              this.header.numReadonlyUnsignedAccounts;
          return n < o;
        } else {
          let n = t - this.header.numReadonlySignedAccounts;
          return e < n;
        }
      }
      isProgramId(e) {
        return this.indexToProgramIds.has(e);
      }
      programIds() {
        return [...this.indexToProgramIds.values()];
      }
      nonProgramIds() {
        return this.accountKeys.filter((e, t) => !this.isProgramId(t));
      }
      serialize() {
        let e = this.accountKeys.length,
          t = [];
        Xe(t, e);
        let n = this.instructions.map((g) => {
            let { accounts: y, programIdIndex: l } = g,
              h = Array.from(Re.default.decode(g.data)),
              m = [];
            Xe(m, y.length);
            let k = [];
            return (
              Xe(k, h.length),
              {
                programIdIndex: l,
                keyIndicesCount: $.Buffer.from(m),
                keyIndices: y,
                dataLength: $.Buffer.from(k),
                data: h,
              }
            );
          }),
          s = [];
        Xe(s, n.length);
        let o = $.Buffer.alloc(Tt);
        $.Buffer.from(s).copy(o);
        let i = s.length;
        n.forEach((g) => {
          let l = f
            .struct([
              f.u8("programIdIndex"),
              f.blob(g.keyIndicesCount.length, "keyIndicesCount"),
              f.seq(f.u8("keyIndex"), g.keyIndices.length, "keyIndices"),
              f.blob(g.dataLength.length, "dataLength"),
              f.seq(f.u8("userdatum"), g.data.length, "data"),
            ])
            .encode(g, o, i);
          i += l;
        }),
          (o = o.slice(0, i));
        let c = f.struct([
            f.blob(1, "numRequiredSignatures"),
            f.blob(1, "numReadonlySignedAccounts"),
            f.blob(1, "numReadonlyUnsignedAccounts"),
            f.blob(t.length, "keyCount"),
            f.seq(Q("key"), e, "keys"),
            Q("recentBlockhash"),
          ]),
          a = {
            numRequiredSignatures: $.Buffer.from([
              this.header.numRequiredSignatures,
            ]),
            numReadonlySignedAccounts: $.Buffer.from([
              this.header.numReadonlySignedAccounts,
            ]),
            numReadonlyUnsignedAccounts: $.Buffer.from([
              this.header.numReadonlyUnsignedAccounts,
            ]),
            keyCount: $.Buffer.from(t),
            keys: this.accountKeys.map((g) => X(g.toBytes())),
            recentBlockhash: Re.default.decode(this.recentBlockhash),
          },
          u = $.Buffer.alloc(2048),
          d = c.encode(a, u);
        return o.copy(u, d), u.slice(0, d + o.length);
      }
      static from(e) {
        let t = [...e],
          n = at(t);
        if (n !== (n & Yr))
          throw new Error(
            "Versioned messages must be deserialized with VersionedMessage.deserialize()"
          );
        let s = at(t),
          o = at(t),
          i = He(t),
          c = [];
        for (let y = 0; y < i; y++) {
          let l = Ge(t, 0, ft);
          c.push(new T($.Buffer.from(l)));
        }
        let a = Ge(t, 0, ft),
          u = He(t),
          d = [];
        for (let y = 0; y < u; y++) {
          let l = at(t),
            h = He(t),
            m = Ge(t, 0, h),
            k = He(t),
            w = Ge(t, 0, k),
            R = Re.default.encode($.Buffer.from(w));
          d.push({ programIdIndex: l, accounts: m, data: R });
        }
        let g = {
          header: {
            numRequiredSignatures: n,
            numReadonlySignedAccounts: s,
            numReadonlyUnsignedAccounts: o,
          },
          recentBlockhash: Re.default.encode($.Buffer.from(a)),
          accountKeys: c,
          instructions: d,
        };
        return new r(g);
      }
    }),
      (fn = class r {
        constructor(e) {
          (this.header = void 0),
            (this.staticAccountKeys = void 0),
            (this.recentBlockhash = void 0),
            (this.compiledInstructions = void 0),
            (this.addressTableLookups = void 0),
            (this.header = e.header),
            (this.staticAccountKeys = e.staticAccountKeys),
            (this.recentBlockhash = e.recentBlockhash),
            (this.compiledInstructions = e.compiledInstructions),
            (this.addressTableLookups = e.addressTableLookups);
        }
        get version() {
          return 0;
        }
        get numAccountKeysFromLookups() {
          let e = 0;
          for (let t of this.addressTableLookups)
            e += t.readonlyIndexes.length + t.writableIndexes.length;
          return e;
        }
        getAccountKeys(e) {
          let t;
          if (e && "accountKeysFromLookups" in e && e.accountKeysFromLookups) {
            if (
              this.numAccountKeysFromLookups !=
              e.accountKeysFromLookups.writable.length +
                e.accountKeysFromLookups.readonly.length
            )
              throw new Error(
                "Failed to get account keys because of a mismatch in the number of account keys from lookups"
              );
            t = e.accountKeysFromLookups;
          } else if (
            e &&
            "addressLookupTableAccounts" in e &&
            e.addressLookupTableAccounts
          )
            t = this.resolveAddressTableLookups(e.addressLookupTableAccounts);
          else if (this.addressTableLookups.length > 0)
            throw new Error(
              "Failed to get account keys because address table lookups were not resolved"
            );
          return new $t(this.staticAccountKeys, t);
        }
        isAccountSigner(e) {
          return e < this.header.numRequiredSignatures;
        }
        isAccountWritable(e) {
          let t = this.header.numRequiredSignatures,
            n = this.staticAccountKeys.length;
          if (e >= n) {
            let s = e - n,
              o = this.addressTableLookups.reduce(
                (i, c) => i + c.writableIndexes.length,
                0
              );
            return s < o;
          } else if (e >= this.header.numRequiredSignatures) {
            let s = e - t,
              i = n - t - this.header.numReadonlyUnsignedAccounts;
            return s < i;
          } else {
            let s = t - this.header.numReadonlySignedAccounts;
            return e < s;
          }
        }
        resolveAddressTableLookups(e) {
          let t = { writable: [], readonly: [] };
          for (let n of this.addressTableLookups) {
            let s = e.find((o) => o.key.equals(n.accountKey));
            if (!s)
              throw new Error(
                `Failed to find address lookup table account for table key ${n.accountKey.toBase58()}`
              );
            for (let o of n.writableIndexes)
              if (o < s.state.addresses.length)
                t.writable.push(s.state.addresses[o]);
              else
                throw new Error(
                  `Failed to find address for index ${o} in address lookup table ${n.accountKey.toBase58()}`
                );
            for (let o of n.readonlyIndexes)
              if (o < s.state.addresses.length)
                t.readonly.push(s.state.addresses[o]);
              else
                throw new Error(
                  `Failed to find address for index ${o} in address lookup table ${n.accountKey.toBase58()}`
                );
          }
          return t;
        }
        static compile(e) {
          let t = Wr.compile(e.instructions, e.payerKey),
            n = new Array(),
            s = { writable: new Array(), readonly: new Array() },
            o = e.addressLookupTableAccounts || [];
          for (let d of o) {
            let g = t.extractTableLookup(d);
            if (g !== void 0) {
              let [y, { writable: l, readonly: h }] = g;
              n.push(y), s.writable.push(...l), s.readonly.push(...h);
            }
          }
          let [i, c] = t.getMessageComponents(),
            u = new $t(c, s).compileInstructions(e.instructions);
          return new r({
            header: i,
            staticAccountKeys: c,
            recentBlockhash: e.recentBlockhash,
            compiledInstructions: u,
            addressTableLookups: n,
          });
        }
        serialize() {
          let e = Array();
          Xe(e, this.staticAccountKeys.length);
          let t = this.serializeInstructions(),
            n = Array();
          Xe(n, this.compiledInstructions.length);
          let s = this.serializeAddressTableLookups(),
            o = Array();
          Xe(o, this.addressTableLookups.length);
          let i = f.struct([
              f.u8("prefix"),
              f.struct(
                [
                  f.u8("numRequiredSignatures"),
                  f.u8("numReadonlySignedAccounts"),
                  f.u8("numReadonlyUnsignedAccounts"),
                ],
                "header"
              ),
              f.blob(e.length, "staticAccountKeysLength"),
              f.seq(Q(), this.staticAccountKeys.length, "staticAccountKeys"),
              Q("recentBlockhash"),
              f.blob(n.length, "instructionsLength"),
              f.blob(t.length, "serializedInstructions"),
              f.blob(o.length, "addressTableLookupsLength"),
              f.blob(s.length, "serializedAddressTableLookups"),
            ]),
            c = new Uint8Array(Tt),
            u = i.encode(
              {
                prefix: 128,
                header: this.header,
                staticAccountKeysLength: new Uint8Array(e),
                staticAccountKeys: this.staticAccountKeys.map((d) =>
                  d.toBytes()
                ),
                recentBlockhash: Re.default.decode(this.recentBlockhash),
                instructionsLength: new Uint8Array(n),
                serializedInstructions: t,
                addressTableLookupsLength: new Uint8Array(o),
                serializedAddressTableLookups: s,
              },
              c
            );
          return c.slice(0, u);
        }
        serializeInstructions() {
          let e = 0,
            t = new Uint8Array(Tt);
          for (let n of this.compiledInstructions) {
            let s = Array();
            Xe(s, n.accountKeyIndexes.length);
            let o = Array();
            Xe(o, n.data.length);
            let i = f.struct([
              f.u8("programIdIndex"),
              f.blob(s.length, "encodedAccountKeyIndexesLength"),
              f.seq(f.u8(), n.accountKeyIndexes.length, "accountKeyIndexes"),
              f.blob(o.length, "encodedDataLength"),
              f.blob(n.data.length, "data"),
            ]);
            e += i.encode(
              {
                programIdIndex: n.programIdIndex,
                encodedAccountKeyIndexesLength: new Uint8Array(s),
                accountKeyIndexes: n.accountKeyIndexes,
                encodedDataLength: new Uint8Array(o),
                data: n.data,
              },
              t,
              e
            );
          }
          return t.slice(0, e);
        }
        serializeAddressTableLookups() {
          let e = 0,
            t = new Uint8Array(Tt);
          for (let n of this.addressTableLookups) {
            let s = Array();
            Xe(s, n.writableIndexes.length);
            let o = Array();
            Xe(o, n.readonlyIndexes.length);
            let i = f.struct([
              Q("accountKey"),
              f.blob(s.length, "encodedWritableIndexesLength"),
              f.seq(f.u8(), n.writableIndexes.length, "writableIndexes"),
              f.blob(o.length, "encodedReadonlyIndexesLength"),
              f.seq(f.u8(), n.readonlyIndexes.length, "readonlyIndexes"),
            ]);
            e += i.encode(
              {
                accountKey: n.accountKey.toBytes(),
                encodedWritableIndexesLength: new Uint8Array(s),
                writableIndexes: n.writableIndexes,
                encodedReadonlyIndexesLength: new Uint8Array(o),
                readonlyIndexes: n.readonlyIndexes,
              },
              t,
              e
            );
          }
          return t.slice(0, e);
        }
        static deserialize(e) {
          let t = [...e],
            n = at(t),
            s = n & Yr;
          ie(n !== s, "Expected versioned message but received legacy message");
          let o = s;
          ie(
            o === 0,
            `Expected versioned message with version 0 but found version ${o}`
          );
          let i = {
              numRequiredSignatures: at(t),
              numReadonlySignedAccounts: at(t),
              numReadonlyUnsignedAccounts: at(t),
            },
            c = [],
            a = He(t);
          for (let h = 0; h < a; h++) c.push(new T(Ge(t, 0, ft)));
          let u = Re.default.encode(Ge(t, 0, ft)),
            d = He(t),
            g = [];
          for (let h = 0; h < d; h++) {
            let m = at(t),
              k = He(t),
              w = Ge(t, 0, k),
              R = He(t),
              x = new Uint8Array(Ge(t, 0, R));
            g.push({ programIdIndex: m, accountKeyIndexes: w, data: x });
          }
          let y = He(t),
            l = [];
          for (let h = 0; h < y; h++) {
            let m = new T(Ge(t, 0, ft)),
              k = He(t),
              w = Ge(t, 0, k),
              R = He(t),
              x = Ge(t, 0, R);
            l.push({ accountKey: m, writableIndexes: w, readonlyIndexes: x });
          }
          return new r({
            header: i,
            staticAccountKeys: c,
            recentBlockhash: u,
            compiledInstructions: g,
            addressTableLookups: l,
          });
        }
      }),
      (Io = {
        deserializeMessageVersion(r) {
          let e = r[0],
            t = e & Yr;
          return t === e ? "legacy" : t;
        },
        deserialize: (r) => {
          let e = Io.deserializeMessageVersion(r);
          if (e === "legacy") return lt.from(r);
          if (e === 0) return fn.deserialize(r);
          throw new Error(
            `Transaction message version ${e} deserialization is not supported`
          );
        },
      }),
      (wt = (function (r) {
        return (
          (r[(r.BLOCKHEIGHT_EXCEEDED = 0)] = "BLOCKHEIGHT_EXCEEDED"),
          (r[(r.PROCESSED = 1)] = "PROCESSED"),
          (r[(r.TIMED_OUT = 2)] = "TIMED_OUT"),
          (r[(r.NONCE_INVALID = 3)] = "NONCE_INVALID"),
          r
        );
      })({})),
      (ju = $.Buffer.alloc(zn).fill(0)),
      (fe = class {
        constructor(e) {
          (this.keys = void 0),
            (this.programId = void 0),
            (this.data = $.Buffer.alloc(0)),
            (this.programId = e.programId),
            (this.keys = e.keys),
            e.data && (this.data = e.data);
        }
        toJSON() {
          return {
            keys: this.keys.map(
              ({ pubkey: e, isSigner: t, isWritable: n }) => ({
                pubkey: e.toJSON(),
                isSigner: t,
                isWritable: n,
              })
            ),
            programId: this.programId.toJSON(),
            data: [...this.data],
          };
        }
      }),
      (ue = class r {
        get signature() {
          return this.signatures.length > 0
            ? this.signatures[0].signature
            : null;
        }
        constructor(e) {
          if (
            ((this.signatures = []),
            (this.feePayer = void 0),
            (this.instructions = []),
            (this.recentBlockhash = void 0),
            (this.lastValidBlockHeight = void 0),
            (this.nonceInfo = void 0),
            (this.minNonceContextSlot = void 0),
            (this._message = void 0),
            (this._json = void 0),
            !!e)
          )
            if (
              (e.feePayer && (this.feePayer = e.feePayer),
              e.signatures && (this.signatures = e.signatures),
              Object.prototype.hasOwnProperty.call(e, "nonceInfo"))
            ) {
              let { minContextSlot: t, nonceInfo: n } = e;
              (this.minNonceContextSlot = t), (this.nonceInfo = n);
            } else if (
              Object.prototype.hasOwnProperty.call(e, "lastValidBlockHeight")
            ) {
              let { blockhash: t, lastValidBlockHeight: n } = e;
              (this.recentBlockhash = t), (this.lastValidBlockHeight = n);
            } else {
              let { recentBlockhash: t, nonceInfo: n } = e;
              n && (this.nonceInfo = n), (this.recentBlockhash = t);
            }
        }
        toJSON() {
          return {
            recentBlockhash: this.recentBlockhash || null,
            feePayer: this.feePayer ? this.feePayer.toJSON() : null,
            nonceInfo: this.nonceInfo
              ? {
                  nonce: this.nonceInfo.nonce,
                  nonceInstruction: this.nonceInfo.nonceInstruction.toJSON(),
                }
              : null,
            instructions: this.instructions.map((e) => e.toJSON()),
            signers: this.signatures.map(({ publicKey: e }) => e.toJSON()),
          };
        }
        add(...e) {
          if (e.length === 0) throw new Error("No instructions");
          return (
            e.forEach((t) => {
              "instructions" in t
                ? (this.instructions = this.instructions.concat(t.instructions))
                : "data" in t && "programId" in t && "keys" in t
                ? this.instructions.push(t)
                : this.instructions.push(new fe(t));
            }),
            this
          );
        }
        compileMessage() {
          if (
            this._message &&
            JSON.stringify(this.toJSON()) === JSON.stringify(this._json)
          )
            return this._message;
          let e, t;
          if (
            (this.nonceInfo
              ? ((e = this.nonceInfo.nonce),
                this.instructions[0] != this.nonceInfo.nonceInstruction
                  ? (t = [
                      this.nonceInfo.nonceInstruction,
                      ...this.instructions,
                    ])
                  : (t = this.instructions))
              : ((e = this.recentBlockhash), (t = this.instructions)),
            !e)
          )
            throw new Error("Transaction recentBlockhash required");
          t.length < 1 && console.warn("No instructions provided");
          let n;
          if (this.feePayer) n = this.feePayer;
          else if (this.signatures.length > 0 && this.signatures[0].publicKey)
            n = this.signatures[0].publicKey;
          else throw new Error("Transaction fee payer required");
          for (let m = 0; m < t.length; m++)
            if (t[m].programId === void 0)
              throw new Error(
                `Transaction instruction index ${m} has undefined program id`
              );
          let s = [],
            o = [];
          t.forEach((m) => {
            m.keys.forEach((w) => {
              o.push(F({}, w));
            });
            let k = m.programId.toString();
            s.includes(k) || s.push(k);
          }),
            s.forEach((m) => {
              o.push({ pubkey: new T(m), isSigner: !1, isWritable: !1 });
            });
          let i = [];
          o.forEach((m) => {
            let k = m.pubkey.toString(),
              w = i.findIndex((R) => R.pubkey.toString() === k);
            w > -1
              ? ((i[w].isWritable = i[w].isWritable || m.isWritable),
                (i[w].isSigner = i[w].isSigner || m.isSigner))
              : i.push(m);
          }),
            i.sort(function (m, k) {
              if (m.isSigner !== k.isSigner) return m.isSigner ? -1 : 1;
              if (m.isWritable !== k.isWritable) return m.isWritable ? -1 : 1;
              let w = {
                localeMatcher: "best fit",
                usage: "sort",
                sensitivity: "variant",
                ignorePunctuation: !1,
                numeric: !1,
                caseFirst: "lower",
              };
              return m.pubkey
                .toBase58()
                .localeCompare(k.pubkey.toBase58(), "en", w);
            });
          let c = i.findIndex((m) => m.pubkey.equals(n));
          if (c > -1) {
            let [m] = i.splice(c, 1);
            (m.isSigner = !0), (m.isWritable = !0), i.unshift(m);
          } else i.unshift({ pubkey: n, isSigner: !0, isWritable: !0 });
          for (let m of this.signatures) {
            let k = i.findIndex((w) => w.pubkey.equals(m.publicKey));
            if (k > -1)
              i[k].isSigner ||
                ((i[k].isSigner = !0),
                console.warn(
                  "Transaction references a signature that is unnecessary, only the fee payer and instruction signer accounts should sign a transaction. This behavior is deprecated and will throw an error in the next major version release."
                ));
            else throw new Error(`unknown signer: ${m.publicKey.toString()}`);
          }
          let a = 0,
            u = 0,
            d = 0,
            g = [],
            y = [];
          i.forEach(({ pubkey: m, isSigner: k, isWritable: w }) => {
            k
              ? (g.push(m.toString()), (a += 1), w || (u += 1))
              : (y.push(m.toString()), w || (d += 1));
          });
          let l = g.concat(y),
            h = t.map((m) => {
              let { data: k, programId: w } = m;
              return {
                programIdIndex: l.indexOf(w.toString()),
                accounts: m.keys.map((R) => l.indexOf(R.pubkey.toString())),
                data: Re.default.encode(k),
              };
            });
          return (
            h.forEach((m) => {
              ie(m.programIdIndex >= 0), m.accounts.forEach((k) => ie(k >= 0));
            }),
            new lt({
              header: {
                numRequiredSignatures: a,
                numReadonlySignedAccounts: u,
                numReadonlyUnsignedAccounts: d,
              },
              accountKeys: l,
              recentBlockhash: e,
              instructions: h,
            })
          );
        }
        _compile() {
          let e = this.compileMessage(),
            t = e.accountKeys.slice(0, e.header.numRequiredSignatures);
          return (
            (this.signatures.length === t.length &&
              this.signatures.every((s, o) => t[o].equals(s.publicKey))) ||
              (this.signatures = t.map((n) => ({
                signature: null,
                publicKey: n,
              }))),
            e
          );
        }
        serializeMessage() {
          return this._compile().serialize();
        }
        getEstimatedFee(e) {
          return E(this, null, function* () {
            return (yield e.getFeeForMessage(this.compileMessage())).value;
          });
        }
        setSigners(...e) {
          if (e.length === 0) throw new Error("No signers");
          let t = new Set();
          this.signatures = e
            .filter((n) => {
              let s = n.toString();
              return t.has(s) ? !1 : (t.add(s), !0);
            })
            .map((n) => ({ signature: null, publicKey: n }));
        }
        sign(...e) {
          if (e.length === 0) throw new Error("No signers");
          let t = new Set(),
            n = [];
          for (let o of e) {
            let i = o.publicKey.toString();
            t.has(i) || (t.add(i), n.push(o));
          }
          this.signatures = n.map((o) => ({
            signature: null,
            publicKey: o.publicKey,
          }));
          let s = this._compile();
          this._partialSign(s, ...n);
        }
        partialSign(...e) {
          if (e.length === 0) throw new Error("No signers");
          let t = new Set(),
            n = [];
          for (let o of e) {
            let i = o.publicKey.toString();
            t.has(i) || (t.add(i), n.push(o));
          }
          let s = this._compile();
          this._partialSign(s, ...n);
        }
        _partialSign(e, ...t) {
          let n = e.serialize();
          t.forEach((s) => {
            let o = Eo(n, s.secretKey);
            this._addSignature(s.publicKey, X(o));
          });
        }
        addSignature(e, t) {
          this._compile(), this._addSignature(e, t);
        }
        _addSignature(e, t) {
          ie(t.length === 64);
          let n = this.signatures.findIndex((s) => e.equals(s.publicKey));
          if (n < 0) throw new Error(`unknown signer: ${e.toString()}`);
          this.signatures[n].signature = $.Buffer.from(t);
        }
        verifySignatures(e = !0) {
          return !this._getMessageSignednessErrors(this.serializeMessage(), e);
        }
        _getMessageSignednessErrors(e, t) {
          let n = {};
          for (let { signature: s, publicKey: o } of this.signatures)
            s === null
              ? t && (n.missing ||= []).push(o)
              : Ku(s, e, o.toBytes()) || (n.invalid ||= []).push(o);
          return n.invalid || n.missing ? n : void 0;
        }
        serialize(e) {
          let { requireAllSignatures: t, verifySignatures: n } = Object.assign(
              { requireAllSignatures: !0, verifySignatures: !0 },
              e
            ),
            s = this.serializeMessage();
          if (n) {
            let o = this._getMessageSignednessErrors(s, t);
            if (o) {
              let i = "Signature verification failed.";
              throw (
                (o.invalid &&
                  (i += `
Invalid signature for public key${
                    o.invalid.length === 1 ? "" : "(s)"
                  } [\`${o.invalid.map((c) => c.toBase58()).join("`, `")}\`].`),
                o.missing &&
                  (i += `
Missing signature for public key${
                    o.missing.length === 1 ? "" : "(s)"
                  } [\`${o.missing.map((c) => c.toBase58()).join("`, `")}\`].`),
                new Error(i))
              );
            }
          }
          return this._serialize(s);
        }
        _serialize(e) {
          let { signatures: t } = this,
            n = [];
          Xe(n, t.length);
          let s = n.length + t.length * 64 + e.length,
            o = $.Buffer.alloc(s);
          return (
            ie(t.length < 256),
            $.Buffer.from(n).copy(o, 0),
            t.forEach(({ signature: i }, c) => {
              i !== null &&
                (ie(i.length === 64, "signature has invalid length"),
                $.Buffer.from(i).copy(o, n.length + c * 64));
            }),
            e.copy(o, n.length + t.length * 64),
            ie(o.length <= Tt, `Transaction too large: ${o.length} > ${Tt}`),
            o
          );
        }
        get keys() {
          return (
            ie(this.instructions.length === 1),
            this.instructions[0].keys.map((e) => e.pubkey)
          );
        }
        get programId() {
          return (
            ie(this.instructions.length === 1), this.instructions[0].programId
          );
        }
        get data() {
          return ie(this.instructions.length === 1), this.instructions[0].data;
        }
        static from(e) {
          let t = [...e],
            n = He(t),
            s = [];
          for (let o = 0; o < n; o++) {
            let i = Ge(t, 0, zn);
            s.push(Re.default.encode($.Buffer.from(i)));
          }
          return r.populate(lt.from(t), s);
        }
        static populate(e, t = []) {
          let n = new r();
          return (
            (n.recentBlockhash = e.recentBlockhash),
            e.header.numRequiredSignatures > 0 &&
              (n.feePayer = e.accountKeys[0]),
            t.forEach((s, o) => {
              let i = {
                signature:
                  s == Re.default.encode(ju) ? null : Re.default.decode(s),
                publicKey: e.accountKeys[o],
              };
              n.signatures.push(i);
            }),
            e.instructions.forEach((s) => {
              let o = s.accounts.map((i) => {
                let c = e.accountKeys[i];
                return {
                  pubkey: c,
                  isSigner:
                    n.signatures.some(
                      (a) => a.publicKey.toString() === c.toString()
                    ) || e.isAccountSigner(i),
                  isWritable: e.isAccountWritable(i),
                };
              });
              n.instructions.push(
                new fe({
                  keys: o,
                  programId: e.accountKeys[s.programIdIndex],
                  data: Re.default.decode(s.data),
                })
              );
            }),
            (n._message = e),
            (n._json = n.toJSON()),
            n
          );
        }
      }),
      (so = class r {
        constructor(e) {
          (this.payerKey = void 0),
            (this.instructions = void 0),
            (this.recentBlockhash = void 0),
            (this.payerKey = e.payerKey),
            (this.instructions = e.instructions),
            (this.recentBlockhash = e.recentBlockhash);
        }
        static decompile(e, t) {
          let { header: n, compiledInstructions: s, recentBlockhash: o } = e,
            {
              numRequiredSignatures: i,
              numReadonlySignedAccounts: c,
              numReadonlyUnsignedAccounts: a,
            } = n,
            u = i - c;
          ie(u > 0, "Message header is invalid");
          let d = e.staticAccountKeys.length - i - a;
          ie(d >= 0, "Message header is invalid");
          let g = e.getAccountKeys(t),
            y = g.get(0);
          if (y === void 0)
            throw new Error(
              "Failed to decompile message because no account keys were found"
            );
          let l = [];
          for (let h of s) {
            let m = [];
            for (let w of h.accountKeyIndexes) {
              let R = g.get(w);
              if (R === void 0)
                throw new Error(
                  `Failed to find key for account key index ${w}`
                );
              let x = w < i,
                U;
              x
                ? (U = w < u)
                : w < g.staticAccountKeys.length
                ? (U = w - i < d)
                : (U =
                    w - g.staticAccountKeys.length <
                    g.accountKeysFromLookups.writable.length),
                m.push({
                  pubkey: R,
                  isSigner: w < n.numRequiredSignatures,
                  isWritable: U,
                });
            }
            let k = g.get(h.programIdIndex);
            if (k === void 0)
              throw new Error(
                `Failed to find program id for program id index ${h.programIdIndex}`
              );
            l.push(new fe({ programId: k, data: X(h.data), keys: m }));
          }
          return new r({ payerKey: y, instructions: l, recentBlockhash: o });
        }
        compileToLegacyMessage() {
          return lt.compile({
            payerKey: this.payerKey,
            recentBlockhash: this.recentBlockhash,
            instructions: this.instructions,
          });
        }
        compileToV0Message(e) {
          return fn.compile({
            payerKey: this.payerKey,
            recentBlockhash: this.recentBlockhash,
            instructions: this.instructions,
            addressLookupTableAccounts: e,
          });
        }
      }),
      (oo = class r {
        get version() {
          return this.message.version;
        }
        constructor(e, t) {
          if (
            ((this.signatures = void 0), (this.message = void 0), t !== void 0)
          )
            ie(
              t.length === e.header.numRequiredSignatures,
              "Expected signatures length to be equal to the number of required signatures"
            ),
              (this.signatures = t);
          else {
            let n = [];
            for (let s = 0; s < e.header.numRequiredSignatures; s++)
              n.push(new Uint8Array(zn));
            this.signatures = n;
          }
          this.message = e;
        }
        serialize() {
          let e = this.message.serialize(),
            t = Array();
          Xe(t, this.signatures.length);
          let n = f.struct([
              f.blob(t.length, "encodedSignaturesLength"),
              f.seq(Du(), this.signatures.length, "signatures"),
              f.blob(e.length, "serializedMessage"),
            ]),
            s = new Uint8Array(2048),
            o = n.encode(
              {
                encodedSignaturesLength: new Uint8Array(t),
                signatures: this.signatures,
                serializedMessage: e,
              },
              s
            );
          return s.slice(0, o);
        }
        static deserialize(e) {
          let t = [...e],
            n = [],
            s = He(t);
          for (let i = 0; i < s; i++) n.push(new Uint8Array(Ge(t, 0, zn)));
          let o = Io.deserialize(new Uint8Array(t));
          return new r(o, n);
        }
        sign(e) {
          let t = this.message.serialize(),
            n = this.message.staticAccountKeys.slice(
              0,
              this.message.header.numRequiredSignatures
            );
          for (let s of e) {
            let o = n.findIndex((i) => i.equals(s.publicKey));
            ie(
              o >= 0,
              `Cannot sign with non signer key ${s.publicKey.toBase58()}`
            ),
              (this.signatures[o] = Eo(t, s.secretKey));
          }
        }
        addSignature(e, t) {
          ie(t.byteLength === 64, "Signature must be 64 bytes long");
          let s = this.message.staticAccountKeys
            .slice(0, this.message.header.numRequiredSignatures)
            .findIndex((o) => o.equals(e));
          ie(
            s >= 0,
            `Can not add signature; \`${e.toBase58()}\` is not required to sign this transaction`
          ),
            (this.signatures[s] = t);
        }
      }),
      (Hu = 160),
      (Gu = 64),
      (Yu = Hu / Gu),
      (Oa = 1e3 / Yu),
      (it = new T("SysvarC1ock11111111111111111111111111111111")),
      (Zu = new T("SysvarEpochSchedu1e111111111111111111111111")),
      (Xu = new T("Sysvar1nstructions1111111111111111111111111")),
      (zr = new T("SysvarRecentB1ockHashes11111111111111111111")),
      (ln = new T("SysvarRent111111111111111111111111111111111")),
      (Ju = new T("SysvarRewards111111111111111111111111111111")),
      (Qu = new T("SysvarS1otHashes111111111111111111111111111")),
      (ef = new T("SysvarS1otHistory11111111111111111111111111")),
      (Kr = new T("SysvarStakeHistory1111111111111111111111111")),
      (Ft = class extends Error {
        constructor({
          action: e,
          signature: t,
          transactionMessage: n,
          logs: s,
        }) {
          let o = s
              ? `Logs: 
${JSON.stringify(s.slice(-10), null, 2)}. `
              : "",
            i =
              "\nCatch the `SendTransactionError` and call `getLogs()` on it for full details.",
            c;
          switch (e) {
            case "send":
              c =
                `Transaction ${t} resulted in an error. 
${n}. ` +
                o +
                i;
              break;
            case "simulate":
              c =
                `Simulation failed. 
Message: ${n}. 
` +
                o +
                i;
              break;
            default:
              c = `Unknown action '${((a) => a)(e)}'`;
          }
          super(c),
            (this.signature = void 0),
            (this.transactionMessage = void 0),
            (this.transactionLogs = void 0),
            (this.signature = t),
            (this.transactionMessage = n),
            (this.transactionLogs = s || void 0);
        }
        get transactionError() {
          return {
            message: this.transactionMessage,
            logs: Array.isArray(this.transactionLogs)
              ? this.transactionLogs
              : void 0,
          };
        }
        get logs() {
          let e = this.transactionLogs;
          if (!(e != null && typeof e == "object" && "then" in e)) return e;
        }
        getLogs(e) {
          return E(this, null, function* () {
            return (
              Array.isArray(this.transactionLogs) ||
                (this.transactionLogs = new Promise((t, n) => {
                  e.getTransaction(this.signature)
                    .then((s) => {
                      if (s && s.meta && s.meta.logMessages) {
                        let o = s.meta.logMessages;
                        (this.transactionLogs = o), t(o);
                      } else n(new Error("Log messages not found"));
                    })
                    .catch(n);
                })),
              yield this.transactionLogs
            );
          });
        }
      }),
      (tf = {
        JSON_RPC_SERVER_ERROR_BLOCK_CLEANED_UP: -32001,
        JSON_RPC_SERVER_ERROR_SEND_TRANSACTION_PREFLIGHT_FAILURE: -32002,
        JSON_RPC_SERVER_ERROR_TRANSACTION_SIGNATURE_VERIFICATION_FAILURE:
          -32003,
        JSON_RPC_SERVER_ERROR_BLOCK_NOT_AVAILABLE: -32004,
        JSON_RPC_SERVER_ERROR_NODE_UNHEALTHY: -32005,
        JSON_RPC_SERVER_ERROR_TRANSACTION_PRECOMPILE_VERIFICATION_FAILURE:
          -32006,
        JSON_RPC_SERVER_ERROR_SLOT_SKIPPED: -32007,
        JSON_RPC_SERVER_ERROR_NO_SNAPSHOT: -32008,
        JSON_RPC_SERVER_ERROR_LONG_TERM_STORAGE_SLOT_SKIPPED: -32009,
        JSON_RPC_SERVER_ERROR_KEY_EXCLUDED_FROM_SECONDARY_INDEX: -32010,
        JSON_RPC_SERVER_ERROR_TRANSACTION_HISTORY_NOT_AVAILABLE: -32011,
        JSON_RPC_SCAN_ERROR: -32012,
        JSON_RPC_SERVER_ERROR_TRANSACTION_SIGNATURE_LEN_MISMATCH: -32013,
        JSON_RPC_SERVER_ERROR_BLOCK_STATUS_NOT_AVAILABLE_YET: -32014,
        JSON_RPC_SERVER_ERROR_UNSUPPORTED_TRANSACTION_VERSION: -32015,
        JSON_RPC_SERVER_ERROR_MIN_CONTEXT_SLOT_NOT_REACHED: -32016,
      }),
      (z = class extends Error {
        constructor({ code: e, message: t, data: n }, s) {
          super(s != null ? `${s}: ${t}` : t),
            (this.code = void 0),
            (this.data = void 0),
            (this.code = e),
            (this.data = n),
            (this.name = "SolanaJSONRPCError");
        }
      });
    (Na = f.nu64("lamportsPerSignature")),
      (Ua = f.struct([
        f.u32("version"),
        f.u32("state"),
        Q("authorizedPubkey"),
        Q("nonce"),
        f.struct([Na], "feeCalculator"),
      ])),
      (ao = Ua.span),
      (Dr = class r {
        constructor(e) {
          (this.authorizedPubkey = void 0),
            (this.nonce = void 0),
            (this.feeCalculator = void 0),
            (this.authorizedPubkey = e.authorizedPubkey),
            (this.nonce = e.nonce),
            (this.feeCalculator = e.feeCalculator);
        }
        static fromAccountData(e) {
          let t = Ua.decode(X(e), 0);
          return new r({
            authorizedPubkey: new T(t.authorizedPubkey),
            nonce: new T(t.nonce).toString(),
            feeCalculator: t.feeCalculator,
          });
        }
      }),
      (nf = (r) => {
        let e = r.decode.bind(r),
          t = r.encode.bind(r);
        return { decode: e, encode: t };
      }),
      (rf = (r) => (e) => {
        let t = (0, Aa.blob)(r, e),
          { encode: n, decode: s } = nf(t),
          o = t;
        return (
          (o.decode = (i, c) => {
            let a = s(i, c);
            return (0, $n.toBigIntLE)($.Buffer.from(a));
          }),
          (o.encode = (i, c, a) => {
            let u = (0, $n.toBufferLE)(i, r);
            return n(u, c, a);
          }),
          o
        );
      }),
      (dn = rf(8)),
      (co = class {
        constructor() {}
        static decodeInstructionType(e) {
          this.checkProgramId(e.programId);
          let n = f.u32("instruction").decode(e.data),
            s;
          for (let [o, i] of Object.entries(pe))
            if (i.index == n) {
              s = o;
              break;
            }
          if (!s)
            throw new Error(
              "Instruction type incorrect; not a SystemInstruction"
            );
          return s;
        }
        static decodeCreateAccount(e) {
          this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 2);
          let { lamports: t, space: n, programId: s } = ce(pe.Create, e.data);
          return {
            fromPubkey: e.keys[0].pubkey,
            newAccountPubkey: e.keys[1].pubkey,
            lamports: t,
            space: n,
            programId: new T(s),
          };
        }
        static decodeTransfer(e) {
          this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 2);
          let { lamports: t } = ce(pe.Transfer, e.data);
          return {
            fromPubkey: e.keys[0].pubkey,
            toPubkey: e.keys[1].pubkey,
            lamports: t,
          };
        }
        static decodeTransferWithSeed(e) {
          this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 3);
          let {
            lamports: t,
            seed: n,
            programId: s,
          } = ce(pe.TransferWithSeed, e.data);
          return {
            fromPubkey: e.keys[0].pubkey,
            basePubkey: e.keys[1].pubkey,
            toPubkey: e.keys[2].pubkey,
            lamports: t,
            seed: n,
            programId: new T(s),
          };
        }
        static decodeAllocate(e) {
          this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 1);
          let { space: t } = ce(pe.Allocate, e.data);
          return { accountPubkey: e.keys[0].pubkey, space: t };
        }
        static decodeAllocateWithSeed(e) {
          this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 1);
          let {
            base: t,
            seed: n,
            space: s,
            programId: o,
          } = ce(pe.AllocateWithSeed, e.data);
          return {
            accountPubkey: e.keys[0].pubkey,
            basePubkey: new T(t),
            seed: n,
            space: s,
            programId: new T(o),
          };
        }
        static decodeAssign(e) {
          this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 1);
          let { programId: t } = ce(pe.Assign, e.data);
          return { accountPubkey: e.keys[0].pubkey, programId: new T(t) };
        }
        static decodeAssignWithSeed(e) {
          this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 1);
          let {
            base: t,
            seed: n,
            programId: s,
          } = ce(pe.AssignWithSeed, e.data);
          return {
            accountPubkey: e.keys[0].pubkey,
            basePubkey: new T(t),
            seed: n,
            programId: new T(s),
          };
        }
        static decodeCreateWithSeed(e) {
          this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 2);
          let {
            base: t,
            seed: n,
            lamports: s,
            space: o,
            programId: i,
          } = ce(pe.CreateWithSeed, e.data);
          return {
            fromPubkey: e.keys[0].pubkey,
            newAccountPubkey: e.keys[1].pubkey,
            basePubkey: new T(t),
            seed: n,
            lamports: s,
            space: o,
            programId: new T(i),
          };
        }
        static decodeNonceInitialize(e) {
          this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 3);
          let { authorized: t } = ce(pe.InitializeNonceAccount, e.data);
          return { noncePubkey: e.keys[0].pubkey, authorizedPubkey: new T(t) };
        }
        static decodeNonceAdvance(e) {
          return (
            this.checkProgramId(e.programId),
            this.checkKeyLength(e.keys, 3),
            ce(pe.AdvanceNonceAccount, e.data),
            {
              noncePubkey: e.keys[0].pubkey,
              authorizedPubkey: e.keys[2].pubkey,
            }
          );
        }
        static decodeNonceWithdraw(e) {
          this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 5);
          let { lamports: t } = ce(pe.WithdrawNonceAccount, e.data);
          return {
            noncePubkey: e.keys[0].pubkey,
            toPubkey: e.keys[1].pubkey,
            authorizedPubkey: e.keys[4].pubkey,
            lamports: t,
          };
        }
        static decodeNonceAuthorize(e) {
          this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 2);
          let { authorized: t } = ce(pe.AuthorizeNonceAccount, e.data);
          return {
            noncePubkey: e.keys[0].pubkey,
            authorizedPubkey: e.keys[1].pubkey,
            newAuthorizedPubkey: new T(t),
          };
        }
        static checkProgramId(e) {
          if (!e.equals(Te.programId))
            throw new Error(
              "invalid instruction; programId is not SystemProgram"
            );
        }
        static checkKeyLength(e, t) {
          if (e.length < t)
            throw new Error(
              `invalid instruction; found ${e.length} keys, expected at least ${t}`
            );
        }
      }),
      (pe = Object.freeze({
        Create: {
          index: 0,
          layout: f.struct([
            f.u32("instruction"),
            f.ns64("lamports"),
            f.ns64("space"),
            Q("programId"),
          ]),
        },
        Assign: {
          index: 1,
          layout: f.struct([f.u32("instruction"), Q("programId")]),
        },
        Transfer: {
          index: 2,
          layout: f.struct([f.u32("instruction"), dn("lamports")]),
        },
        CreateWithSeed: {
          index: 3,
          layout: f.struct([
            f.u32("instruction"),
            Q("base"),
            Vt("seed"),
            f.ns64("lamports"),
            f.ns64("space"),
            Q("programId"),
          ]),
        },
        AdvanceNonceAccount: {
          index: 4,
          layout: f.struct([f.u32("instruction")]),
        },
        WithdrawNonceAccount: {
          index: 5,
          layout: f.struct([f.u32("instruction"), f.ns64("lamports")]),
        },
        InitializeNonceAccount: {
          index: 6,
          layout: f.struct([f.u32("instruction"), Q("authorized")]),
        },
        AuthorizeNonceAccount: {
          index: 7,
          layout: f.struct([f.u32("instruction"), Q("authorized")]),
        },
        Allocate: {
          index: 8,
          layout: f.struct([f.u32("instruction"), f.ns64("space")]),
        },
        AllocateWithSeed: {
          index: 9,
          layout: f.struct([
            f.u32("instruction"),
            Q("base"),
            Vt("seed"),
            f.ns64("space"),
            Q("programId"),
          ]),
        },
        AssignWithSeed: {
          index: 10,
          layout: f.struct([
            f.u32("instruction"),
            Q("base"),
            Vt("seed"),
            Q("programId"),
          ]),
        },
        TransferWithSeed: {
          index: 11,
          layout: f.struct([
            f.u32("instruction"),
            dn("lamports"),
            Vt("seed"),
            Q("programId"),
          ]),
        },
        UpgradeNonceAccount: {
          index: 12,
          layout: f.struct([f.u32("instruction")]),
        },
      })),
      (Te = class r {
        constructor() {}
        static createAccount(e) {
          let t = pe.Create,
            n = re(t, {
              lamports: e.lamports,
              space: e.space,
              programId: X(e.programId.toBuffer()),
            });
          return new fe({
            keys: [
              { pubkey: e.fromPubkey, isSigner: !0, isWritable: !0 },
              { pubkey: e.newAccountPubkey, isSigner: !0, isWritable: !0 },
            ],
            programId: this.programId,
            data: n,
          });
        }
        static transfer(e) {
          let t, n;
          if ("basePubkey" in e) {
            let s = pe.TransferWithSeed;
            (t = re(s, {
              lamports: BigInt(e.lamports),
              seed: e.seed,
              programId: X(e.programId.toBuffer()),
            })),
              (n = [
                { pubkey: e.fromPubkey, isSigner: !1, isWritable: !0 },
                { pubkey: e.basePubkey, isSigner: !0, isWritable: !1 },
                { pubkey: e.toPubkey, isSigner: !1, isWritable: !0 },
              ]);
          } else {
            let s = pe.Transfer;
            (t = re(s, { lamports: BigInt(e.lamports) })),
              (n = [
                { pubkey: e.fromPubkey, isSigner: !0, isWritable: !0 },
                { pubkey: e.toPubkey, isSigner: !1, isWritable: !0 },
              ]);
          }
          return new fe({ keys: n, programId: this.programId, data: t });
        }
        static assign(e) {
          let t, n;
          if ("basePubkey" in e) {
            let s = pe.AssignWithSeed;
            (t = re(s, {
              base: X(e.basePubkey.toBuffer()),
              seed: e.seed,
              programId: X(e.programId.toBuffer()),
            })),
              (n = [
                { pubkey: e.accountPubkey, isSigner: !1, isWritable: !0 },
                { pubkey: e.basePubkey, isSigner: !0, isWritable: !1 },
              ]);
          } else {
            let s = pe.Assign;
            (t = re(s, { programId: X(e.programId.toBuffer()) })),
              (n = [{ pubkey: e.accountPubkey, isSigner: !0, isWritable: !0 }]);
          }
          return new fe({ keys: n, programId: this.programId, data: t });
        }
        static createAccountWithSeed(e) {
          let t = pe.CreateWithSeed,
            n = re(t, {
              base: X(e.basePubkey.toBuffer()),
              seed: e.seed,
              lamports: e.lamports,
              space: e.space,
              programId: X(e.programId.toBuffer()),
            }),
            s = [
              { pubkey: e.fromPubkey, isSigner: !0, isWritable: !0 },
              { pubkey: e.newAccountPubkey, isSigner: !1, isWritable: !0 },
            ];
          return (
            e.basePubkey.equals(e.fromPubkey) ||
              s.push({ pubkey: e.basePubkey, isSigner: !0, isWritable: !1 }),
            new fe({ keys: s, programId: this.programId, data: n })
          );
        }
        static createNonceAccount(e) {
          let t = new ue();
          "basePubkey" in e && "seed" in e
            ? t.add(
                r.createAccountWithSeed({
                  fromPubkey: e.fromPubkey,
                  newAccountPubkey: e.noncePubkey,
                  basePubkey: e.basePubkey,
                  seed: e.seed,
                  lamports: e.lamports,
                  space: ao,
                  programId: this.programId,
                })
              )
            : t.add(
                r.createAccount({
                  fromPubkey: e.fromPubkey,
                  newAccountPubkey: e.noncePubkey,
                  lamports: e.lamports,
                  space: ao,
                  programId: this.programId,
                })
              );
          let n = {
            noncePubkey: e.noncePubkey,
            authorizedPubkey: e.authorizedPubkey,
          };
          return t.add(this.nonceInitialize(n)), t;
        }
        static nonceInitialize(e) {
          let t = pe.InitializeNonceAccount,
            n = re(t, { authorized: X(e.authorizedPubkey.toBuffer()) }),
            s = {
              keys: [
                { pubkey: e.noncePubkey, isSigner: !1, isWritable: !0 },
                { pubkey: zr, isSigner: !1, isWritable: !1 },
                { pubkey: ln, isSigner: !1, isWritable: !1 },
              ],
              programId: this.programId,
              data: n,
            };
          return new fe(s);
        }
        static nonceAdvance(e) {
          let t = pe.AdvanceNonceAccount,
            n = re(t),
            s = {
              keys: [
                { pubkey: e.noncePubkey, isSigner: !1, isWritable: !0 },
                { pubkey: zr, isSigner: !1, isWritable: !1 },
                { pubkey: e.authorizedPubkey, isSigner: !0, isWritable: !1 },
              ],
              programId: this.programId,
              data: n,
            };
          return new fe(s);
        }
        static nonceWithdraw(e) {
          let t = pe.WithdrawNonceAccount,
            n = re(t, { lamports: e.lamports });
          return new fe({
            keys: [
              { pubkey: e.noncePubkey, isSigner: !1, isWritable: !0 },
              { pubkey: e.toPubkey, isSigner: !1, isWritable: !0 },
              { pubkey: zr, isSigner: !1, isWritable: !1 },
              { pubkey: ln, isSigner: !1, isWritable: !1 },
              { pubkey: e.authorizedPubkey, isSigner: !0, isWritable: !1 },
            ],
            programId: this.programId,
            data: n,
          });
        }
        static nonceAuthorize(e) {
          let t = pe.AuthorizeNonceAccount,
            n = re(t, { authorized: X(e.newAuthorizedPubkey.toBuffer()) });
          return new fe({
            keys: [
              { pubkey: e.noncePubkey, isSigner: !1, isWritable: !0 },
              { pubkey: e.authorizedPubkey, isSigner: !0, isWritable: !1 },
            ],
            programId: this.programId,
            data: n,
          });
        }
        static allocate(e) {
          let t, n;
          if ("basePubkey" in e) {
            let s = pe.AllocateWithSeed;
            (t = re(s, {
              base: X(e.basePubkey.toBuffer()),
              seed: e.seed,
              space: e.space,
              programId: X(e.programId.toBuffer()),
            })),
              (n = [
                { pubkey: e.accountPubkey, isSigner: !1, isWritable: !0 },
                { pubkey: e.basePubkey, isSigner: !0, isWritable: !1 },
              ]);
          } else {
            let s = pe.Allocate;
            (t = re(s, { space: e.space })),
              (n = [{ pubkey: e.accountPubkey, isSigner: !0, isWritable: !0 }]);
          }
          return new fe({ keys: n, programId: this.programId, data: t });
        }
      });
    Te.programId = new T("11111111111111111111111111111111");
    (sf = Tt - 300),
      (uo = (() => {
        class r {
          constructor() {}
          static getMinNumSignatures(t) {
            return 2 * (Math.ceil(t / r.chunkSize) + 1 + 1);
          }
          static load(t, n, s, o, i) {
            return E(this, null, function* () {
              {
                let y = yield t.getMinimumBalanceForRentExemption(i.length),
                  l = yield t.getAccountInfo(s.publicKey, "confirmed"),
                  h = null;
                if (l !== null) {
                  if (l.executable)
                    return (
                      console.error(
                        "Program load failed, account is already executable"
                      ),
                      !1
                    );
                  l.data.length !== i.length &&
                    ((h = h || new ue()),
                    h.add(
                      Te.allocate({
                        accountPubkey: s.publicKey,
                        space: i.length,
                      })
                    )),
                    l.owner.equals(o) ||
                      ((h = h || new ue()),
                      h.add(
                        Te.assign({ accountPubkey: s.publicKey, programId: o })
                      )),
                    l.lamports < y &&
                      ((h = h || new ue()),
                      h.add(
                        Te.transfer({
                          fromPubkey: n.publicKey,
                          toPubkey: s.publicKey,
                          lamports: y - l.lamports,
                        })
                      ));
                } else h = new ue().add(Te.createAccount({ fromPubkey: n.publicKey, newAccountPubkey: s.publicKey, lamports: y > 0 ? y : 1, space: i.length, programId: o }));
                h !== null &&
                  (yield io(t, h, [n, s], { commitment: "confirmed" }));
              }
              let c = f.struct([
                  f.u32("instruction"),
                  f.u32("offset"),
                  f.u32("bytesLength"),
                  f.u32("bytesLengthPadding"),
                  f.seq(f.u8("byte"), f.offset(f.u32(), -8), "bytes"),
                ]),
                a = r.chunkSize,
                u = 0,
                d = i,
                g = [];
              for (; d.length > 0; ) {
                let y = d.slice(0, a),
                  l = $.Buffer.alloc(a + 16);
                c.encode(
                  {
                    instruction: 0,
                    offset: u,
                    bytes: y,
                    bytesLength: 0,
                    bytesLengthPadding: 0,
                  },
                  l
                );
                let h = new ue().add({
                  keys: [{ pubkey: s.publicKey, isSigner: !0, isWritable: !0 }],
                  programId: o,
                  data: l,
                });
                g.push(io(t, h, [n, s], { commitment: "confirmed" })),
                  t._rpcEndpoint.includes("solana.com") && (yield Mt(1e3 / 4)),
                  (u += a),
                  (d = d.slice(a));
              }
              yield Promise.all(g);
              {
                let y = f.struct([f.u32("instruction")]),
                  l = $.Buffer.alloc(y.span);
                y.encode({ instruction: 1 }, l);
                let h = new ue().add({
                    keys: [
                      { pubkey: s.publicKey, isSigner: !0, isWritable: !0 },
                      { pubkey: ln, isSigner: !1, isWritable: !1 },
                    ],
                    programId: o,
                    data: l,
                  }),
                  m = "processed",
                  k = yield t.sendTransaction(h, [n, s], {
                    preflightCommitment: m,
                  }),
                  { context: w, value: R } = yield t.confirmTransaction(
                    {
                      signature: k,
                      lastValidBlockHeight: h.lastValidBlockHeight,
                      blockhash: h.recentBlockhash,
                    },
                    m
                  );
                if (R.err)
                  throw new Error(
                    `Transaction ${k} failed (${JSON.stringify(R)})`
                  );
                for (;;) {
                  try {
                    if ((yield t.getSlot({ commitment: m })) > w.slot) break;
                  } catch {}
                  yield new Promise((x) => setTimeout(x, Math.round(Oa / 2)));
                }
              }
              return !0;
            });
          }
        }
        return (r.chunkSize = sf), r;
      })()),
      (of = new T("BPFLoader2111111111111111111111111111111111")),
      (fo = class {
        static getMinNumSignatures(e) {
          return uo.getMinNumSignatures(e);
        }
        static load(e, t, n, s, o) {
          return uo.load(e, t, n, o, s);
        }
      });
    (uf = cf()), (ya = af(uf)), (On = 32);
    (Mr = class {
      constructor(e, t, n, s, o) {
        (this.slotsPerEpoch = void 0),
          (this.leaderScheduleSlotOffset = void 0),
          (this.warmup = void 0),
          (this.firstNormalEpoch = void 0),
          (this.firstNormalSlot = void 0),
          (this.slotsPerEpoch = e),
          (this.leaderScheduleSlotOffset = t),
          (this.warmup = n),
          (this.firstNormalEpoch = s),
          (this.firstNormalSlot = o);
      }
      getEpoch(e) {
        return this.getEpochAndSlotIndex(e)[0];
      }
      getEpochAndSlotIndex(e) {
        if (e < this.firstNormalSlot) {
          let t = Zs(ff(e + On + 1)) - Zs(On) - 1,
            n = this.getSlotsInEpoch(t),
            s = e - (n - On);
          return [t, s];
        } else {
          let t = e - this.firstNormalSlot,
            n = Math.floor(t / this.slotsPerEpoch),
            s = this.firstNormalEpoch + n,
            o = t % this.slotsPerEpoch;
          return [s, o];
        }
      }
      getFirstSlotInEpoch(e) {
        return e <= this.firstNormalEpoch
          ? (Math.pow(2, e) - 1) * On
          : (e - this.firstNormalEpoch) * this.slotsPerEpoch +
              this.firstNormalSlot;
      }
      getLastSlotInEpoch(e) {
        return this.getFirstSlotInEpoch(e) + this.getSlotsInEpoch(e) - 1;
      }
      getSlotsInEpoch(e) {
        return e < this.firstNormalEpoch
          ? Math.pow(2, e + Zs(On))
          : this.slotsPerEpoch;
      }
    }),
      (lf = globalThis.fetch),
      (lo = class extends Ji {
        constructor(e, t, n) {
          let s = (o) => {
            let i = Xi(
              o,
              F(
                {
                  autoconnect: !0,
                  max_reconnects: 5,
                  reconnect: !0,
                  reconnect_interval: 1e3,
                },
                t
              )
            );
            return (
              "socket" in i
                ? (this.underlyingSocket = i.socket)
                : (this.underlyingSocket = i),
              i
            );
          };
          super(s, e, t, n), (this.underlyingSocket = void 0);
        }
        call(...e) {
          let t = this.underlyingSocket?.readyState;
          return t === 1
            ? super.call(...e)
            : Promise.reject(
                new Error(
                  "Tried to call a JSON-RPC method `" +
                    e[0] +
                    "` but the socket was not `CONNECTING` or `OPEN` (`readyState` was " +
                    t +
                    ")"
                )
              );
        }
        notify(...e) {
          let t = this.underlyingSocket?.readyState;
          return t === 1
            ? super.notify(...e)
            : Promise.reject(
                new Error(
                  "Tried to send a JSON-RPC notification `" +
                    e[0] +
                    "` but the socket was not `CONNECTING` or `OPEN` (`readyState` was " +
                    t +
                    ")"
                )
              );
        }
      });
    (pa = 56),
      (Wn = class {
        constructor(e) {
          (this.key = void 0),
            (this.state = void 0),
            (this.key = e.key),
            (this.state = e.state);
        }
        isActive() {
          let e = BigInt("0xffffffffffffffff");
          return this.state.deactivationSlot === e;
        }
        static deserialize(e) {
          let t = df(hf, e),
            n = e.length - pa;
          ie(n >= 0, "lookup table is invalid"),
            ie(n % 32 === 0, "lookup table is invalid");
          let s = n / 32,
            { addresses: o } = f
              .struct([f.seq(Q(), s, "addresses")])
              .decode(e.slice(pa));
          return {
            deactivationSlot: t.deactivationSlot,
            lastExtendedSlot: t.lastExtendedSlot,
            lastExtendedSlotStartIndex: t.lastExtendedStartIndex,
            authority:
              t.authority.length !== 0 ? new T(t.authority[0]) : void 0,
            addresses: o.map((i) => new T(i)),
          };
        }
      }),
      (hf = {
        index: 1,
        layout: f.struct([
          f.u32("typeIndex"),
          dn("deactivationSlot"),
          f.nu64("lastExtendedSlot"),
          f.u8("lastExtendedStartIndex"),
          f.u8(),
          f.seq(Q(), f.offset(f.u8(), -1), "authority"),
        ]),
      }),
      (yf = /^[^:]+:\/\/([^:[]+|\[[^\]]+\])(:\d+)?(.*)/i);
    (we = an(vr(T), A(), (r) => new T(r))),
      (za = _r([A(), be("base64")])),
      (vo = an(vr($.Buffer), za, (r) => $.Buffer.from(r[0], "base64"))),
      (Ka = 30 * 1e3);
    mf = qa(Dt());
    (bf = v({
      foundation: p(),
      foundationTerm: p(),
      initial: p(),
      taper: p(),
      terminal: p(),
    })),
      (wf = Z(
        C(
          O(
            v({
              epoch: p(),
              effectiveSlot: p(),
              amount: p(),
              postBalance: p(),
              commission: D(O(p())),
            })
          )
        )
      )),
      (kf = C(v({ slot: p(), prioritizationFee: p() }))),
      (Sf = v({ total: p(), validator: p(), foundation: p(), epoch: p() })),
      (Bf = v({
        epoch: p(),
        slotIndex: p(),
        slotsInEpoch: p(),
        absoluteSlot: p(),
        blockHeight: D(p()),
        transactionCount: D(p()),
      })),
      (Ef = v({
        slotsPerEpoch: p(),
        leaderScheduleSlotOffset: p(),
        warmup: nt(),
        firstNormalEpoch: p(),
        firstNormalSlot: p(),
      })),
      (If = Cs(A(), C(p()))),
      (Ht = O(Ne([v({}), A()]))),
      (vf = v({ err: Ht })),
      (_f = be("receivedSignature")),
      (xf = v({ "solana-core": A(), "feature-set": D(p()) })),
      (Af = v({ program: A(), programId: we, parsed: Dt() })),
      (Rf = v({ programId: we, accounts: C(we), data: A() })),
      (ma = Ie(
        v({
          err: O(Ne([v({}), A()])),
          logs: O(C(A())),
          accounts: D(
            O(
              C(
                O(
                  v({
                    executable: nt(),
                    owner: A(),
                    lamports: p(),
                    data: C(A()),
                    rentEpoch: D(p()),
                  })
                )
              )
            )
          ),
          unitsConsumed: D(p()),
          returnData: D(
            O(v({ programId: A(), data: _r([A(), be("base64")]) }))
          ),
          innerInstructions: D(
            O(C(v({ index: p(), instructions: C(Ne([Af, Rf])) })))
          ),
        })
      )),
      (Lf = Ie(
        v({
          byIdentity: Cs(A(), C(p())),
          range: v({ firstSlot: p(), lastSlot: p() }),
        })
      ));
    (Of = Z(bf)),
      (Nf = Z(Sf)),
      (Uf = Z(kf)),
      (zf = Z(Bf)),
      (Kf = Z(Ef)),
      (qf = Z(If)),
      (Wf = Z(p())),
      (Df = Ie(
        v({
          total: p(),
          circulating: p(),
          nonCirculating: p(),
          nonCirculatingAccounts: C(we),
        })
      )),
      (ho = v({
        amount: A(),
        uiAmount: O(p()),
        decimals: p(),
        uiAmountString: D(A()),
      })),
      (Mf = Ie(
        C(
          v({
            address: we,
            amount: A(),
            uiAmount: O(p()),
            decimals: p(),
            uiAmountString: D(A()),
          })
        )
      )),
      (Vf = Ie(
        C(
          v({
            pubkey: we,
            account: v({
              executable: nt(),
              owner: we,
              lamports: p(),
              data: vo,
              rentEpoch: p(),
            }),
          })
        )
      )),
      (yo = v({ program: A(), parsed: Dt(), space: p() })),
      ($f = Ie(
        C(
          v({
            pubkey: we,
            account: v({
              executable: nt(),
              owner: we,
              lamports: p(),
              data: yo,
              rentEpoch: p(),
            }),
          })
        )
      )),
      (Ff = Ie(C(v({ lamports: p(), address: we })))),
      (Dn = v({
        executable: nt(),
        owner: we,
        lamports: p(),
        data: vo,
        rentEpoch: p(),
      })),
      (jf = v({ pubkey: we, account: Dn })),
      (Hf = an(Ne([vr($.Buffer), yo]), Ne([za, yo]), (r) =>
        Array.isArray(r) ? P(r, vo) : r
      )),
      (po = v({
        executable: nt(),
        owner: we,
        lamports: p(),
        data: Hf,
        rentEpoch: p(),
      })),
      (Gf = v({ pubkey: we, account: po })),
      (Yf = v({
        state: Ne([
          be("active"),
          be("inactive"),
          be("activating"),
          be("deactivating"),
        ]),
        active: p(),
        inactive: p(),
      })),
      (Zf = Z(
        C(
          v({
            signature: A(),
            slot: p(),
            err: Ht,
            memo: O(A()),
            blockTime: D(O(p())),
          })
        )
      )),
      (Xf = Z(
        C(
          v({
            signature: A(),
            slot: p(),
            err: Ht,
            memo: O(A()),
            blockTime: D(O(p())),
          })
        )
      )),
      (Jf = v({ subscription: p(), result: Zr(Dn) })),
      (Qf = v({ pubkey: we, account: Dn })),
      (el = v({ subscription: p(), result: Zr(Qf) })),
      (tl = v({ parent: p(), slot: p(), root: p() })),
      (nl = v({ subscription: p(), result: tl })),
      (rl = Ne([
        v({
          type: Ne([
            be("firstShredReceived"),
            be("completed"),
            be("optimisticConfirmation"),
            be("root"),
          ]),
          slot: p(),
          timestamp: p(),
        }),
        v({ type: be("createdBank"), parent: p(), slot: p(), timestamp: p() }),
        v({
          type: be("frozen"),
          slot: p(),
          timestamp: p(),
          stats: v({
            numTransactionEntries: p(),
            numSuccessfulTransactions: p(),
            numFailedTransactions: p(),
            maxTransactionsPerEntry: p(),
          }),
        }),
        v({ type: be("dead"), slot: p(), timestamp: p(), err: A() }),
      ])),
      (sl = v({ subscription: p(), result: rl })),
      (ol = v({ subscription: p(), result: Zr(Ne([vf, _f])) })),
      (il = v({ subscription: p(), result: p() })),
      (al = v({
        pubkey: A(),
        gossip: O(A()),
        tpu: O(A()),
        rpc: O(A()),
        version: O(A()),
      })),
      (ba = v({
        votePubkey: A(),
        nodePubkey: A(),
        activatedStake: p(),
        epochVoteAccount: nt(),
        epochCredits: C(_r([p(), p(), p()])),
        commission: p(),
        lastVote: p(),
        rootSlot: O(p()),
      })),
      (cl = Z(v({ current: C(ba), delinquent: C(ba) }))),
      (ul = Ne([be("processed"), be("confirmed"), be("finalized")])),
      (fl = v({
        slot: p(),
        confirmations: O(p()),
        err: Ht,
        confirmationStatus: D(ul),
      })),
      (ll = Ie(C(O(fl)))),
      (dl = Z(p())),
      (Wa = v({
        accountKey: we,
        writableIndexes: C(p()),
        readonlyIndexes: C(p()),
      })),
      (_o = v({
        signatures: C(A()),
        message: v({
          accountKeys: C(A()),
          header: v({
            numRequiredSignatures: p(),
            numReadonlySignedAccounts: p(),
            numReadonlyUnsignedAccounts: p(),
          }),
          instructions: C(
            v({ accounts: C(p()), data: A(), programIdIndex: p() })
          ),
          recentBlockhash: A(),
          addressTableLookups: D(C(Wa)),
        }),
      })),
      (Da = v({
        pubkey: we,
        signer: nt(),
        writable: nt(),
        source: D(Ne([be("transaction"), be("lookupTable")])),
      })),
      (Ma = v({ accountKeys: C(Da), signatures: C(A()) })),
      (Va = v({ parsed: Dt(), program: A(), programId: we })),
      ($a = v({ accounts: C(we), data: A(), programId: we })),
      (hl = Ne([$a, Va])),
      (yl = Ne([
        v({ parsed: Dt(), program: A(), programId: A() }),
        v({ accounts: C(A()), data: A(), programId: A() }),
      ])),
      (Fa = an(hl, yl, (r) => ("accounts" in r ? P(r, $a) : P(r, Va)))),
      (ja = v({
        signatures: C(A()),
        message: v({
          accountKeys: C(Da),
          instructions: C(Fa),
          recentBlockhash: A(),
          addressTableLookups: D(O(C(Wa))),
        }),
      })),
      (Vr = v({
        accountIndex: p(),
        mint: A(),
        owner: D(A()),
        programId: D(A()),
        uiTokenAmount: ho,
      })),
      (Ha = v({ writable: C(we), readonly: C(we) })),
      (Xr = v({
        err: Ht,
        fee: p(),
        innerInstructions: D(
          O(
            C(
              v({
                index: p(),
                instructions: C(
                  v({ accounts: C(p()), data: A(), programIdIndex: p() })
                ),
              })
            )
          )
        ),
        preBalances: C(p()),
        postBalances: C(p()),
        logMessages: D(O(C(A()))),
        preTokenBalances: D(O(C(Vr))),
        postTokenBalances: D(O(C(Vr))),
        loadedAddresses: D(Ha),
        computeUnitsConsumed: D(p()),
      })),
      (xo = v({
        err: Ht,
        fee: p(),
        innerInstructions: D(O(C(v({ index: p(), instructions: C(Fa) })))),
        preBalances: C(p()),
        postBalances: C(p()),
        logMessages: D(O(C(A()))),
        preTokenBalances: D(O(C(Vr))),
        postTokenBalances: D(O(C(Vr))),
        loadedAddresses: D(Ha),
        computeUnitsConsumed: D(p()),
      })),
      (gn = Ne([be(0), be("legacy")])),
      (Gt = v({
        pubkey: A(),
        lamports: p(),
        postBalance: O(p()),
        rewardType: O(A()),
        commission: D(O(p())),
      })),
      (pl = Z(
        O(
          v({
            blockhash: A(),
            previousBlockhash: A(),
            parentSlot: p(),
            transactions: C(
              v({ transaction: _o, meta: O(Xr), version: D(gn) })
            ),
            rewards: D(C(Gt)),
            blockTime: O(p()),
            blockHeight: O(p()),
          })
        )
      )),
      (gl = Z(
        O(
          v({
            blockhash: A(),
            previousBlockhash: A(),
            parentSlot: p(),
            rewards: D(C(Gt)),
            blockTime: O(p()),
            blockHeight: O(p()),
          })
        )
      )),
      (ml = Z(
        O(
          v({
            blockhash: A(),
            previousBlockhash: A(),
            parentSlot: p(),
            transactions: C(
              v({ transaction: Ma, meta: O(Xr), version: D(gn) })
            ),
            rewards: D(C(Gt)),
            blockTime: O(p()),
            blockHeight: O(p()),
          })
        )
      )),
      (bl = Z(
        O(
          v({
            blockhash: A(),
            previousBlockhash: A(),
            parentSlot: p(),
            transactions: C(
              v({ transaction: ja, meta: O(xo), version: D(gn) })
            ),
            rewards: D(C(Gt)),
            blockTime: O(p()),
            blockHeight: O(p()),
          })
        )
      )),
      (wl = Z(
        O(
          v({
            blockhash: A(),
            previousBlockhash: A(),
            parentSlot: p(),
            transactions: C(
              v({ transaction: Ma, meta: O(xo), version: D(gn) })
            ),
            rewards: D(C(Gt)),
            blockTime: O(p()),
            blockHeight: O(p()),
          })
        )
      )),
      (kl = Z(
        O(
          v({
            blockhash: A(),
            previousBlockhash: A(),
            parentSlot: p(),
            rewards: D(C(Gt)),
            blockTime: O(p()),
            blockHeight: O(p()),
          })
        )
      )),
      (Sl = Z(
        O(
          v({
            blockhash: A(),
            previousBlockhash: A(),
            parentSlot: p(),
            transactions: C(v({ transaction: _o, meta: O(Xr) })),
            rewards: D(C(Gt)),
            blockTime: O(p()),
          })
        )
      )),
      (wa = Z(
        O(
          v({
            blockhash: A(),
            previousBlockhash: A(),
            parentSlot: p(),
            signatures: C(A()),
            blockTime: O(p()),
          })
        )
      )),
      (Js = Z(
        O(
          v({
            slot: p(),
            meta: O(Xr),
            blockTime: D(O(p())),
            transaction: _o,
            version: D(gn),
          })
        )
      )),
      (Ur = Z(
        O(
          v({
            slot: p(),
            transaction: ja,
            meta: O(xo),
            blockTime: D(O(p())),
            version: D(gn),
          })
        )
      )),
      (Bl = Ie(v({ blockhash: A(), lastValidBlockHeight: p() }))),
      (El = Ie(nt())),
      (Il = v({
        slot: p(),
        numTransactions: p(),
        numSlots: p(),
        samplePeriodSecs: p(),
      })),
      (vl = Z(C(Il))),
      (_l = Ie(O(v({ feeCalculator: v({ lamportsPerSignature: p() }) })))),
      (xl = Z(A())),
      (Al = Z(A())),
      (Rl = v({ err: Ht, logs: C(A()), signature: A() })),
      (Ll = v({ result: Zr(Rl), subscription: p() })),
      (Pl = { "solana-client": "js/1.0.0-maintenance" }),
      (go = class {
        constructor(e, t) {
          (this._commitment = void 0),
            (this._confirmTransactionInitialTimeout = void 0),
            (this._rpcEndpoint = void 0),
            (this._rpcWsEndpoint = void 0),
            (this._rpcClient = void 0),
            (this._rpcRequest = void 0),
            (this._rpcBatchRequest = void 0),
            (this._rpcWebSocket = void 0),
            (this._rpcWebSocketConnected = !1),
            (this._rpcWebSocketHeartbeat = null),
            (this._rpcWebSocketIdleTimeout = null),
            (this._rpcWebSocketGeneration = 0),
            (this._disableBlockhashCaching = !1),
            (this._pollingBlockhash = !1),
            (this._blockhashInfo = {
              latestBlockhash: null,
              lastFetch: 0,
              transactionSignatures: [],
              simulatedSignatures: [],
            }),
            (this._nextClientSubscriptionId = 0),
            (this._subscriptionDisposeFunctionsByClientSubscriptionId = {}),
            (this._subscriptionHashByClientSubscriptionId = {}),
            (this._subscriptionStateChangeCallbacksByHash = {}),
            (this._subscriptionCallbacksByServerSubscriptionId = {}),
            (this._subscriptionsByHash = {}),
            (this._subscriptionsAutoDisposedByRpc = new Set()),
            (this.getBlockHeight = (() => {
              let u = {};
              return (d) =>
                E(this, null, function* () {
                  let { commitment: g, config: y } = ye(d),
                    l = this._buildArgs([], g, void 0, y),
                    h = ya(l);
                  return (
                    (u[h] =
                      u[h] ??
                      E(this, null, function* () {
                        try {
                          let m = yield this._rpcRequest("getBlockHeight", l),
                            k = P(m, Z(p()));
                          if ("error" in k)
                            throw new z(
                              k.error,
                              "failed to get block height information"
                            );
                          return k.result;
                        } finally {
                          delete u[h];
                        }
                      })),
                    yield u[h]
                  );
                });
            })());
          let n, s, o, i, c, a;
          t && typeof t == "string"
            ? (this._commitment = t)
            : t &&
              ((this._commitment = t.commitment),
              (this._confirmTransactionInitialTimeout =
                t.confirmTransactionInitialTimeout),
              (n = t.wsEndpoint),
              (s = t.httpHeaders),
              (o = t.fetch),
              (i = t.fetchMiddleware),
              (c = t.disableRetryOnRateLimit),
              (a = t.httpAgent)),
            (this._rpcEndpoint = gf(e)),
            (this._rpcWsEndpoint = n || pf(e)),
            (this._rpcClient = Pf(e, s, o, i, c, a)),
            (this._rpcRequest = Tf(this._rpcClient)),
            (this._rpcBatchRequest = Cf(this._rpcClient)),
            (this._rpcWebSocket = new lo(this._rpcWsEndpoint, {
              autoconnect: !1,
              max_reconnects: 1 / 0,
            })),
            this._rpcWebSocket.on("open", this._wsOnOpen.bind(this)),
            this._rpcWebSocket.on("error", this._wsOnError.bind(this)),
            this._rpcWebSocket.on("close", this._wsOnClose.bind(this)),
            this._rpcWebSocket.on(
              "accountNotification",
              this._wsOnAccountNotification.bind(this)
            ),
            this._rpcWebSocket.on(
              "programNotification",
              this._wsOnProgramAccountNotification.bind(this)
            ),
            this._rpcWebSocket.on(
              "slotNotification",
              this._wsOnSlotNotification.bind(this)
            ),
            this._rpcWebSocket.on(
              "slotsUpdatesNotification",
              this._wsOnSlotUpdatesNotification.bind(this)
            ),
            this._rpcWebSocket.on(
              "signatureNotification",
              this._wsOnSignatureNotification.bind(this)
            ),
            this._rpcWebSocket.on(
              "rootNotification",
              this._wsOnRootNotification.bind(this)
            ),
            this._rpcWebSocket.on(
              "logsNotification",
              this._wsOnLogsNotification.bind(this)
            );
        }
        get commitment() {
          return this._commitment;
        }
        get rpcEndpoint() {
          return this._rpcEndpoint;
        }
        getBalanceAndContext(e, t) {
          return E(this, null, function* () {
            let { commitment: n, config: s } = ye(t),
              o = this._buildArgs([e.toBase58()], n, void 0, s),
              i = yield this._rpcRequest("getBalance", o),
              c = P(i, Ie(p()));
            if ("error" in c)
              throw new z(c.error, `failed to get balance for ${e.toBase58()}`);
            return c.result;
          });
        }
        getBalance(e, t) {
          return E(this, null, function* () {
            return yield this.getBalanceAndContext(e, t)
              .then((n) => n.value)
              .catch((n) => {
                throw new Error(
                  "failed to get balance of account " + e.toBase58() + ": " + n
                );
              });
          });
        }
        getBlockTime(e) {
          return E(this, null, function* () {
            let t = yield this._rpcRequest("getBlockTime", [e]),
              n = P(t, Z(O(p())));
            if ("error" in n)
              throw new z(n.error, `failed to get block time for slot ${e}`);
            return n.result;
          });
        }
        getMinimumLedgerSlot() {
          return E(this, null, function* () {
            let e = yield this._rpcRequest("minimumLedgerSlot", []),
              t = P(e, Z(p()));
            if ("error" in t)
              throw new z(t.error, "failed to get minimum ledger slot");
            return t.result;
          });
        }
        getFirstAvailableBlock() {
          return E(this, null, function* () {
            let e = yield this._rpcRequest("getFirstAvailableBlock", []),
              t = P(e, Wf);
            if ("error" in t)
              throw new z(t.error, "failed to get first available block");
            return t.result;
          });
        }
        getSupply(e) {
          return E(this, null, function* () {
            let t = {};
            typeof e == "string"
              ? (t = { commitment: e })
              : e
              ? (t = Y(F({}, e), {
                  commitment: (e && e.commitment) || this.commitment,
                }))
              : (t = { commitment: this.commitment });
            let n = yield this._rpcRequest("getSupply", [t]),
              s = P(n, Df);
            if ("error" in s) throw new z(s.error, "failed to get supply");
            return s.result;
          });
        }
        getTokenSupply(e, t) {
          return E(this, null, function* () {
            let n = this._buildArgs([e.toBase58()], t),
              s = yield this._rpcRequest("getTokenSupply", n),
              o = P(s, Ie(ho));
            if ("error" in o)
              throw new z(o.error, "failed to get token supply");
            return o.result;
          });
        }
        getTokenAccountBalance(e, t) {
          return E(this, null, function* () {
            let n = this._buildArgs([e.toBase58()], t),
              s = yield this._rpcRequest("getTokenAccountBalance", n),
              o = P(s, Ie(ho));
            if ("error" in o)
              throw new z(o.error, "failed to get token account balance");
            return o.result;
          });
        }
        getTokenAccountsByOwner(e, t, n) {
          return E(this, null, function* () {
            let { commitment: s, config: o } = ye(n),
              i = [e.toBase58()];
            "mint" in t
              ? i.push({ mint: t.mint.toBase58() })
              : i.push({ programId: t.programId.toBase58() });
            let c = this._buildArgs(i, s, "base64", o),
              a = yield this._rpcRequest("getTokenAccountsByOwner", c),
              u = P(a, Vf);
            if ("error" in u)
              throw new z(
                u.error,
                `failed to get token accounts owned by account ${e.toBase58()}`
              );
            return u.result;
          });
        }
        getParsedTokenAccountsByOwner(e, t, n) {
          return E(this, null, function* () {
            let s = [e.toBase58()];
            "mint" in t
              ? s.push({ mint: t.mint.toBase58() })
              : s.push({ programId: t.programId.toBase58() });
            let o = this._buildArgs(s, n, "jsonParsed"),
              i = yield this._rpcRequest("getTokenAccountsByOwner", o),
              c = P(i, $f);
            if ("error" in c)
              throw new z(
                c.error,
                `failed to get token accounts owned by account ${e.toBase58()}`
              );
            return c.result;
          });
        }
        getLargestAccounts(e) {
          return E(this, null, function* () {
            let t = Y(F({}, e), {
                commitment: (e && e.commitment) || this.commitment,
              }),
              n = t.filter || t.commitment ? [t] : [],
              s = yield this._rpcRequest("getLargestAccounts", n),
              o = P(s, Ff);
            if ("error" in o)
              throw new z(o.error, "failed to get largest accounts");
            return o.result;
          });
        }
        getTokenLargestAccounts(e, t) {
          return E(this, null, function* () {
            let n = this._buildArgs([e.toBase58()], t),
              s = yield this._rpcRequest("getTokenLargestAccounts", n),
              o = P(s, Mf);
            if ("error" in o)
              throw new z(o.error, "failed to get token largest accounts");
            return o.result;
          });
        }
        getAccountInfoAndContext(e, t) {
          return E(this, null, function* () {
            let { commitment: n, config: s } = ye(t),
              o = this._buildArgs([e.toBase58()], n, "base64", s),
              i = yield this._rpcRequest("getAccountInfo", o),
              c = P(i, Ie(O(Dn)));
            if ("error" in c)
              throw new z(
                c.error,
                `failed to get info about account ${e.toBase58()}`
              );
            return c.result;
          });
        }
        getParsedAccountInfo(e, t) {
          return E(this, null, function* () {
            let { commitment: n, config: s } = ye(t),
              o = this._buildArgs([e.toBase58()], n, "jsonParsed", s),
              i = yield this._rpcRequest("getAccountInfo", o),
              c = P(i, Ie(O(po)));
            if ("error" in c)
              throw new z(
                c.error,
                `failed to get info about account ${e.toBase58()}`
              );
            return c.result;
          });
        }
        getAccountInfo(e, t) {
          return E(this, null, function* () {
            try {
              return (yield this.getAccountInfoAndContext(e, t)).value;
            } catch (n) {
              throw new Error(
                "failed to get info about account " + e.toBase58() + ": " + n
              );
            }
          });
        }
        getMultipleParsedAccounts(e, t) {
          return E(this, null, function* () {
            let { commitment: n, config: s } = ye(t),
              o = e.map((u) => u.toBase58()),
              i = this._buildArgs([o], n, "jsonParsed", s),
              c = yield this._rpcRequest("getMultipleAccounts", i),
              a = P(c, Ie(C(O(po))));
            if ("error" in a)
              throw new z(a.error, `failed to get info for accounts ${o}`);
            return a.result;
          });
        }
        getMultipleAccountsInfoAndContext(e, t) {
          return E(this, null, function* () {
            let { commitment: n, config: s } = ye(t),
              o = e.map((u) => u.toBase58()),
              i = this._buildArgs([o], n, "base64", s),
              c = yield this._rpcRequest("getMultipleAccounts", i),
              a = P(c, Ie(C(O(Dn))));
            if ("error" in a)
              throw new z(a.error, `failed to get info for accounts ${o}`);
            return a.result;
          });
        }
        getMultipleAccountsInfo(e, t) {
          return E(this, null, function* () {
            return (yield this.getMultipleAccountsInfoAndContext(e, t)).value;
          });
        }
        getStakeActivation(e, t, n) {
          return E(this, null, function* () {
            let { commitment: s, config: o } = ye(t),
              i = this._buildArgs(
                [e.toBase58()],
                s,
                void 0,
                Y(F({}, o), { epoch: n ?? o?.epoch })
              ),
              c = yield this._rpcRequest("getStakeActivation", i),
              a = P(c, Z(Yf));
            if ("error" in a)
              throw new z(
                a.error,
                `failed to get Stake Activation ${e.toBase58()}`
              );
            return a.result;
          });
        }
        getProgramAccounts(e, t) {
          return E(this, null, function* () {
            let { commitment: n, config: s } = ye(t),
              g = s || {},
              { encoding: o } = g,
              i = dt(g, ["encoding"]),
              c = this._buildArgs(
                [e.toBase58()],
                n,
                o || "base64",
                F(F({}, i), i.filters ? { filters: ga(i.filters) } : null)
              ),
              a = yield this._rpcRequest("getProgramAccounts", c),
              u = C(jf),
              d = i.withContext === !0 ? P(a, Ie(u)) : P(a, Z(u));
            if ("error" in d)
              throw new z(
                d.error,
                `failed to get accounts owned by program ${e.toBase58()}`
              );
            return d.result;
          });
        }
        getParsedProgramAccounts(e, t) {
          return E(this, null, function* () {
            let { commitment: n, config: s } = ye(t),
              o = this._buildArgs([e.toBase58()], n, "jsonParsed", s),
              i = yield this._rpcRequest("getProgramAccounts", o),
              c = P(i, Z(C(Gf)));
            if ("error" in c)
              throw new z(
                c.error,
                `failed to get accounts owned by program ${e.toBase58()}`
              );
            return c.result;
          });
        }
        confirmTransaction(e, t) {
          return E(this, null, function* () {
            let n;
            if (typeof e == "string") n = e;
            else {
              let o = e;
              if (o.abortSignal?.aborted)
                return Promise.reject(o.abortSignal.reason);
              n = o.signature;
            }
            let s;
            try {
              s = Re.default.decode(n);
            } catch {
              throw new Error("signature must be base58 encoded: " + n);
            }
            return (
              ie(s.length === 64, "signature has invalid length"),
              typeof e == "string"
                ? yield this.confirmTransactionUsingLegacyTimeoutStrategy({
                    commitment: t || this.commitment,
                    signature: n,
                  })
                : "lastValidBlockHeight" in e
                ? yield this.confirmTransactionUsingBlockHeightExceedanceStrategy(
                    { commitment: t || this.commitment, strategy: e }
                  )
                : yield this.confirmTransactionUsingDurableNonceStrategy({
                    commitment: t || this.commitment,
                    strategy: e,
                  })
            );
          });
        }
        getCancellationPromise(e) {
          return new Promise((t, n) => {
            e != null &&
              (e.aborted
                ? n(e.reason)
                : e.addEventListener("abort", () => {
                    n(e.reason);
                  }));
          });
        }
        getTransactionConfirmationPromise({ commitment: e, signature: t }) {
          let n,
            s,
            o = !1,
            i = new Promise((a, u) => {
              try {
                n = this.onSignature(
                  t,
                  (g, y) => {
                    n = void 0;
                    let l = { context: y, value: g };
                    a({ __type: wt.PROCESSED, response: l });
                  },
                  e
                );
                let d = new Promise((g) => {
                  n == null
                    ? g()
                    : (s = this._onSubscriptionStateChange(n, (y) => {
                        y === "subscribed" && g();
                      }));
                });
                E(this, null, function* () {
                  if ((yield d, o)) return;
                  let g = yield this.getSignatureStatus(t);
                  if (o || g == null) return;
                  let { context: y, value: l } = g;
                  if (l != null)
                    if (l?.err) u(l.err);
                    else {
                      switch (e) {
                        case "confirmed":
                        case "single":
                        case "singleGossip": {
                          if (l.confirmationStatus === "processed") return;
                          break;
                        }
                        case "finalized":
                        case "max":
                        case "root": {
                          if (
                            l.confirmationStatus === "processed" ||
                            l.confirmationStatus === "confirmed"
                          )
                            return;
                          break;
                        }
                        case "processed":
                        case "recent":
                      }
                      (o = !0),
                        a({
                          __type: wt.PROCESSED,
                          response: { context: y, value: l },
                        });
                    }
                });
              } catch (d) {
                u(d);
              }
            });
          return {
            abortConfirmation: () => {
              s && (s(), (s = void 0)),
                n != null && (this.removeSignatureListener(n), (n = void 0));
            },
            confirmationPromise: i,
          };
        }
        confirmTransactionUsingBlockHeightExceedanceStrategy(o) {
          return E(
            this,
            arguments,
            function* ({
              commitment: e,
              strategy: {
                abortSignal: t,
                lastValidBlockHeight: n,
                signature: s,
              },
            }) {
              let i = !1,
                c = new Promise((y) => {
                  let l = () =>
                    E(this, null, function* () {
                      try {
                        return yield this.getBlockHeight(e);
                      } catch {
                        return -1;
                      }
                    });
                  E(this, null, function* () {
                    let h = yield l();
                    if (!i) {
                      for (; h <= n; )
                        if ((yield Mt(1e3), i || ((h = yield l()), i))) return;
                      y({ __type: wt.BLOCKHEIGHT_EXCEEDED });
                    }
                  });
                }),
                { abortConfirmation: a, confirmationPromise: u } =
                  this.getTransactionConfirmationPromise({
                    commitment: e,
                    signature: s,
                  }),
                d = this.getCancellationPromise(t),
                g;
              try {
                let y = yield Promise.race([d, u, c]);
                if (y.__type === wt.PROCESSED) g = y.response;
                else throw new Kn(s);
              } finally {
                (i = !0), a();
              }
              return g;
            }
          );
        }
        confirmTransactionUsingDurableNonceStrategy(c) {
          return E(
            this,
            arguments,
            function* ({
              commitment: e,
              strategy: {
                abortSignal: t,
                minContextSlot: n,
                nonceAccountPubkey: s,
                nonceValue: o,
                signature: i,
              },
            }) {
              let a = !1,
                u = new Promise((h) => {
                  let m = o,
                    k = null,
                    w = () =>
                      E(this, null, function* () {
                        try {
                          let { context: R, value: x } =
                            yield this.getNonceAndContext(s, {
                              commitment: e,
                              minContextSlot: n,
                            });
                          return (k = R.slot), x?.nonce;
                        } catch {
                          return m;
                        }
                      });
                  E(this, null, function* () {
                    if (((m = yield w()), !a))
                      for (;;) {
                        if (o !== m) {
                          h({
                            __type: wt.NONCE_INVALID,
                            slotInWhichNonceDidAdvance: k,
                          });
                          return;
                        }
                        if ((yield Mt(2e3), a || ((m = yield w()), a))) return;
                      }
                  });
                }),
                { abortConfirmation: d, confirmationPromise: g } =
                  this.getTransactionConfirmationPromise({
                    commitment: e,
                    signature: i,
                  }),
                y = this.getCancellationPromise(t),
                l;
              try {
                let h = yield Promise.race([y, g, u]);
                if (h.__type === wt.PROCESSED) l = h.response;
                else {
                  let m;
                  for (;;) {
                    let k = yield this.getSignatureStatus(i);
                    if (k == null) break;
                    if (k.context.slot < (h.slotInWhichNonceDidAdvance ?? n)) {
                      yield Mt(400);
                      continue;
                    }
                    m = k;
                    break;
                  }
                  if (m?.value) {
                    let k = e || "finalized",
                      { confirmationStatus: w } = m.value;
                    switch (k) {
                      case "processed":
                      case "recent":
                        if (
                          w !== "processed" &&
                          w !== "confirmed" &&
                          w !== "finalized"
                        )
                          throw new Pt(i);
                        break;
                      case "confirmed":
                      case "single":
                      case "singleGossip":
                        if (w !== "confirmed" && w !== "finalized")
                          throw new Pt(i);
                        break;
                      case "finalized":
                      case "max":
                      case "root":
                        if (w !== "finalized") throw new Pt(i);
                        break;
                      default:
                    }
                    l = { context: m.context, value: { err: m.value.err } };
                  } else throw new Pt(i);
                }
              } finally {
                (a = !0), d();
              }
              return l;
            }
          );
        }
        confirmTransactionUsingLegacyTimeoutStrategy(n) {
          return E(
            this,
            arguments,
            function* ({ commitment: e, signature: t }) {
              let s,
                o = new Promise((u) => {
                  let d = this._confirmTransactionInitialTimeout || 6e4;
                  switch (e) {
                    case "processed":
                    case "recent":
                    case "single":
                    case "confirmed":
                    case "singleGossip": {
                      d = this._confirmTransactionInitialTimeout || 3e4;
                      break;
                    }
                  }
                  s = setTimeout(
                    () => u({ __type: wt.TIMED_OUT, timeoutMs: d }),
                    d
                  );
                }),
                { abortConfirmation: i, confirmationPromise: c } =
                  this.getTransactionConfirmationPromise({
                    commitment: e,
                    signature: t,
                  }),
                a;
              try {
                let u = yield Promise.race([c, o]);
                if (u.__type === wt.PROCESSED) a = u.response;
                else throw new qn(t, u.timeoutMs / 1e3);
              } finally {
                clearTimeout(s), i();
              }
              return a;
            }
          );
        }
        getClusterNodes() {
          return E(this, null, function* () {
            let e = yield this._rpcRequest("getClusterNodes", []),
              t = P(e, Z(C(al)));
            if ("error" in t)
              throw new z(t.error, "failed to get cluster nodes");
            return t.result;
          });
        }
        getVoteAccounts(e) {
          return E(this, null, function* () {
            let t = this._buildArgs([], e),
              n = yield this._rpcRequest("getVoteAccounts", t),
              s = P(n, cl);
            if ("error" in s)
              throw new z(s.error, "failed to get vote accounts");
            return s.result;
          });
        }
        getSlot(e) {
          return E(this, null, function* () {
            let { commitment: t, config: n } = ye(e),
              s = this._buildArgs([], t, void 0, n),
              o = yield this._rpcRequest("getSlot", s),
              i = P(o, Z(p()));
            if ("error" in i) throw new z(i.error, "failed to get slot");
            return i.result;
          });
        }
        getSlotLeader(e) {
          return E(this, null, function* () {
            let { commitment: t, config: n } = ye(e),
              s = this._buildArgs([], t, void 0, n),
              o = yield this._rpcRequest("getSlotLeader", s),
              i = P(o, Z(A()));
            if ("error" in i) throw new z(i.error, "failed to get slot leader");
            return i.result;
          });
        }
        getSlotLeaders(e, t) {
          return E(this, null, function* () {
            let n = [e, t],
              s = yield this._rpcRequest("getSlotLeaders", n),
              o = P(s, Z(C(we)));
            if ("error" in o)
              throw new z(o.error, "failed to get slot leaders");
            return o.result;
          });
        }
        getSignatureStatus(e, t) {
          return E(this, null, function* () {
            let { context: n, value: s } = yield this.getSignatureStatuses(
              [e],
              t
            );
            ie(s.length === 1);
            let o = s[0];
            return { context: n, value: o };
          });
        }
        getSignatureStatuses(e, t) {
          return E(this, null, function* () {
            let n = [e];
            t && n.push(t);
            let s = yield this._rpcRequest("getSignatureStatuses", n),
              o = P(s, ll);
            if ("error" in o)
              throw new z(o.error, "failed to get signature status");
            return o.result;
          });
        }
        getTransactionCount(e) {
          return E(this, null, function* () {
            let { commitment: t, config: n } = ye(e),
              s = this._buildArgs([], t, void 0, n),
              o = yield this._rpcRequest("getTransactionCount", s),
              i = P(o, Z(p()));
            if ("error" in i)
              throw new z(i.error, "failed to get transaction count");
            return i.result;
          });
        }
        getTotalSupply(e) {
          return E(this, null, function* () {
            return (yield this.getSupply({
              commitment: e,
              excludeNonCirculatingAccountsList: !0,
            })).value.total;
          });
        }
        getInflationGovernor(e) {
          return E(this, null, function* () {
            let t = this._buildArgs([], e),
              n = yield this._rpcRequest("getInflationGovernor", t),
              s = P(n, Of);
            if ("error" in s) throw new z(s.error, "failed to get inflation");
            return s.result;
          });
        }
        getInflationReward(e, t, n) {
          return E(this, null, function* () {
            let { commitment: s, config: o } = ye(n),
              i = this._buildArgs(
                [e.map((u) => u.toBase58())],
                s,
                void 0,
                Y(F({}, o), { epoch: t ?? o?.epoch })
              ),
              c = yield this._rpcRequest("getInflationReward", i),
              a = P(c, wf);
            if ("error" in a)
              throw new z(a.error, "failed to get inflation reward");
            return a.result;
          });
        }
        getInflationRate() {
          return E(this, null, function* () {
            let e = yield this._rpcRequest("getInflationRate", []),
              t = P(e, Nf);
            if ("error" in t)
              throw new z(t.error, "failed to get inflation rate");
            return t.result;
          });
        }
        getEpochInfo(e) {
          return E(this, null, function* () {
            let { commitment: t, config: n } = ye(e),
              s = this._buildArgs([], t, void 0, n),
              o = yield this._rpcRequest("getEpochInfo", s),
              i = P(o, zf);
            if ("error" in i) throw new z(i.error, "failed to get epoch info");
            return i.result;
          });
        }
        getEpochSchedule() {
          return E(this, null, function* () {
            let e = yield this._rpcRequest("getEpochSchedule", []),
              t = P(e, Kf);
            if ("error" in t)
              throw new z(t.error, "failed to get epoch schedule");
            let n = t.result;
            return new Mr(
              n.slotsPerEpoch,
              n.leaderScheduleSlotOffset,
              n.warmup,
              n.firstNormalEpoch,
              n.firstNormalSlot
            );
          });
        }
        getLeaderSchedule() {
          return E(this, null, function* () {
            let e = yield this._rpcRequest("getLeaderSchedule", []),
              t = P(e, qf);
            if ("error" in t)
              throw new z(t.error, "failed to get leader schedule");
            return t.result;
          });
        }
        getMinimumBalanceForRentExemption(e, t) {
          return E(this, null, function* () {
            let n = this._buildArgs([e], t),
              s = yield this._rpcRequest(
                "getMinimumBalanceForRentExemption",
                n
              ),
              o = P(s, dl);
            return "error" in o
              ? (console.warn(
                  "Unable to fetch minimum balance for rent exemption"
                ),
                0)
              : o.result;
          });
        }
        getRecentBlockhashAndContext(e) {
          return E(this, null, function* () {
            let {
              context: t,
              value: { blockhash: n },
            } = yield this.getLatestBlockhashAndContext(e);
            return {
              context: t,
              value: {
                blockhash: n,
                feeCalculator: {
                  get lamportsPerSignature() {
                    throw new Error(
                      "The capability to fetch `lamportsPerSignature` using the `getRecentBlockhash` API is no longer offered by the network. Use the `getFeeForMessage` API to obtain the fee for a given message."
                    );
                  },
                  toJSON() {
                    return {};
                  },
                },
              },
            };
          });
        }
        getRecentPerformanceSamples(e) {
          return E(this, null, function* () {
            let t = yield this._rpcRequest(
                "getRecentPerformanceSamples",
                e ? [e] : []
              ),
              n = P(t, vl);
            if ("error" in n)
              throw new z(n.error, "failed to get recent performance samples");
            return n.result;
          });
        }
        getFeeCalculatorForBlockhash(e, t) {
          return E(this, null, function* () {
            let n = this._buildArgs([e], t),
              s = yield this._rpcRequest("getFeeCalculatorForBlockhash", n),
              o = P(s, _l);
            if ("error" in o)
              throw new z(o.error, "failed to get fee calculator");
            let { context: i, value: c } = o.result;
            return { context: i, value: c !== null ? c.feeCalculator : null };
          });
        }
        getFeeForMessage(e, t) {
          return E(this, null, function* () {
            let n = X(e.serialize()).toString("base64"),
              s = this._buildArgs([n], t),
              o = yield this._rpcRequest("getFeeForMessage", s),
              i = P(o, Ie(O(p())));
            if ("error" in i)
              throw new z(i.error, "failed to get fee for message");
            if (i.result === null) throw new Error("invalid blockhash");
            return i.result;
          });
        }
        getRecentPrioritizationFees(e) {
          return E(this, null, function* () {
            let t = e?.lockedWritableAccounts?.map((i) => i.toBase58()),
              n = t?.length ? [t] : [],
              s = yield this._rpcRequest("getRecentPrioritizationFees", n),
              o = P(s, Uf);
            if ("error" in o)
              throw new z(o.error, "failed to get recent prioritization fees");
            return o.result;
          });
        }
        getRecentBlockhash(e) {
          return E(this, null, function* () {
            try {
              return (yield this.getRecentBlockhashAndContext(e)).value;
            } catch (t) {
              throw new Error("failed to get recent blockhash: " + t);
            }
          });
        }
        getLatestBlockhash(e) {
          return E(this, null, function* () {
            try {
              return (yield this.getLatestBlockhashAndContext(e)).value;
            } catch (t) {
              throw new Error("failed to get recent blockhash: " + t);
            }
          });
        }
        getLatestBlockhashAndContext(e) {
          return E(this, null, function* () {
            let { commitment: t, config: n } = ye(e),
              s = this._buildArgs([], t, void 0, n),
              o = yield this._rpcRequest("getLatestBlockhash", s),
              i = P(o, Bl);
            if ("error" in i)
              throw new z(i.error, "failed to get latest blockhash");
            return i.result;
          });
        }
        isBlockhashValid(e, t) {
          return E(this, null, function* () {
            let { commitment: n, config: s } = ye(t),
              o = this._buildArgs([e], n, void 0, s),
              i = yield this._rpcRequest("isBlockhashValid", o),
              c = P(i, El);
            if ("error" in c)
              throw new z(
                c.error,
                "failed to determine if the blockhash `" + e + "`is valid"
              );
            return c.result;
          });
        }
        getVersion() {
          return E(this, null, function* () {
            let e = yield this._rpcRequest("getVersion", []),
              t = P(e, Z(xf));
            if ("error" in t) throw new z(t.error, "failed to get version");
            return t.result;
          });
        }
        getGenesisHash() {
          return E(this, null, function* () {
            let e = yield this._rpcRequest("getGenesisHash", []),
              t = P(e, Z(A()));
            if ("error" in t)
              throw new z(t.error, "failed to get genesis hash");
            return t.result;
          });
        }
        getBlock(e, t) {
          return E(this, null, function* () {
            let { commitment: n, config: s } = ye(t),
              o = this._buildArgsAtLeastConfirmed([e], n, void 0, s),
              i = yield this._rpcRequest("getBlock", o);
            try {
              switch (s?.transactionDetails) {
                case "accounts": {
                  let c = P(i, ml);
                  if ("error" in c) throw c.error;
                  return c.result;
                }
                case "none": {
                  let c = P(i, gl);
                  if ("error" in c) throw c.error;
                  return c.result;
                }
                default: {
                  let c = P(i, pl);
                  if ("error" in c) throw c.error;
                  let { result: a } = c;
                  return a
                    ? Y(F({}, a), {
                        transactions: a.transactions.map(
                          ({ transaction: u, meta: d, version: g }) => ({
                            meta: d,
                            transaction: Y(F({}, u), {
                              message: Xs(g, u.message),
                            }),
                            version: g,
                          })
                        ),
                      })
                    : null;
                }
              }
            } catch (c) {
              throw new z(c, "failed to get confirmed block");
            }
          });
        }
        getParsedBlock(e, t) {
          return E(this, null, function* () {
            let { commitment: n, config: s } = ye(t),
              o = this._buildArgsAtLeastConfirmed([e], n, "jsonParsed", s),
              i = yield this._rpcRequest("getBlock", o);
            try {
              switch (s?.transactionDetails) {
                case "accounts": {
                  let c = P(i, wl);
                  if ("error" in c) throw c.error;
                  return c.result;
                }
                case "none": {
                  let c = P(i, kl);
                  if ("error" in c) throw c.error;
                  return c.result;
                }
                default: {
                  let c = P(i, bl);
                  if ("error" in c) throw c.error;
                  return c.result;
                }
              }
            } catch (c) {
              throw new z(c, "failed to get block");
            }
          });
        }
        getBlockProduction(e) {
          return E(this, null, function* () {
            let t, n;
            if (typeof e == "string") n = e;
            else if (e) {
              let c = e,
                { commitment: a } = c,
                u = dt(c, ["commitment"]);
              (n = a), (t = u);
            }
            let s = this._buildArgs([], n, "base64", t),
              o = yield this._rpcRequest("getBlockProduction", s),
              i = P(o, Lf);
            if ("error" in i)
              throw new z(
                i.error,
                "failed to get block production information"
              );
            return i.result;
          });
        }
        getTransaction(e, t) {
          return E(this, null, function* () {
            let { commitment: n, config: s } = ye(t),
              o = this._buildArgsAtLeastConfirmed([e], n, void 0, s),
              i = yield this._rpcRequest("getTransaction", o),
              c = P(i, Js);
            if ("error" in c) throw new z(c.error, "failed to get transaction");
            let a = c.result;
            return (
              a &&
              Y(F({}, a), {
                transaction: Y(F({}, a.transaction), {
                  message: Xs(a.version, a.transaction.message),
                }),
              })
            );
          });
        }
        getParsedTransaction(e, t) {
          return E(this, null, function* () {
            let { commitment: n, config: s } = ye(t),
              o = this._buildArgsAtLeastConfirmed([e], n, "jsonParsed", s),
              i = yield this._rpcRequest("getTransaction", o),
              c = P(i, Ur);
            if ("error" in c) throw new z(c.error, "failed to get transaction");
            return c.result;
          });
        }
        getParsedTransactions(e, t) {
          return E(this, null, function* () {
            let { commitment: n, config: s } = ye(t),
              o = e.map((a) => ({
                methodName: "getTransaction",
                args: this._buildArgsAtLeastConfirmed([a], n, "jsonParsed", s),
              }));
            return (yield this._rpcBatchRequest(o)).map((a) => {
              let u = P(a, Ur);
              if ("error" in u)
                throw new z(u.error, "failed to get transactions");
              return u.result;
            });
          });
        }
        getTransactions(e, t) {
          return E(this, null, function* () {
            let { commitment: n, config: s } = ye(t),
              o = e.map((a) => ({
                methodName: "getTransaction",
                args: this._buildArgsAtLeastConfirmed([a], n, void 0, s),
              }));
            return (yield this._rpcBatchRequest(o)).map((a) => {
              let u = P(a, Js);
              if ("error" in u)
                throw new z(u.error, "failed to get transactions");
              let d = u.result;
              return (
                d &&
                Y(F({}, d), {
                  transaction: Y(F({}, d.transaction), {
                    message: Xs(d.version, d.transaction.message),
                  }),
                })
              );
            });
          });
        }
        getConfirmedBlock(e, t) {
          return E(this, null, function* () {
            let n = this._buildArgsAtLeastConfirmed([e], t),
              s = yield this._rpcRequest("getBlock", n),
              o = P(s, Sl);
            if ("error" in o)
              throw new z(o.error, "failed to get confirmed block");
            let i = o.result;
            if (!i) throw new Error("Confirmed block " + e + " not found");
            let c = Y(F({}, i), {
              transactions: i.transactions.map(
                ({ transaction: a, meta: u }) => {
                  let d = new lt(a.message);
                  return { meta: u, transaction: Y(F({}, a), { message: d }) };
                }
              ),
            });
            return Y(F({}, c), {
              transactions: c.transactions.map(
                ({ transaction: a, meta: u }) => ({
                  meta: u,
                  transaction: ue.populate(a.message, a.signatures),
                })
              ),
            });
          });
        }
        getBlocks(e, t, n) {
          return E(this, null, function* () {
            let s = this._buildArgsAtLeastConfirmed(
                t !== void 0 ? [e, t] : [e],
                n
              ),
              o = yield this._rpcRequest("getBlocks", s),
              i = P(o, Z(C(p())));
            if ("error" in i) throw new z(i.error, "failed to get blocks");
            return i.result;
          });
        }
        getBlockSignatures(e, t) {
          return E(this, null, function* () {
            let n = this._buildArgsAtLeastConfirmed([e], t, void 0, {
                transactionDetails: "signatures",
                rewards: !1,
              }),
              s = yield this._rpcRequest("getBlock", n),
              o = P(s, wa);
            if ("error" in o) throw new z(o.error, "failed to get block");
            let i = o.result;
            if (!i) throw new Error("Block " + e + " not found");
            return i;
          });
        }
        getConfirmedBlockSignatures(e, t) {
          return E(this, null, function* () {
            let n = this._buildArgsAtLeastConfirmed([e], t, void 0, {
                transactionDetails: "signatures",
                rewards: !1,
              }),
              s = yield this._rpcRequest("getBlock", n),
              o = P(s, wa);
            if ("error" in o)
              throw new z(o.error, "failed to get confirmed block");
            let i = o.result;
            if (!i) throw new Error("Confirmed block " + e + " not found");
            return i;
          });
        }
        getConfirmedTransaction(e, t) {
          return E(this, null, function* () {
            let n = this._buildArgsAtLeastConfirmed([e], t),
              s = yield this._rpcRequest("getTransaction", n),
              o = P(s, Js);
            if ("error" in o) throw new z(o.error, "failed to get transaction");
            let i = o.result;
            if (!i) return i;
            let c = new lt(i.transaction.message),
              a = i.transaction.signatures;
            return Y(F({}, i), { transaction: ue.populate(c, a) });
          });
        }
        getParsedConfirmedTransaction(e, t) {
          return E(this, null, function* () {
            let n = this._buildArgsAtLeastConfirmed([e], t, "jsonParsed"),
              s = yield this._rpcRequest("getTransaction", n),
              o = P(s, Ur);
            if ("error" in o)
              throw new z(o.error, "failed to get confirmed transaction");
            return o.result;
          });
        }
        getParsedConfirmedTransactions(e, t) {
          return E(this, null, function* () {
            let n = e.map((i) => ({
              methodName: "getTransaction",
              args: this._buildArgsAtLeastConfirmed([i], t, "jsonParsed"),
            }));
            return (yield this._rpcBatchRequest(n)).map((i) => {
              let c = P(i, Ur);
              if ("error" in c)
                throw new z(c.error, "failed to get confirmed transactions");
              return c.result;
            });
          });
        }
        getConfirmedSignaturesForAddress(e, t, n) {
          return E(this, null, function* () {
            let s = {},
              o = yield this.getFirstAvailableBlock();
            for (; !("until" in s) && (t--, !(t <= 0 || t < o)); )
              try {
                let a = yield this.getConfirmedBlockSignatures(t, "finalized");
                a.signatures.length > 0 &&
                  (s.until = a.signatures[a.signatures.length - 1].toString());
              } catch (a) {
                if (a instanceof Error && a.message.includes("skipped"))
                  continue;
                throw a;
              }
            let i = yield this.getSlot("finalized");
            for (; !("before" in s) && (n++, !(n > i)); )
              try {
                let a = yield this.getConfirmedBlockSignatures(n);
                a.signatures.length > 0 &&
                  (s.before = a.signatures[a.signatures.length - 1].toString());
              } catch (a) {
                if (a instanceof Error && a.message.includes("skipped"))
                  continue;
                throw a;
              }
            return (yield this.getConfirmedSignaturesForAddress2(e, s)).map(
              (a) => a.signature
            );
          });
        }
        getConfirmedSignaturesForAddress2(e, t, n) {
          return E(this, null, function* () {
            let s = this._buildArgsAtLeastConfirmed(
                [e.toBase58()],
                n,
                void 0,
                t
              ),
              o = yield this._rpcRequest(
                "getConfirmedSignaturesForAddress2",
                s
              ),
              i = P(o, Zf);
            if ("error" in i)
              throw new z(
                i.error,
                "failed to get confirmed signatures for address"
              );
            return i.result;
          });
        }
        getSignaturesForAddress(e, t, n) {
          return E(this, null, function* () {
            let s = this._buildArgsAtLeastConfirmed(
                [e.toBase58()],
                n,
                void 0,
                t
              ),
              o = yield this._rpcRequest("getSignaturesForAddress", s),
              i = P(o, Xf);
            if ("error" in i)
              throw new z(i.error, "failed to get signatures for address");
            return i.result;
          });
        }
        getAddressLookupTable(e, t) {
          return E(this, null, function* () {
            let { context: n, value: s } = yield this.getAccountInfoAndContext(
                e,
                t
              ),
              o = null;
            return (
              s !== null &&
                (o = new Wn({ key: e, state: Wn.deserialize(s.data) })),
              { context: n, value: o }
            );
          });
        }
        getNonceAndContext(e, t) {
          return E(this, null, function* () {
            let { context: n, value: s } = yield this.getAccountInfoAndContext(
                e,
                t
              ),
              o = null;
            return (
              s !== null && (o = Dr.fromAccountData(s.data)),
              { context: n, value: o }
            );
          });
        }
        getNonce(e, t) {
          return E(this, null, function* () {
            return yield this.getNonceAndContext(e, t)
              .then((n) => n.value)
              .catch((n) => {
                throw new Error(
                  "failed to get nonce for account " + e.toBase58() + ": " + n
                );
              });
          });
        }
        requestAirdrop(e, t) {
          return E(this, null, function* () {
            let n = yield this._rpcRequest("requestAirdrop", [e.toBase58(), t]),
              s = P(n, xl);
            if ("error" in s)
              throw new z(s.error, `airdrop to ${e.toBase58()} failed`);
            return s.result;
          });
        }
        _blockhashWithExpiryBlockHeight(e) {
          return E(this, null, function* () {
            if (!e) {
              for (; this._pollingBlockhash; ) yield Mt(100);
              let n = Date.now() - this._blockhashInfo.lastFetch >= Ka;
              if (this._blockhashInfo.latestBlockhash !== null && !n)
                return this._blockhashInfo.latestBlockhash;
            }
            return yield this._pollNewBlockhash();
          });
        }
        _pollNewBlockhash() {
          return E(this, null, function* () {
            this._pollingBlockhash = !0;
            try {
              let e = Date.now(),
                t = this._blockhashInfo.latestBlockhash,
                n = t ? t.blockhash : null;
              for (let s = 0; s < 50; s++) {
                let o = yield this.getLatestBlockhash("finalized");
                if (n !== o.blockhash)
                  return (
                    (this._blockhashInfo = {
                      latestBlockhash: o,
                      lastFetch: Date.now(),
                      transactionSignatures: [],
                      simulatedSignatures: [],
                    }),
                    o
                  );
                yield Mt(Oa / 2);
              }
              throw new Error(
                `Unable to obtain a new blockhash after ${Date.now() - e}ms`
              );
            } finally {
              this._pollingBlockhash = !1;
            }
          });
        }
        getStakeMinimumDelegation(e) {
          return E(this, null, function* () {
            let { commitment: t, config: n } = ye(e),
              s = this._buildArgs([], t, "base64", n),
              o = yield this._rpcRequest("getStakeMinimumDelegation", s),
              i = P(o, Ie(p()));
            if ("error" in i)
              throw new z(i.error, "failed to get stake minimum delegation");
            return i.result;
          });
        }
        simulateTransaction(e, t, n) {
          return E(this, null, function* () {
            if ("message" in e) {
              let m = e.serialize(),
                k = $.Buffer.from(m).toString("base64");
              if (Array.isArray(t) || n !== void 0)
                throw new Error("Invalid arguments");
              let w = t || {};
              (w.encoding = "base64"),
                "commitment" in w || (w.commitment = this.commitment),
                t &&
                  typeof t == "object" &&
                  "innerInstructions" in t &&
                  (w.innerInstructions = t.innerInstructions);
              let R = [k, w],
                x = yield this._rpcRequest("simulateTransaction", R),
                U = P(x, ma);
              if ("error" in U)
                throw new Error(
                  "failed to simulate transaction: " + U.error.message
                );
              return U.result;
            }
            let s;
            if (e instanceof ue) {
              let h = e;
              (s = new ue()),
                (s.feePayer = h.feePayer),
                (s.instructions = e.instructions),
                (s.nonceInfo = h.nonceInfo),
                (s.signatures = h.signatures);
            } else (s = ue.populate(e)), (s._message = s._json = void 0);
            if (t !== void 0 && !Array.isArray(t))
              throw new Error("Invalid arguments");
            let o = t;
            if (s.nonceInfo && o) s.sign(...o);
            else {
              let h = this._disableBlockhashCaching;
              for (;;) {
                let m = yield this._blockhashWithExpiryBlockHeight(h);
                if (
                  ((s.lastValidBlockHeight = m.lastValidBlockHeight),
                  (s.recentBlockhash = m.blockhash),
                  !o)
                )
                  break;
                if ((s.sign(...o), !s.signature)) throw new Error("!signature");
                let k = s.signature.toString("base64");
                if (
                  !this._blockhashInfo.simulatedSignatures.includes(k) &&
                  !this._blockhashInfo.transactionSignatures.includes(k)
                ) {
                  this._blockhashInfo.simulatedSignatures.push(k);
                  break;
                } else h = !0;
              }
            }
            let i = s._compile(),
              c = i.serialize(),
              u = s._serialize(c).toString("base64"),
              d = { encoding: "base64", commitment: this.commitment };
            if (n) {
              let h = (Array.isArray(n) ? n : i.nonProgramIds()).map((m) =>
                m.toBase58()
              );
              d.accounts = { encoding: "base64", addresses: h };
            }
            o && (d.sigVerify = !0),
              t &&
                typeof t == "object" &&
                "innerInstructions" in t &&
                (d.innerInstructions = t.innerInstructions);
            let g = [u, d],
              y = yield this._rpcRequest("simulateTransaction", g),
              l = P(y, ma);
            if ("error" in l) {
              let h;
              if (
                "data" in l.error &&
                ((h = l.error.data.logs), h && Array.isArray(h))
              ) {
                let m = `
    `,
                  k = m + h.join(m);
                console.error(l.error.message, k);
              }
              throw new Ft({
                action: "simulate",
                signature: "",
                transactionMessage: l.error.message,
                logs: h,
              });
            }
            return l.result;
          });
        }
        sendTransaction(e, t, n) {
          return E(this, null, function* () {
            if ("version" in e) {
              if (t && Array.isArray(t)) throw new Error("Invalid arguments");
              let i = e.serialize();
              return yield this.sendRawTransaction(i, t);
            }
            if (t === void 0 || !Array.isArray(t))
              throw new Error("Invalid arguments");
            let s = t;
            if (e.nonceInfo) e.sign(...s);
            else {
              let i = this._disableBlockhashCaching;
              for (;;) {
                let c = yield this._blockhashWithExpiryBlockHeight(i);
                if (
                  ((e.lastValidBlockHeight = c.lastValidBlockHeight),
                  (e.recentBlockhash = c.blockhash),
                  e.sign(...s),
                  !e.signature)
                )
                  throw new Error("!signature");
                let a = e.signature.toString("base64");
                if (this._blockhashInfo.transactionSignatures.includes(a))
                  i = !0;
                else {
                  this._blockhashInfo.transactionSignatures.push(a);
                  break;
                }
              }
            }
            let o = e.serialize();
            return yield this.sendRawTransaction(o, n);
          });
        }
        sendRawTransaction(e, t) {
          return E(this, null, function* () {
            let n = X(e).toString("base64");
            return yield this.sendEncodedTransaction(n, t);
          });
        }
        sendEncodedTransaction(e, t) {
          return E(this, null, function* () {
            let n = { encoding: "base64" },
              s = t && t.skipPreflight,
              o =
                s === !0
                  ? "processed"
                  : (t && t.preflightCommitment) || this.commitment;
            t && t.maxRetries != null && (n.maxRetries = t.maxRetries),
              t &&
                t.minContextSlot != null &&
                (n.minContextSlot = t.minContextSlot),
              s && (n.skipPreflight = s),
              o && (n.preflightCommitment = o);
            let i = [e, n],
              c = yield this._rpcRequest("sendTransaction", i),
              a = P(c, Al);
            if ("error" in a) {
              let u;
              throw (
                ("data" in a.error && (u = a.error.data.logs),
                new Ft({
                  action: s ? "send" : "simulate",
                  signature: "",
                  transactionMessage: a.error.message,
                  logs: u,
                }))
              );
            }
            return a.result;
          });
        }
        _wsOnOpen() {
          (this._rpcWebSocketConnected = !0),
            (this._rpcWebSocketHeartbeat = setInterval(() => {
              E(this, null, function* () {
                try {
                  yield this._rpcWebSocket.notify("ping");
                } catch {}
              });
            }, 5e3)),
            this._updateSubscriptions();
        }
        _wsOnError(e) {
          (this._rpcWebSocketConnected = !1),
            console.error("ws error:", e.message);
        }
        _wsOnClose(e) {
          if (
            ((this._rpcWebSocketConnected = !1),
            (this._rpcWebSocketGeneration =
              (this._rpcWebSocketGeneration + 1) % Number.MAX_SAFE_INTEGER),
            this._rpcWebSocketIdleTimeout &&
              (clearTimeout(this._rpcWebSocketIdleTimeout),
              (this._rpcWebSocketIdleTimeout = null)),
            this._rpcWebSocketHeartbeat &&
              (clearInterval(this._rpcWebSocketHeartbeat),
              (this._rpcWebSocketHeartbeat = null)),
            e === 1e3)
          ) {
            this._updateSubscriptions();
            return;
          }
          (this._subscriptionCallbacksByServerSubscriptionId = {}),
            Object.entries(this._subscriptionsByHash).forEach(([t, n]) => {
              this._setSubscription(t, Y(F({}, n), { state: "pending" }));
            });
        }
        _setSubscription(e, t) {
          let n = this._subscriptionsByHash[e]?.state;
          if (((this._subscriptionsByHash[e] = t), n !== t.state)) {
            let s = this._subscriptionStateChangeCallbacksByHash[e];
            s &&
              s.forEach((o) => {
                try {
                  o(t.state);
                } catch {}
              });
          }
        }
        _onSubscriptionStateChange(e, t) {
          let n = this._subscriptionHashByClientSubscriptionId[e];
          if (n == null) return () => {};
          let s = (this._subscriptionStateChangeCallbacksByHash[n] ||=
            new Set());
          return (
            s.add(t),
            () => {
              s.delete(t),
                s.size === 0 &&
                  delete this._subscriptionStateChangeCallbacksByHash[n];
            }
          );
        }
        _updateSubscriptions() {
          return E(this, null, function* () {
            if (Object.keys(this._subscriptionsByHash).length === 0) {
              this._rpcWebSocketConnected &&
                ((this._rpcWebSocketConnected = !1),
                (this._rpcWebSocketIdleTimeout = setTimeout(() => {
                  this._rpcWebSocketIdleTimeout = null;
                  try {
                    this._rpcWebSocket.close();
                  } catch (n) {
                    n instanceof Error &&
                      console.log(
                        `Error when closing socket connection: ${n.message}`
                      );
                  }
                }, 500)));
              return;
            }
            if (
              (this._rpcWebSocketIdleTimeout !== null &&
                (clearTimeout(this._rpcWebSocketIdleTimeout),
                (this._rpcWebSocketIdleTimeout = null),
                (this._rpcWebSocketConnected = !0)),
              !this._rpcWebSocketConnected)
            ) {
              this._rpcWebSocket.connect();
              return;
            }
            let e = this._rpcWebSocketGeneration,
              t = () => e === this._rpcWebSocketGeneration;
            yield Promise.all(
              Object.keys(this._subscriptionsByHash).map((n) =>
                E(this, null, function* () {
                  let s = this._subscriptionsByHash[n];
                  if (s !== void 0)
                    switch (s.state) {
                      case "pending":
                      case "unsubscribed":
                        if (s.callbacks.size === 0) {
                          delete this._subscriptionsByHash[n],
                            s.state === "unsubscribed" &&
                              delete this
                                ._subscriptionCallbacksByServerSubscriptionId[
                                s.serverSubscriptionId
                              ],
                            yield this._updateSubscriptions();
                          return;
                        }
                        yield E(this, null, function* () {
                          let { args: o, method: i } = s;
                          try {
                            this._setSubscription(
                              n,
                              Y(F({}, s), { state: "subscribing" })
                            );
                            let c = yield this._rpcWebSocket.call(i, o);
                            this._setSubscription(
                              n,
                              Y(F({}, s), {
                                serverSubscriptionId: c,
                                state: "subscribed",
                              })
                            ),
                              (this._subscriptionCallbacksByServerSubscriptionId[
                                c
                              ] = s.callbacks),
                              yield this._updateSubscriptions();
                          } catch (c) {
                            if (
                              (console.error(
                                `Received ${
                                  c instanceof Error ? "" : "JSON-RPC "
                                }error calling \`${i}\``,
                                { args: o, error: c }
                              ),
                              !t())
                            )
                              return;
                            this._setSubscription(
                              n,
                              Y(F({}, s), { state: "pending" })
                            ),
                              yield this._updateSubscriptions();
                          }
                        });
                        break;
                      case "subscribed":
                        s.callbacks.size === 0 &&
                          (yield E(this, null, function* () {
                            let {
                              serverSubscriptionId: o,
                              unsubscribeMethod: i,
                            } = s;
                            if (this._subscriptionsAutoDisposedByRpc.has(o))
                              this._subscriptionsAutoDisposedByRpc.delete(o);
                            else {
                              this._setSubscription(
                                n,
                                Y(F({}, s), { state: "unsubscribing" })
                              ),
                                this._setSubscription(
                                  n,
                                  Y(F({}, s), { state: "unsubscribing" })
                                );
                              try {
                                yield this._rpcWebSocket.call(i, [o]);
                              } catch (c) {
                                if (
                                  (c instanceof Error &&
                                    console.error(`${i} error:`, c.message),
                                  !t())
                                )
                                  return;
                                this._setSubscription(
                                  n,
                                  Y(F({}, s), { state: "subscribed" })
                                ),
                                  yield this._updateSubscriptions();
                                return;
                              }
                            }
                            this._setSubscription(
                              n,
                              Y(F({}, s), { state: "unsubscribed" })
                            ),
                              yield this._updateSubscriptions();
                          }));
                        break;
                    }
                })
              )
            );
          });
        }
        _handleServerNotification(e, t) {
          let n = this._subscriptionCallbacksByServerSubscriptionId[e];
          n !== void 0 &&
            n.forEach((s) => {
              try {
                s(...t);
              } catch (o) {
                console.error(o);
              }
            });
        }
        _wsOnAccountNotification(e) {
          let { result: t, subscription: n } = P(e, Jf);
          this._handleServerNotification(n, [t.value, t.context]);
        }
        _makeSubscription(e, t) {
          let n = this._nextClientSubscriptionId++,
            s = ya([e.method, t]),
            o = this._subscriptionsByHash[s];
          return (
            o === void 0
              ? (this._subscriptionsByHash[s] = Y(F({}, e), {
                  args: t,
                  callbacks: new Set([e.callback]),
                  state: "pending",
                }))
              : o.callbacks.add(e.callback),
            (this._subscriptionHashByClientSubscriptionId[n] = s),
            (this._subscriptionDisposeFunctionsByClientSubscriptionId[n] = () =>
              E(this, null, function* () {
                delete this._subscriptionDisposeFunctionsByClientSubscriptionId[
                  n
                ],
                  delete this._subscriptionHashByClientSubscriptionId[n];
                let i = this._subscriptionsByHash[s];
                ie(
                  i !== void 0,
                  `Could not find a \`Subscription\` when tearing down client subscription #${n}`
                ),
                  i.callbacks.delete(e.callback),
                  yield this._updateSubscriptions();
              })),
            this._updateSubscriptions(),
            n
          );
        }
        onAccountChange(e, t, n) {
          let { commitment: s, config: o } = ye(n),
            i = this._buildArgs(
              [e.toBase58()],
              s || this._commitment || "finalized",
              "base64",
              o
            );
          return this._makeSubscription(
            {
              callback: t,
              method: "accountSubscribe",
              unsubscribeMethod: "accountUnsubscribe",
            },
            i
          );
        }
        removeAccountChangeListener(e) {
          return E(this, null, function* () {
            yield this._unsubscribeClientSubscription(e, "account change");
          });
        }
        _wsOnProgramAccountNotification(e) {
          let { result: t, subscription: n } = P(e, el);
          this._handleServerNotification(n, [
            { accountId: t.value.pubkey, accountInfo: t.value.account },
            t.context,
          ]);
        }
        onProgramAccountChange(e, t, n, s) {
          let { commitment: o, config: i } = ye(n),
            c = this._buildArgs(
              [e.toBase58()],
              o || this._commitment || "finalized",
              "base64",
              i || (s ? { filters: ga(s) } : void 0)
            );
          return this._makeSubscription(
            {
              callback: t,
              method: "programSubscribe",
              unsubscribeMethod: "programUnsubscribe",
            },
            c
          );
        }
        removeProgramAccountChangeListener(e) {
          return E(this, null, function* () {
            yield this._unsubscribeClientSubscription(
              e,
              "program account change"
            );
          });
        }
        onLogs(e, t, n) {
          let s = this._buildArgs(
            [typeof e == "object" ? { mentions: [e.toString()] } : e],
            n || this._commitment || "finalized"
          );
          return this._makeSubscription(
            {
              callback: t,
              method: "logsSubscribe",
              unsubscribeMethod: "logsUnsubscribe",
            },
            s
          );
        }
        removeOnLogsListener(e) {
          return E(this, null, function* () {
            yield this._unsubscribeClientSubscription(e, "logs");
          });
        }
        _wsOnLogsNotification(e) {
          let { result: t, subscription: n } = P(e, Ll);
          this._handleServerNotification(n, [t.value, t.context]);
        }
        _wsOnSlotNotification(e) {
          let { result: t, subscription: n } = P(e, nl);
          this._handleServerNotification(n, [t]);
        }
        onSlotChange(e) {
          return this._makeSubscription(
            {
              callback: e,
              method: "slotSubscribe",
              unsubscribeMethod: "slotUnsubscribe",
            },
            []
          );
        }
        removeSlotChangeListener(e) {
          return E(this, null, function* () {
            yield this._unsubscribeClientSubscription(e, "slot change");
          });
        }
        _wsOnSlotUpdatesNotification(e) {
          let { result: t, subscription: n } = P(e, sl);
          this._handleServerNotification(n, [t]);
        }
        onSlotUpdate(e) {
          return this._makeSubscription(
            {
              callback: e,
              method: "slotsUpdatesSubscribe",
              unsubscribeMethod: "slotsUpdatesUnsubscribe",
            },
            []
          );
        }
        removeSlotUpdateListener(e) {
          return E(this, null, function* () {
            yield this._unsubscribeClientSubscription(e, "slot update");
          });
        }
        _unsubscribeClientSubscription(e, t) {
          return E(this, null, function* () {
            let n = this._subscriptionDisposeFunctionsByClientSubscriptionId[e];
            n
              ? yield n()
              : console.warn(
                  `Ignored unsubscribe request because an active subscription with id \`${e}\` for '${t}' events could not be found.`
                );
          });
        }
        _buildArgs(e, t, n, s) {
          let o = t || this._commitment;
          if (o || n || s) {
            let i = {};
            n && (i.encoding = n),
              o && (i.commitment = o),
              s && (i = Object.assign(i, s)),
              e.push(i);
          }
          return e;
        }
        _buildArgsAtLeastConfirmed(e, t, n, s) {
          let o = t || this._commitment;
          if (o && !["confirmed", "finalized"].includes(o))
            throw new Error(
              "Using Connection with default commitment: `" +
                this._commitment +
                "`, but method requires at least `confirmed`"
            );
          return this._buildArgs(e, t, n, s);
        }
        _wsOnSignatureNotification(e) {
          let { result: t, subscription: n } = P(e, ol);
          t.value !== "receivedSignature" &&
            this._subscriptionsAutoDisposedByRpc.add(n),
            this._handleServerNotification(
              n,
              t.value === "receivedSignature"
                ? [{ type: "received" }, t.context]
                : [{ type: "status", result: t.value }, t.context]
            );
        }
        onSignature(e, t, n) {
          let s = this._buildArgs([e], n || this._commitment || "finalized"),
            o = this._makeSubscription(
              {
                callback: (i, c) => {
                  if (i.type === "status") {
                    t(i.result, c);
                    try {
                      this.removeSignatureListener(o);
                    } catch {}
                  }
                },
                method: "signatureSubscribe",
                unsubscribeMethod: "signatureUnsubscribe",
              },
              s
            );
          return o;
        }
        onSignatureWithOptions(e, t, n) {
          let a = Y(F({}, n), {
              commitment:
                (n && n.commitment) || this._commitment || "finalized",
            }),
            { commitment: s } = a,
            o = dt(a, ["commitment"]),
            i = this._buildArgs([e], s, void 0, o),
            c = this._makeSubscription(
              {
                callback: (u, d) => {
                  t(u, d);
                  try {
                    this.removeSignatureListener(c);
                  } catch {}
                },
                method: "signatureSubscribe",
                unsubscribeMethod: "signatureUnsubscribe",
              },
              i
            );
          return c;
        }
        removeSignatureListener(e) {
          return E(this, null, function* () {
            yield this._unsubscribeClientSubscription(e, "signature result");
          });
        }
        _wsOnRootNotification(e) {
          let { result: t, subscription: n } = P(e, il);
          this._handleServerNotification(n, [t]);
        }
        onRootChange(e) {
          return this._makeSubscription(
            {
              callback: e,
              method: "rootSubscribe",
              unsubscribeMethod: "rootUnsubscribe",
            },
            []
          );
        }
        removeRootChangeListener(e) {
          return E(this, null, function* () {
            yield this._unsubscribeClientSubscription(e, "root change");
          });
        }
      }),
      ($r = class r {
        constructor(e) {
          (this._keypair = void 0), (this._keypair = e ?? fa());
        }
        static generate() {
          return new r(fa());
        }
        static fromSecretKey(e, t) {
          if (e.byteLength !== 64) throw new Error("bad secret key size");
          let n = e.slice(32, 64);
          if (!t || !t.skipValidation) {
            let s = e.slice(0, 32),
              o = qr(s);
            for (let i = 0; i < 32; i++)
              if (n[i] !== o[i])
                throw new Error("provided secretKey is invalid");
          }
          return new r({ publicKey: n, secretKey: e });
        }
        static fromSeed(e) {
          let t = qr(e),
            n = new Uint8Array(64);
          return n.set(e), n.set(t, 32), new r({ publicKey: t, secretKey: n });
        }
        get publicKey() {
          return new T(this._keypair.publicKey);
        }
        get secretKey() {
          return new Uint8Array(this._keypair.secretKey);
        }
      }),
      (kt = Object.freeze({
        CreateLookupTable: {
          index: 0,
          layout: f.struct([
            f.u32("instruction"),
            dn("recentSlot"),
            f.u8("bumpSeed"),
          ]),
        },
        FreezeLookupTable: {
          index: 1,
          layout: f.struct([f.u32("instruction")]),
        },
        ExtendLookupTable: {
          index: 2,
          layout: f.struct([
            f.u32("instruction"),
            dn(),
            f.seq(Q(), f.offset(f.u32(), -8), "addresses"),
          ]),
        },
        DeactivateLookupTable: {
          index: 3,
          layout: f.struct([f.u32("instruction")]),
        },
        CloseLookupTable: {
          index: 4,
          layout: f.struct([f.u32("instruction")]),
        },
      })),
      (mo = class {
        constructor() {}
        static decodeInstructionType(e) {
          this.checkProgramId(e.programId);
          let n = f.u32("instruction").decode(e.data),
            s;
          for (let [o, i] of Object.entries(kt))
            if (i.index == n) {
              s = o;
              break;
            }
          if (!s)
            throw new Error(
              "Invalid Instruction. Should be a LookupTable Instruction"
            );
          return s;
        }
        static decodeCreateLookupTable(e) {
          this.checkProgramId(e.programId), this.checkKeysLength(e.keys, 4);
          let { recentSlot: t } = ce(kt.CreateLookupTable, e.data);
          return {
            authority: e.keys[1].pubkey,
            payer: e.keys[2].pubkey,
            recentSlot: Number(t),
          };
        }
        static decodeExtendLookupTable(e) {
          if ((this.checkProgramId(e.programId), e.keys.length < 2))
            throw new Error(
              `invalid instruction; found ${e.keys.length} keys, expected at least 2`
            );
          let { addresses: t } = ce(kt.ExtendLookupTable, e.data);
          return {
            lookupTable: e.keys[0].pubkey,
            authority: e.keys[1].pubkey,
            payer: e.keys.length > 2 ? e.keys[2].pubkey : void 0,
            addresses: t.map((n) => new T(n)),
          };
        }
        static decodeCloseLookupTable(e) {
          return (
            this.checkProgramId(e.programId),
            this.checkKeysLength(e.keys, 3),
            {
              lookupTable: e.keys[0].pubkey,
              authority: e.keys[1].pubkey,
              recipient: e.keys[2].pubkey,
            }
          );
        }
        static decodeFreezeLookupTable(e) {
          return (
            this.checkProgramId(e.programId),
            this.checkKeysLength(e.keys, 2),
            { lookupTable: e.keys[0].pubkey, authority: e.keys[1].pubkey }
          );
        }
        static decodeDeactivateLookupTable(e) {
          return (
            this.checkProgramId(e.programId),
            this.checkKeysLength(e.keys, 2),
            { lookupTable: e.keys[0].pubkey, authority: e.keys[1].pubkey }
          );
        }
        static checkProgramId(e) {
          if (!e.equals(Mn.programId))
            throw new Error(
              "invalid instruction; programId is not AddressLookupTable Program"
            );
        }
        static checkKeysLength(e, t) {
          if (e.length < t)
            throw new Error(
              `invalid instruction; found ${e.length} keys, expected at least ${t}`
            );
        }
      }),
      (Mn = class {
        constructor() {}
        static createLookupTable(e) {
          let [t, n] = T.findProgramAddressSync(
              [
                e.authority.toBuffer(),
                (0, $n.toBufferLE)(BigInt(e.recentSlot), 8),
              ],
              this.programId
            ),
            s = kt.CreateLookupTable,
            o = re(s, { recentSlot: BigInt(e.recentSlot), bumpSeed: n }),
            i = [
              { pubkey: t, isSigner: !1, isWritable: !0 },
              { pubkey: e.authority, isSigner: !0, isWritable: !1 },
              { pubkey: e.payer, isSigner: !0, isWritable: !0 },
              { pubkey: Te.programId, isSigner: !1, isWritable: !1 },
            ];
          return [new fe({ programId: this.programId, keys: i, data: o }), t];
        }
        static freezeLookupTable(e) {
          let t = kt.FreezeLookupTable,
            n = re(t),
            s = [
              { pubkey: e.lookupTable, isSigner: !1, isWritable: !0 },
              { pubkey: e.authority, isSigner: !0, isWritable: !1 },
            ];
          return new fe({ programId: this.programId, keys: s, data: n });
        }
        static extendLookupTable(e) {
          let t = kt.ExtendLookupTable,
            n = re(t, { addresses: e.addresses.map((o) => o.toBytes()) }),
            s = [
              { pubkey: e.lookupTable, isSigner: !1, isWritable: !0 },
              { pubkey: e.authority, isSigner: !0, isWritable: !1 },
            ];
          return (
            e.payer &&
              s.push(
                { pubkey: e.payer, isSigner: !0, isWritable: !0 },
                { pubkey: Te.programId, isSigner: !1, isWritable: !1 }
              ),
            new fe({ programId: this.programId, keys: s, data: n })
          );
        }
        static deactivateLookupTable(e) {
          let t = kt.DeactivateLookupTable,
            n = re(t),
            s = [
              { pubkey: e.lookupTable, isSigner: !1, isWritable: !0 },
              { pubkey: e.authority, isSigner: !0, isWritable: !1 },
            ];
          return new fe({ programId: this.programId, keys: s, data: n });
        }
        static closeLookupTable(e) {
          let t = kt.CloseLookupTable,
            n = re(t),
            s = [
              { pubkey: e.lookupTable, isSigner: !1, isWritable: !0 },
              { pubkey: e.authority, isSigner: !0, isWritable: !1 },
              { pubkey: e.recipient, isSigner: !1, isWritable: !0 },
            ];
          return new fe({ programId: this.programId, keys: s, data: n });
        }
      });
    Mn.programId = new T("AddressLookupTab1e1111111111111111111111111");
    (bo = class {
      constructor() {}
      static decodeInstructionType(e) {
        this.checkProgramId(e.programId);
        let n = f.u8("instruction").decode(e.data),
          s;
        for (let [o, i] of Object.entries(ct))
          if (i.index == n) {
            s = o;
            break;
          }
        if (!s)
          throw new Error(
            "Instruction type incorrect; not a ComputeBudgetInstruction"
          );
        return s;
      }
      static decodeRequestUnits(e) {
        this.checkProgramId(e.programId);
        let { units: t, additionalFee: n } = ce(ct.RequestUnits, e.data);
        return { units: t, additionalFee: n };
      }
      static decodeRequestHeapFrame(e) {
        this.checkProgramId(e.programId);
        let { bytes: t } = ce(ct.RequestHeapFrame, e.data);
        return { bytes: t };
      }
      static decodeSetComputeUnitLimit(e) {
        this.checkProgramId(e.programId);
        let { units: t } = ce(ct.SetComputeUnitLimit, e.data);
        return { units: t };
      }
      static decodeSetComputeUnitPrice(e) {
        this.checkProgramId(e.programId);
        let { microLamports: t } = ce(ct.SetComputeUnitPrice, e.data);
        return { microLamports: t };
      }
      static checkProgramId(e) {
        if (!e.equals(Vn.programId))
          throw new Error(
            "invalid instruction; programId is not ComputeBudgetProgram"
          );
      }
    }),
      (ct = Object.freeze({
        RequestUnits: {
          index: 0,
          layout: f.struct([
            f.u8("instruction"),
            f.u32("units"),
            f.u32("additionalFee"),
          ]),
        },
        RequestHeapFrame: {
          index: 1,
          layout: f.struct([f.u8("instruction"), f.u32("bytes")]),
        },
        SetComputeUnitLimit: {
          index: 2,
          layout: f.struct([f.u8("instruction"), f.u32("units")]),
        },
        SetComputeUnitPrice: {
          index: 3,
          layout: f.struct([f.u8("instruction"), dn("microLamports")]),
        },
      })),
      (Vn = class {
        constructor() {}
        static requestUnits(e) {
          let t = ct.RequestUnits,
            n = re(t, e);
          return new fe({ keys: [], programId: this.programId, data: n });
        }
        static requestHeapFrame(e) {
          let t = ct.RequestHeapFrame,
            n = re(t, e);
          return new fe({ keys: [], programId: this.programId, data: n });
        }
        static setComputeUnitLimit(e) {
          let t = ct.SetComputeUnitLimit,
            n = re(t, e);
          return new fe({ keys: [], programId: this.programId, data: n });
        }
        static setComputeUnitPrice(e) {
          let t = ct.SetComputeUnitPrice,
            n = re(t, { microLamports: BigInt(e.microLamports) });
          return new fe({ keys: [], programId: this.programId, data: n });
        }
      });
    Vn.programId = new T("ComputeBudget111111111111111111111111111111");
    (ka = 64),
      (Sa = 32),
      (Ba = 64),
      (Ea = f.struct([
        f.u8("numSignatures"),
        f.u8("padding"),
        f.u16("signatureOffset"),
        f.u16("signatureInstructionIndex"),
        f.u16("publicKeyOffset"),
        f.u16("publicKeyInstructionIndex"),
        f.u16("messageDataOffset"),
        f.u16("messageDataSize"),
        f.u16("messageInstructionIndex"),
      ])),
      (Fr = class r {
        constructor() {}
        static createInstructionWithPublicKey(e) {
          let {
            publicKey: t,
            message: n,
            signature: s,
            instructionIndex: o,
          } = e;
          ie(
            t.length === Sa,
            `Public Key must be ${Sa} bytes but received ${t.length} bytes`
          ),
            ie(
              s.length === Ba,
              `Signature must be ${Ba} bytes but received ${s.length} bytes`
            );
          let i = Ea.span,
            c = i + t.length,
            a = c + s.length,
            u = 1,
            d = $.Buffer.alloc(a + n.length),
            g = o ?? 65535;
          return (
            Ea.encode(
              {
                numSignatures: u,
                padding: 0,
                signatureOffset: c,
                signatureInstructionIndex: g,
                publicKeyOffset: i,
                publicKeyInstructionIndex: g,
                messageDataOffset: a,
                messageDataSize: n.length,
                messageInstructionIndex: g,
              },
              d
            ),
            d.fill(t, i),
            d.fill(s, c),
            d.fill(n, a),
            new fe({ keys: [], programId: r.programId, data: d })
          );
        }
        static createInstructionWithPrivateKey(e) {
          let { privateKey: t, message: n, instructionIndex: s } = e;
          ie(
            t.length === ka,
            `Private key must be ${ka} bytes but received ${t.length} bytes`
          );
          try {
            let o = $r.fromSecretKey(t),
              i = o.publicKey.toBytes(),
              c = Eo(n, o.secretKey);
            return this.createInstructionWithPublicKey({
              publicKey: i,
              message: n,
              signature: c,
              instructionIndex: s,
            });
          } catch (o) {
            throw new Error(`Error creating instruction; ${o}`);
          }
        }
      });
    Fr.programId = new T("Ed25519SigVerify111111111111111111111111111");
    Tl = (r, e) => {
      let t = Nr.sign(r, e);
      return [t.toCompactRawBytes(), t.recovery];
    };
    Nr.utils.isValidPrivateKey;
    (Cl = Nr.getPublicKey),
      (Ia = 32),
      (Qs = 20),
      (va = 64),
      (Ol = 11),
      (eo = f.struct([
        f.u8("numSignatures"),
        f.u16("signatureOffset"),
        f.u8("signatureInstructionIndex"),
        f.u16("ethAddressOffset"),
        f.u8("ethAddressInstructionIndex"),
        f.u16("messageDataOffset"),
        f.u16("messageDataSize"),
        f.u8("messageInstructionIndex"),
        f.blob(20, "ethAddress"),
        f.blob(64, "signature"),
        f.u8("recoveryId"),
      ])),
      (jr = class r {
        constructor() {}
        static publicKeyToEthAddress(e) {
          ie(
            e.length === va,
            `Public key must be ${va} bytes but received ${e.length} bytes`
          );
          try {
            return $.Buffer.from(os(X(e))).slice(-Qs);
          } catch (t) {
            throw new Error(`Error constructing Ethereum address: ${t}`);
          }
        }
        static createInstructionWithPublicKey(e) {
          let {
            publicKey: t,
            message: n,
            signature: s,
            recoveryId: o,
            instructionIndex: i,
          } = e;
          return r.createInstructionWithEthAddress({
            ethAddress: r.publicKeyToEthAddress(t),
            message: n,
            signature: s,
            recoveryId: o,
            instructionIndex: i,
          });
        }
        static createInstructionWithEthAddress(e) {
          let {
              ethAddress: t,
              message: n,
              signature: s,
              recoveryId: o,
              instructionIndex: i = 0,
            } = e,
            c;
          typeof t == "string"
            ? t.startsWith("0x")
              ? (c = $.Buffer.from(t.substr(2), "hex"))
              : (c = $.Buffer.from(t, "hex"))
            : (c = t),
            ie(
              c.length === Qs,
              `Address must be ${Qs} bytes but received ${c.length} bytes`
            );
          let a = 1 + Ol,
            u = a,
            d = a + c.length,
            g = d + s.length + 1,
            y = 1,
            l = $.Buffer.alloc(eo.span + n.length);
          return (
            eo.encode(
              {
                numSignatures: y,
                signatureOffset: d,
                signatureInstructionIndex: i,
                ethAddressOffset: u,
                ethAddressInstructionIndex: i,
                messageDataOffset: g,
                messageDataSize: n.length,
                messageInstructionIndex: i,
                signature: X(s),
                ethAddress: X(c),
                recoveryId: o,
              },
              l
            ),
            l.fill(X(n), eo.span),
            new fe({ keys: [], programId: r.programId, data: l })
          );
        }
        static createInstructionWithPrivateKey(e) {
          let { privateKey: t, message: n, instructionIndex: s } = e;
          ie(
            t.length === Ia,
            `Private key must be ${Ia} bytes but received ${t.length} bytes`
          );
          try {
            let o = X(t),
              i = Cl(o, !1).slice(1),
              c = $.Buffer.from(os(X(n))),
              [a, u] = Tl(c, o);
            return this.createInstructionWithPublicKey({
              publicKey: i,
              message: n,
              signature: a,
              recoveryId: u,
              instructionIndex: s,
            });
          } catch (o) {
            throw new Error(`Error creating instruction; ${o}`);
          }
        }
      });
    jr.programId = new T("KeccakSecp256k11111111111111111111111111111");
    (Ya = new T("StakeConfig11111111111111111111111111111111")),
      (Hr = class {
        constructor(e, t) {
          (this.staker = void 0),
            (this.withdrawer = void 0),
            (this.staker = e),
            (this.withdrawer = t);
        }
      }),
      (jt = class {
        constructor(e, t, n) {
          (this.unixTimestamp = void 0),
            (this.epoch = void 0),
            (this.custodian = void 0),
            (this.unixTimestamp = e),
            (this.epoch = t),
            (this.custodian = n);
        }
      });
    Ga = jt;
    jt.default = new Ga(0, 0, T.default);
    (wo = class {
      constructor() {}
      static decodeInstructionType(e) {
        this.checkProgramId(e.programId);
        let n = f.u32("instruction").decode(e.data),
          s;
        for (let [o, i] of Object.entries(Ae))
          if (i.index == n) {
            s = o;
            break;
          }
        if (!s)
          throw new Error("Instruction type incorrect; not a StakeInstruction");
        return s;
      }
      static decodeInitialize(e) {
        this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 2);
        let { authorized: t, lockup: n } = ce(Ae.Initialize, e.data);
        return {
          stakePubkey: e.keys[0].pubkey,
          authorized: new Hr(new T(t.staker), new T(t.withdrawer)),
          lockup: new jt(n.unixTimestamp, n.epoch, new T(n.custodian)),
        };
      }
      static decodeDelegate(e) {
        return (
          this.checkProgramId(e.programId),
          this.checkKeyLength(e.keys, 6),
          ce(Ae.Delegate, e.data),
          {
            stakePubkey: e.keys[0].pubkey,
            votePubkey: e.keys[1].pubkey,
            authorizedPubkey: e.keys[5].pubkey,
          }
        );
      }
      static decodeAuthorize(e) {
        this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 3);
        let { newAuthorized: t, stakeAuthorizationType: n } = ce(
            Ae.Authorize,
            e.data
          ),
          s = {
            stakePubkey: e.keys[0].pubkey,
            authorizedPubkey: e.keys[2].pubkey,
            newAuthorizedPubkey: new T(t),
            stakeAuthorizationType: { index: n },
          };
        return e.keys.length > 3 && (s.custodianPubkey = e.keys[3].pubkey), s;
      }
      static decodeAuthorizeWithSeed(e) {
        this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 2);
        let {
            newAuthorized: t,
            stakeAuthorizationType: n,
            authoritySeed: s,
            authorityOwner: o,
          } = ce(Ae.AuthorizeWithSeed, e.data),
          i = {
            stakePubkey: e.keys[0].pubkey,
            authorityBase: e.keys[1].pubkey,
            authoritySeed: s,
            authorityOwner: new T(o),
            newAuthorizedPubkey: new T(t),
            stakeAuthorizationType: { index: n },
          };
        return e.keys.length > 3 && (i.custodianPubkey = e.keys[3].pubkey), i;
      }
      static decodeSplit(e) {
        this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 3);
        let { lamports: t } = ce(Ae.Split, e.data);
        return {
          stakePubkey: e.keys[0].pubkey,
          splitStakePubkey: e.keys[1].pubkey,
          authorizedPubkey: e.keys[2].pubkey,
          lamports: t,
        };
      }
      static decodeMerge(e) {
        return (
          this.checkProgramId(e.programId),
          this.checkKeyLength(e.keys, 3),
          ce(Ae.Merge, e.data),
          {
            stakePubkey: e.keys[0].pubkey,
            sourceStakePubKey: e.keys[1].pubkey,
            authorizedPubkey: e.keys[4].pubkey,
          }
        );
      }
      static decodeWithdraw(e) {
        this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 5);
        let { lamports: t } = ce(Ae.Withdraw, e.data),
          n = {
            stakePubkey: e.keys[0].pubkey,
            toPubkey: e.keys[1].pubkey,
            authorizedPubkey: e.keys[4].pubkey,
            lamports: t,
          };
        return e.keys.length > 5 && (n.custodianPubkey = e.keys[5].pubkey), n;
      }
      static decodeDeactivate(e) {
        return (
          this.checkProgramId(e.programId),
          this.checkKeyLength(e.keys, 3),
          ce(Ae.Deactivate, e.data),
          { stakePubkey: e.keys[0].pubkey, authorizedPubkey: e.keys[2].pubkey }
        );
      }
      static checkProgramId(e) {
        if (!e.equals(hn.programId))
          throw new Error("invalid instruction; programId is not StakeProgram");
      }
      static checkKeyLength(e, t) {
        if (e.length < t)
          throw new Error(
            `invalid instruction; found ${e.length} keys, expected at least ${t}`
          );
      }
    }),
      (Ae = Object.freeze({
        Initialize: {
          index: 0,
          layout: f.struct([f.u32("instruction"), Mu(), Vu()]),
        },
        Authorize: {
          index: 1,
          layout: f.struct([
            f.u32("instruction"),
            Q("newAuthorized"),
            f.u32("stakeAuthorizationType"),
          ]),
        },
        Delegate: { index: 2, layout: f.struct([f.u32("instruction")]) },
        Split: {
          index: 3,
          layout: f.struct([f.u32("instruction"), f.ns64("lamports")]),
        },
        Withdraw: {
          index: 4,
          layout: f.struct([f.u32("instruction"), f.ns64("lamports")]),
        },
        Deactivate: { index: 5, layout: f.struct([f.u32("instruction")]) },
        Merge: { index: 7, layout: f.struct([f.u32("instruction")]) },
        AuthorizeWithSeed: {
          index: 8,
          layout: f.struct([
            f.u32("instruction"),
            Q("newAuthorized"),
            f.u32("stakeAuthorizationType"),
            Vt("authoritySeed"),
            Q("authorityOwner"),
          ]),
        },
      })),
      (Nl = Object.freeze({ Staker: { index: 0 }, Withdrawer: { index: 1 } })),
      (hn = class {
        constructor() {}
        static initialize(e) {
          let { stakePubkey: t, authorized: n, lockup: s } = e,
            o = s || jt.default,
            i = Ae.Initialize,
            c = re(i, {
              authorized: {
                staker: X(n.staker.toBuffer()),
                withdrawer: X(n.withdrawer.toBuffer()),
              },
              lockup: {
                unixTimestamp: o.unixTimestamp,
                epoch: o.epoch,
                custodian: X(o.custodian.toBuffer()),
              },
            }),
            a = {
              keys: [
                { pubkey: t, isSigner: !1, isWritable: !0 },
                { pubkey: ln, isSigner: !1, isWritable: !1 },
              ],
              programId: this.programId,
              data: c,
            };
          return new fe(a);
        }
        static createAccountWithSeed(e) {
          let t = new ue();
          t.add(
            Te.createAccountWithSeed({
              fromPubkey: e.fromPubkey,
              newAccountPubkey: e.stakePubkey,
              basePubkey: e.basePubkey,
              seed: e.seed,
              lamports: e.lamports,
              space: this.space,
              programId: this.programId,
            })
          );
          let { stakePubkey: n, authorized: s, lockup: o } = e;
          return t.add(
            this.initialize({ stakePubkey: n, authorized: s, lockup: o })
          );
        }
        static createAccount(e) {
          let t = new ue();
          t.add(
            Te.createAccount({
              fromPubkey: e.fromPubkey,
              newAccountPubkey: e.stakePubkey,
              lamports: e.lamports,
              space: this.space,
              programId: this.programId,
            })
          );
          let { stakePubkey: n, authorized: s, lockup: o } = e;
          return t.add(
            this.initialize({ stakePubkey: n, authorized: s, lockup: o })
          );
        }
        static delegate(e) {
          let { stakePubkey: t, authorizedPubkey: n, votePubkey: s } = e,
            o = Ae.Delegate,
            i = re(o);
          return new ue().add({
            keys: [
              { pubkey: t, isSigner: !1, isWritable: !0 },
              { pubkey: s, isSigner: !1, isWritable: !1 },
              { pubkey: it, isSigner: !1, isWritable: !1 },
              { pubkey: Kr, isSigner: !1, isWritable: !1 },
              { pubkey: Ya, isSigner: !1, isWritable: !1 },
              { pubkey: n, isSigner: !0, isWritable: !1 },
            ],
            programId: this.programId,
            data: i,
          });
        }
        static authorize(e) {
          let {
              stakePubkey: t,
              authorizedPubkey: n,
              newAuthorizedPubkey: s,
              stakeAuthorizationType: o,
              custodianPubkey: i,
            } = e,
            c = Ae.Authorize,
            a = re(c, {
              newAuthorized: X(s.toBuffer()),
              stakeAuthorizationType: o.index,
            }),
            u = [
              { pubkey: t, isSigner: !1, isWritable: !0 },
              { pubkey: it, isSigner: !1, isWritable: !0 },
              { pubkey: n, isSigner: !0, isWritable: !1 },
            ];
          return (
            i && u.push({ pubkey: i, isSigner: !0, isWritable: !1 }),
            new ue().add({ keys: u, programId: this.programId, data: a })
          );
        }
        static authorizeWithSeed(e) {
          let {
              stakePubkey: t,
              authorityBase: n,
              authoritySeed: s,
              authorityOwner: o,
              newAuthorizedPubkey: i,
              stakeAuthorizationType: c,
              custodianPubkey: a,
            } = e,
            u = Ae.AuthorizeWithSeed,
            d = re(u, {
              newAuthorized: X(i.toBuffer()),
              stakeAuthorizationType: c.index,
              authoritySeed: s,
              authorityOwner: X(o.toBuffer()),
            }),
            g = [
              { pubkey: t, isSigner: !1, isWritable: !0 },
              { pubkey: n, isSigner: !0, isWritable: !1 },
              { pubkey: it, isSigner: !1, isWritable: !1 },
            ];
          return (
            a && g.push({ pubkey: a, isSigner: !0, isWritable: !1 }),
            new ue().add({ keys: g, programId: this.programId, data: d })
          );
        }
        static splitInstruction(e) {
          let {
              stakePubkey: t,
              authorizedPubkey: n,
              splitStakePubkey: s,
              lamports: o,
            } = e,
            i = Ae.Split,
            c = re(i, { lamports: o });
          return new fe({
            keys: [
              { pubkey: t, isSigner: !1, isWritable: !0 },
              { pubkey: s, isSigner: !1, isWritable: !0 },
              { pubkey: n, isSigner: !0, isWritable: !1 },
            ],
            programId: this.programId,
            data: c,
          });
        }
        static split(e, t) {
          let n = new ue();
          return (
            n.add(
              Te.createAccount({
                fromPubkey: e.authorizedPubkey,
                newAccountPubkey: e.splitStakePubkey,
                lamports: t,
                space: this.space,
                programId: this.programId,
              })
            ),
            n.add(this.splitInstruction(e))
          );
        }
        static splitWithSeed(e, t) {
          let {
              stakePubkey: n,
              authorizedPubkey: s,
              splitStakePubkey: o,
              basePubkey: i,
              seed: c,
              lamports: a,
            } = e,
            u = new ue();
          return (
            u.add(
              Te.allocate({
                accountPubkey: o,
                basePubkey: i,
                seed: c,
                space: this.space,
                programId: this.programId,
              })
            ),
            t &&
              t > 0 &&
              u.add(
                Te.transfer({
                  fromPubkey: e.authorizedPubkey,
                  toPubkey: o,
                  lamports: t,
                })
              ),
            u.add(
              this.splitInstruction({
                stakePubkey: n,
                authorizedPubkey: s,
                splitStakePubkey: o,
                lamports: a,
              })
            )
          );
        }
        static merge(e) {
          let { stakePubkey: t, sourceStakePubKey: n, authorizedPubkey: s } = e,
            o = Ae.Merge,
            i = re(o);
          return new ue().add({
            keys: [
              { pubkey: t, isSigner: !1, isWritable: !0 },
              { pubkey: n, isSigner: !1, isWritable: !0 },
              { pubkey: it, isSigner: !1, isWritable: !1 },
              { pubkey: Kr, isSigner: !1, isWritable: !1 },
              { pubkey: s, isSigner: !0, isWritable: !1 },
            ],
            programId: this.programId,
            data: i,
          });
        }
        static withdraw(e) {
          let {
              stakePubkey: t,
              authorizedPubkey: n,
              toPubkey: s,
              lamports: o,
              custodianPubkey: i,
            } = e,
            c = Ae.Withdraw,
            a = re(c, { lamports: o }),
            u = [
              { pubkey: t, isSigner: !1, isWritable: !0 },
              { pubkey: s, isSigner: !1, isWritable: !0 },
              { pubkey: it, isSigner: !1, isWritable: !1 },
              { pubkey: Kr, isSigner: !1, isWritable: !1 },
              { pubkey: n, isSigner: !0, isWritable: !1 },
            ];
          return (
            i && u.push({ pubkey: i, isSigner: !0, isWritable: !1 }),
            new ue().add({ keys: u, programId: this.programId, data: a })
          );
        }
        static deactivate(e) {
          let { stakePubkey: t, authorizedPubkey: n } = e,
            s = Ae.Deactivate,
            o = re(s);
          return new ue().add({
            keys: [
              { pubkey: t, isSigner: !1, isWritable: !0 },
              { pubkey: it, isSigner: !1, isWritable: !1 },
              { pubkey: n, isSigner: !0, isWritable: !1 },
            ],
            programId: this.programId,
            data: o,
          });
        }
      });
    hn.programId = new T("Stake11111111111111111111111111111111111111");
    hn.space = 200;
    (Gr = class {
      constructor(e, t, n, s) {
        (this.nodePubkey = void 0),
          (this.authorizedVoter = void 0),
          (this.authorizedWithdrawer = void 0),
          (this.commission = void 0),
          (this.nodePubkey = e),
          (this.authorizedVoter = t),
          (this.authorizedWithdrawer = n),
          (this.commission = s);
      }
    }),
      (ko = class {
        constructor() {}
        static decodeInstructionType(e) {
          this.checkProgramId(e.programId);
          let n = f.u32("instruction").decode(e.data),
            s;
          for (let [o, i] of Object.entries(ut))
            if (i.index == n) {
              s = o;
              break;
            }
          if (!s)
            throw new Error(
              "Instruction type incorrect; not a VoteInstruction"
            );
          return s;
        }
        static decodeInitializeAccount(e) {
          this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 4);
          let { voteInit: t } = ce(ut.InitializeAccount, e.data);
          return {
            votePubkey: e.keys[0].pubkey,
            nodePubkey: e.keys[3].pubkey,
            voteInit: new Gr(
              new T(t.nodePubkey),
              new T(t.authorizedVoter),
              new T(t.authorizedWithdrawer),
              t.commission
            ),
          };
        }
        static decodeAuthorize(e) {
          this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 3);
          let { newAuthorized: t, voteAuthorizationType: n } = ce(
            ut.Authorize,
            e.data
          );
          return {
            votePubkey: e.keys[0].pubkey,
            authorizedPubkey: e.keys[2].pubkey,
            newAuthorizedPubkey: new T(t),
            voteAuthorizationType: { index: n },
          };
        }
        static decodeAuthorizeWithSeed(e) {
          this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 3);
          let {
            voteAuthorizeWithSeedArgs: {
              currentAuthorityDerivedKeyOwnerPubkey: t,
              currentAuthorityDerivedKeySeed: n,
              newAuthorized: s,
              voteAuthorizationType: o,
            },
          } = ce(ut.AuthorizeWithSeed, e.data);
          return {
            currentAuthorityDerivedKeyBasePubkey: e.keys[2].pubkey,
            currentAuthorityDerivedKeyOwnerPubkey: new T(t),
            currentAuthorityDerivedKeySeed: n,
            newAuthorizedPubkey: new T(s),
            voteAuthorizationType: { index: o },
            votePubkey: e.keys[0].pubkey,
          };
        }
        static decodeWithdraw(e) {
          this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 3);
          let { lamports: t } = ce(ut.Withdraw, e.data);
          return {
            votePubkey: e.keys[0].pubkey,
            authorizedWithdrawerPubkey: e.keys[2].pubkey,
            lamports: t,
            toPubkey: e.keys[1].pubkey,
          };
        }
        static checkProgramId(e) {
          if (!e.equals(yn.programId))
            throw new Error(
              "invalid instruction; programId is not VoteProgram"
            );
        }
        static checkKeyLength(e, t) {
          if (e.length < t)
            throw new Error(
              `invalid instruction; found ${e.length} keys, expected at least ${t}`
            );
        }
      }),
      (ut = Object.freeze({
        InitializeAccount: {
          index: 0,
          layout: f.struct([f.u32("instruction"), $u()]),
        },
        Authorize: {
          index: 1,
          layout: f.struct([
            f.u32("instruction"),
            Q("newAuthorized"),
            f.u32("voteAuthorizationType"),
          ]),
        },
        Withdraw: {
          index: 3,
          layout: f.struct([f.u32("instruction"), f.ns64("lamports")]),
        },
        UpdateValidatorIdentity: {
          index: 4,
          layout: f.struct([f.u32("instruction")]),
        },
        AuthorizeWithSeed: {
          index: 10,
          layout: f.struct([f.u32("instruction"), Fu()]),
        },
      })),
      (Ul = Object.freeze({ Voter: { index: 0 }, Withdrawer: { index: 1 } })),
      (yn = class r {
        constructor() {}
        static initializeAccount(e) {
          let { votePubkey: t, nodePubkey: n, voteInit: s } = e,
            o = ut.InitializeAccount,
            i = re(o, {
              voteInit: {
                nodePubkey: X(s.nodePubkey.toBuffer()),
                authorizedVoter: X(s.authorizedVoter.toBuffer()),
                authorizedWithdrawer: X(s.authorizedWithdrawer.toBuffer()),
                commission: s.commission,
              },
            }),
            c = {
              keys: [
                { pubkey: t, isSigner: !1, isWritable: !0 },
                { pubkey: ln, isSigner: !1, isWritable: !1 },
                { pubkey: it, isSigner: !1, isWritable: !1 },
                { pubkey: n, isSigner: !0, isWritable: !1 },
              ],
              programId: this.programId,
              data: i,
            };
          return new fe(c);
        }
        static createAccount(e) {
          let t = new ue();
          return (
            t.add(
              Te.createAccount({
                fromPubkey: e.fromPubkey,
                newAccountPubkey: e.votePubkey,
                lamports: e.lamports,
                space: this.space,
                programId: this.programId,
              })
            ),
            t.add(
              this.initializeAccount({
                votePubkey: e.votePubkey,
                nodePubkey: e.voteInit.nodePubkey,
                voteInit: e.voteInit,
              })
            )
          );
        }
        static authorize(e) {
          let {
              votePubkey: t,
              authorizedPubkey: n,
              newAuthorizedPubkey: s,
              voteAuthorizationType: o,
            } = e,
            i = ut.Authorize,
            c = re(i, {
              newAuthorized: X(s.toBuffer()),
              voteAuthorizationType: o.index,
            }),
            a = [
              { pubkey: t, isSigner: !1, isWritable: !0 },
              { pubkey: it, isSigner: !1, isWritable: !1 },
              { pubkey: n, isSigner: !0, isWritable: !1 },
            ];
          return new ue().add({ keys: a, programId: this.programId, data: c });
        }
        static authorizeWithSeed(e) {
          let {
              currentAuthorityDerivedKeyBasePubkey: t,
              currentAuthorityDerivedKeyOwnerPubkey: n,
              currentAuthorityDerivedKeySeed: s,
              newAuthorizedPubkey: o,
              voteAuthorizationType: i,
              votePubkey: c,
            } = e,
            a = ut.AuthorizeWithSeed,
            u = re(a, {
              voteAuthorizeWithSeedArgs: {
                currentAuthorityDerivedKeyOwnerPubkey: X(n.toBuffer()),
                currentAuthorityDerivedKeySeed: s,
                newAuthorized: X(o.toBuffer()),
                voteAuthorizationType: i.index,
              },
            }),
            d = [
              { pubkey: c, isSigner: !1, isWritable: !0 },
              { pubkey: it, isSigner: !1, isWritable: !1 },
              { pubkey: t, isSigner: !0, isWritable: !1 },
            ];
          return new ue().add({ keys: d, programId: this.programId, data: u });
        }
        static withdraw(e) {
          let {
              votePubkey: t,
              authorizedWithdrawerPubkey: n,
              lamports: s,
              toPubkey: o,
            } = e,
            i = ut.Withdraw,
            c = re(i, { lamports: s }),
            a = [
              { pubkey: t, isSigner: !1, isWritable: !0 },
              { pubkey: o, isSigner: !1, isWritable: !0 },
              { pubkey: n, isSigner: !0, isWritable: !1 },
            ];
          return new ue().add({ keys: a, programId: this.programId, data: c });
        }
        static safeWithdraw(e, t, n) {
          if (e.lamports > t - n)
            throw new Error(
              "Withdraw will leave vote account with insufficient funds."
            );
          return r.withdraw(e);
        }
        static updateValidatorIdentity(e) {
          let {
              votePubkey: t,
              authorizedWithdrawerPubkey: n,
              nodePubkey: s,
            } = e,
            o = ut.UpdateValidatorIdentity,
            i = re(o),
            c = [
              { pubkey: t, isSigner: !1, isWritable: !0 },
              { pubkey: s, isSigner: !0, isWritable: !1 },
              { pubkey: n, isSigner: !0, isWritable: !1 },
            ];
          return new ue().add({ keys: c, programId: this.programId, data: i });
        }
      });
    yn.programId = new T("Vote111111111111111111111111111111111111111");
    yn.space = 3762;
    (Za = new T("Va1idator1nfo111111111111111111111111111111")),
      (zl = v({
        name: A(),
        website: D(A()),
        details: D(A()),
        iconUrl: D(A()),
        keybaseUsername: D(A()),
      })),
      (So = class r {
        constructor(e, t) {
          (this.key = void 0),
            (this.info = void 0),
            (this.key = e),
            (this.info = t);
        }
        static fromConfigData(e) {
          let t = [...e];
          if (He(t) !== 2) return null;
          let s = [];
          for (let o = 0; o < 2; o++) {
            let i = new T(Ge(t, 0, ft)),
              c = at(t) === 1;
            s.push({ publicKey: i, isSigner: c });
          }
          if (s[0].publicKey.equals(Za) && s[1].isSigner) {
            let o = Vt().decode($.Buffer.from(t)),
              i = JSON.parse(o);
            return Ts(i, zl), new r(s[1].publicKey, i);
          }
          return null;
        }
      }),
      (Kl = new T("Vote111111111111111111111111111111111111111")),
      (ql = f.struct([
        Q("nodePubkey"),
        Q("authorizedWithdrawer"),
        f.u8("commission"),
        f.nu64(),
        f.seq(
          f.struct([f.nu64("slot"), f.u32("confirmationCount")]),
          f.offset(f.u32(), -8),
          "votes"
        ),
        f.u8("rootSlotValid"),
        f.nu64("rootSlot"),
        f.nu64(),
        f.seq(
          f.struct([f.nu64("epoch"), Q("authorizedVoter")]),
          f.offset(f.u32(), -8),
          "authorizedVoters"
        ),
        f.struct(
          [
            f.seq(
              f.struct([
                Q("authorizedPubkey"),
                f.nu64("epochOfLastAuthorizedSwitch"),
                f.nu64("targetEpoch"),
              ]),
              32,
              "buf"
            ),
            f.nu64("idx"),
            f.u8("isEmpty"),
          ],
          "priorVoters"
        ),
        f.nu64(),
        f.seq(
          f.struct([f.nu64("epoch"), f.nu64("credits"), f.nu64("prevCredits")]),
          f.offset(f.u32(), -8),
          "epochCredits"
        ),
        f.struct([f.nu64("slot"), f.nu64("timestamp")], "lastTimestamp"),
      ])),
      (Bo = class r {
        constructor(e) {
          (this.nodePubkey = void 0),
            (this.authorizedWithdrawer = void 0),
            (this.commission = void 0),
            (this.rootSlot = void 0),
            (this.votes = void 0),
            (this.authorizedVoters = void 0),
            (this.priorVoters = void 0),
            (this.epochCredits = void 0),
            (this.lastTimestamp = void 0),
            (this.nodePubkey = e.nodePubkey),
            (this.authorizedWithdrawer = e.authorizedWithdrawer),
            (this.commission = e.commission),
            (this.rootSlot = e.rootSlot),
            (this.votes = e.votes),
            (this.authorizedVoters = e.authorizedVoters),
            (this.priorVoters = e.priorVoters),
            (this.epochCredits = e.epochCredits),
            (this.lastTimestamp = e.lastTimestamp);
        }
        static fromAccountData(e) {
          let n = ql.decode(X(e), 4),
            s = n.rootSlot;
          return (
            n.rootSlotValid || (s = null),
            new r({
              nodePubkey: new T(n.nodePubkey),
              authorizedWithdrawer: new T(n.authorizedWithdrawer),
              commission: n.commission,
              votes: n.votes,
              rootSlot: s,
              authorizedVoters: n.authorizedVoters.map(Wl),
              priorVoters: Dl(n.priorVoters),
              epochCredits: n.epochCredits,
              lastTimestamp: n.lastTimestamp,
            })
          );
        }
      });
    xa = {
      http: {
        devnet: "http://api.devnet.solana.com",
        testnet: "http://api.testnet.solana.com",
        "mainnet-beta": "http://api.mainnet-beta.solana.com/",
      },
      https: {
        devnet: "https://api.devnet.solana.com",
        testnet: "https://api.testnet.solana.com",
        "mainnet-beta": "https://api.mainnet-beta.solana.com/",
      },
    };
    $l = 1e9;
  });
export {
  Ss as a,
  Rs as b,
  bi as c,
  Un as d,
  no as e,
  Nn as f,
  Pa as g,
  ft as h,
  T as i,
  ro as j,
  Wu as k,
  Tt as l,
  Yr as m,
  zn as n,
  Kn as o,
  qn as p,
  Pt as q,
  $t as r,
  lt as s,
  fn as t,
  Io as u,
  wt as v,
  fe as w,
  ue as x,
  so as y,
  oo as z,
  it as A,
  Zu as B,
  Xu as C,
  zr as D,
  ln as E,
  Ju as F,
  Qu as G,
  ef as H,
  Kr as I,
  Ft as J,
  tf as K,
  z as L,
  io as M,
  Na as N,
  ao as O,
  Dr as P,
  co as Q,
  pe as R,
  Te as S,
  uo as T,
  of as U,
  fo as V,
  Mr as W,
  Wn as X,
  Ka as Y,
  go as Z,
  $r as _,
  kt as $,
  mo as aa,
  Mn as ba,
  bo as ca,
  ct as da,
  Vn as ea,
  Fr as fa,
  jr as ga,
  Ya as ha,
  Hr as ia,
  jt as ja,
  wo as ka,
  Ae as la,
  Nl as ma,
  hn as na,
  Gr as oa,
  ko as pa,
  Ul as qa,
  yn as ra,
  Za as sa,
  So as ta,
  Kl as ua,
  Bo as va,
  Ml as wa,
  Vl as xa,
  $l as ya,
  Fl as za,
  jl as Aa,
};
