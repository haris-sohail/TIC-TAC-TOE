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
        this.symbol; // property indicating the type of symbol inside the box (tick or cross)
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
                element.symbol = 'check';

                turn = 'player 2';
            }
        }

        else {
            if (element.empty == 1) {
                element.empty = 0;
                drawCross(element.boxEl);
                element.symbol = 'cross';

                turn = 'player 1';
            }
        }

    })
});

var foundAt = [];
var found = false;

const checkHorizontally = () => {
    found = false;
    let firstSymbol;

    for (let i = 0; i < 9; i += 3) {

        firstSymbol = boxes[i].symbol;
        foundAt.length = 0;
        found = false;

        for (let j = i; j < (3 + i); j++) {
            foundAt.push(boxes[j]);
            found = true;


            if (boxes[j].symbol == undefined || (firstSymbol != boxes[j].symbol)) {
                found = false;
                break;
            }
        }

        if (found == true) {
            console.log("Found");
            console.log(foundAt);
            break;
        }
    }
}


const checkVertically = () => {
    found = false;
    let firstSymbol;

    for (let i = 0; i < 3; i++) {

        firstSymbol = boxes[i].symbol;
        foundAt.length = 0;
        found = false;

        for (let j = i, count = 0; count < 3; j += 3, count++) {
            foundAt.push(boxes[j]);
            found = true;


            if ((boxes[j].symbol == undefined || firstSymbol != boxes[j].symbol)) {
                found = false;
                break;
            }
        }

        if (found == true) {
            console.log("Found");
            console.log(foundAt);
            break;
        }
    }
}

const checkLeftDiagonal = () => {
    // left diagonal

    firstSymbol = boxes[0].symbol;
    foundAt.length = 0;
    found = false;

    if ((boxes[4].symbol == firstSymbol) && (boxes[8].symbol == firstSymbol) && firstSymbol != undefined) {
        found = true;
        foundAt.push(boxes[0]);
        foundAt.push(boxes[4]);
        foundAt.push(boxes[8]);
        console.log("Found");
        console.log(foundAt);
    }

}

const checkRightDiagonal = () => {
    // right diagonal
    firstSymbol = boxes[2].symbol;
    foundAt.length = 0;
    found = false;

    if ((boxes[4].symbol == firstSymbol) && (boxes[6].symbol == firstSymbol) && firstSymbol != undefined) {
        found = true;
        foundAt.push(boxes[2]);
        foundAt.push(boxes[4]);
        foundAt.push(boxes[6]);
        console.log("Found");
        console.log(foundAt);
    }

}

const checkWin = () => {
    // console.log("Checkking")
    checkHorizontally();
    if (!found) {
        checkVertically();
    }
    if (!found) {
        checkLeftDiagonal();
    }
    if (!found) {
        checkRightDiagonal();
    }
}

// setInterval(checkWin, 500)
// checkWin();
// console.log('hello');
