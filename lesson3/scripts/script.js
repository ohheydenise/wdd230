const today = new Date();

document.querySelector('#currentyear').textContent = today.getFullYear();
document.querySelector('#lastmodified').textContent = document.lastModified;

// Toggle Hamburger Menu
function toggleMenu() {
    document.querySelector('#navbar').classList.toggle('menu-active')
    document.querySelector('#menu-close').classList.toggle('menu-active')
    document.querySelector('#menu-open').classList.toggle('menu-active')
}

document.querySelector('#hamburger').onclick = toggleMenu;