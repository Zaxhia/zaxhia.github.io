window.addEventListener("load", () => {
  const audio = document.getElementById("bgMusic");
  const button = document.getElementById("musicBtn");

  button.addEventListener("click", () => {
    if (audio.paused) {
      audio.play();
      button.textContent = "⏸️ Pause Music";
    } else {
      audio.pause();
      button.textContent = "▶️ Play Music";
    }
  });
});
