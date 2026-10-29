let even_sum = 0
let odd_sum = 0

for ( let i = 0; i <= 50; i++) {
    if (i % 2 == 0) {
        even_sum += i
    } else {
        odd_sum += i
    }
}

document.write(`even sum: ${even_sum} <br>`)
document.write(`odd sum: ${odd_sum} <br>`)