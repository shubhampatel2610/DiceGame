// PLAYER 1
var randomNum1 = Math.floor(Math.random() * 6) + 1;
var randomImg1 = "images/" + "dice" + randomNum1 + ".png";
document.querySelector(".img1").setAttribute("src", randomImg1);

// PLAYER 2
var randomNum2 = Math.floor(Math.random() * 6) + 1;
var randomImg2 = "images/" + "dice" + randomNum2 + ".png";
document.querySelector(".img2").setAttribute("src", randomImg2);

// WINNER
if (randomNum1 > randomNum2) {
    document.querySelector("h1").innerHTML = "PLAYER 1 is winner";
} else if (randomNum1 < randomNum2) {
    document.querySelector("h1").innerHTML = "PLAYER 2 is winner";
} else {
    document.querySelector("h1").innerHTML = "No one wins. Refresh again.";
}