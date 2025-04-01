function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}
let inputArray = [10, 2, 3, 5, 7, 9];
let oddPrimes = inputArray.filter(num => isPrime(num) && num % 2 !== 0);
console.log("Input Array:", inputArray);
console.log("Odd Prime Numbers:", oddPrimes);