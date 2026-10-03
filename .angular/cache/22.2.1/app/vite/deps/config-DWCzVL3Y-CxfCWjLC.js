//#region node_modules/@ionic/core/dist/esm/config-DWCzVL3Y.js
/*!
* (C) Ionic http://ionicframework.com - MIT License
*/
var setupConfig = (config) => {
	const win = window;
	const Ionic = win.Ionic;
	if (Ionic && Ionic.config && Ionic.config.constructor.name !== "Object") return;
	win.Ionic = win.Ionic || {};
	win.Ionic.config = {
		...win.Ionic.config,
		...config
	};
	return win.Ionic.config;
};
//#endregion
export { setupConfig as t };
