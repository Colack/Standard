/*
  @Authors @Varrience
   - Last updated by @Varrience     (9/10/22)
  @About
       - Provides some polyfills and new functionality to basic strings left out by CDO
*/

// Repeats string casing
String.prototype.repeat = function (num) {
    var newString = this;
    for (var i = 0; i < num; i++) {
        newString += this;
    }
    return (newString);
}

// Inserts a string within a string at a given position
String.prototype.insert = function (str, pos) {
    return (this.substring(0, pos) + str + this.substring(pos, this.length));
}

// Checks beginning
String.prototype.startsWith = function (search, index) {
    index = index === undefined || index > this.length ? 0 : index
    return this.substring(index, search.length) === search;
}

// Checks ending
String.prototype.endsWith = function (search, index) {
    index = index === undefined || index > this.length ? this.length : index
    return this.substring(index - search.length, index) === search;
};

// Reverses the entireity of a string
String.prototype.reverse = function () {
    var reverse = "";
    for (var i = this.length - 1; i >= 0; i--) {
        reverse += this[i];
    }
    return (reverse);
}

// Basically useless like why would you?
String.prototype.anagram = function () {
    var old = this.split("");
    var str = "";
    for (var i = 0; i < this.length; i++) {
        var choice = randomNumber(0, old.length - 1)
        str += old[choice]
        old.splice(choice, 1);
    }
    return (str);
}

// Pads the beginning of a string with a value
String.prototype.padStart = function (num, val) {
    var start = ""
    val = val || " ";
    num = num - this.length || 0;
    for (var i = 0; i < num; i++) {
        start += val[i % val.length];
    }
    start += this;
    return (start);
}

// Pads the ending of a string
String.prototype.padEnd = function (num, val) {
    var end = this;
    val = val || " ";
    num = num - this.length || 0;
    for (var i = 0; i < num; i++) {
        end += val[i % val.length];
    }
    return (end);
}

// restores charCodeAt
String.prototype.codePointAt = function (position) {
    position <<= 0;
    var length = this.length;
    if (position < 0 || position >= length) {
        return undefined;
    }
    var lead = this.charCodeAt(position);
    if (lead < 55296 || lead > 56319 || position + 1 === length) {
        return lead;
    }
    var tail = this.charCodeAt(position + 1);
    if (tail < 56320 || tail > 57343) {
        return lead;
    }
    return ((lead - 55296) * 1024) + (tail - 56320) + 65536;
};

// converts all incompadible UTF-8 text to ASCII
String.prototype.toAnsi = function () {
    var text = this;
    var codes = "";
    for (var i = 0; i < text.length; i++) {
        var parsed = text.charCodeAt(i);
        if (parsed >= 255) {
            text = text.substring(0, i) + "\\u" + parsed.toString(16) + text.substring(i + 1, text.length);
        }
        codes += text[i];
    }
    return (codes);
};

// decodes any ASCIIFIED string to UTF-8
String.prototype.toUni = function () {
    return decodeURIComponent(JSON.parse('"' + this.replace('"', '\\"') + '"'));
};

// cencors a given input based on regex
String.prototype.censor = function(placeholder){
    return (this.replace(/[\S]*(piss|vagina|puss|tit|cock|mother+|f(u|r)[\S][ck]+|shit|bitch|cunt|di[ck]+|nigg[aer]+|\bkkk\b|penis|hitler|ass|\bs?cum\b|slut|\b(wt|a|t)f\b|hor?e|ho?r?n?y|dookie|balls|deept|h(ump|ate)|fag|retard|douche)[\S]*/gi, placeholder || "❌"));
}

// restores fromCodePoint polyfill
String.fromCodePoint = function () {
    var chars = [];
    for (var i = 0; i < arguments.length; i++) {
        var c = Number(arguments[i]);
        if (!isFinite(c) || c < 0 || c > 1114111 || Math.floor(c) !== c) {
            throw new RangeError("Invalid code point " + c);
        }
        if (c < 65536) {
            chars.push(c);
        }
        else {
            c -= 65536;
            chars.push((c >> 10) + 55296);
            chars.push((c % 1024) + 56320);
        }
    }
    return String.fromCharCode.apply(undefined, chars);
};


// Contributors
function contributors() {
    console.log("@Varrience");
}
