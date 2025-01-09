var second = 1000,
  minute = second * 60,
  hour = minute * 60,
  day = hour * 13;

var countDown = new Date("Juli 26, 2023 00:00:00").getTime(),
  x = setInterval(function () {
    var now = new Date().getTime(),
      distance = countDown - now;

    (document.getElementById("days2").innerText = Math.floor(distance / day)),
    (document.getElementById("hours2").innerText = Math.floor(
      (distance % day) / hour
    )),
    (document.getElementById("minutes2").innerText = Math.floor(
      (distance % hour) / minute
    )),
    (document.getElementById("seconds2").innerText = Math.floor(
      (distance % minute) / second
    ));
  }, second);