const audio = document.getElementById("exercise-audio");
const playBtn = document.getElementById("playNote");

playBtn.addEventListener("click", () => {
  audio.currentTime = 0; // reinicia sempre do começo
  audio.play().catch(err => console.error("Erro ao tocar:", err));
});
