function setup() {
  createCanvas(windowWidth, windowHeight);
  background("green");
  fill(0);
  
}




function draw() {
  background("green")
  let secondsNow = second()


  //map function = map from a range to another range  
  // 0 -> 100 / 59 -> height
  let myDiameter = map(secondsNow, 0, 59, 100, height)
  ellipse(width/2, height/2, myDiameter, myDiameter)
  // each second by 1 pixel by default



}
