/**
 * Menu.js
 */

import $ from 'jquery';
import { gsap, Circ } from 'gsap';
import { getPosition, fromHalf } from './Utils';

export default class Menu {
	constructor() {
		this.settings = {
			postType: document.querySelector('[data-post-type]'),
			logo: document.querySelector('[data-main-logo]'),
			short: document.querySelector('[data-short-logo]'),
		};

		this.menu = document.querySelector('.site-menu');
		this.menuItems = this.menu.querySelectorAll('.menu-item');
		gsap.set([...this.menuItems], { opacity: 0, y: 50 });

		const menuTrigger = document.querySelector('.menu-trigger-wrapper');
		menuTrigger.addEventListener('click', () => this.toggleMenu());

		document.addEventListener('mouseup', (e) => this.closeMenu(e));

		window.addEventListener('scroll', (evt) => this.bindEvents(evt));
	}

	bindEvents() {
		this.handlePostType();
	}

	open() {
		this.menu.classList.add('menu-active');
		gsap.to([...this.menuItems], {
			opacity: 1,
			y: 0,
			duration: 0.5,
			ease: Circ.easeOut,
		});
	}

	resetColorTheme(type) {
		const header = document.querySelector('.site-header');
		if (type === 'light') {
			header.classList.replace('site-header--dark', 'site-header--light');
		} else {
			header.classList.replace('site-header--light', 'site-header--dark');
		}
	}

	toggleMenu() {
		if (this.menu.classList.contains('menu-active')) {
			this.deactivate();
			return;
		}
		this.menu.classList.add('menu-active');
		gsap.to([...this.menuItems], {
			opacity: 1,
			duration: 0.5,
			ease: Circ.easeOut,
		});
	}

	closeMenu(evt) {
		const container = $('.menu-social, .menu-trigger-wrapper, .menu-item');
		if (
			!container.is(evt.target) &&
			container.has(evt.target).length === 0 &&
			window.innerWidth >= 1024
		) {
			this.deactivate();
		}
	}

	deactivate() {
		gsap.to([...this.menuItems].reverse(), {
			opacity: 1,
			duration: 0.5,
			ease: Circ.easeOut,
			onComplete: () => {
				this.menu.classList.remove('menu-active');
			},
		});
	}

	resetPostTitle(title) {
		this.settings.postType.innerText = title;
	}

	handlePostType() {
		if (
			document.body.classList.contains('home') ||
			!this.settings.postType
		) {
			return;
		}

		if (
			document.body.classList.contains('single-essays') &&
			window.innerWidth >= 1024
		) {
			return;
		}

		let distance;

		if (
			window.innerWidth >= 1024 ||
			document.body.classList.contains('single-essays')
		) {
			distance =
				fromHalf() - getPosition('left', this.settings.short) + 15;
		} else {
			distance =
				fromHalf() -
				getPosition('left', document.querySelector('.table-left-col')) +
				15;
		}

		if (window.scrollY > 0) {
			this.settings.logo.parentElement.classList.add('logo-shorty');
			gsap.to(this.settings.postType, { x: distance * -1 });
		} else {
			gsap.to(this.settings.postType, { x: 0 });
			this.settings.logo.parentElement.classList.remove('logo-shorty');
		}
	}
}
