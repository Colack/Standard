/*
    @Author Varrience
    @About
        - A(n) object that contains everything partaining to the benchmark
*/
var Timer = /** @class */ (function () {
    function Timer(label) {
        this.time = [];
        this.total = 0;
        this.label = label != undefined ? "".concat(label, " ") : "";
    }
    Object.defineProperty(Timer.prototype, "average", {
        get: function () {
            var timers = this.time.length;
            return this.total / timers || 0;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Timer.prototype, "median", {
        get: function () {
            var arr = this.time;
            if (arr.length < 1) {
                return ("More Data Required");
            }
            arr = arr.sort();
            var length = arr.length / 2;
            if (Math.floor(length) != length) {
                return ((arr[Math.floor(length)] + arr[Math.ceil(length)]) / 2 + "ms");
            }
            else {
                return (arr[length] + "ms");
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Timer.prototype, "min", {
        get: function () {
            var min = this.time[0] || 0;
            for (var i = 1; i < this.time.length; i++) {
                min = Math.min(min, this.time[i]);
            }
            return (min);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Timer.prototype, "max", {
        get: function () {
            var max = this.time[0] || 0;
            for (var i = 1; i < this.time.length; i++) {
                max = Math.max(this.time[i], max);
            }
            return (max);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Timer.prototype, "range", {
        get: function () {
            return (this.max - this.min);
        },
        enumerable: false,
        configurable: true
    });
    Timer.prototype.start = function () {
        this.time.push(Date.now());
    };
    Timer.prototype.stop = function () {
        var now = this.time.length - 1;
        var stopTime = Date.now() - this.time[now];
        this.time[now] = stopTime;
        this.total += stopTime;
    };
    Timer.prototype.log = function () {
        var timers = this.time.length || 1;
        console.log("".concat(this.label, "Execution #").concat(timers, "\n    Current Time: ").concat(this.time[timers - 1], " ms\n    Average Time: ").concat(this.average, " ms | Median: ").concat(this.median, " | Range: ").concat(this.range, " ms\n    Full Time: ").concat(this.total, " ms"));
    };
    Timer.prototype.purge = function () {
        new Timer(this.label);
        return ("Time Log Purged");
    };
    return Timer;
}());

// creates the timer if you don't know how to create objects
function createTimer(label) {
    return new Timer(label);
}
