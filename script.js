const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const result = document.getElementById("result");

noBtn.addEventListener("mouseover", () => {
  noBtn.innerText = "Sí ❤️";
  noBtn.style.background = "black";
  noBtn.style.color = "white";
});

noBtn.addEventListener("mouseout", () => {
  noBtn.innerText = "No";
  noBtn.style.background = "#ccc";
  noBtn.style.color = "black";
});

yesBtn.addEventListener("click", () => {
  result.innerText = "Sabía que dirías que sí 🖤";
});
