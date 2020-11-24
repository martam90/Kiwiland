    const navOpen = document.querySelector('.nav-open');

    navOpen.addEventListener('click', () => {
    const nav = document.querySelector('.navbar-nav');
    navOpen.classList.toggle('active');
    if (navOpen.classList.contains('active')) {
        nav.classList.add('active');
        document.body.classList.add('menu-active');
    } else {
        nav.classList.remove('active');
        document.body.classList.remove('menu-active');
    }
});

