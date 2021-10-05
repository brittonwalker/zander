/**
 * Clock.js
 */

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
        let date = new Date(Date.now());
          
        let usaTime = date.toLocaleString("en-US", {
            timeZone: "America/New_York",
            hour12: false,
            timeStyle: 'short'
        });

        document.getElementById("clock").innerText = usaTime; /* adding time to the div */
        setTimeout(() => {
            this.currentTime()
        }, 1000); /* setting timer */
    }

}