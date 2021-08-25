/**
 * Clock.js
 */

import moment from 'moment-timezone';

export default class Clock {

    constructor() {

        this.settings = {
            el: document.getElementById("clock")
        }

        if ( !this.settings.el ) {
            return;
        }

        this.currentTime();

    }

    currentTime() {
        var date = moment.tz("America/New_York").format("HH:mm")
        document.getElementById("clock").innerText = date; /* adding time to the div */
        var t = setTimeout(() => {
            this.currentTime()
        }, 1000); /* setting timer */
    }

    updateTime(k) {
        if (k < 10) {
            return "0" + k;
        } else {
            return k;
        }
    }

}