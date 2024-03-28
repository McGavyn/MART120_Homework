function setup() {
  createCanvas(650, 700);
}

function draw() {
      background(120,45,78);
    textSize(18)
    text("I love Video Games", 350,80);

    // head
    fill(241,194,125);
    circle(250,100,175);
   
    // eyes
    strokeWeight(10);
    fill(0);
    point(220,75);
    point(285,75);
  
  //glasses
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

    // hair
    fill(150,75,0);
  ellipse(250,20,140,50)
    // body
    fill(10, 24, 120);
    rect(200,185,100,150);
    
    // decoration
   
    // right arm
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
    rect(270,395,15,10)
    
    fill(175);
    textSize(22);
    text("McGavyn Barnett",250,500 );



}