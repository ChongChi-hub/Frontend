let n = Number(prompt("Moi ban nhap so bat ki: "))
if(isNaN(n) || n < 0 ){
    console.log("Xin moi nhap so lon hon 0");
} else{
    console.log(`Cac uoc cua ${n} la: `);
    for(let i = 0; i <= n; i++){
        if(n % i === 0){
            console.log(i)
        }
    }
}