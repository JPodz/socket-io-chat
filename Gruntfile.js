module.exports = function(grunt) {
    grunt.initConfig({
        requirejs: {
            compile: {
                options: {
                    name: "main",
                    baseUrl: "src/",
                    mainConfigFile: "src/config.js",
                    out: "dist/main.js"
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
        }
    });

    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-express-server');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['copy', 'express:development', 'watch']);
};