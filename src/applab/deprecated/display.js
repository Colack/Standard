var i = 0;

// Information //
function info() {
  
  console.log("Display.js Library");
  console.log("Code By Jack");
  
}

// Draw an Circle //
function drawCircle() {
  
  penUp();
  
  dot(50);
  
}

// Draw an Small circle //
function drawSmallCircle() {
  
  penUp();
  
  dot(10);
  
}

// Draw an Big circle //
function drawBigCircle() {
  
  penUp();
  
  dot(100);
  
}

// Draw an small square //
function drawSmallSquare() {
  
  penDown();
  
  moveForward(25);
  
  turnRight(90);
  
  moveForward(25);
  
  turnRight(90);
  
  moveForward(25);
  
  turnRight(90);
  
  moveForward(25);
  
}

// Draw an big square
function drawBigSquare() {
  
  penDown();
  
  moveForward(100);
  
  turnRight(90);
  
  moveForward(100);
  
  turnRight(90);
  
  moveForward(100);
  
  turnRight(90);
  
  moveForward(100);
  
}

// Draw an Square //
function drawSquare() {
  
  penDown();
  
  moveForward(50);
  
  turnRight(90);
  
  moveForward(50);
  
  turnRight(90);
  
  moveForward(50);
  
  turnRight(90);
  
  moveForward(50);
  
}

// Draw an Triangle //
function drawTriangle() {
  
  penDown();
  
  turnRight(90);
  
  moveForward(100);
  
  turnLeft(135);
  
  moveForward(75);
  
  turnLeft(45);
  
  moveForward(75);
  
}

// Show an image //
function imageShow(URL) {
  
  image("Image", URL);
  setPosition("Image", 75, 150, 200, 200);
  
}

// Set Background Color to Different Values //
function rgbFun(color1, color2, color3, screenName) {
  
  setProperty(screenName, "background-color", rgb(color1, color2, color3));
  
}

// Make an image //
function createImage(imageName) {
  
  image(imageName, "icon://fa-comment");
  
}

// Shuffle Images //
function imageShuffle(imageName) {
  
  var images = [
    "icon://fa-music",
    "icon://fa-headphones",
    "icon://fa-volume-off",
    "icon://fa-hdd-o",
    "icon://fa-clock-o"
 ];
 
  var random = randomNumber(1, images.length - 1);
  
  setProperty(imageName, "image", images[random]);
  
  setTimeout(imageShuffle(imageName), 100);
  
}

// Matrix in the Console //
function matrix() {

  var chars = "- _ + = { } [ ] | ; : ' < > , . / ? 1 2 3 4 5 6 7 8 9 0 ! @ # $ % ^ & * ( ) a b c d e f g h i j k l m n o p q r s t u v w x y z A B C D E F G H I J K L M N O P Q R ST U V W X Y Z ";
  var length = 50;
  var put = "";
  
  for (var i = 0; i <= length; i++) {
    
   var randomNumber = Math.floor(Math.random() * chars.length);
   
   put += chars.substring(randomNumber, randomNumber +1);
   
  }
  
  console.log(put);
  
  setTimeout(matrix, 1);
  
  
} 
