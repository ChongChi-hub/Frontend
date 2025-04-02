function sortEven(arr) {
    let soChan = arr.filter(num => num % 2 === 0).sort((a, b) => a - b);
    let indexChan = 0;
    return arr.map(num => {
        if (num % 2 === 0) {
            return soChan[indexChan++];
        } else {
            return num;
        }
    });
}
let numbers = [5,8,6,3,4,2,7]
console.log(sortEven(numbers));