let a = Number(prompt("Nhap so a: "));
let b = Number(prompt("Nhap so b: "));
let c = Number(prompt("Nhap so c: "));
let delta = (b * b) - 4 * a * c;
if(delta < 0){
    console.log("Phuong trinh vo nghiem");
} else if (delta === 0){
    console.log("Phuong trinh co nghiem kep");
    console.log(`x = ${-b / (2 * a)}`);
}else{
    let one = (-b + Math.sqrt(delta)) / (2 * a);
    let two = (-b - Math.sqrt(delta)) / (2 * a);
    console.log("x1 = ", one, "\n", "x2 = ", two);
}