// declaring the constants for the game .
const World = Matter.World;
const Bodies = Matter.Bodies;
const Engine = Matter.Engine;

//variables for the game
var player;
var playerImg
var backgroundImg;

var ground;

var engine;
var world;

var background1;

var hill;

function preload(){
backgroundImg = loadImage("pictures/backgroundImg.jpg");
}

function setup(){

createCanvas(600,400);

engine = Engine.create();
world = engine.world;

ground = new Ground(200,390,800,20);
player = new Player(50,350);





}
function draw(){
background(backgroundImg);

ground.display();
player.display();

if(keyCode === 39){
player.body.position.x = player.body.position.x + 5; 
}
if(keyCode === 37){
player.body.position.x = player.body.position.x - 5
}


}