/**
* @Author: @Varrience
*/
function getMessage(url, callback) {
    var img = loadImage(url, function () {
        var data = [];
        var msg = "";
        //console.log(url);
        img.loadPixels();
        if (img.pixels.length < 1) { return }
        //console.log(img);
        image(img, 0, 0);
        for (var c = 0; c < img.pixels.length; c++) {
            color = img.pixels[c];
            //console.log(c + (c > 0 && c < 255 ? " good" : " bad"));
            if (color > 0 && color < 255) {
                data.push(color);
                msg += String.fromCharCode(color);
            }
        }
        //console.log(data);
        if (msg.length < 1) { return }
        //msg = msg.length > 0 ? JSON.parse(msg) : {};
        //console.log(msg);
        if (typeof callback == 'function') { callback(msg) }
        else { console.log(msg) }
    }, function () { getMessage(url, callback) });

    //clearInterval(wait);
}
// this is for git repos only, this could be combined but that would confuse people
function require(path, callback) {
    var lib = path.match(/[^/]+(?=\.)/)[0];
    window[lib] = {};
    getMessage("https://file-rgb.jacobbutler6.repl.co/github?file=" + path + "&port=" + randomNumber(0, 1e5), function (msg) {
        //msg = msg.replace(/(?<=var.*)(?<![\[\(:].*),\s*((?=.*;)|(?!.*[\)\]]))/g, ';window.');
        //msg = msg.replace(/(?<!\(\s*)var\s+/g, 'window.');
        //msg = msg.replace(/(?<=window\.[\w\d_-]+);/g, '=undefined;');
        msg = msg.replace(/^(function\s*)([\w\d_-]+)(?=\()/g, "window[\"" + lib + "\"].$2 = function")
        window[lib].js = function () { return msg };
        eval(msg);
        if (typeof callback == 'function') {
            callback(msg);
        } else {
            console.log("Imported: " + lib);
        }
    })
}
function inquire(path) {
    getMessage("https://file-rgb.jacobbutler6.repl.co/info/" + path, function (info) {
        info = JSON.parse(info);
        var lib = info.name;
        window[lib] = {};
        getMessage("https://file-rgb.jacobbutler6.repl.co/convert/" + path, function (msg) {
            //msg = msg.replace(/(?<=var.*)(?<![\[\(:].*),\s*((?=.*;)|(?!.*[\)\]]))/g, ';window.');
            //msg = msg.replace(/(?<!\(\s*)var\s+/g, 'window.');
            //msg = msg.replace(/(?<=window\.[\w\d_-]+);/g, '=undefined;');
            msg = JSON.parse(msg);
            msg = msg.source;
            var funcs = (msg.match(/(?<=^function\s*)([\w\d_-]+)(?=\()/gm) || []).join("|");
            funcs = new RegExp("(?<!function\\s*)\\b("+ funcs + ")\\b", "g");
            msg = msg.replace(funcs, "window[\"" + lib + "\"].$1")
            msg = msg.replace(/^(function\s*)([\w\d_-]+)(?=\()/gm, "window[\"" + lib + "\"].$2 = function")
            window[lib].js = function () { return msg };
            //return;
            eval(msg);
            if (typeof callback == 'function') {
                callback(msg);
            } else {
                console.log("Imported: " + lib);
            }
        })
    })
}
function help() {
    console.log("Are you ready to search? go to https://github.com/code-org-open-source/Standard/tree/main/src then import it here!")
}
