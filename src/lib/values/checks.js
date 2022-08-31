/*
    @Authors @Colack
    - Last updated by @Colack    (8/31/22)
    @About
    - Library for checking values for specific things
*/

// Check two arrays (for the same value) at least once
Array.prototype.arrCheck(arr, callback) {
    for (var i = 0; i < this.length; i++) {
        for (var j = 0; j < arr.length; i++) {
            if (this[i] === arr[i]) {
                callback();
                return true;
            }
        }
    }
}

// Contributors
function contributors() {
    console.log("@Colack");
}
