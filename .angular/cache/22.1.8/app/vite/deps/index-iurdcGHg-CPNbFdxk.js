import { h as printIonWarning } from "./index-Dvqtt_WK-CtfmC4By.js";
import { i as componentOnReady, s as doc } from "./helpers-BJFnZngp-COG28xNj.js";
import { t as createAnimation } from "./animation-CAzXJ2I1-D34TSm8w.js";
import { t as getIonMode } from "./ionic-global-BSaFA7np-C0AYHzhu.js";
import "./overlays-a_5AhqWk-BAKKNgyR.js";
//#region node_modules/@ionic/core/dist/esm/index-iurdcGHg.js
/*!
* (C) Ionic http://ionicframework.com - MIT License
*/
/**
* baseAnimation
* Base class which is extended by the various types. Each
* type will provide their own animations for open and close
* and registers itself with Menu.
*/
var baseAnimation = (isIos) => {
	/**
	* "Apply the sharp curve to items temporarily leaving the screen that may return
	* from the same exit point. When they return, use the deceleration curve. On mobile,
	* this transition typically occurs over 300ms" -- MD Motion Guide
	*/
	return createAnimation().duration(isIos ? 400 : 300);
};
/**
* Menu Overlay Type
* The menu slides over the content. The content
* itself, which is under the menu, does not move.
*/
var menuOverlayAnimation = (menu) => {
	let closedX;
	let openedX;
	const width = menu.width + 8;
	const menuAnimation = createAnimation();
	const backdropAnimation = createAnimation();
	if (menu.isEndSide) {
		closedX = width + "px";
		openedX = "0px";
	} else {
		closedX = -width + "px";
		openedX = "0px";
	}
	menuAnimation.addElement(menu.menuInnerEl).fromTo("transform", `translateX(${closedX})`, `translateX(${openedX})`);
	const isIos = getIonMode(menu) === "ios";
	const opacity = isIos ? .2 : .25;
	backdropAnimation.addElement(menu.backdropEl).fromTo("opacity", .01, opacity);
	return baseAnimation(isIos).addAnimation([menuAnimation, backdropAnimation]);
};
/**
* Menu Push Type
* The content slides over to reveal the menu underneath.
* The menu itself also slides over to reveal its bad self.
*/
var menuPushAnimation = (menu) => {
	let contentOpenedX;
	let menuClosedX;
	const mode = getIonMode(menu);
	const width = menu.width;
	if (menu.isEndSide) {
		contentOpenedX = -width + "px";
		menuClosedX = width + "px";
	} else {
		contentOpenedX = width + "px";
		menuClosedX = -width + "px";
	}
	const menuAnimation = createAnimation().addElement(menu.menuInnerEl).fromTo("transform", `translateX(${menuClosedX})`, "translateX(0px)");
	const contentAnimation = createAnimation().addElement(menu.contentEl).fromTo("transform", "translateX(0px)", `translateX(${contentOpenedX})`);
	const backdropAnimation = createAnimation().addElement(menu.backdropEl).fromTo("opacity", .01, .32);
	return baseAnimation(mode === "ios").addAnimation([
		menuAnimation,
		contentAnimation,
		backdropAnimation
	]);
};
/**
* Menu Reveal Type
* The content slides over to reveal the menu underneath.
* The menu itself, which is under the content, does not move.
*/
var menuRevealAnimation = (menu) => {
	const mode = getIonMode(menu);
	const openedX = menu.width * (menu.isEndSide ? -1 : 1) + "px";
	const contentOpen = createAnimation().addElement(menu.contentEl).fromTo("transform", "translateX(0px)", `translateX(${openedX})`);
	return baseAnimation(mode === "ios").addAnimation(contentOpen);
};
var createMenuController = () => {
	const menuAnimations = /* @__PURE__ */ new Map();
	const menus = [];
	const open = async (menu) => {
		const menuEl = await get(menu, true);
		if (menuEl) return menuEl.open();
		return false;
	};
	const close = async (menu) => {
		const menuEl = await (menu !== void 0 ? get(menu, true) : getOpen());
		if (menuEl !== void 0) return menuEl.close();
		return false;
	};
	const toggle = async (menu) => {
		const menuEl = await get(menu, true);
		if (menuEl) return menuEl.toggle();
		return false;
	};
	const enable = async (shouldEnable, menu) => {
		const menuEl = await get(menu);
		if (menuEl) menuEl.disabled = !shouldEnable;
		return menuEl;
	};
	const swipeGesture = async (shouldEnable, menu) => {
		const menuEl = await get(menu);
		if (menuEl) menuEl.swipeGesture = shouldEnable;
		return menuEl;
	};
	const isOpen = async (menu) => {
		if (menu != null) {
			const menuEl = await get(menu);
			return menuEl !== void 0 && menuEl.isOpen();
		} else return await getOpen() !== void 0;
	};
	const isEnabled = async (menu) => {
		const menuEl = await get(menu);
		if (menuEl) return !menuEl.disabled;
		return false;
	};
	/**
	* Finds and returns the menu specified by "menu" if registered.
	* @param menu - The side or ID of the desired menu
	* @param logOnMultipleSideMenus - If true, this function will log a warning
	* if "menu" is a side but multiple menus on the same side were found. Since this function
	* is used in multiple places, we default this log to false so that the calling
	* functions can choose whether or not it is appropriate to log this warning.
	*/
	const get = async (menu, logOnMultipleSideMenus = false) => {
		await waitUntilReady();
		if (menu === "start" || menu === "end") {
			const menuRefs = menus.filter((m) => m.side === menu && !m.disabled);
			if (menuRefs.length >= 1) {
				if (menuRefs.length > 1 && logOnMultipleSideMenus) printIonWarning(`menuController queried for a menu on the "${menu}" side, but ${menuRefs.length} menus were found. The first menu reference will be used. If this is not the behavior you want then pass the ID of the menu instead of its side.`, menuRefs.map((m) => m.el));
				return menuRefs[0].el;
			}
			const sideMenuRefs = menus.filter((m) => m.side === menu);
			if (sideMenuRefs.length >= 1) {
				if (sideMenuRefs.length > 1 && logOnMultipleSideMenus) printIonWarning(`menuController queried for a menu on the "${menu}" side, but ${sideMenuRefs.length} menus were found. The first menu reference will be used. If this is not the behavior you want then pass the ID of the menu instead of its side.`, sideMenuRefs.map((m) => m.el));
				return sideMenuRefs[0].el;
			}
		} else if (menu != null) return find((m) => m.menuId === menu);
		const menuEl = find((m) => !m.disabled);
		if (menuEl) return menuEl;
		return menus.length > 0 ? menus[0].el : void 0;
	};
	/**
	* Get the instance of the opened menu. Returns `null` if a menu is not found.
	*/
	const getOpen = async () => {
		await waitUntilReady();
		return _getOpenSync();
	};
	/**
	* Get all menu instances.
	*/
	const getMenus = async () => {
		await waitUntilReady();
		return getMenusSync();
	};
	/**
	* Get whether or not a menu is animating. Returns `true` if any
	* menu is currently animating.
	*/
	const isAnimating = async () => {
		await waitUntilReady();
		return isAnimatingSync();
	};
	const registerAnimation = (name, animation) => {
		menuAnimations.set(name, animation);
	};
	const _register = (menu) => {
		if (menus.indexOf(menu) < 0) menus.push(menu);
	};
	const _unregister = (menu) => {
		const index = menus.indexOf(menu);
		if (index > -1) menus.splice(index, 1);
	};
	const _setOpen = async (menu, shouldOpen, animated, role) => {
		if (isAnimatingSync()) return false;
		if (shouldOpen) {
			const openedMenu = await getOpen();
			if (openedMenu && menu.el !== openedMenu) await openedMenu.setOpen(false, false);
		}
		return menu._setOpen(shouldOpen, animated, role);
	};
	const _createAnimation = (type, menuCmp) => {
		const animationBuilder = menuAnimations.get(type);
		if (!animationBuilder) throw new Error("animation not registered");
		return animationBuilder(menuCmp);
	};
	const _getOpenSync = () => {
		return find((m) => m._isOpen);
	};
	const getMenusSync = () => {
		return menus.map((menu) => menu.el);
	};
	const isAnimatingSync = () => {
		return menus.some((menu) => menu.isAnimating);
	};
	const find = (predicate) => {
		const instance = menus.find(predicate);
		if (instance !== void 0) return instance.el;
	};
	const waitUntilReady = () => {
		return Promise.all(Array.from(document.querySelectorAll("ion-menu")).map((menu) => new Promise((resolve) => componentOnReady(menu, resolve))));
	};
	registerAnimation("reveal", menuRevealAnimation);
	registerAnimation("push", menuPushAnimation);
	registerAnimation("overlay", menuOverlayAnimation);
	doc?.addEventListener("ionBackButton", (ev) => {
		const openMenu = _getOpenSync();
		if (openMenu) ev.detail.register(99, () => {
			return openMenu.close();
		});
	});
	return {
		registerAnimation,
		get,
		getMenus,
		getOpen,
		isEnabled,
		swipeGesture,
		isAnimating,
		isOpen,
		enable,
		toggle,
		close,
		open,
		_getOpenSync,
		_createAnimation,
		_register,
		_unregister,
		_setOpen
	};
};
var menuController = /*@__PURE__*/ createMenuController();
//#endregion
export { menuController as t };
