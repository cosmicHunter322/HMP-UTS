import { t as getCapacitor } from "./capacitor-C041I3qZ-AKn9tKTZ.js";
//#region node_modules/@ionic/core/dist/esm/haptic-D3njgGLB.js
/*!
* (C) Ionic http://ionicframework.com - MIT License
*/
var ImpactStyle;
(function(ImpactStyle) {
	/**
	* A collision between large, heavy user interface elements
	*
	* @since 1.0.0
	*/
	ImpactStyle["Heavy"] = "HEAVY";
	/**
	* A collision between moderately sized user interface elements
	*
	* @since 1.0.0
	*/
	ImpactStyle["Medium"] = "MEDIUM";
	/**
	* A collision between small, light user interface elements
	*
	* @since 1.0.0
	*/
	ImpactStyle["Light"] = "LIGHT";
})(ImpactStyle || (ImpactStyle = {}));
var NotificationType;
(function(NotificationType) {
	/**
	* A notification feedback type indicating that a task has completed successfully
	*
	* @since 1.0.0
	*/
	NotificationType["Success"] = "SUCCESS";
	/**
	* A notification feedback type indicating that a task has produced a warning
	*
	* @since 1.0.0
	*/
	NotificationType["Warning"] = "WARNING";
	/**
	* A notification feedback type indicating that a task has failed
	*
	* @since 1.0.0
	*/
	NotificationType["Error"] = "ERROR";
})(NotificationType || (NotificationType = {}));
var HapticEngine = {
	getEngine() {
		const capacitor = getCapacitor();
		if (capacitor?.isPluginAvailable("Haptics")) return capacitor.Plugins.Haptics;
	},
	available() {
		if (!this.getEngine()) return false;
		/**
		* Developers can manually import the
		* Haptics plugin in their app which will cause
		* getEngine to return the Haptics engine. However,
		* the Haptics engine will throw an error if
		* used in a web browser that does not support
		* the Vibrate API. This check avoids that error
		* if the browser does not support the Vibrate API.
		*/
		if (getCapacitor()?.getPlatform() === "web") return typeof navigator !== "undefined" && navigator.vibrate !== void 0;
		return true;
	},
	impact(options) {
		const engine = this.getEngine();
		if (!engine) return;
		engine.impact({ style: options.style });
	},
	notification(options) {
		const engine = this.getEngine();
		if (!engine) return;
		engine.notification({ type: options.type });
	},
	selection() {
		this.impact({ style: ImpactStyle.Light });
	},
	selectionStart() {
		const engine = this.getEngine();
		if (!engine) return;
		engine.selectionStart();
	},
	selectionChanged() {
		const engine = this.getEngine();
		if (!engine) return;
		engine.selectionChanged();
	},
	selectionEnd() {
		const engine = this.getEngine();
		if (!engine) return;
		engine.selectionEnd();
	}
};
/**
* Check to see if the Haptic Plugin is available
* @return Returns `true` or false if the plugin is available
*/
var hapticAvailable = () => {
	return HapticEngine.available();
};
/**
* Trigger a selection changed haptic event. Good for one-time events
* (not for gestures)
*/
var hapticSelection = () => {
	hapticAvailable() && HapticEngine.selection();
};
/**
* Tell the haptic engine that a gesture for a selection change is starting.
*/
var hapticSelectionStart = () => {
	hapticAvailable() && HapticEngine.selectionStart();
};
/**
* Tell the haptic engine that a selection changed during a gesture.
*/
var hapticSelectionChanged = () => {
	hapticAvailable() && HapticEngine.selectionChanged();
};
/**
* Tell the haptic engine we are done with a gesture. This needs to be
* called lest resources are not properly recycled.
*/
var hapticSelectionEnd = () => {
	hapticAvailable() && HapticEngine.selectionEnd();
};
/**
* Use this to indicate success/failure/warning to the user.
* options should be of the type `{ style: ImpactStyle.LIGHT }` (or `MEDIUM`/`HEAVY`)
*/
var hapticImpact = (options) => {
	hapticAvailable() && HapticEngine.impact(options);
};
//#endregion
export { hapticSelectionEnd as a, hapticSelectionChanged as i, hapticImpact as n, hapticSelectionStart as o, hapticSelection as r, ImpactStyle as t };
