let input = prompt("Mời bạn nhập một chuỗi số nguyên:");
if (!/^\d+$/.test(input)) {
  console.log("Chuỗi nhập không hợp lệ");
} else {
  let numbers = input.split("").map(Number);
  let max = numbers[0];
  for (let i in numbers) {
    if (numbers[i] > max) max = numbers[i];
  }
  console.log(max);
}
