function isSquareNumber(n) {
    if (n < 0) {
        alert("Số " + n + " không phải là số chính phương.");
        return false;
    }
    let sqrt = Math.sqrt(n);
    let result = Number.isInteger(sqrt) ? "Số " + n + " là số chính phương." : "Số " + n + " không phải là số chính phương.";
    alert(result);
    return Number.isInteger(sqrt);
}

let n = Number(prompt("Mời bạn nhập một số: "));
isSquareNumber(n);
