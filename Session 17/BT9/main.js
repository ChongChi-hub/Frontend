let a = Number(prompt("Nhap so a: "));
let b = Number(prompt("Nhap so b: "));
let c = Number(prompt("Nhap so c: "));
let delta = (b * b) - 4 * a * c;
let sqrtDelta = Math.sqrt(delta);
let one = (-b + sqrtDelta) / (2 * a);
let two = (-b - sqrtDelta) / (2 * a);
document.writeln("x1 = ", one, "\n", "x2 = ", two);