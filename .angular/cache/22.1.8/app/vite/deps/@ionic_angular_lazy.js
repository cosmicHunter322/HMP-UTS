import { t as __exportAll } from "./rolldown-runtime-D7D4PA-g.js";
import { $n as Output, Al as ɵɵinject, Bl as createOperatorSubscriber, Dc as Injector, Dl as ɵɵdefineInjector, Do as ɵɵgetCurrentView, Ea as ɵɵcontentQuery, Ec as InjectionToken, El as ɵɵdefineInjectable, En as ElementRef, Er as ViewContainerRef, Fc as NgZone, Fl as ɵɵresetView, Fn as Injectable, Hl as Observable, Hs as ɵɵtemplate, Il as ɵɵrestoreView, In as Input, Lo as ɵɵinjectAttribute, M as createComponent, Oo as ɵɵgetInheritedFactory, Pn as Inject, Qn as Optional, Rl as BehaviorSubject, S as ViewChild, Vl as operate, Wi as setClassMetadata, Wl as identity, Xl as isFunction, Xo as ɵɵloadQuery, Xt as APP_INITIALIZER, Yo as ɵɵlistener, Zo as ɵɵnextContext, _o as ɵɵelementContainer, a as ContentChildren, an as ChangeDetectionStrategy, as as ɵɵprojectionDef, bc as EventEmitter, bo as ɵɵelementEnd, ca as ɵɵInheritDefinitionFeature, cn as Component, da as ɵɵadvance, ft as reflectComponentType, i as ContentChild, is as ɵɵprojection, kn as HostListener, la as ɵɵNgOnChangesFeature, mc as DOCUMENT, nn as Attribute, no as ɵɵdefineDirective, oo as ɵɵdirectiveInject, os as ɵɵproperty, pr as SkipSelf, qn as NgModule, r as ChangeDetectorRef, rl as forwardRef, ro as ɵɵdefineNgModule, ru as __read, sc as ɵɵviewQuery, sl as inject, tn as ApplicationRef, to as ɵɵdefineComponent, tu as __decorate, ua as ɵɵProvidersFeature, vc as EnvironmentInjector, vo as ɵɵelementContainerEnd, vr as TemplateRef, vs as ɵɵqueryRefresh, wn as Directive, xo as ɵɵelementStart, ya as ɵɵattribute, yo as ɵɵelementContainerStart, zl as Subject } from "./core-GC7q_RMC.js";
import { Q as PRIMARY_OUTLET, R as ChildrenOutletContexts, W as NavigationCancel, X as NavigationStart, ct as Router, f as RouterLink, j as ActivatedRoute, kt as combineLatest, q as NavigationError, yt as UrlSerializer } from "./router-X9GUwMbM.js";
import { i as isArrayLike, r as innerFrom } from "./from-D2rSBONj.js";
import { L as filter, P as switchMap, R as mergeMap, z as of } from "./platform-browser-CCCxeeqh.js";
import { r as mapOneOrManyArgs } from "./createObject-BPYXfubG.js";
import { D as MaxValidator, M as NG_VALUE_ACCESSOR, N as NgControl, j as NG_VALIDATORS, k as MinValidator } from "./forms-C4aYpz1q.js";
import { C as CommonModule, Nt as Location, Pt as LocationStrategy, V as NgIf, Z as NgTemplateOutlet } from "./common-Cwvxu5fs.js";
import { a as s$2, c as r$2, d as n$1, f as qt, i as r$3, l as o$1, n as c$3, o as t$1, r as l$2, s as n$2, t as B$1, u as a$2 } from "./p-CEs5NmKW-LNNNVUeW.js";
import { i as bootstrapLazy } from "./index-Dvqtt_WK-CtfmC4By.js";
import "./helpers-BJFnZngp-COG28xNj.js";
import { t as createAnimation } from "./animation-CAzXJ2I1-D34TSm8w.js";
import { a as getIonPageElement } from "./index-CdoVp_rZ-D9b3Ui-I.js";
import { t as getTimeGivenProgression } from "./cubic-bezier-hHmYLOfE-CQJriwBy.js";
import "./gesture-controller-B_gJaBk0-B8pQAih_.js";
import { t as createGesture } from "./index-BmLuEdV7-B8ieQZPS.js";
import { i as isPlatform, n as getPlatforms, r as initialize } from "./ionic-global-BSaFA7np-C0AYHzhu.js";
import { t as IonicSafeString } from "./index-DmnOg_xm-CoMu4g4x.js";
import { t as setupConfig } from "./config-DWCzVL3Y-CxfCWjLC.js";
import { i as openURL } from "./theme-byZM6qHV-CVcL0HyM.js";
import "./framework-delegate-CUDbUfWS-SLUux__8.js";
import { E as toastController, _ as modalController, a as alertController, g as loadingController, i as actionSheetController, y as popoverController } from "./overlays-a_5AhqWk-BAKKNgyR.js";
import { t as menuController } from "./index-iurdcGHg-CPNbFdxk.js";
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
var MenuController$1 = class {
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
//#region node_modules/@ionic/core/components/p-DSuBagxs.js
/*!
* (C) Ionic http://ionicframework.com - MIT License
*/
var p_DSuBagxs_exports = /* @__PURE__ */ __exportAll({
	iosTransitionAnimation: () => l$1,
	shadow: () => a$1
});
var n = (t) => document.querySelector(`${t}.ion-cloned-element`);
var a$1 = (t) => t.shadowRoot || t;
var s$1 = (t) => {
	const o = "ION-TABS" === t.tagName ? t : t.querySelector("ion-tabs"), n = "ion-content ion-header:not(.header-collapse-condense-inactive) ion-title.title-large";
	if (null != o) {
		const t = o.querySelector("ion-tab:not(.tab-hidden), .ion-page:not(.ion-page-hidden)");
		return null != t ? t.querySelector(n) : null;
	}
	return t.querySelector(n);
};
var e = (t, o) => {
	const n = "ION-TABS" === t.tagName ? t : t.querySelector("ion-tabs");
	let a = [];
	if (null != n) {
		const t = n.querySelector("ion-tab:not(.tab-hidden), .ion-page:not(.ion-page-hidden)");
		null != t && (a = t.querySelectorAll("ion-buttons"));
	} else a = t.querySelectorAll("ion-buttons");
	for (const t of a) {
		const n = t.closest("ion-header"), a = n && !n.classList.contains("header-collapse-condense-inactive"), s = t.querySelector("ion-back-button"), e = t.classList.contains("buttons-collapse");
		if (null !== s && ("start" === t.slot || "" === t.slot) && (e && a && o || !e)) return s;
	}
	return null;
};
var r$1 = (o, s, e, r, i, l, f, p, $) => {
	const d = s ? `calc(100% - ${i.right + 4}px)` : i.left - 4 + "px", b = s ? "right" : "left", m = s ? "left" : "right", u = s ? "right" : "left";
	let y = 1, X = 1, x = `scale(${X})`;
	const h = "scale(1)";
	if (l && f) {
		const t = l.textContent?.trim() === p.textContent?.trim();
		y = $.width / f.width, X = ($.height - c$2) / f.height, x = t ? `scale(${y}, ${X})` : `scale(${X})`;
	}
	const g = a$1(r).querySelector("ion-icon").getBoundingClientRect(), w = s ? g.width / 2 - (g.right - i.right) + "px" : i.left - g.width / 2 + "px", k = s ? `-${window.innerWidth - i.right}px` : `${i.left}px`, v = `${$.top}px`, T = `${i.top}px`, A = e ? [{
		offset: 0,
		transform: `translate3d(${k}, ${T}, 0)`
	}, {
		offset: 1,
		transform: `translate3d(${w}, ${v}, 0)`
	}] : [{
		offset: 0,
		transform: `translate3d(${w}, ${v}, 0)`
	}, {
		offset: 1,
		transform: `translate3d(${k}, ${T}, 0)`
	}], N = e ? [{
		offset: 0,
		opacity: 1,
		transform: h
	}, {
		offset: 1,
		opacity: 0,
		transform: x
	}] : [{
		offset: 0,
		opacity: 0,
		transform: x
	}, {
		offset: 1,
		opacity: 1,
		transform: h
	}], W = e ? [
		{
			offset: 0,
			opacity: 1,
			transform: "scale(1)"
		},
		{
			offset: .2,
			opacity: 0,
			transform: "scale(0.6)"
		},
		{
			offset: 1,
			opacity: 0,
			transform: "scale(0.6)"
		}
	] : [
		{
			offset: 0,
			opacity: 0,
			transform: "scale(0.6)"
		},
		{
			offset: .6,
			opacity: 0,
			transform: "scale(0.6)"
		},
		{
			offset: 1,
			opacity: 1,
			transform: "scale(1)"
		}
	], j = r$2(), B = r$2(), C = r$2(), G = n("ion-back-button"), I = a$1(G).querySelector(".button-text"), O = a$1(G).querySelector("ion-icon");
	G.text = r.text, G.mode = r.mode, G.icon = r.icon, G.color = r.color, G.disabled = r.disabled, G.style.setProperty("display", "block"), G.style.setProperty("position", "fixed"), B.addElement(O), j.addElement(I), C.addElement(G), C.beforeStyles({
		position: "absolute",
		top: "0px",
		[u]: "0px"
	}).beforeAddWrite((() => {
		r.style.setProperty("display", "none"), G.style.setProperty(b, d);
	})).afterAddWrite((() => {
		r.style.setProperty("display", ""), G.style.setProperty("display", "none"), G.style.removeProperty(b);
	})).keyframes(A), j.beforeStyles({ "transform-origin": `${b} top` }).keyframes(N), B.beforeStyles({ "transform-origin": `${m} center` }).keyframes(W), o.addAnimation([
		j,
		B,
		C
	]);
};
var i$2 = (o, a, s, e, r, i, l, f, p) => {
	const $ = a ? "right" : "left", d = a ? `calc(100% - ${r.right}px)` : `${r.left}px`, b = `${r.top}px`;
	let m = a ? `-${window.innerWidth - l.right - 8}px` : `${l.x + 8}px`, u = .5;
	const y = "scale(1)";
	let X = `scale(${u})`;
	if (f && p) {
		m = a ? `-${window.innerWidth - p.right - 8}px` : p.x - 8 + "px";
		const t = f.textContent?.trim() === e.textContent?.trim();
		u = p.height / (i.height - c$2), X = t ? `scale(${p.width / i.width}, ${u})` : `scale(${u})`;
	}
	const x = l.top + l.height / 2 - r.height * u / 2 + "px", h = s ? [
		{
			offset: 0,
			opacity: 0,
			transform: `translate3d(${m}, ${x}, 0) ${X}`
		},
		{
			offset: .1,
			opacity: 0
		},
		{
			offset: 1,
			opacity: 1,
			transform: `translate3d(0px, ${b}, 0) ${y}`
		}
	] : [
		{
			offset: 0,
			opacity: .99,
			transform: `translate3d(0px, ${b}, 0) ${y}`
		},
		{
			offset: .6,
			opacity: 0
		},
		{
			offset: 1,
			opacity: 0,
			transform: `translate3d(${m}, ${x}, 0) ${X}`
		}
	], g = n("ion-title"), w = r$2();
	g.innerText = e.innerText, g.size = e.size, g.color = e.color, w.addElement(g), w.beforeStyles({
		"transform-origin": `${$} top`,
		height: `${r.height}px`,
		display: "",
		position: "relative",
		[$]: d
	}).beforeAddWrite((() => {
		e.style.setProperty("opacity", "0");
	})).afterAddWrite((() => {
		e.style.setProperty("opacity", ""), g.style.setProperty("display", "none");
	})).keyframes(h), o.addAnimation(w);
};
var l$1 = (n, l) => {
	try {
		const c = "cubic-bezier(0.32,0.72,0,1)", f = "opacity", p = "transform", $ = "0%", d = .8, b = "rtl" === n.ownerDocument.dir, m = b ? "-99.5%" : "99.5%", u = b ? "33%" : "-33%", y = l.enteringEl, X = l.leavingEl, x = "back" === l.direction, h = y.querySelector(":scope > ion-content"), g = y.querySelectorAll(":scope > ion-header > *:not(ion-toolbar), :scope > ion-footer > *"), w = y.querySelectorAll(":scope > ion-header > ion-toolbar"), k = r$2(), v = r$2();
		if (k.addElement(y).duration((l.duration ?? 0) || 540).easing(l.easing || c).fill("both").beforeRemoveClass("ion-page-invisible"), X && null != n) {
			const o = r$2();
			o.addElement(n), k.addAnimation(o);
		}
		if (h || 0 !== w.length || 0 !== g.length ? (v.addElement(h), v.addElement(g)) : v.addElement(y.querySelector(":scope > .ion-page, :scope > ion-nav, :scope > ion-tabs")), k.addAnimation(v), x ? v.beforeClearStyles([f]).fromTo("transform", `translateX(${u})`, `translateX(${$})`).fromTo(f, d, 1) : v.beforeClearStyles([f]).fromTo("transform", `translateX(${m})`, `translateX(${$})`), h) {
			const o = a$1(h).querySelector(".transition-effect");
			if (o) {
				const n = o.querySelector(".transition-cover"), a = o.querySelector(".transition-shadow"), s = r$2(), e = r$2(), r = r$2();
				s.addElement(o).beforeStyles({
					opacity: "1",
					display: "block"
				}).afterStyles({
					opacity: "",
					display: ""
				}), e.addElement(n).beforeClearStyles([f]).fromTo(f, 0, .1), r.addElement(a).beforeClearStyles([f]).fromTo(f, .03, .7), s.addAnimation([e, r]), v.addAnimation([s]);
			}
		}
		const T = y.querySelector("ion-header.header-collapse-condense"), { forward: A, backward: N } = ((t, o, n, l, c) => {
			const f = e(l, n), p = s$1(c), $ = s$1(l), d = e(c, n), b = null !== f && null !== p && !n, m = null !== $ && null !== d && n;
			if (b) {
				const s = p.getBoundingClientRect(), e = f.getBoundingClientRect(), l = a$1(f).querySelector(".button-text"), c = l?.getBoundingClientRect(), $ = a$1(p).querySelector(".toolbar-title").getBoundingClientRect();
				i$2(t, o, n, p, s, $, e, l, c), r$1(t, o, n, f, e, l, c, p, $);
			} else if (m) {
				const s = $.getBoundingClientRect(), e = d.getBoundingClientRect(), l = a$1(d).querySelector(".button-text"), c = l?.getBoundingClientRect(), f = a$1($).querySelector(".toolbar-title").getBoundingClientRect();
				i$2(t, o, n, $, s, f, e, l, c), r$1(t, o, n, d, e, l, c, $, f);
			}
			return {
				forward: b,
				backward: m
			};
		})(k, b, x, y, X);
		if (w.forEach(((o) => {
			const n = r$2();
			n.addElement(o), k.addAnimation(n);
			const s = r$2();
			s.addElement(o.querySelector("ion-title"));
			const e = r$2(), r = Array.from(o.querySelectorAll("ion-buttons,[menuToggle]")), i = o.closest("ion-header"), l = i?.classList.contains("header-collapse-condense-inactive");
			let c;
			c = r.filter(x ? (t) => {
				const o = t.classList.contains("buttons-collapse");
				return o && !l || !o;
			} : (t) => !t.classList.contains("buttons-collapse")), e.addElement(c);
			const p = r$2();
			p.addElement(o.querySelectorAll(":scope > *:not(ion-title):not(ion-buttons):not([menuToggle])"));
			const d = r$2();
			d.addElement(a$1(o).querySelector(".toolbar-background"));
			const y = r$2(), X = o.querySelector("ion-back-button");
			if (X && y.addElement(X), n.addAnimation([
				s,
				e,
				p,
				d,
				y
			]), e.fromTo(f, .01, 1), p.fromTo(f, .01, 1), x) l || s.fromTo("transform", `translateX(${u})`, `translateX(${$})`).fromTo(f, .01, 1), p.fromTo("transform", `translateX(${u})`, `translateX(${$})`), y.fromTo(f, .01, 1);
			else {
				T || s.fromTo("transform", `translateX(${m})`, `translateX(${$})`).fromTo(f, .01, 1), p.fromTo("transform", `translateX(${m})`, `translateX(${$})`), d.beforeClearStyles([f, "transform"]);
				if (i?.translucent ? d.fromTo("transform", b ? "translateX(-100%)" : "translateX(100%)", "translateX(0px)") : d.fromTo(f, .01, "var(--opacity)"), A || y.fromTo(f, .01, 1), X && !A) {
					const o = r$2();
					o.addElement(a$1(X).querySelector(".button-text")).fromTo("transform", b ? "translateX(-100px)" : "translateX(100px)", "translateX(0px)"), n.addAnimation(o);
				}
			}
		})), X) {
			const n = r$2(), s = X.querySelector(":scope > ion-content"), e = X.querySelectorAll(":scope > ion-header > ion-toolbar"), r = X.querySelectorAll(":scope > ion-header > *:not(ion-toolbar), :scope > ion-footer > *");
			if (s || 0 !== e.length || 0 !== r.length ? (n.addElement(s), n.addElement(r)) : n.addElement(X.querySelector(":scope > .ion-page, :scope > ion-nav, :scope > ion-tabs")), k.addAnimation(n), x) {
				n.beforeClearStyles([f]).fromTo("transform", `translateX(${$})`, b ? "translateX(-100%)" : "translateX(100%)");
				const t = B$1(X);
				k.afterAddWrite((() => {
					"normal" === k.getDirection() && t.style.setProperty("display", "none");
				}));
			} else n.fromTo("transform", `translateX(${$})`, `translateX(${u})`).fromTo(f, 1, d);
			if (s) {
				const o = a$1(s).querySelector(".transition-effect");
				if (o) {
					const a = o.querySelector(".transition-cover"), s = o.querySelector(".transition-shadow"), e = r$2(), r = r$2(), i = r$2();
					e.addElement(o).beforeStyles({
						opacity: "1",
						display: "block"
					}).afterStyles({
						opacity: "",
						display: ""
					}), r.addElement(a).beforeClearStyles([f]).fromTo(f, .1, 0), i.addElement(s).beforeClearStyles([f]).fromTo(f, .7, .03), e.addAnimation([r, i]), n.addAnimation([e]);
				}
			}
			e.forEach(((o) => {
				const n = r$2();
				n.addElement(o);
				const s = r$2();
				s.addElement(o.querySelector("ion-title"));
				const e = r$2(), r = o.querySelectorAll("ion-buttons,[menuToggle]"), i = o.closest("ion-header"), l = i?.classList.contains("header-collapse-condense-inactive"), c = Array.from(r).filter(((t) => {
					const o = t.classList.contains("buttons-collapse");
					return o && !l || !o;
				}));
				e.addElement(c);
				const d = r$2(), m = o.querySelectorAll(":scope > *:not(ion-title):not(ion-buttons):not([menuToggle])");
				m.length > 0 && d.addElement(m);
				const y = r$2();
				y.addElement(a$1(o).querySelector(".toolbar-background"));
				const X = r$2(), h = o.querySelector("ion-back-button");
				if (h && X.addElement(h), n.addAnimation([
					s,
					e,
					d,
					X,
					y
				]), k.addAnimation(n), X.fromTo(f, .99, 0), e.fromTo(f, .99, 0), d.fromTo(f, .99, 0), x) {
					l || s.fromTo("transform", `translateX(${$})`, b ? "translateX(-100%)" : "translateX(100%)").fromTo(f, .99, 0), d.fromTo("transform", `translateX(${$})`, b ? "translateX(-100%)" : "translateX(100%)"), y.beforeClearStyles([f, "transform"]);
					if (i?.translucent ? y.fromTo("transform", "translateX(0px)", b ? "translateX(-100%)" : "translateX(100%)") : y.fromTo(f, "var(--opacity)", 0), h && !N) {
						const o = r$2();
						o.addElement(a$1(h).querySelector(".button-text")).fromTo("transform", `translateX(${$})`, `translateX(${(b ? -124 : 124) + "px"})`), n.addAnimation(o);
					}
				} else l || s.fromTo("transform", `translateX(${$})`, `translateX(${u})`).fromTo(f, .99, 0).afterClearStyles([p, f]), d.fromTo("transform", `translateX(${$})`, `translateX(${u})`).afterClearStyles([p, f]), X.afterClearStyles([f]), s.afterClearStyles([f]), e.afterClearStyles([f]);
			}));
		}
		return k;
	} catch (t) {
		throw t;
	}
};
var c$2 = 10;
//#endregion
//#region node_modules/@ionic/core/components/p-CDvyV0r0.js
/*!
* (C) Ionic http://ionicframework.com - MIT License
*/
var p_CDvyV0r0_exports = /* @__PURE__ */ __exportAll({ mdTransitionAnimation: () => r });
var r = (r, a) => {
	const i = "40px", s = "back" === a.direction, n = a.leavingEl, e = B$1(a.enteringEl), c = e.querySelector("ion-toolbar"), p = r$2();
	if (p.addElement(e).fill("both").beforeRemoveClass("ion-page-invisible"), s ? p.duration((a.duration ?? 0) || 200).easing("cubic-bezier(0.47,0,0.745,0.715)") : p.duration((a.duration ?? 0) || 280).easing("cubic-bezier(0.36,0.66,0.04,1)").fromTo("transform", `translateY(${i})`, "translateY(0px)").fromTo("opacity", .01, 1), c) {
		const o = r$2();
		o.addElement(c), p.addAnimation(o);
	}
	if (n && s) {
		p.duration((a.duration ?? 0) || 200).easing("cubic-bezier(0.47,0,0.745,0.715)");
		const r = r$2();
		r.addElement(B$1(n)).onFinish(((t) => {
			1 === t && r.elements.length > 0 && r.elements[0].style.setProperty("display", "none");
		})).fromTo("transform", "translateY(0px)", `translateY(${i})`).fromTo("opacity", 1, 0), p.addAnimation(r);
	}
	return p;
};
//#endregion
//#region node_modules/@ionic/core/components/p-B_gJaBk0.js
/*!
* (C) Ionic http://ionicframework.com - MIT License
*/
var t = class {
	constructor(t, s, i, h, e) {
		this.id = s, this.name = i, this.disableScroll = e, this.priority = 1e6 * h + s, this.ctrl = t;
	}
	canStart() {
		return !!this.ctrl && this.ctrl.canStart(this.name);
	}
	start() {
		return !!this.ctrl && this.ctrl.start(this.name, this.id, this.priority);
	}
	capture() {
		if (!this.ctrl) return !1;
		const t = this.ctrl.capture(this.name, this.id, this.priority);
		return t && this.disableScroll && this.ctrl.disableScroll(this.id), t;
	}
	release() {
		this.ctrl && (this.ctrl.release(this.id), this.disableScroll && this.ctrl.enableScroll(this.id));
	}
	destroy() {
		this.release(), this.ctrl = void 0;
	}
};
var s = class {
	constructor(t, s, i, h) {
		this.id = s, this.disable = i, this.disableScroll = h, this.ctrl = t;
	}
	block() {
		if (this.ctrl) {
			if (this.disable) for (const t of this.disable) this.ctrl.disableGesture(t, this.id);
			this.disableScroll && this.ctrl.disableScroll(this.id);
		}
	}
	unblock() {
		if (this.ctrl) {
			if (this.disable) for (const t of this.disable) this.ctrl.enableGesture(t, this.id);
			this.disableScroll && this.ctrl.enableScroll(this.id);
		}
	}
	destroy() {
		this.unblock(), this.ctrl = void 0;
	}
};
new class {
	constructor() {
		this.gestureId = 0, this.requestedStart = /* @__PURE__ */ new Map(), this.disabledGestures = /* @__PURE__ */ new Map(), this.disabledScroll = /* @__PURE__ */ new Set();
	}
	createGesture(s) {
		return new t(this, this.newID(), s.name, s.priority ?? 0, !!s.disableScroll);
	}
	createBlocker(t = {}) {
		return new s(this, this.newID(), t.disable, !!t.disableScroll);
	}
	start(t, s, i) {
		return this.canStart(t) ? (this.requestedStart.set(s, i), !0) : (this.requestedStart.delete(s), !1);
	}
	capture(t, s, i) {
		if (!this.start(t, s, i)) return !1;
		const h = this.requestedStart;
		let e = -1e4;
		if (h.forEach(((t) => {
			e = Math.max(e, t);
		})), e === i) {
			this.capturedId = s, h.clear();
			const i = new CustomEvent("ionGestureCaptured", { detail: { gestureName: t } });
			return document.dispatchEvent(i), !0;
		}
		return h.delete(s), !1;
	}
	release(t) {
		this.requestedStart.delete(t), this.capturedId === t && (this.capturedId = void 0);
	}
	disableGesture(t, s) {
		let i = this.disabledGestures.get(t);
		void 0 === i && (i = /* @__PURE__ */ new Set(), this.disabledGestures.set(t, i)), i.add(s);
	}
	enableGesture(t, s) {
		const i = this.disabledGestures.get(t);
		void 0 !== i && i.delete(s);
	}
	disableScroll(t) {
		this.disabledScroll.add(t), 1 === this.disabledScroll.size && document.body.classList.add("backdrop-no-scroll");
	}
	enableScroll(t) {
		this.disabledScroll.delete(t), 0 === this.disabledScroll.size && document.body.classList.remove("backdrop-no-scroll");
	}
	canStart(t) {
		return void 0 === this.capturedId && !this.isDisabled(t);
	}
	isCaptured() {
		return void 0 !== this.capturedId;
	}
	isScrollDisabled() {
		return this.disabledScroll.size > 0;
	}
	isDisabled(t) {
		const s = this.disabledGestures.get(t);
		return !!(s && s.size > 0);
	}
	newID() {
		return this.gestureId++, this.gestureId;
	}
}();
//#endregion
//#region node_modules/@ionic/core/components/p-D0YpjgON.js
/*!
* (C) Ionic http://ionicframework.com - MIT License
*/
//#endregion
//#region node_modules/@ionic/core/components/p-2ta4uE9-.js
/*!
* (C) Ionic http://ionicframework.com - MIT License
*/
var a = (o) => c$1(o);
var d = (o, i) => ("string" == typeof o && (i = o, o = void 0), a(o).includes(i));
var c$1 = (o = window) => {
	if (void 0 === o) return [];
	o.Ionic = o.Ionic || {};
	let i = o.Ionic.platforms;
	return i ?? (i = o.Ionic.platforms = p$1(o), i.forEach(((i) => o.document.documentElement.classList.add(`plt-${i}`)))), i;
};
var p$1 = (i) => {
	const t = n$1.get("platform");
	return Object.keys(g).filter(((o) => {
		const e = t?.[o];
		return "function" == typeof e ? e(i) : g[o](i);
	}));
};
var m = (o) => !!b(o, /iPad/i) || !(!b(o, /Macintosh/i) || !f(o));
var l = (o) => b(o, /android|sink/i);
var f = (o) => y(o, "(any-pointer:coarse)");
var u$1 = (o) => h(o) || w(o);
var h = (o) => !!(o.cordova || o.phonegap || o.PhoneGap);
var w = (o) => {
	return !!o.Capacitor?.isNativePlatform?.();
};
var b = (o, i) => i.test(o.navigator.userAgent);
var y = (o, i) => o.matchMedia?.(i).matches;
var g = {
	ipad: m,
	iphone: (o) => b(o, /iPhone/i),
	ios: (o) => b(o, /iPhone|iPod/i) || m(o),
	android: l,
	phablet: (o) => {
		const i = o.innerWidth, t = o.innerHeight, e = Math.min(i, t), n = Math.max(i, t);
		return e > 390 && e < 520 && n > 620 && n < 800;
	},
	tablet: (o) => {
		const i = o.innerWidth, t = o.innerHeight, e = Math.min(i, t), n = Math.max(i, t);
		return m(o) || ((o) => l(o) && !b(o, /mobile/i))(o) || e > 460 && e < 820 && n > 780 && n < 1400;
	},
	cordova: h,
	capacitor: w,
	electron: (o) => b(o, /electron/i),
	pwa: (o) => !(!o.matchMedia?.("(display-mode: standalone)").matches && !o.navigator.standalone),
	mobile: f,
	mobileweb: (o) => f(o) && !u$1(o),
	desktop: (o) => !f(o),
	hybrid: u$1
};
var M$1;
var v = (o) => o && qt(o) || M$1;
//#endregion
//#region node_modules/@ionic/core/components/p-DBGxvxkE.js
/*!
* (C) Ionic http://ionicframework.com - MIT License
*/
//#endregion
//#region node_modules/@ionic/core/components/p-k92zpBT6.js
/*!
* (C) Ionic http://ionicframework.com - MIT License
*/
//#endregion
//#region node_modules/@ionic/core/components/p-CMT0YmOj.js
/*!
* (C) Ionic http://ionicframework.com - MIT License
*/
var o = (t) => r$2().duration(t ? 400 : 300);
var i = (t) => {
	let e, n;
	const r = t.width + 8, i = r$2(), u = r$2();
	t.isEndSide ? (e = r + "px", n = "0px") : (e = -r + "px", n = "0px"), i.addElement(t.menuInnerEl).fromTo("transform", `translateX(${e})`, `translateX(${n})`);
	const c = "ios" === v(t), p = c ? .2 : .25;
	return u.addElement(t.backdropEl).fromTo("opacity", .01, p), o(c).addAnimation([i, u]);
};
var u = (t) => {
	let e, n;
	const r = v(t), i = t.width;
	t.isEndSide ? (e = -i + "px", n = i + "px") : (e = i + "px", n = -i + "px");
	const u = r$2().addElement(t.menuInnerEl).fromTo("transform", `translateX(${n})`, "translateX(0px)"), c = r$2().addElement(t.contentEl).fromTo("transform", "translateX(0px)", `translateX(${e})`), p = r$2().addElement(t.backdropEl).fromTo("opacity", .01, .32);
	return o("ios" === r).addAnimation([
		u,
		c,
		p
	]);
};
var c = (t) => {
	const e = v(t), n = t.width * (t.isEndSide ? -1 : 1) + "px", r = r$2().addElement(t.contentEl).fromTo("transform", "translateX(0px)", `translateX(${n})`);
	return o("ios" === e).addAnimation(r);
};
(() => {
	const s = /* @__PURE__ */ new Map(), a = [], o = async (t, e = !1) => {
		if (await d(), "start" === t || "end" === t) {
			const r = a.filter(((e) => e.side === t && !e.disabled));
			if (r.length >= 1) return r.length > 1 && e && a$2(`menuController queried for a menu on the "${t}" side, but ${r.length} menus were found. The first menu reference will be used. If this is not the behavior you want then pass the ID of the menu instead of its side.`, r.map(((t) => t.el))), r[0].el;
			const s = a.filter(((e) => e.side === t));
			if (s.length >= 1) return s.length > 1 && e && a$2(`menuController queried for a menu on the "${t}" side, but ${s.length} menus were found. The first menu reference will be used. If this is not the behavior you want then pass the ID of the menu instead of its side.`, s.map(((t) => t.el))), s[0].el;
		} else if (null != t) return w(((e) => e.menuId === t));
		return w(((t) => !t.disabled)) || (a.length > 0 ? a[0].el : void 0);
	}, p = async () => (await d(), f()), m = (t, e) => {
		s.set(t, e);
	}, f = () => w(((t) => t._isOpen)), l = () => a.some(((t) => t.isAnimating)), w = (t) => {
		const e = a.find(t);
		if (void 0 !== e) return e.el;
	}, d = () => Promise.all(Array.from(document.querySelectorAll("ion-menu")).map(((t) => new Promise(((e) => n$2(t, e))))));
	return m("reveal", c), m("push", u), m("overlay", i), o$1?.addEventListener("ionBackButton", ((t) => {
		const n = f();
		n && t.detail.register(99, (() => n.close()));
	})), {
		registerAnimation: m,
		get: o,
		getMenus: async () => (await d(), a.map(((t) => t.el))),
		getOpen: p,
		isEnabled: async (t) => {
			const e = await o(t);
			return !!e && !e.disabled;
		},
		swipeGesture: async (t, e) => {
			const n = await o(e);
			return n && (n.swipeGesture = t), n;
		},
		isAnimating: async () => (await d(), l()),
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
/*!
* (C) Ionic http://ionicframework.com - MIT License
*/
/*!
* (C) Ionic http://ionicframework.com - MIT License
*/
//#endregion
//#region node_modules/@ionic/core/components/index.js
/*!
* (C) Ionic http://ionicframework.com - MIT License
*/
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
		return d(this.win, platformName);
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
		return a(this.win);
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
var proxyInputs$1 = (Cmp, inputs) => {
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
var proxyMethods$1 = (Cmp, methods) => {
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
function ProxyCmp$1(opts) {
	const decorator = function(cls) {
		const { defineCustomElementFn, inputs, methods } = opts;
		if (defineCustomElementFn !== void 0) defineCustomElementFn();
		if (inputs) proxyInputs$1(cls, inputs);
		if (methods) proxyMethods$1(cls, methods);
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
var IonModal$1 = class IonModal {
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
IonModal$1 = __decorate([ProxyCmp$1({
	inputs: MODAL_INPUTS,
	methods: MODAL_METHODS
})], IonModal$1);
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonModal$1, [{
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
var IonPopover$1 = class IonPopover {
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
IonPopover$1 = __decorate([ProxyCmp$1({
	inputs: POPOVER_INPUTS,
	methods: POPOVER_METHODS
})], IonPopover$1);
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonPopover$1, [{
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
var IonRouterOutlet$1 = class IonRouterOutlet$1 {
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
		return new (__ngFactoryType__ || IonRouterOutlet$1)(ɵɵinjectAttribute("name"), ɵɵinjectAttribute("tabs"), ɵɵdirectiveInject(Location), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Router), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(ActivatedRoute), ɵɵdirectiveInject(IonRouterOutlet$1, 12));
	};
	/** @nocollapse */
	static ɵdir = /* @__PURE__ */ ɵɵdefineDirective({
		type: IonRouterOutlet$1,
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
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonRouterOutlet$1, [{
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
			type: IonRouterOutlet$1,
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
var IonBackButton$1 = class IonBackButton {
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
		return new (__ngFactoryType__ || IonBackButton)(ɵɵdirectiveInject(IonRouterOutlet$1, 8), ɵɵdirectiveInject(NavController), ɵɵdirectiveInject(Config), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(ChangeDetectorRef));
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
IonBackButton$1 = __decorate([ProxyCmp$1({ inputs: BACK_BUTTON_INPUTS })], IonBackButton$1);
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonBackButton$1, [{
		type: Directive,
		args: [{ inputs: BACK_BUTTON_INPUTS }]
	}], () => [
		{
			type: IonRouterOutlet$1,
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
var IonNav$1 = class IonNav {
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
IonNav$1 = __decorate([ProxyCmp$1({
	inputs: NAV_INPUTS,
	methods: NAV_METHODS
})], IonNav$1);
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonNav$1, [{
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
var RouterLinkDelegateDirective$1 = class RouterLinkDelegateDirective$1 {
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
		return new (__ngFactoryType__ || RouterLinkDelegateDirective$1)(ɵɵdirectiveInject(LocationStrategy), ɵɵdirectiveInject(NavController), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Router), ɵɵdirectiveInject(RouterLink, 8));
	};
	/** @nocollapse */
	static ɵdir = /* @__PURE__ */ ɵɵdefineDirective({
		type: RouterLinkDelegateDirective$1,
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
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RouterLinkDelegateDirective$1, [{
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
var RouterLinkWithHrefDelegateDirective$1 = class RouterLinkWithHrefDelegateDirective$1 {
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
		return new (__ngFactoryType__ || RouterLinkWithHrefDelegateDirective$1)(ɵɵdirectiveInject(LocationStrategy), ɵɵdirectiveInject(NavController), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Router), ɵɵdirectiveInject(RouterLink, 8));
	};
	/** @nocollapse */
	static ɵdir = /* @__PURE__ */ ɵɵdefineDirective({
		type: RouterLinkWithHrefDelegateDirective$1,
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
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RouterLinkWithHrefDelegateDirective$1, [{
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
var _c0$5 = ["tabsInner"];
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
var IonTabs$1 = class IonTabs$1 {
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
		return new (__ngFactoryType__ || IonTabs$1)(ɵɵdirectiveInject(NavController));
	};
	/** @nocollapse */
	static ɵdir = /* @__PURE__ */ ɵɵdefineDirective({
		type: IonTabs$1,
		selectors: [["ion-tabs"]],
		viewQuery: function IonTabs_Query(rf, ctx) {
			if (rf & 1) ɵɵviewQuery(_c0$5, 7, ElementRef);
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
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonTabs$1, [{
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
//#region node_modules/@ionic/angular/dist/lazy/directives/control-value-accessors/boolean-value-accessor.js
var BooleanValueAccessorDirective = class BooleanValueAccessorDirective extends ValueAccessor {
	constructor(injector, el) {
		super(injector, el);
	}
	writeValue(value) {
		this.elementRef.nativeElement.checked = this.lastValue = value;
		setIonicClasses(this.elementRef);
	}
	_handleIonChange(ev) {
		const el = ev.target;
		this.handleValueChange(el, el.checked);
	}
	/** @nocollapse */
	static ɵfac = function BooleanValueAccessorDirective_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || BooleanValueAccessorDirective)(ɵɵdirectiveInject(Injector), ɵɵdirectiveInject(ElementRef));
	};
	/** @nocollapse */
	static ɵdir = /* @__PURE__ */ ɵɵdefineDirective({
		type: BooleanValueAccessorDirective,
		selectors: [["ion-checkbox"], ["ion-toggle"]],
		hostBindings: function BooleanValueAccessorDirective_HostBindings(rf, ctx) {
			if (rf & 1) ɵɵlistener("ionChange", function BooleanValueAccessorDirective_ionChange_HostBindingHandler($event) {
				return ctx._handleIonChange($event);
			});
		},
		standalone: false,
		features: [ɵɵProvidersFeature([{
			provide: NG_VALUE_ACCESSOR,
			useExisting: BooleanValueAccessorDirective,
			multi: true
		}]), ɵɵInheritDefinitionFeature]
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BooleanValueAccessorDirective, [{
		type: Directive,
		args: [{
			standalone: false,
			selector: "ion-checkbox,ion-toggle",
			providers: [{
				provide: NG_VALUE_ACCESSOR,
				useExisting: BooleanValueAccessorDirective,
				multi: true
			}]
		}]
	}], () => [{ type: Injector }, { type: ElementRef }], { _handleIonChange: [{
		type: HostListener,
		args: ["ionChange", ["$event"]]
	}] });
})();
//#endregion
//#region node_modules/@ionic/angular/dist/lazy/directives/control-value-accessors/numeric-value-accessor.js
var NumericValueAccessorDirective = class NumericValueAccessorDirective extends ValueAccessor {
	el;
	constructor(injector, el) {
		super(injector, el);
		this.el = el;
	}
	handleInputEvent(ev) {
		const el = ev.target;
		this.handleValueChange(el, el.value);
	}
	registerOnChange(fn) {
		if (this.el.nativeElement.tagName === "ION-INPUT" || this.el.nativeElement.tagName === "ION-INPUT-OTP") super.registerOnChange((value) => {
			fn(value === "" ? null : parseFloat(value));
		});
		else super.registerOnChange(fn);
	}
	/** @nocollapse */
	static ɵfac = function NumericValueAccessorDirective_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || NumericValueAccessorDirective)(ɵɵdirectiveInject(Injector), ɵɵdirectiveInject(ElementRef));
	};
	/** @nocollapse */
	static ɵdir = /* @__PURE__ */ ɵɵdefineDirective({
		type: NumericValueAccessorDirective,
		selectors: [
			[
				"ion-input",
				"type",
				"number"
			],
			[
				"ion-input-otp",
				3,
				"type",
				"text"
			],
			["ion-range"]
		],
		hostBindings: function NumericValueAccessorDirective_HostBindings(rf, ctx) {
			if (rf & 1) ɵɵlistener("ionInput", function NumericValueAccessorDirective_ionInput_HostBindingHandler($event) {
				return ctx.handleInputEvent($event);
			});
		},
		standalone: false,
		features: [ɵɵProvidersFeature([{
			provide: NG_VALUE_ACCESSOR,
			useExisting: NumericValueAccessorDirective,
			multi: true
		}]), ɵɵInheritDefinitionFeature]
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NumericValueAccessorDirective, [{
		type: Directive,
		args: [{
			standalone: false,
			selector: "ion-input[type=number],ion-input-otp:not([type=text]),ion-range",
			providers: [{
				provide: NG_VALUE_ACCESSOR,
				useExisting: NumericValueAccessorDirective,
				multi: true
			}]
		}]
	}], () => [{ type: Injector }, { type: ElementRef }], { handleInputEvent: [{
		type: HostListener,
		args: ["ionInput", ["$event"]]
	}] });
})();
//#endregion
//#region node_modules/@ionic/angular/dist/lazy/directives/control-value-accessors/select-value-accessor.js
var SelectValueAccessorDirective = class SelectValueAccessorDirective extends ValueAccessor {
	constructor(injector, el) {
		super(injector, el);
	}
	_handleChangeEvent(ev) {
		const el = ev.target;
		this.handleValueChange(el, el.value);
	}
	/** @nocollapse */
	static ɵfac = function SelectValueAccessorDirective_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || SelectValueAccessorDirective)(ɵɵdirectiveInject(Injector), ɵɵdirectiveInject(ElementRef));
	};
	/** @nocollapse */
	static ɵdir = /* @__PURE__ */ ɵɵdefineDirective({
		type: SelectValueAccessorDirective,
		selectors: [
			["ion-select"],
			["ion-radio-group"],
			["ion-segment"],
			["ion-datetime"]
		],
		hostBindings: function SelectValueAccessorDirective_HostBindings(rf, ctx) {
			if (rf & 1) ɵɵlistener("ionChange", function SelectValueAccessorDirective_ionChange_HostBindingHandler($event) {
				return ctx._handleChangeEvent($event);
			});
		},
		standalone: false,
		features: [ɵɵProvidersFeature([{
			provide: NG_VALUE_ACCESSOR,
			useExisting: SelectValueAccessorDirective,
			multi: true
		}]), ɵɵInheritDefinitionFeature]
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SelectValueAccessorDirective, [{
		type: Directive,
		args: [{
			standalone: false,
			selector: "ion-select, ion-radio-group, ion-segment, ion-datetime",
			providers: [{
				provide: NG_VALUE_ACCESSOR,
				useExisting: SelectValueAccessorDirective,
				multi: true
			}]
		}]
	}], () => [{ type: Injector }, { type: ElementRef }], { _handleChangeEvent: [{
		type: HostListener,
		args: ["ionChange", ["$event"]]
	}] });
})();
//#endregion
//#region node_modules/@ionic/angular/dist/lazy/directives/control-value-accessors/text-value-accessor.js
var TextValueAccessorDirective = class TextValueAccessorDirective extends ValueAccessor {
	constructor(injector, el) {
		super(injector, el);
	}
	_handleInputEvent(ev) {
		const el = ev.target;
		this.handleValueChange(el, el.value);
	}
	/** @nocollapse */
	static ɵfac = function TextValueAccessorDirective_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || TextValueAccessorDirective)(ɵɵdirectiveInject(Injector), ɵɵdirectiveInject(ElementRef));
	};
	/** @nocollapse */
	static ɵdir = /* @__PURE__ */ ɵɵdefineDirective({
		type: TextValueAccessorDirective,
		selectors: [
			[
				"ion-input",
				3,
				"type",
				"number"
			],
			[
				"ion-input-otp",
				"type",
				"text"
			],
			["ion-textarea"],
			["ion-searchbar"]
		],
		hostBindings: function TextValueAccessorDirective_HostBindings(rf, ctx) {
			if (rf & 1) ɵɵlistener("ionInput", function TextValueAccessorDirective_ionInput_HostBindingHandler($event) {
				return ctx._handleInputEvent($event);
			});
		},
		standalone: false,
		features: [ɵɵProvidersFeature([{
			provide: NG_VALUE_ACCESSOR,
			useExisting: TextValueAccessorDirective,
			multi: true
		}]), ɵɵInheritDefinitionFeature]
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TextValueAccessorDirective, [{
		type: Directive,
		args: [{
			standalone: false,
			selector: "ion-input:not([type=number]),ion-input-otp[type=text],ion-textarea,ion-searchbar",
			providers: [{
				provide: NG_VALUE_ACCESSOR,
				useExisting: TextValueAccessorDirective,
				multi: true
			}]
		}]
	}], () => [{ type: Injector }, { type: ElementRef }], { _handleInputEvent: [{
		type: HostListener,
		args: ["ionInput", ["$event"]]
	}] });
})();
//#endregion
//#region node_modules/@ionic/angular/dist/lazy/directives/angular-component-lib/utils.js
var proxyInputs = (Cmp, inputs) => {
	const Prototype = Cmp.prototype;
	inputs.forEach((item) => {
		Object.defineProperty(Prototype, item, {
			get() {
				return this.el[item];
			},
			set(val) {
				this.z.runOutsideAngular(() => this.el[item] = val);
			},
			/**
			* In the event that proxyInputs is called
			* multiple times re-defining these inputs
			* will cause an error to be thrown. As a result
			* we set configurable: true to indicate these
			* properties can be changed.
			*/
			configurable: true
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
//#region node_modules/@ionic/angular/dist/lazy/directives/proxies.js
var _c0$4 = ["*"];
var IonAccordion = class IonAccordion {
	z;
	el;
	constructor(c, r, z) {
		this.z = z;
		c.detach();
		this.el = r.nativeElement;
	}
	/** @nocollapse */
	static ɵfac = function IonAccordion_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || IonAccordion)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
	};
	/** @nocollapse */
	static ɵcmp = /* @__PURE__ */ ɵɵdefineComponent({
		type: IonAccordion,
		selectors: [["ion-accordion"]],
		inputs: {
			disabled: "disabled",
			mode: "mode",
			readonly: "readonly",
			toggleIcon: "toggleIcon",
			toggleIconSlot: "toggleIconSlot",
			value: "value"
		},
		standalone: false,
		ngContentSelectors: _c0$4,
		decls: 1,
		vars: 0,
		template: function IonAccordion_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵprojectionDef();
				ɵɵprojection(0);
			}
		},
		encapsulation: 2
	});
};
IonAccordion = __decorate([ProxyCmp({ inputs: [
	"disabled",
	"mode",
	"readonly",
	"toggleIcon",
	"toggleIconSlot",
	"value"
] })], IonAccordion);
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonAccordion, [{
		type: Component,
		args: [{
			selector: "ion-accordion",
			changeDetection: ChangeDetectionStrategy.OnPush,
			template: "<ng-content></ng-content>",
			inputs: [
				"disabled",
				"mode",
				"readonly",
				"toggleIcon",
				"toggleIconSlot",
				"value"
			],
			standalone: false
		}]
	}], () => [
		{ type: ChangeDetectorRef },
		{ type: ElementRef },
		{ type: NgZone }
	], null);
})();
var IonAccordionGroup = class IonAccordionGroup {
	z;
	el;
	ionChange = new EventEmitter();
	constructor(c, r, z) {
		this.z = z;
		c.detach();
		this.el = r.nativeElement;
	}
	/** @nocollapse */
	static ɵfac = function IonAccordionGroup_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || IonAccordionGroup)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
	};
	/** @nocollapse */
	static ɵcmp = /* @__PURE__ */ ɵɵdefineComponent({
		type: IonAccordionGroup,
		selectors: [["ion-accordion-group"]],
		inputs: {
			animated: "animated",
			disabled: "disabled",
			expand: "expand",
			mode: "mode",
			multiple: "multiple",
			readonly: "readonly",
			value: "value"
		},
		outputs: { ionChange: "ionChange" },
		standalone: false,
		ngContentSelectors: _c0$4,
		decls: 1,
		vars: 0,
		template: function IonAccordionGroup_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵprojectionDef();
				ɵɵprojection(0);
			}
		},
		encapsulation: 2
	});
};
IonAccordionGroup = __decorate([ProxyCmp({ inputs: [
	"animated",
	"disabled",
	"expand",
	"mode",
	"multiple",
	"readonly",
	"value"
] })], IonAccordionGroup);
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonAccordionGroup, [{
		type: Component,
		args: [{
			selector: "ion-accordion-group",
			changeDetection: ChangeDetectionStrategy.OnPush,
			template: "<ng-content></ng-content>",
			inputs: [
				"animated",
				"disabled",
				"expand",
				"mode",
				"multiple",
				"readonly",
				"value"
			],
			outputs: ["ionChange"],
			standalone: false
		}]
	}], () => [
		{ type: ChangeDetectorRef },
		{ type: ElementRef },
		{ type: NgZone }
	], { ionChange: [{ type: Output }] });
})();
var IonActionSheet = class IonActionSheet {
	z;
	el;
	ionActionSheetDidPresent = new EventEmitter();
	ionActionSheetWillPresent = new EventEmitter();
	ionActionSheetWillDismiss = new EventEmitter();
	ionActionSheetDidDismiss = new EventEmitter();
	didPresent = new EventEmitter();
	willPresent = new EventEmitter();
	willDismiss = new EventEmitter();
	didDismiss = new EventEmitter();
	constructor(c, r, z) {
		this.z = z;
		c.detach();
		this.el = r.nativeElement;
	}
	/** @nocollapse */
	static ɵfac = function IonActionSheet_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || IonActionSheet)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
	};
	/** @nocollapse */
	static ɵcmp = /* @__PURE__ */ ɵɵdefineComponent({
		type: IonActionSheet,
		selectors: [["ion-action-sheet"]],
		inputs: {
			animated: "animated",
			backdropDismiss: "backdropDismiss",
			buttons: "buttons",
			cssClass: "cssClass",
			enterAnimation: "enterAnimation",
			header: "header",
			htmlAttributes: "htmlAttributes",
			isOpen: "isOpen",
			keyboardClose: "keyboardClose",
			leaveAnimation: "leaveAnimation",
			mode: "mode",
			subHeader: "subHeader",
			translucent: "translucent",
			trigger: "trigger"
		},
		outputs: {
			ionActionSheetDidPresent: "ionActionSheetDidPresent",
			ionActionSheetWillPresent: "ionActionSheetWillPresent",
			ionActionSheetWillDismiss: "ionActionSheetWillDismiss",
			ionActionSheetDidDismiss: "ionActionSheetDidDismiss",
			didPresent: "didPresent",
			willPresent: "willPresent",
			willDismiss: "willDismiss",
			didDismiss: "didDismiss"
		},
		standalone: false,
		ngContentSelectors: _c0$4,
		decls: 1,
		vars: 0,
		template: function IonActionSheet_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵprojectionDef();
				ɵɵprojection(0);
			}
		},
		encapsulation: 2
	});
};
IonActionSheet = __decorate([ProxyCmp({
	inputs: [
		"animated",
		"backdropDismiss",
		"buttons",
		"cssClass",
		"enterAnimation",
		"header",
		"htmlAttributes",
		"isOpen",
		"keyboardClose",
		"leaveAnimation",
		"mode",
		"subHeader",
		"translucent",
		"trigger"
	],
	methods: [
		"present",
		"dismiss",
		"onDidDismiss",
		"onWillDismiss"
	]
})], IonActionSheet);
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonActionSheet, [{
		type: Component,
		args: [{
			selector: "ion-action-sheet",
			changeDetection: ChangeDetectionStrategy.OnPush,
			template: "<ng-content></ng-content>",
			inputs: [
				"animated",
				"backdropDismiss",
				"buttons",
				"cssClass",
				"enterAnimation",
				"header",
				"htmlAttributes",
				"isOpen",
				"keyboardClose",
				"leaveAnimation",
				"mode",
				"subHeader",
				"translucent",
				"trigger"
			],
			outputs: [
				"ionActionSheetDidPresent",
				"ionActionSheetWillPresent",
				"ionActionSheetWillDismiss",
				"ionActionSheetDidDismiss",
				"didPresent",
				"willPresent",
				"willDismiss",
				"didDismiss"
			],
			standalone: false
		}]
	}], () => [
		{ type: ChangeDetectorRef },
		{ type: ElementRef },
		{ type: NgZone }
	], {
		ionActionSheetDidPresent: [{ type: Output }],
		ionActionSheetWillPresent: [{ type: Output }],
		ionActionSheetWillDismiss: [{ type: Output }],
		ionActionSheetDidDismiss: [{ type: Output }],
		didPresent: [{ type: Output }],
		willPresent: [{ type: Output }],
		willDismiss: [{ type: Output }],
		didDismiss: [{ type: Output }]
	});
})();
var IonAlert = class IonAlert {
	z;
	el;
	ionAlertDidPresent = new EventEmitter();
	ionAlertWillPresent = new EventEmitter();
	ionAlertWillDismiss = new EventEmitter();
	ionAlertDidDismiss = new EventEmitter();
	didPresent = new EventEmitter();
	willPresent = new EventEmitter();
	willDismiss = new EventEmitter();
	didDismiss = new EventEmitter();
	constructor(c, r, z) {
		this.z = z;
		c.detach();
		this.el = r.nativeElement;
	}
	/** @nocollapse */
	static ɵfac = function IonAlert_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || IonAlert)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
	};
	/** @nocollapse */
	static ɵcmp = /* @__PURE__ */ ɵɵdefineComponent({
		type: IonAlert,
		selectors: [["ion-alert"]],
		inputs: {
			animated: "animated",
			backdropDismiss: "backdropDismiss",
			buttons: "buttons",
			cssClass: "cssClass",
			enterAnimation: "enterAnimation",
			header: "header",
			htmlAttributes: "htmlAttributes",
			inputs: "inputs",
			isOpen: "isOpen",
			keyboardClose: "keyboardClose",
			leaveAnimation: "leaveAnimation",
			message: "message",
			mode: "mode",
			subHeader: "subHeader",
			translucent: "translucent",
			trigger: "trigger"
		},
		outputs: {
			ionAlertDidPresent: "ionAlertDidPresent",
			ionAlertWillPresent: "ionAlertWillPresent",
			ionAlertWillDismiss: "ionAlertWillDismiss",
			ionAlertDidDismiss: "ionAlertDidDismiss",
			didPresent: "didPresent",
			willPresent: "willPresent",
			willDismiss: "willDismiss",
			didDismiss: "didDismiss"
		},
		standalone: false,
		ngContentSelectors: _c0$4,
		decls: 1,
		vars: 0,
		template: function IonAlert_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵprojectionDef();
				ɵɵprojection(0);
			}
		},
		encapsulation: 2
	});
};
IonAlert = __decorate([ProxyCmp({
	inputs: [
		"animated",
		"backdropDismiss",
		"buttons",
		"cssClass",
		"enterAnimation",
		"header",
		"htmlAttributes",
		"inputs",
		"isOpen",
		"keyboardClose",
		"leaveAnimation",
		"message",
		"mode",
		"subHeader",
		"translucent",
		"trigger"
	],
	methods: [
		"present",
		"dismiss",
		"onDidDismiss",
		"onWillDismiss"
	]
})], IonAlert);
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonAlert, [{
		type: Component,
		args: [{
			selector: "ion-alert",
			changeDetection: ChangeDetectionStrategy.OnPush,
			template: "<ng-content></ng-content>",
			inputs: [
				"animated",
				"backdropDismiss",
				"buttons",
				"cssClass",
				"enterAnimation",
				"header",
				"htmlAttributes",
				"inputs",
				"isOpen",
				"keyboardClose",
				"leaveAnimation",
				"message",
				"mode",
				"subHeader",
				"translucent",
				"trigger"
			],
			outputs: [
				"ionAlertDidPresent",
				"ionAlertWillPresent",
				"ionAlertWillDismiss",
				"ionAlertDidDismiss",
				"didPresent",
				"willPresent",
				"willDismiss",
				"didDismiss"
			],
			standalone: false
		}]
	}], () => [
		{ type: ChangeDetectorRef },
		{ type: ElementRef },
		{ type: NgZone }
	], {
		ionAlertDidPresent: [{ type: Output }],
		ionAlertWillPresent: [{ type: Output }],
		ionAlertWillDismiss: [{ type: Output }],
		ionAlertDidDismiss: [{ type: Output }],
		didPresent: [{ type: Output }],
		willPresent: [{ type: Output }],
		willDismiss: [{ type: Output }],
		didDismiss: [{ type: Output }]
	});
})();
var IonApp = class IonApp {
	z;
	el;
	constructor(c, r, z) {
		this.z = z;
		c.detach();
		this.el = r.nativeElement;
	}
	/** @nocollapse */
	static ɵfac = function IonApp_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || IonApp)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
	};
	/** @nocollapse */
	static ɵcmp = /* @__PURE__ */ ɵɵdefineComponent({
		type: IonApp,
		selectors: [["ion-app"]],
		standalone: false,
		ngContentSelectors: _c0$4,
		decls: 1,
		vars: 0,
		template: function IonApp_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵprojectionDef();
				ɵɵprojection(0);
			}
		},
		encapsulation: 2
	});
};
IonApp = __decorate([ProxyCmp({ methods: ["setFocus"] })], IonApp);
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonApp, [{
		type: Component,
		args: [{
			selector: "ion-app",
			changeDetection: ChangeDetectionStrategy.OnPush,
			template: "<ng-content></ng-content>",
			inputs: [],
			standalone: false
		}]
	}], () => [
		{ type: ChangeDetectorRef },
		{ type: ElementRef },
		{ type: NgZone }
	], null);
})();
var IonAvatar = class IonAvatar {
	z;
	el;
	constructor(c, r, z) {
		this.z = z;
		c.detach();
		this.el = r.nativeElement;
	}
	/** @nocollapse */
	static ɵfac = function IonAvatar_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || IonAvatar)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
	};
	/** @nocollapse */
	static ɵcmp = /* @__PURE__ */ ɵɵdefineComponent({
		type: IonAvatar,
		selectors: [["ion-avatar"]],
		standalone: false,
		ngContentSelectors: _c0$4,
		decls: 1,
		vars: 0,
		template: function IonAvatar_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵprojectionDef();
				ɵɵprojection(0);
			}
		},
		encapsulation: 2
	});
};
IonAvatar = __decorate([ProxyCmp({})], IonAvatar);
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonAvatar, [{
		type: Component,
		args: [{
			selector: "ion-avatar",
			changeDetection: ChangeDetectionStrategy.OnPush,
			template: "<ng-content></ng-content>",
			inputs: [],
			standalone: false
		}]
	}], () => [
		{ type: ChangeDetectorRef },
		{ type: ElementRef },
		{ type: NgZone }
	], null);
})();
var IonBackdrop = class IonBackdrop {
	z;
	el;
	ionBackdropTap = new EventEmitter();
	constructor(c, r, z) {
		this.z = z;
		c.detach();
		this.el = r.nativeElement;
	}
	/** @nocollapse */
	static ɵfac = function IonBackdrop_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || IonBackdrop)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
	};
	/** @nocollapse */
	static ɵcmp = /* @__PURE__ */ ɵɵdefineComponent({
		type: IonBackdrop,
		selectors: [["ion-backdrop"]],
		inputs: {
			stopPropagation: "stopPropagation",
			tappable: "tappable",
			visible: "visible"
		},
		outputs: { ionBackdropTap: "ionBackdropTap" },
		standalone: false,
		ngContentSelectors: _c0$4,
		decls: 1,
		vars: 0,
		template: function IonBackdrop_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵprojectionDef();
				ɵɵprojection(0);
			}
		},
		encapsulation: 2
	});
};
IonBackdrop = __decorate([ProxyCmp({ inputs: [
	"stopPropagation",
	"tappable",
	"visible"
] })], IonBackdrop);
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonBackdrop, [{
		type: Component,
		args: [{
			selector: "ion-backdrop",
			changeDetection: ChangeDetectionStrategy.OnPush,
			template: "<ng-content></ng-content>",
			inputs: [
				"stopPropagation",
				"tappable",
				"visible"
			],
			outputs: ["ionBackdropTap"],
			standalone: false
		}]
	}], () => [
		{ type: ChangeDetectorRef },
		{ type: ElementRef },
		{ type: NgZone }
	], { ionBackdropTap: [{ type: Output }] });
})();
var IonBadge = class IonBadge {
	z;
	el;
	constructor(c, r, z) {
		this.z = z;
		c.detach();
		this.el = r.nativeElement;
	}
	/** @nocollapse */
	static ɵfac = function IonBadge_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || IonBadge)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
	};
	/** @nocollapse */
	static ɵcmp = /* @__PURE__ */ ɵɵdefineComponent({
		type: IonBadge,
		selectors: [["ion-badge"]],
		inputs: {
			color: "color",
			mode: "mode"
		},
		standalone: false,
		ngContentSelectors: _c0$4,
		decls: 1,
		vars: 0,
		template: function IonBadge_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵprojectionDef();
				ɵɵprojection(0);
			}
		},
		encapsulation: 2
	});
};
IonBadge = __decorate([ProxyCmp({ inputs: ["color", "mode"] })], IonBadge);
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonBadge, [{
		type: Component,
		args: [{
			selector: "ion-badge",
			changeDetection: ChangeDetectionStrategy.OnPush,
			template: "<ng-content></ng-content>",
			inputs: ["color", "mode"],
			standalone: false
		}]
	}], () => [
		{ type: ChangeDetectorRef },
		{ type: ElementRef },
		{ type: NgZone }
	], null);
})();
var IonBreadcrumb = class IonBreadcrumb {
	z;
	el;
	ionFocus = new EventEmitter();
	ionBlur = new EventEmitter();
	constructor(c, r, z) {
		this.z = z;
		c.detach();
		this.el = r.nativeElement;
	}
	/** @nocollapse */
	static ɵfac = function IonBreadcrumb_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || IonBreadcrumb)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
	};
	/** @nocollapse */
	static ɵcmp = /* @__PURE__ */ ɵɵdefineComponent({
		type: IonBreadcrumb,
		selectors: [["ion-breadcrumb"]],
		inputs: {
			active: "active",
			color: "color",
			disabled: "disabled",
			download: "download",
			href: "href",
			mode: "mode",
			rel: "rel",
			routerAnimation: "routerAnimation",
			routerDirection: "routerDirection",
			separator: "separator",
			target: "target"
		},
		outputs: {
			ionFocus: "ionFocus",
			ionBlur: "ionBlur"
		},
		standalone: false,
		ngContentSelectors: _c0$4,
		decls: 1,
		vars: 0,
		template: function IonBreadcrumb_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵprojectionDef();
				ɵɵprojection(0);
			}
		},
		encapsulation: 2
	});
};
IonBreadcrumb = __decorate([ProxyCmp({ inputs: [
	"active",
	"color",
	"disabled",
	"download",
	"href",
	"mode",
	"rel",
	"routerAnimation",
	"routerDirection",
	"separator",
	"target"
] })], IonBreadcrumb);
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonBreadcrumb, [{
		type: Component,
		args: [{
			selector: "ion-breadcrumb",
			changeDetection: ChangeDetectionStrategy.OnPush,
			template: "<ng-content></ng-content>",
			inputs: [
				"active",
				"color",
				"disabled",
				"download",
				"href",
				"mode",
				"rel",
				"routerAnimation",
				"routerDirection",
				"separator",
				"target"
			],
			outputs: ["ionFocus", "ionBlur"],
			standalone: false
		}]
	}], () => [
		{ type: ChangeDetectorRef },
		{ type: ElementRef },
		{ type: NgZone }
	], {
		ionFocus: [{ type: Output }],
		ionBlur: [{ type: Output }]
	});
})();
var IonBreadcrumbs = class IonBreadcrumbs {
	z;
	el;
	ionCollapsedClick = new EventEmitter();
	constructor(c, r, z) {
		this.z = z;
		c.detach();
		this.el = r.nativeElement;
	}
	/** @nocollapse */
	static ɵfac = function IonBreadcrumbs_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || IonBreadcrumbs)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
	};
	/** @nocollapse */
	static ɵcmp = /* @__PURE__ */ ɵɵdefineComponent({
		type: IonBreadcrumbs,
		selectors: [["ion-breadcrumbs"]],
		inputs: {
			color: "color",
			itemsAfterCollapse: "itemsAfterCollapse",
			itemsBeforeCollapse: "itemsBeforeCollapse",
			maxItems: "maxItems",
			mode: "mode"
		},
		outputs: { ionCollapsedClick: "ionCollapsedClick" },
		standalone: false,
		ngContentSelectors: _c0$4,
		decls: 1,
		vars: 0,
		template: function IonBreadcrumbs_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵprojectionDef();
				ɵɵprojection(0);
			}
		},
		encapsulation: 2
	});
};
IonBreadcrumbs = __decorate([ProxyCmp({ inputs: [
	"color",
	"itemsAfterCollapse",
	"itemsBeforeCollapse",
	"maxItems",
	"mode"
] })], IonBreadcrumbs);
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonBreadcrumbs, [{
		type: Component,
		args: [{
			selector: "ion-breadcrumbs",
			changeDetection: ChangeDetectionStrategy.OnPush,
			template: "<ng-content></ng-content>",
			inputs: [
				"color",
				"itemsAfterCollapse",
				"itemsBeforeCollapse",
				"maxItems",
				"mode"
			],
			outputs: ["ionCollapsedClick"],
			standalone: false
		}]
	}], () => [
		{ type: ChangeDetectorRef },
		{ type: ElementRef },
		{ type: NgZone }
	], { ionCollapsedClick: [{ type: Output }] });
})();
var IonButton = class IonButton {
	z;
	el;
	ionFocus = new EventEmitter();
	ionBlur = new EventEmitter();
	constructor(c, r, z) {
		this.z = z;
		c.detach();
		this.el = r.nativeElement;
	}
	/** @nocollapse */
	static ɵfac = function IonButton_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || IonButton)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
	};
	/** @nocollapse */
	static ɵcmp = /* @__PURE__ */ ɵɵdefineComponent({
		type: IonButton,
		selectors: [["ion-button"]],
		inputs: {
			buttonType: "buttonType",
			color: "color",
			disabled: "disabled",
			download: "download",
			expand: "expand",
			fill: "fill",
			form: "form",
			href: "href",
			mode: "mode",
			rel: "rel",
			routerAnimation: "routerAnimation",
			routerDirection: "routerDirection",
			shape: "shape",
			size: "size",
			strong: "strong",
			target: "target",
			type: "type"
		},
		outputs: {
			ionFocus: "ionFocus",
			ionBlur: "ionBlur"
		},
		standalone: false,
		ngContentSelectors: _c0$4,
		decls: 1,
		vars: 0,
		template: function IonButton_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵprojectionDef();
				ɵɵprojection(0);
			}
		},
		encapsulation: 2
	});
};
IonButton = __decorate([ProxyCmp({ inputs: [
	"buttonType",
	"color",
	"disabled",
	"download",
	"expand",
	"fill",
	"form",
	"href",
	"mode",
	"rel",
	"routerAnimation",
	"routerDirection",
	"shape",
	"size",
	"strong",
	"target",
	"type"
] })], IonButton);
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonButton, [{
		type: Component,
		args: [{
			selector: "ion-button",
			changeDetection: ChangeDetectionStrategy.OnPush,
			template: "<ng-content></ng-content>",
			inputs: [
				"buttonType",
				"color",
				"disabled",
				"download",
				"expand",
				"fill",
				"form",
				"href",
				"mode",
				"rel",
				"routerAnimation",
				"routerDirection",
				"shape",
				"size",
				"strong",
				"target",
				"type"
			],
			outputs: ["ionFocus", "ionBlur"],
			standalone: false
		}]
	}], () => [
		{ type: ChangeDetectorRef },
		{ type: ElementRef },
		{ type: NgZone }
	], {
		ionFocus: [{ type: Output }],
		ionBlur: [{ type: Output }]
	});
})();
var IonButtons = class IonButtons {
	z;
	el;
	constructor(c, r, z) {
		this.z = z;
		c.detach();
		this.el = r.nativeElement;
	}
	/** @nocollapse */
	static ɵfac = function IonButtons_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || IonButtons)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
	};
	/** @nocollapse */
	static ɵcmp = /* @__PURE__ */ ɵɵdefineComponent({
		type: IonButtons,
		selectors: [["ion-buttons"]],
		inputs: { collapse: "collapse" },
		standalone: false,
		ngContentSelectors: _c0$4,
		decls: 1,
		vars: 0,
		template: function IonButtons_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵprojectionDef();
				ɵɵprojection(0);
			}
		},
		encapsulation: 2
	});
};
IonButtons = __decorate([ProxyCmp({ inputs: ["collapse"] })], IonButtons);
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonButtons, [{
		type: Component,
		args: [{
			selector: "ion-buttons",
			changeDetection: ChangeDetectionStrategy.OnPush,
			template: "<ng-content></ng-content>",
			inputs: ["collapse"],
			standalone: false
		}]
	}], () => [
		{ type: ChangeDetectorRef },
		{ type: ElementRef },
		{ type: NgZone }
	], null);
})();
var IonCard = class IonCard {
	z;
	el;
	constructor(c, r, z) {
		this.z = z;
		c.detach();
		this.el = r.nativeElement;
	}
	/** @nocollapse */
	static ɵfac = function IonCard_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || IonCard)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
	};
	/** @nocollapse */
	static ɵcmp = /* @__PURE__ */ ɵɵdefineComponent({
		type: IonCard,
		selectors: [["ion-card"]],
		inputs: {
			button: "button",
			color: "color",
			disabled: "disabled",
			download: "download",
			href: "href",
			mode: "mode",
			rel: "rel",
			routerAnimation: "routerAnimation",
			routerDirection: "routerDirection",
			target: "target",
			type: "type"
		},
		standalone: false,
		ngContentSelectors: _c0$4,
		decls: 1,
		vars: 0,
		template: function IonCard_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵprojectionDef();
				ɵɵprojection(0);
			}
		},
		encapsulation: 2
	});
};
IonCard = __decorate([ProxyCmp({ inputs: [
	"button",
	"color",
	"disabled",
	"download",
	"href",
	"mode",
	"rel",
	"routerAnimation",
	"routerDirection",
	"target",
	"type"
] })], IonCard);
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonCard, [{
		type: Component,
		args: [{
			selector: "ion-card",
			changeDetection: ChangeDetectionStrategy.OnPush,
			template: "<ng-content></ng-content>",
			inputs: [
				"button",
				"color",
				"disabled",
				"download",
				"href",
				"mode",
				"rel",
				"routerAnimation",
				"routerDirection",
				"target",
				"type"
			],
			standalone: false
		}]
	}], () => [
		{ type: ChangeDetectorRef },
		{ type: ElementRef },
		{ type: NgZone }
	], null);
})();
var IonCardContent = class IonCardContent {
	z;
	el;
	constructor(c, r, z) {
		this.z = z;
		c.detach();
		this.el = r.nativeElement;
	}
	/** @nocollapse */
	static ɵfac = function IonCardContent_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || IonCardContent)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
	};
	/** @nocollapse */
	static ɵcmp = /* @__PURE__ */ ɵɵdefineComponent({
		type: IonCardContent,
		selectors: [["ion-card-content"]],
		inputs: { mode: "mode" },
		standalone: false,
		ngContentSelectors: _c0$4,
		decls: 1,
		vars: 0,
		template: function IonCardContent_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵprojectionDef();
				ɵɵprojection(0);
			}
		},
		encapsulation: 2
	});
};
IonCardContent = __decorate([ProxyCmp({ inputs: ["mode"] })], IonCardContent);
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonCardContent, [{
		type: Component,
		args: [{
			selector: "ion-card-content",
			changeDetection: ChangeDetectionStrategy.OnPush,
			template: "<ng-content></ng-content>",
			inputs: ["mode"],
			standalone: false
		}]
	}], () => [
		{ type: ChangeDetectorRef },
		{ type: ElementRef },
		{ type: NgZone }
	], null);
})();
var IonCardHeader = class IonCardHeader {
	z;
	el;
	constructor(c, r, z) {
		this.z = z;
		c.detach();
		this.el = r.nativeElement;
	}
	/** @nocollapse */
	static ɵfac = function IonCardHeader_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || IonCardHeader)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
	};
	/** @nocollapse */
	static ɵcmp = /* @__PURE__ */ ɵɵdefineComponent({
		type: IonCardHeader,
		selectors: [["ion-card-header"]],
		inputs: {
			color: "color",
			mode: "mode",
			translucent: "translucent"
		},
		standalone: false,
		ngContentSelectors: _c0$4,
		decls: 1,
		vars: 0,
		template: function IonCardHeader_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵprojectionDef();
				ɵɵprojection(0);
			}
		},
		encapsulation: 2
	});
};
IonCardHeader = __decorate([ProxyCmp({ inputs: [
	"color",
	"mode",
	"translucent"
] })], IonCardHeader);
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonCardHeader, [{
		type: Component,
		args: [{
			selector: "ion-card-header",
			changeDetection: ChangeDetectionStrategy.OnPush,
			template: "<ng-content></ng-content>",
			inputs: [
				"color",
				"mode",
				"translucent"
			],
			standalone: false
		}]
	}], () => [
		{ type: ChangeDetectorRef },
		{ type: ElementRef },
		{ type: NgZone }
	], null);
})();
var IonCardSubtitle = class IonCardSubtitle {
	z;
	el;
	constructor(c, r, z) {
		this.z = z;
		c.detach();
		this.el = r.nativeElement;
	}
	/** @nocollapse */
	static ɵfac = function IonCardSubtitle_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || IonCardSubtitle)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
	};
	/** @nocollapse */
	static ɵcmp = /* @__PURE__ */ ɵɵdefineComponent({
		type: IonCardSubtitle,
		selectors: [["ion-card-subtitle"]],
		inputs: {
			color: "color",
			mode: "mode"
		},
		standalone: false,
		ngContentSelectors: _c0$4,
		decls: 1,
		vars: 0,
		template: function IonCardSubtitle_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵprojectionDef();
				ɵɵprojection(0);
			}
		},
		encapsulation: 2
	});
};
IonCardSubtitle = __decorate([ProxyCmp({ inputs: ["color", "mode"] })], IonCardSubtitle);
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonCardSubtitle, [{
		type: Component,
		args: [{
			selector: "ion-card-subtitle",
			changeDetection: ChangeDetectionStrategy.OnPush,
			template: "<ng-content></ng-content>",
			inputs: ["color", "mode"],
			standalone: false
		}]
	}], () => [
		{ type: ChangeDetectorRef },
		{ type: ElementRef },
		{ type: NgZone }
	], null);
})();
var IonCardTitle = class IonCardTitle {
	z;
	el;
	constructor(c, r, z) {
		this.z = z;
		c.detach();
		this.el = r.nativeElement;
	}
	/** @nocollapse */
	static ɵfac = function IonCardTitle_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || IonCardTitle)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
	};
	/** @nocollapse */
	static ɵcmp = /* @__PURE__ */ ɵɵdefineComponent({
		type: IonCardTitle,
		selectors: [["ion-card-title"]],
		inputs: {
			color: "color",
			mode: "mode"
		},
		standalone: false,
		ngContentSelectors: _c0$4,
		decls: 1,
		vars: 0,
		template: function IonCardTitle_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵprojectionDef();
				ɵɵprojection(0);
			}
		},
		encapsulation: 2
	});
};
IonCardTitle = __decorate([ProxyCmp({ inputs: ["color", "mode"] })], IonCardTitle);
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonCardTitle, [{
		type: Component,
		args: [{
			selector: "ion-card-title",
			changeDetection: ChangeDetectionStrategy.OnPush,
			template: "<ng-content></ng-content>",
			inputs: ["color", "mode"],
			standalone: false
		}]
	}], () => [
		{ type: ChangeDetectorRef },
		{ type: ElementRef },
		{ type: NgZone }
	], null);
})();
var IonCheckbox = class IonCheckbox {
	z;
	el;
	ionChange = new EventEmitter();
	ionFocus = new EventEmitter();
	ionBlur = new EventEmitter();
	constructor(c, r, z) {
		this.z = z;
		c.detach();
		this.el = r.nativeElement;
	}
	/** @nocollapse */
	static ɵfac = function IonCheckbox_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || IonCheckbox)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
	};
	/** @nocollapse */
	static ɵcmp = /* @__PURE__ */ ɵɵdefineComponent({
		type: IonCheckbox,
		selectors: [["ion-checkbox"]],
		inputs: {
			alignment: "alignment",
			checked: "checked",
			color: "color",
			disabled: "disabled",
			errorText: "errorText",
			helperText: "helperText",
			indeterminate: "indeterminate",
			justify: "justify",
			labelPlacement: "labelPlacement",
			mode: "mode",
			name: "name",
			required: "required",
			value: "value"
		},
		outputs: {
			ionChange: "ionChange",
			ionFocus: "ionFocus",
			ionBlur: "ionBlur"
		},
		standalone: false,
		ngContentSelectors: _c0$4,
		decls: 1,
		vars: 0,
		template: function IonCheckbox_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵprojectionDef();
				ɵɵprojection(0);
			}
		},
		encapsulation: 2
	});
};
IonCheckbox = __decorate([ProxyCmp({ inputs: [
	"alignment",
	"checked",
	"color",
	"disabled",
	"errorText",
	"helperText",
	"indeterminate",
	"justify",
	"labelPlacement",
	"mode",
	"name",
	"required",
	"value"
] })], IonCheckbox);
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonCheckbox, [{
		type: Component,
		args: [{
			selector: "ion-checkbox",
			changeDetection: ChangeDetectionStrategy.OnPush,
			template: "<ng-content></ng-content>",
			inputs: [
				"alignment",
				"checked",
				"color",
				"disabled",
				"errorText",
				"helperText",
				"indeterminate",
				"justify",
				"labelPlacement",
				"mode",
				"name",
				"required",
				"value"
			],
			outputs: [
				"ionChange",
				"ionFocus",
				"ionBlur"
			],
			standalone: false
		}]
	}], () => [
		{ type: ChangeDetectorRef },
		{ type: ElementRef },
		{ type: NgZone }
	], {
		ionChange: [{ type: Output }],
		ionFocus: [{ type: Output }],
		ionBlur: [{ type: Output }]
	});
})();
var IonChip = class IonChip {
	z;
	el;
	constructor(c, r, z) {
		this.z = z;
		c.detach();
		this.el = r.nativeElement;
	}
	/** @nocollapse */
	static ɵfac = function IonChip_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || IonChip)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
	};
	/** @nocollapse */
	static ɵcmp = /* @__PURE__ */ ɵɵdefineComponent({
		type: IonChip,
		selectors: [["ion-chip"]],
		inputs: {
			color: "color",
			disabled: "disabled",
			mode: "mode",
			outline: "outline"
		},
		standalone: false,
		ngContentSelectors: _c0$4,
		decls: 1,
		vars: 0,
		template: function IonChip_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵprojectionDef();
				ɵɵprojection(0);
			}
		},
		encapsulation: 2
	});
};
IonChip = __decorate([ProxyCmp({ inputs: [
	"color",
	"disabled",
	"mode",
	"outline"
] })], IonChip);
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonChip, [{
		type: Component,
		args: [{
			selector: "ion-chip",
			changeDetection: ChangeDetectionStrategy.OnPush,
			template: "<ng-content></ng-content>",
			inputs: [
				"color",
				"disabled",
				"mode",
				"outline"
			],
			standalone: false
		}]
	}], () => [
		{ type: ChangeDetectorRef },
		{ type: ElementRef },
		{ type: NgZone }
	], null);
})();
var IonCol = class IonCol {
	z;
	el;
	constructor(c, r, z) {
		this.z = z;
		c.detach();
		this.el = r.nativeElement;
	}
	/** @nocollapse */
	static ɵfac = function IonCol_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || IonCol)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
	};
	/** @nocollapse */
	static ɵcmp = /* @__PURE__ */ ɵɵdefineComponent({
		type: IonCol,
		selectors: [["ion-col"]],
		inputs: {
			offset: "offset",
			offsetLg: "offsetLg",
			offsetMd: "offsetMd",
			offsetSm: "offsetSm",
			offsetXl: "offsetXl",
			offsetXs: "offsetXs",
			pull: "pull",
			pullLg: "pullLg",
			pullMd: "pullMd",
			pullSm: "pullSm",
			pullXl: "pullXl",
			pullXs: "pullXs",
			push: "push",
			pushLg: "pushLg",
			pushMd: "pushMd",
			pushSm: "pushSm",
			pushXl: "pushXl",
			pushXs: "pushXs",
			size: "size",
			sizeLg: "sizeLg",
			sizeMd: "sizeMd",
			sizeSm: "sizeSm",
			sizeXl: "sizeXl",
			sizeXs: "sizeXs"
		},
		standalone: false,
		ngContentSelectors: _c0$4,
		decls: 1,
		vars: 0,
		template: function IonCol_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵprojectionDef();
				ɵɵprojection(0);
			}
		},
		encapsulation: 2
	});
};
IonCol = __decorate([ProxyCmp({ inputs: [
	"offset",
	"offsetLg",
	"offsetMd",
	"offsetSm",
	"offsetXl",
	"offsetXs",
	"pull",
	"pullLg",
	"pullMd",
	"pullSm",
	"pullXl",
	"pullXs",
	"push",
	"pushLg",
	"pushMd",
	"pushSm",
	"pushXl",
	"pushXs",
	"size",
	"sizeLg",
	"sizeMd",
	"sizeSm",
	"sizeXl",
	"sizeXs"
] })], IonCol);
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonCol, [{
		type: Component,
		args: [{
			selector: "ion-col",
			changeDetection: ChangeDetectionStrategy.OnPush,
			template: "<ng-content></ng-content>",
			inputs: [
				"offset",
				"offsetLg",
				"offsetMd",
				"offsetSm",
				"offsetXl",
				"offsetXs",
				"pull",
				"pullLg",
				"pullMd",
				"pullSm",
				"pullXl",
				"pullXs",
				"push",
				"pushLg",
				"pushMd",
				"pushSm",
				"pushXl",
				"pushXs",
				"size",
				"sizeLg",
				"sizeMd",
				"sizeSm",
				"sizeXl",
				"sizeXs"
			],
			standalone: false
		}]
	}], () => [
		{ type: ChangeDetectorRef },
		{ type: ElementRef },
		{ type: NgZone }
	], null);
})();
var IonContent = class IonContent {
	z;
	el;
	ionScrollStart = new EventEmitter();
	ionScroll = new EventEmitter();
	ionScrollEnd = new EventEmitter();
	constructor(c, r, z) {
		this.z = z;
		c.detach();
		this.el = r.nativeElement;
	}
	/** @nocollapse */
	static ɵfac = function IonContent_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || IonContent)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
	};
	/** @nocollapse */
	static ɵcmp = /* @__PURE__ */ ɵɵdefineComponent({
		type: IonContent,
		selectors: [["ion-content"]],
		inputs: {
			color: "color",
			fixedSlotPlacement: "fixedSlotPlacement",
			forceOverscroll: "forceOverscroll",
			fullscreen: "fullscreen",
			scrollEvents: "scrollEvents",
			scrollX: "scrollX",
			scrollY: "scrollY"
		},
		outputs: {
			ionScrollStart: "ionScrollStart",
			ionScroll: "ionScroll",
			ionScrollEnd: "ionScrollEnd"
		},
		standalone: false,
		ngContentSelectors: _c0$4,
		decls: 1,
		vars: 0,
		template: function IonContent_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵprojectionDef();
				ɵɵprojection(0);
			}
		},
		encapsulation: 2
	});
};
IonContent = __decorate([ProxyCmp({
	inputs: [
		"color",
		"fixedSlotPlacement",
		"forceOverscroll",
		"fullscreen",
		"scrollEvents",
		"scrollX",
		"scrollY"
	],
	methods: [
		"getScrollElement",
		"scrollToTop",
		"scrollToBottom",
		"scrollByPoint",
		"scrollToPoint"
	]
})], IonContent);
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonContent, [{
		type: Component,
		args: [{
			selector: "ion-content",
			changeDetection: ChangeDetectionStrategy.OnPush,
			template: "<ng-content></ng-content>",
			inputs: [
				"color",
				"fixedSlotPlacement",
				"forceOverscroll",
				"fullscreen",
				"scrollEvents",
				"scrollX",
				"scrollY"
			],
			outputs: [
				"ionScrollStart",
				"ionScroll",
				"ionScrollEnd"
			],
			standalone: false
		}]
	}], () => [
		{ type: ChangeDetectorRef },
		{ type: ElementRef },
		{ type: NgZone }
	], {
		ionScrollStart: [{ type: Output }],
		ionScroll: [{ type: Output }],
		ionScrollEnd: [{ type: Output }]
	});
})();
var IonDatetime = class IonDatetime {
	z;
	el;
	ionCancel = new EventEmitter();
	ionChange = new EventEmitter();
	ionFocus = new EventEmitter();
	ionBlur = new EventEmitter();
	constructor(c, r, z) {
		this.z = z;
		c.detach();
		this.el = r.nativeElement;
	}
	/** @nocollapse */
	static ɵfac = function IonDatetime_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || IonDatetime)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
	};
	/** @nocollapse */
	static ɵcmp = /* @__PURE__ */ ɵɵdefineComponent({
		type: IonDatetime,
		selectors: [["ion-datetime"]],
		inputs: {
			cancelText: "cancelText",
			clearText: "clearText",
			color: "color",
			dayValues: "dayValues",
			disabled: "disabled",
			doneText: "doneText",
			firstDayOfWeek: "firstDayOfWeek",
			formatOptions: "formatOptions",
			highlightedDates: "highlightedDates",
			hourCycle: "hourCycle",
			hourValues: "hourValues",
			isDateEnabled: "isDateEnabled",
			locale: "locale",
			max: "max",
			min: "min",
			minuteValues: "minuteValues",
			mode: "mode",
			monthValues: "monthValues",
			multiple: "multiple",
			name: "name",
			preferWheel: "preferWheel",
			presentation: "presentation",
			readonly: "readonly",
			showAdjacentDays: "showAdjacentDays",
			showClearButton: "showClearButton",
			showDefaultButtons: "showDefaultButtons",
			showDefaultTimeLabel: "showDefaultTimeLabel",
			showDefaultTitle: "showDefaultTitle",
			size: "size",
			titleSelectedDatesFormatter: "titleSelectedDatesFormatter",
			value: "value",
			yearValues: "yearValues"
		},
		outputs: {
			ionCancel: "ionCancel",
			ionChange: "ionChange",
			ionFocus: "ionFocus",
			ionBlur: "ionBlur"
		},
		standalone: false,
		ngContentSelectors: _c0$4,
		decls: 1,
		vars: 0,
		template: function IonDatetime_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵprojectionDef();
				ɵɵprojection(0);
			}
		},
		encapsulation: 2
	});
};
IonDatetime = __decorate([ProxyCmp({
	inputs: [
		"cancelText",
		"clearText",
		"color",
		"dayValues",
		"disabled",
		"doneText",
		"firstDayOfWeek",
		"formatOptions",
		"highlightedDates",
		"hourCycle",
		"hourValues",
		"isDateEnabled",
		"locale",
		"max",
		"min",
		"minuteValues",
		"mode",
		"monthValues",
		"multiple",
		"name",
		"preferWheel",
		"presentation",
		"readonly",
		"showAdjacentDays",
		"showClearButton",
		"showDefaultButtons",
		"showDefaultTimeLabel",
		"showDefaultTitle",
		"size",
		"titleSelectedDatesFormatter",
		"value",
		"yearValues"
	],
	methods: [
		"confirm",
		"reset",
		"cancel"
	]
})], IonDatetime);
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonDatetime, [{
		type: Component,
		args: [{
			selector: "ion-datetime",
			changeDetection: ChangeDetectionStrategy.OnPush,
			template: "<ng-content></ng-content>",
			inputs: [
				"cancelText",
				"clearText",
				"color",
				"dayValues",
				"disabled",
				"doneText",
				"firstDayOfWeek",
				"formatOptions",
				"highlightedDates",
				"hourCycle",
				"hourValues",
				"isDateEnabled",
				"locale",
				"max",
				"min",
				"minuteValues",
				"mode",
				"monthValues",
				"multiple",
				"name",
				"preferWheel",
				"presentation",
				"readonly",
				"showAdjacentDays",
				"showClearButton",
				"showDefaultButtons",
				"showDefaultTimeLabel",
				"showDefaultTitle",
				"size",
				"titleSelectedDatesFormatter",
				"value",
				"yearValues"
			],
			outputs: [
				"ionCancel",
				"ionChange",
				"ionFocus",
				"ionBlur"
			],
			standalone: false
		}]
	}], () => [
		{ type: ChangeDetectorRef },
		{ type: ElementRef },
		{ type: NgZone }
	], {
		ionCancel: [{ type: Output }],
		ionChange: [{ type: Output }],
		ionFocus: [{ type: Output }],
		ionBlur: [{ type: Output }]
	});
})();
var IonDatetimeButton = class IonDatetimeButton {
	z;
	el;
	constructor(c, r, z) {
		this.z = z;
		c.detach();
		this.el = r.nativeElement;
	}
	/** @nocollapse */
	static ɵfac = function IonDatetimeButton_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || IonDatetimeButton)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
	};
	/** @nocollapse */
	static ɵcmp = /* @__PURE__ */ ɵɵdefineComponent({
		type: IonDatetimeButton,
		selectors: [["ion-datetime-button"]],
		inputs: {
			color: "color",
			datetime: "datetime",
			disabled: "disabled",
			mode: "mode"
		},
		standalone: false,
		ngContentSelectors: _c0$4,
		decls: 1,
		vars: 0,
		template: function IonDatetimeButton_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵprojectionDef();
				ɵɵprojection(0);
			}
		},
		encapsulation: 2
	});
};
IonDatetimeButton = __decorate([ProxyCmp({ inputs: [
	"color",
	"datetime",
	"disabled",
	"mode"
] })], IonDatetimeButton);
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonDatetimeButton, [{
		type: Component,
		args: [{
			selector: "ion-datetime-button",
			changeDetection: ChangeDetectionStrategy.OnPush,
			template: "<ng-content></ng-content>",
			inputs: [
				"color",
				"datetime",
				"disabled",
				"mode"
			],
			standalone: false
		}]
	}], () => [
		{ type: ChangeDetectorRef },
		{ type: ElementRef },
		{ type: NgZone }
	], null);
})();
var IonFab = class IonFab {
	z;
	el;
	constructor(c, r, z) {
		this.z = z;
		c.detach();
		this.el = r.nativeElement;
	}
	/** @nocollapse */
	static ɵfac = function IonFab_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || IonFab)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
	};
	/** @nocollapse */
	static ɵcmp = /* @__PURE__ */ ɵɵdefineComponent({
		type: IonFab,
		selectors: [["ion-fab"]],
		inputs: {
			activated: "activated",
			edge: "edge",
			horizontal: "horizontal",
			vertical: "vertical"
		},
		standalone: false,
		ngContentSelectors: _c0$4,
		decls: 1,
		vars: 0,
		template: function IonFab_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵprojectionDef();
				ɵɵprojection(0);
			}
		},
		encapsulation: 2
	});
};
IonFab = __decorate([ProxyCmp({
	inputs: [
		"activated",
		"edge",
		"horizontal",
		"vertical"
	],
	methods: ["close"]
})], IonFab);
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonFab, [{
		type: Component,
		args: [{
			selector: "ion-fab",
			changeDetection: ChangeDetectionStrategy.OnPush,
			template: "<ng-content></ng-content>",
			inputs: [
				"activated",
				"edge",
				"horizontal",
				"vertical"
			],
			standalone: false
		}]
	}], () => [
		{ type: ChangeDetectorRef },
		{ type: ElementRef },
		{ type: NgZone }
	], null);
})();
var IonFabButton = class IonFabButton {
	z;
	el;
	ionFocus = new EventEmitter();
	ionBlur = new EventEmitter();
	constructor(c, r, z) {
		this.z = z;
		c.detach();
		this.el = r.nativeElement;
	}
	/** @nocollapse */
	static ɵfac = function IonFabButton_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || IonFabButton)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
	};
	/** @nocollapse */
	static ɵcmp = /* @__PURE__ */ ɵɵdefineComponent({
		type: IonFabButton,
		selectors: [["ion-fab-button"]],
		inputs: {
			activated: "activated",
			closeIcon: "closeIcon",
			color: "color",
			disabled: "disabled",
			download: "download",
			form: "form",
			href: "href",
			mode: "mode",
			rel: "rel",
			routerAnimation: "routerAnimation",
			routerDirection: "routerDirection",
			show: "show",
			size: "size",
			target: "target",
			translucent: "translucent",
			type: "type"
		},
		outputs: {
			ionFocus: "ionFocus",
			ionBlur: "ionBlur"
		},
		standalone: false,
		ngContentSelectors: _c0$4,
		decls: 1,
		vars: 0,
		template: function IonFabButton_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵprojectionDef();
				ɵɵprojection(0);
			}
		},
		encapsulation: 2
	});
};
IonFabButton = __decorate([ProxyCmp({ inputs: [
	"activated",
	"closeIcon",
	"color",
	"disabled",
	"download",
	"form",
	"href",
	"mode",
	"rel",
	"routerAnimation",
	"routerDirection",
	"show",
	"size",
	"target",
	"translucent",
	"type"
] })], IonFabButton);
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonFabButton, [{
		type: Component,
		args: [{
			selector: "ion-fab-button",
			changeDetection: ChangeDetectionStrategy.OnPush,
			template: "<ng-content></ng-content>",
			inputs: [
				"activated",
				"closeIcon",
				"color",
				"disabled",
				"download",
				"form",
				"href",
				"mode",
				"rel",
				"routerAnimation",
				"routerDirection",
				"show",
				"size",
				"target",
				"translucent",
				"type"
			],
			outputs: ["ionFocus", "ionBlur"],
			standalone: false
		}]
	}], () => [
		{ type: ChangeDetectorRef },
		{ type: ElementRef },
		{ type: NgZone }
	], {
		ionFocus: [{ type: Output }],
		ionBlur: [{ type: Output }]
	});
})();
var IonFabList = class IonFabList {
	z;
	el;
	constructor(c, r, z) {
		this.z = z;
		c.detach();
		this.el = r.nativeElement;
	}
	/** @nocollapse */
	static ɵfac = function IonFabList_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || IonFabList)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
	};
	/** @nocollapse */
	static ɵcmp = /* @__PURE__ */ ɵɵdefineComponent({
		type: IonFabList,
		selectors: [["ion-fab-list"]],
		inputs: {
			activated: "activated",
			side: "side"
		},
		standalone: false,
		ngContentSelectors: _c0$4,
		decls: 1,
		vars: 0,
		template: function IonFabList_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵprojectionDef();
				ɵɵprojection(0);
			}
		},
		encapsulation: 2
	});
};
IonFabList = __decorate([ProxyCmp({ inputs: ["activated", "side"] })], IonFabList);
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonFabList, [{
		type: Component,
		args: [{
			selector: "ion-fab-list",
			changeDetection: ChangeDetectionStrategy.OnPush,
			template: "<ng-content></ng-content>",
			inputs: ["activated", "side"],
			standalone: false
		}]
	}], () => [
		{ type: ChangeDetectorRef },
		{ type: ElementRef },
		{ type: NgZone }
	], null);
})();
var IonFooter = class IonFooter {
	z;
	el;
	constructor(c, r, z) {
		this.z = z;
		c.detach();
		this.el = r.nativeElement;
	}
	/** @nocollapse */
	static ɵfac = function IonFooter_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || IonFooter)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
	};
	/** @nocollapse */
	static ɵcmp = /* @__PURE__ */ ɵɵdefineComponent({
		type: IonFooter,
		selectors: [["ion-footer"]],
		inputs: {
			collapse: "collapse",
			mode: "mode",
			translucent: "translucent"
		},
		standalone: false,
		ngContentSelectors: _c0$4,
		decls: 1,
		vars: 0,
		template: function IonFooter_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵprojectionDef();
				ɵɵprojection(0);
			}
		},
		encapsulation: 2
	});
};
IonFooter = __decorate([ProxyCmp({ inputs: [
	"collapse",
	"mode",
	"translucent"
] })], IonFooter);
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonFooter, [{
		type: Component,
		args: [{
			selector: "ion-footer",
			changeDetection: ChangeDetectionStrategy.OnPush,
			template: "<ng-content></ng-content>",
			inputs: [
				"collapse",
				"mode",
				"translucent"
			],
			standalone: false
		}]
	}], () => [
		{ type: ChangeDetectorRef },
		{ type: ElementRef },
		{ type: NgZone }
	], null);
})();
var IonGrid = class IonGrid {
	z;
	el;
	constructor(c, r, z) {
		this.z = z;
		c.detach();
		this.el = r.nativeElement;
	}
	/** @nocollapse */
	static ɵfac = function IonGrid_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || IonGrid)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
	};
	/** @nocollapse */
	static ɵcmp = /* @__PURE__ */ ɵɵdefineComponent({
		type: IonGrid,
		selectors: [["ion-grid"]],
		inputs: { fixed: "fixed" },
		standalone: false,
		ngContentSelectors: _c0$4,
		decls: 1,
		vars: 0,
		template: function IonGrid_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵprojectionDef();
				ɵɵprojection(0);
			}
		},
		encapsulation: 2
	});
};
IonGrid = __decorate([ProxyCmp({ inputs: ["fixed"] })], IonGrid);
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonGrid, [{
		type: Component,
		args: [{
			selector: "ion-grid",
			changeDetection: ChangeDetectionStrategy.OnPush,
			template: "<ng-content></ng-content>",
			inputs: ["fixed"],
			standalone: false
		}]
	}], () => [
		{ type: ChangeDetectorRef },
		{ type: ElementRef },
		{ type: NgZone }
	], null);
})();
var IonHeader = class IonHeader {
	z;
	el;
	constructor(c, r, z) {
		this.z = z;
		c.detach();
		this.el = r.nativeElement;
	}
	/** @nocollapse */
	static ɵfac = function IonHeader_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || IonHeader)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
	};
	/** @nocollapse */
	static ɵcmp = /* @__PURE__ */ ɵɵdefineComponent({
		type: IonHeader,
		selectors: [["ion-header"]],
		inputs: {
			collapse: "collapse",
			mode: "mode",
			translucent: "translucent"
		},
		standalone: false,
		ngContentSelectors: _c0$4,
		decls: 1,
		vars: 0,
		template: function IonHeader_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵprojectionDef();
				ɵɵprojection(0);
			}
		},
		encapsulation: 2
	});
};
IonHeader = __decorate([ProxyCmp({ inputs: [
	"collapse",
	"mode",
	"translucent"
] })], IonHeader);
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonHeader, [{
		type: Component,
		args: [{
			selector: "ion-header",
			changeDetection: ChangeDetectionStrategy.OnPush,
			template: "<ng-content></ng-content>",
			inputs: [
				"collapse",
				"mode",
				"translucent"
			],
			standalone: false
		}]
	}], () => [
		{ type: ChangeDetectorRef },
		{ type: ElementRef },
		{ type: NgZone }
	], null);
})();
var IonIcon = class IonIcon {
	z;
	el;
	constructor(c, r, z) {
		this.z = z;
		c.detach();
		this.el = r.nativeElement;
	}
	/** @nocollapse */
	static ɵfac = function IonIcon_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || IonIcon)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
	};
	/** @nocollapse */
	static ɵcmp = /* @__PURE__ */ ɵɵdefineComponent({
		type: IonIcon,
		selectors: [["ion-icon"]],
		inputs: {
			color: "color",
			flipRtl: "flipRtl",
			icon: "icon",
			ios: "ios",
			lazy: "lazy",
			md: "md",
			mode: "mode",
			name: "name",
			sanitize: "sanitize",
			size: "size",
			src: "src"
		},
		standalone: false,
		ngContentSelectors: _c0$4,
		decls: 1,
		vars: 0,
		template: function IonIcon_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵprojectionDef();
				ɵɵprojection(0);
			}
		},
		encapsulation: 2
	});
};
IonIcon = __decorate([ProxyCmp({ inputs: [
	"color",
	"flipRtl",
	"icon",
	"ios",
	"lazy",
	"md",
	"mode",
	"name",
	"sanitize",
	"size",
	"src"
] })], IonIcon);
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonIcon, [{
		type: Component,
		args: [{
			selector: "ion-icon",
			changeDetection: ChangeDetectionStrategy.OnPush,
			template: "<ng-content></ng-content>",
			inputs: [
				"color",
				"flipRtl",
				"icon",
				"ios",
				"lazy",
				"md",
				"mode",
				"name",
				"sanitize",
				"size",
				"src"
			],
			standalone: false
		}]
	}], () => [
		{ type: ChangeDetectorRef },
		{ type: ElementRef },
		{ type: NgZone }
	], null);
})();
var IonImg = class IonImg {
	z;
	el;
	ionImgWillLoad = new EventEmitter();
	ionImgDidLoad = new EventEmitter();
	ionError = new EventEmitter();
	constructor(c, r, z) {
		this.z = z;
		c.detach();
		this.el = r.nativeElement;
	}
	/** @nocollapse */
	static ɵfac = function IonImg_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || IonImg)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
	};
	/** @nocollapse */
	static ɵcmp = /* @__PURE__ */ ɵɵdefineComponent({
		type: IonImg,
		selectors: [["ion-img"]],
		inputs: {
			alt: "alt",
			src: "src"
		},
		outputs: {
			ionImgWillLoad: "ionImgWillLoad",
			ionImgDidLoad: "ionImgDidLoad",
			ionError: "ionError"
		},
		standalone: false,
		ngContentSelectors: _c0$4,
		decls: 1,
		vars: 0,
		template: function IonImg_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵprojectionDef();
				ɵɵprojection(0);
			}
		},
		encapsulation: 2
	});
};
IonImg = __decorate([ProxyCmp({ inputs: ["alt", "src"] })], IonImg);
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonImg, [{
		type: Component,
		args: [{
			selector: "ion-img",
			changeDetection: ChangeDetectionStrategy.OnPush,
			template: "<ng-content></ng-content>",
			inputs: ["alt", "src"],
			outputs: [
				"ionImgWillLoad",
				"ionImgDidLoad",
				"ionError"
			],
			standalone: false
		}]
	}], () => [
		{ type: ChangeDetectorRef },
		{ type: ElementRef },
		{ type: NgZone }
	], {
		ionImgWillLoad: [{ type: Output }],
		ionImgDidLoad: [{ type: Output }],
		ionError: [{ type: Output }]
	});
})();
var IonInfiniteScroll = class IonInfiniteScroll {
	z;
	el;
	ionInfinite = new EventEmitter();
	constructor(c, r, z) {
		this.z = z;
		c.detach();
		this.el = r.nativeElement;
	}
	/** @nocollapse */
	static ɵfac = function IonInfiniteScroll_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || IonInfiniteScroll)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
	};
	/** @nocollapse */
	static ɵcmp = /* @__PURE__ */ ɵɵdefineComponent({
		type: IonInfiniteScroll,
		selectors: [["ion-infinite-scroll"]],
		inputs: {
			disabled: "disabled",
			position: "position",
			threshold: "threshold"
		},
		outputs: { ionInfinite: "ionInfinite" },
		standalone: false,
		ngContentSelectors: _c0$4,
		decls: 1,
		vars: 0,
		template: function IonInfiniteScroll_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵprojectionDef();
				ɵɵprojection(0);
			}
		},
		encapsulation: 2
	});
};
IonInfiniteScroll = __decorate([ProxyCmp({
	inputs: [
		"disabled",
		"position",
		"threshold"
	],
	methods: ["complete"]
})], IonInfiniteScroll);
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonInfiniteScroll, [{
		type: Component,
		args: [{
			selector: "ion-infinite-scroll",
			changeDetection: ChangeDetectionStrategy.OnPush,
			template: "<ng-content></ng-content>",
			inputs: [
				"disabled",
				"position",
				"threshold"
			],
			outputs: ["ionInfinite"],
			standalone: false
		}]
	}], () => [
		{ type: ChangeDetectorRef },
		{ type: ElementRef },
		{ type: NgZone }
	], { ionInfinite: [{ type: Output }] });
})();
var IonInfiniteScrollContent = class IonInfiniteScrollContent {
	z;
	el;
	constructor(c, r, z) {
		this.z = z;
		c.detach();
		this.el = r.nativeElement;
	}
	/** @nocollapse */
	static ɵfac = function IonInfiniteScrollContent_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || IonInfiniteScrollContent)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
	};
	/** @nocollapse */
	static ɵcmp = /* @__PURE__ */ ɵɵdefineComponent({
		type: IonInfiniteScrollContent,
		selectors: [["ion-infinite-scroll-content"]],
		inputs: {
			loadingSpinner: "loadingSpinner",
			loadingText: "loadingText"
		},
		standalone: false,
		ngContentSelectors: _c0$4,
		decls: 1,
		vars: 0,
		template: function IonInfiniteScrollContent_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵprojectionDef();
				ɵɵprojection(0);
			}
		},
		encapsulation: 2
	});
};
IonInfiniteScrollContent = __decorate([ProxyCmp({ inputs: ["loadingSpinner", "loadingText"] })], IonInfiniteScrollContent);
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonInfiniteScrollContent, [{
		type: Component,
		args: [{
			selector: "ion-infinite-scroll-content",
			changeDetection: ChangeDetectionStrategy.OnPush,
			template: "<ng-content></ng-content>",
			inputs: ["loadingSpinner", "loadingText"],
			standalone: false
		}]
	}], () => [
		{ type: ChangeDetectorRef },
		{ type: ElementRef },
		{ type: NgZone }
	], null);
})();
var IonInput = class IonInput {
	z;
	el;
	ionInput = new EventEmitter();
	ionChange = new EventEmitter();
	ionBlur = new EventEmitter();
	ionFocus = new EventEmitter();
	constructor(c, r, z) {
		this.z = z;
		c.detach();
		this.el = r.nativeElement;
	}
	/** @nocollapse */
	static ɵfac = function IonInput_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || IonInput)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
	};
	/** @nocollapse */
	static ɵcmp = /* @__PURE__ */ ɵɵdefineComponent({
		type: IonInput,
		selectors: [["ion-input"]],
		inputs: {
			autocapitalize: "autocapitalize",
			autocomplete: "autocomplete",
			autocorrect: "autocorrect",
			autofocus: "autofocus",
			clearInput: "clearInput",
			clearInputIcon: "clearInputIcon",
			clearOnEdit: "clearOnEdit",
			color: "color",
			counter: "counter",
			counterFormatter: "counterFormatter",
			debounce: "debounce",
			disabled: "disabled",
			enterkeyhint: "enterkeyhint",
			errorText: "errorText",
			fill: "fill",
			helperText: "helperText",
			inputmode: "inputmode",
			label: "label",
			labelPlacement: "labelPlacement",
			max: "max",
			maxlength: "maxlength",
			min: "min",
			minlength: "minlength",
			mode: "mode",
			multiple: "multiple",
			name: "name",
			pattern: "pattern",
			placeholder: "placeholder",
			readonly: "readonly",
			required: "required",
			shape: "shape",
			spellcheck: "spellcheck",
			step: "step",
			type: "type",
			value: "value"
		},
		outputs: {
			ionInput: "ionInput",
			ionChange: "ionChange",
			ionBlur: "ionBlur",
			ionFocus: "ionFocus"
		},
		standalone: false,
		ngContentSelectors: _c0$4,
		decls: 1,
		vars: 0,
		template: function IonInput_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵprojectionDef();
				ɵɵprojection(0);
			}
		},
		encapsulation: 2
	});
};
IonInput = __decorate([ProxyCmp({
	inputs: [
		"autocapitalize",
		"autocomplete",
		"autocorrect",
		"autofocus",
		"clearInput",
		"clearInputIcon",
		"clearOnEdit",
		"color",
		"counter",
		"counterFormatter",
		"debounce",
		"disabled",
		"enterkeyhint",
		"errorText",
		"fill",
		"helperText",
		"inputmode",
		"label",
		"labelPlacement",
		"max",
		"maxlength",
		"min",
		"minlength",
		"mode",
		"multiple",
		"name",
		"pattern",
		"placeholder",
		"readonly",
		"required",
		"shape",
		"spellcheck",
		"step",
		"type",
		"value"
	],
	methods: ["setFocus", "getInputElement"]
})], IonInput);
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonInput, [{
		type: Component,
		args: [{
			selector: "ion-input",
			changeDetection: ChangeDetectionStrategy.OnPush,
			template: "<ng-content></ng-content>",
			inputs: [
				"autocapitalize",
				"autocomplete",
				"autocorrect",
				"autofocus",
				"clearInput",
				"clearInputIcon",
				"clearOnEdit",
				"color",
				"counter",
				"counterFormatter",
				"debounce",
				"disabled",
				"enterkeyhint",
				"errorText",
				"fill",
				"helperText",
				"inputmode",
				"label",
				"labelPlacement",
				"max",
				"maxlength",
				"min",
				"minlength",
				"mode",
				"multiple",
				"name",
				"pattern",
				"placeholder",
				"readonly",
				"required",
				"shape",
				"spellcheck",
				"step",
				"type",
				"value"
			],
			outputs: [
				"ionInput",
				"ionChange",
				"ionBlur",
				"ionFocus"
			],
			standalone: false
		}]
	}], () => [
		{ type: ChangeDetectorRef },
		{ type: ElementRef },
		{ type: NgZone }
	], {
		ionInput: [{ type: Output }],
		ionChange: [{ type: Output }],
		ionBlur: [{ type: Output }],
		ionFocus: [{ type: Output }]
	});
})();
var IonInputOtp = class IonInputOtp {
	z;
	el;
	ionInput = new EventEmitter();
	ionChange = new EventEmitter();
	ionComplete = new EventEmitter();
	ionBlur = new EventEmitter();
	ionFocus = new EventEmitter();
	constructor(c, r, z) {
		this.z = z;
		c.detach();
		this.el = r.nativeElement;
	}
	/** @nocollapse */
	static ɵfac = function IonInputOtp_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || IonInputOtp)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
	};
	/** @nocollapse */
	static ɵcmp = /* @__PURE__ */ ɵɵdefineComponent({
		type: IonInputOtp,
		selectors: [["ion-input-otp"]],
		inputs: {
			autocapitalize: "autocapitalize",
			color: "color",
			disabled: "disabled",
			fill: "fill",
			inputmode: "inputmode",
			length: "length",
			pattern: "pattern",
			readonly: "readonly",
			separators: "separators",
			shape: "shape",
			size: "size",
			type: "type",
			value: "value"
		},
		outputs: {
			ionInput: "ionInput",
			ionChange: "ionChange",
			ionComplete: "ionComplete",
			ionBlur: "ionBlur",
			ionFocus: "ionFocus"
		},
		standalone: false,
		ngContentSelectors: _c0$4,
		decls: 1,
		vars: 0,
		template: function IonInputOtp_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵprojectionDef();
				ɵɵprojection(0);
			}
		},
		encapsulation: 2
	});
};
IonInputOtp = __decorate([ProxyCmp({
	inputs: [
		"autocapitalize",
		"color",
		"disabled",
		"fill",
		"inputmode",
		"length",
		"pattern",
		"readonly",
		"separators",
		"shape",
		"size",
		"type",
		"value"
	],
	methods: ["setFocus"]
})], IonInputOtp);
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonInputOtp, [{
		type: Component,
		args: [{
			selector: "ion-input-otp",
			changeDetection: ChangeDetectionStrategy.OnPush,
			template: "<ng-content></ng-content>",
			inputs: [
				"autocapitalize",
				"color",
				"disabled",
				"fill",
				"inputmode",
				"length",
				"pattern",
				"readonly",
				"separators",
				"shape",
				"size",
				"type",
				"value"
			],
			outputs: [
				"ionInput",
				"ionChange",
				"ionComplete",
				"ionBlur",
				"ionFocus"
			],
			standalone: false
		}]
	}], () => [
		{ type: ChangeDetectorRef },
		{ type: ElementRef },
		{ type: NgZone }
	], {
		ionInput: [{ type: Output }],
		ionChange: [{ type: Output }],
		ionComplete: [{ type: Output }],
		ionBlur: [{ type: Output }],
		ionFocus: [{ type: Output }]
	});
})();
var IonInputPasswordToggle = class IonInputPasswordToggle {
	z;
	el;
	constructor(c, r, z) {
		this.z = z;
		c.detach();
		this.el = r.nativeElement;
	}
	/** @nocollapse */
	static ɵfac = function IonInputPasswordToggle_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || IonInputPasswordToggle)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
	};
	/** @nocollapse */
	static ɵcmp = /* @__PURE__ */ ɵɵdefineComponent({
		type: IonInputPasswordToggle,
		selectors: [["ion-input-password-toggle"]],
		inputs: {
			color: "color",
			hideIcon: "hideIcon",
			mode: "mode",
			showIcon: "showIcon"
		},
		standalone: false,
		ngContentSelectors: _c0$4,
		decls: 1,
		vars: 0,
		template: function IonInputPasswordToggle_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵprojectionDef();
				ɵɵprojection(0);
			}
		},
		encapsulation: 2
	});
};
IonInputPasswordToggle = __decorate([ProxyCmp({ inputs: [
	"color",
	"hideIcon",
	"mode",
	"showIcon"
] })], IonInputPasswordToggle);
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonInputPasswordToggle, [{
		type: Component,
		args: [{
			selector: "ion-input-password-toggle",
			changeDetection: ChangeDetectionStrategy.OnPush,
			template: "<ng-content></ng-content>",
			inputs: [
				"color",
				"hideIcon",
				"mode",
				"showIcon"
			],
			standalone: false
		}]
	}], () => [
		{ type: ChangeDetectorRef },
		{ type: ElementRef },
		{ type: NgZone }
	], null);
})();
var IonItem = class IonItem {
	z;
	el;
	constructor(c, r, z) {
		this.z = z;
		c.detach();
		this.el = r.nativeElement;
	}
	/** @nocollapse */
	static ɵfac = function IonItem_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || IonItem)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
	};
	/** @nocollapse */
	static ɵcmp = /* @__PURE__ */ ɵɵdefineComponent({
		type: IonItem,
		selectors: [["ion-item"]],
		inputs: {
			button: "button",
			color: "color",
			detail: "detail",
			detailIcon: "detailIcon",
			disabled: "disabled",
			download: "download",
			href: "href",
			lines: "lines",
			mode: "mode",
			rel: "rel",
			routerAnimation: "routerAnimation",
			routerDirection: "routerDirection",
			target: "target",
			type: "type"
		},
		standalone: false,
		ngContentSelectors: _c0$4,
		decls: 1,
		vars: 0,
		template: function IonItem_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵprojectionDef();
				ɵɵprojection(0);
			}
		},
		encapsulation: 2
	});
};
IonItem = __decorate([ProxyCmp({ inputs: [
	"button",
	"color",
	"detail",
	"detailIcon",
	"disabled",
	"download",
	"href",
	"lines",
	"mode",
	"rel",
	"routerAnimation",
	"routerDirection",
	"target",
	"type"
] })], IonItem);
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonItem, [{
		type: Component,
		args: [{
			selector: "ion-item",
			changeDetection: ChangeDetectionStrategy.OnPush,
			template: "<ng-content></ng-content>",
			inputs: [
				"button",
				"color",
				"detail",
				"detailIcon",
				"disabled",
				"download",
				"href",
				"lines",
				"mode",
				"rel",
				"routerAnimation",
				"routerDirection",
				"target",
				"type"
			],
			standalone: false
		}]
	}], () => [
		{ type: ChangeDetectorRef },
		{ type: ElementRef },
		{ type: NgZone }
	], null);
})();
var IonItemDivider = class IonItemDivider {
	z;
	el;
	constructor(c, r, z) {
		this.z = z;
		c.detach();
		this.el = r.nativeElement;
	}
	/** @nocollapse */
	static ɵfac = function IonItemDivider_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || IonItemDivider)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
	};
	/** @nocollapse */
	static ɵcmp = /* @__PURE__ */ ɵɵdefineComponent({
		type: IonItemDivider,
		selectors: [["ion-item-divider"]],
		inputs: {
			color: "color",
			mode: "mode",
			sticky: "sticky"
		},
		standalone: false,
		ngContentSelectors: _c0$4,
		decls: 1,
		vars: 0,
		template: function IonItemDivider_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵprojectionDef();
				ɵɵprojection(0);
			}
		},
		encapsulation: 2
	});
};
IonItemDivider = __decorate([ProxyCmp({ inputs: [
	"color",
	"mode",
	"sticky"
] })], IonItemDivider);
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonItemDivider, [{
		type: Component,
		args: [{
			selector: "ion-item-divider",
			changeDetection: ChangeDetectionStrategy.OnPush,
			template: "<ng-content></ng-content>",
			inputs: [
				"color",
				"mode",
				"sticky"
			],
			standalone: false
		}]
	}], () => [
		{ type: ChangeDetectorRef },
		{ type: ElementRef },
		{ type: NgZone }
	], null);
})();
var IonItemGroup = class IonItemGroup {
	z;
	el;
	constructor(c, r, z) {
		this.z = z;
		c.detach();
		this.el = r.nativeElement;
	}
	/** @nocollapse */
	static ɵfac = function IonItemGroup_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || IonItemGroup)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
	};
	/** @nocollapse */
	static ɵcmp = /* @__PURE__ */ ɵɵdefineComponent({
		type: IonItemGroup,
		selectors: [["ion-item-group"]],
		standalone: false,
		ngContentSelectors: _c0$4,
		decls: 1,
		vars: 0,
		template: function IonItemGroup_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵprojectionDef();
				ɵɵprojection(0);
			}
		},
		encapsulation: 2
	});
};
IonItemGroup = __decorate([ProxyCmp({})], IonItemGroup);
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonItemGroup, [{
		type: Component,
		args: [{
			selector: "ion-item-group",
			changeDetection: ChangeDetectionStrategy.OnPush,
			template: "<ng-content></ng-content>",
			inputs: [],
			standalone: false
		}]
	}], () => [
		{ type: ChangeDetectorRef },
		{ type: ElementRef },
		{ type: NgZone }
	], null);
})();
var IonItemOption = class IonItemOption {
	z;
	el;
	constructor(c, r, z) {
		this.z = z;
		c.detach();
		this.el = r.nativeElement;
	}
	/** @nocollapse */
	static ɵfac = function IonItemOption_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || IonItemOption)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
	};
	/** @nocollapse */
	static ɵcmp = /* @__PURE__ */ ɵɵdefineComponent({
		type: IonItemOption,
		selectors: [["ion-item-option"]],
		inputs: {
			color: "color",
			disabled: "disabled",
			download: "download",
			expandable: "expandable",
			href: "href",
			mode: "mode",
			rel: "rel",
			target: "target",
			type: "type"
		},
		standalone: false,
		ngContentSelectors: _c0$4,
		decls: 1,
		vars: 0,
		template: function IonItemOption_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵprojectionDef();
				ɵɵprojection(0);
			}
		},
		encapsulation: 2
	});
};
IonItemOption = __decorate([ProxyCmp({ inputs: [
	"color",
	"disabled",
	"download",
	"expandable",
	"href",
	"mode",
	"rel",
	"target",
	"type"
] })], IonItemOption);
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonItemOption, [{
		type: Component,
		args: [{
			selector: "ion-item-option",
			changeDetection: ChangeDetectionStrategy.OnPush,
			template: "<ng-content></ng-content>",
			inputs: [
				"color",
				"disabled",
				"download",
				"expandable",
				"href",
				"mode",
				"rel",
				"target",
				"type"
			],
			standalone: false
		}]
	}], () => [
		{ type: ChangeDetectorRef },
		{ type: ElementRef },
		{ type: NgZone }
	], null);
})();
var IonItemOptions = class IonItemOptions {
	z;
	el;
	ionSwipe = new EventEmitter();
	constructor(c, r, z) {
		this.z = z;
		c.detach();
		this.el = r.nativeElement;
	}
	/** @nocollapse */
	static ɵfac = function IonItemOptions_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || IonItemOptions)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
	};
	/** @nocollapse */
	static ɵcmp = /* @__PURE__ */ ɵɵdefineComponent({
		type: IonItemOptions,
		selectors: [["ion-item-options"]],
		inputs: { side: "side" },
		outputs: { ionSwipe: "ionSwipe" },
		standalone: false,
		ngContentSelectors: _c0$4,
		decls: 1,
		vars: 0,
		template: function IonItemOptions_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵprojectionDef();
				ɵɵprojection(0);
			}
		},
		encapsulation: 2
	});
};
IonItemOptions = __decorate([ProxyCmp({ inputs: ["side"] })], IonItemOptions);
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonItemOptions, [{
		type: Component,
		args: [{
			selector: "ion-item-options",
			changeDetection: ChangeDetectionStrategy.OnPush,
			template: "<ng-content></ng-content>",
			inputs: ["side"],
			outputs: ["ionSwipe"],
			standalone: false
		}]
	}], () => [
		{ type: ChangeDetectorRef },
		{ type: ElementRef },
		{ type: NgZone }
	], { ionSwipe: [{ type: Output }] });
})();
var IonItemSliding = class IonItemSliding {
	z;
	el;
	ionDrag = new EventEmitter();
	constructor(c, r, z) {
		this.z = z;
		c.detach();
		this.el = r.nativeElement;
	}
	/** @nocollapse */
	static ɵfac = function IonItemSliding_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || IonItemSliding)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
	};
	/** @nocollapse */
	static ɵcmp = /* @__PURE__ */ ɵɵdefineComponent({
		type: IonItemSliding,
		selectors: [["ion-item-sliding"]],
		inputs: { disabled: "disabled" },
		outputs: { ionDrag: "ionDrag" },
		standalone: false,
		ngContentSelectors: _c0$4,
		decls: 1,
		vars: 0,
		template: function IonItemSliding_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵprojectionDef();
				ɵɵprojection(0);
			}
		},
		encapsulation: 2
	});
};
IonItemSliding = __decorate([ProxyCmp({
	inputs: ["disabled"],
	methods: [
		"getOpenAmount",
		"getSlidingRatio",
		"open",
		"close",
		"closeOpened"
	]
})], IonItemSliding);
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonItemSliding, [{
		type: Component,
		args: [{
			selector: "ion-item-sliding",
			changeDetection: ChangeDetectionStrategy.OnPush,
			template: "<ng-content></ng-content>",
			inputs: ["disabled"],
			outputs: ["ionDrag"],
			standalone: false
		}]
	}], () => [
		{ type: ChangeDetectorRef },
		{ type: ElementRef },
		{ type: NgZone }
	], { ionDrag: [{ type: Output }] });
})();
var IonLabel = class IonLabel {
	z;
	el;
	constructor(c, r, z) {
		this.z = z;
		c.detach();
		this.el = r.nativeElement;
	}
	/** @nocollapse */
	static ɵfac = function IonLabel_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || IonLabel)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
	};
	/** @nocollapse */
	static ɵcmp = /* @__PURE__ */ ɵɵdefineComponent({
		type: IonLabel,
		selectors: [["ion-label"]],
		inputs: {
			color: "color",
			mode: "mode",
			position: "position"
		},
		standalone: false,
		ngContentSelectors: _c0$4,
		decls: 1,
		vars: 0,
		template: function IonLabel_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵprojectionDef();
				ɵɵprojection(0);
			}
		},
		encapsulation: 2
	});
};
IonLabel = __decorate([ProxyCmp({ inputs: [
	"color",
	"mode",
	"position"
] })], IonLabel);
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonLabel, [{
		type: Component,
		args: [{
			selector: "ion-label",
			changeDetection: ChangeDetectionStrategy.OnPush,
			template: "<ng-content></ng-content>",
			inputs: [
				"color",
				"mode",
				"position"
			],
			standalone: false
		}]
	}], () => [
		{ type: ChangeDetectorRef },
		{ type: ElementRef },
		{ type: NgZone }
	], null);
})();
var IonList = class IonList {
	z;
	el;
	constructor(c, r, z) {
		this.z = z;
		c.detach();
		this.el = r.nativeElement;
	}
	/** @nocollapse */
	static ɵfac = function IonList_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || IonList)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
	};
	/** @nocollapse */
	static ɵcmp = /* @__PURE__ */ ɵɵdefineComponent({
		type: IonList,
		selectors: [["ion-list"]],
		inputs: {
			inset: "inset",
			lines: "lines",
			mode: "mode"
		},
		standalone: false,
		ngContentSelectors: _c0$4,
		decls: 1,
		vars: 0,
		template: function IonList_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵprojectionDef();
				ɵɵprojection(0);
			}
		},
		encapsulation: 2
	});
};
IonList = __decorate([ProxyCmp({
	inputs: [
		"inset",
		"lines",
		"mode"
	],
	methods: ["closeSlidingItems"]
})], IonList);
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonList, [{
		type: Component,
		args: [{
			selector: "ion-list",
			changeDetection: ChangeDetectionStrategy.OnPush,
			template: "<ng-content></ng-content>",
			inputs: [
				"inset",
				"lines",
				"mode"
			],
			standalone: false
		}]
	}], () => [
		{ type: ChangeDetectorRef },
		{ type: ElementRef },
		{ type: NgZone }
	], null);
})();
var IonListHeader = class IonListHeader {
	z;
	el;
	constructor(c, r, z) {
		this.z = z;
		c.detach();
		this.el = r.nativeElement;
	}
	/** @nocollapse */
	static ɵfac = function IonListHeader_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || IonListHeader)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
	};
	/** @nocollapse */
	static ɵcmp = /* @__PURE__ */ ɵɵdefineComponent({
		type: IonListHeader,
		selectors: [["ion-list-header"]],
		inputs: {
			color: "color",
			lines: "lines",
			mode: "mode"
		},
		standalone: false,
		ngContentSelectors: _c0$4,
		decls: 1,
		vars: 0,
		template: function IonListHeader_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵprojectionDef();
				ɵɵprojection(0);
			}
		},
		encapsulation: 2
	});
};
IonListHeader = __decorate([ProxyCmp({ inputs: [
	"color",
	"lines",
	"mode"
] })], IonListHeader);
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonListHeader, [{
		type: Component,
		args: [{
			selector: "ion-list-header",
			changeDetection: ChangeDetectionStrategy.OnPush,
			template: "<ng-content></ng-content>",
			inputs: [
				"color",
				"lines",
				"mode"
			],
			standalone: false
		}]
	}], () => [
		{ type: ChangeDetectorRef },
		{ type: ElementRef },
		{ type: NgZone }
	], null);
})();
var IonLoading = class IonLoading {
	z;
	el;
	ionLoadingDidPresent = new EventEmitter();
	ionLoadingWillPresent = new EventEmitter();
	ionLoadingWillDismiss = new EventEmitter();
	ionLoadingDidDismiss = new EventEmitter();
	didPresent = new EventEmitter();
	willPresent = new EventEmitter();
	willDismiss = new EventEmitter();
	didDismiss = new EventEmitter();
	constructor(c, r, z) {
		this.z = z;
		c.detach();
		this.el = r.nativeElement;
	}
	/** @nocollapse */
	static ɵfac = function IonLoading_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || IonLoading)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
	};
	/** @nocollapse */
	static ɵcmp = /* @__PURE__ */ ɵɵdefineComponent({
		type: IonLoading,
		selectors: [["ion-loading"]],
		inputs: {
			animated: "animated",
			backdropDismiss: "backdropDismiss",
			cssClass: "cssClass",
			duration: "duration",
			enterAnimation: "enterAnimation",
			htmlAttributes: "htmlAttributes",
			isOpen: "isOpen",
			keyboardClose: "keyboardClose",
			leaveAnimation: "leaveAnimation",
			message: "message",
			mode: "mode",
			showBackdrop: "showBackdrop",
			spinner: "spinner",
			translucent: "translucent",
			trigger: "trigger"
		},
		outputs: {
			ionLoadingDidPresent: "ionLoadingDidPresent",
			ionLoadingWillPresent: "ionLoadingWillPresent",
			ionLoadingWillDismiss: "ionLoadingWillDismiss",
			ionLoadingDidDismiss: "ionLoadingDidDismiss",
			didPresent: "didPresent",
			willPresent: "willPresent",
			willDismiss: "willDismiss",
			didDismiss: "didDismiss"
		},
		standalone: false,
		ngContentSelectors: _c0$4,
		decls: 1,
		vars: 0,
		template: function IonLoading_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵprojectionDef();
				ɵɵprojection(0);
			}
		},
		encapsulation: 2
	});
};
IonLoading = __decorate([ProxyCmp({
	inputs: [
		"animated",
		"backdropDismiss",
		"cssClass",
		"duration",
		"enterAnimation",
		"htmlAttributes",
		"isOpen",
		"keyboardClose",
		"leaveAnimation",
		"message",
		"mode",
		"showBackdrop",
		"spinner",
		"translucent",
		"trigger"
	],
	methods: [
		"present",
		"dismiss",
		"onDidDismiss",
		"onWillDismiss"
	]
})], IonLoading);
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonLoading, [{
		type: Component,
		args: [{
			selector: "ion-loading",
			changeDetection: ChangeDetectionStrategy.OnPush,
			template: "<ng-content></ng-content>",
			inputs: [
				"animated",
				"backdropDismiss",
				"cssClass",
				"duration",
				"enterAnimation",
				"htmlAttributes",
				"isOpen",
				"keyboardClose",
				"leaveAnimation",
				"message",
				"mode",
				"showBackdrop",
				"spinner",
				"translucent",
				"trigger"
			],
			outputs: [
				"ionLoadingDidPresent",
				"ionLoadingWillPresent",
				"ionLoadingWillDismiss",
				"ionLoadingDidDismiss",
				"didPresent",
				"willPresent",
				"willDismiss",
				"didDismiss"
			],
			standalone: false
		}]
	}], () => [
		{ type: ChangeDetectorRef },
		{ type: ElementRef },
		{ type: NgZone }
	], {
		ionLoadingDidPresent: [{ type: Output }],
		ionLoadingWillPresent: [{ type: Output }],
		ionLoadingWillDismiss: [{ type: Output }],
		ionLoadingDidDismiss: [{ type: Output }],
		didPresent: [{ type: Output }],
		willPresent: [{ type: Output }],
		willDismiss: [{ type: Output }],
		didDismiss: [{ type: Output }]
	});
})();
var IonMenu = class IonMenu {
	z;
	el;
	ionWillOpen = new EventEmitter();
	ionWillClose = new EventEmitter();
	ionDidOpen = new EventEmitter();
	ionDidClose = new EventEmitter();
	constructor(c, r, z) {
		this.z = z;
		c.detach();
		this.el = r.nativeElement;
	}
	/** @nocollapse */
	static ɵfac = function IonMenu_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || IonMenu)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
	};
	/** @nocollapse */
	static ɵcmp = /* @__PURE__ */ ɵɵdefineComponent({
		type: IonMenu,
		selectors: [["ion-menu"]],
		inputs: {
			contentId: "contentId",
			disabled: "disabled",
			maxEdgeStart: "maxEdgeStart",
			menuId: "menuId",
			side: "side",
			swipeGesture: "swipeGesture",
			type: "type"
		},
		outputs: {
			ionWillOpen: "ionWillOpen",
			ionWillClose: "ionWillClose",
			ionDidOpen: "ionDidOpen",
			ionDidClose: "ionDidClose"
		},
		standalone: false,
		ngContentSelectors: _c0$4,
		decls: 1,
		vars: 0,
		template: function IonMenu_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵprojectionDef();
				ɵɵprojection(0);
			}
		},
		encapsulation: 2
	});
};
IonMenu = __decorate([ProxyCmp({
	inputs: [
		"contentId",
		"disabled",
		"maxEdgeStart",
		"menuId",
		"side",
		"swipeGesture",
		"type"
	],
	methods: [
		"isOpen",
		"isActive",
		"open",
		"close",
		"toggle",
		"setOpen"
	]
})], IonMenu);
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonMenu, [{
		type: Component,
		args: [{
			selector: "ion-menu",
			changeDetection: ChangeDetectionStrategy.OnPush,
			template: "<ng-content></ng-content>",
			inputs: [
				"contentId",
				"disabled",
				"maxEdgeStart",
				"menuId",
				"side",
				"swipeGesture",
				"type"
			],
			outputs: [
				"ionWillOpen",
				"ionWillClose",
				"ionDidOpen",
				"ionDidClose"
			],
			standalone: false
		}]
	}], () => [
		{ type: ChangeDetectorRef },
		{ type: ElementRef },
		{ type: NgZone }
	], {
		ionWillOpen: [{ type: Output }],
		ionWillClose: [{ type: Output }],
		ionDidOpen: [{ type: Output }],
		ionDidClose: [{ type: Output }]
	});
})();
var IonMenuButton = class IonMenuButton {
	z;
	el;
	constructor(c, r, z) {
		this.z = z;
		c.detach();
		this.el = r.nativeElement;
	}
	/** @nocollapse */
	static ɵfac = function IonMenuButton_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || IonMenuButton)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
	};
	/** @nocollapse */
	static ɵcmp = /* @__PURE__ */ ɵɵdefineComponent({
		type: IonMenuButton,
		selectors: [["ion-menu-button"]],
		inputs: {
			autoHide: "autoHide",
			color: "color",
			disabled: "disabled",
			menu: "menu",
			mode: "mode",
			type: "type"
		},
		standalone: false,
		ngContentSelectors: _c0$4,
		decls: 1,
		vars: 0,
		template: function IonMenuButton_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵprojectionDef();
				ɵɵprojection(0);
			}
		},
		encapsulation: 2
	});
};
IonMenuButton = __decorate([ProxyCmp({ inputs: [
	"autoHide",
	"color",
	"disabled",
	"menu",
	"mode",
	"type"
] })], IonMenuButton);
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonMenuButton, [{
		type: Component,
		args: [{
			selector: "ion-menu-button",
			changeDetection: ChangeDetectionStrategy.OnPush,
			template: "<ng-content></ng-content>",
			inputs: [
				"autoHide",
				"color",
				"disabled",
				"menu",
				"mode",
				"type"
			],
			standalone: false
		}]
	}], () => [
		{ type: ChangeDetectorRef },
		{ type: ElementRef },
		{ type: NgZone }
	], null);
})();
var IonMenuToggle = class IonMenuToggle {
	z;
	el;
	constructor(c, r, z) {
		this.z = z;
		c.detach();
		this.el = r.nativeElement;
	}
	/** @nocollapse */
	static ɵfac = function IonMenuToggle_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || IonMenuToggle)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
	};
	/** @nocollapse */
	static ɵcmp = /* @__PURE__ */ ɵɵdefineComponent({
		type: IonMenuToggle,
		selectors: [["ion-menu-toggle"]],
		inputs: {
			autoHide: "autoHide",
			menu: "menu"
		},
		standalone: false,
		ngContentSelectors: _c0$4,
		decls: 1,
		vars: 0,
		template: function IonMenuToggle_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵprojectionDef();
				ɵɵprojection(0);
			}
		},
		encapsulation: 2
	});
};
IonMenuToggle = __decorate([ProxyCmp({ inputs: ["autoHide", "menu"] })], IonMenuToggle);
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonMenuToggle, [{
		type: Component,
		args: [{
			selector: "ion-menu-toggle",
			changeDetection: ChangeDetectionStrategy.OnPush,
			template: "<ng-content></ng-content>",
			inputs: ["autoHide", "menu"],
			standalone: false
		}]
	}], () => [
		{ type: ChangeDetectorRef },
		{ type: ElementRef },
		{ type: NgZone }
	], null);
})();
var IonNavLink = class IonNavLink {
	z;
	el;
	constructor(c, r, z) {
		this.z = z;
		c.detach();
		this.el = r.nativeElement;
	}
	/** @nocollapse */
	static ɵfac = function IonNavLink_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || IonNavLink)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
	};
	/** @nocollapse */
	static ɵcmp = /* @__PURE__ */ ɵɵdefineComponent({
		type: IonNavLink,
		selectors: [["ion-nav-link"]],
		inputs: {
			component: "component",
			componentProps: "componentProps",
			routerAnimation: "routerAnimation",
			routerDirection: "routerDirection"
		},
		standalone: false,
		ngContentSelectors: _c0$4,
		decls: 1,
		vars: 0,
		template: function IonNavLink_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵprojectionDef();
				ɵɵprojection(0);
			}
		},
		encapsulation: 2
	});
};
IonNavLink = __decorate([ProxyCmp({ inputs: [
	"component",
	"componentProps",
	"routerAnimation",
	"routerDirection"
] })], IonNavLink);
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonNavLink, [{
		type: Component,
		args: [{
			selector: "ion-nav-link",
			changeDetection: ChangeDetectionStrategy.OnPush,
			template: "<ng-content></ng-content>",
			inputs: [
				"component",
				"componentProps",
				"routerAnimation",
				"routerDirection"
			],
			standalone: false
		}]
	}], () => [
		{ type: ChangeDetectorRef },
		{ type: ElementRef },
		{ type: NgZone }
	], null);
})();
var IonNote = class IonNote {
	z;
	el;
	constructor(c, r, z) {
		this.z = z;
		c.detach();
		this.el = r.nativeElement;
	}
	/** @nocollapse */
	static ɵfac = function IonNote_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || IonNote)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
	};
	/** @nocollapse */
	static ɵcmp = /* @__PURE__ */ ɵɵdefineComponent({
		type: IonNote,
		selectors: [["ion-note"]],
		inputs: {
			color: "color",
			mode: "mode"
		},
		standalone: false,
		ngContentSelectors: _c0$4,
		decls: 1,
		vars: 0,
		template: function IonNote_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵprojectionDef();
				ɵɵprojection(0);
			}
		},
		encapsulation: 2
	});
};
IonNote = __decorate([ProxyCmp({ inputs: ["color", "mode"] })], IonNote);
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonNote, [{
		type: Component,
		args: [{
			selector: "ion-note",
			changeDetection: ChangeDetectionStrategy.OnPush,
			template: "<ng-content></ng-content>",
			inputs: ["color", "mode"],
			standalone: false
		}]
	}], () => [
		{ type: ChangeDetectorRef },
		{ type: ElementRef },
		{ type: NgZone }
	], null);
})();
var IonPicker = class IonPicker {
	z;
	el;
	constructor(c, r, z) {
		this.z = z;
		c.detach();
		this.el = r.nativeElement;
	}
	/** @nocollapse */
	static ɵfac = function IonPicker_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || IonPicker)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
	};
	/** @nocollapse */
	static ɵcmp = /* @__PURE__ */ ɵɵdefineComponent({
		type: IonPicker,
		selectors: [["ion-picker"]],
		inputs: { mode: "mode" },
		standalone: false,
		ngContentSelectors: _c0$4,
		decls: 1,
		vars: 0,
		template: function IonPicker_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵprojectionDef();
				ɵɵprojection(0);
			}
		},
		encapsulation: 2
	});
};
IonPicker = __decorate([ProxyCmp({ inputs: ["mode"] })], IonPicker);
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonPicker, [{
		type: Component,
		args: [{
			selector: "ion-picker",
			changeDetection: ChangeDetectionStrategy.OnPush,
			template: "<ng-content></ng-content>",
			inputs: ["mode"],
			standalone: false
		}]
	}], () => [
		{ type: ChangeDetectorRef },
		{ type: ElementRef },
		{ type: NgZone }
	], null);
})();
var IonPickerColumn = class IonPickerColumn {
	z;
	el;
	ionChange = new EventEmitter();
	constructor(c, r, z) {
		this.z = z;
		c.detach();
		this.el = r.nativeElement;
	}
	/** @nocollapse */
	static ɵfac = function IonPickerColumn_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || IonPickerColumn)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
	};
	/** @nocollapse */
	static ɵcmp = /* @__PURE__ */ ɵɵdefineComponent({
		type: IonPickerColumn,
		selectors: [["ion-picker-column"]],
		inputs: {
			color: "color",
			disabled: "disabled",
			mode: "mode",
			value: "value"
		},
		outputs: { ionChange: "ionChange" },
		standalone: false,
		ngContentSelectors: _c0$4,
		decls: 1,
		vars: 0,
		template: function IonPickerColumn_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵprojectionDef();
				ɵɵprojection(0);
			}
		},
		encapsulation: 2
	});
};
IonPickerColumn = __decorate([ProxyCmp({
	inputs: [
		"color",
		"disabled",
		"mode",
		"value"
	],
	methods: ["setFocus"]
})], IonPickerColumn);
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonPickerColumn, [{
		type: Component,
		args: [{
			selector: "ion-picker-column",
			changeDetection: ChangeDetectionStrategy.OnPush,
			template: "<ng-content></ng-content>",
			inputs: [
				"color",
				"disabled",
				"mode",
				"value"
			],
			outputs: ["ionChange"],
			standalone: false
		}]
	}], () => [
		{ type: ChangeDetectorRef },
		{ type: ElementRef },
		{ type: NgZone }
	], { ionChange: [{ type: Output }] });
})();
var IonPickerColumnOption = class IonPickerColumnOption {
	z;
	el;
	constructor(c, r, z) {
		this.z = z;
		c.detach();
		this.el = r.nativeElement;
	}
	/** @nocollapse */
	static ɵfac = function IonPickerColumnOption_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || IonPickerColumnOption)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
	};
	/** @nocollapse */
	static ɵcmp = /* @__PURE__ */ ɵɵdefineComponent({
		type: IonPickerColumnOption,
		selectors: [["ion-picker-column-option"]],
		inputs: {
			color: "color",
			disabled: "disabled",
			value: "value"
		},
		standalone: false,
		ngContentSelectors: _c0$4,
		decls: 1,
		vars: 0,
		template: function IonPickerColumnOption_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵprojectionDef();
				ɵɵprojection(0);
			}
		},
		encapsulation: 2
	});
};
IonPickerColumnOption = __decorate([ProxyCmp({ inputs: [
	"color",
	"disabled",
	"value"
] })], IonPickerColumnOption);
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonPickerColumnOption, [{
		type: Component,
		args: [{
			selector: "ion-picker-column-option",
			changeDetection: ChangeDetectionStrategy.OnPush,
			template: "<ng-content></ng-content>",
			inputs: [
				"color",
				"disabled",
				"value"
			],
			standalone: false
		}]
	}], () => [
		{ type: ChangeDetectorRef },
		{ type: ElementRef },
		{ type: NgZone }
	], null);
})();
var IonProgressBar = class IonProgressBar {
	z;
	el;
	constructor(c, r, z) {
		this.z = z;
		c.detach();
		this.el = r.nativeElement;
	}
	/** @nocollapse */
	static ɵfac = function IonProgressBar_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || IonProgressBar)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
	};
	/** @nocollapse */
	static ɵcmp = /* @__PURE__ */ ɵɵdefineComponent({
		type: IonProgressBar,
		selectors: [["ion-progress-bar"]],
		inputs: {
			buffer: "buffer",
			color: "color",
			mode: "mode",
			reversed: "reversed",
			type: "type",
			value: "value"
		},
		standalone: false,
		ngContentSelectors: _c0$4,
		decls: 1,
		vars: 0,
		template: function IonProgressBar_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵprojectionDef();
				ɵɵprojection(0);
			}
		},
		encapsulation: 2
	});
};
IonProgressBar = __decorate([ProxyCmp({ inputs: [
	"buffer",
	"color",
	"mode",
	"reversed",
	"type",
	"value"
] })], IonProgressBar);
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonProgressBar, [{
		type: Component,
		args: [{
			selector: "ion-progress-bar",
			changeDetection: ChangeDetectionStrategy.OnPush,
			template: "<ng-content></ng-content>",
			inputs: [
				"buffer",
				"color",
				"mode",
				"reversed",
				"type",
				"value"
			],
			standalone: false
		}]
	}], () => [
		{ type: ChangeDetectorRef },
		{ type: ElementRef },
		{ type: NgZone }
	], null);
})();
var IonRadio = class IonRadio {
	z;
	el;
	ionFocus = new EventEmitter();
	ionBlur = new EventEmitter();
	constructor(c, r, z) {
		this.z = z;
		c.detach();
		this.el = r.nativeElement;
	}
	/** @nocollapse */
	static ɵfac = function IonRadio_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || IonRadio)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
	};
	/** @nocollapse */
	static ɵcmp = /* @__PURE__ */ ɵɵdefineComponent({
		type: IonRadio,
		selectors: [["ion-radio"]],
		inputs: {
			alignment: "alignment",
			color: "color",
			disabled: "disabled",
			justify: "justify",
			labelPlacement: "labelPlacement",
			mode: "mode",
			name: "name",
			value: "value"
		},
		outputs: {
			ionFocus: "ionFocus",
			ionBlur: "ionBlur"
		},
		standalone: false,
		ngContentSelectors: _c0$4,
		decls: 1,
		vars: 0,
		template: function IonRadio_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵprojectionDef();
				ɵɵprojection(0);
			}
		},
		encapsulation: 2
	});
};
IonRadio = __decorate([ProxyCmp({ inputs: [
	"alignment",
	"color",
	"disabled",
	"justify",
	"labelPlacement",
	"mode",
	"name",
	"value"
] })], IonRadio);
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonRadio, [{
		type: Component,
		args: [{
			selector: "ion-radio",
			changeDetection: ChangeDetectionStrategy.OnPush,
			template: "<ng-content></ng-content>",
			inputs: [
				"alignment",
				"color",
				"disabled",
				"justify",
				"labelPlacement",
				"mode",
				"name",
				"value"
			],
			outputs: ["ionFocus", "ionBlur"],
			standalone: false
		}]
	}], () => [
		{ type: ChangeDetectorRef },
		{ type: ElementRef },
		{ type: NgZone }
	], {
		ionFocus: [{ type: Output }],
		ionBlur: [{ type: Output }]
	});
})();
var IonRadioGroup = class IonRadioGroup {
	z;
	el;
	ionChange = new EventEmitter();
	constructor(c, r, z) {
		this.z = z;
		c.detach();
		this.el = r.nativeElement;
	}
	/** @nocollapse */
	static ɵfac = function IonRadioGroup_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || IonRadioGroup)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
	};
	/** @nocollapse */
	static ɵcmp = /* @__PURE__ */ ɵɵdefineComponent({
		type: IonRadioGroup,
		selectors: [["ion-radio-group"]],
		inputs: {
			allowEmptySelection: "allowEmptySelection",
			compareWith: "compareWith",
			errorText: "errorText",
			helperText: "helperText",
			name: "name",
			value: "value"
		},
		outputs: { ionChange: "ionChange" },
		standalone: false,
		ngContentSelectors: _c0$4,
		decls: 1,
		vars: 0,
		template: function IonRadioGroup_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵprojectionDef();
				ɵɵprojection(0);
			}
		},
		encapsulation: 2
	});
};
IonRadioGroup = __decorate([ProxyCmp({ inputs: [
	"allowEmptySelection",
	"compareWith",
	"errorText",
	"helperText",
	"name",
	"value"
] })], IonRadioGroup);
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonRadioGroup, [{
		type: Component,
		args: [{
			selector: "ion-radio-group",
			changeDetection: ChangeDetectionStrategy.OnPush,
			template: "<ng-content></ng-content>",
			inputs: [
				"allowEmptySelection",
				"compareWith",
				"errorText",
				"helperText",
				"name",
				"value"
			],
			outputs: ["ionChange"],
			standalone: false
		}]
	}], () => [
		{ type: ChangeDetectorRef },
		{ type: ElementRef },
		{ type: NgZone }
	], { ionChange: [{ type: Output }] });
})();
var IonRange = class IonRange {
	z;
	el;
	ionChange = new EventEmitter();
	ionInput = new EventEmitter();
	ionFocus = new EventEmitter();
	ionBlur = new EventEmitter();
	ionKnobMoveStart = new EventEmitter();
	ionKnobMoveEnd = new EventEmitter();
	constructor(c, r, z) {
		this.z = z;
		c.detach();
		this.el = r.nativeElement;
	}
	/** @nocollapse */
	static ɵfac = function IonRange_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || IonRange)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
	};
	/** @nocollapse */
	static ɵcmp = /* @__PURE__ */ ɵɵdefineComponent({
		type: IonRange,
		selectors: [["ion-range"]],
		inputs: {
			activeBarStart: "activeBarStart",
			color: "color",
			debounce: "debounce",
			disabled: "disabled",
			dualKnobs: "dualKnobs",
			label: "label",
			labelPlacement: "labelPlacement",
			max: "max",
			min: "min",
			mode: "mode",
			name: "name",
			pin: "pin",
			pinFormatter: "pinFormatter",
			snaps: "snaps",
			step: "step",
			ticks: "ticks",
			value: "value"
		},
		outputs: {
			ionChange: "ionChange",
			ionInput: "ionInput",
			ionFocus: "ionFocus",
			ionBlur: "ionBlur",
			ionKnobMoveStart: "ionKnobMoveStart",
			ionKnobMoveEnd: "ionKnobMoveEnd"
		},
		standalone: false,
		ngContentSelectors: _c0$4,
		decls: 1,
		vars: 0,
		template: function IonRange_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵprojectionDef();
				ɵɵprojection(0);
			}
		},
		encapsulation: 2
	});
};
IonRange = __decorate([ProxyCmp({ inputs: [
	"activeBarStart",
	"color",
	"debounce",
	"disabled",
	"dualKnobs",
	"label",
	"labelPlacement",
	"max",
	"min",
	"mode",
	"name",
	"pin",
	"pinFormatter",
	"snaps",
	"step",
	"ticks",
	"value"
] })], IonRange);
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonRange, [{
		type: Component,
		args: [{
			selector: "ion-range",
			changeDetection: ChangeDetectionStrategy.OnPush,
			template: "<ng-content></ng-content>",
			inputs: [
				"activeBarStart",
				"color",
				"debounce",
				"disabled",
				"dualKnobs",
				"label",
				"labelPlacement",
				"max",
				"min",
				"mode",
				"name",
				"pin",
				"pinFormatter",
				"snaps",
				"step",
				"ticks",
				"value"
			],
			outputs: [
				"ionChange",
				"ionInput",
				"ionFocus",
				"ionBlur",
				"ionKnobMoveStart",
				"ionKnobMoveEnd"
			],
			standalone: false
		}]
	}], () => [
		{ type: ChangeDetectorRef },
		{ type: ElementRef },
		{ type: NgZone }
	], {
		ionChange: [{ type: Output }],
		ionInput: [{ type: Output }],
		ionFocus: [{ type: Output }],
		ionBlur: [{ type: Output }],
		ionKnobMoveStart: [{ type: Output }],
		ionKnobMoveEnd: [{ type: Output }]
	});
})();
var IonRefresher = class IonRefresher {
	z;
	el;
	ionRefresh = new EventEmitter();
	ionPull = new EventEmitter();
	ionStart = new EventEmitter();
	ionPullStart = new EventEmitter();
	ionPullEnd = new EventEmitter();
	constructor(c, r, z) {
		this.z = z;
		c.detach();
		this.el = r.nativeElement;
	}
	/** @nocollapse */
	static ɵfac = function IonRefresher_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || IonRefresher)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
	};
	/** @nocollapse */
	static ɵcmp = /* @__PURE__ */ ɵɵdefineComponent({
		type: IonRefresher,
		selectors: [["ion-refresher"]],
		inputs: {
			closeDuration: "closeDuration",
			disabled: "disabled",
			mode: "mode",
			pullFactor: "pullFactor",
			pullMax: "pullMax",
			pullMin: "pullMin",
			snapbackDuration: "snapbackDuration"
		},
		outputs: {
			ionRefresh: "ionRefresh",
			ionPull: "ionPull",
			ionStart: "ionStart",
			ionPullStart: "ionPullStart",
			ionPullEnd: "ionPullEnd"
		},
		standalone: false,
		ngContentSelectors: _c0$4,
		decls: 1,
		vars: 0,
		template: function IonRefresher_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵprojectionDef();
				ɵɵprojection(0);
			}
		},
		encapsulation: 2
	});
};
IonRefresher = __decorate([ProxyCmp({
	inputs: [
		"closeDuration",
		"disabled",
		"mode",
		"pullFactor",
		"pullMax",
		"pullMin",
		"snapbackDuration"
	],
	methods: [
		"complete",
		"cancel",
		"getProgress"
	]
})], IonRefresher);
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonRefresher, [{
		type: Component,
		args: [{
			selector: "ion-refresher",
			changeDetection: ChangeDetectionStrategy.OnPush,
			template: "<ng-content></ng-content>",
			inputs: [
				"closeDuration",
				"disabled",
				"mode",
				"pullFactor",
				"pullMax",
				"pullMin",
				"snapbackDuration"
			],
			outputs: [
				"ionRefresh",
				"ionPull",
				"ionStart",
				"ionPullStart",
				"ionPullEnd"
			],
			standalone: false
		}]
	}], () => [
		{ type: ChangeDetectorRef },
		{ type: ElementRef },
		{ type: NgZone }
	], {
		ionRefresh: [{ type: Output }],
		ionPull: [{ type: Output }],
		ionStart: [{ type: Output }],
		ionPullStart: [{ type: Output }],
		ionPullEnd: [{ type: Output }]
	});
})();
var IonRefresherContent = class IonRefresherContent {
	z;
	el;
	constructor(c, r, z) {
		this.z = z;
		c.detach();
		this.el = r.nativeElement;
	}
	/** @nocollapse */
	static ɵfac = function IonRefresherContent_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || IonRefresherContent)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
	};
	/** @nocollapse */
	static ɵcmp = /* @__PURE__ */ ɵɵdefineComponent({
		type: IonRefresherContent,
		selectors: [["ion-refresher-content"]],
		inputs: {
			pullingIcon: "pullingIcon",
			pullingText: "pullingText",
			refreshingSpinner: "refreshingSpinner",
			refreshingText: "refreshingText"
		},
		standalone: false,
		ngContentSelectors: _c0$4,
		decls: 1,
		vars: 0,
		template: function IonRefresherContent_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵprojectionDef();
				ɵɵprojection(0);
			}
		},
		encapsulation: 2
	});
};
IonRefresherContent = __decorate([ProxyCmp({ inputs: [
	"pullingIcon",
	"pullingText",
	"refreshingSpinner",
	"refreshingText"
] })], IonRefresherContent);
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonRefresherContent, [{
		type: Component,
		args: [{
			selector: "ion-refresher-content",
			changeDetection: ChangeDetectionStrategy.OnPush,
			template: "<ng-content></ng-content>",
			inputs: [
				"pullingIcon",
				"pullingText",
				"refreshingSpinner",
				"refreshingText"
			],
			standalone: false
		}]
	}], () => [
		{ type: ChangeDetectorRef },
		{ type: ElementRef },
		{ type: NgZone }
	], null);
})();
var IonReorder = class IonReorder {
	z;
	el;
	constructor(c, r, z) {
		this.z = z;
		c.detach();
		this.el = r.nativeElement;
	}
	/** @nocollapse */
	static ɵfac = function IonReorder_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || IonReorder)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
	};
	/** @nocollapse */
	static ɵcmp = /* @__PURE__ */ ɵɵdefineComponent({
		type: IonReorder,
		selectors: [["ion-reorder"]],
		standalone: false,
		ngContentSelectors: _c0$4,
		decls: 1,
		vars: 0,
		template: function IonReorder_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵprojectionDef();
				ɵɵprojection(0);
			}
		},
		encapsulation: 2
	});
};
IonReorder = __decorate([ProxyCmp({})], IonReorder);
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonReorder, [{
		type: Component,
		args: [{
			selector: "ion-reorder",
			changeDetection: ChangeDetectionStrategy.OnPush,
			template: "<ng-content></ng-content>",
			inputs: [],
			standalone: false
		}]
	}], () => [
		{ type: ChangeDetectorRef },
		{ type: ElementRef },
		{ type: NgZone }
	], null);
})();
var IonReorderGroup = class IonReorderGroup {
	z;
	el;
	ionItemReorder = new EventEmitter();
	ionReorderStart = new EventEmitter();
	ionReorderMove = new EventEmitter();
	ionReorderEnd = new EventEmitter();
	constructor(c, r, z) {
		this.z = z;
		c.detach();
		this.el = r.nativeElement;
	}
	/** @nocollapse */
	static ɵfac = function IonReorderGroup_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || IonReorderGroup)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
	};
	/** @nocollapse */
	static ɵcmp = /* @__PURE__ */ ɵɵdefineComponent({
		type: IonReorderGroup,
		selectors: [["ion-reorder-group"]],
		inputs: { disabled: "disabled" },
		outputs: {
			ionItemReorder: "ionItemReorder",
			ionReorderStart: "ionReorderStart",
			ionReorderMove: "ionReorderMove",
			ionReorderEnd: "ionReorderEnd"
		},
		standalone: false,
		ngContentSelectors: _c0$4,
		decls: 1,
		vars: 0,
		template: function IonReorderGroup_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵprojectionDef();
				ɵɵprojection(0);
			}
		},
		encapsulation: 2
	});
};
IonReorderGroup = __decorate([ProxyCmp({
	inputs: ["disabled"],
	methods: ["complete"]
})], IonReorderGroup);
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonReorderGroup, [{
		type: Component,
		args: [{
			selector: "ion-reorder-group",
			changeDetection: ChangeDetectionStrategy.OnPush,
			template: "<ng-content></ng-content>",
			inputs: ["disabled"],
			outputs: [
				"ionItemReorder",
				"ionReorderStart",
				"ionReorderMove",
				"ionReorderEnd"
			],
			standalone: false
		}]
	}], () => [
		{ type: ChangeDetectorRef },
		{ type: ElementRef },
		{ type: NgZone }
	], {
		ionItemReorder: [{ type: Output }],
		ionReorderStart: [{ type: Output }],
		ionReorderMove: [{ type: Output }],
		ionReorderEnd: [{ type: Output }]
	});
})();
var IonRippleEffect = class IonRippleEffect {
	z;
	el;
	constructor(c, r, z) {
		this.z = z;
		c.detach();
		this.el = r.nativeElement;
	}
	/** @nocollapse */
	static ɵfac = function IonRippleEffect_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || IonRippleEffect)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
	};
	/** @nocollapse */
	static ɵcmp = /* @__PURE__ */ ɵɵdefineComponent({
		type: IonRippleEffect,
		selectors: [["ion-ripple-effect"]],
		inputs: { type: "type" },
		standalone: false,
		ngContentSelectors: _c0$4,
		decls: 1,
		vars: 0,
		template: function IonRippleEffect_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵprojectionDef();
				ɵɵprojection(0);
			}
		},
		encapsulation: 2
	});
};
IonRippleEffect = __decorate([ProxyCmp({
	inputs: ["type"],
	methods: ["addRipple"]
})], IonRippleEffect);
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonRippleEffect, [{
		type: Component,
		args: [{
			selector: "ion-ripple-effect",
			changeDetection: ChangeDetectionStrategy.OnPush,
			template: "<ng-content></ng-content>",
			inputs: ["type"],
			standalone: false
		}]
	}], () => [
		{ type: ChangeDetectorRef },
		{ type: ElementRef },
		{ type: NgZone }
	], null);
})();
var IonRow = class IonRow {
	z;
	el;
	constructor(c, r, z) {
		this.z = z;
		c.detach();
		this.el = r.nativeElement;
	}
	/** @nocollapse */
	static ɵfac = function IonRow_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || IonRow)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
	};
	/** @nocollapse */
	static ɵcmp = /* @__PURE__ */ ɵɵdefineComponent({
		type: IonRow,
		selectors: [["ion-row"]],
		standalone: false,
		ngContentSelectors: _c0$4,
		decls: 1,
		vars: 0,
		template: function IonRow_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵprojectionDef();
				ɵɵprojection(0);
			}
		},
		encapsulation: 2
	});
};
IonRow = __decorate([ProxyCmp({})], IonRow);
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonRow, [{
		type: Component,
		args: [{
			selector: "ion-row",
			changeDetection: ChangeDetectionStrategy.OnPush,
			template: "<ng-content></ng-content>",
			inputs: [],
			standalone: false
		}]
	}], () => [
		{ type: ChangeDetectorRef },
		{ type: ElementRef },
		{ type: NgZone }
	], null);
})();
var IonSearchbar = class IonSearchbar {
	z;
	el;
	ionInput = new EventEmitter();
	ionChange = new EventEmitter();
	ionCancel = new EventEmitter();
	ionClear = new EventEmitter();
	ionBlur = new EventEmitter();
	ionFocus = new EventEmitter();
	constructor(c, r, z) {
		this.z = z;
		c.detach();
		this.el = r.nativeElement;
	}
	/** @nocollapse */
	static ɵfac = function IonSearchbar_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || IonSearchbar)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
	};
	/** @nocollapse */
	static ɵcmp = /* @__PURE__ */ ɵɵdefineComponent({
		type: IonSearchbar,
		selectors: [["ion-searchbar"]],
		inputs: {
			animated: "animated",
			autocapitalize: "autocapitalize",
			autocomplete: "autocomplete",
			autocorrect: "autocorrect",
			cancelButtonIcon: "cancelButtonIcon",
			cancelButtonText: "cancelButtonText",
			clearIcon: "clearIcon",
			color: "color",
			debounce: "debounce",
			disabled: "disabled",
			enterkeyhint: "enterkeyhint",
			inputmode: "inputmode",
			maxlength: "maxlength",
			minlength: "minlength",
			mode: "mode",
			name: "name",
			placeholder: "placeholder",
			searchIcon: "searchIcon",
			showCancelButton: "showCancelButton",
			showClearButton: "showClearButton",
			spellcheck: "spellcheck",
			type: "type",
			value: "value"
		},
		outputs: {
			ionInput: "ionInput",
			ionChange: "ionChange",
			ionCancel: "ionCancel",
			ionClear: "ionClear",
			ionBlur: "ionBlur",
			ionFocus: "ionFocus"
		},
		standalone: false,
		ngContentSelectors: _c0$4,
		decls: 1,
		vars: 0,
		template: function IonSearchbar_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵprojectionDef();
				ɵɵprojection(0);
			}
		},
		encapsulation: 2
	});
};
IonSearchbar = __decorate([ProxyCmp({
	inputs: [
		"animated",
		"autocapitalize",
		"autocomplete",
		"autocorrect",
		"cancelButtonIcon",
		"cancelButtonText",
		"clearIcon",
		"color",
		"debounce",
		"disabled",
		"enterkeyhint",
		"inputmode",
		"maxlength",
		"minlength",
		"mode",
		"name",
		"placeholder",
		"searchIcon",
		"showCancelButton",
		"showClearButton",
		"spellcheck",
		"type",
		"value"
	],
	methods: ["setFocus", "getInputElement"]
})], IonSearchbar);
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonSearchbar, [{
		type: Component,
		args: [{
			selector: "ion-searchbar",
			changeDetection: ChangeDetectionStrategy.OnPush,
			template: "<ng-content></ng-content>",
			inputs: [
				"animated",
				"autocapitalize",
				"autocomplete",
				"autocorrect",
				"cancelButtonIcon",
				"cancelButtonText",
				"clearIcon",
				"color",
				"debounce",
				"disabled",
				"enterkeyhint",
				"inputmode",
				"maxlength",
				"minlength",
				"mode",
				"name",
				"placeholder",
				"searchIcon",
				"showCancelButton",
				"showClearButton",
				"spellcheck",
				"type",
				"value"
			],
			outputs: [
				"ionInput",
				"ionChange",
				"ionCancel",
				"ionClear",
				"ionBlur",
				"ionFocus"
			],
			standalone: false
		}]
	}], () => [
		{ type: ChangeDetectorRef },
		{ type: ElementRef },
		{ type: NgZone }
	], {
		ionInput: [{ type: Output }],
		ionChange: [{ type: Output }],
		ionCancel: [{ type: Output }],
		ionClear: [{ type: Output }],
		ionBlur: [{ type: Output }],
		ionFocus: [{ type: Output }]
	});
})();
var IonSegment = class IonSegment {
	z;
	el;
	ionChange = new EventEmitter();
	constructor(c, r, z) {
		this.z = z;
		c.detach();
		this.el = r.nativeElement;
	}
	/** @nocollapse */
	static ɵfac = function IonSegment_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || IonSegment)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
	};
	/** @nocollapse */
	static ɵcmp = /* @__PURE__ */ ɵɵdefineComponent({
		type: IonSegment,
		selectors: [["ion-segment"]],
		inputs: {
			color: "color",
			disabled: "disabled",
			mode: "mode",
			scrollable: "scrollable",
			selectOnFocus: "selectOnFocus",
			swipeGesture: "swipeGesture",
			value: "value"
		},
		outputs: { ionChange: "ionChange" },
		standalone: false,
		ngContentSelectors: _c0$4,
		decls: 1,
		vars: 0,
		template: function IonSegment_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵprojectionDef();
				ɵɵprojection(0);
			}
		},
		encapsulation: 2
	});
};
IonSegment = __decorate([ProxyCmp({ inputs: [
	"color",
	"disabled",
	"mode",
	"scrollable",
	"selectOnFocus",
	"swipeGesture",
	"value"
] })], IonSegment);
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonSegment, [{
		type: Component,
		args: [{
			selector: "ion-segment",
			changeDetection: ChangeDetectionStrategy.OnPush,
			template: "<ng-content></ng-content>",
			inputs: [
				"color",
				"disabled",
				"mode",
				"scrollable",
				"selectOnFocus",
				"swipeGesture",
				"value"
			],
			outputs: ["ionChange"],
			standalone: false
		}]
	}], () => [
		{ type: ChangeDetectorRef },
		{ type: ElementRef },
		{ type: NgZone }
	], { ionChange: [{ type: Output }] });
})();
var IonSegmentButton = class IonSegmentButton {
	z;
	el;
	constructor(c, r, z) {
		this.z = z;
		c.detach();
		this.el = r.nativeElement;
	}
	/** @nocollapse */
	static ɵfac = function IonSegmentButton_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || IonSegmentButton)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
	};
	/** @nocollapse */
	static ɵcmp = /* @__PURE__ */ ɵɵdefineComponent({
		type: IonSegmentButton,
		selectors: [["ion-segment-button"]],
		inputs: {
			contentId: "contentId",
			disabled: "disabled",
			layout: "layout",
			mode: "mode",
			type: "type",
			value: "value"
		},
		standalone: false,
		ngContentSelectors: _c0$4,
		decls: 1,
		vars: 0,
		template: function IonSegmentButton_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵprojectionDef();
				ɵɵprojection(0);
			}
		},
		encapsulation: 2
	});
};
IonSegmentButton = __decorate([ProxyCmp({ inputs: [
	"contentId",
	"disabled",
	"layout",
	"mode",
	"type",
	"value"
] })], IonSegmentButton);
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonSegmentButton, [{
		type: Component,
		args: [{
			selector: "ion-segment-button",
			changeDetection: ChangeDetectionStrategy.OnPush,
			template: "<ng-content></ng-content>",
			inputs: [
				"contentId",
				"disabled",
				"layout",
				"mode",
				"type",
				"value"
			],
			standalone: false
		}]
	}], () => [
		{ type: ChangeDetectorRef },
		{ type: ElementRef },
		{ type: NgZone }
	], null);
})();
var IonSegmentContent = class IonSegmentContent {
	z;
	el;
	constructor(c, r, z) {
		this.z = z;
		c.detach();
		this.el = r.nativeElement;
	}
	/** @nocollapse */
	static ɵfac = function IonSegmentContent_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || IonSegmentContent)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
	};
	/** @nocollapse */
	static ɵcmp = /* @__PURE__ */ ɵɵdefineComponent({
		type: IonSegmentContent,
		selectors: [["ion-segment-content"]],
		standalone: false,
		ngContentSelectors: _c0$4,
		decls: 1,
		vars: 0,
		template: function IonSegmentContent_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵprojectionDef();
				ɵɵprojection(0);
			}
		},
		encapsulation: 2
	});
};
IonSegmentContent = __decorate([ProxyCmp({})], IonSegmentContent);
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonSegmentContent, [{
		type: Component,
		args: [{
			selector: "ion-segment-content",
			changeDetection: ChangeDetectionStrategy.OnPush,
			template: "<ng-content></ng-content>",
			inputs: [],
			standalone: false
		}]
	}], () => [
		{ type: ChangeDetectorRef },
		{ type: ElementRef },
		{ type: NgZone }
	], null);
})();
var IonSegmentView = class IonSegmentView {
	z;
	el;
	ionSegmentViewScroll = new EventEmitter();
	constructor(c, r, z) {
		this.z = z;
		c.detach();
		this.el = r.nativeElement;
	}
	/** @nocollapse */
	static ɵfac = function IonSegmentView_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || IonSegmentView)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
	};
	/** @nocollapse */
	static ɵcmp = /* @__PURE__ */ ɵɵdefineComponent({
		type: IonSegmentView,
		selectors: [["ion-segment-view"]],
		inputs: {
			disabled: "disabled",
			swipeGesture: "swipeGesture"
		},
		outputs: { ionSegmentViewScroll: "ionSegmentViewScroll" },
		standalone: false,
		ngContentSelectors: _c0$4,
		decls: 1,
		vars: 0,
		template: function IonSegmentView_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵprojectionDef();
				ɵɵprojection(0);
			}
		},
		encapsulation: 2
	});
};
IonSegmentView = __decorate([ProxyCmp({ inputs: ["disabled", "swipeGesture"] })], IonSegmentView);
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonSegmentView, [{
		type: Component,
		args: [{
			selector: "ion-segment-view",
			changeDetection: ChangeDetectionStrategy.OnPush,
			template: "<ng-content></ng-content>",
			inputs: ["disabled", "swipeGesture"],
			outputs: ["ionSegmentViewScroll"],
			standalone: false
		}]
	}], () => [
		{ type: ChangeDetectorRef },
		{ type: ElementRef },
		{ type: NgZone }
	], { ionSegmentViewScroll: [{ type: Output }] });
})();
var IonSelect = class IonSelect {
	z;
	el;
	ionChange = new EventEmitter();
	ionCancel = new EventEmitter();
	ionDismiss = new EventEmitter();
	ionFocus = new EventEmitter();
	ionBlur = new EventEmitter();
	constructor(c, r, z) {
		this.z = z;
		c.detach();
		this.el = r.nativeElement;
	}
	/** @nocollapse */
	static ɵfac = function IonSelect_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || IonSelect)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
	};
	/** @nocollapse */
	static ɵcmp = /* @__PURE__ */ ɵɵdefineComponent({
		type: IonSelect,
		selectors: [["ion-select"]],
		inputs: {
			cancelText: "cancelText",
			color: "color",
			compareWith: "compareWith",
			disabled: "disabled",
			errorText: "errorText",
			expandedIcon: "expandedIcon",
			fill: "fill",
			helperText: "helperText",
			interface: "interface",
			interfaceOptions: "interfaceOptions",
			justify: "justify",
			label: "label",
			labelPlacement: "labelPlacement",
			mode: "mode",
			multiple: "multiple",
			name: "name",
			okText: "okText",
			placeholder: "placeholder",
			required: "required",
			selectedText: "selectedText",
			shape: "shape",
			toggleIcon: "toggleIcon",
			value: "value"
		},
		outputs: {
			ionChange: "ionChange",
			ionCancel: "ionCancel",
			ionDismiss: "ionDismiss",
			ionFocus: "ionFocus",
			ionBlur: "ionBlur"
		},
		standalone: false,
		ngContentSelectors: _c0$4,
		decls: 1,
		vars: 0,
		template: function IonSelect_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵprojectionDef();
				ɵɵprojection(0);
			}
		},
		encapsulation: 2
	});
};
IonSelect = __decorate([ProxyCmp({
	inputs: [
		"cancelText",
		"color",
		"compareWith",
		"disabled",
		"errorText",
		"expandedIcon",
		"fill",
		"helperText",
		"interface",
		"interfaceOptions",
		"justify",
		"label",
		"labelPlacement",
		"mode",
		"multiple",
		"name",
		"okText",
		"placeholder",
		"required",
		"selectedText",
		"shape",
		"toggleIcon",
		"value"
	],
	methods: ["open"]
})], IonSelect);
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonSelect, [{
		type: Component,
		args: [{
			selector: "ion-select",
			changeDetection: ChangeDetectionStrategy.OnPush,
			template: "<ng-content></ng-content>",
			inputs: [
				"cancelText",
				"color",
				"compareWith",
				"disabled",
				"errorText",
				"expandedIcon",
				"fill",
				"helperText",
				"interface",
				"interfaceOptions",
				"justify",
				"label",
				"labelPlacement",
				"mode",
				"multiple",
				"name",
				"okText",
				"placeholder",
				"required",
				"selectedText",
				"shape",
				"toggleIcon",
				"value"
			],
			outputs: [
				"ionChange",
				"ionCancel",
				"ionDismiss",
				"ionFocus",
				"ionBlur"
			],
			standalone: false
		}]
	}], () => [
		{ type: ChangeDetectorRef },
		{ type: ElementRef },
		{ type: NgZone }
	], {
		ionChange: [{ type: Output }],
		ionCancel: [{ type: Output }],
		ionDismiss: [{ type: Output }],
		ionFocus: [{ type: Output }],
		ionBlur: [{ type: Output }]
	});
})();
var IonSelectModal = class IonSelectModal {
	z;
	el;
	constructor(c, r, z) {
		this.z = z;
		c.detach();
		this.el = r.nativeElement;
	}
	/** @nocollapse */
	static ɵfac = function IonSelectModal_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || IonSelectModal)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
	};
	/** @nocollapse */
	static ɵcmp = /* @__PURE__ */ ɵɵdefineComponent({
		type: IonSelectModal,
		selectors: [["ion-select-modal"]],
		inputs: {
			cancelText: "cancelText",
			header: "header",
			multiple: "multiple",
			options: "options"
		},
		standalone: false,
		ngContentSelectors: _c0$4,
		decls: 1,
		vars: 0,
		template: function IonSelectModal_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵprojectionDef();
				ɵɵprojection(0);
			}
		},
		encapsulation: 2
	});
};
IonSelectModal = __decorate([ProxyCmp({ inputs: [
	"cancelText",
	"header",
	"multiple",
	"options"
] })], IonSelectModal);
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonSelectModal, [{
		type: Component,
		args: [{
			selector: "ion-select-modal",
			changeDetection: ChangeDetectionStrategy.OnPush,
			template: "<ng-content></ng-content>",
			inputs: [
				"cancelText",
				"header",
				"multiple",
				"options"
			],
			standalone: false
		}]
	}], () => [
		{ type: ChangeDetectorRef },
		{ type: ElementRef },
		{ type: NgZone }
	], null);
})();
var IonSelectOption = class IonSelectOption {
	z;
	el;
	constructor(c, r, z) {
		this.z = z;
		c.detach();
		this.el = r.nativeElement;
	}
	/** @nocollapse */
	static ɵfac = function IonSelectOption_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || IonSelectOption)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
	};
	/** @nocollapse */
	static ɵcmp = /* @__PURE__ */ ɵɵdefineComponent({
		type: IonSelectOption,
		selectors: [["ion-select-option"]],
		inputs: {
			description: "description",
			disabled: "disabled",
			justify: "justify",
			labelPlacement: "labelPlacement",
			mode: "mode",
			value: "value"
		},
		standalone: false,
		ngContentSelectors: _c0$4,
		decls: 1,
		vars: 0,
		template: function IonSelectOption_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵprojectionDef();
				ɵɵprojection(0);
			}
		},
		encapsulation: 2
	});
};
IonSelectOption = __decorate([ProxyCmp({ inputs: [
	"description",
	"disabled",
	"justify",
	"labelPlacement",
	"mode",
	"value"
] })], IonSelectOption);
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonSelectOption, [{
		type: Component,
		args: [{
			selector: "ion-select-option",
			changeDetection: ChangeDetectionStrategy.OnPush,
			template: "<ng-content></ng-content>",
			inputs: [
				"description",
				"disabled",
				"justify",
				"labelPlacement",
				"mode",
				"value"
			],
			standalone: false
		}]
	}], () => [
		{ type: ChangeDetectorRef },
		{ type: ElementRef },
		{ type: NgZone }
	], null);
})();
var IonSkeletonText = class IonSkeletonText {
	z;
	el;
	constructor(c, r, z) {
		this.z = z;
		c.detach();
		this.el = r.nativeElement;
	}
	/** @nocollapse */
	static ɵfac = function IonSkeletonText_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || IonSkeletonText)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
	};
	/** @nocollapse */
	static ɵcmp = /* @__PURE__ */ ɵɵdefineComponent({
		type: IonSkeletonText,
		selectors: [["ion-skeleton-text"]],
		inputs: { animated: "animated" },
		standalone: false,
		ngContentSelectors: _c0$4,
		decls: 1,
		vars: 0,
		template: function IonSkeletonText_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵprojectionDef();
				ɵɵprojection(0);
			}
		},
		encapsulation: 2
	});
};
IonSkeletonText = __decorate([ProxyCmp({ inputs: ["animated"] })], IonSkeletonText);
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonSkeletonText, [{
		type: Component,
		args: [{
			selector: "ion-skeleton-text",
			changeDetection: ChangeDetectionStrategy.OnPush,
			template: "<ng-content></ng-content>",
			inputs: ["animated"],
			standalone: false
		}]
	}], () => [
		{ type: ChangeDetectorRef },
		{ type: ElementRef },
		{ type: NgZone }
	], null);
})();
var IonSpinner = class IonSpinner {
	z;
	el;
	constructor(c, r, z) {
		this.z = z;
		c.detach();
		this.el = r.nativeElement;
	}
	/** @nocollapse */
	static ɵfac = function IonSpinner_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || IonSpinner)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
	};
	/** @nocollapse */
	static ɵcmp = /* @__PURE__ */ ɵɵdefineComponent({
		type: IonSpinner,
		selectors: [["ion-spinner"]],
		inputs: {
			color: "color",
			duration: "duration",
			name: "name",
			paused: "paused"
		},
		standalone: false,
		ngContentSelectors: _c0$4,
		decls: 1,
		vars: 0,
		template: function IonSpinner_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵprojectionDef();
				ɵɵprojection(0);
			}
		},
		encapsulation: 2
	});
};
IonSpinner = __decorate([ProxyCmp({ inputs: [
	"color",
	"duration",
	"name",
	"paused"
] })], IonSpinner);
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonSpinner, [{
		type: Component,
		args: [{
			selector: "ion-spinner",
			changeDetection: ChangeDetectionStrategy.OnPush,
			template: "<ng-content></ng-content>",
			inputs: [
				"color",
				"duration",
				"name",
				"paused"
			],
			standalone: false
		}]
	}], () => [
		{ type: ChangeDetectorRef },
		{ type: ElementRef },
		{ type: NgZone }
	], null);
})();
var IonSplitPane = class IonSplitPane {
	z;
	el;
	ionSplitPaneVisible = new EventEmitter();
	constructor(c, r, z) {
		this.z = z;
		c.detach();
		this.el = r.nativeElement;
	}
	/** @nocollapse */
	static ɵfac = function IonSplitPane_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || IonSplitPane)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
	};
	/** @nocollapse */
	static ɵcmp = /* @__PURE__ */ ɵɵdefineComponent({
		type: IonSplitPane,
		selectors: [["ion-split-pane"]],
		inputs: {
			contentId: "contentId",
			disabled: "disabled",
			when: "when"
		},
		outputs: { ionSplitPaneVisible: "ionSplitPaneVisible" },
		standalone: false,
		ngContentSelectors: _c0$4,
		decls: 1,
		vars: 0,
		template: function IonSplitPane_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵprojectionDef();
				ɵɵprojection(0);
			}
		},
		encapsulation: 2
	});
};
IonSplitPane = __decorate([ProxyCmp({ inputs: [
	"contentId",
	"disabled",
	"when"
] })], IonSplitPane);
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonSplitPane, [{
		type: Component,
		args: [{
			selector: "ion-split-pane",
			changeDetection: ChangeDetectionStrategy.OnPush,
			template: "<ng-content></ng-content>",
			inputs: [
				"contentId",
				"disabled",
				"when"
			],
			outputs: ["ionSplitPaneVisible"],
			standalone: false
		}]
	}], () => [
		{ type: ChangeDetectorRef },
		{ type: ElementRef },
		{ type: NgZone }
	], { ionSplitPaneVisible: [{ type: Output }] });
})();
var IonTab = class IonTab {
	z;
	el;
	constructor(c, r, z) {
		this.z = z;
		c.detach();
		this.el = r.nativeElement;
	}
	/** @nocollapse */
	static ɵfac = function IonTab_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || IonTab)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
	};
	/** @nocollapse */
	static ɵcmp = /* @__PURE__ */ ɵɵdefineComponent({
		type: IonTab,
		selectors: [["ion-tab"]],
		inputs: {
			component: "component",
			tab: "tab"
		},
		standalone: false,
		ngContentSelectors: _c0$4,
		decls: 1,
		vars: 0,
		template: function IonTab_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵprojectionDef();
				ɵɵprojection(0);
			}
		},
		encapsulation: 2
	});
};
IonTab = __decorate([ProxyCmp({
	inputs: ["component", "tab"],
	methods: ["setActive"]
})], IonTab);
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonTab, [{
		type: Component,
		args: [{
			selector: "ion-tab",
			changeDetection: ChangeDetectionStrategy.OnPush,
			template: "<ng-content></ng-content>",
			inputs: ["component", {
				name: "tab",
				required: true
			}],
			standalone: false
		}]
	}], () => [
		{ type: ChangeDetectorRef },
		{ type: ElementRef },
		{ type: NgZone }
	], null);
})();
var IonTabBar = class IonTabBar {
	z;
	el;
	constructor(c, r, z) {
		this.z = z;
		c.detach();
		this.el = r.nativeElement;
	}
	/** @nocollapse */
	static ɵfac = function IonTabBar_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || IonTabBar)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
	};
	/** @nocollapse */
	static ɵcmp = /* @__PURE__ */ ɵɵdefineComponent({
		type: IonTabBar,
		selectors: [["ion-tab-bar"]],
		inputs: {
			color: "color",
			mode: "mode",
			selectedTab: "selectedTab",
			translucent: "translucent"
		},
		standalone: false,
		ngContentSelectors: _c0$4,
		decls: 1,
		vars: 0,
		template: function IonTabBar_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵprojectionDef();
				ɵɵprojection(0);
			}
		},
		encapsulation: 2
	});
};
IonTabBar = __decorate([ProxyCmp({ inputs: [
	"color",
	"mode",
	"selectedTab",
	"translucent"
] })], IonTabBar);
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonTabBar, [{
		type: Component,
		args: [{
			selector: "ion-tab-bar",
			changeDetection: ChangeDetectionStrategy.OnPush,
			template: "<ng-content></ng-content>",
			inputs: [
				"color",
				"mode",
				"selectedTab",
				"translucent"
			],
			standalone: false
		}]
	}], () => [
		{ type: ChangeDetectorRef },
		{ type: ElementRef },
		{ type: NgZone }
	], null);
})();
var IonTabButton = class IonTabButton {
	z;
	el;
	constructor(c, r, z) {
		this.z = z;
		c.detach();
		this.el = r.nativeElement;
	}
	/** @nocollapse */
	static ɵfac = function IonTabButton_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || IonTabButton)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
	};
	/** @nocollapse */
	static ɵcmp = /* @__PURE__ */ ɵɵdefineComponent({
		type: IonTabButton,
		selectors: [["ion-tab-button"]],
		inputs: {
			disabled: "disabled",
			download: "download",
			href: "href",
			layout: "layout",
			mode: "mode",
			rel: "rel",
			selected: "selected",
			tab: "tab",
			target: "target"
		},
		standalone: false,
		ngContentSelectors: _c0$4,
		decls: 1,
		vars: 0,
		template: function IonTabButton_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵprojectionDef();
				ɵɵprojection(0);
			}
		},
		encapsulation: 2
	});
};
IonTabButton = __decorate([ProxyCmp({ inputs: [
	"disabled",
	"download",
	"href",
	"layout",
	"mode",
	"rel",
	"selected",
	"tab",
	"target"
] })], IonTabButton);
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonTabButton, [{
		type: Component,
		args: [{
			selector: "ion-tab-button",
			changeDetection: ChangeDetectionStrategy.OnPush,
			template: "<ng-content></ng-content>",
			inputs: [
				"disabled",
				"download",
				"href",
				"layout",
				"mode",
				"rel",
				"selected",
				"tab",
				"target"
			],
			standalone: false
		}]
	}], () => [
		{ type: ChangeDetectorRef },
		{ type: ElementRef },
		{ type: NgZone }
	], null);
})();
var IonText = class IonText {
	z;
	el;
	constructor(c, r, z) {
		this.z = z;
		c.detach();
		this.el = r.nativeElement;
	}
	/** @nocollapse */
	static ɵfac = function IonText_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || IonText)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
	};
	/** @nocollapse */
	static ɵcmp = /* @__PURE__ */ ɵɵdefineComponent({
		type: IonText,
		selectors: [["ion-text"]],
		inputs: {
			color: "color",
			mode: "mode"
		},
		standalone: false,
		ngContentSelectors: _c0$4,
		decls: 1,
		vars: 0,
		template: function IonText_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵprojectionDef();
				ɵɵprojection(0);
			}
		},
		encapsulation: 2
	});
};
IonText = __decorate([ProxyCmp({ inputs: ["color", "mode"] })], IonText);
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonText, [{
		type: Component,
		args: [{
			selector: "ion-text",
			changeDetection: ChangeDetectionStrategy.OnPush,
			template: "<ng-content></ng-content>",
			inputs: ["color", "mode"],
			standalone: false
		}]
	}], () => [
		{ type: ChangeDetectorRef },
		{ type: ElementRef },
		{ type: NgZone }
	], null);
})();
var IonTextarea = class IonTextarea {
	z;
	el;
	ionChange = new EventEmitter();
	ionInput = new EventEmitter();
	ionBlur = new EventEmitter();
	ionFocus = new EventEmitter();
	constructor(c, r, z) {
		this.z = z;
		c.detach();
		this.el = r.nativeElement;
	}
	/** @nocollapse */
	static ɵfac = function IonTextarea_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || IonTextarea)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
	};
	/** @nocollapse */
	static ɵcmp = /* @__PURE__ */ ɵɵdefineComponent({
		type: IonTextarea,
		selectors: [["ion-textarea"]],
		inputs: {
			autoGrow: "autoGrow",
			autocapitalize: "autocapitalize",
			autofocus: "autofocus",
			clearOnEdit: "clearOnEdit",
			color: "color",
			cols: "cols",
			counter: "counter",
			counterFormatter: "counterFormatter",
			debounce: "debounce",
			disabled: "disabled",
			enterkeyhint: "enterkeyhint",
			errorText: "errorText",
			fill: "fill",
			helperText: "helperText",
			inputmode: "inputmode",
			label: "label",
			labelPlacement: "labelPlacement",
			maxlength: "maxlength",
			minlength: "minlength",
			mode: "mode",
			name: "name",
			placeholder: "placeholder",
			readonly: "readonly",
			required: "required",
			rows: "rows",
			shape: "shape",
			spellcheck: "spellcheck",
			value: "value",
			wrap: "wrap"
		},
		outputs: {
			ionChange: "ionChange",
			ionInput: "ionInput",
			ionBlur: "ionBlur",
			ionFocus: "ionFocus"
		},
		standalone: false,
		ngContentSelectors: _c0$4,
		decls: 1,
		vars: 0,
		template: function IonTextarea_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵprojectionDef();
				ɵɵprojection(0);
			}
		},
		encapsulation: 2
	});
};
IonTextarea = __decorate([ProxyCmp({
	inputs: [
		"autoGrow",
		"autocapitalize",
		"autofocus",
		"clearOnEdit",
		"color",
		"cols",
		"counter",
		"counterFormatter",
		"debounce",
		"disabled",
		"enterkeyhint",
		"errorText",
		"fill",
		"helperText",
		"inputmode",
		"label",
		"labelPlacement",
		"maxlength",
		"minlength",
		"mode",
		"name",
		"placeholder",
		"readonly",
		"required",
		"rows",
		"shape",
		"spellcheck",
		"value",
		"wrap"
	],
	methods: ["setFocus", "getInputElement"]
})], IonTextarea);
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonTextarea, [{
		type: Component,
		args: [{
			selector: "ion-textarea",
			changeDetection: ChangeDetectionStrategy.OnPush,
			template: "<ng-content></ng-content>",
			inputs: [
				"autoGrow",
				"autocapitalize",
				"autofocus",
				"clearOnEdit",
				"color",
				"cols",
				"counter",
				"counterFormatter",
				"debounce",
				"disabled",
				"enterkeyhint",
				"errorText",
				"fill",
				"helperText",
				"inputmode",
				"label",
				"labelPlacement",
				"maxlength",
				"minlength",
				"mode",
				"name",
				"placeholder",
				"readonly",
				"required",
				"rows",
				"shape",
				"spellcheck",
				"value",
				"wrap"
			],
			outputs: [
				"ionChange",
				"ionInput",
				"ionBlur",
				"ionFocus"
			],
			standalone: false
		}]
	}], () => [
		{ type: ChangeDetectorRef },
		{ type: ElementRef },
		{ type: NgZone }
	], {
		ionChange: [{ type: Output }],
		ionInput: [{ type: Output }],
		ionBlur: [{ type: Output }],
		ionFocus: [{ type: Output }]
	});
})();
var IonThumbnail = class IonThumbnail {
	z;
	el;
	constructor(c, r, z) {
		this.z = z;
		c.detach();
		this.el = r.nativeElement;
	}
	/** @nocollapse */
	static ɵfac = function IonThumbnail_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || IonThumbnail)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
	};
	/** @nocollapse */
	static ɵcmp = /* @__PURE__ */ ɵɵdefineComponent({
		type: IonThumbnail,
		selectors: [["ion-thumbnail"]],
		standalone: false,
		ngContentSelectors: _c0$4,
		decls: 1,
		vars: 0,
		template: function IonThumbnail_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵprojectionDef();
				ɵɵprojection(0);
			}
		},
		encapsulation: 2
	});
};
IonThumbnail = __decorate([ProxyCmp({})], IonThumbnail);
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonThumbnail, [{
		type: Component,
		args: [{
			selector: "ion-thumbnail",
			changeDetection: ChangeDetectionStrategy.OnPush,
			template: "<ng-content></ng-content>",
			inputs: [],
			standalone: false
		}]
	}], () => [
		{ type: ChangeDetectorRef },
		{ type: ElementRef },
		{ type: NgZone }
	], null);
})();
var IonTitle = class IonTitle {
	z;
	el;
	constructor(c, r, z) {
		this.z = z;
		c.detach();
		this.el = r.nativeElement;
	}
	/** @nocollapse */
	static ɵfac = function IonTitle_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || IonTitle)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
	};
	/** @nocollapse */
	static ɵcmp = /* @__PURE__ */ ɵɵdefineComponent({
		type: IonTitle,
		selectors: [["ion-title"]],
		inputs: {
			color: "color",
			size: "size"
		},
		standalone: false,
		ngContentSelectors: _c0$4,
		decls: 1,
		vars: 0,
		template: function IonTitle_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵprojectionDef();
				ɵɵprojection(0);
			}
		},
		encapsulation: 2
	});
};
IonTitle = __decorate([ProxyCmp({ inputs: ["color", "size"] })], IonTitle);
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonTitle, [{
		type: Component,
		args: [{
			selector: "ion-title",
			changeDetection: ChangeDetectionStrategy.OnPush,
			template: "<ng-content></ng-content>",
			inputs: ["color", "size"],
			standalone: false
		}]
	}], () => [
		{ type: ChangeDetectorRef },
		{ type: ElementRef },
		{ type: NgZone }
	], null);
})();
var IonToast = class IonToast {
	z;
	el;
	ionToastDidPresent = new EventEmitter();
	ionToastWillPresent = new EventEmitter();
	ionToastWillDismiss = new EventEmitter();
	ionToastDidDismiss = new EventEmitter();
	didPresent = new EventEmitter();
	willPresent = new EventEmitter();
	willDismiss = new EventEmitter();
	didDismiss = new EventEmitter();
	constructor(c, r, z) {
		this.z = z;
		c.detach();
		this.el = r.nativeElement;
	}
	/** @nocollapse */
	static ɵfac = function IonToast_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || IonToast)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
	};
	/** @nocollapse */
	static ɵcmp = /* @__PURE__ */ ɵɵdefineComponent({
		type: IonToast,
		selectors: [["ion-toast"]],
		inputs: {
			animated: "animated",
			buttons: "buttons",
			color: "color",
			cssClass: "cssClass",
			duration: "duration",
			enterAnimation: "enterAnimation",
			header: "header",
			htmlAttributes: "htmlAttributes",
			icon: "icon",
			isOpen: "isOpen",
			keyboardClose: "keyboardClose",
			layout: "layout",
			leaveAnimation: "leaveAnimation",
			message: "message",
			mode: "mode",
			position: "position",
			positionAnchor: "positionAnchor",
			swipeGesture: "swipeGesture",
			translucent: "translucent",
			trigger: "trigger"
		},
		outputs: {
			ionToastDidPresent: "ionToastDidPresent",
			ionToastWillPresent: "ionToastWillPresent",
			ionToastWillDismiss: "ionToastWillDismiss",
			ionToastDidDismiss: "ionToastDidDismiss",
			didPresent: "didPresent",
			willPresent: "willPresent",
			willDismiss: "willDismiss",
			didDismiss: "didDismiss"
		},
		standalone: false,
		ngContentSelectors: _c0$4,
		decls: 1,
		vars: 0,
		template: function IonToast_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵprojectionDef();
				ɵɵprojection(0);
			}
		},
		encapsulation: 2
	});
};
IonToast = __decorate([ProxyCmp({
	inputs: [
		"animated",
		"buttons",
		"color",
		"cssClass",
		"duration",
		"enterAnimation",
		"header",
		"htmlAttributes",
		"icon",
		"isOpen",
		"keyboardClose",
		"layout",
		"leaveAnimation",
		"message",
		"mode",
		"position",
		"positionAnchor",
		"swipeGesture",
		"translucent",
		"trigger"
	],
	methods: [
		"present",
		"dismiss",
		"onDidDismiss",
		"onWillDismiss"
	]
})], IonToast);
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonToast, [{
		type: Component,
		args: [{
			selector: "ion-toast",
			changeDetection: ChangeDetectionStrategy.OnPush,
			template: "<ng-content></ng-content>",
			inputs: [
				"animated",
				"buttons",
				"color",
				"cssClass",
				"duration",
				"enterAnimation",
				"header",
				"htmlAttributes",
				"icon",
				"isOpen",
				"keyboardClose",
				"layout",
				"leaveAnimation",
				"message",
				"mode",
				"position",
				"positionAnchor",
				"swipeGesture",
				"translucent",
				"trigger"
			],
			outputs: [
				"ionToastDidPresent",
				"ionToastWillPresent",
				"ionToastWillDismiss",
				"ionToastDidDismiss",
				"didPresent",
				"willPresent",
				"willDismiss",
				"didDismiss"
			],
			standalone: false
		}]
	}], () => [
		{ type: ChangeDetectorRef },
		{ type: ElementRef },
		{ type: NgZone }
	], {
		ionToastDidPresent: [{ type: Output }],
		ionToastWillPresent: [{ type: Output }],
		ionToastWillDismiss: [{ type: Output }],
		ionToastDidDismiss: [{ type: Output }],
		didPresent: [{ type: Output }],
		willPresent: [{ type: Output }],
		willDismiss: [{ type: Output }],
		didDismiss: [{ type: Output }]
	});
})();
var IonToggle = class IonToggle {
	z;
	el;
	ionChange = new EventEmitter();
	ionFocus = new EventEmitter();
	ionBlur = new EventEmitter();
	constructor(c, r, z) {
		this.z = z;
		c.detach();
		this.el = r.nativeElement;
	}
	/** @nocollapse */
	static ɵfac = function IonToggle_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || IonToggle)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
	};
	/** @nocollapse */
	static ɵcmp = /* @__PURE__ */ ɵɵdefineComponent({
		type: IonToggle,
		selectors: [["ion-toggle"]],
		inputs: {
			alignment: "alignment",
			checked: "checked",
			color: "color",
			disabled: "disabled",
			enableOnOffLabels: "enableOnOffLabels",
			errorText: "errorText",
			helperText: "helperText",
			justify: "justify",
			labelPlacement: "labelPlacement",
			mode: "mode",
			name: "name",
			required: "required",
			value: "value"
		},
		outputs: {
			ionChange: "ionChange",
			ionFocus: "ionFocus",
			ionBlur: "ionBlur"
		},
		standalone: false,
		ngContentSelectors: _c0$4,
		decls: 1,
		vars: 0,
		template: function IonToggle_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵprojectionDef();
				ɵɵprojection(0);
			}
		},
		encapsulation: 2
	});
};
IonToggle = __decorate([ProxyCmp({ inputs: [
	"alignment",
	"checked",
	"color",
	"disabled",
	"enableOnOffLabels",
	"errorText",
	"helperText",
	"justify",
	"labelPlacement",
	"mode",
	"name",
	"required",
	"value"
] })], IonToggle);
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonToggle, [{
		type: Component,
		args: [{
			selector: "ion-toggle",
			changeDetection: ChangeDetectionStrategy.OnPush,
			template: "<ng-content></ng-content>",
			inputs: [
				"alignment",
				"checked",
				"color",
				"disabled",
				"enableOnOffLabels",
				"errorText",
				"helperText",
				"justify",
				"labelPlacement",
				"mode",
				"name",
				"required",
				"value"
			],
			outputs: [
				"ionChange",
				"ionFocus",
				"ionBlur"
			],
			standalone: false
		}]
	}], () => [
		{ type: ChangeDetectorRef },
		{ type: ElementRef },
		{ type: NgZone }
	], {
		ionChange: [{ type: Output }],
		ionFocus: [{ type: Output }],
		ionBlur: [{ type: Output }]
	});
})();
var IonToolbar = class IonToolbar {
	z;
	el;
	constructor(c, r, z) {
		this.z = z;
		c.detach();
		this.el = r.nativeElement;
	}
	/** @nocollapse */
	static ɵfac = function IonToolbar_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || IonToolbar)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
	};
	/** @nocollapse */
	static ɵcmp = /* @__PURE__ */ ɵɵdefineComponent({
		type: IonToolbar,
		selectors: [["ion-toolbar"]],
		inputs: {
			color: "color",
			mode: "mode"
		},
		standalone: false,
		ngContentSelectors: _c0$4,
		decls: 1,
		vars: 0,
		template: function IonToolbar_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵprojectionDef();
				ɵɵprojection(0);
			}
		},
		encapsulation: 2
	});
};
IonToolbar = __decorate([ProxyCmp({ inputs: ["color", "mode"] })], IonToolbar);
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonToolbar, [{
		type: Component,
		args: [{
			selector: "ion-toolbar",
			changeDetection: ChangeDetectionStrategy.OnPush,
			template: "<ng-content></ng-content>",
			inputs: ["color", "mode"],
			standalone: false
		}]
	}], () => [
		{ type: ChangeDetectorRef },
		{ type: ElementRef },
		{ type: NgZone }
	], null);
})();
//#endregion
//#region node_modules/@ionic/angular/dist/lazy/directives/navigation/ion-router-outlet.js
var _c0$3 = ["outletContent"];
var _c1$1 = ["*"];
var IonRouterOutlet = class IonRouterOutlet extends IonRouterOutlet$1 {
	parentOutlet;
	/**
	* `static: true` must be set so the query results are resolved
	* before change detection runs. Otherwise, the view container
	* ref will be ion-router-outlet instead of ng-container, and
	* the first view will be added as a sibling of ion-router-outlet
	* instead of a child.
	*/
	outletContent;
	/**
	* We need to pass in the correct instance of IonRouterOutlet
	* otherwise parentOutlet will be null in a nested outlet context.
	* This results in APIs such as NavController.pop not working
	* in nested outlets because the parent outlet cannot be found.
	*/
	constructor(name, tabs, commonLocation, elementRef, router, zone, activatedRoute, parentOutlet) {
		super(name, tabs, commonLocation, elementRef, router, zone, activatedRoute, parentOutlet);
		this.parentOutlet = parentOutlet;
	}
	/** @nocollapse */
	static ɵfac = function IonRouterOutlet_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || IonRouterOutlet)(ɵɵinjectAttribute("name"), ɵɵinjectAttribute("tabs"), ɵɵdirectiveInject(Location), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Router), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(ActivatedRoute), ɵɵdirectiveInject(IonRouterOutlet, 12));
	};
	/** @nocollapse */
	static ɵcmp = /* @__PURE__ */ ɵɵdefineComponent({
		type: IonRouterOutlet,
		selectors: [["ion-router-outlet"]],
		viewQuery: function IonRouterOutlet_Query(rf, ctx) {
			if (rf & 1) ɵɵviewQuery(_c0$3, 7, ViewContainerRef);
			if (rf & 2) {
				let _t;
				ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.outletContent = _t.first);
			}
		},
		standalone: false,
		features: [ɵɵInheritDefinitionFeature],
		ngContentSelectors: _c1$1,
		decls: 3,
		vars: 0,
		consts: [["outletContent", ""]],
		template: function IonRouterOutlet_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵprojectionDef();
				ɵɵelementContainerStart(0, null, 0);
				ɵɵprojection(2);
				ɵɵelementContainerEnd();
			}
		},
		encapsulation: 2,
		changeDetection: 1
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonRouterOutlet, [{
		type: Component,
		args: [{
			standalone: false,
			selector: "ion-router-outlet",
			changeDetection: ChangeDetectionStrategy.Default,
			template: "<ng-container #outletContent><ng-content></ng-content></ng-container>"
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
	], { outletContent: [{
		type: ViewChild,
		args: ["outletContent", {
			read: ViewContainerRef,
			static: true
		}]
	}] });
})();
//#endregion
//#region node_modules/@ionic/angular/dist/lazy/directives/navigation/ion-tabs.js
var _c0$2 = ["outlet"];
var _c1 = [
	[[
		"",
		"slot",
		"top"
	]],
	"*",
	[["ion-tab"]]
];
var _c2 = [
	"[slot=top]",
	"*",
	"ion-tab"
];
var _c3 = ["*ngIf", "tabs.length > 0"];
function IonTabs_ion_router_outlet_3_Template(rf, ctx) {
	if (rf & 1) {
		const _r1 = ɵɵgetCurrentView();
		ɵɵelementStart(0, "ion-router-outlet", 5, 1);
		ɵɵlistener("stackWillChange", function IonTabs_ion_router_outlet_3_Template_ion_router_outlet_stackWillChange_0_listener($event) {
			ɵɵrestoreView(_r1);
			return ɵɵresetView(ɵɵnextContext().onStackWillChange($event));
		})("stackDidChange", function IonTabs_ion_router_outlet_3_Template_ion_router_outlet_stackDidChange_0_listener($event) {
			ɵɵrestoreView(_r1);
			return ɵɵresetView(ɵɵnextContext().onStackDidChange($event));
		});
		ɵɵelementEnd();
	}
}
function IonTabs_ng_content_4_Template(rf, ctx) {
	if (rf & 1) ɵɵprojection(0, 2, _c3);
}
var IonTabs = class IonTabs extends IonTabs$1 {
	outlet;
	tabBar;
	tabBars;
	tabs;
	/** @nocollapse */
	static ɵfac = /* @__PURE__ */ (() => {
		let ɵIonTabs_BaseFactory;
		return function IonTabs_Factory(__ngFactoryType__) {
			return (ɵIonTabs_BaseFactory || (ɵIonTabs_BaseFactory = ɵɵgetInheritedFactory(IonTabs)))(__ngFactoryType__ || IonTabs);
		};
	})();
	/** @nocollapse */
	static ɵcmp = /* @__PURE__ */ ɵɵdefineComponent({
		type: IonTabs,
		selectors: [["ion-tabs"]],
		contentQueries: function IonTabs_ContentQueries(rf, ctx, dirIndex) {
			if (rf & 1) ɵɵcontentQuery(dirIndex, IonTabBar, 5)(dirIndex, IonTabBar, 4)(dirIndex, IonTab, 4);
			if (rf & 2) {
				let _t;
				ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.tabBar = _t.first);
				ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.tabBars = _t);
				ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.tabs = _t);
			}
		},
		viewQuery: function IonTabs_Query(rf, ctx) {
			if (rf & 1) ɵɵviewQuery(_c0$2, 5, IonRouterOutlet);
			if (rf & 2) {
				let _t;
				ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.outlet = _t.first);
			}
		},
		standalone: false,
		features: [ɵɵInheritDefinitionFeature],
		ngContentSelectors: _c2,
		decls: 6,
		vars: 2,
		consts: [
			["tabsInner", ""],
			["outlet", ""],
			[1, "tabs-inner"],
			[
				"tabs",
				"true",
				3,
				"stackWillChange",
				"stackDidChange",
				4,
				"ngIf"
			],
			[4, "ngIf"],
			[
				"tabs",
				"true",
				3,
				"stackWillChange",
				"stackDidChange"
			]
		],
		template: function IonTabs_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵprojectionDef(_c1);
				ɵɵprojection(0);
				ɵɵelementStart(1, "div", 2, 0);
				ɵɵtemplate(3, IonTabs_ion_router_outlet_3_Template, 2, 0, "ion-router-outlet", 3)(4, IonTabs_ng_content_4_Template, 1, 0, "ng-content", 4);
				ɵɵelementEnd();
				ɵɵprojection(5, 1);
			}
			if (rf & 2) {
				ɵɵadvance(3);
				ɵɵproperty("ngIf", ctx.tabs.length === 0);
				ɵɵadvance();
				ɵɵproperty("ngIf", ctx.tabs.length > 0);
			}
		},
		dependencies: [NgIf, IonRouterOutlet],
		styles: ["[_nghost-%COMP%] {\n        display: flex;\n        position: absolute;\n        top: 0;\n        left: 0;\n        right: 0;\n        bottom: 0;\n\n        flex-direction: column;\n\n        width: 100%;\n        height: 100%;\n\n        contain: layout size style;\n      }\n      .tabs-inner[_ngcontent-%COMP%] {\n        position: relative;\n\n        flex: 1;\n\n        contain: layout size style;\n      }"],
		changeDetection: 1
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonTabs, [{
		type: Component,
		args: [{
			standalone: false,
			selector: "ion-tabs",
			changeDetection: ChangeDetectionStrategy.Default,
			template: `
    <ng-content select="[slot=top]"></ng-content>
    <div class="tabs-inner" #tabsInner>
      <ion-router-outlet
        *ngIf="tabs.length === 0"
        #outlet
        tabs="true"
        (stackWillChange)="onStackWillChange($event)"
        (stackDidChange)="onStackDidChange($event)"
      ></ion-router-outlet>
      <ng-content *ngIf="tabs.length > 0" select="ion-tab"></ng-content>
    </div>
    <ng-content></ng-content>
  `,
			styles: ["\n      :host {\n        display: flex;\n        position: absolute;\n        top: 0;\n        left: 0;\n        right: 0;\n        bottom: 0;\n\n        flex-direction: column;\n\n        width: 100%;\n        height: 100%;\n\n        contain: layout size style;\n      }\n      .tabs-inner {\n        position: relative;\n\n        flex: 1;\n\n        contain: layout size style;\n      }\n    "]
		}]
	}], null, {
		outlet: [{
			type: ViewChild,
			args: ["outlet", {
				read: IonRouterOutlet,
				static: false
			}]
		}],
		tabBar: [{
			type: ContentChild,
			args: [IonTabBar, { static: false }]
		}],
		tabBars: [{
			type: ContentChildren,
			args: [IonTabBar]
		}],
		tabs: [{
			type: ContentChildren,
			args: [IonTab]
		}]
	});
})();
//#endregion
//#region node_modules/@ionic/angular/dist/lazy/directives/navigation/ion-back-button.js
var _c0$1 = ["*"];
var IonBackButton = class IonBackButton extends IonBackButton$1 {
	constructor(routerOutlet, navCtrl, config, r, z, c) {
		super(routerOutlet, navCtrl, config, r, z, c);
	}
	/** @nocollapse */
	static ɵfac = function IonBackButton_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || IonBackButton)(ɵɵdirectiveInject(IonRouterOutlet, 8), ɵɵdirectiveInject(NavController), ɵɵdirectiveInject(Config), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(ChangeDetectorRef));
	};
	/** @nocollapse */
	static ɵcmp = /* @__PURE__ */ ɵɵdefineComponent({
		type: IonBackButton,
		selectors: [["ion-back-button"]],
		standalone: false,
		features: [ɵɵInheritDefinitionFeature],
		ngContentSelectors: _c0$1,
		decls: 1,
		vars: 0,
		template: function IonBackButton_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵprojectionDef();
				ɵɵprojection(0);
			}
		},
		encapsulation: 2
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonBackButton, [{
		type: Component,
		args: [{
			standalone: false,
			selector: "ion-back-button",
			template: "<ng-content></ng-content>",
			changeDetection: ChangeDetectionStrategy.OnPush
		}]
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
	], null);
})();
//#endregion
//#region node_modules/@ionic/angular/dist/lazy/directives/navigation/ion-nav.js
var _c0 = ["*"];
var IonNav = class IonNav extends IonNav$1 {
	constructor(ref, environmentInjector, injector, angularDelegate, z, c) {
		super(ref, environmentInjector, injector, angularDelegate, z, c);
	}
	/** @nocollapse */
	static ɵfac = function IonNav_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || IonNav)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(EnvironmentInjector), ɵɵdirectiveInject(Injector), ɵɵdirectiveInject(AngularDelegate), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(ChangeDetectorRef));
	};
	/** @nocollapse */
	static ɵcmp = /* @__PURE__ */ ɵɵdefineComponent({
		type: IonNav,
		selectors: [["ion-nav"]],
		standalone: false,
		features: [ɵɵInheritDefinitionFeature],
		ngContentSelectors: _c0,
		decls: 1,
		vars: 0,
		template: function IonNav_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵprojectionDef();
				ɵɵprojection(0);
			}
		},
		encapsulation: 2
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonNav, [{
		type: Component,
		args: [{
			standalone: false,
			selector: "ion-nav",
			template: "<ng-content></ng-content>",
			changeDetection: ChangeDetectionStrategy.OnPush
		}]
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
//#region node_modules/@ionic/angular/dist/lazy/directives/navigation/router-link-delegate.js
/**
* Adds support for Ionic routing directions and animations to the base Angular router link directive.
*
* When the router link is clicked, the directive will assign the direction and
* animation so that the routing integration will transition correctly.
*/
var RouterLinkDelegateDirective = class RouterLinkDelegateDirective extends RouterLinkDelegateDirective$1 {
	/** @nocollapse */ static ɵfac = /* @__PURE__ */ (() => {
		let ɵRouterLinkDelegateDirective_BaseFactory;
		return function RouterLinkDelegateDirective_Factory(__ngFactoryType__) {
			return (ɵRouterLinkDelegateDirective_BaseFactory || (ɵRouterLinkDelegateDirective_BaseFactory = ɵɵgetInheritedFactory(RouterLinkDelegateDirective)))(__ngFactoryType__ || RouterLinkDelegateDirective);
		};
	})();
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
		standalone: false,
		features: [ɵɵInheritDefinitionFeature]
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RouterLinkDelegateDirective, [{
		type: Directive,
		args: [{
			standalone: false,
			selector: ":not(a):not(area)[routerLink]"
		}]
	}], null, null);
})();
var RouterLinkWithHrefDelegateDirective = class RouterLinkWithHrefDelegateDirective extends RouterLinkWithHrefDelegateDirective$1 {
	/** @nocollapse */ static ɵfac = /* @__PURE__ */ (() => {
		let ɵRouterLinkWithHrefDelegateDirective_BaseFactory;
		return function RouterLinkWithHrefDelegateDirective_Factory(__ngFactoryType__) {
			return (ɵRouterLinkWithHrefDelegateDirective_BaseFactory || (ɵRouterLinkWithHrefDelegateDirective_BaseFactory = ɵɵgetInheritedFactory(RouterLinkWithHrefDelegateDirective)))(__ngFactoryType__ || RouterLinkWithHrefDelegateDirective);
		};
	})();
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
		standalone: false,
		features: [ɵɵInheritDefinitionFeature]
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RouterLinkWithHrefDelegateDirective, [{
		type: Directive,
		args: [{
			standalone: false,
			selector: "a[routerLink],area[routerLink]"
		}]
	}], null, null);
})();
//#endregion
//#region node_modules/@ionic/angular/dist/lazy/directives/overlays/modal.js
function IonModal_div_0_Template(rf, ctx) {
	if (rf & 1) {
		ɵɵelementStart(0, "div", 1);
		ɵɵelementContainer(1, 2);
		ɵɵelementEnd();
	}
	if (rf & 2) {
		const ctx_r0 = ɵɵnextContext();
		ɵɵadvance();
		ɵɵproperty("ngTemplateOutlet", ctx_r0.template);
	}
}
var IonModal = class IonModal extends IonModal$1 {
	/** @nocollapse */ static ɵfac = /* @__PURE__ */ (() => {
		let ɵIonModal_BaseFactory;
		return function IonModal_Factory(__ngFactoryType__) {
			return (ɵIonModal_BaseFactory || (ɵIonModal_BaseFactory = ɵɵgetInheritedFactory(IonModal)))(__ngFactoryType__ || IonModal);
		};
	})();
	/** @nocollapse */
	static ɵcmp = /* @__PURE__ */ ɵɵdefineComponent({
		type: IonModal,
		selectors: [["ion-modal"]],
		standalone: false,
		features: [ɵɵInheritDefinitionFeature],
		decls: 1,
		vars: 1,
		consts: [
			[
				"class",
				"ion-delegate-host ion-page",
				4,
				"ngIf"
			],
			[
				1,
				"ion-delegate-host",
				"ion-page"
			],
			[3, "ngTemplateOutlet"]
		],
		template: function IonModal_Template(rf, ctx) {
			if (rf & 1) ɵɵtemplate(0, IonModal_div_0_Template, 2, 1, "div", 0);
			if (rf & 2) ɵɵproperty("ngIf", ctx.isCmpOpen || ctx.keepContentsMounted);
		},
		dependencies: [NgIf, NgTemplateOutlet],
		encapsulation: 2
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonModal, [{
		type: Component,
		args: [{
			standalone: false,
			selector: "ion-modal",
			changeDetection: ChangeDetectionStrategy.OnPush,
			template: `<div class="ion-delegate-host ion-page" *ngIf="isCmpOpen || keepContentsMounted">
    <ng-container [ngTemplateOutlet]="template"></ng-container>
  </div>`
		}]
	}], null, null);
})();
//#endregion
//#region node_modules/@ionic/angular/dist/lazy/directives/overlays/popover.js
function IonPopover_ng_container_0_Template(rf, ctx) {
	if (rf & 1) ɵɵelementContainer(0, 1);
	if (rf & 2) ɵɵproperty("ngTemplateOutlet", ɵɵnextContext().template);
}
var IonPopover = class IonPopover extends IonPopover$1 {
	/** @nocollapse */ static ɵfac = /* @__PURE__ */ (() => {
		let ɵIonPopover_BaseFactory;
		return function IonPopover_Factory(__ngFactoryType__) {
			return (ɵIonPopover_BaseFactory || (ɵIonPopover_BaseFactory = ɵɵgetInheritedFactory(IonPopover)))(__ngFactoryType__ || IonPopover);
		};
	})();
	/** @nocollapse */
	static ɵcmp = /* @__PURE__ */ ɵɵdefineComponent({
		type: IonPopover,
		selectors: [["ion-popover"]],
		standalone: false,
		features: [ɵɵInheritDefinitionFeature],
		decls: 1,
		vars: 1,
		consts: [[
			3,
			"ngTemplateOutlet",
			4,
			"ngIf"
		], [3, "ngTemplateOutlet"]],
		template: function IonPopover_Template(rf, ctx) {
			if (rf & 1) ɵɵtemplate(0, IonPopover_ng_container_0_Template, 1, 1, "ng-container", 0);
			if (rf & 2) ɵɵproperty("ngIf", ctx.isCmpOpen || ctx.keepContentsMounted);
		},
		dependencies: [NgIf, NgTemplateOutlet],
		encapsulation: 2
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonPopover, [{
		type: Component,
		args: [{
			standalone: false,
			selector: "ion-popover",
			changeDetection: ChangeDetectionStrategy.OnPush,
			template: `<ng-container [ngTemplateOutlet]="template" *ngIf="isCmpOpen || keepContentsMounted"></ng-container>`
		}]
	}], null, null);
})();
//#endregion
//#region node_modules/@ionic/angular/dist/lazy/directives/validators/max-validator.js
/**
* @description
* Provider which adds `MaxValidator` to the `NG_VALIDATORS` multi-provider list.
*/
var ION_MAX_VALIDATOR = {
	provide: NG_VALIDATORS,
	useExisting: forwardRef(() => IonMaxValidator),
	multi: true
};
var IonMaxValidator = class IonMaxValidator extends MaxValidator {
	/** @nocollapse */ static ɵfac = /* @__PURE__ */ (() => {
		let ɵIonMaxValidator_BaseFactory;
		return function IonMaxValidator_Factory(__ngFactoryType__) {
			return (ɵIonMaxValidator_BaseFactory || (ɵIonMaxValidator_BaseFactory = ɵɵgetInheritedFactory(IonMaxValidator)))(__ngFactoryType__ || IonMaxValidator);
		};
	})();
	/** @nocollapse */
	static ɵdir = /* @__PURE__ */ ɵɵdefineDirective({
		type: IonMaxValidator,
		selectors: [
			[
				"ion-input",
				"type",
				"number",
				"max",
				"",
				"formControlName",
				""
			],
			[
				"ion-input",
				"type",
				"number",
				"max",
				"",
				"formControl",
				""
			],
			[
				"ion-input",
				"type",
				"number",
				"max",
				"",
				"ngModel",
				""
			]
		],
		hostVars: 1,
		hostBindings: function IonMaxValidator_HostBindings(rf, ctx) {
			if (rf & 2) ɵɵattribute("max", ctx.enabled(ctx.max) ? ctx.max : null);
		},
		standalone: false,
		features: [ɵɵProvidersFeature([ION_MAX_VALIDATOR]), ɵɵInheritDefinitionFeature]
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonMaxValidator, [{
		type: Directive,
		args: [{
			standalone: false,
			selector: "ion-input[type=number][max][formControlName],ion-input[type=number][max][formControl],ion-input[type=number][max][ngModel]",
			providers: [ION_MAX_VALIDATOR],
			host: { "[attr.max]": "enabled(max) ? max : null" }
		}]
	}], null, null);
})();
//#endregion
//#region node_modules/@ionic/angular/dist/lazy/directives/validators/min-validator.js
/**
* @description
* Provider which adds `MinValidator` to the `NG_VALIDATORS` multi-provider list.
*/
var ION_MIN_VALIDATOR = {
	provide: NG_VALIDATORS,
	useExisting: forwardRef(() => IonMinValidator),
	multi: true
};
var IonMinValidator = class IonMinValidator extends MinValidator {
	/** @nocollapse */ static ɵfac = /* @__PURE__ */ (() => {
		let ɵIonMinValidator_BaseFactory;
		return function IonMinValidator_Factory(__ngFactoryType__) {
			return (ɵIonMinValidator_BaseFactory || (ɵIonMinValidator_BaseFactory = ɵɵgetInheritedFactory(IonMinValidator)))(__ngFactoryType__ || IonMinValidator);
		};
	})();
	/** @nocollapse */
	static ɵdir = /* @__PURE__ */ ɵɵdefineDirective({
		type: IonMinValidator,
		selectors: [
			[
				"ion-input",
				"type",
				"number",
				"min",
				"",
				"formControlName",
				""
			],
			[
				"ion-input",
				"type",
				"number",
				"min",
				"",
				"formControl",
				""
			],
			[
				"ion-input",
				"type",
				"number",
				"min",
				"",
				"ngModel",
				""
			]
		],
		hostVars: 1,
		hostBindings: function IonMinValidator_HostBindings(rf, ctx) {
			if (rf & 2) ɵɵattribute("min", ctx.enabled(ctx.min) ? ctx.min : null);
		},
		standalone: false,
		features: [ɵɵProvidersFeature([ION_MIN_VALIDATOR]), ɵɵInheritDefinitionFeature]
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonMinValidator, [{
		type: Directive,
		args: [{
			standalone: false,
			selector: "ion-input[type=number][min][formControlName],ion-input[type=number][min][formControl],ion-input[type=number][min][ngModel]",
			providers: [ION_MIN_VALIDATOR],
			host: { "[attr.min]": "enabled(min) ? min : null" }
		}]
	}], null, null);
})();
//#endregion
//#region node_modules/@ionic/core/dist/esm/ios.transition-ofa92pAl.js
/*!
* (C) Ionic http://ionicframework.com - MIT License
*/
var ios_transition_ofa92pAl_exports = /* @__PURE__ */ __exportAll({
	iosTransitionAnimation: () => iosTransitionAnimation,
	shadow: () => shadow
});
var DURATION = 540;
var getClonedElement = (tagName) => {
	return document.querySelector(`${tagName}.ion-cloned-element`);
};
var shadow = (el) => {
	return el.shadowRoot || el;
};
var getLargeTitle = (refEl) => {
	const tabs = refEl.tagName === "ION-TABS" ? refEl : refEl.querySelector("ion-tabs");
	const query = "ion-content ion-header:not(.header-collapse-condense-inactive) ion-title.title-large";
	if (tabs != null) {
		const activeTab = tabs.querySelector("ion-tab:not(.tab-hidden), .ion-page:not(.ion-page-hidden)");
		return activeTab != null ? activeTab.querySelector(query) : null;
	}
	return refEl.querySelector(query);
};
var getBackButton = (refEl, backDirection) => {
	const tabs = refEl.tagName === "ION-TABS" ? refEl : refEl.querySelector("ion-tabs");
	let buttonsList = [];
	if (tabs != null) {
		const activeTab = tabs.querySelector("ion-tab:not(.tab-hidden), .ion-page:not(.ion-page-hidden)");
		if (activeTab != null) buttonsList = activeTab.querySelectorAll("ion-buttons");
	} else buttonsList = refEl.querySelectorAll("ion-buttons");
	for (const buttons of buttonsList) {
		const parentHeader = buttons.closest("ion-header");
		const activeHeader = parentHeader && !parentHeader.classList.contains("header-collapse-condense-inactive");
		const backButton = buttons.querySelector("ion-back-button");
		const buttonsCollapse = buttons.classList.contains("buttons-collapse");
		const startSlot = buttons.slot === "start" || buttons.slot === "";
		if (backButton !== null && startSlot && (buttonsCollapse && activeHeader && backDirection || !buttonsCollapse)) return backButton;
	}
	return null;
};
var createLargeTitleTransition = (rootAnimation, rtl, backDirection, enteringEl, leavingEl) => {
	const enteringBackButton = getBackButton(enteringEl, backDirection);
	const leavingLargeTitle = getLargeTitle(leavingEl);
	const enteringLargeTitle = getLargeTitle(enteringEl);
	const leavingBackButton = getBackButton(leavingEl, backDirection);
	const shouldAnimationForward = enteringBackButton !== null && leavingLargeTitle !== null && !backDirection;
	const shouldAnimationBackward = enteringLargeTitle !== null && leavingBackButton !== null && backDirection;
	if (shouldAnimationForward) {
		const leavingLargeTitleBox = leavingLargeTitle.getBoundingClientRect();
		const enteringBackButtonBox = enteringBackButton.getBoundingClientRect();
		const enteringBackButtonTextEl = shadow(enteringBackButton).querySelector(".button-text");
		const enteringBackButtonTextBox = enteringBackButtonTextEl?.getBoundingClientRect();
		const leavingLargeTitleTextBox = shadow(leavingLargeTitle).querySelector(".toolbar-title").getBoundingClientRect();
		animateLargeTitle(rootAnimation, rtl, backDirection, leavingLargeTitle, leavingLargeTitleBox, leavingLargeTitleTextBox, enteringBackButtonBox, enteringBackButtonTextEl, enteringBackButtonTextBox);
		animateBackButton(rootAnimation, rtl, backDirection, enteringBackButton, enteringBackButtonBox, enteringBackButtonTextEl, enteringBackButtonTextBox, leavingLargeTitle, leavingLargeTitleTextBox);
	} else if (shouldAnimationBackward) {
		const enteringLargeTitleBox = enteringLargeTitle.getBoundingClientRect();
		const leavingBackButtonBox = leavingBackButton.getBoundingClientRect();
		const leavingBackButtonTextEl = shadow(leavingBackButton).querySelector(".button-text");
		const leavingBackButtonTextBox = leavingBackButtonTextEl?.getBoundingClientRect();
		const enteringLargeTitleTextBox = shadow(enteringLargeTitle).querySelector(".toolbar-title").getBoundingClientRect();
		animateLargeTitle(rootAnimation, rtl, backDirection, enteringLargeTitle, enteringLargeTitleBox, enteringLargeTitleTextBox, leavingBackButtonBox, leavingBackButtonTextEl, leavingBackButtonTextBox);
		animateBackButton(rootAnimation, rtl, backDirection, leavingBackButton, leavingBackButtonBox, leavingBackButtonTextEl, leavingBackButtonTextBox, enteringLargeTitle, enteringLargeTitleTextBox);
	}
	return {
		forward: shouldAnimationForward,
		backward: shouldAnimationBackward
	};
};
var animateBackButton = (rootAnimation, rtl, backDirection, backButtonEl, backButtonBox, backButtonTextEl, backButtonTextBox, largeTitleEl, largeTitleTextBox) => {
	const BACK_BUTTON_START_OFFSET = rtl ? `calc(100% - ${backButtonBox.right + 4}px)` : `${backButtonBox.left - 4}px`;
	const TEXT_ORIGIN_X = rtl ? "right" : "left";
	const ICON_ORIGIN_X = rtl ? "left" : "right";
	const CONTAINER_ORIGIN_X = rtl ? "right" : "left";
	let WIDTH_SCALE = 1;
	let HEIGHT_SCALE = 1;
	let TEXT_START_SCALE = `scale(${HEIGHT_SCALE})`;
	const TEXT_END_SCALE = "scale(1)";
	if (backButtonTextEl && backButtonTextBox) {
		/**
		* When the title and back button texts match then they should overlap during the
		* page transition. If the texts do not match up then the back button text scale
		* adjusts to not perfectly match the large title text otherwise the proportions
		* will be incorrect. When the texts match we scale both the width and height to
		* account for font weight differences between the title and back button.
		*/
		const doTitleAndButtonTextsMatch = backButtonTextEl.textContent?.trim() === largeTitleEl.textContent?.trim();
		WIDTH_SCALE = largeTitleTextBox.width / backButtonTextBox.width;
		/**
		* Subtract an offset to account for slight sizing/padding differences between the
		* title and the back button.
		*/
		HEIGHT_SCALE = (largeTitleTextBox.height - LARGE_TITLE_SIZE_OFFSET) / backButtonTextBox.height;
		/**
		* Even though we set TEXT_START_SCALE to HEIGHT_SCALE above, we potentially need
		* to re-compute this here since the HEIGHT_SCALE may have changed.
		*/
		TEXT_START_SCALE = doTitleAndButtonTextsMatch ? `scale(${WIDTH_SCALE}, ${HEIGHT_SCALE})` : `scale(${HEIGHT_SCALE})`;
	}
	const backButtonIconBox = shadow(backButtonEl).querySelector("ion-icon").getBoundingClientRect();
	/**
	* We need to offset the container by the icon dimensions
	* so that the back button text aligns with the large title
	* text. Otherwise, the back button icon will align with the
	* large title text but the back button text will not.
	*/
	const CONTAINER_START_TRANSLATE_X = rtl ? `${backButtonIconBox.width / 2 - (backButtonIconBox.right - backButtonBox.right)}px` : `${backButtonBox.left - backButtonIconBox.width / 2}px`;
	const CONTAINER_END_TRANSLATE_X = rtl ? `-${window.innerWidth - backButtonBox.right}px` : `${backButtonBox.left}px`;
	/**
	* Back button container should be
	* aligned to the top of the title container
	* so the texts overlap as the back button
	* text begins to fade in.
	*/
	const CONTAINER_START_TRANSLATE_Y = `${largeTitleTextBox.top}px`;
	/**
	* The cloned back button should align exactly with the
	* real back button on the entering page otherwise there will
	* be a layout shift.
	*/
	const CONTAINER_END_TRANSLATE_Y = `${backButtonBox.top}px`;
	/**
	* In the forward direction, the cloned back button
	* container should translate from over the large title
	* to over the back button. In the backward direction,
	* it should translate from over the back button to over
	* the large title.
	*/
	const FORWARD_CONTAINER_KEYFRAMES = [{
		offset: 0,
		transform: `translate3d(${CONTAINER_START_TRANSLATE_X}, ${CONTAINER_START_TRANSLATE_Y}, 0)`
	}, {
		offset: 1,
		transform: `translate3d(${CONTAINER_END_TRANSLATE_X}, ${CONTAINER_END_TRANSLATE_Y}, 0)`
	}];
	const BACKWARD_CONTAINER_KEYFRAMES = [{
		offset: 0,
		transform: `translate3d(${CONTAINER_END_TRANSLATE_X}, ${CONTAINER_END_TRANSLATE_Y}, 0)`
	}, {
		offset: 1,
		transform: `translate3d(${CONTAINER_START_TRANSLATE_X}, ${CONTAINER_START_TRANSLATE_Y}, 0)`
	}];
	const CONTAINER_KEYFRAMES = backDirection ? BACKWARD_CONTAINER_KEYFRAMES : FORWARD_CONTAINER_KEYFRAMES;
	const TEXT_KEYFRAMES = backDirection ? [{
		offset: 0,
		opacity: 1,
		transform: TEXT_END_SCALE
	}, {
		offset: 1,
		opacity: 0,
		transform: TEXT_START_SCALE
	}] : [{
		offset: 0,
		opacity: 0,
		transform: TEXT_START_SCALE
	}, {
		offset: 1,
		opacity: 1,
		transform: TEXT_END_SCALE
	}];
	const ICON_KEYFRAMES = backDirection ? [
		{
			offset: 0,
			opacity: 1,
			transform: "scale(1)"
		},
		{
			offset: .2,
			opacity: 0,
			transform: "scale(0.6)"
		},
		{
			offset: 1,
			opacity: 0,
			transform: "scale(0.6)"
		}
	] : [
		{
			offset: 0,
			opacity: 0,
			transform: "scale(0.6)"
		},
		{
			offset: .6,
			opacity: 0,
			transform: "scale(0.6)"
		},
		{
			offset: 1,
			opacity: 1,
			transform: "scale(1)"
		}
	];
	const enteringBackButtonTextAnimation = createAnimation();
	const enteringBackButtonIconAnimation = createAnimation();
	const enteringBackButtonAnimation = createAnimation();
	const clonedBackButtonEl = getClonedElement("ion-back-button");
	const clonedBackButtonTextEl = shadow(clonedBackButtonEl).querySelector(".button-text");
	const clonedBackButtonIconEl = shadow(clonedBackButtonEl).querySelector("ion-icon");
	clonedBackButtonEl.text = backButtonEl.text;
	clonedBackButtonEl.mode = backButtonEl.mode;
	clonedBackButtonEl.icon = backButtonEl.icon;
	clonedBackButtonEl.color = backButtonEl.color;
	clonedBackButtonEl.disabled = backButtonEl.disabled;
	clonedBackButtonEl.style.setProperty("display", "block");
	clonedBackButtonEl.style.setProperty("position", "fixed");
	enteringBackButtonIconAnimation.addElement(clonedBackButtonIconEl);
	enteringBackButtonTextAnimation.addElement(clonedBackButtonTextEl);
	enteringBackButtonAnimation.addElement(clonedBackButtonEl);
	enteringBackButtonAnimation.beforeStyles({
		position: "absolute",
		top: "0px",
		[CONTAINER_ORIGIN_X]: "0px"
	}).beforeAddWrite(() => {
		backButtonEl.style.setProperty("display", "none");
		clonedBackButtonEl.style.setProperty(TEXT_ORIGIN_X, BACK_BUTTON_START_OFFSET);
	}).afterAddWrite(() => {
		backButtonEl.style.setProperty("display", "");
		clonedBackButtonEl.style.setProperty("display", "none");
		clonedBackButtonEl.style.removeProperty(TEXT_ORIGIN_X);
	}).keyframes(CONTAINER_KEYFRAMES);
	enteringBackButtonTextAnimation.beforeStyles({ "transform-origin": `${TEXT_ORIGIN_X} top` }).keyframes(TEXT_KEYFRAMES);
	enteringBackButtonIconAnimation.beforeStyles({ "transform-origin": `${ICON_ORIGIN_X} center` }).keyframes(ICON_KEYFRAMES);
	rootAnimation.addAnimation([
		enteringBackButtonTextAnimation,
		enteringBackButtonIconAnimation,
		enteringBackButtonAnimation
	]);
};
var animateLargeTitle = (rootAnimation, rtl, backDirection, largeTitleEl, largeTitleBox, largeTitleTextBox, backButtonBox, backButtonTextEl, backButtonTextBox) => {
	/**
	* The horizontal transform origin for the large title
	*/
	const ORIGIN_X = rtl ? "right" : "left";
	const TITLE_START_OFFSET = rtl ? `calc(100% - ${largeTitleBox.right}px)` : `${largeTitleBox.left}px`;
	/**
	* The cloned large should align exactly with the
	* real large title on the leaving page otherwise there will
	* be a layout shift.
	*/
	const START_TRANSLATE_X = "0px";
	const START_TRANSLATE_Y = `${largeTitleBox.top}px`;
	/**
	* How much to offset the large title translation by.
	* This accounts for differences in sizing between the large
	* title and the back button due to padding and font weight.
	*/
	const LARGE_TITLE_TRANSLATION_OFFSET = 8;
	let END_TRANSLATE_X = rtl ? `-${window.innerWidth - backButtonBox.right - LARGE_TITLE_TRANSLATION_OFFSET}px` : `${backButtonBox.x + LARGE_TITLE_TRANSLATION_OFFSET}px`;
	/**
	* How much to scale the large title up/down by.
	*/
	let HEIGHT_SCALE = .5;
	/**
	* The large title always starts full size.
	*/
	const START_SCALE = "scale(1)";
	/**
	* By default, we don't worry about having the large title scaled to perfectly
	* match the back button because we don't know if the back button's text matches
	* the large title's text.
	*/
	let END_SCALE = `scale(${HEIGHT_SCALE})`;
	if (backButtonTextEl && backButtonTextBox) {
		/**
		* The scaled title should (roughly) overlap the back button. This ensures that
		* the back button and title overlap during the animation. Note that since both
		* elements either fade in or fade out over the course of the animation, neither
		* element will be fully visible on top of the other. As a result, the overlap
		* does not need to be perfect, so approximate values are acceptable here.
		*/
		END_TRANSLATE_X = rtl ? `-${window.innerWidth - backButtonTextBox.right - LARGE_TITLE_TRANSLATION_OFFSET}px` : `${backButtonTextBox.x - LARGE_TITLE_TRANSLATION_OFFSET}px`;
		/**
		* In the forward direction, the large title should start at its normal size and
		* then scale down to be (roughly) the size of the back button on the other view.
		* In the backward direction, the large title should start at (roughly) the size
		* of the back button and then scale up to its original size.
		* Note that since both elements either fade in or fade out over the course of the
		* animation, neither element will be fully visible on top of the other. As a result,
		* the overlap  does not need to be perfect, so approximate values are acceptable here.
		*/
		/**
		* When the title and back button texts match then they should overlap during the
		* page transition. If the texts do not match up then the large title text scale
		* adjusts to not perfectly match the back button text otherwise the proportions
		* will be incorrect. When the texts match we scale both the width and height to
		* account for font weight differences between the title and back button.
		*/
		const doTitleAndButtonTextsMatch = backButtonTextEl.textContent?.trim() === largeTitleEl.textContent?.trim();
		const WIDTH_SCALE = backButtonTextBox.width / largeTitleTextBox.width;
		HEIGHT_SCALE = backButtonTextBox.height / (largeTitleTextBox.height - LARGE_TITLE_SIZE_OFFSET);
		/**
		* Even though we set TEXT_START_SCALE to HEIGHT_SCALE above, we potentially need
		* to re-compute this here since the HEIGHT_SCALE may have changed.
		*/
		END_SCALE = doTitleAndButtonTextsMatch ? `scale(${WIDTH_SCALE}, ${HEIGHT_SCALE})` : `scale(${HEIGHT_SCALE})`;
	}
	const END_TRANSLATE_Y = `${backButtonBox.top + backButtonBox.height / 2 - largeTitleBox.height * HEIGHT_SCALE / 2}px`;
	const BACKWARDS_KEYFRAMES = [
		{
			offset: 0,
			opacity: 0,
			transform: `translate3d(${END_TRANSLATE_X}, ${END_TRANSLATE_Y}, 0) ${END_SCALE}`
		},
		{
			offset: .1,
			opacity: 0
		},
		{
			offset: 1,
			opacity: 1,
			transform: `translate3d(${START_TRANSLATE_X}, ${START_TRANSLATE_Y}, 0) ${START_SCALE}`
		}
	];
	const FORWARDS_KEYFRAMES = [
		{
			offset: 0,
			opacity: .99,
			transform: `translate3d(${START_TRANSLATE_X}, ${START_TRANSLATE_Y}, 0) ${START_SCALE}`
		},
		{
			offset: .6,
			opacity: 0
		},
		{
			offset: 1,
			opacity: 0,
			transform: `translate3d(${END_TRANSLATE_X}, ${END_TRANSLATE_Y}, 0) ${END_SCALE}`
		}
	];
	const KEYFRAMES = backDirection ? BACKWARDS_KEYFRAMES : FORWARDS_KEYFRAMES;
	const clonedTitleEl = getClonedElement("ion-title");
	const clonedLargeTitleAnimation = createAnimation();
	clonedTitleEl.innerText = largeTitleEl.innerText;
	clonedTitleEl.size = largeTitleEl.size;
	clonedTitleEl.color = largeTitleEl.color;
	clonedLargeTitleAnimation.addElement(clonedTitleEl);
	clonedLargeTitleAnimation.beforeStyles({
		"transform-origin": `${ORIGIN_X} top`,
		/**
		* Since font size changes will cause
		* the dimension of the large title to change
		* we need to set the cloned title height
		* equal to that of the original large title height.
		*/
		height: `${largeTitleBox.height}px`,
		display: "",
		position: "relative",
		[ORIGIN_X]: TITLE_START_OFFSET
	}).beforeAddWrite(() => {
		largeTitleEl.style.setProperty("opacity", "0");
	}).afterAddWrite(() => {
		largeTitleEl.style.setProperty("opacity", "");
		clonedTitleEl.style.setProperty("display", "none");
	}).keyframes(KEYFRAMES);
	rootAnimation.addAnimation(clonedLargeTitleAnimation);
};
var iosTransitionAnimation = (navEl, opts) => {
	try {
		const EASING = "cubic-bezier(0.32,0.72,0,1)";
		const OPACITY = "opacity";
		const TRANSFORM = "transform";
		const CENTER = "0%";
		const OFF_OPACITY = .8;
		const isRTL = navEl.ownerDocument.dir === "rtl";
		const OFF_RIGHT = isRTL ? "-99.5%" : "99.5%";
		const OFF_LEFT = isRTL ? "33%" : "-33%";
		const enteringEl = opts.enteringEl;
		const leavingEl = opts.leavingEl;
		const backDirection = opts.direction === "back";
		const contentEl = enteringEl.querySelector(":scope > ion-content");
		const headerEls = enteringEl.querySelectorAll(":scope > ion-header > *:not(ion-toolbar), :scope > ion-footer > *");
		const enteringToolBarEls = enteringEl.querySelectorAll(":scope > ion-header > ion-toolbar");
		const rootAnimation = createAnimation();
		const enteringContentAnimation = createAnimation();
		rootAnimation.addElement(enteringEl).duration((opts.duration ?? 0) || DURATION).easing(opts.easing || EASING).fill("both").beforeRemoveClass("ion-page-invisible");
		if (leavingEl && navEl !== null && navEl !== void 0) {
			const navDecorAnimation = createAnimation();
			navDecorAnimation.addElement(navEl);
			rootAnimation.addAnimation(navDecorAnimation);
		}
		if (!contentEl && enteringToolBarEls.length === 0 && headerEls.length === 0) enteringContentAnimation.addElement(enteringEl.querySelector(":scope > .ion-page, :scope > ion-nav, :scope > ion-tabs"));
		else {
			enteringContentAnimation.addElement(contentEl);
			enteringContentAnimation.addElement(headerEls);
		}
		rootAnimation.addAnimation(enteringContentAnimation);
		if (backDirection) enteringContentAnimation.beforeClearStyles([OPACITY]).fromTo("transform", `translateX(${OFF_LEFT})`, `translateX(${CENTER})`).fromTo(OPACITY, OFF_OPACITY, 1);
		else enteringContentAnimation.beforeClearStyles([OPACITY]).fromTo("transform", `translateX(${OFF_RIGHT})`, `translateX(${CENTER})`);
		if (contentEl) {
			const enteringTransitionEffectEl = shadow(contentEl).querySelector(".transition-effect");
			if (enteringTransitionEffectEl) {
				const enteringTransitionCoverEl = enteringTransitionEffectEl.querySelector(".transition-cover");
				const enteringTransitionShadowEl = enteringTransitionEffectEl.querySelector(".transition-shadow");
				const enteringTransitionEffect = createAnimation();
				const enteringTransitionCover = createAnimation();
				const enteringTransitionShadow = createAnimation();
				enteringTransitionEffect.addElement(enteringTransitionEffectEl).beforeStyles({
					opacity: "1",
					display: "block"
				}).afterStyles({
					opacity: "",
					display: ""
				});
				enteringTransitionCover.addElement(enteringTransitionCoverEl).beforeClearStyles([OPACITY]).fromTo(OPACITY, 0, .1);
				enteringTransitionShadow.addElement(enteringTransitionShadowEl).beforeClearStyles([OPACITY]).fromTo(OPACITY, .03, .7);
				enteringTransitionEffect.addAnimation([enteringTransitionCover, enteringTransitionShadow]);
				enteringContentAnimation.addAnimation([enteringTransitionEffect]);
			}
		}
		const enteringContentHasLargeTitle = enteringEl.querySelector("ion-header.header-collapse-condense");
		const { forward, backward } = createLargeTitleTransition(rootAnimation, isRTL, backDirection, enteringEl, leavingEl);
		enteringToolBarEls.forEach((enteringToolBarEl) => {
			const enteringToolBar = createAnimation();
			enteringToolBar.addElement(enteringToolBarEl);
			rootAnimation.addAnimation(enteringToolBar);
			const enteringTitle = createAnimation();
			enteringTitle.addElement(enteringToolBarEl.querySelector("ion-title"));
			const enteringToolBarButtons = createAnimation();
			const buttons = Array.from(enteringToolBarEl.querySelectorAll("ion-buttons,[menuToggle]"));
			const parentHeader = enteringToolBarEl.closest("ion-header");
			const inactiveHeader = parentHeader?.classList.contains("header-collapse-condense-inactive");
			let buttonsToAnimate;
			if (backDirection) buttonsToAnimate = buttons.filter((button) => {
				const isCollapseButton = button.classList.contains("buttons-collapse");
				return isCollapseButton && !inactiveHeader || !isCollapseButton;
			});
			else buttonsToAnimate = buttons.filter((button) => !button.classList.contains("buttons-collapse"));
			enteringToolBarButtons.addElement(buttonsToAnimate);
			const enteringToolBarItems = createAnimation();
			enteringToolBarItems.addElement(enteringToolBarEl.querySelectorAll(":scope > *:not(ion-title):not(ion-buttons):not([menuToggle])"));
			const enteringToolBarBg = createAnimation();
			enteringToolBarBg.addElement(shadow(enteringToolBarEl).querySelector(".toolbar-background"));
			const enteringBackButton = createAnimation();
			const backButtonEl = enteringToolBarEl.querySelector("ion-back-button");
			if (backButtonEl) enteringBackButton.addElement(backButtonEl);
			enteringToolBar.addAnimation([
				enteringTitle,
				enteringToolBarButtons,
				enteringToolBarItems,
				enteringToolBarBg,
				enteringBackButton
			]);
			enteringToolBarButtons.fromTo(OPACITY, .01, 1);
			enteringToolBarItems.fromTo(OPACITY, .01, 1);
			if (backDirection) {
				if (!inactiveHeader) enteringTitle.fromTo("transform", `translateX(${OFF_LEFT})`, `translateX(${CENTER})`).fromTo(OPACITY, .01, 1);
				enteringToolBarItems.fromTo("transform", `translateX(${OFF_LEFT})`, `translateX(${CENTER})`);
				enteringBackButton.fromTo(OPACITY, .01, 1);
			} else {
				if (!enteringContentHasLargeTitle) enteringTitle.fromTo("transform", `translateX(${OFF_RIGHT})`, `translateX(${CENTER})`).fromTo(OPACITY, .01, 1);
				enteringToolBarItems.fromTo("transform", `translateX(${OFF_RIGHT})`, `translateX(${CENTER})`);
				enteringToolBarBg.beforeClearStyles([OPACITY, "transform"]);
				if (!parentHeader?.translucent) enteringToolBarBg.fromTo(OPACITY, .01, "var(--opacity)");
				else enteringToolBarBg.fromTo("transform", isRTL ? "translateX(-100%)" : "translateX(100%)", "translateX(0px)");
				if (!forward) enteringBackButton.fromTo(OPACITY, .01, 1);
				if (backButtonEl && !forward) {
					const enteringBackBtnText = createAnimation();
					enteringBackBtnText.addElement(shadow(backButtonEl).querySelector(".button-text")).fromTo(`transform`, isRTL ? "translateX(-100px)" : "translateX(100px)", "translateX(0px)");
					enteringToolBar.addAnimation(enteringBackBtnText);
				}
			}
		});
		if (leavingEl) {
			const leavingContent = createAnimation();
			const leavingContentEl = leavingEl.querySelector(":scope > ion-content");
			const leavingToolBarEls = leavingEl.querySelectorAll(":scope > ion-header > ion-toolbar");
			const leavingHeaderEls = leavingEl.querySelectorAll(":scope > ion-header > *:not(ion-toolbar), :scope > ion-footer > *");
			if (!leavingContentEl && leavingToolBarEls.length === 0 && leavingHeaderEls.length === 0) leavingContent.addElement(leavingEl.querySelector(":scope > .ion-page, :scope > ion-nav, :scope > ion-tabs"));
			else {
				leavingContent.addElement(leavingContentEl);
				leavingContent.addElement(leavingHeaderEls);
			}
			rootAnimation.addAnimation(leavingContent);
			if (backDirection) {
				leavingContent.beforeClearStyles([OPACITY]).fromTo("transform", `translateX(${CENTER})`, isRTL ? "translateX(-100%)" : "translateX(100%)");
				const leavingPage = getIonPageElement(leavingEl);
				rootAnimation.afterAddWrite(() => {
					if (rootAnimation.getDirection() === "normal") leavingPage.style.setProperty("display", "none");
				});
			} else leavingContent.fromTo("transform", `translateX(${CENTER})`, `translateX(${OFF_LEFT})`).fromTo(OPACITY, 1, OFF_OPACITY);
			if (leavingContentEl) {
				const leavingTransitionEffectEl = shadow(leavingContentEl).querySelector(".transition-effect");
				if (leavingTransitionEffectEl) {
					const leavingTransitionCoverEl = leavingTransitionEffectEl.querySelector(".transition-cover");
					const leavingTransitionShadowEl = leavingTransitionEffectEl.querySelector(".transition-shadow");
					const leavingTransitionEffect = createAnimation();
					const leavingTransitionCover = createAnimation();
					const leavingTransitionShadow = createAnimation();
					leavingTransitionEffect.addElement(leavingTransitionEffectEl).beforeStyles({
						opacity: "1",
						display: "block"
					}).afterStyles({
						opacity: "",
						display: ""
					});
					leavingTransitionCover.addElement(leavingTransitionCoverEl).beforeClearStyles([OPACITY]).fromTo(OPACITY, .1, 0);
					leavingTransitionShadow.addElement(leavingTransitionShadowEl).beforeClearStyles([OPACITY]).fromTo(OPACITY, .7, .03);
					leavingTransitionEffect.addAnimation([leavingTransitionCover, leavingTransitionShadow]);
					leavingContent.addAnimation([leavingTransitionEffect]);
				}
			}
			leavingToolBarEls.forEach((leavingToolBarEl) => {
				const leavingToolBar = createAnimation();
				leavingToolBar.addElement(leavingToolBarEl);
				const leavingTitle = createAnimation();
				leavingTitle.addElement(leavingToolBarEl.querySelector("ion-title"));
				const leavingToolBarButtons = createAnimation();
				const buttons = leavingToolBarEl.querySelectorAll("ion-buttons,[menuToggle]");
				const parentHeader = leavingToolBarEl.closest("ion-header");
				const inactiveHeader = parentHeader?.classList.contains("header-collapse-condense-inactive");
				const buttonsToAnimate = Array.from(buttons).filter((button) => {
					const isCollapseButton = button.classList.contains("buttons-collapse");
					return isCollapseButton && !inactiveHeader || !isCollapseButton;
				});
				leavingToolBarButtons.addElement(buttonsToAnimate);
				const leavingToolBarItems = createAnimation();
				const leavingToolBarItemEls = leavingToolBarEl.querySelectorAll(":scope > *:not(ion-title):not(ion-buttons):not([menuToggle])");
				if (leavingToolBarItemEls.length > 0) leavingToolBarItems.addElement(leavingToolBarItemEls);
				const leavingToolBarBg = createAnimation();
				leavingToolBarBg.addElement(shadow(leavingToolBarEl).querySelector(".toolbar-background"));
				const leavingBackButton = createAnimation();
				const backButtonEl = leavingToolBarEl.querySelector("ion-back-button");
				if (backButtonEl) leavingBackButton.addElement(backButtonEl);
				leavingToolBar.addAnimation([
					leavingTitle,
					leavingToolBarButtons,
					leavingToolBarItems,
					leavingBackButton,
					leavingToolBarBg
				]);
				rootAnimation.addAnimation(leavingToolBar);
				leavingBackButton.fromTo(OPACITY, .99, 0);
				leavingToolBarButtons.fromTo(OPACITY, .99, 0);
				leavingToolBarItems.fromTo(OPACITY, .99, 0);
				if (backDirection) {
					if (!inactiveHeader) leavingTitle.fromTo("transform", `translateX(${CENTER})`, isRTL ? "translateX(-100%)" : "translateX(100%)").fromTo(OPACITY, .99, 0);
					leavingToolBarItems.fromTo("transform", `translateX(${CENTER})`, isRTL ? "translateX(-100%)" : "translateX(100%)");
					leavingToolBarBg.beforeClearStyles([OPACITY, "transform"]);
					if (!parentHeader?.translucent) leavingToolBarBg.fromTo(OPACITY, "var(--opacity)", 0);
					else leavingToolBarBg.fromTo("transform", "translateX(0px)", isRTL ? "translateX(-100%)" : "translateX(100%)");
					if (backButtonEl && !backward) {
						const leavingBackBtnText = createAnimation();
						leavingBackBtnText.addElement(shadow(backButtonEl).querySelector(".button-text")).fromTo("transform", `translateX(${CENTER})`, `translateX(${(isRTL ? -124 : 124) + "px"})`);
						leavingToolBar.addAnimation(leavingBackBtnText);
					}
				} else {
					if (!inactiveHeader) leavingTitle.fromTo("transform", `translateX(${CENTER})`, `translateX(${OFF_LEFT})`).fromTo(OPACITY, .99, 0).afterClearStyles([TRANSFORM, OPACITY]);
					leavingToolBarItems.fromTo("transform", `translateX(${CENTER})`, `translateX(${OFF_LEFT})`).afterClearStyles([TRANSFORM, OPACITY]);
					leavingBackButton.afterClearStyles([OPACITY]);
					leavingTitle.afterClearStyles([OPACITY]);
					leavingToolBarButtons.afterClearStyles([OPACITY]);
				}
			});
		}
		return rootAnimation;
	} catch (err) {
		throw err;
	}
};
/**
* The scale of the back button during the animation
* is computed based on the scale of the large title
* and vice versa. However, we need to account for slight
* variations in the size of the large title due to
* padding and font weight. This value should be used to subtract
* a small amount from the large title height when computing scales
* to get more accurate scale results.
*/
var LARGE_TITLE_SIZE_OFFSET = 10;
//#endregion
//#region node_modules/@ionic/core/dist/esm/md.transition-DnFfqsAv.js
/*!
* (C) Ionic http://ionicframework.com - MIT License
*/
var md_transition_DnFfqsAv_exports = /* @__PURE__ */ __exportAll({ mdTransitionAnimation: () => mdTransitionAnimation });
var mdTransitionAnimation = (_, opts) => {
	const OFF_BOTTOM = "40px";
	const CENTER = "0px";
	const backDirection = opts.direction === "back";
	const enteringEl = opts.enteringEl;
	const leavingEl = opts.leavingEl;
	const ionPageElement = getIonPageElement(enteringEl);
	const enteringToolbarEle = ionPageElement.querySelector("ion-toolbar");
	const rootTransition = createAnimation();
	rootTransition.addElement(ionPageElement).fill("both").beforeRemoveClass("ion-page-invisible");
	if (backDirection) rootTransition.duration((opts.duration ?? 0) || 200).easing("cubic-bezier(0.47,0,0.745,0.715)");
	else rootTransition.duration((opts.duration ?? 0) || 280).easing("cubic-bezier(0.36,0.66,0.04,1)").fromTo("transform", `translateY(${OFF_BOTTOM})`, `translateY(${CENTER})`).fromTo("opacity", .01, 1);
	if (enteringToolbarEle) {
		const enteringToolBar = createAnimation();
		enteringToolBar.addElement(enteringToolbarEle);
		rootTransition.addAnimation(enteringToolBar);
	}
	if (leavingEl && backDirection) {
		rootTransition.duration((opts.duration ?? 0) || 200).easing("cubic-bezier(0.47,0,0.745,0.715)");
		const leavingPage = createAnimation();
		leavingPage.addElement(getIonPageElement(leavingEl)).onFinish((currentStep) => {
			if (currentStep === 1 && leavingPage.elements.length > 0) leavingPage.elements[0].style.setProperty("display", "none");
		}).fromTo("transform", `translateY(${CENTER})`, `translateY(${OFF_BOTTOM})`).fromTo("opacity", 1, 0);
		rootTransition.addAnimation(leavingPage);
	}
	return rootTransition;
};
//#endregion
//#region node_modules/@ionic/core/dist/esm/index.js
/*!
* (C) Ionic http://ionicframework.com - MIT License
*/
var IonicSlides = (opts) => {
	const { swiper, extendParams } = opts;
	const slidesParams = {
		effect: void 0,
		direction: "horizontal",
		initialSlide: 0,
		loop: false,
		parallax: false,
		slidesPerView: 1,
		spaceBetween: 0,
		speed: 300,
		slidesPerColumn: 1,
		slidesPerColumnFill: "column",
		slidesPerGroup: 1,
		centeredSlides: false,
		slidesOffsetBefore: 0,
		slidesOffsetAfter: 0,
		touchEventsTarget: "container",
		freeMode: false,
		freeModeMomentum: true,
		freeModeMomentumRatio: 1,
		freeModeMomentumBounce: true,
		freeModeMomentumBounceRatio: 1,
		freeModeMomentumVelocityRatio: 1,
		freeModeSticky: false,
		freeModeMinimumVelocity: .02,
		autoHeight: false,
		setWrapperSize: false,
		zoom: {
			maxRatio: 3,
			minRatio: 1,
			toggle: false
		},
		touchRatio: 1,
		touchAngle: 45,
		simulateTouch: true,
		touchStartPreventDefault: false,
		shortSwipes: true,
		longSwipes: true,
		longSwipesRatio: .5,
		longSwipesMs: 300,
		followFinger: true,
		threshold: 0,
		touchMoveStopPropagation: true,
		touchReleaseOnEdges: false,
		iOSEdgeSwipeDetection: false,
		iOSEdgeSwipeThreshold: 20,
		resistance: true,
		resistanceRatio: .85,
		watchSlidesProgress: false,
		watchSlidesVisibility: false,
		preventClicks: true,
		preventClicksPropagation: true,
		slideToClickedSlide: false,
		loopAdditionalSlides: 0,
		noSwiping: true,
		runCallbacksOnInit: true,
		coverflowEffect: {
			rotate: 50,
			stretch: 0,
			depth: 100,
			modifier: 1,
			slideShadows: true
		},
		flipEffect: {
			slideShadows: true,
			limitRotation: true
		},
		cubeEffect: {
			slideShadows: true,
			shadow: true,
			shadowOffset: 20,
			shadowScale: .94
		},
		fadeEffect: { crossFade: false },
		a11y: {
			prevSlideMessage: "Previous slide",
			nextSlideMessage: "Next slide",
			firstSlideMessage: "This is the first slide",
			lastSlideMessage: "This is the last slide"
		}
	};
	if (swiper.pagination) slidesParams.pagination = {
		type: "bullets",
		clickable: false,
		hideOnClick: false
	};
	if (swiper.scrollbar) slidesParams.scrollbar = { hide: true };
	extendParams(slidesParams);
};
//#endregion
//#region node_modules/@ionic/angular/dist/lazy/providers/alert-controller.js
var AlertController = class AlertController extends OverlayBaseController {
	constructor() {
		super(alertController);
	}
	/** @nocollapse */
	static ɵfac = function AlertController_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || AlertController)();
	};
	/** @nocollapse */
	static ɵprov = /* @__PURE__ */ ɵɵdefineInjectable({
		token: AlertController,
		factory: AlertController.ɵfac,
		providedIn: "root"
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AlertController, [{
		type: Injectable,
		args: [{ providedIn: "root" }]
	}], () => [], null);
})();
//#endregion
//#region node_modules/@ionic/angular/dist/lazy/providers/animation-controller.js
var AnimationController = class AnimationController {
	/**
	* Create a new animation
	*/
	create(animationId) {
		return createAnimation(animationId);
	}
	/**
	* EXPERIMENTAL
	*
	* Given a progression and a cubic bezier function,
	* this utility returns the time value(s) at which the
	* cubic bezier reaches the given time progression.
	*
	* If the cubic bezier never reaches the progression
	* the result will be an empty array.
	*
	* This is most useful for switching between easing curves
	* when doing a gesture animation (i.e. going from linear easing
	* during a drag, to another easing when `progressEnd` is called)
	*/
	easingTime(p0, p1, p2, p3, progression) {
		return getTimeGivenProgression(p0, p1, p2, p3, progression);
	}
	/** @nocollapse */
	static ɵfac = function AnimationController_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || AnimationController)();
	};
	/** @nocollapse */
	static ɵprov = /* @__PURE__ */ ɵɵdefineInjectable({
		token: AnimationController,
		factory: AnimationController.ɵfac,
		providedIn: "root"
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AnimationController, [{
		type: Injectable,
		args: [{ providedIn: "root" }]
	}], null, null);
})();
//#endregion
//#region node_modules/@ionic/angular/dist/lazy/providers/action-sheet-controller.js
var ActionSheetController = class ActionSheetController extends OverlayBaseController {
	constructor() {
		super(actionSheetController);
	}
	/** @nocollapse */
	static ɵfac = function ActionSheetController_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || ActionSheetController)();
	};
	/** @nocollapse */
	static ɵprov = /* @__PURE__ */ ɵɵdefineInjectable({
		token: ActionSheetController,
		factory: ActionSheetController.ɵfac,
		providedIn: "root"
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ActionSheetController, [{
		type: Injectable,
		args: [{ providedIn: "root" }]
	}], () => [], null);
})();
//#endregion
//#region node_modules/@ionic/angular/dist/lazy/providers/gesture-controller.js
var GestureController = class GestureController {
	zone;
	constructor(zone) {
		this.zone = zone;
	}
	/**
	* Create a new gesture
	*/
	create(opts, runInsideAngularZone = false) {
		if (runInsideAngularZone) Object.getOwnPropertyNames(opts).forEach((key) => {
			if (typeof opts[key] === "function") {
				const fn = opts[key];
				opts[key] = (...props) => this.zone.run(() => fn(...props));
			}
		});
		return createGesture(opts);
	}
	/** @nocollapse */
	static ɵfac = function GestureController_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || GestureController)(ɵɵinject(NgZone));
	};
	/** @nocollapse */
	static ɵprov = /* @__PURE__ */ ɵɵdefineInjectable({
		token: GestureController,
		factory: GestureController.ɵfac,
		providedIn: "root"
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GestureController, [{
		type: Injectable,
		args: [{ providedIn: "root" }]
	}], () => [{ type: NgZone }], null);
})();
//#endregion
//#region node_modules/@ionic/angular/dist/lazy/providers/loading-controller.js
var LoadingController = class LoadingController extends OverlayBaseController {
	constructor() {
		super(loadingController);
	}
	/** @nocollapse */
	static ɵfac = function LoadingController_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || LoadingController)();
	};
	/** @nocollapse */
	static ɵprov = /* @__PURE__ */ ɵɵdefineInjectable({
		token: LoadingController,
		factory: LoadingController.ɵfac,
		providedIn: "root"
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LoadingController, [{
		type: Injectable,
		args: [{ providedIn: "root" }]
	}], () => [], null);
})();
//#endregion
//#region node_modules/@ionic/angular/dist/lazy/providers/menu-controller.js
var MenuController = class MenuController extends MenuController$1 {
	constructor() {
		super(menuController);
	}
	/** @nocollapse */
	static ɵfac = function MenuController_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || MenuController)();
	};
	/** @nocollapse */
	static ɵprov = /* @__PURE__ */ ɵɵdefineInjectable({
		token: MenuController,
		factory: MenuController.ɵfac,
		providedIn: "root"
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MenuController, [{
		type: Injectable,
		args: [{ providedIn: "root" }]
	}], () => [], null);
})();
//#endregion
//#region node_modules/@ionic/angular/dist/lazy/providers/modal-controller.js
var ModalController = class ModalController extends OverlayBaseController {
	angularDelegate = inject(AngularDelegate);
	injector = inject(Injector);
	environmentInjector = inject(EnvironmentInjector);
	constructor() {
		super(modalController);
	}
	create(opts) {
		const { injector: customInjector, ...restOpts } = opts;
		return super.create({
			...restOpts,
			delegate: this.angularDelegate.create(this.environmentInjector, this.injector, "modal", customInjector)
		});
	}
	/** @nocollapse */
	static ɵfac = function ModalController_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || ModalController)();
	};
	/** @nocollapse */
	static ɵprov = /* @__PURE__ */ ɵɵdefineInjectable({
		token: ModalController,
		factory: ModalController.ɵfac
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ModalController, [{ type: Injectable }], () => [], null);
})();
//#endregion
//#region node_modules/@ionic/angular/dist/lazy/providers/popover-controller.js
var PopoverController = class extends OverlayBaseController {
	angularDelegate = inject(AngularDelegate);
	injector = inject(Injector);
	environmentInjector = inject(EnvironmentInjector);
	constructor() {
		super(popoverController);
	}
	create(opts) {
		const { injector: customInjector, ...restOpts } = opts;
		return super.create({
			...restOpts,
			delegate: this.angularDelegate.create(this.environmentInjector, this.injector, "popover", customInjector)
		});
	}
};
//#endregion
//#region node_modules/@ionic/angular/dist/lazy/providers/toast-controller.js
var ToastController = class ToastController extends OverlayBaseController {
	constructor() {
		super(toastController);
	}
	/** @nocollapse */
	static ɵfac = function ToastController_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || ToastController)();
	};
	/** @nocollapse */
	static ɵprov = /* @__PURE__ */ ɵɵdefineInjectable({
		token: ToastController,
		factory: ToastController.ɵfac,
		providedIn: "root"
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ToastController, [{
		type: Injectable,
		args: [{ providedIn: "root" }]
	}], () => [], null);
})();
//#endregion
//#region node_modules/@ionic/core/dist/esm/app-globals-DGJXnnkm.js
/*!
* (C) Ionic http://ionicframework.com - MIT License
*/
var globalScripts = initialize || (() => {});
//#endregion
//#region node_modules/@ionic/core/dist/esm/loader.js
/*!
* (C) Ionic http://ionicframework.com - MIT License
*/
var defineCustomElements = async (win, options) => {
	if (typeof window === "undefined") return void 0;
	await globalScripts();
	return bootstrapLazy(JSON.parse("[[\"ion-datetime\",[[289,\"ion-datetime\",{\"color\":[1],\"name\":[1],\"disabled\":[4],\"formatOptions\":[16],\"readonly\":[4],\"isDateEnabled\":[16],\"showAdjacentDays\":[4,\"show-adjacent-days\"],\"min\":[1025],\"max\":[1025],\"presentation\":[1],\"cancelText\":[1,\"cancel-text\"],\"doneText\":[1,\"done-text\"],\"clearText\":[1,\"clear-text\"],\"yearValues\":[8,\"year-values\"],\"monthValues\":[8,\"month-values\"],\"dayValues\":[8,\"day-values\"],\"hourValues\":[8,\"hour-values\"],\"minuteValues\":[8,\"minute-values\"],\"locale\":[1],\"firstDayOfWeek\":[2,\"first-day-of-week\"],\"titleSelectedDatesFormatter\":[16],\"multiple\":[4],\"highlightedDates\":[16],\"value\":[1025],\"showDefaultTitle\":[4,\"show-default-title\"],\"showDefaultButtons\":[4,\"show-default-buttons\"],\"showClearButton\":[4,\"show-clear-button\"],\"showDefaultTimeLabel\":[4,\"show-default-time-label\"],\"hourCycle\":[1,\"hour-cycle\"],\"size\":[1],\"preferWheel\":[4,\"prefer-wheel\"],\"showMonthAndYear\":[32],\"activeParts\":[32],\"workingParts\":[32],\"isTimePopoverOpen\":[32],\"forceRenderDate\":[32],\"confirm\":[64],\"reset\":[64],\"cancel\":[64],\"getDefaultPart\":[64]},null,{\"formatOptions\":[{\"formatOptionsChanged\":0}],\"disabled\":[{\"disabledChanged\":0}],\"min\":[{\"minChanged\":0}],\"max\":[{\"maxChanged\":0}],\"presentation\":[{\"presentationChanged\":0}],\"yearValues\":[{\"yearValuesChanged\":0}],\"monthValues\":[{\"monthValuesChanged\":0}],\"dayValues\":[{\"dayValuesChanged\":0}],\"hourValues\":[{\"hourValuesChanged\":0}],\"minuteValues\":[{\"minuteValuesChanged\":0}],\"value\":[{\"valueChanged\":0}]}]]],[\"ion-menu_3\",[[289,\"ion-menu-button\",{\"color\":[513],\"disabled\":[4],\"menu\":[1],\"autoHide\":[4,\"auto-hide\"],\"type\":[1],\"visible\":[32]},[[16,\"ionMenuChange\",\"visibilityChanged\"],[16,\"ionSplitPaneVisible\",\"visibilityChanged\"]]],[289,\"ion-menu\",{\"contentId\":[513,\"content-id\"],\"menuId\":[513,\"menu-id\"],\"type\":[1025],\"disabled\":[1028],\"side\":[513],\"swipeGesture\":[4,\"swipe-gesture\"],\"maxEdgeStart\":[2,\"max-edge-start\"],\"isPaneVisible\":[32],\"isEndSide\":[32],\"isOpen\":[64],\"isActive\":[64],\"open\":[64],\"close\":[64],\"toggle\":[64],\"setOpen\":[64]},[[16,\"ionSplitPaneVisible\",\"onSplitPaneChanged\"],[2,\"click\",\"onBackdropClick\"]],{\"type\":[{\"typeChanged\":0}],\"disabled\":[{\"disabledChanged\":0}],\"side\":[{\"sideChanged\":0}],\"swipeGesture\":[{\"swipeGestureChanged\":0}]}],[257,\"ion-menu-toggle\",{\"menu\":[1],\"autoHide\":[4,\"auto-hide\"],\"visible\":[32]},[[16,\"ionMenuChange\",\"visibilityChanged\"],[16,\"ionSplitPaneVisible\",\"visibilityChanged\"]]]]],[\"ion-input-password-toggle\",[[33,\"ion-input-password-toggle\",{\"color\":[513],\"showIcon\":[1,\"show-icon\"],\"hideIcon\":[1,\"hide-icon\"],\"type\":[1025]},null,{\"type\":[{\"onTypeChange\":0}]}]]],[\"ion-fab_3\",[[289,\"ion-fab-button\",{\"color\":[513],\"activated\":[4],\"disabled\":[4],\"download\":[1],\"href\":[1],\"rel\":[1],\"routerDirection\":[1,\"router-direction\"],\"routerAnimation\":[16],\"target\":[1],\"show\":[4],\"translucent\":[4],\"type\":[1],\"form\":[1],\"size\":[1],\"closeIcon\":[1,\"close-icon\"]},null,{\"disabled\":[{\"disabledChanged\":0}]}],[257,\"ion-fab\",{\"horizontal\":[1],\"vertical\":[1],\"edge\":[4],\"activated\":[1028],\"close\":[64],\"toggle\":[64]},null,{\"activated\":[{\"activatedChanged\":0}]}],[257,\"ion-fab-list\",{\"activated\":[4],\"side\":[1]},null,{\"activated\":[{\"activatedChanged\":0}]}]]],[\"ion-refresher_2\",[[0,\"ion-refresher-content\",{\"pullingIcon\":[1025,\"pulling-icon\"],\"pullingText\":[1,\"pulling-text\"],\"refreshingSpinner\":[1025,\"refreshing-spinner\"],\"refreshingText\":[1,\"refreshing-text\"]}],[32,\"ion-refresher\",{\"pullMin\":[2,\"pull-min\"],\"pullMax\":[2,\"pull-max\"],\"closeDuration\":[1,\"close-duration\"],\"snapbackDuration\":[1,\"snapback-duration\"],\"pullFactor\":[2,\"pull-factor\"],\"disabled\":[4],\"nativeRefresher\":[32],\"state\":[32],\"complete\":[64],\"cancel\":[64],\"getProgress\":[64]},null,{\"disabled\":[{\"disabledChanged\":0}]}]]],[\"ion-back-button\",[[33,\"ion-back-button\",{\"color\":[513],\"defaultHref\":[1025,\"default-href\"],\"disabled\":[516],\"icon\":[1],\"text\":[1],\"type\":[1],\"routerAnimation\":[16]}]]],[\"ion-loading\",[[34,\"ion-loading\",{\"overlayIndex\":[2,\"overlay-index\"],\"delegate\":[16],\"hasController\":[4,\"has-controller\"],\"keyboardClose\":[4,\"keyboard-close\"],\"enterAnimation\":[16],\"leaveAnimation\":[16],\"message\":[1],\"cssClass\":[1,\"css-class\"],\"duration\":[2],\"backdropDismiss\":[4,\"backdrop-dismiss\"],\"showBackdrop\":[4,\"show-backdrop\"],\"spinner\":[1025],\"translucent\":[4],\"animated\":[4],\"htmlAttributes\":[16],\"isOpen\":[4,\"is-open\"],\"trigger\":[1],\"present\":[64],\"dismiss\":[64],\"onDidDismiss\":[64],\"onWillDismiss\":[64]},null,{\"isOpen\":[{\"onIsOpenChange\":0}],\"trigger\":[{\"triggerChanged\":0}]}]]],[\"ion-toast\",[[33,\"ion-toast\",{\"overlayIndex\":[2,\"overlay-index\"],\"delegate\":[16],\"hasController\":[4,\"has-controller\"],\"color\":[513],\"enterAnimation\":[16],\"leaveAnimation\":[16],\"cssClass\":[1,\"css-class\"],\"duration\":[2],\"header\":[1],\"layout\":[1],\"message\":[1],\"keyboardClose\":[4,\"keyboard-close\"],\"position\":[1],\"positionAnchor\":[1,\"position-anchor\"],\"buttons\":[16],\"translucent\":[4],\"animated\":[4],\"icon\":[1],\"htmlAttributes\":[16],\"swipeGesture\":[1,\"swipe-gesture\"],\"isOpen\":[4,\"is-open\"],\"trigger\":[1],\"revealContentToScreenReader\":[32],\"present\":[64],\"dismiss\":[64],\"onDidDismiss\":[64],\"onWillDismiss\":[64]},null,{\"swipeGesture\":[{\"swipeGestureChanged\":0}],\"isOpen\":[{\"onIsOpenChange\":0}],\"trigger\":[{\"triggerChanged\":0}]}]]],[\"ion-card_5\",[[289,\"ion-card\",{\"color\":[513],\"button\":[4],\"type\":[1],\"disabled\":[4],\"download\":[1],\"href\":[1],\"rel\":[1],\"routerDirection\":[1,\"router-direction\"],\"routerAnimation\":[16],\"target\":[1]}],[32,\"ion-card-content\"],[289,\"ion-card-header\",{\"color\":[513],\"translucent\":[4]}],[289,\"ion-card-subtitle\",{\"color\":[513]}],[289,\"ion-card-title\",{\"color\":[513]}]]],[\"ion-item-option_3\",[[289,\"ion-item-option\",{\"color\":[513],\"disabled\":[4],\"download\":[1],\"expandable\":[4],\"href\":[1],\"rel\":[1],\"target\":[1],\"type\":[1]}],[32,\"ion-item-options\",{\"side\":[1],\"fireSwipeEvent\":[64]}],[0,\"ion-item-sliding\",{\"disabled\":[4],\"state\":[32],\"getOpenAmount\":[64],\"getSlidingRatio\":[64],\"open\":[64],\"close\":[64],\"closeOpened\":[64]},null,{\"disabled\":[{\"disabledChanged\":0}]}]]],[\"ion-accordion_2\",[[305,\"ion-accordion\",{\"value\":[1],\"disabled\":[4],\"readonly\":[4],\"toggleIcon\":[1,\"toggle-icon\"],\"toggleIconSlot\":[1,\"toggle-icon-slot\"],\"state\":[32],\"isNext\":[32],\"isPrevious\":[32],\"hasInteracted\":[32]},null,{\"value\":[{\"valueChanged\":0}]}],[289,\"ion-accordion-group\",{\"animated\":[4],\"multiple\":[4],\"value\":[1025],\"disabled\":[4],\"readonly\":[4],\"expand\":[1],\"requestAccordionToggle\":[64],\"getAccordions\":[64]},[[0,\"keydown\",\"onKeydown\"]],{\"value\":[{\"valueChanged\":0}],\"disabled\":[{\"disabledChanged\":0}],\"readonly\":[{\"readonlyChanged\":0}]}]]],[\"ion-breadcrumb_2\",[[289,\"ion-breadcrumb\",{\"collapsed\":[4],\"last\":[4],\"showCollapsedIndicator\":[4,\"show-collapsed-indicator\"],\"color\":[1],\"active\":[4],\"disabled\":[4],\"download\":[1],\"href\":[1],\"rel\":[1],\"separator\":[4],\"target\":[1],\"routerDirection\":[1,\"router-direction\"],\"routerAnimation\":[16]}],[289,\"ion-breadcrumbs\",{\"color\":[513],\"maxItems\":[2,\"max-items\"],\"itemsBeforeCollapse\":[2,\"items-before-collapse\"],\"itemsAfterCollapse\":[2,\"items-after-collapse\"],\"collapsed\":[32],\"activeChanged\":[32]},[[0,\"collapsedClick\",\"onCollapsedClick\"]],{\"maxItems\":[{\"maxItemsChanged\":0}],\"itemsBeforeCollapse\":[{\"maxItemsChanged\":0}],\"itemsAfterCollapse\":[{\"maxItemsChanged\":0}]}]]],[\"ion-infinite-scroll_2\",[[32,\"ion-infinite-scroll-content\",{\"loadingSpinner\":[1025,\"loading-spinner\"],\"loadingText\":[1,\"loading-text\"]}],[0,\"ion-infinite-scroll\",{\"threshold\":[1],\"disabled\":[4],\"position\":[1],\"isLoading\":[32],\"complete\":[64]},null,{\"threshold\":[{\"thresholdChanged\":0}],\"disabled\":[{\"disabledChanged\":0}]}]]],[\"ion-reorder_2\",[[289,\"ion-reorder\",null,[[2,\"click\",\"onClick\"]]],[0,\"ion-reorder-group\",{\"disabled\":[4],\"state\":[32],\"complete\":[64]},null,{\"disabled\":[{\"disabledChanged\":0}]}]]],[\"ion-segment_2\",[[289,\"ion-segment-button\",{\"contentId\":[513,\"content-id\"],\"disabled\":[1028],\"layout\":[1],\"type\":[1],\"value\":[8],\"checked\":[32],\"setFocus\":[64]},null,{\"value\":[{\"valueChanged\":0}]}],[289,\"ion-segment\",{\"color\":[513],\"disabled\":[4],\"scrollable\":[4],\"swipeGesture\":[4,\"swipe-gesture\"],\"value\":[1032],\"selectOnFocus\":[4,\"select-on-focus\"],\"activated\":[32]},[[16,\"ionSegmentViewScroll\",\"handleSegmentViewScroll\"],[0,\"keydown\",\"onKeyDown\"]],{\"color\":[{\"colorChanged\":0}],\"swipeGesture\":[{\"swipeGestureChanged\":0}],\"value\":[{\"valueChanged\":0}],\"disabled\":[{\"disabledChanged\":0}]}]]],[\"ion-tab-bar_2\",[[289,\"ion-tab-button\",{\"disabled\":[4],\"download\":[1],\"href\":[1],\"rel\":[1],\"layout\":[1025],\"selected\":[1028],\"tab\":[1],\"target\":[1]},[[8,\"ionTabBarChanged\",\"onTabBarChanged\"]]],[289,\"ion-tab-bar\",{\"color\":[513],\"selectedTab\":[1,\"selected-tab\"],\"translucent\":[4],\"keyboardVisible\":[32]},null,{\"selectedTab\":[{\"selectedTabChanged\":0}]}]]],[\"ion-chip\",[[289,\"ion-chip\",{\"color\":[513],\"outline\":[4],\"disabled\":[4]}]]],[\"ion-datetime-button\",[[289,\"ion-datetime-button\",{\"color\":[513],\"disabled\":[516],\"datetime\":[1],\"datetimePresentation\":[32],\"dateText\":[32],\"timeText\":[32],\"datetimeActive\":[32],\"selectedButton\":[32]}]]],[\"ion-input\",[[294,\"ion-input\",{\"color\":[513],\"autocapitalize\":[1],\"autocomplete\":[1],\"autocorrect\":[4],\"autofocus\":[4],\"clearInput\":[4,\"clear-input\"],\"clearInputIcon\":[1,\"clear-input-icon\"],\"clearOnEdit\":[4,\"clear-on-edit\"],\"counter\":[4],\"counterFormatter\":[16],\"debounce\":[2],\"disabled\":[516],\"enterkeyhint\":[1],\"errorText\":[1,\"error-text\"],\"fill\":[1],\"inputmode\":[1],\"helperText\":[1,\"helper-text\"],\"label\":[1],\"labelPlacement\":[1,\"label-placement\"],\"max\":[8],\"maxlength\":[2],\"min\":[8],\"minlength\":[2],\"multiple\":[4],\"name\":[1],\"pattern\":[1],\"placeholder\":[1],\"readonly\":[516],\"required\":[4],\"shape\":[1],\"spellcheck\":[4],\"step\":[1],\"type\":[1],\"value\":[1032],\"hasFocus\":[32],\"isInvalid\":[32],\"setFocus\":[64],\"getInputElement\":[64]},[[2,\"click\",\"onClickCapture\"]],{\"debounce\":[{\"debounceChanged\":0}],\"type\":[{\"onTypeChange\":0}],\"value\":[{\"valueChanged\":0}],\"dir\":[{\"onDirChanged\":0}]}]]],[\"ion-searchbar\",[[34,\"ion-searchbar\",{\"color\":[513],\"animated\":[4],\"autocapitalize\":[1],\"autocomplete\":[1],\"autocorrect\":[4],\"cancelButtonIcon\":[1,\"cancel-button-icon\"],\"cancelButtonText\":[1,\"cancel-button-text\"],\"clearIcon\":[1,\"clear-icon\"],\"debounce\":[2],\"disabled\":[4],\"inputmode\":[1],\"enterkeyhint\":[1],\"maxlength\":[2],\"minlength\":[2],\"name\":[1],\"placeholder\":[1],\"searchIcon\":[1,\"search-icon\"],\"showCancelButton\":[1,\"show-cancel-button\"],\"showClearButton\":[1,\"show-clear-button\"],\"spellcheck\":[4],\"type\":[1],\"value\":[1025],\"focused\":[32],\"noAnimate\":[32],\"setFocus\":[64],\"getInputElement\":[64]},null,{\"lang\":[{\"onLangChanged\":0}],\"dir\":[{\"onDirChanged\":0}],\"debounce\":[{\"debounceChanged\":0}],\"value\":[{\"valueChanged\":0}],\"showCancelButton\":[{\"showCancelButtonChanged\":0}]}]]],[\"ion-toggle\",[[289,\"ion-toggle\",{\"color\":[513],\"name\":[1],\"checked\":[1028],\"disabled\":[4],\"errorText\":[1,\"error-text\"],\"helperText\":[1,\"helper-text\"],\"value\":[1],\"enableOnOffLabels\":[4,\"enable-on-off-labels\"],\"labelPlacement\":[1,\"label-placement\"],\"justify\":[1],\"alignment\":[1],\"required\":[4],\"activated\":[32],\"isInvalid\":[32],\"hintTextId\":[32]},null,{\"disabled\":[{\"disabledChanged\":0}]}]]],[\"ion-route_4\",[[0,\"ion-route\",{\"url\":[1],\"component\":[1],\"componentProps\":[16],\"beforeLeave\":[16],\"beforeEnter\":[16]},null,{\"url\":[{\"onUpdate\":0}],\"component\":[{\"onUpdate\":0}],\"componentProps\":[{\"onComponentProps\":0}]}],[0,\"ion-route-redirect\",{\"from\":[1],\"to\":[1]},null,{\"from\":[{\"propDidChange\":0}],\"to\":[{\"propDidChange\":0}]}],[0,\"ion-router\",{\"root\":[1],\"useHash\":[4,\"use-hash\"],\"canTransition\":[64],\"push\":[64],\"back\":[64],\"printDebug\":[64],\"navChanged\":[64]},[[8,\"popstate\",\"onPopState\"],[4,\"ionBackButton\",\"onBackButton\"]]],[257,\"ion-router-link\",{\"color\":[513],\"href\":[1],\"rel\":[1],\"routerDirection\":[1,\"router-direction\"],\"routerAnimation\":[16],\"target\":[1]}]]],[\"ion-avatar_3\",[[289,\"ion-avatar\"],[289,\"ion-badge\",{\"color\":[513]}],[257,\"ion-thumbnail\"]]],[\"ion-col_3\",[[257,\"ion-col\",{\"offset\":[1],\"offsetXs\":[1,\"offset-xs\"],\"offsetSm\":[1,\"offset-sm\"],\"offsetMd\":[1,\"offset-md\"],\"offsetLg\":[1,\"offset-lg\"],\"offsetXl\":[1,\"offset-xl\"],\"pull\":[1],\"pullXs\":[1,\"pull-xs\"],\"pullSm\":[1,\"pull-sm\"],\"pullMd\":[1,\"pull-md\"],\"pullLg\":[1,\"pull-lg\"],\"pullXl\":[1,\"pull-xl\"],\"push\":[1],\"pushXs\":[1,\"push-xs\"],\"pushSm\":[1,\"push-sm\"],\"pushMd\":[1,\"push-md\"],\"pushLg\":[1,\"push-lg\"],\"pushXl\":[1,\"push-xl\"],\"size\":[1],\"sizeXs\":[1,\"size-xs\"],\"sizeSm\":[1,\"size-sm\"],\"sizeMd\":[1,\"size-md\"],\"sizeLg\":[1,\"size-lg\"],\"sizeXl\":[1,\"size-xl\"]},[[9,\"resize\",\"onResize\"]]],[257,\"ion-grid\",{\"fixed\":[4]}],[257,\"ion-row\"]]],[\"ion-nav_2\",[[257,\"ion-nav\",{\"delegate\":[16],\"swipeGesture\":[1028,\"swipe-gesture\"],\"animated\":[4],\"animation\":[16],\"rootParams\":[16],\"root\":[1],\"push\":[64],\"insert\":[64],\"insertPages\":[64],\"pop\":[64],\"popTo\":[64],\"popToRoot\":[64],\"removeIndex\":[64],\"setRoot\":[64],\"setPages\":[64],\"getActive\":[64],\"getByIndex\":[64],\"canGoBack\":[64],\"getPrevious\":[64],\"getLength\":[64]},null,{\"swipeGesture\":[{\"swipeGestureChanged\":0}],\"root\":[{\"rootChanged\":0}]}],[0,\"ion-nav-link\",{\"component\":[1],\"componentProps\":[16],\"routerDirection\":[1,\"router-direction\"],\"routerAnimation\":[16]}]]],[\"ion-tab_2\",[[257,\"ion-tab\",{\"active\":[1028],\"delegate\":[16],\"tab\":[1],\"component\":[1],\"setActive\":[64]},null,{\"active\":[{\"changeActive\":0}]}],[257,\"ion-tabs\",{\"useRouter\":[1028,\"use-router\"],\"selectedTab\":[32],\"select\":[64],\"getTab\":[64],\"getSelected\":[64],\"setRouteId\":[64],\"getRouteId\":[64]}]]],[\"ion-img\",[[1,\"ion-img\",{\"alt\":[1],\"src\":[1],\"loadSrc\":[32],\"loadError\":[32]},null,{\"src\":[{\"srcChanged\":0}]}]]],[\"ion-input-otp\",[[294,\"ion-input-otp\",{\"autocapitalize\":[1],\"color\":[513],\"disabled\":[516],\"fill\":[1],\"inputmode\":[1],\"length\":[2],\"pattern\":[1],\"readonly\":[516],\"separators\":[1],\"shape\":[1],\"size\":[1],\"type\":[1],\"value\":[1032],\"inputValues\":[32],\"hasFocus\":[32],\"previousInputValues\":[32],\"setFocus\":[64]},null,{\"value\":[{\"valueChanged\":0}],\"separators\":[{\"processSeparators\":0}],\"length\":[{\"processSeparators\":0}]}]]],[\"ion-progress-bar\",[[33,\"ion-progress-bar\",{\"type\":[1],\"reversed\":[4],\"value\":[2],\"buffer\":[2],\"color\":[513]}]]],[\"ion-range\",[[289,\"ion-range\",{\"color\":[513],\"debounce\":[2],\"name\":[1],\"label\":[1],\"dualKnobs\":[4,\"dual-knobs\"],\"min\":[2],\"max\":[2],\"pin\":[4],\"pinFormatter\":[16],\"snaps\":[4],\"step\":[2],\"ticks\":[4],\"activeBarStart\":[1026,\"active-bar-start\"],\"disabled\":[4],\"value\":[1026],\"labelPlacement\":[1,\"label-placement\"],\"ratioA\":[32],\"ratioB\":[32],\"activatedKnob\":[32],\"focusedKnob\":[32],\"hoveredKnob\":[32],\"pressedKnob\":[32]},null,{\"debounce\":[{\"debounceChanged\":0}],\"dualKnobs\":[{\"dualKnobsChanged\":0}],\"min\":[{\"minChanged\":0}],\"max\":[{\"maxChanged\":0}],\"step\":[{\"stepChanged\":0}],\"activeBarStart\":[{\"activeBarStartChanged\":0}],\"disabled\":[{\"disabledChanged\":0}],\"value\":[{\"valueChanged\":0}]}]]],[\"ion-segment-content\",[[257,\"ion-segment-content\"]]],[\"ion-segment-view\",[[289,\"ion-segment-view\",{\"disabled\":[4],\"swipeGesture\":[4,\"swipe-gesture\"],\"isManualScroll\":[32],\"setContent\":[64]},[[1,\"scroll\",\"handleScroll\"],[1,\"touchstart\",\"handleScrollStart\"],[1,\"touchend\",\"handleTouchEnd\"]]]]],[\"ion-split-pane\",[[289,\"ion-split-pane\",{\"contentId\":[513,\"content-id\"],\"disabled\":[4],\"when\":[8],\"visible\":[32],\"isVisible\":[64]},null,{\"visible\":[{\"visibleChanged\":0}],\"disabled\":[{\"updateState\":0}],\"when\":[{\"updateState\":0}]}]]],[\"ion-text\",[[257,\"ion-text\",{\"color\":[513]}]]],[\"ion-textarea\",[[294,\"ion-textarea\",{\"color\":[513],\"autocapitalize\":[1],\"autofocus\":[4],\"clearOnEdit\":[4,\"clear-on-edit\"],\"debounce\":[2],\"disabled\":[516],\"fill\":[1],\"inputmode\":[1],\"enterkeyhint\":[1],\"maxlength\":[2],\"minlength\":[2],\"name\":[1],\"placeholder\":[1],\"readonly\":[516],\"required\":[4],\"spellcheck\":[4],\"cols\":[514],\"rows\":[2],\"wrap\":[1],\"autoGrow\":[516,\"auto-grow\"],\"value\":[1025],\"counter\":[4],\"counterFormatter\":[16],\"errorText\":[1,\"error-text\"],\"helperText\":[1,\"helper-text\"],\"label\":[1],\"labelPlacement\":[1,\"label-placement\"],\"shape\":[1],\"hasFocus\":[32],\"isInvalid\":[32],\"setFocus\":[64],\"getInputElement\":[64]},[[2,\"click\",\"onClickCapture\"]],{\"debounce\":[{\"debounceChanged\":0}],\"value\":[{\"valueChanged\":0}],\"dir\":[{\"onDirChanged\":0}]}]]],[\"ion-select-modal\",[[34,\"ion-select-modal\",{\"header\":[1],\"cancelText\":[1,\"cancel-text\"],\"multiple\":[4],\"options\":[16]}]]],[\"ion-picker\",[[289,\"ion-picker\",{\"exitInputMode\":[64]},[[1,\"touchstart\",\"preventTouchStartPropagation\"]]]]],[\"ion-picker-column\",[[257,\"ion-picker-column\",{\"disabled\":[4],\"value\":[1032],\"color\":[513],\"numericInput\":[4,\"numeric-input\"],\"ariaLabel\":[32],\"isActive\":[32],\"scrollActiveItemIntoView\":[64],\"setValue\":[64],\"setFocus\":[64]},null,{\"aria-label\":[{\"ariaLabelChanged\":0}],\"value\":[{\"valueChange\":0}]}]]],[\"ion-picker-column-option\",[[289,\"ion-picker-column-option\",{\"disabled\":[4],\"value\":[8],\"color\":[513],\"ariaLabel\":[32]},null,{\"aria-label\":[{\"onAriaLabelChange\":0}]}]]],[\"ion-backdrop\",[[33,\"ion-backdrop\",{\"visible\":[4],\"tappable\":[4],\"stopPropagation\":[4,\"stop-propagation\"]},[[2,\"click\",\"onMouseDown\"]]]]],[\"ion-app_8\",[[0,\"ion-app\",{\"setFocus\":[64]}],[292,\"ion-footer\",{\"collapse\":[1],\"translucent\":[4],\"keyboardVisible\":[32]}],[257,\"ion-router-outlet\",{\"mode\":[1025],\"delegate\":[16],\"animated\":[4],\"animation\":[16],\"swipeGesture\":[1028,\"swipe-gesture\"],\"swipeHandler\":[16],\"commit\":[64],\"setRouteId\":[64],\"getRouteId\":[64]},null,{\"swipeGesture\":[{\"swipeGestureChanged\":0}],\"swipeHandler\":[{\"swipeHandlerChanged\":0}]}],[257,\"ion-content\",{\"color\":[513],\"fullscreen\":[4],\"fixedSlotPlacement\":[1,\"fixed-slot-placement\"],\"forceOverscroll\":[1028,\"force-overscroll\"],\"scrollX\":[4,\"scroll-x\"],\"scrollY\":[4,\"scroll-y\"],\"scrollEvents\":[4,\"scroll-events\"],\"sizeToContent\":[32],\"recalculateDimensions\":[64],\"getScrollElement\":[64],\"getBackgroundElement\":[64],\"scrollToTop\":[64],\"scrollToBottom\":[64],\"scrollByPoint\":[64],\"scrollToPoint\":[64]},[[9,\"resize\",\"onResize\"]],{\"fullscreen\":[{\"fullscreenChanged\":0}]}],[292,\"ion-header\",{\"collapse\":[1],\"translucent\":[4]}],[289,\"ion-title\",{\"color\":[513],\"size\":[1]},null,{\"size\":[{\"sizeChanged\":0}]}],[289,\"ion-toolbar\",{\"color\":[513]},[[0,\"ionStyle\",\"childrenStyle\"]]],[294,\"ion-buttons\",{\"collapse\":[4]}]]],[\"ion-ripple-effect\",[[1,\"ion-ripple-effect\",{\"type\":[1],\"addRipple\":[64]}]]],[\"ion-action-sheet\",[[34,\"ion-action-sheet\",{\"overlayIndex\":[2,\"overlay-index\"],\"delegate\":[16],\"hasController\":[4,\"has-controller\"],\"keyboardClose\":[4,\"keyboard-close\"],\"enterAnimation\":[16],\"leaveAnimation\":[16],\"buttons\":[16],\"cssClass\":[1,\"css-class\"],\"backdropDismiss\":[4,\"backdrop-dismiss\"],\"header\":[1],\"subHeader\":[1,\"sub-header\"],\"translucent\":[4],\"animated\":[4],\"htmlAttributes\":[16],\"isOpen\":[4,\"is-open\"],\"trigger\":[1],\"activeRadioId\":[32],\"present\":[64],\"dismiss\":[64],\"onDidDismiss\":[64],\"onWillDismiss\":[64]},[[0,\"keydown\",\"onKeydown\"]],{\"buttons\":[{\"buttonsChanged\":0}],\"isOpen\":[{\"onIsOpenChange\":0}],\"trigger\":[{\"triggerChanged\":0}]}]]],[\"ion-alert\",[[34,\"ion-alert\",{\"overlayIndex\":[2,\"overlay-index\"],\"delegate\":[16],\"hasController\":[4,\"has-controller\"],\"keyboardClose\":[4,\"keyboard-close\"],\"enterAnimation\":[16],\"leaveAnimation\":[16],\"cssClass\":[1,\"css-class\"],\"header\":[1],\"subHeader\":[1,\"sub-header\"],\"message\":[1],\"buttons\":[16],\"inputs\":[1040],\"backdropDismiss\":[4,\"backdrop-dismiss\"],\"translucent\":[4],\"animated\":[4],\"htmlAttributes\":[16],\"isOpen\":[4,\"is-open\"],\"trigger\":[1],\"isButtonGroupWrapped\":[32],\"present\":[64],\"dismiss\":[64],\"onDidDismiss\":[64],\"onWillDismiss\":[64]},[[4,\"keydown\",\"onKeydown\"]],{\"isOpen\":[{\"onIsOpenChange\":0}],\"trigger\":[{\"triggerChanged\":0}],\"buttons\":[{\"buttonsChanged\":0}],\"inputs\":[{\"inputsChanged\":0}]}]]],[\"ion-modal\",[[289,\"ion-modal\",{\"hasController\":[4,\"has-controller\"],\"overlayIndex\":[2,\"overlay-index\"],\"delegate\":[16],\"keyboardClose\":[4,\"keyboard-close\"],\"enterAnimation\":[16],\"leaveAnimation\":[16],\"breakpoints\":[16],\"expandToScroll\":[4,\"expand-to-scroll\"],\"initialBreakpoint\":[2,\"initial-breakpoint\"],\"backdropBreakpoint\":[2,\"backdrop-breakpoint\"],\"handle\":[4],\"handleBehavior\":[1,\"handle-behavior\"],\"component\":[1],\"componentProps\":[16],\"cssClass\":[1,\"css-class\"],\"backdropDismiss\":[4,\"backdrop-dismiss\"],\"showBackdrop\":[4,\"show-backdrop\"],\"animated\":[4],\"presentingElement\":[16],\"htmlAttributes\":[16],\"isOpen\":[4,\"is-open\"],\"trigger\":[1],\"keepContentsMounted\":[4,\"keep-contents-mounted\"],\"focusTrap\":[4,\"focus-trap\"],\"canDismiss\":[4,\"can-dismiss\"],\"isSheetModal\":[32],\"presented\":[32],\"present\":[64],\"dismiss\":[64],\"onDidDismiss\":[64],\"onWillDismiss\":[64],\"setCurrentBreakpoint\":[64],\"getCurrentBreakpoint\":[64]},[[9,\"resize\",\"onWindowResize\"]],{\"isOpen\":[{\"onIsOpenChange\":0}],\"trigger\":[{\"triggerChanged\":0}],\"breakpoints\":[{\"breakpointsChanged\":0}]}]]],[\"ion-popover\",[[289,\"ion-popover\",{\"hasController\":[4,\"has-controller\"],\"delegate\":[16],\"overlayIndex\":[2,\"overlay-index\"],\"enterAnimation\":[16],\"leaveAnimation\":[16],\"component\":[1],\"componentProps\":[16],\"keyboardClose\":[4,\"keyboard-close\"],\"cssClass\":[1,\"css-class\"],\"backdropDismiss\":[4,\"backdrop-dismiss\"],\"event\":[8],\"showBackdrop\":[4,\"show-backdrop\"],\"translucent\":[4],\"animated\":[4],\"htmlAttributes\":[16],\"triggerAction\":[1,\"trigger-action\"],\"trigger\":[1],\"size\":[1],\"dismissOnSelect\":[4,\"dismiss-on-select\"],\"reference\":[1],\"side\":[1],\"alignment\":[1025],\"arrow\":[4],\"isOpen\":[4,\"is-open\"],\"keyboardEvents\":[4,\"keyboard-events\"],\"focusTrap\":[4,\"focus-trap\"],\"keepContentsMounted\":[4,\"keep-contents-mounted\"],\"presented\":[32],\"presentFromTrigger\":[64],\"present\":[64],\"dismiss\":[64],\"getParentPopover\":[64],\"onDidDismiss\":[64],\"onWillDismiss\":[64]},null,{\"trigger\":[{\"onTriggerChange\":0}],\"triggerAction\":[{\"onTriggerChange\":0}],\"isOpen\":[{\"onIsOpenChange\":0}]}]]],[\"ion-checkbox\",[[289,\"ion-checkbox\",{\"color\":[513],\"name\":[1],\"checked\":[1028],\"indeterminate\":[1028],\"disabled\":[4],\"errorText\":[1,\"error-text\"],\"helperText\":[1,\"helper-text\"],\"value\":[8],\"labelPlacement\":[1,\"label-placement\"],\"justify\":[1],\"alignment\":[1],\"required\":[4],\"isInvalid\":[32],\"hasLabelContent\":[32],\"hintTextId\":[32],\"setFocus\":[64]}]]],[\"ion-spinner\",[[1,\"ion-spinner\",{\"color\":[513],\"duration\":[2],\"name\":[1],\"paused\":[4]}]]],[\"ion-radio_2\",[[289,\"ion-radio\",{\"color\":[513],\"name\":[1],\"disabled\":[4],\"value\":[520],\"labelPlacement\":[1,\"label-placement\"],\"justify\":[1],\"alignment\":[1],\"checked\":[32],\"buttonTabindex\":[32],\"setFocus\":[64],\"setButtonTabindex\":[64]},null,{\"value\":[{\"valueChanged\":0}]}],[292,\"ion-radio-group\",{\"allowEmptySelection\":[4,\"allow-empty-selection\"],\"compareWith\":[1,\"compare-with\"],\"name\":[1],\"value\":[1032],\"helperText\":[1,\"helper-text\"],\"errorText\":[1,\"error-text\"],\"isInvalid\":[32],\"hintTextId\":[32],\"setFocus\":[64]},[[4,\"keydown\",\"onKeydown\"]],{\"value\":[{\"valueChanged\":0}]}]]],[\"ion-button_2\",[[289,\"ion-button\",{\"color\":[513],\"buttonType\":[1025,\"button-type\"],\"disabled\":[516],\"expand\":[513],\"fill\":[1537],\"routerDirection\":[1,\"router-direction\"],\"routerAnimation\":[16],\"download\":[1],\"href\":[1],\"rel\":[1],\"shape\":[513],\"size\":[513],\"strong\":[4],\"target\":[1],\"type\":[1],\"form\":[1],\"isCircle\":[32]},null,{\"disabled\":[{\"disabledChanged\":0}],\"aria-checked\":[{\"onAriaChanged\":0}],\"aria-label\":[{\"onAriaChanged\":0}],\"aria-pressed\":[{\"onAriaChanged\":0}]}],[257,\"ion-icon\",{\"mode\":[1025],\"color\":[1],\"ios\":[1],\"md\":[1],\"flipRtl\":[4,\"flip-rtl\"],\"name\":[513],\"src\":[1],\"icon\":[8],\"size\":[1],\"lazy\":[4],\"sanitize\":[4],\"svgContent\":[32],\"isVisible\":[32]},null,{\"name\":[{\"loadIcon\":0}],\"src\":[{\"loadIcon\":0}],\"icon\":[{\"loadIcon\":0}],\"ios\":[{\"loadIcon\":0}],\"md\":[{\"loadIcon\":0}]}]]],[\"ion-item_8\",[[289,\"ion-item-divider\",{\"color\":[513],\"sticky\":[4]}],[32,\"ion-item-group\"],[289,\"ion-note\",{\"color\":[513]}],[1,\"ion-skeleton-text\",{\"animated\":[4]}],[294,\"ion-label\",{\"color\":[513],\"position\":[1],\"noAnimate\":[32]},null,{\"color\":[{\"colorChanged\":0}],\"position\":[{\"positionChanged\":0}]}],[289,\"ion-list-header\",{\"color\":[513],\"lines\":[1]}],[289,\"ion-item\",{\"color\":[513],\"button\":[4],\"detail\":[4],\"detailIcon\":[1,\"detail-icon\"],\"disabled\":[516],\"download\":[1],\"href\":[1],\"rel\":[1],\"lines\":[1],\"routerAnimation\":[16],\"routerDirection\":[1,\"router-direction\"],\"target\":[1],\"type\":[1],\"multipleInputs\":[32],\"focusable\":[32],\"isInteractive\":[32],\"hasSlottedIndicatorControl\":[32]},[[0,\"ionColor\",\"labelColorChanged\"],[0,\"ionStyle\",\"itemStyle\"]],{\"button\":[{\"buttonChanged\":0}]}],[32,\"ion-list\",{\"lines\":[1],\"inset\":[4],\"closeSlidingItems\":[64]}]]],[\"ion-select_3\",[[289,\"ion-select\",{\"cancelText\":[1,\"cancel-text\"],\"color\":[513],\"compareWith\":[1,\"compare-with\"],\"disabled\":[4],\"fill\":[1],\"errorText\":[1,\"error-text\"],\"helperText\":[1,\"helper-text\"],\"interface\":[1],\"interfaceOptions\":[8,\"interface-options\"],\"justify\":[1],\"label\":[1],\"labelPlacement\":[1,\"label-placement\"],\"multiple\":[4],\"name\":[1],\"okText\":[1,\"ok-text\"],\"placeholder\":[1],\"selectedText\":[1,\"selected-text\"],\"toggleIcon\":[1,\"toggle-icon\"],\"expandedIcon\":[1,\"expanded-icon\"],\"shape\":[1],\"value\":[1032],\"required\":[4],\"isExpanded\":[32],\"hasFocus\":[32],\"isInvalid\":[32],\"hintTextId\":[32],\"open\":[64]},[[2,\"click\",\"onClickCapture\"]],{\"disabled\":[{\"styleChanged\":0}],\"isExpanded\":[{\"styleChanged\":0}],\"placeholder\":[{\"styleChanged\":0}],\"value\":[{\"styleChanged\":0}]}],[1,\"ion-select-option\",{\"disabled\":[4],\"value\":[8],\"description\":[1],\"labelPlacement\":[1,\"label-placement\"],\"justify\":[1]}],[34,\"ion-select-popover\",{\"header\":[1],\"subHeader\":[1,\"sub-header\"],\"message\":[1],\"multiple\":[4],\"options\":[16]}]]]]"), options);
};
//#endregion
//#region node_modules/@ionic/core/loader/index.js
/*!
* (C) Ionic http://ionicframework.com - MIT License
*/
(function() {
	if ("undefined" !== typeof window && void 0 !== window.Reflect && void 0 !== window.customElements) {
		var a = HTMLElement;
		window.HTMLElement = function() {
			return Reflect.construct(a, [], this.constructor);
		};
		HTMLElement.prototype = a.prototype;
		HTMLElement.prototype.constructor = HTMLElement;
		Object.setPrototypeOf(HTMLElement, a);
	}
})();
//#endregion
//#region node_modules/@ionic/angular/dist/lazy/app-initialize.js
var appInitialize = (config, doc, zone) => {
	return () => {
		const win = doc.defaultView;
		if (win && typeof window !== "undefined") {
			setupConfig({
				...config,
				_zoneGate: (h) => zone.run(h)
			});
			const aelFn = "__zone_symbol__addEventListener" in doc.body ? "__zone_symbol__addEventListener" : "addEventListener";
			return defineCustomElements(win, {
				exclude: ["ion-tabs"],
				syncQueue: true,
				raf,
				jmp: (h) => zone.runOutsideAngular(h),
				ael(elm, eventName, cb, opts) {
					elm[aelFn](eventName, cb, opts);
				},
				rel(elm, eventName, cb, opts) {
					elm.removeEventListener(eventName, cb, opts);
				}
			});
		}
	};
};
//#endregion
//#region node_modules/@ionic/angular/dist/lazy/ionic-module.js
var DECLARATIONS = [
	...[
		IonAccordion,
		IonAccordionGroup,
		IonActionSheet,
		IonAlert,
		IonApp,
		IonAvatar,
		IonBackdrop,
		IonBadge,
		IonBreadcrumb,
		IonBreadcrumbs,
		IonButton,
		IonButtons,
		IonCard,
		IonCardContent,
		IonCardHeader,
		IonCardSubtitle,
		IonCardTitle,
		IonCheckbox,
		IonChip,
		IonCol,
		IonContent,
		IonDatetime,
		IonDatetimeButton,
		IonFab,
		IonFabButton,
		IonFabList,
		IonFooter,
		IonGrid,
		IonHeader,
		IonIcon,
		IonImg,
		IonInfiniteScroll,
		IonInfiniteScrollContent,
		IonInput,
		IonInputOtp,
		IonInputPasswordToggle,
		IonItem,
		IonItemDivider,
		IonItemGroup,
		IonItemOption,
		IonItemOptions,
		IonItemSliding,
		IonLabel,
		IonList,
		IonListHeader,
		IonLoading,
		IonMenu,
		IonMenuButton,
		IonMenuToggle,
		IonNavLink,
		IonNote,
		IonPicker,
		IonPickerColumn,
		IonPickerColumnOption,
		IonProgressBar,
		IonRadio,
		IonRadioGroup,
		IonRange,
		IonRefresher,
		IonRefresherContent,
		IonReorder,
		IonReorderGroup,
		IonRippleEffect,
		IonRow,
		IonSearchbar,
		IonSegment,
		IonSegmentButton,
		IonSegmentContent,
		IonSegmentView,
		IonSelect,
		IonSelectModal,
		IonSelectOption,
		IonSkeletonText,
		IonSpinner,
		IonSplitPane,
		IonTab,
		IonTabBar,
		IonTabButton,
		IonText,
		IonTextarea,
		IonThumbnail,
		IonTitle,
		IonToast,
		IonToggle,
		IonToolbar
	],
	IonModal,
	IonPopover,
	BooleanValueAccessorDirective,
	NumericValueAccessorDirective,
	SelectValueAccessorDirective,
	TextValueAccessorDirective,
	IonTabs,
	IonRouterOutlet,
	IonBackButton,
	IonNav,
	RouterLinkDelegateDirective,
	RouterLinkWithHrefDelegateDirective,
	IonMinValidator,
	IonMaxValidator
];
/**
* @deprecated `IonicModule` is deprecated and will be removed in a future major version.
* Use `provideIonicAngular()` instead, which works in both standalone and NgModule-based
* applications. Refer to https://ionicframework.com/docs/angular/build-options for migration steps.
*/
var IonicModule = class IonicModule {
	/**
	* @deprecated `IonicModule.forRoot()` is deprecated and will be removed in a future major version.
	* Use `provideIonicAngular()` instead. Any config passed here can be passed as an object to that
	* function. Refer to https://ionicframework.com/docs/angular/build-options for migration steps.
	*/
	static forRoot(config = {}) {
		console.warn(`[Ionic Warning]: IonicModule has been deprecated in favor of provideIonicAngular() and will be removed in a future major version. Refer to https://ionicframework.com/docs/angular/build-options for migration steps.`);
		return {
			ngModule: IonicModule,
			providers: [
				{
					provide: ConfigToken,
					useValue: config
				},
				{
					provide: APP_INITIALIZER,
					useFactory: appInitialize,
					multi: true,
					deps: [
						ConfigToken,
						DOCUMENT,
						NgZone
					]
				},
				AngularDelegate,
				provideComponentInputBinding()
			]
		};
	}
	/** @nocollapse */
	static ɵfac = function IonicModule_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || IonicModule)();
	};
	/** @nocollapse */
	static ɵmod = /* @__PURE__ */ ɵɵdefineNgModule({
		type: IonicModule,
		declarations: [
			IonAccordion,
			IonAccordionGroup,
			IonActionSheet,
			IonAlert,
			IonApp,
			IonAvatar,
			IonBackdrop,
			IonBadge,
			IonBreadcrumb,
			IonBreadcrumbs,
			IonButton,
			IonButtons,
			IonCard,
			IonCardContent,
			IonCardHeader,
			IonCardSubtitle,
			IonCardTitle,
			IonCheckbox,
			IonChip,
			IonCol,
			IonContent,
			IonDatetime,
			IonDatetimeButton,
			IonFab,
			IonFabButton,
			IonFabList,
			IonFooter,
			IonGrid,
			IonHeader,
			IonIcon,
			IonImg,
			IonInfiniteScroll,
			IonInfiniteScrollContent,
			IonInput,
			IonInputOtp,
			IonInputPasswordToggle,
			IonItem,
			IonItemDivider,
			IonItemGroup,
			IonItemOption,
			IonItemOptions,
			IonItemSliding,
			IonLabel,
			IonList,
			IonListHeader,
			IonLoading,
			IonMenu,
			IonMenuButton,
			IonMenuToggle,
			IonNavLink,
			IonNote,
			IonPicker,
			IonPickerColumn,
			IonPickerColumnOption,
			IonProgressBar,
			IonRadio,
			IonRadioGroup,
			IonRange,
			IonRefresher,
			IonRefresherContent,
			IonReorder,
			IonReorderGroup,
			IonRippleEffect,
			IonRow,
			IonSearchbar,
			IonSegment,
			IonSegmentButton,
			IonSegmentContent,
			IonSegmentView,
			IonSelect,
			IonSelectModal,
			IonSelectOption,
			IonSkeletonText,
			IonSpinner,
			IonSplitPane,
			IonTab,
			IonTabBar,
			IonTabButton,
			IonText,
			IonTextarea,
			IonThumbnail,
			IonTitle,
			IonToast,
			IonToggle,
			IonToolbar,
			IonModal,
			IonPopover,
			BooleanValueAccessorDirective,
			NumericValueAccessorDirective,
			SelectValueAccessorDirective,
			TextValueAccessorDirective,
			IonTabs,
			IonRouterOutlet,
			IonBackButton,
			IonNav,
			RouterLinkDelegateDirective,
			RouterLinkWithHrefDelegateDirective,
			IonMinValidator,
			IonMaxValidator
		],
		imports: [CommonModule],
		exports: [
			IonAccordion,
			IonAccordionGroup,
			IonActionSheet,
			IonAlert,
			IonApp,
			IonAvatar,
			IonBackdrop,
			IonBadge,
			IonBreadcrumb,
			IonBreadcrumbs,
			IonButton,
			IonButtons,
			IonCard,
			IonCardContent,
			IonCardHeader,
			IonCardSubtitle,
			IonCardTitle,
			IonCheckbox,
			IonChip,
			IonCol,
			IonContent,
			IonDatetime,
			IonDatetimeButton,
			IonFab,
			IonFabButton,
			IonFabList,
			IonFooter,
			IonGrid,
			IonHeader,
			IonIcon,
			IonImg,
			IonInfiniteScroll,
			IonInfiniteScrollContent,
			IonInput,
			IonInputOtp,
			IonInputPasswordToggle,
			IonItem,
			IonItemDivider,
			IonItemGroup,
			IonItemOption,
			IonItemOptions,
			IonItemSliding,
			IonLabel,
			IonList,
			IonListHeader,
			IonLoading,
			IonMenu,
			IonMenuButton,
			IonMenuToggle,
			IonNavLink,
			IonNote,
			IonPicker,
			IonPickerColumn,
			IonPickerColumnOption,
			IonProgressBar,
			IonRadio,
			IonRadioGroup,
			IonRange,
			IonRefresher,
			IonRefresherContent,
			IonReorder,
			IonReorderGroup,
			IonRippleEffect,
			IonRow,
			IonSearchbar,
			IonSegment,
			IonSegmentButton,
			IonSegmentContent,
			IonSegmentView,
			IonSelect,
			IonSelectModal,
			IonSelectOption,
			IonSkeletonText,
			IonSpinner,
			IonSplitPane,
			IonTab,
			IonTabBar,
			IonTabButton,
			IonText,
			IonTextarea,
			IonThumbnail,
			IonTitle,
			IonToast,
			IonToggle,
			IonToolbar,
			IonModal,
			IonPopover,
			BooleanValueAccessorDirective,
			NumericValueAccessorDirective,
			SelectValueAccessorDirective,
			TextValueAccessorDirective,
			IonTabs,
			IonRouterOutlet,
			IonBackButton,
			IonNav,
			RouterLinkDelegateDirective,
			RouterLinkWithHrefDelegateDirective,
			IonMinValidator,
			IonMaxValidator
		]
	});
	/** @nocollapse */
	static ɵinj = /* @__PURE__ */ ɵɵdefineInjector({
		providers: [ModalController, PopoverController],
		imports: [CommonModule]
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonicModule, [{
		type: NgModule,
		args: [{
			declarations: DECLARATIONS,
			exports: DECLARATIONS,
			providers: [ModalController, PopoverController],
			imports: [CommonModule]
		}]
	}], null, null);
})();
//#endregion
export { ActionSheetController, AlertController, AngularDelegate, AnimationController, BooleanValueAccessorDirective as BooleanValueAccessor, Config, DomController, GestureController, ION_MAX_VALIDATOR, ION_MIN_VALIDATOR, IonAccordion, IonAccordionGroup, IonActionSheet, IonAlert, IonApp, IonAvatar, IonBackButton, IonBackdrop, IonBadge, IonBreadcrumb, IonBreadcrumbs, IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCheckbox, IonChip, IonCol, IonContent, IonDatetime, IonDatetimeButton, IonFab, IonFabButton, IonFabList, IonFooter, IonGrid, IonHeader, IonIcon, IonImg, IonInfiniteScroll, IonInfiniteScrollContent, IonInput, IonInputOtp, IonInputPasswordToggle, IonItem, IonItemDivider, IonItemGroup, IonItemOption, IonItemOptions, IonItemSliding, IonLabel, IonList, IonListHeader, IonLoading, IonMaxValidator, IonMenu, IonMenuButton, IonMenuToggle, IonMinValidator, IonModal, IonModalToken, IonNav, IonNavLink, IonNote, IonPicker, IonPickerColumn, IonPickerColumnOption, IonPopover, IonProgressBar, IonRadio, IonRadioGroup, IonRange, IonRefresher, IonRefresherContent, IonReorder, IonReorderGroup, IonRippleEffect, IonRouterOutlet, IonRow, IonSearchbar, IonSegment, IonSegmentButton, IonSegmentContent, IonSegmentView, IonSelect, IonSelectModal, IonSelectOption, IonSkeletonText, IonSpinner, IonSplitPane, IonTab, IonTabBar, IonTabButton, IonTabs, IonText, IonTextarea, IonThumbnail, IonTitle, IonToast, IonToggle, IonToolbar, IonicModule, IonicRouteStrategy, IonicSafeString, IonicSlides, LoadingController, MenuController, ModalController, NavController, NavParams, NumericValueAccessorDirective as NumericValueAccessor, Platform, PopoverController, RouterLinkDelegateDirective as RouterLinkDelegate, RouterLinkWithHrefDelegateDirective as RouterLinkWithHrefDelegate, SelectValueAccessorDirective as SelectValueAccessor, TextValueAccessorDirective as TextValueAccessor, ToastController, createAnimation, createGesture, getIonPageElement, getPlatforms, getTimeGivenProgression, p_DSuBagxs_exports as i, iosTransitionAnimation, isPlatform, mdTransitionAnimation, ios_transition_ofa92pAl_exports as n, openURL, p_CDvyV0r0_exports as r, md_transition_DnFfqsAv_exports as t };
