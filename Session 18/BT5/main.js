let year = Number(prompt("Mời bạn nhập số năm kinh nghiệm: "));
if(year > 6){
    alert("Quản lý");
} else if(year >= 4 && year <= 6){
    alert("Chuyên viên");
} else if(year >=1 && year <4){
    alert("Nhân viên có kinh nghiệm");
} else if (year < 1){
    alert("Mới vào nghề");
}