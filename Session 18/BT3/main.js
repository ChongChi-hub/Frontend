let username = prompt("Mời bạn nhập username: ");
if(username === "ADMIN"){
    let password = prompt("Mời bạn nhập password: ");
    if(password === "TheMaster"){
        alert("Welcome");
    } else if (password === null){
        alert("Cancelled");
    } else {
        alert("Wrong Password");
    }
} else if (username === null){
    alert("Cancelled");
} else {
    alert("I don't know you");
}