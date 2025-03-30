let arr = [];
while (true) {
  alert(
    "--------------------MENU--------------------\n" +
      "1. Nhập mảng số nguyên.\n" +
      "2. Hiển thị mảng.\n" +
      "3. Tìm phần tử lớn nhất trong mảng và in ra chỉ số của nó.\n" +
      "4. Tính tổng và trung bình cộng của các số dương trong mảng.\n" +
      "5. Đảo ngược mảng.\n" +
      "6. Kiểm tra mảng có đối xứng không.\n" +
      "7.Thoát.\n" +
      "-----------------------------------------------\n"
  );
  let choice = Number(prompt("Moi ban nhap lua chon:"));
  switch (choice) {
    case 1:
      //Nhập mảng số nguyên
      let n = Number(prompt("Nhap so phan tu ban muon them vao mang"));
      if (n <= 0 || !Number.isInteger(n)) {
        alert("Khong hop le. Vui long nhap mot so nguyen duong.");
      } else {
        for (let i = 0; i < n; i++) {
          let value = Number(
            prompt(`Moi ban nhap gia tri phan tu thu ${i + 1}`)
          );
          if (!Number.isNaN(value)) {
            arr.push(value);
          } else {
            alert("Gia tri khong hop le. Vui long nhap mot so.");
            i--;
          }
        }
      }
      break;
    case 2:
      // Hiển thị mảng
      if (arr.length === 0) {
        alert("mang rong!!!");
      } else {
        alert(arr);
      }
      break;
    case 3:
      // Tìm phần tử lớn nhất trong mảng và in ra chỉ số của nó
      if (arr.length === 0) {
        alert("Mang rong!!!");
      } else {
        let max = arr[0];
        let index = 0;
        for (let i = 1; i < arr.length; i++) {
          if (arr[i] > max) {
            max = arr[i];
            index = i;
          }
        }
        alert(` Phần tử lớn nhất là: ${max}, chỉ số: ${index}`);
      }
      break;
    case 4:
      // Tính tổng và trung bình cộng của các số dương trong mảng
      if (arr.length === 0) {
        alert("Mang rong!!!");
      } else {
        let sum = 0;
        let count = 0;
        for (let i = 0; i < arr.length; i++) {
          if (arr[i] > 0) {
            sum += arr[i];
            count++;
          }
        }
        let average = count > 0 ? sum / count : 0;
        alert(
          `Tổng các số dương trong mảng là: ${sum}, Trung bình cộng là: ${average}`
        );
      }
      break;
    case 5:
      // Đảo ngược mảng
      if (arr.length === 0) {
        alert("Mang rong!!!");
      } else {
        arr.reverse();
        alert(`Mang sau khi dao nguoc: ${arr}`);
      }
      break;
    case 6:
      // Kiểm tra mảng có đối xứng không
      if (arr.length === 0) {
        alert("Mang rong!!!");
      } else {
        let isSymmetric = true;
        for (let i = 0; i < Math.floor(arr.length / 2); i++) {
          if (arr[i] !== arr[arr.length - 1 - i]) {
            isSymmetric = false;
            break;
          }
        }
        if (isSymmetric) {
          alert("Mang doi xung.");
        } else {
          alert("Mang khong doi xung.");
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
