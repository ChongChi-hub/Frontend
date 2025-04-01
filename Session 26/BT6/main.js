function formatDate(dateStr) {
    let temp = dateStr.split("-");
    console.log(`${temp[2]}/${temp[1]}/${temp[0]}`);
}
let arr = ["2025-03-10", "2024-12-25", "2023-07-01"];
arr.forEach(formatDate);