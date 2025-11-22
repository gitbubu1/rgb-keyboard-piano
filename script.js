const keys = document.querySelectorAll(".key");

function playSound(letter) {
  const audio = new Audio(`sounds/${letter.toUpperCase()}.mp3`);
 
  audio.play();
}

function activate(keyElement) {
  keyElement.classList.add("active");
  setTimeout(() => keyElement.classList.remove("active"), 150);
}

// Mouse click
keys.forEach(k => {
  k.addEventListener("click", () => {
    const letter = k.dataset.key;
    playSound(letter);
    activate(k);
  });
});

// Keyboard press
document.addEventListener("keydown", (event) => {
  const pressed = event.key.toLowerCase();
  const keyElement = [...keys].find(k => k.dataset.key === pressed);
  if (!keyElement) return;

  playSound(pressed);
  activate(keyElement);
});
