var font;
var textstring;

function preload() {
	font = loadFont ("assets/font.ttf")
	textstring = loadStrings ("assets/ether.txt")
};

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(0);
	loadStrings(textstring, 0, 0);
};

function draw() {
  background(0);
  textFont(font);
  writeText();  //function without an argument
  displaychar();
};
