let turn = 'player 1';

class Box {
    constructor(boxElValue) {
        this.boxEl = boxElValue;
    }
}

// create box element objects

let boxes = [];

for (let i = 0; i < 9; i++) {
    boxes[i] = new Box(document.getElementsByClassName('box')[i]);
}

const drawCheck = (id) => {
    console.log(id);
}

// now we add event listeners to all boxes

boxes.forEach(element => {
    element.boxEl.addEventListener('click', () => {

        if (turn == 'player 1') {
            drawCheck(element.boxEl.id);
        }

        else {
            drawCross();
        }

    })
});