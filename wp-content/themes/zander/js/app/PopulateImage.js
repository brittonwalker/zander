/**
 * HoverImage.js
 */

import $ from 'jquery';

export default class PopulateImage {

    constructor(image) {

        this.image = image;
        this.activateImage()

    }

    activateImage() {

        $('.image-container img').attr('src', this.image.dataset.triggerImage);        

    }

}