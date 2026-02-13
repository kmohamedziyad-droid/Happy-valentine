function goToGifts() {
  window.location.href = "gifts.html";
}

const noBtn = document.getElementById("no");

if (noBtn) {

  noBtn.addEventListener("mouseover", () => {
    moveAnywhere();
  });

  noBtn.addEventListener("click", (e) => {
    e.preventDefault();
    moveAnywhere();
  });

  function moveAnywhere() {
    const maxX = window.innerWidth - noBtn.offsetWidth;
    const maxY = window.innerHeight - noBtn.offsetHeight;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    noBtn.style.position = "fixed";
    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
  }
}

/* 🌸 PREMIUM FLOWER RAIN */
for (let i = 0; i < 40; i++) {
  const flower = document.createElement("div");
  flower.className = "flower";
  flower.innerHTML = Math.random() > 0.5 ? "🌸" : "🌹";
  flower.style.left = Math.random() * 100 + "vw";
  flower.style.animationDuration = (5 + Math.random() * 6) + "s";
  flower.style.fontSize = (20 + Math.random() * 25) + "px";
  document.body.appendChild(flower);
}
