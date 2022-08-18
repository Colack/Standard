/*
    @Authors @Colack
     - Last updated by @Colack  (8/17/22)
    @About
     - Library for messing around with values.
*/

// Set a variable to its default value
function setDefault(variable, defaultValue) {
    if (variable === undefined) {
        return defaultValue;
    } else {
        variable = defaultValue;
        return variable;
    }
}

// Set a variable to a specified value
function setValue(variable, value) {
    if (variable === undefined) {
        return value;
    } else {
        variable = value;
        return variable;
    }
}
