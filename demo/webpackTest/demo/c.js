"use strict";

var _console,
    _arguments = arguments;

function _toConsumableArray(arr) {
    if (Array.isArray(arr)) {
        for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
            arr2[i] = arr[i];
        }
        return arr2;
    } else {
        return Array.from(arr);
    }
}

var a = [1, 2, 3, 4];
console.log(a);
(_console = console).log.apply(_console, a);

var b = {
    name: "小明",
    age: 18,
    sex: 'm'
};
var c = function c() {
    console.log(_arguments);
};
c.apply(undefined, _toConsumableArray(b));
