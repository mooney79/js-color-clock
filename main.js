// Convert long number (param from getTime) to 6-digit Hex String with #
// Uses the last six digits of parameter to generate hex code
function toHexString(num) {  
    const timeStamp = num;
    let hexPull = timeStamp.toString(16);
    let hexArray = hexPull.split('');
    for (i = (hexArray.length - 6); i > 0; i--){
        hexArray.shift();
    };
    hexPull = hexArray.join('');
    hexPull = '#'+hexPull.toUpperCase();
    console.log(hexPull);
    return hexPull; 
}

function clock() { //Queries the time and returns undefined
    var timeRaw = new Date();
    let hexCode = toHexString(timeRaw.getTime());
    const $bgColor = document.querySelector(".clock");
    $bgColor.style.backgroundColor = `${hexCode}`;
    var hrs = formatHours(timeRaw.getHours());
    var mins = formatMinutes(timeRaw.getMinutes());
    var secs = formatSeconds(timeRaw.getSeconds());
    const $element = document.querySelector('.clock-display');
    if (isHovering){

            $element.textContent = hexCode;

        
    } else {
        $element.textContent = `${hrs}:${mins}:${secs}`;
    };
    
    console.log(`${hrs}:${mins}:${secs}`);
    console.log((parseInt(secs)/60)*100+'%');
    barUpdate(parseInt(secs));
    
};


function clockTick() { //Re-runs clock every second
    var tick = setInterval(clock, 1000);

    
    /*
    if (pause.matches(':hover')){
      clearInterval(tick);

      /////////TERNIARY,a one-lone if/else statement
      //////// can pass in null as third argument if no else

      index === -1 ? index = 0: index++
      
      if (index === colors.length -1) { 
          index = 0;
      } else {
          index = index + 1
      }
    }
    */

    //But then... how to reenable when mouse leaves?

    
    
 //   pause.addEventListener('mouseover', clearInterval(tick));
 //   pause.addEventListener('mouseout', clockTick());
//    document.querySelector(".clock-display").onmouseenter = clearInterval(tick);
//    document.querySelector(".clock-display").onmouseleave = setInterval(clock, 1000);
 };

////////////////////////////////////////////
/////// TIMER FORMATTING FUNCTIONS ////////
///////////////////////////////////////////
/* These three functions check the data
and if it a number below 10 (ie, single digit),
tack a 0 on the front and return that value 
as a string. Hours are in military time.*/
function formatHours(hrs){
    let hrsUpdated = hrs;
    if (hrs < 10) {
        hrsUpdated = '0'+hrs;
    }
    return hrsUpdated;
}

// Classroom version
// hours = ('0' + now.getHours()).slice(-2);
// pre-pads, takes last two.  Slice w/ neg number wraps back

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


// Turns the current seconds on the clock (num) into a percentage
// and returns undefined
function barUpdate(num){
    const $barElement = document.querySelector(".clock-progress-bar");
    let pctWidth = (num/60)*14;
    $barElement.style.width = `${pctWidth}rem`;
    //Could replace pctWidth here with the formula using string interpolation
};

/////// COLLECTION OF BAD CODE ATTEMPTING TO GET clearInterval() TO WORK
/////// LIKE I THINK IT SHOULD
//document.querySelector(".clock-display").onmouseover = clearInterval(tick);
//document.querySelector(".clock-display").onmouseout = clockTick();
//
//function hover() {
//   clearInterval(tick);
// };
//  let pause = false;
//  document.querySelector(".clock-display").onmouseover = function (){pause=true;};
//  if (pause=true){
//     clearInterval(tick);
//  } else {
//     setInterval(clock, 1000);
//  }
// then mouseout to set back to false?




/////////// BEGIN THE CLOCK /////////////////////
const $clock = document.querySelector(".clock");;
let isHovering = false;
$clock.addEventListener('mouseover', function(){
    isHovering=true;
});
$clock.addEventListener('mouseout', function() {
    ishovering=false;
});

clock();         //Starts the clock on load
clockTick();    //Updates the clock display every second

/*
//in root
let isHovering = false;
$clock.addEventListener('mouseover', function(){
    isHovering=true;
});
$clock.addEventListner('mouseout', function() {
    ishovering=false;
});

//in function
if (isHovering){
    //Do hexCode
} else {
    //Show time
};


*/