/**
 * HoverImage.js
 */

import $ from 'jquery';
import {
    gsap,
    ScrollTrigger,
    ScrollToPlugin
} from 'gsap/all';
gsap.registerPlugin(ScrollTrigger);

export default class PopulateImage {

    constructor(image, container, index) {

        this.image = {
            el: image,
            src: image.dataset.triggerImage,
            scrollContainer: container,
            target: $('.image-container img'),
            targetContainer: $('.image-container'),
            index: index,
        }

        this.createImage();

        this.image.targetContainer.append(this.image.imgEl);

        // this.image.scrollContainer.on('scroll', () => this.checkPosition());
        // this.checkPosition();

    }

    checkPosition() {
        ScrollTrigger.create({
            trigger: this.image.el,
            start: "top center",
            onToggle: self => console.log("toggled, isActive:", self.isActive),
            onEnter: () => {
                this.image.target.attr('src', this.image.src);
            },
            onEnterBack: () => {
                this.image.target.attr('src', this.image.src);
            },
        });
    }

    createImage() {
        var img = document.createElement('img'); 
        img.src =  this.image.src;
        img.dataset.index = this.image.index;
        img.className = this.image.index == 0 ? 'active-img' : '';
        this.image.imgEl = img;
    }

    activateImage() {

        $('.image-container img').attr('src', this.image.dataset.triggerImage);

    }

}