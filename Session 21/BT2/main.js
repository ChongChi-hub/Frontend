
let even = 0;
let odd = 0;
for (let i = 1; i <= 5; i++) {
    let num = Number(prompt(`Moi ban nhap so nguyen thu ${i}: `));
    if (num % 2 === 0) {
        even++;
    } else {
        odd++;
    }
}

console.log(`So luong so chan la: ${even}`);
console.log(`So luong so le la: ${odd}`);
