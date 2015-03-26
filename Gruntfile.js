module.exports = function(grunt) {

  grunt.initConfig({

  	flats: {
    build: {
	      options: {
	        basePath: '_templates',
	        layoutPath: 'layouts',
	        partialPath: 'partials',
	        masterSrc: 'masterpage/index.html',
	        destPath: '_templates'
	      }
    	}
  	},

    jshint: {
      files: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js'],
      options: {
        globals: {
          jQuery: true
        }
      }
    },
    watch: {
      files: ['<%= jshint.files %>' , '_templates/**/*.html'],
      tasks: ['jshint' , 'flats']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-flats');

  grunt.registerTask('default', ['jshint' , 'flats' , 'watch']);

};