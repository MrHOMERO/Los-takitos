body { margin: 0; font-family: sans-serif; background: #000; color: #fff; overflow: hidden; }
.fondo-espacio { position: fixed; top: 0; left: 0; width: 100%; height: 100%; z-index: -1; 
    background: url('https://raw.githubusercontent.com/MrHOMERO/Los-takitos/main/pagina1fondo.jpg') no-repeat center center; 
    background-size: cover; }
.pantalla { display: none; text-align: center; padding-top: 50px; height: 100vh; }
.pantalla.activa { display: block; }
.titulo-dorado { color: #FFD700; font-size: 1.8rem; margin-bottom: 20px; }
.boton-jugar { display: block; margin: 15px auto; padding: 15px 30px; background: #FFD700; border: none; border-radius: 5px; font-weight: bold; cursor: pointer; }
.texto-intro { color: white; padding: 40px; font-size: 1.2rem; }
.personaje-animado { width: 150px; border-radius: 50%; border: 4px solid #FFD700; animation: flotar 3s ease-in-out infinite; margin-bottom: 20px; }
.mapa-caminos { display: flex; flex-direction: column; align-items: center; gap: 15px; margin-top: 20px; }
.punto { width: 50px; height: 50px; border-radius: 50%; background: #FFD700; border: none; font-weight: bold; cursor: pointer; }
input { padding: 10px; border-radius: 5px; border: none; width: 80%; margin-bottom: 10px; }
@keyframes flotar { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-20px); } }
