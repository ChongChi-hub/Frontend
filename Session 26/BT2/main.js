function checkStr(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > 5) {
      console.log(`${arr[i]}`);
    }
  }
}
let arr = ["apple", "banana", "cat", "elephant", "dog"];
checkStr(arr);
