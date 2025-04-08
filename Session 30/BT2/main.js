let books = [
  {
    id: "B001",
    name: "Mã Sạch",
    category: "Lập Trình",
    price: 500,
    quantity: 10,
  },
  {
    id: "B002",
    name: "Lập Trình Viên Thực Dụng",
    category: "Lập Trình",
    price: 600,
    quantity: 8,
  },
  {
    id: "B003",
    name: "Bạn Không Biết JS",
    category: "Lập Trình",
    price: 450,
    quantity: 15,
  },
  {
    id: "B004",
    name: "JavaScript Hùng Biện",
    category: "Lập Trình",
    price: 550,
    quantity: 5,
  },
  {
    id: "B005",
    name: "JavaScript: Những Phần Tinh Túy",
    category: "Lập Trình",
    price: 400,
    quantity: 12,
  },
  {
    id: "B006",
    name: "Mẫu Thiết Kế",
    category: "Kỹ Thuật Phần Mềm",
    price: 700,
    quantity: 7,
  },
];
let cart = [];
function displayMenu() {
  console.log("=== Book Management Menu ===");
  console.log("1. Hiển thị danh sách sách theo thể loại");
  console.log("2. Thêm sách mới vào kho");
  console.log("3. Tìm kiếm sách theo tên hoặc id");
  console.log("4. Mua sách");
  console.log("5. Sắp xếp sách theo giá (Tăng dần)");
  console.log("6. Sắp xếp sách theo giá (Giảm dần)");
  console.log("7. Tính tổng số lượng sách đã mua và tổng tiền trong giỏ hàng");
  console.log("8. Hiển thị tổng số lượng sách trong kho");
  console.log("9. Thoát chương trình");
}
function displayBooksByCategory(category) {
  const filteredBooks = books.filter((book) => book.category === category);
  console.log("Books in category:", category);
  console.table(filteredBooks);
}
function addBookToInventory() {
  const id = prompt("Nhập ID sách: ");
  const name = prompt("Nhập tên sách: ");
  const category = prompt("Nhập thể loại sách: ");
  const price = parseFloat(prompt("Nhập giá sách: "));
  const quantity = parseInt(prompt("Nhập số lượng sách: "));
  books.push({ id, name, category, price, quantity });
  console.log("Sách đã được thêm vào kho.");
}
function searchBook() {
  const keyword = prompt("Nhập tên hoặc ID sách cần tìm: ").toLowerCase();
  const results = books.filter(
    (book) =>
      book.name.toLowerCase().includes(keyword) ||
      book.id.toLowerCase().includes(keyword)
  );
  console.log("Kết quả tìm kiếm:");
  console.table(results);
}
function buyBook() {
  const id = prompt("Nhập ID sách muốn mua: ");
  const quantity = parseInt(prompt("Nhập số lượng muốn mua: "));
  const book = books.find((book) => book.id === id);
  if (book && book.quantity >= quantity) {
    book.quantity -= quantity;
    cart.push({ ...book, quantity });
    console.log("Sách đã được thêm vào giỏ hàng.");
  } else {
    console.log("Không đủ số lượng sách hoặc sách không tồn tại.");
  }
}
function sortBooksByPriceAscending() {
  books.sort((a, b) => a.price - b.price);
  console.log("Sách đã được sắp xếp theo giá tăng dần:");
  console.table(books);
}
function sortBooksByPriceDescending() {
  books.sort((a, b) => b.price - a.price);
  console.log("Sách đã được sắp xếp theo giá giảm dần:");
  console.table(books);
}
function calculateCartTotals() {
  const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  console.log(`Tổng số lượng sách đã mua: ${totalQuantity}`);
  console.log(`Tổng tiền: ${totalPrice}`);
}
function displayTotalBooksInInventory() {
  const totalBooks = books.reduce((sum, book) => sum + book.quantity, 0);
  console.log(`Tổng số lượng sách trong kho: ${totalBooks}`);
}
function main() {
  let choice;
  do {
    displayMenu();
    choice = parseInt(prompt("Nhập lựa chọn của bạn: "));
    switch (choice) {
      case 1:
        const category = prompt("Nhập thể loại sách: ");
        displayBooksByCategory(category);
        break;
      case 2:
        addBookToInventory();
        break;
      case 3:
        searchBook();
        break;
      case 4:
        buyBook();
        break;
      case 5:
        sortBooksByPriceAscending();
        break;
      case 6:
        sortBooksByPriceDescending();
        break;
      case 7:
        calculateCartTotals();
        break;
      case 8:
        displayTotalBooksInInventory();
        break;
      case 9:
        console.log("Thoát chương trình.");
        break;
      default:
        console.log("Lựa chọn không hợp lệ. Vui lòng thử lại.");
    }
  } while (choice !== 9);
}
main();
