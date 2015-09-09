var path = require('path');

module.exports = function(grunt) {
    grunt.initConfig({
        requirejs: {
            compile: {
                options: {
                    name: "app",
                    baseUrl: "src/",
                    mainConfigFile: "src/config.js",
                    out: "dist/public/js/main.js"
                }
            }
        },
        copy: {
            development: {
                files: [
                    {
                        expand: true,
                        flatten: true,
                        src: [
                            'bower_components/requirejs/require.js'
                        ],
                        dest: 'dist/public/js',
                        filter: 'isFile'
                    },
                    {
                        expand: true,
                        flatten: true,
                        src: [
                            'src/views/index.html'
                        ],
                        dest: 'dist/views',
                        filter: 'isFile'
                    },
                    {
                        expand: true,
                        flatten: true,
                        src: [
                            'src/index.js'
                        ],
                        dest: 'dist/',
                        filter: 'isFile'
                    }
                ]
            }
        },
        watch: {
            express: {
                files:  ['src/**/*'],
                tasks:  ['default'],
                options: {
                    spawn: false
                }
            }
        },
        express: {
            options: {},
            development: {
                options: {
                    script: 'dist/index.js'
                }
            }
        },
        ngtemplates: {
            options: {
                bootstrap: function (module, script) {
                    return 'define([],{init:function($templateCache){' + script + '}});';
                },
                htmlmin: {
                    collapseBooleanAttributes: true,
                    collapseWhitespace: true,
                    removeAttributeQuotes: true,
                    removeComments: true,
                    removeEmptyAttributes: true,
                    removeRedundantAttributes: false,
                    removeScriptTypeAttributes: true,
                    removeStyleLinkTypeAttributes: true
                }
            },
            development: {
                cwd: 'src/',
                src: path.join('ui/**/*.html'),
                dest: path.join('src/ui/views.js')
            }
        },
        less: {
            development: {
                options: {
                    paths: []
                },
                files: {
                    "dist/public/css/main.css": "src/main.less"
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-angular-templates');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-express-server');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.loadNpmTasks('grunt-contrib-less');

    grunt.registerTask('default', ['ngtemplates', 'requirejs', 'less', 'copy', 'express:development', 'watch']);
};