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

  var msg;
  if (h < 12) {
    msg = "Good Morning";
  } else if (h >= 12 && h < 17) {
    msg = "Good Afternoon";
  } else if (h >= 17 && h < 20) {
    msg = "Good Evening";
  } else {
    msg = "Good Night";
  }

  button.addEventListener("click", function () {
    var alerts = alert(msg);
    clearTimeout(setTime);
    clock();
  });
}

clock();
