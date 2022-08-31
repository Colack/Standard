/*
    @Authors @Colack
    - Last updated by Colack    (8/22/22)
    @About
    - Library for checking values for specific things
*/

// Check two arrays (for the same value) <- too vauge (if they match at least once)
Array.prototype.arrCheck(arr, callback) {
    for (var i = 0; i < this.length; i++) {
        for (var j = 0; j < arr.length; i++) {
            if (this[i] === arr[i]) { // if were doing exact matches === is better
                callback();
                return true;
            }
        }
    }
}
