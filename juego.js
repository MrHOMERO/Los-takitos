function cambiarFase(id) {
    document.querySelectorAll('.pantalla').forEach(p => p.classList.remove('activa'));
    document.getElementById('pantalla-' + id).classList.add('activa');
}

function elegirEsencia(esencia) {
    localStorage.setItem('esencia', esencia);
    cambiarFase('nombre');
}

function confirmarNombre() {
    let nombre = document.getElementById('input-nombre').value;
    if(nombre) {
        localStorage.setItem('nombre', nombre);
        cambiarFase('mapa');
    } else {
        alert("Por favor, ingresa tu nombre.");
    }
}

function iniciarNivel(n) {
    alert("Iniciando Nivel: " + n);
    // Aquí conectarás la fase de exploración 3D en el futuro
}
