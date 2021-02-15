/**
 * Essay.js
 */

import $ from 'jquery';
import {
    gsap,
    Power3
} from 'gsap';

export default class Essay {

    constructor() {

        if (!document.body.classList.contains('single-essays')) {
            return;
        }

        this.settings = {
            postType: document.querySelector('[data-post-type]'),
            titleWrapper: document.querySelector('[data-title-wrapper]'),
            title: document.querySelector('[data-title]'),
            logo: document.querySelector('[data-main-logo]'),
            short: document.querySelector('[data-short-logo]'),
            metaTarget: document.querySelector('[data-publication-table-target]'),
            meta: document.querySelector('[data-publication-table]'),
            padding: 35,
        }

        window.addEventListener('scroll', (evt) => this.bindEvents(evt) );

    }

    bindEvents(evt) {
        this.handleTitle();
        this.handleMeta();

        if ( document.querySelector('.essay-images').children ) {
            this.handleImages(document.querySelector('.essay-images').children);
        }

    }

    handlePostType() {
        let distance = fromHalf() - getPosition('left', this.settings.short);

        if ( this.settings.titleWrapper.getBoundingClientRect().top <= getPosition('top', this.settings.postType) ) {
            this.settings.logo.parentElement.classList.add('logo-shorty');
            gsap.to(this.settings.postType, { x: distance * -1 } );

        } else {
            gsap.to(this.settings.postType, { x: 0 })
            this.settings.logo.parentElement.classList.remove('logo-shorty');
        }
    }

    handleTitle() {
        const topPosition = document.querySelector('.admin-bar') ? 52 : 20;
        if ( this.settings.titleWrapper.getBoundingClientRect().top <= topPosition ) {
            let distance = fromHalf() - getPosition('left', this.settings.postType);
            gsap.to(this.settings.title, { x: distance * -1 })
        } else {
            gsap.to(this.settings.title, { x: 0 })
        }
    }

    handleMeta() {
        if ( this.settings.meta.getBoundingClientRect().top + this.settings.meta.offsetHeight <= 0 ) {
            gsap.to(this.settings.metaTarget, { opacity: 1 } );
        } else {
            gsap.to(this.settings.metaTarget, { opacity: 0 } );
        }
    }

    handleImages(images) {
        const spacing = document.body.offsetHeight / [ ...images ].length;

        [ ...images ].forEach((element, index) => {
            if ( window.scrollY >= index * spacing && window.scrollY < (index + 1) * spacing ) {
                element.classList.add('active-img');
            } else {
                element.classList.remove('active-img');
            }
        });

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