export class TicTacToe {
    constructor() {
        this.boardBtnDOM = document.querySelectorAll('.buttonContainer button');
        this.playDOM = document.getElementById('playButton');
        this.resetDOM = document.getElementById('resetButton');
        this.resultMsgDOM = document.querySelector('.resultContainer p');
        this.dot1DOM = document.querySelector('.dot1');
        this.dot2DOM = document.querySelector('.dot2');

        this.storedMessage = localStorage.getItem('resultMsg');
        this.storedArray = localStorage.getItem('eventArray');
        this.eventArray = Array(9).fill(null);
        this.lastClicked = localStorage.getItem('lastClicked') || '';
        this.dot1Color = localStorage.getItem('dot1Color') || 'transparent';
        this.dot2Color = localStorage.getItem('dot2Color') || 'transparent';

        this.teamXScoreDOM = document.getElementById('teamXScore');
        this.teamOScoreDOM = document.getElementById('teamOScore');
        this.teamXScore = localStorage.getItem('teamXScore');
        this.teamOScore = localStorage.getItem('teamOScore');

        this.winCondition = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];

        this.loadGame();
        this.addEventListeners();
    }

    lockButtons(condition) {
        for (let i = 0; i < this.boardBtnDOM.length; i++) {
            this.boardBtnDOM[i].disabled = condition;
        }
    }

    loadGame() {
        if (this.storedMessage) this.resultMsgDOM.innerHTML = this.storedMessage;
        if (this.storedArray) {
            this.eventArray = JSON.parse(this.storedArray);
            this.updateBoard();
        }
        this.dot1DOM.style.backgroundColor = this.dot1Color;
        this.dot2DOM.style.backgroundColor = this.dot2Color;
        if (this.teamXScore && this.teamOScore) {
            this.teamXScoreDOM.innerText = this.teamXScore;
            this.teamOScoreDOM.innerText = this.teamOScore;
        }
    }

    updateBoard() {
        for (let i = 0; i < this.boardBtnDOM.length; i++) {
            const button = this.boardBtnDOM[i];
            if (this.eventArray[i]) {
                button.textContent = this.eventArray[i];
                button.style.color = this.eventArray[i] === 'X' ? '#f0f0f0' : '#0d6164';
                this.dot1DOM.style.backgroundColor = this.eventArray[i] === 'X' ? '#fec32d' : 'transparent';
                this.dot2DOM.style.backgroundColor = this.eventArray[i] === 'X' ? 'transparent' : '#fec32d';
            }
            if (this.resultMsgDOM.innerHTML.length > 0) {
                this.lockButtons(true);
            }
        };
    }

    reset() {
        for (let i = 0; i < this.boardBtnDOM.length; i++) {
            this.boardBtnDOM[i].textContent = '';
        }
        this.eventArray = Array(9).fill(null);
        localStorage.setItem('eventArray', JSON.stringify(this.eventArray));
        this.dot1DOM.style.backgroundColor = '#fec32d';
        this.dot2DOM.style.backgroundColor = 'transparent';
        localStorage.setItem('dot1Color', this.dot1DOM.style.backgroundColor);
        localStorage.setItem('dot2Color', this.dot2DOM.style.backgroundColor);
        localStorage.setItem('resultMsg', this.resultMsgDOM.innerHTML = '');
        localStorage.setItem('lastClicked', '');
        this.resultMsgDOM.innerHTML = '';
        this.lastClicked = '';
        this.lockButtons(false);
    }

    addEventListeners() {
        for (let i = 0; i < this.boardBtnDOM.length; i++) {
            const button = this.boardBtnDOM[i];
            button.addEventListener('click', () => {
                if (!this.eventArray[i] && button.textContent.length === 0) {
                    button.textContent = this.lastClicked === 'X' ? 'O' : 'X';
                    button.style.color = this.lastClicked === 'X' ? '#0d6164' : '#f0f0f0';
                    this.dot1DOM.style.backgroundColor = this.lastClicked === 'X' ? '#fec32d' : 'transparent';
                    this.dot2DOM.style.backgroundColor = this.lastClicked === 'X' ? 'transparent' : '#fec32d';
                    this.lastClicked = this.lastClicked === 'X' ? 'O' : 'X';
                    this.eventArray[i] = this.lastClicked;
                    this.checkWin();
                    localStorage.setItem('eventArray', JSON.stringify(this.eventArray));
                    localStorage.setItem('lastClicked', this.lastClicked);
                    localStorage.setItem('dot1Color', this.dot1DOM.style.backgroundColor);
                    localStorage.setItem('dot2Color', this.dot2DOM.style.backgroundColor);
                }
            });
        }

        this.resetDOM.addEventListener('click', () => {
            this.reset();
            localStorage.setItem('teamXScore', this.teamXScoreDOM.innerText = 0);
            localStorage.setItem('teamOScore', this.teamOScoreDOM.innerText = 0);
            this.teamXScoreDOM.innerText = 0;
            this.teamOScoreDOM.innerText = 0;
        });

        this.playDOM.addEventListener('click', () => this.reset());
    }

    checkWin() {
        let draw = true;
        for (let condition of this.winCondition) {
            const [a, b, c] = condition;
            if (this.eventArray[a] && this.eventArray[a] === this.eventArray[b] && this.eventArray[a] === this.eventArray[c]) {
                this.resultMsgDOM.innerHTML = `Player ${this.eventArray[a]} wins!`;
                const team = this.eventArray[a] === 'X' ? this.teamXScoreDOM : this.teamOScoreDOM;
                team.innerText = parseInt(team.innerText) + 1;
                draw = false;
                this.lockButtons(true);
                localStorage.setItem('teamXScore', this.teamXScoreDOM.innerText);
                localStorage.setItem('teamOScore', this.teamOScoreDOM.innerText);
                localStorage.setItem('resultMsg', this.resultMsgDOM.innerHTML);
                break;
            }
        }
        if (draw && !this.eventArray.includes(null)) {
            this.resultMsgDOM.innerHTML = `It's a DRAW!`;
        }
    }
}