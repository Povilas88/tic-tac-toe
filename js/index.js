const boardBtnDOM = document.querySelectorAll('.buttonContainer button');
const resetDOM = document.querySelectorAll('.resultBtn button')[1]

let lastClicked = '';
for (let i = 0; i < boardBtnDOM.length; i++) {
    boardBtnDOM[i].addEventListener('click', () => {
        if (boardBtnDOM[i].textContent.length === 0) {
            boardBtnDOM[i].textContent = lastClicked === 'X' ? 'O' : 'X';
            boardBtnDOM[i].style.color = lastClicked === 'X' ? '#0d6164' : '#f0f0f0';
            lastClicked = lastClicked === 'X' ? 'O' : 'X';
        }
    });
}

for (let i = 0; i < boardBtnDOM.length; i++) {
    resetDOM.addEventListener('click', () => {
        boardBtnDOM[i].textContent = '';
        lastClicked = '';
    });
}