"use strict";
var displayColors = function () {
    var colors = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        colors[_i] = arguments[_i];
    }
    for (var color_1 in colors) {
        console.log(colors[color_1]);
    }
};
displayColors('Red');
displayColors('Red', 'Green');
displayColors('Red', 'Green', 'Blue');
//# sourceMappingURL=lession11.js.map