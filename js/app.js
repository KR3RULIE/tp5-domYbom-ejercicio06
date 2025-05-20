const inputMinutos = document.getElementById("minutos");
const display = document.querySelector("p");
const btnIniciar = document.getElementById("btnIniciar");
const btnPausar = document.getElementById("btnPausar");
const btnReiniciar = document.getElementById("btnReiniciar");

let tiempoRestante = 0;
let intervalo = null;
let tiempoInicial = 0;

// Función para formatear el tiempo en hh:mm:ss:ms
function formatearTiempo(ms) {
  const horas = String(Math.floor(ms / 3600000)).padStart(2, "0");
  const minutos = String(Math.floor((ms % 3600000) / 60000)).padStart(2, "0");
  const segundos = String(Math.floor((ms % 60000) / 1000)).padStart(2, "0");
  const milisegundos = String(ms % 1000).padStart(3, "0");
  return `${horas}:${minutos}:${segundos}:${milisegundos}`;
}

// Botón Iniciar
btnIniciar.addEventListener("click", () => {
  // Si ya hay un intervalo, no hacer nada
  if (intervalo) return;

  // Si el temporizador no ha comenzado, tomar el valor del input
  if (!tiempoRestante) {
    const minutos = parseInt(inputMinutos.value);
    if (isNaN(minutos) || minutos <= 0) {
      alert("Ingresa un número válido de minutos.");
      return;
    }
    tiempoRestante = minutos * 60000;
    tiempoInicial = tiempoRestante;
  }

  intervalo = setInterval(() => {
    tiempoRestante -= 10;
    if (tiempoRestante <= 0) {
      clearInterval(intervalo);
      intervalo = null;
      tiempoRestante = 0;
    }
    display.textContent = formatearTiempo(tiempoRestante);
  }, 10);
  inputMinutos.value = "";
});

// Botón Pausar
btnPausar.addEventListener("click", () => {
  clearInterval(intervalo);
  intervalo = null;
});

// Botón Reiniciar
btnReiniciar.addEventListener("click", () => {
  clearInterval(intervalo);
  intervalo = null;
  tiempoRestante = 0;
  tiempoInicial = 0;
  inputMinutos.value = "";
  display.textContent = "00:00:00:000";
});
