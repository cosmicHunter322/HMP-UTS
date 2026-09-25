import { g as printRequiredElementError } from "./index-Dvqtt_WK-CtfmC4By.js";
import { i as componentOnReady } from "./helpers-BJFnZngp-COG28xNj.js";
//#region node_modules/@ionic/core/dist/esm/index-obGyiHiO.js
/*!
* (C) Ionic http://ionicframework.com - MIT License
*/
var ION_CONTENT_TAG_NAME = "ION-CONTENT";
var ION_CONTENT_ELEMENT_SELECTOR = "ion-content";
var ION_CONTENT_CLASS_SELECTOR = ".ion-content-scroll-host";
/**
* Selector used for implementations reliant on `<ion-content>` for scroll event changes.
*
* Developers should use the `.ion-content-scroll-host` selector to target the element emitting
* scroll events. With virtual scroll implementations this will be the host element for
* the scroll viewport.
*/
var ION_CONTENT_SELECTOR = `${ION_CONTENT_ELEMENT_SELECTOR}, ${ION_CONTENT_CLASS_SELECTOR}`;
var isIonContent = (el) => el.tagName === ION_CONTENT_TAG_NAME;
/**
* Waits for the element host fully initialize before
* returning the inner scroll element.
*
* For `ion-content` the scroll target will be the result
* of the `getScrollElement` function.
*
* For custom implementations it will be the element host
* or a selector within the host, if supplied through `scrollTarget`.
*/
var getScrollElement = async (el) => {
	if (isIonContent(el)) {
		await new Promise((resolve) => componentOnReady(el, resolve));
		return el.getScrollElement();
	}
	return el;
};
/**
* Queries the element matching the selector for IonContent.
* See ION_CONTENT_SELECTOR for the selector used.
*/
var findIonContent = (el) => {
	/**
	* First we try to query the custom scroll host selector in cases where
	* the implementation is using an outer `ion-content` with an inner custom
	* scroll container.
	*/
	const customContentHost = el.querySelector(ION_CONTENT_CLASS_SELECTOR);
	if (customContentHost) return customContentHost;
	return el.querySelector(ION_CONTENT_SELECTOR);
};
/**
* Queries the closest element matching the selector for IonContent.
*/
var findClosestIonContent = (el) => {
	return el.closest(ION_CONTENT_SELECTOR);
};
/**
* Queries the custom scroll host an `ion-refresher` scrolls with in the given
* `ion-content`. A refresher only pairs with the first host.
*/
var findRefresherScrollHost = (ionContent) => {
	return ionContent.querySelector(ION_CONTENT_CLASS_SELECTOR);
};
/**
* Queries the `ion-refresher` that scrolls with the given content element,
* which may be an `ion-content` or a custom scroll host. A refresher is a
* `slot="fixed"` child of `ion-content`, so it is a sibling of a scroll host
* rather than a descendant of it.
*/
var findRefresherInContent = (contentEl) => {
	if (isIonContent(contentEl)) return contentEl.querySelector("ion-refresher");
	const ionContent = contentEl.closest(ION_CONTENT_ELEMENT_SELECTOR);
	if (ionContent === null) return null;
	const refresherScrollHost = findRefresherScrollHost(ionContent);
	if (refresherScrollHost === null || !refresherScrollHost.contains(contentEl)) return null;
	return ionContent.querySelector("ion-refresher");
};
/**
* Scrolls to the top of the element. If an `ion-content` is found, it will scroll
* using the public API `scrollToTop` with a duration.
*/
var scrollToTop = (el, durationMs) => {
	if (isIonContent(el)) return el.scrollToTop(durationMs);
	return Promise.resolve(el.scrollTo({
		top: 0,
		left: 0,
		behavior: "smooth"
	}));
};
/**
* Scrolls by a specified X/Y distance in the component. If an `ion-content` is found, it will scroll
* using the public API `scrollByPoint` with a duration.
*/
var scrollByPoint = (el, x, y, durationMs) => {
	if (isIonContent(el)) return el.scrollByPoint(x, y, durationMs);
	return Promise.resolve(el.scrollBy({
		top: y,
		left: x,
		behavior: durationMs > 0 ? "smooth" : "auto"
	}));
};
/**
* Prints an error informing developers that an implementation requires an element to be used
* within either the `ion-content` selector or the `.ion-content-scroll-host` class.
*/
var printIonContentErrorMsg = (el) => {
	return printRequiredElementError(el, ION_CONTENT_ELEMENT_SELECTOR);
};
/**
* Several components in Ionic need to prevent scrolling
* during a gesture (card modal, range, item sliding, etc).
* Use this utility to account for ion-content and custom content hosts.
*/
var disableContentScrollY = (contentEl) => {
	if (isIonContent(contentEl)) {
		const ionContent = contentEl;
		const initialScrollY = ionContent.scrollY;
		ionContent.scrollY = false;
		/**
		* This should be passed into resetContentScrollY
		* so that we can revert ion-content's scrollY to the
		* correct state. For example, if scrollY = false
		* initially, we do not want to enable scrolling
		* when we call resetContentScrollY.
		*/
		return initialScrollY;
	} else {
		contentEl.style.setProperty("overflow", "hidden");
		return true;
	}
};
var resetContentScrollY = (contentEl, initialScrollY) => {
	if (isIonContent(contentEl)) contentEl.scrollY = initialScrollY;
	else contentEl.style.removeProperty("overflow");
};
//#endregion
export { findIonContent as a, getScrollElement as c, resetContentScrollY as d, scrollByPoint as f, findClosestIonContent as i, isIonContent as l, ION_CONTENT_ELEMENT_SELECTOR as n, findRefresherInContent as o, scrollToTop as p, disableContentScrollY as r, findRefresherScrollHost as s, ION_CONTENT_CLASS_SELECTOR as t, printIonContentErrorMsg as u };
