let accounts = JSON.parse(localStorage.getItem("accounts")) || [];
function validInput() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;
    const reGexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let check = false;
    if (email.trim() === "") {;
        alert('Email không được để trống!');
        return false;
    }
    if( !reGexEmail.test(email)){
        alert('Email không hợp lệ!')
        return false;
    }
    if (!checkAccount(email)) {
        alert('Email đã tồn tại!');
        return false;
    }
    if (password.trim() === "") {
        alert('Password không được để trống!');
        return false;
    }
    if (confirmPassword.trim() === "") {
        alert('Vui lòng nhập lại password!');
        return false;
    }
    if (password !== confirmPassword) {
        alert('Password và Confirm Password không khớp!');
        return false;
    }
    if(!check){
        alert('Đăng ký thành công!');
        saveAccount(email, password);
        return true;
    }
}

function saveAccount(email, password){
    accounts.push({ email: email, password: password });
    localStorage.setItem("accounts", JSON.stringify(accounts));
}
function checkAccount(email){
    const accounts = JSON.parse(localStorage.getItem('accounts')) || [];
    return !accounts.some(account => account.email === email);
}