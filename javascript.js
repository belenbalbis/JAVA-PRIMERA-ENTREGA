var lastMeetUpDate = new Date("Feb 05, 2023 15:26:25").getTime();
var updateCountUpEverySecond = setInterval(function () {
  var now = new Date().getTime();
  var timeElapsed = lastMeetUpDate - now;
  var days = Math.floor(timeElapsed / (1000 * 60 * 60 * 24));
  var hours = Math.floor(
    (timeElapsed % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  var minutes = Math.floor((timeElapsed % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((timeElapsed % (1000 * 60)) / 1000);
  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;
}, 1000);

window.onload = function () {
  document.getElementsByClassName("container")[0].className =
    "container animated rollIn";
};

//PRUEBA
// function edadDeIngreso() {
//   let edad = parseInt(prompt("Ingresá tu edad"));
//   let esMayorDeEdad = edad > 17;

//   if (esMayorDeEdad) {
//     alert("Se viene lo bueno!");
//   } else {
//     alert("Te esperamos la próxima!");
//   }
// }
// edadDeIngreso();

//SEGUNDA PRE ENTREGA
//OBJETO
const entrada1 = {
  tipo: "VIP",
  precio: 100,
  ubicación: "Platea",
};

const entrada2 = {
  tipo: "Campo",
  precio: 80,
  ubicación: "Campo",
};

const entrada3 = {
  tipo: "General",
  precio: 50,
  ubicación: "Deriva",
};

console.log(entrada1);
console.log(entrada2);
console.log(entrada3);

//ARRAY
const entradas = ["VIP", "Campo", "General"];
alert("Recordá que nuestras entradas son " + entradas);

//METODO
//find()

let entradaSeleccionada = prompt("Ingresá la entrada que querés comprar");
alert(
  "La entrada seleccionada es " +
    entradas.find((entrada) => entrada === entradaSeleccionada)
);

//PRIMERA PRE ENTREGA
//CICLO CON CONDICIONAL
for (let i = 1; i <= 17; i++) {
  let edad = prompt("Ingresá tu edad");
  if (edad <= 17) {
    alert("Te esperamos la próxima!");
    break;
  } else {
    alert("Se viene lo bueno!");

    //FUNCTION PAGO TOTAL
    function pagoTotal() {
      const precio = 100;
      let entradas = parseInt(prompt("Ingrese numero de entradas"));
      let total = precio * entradas;
      alert("El total a pagar es " + total + " U$S");
    }
    pagoTotal();
    break;
  }
}
