var font;
var textString;

function preload() {
	font = loadFont ("assets/font.ttf")
	textString = loadStrings ("assets/ether.txt")
};

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(0);
	loadtextString();
};

function draw() {
  background(0);
  textFont(myFont);
  writeText();  //function without an argument
  displaychar();
};