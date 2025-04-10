let objects =[];
function addObject(){
    let object = document.getElementById("object").value.trim();
    if(object === ""){
        alert("Tên môn học không được để trống!") 
        return;
    } 
    else{
         objects.push(object);
    }
}
function showObjects(){
    let list = document.getElementById("objectList");
    list.innerHTML = "";
    objects.forEach((obj) => {
        let listItem = document.createElement("li");
        listItem.textContent = obj;
        list.appendChild(listItem);
    });
}