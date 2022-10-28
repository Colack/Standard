/*
  @Authors @Colack @Varrience
    - Last updated by @Colack    (8/31/22)
    - Last updated by @Varrience     (8/28/22)
  @About
    - Replacement for the 'console' module.
*/

var TERMINAL_VARIABLES = {};
var TERMINAL_CURRENTGROUP = 0;

// can be replaced or possibly better {} <- object timer labeling
var watchers = [];

// Prints a value to the Console.
function print(input) {
    for (var i = 0; i < TERMINAL_CURRENTGROUP; i++) {
        input = ' ' + input;
    }
    console.log(input);
}

// Creates a new line.
function newLine() {
    console.log("");
}

// Logs an error to the console.
console.error = function(input) {
    console.log("> Error: " + input);
}

// Clears the entire console.
console.clear = function() {
    for (var i = 0; i < 100; i++) {
        console.log("");
    }
}
window.clear = console.clear;
// Prompts the user.  ...is this necessary? also this will force a callback error I'll just disable it for now
// function prompt(input) {
//     prompt(input);
// }

// Prompts the user, and returns it. ...this just serves the same thing that prompt already gives
function input(input) {
    return prompt(input);
}

// Waits for a specified amount of time, then returns a callback.
function wait(input, callback) {
    setTimeout(input, function() {
        callback()
    });
}

// Counts how many times a specific input has been called.
function count(input) {
    TERMINAL_VARIABLES[input] = TERMINAL_VARIABLES[input] + 1;
    for (var i = 0; i < TERMINAL_VARIABLES.length; i++) {
        if (TERMINAL_VARIABLES[i] == input) {
            return i;
        }
    }
}

// Resets the amount of times a specific inputy has been called.
function countReset(input) {
    TERMINAL_VARIABLES[input] = 0;
}

// Resets all counting variables.
function countResetAll() {
    TERMINAL_VARIABLES = {};
}

// Returns a debug messages.
function debug(input) {
    console.log("> Debug: " + input);
}

// Returns a input.
function dir(input) {
    console.log(input);
}

// Makes the console go a group up.
function groupUp() {
    TERMINAL_CURRENTGROUP = TERMINAL_CURRENTGROUP + 1;
}

// Makes the console go a group down.
function groupDown() {
    TERMINAL_CURRENTGROUP = TERMINAL_CURRENTGROUP - 1;
}

// Resets the grouping back to 0.
function groupReset() {
    TERMINAL_CURRENTGROUP = 0;
}

// Returns info.
function info(input) {
    var string = input.toString();
    console.log("\n\n" + string + "\n\n");
}

// Waits a specified amount of time, then logs a specified value.
console.alarm = function(input, message) {
    setTimeout(function() {
        console.log("> Alarm: " + message);
    }, input);
}

// Resets all alarms.
function alarmReset(input) {
    clearTimeout(input);
}

// Sends a warning to the console.
console.warn = function(input) {
    console.log("> Warning: " + input);
}

// Creates a table from an input and logs it.
function table(input) {
    var table = [];
    var rows = input.split("\n");
    for (var i = 0; i < rows.length; i++) {
        var row = rows[i].split("\t");
        table.push(row);
    }
    console.log(table);
}

// Keeps track of values becaise watching arr[index] values is no longer supported in watchers
function watch(value, delay, label) {
    watchers.push(setInterval(function () {
        console.log((label || value + ":") + " " + window[value]);
    }, delay || 1e3));
};

// Stops an invoked timer or the last current one added to the queue
function stop(index) {
    if (index === void 0) { index = watchers.length - 1; }
    clearInterval(watchers[index]);
};

// Contributors
function contributors() {
    console.log("@Colack");
    console.log("@Varrience");
}
