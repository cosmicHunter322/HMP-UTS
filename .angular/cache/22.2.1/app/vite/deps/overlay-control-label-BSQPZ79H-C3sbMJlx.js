//#region node_modules/@ionic/core/dist/esm/overlay-control-label-BSQPZ79H.js
/*!
* (C) Ionic http://ionicframework.com - MIT License
*/
/**
* Returns the default `labelPlacement` for a radio or checkbox option
* rendered inside an overlay. Defaults follow each mode's established
* option-row layout:
* - `ios`: `"start"` for radio in `alert` and `popover`. The `modal`
*   interface flips iOS radio back to `"end"`. Checkbox is always
*   `"end"` on iOS.
* - everything else (e.g. `md`): `"end"`.
*
* `interfaceType` is optional; only `"modal"` changes the result, so
* callers that aren't a modal can omit it.
*
* Used by `select-popover` and `select-modal` as the fallback when an
* option doesn't explicitly set `labelPlacement`.
*/
var getOverlayLabelPlacement = (mode, control, interfaceType) => {
	if (mode === "ios" && control === "radio" && interfaceType !== "modal") return "start";
	return "end";
};
/**
* Returns the default `justify` for a radio or checkbox option rendered
* inside an overlay. Defaults follow each mode's option-row layout:
* - `ios`: `"space-between"` for radio in `alert` and `popover`. The
*   `modal` interface falls back to `"start"`. Checkbox is always `"start"`
*   on iOS.
* - everything else (e.g. `md`): `"start"`.
*
* `interfaceType` is optional; only `"modal"` changes the result, so
* callers that aren't a modal can omit it.
*
* Used by `select-popover` and `select-modal` as the fallback when an
* option doesn't explicitly set `justify`.
*/
var getOverlayLabelJustify = (mode, control, interfaceType) => {
	if (mode === "ios" && control === "radio" && interfaceType !== "modal") return "space-between";
	return "start";
};
//#endregion
export { getOverlayLabelPlacement as n, getOverlayLabelJustify as t };
