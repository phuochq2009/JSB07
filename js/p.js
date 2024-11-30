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
    alert("Xin lỗi. chúng tôi đã hết hàng");
  } else {
    alert("Vui lòng đăng nhập để mua hàng");
  }
}


function checkLoginStatus() {
  const isLogin = localStorage.getItem("isLogin");
  const users = JSON.parse(localStorage.getItem("users")) || [];
  if (isLogin) {
    document.getElementById('textt').innerHTML= `
    <a class="nav-link" id="textt" onclick="logout()" href="#"> ${users[0].email}  </a>
    `;
  } else {
    document.getElementById('textt').innerHTML = `
    <a class="nav-link" id="textt" href="./login.html">Đăng nhập</a>`
  }
}

checkLoginStatus()

function logout() {
  localStorage.removeItem("isLogin");
  location.reload();
}

