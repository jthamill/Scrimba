const hscoreEl = document.getElementById("h-score");
hscoreEl.textContent = 0;
const gscoreEl = document.getElementById("g-score");
gscoreEl.textContent = 0;

document.getElementById("h-btn1").addEventListener("click", () => {
  hscoreEl.textContent ++;
});
document.getElementById("h-btn2").addEventListener("click", () => {
  hscoreEl.textContent = Number(hscoreEl.textContent) + 2;
});
document.getElementById("h-btn3").addEventListener("click", () => {
  hscoreEl.textContent = Number(hscoreEl.textContent) + 3;
});

document.getElementById("g-btn1").addEventListener("click", () => {
  gscoreEl.textContent ++;
});
document.getElementById("g-btn2").addEventListener("click", () => {
  gscoreEl.textContent = Number(gscoreEl.textContent) + 2;
});
document.getElementById("g-btn3").addEventListener("click", () => {
  gscoreEl.textContent = Number(gscoreEl.textContent) + 3;
});
document.getElementById("newGameButton").addEventListener("click", () => {
  hscoreEl.textContent = 0;
  gscoreEl.textContent = 0;
});