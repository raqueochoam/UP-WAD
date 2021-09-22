var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomImage = "images/dice" + randomNumber1 + ".png";

console.log(randomImage)

document.querySelector(".img1").setAttribute("src",randomImage)

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomImage2 = "images/dice" + randomNumber2 + ".png";
document.querySelector(".img2").setAttribute("src",randomImage2)

if (randomNumber1 > randomNumber2){
    document.querySelector(".Winner").innerHTML="Player 1 is the winner"
}

else if(randomNumber2 > randomNumber1){
    document.querySelector(".Winner").innerHTML="Player 2 is the winner"
}

else{
    document.querySelector(".Winner").innerHTML="Tie"
}
