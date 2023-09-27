function setup() {
  createCanvas(windowWidth, windowHeight);
  background("gold")
  fill(0);
}

function draw() {
  
  rect(200, 200, 200, 200);



}

function mouseClicked(){
  fill 
  fill(
    random(100, 256),
    random(0,256),
    random(0,256)); //等于在一行
    rect(mouseX, mouseY, 80, 80);
  //save image: 
  
    function keyPressed(){
      if (key == 's'){
        saveCanvas('myCanvas', 'png');
      }


    }
keyPressed()

}