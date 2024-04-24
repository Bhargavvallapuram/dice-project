function throwDice() {
    var value1 = Math.floor(Math.random() * 6) + 1;
    var value2 = Math.floor(Math.random() * 6) + 1;
    var d1 = document.getElementsByClassName("player1_dice")[0];
    var d2 = document.getElementsByClassName("player2_dice")[0];
    if (value1 == 1) {
        d1.setAttribute("src", "dice1.png");
    } else if (value1 == 2) {
        d1.setAttribute("src", "dice2.png");
    } else if (value1 == 3) {
        d1.setAttribute("src", "dice3.png");
    } else if (value1 == 4) {
        d1.setAttribute("src", "dice4.png");
    } else if (value1 == 5) {
        d1.setAttribute("src", "dice5.png");
    } else {
        d1.setAttribute("src", "dice6.png");
    }
    if (value2 == 1) {
        d2.setAttribute("src", "dice1.png");
    } else if (value2 == 2) {
        d2.setAttribute("src", "dice2.png");
    } else if (value2 == 3) {
        d2.setAttribute("src", "dice3.png");
    } else if (value2 == 4) {
        d2.setAttribute("src", "dice4.png");
    } else if (value2 == 5) {
        d2.setAttribute("src", "dice5.png");
    } else {
        d2.setAttribute("src", "dice6.png");
    }
    if (value1<value2)
    {
       document.getElementsByClassName("result")[0].innerHTML="player 2 is win the game" ;
    }
    else if(value1==value2)
    {
        document.getElementsByClassName("result")[0].innerHTML="match was draw"; 
    }
    else
    {
        document.getElementsByClassName("result")[0].innerHTML="player 1 is win the game";
    }
}
var button = document.getElementsByClassName("btn")[0];
button.addEventListener("click", throwDice);
