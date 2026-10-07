import { _ as readTask, x as writeTask } from "./index-D9OR05yj-DaZatFja.js";
import { a as componentOnReady } from "./helpers-B54ynME_-DqEtrk7h.js";
import { i as findClosestIonContent, p as scrollToTop } from "./index--21qeSt0-B2ubc-XN.js";
//#region node_modules/@ionic/core/dist/esm/status-tap-DRx9wSD_.js
/*!
* (C) Ionic http://ionicframework.com - MIT License
*/
var startStatusTap = () => {
	const win = window;
	win.addEventListener("statusTap", () => {
		readTask(() => {
			const width = win.innerWidth;
			const height = win.innerHeight;
			const el = document.elementFromPoint(width / 2, height / 2);
			if (!el) return;
			const contentEl = findClosestIonContent(el);
			if (contentEl) new Promise((resolve) => componentOnReady(contentEl, resolve)).then(() => {
				writeTask(async () => {
					/**
					* If scrolling and user taps status bar,
					* only calling scrollToTop is not enough
					* as engines like WebKit will jump the
					* scroll position back down and complete
					* any in-progress momentum scrolling.
					*/
					contentEl.style.setProperty("--overflow", "hidden");
					await scrollToTop(contentEl, 300);
					contentEl.style.removeProperty("--overflow");
				});
			});
		});
	});
};
//#endregion
export { startStatusTap };
