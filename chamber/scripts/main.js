const today = new Date();

document.querySelector('#currentyear').innerHTML = today.getFullYear();
document.querySelector('#lastmodified').innerHTML = document.lastModified;

function toggleMenu() {
    document.querySelector('.navbar').classList.toggle('menu-active')
    document.querySelector('.closed').classList.toggle('menu-active')
    document.querySelector('.open').classList.toggle('menu-active')
}

document.querySelector('.hamburger').addEventListener('click', toggleMenu);