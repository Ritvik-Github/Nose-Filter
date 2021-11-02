function preload() { }
function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(canvas.width ,canvas.height);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}

function modelLoaded(){
    console.log("PoseNet Initialized()");
}

function gotPoses(results){
    if( results.length > 0 ){
        console.log(results);
        console.log("noseX = " + results[0].pose.nose.x);
        console.log("noseY = " + results[0].pose.nose.y);
    }
}
function draw() {
    canvas.center();
    image(video, 0,0, canvas.width, canvas.height);
}
function take_snapshot() {
    save("Filter.png");
}