/*
////////////////////////////////////////////
///////     LIST OF OBJECTIVES       ///////
///////////////////////////////////////////

* console.log a hexidecimal color that is based on the current second, every second
* Dynamically update the background color of the page using the hexidecimal color
* Display the generated color's hex value on hover
* Mission Accomplished!

*/

function clock() { //Queries the time and returns undefined
    var timeRaw = new Date();

    ///BEGIN EXPERIMENTAL STUFF
    
    let hexColor = timeRaw.getTime();
    let hexPull = hexColor.toString(16);
    let hexArr = hexPull.split('');
    for (i = (hexArr.length - 6); i > 0; i--){
        hexArr.shift();
    };
    hexPull = hexArr.join('');
    hexPull = '#'+hexPull;
    //console.log(hexArr);
    console.log(hexPull);



    // find length
    // subtract 6
    // that number is how many shifts happen on the thing
   /*
    var str = "Hello world That is reallly neat!";
    var res = str.substring(0, 5);//get first 5 chars -- needs to be last 6
    So grab tinmeString (string version), do some string
    interpolation to get a #000000.
    Then select the background element
    change style.backgroundColor (or however)
    Function the above, call it in clock, badabing badaboom.

    Create an event listener for onHover on the Clock face.  Change text to my Hex value
    when that's the case

    done?

    */
    ///END EXPERIMENTAL STUFF

    var hrs = timeRaw.getHours();
    hrs = formatHours(hrs);
    var mins = timeRaw.getMinutes();
    mins = formatMinutes(mins);
    var secs = timeRaw.getSeconds();
    secs = formatSeconds(secs);
    var timeString =`${hrs}:${mins}:${secs}`;
    const $element = document.querySelector('.clock-display');
    $element.textContent = timeString;
    console.log(timeString);
    console.log((parseInt(secs)/60)*100+'%');
    barUpdate(parseInt(secs));
  };

function clockTick() { //Re-runs clock every second
    var tick = setInterval(clock, 1000);
};

////////////////////////////////////////////
/////// TIMER FORMATTING FUNCTIONS ////////
///////////////////////////////////////////
/* These three functions check the data
and if it a number below 10 (ie, single digit),
tack a 0 on the front and return that value 
as a string. */

function formatHours(hrs){
    let hrsUpdated = hrs;
    if (hrs < 10) {
        hrsUpdated = '0'+hrs;
    }
    return hrsUpdated;
}

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

//////////// END FORMATTING FUNCTIONS///////////


//////////// PROGRESS BAR WIDTH ///////////

function barUpdate(num){
    const $barElement = document.querySelector(".clock-progress-bar");
    $barElement.style.color = 'red';
    let pctWidth = (num/60)*14;
    //console.log(pctWidth);  
    $barElement.style.width = `${pctWidth}rem`;
};



/////////// BEGIN THE CLOCK /////////////////////
clock();         //Starts the clock on load
clockTick();    //Updates the clock display every second