var gameState = "PLAY"
var Score = 0
var monkey, monkeyImage
var banana, bananaImage
var rock, rockImage
var jungle, jungleImage
var bananaGroup
var rockGroup

function preload() {
monkeyImage=loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png")
bananaImage = loadImage("banana.png")
rockImage = loadImage("stone.png")
jungleImage = loadImage("jungle.jpg")
}

function setup() {
  createCanvas(400, 400);
jungle=createSprite(0,0,400,400)
jungle.addImage(jungleImage)
jungle.scale = 1.5

monkey=createSprite(50,266,10,10)
monkey.addAnimation('Monkey_01',monkeyImage)
monkey.scale = 0.2

rockGroup = new Group()
bananaGroup = new Group()
}

function draw() {
  background(220);
  drawSprites();
text("Bananas Eaten: "+Score,10,40)
if (gameState==="PLAY"){
if (jungle.x < 0){
jungle.x = jungle.width/2    
}

jungle.velocityX = -5  
  
edges = createEdgeSprites()
 
Banana()
Stone()  

if (bananaGroup.isTouching(monkey)) {
bananaGroup.destroyEach()  
Score = Score + 1 
}  
if (keyDown('space')){
monkey.velocityY = -15
}
if(rockGroup.isTouching(monkey)){
gameState = "END"
}
}
else if (gameState==="END"){
background(30)
textSize(20)
text("You Tripped",150,200)
jungle.destroy()
}
monkey.velocityY = monkey.velocityY + 1
monkey.collide(edges[3])
}
  
function Stone(){
if (World.frameCount%150===0) {
rock = createSprite(400,350,10,10)  
rock.addImage(rockImage) 
rock.velocityX = -5
rock.lifetime = 90
rock.scale = 0.1
rockGroup.add(rock)
}  
}

function Banana(){
if (World.frameCount%390===0){
banana = createSprite(400,250,10,10)  
banana.addImage(bananaImage) 
banana.velocityX = -5
banana.lifetime = 90
banana.scale = 0.1
bananaGroup.add(banana)
}
}