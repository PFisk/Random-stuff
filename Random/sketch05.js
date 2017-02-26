var v = 0;
var c = 0;
//var t;
function setup() {
  console.log("Hi")
  createCanvas(820, 600);
  background(10);
  frameRate(60);
  //colorMode(HSB);
}
// function draw() {
// for (var v = 0; v < 750; v = v + 1); {
//     fill(10, 80);
//     rect(0, 0, width, height);
// }

function draw() {

  push();
    fill(255, 255, 255, 30);
    ellipse(width/2, height/2, 160, 160);
    fill(10, 10, 10);
    ellipse(width/2, height/2, 140, 140);
  pop();
     // if (v >= 30) {
      fill(10, 80);
      rect(0, 0, width, height);
     //}
     // v = v + 1;

    

  push();
  // var R = random(0, 0);
  // var G = random(50, 120);
  // var B = random(200, 255);
// t=200;
// if (t >= 255)  t=0;  else  t++;
colorMode(HSB);
 if (c >= 255)  c=0;  else  c++;
    translate(width/2, height/2);
    var cir = 360/60*(frameCount%60);
    rotate(-radians(cir));
    noStroke();
    fill(c * 1.5, 255, 255);
    ellipse(0, 200, 50, 10);
      
  pop();

    push();
colorMode(HSB);
 if (c >= 255)  c=0;  else  c++;
    translate(width/2, height/2);
    var cir = 360/60*(frameCount%60);
    rotate(0.05*PI-radians(cir));
    noStroke();
    fill(c * 1.5, 255, 255);
    ellipse(0, 190, 50, 10);

  pop();

      push();
colorMode(HSB);
 if (c >= 255)  c=0;  else  c++;
    translate(width/2, height/2);
    var cir = 360/60*(frameCount%60);
    rotate(0.1*PI-radians(cir));
    noStroke();
    fill(c * 1.5, 255, 255);
    ellipse(0, 180, 50, 10);

  pop();

    push();
colorMode(HSB);
 if (c >= 255)  c=0;  else  c++;
    translate(width/2, height/2);
    var cir = 360/60*(frameCount%60);
    rotate(PI/2+radians(cir));
    noStroke();
    fill(c * 1.5, 255, 255);
    ellipse(0, 75, 25, 10);

  pop();

      push();
colorMode(HSB);
 if (c >= 255)  c=0;  else  c++;
    translate(width/2, height/2);
    var cir = 360/60*(frameCount%60);
    rotate(+radians(cir));
    noStroke();
    fill(c * 1.5, 255, 255);
    ellipse(0, 75, 25, 10);

  pop();

        push();
colorMode(HSB);
 if (c >= 255)  c=0;  else  c++;
    translate(width/2, height/2);
    var cir = 360/60*(frameCount%60);
    rotate(PI+radians(cir));
    noStroke();
    fill(c * 1.5, 255, 255);
    ellipse(0, 75, 25, 10);

  pop();

        push();
colorMode(HSB);
 if (c >= 255)  c=0;  else  c++;
    translate(width/2, height/2);
    var cir = 360/60*(frameCount%60);
    rotate(PI*1.5+radians(cir));
    noStroke();
    fill(c * 1.5, 255, 255);
    ellipse(0, 75, 25, 10);

  pop();
}