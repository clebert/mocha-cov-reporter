/* eslint no-process-exit: 0 */

'use strict';

var config = require('./config');
var utils = require('./utils');

module.exports = function (runner) {
    runner.on('end', function() {
        var report = utils.getReport();
        var threshold = config.getThreshold();
        var failed = report.coverage < threshold;

        var message;

        if (failed) {
            message = utils.colorizeRed('Coverage below threshold: %d% < %d% (SLOC %d)');
        } else {
            message = utils.colorizeGreen('Coverage succeeded: %d% >= %d% (SLOC %d)');
        }

        console.log(message, report.coverage, threshold, report.sloc);

        process.exit(failed);
    });

    runner.on('fail', function() {
        console.log(utils.colorizeRed('Tests failed.'));

        process.exit(1);
    });
};
