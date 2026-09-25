import { p as h } from "./index-Dvqtt_WK-CtfmC4By.js";
import { a as sanitizeDOMTree } from "./index-DmnOg_xm-CoMu4g4x.js";
//#region node_modules/@ionic/core/dist/esm/select-option-render-C_PCwA67.js
/*!
* (C) Ionic http://ionicframework.com - MIT License
*/
/**
* Converts a DOM node into a Stencil VNode (or text string) so the
* resulting tree is rendered through the component's normal render
* path. Rendering through Stencil ensures that scoped CSS classes
* (e.g. `sc-ion-action-sheet-ionic`) are applied to every element.
*
* Highly recommended to pre-sanitize the source DOM (see
* `getOptionContent` in select.tsx). This function performs pure
* structural conversion — no security filtering.
*
* Preserves attributes only — properties set imperatively on the source
* element (e.g. `input.value` after a user types) won't carry through.
* In practice this isn't a concern: interactive controls shouldn't
* appear in select-option rich content since they'd nest inside the
* overlay's button/radio/checkbox wrapper, which is invalid HTML and
* an accessibility issue.
*
* @param node - The DOM node to convert. Text nodes become strings,
* element nodes become VNodes, and any other node types are skipped.
* @param keyPrefix - String prefix used to build a stable VNode key,
* so Stencil's diff can preserve elements across re-renders.
* @param index - Position of this node among its siblings. Combined
* with `keyPrefix` to form the final unique key.
* @returns The converted VNode, a text string, or `null` if the node
* type isn't supported.
*
* @internal Exported only so it can be unit tested; not part of the
* public API.
*/
var cloneToVNode = (node, keyPrefix, index) => {
	if (node.nodeType === Node.TEXT_NODE) return node.textContent ?? "";
	if (node.nodeType !== Node.ELEMENT_NODE) return null;
	const el = node;
	const tag = el.tagName.toLowerCase();
	const key = `${keyPrefix}-${index}`;
	const attrs = { key };
	for (let i = 0; i < el.attributes.length; i++) {
		const attr = el.attributes.item(i);
		attrs[attr.name] = attr.value;
	}
	return h(tag, attrs, Array.from(el.childNodes).map((child, i) => cloneToVNode(child, key, i)).filter((c) => c !== null));
};
/**
* Renders cloned DOM content as Stencil JSX. Walking the source DOM
* into VNodes (rather than injecting it via innerHTML) keeps the
* content inside Stencil's render path, so scoped CSS classes are
* applied automatically and component attributes like `size` or
* `color` survive intact.
*
* Span elements should be used when this content renders within buttons,
* depending on the select interface. Buttons can only have phrasing
* content to prevent accessibility issues.
*
* @param id - Unique identifier for generating stable virtual DOM keys.
* @param content - The HTMLElement container whose child nodes will be cloned.
* @param className - CSS class applied to the wrapper element.
* @param useSpan - Whether to use a span element instead of a div for the wrapper.
*/
var renderClonedContent = (id, content, className, useSpan = false) => {
	const Tag = useSpan ? "span" : "div";
	const keyPrefix = `${className}-${id}`;
	/**
	* Do not remove. This is the only sanitization pass for callers that pass
	* an `HTMLElement` straight to `renderOptionLabel` (e.g. vanilla JS)
	* without going through `getOptionContent`, which sanitizes upstream.
	* `cloneToVNode` does pure structural conversion and no security
	* filtering, so dropping this call would reopen an XSS hole on the
	* direct `HTMLElement` path.
	*/
	sanitizeDOMTree(content);
	return h(Tag, {
		class: className,
		key: keyPrefix
	}, Array.from(content.childNodes).map((child, i) => cloneToVNode(child, keyPrefix, i)));
};
/**
* Renders the label content for a select option within an overlay
* interface based on the presence of rich content.
*
* Span elements should be used when this content renders within buttons,
* depending on the select interface. Buttons can only have phrasing
* content to prevent accessibility issues.
*
* @param option - The content option data containing label, slots,
* and description.
* @param className - The base CSS class for the label element.
* @param useSpan - Whether to use a span element instead of a div for the label.
*/
var renderOptionLabel = (option, className, useSpan = false) => {
	const { id, label, startContent, endContent, description } = option;
	const hasRichContent = !!startContent || !!endContent || !!description;
	const Tag = useSpan ? "span" : "div";
	if (!hasRichContent && (typeof label === "string" || !label)) return h(Tag, {
		class: className,
		key: `${className}-${id}`
	}, label);
	const labelEl = typeof label === "string" || !label ? h(Tag, { key: `${className}-label-${id}` }, label) : renderClonedContent(id, label, `${className}-text`, useSpan);
	if (!hasRichContent) return h(Tag, {
		class: className,
		key: `${className}-${id}`
	}, labelEl);
	return h(Tag, {
		class: `${className} ${className}-has-rich-content`,
		key: `${className}-${id}`
	}, startContent && renderClonedContent(id, startContent, "select-option-start", useSpan), h(Tag, {
		class: "select-option-content",
		key: `${className}-content-${id}`
	}, labelEl, description && h(Tag, {
		class: "select-option-description",
		key: `${className}-desc-${id}`
	}, description)), endContent && renderClonedContent(id, endContent, "select-option-end", useSpan));
};
//#endregion
export { renderOptionLabel as t };
