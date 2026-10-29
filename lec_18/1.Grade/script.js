let grade = prompt("enter your grade: ")
if (0 <= grade && grade <= 100) {
    if (grade >= 85) {
        document.write("excellent")
    } else if (grade >= 75) {
        document.write("very good")
    } else if (grade >= 60) {
        document.write("good")
    } else if (grade >= 50) {
        document.write("pass")
    } else {
        document.write("failed")
    }
} else {
    document.write("invalid grade")
}