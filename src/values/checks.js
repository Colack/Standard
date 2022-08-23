/*
    @Authors @Colack
    - Last updated by Colack    (8/22/22)
    @About
    - Library for checking values for specific things
*/

// Check two arrays for the same value
function arrCheck(ar1, ar2, callback) {
    for (var i = 0; i < ar1.length; i++) {
        for (var j = 0; j < ar2.length; i++) {
            if (ar1[i] == ar2[i]) {
                callback();
                return true;
            }
        }
    }
}
