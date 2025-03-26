let numbers = [2, 5, 4, 1, 8, 6];
let check = Number(prompt("Moi ban nhap 1 so bat ki"));
if (isNaN(check)) {
    console.log("Nhap khong hop le vui long nhap lai");
} else {
    let found = false;
    for (let key of numbers) {
        if (check === key) {
            console.log("Bingo!!!");
            found = true;
            break;
        }
    }
    if (!found) {
        console.log("Chuc ban may man lan sau");
    }
}