import { d as getElement, h as printIonWarning, p as h, r as Host, v as registerInstance } from "./index-Dvqtt_WK-CtfmC4By.js";
import { t as getIonMode } from "./ionic-global-BSaFA7np-C0AYHzhu.js";
import { t as createColorClasses } from "./theme-byZM6qHV-CVcL0HyM.js";
import "./index-BvabGprD-DxcnQO2v.js";
//#region node_modules/@ionic/core/dist/esm/ion-input-password-toggle.entry.js
/*!
* (C) Ionic http://ionicframework.com - MIT License
*/
var iosInputPasswordToggleCss = () => ``;
var mdInputPasswordToggleCss = () => ``;
var InputPasswordToggle = class {
	constructor(hostRef) {
		registerInstance(this, hostRef);
		/**
		* @internal
		*/
		this.type = "password";
		this.togglePasswordVisibility = () => {
			const { inputElRef } = this;
			if (!inputElRef) return;
			inputElRef.type = inputElRef.type === "text" ? "password" : "text";
		};
	}
	/**
	* Whenever the input type changes we need to re-run validation to ensure the password
	* toggle is being used with the correct input type. If the application changes the type
	* outside of this component we also need to re-render so the correct icon is shown.
	*/
	onTypeChange(newValue) {
		if (newValue !== "text" && newValue !== "password") {
			printIonWarning(`[ion-input-password-toggle] - Only inputs of type "text" or "password" are supported. Input of type "${newValue}" is not compatible.`, this.el);
			return;
		}
	}
	connectedCallback() {
		const { el } = this;
		const inputElRef = this.inputElRef = el.closest("ion-input");
		if (!inputElRef) {
			printIonWarning("[ion-input-password-toggle] - No ancestor ion-input found. This component must be slotted inside of an ion-input.", el);
			return;
		}
		/**
		* Important: Set the type in connectedCallback because the default value
		* of this.type may not always be accurate. Usually inputs have the "password" type
		* but it is possible to have the input to initially have the "text" type. In that scenario
		* the wrong icon will show briefly before switching to the correct icon. Setting the
		* type here allows us to avoid that flicker.
		*/
		this.type = inputElRef.type;
	}
	disconnectedCallback() {
		this.inputElRef = null;
	}
	render() {
		const { color, type } = this;
		const mode = getIonMode(this);
		const showPasswordIcon = this.showIcon ?? "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' class='ionicon'><circle cx='256' cy='256' r='64'/><path d='M490.84 238.6c-26.46-40.92-60.79-75.68-99.27-100.53C349 110.55 302 96 255.66 96c-42.52 0-84.33 12.15-124.27 36.11-40.73 24.43-77.63 60.12-109.68 106.07a31.92 31.92 0 0 0-.64 35.54c26.41 41.33 60.4 76.14 98.28 100.65C162 402 207.9 416 255.66 416c46.71 0 93.81-14.43 136.2-41.72 38.46-24.77 72.72-59.66 99.08-100.92a32.2 32.2 0 0 0-.1-34.76M256 352a96 96 0 1 1 96-96 96.11 96.11 0 0 1-96 96'/></svg>";
		const hidePasswordIcon = this.hideIcon ?? "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' class='ionicon'><path d='M432 448a15.92 15.92 0 0 1-11.31-4.69l-352-352a16 16 0 0 1 22.62-22.62l352 352A16 16 0 0 1 432 448M248 315.85l-51.79-51.79a2 2 0 0 0-3.39 1.69 64.11 64.11 0 0 0 53.49 53.49 2 2 0 0 0 1.69-3.39M264 196.15 315.87 248a2 2 0 0 0 3.4-1.69 64.13 64.13 0 0 0-53.55-53.55 2 2 0 0 0-1.72 3.39'/><path d='M491 273.36a32.2 32.2 0 0 0-.1-34.76c-26.46-40.92-60.79-75.68-99.27-100.53C349 110.55 302 96 255.68 96a226.5 226.5 0 0 0-71.82 11.79 4 4 0 0 0-1.56 6.63l47.24 47.24a4 4 0 0 0 3.82 1.05 96 96 0 0 1 116 116 4 4 0 0 0 1.05 3.81l67.95 68a4 4 0 0 0 5.4.24 343.8 343.8 0 0 0 67.24-77.4M256 352a96 96 0 0 1-93.3-118.63 4 4 0 0 0-1.05-3.81l-66.84-66.87a4 4 0 0 0-5.41-.23c-24.39 20.81-47 46.13-67.67 75.72a31.92 31.92 0 0 0-.64 35.54c26.41 41.33 60.39 76.14 98.28 100.65C162.06 402 207.92 416 255.68 416a238.2 238.2 0 0 0 72.64-11.55 4 4 0 0 0 1.61-6.64l-47.47-47.46a4 4 0 0 0-3.81-1.05A96 96 0 0 1 256 352'/></svg>";
		const isPasswordVisible = type === "text";
		return h(Host, {
			key: "15a29e51abc236cc21943225ed377f5edca7d103",
			class: createColorClasses(color, { [mode]: true })
		}, h("ion-button", {
			key: "cc9c290e809db66c14aaf63eb496ccf94d3f6414",
			mode,
			color,
			fill: "clear",
			shape: "round",
			"aria-label": isPasswordVisible ? "Hide password" : "Show password",
			"aria-pressed": isPasswordVisible ? "true" : "false",
			type: "button",
			onPointerDown: (ev) => {
				/**
				* This prevents mobile browsers from
				* blurring the input when the password toggle
				* button is activated.
				*/
				ev.preventDefault();
			},
			onClick: this.togglePasswordVisibility
		}, h("ion-icon", {
			key: "8d1f5143bedabcff2a8792f35ef07fdac1236fd5",
			slot: "icon-only",
			"aria-hidden": "true",
			icon: isPasswordVisible ? hidePasswordIcon : showPasswordIcon
		})));
	}
	get el() {
		return getElement(this);
	}
	static get watchers() {
		return { "type": [{ "onTypeChange": 0 }] };
	}
};
InputPasswordToggle.style = {
	ios: iosInputPasswordToggleCss(),
	md: mdInputPasswordToggleCss()
};
//#endregion
export { InputPasswordToggle as ion_input_password_toggle };
