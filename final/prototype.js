const player = {
    name: "Slugman",
    x: 0,
    y: 0,
    height: 50,
    width: 50,
    speed: 10,
};

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

function addPlayer() {
    ctx.fillStyle = "green";
    ctx.fillRect(player.x, player.y, player.width, player.height);
};

let rightPress = false;
let leftPress = false;
let downPress = false;
let upPress = false;
let jump = false; //idk if i put it here or in constructor 

function movePlayer() {
    if(rightPress && player.x < canvas.width- player.width) {
        player.x += player.speed;
    }
    if(leftPress && player.x > 0) {
        player.x -= player.speed;
    }
    if(downPress && player.y < canvas.height - player.height) {
    player.y += player.speed;
  }
  if(upPress && player.y > 0){
    player.y -= player.speed;
  }
}

function gameLoop(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  //  moveLeft();
    //moveRight();
    //moveDown();
    movePlayer();
    addPlayer();
    requestAnimationFrame(gameLoop);
}

document.addEventListener("keydown", (event) => {

  if (event.code === "ArrowRight") {
    rightPress = true;
  }
  if (event.code === "ArrowLeft") {
    leftPress = true;
  }
  if (event.code === "ArrowDown") {
    downPress = true;
  }
  if (event.code === "ArrowUp") {
    upPress = true;
  }
});

document.addEventListener("keyup", (event) => {
  if (event.code === "ArrowRight") {
    rightPress = false;
  }
  if (event.code === "ArrowLeft") {
    leftPress = false;
  }
  if (event.code === "ArrowDown") {
    downPress = false;
  }
   if (event.code === "ArrowUp") {
    upPress = false;
  }
});

requestAnimationFrame(gameLoop);