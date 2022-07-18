/* ---Declaring variables */
const openbtn = document.querySelector('.open');
const closebtn = document.querySelector('.close');
const menu = document.querySelector('.curtain');
const links = document.querySelectorAll('.menu-link');

/* ---Triggers the menu to open-- */
openbtn.addEventListener('click', () => {
  menu.style.height = '100%';
  document.body.style.overflow = 'hidden';
});

/* ----Trigers the menu to close----- */

closebtn.addEventListener('click', () => {
  menu.style.height = '0';
  document.body.style.overflow = 'visible';
});

links.forEach((link) => {
  link.addEventListener('click', () => {
    menu.style.height = '0';
    document.body.style.overflow = 'visible';
  });
});
