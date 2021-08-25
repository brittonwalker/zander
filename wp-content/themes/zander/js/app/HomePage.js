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
            css: {
                rotation: 360
            },
            // remove default easing for seamless loop
            ease: Linear.easeNone,
            repeat: -1,
            paused: false
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
                rotate: '-45deg'
            }, {
                scale: 1,
                opacity: 1,
                duration: .5,
                ease: Power3.easeOut
            });
            tl.to('.portrait-stamp', {
                scale: 1,
                rotate: 0,
                duration: -1,
                ease: Power3.easeOut,
                onComplete: () => console.log('hello')
            });
        }, 600)
    }

}
new Homepage();