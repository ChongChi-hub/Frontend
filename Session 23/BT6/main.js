let arrFalsy = ["", false, 0, 5, 10,"Hello world!"];
let arrTruthy =[];
for(let i = 0; i < arrFalsy.length; i++){
    if(arrFalsy[i]){
        arrTruthy.push(arrFalsy[i]);
    }
}
console.log(arrTruthy);
