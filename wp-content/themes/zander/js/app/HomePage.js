/**
 * Homepage.js
 */

import $ from 'jquery';
import {
    gsap,
    Linear,
    Power3,
    TweenMax
} from 'gsap';

class Homepage {

    constructor() {

        if (!$('.home-wrapper').length) {
            return;
        }

        document.addEventListener("DOMContentLoaded", () => {
            this.init();
        });

    }

    rotateStamp() {
        return TweenMax.to($('.portrait-stamp'), 15, {
            rotation: '360',
            // remove default easing for seamless loop
            ease: Linear.easeNone,
            repeat: -1,
            paused: false,
        });
    }

    init() {
        setTimeout(() => {
            var tl = gsap.timeline({
                onComplete: () => { this.rotateStamp() }
            });
            tl.fromTo('.portrait-stamp', {
                scale: 2,
                opacity: 0,
            }, {
                scale: 1,
                opacity: 1,
                duration: .5,
                ease: Power3.easeOut
            });
        }, 600)
    }

}
new Homepage();