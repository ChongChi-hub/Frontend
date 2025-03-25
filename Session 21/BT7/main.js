let cost = Number(prompt("Nhập số tiền ban đầu: "));
let interestRate = Number(prompt("Nhập lãi suất (%): ")) / 100;
let month = Number(prompt("Nhập số tháng gửi: "));
let totalAmount = cost * Math.pow((1 + interestRate), month);
let totalInterest = totalAmount - cost;
console.log(`Tiền lãi: ${totalInterest.toFixed(3)}`);
console.log(`Tiền nhận được: ${totalAmount.toFixed(3)}`);
