/**
 * TitlePosition.js
 */

import $ from 'jquery';
import PopulateImage from './PopulateImage';

export default class Essay {

    constructor() {

        this.essayTitle = {
            container: $('[data-essay-header'),
            title: $('[data-essay-title'),
            meta: $('[data-essay-meta'),
            pubTable: $('[data-publication-table')
            
        };
        this.header = {
            postType: $('[data-post-type'),
            postTypeTarget: $('[data-post-type-target'),
            postTitle: $('[data-post-title-target'),
            mainLogo: $('[data-main-logo'),
            shortLogo: $('[data-short-logo'),
            pubTable: $('[data-publication-table-target')
        }
        this.images = $('[data-trigger-image]');

        this.bindEvents();

    }

    bindEvents() {
        this.getImages();
        this.watchTitle();
    }

    watchTitle() {
        $(window).on('scroll', () => {
            let title = this.essayTitle.container[0].getBoundingClientRect();
            let headerTitle = this.header.postType[0].getBoundingClientRect();
            let pubTable = this.essayTitle.pubTable[0].getBoundingClientRect();

            if (title.y <= (headerTitle.y + headerTitle.height)) {
                this.header.postType.addClass('opacity-0');
                this.header.postTypeTarget.removeClass('opacity-0');
                this.header.mainLogo.css('width', 0);
                this.header.shortLogo.removeClass('opacity-0');
                this.header.postTitle.removeClass('opacity-0');
                this.header.pubTable.removeClass('opacity-0');
            } else {
                this.header.postType.removeClass('opacity-0');
                this.header.postTypeTarget.addClass('opacity-0');
                this.header.shortLogo.addClass('opacity-0');
                this.header.mainLogo.css('width', 'auto');
                this.header.postTitle.addClass('opacity-0');
                this.header.pubTable.addClass('opacity-0');
            }

            // if (title.y <= 0) {
            //     this.header.postTitle.removeClass('opacity-0');
            // } else {
            //     this.header.postTitle.addClass('opacity-0');
            // }

            // if (pubTable.y <= 0) {
            //     this.header.pubTable.removeClass('opacity-0');
            // } else {
            //     this.header.pubTable.addClass('opacity-0');
            // }
            
        })
    }

    getImages() {
        if (!this.images) {
            return;
        }
        this.images.map((index, image) => new PopulateImage(image, $(window), index));
    }

    titleView(elem) {

        elem.target.style.opacity = 0;

    }

}