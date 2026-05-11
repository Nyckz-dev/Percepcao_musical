export function initKeyboard(callback) {
  document.querySelectorAll("#virtual-keyboard .key").forEach(key => {
    key.addEventListener("click", () => {
      const note = key.dataset.note;

      // Cria um novo objeto Audio só para a tecla
      const noteAudio = new Audio(`/static/sounds/${note}.wav`);
      noteAudio.play().catch(err => console.error("Erro ao tocar nota:", err));

      if (callback) callback(note);
    });
  });
}
