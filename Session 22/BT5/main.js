let input = prompt("Mời bạn nhập một chuỗi số nguyên:");
if (!/^\d+$/.test(input)) {
    console.log("Chuỗi nhập không hợp lệ");
} else {
    let even = 0, odd = 0;
    let numbers = input.split("").map(Number); //tra ve mang moi ko thay doi mang cu
    for (let i in numbers) {
        if (numbers[i] % 2 === 0) {
            even += numbers[i];
        } else {
            odd += numbers[i];
        }
    }
    console.log("Tổng các số chẵn:", even);
    console.log("Tổng các số lẻ:", odd);
}