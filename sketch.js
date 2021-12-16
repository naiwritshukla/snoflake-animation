var bg 
var sf 
var img 

function preload() {

  bg = loadImage("snow2.jpg");
  img = loadImage("snow4.webp");
}

function setup() {
  createCanvas(800,400);
}

function draw() {
  background(bg);   
  drawSprites();
 snowfall()
}

function snowfall() {

  if(frameCount % 10 == 0)
  {
    sf = createSprite(random(0,799), 50, 50, 50);
  sf.addImage(img)
  sf.scale = 0.2
  sf.velocityY = 2
  sf.lifetime = 200 

  }

}