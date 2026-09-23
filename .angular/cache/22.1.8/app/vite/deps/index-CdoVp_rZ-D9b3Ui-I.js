import { a as config, h as printIonWarning, t as Build, x as writeTask } from "./index-Dvqtt_WK-CtfmC4By.js";
import { v as raf } from "./helpers-BJFnZngp-COG28xNj.js";
//#region node_modules/@ionic/core/dist/esm/index-CdoVp_rZ.js
/*!
* (C) Ionic http://ionicframework.com - MIT License
*/
var LIFECYCLE_WILL_ENTER = "ionViewWillEnter";
var LIFECYCLE_DID_ENTER = "ionViewDidEnter";
var LIFECYCLE_WILL_LEAVE = "ionViewWillLeave";
var LIFECYCLE_DID_LEAVE = "ionViewDidLeave";
var LIFECYCLE_WILL_UNLOAD = "ionViewWillUnload";
/**
* Moves focus to a specified element. Note that we do not remove the tabindex
* because that can result in an unintentional blur. Non-focusables can't be
* focused, so the body will get focused again.
*/
var moveFocus = (el) => {
	el.tabIndex = -1;
	el.focus();
};
/**
* Elements that are hidden using `display: none` should not be focused even if
* they are present in the DOM.
*/
var isVisible = (el) => {
	return el.offsetParent !== null;
};
/**
* The focus controller allows us to manage focus within a view so assistive
* technologies can inform users of changes to the navigation state. Traditional
* native apps have a way of informing assistive technology about a navigation
* state change. Mobile browsers have this too, but only when doing a full page
* load. In a single page app we do not do that, so we need to build this
* integration ourselves.
*/
var createFocusController = () => {
	const saveViewFocus = (referenceEl) => {
		/**
		* When going back to a previously visited page focus should typically be moved
		* back to the element that was last focused when the user was on this view.
		*/
		if (config.get("focusManagerPriority", false)) {
			const activeEl = document.activeElement;
			if (activeEl !== null && referenceEl?.contains(activeEl)) activeEl.setAttribute(LAST_FOCUS, "true");
		}
	};
	const setViewFocus = (referenceEl) => {
		const focusManagerPriorities = config.get("focusManagerPriority", false);
		/**
		* If the focused element is a descendant of the referenceEl then it's possible
		* that the app developer manually moved focus, so we do not want to override that.
		* This can happen with inputs the are focused when a view transitions in.
		*/
		if (Array.isArray(focusManagerPriorities) && !referenceEl.contains(document.activeElement)) {
			/**
			* When going back to a previously visited view focus should always be moved back
			* to the element that the user was last focused on when they were on this view.
			*/
			const lastFocus = referenceEl.querySelector(`[${LAST_FOCUS}]`);
			if (lastFocus && isVisible(lastFocus)) {
				moveFocus(lastFocus);
				return;
			}
			for (const priority of focusManagerPriorities)
 /**
			* For each recognized case (excluding the default case) make sure to return
			* so that the fallback focus behavior does not run.
			*
			* We intentionally query for specific roles/semantic elements so that the
			* transition manager can work with both Ionic and non-Ionic UI components.
			*
			* If new selectors are added, be sure to remove the outline ring by adding
			* new selectors to rule in core.scss.
			*/
			switch (priority) {
				case "content":
					const content = referenceEl.querySelector("main, [role=\"main\"]");
					if (content && isVisible(content)) {
						moveFocus(content);
						return;
					}
					break;
				case "heading":
					const headingOne = referenceEl.querySelector("h1, [role=\"heading\"][aria-level=\"1\"]");
					if (headingOne && isVisible(headingOne)) {
						moveFocus(headingOne);
						return;
					}
					break;
				case "banner":
					const header = referenceEl.querySelector("header, [role=\"banner\"]");
					if (header && isVisible(header)) {
						moveFocus(header);
						return;
					}
					break;
				default:
					printIonWarning(`Unrecognized focus manager priority value ${priority}`);
					break;
			}
			/**
			* If there is nothing to focus then focus the page so focus at least moves to
			* the correct view. The browser will then determine where within the page to
			* move focus to.
			*/
			moveFocus(referenceEl);
		}
	};
	return {
		saveViewFocus,
		setViewFocus
	};
};
var LAST_FOCUS = "ion-last-focus";
var iosTransitionAnimation = () => import("./@ionic_angular_lazy.js").then((n) => n.n);
var mdTransitionAnimation = () => import("./@ionic_angular_lazy.js").then((n) => n.t);
var focusController = createFocusController();
/**
* Executes the main page transition.
* It also manages the lifecycle of header visibility (if any)
* to prevent visual flickering in iOS. The flickering only
* occurs for a condensed header that is placed above the content.
*
* @param opts Options for the transition.
* @returns A promise that resolves when the transition is complete.
*/
var transition = (opts) => {
	return new Promise((resolve, reject) => {
		writeTask(() => {
			const transitioningInactiveHeader = getIosIonHeader(opts);
			beforeTransition(opts, transitioningInactiveHeader);
			runTransition(opts).then((result) => {
				if (result.animation) result.animation.destroy();
				afterTransition(opts);
				resolve(result);
			}, (error) => {
				afterTransition(opts);
				reject(error);
			}).finally(() => {
				setHeaderTransitionClass(transitioningInactiveHeader, false);
			});
		});
	});
};
var beforeTransition = (opts, transitioningInactiveHeader) => {
	const enteringEl = opts.enteringEl;
	const leavingEl = opts.leavingEl;
	focusController.saveViewFocus(leavingEl);
	setZIndex(enteringEl, leavingEl, opts.direction);
	setHeaderTransitionClass(transitioningInactiveHeader, true);
	if (opts.showGoBack) enteringEl.classList.add("can-go-back");
	else enteringEl.classList.remove("can-go-back");
	setPageHidden(enteringEl, false);
	/**
	* When transitioning, the page should not
	* respond to click events. This resolves small
	* issues like users double tapping the ion-back-button.
	* These pointer events are removed in `afterTransition`.
	*/
	enteringEl.style.setProperty("pointer-events", "none");
	if (leavingEl) {
		setPageHidden(leavingEl, false);
		leavingEl.style.setProperty("pointer-events", "none");
	}
};
var runTransition = async (opts) => {
	const animationBuilder = await getAnimationBuilder(opts);
	return animationBuilder && Build.isBrowser ? animation(animationBuilder, opts) : noAnimation(opts);
};
var afterTransition = (opts) => {
	const enteringEl = opts.enteringEl;
	const leavingEl = opts.leavingEl;
	enteringEl.classList.remove("ion-page-invisible");
	enteringEl.style.removeProperty("pointer-events");
	if (leavingEl !== void 0) {
		leavingEl.classList.remove("ion-page-invisible");
		leavingEl.style.removeProperty("pointer-events");
	}
	focusController.setViewFocus(enteringEl);
};
var getAnimationBuilder = async (opts) => {
	if (!opts.leavingEl || !opts.animated || opts.duration === 0) return;
	if (opts.animationBuilder) return opts.animationBuilder;
	return opts.mode === "ios" ? (await iosTransitionAnimation()).iosTransitionAnimation : (await mdTransitionAnimation()).mdTransitionAnimation;
};
var animation = async (animationBuilder, opts) => {
	await waitForReady(opts, true);
	const trans = animationBuilder(opts.baseEl, opts);
	fireWillEvents(opts.enteringEl, opts.leavingEl);
	const didComplete = await playTransition(trans, opts);
	if (opts.progressCallback) opts.progressCallback(void 0);
	if (didComplete) fireDidEvents(opts.enteringEl, opts.leavingEl);
	return {
		hasCompleted: didComplete,
		animation: trans
	};
};
var noAnimation = async (opts) => {
	const enteringEl = opts.enteringEl;
	const leavingEl = opts.leavingEl;
	/**
	* If the focus manager is enabled then we need to wait for Ionic components to be
	* rendered otherwise the component to focus may not be focused because it is hidden.
	*/
	await waitForReady(opts, config.get("focusManagerPriority", false));
	fireWillEvents(enteringEl, leavingEl);
	fireDidEvents(enteringEl, leavingEl);
	return { hasCompleted: true };
};
var waitForReady = async (opts, defaultDeep) => {
	if (opts.deepWait !== void 0 ? opts.deepWait : defaultDeep) await Promise.all([deepReady(opts.enteringEl), deepReady(opts.leavingEl)]);
	await notifyViewReady(opts.viewIsReady, opts.enteringEl);
};
var notifyViewReady = async (viewIsReady, enteringEl) => {
	if (viewIsReady) await viewIsReady(enteringEl);
};
var playTransition = (trans, opts) => {
	const progressCallback = opts.progressCallback;
	const promise = new Promise((resolve) => {
		trans.onFinish((currentStep) => resolve(currentStep === 1));
	});
	if (progressCallback) {
		trans.progressStart(true);
		progressCallback(trans);
	} else trans.play();
	return promise;
};
var fireWillEvents = (enteringEl, leavingEl) => {
	lifecycle(leavingEl, LIFECYCLE_WILL_LEAVE);
	lifecycle(enteringEl, LIFECYCLE_WILL_ENTER);
};
var fireDidEvents = (enteringEl, leavingEl) => {
	lifecycle(enteringEl, LIFECYCLE_DID_ENTER);
	lifecycle(leavingEl, LIFECYCLE_DID_LEAVE);
};
var lifecycle = (el, eventName) => {
	if (el) {
		const ev = new CustomEvent(eventName, {
			bubbles: false,
			cancelable: false
		});
		el.dispatchEvent(ev);
	}
};
/**
* Wait two request animation frame loops.
* This allows the framework implementations enough time to mount
* the user-defined contents. This is often needed when using inline
* modals and popovers that accept user components. For popover,
* the contents must be mounted for the popover to be sized correctly.
* For modals, the contents must be mounted for iOS to run the
* transition correctly.
*
* On Angular and React, a single raf is enough time, but for Vue
* we need to wait two rafs. As a result we are using two rafs for
* all frameworks to ensure contents are mounted.
*/
var waitForMount = () => {
	return new Promise((resolve) => raf(() => raf(() => resolve())));
};
var deepReady = async (el) => {
	const element = el;
	if (element) {
		if (element.componentOnReady != null) {
			if (await element.componentOnReady() != null) return;
		} else if (element.__registerHost != null) {
			await new Promise((resolve) => raf(resolve));
			return;
		}
		await Promise.all(Array.from(element.children).map(deepReady));
	}
};
var setPageHidden = (el, hidden) => {
	if (hidden) {
		el.setAttribute("aria-hidden", "true");
		el.classList.add("ion-page-hidden");
	} else {
		el.hidden = false;
		el.removeAttribute("aria-hidden");
		el.classList.remove("ion-page-hidden");
	}
};
var setZIndex = (enteringEl, leavingEl, direction) => {
	if (enteringEl !== void 0) enteringEl.style.zIndex = direction === "back" ? "99" : "101";
	if (leavingEl !== void 0) leavingEl.style.zIndex = "100";
};
/**
* Add a class to ensure that the header (if any)
* does not flicker during the transition. By adding the
* transitioning class, we ensure that the header has
* the necessary styles to prevent the following flickers:
* 1. When entering a page with a condensed header, the
* header should never be visible. However,
* it briefly renders the background color while
* the transition is occurring.
* 2. When leaving a page with a condensed header, the
* header has an opacity of 0 and the pages
* have a z-index which causes the entering page to
* briefly show it's content underneath the leaving page.
* 3. When entering a page or leaving a page with a fade
* header, the header should not have a background color.
* However, it briefly shows the background color while
* the transition is occurring.
*
* @param header The header element to modify.
* @param isTransitioning Whether the transition is occurring.
*/
var setHeaderTransitionClass = (header, isTransitioning) => {
	if (!header) return;
	const transitionClass = "header-transitioning";
	if (isTransitioning) header.classList.add(transitionClass);
	else header.classList.remove(transitionClass);
};
var getIonPageElement = (element) => {
	if (element.classList.contains("ion-page")) return element;
	const ionPage = element.querySelector(":scope > .ion-page, :scope > ion-nav, :scope > ion-tabs");
	if (ionPage) return ionPage;
	return element;
};
/**
* Retrieves the ion-header element from a page based on the
* direction of the transition.
*
* @param opts Options for the transition.
* @returns The ion-header element or null if not found or not in 'ios' mode.
*/
var getIosIonHeader = (opts) => {
	const enteringEl = opts.enteringEl;
	const leavingEl = opts.leavingEl;
	const direction = opts.direction;
	if (opts.mode !== "ios") return null;
	const element = direction === "back" ? leavingEl : enteringEl;
	if (!element) return null;
	return element.querySelector("ion-header");
};
//#endregion
export { getIonPageElement as a, transition as c, deepReady as i, waitForMount as l, LIFECYCLE_WILL_LEAVE as n, lifecycle as o, LIFECYCLE_WILL_UNLOAD as r, setPageHidden as s, LIFECYCLE_DID_LEAVE as t };
