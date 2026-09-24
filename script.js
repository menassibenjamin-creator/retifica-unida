const menuBtn = document.getElementById('menuBtn');
const nav = document.getElementById('nav');

menuBtn.addEventListener('click', () => {
  nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
});

document.querySelectorAll('#nav a').forEach(link => {
  link.addEventListener('click', () => {
    if (window.innerWidth <= 850) {
      nav.style.display = 'none';
    }
  });
});

document.getElementById('year').textContent = new Date().getFullYear();
