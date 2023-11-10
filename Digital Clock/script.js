const daycontainer = document.querySelector(".day-container"),
  timecontainer = document.querySelector(".time-container span");

const day = new Date(),
  dateInWords = day.getDay(),
  month = day.getMonth(),
  date = day.getDate(),
  year = day.getFullYear();

const totaldays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const totalMonths = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

setInterval(() => {
  let hour = new Date().getHours();
  let minutes = new Date().getMinutes();
  let seconds = new Date().getSeconds();

  let ampm;
  if (hour > 12) {
    ampm = "PM";
    hour = hour - 12;
  } else {
    ampm = "AM";
  }

  if (hour < 10) {
    hour = "0" + hour;
  }

  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  daycontainer.innerHTML =
    totaldays[dateInWords] +
    ", " +
    totalMonths[month] +
    " " +
    date +
    ", " +
    year;
  timecontainer.innerHTML = hour + ":" + minutes + ":" + seconds + " " + ampm;
}, 1000);
