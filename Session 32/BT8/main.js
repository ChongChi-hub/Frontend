function add() {
    let str = document.getElementById("a").value;
  
    if (str !== "") {
      const li = document.createElement("li");
      li.textContent = str + " ";

      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "x";
      deleteBtn.onclick = function () {
        const confirmDelete = confirm("Bạn có chắc muốn xoá nhiệm vụ này không?");
        if (confirmDelete) {
          li.remove();
        }
      };
      const editBtn = document.createElement("button");
      editBtn.textContent = "sửa";
      editBtn.onclick = function () {
        const newText = prompt("Nhập nội dung mới:", str);
        if (newText !== null && newText.trim() !== "") {
          li.firstChild.textContent = newText + " ";
          str = newText;
        }
      };
  
      li.appendChild(deleteBtn);
      li.appendChild(editBtn);
      document.getElementById("TaskList").appendChild(li);
      document.getElementById("a").value = "";
    } else {
      alert("Bạn phải nhập nhiệm vụ");
    }
  }
  