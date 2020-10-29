(function ($) {
"use strict";
  
  // time tricker js
  
  $(document).ready(function() {
    const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;
  
  let countDown = new Date('Feb 4, 2021 00:00:00').getTime(),
      x = setInterval(function() {
  
      let now = new Date().getTime(),
      distance = countDown - now;
  
      document.getElementById('days').innerText = Math.floor(distance / (day)),
      document.getElementById('hours').innerText = Math.floor((distance % (day)) / (hour)),
      document.getElementById('minutes').innerText = Math.floor((distance % (hour)) / (minute));
  },)
  
  });
  $(document).ready(function() {
    const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;
  
  let countDown = new Date('Feb 5, 2021 00:00:00').getTime(),
      x = setInterval(function() {
  
      let now = new Date().getTime(),
      distance = countDown - now;
  
      document.getElementById('days1').innerText = Math.floor(distance / (day)),
      document.getElementById('hours1').innerText = Math.floor((distance % (day)) / (hour)),
      document.getElementById('minutes1').innerText = Math.floor((distance % (hour)) / (minute));
  },)
  
  });
  $(document).ready(function() {
    const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;
  
  let countDown = new Date('Feb 6, 2021 00:00:00').getTime(),
      x = setInterval(function() {
  
      let now = new Date().getTime(),
      distance = countDown - now;
  
      document.getElementById('days2').innerText = Math.floor(distance / (day)),
      document.getElementById('hours2').innerText = Math.floor((distance % (day)) / (hour)),
      document.getElementById('minutes2').innerText = Math.floor((distance % (hour)) / (minute));
  },)
  
  });
  $(document).ready(function() {
    const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;
  
  let countDown = new Date('Feb 7, 2021 00:00:00').getTime(),
      x = setInterval(function() {
  
      let now = new Date().getTime(),
      distance = countDown - now;
  
      document.getElementById('days3').innerText = Math.floor(distance / (day)),
      document.getElementById('hours3').innerText = Math.floor((distance % (day)) / (hour)),
      document.getElementById('minutes3').innerText = Math.floor((distance % (hour)) / (minute));
  },)
  
  });

  $(document).ready(function() {
    const seconds = 1000,
        minutes = seconds * 60,
        hours = minutes * 60,
        days = hours * 24;
  
  let countDown = new Date('Oct 31, 2020 00:00:00').getTime(),
      x = setInterval(function() {
  
      let nows = new Date().getTime(),
      distance = countDown - nows;
  
      document.getElementById('days33').innerText = Math.floor(distance / (days)),
      document.getElementById('hours33').innerText = Math.floor((distance % (days)) / (hours)),
      document.getElementById('minutes33').innerText = Math.floor((distance % (hours)) / (minutes));
  },)
  
  });
  
  
  }(jQuery));