// Guardar esencia elegida y saltar a pantalla 3
function elegirEsencia(esencia) {
    localStorage.setItem('esencia', esencia);
    window.location.href = 'pantalla3.html';
}

// Guardar nombre y saltar al mapa (pantalla 4)
function confirmarNombre() {
    let nombre = document.getElementById('input-nombre').value;
    if(nombre) {
        localStorage.setItem('nombre', nombre);
        window.location.href = 'pantalla4.html';
    } else {
        alert("Por favor, ingresa tu nombre.");
    }
}
