let startDate = new Date(prompt("Xin mời nhập ngày tháng năm bắt đầu: "));
let endDate = new Date(prompt("Xin mời nhập ngày tháng năm kết thúc: "));
let time = endDate - startDate;
let date = time / (1000 * 60 * 60 * 24);
document.writeln("Độ lệch là: ", date, " ngày");


