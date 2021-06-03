//Create variables here
var Dog,happyDog,database,foods,foodstock;
var dogIMG1, dogIMG2;
function preload()
{
  //load images here
  dogIMG1=loadImage("../images/dogImg.png");
  dogIMG2=loadImage("../images/dogImg1.png");
}

function setup() {
	createCanvas(500, 500);
  Dog = createSprite(250,250,50,50);
  Dog.addImage(dogIMG1);
  Dog.scale=0.5;
  database = firebase.database();
}


function draw() {  
  background(46,139,87);
  drawSprites();
  //add styles here
  food1 = new Food();
  food1.getFoodStock();
  food1.display();
  var Button1 = createButton("add food");
  Button1.position(100,100);
  Button1.mousePressed(function(){
    foods = foods+1;
    food1.updateFoodStock(foods);
  })
  var Button2 = createButton("feedDog");
  Button2.position(200,100);
  Button2.mousePressed(function(){
    foods = foods-1;
    food1.deductFood(foods);
  })
}