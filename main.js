song1 = "";
song2 = "";
canvas = "";

function preload() {
    song1  = loadSong("music.mp3");
    song2 = loadSong("music2.mp3");
}

function setup() {
    canvas = createCanvas(600, 550);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video, 5, 100, 750, 550);
}

function loadSong() {
}