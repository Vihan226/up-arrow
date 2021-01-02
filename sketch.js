var pacman;
var pacmanrImage;
var pacmanlImage;
var pacmanuImage;
var pacmandImage;
var pacmancircleImage;
var line1,line2,line3,line4,line5,line6,line7,line8,line9,line10;
var food1,food2,food3,food4,food5,food6,food7,food8,food9,food10,food11,food12,food13,food14,food15,food16,food17,food18,food19,food20,food21,food22,food23,food24,food25,food26,food27,food28,food29,food30,food31;
var score;
var home;
var State = "first"
var gameState=null;
var button;
var ghost1;
var ghost2;
var ghost3;
var ghost4;
var ghost1Image;
var ghost2Image;
var diamond;
var diamondImage;
var d;
var a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12;
var appleImage;
var ts;
var ghost2;
var rect;
var rect2;
var rect3;
var b1,b2,b3,b4,b5,b6,b7,b8,b9,b10,b11,b12;

function preload(){
  pacmanrImage= loadImage("bgrightpacman.png")
  pacmanlImage= loadImage("bgleftpacman.png")
  pacmandImage= loadImage("bgdownpacman.png")
  pacmanuImage= loadImage("bguppacman.png")
  pacmancircleImage= loadImage("bgusecircle.png")
  ghost1Image= loadImage("useblueghost.png")
  diamondImage= loadImage("bgusediamond.png")
  appleImage=loadImage("bguseapple.png")
  
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  
  pacman=createSprite(width/1.75-5,height/2+10,width-width/1,100)
  pacman.addImage("pacman", pacmancircleImage)
  pacman.addImage("right",pacmanrImage)
  pacman.addImage("left",pacmanlImage)
  pacman.addImage("up",pacmanuImage)
  pacman.addImage("down", pacmandImage)
  pacman.scale=.15     
  
  line1=createSprite(width/1.75-10,height/2+56,width-width/3,10);
  line1.shapeColor="blue"
 
  
  line2=createSprite(width/1.75-10,height/2-12.5,width-width/3,10);
  line2.shapeColor="blue"
  
  line3=createSprite(width/.9-width/2,height/2+110,10)
  line3.shapeColor="blue"

  line4=createSprite(width/2-50,height/2-height/2.15,width-width/8,10)
  line4.shapeColor="blue"
  
  line5=createSprite(width/2-width/2.109,height/2,10,height-53)
  line5.shapeColor="blue"

  line6=createSprite(width/2-50,height-25,width-width/8,10)
  line6.shapeColor="blue"

  line7=createSprite(width/1.11-width/800,height/2,10,height-53)
  line7.shapeColor="blue"

  line8=createSprite(width/1.75-10,height/2-110,width-width/3,10)
  line8.shapeColor="blue"

  
  line9=createSprite(width/1.37-width/2,height/2-60,10);
  line9.shapeColor="blue"

  food1=createSprite(width/1.45-width/2,height/2-60,15,15)
  food1.addImage("food1",appleImage)
  food1.scale=.05
  //food1.shapeColor="yellow"
  

  food2=createSprite(width/1.45-width/2,height/2-90,15,15)
  food2.addImage("food1",appleImage)
  food2.scale=.05
  //food2.shapeColor="yellow"
  
  
  food3=createSprite(width/1.45-width/2,height/2-120,15,15)
  food3.addImage("food1",appleImage)
  food3.scale=.05
  //food3.shapeColor="yellow"

  
  food4=createSprite(width/1.45-width/2,height/2-150,15,15)
  food4.addImage("food1",appleImage)
  food4.scale=.05
  //food4.shapeColor="yellow"

  food5=createSprite(width/1.41-width/2,height/2-150,15,15)
  food5.addImage("food1",appleImage)
  food5.scale=.05
  //food5.shapeColor="yellow"
  
  food6=createSprite(width/1.38-width/2,height/2-150,15,15)
  food6.addImage("food1",appleImage)
  food6.scale=.05
  //food6.shapeColor="yellow"

  food7=createSprite(width/1.35-width/2,height/2-150,15,15)
  food7.addImage("food1",appleImage)
  food7.scale=.05
  //food7.shapeColor="yellow"

  food8=createSprite(width/1.32-width/2,height/2-150,15,15)
  food8.addImage("food1",appleImage)
  food8.scale=.05
  //food8.shapeColor="yellow"

  food9=createSprite(width/1.29-width/2,height/2-150,15,15)
  food9.addImage("food1",appleImage)
  food9.scale=.05
  // food9.shapeColor="yellow"

  food10=createSprite(width/1.26-width/2,height/2-150,15,15)
  food10.addImage("food1",appleImage)
  food10.scale=.05
  food10.shapeColor="yellow"

  food11=createSprite(width/1.23-width/2,height/2-150,15,15)
  food11.addImage("food1",appleImage)
  food11.scale=.05
  food11.shapeColor="yellow"

  food12=createSprite(width/1.20-width/2,height/2-150,15,15)
  food12.addImage("food1",appleImage)
  food12.scale=.05
  food12.shapeColor="yellow"

  food13=createSprite(width/1.17-width/2,height/2-150,15,15)
  food13.addImage("food1",appleImage)
  food13.scale=.05
  food13.shapeColor="yellow"

  food14=createSprite(width/1.14-width/2,height/2-150,15,15)
  food14.addImage("food1",appleImage)
  food14.scale=.05
  food14.shapeColor="yellow"

  food15=createSprite(width/1.11-width/2,height/2-150,15,15)
  food15.addImage("food1",appleImage)
  food15.scale=.05
  food15.shapeColor="yellow"

  food16=createSprite(width/.6-width/1,height/2+80,15,15)
  food16.addImage("food1",appleImage)
  food16.scale=.05
  food16.shapeColor="yellow"

  food17=createSprite(width/.59-width/1,height/2+80,15,15)
  food17.addImage("food1",appleImage)
  food17.scale=.05
  food17.shapeColor="yellow"

  food18=createSprite(width/.58-width/1,height/2+80,15,15)
  food18.addImage("food1",appleImage)
  food18.scale=.05
  food18.shapeColor="yellow"

  food19=createSprite(width/.57-width/1,height/2+80,15,15)
  food19.addImage("food1",appleImage)
  food19.scale=.05
  food19.shapeColor="yellow"

  food20=createSprite(width/.56-width/1,height/2+80,15,15)
  food20.addImage("food1",appleImage)
  food20.scale=.05
  food20.shapeColor="yellow"


  food21=createSprite(width/.63-width/1,height/2+80,15,15)
  food21.addImage("food1",appleImage)
  food21.scale=.05
  food21.shapeColor="yellow"

  food22=createSprite(width/.64-width/1,height/2+80,15,15)
  food22.addImage("food1",appleImage)
  food22.scale=.05
  food22.shapeColor="yellow"

  food23=createSprite(width/.65-width/1,height/2+80,15,15)
  food23.addImage("food1",appleImage)
  food23.scale=.05
  food23.shapeColor="yellow"


  food24=createSprite(width/.66-width/1,height/2+80,15,15)
  food24.addImage("food1",appleImage)
  food24.scale=.05
  food24.shapeColor="yellow"

  food25=createSprite(width/.67-width/1,height/2+80,15,15)
  food25.addImage("food1",appleImage)
  food25.scale=.05
  food25.shapeColor="yellow"


  food26=createSprite(width/.68-width/1,height/2+80,15,15)
  food26.addImage("food1",appleImage)
  food26.scale=.05
  food26.shapeColor="yellow"

  food27=createSprite(width/.69-width/1,height/2+80,15,15)
  food27.addImage("food1",appleImage)
  food27.scale=.05
  food27.shapeColor="yellow"

  food28=createSprite(width/.70-width/1,height/2+80,15,15)
  food28.addImage("food1",appleImage)
  food28.scale=.05
  food28.shapeColor="yellow"


  food29=createSprite(width/.71-width/1,height/2+80,15,15)
  food29.addImage("food1",appleImage)
  food29.scale=.05
  food29.shapeColor="yellow"

  food30=createSprite(width/.71-width/1,height/2+80,15,15)
  food30.addImage("food1",appleImage)
  food30.scale=.05
  food30.shapeColor="yellow"

  ghost1=createSprite(width/.6-width/1,height/2-150,15,15)
  ghost1.addImage("ghost",ghost1Image)
  ghost1.scale=.15

  ghost2=createSprite(width/.9-width/1,height/2-150,15,15)
  ghost2.addImage("ghost",ghost1Image)
  ghost2.scale=.20
  ghost2.visible=false

  a1=createSprite(width/2-50,height/2-height/2.15,width-width/8,10)
  a1.shapeColor="black"
  a1.visible=false
  
  a2=createSprite(width/2-width/2.109,height/2,10,height-53)
  a2.shapeColor="black"
  a2.visible=false

  a3=createSprite(width/2-50,height-25,width-width/8,10)
  a3.shapeColor="black"
  a3.visible=false

  a4=createSprite(width/1.11-width/800,height/2,10,height-53)
  a4.shapeColor="black"
  a4.visible=false

  a5=createSprite(width/1.75-10,height/2+56,width-width/3,10);
  a5.shapeColor="black"
  a5.visible=false
 
  
  a6=createSprite(width/1.75-10,height/2-12.5,width-width/3,10);
  a6.shapeColor="black"
  a6.visible=false

  a7=createSprite(width/.9-width/2,height/2+110,10)
  a7.shapeColor="black"
a7.visible=false


  a8=createSprite(width/1.75-10,height/2-110,width-width/3,10)
  a8.shapeColor="black"
  a8.visible=false
  
  a9=createSprite(width/1.37-width/2,height/2-60,10);
  a9.shapeColor="black"
  a9.visible=false

  
  a10=createSprite(width/1.1-width/2,height/2+140,150,15);
  a10.shapeColor="black"
  a10.visible=false

  a11=createSprite(width/1.6-width/2,height/2+140,15,150);
  a11.shapeColor="black"
  a11.visible=false

  diamond= createSprite(width/.56-width/1,height/2-207)
diamond.addImage("dia",diamondImage)
diamond.scale=.16
diamond.visible=false


rect= createSprite(width/.9-width/1,height/2+70,100,20)

rect2= createSprite(width/.9-width/1,height/2+150,100,20)
rect2.visible=false

rect3= createSprite(width/.9-width/1,height/2+230,100,20)
rect3.visible=false

b1=createSprite(width/2-50,height/2-height/2.15,width-width/8,10)
b1.shapeColor="black"
b1.visible=false

b2=createSprite(width/2-width/2.109,height/2,10,height-53)
b2.shapeColor="black"
b2.visible=false

b3=createSprite(width/2-50,height-25,width-width/8,10)
b3.shapeColor="black"
b3.visible=false

b4=createSprite(width/1.11-width/800,height/2,10,height-53)
b4.shapeColor="black"
b4.visible=false

b5=createSprite(width/1.75-10,height/2+56,width-width/3,10);
b5.shapeColor="black"
b5.visible=false


b6=createSprite(width/1.75-10,height/2-12.5,width-width/3,10);
b6.shapeColor="black"
b6.visible=false

b7=createSprite(width/.9-width/2,height/2+110,10)
b7.shapeColor="black"
b7.visible=false


b8=createSprite(width/1.75-10,height/2-110,width-width/3,10)
b8.shapeColor="black"
b8.visible=false

b9=createSprite(width/1.37-width/2,height/2-60,10);
b9.shapeColor="black"
b9.visible=false


b10=createSprite(width/1.1-width/2,height/2+140,150,15);
b10.shapeColor="black"
b10.visible=false

b11=createSprite(width/1.6-width/2,height/2+140,15,150);
b11.shapeColor="black"
b11.visible=false
  /*level1=createButton("level1:Easy")

level1.position(width/.92-width/1,height/2+130,30);

level2=createButton("level1:Normal")

level2.position(width/.86-width/1,height/2+130,30);

level3=createButton("level1:Hard")

level3.position(width/.79-width/1,height/2+130,30);*/
  

home=createButton("HOME")

home.position(30,10);
  

/*level1.hide()
level2.hide()
level3.hide()*/
home.hide()

score=0
  d=6
  ts=0
}

function draw() {
 
  if(State==="first"){
  background("black");
  fill("red")
  
  textSize(30)
  text("Score: "+score,width/.9-width/1,height/2-200)
  text("Total Score: "+ts,width/.7-width/1,height/2-200)
  if( (touches.length>0 && touches[0].x<width/2  )|| keyDown("LEFT_ARROW") )  {
    pacman.changeImage("left",pacmanlImage)
   // pacman.addImage("left",pacmancircleImage)
    pacman.scale=.25
    pacman.x=pacman.x-10
    pacman.velocityY=0
    touches=[]
  }
  if((touches.length>0 && touches[0].y>height/22  )|| keyDown("DOWN_ARROW" )){
    pacman.changeImage("down",pacmandImage)
    pacman.scale=.25
    pacman.y=pacman.y+10
    pacman.velocityX=0
    touches=[]
  }
  if( (touches.length>0 && (touches[0].x>width/2 && touches[0].x<width) )||   keyDown("RIGHT_ARROW" )){
    pacman.changeImage("right",pacmanrImage)
    pacman.scale=.25
    pacman.x=pacman.x+10
   pacman.velocityY=0
   touches=[]
  }
  if((touches.length>0 && ( touches[0].y <0 && touches[0].y>height/22 )) ||   keyDown("UP_ARROW")){
    pacman.changeImage("up",pacmanuImage)
    pacman.scale=.25
    pacman.y=pacman.y-10
    pacman.velocityX=0
    touches=[]
  }
  if(pacman.isTouching(food1)){
    score=score+1
    ts=ts+1
    food1.destroy();
  }
  if(pacman.isTouching(food2)){
    score=score+1
    ts=ts+1
    food2.destroy();
  }
  if(pacman.isTouching(food3)){
    score=score+1
    ts=ts+1
    food3.destroy();
  }
  if(pacman.isTouching(food4)){
    score=score+1
    ts=ts+1
    food4.destroy();
  }
  if(pacman.isTouching(food5)){
    score=score+1
    ts=ts+1
    food5.destroy();
  }
  if(pacman.isTouching(food6)){
    score=score+1
    ts=ts+1
    food6.destroy();
  }
  if(pacman.isTouching(food7)){
    score=score+1
    ts=ts+1
    food7.destroy();
  }
  if(pacman.isTouching(food8)){
    score=score+1
    ts=ts+1
    food8.destroy();
  }
  if(pacman.isTouching(food9)){
    score=score+1
    ts=ts+1
    food9.destroy();
  }
  if(pacman.isTouching(food10)){
    score=score+1
    ts=ts+1
    food10.destroy();
  }
  if(pacman.isTouching(food11)){
    score=score+1
    ts=ts+1
    food11.destroy();
  }
  if(pacman.isTouching(food12)){
    score=score+1
    ts=ts+1
    food12.destroy();
  }
  if(pacman.isTouching(food13)){
    score=score+1
    ts=ts+1
    food13.destroy();
  }
  if(pacman.isTouching(food14)){
    score=score+1
    ts=ts+1
    food14.destroy();
  }
  if(pacman.isTouching(food15)){
    score=score+1
    ts=ts+1
    food15.destroy();
  }
  
  if(pacman.isTouching(food16)){
    score=score+1
    ts=ts+1
    food16.destroy();
  }
  if(pacman.isTouching(food17)){
    score=score+1
    ts=ts+1
    food17.destroy();
  }
  if(pacman.isTouching(food18)){
    score=score+1
    ts=ts+1
    food18.destroy();
  }
  if(pacman.isTouching(food19)){
    score=score+1
    ts=ts+1
    food19.destroy();
  }
  if(pacman.isTouching(food20)){
    score=score+1
    ts=ts+1
    food20.destroy();
  }

  if(pacman.isTouching(food21)){
    score=score+1
    ts=ts+1
    food21.destroy();
  }
  if(pacman.isTouching(food22)){
    score=score+1
    ts=ts+1
    food22.destroy();
  }
  if(pacman.isTouching(food23)){
    score=score+1
    ts=ts+1
    food23.destroy();
  }
  if(pacman.isTouching(food24)){
    score=score+1
    ts=ts+1
    food24.destroy();
  }
  
  if(pacman.isTouching(food25)){
    score=score+1
    ts=ts+1
    food25.destroy();
  }
  if(pacman.isTouching(food26)){
    score=score+1
    ts=ts+1
    food26.destroy();
  }

  if(pacman.isTouching(food27)){
    score=score+1
    ts=ts+1
    food27.destroy();
  }
  if(pacman.isTouching(food28)){
    score=score+1
    ts=ts+1
    food28.destroy();
  }
  if(pacman.isTouching(food29)){
    score=score+1
    ts=ts+1
    food29.destroy();
  }
  if(pacman.isTouching(food30)){
    score=score+1
    ts=ts+1
    food30.destroy();
  }
rect.visible=false
  createEdgeSprites();
  pacman.bounceOff(line1);
  pacman.bounceOff(line2);
  pacman.bounceOff(line3);
  pacman.bounceOff(line4);
  pacman.bounceOff(line5);
  pacman.bounceOff(line6);
  pacman.bounceOff(line7);
  pacman.bounceOff(line8);
  pacman.bounceOff(line9);
ghost1.bounceOff(line4)
ghost1.bounceOff(line5)
ghost1.bounceOff(line6)
ghost1.bounceOff(line7)
  
/*if(ghost1.isTouching(pacman)){
  textSize(50)
  text("You need to restart the level and the game",idth/.9-width/1,height/2-150)
  score=0
}

  ghost1.velocityY=random(-20,20)
  ghost1.velocityX=random(-20,20)
  left=createButton("Left")
  left.position(width/.9-width/1,height/2+80,15);

left.mousePressed(()=>{
    pacman.velocityX=-10
    pacman.velocityY=0
    pacman.changeImage("left",pacmanlImage)
  })
 right=createButton("Right")
right.position(width/.8-width/1,height/2+80,15);

 right.mousePressed(()=>{
    pacman.velocityX=10
    pacman.velocityY=0
    pacman.changeImage("right",pacmanrImage)
  })
  up=createButton("Up")
  up.position(width/.85-width/1,height/2+50,15);

up.mousePressed(()=>{
    pacman.velocityY=-10
    pacman.velocityX=0
    pacman.changeImage("up",pacmanuImage)
  })
 down=createButton("Down")
  down.position(width/.85-width/1,height/2+100,15);

  down.mousePressed(()=>{
    pacman.velocityY=10
    pacman.velocityX=0
    pacman.changeImage("down",pacmandImage)
  })*/


if(score>29){
State="second"
}


  }
  
  

if(State === "second"){
background("white")
line1.destroy();
line2.destroy();
line3.visible=false;
line4.visible=false;
line5.visible=false;
line6.visible=false;
line7.visible=false;
line8.visible=false;
line9.destroy();
pacman.visible=false
ghost1.visible=false;
food1.destroy();
food2.destroy();
food3.destroy();
food4.destroy();
food5.destroy();
food6.destroy();
food7.destroy();
food8.destroy();
food9.destroy();
food10.destroy();
food11.destroy();
food12.destroy();
food13.destroy();
food14.destroy();
food15.destroy();
food16.destroy();
food17.destroy();
food18.destroy();
food19.destroy();
food20.destroy();
food21.destroy();
food22.destroy();
food23.destroy();
food24.destroy();
food25.destroy();
food26.destroy();
food27.destroy();
food28.destroy();
food29.destroy();
food30.destroy();
 diamond.visible=true;

/*level1.show()
level2.show()
level3.show()*/
home.show()

//diamond= createSprite(width/.56-width/1,height/2-200)
//diamond.addImage("diamond1",diamondImage)
//diamond.scale=.2

fill("blue")

textSize(35)
text(": "+d,width/.55-width/1,height/2-200)
textSize(12)
text("Start from here:Level1:Easy",width/.935-width/1,height/2+60)
// perform all this on click of level1 easy button
/*if(level1.mousePressed(()=>{
gameState="stage1"
d=d-1
ghost1.x=width/.6-width/1
ghost1.y=height/2-150


})){}*/

rect.visible=true
if(mousePressedOver(rect)){
  gameState="stage1"
d=d-1
ghost1.x=width/.6-width/1
ghost1.y=height/2-150
 }





fill("blue")
textSize(12.25)
text("Welcome to the game:In this game you will have to get to the diamond before the monster kills you! Chose your choice of level! Make sure to have as much diamonds as possible! Have fun",width/.98-width/1,height/2-200)
textSize(50)
text("Watch Ads If Neded For Your Journey In this Game!!!",width/.98-width/1,height/2-140)


if(gameState==="stage1"){
  background("green")
 /* level1.hide()
  level2.hide()
  level3.hide()*/
  
  if(mousePressedOver(rect2)){
    gameState="stage2"
    d=d-1
    ghost1.x=width/.6-width/1
ghost1.y=height/2-150
ghost2.x=width/.8-width/1
ghost2.y=height/2-150
  }
ghost1.scale=.15
 rect.visible=false
fill("blue")
textSize(30)
text(":"+d,width/.55-width/1,height/2-200)
a1.visible=true
a2.visible=true
a3.visible=true
a4.visible=true
a5.visible=true
a6.visible=true
a7.visible=true
a8.visible=true
a9.visible=true
a10.visible=true
a11.visible=true
//a12.visible=true

pacman.bounceOff(a1)
pacman.bounceOff(a2)
pacman.bounceOff(a3)
pacman.bounceOff(a4)
pacman.bounceOff(a5)
pacman.bounceOff(a6)
pacman.bounceOff(a7)
pacman.bounceOff(a8)
pacman.bounceOff(a9)
pacman.bounceOff(a10)
pacman.bounceOff(a11)
ghost1.bounceOff(a1)
ghost1.bounceOff(a2)
ghost1.bounceOff(a3)
ghost1.bounceOff(a4)

ghost1.visible=true;

  ghost1.velocityY=random(-20,20)
  ghost1.velocityX=random(-20,20)

  rect2.visible=true

  if(ghost1.isTouching(pacman)){
    State="second"
    gameState=null
    a1.visible=false
      a2.visible=false
      a3.visible=false
      a4.visible=false
      a5.visible=false
      a6.visible=false
      a7.visible=false
      a8.visible=false
      a9.visible=false
      a10.visible=false
      a11.visible=false
      
      ghost1.visible=false;  
  }
  if(pacman.isTouching(diamond)){
      d=d+2
      
      pacman.x=width/1.75-5
      pacman.y=height/2+10

      //score=score+10
      ts=ts+10

      
  }
  if( (touches.length>0 && touches[0].x<width/2  )|| keyDown("LEFT_ARROW") )  {
    pacman.changeImage("left",pacmanlImage)
   // pacman.addImage("left",pacmancircleImage)
    pacman.scale=.25
    pacman.x=pacman.x-10
    pacman.velocityY=0
    touches=[]
  }
  if((touches.length>0 && touches[0].y>height/22  )|| keyDown("DOWN_ARROW" )){
    pacman.changeImage("down",pacmandImage)
    pacman.scale=.25
    pacman.y=pacman.y+10
    pacman.velocityX=0
    touches=[]
  }
  if( (touches.length>0 && (touches[0].x>width/2 && touches[0].x<width) )||   keyDown("RIGHT_ARROW" )){
    pacman.changeImage("right",pacmanrImage)
    pacman.scale=.25
    pacman.x=pacman.x+10
   pacman.velocityY=0
   touches=[]
  }
  if((touches.length>0 && ( touches[0].y >0 && touches[0].y<height/22 )) ||   keyDown("UP_ARROW")){
    pacman.changeImage("up",pacmanuImage)
    pacman.scale=.25
    pacman.y=pacman.y-10
    pacman.velocityX=0
    touches=[]
  }
  pacman.visible=true;

  fill("red")
  textSize(40)
  //text("Score: "+score,width/.9-width/1,height/2-200)
  text("Daily Total Score: "+ts,width/.78-width/1,height/2-220)
  //score=0
 
 home.mousePressed(()=>{
  State="second"
  gameState=null
  a1.visible=false
    a2.visible=false
    a3.visible=false
    a4.visible=false
    a5.visible=false
    a6.visible=false
    a7.visible=false
    a8.visible=false
    a9.visible=false
    a10.visible=false
    a11.visible=false

    b1.visible=false
    b2.visible=false
    b3.visible=false
    b4.visible=false

       b5.visible=false
    b6.visible=false
    b7.visible=false
    b8.visible=false
    b9.visible=false
    b10.visible=false
    b11.visible=false
    //b4.visible=false
    
    ghost1.visible=false;  
    
  })
  {
    
  }
  if(d<0){
   State="second"
   gameState=null
  a1.visible=false
    a2.visible=false
    a3.visible=false
    a4.visible=false
    a5.visible=false
    a6.visible=false
    a7.visible=false
    a8.visible=false
    a9.visible=false
    a10.visible=false
    a11.visible=false
    
    

    ghost1.visible=false;  
    
  }
}
if(gameState==="stage2"){
  background("blue")
  a1.visible=false
    a2.visible=false
    a3.visible=false
    a4.visible=false
    a5.visible=false
    a6.visible=false
    a7.visible=false
    a8.visible=false
    a9.visible=false
    a10.visible=false
    a11.visible=false
    b1.visible=true
    b2.visible=true
    b3.visible=true
    b4.visible=true
    b5.visible=true
    b6.visible=true
    b7.visible=true
    b8.visible=true
    b9.visible=true
    b10.visible=true
    b11.visible=true
    //b12.visible=true
    if(mousePressedOver(rect3)){
      gameState="stage3"
      d=d-2
      ghost1.x=width/.6-width/1
  ghost1.y=height/2-150
  ghost2.x=width/.8-width/1
  ghost2.y=height/2-150
    }
    ghost1.scale=.15
    ghost2.scale=.20

    pacman.bounceOff(b1)
pacman.bounceOff(b2)
pacman.bounceOff(b3)
pacman.bounceOff(b4)
pacman.bounceOff(b5)
pacman.bounceOff(b6)
pacman.bounceOff(b7)
pacman.bounceOff(b8)
pacman.bounceOff(b9)
pacman.bounceOff(b10)
pacman.bounceOff(b11)
    ghost1.bounceOff(b1)
ghost1.bounceOff(b2)
ghost1.bounceOff(b3)
ghost1.bounceOff(b4)
ghost2.bounceOff(b1)
ghost2.bounceOff(b2)
ghost2.bounceOff(b3)
ghost2.bounceOff(b4)

    fill("red")
    textSize(40)
   // text("Score: "+score,width/.9-width/1,height/2-200)
    text("Daily Total Score: "+ts,width/.78-width/1,height/2-220)
    //score=0
    fill("red")
textSize(30)
text(":"+d,width/.55-width/1,height/2-200)

    rect.visible=false
    rect2.visible=false

    if(d<0){
      State="second"
      gameState=null
     a1.visible=false
       a2.visible=false
       a3.visible=false
       a4.visible=false
       a5.visible=false
       a6.visible=false
       a7.visible=false
       a8.visible=false
       a9.visible=false
       a10.visible=false
       a11.visible=false
       
       b1.visible=true
       b2.visible=true
       b3.visible=true
       b4.visible=true
   
       ghost1.visible=false;  
       
     }
       
   //   pacman.x=width/1.75-5
    //  pacman.y=height/2+10

      
ghost1.visible=true;
ghost2.visible=true

ghost1.velocityY=random(-20,20)
ghost1.velocityX=random(-20,20)

ghost2.velocityY=random(-40,30)
ghost2.velocityX=random(-40,30)
    
if( (touches.length>0 && touches[0].x<width/2  )|| keyDown("LEFT_ARROW") )  {
  pacman.changeImage("left",pacmanlImage)
 // pacman.addImage("left",pacmancircleImage)
  pacman.scale=.25
  pacman.x=pacman.x-10
  pacman.velocityY=0
  touches=[]
}
if((touches.length>0 && touches[0].y>height/22  )|| keyDown("DOWN_ARROW" )){
  pacman.changeImage("down",pacmandImage)
  pacman.scale=.25
  pacman.y=pacman.y+10
  pacman.velocityX=0
  touches=[]
}
if( (touches.length>0 && (touches[0].x>width/2 && touches[0].x<width) )||   keyDown("RIGHT_ARROW" )){
  pacman.changeImage("right",pacmanrImage)
  pacman.scale=.25
  pacman.x=pacman.x+10
 pacman.velocityY=0
 touches=[]
}
if((touches.length>0 && ( touches[0].y >0 && touches[0].y<height/22 )) ||   keyDown("UP_ARROW")){
  pacman.changeImage("up",pacmanuImage)
  pacman.scale=.25
  pacman.y=pacman.y-10
  pacman.velocityX=0
  touches=[]
}
pacman.visible=true;


if(ghost1.isTouching(pacman)){
  State="second"
  gameState=null
  b1.visible=false
    b2.visible=false
    b3.visible=false
    b4.visible=false
    b5.visible=false
    b6.visible=false
    b7.visible=false
    b8.visible=false
    b9.visible=false
    b10.visible=false
    b11.visible=false
    
   /* b1.visible=true
    b2.visible=true
    b3.visible=true
    b4.visible=true*/


    ghost1.visible=false; 
  //  ghost2.visible=false 
}
if(d<0){
  State="second"
  gameState=null
 b1.visible=false
   b2.visible=false
   b3.visible=false
   b4.visible=false
   b5.visible=false
   b6.visible=false
   b7.visible=false
   b8.visible=false
   b9.visible=false
   b10.visible=false
   b11.visible=false
   
   

   ghost1.visible=false;  
   
 }
if(pacman.isTouching(diamond)){
  d=d+2
  
  pacman.x=width/1.75-5
  pacman.y=height/2+10

 // score=score+20
  ts=ts+20

}

rect3.visible=true
if(ghost2.isTouching(pacman)){
  State="second"
  gameState=null
  b1.visible=false
    b2.visible=false
    b3.visible=false
    b4.visible=false
    b5.visible=false
    b6.visible=false
    b7.visible=false
    b8.visible=false
    b9.visible=false
    b10.visible=false
    b11.visible=false
    
   /*b1.visible=false
    b2.visible=t
    b3.visible=true
    b4.visible=true */


    ghost1.visible=false;  
   // ghost2.visible=false
}
}
if(gameState==="stage3"){
  background("yellow")



  ghost1.visible=true;
ghost2.visible=true

ghost1.scale=.35

ghost1.velocityY=random(-20,20)
ghost1.velocityX=random(-20,20)

ghost2.velocityY=random(-40,30)
ghost2.velocityX=random(-40,30)

rect2.visible=true

if( (touches.length>0 && touches[0].x<width/2  )|| keyDown("LEFT_ARROW") )  {
  pacman.changeImage("left",pacmanlImage)
 // pacman.addImage("left",pacmancircleImage)
  pacman.scale=.25
  pacman.x=pacman.x-10
  pacman.velocityY=0
  touches=[]
}
if((touches.length>0 && touches[0].y>height/22  )|| keyDown("DOWN_ARROW" )){
  pacman.changeImage("down",pacmandImage)
  pacman.scale=.25
  pacman.y=pacman.y+10
  pacman.velocityX=0
  touches=[]
}
if( (touches.length>0 && (touches[0].x>width/2 && touches[0].x<width) )||   keyDown("RIGHT_ARROW" )){
  pacman.changeImage("right",pacmanrImage)
  pacman.scale=.25
  pacman.x=pacman.x+10
 pacman.velocityY=0
 touches=[]
}
if((touches.length>0 && ( touches[0].y >0 && touches[0].y<height/22 )) ||   keyDown("UP_ARROW")){
  pacman.changeImage("up",pacmanuImage)
  pacman.scale=.25
  pacman.y=pacman.y-10
  pacman.velocityX=0
  touches=[]
}
pacman.visible=true;
fill("red")
textSize(30)
text(":"+d,width/.55-width/1,height/2-200)


fill("red")
textSize(40)
//text("Score: "+score,width/.9-width/1,height/2-200)
text("Daily Total Score: "+ts,width/.78-width/1,height/2-220)
//score=0

pacman.bounceOff(b1)
pacman.bounceOff(b2)
pacman.bounceOff(b3)
pacman.bounceOff(b4)
pacman.bounceOff(b5)
pacman.bounceOff(b6)
pacman.bounceOff(b7)
pacman.bounceOff(b8)
pacman.bounceOff(b9)
pacman.bounceOff(b10)
pacman.bounceOff(b11)
    ghost1.bounceOff(b1)
ghost1.bounceOff(b2)
ghost1.bounceOff(b3)
ghost1.bounceOff(b4)
ghost2.bounceOff(b1)
ghost2.bounceOff(b2)
ghost2.bounceOff(b3)
ghost2.bounceOff(b4)

if(mousePressedOver(rect2)){
  gameState="stage1"
d=d-1
ghost1.x=width/.6-width/1
ghost1.y=height/2-150
 }
 if(ghost2.isTouching(pacman)){
  State="second"
  gameState=null
  b1.visible=false
    b2.visible=false
    b3.visible=false
    b4.visible=false
    b5.visible=false
    b6.visible=false
    b7.visible=false
    b8.visible=false
    b9.visible=false
    b10.visible=false
    b11.visible=false
    
   /*b1.visible=false
    b2.visible=t
    b3.visible=true
    b4.visible=true */


    ghost1.visible=false;  
   // ghost2.visible=false
}
if(ghost1.isTouching(pacman)){
  State="second"
  gameState=null
  b1.visible=false
    b2.visible=false
    b3.visible=false
    b4.visible=false
    b5.visible=false
    b6.visible=false
    b7.visible=false
    b8.visible=false
    b9.visible=false
    b10.visible=false
    b11.visible=false
    
   /*b1.visible=false
    b2.visible=t
    b3.visible=true
    b4.visible=true */


    ghost1.visible=false;  
   // ghost2.visible=false
}
if(d<0){
  State="second"
  gameState=null
 b1.visible=false
   b2.visible=false
   b3.visible=false
   b4.visible=false
   b5.visible=false
   b6.visible=false
   b7.visible=false
   b8.visible=false
   b9.visible=false
   b10.visible=false
   b11.visible=false
   
   

   ghost1.visible=false;  
   
 }
 if(pacman.isTouching(diamond)){
  d=d+3
  
 pacman.x=width/1.75-5
  pacman.y=height/2+10
 // score=score+30
  ts=ts+30
  
  //textSize(40)
//text("Time to move on. Press the next button to move on the level",width/.50-width/1,height/2)
}

}
}
 drawSprites();
    
}




  

