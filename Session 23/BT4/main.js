let arr = [];
let numArr = [];
let n = Number(prompt("Nhap so phan tu ban muon them vao mang"));
if (n < 0 || !Number.isInteger(n)) {
  console.log("Khong hop le");
}else if(n === 0){
    console.log("Mang ko co phan tu");
}else {
  for (let i = 0; i < n; i++) {
    let value = prompt(`Moi ban nhap gia tri phan tu thu ${i + 1}`);
      arr.push(value);
      if(!isNaN(value)){
        numArr.push(value);
      }
  } 
  console.log(numArr);
  
}
