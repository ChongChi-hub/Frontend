let a = Number(prompt("Nhập số thứ nhất: "));
let b = Number(prompt("Nhập số thứ hai: "));
let random = Math.floor(Math.random() * (b - a) + a);
document.writeln(random);
