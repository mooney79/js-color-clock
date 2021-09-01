/*
////////////////////////////////////////////
///////     LIST OF OBJECTIVES       ///////
///////////////////////////////////////////

* Display the current time every second
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

function clock() {
    var timeRaw = new Date();
    var hrs = timeRaw.getHours();
    var mins = timeRaw.getMinutes();
    var secs = timeRaw.getSeconds();
    var timeString =`${hrs}${mins}${secs}`;
    console.log(timeString);
  };

function clockTick() { 
    var tick = setInterval(clock, 1000);
};

clockTick();