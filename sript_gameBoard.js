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