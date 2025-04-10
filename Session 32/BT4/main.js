function check(){
    let checkbox=document.getElementById("a").value
    const regex=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if(regex.test(checkbox)){
        alert("email hợp lệ")
    }
    else{
        alert("email không hợp lệ")
    }      
}