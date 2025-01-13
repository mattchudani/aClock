/*
Author: mattchudani
Created: 1/7/25
Bugs Known: none
*/

/* --- VARIABLES --- */


/* --- FUNCTIONS --- */
/* Ready */

window.onload = function() {
    function displayTime() {
        var currentTime = new Date();
        var hours = currentTime.getHours();
        var minutes = currentTime.getMinutes();
        var seconds = currentTime.getSeconds();
        var meridiem = "AM";
        var clockDiv = document.getElementById('clock');

       
        
        if (seconds < 10) {
            seconds = "0" + seconds;
        }

        if (hours > 12) {
            hours = hours - 12;
            meridiem = "PM";
        }

        if (hours === 0) {
            hours = 12;    
        }

        clockDiv.innerText = hours + ":" + minutes + ":" + seconds + " " + meridiem;
    }
    displayTime();
    setInterval(displayTime, 1000);
};