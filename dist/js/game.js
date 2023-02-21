var rock = document.querySelector('.rock');

var paper = document.querySelector('.paper');

var scissors = document.querySelector('.scissors');

var gameBG = document.querySelector('.game-icon_bg');

var pickText = document.querySelector('.game-text');

var computer = document.querySelector('.computer');

let computerSelectPosition;

const computerSelectPositionFunction = () => {
    return Math.floor(Math.random() * 3);
}

const addPickTextToComputerAndPickText = () => {
    setTimeout(function () {
        pickText.lastElementChild.classList.add('pickText');
    }, 1000);

    setTimeout(function () {
        computer.classList.add('pickText');
    }, 1300);
}

var computerSelectIcon = document.querySelectorAll('.border');

var decision = document.querySelector('.decision');

const removeDecisionAndComputerSelectIconForDisplay = () => {
    computerSelectIcon[0].classList.remove('display_computer-selection');
    computerSelectIcon[1].classList.remove('display_computer-selection');
    computerSelectIcon[2].classList.remove('display_computer-selection');
    decision.children[2].classList.remove('display_computer-selection');
    decision.children[3].classList.remove('display_computer-selection');
    decision.children[0].classList.remove('display_computer-selection');
    decision.children[1].classList.remove('display_computer-selection');
}

var rockResetBtn = document.querySelector('.rock_reset');
var paperResetBtn = document.querySelector('.paper_reset');
var scissorsResetBtn = document.querySelector('.scissors_reset');

var computerRockBG = document.querySelector('.computer-rock_bg');
var computerPaperBG = document.querySelector('.computer-paper_bg');
var computerScissorsBG = document.querySelector('.computer-scissors_bg');

var score = document.querySelector('.game-score_number');

rock.addEventListener("click", pickRock);
paper.addEventListener("click", pickPaper);
scissors.addEventListener("click", pickScissors);

function pickRock() {
    rock.classList.add('game-item_move');
    rock.style.marginTop = "10px";
    rock.style.top = "0";
    scissors.classList.add('picked');
    gameBG.classList.add('picked');
    pickText.firstElementChild.classList.add('pickText');
    paper.classList.add('picked');

    addPickTextToComputerAndPickText();

    computerSelectPosition = computerSelectPositionFunction();

    setTimeout(function () {
        if (computerSelectPosition === 0) {
            computerSelectIcon[0].classList.add('display_computer-selection');
        } else if (computerSelectPosition === 1) {
            computerSelectIcon[1].classList.add('display_computer-selection');
            computerSelectIcon[1].classList.add('glow');
        } else {
            computerSelectIcon[2].classList.add('display_computer-selection');

            setTimeout(function () {
                rock.classList.add('glow');
                rock.classList.add('game-icons_zindex');
            }, 550);

        }

        computer.classList.remove('pickText');

        setTimeout(function () {
            if (computerRockBG.className.includes('display_computer-selection')) {
                decision.children[2].classList.add('display_computer-selection');
                decision.children[3].classList.add('display_computer-selection');
            } else if (computerScissorsBG.className.includes('display_computer-selection')) {
                decision.children[0].classList.add('display_computer-selection');
                decision.children[3].classList.add('display_computer-selection');
            } else {
                decision.children[1].classList.add('display_computer-selection');
                decision.children[3].classList.add('display_computer-selection');
            }


            if (decision.children[0].className.includes('display_computer-selection')) {
                score.innerText++;
            } else if (decision.children[1].className.includes('display_computer-selection')) {
                score.innerText--;
            } else {
                console.log(score.innerText);
            }
        }, 1000);

    }, 2000);

    rockResetBtn.addEventListener("click", rockReset);
}


function pickPaper() {
    rock.classList.add('picked');
    scissors.classList.add('picked');
    gameBG.classList.add('picked');
    pickText.firstElementChild.classList.add('pickText');
    paper.classList.add('game-item_move');

    addPickTextToComputerAndPickText();

    computerSelectPosition = computerSelectPositionFunction();

    setTimeout(function () {
        if (computerSelectPosition === 0) {
            computerSelectIcon[0].classList.add('display_computer-selection');

            setTimeout(function () {
                paper.classList.add('glow');
                paper.classList.add('game-icons_zindex');
            }, 550);

        } else if (computerSelectPosition === 1) {
            computerSelectIcon[1].classList.add('display_computer-selection');
        } else {
            computerSelectIcon[2].classList.add('display_computer-selection');
            computerSelectIcon[2].classList.add('glow');
        }

        computer.classList.remove('pickText');

        setTimeout(function () {
            if (computerPaperBG.className.includes('display_computer-selection')) {
                decision.children[2].classList.add('display_computer-selection');
                decision.children[3].classList.add('display_computer-selection');
            } else if (computerScissorsBG.className.includes('display_computer-selection')) {
                decision.children[1].classList.add('display_computer-selection');
                decision.children[3].classList.add('display_computer-selection');
            } else {
                decision.children[0].classList.add('display_computer-selection');
                decision.children[3].classList.add('display_computer-selection');
            }


            if (decision.children[0].className.includes('display_computer-selection')) {
                score.innerText++;
            } else if (decision.children[1].className.includes('display_computer-selection')) {
                score.innerText--;
            } else {
                console.log(score.innerText);
            }
        }, 1000);

    }, 2000);

    paperResetBtn.addEventListener("click", paperReset);
}


function pickScissors() {
    rock.classList.add('picked');
    paper.classList.add('picked');
    gameBG.classList.add('picked');
    pickText.firstElementChild.classList.add('pickText');
    scissors.classList.add('game-item_move');

    addPickTextToComputerAndPickText();

    computerSelectPosition = computerSelectPositionFunction();

    setTimeout(function () {
        if (computerSelectPosition === 0) {
            computerSelectIcon[0].classList.add('display_computer-selection');
            computerSelectIcon[0].classList.add('glow');
        } else if (computerSelectPosition === 1) {
            computerSelectIcon[1].classList.add('display_computer-selection');

            setTimeout(function () {
                scissors.classList.add('glow');
                scissors.classList.add('game-icons_zindex');
            }, 550);

        } else {
            computerSelectIcon[2].classList.add('display_computer-selection');
        }

        computer.classList.remove('pickText');

        setTimeout(function () {
            if (computerScissorsBG.className.includes('display_computer-selection')) {
                decision.children[2].classList.add('display_computer-selection');
                decision.children[3].classList.add('display_computer-selection');
            } else if (computerPaperBG.className.includes('display_computer-selection')) {
                decision.children[0].classList.add('display_computer-selection');
                decision.children[3].classList.add('display_computer-selection');
            } else {
                decision.children[1].classList.add('display_computer-selection');
                decision.children[3].classList.add('display_computer-selection');
            }


            if (decision.children[0].className.includes('display_computer-selection')) {
                score.innerText++;
            } else if (decision.children[1].className.includes('display_computer-selection')) {
                score.innerText--;
            } else {
                console.log(score.innerText);
            }
        }, 1000);

    }, 2000);

    scissorsResetBtn.addEventListener("click", scissorsReset);
}


function rockReset() {
    rock.classList.remove('game-item_move');
    rock.style.marginTop = "0";
    rock.style.top = "146px";
    scissors.classList.remove('picked');
    gameBG.classList.remove('picked');
    pickText.firstElementChild.classList.remove('pickText');
    paper.classList.remove('picked');
    pickText.lastElementChild.classList.remove('pickText');
    computer.classList.remove('pickText');



    computerSelectIcon[1].classList.remove('glow');
    rock.classList.remove('glow');
    rock.classList.remove('game-icons_zindex');
    removeDecisionAndComputerSelectIconForDisplay()
}

function paperReset() {
    rock.classList.remove('picked');
    scissors.classList.remove('picked');
    gameBG.classList.remove('picked');
    pickText.firstElementChild.classList.remove('pickText');
    paper.classList.remove('game-item_move');
    pickText.lastElementChild.classList.remove('pickText');
    computer.classList.remove('pickText');



    computerSelectIcon[2].classList.remove('glow');
    paper.classList.remove('glow');
    paper.classList.remove('game-icons_zindex');
    removeDecisionAndComputerSelectIconForDisplay()
}

function scissorsReset() {
    rock.classList.remove('picked');
    paper.classList.remove('picked');
    gameBG.classList.remove('picked');
    pickText.firstElementChild.classList.remove('pickText');
    scissors.classList.remove('game-item_move');
    pickText.lastElementChild.classList.remove('pickText');
    computer.classList.remove('pickText');



    computerSelectIcon[0].classList.remove('glow');
    scissors.classList.remove('glow');
    scissors.classList.remove('game-icons_zindex');
    removeDecisionAndComputerSelectIconForDisplay()
}