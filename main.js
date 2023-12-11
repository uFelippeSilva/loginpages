document.addEventListener('DOMContentLoaded', function () {
    const openLoginFormBtn = document.getElementById('openLoginFormBtn');
    const wrapper = document.getElementById('loginWrapper');

    openLoginFormBtn.addEventListener('click', function () {
        wrapper.style.display = 'flex';
    });

    const closeLoginFormBtn = document.querySelector('.icon-close');
    closeLoginFormBtn.addEventListener('click', function () {
        wrapper.style.display = 'none';
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.querySelector('form');

    loginForm.addEventListener('submit', function (event) {
        const emailInput = document.getElementById('email');
        const passwordInput = document.getElementById('password');

        // Validação do email sem caracteres especiais
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!emailRegex.test(emailInput.value)) {
            alert('Email inválido. Certifique-se de que não há caracteres especiais.');
            event.preventDefault(); // Impede o envio do formulário
            return;
        }

        // Validação da senha com no mínimo 6 caracteres
        if (passwordInput.value.length < 6) {
            alert('A senha deve ter no mínimo 6 caracteres.');
            event.preventDefault(); // Impede o envio do formulário
            return;
        }

        // Se todas as validações passarem, o formulário será enviado normalmente
    });
});

const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');

const aboutBtn = document.getElementById('aboutBtn');
const aboutContainer = document.getElementById('aboutContainer');
const closeAboutBtn = document.getElementById('closeAboutBtn');

aboutBtn.addEventListener('click', () => {
    aboutContainer.style.display = 'flex';
});

closeAboutBtn.addEventListener('click', () => {
    aboutContainer.style.display = 'none';
});