document.getElementById('modoEscuro').addEventListener('change', function() {
    if (this.checked) {

        document.body.classList.add('modo-escuro');
    } else {

        document.body.classList.remove('modo-escuro');
    }
});