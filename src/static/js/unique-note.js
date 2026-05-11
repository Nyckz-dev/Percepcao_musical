import { initKeyboard } from "./script-keyboard.js";

const audio = document.getElementById("exercise-audio");
const feedback = document.getElementById("feedback");
const correctNote = document.getElementById("exercise").dataset.correct;

let attempts = 0;
const maxAttempts = 5;

initKeyboard(userNote => {
  if (attempts >= maxAttempts) {
    feedback.innerHTML = "❌ Limite atingido! <button onclick='window.location.reload()'>Tentar novamente</button>";
    return;
  }

  if (userNote === correctNote) {
    feedback.innerHTML = "🎉 Acertou! <button onclick='window.location.reload()'>Continuar praticando</button>";
  } else {
    attempts++;
    if (attempts < maxAttempts) {
      feedback.textContent = `❌ Tente novamente! (${attempts}/${maxAttempts})`;
    } else {
      feedback.innerHTML = "❌ Limite atingido! <button onclick='window.location.reload()'>Tentar novamente</button>";
    }
  }
});

