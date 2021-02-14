/**
 * Boilerplate.js
 */

import $ from 'jquery';

class Marquee {

    constructor() {

        this.settings = {
            currentLeftValue: 0,
            el: document.getElementById('marquee'),
        }

        if( !this.settings.el) {
            console.log('There is no marquee to show.');
            return;
        }

        window.setInterval(() => this.animationLoop(), 20);
        
    }

    animationLoop() {

        this.settings.el.style.transform = `translateX(${this.settings.currentLeftValue}px)`;

        if (this.settings.el.getBoundingClientRect().right < this.settings.el.parentNode.getBoundingClientRect().left) {
            this.settings.currentLeftValue = 0;
            this.settings.el.style.transform = `translateX(${this.settings.currentLeftValue})`;
        }

        this.settings.currentLeftValue--;

    }

}
new Marquee();