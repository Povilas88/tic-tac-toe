const boardBtnDOM = document.querySelectorAll('.buttonContainer button');
const resetDOM = document.querySelectorAll('.resultBtn button')[1]

let lastClicked = '';
for (let i = 0; i < boardBtnDOM.length; i++) {
    boardBtnDOM[i].addEventListener('click', () => {
        if (lastClicked === 'X' && boardBtnDOM[i].textContent.length === 0) {
            boardBtnDOM[i].textContent = 'O';
            boardBtnDOM[i].style.color = '#0d6164'
            lastClicked = 'O';
        } else if (boardBtnDOM[i].textContent.length === 0) {
            boardBtnDOM[i].textContent = 'X';
            boardBtnDOM[i].style.color = '#f0f0f0'
            lastClicked = 'X';
        }
    });
}

for (let i = 0; i < boardBtnDOM.length; i++) {
    resetDOM.addEventListener('click', () => {
        boardBtnDOM[i].textContent = '';
    });
}