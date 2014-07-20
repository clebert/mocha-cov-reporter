/* eslint no-underscore-dangle: 0 */

'use strict';

var config = require('./config');

exports.getReport = function () {
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

var colorize = function (code, message) {
    return config.getUseColors() ? '\u001b[' + code + 'm' + message + '\u001b[0m' : message;
};

exports.colorizeGreen = function (message) {
    return colorize(32, message);
};

exports.colorizeRed = function (message) {
    return colorize(31, message);
};
