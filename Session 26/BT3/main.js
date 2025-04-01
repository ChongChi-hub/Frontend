const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function ValidEmail(arr) {
    if(arr.length === 0) console.log("Mảng rỗng");
    
    for (let i = 0; i < arr.length; i++) {
        if (emailRegex.test(arr[i])) {
            console.log(arr[i]);
        }
    }
}

let arr = ["john.doe@gmail.com", "invalidemail.com", "hello@domain.net", "space@out.com"];
ValidEmail(arr);