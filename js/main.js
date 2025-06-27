const burger = document.getElementById('burger-menu');
const nav = document.getElementById('nav-menu');
const overlay = document.getElementById('nav-overlay');

burger.addEventListener('click', () => {
  nav.classList.add('open');
  overlay.classList.add('active');
});

overlay.addEventListener('click', () => {
  nav.classList.remove('open');
  overlay.classList.remove('active');
});
