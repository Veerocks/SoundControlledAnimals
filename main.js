function start(){
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/36nah1vl_/model.json",modelLoaded);
}
function modelLoaded(){
    console.log("Model Loaded");
    classifier.classify(gotResult);
}