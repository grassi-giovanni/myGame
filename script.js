//pezzi
var myGamePiece;

//Bordi
var myGameSide;
var myGameSide2;
var myGameSide3;
var myGameSide4;

//Ostacoli
var myObstacle;
var myObstacle2;
var myObstacle3;
var myObstacle4;
var myObstacle5;
var myObstacle6;
var myObstacle7;
var myObstacle8;

function startGame() {
    myGamePiece = new component(40, 20, "green", 150, 150);

    //Bordi
    myGameSide = new component(10, 1000, "red", 10, 10);
    myGameSide2 = new component(10, 1000, "red", 1490, 10);
    myGameSide3 = new component(1490, 10, "red", 10, 10);
    myGameSide4 = new component(1490, 10, "red", 10, 660);

    //Ostacoli
    myObstacle  = new component(10, 50, "blue", 300, 50);    
    myObstacle2  = new component(10, 200, "blue", 700, 350);
    myObstacle3  = new component(10, 200, "blue", 700, 150); 
    myObstacle4  = new component(10, 50, "blue", 300, 150);
    myObstacle5  = new component(10, 50, "blue", 300, 250);
    myObstacle6  = new component(10, 50, "blue", 300, 350);
    myObstacle7  = new component(10, 50, "blue", 300, 450);
    myObstacle8  = new component(10, 50, "blue", 300, 550);
       

    myGameArea.start();
}



var myGameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = 1510;
        this.canvas.height = 670;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.interval = setInterval(updateGameArea, 20);
        window.addEventListener('keydown', function (e) {
            myGameArea.key = e.keyCode;
        })
        window.addEventListener('keyup', function (e) {
            myGameArea.key = false;
        })
    }, 
    clear : function(){
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    },
    stop : function() {
        clearInterval(this.interval);
      }
}

   

function component(width, height, color, x, y) {
    this.width = width;
    this.height = height;
    this.speedX = 0;
    this.speedY = 0;
    this.x = x;
    this.y = y;    
    this.update = function() {
        ctx = myGameArea.context;
        ctx.fillStyle = color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
    this.newPos = function() {
        this.x += this.speedX;
        this.y += this.speedY;        
    }   
    this.crashWith = function(otherobj) {
        var myleft = this.x;
        var myright = this.x + (this.width);
        var mytop = this.y;
        var mybottom = this.y + (this.height);
        var otherleft = otherobj.x;
        var otherright = otherobj.x + (otherobj.width);
        var othertop = otherobj.y;
        var otherbottom = otherobj.y + (otherobj.height);
        var crash = true;
        if ((mybottom < othertop) ||
        (mytop > otherbottom) ||
        (myright < otherleft) ||
        (myleft > otherright)) {
          crash = false;
        }
        return crash;
      } 
}
hsp = 3;
function updateGameArea() {

    //Delimita i bordi della "mappa"
    if (myGamePiece.crashWith(myGameSide)){ myGamePiece.x += 3; }
    if (myGamePiece.crashWith(myGameSide2)){ myGamePiece.x -= 3; }
    if (myGamePiece.crashWith(myGameSide3)){ myGamePiece.y += 3; }
    if (myGamePiece.crashWith(myGameSide4)){ myGamePiece.y -= 3; }

    if (myGamePiece.crashWith(myObstacle)) {
      myGameArea.stop();
      alert("Refresh the page, you losed");
    } else {

        if (myGamePiece.crashWith(myObstacle2)){
            myGameArea.stop();
            alert("Refresh the page, you losed");
        } else {

            if (myGamePiece.crashWith(myObstacle3)){
                myGameArea.stop();
                alert("Refresh the page, you losed");
            } else {

                if (myGamePiece.crashWith(myObstacle4)){
                    myGameArea.stop();
                    alert("Refresh the page, you losed");

                }else {
                    if (myGamePiece.crashWith(myObstacle5)){
                        myGameArea.stop();
                        alert("Refresh the page, you losed");

                    }else{

                        if(myGamePiece.crashWith(myObstacle6)){
                            myGameArea.stop();
                            alert("Refresh the page, you losed");

                        }else {

                            if(myGamePiece.crashWith(myObstacle7)){
                                myGameArea.stop();
                                alert("Refresh the page, you losed");

                            }else {

                                if(myGamePiece.crashWith(myObstacle8)){
                                    myGameArea.stop();
                                    alert("Refresh the page, you losed");

                                }else{
                                    myGameArea.clear();
                                    myGamePiece.speedX = 0;
                                    myGamePiece.speedY = 0;    
                                    myGamePiece.speedX = hsp * ((myGameArea.key == 39) - (myGameArea.key == 37));
                                    myGamePiece.speedY = hsp * ((myGameArea.key == 40) - (myGameArea.key == 38));
                                    
                                
                                    myGamePiece.newPos();    
                                    myGamePiece.update();
                                
                                    //Carica i bordi
                                    myGameSide.update();
                                    myGameSide2.update();
                                    myGameSide3.update();
                                    myGameSide4.update();
                                
                                    //Carica gli ostacoli
                                    myObstacle.update();
                                    myObstacle2.update();
                                    myObstacle3.update();
                                    myObstacle4.update();
                                    myObstacle5.update();
                                    myObstacle6.update();
                                    myObstacle7.update();
                                    myObstacle8.update();
                                
                            
                    
                                    //Muovere gli ostacoli
                                     var muoviOstacoli = 1;
                    
                                    if (muoviOstacoli = 1){
                                       
                                        myObstacle2.y -= 2;
                                        myObstacle3.y += 2;
                    
                                        if (myObstacle2.y == 30 && myObstacle3.y == 470){
                                            
                                            myObstacle2.y += 320;
                                            myObstacle3.y -= 320;
                                        }
                                
                                    }
                                }
                            }
                        }
                    }
                }

               
                

            }

           
        }

       
    }
  }
    




  

   

 

