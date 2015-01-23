'use strict';

var config = require('./config');

var colorize = function (code, message) {
    return config.getUseColors() ? '\u001b[' + code + 'm' + message + '\u001b[0m' : message;
};

var colorizeGreen = function (message) {
    return colorize(32, message);
};

var colorizeRed = function (message) {
    return colorize(31, message);
};

var getReport = function () {
    var data = global._$jscoverage;
    var hits = 0;
    var sloc = 0;

    Object.keys(data || {}).forEach(function (filename) {
        data[filename].forEach(function (result) {
            if (result === 0) {
                sloc += 1;
            } else if (result) {
                hits += 1;
                sloc += 1;
            }
        });
    });

    return {
        coverage: sloc ? Math.floor(hits / sloc * 100) : 100,
        sloc: sloc
    };
};

exports.colorizeGreen = colorizeGreen;
exports.colorizeRed   = colorizeRed;
exports.getReport     = getReport;
