let year = Number(prompt("Mời bạn nhập năm: "));
if(((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0)){
    alert("Năm " + year + " là năm nhuận");
} else {
    alert("Năm " + year + " là năm không nhuận");
}