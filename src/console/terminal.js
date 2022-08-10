/*
  Completed By Colack (8/2/2022)
  Notes:
    - More commands are needed.
    - So far its basically just re-adding the regular console commands,
    due to the fact that code.org does not have them.
    - This will probably become outdated the moment that Code.org updates to ES5.
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
function error(input) {
    console.log("> Error: " + input);
}

// Clears the entire console.
function clear() {
    for (var i = 0; i < 100; i++) {
        console.log("");
    }
}

// Prompts the user.
function prompt(input) {
    prompt(input);
}

// Prompts the user, and returns it.
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
function alarm(input, message) {
    setTimeout(function() {
        console.log("> Alarm: " + message);
    }, input);
}

// Resets all alarms.
function alarmReset(input) {
    clearTimeout(input);
}

// Sends a warning to the console.
function warn(input) {
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
        console.log((label || value + ":") + " " + eval(value));
    }, delay || 1e3));
};

// Stops an invoked timer or the last current one added to the queue
function stop(index) {
    if (index === void 0) { index = watchers.length - 1; }
    clearInterval(watchers[index]);
};
