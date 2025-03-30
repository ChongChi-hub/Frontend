let arr = [];
while (true) {
    alert(
        "--------------------MENU--------------------\n" +
            "1. Nhập chuỗi ký tự.\n" +
            "2. Hiển thị chuỗi ký tự.\n" +
            "3. Tìm tất cả các từ con trùng lặp trong chuỗi và số lần xuất hiện.\n" +
            "4. Tìm các từ có độ dài lớn nhất và nhỏ nhất trong chuỗi.\n" +
            "5. Tìm số lần xuất hiện nhiều nhất của các ký tự trong chuỗi.\n" +
            "6. Chuyển đổi chuỗi ký tự thành dạng snake_case.\n" +
            "7. Thoát chương trình.\n" +
            "-----------------------------------------------\n"
    );
    let choice = Number(prompt("Mời bạn nhập lựa chọn:"));
    switch (choice) {
        case 1:
            // Nhập chuỗi
            let inputString = prompt("Nhập chuỗi:");
            arr.push(inputString);
            alert(`Nhập chuỗi thành công`);
            break;
        case 2:
            // Hiển thị chuỗi
            if (arr.length === 0) {
                alert("Chuỗi trống.");
            } else {
                alert("Chuỗi đã nhập:");
                arr.forEach((str, index) => {
                    alert(`Chuỗi ${index + 1}: ${str}`);
                });
            }
            break;
        case 3:
            // Tìm từ con trùng lặp và số lần xuất hiện
            if (arr.length === 0) {
                alert("Chuỗi trống.");
            } else {
                let wordCount = {};
                arr.join(" ").toLowerCase().split(/\s+/).forEach(word => {
                    wordCount[word] = (wordCount[word] || 0) + 1;
                });
                let result = "";
                for (let word in wordCount) {
                    if (wordCount[word] > 1) {
                        result += `${word}: ${wordCount[word]} lần\n`;
                    }
                }
                alert(result || "Không có từ con trùng lặp.");
            break;
            //******************lên lớp tìm hiểu lại******************
        case 4:
            // Tìm từ có độ dài lớn nhất và nhỏ nhất
            if (arr.length === 0) {
                alert("Chuỗi trống.");
            } else {
                let words = arr.join(" ").split(/\s+/);
                let maxLength = Math.max(...words.map(word => word.length));
                let minLength = Math.min(...words.map(word => word.length));
                alert(
                    `Từ dài nhất: ${maxLength} ký tự\n` +
                    `Từ ngắn nhất: ${minLength} ký tự`
                );
            }
            
            break;
        case 5:
            // Tìm ký tự xuất hiện nhiều nhất
            if (arr.length === 0) {
                alert("Chuỗi trống.");
            } else {
                let charCount = {};
                for (let char of arr.join("")) {
                    charCount[char] = (charCount[char] || 0) + 1;
                }
                let maxCount = Math.max(...Object.values(charCount));
                let mostFrequentChars = Object.keys(charCount).filter(
                    char => charCount[char] === maxCount
                );
                alert(`Ký tự xuất hiện nhiều nhất: ${mostFrequentChars.join(", ")} (${maxCount} lần)`);
            }
            //**********Tìm hiểu lại******************
            break;
        case 6:
            // Chuyển đổi chuỗi thành snake_case
            if (arr.length === 0) {
                alert("Chuỗi trống.");
            } else {
                let snakeCaseStrings = arr.map(str =>
                    str.trim().toLowerCase().replace(/\s+/g, "_")
                );
                alert("Chuỗi sau khi chuyển đổi thành snake_case:");
                snakeCaseStrings.forEach((str, index) => {
                    alert(`Chuỗi ${index + 1}: ${str}`);
                });
            }
            break;
        case 7:
            // Thoát chương trình
            alert("Thoát chương trình.");
            break;
        default:
            alert("Lựa chọn không hợp lệ! Vui lòng nhập lại.");
            break;
    }
    if (choice === 7) {
        break;
    }
}
