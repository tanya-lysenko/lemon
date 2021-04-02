document.addEventListener('click', function (e) {
    const condition1 = e.target.href === '#';
    const condition2 = e.target.closest(`[href="#"]`);

    if (condition1 || condition2) {
        e.preventDefault();
    }
});

document.addEventListener('click', function (e) {
    const condition1 = e.target.tagName === 'A';
    const condition2 = e.target.closest('#food');

    if (condition1 && condition2) {
        const card = e.target.closest('li');
        const picture = card.querySelector('.img-box img');

        picture.classList.toggle('scale');
    }
});

document.addEventListener('click', function (e) {
    const condition1 = e.target.tagName === 'A';
    const condition2 = e.target.closest('#food');

    if (condition1 && condition2) {
        return true;
    }

    const pictures = document.querySelectorAll('#food .img-box img');

    for (let picture of pictures) {
        picture.classList.remove('scale');
    }
});