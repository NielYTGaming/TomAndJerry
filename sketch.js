var cat,catImg
var mouse,mouseImg;
var background,backImg;



function preload() {
    //load the images here

    catImg=loadImage("images/cat1.png");
    mouseImg=loadImage("images/mouse1.png");
    backImg=loadImage("images/garden.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
background=createSprite(500,400,1000,800);
background.addImage(backImg);
cat=createSprite(750,550,20,20);
cat.addImage(catImg);
mouse=createSprite(150,550,20,20);
mouse.addImage(mouseImg);
}

function draw() {

    
    //Write condition here to evalute if tom and jerry collide
    cat.scale=0.2;
    mouse.scale=0.2;
    

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here


}
