// load player names
let player1Name = localStorage.getItem('player1Name');
let player2Name = localStorage.getItem('player2Name');

let player1Score = 0;
let player2Score = 0;

// player score

setInterval(() => {
    document.getElementById('player1NameContainer').innerHTML = `${player1Name} : ` + player1Score;
    document.getElementById('player2NameContainer').innerHTML = `${player2Name} : ` + player2Score;
}, 500)

// turn of player 1

let turn = 'player 1';


class Box {
    constructor(boxElValue) {
        this.boxEl = boxElValue;
        this.empty = 1;
    }
}

// create box element objects

let boxes = [];

for (let i = 0; i < 9; i++) {
    boxes[i] = new Box(document.getElementsByClassName('box')[i]);
}

const drawCross = (boxElValue) => {

    checkImgEl = document.createElement('img');
    checkImgEl.src = 'cross_mark.png';

    checkImgEl.style.width = '68%';
    checkImgEl.style.height = '68%';

    boxElValue.style.transition = 'all 2s';


    boxElValue.appendChild(checkImgEl);
}

const drawCheck = (boxElValue) => {

    checkImgEl = document.createElement('img');
    checkImgEl.src = 'check_mark.png';

    checkImgEl.style.width = '80%';
    checkImgEl.style.height = '80%';

    boxElValue.style.transition = 'all 2s';


    boxElValue.appendChild(checkImgEl);
}

// now we add event listeners to all boxes

boxes.forEach(element => {
    element.boxEl.addEventListener('click', () => {
        
        

        if (turn == 'player 1') {
            if (element.empty == 1) {
                element.empty = 0;
                drawCheck(element.boxEl);

                turn = 'player 2';
            }
        }

        else {
            if (element.empty == 1) {
                element.empty = 0;
                drawCross(element.boxEl);

                turn = 'player 1';
            }
        }

    })
});