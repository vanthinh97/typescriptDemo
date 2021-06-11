"use strict";
var isDone = false;
var senten = "\n    hello " + isDone + "\n";
console.log(senten);
var color;
(function (color) {
    color[color["red"] = 0] = "red";
    color[color["green"] = 1] = "green";
    color[color["yellow"] = 2] = "yellow";
})(color || (color = {}));
;
var c = color.green;
//# sourceMappingURL=lession7.js.map