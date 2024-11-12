let currentSlide = 0;
const slides = document.querySelectorAll(".carousel-image");
const totalSlides = slides.length;

function showSlide(index) {
  const carousel = document.querySelector(".carousel");

  currentSlide = (index + totalSlides) % totalSlides;

  carousel.style.transform = `translateX(-${currentSlide * 100}%)`;
}

function changeSlide(step) {
  showSlide(currentSlide + step);
}

document.addEventListener("DOMContentLoaded", () => {
  showSlide(currentSlide);
});

function buy() {
  const isLogin = localStorage.getItem("isLogin");
  if (isLogin) {
    location.href = "location.html";
  } else {
    alert("Please login to buy");
  }
}
