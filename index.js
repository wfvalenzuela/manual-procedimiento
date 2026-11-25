document.addEventListener("DOMContentLoaded", () => {
  const botonesContacto = document.querySelectorAll(".js-alerta-contacto");
  const botonesFormularios = document.querySelectorAll(".js-alerta-formularios");

  botonesContacto.forEach((boton) => {
    boton.addEventListener("click", (e) => {
      e.preventDefault();
      alert(
        "CONTACTO\n" +
        "Cdr. Marcelo Giñez\n" +
        "Área: Administración\n" +
        "Correo: mginez@afinoa.org.ar\n" +
        "Teléfono: +54 381 604 7659"
      );
    });
  });

  botonesFormularios.forEach((boton) => {
    boton.addEventListener("click", (e) => {
      e.preventDefault();
      alert(
        "FORMULARIOS Y DOCUMENTOS\n" +
        "Puedes descargarlos directamente desde la sección DOCUMENTOS Y FORMULARIOS en la página."
      );
    });
  });
});