let count = 0

for (let i = 2; i <= 100; i++) {
    let isPrime = true;
    for (let j = 2; j <= Math.sqrt(i); j++) {
        if (i % j == 0) {
        isPrime = false;
        break;
        }
    }
    if (isPrime) {
        document.write(`${i} `);
        count += 1
    }
}
document.write(`<br>there is a ${count} prime number`)