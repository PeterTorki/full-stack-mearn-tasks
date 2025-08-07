var video = document.querySelector("video");
var play = document.querySelector("#play");
var stop = document.querySelector("#stop");
var mute = document.querySelector("#mute");
var unmute = document.querySelector("#un-mute");
var volume = document.querySelector("input[type=range]");
var progress = document.querySelector("progress");

play.addEventListener("click", function () {
  console.log(video);
  video.play();
});

stop.addEventListener("click", function () {
  console.log(video);
  video.pause();
});

mute.addEventListener("click", function () {
  video.muted = true;
});

unmute.addEventListener("click", function () {
  video.muted = false;
});

video.addEventListener("timeupdate", function () {
  progress.max = !isFinite(video.duration) ? 0 : video.duration;
  progress.value = video.currentTime;
});

volume.addEventListener("input", function (e) {
  video.muted = false;
  video.volume = volume.value;
});

var vid1 = document.querySelector("#vid1");
var vid2 = document.querySelector("#vid2");
var vid3 = document.querySelector("#vid3");
var vid4 = document.querySelector("#vid4");

var currentIdx = 0;
var playList = [
  vid1.getAttribute("vidSrc"),
  vid2.getAttribute("vidSrc"),
  vid3.getAttribute("vidSrc"),
  vid4.getAttribute("vidSrc"),
];

function changeVidIdx(idx = currentIdx % playList.length) {
  console.log(idx);
  video.src = playList[idx];
}

video.addEventListener("ended", function () {
  currentIdx++;
  changeVidIdx();
});

vid1.addEventListener("click", function () {
  changeVidIdx(0);
});

vid2.addEventListener("click", function () {
  changeVidIdx(1);
});

vid3.addEventListener("click", function () {
  changeVidIdx(2);
});

vid4.addEventListener("click", function () {
  changeVidIdx(3);
});
