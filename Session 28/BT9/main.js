let books = [];

function displayMenu() {
  console.log("\n=== Quản lý thư viện ===");
  console.log("1. Thêm sách mới");
  console.log("2. Hiển thị danh sách sách");
  console.log("3. Tìm kiếm sách theo tiêu đề");
  console.log("4. Cập nhật trạng thái mượn/trả sách");
  console.log("5. Xóa sách theo ID");
  console.log("6. Sắp xếp sách theo giá tăng dần");
  console.log("7. Thoát");
}

function addBook() {
  let id = Number(prompt("Nhập ID sách:"));
  let title = prompt("Nhập tên sách:");
  let author = prompt("Nhập tác giả:");
  let year = Number(prompt("Nhập năm xuất bản:"));
  let price = Number(prompt("Nhập giá sách:"));
  let isAvailable = true;

  if (books.some((book) => book.id === id)) {
    console.log("ID sách đã tồn tại! Không thể thêm.");
    return;
  }

  let newBook = { id, title, author, year, price, isAvailable };
  books.push(newBook);
  console.log("Đã thêm sách thành công!");
}

function displayBooks() {
  if (books.length === 0) {
    console.log("Danh sách sách trống!");
    return;
  }

  console.log("\n=== Danh sách sách ===");
  books.forEach((book) => {
    console.log(
      `ID: ${book.id}, Title: ${book.title}, Author: ${book.author}, Year: ${
        book.year
      }, Price: ${book.price} VND, Available: ${
        book.isAvailable ? "Có sẵn" : "Đã mượn"
      }`
    );
  });
}

function searchBook() {
  let keyword = prompt("Nhập từ khóa tìm kiếm:");
  let result = books.filter((book) =>
    book.title.toLowerCase().includes(keyword.toLowerCase())
  );

  if (result.length > 0) {
    console.log("\nKết quả tìm kiếm:");
    result.forEach((book) =>
      console.log(
        `ID: ${book.id}, Title: ${book.title}, Author: ${book.author}, Price: ${book.price} VND`
      )
    );
  } else {
    console.log("Không tìm thấy sách nào.");
  }
}

function updateBookStatus() {
  let bookId = Number(prompt("Nhập ID sách cần cập nhật trạng thái:"));
  let book = books.find((book) => book.id === bookId);

  if (!book) {
    console.log("Không tìm thấy sách với ID này.");
    return;
  }

  book.isAvailable = !book.isAvailable;
  console.log(
    `Trạng thái sách đã được cập nhật: ${
      book.isAvailable ? "Có sẵn" : "Đã mượn"
    }`
  );
}

function deleteBook() {
  let bookId = Number(prompt("Nhập ID sách cần xóa:"));
  let index = books.findIndex((book) => book.id === bookId);

  if (index !== -1) {
    books.splice(index, 1);
    console.log("Đã xóa sách thành công!");
  } else {
    console.log("Không tìm thấy sách với ID này.");
  }
}

function sortBooksByPrice() {
  books.sort((a, b) => a.price - b.price);
  console.log("Đã sắp xếp sách theo giá tăng dần.");
}

while (true) {
  displayMenu();
  let choice = Number(prompt("Nhập lựa chọn:"));

  switch (choice) {
    case 1:
      addBook();
      break;
    case 2:
      displayBooks();
      break;
    case 3:
      searchBook();
      break;
    case 4:
      updateBookStatus();
      break;
    case 5:
      deleteBook();
      break;
    case 6:
      sortBooksByPrice();
      break;
    case 7:
      alert("Thoát chương trình.");
      break;
    default:
      console.log("Lựa chọn không hợp lệ. Vui lòng nhập lại!");
  }
  if (choice === 7) {
    break;
  }
}
