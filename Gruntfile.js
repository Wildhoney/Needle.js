module.exports = function(grunt) {

    const MODULE_FILES = ['packages/Constructor.js', 'packages/New.js',
                          'packages/Register.js', 'packages/Prototypes.js',
                          'packages/Default.js'];

    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),
        jshint: {
            all: 'packages/*.js',
            options: {
                jshintrc: '.jshintrc'
            }
        },
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> by <%= pkg.author %> created on <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: MODULE_FILES,
                dest: 'dist/<%= pkg.name %>.min.js'
            }
        },
        jasmine: {
            pivotal: {
                src: MODULE_FILES,
                options: {
                    specs: 'tests/spec.js'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-jasmine');

    grunt.registerTask('build', ['uglify']);
    grunt.registerTask('test', ['jshint', 'jasmine']);
    grunt.registerTask('default', ['jshint', 'jasmine', 'uglify']);

};