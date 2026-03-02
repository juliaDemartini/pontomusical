const mainLogin = document.getElementById('main-login');
const cardLogin = document.getElementById('card-login');
const mode = document.getElementById('mode_icon');

mode.addEventListener('click', () => {
    mainLogin.classList.toggle('dark'); // Alternar a classe "dark" no #main-login
    cardLogin.classList.toggle('dark'); // Alternar a classe "dark" no #card-login

    if (mode.classList.contains('fa-moon')) {
        mode.classList.remove('fa-moon');
        mode.classList.add('fa-sun');
    } else {
        mode.classList.add('fa-moon');
        mode.classList.remove('fa-sun');
    }
});