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

function preload(){

  backgroundImage = loadImage("https://images.unsplash.com/photo-1593476366803-cff071151082?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Zmxvd2VyJTIwZmllbGR8ZW58MHx8MHx8fDA%3D")

 
}

function setup(){
createCanvas(800,600);

ArshapeSet();  
}

function draw() 
{
background(backgroundImage)  
diffic(); 
Move();
Bord();
Vic();  
Gshapes();
Bshapes();
Sc();  
Player();
Ex();
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
  var re = 20
  var bl = 80
  var gr = 195
  
  for(var i = 0; i < myXs.length; i++)
  {
    
    if(re >= 500 || bl >= 500 || gr >= 500){
      re = getRandomNumber(400)
      bl = getRandomNumber(500)
      gr = getRandomNumber(300)
       }
    else{
      re+=10
      bl+=7
      gr+=6
    }
        fill(re, bl, gr)
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
if(points < 100){
fill(100,170,45);
textSize(30);
text('Get 100 points!', 340, 570);
}

else{
fill(220,170,155);
textSize(30);
text('Reach the exit!', 340, 570);
  fill(200,1,300);
  rect(390, 260, 10, 40);
  rect(440, 260, 10, 40);
  rect(390,250,60,10);
  fill(0)
  square(400,260,40);
  fill(0);
  textSize(30);
  text('EXIT', 390, 250);
}
  }

function Vic(){
if(points >= 100 && Px >= 390 && Px <= 440 && Py >= 260 && Py <= 300){
  bpoints = 0
  fill(75,208,38);
  textSize(40);
  text('YOU WIN!', 335, 200);
  
}
  
  
}


function Bord(){
  fill(90, 200, 120)
  rect(0,0,800,4)
  rect(0,0,4,600)
  rect(796,0,4,600)
  rect(0,596,800,4)
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