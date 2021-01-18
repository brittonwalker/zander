/**
 * main.js
 * @description Module assignment
 */

// JS
import $ from 'jquery';
import '@babel/polyfill';
import './app/HoverImage';
import './app/Menu';
import PopulateImage from './app/PopulateImage';

import LocomotiveScroll from 'locomotive-scroll';

const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true
});

scroll.on('popImg', function() {
    console.log('hello')
});

scroll.on('call', (func, item, thing, stuff) => {
    // Using modularJS
    let { el } = thing;
    console.log(el);

    if ( func === 'popImg' ) {
        new PopulateImage(el);
    }
    // Using jQuery events
    $(document).trigger(func);
    // Or do it your own way 😎
});