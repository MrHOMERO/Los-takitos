/**
 * Lógica principal del juego - Gestión de elecciones y persistencia
 */

// --- 1. GESTIÓN DE AUDIO (Persistente) ---
const audioFondo = new Audio('https://github.com/MrHOMERO/Los-takitos/raw/cfa35cb9c92150f6720f032b7fd2612c5e6ec4f5/fondo%20del%20juego.mp3');
audioFondo.loop = true;

// Función llamada desde el botón de acceso en index.html
function inicializarMusica() {
    localStorage.setItem('musicaPermitida', 'true');
    audioFondo.play().catch(e => console.log("Audio esperando interacción"));
}

// Al cargar CUALQUIER pantalla, reanudamos la música si el usuario ya accedió
window.addEventListener('load', () => {
    if (localStorage.getItem('musicaPermitida') === 'true') {
        audioFondo.play().catch(e => console.log("Reanudando música..."));
    }
});

// Llamar a esta función al entrar a las misiones
function detenerMusica() {
    localStorage.removeItem('musicaPermitida'); 
    audioFondo.pause();
    audioFondo.currentTime = 0;
}


// --- 2. GESTIÓN DE PERSONAJE Y DATOS (Tu lógica original) ---

function elegirEsencia(esencia, urlImagen) {
    localStorage.setItem('esencia', esencia);
    localStorage.setItem('imagenPersonaje', urlImagen);
    window.location.href = 'pantalla3.html';
}

function confirmarNombre() {
    let nombre = document.getElementById('input-nombre').value;
    
    if(nombre && nombre.trim() !== "") {
        localStorage.setItem('nombre', nombre);
        window.location.href = 'pantalla4.html';
    } else {
        alert("Por favor, ingresa tu nombre.");
    }
}

function aplicarImagenPersonaje() {
    const imagen = localStorage.getItem('imagenPersonaje');
    const imgElemento = document.getElementById('img-personaje-usuario');
    
    if(imgElemento && imagen) {
        imgElemento.src = imagen;
    }
        }
