/*
////////////////////////////////////////////
///////     LIST OF OBJECTIVES       ///////
///////////////////////////////////////////

* Display the current time, padded with zeros to be exactly two digits long, every second
* console.log the percentage of a minute that the current seconds represents (e.g., if 30 seconds have elapsed, console.log 0.5)
* Using the percent above, dynamically modify the length of the timer bar
* console.log a hexidecimal color that is based on the current second, every second
* Dynamically update the background color of the page using the hexidecimal color
* Display the generated color's hex value on hover
* Mission Accomplished!

*/

// function initializeTimer(){  //go into body tag, add onload="initializeTimer()" <-- Can I do this with JS?
//     console.log();
// };

function clock() { //Queries the time and returns undefined
    var timeRaw = new Date();
    var hrs = timeRaw.getHours();
    var mins = timeRaw.getMinutes();
    mins = formatMinutes(mins);
    var secs = timeRaw.getSeconds();
    secs = formatSeconds(secs);
    var timeString =`${hrs}:${mins}:${secs}`;
    const $element = document.querySelector('.clock-display');
    $element.textContent = timeString;
    console.log(timeString);
  };

function clockTick() { //Re-runs clock every second
    var tick = setInterval(clock, 1000);
};

function formatMinutes(mins){
    let minsUpdated = mins;
    if (mins < 10) {
        minsUpdated = '0'+mins;
    }
    return minsUpdated;
}

function formatSeconds(secs){
    let secsUpdated = secs;
    if (secs < 10) {
        secsUpdated = '0'+secs;
    }
    return secsUpdated;
}


clockTick();


/* So... next step is to display the current time each time clock runs.  For this, I need
to fetch the data (done), and then update the HTML to display the new value.  First, I guess
I locate the old values.
Next, I change the textContents.
Done?
query "clock display", then alter textContents.  How?


// const $element = document.querySelector('div');
$element.textContent = 'Changing things up';


*/