function mainMenu() {
    let choice;
    do {
        console.log("Menu Tính Toán Hình Học:");
        console.log("1. Tính diện tích hình tròn");
        console.log("2. Tính chu vi hình tròn");
        console.log("3. Tính diện tích hình chữ nhật");
        console.log("4. Tính chu vi hình chữ nhật");
        console.log("5. Thoát");
        choice = Number(prompt("Nhập lựa chọn của bạn (1-5):"));

        switch (choice) {
            case 1:
                calculateCircleArea();
                break;
            case 2:
                calculateCircleCircumference();
                break;
            case 3:
                calculateRectangleArea();
                break;
            case 4:
                calculateRectanglePerimeter();
                break;
            case 5:
                console.log("Thoát chương trình.");
                break;
            default:
                console.log("Lựa chọn không hợp lệ. Vui lòng chọn lại.");
        }
    } while (choice !== 5);
}
function calculateCircleArea() {
    let radius = Number(prompt("Nhập bán kính hình tròn:"));
    if (radius > 0) {
        let area = Math.PI * radius * radius;
        console.log(`Diện tích hình tròn là: ${area}`);
    } else {
        console.log("Bán kính phải lớn hơn 0.");
    }
}
function calculateCircleCircumference() {
    let radius = Number(prompt("Nhập bán kính hình tròn:"));
    if (radius > 0) {
        let circumference = 2 * Math.PI * radius;
        console.log(`Chu vi hình tròn là: ${circumference}`);
    } else {
        console.log("Bán kính phải lớn hơn 0.");
    }
}
function calculateRectangleArea() {
    let length = Number(prompt("Nhập chiều dài hình chữ nhật:"));
    let width = Number(prompt("Nhập chiều rộng hình chữ nhật:"));
    if (length > 0 && width > 0) {
        let area = length * width;
        console.log(`Diện tích hình chữ nhật là: ${area}`);
    } else {
        console.log("Chiều dài và chiều rộng phải lớn hơn 0.");
    }
}
function calculateRectanglePerimeter() {
    let length = Number(prompt("Nhập chiều dài hình chữ nhật:"));
    let width = Number(prompt("Nhập chiều rộng hình chữ nhật:"));
    if (length > 0 && width > 0) {
        let perimeter = 2 * (length + width);
        console.log(`Chu vi hình chữ nhật là: ${perimeter}`);
    } else {
        console.log("Chiều dài và chiều rộng phải lớn hơn 0.");
    }
}
mainMenu();