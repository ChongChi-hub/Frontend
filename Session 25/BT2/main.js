function sum(a,b) {
    if (isNaN(a) || isNaN(b)) {
        console.log(`Nhập không hợp lệ`);
        return;
    } else {
        let result = a + b;
        console.log(`Tổng của hai số là: ${result}`);
        return result;
    }
}
    let a = 3;
    let b = 4;
sum(a,b);