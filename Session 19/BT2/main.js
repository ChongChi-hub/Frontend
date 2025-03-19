let char = prompt("Nhập một ký tự: ");
if (/^[a-zA-Z]$/.test(char)) {
    alert(`Ký tự ${char} là chữ cái`);
} else {
    alert("Không phải chữ cái.");
}
