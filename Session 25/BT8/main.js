function isStrongPassword(password) {
    if (password.length < 8) {
        console.log(false);
        return false;
    } else if (!/[A-Z]/.test(password)) { //test: trả về giá trị boolean(true/false)
        console.log(false);
        return false;
    } else if (!/[a-z]/.test(password)) {
        console.log(false);
        return false;
    } else if (!/[0-9]/.test(password)) {
        console.log(false);
        return false;
    } else {
        console.log(true);
        return true;
    }
}
let password = prompt('Mời bạn nhập mật khẩu để kiểm tra');
isStrongPassword(password);