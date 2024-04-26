// funcion para abrir el boton hamburgesa
$(document).ready(function() {
        // Agrega un evento de clic al botón de colapso 
        $('.navbar-toggler').click(function() {
            // Obtiene el ID del área de colapso 
            var target = $(this).data('bs-target');
            
            // Alternar la visibilidad del área de colapso
            $(target).toggleClass('show');
        });
    });
