let result1 = "javascript" + 5;
console.log(`"javascript" + 5 =`, result1); // Kết quả: "javascript5"

let result2 = "javascript" - 1;
console.log(`"javascript" - 1 =`, result2); // Kết quả: NaN

let result3 = "3" + 2;
console.log(`"3" + 2 =`, result3); // Kết quả: "32"

let result4 = "5" - 4;
console.log(`"5" - 4 =`, result4); // Kết quả: 1

let result5 = isNaN("123");
console.log(`isNaN("123") =`, result5); // Kết quả: false

let result6 = isNaN("hello");
console.log(`isNaN("hello") =`, result6); // Kết quả: true

let result7 = Number.isNaN("123");
console.log(`Number.isNaN("123") =`, result7); // Kết quả: false

let result8 = Number.isNaN(NaN);
console.log(`Number.isNaN(NaN) =`, result8); // Kết quả: true
