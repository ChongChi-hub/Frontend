const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function sumEvenNumbers(arr) {
    return arr.filter(num => num % 2 === 0).reduce((sum, num) => sum + num, 0);
}
function sumOddNumbers(arr) {
    return arr.filter(num => num % 2 !== 0).reduce((sum, num) => sum + num, 0);
}
const totalEven = sumEvenNumbers(numbers);
const totalOdd = sumOddNumbers(numbers);
console.log(numbers);
console.log(totalEven);
console.log(totalOdd);
