function rotatedRect(x, y, w, h, rotateangledegrees){
  fill(0);
   translate(x, y);
   rotate(radians(rotateangledegrees));
   rect(0,0,w,h);
   rotate(radians(-rotateangledegrees));
   translate(-x,-y);



}


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background("gold");
  
  // // rect(width / 2, height/2);

  // rorate(radians(20));
  // rect(0,0,100,100);

rotatedRect(width/2, height/2, 100,100,10);

fill("pink")
rect(100,200,60,100)

// rotatedRect(100, 200, 100,100,30)


  // rect(width / 2 - width / 40, height / 4 - width / 20, width / 20, height / 2 + width / 10);
  // rect(width / 2.5, height / 4 + height / 2, width - 2 * width / 2.5, width / 20);
  // rect(width / 2 - width / 20 - width / 40, height / 4 - width / 20, width / 20, width / 20);
}
