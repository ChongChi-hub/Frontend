let r = Number(prompt("Nhập bán kính cầu: "));
const pi = Math.PI;

let volume = (4/3) * pi * (r * r * r);
let surfaceArea = 4 * pi * (r * r);
let perimeter = 2 * pi * r;

console.log("Thể tích hình cầu: " + volume.toFixed(2) + " DVTT");
console.log("Diện tích bề mặt hình cầu: " + surfaceArea.toFixed(2) + " DVDT");
console.log("Chu vi lớn nhất hình cầu: " + perimeter.toFixed(2) + " DVCV");
