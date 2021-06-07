var balloon;
var database,position;
function setup(){
  createCanvas(1500,700);
  bg =loadImage("cityImage.png");
 balloonImage1=loadAnimation("hotairballoon1.png");
 balloonImage2=loadAnimation("hotairballoon1.png","hotairballoon1.png",
 "hotairballoon1.png","hotairballoon2.png","hotairballoon2.png",
 "hotairballoon2.png","hotairballoon3.png","hotairballoon3.png","hotairballoon3.png");
 balloon=createSprite(250,450,150,150);
   balloon.addAnimation("hotAirBalloon",balloonImage1);
   balloon.scale=0.5;
    database = firebase.database();
    var balloonPosition =database.ref('balloon/position');
    balloonPosition.on("value",readOp,showError)
}
    function draw(){
      background(bg);
      if(keyDown(LEFT_ARROW)){
          writePosition(-1,0);
      }
      else if(keyDown(RIGHT_ARROW)){
          writePosition(1,0);
      }
      else if(keyDown(UP_ARROW)){
          writePosition(0,-1);
      }
      else if(keyDown(DOWN_ARROW)){
          writePosition(0,+1);
      }
      drawSprites();
    }

    function writePosition(x,y){
      database.ref('balloon/position').set({
          x:balloon.x+x,
          y:balloon.y+y
  
      })
      balloon.x = balloon.x + x;
      balloon.y = balloon.y + y;
  }
  function readOp(data){
    position = data.val()
    balloon.x = position.x
    balloon.y = position.y
}
function showError(){
    console.log("error in writing database");
}

  

