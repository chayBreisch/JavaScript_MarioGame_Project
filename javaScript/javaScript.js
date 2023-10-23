//=================================================================
//game
//=================================================================
let jump = document.addEventListener("keydown", callJumpActionByEvent);
// var idObstial = null;
var idPerson = null;
let speed = 7;
let count = 0;
let countStarts = 0;
let text = 'game over';
let obstial = document.getElementById("imgObstial");
let person = document.getElementById("person");
let tree = document.getElementById("imgTree");
let countObstical = 0;

let posPerson = 25;
let posObstial = 0;
let posTree = 0;
let speedScore = 100;
let startGameBtn = document.getElementById('startGame');

let speedObstical = 1;

function createBoard() {
    // gameOverMp3();
    mario();
}

//===============================================
//Start Game.
//===========
function startGame() {
    startGamePlayAudio()
    startGameBtn.style.visibility = 'hidden';
    let time = setInterval(countScore, speedScore);
    createNewObject();
    createNewStar();
}
//===============================================


//===============================================
//backgound sound!!
//==================
function startGamePlayAudio() {
    let audio = document.getElementById("Audio");
    audio.src = "../mp4/backgroundMp4.mp3";
    audio.play();
}
//===============================================

let ballb;
//===============================================
//Create new obstical.
//====================
function createNewObject() {
    posObstial = 0;
    // clearInterval(idObstial);
    clearInterval(ballb);
    countObstical++;
    if (countObstical < 20) {
        speedAbstical += 0.2;
    }
    // speedAbstical += 0.2;
    ballb = setInterval(obsticalMoving, speed);
}
//===============================================

let speedAbstical = 1;

//===============================================
//Obstical moving;
//================
function obsticalMoving() {
    //check if gameOver;
    if (posObstial > 440 && posObstial < 480 && posPerson <= 250 && posPerson > 210) {
        gameOver(text);
        return;
    }
    else if (posObstial > 440 && posObstial < 480 && posPerson <= 40 && posPerson > -10) {
        gameOver(text);
        return;
    }
    if (posObstial >= 560) {
        // clearInterval(idObstial);
        count++;
        obstial.style.visibility = 'hidden';
        obstial.style.right = 0 + 'px';
        obstial.style.visibility = 'visible';
        //to add another obstical 
        createNewObject();
    }
    else {
        posObstial += speedAbstical;
        obstial.style.right = posObstial + 'px';
    }
}

posPerson = 25;
let speedPosPerson = 1;
let speedPosPersonDown = 0.8;

//=====================================================================
//If key pressed is space(32) or arrow up(38) sends to func jumpAction.
//=====================================================================
function callJumpActionByEvent() {
    if(posPerson >= -100 && posPerson < -10 ){
        return;
    }
    if (event.which !== 38 && event.which !== 32) {
        return;
    }
    else {
        jumpMusic();
        jumpAction();
    }
}

//=======================================================
//sound jump up.
//==============
function jumpMusic() {
    let audioJump = document.getElementById("audioJump");
    audioJump.src = "../mp4/jumpSound.WAV";
    audioJump.play();
}
//========================================================

//========================================================
//Calls func jumpMusic-play the music of jump. and jump.
//========================================================
function jumpAction() {
    jumpMusic();
    clearInterval(idPerson);
    idPerson = setInterval(jumpdown, speedPosPerson);
}
//========================================================


//========================================================
//Character jumps down.
//=====================
function jumpdown() {
    if (posPerson <= -100) {
        clearInterval(idPerson);
        //go back to pos start
        idPerson = setInterval(jumpUp, speedPosPerson);
    }
    else {
        posPerson -= 2;
        person.style.top = posPerson + 'px';
    }
}
//========================================================
function jumpUp() {
    if (posPerson >= 30) {
        clearInterval(idPerson);
    }
    else {
        posPerson += speedPosPersonDown;
        person.style.top = posPerson + 'px';
    }
}

//========================================================
//Game Over. Shows game over text....
//===================================
function gameOver(text) {
    countUp = 0;
    speedPosPersonDown = 20;

    //    setTimeout(satrtGameAgain, 1300)
    gameOverMp3()

    let overGame = document.getElementById('game_over');
    overGame.innerText = text;
    overGame.style.position = 'fixed';
    overGame.style.textAlign = 'center';
    overGame.style.fontSize = '5vw';
    overGame.style.marginLeft = '11%';
    overGame.style.marginTop = '9.5%';
    overGame.style.zIndex = '50';
    overGame.style.transform = 'rotateX(0.9)';
    overGame.style.transition = '1s';
    overGame.style.textShadow = "3px 0 white";
    overGame.style.fontWeight = 'bold';
    speedPosPersonDown = 0.8;
    overGame.style.position = 'visibility';
    setTimeout(satrtGameAgain, 1300)
    clearGame();
    return;
}
//================================================================

//================================================================
//sound game over.
//================
function gameOverMp3() {
    let audio = document.getElementById("Audio");
    audio.pause();
    audio.currentTime = 0;
    let gameOverMusic = document.getElementById("gameOverMusic");
    gameOverMusic.src = "../mp4/gameover.wav";
    gameOverMusic.play();
}
//===============================================================

function satrtGameAgain() {
    location.reload();
}


let counting = 0;
let countUp = 1;
//========================================================
//Counts the score.
//=================
function countScore() {
    scores.style.visibility = 'visible';
    counting += countUp;
    let score = document.getElementById('scores');
    scores.innerText = 'score: ' + counting;
}
//========================================================

//========================================================
function clearGame() {
    speedPosPerson = 0.5;
    // clearInterval(idObstial)
    clearInterval(countScore);
    time = null;
    counting = 0;
    // setInterval(countScore, speedScore);
    let overGame = document.getElementById('game_over');
    overGame.style.visibility = 'hidden';
    createBoard();
}
//========================================================

//============================================================================
//setting background color.
//=========================
let backgroundColor = document.getElementsByTagName('body')[0];
function pink() {
    backgroundColor.style.backgroundColor = "pink"
}
function lightBlue() {
    backgroundColor.style.backgroundColor = "lightBlue"
}
function blue() {
    backgroundColor.style.backgroundColor = "rgb(46, 180, 224)";
}
function orange() {
    backgroundColor.style.backgroundColor = " rgb(241, 216, 75)";
}
function green() {
    backgroundColor.style.backgroundColor = " rgb(28, 204, 145)";

}
function gray() {
    backgroundColor.style.backgroundColor = "gray";
}
//============================================================================




//============================================================================
//Creates character.
//===================
let person1 = document.getElementById('person');
let personImg = document.createElement('img');
personImg.setAttribute('id', 'person');
person1.appendChild(personImg);

function ball() {
    personImg.src = "../pictures/ball.gif";
}

function mario() {
    personImg.src = "../pictures/marioRuning.gif";
}

function sonic() {
    personImg.src = "../pictures/sonic.gif";
    personImg.style.top = '33px';
}
function dog() {
    personImg.src = "../pictures/tenor.gif";
}
//============================================================================




//============================================================================
//show/hid setting.
//================
let flagSetting = 0;
function showSetting() {

    let setting = document.getElementById('setting');

    if (flagSetting === 1) {
        flagSetting = 0;
        setting.style.display = "none";

    }
    else {

        let setting = document.getElementById('setting');
        setting.style.display = "inherit";
        flagSetting = 1;
    }
}
//============================================================================



//===============================================
//Create new trees.
//====================
function createNewbackground() {

    ballb = setInterval(treeMoving, speed);
}
//===============================================


// var idtree = null;
function createNewStar() {
    let treeImg = document.createElement('img');
    treeImg.setAttribute('id', 'imgTree');
    tree.appendChild(treeImg);
    createNewTree2();
}



//===============================================
//Create new tree.
//====================
let tr;
function createNewTree2() {
    posTree = 0;
    flagStars = 0;
    // clearInterval(idtree);
    clearInterval(tr);
    // speedAbstical += 0.2;
    tr = setInterval(treeMoving, 9);
}
//===============================================
let flagStars = 0;
function treeMoving() {
    if (posTree >= 570) {
        // clearInterval(idtree);
        tree.style.visibility = 'hidden';
        tree.style.right = 0 + 'px';
        tree.style.visibility = 'visible';
        // to add another obstical 
        createNewStar();
    }
    else if (posTree >= 400 && posTree <= 480 && posPerson <= -100 && posPerson > -60) {
    }
    else if (posTree > 440 && posTree < 480 && posPerson <= 0 && posPerson > -100) {
        addStar();
    }
    else {
        posTree += 10;
        tree.style.right = posTree + 'px';
    }
}
//==========================================================================
//==========================================================================
//Add star
//========
function addStar() {
    // scores.style.visibility = 'visible';
    if (flagStars == 0) {
        countStarts++;
        let countStartsCollect = document.getElementById('counterStars');
        let imgTree = document.getElementById('imgTree');
        imgTree.style.visibility = "hidden";
        countStartsCollect.innerText = countStarts;
        flagStars = 1;
        starMp3();
    }
}
//==========================================================================
//==========================================================================
function starMp3() {
    let audio = document.getElementById("starMp");
    audio.pause();
    audio.currentTime = 0;
    let starAudio = document.getElementById("gameOverMusic");
    starAudio.src = "../mp4/star.WAV";
    starAudio.play();
}
//==========================================================================
