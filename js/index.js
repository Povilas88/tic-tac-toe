const boardBtnDOM = document.querySelectorAll('.buttonContainer button');
const playDOM = document.querySelectorAll('.resultBtn button')[0]
const resetDOM = document.querySelectorAll('.resultBtn button')[1]
const resultMsgDOM = document.querySelector('.resultContainer p');

const dot1DOM = document.querySelector('.dot1')
const dot2DOM = document.querySelector('.dot2')

let eventArray = Array(9).fill(null);
let lastClicked = '';
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
        }
    });
}

for (let i = 0; i < boardBtnDOM.length; i++) {
    resetDOM.addEventListener('click', () => {
        boardBtnDOM[i].textContent = '';
        lastClicked = '';
        dot1DOM.style.backgroundColor = '#fec32d';
        dot2DOM.style.backgroundColor = 'transparent';
        eventArray = Array(9).fill(null);
        resultMsgDOM.innerHTML = '';
        boardBtnDOM[i].disabled = false;
        teamXScoreDOM.innerText = parseInt(teamXScoreDOM.innerText = 0);
        teamOScoreDOM.innerText = parseInt(teamOScoreDOM.innerText = 0);
    });
}

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

function checkWin() {
    let draw = true;
    for (let condition of winCondition) {
        const [a, b, c] = condition;
        if (eventArray[a] && eventArray[a] === eventArray[b] && eventArray[a] === eventArray[c]) {
            resultMsgDOM.innerHTML = `Player ${eventArray[a]} wins!`;

            const team = eventArray[a] === 'X' ? teamXScoreDOM : teamOScoreDOM;
            team.innerText = parseInt(team.innerText) + 1;

            draw = false;
            for (let i = 0; i < boardBtnDOM.length; i++) {
                boardBtnDOM[i].disabled = true;
            }
        }
    }
    if (draw && !eventArray.includes(null)) {
        resultMsgDOM.innerHTML = `It's a DRAW!`;
    }
}

for (let i = 0; i < boardBtnDOM.length; i++) {
    playDOM.addEventListener('click', () => {
        boardBtnDOM[i].textContent = '';
        lastClicked = '';
        dot1DOM.style.backgroundColor = '#fec32d';
        dot2DOM.style.backgroundColor = 'transparent';
        eventArray = Array(9).fill(null);
        resultMsgDOM.innerHTML = '';
        boardBtnDOM[i].disabled = false;
    });
}
