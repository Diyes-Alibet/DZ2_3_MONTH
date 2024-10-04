const parentBlock = document.querySelector('.parent_block');
const childBlock = document.querySelector('.child_block');

let positionX = 0;
let positionY = 0;

const offsetWidth = parentBlock.offsetWidth - childBlock.offsetWidth;
const offsetHeight = parentBlock.offsetHeight - childBlock.offsetHeight;

const moveBlock = () => {
    if (positionX < offsetWidth && positionY === 0) {
        positionX++;
        childBlock.style.left = `${positionX}px`;
    }
    else if (positionX >= offsetWidth && positionY < offsetHeight) {
        positionY++;
        childBlock.style.top = `${positionY}px`;
    }
    else if (positionY >= offsetHeight && positionX > 0) {
        positionX--;
        childBlock.style.left = `${positionX}px`;
    }
    else if (positionX === 0 && positionY > 0) {
        positionY--;
        childBlock.style.top = `${positionY}px`;
    }

    requestAnimationFrame(moveBlock);
};

moveBlock();
const seconds = document.getElementById('seconds');
const start = document.getElementById('start');
const stop = document.getElementById('stop');
const reset = document.getElementById('reset');

let second = 0;
let timer;
let timerRun = false;
start.addEventListener('click', function () {
    if (!timerRun) {
        timerRun = true;
        seconds.style.fontFamily = 'fantasy'

        second++;
        seconds.innerHTML = second;

        timer = setInterval(() => {
            second++;
            seconds.innerHTML = second;
        }, 1000);
    }
});


stop.addEventListener('click', function () {
    clearInterval(timer);
    timerRun = false;
});

reset.addEventListener('click', function () {
    clearInterval(timer);
    second = 0;
    seconds.innerHTML = second;
    timerRun = false;
});



