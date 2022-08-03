/*
    Completed by Colack (8/3/2022)
    Notes:
        - This is a vary bare-bones math library.
        - It is not meant to be a full-feature math library. (Yet)
        - New functions can be added as needed.
*/

// Add two numbers
function add(num1, num2) {
    return num1 + num2;
}

// Subtract two numbers
function subtract(num1, num2) {
    return num1 - num2;
}

// Multiply two numbers
function multiply(num1, num2) {
    return num1 * num2;
}

// Divide two numbers
function divide(num1, num2) {
    return num1 / num2;
}

// Create a random number between two numbers
function random(num1, num2) {
    return Math.floor(Math.random() * (num2 - num1 + 1)) + num1;
}

// Calculate the circumference of a circle
function circumference(radius) {
    return 2 * Math.PI * radius;
}

// Get the square root of a number
function squareRoot(num) {
    return Math.sqrt(num);
}
