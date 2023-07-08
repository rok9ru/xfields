module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> */\n',
            },
            build: {
                files: [{
                    expand: true,
                    cwd: 'src',
                    src: ['**/*.js'],
                    dest: 'dist/fields/',
                    rename: function (dest, src) {
                        return dest + src.replace('.js', '.min.js');
                    }
                }]
            }

        },
        concat: {
            options: {
                stripBanners: {
                    options: {
                        block: true
                    }
                },
                banner: '/*! <%= pkg.name %> - v<%= pkg.version %> */',
            },
            dist: {
                src: 'dist/fields/**/*.js',
                dest: 'dist/<%= pkg.name %>.all.min.js',
            }
        }
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    // Default task(s).
    grunt.registerTask('default', ['uglify', 'concat']);

}
;