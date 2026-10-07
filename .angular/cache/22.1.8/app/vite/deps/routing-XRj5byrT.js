import { $n as Output, Al as ɵɵinject, Bl as createOperatorSubscriber, Dc as Injector, Ea as ɵɵcontentQuery, Ec as InjectionToken, El as ɵɵdefineInjectable, En as ElementRef, Er as ViewContainerRef, Fc as NgZone, Fn as Injectable, Hl as Observable, In as Input, Lo as ɵɵinjectAttribute, M as createComponent, Pn as Inject, Qn as Optional, Rl as BehaviorSubject, S as ViewChild, Vl as operate, Wi as setClassMetadata, Wl as identity, Xl as isFunction, Xo as ɵɵloadQuery, Yo as ɵɵlistener, bc as EventEmitter, ft as reflectComponentType, i as ContentChild, kn as HostListener, la as ɵɵNgOnChangesFeature, mc as DOCUMENT, nn as Attribute, no as ɵɵdefineDirective, oo as ɵɵdirectiveInject, pr as SkipSelf, r as ChangeDetectorRef, ru as __read, sc as ɵɵviewQuery, sl as inject, tn as ApplicationRef, tu as __decorate, vc as EnvironmentInjector, vr as TemplateRef, vs as ɵɵqueryRefresh, wn as Directive, zl as Subject } from "./core-GC7q_RMC.js";
import { Q as PRIMARY_OUTLET, R as ChildrenOutletContexts, W as NavigationCancel, X as NavigationStart, ct as Router, f as RouterLink, j as ActivatedRoute, kt as combineLatest, q as NavigationError, yt as UrlSerializer } from "./router-X9GUwMbM.js";
import { i as isArrayLike, r as innerFrom } from "./from-D2rSBONj.js";
import { L as filter, P as switchMap, R as mergeMap, z as of } from "./platform-browser-CCCxeeqh.js";
import { r as mapOneOrManyArgs } from "./createObject-BPYXfubG.js";
import { N as NgControl } from "./forms-C4aYpz1q.js";
import { Nt as Location, Pt as LocationStrategy } from "./common-Cwvxu5fs.js";
import { a as Pt, d as a$2, f as d$2, g as o$3, h as n$1, p as e$1, v as qt, y as s$1 } from "./p-BriaEJK8-Ct-bkoym.js";
import { n as o$4 } from "./p-ZjP4CjeZ-BnW-oeAv.js";
import { a as c$3, c as s$2, f as r$2, l as t$1, o as l$2, s as r$3 } from "./p-CVVUo4J1-CNeCukYw.js";
import { a as d$3, d as n$2, i as c$4, r as b$3, u as m$2 } from "./p-DlUdjUlf-Ce_fbjmq.js";
import "./p-BKxLivx4-B2R-7afq.js";
import "./p-CJgshb3W-DltaR8xy.js";
import { i as i$2 } from "./p-D0YpjgON-ChXLmYOV.js";
import { t as o$5 } from "./p-q2WJ5Igc-sueKkt_m.js";
//#region node_modules/rxjs/dist/esm5/internal/observable/fromEvent.js
var nodeEventEmitterMethods = ["addListener", "removeListener"];
var eventTargetMethods = ["addEventListener", "removeEventListener"];
var jqueryMethods = ["on", "off"];
function fromEvent(target, eventName, options, resultSelector) {
	if (isFunction(options)) {
		resultSelector = options;
		options = void 0;
	}
	if (resultSelector) return fromEvent(target, eventName, options).pipe(mapOneOrManyArgs(resultSelector));
	var _a = __read(isEventTarget(target) ? eventTargetMethods.map(function(methodName) {
		return function(handler) {
			return target[methodName](eventName, handler, options);
		};
	}) : isNodeStyleEventEmitter(target) ? nodeEventEmitterMethods.map(toCommonHandlerRegistry(target, eventName)) : isJQueryStyleEventEmitter(target) ? jqueryMethods.map(toCommonHandlerRegistry(target, eventName)) : [], 2), add = _a[0], remove = _a[1];
	if (!add) {
		if (isArrayLike(target)) return mergeMap(function(subTarget) {
			return fromEvent(subTarget, eventName, options);
		})(innerFrom(target));
	}
	if (!add) throw new TypeError("Invalid event target");
	return new Observable(function(subscriber) {
		var handler = function() {
			var args = [];
			for (var _i = 0; _i < arguments.length; _i++) args[_i] = arguments[_i];
			return subscriber.next(1 < args.length ? args : args[0]);
		};
		add(handler);
		return function() {
			return remove(handler);
		};
	});
}
function toCommonHandlerRegistry(target, eventName) {
	return function(methodName) {
		return function(handler) {
			return target[methodName](eventName, handler);
		};
	};
}
function isNodeStyleEventEmitter(target) {
	return isFunction(target.addListener) && isFunction(target.removeListener);
}
function isJQueryStyleEventEmitter(target) {
	return isFunction(target.on) && isFunction(target.off);
}
function isEventTarget(target) {
	return isFunction(target.addEventListener) && isFunction(target.removeEventListener);
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/operators/distinctUntilChanged.js
function distinctUntilChanged(comparator, keySelector) {
	if (keySelector === void 0) keySelector = identity;
	comparator = comparator !== null && comparator !== void 0 ? comparator : defaultCompare;
	return operate(function(source, subscriber) {
		var previousKey;
		var first = true;
		source.subscribe(createOperatorSubscriber(subscriber, function(value) {
			var currentKey = keySelector(value);
			if (first || !comparator(previousKey, currentKey)) {
				first = false;
				previousKey = currentKey;
				subscriber.next(value);
			}
		}));
	});
}
function defaultCompare(a, b) {
	return a === b;
}
//#endregion
//#region node_modules/@ionic/angular/dist/common/providers/dom-controller.js
var DomController = class DomController {
	/**
	* Schedules a task to run during the READ phase of the next frame.
	* This task should only read the DOM, but never modify it.
	*/
	read(cb) {
		getQueue().read(cb);
	}
	/**
	* Schedules a task to run during the WRITE phase of the next frame.
	* This task should write the DOM, but never READ it.
	*/
	write(cb) {
		getQueue().write(cb);
	}
	/** @nocollapse */
	static ɵfac = function DomController_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || DomController)();
	};
	/** @nocollapse */
	static ɵprov = /* @__PURE__ */ ɵɵdefineInjectable({
		token: DomController,
		factory: DomController.ɵfac,
		providedIn: "root"
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DomController, [{
		type: Injectable,
		args: [{ providedIn: "root" }]
	}], null, null);
})();
var getQueue = () => {
	const win = typeof window !== "undefined" ? window : null;
	if (win != null) {
		const Ionic = win.Ionic;
		if (Ionic?.queue) return Ionic.queue;
		return {
			read: (cb) => win.requestAnimationFrame(cb),
			write: (cb) => win.requestAnimationFrame(cb)
		};
	}
	return {
		read: (cb) => cb(),
		write: (cb) => cb()
	};
};
//#endregion
//#region node_modules/@ionic/angular/dist/common/providers/menu-controller.js
var MenuController = class {
	menuController;
	constructor(menuController) {
		this.menuController = menuController;
	}
	/**
	* Programmatically open the Menu.
	* @param [menuId]  Optionally get the menu by its id, or side.
	* @return returns a promise when the menu is fully opened
	*/
	open(menuId) {
		return this.menuController.open(menuId);
	}
	/**
	* Programmatically close the Menu. If no `menuId` is given as the first
	* argument then it'll close any menu which is open. If a `menuId`
	* is given then it'll close that exact menu.
	* @param [menuId]  Optionally get the menu by its id, or side.
	* @return returns a promise when the menu is fully closed
	*/
	close(menuId) {
		return this.menuController.close(menuId);
	}
	/**
	* Toggle the menu. If it's closed, it will open, and if opened, it
	* will close.
	* @param [menuId]  Optionally get the menu by its id, or side.
	* @return returns a promise when the menu has been toggled
	*/
	toggle(menuId) {
		return this.menuController.toggle(menuId);
	}
	/**
	* Used to enable or disable a menu. For example, there could be multiple
	* left menus, but only one of them should be able to be opened at the same
	* time. If there are multiple menus on the same side, then enabling one menu
	* will also automatically disable all the others that are on the same side.
	* @param [menuId]  Optionally get the menu by its id, or side.
	* @return Returns the instance of the menu, which is useful for chaining.
	*/
	enable(shouldEnable, menuId) {
		return this.menuController.enable(shouldEnable, menuId);
	}
	/**
	* Used to enable or disable the ability to swipe open the menu.
	* @param shouldEnable  True if it should be swipe-able, false if not.
	* @param [menuId]  Optionally get the menu by its id, or side.
	* @return Returns the instance of the menu, which is useful for chaining.
	*/
	swipeGesture(shouldEnable, menuId) {
		return this.menuController.swipeGesture(shouldEnable, menuId);
	}
	/**
	* @param [menuId] Optionally get the menu by its id, or side.
	* @return Returns true if the specified menu is currently open, otherwise false.
	* If the menuId is not specified, it returns true if ANY menu is currenly open.
	*/
	isOpen(menuId) {
		return this.menuController.isOpen(menuId);
	}
	/**
	* @param [menuId]  Optionally get the menu by its id, or side.
	* @return Returns true if the menu is currently enabled, otherwise false.
	*/
	isEnabled(menuId) {
		return this.menuController.isEnabled(menuId);
	}
	/**
	* Used to get a menu instance. If a `menuId` is not provided then it'll
	* return the first menu found. If a `menuId` is `left` or `right`, then
	* it'll return the enabled menu on that side. Otherwise, if a `menuId` is
	* provided, then it'll try to find the menu using the menu's `id`
	* property. If a menu is not found then it'll return `null`.
	* @param [menuId]  Optionally get the menu by its id, or side.
	* @return Returns the instance of the menu if found, otherwise `null`.
	*/
	get(menuId) {
		return this.menuController.get(menuId);
	}
	/**
	* @return Returns the instance of the menu already opened, otherwise `null`.
	*/
	getOpen() {
		return this.menuController.getOpen();
	}
	/**
	* @return Returns an array of all menu instances.
	*/
	getMenus() {
		return this.menuController.getMenus();
	}
	registerAnimation(name, animation) {
		return this.menuController.registerAnimation(name, animation);
	}
	isAnimating() {
		return this.menuController.isAnimating();
	}
	_getOpenSync() {
		return this.menuController._getOpenSync();
	}
	_createAnimation(type, menuCmp) {
		return this.menuController._createAnimation(type, menuCmp);
	}
	_register(menu) {
		return this.menuController._register(menu);
	}
	_unregister(menu) {
		return this.menuController._unregister(menu);
	}
	_setOpen(menu, shouldOpen, animated) {
		return this.menuController._setOpen(menu, shouldOpen, animated);
	}
};
//#endregion
//#region node_modules/@ionic/core/components/p-BEiYs-sz.js
/*!
* (C) Ionic http://ionicframework.com - MIT License
*/
var a$1 = (o) => c$2(o);
var d$1 = (o, i) => ("string" == typeof o && (i = o, o = void 0), a$1(o).includes(i));
var c$2 = (o = window) => {
	if (void 0 === o) return [];
	o.Ionic = o.Ionic || {};
	let i = o.Ionic.platforms;
	return i ?? (i = o.Ionic.platforms = p$2(o), i.forEach(((i) => o.document.documentElement.classList.add(`plt-${i}`)))), i;
};
var p$2 = (i) => {
	const t = n$1.get("platform");
	return Object.keys(g$1).filter(((o) => {
		const e = t?.[o];
		return "function" == typeof e ? e(i) : g$1[o](i);
	}));
};
var m$1 = (o) => !!b$2(o, /iPad/i) || !(!b$2(o, /Macintosh/i) || !f$2(o));
var l$1 = (o) => b$2(o, /android|sink/i);
var f$2 = (o) => y$2(o, "(any-pointer:coarse)");
var u$2 = (o) => h$2(o) || w$1(o);
var h$2 = (o) => !!(o.cordova || o.phonegap || o.PhoneGap);
var w$1 = (o) => {
	return !!o.Capacitor?.isNativePlatform?.();
};
var b$2 = (o, i) => i.test(o.navigator.userAgent);
var y$2 = (o, i) => o.matchMedia?.(i).matches;
var g$1 = {
	ipad: m$1,
	iphone: (o) => b$2(o, /iPhone/i),
	ios: (o) => b$2(o, /iPhone|iPod/i) || m$1(o),
	android: l$1,
	phablet: (o) => {
		const i = o.innerWidth, t = o.innerHeight, e = Math.min(i, t), n = Math.max(i, t);
		return e > 390 && e < 520 && n > 620 && n < 800;
	},
	tablet: (o) => {
		const i = o.innerWidth, t = o.innerHeight, e = Math.min(i, t), n = Math.max(i, t);
		return m$1(o) || ((o) => l$1(o) && !b$2(o, /mobile/i))(o) || e > 460 && e < 820 && n > 780 && n < 1400;
	},
	cordova: h$2,
	capacitor: w$1,
	electron: (o) => b$2(o, /electron/i),
	pwa: (o) => !(!o.matchMedia?.("(display-mode: standalone)").matches && !o.navigator.standalone),
	mobile: f$2,
	mobileweb: (o) => f$2(o) && !u$2(o),
	desktop: (o) => !f$2(o),
	hybrid: u$2
};
var M$1;
var v$1 = (o) => o && qt(o) || M$1;
var P$1 = (n = {}) => {
	if ("undefined" == typeof window) return;
	const a = window.document, p = window, m = p.Ionic = p.Ionic || {}, l = {
		...e$1(p),
		persistConfig: !1,
		...m.config,
		...s$1(p),
		...n
	};
	n$1.reset(l), n$1.getBoolean("persistConfig") && o$3(p, l), c$2(p), m.config = n$1, m.mode = M$1 = n$1.get("mode", a.documentElement.getAttribute("mode") || (d$1(p, "ios") ? "ios" : "md")), n$1.set("mode", M$1), a.documentElement.setAttribute("mode", M$1), a.documentElement.classList.add(M$1), n$1.getBoolean("_testing") && n$1.set("animated", !1);
	const f = (o) => o.tagName?.startsWith("ION-"), u = (o) => ["ios", "md"].includes(o);
	Pt(((o) => {
		for (; o;) {
			const i = o.mode || o.getAttribute("mode");
			if (i) {
				if (u(i)) return i;
				f(o) && a$2("Invalid ionic mode: \"" + i + "\", expected: \"ios\" or \"md\"");
			}
			o = o.parentElement;
		}
		return M$1;
	}));
};
//#endregion
//#region node_modules/@ionic/core/components/p-DWGgvN5e.js
/*!
* (C) Ionic http://ionicframework.com - MIT License
*/
var o$2 = (o) => {
	try {
		if (o instanceof h$1) return o.value;
		if (!r$1() || "string" != typeof o || "" === o) return o;
		if (/onload\s*=/i.test(o)) return a$2("sanitizeDOMString - Content was discarded because it appears to contain an onload handler:", o.substring(0, 100)), "";
		const e = document.createDocumentFragment(), n = document.createElement("div");
		e.appendChild(n), n.innerHTML = o, y$1.forEach(((t) => {
			const o = e.querySelectorAll(t);
			for (let t = o.length - 1; t >= 0; t--) {
				const n = o[t];
				n.parentNode ? n.parentNode.removeChild(n) : e.removeChild(n);
				const r = i$1(n);
				for (let t = 0; t < r.length; t++) s(r[t], c$1);
			}
		}));
		const a = i$1(e);
		for (let t = 0; t < a.length; t++) s(a[t], c$1);
		const l = document.createElement("div");
		l.appendChild(e);
		const d = l.querySelector("div");
		return null !== d ? d.innerHTML : l.innerHTML;
	} catch (t) {
		return d$2("sanitizeDOMString", t), "";
	}
};
var n = (t) => {
	r$1() && (y$1.forEach(((e) => {
		const o = t.querySelectorAll(e);
		for (let t = o.length - 1; t >= 0; t--) o[t].remove();
	})), s(t, l, d));
};
var s = (t, e, o = []) => {
	if (t.nodeType && 1 !== t.nodeType) return;
	if ("undefined" != typeof NamedNodeMap && !(t.attributes instanceof NamedNodeMap)) return void t.remove();
	t.removeAttribute("style");
	for (let n = t.attributes.length - 1; n >= 0; n--) {
		const s = t.attributes.item(n), i = s.name, r = i.toLowerCase();
		if (!f$1(r, e, o)) {
			t.removeAttribute(i);
			continue;
		}
		const a = s.value;
		if (null == a) continue;
		const c = a.replace(p$1, "").toLowerCase();
		(c.includes("javascript:") || c.includes("vbscript:") || u$1.includes(r) && c.startsWith("data:") && !m.test(c)) && t.removeAttribute(i);
	}
	const n = i$1(t);
	for (let t = 0; t < n.length; t++) s(n[t], e, o);
};
var i$1 = (t) => null != t.children ? t.children : t.childNodes;
var r$1 = () => {
	const e = window?.Ionic?.config;
	return !e || (e.get ? e.get("sanitizerEnabled", !0) : !0 === e.sanitizerEnabled || void 0 === e.sanitizerEnabled);
};
var a = (t) => {
	const e = [];
	t.tagName in b$1 && e.push(t);
	for (const o of Object.keys(b$1)) e.push(...Array.from(t.querySelectorAll(o.toLowerCase())));
	for (const t of e) {
		if (!(t.tagName in b$1)) continue;
		const e = b$1[t.tagName];
		for (const o of e) {
			const e = t[o];
			"string" == typeof e && e.length > 0 && !t.hasAttribute(o) && t.setAttribute(o, e);
		}
	}
};
var c$1 = [
	"class",
	"id",
	"href",
	"src",
	"name",
	"slot"
];
var l = [
	"class",
	"id",
	"slot",
	"name",
	"title",
	"alt",
	"lang",
	"dir",
	"role",
	"type",
	"value",
	"disabled",
	"width",
	"height",
	"href",
	"src",
	"color",
	"size",
	"shape",
	"fill",
	"expand",
	"mode",
	"theme",
	"icon",
	"label",
	"label-placement",
	"justify",
	"inset",
	"lines",
	"ios",
	"md",
	"xmlns",
	"viewbox",
	"preserveaspectratio",
	"stroke",
	"stroke-width",
	"stroke-linecap",
	"stroke-linejoin",
	"stroke-opacity",
	"stroke-dasharray",
	"fill-rule",
	"fill-opacity",
	"clip-rule",
	"d",
	"points",
	"cx",
	"cy",
	"r",
	"rx",
	"ry",
	"x",
	"y",
	"x1",
	"y1",
	"x2",
	"y2",
	"transform",
	"opacity"
];
var d = ["aria-", "data-"];
var f$1 = (t, e, o) => !!e.includes(t) || o.some(((e) => t.startsWith(e)));
var p$1 = /[\u0000-\u0020\u007f-\u00a0]/g;
var u$1 = ["href", "src"];
var m = /^data:image\/(?:png|jpe?g|gif|webp|bmp|avif|x-icon|vnd\.microsoft\.icon)[;,]/;
var y$1 = [
	"script",
	"style",
	"iframe",
	"meta",
	"link",
	"object",
	"embed",
	"base"
];
var b$1 = { "ION-ICON": [
	"icon",
	"name",
	"src",
	"ios",
	"md"
] };
var h$1 = class {
	constructor(t) {
		this.value = t;
	}
};
//#endregion
//#region node_modules/@ionic/core/components/p-BNnmwjuy.js
/*!
* (C) Ionic http://ionicframework.com - MIT License
*/
var o$1 = (t) => r$2().duration(t ? 400 : 300);
var i = (t) => {
	let e, n;
	const r = t.width + 8, i = r$2(), u = r$2();
	t.isEndSide ? (e = r + "px", n = "0px") : (e = -r + "px", n = "0px"), i.addElement(t.menuInnerEl).fromTo("transform", `translateX(${e})`, `translateX(${n})`);
	const c = "ios" === v$1(t), p = c ? .2 : .25;
	return u.addElement(t.backdropEl).fromTo("opacity", .01, p), o$1(c).addAnimation([i, u]);
};
var u = (t) => {
	let e, n;
	const r = v$1(t), i = t.width;
	t.isEndSide ? (e = -i + "px", n = i + "px") : (e = i + "px", n = -i + "px");
	const u = r$2().addElement(t.menuInnerEl).fromTo("transform", `translateX(${n})`, "translateX(0px)"), c = r$2().addElement(t.contentEl).fromTo("transform", "translateX(0px)", `translateX(${e})`), p = r$2().addElement(t.backdropEl).fromTo("opacity", .01, .32);
	return o$1("ios" === r).addAnimation([
		u,
		c,
		p
	]);
};
var c = (t) => {
	const e = v$1(t), n = t.width * (t.isEndSide ? -1 : 1) + "px", r = r$2().addElement(t.contentEl).fromTo("transform", "translateX(0px)", `translateX(${n})`);
	return o$1("ios" === e).addAnimation(r);
};
var p = (() => {
	const s = /* @__PURE__ */ new Map(), a = [], o = async (t, e = !1) => {
		if (await w(), "start" === t || "end" === t) {
			const r = a.filter(((e) => e.side === t && !e.disabled));
			if (r.length >= 1) return r.length > 1 && e && a$2(`menuController queried for a menu on the "${t}" side, but ${r.length} menus were found. The first menu reference will be used. If this is not the behavior you want then pass the ID of the menu instead of its side.`, r.map(((t) => t.el))), r[0].el;
			const s = a.filter(((e) => e.side === t));
			if (s.length >= 1) return s.length > 1 && e && a$2(`menuController queried for a menu on the "${t}" side, but ${s.length} menus were found. The first menu reference will be used. If this is not the behavior you want then pass the ID of the menu instead of its side.`, s.map(((t) => t.el))), s[0].el;
		} else if (null != t) return d(((e) => e.menuId === t));
		return d(((t) => !t.disabled)) || (a.length > 0 ? a[0].el : void 0);
	}, p = async () => (await w(), f()), m = (t, e) => {
		s.set(t, e);
	}, f = () => d(((t) => t._isOpen)), l = () => a.some(((t) => t.isAnimating)), d = (t) => {
		const e = a.find(t);
		if (void 0 !== e) return e.el;
	}, w = () => Promise.all(Array.from(document.querySelectorAll("ion-menu")).map(((t) => new Promise(((e) => n$2(t, e))))));
	return m("reveal", c), m("push", u), m("overlay", i), o$4?.addEventListener("ionBackButton", ((t) => {
		const n = f();
		n && t.detail.register(99, (() => n.close()));
	})), {
		registerAnimation: m,
		get: o,
		getMenus: async () => (await w(), a.map(((t) => t.el))),
		getOpen: p,
		isEnabled: async (t) => {
			const e = await o(t);
			return !!e && !e.disabled;
		},
		swipeGesture: async (t, e) => {
			const n = await o(e);
			return n && (n.swipeGesture = t), n;
		},
		isAnimating: async () => (await w(), l()),
		isOpen: async (t) => {
			if (null != t) {
				const e = await o(t);
				return void 0 !== e && e.isOpen();
			}
			return void 0 !== await p();
		},
		enable: async (t, e) => {
			const n = await o(e);
			return n && (n.disabled = !t), n;
		},
		toggle: async (t) => {
			const e = await o(t, !0);
			return !!e && e.toggle();
		},
		close: async (t) => {
			const e = await (void 0 !== t ? o(t, !0) : p());
			return void 0 !== e && e.close();
		},
		open: async (t) => {
			const e = await o(t, !0);
			return !!e && e.open();
		},
		_getOpenSync: f,
		_createAnimation: (t, e) => {
			const n = s.get(t);
			if (!n) throw new Error("animation not registered");
			return n(e);
		},
		_register: (t) => {
			a.indexOf(t) < 0 && a.push(t);
		},
		_unregister: (t) => {
			const e = a.indexOf(t);
			e > -1 && a.splice(e, 1);
		},
		_setOpen: async (t, e, n, r) => {
			if (l()) return !1;
			if (e) {
				const e = await p();
				e && t.el !== e && await e.setOpen(!1, !1);
			}
			return t._setOpen(e, n, r);
		}
	};
})();
//#endregion
//#region node_modules/@ionic/core/components/p-Canp1qah.js
/*!
* (C) Ionic http://ionicframework.com - MIT License
*/
var t = async (t, o, r, n, i, s) => {
	if (t) return t.attachViewToDom(o, r, i, n);
	if (!(s || "string" == typeof r || r instanceof HTMLElement)) throw new Error("framework delegate is missing");
	const a = "string" == typeof r ? o.ownerDocument?.createElement(r) : r;
	return n && n.forEach(((e) => a.classList.add(e))), i && Object.assign(a, i), o.appendChild(a), await new Promise(((t) => n$2(a, t))), a;
};
var o = (e, t) => {
	if (t) {
		if (e) return e.removeViewFromDom(t.parentElement, t);
		t.remove();
	}
	return Promise.resolve();
};
var r = () => {
	let t, o;
	return {
		attachViewToDom: async (r, n, i = {}, s = []) => {
			let a;
			if (t = r, n) {
				const o = "string" == typeof n ? t.ownerDocument?.createElement(n) : n;
				s.forEach(((e) => o.classList.add(e))), Object.assign(o, i), t.appendChild(o), a = o, await new Promise(((t) => n$2(o, t)));
			} else if (t.children.length > 0 && ("ION-MODAL" === t.tagName || "ION-POPOVER" === t.tagName) && !(a = t.children[0]).classList.contains("ion-delegate-host")) {
				const e = t.ownerDocument?.createElement("div");
				e.classList.add("ion-delegate-host"), s.forEach(((t) => e.classList.add(t))), e.append(...t.children), t.appendChild(e), a = e;
			}
			const c = document.querySelector("ion-app") || document.body;
			return o = document.createComment("ionic teleport"), t.parentNode.insertBefore(o, t), c.appendChild(t), a ?? t;
		},
		removeViewFromDom: () => (t && o && (o.parentNode.insertBefore(t, o), o.remove()), Promise.resolve())
	};
};
//#endregion
//#region node_modules/@ionic/core/components/p-WMQuK_Tj.js
/*!
* (C) Ionic http://ionicframework.com - MIT License
*/
var f = "[tabindex]:not([tabindex^=\"-\"]):not([hidden]):not([disabled]), input:not([type=hidden]):not([tabindex^=\"-\"]):not([hidden]):not([disabled]), textarea:not([tabindex^=\"-\"]):not([hidden]):not([disabled]), button:not([tabindex^=\"-\"]):not([hidden]):not([disabled]), select:not([tabindex^=\"-\"]):not([hidden]):not([disabled]), ion-checkbox:not([tabindex^=\"-\"]):not([hidden]):not([disabled]), ion-radio:not([tabindex^=\"-\"]):not([hidden]):not([disabled]), .ion-focusable:not([tabindex^=\"-\"]):not([hidden]):not([disabled]), .ion-focusable[disabled=\"false\"]:not([tabindex^=\"-\"]):not([hidden])";
var h = (n, e) => {
	b(n.querySelector(f), e ?? n);
};
var v = (n, e) => {
	const o = Array.from(n.querySelectorAll(f));
	b(o.length > 0 ? o[o.length - 1] : null, e ?? n);
};
var b = (n, o) => {
	let t = n;
	const i = n?.shadowRoot;
	if (i && (t = i.querySelector(f) || n), t) {
		const n = t.closest("ion-radio-group");
		n ? n.setFocus() : b$3(t);
	} else o.focus();
};
var w = 0;
var y = 0;
var g = /* @__PURE__ */ new WeakMap();
var x = (n) => "ION-TOAST" !== n.tagName && !1 !== n.focusTrap && ((n) => !1 !== n.showBackdrop && !((n.backdropBreakpoint ?? 0) > 0))(n);
var k = (n) => ({
	create: (e) => P(n, e),
	dismiss: (e, o, t) => N(document, e, o, n, t),
	getTop: async () => J(document, n)
});
var j = k("ion-alert");
var O = k("ion-action-sheet");
var T = k("ion-loading");
var B = k("ion-modal");
var C = k("ion-popover");
var A = k("ion-toast");
var D = (n) => {
	"undefined" != typeof document && E(document);
	n.overlayIndex = w++;
};
var I = (n) => (n.hasAttribute("id") || (n.id = "ion-overlay-" + ++y), n.id);
var P = (n, e) => "undefined" != typeof window && void 0 !== window.customElements ? window.customElements.whenDefined(n).then((() => {
	const t = document.createElement(n);
	return t.classList.add("overlay-hidden"), Object.assign(t, {
		...e,
		hasController: !0
	}), W(document).appendChild(t), new Promise(((n) => n$2(t, n)));
})) : Promise.resolve();
var S = (n, o) => {
	let t = n;
	const i = n?.shadowRoot;
	i && (t = i.querySelector(f) || n), t ? b$3(t) : o.focus();
};
var E = (n) => {
	0 === w && (w = 1, n.addEventListener("focus", ((e) => {
		((n, e) => {
			const o = J(e, "ion-alert,ion-action-sheet,ion-loading,ion-modal,ion-popover"), i = n.target;
			o && i && (o.classList.contains("ion-disable-focus-trap") || (o.shadowRoot ? (() => {
				if (o.contains(i)) o.lastFocus = i;
				else if ("ION-TOAST" === i.tagName) S(o.lastFocus, o);
				else {
					const n = o.lastFocus;
					h(o), n === e.activeElement && v(o), o.lastFocus = e.activeElement;
				}
			})() : (() => {
				if (o === i) o.lastFocus = void 0;
				else if ("ION-TOAST" === i.tagName) S(o.lastFocus, o);
				else {
					const n = m$2(o);
					if (!n.contains(i)) return;
					const a = n.querySelector(".ion-overlay-wrapper");
					if (!a) return;
					if (a.contains(i) || i === n.querySelector("ion-backdrop")) o.lastFocus = i;
					else {
						const n = o.lastFocus;
						h(a, o), n === e.activeElement && v(a, o), o.lastFocus = e.activeElement;
					}
				}
			})()));
		})(e, n);
	}), !0), n.addEventListener("ionBackButton", ((e) => {
		const o = J(n);
		o?.backdropDismiss && e.detail.register(100, (() => {
			o.dismiss(void 0, "backdrop");
		}));
	})), o$5() || n.addEventListener("keydown", ((e) => {
		if ("Escape" === e.key) {
			const e = J(n);
			e?.backdropDismiss && e.dismiss(void 0, "backdrop");
		}
	})));
};
var N = (n, e, o, t, i) => {
	const a = J(n, t, i);
	return a ? a.dismiss(e, o) : Promise.reject("overlay does not exist");
};
var q = (n, e) => ((n, e) => (void 0 === e && (e = "ion-alert,ion-action-sheet,ion-loading,ion-modal,ion-popover,ion-toast"), Array.from(n.querySelectorAll(e)).filter(((n) => n.overlayIndex > 0))))(n, e).filter(((n) => !n.classList.contains("overlay-hidden")));
var J = (n, e, o) => {
	const t = q(n, e);
	return (void 0 === o ? t : t.filter(((n) => n.id === o))).slice(-1)[0];
};
var M = () => W(document).querySelector("ion-router-outlet, #ion-view-container-root");
var $ = (n = !1) => {
	const e = M();
	e && (n ? e.setAttribute("aria-hidden", "true") : e.removeAttribute("aria-hidden"));
};
var z = () => {
	"undefined" != typeof document && (q(document).some(((n) => x(n))) || ($(!1), document.body.classList.remove("backdrop-no-scroll")));
};
var F = (n) => {
	M()?.contains(n) || $(!0), document.body.classList.add(i$2);
};
var G = (n) => {
	if ("undefined" == typeof document) return;
	const e = n;
	x(e) && F(e);
};
var L = async (n, e, o, i, a) => {
	if (n.presented) return;
	"ION-TOAST" !== n.el.tagName && U(n.el);
	const s = n.el, d = x(s);
	n.presented = !0, n.willPresent.emit(), d && F(s), n.willPresentShorthand?.emit();
	const c = v$1(n);
	if (await Z(n, n.enterAnimation ? n.enterAnimation : n$1.get(e, "ios" === c ? o : i), n.el, a) && (n.didPresent.emit(), n.didPresentShorthand?.emit()), n.keyboardClose && (null === document.activeElement || !n.el.contains(document.activeElement))) {
		const e = m$2(n.el).querySelector("[role=\"dialog\"][tabindex]") ?? n.el;
		try {
			e.focus({ preventScroll: !0 });
		} catch {
			e.focus();
		}
	}
	n.el.removeAttribute("aria-hidden"), n.el.removeAttribute("inert");
};
var U = async (n) => {
	let e = document.activeElement;
	if (!e) return;
	e.blur();
	const o = e?.shadowRoot;
	o && (e = o.querySelector(f) || e), await n.onDidDismiss(), null !== document.activeElement && document.activeElement !== document.body || e.focus();
};
var V = async (e, o, t, i, a, s, d) => {
	if (!e.presented) return !1;
	const l = (void 0 !== o$4 ? q(o$4) : []).filter(((n) => x(n))), m = e.el;
	x(m) && 1 === l.length && l[0].id === m.id && ($(!1), document.body.classList.remove("backdrop-no-scroll")), e.presented = !1;
	try {
		e.el.style.setProperty("pointer-events", "none"), e.willDismiss.emit({
			data: o,
			role: t
		}), e.willDismissShorthand?.emit({
			data: o,
			role: t
		});
		const n = v$1(e), c = e.leaveAnimation ? e.leaveAnimation : n$1.get(i, "ios" === n ? a : s);
		t !== "gesture" && await Z(e, c, e.el, d), e.didDismiss.emit({
			data: o,
			role: t
		}), e.didDismissShorthand?.emit({
			data: o,
			role: t
		}), (g.get(e) || []).forEach(((n) => n.destroy())), g.delete(e), e.el.classList.add("overlay-hidden"), e.el.style.removeProperty("pointer-events"), void 0 !== e.el.lastFocus && (e.el.lastFocus = void 0);
	} catch (n) {
		d$2(`[${e.el.tagName.toLowerCase()}] - `, n);
	}
	return e.el.remove(), !0;
};
var W = (n) => n.querySelector("ion-app") || n.body;
var Z = async (n, e, o, t) => {
	o.classList.remove("overlay-hidden");
	const i = e(n.el, t);
	n.animated && n$1.getBoolean("animated", !0) || i.duration(0), n.keyboardClose && i.beforeAddWrite((() => {
		const n = o.ownerDocument.activeElement;
		n?.matches("input,ion-input, ion-textarea") && n.blur();
	}));
	const a = g.get(n) || [];
	return g.set(n, [...a, i]), await i.play(), !0;
};
var _ = (n, e) => {
	let o;
	const t = new Promise(((n) => o = n));
	return K(n, e, ((n) => {
		o(n.detail);
	})), t;
};
var K = (n, e, o) => {
	const t = (i) => {
		c$4(n, e, t), o(i);
	};
	d$3(n, e, t);
};
var Y = (n) => "cancel" === n || n === "backdrop";
var H = (n) => n();
var Q = (n, e) => {
	if ("function" == typeof n) return n$1.get("_zoneGate", H)((() => {
		try {
			return n(e);
		} catch (n) {
			throw n;
		}
	}));
};
var R = [
	"",
	"100%",
	"100vw",
	"100vh",
	"100dvw",
	"100dvh",
	"100svw",
	"100svh"
];
var X = [
	"auto",
	"fit-content",
	"min-content",
	"max-content"
];
var nn = (n) => {
	const e = n.trim().toLowerCase();
	return R.includes(e) ? "fullscreen" : X.some(((n) => e.endsWith(n))) ? "content" : "definite";
};
var en = "backdrop";
var on = "gesture";
var an = (n) => {
	let e, o = !1;
	const t = r(), i = (i = !1) => {
		if (e && !i) return {
			delegate: e,
			inline: o
		};
		const { el: a, hasController: s, delegate: d } = n;
		return o = null !== a.parentNode && !s, e = o ? d || t : d, {
			inline: o,
			delegate: e
		};
	};
	return {
		attachViewToDom: async (e) => {
			const { delegate: o } = i(!0);
			if (o) return await o.attachViewToDom(n.el, e);
			const { hasController: t } = n;
			if (t && void 0 !== e) throw new Error("framework delegate is missing");
			return null;
		},
		removeViewFromDom: () => {
			const { delegate: e } = i();
			e && void 0 !== n.el && e.removeViewFromDom(n.el.parentElement, n.el);
		}
	};
};
var sn = () => {
	let n;
	const e = () => {
		n && (n(), n = void 0);
	};
	return {
		addClickListener: (o, t) => {
			e();
			const i = void 0 !== t ? document.getElementById(t) : null;
			i ? n = ((n, e) => {
				const o = () => {
					e.present();
				};
				return n.addEventListener("click", o), () => {
					n.removeEventListener("click", o);
				};
			})(i, o) : a$2(`[${o.tagName.toLowerCase()}] - A trigger element with the ID "${t}" was not found in the DOM. The trigger element must be in the DOM when the "trigger" property is set on an overlay component.`, o);
		},
		removeClickListener: e
	};
};
var dn = "ion-disable-focus-trap";
//#endregion
//#region node_modules/@ionic/core/components/index.js
/*!
* (C) Ionic http://ionicframework.com - MIT License
*/
var e = (e) => {
	const { swiper: o, extendParams: s } = e, t = {
		effect: void 0,
		direction: "horizontal",
		initialSlide: 0,
		loop: !1,
		parallax: !1,
		slidesPerView: 1,
		spaceBetween: 0,
		speed: 300,
		slidesPerColumn: 1,
		slidesPerColumnFill: "column",
		slidesPerGroup: 1,
		centeredSlides: !1,
		slidesOffsetBefore: 0,
		slidesOffsetAfter: 0,
		touchEventsTarget: "container",
		freeMode: !1,
		freeModeMomentum: !0,
		freeModeMomentumRatio: 1,
		freeModeMomentumBounce: !0,
		freeModeMomentumBounceRatio: 1,
		freeModeMomentumVelocityRatio: 1,
		freeModeSticky: !1,
		freeModeMinimumVelocity: .02,
		autoHeight: !1,
		setWrapperSize: !1,
		zoom: {
			maxRatio: 3,
			minRatio: 1,
			toggle: !1
		},
		touchRatio: 1,
		touchAngle: 45,
		simulateTouch: !0,
		touchStartPreventDefault: !1,
		shortSwipes: !0,
		longSwipes: !0,
		longSwipesRatio: .5,
		longSwipesMs: 300,
		followFinger: !0,
		threshold: 0,
		touchMoveStopPropagation: !0,
		touchReleaseOnEdges: !1,
		iOSEdgeSwipeDetection: !1,
		iOSEdgeSwipeThreshold: 20,
		resistance: !0,
		resistanceRatio: .85,
		watchSlidesProgress: !1,
		watchSlidesVisibility: !1,
		preventClicks: !0,
		preventClicksPropagation: !0,
		slideToClickedSlide: !1,
		loopAdditionalSlides: 0,
		noSwiping: !0,
		runCallbacksOnInit: !0,
		coverflowEffect: {
			rotate: 50,
			stretch: 0,
			depth: 100,
			modifier: 1,
			slideShadows: !0
		},
		flipEffect: {
			slideShadows: !0,
			limitRotation: !0
		},
		cubeEffect: {
			slideShadows: !0,
			shadow: !0,
			shadowOffset: 20,
			shadowScale: .94
		},
		fadeEffect: { crossFade: !1 },
		a11y: {
			prevSlideMessage: "Previous slide",
			nextSlideMessage: "Next slide",
			firstSlideMessage: "This is the first slide",
			lastSlideMessage: "This is the last slide"
		}
	};
	o.pagination && (t.pagination = {
		type: "bullets",
		clickable: !1,
		hideOnClick: !1
	}), o.scrollbar && (t.scrollbar = { hide: !0 }), s(t);
};
//#endregion
//#region node_modules/@ionic/angular/dist/common/providers/platform.js
var Platform = class Platform {
	doc;
	_readyPromise;
	win;
	/**
	* @hidden
	*/
	backButton = new Subject();
	/**
	* The keyboardDidShow event emits when the
	* on-screen keyboard is presented.
	*/
	keyboardDidShow = new Subject();
	/**
	* The keyboardDidHide event emits when the
	* on-screen keyboard is hidden.
	*/
	keyboardDidHide = new Subject();
	/**
	* The pause event emits when the native platform puts the application
	* into the background, typically when the user switches to a different
	* application. This event would emit when a Cordova app is put into
	* the background, however, it would not fire on a standard web browser.
	*/
	pause = new Subject();
	/**
	* The resume event emits when the native platform pulls the application
	* out from the background. This event would emit when a Cordova app comes
	* out from the background, however, it would not fire on a standard web browser.
	*/
	resume = new Subject();
	/**
	* The resize event emits when the browser window has changed dimensions. This
	* could be from a browser window being physically resized, or from a device
	* changing orientation.
	*/
	resize = new Subject();
	constructor(doc, zone) {
		this.doc = doc;
		zone.run(() => {
			this.win = doc.defaultView;
			this.backButton.subscribeWithPriority = function(priority, callback) {
				return this.subscribe((ev) => {
					return ev.register(priority, (processNextHandler) => zone.run(() => callback(processNextHandler)));
				});
			};
			proxyEvent(this.pause, doc, "pause", zone);
			proxyEvent(this.resume, doc, "resume", zone);
			proxyEvent(this.backButton, doc, "ionBackButton", zone);
			proxyEvent(this.resize, this.win, "resize", zone);
			proxyEvent(this.keyboardDidShow, this.win, "ionKeyboardDidShow", zone);
			proxyEvent(this.keyboardDidHide, this.win, "ionKeyboardDidHide", zone);
			let readyResolve;
			this._readyPromise = new Promise((res) => {
				readyResolve = res;
			});
			if (this.win?.["cordova"]) doc.addEventListener("deviceready", () => {
				readyResolve("cordova");
			}, { once: true });
			else readyResolve("dom");
		});
	}
	/**
	* @returns returns true/false based on platform.
	* @description
	* Depending on the platform the user is on, `is(platformName)` will
	* return `true` or `false`. Note that the same app can return `true`
	* for more than one platform name. For example, an app running from
	* an iPad would return `true` for the platform names: `mobile`,
	* `ios`, `ipad`, and `tablet`. Additionally, if the app was running
	* from Cordova then `cordova` would be true, and if it was running
	* from a web browser on the iPad then `mobileweb` would be `true`.
	*
	* ```
	* import { Platform } from 'ionic-angular';
	*
	* @Component({...})
	* export MyPage {
	*   constructor(public platform: Platform) {
	*     if (this.platform.is('ios')) {
	*       // This will only print when on iOS
	*       console.log('I am an iOS device!');
	*     }
	*   }
	* }
	* ```
	*
	* | Platform Name   | Description                        |
	* |-----------------|------------------------------------|
	* | android         | on a device running Android.       |
	* | capacitor       | on a device running Capacitor.     |
	* | cordova         | on a device running Cordova.       |
	* | ios             | on a device running iOS.           |
	* | ipad            | on an iPad device.                 |
	* | iphone          | on an iPhone device.               |
	* | phablet         | on a phablet device.               |
	* | tablet          | on a tablet device.                |
	* | electron        | in Electron on a desktop device.   |
	* | pwa             | as a PWA app.                      |
	* | mobile          | on a mobile device.                |
	* | mobileweb       | on a mobile device in a browser.   |
	* | desktop         | on a desktop device.               |
	* | hybrid          | is a cordova or capacitor app.     |
	*
	*/
	is(platformName) {
		return d$1(this.win, platformName);
	}
	/**
	* @returns the array of platforms
	* @description
	* Depending on what device you are on, `platforms` can return multiple values.
	* Each possible value is a hierarchy of platforms. For example, on an iPhone,
	* it would return `mobile`, `ios`, and `iphone`.
	*
	* ```
	* import { Platform } from 'ionic-angular';
	*
	* @Component({...})
	* export MyPage {
	*   constructor(public platform: Platform) {
	*     // This will print an array of the current platforms
	*     console.log(this.platform.platforms());
	*   }
	* }
	* ```
	*/
	platforms() {
		return a$1(this.win);
	}
	/**
	* Returns a promise when the platform is ready and native functionality
	* can be called. If the app is running from within a web browser, then
	* the promise will resolve when the DOM is ready. When the app is running
	* from an application engine such as Cordova, then the promise will
	* resolve when Cordova triggers the `deviceready` event.
	*
	* The resolved value is the `readySource`, which states which platform
	* ready was used. For example, when Cordova is ready, the resolved ready
	* source is `cordova`. The default ready source value will be `dom`. The
	* `readySource` is useful if different logic should run depending on the
	* platform the app is running from. For example, only Cordova can execute
	* the status bar plugin, so the web should not run status bar plugin logic.
	*
	* ```
	* import { Component } from '@angular/core';
	* import { Platform } from 'ionic-angular';
	*
	* @Component({...})
	* export MyApp {
	*   constructor(public platform: Platform) {
	*     this.platform.ready().then((readySource) => {
	*       console.log('Platform ready from', readySource);
	*       // Platform now ready, execute any required native code
	*     });
	*   }
	* }
	* ```
	*/
	ready() {
		return this._readyPromise;
	}
	/**
	* Returns if this app is using right-to-left language direction or not.
	* We recommend the app's `index.html` file already has the correct `dir`
	* attribute value set, such as `<html dir="ltr">` or `<html dir="rtl">`.
	* [W3C: Structural markup and right-to-left text in HTML](http://www.w3.org/International/questions/qa-html-dir)
	*/
	get isRTL() {
		return this.doc.dir === "rtl";
	}
	/**
	* Get the query string parameter
	*/
	getQueryParam(key) {
		return readQueryParam(this.win.location.href, key);
	}
	/**
	* Returns `true` if the app is in landscape mode.
	*/
	isLandscape() {
		return !this.isPortrait();
	}
	/**
	* Returns `true` if the app is in portrait mode.
	*/
	isPortrait() {
		return this.win.matchMedia?.("(orientation: portrait)").matches;
	}
	testUserAgent(expression) {
		const nav = this.win.navigator;
		return !!(nav?.userAgent && nav.userAgent.indexOf(expression) >= 0);
	}
	/**
	* Get the current url.
	*/
	url() {
		return this.win.location.href;
	}
	/**
	* Gets the width of the platform's viewport using `window.innerWidth`.
	*/
	width() {
		return this.win.innerWidth;
	}
	/**
	* Gets the height of the platform's viewport using `window.innerHeight`.
	*/
	height() {
		return this.win.innerHeight;
	}
	/** @nocollapse */
	static ɵfac = function Platform_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || Platform)(ɵɵinject(DOCUMENT), ɵɵinject(NgZone));
	};
	/** @nocollapse */
	static ɵprov = /* @__PURE__ */ ɵɵdefineInjectable({
		token: Platform,
		factory: Platform.ɵfac,
		providedIn: "root"
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Platform, [{
		type: Injectable,
		args: [{ providedIn: "root" }]
	}], () => [{
		type: void 0,
		decorators: [{
			type: Inject,
			args: [DOCUMENT]
		}]
	}, { type: NgZone }], null);
})();
var readQueryParam = (url, key) => {
	key = key.replace(/[[\]\\]/g, "\\$&");
	const results = new RegExp("[\\?&]" + key + "=([^&#]*)").exec(url);
	return results ? decodeURIComponent(results[1].replace(/\+/g, " ")) : null;
};
var proxyEvent = (emitter, el, eventName, zone) => {
	if (el) el.addEventListener(eventName, (ev) => {
		/**
		* `zone.run` is required to make sure that we are running inside the Angular zone
		* at all times. This is necessary since an app that has Capacitor will
		* override the `document.addEventListener` with its own implementation.
		* The override causes the event to no longer be in the Angular zone.
		*/
		zone.run(() => {
			const value = ev != null ? ev.detail : void 0;
			emitter.next(value);
		});
	});
};
//#endregion
//#region node_modules/@ionic/angular/dist/common/providers/nav-controller.js
var NavController = class NavController {
	location;
	serializer;
	router;
	topOutlet;
	direction = DEFAULT_DIRECTION;
	animated = DEFAULT_ANIMATED;
	animationBuilder;
	guessDirection = "forward";
	guessAnimation;
	lastNavId = -1;
	constructor(platform, location, serializer, router) {
		this.location = location;
		this.serializer = serializer;
		this.router = router;
		if (router) router.events.subscribe((ev) => {
			if (ev instanceof NavigationStart) {
				const id = ev.restoredState ? ev.restoredState.navigationId : ev.id;
				this.guessDirection = this.guessAnimation = id < this.lastNavId ? "back" : "forward";
				this.lastNavId = this.guessDirection === "forward" ? ev.id : id;
			}
			if (ev instanceof NavigationCancel || ev instanceof NavigationError) {
				this.direction = DEFAULT_DIRECTION;
				this.animated = DEFAULT_ANIMATED;
				this.animationBuilder = void 0;
			}
		});
		platform.backButton.subscribeWithPriority(0, (processNextHandler) => {
			this.pop();
			processNextHandler();
		});
	}
	/**
	* This method uses Angular's [Router](https://angular.io/api/router/Router) under the hood,
	* it's equivalent to calling `this.router.navigateByUrl()`, but it's explicit about the **direction** of the transition.
	*
	* Going **forward** means that a new page is going to be pushed to the stack of the outlet (ion-router-outlet),
	* and that it will show a "forward" animation by default.
	*
	* Navigating forward can also be triggered in a declarative manner by using the `[routerDirection]` directive:
	*
	* ```html
	* <a routerLink="/path/to/page" routerDirection="forward">Link</a>
	* ```
	*/
	navigateForward(url, options = {}) {
		this.setDirection("forward", options.animated, options.animationDirection, options.animation);
		return this.navigate(url, options);
	}
	/**
	* This method uses Angular's [Router](https://angular.io/api/router/Router) under the hood,
	* it's equivalent to calling:
	*
	* ```ts
	* this.navController.setDirection('back');
	* this.router.navigateByUrl(path);
	* ```
	*
	* Going **back** means that all the pages in the stack until the navigated page is found will be popped,
	* and that it will show a "back" animation by default.
	*
	* Navigating back can also be triggered in a declarative manner by using the `[routerDirection]` directive:
	*
	* ```html
	* <a routerLink="/path/to/page" routerDirection="back">Link</a>
	* ```
	*/
	navigateBack(url, options = {}) {
		this.setDirection("back", options.animated, options.animationDirection, options.animation);
		return this.navigate(url, options);
	}
	/**
	* This method uses Angular's [Router](https://angular.io/api/router/Router) under the hood,
	* it's equivalent to calling:
	*
	* ```ts
	* this.navController.setDirection('root');
	* this.router.navigateByUrl(path);
	* ```
	*
	* Going **root** means that all existing pages in the stack will be removed,
	* and the navigated page will become the single page in the stack.
	*
	* Navigating root can also be triggered in a declarative manner by using the `[routerDirection]` directive:
	*
	* ```html
	* <a routerLink="/path/to/page" routerDirection="root">Link</a>
	* ```
	*/
	navigateRoot(url, options = {}) {
		this.setDirection("root", options.animated, options.animationDirection, options.animation);
		return this.navigate(url, options);
	}
	/**
	* Same as [Location](https://angular.io/api/common/Location)'s back() method.
	* It will use the standard `window.history.back()` under the hood, but featuring a `back` animation
	* by default.
	*/
	back(options = {
		animated: true,
		animationDirection: "back"
	}) {
		this.setDirection("back", options.animated, options.animationDirection, options.animation);
		return this.location.back();
	}
	/**
	* This methods goes back in the context of Ionic's stack navigation.
	*
	* It recursively finds the top active `ion-router-outlet` and calls `pop()`.
	* This is the recommended way to go back when you are using `ion-router-outlet`.
	*
	* Resolves to `true` if it was able to pop.
	*/
	async pop() {
		let outlet = this.topOutlet;
		while (outlet) if (await outlet.pop()) return true;
		else outlet = outlet.parentOutlet;
		return false;
	}
	/**
	* This methods specifies the direction of the next navigation performed by the Angular router.
	*
	* `setDirection()` does not trigger any transition, it just sets some flags to be consumed by `ion-router-outlet`.
	*
	* It's recommended to use `navigateForward()`, `navigateBack()` and `navigateRoot()` instead of `setDirection()`.
	*/
	setDirection(direction, animated, animationDirection, animationBuilder) {
		this.direction = direction;
		this.animated = getAnimation(direction, animated, animationDirection);
		this.animationBuilder = animationBuilder;
	}
	/**
	* @internal
	*/
	setTopOutlet(outlet) {
		this.topOutlet = outlet;
	}
	/**
	* @internal
	*/
	consumeTransition() {
		let direction = "root";
		let animation;
		const animationBuilder = this.animationBuilder;
		if (this.direction === "auto") {
			direction = this.guessDirection;
			animation = this.guessAnimation;
		} else {
			animation = this.animated;
			direction = this.direction;
		}
		this.direction = DEFAULT_DIRECTION;
		this.animated = DEFAULT_ANIMATED;
		this.animationBuilder = void 0;
		return {
			direction,
			animation,
			animationBuilder
		};
	}
	navigate(url, options) {
		if (Array.isArray(url)) return this.router.navigate(url, options);
		else {
			/**
			* navigateByUrl ignores any properties that
			* would change the url, so things like queryParams
			* would be ignored unless we create a url tree
			* More Info: https://github.com/angular/angular/issues/18798
			*/
			const urlTree = this.serializer.parse(url.toString());
			if (options.queryParams !== void 0) urlTree.queryParams = { ...options.queryParams };
			if (options.fragment !== void 0) urlTree.fragment = options.fragment;
			/**
			* `navigateByUrl` will still apply `NavigationExtras` properties
			* that do not modify the url, such as `replaceUrl` which is why
			* `options` is passed in here.
			*/
			return this.router.navigateByUrl(urlTree, options);
		}
	}
	/** @nocollapse */
	static ɵfac = function NavController_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || NavController)(ɵɵinject(Platform), ɵɵinject(Location), ɵɵinject(UrlSerializer), ɵɵinject(Router, 8));
	};
	/** @nocollapse */
	static ɵprov = /* @__PURE__ */ ɵɵdefineInjectable({
		token: NavController,
		factory: NavController.ɵfac,
		providedIn: "root"
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NavController, [{
		type: Injectable,
		args: [{ providedIn: "root" }]
	}], () => [
		{ type: Platform },
		{ type: Location },
		{ type: UrlSerializer },
		{
			type: Router,
			decorators: [{ type: Optional }]
		}
	], null);
})();
var getAnimation = (direction, animated, animationDirection) => {
	if (animated === false) return;
	if (animationDirection !== void 0) return animationDirection;
	if (direction === "forward" || direction === "back") return direction;
	else if (direction === "root" && animated === true) return "forward";
};
var DEFAULT_DIRECTION = "auto";
var DEFAULT_ANIMATED = void 0;
//#endregion
//#region node_modules/@ionic/angular/dist/common/providers/config.js
var Config = class Config {
	get(key, fallback) {
		const c = getConfig();
		if (c) return c.get(key, fallback);
		return null;
	}
	getBoolean(key, fallback) {
		const c = getConfig();
		if (c) return c.getBoolean(key, fallback);
		return false;
	}
	getNumber(key, fallback) {
		const c = getConfig();
		if (c) return c.getNumber(key, fallback);
		return 0;
	}
	/** @nocollapse */
	static ɵfac = function Config_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || Config)();
	};
	/** @nocollapse */
	static ɵprov = /* @__PURE__ */ ɵɵdefineInjectable({
		token: Config,
		factory: Config.ɵfac,
		providedIn: "root"
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Config, [{
		type: Injectable,
		args: [{ providedIn: "root" }]
	}], null, null);
})();
var ConfigToken = new InjectionToken("USERCONFIG");
var getConfig = () => {
	if (typeof window !== "undefined") {
		const Ionic = window.Ionic;
		if (Ionic?.config) return Ionic.config;
	}
	return null;
};
//#endregion
//#region node_modules/@ionic/angular/dist/common/directives/navigation/nav-params.js
/**
* @description
* NavParams are an object that exists on a page and can contain data for that particular view.
* Similar to how data was pass to a view in V1 with `$stateParams`, NavParams offer a much more flexible
* option with a simple `get` method.
*
* @usage
* ```ts
* import { NavParams } from '@ionic/angular';
*
* export class MyClass{
*
*  constructor(navParams: NavParams){
*    // userParams is an object we have in our nav-parameters
*    navParams.get('userParams');
*  }
*
* }
* ```
*/
var NavParams = class {
	data;
	constructor(data = {}) {
		this.data = data;
		console.warn(`[Ionic Warning]: NavParams has been deprecated in favor of using Angular's input API. Developers should migrate to either the @Input decorator or the Signals-based input API.`);
	}
	/**
	* Get the value of a nav-parameter for the current view
	*
	* ```ts
	* import { NavParams } from 'ionic-angular';
	*
	* export class MyClass{
	*  constructor(public navParams: NavParams){
	*    // userParams is an object we have in our nav-parameters
	*    this.navParams.get('userParams');
	*  }
	* }
	* ```
	*
	* @param param Which param you want to look up
	*/
	get(param) {
		return this.data[param];
	}
};
//#endregion
//#region node_modules/@ionic/angular/dist/common/providers/angular-delegate.js
var IonModalToken = new InjectionToken("IonModalToken");
var AngularDelegate = class AngularDelegate {
	zone = inject(NgZone);
	applicationRef = inject(ApplicationRef);
	config = inject(ConfigToken);
	create(environmentInjector, injector, elementReferenceKey, customInjector) {
		return new AngularFrameworkDelegate(environmentInjector, injector, this.applicationRef, this.zone, elementReferenceKey, this.config.useSetInputAPI ?? false, customInjector);
	}
	/** @nocollapse */
	static ɵfac = function AngularDelegate_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || AngularDelegate)();
	};
	/** @nocollapse */
	static ɵprov = /* @__PURE__ */ ɵɵdefineInjectable({
		token: AngularDelegate,
		factory: AngularDelegate.ɵfac
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AngularDelegate, [{ type: Injectable }], null, null);
})();
var AngularFrameworkDelegate = class {
	environmentInjector;
	injector;
	applicationRef;
	zone;
	elementReferenceKey;
	enableSignalsSupport;
	customInjector;
	elRefMap = /* @__PURE__ */ new WeakMap();
	elEventsMap = /* @__PURE__ */ new WeakMap();
	constructor(environmentInjector, injector, applicationRef, zone, elementReferenceKey, enableSignalsSupport, customInjector) {
		this.environmentInjector = environmentInjector;
		this.injector = injector;
		this.applicationRef = applicationRef;
		this.zone = zone;
		this.elementReferenceKey = elementReferenceKey;
		this.enableSignalsSupport = enableSignalsSupport;
		this.customInjector = customInjector;
	}
	attachViewToDom(container, component, params, cssClasses) {
		return this.zone.run(() => {
			return new Promise((resolve) => {
				const componentProps = { ...params };
				/**
				* Ionic Angular passes a reference to a modal
				* or popover that can be accessed using a
				* variable in the overlay component. If
				* elementReferenceKey is defined, then we should
				* pass a reference to the component using
				* elementReferenceKey as the key.
				*/
				if (this.elementReferenceKey !== void 0) componentProps[this.elementReferenceKey] = container;
				resolve(attachView(this.zone, this.environmentInjector, this.injector, this.applicationRef, this.elRefMap, this.elEventsMap, container, component, componentProps, cssClasses, this.elementReferenceKey, this.enableSignalsSupport, this.customInjector));
			});
		});
	}
	removeViewFromDom(_container, component) {
		return this.zone.run(() => {
			return new Promise((resolve) => {
				const componentRef = this.elRefMap.get(component);
				if (componentRef) {
					componentRef.destroy();
					this.elRefMap.delete(component);
					const unbindEvents = this.elEventsMap.get(component);
					if (unbindEvents) {
						unbindEvents();
						this.elEventsMap.delete(component);
					}
				}
				resolve();
			});
		});
	}
};
var attachView = (zone, environmentInjector, injector, applicationRef, elRefMap, elEventsMap, container, component, params, cssClasses, elementReferenceKey, enableSignalsSupport, customInjector) => {
	/**
	* Wraps the injector with a custom injector that
	* provides NavParams to the component.
	*
	* NavParams is a legacy feature from Ionic v3 that allows
	* Angular developers to provide data to a component
	* and access it by providing NavParams as a dependency
	* in the constructor.
	*
	* The modern approach is to access the data directly
	* from the component's class instance.
	*/
	const providers = getProviders(params);
	if (container.tagName.toLowerCase() === "ion-modal") providers.push({
		provide: IonModalToken,
		useValue: container
	});
	const componentRef = createComponent(component, {
		environmentInjector,
		elementInjector: Injector.create({
			providers,
			parent: customInjector ?? injector
		})
	});
	const instance = componentRef.instance;
	const hostElement = componentRef.location.nativeElement;
	if (params) {
		/**
		* For modals and popovers, a reference to the component is
		* added to `params` during the call to attachViewToDom. If
		* a reference using this name is already set, this means
		* the app is trying to use the name as a component prop,
		* which will cause collisions.
		*/
		if (elementReferenceKey && instance[elementReferenceKey] !== void 0) console.error(`[Ionic Error]: ${elementReferenceKey} is a reserved property when using ${container.tagName.toLowerCase()}. Rename or remove the "${elementReferenceKey}" property from ${component.name}.`);
		/**
		* Angular 14.1 added support for setInput
		* so we need to fall back to Object.assign
		* for Angular 14.0.
		*/
		if (enableSignalsSupport === true && componentRef.setInput !== void 0) {
			const { modal, popover, ...otherParams } = params;
			/**
			* Any key/value pairs set in componentProps
			* must be set as inputs on the component instance.
			*/
			for (const key in otherParams) componentRef.setInput(key, otherParams[key]);
			/**
			* Using setInput will cause an error when
			* setting modal/popover on a component that
			* does not define them as an input. For backwards
			* compatibility purposes we fall back to using
			* Object.assign for these properties.
			*/
			if (modal !== void 0) Object.assign(instance, { modal });
			if (popover !== void 0) Object.assign(instance, { popover });
		} else Object.assign(instance, params);
	}
	if (cssClasses) for (const cssClass of cssClasses) hostElement.classList.add(cssClass);
	const unbindEvents = bindLifecycleEvents(zone, componentRef.changeDetectorRef, instance, hostElement);
	container.appendChild(hostElement);
	applicationRef.attachView(componentRef.hostView);
	/**
	* Run change detection on the freshly attached view so Angular's init hooks
	* (`ngOnInit`, `ngAfterViewInit`) fire and template bindings (e.g.
	* `<ion-nav [root]="rootPage">`) apply during this synchronous pass, before the
	* web component runs its load lifecycle and dispatches its Ionic lifecycle events
	* (`ionViewWillEnter`, etc.). `createComponent` only runs the creation pass; the
	* init hooks and binding updates run during an update pass. Under Zone.js an
	* implicit tick used to cover this, but zoneless Angular schedules no such tick,
	* so without this the binding could land after the element has loaded (too late
	* for `ion-nav` to read it) and the first `ionViewWillEnter` could run before
	* `ngOnInit`.
	*/
	componentRef.changeDetectorRef.detectChanges();
	elRefMap.set(hostElement, componentRef);
	elEventsMap.set(hostElement, unbindEvents);
	return hostElement;
};
var LIFECYCLES = [
	r$3,
	t$1,
	s$2,
	c$3,
	l$2
];
var bindLifecycleEvents = (zone, changeDetectorRef, instance, element) => {
	/**
	* `zone.run` keeps the listener registration (and, under Zone.js, the handler
	* execution) inside the Angular zone, so async work started inside a lifecycle
	* hook is still zone-tracked. Under zoneless Angular it is a passthrough.
	*/
	return zone.run(() => {
		const unregisters = LIFECYCLES.filter((eventName) => typeof instance[eventName] === "function").map((eventName) => {
			const handler = (ev) => {
				instance[eventName](ev.detail);
				/**
				* Ionic lifecycle events (`ionViewWillEnter`, etc.) are dispatched from
				* the web component via a native event listener, so under zoneless
				* Angular nothing schedules change detection for state the hook mutates.
				* Mark the view dirty explicitly. This is a no-op-or-better under Zone.js.
				*/
				changeDetectorRef.markForCheck();
			};
			element.addEventListener(eventName, handler);
			return () => element.removeEventListener(eventName, handler);
		});
		return () => unregisters.forEach((fn) => fn());
	});
};
var NavParamsToken = new InjectionToken("NavParamsToken");
var getProviders = (params) => {
	return [{
		provide: NavParamsToken,
		useValue: params
	}, {
		provide: NavParams,
		useFactory: provideNavParamsInjectable,
		deps: [NavParamsToken]
	}];
};
var provideNavParamsInjectable = (params) => {
	return new NavParams(params);
};
//#endregion
//#region node_modules/@ionic/angular/dist/common/utils/proxy.js
var proxyInputs = (Cmp, inputs) => {
	const Prototype = Cmp.prototype;
	inputs.forEach((item) => {
		Object.defineProperty(Prototype, item, {
			get() {
				return this.el[item];
			},
			set(val) {
				this.z.runOutsideAngular(() => this.el[item] = val);
			}
		});
	});
};
var proxyMethods = (Cmp, methods) => {
	const Prototype = Cmp.prototype;
	methods.forEach((methodName) => {
		Prototype[methodName] = function() {
			const args = arguments;
			return this.z.runOutsideAngular(() => this.el[methodName].apply(this.el, args));
		};
	});
};
var proxyOutputs = (instance, el, events) => {
	events.forEach((eventName) => instance[eventName] = fromEvent(el, eventName));
};
function ProxyCmp(opts) {
	const decorator = function(cls) {
		const { defineCustomElementFn, inputs, methods } = opts;
		if (defineCustomElementFn !== void 0) defineCustomElementFn();
		if (inputs) proxyInputs(cls, inputs);
		if (methods) proxyMethods(cls, methods);
		return cls;
	};
	return decorator;
}
//#endregion
//#region node_modules/@ionic/angular/dist/common/overlays/modal.js
var MODAL_INPUTS = [
	"animated",
	"keepContentsMounted",
	"backdropBreakpoint",
	"backdropDismiss",
	"breakpoints",
	"canDismiss",
	"cssClass",
	"enterAnimation",
	"expandToScroll",
	"event",
	"focusTrap",
	"handle",
	"handleBehavior",
	"initialBreakpoint",
	"isOpen",
	"keyboardClose",
	"leaveAnimation",
	"mode",
	"presentingElement",
	"showBackdrop",
	"translucent",
	"trigger"
];
var MODAL_METHODS = [
	"present",
	"dismiss",
	"onDidDismiss",
	"onWillDismiss",
	"setCurrentBreakpoint",
	"getCurrentBreakpoint"
];
var IonModal = class IonModal {
	z;
	template;
	isCmpOpen = false;
	el;
	constructor(c, r, z) {
		this.z = z;
		this.el = r.nativeElement;
		this.el.addEventListener("ionMount", () => {
			this.isCmpOpen = true;
			c.detectChanges();
		});
		this.el.addEventListener("didDismiss", () => {
			this.isCmpOpen = false;
			c.detectChanges();
		});
		proxyOutputs(this, this.el, [
			"ionModalDidPresent",
			"ionModalWillPresent",
			"ionModalWillDismiss",
			"ionModalDidDismiss",
			"ionBreakpointDidChange",
			"didPresent",
			"willPresent",
			"willDismiss",
			"didDismiss",
			"ionDragStart",
			"ionDragMove",
			"ionDragEnd"
		]);
	}
	/** @nocollapse */
	static ɵfac = function IonModal_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || IonModal)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
	};
	/** @nocollapse */
	static ɵdir = /* @__PURE__ */ ɵɵdefineDirective({
		type: IonModal,
		selectors: [["ion-modal"]],
		contentQueries: function IonModal_ContentQueries(rf, ctx, dirIndex) {
			if (rf & 1) ɵɵcontentQuery(dirIndex, TemplateRef, 5);
			if (rf & 2) {
				let _t;
				ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.template = _t.first);
			}
		},
		inputs: {
			animated: "animated",
			keepContentsMounted: "keepContentsMounted",
			backdropBreakpoint: "backdropBreakpoint",
			backdropDismiss: "backdropDismiss",
			breakpoints: "breakpoints",
			canDismiss: "canDismiss",
			cssClass: "cssClass",
			enterAnimation: "enterAnimation",
			expandToScroll: "expandToScroll",
			event: "event",
			focusTrap: "focusTrap",
			handle: "handle",
			handleBehavior: "handleBehavior",
			initialBreakpoint: "initialBreakpoint",
			isOpen: "isOpen",
			keyboardClose: "keyboardClose",
			leaveAnimation: "leaveAnimation",
			mode: "mode",
			presentingElement: "presentingElement",
			showBackdrop: "showBackdrop",
			translucent: "translucent",
			trigger: "trigger"
		}
	});
};
IonModal = __decorate([ProxyCmp({
	inputs: MODAL_INPUTS,
	methods: MODAL_METHODS
})], IonModal);
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonModal, [{
		type: Directive,
		args: [{
			selector: "ion-modal",
			inputs: MODAL_INPUTS
		}]
	}], () => [
		{ type: ChangeDetectorRef },
		{ type: ElementRef },
		{ type: NgZone }
	], { template: [{
		type: ContentChild,
		args: [TemplateRef, { static: false }]
	}] });
})();
//#endregion
//#region node_modules/@ionic/angular/dist/common/overlays/popover.js
var POPOVER_INPUTS = [
	"alignment",
	"animated",
	"arrow",
	"keepContentsMounted",
	"backdropDismiss",
	"cssClass",
	"dismissOnSelect",
	"enterAnimation",
	"event",
	"focusTrap",
	"isOpen",
	"keyboardClose",
	"leaveAnimation",
	"mode",
	"showBackdrop",
	"translucent",
	"trigger",
	"triggerAction",
	"reference",
	"size",
	"side"
];
var POPOVER_METHODS = [
	"present",
	"dismiss",
	"onDidDismiss",
	"onWillDismiss"
];
var IonPopover = class IonPopover {
	z;
	template;
	isCmpOpen = false;
	el;
	constructor(c, r, z) {
		this.z = z;
		this.el = r.nativeElement;
		this.el.addEventListener("ionMount", () => {
			this.isCmpOpen = true;
			c.detectChanges();
		});
		this.el.addEventListener("didDismiss", () => {
			this.isCmpOpen = false;
			c.detectChanges();
		});
		proxyOutputs(this, this.el, [
			"ionPopoverDidPresent",
			"ionPopoverWillPresent",
			"ionPopoverWillDismiss",
			"ionPopoverDidDismiss",
			"didPresent",
			"willPresent",
			"willDismiss",
			"didDismiss"
		]);
	}
	/** @nocollapse */
	static ɵfac = function IonPopover_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || IonPopover)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
	};
	/** @nocollapse */
	static ɵdir = /* @__PURE__ */ ɵɵdefineDirective({
		type: IonPopover,
		selectors: [["ion-popover"]],
		contentQueries: function IonPopover_ContentQueries(rf, ctx, dirIndex) {
			if (rf & 1) ɵɵcontentQuery(dirIndex, TemplateRef, 5);
			if (rf & 2) {
				let _t;
				ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.template = _t.first);
			}
		},
		inputs: {
			alignment: "alignment",
			animated: "animated",
			arrow: "arrow",
			keepContentsMounted: "keepContentsMounted",
			backdropDismiss: "backdropDismiss",
			cssClass: "cssClass",
			dismissOnSelect: "dismissOnSelect",
			enterAnimation: "enterAnimation",
			event: "event",
			focusTrap: "focusTrap",
			isOpen: "isOpen",
			keyboardClose: "keyboardClose",
			leaveAnimation: "leaveAnimation",
			mode: "mode",
			showBackdrop: "showBackdrop",
			translucent: "translucent",
			trigger: "trigger",
			triggerAction: "triggerAction",
			reference: "reference",
			size: "size",
			side: "side"
		}
	});
};
IonPopover = __decorate([ProxyCmp({
	inputs: POPOVER_INPUTS,
	methods: POPOVER_METHODS
})], IonPopover);
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonPopover, [{
		type: Directive,
		args: [{
			selector: "ion-popover",
			inputs: POPOVER_INPUTS
		}]
	}], () => [
		{ type: ChangeDetectorRef },
		{ type: ElementRef },
		{ type: NgZone }
	], { template: [{
		type: ContentChild,
		args: [TemplateRef, { static: false }]
	}] });
})();
//#endregion
//#region node_modules/@ionic/angular/dist/common/directives/navigation/stack-utils.js
var insertView = (views, view, direction) => {
	if (direction === "root") return setRoot(views, view);
	else if (direction === "forward") return setForward(views, view);
	else return setBack(views, view);
};
var setRoot = (views, view) => {
	views = views.filter((v) => v.stackId !== view.stackId);
	views.push(view);
	return views;
};
var setForward = (views, view) => {
	if (views.indexOf(view) >= 0) views = views.filter((v) => v.stackId !== view.stackId || v.id <= view.id);
	else views.push(view);
	return views;
};
var setBack = (views, view) => {
	if (views.indexOf(view) >= 0) return views.filter((v) => v.stackId !== view.stackId || v.id <= view.id);
	else return setRoot(views, view);
};
var getUrl = (router, activatedRoute) => {
	const urlTree = router.createUrlTree(["."], { relativeTo: activatedRoute });
	return router.serializeUrl(urlTree);
};
var isTabSwitch = (enteringView, leavingView) => {
	if (!leavingView) return true;
	return enteringView.stackId !== leavingView.stackId;
};
var computeStackId = (prefixUrl, url) => {
	if (!prefixUrl) return;
	const segments = toSegments(url);
	for (let i = 0; i < segments.length; i++) {
		if (i >= prefixUrl.length) return segments[i];
		if (segments[i] !== prefixUrl[i]) return;
	}
};
var toSegments = (path) => {
	return path.split("/").map((s) => s.trim()).filter((s) => s !== "");
};
var destroyView = (view) => {
	if (view) {
		view.ref.destroy();
		view.unlistenEvents();
	}
};
//#endregion
//#region node_modules/@ionic/angular/dist/common/directives/navigation/stack-controller.js
var StackController = class {
	containerEl;
	router;
	navCtrl;
	zone;
	location;
	views = [];
	runningTask;
	skipTransition = false;
	tabsPrefix;
	activeView;
	nextId = 0;
	constructor(tabsPrefix, containerEl, router, navCtrl, zone, location) {
		this.containerEl = containerEl;
		this.router = router;
		this.navCtrl = navCtrl;
		this.zone = zone;
		this.location = location;
		this.tabsPrefix = tabsPrefix !== void 0 ? toSegments(tabsPrefix) : void 0;
	}
	createView(ref, activatedRoute) {
		const url = getUrl(this.router, activatedRoute);
		const element = ref?.location?.nativeElement;
		const unlistenEvents = bindLifecycleEvents(this.zone, ref.changeDetectorRef, ref.instance, element);
		return {
			id: this.nextId++,
			stackId: computeStackId(this.tabsPrefix, url),
			unlistenEvents,
			element,
			ref,
			url
		};
	}
	getExistingView(activatedRoute) {
		const activatedUrlKey = getUrl(this.router, activatedRoute);
		const view = this.views.find((vw) => vw.url === activatedUrlKey);
		if (view) view.ref.changeDetectorRef.reattach();
		return view;
	}
	setActive(enteringView) {
		let { direction, animation, animationBuilder } = this.navCtrl.consumeTransition();
		const leavingView = this.activeView;
		const tabSwitch = isTabSwitch(enteringView, leavingView);
		if (tabSwitch) {
			direction = "back";
			animation = void 0;
		}
		const viewsSnapshot = this.views.slice();
		let currentNavigation;
		const router = this.router;
		if (router.getCurrentNavigation) currentNavigation = router.getCurrentNavigation();
		else if (router.navigations?.value) currentNavigation = router.navigations.value;
		/**
		* If the navigation action
		* sets `replaceUrl: true`
		* then we need to make sure
		* we remove the last item
		* from our views stack
		*/
		if (currentNavigation?.extras?.replaceUrl) {
			if (this.views.length > 0) this.views.splice(-1, 1);
		}
		const reused = this.views.includes(enteringView);
		const views = this.insertView(enteringView, direction);
		if (!reused) enteringView.ref.changeDetectorRef.detectChanges();
		/**
		* If we are going back from a page that
		* was presented using a custom animation
		* we should default to using that
		* unless the developer explicitly
		* provided another animation.
		*/
		const customAnimation = enteringView.animationBuilder;
		if (animationBuilder === void 0 && direction === "back" && !tabSwitch && customAnimation !== void 0) animationBuilder = customAnimation;
		/**
		* Save any custom animation so that navigating
		* back will use this custom animation by default.
		*/
		if (leavingView) leavingView.animationBuilder = animationBuilder;
		return this.zone.runOutsideAngular(() => {
			return this.wait(() => {
				if (leavingView) leavingView.ref.changeDetectorRef.detach();
				enteringView.ref.changeDetectorRef.reattach();
				return this.transition(enteringView, leavingView, animation, this.canGoBack(1), false, animationBuilder).then(() => cleanupAsync(enteringView, views, viewsSnapshot, this.location, this.zone)).then(() => ({
					enteringView,
					direction,
					animation,
					tabSwitch
				}));
			});
		});
	}
	canGoBack(deep, stackId = this.getActiveStackId()) {
		return this.getStack(stackId).length > deep;
	}
	pop(deep, stackId = this.getActiveStackId()) {
		return this.zone.run(() => {
			const views = this.getStack(stackId);
			if (views.length <= deep) return Promise.resolve(false);
			const view = views[views.length - deep - 1];
			let url = view.url;
			const viewSavedData = view.savedData;
			if (viewSavedData) {
				const primaryOutlet = viewSavedData.get("primary");
				if (primaryOutlet?.route?._routerState?.snapshot.url) url = primaryOutlet.route._routerState.snapshot.url;
			}
			const { animationBuilder } = this.navCtrl.consumeTransition();
			return this.navCtrl.navigateBack(url, {
				...view.savedExtras,
				animation: animationBuilder
			}).then(() => true);
		});
	}
	startBackTransition() {
		const leavingView = this.activeView;
		if (leavingView) {
			const views = this.getStack(leavingView.stackId);
			const enteringView = views[views.length - 2];
			const customAnimation = enteringView.animationBuilder;
			return this.wait(() => {
				return this.transition(enteringView, leavingView, "back", this.canGoBack(2), true, customAnimation);
			});
		}
		return Promise.resolve();
	}
	endBackTransition(shouldComplete) {
		if (shouldComplete) {
			this.skipTransition = true;
			this.pop(1);
		} else if (this.activeView) cleanup(this.activeView, this.views, this.views, this.location, this.zone);
	}
	getLastUrl(stackId) {
		const views = this.getStack(stackId);
		return views.length > 0 ? views[views.length - 1] : void 0;
	}
	/**
	* @internal
	*/
	getRootUrl(stackId) {
		const views = this.getStack(stackId);
		return views.length > 0 ? views[0] : void 0;
	}
	getActiveStackId() {
		return this.activeView ? this.activeView.stackId : void 0;
	}
	/**
	* @internal
	*/
	getActiveView() {
		return this.activeView;
	}
	hasRunningTask() {
		return this.runningTask !== void 0;
	}
	destroy() {
		this.containerEl = void 0;
		this.views.forEach(destroyView);
		this.activeView = void 0;
		this.views = [];
	}
	getStack(stackId) {
		return this.views.filter((v) => v.stackId === stackId);
	}
	insertView(enteringView, direction) {
		this.activeView = enteringView;
		this.views = insertView(this.views, enteringView, direction);
		return this.views.slice();
	}
	transition(enteringView, leavingView, direction, showGoBack, progressAnimation, animationBuilder) {
		if (this.skipTransition) {
			this.skipTransition = false;
			return Promise.resolve(false);
		}
		if (leavingView === enteringView) return Promise.resolve(false);
		const enteringEl = enteringView ? enteringView.element : void 0;
		const leavingEl = leavingView ? leavingView.element : void 0;
		const containerEl = this.containerEl;
		if (enteringEl && enteringEl !== leavingEl) {
			enteringEl.classList.add("ion-page");
			enteringEl.classList.add("ion-page-invisible");
			if (containerEl?.commit) return containerEl.commit(enteringEl, leavingEl, {
				duration: direction === void 0 ? 0 : void 0,
				direction,
				showGoBack,
				progressAnimation,
				animationBuilder
			});
		}
		return Promise.resolve(false);
	}
	async wait(task) {
		if (this.runningTask !== void 0) {
			await this.runningTask;
			this.runningTask = void 0;
		}
		const promise = this.runningTask = task();
		promise.finally(() => this.runningTask = void 0);
		return promise;
	}
};
var cleanupAsync = (activeRoute, views, viewsSnapshot, location, zone) => {
	if (typeof requestAnimationFrame === "function") return new Promise((resolve) => {
		requestAnimationFrame(() => {
			cleanup(activeRoute, views, viewsSnapshot, location, zone);
			resolve();
		});
	});
	return Promise.resolve();
};
var cleanup = (activeRoute, views, viewsSnapshot, location, zone) => {
	/**
	* Re-enter the Angular zone when destroying page components. This will allow
	* lifecycle events (`ngOnDestroy`) to be run inside the Angular zone.
	*/
	zone.run(() => viewsSnapshot.filter((view) => !views.includes(view)).forEach(destroyView));
	views.forEach((view) => {
		const locationWithoutFragment = location.path().split("?")[0].split("#")[0];
		if (view !== activeRoute && view.url !== locationWithoutFragment) {
			const element = view.element;
			element.setAttribute("aria-hidden", "true");
			element.classList.add("ion-page-hidden");
			view.ref.changeDetectorRef.detach();
		}
	});
};
//#endregion
//#region node_modules/@ionic/angular/dist/common/directives/navigation/router-outlet.js
var IonRouterOutlet = class IonRouterOutlet {
	parentOutlet;
	nativeEl;
	activatedView = null;
	tabsPrefix;
	_swipeGesture;
	stackCtrl;
	proxyMap = /* @__PURE__ */ new WeakMap();
	currentActivatedRoute$ = new BehaviorSubject(null);
	activated = null;
	/** @internal */
	get activatedComponentRef() {
		return this.activated;
	}
	_activatedRoute = null;
	/**
	* The name of the outlet
	*/
	name = PRIMARY_OUTLET;
	/** @internal */
	stackWillChange = new EventEmitter();
	/** @internal */
	stackDidChange = new EventEmitter();
	activateEvents = new EventEmitter();
	deactivateEvents = new EventEmitter();
	parentContexts = inject(ChildrenOutletContexts);
	location = inject(ViewContainerRef);
	environmentInjector = inject(EnvironmentInjector);
	inputBinder = inject(INPUT_BINDER, { optional: true });
	/** @nodoc */
	supportsBindingToComponentInputs = true;
	config = inject(Config);
	navCtrl = inject(NavController);
	set animation(animation) {
		this.nativeEl.animation = animation;
	}
	set animated(animated) {
		this.nativeEl.animated = animated;
	}
	set swipeGesture(swipe) {
		this._swipeGesture = swipe;
		this.nativeEl.swipeHandler = swipe ? {
			canStart: () => this.stackCtrl.canGoBack(1) && !this.stackCtrl.hasRunningTask(),
			onStart: () => this.stackCtrl.startBackTransition(),
			onEnd: (shouldContinue) => this.stackCtrl.endBackTransition(shouldContinue)
		} : void 0;
		this.nativeEl.swipeGesture = swipe;
	}
	constructor(name, tabs, commonLocation, elementRef, router, zone, activatedRoute, parentOutlet) {
		this.parentOutlet = parentOutlet;
		this.nativeEl = elementRef.nativeElement;
		this.name = name || "primary";
		this.tabsPrefix = tabs === "true" ? getUrl(router, activatedRoute) : void 0;
		this.stackCtrl = new StackController(this.tabsPrefix, this.nativeEl, router, this.navCtrl, zone, commonLocation);
		this.parentContexts.onChildOutletCreated(this.name, this);
	}
	ngOnDestroy() {
		this.stackCtrl.destroy();
		this.inputBinder?.unsubscribeFromRouteData(this);
	}
	getContext() {
		return this.parentContexts.getContext(this.name);
	}
	ngOnInit() {
		this.initializeOutletWithName();
	}
	initializeOutletWithName() {
		if (!this.activated) {
			const context = this.getContext();
			if (context?.route) this.activateWith(context.route, context.injector);
		}
		new Promise((resolve) => n$2(this.nativeEl, resolve)).then(() => {
			if (this._swipeGesture === void 0) this.swipeGesture = this.config.getBoolean("swipeBackEnabled", this.nativeEl.mode === "ios");
		});
	}
	get isActivated() {
		return !!this.activated;
	}
	get component() {
		if (!this.activated) throw new Error("Outlet is not activated");
		return this.activated.instance;
	}
	get activatedRoute() {
		if (!this.activated) throw new Error("Outlet is not activated");
		return this._activatedRoute;
	}
	get activatedRouteData() {
		if (this._activatedRoute) return this._activatedRoute.snapshot.data;
		return {};
	}
	/**
	* Called when the `RouteReuseStrategy` instructs to detach the subtree
	*/
	detach() {
		throw new Error("incompatible reuse strategy");
	}
	/**
	* Called when the `RouteReuseStrategy` instructs to re-attach a previously detached subtree
	*/
	attach(_ref, _activatedRoute) {
		throw new Error("incompatible reuse strategy");
	}
	deactivate() {
		if (this.activated) {
			if (this.activatedView) {
				const context = this.getContext();
				this.activatedView.savedData = new Map(context.children["contexts"]);
				/**
				* Angular v11.2.10 introduced a change
				* where this route context is cleared out when
				* a router-outlet is deactivated, However,
				* we need this route information in order to
				* return a user back to the correct tab when
				* leaving and then going back to the tab context.
				*/
				const primaryOutlet = this.activatedView.savedData.get("primary");
				if (primaryOutlet && context.route) primaryOutlet.route = { ...context.route };
				/**
				* Ensure we are saving the NavigationExtras
				* data otherwise it will be lost
				*/
				this.activatedView.savedExtras = {};
				if (context.route) {
					const contextSnapshot = context.route.snapshot;
					this.activatedView.savedExtras.queryParams = contextSnapshot.queryParams;
					this.activatedView.savedExtras.fragment = contextSnapshot.fragment;
				}
			}
			const c = this.component;
			this.activatedView = null;
			this.activated = null;
			this._activatedRoute = null;
			this.deactivateEvents.emit(c);
		}
	}
	activateWith(activatedRoute, environmentInjector) {
		if (this.isActivated) throw new Error("Cannot activate an already activated outlet");
		this._activatedRoute = activatedRoute;
		let cmpRef;
		let enteringView = this.stackCtrl.getExistingView(activatedRoute);
		if (enteringView) {
			cmpRef = this.activated = enteringView.ref;
			const saved = enteringView.savedData;
			if (saved) {
				const context = this.getContext();
				context.children["contexts"] = saved;
			}
			this.updateActivatedRouteProxy(cmpRef.instance, activatedRoute);
		} else {
			const snapshot = activatedRoute._futureSnapshot;
			/**
			* Angular 14 introduces a new `loadComponent` property to the route config.
			* This function will assign a `component` property to the route snapshot.
			* We check for the presence of this property to determine if the route is
			* using standalone components.
			*/
			const childContexts = this.parentContexts.getOrCreateContext(this.name).children;
			const component$ = new BehaviorSubject(null);
			const activatedRouteProxy = this.createActivatedRouteProxy(component$, activatedRoute);
			const injector = new OutletInjector(activatedRouteProxy, childContexts, this.location.injector);
			const component = snapshot.routeConfig.component ?? snapshot.component;
			/**
			* View components need to be added as a child of ion-router-outlet
			* for page transitions and swipe to go back.
			* However, createComponent mounts components as siblings of the
			* ViewContainerRef. As a result, outletContent must reference
			* an ng-container inside of ion-router-outlet and not
			* ion-router-outlet itself.
			*/
			cmpRef = this.activated = this.outletContent.createComponent(component, {
				index: this.outletContent.length,
				injector,
				environmentInjector: environmentInjector ?? this.environmentInjector
			});
			component$.next(cmpRef.instance);
			/**
			* At this point this.activated has been set earlier
			* in this function, so it is guaranteed to be non-null.
			*/
			enteringView = this.stackCtrl.createView(this.activated, activatedRoute);
			this.proxyMap.set(cmpRef.instance, activatedRouteProxy);
			this.currentActivatedRoute$.next({
				component: cmpRef.instance,
				activatedRoute
			});
		}
		this.inputBinder?.bindActivatedRouteToOutletComponent(this);
		this.activatedView = enteringView;
		/**
		* The top outlet is set prior to the entering view's transition completing,
		* so that when we have nested outlets (e.g. ion-tabs inside an ion-router-outlet),
		* the tabs outlet will be assigned as the top outlet when a view inside tabs is
		* activated.
		*
		* In this scenario, activeWith is called for both the tabs and the root router outlet.
		* To avoid a race condition, we assign the top outlet synchronously.
		*/
		this.navCtrl.setTopOutlet(this);
		const leavingView = this.stackCtrl.getActiveView();
		this.stackWillChange.emit({
			enteringView,
			tabSwitch: isTabSwitch(enteringView, leavingView)
		});
		this.stackCtrl.setActive(enteringView).then((data) => {
			this.activateEvents.emit(cmpRef.instance);
			this.stackDidChange.emit(data);
		});
	}
	/**
	* Returns `true` if there are pages in the stack to go back.
	*/
	canGoBack(deep = 1, stackId) {
		return this.stackCtrl.canGoBack(deep, stackId);
	}
	/**
	* Resolves to `true` if it the outlet was able to sucessfully pop the last N pages.
	*/
	pop(deep = 1, stackId) {
		return this.stackCtrl.pop(deep, stackId);
	}
	/**
	* Returns the URL of the active page of each stack.
	*/
	getLastUrl(stackId) {
		const active = this.stackCtrl.getLastUrl(stackId);
		return active ? active.url : void 0;
	}
	/**
	* Returns the RouteView of the active page of each stack.
	* @internal
	*/
	getLastRouteView(stackId) {
		return this.stackCtrl.getLastUrl(stackId);
	}
	/**
	* Returns the root view in the tab stack.
	* @internal
	*/
	getRootView(stackId) {
		return this.stackCtrl.getRootUrl(stackId);
	}
	/**
	* Returns the active stack ID. In the context of ion-tabs, it means the active tab.
	*/
	getActiveStackId() {
		return this.stackCtrl.getActiveStackId();
	}
	/**
	* Since the activated route can change over the life time of a component in an ion router outlet, we create
	* a proxy so that we can update the values over time as a user navigates back to components already in the stack.
	*/
	createActivatedRouteProxy(component$, activatedRoute) {
		const proxy = new ActivatedRoute();
		proxy._futureSnapshot = activatedRoute._futureSnapshot;
		proxy._routerState = activatedRoute._routerState;
		proxy.snapshot = activatedRoute.snapshot;
		proxy.outlet = activatedRoute.outlet;
		proxy.component = activatedRoute.component;
		proxy._paramMap = this.proxyObservable(component$, "paramMap");
		proxy._queryParamMap = this.proxyObservable(component$, "queryParamMap");
		proxy.url = this.proxyObservable(component$, "url");
		proxy.params = this.proxyObservable(component$, "params");
		proxy.queryParams = this.proxyObservable(component$, "queryParams");
		proxy.fragment = this.proxyObservable(component$, "fragment");
		proxy.data = this.proxyObservable(component$, "data");
		return proxy;
	}
	/**
	* Create a wrapped observable that will switch to the latest activated route matched by the given component
	*/
	proxyObservable(component$, path) {
		return component$.pipe(filter((component) => !!component), switchMap((component) => this.currentActivatedRoute$.pipe(filter((current) => current !== null && current.component === component), switchMap((current) => current && current.activatedRoute[path]), distinctUntilChanged())));
	}
	/**
	* Updates the activated route proxy for the given component to the new incoming router state
	*/
	updateActivatedRouteProxy(component, activatedRoute) {
		const proxy = this.proxyMap.get(component);
		if (!proxy) throw new Error(`Could not find activated route proxy for view`);
		proxy._futureSnapshot = activatedRoute._futureSnapshot;
		proxy._routerState = activatedRoute._routerState;
		proxy.snapshot = activatedRoute.snapshot;
		proxy.outlet = activatedRoute.outlet;
		proxy.component = activatedRoute.component;
		this.currentActivatedRoute$.next({
			component,
			activatedRoute
		});
	}
	/** @nocollapse */
	static ɵfac = function IonRouterOutlet_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || IonRouterOutlet)(ɵɵinjectAttribute("name"), ɵɵinjectAttribute("tabs"), ɵɵdirectiveInject(Location), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Router), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(ActivatedRoute), ɵɵdirectiveInject(IonRouterOutlet, 12));
	};
	/** @nocollapse */
	static ɵdir = /* @__PURE__ */ ɵɵdefineDirective({
		type: IonRouterOutlet,
		selectors: [["ion-router-outlet"]],
		inputs: {
			animated: "animated",
			animation: "animation",
			mode: "mode",
			swipeGesture: "swipeGesture",
			name: "name"
		},
		outputs: {
			stackWillChange: "stackWillChange",
			stackDidChange: "stackDidChange",
			activateEvents: "activate",
			deactivateEvents: "deactivate"
		},
		exportAs: ["outlet"]
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonRouterOutlet, [{
		type: Directive,
		args: [{
			selector: "ion-router-outlet",
			exportAs: "outlet",
			inputs: [
				"animated",
				"animation",
				"mode",
				"swipeGesture"
			]
		}]
	}], () => [
		{
			type: void 0,
			decorators: [{
				type: Attribute,
				args: ["name"]
			}]
		},
		{
			type: void 0,
			decorators: [{ type: Optional }, {
				type: Attribute,
				args: ["tabs"]
			}]
		},
		{ type: Location },
		{ type: ElementRef },
		{ type: Router },
		{ type: NgZone },
		{ type: ActivatedRoute },
		{
			type: IonRouterOutlet,
			decorators: [{ type: SkipSelf }, { type: Optional }]
		}
	], {
		name: [{ type: Input }],
		stackWillChange: [{ type: Output }],
		stackDidChange: [{ type: Output }],
		activateEvents: [{
			type: Output,
			args: ["activate"]
		}],
		deactivateEvents: [{
			type: Output,
			args: ["deactivate"]
		}]
	});
})();
var OutletInjector = class {
	route;
	childContexts;
	parent;
	constructor(route, childContexts, parent) {
		this.route = route;
		this.childContexts = childContexts;
		this.parent = parent;
	}
	get(token, notFoundValue) {
		if (token === ActivatedRoute) return this.route;
		if (token === ChildrenOutletContexts) return this.childContexts;
		return this.parent.get(token, notFoundValue);
	}
};
var INPUT_BINDER = new InjectionToken("");
/**
* Injectable used as a tree-shakable provider for opting in to binding router data to component
* inputs.
*
* The RouterOutlet registers itself with this service when an `ActivatedRoute` is attached or
* activated. When this happens, the service subscribes to the `ActivatedRoute` observables (params,
* queryParams, data) and sets the inputs of the component using `ComponentRef.setInput`.
* Importantly, when an input does not have an item in the route data with a matching key, this
* input is set to `undefined`. If it were not done this way, the previous information would be
* retained if the data got removed from the route (i.e. if a query parameter is removed).
*
* The `RouterOutlet` should unregister itself when destroyed via `unsubscribeFromRouteData` so that
* the subscriptions are cleaned up.
*/
var RoutedComponentInputBinder = class RoutedComponentInputBinder {
	outletDataSubscriptions = /* @__PURE__ */ new Map();
	bindActivatedRouteToOutletComponent(outlet) {
		this.unsubscribeFromRouteData(outlet);
		this.subscribeToRouteData(outlet);
	}
	unsubscribeFromRouteData(outlet) {
		this.outletDataSubscriptions.get(outlet)?.unsubscribe();
		this.outletDataSubscriptions.delete(outlet);
	}
	subscribeToRouteData(outlet) {
		const { activatedRoute } = outlet;
		const dataSubscription = combineLatest([
			activatedRoute.queryParams,
			activatedRoute.params,
			activatedRoute.data
		]).pipe(switchMap(([queryParams, params, data], index) => {
			data = {
				...queryParams,
				...params,
				...data
			};
			if (index === 0) return of(data);
			return Promise.resolve(data);
		})).subscribe((data) => {
			if (!outlet.isActivated || !outlet.activatedComponentRef || outlet.activatedRoute !== activatedRoute || activatedRoute.component === null) {
				this.unsubscribeFromRouteData(outlet);
				return;
			}
			const mirror = reflectComponentType(activatedRoute.component);
			if (!mirror) {
				this.unsubscribeFromRouteData(outlet);
				return;
			}
			for (const { templateName } of mirror.inputs) outlet.activatedComponentRef.setInput(templateName, data[templateName]);
		});
		this.outletDataSubscriptions.set(outlet, dataSubscription);
	}
	/** @nocollapse */
	static ɵfac = function RoutedComponentInputBinder_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || RoutedComponentInputBinder)();
	};
	/** @nocollapse */
	static ɵprov = /* @__PURE__ */ ɵɵdefineInjectable({
		token: RoutedComponentInputBinder,
		factory: RoutedComponentInputBinder.ɵfac
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RoutedComponentInputBinder, [{ type: Injectable }], null, null);
})();
var provideComponentInputBinding = () => {
	return {
		provide: INPUT_BINDER,
		useFactory: componentInputBindingFactory,
		deps: [Router]
	};
};
function componentInputBindingFactory(router) {
	/**
	* We cast the router to any here, since the componentInputBindingEnabled
	* property is not available until Angular v16.
	*/
	if (router?.componentInputBindingEnabled) return new RoutedComponentInputBinder();
	return null;
}
//#endregion
//#region node_modules/@ionic/angular/dist/common/utils/util.js
var raf = (h) => {
	if (typeof __zone_symbol__requestAnimationFrame === "function") return __zone_symbol__requestAnimationFrame(h);
	if (typeof requestAnimationFrame === "function") return requestAnimationFrame(h);
	return setTimeout(h);
};
//#endregion
//#region node_modules/@ionic/angular/dist/common/directives/control-value-accessors/value-accessor.js
var ValueAccessor = class ValueAccessor {
	injector;
	elementRef;
	onChange = () => {};
	onTouched = () => {};
	lastValue;
	statusChanges;
	constructor(injector, elementRef) {
		this.injector = injector;
		this.elementRef = elementRef;
	}
	writeValue(value) {
		this.elementRef.nativeElement.value = this.lastValue = value;
		setIonicClasses(this.elementRef);
	}
	/**
	* Notifies the ControlValueAccessor of a change in the value of the control.
	*
	* This is called by each of the ValueAccessor directives when we want to update
	* the status and validity of the form control. For example with text components this
	* is called when the ionInput event is fired. For select components this is called
	* when the ionChange event is fired.
	*
	* This also updates the Ionic form status classes on the element.
	*
	* @param el The component element.
	* @param value The new value of the control.
	*/
	handleValueChange(el, value) {
		if (el === this.elementRef.nativeElement) {
			if (value !== this.lastValue) {
				this.lastValue = value;
				this.onChange(value);
			}
			setIonicClasses(this.elementRef);
		}
	}
	_handleBlurEvent(el) {
		if (el === this.elementRef.nativeElement) {
			this.onTouched();
			setIonicClasses(this.elementRef);
		} else if (el.closest("ion-radio-group") === this.elementRef.nativeElement) this.onTouched();
	}
	registerOnChange(fn) {
		this.onChange = fn;
	}
	registerOnTouched(fn) {
		this.onTouched = fn;
	}
	setDisabledState(isDisabled) {
		this.elementRef.nativeElement.disabled = isDisabled;
	}
	ngOnDestroy() {
		if (this.statusChanges) this.statusChanges.unsubscribe();
	}
	ngAfterViewInit() {
		let ngControl;
		try {
			ngControl = this.injector.get(NgControl);
		} catch {}
		if (!ngControl) return;
		if (ngControl.statusChanges) this.statusChanges = ngControl.statusChanges.subscribe(() => setIonicClasses(this.elementRef));
		/**
		* TODO FW-2787: Remove this in favor of https://github.com/angular/angular/issues/10887
		* whenever it is implemented.
		*/
		const formControl = ngControl.control;
		if (formControl) [
			"markAsTouched",
			"markAllAsTouched",
			"markAsUntouched",
			"markAsDirty",
			"markAsPristine"
		].forEach((method) => {
			if (typeof formControl[method] !== "undefined") {
				const oldFn = formControl[method].bind(formControl);
				formControl[method] = (...params) => {
					oldFn(...params);
					setIonicClasses(this.elementRef);
				};
			}
		});
	}
	/** @nocollapse */
	static ɵfac = function ValueAccessor_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || ValueAccessor)(ɵɵdirectiveInject(Injector), ɵɵdirectiveInject(ElementRef));
	};
	/** @nocollapse */
	static ɵdir = /* @__PURE__ */ ɵɵdefineDirective({
		type: ValueAccessor,
		hostBindings: function ValueAccessor_HostBindings(rf, ctx) {
			if (rf & 1) ɵɵlistener("ionBlur", function ValueAccessor_ionBlur_HostBindingHandler($event) {
				return ctx._handleBlurEvent($event.target);
			});
		}
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ValueAccessor, [{ type: Directive }], () => [{ type: Injector }, { type: ElementRef }], { _handleBlurEvent: [{
		type: HostListener,
		args: ["ionBlur", ["$event.target"]]
	}] });
})();
var setIonicClasses = (element) => {
	raf(() => {
		const input = element.nativeElement;
		const hasValue = input.value != null && input.value.toString().length > 0;
		const classes = getClasses(input);
		setClasses(input, classes);
		const item = input.closest("ion-item");
		if (item) if (hasValue) setClasses(item, [...classes, "item-has-value"]);
		else setClasses(item, classes);
	});
};
var getClasses = (element) => {
	const classList = element.classList;
	const classes = [];
	for (let i = 0; i < classList.length; i++) {
		const item = classList.item(i);
		if (item !== null && startsWith(item, "ng-")) classes.push(`ion-${item.substring(3)}`);
	}
	return classes;
};
var setClasses = (element, classes) => {
	const classList = element.classList;
	classList.remove("ion-valid", "ion-invalid", "ion-touched", "ion-untouched", "ion-dirty", "ion-pristine");
	classList.add(...classes);
};
var startsWith = (input, search) => {
	return input.substring(0, search.length) === search;
};
//#endregion
//#region node_modules/@ionic/angular/dist/common/directives/navigation/back-button.js
var BACK_BUTTON_INPUTS = [
	"color",
	"defaultHref",
	"disabled",
	"icon",
	"mode",
	"routerAnimation",
	"text",
	"type"
];
var IonBackButton = class IonBackButton {
	routerOutlet;
	navCtrl;
	config;
	r;
	z;
	el;
	constructor(routerOutlet, navCtrl, config, r, z, c) {
		this.routerOutlet = routerOutlet;
		this.navCtrl = navCtrl;
		this.config = config;
		this.r = r;
		this.z = z;
		c.detach();
		this.el = this.r.nativeElement;
	}
	/**
	* @internal
	*/
	onClick(ev) {
		const defaultHref = this.defaultHref || this.config.get("backButtonDefaultHref");
		if (this.routerOutlet?.canGoBack()) {
			this.navCtrl.setDirection("back", void 0, void 0, this.routerAnimation);
			this.routerOutlet.pop();
			ev.preventDefault();
		} else if (defaultHref != null) {
			this.navCtrl.navigateBack(defaultHref, { animation: this.routerAnimation });
			ev.preventDefault();
		}
	}
	/** @nocollapse */
	static ɵfac = function IonBackButton_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || IonBackButton)(ɵɵdirectiveInject(IonRouterOutlet, 8), ɵɵdirectiveInject(NavController), ɵɵdirectiveInject(Config), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(ChangeDetectorRef));
	};
	/** @nocollapse */
	static ɵdir = /* @__PURE__ */ ɵɵdefineDirective({
		type: IonBackButton,
		hostBindings: function IonBackButton_HostBindings(rf, ctx) {
			if (rf & 1) ɵɵlistener("click", function IonBackButton_click_HostBindingHandler($event) {
				return ctx.onClick($event);
			});
		},
		inputs: {
			color: "color",
			defaultHref: "defaultHref",
			disabled: "disabled",
			icon: "icon",
			mode: "mode",
			routerAnimation: "routerAnimation",
			text: "text",
			type: "type"
		}
	});
};
IonBackButton = __decorate([ProxyCmp({ inputs: BACK_BUTTON_INPUTS })], IonBackButton);
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonBackButton, [{
		type: Directive,
		args: [{ inputs: BACK_BUTTON_INPUTS }]
	}], () => [
		{
			type: IonRouterOutlet,
			decorators: [{ type: Optional }]
		},
		{ type: NavController },
		{ type: Config },
		{ type: ElementRef },
		{ type: NgZone },
		{ type: ChangeDetectorRef }
	], { onClick: [{
		type: HostListener,
		args: ["click", ["$event"]]
	}] });
})();
//#endregion
//#region node_modules/@ionic/angular/dist/common/directives/navigation/nav.js
var NAV_INPUTS = [
	"animated",
	"animation",
	"root",
	"rootParams",
	"swipeGesture"
];
var NAV_METHODS = [
	"push",
	"insert",
	"insertPages",
	"pop",
	"popTo",
	"popToRoot",
	"removeIndex",
	"setRoot",
	"setPages",
	"getActive",
	"getByIndex",
	"canGoBack",
	"getPrevious"
];
var IonNav = class IonNav {
	z;
	el;
	constructor(ref, environmentInjector, injector, angularDelegate, z, c) {
		this.z = z;
		c.detach();
		this.el = ref.nativeElement;
		ref.nativeElement.delegate = angularDelegate.create(environmentInjector, injector);
		proxyOutputs(this, this.el, ["ionNavDidChange", "ionNavWillChange"]);
	}
	/** @nocollapse */
	static ɵfac = function IonNav_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || IonNav)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(EnvironmentInjector), ɵɵdirectiveInject(Injector), ɵɵdirectiveInject(AngularDelegate), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(ChangeDetectorRef));
	};
	/** @nocollapse */
	static ɵdir = /* @__PURE__ */ ɵɵdefineDirective({
		type: IonNav,
		inputs: {
			animated: "animated",
			animation: "animation",
			root: "root",
			rootParams: "rootParams",
			swipeGesture: "swipeGesture"
		}
	});
};
IonNav = __decorate([ProxyCmp({
	inputs: NAV_INPUTS,
	methods: NAV_METHODS
})], IonNav);
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonNav, [{
		type: Directive,
		args: [{ inputs: NAV_INPUTS }]
	}], () => [
		{ type: ElementRef },
		{ type: EnvironmentInjector },
		{ type: Injector },
		{ type: AngularDelegate },
		{ type: NgZone },
		{ type: ChangeDetectorRef }
	], null);
})();
//#endregion
//#region node_modules/@ionic/angular/dist/common/directives/navigation/router-link-delegate.js
/**
* Adds support for Ionic routing directions and animations to the base Angular router link directive.
*
* When the router link is clicked, the directive will assign the direction and
* animation so that the routing integration will transition correctly.
*/
var RouterLinkDelegateDirective = class RouterLinkDelegateDirective {
	locationStrategy;
	navCtrl;
	elementRef;
	router;
	routerLink;
	routerDirection = "forward";
	routerAnimation;
	constructor(locationStrategy, navCtrl, elementRef, router, routerLink) {
		this.locationStrategy = locationStrategy;
		this.navCtrl = navCtrl;
		this.elementRef = elementRef;
		this.router = router;
		this.routerLink = routerLink;
	}
	ngOnInit() {
		this.updateTargetUrlAndHref();
		this.updateTabindex();
		/**
		* Ionic components like `ion-item` render a native anchor in their shadow DOM,
		* so a modifier click (ctrl/meta/shift/alt) or a non-`_self` target should let
		* the browser handle the navigation natively (new tab, new window, download)
		* instead of navigating in-app.
		*
		* We listen in the capture phase so this runs before Angular's `RouterLink`
		* handler and our own bubble-phase `onClick`. On a native-navigation intent it
		* stops propagation to cancel the in-app navigation, but leaves `preventDefault`
		* alone so the native anchor can still act.
		*/
		this.elementRef.nativeElement.addEventListener("click", this.onCaptureClick, { capture: true });
	}
	ngOnChanges() {
		this.updateTargetUrlAndHref();
	}
	ngOnDestroy() {
		this.elementRef.nativeElement.removeEventListener("click", this.onCaptureClick, { capture: true });
	}
	onCaptureClick = (ev) => {
		if (this.opensNatively(ev)) ev.stopImmediatePropagation();
	};
	/**
	* True when the browser should handle the click natively instead of routing
	* in-app: a modifier was held (ctrl/meta/shift/alt), or the host targets
	* something other than `_self`. This mirrors the modifier set Angular's own
	* `RouterLink` guards on, so an Ionic `routerLink` behaves like a plain anchor
	* for new-tab, new-window, and download intents.
	*/
	opensNatively(ev) {
		if (ev instanceof MouseEvent && (ev.ctrlKey || ev.metaKey || ev.shiftKey || ev.altKey)) return true;
		const target = this.elementRef.nativeElement.target;
		return target != null && target !== "" && target !== "_self";
	}
	/**
	* The `tabindex` is set to `0` by default on the host element when
	* the `routerLink` directive is used. This causes issues with Ionic
	* components that wrap an `a` or `button` element, such as `ion-item`.
	* See issue https://github.com/angular/angular/issues/28345
	*
	* This method removes the `tabindex` attribute from the host element
	* to allow the Ionic component to manage the focus state correctly.
	*/
	updateTabindex() {
		const ionicComponents = [
			"ION-BACK-BUTTON",
			"ION-BREADCRUMB",
			"ION-BUTTON",
			"ION-CARD",
			"ION-FAB-BUTTON",
			"ION-ITEM",
			"ION-ITEM-OPTION",
			"ION-MENU-BUTTON",
			"ION-SEGMENT-BUTTON",
			"ION-TAB-BUTTON"
		];
		const hostElement = this.elementRef.nativeElement;
		if (ionicComponents.includes(hostElement.tagName)) {
			if (hostElement.getAttribute("tabindex") === "0") hostElement.removeAttribute("tabindex");
		}
	}
	updateTargetUrlAndHref() {
		if (this.routerLink?.urlTree) {
			const href = this.locationStrategy.prepareExternalUrl(this.router.serializeUrl(this.routerLink.urlTree));
			this.elementRef.nativeElement.href = href;
		}
	}
	/**
	* @internal
	*/
	onClick(ev) {
		this.navCtrl.setDirection(this.routerDirection, void 0, void 0, this.routerAnimation);
		/**
		* This prevents the browser from
		* performing a page reload when pressing
		* an Ionic component with routerLink.
		* The page reload interferes with routing
		* and causes ion-back-button to disappear
		* since the local history is wiped on reload.
		*/
		ev.preventDefault();
	}
	/** @nocollapse */
	static ɵfac = function RouterLinkDelegateDirective_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || RouterLinkDelegateDirective)(ɵɵdirectiveInject(LocationStrategy), ɵɵdirectiveInject(NavController), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Router), ɵɵdirectiveInject(RouterLink, 8));
	};
	/** @nocollapse */
	static ɵdir = /* @__PURE__ */ ɵɵdefineDirective({
		type: RouterLinkDelegateDirective,
		selectors: [[
			"",
			"routerLink",
			"",
			5,
			"a",
			5,
			"area"
		]],
		hostBindings: function RouterLinkDelegateDirective_HostBindings(rf, ctx) {
			if (rf & 1) ɵɵlistener("click", function RouterLinkDelegateDirective_click_HostBindingHandler($event) {
				return ctx.onClick($event);
			});
		},
		inputs: {
			routerDirection: "routerDirection",
			routerAnimation: "routerAnimation"
		},
		features: [ɵɵNgOnChangesFeature]
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RouterLinkDelegateDirective, [{
		type: Directive,
		args: [{ selector: ":not(a):not(area)[routerLink]" }]
	}], () => [
		{ type: LocationStrategy },
		{ type: NavController },
		{ type: ElementRef },
		{ type: Router },
		{
			type: RouterLink,
			decorators: [{ type: Optional }]
		}
	], {
		routerDirection: [{ type: Input }],
		routerAnimation: [{ type: Input }],
		onClick: [{
			type: HostListener,
			args: ["click", ["$event"]]
		}]
	});
})();
var RouterLinkWithHrefDelegateDirective = class RouterLinkWithHrefDelegateDirective {
	locationStrategy;
	navCtrl;
	elementRef;
	router;
	routerLink;
	routerDirection = "forward";
	routerAnimation;
	constructor(locationStrategy, navCtrl, elementRef, router, routerLink) {
		this.locationStrategy = locationStrategy;
		this.navCtrl = navCtrl;
		this.elementRef = elementRef;
		this.router = router;
		this.routerLink = routerLink;
	}
	ngOnInit() {
		this.updateTargetUrlAndHref();
	}
	ngOnChanges() {
		this.updateTargetUrlAndHref();
	}
	updateTargetUrlAndHref() {
		if (this.routerLink?.urlTree) {
			const href = this.locationStrategy.prepareExternalUrl(this.router.serializeUrl(this.routerLink.urlTree));
			this.elementRef.nativeElement.href = href;
		}
	}
	/**
	* @internal
	*/
	onClick() {
		this.navCtrl.setDirection(this.routerDirection, void 0, void 0, this.routerAnimation);
	}
	/** @nocollapse */
	static ɵfac = function RouterLinkWithHrefDelegateDirective_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || RouterLinkWithHrefDelegateDirective)(ɵɵdirectiveInject(LocationStrategy), ɵɵdirectiveInject(NavController), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Router), ɵɵdirectiveInject(RouterLink, 8));
	};
	/** @nocollapse */
	static ɵdir = /* @__PURE__ */ ɵɵdefineDirective({
		type: RouterLinkWithHrefDelegateDirective,
		selectors: [[
			"a",
			"routerLink",
			""
		], [
			"area",
			"routerLink",
			""
		]],
		hostBindings: function RouterLinkWithHrefDelegateDirective_HostBindings(rf, ctx) {
			if (rf & 1) ɵɵlistener("click", function RouterLinkWithHrefDelegateDirective_click_HostBindingHandler() {
				return ctx.onClick();
			});
		},
		inputs: {
			routerDirection: "routerDirection",
			routerAnimation: "routerAnimation"
		},
		features: [ɵɵNgOnChangesFeature]
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RouterLinkWithHrefDelegateDirective, [{
		type: Directive,
		args: [{ selector: "a[routerLink],area[routerLink]" }]
	}], () => [
		{ type: LocationStrategy },
		{ type: NavController },
		{ type: ElementRef },
		{ type: Router },
		{
			type: RouterLink,
			decorators: [{ type: Optional }]
		}
	], {
		routerDirection: [{ type: Input }],
		routerAnimation: [{ type: Input }],
		onClick: [{
			type: HostListener,
			args: ["click"]
		}]
	});
})();
//#endregion
//#region node_modules/@ionic/angular/dist/common/directives/navigation/tabs.js
/**
* Extracts `queryParams` and `fragment` from a tab button's href for use
* as Angular `NavigationExtras`. Returns `undefined` when neither is present.
*/
var _c0 = ["tabsInner"];
var parseHrefExtras = (href) => {
	if (!href) return;
	const hashIndex = href.indexOf("#");
	const fragment = hashIndex >= 0 && hashIndex < href.length - 1 ? href.slice(hashIndex + 1) : void 0;
	const beforeHash = hashIndex >= 0 ? href.slice(0, hashIndex) : href;
	const queryIndex = beforeHash.indexOf("?");
	const search = queryIndex >= 0 ? beforeHash.slice(queryIndex + 1) : "";
	let queryParams;
	if (search) {
		const params = new URLSearchParams(search);
		queryParams = {};
		for (const key of new Set(params.keys())) {
			const all = params.getAll(key);
			queryParams[key] = all.length > 1 ? all : all[0];
		}
	}
	if (!queryParams && fragment === void 0) return;
	/**
	* Build the result with only the populated keys so that a spread of the
	* returned object does not overwrite saved `queryParams`/`fragment` with
	* `undefined` (which `Object.assign`/spread would copy as a real key).
	*/
	const extras = {};
	if (queryParams) extras.queryParams = queryParams;
	if (fragment !== void 0) extras.fragment = fragment;
	return extras;
};
var IonTabs = class IonTabs {
	navCtrl;
	tabsInner;
	/**
	* Emitted before the tab view is changed.
	*/
	ionTabsWillChange = new EventEmitter();
	/**
	* Emitted after the tab view is changed.
	*/
	ionTabsDidChange = new EventEmitter();
	tabBarSlot = "bottom";
	hasTab = false;
	selectedTab;
	leavingTab;
	constructor(navCtrl) {
		this.navCtrl = navCtrl;
	}
	ngAfterViewInit() {
		/**
		* Developers must pass at least one ion-tab
		* inside of ion-tabs if they want to use a
		* basic tab-based navigation without the
		* history stack or URL updates associated
		* with the router.
		*/
		const firstTab = this.tabs.length > 0 ? this.tabs.first : void 0;
		if (firstTab) {
			this.hasTab = true;
			this.setActiveTab(firstTab.tab);
			this.tabSwitch();
		}
	}
	ngAfterContentInit() {
		this.detectSlotChanges();
	}
	ngAfterContentChecked() {
		this.detectSlotChanges();
	}
	/**
	* @internal
	*/
	onStackWillChange({ enteringView, tabSwitch }) {
		const stackId = enteringView.stackId;
		if (tabSwitch && stackId !== void 0) this.ionTabsWillChange.emit({ tab: stackId });
	}
	/**
	* @internal
	*/
	onStackDidChange({ enteringView, tabSwitch }) {
		const stackId = enteringView.stackId;
		if (tabSwitch && stackId !== void 0) {
			if (this.tabBar) this.tabBar.selectedTab = stackId;
			this.ionTabsDidChange.emit({ tab: stackId });
		}
	}
	/**
	* Host listener for the `ionTabButtonClick` event. Angular 22 enabled stricter
	* host-binding type checking, which types `$event` as the DOM `Event`. That is
	* not assignable to `select`'s public `string | CustomEvent` parameter, so this
	* thin wrapper narrows the event before forwarding to keep `select`'s public
	* signature intact.
	*/
	onTabButtonClick(ev) {
		return this.select(ev);
	}
	/**
	* When a tab button is clicked, there are several scenarios:
	* 1. If the selected tab is currently active (the tab button has been clicked
	*    again), then it should go to the root view for that tab.
	*
	*   a. Get the saved root view from the router outlet. If the saved root view
	*      matches the tabRootUrl, set the route view to this view including the
	*      navigation extras. Any `queryParams` or `fragment` declared on the tab
	*      button's `href` are also forwarded.
	*   b. If the saved root view from the router outlet does not match, navigate
	*      to the tabRootUrl, forwarding any `queryParams`/`fragment` declared on
	*      the tab button's `href`.
	*
	* 2. If the current tab tab is not currently selected, get the last route
	*    view from the router outlet.
	*
	*   a. If the last route view exists, navigate to that view including any
	*      navigation extras.
	*   b. If the last route view doesn't exist, then navigate to the default
	*      tabRootUrl, forwarding any `queryParams`/`fragment` declared on the
	*      tab button's `href`.
	*/
	select(tabOrEvent) {
		const isTabString = typeof tabOrEvent === "string";
		const tab = isTabString ? tabOrEvent : tabOrEvent.detail.tab;
		const href = isTabString ? void 0 : tabOrEvent.detail.href;
		/**
		* If the tabs are not using the router, then
		* the tab switch logic is handled by the tabs
		* component itself.
		*/
		if (this.hasTab) {
			this.setActiveTab(tab);
			this.tabSwitch();
			return;
		}
		const alreadySelected = this.outlet.getActiveStackId() === tab;
		const tabRootUrl = `${this.outlet.tabsPrefix}/${tab}`;
		/**
		* The href pathname is ignored here; tab routing is driven by `tabsPrefix/tab`.
		* Only the query and fragment are forwarded as navigation extras.
		*/
		const hrefExtras = parseHrefExtras(href);
		/**
		* If this is a nested tab, prevent the event
		* from bubbling otherwise the outer tabs
		* will respond to this event too, causing
		* the app to get directed to the wrong place.
		*/
		if (!isTabString) tabOrEvent.stopPropagation();
		if (alreadySelected) {
			const activeStackId = this.outlet.getActiveStackId();
			if (this.outlet.getLastRouteView(activeStackId)?.url === tabRootUrl) return;
			const rootView = this.outlet.getRootView(tab);
			const navigationExtras = rootView && tabRootUrl === rootView.url && rootView.savedExtras;
			return this.navCtrl.navigateRoot(tabRootUrl, {
				...navigationExtras,
				...hrefExtras,
				animated: true,
				animationDirection: "back"
			});
		} else {
			const lastRoute = this.outlet.getLastRouteView(tab);
			/**
			* If there is a lastRoute, goto that, otherwise goto the fallback url of the
			* selected tab. When falling back to the tab root, honor query params and
			* fragment declared on the tab button's href.
			*/
			const url = lastRoute?.url || tabRootUrl;
			const navigationExtras = lastRoute?.savedExtras ?? (url === tabRootUrl ? hrefExtras : void 0);
			return this.navCtrl.navigateRoot(url, {
				...navigationExtras,
				animated: true,
				animationDirection: "back"
			});
		}
	}
	setActiveTab(tab) {
		const selectedTab = this.tabs.find((t) => t.tab === tab);
		if (!selectedTab) {
			console.error(`[Ionic Error]: Tab with id: "${tab}" does not exist`);
			return;
		}
		this.leavingTab = this.selectedTab;
		this.selectedTab = selectedTab;
		this.ionTabsWillChange.emit({ tab });
		selectedTab.el.active = true;
	}
	tabSwitch() {
		const { selectedTab, leavingTab } = this;
		if (this.tabBar && selectedTab) this.tabBar.selectedTab = selectedTab.tab;
		if (leavingTab?.tab !== selectedTab?.tab) {
			if (leavingTab?.el) leavingTab.el.active = false;
		}
		if (selectedTab) this.ionTabsDidChange.emit({ tab: selectedTab.tab });
	}
	getSelected() {
		if (this.hasTab) return this.selectedTab?.tab;
		return this.outlet.getActiveStackId();
	}
	/**
	* Detects changes to the slot attribute of the tab bar.
	*
	* If the slot attribute has changed, then the tab bar
	* should be relocated to the new slot position.
	*/
	detectSlotChanges() {
		this.tabBars.forEach((tabBar) => {
			const currentSlot = tabBar.el.getAttribute("slot");
			if (currentSlot !== this.tabBarSlot) {
				this.tabBarSlot = currentSlot;
				this.relocateTabBar();
			}
		});
	}
	/**
	* Relocates the tab bar to the new slot position.
	*/
	relocateTabBar() {
		/**
		* `el` is a protected attribute from the generated component wrapper.
		* To avoid having to manually create the wrapper for tab bar, we
		* cast the tab bar to any and access the protected attribute.
		*/
		const tabBar = this.tabBar.el;
		if (this.tabBarSlot === "top")
 /**
		* A tab bar with a slot of "top" should be inserted
		* at the top of the container.
		*/
		this.tabsInner.nativeElement.before(tabBar);
		else
 /**
		* A tab bar with a slot of "bottom" or without a slot
		* should be inserted at the end of the container.
		*/
		this.tabsInner.nativeElement.after(tabBar);
	}
	/** @nocollapse */
	static ɵfac = function IonTabs_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || IonTabs)(ɵɵdirectiveInject(NavController));
	};
	/** @nocollapse */
	static ɵdir = /* @__PURE__ */ ɵɵdefineDirective({
		type: IonTabs,
		selectors: [["ion-tabs"]],
		viewQuery: function IonTabs_Query(rf, ctx) {
			if (rf & 1) ɵɵviewQuery(_c0, 7, ElementRef);
			if (rf & 2) {
				let _t;
				ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.tabsInner = _t.first);
			}
		},
		hostBindings: function IonTabs_HostBindings(rf, ctx) {
			if (rf & 1) ɵɵlistener("ionTabButtonClick", function IonTabs_ionTabButtonClick_HostBindingHandler($event) {
				return ctx.onTabButtonClick($event);
			});
		},
		outputs: {
			ionTabsWillChange: "ionTabsWillChange",
			ionTabsDidChange: "ionTabsDidChange"
		}
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonTabs, [{
		type: Directive,
		args: [{ selector: "ion-tabs" }]
	}], () => [{ type: NavController }], {
		tabsInner: [{
			type: ViewChild,
			args: ["tabsInner", {
				read: ElementRef,
				static: true
			}]
		}],
		ionTabsWillChange: [{ type: Output }],
		ionTabsDidChange: [{ type: Output }],
		onTabButtonClick: [{
			type: HostListener,
			args: ["ionTabButtonClick", ["$event"]]
		}]
	});
})();
//#endregion
//#region node_modules/@ionic/angular/dist/common/utils/overlay.js
var OverlayBaseController = class {
	ctrl;
	constructor(ctrl) {
		this.ctrl = ctrl;
	}
	/**
	* Creates a new overlay
	*/
	create(opts) {
		return this.ctrl.create(opts || {});
	}
	/**
	* When `id` is not provided, it dismisses the top overlay.
	*/
	dismiss(data, role, id) {
		return this.ctrl.dismiss(data, role, id);
	}
	/**
	* Returns the top overlay.
	*/
	getTop() {
		return this.ctrl.getTop();
	}
};
//#endregion
//#region node_modules/@ionic/angular/dist/common/utils/routing.js
/**
* Provides a way to customize when activated routes get reused.
*/
var IonicRouteStrategy = class {
	/**
	* Whether the given route should detach for later reuse.
	*/
	shouldDetach(_route) {
		return false;
	}
	/**
	* Returns `false`, meaning the route (and its subtree) is never reattached
	*/
	shouldAttach(_route) {
		return false;
	}
	/**
	* A no-op; the route is never stored since this strategy never detaches routes for later re-use.
	*/
	store(_route, _detachedTree) {}
	/**
	* Returns `null` because this strategy does not store routes for later re-use.
	*/
	retrieve(_route) {
		return null;
	}
	/**
	* Determines if a route should be reused.
	* This strategy returns `true` when the future route config and
	* current route config are identical and all route parameters are identical.
	*/
	shouldReuseRoute(future, curr) {
		if (future.routeConfig !== curr.routeConfig) return false;
		const futureParams = future.params;
		const currentParams = curr.params;
		const keysA = Object.keys(futureParams);
		const keysB = Object.keys(currentParams);
		if (keysA.length !== keysB.length) return false;
		for (const key of keysA) if (currentParams[key] !== futureParams[key]) return false;
		return true;
	}
};
//#endregion
export { h$1 as $, J as A, en as B, e as C, D, C as E, V as F, sn as G, j as H, Y as I, o as J, v as K, _ as L, O as M, Q as N, G as O, T as P, a as Q, an as R, Platform as S, B as T, nn as U, h as V, on as W, t as X, r as Y, p as Z, IonModalToken as _, RouterLinkWithHrefDelegateDirective as a, d$1 as at, ConfigToken as b, ValueAccessor as c, DomController as ct, IonRouterOutlet as d, n as et, provideComponentInputBinding as f, AngularDelegate as g, ProxyCmp as h, RouterLinkDelegateDirective as i, a$1 as it, L as j, I as k, setIonicClasses as l, fromEvent as lt, IonModal as m, OverlayBaseController as n, y$1 as nt, IonNav as o, v$1 as ot, IonPopover as p, z as q, IonTabs as r, P$1 as rt, IonBackButton as s, MenuController as st, IonicRouteStrategy as t, o$2 as tt, raf as u, NavParams as v, A as w, NavController as x, Config as y, dn as z };
