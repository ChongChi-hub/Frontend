function countPosInt(arr) {
    if (arr.length === 0) {
        console.log(`Mảng rỗng`);
    } else {
        let count = 0;
        for (let i in arr) {
            if (arr[i] > 0 && Number.isInteger(arr[i])) {
                count++;
            }
        }
        console.log(count);
    }
}
let arr = [1,2,5,7,-8,6];
countPosInt(arr);