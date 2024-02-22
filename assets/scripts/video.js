// <reference path="../_namespace.js" />
//<reference path="../datetime.js" />

(function () {

    let formatTime = conference.formatTime;
    

    let videoSection = document.querySelector(".video");
    let video = videoSection.querySelector("video");
    let controls = videoSection.querySelector(".video-controls");
    let playButton = videoSection.querySelector(".video-play");
    let pauseButton = videoSection.querySelector(".video-pause");
    let time = videoSection.querySelector(".video-time");

    let ready = function () {
        controls.style.display = "block";
    };

    let play = function () {
        video.play();
        playButton.style.display = "none";
        pauseButton.style.display = "";
    };

    let pause = function () {
        video.pause();
        playButton.style.display = "";
        pauseButton.style.display = "none";
    };

    let updateTime = function () {
        time.textContent = formatTime(video.currentTime);
    };

    pauseButton.style.display = "none";

    video.addEventListener("loadeddata", ready, false);
    video.addEventListener("timeupdate", updateTime, false);
    playButton.addEventListener("click", play, false);
    pauseButton.addEventListener("click", pause, false);

} ());
