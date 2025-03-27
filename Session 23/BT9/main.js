let arr = [];
let evenNumber = [];
let primeNumber = [];
while (true) {
  alert(
    "--------------------MENU--------------------\n" +
      "1.Nhập số phần tử cần nhập và giá trị các phần tử.\n" +
      "2.In ra giá trị các phần tử đang quản lý.\n" +
      "3.In ra giá trị các phần tử chẵn và tính tổng.\n" +
      "4.In ra giá trị lớn nhất và nhỏ nhất trong mảng.\n" +
      "5.In ra các phần tử là số nguyên tố trong mảng và tính tổng.\n" +
      "6.Nhập vào một số và thống kê trong mảng có bao nhiêu phần tử đó.\n" +
      "7.Thêm một phần từ vào vị trí chỉ định.\n" +
      "8.Thoát.\n" +
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
          let value = Number(prompt(`Moi ban nhap gia tri phan tu thu ${i + 1}`));
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
        let sumEven = 0;
        evenNumber = [];
        for (let i of arr) {
          if (Number(arr[i]) % 2 === 0) {
        evenNumber.push(Number(arr[i]));
          }
        }
        if (evenNumber.length === 0) {
          alert("Mang khong co so chan");
        } else {
          for (let i in evenNumber) {
        sumEven += evenNumber[i];
          }
          alert(`Cac so chan trong mang: ${evenNumber}\nTong cac so chan: ${sumEven}`);
        }
      }
      break;
    case 4:
      if (arr.length === 0) {
        alert("Mang rong!!!");
      } else {
        let max = Math.max(...arr)
        let min = Math.min(...arr)
        alert(`So lon nhat: ${max}\nSo nho nhat: ${min}`);
      }
      break;
    case 5:
      let sumPrime = 0;
      if (arr.length === 0) {
        alert("Mang rong!!!");
      } else {
        for (let num of arr) {
          if (num >= 2) {
            let isPrime = true;
            for (let i = 2; i <= Math.sqrt(num); i++) {
              if (num % i === 0) {
          isPrime = false;
          break;
              }
            }
            if (isPrime) {
              primeNumber.push(num);
              sumPrime += num;
            }
          }
        }
    }
      alert(`Cac so nguyen to trong mang: ${primeNumber}\nTong cac so nguyen to: ${sumPrime}`);
      break;
    case 6:
      if (arr.length === 0) {
        alert("Mang rong!!!");
      } else{
        let find = Number(prompt("Moi ban nhap vao mot so can tim kiem: "));
        let findCount = 0;
        for(let i = 0; i < arr.length; i++){
          if(arr[i] === find){
            findCount++;
          }
        }
        alert(`Gia tri ${find} xuat hien ${findCount} lan`);
      }
      break;
    case 7:
      if (arr.length === 0) {
        alert("Mang rong!!!");
      } else {
        let index = Number(prompt("Nhap vi tri ban muon them phan tu:"));
        let value = Number(prompt("Nhap gia tri ban muon them:"));
        if (index < 0 || index > arr.length || isNaN(value)) {
          alert("Vi tri hoac gia tri khong hop le.");
        } else {
          arr.splice(index, 0, value);
          alert(arr);
        }
      }
      break;
    case 8:
      break;

    default:
      alert("Lua chon khong hop le!! Vui long nhap lai.");
      break;
  }
  if (choice === 8) {
    break;
  }
}
