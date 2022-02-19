const gameStart = document.querySelector('.game-start');
const gameArea = document.querySelector('.game-area');
const gameOver = document.querySelector('.game-over');
const gameScore = document.querySelector('.game-score');

gameStart.addEventListener('click', onGameStart);

function onGameStart() {
    gameStart.classList.add('hide');

    const wizzard = document.createElement('div');
    wizzard.classList.add('wizzard');
    wizzard.style.top = '200px';
    wizzard.style.left = '200px';
    gameArea.appendChild(wizzard);
}
