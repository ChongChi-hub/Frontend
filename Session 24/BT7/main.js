let arr = [];
while (true) {
  alert(
    "--------------------MENU--------------------\n" +
      "1. Nhập chuỗi.\n" +
      "2. Hiển thị chuỗi.\n" +
      "3. Loại bỏ các khoảng trắng ở đầu và cuối chuỗi.\n" +
      "4. Đảo ngược chuỗi ký tự.\n" +
      "5. Đếm số lượng từ trong chuỗi ký tự.\n" +
      "6. Tìm kiếm và thay thế các ký tự.\n" +
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
      // Loại bỏ các khoảng trắng ở đầu và cuối chuỗi
      if (arr.length === 0) {
        alert("Chuỗi trống.");
      } else {
        arr = arr.map((str) => str.trim()); // DÙng hàm trim để loại bỏ khoảng trnawgs
        alert("Đã loại bỏ khoảng trắng ở đầu và cuối chuỗi.");
      }
      break;
    case 4:
      // Đảo ngược chuỗi ký tự
      if (arr.length === 0) {
        alert("Chuỗi trống.");
      } else {
        arr = arr.map((str) => str.split("").reverse().join(""));
        alert("Đã đảo ngược chuỗi ký tự.");
      }
      break;
    case 5:
      // Đếm số lượng từ trong chuỗi ký tự
      if (arr.length === 0) {
        alert("Chuỗi trống.");
      } else {
        arr.forEach((str, index) => {
          let wordCount = str.trim().split(/\s+/).length; //Hàm split(/\s+/) chia chuỗi thành một mảng các từ, sử dụng dấu cách (\s+) làm điểm tách.
          alert(`Chuỗi ${index + 1} có ${wordCount} từ.`);
        });
      }
      break;
    case 6:
      // Tìm kiếm và thay thế các ký tự
      if (arr.length === 0) {
        alert("Chuỗi trống.");
      } else {
        let searchChar = prompt("Nhập ký tự cần tìm:");
        let replaceChar = prompt("Nhập ký tự thay thế:");
        arr = arr.map((str) => str.split(searchChar).join(replaceChar));
        alert("Đã thay thế các ký tự. Chuỗi sau khi thay thế:");
        arr.forEach((str, index) => {
          alert(`Chuỗi ${index + 1}: ${str}`);
        });
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
