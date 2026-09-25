import { x as writeTask } from "./index-Dvqtt_WK-CtfmC4By.js";
import { t as createGesture } from "./index-BmLuEdV7-B8ieQZPS.js";
import { a as hapticSelectionEnd, i as hapticSelectionChanged, o as hapticSelectionStart } from "./haptic-D3njgGLB-CR0w36Fl.js";
//#region node_modules/@ionic/core/dist/esm/button-active-DyyWVqU3.js
/*!
* (C) Ionic http://ionicframework.com - MIT License
*/
var createButtonActiveGesture = (el, isButton) => {
	let currentTouchedButton;
	let initialTouchedButton;
	const activateButtonAtPoint = (x, y, hapticFeedbackFn) => {
		if (typeof document === "undefined") return;
		const target = document.elementFromPoint(x, y);
		if (!target || !isButton(target) || target.disabled) {
			clearActiveButton();
			return;
		}
		if (target !== currentTouchedButton) {
			clearActiveButton();
			setActiveButton(target, hapticFeedbackFn);
		}
	};
	const setActiveButton = (button, hapticFeedbackFn) => {
		currentTouchedButton = button;
		if (!initialTouchedButton) initialTouchedButton = currentTouchedButton;
		const buttonToModify = currentTouchedButton;
		writeTask(() => buttonToModify.classList.add("ion-activated"));
		hapticFeedbackFn();
	};
	const clearActiveButton = (dispatchClick = false) => {
		if (!currentTouchedButton) return;
		const buttonToModify = currentTouchedButton;
		writeTask(() => buttonToModify.classList.remove("ion-activated"));
		/**
		* Clicking on one button, but releasing on another button
		* does not dispatch a click event in browsers, so we
		* need to do it manually here. Some browsers will
		* dispatch a click if clicking on one button, dragging over
		* another button, and releasing on the original button. In that
		* case, we need to make sure we do not cause a double click there.
		*/
		if (dispatchClick && initialTouchedButton !== currentTouchedButton) currentTouchedButton.click();
		currentTouchedButton = void 0;
	};
	return createGesture({
		el,
		gestureName: "buttonActiveDrag",
		threshold: 0,
		onStart: (ev) => activateButtonAtPoint(ev.currentX, ev.currentY, hapticSelectionStart),
		onMove: (ev) => activateButtonAtPoint(ev.currentX, ev.currentY, hapticSelectionChanged),
		onEnd: () => {
			clearActiveButton(true);
			hapticSelectionEnd();
			initialTouchedButton = void 0;
		}
	});
};
//#endregion
export { createButtonActiveGesture as t };
