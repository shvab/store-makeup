module.exports = function (grunt) {

    require('load-grunt-tasks')(grunt);

    grunt.initConfig({

        less: {
            production: {
                files: {
                    '../web/css/all.css': '../web/less/all.less',
                }
            }
        },

        cssmin: {
            combine: {
                files: {
                    '../web/css/all.min.css': ['../web/css/all.css'],
                }
            }
        },

        concat: {
            js: {
                src: [
                    '../web/js/lib/*',
                    '../web/js/vendor/*',
                    '../web/js/common/init.js',
                    '../web/js/common/*'
                ],
                dest: '../web/js/all.js'
            }

        },

        uglify: {
            my_target: {
                files: {
                    '../web/js/all.min.js': ['../web/js/all.js'],
                }
            }
        },

        /*postcss: {
            options: {
                map: false, // inline sourcemaps

                processors: [
                    require('pixrem')(), // add fallbacks for rem units
                    require('autoprefixer')({browsers: 'last 2 version, ie > 8'}) // add vendor prefixes
                ]
            },
            dist: {
                src: ['../web/css/all.css']
            }
        },*/

        watch: {
            css: {
                files: ['../web/less/*.less'],
                tasks: ['less', 'cssmin']
            },
            cssmob: {
                files: ['../web/less/mobile/*.less'],
                tasks: ['less', 'cssmin']
            },
            js:{
                files: ['../web/js/common/*.js', '../web/js/vendor/*.js'],
                tasks: ['concat', 'uglify']
            },
            jsmob:{
                files: ['../web/js/mobile/*.js'],
                tasks: ['concat', 'uglify']
            }
        }

    });

    grunt.registerTask('build', ['less', 'cssmin', 'concat', 'uglify']);
    grunt.registerTask('default', ['less', 'concat']);
};