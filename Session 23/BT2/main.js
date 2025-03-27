let arr = [];
let max = null;
let n = Number(prompt("Nhap so phan tu ban muon them vao mang"));
if (n < 0 || !Number.isInteger(n)) {
  console.log("Khong hop le");
}else if(n === 0){
    console.log("Khong co so lon nhat");
}else {
  for (let i = 0; i < n; i++) {
    let value = Number(prompt(`Moi ban nhap gia tri phan tu thu ${i + 1}`));
    if (n < 0 || !Number.isInteger(value)) {
      console.log("Gia tri khong hop le");
      i--;
    } else {
      arr.push(value);
      if (arr[i] > max) max = arr[i];
    }
  }
  console.log(max);
}
