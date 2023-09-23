const navMenu = document.getElementById('navMenu');
const navToggle = document.getElementById('navToggle');
const navClose = document.getElementById('navClose');
const overlay = document.getElementById('overlay');

if(navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show');
        overlay.style.display = "block";
    });
}

if(navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show');
        overlay.style.display = "none";
    });
}

