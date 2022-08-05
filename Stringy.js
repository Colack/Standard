/*
  @Varrience
  Provides some polyfills and new functionality to basic strings left out by CDO
*/
// Repeats string casing
String.prototype.repeat = function (num) {
    let newString = this;
    for (let i = 0; i < num; i++) {
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
    let reverse = "";
    for (let i = this.length - 1; i >= 0; i--) {
        reverse += this[i];
    }
    return (reverse);
}
// Basically useless like why would you?
String.prototype.anagram = function () {
    let old = this.split("");
    let str = "";
    for (let i = 0; i < this.length; i++) {
        let choice = randomNumber(0, old.length - 1)
        str += old[choice]
        old.splice(choice, 1);
    }
    return (str);
}
// Pads the beginning of a string with a value
String.prototype.padStart = function (num, val) {
    let start = ""
    val = val || " ";
    num = num - this.length || 0;
    for (let i = 0; i < num; i++) {
        start += val[i % val.length];
    }
    start += this;
    return (start);
}
// Pads the ending of a string
String.prototype.padEnd = function (num, val) {
    let end = this;
    val = val || " ";
    num = num - this.length || 0;
    for (let i = 0; i < num; i++) {
        end += val[i % val.length];
    }
    return (end);
}
