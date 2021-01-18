/**
 * HoverImage.js
 */

import $ from 'jquery';

class HoverImage {

    constructor() {

        console.log($('[data-featured-image'));

        $('[data-featured-image').on('mouseenter', this.activateImage);
        $('[data-featured-image').on('mouseleave', this.deactivateImage);

    }

    activateImage() {

        $('.image-container img').attr('src', this.dataset.featuredImage).addClass('active-img');

    }

    deactivateImage() {

        // $('.image-container img').attr('src', this.dataset.featuredImage);
        $('.image-container img').removeClass('active-img')

    }

}
new HoverImage();