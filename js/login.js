function myFunction() {
    var x = document.getElementById("password");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }
function login() {
    event.preventDefault();
    let emailData = document.getElementById("email").value;
    let passwordData = document.getElementById("password").value;
    
    if (emailData === '' || passwordData === '') {
        alert('Vui lòng nhập đầy đủ thông tin');
        return;
    }

    console.log(emailData, passwordData)
    const users = JSON.parse(localStorage.getItem('users')) || [];
    for (let i = 0; i < users.length; i++) {
        if (users[i].email === emailData && users[i].password === passwordData) {
            const isLogin = true;
            localStorage.setItem('isLogin', isLogin);

            alert('Đăng nhập thành công')
            return;
        }

    }
    alert('email hoặc mật khẩu không đúng')
}