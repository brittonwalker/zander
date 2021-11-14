/**
 * Controller.js
 */

import HoverImage from './HoverImage';
import Menu from './Menu';
import Essay from './Essay';
import Clock from './Clock';
import Newsletter from './Newsletter';

export default class Controller {

    constructor() {
        this.init();
    }

    init() {
        new HoverImage();
        new Menu();
        new Essay();
        new Clock();
        new Newsletter();
    }

}