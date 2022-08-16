/*
    Completed by Colack (8/3/2022)
    Notes:
        - This file is actually pretty Useful!
        - Note to self:
            - Make sure to use the correct syntax for each type of variable.
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
