function goToGifts() {
  window.location.href = "gifts.html";
}

const noBtn = document.getElementById("no");

if (noBtn) {
  noBtn.style.position = "fixed";

  function moveButton() {
    const padding = 20;

    const maxX = window.innerWidth - noBtn.offsetWidth - padding;
    const maxY = window.innerHeight - noBtn.offsetHeight - padding;

    const randomX = Math.max(padding, Math.random() * maxX);
    const randomY = Math.max(padding, Math.random() * maxY);

    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
  }

  noBtn.addEventListener("mouseenter", moveButton);
  noBtn.addEventListener("click", function(e) {
    e.preventDefault();
    moveButton();
  });
}

/* FLOWERS */
for (let i = 0; i < 40; i++) {
  const flower = document.createElement("div");
  flower.className = "flower";
  flower.innerHTML = Math.random() > 0.5 ? "🌸" : "🌹";
  flower.style.left = Math.random() * 100 + "vw";
  flower.style.animationDuration = (6 + Math.random() * 6) + "s";
  flower.style.fontSize = (20 + Math.random() * 25) + "px";
  document.body.appendChild(flower);
}
