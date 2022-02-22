/**
 * Marquee.js
 */

export default class Marquee {
	constructor() {
		this.settings = {
			currentLeftValue: 0,
			el: document.getElementById("marquee"),
		};

		if (!this.settings.el) {
			return;
		}

		window.setInterval(() => this.animationLoop(), 20);
	}

	animationLoop() {
		this.settings.el.style.transform = `translateX(${this.settings.currentLeftValue}px)`;

		if (
			this.settings.el.getBoundingClientRect().right <
			this.settings.el.parentNode.getBoundingClientRect().left
		) {
			this.settings.currentLeftValue = 0;
			this.settings.el.style.transform = `translateX(${this.settings.currentLeftValue})`;
		}

		this.settings.currentLeftValue--;
	}
}
