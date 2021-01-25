/**
 * Clock.js
 */

import $ from 'jquery';

export default class Clock {

    constructor() {

        this.currentTime();

    }

    currentTime() {
        var d = new Date();
        var utc = d.getTime() + (d.getTimezoneOffset() * 60000);
        var date = new Date(utc + (3600000*-5));

        var hour = date.getHours();
        var min = date.getMinutes();
        var sec = date.getSeconds();
        hour = this.updateTime(hour);
        min = this.updateTime(min);
        sec = this.updateTime(sec);
        document.getElementById("clock").innerText = hour + ":" + min; /* adding time to the div */
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