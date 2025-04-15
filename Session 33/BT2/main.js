function countChar() {
    let text = document.getElementById("input").value.trim();
    let count = text.length;
    document.getElementById('count').innerText = `Số ký tự: ${count}`;
}