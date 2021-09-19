let popped = 0;
scoreBoardStyles()

function scoreBoard() {
    let scoreBoard = document.querySelector('#score-board');
    scoreBoard.innerHTML = "Your Score: "+ popped;
}


document.addEventListener('mouseover', function (e) {

    if (e.target.className === "balloon") {

        e.target.style.backgroundColor = "#ededed";
        e.target.textContent = "POP!";
        e.target.classList.remove('balloon');
        popped++;
        removeEvent(e);
        checkAllPopped();
        scoreBoard();
        scoreBoardStyles();
    }
});

function removeEvent(e) {
    e.target.removeEventListener('mouseover', function () {

    })
};


function scoreBoardStyles() {
    if(popped !== 0) {
        let scoreBoard = document.querySelector('#score-board');
        scoreBoard.style.backgroundColor = "#bdc3c7";
        scoreBoard.style.color = "#2c3e50";
        scoreBoard.style.padding = "20px";    
        scoreBoard.style.textAlign = "center";    
        scoreBoard.style.fontSize = "20px";    

    }
}

function finalScoreBoardCss() {
    scoreBoard = document.querySelector('#final-score-board')
    scoreBoard.style.backgroundColor = "#bdc3c7";
    scoreBoard.style.color = "#2c3e50";
    scoreBoard.style.padding = "20px";    
    scoreBoard.style.fontSize = "50px";
    scoreBoard.style.height = "100VH";
    scoreBoard.style.display = "flex";
    scoreBoard.style.alignItems = "center";
    scoreBoard.style.padding = "0";
    scoreBoard.style.margin = "0";
    scoreBoard.style. justifyContent = "center";



}

function finalScoreBoard() {
    let scoreBoard = document.querySelector('#score-board');
    scoreBoard.id = 'final-score-board';
    scoreBoard.innerHTML = "Congratulations You Made A Score: "+ popped;
    finalScoreBoardCss();
}


function checkAllPopped() {
    if (popped === 24) {
        document.querySelector("#user-guideline").style.display = "none";
        console.log('all popped!');
        let gallery = document.querySelector('#balloon-gallery');
        // let message = document.querySelector('#yay-no-balloons');
        gallery.innerHTML = '';
        // message.style.display = 'block';

        finalScoreBoard();

    }
};