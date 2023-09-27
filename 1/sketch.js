function setup() {
  createCanvas(windowWidth, windowHeight);
  background("green");
  fill(0);
}

//update function for animation making



let xPos = 0
let xVelocity = 5

function draw() {
  background("green")
  ellipse(xPos,50,50,50);
  xPos += xVelocity
  if(xPos > width){
    xVelocity = -5

  }

  if (xPos < 0){
    xVelocity = 5
  }




  // xPos = xPos +2; 
 






}
