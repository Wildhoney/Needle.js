module.exports = function(grunt) {

    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),
        jshint: {
            all: 'packages/needle.js/*.js',
            options: {
                jshintrc: '.jshintrc'
            }
        },
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> by <%= pkg.author %> created on <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: ['packages/needle.js/constructor.js', 'packages/needle.js/invoke.js',
                      'packages/needle.js/register-injector.js', 'packages/needle.js/prototypes.js',
                      'packages/needle.js/main.js'],
                dest: 'dist/<%= pkg.name %>.min.js'
            }
        },
        jasmine: {
            pivotal: {
                src: ['packages/needle.js/constructor.js', 'packages/needle.js/invoke.js',
                      'packages/needle.js/register-injector.js', 'packages/needle.js/prototypes.js',
                      'packages/needle.js/main.js'],
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