// script.js
document.addEventListener('DOMContentLoaded', () => {
    const btnES = document.getElementById('btn-es');
    const btnEN = document.getElementById('btn-en');

    function changeLanguage(language) {
        const elements = document.querySelectorAll('[data-text-es], [data-text-en]');
        elements.forEach(element => {
            element.textContent = element.getAttribute(`data-text-${language}`);
        });
    }

    btnES.addEventListener('click', () => changeLanguage('es'));
    btnEN.addEventListener('click', () => changeLanguage('en'));

    // Cambiar el idioma por defecto al cargar la página (opcional)
    changeLanguage('es'); // Puedes cambiar a 'en' si deseas que el inglés sea el idioma por defecto
});
