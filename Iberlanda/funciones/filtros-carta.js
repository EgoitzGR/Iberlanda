document.addEventListener('DOMContentLoaded', () => {
    const secciones = document.querySelectorAll('details.seccion-menu');
    
    if (secciones.length === 0) return;

    // Crear contenedor de filtros
    const filtrosContenedor = document.createElement('div');
    filtrosContenedor.className = 'filtros-carta';
    
    // Botón para mostrar todos
    const btnTodos = document.createElement('button');
    btnTodos.className = 'btn-filtro active';
    btnTodos.textContent = 'Todos';
    btnTodos.onclick = () => filtrar('todos');
    filtrosContenedor.appendChild(btnTodos);

    secciones.forEach(seccion => {
        const titulo = seccion.querySelector('summary').textContent;
        const btn = document.createElement('button');
        btn.className = 'btn-filtro';
        btn.textContent = titulo;
        btn.onclick = () => filtrar(titulo);
        filtrosContenedor.appendChild(btn);
    });

    // Insertar después del H1 o antes del primer details
    const primerDetails = secciones[0];
    primerDetails.parentNode.insertBefore(filtrosContenedor, primerDetails);

    function filtrar(categoria) {
        // Actualizar botones
        document.querySelectorAll('.btn-filtro').forEach(btn => {
            btn.classList.remove('active');
            if (btn.textContent === categoria || (categoria === 'todos' && btn.textContent === 'Todos')) {
                btn.classList.add('active');
            }
        });

        // Filtrar secciones
        secciones.forEach(seccion => {
            const titulo = seccion.querySelector('summary').textContent;
            if (categoria === 'todos') {
                seccion.style.display = 'block';
                seccion.open = true;
            } else if (titulo === categoria) {
                seccion.style.display = 'block';
                seccion.open = true; // Abrir la seleccionada
            } else {
                seccion.style.display = 'none';
            }
        });
    }
});
