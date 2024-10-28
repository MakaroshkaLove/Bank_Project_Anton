const burgerMenu = document.getElementById('burger-menu');
const nav = document.getElementById('nav');

burgerMenu.addEventListener('click', () => {
    nav.classList.toggle('active');
});
