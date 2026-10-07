import { $n as Output, Al as ɵɵinject, Dc as Injector, Dl as ɵɵdefineInjector, Do as ɵɵgetCurrentView, Ea as ɵɵcontentQuery, El as ɵɵdefineInjectable, En as ElementRef, Er as ViewContainerRef, Fc as NgZone, Fl as ɵɵresetView, Fn as Injectable, Hs as ɵɵtemplate, Il as ɵɵrestoreView, Lo as ɵɵinjectAttribute, Oo as ɵɵgetInheritedFactory, Qn as Optional, S as ViewChild, Wi as setClassMetadata, Xo as ɵɵloadQuery, Xt as APP_INITIALIZER, Yo as ɵɵlistener, Zo as ɵɵnextContext, _o as ɵɵelementContainer, a as ContentChildren, an as ChangeDetectionStrategy, as as ɵɵprojectionDef, bc as EventEmitter, bo as ɵɵelementEnd, ca as ɵɵInheritDefinitionFeature, cn as Component, da as ɵɵadvance, i as ContentChild, is as ɵɵprojection, kn as HostListener, mc as DOCUMENT, nn as Attribute, no as ɵɵdefineDirective, oo as ɵɵdirectiveInject, os as ɵɵproperty, pr as SkipSelf, qn as NgModule, r as ChangeDetectorRef, rl as forwardRef, ro as ɵɵdefineNgModule, sc as ɵɵviewQuery, sl as inject, to as ɵɵdefineComponent, tu as __decorate, ua as ɵɵProvidersFeature, vc as EnvironmentInjector, vo as ɵɵelementContainerEnd, vs as ɵɵqueryRefresh, wn as Directive, xo as ɵɵelementStart, ya as ɵɵattribute, yo as ɵɵelementContainerStart } from "./core-GC7q_RMC.js";
import { ct as Router, j as ActivatedRoute } from "./router-X9GUwMbM.js";
import { D as MaxValidator, M as NG_VALUE_ACCESSOR, j as NG_VALIDATORS, k as MinValidator } from "./forms-C4aYpz1q.js";
import { S as Platform, _ as IonModalToken, a as RouterLinkWithHrefDelegateDirective$1, b as ConfigToken, c as ValueAccessor, ct as DomController, d as IonRouterOutlet$1, f as provideComponentInputBinding, g as AngularDelegate, i as RouterLinkDelegateDirective$1, l as setIonicClasses, m as IonModal$1, n as OverlayBaseController, o as IonNav$1, p as IonPopover$1, r as IonTabs$1, s as IonBackButton$1, st as MenuController$1, t as IonicRouteStrategy, u as raf, v as NavParams, x as NavController, y as Config } from "./routing-XRj5byrT.js";
import { C as CommonModule, Nt as Location, V as NgIf, Z as NgTemplateOutlet } from "./common-Cwvxu5fs.js";
import { i as bootstrapLazy } from "./index-D9OR05yj-DaZatFja.js";
import "./helpers-B54ynME_-DqEtrk7h.js";
import { t as createAnimation } from "./animation-CFd8Olt3-DRQQoUbA.js";
import { a as getIonPageElement } from "./index-B8iieOdw-COjlFH7K.js";
import { t as iosTransitionAnimation } from "./ios.transition-CRfGj4Mo-CTBTSYhT.js";
import { t as mdTransitionAnimation } from "./md.transition-wqThNy_C-D5VWsii5.js";
import { t as getTimeGivenProgression } from "./cubic-bezier-hHmYLOfE-CQJriwBy.js";
import "./gesture-controller-B_gJaBk0-B8pQAih_.js";
import { t as createGesture } from "./index-BmLuEdV7-B8ieQZPS.js";
import { i as isPlatform, n as getPlatforms, r as initialize } from "./ionic-global-B-G43ddm-RjWwRBWx.js";
import { t as IonicSafeString } from "./index-D4ZMZz_3-DUlnkJK_.js";
import { t as setupConfig } from "./config-DWCzVL3Y-CxfCWjLC.js";
import { i as openURL } from "./theme-byZM6qHV-CVcL0HyM.js";
import "./framework-delegate-DeT5pmPB-7seH0Oar.js";
import { E as toastController, _ as modalController, a as alertController, g as loadingController, i as actionSheetController, y as popoverController } from "./overlays-BQnV0HAU-EqXWi7sA.js";
import { t as menuController } from "./index-B9jhwvmO-EtbFIjAW.js";
//#region node_modules/@ionic/angular/dist/lazy/directives/control-value-accessors/boolean-value-accessor.js
var BooleanValueAccessorDirective = class BooleanValueAccessorDirective extends ValueAccessor {
	constructor(injector, el) {
		super(injector, el);
	}
	writeValue(value) {
		this.elementRef.nativeElement.checked = this.lastValue = value;
		setIonicClasses(this.elementRef);
	}
	_handleIonChange(ev) {
		const el = ev.target;
		this.handleValueChange(el, el.checked);
	}
	/** @nocollapse */
	static ɵfac = function BooleanValueAccessorDirective_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || BooleanValueAccessorDirective)(ɵɵdirectiveInject(Injector), ɵɵdirectiveInject(ElementRef));
	};
	/** @nocollapse */
	static ɵdir = /* @__PURE__ */ ɵɵdefineDirective({
		type: BooleanValueAccessorDirective,
		selectors: [["ion-checkbox"], ["ion-toggle"]],
		hostBindings: function BooleanValueAccessorDirective_HostBindings(rf, ctx) {
			if (rf & 1) ɵɵlistener("ionChange", function BooleanValueAccessorDirective_ionChange_HostBindingHandler($event) {
				return ctx._handleIonChange($event);
			});
		},
		standalone: false,
		features: [ɵɵProvidersFeature([{
			provide: NG_VALUE_ACCESSOR,
			useExisting: BooleanValueAccessorDirective,
			multi: true
		}]), ɵɵInheritDefinitionFeature]
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BooleanValueAccessorDirective, [{
		type: Directive,
		args: [{
			standalone: false,
			selector: "ion-checkbox,ion-toggle",
			providers: [{
				provide: NG_VALUE_ACCESSOR,
				useExisting: BooleanValueAccessorDirective,
				multi: true
			}]
		}]
	}], () => [{ type: Injector }, { type: ElementRef }], { _handleIonChange: [{
		type: HostListener,
		args: ["ionChange", ["$event"]]
	}] });
})();
//#endregion
//#region node_modules/@ionic/angular/dist/lazy/directives/control-value-accessors/numeric-value-accessor.js
var NumericValueAccessorDirective = class NumericValueAccessorDirective extends ValueAccessor {
	el;
	constructor(injector, el) {
		super(injector, el);
		this.el = el;
	}
	handleInputEvent(ev) {
		const el = ev.target;
		this.handleValueChange(el, el.value);
	}
	registerOnChange(fn) {
		if (this.el.nativeElement.tagName === "ION-INPUT" || this.el.nativeElement.tagName === "ION-INPUT-OTP") super.registerOnChange((value) => {
			fn(value === "" ? null : parseFloat(value));
		});
		else super.registerOnChange(fn);
	}
	/** @nocollapse */
	static ɵfac = function NumericValueAccessorDirective_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || NumericValueAccessorDirective)(ɵɵdirectiveInject(Injector), ɵɵdirectiveInject(ElementRef));
	};
	/** @nocollapse */
	static ɵdir = /* @__PURE__ */ ɵɵdefineDirective({
		type: NumericValueAccessorDirective,
		selectors: [
			[
				"ion-input",
				"type",
				"number"
			],
			[
				"ion-input-otp",
				3,
				"type",
				"text"
			],
			["ion-range"]
		],
		hostBindings: function NumericValueAccessorDirective_HostBindings(rf, ctx) {
			if (rf & 1) ɵɵlistener("ionInput", function NumericValueAccessorDirective_ionInput_HostBindingHandler($event) {
				return ctx.handleInputEvent($event);
			});
		},
		standalone: false,
		features: [ɵɵProvidersFeature([{
			provide: NG_VALUE_ACCESSOR,
			useExisting: NumericValueAccessorDirective,
			multi: true
		}]), ɵɵInheritDefinitionFeature]
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NumericValueAccessorDirective, [{
		type: Directive,
		args: [{
			standalone: false,
			selector: "ion-input[type=number],ion-input-otp:not([type=text]),ion-range",
			providers: [{
				provide: NG_VALUE_ACCESSOR,
				useExisting: NumericValueAccessorDirective,
				multi: true
			}]
		}]
	}], () => [{ type: Injector }, { type: ElementRef }], { handleInputEvent: [{
		type: HostListener,
		args: ["ionInput", ["$event"]]
	}] });
})();
//#endregion
//#region node_modules/@ionic/angular/dist/lazy/directives/control-value-accessors/select-value-accessor.js
var SelectValueAccessorDirective = class SelectValueAccessorDirective extends ValueAccessor {
	constructor(injector, el) {
		super(injector, el);
	}
	_handleChangeEvent(ev) {
		const el = ev.target;
		this.handleValueChange(el, el.value);
	}
	/** @nocollapse */
	static ɵfac = function SelectValueAccessorDirective_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || SelectValueAccessorDirective)(ɵɵdirectiveInject(Injector), ɵɵdirectiveInject(ElementRef));
	};
	/** @nocollapse */
	static ɵdir = /* @__PURE__ */ ɵɵdefineDirective({
		type: SelectValueAccessorDirective,
		selectors: [
			["ion-select"],
			["ion-radio-group"],
			["ion-segment"],
			["ion-datetime"]
		],
		hostBindings: function SelectValueAccessorDirective_HostBindings(rf, ctx) {
			if (rf & 1) ɵɵlistener("ionChange", function SelectValueAccessorDirective_ionChange_HostBindingHandler($event) {
				return ctx._handleChangeEvent($event);
			});
		},
		standalone: false,
		features: [ɵɵProvidersFeature([{
			provide: NG_VALUE_ACCESSOR,
			useExisting: SelectValueAccessorDirective,
			multi: true
		}]), ɵɵInheritDefinitionFeature]
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SelectValueAccessorDirective, [{
		type: Directive,
		args: [{
			standalone: false,
			selector: "ion-select, ion-radio-group, ion-segment, ion-datetime",
			providers: [{
				provide: NG_VALUE_ACCESSOR,
				useExisting: SelectValueAccessorDirective,
				multi: true
			}]
		}]
	}], () => [{ type: Injector }, { type: ElementRef }], { _handleChangeEvent: [{
		type: HostListener,
		args: ["ionChange", ["$event"]]
	}] });
})();
//#endregion
//#region node_modules/@ionic/angular/dist/lazy/directives/control-value-accessors/text-value-accessor.js
var TextValueAccessorDirective = class TextValueAccessorDirective extends ValueAccessor {
	constructor(injector, el) {
		super(injector, el);
	}
	_handleInputEvent(ev) {
		const el = ev.target;
		this.handleValueChange(el, el.value);
	}
	/** @nocollapse */
	static ɵfac = function TextValueAccessorDirective_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || TextValueAccessorDirective)(ɵɵdirectiveInject(Injector), ɵɵdirectiveInject(ElementRef));
	};
	/** @nocollapse */
	static ɵdir = /* @__PURE__ */ ɵɵdefineDirective({
		type: TextValueAccessorDirective,
		selectors: [
			[
				"ion-input",
				3,
				"type",
				"number"
			],
			[
				"ion-input-otp",
				"type",
				"text"
			],
			["ion-textarea"],
			["ion-searchbar"]
		],
		hostBindings: function TextValueAccessorDirective_HostBindings(rf, ctx) {
			if (rf & 1) ɵɵlistener("ionInput", function TextValueAccessorDirective_ionInput_HostBindingHandler($event) {
				return ctx._handleInputEvent($event);
			});
		},
		standalone: false,
		features: [ɵɵProvidersFeature([{
			provide: NG_VALUE_ACCESSOR,
			useExisting: TextValueAccessorDirective,
			multi: true
		}]), ɵɵInheritDefinitionFeature]
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TextValueAccessorDirective, [{
		type: Directive,
		args: [{
			standalone: false,
			selector: "ion-input:not([type=number]),ion-input-otp[type=text],ion-textarea,ion-searchbar",
			providers: [{
				provide: NG_VALUE_ACCESSOR,
				useExisting: TextValueAccessorDirective,
				multi: true
			}]
		}]
	}], () => [{ type: Injector }, { type: ElementRef }], { _handleInputEvent: [{
		type: HostListener,
		args: ["ionInput", ["$event"]]
	}] });
})();
//#endregion
//#region node_modules/@ionic/angular/dist/lazy/directives/angular-component-lib/utils.js
var proxyInputs = (Cmp, inputs) => {
	const Prototype = Cmp.prototype;
	inputs.forEach((item) => {
		Object.defineProperty(Prototype, item, {
			get() {
				return this.el[item];
			},
			set(val) {
				this.z.runOutsideAngular(() => this.el[item] = val);
			},
			/**
			* In the event that proxyInputs is called
			* multiple times re-defining these inputs
			* will cause an error to be thrown. As a result
			* we set configurable: true to indicate these
			* properties can be changed.
			*/
			configurable: true
		});
	});
};
var proxyMethods = (Cmp, methods) => {
	const Prototype = Cmp.prototype;
	methods.forEach((methodName) => {
		Prototype[methodName] = function() {
			const args = arguments;
			return this.z.runOutsideAngular(() => this.el[methodName].apply(this.el, args));
		};
	});
};
function ProxyCmp(opts) {
	const decorator = function(cls) {
		const { defineCustomElementFn, inputs, methods } = opts;
		if (defineCustomElementFn !== void 0) defineCustomElementFn();
		if (inputs) proxyInputs(cls, inputs);
		if (methods) proxyMethods(cls, methods);
		return cls;
	};
	return decorator;
}
//#endregion
//#region node_modules/@ionic/angular/dist/lazy/directives/proxies.js
var _c0$4 = ["*"];
var IonAccordion = class IonAccordion {
	z;
	el;
	constructor(c, r, z) {
		this.z = z;
		c.detach();
		this.el = r.nativeElement;
	}
	/** @nocollapse */
	static ɵfac = function IonAccordion_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || IonAccordion)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
	};
	/** @nocollapse */
	static ɵcmp = /* @__PURE__ */ ɵɵdefineComponent({
		type: IonAccordion,
		selectors: [["ion-accordion"]],
		inputs: {
			disabled: "disabled",
			mode: "mode",
			readonly: "readonly",
			toggleIcon: "toggleIcon",
			toggleIconSlot: "toggleIconSlot",
			value: "value"
		},
		standalone: false,
		ngContentSelectors: _c0$4,
		decls: 1,
		vars: 0,
		template: function IonAccordion_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵprojectionDef();
				ɵɵprojection(0);
			}
		},
		encapsulation: 2
	});
};
IonAccordion = __decorate([ProxyCmp({ inputs: [
	"disabled",
	"mode",
	"readonly",
	"toggleIcon",
	"toggleIconSlot",
	"value"
] })], IonAccordion);
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonAccordion, [{
		type: Component,
		args: [{
			selector: "ion-accordion",
			changeDetection: ChangeDetectionStrategy.OnPush,
			template: "<ng-content></ng-content>",
			inputs: [
				"disabled",
				"mode",
				"readonly",
				"toggleIcon",
				"toggleIconSlot",
				"value"
			],
			standalone: false
		}]
	}], () => [
		{ type: ChangeDetectorRef },
		{ type: ElementRef },
		{ type: NgZone }
	], null);
})();
var IonAccordionGroup = class IonAccordionGroup {
	z;
	el;
	ionChange = new EventEmitter();
	constructor(c, r, z) {
		this.z = z;
		c.detach();
		this.el = r.nativeElement;
	}
	/** @nocollapse */
	static ɵfac = function IonAccordionGroup_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || IonAccordionGroup)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
	};
	/** @nocollapse */
	static ɵcmp = /* @__PURE__ */ ɵɵdefineComponent({
		type: IonAccordionGroup,
		selectors: [["ion-accordion-group"]],
		inputs: {
			animated: "animated",
			disabled: "disabled",
			expand: "expand",
			mode: "mode",
			multiple: "multiple",
			readonly: "readonly",
			value: "value"
		},
		outputs: { ionChange: "ionChange" },
		standalone: false,
		ngContentSelectors: _c0$4,
		decls: 1,
		vars: 0,
		template: function IonAccordionGroup_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵprojectionDef();
				ɵɵprojection(0);
			}
		},
		encapsulation: 2
	});
};
IonAccordionGroup = __decorate([ProxyCmp({ inputs: [
	"animated",
	"disabled",
	"expand",
	"mode",
	"multiple",
	"readonly",
	"value"
] })], IonAccordionGroup);
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonAccordionGroup, [{
		type: Component,
		args: [{
			selector: "ion-accordion-group",
			changeDetection: ChangeDetectionStrategy.OnPush,
			template: "<ng-content></ng-content>",
			inputs: [
				"animated",
				"disabled",
				"expand",
				"mode",
				"multiple",
				"readonly",
				"value"
			],
			outputs: ["ionChange"],
			standalone: false
		}]
	}], () => [
		{ type: ChangeDetectorRef },
		{ type: ElementRef },
		{ type: NgZone }
	], { ionChange: [{ type: Output }] });
})();
var IonActionSheet = class IonActionSheet {
	z;
	el;
	ionActionSheetDidPresent = new EventEmitter();
	ionActionSheetWillPresent = new EventEmitter();
	ionActionSheetWillDismiss = new EventEmitter();
	ionActionSheetDidDismiss = new EventEmitter();
	didPresent = new EventEmitter();
	willPresent = new EventEmitter();
	willDismiss = new EventEmitter();
	didDismiss = new EventEmitter();
	constructor(c, r, z) {
		this.z = z;
		c.detach();
		this.el = r.nativeElement;
	}
	/** @nocollapse */
	static ɵfac = function IonActionSheet_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || IonActionSheet)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
	};
	/** @nocollapse */
	static ɵcmp = /* @__PURE__ */ ɵɵdefineComponent({
		type: IonActionSheet,
		selectors: [["ion-action-sheet"]],
		inputs: {
			animated: "animated",
			backdropDismiss: "backdropDismiss",
			buttons: "buttons",
			cssClass: "cssClass",
			enterAnimation: "enterAnimation",
			header: "header",
			htmlAttributes: "htmlAttributes",
			isOpen: "isOpen",
			keyboardClose: "keyboardClose",
			leaveAnimation: "leaveAnimation",
			mode: "mode",
			subHeader: "subHeader",
			translucent: "translucent",
			trigger: "trigger"
		},
		outputs: {
			ionActionSheetDidPresent: "ionActionSheetDidPresent",
			ionActionSheetWillPresent: "ionActionSheetWillPresent",
			ionActionSheetWillDismiss: "ionActionSheetWillDismiss",
			ionActionSheetDidDismiss: "ionActionSheetDidDismiss",
			didPresent: "didPresent",
			willPresent: "willPresent",
			willDismiss: "willDismiss",
			didDismiss: "didDismiss"
		},
		standalone: false,
		ngContentSelectors: _c0$4,
		decls: 1,
		vars: 0,
		template: function IonActionSheet_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵprojectionDef();
				ɵɵprojection(0);
			}
		},
		encapsulation: 2
	});
};
IonActionSheet = __decorate([ProxyCmp({
	inputs: [
		"animated",
		"backdropDismiss",
		"buttons",
		"cssClass",
		"enterAnimation",
		"header",
		"htmlAttributes",
		"isOpen",
		"keyboardClose",
		"leaveAnimation",
		"mode",
		"subHeader",
		"translucent",
		"trigger"
	],
	methods: [
		"present",
		"dismiss",
		"onDidDismiss",
		"onWillDismiss"
	]
})], IonActionSheet);
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonActionSheet, [{
		type: Component,
		args: [{
			selector: "ion-action-sheet",
			changeDetection: ChangeDetectionStrategy.OnPush,
			template: "<ng-content></ng-content>",
			inputs: [
				"animated",
				"backdropDismiss",
				"buttons",
				"cssClass",
				"enterAnimation",
				"header",
				"htmlAttributes",
				"isOpen",
				"keyboardClose",
				"leaveAnimation",
				"mode",
				"subHeader",
				"translucent",
				"trigger"
			],
			outputs: [
				"ionActionSheetDidPresent",
				"ionActionSheetWillPresent",
				"ionActionSheetWillDismiss",
				"ionActionSheetDidDismiss",
				"didPresent",
				"willPresent",
				"willDismiss",
				"didDismiss"
			],
			standalone: false
		}]
	}], () => [
		{ type: ChangeDetectorRef },
		{ type: ElementRef },
		{ type: NgZone }
	], {
		ionActionSheetDidPresent: [{ type: Output }],
		ionActionSheetWillPresent: [{ type: Output }],
		ionActionSheetWillDismiss: [{ type: Output }],
		ionActionSheetDidDismiss: [{ type: Output }],
		didPresent: [{ type: Output }],
		willPresent: [{ type: Output }],
		willDismiss: [{ type: Output }],
		didDismiss: [{ type: Output }]
	});
})();
var IonAlert = class IonAlert {
	z;
	el;
	ionAlertDidPresent = new EventEmitter();
	ionAlertWillPresent = new EventEmitter();
	ionAlertWillDismiss = new EventEmitter();
	ionAlertDidDismiss = new EventEmitter();
	didPresent = new EventEmitter();
	willPresent = new EventEmitter();
	willDismiss = new EventEmitter();
	didDismiss = new EventEmitter();
	constructor(c, r, z) {
		this.z = z;
		c.detach();
		this.el = r.nativeElement;
	}
	/** @nocollapse */
	static ɵfac = function IonAlert_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || IonAlert)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
	};
	/** @nocollapse */
	static ɵcmp = /* @__PURE__ */ ɵɵdefineComponent({
		type: IonAlert,
		selectors: [["ion-alert"]],
		inputs: {
			animated: "animated",
			backdropDismiss: "backdropDismiss",
			buttons: "buttons",
			cssClass: "cssClass",
			enterAnimation: "enterAnimation",
			header: "header",
			htmlAttributes: "htmlAttributes",
			inputs: "inputs",
			isOpen: "isOpen",
			keyboardClose: "keyboardClose",
			leaveAnimation: "leaveAnimation",
			message: "message",
			mode: "mode",
			subHeader: "subHeader",
			translucent: "translucent",
			trigger: "trigger"
		},
		outputs: {
			ionAlertDidPresent: "ionAlertDidPresent",
			ionAlertWillPresent: "ionAlertWillPresent",
			ionAlertWillDismiss: "ionAlertWillDismiss",
			ionAlertDidDismiss: "ionAlertDidDismiss",
			didPresent: "didPresent",
			willPresent: "willPresent",
			willDismiss: "willDismiss",
			didDismiss: "didDismiss"
		},
		standalone: false,
		ngContentSelectors: _c0$4,
		decls: 1,
		vars: 0,
		template: function IonAlert_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵprojectionDef();
				ɵɵprojection(0);
			}
		},
		encapsulation: 2
	});
};
IonAlert = __decorate([ProxyCmp({
	inputs: [
		"animated",
		"backdropDismiss",
		"buttons",
		"cssClass",
		"enterAnimation",
		"header",
		"htmlAttributes",
		"inputs",
		"isOpen",
		"keyboardClose",
		"leaveAnimation",
		"message",
		"mode",
		"subHeader",
		"translucent",
		"trigger"
	],
	methods: [
		"present",
		"dismiss",
		"onDidDismiss",
		"onWillDismiss"
	]
})], IonAlert);
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonAlert, [{
		type: Component,
		args: [{
			selector: "ion-alert",
			changeDetection: ChangeDetectionStrategy.OnPush,
			template: "<ng-content></ng-content>",
			inputs: [
				"animated",
				"backdropDismiss",
				"buttons",
				"cssClass",
				"enterAnimation",
				"header",
				"htmlAttributes",
				"inputs",
				"isOpen",
				"keyboardClose",
				"leaveAnimation",
				"message",
				"mode",
				"subHeader",
				"translucent",
				"trigger"
			],
			outputs: [
				"ionAlertDidPresent",
				"ionAlertWillPresent",
				"ionAlertWillDismiss",
				"ionAlertDidDismiss",
				"didPresent",
				"willPresent",
				"willDismiss",
				"didDismiss"
			],
			standalone: false
		}]
	}], () => [
		{ type: ChangeDetectorRef },
		{ type: ElementRef },
		{ type: NgZone }
	], {
		ionAlertDidPresent: [{ type: Output }],
		ionAlertWillPresent: [{ type: Output }],
		ionAlertWillDismiss: [{ type: Output }],
		ionAlertDidDismiss: [{ type: Output }],
		didPresent: [{ type: Output }],
		willPresent: [{ type: Output }],
		willDismiss: [{ type: Output }],
		didDismiss: [{ type: Output }]
	});
})();
var IonApp = class IonApp {
	z;
	el;
	constructor(c, r, z) {
		this.z = z;
		c.detach();
		this.el = r.nativeElement;
	}
	/** @nocollapse */
	static ɵfac = function IonApp_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || IonApp)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
	};
	/** @nocollapse */
	static ɵcmp = /* @__PURE__ */ ɵɵdefineComponent({
		type: IonApp,
		selectors: [["ion-app"]],
		standalone: false,
		ngContentSelectors: _c0$4,
		decls: 1,
		vars: 0,
		template: function IonApp_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵprojectionDef();
				ɵɵprojection(0);
			}
		},
		encapsulation: 2
	});
};
IonApp = __decorate([ProxyCmp({ methods: ["setFocus"] })], IonApp);
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonApp, [{
		type: Component,
		args: [{
			selector: "ion-app",
			changeDetection: ChangeDetectionStrategy.OnPush,
			template: "<ng-content></ng-content>",
			inputs: [],
			standalone: false
		}]
	}], () => [
		{ type: ChangeDetectorRef },
		{ type: ElementRef },
		{ type: NgZone }
	], null);
})();
var IonAvatar = class IonAvatar {
	z;
	el;
	constructor(c, r, z) {
		this.z = z;
		c.detach();
		this.el = r.nativeElement;
	}
	/** @nocollapse */
	static ɵfac = function IonAvatar_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || IonAvatar)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
	};
	/** @nocollapse */
	static ɵcmp = /* @__PURE__ */ ɵɵdefineComponent({
		type: IonAvatar,
		selectors: [["ion-avatar"]],
		standalone: false,
		ngContentSelectors: _c0$4,
		decls: 1,
		vars: 0,
		template: function IonAvatar_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵprojectionDef();
				ɵɵprojection(0);
			}
		},
		encapsulation: 2
	});
};
IonAvatar = __decorate([ProxyCmp({})], IonAvatar);
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonAvatar, [{
		type: Component,
		args: [{
			selector: "ion-avatar",
			changeDetection: ChangeDetectionStrategy.OnPush,
			template: "<ng-content></ng-content>",
			inputs: [],
			standalone: false
		}]
	}], () => [
		{ type: ChangeDetectorRef },
		{ type: ElementRef },
		{ type: NgZone }
	], null);
})();
var IonBackdrop = class IonBackdrop {
	z;
	el;
	ionBackdropTap = new EventEmitter();
	constructor(c, r, z) {
		this.z = z;
		c.detach();
		this.el = r.nativeElement;
	}
	/** @nocollapse */
	static ɵfac = function IonBackdrop_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || IonBackdrop)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
	};
	/** @nocollapse */
	static ɵcmp = /* @__PURE__ */ ɵɵdefineComponent({
		type: IonBackdrop,
		selectors: [["ion-backdrop"]],
		inputs: {
			stopPropagation: "stopPropagation",
			tappable: "tappable",
			visible: "visible"
		},
		outputs: { ionBackdropTap: "ionBackdropTap" },
		standalone: false,
		ngContentSelectors: _c0$4,
		decls: 1,
		vars: 0,
		template: function IonBackdrop_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵprojectionDef();
				ɵɵprojection(0);
			}
		},
		encapsulation: 2
	});
};
IonBackdrop = __decorate([ProxyCmp({ inputs: [
	"stopPropagation",
	"tappable",
	"visible"
] })], IonBackdrop);
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonBackdrop, [{
		type: Component,
		args: [{
			selector: "ion-backdrop",
			changeDetection: ChangeDetectionStrategy.OnPush,
			template: "<ng-content></ng-content>",
			inputs: [
				"stopPropagation",
				"tappable",
				"visible"
			],
			outputs: ["ionBackdropTap"],
			standalone: false
		}]
	}], () => [
		{ type: ChangeDetectorRef },
		{ type: ElementRef },
		{ type: NgZone }
	], { ionBackdropTap: [{ type: Output }] });
})();
var IonBadge = class IonBadge {
	z;
	el;
	constructor(c, r, z) {
		this.z = z;
		c.detach();
		this.el = r.nativeElement;
	}
	/** @nocollapse */
	static ɵfac = function IonBadge_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || IonBadge)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
	};
	/** @nocollapse */
	static ɵcmp = /* @__PURE__ */ ɵɵdefineComponent({
		type: IonBadge,
		selectors: [["ion-badge"]],
		inputs: {
			color: "color",
			mode: "mode"
		},
		standalone: false,
		ngContentSelectors: _c0$4,
		decls: 1,
		vars: 0,
		template: function IonBadge_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵprojectionDef();
				ɵɵprojection(0);
			}
		},
		encapsulation: 2
	});
};
IonBadge = __decorate([ProxyCmp({ inputs: ["color", "mode"] })], IonBadge);
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonBadge, [{
		type: Component,
		args: [{
			selector: "ion-badge",
			changeDetection: ChangeDetectionStrategy.OnPush,
			template: "<ng-content></ng-content>",
			inputs: ["color", "mode"],
			standalone: false
		}]
	}], () => [
		{ type: ChangeDetectorRef },
		{ type: ElementRef },
		{ type: NgZone }
	], null);
})();
var IonBreadcrumb = class IonBreadcrumb {
	z;
	el;
	ionFocus = new EventEmitter();
	ionBlur = new EventEmitter();
	constructor(c, r, z) {
		this.z = z;
		c.detach();
		this.el = r.nativeElement;
	}
	/** @nocollapse */
	static ɵfac = function IonBreadcrumb_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || IonBreadcrumb)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
	};
	/** @nocollapse */
	static ɵcmp = /* @__PURE__ */ ɵɵdefineComponent({
		type: IonBreadcrumb,
		selectors: [["ion-breadcrumb"]],
		inputs: {
			active: "active",
			color: "color",
			disabled: "disabled",
			download: "download",
			href: "href",
			mode: "mode",
			rel: "rel",
			routerAnimation: "routerAnimation",
			routerDirection: "routerDirection",
			separator: "separator",
			target: "target"
		},
		outputs: {
			ionFocus: "ionFocus",
			ionBlur: "ionBlur"
		},
		standalone: false,
		ngContentSelectors: _c0$4,
		decls: 1,
		vars: 0,
		template: function IonBreadcrumb_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵprojectionDef();
				ɵɵprojection(0);
			}
		},
		encapsulation: 2
	});
};
IonBreadcrumb = __decorate([ProxyCmp({ inputs: [
	"active",
	"color",
	"disabled",
	"download",
	"href",
	"mode",
	"rel",
	"routerAnimation",
	"routerDirection",
	"separator",
	"target"
] })], IonBreadcrumb);
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonBreadcrumb, [{
		type: Component,
		args: [{
			selector: "ion-breadcrumb",
			changeDetection: ChangeDetectionStrategy.OnPush,
			template: "<ng-content></ng-content>",
			inputs: [
				"active",
				"color",
				"disabled",
				"download",
				"href",
				"mode",
				"rel",
				"routerAnimation",
				"routerDirection",
				"separator",
				"target"
			],
			outputs: ["ionFocus", "ionBlur"],
			standalone: false
		}]
	}], () => [
		{ type: ChangeDetectorRef },
		{ type: ElementRef },
		{ type: NgZone }
	], {
		ionFocus: [{ type: Output }],
		ionBlur: [{ type: Output }]
	});
})();
var IonBreadcrumbs = class IonBreadcrumbs {
	z;
	el;
	ionCollapsedClick = new EventEmitter();
	constructor(c, r, z) {
		this.z = z;
		c.detach();
		this.el = r.nativeElement;
	}
	/** @nocollapse */
	static ɵfac = function IonBreadcrumbs_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || IonBreadcrumbs)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
	};
	/** @nocollapse */
	static ɵcmp = /* @__PURE__ */ ɵɵdefineComponent({
		type: IonBreadcrumbs,
		selectors: [["ion-breadcrumbs"]],
		inputs: {
			color: "color",
			itemsAfterCollapse: "itemsAfterCollapse",
			itemsBeforeCollapse: "itemsBeforeCollapse",
			maxItems: "maxItems",
			mode: "mode"
		},
		outputs: { ionCollapsedClick: "ionCollapsedClick" },
		standalone: false,
		ngContentSelectors: _c0$4,
		decls: 1,
		vars: 0,
		template: function IonBreadcrumbs_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵprojectionDef();
				ɵɵprojection(0);
			}
		},
		encapsulation: 2
	});
};
IonBreadcrumbs = __decorate([ProxyCmp({ inputs: [
	"color",
	"itemsAfterCollapse",
	"itemsBeforeCollapse",
	"maxItems",
	"mode"
] })], IonBreadcrumbs);
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonBreadcrumbs, [{
		type: Component,
		args: [{
			selector: "ion-breadcrumbs",
			changeDetection: ChangeDetectionStrategy.OnPush,
			template: "<ng-content></ng-content>",
			inputs: [
				"color",
				"itemsAfterCollapse",
				"itemsBeforeCollapse",
				"maxItems",
				"mode"
			],
			outputs: ["ionCollapsedClick"],
			standalone: false
		}]
	}], () => [
		{ type: ChangeDetectorRef },
		{ type: ElementRef },
		{ type: NgZone }
	], { ionCollapsedClick: [{ type: Output }] });
})();
var IonButton = class IonButton {
	z;
	el;
	ionFocus = new EventEmitter();
	ionBlur = new EventEmitter();
	constructor(c, r, z) {
		this.z = z;
		c.detach();
		this.el = r.nativeElement;
	}
	/** @nocollapse */
	static ɵfac = function IonButton_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || IonButton)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
	};
	/** @nocollapse */
	static ɵcmp = /* @__PURE__ */ ɵɵdefineComponent({
		type: IonButton,
		selectors: [["ion-button"]],
		inputs: {
			buttonType: "buttonType",
			color: "color",
			disabled: "disabled",
			download: "download",
			expand: "expand",
			fill: "fill",
			form: "form",
			href: "href",
			mode: "mode",
			rel: "rel",
			routerAnimation: "routerAnimation",
			routerDirection: "routerDirection",
			shape: "shape",
			size: "size",
			strong: "strong",
			target: "target",
			type: "type"
		},
		outputs: {
			ionFocus: "ionFocus",
			ionBlur: "ionBlur"
		},
		standalone: false,
		ngContentSelectors: _c0$4,
		decls: 1,
		vars: 0,
		template: function IonButton_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵprojectionDef();
				ɵɵprojection(0);
			}
		},
		encapsulation: 2
	});
};
IonButton = __decorate([ProxyCmp({ inputs: [
	"buttonType",
	"color",
	"disabled",
	"download",
	"expand",
	"fill",
	"form",
	"href",
	"mode",
	"rel",
	"routerAnimation",
	"routerDirection",
	"shape",
	"size",
	"strong",
	"target",
	"type"
] })], IonButton);
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonButton, [{
		type: Component,
		args: [{
			selector: "ion-button",
			changeDetection: ChangeDetectionStrategy.OnPush,
			template: "<ng-content></ng-content>",
			inputs: [
				"buttonType",
				"color",
				"disabled",
				"download",
				"expand",
				"fill",
				"form",
				"href",
				"mode",
				"rel",
				"routerAnimation",
				"routerDirection",
				"shape",
				"size",
				"strong",
				"target",
				"type"
			],
			outputs: ["ionFocus", "ionBlur"],
			standalone: false
		}]
	}], () => [
		{ type: ChangeDetectorRef },
		{ type: ElementRef },
		{ type: NgZone }
	], {
		ionFocus: [{ type: Output }],
		ionBlur: [{ type: Output }]
	});
})();
var IonButtons = class IonButtons {
	z;
	el;
	constructor(c, r, z) {
		this.z = z;
		c.detach();
		this.el = r.nativeElement;
	}
	/** @nocollapse */
	static ɵfac = function IonButtons_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || IonButtons)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
	};
	/** @nocollapse */
	static ɵcmp = /* @__PURE__ */ ɵɵdefineComponent({
		type: IonButtons,
		selectors: [["ion-buttons"]],
		inputs: { collapse: "collapse" },
		standalone: false,
		ngContentSelectors: _c0$4,
		decls: 1,
		vars: 0,
		template: function IonButtons_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵprojectionDef();
				ɵɵprojection(0);
			}
		},
		encapsulation: 2
	});
};
IonButtons = __decorate([ProxyCmp({ inputs: ["collapse"] })], IonButtons);
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonButtons, [{
		type: Component,
		args: [{
			selector: "ion-buttons",
			changeDetection: ChangeDetectionStrategy.OnPush,
			template: "<ng-content></ng-content>",
			inputs: ["collapse"],
			standalone: false
		}]
	}], () => [
		{ type: ChangeDetectorRef },
		{ type: ElementRef },
		{ type: NgZone }
	], null);
})();
var IonCard = class IonCard {
	z;
	el;
	constructor(c, r, z) {
		this.z = z;
		c.detach();
		this.el = r.nativeElement;
	}
	/** @nocollapse */
	static ɵfac = function IonCard_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || IonCard)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
	};
	/** @nocollapse */
	static ɵcmp = /* @__PURE__ */ ɵɵdefineComponent({
		type: IonCard,
		selectors: [["ion-card"]],
		inputs: {
			button: "button",
			color: "color",
			disabled: "disabled",
			download: "download",
			href: "href",
			mode: "mode",
			rel: "rel",
			routerAnimation: "routerAnimation",
			routerDirection: "routerDirection",
			target: "target",
			type: "type"
		},
		standalone: false,
		ngContentSelectors: _c0$4,
		decls: 1,
		vars: 0,
		template: function IonCard_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵprojectionDef();
				ɵɵprojection(0);
			}
		},
		encapsulation: 2
	});
};
IonCard = __decorate([ProxyCmp({ inputs: [
	"button",
	"color",
	"disabled",
	"download",
	"href",
	"mode",
	"rel",
	"routerAnimation",
	"routerDirection",
	"target",
	"type"
] })], IonCard);
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonCard, [{
		type: Component,
		args: [{
			selector: "ion-card",
			changeDetection: ChangeDetectionStrategy.OnPush,
			template: "<ng-content></ng-content>",
			inputs: [
				"button",
				"color",
				"disabled",
				"download",
				"href",
				"mode",
				"rel",
				"routerAnimation",
				"routerDirection",
				"target",
				"type"
			],
			standalone: false
		}]
	}], () => [
		{ type: ChangeDetectorRef },
		{ type: ElementRef },
		{ type: NgZone }
	], null);
})();
var IonCardContent = class IonCardContent {
	z;
	el;
	constructor(c, r, z) {
		this.z = z;
		c.detach();
		this.el = r.nativeElement;
	}
	/** @nocollapse */
	static ɵfac = function IonCardContent_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || IonCardContent)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
	};
	/** @nocollapse */
	static ɵcmp = /* @__PURE__ */ ɵɵdefineComponent({
		type: IonCardContent,
		selectors: [["ion-card-content"]],
		inputs: { mode: "mode" },
		standalone: false,
		ngContentSelectors: _c0$4,
		decls: 1,
		vars: 0,
		template: function IonCardContent_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵprojectionDef();
				ɵɵprojection(0);
			}
		},
		encapsulation: 2
	});
};
IonCardContent = __decorate([ProxyCmp({ inputs: ["mode"] })], IonCardContent);
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonCardContent, [{
		type: Component,
		args: [{
			selector: "ion-card-content",
			changeDetection: ChangeDetectionStrategy.OnPush,
			template: "<ng-content></ng-content>",
			inputs: ["mode"],
			standalone: false
		}]
	}], () => [
		{ type: ChangeDetectorRef },
		{ type: ElementRef },
		{ type: NgZone }
	], null);
})();
var IonCardHeader = class IonCardHeader {
	z;
	el;
	constructor(c, r, z) {
		this.z = z;
		c.detach();
		this.el = r.nativeElement;
	}
	/** @nocollapse */
	static ɵfac = function IonCardHeader_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || IonCardHeader)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
	};
	/** @nocollapse */
	static ɵcmp = /* @__PURE__ */ ɵɵdefineComponent({
		type: IonCardHeader,
		selectors: [["ion-card-header"]],
		inputs: {
			color: "color",
			mode: "mode",
			translucent: "translucent"
		},
		standalone: false,
		ngContentSelectors: _c0$4,
		decls: 1,
		vars: 0,
		template: function IonCardHeader_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵprojectionDef();
				ɵɵprojection(0);
			}
		},
		encapsulation: 2
	});
};
IonCardHeader = __decorate([ProxyCmp({ inputs: [
	"color",
	"mode",
	"translucent"
] })], IonCardHeader);
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonCardHeader, [{
		type: Component,
		args: [{
			selector: "ion-card-header",
			changeDetection: ChangeDetectionStrategy.OnPush,
			template: "<ng-content></ng-content>",
			inputs: [
				"color",
				"mode",
				"translucent"
			],
			standalone: false
		}]
	}], () => [
		{ type: ChangeDetectorRef },
		{ type: ElementRef },
		{ type: NgZone }
	], null);
})();
var IonCardSubtitle = class IonCardSubtitle {
	z;
	el;
	constructor(c, r, z) {
		this.z = z;
		c.detach();
		this.el = r.nativeElement;
	}
	/** @nocollapse */
	static ɵfac = function IonCardSubtitle_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || IonCardSubtitle)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
	};
	/** @nocollapse */
	static ɵcmp = /* @__PURE__ */ ɵɵdefineComponent({
		type: IonCardSubtitle,
		selectors: [["ion-card-subtitle"]],
		inputs: {
			color: "color",
			mode: "mode"
		},
		standalone: false,
		ngContentSelectors: _c0$4,
		decls: 1,
		vars: 0,
		template: function IonCardSubtitle_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵprojectionDef();
				ɵɵprojection(0);
			}
		},
		encapsulation: 2
	});
};
IonCardSubtitle = __decorate([ProxyCmp({ inputs: ["color", "mode"] })], IonCardSubtitle);
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonCardSubtitle, [{
		type: Component,
		args: [{
			selector: "ion-card-subtitle",
			changeDetection: ChangeDetectionStrategy.OnPush,
			template: "<ng-content></ng-content>",
			inputs: ["color", "mode"],
			standalone: false
		}]
	}], () => [
		{ type: ChangeDetectorRef },
		{ type: ElementRef },
		{ type: NgZone }
	], null);
})();
var IonCardTitle = class IonCardTitle {
	z;
	el;
	constructor(c, r, z) {
		this.z = z;
		c.detach();
		this.el = r.nativeElement;
	}
	/** @nocollapse */
	static ɵfac = function IonCardTitle_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || IonCardTitle)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
	};
	/** @nocollapse */
	static ɵcmp = /* @__PURE__ */ ɵɵdefineComponent({
		type: IonCardTitle,
		selectors: [["ion-card-title"]],
		inputs: {
			color: "color",
			mode: "mode"
		},
		standalone: false,
		ngContentSelectors: _c0$4,
		decls: 1,
		vars: 0,
		template: function IonCardTitle_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵprojectionDef();
				ɵɵprojection(0);
			}
		},
		encapsulation: 2
	});
};
IonCardTitle = __decorate([ProxyCmp({ inputs: ["color", "mode"] })], IonCardTitle);
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonCardTitle, [{
		type: Component,
		args: [{
			selector: "ion-card-title",
			changeDetection: ChangeDetectionStrategy.OnPush,
			template: "<ng-content></ng-content>",
			inputs: ["color", "mode"],
			standalone: false
		}]
	}], () => [
		{ type: ChangeDetectorRef },
		{ type: ElementRef },
		{ type: NgZone }
	], null);
})();
var IonCheckbox = class IonCheckbox {
	z;
	el;
	ionChange = new EventEmitter();
	ionFocus = new EventEmitter();
	ionBlur = new EventEmitter();
	constructor(c, r, z) {
		this.z = z;
		c.detach();
		this.el = r.nativeElement;
	}
	/** @nocollapse */
	static ɵfac = function IonCheckbox_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || IonCheckbox)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
	};
	/** @nocollapse */
	static ɵcmp = /* @__PURE__ */ ɵɵdefineComponent({
		type: IonCheckbox,
		selectors: [["ion-checkbox"]],
		inputs: {
			alignment: "alignment",
			checked: "checked",
			color: "color",
			disabled: "disabled",
			errorText: "errorText",
			helperText: "helperText",
			indeterminate: "indeterminate",
			justify: "justify",
			labelPlacement: "labelPlacement",
			mode: "mode",
			name: "name",
			required: "required",
			value: "value"
		},
		outputs: {
			ionChange: "ionChange",
			ionFocus: "ionFocus",
			ionBlur: "ionBlur"
		},
		standalone: false,
		ngContentSelectors: _c0$4,
		decls: 1,
		vars: 0,
		template: function IonCheckbox_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵprojectionDef();
				ɵɵprojection(0);
			}
		},
		encapsulation: 2
	});
};
IonCheckbox = __decorate([ProxyCmp({ inputs: [
	"alignment",
	"checked",
	"color",
	"disabled",
	"errorText",
	"helperText",
	"indeterminate",
	"justify",
	"labelPlacement",
	"mode",
	"name",
	"required",
	"value"
] })], IonCheckbox);
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonCheckbox, [{
		type: Component,
		args: [{
			selector: "ion-checkbox",
			changeDetection: ChangeDetectionStrategy.OnPush,
			template: "<ng-content></ng-content>",
			inputs: [
				"alignment",
				"checked",
				"color",
				"disabled",
				"errorText",
				"helperText",
				"indeterminate",
				"justify",
				"labelPlacement",
				"mode",
				"name",
				"required",
				"value"
			],
			outputs: [
				"ionChange",
				"ionFocus",
				"ionBlur"
			],
			standalone: false
		}]
	}], () => [
		{ type: ChangeDetectorRef },
		{ type: ElementRef },
		{ type: NgZone }
	], {
		ionChange: [{ type: Output }],
		ionFocus: [{ type: Output }],
		ionBlur: [{ type: Output }]
	});
})();
var IonChip = class IonChip {
	z;
	el;
	constructor(c, r, z) {
		this.z = z;
		c.detach();
		this.el = r.nativeElement;
	}
	/** @nocollapse */
	static ɵfac = function IonChip_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || IonChip)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
	};
	/** @nocollapse */
	static ɵcmp = /* @__PURE__ */ ɵɵdefineComponent({
		type: IonChip,
		selectors: [["ion-chip"]],
		inputs: {
			color: "color",
			disabled: "disabled",
			mode: "mode",
			outline: "outline"
		},
		standalone: false,
		ngContentSelectors: _c0$4,
		decls: 1,
		vars: 0,
		template: function IonChip_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵprojectionDef();
				ɵɵprojection(0);
			}
		},
		encapsulation: 2
	});
};
IonChip = __decorate([ProxyCmp({ inputs: [
	"color",
	"disabled",
	"mode",
	"outline"
] })], IonChip);
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonChip, [{
		type: Component,
		args: [{
			selector: "ion-chip",
			changeDetection: ChangeDetectionStrategy.OnPush,
			template: "<ng-content></ng-content>",
			inputs: [
				"color",
				"disabled",
				"mode",
				"outline"
			],
			standalone: false
		}]
	}], () => [
		{ type: ChangeDetectorRef },
		{ type: ElementRef },
		{ type: NgZone }
	], null);
})();
var IonCol = class IonCol {
	z;
	el;
	constructor(c, r, z) {
		this.z = z;
		c.detach();
		this.el = r.nativeElement;
	}
	/** @nocollapse */
	static ɵfac = function IonCol_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || IonCol)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
	};
	/** @nocollapse */
	static ɵcmp = /* @__PURE__ */ ɵɵdefineComponent({
		type: IonCol,
		selectors: [["ion-col"]],
		inputs: {
			offset: "offset",
			offsetLg: "offsetLg",
			offsetMd: "offsetMd",
			offsetSm: "offsetSm",
			offsetXl: "offsetXl",
			offsetXs: "offsetXs",
			pull: "pull",
			pullLg: "pullLg",
			pullMd: "pullMd",
			pullSm: "pullSm",
			pullXl: "pullXl",
			pullXs: "pullXs",
			push: "push",
			pushLg: "pushLg",
			pushMd: "pushMd",
			pushSm: "pushSm",
			pushXl: "pushXl",
			pushXs: "pushXs",
			size: "size",
			sizeLg: "sizeLg",
			sizeMd: "sizeMd",
			sizeSm: "sizeSm",
			sizeXl: "sizeXl",
			sizeXs: "sizeXs"
		},
		standalone: false,
		ngContentSelectors: _c0$4,
		decls: 1,
		vars: 0,
		template: function IonCol_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵprojectionDef();
				ɵɵprojection(0);
			}
		},
		encapsulation: 2
	});
};
IonCol = __decorate([ProxyCmp({ inputs: [
	"offset",
	"offsetLg",
	"offsetMd",
	"offsetSm",
	"offsetXl",
	"offsetXs",
	"pull",
	"pullLg",
	"pullMd",
	"pullSm",
	"pullXl",
	"pullXs",
	"push",
	"pushLg",
	"pushMd",
	"pushSm",
	"pushXl",
	"pushXs",
	"size",
	"sizeLg",
	"sizeMd",
	"sizeSm",
	"sizeXl",
	"sizeXs"
] })], IonCol);
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonCol, [{
		type: Component,
		args: [{
			selector: "ion-col",
			changeDetection: ChangeDetectionStrategy.OnPush,
			template: "<ng-content></ng-content>",
			inputs: [
				"offset",
				"offsetLg",
				"offsetMd",
				"offsetSm",
				"offsetXl",
				"offsetXs",
				"pull",
				"pullLg",
				"pullMd",
				"pullSm",
				"pullXl",
				"pullXs",
				"push",
				"pushLg",
				"pushMd",
				"pushSm",
				"pushXl",
				"pushXs",
				"size",
				"sizeLg",
				"sizeMd",
				"sizeSm",
				"sizeXl",
				"sizeXs"
			],
			standalone: false
		}]
	}], () => [
		{ type: ChangeDetectorRef },
		{ type: ElementRef },
		{ type: NgZone }
	], null);
})();
var IonContent = class IonContent {
	z;
	el;
	ionScrollStart = new EventEmitter();
	ionScroll = new EventEmitter();
	ionScrollEnd = new EventEmitter();
	constructor(c, r, z) {
		this.z = z;
		c.detach();
		this.el = r.nativeElement;
	}
	/** @nocollapse */
	static ɵfac = function IonContent_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || IonContent)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
	};
	/** @nocollapse */
	static ɵcmp = /* @__PURE__ */ ɵɵdefineComponent({
		type: IonContent,
		selectors: [["ion-content"]],
		inputs: {
			color: "color",
			fixedSlotPlacement: "fixedSlotPlacement",
			forceOverscroll: "forceOverscroll",
			fullscreen: "fullscreen",
			scrollEvents: "scrollEvents",
			scrollX: "scrollX",
			scrollY: "scrollY"
		},
		outputs: {
			ionScrollStart: "ionScrollStart",
			ionScroll: "ionScroll",
			ionScrollEnd: "ionScrollEnd"
		},
		standalone: false,
		ngContentSelectors: _c0$4,
		decls: 1,
		vars: 0,
		template: function IonContent_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵprojectionDef();
				ɵɵprojection(0);
			}
		},
		encapsulation: 2
	});
};
IonContent = __decorate([ProxyCmp({
	inputs: [
		"color",
		"fixedSlotPlacement",
		"forceOverscroll",
		"fullscreen",
		"scrollEvents",
		"scrollX",
		"scrollY"
	],
	methods: [
		"getScrollElement",
		"scrollToTop",
		"scrollToBottom",
		"scrollByPoint",
		"scrollToPoint"
	]
})], IonContent);
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonContent, [{
		type: Component,
		args: [{
			selector: "ion-content",
			changeDetection: ChangeDetectionStrategy.OnPush,
			template: "<ng-content></ng-content>",
			inputs: [
				"color",
				"fixedSlotPlacement",
				"forceOverscroll",
				"fullscreen",
				"scrollEvents",
				"scrollX",
				"scrollY"
			],
			outputs: [
				"ionScrollStart",
				"ionScroll",
				"ionScrollEnd"
			],
			standalone: false
		}]
	}], () => [
		{ type: ChangeDetectorRef },
		{ type: ElementRef },
		{ type: NgZone }
	], {
		ionScrollStart: [{ type: Output }],
		ionScroll: [{ type: Output }],
		ionScrollEnd: [{ type: Output }]
	});
})();
var IonDatetime = class IonDatetime {
	z;
	el;
	ionCancel = new EventEmitter();
	ionChange = new EventEmitter();
	ionFocus = new EventEmitter();
	ionBlur = new EventEmitter();
	constructor(c, r, z) {
		this.z = z;
		c.detach();
		this.el = r.nativeElement;
	}
	/** @nocollapse */
	static ɵfac = function IonDatetime_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || IonDatetime)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
	};
	/** @nocollapse */
	static ɵcmp = /* @__PURE__ */ ɵɵdefineComponent({
		type: IonDatetime,
		selectors: [["ion-datetime"]],
		inputs: {
			cancelText: "cancelText",
			clearText: "clearText",
			color: "color",
			dayValues: "dayValues",
			disabled: "disabled",
			doneText: "doneText",
			firstDayOfWeek: "firstDayOfWeek",
			formatOptions: "formatOptions",
			highlightedDates: "highlightedDates",
			hourCycle: "hourCycle",
			hourValues: "hourValues",
			isDateEnabled: "isDateEnabled",
			locale: "locale",
			max: "max",
			min: "min",
			minuteValues: "minuteValues",
			mode: "mode",
			monthValues: "monthValues",
			multiple: "multiple",
			name: "name",
			preferWheel: "preferWheel",
			presentation: "presentation",
			readonly: "readonly",
			showAdjacentDays: "showAdjacentDays",
			showClearButton: "showClearButton",
			showDefaultButtons: "showDefaultButtons",
			showDefaultTimeLabel: "showDefaultTimeLabel",
			showDefaultTitle: "showDefaultTitle",
			size: "size",
			titleSelectedDatesFormatter: "titleSelectedDatesFormatter",
			value: "value",
			yearValues: "yearValues"
		},
		outputs: {
			ionCancel: "ionCancel",
			ionChange: "ionChange",
			ionFocus: "ionFocus",
			ionBlur: "ionBlur"
		},
		standalone: false,
		ngContentSelectors: _c0$4,
		decls: 1,
		vars: 0,
		template: function IonDatetime_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵprojectionDef();
				ɵɵprojection(0);
			}
		},
		encapsulation: 2
	});
};
IonDatetime = __decorate([ProxyCmp({
	inputs: [
		"cancelText",
		"clearText",
		"color",
		"dayValues",
		"disabled",
		"doneText",
		"firstDayOfWeek",
		"formatOptions",
		"highlightedDates",
		"hourCycle",
		"hourValues",
		"isDateEnabled",
		"locale",
		"max",
		"min",
		"minuteValues",
		"mode",
		"monthValues",
		"multiple",
		"name",
		"preferWheel",
		"presentation",
		"readonly",
		"showAdjacentDays",
		"showClearButton",
		"showDefaultButtons",
		"showDefaultTimeLabel",
		"showDefaultTitle",
		"size",
		"titleSelectedDatesFormatter",
		"value",
		"yearValues"
	],
	methods: [
		"confirm",
		"reset",
		"cancel"
	]
})], IonDatetime);
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonDatetime, [{
		type: Component,
		args: [{
			selector: "ion-datetime",
			changeDetection: ChangeDetectionStrategy.OnPush,
			template: "<ng-content></ng-content>",
			inputs: [
				"cancelText",
				"clearText",
				"color",
				"dayValues",
				"disabled",
				"doneText",
				"firstDayOfWeek",
				"formatOptions",
				"highlightedDates",
				"hourCycle",
				"hourValues",
				"isDateEnabled",
				"locale",
				"max",
				"min",
				"minuteValues",
				"mode",
				"monthValues",
				"multiple",
				"name",
				"preferWheel",
				"presentation",
				"readonly",
				"showAdjacentDays",
				"showClearButton",
				"showDefaultButtons",
				"showDefaultTimeLabel",
				"showDefaultTitle",
				"size",
				"titleSelectedDatesFormatter",
				"value",
				"yearValues"
			],
			outputs: [
				"ionCancel",
				"ionChange",
				"ionFocus",
				"ionBlur"
			],
			standalone: false
		}]
	}], () => [
		{ type: ChangeDetectorRef },
		{ type: ElementRef },
		{ type: NgZone }
	], {
		ionCancel: [{ type: Output }],
		ionChange: [{ type: Output }],
		ionFocus: [{ type: Output }],
		ionBlur: [{ type: Output }]
	});
})();
var IonDatetimeButton = class IonDatetimeButton {
	z;
	el;
	constructor(c, r, z) {
		this.z = z;
		c.detach();
		this.el = r.nativeElement;
	}
	/** @nocollapse */
	static ɵfac = function IonDatetimeButton_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || IonDatetimeButton)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
	};
	/** @nocollapse */
	static ɵcmp = /* @__PURE__ */ ɵɵdefineComponent({
		type: IonDatetimeButton,
		selectors: [["ion-datetime-button"]],
		inputs: {
			color: "color",
			datetime: "datetime",
			disabled: "disabled",
			mode: "mode"
		},
		standalone: false,
		ngContentSelectors: _c0$4,
		decls: 1,
		vars: 0,
		template: function IonDatetimeButton_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵprojectionDef();
				ɵɵprojection(0);
			}
		},
		encapsulation: 2
	});
};
IonDatetimeButton = __decorate([ProxyCmp({ inputs: [
	"color",
	"datetime",
	"disabled",
	"mode"
] })], IonDatetimeButton);
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonDatetimeButton, [{
		type: Component,
		args: [{
			selector: "ion-datetime-button",
			changeDetection: ChangeDetectionStrategy.OnPush,
			template: "<ng-content></ng-content>",
			inputs: [
				"color",
				"datetime",
				"disabled",
				"mode"
			],
			standalone: false
		}]
	}], () => [
		{ type: ChangeDetectorRef },
		{ type: ElementRef },
		{ type: NgZone }
	], null);
})();
var IonFab = class IonFab {
	z;
	el;
	constructor(c, r, z) {
		this.z = z;
		c.detach();
		this.el = r.nativeElement;
	}
	/** @nocollapse */
	static ɵfac = function IonFab_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || IonFab)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
	};
	/** @nocollapse */
	static ɵcmp = /* @__PURE__ */ ɵɵdefineComponent({
		type: IonFab,
		selectors: [["ion-fab"]],
		inputs: {
			activated: "activated",
			edge: "edge",
			horizontal: "horizontal",
			vertical: "vertical"
		},
		standalone: false,
		ngContentSelectors: _c0$4,
		decls: 1,
		vars: 0,
		template: function IonFab_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵprojectionDef();
				ɵɵprojection(0);
			}
		},
		encapsulation: 2
	});
};
IonFab = __decorate([ProxyCmp({
	inputs: [
		"activated",
		"edge",
		"horizontal",
		"vertical"
	],
	methods: ["close"]
})], IonFab);
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonFab, [{
		type: Component,
		args: [{
			selector: "ion-fab",
			changeDetection: ChangeDetectionStrategy.OnPush,
			template: "<ng-content></ng-content>",
			inputs: [
				"activated",
				"edge",
				"horizontal",
				"vertical"
			],
			standalone: false
		}]
	}], () => [
		{ type: ChangeDetectorRef },
		{ type: ElementRef },
		{ type: NgZone }
	], null);
})();
var IonFabButton = class IonFabButton {
	z;
	el;
	ionFocus = new EventEmitter();
	ionBlur = new EventEmitter();
	constructor(c, r, z) {
		this.z = z;
		c.detach();
		this.el = r.nativeElement;
	}
	/** @nocollapse */
	static ɵfac = function IonFabButton_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || IonFabButton)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
	};
	/** @nocollapse */
	static ɵcmp = /* @__PURE__ */ ɵɵdefineComponent({
		type: IonFabButton,
		selectors: [["ion-fab-button"]],
		inputs: {
			activated: "activated",
			closeIcon: "closeIcon",
			color: "color",
			disabled: "disabled",
			download: "download",
			form: "form",
			href: "href",
			mode: "mode",
			rel: "rel",
			routerAnimation: "routerAnimation",
			routerDirection: "routerDirection",
			show: "show",
			size: "size",
			target: "target",
			translucent: "translucent",
			type: "type"
		},
		outputs: {
			ionFocus: "ionFocus",
			ionBlur: "ionBlur"
		},
		standalone: false,
		ngContentSelectors: _c0$4,
		decls: 1,
		vars: 0,
		template: function IonFabButton_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵprojectionDef();
				ɵɵprojection(0);
			}
		},
		encapsulation: 2
	});
};
IonFabButton = __decorate([ProxyCmp({ inputs: [
	"activated",
	"closeIcon",
	"color",
	"disabled",
	"download",
	"form",
	"href",
	"mode",
	"rel",
	"routerAnimation",
	"routerDirection",
	"show",
	"size",
	"target",
	"translucent",
	"type"
] })], IonFabButton);
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonFabButton, [{
		type: Component,
		args: [{
			selector: "ion-fab-button",
			changeDetection: ChangeDetectionStrategy.OnPush,
			template: "<ng-content></ng-content>",
			inputs: [
				"activated",
				"closeIcon",
				"color",
				"disabled",
				"download",
				"form",
				"href",
				"mode",
				"rel",
				"routerAnimation",
				"routerDirection",
				"show",
				"size",
				"target",
				"translucent",
				"type"
			],
			outputs: ["ionFocus", "ionBlur"],
			standalone: false
		}]
	}], () => [
		{ type: ChangeDetectorRef },
		{ type: ElementRef },
		{ type: NgZone }
	], {
		ionFocus: [{ type: Output }],
		ionBlur: [{ type: Output }]
	});
})();
var IonFabList = class IonFabList {
	z;
	el;
	constructor(c, r, z) {
		this.z = z;
		c.detach();
		this.el = r.nativeElement;
	}
	/** @nocollapse */
	static ɵfac = function IonFabList_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || IonFabList)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
	};
	/** @nocollapse */
	static ɵcmp = /* @__PURE__ */ ɵɵdefineComponent({
		type: IonFabList,
		selectors: [["ion-fab-list"]],
		inputs: {
			activated: "activated",
			side: "side"
		},
		standalone: false,
		ngContentSelectors: _c0$4,
		decls: 1,
		vars: 0,
		template: function IonFabList_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵprojectionDef();
				ɵɵprojection(0);
			}
		},
		encapsulation: 2
	});
};
IonFabList = __decorate([ProxyCmp({ inputs: ["activated", "side"] })], IonFabList);
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonFabList, [{
		type: Component,
		args: [{
			selector: "ion-fab-list",
			changeDetection: ChangeDetectionStrategy.OnPush,
			template: "<ng-content></ng-content>",
			inputs: ["activated", "side"],
			standalone: false
		}]
	}], () => [
		{ type: ChangeDetectorRef },
		{ type: ElementRef },
		{ type: NgZone }
	], null);
})();
var IonFooter = class IonFooter {
	z;
	el;
	constructor(c, r, z) {
		this.z = z;
		c.detach();
		this.el = r.nativeElement;
	}
	/** @nocollapse */
	static ɵfac = function IonFooter_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || IonFooter)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
	};
	/** @nocollapse */
	static ɵcmp = /* @__PURE__ */ ɵɵdefineComponent({
		type: IonFooter,
		selectors: [["ion-footer"]],
		inputs: {
			collapse: "collapse",
			mode: "mode",
			translucent: "translucent"
		},
		standalone: false,
		ngContentSelectors: _c0$4,
		decls: 1,
		vars: 0,
		template: function IonFooter_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵprojectionDef();
				ɵɵprojection(0);
			}
		},
		encapsulation: 2
	});
};
IonFooter = __decorate([ProxyCmp({ inputs: [
	"collapse",
	"mode",
	"translucent"
] })], IonFooter);
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonFooter, [{
		type: Component,
		args: [{
			selector: "ion-footer",
			changeDetection: ChangeDetectionStrategy.OnPush,
			template: "<ng-content></ng-content>",
			inputs: [
				"collapse",
				"mode",
				"translucent"
			],
			standalone: false
		}]
	}], () => [
		{ type: ChangeDetectorRef },
		{ type: ElementRef },
		{ type: NgZone }
	], null);
})();
var IonGrid = class IonGrid {
	z;
	el;
	constructor(c, r, z) {
		this.z = z;
		c.detach();
		this.el = r.nativeElement;
	}
	/** @nocollapse */
	static ɵfac = function IonGrid_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || IonGrid)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
	};
	/** @nocollapse */
	static ɵcmp = /* @__PURE__ */ ɵɵdefineComponent({
		type: IonGrid,
		selectors: [["ion-grid"]],
		inputs: { fixed: "fixed" },
		standalone: false,
		ngContentSelectors: _c0$4,
		decls: 1,
		vars: 0,
		template: function IonGrid_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵprojectionDef();
				ɵɵprojection(0);
			}
		},
		encapsulation: 2
	});
};
IonGrid = __decorate([ProxyCmp({ inputs: ["fixed"] })], IonGrid);
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonGrid, [{
		type: Component,
		args: [{
			selector: "ion-grid",
			changeDetection: ChangeDetectionStrategy.OnPush,
			template: "<ng-content></ng-content>",
			inputs: ["fixed"],
			standalone: false
		}]
	}], () => [
		{ type: ChangeDetectorRef },
		{ type: ElementRef },
		{ type: NgZone }
	], null);
})();
var IonHeader = class IonHeader {
	z;
	el;
	constructor(c, r, z) {
		this.z = z;
		c.detach();
		this.el = r.nativeElement;
	}
	/** @nocollapse */
	static ɵfac = function IonHeader_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || IonHeader)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
	};
	/** @nocollapse */
	static ɵcmp = /* @__PURE__ */ ɵɵdefineComponent({
		type: IonHeader,
		selectors: [["ion-header"]],
		inputs: {
			collapse: "collapse",
			mode: "mode",
			translucent: "translucent"
		},
		standalone: false,
		ngContentSelectors: _c0$4,
		decls: 1,
		vars: 0,
		template: function IonHeader_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵprojectionDef();
				ɵɵprojection(0);
			}
		},
		encapsulation: 2
	});
};
IonHeader = __decorate([ProxyCmp({ inputs: [
	"collapse",
	"mode",
	"translucent"
] })], IonHeader);
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonHeader, [{
		type: Component,
		args: [{
			selector: "ion-header",
			changeDetection: ChangeDetectionStrategy.OnPush,
			template: "<ng-content></ng-content>",
			inputs: [
				"collapse",
				"mode",
				"translucent"
			],
			standalone: false
		}]
	}], () => [
		{ type: ChangeDetectorRef },
		{ type: ElementRef },
		{ type: NgZone }
	], null);
})();
var IonIcon = class IonIcon {
	z;
	el;
	constructor(c, r, z) {
		this.z = z;
		c.detach();
		this.el = r.nativeElement;
	}
	/** @nocollapse */
	static ɵfac = function IonIcon_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || IonIcon)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
	};
	/** @nocollapse */
	static ɵcmp = /* @__PURE__ */ ɵɵdefineComponent({
		type: IonIcon,
		selectors: [["ion-icon"]],
		inputs: {
			color: "color",
			flipRtl: "flipRtl",
			icon: "icon",
			ios: "ios",
			lazy: "lazy",
			md: "md",
			mode: "mode",
			name: "name",
			sanitize: "sanitize",
			size: "size",
			src: "src"
		},
		standalone: false,
		ngContentSelectors: _c0$4,
		decls: 1,
		vars: 0,
		template: function IonIcon_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵprojectionDef();
				ɵɵprojection(0);
			}
		},
		encapsulation: 2
	});
};
IonIcon = __decorate([ProxyCmp({ inputs: [
	"color",
	"flipRtl",
	"icon",
	"ios",
	"lazy",
	"md",
	"mode",
	"name",
	"sanitize",
	"size",
	"src"
] })], IonIcon);
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonIcon, [{
		type: Component,
		args: [{
			selector: "ion-icon",
			changeDetection: ChangeDetectionStrategy.OnPush,
			template: "<ng-content></ng-content>",
			inputs: [
				"color",
				"flipRtl",
				"icon",
				"ios",
				"lazy",
				"md",
				"mode",
				"name",
				"sanitize",
				"size",
				"src"
			],
			standalone: false
		}]
	}], () => [
		{ type: ChangeDetectorRef },
		{ type: ElementRef },
		{ type: NgZone }
	], null);
})();
var IonImg = class IonImg {
	z;
	el;
	ionImgWillLoad = new EventEmitter();
	ionImgDidLoad = new EventEmitter();
	ionError = new EventEmitter();
	constructor(c, r, z) {
		this.z = z;
		c.detach();
		this.el = r.nativeElement;
	}
	/** @nocollapse */
	static ɵfac = function IonImg_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || IonImg)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
	};
	/** @nocollapse */
	static ɵcmp = /* @__PURE__ */ ɵɵdefineComponent({
		type: IonImg,
		selectors: [["ion-img"]],
		inputs: {
			alt: "alt",
			src: "src"
		},
		outputs: {
			ionImgWillLoad: "ionImgWillLoad",
			ionImgDidLoad: "ionImgDidLoad",
			ionError: "ionError"
		},
		standalone: false,
		ngContentSelectors: _c0$4,
		decls: 1,
		vars: 0,
		template: function IonImg_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵprojectionDef();
				ɵɵprojection(0);
			}
		},
		encapsulation: 2
	});
};
IonImg = __decorate([ProxyCmp({ inputs: ["alt", "src"] })], IonImg);
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonImg, [{
		type: Component,
		args: [{
			selector: "ion-img",
			changeDetection: ChangeDetectionStrategy.OnPush,
			template: "<ng-content></ng-content>",
			inputs: ["alt", "src"],
			outputs: [
				"ionImgWillLoad",
				"ionImgDidLoad",
				"ionError"
			],
			standalone: false
		}]
	}], () => [
		{ type: ChangeDetectorRef },
		{ type: ElementRef },
		{ type: NgZone }
	], {
		ionImgWillLoad: [{ type: Output }],
		ionImgDidLoad: [{ type: Output }],
		ionError: [{ type: Output }]
	});
})();
var IonInfiniteScroll = class IonInfiniteScroll {
	z;
	el;
	ionInfinite = new EventEmitter();
	constructor(c, r, z) {
		this.z = z;
		c.detach();
		this.el = r.nativeElement;
	}
	/** @nocollapse */
	static ɵfac = function IonInfiniteScroll_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || IonInfiniteScroll)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
	};
	/** @nocollapse */
	static ɵcmp = /* @__PURE__ */ ɵɵdefineComponent({
		type: IonInfiniteScroll,
		selectors: [["ion-infinite-scroll"]],
		inputs: {
			disabled: "disabled",
			position: "position",
			threshold: "threshold"
		},
		outputs: { ionInfinite: "ionInfinite" },
		standalone: false,
		ngContentSelectors: _c0$4,
		decls: 1,
		vars: 0,
		template: function IonInfiniteScroll_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵprojectionDef();
				ɵɵprojection(0);
			}
		},
		encapsulation: 2
	});
};
IonInfiniteScroll = __decorate([ProxyCmp({
	inputs: [
		"disabled",
		"position",
		"threshold"
	],
	methods: ["complete"]
})], IonInfiniteScroll);
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonInfiniteScroll, [{
		type: Component,
		args: [{
			selector: "ion-infinite-scroll",
			changeDetection: ChangeDetectionStrategy.OnPush,
			template: "<ng-content></ng-content>",
			inputs: [
				"disabled",
				"position",
				"threshold"
			],
			outputs: ["ionInfinite"],
			standalone: false
		}]
	}], () => [
		{ type: ChangeDetectorRef },
		{ type: ElementRef },
		{ type: NgZone }
	], { ionInfinite: [{ type: Output }] });
})();
var IonInfiniteScrollContent = class IonInfiniteScrollContent {
	z;
	el;
	constructor(c, r, z) {
		this.z = z;
		c.detach();
		this.el = r.nativeElement;
	}
	/** @nocollapse */
	static ɵfac = function IonInfiniteScrollContent_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || IonInfiniteScrollContent)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
	};
	/** @nocollapse */
	static ɵcmp = /* @__PURE__ */ ɵɵdefineComponent({
		type: IonInfiniteScrollContent,
		selectors: [["ion-infinite-scroll-content"]],
		inputs: {
			loadingSpinner: "loadingSpinner",
			loadingText: "loadingText"
		},
		standalone: false,
		ngContentSelectors: _c0$4,
		decls: 1,
		vars: 0,
		template: function IonInfiniteScrollContent_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵprojectionDef();
				ɵɵprojection(0);
			}
		},
		encapsulation: 2
	});
};
IonInfiniteScrollContent = __decorate([ProxyCmp({ inputs: ["loadingSpinner", "loadingText"] })], IonInfiniteScrollContent);
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonInfiniteScrollContent, [{
		type: Component,
		args: [{
			selector: "ion-infinite-scroll-content",
			changeDetection: ChangeDetectionStrategy.OnPush,
			template: "<ng-content></ng-content>",
			inputs: ["loadingSpinner", "loadingText"],
			standalone: false
		}]
	}], () => [
		{ type: ChangeDetectorRef },
		{ type: ElementRef },
		{ type: NgZone }
	], null);
})();
var IonInput = class IonInput {
	z;
	el;
	ionInput = new EventEmitter();
	ionChange = new EventEmitter();
	ionBlur = new EventEmitter();
	ionFocus = new EventEmitter();
	constructor(c, r, z) {
		this.z = z;
		c.detach();
		this.el = r.nativeElement;
	}
	/** @nocollapse */
	static ɵfac = function IonInput_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || IonInput)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
	};
	/** @nocollapse */
	static ɵcmp = /* @__PURE__ */ ɵɵdefineComponent({
		type: IonInput,
		selectors: [["ion-input"]],
		inputs: {
			autocapitalize: "autocapitalize",
			autocomplete: "autocomplete",
			autocorrect: "autocorrect",
			autofocus: "autofocus",
			clearInput: "clearInput",
			clearInputIcon: "clearInputIcon",
			clearOnEdit: "clearOnEdit",
			color: "color",
			counter: "counter",
			counterFormatter: "counterFormatter",
			debounce: "debounce",
			disabled: "disabled",
			enterkeyhint: "enterkeyhint",
			errorText: "errorText",
			fill: "fill",
			helperText: "helperText",
			inputmode: "inputmode",
			label: "label",
			labelPlacement: "labelPlacement",
			max: "max",
			maxlength: "maxlength",
			min: "min",
			minlength: "minlength",
			mode: "mode",
			multiple: "multiple",
			name: "name",
			pattern: "pattern",
			placeholder: "placeholder",
			readonly: "readonly",
			required: "required",
			shape: "shape",
			spellcheck: "spellcheck",
			step: "step",
			type: "type",
			value: "value"
		},
		outputs: {
			ionInput: "ionInput",
			ionChange: "ionChange",
			ionBlur: "ionBlur",
			ionFocus: "ionFocus"
		},
		standalone: false,
		ngContentSelectors: _c0$4,
		decls: 1,
		vars: 0,
		template: function IonInput_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵprojectionDef();
				ɵɵprojection(0);
			}
		},
		encapsulation: 2
	});
};
IonInput = __decorate([ProxyCmp({
	inputs: [
		"autocapitalize",
		"autocomplete",
		"autocorrect",
		"autofocus",
		"clearInput",
		"clearInputIcon",
		"clearOnEdit",
		"color",
		"counter",
		"counterFormatter",
		"debounce",
		"disabled",
		"enterkeyhint",
		"errorText",
		"fill",
		"helperText",
		"inputmode",
		"label",
		"labelPlacement",
		"max",
		"maxlength",
		"min",
		"minlength",
		"mode",
		"multiple",
		"name",
		"pattern",
		"placeholder",
		"readonly",
		"required",
		"shape",
		"spellcheck",
		"step",
		"type",
		"value"
	],
	methods: ["setFocus", "getInputElement"]
})], IonInput);
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonInput, [{
		type: Component,
		args: [{
			selector: "ion-input",
			changeDetection: ChangeDetectionStrategy.OnPush,
			template: "<ng-content></ng-content>",
			inputs: [
				"autocapitalize",
				"autocomplete",
				"autocorrect",
				"autofocus",
				"clearInput",
				"clearInputIcon",
				"clearOnEdit",
				"color",
				"counter",
				"counterFormatter",
				"debounce",
				"disabled",
				"enterkeyhint",
				"errorText",
				"fill",
				"helperText",
				"inputmode",
				"label",
				"labelPlacement",
				"max",
				"maxlength",
				"min",
				"minlength",
				"mode",
				"multiple",
				"name",
				"pattern",
				"placeholder",
				"readonly",
				"required",
				"shape",
				"spellcheck",
				"step",
				"type",
				"value"
			],
			outputs: [
				"ionInput",
				"ionChange",
				"ionBlur",
				"ionFocus"
			],
			standalone: false
		}]
	}], () => [
		{ type: ChangeDetectorRef },
		{ type: ElementRef },
		{ type: NgZone }
	], {
		ionInput: [{ type: Output }],
		ionChange: [{ type: Output }],
		ionBlur: [{ type: Output }],
		ionFocus: [{ type: Output }]
	});
})();
var IonInputOtp = class IonInputOtp {
	z;
	el;
	ionInput = new EventEmitter();
	ionChange = new EventEmitter();
	ionComplete = new EventEmitter();
	ionBlur = new EventEmitter();
	ionFocus = new EventEmitter();
	constructor(c, r, z) {
		this.z = z;
		c.detach();
		this.el = r.nativeElement;
	}
	/** @nocollapse */
	static ɵfac = function IonInputOtp_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || IonInputOtp)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
	};
	/** @nocollapse */
	static ɵcmp = /* @__PURE__ */ ɵɵdefineComponent({
		type: IonInputOtp,
		selectors: [["ion-input-otp"]],
		inputs: {
			autocapitalize: "autocapitalize",
			color: "color",
			disabled: "disabled",
			fill: "fill",
			inputmode: "inputmode",
			length: "length",
			pattern: "pattern",
			readonly: "readonly",
			separators: "separators",
			shape: "shape",
			size: "size",
			type: "type",
			value: "value"
		},
		outputs: {
			ionInput: "ionInput",
			ionChange: "ionChange",
			ionComplete: "ionComplete",
			ionBlur: "ionBlur",
			ionFocus: "ionFocus"
		},
		standalone: false,
		ngContentSelectors: _c0$4,
		decls: 1,
		vars: 0,
		template: function IonInputOtp_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵprojectionDef();
				ɵɵprojection(0);
			}
		},
		encapsulation: 2
	});
};
IonInputOtp = __decorate([ProxyCmp({
	inputs: [
		"autocapitalize",
		"color",
		"disabled",
		"fill",
		"inputmode",
		"length",
		"pattern",
		"readonly",
		"separators",
		"shape",
		"size",
		"type",
		"value"
	],
	methods: ["setFocus"]
})], IonInputOtp);
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonInputOtp, [{
		type: Component,
		args: [{
			selector: "ion-input-otp",
			changeDetection: ChangeDetectionStrategy.OnPush,
			template: "<ng-content></ng-content>",
			inputs: [
				"autocapitalize",
				"color",
				"disabled",
				"fill",
				"inputmode",
				"length",
				"pattern",
				"readonly",
				"separators",
				"shape",
				"size",
				"type",
				"value"
			],
			outputs: [
				"ionInput",
				"ionChange",
				"ionComplete",
				"ionBlur",
				"ionFocus"
			],
			standalone: false
		}]
	}], () => [
		{ type: ChangeDetectorRef },
		{ type: ElementRef },
		{ type: NgZone }
	], {
		ionInput: [{ type: Output }],
		ionChange: [{ type: Output }],
		ionComplete: [{ type: Output }],
		ionBlur: [{ type: Output }],
		ionFocus: [{ type: Output }]
	});
})();
var IonInputPasswordToggle = class IonInputPasswordToggle {
	z;
	el;
	constructor(c, r, z) {
		this.z = z;
		c.detach();
		this.el = r.nativeElement;
	}
	/** @nocollapse */
	static ɵfac = function IonInputPasswordToggle_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || IonInputPasswordToggle)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
	};
	/** @nocollapse */
	static ɵcmp = /* @__PURE__ */ ɵɵdefineComponent({
		type: IonInputPasswordToggle,
		selectors: [["ion-input-password-toggle"]],
		inputs: {
			color: "color",
			hideIcon: "hideIcon",
			mode: "mode",
			showIcon: "showIcon"
		},
		standalone: false,
		ngContentSelectors: _c0$4,
		decls: 1,
		vars: 0,
		template: function IonInputPasswordToggle_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵprojectionDef();
				ɵɵprojection(0);
			}
		},
		encapsulation: 2
	});
};
IonInputPasswordToggle = __decorate([ProxyCmp({ inputs: [
	"color",
	"hideIcon",
	"mode",
	"showIcon"
] })], IonInputPasswordToggle);
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonInputPasswordToggle, [{
		type: Component,
		args: [{
			selector: "ion-input-password-toggle",
			changeDetection: ChangeDetectionStrategy.OnPush,
			template: "<ng-content></ng-content>",
			inputs: [
				"color",
				"hideIcon",
				"mode",
				"showIcon"
			],
			standalone: false
		}]
	}], () => [
		{ type: ChangeDetectorRef },
		{ type: ElementRef },
		{ type: NgZone }
	], null);
})();
var IonItem = class IonItem {
	z;
	el;
	constructor(c, r, z) {
		this.z = z;
		c.detach();
		this.el = r.nativeElement;
	}
	/** @nocollapse */
	static ɵfac = function IonItem_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || IonItem)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
	};
	/** @nocollapse */
	static ɵcmp = /* @__PURE__ */ ɵɵdefineComponent({
		type: IonItem,
		selectors: [["ion-item"]],
		inputs: {
			button: "button",
			color: "color",
			detail: "detail",
			detailIcon: "detailIcon",
			disabled: "disabled",
			download: "download",
			href: "href",
			lines: "lines",
			mode: "mode",
			rel: "rel",
			routerAnimation: "routerAnimation",
			routerDirection: "routerDirection",
			target: "target",
			type: "type"
		},
		standalone: false,
		ngContentSelectors: _c0$4,
		decls: 1,
		vars: 0,
		template: function IonItem_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵprojectionDef();
				ɵɵprojection(0);
			}
		},
		encapsulation: 2
	});
};
IonItem = __decorate([ProxyCmp({ inputs: [
	"button",
	"color",
	"detail",
	"detailIcon",
	"disabled",
	"download",
	"href",
	"lines",
	"mode",
	"rel",
	"routerAnimation",
	"routerDirection",
	"target",
	"type"
] })], IonItem);
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonItem, [{
		type: Component,
		args: [{
			selector: "ion-item",
			changeDetection: ChangeDetectionStrategy.OnPush,
			template: "<ng-content></ng-content>",
			inputs: [
				"button",
				"color",
				"detail",
				"detailIcon",
				"disabled",
				"download",
				"href",
				"lines",
				"mode",
				"rel",
				"routerAnimation",
				"routerDirection",
				"target",
				"type"
			],
			standalone: false
		}]
	}], () => [
		{ type: ChangeDetectorRef },
		{ type: ElementRef },
		{ type: NgZone }
	], null);
})();
var IonItemDivider = class IonItemDivider {
	z;
	el;
	constructor(c, r, z) {
		this.z = z;
		c.detach();
		this.el = r.nativeElement;
	}
	/** @nocollapse */
	static ɵfac = function IonItemDivider_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || IonItemDivider)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
	};
	/** @nocollapse */
	static ɵcmp = /* @__PURE__ */ ɵɵdefineComponent({
		type: IonItemDivider,
		selectors: [["ion-item-divider"]],
		inputs: {
			color: "color",
			mode: "mode",
			sticky: "sticky"
		},
		standalone: false,
		ngContentSelectors: _c0$4,
		decls: 1,
		vars: 0,
		template: function IonItemDivider_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵprojectionDef();
				ɵɵprojection(0);
			}
		},
		encapsulation: 2
	});
};
IonItemDivider = __decorate([ProxyCmp({ inputs: [
	"color",
	"mode",
	"sticky"
] })], IonItemDivider);
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonItemDivider, [{
		type: Component,
		args: [{
			selector: "ion-item-divider",
			changeDetection: ChangeDetectionStrategy.OnPush,
			template: "<ng-content></ng-content>",
			inputs: [
				"color",
				"mode",
				"sticky"
			],
			standalone: false
		}]
	}], () => [
		{ type: ChangeDetectorRef },
		{ type: ElementRef },
		{ type: NgZone }
	], null);
})();
var IonItemGroup = class IonItemGroup {
	z;
	el;
	constructor(c, r, z) {
		this.z = z;
		c.detach();
		this.el = r.nativeElement;
	}
	/** @nocollapse */
	static ɵfac = function IonItemGroup_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || IonItemGroup)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
	};
	/** @nocollapse */
	static ɵcmp = /* @__PURE__ */ ɵɵdefineComponent({
		type: IonItemGroup,
		selectors: [["ion-item-group"]],
		standalone: false,
		ngContentSelectors: _c0$4,
		decls: 1,
		vars: 0,
		template: function IonItemGroup_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵprojectionDef();
				ɵɵprojection(0);
			}
		},
		encapsulation: 2
	});
};
IonItemGroup = __decorate([ProxyCmp({})], IonItemGroup);
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonItemGroup, [{
		type: Component,
		args: [{
			selector: "ion-item-group",
			changeDetection: ChangeDetectionStrategy.OnPush,
			template: "<ng-content></ng-content>",
			inputs: [],
			standalone: false
		}]
	}], () => [
		{ type: ChangeDetectorRef },
		{ type: ElementRef },
		{ type: NgZone }
	], null);
})();
var IonItemOption = class IonItemOption {
	z;
	el;
	constructor(c, r, z) {
		this.z = z;
		c.detach();
		this.el = r.nativeElement;
	}
	/** @nocollapse */
	static ɵfac = function IonItemOption_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || IonItemOption)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
	};
	/** @nocollapse */
	static ɵcmp = /* @__PURE__ */ ɵɵdefineComponent({
		type: IonItemOption,
		selectors: [["ion-item-option"]],
		inputs: {
			color: "color",
			disabled: "disabled",
			download: "download",
			expandable: "expandable",
			href: "href",
			mode: "mode",
			rel: "rel",
			target: "target",
			type: "type"
		},
		standalone: false,
		ngContentSelectors: _c0$4,
		decls: 1,
		vars: 0,
		template: function IonItemOption_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵprojectionDef();
				ɵɵprojection(0);
			}
		},
		encapsulation: 2
	});
};
IonItemOption = __decorate([ProxyCmp({ inputs: [
	"color",
	"disabled",
	"download",
	"expandable",
	"href",
	"mode",
	"rel",
	"target",
	"type"
] })], IonItemOption);
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonItemOption, [{
		type: Component,
		args: [{
			selector: "ion-item-option",
			changeDetection: ChangeDetectionStrategy.OnPush,
			template: "<ng-content></ng-content>",
			inputs: [
				"color",
				"disabled",
				"download",
				"expandable",
				"href",
				"mode",
				"rel",
				"target",
				"type"
			],
			standalone: false
		}]
	}], () => [
		{ type: ChangeDetectorRef },
		{ type: ElementRef },
		{ type: NgZone }
	], null);
})();
var IonItemOptions = class IonItemOptions {
	z;
	el;
	ionSwipe = new EventEmitter();
	constructor(c, r, z) {
		this.z = z;
		c.detach();
		this.el = r.nativeElement;
	}
	/** @nocollapse */
	static ɵfac = function IonItemOptions_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || IonItemOptions)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
	};
	/** @nocollapse */
	static ɵcmp = /* @__PURE__ */ ɵɵdefineComponent({
		type: IonItemOptions,
		selectors: [["ion-item-options"]],
		inputs: { side: "side" },
		outputs: { ionSwipe: "ionSwipe" },
		standalone: false,
		ngContentSelectors: _c0$4,
		decls: 1,
		vars: 0,
		template: function IonItemOptions_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵprojectionDef();
				ɵɵprojection(0);
			}
		},
		encapsulation: 2
	});
};
IonItemOptions = __decorate([ProxyCmp({ inputs: ["side"] })], IonItemOptions);
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonItemOptions, [{
		type: Component,
		args: [{
			selector: "ion-item-options",
			changeDetection: ChangeDetectionStrategy.OnPush,
			template: "<ng-content></ng-content>",
			inputs: ["side"],
			outputs: ["ionSwipe"],
			standalone: false
		}]
	}], () => [
		{ type: ChangeDetectorRef },
		{ type: ElementRef },
		{ type: NgZone }
	], { ionSwipe: [{ type: Output }] });
})();
var IonItemSliding = class IonItemSliding {
	z;
	el;
	ionDrag = new EventEmitter();
	constructor(c, r, z) {
		this.z = z;
		c.detach();
		this.el = r.nativeElement;
	}
	/** @nocollapse */
	static ɵfac = function IonItemSliding_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || IonItemSliding)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
	};
	/** @nocollapse */
	static ɵcmp = /* @__PURE__ */ ɵɵdefineComponent({
		type: IonItemSliding,
		selectors: [["ion-item-sliding"]],
		inputs: { disabled: "disabled" },
		outputs: { ionDrag: "ionDrag" },
		standalone: false,
		ngContentSelectors: _c0$4,
		decls: 1,
		vars: 0,
		template: function IonItemSliding_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵprojectionDef();
				ɵɵprojection(0);
			}
		},
		encapsulation: 2
	});
};
IonItemSliding = __decorate([ProxyCmp({
	inputs: ["disabled"],
	methods: [
		"getOpenAmount",
		"getSlidingRatio",
		"open",
		"close",
		"closeOpened"
	]
})], IonItemSliding);
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonItemSliding, [{
		type: Component,
		args: [{
			selector: "ion-item-sliding",
			changeDetection: ChangeDetectionStrategy.OnPush,
			template: "<ng-content></ng-content>",
			inputs: ["disabled"],
			outputs: ["ionDrag"],
			standalone: false
		}]
	}], () => [
		{ type: ChangeDetectorRef },
		{ type: ElementRef },
		{ type: NgZone }
	], { ionDrag: [{ type: Output }] });
})();
var IonLabel = class IonLabel {
	z;
	el;
	constructor(c, r, z) {
		this.z = z;
		c.detach();
		this.el = r.nativeElement;
	}
	/** @nocollapse */
	static ɵfac = function IonLabel_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || IonLabel)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
	};
	/** @nocollapse */
	static ɵcmp = /* @__PURE__ */ ɵɵdefineComponent({
		type: IonLabel,
		selectors: [["ion-label"]],
		inputs: {
			color: "color",
			mode: "mode",
			position: "position"
		},
		standalone: false,
		ngContentSelectors: _c0$4,
		decls: 1,
		vars: 0,
		template: function IonLabel_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵprojectionDef();
				ɵɵprojection(0);
			}
		},
		encapsulation: 2
	});
};
IonLabel = __decorate([ProxyCmp({ inputs: [
	"color",
	"mode",
	"position"
] })], IonLabel);
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonLabel, [{
		type: Component,
		args: [{
			selector: "ion-label",
			changeDetection: ChangeDetectionStrategy.OnPush,
			template: "<ng-content></ng-content>",
			inputs: [
				"color",
				"mode",
				"position"
			],
			standalone: false
		}]
	}], () => [
		{ type: ChangeDetectorRef },
		{ type: ElementRef },
		{ type: NgZone }
	], null);
})();
var IonList = class IonList {
	z;
	el;
	constructor(c, r, z) {
		this.z = z;
		c.detach();
		this.el = r.nativeElement;
	}
	/** @nocollapse */
	static ɵfac = function IonList_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || IonList)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
	};
	/** @nocollapse */
	static ɵcmp = /* @__PURE__ */ ɵɵdefineComponent({
		type: IonList,
		selectors: [["ion-list"]],
		inputs: {
			inset: "inset",
			lines: "lines",
			mode: "mode"
		},
		standalone: false,
		ngContentSelectors: _c0$4,
		decls: 1,
		vars: 0,
		template: function IonList_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵprojectionDef();
				ɵɵprojection(0);
			}
		},
		encapsulation: 2
	});
};
IonList = __decorate([ProxyCmp({
	inputs: [
		"inset",
		"lines",
		"mode"
	],
	methods: ["closeSlidingItems"]
})], IonList);
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonList, [{
		type: Component,
		args: [{
			selector: "ion-list",
			changeDetection: ChangeDetectionStrategy.OnPush,
			template: "<ng-content></ng-content>",
			inputs: [
				"inset",
				"lines",
				"mode"
			],
			standalone: false
		}]
	}], () => [
		{ type: ChangeDetectorRef },
		{ type: ElementRef },
		{ type: NgZone }
	], null);
})();
var IonListHeader = class IonListHeader {
	z;
	el;
	constructor(c, r, z) {
		this.z = z;
		c.detach();
		this.el = r.nativeElement;
	}
	/** @nocollapse */
	static ɵfac = function IonListHeader_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || IonListHeader)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
	};
	/** @nocollapse */
	static ɵcmp = /* @__PURE__ */ ɵɵdefineComponent({
		type: IonListHeader,
		selectors: [["ion-list-header"]],
		inputs: {
			color: "color",
			lines: "lines",
			mode: "mode"
		},
		standalone: false,
		ngContentSelectors: _c0$4,
		decls: 1,
		vars: 0,
		template: function IonListHeader_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵprojectionDef();
				ɵɵprojection(0);
			}
		},
		encapsulation: 2
	});
};
IonListHeader = __decorate([ProxyCmp({ inputs: [
	"color",
	"lines",
	"mode"
] })], IonListHeader);
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonListHeader, [{
		type: Component,
		args: [{
			selector: "ion-list-header",
			changeDetection: ChangeDetectionStrategy.OnPush,
			template: "<ng-content></ng-content>",
			inputs: [
				"color",
				"lines",
				"mode"
			],
			standalone: false
		}]
	}], () => [
		{ type: ChangeDetectorRef },
		{ type: ElementRef },
		{ type: NgZone }
	], null);
})();
var IonLoading = class IonLoading {
	z;
	el;
	ionLoadingDidPresent = new EventEmitter();
	ionLoadingWillPresent = new EventEmitter();
	ionLoadingWillDismiss = new EventEmitter();
	ionLoadingDidDismiss = new EventEmitter();
	didPresent = new EventEmitter();
	willPresent = new EventEmitter();
	willDismiss = new EventEmitter();
	didDismiss = new EventEmitter();
	constructor(c, r, z) {
		this.z = z;
		c.detach();
		this.el = r.nativeElement;
	}
	/** @nocollapse */
	static ɵfac = function IonLoading_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || IonLoading)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
	};
	/** @nocollapse */
	static ɵcmp = /* @__PURE__ */ ɵɵdefineComponent({
		type: IonLoading,
		selectors: [["ion-loading"]],
		inputs: {
			animated: "animated",
			backdropDismiss: "backdropDismiss",
			cssClass: "cssClass",
			duration: "duration",
			enterAnimation: "enterAnimation",
			htmlAttributes: "htmlAttributes",
			isOpen: "isOpen",
			keyboardClose: "keyboardClose",
			leaveAnimation: "leaveAnimation",
			message: "message",
			mode: "mode",
			showBackdrop: "showBackdrop",
			spinner: "spinner",
			translucent: "translucent",
			trigger: "trigger"
		},
		outputs: {
			ionLoadingDidPresent: "ionLoadingDidPresent",
			ionLoadingWillPresent: "ionLoadingWillPresent",
			ionLoadingWillDismiss: "ionLoadingWillDismiss",
			ionLoadingDidDismiss: "ionLoadingDidDismiss",
			didPresent: "didPresent",
			willPresent: "willPresent",
			willDismiss: "willDismiss",
			didDismiss: "didDismiss"
		},
		standalone: false,
		ngContentSelectors: _c0$4,
		decls: 1,
		vars: 0,
		template: function IonLoading_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵprojectionDef();
				ɵɵprojection(0);
			}
		},
		encapsulation: 2
	});
};
IonLoading = __decorate([ProxyCmp({
	inputs: [
		"animated",
		"backdropDismiss",
		"cssClass",
		"duration",
		"enterAnimation",
		"htmlAttributes",
		"isOpen",
		"keyboardClose",
		"leaveAnimation",
		"message",
		"mode",
		"showBackdrop",
		"spinner",
		"translucent",
		"trigger"
	],
	methods: [
		"present",
		"dismiss",
		"onDidDismiss",
		"onWillDismiss"
	]
})], IonLoading);
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonLoading, [{
		type: Component,
		args: [{
			selector: "ion-loading",
			changeDetection: ChangeDetectionStrategy.OnPush,
			template: "<ng-content></ng-content>",
			inputs: [
				"animated",
				"backdropDismiss",
				"cssClass",
				"duration",
				"enterAnimation",
				"htmlAttributes",
				"isOpen",
				"keyboardClose",
				"leaveAnimation",
				"message",
				"mode",
				"showBackdrop",
				"spinner",
				"translucent",
				"trigger"
			],
			outputs: [
				"ionLoadingDidPresent",
				"ionLoadingWillPresent",
				"ionLoadingWillDismiss",
				"ionLoadingDidDismiss",
				"didPresent",
				"willPresent",
				"willDismiss",
				"didDismiss"
			],
			standalone: false
		}]
	}], () => [
		{ type: ChangeDetectorRef },
		{ type: ElementRef },
		{ type: NgZone }
	], {
		ionLoadingDidPresent: [{ type: Output }],
		ionLoadingWillPresent: [{ type: Output }],
		ionLoadingWillDismiss: [{ type: Output }],
		ionLoadingDidDismiss: [{ type: Output }],
		didPresent: [{ type: Output }],
		willPresent: [{ type: Output }],
		willDismiss: [{ type: Output }],
		didDismiss: [{ type: Output }]
	});
})();
var IonMenu = class IonMenu {
	z;
	el;
	ionWillOpen = new EventEmitter();
	ionWillClose = new EventEmitter();
	ionDidOpen = new EventEmitter();
	ionDidClose = new EventEmitter();
	constructor(c, r, z) {
		this.z = z;
		c.detach();
		this.el = r.nativeElement;
	}
	/** @nocollapse */
	static ɵfac = function IonMenu_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || IonMenu)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
	};
	/** @nocollapse */
	static ɵcmp = /* @__PURE__ */ ɵɵdefineComponent({
		type: IonMenu,
		selectors: [["ion-menu"]],
		inputs: {
			contentId: "contentId",
			disabled: "disabled",
			maxEdgeStart: "maxEdgeStart",
			menuId: "menuId",
			side: "side",
			swipeGesture: "swipeGesture",
			type: "type"
		},
		outputs: {
			ionWillOpen: "ionWillOpen",
			ionWillClose: "ionWillClose",
			ionDidOpen: "ionDidOpen",
			ionDidClose: "ionDidClose"
		},
		standalone: false,
		ngContentSelectors: _c0$4,
		decls: 1,
		vars: 0,
		template: function IonMenu_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵprojectionDef();
				ɵɵprojection(0);
			}
		},
		encapsulation: 2
	});
};
IonMenu = __decorate([ProxyCmp({
	inputs: [
		"contentId",
		"disabled",
		"maxEdgeStart",
		"menuId",
		"side",
		"swipeGesture",
		"type"
	],
	methods: [
		"isOpen",
		"isActive",
		"open",
		"close",
		"toggle",
		"setOpen"
	]
})], IonMenu);
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonMenu, [{
		type: Component,
		args: [{
			selector: "ion-menu",
			changeDetection: ChangeDetectionStrategy.OnPush,
			template: "<ng-content></ng-content>",
			inputs: [
				"contentId",
				"disabled",
				"maxEdgeStart",
				"menuId",
				"side",
				"swipeGesture",
				"type"
			],
			outputs: [
				"ionWillOpen",
				"ionWillClose",
				"ionDidOpen",
				"ionDidClose"
			],
			standalone: false
		}]
	}], () => [
		{ type: ChangeDetectorRef },
		{ type: ElementRef },
		{ type: NgZone }
	], {
		ionWillOpen: [{ type: Output }],
		ionWillClose: [{ type: Output }],
		ionDidOpen: [{ type: Output }],
		ionDidClose: [{ type: Output }]
	});
})();
var IonMenuButton = class IonMenuButton {
	z;
	el;
	constructor(c, r, z) {
		this.z = z;
		c.detach();
		this.el = r.nativeElement;
	}
	/** @nocollapse */
	static ɵfac = function IonMenuButton_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || IonMenuButton)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
	};
	/** @nocollapse */
	static ɵcmp = /* @__PURE__ */ ɵɵdefineComponent({
		type: IonMenuButton,
		selectors: [["ion-menu-button"]],
		inputs: {
			autoHide: "autoHide",
			color: "color",
			disabled: "disabled",
			menu: "menu",
			mode: "mode",
			type: "type"
		},
		standalone: false,
		ngContentSelectors: _c0$4,
		decls: 1,
		vars: 0,
		template: function IonMenuButton_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵprojectionDef();
				ɵɵprojection(0);
			}
		},
		encapsulation: 2
	});
};
IonMenuButton = __decorate([ProxyCmp({ inputs: [
	"autoHide",
	"color",
	"disabled",
	"menu",
	"mode",
	"type"
] })], IonMenuButton);
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonMenuButton, [{
		type: Component,
		args: [{
			selector: "ion-menu-button",
			changeDetection: ChangeDetectionStrategy.OnPush,
			template: "<ng-content></ng-content>",
			inputs: [
				"autoHide",
				"color",
				"disabled",
				"menu",
				"mode",
				"type"
			],
			standalone: false
		}]
	}], () => [
		{ type: ChangeDetectorRef },
		{ type: ElementRef },
		{ type: NgZone }
	], null);
})();
var IonMenuToggle = class IonMenuToggle {
	z;
	el;
	constructor(c, r, z) {
		this.z = z;
		c.detach();
		this.el = r.nativeElement;
	}
	/** @nocollapse */
	static ɵfac = function IonMenuToggle_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || IonMenuToggle)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
	};
	/** @nocollapse */
	static ɵcmp = /* @__PURE__ */ ɵɵdefineComponent({
		type: IonMenuToggle,
		selectors: [["ion-menu-toggle"]],
		inputs: {
			autoHide: "autoHide",
			menu: "menu"
		},
		standalone: false,
		ngContentSelectors: _c0$4,
		decls: 1,
		vars: 0,
		template: function IonMenuToggle_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵprojectionDef();
				ɵɵprojection(0);
			}
		},
		encapsulation: 2
	});
};
IonMenuToggle = __decorate([ProxyCmp({ inputs: ["autoHide", "menu"] })], IonMenuToggle);
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonMenuToggle, [{
		type: Component,
		args: [{
			selector: "ion-menu-toggle",
			changeDetection: ChangeDetectionStrategy.OnPush,
			template: "<ng-content></ng-content>",
			inputs: ["autoHide", "menu"],
			standalone: false
		}]
	}], () => [
		{ type: ChangeDetectorRef },
		{ type: ElementRef },
		{ type: NgZone }
	], null);
})();
var IonNavLink = class IonNavLink {
	z;
	el;
	constructor(c, r, z) {
		this.z = z;
		c.detach();
		this.el = r.nativeElement;
	}
	/** @nocollapse */
	static ɵfac = function IonNavLink_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || IonNavLink)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
	};
	/** @nocollapse */
	static ɵcmp = /* @__PURE__ */ ɵɵdefineComponent({
		type: IonNavLink,
		selectors: [["ion-nav-link"]],
		inputs: {
			component: "component",
			componentProps: "componentProps",
			routerAnimation: "routerAnimation",
			routerDirection: "routerDirection"
		},
		standalone: false,
		ngContentSelectors: _c0$4,
		decls: 1,
		vars: 0,
		template: function IonNavLink_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵprojectionDef();
				ɵɵprojection(0);
			}
		},
		encapsulation: 2
	});
};
IonNavLink = __decorate([ProxyCmp({ inputs: [
	"component",
	"componentProps",
	"routerAnimation",
	"routerDirection"
] })], IonNavLink);
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonNavLink, [{
		type: Component,
		args: [{
			selector: "ion-nav-link",
			changeDetection: ChangeDetectionStrategy.OnPush,
			template: "<ng-content></ng-content>",
			inputs: [
				"component",
				"componentProps",
				"routerAnimation",
				"routerDirection"
			],
			standalone: false
		}]
	}], () => [
		{ type: ChangeDetectorRef },
		{ type: ElementRef },
		{ type: NgZone }
	], null);
})();
var IonNote = class IonNote {
	z;
	el;
	constructor(c, r, z) {
		this.z = z;
		c.detach();
		this.el = r.nativeElement;
	}
	/** @nocollapse */
	static ɵfac = function IonNote_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || IonNote)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
	};
	/** @nocollapse */
	static ɵcmp = /* @__PURE__ */ ɵɵdefineComponent({
		type: IonNote,
		selectors: [["ion-note"]],
		inputs: {
			color: "color",
			mode: "mode"
		},
		standalone: false,
		ngContentSelectors: _c0$4,
		decls: 1,
		vars: 0,
		template: function IonNote_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵprojectionDef();
				ɵɵprojection(0);
			}
		},
		encapsulation: 2
	});
};
IonNote = __decorate([ProxyCmp({ inputs: ["color", "mode"] })], IonNote);
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonNote, [{
		type: Component,
		args: [{
			selector: "ion-note",
			changeDetection: ChangeDetectionStrategy.OnPush,
			template: "<ng-content></ng-content>",
			inputs: ["color", "mode"],
			standalone: false
		}]
	}], () => [
		{ type: ChangeDetectorRef },
		{ type: ElementRef },
		{ type: NgZone }
	], null);
})();
var IonPicker = class IonPicker {
	z;
	el;
	constructor(c, r, z) {
		this.z = z;
		c.detach();
		this.el = r.nativeElement;
	}
	/** @nocollapse */
	static ɵfac = function IonPicker_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || IonPicker)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
	};
	/** @nocollapse */
	static ɵcmp = /* @__PURE__ */ ɵɵdefineComponent({
		type: IonPicker,
		selectors: [["ion-picker"]],
		inputs: { mode: "mode" },
		standalone: false,
		ngContentSelectors: _c0$4,
		decls: 1,
		vars: 0,
		template: function IonPicker_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵprojectionDef();
				ɵɵprojection(0);
			}
		},
		encapsulation: 2
	});
};
IonPicker = __decorate([ProxyCmp({ inputs: ["mode"] })], IonPicker);
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonPicker, [{
		type: Component,
		args: [{
			selector: "ion-picker",
			changeDetection: ChangeDetectionStrategy.OnPush,
			template: "<ng-content></ng-content>",
			inputs: ["mode"],
			standalone: false
		}]
	}], () => [
		{ type: ChangeDetectorRef },
		{ type: ElementRef },
		{ type: NgZone }
	], null);
})();
var IonPickerColumn = class IonPickerColumn {
	z;
	el;
	ionChange = new EventEmitter();
	constructor(c, r, z) {
		this.z = z;
		c.detach();
		this.el = r.nativeElement;
	}
	/** @nocollapse */
	static ɵfac = function IonPickerColumn_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || IonPickerColumn)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
	};
	/** @nocollapse */
	static ɵcmp = /* @__PURE__ */ ɵɵdefineComponent({
		type: IonPickerColumn,
		selectors: [["ion-picker-column"]],
		inputs: {
			color: "color",
			disabled: "disabled",
			mode: "mode",
			value: "value"
		},
		outputs: { ionChange: "ionChange" },
		standalone: false,
		ngContentSelectors: _c0$4,
		decls: 1,
		vars: 0,
		template: function IonPickerColumn_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵprojectionDef();
				ɵɵprojection(0);
			}
		},
		encapsulation: 2
	});
};
IonPickerColumn = __decorate([ProxyCmp({
	inputs: [
		"color",
		"disabled",
		"mode",
		"value"
	],
	methods: ["setFocus"]
})], IonPickerColumn);
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonPickerColumn, [{
		type: Component,
		args: [{
			selector: "ion-picker-column",
			changeDetection: ChangeDetectionStrategy.OnPush,
			template: "<ng-content></ng-content>",
			inputs: [
				"color",
				"disabled",
				"mode",
				"value"
			],
			outputs: ["ionChange"],
			standalone: false
		}]
	}], () => [
		{ type: ChangeDetectorRef },
		{ type: ElementRef },
		{ type: NgZone }
	], { ionChange: [{ type: Output }] });
})();
var IonPickerColumnOption = class IonPickerColumnOption {
	z;
	el;
	constructor(c, r, z) {
		this.z = z;
		c.detach();
		this.el = r.nativeElement;
	}
	/** @nocollapse */
	static ɵfac = function IonPickerColumnOption_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || IonPickerColumnOption)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
	};
	/** @nocollapse */
	static ɵcmp = /* @__PURE__ */ ɵɵdefineComponent({
		type: IonPickerColumnOption,
		selectors: [["ion-picker-column-option"]],
		inputs: {
			color: "color",
			disabled: "disabled",
			value: "value"
		},
		standalone: false,
		ngContentSelectors: _c0$4,
		decls: 1,
		vars: 0,
		template: function IonPickerColumnOption_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵprojectionDef();
				ɵɵprojection(0);
			}
		},
		encapsulation: 2
	});
};
IonPickerColumnOption = __decorate([ProxyCmp({ inputs: [
	"color",
	"disabled",
	"value"
] })], IonPickerColumnOption);
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonPickerColumnOption, [{
		type: Component,
		args: [{
			selector: "ion-picker-column-option",
			changeDetection: ChangeDetectionStrategy.OnPush,
			template: "<ng-content></ng-content>",
			inputs: [
				"color",
				"disabled",
				"value"
			],
			standalone: false
		}]
	}], () => [
		{ type: ChangeDetectorRef },
		{ type: ElementRef },
		{ type: NgZone }
	], null);
})();
var IonProgressBar = class IonProgressBar {
	z;
	el;
	constructor(c, r, z) {
		this.z = z;
		c.detach();
		this.el = r.nativeElement;
	}
	/** @nocollapse */
	static ɵfac = function IonProgressBar_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || IonProgressBar)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
	};
	/** @nocollapse */
	static ɵcmp = /* @__PURE__ */ ɵɵdefineComponent({
		type: IonProgressBar,
		selectors: [["ion-progress-bar"]],
		inputs: {
			buffer: "buffer",
			color: "color",
			mode: "mode",
			reversed: "reversed",
			type: "type",
			value: "value"
		},
		standalone: false,
		ngContentSelectors: _c0$4,
		decls: 1,
		vars: 0,
		template: function IonProgressBar_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵprojectionDef();
				ɵɵprojection(0);
			}
		},
		encapsulation: 2
	});
};
IonProgressBar = __decorate([ProxyCmp({ inputs: [
	"buffer",
	"color",
	"mode",
	"reversed",
	"type",
	"value"
] })], IonProgressBar);
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonProgressBar, [{
		type: Component,
		args: [{
			selector: "ion-progress-bar",
			changeDetection: ChangeDetectionStrategy.OnPush,
			template: "<ng-content></ng-content>",
			inputs: [
				"buffer",
				"color",
				"mode",
				"reversed",
				"type",
				"value"
			],
			standalone: false
		}]
	}], () => [
		{ type: ChangeDetectorRef },
		{ type: ElementRef },
		{ type: NgZone }
	], null);
})();
var IonRadio = class IonRadio {
	z;
	el;
	ionFocus = new EventEmitter();
	ionBlur = new EventEmitter();
	constructor(c, r, z) {
		this.z = z;
		c.detach();
		this.el = r.nativeElement;
	}
	/** @nocollapse */
	static ɵfac = function IonRadio_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || IonRadio)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
	};
	/** @nocollapse */
	static ɵcmp = /* @__PURE__ */ ɵɵdefineComponent({
		type: IonRadio,
		selectors: [["ion-radio"]],
		inputs: {
			alignment: "alignment",
			color: "color",
			disabled: "disabled",
			justify: "justify",
			labelPlacement: "labelPlacement",
			mode: "mode",
			name: "name",
			value: "value"
		},
		outputs: {
			ionFocus: "ionFocus",
			ionBlur: "ionBlur"
		},
		standalone: false,
		ngContentSelectors: _c0$4,
		decls: 1,
		vars: 0,
		template: function IonRadio_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵprojectionDef();
				ɵɵprojection(0);
			}
		},
		encapsulation: 2
	});
};
IonRadio = __decorate([ProxyCmp({ inputs: [
	"alignment",
	"color",
	"disabled",
	"justify",
	"labelPlacement",
	"mode",
	"name",
	"value"
] })], IonRadio);
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonRadio, [{
		type: Component,
		args: [{
			selector: "ion-radio",
			changeDetection: ChangeDetectionStrategy.OnPush,
			template: "<ng-content></ng-content>",
			inputs: [
				"alignment",
				"color",
				"disabled",
				"justify",
				"labelPlacement",
				"mode",
				"name",
				"value"
			],
			outputs: ["ionFocus", "ionBlur"],
			standalone: false
		}]
	}], () => [
		{ type: ChangeDetectorRef },
		{ type: ElementRef },
		{ type: NgZone }
	], {
		ionFocus: [{ type: Output }],
		ionBlur: [{ type: Output }]
	});
})();
var IonRadioGroup = class IonRadioGroup {
	z;
	el;
	ionChange = new EventEmitter();
	constructor(c, r, z) {
		this.z = z;
		c.detach();
		this.el = r.nativeElement;
	}
	/** @nocollapse */
	static ɵfac = function IonRadioGroup_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || IonRadioGroup)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
	};
	/** @nocollapse */
	static ɵcmp = /* @__PURE__ */ ɵɵdefineComponent({
		type: IonRadioGroup,
		selectors: [["ion-radio-group"]],
		inputs: {
			allowEmptySelection: "allowEmptySelection",
			compareWith: "compareWith",
			errorText: "errorText",
			helperText: "helperText",
			name: "name",
			value: "value"
		},
		outputs: { ionChange: "ionChange" },
		standalone: false,
		ngContentSelectors: _c0$4,
		decls: 1,
		vars: 0,
		template: function IonRadioGroup_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵprojectionDef();
				ɵɵprojection(0);
			}
		},
		encapsulation: 2
	});
};
IonRadioGroup = __decorate([ProxyCmp({ inputs: [
	"allowEmptySelection",
	"compareWith",
	"errorText",
	"helperText",
	"name",
	"value"
] })], IonRadioGroup);
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonRadioGroup, [{
		type: Component,
		args: [{
			selector: "ion-radio-group",
			changeDetection: ChangeDetectionStrategy.OnPush,
			template: "<ng-content></ng-content>",
			inputs: [
				"allowEmptySelection",
				"compareWith",
				"errorText",
				"helperText",
				"name",
				"value"
			],
			outputs: ["ionChange"],
			standalone: false
		}]
	}], () => [
		{ type: ChangeDetectorRef },
		{ type: ElementRef },
		{ type: NgZone }
	], { ionChange: [{ type: Output }] });
})();
var IonRange = class IonRange {
	z;
	el;
	ionChange = new EventEmitter();
	ionInput = new EventEmitter();
	ionFocus = new EventEmitter();
	ionBlur = new EventEmitter();
	ionKnobMoveStart = new EventEmitter();
	ionKnobMoveEnd = new EventEmitter();
	constructor(c, r, z) {
		this.z = z;
		c.detach();
		this.el = r.nativeElement;
	}
	/** @nocollapse */
	static ɵfac = function IonRange_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || IonRange)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
	};
	/** @nocollapse */
	static ɵcmp = /* @__PURE__ */ ɵɵdefineComponent({
		type: IonRange,
		selectors: [["ion-range"]],
		inputs: {
			activeBarStart: "activeBarStart",
			color: "color",
			debounce: "debounce",
			disabled: "disabled",
			dualKnobs: "dualKnobs",
			label: "label",
			labelPlacement: "labelPlacement",
			max: "max",
			min: "min",
			mode: "mode",
			name: "name",
			pin: "pin",
			pinFormatter: "pinFormatter",
			snaps: "snaps",
			step: "step",
			ticks: "ticks",
			value: "value"
		},
		outputs: {
			ionChange: "ionChange",
			ionInput: "ionInput",
			ionFocus: "ionFocus",
			ionBlur: "ionBlur",
			ionKnobMoveStart: "ionKnobMoveStart",
			ionKnobMoveEnd: "ionKnobMoveEnd"
		},
		standalone: false,
		ngContentSelectors: _c0$4,
		decls: 1,
		vars: 0,
		template: function IonRange_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵprojectionDef();
				ɵɵprojection(0);
			}
		},
		encapsulation: 2
	});
};
IonRange = __decorate([ProxyCmp({ inputs: [
	"activeBarStart",
	"color",
	"debounce",
	"disabled",
	"dualKnobs",
	"label",
	"labelPlacement",
	"max",
	"min",
	"mode",
	"name",
	"pin",
	"pinFormatter",
	"snaps",
	"step",
	"ticks",
	"value"
] })], IonRange);
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonRange, [{
		type: Component,
		args: [{
			selector: "ion-range",
			changeDetection: ChangeDetectionStrategy.OnPush,
			template: "<ng-content></ng-content>",
			inputs: [
				"activeBarStart",
				"color",
				"debounce",
				"disabled",
				"dualKnobs",
				"label",
				"labelPlacement",
				"max",
				"min",
				"mode",
				"name",
				"pin",
				"pinFormatter",
				"snaps",
				"step",
				"ticks",
				"value"
			],
			outputs: [
				"ionChange",
				"ionInput",
				"ionFocus",
				"ionBlur",
				"ionKnobMoveStart",
				"ionKnobMoveEnd"
			],
			standalone: false
		}]
	}], () => [
		{ type: ChangeDetectorRef },
		{ type: ElementRef },
		{ type: NgZone }
	], {
		ionChange: [{ type: Output }],
		ionInput: [{ type: Output }],
		ionFocus: [{ type: Output }],
		ionBlur: [{ type: Output }],
		ionKnobMoveStart: [{ type: Output }],
		ionKnobMoveEnd: [{ type: Output }]
	});
})();
var IonRefresher = class IonRefresher {
	z;
	el;
	ionRefresh = new EventEmitter();
	ionPull = new EventEmitter();
	ionStart = new EventEmitter();
	ionPullStart = new EventEmitter();
	ionPullEnd = new EventEmitter();
	constructor(c, r, z) {
		this.z = z;
		c.detach();
		this.el = r.nativeElement;
	}
	/** @nocollapse */
	static ɵfac = function IonRefresher_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || IonRefresher)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
	};
	/** @nocollapse */
	static ɵcmp = /* @__PURE__ */ ɵɵdefineComponent({
		type: IonRefresher,
		selectors: [["ion-refresher"]],
		inputs: {
			closeDuration: "closeDuration",
			disabled: "disabled",
			mode: "mode",
			pullFactor: "pullFactor",
			pullMax: "pullMax",
			pullMin: "pullMin",
			snapbackDuration: "snapbackDuration"
		},
		outputs: {
			ionRefresh: "ionRefresh",
			ionPull: "ionPull",
			ionStart: "ionStart",
			ionPullStart: "ionPullStart",
			ionPullEnd: "ionPullEnd"
		},
		standalone: false,
		ngContentSelectors: _c0$4,
		decls: 1,
		vars: 0,
		template: function IonRefresher_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵprojectionDef();
				ɵɵprojection(0);
			}
		},
		encapsulation: 2
	});
};
IonRefresher = __decorate([ProxyCmp({
	inputs: [
		"closeDuration",
		"disabled",
		"mode",
		"pullFactor",
		"pullMax",
		"pullMin",
		"snapbackDuration"
	],
	methods: [
		"complete",
		"cancel",
		"getProgress"
	]
})], IonRefresher);
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonRefresher, [{
		type: Component,
		args: [{
			selector: "ion-refresher",
			changeDetection: ChangeDetectionStrategy.OnPush,
			template: "<ng-content></ng-content>",
			inputs: [
				"closeDuration",
				"disabled",
				"mode",
				"pullFactor",
				"pullMax",
				"pullMin",
				"snapbackDuration"
			],
			outputs: [
				"ionRefresh",
				"ionPull",
				"ionStart",
				"ionPullStart",
				"ionPullEnd"
			],
			standalone: false
		}]
	}], () => [
		{ type: ChangeDetectorRef },
		{ type: ElementRef },
		{ type: NgZone }
	], {
		ionRefresh: [{ type: Output }],
		ionPull: [{ type: Output }],
		ionStart: [{ type: Output }],
		ionPullStart: [{ type: Output }],
		ionPullEnd: [{ type: Output }]
	});
})();
var IonRefresherContent = class IonRefresherContent {
	z;
	el;
	constructor(c, r, z) {
		this.z = z;
		c.detach();
		this.el = r.nativeElement;
	}
	/** @nocollapse */
	static ɵfac = function IonRefresherContent_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || IonRefresherContent)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
	};
	/** @nocollapse */
	static ɵcmp = /* @__PURE__ */ ɵɵdefineComponent({
		type: IonRefresherContent,
		selectors: [["ion-refresher-content"]],
		inputs: {
			pullingIcon: "pullingIcon",
			pullingText: "pullingText",
			refreshingSpinner: "refreshingSpinner",
			refreshingText: "refreshingText"
		},
		standalone: false,
		ngContentSelectors: _c0$4,
		decls: 1,
		vars: 0,
		template: function IonRefresherContent_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵprojectionDef();
				ɵɵprojection(0);
			}
		},
		encapsulation: 2
	});
};
IonRefresherContent = __decorate([ProxyCmp({ inputs: [
	"pullingIcon",
	"pullingText",
	"refreshingSpinner",
	"refreshingText"
] })], IonRefresherContent);
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonRefresherContent, [{
		type: Component,
		args: [{
			selector: "ion-refresher-content",
			changeDetection: ChangeDetectionStrategy.OnPush,
			template: "<ng-content></ng-content>",
			inputs: [
				"pullingIcon",
				"pullingText",
				"refreshingSpinner",
				"refreshingText"
			],
			standalone: false
		}]
	}], () => [
		{ type: ChangeDetectorRef },
		{ type: ElementRef },
		{ type: NgZone }
	], null);
})();
var IonReorder = class IonReorder {
	z;
	el;
	constructor(c, r, z) {
		this.z = z;
		c.detach();
		this.el = r.nativeElement;
	}
	/** @nocollapse */
	static ɵfac = function IonReorder_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || IonReorder)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
	};
	/** @nocollapse */
	static ɵcmp = /* @__PURE__ */ ɵɵdefineComponent({
		type: IonReorder,
		selectors: [["ion-reorder"]],
		standalone: false,
		ngContentSelectors: _c0$4,
		decls: 1,
		vars: 0,
		template: function IonReorder_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵprojectionDef();
				ɵɵprojection(0);
			}
		},
		encapsulation: 2
	});
};
IonReorder = __decorate([ProxyCmp({})], IonReorder);
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonReorder, [{
		type: Component,
		args: [{
			selector: "ion-reorder",
			changeDetection: ChangeDetectionStrategy.OnPush,
			template: "<ng-content></ng-content>",
			inputs: [],
			standalone: false
		}]
	}], () => [
		{ type: ChangeDetectorRef },
		{ type: ElementRef },
		{ type: NgZone }
	], null);
})();
var IonReorderGroup = class IonReorderGroup {
	z;
	el;
	ionItemReorder = new EventEmitter();
	ionReorderStart = new EventEmitter();
	ionReorderMove = new EventEmitter();
	ionReorderEnd = new EventEmitter();
	constructor(c, r, z) {
		this.z = z;
		c.detach();
		this.el = r.nativeElement;
	}
	/** @nocollapse */
	static ɵfac = function IonReorderGroup_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || IonReorderGroup)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
	};
	/** @nocollapse */
	static ɵcmp = /* @__PURE__ */ ɵɵdefineComponent({
		type: IonReorderGroup,
		selectors: [["ion-reorder-group"]],
		inputs: { disabled: "disabled" },
		outputs: {
			ionItemReorder: "ionItemReorder",
			ionReorderStart: "ionReorderStart",
			ionReorderMove: "ionReorderMove",
			ionReorderEnd: "ionReorderEnd"
		},
		standalone: false,
		ngContentSelectors: _c0$4,
		decls: 1,
		vars: 0,
		template: function IonReorderGroup_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵprojectionDef();
				ɵɵprojection(0);
			}
		},
		encapsulation: 2
	});
};
IonReorderGroup = __decorate([ProxyCmp({
	inputs: ["disabled"],
	methods: ["complete"]
})], IonReorderGroup);
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonReorderGroup, [{
		type: Component,
		args: [{
			selector: "ion-reorder-group",
			changeDetection: ChangeDetectionStrategy.OnPush,
			template: "<ng-content></ng-content>",
			inputs: ["disabled"],
			outputs: [
				"ionItemReorder",
				"ionReorderStart",
				"ionReorderMove",
				"ionReorderEnd"
			],
			standalone: false
		}]
	}], () => [
		{ type: ChangeDetectorRef },
		{ type: ElementRef },
		{ type: NgZone }
	], {
		ionItemReorder: [{ type: Output }],
		ionReorderStart: [{ type: Output }],
		ionReorderMove: [{ type: Output }],
		ionReorderEnd: [{ type: Output }]
	});
})();
var IonRippleEffect = class IonRippleEffect {
	z;
	el;
	constructor(c, r, z) {
		this.z = z;
		c.detach();
		this.el = r.nativeElement;
	}
	/** @nocollapse */
	static ɵfac = function IonRippleEffect_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || IonRippleEffect)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
	};
	/** @nocollapse */
	static ɵcmp = /* @__PURE__ */ ɵɵdefineComponent({
		type: IonRippleEffect,
		selectors: [["ion-ripple-effect"]],
		inputs: { type: "type" },
		standalone: false,
		ngContentSelectors: _c0$4,
		decls: 1,
		vars: 0,
		template: function IonRippleEffect_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵprojectionDef();
				ɵɵprojection(0);
			}
		},
		encapsulation: 2
	});
};
IonRippleEffect = __decorate([ProxyCmp({
	inputs: ["type"],
	methods: ["addRipple"]
})], IonRippleEffect);
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonRippleEffect, [{
		type: Component,
		args: [{
			selector: "ion-ripple-effect",
			changeDetection: ChangeDetectionStrategy.OnPush,
			template: "<ng-content></ng-content>",
			inputs: ["type"],
			standalone: false
		}]
	}], () => [
		{ type: ChangeDetectorRef },
		{ type: ElementRef },
		{ type: NgZone }
	], null);
})();
var IonRow = class IonRow {
	z;
	el;
	constructor(c, r, z) {
		this.z = z;
		c.detach();
		this.el = r.nativeElement;
	}
	/** @nocollapse */
	static ɵfac = function IonRow_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || IonRow)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
	};
	/** @nocollapse */
	static ɵcmp = /* @__PURE__ */ ɵɵdefineComponent({
		type: IonRow,
		selectors: [["ion-row"]],
		standalone: false,
		ngContentSelectors: _c0$4,
		decls: 1,
		vars: 0,
		template: function IonRow_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵprojectionDef();
				ɵɵprojection(0);
			}
		},
		encapsulation: 2
	});
};
IonRow = __decorate([ProxyCmp({})], IonRow);
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonRow, [{
		type: Component,
		args: [{
			selector: "ion-row",
			changeDetection: ChangeDetectionStrategy.OnPush,
			template: "<ng-content></ng-content>",
			inputs: [],
			standalone: false
		}]
	}], () => [
		{ type: ChangeDetectorRef },
		{ type: ElementRef },
		{ type: NgZone }
	], null);
})();
var IonSearchbar = class IonSearchbar {
	z;
	el;
	ionInput = new EventEmitter();
	ionChange = new EventEmitter();
	ionCancel = new EventEmitter();
	ionClear = new EventEmitter();
	ionBlur = new EventEmitter();
	ionFocus = new EventEmitter();
	constructor(c, r, z) {
		this.z = z;
		c.detach();
		this.el = r.nativeElement;
	}
	/** @nocollapse */
	static ɵfac = function IonSearchbar_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || IonSearchbar)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
	};
	/** @nocollapse */
	static ɵcmp = /* @__PURE__ */ ɵɵdefineComponent({
		type: IonSearchbar,
		selectors: [["ion-searchbar"]],
		inputs: {
			animated: "animated",
			autocapitalize: "autocapitalize",
			autocomplete: "autocomplete",
			autocorrect: "autocorrect",
			cancelButtonIcon: "cancelButtonIcon",
			cancelButtonText: "cancelButtonText",
			clearIcon: "clearIcon",
			color: "color",
			debounce: "debounce",
			disabled: "disabled",
			enterkeyhint: "enterkeyhint",
			inputmode: "inputmode",
			maxlength: "maxlength",
			minlength: "minlength",
			mode: "mode",
			name: "name",
			placeholder: "placeholder",
			searchIcon: "searchIcon",
			showCancelButton: "showCancelButton",
			showClearButton: "showClearButton",
			spellcheck: "spellcheck",
			type: "type",
			value: "value"
		},
		outputs: {
			ionInput: "ionInput",
			ionChange: "ionChange",
			ionCancel: "ionCancel",
			ionClear: "ionClear",
			ionBlur: "ionBlur",
			ionFocus: "ionFocus"
		},
		standalone: false,
		ngContentSelectors: _c0$4,
		decls: 1,
		vars: 0,
		template: function IonSearchbar_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵprojectionDef();
				ɵɵprojection(0);
			}
		},
		encapsulation: 2
	});
};
IonSearchbar = __decorate([ProxyCmp({
	inputs: [
		"animated",
		"autocapitalize",
		"autocomplete",
		"autocorrect",
		"cancelButtonIcon",
		"cancelButtonText",
		"clearIcon",
		"color",
		"debounce",
		"disabled",
		"enterkeyhint",
		"inputmode",
		"maxlength",
		"minlength",
		"mode",
		"name",
		"placeholder",
		"searchIcon",
		"showCancelButton",
		"showClearButton",
		"spellcheck",
		"type",
		"value"
	],
	methods: ["setFocus", "getInputElement"]
})], IonSearchbar);
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonSearchbar, [{
		type: Component,
		args: [{
			selector: "ion-searchbar",
			changeDetection: ChangeDetectionStrategy.OnPush,
			template: "<ng-content></ng-content>",
			inputs: [
				"animated",
				"autocapitalize",
				"autocomplete",
				"autocorrect",
				"cancelButtonIcon",
				"cancelButtonText",
				"clearIcon",
				"color",
				"debounce",
				"disabled",
				"enterkeyhint",
				"inputmode",
				"maxlength",
				"minlength",
				"mode",
				"name",
				"placeholder",
				"searchIcon",
				"showCancelButton",
				"showClearButton",
				"spellcheck",
				"type",
				"value"
			],
			outputs: [
				"ionInput",
				"ionChange",
				"ionCancel",
				"ionClear",
				"ionBlur",
				"ionFocus"
			],
			standalone: false
		}]
	}], () => [
		{ type: ChangeDetectorRef },
		{ type: ElementRef },
		{ type: NgZone }
	], {
		ionInput: [{ type: Output }],
		ionChange: [{ type: Output }],
		ionCancel: [{ type: Output }],
		ionClear: [{ type: Output }],
		ionBlur: [{ type: Output }],
		ionFocus: [{ type: Output }]
	});
})();
var IonSegment = class IonSegment {
	z;
	el;
	ionChange = new EventEmitter();
	constructor(c, r, z) {
		this.z = z;
		c.detach();
		this.el = r.nativeElement;
	}
	/** @nocollapse */
	static ɵfac = function IonSegment_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || IonSegment)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
	};
	/** @nocollapse */
	static ɵcmp = /* @__PURE__ */ ɵɵdefineComponent({
		type: IonSegment,
		selectors: [["ion-segment"]],
		inputs: {
			color: "color",
			disabled: "disabled",
			mode: "mode",
			scrollable: "scrollable",
			selectOnFocus: "selectOnFocus",
			swipeGesture: "swipeGesture",
			value: "value"
		},
		outputs: { ionChange: "ionChange" },
		standalone: false,
		ngContentSelectors: _c0$4,
		decls: 1,
		vars: 0,
		template: function IonSegment_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵprojectionDef();
				ɵɵprojection(0);
			}
		},
		encapsulation: 2
	});
};
IonSegment = __decorate([ProxyCmp({ inputs: [
	"color",
	"disabled",
	"mode",
	"scrollable",
	"selectOnFocus",
	"swipeGesture",
	"value"
] })], IonSegment);
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonSegment, [{
		type: Component,
		args: [{
			selector: "ion-segment",
			changeDetection: ChangeDetectionStrategy.OnPush,
			template: "<ng-content></ng-content>",
			inputs: [
				"color",
				"disabled",
				"mode",
				"scrollable",
				"selectOnFocus",
				"swipeGesture",
				"value"
			],
			outputs: ["ionChange"],
			standalone: false
		}]
	}], () => [
		{ type: ChangeDetectorRef },
		{ type: ElementRef },
		{ type: NgZone }
	], { ionChange: [{ type: Output }] });
})();
var IonSegmentButton = class IonSegmentButton {
	z;
	el;
	constructor(c, r, z) {
		this.z = z;
		c.detach();
		this.el = r.nativeElement;
	}
	/** @nocollapse */
	static ɵfac = function IonSegmentButton_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || IonSegmentButton)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
	};
	/** @nocollapse */
	static ɵcmp = /* @__PURE__ */ ɵɵdefineComponent({
		type: IonSegmentButton,
		selectors: [["ion-segment-button"]],
		inputs: {
			contentId: "contentId",
			disabled: "disabled",
			layout: "layout",
			mode: "mode",
			type: "type",
			value: "value"
		},
		standalone: false,
		ngContentSelectors: _c0$4,
		decls: 1,
		vars: 0,
		template: function IonSegmentButton_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵprojectionDef();
				ɵɵprojection(0);
			}
		},
		encapsulation: 2
	});
};
IonSegmentButton = __decorate([ProxyCmp({ inputs: [
	"contentId",
	"disabled",
	"layout",
	"mode",
	"type",
	"value"
] })], IonSegmentButton);
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonSegmentButton, [{
		type: Component,
		args: [{
			selector: "ion-segment-button",
			changeDetection: ChangeDetectionStrategy.OnPush,
			template: "<ng-content></ng-content>",
			inputs: [
				"contentId",
				"disabled",
				"layout",
				"mode",
				"type",
				"value"
			],
			standalone: false
		}]
	}], () => [
		{ type: ChangeDetectorRef },
		{ type: ElementRef },
		{ type: NgZone }
	], null);
})();
var IonSegmentContent = class IonSegmentContent {
	z;
	el;
	constructor(c, r, z) {
		this.z = z;
		c.detach();
		this.el = r.nativeElement;
	}
	/** @nocollapse */
	static ɵfac = function IonSegmentContent_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || IonSegmentContent)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
	};
	/** @nocollapse */
	static ɵcmp = /* @__PURE__ */ ɵɵdefineComponent({
		type: IonSegmentContent,
		selectors: [["ion-segment-content"]],
		standalone: false,
		ngContentSelectors: _c0$4,
		decls: 1,
		vars: 0,
		template: function IonSegmentContent_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵprojectionDef();
				ɵɵprojection(0);
			}
		},
		encapsulation: 2
	});
};
IonSegmentContent = __decorate([ProxyCmp({})], IonSegmentContent);
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonSegmentContent, [{
		type: Component,
		args: [{
			selector: "ion-segment-content",
			changeDetection: ChangeDetectionStrategy.OnPush,
			template: "<ng-content></ng-content>",
			inputs: [],
			standalone: false
		}]
	}], () => [
		{ type: ChangeDetectorRef },
		{ type: ElementRef },
		{ type: NgZone }
	], null);
})();
var IonSegmentView = class IonSegmentView {
	z;
	el;
	ionSegmentViewScroll = new EventEmitter();
	constructor(c, r, z) {
		this.z = z;
		c.detach();
		this.el = r.nativeElement;
	}
	/** @nocollapse */
	static ɵfac = function IonSegmentView_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || IonSegmentView)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
	};
	/** @nocollapse */
	static ɵcmp = /* @__PURE__ */ ɵɵdefineComponent({
		type: IonSegmentView,
		selectors: [["ion-segment-view"]],
		inputs: {
			disabled: "disabled",
			swipeGesture: "swipeGesture"
		},
		outputs: { ionSegmentViewScroll: "ionSegmentViewScroll" },
		standalone: false,
		ngContentSelectors: _c0$4,
		decls: 1,
		vars: 0,
		template: function IonSegmentView_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵprojectionDef();
				ɵɵprojection(0);
			}
		},
		encapsulation: 2
	});
};
IonSegmentView = __decorate([ProxyCmp({ inputs: ["disabled", "swipeGesture"] })], IonSegmentView);
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonSegmentView, [{
		type: Component,
		args: [{
			selector: "ion-segment-view",
			changeDetection: ChangeDetectionStrategy.OnPush,
			template: "<ng-content></ng-content>",
			inputs: ["disabled", "swipeGesture"],
			outputs: ["ionSegmentViewScroll"],
			standalone: false
		}]
	}], () => [
		{ type: ChangeDetectorRef },
		{ type: ElementRef },
		{ type: NgZone }
	], { ionSegmentViewScroll: [{ type: Output }] });
})();
var IonSelect = class IonSelect {
	z;
	el;
	ionChange = new EventEmitter();
	ionCancel = new EventEmitter();
	ionDismiss = new EventEmitter();
	ionFocus = new EventEmitter();
	ionBlur = new EventEmitter();
	constructor(c, r, z) {
		this.z = z;
		c.detach();
		this.el = r.nativeElement;
	}
	/** @nocollapse */
	static ɵfac = function IonSelect_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || IonSelect)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
	};
	/** @nocollapse */
	static ɵcmp = /* @__PURE__ */ ɵɵdefineComponent({
		type: IonSelect,
		selectors: [["ion-select"]],
		inputs: {
			cancelText: "cancelText",
			color: "color",
			compareWith: "compareWith",
			disabled: "disabled",
			errorText: "errorText",
			expandedIcon: "expandedIcon",
			fill: "fill",
			helperText: "helperText",
			interface: "interface",
			interfaceOptions: "interfaceOptions",
			justify: "justify",
			label: "label",
			labelPlacement: "labelPlacement",
			mode: "mode",
			multiple: "multiple",
			name: "name",
			okText: "okText",
			placeholder: "placeholder",
			required: "required",
			selectedText: "selectedText",
			shape: "shape",
			toggleIcon: "toggleIcon",
			value: "value"
		},
		outputs: {
			ionChange: "ionChange",
			ionCancel: "ionCancel",
			ionDismiss: "ionDismiss",
			ionFocus: "ionFocus",
			ionBlur: "ionBlur"
		},
		standalone: false,
		ngContentSelectors: _c0$4,
		decls: 1,
		vars: 0,
		template: function IonSelect_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵprojectionDef();
				ɵɵprojection(0);
			}
		},
		encapsulation: 2
	});
};
IonSelect = __decorate([ProxyCmp({
	inputs: [
		"cancelText",
		"color",
		"compareWith",
		"disabled",
		"errorText",
		"expandedIcon",
		"fill",
		"helperText",
		"interface",
		"interfaceOptions",
		"justify",
		"label",
		"labelPlacement",
		"mode",
		"multiple",
		"name",
		"okText",
		"placeholder",
		"required",
		"selectedText",
		"shape",
		"toggleIcon",
		"value"
	],
	methods: ["open"]
})], IonSelect);
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonSelect, [{
		type: Component,
		args: [{
			selector: "ion-select",
			changeDetection: ChangeDetectionStrategy.OnPush,
			template: "<ng-content></ng-content>",
			inputs: [
				"cancelText",
				"color",
				"compareWith",
				"disabled",
				"errorText",
				"expandedIcon",
				"fill",
				"helperText",
				"interface",
				"interfaceOptions",
				"justify",
				"label",
				"labelPlacement",
				"mode",
				"multiple",
				"name",
				"okText",
				"placeholder",
				"required",
				"selectedText",
				"shape",
				"toggleIcon",
				"value"
			],
			outputs: [
				"ionChange",
				"ionCancel",
				"ionDismiss",
				"ionFocus",
				"ionBlur"
			],
			standalone: false
		}]
	}], () => [
		{ type: ChangeDetectorRef },
		{ type: ElementRef },
		{ type: NgZone }
	], {
		ionChange: [{ type: Output }],
		ionCancel: [{ type: Output }],
		ionDismiss: [{ type: Output }],
		ionFocus: [{ type: Output }],
		ionBlur: [{ type: Output }]
	});
})();
var IonSelectModal = class IonSelectModal {
	z;
	el;
	constructor(c, r, z) {
		this.z = z;
		c.detach();
		this.el = r.nativeElement;
	}
	/** @nocollapse */
	static ɵfac = function IonSelectModal_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || IonSelectModal)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
	};
	/** @nocollapse */
	static ɵcmp = /* @__PURE__ */ ɵɵdefineComponent({
		type: IonSelectModal,
		selectors: [["ion-select-modal"]],
		inputs: {
			cancelText: "cancelText",
			header: "header",
			multiple: "multiple",
			options: "options"
		},
		standalone: false,
		ngContentSelectors: _c0$4,
		decls: 1,
		vars: 0,
		template: function IonSelectModal_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵprojectionDef();
				ɵɵprojection(0);
			}
		},
		encapsulation: 2
	});
};
IonSelectModal = __decorate([ProxyCmp({ inputs: [
	"cancelText",
	"header",
	"multiple",
	"options"
] })], IonSelectModal);
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonSelectModal, [{
		type: Component,
		args: [{
			selector: "ion-select-modal",
			changeDetection: ChangeDetectionStrategy.OnPush,
			template: "<ng-content></ng-content>",
			inputs: [
				"cancelText",
				"header",
				"multiple",
				"options"
			],
			standalone: false
		}]
	}], () => [
		{ type: ChangeDetectorRef },
		{ type: ElementRef },
		{ type: NgZone }
	], null);
})();
var IonSelectOption = class IonSelectOption {
	z;
	el;
	constructor(c, r, z) {
		this.z = z;
		c.detach();
		this.el = r.nativeElement;
	}
	/** @nocollapse */
	static ɵfac = function IonSelectOption_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || IonSelectOption)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
	};
	/** @nocollapse */
	static ɵcmp = /* @__PURE__ */ ɵɵdefineComponent({
		type: IonSelectOption,
		selectors: [["ion-select-option"]],
		inputs: {
			description: "description",
			disabled: "disabled",
			justify: "justify",
			labelPlacement: "labelPlacement",
			mode: "mode",
			value: "value"
		},
		standalone: false,
		ngContentSelectors: _c0$4,
		decls: 1,
		vars: 0,
		template: function IonSelectOption_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵprojectionDef();
				ɵɵprojection(0);
			}
		},
		encapsulation: 2
	});
};
IonSelectOption = __decorate([ProxyCmp({ inputs: [
	"description",
	"disabled",
	"justify",
	"labelPlacement",
	"mode",
	"value"
] })], IonSelectOption);
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonSelectOption, [{
		type: Component,
		args: [{
			selector: "ion-select-option",
			changeDetection: ChangeDetectionStrategy.OnPush,
			template: "<ng-content></ng-content>",
			inputs: [
				"description",
				"disabled",
				"justify",
				"labelPlacement",
				"mode",
				"value"
			],
			standalone: false
		}]
	}], () => [
		{ type: ChangeDetectorRef },
		{ type: ElementRef },
		{ type: NgZone }
	], null);
})();
var IonSkeletonText = class IonSkeletonText {
	z;
	el;
	constructor(c, r, z) {
		this.z = z;
		c.detach();
		this.el = r.nativeElement;
	}
	/** @nocollapse */
	static ɵfac = function IonSkeletonText_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || IonSkeletonText)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
	};
	/** @nocollapse */
	static ɵcmp = /* @__PURE__ */ ɵɵdefineComponent({
		type: IonSkeletonText,
		selectors: [["ion-skeleton-text"]],
		inputs: { animated: "animated" },
		standalone: false,
		ngContentSelectors: _c0$4,
		decls: 1,
		vars: 0,
		template: function IonSkeletonText_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵprojectionDef();
				ɵɵprojection(0);
			}
		},
		encapsulation: 2
	});
};
IonSkeletonText = __decorate([ProxyCmp({ inputs: ["animated"] })], IonSkeletonText);
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonSkeletonText, [{
		type: Component,
		args: [{
			selector: "ion-skeleton-text",
			changeDetection: ChangeDetectionStrategy.OnPush,
			template: "<ng-content></ng-content>",
			inputs: ["animated"],
			standalone: false
		}]
	}], () => [
		{ type: ChangeDetectorRef },
		{ type: ElementRef },
		{ type: NgZone }
	], null);
})();
var IonSpinner = class IonSpinner {
	z;
	el;
	constructor(c, r, z) {
		this.z = z;
		c.detach();
		this.el = r.nativeElement;
	}
	/** @nocollapse */
	static ɵfac = function IonSpinner_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || IonSpinner)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
	};
	/** @nocollapse */
	static ɵcmp = /* @__PURE__ */ ɵɵdefineComponent({
		type: IonSpinner,
		selectors: [["ion-spinner"]],
		inputs: {
			color: "color",
			duration: "duration",
			name: "name",
			paused: "paused"
		},
		standalone: false,
		ngContentSelectors: _c0$4,
		decls: 1,
		vars: 0,
		template: function IonSpinner_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵprojectionDef();
				ɵɵprojection(0);
			}
		},
		encapsulation: 2
	});
};
IonSpinner = __decorate([ProxyCmp({ inputs: [
	"color",
	"duration",
	"name",
	"paused"
] })], IonSpinner);
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonSpinner, [{
		type: Component,
		args: [{
			selector: "ion-spinner",
			changeDetection: ChangeDetectionStrategy.OnPush,
			template: "<ng-content></ng-content>",
			inputs: [
				"color",
				"duration",
				"name",
				"paused"
			],
			standalone: false
		}]
	}], () => [
		{ type: ChangeDetectorRef },
		{ type: ElementRef },
		{ type: NgZone }
	], null);
})();
var IonSplitPane = class IonSplitPane {
	z;
	el;
	ionSplitPaneVisible = new EventEmitter();
	constructor(c, r, z) {
		this.z = z;
		c.detach();
		this.el = r.nativeElement;
	}
	/** @nocollapse */
	static ɵfac = function IonSplitPane_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || IonSplitPane)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
	};
	/** @nocollapse */
	static ɵcmp = /* @__PURE__ */ ɵɵdefineComponent({
		type: IonSplitPane,
		selectors: [["ion-split-pane"]],
		inputs: {
			contentId: "contentId",
			disabled: "disabled",
			when: "when"
		},
		outputs: { ionSplitPaneVisible: "ionSplitPaneVisible" },
		standalone: false,
		ngContentSelectors: _c0$4,
		decls: 1,
		vars: 0,
		template: function IonSplitPane_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵprojectionDef();
				ɵɵprojection(0);
			}
		},
		encapsulation: 2
	});
};
IonSplitPane = __decorate([ProxyCmp({ inputs: [
	"contentId",
	"disabled",
	"when"
] })], IonSplitPane);
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonSplitPane, [{
		type: Component,
		args: [{
			selector: "ion-split-pane",
			changeDetection: ChangeDetectionStrategy.OnPush,
			template: "<ng-content></ng-content>",
			inputs: [
				"contentId",
				"disabled",
				"when"
			],
			outputs: ["ionSplitPaneVisible"],
			standalone: false
		}]
	}], () => [
		{ type: ChangeDetectorRef },
		{ type: ElementRef },
		{ type: NgZone }
	], { ionSplitPaneVisible: [{ type: Output }] });
})();
var IonTab = class IonTab {
	z;
	el;
	constructor(c, r, z) {
		this.z = z;
		c.detach();
		this.el = r.nativeElement;
	}
	/** @nocollapse */
	static ɵfac = function IonTab_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || IonTab)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
	};
	/** @nocollapse */
	static ɵcmp = /* @__PURE__ */ ɵɵdefineComponent({
		type: IonTab,
		selectors: [["ion-tab"]],
		inputs: {
			component: "component",
			tab: "tab"
		},
		standalone: false,
		ngContentSelectors: _c0$4,
		decls: 1,
		vars: 0,
		template: function IonTab_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵprojectionDef();
				ɵɵprojection(0);
			}
		},
		encapsulation: 2
	});
};
IonTab = __decorate([ProxyCmp({
	inputs: ["component", "tab"],
	methods: ["setActive"]
})], IonTab);
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonTab, [{
		type: Component,
		args: [{
			selector: "ion-tab",
			changeDetection: ChangeDetectionStrategy.OnPush,
			template: "<ng-content></ng-content>",
			inputs: ["component", {
				name: "tab",
				required: true
			}],
			standalone: false
		}]
	}], () => [
		{ type: ChangeDetectorRef },
		{ type: ElementRef },
		{ type: NgZone }
	], null);
})();
var IonTabBar = class IonTabBar {
	z;
	el;
	constructor(c, r, z) {
		this.z = z;
		c.detach();
		this.el = r.nativeElement;
	}
	/** @nocollapse */
	static ɵfac = function IonTabBar_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || IonTabBar)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
	};
	/** @nocollapse */
	static ɵcmp = /* @__PURE__ */ ɵɵdefineComponent({
		type: IonTabBar,
		selectors: [["ion-tab-bar"]],
		inputs: {
			color: "color",
			mode: "mode",
			selectedTab: "selectedTab",
			translucent: "translucent"
		},
		standalone: false,
		ngContentSelectors: _c0$4,
		decls: 1,
		vars: 0,
		template: function IonTabBar_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵprojectionDef();
				ɵɵprojection(0);
			}
		},
		encapsulation: 2
	});
};
IonTabBar = __decorate([ProxyCmp({ inputs: [
	"color",
	"mode",
	"selectedTab",
	"translucent"
] })], IonTabBar);
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonTabBar, [{
		type: Component,
		args: [{
			selector: "ion-tab-bar",
			changeDetection: ChangeDetectionStrategy.OnPush,
			template: "<ng-content></ng-content>",
			inputs: [
				"color",
				"mode",
				"selectedTab",
				"translucent"
			],
			standalone: false
		}]
	}], () => [
		{ type: ChangeDetectorRef },
		{ type: ElementRef },
		{ type: NgZone }
	], null);
})();
var IonTabButton = class IonTabButton {
	z;
	el;
	constructor(c, r, z) {
		this.z = z;
		c.detach();
		this.el = r.nativeElement;
	}
	/** @nocollapse */
	static ɵfac = function IonTabButton_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || IonTabButton)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
	};
	/** @nocollapse */
	static ɵcmp = /* @__PURE__ */ ɵɵdefineComponent({
		type: IonTabButton,
		selectors: [["ion-tab-button"]],
		inputs: {
			disabled: "disabled",
			download: "download",
			href: "href",
			layout: "layout",
			mode: "mode",
			rel: "rel",
			selected: "selected",
			tab: "tab",
			target: "target"
		},
		standalone: false,
		ngContentSelectors: _c0$4,
		decls: 1,
		vars: 0,
		template: function IonTabButton_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵprojectionDef();
				ɵɵprojection(0);
			}
		},
		encapsulation: 2
	});
};
IonTabButton = __decorate([ProxyCmp({ inputs: [
	"disabled",
	"download",
	"href",
	"layout",
	"mode",
	"rel",
	"selected",
	"tab",
	"target"
] })], IonTabButton);
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonTabButton, [{
		type: Component,
		args: [{
			selector: "ion-tab-button",
			changeDetection: ChangeDetectionStrategy.OnPush,
			template: "<ng-content></ng-content>",
			inputs: [
				"disabled",
				"download",
				"href",
				"layout",
				"mode",
				"rel",
				"selected",
				"tab",
				"target"
			],
			standalone: false
		}]
	}], () => [
		{ type: ChangeDetectorRef },
		{ type: ElementRef },
		{ type: NgZone }
	], null);
})();
var IonText = class IonText {
	z;
	el;
	constructor(c, r, z) {
		this.z = z;
		c.detach();
		this.el = r.nativeElement;
	}
	/** @nocollapse */
	static ɵfac = function IonText_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || IonText)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
	};
	/** @nocollapse */
	static ɵcmp = /* @__PURE__ */ ɵɵdefineComponent({
		type: IonText,
		selectors: [["ion-text"]],
		inputs: {
			color: "color",
			mode: "mode"
		},
		standalone: false,
		ngContentSelectors: _c0$4,
		decls: 1,
		vars: 0,
		template: function IonText_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵprojectionDef();
				ɵɵprojection(0);
			}
		},
		encapsulation: 2
	});
};
IonText = __decorate([ProxyCmp({ inputs: ["color", "mode"] })], IonText);
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonText, [{
		type: Component,
		args: [{
			selector: "ion-text",
			changeDetection: ChangeDetectionStrategy.OnPush,
			template: "<ng-content></ng-content>",
			inputs: ["color", "mode"],
			standalone: false
		}]
	}], () => [
		{ type: ChangeDetectorRef },
		{ type: ElementRef },
		{ type: NgZone }
	], null);
})();
var IonTextarea = class IonTextarea {
	z;
	el;
	ionChange = new EventEmitter();
	ionInput = new EventEmitter();
	ionBlur = new EventEmitter();
	ionFocus = new EventEmitter();
	constructor(c, r, z) {
		this.z = z;
		c.detach();
		this.el = r.nativeElement;
	}
	/** @nocollapse */
	static ɵfac = function IonTextarea_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || IonTextarea)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
	};
	/** @nocollapse */
	static ɵcmp = /* @__PURE__ */ ɵɵdefineComponent({
		type: IonTextarea,
		selectors: [["ion-textarea"]],
		inputs: {
			autoGrow: "autoGrow",
			autocapitalize: "autocapitalize",
			autofocus: "autofocus",
			clearOnEdit: "clearOnEdit",
			color: "color",
			cols: "cols",
			counter: "counter",
			counterFormatter: "counterFormatter",
			debounce: "debounce",
			disabled: "disabled",
			enterkeyhint: "enterkeyhint",
			errorText: "errorText",
			fill: "fill",
			helperText: "helperText",
			inputmode: "inputmode",
			label: "label",
			labelPlacement: "labelPlacement",
			maxlength: "maxlength",
			minlength: "minlength",
			mode: "mode",
			name: "name",
			placeholder: "placeholder",
			readonly: "readonly",
			required: "required",
			rows: "rows",
			shape: "shape",
			spellcheck: "spellcheck",
			value: "value",
			wrap: "wrap"
		},
		outputs: {
			ionChange: "ionChange",
			ionInput: "ionInput",
			ionBlur: "ionBlur",
			ionFocus: "ionFocus"
		},
		standalone: false,
		ngContentSelectors: _c0$4,
		decls: 1,
		vars: 0,
		template: function IonTextarea_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵprojectionDef();
				ɵɵprojection(0);
			}
		},
		encapsulation: 2
	});
};
IonTextarea = __decorate([ProxyCmp({
	inputs: [
		"autoGrow",
		"autocapitalize",
		"autofocus",
		"clearOnEdit",
		"color",
		"cols",
		"counter",
		"counterFormatter",
		"debounce",
		"disabled",
		"enterkeyhint",
		"errorText",
		"fill",
		"helperText",
		"inputmode",
		"label",
		"labelPlacement",
		"maxlength",
		"minlength",
		"mode",
		"name",
		"placeholder",
		"readonly",
		"required",
		"rows",
		"shape",
		"spellcheck",
		"value",
		"wrap"
	],
	methods: ["setFocus", "getInputElement"]
})], IonTextarea);
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonTextarea, [{
		type: Component,
		args: [{
			selector: "ion-textarea",
			changeDetection: ChangeDetectionStrategy.OnPush,
			template: "<ng-content></ng-content>",
			inputs: [
				"autoGrow",
				"autocapitalize",
				"autofocus",
				"clearOnEdit",
				"color",
				"cols",
				"counter",
				"counterFormatter",
				"debounce",
				"disabled",
				"enterkeyhint",
				"errorText",
				"fill",
				"helperText",
				"inputmode",
				"label",
				"labelPlacement",
				"maxlength",
				"minlength",
				"mode",
				"name",
				"placeholder",
				"readonly",
				"required",
				"rows",
				"shape",
				"spellcheck",
				"value",
				"wrap"
			],
			outputs: [
				"ionChange",
				"ionInput",
				"ionBlur",
				"ionFocus"
			],
			standalone: false
		}]
	}], () => [
		{ type: ChangeDetectorRef },
		{ type: ElementRef },
		{ type: NgZone }
	], {
		ionChange: [{ type: Output }],
		ionInput: [{ type: Output }],
		ionBlur: [{ type: Output }],
		ionFocus: [{ type: Output }]
	});
})();
var IonThumbnail = class IonThumbnail {
	z;
	el;
	constructor(c, r, z) {
		this.z = z;
		c.detach();
		this.el = r.nativeElement;
	}
	/** @nocollapse */
	static ɵfac = function IonThumbnail_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || IonThumbnail)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
	};
	/** @nocollapse */
	static ɵcmp = /* @__PURE__ */ ɵɵdefineComponent({
		type: IonThumbnail,
		selectors: [["ion-thumbnail"]],
		standalone: false,
		ngContentSelectors: _c0$4,
		decls: 1,
		vars: 0,
		template: function IonThumbnail_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵprojectionDef();
				ɵɵprojection(0);
			}
		},
		encapsulation: 2
	});
};
IonThumbnail = __decorate([ProxyCmp({})], IonThumbnail);
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonThumbnail, [{
		type: Component,
		args: [{
			selector: "ion-thumbnail",
			changeDetection: ChangeDetectionStrategy.OnPush,
			template: "<ng-content></ng-content>",
			inputs: [],
			standalone: false
		}]
	}], () => [
		{ type: ChangeDetectorRef },
		{ type: ElementRef },
		{ type: NgZone }
	], null);
})();
var IonTitle = class IonTitle {
	z;
	el;
	constructor(c, r, z) {
		this.z = z;
		c.detach();
		this.el = r.nativeElement;
	}
	/** @nocollapse */
	static ɵfac = function IonTitle_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || IonTitle)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
	};
	/** @nocollapse */
	static ɵcmp = /* @__PURE__ */ ɵɵdefineComponent({
		type: IonTitle,
		selectors: [["ion-title"]],
		inputs: {
			color: "color",
			size: "size"
		},
		standalone: false,
		ngContentSelectors: _c0$4,
		decls: 1,
		vars: 0,
		template: function IonTitle_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵprojectionDef();
				ɵɵprojection(0);
			}
		},
		encapsulation: 2
	});
};
IonTitle = __decorate([ProxyCmp({ inputs: ["color", "size"] })], IonTitle);
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonTitle, [{
		type: Component,
		args: [{
			selector: "ion-title",
			changeDetection: ChangeDetectionStrategy.OnPush,
			template: "<ng-content></ng-content>",
			inputs: ["color", "size"],
			standalone: false
		}]
	}], () => [
		{ type: ChangeDetectorRef },
		{ type: ElementRef },
		{ type: NgZone }
	], null);
})();
var IonToast = class IonToast {
	z;
	el;
	ionToastDidPresent = new EventEmitter();
	ionToastWillPresent = new EventEmitter();
	ionToastWillDismiss = new EventEmitter();
	ionToastDidDismiss = new EventEmitter();
	didPresent = new EventEmitter();
	willPresent = new EventEmitter();
	willDismiss = new EventEmitter();
	didDismiss = new EventEmitter();
	constructor(c, r, z) {
		this.z = z;
		c.detach();
		this.el = r.nativeElement;
	}
	/** @nocollapse */
	static ɵfac = function IonToast_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || IonToast)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
	};
	/** @nocollapse */
	static ɵcmp = /* @__PURE__ */ ɵɵdefineComponent({
		type: IonToast,
		selectors: [["ion-toast"]],
		inputs: {
			animated: "animated",
			buttons: "buttons",
			color: "color",
			cssClass: "cssClass",
			duration: "duration",
			enterAnimation: "enterAnimation",
			header: "header",
			htmlAttributes: "htmlAttributes",
			icon: "icon",
			isOpen: "isOpen",
			keyboardClose: "keyboardClose",
			layout: "layout",
			leaveAnimation: "leaveAnimation",
			message: "message",
			mode: "mode",
			position: "position",
			positionAnchor: "positionAnchor",
			swipeGesture: "swipeGesture",
			translucent: "translucent",
			trigger: "trigger"
		},
		outputs: {
			ionToastDidPresent: "ionToastDidPresent",
			ionToastWillPresent: "ionToastWillPresent",
			ionToastWillDismiss: "ionToastWillDismiss",
			ionToastDidDismiss: "ionToastDidDismiss",
			didPresent: "didPresent",
			willPresent: "willPresent",
			willDismiss: "willDismiss",
			didDismiss: "didDismiss"
		},
		standalone: false,
		ngContentSelectors: _c0$4,
		decls: 1,
		vars: 0,
		template: function IonToast_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵprojectionDef();
				ɵɵprojection(0);
			}
		},
		encapsulation: 2
	});
};
IonToast = __decorate([ProxyCmp({
	inputs: [
		"animated",
		"buttons",
		"color",
		"cssClass",
		"duration",
		"enterAnimation",
		"header",
		"htmlAttributes",
		"icon",
		"isOpen",
		"keyboardClose",
		"layout",
		"leaveAnimation",
		"message",
		"mode",
		"position",
		"positionAnchor",
		"swipeGesture",
		"translucent",
		"trigger"
	],
	methods: [
		"present",
		"dismiss",
		"onDidDismiss",
		"onWillDismiss"
	]
})], IonToast);
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonToast, [{
		type: Component,
		args: [{
			selector: "ion-toast",
			changeDetection: ChangeDetectionStrategy.OnPush,
			template: "<ng-content></ng-content>",
			inputs: [
				"animated",
				"buttons",
				"color",
				"cssClass",
				"duration",
				"enterAnimation",
				"header",
				"htmlAttributes",
				"icon",
				"isOpen",
				"keyboardClose",
				"layout",
				"leaveAnimation",
				"message",
				"mode",
				"position",
				"positionAnchor",
				"swipeGesture",
				"translucent",
				"trigger"
			],
			outputs: [
				"ionToastDidPresent",
				"ionToastWillPresent",
				"ionToastWillDismiss",
				"ionToastDidDismiss",
				"didPresent",
				"willPresent",
				"willDismiss",
				"didDismiss"
			],
			standalone: false
		}]
	}], () => [
		{ type: ChangeDetectorRef },
		{ type: ElementRef },
		{ type: NgZone }
	], {
		ionToastDidPresent: [{ type: Output }],
		ionToastWillPresent: [{ type: Output }],
		ionToastWillDismiss: [{ type: Output }],
		ionToastDidDismiss: [{ type: Output }],
		didPresent: [{ type: Output }],
		willPresent: [{ type: Output }],
		willDismiss: [{ type: Output }],
		didDismiss: [{ type: Output }]
	});
})();
var IonToggle = class IonToggle {
	z;
	el;
	ionChange = new EventEmitter();
	ionFocus = new EventEmitter();
	ionBlur = new EventEmitter();
	constructor(c, r, z) {
		this.z = z;
		c.detach();
		this.el = r.nativeElement;
	}
	/** @nocollapse */
	static ɵfac = function IonToggle_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || IonToggle)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
	};
	/** @nocollapse */
	static ɵcmp = /* @__PURE__ */ ɵɵdefineComponent({
		type: IonToggle,
		selectors: [["ion-toggle"]],
		inputs: {
			alignment: "alignment",
			checked: "checked",
			color: "color",
			disabled: "disabled",
			enableOnOffLabels: "enableOnOffLabels",
			errorText: "errorText",
			helperText: "helperText",
			justify: "justify",
			labelPlacement: "labelPlacement",
			mode: "mode",
			name: "name",
			required: "required",
			value: "value"
		},
		outputs: {
			ionChange: "ionChange",
			ionFocus: "ionFocus",
			ionBlur: "ionBlur"
		},
		standalone: false,
		ngContentSelectors: _c0$4,
		decls: 1,
		vars: 0,
		template: function IonToggle_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵprojectionDef();
				ɵɵprojection(0);
			}
		},
		encapsulation: 2
	});
};
IonToggle = __decorate([ProxyCmp({ inputs: [
	"alignment",
	"checked",
	"color",
	"disabled",
	"enableOnOffLabels",
	"errorText",
	"helperText",
	"justify",
	"labelPlacement",
	"mode",
	"name",
	"required",
	"value"
] })], IonToggle);
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonToggle, [{
		type: Component,
		args: [{
			selector: "ion-toggle",
			changeDetection: ChangeDetectionStrategy.OnPush,
			template: "<ng-content></ng-content>",
			inputs: [
				"alignment",
				"checked",
				"color",
				"disabled",
				"enableOnOffLabels",
				"errorText",
				"helperText",
				"justify",
				"labelPlacement",
				"mode",
				"name",
				"required",
				"value"
			],
			outputs: [
				"ionChange",
				"ionFocus",
				"ionBlur"
			],
			standalone: false
		}]
	}], () => [
		{ type: ChangeDetectorRef },
		{ type: ElementRef },
		{ type: NgZone }
	], {
		ionChange: [{ type: Output }],
		ionFocus: [{ type: Output }],
		ionBlur: [{ type: Output }]
	});
})();
var IonToolbar = class IonToolbar {
	z;
	el;
	constructor(c, r, z) {
		this.z = z;
		c.detach();
		this.el = r.nativeElement;
	}
	/** @nocollapse */
	static ɵfac = function IonToolbar_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || IonToolbar)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
	};
	/** @nocollapse */
	static ɵcmp = /* @__PURE__ */ ɵɵdefineComponent({
		type: IonToolbar,
		selectors: [["ion-toolbar"]],
		inputs: {
			color: "color",
			mode: "mode"
		},
		standalone: false,
		ngContentSelectors: _c0$4,
		decls: 1,
		vars: 0,
		template: function IonToolbar_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵprojectionDef();
				ɵɵprojection(0);
			}
		},
		encapsulation: 2
	});
};
IonToolbar = __decorate([ProxyCmp({ inputs: ["color", "mode"] })], IonToolbar);
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonToolbar, [{
		type: Component,
		args: [{
			selector: "ion-toolbar",
			changeDetection: ChangeDetectionStrategy.OnPush,
			template: "<ng-content></ng-content>",
			inputs: ["color", "mode"],
			standalone: false
		}]
	}], () => [
		{ type: ChangeDetectorRef },
		{ type: ElementRef },
		{ type: NgZone }
	], null);
})();
//#endregion
//#region node_modules/@ionic/angular/dist/lazy/directives/navigation/ion-router-outlet.js
var _c0$3 = ["outletContent"];
var _c1$1 = ["*"];
var IonRouterOutlet = class IonRouterOutlet extends IonRouterOutlet$1 {
	parentOutlet;
	/**
	* `static: true` must be set so the query results are resolved
	* before change detection runs. Otherwise, the view container
	* ref will be ion-router-outlet instead of ng-container, and
	* the first view will be added as a sibling of ion-router-outlet
	* instead of a child.
	*/
	outletContent;
	/**
	* We need to pass in the correct instance of IonRouterOutlet
	* otherwise parentOutlet will be null in a nested outlet context.
	* This results in APIs such as NavController.pop not working
	* in nested outlets because the parent outlet cannot be found.
	*/
	constructor(name, tabs, commonLocation, elementRef, router, zone, activatedRoute, parentOutlet) {
		super(name, tabs, commonLocation, elementRef, router, zone, activatedRoute, parentOutlet);
		this.parentOutlet = parentOutlet;
	}
	/** @nocollapse */
	static ɵfac = function IonRouterOutlet_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || IonRouterOutlet)(ɵɵinjectAttribute("name"), ɵɵinjectAttribute("tabs"), ɵɵdirectiveInject(Location), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Router), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(ActivatedRoute), ɵɵdirectiveInject(IonRouterOutlet, 12));
	};
	/** @nocollapse */
	static ɵcmp = /* @__PURE__ */ ɵɵdefineComponent({
		type: IonRouterOutlet,
		selectors: [["ion-router-outlet"]],
		viewQuery: function IonRouterOutlet_Query(rf, ctx) {
			if (rf & 1) ɵɵviewQuery(_c0$3, 7, ViewContainerRef);
			if (rf & 2) {
				let _t;
				ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.outletContent = _t.first);
			}
		},
		standalone: false,
		features: [ɵɵInheritDefinitionFeature],
		ngContentSelectors: _c1$1,
		decls: 3,
		vars: 0,
		consts: [["outletContent", ""]],
		template: function IonRouterOutlet_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵprojectionDef();
				ɵɵelementContainerStart(0, null, 0);
				ɵɵprojection(2);
				ɵɵelementContainerEnd();
			}
		},
		encapsulation: 2,
		changeDetection: 1
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonRouterOutlet, [{
		type: Component,
		args: [{
			standalone: false,
			selector: "ion-router-outlet",
			changeDetection: ChangeDetectionStrategy.Default,
			template: "<ng-container #outletContent><ng-content></ng-content></ng-container>"
		}]
	}], () => [
		{
			type: void 0,
			decorators: [{
				type: Attribute,
				args: ["name"]
			}]
		},
		{
			type: void 0,
			decorators: [{ type: Optional }, {
				type: Attribute,
				args: ["tabs"]
			}]
		},
		{ type: Location },
		{ type: ElementRef },
		{ type: Router },
		{ type: NgZone },
		{ type: ActivatedRoute },
		{
			type: IonRouterOutlet,
			decorators: [{ type: SkipSelf }, { type: Optional }]
		}
	], { outletContent: [{
		type: ViewChild,
		args: ["outletContent", {
			read: ViewContainerRef,
			static: true
		}]
	}] });
})();
//#endregion
//#region node_modules/@ionic/angular/dist/lazy/directives/navigation/ion-tabs.js
var _c0$2 = ["outlet"];
var _c1 = [
	[[
		"",
		"slot",
		"top"
	]],
	"*",
	[["ion-tab"]]
];
var _c2 = [
	"[slot=top]",
	"*",
	"ion-tab"
];
var _c3 = ["*ngIf", "tabs.length > 0"];
function IonTabs_ion_router_outlet_3_Template(rf, ctx) {
	if (rf & 1) {
		const _r1 = ɵɵgetCurrentView();
		ɵɵelementStart(0, "ion-router-outlet", 5, 1);
		ɵɵlistener("stackWillChange", function IonTabs_ion_router_outlet_3_Template_ion_router_outlet_stackWillChange_0_listener($event) {
			ɵɵrestoreView(_r1);
			return ɵɵresetView(ɵɵnextContext().onStackWillChange($event));
		})("stackDidChange", function IonTabs_ion_router_outlet_3_Template_ion_router_outlet_stackDidChange_0_listener($event) {
			ɵɵrestoreView(_r1);
			return ɵɵresetView(ɵɵnextContext().onStackDidChange($event));
		});
		ɵɵelementEnd();
	}
}
function IonTabs_ng_content_4_Template(rf, ctx) {
	if (rf & 1) ɵɵprojection(0, 2, _c3);
}
var IonTabs = class IonTabs extends IonTabs$1 {
	outlet;
	tabBar;
	tabBars;
	tabs;
	/** @nocollapse */
	static ɵfac = /* @__PURE__ */ (() => {
		let ɵIonTabs_BaseFactory;
		return function IonTabs_Factory(__ngFactoryType__) {
			return (ɵIonTabs_BaseFactory || (ɵIonTabs_BaseFactory = ɵɵgetInheritedFactory(IonTabs)))(__ngFactoryType__ || IonTabs);
		};
	})();
	/** @nocollapse */
	static ɵcmp = /* @__PURE__ */ ɵɵdefineComponent({
		type: IonTabs,
		selectors: [["ion-tabs"]],
		contentQueries: function IonTabs_ContentQueries(rf, ctx, dirIndex) {
			if (rf & 1) ɵɵcontentQuery(dirIndex, IonTabBar, 5)(dirIndex, IonTabBar, 4)(dirIndex, IonTab, 4);
			if (rf & 2) {
				let _t;
				ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.tabBar = _t.first);
				ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.tabBars = _t);
				ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.tabs = _t);
			}
		},
		viewQuery: function IonTabs_Query(rf, ctx) {
			if (rf & 1) ɵɵviewQuery(_c0$2, 5, IonRouterOutlet);
			if (rf & 2) {
				let _t;
				ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.outlet = _t.first);
			}
		},
		standalone: false,
		features: [ɵɵInheritDefinitionFeature],
		ngContentSelectors: _c2,
		decls: 6,
		vars: 2,
		consts: [
			["tabsInner", ""],
			["outlet", ""],
			[1, "tabs-inner"],
			[
				"tabs",
				"true",
				3,
				"stackWillChange",
				"stackDidChange",
				4,
				"ngIf"
			],
			[4, "ngIf"],
			[
				"tabs",
				"true",
				3,
				"stackWillChange",
				"stackDidChange"
			]
		],
		template: function IonTabs_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵprojectionDef(_c1);
				ɵɵprojection(0);
				ɵɵelementStart(1, "div", 2, 0);
				ɵɵtemplate(3, IonTabs_ion_router_outlet_3_Template, 2, 0, "ion-router-outlet", 3)(4, IonTabs_ng_content_4_Template, 1, 0, "ng-content", 4);
				ɵɵelementEnd();
				ɵɵprojection(5, 1);
			}
			if (rf & 2) {
				ɵɵadvance(3);
				ɵɵproperty("ngIf", ctx.tabs.length === 0);
				ɵɵadvance();
				ɵɵproperty("ngIf", ctx.tabs.length > 0);
			}
		},
		dependencies: [NgIf, IonRouterOutlet],
		styles: ["[_nghost-%COMP%] {\n        display: flex;\n        position: absolute;\n        top: 0;\n        left: 0;\n        right: 0;\n        bottom: 0;\n\n        flex-direction: column;\n\n        width: 100%;\n        height: 100%;\n\n        contain: layout size style;\n      }\n      .tabs-inner[_ngcontent-%COMP%] {\n        position: relative;\n\n        flex: 1;\n\n        contain: layout size style;\n      }"],
		changeDetection: 1
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonTabs, [{
		type: Component,
		args: [{
			standalone: false,
			selector: "ion-tabs",
			changeDetection: ChangeDetectionStrategy.Default,
			template: `
    <ng-content select="[slot=top]"></ng-content>
    <div class="tabs-inner" #tabsInner>
      <ion-router-outlet
        *ngIf="tabs.length === 0"
        #outlet
        tabs="true"
        (stackWillChange)="onStackWillChange($event)"
        (stackDidChange)="onStackDidChange($event)"
      ></ion-router-outlet>
      <ng-content *ngIf="tabs.length > 0" select="ion-tab"></ng-content>
    </div>
    <ng-content></ng-content>
  `,
			styles: ["\n      :host {\n        display: flex;\n        position: absolute;\n        top: 0;\n        left: 0;\n        right: 0;\n        bottom: 0;\n\n        flex-direction: column;\n\n        width: 100%;\n        height: 100%;\n\n        contain: layout size style;\n      }\n      .tabs-inner {\n        position: relative;\n\n        flex: 1;\n\n        contain: layout size style;\n      }\n    "]
		}]
	}], null, {
		outlet: [{
			type: ViewChild,
			args: ["outlet", {
				read: IonRouterOutlet,
				static: false
			}]
		}],
		tabBar: [{
			type: ContentChild,
			args: [IonTabBar, { static: false }]
		}],
		tabBars: [{
			type: ContentChildren,
			args: [IonTabBar]
		}],
		tabs: [{
			type: ContentChildren,
			args: [IonTab]
		}]
	});
})();
//#endregion
//#region node_modules/@ionic/angular/dist/lazy/directives/navigation/ion-back-button.js
var _c0$1 = ["*"];
var IonBackButton = class IonBackButton extends IonBackButton$1 {
	constructor(routerOutlet, navCtrl, config, r, z, c) {
		super(routerOutlet, navCtrl, config, r, z, c);
	}
	/** @nocollapse */
	static ɵfac = function IonBackButton_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || IonBackButton)(ɵɵdirectiveInject(IonRouterOutlet, 8), ɵɵdirectiveInject(NavController), ɵɵdirectiveInject(Config), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(ChangeDetectorRef));
	};
	/** @nocollapse */
	static ɵcmp = /* @__PURE__ */ ɵɵdefineComponent({
		type: IonBackButton,
		selectors: [["ion-back-button"]],
		standalone: false,
		features: [ɵɵInheritDefinitionFeature],
		ngContentSelectors: _c0$1,
		decls: 1,
		vars: 0,
		template: function IonBackButton_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵprojectionDef();
				ɵɵprojection(0);
			}
		},
		encapsulation: 2
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonBackButton, [{
		type: Component,
		args: [{
			standalone: false,
			selector: "ion-back-button",
			template: "<ng-content></ng-content>",
			changeDetection: ChangeDetectionStrategy.OnPush
		}]
	}], () => [
		{
			type: IonRouterOutlet,
			decorators: [{ type: Optional }]
		},
		{ type: NavController },
		{ type: Config },
		{ type: ElementRef },
		{ type: NgZone },
		{ type: ChangeDetectorRef }
	], null);
})();
//#endregion
//#region node_modules/@ionic/angular/dist/lazy/directives/navigation/ion-nav.js
var _c0 = ["*"];
var IonNav = class IonNav extends IonNav$1 {
	constructor(ref, environmentInjector, injector, angularDelegate, z, c) {
		super(ref, environmentInjector, injector, angularDelegate, z, c);
	}
	/** @nocollapse */
	static ɵfac = function IonNav_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || IonNav)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(EnvironmentInjector), ɵɵdirectiveInject(Injector), ɵɵdirectiveInject(AngularDelegate), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(ChangeDetectorRef));
	};
	/** @nocollapse */
	static ɵcmp = /* @__PURE__ */ ɵɵdefineComponent({
		type: IonNav,
		selectors: [["ion-nav"]],
		standalone: false,
		features: [ɵɵInheritDefinitionFeature],
		ngContentSelectors: _c0,
		decls: 1,
		vars: 0,
		template: function IonNav_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵprojectionDef();
				ɵɵprojection(0);
			}
		},
		encapsulation: 2
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonNav, [{
		type: Component,
		args: [{
			standalone: false,
			selector: "ion-nav",
			template: "<ng-content></ng-content>",
			changeDetection: ChangeDetectionStrategy.OnPush
		}]
	}], () => [
		{ type: ElementRef },
		{ type: EnvironmentInjector },
		{ type: Injector },
		{ type: AngularDelegate },
		{ type: NgZone },
		{ type: ChangeDetectorRef }
	], null);
})();
//#endregion
//#region node_modules/@ionic/angular/dist/lazy/directives/navigation/router-link-delegate.js
/**
* Adds support for Ionic routing directions and animations to the base Angular router link directive.
*
* When the router link is clicked, the directive will assign the direction and
* animation so that the routing integration will transition correctly.
*/
var RouterLinkDelegateDirective = class RouterLinkDelegateDirective extends RouterLinkDelegateDirective$1 {
	/** @nocollapse */ static ɵfac = /* @__PURE__ */ (() => {
		let ɵRouterLinkDelegateDirective_BaseFactory;
		return function RouterLinkDelegateDirective_Factory(__ngFactoryType__) {
			return (ɵRouterLinkDelegateDirective_BaseFactory || (ɵRouterLinkDelegateDirective_BaseFactory = ɵɵgetInheritedFactory(RouterLinkDelegateDirective)))(__ngFactoryType__ || RouterLinkDelegateDirective);
		};
	})();
	/** @nocollapse */
	static ɵdir = /* @__PURE__ */ ɵɵdefineDirective({
		type: RouterLinkDelegateDirective,
		selectors: [[
			"",
			"routerLink",
			"",
			5,
			"a",
			5,
			"area"
		]],
		standalone: false,
		features: [ɵɵInheritDefinitionFeature]
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RouterLinkDelegateDirective, [{
		type: Directive,
		args: [{
			standalone: false,
			selector: ":not(a):not(area)[routerLink]"
		}]
	}], null, null);
})();
var RouterLinkWithHrefDelegateDirective = class RouterLinkWithHrefDelegateDirective extends RouterLinkWithHrefDelegateDirective$1 {
	/** @nocollapse */ static ɵfac = /* @__PURE__ */ (() => {
		let ɵRouterLinkWithHrefDelegateDirective_BaseFactory;
		return function RouterLinkWithHrefDelegateDirective_Factory(__ngFactoryType__) {
			return (ɵRouterLinkWithHrefDelegateDirective_BaseFactory || (ɵRouterLinkWithHrefDelegateDirective_BaseFactory = ɵɵgetInheritedFactory(RouterLinkWithHrefDelegateDirective)))(__ngFactoryType__ || RouterLinkWithHrefDelegateDirective);
		};
	})();
	/** @nocollapse */
	static ɵdir = /* @__PURE__ */ ɵɵdefineDirective({
		type: RouterLinkWithHrefDelegateDirective,
		selectors: [[
			"a",
			"routerLink",
			""
		], [
			"area",
			"routerLink",
			""
		]],
		standalone: false,
		features: [ɵɵInheritDefinitionFeature]
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RouterLinkWithHrefDelegateDirective, [{
		type: Directive,
		args: [{
			standalone: false,
			selector: "a[routerLink],area[routerLink]"
		}]
	}], null, null);
})();
//#endregion
//#region node_modules/@ionic/angular/dist/lazy/directives/overlays/modal.js
function IonModal_div_0_Template(rf, ctx) {
	if (rf & 1) {
		ɵɵelementStart(0, "div", 1);
		ɵɵelementContainer(1, 2);
		ɵɵelementEnd();
	}
	if (rf & 2) {
		const ctx_r0 = ɵɵnextContext();
		ɵɵadvance();
		ɵɵproperty("ngTemplateOutlet", ctx_r0.template);
	}
}
var IonModal = class IonModal extends IonModal$1 {
	/** @nocollapse */ static ɵfac = /* @__PURE__ */ (() => {
		let ɵIonModal_BaseFactory;
		return function IonModal_Factory(__ngFactoryType__) {
			return (ɵIonModal_BaseFactory || (ɵIonModal_BaseFactory = ɵɵgetInheritedFactory(IonModal)))(__ngFactoryType__ || IonModal);
		};
	})();
	/** @nocollapse */
	static ɵcmp = /* @__PURE__ */ ɵɵdefineComponent({
		type: IonModal,
		selectors: [["ion-modal"]],
		standalone: false,
		features: [ɵɵInheritDefinitionFeature],
		decls: 1,
		vars: 1,
		consts: [
			[
				"class",
				"ion-delegate-host ion-page",
				4,
				"ngIf"
			],
			[
				1,
				"ion-delegate-host",
				"ion-page"
			],
			[3, "ngTemplateOutlet"]
		],
		template: function IonModal_Template(rf, ctx) {
			if (rf & 1) ɵɵtemplate(0, IonModal_div_0_Template, 2, 1, "div", 0);
			if (rf & 2) ɵɵproperty("ngIf", ctx.isCmpOpen || ctx.keepContentsMounted);
		},
		dependencies: [NgIf, NgTemplateOutlet],
		encapsulation: 2
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonModal, [{
		type: Component,
		args: [{
			standalone: false,
			selector: "ion-modal",
			changeDetection: ChangeDetectionStrategy.OnPush,
			template: `<div class="ion-delegate-host ion-page" *ngIf="isCmpOpen || keepContentsMounted">
    <ng-container [ngTemplateOutlet]="template"></ng-container>
  </div>`
		}]
	}], null, null);
})();
//#endregion
//#region node_modules/@ionic/angular/dist/lazy/directives/overlays/popover.js
function IonPopover_ng_container_0_Template(rf, ctx) {
	if (rf & 1) ɵɵelementContainer(0, 1);
	if (rf & 2) ɵɵproperty("ngTemplateOutlet", ɵɵnextContext().template);
}
var IonPopover = class IonPopover extends IonPopover$1 {
	/** @nocollapse */ static ɵfac = /* @__PURE__ */ (() => {
		let ɵIonPopover_BaseFactory;
		return function IonPopover_Factory(__ngFactoryType__) {
			return (ɵIonPopover_BaseFactory || (ɵIonPopover_BaseFactory = ɵɵgetInheritedFactory(IonPopover)))(__ngFactoryType__ || IonPopover);
		};
	})();
	/** @nocollapse */
	static ɵcmp = /* @__PURE__ */ ɵɵdefineComponent({
		type: IonPopover,
		selectors: [["ion-popover"]],
		standalone: false,
		features: [ɵɵInheritDefinitionFeature],
		decls: 1,
		vars: 1,
		consts: [[
			3,
			"ngTemplateOutlet",
			4,
			"ngIf"
		], [3, "ngTemplateOutlet"]],
		template: function IonPopover_Template(rf, ctx) {
			if (rf & 1) ɵɵtemplate(0, IonPopover_ng_container_0_Template, 1, 1, "ng-container", 0);
			if (rf & 2) ɵɵproperty("ngIf", ctx.isCmpOpen || ctx.keepContentsMounted);
		},
		dependencies: [NgIf, NgTemplateOutlet],
		encapsulation: 2
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonPopover, [{
		type: Component,
		args: [{
			standalone: false,
			selector: "ion-popover",
			changeDetection: ChangeDetectionStrategy.OnPush,
			template: `<ng-container [ngTemplateOutlet]="template" *ngIf="isCmpOpen || keepContentsMounted"></ng-container>`
		}]
	}], null, null);
})();
//#endregion
//#region node_modules/@ionic/angular/dist/lazy/directives/validators/max-validator.js
/**
* @description
* Provider which adds `MaxValidator` to the `NG_VALIDATORS` multi-provider list.
*/
var ION_MAX_VALIDATOR = {
	provide: NG_VALIDATORS,
	useExisting: forwardRef(() => IonMaxValidator),
	multi: true
};
var IonMaxValidator = class IonMaxValidator extends MaxValidator {
	/** @nocollapse */ static ɵfac = /* @__PURE__ */ (() => {
		let ɵIonMaxValidator_BaseFactory;
		return function IonMaxValidator_Factory(__ngFactoryType__) {
			return (ɵIonMaxValidator_BaseFactory || (ɵIonMaxValidator_BaseFactory = ɵɵgetInheritedFactory(IonMaxValidator)))(__ngFactoryType__ || IonMaxValidator);
		};
	})();
	/** @nocollapse */
	static ɵdir = /* @__PURE__ */ ɵɵdefineDirective({
		type: IonMaxValidator,
		selectors: [
			[
				"ion-input",
				"type",
				"number",
				"max",
				"",
				"formControlName",
				""
			],
			[
				"ion-input",
				"type",
				"number",
				"max",
				"",
				"formControl",
				""
			],
			[
				"ion-input",
				"type",
				"number",
				"max",
				"",
				"ngModel",
				""
			]
		],
		hostVars: 1,
		hostBindings: function IonMaxValidator_HostBindings(rf, ctx) {
			if (rf & 2) ɵɵattribute("max", ctx.enabled(ctx.max) ? ctx.max : null);
		},
		standalone: false,
		features: [ɵɵProvidersFeature([ION_MAX_VALIDATOR]), ɵɵInheritDefinitionFeature]
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonMaxValidator, [{
		type: Directive,
		args: [{
			standalone: false,
			selector: "ion-input[type=number][max][formControlName],ion-input[type=number][max][formControl],ion-input[type=number][max][ngModel]",
			providers: [ION_MAX_VALIDATOR],
			host: { "[attr.max]": "enabled(max) ? max : null" }
		}]
	}], null, null);
})();
//#endregion
//#region node_modules/@ionic/angular/dist/lazy/directives/validators/min-validator.js
/**
* @description
* Provider which adds `MinValidator` to the `NG_VALIDATORS` multi-provider list.
*/
var ION_MIN_VALIDATOR = {
	provide: NG_VALIDATORS,
	useExisting: forwardRef(() => IonMinValidator),
	multi: true
};
var IonMinValidator = class IonMinValidator extends MinValidator {
	/** @nocollapse */ static ɵfac = /* @__PURE__ */ (() => {
		let ɵIonMinValidator_BaseFactory;
		return function IonMinValidator_Factory(__ngFactoryType__) {
			return (ɵIonMinValidator_BaseFactory || (ɵIonMinValidator_BaseFactory = ɵɵgetInheritedFactory(IonMinValidator)))(__ngFactoryType__ || IonMinValidator);
		};
	})();
	/** @nocollapse */
	static ɵdir = /* @__PURE__ */ ɵɵdefineDirective({
		type: IonMinValidator,
		selectors: [
			[
				"ion-input",
				"type",
				"number",
				"min",
				"",
				"formControlName",
				""
			],
			[
				"ion-input",
				"type",
				"number",
				"min",
				"",
				"formControl",
				""
			],
			[
				"ion-input",
				"type",
				"number",
				"min",
				"",
				"ngModel",
				""
			]
		],
		hostVars: 1,
		hostBindings: function IonMinValidator_HostBindings(rf, ctx) {
			if (rf & 2) ɵɵattribute("min", ctx.enabled(ctx.min) ? ctx.min : null);
		},
		standalone: false,
		features: [ɵɵProvidersFeature([ION_MIN_VALIDATOR]), ɵɵInheritDefinitionFeature]
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonMinValidator, [{
		type: Directive,
		args: [{
			standalone: false,
			selector: "ion-input[type=number][min][formControlName],ion-input[type=number][min][formControl],ion-input[type=number][min][ngModel]",
			providers: [ION_MIN_VALIDATOR],
			host: { "[attr.min]": "enabled(min) ? min : null" }
		}]
	}], null, null);
})();
//#endregion
//#region node_modules/@ionic/core/dist/esm/index.js
/*!
* (C) Ionic http://ionicframework.com - MIT License
*/
var IonicSlides = (opts) => {
	const { swiper, extendParams } = opts;
	const slidesParams = {
		effect: void 0,
		direction: "horizontal",
		initialSlide: 0,
		loop: false,
		parallax: false,
		slidesPerView: 1,
		spaceBetween: 0,
		speed: 300,
		slidesPerColumn: 1,
		slidesPerColumnFill: "column",
		slidesPerGroup: 1,
		centeredSlides: false,
		slidesOffsetBefore: 0,
		slidesOffsetAfter: 0,
		touchEventsTarget: "container",
		freeMode: false,
		freeModeMomentum: true,
		freeModeMomentumRatio: 1,
		freeModeMomentumBounce: true,
		freeModeMomentumBounceRatio: 1,
		freeModeMomentumVelocityRatio: 1,
		freeModeSticky: false,
		freeModeMinimumVelocity: .02,
		autoHeight: false,
		setWrapperSize: false,
		zoom: {
			maxRatio: 3,
			minRatio: 1,
			toggle: false
		},
		touchRatio: 1,
		touchAngle: 45,
		simulateTouch: true,
		touchStartPreventDefault: false,
		shortSwipes: true,
		longSwipes: true,
		longSwipesRatio: .5,
		longSwipesMs: 300,
		followFinger: true,
		threshold: 0,
		touchMoveStopPropagation: true,
		touchReleaseOnEdges: false,
		iOSEdgeSwipeDetection: false,
		iOSEdgeSwipeThreshold: 20,
		resistance: true,
		resistanceRatio: .85,
		watchSlidesProgress: false,
		watchSlidesVisibility: false,
		preventClicks: true,
		preventClicksPropagation: true,
		slideToClickedSlide: false,
		loopAdditionalSlides: 0,
		noSwiping: true,
		runCallbacksOnInit: true,
		coverflowEffect: {
			rotate: 50,
			stretch: 0,
			depth: 100,
			modifier: 1,
			slideShadows: true
		},
		flipEffect: {
			slideShadows: true,
			limitRotation: true
		},
		cubeEffect: {
			slideShadows: true,
			shadow: true,
			shadowOffset: 20,
			shadowScale: .94
		},
		fadeEffect: { crossFade: false },
		a11y: {
			prevSlideMessage: "Previous slide",
			nextSlideMessage: "Next slide",
			firstSlideMessage: "This is the first slide",
			lastSlideMessage: "This is the last slide"
		}
	};
	if (swiper.pagination) slidesParams.pagination = {
		type: "bullets",
		clickable: false,
		hideOnClick: false
	};
	if (swiper.scrollbar) slidesParams.scrollbar = { hide: true };
	extendParams(slidesParams);
};
//#endregion
//#region node_modules/@ionic/angular/dist/lazy/providers/alert-controller.js
var AlertController = class AlertController extends OverlayBaseController {
	constructor() {
		super(alertController);
	}
	/** @nocollapse */
	static ɵfac = function AlertController_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || AlertController)();
	};
	/** @nocollapse */
	static ɵprov = /* @__PURE__ */ ɵɵdefineInjectable({
		token: AlertController,
		factory: AlertController.ɵfac,
		providedIn: "root"
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AlertController, [{
		type: Injectable,
		args: [{ providedIn: "root" }]
	}], () => [], null);
})();
//#endregion
//#region node_modules/@ionic/angular/dist/lazy/providers/animation-controller.js
var AnimationController = class AnimationController {
	/**
	* Create a new animation
	*/
	create(animationId) {
		return createAnimation(animationId);
	}
	/**
	* EXPERIMENTAL
	*
	* Given a progression and a cubic bezier function,
	* this utility returns the time value(s) at which the
	* cubic bezier reaches the given time progression.
	*
	* If the cubic bezier never reaches the progression
	* the result will be an empty array.
	*
	* This is most useful for switching between easing curves
	* when doing a gesture animation (i.e. going from linear easing
	* during a drag, to another easing when `progressEnd` is called)
	*/
	easingTime(p0, p1, p2, p3, progression) {
		return getTimeGivenProgression(p0, p1, p2, p3, progression);
	}
	/** @nocollapse */
	static ɵfac = function AnimationController_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || AnimationController)();
	};
	/** @nocollapse */
	static ɵprov = /* @__PURE__ */ ɵɵdefineInjectable({
		token: AnimationController,
		factory: AnimationController.ɵfac,
		providedIn: "root"
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AnimationController, [{
		type: Injectable,
		args: [{ providedIn: "root" }]
	}], null, null);
})();
//#endregion
//#region node_modules/@ionic/angular/dist/lazy/providers/action-sheet-controller.js
var ActionSheetController = class ActionSheetController extends OverlayBaseController {
	constructor() {
		super(actionSheetController);
	}
	/** @nocollapse */
	static ɵfac = function ActionSheetController_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || ActionSheetController)();
	};
	/** @nocollapse */
	static ɵprov = /* @__PURE__ */ ɵɵdefineInjectable({
		token: ActionSheetController,
		factory: ActionSheetController.ɵfac,
		providedIn: "root"
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ActionSheetController, [{
		type: Injectable,
		args: [{ providedIn: "root" }]
	}], () => [], null);
})();
//#endregion
//#region node_modules/@ionic/angular/dist/lazy/providers/gesture-controller.js
var GestureController = class GestureController {
	zone;
	constructor(zone) {
		this.zone = zone;
	}
	/**
	* Create a new gesture
	*/
	create(opts, runInsideAngularZone = false) {
		if (runInsideAngularZone) Object.getOwnPropertyNames(opts).forEach((key) => {
			if (typeof opts[key] === "function") {
				const fn = opts[key];
				opts[key] = (...props) => this.zone.run(() => fn(...props));
			}
		});
		return createGesture(opts);
	}
	/** @nocollapse */
	static ɵfac = function GestureController_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || GestureController)(ɵɵinject(NgZone));
	};
	/** @nocollapse */
	static ɵprov = /* @__PURE__ */ ɵɵdefineInjectable({
		token: GestureController,
		factory: GestureController.ɵfac,
		providedIn: "root"
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GestureController, [{
		type: Injectable,
		args: [{ providedIn: "root" }]
	}], () => [{ type: NgZone }], null);
})();
//#endregion
//#region node_modules/@ionic/angular/dist/lazy/providers/loading-controller.js
var LoadingController = class LoadingController extends OverlayBaseController {
	constructor() {
		super(loadingController);
	}
	/** @nocollapse */
	static ɵfac = function LoadingController_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || LoadingController)();
	};
	/** @nocollapse */
	static ɵprov = /* @__PURE__ */ ɵɵdefineInjectable({
		token: LoadingController,
		factory: LoadingController.ɵfac,
		providedIn: "root"
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LoadingController, [{
		type: Injectable,
		args: [{ providedIn: "root" }]
	}], () => [], null);
})();
//#endregion
//#region node_modules/@ionic/angular/dist/lazy/providers/menu-controller.js
var MenuController = class MenuController extends MenuController$1 {
	constructor() {
		super(menuController);
	}
	/** @nocollapse */
	static ɵfac = function MenuController_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || MenuController)();
	};
	/** @nocollapse */
	static ɵprov = /* @__PURE__ */ ɵɵdefineInjectable({
		token: MenuController,
		factory: MenuController.ɵfac,
		providedIn: "root"
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MenuController, [{
		type: Injectable,
		args: [{ providedIn: "root" }]
	}], () => [], null);
})();
//#endregion
//#region node_modules/@ionic/angular/dist/lazy/providers/modal-controller.js
var ModalController = class ModalController extends OverlayBaseController {
	angularDelegate = inject(AngularDelegate);
	injector = inject(Injector);
	environmentInjector = inject(EnvironmentInjector);
	constructor() {
		super(modalController);
	}
	create(opts) {
		const { injector: customInjector, ...restOpts } = opts;
		return super.create({
			...restOpts,
			delegate: this.angularDelegate.create(this.environmentInjector, this.injector, "modal", customInjector)
		});
	}
	/** @nocollapse */
	static ɵfac = function ModalController_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || ModalController)();
	};
	/** @nocollapse */
	static ɵprov = /* @__PURE__ */ ɵɵdefineInjectable({
		token: ModalController,
		factory: ModalController.ɵfac
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ModalController, [{ type: Injectable }], () => [], null);
})();
//#endregion
//#region node_modules/@ionic/angular/dist/lazy/providers/popover-controller.js
var PopoverController = class extends OverlayBaseController {
	angularDelegate = inject(AngularDelegate);
	injector = inject(Injector);
	environmentInjector = inject(EnvironmentInjector);
	constructor() {
		super(popoverController);
	}
	create(opts) {
		const { injector: customInjector, ...restOpts } = opts;
		return super.create({
			...restOpts,
			delegate: this.angularDelegate.create(this.environmentInjector, this.injector, "popover", customInjector)
		});
	}
};
//#endregion
//#region node_modules/@ionic/angular/dist/lazy/providers/toast-controller.js
var ToastController = class ToastController extends OverlayBaseController {
	constructor() {
		super(toastController);
	}
	/** @nocollapse */
	static ɵfac = function ToastController_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || ToastController)();
	};
	/** @nocollapse */
	static ɵprov = /* @__PURE__ */ ɵɵdefineInjectable({
		token: ToastController,
		factory: ToastController.ɵfac,
		providedIn: "root"
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ToastController, [{
		type: Injectable,
		args: [{ providedIn: "root" }]
	}], () => [], null);
})();
//#endregion
//#region node_modules/@ionic/core/dist/esm/app-globals-7GHLBkwd.js
/*!
* (C) Ionic http://ionicframework.com - MIT License
*/
var globalScripts = initialize || (() => {});
//#endregion
//#region node_modules/@ionic/core/dist/esm/loader.js
/*!
* (C) Ionic http://ionicframework.com - MIT License
*/
var defineCustomElements = async (win, options) => {
	if (typeof window === "undefined") return void 0;
	await globalScripts();
	return bootstrapLazy(JSON.parse("[[\"ion-datetime\",[[289,\"ion-datetime\",{\"color\":[1],\"name\":[1],\"disabled\":[4],\"formatOptions\":[16],\"readonly\":[4],\"isDateEnabled\":[16],\"showAdjacentDays\":[4,\"show-adjacent-days\"],\"min\":[1025],\"max\":[1025],\"presentation\":[1],\"cancelText\":[1,\"cancel-text\"],\"doneText\":[1,\"done-text\"],\"clearText\":[1,\"clear-text\"],\"yearValues\":[8,\"year-values\"],\"monthValues\":[8,\"month-values\"],\"dayValues\":[8,\"day-values\"],\"hourValues\":[8,\"hour-values\"],\"minuteValues\":[8,\"minute-values\"],\"locale\":[1],\"firstDayOfWeek\":[2,\"first-day-of-week\"],\"titleSelectedDatesFormatter\":[16],\"multiple\":[4],\"highlightedDates\":[16],\"value\":[1025],\"showDefaultTitle\":[4,\"show-default-title\"],\"showDefaultButtons\":[4,\"show-default-buttons\"],\"showClearButton\":[4,\"show-clear-button\"],\"showDefaultTimeLabel\":[4,\"show-default-time-label\"],\"hourCycle\":[1,\"hour-cycle\"],\"size\":[1],\"preferWheel\":[4,\"prefer-wheel\"],\"showMonthAndYear\":[32],\"activeParts\":[32],\"workingParts\":[32],\"isTimePopoverOpen\":[32],\"forceRenderDate\":[32],\"confirm\":[64],\"reset\":[64],\"cancel\":[64],\"getDefaultPart\":[64]},null,{\"formatOptions\":[{\"formatOptionsChanged\":0}],\"disabled\":[{\"disabledChanged\":0}],\"min\":[{\"minChanged\":0}],\"max\":[{\"maxChanged\":0}],\"presentation\":[{\"presentationChanged\":0}],\"yearValues\":[{\"yearValuesChanged\":0}],\"monthValues\":[{\"monthValuesChanged\":0}],\"dayValues\":[{\"dayValuesChanged\":0}],\"hourValues\":[{\"hourValuesChanged\":0}],\"minuteValues\":[{\"minuteValuesChanged\":0}],\"value\":[{\"valueChanged\":0}]}]]],[\"ion-menu_3\",[[289,\"ion-menu-button\",{\"color\":[513],\"disabled\":[4],\"menu\":[1],\"autoHide\":[4,\"auto-hide\"],\"type\":[1],\"visible\":[32]},[[16,\"ionMenuChange\",\"visibilityChanged\"],[16,\"ionSplitPaneVisible\",\"visibilityChanged\"]]],[289,\"ion-menu\",{\"contentId\":[513,\"content-id\"],\"menuId\":[513,\"menu-id\"],\"type\":[1025],\"disabled\":[1028],\"side\":[513],\"swipeGesture\":[4,\"swipe-gesture\"],\"maxEdgeStart\":[2,\"max-edge-start\"],\"isPaneVisible\":[32],\"isEndSide\":[32],\"isOpen\":[64],\"isActive\":[64],\"open\":[64],\"close\":[64],\"toggle\":[64],\"setOpen\":[64]},[[16,\"ionSplitPaneVisible\",\"onSplitPaneChanged\"],[2,\"click\",\"onBackdropClick\"]],{\"type\":[{\"typeChanged\":0}],\"disabled\":[{\"disabledChanged\":0}],\"side\":[{\"sideChanged\":0}],\"swipeGesture\":[{\"swipeGestureChanged\":0}]}],[257,\"ion-menu-toggle\",{\"menu\":[1],\"autoHide\":[4,\"auto-hide\"],\"visible\":[32]},[[16,\"ionMenuChange\",\"visibilityChanged\"],[16,\"ionSplitPaneVisible\",\"visibilityChanged\"]]]]],[\"ion-input-password-toggle\",[[33,\"ion-input-password-toggle\",{\"color\":[513],\"showIcon\":[1,\"show-icon\"],\"hideIcon\":[1,\"hide-icon\"],\"type\":[1025]},null,{\"type\":[{\"onTypeChange\":0}]}]]],[\"ion-fab_3\",[[289,\"ion-fab-button\",{\"color\":[513],\"activated\":[4],\"disabled\":[4],\"download\":[1],\"href\":[1],\"rel\":[1],\"routerDirection\":[1,\"router-direction\"],\"routerAnimation\":[16],\"target\":[1],\"show\":[4],\"translucent\":[4],\"type\":[1],\"form\":[1],\"size\":[1],\"closeIcon\":[1,\"close-icon\"]},null,{\"disabled\":[{\"disabledChanged\":0}]}],[257,\"ion-fab\",{\"horizontal\":[1],\"vertical\":[1],\"edge\":[4],\"activated\":[1028],\"close\":[64],\"toggle\":[64]},null,{\"activated\":[{\"activatedChanged\":0}]}],[257,\"ion-fab-list\",{\"activated\":[4],\"side\":[1]},null,{\"activated\":[{\"activatedChanged\":0}]}]]],[\"ion-refresher_2\",[[0,\"ion-refresher-content\",{\"pullingIcon\":[1025,\"pulling-icon\"],\"pullingText\":[1,\"pulling-text\"],\"refreshingSpinner\":[1025,\"refreshing-spinner\"],\"refreshingText\":[1,\"refreshing-text\"]}],[32,\"ion-refresher\",{\"pullMin\":[2,\"pull-min\"],\"pullMax\":[2,\"pull-max\"],\"closeDuration\":[1,\"close-duration\"],\"snapbackDuration\":[1,\"snapback-duration\"],\"pullFactor\":[2,\"pull-factor\"],\"disabled\":[4],\"nativeRefresher\":[32],\"state\":[32],\"complete\":[64],\"cancel\":[64],\"getProgress\":[64]},null,{\"disabled\":[{\"disabledChanged\":0}]}]]],[\"ion-back-button\",[[33,\"ion-back-button\",{\"color\":[513],\"defaultHref\":[1025,\"default-href\"],\"disabled\":[516],\"icon\":[1],\"text\":[1],\"type\":[1],\"routerAnimation\":[16]}]]],[\"ion-loading\",[[34,\"ion-loading\",{\"overlayIndex\":[2,\"overlay-index\"],\"delegate\":[16],\"hasController\":[4,\"has-controller\"],\"keyboardClose\":[4,\"keyboard-close\"],\"enterAnimation\":[16],\"leaveAnimation\":[16],\"message\":[1],\"cssClass\":[1,\"css-class\"],\"duration\":[2],\"backdropDismiss\":[4,\"backdrop-dismiss\"],\"showBackdrop\":[4,\"show-backdrop\"],\"spinner\":[1025],\"translucent\":[4],\"animated\":[4],\"htmlAttributes\":[16],\"isOpen\":[4,\"is-open\"],\"trigger\":[1],\"present\":[64],\"dismiss\":[64],\"onDidDismiss\":[64],\"onWillDismiss\":[64]},null,{\"isOpen\":[{\"onIsOpenChange\":0}],\"trigger\":[{\"triggerChanged\":0}]}]]],[\"ion-toast\",[[33,\"ion-toast\",{\"overlayIndex\":[2,\"overlay-index\"],\"delegate\":[16],\"hasController\":[4,\"has-controller\"],\"color\":[513],\"enterAnimation\":[16],\"leaveAnimation\":[16],\"cssClass\":[1,\"css-class\"],\"duration\":[2],\"header\":[1],\"layout\":[1],\"message\":[1],\"keyboardClose\":[4,\"keyboard-close\"],\"position\":[1],\"positionAnchor\":[1,\"position-anchor\"],\"buttons\":[16],\"translucent\":[4],\"animated\":[4],\"icon\":[1],\"htmlAttributes\":[16],\"swipeGesture\":[1,\"swipe-gesture\"],\"isOpen\":[4,\"is-open\"],\"trigger\":[1],\"revealContentToScreenReader\":[32],\"present\":[64],\"dismiss\":[64],\"onDidDismiss\":[64],\"onWillDismiss\":[64]},null,{\"swipeGesture\":[{\"swipeGestureChanged\":0}],\"isOpen\":[{\"onIsOpenChange\":0}],\"trigger\":[{\"triggerChanged\":0}]}]]],[\"ion-card_5\",[[289,\"ion-card\",{\"color\":[513],\"button\":[4],\"type\":[1],\"disabled\":[4],\"download\":[1],\"href\":[1],\"rel\":[1],\"routerDirection\":[1,\"router-direction\"],\"routerAnimation\":[16],\"target\":[1]}],[32,\"ion-card-content\"],[289,\"ion-card-header\",{\"color\":[513],\"translucent\":[4]}],[289,\"ion-card-subtitle\",{\"color\":[513]}],[289,\"ion-card-title\",{\"color\":[513]}]]],[\"ion-item-option_3\",[[289,\"ion-item-option\",{\"color\":[513],\"disabled\":[4],\"download\":[1],\"expandable\":[4],\"href\":[1],\"rel\":[1],\"target\":[1],\"type\":[1]}],[32,\"ion-item-options\",{\"side\":[1],\"fireSwipeEvent\":[64]}],[0,\"ion-item-sliding\",{\"disabled\":[4],\"state\":[32],\"getOpenAmount\":[64],\"getSlidingRatio\":[64],\"open\":[64],\"close\":[64],\"closeOpened\":[64]},null,{\"disabled\":[{\"disabledChanged\":0}]}]]],[\"ion-accordion_2\",[[305,\"ion-accordion\",{\"value\":[1],\"disabled\":[4],\"readonly\":[4],\"toggleIcon\":[1,\"toggle-icon\"],\"toggleIconSlot\":[1,\"toggle-icon-slot\"],\"state\":[32],\"isNext\":[32],\"isPrevious\":[32],\"hasInteracted\":[32]},null,{\"value\":[{\"valueChanged\":0}]}],[289,\"ion-accordion-group\",{\"animated\":[4],\"multiple\":[4],\"value\":[1025],\"disabled\":[4],\"readonly\":[4],\"expand\":[1],\"requestAccordionToggle\":[64],\"getAccordions\":[64]},[[0,\"keydown\",\"onKeydown\"]],{\"value\":[{\"valueChanged\":0}],\"disabled\":[{\"disabledChanged\":0}],\"readonly\":[{\"readonlyChanged\":0}]}]]],[\"ion-breadcrumb_2\",[[289,\"ion-breadcrumb\",{\"collapsed\":[4],\"last\":[4],\"showCollapsedIndicator\":[4,\"show-collapsed-indicator\"],\"color\":[1],\"active\":[4],\"disabled\":[4],\"download\":[1],\"href\":[1],\"rel\":[1],\"separator\":[4],\"target\":[1],\"routerDirection\":[1,\"router-direction\"],\"routerAnimation\":[16]}],[289,\"ion-breadcrumbs\",{\"color\":[513],\"maxItems\":[2,\"max-items\"],\"itemsBeforeCollapse\":[2,\"items-before-collapse\"],\"itemsAfterCollapse\":[2,\"items-after-collapse\"],\"collapsed\":[32],\"activeChanged\":[32]},[[0,\"collapsedClick\",\"onCollapsedClick\"]],{\"maxItems\":[{\"maxItemsChanged\":0}],\"itemsBeforeCollapse\":[{\"maxItemsChanged\":0}],\"itemsAfterCollapse\":[{\"maxItemsChanged\":0}]}]]],[\"ion-infinite-scroll_2\",[[32,\"ion-infinite-scroll-content\",{\"loadingSpinner\":[1025,\"loading-spinner\"],\"loadingText\":[1,\"loading-text\"]}],[0,\"ion-infinite-scroll\",{\"threshold\":[1],\"disabled\":[4],\"position\":[1],\"isLoading\":[32],\"complete\":[64]},null,{\"threshold\":[{\"thresholdChanged\":0}],\"disabled\":[{\"disabledChanged\":0}]}]]],[\"ion-reorder_2\",[[289,\"ion-reorder\",null,[[2,\"click\",\"onClick\"]]],[0,\"ion-reorder-group\",{\"disabled\":[4],\"state\":[32],\"complete\":[64]},null,{\"disabled\":[{\"disabledChanged\":0}]}]]],[\"ion-segment_2\",[[289,\"ion-segment-button\",{\"contentId\":[513,\"content-id\"],\"disabled\":[1028],\"layout\":[1],\"type\":[1],\"value\":[8],\"checked\":[32],\"setFocus\":[64]},null,{\"value\":[{\"valueChanged\":0}]}],[289,\"ion-segment\",{\"color\":[513],\"disabled\":[4],\"scrollable\":[4],\"swipeGesture\":[4,\"swipe-gesture\"],\"value\":[1032],\"selectOnFocus\":[4,\"select-on-focus\"],\"activated\":[32]},[[16,\"ionSegmentViewScroll\",\"handleSegmentViewScroll\"],[0,\"keydown\",\"onKeyDown\"]],{\"color\":[{\"colorChanged\":0}],\"swipeGesture\":[{\"swipeGestureChanged\":0}],\"value\":[{\"valueChanged\":0}],\"disabled\":[{\"disabledChanged\":0}]}]]],[\"ion-tab-bar_2\",[[289,\"ion-tab-button\",{\"disabled\":[4],\"download\":[1],\"href\":[1],\"rel\":[1],\"layout\":[1025],\"selected\":[1028],\"tab\":[1],\"target\":[1]},[[8,\"ionTabBarChanged\",\"onTabBarChanged\"]]],[289,\"ion-tab-bar\",{\"color\":[513],\"selectedTab\":[1,\"selected-tab\"],\"translucent\":[4],\"keyboardVisible\":[32]},null,{\"selectedTab\":[{\"selectedTabChanged\":0}]}]]],[\"ion-chip\",[[289,\"ion-chip\",{\"color\":[513],\"outline\":[4],\"disabled\":[4]}]]],[\"ion-datetime-button\",[[289,\"ion-datetime-button\",{\"color\":[513],\"disabled\":[516],\"datetime\":[1],\"datetimePresentation\":[32],\"dateText\":[32],\"timeText\":[32],\"datetimeActive\":[32],\"selectedButton\":[32]}]]],[\"ion-input\",[[294,\"ion-input\",{\"color\":[513],\"autocapitalize\":[1],\"autocomplete\":[1],\"autocorrect\":[4],\"autofocus\":[4],\"clearInput\":[4,\"clear-input\"],\"clearInputIcon\":[1,\"clear-input-icon\"],\"clearOnEdit\":[4,\"clear-on-edit\"],\"counter\":[4],\"counterFormatter\":[16],\"debounce\":[2],\"disabled\":[516],\"enterkeyhint\":[1],\"errorText\":[1,\"error-text\"],\"fill\":[1],\"inputmode\":[1],\"helperText\":[1,\"helper-text\"],\"label\":[1],\"labelPlacement\":[1,\"label-placement\"],\"max\":[8],\"maxlength\":[2],\"min\":[8],\"minlength\":[2],\"multiple\":[4],\"name\":[1],\"pattern\":[1],\"placeholder\":[1],\"readonly\":[516],\"required\":[4],\"shape\":[1],\"spellcheck\":[4],\"step\":[1],\"type\":[1],\"value\":[1032],\"hasFocus\":[32],\"isInvalid\":[32],\"setFocus\":[64],\"getInputElement\":[64]},[[2,\"click\",\"onClickCapture\"]],{\"debounce\":[{\"debounceChanged\":0}],\"type\":[{\"onTypeChange\":0}],\"value\":[{\"valueChanged\":0}],\"dir\":[{\"onDirChanged\":0}]}]]],[\"ion-searchbar\",[[34,\"ion-searchbar\",{\"color\":[513],\"animated\":[4],\"autocapitalize\":[1],\"autocomplete\":[1],\"autocorrect\":[4],\"cancelButtonIcon\":[1,\"cancel-button-icon\"],\"cancelButtonText\":[1,\"cancel-button-text\"],\"clearIcon\":[1,\"clear-icon\"],\"debounce\":[2],\"disabled\":[4],\"inputmode\":[1],\"enterkeyhint\":[1],\"maxlength\":[2],\"minlength\":[2],\"name\":[1],\"placeholder\":[1],\"searchIcon\":[1,\"search-icon\"],\"showCancelButton\":[1,\"show-cancel-button\"],\"showClearButton\":[1,\"show-clear-button\"],\"spellcheck\":[4],\"type\":[1],\"value\":[1025],\"focused\":[32],\"noAnimate\":[32],\"setFocus\":[64],\"getInputElement\":[64]},null,{\"lang\":[{\"onLangChanged\":0}],\"dir\":[{\"onDirChanged\":0}],\"debounce\":[{\"debounceChanged\":0}],\"value\":[{\"valueChanged\":0}],\"showCancelButton\":[{\"showCancelButtonChanged\":0}]}]]],[\"ion-toggle\",[[289,\"ion-toggle\",{\"color\":[513],\"name\":[1],\"checked\":[1028],\"disabled\":[4],\"errorText\":[1,\"error-text\"],\"helperText\":[1,\"helper-text\"],\"value\":[1],\"enableOnOffLabels\":[4,\"enable-on-off-labels\"],\"labelPlacement\":[1,\"label-placement\"],\"justify\":[1],\"alignment\":[1],\"required\":[4],\"activated\":[32],\"isInvalid\":[32],\"hintTextId\":[32]},null,{\"disabled\":[{\"disabledChanged\":0}]}]]],[\"ion-route_4\",[[0,\"ion-route\",{\"url\":[1],\"component\":[1],\"componentProps\":[16],\"beforeLeave\":[16],\"beforeEnter\":[16]},null,{\"url\":[{\"onUpdate\":0}],\"component\":[{\"onUpdate\":0}],\"componentProps\":[{\"onComponentProps\":0}]}],[0,\"ion-route-redirect\",{\"from\":[1],\"to\":[1]},null,{\"from\":[{\"propDidChange\":0}],\"to\":[{\"propDidChange\":0}]}],[0,\"ion-router\",{\"root\":[1],\"useHash\":[4,\"use-hash\"],\"canTransition\":[64],\"push\":[64],\"back\":[64],\"printDebug\":[64],\"navChanged\":[64]},[[8,\"popstate\",\"onPopState\"],[4,\"ionBackButton\",\"onBackButton\"]]],[257,\"ion-router-link\",{\"color\":[513],\"href\":[1],\"rel\":[1],\"routerDirection\":[1,\"router-direction\"],\"routerAnimation\":[16],\"target\":[1]}]]],[\"ion-avatar_3\",[[289,\"ion-avatar\"],[289,\"ion-badge\",{\"color\":[513]}],[257,\"ion-thumbnail\"]]],[\"ion-col_3\",[[257,\"ion-col\",{\"offset\":[1],\"offsetXs\":[1,\"offset-xs\"],\"offsetSm\":[1,\"offset-sm\"],\"offsetMd\":[1,\"offset-md\"],\"offsetLg\":[1,\"offset-lg\"],\"offsetXl\":[1,\"offset-xl\"],\"pull\":[1],\"pullXs\":[1,\"pull-xs\"],\"pullSm\":[1,\"pull-sm\"],\"pullMd\":[1,\"pull-md\"],\"pullLg\":[1,\"pull-lg\"],\"pullXl\":[1,\"pull-xl\"],\"push\":[1],\"pushXs\":[1,\"push-xs\"],\"pushSm\":[1,\"push-sm\"],\"pushMd\":[1,\"push-md\"],\"pushLg\":[1,\"push-lg\"],\"pushXl\":[1,\"push-xl\"],\"size\":[1],\"sizeXs\":[1,\"size-xs\"],\"sizeSm\":[1,\"size-sm\"],\"sizeMd\":[1,\"size-md\"],\"sizeLg\":[1,\"size-lg\"],\"sizeXl\":[1,\"size-xl\"]},[[9,\"resize\",\"onResize\"]]],[257,\"ion-grid\",{\"fixed\":[4]}],[257,\"ion-row\"]]],[\"ion-nav_2\",[[257,\"ion-nav\",{\"delegate\":[16],\"swipeGesture\":[1028,\"swipe-gesture\"],\"animated\":[4],\"animation\":[16],\"rootParams\":[16],\"root\":[1],\"push\":[64],\"insert\":[64],\"insertPages\":[64],\"pop\":[64],\"popTo\":[64],\"popToRoot\":[64],\"removeIndex\":[64],\"setRoot\":[64],\"setPages\":[64],\"getActive\":[64],\"getByIndex\":[64],\"canGoBack\":[64],\"getPrevious\":[64],\"getLength\":[64]},null,{\"swipeGesture\":[{\"swipeGestureChanged\":0}],\"root\":[{\"rootChanged\":0}]}],[0,\"ion-nav-link\",{\"component\":[1],\"componentProps\":[16],\"routerDirection\":[1,\"router-direction\"],\"routerAnimation\":[16]}]]],[\"ion-tab_2\",[[257,\"ion-tab\",{\"active\":[1028],\"delegate\":[16],\"tab\":[1],\"component\":[1],\"setActive\":[64]},null,{\"active\":[{\"changeActive\":0}]}],[257,\"ion-tabs\",{\"useRouter\":[1028,\"use-router\"],\"selectedTab\":[32],\"select\":[64],\"getTab\":[64],\"getSelected\":[64],\"setRouteId\":[64],\"getRouteId\":[64]}]]],[\"ion-img\",[[1,\"ion-img\",{\"alt\":[1],\"src\":[1],\"loadSrc\":[32],\"loadError\":[32]},null,{\"src\":[{\"srcChanged\":0}]}]]],[\"ion-input-otp\",[[294,\"ion-input-otp\",{\"autocapitalize\":[1],\"color\":[513],\"disabled\":[516],\"fill\":[1],\"inputmode\":[1],\"length\":[2],\"pattern\":[1],\"readonly\":[516],\"separators\":[1],\"shape\":[1],\"size\":[1],\"type\":[1],\"value\":[1032],\"inputValues\":[32],\"hasFocus\":[32],\"previousInputValues\":[32],\"setFocus\":[64]},null,{\"value\":[{\"valueChanged\":0}],\"separators\":[{\"processSeparators\":0}],\"length\":[{\"processSeparators\":0}]}]]],[\"ion-progress-bar\",[[33,\"ion-progress-bar\",{\"type\":[1],\"reversed\":[4],\"value\":[2],\"buffer\":[2],\"color\":[513]}]]],[\"ion-range\",[[289,\"ion-range\",{\"color\":[513],\"debounce\":[2],\"name\":[1],\"label\":[1],\"dualKnobs\":[4,\"dual-knobs\"],\"min\":[2],\"max\":[2],\"pin\":[4],\"pinFormatter\":[16],\"snaps\":[4],\"step\":[2],\"ticks\":[4],\"activeBarStart\":[1026,\"active-bar-start\"],\"disabled\":[4],\"value\":[1026],\"labelPlacement\":[1,\"label-placement\"],\"ratioA\":[32],\"ratioB\":[32],\"activatedKnob\":[32],\"focusedKnob\":[32],\"hoveredKnob\":[32],\"pressedKnob\":[32]},null,{\"debounce\":[{\"debounceChanged\":0}],\"dualKnobs\":[{\"dualKnobsChanged\":0}],\"min\":[{\"minChanged\":0}],\"max\":[{\"maxChanged\":0}],\"step\":[{\"stepChanged\":0}],\"activeBarStart\":[{\"activeBarStartChanged\":0}],\"disabled\":[{\"disabledChanged\":0}],\"value\":[{\"valueChanged\":0}]}]]],[\"ion-segment-content\",[[257,\"ion-segment-content\"]]],[\"ion-segment-view\",[[289,\"ion-segment-view\",{\"disabled\":[4],\"swipeGesture\":[4,\"swipe-gesture\"],\"isManualScroll\":[32],\"setContent\":[64]},[[1,\"scroll\",\"handleScroll\"],[1,\"touchstart\",\"handleScrollStart\"],[1,\"touchend\",\"handleTouchEnd\"]]]]],[\"ion-split-pane\",[[289,\"ion-split-pane\",{\"contentId\":[513,\"content-id\"],\"disabled\":[4],\"when\":[8],\"visible\":[32],\"isVisible\":[64]},null,{\"visible\":[{\"visibleChanged\":0}],\"disabled\":[{\"updateState\":0}],\"when\":[{\"updateState\":0}]}]]],[\"ion-text\",[[257,\"ion-text\",{\"color\":[513]}]]],[\"ion-textarea\",[[294,\"ion-textarea\",{\"color\":[513],\"autocapitalize\":[1],\"autofocus\":[4],\"clearOnEdit\":[4,\"clear-on-edit\"],\"debounce\":[2],\"disabled\":[516],\"fill\":[1],\"inputmode\":[1],\"enterkeyhint\":[1],\"maxlength\":[2],\"minlength\":[2],\"name\":[1],\"placeholder\":[1],\"readonly\":[516],\"required\":[4],\"spellcheck\":[4],\"cols\":[514],\"rows\":[2],\"wrap\":[1],\"autoGrow\":[516,\"auto-grow\"],\"value\":[1025],\"counter\":[4],\"counterFormatter\":[16],\"errorText\":[1,\"error-text\"],\"helperText\":[1,\"helper-text\"],\"label\":[1],\"labelPlacement\":[1,\"label-placement\"],\"shape\":[1],\"hasFocus\":[32],\"isInvalid\":[32],\"setFocus\":[64],\"getInputElement\":[64]},[[2,\"click\",\"onClickCapture\"]],{\"debounce\":[{\"debounceChanged\":0}],\"value\":[{\"valueChanged\":0}],\"dir\":[{\"onDirChanged\":0}]}]]],[\"ion-select-modal\",[[34,\"ion-select-modal\",{\"header\":[1],\"cancelText\":[1,\"cancel-text\"],\"multiple\":[4],\"options\":[16]}]]],[\"ion-picker\",[[289,\"ion-picker\",{\"exitInputMode\":[64]},[[1,\"touchstart\",\"preventTouchStartPropagation\"]]]]],[\"ion-picker-column\",[[257,\"ion-picker-column\",{\"disabled\":[4],\"value\":[1032],\"color\":[513],\"numericInput\":[4,\"numeric-input\"],\"ariaLabel\":[32],\"isActive\":[32],\"scrollActiveItemIntoView\":[64],\"setValue\":[64],\"setFocus\":[64]},null,{\"aria-label\":[{\"ariaLabelChanged\":0}],\"value\":[{\"valueChange\":0}]}]]],[\"ion-picker-column-option\",[[289,\"ion-picker-column-option\",{\"disabled\":[4],\"value\":[8],\"color\":[513],\"ariaLabel\":[32]},null,{\"aria-label\":[{\"onAriaLabelChange\":0}]}]]],[\"ion-backdrop\",[[33,\"ion-backdrop\",{\"visible\":[4],\"tappable\":[4],\"stopPropagation\":[4,\"stop-propagation\"]},[[2,\"click\",\"onMouseDown\"]]]]],[\"ion-app_8\",[[0,\"ion-app\",{\"setFocus\":[64]}],[292,\"ion-footer\",{\"collapse\":[1],\"translucent\":[4],\"keyboardVisible\":[32]}],[257,\"ion-router-outlet\",{\"mode\":[1025],\"delegate\":[16],\"animated\":[4],\"animation\":[16],\"swipeGesture\":[1028,\"swipe-gesture\"],\"swipeHandler\":[16],\"commit\":[64],\"setRouteId\":[64],\"getRouteId\":[64]},null,{\"swipeGesture\":[{\"swipeGestureChanged\":0}],\"swipeHandler\":[{\"swipeHandlerChanged\":0}]}],[257,\"ion-content\",{\"color\":[513],\"fullscreen\":[4],\"fixedSlotPlacement\":[1,\"fixed-slot-placement\"],\"forceOverscroll\":[1028,\"force-overscroll\"],\"scrollX\":[4,\"scroll-x\"],\"scrollY\":[4,\"scroll-y\"],\"scrollEvents\":[4,\"scroll-events\"],\"sizeToContent\":[32],\"recalculateDimensions\":[64],\"getScrollElement\":[64],\"getBackgroundElement\":[64],\"scrollToTop\":[64],\"scrollToBottom\":[64],\"scrollByPoint\":[64],\"scrollToPoint\":[64]},[[9,\"resize\",\"onResize\"]],{\"fullscreen\":[{\"fullscreenChanged\":0}]}],[292,\"ion-header\",{\"collapse\":[1],\"translucent\":[4]}],[289,\"ion-title\",{\"color\":[513],\"size\":[1]},null,{\"size\":[{\"sizeChanged\":0}]}],[289,\"ion-toolbar\",{\"color\":[513]},[[0,\"ionStyle\",\"childrenStyle\"]]],[294,\"ion-buttons\",{\"collapse\":[4]}]]],[\"ion-ripple-effect\",[[1,\"ion-ripple-effect\",{\"type\":[1],\"addRipple\":[64]}]]],[\"ion-action-sheet\",[[34,\"ion-action-sheet\",{\"overlayIndex\":[2,\"overlay-index\"],\"delegate\":[16],\"hasController\":[4,\"has-controller\"],\"keyboardClose\":[4,\"keyboard-close\"],\"enterAnimation\":[16],\"leaveAnimation\":[16],\"buttons\":[16],\"cssClass\":[1,\"css-class\"],\"backdropDismiss\":[4,\"backdrop-dismiss\"],\"header\":[1],\"subHeader\":[1,\"sub-header\"],\"translucent\":[4],\"animated\":[4],\"htmlAttributes\":[16],\"isOpen\":[4,\"is-open\"],\"trigger\":[1],\"activeRadioId\":[32],\"present\":[64],\"dismiss\":[64],\"onDidDismiss\":[64],\"onWillDismiss\":[64]},[[0,\"keydown\",\"onKeydown\"]],{\"buttons\":[{\"buttonsChanged\":0}],\"isOpen\":[{\"onIsOpenChange\":0}],\"trigger\":[{\"triggerChanged\":0}]}]]],[\"ion-alert\",[[34,\"ion-alert\",{\"overlayIndex\":[2,\"overlay-index\"],\"delegate\":[16],\"hasController\":[4,\"has-controller\"],\"keyboardClose\":[4,\"keyboard-close\"],\"enterAnimation\":[16],\"leaveAnimation\":[16],\"cssClass\":[1,\"css-class\"],\"header\":[1],\"subHeader\":[1,\"sub-header\"],\"message\":[1],\"buttons\":[16],\"inputs\":[1040],\"backdropDismiss\":[4,\"backdrop-dismiss\"],\"translucent\":[4],\"animated\":[4],\"htmlAttributes\":[16],\"isOpen\":[4,\"is-open\"],\"trigger\":[1],\"isButtonGroupWrapped\":[32],\"present\":[64],\"dismiss\":[64],\"onDidDismiss\":[64],\"onWillDismiss\":[64]},[[4,\"keydown\",\"onKeydown\"]],{\"isOpen\":[{\"onIsOpenChange\":0}],\"trigger\":[{\"triggerChanged\":0}],\"buttons\":[{\"buttonsChanged\":0}],\"inputs\":[{\"inputsChanged\":0}]}]]],[\"ion-modal\",[[289,\"ion-modal\",{\"hasController\":[4,\"has-controller\"],\"overlayIndex\":[2,\"overlay-index\"],\"delegate\":[16],\"keyboardClose\":[4,\"keyboard-close\"],\"enterAnimation\":[16],\"leaveAnimation\":[16],\"breakpoints\":[16],\"expandToScroll\":[4,\"expand-to-scroll\"],\"initialBreakpoint\":[2,\"initial-breakpoint\"],\"backdropBreakpoint\":[2,\"backdrop-breakpoint\"],\"handle\":[4],\"handleBehavior\":[1,\"handle-behavior\"],\"component\":[1],\"componentProps\":[16],\"cssClass\":[1,\"css-class\"],\"backdropDismiss\":[4,\"backdrop-dismiss\"],\"showBackdrop\":[4,\"show-backdrop\"],\"animated\":[4],\"presentingElement\":[16],\"htmlAttributes\":[16],\"isOpen\":[4,\"is-open\"],\"trigger\":[1],\"keepContentsMounted\":[4,\"keep-contents-mounted\"],\"focusTrap\":[4,\"focus-trap\"],\"canDismiss\":[4,\"can-dismiss\"],\"isSheetModal\":[32],\"presented\":[32],\"present\":[64],\"dismiss\":[64],\"onDidDismiss\":[64],\"onWillDismiss\":[64],\"setCurrentBreakpoint\":[64],\"getCurrentBreakpoint\":[64]},[[9,\"resize\",\"onWindowResize\"]],{\"isOpen\":[{\"onIsOpenChange\":0}],\"trigger\":[{\"triggerChanged\":0}],\"breakpoints\":[{\"breakpointsChanged\":0}]}]]],[\"ion-popover\",[[289,\"ion-popover\",{\"hasController\":[4,\"has-controller\"],\"delegate\":[16],\"overlayIndex\":[2,\"overlay-index\"],\"enterAnimation\":[16],\"leaveAnimation\":[16],\"component\":[1],\"componentProps\":[16],\"keyboardClose\":[4,\"keyboard-close\"],\"cssClass\":[1,\"css-class\"],\"backdropDismiss\":[4,\"backdrop-dismiss\"],\"event\":[8],\"showBackdrop\":[4,\"show-backdrop\"],\"translucent\":[4],\"animated\":[4],\"htmlAttributes\":[16],\"triggerAction\":[1,\"trigger-action\"],\"trigger\":[1],\"size\":[1],\"dismissOnSelect\":[4,\"dismiss-on-select\"],\"reference\":[1],\"side\":[1],\"alignment\":[1025],\"arrow\":[4],\"isOpen\":[4,\"is-open\"],\"keyboardEvents\":[4,\"keyboard-events\"],\"focusTrap\":[4,\"focus-trap\"],\"keepContentsMounted\":[4,\"keep-contents-mounted\"],\"presented\":[32],\"presentFromTrigger\":[64],\"present\":[64],\"dismiss\":[64],\"getParentPopover\":[64],\"onDidDismiss\":[64],\"onWillDismiss\":[64]},null,{\"trigger\":[{\"onTriggerChange\":0}],\"triggerAction\":[{\"onTriggerChange\":0}],\"isOpen\":[{\"onIsOpenChange\":0}]}]]],[\"ion-checkbox\",[[289,\"ion-checkbox\",{\"color\":[513],\"name\":[1],\"checked\":[1028],\"indeterminate\":[1028],\"disabled\":[4],\"errorText\":[1,\"error-text\"],\"helperText\":[1,\"helper-text\"],\"value\":[8],\"labelPlacement\":[1,\"label-placement\"],\"justify\":[1],\"alignment\":[1],\"required\":[4],\"isInvalid\":[32],\"hasLabelContent\":[32],\"hintTextId\":[32],\"setFocus\":[64]}]]],[\"ion-spinner\",[[1,\"ion-spinner\",{\"color\":[513],\"duration\":[2],\"name\":[1],\"paused\":[4]}]]],[\"ion-radio_2\",[[289,\"ion-radio\",{\"color\":[513],\"name\":[1],\"disabled\":[4],\"value\":[520],\"labelPlacement\":[1,\"label-placement\"],\"justify\":[1],\"alignment\":[1],\"checked\":[32],\"buttonTabindex\":[32],\"setFocus\":[64],\"setButtonTabindex\":[64]},null,{\"value\":[{\"valueChanged\":0}]}],[292,\"ion-radio-group\",{\"allowEmptySelection\":[4,\"allow-empty-selection\"],\"compareWith\":[1,\"compare-with\"],\"name\":[1],\"value\":[1032],\"helperText\":[1,\"helper-text\"],\"errorText\":[1,\"error-text\"],\"isInvalid\":[32],\"hintTextId\":[32],\"setFocus\":[64]},[[4,\"keydown\",\"onKeydown\"]],{\"value\":[{\"valueChanged\":0}]}]]],[\"ion-button_2\",[[289,\"ion-button\",{\"color\":[513],\"buttonType\":[1025,\"button-type\"],\"disabled\":[516],\"expand\":[513],\"fill\":[1537],\"routerDirection\":[1,\"router-direction\"],\"routerAnimation\":[16],\"download\":[1],\"href\":[1],\"rel\":[1],\"shape\":[513],\"size\":[513],\"strong\":[4],\"target\":[1],\"type\":[1],\"form\":[1],\"isCircle\":[32]},null,{\"disabled\":[{\"disabledChanged\":0}]}],[257,\"ion-icon\",{\"mode\":[1025],\"color\":[1],\"ios\":[1],\"md\":[1],\"flipRtl\":[4,\"flip-rtl\"],\"name\":[513],\"src\":[1],\"icon\":[8],\"size\":[1],\"lazy\":[4],\"sanitize\":[4],\"svgContent\":[32],\"isVisible\":[32]},null,{\"name\":[{\"loadIcon\":0}],\"src\":[{\"loadIcon\":0}],\"icon\":[{\"loadIcon\":0}],\"ios\":[{\"loadIcon\":0}],\"md\":[{\"loadIcon\":0}]}]]],[\"ion-item_8\",[[289,\"ion-item-divider\",{\"color\":[513],\"sticky\":[4]}],[32,\"ion-item-group\"],[289,\"ion-note\",{\"color\":[513]}],[1,\"ion-skeleton-text\",{\"animated\":[4]}],[294,\"ion-label\",{\"color\":[513],\"position\":[1],\"noAnimate\":[32]},null,{\"color\":[{\"colorChanged\":0}],\"position\":[{\"positionChanged\":0}]}],[289,\"ion-list-header\",{\"color\":[513],\"lines\":[1]}],[289,\"ion-item\",{\"color\":[513],\"button\":[4],\"detail\":[4],\"detailIcon\":[1,\"detail-icon\"],\"disabled\":[516],\"download\":[1],\"href\":[1],\"rel\":[1],\"lines\":[1],\"routerAnimation\":[16],\"routerDirection\":[1,\"router-direction\"],\"target\":[1],\"type\":[1],\"multipleInputs\":[32],\"focusable\":[32],\"isInteractive\":[32],\"hasSlottedIndicatorControl\":[32]},[[0,\"ionColor\",\"labelColorChanged\"],[0,\"ionStyle\",\"itemStyle\"]],{\"button\":[{\"buttonChanged\":0}]}],[32,\"ion-list\",{\"lines\":[1],\"inset\":[4],\"closeSlidingItems\":[64]}]]],[\"ion-select_3\",[[289,\"ion-select\",{\"cancelText\":[1,\"cancel-text\"],\"color\":[513],\"compareWith\":[1,\"compare-with\"],\"disabled\":[4],\"fill\":[1],\"errorText\":[1,\"error-text\"],\"helperText\":[1,\"helper-text\"],\"interface\":[1],\"interfaceOptions\":[8,\"interface-options\"],\"justify\":[1],\"label\":[1],\"labelPlacement\":[1,\"label-placement\"],\"multiple\":[4],\"name\":[1],\"okText\":[1,\"ok-text\"],\"placeholder\":[1],\"selectedText\":[1,\"selected-text\"],\"toggleIcon\":[1,\"toggle-icon\"],\"expandedIcon\":[1,\"expanded-icon\"],\"shape\":[1],\"value\":[1032],\"required\":[4],\"isExpanded\":[32],\"hasFocus\":[32],\"isInvalid\":[32],\"hintTextId\":[32],\"open\":[64]},[[2,\"click\",\"onClickCapture\"]],{\"disabled\":[{\"styleChanged\":0}],\"isExpanded\":[{\"styleChanged\":0}],\"placeholder\":[{\"styleChanged\":0}],\"value\":[{\"styleChanged\":0}]}],[1,\"ion-select-option\",{\"disabled\":[4],\"value\":[8],\"description\":[1],\"labelPlacement\":[1,\"label-placement\"],\"justify\":[1]}],[34,\"ion-select-popover\",{\"header\":[1],\"subHeader\":[1,\"sub-header\"],\"message\":[1],\"multiple\":[4],\"options\":[16]}]]]]"), options);
};
//#endregion
//#region node_modules/@ionic/core/loader/index.js
/*!
* (C) Ionic http://ionicframework.com - MIT License
*/
(function() {
	if ("undefined" !== typeof window && void 0 !== window.Reflect && void 0 !== window.customElements) {
		var a = HTMLElement;
		window.HTMLElement = function() {
			return Reflect.construct(a, [], this.constructor);
		};
		HTMLElement.prototype = a.prototype;
		HTMLElement.prototype.constructor = HTMLElement;
		Object.setPrototypeOf(HTMLElement, a);
	}
})();
//#endregion
//#region node_modules/@ionic/angular/dist/lazy/app-initialize.js
var appInitialize = (config, doc, zone) => {
	return () => {
		const win = doc.defaultView;
		if (win && typeof window !== "undefined") {
			setupConfig({
				...config,
				_zoneGate: (h) => zone.run(h)
			});
			const aelFn = "__zone_symbol__addEventListener" in doc.body ? "__zone_symbol__addEventListener" : "addEventListener";
			return defineCustomElements(win, {
				exclude: ["ion-tabs"],
				syncQueue: true,
				raf,
				jmp: (h) => zone.runOutsideAngular(h),
				ael(elm, eventName, cb, opts) {
					elm[aelFn](eventName, cb, opts);
				},
				rel(elm, eventName, cb, opts) {
					elm.removeEventListener(eventName, cb, opts);
				}
			});
		}
	};
};
//#endregion
//#region node_modules/@ionic/angular/dist/lazy/ionic-module.js
var DECLARATIONS = [
	...[
		IonAccordion,
		IonAccordionGroup,
		IonActionSheet,
		IonAlert,
		IonApp,
		IonAvatar,
		IonBackdrop,
		IonBadge,
		IonBreadcrumb,
		IonBreadcrumbs,
		IonButton,
		IonButtons,
		IonCard,
		IonCardContent,
		IonCardHeader,
		IonCardSubtitle,
		IonCardTitle,
		IonCheckbox,
		IonChip,
		IonCol,
		IonContent,
		IonDatetime,
		IonDatetimeButton,
		IonFab,
		IonFabButton,
		IonFabList,
		IonFooter,
		IonGrid,
		IonHeader,
		IonIcon,
		IonImg,
		IonInfiniteScroll,
		IonInfiniteScrollContent,
		IonInput,
		IonInputOtp,
		IonInputPasswordToggle,
		IonItem,
		IonItemDivider,
		IonItemGroup,
		IonItemOption,
		IonItemOptions,
		IonItemSliding,
		IonLabel,
		IonList,
		IonListHeader,
		IonLoading,
		IonMenu,
		IonMenuButton,
		IonMenuToggle,
		IonNavLink,
		IonNote,
		IonPicker,
		IonPickerColumn,
		IonPickerColumnOption,
		IonProgressBar,
		IonRadio,
		IonRadioGroup,
		IonRange,
		IonRefresher,
		IonRefresherContent,
		IonReorder,
		IonReorderGroup,
		IonRippleEffect,
		IonRow,
		IonSearchbar,
		IonSegment,
		IonSegmentButton,
		IonSegmentContent,
		IonSegmentView,
		IonSelect,
		IonSelectModal,
		IonSelectOption,
		IonSkeletonText,
		IonSpinner,
		IonSplitPane,
		IonTab,
		IonTabBar,
		IonTabButton,
		IonText,
		IonTextarea,
		IonThumbnail,
		IonTitle,
		IonToast,
		IonToggle,
		IonToolbar
	],
	IonModal,
	IonPopover,
	BooleanValueAccessorDirective,
	NumericValueAccessorDirective,
	SelectValueAccessorDirective,
	TextValueAccessorDirective,
	IonTabs,
	IonRouterOutlet,
	IonBackButton,
	IonNav,
	RouterLinkDelegateDirective,
	RouterLinkWithHrefDelegateDirective,
	IonMinValidator,
	IonMaxValidator
];
/**
* @deprecated `IonicModule` is deprecated and will be removed in a future major version.
* Use `provideIonicAngular()` instead, which works in both standalone and NgModule-based
* applications. Refer to https://ionicframework.com/docs/angular/build-options for migration steps.
*/
var IonicModule = class IonicModule {
	/**
	* @deprecated `IonicModule.forRoot()` is deprecated and will be removed in a future major version.
	* Use `provideIonicAngular()` instead. Any config passed here can be passed as an object to that
	* function. Refer to https://ionicframework.com/docs/angular/build-options for migration steps.
	*/
	static forRoot(config = {}) {
		console.warn(`[Ionic Warning]: IonicModule has been deprecated in favor of provideIonicAngular() and will be removed in a future major version. Refer to https://ionicframework.com/docs/angular/build-options for migration steps.`);
		return {
			ngModule: IonicModule,
			providers: [
				{
					provide: ConfigToken,
					useValue: config
				},
				{
					provide: APP_INITIALIZER,
					useFactory: appInitialize,
					multi: true,
					deps: [
						ConfigToken,
						DOCUMENT,
						NgZone
					]
				},
				AngularDelegate,
				provideComponentInputBinding()
			]
		};
	}
	/** @nocollapse */
	static ɵfac = function IonicModule_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || IonicModule)();
	};
	/** @nocollapse */
	static ɵmod = /* @__PURE__ */ ɵɵdefineNgModule({
		type: IonicModule,
		declarations: [
			IonAccordion,
			IonAccordionGroup,
			IonActionSheet,
			IonAlert,
			IonApp,
			IonAvatar,
			IonBackdrop,
			IonBadge,
			IonBreadcrumb,
			IonBreadcrumbs,
			IonButton,
			IonButtons,
			IonCard,
			IonCardContent,
			IonCardHeader,
			IonCardSubtitle,
			IonCardTitle,
			IonCheckbox,
			IonChip,
			IonCol,
			IonContent,
			IonDatetime,
			IonDatetimeButton,
			IonFab,
			IonFabButton,
			IonFabList,
			IonFooter,
			IonGrid,
			IonHeader,
			IonIcon,
			IonImg,
			IonInfiniteScroll,
			IonInfiniteScrollContent,
			IonInput,
			IonInputOtp,
			IonInputPasswordToggle,
			IonItem,
			IonItemDivider,
			IonItemGroup,
			IonItemOption,
			IonItemOptions,
			IonItemSliding,
			IonLabel,
			IonList,
			IonListHeader,
			IonLoading,
			IonMenu,
			IonMenuButton,
			IonMenuToggle,
			IonNavLink,
			IonNote,
			IonPicker,
			IonPickerColumn,
			IonPickerColumnOption,
			IonProgressBar,
			IonRadio,
			IonRadioGroup,
			IonRange,
			IonRefresher,
			IonRefresherContent,
			IonReorder,
			IonReorderGroup,
			IonRippleEffect,
			IonRow,
			IonSearchbar,
			IonSegment,
			IonSegmentButton,
			IonSegmentContent,
			IonSegmentView,
			IonSelect,
			IonSelectModal,
			IonSelectOption,
			IonSkeletonText,
			IonSpinner,
			IonSplitPane,
			IonTab,
			IonTabBar,
			IonTabButton,
			IonText,
			IonTextarea,
			IonThumbnail,
			IonTitle,
			IonToast,
			IonToggle,
			IonToolbar,
			IonModal,
			IonPopover,
			BooleanValueAccessorDirective,
			NumericValueAccessorDirective,
			SelectValueAccessorDirective,
			TextValueAccessorDirective,
			IonTabs,
			IonRouterOutlet,
			IonBackButton,
			IonNav,
			RouterLinkDelegateDirective,
			RouterLinkWithHrefDelegateDirective,
			IonMinValidator,
			IonMaxValidator
		],
		imports: [CommonModule],
		exports: [
			IonAccordion,
			IonAccordionGroup,
			IonActionSheet,
			IonAlert,
			IonApp,
			IonAvatar,
			IonBackdrop,
			IonBadge,
			IonBreadcrumb,
			IonBreadcrumbs,
			IonButton,
			IonButtons,
			IonCard,
			IonCardContent,
			IonCardHeader,
			IonCardSubtitle,
			IonCardTitle,
			IonCheckbox,
			IonChip,
			IonCol,
			IonContent,
			IonDatetime,
			IonDatetimeButton,
			IonFab,
			IonFabButton,
			IonFabList,
			IonFooter,
			IonGrid,
			IonHeader,
			IonIcon,
			IonImg,
			IonInfiniteScroll,
			IonInfiniteScrollContent,
			IonInput,
			IonInputOtp,
			IonInputPasswordToggle,
			IonItem,
			IonItemDivider,
			IonItemGroup,
			IonItemOption,
			IonItemOptions,
			IonItemSliding,
			IonLabel,
			IonList,
			IonListHeader,
			IonLoading,
			IonMenu,
			IonMenuButton,
			IonMenuToggle,
			IonNavLink,
			IonNote,
			IonPicker,
			IonPickerColumn,
			IonPickerColumnOption,
			IonProgressBar,
			IonRadio,
			IonRadioGroup,
			IonRange,
			IonRefresher,
			IonRefresherContent,
			IonReorder,
			IonReorderGroup,
			IonRippleEffect,
			IonRow,
			IonSearchbar,
			IonSegment,
			IonSegmentButton,
			IonSegmentContent,
			IonSegmentView,
			IonSelect,
			IonSelectModal,
			IonSelectOption,
			IonSkeletonText,
			IonSpinner,
			IonSplitPane,
			IonTab,
			IonTabBar,
			IonTabButton,
			IonText,
			IonTextarea,
			IonThumbnail,
			IonTitle,
			IonToast,
			IonToggle,
			IonToolbar,
			IonModal,
			IonPopover,
			BooleanValueAccessorDirective,
			NumericValueAccessorDirective,
			SelectValueAccessorDirective,
			TextValueAccessorDirective,
			IonTabs,
			IonRouterOutlet,
			IonBackButton,
			IonNav,
			RouterLinkDelegateDirective,
			RouterLinkWithHrefDelegateDirective,
			IonMinValidator,
			IonMaxValidator
		]
	});
	/** @nocollapse */
	static ɵinj = /* @__PURE__ */ ɵɵdefineInjector({
		providers: [ModalController, PopoverController],
		imports: [CommonModule]
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonicModule, [{
		type: NgModule,
		args: [{
			declarations: DECLARATIONS,
			exports: DECLARATIONS,
			providers: [ModalController, PopoverController],
			imports: [CommonModule]
		}]
	}], null, null);
})();
//#endregion
export { ActionSheetController, AlertController, AngularDelegate, AnimationController, BooleanValueAccessorDirective as BooleanValueAccessor, Config, DomController, GestureController, ION_MAX_VALIDATOR, ION_MIN_VALIDATOR, IonAccordion, IonAccordionGroup, IonActionSheet, IonAlert, IonApp, IonAvatar, IonBackButton, IonBackdrop, IonBadge, IonBreadcrumb, IonBreadcrumbs, IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCheckbox, IonChip, IonCol, IonContent, IonDatetime, IonDatetimeButton, IonFab, IonFabButton, IonFabList, IonFooter, IonGrid, IonHeader, IonIcon, IonImg, IonInfiniteScroll, IonInfiniteScrollContent, IonInput, IonInputOtp, IonInputPasswordToggle, IonItem, IonItemDivider, IonItemGroup, IonItemOption, IonItemOptions, IonItemSliding, IonLabel, IonList, IonListHeader, IonLoading, IonMaxValidator, IonMenu, IonMenuButton, IonMenuToggle, IonMinValidator, IonModal, IonModalToken, IonNav, IonNavLink, IonNote, IonPicker, IonPickerColumn, IonPickerColumnOption, IonPopover, IonProgressBar, IonRadio, IonRadioGroup, IonRange, IonRefresher, IonRefresherContent, IonReorder, IonReorderGroup, IonRippleEffect, IonRouterOutlet, IonRow, IonSearchbar, IonSegment, IonSegmentButton, IonSegmentContent, IonSegmentView, IonSelect, IonSelectModal, IonSelectOption, IonSkeletonText, IonSpinner, IonSplitPane, IonTab, IonTabBar, IonTabButton, IonTabs, IonText, IonTextarea, IonThumbnail, IonTitle, IonToast, IonToggle, IonToolbar, IonicModule, IonicRouteStrategy, IonicSafeString, IonicSlides, LoadingController, MenuController, ModalController, NavController, NavParams, NumericValueAccessorDirective as NumericValueAccessor, Platform, PopoverController, RouterLinkDelegateDirective as RouterLinkDelegate, RouterLinkWithHrefDelegateDirective as RouterLinkWithHrefDelegate, SelectValueAccessorDirective as SelectValueAccessor, TextValueAccessorDirective as TextValueAccessor, ToastController, createAnimation, createGesture, getIonPageElement, getPlatforms, getTimeGivenProgression, iosTransitionAnimation, isPlatform, mdTransitionAnimation, openURL };
