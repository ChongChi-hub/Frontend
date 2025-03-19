let a = Number(prompt("Nhap so a: "));
let b = Number(prompt("Nhap so b: "));
let c = Number(prompt("Nhap so c: "));
let delta = (b * b) - 4 * a * c;
let sqrtDelta = Math.sqrt(delta);
let one = (-b + sqrtDelta) / (2 * a);
let two = (-b - sqrtDelta) / (2 * a);
if(delta < 0){
    alert("Phương trình vô nghiệm");
} else if(delta === 0){
    alert(`Phương trình có nghiệm kép: x1 = x2 = ${one}`)
} else if(delta > 0){
    alert(`Phuơng trình có hai nghiệm phân biệt x1 = ${one} và x2 = ${two}`);
}
