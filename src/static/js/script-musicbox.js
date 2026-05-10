const audio = document.getElementById("bg-music");
const playPauseBtn = document.getElementById("playPause");
const progress = document.getElementById("progress");
const currentTime = document.getElementById("currentTime");
const player = document.getElementById("music-player");

let isDragging = false;
let offsetX, offsetY;

// Arraste só pelo cabeçalho
player.addEventListener("mousedown", (e) => {
    if (e.target.classList.contains("player-header")) {
        isDragging = true;
        offsetX = e.clientX - player.offsetLeft;
        offsetY = e.clientY - player.offsetTop;
    }
});

document.addEventListener("mousemove", (e) => {
    if (isDragging) {
        player.style.left = e.clientX - offsetX + "px";
        player.style.top = e.clientY - offsetY + "px";
    }
});

document.addEventListener("mouseup", () => {
    isDragging = false;
});

// Play/Pause
playPauseBtn.addEventListener("click", () => {
    if (audio.paused) {
        audio.play().then(() => {
            playPauseBtn.textContent = "⏸";
        }).catch(err => {
            console.error("Erro ao dar play:", err);
            alert("Não foi possível reproduzir o áudio.");
        });
    } else {
        audio.pause();
        playPauseBtn.textContent = "▶";
    }
});

// Atualiza barra de progresso
audio.addEventListener("timeupdate", () => {
    progress.value = (audio.currentTime / audio.duration) * 100;
    currentTime.textContent = formatTime(audio.currentTime);
});

// Permite arrastar a barra de progresso
progress.addEventListener("input", () => {
    audio.currentTime = (progress.value / 100) * audio.duration;
});

// Formata tempo mm:ss
function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
}
