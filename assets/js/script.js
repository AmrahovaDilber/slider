const items = [
  { id: 1, image: "./assets/images/car1.png", text: "mustang" },
  { id: 2, image: "./assets/images/bmw.jpg", text: "bmw" },
  { id: 3, image: "./assets/images/nissan.jpg", text: "nissan" },
  { id: 4, image: "./assets/images/mercedes.avif", text: "mercedes" },
];

let currentIndex = 0;
const image = document.getElementById("image");
const info = document.getElementById("info");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");

showImage(currentIndex);

prevButton.addEventListener("click", handlePrev);
nextButton.addEventListener("click", handleNext);

function showImage(index) {
  image.src = items[index].image;
  info.textContent = items[index].text;
}

function handlePrev() {
  currentIndex = currentIndex === 0 ? items.length - 1 : currentIndex - 1;
  showImage(currentIndex);
}

function handleNext() {
  currentIndex = currentIndex === items.length - 1 ? 0 : currentIndex + 1;
  showImage(currentIndex);
}
