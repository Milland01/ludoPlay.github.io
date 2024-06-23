//how the dice keep changing

//player 1
var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6

var randomDiceimage = "dice" + randomNumber1 + ".png"; // dice1.png - dice6.png

var randomImageSource = "images/" + randomDiceimage; // images/dice1-images/dice6

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src" , randomImageSource);


//player 2
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

var image2 =document.querySelectorAll("img")[1].setAttribute("src" , randomImageSource2);


//if player 1 or player 2 wines

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🏆 Player 1 wines";
}
else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "🥇 player 2 Wines";
}
else {
  document.querySelector("h1").innerHTML = "!!! Draw 🚩🤝 ";
}
