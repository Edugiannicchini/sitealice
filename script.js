function updateCountdown() {
  const countdownElement = document.getElementById("countdown");

  // Data do nascimento: 16/06/2026
  const birthDate = new Date(2026, 5, 16, 0, 0, 0);
  const now = new Date();

  const diff = birthDate - now;

  if (diff <= 0) {
    countdownElement.innerHTML = "A Alice chegou! 🎀💕";
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  countdownElement.innerHTML =
    days + " dias • " +
    hours + "h • " +
    minutes + "m • " +
    seconds + "s";
}

// Atualiza sempre
setInterval(updateCountdown, 1000);

// Primeira chamada
updateCountdown();