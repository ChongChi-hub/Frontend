function evenNumber (arr){
    if(arr.length === 0){
        console.log(` Mảng rỗng`);
    }else{
        for(let i = 0; i < arr.length; i++){
            if(isNaN(arr[i])){
                console.log(` Không hợp lệ`);
            }else {
                if(arr[i] % 2 === 0){
                    console.log(arr[i]);
                }
            }
        }
    }
}

let arr = [11,4,65,6]
evenNumber(arr);