//pezzi
var myGamePiece;

//Bordi
var myGameSide;
var myGameSide2;
var myGameSide3;
var myGameSide4;
var myObstacle;

function startGame() {
    myGamePiece = new component(40, 20, "green", 150, 150);

    myGameSide = new component(10, 1000, "red", 10, 10);
    myGameSide2 = new component(10, 1000, "red", 1490, 10);
    myGameSide3 = new component(1490, 10, "red", 10, 10);
    myGameSide4 = new component(1490, 10, "red", 10, 660);

    myObstacle  = new component(10, 200, "green", 300, 120);    

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
}
hsp = 3;
function updateGameArea() {
    myGameArea.clear();
    myGamePiece.speedX = 0;
    myGamePiece.speedY = 0;    
    myGamePiece.speedX = hsp * ((myGameArea.key == 39) - (myGameArea.key == 37));
    myGamePiece.speedY = hsp * ((myGameArea.key == 40) - (myGameArea.key == 38));
    
    if (myGamePiece.x + hsp < myGameSide.x + myGameSide.width) {myGamePiece.speedX = 3; }

    myGamePiece.newPos();    
    myGamePiece.update();

    //Carica i bordi
    myGameSide.update();
    myGameSide2.update();
    myGameSide3.update();
    myGameSide4.update();

   
}
