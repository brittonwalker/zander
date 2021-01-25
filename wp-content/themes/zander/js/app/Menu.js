/**
 * Menu.js
 */

import $ from 'jquery';

export default class Menu {

    constructor() {

        $('.menu-trigger-wrapper').on('click', this.activateMenu);

        $(document).on('mouseup', (e) => this.closeMenu(e));

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

}