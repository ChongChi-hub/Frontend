let studentList = [];
function addStudents() {
  let count = parseInt(prompt("Nhập số lượng sinh viên: "));
  for (let i = 0; i < count; i++) {
    let name = prompt(`Nhập tên đầy đủ sinh viên thứ ${i + 1}: `);
    studentList.push(name);
  }
  console.log("Danh sách sinh viên đã được nhập.");
}
function displayStudents() {
  if (studentList.length === 0) {
    console.log("Danh sách sinh viên trống.");
  } else {
    console.log("Danh sách sinh viên:");
    studentList.forEach((student, index) => {
      console.log(`${index + 1}. ${student}`);
    });
  }
}
function findStudent() {
  let name = prompt("Nhập tên sinh viên cần tìm: ");
  let found = studentList.find(
    (student) => student.toLowerCase() === name.toLowerCase()
  );
  if (found) {
    console.log(`Đã tìm thấy sinh viên: ${found}`);
  } else {
    console.log("Sinh viên không có trong danh sách.");
  }
}

function deleteStudent() {
  let name = prompt("Nhập tên sinh viên cần xóa: ");
  let index = studentList.findIndex(
    (student) => student.toLowerCase() === name.toLowerCase()
  );
  if (index !== -1) {
    studentList.splice(index, 1);
    console.log("Đã xóa sinh viên khỏi danh sách.");
  } else {
    console.log("Sinh viên không có trong danh sách.");
  }
}
function mainMenu() {
  while (true) {
    console.log("\n--- Menu Quản Lý Sinh Viên ---");
    console.log("1. Nhập danh sách sinh viên");
    console.log("2. Hiển thị danh sách sinh viên");
    console.log("3. Tìm sinh viên theo tên");
    console.log("4. Xóa sinh viên khỏi danh sách");
    console.log("5. Thoát");
    let choice = Number(prompt("Chọn chức năng (1-5): "));
    switch (choice) {
      case 1:
        addStudents();
        break;
      case 2:
        displayStudents();
        break;
      case 3:
        findStudent();
        break;
      case 4:
        deleteStudent();
        break;
      case 5:
        console.log("Thoát chương trình.");
        return;
      default:
        console.log("Lựa chọn không hợp lệ. Vui lòng chọn lại.");
    }
  }
}
mainMenu();
