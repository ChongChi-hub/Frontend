let arr = [];
let n = Number(prompt("Nhap so phan tu ban muon them vao mang"));
if (n < 0 || !Number.isInteger(n)) {
  console.log("Khong hop le");
}else if(n === 0){
    console.log("mang ko co phan tu");
}else {
    let sum = 0;
    let isNum = false;
  for (let i = 0; i < n; i++) {
    let value = prompt(`Moi ban nhap gia tri phan tu thu ${i + 1}`);
      arr.push(value);
      if(!isNaN(value)){
        sum += Number(value);
        isNum = true
      }
      }
      if(isNum){
        console.log(sum);
      } else{
        console.log("Khong co ky tu so")
    }
  }
