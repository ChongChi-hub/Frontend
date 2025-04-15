let dish = [
    { name: 'Rau sạch', category: 'Đồ ăn' },
    { name: 'Thịt lợn', category: 'Đồ ăn' },
    { name: 'Pepsi không calo', category: 'Nước' },
    { name: 'Cocacola', category: 'Nước' },
    { name: 'Cờ lê', category: 'Dụng cụ' },
    { name: 'Tuy vít', category: 'Dụng cụ' }
];

function filterProducts() {
    const selectCategory = document.getElementById('category').value;
    const result = document.getElementById('result');
    result.innerHTML = "";
    const filteredDish = dish.filter((item) => item.category === selectCategory);
    if (filteredDish.length === 0) {
        result.innerHTML = "<li>Không có sản phẩm nào phù hợp.</li>";
    } else {
        filteredDish.forEach((item) => {
            const li = document.createElement("li");
            li.innerHTML = `<strong>Tên đồ ăn: </strong>${item.name} - <strong>Danh mục: </strong>${item.category}`;
            result.appendChild(li);
        });
    }
}



// 1 lấy giá trị của select
// 2 lấy giá trị của result
// 3 lọc mảng dish theo category (filter)
// 4 duyệt mảng đã lọc, tạo các thẻ li (createElement)
// 5 innerHTML các thẻ li 
// 6 append các thẻ li vào result
// 7 nếu không có giá trị nào thì hiển thị thông báo