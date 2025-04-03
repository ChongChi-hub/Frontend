let employees =[ {
    id: "nv01",
    name: "Nguyễn Một",
    position: "Nhân viên tạm thời",
    salary: 5000000
},
{
    id: "nv02",
    name: "Trần Hai",
    position: "Giám đốc",
    salary: 20000000
},
{
    id: "nv03",
    name: "Đặng Ba",
    position: "Trưởng phòng",
    salary: 10000000
}
];

function displayMenu() {
    console.log("\n=== Menu ===");
    console.log("1. Hiển thị danh sách nhân viên");
    console.log("2. Thêm nhận viên mới");
    console.log("3. Xóa nhân viên theo id");
    console.log("4. Cập nhật lương của nhân viên theo id");
    console.log("5. Tìm kiếm nhân viên theo tên");
    console.log("6. Thoát");
    console.log("\n");
}
function displayEmployeesList(){
    employees.forEach((emp)=>{
        console.log(`ID: ${emp.id} - Name: ${emp.name} - Position: ${emp.position} - Salary: ${emp.salary}`);
    })
}
function addNewEmployees(){
    let id = prompt("Mời bạn nhập id nhân viên muốn thêm");
    let name = prompt("Mời bạn nhập tên nhân viên muốn thêm");
    let position = prompt("Mời bạn nhập vị trí cho nhân viên muốn thêm");
    let salary = Number(prompt("Mời bạn nhập lương cho nhân viên muốn thêm"));
    let newEmployees = {
        id,
        name,
        position,
        salary,
    }
    employees.push(newEmployees);
    alert("Thêm nhân viên mới thành công");
}
function indexByEmployeesId(id) {
    return employees.findIndex((emp) => emp.id === id);
}
function deleteEmployees(){
    let idToDelete = prompt("Nhập ID nhân viên cần xóa:");
    let indexFind = indexByEmployeesId(idToDelete);
    if(indexFind !== -1){
        let isConfirm = window.confirm(` Bạn có chắc chắn muốn xóa nhân viên: ${employees[indexFind].name} không ???`);
        if(isConfirm){
            employees = employees.filter(emp => emp.id !== idToDelete);
            alert("Xóa thông tin nhân viên thành công")
        }
    }else{
        console.error("Không tìm thấy id của nhân viên bạn muốn xóa");
    }
}
function editEmployees(){
    let idToEdit = prompt("Nhập ID nhân viên cần cập nhật lương:");
    let indexFind = indexByEmployeesId(idToEdit)
    if(indexFind !== -1){
        employees[indexFind].salary = prompt(`Nhập lương mới bạn muốn cập nhật cho nhân viên: ${employees[indexFind].name}, số lương ban đầu là: ${employees[indexFind].salary}`)
        alert("Cập nhật lương cho nhân viên thành công");
    }else{
        console.error("Không tìm thấy id của nhân viên");
    }
}
function findEmployeesByName(){
    let findByName = prompt("Mời bạn nhập tên nhân viên bạn muốn tìm kiếm");
    let result = employees.filter(emp => emp.name.toLowerCase().includes(findByName.toLowerCase()));
    if (result.length > 0) {
        console.log("Danh sách nhân viên tìm thấy:");
        result.forEach(emp => {
            console.log(`ID: ${emp.id} - Name: ${emp.name} - Position: ${emp.position} - Salary: ${emp.salary}`)
        });
    } else {
        console.log("Không tìm thấy nhân viên nào với tên này.");
    }
}
while(true){
    displayMenu();
    let choice = Number(prompt("Mời bạn nhập lựa chọn"));
    switch (choice) {
        case 1:
            displayEmployeesList();
            break;
        case 2:
            addNewEmployees();
            break;
        case 3:
            deleteEmployees();
            break;
        case 4:
            editEmployees();
            break;
        case 5:
            findEmployeesByName();
            break;
        case 6:
            alert("Thoát chương trình");
            break
        default:
            break;
    }
    if(choice === 6) break;
}