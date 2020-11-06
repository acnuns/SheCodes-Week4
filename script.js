let now = new Date();
let currentDate = document.querySelector("#date");

  let days = [
    "Sunday", 
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];

  let day = days[now.getDay()];
  let hours =  now.getHours();
  let minutes = now.getMinutes();

currentDate.innerHTML=`${day} ${hours}:${minutes}`;

function search(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-text-input");
  let h1 = document.querySelector("h1");
  h1.innerHTML=`${searchInput.value}`;
}

let form = document.querySelector("#search-form");
form.addEventListener("submit", search);

function currentTempC(event) {
  event.preventDefault();
  let farTemp = document.querySelector(".temperature");
  farTemp.innerHTML=8;
}

let celsius = document.querySelector("#celsius");
celsius.addEventListener("click", currentTempC)

function currentTempF(event) {
  event.preventDefault();
  let celTemp = document.querySelector(".temperature");
  celTemp.innerHTML=46;
}

let far = document.querySelector("#far");
far.addEventListener("click", currentTempF)