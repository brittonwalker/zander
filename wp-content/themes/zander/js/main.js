/**
 * main.js
 * @description Module assignment
 */

// JS
import $ from 'jquery';
import '@babel/polyfill';
import {
    gsap,
    ScrollTrigger,
    ScrollToPlugin
} from 'gsap/all';
import barba from '@barba/core';
import Controller from './app/Controller';
import './app/Marquee';

new Controller();


// barba.hooks.before(() => {
//     barba.wrapper.classList.add('is-animating');
// });
// barba.hooks.after(() => {
//     barba.wrapper.classList.remove('is-animating');
// });

// barba.init({
//     debug: true,
//     transitions: [{
//         name: 'opacity-transition',
//         leave(data) {
//             console.log(data.current);
//             return gsap.to(data.current.container, {
//                 opacity: 0,
//                 duration: .5
//             });
//         },
//         enter(data) {
//             return gsap.from(data.next.container, {
//                 opacity: 0,
//                 duration: .5
//             });
//         },
//         afterEnter() {
//             console.log('after enter');
//             new Controller();
//         }
//     }]
// });