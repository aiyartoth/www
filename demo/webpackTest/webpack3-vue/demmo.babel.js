"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var environment = {
  env: "dev",
  showLog: true
};
function print_log(logObject) {
  if (!environment.showLog) return false;
  if (arguments.length > 1) {
    var _console;

    (_console = console).log.apply(_console, arguments);
  } else {
    (typeof logObject === "undefined" ? "undefined" : _typeof(logObject)) === 'object' ? console.dir(logObject) : console.log(logObject);
  }
}
