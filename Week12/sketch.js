var x = 100;
var y = 100;
var Rx = 799;
var Oy = 599;
var mousex = 0;
var mousey = 0;
var Sqx = 799

function setup()
{
  createCanvas(800,600);
  keyPressed()   
}
function draw() 
{
background(123,28,38);
Bord();
Player();
mCircle();
Obst();
mRec();
mRound();
mSq();
Ex();
YouWin();
}


function Ex(){

  fill(200,1,300)
  rect(720, 0, 80, 40)
  rect(770, 40, 30, 60)
  fill(0)
  textSize(30)
  text('EXIT', 730, 27)
}

function Bord(){
  fill(90, 200, 120)
  rect(0,0,800,4)
  rect(0,0,4,600)
  rect(796,0,4,600)
  rect(0,596,800,4)
}

function Obst(){
fill(50, 190, 320)
  rect(Rx, 85, 15, 25)
  fill(120, 300, 10)
  circle(500, Oy, 42)
  fill(70, 85, 200)
  ellipse(Rx, Oy, 20, 42)
  fill(65, 189, 79)
  square(Sqx, 150, 25)

}

function Player(){
 fill(70, 190, 120)
  textSize(20);
  text('You', (x-15), (y-30));
  fill(200, 20, 130)
  circle(x,y,40);
}

function YouWin(){
if(x >= 750 & y <= 20)
    {
      fill(400);
      textSize(50);
      text('YOU WIN', 310, 300);
    }
  
  else if(x < 750 || y >= 20)
    {
      fill(123,28,38);
      textSize(50);
      text('YOU WIN', 350, 300);
    }
}

function  mCircle(){
         fill(50,87,90)
    circle(mousex, mousey, 30);
}


function mSq(){
  if(Sqx < 0)
    {
      Sqx = 799
    }
  else if(0 < Sqx < 800)
    {
      Sqx -= 5
    }
}

function mRound(){
  if(Oy > 0 & Oy < 600)
  {
    Oy-=5;
  }
  else
  {
    Oy = 599;
  }
}

function mRec(){
  if( Rx > 0 & Rx < 800)
  {
    Rx-=5;
  }
  else
  {
    Rx = 799;
  }
}


  function keyPressed(){
  if (key == 'd') 
  {
   x+=30
  } 
  else if (key == 'a') 
  {
    x-=30;
  }
  else if (key == 's')
    {
      y+=30;
    }
   else if (key == 'w')
    {
      y-=30;
    }
  }




   function mousePressed()
    {
        mousex = mouseX;
        mousey = mouseY;
    }