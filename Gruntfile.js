module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        clean: ["dist/"],
        concat: {
            options: {
                banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %> */\n',
            },
            dist: {
                src: ['src/**/*.js'],
                dest: 'dist/<%= pkg.name %>.js',
            }
        },
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= pkg.version %> */\n',
                sourceMap: true
            },
            build: {
                files: {
                    'dist/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>']
                }
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.registerTask('default', ['clean', 'concat', 'uglify']);
};