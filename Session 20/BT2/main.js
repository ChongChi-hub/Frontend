let n = Number(prompt("Moi ban nhap so nguyen n: "));
console.log(`Cac so nguyen chia het cho 5 tu 1 - ${n} la: `);
if (isNaN(n)) {
  alert("so khong hop le");
} else {
  for (let i = 1; i <= n; i++) {
    if (i % 5 === 0) {
      console.log(i);
    }
  }
}
