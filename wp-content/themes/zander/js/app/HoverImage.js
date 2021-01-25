/**
 * HoverImage.js
 */

import $ from 'jquery';

export default class HoverImage {

    constructor() {

        $('[data-featured-index').on('mouseenter', this.activateImage);
        $('[data-featured-index').on('mouseleave', this.deactivateImage);

    }

    activateImage() {

        $(`[data-featured-image="${this.dataset.featuredIndex}"]`).addClass('active-img');

    }

    deactivateImage() {

        $(`[data-featured-image="${this.dataset.featuredIndex}"]`).removeClass('active-img');

    }

}