window.addEventListener('DOMContentLoaded', ()=>{
    const menu = document.querySelector('.menu'),
          hamburger = document.querySelector('.hamburger'),
          menuItem = document.querySelectorAll('.menu_item');

    hamburger.addEventListener('click', ()=>{
        menu.classList.toggle('menu_active');
    });

    hamburger.addEventListener('click', ()=>{
        hamburger.classList.toggle('hamburger_active');
    });

    menuItem.forEach(item =>{
        item.addEventListener('click', ()=>{
            menu.classList.toggle('menu_active');
            hamburger.classList.toggle('hamburger_active');
        });
    });
});