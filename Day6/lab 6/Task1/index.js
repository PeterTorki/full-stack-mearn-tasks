var http = new XMLHttpRequest();

var currentIdx = 0;
var img = document.createElement("img");
var slideShowDiv = document.querySelector("#slideshow");
var buttonsDiv = document.querySelector("#buttons");
let intervalId;

function customizeInterval(interval) {
  if (intervalId) {
    clearInterval(intervalId);
  }
  intervalId = setInterval(() => {
    console.log(`Current Index: ${currentIdx}`);
    currentIdx = (currentIdx + 1) % products.length;
    img.src = products[currentIdx].image;
  }, interval);
}

var backBtn = document.querySelector("#previous");
var nextBtn = document.querySelector("#next");
var stopBtn = document.querySelector("#stop");
var playBtn = document.querySelector("#play");
var six = document.querySelector("#six");
var four = document.querySelector("#four");
var two = document.querySelector("#two");

backBtn.addEventListener("click", function () {
  currentIdx = (currentIdx - 1 + products.length) % products.length;
  img.src = products[currentIdx].image;
});
nextBtn.addEventListener("click", function () {
  currentIdx = (currentIdx + 1) % products.length;
  img.src = products[currentIdx].image;
});
stopBtn.addEventListener("click", function () {
  clearInterval(intervalId);
});
playBtn.addEventListener("click", function () {
  customizeInterval(2000, products);
});
six.addEventListener("click", function () {
  customizeInterval(6000, products);
});
four.addEventListener("click", function () {
  customizeInterval(4000, products);
});
two.addEventListener("click", function () {
  customizeInterval(2000, products);
});

var products = [];
function fetchImgs() {
  http.open("GET", "https://fakestoreapi.com/products", false);
  http.onreadystatechange = function () {
    if (http.readyState === 4 && http.status === 200) {
      products = JSON.parse(http.responseText);
    }
  };
  http.send();
}

function buildSlideShow(products) {
  if (!products.length) {
    return;
  }

  img.src = products[currentIdx].image;
  img.alt = products[currentIdx].title;

  slideShowDiv.insertBefore(img, buttonsDiv);

  customizeInterval(2000);
}

function startSite() {
  fetchImgs();
  buildSlideShow(products);
}

startSite();
