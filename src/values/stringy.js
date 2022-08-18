/*
  @Authors @Varrience
   - Last updated by @Varrience     (8/5/22)
  @About
       - Provides some polyfills and new functionality to basic strings left out by CDO
*/

// Repeats string casing
String.prototype.repeat = function (num) {
    var newString = this;
    for (var i = 0; i < num; i++) {
        newString += this;
    }
    return (newString);
}

// Inserts a string within a string at a given position
String.prototype.insert = function (str, pos?) {
    return (this.substring(0, pos) + str + this.substring(pos, this.length));
}

// Checks beginning
String.prototype.startsWith = function (search, index) {
    index = index === undefined || index > this.length ? 0 : index
    return this.substring(index, search.length) === search;
}

// Checks ending
String.prototype.endsWith = function (search, index) {
    index = index === undefined || index > this.length ? this.length : index
    return this.substring(index - search.length, index) === search;
};

// Reverses the entireity of a string
String.prototype.reverse = function () {
    var reverse = "";
    for (var i = this.length - 1; i >= 0; i--) {
        reverse += this[i];
    }
    return (reverse);
}

// Basically useless like why would you?
String.prototype.anagram = function () {
    var old = this.split("");
    var str = "";
    for (var i = 0; i < this.length; i++) {
        var choice = randomNumber(0, old.length - 1)
        str += old[choice]
        old.splice(choice, 1);
    }
    return (str);
}

// Pads the beginning of a string with a value
String.prototype.padStart = function (num, val) {
    var start = ""
    val = val || " ";
    num = num - this.length || 0;
    for (var i = 0; i < num; i++) {
        start += val[i % val.length];
    }
    start += this;
    return (start);
}

// Pads the ending of a string
String.prototype.padEnd = function (num, val) {
    var end = this;
    val = val || " ";
    num = num - this.length || 0;
    for (var i = 0; i < num; i++) {
        end += val[i % val.length];
    }
    return (end);
}
