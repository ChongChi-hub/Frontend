let n = Number(prompt("Nhập số từ 0 - 999: "));
let result = "";
if (n < 0 || n > 999) {
    result = "Số nhập không hợp lệ";
} else {
    let hundred = Math.floor(n / 100);
    let ten = Math.floor((n % 100) / 10);
    let one = n % 10;
    if (hundred > 0) {
        if (hundred === 1) {
            result += "Một trăm ";
        } else if (hundred === 2) {
            result += "Hai trăm ";
        } else if (hundred === 3) {
            result += "Ba trăm ";
        } else if (hundred === 4) {
            result += "Bốn trăm ";
        } else if (hundred === 5) {
            result += "Năm trăm ";
        } else if (hundred === 6) {
            result += "Sáu trăm ";
        } else if (hundred === 7) {
            result += "Bảy trăm ";
        } else if (hundred === 8) {
            result += "Tám trăm ";
        } else if (hundred === 9) {
            result += "Chín trăm ";
        }
    }
    if (ten > 0) {
        if (ten === 1) {
            result += "mười ";
        }
        else if (ten === 2) {
            result += "hai mươi ";
        }
        else if (ten === 3) {
            result += "ba mươi ";
        }
        else if (ten === 4) {
            result += "bốn mươi ";
        }
        else if (ten === 5) {
            result += "năm mươi ";
        }
        else if (ten === 6) {
            result += "sáu mươi ";
        }
        else if (ten === 7) {
            result += "bảy mươi ";
        }
        else if (ten === 8) {
            result += "tám mươi ";
        }
        else if (ten === 9) {
            result += "chín mươi ";
        }
    } else if (one > 0 && hundred > 0) {
        result += "linh ";
    }
    if (one > 0) {
        if (ten === 1 && one === 5) {
            result += "lăm";
        }
        else if (ten > 1 && one === 1) {
            result += "mốt";
        }
        else if (one === 1) {
            result += "một";
        }
        else if (one === 2) {
            result += "hai";
        }
        else if (one === 3) {
            result += "ba";
        }
        else if (one === 4) {
            result += "bốn";
        }
        else if (one === 5) {
            result += "năm";
        }
        else if (one === 6) {
            result += "sáu";
        }
        else if (one === 7) {
            result += "bảy";
        }
        else if (one === 8) {
            result += "tám";
        }
        else if (one === 9) {
            result += "chín";
        }
    }
}
alert(result);
