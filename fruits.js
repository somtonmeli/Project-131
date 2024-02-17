Status = "";

function preload()
{
    img = loadImage('dog_cat.jpg');
}

function setup()
{
    canvas = createCanvas(640,420);
    canvas.center();

    objectDetector = ml5.objectDetector('cocssd',modelLoaded);
}

function modelLoaded()
{
    console.log("model is loaded");
    Status = true;
    objectDetector.detect(img, gotResult);
}

function gotResult(error,results)
{
    if(error)
    {
        console.log(error);
    }
    console.log(results);
}