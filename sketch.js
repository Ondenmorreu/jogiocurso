const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine, world;

var background1Img;
var bg1;
var wall1, wall2, wall3, wall4;
var enemy1, enemy2;
var portal1Img, portal1;

function preload(){
  background1Img=loadImage("BG1.jpg");
  portal1Img=loadImage("portalgame2.png");

}

function setup() {
 createCanvas(1000, 700);
 rectMode(CENTER);
 engine = Engine.create();
	world = engine.world;
  
  //adicionando a imagem de fundo
  bg1=createSprite(500, 350, 20, 20);
  bg1.addImage(background1Img);
  bg1.scale=1.1;

  portal1=createSprite(900, 90);
  portal1.addImage(portal1Img);
  portal1.scale=0.5;

  wall1=createSprite(200, 0, 15, 1050);
  wall1.shapeColor="black";
  wall2=createSprite(800, 475, 500, 15);
  wall2.shapeColor="black";
  wall3=createSprite(850, 200, 300, 15);
  wall3.shapeColor="black";

  enemy1=createSprite(350, 500, 15, 200);
  enemy1.shapeColor="red";
  
  enemy2=createSprite(400, 400, 15, 200);
  enemy2.shapeColor="red";

  
}

function draw() {
  background(0); 
  




  drawSprites();

}
