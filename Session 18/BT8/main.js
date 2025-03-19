let a = Number(prompt("Nhập cạnh thứ nhất của tam giác: "));
let b = Number(prompt("Nhập cạnh thứ hai của tam giác: "));
let c = Number(prompt("Nhập cạnh thứ ba của tam giác: "));

if(a <= 0 || b <= 0 || c <= 0 || a + b < c || a + c < b || b + c < a){
    alert("Độ dài cạnh không hợp lệ");
} else if (a === b && b === c){
    alert("Tam giác này là tam giác đều");
} else if (a === b || b === c || a === c){
    alert("Tam giác này là tam giác cân");
} else {
    let corner1 = Number(prompt("Mời bạn nhập góc thứ nhất"));
    let corner2 = Number(prompt("Mời bạn nhập góc thứ hai"));
    let corner3 = Number(prompt("Mời bạn nhập góc thứ ba"));
    if((corner1 <= 0 || corner1 >=180 || corner2 <= 0 || corner2 >=180 || corner3 <= 0 || corner3 >=180) || ((corner1 + corner2 + corner3) !== 180)){
        alert("Góc không hợp lệ");
    } else if((corner1 === 90 || corner2 === 90 || corner3 === 90) && (corner1 + corner2 + corner3 === 180)){
        alert("Tam giác này là tam giác vuông")
    } else if((corner1 === corner2 || corner2 === corner3 || corner1 === corner3) && (corner1 + corner2 + corner3 === 180)) {
        alert("Tam giác này là tam giác cân");
    } else if((corner1 === corner2 && corner2 === corner3) && (corner1 + corner2 + corner3 === 180)){
        alert("Tam giác này là tam giác đều")
    } else {
        alert("Đây là tam giác thường");
    }
}
