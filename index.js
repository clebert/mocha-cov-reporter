'use strict';

var fs = require('fs'),
    path = require('path'),
    pkg = require('./package');

function getThreshold() {
    var filename = path.join(process.cwd(), 'package.json'),
        defaultThreshold = 50,
        threshold,
        userPkg;

    if (fs.existsSync(filename)) {
        userPkg = JSON.parse(fs.readFileSync(filename, 'utf8'));

        if (userPkg.config && userPkg.config[pkg.name]) {
            threshold = parseInt(userPkg.config[pkg.name].threshold, 10);

            if (isFinite(threshold)) {
                if (threshold < 0) {
                    return 0;
                }

                if (threshold > 100) {
                    return 100;
                }

                return threshold;
            }
        }
    }

    return defaultThreshold;
}

function MochaCovReporter(runner) {
    runner.on('end', function() {
        var coverage = 100,
            data = global._$jscoverage,
            hits = 0,
            sloc = 0,
            threshold = getThreshold(),
            failed,
            message;

        if (data) {
            Object.keys(data).forEach(function (filename) {
                data[filename].forEach(function (result) {
                    if (result === 0) {
                        sloc += 1;
                    } else if (result) {
                        hits += 1;
                        sloc += 1;
                    }
                });
            });
        }

        if (sloc > 0) {
            coverage = Math.floor(hits / sloc * 100);
        }

        failed = coverage < threshold;

        if (failed) {
            message = 'Coverage below threshold: %d% < %d% (SLOC %d)';
        } else {
            message = 'Coverage succeeded: %d% >= %d% (SLOC %d)';
        }

        console.log(message, coverage, threshold, sloc);

        process.exit(failed);
    });

    runner.on('fail', function() {
        console.log('Tests failed.');

        process.exit(1);
    });
}

module.exports = MochaCovReporter;
