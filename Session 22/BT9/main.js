let arr = [2, 1, 7, 1, 1, 8, 6, 2, 2, 7];
let newArr = arr.filter((num, index) => arr.indexOf(num) === index);

for (let i = 0; i < newArr.length - 1; i++) {
    for (let j = 0; j < newArr.length - i - 1; j++) {
        if (newArr[j] > newArr[j + 1]) { 
            let temp = newArr[j];
            newArr[j] = newArr[j + 1];
            newArr[j + 1] = temp;
        }
    }
}
console.log(newArr);
