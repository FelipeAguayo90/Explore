const burger = document.getElementById('burger-menu');
const nav = document.getElementById('nav-menu');
burger.addEventListener('click', () => {
  nav.style.display = nav.style.display === 'block' ? 'none' : 'block';
});
