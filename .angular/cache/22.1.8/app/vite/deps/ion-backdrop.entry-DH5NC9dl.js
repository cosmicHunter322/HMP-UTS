import { c as createEvent, p as h, r as Host, v as registerInstance } from "./index-Dvqtt_WK-CtfmC4By.js";
import { t as getIonMode } from "./ionic-global-BSaFA7np-C0AYHzhu.js";
//#region node_modules/@ionic/core/dist/esm/ion-backdrop.entry.js
/*!
* (C) Ionic http://ionicframework.com - MIT License
*/
var backdropIosCss = () => `:host{left:0;right:0;top:0;bottom:0;display:block;position:absolute;-webkit-transform:translateZ(0);transform:translateZ(0);contain:strict;cursor:pointer;opacity:0.01;-ms-touch-action:none;touch-action:none;z-index:2}:host(.backdrop-hide){background:transparent}:host(.backdrop-no-tappable){cursor:auto}:host{background-color:var(--ion-backdrop-color, #000)}`;
var backdropMdCss = () => `:host{left:0;right:0;top:0;bottom:0;display:block;position:absolute;-webkit-transform:translateZ(0);transform:translateZ(0);contain:strict;cursor:pointer;opacity:0.01;-ms-touch-action:none;touch-action:none;z-index:2}:host(.backdrop-hide){background:transparent}:host(.backdrop-no-tappable){cursor:auto}:host{background-color:var(--ion-backdrop-color, #000)}`;
var Backdrop = class {
	constructor(hostRef) {
		registerInstance(this, hostRef);
		this.ionBackdropTap = createEvent(this, "ionBackdropTap", 7);
		/**
		* If `true`, the backdrop will be visible.
		*/
		this.visible = true;
		/**
		* If `true`, the backdrop will can be clicked and will emit the `ionBackdropTap` event.
		*/
		this.tappable = true;
		/**
		* If `true`, the backdrop will stop propagation on tap.
		*/
		this.stopPropagation = true;
	}
	onMouseDown(ev) {
		this.emitTap(ev);
	}
	emitTap(ev) {
		if (this.stopPropagation) {
			ev.preventDefault();
			ev.stopPropagation();
		}
		if (this.tappable) this.ionBackdropTap.emit();
	}
	render() {
		return h(Host, {
			key: "7abaf2c310aa399607451b14063265e8a5846938",
			"aria-hidden": "true",
			class: {
				[getIonMode(this)]: true,
				"backdrop-hide": !this.visible,
				"backdrop-no-tappable": !this.tappable
			}
		});
	}
};
Backdrop.style = {
	ios: backdropIosCss(),
	md: backdropMdCss()
};
//#endregion
export { Backdrop as ion_backdrop };
