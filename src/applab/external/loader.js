/*
            GITHUB REPO LOADER
    @Author @Varrience
    @Version 0.04
    Modules:
        - require
            @Description: basically tries to somewhat mimic some functionality by being able
                to load capable CDO utility functions as a form of npm
        - inquire
             @Description: loads CDO projects that are unable to be shared, due to size limitation limit but
                no need to fear, the days of minifying your librarys are over with this simple tool
        - $help
            @Description: provides a directory tree of the repo that you will most likely be using
                along with a redirect to the library if you do feel like scoping it out before using it


*/

// @Use <Filename>.js() to see source code of any imported module
function require(path, callback) {
    var lib = path.match(/[^/]+(?=\.)/)[0];
    window[lib] = {};
    startWebRequest("https://raw.githubusercontent.com/code-org-open-source/" + path + "?port=" + randomNumber(0, 1e5), function(s,t,msg){
        //msg = msg.replace(/(?<=var.*)(?<![\[\(:].*),\s*((?=.*;)|(?!.*[\)\]]))/g, ';window.');
        //msg = msg.replace(/(?<!\(\s*)var\s+/g, 'window.');
        //msg = msg.replace(/(?<=window\.[\w\d_-]+);/g, '=undefined;');
        msg = msg.replace(/(^function\s*)([\w\d_-]+)(?=\()/gm, "window[\"" + lib + "\"].$2 = function")
        window[lib].js = function () { return msg };
        eval(msg);
        if (typeof callback == 'function') {
            callback(msg);
        } else {
            console.log("Imported: " + lib);
        }
    })
}
// @Use <Project Name>.js() for source code
// allows unpublished librarys on CDO to be able to run, but it is a bit strict
function inquire(path) {
    startWebRequest("https://studio.code.org/v3/channels/" + path,function (s,t,info) {
        info = JSON.parse(info);
        var lib = info.name;
        window[lib] = {};
        startWebRequest("https://studio.code.org/v3/sources/" + path + "/main.json?port=" + randomNumber(0, 1e5), function(s,t,msg){
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
// want some starter code to test? here is a repo with runnable library code
// I'd like to keep it to just this one for now... Feel free to contribute though
function $help() {
    console.log("code-org-open-source\n\
│   .editorconfig\n\
│   .get_maintainer.ignore\n\
│   .gitattributes\n\
│   .gitignore\n\
│   LICENSE\n\
│   README.md\n\
│\n\
├───.github\n\
│   │   CODEOWNERS\n\
│   │   CODE_OF_CONDUCT.md\n\
│   │   CONTRIBUTING.md\n\
│   │   pull_request_template.md\n\
│   │   SECURITY.md\n\
│   │\n\
│   ├───ISSUE_TEMPLATE\n\
│   │       bug_report.md\n\
│   │       config.yml\n\
│   │       custom.md\n\
│   │       feature_request.md\n\
│   │\n\
│   └───workflows\n\
│           codeql-analysis.yml\n\
│\n\
├───docs\n\
│   │   ChangeLog\n\
│   │   CREDITS\n\
│   │\n\
│   └───console\n\
│           diagonal.pdf\n\
│           diagonal.ps\n\
│           terminal.pdf\n\
│           terminal.ps\n\
│\n\
└───src\n\
    ├───applab\n\
    │   │   imports.js\n\
    │   │   README.md\n\
    │   │\n\
    │   ├───console\n\
    │   │       diagonal.js\n\
    │   │       terminal.js\n\
    │   │\n\
    │   ├───deprecated\n\
    │   │       chat.js\n\
    │   │       display.js\n\
    │   │       housegenerator.js\n\
    │   │       load.js\n\
    │   │       lock.js\n\
    │   │       superauth.js\n\
    │   │\n\
    │   ├───display\n\
    │   │       elements.js\n\
    │   │       fademaker.js\n\
    │   │       windows.js\n\
    │   │\n\
    │   ├───other\n\
    │   │       credits.js\n\
    │   │\n\
    │   ├───utility\n\
    │   │       status.js\n\
    │   │\n\
    │   └───values\n\
    │           array.js\n\
    │           benchmark.js\n\
    │           checks.js\n\
    │           dumper.js\n\
    │           math.js\n\
    │           mocking.js\n\
    │           stringy.js\n\
    │           time.js\n\
    │           vals.js\n\
    │\n\
    ├───gamelab\n\
    │   │   LICENSE\n\
    │   │   README.md\n\
    │   │\n\
    │   └───data\n\
    │           database.js\n\
    │           require.js\n\
    │\n\
    ├───scripts\n\
    │   └───batch\n\
    │           clone.bat\n\
    │\n\
    ├───status\n\
    │   │   LICENSE\n\
    │   │   README.md\n\
    │   │\n\
    │   └───bin\n\
    │           index.js\n\
    │           package.json\n\
    │           status.bat\n\
    │\n\
    └───tests\n\
        │   README.md\n\
        │\n\
        └───lib\n\
            └───other\n\
                    windows.js");
    open("https://github.com/code-org-open-source/Standard/tree/main/src");
}
