const layout = document.getElementById("box");
const modal = document.getElementById("btn");
const closeButton = document.getElementById("close-btn");
const textBox = document.getElementById("text-box");
modal.addEventListener("click", function () {
  textBox.style.display = "flex";
  textBox.style.alignItems = "Center";
  layout.style.backgroundColor = "gray";
});
closeButton.addEventListener("click", function () {
  textBox.style.display = "none";
});
