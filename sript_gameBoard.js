mainEl = document.getElementById("main");

// load player names
let player1Name = localStorage.getItem('player1Name');
let player2Name = localStorage.getItem('player2Name');

let player1Score = localStorage.getItem('player1Score');
let player2Score = localStorage.getItem('player2Score');

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

    boxElValue.style.transition = 'all 1s';


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
    if (!found) {
        checkHorizontally();
    }
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

setInterval(checkWin, 500)

const winAnimation = () => {
    foundAt[0].boxEl.style.backgroundColor = 'green';
    foundAt[1].boxEl.style.backgroundColor = 'green';
    foundAt[2].boxEl.style.backgroundColor = 'green';

}

let playAgainButtonEl = document.createElement('button');

const playerHasWon = (playerWonVal) => {
    // increment the win counter


    let playerWonEl = document.createElement('div');

    playerWonEl.innerHTML = `<div id="playerWonContainer">
    <div id="playerWon">
        ${playerWonVal} has won!
    </div>
    </div>`

    // Apply CSS

    playerWonEl.style.width = '100%';
    playerWonEl.style.height = '100%';
    playerWonEl.style.position = 'absolute';
    playerWonEl.style.display = 'flex';
    playerWonEl.style.alignItems = 'center';
    playerWonEl.style.justifyContent = 'center';
    playerWonEl.style.backdropFilter = 'blur(5px)';
    playerWonEl.style.fontFamily = 'Bungee Spice';
    playerWonEl.style.fontSize = '3vw';

    playerWonEl.style.backdropFilter = 'blur(0)';
    playerWonEl.style.opacity = '0'; // Make the element initially transparent

    mainEl.prepend(playerWonEl);

    setTimeout(() => {
        playerWonEl.style.transition = 'backdrop-filter 1s, opacity 1s';
        playerWonEl.style.backdropFilter = 'blur(10px)';
        playerWonEl.style.opacity = '1';
    }, 500);

    mainEl.prepend(playerWonEl);

    // play again button 
    let playAgainButtonContainerEl = document.createElement('div');

    playAgainButtonContainerEl.style.position = 'absolute';
    playAgainButtonContainerEl.style.width = '100%';
    playAgainButtonContainerEl.style.height = '100%';
    playAgainButtonContainerEl.style.display = 'flex';
    playAgainButtonContainerEl.style.alignItems = 'center';
    playAgainButtonContainerEl.style.justifyContent = 'center';
    playAgainButtonContainerEl.style.marginTop = '5vw';



    playAgainButtonEl.innerHTML = `<div id="play_button_div">
    <button id="play_button" style="font-family:'Shadows Into Light'; border: none; background-color: transparent; font-size: 1.5vw">PLAY AGAIN</button>
    </div>`

    // Apply CSS

    // font-family: 'Shadows Into Light', cursive;
    // width: 8vw;
    // height: 3vw;
    // border-radius: 30px;
    // border-color: black;
    // font-size: 1.5vw;
    // background-color: orange;

    playAgainButtonEl.style.width = '8vw';
    playAgainButtonEl.style.height = '3vw';
    playAgainButtonEl.style.borderRadius = '30px';
    playAgainButtonEl.style.borderColor = 'black';
    // playAgainButtonEl.style.fontSize = '1.5vw';
    playAgainButtonEl.style.backgroundColor = 'orange';

    playAgainButtonContainerEl.appendChild(playAgainButtonEl);
    playerWonEl.insertAdjacentElement("afterend", playAgainButtonContainerEl);

}

var playerWonBool = true;

const won = () => {
    // which player's turn is it 
    if (found && playerWonBool) {
        let playerWon;
        playerWonBool = false;

        if (turn == 'player 2') {
            playerWon = player1Name;
            // increment the win counter
            player1Score++;
        }

        else {
            playerWon = player2Name;
            // increment the win counter
            player2Score++;
        }

        winAnimation();
        setTimeout(() => {
            playerHasWon(playerWon)
        }, 700)
    }
}

setInterval(won, 100);

playAgainButtonEl.addEventListener('click', () => {
    localStorage.setItem('player1Score', player1Score);
    localStorage.setItem('player2Score', player2Score);

    window.location.href = 'gameBoard.html';
})