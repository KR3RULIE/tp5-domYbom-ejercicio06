// const inputMinutos = document.getElementById("minutos");
// const display = document.querySelector("p");
// const btnIniciar = document.getElementById("btnIniciar");
// const btnPausar = document.getElementById("btnPausar");
// const btnReiniciar = document.getElementById("btnReiniciar");

// let tiempoRestante = 0;
// let intervalo = null;
// let tiempoInicial = 0;

// // Función para formatear el tiempo en hh:mm:ss:ms
// function formatearTiempo(ms) {
//   const horas = String(Math.floor(ms / 3600000)).padStart(2, "0");
//   const minutos = String(Math.floor((ms % 3600000) / 60000)).padStart(2, "0");
//   const segundos = String(Math.floor((ms % 60000) / 1000)).padStart(2, "0");
//   const milisegundos = String(ms % 1000).padStart(3, "0");
//   return `${horas}:${minutos}:${segundos}:${milisegundos}`;
// }

// // Botón Iniciar
// btnIniciar.addEventListener("click", () => {
//   // Si ya hay un intervalo, no hacer nada
//   if (intervalo) return;

//   // Si el temporizador no ha comenzado, tomar el valor del input
//   if (!tiempoRestante) {
//     const minutos = parseInt(inputMinutos.value);
//     if (isNaN(minutos) || minutos <= 0) {
//       alert("Ingresa un número válido de minutos.");
//       return;
//     }
//     tiempoRestante = minutos * 60000;
//     tiempoInicial = tiempoRestante;
//   }

//   intervalo = setInterval(() => {
//     tiempoRestante -= 10;
//     if (tiempoRestante <= 0) {
//       clearInterval(intervalo);
//       intervalo = null;
//       tiempoRestante = 0;
//     }
//     display.textContent = formatearTiempo(tiempoRestante);
//   }, 10);
//   inputMinutos.value = "";
// });

// // Botón Pausar
// btnPausar.addEventListener("click", () => {
//   clearInterval(intervalo);
//   intervalo = null;
// });

// // Botón Reiniciar
// btnReiniciar.addEventListener("click", () => {
//   clearInterval(intervalo);
//   intervalo = null;
//   tiempoRestante = 0;
//   tiempoInicial = 0;
//   inputMinutos.value = "";
//   display.textContent = "00:00:00:000";
// });

// MI VERSION

// Funciones
const agregarTiempo = (e) => {
  e.preventDefault();
  // necesito los valores de los input
  const minutos = document.querySelector("#minutos").value;
  const segundos = document.querySelector("#segundos").value;
  // necesito los <p> donde va a ir los valores
  const p1 = document.querySelector("#Minutos");
  const p2 = document.querySelector("#Segundos");
  // necesito asignar los value a las <P> minuto y segundo
  if (minutos < 10) {
    p1.textContent = "0" + minutos;
  } else {
    p1.textContent = minutos;
  }
  if (segundos < 10) {
    p2.textContent = ":0" + segundos;
  } else {
    p2.textContent = ":" + segundos;
  }
  // Ahora necesito habilitar los botones del temporizador
  document.getElementById("btnIniciar").disabled = false;
  document.getElementById("btnPausar").disabled = false;
  document.getElementById("btnReiniciar").disabled = false;
  // luego limpiamos los input
  formulario.reset();
};

// Variables
const formulario = document.querySelector("form");

// Manejador de eventos
formulario.addEventListener("submit", agregarTiempo);
