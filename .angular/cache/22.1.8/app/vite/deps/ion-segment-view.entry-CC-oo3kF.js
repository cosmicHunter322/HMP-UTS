import { c as createEvent, d as getElement, p as h, r as Host, v as registerInstance } from "./index-Dvqtt_WK-CtfmC4By.js";
import { t as isRTL } from "./dir-Dojwmvde-JWsS7_L7.js";
//#region node_modules/@ionic/core/dist/esm/ion-segment-view.entry.js
/*!
* (C) Ionic http://ionicframework.com - MIT License
*/
var segmentViewIosCss = () => `:host{display:-ms-flexbox;display:flex;height:100%;overflow-x:scroll;-webkit-scroll-snap-type:x mandatory;-ms-scroll-snap-type:x mandatory;scroll-snap-type:x mandatory;scrollbar-width:none;-ms-overflow-style:none}:host::-webkit-scrollbar{display:none}:host(.segment-view-disabled),:host(.segment-view-swipe-disabled){-ms-touch-action:none;touch-action:none;overflow-x:hidden}:host(.segment-view-scroll-disabled){pointer-events:none}:host(.segment-view-disabled){opacity:0.3}`;
var segmentViewMdCss = () => `:host{display:-ms-flexbox;display:flex;height:100%;overflow-x:scroll;-webkit-scroll-snap-type:x mandatory;-ms-scroll-snap-type:x mandatory;scroll-snap-type:x mandatory;scrollbar-width:none;-ms-overflow-style:none}:host::-webkit-scrollbar{display:none}:host(.segment-view-disabled),:host(.segment-view-swipe-disabled){-ms-touch-action:none;touch-action:none;overflow-x:hidden}:host(.segment-view-scroll-disabled){pointer-events:none}:host(.segment-view-disabled){opacity:0.3}`;
var SegmentView = class {
	constructor(hostRef) {
		registerInstance(this, hostRef);
		this.ionSegmentViewScroll = createEvent(this, "ionSegmentViewScroll", 7);
		this.scrollEndTimeout = null;
		this.isTouching = false;
		/**
		* If `true`, the segment view cannot be interacted with.
		*/
		this.disabled = false;
		/**
		* If `true`, users will be able to swipe the segment view to navigate between segment contents.
		*/
		this.swipeGesture = true;
	}
	handleScroll(ev) {
		const { scrollLeft, scrollWidth, clientWidth } = ev.target;
		const max = scrollWidth - clientWidth;
		const scrollRatio = (isRTL(this.el) ? -1 : 1) * (scrollLeft / max);
		this.ionSegmentViewScroll.emit({
			scrollRatio,
			isManualScroll: this.isManualScroll ?? true
		});
		this.resetScrollEndTimeout();
	}
	/**
	* Handle touch start event to know when the user is actively dragging the segment view.
	*/
	handleScrollStart() {
		if (this.scrollEndTimeout) {
			clearTimeout(this.scrollEndTimeout);
			this.scrollEndTimeout = null;
		}
		this.isTouching = true;
	}
	/**
	* Handle touch end event to know when the user is no longer dragging the segment view.
	*/
	handleTouchEnd() {
		this.isTouching = false;
	}
	/**
	* Reset the scroll end detection timer. This is called on every scroll event.
	*/
	resetScrollEndTimeout() {
		if (this.scrollEndTimeout) {
			clearTimeout(this.scrollEndTimeout);
			this.scrollEndTimeout = null;
		}
		this.scrollEndTimeout = setTimeout(() => {
			this.checkForScrollEnd();
		}, 100);
	}
	/**
	* Check if the scroll has ended and the user is not actively touching.
	* If the conditions are met (active content is enabled and no active touch),
	* reset the scroll position and emit the scroll end event.
	*/
	checkForScrollEnd() {
		if (!this.isTouching) this.isManualScroll = void 0;
	}
	/**
	* @internal
	*
	* This method is used to programmatically set the displayed segment content
	* in the segment view. Calling this method will update the `value` of the
	* corresponding segment button.
	*
	* @param id: The id of the segment content to display.
	* @param smoothScroll: Whether to animate the scroll transition.
	*/
	async setContent(id, smoothScroll = true) {
		const index = this.getSegmentContents().findIndex((content) => content.id === id);
		if (index === -1) return;
		this.isManualScroll = false;
		this.resetScrollEndTimeout();
		const offset = index * this.el.offsetWidth;
		this.el.scrollTo({
			top: 0,
			left: (isRTL(this.el) ? -1 : 1) * offset,
			behavior: smoothScroll ? "smooth" : "instant"
		});
	}
	getSegmentContents() {
		return Array.from(this.el.querySelectorAll("ion-segment-content"));
	}
	render() {
		const { disabled, isManualScroll, swipeGesture } = this;
		return h(Host, {
			key: "b3cd48fead5d2877ead68cf6d81955fc31530c7a",
			class: {
				"segment-view-disabled": disabled,
				"segment-view-scroll-disabled": isManualScroll === false,
				"segment-view-swipe-disabled": swipeGesture === false
			}
		}, h("slot", { key: "ad5aa8b79790c490e13438afa0cbb2c241eab0a1" }));
	}
	get el() {
		return getElement(this);
	}
};
SegmentView.style = {
	ios: segmentViewIosCss(),
	md: segmentViewMdCss()
};
//#endregion
export { SegmentView as ion_segment_view };
