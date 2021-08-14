/**
 * Menu.js
 */

import $ from 'jquery';
import {
    gsap,
    Power3
} from 'gsap';

export default class Menu {

    constructor() {

        this.settings = {
            postType: document.querySelector('[data-post-type]'),
            logo: document.querySelector('[data-main-logo]'),
            short: document.querySelector('[data-short-logo]'),
        }

        $('.menu-trigger-wrapper').on('click', this.activateMenu);

        $(document).on('mouseup', (e) => this.closeMenu(e));

        window.addEventListener('scroll', (evt) => this.bindEvents(evt) );

    }

    bindEvents(evt) {

        this.handlePostType();

    }

    activateMenu() {
        $('body').hasClass('menu-active') ? $('body').removeClass('menu-active') : $('body').addClass('menu-active');
    }

    closeMenu(e) {
        let container = $('.menu-social, .menu-trigger-wrapper');
        if (!container.is(e.target) && container.has(e.target).length === 0 && window.innerWidth >= 1024) {
            $('body').removeClass('menu-active')
        }
    }

    handlePostType() {
        if ( document.body.classList.contains('home') || document.body.classList.contains('single-essays') ) {
            return;
        }

        let distance = fromHalf() - getPosition('left', this.settings.short) + 15;

        if ( window.scrollY > 0 ) {
            this.settings.logo.parentElement.classList.add('logo-shorty');
            gsap.to(this.settings.postType, { x: distance * -1 } );

        } else {
            gsap.to(this.settings.postType, { x: 0 })
            this.settings.logo.parentElement.classList.remove('logo-shorty');
        }
    }

}

const getPosition = (direction, el) => {
    if (direction === 'left') {
        return el.getBoundingClientRect().left + el.offsetWidth;
    } else if ( direction === 'top' ) {
        return el.getBoundingClientRect().top + el.offsetHeight;
    }
}

const fromHalf = () => {
    return window.innerWidth / 2;
}