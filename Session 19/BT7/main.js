let a = Number(prompt("Mời bạn nhập số thứ nhất: "));
let b = Number(prompt("Mời bạn nhập số thứ hai: "));
let c = Number(prompt("Mời bạn nhập số thứ ba: "));
let max = (a > b) ? ((a > c) ? a : c) : ((b > c) ? b : c);
alert(`Số lớn nhất là: ${max}`);