let cost = Number(prompt("Nhập vào một số: "));
let text = cost.toLocaleString("vi-VN", {style: "currency", currency: "VND"});
alert(text);