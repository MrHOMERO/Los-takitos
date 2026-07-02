/**
 * Lógica principal del juego - Gestión de elecciones y persistencia
 */

// 1. Guardar esencia y personaje elegido
// Esta función es llamada desde pantalla2.html por los botones
function elegirEsencia(esencia, urlImagen) {
    // Guardamos la esencia para la lógica del juego
    localStorage.setItem('esencia', esencia);
    
    // Guardamos la ruta de la imagen para mostrarla en las siguientes pantallas
    localStorage.setItem('imagenPersonaje', urlImagen);
    
    // Redirección a la siguiente pantalla del flujo
    window.location.href = 'pantalla3.html';
}

// 2. Guardar nombre y saltar al mapa
// Esta función es llamada desde pantalla3.html o pantalla4.html
function confirmarNombre() {
    let nombre = document.getElementById('input-nombre').value;
    
    if(nombre && nombre.trim() !== "") {
        localStorage.setItem('nombre', nombre);
        window.location.href = 'pantalla4.html';
    } else {
        alert("Por favor, ingresa tu nombre.");
    }
}

// 3. Función auxiliar para mostrar el personaje en cualquier pantalla
// Solo necesitas llamar a esta función cuando la página cargue en pantalla3.html o posteriores
function aplicarImagenPersonaje() {
    const imagen = localStorage.getItem('imagenPersonaje');
    const imgElemento = document.getElementById('img-personaje-usuario');
    
    // Verificamos que el elemento exista antes de intentar cambiar el src
    if(imgElemento && imagen) {
        imgElemento.src = imagen;
    }
}
// --- Código de Audio (Añadir al final de juego.js) ---
const audioFondo = new Audio('https://github.com/MrHOMERO/Los-takitos/raw/cfa35cb9c92150f6720f032b7fd2612c5e6ec4f5/fondo%20del%20juego.mp3');
audioFondo.loop = true;

// Función para iniciar la música tras la primera interacción del usuario
function inicializarMusica() {
    audioFondo.play().catch(e => console.log("Esperando interacción..."));
    document.removeEventListener('click', inicializarMusica);
}

// Escuchamos el primer click en cualquier parte para arrancar el audio
document.addEventListener('click', inicializarMusica);

// Función para detener la música al entrar a una misión
function detenerMusica() {
    audioFondo.pause();
    audioFondo.currentTime = 0;
}
