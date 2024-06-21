const phone = document.querySelector(".phone");
const device = document.querySelector("h1");
const btn = document.querySelector("buttom");
const cam = document.querySelector(".camera");
const show = document.querySelector(".deviceShow");
const key = document.querySelector(".key");
function tophone() {
  phone.classList.remove("change");
  device.innerHTML = "Phone";
  cam.classList.remove("change");
  show.classList.remove("change2");
  key.classList.remove("change");
}

function totablet() {
  phone.classList.add("change");
  phone.classList.remove("change2");
  device.innerHTML = "Tablet";
  cam.classList.add("change");
  show.classList.remove("change2");
  key.classList.remove("change");
}

function tolaptop() {
  phone.classList.add("change");
  phone.classList.add("change2");
  device.innerHTML = "Laptop";
  show.classList.add("change2");
  key.classList.add("change");
}
