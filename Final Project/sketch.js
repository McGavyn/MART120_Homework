var Px = 100;
var Py = 100;
var Rx = 799;
var Oy = 599;
var GOy = 599
var x = 50
var Sqx = 799
var diff = 0
var points = 0
var gpoints = 1
var bpoints = 1
var myXs = [];
var myYs = [];
var myDiameters = [];
var mySizes = [];
var mybXs = []
var mybYs = []
var mybSizes = []
var mybDiameters = []
var col = 0

function setup()
{
createCanvas(800,600);
 
ArshapeSet();  
}
function draw() 
{
diffic(); 
Move();
background(123,28,38);
Bord();
Gshapes();
Bshapes();
Sc();  
Player();
Obst();
mRec();
mRound();
mSq();
Ex();
YouWin();
}


function diffic(){

  if(points < 0){
   bpoints = 0
   gpoints = 5
  }
  else if(0 <= points && points < 30)
  {
    bpoints = 1
    gpoints = 1
  }
  
  else if(30 <= points && points < 60)
  {
    bpoints = 1.5
    gpoints = 0.75
  }
  
  else if(60 <= points && points < 90)
  {
   bpoints = 2
    gpoints = 0.5
  }
  
  else if(90 <= points && points < 100)
  {
    bpoints = 3
    gpoints = 0.25
  }
 
 
  else if(points >= 100){
    bpoints = 4
    gpoints = 0
  }
 
}
// for both good and bad shapes, add in if/then statements to make them more difficult over time (tie it to the score?)
function ArshapeSet()
{
gsh = 25
bsh = 10

        for(var i = 0; i < gsh; i++)
        {
            // get all the random numbers to create Gshapes
            myXs[i] = getRandomNumber(799);
            myYs[i] = getRandomNumber(599);
            myDiameters[i] = 10
            mySizes[i] = 10
        }
  
          for( i = 0; i < bsh; i++)
        {
            // get all the random numbers to create Bshapes
            mybXs[i] = getRandomNumber(799);
            mybYs[i] = getRandomNumber(599);
            mybDiameters[i] = 10
            mybSizes[i] = 15
        }
}

//the good shapes that give points
function Gshapes()
{
  for(var i = 0; i < myXs.length; i++)
  {
        fill(getRandomNumber(300), getRandomNumber(250),getRandomNumber(99))
        circle(myXs[i], myYs[i], myDiameters[i]);
        
    if(myYs[i] > 0 & myYs[i] < 600)
    {
    myYs[i]-=2;
    }
        
    else
      {
    myYs[i] = getRandomNumber(599)
      } 

    if (dist(Px, Py, myXs[i], myYs[i]) < myDiameters[i]) {
            points += gpoints;
    }
  // add something to earn points on contact
}
}
//the bad shapes that take points 
function Bshapes(){
  for(var i = 0; i < mybXs.length; i++)
  {
        fill(0)
        square(mybXs[i], mybYs[i], mybSizes[i]);
        
    if(mybXs[i] > 0 & mybXs[i] < 800)
    {

    mybXs[i]-=2;
    }
        
    else
      {
    mybXs[i] = getRandomNumber(599)
      } 
       if(mybYs[i] > 0 & mybYs[i] < 600)
    {
    mybYs[i]-=2;
    }
       else
      {
    mybYs[i] = getRandomNumber(599)
      } 
    
    
   // Fix this- lose points on contact  
   if (dist(Px, Py, mybXs[i], mybYs[i]) < mybSizes[i]) {
            points -= bpoints;
    }

    
  }
  

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
  text('You', (Px-10), (Py-10));
  fill(200, 20, 130)
  square(Px,Py,30);
  square((Px-7),(Py+10),10);
  square((Px+30),(Py+10),10);
  rect((Px-2),(Py+27),5,7);
  rect((Px+25),(Py+27),5,7);
  fill(120,70,180);
  circle(Px+10,Py+7,5);
  circle(Px+17,Py+7,5);
}

function Sc(){
  fill(100,170,45);
  textSize(30);
  text(points, 400,50);
  
}

function YouWin(){
if(Px >= 750 & Py <= 20)
    {
      fill(400);
      textSize(50);
      text('YOU WIN', 310, 300);
    }
  
  else if(Px < 750 || Py >= 20)
    {
      fill(123,28,38);
      textSize(50);
      text('YOU WIN', 350, 300);
    }
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

function getRandomNumber(number)
{
    return Math.floor(Math.random()*number)+10;
}

  function Move(){
    
if(keyIsDown(68))
  {
      Px+=5
  }
if(keyIsDown(65)){
  Px-=5
}

if(keyIsDown(87)){
  Py-=5
}
    
if(keyIsDown(83)){
  Py+=5
}

}