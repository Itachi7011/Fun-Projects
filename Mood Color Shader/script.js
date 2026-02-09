const buttons = document.querySelectorAll(".color-btn");
const audio = document.getElementById("moodMusic");

buttons.forEach((btn) => {
  btn.onclick = () => {
    document.body.style.background = btn.dataset.color;
    audio.src = btn.dataset.sound;
    audio.play();
  };
});
