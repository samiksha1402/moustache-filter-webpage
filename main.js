nose_y = 0;
nose_x = 0;

function preload(){
    mustache_filter = loadImage("https://i.postimg.cc/3x3QzSGq/m.png");
}

function setup(){
    canvas= createCanvas(450, 450);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}

function modelLoaded(){
    console.log("Model is loaded");
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        nose_x = results[0].pose.nose.x+62;
        nose_y = results[0].pose.nose.y+100;
    }
}
function draw(){
    image(video,0,0,450,450);
    image(mustache_filter,nose_x,nose_y,60,50);
}
function takesnapshot(){
    save("myimage.png");
}
