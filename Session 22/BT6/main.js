let numbers = [2, 5, 7, 4, 1, 8, 6, 2, 5, 7];
let n = Number(prompt("Moi ban nhap mot so: "));
if (isNaN(n)) {
    console.log("Nhap khong hop le");
} else {
    let flag = 0; // so lan xuat hien
    for (let i in numbers) {
        if (numbers[i] === n) {
            flag++;
        }
    }
    if (flag === 0) {
        console.log(`So ${n} khong ton tai trong mang`);
    } else {
        console.log(`So ${n} xuat hien ${flag} lan`);
    }
}
