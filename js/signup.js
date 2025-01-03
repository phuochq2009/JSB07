function myFunction() {
  var x = document.getElementById("password");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}
function signUp() {
  event.preventDefault();
  let emailData = document.getElementById("email").value;
  let passwordData = document.getElementById("password").value;
  let dobData = document.getElementById("date").value;
  let addressData = document.getElementById("address").value;

  if (emailData === "" || passwordData === "") {
    alert("Vui lòng nhập đầy đủ thông tin");
    return;
  }

  let users = JSON.parse(localStorage.getItem("users")) || [];

  for (let i = 0; i < users.length; i++) {
    if (users[i].email === emailData) {
      alert("Email đã tồn tại");
      return;
    }
  }

  const data = {
    email: emailData,
    password: passwordData,
    dob: dobData,
    address: addressData,
  };

  users.push(data);
  localStorage.setItem("users", JSON.stringify(users));

  alert("Đăng kí thành công");
  location.href ="login.html"
}


function checkLoginStatus() {
  const isLogin = localStorage.getItem("isLogin");
  const users = JSON.parse(localStorage.getItem("users")) || [];
  if (isLogin) {
    document.getElementById('textt').innerHTML= `
    <a class="nav-link" id="textt" onlick="logout()" href="#"> ${users[0].email}  </a>
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
