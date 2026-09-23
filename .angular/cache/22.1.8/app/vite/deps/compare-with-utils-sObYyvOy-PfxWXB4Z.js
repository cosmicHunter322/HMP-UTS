//#region node_modules/@ionic/core/dist/esm/compare-with-utils-sObYyvOy.js
/*!
* (C) Ionic http://ionicframework.com - MIT License
*/
/**
* Uses the compareWith param to compare two values to determine if they are equal.
*
* @param currentValue The current value of the control.
* @param compareValue The value to compare against.
* @param compareWith The function or property name to use to compare values.
*/
var compareOptions = (currentValue, compareValue, compareWith) => {
	if (typeof compareWith === "function") return compareWith(currentValue, compareValue);
	else if (typeof compareWith === "string") return currentValue[compareWith] === compareValue[compareWith];
	else return Array.isArray(compareValue) ? compareValue.includes(currentValue) : currentValue === compareValue;
};
/**
* Compares a value against the current value(s) to determine if it is selected.
*
* @param currentValue The current value of the control.
* @param compareValue The value to compare against.
* @param compareWith The function or property name to use to compare values.
*/
var isOptionSelected = (currentValue, compareValue, compareWith) => {
	if (currentValue === void 0) return false;
	if (Array.isArray(currentValue)) return currentValue.some((val) => compareOptions(val, compareValue, compareWith));
	else return compareOptions(currentValue, compareValue, compareWith);
};
//#endregion
export { isOptionSelected as n, compareOptions as t };
