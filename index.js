var randomNumber1 = Math.floor((Math.random() * 6) +1 );
var image = "images/dice" + randomNumber1+".png";
var source = document.querySelector('img');
source.src = image;

var randomNumber2 = Math.floor((Math.random() * 6) +1 );
var image2 = "images/dice" + randomNumber2+".png";
document.querySelectorAll('img')[1].src = image2;


if(randomNumber1 > randomNumber2){
    document.querySelector('h1').innerHTML = "PLAYER 1 WINS"
}

else if (randomNumber1 === randomNumber2){
    document.querySelector('h1').innerHTML = "DRAW"
}

else{
    document.querySelector('h1').innerHTML = "PLAYER 2 WINS"
}
