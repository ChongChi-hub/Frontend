let contacts = [];
function displayMenu() {
  console.log("\n=== Quản lý Danh Bạ ===");
  console.log("1. Thêm liên hệ mới");
  console.log("2. Hiển thị danh sách danh bạ");
  console.log("3. Tìm kiếm liên hệ theo số điện thoại");
  console.log("4. Cập nhật liên hệ theo ID");
  console.log("5. Xóa liên hệ theo ID");
  console.log("6. Thoát");
}
function addContact() {
  let id = Number(prompt("Nhập ID liên hệ:"));
  let name = prompt("Nhập tên liên hệ:");
  let email = prompt("Nhập email:");
  let phone = prompt("Nhập số điện thoại:");
  if (contacts.some((contact) => contact.id === id)) {
    console.log("ID đã tồn tại! Không thể thêm.");
    return;
  }
  contacts.push({ id, name, email, phone });
  console.log("Đã thêm liên hệ thành công!");
}
function displayContacts() {
  if (contacts.length === 0) {
    console.log("Danh bạ trống!");
    return;
  }
  console.log("\n=== Danh sách liên hệ ===");
  contacts.forEach((contact) => {
    console.log(
      `ID: ${contact.id}, Name: ${contact.name}, Email: ${contact.email}, Phone: ${contact.phone}`
    );
  });
}
function searchByPhone() {
  let phoneNumber = prompt("Nhập số điện thoại cần tìm:");
  let found = contacts.filter((contact) => contact.phone.includes(phoneNumber));
  if (found.length > 0) {
    console.log("\nKết quả tìm kiếm:");
    found.forEach((contact) =>
      console.log(
        `ID: ${contact.id}, Name: ${contact.name}, Email: ${contact.email}, Phone: ${contact.phone}`
      )
    );
  } else {
    console.log("Không tìm thấy liên hệ nào.");
  }
}
function updateContact() {
  let contactId = Number(prompt("Nhập ID liên hệ cần cập nhật:"));
  let contact = contacts.find((contact) => contact.id === contactId);
  if (!contact) {
    console.log("Không tìm thấy liên hệ với ID này.");
    return;
  }
  contact.name = prompt("Nhập tên mới:") || contact.name;
  contact.email = prompt("Nhập email mới:") || contact.email;
  contact.phone = prompt("Nhập số điện thoại mới:") || contact.phone;

  console.log("Đã cập nhật thông tin liên hệ.");
}
function deleteContact() {
  let idToDelete = Number(prompt("Nhập ID liên hệ cần xóa:"));
  let index = contacts.findIndex((contact) => contact.id === idToDelete);
  if (index !== -1) {
    contacts.splice(index, 1);
    console.log("Đã xóa liên hệ thành công!");
  } else {
    console.log("Không tìm thấy liên hệ với ID này.");
  }
}
while (true) {
  displayMenu();
  let choice = Number(prompt("Nhập lựa chọn:"));
  switch (choice) {
    case 1:
      addContact();
      break;
    case 2:
      displayContacts();
      break;
    case 3:
      searchByPhone();
      break;
    case 4:
      updateContact();
      break;
    case 5:
      deleteContact();
      break;
    case 6:
      console.log("Thoát chương trình.");
      break;
    default:
      console.log("Lựa chọn không hợp lệ. Vui lòng nhập lại!");
  }

  if (choice === 6) break;
}
