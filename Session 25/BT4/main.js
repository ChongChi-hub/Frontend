function isPrime(a) {
  if (isNaN(a)) {
    console.log(`Dữ liệu không hợp lệ`);
    return;
  }
  if (a < 2) {
    console.log(`Không phải là số nguyên tố`);
    return;
  }
  for (let i = 2; i <= Math.sqrt(a); i++) {
    if (a % i === 0) {
      console.log(`Không phải là số nguyên tố`);
      return;
    }
  }
  console.log(`Là số nguyên tố`);
}

let a = 2;
isPrime(a);
