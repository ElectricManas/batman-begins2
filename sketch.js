const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;
var maxdrops = 100;
var umbrella
var engine,world;
var drops = [];
var thunder 
var ran
var thunderframe=0

function preload(){
    thunder1 = loadImage("images/thunderbolt/1.png");
    thunder2 = loadImage("images/thunderbolt/2.png");
    thunder3 = loadImage("images/thunderbolt/3.png");
    thunder4 = loadImage("images/thunderbolt/4.png");
}

function setup(){
  createCanvas(600,700); 
    engine = Engine.create()
    world = engine.world;
    umbrella = new Umbrella(200,500);

    if (frameCount%150===0){

        for(var i=0; i<maxdrops; i++){
            drops.push(new Drop(random(0,400), random(0,400))); 
        }
    }
}

function draw(){

    Engine.update(engine);
    background ("black")

    for(var i=0; i<maxdrops;i++){
        drops[i].showDrop();
        drops[i].updateY();

    }
    umbrella.display();

    ran=Math.round(random(1,4));
    if (frameCount%80===0){
        thunderframe=frameCount;
        thunder = createSprite(random(10,370),random(10,20),10,10);
        switch(ran){
            case 1:thunder.addImage(thunder1);
            break;
            
            case 2:thunder.addImage(thunder2);
            break;

            case 3:thunder.addImage(thunder3);
            break;

            case 4 : thunder.addImage(thunder4);
            break;
            default:break;
        }
    }
    if(thunderframe+10===frameCount && thunder ){
        thunder.destroy();
    }
    drawSprites();
}   

