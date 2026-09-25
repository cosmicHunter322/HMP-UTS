import { a as config, c as createEvent, d as getElement, h as printIonWarning, p as h, r as Host, v as registerInstance } from "./index-Dvqtt_WK-CtfmC4By.js";
import { S as transitionEndAsync, l as getElementRoot, t as addEventListener, v as raf, y as removeEventListener } from "./helpers-BJFnZngp-COG28xNj.js";
import { t as getIonMode } from "./ionic-global-BSaFA7np-C0AYHzhu.js";
import { c as chevronDown } from "./index-BvabGprD-DxcnQO2v.js";
//#region node_modules/@ionic/core/dist/esm/ion-accordion_2.entry.js
/*!
* (C) Ionic http://ionicframework.com - MIT License
*/
var accordionIosCss = () => `:host{display:block;position:relative;width:100%;background-color:var(--ion-background-color, #ffffff);overflow:hidden;z-index:0}:host(.accordion-expanding) ::slotted(ion-item[slot=header]),:host(.accordion-expanded) ::slotted(ion-item[slot=header]){--border-width:0px}:host(.accordion-animated){-webkit-transition:all 300ms cubic-bezier(0.25, 0.8, 0.5, 1);transition:all 300ms cubic-bezier(0.25, 0.8, 0.5, 1)}:host(.accordion-animated) #content{-webkit-transition:max-height 300ms cubic-bezier(0.25, 0.8, 0.5, 1);transition:max-height 300ms cubic-bezier(0.25, 0.8, 0.5, 1)}#content{overflow:hidden;will-change:max-height}:host(.accordion-collapsing) #content{max-height:0 !important}:host(.accordion-collapsed) #content{display:none}:host(.accordion-expanding) #content{max-height:0}:host(.accordion-expanding) #content-wrapper{overflow:auto}:host(.accordion-disabled) #header,:host(.accordion-readonly) #header,:host(.accordion-disabled) #content,:host(.accordion-readonly) #content{pointer-events:none}:host(.accordion-disabled) #header,:host(.accordion-disabled) #content{opacity:0.4}@media (prefers-reduced-motion: reduce){:host,#content{-webkit-transition:none !important;transition:none !important}}:host(.accordion-next) ::slotted(ion-item[slot=header]){--border-width:0.55px 0px 0.55px 0px}`;
var accordionMdCss = () => `:host{display:block;position:relative;width:100%;background-color:var(--ion-background-color, #ffffff);overflow:hidden;z-index:0}:host(.accordion-expanding) ::slotted(ion-item[slot=header]),:host(.accordion-expanded) ::slotted(ion-item[slot=header]){--border-width:0px}:host(.accordion-animated){-webkit-transition:all 300ms cubic-bezier(0.25, 0.8, 0.5, 1);transition:all 300ms cubic-bezier(0.25, 0.8, 0.5, 1)}:host(.accordion-animated) #content{-webkit-transition:max-height 300ms cubic-bezier(0.25, 0.8, 0.5, 1);transition:max-height 300ms cubic-bezier(0.25, 0.8, 0.5, 1)}#content{overflow:hidden;will-change:max-height}:host(.accordion-collapsing) #content{max-height:0 !important}:host(.accordion-collapsed) #content{display:none}:host(.accordion-expanding) #content{max-height:0}:host(.accordion-expanding) #content-wrapper{overflow:auto}:host(.accordion-disabled) #header,:host(.accordion-readonly) #header,:host(.accordion-disabled) #content,:host(.accordion-readonly) #content{pointer-events:none}:host(.accordion-disabled) #header,:host(.accordion-disabled) #content{opacity:0.4}@media (prefers-reduced-motion: reduce){:host,#content{-webkit-transition:none !important;transition:none !important}}`;
var Accordion = class {
	constructor(hostRef) {
		registerInstance(this, hostRef);
		this.accordionGroupUpdateHandler = () => {
			/**
			* Determine if this update will cause an actual state change.
			* We only want to mark as "interacted" if the state is changing.
			*/
			const accordionGroup = this.accordionGroupEl;
			if (accordionGroup) {
				const value = accordionGroup.value;
				const accordionValue = this.value;
				const stateWillChange = (Array.isArray(value) ? value.includes(accordionValue) : value === accordionValue) !== (this.state === 4 || this.state === 8);
				/**
				* Only mark as interacted if:
				* 1. This is not the first update we've received with a defined value
				* 2. The state is actually changing (prevents redundant updates from enabling animations)
				*/
				if (this.hasReceivedFirstUpdate && stateWillChange) this.hasInteracted = true;
				/**
				* Only count this as the first update if the group value is defined.
				* This prevents the initial undefined value from the group's componentDidLoad
				* from being treated as the first real update.
				*/
				if (value !== void 0) this.hasReceivedFirstUpdate = true;
			}
			this.updateState();
		};
		this.state = 1;
		this.isNext = false;
		this.isPrevious = false;
		/**
		* Tracks whether a user-initiated interaction has occurred.
		* Animations are disabled until the first interaction happens.
		* This prevents the accordion from animating when it's programmatically
		* set to an expanded or collapsed state on initial load.
		*/
		this.hasInteracted = false;
		/**
		* Tracks if this accordion has ever been expanded.
		* Used to prevent the first expansion from animating.
		*/
		this.hasEverBeenExpanded = false;
		/**
		* Tracks if this accordion has received its first update from the group.
		* Used to distinguish initial programmatic sets from user interactions.
		*/
		this.hasReceivedFirstUpdate = false;
		/**
		* The value of the accordion. Defaults to an autogenerated
		* value.
		*/
		this.value = `ion-accordion-${accordionIds++}`;
		/**
		* If `true`, the accordion cannot be interacted with.
		*/
		this.disabled = false;
		/**
		* If `true`, the accordion cannot be interacted with,
		* but does not alter the opacity.
		*/
		this.readonly = false;
		/**
		* The toggle icon to use. This icon will be
		* rotated when the accordion is expanded
		* or collapsed.
		*/
		this.toggleIcon = chevronDown;
		/**
		* The slot inside of `ion-item` to
		* place the toggle icon. Defaults to `"end"`.
		*/
		this.toggleIconSlot = "end";
		this.setItemDefaults = () => {
			const ionItem = this.getSlottedHeaderIonItem();
			if (!ionItem) return;
			/**
			* For a11y purposes, we make
			* the ion-item a button so users
			* can tab to it and use keyboard
			* navigation to get around.
			*/
			ionItem.button = true;
			ionItem.detail = false;
			/**
			* By default, the lines in an
			* item should be full here, but
			* only do that if a user has
			* not explicitly overridden them
			*/
			if (ionItem.lines === void 0) ionItem.lines = "full";
		};
		this.getSlottedHeaderIonItem = () => {
			const { headerEl } = this;
			if (!headerEl) return;
			/**
			* Get the first ion-item
			* slotted in the header slot
			*/
			const slot = headerEl.querySelector("slot");
			if (!slot) return;
			if (slot.assignedElements === void 0) return;
			return slot.assignedElements().find((el) => el.tagName === "ION-ITEM");
		};
		this.setAria = (expanded = false) => {
			const ionItem = this.getSlottedHeaderIonItem();
			if (!ionItem) return;
			const button = getElementRoot(ionItem).querySelector("button");
			if (!button) return;
			button.setAttribute("aria-expanded", `${expanded}`);
		};
		this.slotToggleIcon = () => {
			const ionItem = this.getSlottedHeaderIonItem();
			if (!ionItem) return;
			const { toggleIconSlot, toggleIcon } = this;
			if (ionItem.querySelector(".ion-accordion-toggle-icon")) return;
			const iconEl = document.createElement("ion-icon");
			iconEl.slot = toggleIconSlot;
			iconEl.lazy = false;
			iconEl.classList.add("ion-accordion-toggle-icon");
			iconEl.icon = toggleIcon;
			iconEl.setAttribute("aria-hidden", "true");
			ionItem.appendChild(iconEl);
		};
		this.expandAccordion = () => {
			const { contentEl, contentElWrapper } = this;
			/**
			* If the content elements aren't available yet, just set the state.
			* This happens on initial render before the DOM is ready.
			*/
			if (contentEl === void 0 || contentElWrapper === void 0) {
				this.state = 4;
				this.hasEverBeenExpanded = true;
				return;
			}
			if (this.state === 4) return;
			if (this.currentRaf !== void 0) cancelAnimationFrame(this.currentRaf);
			/**
			* Mark that this accordion has been expanded at least once.
			* This allows subsequent expansions to animate.
			*/
			this.hasEverBeenExpanded = true;
			if (this.shouldAnimate()) raf(() => {
				this.state = 8;
				this.currentRaf = raf(async () => {
					const contentHeight = contentElWrapper.offsetHeight;
					const waitForTransition = transitionEndAsync(contentEl, 2e3);
					contentEl.style.setProperty("max-height", `${contentHeight}px`);
					await waitForTransition;
					this.state = 4;
					contentEl.style.removeProperty("max-height");
				});
			});
			else this.state = 4;
		};
		this.collapseAccordion = () => {
			const { contentEl } = this;
			/**
			* If the content element isn't available yet, just set the state.
			* This happens on initial render before the DOM is ready.
			*/
			if (contentEl === void 0) {
				this.state = 1;
				return;
			}
			if (this.state === 1) return;
			if (this.currentRaf !== void 0) cancelAnimationFrame(this.currentRaf);
			if (this.shouldAnimate()) this.currentRaf = raf(async () => {
				const contentHeight = contentEl.offsetHeight;
				contentEl.style.setProperty("max-height", `${contentHeight}px`);
				raf(async () => {
					const waitForTransition = transitionEndAsync(contentEl, 2e3);
					this.state = 2;
					await waitForTransition;
					this.state = 1;
					contentEl.style.removeProperty("max-height");
				});
			});
			else this.state = 1;
		};
		/**
		* Helper function to determine if
		* something should animate.
		* If prefers-reduced-motion is set
		* then we should not animate, regardless
		* of what is set in the config.
		*/
		this.shouldAnimate = () => {
			/**
			* Don't animate until after the first user interaction.
			* This prevents animations on initial load when accordions
			* start in an expanded or collapsed state programmatically.
			*
			* Additionally, don't animate the very first expansion even if
			* hasInteracted is true. This handles edge cases like React StrictMode
			* where effects run twice and might incorrectly mark as interacted.
			*/
			if (!this.hasInteracted || !this.hasEverBeenExpanded) return false;
			if (typeof window === "undefined") return false;
			if (matchMedia("(prefers-reduced-motion: reduce)").matches) return false;
			if (!config.get("animated", true)) return false;
			if (this.accordionGroupEl && !this.accordionGroupEl.animated) return false;
			return true;
		};
		this.updateState = async () => {
			const accordionGroup = this.accordionGroupEl;
			const accordionValue = this.value;
			if (!accordionGroup) return;
			const value = accordionGroup.value;
			if (Array.isArray(value) ? value.includes(accordionValue) : value === accordionValue) {
				this.expandAccordion();
				this.isNext = this.isPrevious = false;
			} else {
				this.collapseAccordion();
				const nextAccordionValue = this.getNextSibling()?.value;
				if (nextAccordionValue !== void 0) this.isPrevious = Array.isArray(value) ? value.includes(nextAccordionValue) : value === nextAccordionValue;
				const previousAccordionValue = this.getPreviousSibling()?.value;
				if (previousAccordionValue !== void 0) this.isNext = Array.isArray(value) ? value.includes(previousAccordionValue) : value === previousAccordionValue;
			}
		};
		this.getNextSibling = () => {
			if (!this.el) return;
			const nextSibling = this.el.nextElementSibling;
			if (nextSibling?.tagName !== "ION-ACCORDION") return;
			return nextSibling;
		};
		this.getPreviousSibling = () => {
			if (!this.el) return;
			const previousSibling = this.el.previousElementSibling;
			if (previousSibling?.tagName !== "ION-ACCORDION") return;
			return previousSibling;
		};
	}
	valueChanged() {
		this.updateState();
	}
	connectedCallback() {
		const accordionGroupEl = this.accordionGroupEl = this.el?.closest("ion-accordion-group");
		if (accordionGroupEl) {
			this.updateState();
			addEventListener(accordionGroupEl, "ionValueChange", this.accordionGroupUpdateHandler);
		}
	}
	disconnectedCallback() {
		const accordionGroupEl = this.accordionGroupEl;
		if (accordionGroupEl) removeEventListener(accordionGroupEl, "ionValueChange", this.accordionGroupUpdateHandler);
	}
	componentDidLoad() {
		this.setItemDefaults();
		this.slotToggleIcon();
		/**
		* We need to wait a tick because we
		* just set ionItem.button = true and
		* the button has not have been rendered yet.
		*/
		raf(() => {
			/**
			* Set aria label on button inside of ion-item
			* once the inner content has been rendered.
			*/
			const expanded = this.state === 4 || this.state === 8;
			this.setAria(expanded);
		});
	}
	toggleExpanded() {
		const { accordionGroupEl, disabled, readonly, value, state } = this;
		if (disabled || readonly) return;
		/**
		* Mark that the user has interacted with the accordion.
		* This enables animations for all future state changes.
		*/
		this.hasInteracted = true;
		if (accordionGroupEl) {
			/**
			* Because the accordion group may or may
			* not allow multiple accordions open, we
			* need to request the toggling of this
			* accordion and the accordion group will
			* make the decision on whether or not
			* to allow it.
			*/
			const expand = state === 1 || state === 2;
			accordionGroupEl.requestAccordionToggle(value, expand);
		}
	}
	render() {
		const { disabled, readonly } = this;
		const mode = getIonMode(this);
		const expanded = this.state === 4 || this.state === 8;
		const headerPart = expanded ? "header expanded" : "header";
		const contentPart = expanded ? "content expanded" : "content";
		this.setAria(expanded);
		return h(Host, {
			key: "5c58b3809a4636d69f0f9957ecf1f50c42cdfc03",
			class: {
				[mode]: true,
				"accordion-expanding": this.state === 8,
				"accordion-expanded": this.state === 4,
				"accordion-collapsing": this.state === 2,
				"accordion-collapsed": this.state === 1,
				"accordion-next": this.isNext,
				"accordion-previous": this.isPrevious,
				"accordion-disabled": disabled,
				"accordion-readonly": readonly,
				"accordion-animated": this.shouldAnimate()
			},
			tabindex: disabled ? "-1" : void 0
		}, h("div", {
			key: "f76bc02347639b41c9a5be8a9488a8be8559cba7",
			onClick: () => this.toggleExpanded(),
			id: "header",
			part: headerPart,
			"aria-controls": "content",
			ref: (headerEl) => this.headerEl = headerEl
		}, h("slot", {
			key: "e01744bf0af3200239e82c60c632ed36295db2da",
			name: "header"
		})), h("div", {
			key: "c613345a7e244ee361f76ff4ebed139d2a1b9572",
			id: "content",
			part: contentPart,
			role: "region",
			"aria-labelledby": "header",
			ref: (contentEl) => this.contentEl = contentEl
		}, h("div", {
			key: "943b65d9a129759b4c213974ae5ed777b5f6166e",
			id: "content-wrapper",
			ref: (contentElWrapper) => this.contentElWrapper = contentElWrapper
		}, h("slot", {
			key: "b0df520dad9d5557df63a35f8206ada4a765d238",
			name: "content"
		}))));
	}
	static get delegatesFocus() {
		return true;
	}
	get el() {
		return getElement(this);
	}
	static get watchers() {
		return { "value": [{ "valueChanged": 0 }] };
	}
};
var accordionIds = 0;
Accordion.style = {
	ios: accordionIosCss(),
	md: accordionMdCss()
};
var accordionGroupIosCss = () => `:host{display:block}:host(.accordion-group-expand-inset){-webkit-margin-start:16px;margin-inline-start:16px;-webkit-margin-end:16px;margin-inline-end:16px;margin-top:16px;margin-bottom:16px}:host(.accordion-group-expand-inset) ::slotted(ion-accordion.accordion-expanding),:host(.accordion-group-expand-inset) ::slotted(ion-accordion.accordion-expanded){border-bottom:none}`;
var accordionGroupMdCss = () => `:host{display:block}:host(.accordion-group-expand-inset){-webkit-margin-start:16px;margin-inline-start:16px;-webkit-margin-end:16px;margin-inline-end:16px;margin-top:16px;margin-bottom:16px}:host(.accordion-group-expand-inset) ::slotted(ion-accordion){-webkit-box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)}:host(.accordion-group-expand-inset) ::slotted(ion-accordion.accordion-expanding),:host(.accordion-group-expand-inset) ::slotted(ion-accordion.accordion-expanded){margin-left:0;margin-right:0;margin-top:16px;margin-bottom:16px;border-radius:6px}:host(.accordion-group-expand-inset) ::slotted(ion-accordion.accordion-previous){border-end-end-radius:6px;border-end-start-radius:6px}:host(.accordion-group-expand-inset) ::slotted(ion-accordion.accordion-next){border-start-start-radius:6px;border-start-end-radius:6px}:host(.accordion-group-expand-inset) ::slotted(ion-accordion):first-of-type{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0}`;
var AccordionGroup = class {
	constructor(hostRef) {
		registerInstance(this, hostRef);
		this.ionChange = createEvent(this, "ionChange", 7);
		this.ionValueChange = createEvent(this, "ionValueChange", 7);
		/**
		* If `true`, all accordions inside of the
		* accordion group will animate when expanding
		* or collapsing.
		*/
		this.animated = true;
		/**
		* If `true`, the accordion group cannot be interacted with.
		*/
		this.disabled = false;
		/**
		* If `true`, the accordion group cannot be interacted with,
		* but does not alter the opacity.
		*/
		this.readonly = false;
		/**
		* Describes the expansion behavior for each accordion.
		* Possible values are `"compact"` and `"inset"`.
		* Defaults to `"compact"`.
		*/
		this.expand = "compact";
	}
	valueChanged() {
		const { value, multiple } = this;
		if (!multiple && Array.isArray(value))
 /**
		* We do some processing on the `value` array so
		* that it looks more like an array when logged to
		* the console.
		* Example given ['a', 'b']
		* Default toString() behavior: a,b
		* Custom behavior: ['a', 'b']
		*/
		printIonWarning(`[ion-accordion-group] - An array of values was passed, but multiple is "false". This is incorrect usage and may result in unexpected behaviors. To dismiss this warning, pass a string to the "value" property when multiple="false".

  Value Passed: [${value.map((v) => `'${v}'`).join(", ")}]
`, this.el);
		/**
		* Do not use `value` here as that will be
		* not account for the adjustment we make above.
		*/
		this.ionValueChange.emit({ value: this.value });
	}
	async disabledChanged() {
		const { disabled } = this;
		const accordions = await this.getAccordions();
		for (const accordion of accordions) accordion.disabled = disabled;
	}
	async readonlyChanged() {
		const { readonly } = this;
		const accordions = await this.getAccordions();
		for (const accordion of accordions) accordion.readonly = readonly;
	}
	async onKeydown(ev) {
		const activeElement = document.activeElement;
		if (!activeElement) return;
		if (!activeElement.closest("ion-accordion [slot=\"header\"]")) return;
		const accordionEl = activeElement.tagName === "ION-ACCORDION" ? activeElement : activeElement.closest("ion-accordion");
		if (!accordionEl) return;
		if (accordionEl.closest("ion-accordion-group") !== this.el) return;
		const accordions = await this.getAccordions();
		const startingIndex = accordions.findIndex((a) => a === accordionEl);
		if (startingIndex === -1) return;
		let accordion;
		if (ev.key === "ArrowDown") accordion = this.findNextAccordion(accordions, startingIndex);
		else if (ev.key === "ArrowUp") accordion = this.findPreviousAccordion(accordions, startingIndex);
		else if (ev.key === "Home") accordion = accordions[0];
		else if (ev.key === "End") accordion = accordions[accordions.length - 1];
		if (accordion !== void 0 && accordion !== activeElement) accordion.focus();
	}
	async componentDidLoad() {
		if (this.disabled) this.disabledChanged();
		if (this.readonly) this.readonlyChanged();
		/**
		* When binding values in frameworks such as Angular
		* it is possible for the value to be set after the Web Component
		* initializes but before the value watcher is set up in Stencil.
		* As a result, the watcher callback may not be fired.
		* We work around this by manually calling the watcher
		* callback when the component has loaded and the watcher
		* is configured.
		*/
		this.valueChanged();
	}
	/**
	* Sets the value property and emits ionChange.
	* This should only be called when the user interacts
	* with the accordion and not for any update
	* to the value property. The exception is when
	* the app sets the value of a single-select
	* accordion group to an array.
	*/
	setValue(accordionValue) {
		const value = this.value = accordionValue;
		this.ionChange.emit({ value });
	}
	/**
	* This method is used to ensure that the value
	* of ion-accordion-group is being set in a valid
	* way. This method should only be called in
	* response to a user generated action.
	* @internal
	*/
	async requestAccordionToggle(accordionValue, accordionExpand) {
		const { multiple, value, readonly, disabled } = this;
		if (readonly || disabled) return;
		if (accordionExpand)
 /**
		* If group accepts multiple values
		* check to see if value is already in
		* in values array. If not, add it
		* to the array.
		*/
		if (multiple) {
			const groupValue = value ?? [];
			const processedValue = Array.isArray(groupValue) ? groupValue : [groupValue];
			if (processedValue.find((v) => v === accordionValue) === void 0 && accordionValue !== void 0) this.setValue([...processedValue, accordionValue]);
		} else this.setValue(accordionValue);
		else if (multiple) {
			const groupValue = value ?? [];
			const processedValue = Array.isArray(groupValue) ? groupValue : [groupValue];
			this.setValue(processedValue.filter((v) => v !== accordionValue));
		} else this.setValue(void 0);
	}
	findNextAccordion(accordions, startingIndex) {
		const nextAccordion = accordions[startingIndex + 1];
		if (nextAccordion === void 0) return accordions[0];
		return nextAccordion;
	}
	findPreviousAccordion(accordions, startingIndex) {
		const prevAccordion = accordions[startingIndex - 1];
		if (prevAccordion === void 0) return accordions[accordions.length - 1];
		return prevAccordion;
	}
	/**
	* @internal
	*/
	async getAccordions() {
		return Array.from(this.el.querySelectorAll(":scope > ion-accordion"));
	}
	render() {
		const { disabled, readonly, expand } = this;
		return h(Host, {
			key: "d1a79a93179474fbba66fcf11a92f4871dacc975",
			class: {
				[getIonMode(this)]: true,
				"accordion-group-disabled": disabled,
				"accordion-group-readonly": readonly,
				[`accordion-group-expand-${expand}`]: true
			},
			role: "presentation"
		}, h("slot", { key: "e6b8954b686d1fbb4fc92adb07fddc97a24b0a31" }));
	}
	get el() {
		return getElement(this);
	}
	static get watchers() {
		return {
			"value": [{ "valueChanged": 0 }],
			"disabled": [{ "disabledChanged": 0 }],
			"readonly": [{ "readonlyChanged": 0 }]
		};
	}
};
AccordionGroup.style = {
	ios: accordionGroupIosCss(),
	md: accordionGroupMdCss()
};
//#endregion
export { Accordion as ion_accordion, AccordionGroup as ion_accordion_group };
