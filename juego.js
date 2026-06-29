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
        alert("Escribe un nombre para continuar.");
    }
}
