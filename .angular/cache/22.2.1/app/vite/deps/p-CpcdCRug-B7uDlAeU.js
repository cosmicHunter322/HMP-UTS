import { n as J, x as z } from "./p-CthoZqG1-CFXwyXSP.js";
import { u as n$1 } from "./p-DEvF_E6y-N4aBR22J.js";
import { n as c, s as l } from "./p-HO1CDBeU-BmF1PQWz.js";
//#region node_modules/@ionic/core/components/p-CpcdCRug.js
/*!
* (C) Ionic http://ionicframework.com - MIT License
*/
var n = () => {
	const n = window;
	n.addEventListener("statusTap", (() => {
		z((() => {
			const o = document.elementFromPoint(n.innerWidth / 2, n.innerHeight / 2);
			if (!o) return;
			const e = l(o);
			e && new Promise(((o) => n$1(e, o))).then((() => {
				J((async () => {
					e.style.setProperty("--overflow", "hidden"), await c(e, 300), e.style.removeProperty("--overflow");
				}));
			}));
		}));
	}));
};
//#endregion
export { n as startStatusTap };
