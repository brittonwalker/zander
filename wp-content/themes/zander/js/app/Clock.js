/**
 * Clock.js
 */

export default class Clock {

    constructor() {
        this.currentTime();
    }

    currentTime() {
        if (!document.getElementById("clock")) {
            return;
        }
        
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