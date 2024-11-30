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
  