var dog,sadDog,happyDog;
var database;
var button,button2;
var foods = [];
var foodCount,foodObj;
var button,button2;
var lastFeed;

function preload(){
  sadDog=loadImage("Dog.png");
  happyDog=loadImage("happy dog.png");
}

function setup() {
  database = firebase.database();

  createCanvas(1000,400);
  
  dog=createSprite(800,200,150,150);
  dog.addImage(sadDog);
  dog.scale=0.15;

  button = createButton("Feed Food");
  button.position(700,100);
  button.mousePressed(feedDog);

  button2 = createButton("Add Food");
  button2.position(600,100);
  button2.mousePressed(addFoods);
}

function draw() {
  background(46,139,87);

  fill("red");
  text(mouseX + "," + mouseY,700,200);

 // getTime();

  drawSprites();
}

//function to read food Stock


//function to update food stock and last fed time


//function to add food in stock

function addFoods() {
   foodCount++
    database.ref("/").update({
        foodCount:foodCount
    });
}

function feedDog() {
   dog.addImage(happyDog);
   if(lastFeed>12) {
    fill("red");
    textSize(30);
    text("Last Feed: " + lastFeed + "P.M.",200,200);
  }else {
    text("Last Feed: " + lastFeed + "A.M.",200,30);
  }

  getTime();
}

async function getTime() {
    var time = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var timeJSON = await time.json();
    var dateTime = timeJSON.datetime;
    //console.log(dateTime);
    var hour = dateTime.slice(11,13);
    

    if(hour>12) {
       lastFeed = hour-12;
      //text("Last Feed: " + lastFeed + "P.M.",200,30);
    }else {
      lastFeed = hour;
      //text("Last Feed: " + lastFeed + "A.M.",200,30);
    }
    console.log(lastFeed);
}