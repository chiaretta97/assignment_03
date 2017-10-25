function setup() {
 colorMode(HSB)
 
  createCanvas(500,500);
  background(225,0,0); 
 
  }

function draw() {
 

 
  for(var x=-10; x<600; x+=20) {
   
   for(var y=-150; y<600; y+=30)

  {
 
var customHue = noise(x)* 80;
var customS = noise(y)* 255;
   
   fill(random(customHue),(customS), 255);


 quad(x, y, x+10, y+20, x+0, y+80, x-20, y+90);
}
  }
}