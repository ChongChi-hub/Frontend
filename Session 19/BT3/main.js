let choice = Number(prompt("1:(VND -> USD), 2:(USD -> VND): "));
let cost;
if(choice === 1){
    cost = Number(prompt("Nhập số tiền bạn muốn đổi (VND -> USD): "));
} else if(choice === 2){
    cost = Number(prompt("Nhập số tiền bạn muốn đổi (USD -> VND): "));
}else {
    alert("Không hợp lệ");
}
switch(choice){
    case 1:
    {
        let change;
        change = cost / 23000;
        alert(`${change} USD`);
        break;
    }
    case 2:
   {
       let change;
       change = cost * 23000;
       alert(`${change} VND`);
       break;
   }
}