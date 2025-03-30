let arr = [];
let evenNumber = [];
let primeNumber = [];
while (true) {
  alert(
    "--------------------MENU--------------------\n" +
      "1. Nhập mảng.\n" +
      "2. Hiển thị mảng.\n" +
      "3. Tìm phần tử lớn nhất và nhỏ nhất trong mảng.\n" +
      "4. Tính tổng các phần tử trong mảng.\n" +
      "5. Tìm số lần xuất hiện của một phần tử trong mảng.\n" +
      "6. Sắp xếp mảng tăng dần.\n" +
      "7.Thoát.\n" +
      "-----------------------------------------------\n"
  );
  let choice = Number(prompt("Moi ban nhap lua chon:"));
  switch (choice) {
    case 1:
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
      if (arr.length === 0) {
        alert("mang rong!!!");
      } else {
        alert(arr);
      }
      break;
    case 3:
      if (arr.length === 0) {
        alert("Mang rong!!!");
      } else {
        let max = Math.max(...arr);
        let min = Math.min(...arr);
        alert(`So lon nhat: ${max}\nSo nho nhat: ${min}`);
      }
      break;
    case 4:
      if (arr.length === 0) {
        alert("Mang rong!!!");
      } else {
        let sum = 0;
        for (let i = 0; i < arr.length; i++) {
          sum += arr[i];
        }
        alert(`Tong cac phan tu trong mang la: ${sum}`);
      }
      break;
    case 5:
      if (arr.length === 0) {
        alert("Mang rong!!!");
      } else {
        let find = Number(prompt("Moi ban nhap vao mot so can tim kiem: "));
        let findCount = 0;
        for (let i = 0; i < arr.length; i++) {
          if (arr[i] === find) {
            findCount++;
          }
        }
        alert(`Gia tri ${find} xuat hien ${findCount} lan`);
      }
      break;
    case 6:
      arr.sort((a, b) => a - b);
      alert(`Mang sau khi sap xep tang dan: ${arr}`);
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
