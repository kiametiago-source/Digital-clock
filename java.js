// Guarda cada elemento da página uma só vez para ser reutilizado no relógio.
const hoursElement = document.getElementById("hours");
const minutesElement = document.getElementById("minutes");
const secondsElement = document.getElementById("seconds");
const dateElement = document.getElementById("date");

// Converte um número em texto com pelo menos a quantidade de dígitos pedida.
// Por exemplo: 7 passa a "07" e 7 milissegundos passam a "007".
function formatNumber(number, digits) {
  return String(number).padStart(digits, "0");
}

// Lê a hora atual do computador e atualiza os números mostrados na página.
function updateClock() {
  const now = new Date();

  hoursElement.textContent = formatNumber(now.getHours(), 2);
  minutesElement.textContent = formatNumber(now.getMinutes(), 2);
  secondsElement.textContent = formatNumber(now.getSeconds(), 2);

  // Mostra a data no idioma português, usando também a hora local do computador.
  dateElement.textContent = new Intl.DateTimeFormat("pt-AO", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(now);
}

// Faz uma atualização imediata para a página não começar com zeros.
updateClock();

// Atualiza uma vez por segundo, já que o relógio não mostra milissegundos.
window.setInterval(updateClock, 1000);
