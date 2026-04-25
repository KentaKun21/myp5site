console.log("script loaded");

const intro = document.getElementById("intro-video");
const seq = document.getElementById("seq-video");
const menu = document.querySelector(".menu");

/* INTRO ENDS */
intro.onended = () => {
  intro.style.display = "none";
};

/* PLAY SEQ VIDEO */
window.playSeq = function(file) {
  intro.style.display = "none";

  menu.classList.add("hidden");

  seq.src = "assets/" + file;
  seq.load();
  seq.play().catch(() => {});
};

/* ESC = BACK TO INTRO */
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {

    seq.pause();
    seq.src = "";

    intro.style.display = "block";
    intro.currentTime = 0;
    intro.play();

    menu.classList.remove("hidden");
  }
});

console.log("audio system loaded");

const bgm = document.getElementById("bgm");
const startSfx = document.getElementById("start-sfx");
const clickSfx = document.getElementById("click-sfx");

// set files
bgm.src = "assets/bgm4.mp3";      // background music
startSfx.src = "assets/start.aac"; // intro sound
clickSfx.src = "assets/click.mp3"; // optional

// autoplay music after user interaction (browser requirement)
window.addEventListener("click", () => {
  if (bgm.paused) {
    bgm.volume = 0.5;
    bgm.play().catch(() => {});
  }
}, { once: true });

// play intro sound once when page loads
window.addEventListener("load", () => {
  startSfx.volume = 1;
  startSfx.play().catch(() => {});
});

// function for menu click sound
window.playClick = function() {
  clickSfx.currentTime = 0;
  clickSfx.play().catch(() => {});
};