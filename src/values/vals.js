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

// Set a variable to a minimum value
function setMin(variable) {
    switch (variable) {
        case isNumber(variable):
            variable = 0;
            break;
        case isString(variable):
            variable = "";
            break;
        case isBoolean(variable):
            variable = false;
            break;
        case isArray(variable):
            variable = [];
            break;
        case isObject(variable):
            variable = {};
            break;
        default:
            variable = undefined;
            break;
    }
}

// Delete a variable
function deleteVariable(variable) {
    variable = undefined;
}

// Check if a variable is a number
function isNumber(variable) {
    if (typeof variable === "number") {
        return true;
    }
}

// Check if a variable is a string
function isString(variable) {
    if (typeof variable === "string") {
        return true;
    }
}

// Check if a variable is a boolean
function isBoolean(variable) {
    if (typeof variable === "boolean") {
        return true;
    }
}

// Check if a variable is an array
function isArray(variable) {
    if (typeof variable === "object" && variable.constructor === Array) {
        return true;
    }
}

// Check if a variable is an object
function isObject(variable) {
    if (typeof variable === "object" && variable.constructor === Object) {
        return true;
    }
}
