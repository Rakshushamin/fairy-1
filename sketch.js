var fairy,fairy_img;
var starngt,starngt_img;
var star,star_img;

function preload()
{
   //preload the images here
   fairy_img=loadAnimation("fairy1.png","fairy2.png");
   starngt_img=loadImage("starnight.png");
   star_img=loadImage("star.png");
}

function setup() {
  createCanvas(600,600);
  fairy=createSprite("150,150,10,10");
  fairy.addAnimation("Fairy",fairy_img);
  fairy.scale=0.2;

  starngt=createSprite("300,300,10,10");
  starngt.addImage("Star",starngt_img);
  starngt.scale=1;

  star=createSprite("500,500,10,10,star_option1,star_option2");
  star.addImage("Star",star_img);
  star.scale=0.5;

  star=createSprite("250,250,10,10,star_option1,star_option2");
  star.addImage("Star",star_img);
  star.scale=0.5;

  star=createSprite("450,450,10,10,star_option1,star_option2");
  star.addImage("Star",star_img);
  star.scale=0.37;

  star=createSprite("300,300,10,10,star_option1,star_option2");
  star.addImage("Star",star_img);
  star.scale=0.2;
}


function draw() {
  background("black");
  if(keyDown("right"))
    {
      fairy.x=fairy.x+3;
    }
  if(keyDown("left"))
    {
      fairy.x=fairy.x-3;
    }
  if(keyDown("space"))
  {
    var star_option1=
    {
    
      isStatic:false
    }
  }
  if(star.isTouching("fairy"))
  {
    var star_option2=
    {
    
      isStatic:true
    }
  }
  drawSprites();
}
