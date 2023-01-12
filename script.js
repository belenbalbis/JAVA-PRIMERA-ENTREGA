//TERCERA ENTREGA DOM Y EVENTO DEL MOUSE

const botonModalCentro = document.querySelector("#boton-modal-centro");
const modalCentro = document.querySelector("#modal-centro");
const cerrarModalCentro = document.querySelector("#cerrar-modal-centro");

botonModalCentro.addEventListener("click", () => {
  modalCentro.classList.add("active");
});

cerrarModalCentro.addEventListener("click", () => {
  modalCentro.classList.remove("active");
});
