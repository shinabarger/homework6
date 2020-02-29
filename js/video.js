var video;
var videoSpeed;
var currentVolumeLevel;
var volume;

function getVid() {
    video = document.querySelector("#myVideo");

    //add volume description below
    document.getElementById("volume").innerHTML = video.volume * 100 + "%";

}

function getVideoDuration() {
    var lengthOfVideo = video.duration;
    console.log("Video is " + lengthOfVideo + " seconds long");
}

function playVid() {
    video.play();
    console.log("Play Video");
    getVideoDuration();
    //update volume level display
    document.getElementById("volume").innerHTML = video.volume * 100 + "%";
}

function pauseVid() {
    video.pause();
    console.log("Pause Video");
}

function decreaseSpeed() {
    video.playbackRate *= 0.8;
    videoSpeed = video.playbackRate * 100;
    console.log("Speed is " + videoSpeed + "%");
}

function increaseSpeed() {
    video.playbackRate *= 1.25;
    videoSpeed = video.playbackRate * 100;
    console.log("Speed is " + videoSpeed + "%");
}

function normalSpeed() {
    video.playbackRate = 1;
    videoSpeed = video.playbackRate * 100;
    console.log("Speed is " + videoSpeed + "%");
}


function skipAhead() {
    console.log("Current location is " + " ");
}

function mute() {
    var muteButton = document.getElementById("mute");

    if (video.muted) {
        video.muted = false;
        console.log("Unmuted the video");
        //toggle button to say mute instead of unmute
        muteButton.innerHTML = "Mute";
    } else {
        video.muted = true;
        console.log("Muted the video");
        muteButton.innerHTML = "Unmute";
    }
}

function changeVolume() {
    volume = document.querySelector("#volume").value;
    video.volume = volumeSlider.value / 100;
    document.querySelector("#volume").innerHTML = video.volume * 100 + "%";
    currentVolumeLevel = video.volume * 100;
    console.log("Volume is " + currentVolumeLevel + "%");
}

function gray() {
    video.classList.add("grayscale");
    console.log("In grayscale");
}

function color() {
    video.classList.remove("grayscale");
    console.log("In color");
}

function skipAhead() {
    video.currentTime += 60;
    console.log("Video time is at " + video.currentTime);

    if (video.ended) {
        video.currentTime = 0;
        playVid();
        normalSpeed();
        console.log("Video time is at " + video.currentTime);
    }
}
