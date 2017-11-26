$(document).ready(function(){
  
  function displayTime(){
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var mins = currentTime.getMinutes();
    var secs = currentTime.getSeconds();
    var display = document.getElementById("clock");
    var meridiem = "AM";

    var hour24 = hours;
    //console.log(hour24);
    if (hours > 12) {
      hours = hours - 12;
      meridiem = "PM";
    }
    if (hours === 12) {
      meridiem = "PM";
    }
    if (hours === 0) {
      hours = 12;
    }
    if (hours < 10) {
      hours = "0" + hours;
    }
    if (mins < 10) {
      mins = "0" + mins;
    }
    if (secs < 10) {
      secs = "0" + secs;
    }    
    display.innerHTML = hours + ":" + mins + ":" + secs + " " + meridiem;
    
    return hour24;
  }
  setInterval(displayTime, 1000);
  
  setInterval(function() {
    var msg = document.getElementById("msg-box");
    var hour24 =  displayTime();
    //console.log(hour24);
  
    if( hour24 >= 5 && hour24 < 12) {
      $("#outer-box").addClass("morning");
      $("#inner-box").addClass("morning");
      msg.innerHTML = "Good Morning...Have a good day ahead"
    }
    if(hour24 >= 12 && hour24 < 16){
      console.log("mid-day");
      $("#outer-box").removeClass("morning");
      $("#inner-box").removeClass("morning");
      $("#outer-box").addClass("mid-day");
      $("#inner-box").addClass("mid-day");
      msg.innerHTML = "Its mid-day...Having a good day?"
    }
    if(hour24 >= 16 && hour24 < 19){
      console.log("evening");
      $("#outer-box").removeClass("morning");
      $("#inner-box").removeClass("morning");
      $("#outer-box").addClass("evening");
      $("#inner-box").addClass("evening");
      msg.innerHTML = "Day is ending...Go out and take a walk"
    }
    if(hour24 >= 19 && hour24 <= 23){
      console.log("night");
      $("#outer-box").removeClass("mid-day");
      $("#inner-box").removeClass("mid-day");
      $("#outer-box").addClass("night");
      $("#inner-box").addClass("night");
      msg.innerHTML = "Now its night...Hope you had a good day, if not there will be a new day tomorrow."
    }
    if (hour24 >= 0 && hour24 < 5) {
      $("#outer-box").addClass("night");
      $("#inner-box").addClass("night");
      console.log("night");
      msg.innerHTML = "Its too late...don't be up for long, get some sleep."
    }
  }, 1000);
});