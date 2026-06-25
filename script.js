function cambiarPantalla(de, a) {
    document.getElementById(de).classList.remove('activa');
    document.getElementById(a).classList.add('activa');
    
    // Si pasamos a la introducción, esperamos 4 segundos para seguir
    if(a === 'pantalla-2') {
        setTimeout(() => {
            console.log("Aquí puedes añadir más historia");
        }, 4000);
    }
}
