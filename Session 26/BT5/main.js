const numbers = [10, 9, 5, 11, 24, 5];
let maxNumber = numbers[0];
let maxIndex = 0;
numbers.forEach((num,index)=>{
    if(num > maxNumber){
        maxNumber = num;
        maxIndex = index;
    }
});
console.log(`Phần tử lớn nhất là: ${maxNumber}`);
console.log(`Phần tử lớn nhất nằm ở vị trí: ${maxIndex}`);

