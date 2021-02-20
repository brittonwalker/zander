/**
 * Homepage.js
 */

import $ from 'jquery';
import {
    gsap,
    Power3
} from 'gsap';

class Homepage {

    constructor() {

        if ( !$('.home-wrapper').length ) {
            return;
        }

        $(document).ready(() => {
            setTimeout( () => {
                gsap.fromTo('.portrait-stamp', { scale: 2, opacity: 0, rotate: '-45deg' }, { scale: 1, opacity: 1, duration: .5, ease: Power3.easeOut, onComplete: this.rotate } );
            }, 600)
        });

    }

    rotate() {
        let stamp = document.querySelector('.portrait-stamp').children[0];
        stamp.classList.add('animate-spin');
        stamp.style.animationDuration = '4s';
    }

}
new Homepage();