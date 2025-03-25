for(let i = 10; i >= 1; i--){
    let rowA = "";
    for(let j = 1; j <= i; j++){
        rowA += "*";
    }
    console.log(rowA)
}
console.log("")
for(let i = 1; i <= 10; i++){
    let rowB = "";
    for(let j = 1; j <= i; j++){
        rowB += "*";
    }
    console.log(rowB)
}
console.log("")
for (let i = 1; i <= 10; i++) {
  let space = ""; 
  let rowC = "";

  for (let j = 1; j <= 10 - i; j++) {
    space += " ";
  }

  for (let k = 1; k <= i; k++) {
    rowC += "*";
  }
  console.log(space + rowC);
}
console.log("")
for (let i = 10; i >= 1; i--) {
    let space = ""; 
    let rowD = "";
  
    for (let j = 1; j <= 10 - i; j++) {
      space += " ";
    }
  
    for (let k = 1; k <= i; k++) {
      rowD += "*";
    }
    console.log(space + rowD);
  }