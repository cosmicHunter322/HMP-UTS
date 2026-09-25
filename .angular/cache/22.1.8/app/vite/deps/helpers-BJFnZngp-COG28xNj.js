import { m as printIonError } from "./index-Dvqtt_WK-CtfmC4By.js";
import { t as isRTL } from "./dir-Dojwmvde-JWsS7_L7.js";
//#region node_modules/@ionic/core/dist/esm/helpers-BJFnZngp.js
/*!
* (C) Ionic http://ionicframework.com - MIT License
*/
var win = typeof window !== "undefined" ? window : void 0;
var doc = typeof document !== "undefined" ? document : void 0;
var transitionEndAsync = (el, expectedDuration = 0) => {
	return new Promise((resolve) => {
		transitionEnd(el, expectedDuration, resolve);
	});
};
/**
* Allows developer to wait for a transition
* to finish and fallback to a timer if the
* transition is cancelled or otherwise
* never finishes. Also see transitionEndAsync
* which is an await-able version of this.
*/
var transitionEnd = (el, expectedDuration = 0, callback) => {
	let unRegTrans;
	let animationTimeout;
	const opts = { passive: true };
	const ANIMATION_FALLBACK_TIMEOUT = 500;
	const unregister = () => {
		if (unRegTrans) unRegTrans();
	};
	const onTransitionEnd = (ev) => {
		if (ev === void 0 || el === ev.target) {
			unregister();
			callback(ev);
		}
	};
	if (el) {
		el.addEventListener("webkitTransitionEnd", onTransitionEnd, opts);
		el.addEventListener("transitionend", onTransitionEnd, opts);
		animationTimeout = setTimeout(onTransitionEnd, expectedDuration + ANIMATION_FALLBACK_TIMEOUT);
		unRegTrans = () => {
			if (animationTimeout !== void 0) {
				clearTimeout(animationTimeout);
				animationTimeout = void 0;
			}
			el.removeEventListener("webkitTransitionEnd", onTransitionEnd, opts);
			el.removeEventListener("transitionend", onTransitionEnd, opts);
		};
	}
	return unregister;
};
/**
* Waits for a component to be ready for
* both custom element and non-custom element builds.
* If non-custom element build, el.componentOnReady
* will be used.
* For custom element builds, we wait a frame
* so that the inner contents of the component
* have a chance to render.
*
* Use this utility rather than calling
* el.componentOnReady yourself.
*/
var componentOnReady = (el, callback) => {
	if (el.componentOnReady) el.componentOnReady().then((resolvedEl) => callback(resolvedEl));
	else raf(() => callback(el));
};
/**
* This functions checks if a Stencil component is using
* the lazy loaded build of Stencil. Returns `true` if
* the component is lazy loaded. Returns `false` otherwise.
*/
var hasLazyBuild = (stencilEl) => {
	return stencilEl.componentOnReady !== void 0;
};
/**
* Elements inside of web components sometimes need to inherit global attributes
* set on the host. For example, the inner input in `ion-input` should inherit
* the `title` attribute that developers set directly on `ion-input`. This
* helper function should be called in componentWillLoad and assigned to a variable
* that is later used in the render function.
*
* This does not need to be reactive as changing attributes on the host element
* does not trigger a re-render.
*/
var inheritAttributes = (el, attributes = []) => {
	const attributeObject = {};
	attributes.forEach((attr) => {
		if (el.hasAttribute(attr)) {
			if (el.getAttribute(attr) !== null) attributeObject[attr] = el.getAttribute(attr);
			el.removeAttribute(attr);
		}
	});
	return attributeObject;
};
/**
* List of available ARIA attributes + `role`.
* Removed deprecated attributes.
* https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes
*/
var ariaAttributes = [
	"role",
	"aria-activedescendant",
	"aria-atomic",
	"aria-autocomplete",
	"aria-braillelabel",
	"aria-brailleroledescription",
	"aria-busy",
	"aria-checked",
	"aria-colcount",
	"aria-colindex",
	"aria-colindextext",
	"aria-colspan",
	"aria-controls",
	"aria-current",
	"aria-describedby",
	"aria-description",
	"aria-details",
	"aria-disabled",
	"aria-errormessage",
	"aria-expanded",
	"aria-flowto",
	"aria-haspopup",
	"aria-hidden",
	"aria-invalid",
	"aria-keyshortcuts",
	"aria-label",
	"aria-labelledby",
	"aria-level",
	"aria-live",
	"aria-multiline",
	"aria-multiselectable",
	"aria-orientation",
	"aria-owns",
	"aria-placeholder",
	"aria-posinset",
	"aria-pressed",
	"aria-readonly",
	"aria-relevant",
	"aria-required",
	"aria-roledescription",
	"aria-rowcount",
	"aria-rowindex",
	"aria-rowindextext",
	"aria-rowspan",
	"aria-selected",
	"aria-setsize",
	"aria-sort",
	"aria-valuemax",
	"aria-valuemin",
	"aria-valuenow",
	"aria-valuetext"
];
/**
* Returns an array of aria attributes that should be copied from
* the shadow host element to a target within the light DOM.
* @param el The element that the attributes should be copied from.
* @param ignoreList The list of aria-attributes to ignore reflecting and removing from the host.
* Use this in instances where we manually specify aria attributes on the `<Host>` element.
*/
var inheritAriaAttributes = (el, ignoreList) => {
	return inheritAttributes(el, ariaAttributes);
};
var addEventListener = (el, eventName, callback, opts) => {
	return el.addEventListener(eventName, callback, opts);
};
var removeEventListener = (el, eventName, callback, opts) => {
	return el.removeEventListener(eventName, callback, opts);
};
/**
* Calls back when a CSS custom property that resolves to a length changes,
* which no event covers. The probe inherits the property from `hostEl` and
* uses it as its height, turning a property change into a size change that
* `ResizeObserver` can detect.
*
* The callback receives the probe's height. For length values, this matches
* the resolved property value. For other values, such as `fit-content`, the
* probe remains at zero, so the value only signals that the property changed.
* Percentages resolve against the probe's containing block, not the element
* where the property is ultimately used.
*
* Pass `initialValue` when the caller has already read the property so that
* changes occurring before the observer's first delivery are not missed.
* Without it, the first delivery establishes the baseline.
*/
var onCustomPropertyChange = (hostEl, property, callback, initialValue) => {
	const doc = win?.document;
	if (!doc || !hostEl || typeof ResizeObserver === "undefined") return () => void 0;
	const probe = doc.createElement("div");
	probe.style.cssText = `position:fixed;visibility:hidden;pointer-events:none;top:0;left:0;width:0;height:var(${property},0px);`;
	hostEl.appendChild(probe);
	let lastHeight = initialValue;
	const observer = new ResizeObserver((entries) => {
		const { height } = entries[0].contentRect;
		if (lastHeight !== void 0 && height !== lastHeight) callback(height);
		lastHeight = height;
	});
	observer.observe(probe);
	return () => {
		observer.disconnect();
		probe.remove();
	};
};
/**
* Gets the root context of a shadow dom element
* On newer browsers this will be the shadowRoot,
* but for older browser this may just be the
* element itself.
*
* Useful for whenever you need to explicitly
* do "myElement.shadowRoot!.querySelector(...)".
*/
var getElementRoot = (el, fallback = el) => {
	return el.shadowRoot || fallback;
};
/**
* Patched version of requestAnimationFrame that avoids ngzone
* Use only when you know ngzone should not run
*/
var raf = (h) => {
	if (typeof __zone_symbol__requestAnimationFrame === "function") return __zone_symbol__requestAnimationFrame(h);
	if (typeof requestAnimationFrame === "function") return requestAnimationFrame(h);
	return setTimeout(h);
};
var hasShadowDom = (el) => {
	return !!el.shadowRoot && !!el.attachShadow;
};
var focusVisibleElement = (el) => {
	el.focus();
	/**
	* When programmatically focusing an element,
	* the focus-visible utility will not run because
	* it is expecting a keyboard event to have triggered this;
	* however, there are times when we need to manually control
	* this behavior so we call the `setFocus` method on ion-app
	* which will let us explicitly set the elements to focus.
	*/
	if (el.classList.contains("ion-focusable")) {
		const app = el.closest("ion-app");
		if (app) app.setFocus([el]);
	}
};
/**
* This method is used to add a hidden input to a host element that contains
* a Shadow DOM. It does not add the input inside of the Shadow root which
* allows it to be picked up inside of forms. It should contain the same
* values as the host element.
*
* @param always Add a hidden input even if the container does not use Shadow
* @param container The element where the input will be added
* @param name The name of the input
* @param value The value of the input
* @param disabled If true, the input is disabled
*/
var renderHiddenInput = (always, container, name, value, disabled) => {
	{
		let input = container.querySelector("input.aux-input");
		if (!input) {
			input = container.ownerDocument.createElement("input");
			input.type = "hidden";
			input.classList.add("aux-input");
			container.appendChild(input);
		}
		input.disabled = disabled;
		input.name = name;
		input.value = value || "";
	}
};
var clamp = (min, n, max) => {
	return Math.max(min, Math.min(n, max));
};
var assert = (actual, reason) => {
	if (!actual) {
		const message = "ASSERT: " + reason;
		printIonError(message);
		debugger;
		throw new Error(message);
	}
};
var pointerCoord = (ev) => {
	if (ev) {
		const changedTouches = ev.changedTouches;
		if (changedTouches && changedTouches.length > 0) {
			const touch = changedTouches[0];
			return {
				x: touch.clientX,
				y: touch.clientY
			};
		}
		if (ev.pageX !== void 0) return {
			x: ev.pageX,
			y: ev.pageY
		};
	}
	return {
		x: 0,
		y: 0
	};
};
/**
* @hidden
* Given a side, returns whether it resolves to the end side for the current
* direction. In RTL `start` is the end side, and in LTR `end` is.
*
* @param side The current side before being redefined based on the direction.
* @param hostEl The component's host element. The direction is resolved from
* it or its nearest ancestor that declares one. When omitted, the direction
* is resolved from the document.
*/
var isEndSide = (side, hostEl) => {
	const rtl = isRTL(hostEl);
	switch (side) {
		case "start": return rtl;
		case "end": return !rtl;
		default: throw new Error(`"${side}" is not a valid value for [side]. Use "start" or "end" instead.`);
	}
};
var debounceEvent = (event, wait) => {
	const original = event._original || event;
	return {
		_original: event,
		emit: debounce(original.emit.bind(original), wait)
	};
};
var debounce = (func, wait = 0) => {
	let timer;
	return (...args) => {
		clearTimeout(timer);
		timer = setTimeout(func, wait, ...args);
	};
};
/**
* Check whether the two string maps are shallow equal.
*
* undefined is treated as an empty map.
*
* @returns whether the keys are the same and the values are shallow equal.
*/
var shallowEqualStringMap = (map1, map2) => {
	map1 ??= {};
	map2 ??= {};
	if (map1 === map2) return true;
	const keys1 = Object.keys(map1);
	if (keys1.length !== Object.keys(map2).length) return false;
	for (const k1 of keys1) {
		if (!(k1 in map2)) return false;
		if (map1[k1] !== map2[k1]) return false;
	}
	return true;
};
/**
* Checks input for usable number. Not NaN and not Infinite.
*/
var isSafeNumber = (input) => {
	return typeof input === "number" && !isNaN(input) && isFinite(input);
};
//#endregion
export { win as C, transitionEndAsync as S, pointerCoord as _, debounce as a, renderHiddenInput as b, focusVisibleElement as c, hasShadowDom as d, inheritAriaAttributes as f, onCustomPropertyChange as g, isSafeNumber as h, componentOnReady as i, getElementRoot as l, isEndSide as m, assert as n, debounceEvent as o, inheritAttributes as p, clamp as r, doc as s, addEventListener as t, hasLazyBuild as u, raf as v, shallowEqualStringMap as x, removeEventListener as y };
