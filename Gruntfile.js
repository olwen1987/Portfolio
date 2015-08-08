module.exports = function (grunt) {
    require('load-grunt-tasks')(grunt);
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.registerTask('serve', ['connect:server']);
    grunt.registerTask('default', ['less','browserify','concurrent:default']);
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        connect: {
            server: {
                options: {
                    port: 9000,
                    keepalive: true,
                    livereload: true,
                    base: ['public']
                }
            }
        },
        less: {
            compile: {
                files: {
                    'public/css/index.css': ['less/styles.less']
                }
            }
        },
        browserify: {
            dist: {
                files: {
                    'public/js/bundle.js': ['frontend/*.js']
                }
            }
        },
        watch: {
            js: {
                files: ['frontend/**/*.js'],
                tasks: ['browserify']
            },
            less: {
                files: ['less/*.less'],
                tasks: ['less']
            },
            options: {
                spawn: true,
                livereload: true
            }
        },
        concurrent: {
            default: ['serve','watch'],
            options: {
                logConcurrentOutput: true
            }
        }
    });
};