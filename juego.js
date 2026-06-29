let estado = { vida: 0, poder: 0, estrategia: 0 };

function cambiarFase(id) {
    document.querySelectorAll('.pantalla').forEach(p => p.classList.remove('activa'));
    document.getElementById('fase-' + id).classList.add('activa');
}

function seleccionarEsencia(esencia) {
    localStorage.setItem('esenciaJugador', esencia);
    console.log("Esencia seleccionada: " + esencia);
    cambiarFase('exploracion');
}

function recolectar(tipo) {
    if (estado[tipo] < 10) {
        estado[tipo]++;
        document.getElementById(tipo).innerText = estado[tipo];
    }
}

function terminarPersecucion() {
    localStorage.setItem('finalVida', estado.vida * 10);
    alert("¡Fase completada! Iniciando duelo con " + (estado.vida * 10) + "% de vida.");
    // Aquí redirigirías a la fase de duelo
}

// Control táctil para rotar personaje
let rotacionY = 0;
document.addEventListener('touchmove', (e) => {
    const cont = document.querySelector('.contenedor-personaje');
    if(cont) {
        rotacionY += 5;
        cont.style.transform = `rotateY(${rotacionY}deg)`;
    }
});
