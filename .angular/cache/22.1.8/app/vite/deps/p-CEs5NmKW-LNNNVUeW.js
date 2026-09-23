//#region node_modules/@ionic/core/components/p-CthoZqG1.js
/*!
* (C) Ionic http://ionicframework.com - MIT License
*/
var t$2 = class {
	constructor() {
		this.m = /* @__PURE__ */ new Map();
	}
	reset(t) {
		this.m = new Map(Object.entries(t));
	}
	get(t, n) {
		const e = this.m.get(t);
		return void 0 !== e ? e : n;
	}
	getBoolean(t, n = !1) {
		const e = this.m.get(t);
		return void 0 === e ? n : "string" == typeof e ? "true" === e : !!e;
	}
	getNumber(t, n) {
		const e = parseFloat(this.m.get(t));
		return isNaN(e) ? void 0 !== n ? n : NaN : e;
	}
	set(t, n) {
		this.m.set(t, n);
	}
};
var n$2 = new t$2();
var c$1;
(function(t) {
	t.OFF = "OFF", t.ERROR = "ERROR", t.WARN = "WARN", t.DEBUG = "DEBUG";
})(c$1 || (c$1 = {}));
var u = {
	[c$1.OFF]: 0,
	[c$1.ERROR]: 1,
	[c$1.WARN]: 2,
	[c$1.DEBUG]: 3
};
var f$1 = (t) => {
	return u[String(n$2.get("logLevel", c$1.WARN)).toUpperCase()] >= u[t];
};
var a = (t, ...n) => {
	if (f$1(c$1.WARN)) return console.warn(`[Ionic Warning]: ${t}`, ...n);
};
var d$1 = (t, ...n) => {
	if (f$1(c$1.ERROR)) return console.error(`[Ionic Error]: ${t}`, ...n);
};
var p = ((t) => (t.Undefined = "undefined", t.Null = "null", t.String = "string", t.Number = "number", t.SpecialNumber = "number", t.Boolean = "boolean", t.BigInt = "bigint", t))(p || {});
var $ = ((t) => (t.Array = "array", t.Date = "date", t.Map = "map", t.Object = "object", t.RegularExpression = "regexp", t.Set = "set", t.Channel = "channel", t.Symbol = "symbol", t))($ || {});
var O = (t) => {
	if (t.__stencil__getHostRef) return t.__stencil__getHostRef();
};
var S = (t, n) => (0, console.error)(t, n);
var R = "undefined" != typeof window ? window : {};
R.HTMLElement;
var L = {
	i: 0,
	u: "",
	jmp: (t) => t(),
	raf: (t) => requestAnimationFrame(t),
	ael: (t, n, e, o) => t.addEventListener(n, e, o),
	rel: (t, n, e, o) => t.removeEventListener(n, e, o),
	ce: (t, n) => new CustomEvent(t, n)
};
(() => {
	var t;
	let n = !1;
	try {
		null == (t = R.document) || t.addEventListener("e", null, Object.defineProperty({}, "passive", { get() {
			n = !0;
		} }));
	} catch (t) {}
	return n;
})();
(() => {
	try {
		return !!R.document.adoptedStyleSheets && (new CSSStyleSheet(), "function" == typeof new CSSStyleSheet().replaceSync);
	} catch (t) {}
	return !1;
})() && (() => !!R.document && Object.getOwnPropertyDescriptor(R.document.adoptedStyleSheets, "length").writable)();
var U = [];
var D = [];
var W = () => {
	var t;
	return (null == (t = R.document) ? void 0 : t.hidden) ? q(P) : L.raf(P);
};
var H = (t) => {
	for (let n = 0; n < t.length; n++) try {
		t[n](performance.now());
	} catch (t) {
		S(t);
	}
	t.length = 0;
};
var P = () => {
	H(U), H(D), U.length > 0 && W();
};
var q = (t) => Promise.resolve(void 0).then(t);
var qt = (t) => {
	var n;
	return null == (n = O(t)) ? void 0 : n.A;
};
//#endregion
//#region node_modules/@ionic/core/components/p-ZjP4CjeZ.js
/*!
* (C) Ionic http://ionicframework.com - MIT License
*/
var d = "undefined" != typeof window ? window : void 0;
var o = "undefined" != typeof document ? document : void 0;
//#endregion
//#region node_modules/@ionic/core/components/p-CPGp3WWG.js
/*!
* (C) Ionic http://ionicframework.com - MIT License
*/
var t$1;
var i = (e, o, i) => {
	const n = o.startsWith("animation") ? (r = e, void 0 === t$1 && (t$1 = void 0 === r.style.animationName && void 0 !== r.style.webkitAnimationName ? "-webkit-" : ""), t$1) : "";
	var r;
	e.style.setProperty(n + o, i);
};
var n$1 = (e = [], o) => {
	if (void 0 !== o) {
		const t = Array.isArray(o) ? o : [o];
		return [...e, ...t];
	}
	return e;
};
var r$1 = (t) => {
	let r, a, s, d$3, f, l, c, v, m, u, p, y = [], g = [], A = [], b = !1, C = {}, E = [], h = [], S = {}, j = 0, k = !1, R = !1, w = !0, T = !1, D = !0, F = !1;
	const W = t, Z = [], I = [], K = [], M = [], P = [], q = [], x = [], G = [], z = [], B = [], H = [], J = "function" == typeof AnimationEffect || void 0 !== d && "function" == typeof d.AnimationEffect, L = "function" == typeof Element && "function" == typeof Element.prototype.animate && J, N = () => H, O = (e, o) => {
		const t = o.findIndex(((o) => o.c === e));
		t > -1 && o.splice(t, 1);
	}, Q = (e, o) => ((o?.oneTimeCallback ? I : Z).push({
		c: e,
		o
	}), p), U = () => {
		L && (H.forEach(((e) => {
			e.cancel();
		})), H.length = 0);
	}, V = () => {
		q.forEach(((e) => {
			e?.parentNode && e.parentNode.removeChild(e);
		})), q.length = 0;
	}, X = () => void 0 !== f ? f : c ? c.getFill() : "both", Y = () => void 0 !== v ? v : void 0 !== l ? l : c ? c.getDirection() : "normal", $ = () => k ? "linear" : void 0 !== s ? s : c ? c.getEasing() : "linear", _ = () => R ? 0 : void 0 !== m ? m : void 0 !== a ? a : c ? c.getDuration() : 0, ee = () => void 0 !== d$3 ? d$3 : c ? c.getIterations() : 1, oe = () => void 0 !== u ? u : void 0 !== r ? r : c ? c.getDelay() : 0, te = () => {
		0 !== j && (j--, 0 === j && ((() => {
			z.forEach(((e) => e())), B.forEach(((e) => e()));
			const e = w ? 1 : 0, o = E, t = h, n = S;
			M.forEach(((e) => {
				const r = e.classList;
				o.forEach(((e) => r.add(e))), t.forEach(((e) => r.remove(e)));
				for (const o in n) n.hasOwnProperty(o) && i(e, o, n[o]);
			})), m = void 0, v = void 0, u = void 0, Z.forEach(((o) => o.c(e, p))), I.forEach(((o) => o.c(e, p))), I.length = 0, D = !0, w && (T = !0), w = !0;
		})(), c && c.animationFinish()));
	}, ie = () => {
		(() => {
			x.forEach(((e) => e())), G.forEach(((e) => e()));
			const e = g, o = A, t = C;
			M.forEach(((n) => {
				const r = n.classList;
				e.forEach(((e) => r.add(e))), o.forEach(((e) => r.remove(e)));
				for (const e in t) t.hasOwnProperty(e) && i(n, e, t[e]);
			}));
		})(), y.length > 0 && L && (M.forEach(((e) => {
			const o = e.animate(y, {
				id: W,
				delay: oe(),
				duration: _(),
				easing: $(),
				iterations: ee(),
				fill: X(),
				direction: Y()
			});
			o.pause(), H.push(o);
		})), H.length > 0 && (H[0].onfinish = () => {
			te();
		})), b = !0;
	}, ne = (e) => {
		e = Math.min(Math.max(e, 0), .9999), L && H.forEach(((o) => {
			o.currentTime = o.effect.getComputedTiming().delay + _() * e, o.pause();
		}));
	}, re = (e) => {
		H.forEach(((e) => {
			e.effect.updateTiming({
				delay: oe(),
				duration: _(),
				easing: $(),
				iterations: ee(),
				fill: X(),
				direction: Y()
			});
		})), void 0 !== e && ne(e);
	}, ae = (e = !1, o = !0, t) => (e && P.forEach(((i) => {
		i.update(e, o, t);
	})), L && re(t), p), se = () => {
		b && (L ? H.forEach(((e) => {
			e.pause();
		})) : M.forEach(((e) => {
			i(e, "animation-play-state", "paused");
		})), F = !0);
	}, de = (e) => new Promise(((o) => {
		e?.sync && (R = !0, Q((() => R = !1), { oneTimeCallback: !0 })), b || ie(), T && (L && (ne(0), re()), T = !1), D && (j = P.length + 1, D = !1);
		const t = () => {
			O(i, I), o();
		}, i = () => {
			O(t, K), o();
		};
		Q(i, { oneTimeCallback: !0 }), K.push({
			c: t,
			o: { oneTimeCallback: !0 }
		}), P.forEach(((e) => {
			e.play();
		})), L ? (H.forEach(((e) => {
			e.play();
		})), 0 !== y.length && 0 !== M.length || te()) : te(), F = !1;
	})), fe = (e, o) => {
		const t = y[0];
		return void 0 === t || void 0 !== t.offset && 0 !== t.offset ? y = [{
			offset: 0,
			[e]: o
		}, ...y] : t[e] = o, p;
	};
	return p = {
		parentAnimation: c,
		elements: M,
		childAnimations: P,
		id: W,
		animationFinish: te,
		from: fe,
		to: (e, o) => {
			const t = y[y.length - 1];
			return void 0 === t || void 0 !== t.offset && 1 !== t.offset ? y = [...y, {
				offset: 1,
				[e]: o
			}] : t[e] = o, p;
		},
		fromTo: (e, o, t) => fe(e, o).to(e, t),
		parent: (e) => (c = e, p),
		play: de,
		pause: () => (P.forEach(((e) => {
			e.pause();
		})), se(), p),
		stop: () => {
			P.forEach(((e) => {
				e.stop();
			})), b && (U(), b = !1), k = !1, R = !1, D = !0, v = void 0, m = void 0, u = void 0, j = 0, T = !1, w = !0, F = !1, K.forEach(((e) => e.c(0, p))), K.length = 0;
		},
		destroy: (e) => (P.forEach(((o) => {
			o.destroy(e);
		})), ((e) => {
			U(), e && V();
		})(e), M.length = 0, P.length = 0, y.length = 0, Z.length = 0, I.length = 0, b = !1, D = !0, p),
		keyframes: (e) => {
			const o = y !== e;
			return y = e, o && ((e) => {
				L && N().forEach(((o) => {
					const t = o.effect;
					if (t.setKeyframes) t.setKeyframes(e);
					else o.effect = new KeyframeEffect(t.target, e, t.getTiming());
				}));
			})(y), p;
		},
		addAnimation: (e) => {
			if (null != e) if (Array.isArray(e)) for (const o of e) o.parent(p), P.push(o);
			else e.parent(p), P.push(e);
			return p;
		},
		addElement: (o) => {
			if (null != o) if (1 === o.nodeType) M.push(o);
			else if (o.length >= 0) for (let e = 0; e < o.length; e++) M.push(o[e]);
			else d$1("createAnimation - Invalid addElement value.");
			return p;
		},
		update: ae,
		fill: (e) => (f = e, ae(!0), p),
		direction: (e) => (l = e, ae(!0), p),
		iterations: (e) => (d$3 = e, ae(!0), p),
		duration: (e) => (L || 0 !== e || (e = 1), a = e, ae(!0), p),
		easing: (e) => (s = e, ae(!0), p),
		delay: (e) => (r = e, ae(!0), p),
		getWebAnimations: N,
		getKeyframes: () => y,
		getFill: X,
		getDirection: Y,
		getDelay: oe,
		getIterations: ee,
		getEasing: $,
		getDuration: _,
		afterAddRead: (e) => (z.push(e), p),
		afterAddWrite: (e) => (B.push(e), p),
		afterClearStyles: (e = []) => {
			for (const o of e) S[o] = "";
			return p;
		},
		afterStyles: (e = {}) => (S = e, p),
		afterRemoveClass: (e) => (h = n$1(h, e), p),
		afterAddClass: (e) => (E = n$1(E, e), p),
		beforeAddRead: (e) => (x.push(e), p),
		beforeAddWrite: (e) => (G.push(e), p),
		beforeClearStyles: (e = []) => {
			for (const o of e) C[o] = "";
			return p;
		},
		beforeStyles: (e = {}) => (C = e, p),
		beforeRemoveClass: (e) => (A = n$1(A, e), p),
		beforeAddClass: (e) => (g = n$1(g, e), p),
		onFinish: Q,
		isRunning: () => 0 !== j && !F,
		progressStart: (e = !1, o) => (P.forEach(((t) => {
			t.progressStart(e, o);
		})), se(), k = e, b || ie(), ae(!1, !0, o), p),
		progressStep: (e) => (P.forEach(((o) => {
			o.progressStep(e);
		})), ne(e), p),
		progressEnd: (e, o, t) => (k = !1, P.forEach(((i) => {
			i.progressEnd(e, o, t);
		})), void 0 !== t && (m = t), T = !1, w = !0, 0 === e ? (v = "reverse" === Y() ? "normal" : "reverse", "reverse" === v && (w = !1), L ? (ae(), ne(1 - o)) : (u = (1 - o) * _() * -1, ae(!1, !1))) : 1 === e && (L ? (ae(), ne(o)) : (u = o * _() * -1, ae(!1, !1))), void 0 === e || c || de(), p)
	};
};
//#endregion
//#region node_modules/@ionic/core/components/p-DEvF_E6y.js
var n = (a, i) => {
	/*!
	* (C) Ionic http://ionicframework.com - MIT License
	*/
	a.componentOnReady ? a.componentOnReady().then(((a) => i(a))) : f((() => i(a)));
};
var f = (a) => "function" == typeof __zone_symbol__requestAnimationFrame ? __zone_symbol__requestAnimationFrame(a) : "function" == typeof requestAnimationFrame ? requestAnimationFrame(a) : setTimeout(a);
//#endregion
//#region node_modules/@ionic/core/components/p-CEs5NmKW.js
/*!
* (C) Ionic http://ionicframework.com - MIT License
*/
var r = "ionViewWillEnter";
var t = "ionViewDidEnter";
var s = "ionViewWillLeave";
var c = "ionViewDidLeave";
var l = "ionViewWillUnload";
var B = (n) => {
	if (n.classList.contains("ion-page")) return n;
	return n.querySelector(":scope > .ion-page, :scope > ion-nav, :scope > ion-tabs") || n;
};
//#endregion
export { s as a, r$1 as c, n$2 as d, qt as f, r as i, o as l, c as n, t as o, l as r, n as s, B as t, a as u };
