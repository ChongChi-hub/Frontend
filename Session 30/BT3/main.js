let store = [];
let cart = [];

function showByCompany() {
  let company = prompt("Nhập tên hãng:");
  let result = store.filter(
    (item) => item.company.toLowerCase() === company.toLowerCase()
  );
  if (result.length === 0) {
    console.log("Không có điện thoại nào của hãng này.");
    return;
  }
  result.forEach((item) => {
    console.log(
      `ID: ${item.id}, Tên: ${item.name}, Giá: ${item.price}, SL: ${item.quantity}, Hãng: ${item.company}`
    );
  });
}

function addPhone() {
  let id = Number(prompt("Nhập ID:"));
  let name = prompt("Nhập tên điện thoại:");
  let price = Number(prompt("Nhập giá:"));
  let quantity = Number(prompt("Nhập số lượng:"));
  let company = prompt("Nhập hãng:");
  store.push({ id, name, price, quantity, company });
  console.log("Đã thêm điện thoại mới vào cửa hàng.");
}

function searchPhone() {
  let keyword = prompt("Nhập tên hoặc ID:");
  let result = store.filter(
    (item) =>
      item.name.toLowerCase().includes(keyword.toLowerCase()) ||
      item.id.toString() === keyword
  );
  if (result.length === 0) {
    console.log("Không tìm thấy điện thoại.");
    return;
  }
  result.forEach((item) => {
    console.log(
      `ID: ${item.id}, Tên: ${item.name}, Giá: ${item.price}, SL: ${item.quantity}, Hãng: ${item.company}`
    );
  });
}

function buyPhone() {
  let id = Number(prompt("Nhập ID điện thoại cần mua:"));
  let quantity = Number(prompt("Nhập số lượng cần mua:"));
  let phone = store.find((item) => item.id === id);
  if (!phone) {
    console.log("Không tìm thấy điện thoại.");
    return;
  }
  if (phone.quantity < quantity) {
    console.log("Không đủ số lượng.");
    return;
  }
  phone.quantity -= quantity;
  cart.push({ id: phone.id, name: phone.name, price: phone.price, quantity });
  console.log("Đã thêm vào giỏ hàng.");
}

function checkout() {
  if (cart.length === 0) {
    console.log("Giỏ hàng trống.");
    return;
  }
  let total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  console.log(`Tổng tiền cần thanh toán: ${total} VNĐ`);
  cart = [];
  console.log("Thanh toán thành công.");
}

function sortByPrice() {
  let order = prompt("Nhập 'asc' để tăng, 'desc' để giảm:");
  if (order === "asc") {
    store.sort((a, b) => a.price - b.price);
    console.log("Đã sắp xếp giá tăng dần.");
  } else if (order === "desc") {
    store.sort((a, b) => b.price - a.price);
    console.log("Đã sắp xếp giá giảm dần.");
  } else {
    console.log("Lựa chọn không hợp lệ.");
    return;
  }
  store.forEach((item) => {
    console.log(
      `ID: ${item.id}, Tên: ${item.name}, Giá: ${item.price}, SL: ${item.quantity}, Hãng: ${item.company}`
    );
  });
}

function totalPriceInStock() {
  let total = store.reduce((sum, item) => sum + item.price * item.quantity, 0);
  console.log(`Tổng số tiền điện thoại trong kho: ${total} VNĐ`);
}

function totalByCompany() {
  let result = {};
  store.forEach((item) => {
    let key = item.company.toLowerCase();
    result[key] = (result[key] || 0) + item.quantity;
  });
  for (let key in result) {
    console.log(`${key} - ${result[key]}`);
  }
}
function menu() {
  let choice;
  do {
    choice = prompt(
      `====== MENU ======
1. Hiển thị điện thoại theo hãng
2. Thêm điện thoại mới
3. Tìm kiếm điện thoại theo tên hoặc id
4. Mua điện thoại
5. Thanh toán giỏ hàng
6. Sắp xếp điện thoại theo giá
7. Hiển thị tổng số tiền trong kho
8. Hiển thị tổng số lượng theo hãng
0. Thoát
Chọn chức năng: `
    );

    switch (choice) {
      case "1":
        showByCompany();
        break;
      case "2":
        addPhone();
        break;
      case "3":
        searchPhone();
        break;
      case "4":
        buyPhone();
        break;
      case "5":
        checkout();
        break;
      case "6":
        sortByPrice();
        break;
      case "7":
        totalPriceInStock();
        break;
      case "8":
        totalByCompany();
        break;
      case "0":
        break;
      default:
        console.log("Lựa chọn không hợp lệ.");
    }
    if (choice === 0) break;
  } while (choice !== "0");
}

menu();
