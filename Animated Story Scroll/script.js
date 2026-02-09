const slides = document.querySelectorAll(".story-slide");
const music = document.getElementById("bgMusic");
const toggleBtn = document.getElementById("musicToggle");

toggleBtn.onclick = () => (music.paused ? music.play() : music.pause());

window.addEventListener("scroll", () => {
  slides.forEach((slide) => {
    const rect = slide.getBoundingClientRect();
    if (rect.top < window.innerHeight / 1.3) {
      slide.classList.add("active");
    }
  });
});
