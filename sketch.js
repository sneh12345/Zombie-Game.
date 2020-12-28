var survivalistIMG, zombieIMG, nightIMG, morningIMG
var survivalist
var zombieGroup
var Zombie
var NightBackground
var bullet
var scream
function setup() {
  var canvas = createCanvas(1419, 726);
  
  survivalist = createSprite(1064.25,354.75,100,100);
  survivalist.addImage(survivalistIMG,1064.25,354.75, 50, 50); 
  survivalist.velocityX = 0;
  survivalistIMG.resize(250, 0);

  Zombie = createSprite(354.75, 354.75, 100, 100); 
  Zombie.addImage(zombieIMG,354.75, 354.75 );
  zombieIMG.resize(150, 0)

  zombieGroup = createGroup();
  zombieGroup.add(Zombie)


  bullet = createSprite(1064.25,354.75,100,100);
  bullet.addImage(bulletIMG,1064.25,354.75, 50, 50); 
  bullet.velocityX = -3;
  bulletIMG.resize(50, 0)
  
  for (var i = 0; i < 726; i=i+20) {
    line(709.5,i,709.5,i+10);
  }
  
  Zombie.velocityX = 3;
  
 if(bullet.isTouching(Zombie)){

  rotate(24, [27]);
  scream.play();


 }

}
scream.play();
function preload(){
nightIMG = loadImage("../Pictures/Night time warzone.jpg")
survivalistIMG = loadImage('../Pictures/Survivalist.png');
zombieIMG = loadImage('../Pictures/TransparentZombie.png');
bulletIMG = loadImage('../Pictures/bullet.png')
morningIMG = loadImage('../Pictures/warzone(1).jpg')


}

function draw() {
 
  background(nightIMG,morningIMG);
  
  drawSprites();
 textFont('Langar')
 textSize(24)
 text("Can you defeat the Zombies?", 532.125, 100); 





}

















