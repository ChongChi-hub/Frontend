function binaryConversion(n){
    let result = n.toString(2);
    document.writeln("Số nhị phân: ", result);
    return result;
}
let n = Number(prompt("Mời bạn nhập số bất kỳ: "));
binaryConversion(n);