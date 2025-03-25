let tienRut = Number(prompt("Moi ban nhap so tien can rut: "));
if(isNaN(tienRut) || tienRut % 1000 !== 0 || tienRut < 1000){
    console.log("So tien nhap khong hop le");
} else {
    if(tienRut >= 500000){
        console.log(`So to 500k: ${Math.floor(tienRut / 500000)} to`);
        tienRut %= 500000;
    }
    if(tienRut >= 200000){
        console.log(`So to 200k: ${Math.floor(tienRut / 200000)} to`);
        tienRut %= 200000;
    }
    if(tienRut >= 100000){
        console.log(`So to 100k: ${Math.floor(tienRut / 100000)} to`);
        tienRut %= 100000;
    }
    if(tienRut >= 50000){
        console.log(`So to 50k: ${Math.floor(tienRut / 50000)} to`);
        tienRut %= 50000;
    }
    if(tienRut >= 20000){
        console.log(`So to 20k: ${Math.floor(tienRut / 20000)} to`);
        tienRut %= 20000;
    }
    if(tienRut >= 10000){
        console.log(`So to 10k: ${Math.floor(tienRut / 10000)} to`);
        tienRut %= 10000;
    }
    if(tienRut >= 5000){
        console.log(`So to 5k: ${Math.floor(tienRut / 5000)} to`);
        tienRut %= 5000;
    }
    if(tienRut >= 2000){
        console.log(`So to 2k: ${Math.floor(tienRut / 2000)} to`);
        tienRut %= 2000;
    }
    if(tienRut >= 1000){
        console.log(`So to 1k: ${Math.floor(tienRut / 1000)} to`);
        tienRut %= 1000;
    }
}