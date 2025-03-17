let cost = Number(prompt("Nhập số tiền gửi: "));
let month = Number(prompt("Nhập số tháng gửi: "));

let interestRate = 4.3 / 100; //lai suat nam
let profitMonth = interestRate / 12; //lai suat thang
let interest = cost * profitMonth * month; //tien lai
document.writeln("Số tiền lãi nhận được là: " + interest.toFixed(2) + " VND");

