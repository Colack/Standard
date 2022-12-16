/**
@Author: @Varrience
@Version: 0.05
@About
    this module allows for on site manipulation of key values on sites, can be used as an add on if you wish to be anonomus
    or perhaps prefer not to have to create an account for every chat room that get's recreated it covers most
    to all chatroom parameters you can tweak it to your liking there's a lot of useful stuff here even if
    you wish to use it for something else feel free to credit me
*/

var Database = /** @class */ (function () {
    function Database(memory, user, limit, id, color, fg) {
        this.bannedUsers = [];
        this.memory = memory || "messages";
        this.user = user;
        this.limit = limit || 10;
        this.id = this.flush(id);
        this.color = color;
        this.fg = fg;
        setKeyValue("user" + id, user);
    }
    Database.prototype.flush = function (id) {
        id = id || String();
        while (id.length < 28) {
            id += encodeURIComponent(String.fromCharCode(Math.floor(Math.random() * 255)));
        }
        return (id);
    };
    Database.prototype.message = function (msg, limit) {
        var _this = this;
        this.sync(function () {
            var msgs = [];
            limit = limit || 50;
            for (var i = 0; i < msg.length / limit; i++) {
                msgs.push(msg.substring(i * limit, (i + 1) * limit));
            }
            for (var i = 0; i < msgs.length; i++) {
                _this.local.push({
                    user: _this.user,
                    username: _this.user,
                    msg: msgs[i],
                    message: msgs[i],
                    text: msgs[i],
                    id: _this.id,
                    userid: _this.id,
                    uid: _this.id,
                    color: _this.color,
                    clr: _this.color,
                    time: Date.now(),
                    fg: _this.fg
                });
            }
            if (_this.local.length > _this.limit) {
                _this.local.splice(0, msgs.length);
            }
            _this.write(_this.local);
        });
    };
    Database.prototype.bmessage = function (msg, limit) {
        var _this = this;
        limit = limit || this.limit;
        this.sync(function () {
            getKeyValue("chatlength", function (length) {
                var l = length || 0;
                if (l >= limit) {
                    l -= 1;
                    _this.local = _this.local.replace(/.*\s+/, "");
                }
                _this.write(_this.local + "\n".concat((_this.user || ""), ": ") + msg);
                setKeyValue("chatlength", l + 1);
            });
        });
    };
    Database.prototype.read = function (callback, table) {
        getKeyValue(table || this.memory, function (value) {
            if (typeof callback === 'function') {
                callback(value);
            }
            else {
                console.log(value);
            }
        });
    };
    Database.prototype.write = function (data, callback, table) {
        setKeyValue(table || this.memory, data, function (value) {
            if (typeof callback === 'function') {
                callback(value);
            }
        });
    };
    Database.prototype.sync = function (callback, key) {
        var self = this;
        key = key || this.memory;
        getKeyValue(key, function (value) {
            self.local = value;
            if (typeof callback == 'function') {
                callback(true);
            }
        });
    };
    Database.prototype.edit = function (index, property, value, dataset) {
        var _this = this;
        this.sync(function () {
            dataset = dataset || _this.local;
            dataset[index][property] = value;
            _this.write(dataset);
        });
    };
    Database.prototype.clear = function () {
        this.local = [];
        this.write(this.local);
    };
    Database.prototype.spam = function (message, ms) {
        var self = this;
        setInterval(function () {
            self.message("> ".concat(message));
        }, 100 || ms);
    };
    Database.prototype.lifetime = function (ms) {
        var self = this;
        setInterval(function () {
            self.sync(function () {
                self.local.shift();
                self.write(self.local);
            });
        }, 10000 || ms);
    };
    Database.prototype.announce = function (message) {
        var _this = this;
        this.sync(function () {
            for (var _i = 0, _a = _this.local; _i < _a.length; _i++) {
                var local = _a[_i];
                local.msg = local.message = message;
            }
            _this.write(_this.local);
        });
    };
    Database.prototype.named = function (user) {
        var _this = this;
        this.sync(function () {
            for (var _i = 0, _a = _this.local; _i < _a.length; _i++) {
                var local = _a[_i];
                local.user = local.username = user;
            }
            _this.write(_this.local);
        });
    };
    Database.prototype.strobe = function (ms, name) {
        var self = this;
        var user = name || this.user;
        setInterval(function () {
            self.sync(function () {
                var nclr = "#" + hex(randomNumber(0, 0xFFFFFF)).substring(2, 8);
                for (var _i = 0, _a = self.local; _i < _a.length; _i++) {
                    var local = _a[_i];
                    if (local.username == user || local.user == user) {
                        local.color = nclr;
                        local.clr = nclr;
                    }
                }
                ;
                self.write(self.local);
            });
        }, ms || 9000);
    };
    Database.prototype.colorize = function (clr, ms) {
        var self = this;
        setInterval(function () {
            self.sync(function () {
                for (var _i = 0, _a = self.local; _i < _a.length; _i++) {
                    var local = _a[_i];
                    local.color = local.clr = clr;
                }
                ;
                self.write(self.local);
            });
        }, ms || 1000);
    };
    Database.prototype.typewritter = function (nam, id, ms) {
        var self = this;
        var _pos = 0;
        var _dir = 1;
        setInterval(function () {
            _pos += _dir;
            if (abs(_pos) >= nam.length) {
                _dir *= -1;
            }
            for (var _i = 0, _a = self.local; _i < _a.length; _i++) {
                var local = _a[_i];
                if (local.id == id) {
                    local.username = local.user = nam.substring(0, abs(_pos));
                }
            }
            self.write(self.local);
        }, ms || 1000);
    };
    Database.prototype.banned = function () {
        var users = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            users[_i] = arguments[_i];
        }
        var self = this;
        self.bannedUsers.push(users);
        setInterval(function () {
            self.sync(function () {
                for (var i = self.local.length - 1; i >= 0; i--) {
                    if (self.bannedUsers.indexOf(self.local[i].id || "")) {
                        self.local.splice(i, 1);
                    }
                }
            });
            self.write(self.local);
        }, 1000);
    };
    Database.prototype.whisper = function (ms) {
        var self = this;
        setInterval(function () {
            self.sync(function () {
                for (var i = self.local.length - 1; i >= 0; i--) {
                    self.local[i].msg = self.local[i].msg.toLowerCase();
                    self.local[i].message = self.local[i].message.toLowerCase();
                }
            });
        }, ms || 5000);
    };
    Database.prototype.art = function (str, seperator) {
        var _this = this;
        seperator = seperator || '\n';
        str = str.split(seperator);
        this.sync(function () {
            for (var _i = 0, str_1 = str; _i < str_1.length; _i++) {
                var line = str_1[_i];
                _this.local.push({ user: "", username: "", msg: line, message: line, time: Math.floor(random(Date.now())) });
                if (_this.local.length > _this.limit) {
                    _this.local.shift();
                }
            }
            _this.write(_this.local);
        });
    };
    Database.prototype.crash = function (user, id) {
        var trojan = [{
                user: user || this.user,
                username: id || this.user,
                msg: null,
                message: null,
                text: null,
                id: id || this.id,
                userid: id || this.id,
                uid: id || this.id,
                color: this.color,
                clr: this.color,
                time: Date.now(),
                fg: this.fg
            }];
        this.write(trojan);
    };
    Database.prototype.bot = function (ms, limit) {
        var self = this;
        var sayings = []; // load this up with sayings that you want the bot to chat with
        setInterval(function () {
            self.sync(function () {
                self.message(random(sayings), limit);
                self.write(self.local);
            });
        }, ms || 6e4);
    };
    return Database;
}());
