function navigateTo(section) {
    // Navigate to different sections based on the image clicked
    switch (section) {
        case 'pareja':
            window.location.href = '#pareja';
            break;
        case 'embarazo':
            window.location.href = '#embarazo';
            break;
        case 'bebe':
            window.location.href = '#bebe';
            break;
    }
}

function sendToWhatsapp(){
    let number = "+523315473853";

    let mensaje = "Hola, te escribo para agendar una cita, abajo te dejo mis datos: \n";
    let paquete = document.getElementById('paquete-seleccionado').value;
    let nombre = document.getElementById('nombre').value;
    let telefono = document.getElementById('telefono').value;
    let fecha = document.getElementById('fecha').value;
    let codigo = document.getElementById('codigo-descuento').value;

    var url = "https://wa.me/"+number+"?text="
    + mensaje+"%0a"
    +"Paquete seleccionado: "+paquete+"%0a"
    +"Nombre: "+nombre+"%0a"
    +"Teléfono: "+telefono+"%0a"
    +"Fecha: "+fecha+"%0a"
    +"Código de descuento: "+codigo+"%0a%0a";

    window.open(url, '_blank').focus();
}

function sendToWhatsapp2(){
    let number = "+523315473853";

    let mensaje = "Hola, te escribo desde tu pagina web! \n";

    var url = "https://wa.me/"+number+"?text="
    + mensaje+"%0a%0a";

    window.open(url, '_blank').focus();
}

$(document).ready(function() {
    $('#paquetes').hide();
    $('#formulario-reserva').hide();

    $('#reservar-cita').click(function() {
        $('#paquetes').slideToggle();
    });

    $('.paquete').click(function() {
        $('.paquete').removeClass('seleccionado');
        $(this).addClass('seleccionado');
        var paqueteSeleccionado = $(this).find('h3').text();
        $('#paquete-seleccionado').val(paqueteSeleccionado);
        $('#formulario-reserva').slideDown();
    });        
});