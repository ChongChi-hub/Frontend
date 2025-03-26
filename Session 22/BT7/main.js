let input = prompt("Mời bạn nhập một chuỗi số nguyên, cách nhau bởi dấu phẩy:");
if (!/^\d+(,\d+)*$/.test(input)) {
    console.log("Chuỗi nhập không hợp lệ");
} else {
    let numbers = input.split(",").map(Number); 
    for (let i = 0; i < numbers.length - 1; i++) {
        for (let j = 0; j < numbers.length - i - 1; j++) {
            if (numbers[j] > numbers[j + 1]) { 
                let temp = numbers[j];
                numbers[j] = numbers[j + 1];
                numbers[j + 1] = temp;
            }
        }
    }
    console.log(numbers);
}