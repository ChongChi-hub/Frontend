const tableBody=document.querySelector("#employeeList tbody");
            const employees=[
                {id:1, name:"John", age:25, address:"New York"},
                {id:2, name:"Mike", age:30, address:"Los Angeles"},
                {id:3, name:"Sara", age:28, address:"Chicago"},
                {id:4, name:"James", age:33, address:"Houston"},
            ];
            employees.forEach((employee,index)=>{
                const row=document.createElement("tr");
                row.innerHTML = `
                <td>${index + 1}</td>
                <td>${employee.name}</td>
                <td>${employee.age}</td>
                <td>${employee.address}</td>`;
                tableBody.appendChild(row);
            });