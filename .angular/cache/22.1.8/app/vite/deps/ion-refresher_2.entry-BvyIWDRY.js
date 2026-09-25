import { _ as readTask, a as config, c as createEvent, d as getElement, m as printIonError, p as h, r as Host, v as registerInstance, x as writeTask } from "./index-Dvqtt_WK-CtfmC4By.js";
import { S as transitionEndAsync, i as componentOnReady, l as getElementRoot, r as clamp, v as raf } from "./helpers-BJFnZngp-COG28xNj.js";
import { t as createAnimation } from "./animation-CAzXJ2I1-D34TSm8w.js";
import { t as getTimeGivenProgression } from "./cubic-bezier-hHmYLOfE-CQJriwBy.js";
import { t as getIonMode } from "./ionic-global-BSaFA7np-C0AYHzhu.js";
import { i as sanitizeDOMString } from "./index-DmnOg_xm-CoMu4g4x.js";
import { c as getScrollElement, n as ION_CONTENT_ELEMENT_SELECTOR, s as findRefresherScrollHost, u as printIonContentErrorMsg } from "./index-obGyiHiO-C73DG7Nj.js";
import "./capacitor-C041I3qZ-AKn9tKTZ.js";
import { n as arrowDown } from "./index-BvabGprD-DxcnQO2v.js";
import { n as hapticImpact, t as ImpactStyle } from "./haptic-D3njgGLB-CR0w36Fl.js";
import { t as SPINNERS } from "./spinner-configs-D4RIp70E-H9KnQ5S7.js";
//#region node_modules/@ionic/core/dist/esm/ion-refresher_2.entry.js
/*!
* (C) Ionic http://ionicframework.com - MIT License
*/
var getRefresherAnimationType = (contentEl) => {
	const previousSibling = contentEl.previousElementSibling;
	return previousSibling !== null && previousSibling.tagName === "ION-HEADER" ? "translate" : "scale";
};
var createPullingAnimation = (type, pullingSpinner, refresherEl) => {
	return type === "scale" ? createScaleAnimation(pullingSpinner, refresherEl) : createTranslateAnimation(pullingSpinner, refresherEl);
};
var createBaseAnimation = (pullingRefresherIcon) => {
	const spinner = pullingRefresherIcon.querySelector("ion-spinner");
	const circle = spinner.shadowRoot.querySelector("circle");
	const spinnerArrowContainer = pullingRefresherIcon.querySelector(".spinner-arrow-container");
	const arrowContainer = pullingRefresherIcon.querySelector(".arrow-container");
	const arrow = arrowContainer ? arrowContainer.querySelector("ion-icon") : null;
	const baseAnimation = createAnimation().duration(1e3).easing("ease-out");
	const spinnerArrowContainerAnimation = createAnimation().addElement(spinnerArrowContainer).keyframes([
		{
			offset: 0,
			opacity: "0.3"
		},
		{
			offset: .45,
			opacity: "0.3"
		},
		{
			offset: .55,
			opacity: "1"
		},
		{
			offset: 1,
			opacity: "1"
		}
	]);
	const circleInnerAnimation = createAnimation().addElement(circle).keyframes([
		{
			offset: 0,
			strokeDasharray: "1px, 200px"
		},
		{
			offset: .2,
			strokeDasharray: "1px, 200px"
		},
		{
			offset: .55,
			strokeDasharray: "100px, 200px"
		},
		{
			offset: 1,
			strokeDasharray: "100px, 200px"
		}
	]);
	const circleOuterAnimation = createAnimation().addElement(spinner).keyframes([{
		offset: 0,
		transform: "rotate(-90deg)"
	}, {
		offset: 1,
		transform: "rotate(210deg)"
	}]);
	/**
	* Only add arrow animation if present
	* this allows users to customize the spinners
	* without errors being thrown
	*/
	if (arrowContainer && arrow) {
		const arrowContainerAnimation = createAnimation().addElement(arrowContainer).keyframes([
			{
				offset: 0,
				transform: "rotate(0deg)"
			},
			{
				offset: .3,
				transform: "rotate(0deg)"
			},
			{
				offset: .55,
				transform: "rotate(280deg)"
			},
			{
				offset: 1,
				transform: "rotate(400deg)"
			}
		]);
		const arrowAnimation = createAnimation().addElement(arrow).keyframes([
			{
				offset: 0,
				transform: "translateX(2px) scale(0)"
			},
			{
				offset: .3,
				transform: "translateX(2px) scale(0)"
			},
			{
				offset: .55,
				transform: "translateX(-1.5px) scale(1)"
			},
			{
				offset: 1,
				transform: "translateX(-1.5px) scale(1)"
			}
		]);
		baseAnimation.addAnimation([arrowContainerAnimation, arrowAnimation]);
	}
	return baseAnimation.addAnimation([
		spinnerArrowContainerAnimation,
		circleInnerAnimation,
		circleOuterAnimation
	]);
};
var createScaleAnimation = (pullingRefresherIcon, refresherEl) => {
	/**
	* Do not take the height of the refresher icon
	* because at this point the DOM has not updated,
	* so the refresher icon is still hidden with
	* display: none.
	* The `ion-refresher` container height
	* is roughly the amount we need to offset
	* the icon by when pulling down.
	*/
	const height = refresherEl.clientHeight;
	const spinnerAnimation = createAnimation().addElement(pullingRefresherIcon).keyframes([{
		offset: 0,
		transform: `scale(0) translateY(-${height}px)`
	}, {
		offset: 1,
		transform: "scale(1) translateY(100px)"
	}]);
	return createBaseAnimation(pullingRefresherIcon).addAnimation([spinnerAnimation]);
};
var createTranslateAnimation = (pullingRefresherIcon, refresherEl) => {
	/**
	* Do not take the height of the refresher icon
	* because at this point the DOM has not updated,
	* so the refresher icon is still hidden with
	* display: none.
	* The `ion-refresher` container height
	* is roughly the amount we need to offset
	* the icon by when pulling down.
	*/
	const height = refresherEl.clientHeight;
	const spinnerAnimation = createAnimation().addElement(pullingRefresherIcon).keyframes([{
		offset: 0,
		transform: `translateY(-${height}px)`
	}, {
		offset: 1,
		transform: "translateY(100px)"
	}]);
	return createBaseAnimation(pullingRefresherIcon).addAnimation([spinnerAnimation]);
};
var createSnapBackAnimation = (pullingRefresherIcon) => {
	return createAnimation().duration(125).addElement(pullingRefresherIcon).fromTo("transform", "translateY(var(--ion-pulling-refresher-translate, 100px))", "translateY(0px)");
};
var setSpinnerOpacity = (spinner, opacity) => {
	spinner.style.setProperty("opacity", opacity.toString());
};
var handleScrollWhilePulling = (ticks, numTicks, pullAmount) => {
	const max = 1;
	writeTask(() => {
		ticks.forEach((el, i) => {
			/**
			* Compute the opacity of each tick
			* mark as a percentage of the pullAmount
			* offset by max / numTicks so
			* the tick marks are shown staggered.
			*/
			const min = i * (max / numTicks);
			const range = max - min;
			const progression = clamp(0, (pullAmount - min) / range, 1);
			el.style.setProperty("opacity", progression.toString());
		});
	});
};
var handleScrollWhileRefreshing = (spinner, lastVelocityY) => {
	writeTask(() => {
		spinner.style.setProperty("--refreshing-rotation-duration", lastVelocityY >= 1 ? "0.5s" : "2s");
		spinner.style.setProperty("opacity", "1");
	});
};
var translateElement = (el, value, duration = 200) => {
	if (!el) return Promise.resolve();
	const trans = transitionEndAsync(el, duration);
	writeTask(() => {
		el.style.setProperty("transition", `${duration}ms all ease-out`);
		if (value === void 0) el.style.removeProperty("transform");
		else el.style.setProperty("transform", `translate3d(0px, ${value}, 0px)`);
	});
	return trans;
};
/**
* In order to use the native iOS refresher the device must support rubber band scrolling.
* As part of this, we need to exclude Desktop Safari because it has a slightly different rubber band effect that is not compatible with the native refresher in Ionic.
*
* We also need to be careful not to include devices that spoof their user agent.
* For example, when using iOS emulation in Chrome the user agent will be spoofed such that
* navigator.maxTouchPointer > 0. To work around this,
* we check to see if the apple-pay-logo is supported as a named image which is only
* true on Apple devices.
*
* We previously checked referencEl.style.webkitOverflowScrolling to explicitly check
* for rubber band support. However, this property was removed on iPadOS and it's possible
* that this will be removed on iOS in the future too.
*
*/
var supportsRubberBandScrolling = () => {
	return navigator.maxTouchPoints > 0 && CSS.supports("background: -webkit-named-image(apple-pay-logo-black)");
};
var shouldUseNativeRefresher = async (referenceEl, mode) => {
	const refresherContent = referenceEl.querySelector("ion-refresher-content");
	if (!refresherContent) return Promise.resolve(false);
	await new Promise((resolve) => componentOnReady(refresherContent, resolve));
	const pullingSpinner = referenceEl.querySelector("ion-refresher-content .refresher-pulling ion-spinner");
	const refreshingSpinner = referenceEl.querySelector("ion-refresher-content .refresher-refreshing ion-spinner");
	return pullingSpinner !== null && refreshingSpinner !== null && (mode === "ios" && supportsRubberBandScrolling() || mode === "md");
};
var refresherIosCss = () => `ion-refresher{top:0;display:none;position:absolute;width:100%;height:60px;pointer-events:none;z-index:-1}ion-refresher{inset-inline-start:0}ion-refresher.refresher-active{display:block}ion-refresher-content{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;height:100%}.refresher-pulling,.refresher-refreshing{display:none;width:100%}.refresher-pulling-icon,.refresher-refreshing-icon{-webkit-transform-origin:center;transform-origin:center;-webkit-transition:200ms;transition:200ms;font-size:30px;text-align:center}:host-context([dir=rtl]) .refresher-pulling-icon,:host-context([dir=rtl]) .refresher-refreshing-icon{-webkit-transform-origin:calc(100% - center);transform-origin:calc(100% - center)}[dir=rtl] .refresher-pulling-icon,[dir=rtl] .refresher-refreshing-icon{-webkit-transform-origin:calc(100% - center);transform-origin:calc(100% - center)}@supports selector(:dir(rtl)){.refresher-pulling-icon:dir(rtl),.refresher-refreshing-icon:dir(rtl){-webkit-transform-origin:calc(100% - center);transform-origin:calc(100% - center)}}.refresher-pulling-text,.refresher-refreshing-text{font-size:16px;text-align:center}ion-refresher-content .arrow-container{display:none}.refresher-pulling ion-refresher-content .refresher-pulling{display:block}.refresher-ready ion-refresher-content .refresher-pulling{display:block}.refresher-ready ion-refresher-content .refresher-pulling-icon{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.refresher-refreshing ion-refresher-content .refresher-refreshing{display:block}.refresher-cancelling ion-refresher-content .refresher-pulling{display:block}.refresher-cancelling ion-refresher-content .refresher-pulling-icon{-webkit-transform:scale(0);transform:scale(0)}.refresher-completing ion-refresher-content .refresher-refreshing{display:block}.refresher-completing ion-refresher-content .refresher-refreshing-icon{-webkit-transform:scale(0);transform:scale(0)}.refresher-native .refresher-pulling-text,.refresher-native .refresher-refreshing-text{display:none}.refresher-ios .refresher-pulling-icon,.refresher-ios .refresher-refreshing-icon{color:var(--ion-text-color, #000)}.refresher-ios .refresher-pulling-text,.refresher-ios .refresher-refreshing-text{color:var(--ion-text-color, #000)}.refresher-ios .refresher-refreshing .spinner-lines-ios line,.refresher-ios .refresher-refreshing .spinner-lines-small-ios line,.refresher-ios .refresher-refreshing .spinner-crescent circle{stroke:var(--ion-text-color, #000)}.refresher-ios .refresher-refreshing .spinner-bubbles circle,.refresher-ios .refresher-refreshing .spinner-circles circle,.refresher-ios .refresher-refreshing .spinner-dots circle{fill:var(--ion-text-color, #000)}ion-refresher.refresher-native{display:block;z-index:1}ion-refresher.refresher-native ion-spinner{-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto;margin-top:0;margin-bottom:0}.refresher-native .refresher-refreshing ion-spinner{--refreshing-rotation-duration:2s;display:none;-webkit-animation:var(--refreshing-rotation-duration) ease-out refresher-rotate forwards;animation:var(--refreshing-rotation-duration) ease-out refresher-rotate forwards}.refresher-native .refresher-refreshing{display:none;-webkit-animation:250ms linear refresher-pop forwards;animation:250ms linear refresher-pop forwards}.refresher-native ion-spinner{width:32px;height:32px;color:var(--ion-color-step-450, var(--ion-background-color-step-450, #747577))}.refresher-native.refresher-refreshing .refresher-pulling ion-spinner,.refresher-native.refresher-completing .refresher-pulling ion-spinner{display:none}.refresher-native.refresher-refreshing .refresher-refreshing ion-spinner,.refresher-native.refresher-completing .refresher-refreshing ion-spinner{display:block}.refresher-native.refresher-pulling .refresher-pulling ion-spinner{display:block}.refresher-native.refresher-pulling .refresher-refreshing ion-spinner{display:none}.refresher-native.refresher-completing ion-refresher-content .refresher-refreshing-icon{-webkit-transform:scale(0) rotate(180deg);transform:scale(0) rotate(180deg);-webkit-transition:300ms;transition:300ms}@-webkit-keyframes refresher-pop{0%{-webkit-transform:scale(1);transform:scale(1);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}50%{-webkit-transform:scale(1.2);transform:scale(1.2);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}100%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes refresher-pop{0%{-webkit-transform:scale(1);transform:scale(1);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}50%{-webkit-transform:scale(1.2);transform:scale(1.2);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}100%{-webkit-transform:scale(1);transform:scale(1)}}@-webkit-keyframes refresher-rotate{from{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(180deg);transform:rotate(180deg)}}@keyframes refresher-rotate{from{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(180deg);transform:rotate(180deg)}}`;
var refresherMdCss = () => `ion-refresher{top:0;display:none;position:absolute;width:100%;height:60px;pointer-events:none;z-index:-1}ion-refresher{inset-inline-start:0}ion-refresher.refresher-active{display:block}ion-refresher-content{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;height:100%}.refresher-pulling,.refresher-refreshing{display:none;width:100%}.refresher-pulling-icon,.refresher-refreshing-icon{-webkit-transform-origin:center;transform-origin:center;-webkit-transition:200ms;transition:200ms;font-size:30px;text-align:center}:host-context([dir=rtl]) .refresher-pulling-icon,:host-context([dir=rtl]) .refresher-refreshing-icon{-webkit-transform-origin:calc(100% - center);transform-origin:calc(100% - center)}[dir=rtl] .refresher-pulling-icon,[dir=rtl] .refresher-refreshing-icon{-webkit-transform-origin:calc(100% - center);transform-origin:calc(100% - center)}@supports selector(:dir(rtl)){.refresher-pulling-icon:dir(rtl),.refresher-refreshing-icon:dir(rtl){-webkit-transform-origin:calc(100% - center);transform-origin:calc(100% - center)}}.refresher-pulling-text,.refresher-refreshing-text{font-size:16px;text-align:center}ion-refresher-content .arrow-container{display:none}.refresher-pulling ion-refresher-content .refresher-pulling{display:block}.refresher-ready ion-refresher-content .refresher-pulling{display:block}.refresher-ready ion-refresher-content .refresher-pulling-icon{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.refresher-refreshing ion-refresher-content .refresher-refreshing{display:block}.refresher-cancelling ion-refresher-content .refresher-pulling{display:block}.refresher-cancelling ion-refresher-content .refresher-pulling-icon{-webkit-transform:scale(0);transform:scale(0)}.refresher-completing ion-refresher-content .refresher-refreshing{display:block}.refresher-completing ion-refresher-content .refresher-refreshing-icon{-webkit-transform:scale(0);transform:scale(0)}.refresher-native .refresher-pulling-text,.refresher-native .refresher-refreshing-text{display:none}.refresher-md .refresher-pulling-icon,.refresher-md .refresher-refreshing-icon{color:var(--ion-text-color, #000)}.refresher-md .refresher-pulling-text,.refresher-md .refresher-refreshing-text{color:var(--ion-text-color, #000)}.refresher-md .refresher-refreshing .spinner-lines-md line,.refresher-md .refresher-refreshing .spinner-lines-small-md line,.refresher-md .refresher-refreshing .spinner-crescent circle{stroke:var(--ion-text-color, #000)}.refresher-md .refresher-refreshing .spinner-bubbles circle,.refresher-md .refresher-refreshing .spinner-circles circle,.refresher-md .refresher-refreshing .spinner-dots circle{fill:var(--ion-text-color, #000)}ion-refresher.refresher-native{display:block;z-index:1}ion-refresher.refresher-native ion-spinner{-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto;margin-top:0;margin-bottom:0;width:24px;height:24px;color:var(--ion-color-primary, #0054e9)}ion-refresher.refresher-native .spinner-arrow-container{display:inherit}ion-refresher.refresher-native .arrow-container{display:block;position:absolute;width:24px;height:24px}ion-refresher.refresher-native .arrow-container ion-icon{-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto;margin-top:0;margin-bottom:0;left:0;right:0;bottom:-4px;position:absolute;color:var(--ion-color-primary, #0054e9);font-size:12px}ion-refresher.refresher-native.refresher-pulling ion-refresher-content .refresher-pulling,ion-refresher.refresher-native.refresher-ready ion-refresher-content .refresher-pulling{display:-ms-flexbox;display:flex}ion-refresher.refresher-native.refresher-refreshing ion-refresher-content .refresher-refreshing,ion-refresher.refresher-native.refresher-completing ion-refresher-content .refresher-refreshing,ion-refresher.refresher-native.refresher-cancelling ion-refresher-content .refresher-refreshing{display:-ms-flexbox;display:flex}ion-refresher.refresher-native .refresher-pulling-icon{-webkit-transform:translateY(calc(-100% - 10px));transform:translateY(calc(-100% - 10px))}ion-refresher.refresher-native .refresher-pulling-icon,ion-refresher.refresher-native .refresher-refreshing-icon{-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto;margin-top:0;margin-bottom:0;border-radius:100%;-webkit-padding-start:8px;padding-inline-start:8px;-webkit-padding-end:8px;padding-inline-end:8px;padding-top:8px;padding-bottom:8px;display:-ms-flexbox;display:flex;border:1px solid var(--ion-color-step-200, var(--ion-background-color-step-200, #ececec));background:var(--ion-color-step-250, var(--ion-background-color-step-250, #ffffff));-webkit-box-shadow:0px 1px 6px rgba(0, 0, 0, 0.1);box-shadow:0px 1px 6px rgba(0, 0, 0, 0.1)}`;
var Refresher = class {
	constructor(hostRef) {
		registerInstance(this, hostRef);
		this.ionRefresh = createEvent(this, "ionRefresh", 7);
		this.ionPull = createEvent(this, "ionPull", 7);
		this.ionStart = createEvent(this, "ionStart", 7);
		this.ionPullStart = createEvent(this, "ionPullStart", 7);
		this.ionPullEnd = createEvent(this, "ionPullEnd", 7);
		this.appliedStyles = false;
		this.didStart = false;
		this.progress = 0;
		this.pointerDown = false;
		this.needsCompletion = false;
		this.didRefresh = false;
		this.contentFullscreen = false;
		this.lastVelocityY = 0;
		this.animations = [];
		this.nativeRefresher = false;
		/**
		* The current state which the refresher is in. The refresher's states include:
		*
		* - `inactive` - The refresher is not being pulled down or refreshing and is currently hidden.
		* - `pulling` - The user is actively pulling down the refresher, but has not reached the point yet that if the user lets go, it'll refresh.
		* - `cancelling` - The user pulled down the refresher and let go, but did not pull down far enough to kick off the `refreshing` state. After letting go, the refresher is in the `cancelling` state while it is closing, and will go back to the `inactive` state once closed.
		* - `ready` - The user has pulled down the refresher far enough that if they let go, it'll begin the `refreshing` state.
		* - `refreshing` - The refresher is actively waiting on the async operation to end. Once the refresh handler calls `complete()` it will begin the `completing` state.
		* - `completing` - The `refreshing` state has finished and the refresher is in the way of closing itself. Once closed, the refresher will go back to the `inactive` state.
		*/
		this.state = 1;
		/**
		* The minimum distance the user must pull down until the
		* refresher will go into the `refreshing` state.
		* Does not apply when the refresher content uses a spinner,
		* enabling the native refresher.
		*/
		this.pullMin = 60;
		/**
		* The maximum distance of the pull until the refresher
		* will automatically go into the `refreshing` state.
		* Defaults to the result of `pullMin + 60`.
		* Does not apply when  the refresher content uses a spinner,
		* enabling the native refresher.
		*/
		this.pullMax = this.pullMin + 60;
		/**
		* Time it takes to close the refresher.
		* Does not apply when the refresher content uses a spinner,
		* enabling the native refresher.
		*/
		this.closeDuration = "280ms";
		/**
		* Time it takes the refresher to snap back to the `refreshing` state.
		* Does not apply when the refresher content uses a spinner,
		* enabling the native refresher.
		*/
		this.snapbackDuration = "280ms";
		/**
		* How much to multiply the pull speed by. To slow the pull animation down,
		* pass a number less than `1`. To speed up the pull, pass a number greater
		* than `1`. The default value is `1` which is equal to the speed of the cursor.
		* If a negative value is passed in, the factor will be `1` instead.
		*
		* For example, If the value passed is `1.2` and the content is dragged by
		* `10` pixels, instead of `10` pixels, the content will be pulled by `12` pixels
		* (an increase of 20 percent). If the value passed is `0.8`, the dragged amount
		* will be `8` pixels, less than the amount the cursor has moved.
		*
		* Does not apply when the refresher content uses a spinner,
		* enabling the native refresher.
		*/
		this.pullFactor = 1;
		/**
		* If `true`, the refresher will be hidden.
		*/
		this.disabled = false;
	}
	disabledChanged() {
		if (this.gesture) this.gesture.enable(!this.disabled);
	}
	async checkNativeRefresher() {
		const useNativeRefresher = await shouldUseNativeRefresher(this.el, getIonMode(this));
		if (useNativeRefresher && !this.nativeRefresher) {
			const contentEl = this.el.closest("ion-content");
			this.setupNativeRefresher(contentEl);
		} else if (!useNativeRefresher) this.destroyNativeRefresher();
	}
	destroyNativeRefresher() {
		if (this.scrollEl && this.scrollListenerCallback) {
			this.scrollEl.removeEventListener("scroll", this.scrollListenerCallback);
			this.scrollListenerCallback = void 0;
		}
		this.nativeRefresher = false;
	}
	async resetNativeRefresher(el, state) {
		this.state = state;
		if (getIonMode(this) === "ios") await translateElement(el, void 0, 300);
		else await transitionEndAsync(this.el.querySelector(".refresher-refreshing-icon"), 200);
		this.didRefresh = false;
		this.needsCompletion = false;
		this.pointerDown = false;
		this.animations.forEach((ani) => ani.destroy());
		this.animations = [];
		this.progress = 0;
		this.state = 1;
		this.ionPullEnd.emit({ reason: state === 32 ? "complete" : "cancel" });
	}
	async setupiOSNativeRefresher(pullingSpinner, refreshingSpinner) {
		this.elementToTransform = this.scrollEl;
		const ticks = pullingSpinner.shadowRoot.querySelectorAll("svg");
		let MAX_PULL = this.scrollEl.clientHeight * .16;
		const NUM_TICKS = ticks.length;
		writeTask(() => ticks.forEach((el) => el.style.setProperty("animation", "none")));
		this.scrollListenerCallback = () => {
			if (!this.pointerDown && this.state === 1) return;
			readTask(() => {
				const scrollTop = this.scrollEl.scrollTop;
				const refresherHeight = this.el.clientHeight;
				if (scrollTop > 0) {
					/**
					* If refresher is refreshing and user tries to scroll
					* progressively fade refresher out/in
					*/
					if (this.state === 8) {
						const ratio = clamp(0, scrollTop / (refresherHeight * .5), 1);
						writeTask(() => setSpinnerOpacity(refreshingSpinner, 1 - ratio));
						return;
					}
					return;
				}
				if (this.pointerDown) {
					if (!this.didStart) {
						this.didStart = true;
						this.ionStart.emit();
						this.ionPullStart.emit();
					}
					if (this.pointerDown) this.ionPull.emit();
				}
				/**
				* We want to delay the start of this gesture by ~30px
				* when initially pulling down so the refresher does not
				* overlap with the content. But when letting go of the
				* gesture before the refresher completes, we want the
				* refresher tick marks to quickly fade out.
				*/
				const offset = this.didStart ? 30 : 0;
				const pullAmount = this.progress = clamp(0, (Math.abs(scrollTop) - offset) / MAX_PULL, 1);
				if (this.state === 8 || pullAmount === 1) {
					if (this.pointerDown) handleScrollWhileRefreshing(refreshingSpinner, this.lastVelocityY);
					if (!this.didRefresh) {
						this.beginRefresh();
						this.didRefresh = true;
						hapticImpact({ style: ImpactStyle.Light });
						/**
						* Clear focus from any active element to prevent scroll jumps
						* when the refresh completes
						*/
						const activeElement = document.activeElement;
						if (activeElement?.blur !== void 0) activeElement.blur();
						/**
						* Translate the content element otherwise when pointer is removed
						* from screen the scroll content will bounce back over the refresher
						*/
						if (!this.pointerDown) translateElement(this.elementToTransform, `${refresherHeight}px`);
					}
				} else {
					this.state = 2;
					handleScrollWhilePulling(ticks, NUM_TICKS, pullAmount);
				}
			});
		};
		this.scrollEl.addEventListener("scroll", this.scrollListenerCallback);
		const { createGesture } = await import("./index-BmLuEdV7-B8ieQZPS.js").then((n) => n.n);
		/**
		* Awaiting the dynamic import yields to the event loop, so the component can
		* disconnect before it resolves. disconnectedCallback clears scrollEl, so a
		* missing scrollEl here means there is nothing left to attach a gesture to.
		*/
		if (!this.scrollEl) return;
		this.gesture = createGesture({
			el: this.scrollEl,
			gestureName: "refresher",
			gesturePriority: 31,
			direction: "y",
			threshold: 5,
			onStart: () => {
				this.pointerDown = true;
				if (!this.didRefresh) translateElement(this.elementToTransform, "0px");
				/**
				* If the content had `display: none` when
				* the refresher was initialized, its clientHeight
				* will be 0. When the gesture starts, the content
				* will be visible, so try to get the correct
				* client height again. This is most common when
				* using the refresher in an ion-menu.
				*/
				if (MAX_PULL === 0) MAX_PULL = this.scrollEl.clientHeight * .16;
			},
			onMove: (ev) => {
				this.lastVelocityY = ev.velocityY;
			},
			onEnd: () => {
				const hadStarted = this.didStart;
				this.pointerDown = false;
				this.didStart = false;
				if (this.needsCompletion) {
					this.resetNativeRefresher(this.elementToTransform, 32);
					this.needsCompletion = false;
				} else if (this.didRefresh) readTask(() => translateElement(this.elementToTransform, `${this.el.clientHeight}px`));
				else if (hadStarted)
 /**
				* User started pulling but released before reaching the refresh threshold.
				* Emit ionPullEnd to complete the event pair.
				*/
				this.ionPullEnd.emit({ reason: "cancel" });
			}
		});
		this.disabledChanged();
	}
	async setupMDNativeRefresher(contentEl, pullingSpinner, refreshingSpinner) {
		const circle = getElementRoot(pullingSpinner).querySelector("circle");
		const pullingRefresherIcon = this.el.querySelector("ion-refresher-content .refresher-pulling-icon");
		const refreshingCircle = getElementRoot(refreshingSpinner).querySelector("circle");
		if (circle !== null && refreshingCircle !== null) writeTask(() => {
			circle.style.setProperty("animation", "none");
			refreshingSpinner.style.setProperty("animation-delay", "-655ms");
			refreshingCircle.style.setProperty("animation-delay", "-655ms");
		});
		const { createGesture } = await import("./index-BmLuEdV7-B8ieQZPS.js").then((n) => n.n);
		/**
		* Awaiting the dynamic import yields to the event loop, so the component can
		* disconnect before it resolves. disconnectedCallback clears scrollEl, so a
		* missing scrollEl here means there is nothing left to attach a gesture to.
		*/
		if (!this.scrollEl) return;
		this.gesture = createGesture({
			el: this.scrollEl,
			gestureName: "refresher",
			gesturePriority: 31,
			direction: "y",
			threshold: 5,
			canStart: () => this.state !== 8 && this.state !== 32 && this.scrollEl.scrollTop === 0,
			onStart: (ev) => {
				this.progress = 0;
				ev.data = {
					animation: void 0,
					didStart: false,
					cancelled: false
				};
			},
			onMove: (ev) => {
				if (ev.velocityY < 0 && this.progress === 0 && !ev.data.didStart || ev.data.cancelled) {
					ev.data.cancelled = true;
					return;
				}
				if (!ev.data.didStart) {
					ev.data.didStart = true;
					this.state = 2;
					const { scrollEl } = this;
					const overflowProperty = scrollEl.matches(".ion-content-scroll-host") ? "overflow" : "--overflow";
					writeTask(() => scrollEl.style.setProperty(overflowProperty, "hidden"));
					const animation = createPullingAnimation(getRefresherAnimationType(contentEl), pullingRefresherIcon, this.el);
					ev.data.animation = animation;
					animation.progressStart(false, 0);
					this.ionStart.emit();
					this.ionPullStart.emit();
					this.animations.push(animation);
					return;
				}
				this.progress = clamp(0, ev.deltaY / 180 * .5, 1);
				ev.data.animation.progressStep(this.progress);
				this.ionPull.emit();
			},
			onEnd: (ev) => {
				if (!ev.data.didStart) return;
				this.gesture.enable(false);
				const { scrollEl } = this;
				const overflowProperty = scrollEl.matches(".ion-content-scroll-host") ? "overflow" : "--overflow";
				writeTask(() => scrollEl.style.removeProperty(overflowProperty));
				if (this.progress <= .4) {
					ev.data.animation.progressEnd(0, this.progress, 500).onFinish(() => {
						this.animations.forEach((ani) => ani.destroy());
						this.animations = [];
						this.gesture.enable(true);
						this.state = 1;
						this.ionPullEnd.emit({ reason: "cancel" });
					});
					return;
				}
				const progress = getTimeGivenProgression([0, 0], [0, 0], [1, 1], [1, 1], this.progress)[0];
				const snapBackAnimation = createSnapBackAnimation(pullingRefresherIcon);
				this.animations.push(snapBackAnimation);
				writeTask(async () => {
					pullingRefresherIcon.style.setProperty("--ion-pulling-refresher-translate", `${progress * 100}px`);
					ev.data.animation.progressEnd();
					await snapBackAnimation.play();
					this.beginRefresh();
					ev.data.animation.destroy();
					this.gesture.enable(true);
				});
			}
		});
		this.disabledChanged();
	}
	async setupNativeRefresher(contentEl) {
		if (this.scrollListenerCallback || !contentEl || this.nativeRefresher || !this.scrollEl) return;
		/**
		* If using non-native refresher before make sure
		* we clean up any old CSS. This can happen when
		* a user manually calls the refresh method in a
		* component create callback before the native
		* refresher is setup.
		*/
		this.setCss(0, "", false, "");
		this.nativeRefresher = true;
		const pullingSpinner = this.el.querySelector("ion-refresher-content .refresher-pulling ion-spinner");
		const refreshingSpinner = this.el.querySelector("ion-refresher-content .refresher-refreshing ion-spinner");
		if (getIonMode(this) === "ios") this.setupiOSNativeRefresher(pullingSpinner, refreshingSpinner);
		else this.setupMDNativeRefresher(contentEl, pullingSpinner, refreshingSpinner);
	}
	componentDidUpdate() {
		this.checkNativeRefresher();
	}
	/**
	* Validate the slot attribute before rendering, while the host still reflects the
	* developer's original markup. `connectedCallback` is too early: in the custom
	* elements build it runs during insertion, before frameworks such as React assign
	* the slot.
	*/
	componentWillLoad() {
		if (this.el.getAttribute("slot") !== "fixed") printIonError("[ion-refresher] - Make sure you use: <ion-refresher slot=\"fixed\">");
	}
	async connectedCallback() {
		const contentEl = this.el.closest(ION_CONTENT_ELEMENT_SELECTOR);
		if (!contentEl) {
			printIonContentErrorMsg(this.el);
			return;
		}
		/**
		* Waits for the content to be ready before querying the scroll
		* or the background content element.
		*/
		componentOnReady(contentEl, async () => {
			const customScrollTarget = findRefresherScrollHost(contentEl);
			/**
			* Query the custom scroll target (if available), first. In refresher implementations,
			* the ion-refresher element will always be a direct child of ion-content (slot="fixed"). By
			* querying the custom scroll target first and falling back to the ion-content element,
			* the correct scroll element will be returned by the implementation.
			*/
			this.scrollEl = await getScrollElement(customScrollTarget ?? contentEl);
			/**
			* Query the background content element from the host ion-content element directly.
			*/
			this.backgroundContentEl = await contentEl.getBackgroundElement();
			/**
			* Check if the content element is fullscreen to apply the correct styles
			* when the refresher is refreshing. Otherwise, the refresher will be
			* hidden because it is positioned behind the background content element.
			*/
			this.contentFullscreen = contentEl.fullscreen;
			if (await shouldUseNativeRefresher(this.el, getIonMode(this))) this.setupNativeRefresher(contentEl);
			else {
				const { createGesture } = await import("./index-BmLuEdV7-B8ieQZPS.js").then((n) => n.n);
				/**
				* Awaiting the dynamic import yields to the event loop, so the component can
				* disconnect before it resolves. A disconnected contentEl means there is
				* nothing left to attach a gesture to.
				*/
				if (!contentEl.isConnected) return;
				this.gesture = createGesture({
					el: contentEl,
					gestureName: "refresher",
					gesturePriority: 31,
					direction: "y",
					threshold: 20,
					passive: false,
					canStart: () => this.canStart(),
					onStart: () => this.onStart(),
					onMove: (ev) => this.onMove(ev),
					onEnd: () => this.onEnd()
				});
				this.disabledChanged();
			}
		});
	}
	disconnectedCallback() {
		this.destroyNativeRefresher();
		this.scrollEl = void 0;
		if (this.gesture) {
			this.gesture.destroy();
			this.gesture = void 0;
		}
	}
	/**
	* Call `complete()` when your async operation has completed.
	* For example, the `refreshing` state is while the app is performing
	* an asynchronous operation, such as receiving more data from an
	* AJAX request. Once the data has been received, you then call this
	* method to signify that the refreshing has completed and to close
	* the refresher. This method also changes the refresher's state from
	* `refreshing` to `completing`.
	*/
	async complete() {
		if (this.nativeRefresher) {
			this.needsCompletion = true;
			if (!this.pointerDown) raf(() => raf(() => this.resetNativeRefresher(this.elementToTransform, 32)));
		} else this.close(32, "120ms");
	}
	/**
	* Changes the refresher's state from `refreshing` to `cancelling`.
	*/
	async cancel() {
		if (this.nativeRefresher) {
			if (!this.pointerDown) raf(() => raf(() => this.resetNativeRefresher(this.elementToTransform, 16)));
		} else this.close(16, "");
	}
	/**
	* A number representing how far down the user has pulled.
	* The number `0` represents the user hasn't pulled down at all. The
	* number `1`, and anything greater than `1`, represents that the user
	* has pulled far enough down that when they let go then the refresh will
	* happen. If they let go and the number is less than `1`, then the
	* refresh will not happen, and the content will return to it's original
	* position.
	*/
	getProgress() {
		return Promise.resolve(this.progress);
	}
	canStart() {
		if (!this.scrollEl) return false;
		if (this.state !== 1) return false;
		if (this.scrollEl.scrollTop > 0) return false;
		return true;
	}
	onStart() {
		this.progress = 0;
		this.state = 1;
		this.memoizeOverflowStyle();
		/**
		* If the content is fullscreen, then we need to
		* set the offset-top style on the background content
		* element to ensure that the refresher is shown.
		*/
		if (this.contentFullscreen && this.backgroundContentEl) this.backgroundContentEl.style.setProperty("--offset-top", "0px");
	}
	onMove(detail) {
		if (!this.scrollEl) return;
		const ev = detail.event;
		if (ev.touches !== void 0 && ev.touches.length > 1) return;
		if ((this.state & 56) !== 0) return;
		const pullFactor = Number.isNaN(this.pullFactor) || this.pullFactor < 0 ? 1 : this.pullFactor;
		const deltaY = detail.deltaY * pullFactor;
		if (deltaY <= 0) {
			this.progress = 0;
			this.state = 1;
			if (this.appliedStyles) {
				this.setCss(0, "", false, "");
				return;
			}
			return;
		}
		if (this.state === 1) {
			if (this.scrollEl.scrollTop > 0) {
				this.progress = 0;
				return;
			}
			this.state = 2;
		}
		if (ev.cancelable) ev.preventDefault();
		this.setCss(deltaY, "0ms", true, "");
		if (deltaY === 0) {
			this.progress = 0;
			return;
		}
		const pullMin = this.pullMin;
		this.progress = deltaY / pullMin;
		if (!this.didStart) {
			this.didStart = true;
			this.ionStart.emit();
			this.ionPullStart.emit();
		}
		this.ionPull.emit();
		if (deltaY < pullMin) {
			this.state = 2;
			return;
		}
		if (deltaY > this.pullMax) {
			this.beginRefresh();
			return;
		}
		this.state = 4;
	}
	onEnd() {
		if (this.state === 4) this.beginRefresh();
		else if (this.state === 2) this.cancel();
		else if (this.state === 1) {
			/**
			* The pull to refresh gesture was aborted
			* so we should immediately restore any overflow styles
			* that have been modified. Do not call this.cancel
			* because the styles will only be reset after a timeout.
			* If the gesture is aborted then scrolling should be
			* available right away.
			*/
			this.restoreOverflowStyle();
			/**
			* If ionPullStart was emitted, we need to emit ionPullEnd
			* even though the gesture was aborted before reaching the
			* pulling threshold.
			*/
			if (this.didStart) {
				this.didStart = false;
				this.ionPullEnd.emit({ reason: "cancel" });
			}
		}
	}
	beginRefresh() {
		this.state = 8;
		this.setCss(this.pullMin, this.snapbackDuration, true, "");
		/**
		* Clear focus from any active element to prevent the browser
		* from restoring focus and causing scroll jumps after refresh.
		* This ensures the view stays at the top after refresh completes.
		*/
		const activeElement = document.activeElement;
		if (activeElement?.blur !== void 0) activeElement.blur();
		this.ionRefresh.emit({ complete: this.complete.bind(this) });
	}
	close(state, delay) {
		setTimeout(() => {
			this.state = 1;
			this.progress = 0;
			this.didStart = false;
			/**
			* Reset any overflow styles so the
			* user can scroll again.
			*/
			this.setCss(0, "0ms", false, "", true);
			/**
			* Reset the offset-top style on the background content
			* when the refresher is no longer refreshing and the
			* content is fullscreen.
			*
			* This ensures that the behavior of background content
			* does not change when refreshing is complete.
			*/
			if (this.contentFullscreen && this.backgroundContentEl) this.backgroundContentEl?.style.removeProperty("--offset-top");
			this.ionPullEnd.emit({ reason: state === 32 ? "complete" : "cancel" });
		}, 600);
		this.state = state;
		this.setCss(0, this.closeDuration, true, delay);
	}
	setCss(y, duration, overflowVisible, delay, shouldRestoreOverflowStyle = false) {
		if (this.nativeRefresher) return;
		this.appliedStyles = y > 0;
		writeTask(() => {
			if (this.scrollEl && this.backgroundContentEl) {
				const scrollStyle = this.scrollEl.style;
				const backgroundStyle = this.backgroundContentEl.style;
				scrollStyle.transform = backgroundStyle.transform = y > 0 ? `translateY(${y}px) translateZ(0px)` : "";
				scrollStyle.transitionDuration = backgroundStyle.transitionDuration = duration;
				scrollStyle.transitionDelay = backgroundStyle.transitionDelay = delay;
				scrollStyle.overflow = overflowVisible ? "hidden" : "";
			}
			/**
			* Reset the overflow styles only once
			* the pull to refresh effect has been closed.
			* This ensures that the gesture is done
			* and the refresh operation has either
			* been aborted or has completed.
			*/
			if (shouldRestoreOverflowStyle) this.restoreOverflowStyle();
		});
	}
	memoizeOverflowStyle() {
		if (this.scrollEl) {
			const { overflow, overflowX, overflowY } = this.scrollEl.style;
			this.overflowStyles = {
				overflow: overflow ?? "",
				overflowX: overflowX ?? "",
				overflowY: overflowY ?? ""
			};
		}
	}
	restoreOverflowStyle() {
		if (this.overflowStyles !== void 0 && this.scrollEl !== void 0) {
			const { overflow, overflowX, overflowY } = this.overflowStyles;
			this.scrollEl.style.overflow = overflow;
			this.scrollEl.style.overflowX = overflowX;
			this.scrollEl.style.overflowY = overflowY;
			this.overflowStyles = void 0;
		}
	}
	render() {
		const mode = getIonMode(this);
		return h(Host, {
			key: "fd9c8e51155d56f12148e8eb547e45c05807b4b5",
			slot: "fixed",
			class: {
				[mode]: true,
				[`refresher-${mode}`]: true,
				"refresher-native": this.nativeRefresher,
				"refresher-active": this.state !== 1,
				"refresher-pulling": this.state === 2,
				"refresher-ready": this.state === 4,
				"refresher-refreshing": this.state === 8,
				"refresher-cancelling": this.state === 16,
				"refresher-completing": this.state === 32
			}
		});
	}
	get el() {
		return getElement(this);
	}
	static get watchers() {
		return { "disabled": [{ "disabledChanged": 0 }] };
	}
};
Refresher.style = {
	ios: refresherIosCss(),
	md: refresherMdCss()
};
var RefresherContent = class {
	constructor(hostRef) {
		registerInstance(this, hostRef);
		this.customHTMLEnabled = config.get("innerHTMLTemplatesEnabled", false);
	}
	componentWillLoad() {
		if (this.pullingIcon === void 0) {
			/**
			* The native iOS refresher uses a spinner instead of
			* an icon, so we need to see if this device supports
			* the native iOS refresher.
			*/
			const hasRubberBandScrolling = supportsRubberBandScrolling();
			const mode = getIonMode(this);
			const overflowRefresher = hasRubberBandScrolling ? "lines" : arrowDown;
			this.pullingIcon = config.get("refreshingIcon", mode === "ios" && hasRubberBandScrolling ? config.get("spinner", overflowRefresher) : "circular");
		}
		if (this.refreshingSpinner === void 0) {
			const mode = getIonMode(this);
			this.refreshingSpinner = config.get("refreshingSpinner", config.get("spinner", mode === "ios" ? "lines" : "circular"));
		}
	}
	renderPullingText() {
		const { customHTMLEnabled, pullingText } = this;
		if (customHTMLEnabled) return h("div", {
			class: "refresher-pulling-text",
			innerHTML: sanitizeDOMString(pullingText)
		});
		return h("div", { class: "refresher-pulling-text" }, pullingText);
	}
	renderRefreshingText() {
		const { customHTMLEnabled, refreshingText } = this;
		if (customHTMLEnabled) return h("div", {
			class: "refresher-refreshing-text",
			innerHTML: sanitizeDOMString(refreshingText)
		});
		return h("div", { class: "refresher-refreshing-text" }, refreshingText);
	}
	render() {
		const pullingIcon = this.pullingIcon;
		const hasSpinner = pullingIcon != null && SPINNERS[pullingIcon] !== void 0;
		const mode = getIonMode(this);
		return h(Host, {
			key: "a1546008813bbcfa70f97e9b9025846ee0aed722",
			class: mode
		}, h("div", {
			key: "5422771d67fe201e22d4f9d7db6b685f3db5d99d",
			class: "refresher-pulling"
		}, this.pullingIcon && hasSpinner && h("div", {
			key: "5c2b6dfc3f01b42586ea83380548d454b220a7ca",
			class: "refresher-pulling-icon"
		}, h("div", {
			key: "2c3799ca3f66960d7081c63c5a0840951f694baf",
			class: "spinner-arrow-container"
		}, h("ion-spinner", {
			key: "03f766a9b9354dcb8f6975757a9b882c2eb5cf4a",
			name: this.pullingIcon,
			paused: true
		}), mode === "md" && this.pullingIcon === "circular" && h("div", {
			key: "e5f4ba7c6a70adb71f8985af0e23aca07d7b005a",
			class: "arrow-container"
		}, h("ion-icon", {
			key: "ddccbd9164ae8daa97178fc53b52f74f1fd298ef",
			icon: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' class='ionicon'><path d='M368 64 144 256l224 192z'/></svg>",
			"aria-hidden": "true"
		})))), this.pullingIcon && !hasSpinner && h("div", {
			key: "6fb742f47f9149fa6dc3daefe5aaa77f925da4bd",
			class: "refresher-pulling-icon"
		}, h("ion-icon", {
			key: "907657135eeac4c394be1eae4a659664a7bfacb0",
			icon: this.pullingIcon,
			lazy: false,
			"aria-hidden": "true"
		})), this.pullingText !== void 0 && this.renderPullingText()), h("div", {
			key: "fb3094b3ed7e100ab9641c3221770889088e27f3",
			class: "refresher-refreshing"
		}, this.refreshingSpinner && h("div", {
			key: "bc8078f94e7cea3cb6f03a09e98540f0e0b38721",
			class: "refresher-refreshing-icon"
		}, h("ion-spinner", {
			key: "8f39524f073aa828e941bcdd4d48e4d5dfc759c6",
			name: this.refreshingSpinner
		})), this.refreshingText !== void 0 && this.renderRefreshingText()));
	}
	get el() {
		return getElement(this);
	}
};
//#endregion
export { Refresher as ion_refresher, RefresherContent as ion_refresher_content };
