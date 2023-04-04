
function mainFunction(){
var randomNum = Math.floor((Math.random()*6)+1);
var randomNum2 = Math.floor((Math.random()*6)+1);

if (randomNum > randomNum2){
    document.querySelector("h1").innerHTML="🚩 Player 1 Wins";
}
else if (randomNum < randomNum2){
  document.querySelector("h1").innerHTML="Player 2 Wins 🚩";
}
else {
  document.querySelector("h1").innerHTML="Draw!";
}

if (randomNum == 1){
  document.querySelector("img.img1").src="images/1.png";
}
else if (randomNum == 2){
  document.querySelector("img.img1").src="images/2.png";
}
else if (randomNum == 3){
  document.querySelector("img.img1").src="images/3.png";
}

}

if (randomNum2 == 1){
  document.querySelector("img.img2").src="images/1.png";
}
else if (randomNum2 == 2){
  document.querySelector("img.img2").src="images/2.png";
}
else if (randomNum2 == 3){
  document.querySelector("img.img2").src="images/3.png";
}

}

}