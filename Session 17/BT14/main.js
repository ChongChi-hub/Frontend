let r = Number(prompt("Nhập bán kính: "));
let h = Number(prompt("Nhập chiều cao: "));
const pi = Math.PI;
let surroundingArea = 2 * pi * r * h;
let totalArea = 2 * pi * r * h * (r + h);
let volume = pi * (r * r) * h;
let bottomCircumference = 2 * pi * r;
console.log("Diện tích xung quanh: " + surroundingArea.toFixed(2) + " DVDT");
console.log("Diện tích toàn phần: " + totalArea.toFixed(2) + " DVDT");
console.log("Thể tích: " + volume.toFixed(2) + " DVTT");
console.log("Diện tích đáy: " + bottomCircumference.toFixed(2) + " DVDT");