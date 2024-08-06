import { TicTacToe } from "./TicTacToe.js";
new TicTacToe();

/*
const boardBtnDOM = document.querySelectorAll('.buttonContainer button');
const playDOM = document.getElementById('playButton');
const resetDOM = document.getElementById('resetButton');
const resultMsgDOM = document.querySelector('.resultContainer p');

const dot1DOM = document.querySelector('.dot1');
const dot2DOM = document.querySelector('.dot2');

const storedMessage = localStorage.getItem('resultMsg');
const storedArray = localStorage.getItem('eventArray');
let eventArray = Array(9).fill(null);

function lockButtons(condition) {
    for (let i = 0; i < boardBtnDOM.length; i++) {
        boardBtnDOM[i].disabled = condition;
    }
}

if (storedMessage !== null) {
    resultMsgDOM.innerHTML = storedMessage;
}

if (storedArray !== null) {
    eventArray = JSON.parse(storedArray);
    for (let i = 0; i < boardBtnDOM.length; i++) {
        if (eventArray[i]) {
            boardBtnDOM[i].textContent = eventArray[i];
            boardBtnDOM[i].style.color = eventArray[i] === 'X' ? '#f0f0f0' : '#0d6164';
            dot1DOM.style.backgroundColor = eventArray[i] === 'X' ? '#fec32d' : 'transparent';
            dot2DOM.style.backgroundColor = eventArray[i] === 'X' ? 'transparent' : '#fec32d';
        }
        if (resultMsgDOM.innerHTML.length > 0) {
            lockButtons(true);
        }
    }
}

let lastClicked = localStorage.getItem('lastClicked') || '';
const dot1Color = localStorage.getItem('dot1Color') || 'transparent';
const dot2Color = localStorage.getItem('dot2Color') || 'transparent';

dot1DOM.style.backgroundColor = dot1Color;
dot2DOM.style.backgroundColor = dot2Color;

for (let i = 0; i < boardBtnDOM.length; i++) {
    boardBtnDOM[i].addEventListener('click', () => {
        if (!eventArray[i] && boardBtnDOM[i].textContent.length === 0) {
            boardBtnDOM[i].textContent = lastClicked === 'X' ? 'O' : 'X';
            boardBtnDOM[i].style.color = lastClicked === 'X' ? '#0d6164' : '#f0f0f0';
            dot1DOM.style.backgroundColor = lastClicked === 'X' ? '#fec32d' : 'transparent';
            dot2DOM.style.backgroundColor = lastClicked === 'X' ? 'transparent' : '#fec32d';
            lastClicked = lastClicked === 'X' ? 'O' : 'X';
            eventArray[i] = lastClicked;
            checkWin();
            localStorage.setItem('eventArray', JSON.stringify(eventArray));
            localStorage.setItem('lastClicked', lastClicked);
            localStorage.setItem('dot1Color', dot1DOM.style.backgroundColor);
            localStorage.setItem('dot2Color', dot2DOM.style.backgroundColor);
        }
    });
}

function reset() {
    for (let i = 0; i < boardBtnDOM.length; i++) {
        boardBtnDOM[i].textContent = '';
    }
    eventArray = Array(9).fill(null);
    localStorage.setItem('eventArray', JSON.stringify(eventArray));
    dot1DOM.style.backgroundColor = '#fec32d';
    dot2DOM.style.backgroundColor = 'transparent';
    localStorage.setItem('dot1Color', dot1DOM.style.backgroundColor);
    localStorage.setItem('dot2Color', dot2DOM.style.backgroundColor);
    localStorage.setItem('resultMsg', resultMsgDOM.innerHTML = '');
    localStorage.setItem('lastClicked', '')
    resultMsgDOM.innerHTML = '';
    lastClicked = '';
    lockButtons(false);
}

resetDOM.addEventListener('click', () => {
    reset();
    localStorage.setItem('teamXScore', teamXScoreDOM.innerText = 0);
    localStorage.setItem('teamOScore', teamOScoreDOM.innerText = 0);
    teamXScoreDOM.innerText = parseInt(teamXScoreDOM.innerText = 0);
    teamOScoreDOM.innerText = parseInt(teamOScoreDOM.innerText = 0);
});

const winCondition = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

let teamXScoreDOM = document.getElementById('teamXScore');
let teamOScoreDOM = document.getElementById('teamOScore');

const teamXScore = localStorage.getItem('teamXScore');
const teamOScore = localStorage.getItem('teamOScore');

if (teamXScore !== null && teamOScore !== null) {
    teamXScoreDOM.innerText = localStorage.getItem('teamXScore');
    teamOScoreDOM.innerText = localStorage.getItem('teamOScore');
}

function checkWin() {
    let draw = true;
    for (let condition of winCondition) {
        const [a, b, c] = condition;
        if (eventArray[a] && eventArray[a] === eventArray[b] && eventArray[a] === eventArray[c]) {
            resultMsgDOM.innerHTML = `Player ${eventArray[a]} wins!`;
            const team = eventArray[a] === 'X' ? teamXScoreDOM : teamOScoreDOM;
            team.innerText = parseInt(team.innerText) + 1;
            draw = false;
            lockButtons(true);
            localStorage.setItem('teamXScore', teamXScoreDOM.innerText);
            localStorage.setItem('teamOScore', teamOScoreDOM.innerText);
            localStorage.setItem('resultMsg', resultMsgDOM.innerHTML);
            break;
        }
    }
    if (draw && !eventArray.includes(null)) {
        resultMsgDOM.innerHTML = `It's a DRAW!`;
    }
}

playDOM.addEventListener('click', () => {
    reset();
});
*/