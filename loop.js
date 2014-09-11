function setup() {
  createCanvas(640, 480);
  background(128, 0, 64);
  noFill();

  stroke(255, 0, 0);

 for (var x = 1; x <=3; x++)
{
  ellipse(x * 100, 100, 50, 50);
}