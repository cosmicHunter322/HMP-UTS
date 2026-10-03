//#region node_modules/@ionic/core/dist/esm/theme-byZM6qHV.js
/*!
* (C) Ionic http://ionicframework.com - MIT License
*/
var hostContext = (selector, el) => {
	return el.closest(selector) !== null;
};
/**
* Create the mode and color classes for the component based on the classes passed in
*/
var createColorClasses = (color, cssClassMap) => {
	return typeof color === "string" && color.length > 0 ? {
		"ion-color": true,
		[`ion-color-${color}`]: true,
		...cssClassMap
	} : cssClassMap;
};
var getClassList = (classes) => {
	if (classes !== void 0) return (Array.isArray(classes) ? classes : classes.split(" ")).filter((c) => c != null).map((c) => c.trim()).filter((c) => c !== "");
	return [];
};
var getClassMap = (classes) => {
	const map = {};
	getClassList(classes).forEach((c) => map[c] = true);
	return map;
};
var SCHEME = /^[a-z][a-z0-9+\-.]*:/;
var openURL = async (url, ev, direction, animation) => {
	if (url != null && url[0] !== "#" && !SCHEME.test(url)) {
		const router = document.querySelector("ion-router");
		if (router) {
			if (ev != null) ev.preventDefault();
			return router.push(url, direction, animation);
		}
	}
	return false;
};
//#endregion
export { openURL as i, getClassMap as n, hostContext as r, createColorClasses as t };
