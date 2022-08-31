/**
@Authors: Varrience
@Version: 0.01
@About
  - Dumps assets without needing to look at the whole project
*/
var path = "https://studio.code.org/v3";
var id = getURLPath()[2];
// dump an asset image [sounds don't work]
function getAsset(name, saveAs) {
    console.log("Path: " + path + "/assets/" + name);
    var animation = loadImage(path + "/assets/" + id, function () {
        save(animation, saveAs || id);
    })
}
// dump the source FIXME: Gamelab Only, Needs applab port
function getSource(saveAs) {
    var img = loadImage("https://file-rgb.jacobbutler6.repl.co/convert/" + id + "?port=" + Math.floor(Math.random() * 999999), function (loaded) {
        if (!loaded) { console.log("no"); getSource(saveAs) }
    });
    var sourceIndex = [];
    var msg = "";
    //console.log(url);
    var wait = setInterval(function () {
        img.loadPixels();
        if (img.pixels.length < 1) { return }
        //console.log(img);
        image(img, 0, 0);
        for (var c = 0; c < img.pixels.length; c++) {
            var color = img.pixels[c];
            //console.log(c + (c > 0 && c < 255 ? " good" : " bad"));
            if (color > 0 && color < 255) {
                sourceIndex.push(color);
                var str = String.fromCharCode(color);
                msg += str;
            }
        }
        //console.log(msg);
        if (msg.length < 1) { return }
        save(msg, saveAs || "main.json")
        clearInterval(wait);
    }, 1000)
}

// dump an animation
function getAnimation(id, saveAs) {
    console.log("Path: " + path + "/animations/" + id);
    var animation = loadImage(path + "/animations/" + id, function () {
        save(animation, saveAs || id);
    })
}
