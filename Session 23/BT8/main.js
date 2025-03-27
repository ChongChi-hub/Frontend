let arr = [];
let n = Number(prompt("Nhap so phan tu ban muon them vao mang"));
if (n < 0 || !Number.isInteger(n)) {
    console.log("Khong hop le");
} else if (n === 0) {
    console.log("Khong phai day fibonacci");
} else {
    for (let i = 0; i < n; i++) {
        let value = Number(prompt(`Moi ban nhap gia tri phan tu thu ${i + 1}`));
        arr.push(value);
    }
    let isFibonacci = true;
    if (arr.length < 3) {
        isFibonacci = false;
    } else {
        for (let i = 2; i < arr.length; i++) {
            if (arr[i] !== arr[i - 1] + arr[i - 2]) {
                isFibonacci = false;
                break;
            }
        }
    }

    if (isFibonacci) {
        console.log("Day ban nhap la day Fibonacci");
    } else {
        console.log("Day ban nhap khong phai la day Fibonacci");
    }
}
