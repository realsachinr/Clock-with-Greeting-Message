var time = document.querySelector("#clock");
var button = document.querySelector("#btn");
function clock() {
  var date = new Date();
  var h = date.getHours();
  var m = date.getMinutes();
  var s = date.getSeconds();

  midday = h >= 12 ? " PM" : " AM";
  time.innerHTML = "Time" + " = " + h + ":" + m + ":" + s + midday;

  var setTime = setTimeout(function () {
    clock();
  }, 1000);
}
clock();

function showGreeting() {
  // Get the current time
  var currentTime = new Date();
  var currentHour = currentTime.getHours();

  // Define the greeting message based on the time

  var greetingMessage;
  if (currentHour < 12) {
    greetingMessage = "Good Morning";
  } else if (currentHour >= 12 && currentHour < 17) {
    greetingMessage = "Good Afternoon";
  } else if (currentHour >= 17 && currentHour < 20) {
    greetingMessage = "Good Evening";
  } else {
    greetingMessage = "Good Night";
  }

  // Display the greeting message in an alert box
  alert(greetingMessage);
}
