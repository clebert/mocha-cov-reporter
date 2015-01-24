'use strict';

var tasks = require('load-grunt-tasks');
var time  = require('time-grunt');

module.exports = function (grunt) {
    time(grunt);
    tasks(grunt);

    grunt.initConfig({
        bumpup: {
            options: {
                newlineEof: true
            },
            file: 'package.json'
        },
        jscs: {
            options: {
                config: '.jscsrc'
            },
            src: [
                '**/*.js',
                '!node_modules/**/*.js'
            ]
        },
        jshint: {
            options: {
                jshintrc: '.jshintrc'
            },
            src: [
                '**/*.js',
                '**/*.json',
                '!node_modules/**/*.js',
                '!node_modules/**/*.json'
            ]
        },
        module: {
            'check-repository': {
                options: {
                    branch: 'master',
                    check: true
                }
            },
            'release-publish': {
                options: {
                    release: true,
                    publish: true
                }
            }
        }
    });

    grunt.registerTask('test', [
        'jscs',
        'jshint'
    ]);

    grunt.registerTask('publish', function (type) {
        grunt.task.run('test');
        grunt.task.run('module:check-repository');
        grunt.task.run('bumpup:' + type);
        grunt.task.run('module:release-publish');
    });

    grunt.registerTask('travis', 'test');

    grunt.registerTask('default', 'test');
};
