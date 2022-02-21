/**
 * PageTransition.js
 */

import barba from '@barba/core';
import Controller from './Controller';
import gsap from 'gsap';

class PageTransition {
	constructor() {
		document.addEventListener('DOMContentLoaded', () => this.init());
		this.body = document.body;
		this.hideFooter = false;
	}
	init() {
		const defaultTransition = {
			name: 'default-transition',
		
			enter: (data) => {
				const { next, current } = data;
				this.body.removeAttribute("class")
				const bodyClasses = next.container.dataset.bodyClass.split(' ')
				this.body.classList.add(...bodyClasses);

				if (current.namespace === 'Essay') {
					const footer = next.container.querySelector('#footer');
					this.hideFooter = true;
					gsap.set(footer, { opacity: 0 });
				}
			},
		
			afterEnter: (data) => {
				const { next: { namespace } } = data;
				
				const postTitle = namespace != 'Home' ? namespace : '';
				window.headerMenu.resetPostTitle(postTitle);
		
				if (namespace === 'Essay') {
					window.headerMenu.resetColorTheme('dark');
				} else {
					window.headerMenu.resetColorTheme('light');
				}
				window.headerMenu.deactivate();
			},
		
			after: (data) => {
				const { next, current } = data;
				if (current.namespace === 'Essay') {
					const footer = next.container.querySelector('#footer');
					this.hideFooter = false;
					gsap.to(footer, { opacity: 1, duration: .3, delay: .3 });
				}
				new Controller();
				window.scrollTo(0, 0);
			}
		}
		barba.init({
			debug: true,
			prevent: ({ el }) => {
				const isAdminLink = document.getElementById('wpadminbar') ? document.getElementById('wpadminbar').contains(el) : false;
				const isLogout = el.getAttribute('href').includes('wp-login.php?action=logout');
		
				return isAdminLink || isLogout;
			},
			transitions: [defaultTransition]
		});
	}

}
new PageTransition();