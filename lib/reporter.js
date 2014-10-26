'use strict';

var config = require('./config');
var utils  = require('./utils');

var logged;

module.exports = function (runner) {
    runner.on('end', function () {
        var report    = utils.getReport();
        var threshold = config.getThreshold();
        var failed    = report.coverage < threshold;

        var message;

        if (failed) {
            message = utils.colorizeRed('Coverage below threshold: %d% < %d% (SLOC %d)');
        } else {
            message = utils.colorizeGreen('Coverage succeeded: %d% >= %d% (SLOC %d)');
        }

        if (!logged) {
            logged = true;

            console.log(message, report.coverage, threshold, report.sloc);
        }

        if (failed && config.getFailOnError()) {
            process.exit(1);
        }
    });
};
