"use strict";

const timer = document.querySelector(".timer");

const time = setInterval(function () {
  const now = new Date();
  const options = {
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    day: "numeric",
    month: "long",
    year: "numeric",
    weekday: "long",
  };
  const local = new Intl.DateTimeFormat(navigator.language, options).format(
    now
  );
  timer.innerHTML = local;
}, 1000);

time();
