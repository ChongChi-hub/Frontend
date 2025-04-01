function squareNumber(arr) {
    return arr.map((num) => num * num);
}

function evenNumber(arr) {
    return arr.filter((num) => num % 2 === 0);
}

let arr = [2, 5, 10];
let squared = squareNumber(arr);
let even = evenNumber(squared);

console.log("Squared Numbers:", squared);
console.log("Even Numbers:", even);
