// taking input of player names

playButtonEl = document.getElementById("play_button");

player1El = document.getElementsByClassName("player_input_text")[0];
player2El = document.getElementsByClassName("player_input_text")[1];

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
    player1Name = player1El.value;
    player2Name = player2El.value;

    loadBoard();
})