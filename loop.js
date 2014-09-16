function setup() {
  createCanvas(640, 480);
  
  noFill();

  stroke(150, 0, 0);

}

function draw () {

   background(128, 0, 264);

for (var x = 1; x <= 7; x++)
{
  ellipse(x * 80, x * 40 + 50, x+50, x*30);
}

var size =    Math.abs(mouseX - 320);

ellipse(320, 240, mouseX, mouseY);

}