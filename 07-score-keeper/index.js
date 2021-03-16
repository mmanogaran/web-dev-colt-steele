// let maxScoreValue = 1;
let isGameOver = false;
let maxScore = 3;
const maxScoreSelector = document.querySelector('#max-score');
const resetBtn = document.querySelector('#reset');

const p1 = {
    score: 0,
    display: document.querySelector(`.display.p1`),
    button: document.querySelector(`.plus.p1`)
};

const p2 = {
    score: 0,
    display: document.querySelector(`.display.p2`),
    button: document.querySelector(`.plus.p2`)
};

function increaseScore(player, other) {
    if (!isGameOver) {
        player.score += 1;
        player.display.innerText = player.score;
        if (player.score >= maxScore) {
            isGameOver = true;
            player.display.classList.add('has-text-success');
            other.display.classList.add('has-text-danger');

            player.button.disabled = true;
            other.button.disabled = true;
        }
    }
}

function resetScore() {
    isGameOver = false;
    for (let player of [p1, p2]) {
        player.score = 0;
        player.display.innerText = 0;
        player.display.classList.remove('has-text-success', 'has-text-danger');
        player.button.disabled = false;
    }
}

resetBtn.addEventListener('click', resetScore);
maxScoreSelector.addEventListener('change', function () {
    maxScore = parseInt(this.value);
    resetScore();
});

p1.button.addEventListener('click', function () {
    increaseScore(p1, p2)
});
p2.button.addEventListener('click', function () {
    increaseScore(p2, p1)
});