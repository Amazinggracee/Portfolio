const menu = document.querySelector('.menu-list');
const hamburger = document.querySelector('.btn-hamburger');
const closeIcon = document.querySelector('.closeIcon');
const burgerIcon = document.querySelector('.burgerIcon');

function toggleMenu() {
  if (menu.classList.contains('showMenu')) {
    menu.classList.remove('showMenu');
    closeIcon.style.display = 'none';
    burgerIcon.style.display = 'block';
  } else {
    menu.classList.add('showMenu');
    closeIcon.style.display = 'block';
    burgerIcon.style.display = 'none';
  }
}

hamburger.addEventListener('click', toggleMenu);
