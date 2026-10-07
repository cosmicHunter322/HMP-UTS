import { t as __exportAll } from "./rolldown-runtime-D7D4PA-g.js";
import "./index-D9OR05yj-DaZatFja.js";
import "./helpers-B54ynME_-DqEtrk7h.js";
import { t as createAnimation } from "./animation-CFd8Olt3-DRQQoUbA.js";
import { a as getIonPageElement } from "./index-B8iieOdw-COjlFH7K.js";
//#region node_modules/@ionic/core/dist/esm/md.transition-wqThNy_C.js
/*!
* (C) Ionic http://ionicframework.com - MIT License
*/
var md_transition_wqThNy_C_exports = /* @__PURE__ */ __exportAll({ mdTransitionAnimation: () => mdTransitionAnimation });
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
export { md_transition_wqThNy_C_exports as n, mdTransitionAnimation as t };
