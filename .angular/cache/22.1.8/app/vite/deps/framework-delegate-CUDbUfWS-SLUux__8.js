import { i as componentOnReady } from "./helpers-BJFnZngp-COG28xNj.js";
//#region node_modules/@ionic/core/dist/esm/framework-delegate-CUDbUfWS.js
/*!
* (C) Ionic http://ionicframework.com - MIT License
*/
var attachComponent = async (delegate, container, component, cssClasses, componentProps, inline) => {
	if (delegate) return delegate.attachViewToDom(container, component, componentProps, cssClasses);
	if (!inline && typeof component !== "string" && !(component instanceof HTMLElement)) throw new Error("framework delegate is missing");
	const el = typeof component === "string" ? container.ownerDocument?.createElement(component) : component;
	if (cssClasses) cssClasses.forEach((c) => el.classList.add(c));
	if (componentProps) Object.assign(el, componentProps);
	container.appendChild(el);
	await new Promise((resolve) => componentOnReady(el, resolve));
	return el;
};
var detachComponent = (delegate, element) => {
	if (element) {
		if (delegate) {
			const container = element.parentElement;
			return delegate.removeViewFromDom(container, element);
		}
		element.remove();
	}
	return Promise.resolve();
};
var CoreDelegate = () => {
	let BaseComponent;
	let Reference;
	const attachViewToDom = async (parentElement, userComponent, userComponentProps = {}, cssClasses = []) => {
		BaseComponent = parentElement;
		let ChildComponent;
		/**
		* If passing in a component via the `component` props
		* we need to append it inside of our overlay component.
		*/
		if (userComponent) {
			/**
			* If passing in the tag name, create
			* the element otherwise just get a reference
			* to the component.
			*/
			const el = typeof userComponent === "string" ? BaseComponent.ownerDocument?.createElement(userComponent) : userComponent;
			/**
			* Add any css classes passed in
			* via the cssClasses prop on the overlay.
			*/
			cssClasses.forEach((c) => el.classList.add(c));
			/**
			* Add any props passed in
			* via the componentProps prop on the overlay.
			*/
			Object.assign(el, userComponentProps);
			/**
			* Finally, append the component
			* inside of the overlay component.
			*/
			BaseComponent.appendChild(el);
			ChildComponent = el;
			await new Promise((resolve) => componentOnReady(el, resolve));
		} else if (BaseComponent.children.length > 0 && (BaseComponent.tagName === "ION-MODAL" || BaseComponent.tagName === "ION-POPOVER")) {
			if (!(ChildComponent = BaseComponent.children[0]).classList.contains("ion-delegate-host")) {
				/**
				* If the root element is not a delegate host, it means
				* that the overlay has not been presented yet and we need
				* to create the containing element with the specified classes.
				*/
				const el = BaseComponent.ownerDocument?.createElement("div");
				el.classList.add("ion-delegate-host");
				cssClasses.forEach((c) => el.classList.add(c));
				el.append(...BaseComponent.children);
				BaseComponent.appendChild(el);
				/**
				* Update the ChildComponent to be the
				* newly created div in the event that one
				* does not already exist.
				*/
				ChildComponent = el;
			}
		}
		/**
		* Get the root of the app and
		* add the overlay there.
		*/
		const app = document.querySelector("ion-app") || document.body;
		/**
		* Create a placeholder comment so that
		* we can return this component to where
		* it was previously.
		*/
		Reference = document.createComment("ionic teleport");
		BaseComponent.parentNode.insertBefore(Reference, BaseComponent);
		app.appendChild(BaseComponent);
		/**
		* We return the child component rather than the overlay
		* reference itself since modal and popover will
		* use this to wait for any Ionic components in the child view
		* to be ready (i.e. componentOnReady) when using the
		* lazy loaded component bundle.
		*
		* However, we fall back to returning BaseComponent
		* in the event that a modal or popover is presented
		* with no child content.
		*/
		return ChildComponent ?? BaseComponent;
	};
	const removeViewFromDom = () => {
		/**
		* Return component to where it was previously in the DOM.
		*/
		if (BaseComponent && Reference) {
			Reference.parentNode.insertBefore(BaseComponent, Reference);
			Reference.remove();
		}
		return Promise.resolve();
	};
	return {
		attachViewToDom,
		removeViewFromDom
	};
};
//#endregion
export { attachComponent as n, detachComponent as r, CoreDelegate as t };
