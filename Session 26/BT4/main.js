function isPrime(arr) {
    if (arr.length === 0) {
        console.log("Mảng rỗng");
        return;
    }
    arr.forEach(num => {
        if (num < 2) return; // Skip numbers less than 2
        let isPrime = true;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            console.log(num);
        }
    });
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
isPrime(arr);