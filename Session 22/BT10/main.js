let arr = [];
while (true) {
  alert(
    "----------MENU----------\n" +
      "1.Nhap vao mang.\n" +
      "2.Hien thi mang.\n" +
      "3.Them phan tu.\n" +
      "4.Sua phan tu.\n" +
      "5.Xoa phan tu.\n" +
      "6.Thoat.\n" +
      "------------------------\n"
  );
  let choice = Number(prompt("Moi ban nhap lua chon:"));
  switch (choice) {
    case 1:
      let input = prompt(
        "Moi ban nhap phan tu cho mang (cach nhau boi dau space): "
      );
      arr = input.split(" ").map(Number);
      alert("Them phan tu vao mang thanh cong");
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
        let addValue = Number(
          prompt("Moi ban nhap phan tu de them vao mang: ")
        );
        arr.push(addValue);
        alert("Them phan tu moi vao mang thanh cong");
      }
      break;
    case 4:
      if (arr.length === 0) {
        alert("Mang rong!!!");
      } else {
        let indexEditValue = Number(
          prompt(
            `${arr}\n Nhap vi tri phan tu ban muon sua (0 -> ${
              arr.length - 1
            }): `
          )
        );
        if (indexEditValue < 0 || indexEditValue > arr.length) {
          alert("Vi tri khong hop le");
        } else {
          let newValue = Number(prompt("Moi ban nhap gia tri cua phan tu: "));
          arr[indexEditValue] = newValue;
          alert("Chinh sua phan tu thanh cong");
        }
      }
      break;
    case 5:
      if (arr.length === 0) {
        alert("Mang rong!!!");
      } else {
        let indexDelValue = Number(
          prompt(
            `${arr}\nMoi ban nhap vi tri phan tu muon xoa (0 -> ${
              arr.length - 1
            }):`
          )
        );
        if (indexDelValue < 0 || indexDelValue >= arr.length) {
          alert("Vi tri khong hop le");
        } else {
          arr.splice(indexDelValue, 1);
          alert("Xoa phan tu thanh cong");
        }
      }
      break;
    case 6:
      alert("Thoat chuong trinh");
      break;

    default:
      alert("Lua chon khong hop le!! Vui long nhap lai.");
      break;
  }
  if (choice === 6) {
    break;
  }
}
