//variables to be called later
var x = 60
var y = 70
var x1 = 20
var y1 = 20
var diameter = 22
var xmovement;
var ymovement;
// diagnol shape
var x1movement;
var y1movement; 
// text size Change
var Ctex = 22
var texM = 4
//set up

function setup() {
  createCanvas(650, 700);
    xmovement = floor(random() * 10) + 1;
    ymovement = floor(random() * 10) + 1;
    x1movement = floor(random() * 10) + 1;
    y1movement = floor(random() * 10) + 1;
}

// main image of me

function draw() {
    background(120,45,78);
    fill(173, 216, 230)
    textSize(18);
    text("I love Video Games", 350,80);

    // head
    strokeWeight(5);
    fill(241,194,125);
    circle(250,100,175);
   
    // eyes
    strokeWeight(2);
    fill(173, 216, 230);
    circle(220,75,10);
    circle(285,75,10);
  

  //glasses
   strokeWeight(10);
  fill(0);
 line(205,85,205,65);
  
  line(205,90,235,90);
  
  line(205,60,235,60);
  
  line(235,60,235,90);
  
  line(235,75,265,75);
  
  line(270,85,270,65);
  
  line(270,60,300,60);
  
  line(300,60,300,85);
  
  line(300,90,270,90);
  


    // nose
  
  triangle(255, 110, 250, 100, 260, 100);
    
    // mouth
    ellipse(255, 135, 20,1);
    line(245,135,240,130);
    line(265,135,270,130);
  
  //dimples
    point(225,125);
    point(285,125);
  

    // hair
    fill(150,75,0);
  ellipse(250,20,140,50);
    // body
    fill(128,128,128);
    rect(200,185,100,150);
    
    // decoration
    strokeWeight(2);
    fill(225);
    circle(250,205,10);
    circle(250,220,10);
    circle(250,235,10);
    circle(250,250,10);
    circle(250,265,10);
    circle(250,280,10);
    circle(250,295,10);
    circle(250,310,10);
    fill(128,128,128);
    ellipse(225,220,25,12);
   
    // right arm
    strokeWeight(10);
    rect(300,195,50,10);
    line(350,200,300,265);
    circle(300,265,10);
    // left arm
    rect(150,195,50,10);
    line(150,195,200,265);
    circle(200,265,10);
    // left leg
    rect(200,335,10,70);
    fill(0);
    rect(175,395,15,10);
  
  
    // right leg
    rect(290,335,10,70);
    rect(270,395,15,10);
  
    // title
    fill(175);
    textSize(Ctex);
    text("McGavyn Barnett",250,500 );
     if(Ctex >= 42 || Ctex <= 2)
    {
   texM*=-1
    }
  Ctex+=texM;
  

// moving shapes x-axis, width is 650
  strokeWeight(4);
  fill(50,80,200);
  circle(x,70,diameter);
  fill(75,90,100);
  circle(x,270,diameter)
  if(x >= 650 || x <= 0)
    {
   xmovement*=-1
    }
  x+=xmovement;
// moving shapes y-axis, height is 700
  strokeWeight(3);
  fill(200,30,100);
  square(20,y,25)
  square(600,y,25)
    if(y >= 700 || y <= 0)
    {
   ymovement*=-1
    }
  y+=ymovement;
  
// moving one shape diagnonaly
  strokeWeight(5);
  fill(220,10,300);
  rect(x1,y1,20,27)
   if(y1 >= 700 || y1 <= 0)
    {
   y1movement*=-1
    }
  y1+=y1movement;
  
  if(x1 >= 650 || x1 <= 0)
    {
   x1movement*=-1
    }
  x1+=x1movement;
  
  
  
}
