/*
    Completed by Colack (8/3/2022)
    Notes:
        - This is a vary bare-bones math library.
        - It is not meant to be a full-feature math library. (Yet)
        - New functions can be added as needed.
*/

// Multiply 2 values.
Number.prototype.multiply = function(n) {
	return this.valueOf() * n;
};

// Divide 2 values.
Number.prototype.divide = function(n) {
	return this.valueOf() / n;
};

// Add 2 values.
Number.prototype.add = function(n) {
	return this.valueOf() + n;
};

// Subtract 2 values.
Number.prototype.subtract = function(n) {
	return this.valueOf() - n;
};

// Modulo 2 values.
Number.prototype.modulo = function(n) {
	return this.valueOf() % n;
};

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
