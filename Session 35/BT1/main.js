// main.js
let todoList = JSON.parse(localStorage.getItem("todoList")) || [];
renderTodoList();

function addTodo() {
    let todo = document.querySelector("#todo").value.trim();
    if (todo.length === 0) {
        alert("Tên công việc không được để trống");
        return;
    } else {
        todoList.push(todo);
        localStorage.setItem("todoList", JSON.stringify(todoList));
        renderTodoList();
        document.querySelector("#todo").value = "";
    }
}

function renderTodoList() {
    const table = document.getElementById("list");
    table.innerHTML = "";

    todoList.forEach((item, index) => {
        const row = `
            <tr>
                <td>${item}</td>
                <td>
                    <button onclick="editTodo(${index})">Sửa</button>
                    <button onclick="deleteTodo(${index})">Xoá</button>
                </td>
            </tr>
        `;
        table.innerHTML += row;
    });
}

function deleteTodo(index) {
    if (confirm("Bạn có chắc chắn muốn xoá không?")) {
        todoList.splice(index, 1);
        localStorage.setItem("todoList", JSON.stringify(todoList));
        renderTodoList();
    }
}

function editTodo(index) {
    const newTodo = prompt("Nhập công việc mới:", todoList[index]);
    if (newTodo !== null && newTodo.trim() !== "") {
        todoList[index] = newTodo.trim();
        localStorage.setItem("todoList", JSON.stringify(todoList));
        renderTodoList();
    }
}
