let input = prompt("Mời bạn nhập 1 chuỗi số:");
if (/^\d+$/.test(input)) { // Kiểm tra chuỗi có chứa chữ hay ko.
  let reversed = input.split('').reverse().join('');// Tách chuỗi, đảo ngược, nối lại
  console.log(`Chuỗi sau khi đảo ngược: ${reverse}`);
} else {
  console.log("Dãy không hợp lệ. Vui lòng chỉ nhập số!");
}