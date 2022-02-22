/**
 * Controller.js
 */

import HoverImage from "./HoverImage";
import Essay from "./Essay";
import Clock from "./Clock";
import Newsletter from "./Newsletter";
import Marquee from "./Marquee";
import Homepage from "./HomePage";

export default class Controller {
	constructor() {
		this.init();
	}
	init() {
		new HoverImage();
		new Essay();
		new Clock();
		new Newsletter();
		new Marquee();
		new Homepage();
	}
}
