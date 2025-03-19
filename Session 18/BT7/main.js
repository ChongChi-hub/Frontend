let a = Number(prompt("Nhập số a: "));
let b = Number(prompt("Nhập số b: "));
let calc = prompt("Nhập phép tính (+, -, *, /): ");

switch (calc) {
    case "+":
        alert("Kết quả: " + (a + b));
        break;
    case "-":
        alert("Kết quả: " + (a - b));
        break;
    case "*":
        alert("Kết quả: " + (a * b));
        break;
    case "/":
        if (b !== 0) {
            alert("Kết quả: " + (a / b));
        } else {
            alert("Không thể chia cho 0");
        }
        break;
    default:
        alert("Phép tính không hợp lệ");
}

