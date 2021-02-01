/**
 * Homepage.js
 */

import $ from 'jquery';
import {
    gsap,
    Power3
} from 'gsap';
import Typewriter from 'typewriter-effect/dist/core';

class Homepage {

    constructor() {

        if ( !$('.home-wrapper').length ) {
            return;
        }

        $(document).ready(() => {
            setTimeout( () => {
                var tl = gsap.timeline();
                // tl.fromTo('.passport-information', { opacity: 0, y: 15 }, { opacity: 1, y: 0} );
                // tl.fromTo('.biography', { opacity: 0, y: 15 }, { opacity: 1, y: 0} );
                // tl.to('.image-overlay', { width: 0 }, 1);
                tl.fromTo('.portrait-stamp', { scale: 3, opacity: 0, right: 20, y: -20, rotate: '-45deg' }, { scale: 1, right: 0, y: 0, opacity: 1, rotate: 0, duration: 1, ease: Power3.easeOut } );
            }, 600)
        });

    }

}
new Homepage();