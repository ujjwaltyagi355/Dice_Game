/*For the First Dice*/
var randomNumber1=Math.floor(Math.random()*6) + 1;
var randomDiceImage="images/dice"+ randomNumber1+".png";
document.querySelectorAll("img")[0].setAttribute("src", randomDiceImage);


/*For the Sencond Dice*/
var randomNumber2=Math.floor(Math.random()*6) + 1;
var randomDiceImage="images/dice"+ randomNumber2+".png";
document.querySelectorAll("img")[1].setAttribute("src", randomDiceImage);
