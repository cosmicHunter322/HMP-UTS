//#region node_modules/@ionic/core/dist/esm/watch-options-Dtdm8lKC.js
/*!
* (C) Ionic http://ionicframework.com - MIT License
*/
var watchForOptions = (containerEl, tagName, onChange) => {
	if (typeof MutationObserver === "undefined") return;
	const mutation = new MutationObserver((mutationList) => {
		onChange(getSelectedOption(mutationList, tagName));
	});
	mutation.observe(containerEl, {
		childList: true,
		subtree: true
	});
	return mutation;
};
var getSelectedOption = (mutationList, tagName) => {
	let newOption;
	mutationList.forEach((mut) => {
		for (let i = 0; i < mut.addedNodes.length; i++) newOption = findCheckedOption(mut.addedNodes[i], tagName) || newOption;
	});
	return newOption;
};
/**
* The "value" key is only set on some components such as ion-select-option.
* As a result, we create a default union type of HTMLElement and the "value" key.
* However, implementers are required to provide the appropriate component type
* such as HTMLIonSelectOptionElement.
*/
var findCheckedOption = (node, tagName) => {
	/**
	* https://developer.mozilla.org/en-US/docs/Web/API/Node/nodeType
	* The above check ensures "node" is an Element (nodeType 1).
	*/
	if (node.nodeType !== 1) return;
	const el = node;
	return (el.tagName === tagName.toUpperCase() ? [el] : Array.from(el.querySelectorAll(tagName))).find((o) => o.value === el.value);
};
//#endregion
export { watchForOptions as t };
