/*
    @Authors @Colack @Varrience
    - Last updated by @Colack    (8/31/22)
    - Last updated by @Varrience    (9/18/22)
    @About
    - Library for checking values for specific things
*/

// Check two arrays (for the same value) at least once
// Bad declaration this typeof polyfill does not exist as you know calling an unregistered function is like asking for an error
Array.prototype.arrCheck = function(arr=[], callback=function(){}) { // adding defaults here fix your issue of not giving a value to them
    for (var i = 0; i < this.length; i++) {
        for (var j = 0; j < arr.length; i++) {
            if (this[i] === arr[i]) {
                callback(); // this is also bad what if i decide not to include a callback the result? => undefined() which would error
                return(true);
            }
        }
    }
    return(false); // just noticed this now... why this wasn't added? if no matches are found and it expects a boolean this should be included
}

// Contributors
function contributors() {
    console.log("@Colack");
}
