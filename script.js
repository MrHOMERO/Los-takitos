<script>
    /**
     * FUNCIÓN MAESTRA DE NAVEGACIÓN
     * Esta función oculta todas las pantallas y muestra solo la que indicamos.
     */
    function cambiarPantalla(idDestino) {
        // Selecciona todas las pantallas y quita la clase 'activa'
        document.querySelectorAll('.pantalla').forEach(p => p.classList.remove('activa'));
        // Añade la clase 'activa' a la pantalla destino
        document.getElementById(idDestino).classList.add('activa');
    }

    /**
     * INICIO DEL JUEGO
     * Llama al prólogo y automatiza el salto a la selección.
     */
    function iniciarJuego() {
        cambiarPantalla('pantalla-2');
        
        // 15 segundos después de empezar el prólogo, saltamos a selección
        setTimeout(() => {
            cambiarPantalla('pantalla-3');
        }, 15000); 
    }

    /**
     * ASIGNACIÓN DE PERSONAJE
     * Guarda la elección, describe al personaje y muestra la pantalla de personalización.
     */
    function asignar(tipo) {
        localStorage.setItem('perfilJugador', tipo);
        
        let desc = "";
        if(tipo === 'acumulador') desc = "Eres el estratega del tiempo. Tu meta es la eficiencia y el control.";
        if(tipo === 'guardian') desc = "Tu fuerza reside en los lazos. Proteges lo que importa en este universo.";
        if(tipo === 'equilibrista') desc = "Buscas la armonía. Tu poder es la paz interior y el balance perfecto.";
        
        // Actualiza el texto y salta a la pantalla de personalización
        document.getElementById('descripcion-personaje').innerText = desc;
        cambiarPantalla('pantalla-4');
    }

    /**
     * FINALIZACIÓN
     * Valida el nombre y redirige al juego.
     */
    function finalizarCreacion() {
        let nombre = document.getElementById('nombre-input').value;
        
        if(!nombre || nombre.trim() === "") {
            alert("¡Necesitas un nombre para ser reconocido en la historia!");
            return;
        }
        
        localStorage.setItem('nombreJugador', nombre);
        alert("¡Bienvenido, " + nombre + "! El Camino del Tiempo comienza ahora.");
        
        // Redirección al juego principal
        window.location.href = 'juego_principal.html'; 
    }
</script>
