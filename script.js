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
