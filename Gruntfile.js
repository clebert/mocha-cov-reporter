'use strict';

var helper = require('grunt-helper');

module.exports = function (grunt) {
    var pkg = grunt.file.readJSON('package.json');

    grunt.initConfig({
        pkg: pkg,
        bumpup: helper.config.bumpup(),
        concat: helper.config.concat(pkg),
        gitpush: helper.config.gitpush(),
        jshint: helper.config.jshint(),
        tagrelease: helper.config.tagrelease()
    });

    grunt.loadNpmTasks('grunt-bumpup');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-git');
    grunt.loadNpmTasks('grunt-tagrelease');

    grunt.registerTask('default', [
        'lint'
    ]);

    grunt.registerTask('lint', [
        'jshint:lint-js',
        'jshint:lint-json'
    ]);

    grunt.registerTask('package', [
        'concat:package-license'
    ]);

    grunt.registerTask('release', function (type) {
        var done = this.async();

        helper.checkGitRepository(grunt, function (error) {
            if (error) {
                done(error);
            } else {
                grunt.task.run('lint');
                grunt.task.run('bumpup:' + (type || 'patch'));
                grunt.task.run('package');
                grunt.task.run('tagrelease');
                grunt.task.run('gitpush:release-all');
                grunt.task.run('gitpush:release-tags');

                done(true);
            }
        });
    });

    grunt.registerTask('travis', [
        'lint'
    ]);
};
