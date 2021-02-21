/*For the First Dice*/
var randomNumber1=Math.floor(Math.random()*6) + 1;
if(randomNumber1>=1 && randomNumber1<2)
          Document.querySelector(".img1").setAttribute("href","images\dice1.png");
else if(randomNumber1>=2 && randomNumber1<3)
          Document.querySelector(".img1").setAttribute("href","images\dice2.png");
else if(randomNumber1>=3 && randomNumber1<4)
          Document.querySelector(".img1").setAttribute("href","images\dice3.png");
else if(randomNumber1>=4 && randomNumber1<5)
          Document.querySelector(".img1").setAttribute("href","images\dice4.png");
else if(randomNumber1>=5 && randomNumber1<6)
          Document.querySelector(".img1").setAttribute("href","images\dice5.png");
else
          Document.querySelector(".img1").setAttribute("href","images\dice6.png");
