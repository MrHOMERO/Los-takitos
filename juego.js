// 1. Guardar esencia elegida (usada en pantalla2.html)
function elegirEsencia(esencia) {
    localStorage.setItem('esencia', esencia);
    window.location.href = 'pantalla3.html';
}

// 2. Guardar nombre y saltar al mapa (usada en pantalla3.html)
function confirmarNombre() {
    let nombre = document.getElementById('input-nombre').value;
    
    if(nombre && nombre.trim() !== "") {
        localStorage.setItem('nombre', nombre);
        window.location.href = 'pantalla4.html';
    } else {
        alert("Por favor, ingresa tu nombre.");
    }
}
