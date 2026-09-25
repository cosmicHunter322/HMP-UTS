import { C as win, s as doc } from "./helpers-BJFnZngp-COG28xNj.js";
import { n as KeyboardResize, t as Keyboard } from "./keyboard-Cz4hUjuj-C2WFv-Ft.js";
//#region node_modules/@ionic/core/dist/esm/keyboard-controller-BLvRgxgP.js
/*!
* (C) Ionic http://ionicframework.com - MIT License
*/
/**
* The element that resizes when the keyboard opens
* is going to depend on the resize mode
* which is why we check that here.
*/
var getResizeContainer = (resizeMode) => {
	/**
	* If doc is undefined then we are
	* in an SSR environment, so the keyboard
	* adjustment does not apply.
	* If the webview does not resize then there
	* is no container to resize.
	*/
	if (doc === void 0 || resizeMode === KeyboardResize.None || resizeMode === void 0) return null;
	return doc.querySelector("ion-app") ?? doc.body;
};
/**
* Get the height of ion-app or body.
* This is used for determining if the webview
* has resized before the keyboard closed.
* */
var getResizeContainerHeight = (resizeMode) => {
	const containerElement = getResizeContainer(resizeMode);
	return containerElement === null ? 0 : containerElement.clientHeight;
};
/**
* Creates a controller that tracks and reacts to opening or closing the keyboard.
*
* @internal
* @param keyboardChangeCallback A function to call when the keyboard opens or closes.
*/
var createKeyboardController = async (keyboardChangeCallback) => {
	let keyboardWillShowHandler;
	let keyboardWillHideHandler;
	let keyboardVisible;
	/**
	* This lets us determine if the webview content
	* has resized as a result of the keyboard.
	*/
	let initialResizeContainerHeight;
	const init = async () => {
		const resizeOptions = await Keyboard.getResizeMode();
		const resizeMode = resizeOptions === void 0 ? void 0 : resizeOptions.mode;
		keyboardWillShowHandler = () => {
			/**
			* We need to compute initialResizeContainerHeight right before
			* the keyboard opens to guarantee the resize container is visible.
			* The resize container may not be visible if we compute this
			* as soon as the keyboard controller is created.
			* We should only need to do this once to avoid additional clientHeight
			* computations.
			*/
			if (initialResizeContainerHeight === void 0) initialResizeContainerHeight = getResizeContainerHeight(resizeMode);
			keyboardVisible = true;
			fireChangeCallback(keyboardVisible, resizeMode);
		};
		keyboardWillHideHandler = () => {
			keyboardVisible = false;
			fireChangeCallback(keyboardVisible, resizeMode);
		};
		win?.addEventListener("keyboardWillShow", keyboardWillShowHandler);
		win?.addEventListener("keyboardWillHide", keyboardWillHideHandler);
	};
	const fireChangeCallback = (state, resizeMode) => {
		if (keyboardChangeCallback) keyboardChangeCallback(state, createResizePromiseIfNeeded(resizeMode));
	};
	/**
	* Code responding to keyboard lifecycles may need
	* to show/hide content once the webview has
	* resized as a result of the keyboard showing/hiding.
	* createResizePromiseIfNeeded provides a way for code to wait for the
	* resize event that was triggered as a result of the keyboard.
	*/
	const createResizePromiseIfNeeded = (resizeMode) => {
		if (initialResizeContainerHeight === 0 || initialResizeContainerHeight === getResizeContainerHeight(resizeMode)) return;
		/**
		* Get the resize container so we can
		* attach the ResizeObserver below to
		* the correct element.
		*/
		const containerElement = getResizeContainer(resizeMode);
		if (containerElement === null) return;
		/**
		* Some part of the web content should resize,
		* and we need to listen for a resize.
		*/
		return new Promise((resolve) => {
			const callback = () => {
				/**
				* As per the spec, the ResizeObserver
				* will fire when observation starts if
				* the observed element is rendered and does not
				* have a size of 0 x 0. However, the watched element
				* may or may not have resized by the time this first
				* callback is fired. As a result, we need to check
				* the dimensions of the element.
				*
				* https://www.w3.org/TR/resize-observer/#intro
				*/
				if (containerElement.clientHeight === initialResizeContainerHeight) {
					/**
					* The resize happened, so stop listening
					* for resize on this element.
					*/
					ro.disconnect();
					resolve();
				}
			};
			/**
			* In Capacitor there can be delay between when the window
			* resizes and when the container element resizes, so we cannot
			* rely on a 'resize' event listener on the window.
			* Instead, we need to determine when the container
			* element resizes using a ResizeObserver.
			*/
			const ro = new ResizeObserver(callback);
			ro.observe(containerElement);
		});
	};
	const destroy = () => {
		win?.removeEventListener("keyboardWillShow", keyboardWillShowHandler);
		win?.removeEventListener("keyboardWillHide", keyboardWillHideHandler);
		keyboardWillShowHandler = keyboardWillHideHandler = void 0;
	};
	const isKeyboardVisible = () => keyboardVisible;
	await init();
	return {
		init,
		destroy,
		isKeyboardVisible
	};
};
//#endregion
export { createKeyboardController as t };
