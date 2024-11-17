function feedback() {
   

    const isLogin = localStorage.getItem("isLogin");
    if (isLogin) {
       alert("Cảm ơn vì chia sẻ của bạn");
       
         
    } else {
      alert("Vui lòng đăng nhập để nhận xét");
    }
  }
