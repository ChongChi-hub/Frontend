let products = [
  ["mì tôm", 5, 5000],
  ["bánh mì", 12, 15000],
  ["bánh bao", 5, 8000],
  ["mèn mén", 30, 20000],
];
let cart = [];

let choice;
do {
  choice = Number(
    prompt(
      "Mời nhập lựa chọn:\n1. Xem danh sách sản phẩm\n2. Chọn sản phẩm\n3. In hóa đơn\n4. Thoát"
    )
  );
  switch (choice) {
    case 1:
      showProduct();
      break;
    case 2:
      addToCart();
      break;
    case 3:
      printBill();
      break;
    case 4:
      console.log("Thoát chương trình.");
      break;
    default:
      console.log("Lựa chọn không hợp lệ.");
      break;
  }
} while (choice !== 4);

function showProduct() {
  console.log("Danh sách sản phẩm:");
  for (let i = 0; i < products.length; i++) {
    console.log(
      `${i + 1}. ${products[i][0]} - Số lượng: ${products[i][1]} - Giá: ${
        products[i][2]
      }đ`
    );
  }
}
function addToCart() {
  let productName = prompt("Mời bạn nhập sản phẩm cần mua");
  let flag = -1;
  for (let i = 0; i < products.length; i++) {
    if (products[i][0] === productName) {
      flag = i; //gán flag cho i để từ sau truy cập sản phẩm tìm kiếm
      break;
    }
  }
  if (flag === -1) {
    console.log("Sản phẩm ko có trong cửa hàng");
  } else {
    console.log("Sản phẩm bạn cần mua có trong cửa hàng");
    //xem sản phẩm còn hàng để bán không
    if (products[flag][1] === 0) {
      console.log("Sản phẩm đã hết hàng");
    } else {
      console.log("Sản phầm còn hàng");
      products[flag][1]--; //giảm số lượng sản phẩm cửa hàng đi 1
      //thêm sản phẩm vào giỏ hàng
      //Kiểm tra sản phẩm đã có trong giỏ hàng hay chưa nếu có rồi tăng số lượng, chưa có thì thêm vào giỏ hàng
      let index = -1;
      for (let i = 0; i < cart.length; i++) {
        if (cart[i][0] === productName) {
          index = i;
          break;
        }
      }
      if (index === -1) {
        //sản phẩm chưa có trong giỏ hàng
        cart.push([productName, 1, products[flag][2]]);
      } else {
        //sản phẩm đã có trong giỏ hàng
        cart[index][1]++;
      }
    }
  }
}
function printBill() {
  console.log(cart);
  console.log(products);
  let sum = 0;
  for (let i = 0; i < cart.length; i++) {
    sum += cart[i][1] * cart[i][2];
  }
  console.log(` Tổng số tiền phải trả: ${sum}`);
}
