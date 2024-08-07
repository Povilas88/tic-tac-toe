import { TicTacToe } from "./TicTacToe.js";
const myClass = new TicTacToe();

export function wasd() {
    const buttons = document.querySelectorAll('.buttonContainer button');
    let selectedIndex = 0;

    const buttonHighlight = () => {
        for (let index = 0; index < buttons.length; index++) {
            buttons[index].style.border = index === selectedIndex ? '2px solid white' : 'none';
        }
    };

    document.addEventListener("keyup", (ev) => {
        if (ev.key === 'w' && selectedIndex > 2) {
            selectedIndex -= 3;
        }
        if (ev.key === 'a' && selectedIndex > 0) {
            selectedIndex--;
        }
        if (ev.key === 's' && selectedIndex < 6) {
            selectedIndex += 3;
        }
        if (ev.key === 'd' && selectedIndex < 8) {
            selectedIndex++;
        }
        if (ev.key === ' ') {
            buttons[selectedIndex].click();
        }
        if (ev.keyCode === 27) {
            myClass.reset();
            myClass.resetExtra();
            selectedIndex = 0;

        }
        if (ev.keyCode === 13) {
            myClass.reset();
            selectedIndex = 0;
        }
        buttonHighlight();
    })
}