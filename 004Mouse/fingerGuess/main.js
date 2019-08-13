let r,score=0,grade=3,lastHumanChoice;
let lastWinner="noOne",lastComputerChoice="rock",humanChoice;
function rock() {
    document.getElementById("mychoice").innerHTML="<img src=\"images/rock.png\" alt/>";
    humanChoice="rock";
    judge("rock");
    lastHumanChoice="rock";
}
function scissors() {
    document.getElementById("mychoice").innerHTML="<img src=\"images/scissors.png\" alt/>";
    humanChoice="scissors";
    judge("scissors");
    lastHumanChoice="scissors";
}
function paper() {
    document.getElementById("mychoice").innerHTML="<img src=\"images/paper.png\" alt/>";
    humanChoice="paper";
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
    else if (grade===4){
        computerResult=loseChange();
        lastComputerChoice=computerResult;
    }
    else if (grade===5){
        computerResult=loveRock();
    }
    else if (grade===6){
        computerResult=followHeart();
    }
    else if (grade===7){
        computerResult=cheatingMan();
        humanChoice=computerResult;
    }
    if (mychoice === "rock") {
        if (computerResult === "rock") {
            lastWinner="noOne";
        }
        else if (computerResult ==="scissors") {
            lastWinner="human";
            score+=1;
        }
        else if (computerResult==="paper") {
            lastWinner="com";
            score-=1;
        }
    }
    else if (mychoice === "scissors") {
        if (computerResult ==="rock") {
            score-=1;
            lastWinner="com";
        }
        else if (computerResult ==="scissors") {
            lastWinner="noOne";
        }
        else if (computerResult==="paper") {
            score+=1;
            lastWinner="human";
        }
    }
    else {
        if (computerResult === "rock") {
            lastWinner="human";
            score+=1;
        }
        else if (computerResult ==="scissors") {
            score-=1;
            lastWinner="com";
        }
        else if (computerResult==="paper") {
            lastWinner="noOne";
        }
    }
    if (score>=5){
        score=0;
        grade+=1;
    }
    document.getElementById("result").innerHTML="第"+grade+"关"+"积分："+score;
    if (grade>7){
        document.getElementById("result").innerHTML="NB,通关了";
    }
}
function computerChoice() {
    r = 3*Math.random();
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
    document.getElementById("computerName").innerHTML="赢了还出";
    if (lastWinner==="com"){
        document.getElementById("computerChoice").innerHTML="<img src=\"images/"+lastComputerChoice+".png\" alt/>";
        return lastComputerChoice;
    }
    let temp =computerChoice();
    document.getElementById("computerChoice").innerHTML="<img src=\"images/"+ temp +".png\" alt/>";
    return temp;
}

function loseChange(){
    document.getElementById("computerName").innerHTML="输了就换";
    if(lastWinner==="human"){
        let temp = getResultExclude(lastComputerChoice);
        document.getElementById("computerChoice").innerHTML="<img src='images/"+temp+".png' alt/>";
        return temp;
    }
    let temp = computerChoice();
    document.getElementById("computerChoice").innerHTML="<img src='images/"+ temp +".png' alt/>";
    return temp;
}

//递归，
function getResultExclude(exclusion){
    let temp = computerChoice();
    if(temp===exclusion){
        return getResultExclude(exclusion);
    }
    else{
        return temp;
    }
}

function loveRock() {
    r = 3*Math.random();
    let temp;
    if (r<0.8){
        document.getElementById("computerChoice").innerHTML="<img src=\"images/rock.png\" alt/>";
        temp="rock";
    }
    else if (r<1.8){
        document.getElementById("computerChoice").innerHTML="<img src=\"images/scissors.png\" alt/>";
        temp="scissors";
    }
    else{
        document.getElementById("computerChoice").innerHTML="<img src=\"images/paper.png\" alt/>";
        temp="paper";
    }
    document.getElementById("computerName").innerHTML="爱石先生";
    document.getElementById("computerChoice").innerHTML="<img src='images/"+ temp +".png' alt/>";
    return temp;
}


function followHeart() {
    r = 3*Math.random();
    let temp;
    if (r<1){
        document.getElementById("computerChoice").innerHTML="<img src=\"images/rock.png\" alt/>";
        temp="rock";
    }
    else if (r<2){
        document.getElementById("computerChoice").innerHTML="<img src=\"images/scissors.png\" alt/>";
        temp="scissors";
    }
    else{
        document.getElementById("computerChoice").innerHTML="<img src=\"images/paper.png\" alt/>";
        temp="paper";
    }
    document.getElementById("computerName").innerHTML="随心所欲";
    document.getElementById("computerChoice").innerHTML="<img src='images/"+ temp +".png' alt/>";
    return temp;
}

function cheatingMan() {
    document.getElementById("computerName").innerHTML="作弊小子";
    let r=Math.random();
    if (humanChoice==="rock"){
        if (r<0.5){
            document.getElementById("computerChoice").innerHTML="<img src=\"images/paper.png\" alt/>";
            return"paper";
        }
        else{
            return computerChoice;
        }
    }
    else if (humanChoice==="scissors"){
        if (r<0.5){
            document.getElementById("computerChoice").innerHTML="<img src=\"images/rock.png\" alt/>";
            return "rock";
        }
        else{
            return computerChoice;
        }
    }
    else{
        if (r<0.5){
            document.getElementById("computerChoice").innerHTML="<img src=\"images/scissors.png\" alt/>";
            return "scissors";
        }
        else{
            return computerChoice;
        }
    }
}
