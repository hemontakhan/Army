var gameState = L1 ;
var L1;

var bg,bg2;
var ground,helcopImg,helcop;
var vinayak,bullet,bulletImg,vImage,bulletGroup;

var soldier1,soldier2,soldier3,soldier4,bomber,bomber2,bomber3;
var s2Image,sImage,s3Img,s4Img,s5Img,s6Img,s7Img,s8Img;
var base,baseImg,baseImg2,button;

var v2Img,v3Img,v4Img;

var etar,ebullet,ebulletGroup,bunk,bunkImg,b2Img,bunk2;
var newGr;
var ebul2,ebul2Group,ebul3,ebul3Group,ebul4, ebul4Group;

var mc,mcImg,mcarms,nuke,bul,mcarmGroup;
var sd1,sd2;
var hb1,hbx,hb2,hb3,hb4,mch,mch2,mch3;

var health = 5;
var mchealth = 7;

var hBar,mcHbar;
var bombx,bomb2,bomb3,bImg,b2Img,b3Img;
var bGroup,b2Group,b3Group;

var eh,eh2,eh3,eh4;

function preload(){
  bg = loadImage("bg.png.gif");
  bg2 = loadImage("bg.png");
  helcopImg = loadImage("helicopter.png");

  vImage = loadImage("army.png");
  bulletImg = loadImage("bullet.png");
  v2Img = loadImage("army2.png");
  v3Img = loadImage("army4.png");
  v4Img = loadImage("army3.png");

  sImage = loadImage("rks.png")
  s2Image = loadImage("rks.png");
  s3Img =  loadImage("rks.png");
  s4Img =  loadImage("rks.png");

  s5Img =  loadImage("enm.png");
  s6Img =  loadImage("enm.png");
  s7Img =  loadImage("enm.png");
  s8Img =  loadImage("enm.png");

  baseImg = loadImage("base.png");
  baseImg2 = loadImage("base2.0.png");
  bunkImg = loadImage("bunk.png");
  b2Img = loadImage("bunk20.png");
  mcImg = loadImage("mc.png");


  sd1 = loadSound("salamisound-3444101-sfx-explosion-hit-6.mp3");
  sd2 = loadSound("preview.mp3");

  nuke = loadImage("nuke.png");
  bul  = loadImage("mcb.png");

  hbx = loadImage("health.png");
  hb  = loadImage("hb2.png");
  hb2 = loadImage("hb3.png");
  hb3 = loadImage("hb0.png");

  eh = loadImage("mch.png");
  eh2 = loadImage("h2.png");
  eh3 = loadImage("h3.png");
  eh4 = loadImage("hl.png")

  bImg = loadImage("bomb.png");
  b2Img = loadfImage("bomb.png");
  b3Img = loadImage("bomb.png");
} 

function setup() {
  createCanvas(displayWidth,displayHeight);

  ground = createSprite(200,680,15000,7);
  ground.shapeColor = "green";
  ground.visible = false;

  newGr = createSprite(200,700,25000,7);
  newGr.shapeColor = "cloud";
  newGr.visible = false;

  base = createSprite(7650,490,30,30);
  base.addImage(baseImg);
  base.scale = 5;

  vinayak = createSprite(200,210,50,50);
  vinayak.addImage(vImage);
  vinayak.scale = 1.2;

  helcop = createSprite(200,200,20,20);
  helcop.addImage(helcopImg);

  bunk = createSprite(1060,570,100,3);
  bunk.addImage(bunkImg);
  bunk.scale = 3;

  bunk2 = createSprite(3050,350,100,3);
  bunk2.addImage(b2Img);
  bunk2.scale = 5;

  soldier1 = createSprite(2048,620,20,20);
  soldier1.addImage(s2Image);
  soldier1.scale = 0.4;
  soldier1.collide(ground);

  soldier2 = createSprite(3045,350,20,20);
  soldier2.addImage(sImage);
  soldier2.scale = 0.4;
  soldier2.collide(bunk2);

  soldier3 = createSprite(3048,620,20,20);
  soldier3.addImage(s3Img);
  soldier3.scale = 0.4;
  soldier3.collide(ground);

  soldier4 = createSprite(5045,620,20,20);
  soldier4.addImage(s4Img);
  soldier4.scale = 0.4;
  soldier4.collide(ground);

  bomber = createSprite(6045,650,20,20);
  bomber.addImage(s5Img);
  bomber.scale = 0.50;
  bomber.collide(ground);

  bomber2 = createSprite(4045,650,20,20);
  bomber2.addImage(s6Img);
  bomber2.scale = 0.50;
  bomber2.collide(ground);

  bomber3 = createSprite(7045,620,20,20);
  bomber3.addImage(s7Img);
  bomber3.scale = 0.60;
  bomber3.collide(ground);


  button = createSprite(7450,585,5,5);
  button.shapeColor = "yellow";

  mc = createSprite(9350,570,25,25);
  mc.addImage(mcImg);
  mc.scale = 0.55;

  mcHbar = createSprite(9350,410,20,20);
  mcHbar.addImage(eh);
  mcHbar.scale = 1.5;

  hBar = createSprite(200,560,20,20);
  hBar.addImage(hbx);
  hBar.scale = 1.5;


  bulletGroup = new Group();
  ebulletGroup = new Group();
  ebul2Group = new Group();
  ebul3Group = new Group();
  ebul4Group = new Group();
  mcarmGroup = new Group();
  bGroup = new Group();
  b2Group = new Group();
  b3Group = new Group();
}

function draw() {
  background(bg); 
  background.velocityX = -4;

  bunk.setCollider("rectangle", 0, 0, 60, 20);

  hBar.x = vinayak.x;
  mcHbar.x = mc.x;
  vinayak.velocityY = vinayak.velocityY+0.8;

  camera.position.x = vinayak.x;

  vinayak.collide(ground);
  vinayak.collide(newGr);
  vinayak.collide(bunk);
  vinayak.collide(bunk2);

if(gameState===L1){
  if(keyDown("d")){
    vinayak.velocityY = -3;
    vinayak.addImage(v4Img);
  } else {
    vinayak.addImage(vImage)
  }

  if(vinayak.isTouching(ground)){
     helcop.visible = false;
   }


  if(keyDown("S")){
     createBullet();
     sd1.play();
   }

  if(keyDown("RIGHT_ARROW")){
     vinayak.x = vinayak.x+10;
     vinayak.addImage(v2Img);
   } else {
     vinayak.addImage(vImage);
   }

  if(bulletGroup.isTouching(soldier1)){
     soldier1.destroy();
     ebulletGroup.destroyEach();
     bulletGroup.destroyEach();
   }

  if(bulletGroup.isTouching(soldier2)){
     soldier2.destroy();
   }

  if(bulletGroup.isTouching(soldier3)){
    soldier3.destroy();
   }

   if(bulletGroup.isTouching(soldier4)){
    soldier4.destroy();
   }

  if(button.isTouching(vinayak)){
     vinayak.addImage(v3Img);
     base.addImage(baseImg2); 
   }

  if(vinayak.x >= 1770){
      enemyBullet();
   }

  if(vinayak.x >= 7636){
     background(bg2);
     base.destroy();
    
     newGr.visible = true;
     button.visible = false;
     ground.visible = false;
  }

  if(vinayak.x >= 800){
     ebul();
  }

  if(vinayak.x>=2720){
     ebulx();
  }

  if(vinayak.x>=2720 && vinayak.y>=210){
    ebuly();
  }

  if(vinayak.x>=3700){
  bomb();
  }

  if(bulletGroup.isTouching(bomber) || bulletGroup.isTouching(bomber2) || bulletGroup.isTouching(bomber3)){
     bulletGroup.destroyEach();
     bomber.destroy();
     bomber2.destroy();
     bomber3.destroy();
  }

  if(ebul2Group.isTouching(vinayak) || ebulletGroup.isTouching(vinayak) || ebul3Group.isTouching(vinayak)){
     health = health-1;
     ebul2Group.destroyEach();
     ebulletGroup.destroyEach();
     ebul3Group.destroyEach();
  }


  }
  
  if(vinayak.x >= 8700 && frameCount%100 ===0){
    mcarms = createSprite(random(9200,9400),610,10,10);
    mcarms.velocityX = -6;
    mcarms.scale = 0.2;
    var rand = Math.round(random(1,2));
    switch(rand){
     case 1: mcarms.addImage(nuke);
     break;
     case 2: mcarms.addImage(bul);
     break;
     default: break;
    }
    mcarmGroup.add(mcarms);
}

if(mcarmGroup.isTouching(vinayak)){
   health = health-1;
}

if(bulletGroup.isTouching(mcarmGroup)){
  mcarmGroup.destroyEach();
}

if(bulletGroup.isTouching(mc)){
  mchealth = mchealth-1;
}

if(vinayak.x >= 4760){
   bomby();
}

if(bGroup.isTouching(vinayak)){
   health = health-2;
}

if(health === 4){
   hBar.addImage(hb);
}

if(health===3){
  hBar.addImage(hb2);
}

if(health===2 || health===1){
  hBar.addImage(hb3);
}

if(health===0){
   background("black");

   fill("white")
   stroke(3);
   textSize(25);
   text("YOU LOSE",400,375);
   ebul2Group.destroyEach();
   bunk.destroy();
   vinayak.destroy();
   helcop.destroy();
   hBar.destroy();
}

if(mcarmGroup.isTouching(vinayak)){
   health = health-3;
} else if(bulletGroup.isTouching(mc)){
         mchealth = mchealth-1;
}

if(mchealth===5){
   mcHbar.addImage(eh2);
}

if(mchealth===3){
  mcHbar.addImage(eh3);
}

if(mchealth>=2 || mchealth>=1){
  mcHbar.addImage(eh4);
}

if(mchealth===0){
  background(222,93,48);
  fill("YELLOW")
   stroke(3);
   textSize(25);
   text("MISSION COMPLETE JAI HIND",400,375);
  ebul2Group.destroyEach();
  bunk.destroy();
  vinayak.destroy();
  helcop.destroy();
  hBar.destroy();
  bulletGroup.destroyEach();
  sd2.play();
}


  console.log(mchealth);
  console.log(health);

  drawSprites();
}

function createBullet(){
    bullet = createSprite(530, 50, 5, 10);
    bullet.velocityX = 7;
    bullet.scale = 0.3;
    bullet.lifetime = 100;
    bullet.addImage(bulletImg);
    bullet.y = vinayak.y;
    bullet.x = vinayak.x;
    bulletGroup.add(bullet);
    return bullet;

}

function enemyBullet(){
  ebullet = createSprite(2000,610,4,4);
  ebullet.shapeColor = "blue";
  ebullet.velocityX = -6;
  ebullet.lifetime = 35;
  ebulletGroup.add(ebullet);
  return ebullet;

}

function ebul(){
  ebul2 = createSprite(1035,620,3,3);
  ebul2.shapeColor = "purple";
  ebul2.velocityX = -6;
  ebul2.lifetime = 50;
  ebul2Group.add(ebul2);
  return ebul2;

}

function ebulx(){
  ebul3 = createSprite(2975,610,3,3);
  ebul3.shapeColor = "black";
  ebul3.velocityX = -6;
  ebul3Group.add(ebul3);
  return ebul3;

}

function ebuly(){
  ebul4 = createSprite(2975,220,3,3);
  ebul4.shapeColor = "green";
  ebul4.velocityX = -6;
  ebul4Group.add(ebul4);
  return ebul4;

}

function bomb(){
bombx = createSprite(4030,605,2,2);
bombx.addImage(bImg);
bombx.scale = 0.05;
bombx.velocityX = -4;
bGroup.add(bombx);
return bombx;

}

function bomby(){
  bomb2 = createSprite(4950,605,2,2);
  bomb2.addImage(bImg);
  bomb2.scale = 0.05;
  bomb2.velocityX = -4;
  b2Group.add(bomb2);
  return bomb2;
  
  }

