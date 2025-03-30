let arr = [];
while (true) {
  alert(
    "--------------------MENU--------------------\n" +
      "1. Nhập chuỗi.\n" +
      "2. Hiển thị chuỗi.\n" +
      "3. Tính độ dài của chuỗi.\n" +
      "4. Đếm số lần xuất hiện của một ký tự (Người dùng nhập) trong chuỗi.\n" +
      "5. Kiểm tra chuỗi có phải là chuỗi đối xứng không.\n" +
      "6. Chuyển đổi chuỗi thành chữ in hoa các ký tự đầu tiên của từ.\n" +
      "7.Thoát.\n" +
      "-----------------------------------------------\n"
  );
  let choice = Number(prompt("Moi ban nhap lua chon:"));
  switch (choice) {
    case 1:
      // Nhập chuỗi
      let inputString = prompt("Nhập chuỗi:");
      arr.push(inputString);
      alert(` Nhập chuỗi thành công`);
      break;
    case 2:
      // Hiển thị chuỗi
      if (arr.length === 0) {
        alert("Chuỗi trống.");
      } else {
        alert("Chuỗi đã nhập:");
        arr.forEach((str, index) => {
          alert(`Chuỗi ${index + 1}: ${str}`);
        });
      }
      break;
    case 3:
      // Tính độ dài của chuỗi
      if (arr.length === 0) {
        alert("Chuỗi trống.");
      } else {
        arr.forEach((str, index) => {
          alert(`Độ dài của chuỗi ${index + 1}: ${str.length}`);
        });
      }
      break;
    case 4:
      // Đếm số lần xuất hiện của một ký tự (Người dùng nhập) trong chuỗi
      if (arr.length === 0) {
        alert("Chuỗi trống.");
      } else {
        let charToCount = prompt("Nhập ký tự cần đếm:");
        arr.forEach((str, index) => {
          let count = 0;
          for (let char of str) {
            if (char === charToCount) {
              count++;
            }
          }
          alert(
            `Số lần xuất hiện của ký tự '${charToCount}' trong chuỗi ${
              index + 1
            }: ${count}`
          );
        });
      }
      break;
    case 5:
      // Kiểm tra chuỗi có phải là chuỗi đối xứng không
      if (arr.length === 0) {
        alert("Chuỗi trống.");
      } else {
        arr.forEach((str, index) => {
          let reversedStr = str.split("").reverse().join("");
          let isPalindrome = str === reversedStr;
          if (isPalindrome) {
            alert(`Chuỗi ${index + 1} là chuỗi đối xứng.`);
          } else {
            alert(`Chuỗi ${index + 1} không phải là chuỗi đối xứng.`);
          }
        });
      }
      break;
    case 6:
      // Chuyển đổi chuỗi thành chữ in hoa các ký tự đầu tiên của từ
      if (arr.length === 0) {
        alert("Chuỗi trống.");
      } else {
        arr = arr.map((str) =>
          str
            .split(" ")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ")
        );
        alert(
          "Đã chuyển đổi chuỗi thành chữ in hoa các ký tự đầu tiên của từ."
        );
      }
      break;
    case 7:
      break;
    default:
      alert("Lua chon khong hop le!! Vui long nhap lai.");
      break;
  }
  if (choice === 7) {
    break;
  }
}
