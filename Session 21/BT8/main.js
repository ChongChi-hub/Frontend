console.log("Cac so amstrong co 3 chu so la:");
for (let i = 100; i < 1000; i++) {
    let a = Math.floor(i / 100);
    let b = Math.floor((i % 100) / 10);
    let c = i % 10;
    if (Math.pow(a, 3) + Math.pow(b, 3) + Math.pow(c, 3) === i) {
        console.log(i);
    }
}
