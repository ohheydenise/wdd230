// Sets year for the footer
const today = new Date();
document.querySelector('#currentyear').textContent = today.getFullYear();

// Sets last modified
document.querySelector('#lastmodified').textContent = document.lastModified;