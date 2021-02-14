/**
 * Controller.js
 */

import $ from 'jquery';
import HoverImage from './HoverImage';
import Menu from './Menu';
import PopulateImage from './PopulateImage';
// import Essay from './TitlePosition';
import Essay from './Essay';
import Clock from './Clock';

export default class Controller {

    constructor() {

        this.init();

    }

    init() {
        new HoverImage();
        new Menu();
        // new PopulateImage();
        new Essay();
        new Clock();
    }

}