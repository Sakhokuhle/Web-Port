const galleryImages = document.querySelectorAll(".grid-item img");
const modal = document.getElementById("modal");
const modalImage = document.getElementById("modal-image");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");

let currentIndex = 0;

galleryImages.forEach((image, index) => {
  image.addEventListener("click", () => {
    currentIndex = index;
    modalImage.src = image.src;
    modal.style.display = "flex";
  });
});

prevButton.addEventListener("click", () => {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = galleryImages.length - 2;
  }
  modalImage.src = galleryImages[currentIndex].src;
});

nextButton.addEventListener("click", () => {
  currentIndex++;
  if (currentIndex >= galleryImages.length) {
    currentIndex = 0;
  }
  modalImage.src = galleryImages[currentIndex].src;
});

modal.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    modal.style.display = "none";
  }
});
