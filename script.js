function goToGifts() {
  window.location.href = "gifts.html";
}

const noBtn = document.getElementById("no");
const yesBtn = document.getElementById("yes");
const container = document.querySelector(".buttons");

if (noBtn) {

  // Always escape when cursor gets close
  document.addEventListener("mousemove", (e) => {

    const rect = noBtn.getBoundingClientRect();
    const distance = Math.hypot(
      e.clientX - (rect.left + rect.width / 2),
      e.clientY - (rect.top + rect.height / 2)
    );

    if (distance < 120) {
      moveButton();
    }
  });

  // Also escape on click attempt
  noBtn.addEventListener("click", (e) => {
    e.preventDefault();
    moveButton();
  });

  function moveButton() {

    const maxX = container.clientWidth - noBtn.offsetWidth;
    const maxY = container.clientHeight - noBtn.offsetHeight;

    let newX, newY;

    do {
      newX = Math.random() * maxX;
      newY = Math.random() * maxY;
    } 
    // Make sure it doesn't overlap YES button
    while (
      newX < 160 && newY < 70
    );

    noBtn.style.transition = "0.25s ease";
    noBtn.style.left = newX + "px";
    noBtn.style.top = newY + "px";
  }
}

/* 🌸 PREMIUM FLOWER RAIN */
for (let i = 0; i < 35; i++) {
  const flower = document.createElement("div");
  flower.className = "flower";
  flower.innerHTML = Math.random() > 0.5 ? "🌸" : "🌹";
  flower.style.left = Math.random() * 100 + "vw";
  flower.style.animationDuration = (6 + Math.random() * 6) + "s";
  flower.style.fontSize = (18 + Math.random() * 20) + "px";
  document.body.appendChild(flower);
}
