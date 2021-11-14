/**
 * Newsletter.js
*/

import Cookies from 'js-cookie'

export default class Newsletter {

	constructor() {
		this.status = false;
		this.newsletter = document.getElementById('newsletter');
		if (!this.newsletter) {
			return;
		}
		this.closeButton = this.newsletter.querySelector('.newsletter__close');
		this.subscribe = this.newsletter.querySelector('.newsletter__button');
		this.init();		
	}
	init() {
		this.status = Cookies.get('newsletter');
		this.closeButton.addEventListener('click', () => this.close());
		this.subscribe.addEventListener('click', () => this.clickedSubscribe());
		if (this.status !== 'true') {
			this.show();
		}
	}
	show() {
		this.newsletter.classList.add('active');
	}
	close() {
		this.newsletter.classList.remove('active');
		Cookies.set('newsletter', true, { expires: 1 })
	}
	clickedSubscribe() {
		this.newsletter.classList.remove('active');
		Cookies.set('newsletter', true, { expires: 7 })
	}

}