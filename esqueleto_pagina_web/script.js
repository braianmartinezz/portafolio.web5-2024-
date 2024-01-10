document.addEventListener('DOMContentLoaded', function () {
    // Función para cambiar el contenido de la sección 1 al hacer clic en un botón
    document.getElementById('cambiarContenido').addEventListener('click', function () {
        document.getElementById('contenidoSeccion1').innerHTML = '¡Nuevo contenido de la sección 1!';
    });
});
