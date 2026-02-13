function goToGifts() {
  window.location.href = "gifts.html";
}

/* Stronger No Button Escape */
const noBtn = document.getElementById("no");
const container = document.querySelector(".buttons");

if (noBtn) {
  document.addEventListener("mousemove", (e) => {
    const rect = noBtn.getBoundingClientRect();
    const distance = Math.hypot(
      e.clientX - (rect.left + rect.width / 2),
      e.clientY - (rect.top + rect.height / 2)
    );

    if (distance < 120) {
      const maxX = container.clientWidth - noBtn.offsetWidth;
      const maxY = container.clientHeight - noBtn.offsetHeight;

      const randomX = Math.random() * maxX;
      const randomY = Math.random() * maxY;

      noBtn.style.left = randomX + "px";
      noBtn.style.top = randomY + "px";
    }
  });
}

/* Flower Rain */
for (let i = 0; i < 25; i++) {
  const flower = document.createElement("div");
  flower.className = "flower";
  flower.innerHTML = "🌸";
  flower.style.left = Math.random() * 100 + "vw";
  flower.style.animationDuration = (6 + Math.random() * 6) + "s";
  document.body.appendChild(flower);
}
