// Compares if two arrays are equal to each other
Object.defineProperty(Array.prototype, 'equals', {
    value: function (array) {
        return (this.join("") === array.join(""));
    }
});
// Shuffles any given data provided in the program
Object.defineProperty(Array.prototype, 'shuffle', {
    value: function () {
        var arr = [].concat(this);
        var newArr = [];
        for (var i = 0; i < this.length; i++) {
            var choose = randomNumber(0, arr.length - 1);
            newArr.push(arr[choose]);
            arr.splice(choose, 1);
        }
        return (newArr);
    }
});
// Array.fill prototype method
Object.defineProperty(Array.prototype, 'fill', {
    value: function (value, start, stop) {
        var arr = Object(this);
        start = (start >>= 0) < 0 ? Math.max(arr.length + start, 0) : Math.min(start, arr.length);
        stop = stop === undefined ? arr.length : Math.min(stop, arr.length);
        for (var i = start; i < stop; i++) {
            arr[i] = value;
        }
        return (arr);
    }
});
