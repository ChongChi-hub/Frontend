function isPalindrome (str){
    let reversedStr = str.split('').reverse().join('');
    if(reversedStr === str){
        console.log(` Là chuỗi đối xứng`);
    } else{
        console.log(` Không phải là chuỗi đối xứng`);
        
    }
}
let str = prompt(` Mời bạn nhập một chuỗi bất kì để kiểm tra chuỗi đối xứng`);
isPalindrome(str);