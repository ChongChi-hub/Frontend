let arr = [];
while (true) {
  alert(
    "--------------------MENU--------------------\n" +
      "1. Nhập mảng 2 chiều.\n" +
      "2. Hiển thị mảng 2 chiều.\n" +
      "3. Tính tổng các phần tử trong mảng.\n" +
      "4. Tìm phần tử lớn nhất trong mảng và chỉ số của nó.\n" +
      "5. Tính trung bình cộng các phần tử của một hàng cụ thể.\n" +
      "6. Đảo ngược các hàng trong mảng.\n" +
      "7.Thoát.\n" +
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
      // Tìm phần tử lớn nhất trong mảng và chỉ số của nó
      if (arr.length === 0) {
        alert("Mảng rỗng!");
      } else {
        let max = arr[0][0];
        let maxRow = 0;
        let maxCol = 0;
        for (let i = 0; i < arr.length; i++) {
          for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] > max) {
              max = arr[i][j];
              maxRow = i;
              maxCol = j;
            }
          }
        }
        alert(
          `Phần tử lớn nhất trong mảng là: ${max}, tại vị trí hàng ${
            maxRow + 1
          }, cột ${maxCol + 1}`
        );
      }
      break;
    case 5:
      // Tính trung bình cộng các phần tử của một hàng cụ thể
      if (arr.length === 0) {
        alert("Mảng rỗng!");
      } else {
        let rowIndex = Number(prompt("Nhập chỉ số hàng (bắt đầu từ 1):")) - 1;
        if (rowIndex < 0 || rowIndex >= arr.length) {
          alert("Chỉ số hàng không hợp lệ!");
        } else {
          let sum = 0;
          for (let j = 0; j < arr[rowIndex].length; j++) {
            sum += arr[rowIndex][j];
          }
          let average = sum / arr[rowIndex].length;
          alert(
            `Trung bình cộng các phần tử của hàng ${
              rowIndex + 1
            } là: ${average}`
          );
        }
      }
      break;
    case 6:
      // Đảo ngược các hàng trong mảng
      if (arr.length === 0) {
        alert("Mảng rỗng!");
      } else {
        for (let i = 0; i < arr.length; i++) {
          arr[i].reverse();
        }
        let result = "Các hàng trong mảng đã được đảo ngược, mảng sau khi đảo ngược các hàng:\n";
        for (let i = 0; i < arr.length; i++) {
          for (let j = 0; j < arr[i].length; j++) {
            result += arr[i][j] + " ";
          }
          result += "\n";
        }
        alert(result);
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
