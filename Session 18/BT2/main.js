let math = Number(prompt("Nhập điểm toán: "));
let english = Number(prompt("Nhập điểm tiếng anh: "));
let literature = Number(prompt("Nhập điểm toán: "));

let avg = (math + english + literature) / 3;
if(avg < 5){
    alert("Yếu");
} else if(avg >= 5 && avg <= 6.4){
    alert("Trung Bình");
    } else if(avg >= 6.5 && avg <= 7.9){
        alert("Khá");
        } else{
            alert("Giỏi");
            }
