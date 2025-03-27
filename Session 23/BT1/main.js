let arr = new Array(10);
let newArr = new Array(10);
let n = Number(prompt("Nhap so phan tu ban muon them vao mang"));
if (n <= 0 || !Number.isInteger(n)) {
  console.log("Khong hop le");
} else {
  for (let i = 0; i < n; i++) {
    let value = Number(prompt(`Moi ban nhap gia tri phan tu thu ${i + 1}`));
    if (n < 0 || !Number.isInteger(value)) {
      console.log("Gia tri khong hop le");
      i--;
    } else {
      arr.push(value);
      if (value > 10) {
        newArr.push(value);
      }
    }
  }
  console.log(newArr);
}
