// --- CONFIGURACIÓN Y ESTADO INICIAL ---
let estado = {
    fase: 'exploracion',
    vida: 0,
    poder: 0,
    estrategia: 0
};

// --- NAVEGACIÓN ENTRE FASES ---
function cambiarFase(nuevaFase) {
    document.querySelectorAll('.fase').forEach(f => f.classList.remove('activa'));
    document.getElementById('fase-' + nuevaFase).classList.add('activa');
    estado.fase = nuevaFase;
    console.log("Cambiando a fase: " + nuevaFase);
}

// --- LÓGICA DE RECOLECCIÓN (Fase Persecución) ---
function recolectar(tipo) {
    if (estado[tipo] < 10) {
        estado[tipo]++;
        document.getElementById(tipo).innerText = 
            tipo.charAt(0).toUpperCase() + tipo.slice(1) + ": " + estado[tipo] + "/10";
        
        // Efecto visual: pequeño destello o sonido al recoger
        console.log("Recogido: " + tipo + " -> Total: " + estado[tipo]);
    }
}

// --- TRANSICIÓN A DUELO ---
function terminarPersecucion() {
    // Calculamos valores finales para el Duelo (basado en lo recogido)
    localStorage.setItem('finalVida', estado.vida * 10);
    localStorage.setItem('finalPoder', estado.poder * 10);
    localStorage.setItem('finalEstrategia', estado.estrategia * 10);
    
    cambiarFase('duelo');
    iniciarDuelo();
}

// --- LÓGICA DEL DUELO (Simulación Monster Hunter) ---
function iniciarDuelo() {
    let vida = localStorage.getItem('finalVida');
    let poder = localStorage.getItem('finalPoder');
    console.log("Iniciando duelo con: " + vida + " HP y " + poder + " MP");
    
    // Aquí actualizarás las barras de progreso en el DOM
    document.getElementById('vida-jugador').value = vida;
}

// --- EVENTOS INICIALES ---
document.addEventListener('DOMContentLoaded', () => {
    console.log("Juego cargado. Estado inicial: Exploración.");
    // Aquí puedes iniciar el bucle de renderizado 3D si usas Three.js
});
