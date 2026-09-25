import { t as __exportAll } from "./rolldown-runtime-D7D4PA-g.js";
import { a as config, h as printIonWarning, m as printIonError } from "./index-Dvqtt_WK-CtfmC4By.js";
import { C as win, c as focusVisibleElement, i as componentOnReady, l as getElementRoot, s as doc, t as addEventListener, y as removeEventListener } from "./helpers-BJFnZngp-COG28xNj.js";
import { t as BACKDROP_NO_SCROLL } from "./gesture-controller-B_gJaBk0-B8pQAih_.js";
import { t as getIonMode } from "./ionic-global-BSaFA7np-C0AYHzhu.js";
import { t as CoreDelegate } from "./framework-delegate-CUDbUfWS-SLUux__8.js";
//#region node_modules/@ionic/core/dist/esm/overlays-a_5AhqWk.js
/*!
* (C) Ionic http://ionicframework.com - MIT License
*/
var overlays_a_5AhqWk_exports = /* @__PURE__ */ __exportAll({
	B: () => BACKDROP,
	F: () => FOCUS_TRAP_DISABLE_CLASS,
	G: () => GESTURE,
	M: () => 99,
	O: () => 39,
	a: () => alertController,
	b: () => actionSheetController,
	c: () => createDelegateController,
	d: () => createTriggerController,
	e: () => present,
	f: () => dismiss,
	g: () => eventMethod,
	h: () => prepareOverlay,
	i: () => isCancel,
	j: () => cleanupRootFocusTrapAccessibility,
	k: () => setOverlayId,
	l: () => loadingController,
	m: () => modalController,
	n: () => getOverlaySizeType,
	o: () => focusFirstDescendant,
	p: () => popoverController,
	q: () => getPresentedOverlay,
	r: () => restoreRootFocusTrapAccessibility,
	s: () => safeCall,
	t: () => toastController,
	u: () => focusLastDescendant,
	v: () => shouldUseCloseWatcher,
	w: () => hardwareBackButton
});
/**
* CloseWatcher is a newer API that lets
* use detect the hardware back button event
* in a web browser: https://caniuse.com/?search=closewatcher
* However, not every browser supports it yet.
*
* This needs to be a function so that we can
* check the config once it has been set.
* Otherwise, this code would be evaluated the
* moment this file is evaluated which could be
* before the config is set.
*/
var shouldUseCloseWatcher = () => config.get("experimentalCloseWatcher", false) && win !== void 0 && "CloseWatcher" in win;
/**
* When hardwareBackButton: false in config,
* we need to make sure we also block the default
* webview behavior. If we don't then it will be
* possible for users to navigate backward while
* an overlay is still open. Additionally, it will
* give the appearance that the hardwareBackButton
* config is not working as the page transition
* will still happen.
*/
var blockHardwareBackButton = () => {
	document.addEventListener("backbutton", () => {});
};
var startHardwareBackButton = () => {
	const doc = document;
	let busy = false;
	const backButtonCallback = () => {
		if (busy) return;
		let index = 0;
		let handlers = [];
		const ev = new CustomEvent("ionBackButton", {
			bubbles: false,
			detail: { register(priority, handler) {
				handlers.push({
					priority,
					handler,
					id: index++
				});
			} }
		});
		doc.dispatchEvent(ev);
		const executeAction = async (handlerRegister) => {
			try {
				if (handlerRegister?.handler) {
					const result = handlerRegister.handler(processHandlers);
					if (result != null) await result;
				}
			} catch (e) {
				printIonError("[ion-app] - Exception in startHardwareBackButton:", e);
			}
		};
		const processHandlers = () => {
			if (handlers.length > 0) {
				let selectedHandler = {
					priority: Number.MIN_SAFE_INTEGER,
					handler: () => void 0,
					id: -1
				};
				handlers.forEach((handler) => {
					if (handler.priority >= selectedHandler.priority) selectedHandler = handler;
				});
				busy = true;
				handlers = handlers.filter((handler) => handler.id !== selectedHandler.id);
				executeAction(selectedHandler).then(() => busy = false);
			}
		};
		processHandlers();
	};
	/**
	* If the CloseWatcher is defined then
	* we don't want to also listen for the native
	* backbutton event otherwise we may get duplicate
	* events firing.
	*/
	if (shouldUseCloseWatcher()) {
		let watcher;
		const configureWatcher = () => {
			watcher?.destroy();
			watcher = new win.CloseWatcher();
			/**
			* Once a close request happens
			* the watcher gets destroyed.
			* As a result, we need to re-configure
			* the watcher so we can respond to other
			* close requests.
			*/
			watcher.onclose = () => {
				backButtonCallback();
				configureWatcher();
			};
		};
		configureWatcher();
	} else doc.addEventListener("backbutton", backButtonCallback);
};
var OVERLAY_BACK_BUTTON_PRIORITY = 100;
var hardwareBackButton = /*#__PURE__*/ Object.freeze({
	__proto__: null,
	MENU_BACK_BUTTON_PRIORITY: 99,
	OVERLAY_BACK_BUTTON_PRIORITY,
	blockHardwareBackButton,
	shouldUseCloseWatcher,
	startHardwareBackButton
});
/**
* This query string selects elements that
* are eligible to receive focus. We select
* interactive elements that meet the following
* criteria:
* 1. Element does not have a negative tabindex
* 2. Element does not have `hidden`
* 3. Element does not have `disabled` for non-Ionic components.
* 4. Element does not have `disabled` or `disabled="true"` for Ionic components.
* Note: We need this distinction because `disabled="false"` is
* valid usage for the disabled property on ion-button.
*/
var focusableQueryString = "[tabindex]:not([tabindex^=\"-\"]):not([hidden]):not([disabled]), input:not([type=hidden]):not([tabindex^=\"-\"]):not([hidden]):not([disabled]), textarea:not([tabindex^=\"-\"]):not([hidden]):not([disabled]), button:not([tabindex^=\"-\"]):not([hidden]):not([disabled]), select:not([tabindex^=\"-\"]):not([hidden]):not([disabled]), ion-checkbox:not([tabindex^=\"-\"]):not([hidden]):not([disabled]), ion-radio:not([tabindex^=\"-\"]):not([hidden]):not([disabled]), .ion-focusable:not([tabindex^=\"-\"]):not([hidden]):not([disabled]), .ion-focusable[disabled=\"false\"]:not([tabindex^=\"-\"]):not([hidden])";
/**
* Focuses the first descendant in a context
* that can receive focus. If none exists,
* a fallback element will be focused.
* This fallback is typically an ancestor
* container such as a menu or overlay so focus does not
* leave the container we are trying to trap focus in.
*
* If no fallback is specified then we focus the container itself.
*/
var focusFirstDescendant = (ref, fallbackElement) => {
	focusElementInContext(ref.querySelector(focusableQueryString), fallbackElement ?? ref);
};
/**
* Focuses the last descendant in a context
* that can receive focus. If none exists,
* a fallback element will be focused.
* This fallback is typically an ancestor
* container such as a menu or overlay so focus does not
* leave the container we are trying to trap focus in.
*
* If no fallback is specified then we focus the container itself.
*/
var focusLastDescendant = (ref, fallbackElement) => {
	const inputs = Array.from(ref.querySelectorAll(focusableQueryString));
	focusElementInContext(inputs.length > 0 ? inputs[inputs.length - 1] : null, fallbackElement ?? ref);
};
/**
* Focuses a particular element in a context. If the element
* doesn't have anything focusable associated with it then
* a fallback element will be focused.
*
* This fallback is typically an ancestor
* container such as a menu or overlay so focus does not
* leave the container we are trying to trap focus in.
* This should be used instead of the focus() method
* on most elements because the focusable element
* may not be the host element.
*
* For example, if an ion-button should be focused
* then we should actually focus the native <button>
* element inside of ion-button's shadow root, not
* the host element itself.
*/
var focusElementInContext = (hostToFocus, fallbackElement) => {
	let elementToFocus = hostToFocus;
	const shadowRoot = hostToFocus?.shadowRoot;
	if (shadowRoot) elementToFocus = shadowRoot.querySelector(focusableQueryString) || hostToFocus;
	if (elementToFocus) {
		const radioGroup = elementToFocus.closest("ion-radio-group");
		if (radioGroup) radioGroup.setFocus();
		else focusVisibleElement(elementToFocus);
	} else fallbackElement.focus();
};
var lastOverlayIndex = 0;
var lastId = 0;
var activeAnimations = /* @__PURE__ */ new WeakMap();
/**
* Determines if the overlay's backdrop is always blocking (no background interaction).
* Returns false if showBackdrop=false or backdropBreakpoint > 0.
*/
var isBackdropAlwaysBlocking = (el) => {
	return el.showBackdrop !== false && !((el.backdropBreakpoint ?? 0) > 0);
};
/**
* Whether the overlay takes the app root out of the accessibility tree and
* blocks body scroll while presented. Toasts never do, modal and popover can
* opt out with `focusTrap={false}`, and a backdrop that does not block
* (`showBackdrop={false}`, or a `backdropBreakpoint` above 0) is excluded.
*/
var locksAppRoot = (el) => {
	return el.tagName !== "ION-TOAST" && el.focusTrap !== false && isBackdropAlwaysBlocking(el);
};
var createController = (tagName) => {
	return {
		create(options) {
			return createOverlay(tagName, options);
		},
		dismiss(data, role, id) {
			return dismissOverlay(document, data, role, tagName, id);
		},
		async getTop() {
			return getPresentedOverlay(document, tagName);
		}
	};
};
var alertController = /*@__PURE__*/ createController("ion-alert");
var actionSheetController = /*@__PURE__*/ createController("ion-action-sheet");
var loadingController = /*@__PURE__*/ createController("ion-loading");
var modalController = /*@__PURE__*/ createController("ion-modal");
var popoverController = /*@__PURE__*/ createController("ion-popover");
var toastController = /*@__PURE__*/ createController("ion-toast");
/**
* Prepares the overlay element to be presented.
*/
var prepareOverlay = (el) => {
	if (typeof document !== "undefined")
 /**
	* Adds a single instance of event listeners for application behaviors:
	*
	* - Escape Key behavior to dismiss an overlay
	* - Trapping focus within an overlay
	* - Back button behavior to dismiss an overlay
	*
	* This only occurs when the first overlay is created.
	*/
	connectListeners(document);
	/**
	* overlayIndex is used in the overlay components to set a zIndex.
	* This ensures that the most recently presented overlay will be
	* on top.
	*/
	el.overlayIndex = lastOverlayIndex++;
};
/**
* Assigns an incrementing id to an overlay element, that does not
* already have an id assigned to it.
*
* Used to track unique instances of an overlay element.
*/
var setOverlayId = (el) => {
	if (!el.hasAttribute("id")) el.id = `ion-overlay-${++lastId}`;
	return el.id;
};
var createOverlay = (tagName, opts) => {
	if (typeof window !== "undefined" && typeof window.customElements !== "undefined") return window.customElements.whenDefined(tagName).then(() => {
		const element = document.createElement(tagName);
		element.classList.add("overlay-hidden");
		/**
		* Convert the passed in overlay options into props
		* that get passed down into the new overlay.
		*/
		Object.assign(element, {
			...opts,
			hasController: true
		});
		getAppRoot(document).appendChild(element);
		return new Promise((resolve) => componentOnReady(element, resolve));
	});
	return Promise.resolve();
};
var isOverlayHidden = (overlay) => overlay.classList.contains("overlay-hidden");
/**
* Focuses a particular element in an overlay. If the element
* doesn't have anything focusable associated with it then
* the overlay itself will be focused.
* This should be used instead of the focus() method
* on most elements because the focusable element
* may not be the host element.
*
* For example, if an ion-button should be focused
* then we should actually focus the native <button>
* element inside of ion-button's shadow root, not
* the host element itself.
*/
var focusElementInOverlay = (hostToFocus, overlay) => {
	let elementToFocus = hostToFocus;
	const shadowRoot = hostToFocus?.shadowRoot;
	if (shadowRoot) elementToFocus = shadowRoot.querySelector(focusableQueryString) || hostToFocus;
	if (elementToFocus) focusVisibleElement(elementToFocus);
	else overlay.focus();
};
/**
* Traps keyboard focus inside of overlay components.
* Based on https://w3c.github.io/aria-practices/examples/dialog-modal/alertdialog.html
* This includes the following components: Action Sheet, Alert, Loading, Modal,
* Picker, and Popover.
* Should NOT include: Toast
*/
var trapKeyboardFocus = (ev, doc) => {
	const lastOverlay = getPresentedOverlay(doc, "ion-alert,ion-action-sheet,ion-loading,ion-modal,ion-popover");
	const target = ev.target;
	/**
	* If no active overlay, ignore this event.
	*
	* If this component uses the shadow dom,
	* this global listener is pointless
	* since it will not catch the focus
	* traps as they are inside the shadow root.
	* We need to add a listener to the shadow root
	* itself to ensure the focus trap works.
	*/
	if (!lastOverlay || !target) return;
	/**
	* If the ion-disable-focus-trap class
	* is present on an overlay, then this component
	* instance has opted out of focus trapping.
	* An example of this is when the sheet modal
	* has a backdrop that is disabled. The content
	* behind the sheet should be focusable until
	* the backdrop is enabled.
	*/
	if (lastOverlay.classList.contains("ion-disable-focus-trap")) return;
	const trapScopedFocus = () => {
		/**
		* If we are focusing the overlay, clear
		* the last focused element so that hitting
		* tab activates the first focusable element
		* in the overlay wrapper.
		*/
		if (lastOverlay === target) lastOverlay.lastFocus = void 0;
		else if (target.tagName === "ION-TOAST") focusElementInOverlay(lastOverlay.lastFocus, lastOverlay);
		else {
			/**
			* We do not want to focus the traps, so get the overlay
			* wrapper element as the traps live outside of the wrapper.
			*/
			const overlayRoot = getElementRoot(lastOverlay);
			if (!overlayRoot.contains(target)) return;
			const overlayWrapper = overlayRoot.querySelector(".ion-overlay-wrapper");
			if (!overlayWrapper) return;
			/**
			* If the target is inside the wrapper, let the browser
			* focus as normal and keep a log of the last focused element.
			* Additionally, if the backdrop was tapped we should not
			* move focus back inside the wrapper as that could cause
			* an interactive elements focus state to activate.
			*/
			if (overlayWrapper.contains(target) || target === overlayRoot.querySelector("ion-backdrop")) lastOverlay.lastFocus = target;
			else {
				/**
				* Otherwise, we must have focused one of the focus traps.
				* We need to wrap the focus to either the first element
				* or the last element.
				*/
				/**
				* Once we call `focusFirstDescendant` and focus the first
				* descendant, another focus event will fire which will
				* cause `lastOverlay.lastFocus` to be updated before
				* we can run the code after that. We will cache the value
				* here to avoid that.
				*/
				const lastFocus = lastOverlay.lastFocus;
				focusFirstDescendant(overlayWrapper, lastOverlay);
				/**
				* If the cached last focused element is the
				* same as the active element, then we need
				* to wrap focus to the last descendant. This happens
				* when the first descendant is focused, and the user
				* presses Shift + Tab. The previous line will focus
				* the same descendant again (the first one), causing
				* last focus to equal the active element.
				*/
				if (lastFocus === doc.activeElement) focusLastDescendant(overlayWrapper, lastOverlay);
				lastOverlay.lastFocus = doc.activeElement;
			}
		}
	};
	const trapShadowFocus = () => {
		/**
		* If the target is inside the wrapper, let the browser
		* focus as normal and keep a log of the last focused element.
		*/
		if (lastOverlay.contains(target)) lastOverlay.lastFocus = target;
		else if (target.tagName === "ION-TOAST") focusElementInOverlay(lastOverlay.lastFocus, lastOverlay);
		else {
			/**
			* Otherwise, we are about to have focus
			* go out of the overlay. We need to wrap
			* the focus to either the first element
			* or the last element.
			*/
			/**
			* Once we call `focusFirstDescendant` and focus the first
			* descendant, another focus event will fire which will
			* cause `lastOverlay.lastFocus` to be updated before
			* we can run the code after that. We will cache the value
			* here to avoid that.
			*/
			const lastFocus = lastOverlay.lastFocus;
			focusFirstDescendant(lastOverlay);
			/**
			* If the cached last focused element is the
			* same as the active element, then we need
			* to wrap focus to the last descendant. This happens
			* when the first descendant is focused, and the user
			* presses Shift + Tab. The previous line will focus
			* the same descendant again (the first one), causing
			* last focus to equal the active element.
			*/
			if (lastFocus === doc.activeElement) focusLastDescendant(lastOverlay);
			lastOverlay.lastFocus = doc.activeElement;
		}
	};
	if (lastOverlay.shadowRoot) trapShadowFocus();
	else trapScopedFocus();
};
var connectListeners = (doc) => {
	if (lastOverlayIndex === 0) {
		lastOverlayIndex = 1;
		doc.addEventListener("focus", (ev) => {
			trapKeyboardFocus(ev, doc);
		}, true);
		doc.addEventListener("ionBackButton", (ev) => {
			const lastOverlay = getPresentedOverlay(doc);
			if (lastOverlay?.backdropDismiss) ev.detail.register(OVERLAY_BACK_BUTTON_PRIORITY, () => {
				/**
				* Do not return this promise otherwise
				* the hardware back button utility will
				* be blocked until the overlay dismisses.
				* This is important for a modal with canDismiss.
				* If the application presents a confirmation alert
				* in the "canDismiss" callback, then it will be impossible
				* to use the hardware back button to dismiss the alert
				* dialog because the hardware back button utility
				* is blocked on waiting for the modal to dismiss.
				*/
				lastOverlay.dismiss(void 0, BACKDROP);
			});
		});
		/**
		* Handle ESC to close overlay.
		* CloseWatcher also handles pressing the Esc
		* key, so if a browser supports CloseWatcher then
		* this behavior will be handled via the ionBackButton
		* event.
		*/
		if (!shouldUseCloseWatcher()) doc.addEventListener("keydown", (ev) => {
			if (ev.key === "Escape") {
				const lastOverlay = getPresentedOverlay(doc);
				if (lastOverlay?.backdropDismiss) lastOverlay.dismiss(void 0, BACKDROP);
			}
		});
	}
};
var dismissOverlay = (doc, data, role, overlayTag, id) => {
	const overlay = getPresentedOverlay(doc, overlayTag, id);
	if (!overlay) return Promise.reject("overlay does not exist");
	return overlay.dismiss(data, role);
};
/**
* Returns a list of all overlays in the DOM even if they are not presented.
*/
var getOverlays = (doc, selector) => {
	if (selector === void 0) selector = "ion-alert,ion-action-sheet,ion-loading,ion-modal,ion-popover,ion-toast";
	return Array.from(doc.querySelectorAll(selector)).filter((c) => c.overlayIndex > 0);
};
/**
* Returns a list of all presented overlays.
* Inline overlays can exist in the DOM but not be presented,
* so there are times when we want to exclude those.
* @param doc The document to find the element within.
* @param overlayTag The selector for the overlay, defaults to Ionic overlay components.
*/
var getPresentedOverlays = (doc, overlayTag) => {
	return getOverlays(doc, overlayTag).filter((o) => !isOverlayHidden(o));
};
/**
* Returns a presented overlay element.
* @param doc The document to find the element within.
* @param overlayTag The selector for the overlay, defaults to Ionic overlay components.
* @param id The unique identifier for the overlay instance.
* @returns The overlay element or `undefined` if no overlay element is found.
*/
var getPresentedOverlay = (doc, overlayTag, id) => {
	const overlays = getPresentedOverlays(doc, overlayTag);
	return (id === void 0 ? overlays : overlays.filter((o) => o.id === id)).slice(-1)[0];
};
/**
* The element an app nests its views under. Overlays hide this rather than the
* whole root, so the overlay itself (a sibling) stays reachable.
*/
var getViewContainer = () => {
	return getAppRoot(document).querySelector("ion-router-outlet, #ion-view-container-root");
};
/**
* When an overlay is presented, the main
* focus is the overlay not the page content.
* We need to remove the page content from the
* accessibility tree otherwise when
* users use "read screen from top" gestures with
* TalkBack and VoiceOver, the screen reader will begin
* to read the content underneath the overlay.
*
* We need a container where all page components
* exist that is separate from where the overlays
* are added in the DOM. For most apps, this element
* is the top most ion-router-outlet. In the event
* that devs are not using a router,
* they will need to add the "ion-view-container-root"
* id to the element that contains all of their views.
*
* TODO: If Framework supports having multiple top
* level router outlets we would need to update this.
* Example: One outlet for side menu and one outlet
* for main content.
*/
var setRootAriaHidden = (hidden = false) => {
	const viewContainer = getViewContainer();
	if (!viewContainer) return;
	if (hidden) viewContainer.setAttribute("aria-hidden", "true");
	else viewContainer.removeAttribute("aria-hidden");
};
/**
* Cleans up root `aria-hidden` and `backdrop-no-scroll` when
* an overlay is removed from the DOM without going through
* the `dismiss()` flow (e.g., when a framework unmounts the
* overlay during a route change).
*
* Should be called from an overlay's `disconnectedCallback`
* when the overlay was still presented at the time of removal.
*/
var cleanupRootFocusTrapAccessibility = () => {
	if (typeof document === "undefined") return;
	if (!getPresentedOverlays(document).some((o) => locksAppRoot(o))) {
		setRootAriaHidden(false);
		document.body.classList.remove(BACKDROP_NO_SCROLL);
	}
};
/**
* Applies the root lock itself: `aria-hidden` on the view container, and
* `backdrop-no-scroll` on the body. Shared by `present()` and the restore
* below, which have to stay in lockstep.
*/
var applyRootLock = (el) => {
	if (!getViewContainer()?.contains(el)) setRootAriaHidden(true);
	document.body.classList.add(BACKDROP_NO_SCROLL);
};
/**
* Re-applies the root lock that `cleanupRootFocusTrapAccessibility()` released.
* Call from `connectedCallback` when the overlay is still presented.
*
* A synchronous move keeps the overlay connected, so the lock survives. A
* detach with a re-insert in a later task releases it, which is the shape a
* framework produces when it takes a subtree out and puts it back.
*/
var restoreRootFocusTrapAccessibility = (overlayEl) => {
	if (typeof document === "undefined") return;
	const el = overlayEl;
	if (!locksAppRoot(el)) return;
	applyRootLock(el);
};
var present = async (overlay, name, iosEnterAnimation, mdEnterAnimation, opts) => {
	if (overlay.presented) return;
	/**
	* When an overlay that steals focus
	* is dismissed, focus should be returned
	* to the element that was focused
	* prior to the overlay opening. Toast
	* does not steal focus and is excluded
	* from returning focus as a result.
	*/
	if (overlay.el.tagName !== "ION-TOAST") restoreElementFocus(overlay.el);
	/**
	* Some apps move inline overlays to a specific container
	* during the willPresent lifecycle (e.g., React portals via
	* onWillPresent). Defer applying aria-hidden/inert to the app
	* root until after willPresent so we can detect where the
	* overlay is finally inserted. If the overlay is inside the
	* view container subtree, skip adding aria-hidden/inert there
	* to avoid disabling the overlay.
	*/
	const overlayEl = overlay.el;
	const shouldLockRoot = locksAppRoot(overlayEl);
	overlay.presented = true;
	overlay.willPresent.emit();
	if (shouldLockRoot) applyRootLock(overlayEl);
	overlay.willPresentShorthand?.emit();
	const mode = getIonMode(overlay);
	if (await overlayAnimation(overlay, overlay.enterAnimation ? overlay.enterAnimation : config.get(name, mode === "ios" ? iosEnterAnimation : mdEnterAnimation), overlay.el, opts)) {
		overlay.didPresent.emit();
		overlay.didPresentShorthand?.emit();
	}
	/**
	* If the focused element is already
	* inside the overlay component then
	* focus should not be moved from that
	* to the overlay container.
	*/
	if (overlay.keyboardClose && (document.activeElement === null || !overlay.el.contains(document.activeElement))) {
		const focusTarget = getElementRoot(overlay.el).querySelector("[role=\"dialog\"][tabindex]") ?? overlay.el;
		/**
		* `preventScroll` keeps this a pure focus move so the viewport does not
		* jump when the wrapper is partially off-screen (e.g. a sheet modal).
		* Guard the options call so an older engine that mishandles it can never
		* reject present(); we fall back to a plain focus() in that case.
		*/
		try {
			focusTarget.focus({ preventScroll: true });
		} catch {
			focusTarget.focus();
		}
	}
	/**
	* If this overlay was previously dismissed without being
	* the topmost one (such as by manually calling dismiss()),
	* it would still have aria-hidden on being presented again.
	* Removing it here ensures the overlay is visible to screen
	* readers.
	*
	* If this overlay was being presented, then it was hidden
	* from screen readers during the animation. Now that the
	* animation is complete, we can reveal the overlay to
	* screen readers.
	*/
	overlay.el.removeAttribute("aria-hidden");
	overlay.el.removeAttribute("inert");
};
/**
* When an overlay component is dismissed,
* focus should be returned to the element
* that presented the overlay. Otherwise
* focus will be set on the body which
* means that people using screen readers
* or tabbing will need to re-navigate
* to where they were before they
* opened the overlay.
*/
var restoreElementFocus = async (overlayEl) => {
	let previousElement = document.activeElement;
	if (!previousElement) return;
	previousElement.blur();
	const shadowRoot = previousElement?.shadowRoot;
	if (shadowRoot) previousElement = shadowRoot.querySelector(focusableQueryString) || previousElement;
	await overlayEl.onDidDismiss();
	/**
	* After onDidDismiss, the overlay loses focus
	* because it is removed from the document
	*
	* > An element will also lose focus [...]
	* > if the element is removed from the document)
	*
	* https://developer.mozilla.org/en-US/docs/Web/API/Element/blur_event
	*
	* Additionally, `document.activeElement` returns:
	*
	* > The Element which currently has focus,
	* > `<body>` or null if there is
	* > no focused element.
	*
	* https://developer.mozilla.org/en-US/docs/Web/API/Document/activeElement#value
	*
	* However, if the user has already focused
	* an element sometime between onWillDismiss
	* and onDidDismiss (for example, focusing a
	* text box after tapping a button in an
	* action sheet) then don't restore focus to
	* previous element
	*/
	if (document.activeElement === null || document.activeElement === document.body) previousElement.focus();
};
var dismiss = async (overlay, data, role, name, iosLeaveAnimation, mdLeaveAnimation, opts) => {
	if (!overlay.presented) return false;
	/**
	* For accessibility, toasts lack focus traps and don't receive
	* `aria-hidden` on the root element when presented.
	*
	* Overlays that opt into focus trapping set `aria-hidden`
	* on the root element to keep keyboard focus and pointer
	* events inside the overlay. We must remove `aria-hidden`
	* from the root element when the last focus-trapping overlay
	* is dismissed.
	*/
	const overlaysLockingRoot = (doc !== void 0 ? getPresentedOverlays(doc) : []).filter((o) => locksAppRoot(o));
	const overlayEl = overlay.el;
	if (locksAppRoot(overlayEl) && overlaysLockingRoot.length === 1 && overlaysLockingRoot[0].id === overlayEl.id) {
		setRootAriaHidden(false);
		document.body.classList.remove(BACKDROP_NO_SCROLL);
	}
	overlay.presented = false;
	try {
		overlay.el.style.setProperty("pointer-events", "none");
		overlay.willDismiss.emit({
			data,
			role
		});
		overlay.willDismissShorthand?.emit({
			data,
			role
		});
		const mode = getIonMode(overlay);
		const animationBuilder = overlay.leaveAnimation ? overlay.leaveAnimation : config.get(name, mode === "ios" ? iosLeaveAnimation : mdLeaveAnimation);
		if (role !== "gesture") await overlayAnimation(overlay, animationBuilder, overlay.el, opts);
		overlay.didDismiss.emit({
			data,
			role
		});
		overlay.didDismissShorthand?.emit({
			data,
			role
		});
		(activeAnimations.get(overlay) || []).forEach((ani) => ani.destroy());
		activeAnimations.delete(overlay);
		/**
		* Make overlay hidden again in case it is being reused.
		* We can safely remove pointer-events: none as
		* overlay-hidden will set display: none.
		*/
		overlay.el.classList.add("overlay-hidden");
		overlay.el.style.removeProperty("pointer-events");
		/**
		* Clear any focus trapping references
		* when the overlay is dismissed.
		*/
		if (overlay.el.lastFocus !== void 0) overlay.el.lastFocus = void 0;
	} catch (err) {
		printIonError(`[${overlay.el.tagName.toLowerCase()}] - `, err);
	}
	overlay.el.remove();
	return true;
};
var getAppRoot = (doc) => {
	return doc.querySelector("ion-app") || doc.body;
};
var overlayAnimation = async (overlay, animationBuilder, baseEl, opts) => {
	baseEl.classList.remove("overlay-hidden");
	const aniRoot = overlay.el;
	const animation = animationBuilder(aniRoot, opts);
	if (!overlay.animated || !config.getBoolean("animated", true)) animation.duration(0);
	if (overlay.keyboardClose) animation.beforeAddWrite(() => {
		const activeElement = baseEl.ownerDocument.activeElement;
		if (activeElement?.matches("input,ion-input, ion-textarea")) activeElement.blur();
	});
	const activeAni = activeAnimations.get(overlay) || [];
	activeAnimations.set(overlay, [...activeAni, animation]);
	await animation.play();
	return true;
};
var eventMethod = (element, eventName) => {
	let resolve;
	const promise = new Promise((r) => resolve = r);
	onceEvent(element, eventName, (event) => {
		resolve(event.detail);
	});
	return promise;
};
var onceEvent = (element, eventName, callback) => {
	const handler = (ev) => {
		removeEventListener(element, eventName, handler);
		callback(ev);
	};
	addEventListener(element, eventName, handler);
};
var isCancel = (role) => {
	return role === "cancel" || role === "backdrop";
};
var defaultGate = (h) => h();
/**
* Calls a developer provided method while avoiding
* Angular Zones. Since the handler is provided by
* the developer, we should throw any errors
* received so that developer-provided bug
* tracking software can log it.
*/
var safeCall = (handler, arg) => {
	if (typeof handler === "function") return config.get("_zoneGate", defaultGate)(() => {
		try {
			return handler(arg);
		} catch (e) {
			throw e;
		}
	});
};
/**
* `--width` and `--height` values that leave an overlay spanning the viewport
* on that axis, so it reaches both edges. An empty value means the property
* was never overridden.
*/
var FULLSCREEN_SIZES = [
	"",
	"100%",
	"100vw",
	"100vh",
	"100dvw",
	"100dvh",
	"100svw",
	"100svh"
];
/**
* `--width` and `--height` values that size an overlay to its content, leaving
* the rendered size dependent on the content and on `--max-width` or
* `--max-height`.
*/
var CONTENT_SIZES = [
	"auto",
	"fit-content",
	"min-content",
	"max-content"
];
/**
* How an overlay's `--width` or `--height` determines its used size:
*
* `fullscreen` spans the viewport on that axis. `content` depends on the
* overlay's content, so its used size is not known until layout. `definite`
* resolves independently of the overlay's content size.
*
* Values are lowercased because CSS keywords are case-insensitive, while a
* custom property preserves the case in which it was authored. Content values
* are matched as a suffix so vendor-prefixed values such as `-moz-fit-content`
* are recognized.
*/
var getOverlaySizeType = (size) => {
	const value = size.trim().toLowerCase();
	if (FULLSCREEN_SIZES.includes(value)) return "fullscreen";
	if (CONTENT_SIZES.some((keyword) => value.endsWith(keyword))) return "content";
	return "definite";
};
var BACKDROP = "backdrop";
var GESTURE = "gesture";
/**
* Creates a delegate controller.
*
* Requires that the component has the following properties:
* - `el: HTMLElement`
* - `hasController: boolean`
* - `delegate?: FrameworkDelegate`
*
* @param ref The component class instance.
*/
var createDelegateController = (ref) => {
	let inline = false;
	let workingDelegate;
	const coreDelegate = CoreDelegate();
	/**
	* Determines whether or not an overlay is being used
	* inline or via a controller/JS and returns the correct delegate.
	* By default, subsequent calls to getDelegate will use
	* a cached version of the delegate.
	* This is useful for calling dismiss after present,
	* so that the correct delegate is given.
	* @param force `true` to force the non-cached version of the delegate.
	* @returns The delegate to use and whether or not the overlay is inline.
	*/
	const getDelegate = (force = false) => {
		if (workingDelegate && !force) return {
			delegate: workingDelegate,
			inline
		};
		const { el, hasController, delegate } = ref;
		inline = el.parentNode !== null && !hasController;
		workingDelegate = inline ? delegate || coreDelegate : delegate;
		return {
			inline,
			delegate: workingDelegate
		};
	};
	/**
	* Attaches a component in the DOM. Teleports the component
	* to the root of the app.
	* @param component The component to optionally construct and append to the element.
	*/
	const attachViewToDom = async (component) => {
		const { delegate } = getDelegate(true);
		if (delegate) return await delegate.attachViewToDom(ref.el, component);
		const { hasController } = ref;
		if (hasController && component !== void 0) throw new Error("framework delegate is missing");
		return null;
	};
	/**
	* Moves a component back to its original location in the DOM.
	*/
	const removeViewFromDom = () => {
		const { delegate } = getDelegate();
		if (delegate && ref.el !== void 0) delegate.removeViewFromDom(ref.el.parentElement, ref.el);
	};
	return {
		attachViewToDom,
		removeViewFromDom
	};
};
/**
* Constructs a trigger interaction for an overlay.
* Presents an overlay when the trigger is clicked.
*
* Usage:
* ```ts
* triggerController = createTriggerController();
* triggerController.addClickListener(el, trigger);
* ```
*/
var createTriggerController = () => {
	let destroyTriggerInteraction;
	/**
	* Removes the click listener from the trigger element.
	*/
	const removeClickListener = () => {
		if (destroyTriggerInteraction) {
			destroyTriggerInteraction();
			destroyTriggerInteraction = void 0;
		}
	};
	/**
	* Adds a click listener to the trigger element.
	* Presents the overlay when the trigger is clicked.
	* @param el The overlay element.
	* @param trigger The ID of the element to add a click listener to.
	*/
	const addClickListener = (el, trigger) => {
		removeClickListener();
		const triggerEl = trigger !== void 0 ? document.getElementById(trigger) : null;
		if (!triggerEl) {
			printIonWarning(`[${el.tagName.toLowerCase()}] - A trigger element with the ID "${trigger}" was not found in the DOM. The trigger element must be in the DOM when the "trigger" property is set on an overlay component.`, el);
			return;
		}
		const configureTriggerInteraction = (targetEl, overlayEl) => {
			const openOverlay = () => {
				overlayEl.present();
			};
			targetEl.addEventListener("click", openOverlay);
			return () => {
				targetEl.removeEventListener("click", openOverlay);
			};
		};
		destroyTriggerInteraction = configureTriggerInteraction(triggerEl, el);
	};
	return {
		addClickListener,
		removeClickListener
	};
};
var FOCUS_TRAP_DISABLE_CLASS = "ion-disable-focus-trap";
//#endregion
export { safeCall as C, toastController as E, restoreRootFocusTrapAccessibility as S, shouldUseCloseWatcher as T, modalController as _, alertController as a, prepareOverlay as b, createTriggerController as c, focusFirstDescendant as d, focusLastDescendant as f, loadingController as g, isCancel as h, actionSheetController as i, dismiss as l, getPresentedOverlay as m, FOCUS_TRAP_DISABLE_CLASS as n, cleanupRootFocusTrapAccessibility as o, getOverlaySizeType as p, GESTURE as r, createDelegateController as s, BACKDROP as t, eventMethod as u, overlays_a_5AhqWk_exports as v, setOverlayId as w, present as x, popoverController as y };
