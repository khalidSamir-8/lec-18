let num = 12345
while (num) {
    document.write(num % 10)
    num = (num - num % 10) / 10
}