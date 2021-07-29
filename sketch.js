var background1,background1Img
var ground1, ground1Img
var tree1,tree1Img
var tree2, tree2Img
var fox,foxImg
var stoneageMan, stoneageManImg
var man , manImg
var man1,man1Img
var orange, orangeImg
var raspberry, raspberryImg
var pears, pearsImg
var banana,bananaImg
var stand,invisibleFox
var arrow,arrowImg
var cave, caveImg

var death = 0;
var food=0;
var weapons=0;


var PLAY=1;
var END=0;
var gameState=PLAY;

function preload(){
 background1Img=loadImage("game images/background1.png")
 
foxImg=loadAnimation("game images/fox7.png","game images/fox1.png","game images/fox6.png",
"game images/fox4.png","game images/fox5.png","game images/fox3.png","game images/fox2.png",)
stoneageManImg=loadAnimation("game images/boy1.png","game images/boy8.png",)
orangeImg=loadImage("game images/orange.png")
raspberryImg=loadImage("game images/raspberry.png")
pearsImg=loadImage("game images/pears.png")
bananaImg=loadImage("game images/banana.png")
manImg=loadImage("game images/boy8.png")
arrowImg=loadImage("game images/arrow.png")
caveImg=loadImage("game images/cave 1.png")
man1Img=loadImage("game images/boy4.png")
}
function setup() {
  createCanvas(1300, 400);
  
 // page1();
  background1=createSprite(1000,200,1220,20)
  background1.addImage(background1Img)  
 // background1.scale=5.0
  background1.velocityX=-3
 
 // ground1=createSprite(645,305,20,20)
  //ground1.addImage(ground1Img)
  //ground1.scale=0.5
 // ground1.velocityX=-5

 
 stoneageMan=createSprite(200,300,20,20)
 stoneageMan. addAnimation("run",stoneageManImg)
 stoneageMan.scale=0.5
 stoneageMan.visible=false

 man=createSprite(200,300,20,20)
 man.addImage(manImg)
man .visible=false
man.scale=0.5

man1=createSprite(200,300,20,20)
man1.addImage(man1Img)
man1.scale=0.5
man1.visible=false

stand=createSprite(630,360,1200,20)
stand.visible=false

foxGroup=new Group()
invisibleFoxGroup=new Group()
pearsGroup=new Group()
raspberryGroup=new Group()
bananaGroup=new Group()
arrowGroup=new Group()

death=0
food=0
weapons=0
}
 


function draw() {

  if (gameState===PLAY){
  
  background("0");


  if(death ===2){
    gameState=END 
   }
 

  stoneageMan.visible=false
  man .visible=false
 // man .visible=true
  stoneageMan.visible=true

  if(keyCode===39){
    stoneageMan.visible=true
    //man1.visible=false
   
  }

  if(man.isTouching(invisibleFoxGroup)){
    death=death+1 

  }
  if (stoneageMan.isTouching(pearsGroup)||(man.isTouching(pearsGroup))) {

    for(var k=0;k<pearsGroup.length;k++){
  
    if(pearsGroup.contains(pearsGroup.get(k))){
  
    if(stoneageMan.isTouching(pearsGroup.get(k))||(man.isTouching(pearsGroup.get(k)))){
     pearsGroup.get(k).destroy();
        food=food+1
      } } }}

      if (stoneageMan.isTouching(arrowGroup)||(man.isTouching(arrowGroup))) {

        for(var k=0;k<arrowGroup.length;k++){
      
        if(arrowGroup.contains(arrowGroup.get(k))){
      
        if(stoneageMan.isTouching(arrowGroup.get(k))||(man.isTouching(arrowGroup.get(k)))){
          arrowGroup.get(k).destroy();
        weapons=weapons+1
      
          } } }}

      if (stoneageMan.isTouching(raspberryGroup)||(man.isTouching(raspberryGroup))) {

        for(var k=0;k<raspberryGroup.length;k++){
      
        if(raspberryGroup.contains(raspberryGroup.get(k))){
      
        if(stoneageMan.isTouching(raspberryGroup.get(k))||(man.isTouching(raspberryGroup.get(k)))){
         raspberryGroup.get(k).destroy();
         food=food+1
          } } }}

          if (stoneageMan.isTouching(bananaGroup)||(man.isTouching(bananaGroup))) {

            for(var k=0;k<bananaGroup.length;k++){
          
            if(bananaGroup.contains(bananaGroup.get(k))){
          
            if(stoneageMan.isTouching(bananaGroup.get(k))||(man.isTouching(bananaGroup.get(k)))){
             bananaGroup.get(k).destroy();
             food=food+1 
          
              } } }}
  
  if (stoneageMan.isTouching(invisibleFoxGroup)) {

    for(var k=0;k<invisibleFoxGroup.length;k++){
  
    if(invisibleFoxGroup.contains(invisibleFoxGroup.get(k))){
  
    if(stoneageMan.isTouching(invisibleFoxGroup.get(k))){
      invisibleFoxGroup.get(k).destroy();
        death=death+1
  
      } } }}
      if (man.isTouching(invisibleFoxGroup)) {

        for(var k=0;k<invisibleFoxGroup.length;k++){
      
        if(invisibleFoxGroup.contains(invisibleFoxGroup.get(k))){
      
        if(man.isTouching(invisibleFoxGroup.get(k))){
          invisibleFoxGroup.get(k).destroy();
            death=death+1
      
          } } }}


  if(background1.x < 370 )
  {
    background1.x = width/2;

  }
 // camera.position.x = stoneageMan.x+width/3
  //camera.position.x = man.x+width/3
  if(stand.x < 370 )
  {
    stand.x = width/2;

  }
  
  if(frameCount%2000===0){
    background1.velocityX=0
 cave=createSprite(1000,230,20,20)
 cave.addImage(caveImg)
 cave.scale=0.8
 stopper=createSprite(1000,230,20,20)
 
   
  }

  stoneageMan.velocityX=0
  man.velocityX=0

  

  if(keyDown("UP_ARROW")) {
   
    man.velocityY = -10;
    stoneageMan.visible=false
    man .visible=true
    stoneageMan.velocityX=3
    man.velocityX=3
  }
  stoneageMan.y=man.y
  man.velocityY = man.velocityY + 0.8
  man.collide(stand)


}else if (gameState === END) {
  background1.velocityX=0
  man1.visible=true
  stoneageMan.visible=false
  

  arrowGroup.destroyEach()
 raspberryGroup.destroyEach()
 pearsGroup.destroyEach()
 foxGroup.destroyEach()
 bananaGroup.destroyEach()

 arrowGroup.visible=false
 foxGroup.visible=false
 pearsGroup.visible=false
 raspberryGroup.visible=false
 bananaGroup.visible=false

 bananaGroup.setVelocityYEach(0);
 pearsGroup.setVelocityYEach(0);
arrowGroup.setVelocityXEach(0)
foxGroup.setVelocityYEach(0)
raspberryGroup.setVelocityYEach(0);
}
if(keyDown("SPACE"))
    {
      reset();   
    }
  
    spawnFruits();
    spawnFox();
    spawnArrow();
 drawSprites();

  textSize(20);
  fill("red");
  text("DEATH: "+ death,250,30);

  textSize(20);
  fill("purple");
  text("FOOD: "+ food,850,30);

  textSize(20);
  fill("orange");
  text("Weapons: "+ weapons,350,30);
}

function spawnFruits(){
  if (frameCount % 200 === 0) {
  banana=createSprite(1300,5,20,20)
  banana.x= Math.round(random(50, 1000))
  banana.addImage(bananaImg)
  banana.scale=0.2
  banana.velocityY=5
  bananaGroup.add(banana)
  }
  if (frameCount % 150 === 0) {
  raspberry=createSprite(1300,10,20,02)
  raspberry.x = Math.round(random(100, 1000))
  raspberry.addImage(raspberryImg)
 raspberry.scale=0.1
 raspberry.velocityY=4
 raspberryGroup.add(raspberry)
  }
  if (frameCount % 100 === 0) {
  pears=createSprite(1300,0,20,20)
  pears.x = Math.round(random(80, 1000))
 pears.addImage(pearsImg)
 pears.scale=0.1
 pears.velocityY=5
 pearsGroup.add (pears)
  }
}
function spawnFox(){
  if (frameCount%200===0){
  fox=createSprite(1300,300,20,20)
 fox.y = Math.round(random(280, 300))
  fox.addAnimation("fox",foxImg)
  fox.scale=0.3
  fox.velocityX=-7
  foxGroup.add(fox)
  invisibleFox=createSprite(1100,300,80,10)
invisibleFox.y = Math.round(random(280, 300))
invisibleFox.x=fox.x
invisibleFox.velocityX=-7
invisibleFox.visible=false
invisibleFoxGroup.add(invisibleFox)

}
}
function spawnArrow(){
  if(frameCount%300===0){
    arrow=createSprite(1300,50,20,20)
    arrow.y = Math.round(random(50, 50))
    arrow.addImage(arrowImg)
    arrow.scale=0.3
    arrow.velocityX=-5
    arrowGroup.add(arrow)
    //arrow.lifetime = 50;
  }
}
function reset(){
  gameState=PLAY
man1.visible=false
stoneageMan. addAnimation("run",stoneageManImg)

}
//function page1(){
 //var title = createElement('h2');
 //title.html("Evolution of technalogy")
 //var input =createInput("")
 //input.position(200,200)
 //var button = createButton("Start")
 //button. position(300,200)

 //button.mousePresseed (()=>{ 
 //input.hide()
 //button.hide()
 //var name=input.value()
 //var greeting= createElement("h3")
 //greeting.html("Hello "+name)
// greeting.position(200,300)
 //})
//}
