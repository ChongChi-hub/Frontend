let arr = [];
let n = Number(prompt("Nhap so phan tu ban muon them vao mang"));
if (n < 0 || !Number.isInteger(n)) {
  console.log("Khong hop le");
}else if(n === 0){
    console.log("mang ko co phan tu");
}else {
    
  for (let i = 0; i < n; i++) {
    let value = Number(prompt(`Moi ban nhap gia tri phan tu thu ${i + 1}`));
    if (n < 0 || !Number.isInteger(value)) {
      console.log("Gia tri khong hop le");
      i--;
    } else {
      arr.push(value);
    }
  }
  let max = arr[0];
    let answer = 0;
  for(let i = 0; i < arr.length; i++){
    if(arr[i] < max){
        answer = arr[i];
    }
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      answer = max;
      max = arr[i];
    }
    else if (arr[i] > answer && arr[i] < max) {
      answer = arr[i];
    }
  }
  console.log(answer);
}
