var red = document.querySelector("#red");
var green = document.querySelector("#green");
var blue = document.querySelector("#blue");

var testText = document.querySelector("p");

red.addEventListener("input", function () {
  changeTestText(red.value, green.value, blue.value);
});
green.addEventListener("input", function () {
  changeTestText(red.value, green.value, blue.value);
});
blue.addEventListener("input", function () {
  changeTestText(red.value, green.value, blue.value);
});

function changeTestText(r, g, b) {
  testText.style.color = `rgb(${r}, ${g}, ${b})`;
}

// color : rgb()
