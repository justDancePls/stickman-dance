var canvas = document.getElementById("canvas");
context = canvas.getContext("2d"); // get Canvas Context object
let timestamp = Date.now();
let shakeLegs = false;
let shakeHips = false;
let wave = false;
let dance = false;

function clickEvent () {
  dance = true;
  let audio = document.getElementById("audio");
  let title = document.getElementById("title");
  if (dance) {
    draw();
    audio.play();
    title.innerHTML = 'Dance!!'
  } else {
    drawStandingMan();
    audio.pause();
  }
}

if (dance) {
  draw();
} else {
  drawStandingMan()
}


function drawStandingMan() {
  if(Date.now() < (timestamp+900)) return requestAnimationFrame(drawStandingMan);
  
  context.clearRect(0, 0, window.innerWidth, window.innerHeight);
  context.beginPath();
  context.fillStyle = "black"; // #000000
  context.arc(200, 50, 30, 0, Math.PI * 2, true);
  context.fill(); //fill the circle  
  
  context.beginPath(); 
  context.lineWidth = 6;
  context.stroke();
  
  //body
  context.beginPath();
  context.moveTo(200, 80);
  context.lineTo(200, 180);
  context.strokeStyle = "black";
  context.stroke();
  
  //arms
  context.beginPath();
  context.strokeStyle = "black";
  context.moveTo(200, 100);
  context.lineTo(150, 130);
  if(wave) { 
  context.moveTo(200, 100);
  context.lineTo(250, 130);
  wave = false;
  }
  else {
  context.moveTo(200, 100);
  context.lineTo(250, 70);
  wave = true;
  }
  context.stroke();
  
  //legs
  context.beginPath();
  context.strokeStyle = "black";
  context.moveTo(200, 180);
  context.lineTo(150, 280);
  context.moveTo(200, 180);
  context.lineTo(250, 280);
  context.stroke();
  timestamp = Date.now();
  requestAnimationFrame(drawStandingMan);
  }

function draw() {
  if (Date.now() < timestamp + 600) return requestAnimationFrame(draw);

  context.clearRect(0, 0, window.innerWidth, window.innerHeight);
  context.beginPath();
  context.fillStyle = "black"; // #000000
  context.arc(200, 50, 30, 0, Math.PI * 2, true);
  context.fill(); //fill the circle

  context.beginPath();
  context.lineWidth = 6;
  context.stroke();

  //body
  context.beginPath();
  context.moveTo(200, 80);
  context.lineTo(180, 150);
  context.strokeStyle = "black";
  context.stroke();

  //arms
  context.beginPath();
  context.moveTo(195, 100);
  context.lineTo(220, 130);
  context.moveTo(195, 100);
  context.lineTo(160, 120);
  context.strokeStyle = "black";
  context.stroke();

  //hips
  context.beginPath();
  context.fillStyle = "black"; // #000000
  if ( shakeHips) {
    context.arc(195, 150, 20, 0, Math.PI * 2, true);
    context.arc(175, 150, 20, 0, Math.PI * 2, true);
    shakeHips = false;
  } else {
    context.arc(195, 160, 20, 0, Math.PI * 2, true);
    context.arc(175, 160, 20, 0, Math.PI * 2, true);
    shakeHips = true;
  }

  context.fill(); //fill the circle

  //legs
  context.beginPath();
  context.strokeStyle = "black";
  if (shakeLegs) {
    //left leg
  context.moveTo(170, 160);
  context.lineTo(140, 170);
  context.moveTo(140, 170);
  context.lineTo(110, 200);
  //right leg
  context.moveTo(210, 160);
  context.lineTo(230, 170);
  context.moveTo(230, 170);
  context.lineTo(250, 200);
  shakeLegs = false;
  } else {
   //left leg
   context.moveTo(160, 170);
   context.lineTo(140, 170);
   context.moveTo(140, 170);
   context.lineTo(110, 200);
   //right leg
   context.moveTo(200, 170);
   context.lineTo(230, 170);
   context.moveTo(230, 170);
   context.lineTo(250, 200);
  shakeLegs = true;
  }
  context.stroke();
  timestamp = Date.now();
  requestAnimationFrame(draw);
}
