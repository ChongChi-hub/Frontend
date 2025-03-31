function findMinValue(arr) {
    if (arr.length === 0){
    console.log(` Mảng rỗng`);
  }else {
    let min = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if(isNaN(arr[i])){
            console.log(` Giá trị không hợp lệ`);
        return;
        }
        if (arr[i] < min) min = arr[i];
    }
    console.log(` Phần tử nhỏ nhất trong mảng là: ${min}`);
  }
}
let arr = [1,9,21,-1];
findMinValue(arr);
