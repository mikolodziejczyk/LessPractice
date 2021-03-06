module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        less: {
            options: {
                sourceMap: true,
                outputSourceFiles: true,
                sourceMapRootpath: "../../../",
                relativeUrls: false,
                rootpath: "../../"
            },

            appLess: {
                files:
                {
                    'intermediate/MyApp/css/start.css': ['AppStylesheets/start.less'],
                    'intermediate/MyApp/css/test.css': ['AppStylesheets/test.less']
                }
            }
        },

        postcss: {
            options: {
                map: {
                    inline: false, // save all sourcemaps as separate files...
                    annotation: 'intermediate/MyApp/css/' // ...to the specified directory
                },

                processors: [
                    require('autoprefixer')(), // browsers configured in package.json
                    require('cssnano')() // minify the result
                ]
            },
            dist: {
                src: 'intermediate/MyApp/css/*.css'
            }
        },

        concat: {
            options: {
                sourceMap: true
            },
            bundle: {
                src: ['intermediate/MyApp/css/*.css'],
                dest: 'dist/MyApp/css/bundle.css'
            }
        },

        watch: {
            scripts: {
                files: ['AppStylesheets/**/*.less'],
                tasks: ['default']
            }
        }


    });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-postcss');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Default task(s).
    grunt.registerTask('default', ['less', 'postcss', 'concat']);


};