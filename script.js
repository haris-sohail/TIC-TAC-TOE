// taking input of player names

playButtonEl = document.getElementById("play_button");

mainEl = document.getElementById("main");

let player1Name;
let player2Name;

const removeAllChildNodes = (parent) => {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

const loadBoard = () => {
    window.location.href = 'gameBoard.html';
}

playButtonEl.addEventListener('click', () => {
    player1El = document.getElementsByClassName("player_input_text")[0];
    player2El = document.getElementsByClassName("player_input_text")[1];

    player1Name = player1El.value;
    player2Name = player2El.value;

    if (!(player1Name && player2Name)) {

        errorEl = document.createElement('div');

        errorEl.innerHTML = `<div id="errorHome">
        PLEASE ENTER THE PLAYER NAMES TO PLAY
        </div>`

        errorEl.style.display = 'flex';
        errorEl.style.justifyContent = 'center';
        errorEl.style.color = 'white';
        errorEl.style.backgroundColor = 'black';

        mainEl.prepend(errorEl);

        setTimeout(() => {
            mainEl.removeChild(errorEl);
        }, 3000)
    }
    else {
        localStorage.setItem('player1Score', 0);
        localStorage.setItem('player2Score', 0);

        localStorage.setItem('player1Name', player1Name);
        localStorage.setItem('player2Name', player2Name);

        loadBoard();
    }
})