function add() {
    let str = document.getElementById("a").value;
    
    if (str !== "") {
      const li = document.createElement("li");
      li.textContent = str + " ";
  
      const btn = document.createElement("button");
      btn.textContent = "x";
      btn.onclick = function () {
        const confirmDelete = confirm("Bạn có chắc muốn xoá nhiệm vụ này không?");
        if (confirmDelete) {
          li.remove();
        }
      };
      li.appendChild(btn);
      document.getElementById("TaskList").appendChild(li);
      document.getElementById("a").value = "";
    } 
    else {
      alert("vui lòng nhập 1 nhiệm vụ");
    }
  }
  