function change(){
    let title = document.getElementById("title");
    let text = document.getElementById("text");
    if (document.body.style.backgroundColor === "black") {
        document.body.style.backgroundColor = "white";
        title.style.color = "black";
        text.style.color = "black";
    } else {
        document.body.style.backgroundColor = "black";
        title.style.color = "white";
        text.style.color = "white";
    }
}