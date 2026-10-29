let password = "4321"
let balance = 5000
let totalWithdrawn = 0
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
    document.write("Card Blocked")
} else {
    let choice
    do {
    let input = prompt(
        "choose operation:\n" +
        "1. Balance\n" +
        "2. Withdraw\n" +
        "3. Deposit\n" +
        "4. Exit"
        )
    
        choice = input ?? "4"
        switch (choice) {
            case "1":
                alert(`your balance is: ${balance}`)
                break

                case "2":
                let withdraw = Number(prompt("enter a number divisible by 100"))
                if (withdraw !== null) {                
                    if (withdraw % 100 !== 0) {
                        alert("invalid, must be divisible by 100")
                    } else if (withdraw <= 0 || isNaN(withdraw)) {
                        alert("invalid")
                    } else if (withdraw > balance) {
                        alert("not enough balance")
                    } else if (totalWithdrawn + withdraw > 4000) {
                        alert("the maximum amount is 4000")
                    } else {
                        balance -= withdraw
                        totalWithdrawn += withdraw
                        alert(`withdrawed succsessfully, your balance is: ${balance}`)
                    }
                }
                break

            case "3":
                let deposit = Number(prompt("enter your deposit"))
                if (deposit !== null) {
                    if (deposit <= 0 || isNaN(deposit)) {
                        alert("invalid")
                    } else {
                        balance += deposit
                        alert(`added successfuly, your balnce is: ${balance}`)
                    }
                }
                break

            case "4":
                break

            default:
                console.log("Invalid option")
                alert("Invalid option")
                break
        }
    } while (choice !== "4")
}