// Uso de Tooltips
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

// Alerta al clickear Enviar
$(document).ready(function(){
  $("#enviarCorreo").click(function(){
    alert("El correo fue enviado correctamente...");
  });
});