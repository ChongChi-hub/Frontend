let rectangle = "";
for (let i = 0; i < 7; i++) {
  for (let j = 0; j < 22; j++) {
    if (i === 0 || i === 6 || j === 0 || j === 21) {
      rectangle += "*";
    } else {
      rectangle += " ";
    }
  }
  rectangle += "\n";
}
console.log(rectangle);
