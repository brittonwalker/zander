/**
 * main.js
 * @description Module assignment
 */

// JS
import '@babel/polyfill';
import { gsap } from 'gsap/all';
import barba from '@barba/core';
// import Controller from './app/Controller';
import Marquee from './app/Marquee';
import Homepage from './app/HomePage';
import HoverImage from './app/HoverImage';
import Menu from './app/Menu';
import Essay from './app/Essay';
import Clock from './app/Clock';

const siteHeader = document.querySelector('.site-header');
const postType = document.querySelector('[data-post-type]');
const theme = {
    dark: 'site-header--dark',
    light: 'site-header--light',
    toDark: () => {
        siteHeader.classList.remove(theme.light);
        siteHeader.classList.add(theme.dark);
    },
    toLight: () => {
        siteHeader.classList.remove(theme.dark);
        siteHeader.classList.add(theme.light);
    }
}

const App = {
    hoverImages: () => new HoverImage(),
    menu: () => new Menu(),
    essay: () => new Essay(),
    clock: () => new Clock(),
    homepage: () => new Homepage(),
    marquee: () => new Marquee(),
    updatePostType: (title) => {
        console.log(postType)
        postType.innerHTML = title != 'home' ? title : '';
    },
    loadJs: () => {
        App.clock();
        App.menu();
        App.essay();
        App.hoverImages();
        App.homepage();
        App.marquee();
        if (!document.querySelector('.single-essays')) {
            siteHeader.classList.contains(theme.dark) ? theme.toLight() : '';
        } else {
            siteHeader.classList.contains(theme.light) ? theme.toDark() : '';
        }        
    }
}

document.addEventListener('DOMContentLoaded', App.loadJs );

barba.init({
    debug: false,
    prevent: ({ el }) => document.getElementById('wpadminbar') ? document.getElementById('wpadminbar').contains(el) : false,
    transitions: [{
        name: 'opacity-transition',
        beforeLeave(data) {
            gsap.to(data.current.container, {
                opacity: 0,
                duration: .5
            });
        },
        enter(data) {
        },
        afterEnter(data) {
            gsap.fromTo(data.next.container, { opacity: 0 }, {
                opacity: 1,
                duration: .5
            });
        },
        after(data) {}
    }],
});

barba.hooks.before((data) => {
    barba.wrapper.classList.add('is-animating');
});
barba.hooks.after((data) => {
    App.loadJs();
    barba.wrapper.classList.remove('is-animating');
});
barba.hooks.afterLeave(({current, next}) => {
    barba.wrapper.classList.remove('is-animating');
});
barba.hooks.beforeEnter(({ current, next}) => {
    if (current.container) {
        document.body.classList = next.container.classList['value'];
    }
})