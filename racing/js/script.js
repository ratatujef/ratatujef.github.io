const input = document.querySelector('input'),
    speedUp = document.querySelector('.speed-up'),
    speedDown = document.querySelector('.speed-down');
const score = document.querySelector(".score"),
    gameArea = document.querySelector(".gameArea"),
    start = document.querySelector(".start"),
    car = document.createElement("div"),
    [up, right, left, down] = document.querySelectorAll('.arrow'),
    keys = {
        ArrowLeft: false,
        ArrowRight: false,
        ArrowUp: false,
        ArrowDown: false,
    },
    setting = {
        score: 0,
        speed: 5,
        start: false,
        traffic: 3,
    };
const getQuantityElements = (elementHeight) => {
    return gameArea.offsetHeight / elementHeight + 1;
};

function changeSpeed(btn) {
    btn.addEventListener('click', () => {
        btn === speedUp ? setting.speed++ : setting.speed--;
        input.value = setting.speed;
    });
}

function startGame() {
    start.classList.toggle("hide");
    setting.start = true;
    gameArea.textContent = "";
    score.style.top = '10px';
    car.style.left = gameArea.offsetWidth / 2 - 25 + 'px';
    car.style.top = gameArea.offsetHeight - 100 - 10 + 'px';

    for (let i = 0; i < getQuantityElements(75); i++) {
        const line = document.createElement("div");
        line.classList.add("line");
        line.style.top = i * 75 + "px";
        gameArea.appendChild(line);
    }
    for (let i = 0; i < getQuantityElements(100 * setting.traffic); i++) {
        const enemy = document.createElement('div');
        enemy.classList.add('enemy');
        enemy.y = -100 * setting.traffic * (i + 1);
        enemy.left = Math.floor(Math.random() * (gameArea.offsetWidth - 50));
        enemy.style.left = enemy.left + 'px';
        enemy.style.top = enemy.y + 'px';
        enemy.style.background = ' url(./image/enemy.png) center / cover no-repeat';
        gameArea.appendChild(enemy);

    }
    gameArea.appendChild(car);
    car.classList.add("car");
    setting.x = car.offsetLeft;
    setting.y = car.offsetTop;
    car.rect = car.getBoundingClientRect();
    requestAnimationFrame(playGame);
}

function playGame() {
    if (setting.start) {
        setting.score += setting.speed / 30;
        score.textContent = `SCORE: ${setting.score.toFixed()} `;
        moveRoad();
        moveEnemies();
        if (keys.ArrowLeft && setting.x > 5) {
            setting.x -= setting.speed / 2;
        }
        if (keys.ArrowRight && setting.x < gameArea.offsetWidth - (car.offsetWidth + 5)) {
            setting.x += setting.speed / 2;
        }
        if (keys.ArrowUp && setting.y > 5) {
            setting.y -= setting.speed / 2;
        }
        if (
            keys.ArrowDown &&
            setting.y < gameArea.offsetHeight - car.offsetHeight - 5
        ) {
            setting.y += setting.speed;
        }

        car.style.left = setting.x + "px";
        car.style.top = setting.y + "px";
        requestAnimationFrame(playGame);

    }
}

function startRun(e) {
    e.preventDefault();
    keys[e.key] = true;

}

function stopRun(e) {
    e.preventDefault();
    keys[e.key] = false;
}

function moveRoad() {
    let lines = document.querySelectorAll('.line');
    lines.forEach(el => {
        let linePosition = el.offsetTop;
        el.style.top = linePosition + setting.speed * 1.5 + 'px';
        if (el.offsetTop >= gameArea.offsetHeight) {
            el.style.top = -75 + 'px';
        }
    });
}

function moveEnemies() {
    document.querySelectorAll('.enemy').forEach(el => {
        let enemyRect = el.getBoundingClientRect(),
            carRect = car.getBoundingClientRect();
        if (enemyRect.bottom + 5 >= carRect.top &&
            enemyRect.right >= 10 + carRect.left &&
            enemyRect.left + 5 <= carRect.right &&
            enemyRect.top + 5 <= carRect.bottom) {
            console.error('kick');
            setting.start = false;
            start.classList.toggle("hide");
            score.style.top = '30%';
        }
        el.style.top = el.offsetTop + setting.speed / 2 + "px";
        if (el.offsetTop >= gameArea.offsetHeight) {
            el.style.top = -100 + "px";
            el.left = Math.random() * (gameArea.offsetWidth - 50);
            el.style.left = el.left + 'px';
            el.rect = el.getBoundingClientRect();
        }

    });
}

function touchMove(arrow) {
    arrow.addEventListener('touchstart', () => {
        if (arrow === up) {
            keys.ArrowUp = true;
        }
        if (arrow === right) {
            keys.ArrowRight = true;
        }
        if (arrow === down) {
            keys.ArrowDown = true;
        }
        if (arrow === left) {
            keys.ArrowLeft = true;
        }
    });
    arrow.addEventListener('touchend', () => {

        keys.ArrowUp = false;
        keys.ArrowRight = false;
        keys.ArrowLeft = false;
        keys.ArrowDown = false;
    });
}
touchMove(up);
touchMove(right);
touchMove(left);
touchMove(down);
changeSpeed(speedUp);
changeSpeed(speedDown);

start.addEventListener("click", startGame);
document.addEventListener("keydown", startRun);
document.addEventListener("keyup", stopRun);