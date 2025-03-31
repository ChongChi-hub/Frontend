let users = [];
const emailRegex = /^[\w._%+-]+@[\w.-]+\.(com|vn)$/;
function inputEmail(email) {
  if (checkEmail(email)) {
        users.push(email);
        console.log("Email hợp lệ.");
  }
}
function checkEmail(email) {
  if (!emailRegex.test(email)) {
        console.log("Email không hợp lệ. Vui lòng nhập lại.");
        return false;
  }
  if (users.includes(email)) {
        console.log("Email đã tồn tại trong hệ thống. Vui lòng nhập email khác.");
    return false;
  }
    return true;
}
let n;
do {
        n = Number(prompt("Nhập số email bạn muốn thêm:"));
} while (isNaN(n) || n <= 0);

for (let i = 0; i < n; i++) {
  let email;
  do {
    email = prompt(`Nhập email thứ ${i + 1}:`);
  } while (!checkEmail(email));
  inputEmail(email);
}



console.log("Danh sách email đã lưu:", users);
