let sum = 0;
for (let i = 1; i <= 5; i++) {
    let num = Number(prompt(`Moi ban nhap so nguyen thu ${i}: `));
    if (num % 2 !== 0) {
        sum += num;
    }
}
console.log(`Tong cac so le la: ${sum}`);
