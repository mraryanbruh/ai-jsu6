song="";

function preload(){
    song = loadSound("SAINT_MERCAT_R_-_Da_Biggest_Bird.mp3");
}

function setup() {
    canvas= createCanvas(600,500);
    canvas.center();

    video=createCapture(VIDEO);
    video.hide();
}
function draw() {
    image(video,0,0,600,500)
}
function play(){
    song.play();
}