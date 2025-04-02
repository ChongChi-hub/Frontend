while (true) {
alert(
    "--------------------MENU--------------------\n" +
        "1. Cộng hai số.\n" +
        "2. Trừ hai số.\n" +
        "3. Nhân hai số.\n" +
        "4. Chia hai số.\n" +
        "5. Thoát.\n" +
        "-----------------------------------------------\n"
);
  let choice = Number(prompt("Moi ban nhap lua chon:"));
  switch (choice) {
    case 1: 
    {
        let a;
        do {
            a = Number(prompt("Mời bạn nhập số a:"));
            if (isNaN(a)) {
                alert("Giá trị không hợp lệ, vui lòng nhập lại.");
            }
        } while (isNaN(a));
        
        let b;
        do {
            b = Number(prompt("Mời bạn nhập số b:"));
            if (isNaN(b)) {
                alert("Giá trị không hợp lệ, vui lòng nhập lại.");
            }
        } while (isNaN(b));
        
        alert(`Kết quả của phép cộng là: ${a + b}`);
        break;
    }
    case 2: 
    {
        let a;
        do {
            a = Number(prompt("Mời bạn nhập số a:"));
            if (isNaN(a)) {
                alert("Giá trị không hợp lệ, vui lòng nhập lại.");
            }
        } while (isNaN(a));
        
        let b;
        do {
            b = Number(prompt("Mời bạn nhập số b:"));
            if (isNaN(b)) {
                alert("Giá trị không hợp lệ, vui lòng nhập lại.");
            }
        } while (isNaN(b));
        
        alert(`Kết quả của phép trừ là: ${a - b}`);
        break;
    }
    case 3: 
    {
        let a;
        do {
            a = Number(prompt("Mời bạn nhập số a:"));
            if (isNaN(a)) {
                alert("Giá trị không hợp lệ, vui lòng nhập lại.");
            }
        } while (isNaN(a));
        
        let b;
        do {
            b = Number(prompt("Mời bạn nhập số b:"));
            if (isNaN(b)) {
                alert("Giá trị không hợp lệ, vui lòng nhập lại.");
            }
        } while (isNaN(b));
        
        alert(`Kết quả của phép nhân là: ${a * b}`);
        break;
    }
    case 4: 
    {
        let a;
        do {
            a = Number(prompt("Mời bạn nhập số a:"));
            if (isNaN(a)) {
                alert("Giá trị không hợp lệ, vui lòng nhập lại.");
            }
        } while (isNaN(a));
        
        let b;
        do {
            b = Number(prompt("Mời bạn nhập số b:"));
            if (isNaN(b) || b === 0) {
                alert("Giá trị không hợp lệ hoặc b không thể bằng 0, vui lòng nhập lại.");
            }
        } while (isNaN(b) || b === 0);
        
        alert(`Kết quả của phép chia là: ${a / b}`);
        break;
    }
    case 5: 
        break;
    default:
      alert("Lua chon khong hop le!! Vui long nhap lai.");
      break;
  }
  if (choice === 5) {
    break;
  }
}

