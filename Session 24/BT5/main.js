let arr = [];
while (true) {
  alert(
    "--------------------MENU--------------------\n" +
      "1. Nhập mảng 2 chiều.\n" +
      "2. Hiển thị mảng 2 chiều.\n" +
      "3. Tính tổng các phần tử trong mảng.\n" +
      "4. Tính tổng đường chéo chính.\n" +
      "5. Tính tổng đường chéo phụ.\n" +
      "6. Tính trung bình cộng các phần tử trong một hàng hoặc một cột (Người dùng chọn hàng hoặc cột cần tính toán).\n" +
      "7. Thoát chương trình.\n" +
      "-----------------------------------------------\n"
  );
  let choice = Number(prompt("Moi ban nhap lua chon:"));
  switch (choice) {
    case 1:
      // Nhập mảng 2 chiều
      let rows = Number(prompt("Nhập số hàng của mảng:"));
      let cols = Number(prompt("Nhập số cột của mảng:"));
      arr = [];
      for (let i = 0; i < rows; i++) {
        let row = [];
        for (let j = 0; j < cols; j++) {
          row.push(
            Number(prompt(`Nhập phần tử tại hàng ${i + 1}, cột ${j + 1}:`))
          );
        }
        arr.push(row);
      }
      alert("Mảng 2 chiều đã được nhập thành công!");
      break;
    case 2:
      // Hiển thị mảng 2 chiều
      if (arr.length === 0) {
        alert("Mảng rỗng!");
      } else {
        let result = "Mảng 2 chiều:\n";
        for (let i = 0; i < arr.length; i++) {
          for (let j = 0; j < arr[i].length; j++) {
            result += arr[i][j] + " ";
          }
          result += "\n";
        }
        alert(result);
      }
      break;
    case 3:
      // Tính tổng các phần tử trong mảng
      if (arr.length === 0) {
        alert("Mảng rỗng!");
      } else {
        let sum = 0;
        for (let i = 0; i < arr.length; i++) {
          for (let j = 0; j < arr[i].length; j++) {
            sum += arr[i][j];
          }
        }
        alert(`Tổng các phần tử trong mảng là: ${sum}`);
      }
      break;
    case 4:
      // Tính tổng đường chéo chính
      if (arr.length === 0) {
        alert("Mảng rỗng!");
      } else if (arr.length !== arr[0].length) {
        alert("Hãy nhập ma trận vuông với row và col bằng nhau!");
      } else {
        let mainDiagonalSum = 0;
        for (let i = 0; i < arr.length; i++) {
          mainDiagonalSum += arr[i][i];
        }
        alert(`Tổng đường chéo chính là: ${mainDiagonalSum}`);
      }
      break;
    case 5:
      // Tính tổng đường chéo phụ
      if (arr.length === 0) {
        alert("Mảng rỗng!");
      } else if (arr.length !== arr[0].length) {
        alert("Hãy nhập ma trận vuông với row và col bằng nhau!");
      } else {
        let secondaryDiagonalSum = 0;
        for (let i = 0; i < arr.length; i++) {
          secondaryDiagonalSum += arr[i][arr.length - 1 - i];
        }
        alert(`Tổng đường chéo phụ là: ${secondaryDiagonalSum}`);
      }
      break;
    case 6:
      // Tính trung bình cộng các phần tử trong một hàng hoặc một cột
      if (arr.length === 0) {
        alert("Mảng rỗng!");
      } else {
        let option = prompt(
          "Nhập 'row' để tính trung bình hàng, 'col' để tính trung bình cột:"
        ).toLowerCase();
        let index = Number(prompt("Nhập chỉ số (bắt đầu từ 1):")) - 1;
        if (option === "row" && index >= 0 && index < arr.length) {
          let sum = 0;
          for (let i = 0; i < arr[index].length; i++) {
            sum += arr[index][i];
          }
          let avg = sum / arr[index].length;
          alert(`Trung bình cộng hàng ${index + 1} là: ${avg}`);
        } else if (option === "col" && index >= 0 && index < arr[0].length) {
          let sum = 0;
          for (let i = 0; i < arr.length; i++) {
            sum += arr[i][index];
          }
          let avg = sum / arr.length;
          alert(`Trung bình cộng cột ${index + 1} là: ${avg}`);
        } else {
          alert("Chỉ số hoặc lựa chọn không hợp lệ!");
        }
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
