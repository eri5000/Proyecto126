song = "music.mp3";
song2 ="music2.mp3";
leftWritsX = 0;
leftWristY = 0,
rightWristX=0;
rightWristY=0;
function canvas(){
    canvas = createCanvas(300,300);
    canvas.center();
}
function preload(){
    song = loadSound("music.mp3");
    song2 = loadSound("music2.mp3");
}
function setup(){
    canvas = createCanvas(600,500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose' , gotPoses);
}
function draw(){
    image(video,0,0,600,500);
}
function gotPoses(results){
 if(results.length > 0){
   console.log(results);
 }
}
 function modelLoaded(){
  console.log('Posenet esta inicializado');
}