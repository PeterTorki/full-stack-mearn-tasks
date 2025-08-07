var eye1 = document.querySelector("#path2996");
var eye2 = document.querySelector("#path2996-2");

var smilePt1 = document.querySelector("#path3898");
var smilePt2 = document.querySelector("#path3081-0");
var smilePt3 = document.querySelector("#path3081-0-8"); // fixed selector typo

var toggleRed = [eye1, eye2, smilePt1, smilePt2, smilePt3];

function addRedToggle(element) {
  element.addEventListener("mouseover", function () {
    if (smilePt1 === element) {
      element.style.stroke = "red";
    } else {
      element.style.fill = "red";
    }
  });
  element.addEventListener("mouseleave", function () {
    if (smilePt1 === element) {
      element.style.stroke = "black";
    } else {
      element.style.fill = "#000000";
    }
  });
}

for (var i = 0; i < toggleRed.length; i++) {
  addRedToggle(toggleRed[i]);
}
