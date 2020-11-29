const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3, box4, box5, box6;
var ball;
var rope;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,height,1200,20);
    
    box1 = new Box(600,380,150,100);
    box2 = new Box(600,280,150,100);
    box3 = new Box(600,180,150,100);

    box4 = new Box(750,380,150,100);
    box5 = new Box(750,280,150,100);
    //box6 = new Box(750,100,150,100);

    ball = new Ball(300,280,80,80);

    rope = new Rope(ball.body,{x:300, y:150});
}

function draw(){
    background("yellow");    
    
    Engine.update(engine);

    ground.display();

    box1.display();
    box2.display();
    box3.display();

    box4.display();
    box5.display();
    //box6.dispaly();

    rope.display();

    ball.display();
}

function mouseDragged(){
    Matter.Body.setPosition(ball.body, {x:mouseX, y:mouseY});
}
