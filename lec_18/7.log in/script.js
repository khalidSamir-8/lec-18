let password = "js2026"
let attempts = 3
let correct = false

while (attempts > 0) {
    let key = prompt("enter your password")
    if (key == password) {
        correct = true
        document.write("welcome")
        break
    } else {
        attempts -= 1
    }
}

if (!correct) {
    document.write("Account locked")
}