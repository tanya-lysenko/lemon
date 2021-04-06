const FRICTION = 1 / 30;

let lFollowX, lFollowY, x, y;

lFollowX = 0;
lFollowY = 0;
x = 0;
y = 0;

function moveBackground() {
    x += (lFollowX - x) * FRICTION;
    y += (lFollowY - y) * FRICTION;

    const translate = 'translate(' + x + 'px, ' + y + 'px) scale(1.1)';

    const image = document.querySelector('#bananas-foster .bg');

    image.style.transform = translate;

    window.requestAnimationFrame(moveBackground);
}

moveBackground();

function moveMouse(e) {
    if (!e.target.closest('#bananas-foster .img-box')) return true;

    let documentWidth = document.documentElement.clientWidth;
    let documentHeight = document.documentElement.clientHeight;

    let tempWidth = documentWidth / 2 - e.clientX;
    let tempHeight = documentHeight / 2 - e.clientY;

    let lMouseX = Math.max(-100, Math.min(100, tempWidth));
    let lMouseY = Math.max(-100, Math.min(100, tempHeight));

    lFollowX = (20 * lMouseX) / 100;
    lFollowY = (10 * lMouseY) / 100;
}

document.addEventListener('mousemove', moveMouse);
document.addEventListener('click', moveMouse);