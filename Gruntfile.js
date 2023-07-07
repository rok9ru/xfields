module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n',
               /* mangle: true*/
            },
        /*    build: {
                files: [
                    {
                        expand: true,
                        cwd: "src/",
                        src: ["*.js", "!*.min.js"],
                        dest: "dist/",
                        ext: ".min.js"
                    }
                ]
            },*/
         /*   build: [{
                expand: true,
                src: 'src/!*.js',
                dest: 'dist/',
                cwd: '.',
                rename: function (dst, src) {
                    // To keep src js files and make new files as *.min.js :
                    // return dst + '/' + src.replace('.js', '.min.js');
                    // Or to override to src :
                    return src;
                }
            }]*/
            build: {
                files: [{
                    expand: true,
                    cwd: 'src',
                    src: ['**/*.js'],
                    dest: 'dist/',
                    rename: function(dest, src) {
                        /*
                           rename logic
                           you will have access to src and dest name and can return desirect name from this function.
                        */
                        return dest + src.replace('.js', '.min.js');
                    }
                }]
            }

        }
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // Default task(s).
    grunt.registerTask('default', ['uglify']);

};