let hour = Number(prompt("Nhập giờ: "));
let min = Number(prompt("Nhập phút: "));
let sec = Number(prompt("Nhập giây: "));
if (hour < 0 || hour > 23 || min < 0 || min > 59 || sec < 0 || sec > 59) {
    alert("Nhập không hợp lệ");
} else {
    if (hour == 0) {
        alert(`12 : ${min} : ${sec} AM`);
    } else if (hour < 12) {
        alert(`${hour} : ${min} : ${sec} AM`);
    } else if (hour == 12) {
        alert(`12 : ${min} : ${sec} PM`);
    } else {
        alert(`${hour - 12} : ${min} : ${sec} PM`);
    }
}
