/*
    @Authors Varrience, Colack
        - Last updated by Colack    (8/16/2022)
        - Last updated by Varrience (8/17/2022)
    @About
        - adds new features to Number & Math constructors
*/

// Multiply 2 values.
Number.prototype.multiply = function(n) {
	return this * n;
};

// Divide 2 values.
Number.prototype.divide = function(n) {
	return this / n;
};

// Add 2 values.
Number.prototype.add = function(n) {
	return this + n;
};

// Subtract 2 values.
Number.prototype.subtract = function(n) {
	return this - n;
};

// Modulo 2 values.
Number.prototype.modulo = function(n) {
	return this % n;
};

// Useful in cases where a variable may not be a number
Number.isInteger = function (value) {
    return (typeof value === 'number' && isFinite(value) && Math.floor(value) === value)
}

// Checks if a given value is a float
Number.prototype.isFloat = function () {
    return (typeof this === 'number' && Math.floor(this) !== this && isFinite(this));
}

// Returns the lowest value possible of a positive or negative number
Number.prototype.redline = function () {
    return (Math.sign(this));
}

// Returns the opposite lowest value of a positive or negative number
Number.prototype.breakline = function () {
    return (-Math.sign(this));
}

// Is more shorthanded just in case the type is already a number and need specific testing
Number.prototype.isInteger = function () {
    return (typeof this === 'number' && isFinite(this) && Math.floor(this) === this)
}

// Shorthanded version if the datatype is already a Number
Number.prototype.isFloat = function () {
    return (typeof this === 'number' && isFinite(this) && Math.floor(this) !== this);
}

// Checks if a(n) number is even
Number.prototype.isEven = function () {
    return (this % 2 === 0);
}

// Checks if a number is odd
Number.prototype.isOdd = function () {
    return (!this.isEven());
}

// Checks if a number is prime Euclidian Method
Number.prototype.isPrime = function () {
    var max = Math.sqrt(this);
    for (var i = 2; i <= max; i++) {
        if (this % i === 0) {
            return (false)
        }
    }
    return (this > 1);
}

// Checks if number only contains a decimal value
Number.prototype.isDecimal = function () {
    return (this > -1 && this < 1 && this !== 0);
}

// Returns a decimal from a float or double
Number.prototype.getDecimal = function () {
    var str = this.toString();
    var pos = str.indexOf(".");
    return (parseFloat(str.substring(pos, str.length)));
}

// Floors at a specific decimal place
Number.prototype.floorAt = function (point) {
    var p = Math.pow(10, point);
    return (Math.floor(this * p) / p || Math.floor(this))
}

// Rounds at a specific decimal place 
Number.prototype.roundAt = function (point) {
    var p = Math.pow(10, point);
    return (Math.round(this * p) / p || Math.round(this))
}

// Ceils at a specific decimal place
Number.prototype.ceilAt = function (point) {
    var p = Math.pow(10, point);
    return (Math.ceil(this * p) / p || Math.ceil(this))
}

// Provides a random integer with an inclusive range (REDUNDANT TO RANDOM NUMBER WHICH DOES THE SAME THING)
Math.randomInt = function (start, stop) {
    return Math.round(random() * (stop - start) + start);
}

// Provides a random number as a float
Math.randomFloat = function (start, stop) {
    return Math.round(((Math.random() * (stop - start) + start) * 1e6)) / 1e6;
}
// Provides a random number as a double
Math.randomDouble = function (start, stop) {
    return (Math.random() * (stop - start) + start);
}

// The greatest common factor between 2 numbers
Math.gcm = function (num1, num2) {
    return (!num2 ? num1: Math.gcm(num2, num1 % num2));
}

// Compares the greatest common factor through an array of numbers
Math.gcf = function () {
    var args = arguments.flat(Infinity);
    var result = args[0];
    for (var i = 0; i < args.length; i++) {
        result = Math.gcm(args[i], result);
        if (result === 1) {
            return result;
        }
    }
    return (result);
}

// The least common factor between 2 numbers
Math.lcm = function (num1, num2) {
    return ((num1 * num2) / Math.gcm(num1, num2));
}

// The least common factor between an array of numbers
Math.lcf = function () {
    var args = arguments.flat(Infinity);
    var result = args[0];
    for (var i = 1; i < args.length; i++) {
        result = Math.lcm(args[i], result);
    }
    return result;
}

// Average of a dataset of numbers
Math.mean = function () {
    var args = arguments.flat(Infinity);
    var sum = 0;
    sum = args.reduce(function (a, b) { return (a + b); }, 0);
    return (sum / args.length);
}

// Median of the dataset
Math.median = function () {
    var args = arguments.flat(Infinity);
    if (args.length < 1) {
        return null;
    }
    args = args.sort();
    var length = args.length / 2;
    return (Math.floor(length) !== length ? (args[Math.floor(length)] + args[Math.ceil(length)]) / 2 : args[length]);
}

// Grants the most common occurence of numbers
Math.mode = function () {
    var args = arguments.flat(Infinity);
    var max = 0;
    var counter = [];
    var modes = [];
    for (var _a = 0, args_1 = args; _a < args_1.length; _a++) {
        var arg = args_1[_a];
        counter[arg] = (counter[arg] >> 0) + 1;
        if (counter[arg] > max) {
            max++;
        }
    }
    for (var i in counter) {
        if (counter[i] === max) {
            modes.push(Number(i));
        }
    }
    return (modes);
}

// Grants the difference between the highest and lowest number
Math.range = function () {
    var args = arguments.flat(Infinity);
    return (args[args.length - 1] - args[0]);
}

// Sums any amount of values together
Math.sum = function () {
    var args = arguments.flat(Infinity);
    return args.reduce(function (acc, val) {
        return acc + val;
    }, 0);
}

// Subtracts any amount of values together
Math.sub = function () {
    var args = arguments.flat(Infinity);
    return args.reduce(function (acc, val) {
        return acc - val;
    }, 0);
}

// Multiplies any amount of values together
Math.mul = function () {
    var args = arguments.flat(Infinity);
    return args.reduce(function (acc, val) {
        return acc * val;
    }, 1);
}

// Divides any amount of values together
Math.div = function () {
    var args = arguments.flat(Infinity);
    return args.reduce(function (acc, val) {
        return (val || 1) / acc;
    }, 1);
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

// Get the absolute value of a number
function absolute(number) {
  if (number < 0) {
    return number *= -1;
  } else {
    return number *= 1;
  }
}

