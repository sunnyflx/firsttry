let r,score=0,grade=1,lastHumanChoice;
let isComputerWin=false,lastComputerChoice;
function rock() {
    document.getElementById("mychoice").innerHTML="<img src=\"images/rock.png\" alt/>";
    judge("rock");
    lastHumanChoice="rock";
}
function scissors() {
    document.getElementById("mychoice").innerHTML="<img src=\"images/scissors.png\" alt/>";
    judge("scissors");
    lastHumanChoice="scissors";
}
function paper() {
    document.getElementById("mychoice").innerHTML="<img src=\"images/paper.png\" alt/>";
    judge("paper");   
    lastHumanChoice="paper";
}
function judge(mychoice) {
    r = 3*Math.random();
    let computerResult;
    if (grade===1){
        computerResult=onlyRocker();
    }
    else if (grade===2){
        computerResult=learnFromHuman();
    }
    else if (grade===3){
        computerResult=winnerAgain();
        lastComputerChoice=computerResult;
    }
    else{
        computerResult=computerChoice();
    }
    if (mychoice === "rock") {
        if (computerResult === "rock") {
            isComputerWin=false;
        }
        else if (computerResult ==="scissors") {
            isComputerWin=false;
            score+=1
        }
        else if (computerResult==="paper") {
            isComputerWin=true;
            score-=1       
        }
    }
    else if (mychoice === "scissors") {
        if (computerResult ==="rock") {
            isComputerWin=true;
            score-=1;
        }
        else if (computerResult ==="scissors") {
            isComputerWin=false;
        }
        else if (computerResult==="paper") {
            isComputerWin=false;
            score+=1;
        }
    }
    else {
        if (computerResult === "rock") {
            isComputerWin=false;
            score+=1;
        }
        else if (computerResult ==="scissors") {
            isComputerWin=true;
            score-=1;
        }
        else if (computerResult==="paper") {
            isComputerWin=false;
        }
    }
    if (score>=6){
        score=0;
        grade+=1;
    }
    document.getElementById("result").innerHTML="第"+grade+"关"+"积分："+score;
    if (grade>=10){
        document.getElementById("result").innerHTML="NB,通关了";
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
function onlyRocker() {
    document.getElementById("computerName").innerHTML="电脑大锤哥";
    document.getElementById("computerChoice").innerHTML="<img src=\"images/rock.png\" alt/>";
    return "rock";
}
function learnFromHuman() {
    document.getElementById("computerName").innerHTML="模仿帝";
    document.getElementById("computerChoice").innerHTML="<img src=\"images/"+lastHumanChoice+".png\" alt/>";
    return lastHumanChoice;
}
function winnerAgain() {
    document.getElementById("computerName").innerHTML="赢了还要";
    let temp =computerChoice();
    if (isComputerWin===true){
        document.getElementById("computerChoice").innerHTML="<img src=\"images/"+lastComputerChoice+".png\" alt/>";
        return lastComputerChoice;
    }
    document.getElementById("computerChoice").innerHTML="<img src=\"images/"+temp+".png\" alt/>";
    return temp;
}