let employees = [
  { name: "Nguyễn Văn A", position: "Developer" },
  { name: "Trần Thị B", position: "Designer" },
  { name: "Phạm Văn C", position: "Project Manager" },
  { name: "Lê Thị D", position: "Tester" },
  { name: "Nguyễn Văn E", position: "Developer" },
  { name: "Trần Thị F", position: "Designer" },
  { name: "Phạm Văn G", position: "Project Manager" },
  { name: "Lê Thị H", position: "Tester" },
  { name: "Nguyễn Văn I", position: "Developer" },
  { name: "Trần Thị J", position: "Designer" },
];
 
const rowsPerPage = 3;
let currentPage = 1;

function saveToLocalStorage() {
  localStorage.setItem("employees", JSON.stringify(employees));
}

function addEmployee() {
  const name = document.getElementById("name").value.trim();
  const position = document.getElementById("position").value.trim();

  if (name === "" || position === "") {
    alert("Vui lòng nhập đầy đủ thông tin");
    return;
  }

  employees.push({ name, position });
  saveToLocalStorage();
  document.getElementById("name").value = "";
  document.getElementById("position").value = "";
  renderTable();
}

function renderTable() {
  const table = document.getElementById("employeeTable");
  table.innerHTML = "";

  const start = (currentPage - 1) * rowsPerPage;
  const end = start + rowsPerPage;
  const currentEmployees = employees.slice(start, end);

  currentEmployees.forEach((employee, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${start + index + 1}</td>
      <td>${employee.name}</td>
      <td>${employee.position}</td>
    `;
    table.appendChild(row);
  });

  renderPagination();
}

function renderPagination() {
  const pagination = document.getElementById("pagination");
  pagination.innerHTML = "";

  const pageCount = Math.ceil(employees.length / rowsPerPage);

  const prevBtn = document.createElement("button");
  prevBtn.textContent = "Previous";
  prevBtn.disabled = currentPage === 1;
  prevBtn.onclick = () => {
    currentPage--;
    renderTable();
  };
  pagination.appendChild(prevBtn);

  for (let i = 1; i <= pageCount; i++) {
    const btn = document.createElement("button");
    btn.textContent = i;
    btn.className = currentPage === i ? "active" : "";
    btn.onclick = () => {
      currentPage = i;
      renderTable();
    };
    pagination.appendChild(btn);
  }

  const nextBtn = document.createElement("button");
  nextBtn.textContent = "Next";
  nextBtn.disabled = currentPage === pageCount;
  nextBtn.onclick = () => {
    currentPage++;
    renderTable();
  };
  pagination.appendChild(nextBtn);
}

renderTable();
