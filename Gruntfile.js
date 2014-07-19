'use strict';

module.exports = function (grunt) {
    grunt.initConfig({
        bumpup: {
            file: 'package.json'
        },
        eslint: {
            src: [
                '**/*.js',
                '!node_modules/**/*.js'
            ]
        },
        module: {
            'check-repository': {
                options: {
                    check: true
                }
            },
            'license-copyright': {
                options: {
                    replace: true,
                    line: 3
                },
                src: 'LICENSE'
            },
            'release-publish': {
                options: {
                    release: true,
                    publish: true
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-bumpup');
    grunt.loadNpmTasks('grunt-eslint');
    grunt.loadNpmTasks('grunt-module');

    grunt.registerTask('default', 'eslint');

    grunt.registerTask('publish', function (type) {
        grunt.task.run('default');
        grunt.task.run('module:check-repository');
        grunt.task.run('bumpup:' + type);
        grunt.task.run('module:license-copyright');
        grunt.task.run('module:release-publish');
    });

    grunt.registerTask('travis', 'default');
};
