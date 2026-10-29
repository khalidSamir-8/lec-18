for (let i = 1; i <= 30; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
    document.write(`${i} Fizz Buzz <br>`)
    }
    else if (i % 3 == 0) {
        document.write(`${i} Fizz <br>`)
    }
    else if (i % 5 == 0) {
        document.write(`${i} Buzz <br>`)
    }
    else {
        document.write(`${i} <br>`)
    }
}