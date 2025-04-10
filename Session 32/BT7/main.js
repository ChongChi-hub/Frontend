let images = document.querySelectorAll("img");
let container = document.querySelector(".container");

images.forEach((image) => {
  image.addEventListener("click", function (event) {
    event.stopPropagation();
    image.style.width = "800px";
    image.style.height = "700px";
    image.style.transition = "all 0.5s ease-in-out";
    image.style.position = "absolute";
    container.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
  });
});

container.addEventListener("click", function () {
  images.forEach((image) => {
    image.style.width = "200px";
    image.style.height = "200px";
    image.style.position = "static";
  });
  container.style.backgroundColor = "#f0f0f0";
});