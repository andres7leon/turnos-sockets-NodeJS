var socket = io();
var label = $("#lblNuevoTicket")


socket.on('connect', function() {
    console.log("conectadooo");
});

socket.on('disconnect', function() {
    console.log("desconectado");
});

socket.on('estadoActual', function(resp) {
    label.text(resp.actual);
});

$('button').on('click', function() {
    socket.emit('siguienteTicket', null, function(sigueenteTicket) {
        label.text(sigueenteTicket);
    });
});