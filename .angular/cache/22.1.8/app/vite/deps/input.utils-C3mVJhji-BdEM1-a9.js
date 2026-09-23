import { m as printIonError } from "./index-Dvqtt_WK-CtfmC4By.js";
//#region node_modules/@ionic/core/dist/esm/input.utils-C3mVJhji.js
/*!
* (C) Ionic http://ionicframework.com - MIT License
*/
var getCounterText = (value, maxLength, counterFormatter) => {
	const valueLength = value == null ? 0 : value.toString().length;
	const defaultCounterText = defaultCounterFormatter(valueLength, maxLength);
	/**
	* If developers did not pass a custom formatter,
	* use the default one.
	*/
	if (counterFormatter === void 0) return defaultCounterText;
	/**
	* Otherwise, try to use the custom formatter
	* and fallback to the default formatter if
	* there was an error.
	*/
	try {
		return counterFormatter(valueLength, maxLength);
	} catch (e) {
		printIonError("[ion-input] - Exception in provided `counterFormatter`:", e);
		return defaultCounterText;
	}
};
var defaultCounterFormatter = (length, maxlength) => {
	return `${length} / ${maxlength}`;
};
//#endregion
export { getCounterText as t };
