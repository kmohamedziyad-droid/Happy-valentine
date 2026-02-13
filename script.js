function goToGifts() {
  window.location.href = "gifts.html";
}

const noBtn = document.getElementById("no");
const container = document.querySelector(".buttons");

if (noBtn) {
  noBtn.addEventListener("mouseover", () => {
    const maxX = container.clientWidth - noBtn.offsetWidth;
    const maxY = container.clientHeight - noBtn.offsetHeight;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
  });
}

/* Flower Rain */
for (let i = 0; i < 30; i++) {
  const flower = document.createElement("div");
  flower.className = "flower";
  flower.innerHTML = "🌸";
  flower.style.left = Math.random() * 100 + "vw";
  flower.style.animationDuration = (6 + Math.random() * 6) + "s";
  document.body.appendChild(flower);
}
