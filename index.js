/*For the First Dice*/
var randomNumber1=Math.floor(Math.random()*6) + 1;
var randomDiceImage="images/dice"+ randomNumber1+".png";
document.querySelectorAll("img")[0].setAttribute("src", randomDiceImage);


/*For the Sencond Dice*/
var randomNumber2=Math.floor(Math.random()*6) + 1;
var randomDiceImage="images/dice"+ randomNumber2+".png";
document.querySelectorAll("img")[1].setAttribute("src", randomDiceImage);

/*Selecting A Winner*/

/*If Player A Wins*/
if(randomNumber1 > randomNumber2){
  document.querySelector(".container h1").innerHTML="🥳 Player 1 Wins!!";
}

/*If Player 2 Wins*/
else if(randomNumber1 < randomNumber2){
  document.querySelector(".container h1").innerHTML="Player 2 Wins!! 🥳";
}

/*If It's a Draw*/
else{
  document.querySelector(".container h1").innerHTML="It's A Draw!";
}
