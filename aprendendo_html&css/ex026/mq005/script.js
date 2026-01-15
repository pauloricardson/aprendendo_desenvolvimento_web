const btn_menu = document.querySelector('.btn-menu')
const menu = document.querySelector('.menu');

console.log(btn_menu);

btn_menu.addEventListener('click', () => {
    menu.classList.toggle('menu-mostrar')
});
