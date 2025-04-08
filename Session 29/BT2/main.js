let products = [];
function displayMenu() {
  console.log("\n=== Quản lý Sản Phẩm ===");
  console.log("1. Thêm sản phẩm mới");
  console.log("2. Hiển thị danh sách sản phẩm");
  console.log("3. Hiển thị chi tiết sản phẩm theo ID");
  console.log("4. Cập nhật sản phẩm theo ID");
  console.log("5. Xóa sản phẩm theo ID");
  console.log("6. Lọc sản phẩm theo khoảng giá");
  console.log("7. Thoát");
}
function addProduct() {
  let id = Number(prompt("Nhập ID sản phẩm:"));
  let name = prompt("Nhập tên sản phẩm:");
  let price = Number(prompt("Nhập giá sản phẩm:"));
  let category = prompt("Nhập danh mục sản phẩm:");
  let quantity = Number(prompt("Nhập số lượng sản phẩm trong kho:"));
  if (products.some((product) => product.id === id)) {
    console.log("ID đã tồn tại! Không thể thêm.");
    return;
  }
  products.push({ id, name, price, category, quantity });
  console.log("Đã thêm sản phẩm thành công!");
}
function displayProducts() {
  if (products.length === 0) {
    console.log("Danh sách sản phẩm trống!");
    return;
  }
  console.log("\n=== Danh sách sản phẩm ===");
  products.forEach((product) => {
    console.log(
      `ID: ${product.id}, Name: ${product.name}, Price: ${product.price}, Category: ${product.category}, Quantity: ${product.quantity}`
    );
  });
}
function displayProductById() {
  let productId = Number(prompt("Nhập ID sản phẩm:"));
  let product = products.find((product) => product.id === productId);
  if (product) {
    console.log(
      `\nChi tiết sản phẩm:\nID: ${product.id}\nName: ${product.name}\nPrice: ${product.price}\nCategory: ${product.category}\nQuantity: ${product.quantity}`
    );
  } else {
    console.log("Không tìm thấy sản phẩm với ID này.");
  }
}
function updateProduct() {
  let productId = Number(prompt("Nhập ID sản phẩm cần cập nhật:"));
  let product = products.find((product) => product.id === productId);

  if (!product) {
    console.log("Không tìm thấy sản phẩm với ID này.");
    return;
  }
  product.name = prompt("Nhập tên mới:") || product.name;
  product.price = Number(prompt("Nhập giá mới:")) || product.price;
  product.category = prompt("Nhập danh mục mới:") || product.category;
  product.quantity = Number(prompt("Nhập số lượng mới:")) || product.quantity;
  console.log("Đã cập nhật thông tin sản phẩm.");
}
function deleteProduct() {
  let idToDelete = Number(prompt("Nhập ID sản phẩm cần xóa:"));
  let index = products.findIndex((product) => product.id === idToDelete);
  if (index !== -1) {
    products.splice(index, 1);
    console.log("Đã xóa sản phẩm thành công!");
  } else {
    console.log("Không tìm thấy sản phẩm với ID này.");
  }
}
function filterProductsByPrice() {
  let minPrice = Number(prompt("Nhập giá tối thiểu:"));
  let maxPrice = Number(prompt("Nhập giá tối đa:"));
  let filteredProducts = products.filter(
    (product) => product.price >= minPrice && product.price <= maxPrice
  );
  if (filteredProducts.length > 0) {
    console.log("\nDanh sách sản phẩm trong khoảng giá:");
    filteredProducts.forEach((product) => {
      console.log(
        `ID: ${product.id}, Name: ${product.name}, Price: ${product.price}, Category: ${product.category}, Quantity: ${product.quantity}`
      );
    });
  } else {
    console.log("Không có sản phẩm nào trong khoảng giá này.");
  }
}
while (true) {
  displayMenu();
  let choice = Number(prompt("Nhập lựa chọn:"));
  switch (choice) {
    case 1:
      addProduct();
      break;
    case 2:
      displayProducts();
      break;
    case 3:
      displayProductById();
      break;
    case 4:
      updateProduct();
      break;
    case 5:
      deleteProduct();
      break;
    case 6:
      filterProductsByPrice();
      break;
    case 7:
      console.log("Thoát chương trình.");
      break;
    default:
      console.log("Lựa chọn không hợp lệ. Vui lòng nhập lại!");
  }
  if (choice === 7) break;
}
