const board = document.getElementById("game-board");
const symbols = ["❤️", "💙", "💛", "💜", "🧡", "💚", "💖", "🖤"];
let cards = [...symbols, ...symbols];
cards.sort(() => Math.random() - 0.5);

let first = null,
  second = null;
cards.forEach((symbol) => {
  const div = document.createElement("div");
  div.className = "card";
  div.textContent = symbol;
  div.onclick = () => {
    if (div.classList.contains("flipped") || second) return;
    div.classList.add("flipped");
    if (!first) {
      first = div;
    } else {
      second = div;
      if (first.textContent === second.textContent) {
        first = null;
        second = null;
        if (
          document.querySelectorAll(".card.flipped").length === cards.length
        ) {
          alert("You won! 🎉 Screenshot & share!");
        }
      } else {
        setTimeout(() => {
          first.classList.remove("flipped");
          second.classList.remove("flipped");
          first = null;
          second = null;
        }, 800);
      }
    }
  };
  board.appendChild(div);
});
