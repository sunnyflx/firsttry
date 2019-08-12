var r;
function rock() {
    r = 3*Math.random();
    document.getElementById("mychoice").innerHTML="<img src=\"images/rock.png\" alt/>";
    var computerResult=computerChoice();
    judge("rock",computerResult);
}
function scissors() {
    r = 3*Math.random();
    document.getElementById("mychoice").innerHTML="<img src=\"images/scissors.png\" alt/>";
    var computerResult=computerChoice();
    judge("scissors",computerResult);
}
function paper() {
    r = 3*Math.random();
    document.getElementById("mychoice").innerHTML="<img src=\"images/paper.png\" alt/>";
    var computerResult=computerChoice();
    judge("paper",computerResult);
}
function judge(mychoice,computerResult) {
    if (mychoice === "rock") {
        if (computerResult === "rock") {
            document.getElementById("result").innerHTML = "draw";
        }
        else if (computerResult ==="scissors") {
            document.getElementById("result").innerHTML = "win";
        }
        else if (computerResult==="paper") {
            document.getElementById("result").innerHTML = "lose";
        }
    }
    else if (mychoice === "scissors") {
        if (computerResult ==="rock") {
            document.getElementById("result").innerHTML = "lose";
        }
        else if (computerResult ==="scissors") {
            document.getElementById("result").innerHTML = "draw";
        }
        else if (computerResult==="paper") {
            document.getElementById("result").innerHTML = "win";
        }
    }
    else {
        if (computerResult === "rock") {
            document.getElementById("result").innerHTML = "win";
        }
        else if (computerResult ==="scissors") {
            document.getElementById("result").innerHTML = "lose";
        }
        else if (computerResult==="paper") {
            document.getElementById("result").innerHTML = "draw";
        }
    }
}
function go() {
    r = 3*Math.random();
}
function computerChoice() {
    if (r<1){
        document.getElementById("computerChoice").innerHTML="<img src=\"images/rock.png\" alt/>";
        return"rock";
    }
    else if (r<2){
        document.getElementById("computerChoice").innerHTML="<img src=\"images/scissors.png\" alt/>";
        return"scissors";
    }
    else{
        document.getElementById("computerChoice").innerHTML="<img src=\"images/paper.png\" alt/>";
        return"paper";
    }
}