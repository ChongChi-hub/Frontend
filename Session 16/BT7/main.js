let math = Number(prompt("Nhập điểm môn toán: "));
let physics = Number(prompt("Nhập điểm môn lý: "));
let chemistry = Number(prompt("Nhập điểm môn hóa: "));
let average = (math + physics + chemistry) / 3;
document.writeln("Điểm trung bình của bạn là: ", +average,"đ")