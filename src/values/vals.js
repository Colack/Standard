/*
    @Authors @Colack, @Varrience
     - Last updated by @Colack  (8/17/22)
     - Last updated by @Varrience (8/21/22)
    @About
     - Library for messing around with values.
*/

// Set a variable to its default value
function setDefault(variable, defaultValue) {
    return variable === undefined ? defaultValue: variable;
}

// Set a variable to a specified value
function setValue(variable, value) {
    return variable === undefined ? value: (variable = value)
}

// Creates a Global entry into the window
function setGlobal(name, value) {
    if(typeof name === 'string'){
        window[name] = value;
    }
}
