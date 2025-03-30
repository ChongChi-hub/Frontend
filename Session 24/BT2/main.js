let arr = [];
while (true) {
  alert(
    "--------------------MENU--------------------\n" +
      "1. Nhập mảng số nguyên.\n" +
      "2. Hiển thị mảng.\n" +
      "3. Tìm các phần tử chẵn và lẻ.\n" +
      "4. Tính trung bình cộng của mảng.\n" +
      "5. Xóa phần tử tại vị trí chỉ định.\n" +
      "6. Tìm phần tử lớn thứ hai trong mảng.\n" +
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
    let evenNumber = [];
    let oddNumber = [];
    for (let num of arr) {
        if (num % 2 === 0) {
            evenNumber.push(num);
        } else {
            oddNumber.push(num);
        }
    }
    alert(`Cac so chan: ${evenNumber}\nCac so le: ${oddNumber}`);
    break;
    case 4:
        if (arr.length === 0) {
            alert("Mang rong!!!");
        } else {
            let sum = 0;
            for (let i = 0; i < arr.length; i++) {
            sum += arr[i];
            }
            let average = sum / arr.length;
            alert(`Trung binh cong cua mang la: ${average}`);
        }
        break;
    case 5:
      let index = Number(prompt("Nhap vi tri phan tu ban muon xoa:"));
      if (index < 0 || index >= arr.length || !Number.isInteger(index)) {
        alert("Vi tri khong hop le. Vui long nhap lai.");
      } else {
        arr.splice(index, 1);
        alert(`Mang sau khi xoa phan tu tai vi tri ${index}: ${arr}`);
      }
      break;
    case 6:
      let max = arr[0];
    let answer = 0;
  for(let i = 0; i < arr.length; i++){
    if(arr[i] < max){
        answer = arr[i];
    }
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      answer = max;
      max = arr[i];
    }
    else if (arr[i] > answer && arr[i] < max) {
      answer = arr[i];
    }
  }
  alert(`Phan tu lon thu hai trong mang la: ${answer}`);
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