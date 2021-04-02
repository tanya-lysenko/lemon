const menuButton = document.querySelector('#header .menu');
const menuList = document.querySelector('#header nav');

menuButton.addEventListener('click', function () {
    menuList.classList.toggle('open');
});

const mobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

document.addEventListener('mouseover', function (e) {
    const documentWidth = Number(document.documentElement.clientWidth);

    if (mobile || documentWidth < 640) {
        return true;
    }

    const condition1 = e.target.classList.contains('.submenu-list.open');
    const condition2 = e.target.closest('.submenu-list.open');

    if (condition1 || condition2) {
        return true;
    }

    const openedSubmenu = document.querySelector('.submenu-list.open');

    if (openedSubmenu) {
        openedSubmenu.classList.remove('open');
    }
});

document.addEventListener('mouseover', function (e) {
    const documentWidth = Number(document.documentElement.clientWidth);

    if (mobile || documentWidth < 640) {
        return true;
    }

    if (e.target.classList.contains('submenu')) {
        const list = e.target.closest('.submenu-list');

        list.classList.add('open');
    }
});

document.addEventListener('click', function (e) {
    const documentWidth = Number(document.documentElement.clientWidth);

    if (mobile || documentWidth < 640) {
        if (e.target.classList.contains('submenu')) {
            e.preventDefault();

            const list = e.target.closest('.submenu-list');

            list.classList.toggle('open');
        }
    }
});