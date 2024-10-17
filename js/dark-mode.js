const btnDark = document.querySelector('.btn-dark-mode');
let isSpanish = false; // Variable para controlar el idioma

btnDark.addEventListener('click', () => {
    console.log('diste click');
    document.body.classList.toggle('dark-mode');

    if (document.body.classList.contains('dark-mode')) {
        btnDark.innerHTML = isSpanish ? `
        <i class="far fa-sun"></i>
        Modo Claro
        ` : `
        <i class="far fa-sun"></i>
        Light Mode
        `;
    } else {
        btnDark.innerHTML = isSpanish ? `
        <i class="far fa-moon"></i>
        Modo Oscuro
        ` : `
        <i class="far fa-moon"></i>
        Dark Mode
        `;
    }

    // Cambiar el idioma al final del clic
    isSpanish = !isSpanish;
});
