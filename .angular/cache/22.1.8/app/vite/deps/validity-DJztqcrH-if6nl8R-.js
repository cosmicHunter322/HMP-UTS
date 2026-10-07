//#region node_modules/@ionic/core/dist/esm/validity-DJztqcrH.js
/*!
* (C) Ionic http://ionicframework.com - MIT License
*/
/**
* Checks if the form element is in an invalid state based on
* Ionic validation classes.
*
* @param el The form element to check.
* @returns `true` if the element is invalid, `false` otherwise.
*/
var checkInvalidState = (el) => {
	const hasIonTouched = el.classList.contains("ion-touched");
	const hasIonInvalid = el.classList.contains("ion-invalid");
	return hasIonTouched && hasIonInvalid;
};
//#endregion
export { checkInvalidState as t };
