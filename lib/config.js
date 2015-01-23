'use strict';

var fs   = require('fs');
var path = require('path');

var filename = path.join(process.cwd(), 'package.json');
var pkg      = JSON.parse(fs.readFileSync(filename, 'utf8'));
var config   = (pkg.config && pkg.config['mocha-cov-reporter']) || {};

var getFailOnError = function () {
    return !!config.failOnError;
};

var getThreshold = function () {
    var threshold = parseInt(config.threshold, 10);

    if (isNaN(threshold)) {
        return 50;
    }

    if (threshold < 0) {
        return 0;
    }

    if (threshold > 100) {
        return 100;
    }

    return threshold;
};

var getUseColors = function () {
    return !!config.useColors;
};

exports.getFailOnError = getFailOnError;
exports.getThreshold   = getThreshold;
exports.getUseColors   = getUseColors;
