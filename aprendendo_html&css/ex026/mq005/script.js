const btn_menu = document.querySelector('.btn-menu')
const menu = document.querySelector('.menu');

btn_menu.addEventListener('click', () => {
    menu.classList.toggle('menu-mostrar')
});
