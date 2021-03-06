import t from "react";
import e from "react-dom";

function n(t, e) {
    var n = Object.keys(t);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(t);
        e && (r = r.filter((function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable
        }))), n.push.apply(n, r)
    }
    return n
}

function r(t) {
    for (var e = 1; e < arguments.length; e++) {
        var r = null != arguments[e] ? arguments[e] : {};
        e % 2 ? n(Object(r), !0).forEach((function (e) {
            l(t, e, r[e])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : n(Object(r)).forEach((function (e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
        }))
    }
    return t
}

function a(t) {
    return (a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
        return typeof t
    } : function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    })(t)
}

function o(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
}

function i(t, e) {
    for (var n = 0; n < e.length; n++) {
        var r = e[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
    }
}

function l(t, e, n) {
    return e in t ? Object.defineProperty(t, e, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[e] = n, t
}

function s(t, e) {
    return function (t) {
        if (Array.isArray(t)) return t
    }(t) || function (t, e) {
        var n = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
        if (null == n) return;
        var r, a, o = [],
            i = !0,
            l = !1;
        try {
            for (n = n.call(t); !(i = (r = n.next()).done) && (o.push(r.value), !e || o.length !== e); i = !0);
        } catch (t) {
            l = !0, a = t
        } finally {
            try {
                i || null == n.return || n.return()
            } finally {
                if (l) throw a
            }
        }
        return o
    }(t, e) || function (t, e) {
        if (!t) return;
        if ("string" == typeof t) return c(t, e);
        var n = Object.prototype.toString.call(t).slice(8, -1);
        "Object" === n && t.constructor && (n = t.constructor.name);
        if ("Map" === n || "Set" === n) return Array.from(t);
        if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return c(t, e)
    }(t, e) || function () {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
    }()
}

function c(t, e) {
    (null == e || e > t.length) && (e = t.length);
    for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
    return r
}
var u = {
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
    yellowgreen: [154, 205, 50]
};
const h = {};
for (const t of Object.keys(u)) h[u[t]] = t;
const f = {
    rgb: {
        channels: 3,
        labels: "rgb"
    },
    hsl: {
        channels: 3,
        labels: "hsl"
    },
    hsv: {
        channels: 3,
        labels: "hsv"
    },
    hwb: {
        channels: 3,
        labels: "hwb"
    },
    cmyk: {
        channels: 4,
        labels: "cmyk"
    },
    xyz: {
        channels: 3,
        labels: "xyz"
    },
    lab: {
        channels: 3,
        labels: "lab"
    },
    lch: {
        channels: 3,
        labels: "lch"
    },
    hex: {
        channels: 1,
        labels: ["hex"]
    },
    keyword: {
        channels: 1,
        labels: ["keyword"]
    },
    ansi16: {
        channels: 1,
        labels: ["ansi16"]
    },
    ansi256: {
        channels: 1,
        labels: ["ansi256"]
    },
    hcg: {
        channels: 3,
        labels: ["h", "c", "g"]
    },
    apple: {
        channels: 3,
        labels: ["r16", "g16", "b16"]
    },
    gray: {
        channels: 1,
        labels: ["gray"]
    }
};
var d = f;
for (const t of Object.keys(f)) {
    if (!("channels" in f[t])) throw new Error("missing channels property: " + t);
    if (!("labels" in f[t])) throw new Error("missing channel labels property: " + t);
    if (f[t].labels.length !== f[t].channels) throw new Error("channel and label counts mismatch: " + t);
    const {
        channels: e,
        labels: n
    } = f[t];
    delete f[t].channels, delete f[t].labels, Object.defineProperty(f[t], "channels", {
        value: e
    }), Object.defineProperty(f[t], "labels", {
        value: n
    })
}

function g(t) {
    const e = function () {
            const t = {},
                e = Object.keys(d);
            for (let n = e.length, r = 0; r < n; r++) t[e[r]] = {
                distance: -1,
                parent: null
            };
            return t
        }(),
        n = [t];
    for (e[t].distance = 0; n.length;) {
        const t = n.pop(),
            r = Object.keys(d[t]);
        for (let a = r.length, o = 0; o < a; o++) {
            const a = r[o],
                i = e[a]; - 1 === i.distance && (i.distance = e[t].distance + 1, i.parent = t, n.unshift(a))
        }
    }
    return e
}

function b(t, e) {
    return function (n) {
        return e(t(n))
    }
}

function y(t, e) {
    const n = [e[t].parent, t];
    let r = d[e[t].parent][t],
        a = e[t].parent;
    for (; e[a].parent;) n.unshift(e[a].parent), r = b(d[e[a].parent][a], r), a = e[a].parent;
    return r.conversion = n, r
}
f.rgb.hsl = function (t) {
    const e = t[0] / 255,
        n = t[1] / 255,
        r = t[2] / 255,
        a = Math.min(e, n, r),
        o = Math.max(e, n, r),
        i = o - a;
    let l, s;
    o === a ? l = 0 : e === o ? l = (n - r) / i : n === o ? l = 2 + (r - e) / i : r === o && (l = 4 + (e - n) / i), l = Math.min(60 * l, 360), l < 0 && (l += 360);
    const c = (a + o) / 2;
    return s = o === a ? 0 : c <= .5 ? i / (o + a) : i / (2 - o - a), [l, 100 * s, 100 * c]
}, f.rgb.hsv = function (t) {
    let e, n, r, a, o;
    const i = t[0] / 255,
        l = t[1] / 255,
        s = t[2] / 255,
        c = Math.max(i, l, s),
        u = c - Math.min(i, l, s),
        h = function (t) {
            return (c - t) / 6 / u + .5
        };
    return 0 === u ? (a = 0, o = 0) : (o = u / c, e = h(i), n = h(l), r = h(s), i === c ? a = r - n : l === c ? a = 1 / 3 + e - r : s === c && (a = 2 / 3 + n - e), a < 0 ? a += 1 : a > 1 && (a -= 1)), [360 * a, 100 * o, 100 * c]
}, f.rgb.hwb = function (t) {
    const e = t[0],
        n = t[1];
    let r = t[2];
    const a = f.rgb.hsl(t)[0],
        o = 1 / 255 * Math.min(e, Math.min(n, r));
    return r = 1 - 1 / 255 * Math.max(e, Math.max(n, r)), [a, 100 * o, 100 * r]
}, f.rgb.cmyk = function (t) {
    const e = t[0] / 255,
        n = t[1] / 255,
        r = t[2] / 255,
        a = Math.min(1 - e, 1 - n, 1 - r);
    return [100 * ((1 - e - a) / (1 - a) || 0), 100 * ((1 - n - a) / (1 - a) || 0), 100 * ((1 - r - a) / (1 - a) || 0), 100 * a]
}, f.rgb.keyword = function (t) {
    const e = h[t];
    if (e) return e;
    let n, r = 1 / 0;
    for (const e of Object.keys(u)) {
        const i = (o = u[e], ((a = t)[0] - o[0]) ** 2 + (a[1] - o[1]) ** 2 + (a[2] - o[2]) ** 2);
        i < r && (r = i, n = e)
    }
    var a, o;
    return n
}, f.keyword.rgb = function (t) {
    return u[t]
}, f.rgb.xyz = function (t) {
    let e = t[0] / 255,
        n = t[1] / 255,
        r = t[2] / 255;
    e = e > .04045 ? ((e + .055) / 1.055) ** 2.4 : e / 12.92, n = n > .04045 ? ((n + .055) / 1.055) ** 2.4 : n / 12.92, r = r > .04045 ? ((r + .055) / 1.055) ** 2.4 : r / 12.92;
    return [100 * (.4124 * e + .3576 * n + .1805 * r), 100 * (.2126 * e + .7152 * n + .0722 * r), 100 * (.0193 * e + .1192 * n + .9505 * r)]
}, f.rgb.lab = function (t) {
    const e = f.rgb.xyz(t);
    let n = e[0],
        r = e[1],
        a = e[2];
    n /= 95.047, r /= 100, a /= 108.883, n = n > .008856 ? n ** (1 / 3) : 7.787 * n + 16 / 116, r = r > .008856 ? r ** (1 / 3) : 7.787 * r + 16 / 116, a = a > .008856 ? a ** (1 / 3) : 7.787 * a + 16 / 116;
    return [116 * r - 16, 500 * (n - r), 200 * (r - a)]
}, f.hsl.rgb = function (t) {
    const e = t[0] / 360,
        n = t[1] / 100,
        r = t[2] / 100;
    let a, o, i;
    if (0 === n) return i = 255 * r, [i, i, i];
    a = r < .5 ? r * (1 + n) : r + n - r * n;
    const l = 2 * r - a,
        s = [0, 0, 0];
    for (let t = 0; t < 3; t++) o = e + 1 / 3 * -(t - 1), o < 0 && o++, o > 1 && o--, i = 6 * o < 1 ? l + 6 * (a - l) * o : 2 * o < 1 ? a : 3 * o < 2 ? l + (a - l) * (2 / 3 - o) * 6 : l, s[t] = 255 * i;
    return s
}, f.hsl.hsv = function (t) {
    const e = t[0];
    let n = t[1] / 100,
        r = t[2] / 100,
        a = n;
    const o = Math.max(r, .01);
    r *= 2, n *= r <= 1 ? r : 2 - r, a *= o <= 1 ? o : 2 - o;
    return [e, 100 * (0 === r ? 2 * a / (o + a) : 2 * n / (r + n)), 100 * ((r + n) / 2)]
}, f.hsv.rgb = function (t) {
    const e = t[0] / 60,
        n = t[1] / 100;
    let r = t[2] / 100;
    const a = Math.floor(e) % 6,
        o = e - Math.floor(e),
        i = 255 * r * (1 - n),
        l = 255 * r * (1 - n * o),
        s = 255 * r * (1 - n * (1 - o));
    switch (r *= 255, a) {
        case 0:
            return [r, s, i];
        case 1:
            return [l, r, i];
        case 2:
            return [i, r, s];
        case 3:
            return [i, l, r];
        case 4:
            return [s, i, r];
        case 5:
            return [r, i, l]
    }
}, f.hsv.hsl = function (t) {
    const e = t[0],
        n = t[1] / 100,
        r = t[2] / 100,
        a = Math.max(r, .01);
    let o, i;
    i = (2 - n) * r;
    const l = (2 - n) * a;
    return o = n * a, o /= l <= 1 ? l : 2 - l, o = o || 0, i /= 2, [e, 100 * o, 100 * i]
}, f.hwb.rgb = function (t) {
    const e = t[0] / 360;
    let n = t[1] / 100,
        r = t[2] / 100;
    const a = n + r;
    let o;
    a > 1 && (n /= a, r /= a);
    const i = Math.floor(6 * e),
        l = 1 - r;
    o = 6 * e - i, 0 != (1 & i) && (o = 1 - o);
    const s = n + o * (l - n);
    let c, u, h;
    switch (i) {
        default:
        case 6:
        case 0:
            c = l, u = s, h = n;
            break;
        case 1:
            c = s, u = l, h = n;
            break;
        case 2:
            c = n, u = l, h = s;
            break;
        case 3:
            c = n, u = s, h = l;
            break;
        case 4:
            c = s, u = n, h = l;
            break;
        case 5:
            c = l, u = n, h = s
    }
    return [255 * c, 255 * u, 255 * h]
}, f.cmyk.rgb = function (t) {
    const e = t[0] / 100,
        n = t[1] / 100,
        r = t[2] / 100,
        a = t[3] / 100;
    return [255 * (1 - Math.min(1, e * (1 - a) + a)), 255 * (1 - Math.min(1, n * (1 - a) + a)), 255 * (1 - Math.min(1, r * (1 - a) + a))]
}, f.xyz.rgb = function (t) {
    const e = t[0] / 100,
        n = t[1] / 100,
        r = t[2] / 100;
    let a, o, i;
    return a = 3.2406 * e + -1.5372 * n + -.4986 * r, o = -.9689 * e + 1.8758 * n + .0415 * r, i = .0557 * e + -.204 * n + 1.057 * r, a = a > .0031308 ? 1.055 * a ** (1 / 2.4) - .055 : 12.92 * a, o = o > .0031308 ? 1.055 * o ** (1 / 2.4) - .055 : 12.92 * o, i = i > .0031308 ? 1.055 * i ** (1 / 2.4) - .055 : 12.92 * i, a = Math.min(Math.max(0, a), 1), o = Math.min(Math.max(0, o), 1), i = Math.min(Math.max(0, i), 1), [255 * a, 255 * o, 255 * i]
}, f.xyz.lab = function (t) {
    let e = t[0],
        n = t[1],
        r = t[2];
    e /= 95.047, n /= 100, r /= 108.883, e = e > .008856 ? e ** (1 / 3) : 7.787 * e + 16 / 116, n = n > .008856 ? n ** (1 / 3) : 7.787 * n + 16 / 116, r = r > .008856 ? r ** (1 / 3) : 7.787 * r + 16 / 116;
    return [116 * n - 16, 500 * (e - n), 200 * (n - r)]
}, f.lab.xyz = function (t) {
    let e, n, r;
    n = (t[0] + 16) / 116, e = t[1] / 500 + n, r = n - t[2] / 200;
    const a = n ** 3,
        o = e ** 3,
        i = r ** 3;
    return n = a > .008856 ? a : (n - 16 / 116) / 7.787, e = o > .008856 ? o : (e - 16 / 116) / 7.787, r = i > .008856 ? i : (r - 16 / 116) / 7.787, e *= 95.047, n *= 100, r *= 108.883, [e, n, r]
}, f.lab.lch = function (t) {
    const e = t[0],
        n = t[1],
        r = t[2];
    let a;
    a = 360 * Math.atan2(r, n) / 2 / Math.PI, a < 0 && (a += 360);
    return [e, Math.sqrt(n * n + r * r), a]
}, f.lch.lab = function (t) {
    const e = t[0],
        n = t[1],
        r = t[2] / 360 * 2 * Math.PI;
    return [e, n * Math.cos(r), n * Math.sin(r)]
}, f.rgb.ansi16 = function (t, e = null) {
    const [n, r, a] = t;
    let o = null === e ? f.rgb.hsv(t)[2] : e;
    if (o = Math.round(o / 50), 0 === o) return 30;
    let i = 30 + (Math.round(a / 255) << 2 | Math.round(r / 255) << 1 | Math.round(n / 255));
    return 2 === o && (i += 60), i
}, f.hsv.ansi16 = function (t) {
    return f.rgb.ansi16(f.hsv.rgb(t), t[2])
}, f.rgb.ansi256 = function (t) {
    const e = t[0],
        n = t[1],
        r = t[2];
    if (e === n && n === r) return e < 8 ? 16 : e > 248 ? 231 : Math.round((e - 8) / 247 * 24) + 232;
    return 16 + 36 * Math.round(e / 255 * 5) + 6 * Math.round(n / 255 * 5) + Math.round(r / 255 * 5)
}, f.ansi16.rgb = function (t) {
    let e = t % 10;
    if (0 === e || 7 === e) return t > 50 && (e += 3.5), e = e / 10.5 * 255, [e, e, e];
    const n = .5 * (1 + ~~(t > 50));
    return [(1 & e) * n * 255, (e >> 1 & 1) * n * 255, (e >> 2 & 1) * n * 255]
}, f.ansi256.rgb = function (t) {
    if (t >= 232) {
        const e = 10 * (t - 232) + 8;
        return [e, e, e]
    }
    let e;
    t -= 16;
    return [Math.floor(t / 36) / 5 * 255, Math.floor((e = t % 36) / 6) / 5 * 255, e % 6 / 5 * 255]
}, f.rgb.hex = function (t) {
    const e = (((255 & Math.round(t[0])) << 16) + ((255 & Math.round(t[1])) << 8) + (255 & Math.round(t[2]))).toString(16).toUpperCase();
    return "000000".substring(e.length) + e
}, f.hex.rgb = function (t) {
    const e = t.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
    if (!e) return [0, 0, 0];
    let n = e[0];
    3 === e[0].length && (n = n.split("").map((t => t + t)).join(""));
    const r = parseInt(n, 16);
    return [r >> 16 & 255, r >> 8 & 255, 255 & r]
}, f.rgb.hcg = function (t) {
    const e = t[0] / 255,
        n = t[1] / 255,
        r = t[2] / 255,
        a = Math.max(Math.max(e, n), r),
        o = Math.min(Math.min(e, n), r),
        i = a - o;
    let l, s;
    return l = i < 1 ? o / (1 - i) : 0, s = i <= 0 ? 0 : a === e ? (n - r) / i % 6 : a === n ? 2 + (r - e) / i : 4 + (e - n) / i, s /= 6, s %= 1, [360 * s, 100 * i, 100 * l]
}, f.hsl.hcg = function (t) {
    const e = t[1] / 100,
        n = t[2] / 100,
        r = n < .5 ? 2 * e * n : 2 * e * (1 - n);
    let a = 0;
    return r < 1 && (a = (n - .5 * r) / (1 - r)), [t[0], 100 * r, 100 * a]
}, f.hsv.hcg = function (t) {
    const e = t[1] / 100,
        n = t[2] / 100,
        r = e * n;
    let a = 0;
    return r < 1 && (a = (n - r) / (1 - r)), [t[0], 100 * r, 100 * a]
}, f.hcg.rgb = function (t) {
    const e = t[0] / 360,
        n = t[1] / 100,
        r = t[2] / 100;
    if (0 === n) return [255 * r, 255 * r, 255 * r];
    const a = [0, 0, 0],
        o = e % 1 * 6,
        i = o % 1,
        l = 1 - i;
    let s = 0;
    switch (Math.floor(o)) {
        case 0:
            a[0] = 1, a[1] = i, a[2] = 0;
            break;
        case 1:
            a[0] = l, a[1] = 1, a[2] = 0;
            break;
        case 2:
            a[0] = 0, a[1] = 1, a[2] = i;
            break;
        case 3:
            a[0] = 0, a[1] = l, a[2] = 1;
            break;
        case 4:
            a[0] = i, a[1] = 0, a[2] = 1;
            break;
        default:
            a[0] = 1, a[1] = 0, a[2] = l
    }
    return s = (1 - n) * r, [255 * (n * a[0] + s), 255 * (n * a[1] + s), 255 * (n * a[2] + s)]
}, f.hcg.hsv = function (t) {
    const e = t[1] / 100,
        n = e + t[2] / 100 * (1 - e);
    let r = 0;
    return n > 0 && (r = e / n), [t[0], 100 * r, 100 * n]
}, f.hcg.hsl = function (t) {
    const e = t[1] / 100,
        n = t[2] / 100 * (1 - e) + .5 * e;
    let r = 0;
    return n > 0 && n < .5 ? r = e / (2 * n) : n >= .5 && n < 1 && (r = e / (2 * (1 - n))), [t[0], 100 * r, 100 * n]
}, f.hcg.hwb = function (t) {
    const e = t[1] / 100,
        n = e + t[2] / 100 * (1 - e);
    return [t[0], 100 * (n - e), 100 * (1 - n)]
}, f.hwb.hcg = function (t) {
    const e = t[1] / 100,
        n = 1 - t[2] / 100,
        r = n - e;
    let a = 0;
    return r < 1 && (a = (n - r) / (1 - r)), [t[0], 100 * r, 100 * a]
}, f.apple.rgb = function (t) {
    return [t[0] / 65535 * 255, t[1] / 65535 * 255, t[2] / 65535 * 255]
}, f.rgb.apple = function (t) {
    return [t[0] / 255 * 65535, t[1] / 255 * 65535, t[2] / 255 * 65535]
}, f.gray.rgb = function (t) {
    return [t[0] / 100 * 255, t[0] / 100 * 255, t[0] / 100 * 255]
}, f.gray.hsl = function (t) {
    return [0, 0, t[0]]
}, f.gray.hsv = f.gray.hsl, f.gray.hwb = function (t) {
    return [0, 100, t[0]]
}, f.gray.cmyk = function (t) {
    return [0, 0, 0, t[0]]
}, f.gray.lab = function (t) {
    return [t[0], 0, 0]
}, f.gray.hex = function (t) {
    const e = 255 & Math.round(t[0] / 100 * 255),
        n = ((e << 16) + (e << 8) + e).toString(16).toUpperCase();
    return "000000".substring(n.length) + n
}, f.rgb.gray = function (t) {
    return [(t[0] + t[1] + t[2]) / 3 / 255 * 100]
};
const m = {};
Object.keys(d).forEach((t => {
    m[t] = {}, Object.defineProperty(m[t], "channels", {
        value: d[t].channels
    }), Object.defineProperty(m[t], "labels", {
        value: d[t].labels
    });
    const e = function (t) {
        const e = g(t),
            n = {},
            r = Object.keys(e);
        for (let t = r.length, a = 0; a < t; a++) {
            const t = r[a];
            null !== e[t].parent && (n[t] = y(t, e))
        }
        return n
    }(t);
    Object.keys(e).forEach((n => {
        const r = e[n];
        m[t][n] = function (t) {
            const e = function (...e) {
                const n = e[0];
                if (null == n) return n;
                n.length > 1 && (e = n);
                const r = t(e);
                if ("object" == typeof r)
                    for (let t = r.length, e = 0; e < t; e++) r[e] = Math.round(r[e]);
                return r
            };
            return "conversion" in t && (e.conversion = t.conversion), e
        }(r), m[t][n].raw = function (t) {
            const e = function (...e) {
                const n = e[0];
                return null == n ? n : (n.length > 1 && (e = n), t(e))
            };
            return "conversion" in t && (e.conversion = t.conversion), e
        }(r)
    }))
}));
var p = m,
    v = function (t) {
        if (t) {
            var e = document.createElement("style");
            e.classList.add("BULLET_ANIMATE"), document.head.appendChild(e);
            console.log(66)
            var n = t.getBoundingClientRect().width,
                r = "from { visibility: visible;transform: translateX(".concat(n+120, "px); }");
            e.sheet.insertRule("@keyframes RightToLeft { ".concat(r, " ").concat("to { visibility: visible; transform: translateX(-100%); }", " }"), 0)
        }
    },
    k = function (t) {
        return null !== t && ("function" == typeof t || "object" === a(t))
    },
    w = function (t) {
        var e = t.currScreen,
            n = t.pauseOnHover,
            r = t.pauseOnClick,
            a = t.animate,
            o = t.loopCount,
            i = t.direction,
            l = t.delay,
            s = t.duration,
            c = t.animateTimeFun,
            u = document.createElement("div");
        return u.id = Math.random().toString(36).substring(2), u.style.transitionProperty = "opacity", u.style.transitionDuration = "0.5s", u.style.cursor = "pointer", u.style.position = "absolute", u.style.left = 0, u.style.visibility = "hidden", u.style.animationName = a, u.style.animationIterationCount = o, u.style.animationDelay = isNaN(l) ? l : "".concat(l, "s"), u.style.animationDirection = i, u.style.animationDuration = isNaN(s) ? s : "".concat(s, "s"), u.style.animationTimingFunction = c, u.style.willChange = "transform", e.allHide && (u.style.opacity = 0), n && (u.addEventListener("mouseenter", (function () {
            u.style.animationPlayState = "paused"
        }), !1), u.addEventListener("mouseleave", (function () {
            e.allPaused || u.dataset.clicked || (u.style.animationPlayState = "running")
        }), !1)), r && u.addEventListener("click", (function (t) {
            "paused" == u.style.animationPlayState && u.dataset.clicked ? (u.dataset.clicked = "", u.style.animationPlayState = "running") : (u.dataset.clicked = "true", u.style.animationPlayState = "paused")
        }), !1), u
    };

function M(t) {
    var e = t.match(/rgba?\((\d{1,3}), ?(\d{1,3}), ?(\d{1,3})\)?(?:, ?(\d(?:\.\d?))\))?/);
    return e ? [e[1], e[2], e[3]] : [0, 0, 0]
}
var x = {
        trackHeight: 50,
        gap: "10px",
        animate: "RightToLeft",
        pauseOnHover: !0,
        pauseOnClick: !1,
        onStart: null,
        onEnd: null,
        loopCount: 1,
        duration: 10,
        delay: 0,
        direction: "normal",
        animateTimeFun: "linear"
    },
    O = {
        padding: ".4em 1em",
        border: "2px solid #fff",
        borderRadius: "2.2em",
        position: "relative",
        boxShadow: "0 0 .8em rgba(0, 0, 0, 0.5)",
        wordBreak: "keep-all",
        whiteSpace: "pre-wrap"
    },
    S = {
        fontSize: "1.8em",
        fontWeight: "800",
        lineHeight: "1.4"
    },
    E = {
        position: "absolute",
        left: "-4.6em",
        top: "50%",
        transform: "translateY(-50%)",
        width: "4em",
        height: "4em",
        borderRadius: "50%",
        border: "2px solid #eee",
        boxShadow: "0 0 .8em rgba(0, 0, 0, 0.8)"
    },
    j = {
        borderRadius: "50%",
        width: "100%",
        height: "100%"
    },
    P = {
        small: "10px",
        normal: "12px",
        large: "14px",
        huge: "16px"
    },
    C = function (e) {
        var n = e.msg,
            a = e.head,
            o = e.size,
            i = void 0 === o ? "normal" : o,
            l = e.color,
            c = e.backgroundColor,
            u = void 0 === c ? "#fff" : c,
            h = l || function () {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [0, 0, 0];
                ("string" == typeof t || t instanceof String) && t.indexOf("#") > -1 ? t = p.hex.rgb(t) : "string" == typeof t && (t = M(t));
                var e = 130,
                    n = s(t, 3),
                    r = n[0],
                    a = n[1],
                    o = n[2];
                return (299 * r + 587 * a + 114 * o) / 1e3 > e ? "#50616d" : "#e9f1f6"
            }(u),
            f = P[i] || i;
        return t.createElement("div", {
            style: r(r({}, O), {}, {
                backgroundColor: u,
                fontSize: f
            })
        }, a && t.createElement("div", {
            style: r({}, E)
        }, t.createElement("img", {
            src: a,
            style: j,
            alt: "msg head"
        })), t.createElement("div", {
            style: r(r({}, S), {}, {
                color: h
            })
        }, n))
    },
    q = function () {
        function n(r) {
            var a = this,
                i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            o(this, n), l(this, "target", null), l(this, "options", x), l(this, "bullets", []), l(this, "allPaused", !1), l(this, "allHide", !1), l(this, "tracks", []), l(this, "queues", []), l(this, "_render", (function (n, r, o, i) {
                a.target.appendChild(r);
                var l = a.options,
                    c = l.gap,
                    u = l.trackHeight;
                e.render(t.isValidElement(n) || "string" == typeof n ? n : k(n) ? t.createElement(C, n) : null, r, (function () {
                    var t = o * u;
                    r.dataset.track = o, r.style.top = i || "".concat(t, "px");
                    var e = {
                        root: a.target,
                        rootMargin: "0px ".concat(c, " 0px 0px"),
                        threshold: 1
                    };
                    new IntersectionObserver((function (t) {
                        t.forEach((function (t) {
                            var e = t.intersectionRatio,
                                n = t.target;
                            if (e >= 1) {
                                var r = n.dataset.track;
                                if (a.queues.length) {
                                    var o = s(a.queues.shift(), 3),
                                        i = o[0],
                                        l = o[1],
                                        c = o[2];
                                    a._render(i, l, r, c)
                                } else a.tracks[r] = "feed"
                            }
                        }))
                    }), e).observe(r)
                }))
            })), l(this, "_toggleAnimateStatus", (function (t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "paused",
                    n = a.bullets.find((function (e) {
                        return e.id == t
                    }));
                n ? n.style.animationPlayState = e : (a.allPaused = "paused" === e, a.bullets.forEach((function (t) {
                    t.style.animationPlayState = e
                })))
            })), this.options = Object.assign(this.options, i);
            var c = this.options.trackHeight;
            if ("string" == typeof r) {
                if (this.target = document.querySelector(r), !this.target) throw new Error("The display target does not exist")
            } else {
                if (!(r instanceof HTMLElement)) throw new Error("The display target of the barrage must be set");
                this.target = r
            }
            var u = this.target.getBoundingClientRect(),
                h = u.height;
            this.tracks = new Array(Math.floor(h / c)).fill("idle");
            var f = getComputedStyle(this.target),
                d = f.position;
            "static" === d && (this.target.style.position = "relative"), v(this.target)
        }
        var a, c, u;
        return a = n, (c = [{
            key: "_getTrack",
            value: function () {
                var t = [],
                    e = -1;
                return this.tracks.forEach((function (e, n) {
                    "idle" === e && t.push(n)
                })), t.length && (e = t[Math.floor(Math.random() * t.length)]), -1 === e && (this.tracks.forEach((function (e, n) {
                    "feed" === e && t.push(n)
                })), t.length && (e = t[Math.floor(Math.random() * t.length)])), -1 !== e && (this.tracks[e] = "running"), e
            }
        }, {
            key: "push",
            value: function (t) {
                var n = this,
                    a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    o = Object.assign({}, this.options, a),
                    i = o.onStart,
                    l = o.onEnd,
                    s = o.top,
                    c = w(r(r({}, o), {}, {
                        currScreen: this
                    }));
                this.bullets.push(c);
                var u = this._getTrack();
                return -1 === u || this.allPaused ? this.queues.push([t, c, s]) : this._render(t, c, u, s), i && c.addEventListener("animationstart", (function () {
                    i && i.call(null, c.id, n)
                })), c.addEventListener("animationend", (function () {
                    l && l.call(null, c.id, n), n.bullets = n.bullets.filter((function (t) {
                        return t.id !== c.id
                    })), e.unmountComponentAtNode(c), c.remove()
                })), c.id
            }
        }, {
            key: "pause",
            value: function () {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                this._toggleAnimateStatus(t, "paused")
            }
        }, {
            key: "resume",
            value: function () {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                this._toggleAnimateStatus(t, "running")
            }
        }, {
            key: "hide",
            value: function () {
                this.allHide = !0, this.bullets.forEach((function (t) {
                    t.style.opacity = 0
                }))
            }
        }, {
            key: "show",
            value: function () {
                this.allHide = !1, this.bullets.forEach((function (t) {
                    t.style.opacity = 1
                }))
            }
        }, {
            key: "clear",
            value: function () {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                    n = this.bullets.find((function (e) {
                        return e.id == t
                    }));
                if (n) return e.unmountComponentAtNode(n), n.remove(), void(this.bullets = this.bullets.filter((function (e) {
                    return e.id !== t
                })));
                this.bullets.forEach((function (t) {
                    e.unmountComponentAtNode(t), t.remove()
                }));
                var r = this.target.getBoundingClientRect(),
                    a = r.height;
                this.tracks = new Array(Math.floor(a / this.options.trackHeight)).fill("idle"), this.queues = [], this.bullets = []
            }
        }]) && i(a.prototype, c), u && i(a, u), n
    }();
export default q;
export {
    C as StyledBullet
};
//# sourceMappingURL=index.es.js.map
