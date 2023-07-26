const urlParams = new URLSearchParams(window.location.search);
const username = urlParams.get('usuario');

const usernameElement = document.querySelector('.header__username');
usernameElement.textContent = username;