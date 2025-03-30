let arr = [];
while (true) {
  alert(
    "--------------------MENU--------------------\n" +
      "1. Nhập chuỗi ký tự.\n" +
      "2. Hiển thị chuỗi ký tự.\n" +
      "3. Đếm số lượng các ký tự là chuỗi và số trong chuỗi ký tự nhập vào.\n" +
      "4. Chuyển đổi các ký tự viết hoa → viết thường, viết thường → viết hoa trong chuỗi.\n" +
      "5. Trộn lẫn các ký tự của chuỗi gốc với chuỗi thứ 2 người dùng nhập vào.\n" +
      "6. Tách chuỗi thành các từ, sắp xếp chúng theo độ dài của từ, từ ngắn nhất đến dài nhất.\n" +
      "7. Thoát chương trình.\n" +
      "-----------------------------------------------\n"
  );
  let choice = Number(prompt("Mời bạn nhập lựa chọn:"));
  switch (choice) {
    case 1:
      // Nhập chuỗi
      let inputString = prompt("Nhập chuỗi:");
      arr.push(inputString);
      alert(`Nhập chuỗi thành công`);
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
      // Đếm số lượng ký tự là chuỗi và số
      if (arr.length === 0) {
        alert("Chuỗi trống.");
      } else {
        let str = arr[arr.length - 1];
        let letters = str.replace(/[^a-zA-Z]/g, "").length;
        let digits = str.replace(/[^0-9]/g, "").length;
        alert(`Số lượng chữ cái: ${letters}, Số lượng chữ số: ${digits}`);
      }
      break;
    case 4:
      // Chuyển đổi viết hoa ↔ viết thường
      if (arr.length === 0) {
        alert("Chuỗi trống.");
      } else {
        let str = arr[arr.length - 1];
        let converted = str
          .split("")
          .map((char) =>
            char === char.toUpperCase()
              ? char.toLowerCase()
              : char.toUpperCase()
          )
          .join("");
        alert(`Chuỗi sau khi chuyển đổi: ${converted}`);
      }
      break;
    case 5:
      // Trộn lẫn các ký tự của chuỗi gốc với chuỗi thứ 2
      if (arr.length === 0) {
        alert("Chuỗi trống.");
      } else {
        let str1 = arr[arr.length - 1];
        let str2 = prompt("Nhập chuỗi thứ 2:");
        let mixed = "";
        let maxLength = Math.max(str1.length, str2.length);
        for (let i = 0; i < maxLength; i++) {
          if (i < str1.length) mixed += str1[i];
          if (i < str2.length) mixed += str2[i];
        }
        alert(`Chuỗi sau khi trộn: ${mixed}`);
      }
      break;
    case 6:
      // Tách chuỗi thành các từ, sắp xếp theo độ dài
      if (arr.length === 0) {
        alert("Chuỗi trống.");
      } else {
        let str = arr[arr.length - 1];
        let words = str.split(/\s+/).sort((a, b) => a.length - b.length);
        alert(`Các từ sau khi sắp xếp: ${words.join(", ")}`);
      }
      break;
    case 7:
      // Thoát chương trình
      alert("Thoát chương trình.");
      break;
    default:
      alert("Lựa chọn không hợp lệ! Vui lòng nhập lại.");
      break;
  }
  if (choice === 7) {
    break;
  }
}
