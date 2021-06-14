const Engine= Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var database;
var back_img;
var gameState =0;
var iss_image;
var iss;
var spaceShipI;
var spaceShipLeftI;
var spaceShipRightI;
var shipFrontI;
var test;
var docker;
var button;
var resetI,reset;
var form1;
var r;
var fuelC=1;
var fuel=100;
var restart;


function preload(){
  back_img = loadImage("spacebg.jpg");
  iss_image=loadImage("iss.png");
  spaceShipI=loadImage("spacecraft1.png");
  spaceShipLeftI=loadImage("spacecraft3.png");
  spaceShipRightI=loadImage("spacecraft4.png");
  shipFrontI=loadImage("spacecraft2.png");
  resetI=loadImage("reset.png");

}
function setup() {
  createCanvas(1000, 600);
  myEngine = Engine.create();
  myWorld= myEngine.world;
  database = firebase.database();
  iss = createSprite(500,300);
  iss.addImage(iss_image);
  iss.scale=0.85;

  r=Math.round(random(100,900));
  

  test = createSprite(r,500);
  test.addImage(spaceShipI);
  test.scale=0.25

  form1 = new Form();

 
  console.log(r);

  docker = createSprite(448,330,10,10);
  
 gameState = 0;
  
}

function draw() {
  background(back_img);


 if(gameState===0){
  test.visible=false;
  iss.visible=false;
  background(back_img);
  form1.display();
 }
 textSize(20);
 textFont("Algerian");
 stroke("red");
 text("FUEL LEFT: "+fuel+"%",830,50);

  
  if(gameState===1){
    test.visible=true;
    iss.visible=true;
    moveShip();
    vibrate();
    if(fuelC===1&&frameCount%8===0){
      fuel=fuel-2;
    }
   
     }

     if(fuel<=0){
       gameState=3;
       fuel1();
     }
     
  

  if(test.isTouching(docker)&&frameCount%100===0){
    gameState=2;
  }
  if(gameState===2){
  end();
  
  }
 
  iss.depth=iss.depth+1;
  docker.shapeColor="red";
  docker.visible=false;
  drawSprites();
  
}

function moveShip(){
  if(keyIsDown(38)){
    test.addImage(shipFrontI);
    test.y=test.y-5;
    fuelC=1;
  }
  if(keyIsDown(40)){
    test.addImage(spaceShipI);
    test.y=test.y;
    fuelC=0;
  }
  if(keyDown(37)){
    test.addImage(spaceShipLeftI);
    test.x=test.x+5;
    fuelC=1;
  }
  if(keyDown(39)){
    test.addImage(spaceShipRightI);
    test.x=test.x-5;
    fuelC=1;
  }

}
function vibrate(){
  if(frameCount%15===0){
  test.x=test.x-4;
  }
  if(frameCount%25===0){
    test.x=test.x+3;
    }
  if(frameCount%35===0){
      test.x=test.x+4;
      }
  if(frameCount%45===0){
        test.y=test.y+4;
        }
  if(frameCount%45===0){
      test.y=test.y-4;
          }
}
function end(){
  test.visible=false;
  iss.visible=false;
  background("white");
  textSize(35);
  textFont("Algerian");
  text("Docked Succesfully",350,250);
  form1.hide();
  
  }

  

function fuel1(){
  test.visible=false;
  iss.visible=false;
  background("white");
  textSize(35);
  textFont("Algerian");
  text("OUT OF FUEL!!",350,250);
  form1.hide();
}