module.exports = function(grunt) {

  grunt.initConfig({

  	config: {
  		src:'src',
		  dist: 'dist'
        },

  	flats: {
	    build: {
  			options: {
  		        basePath: '<%= config.src %>/_templates',
  		        layoutPath: 'layouts',
  		        partialPath: 'partials',
  		        masterSrc: 'masterpage/index.html',
  		        destPath: '<%= config.dist %>'
  			}
	    }
  	},
  	
    sass: {
		dist:{
			options:{},
			files:{'<%= config.dist %>/core.css':'<%= config.src %>/scss/core.scss'}
		}
		
    },
	
	//grunt-contrib-connect
    connect: {
            options: {
                spawn: false,
                livereload: true,
                hostname: 'localhost'
            },
            livereload: {
                options: {
                    open: {
                        //target: 'http://localhost:9000/?brand='.brand
                    },
                    base: [
                        '<%= config.dist %>'
                    ]
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

    copy:{

      js:{
        files:[
                /*static build copy below to test and debug the js*/
                {
                    src: 'bower_components/jquery/dist/jquery.min.js',
                    dest:'/Users/calvincrane/Sites/cambs.eu/templates/cambs/js/jquery.min.js'
                },
                {
                    src: 'bower_components/jquery/dist/jquery.min.js',
                    dest:'/Users/calvincrane/encours/cambs.eu/dist/js/jquery.min.js'
                },
                {
                    src: 'bower_components/bootstrap-sass/assets/javascripts/bootstrap.min.js',
                    dest: '/Users/calvincrane/Sites/cambs.eu/templates/cambs/js/bootstrap.min.js'
                },
                {
                    src: 'bower_components/bootstrap-sass/assets/javascripts/bootstrap.min.js',
                    dest:'/Users/calvincrane/encours/cambs.eu/dist/js/bootstrap.min.js'
                },
                {
                    src: 'src/js/app.js',
                    dest: 'dist/js/app.js'
                }
              ]
      },

    	updateLocalhost:{
    		files: [
                /*utility copy for the localhost site to get the built css eventually js as well*/
                {
                    src: 'dist/core.css',
                    dest: '/Users/calvincrane/Sites/cambs.eu/templates/jumbotron/css/core.css'
                },
                {
                    src: 'dist/core.css',
                    dest: '/Users/calvincrane/Sites/cambs.eu/templates/cambs/css/core.css'
                },
                {
                  expand: true,
                	cwd: 'dist/images/',
                	src: ['**'],
                	dest: '/Users/calvincrane/Sites/cambs.eu/templates/cambs/images/'
                }
                
                ]
    	}
    },

    watch: {

      options: {livereload: true},

      gruntfile: {
        files: 'Gruntfile.js',
        tasks: ['flats'],
      },

    	htmlRebuild: {
        files: ['<%= config.src %>/**/*.html'],
        tasks: ['flats'],
      },

      jsRebuild: {
        files: ['<%= config.src %>/**/*.js'],
        tasks: ['copy:js'],
		  },

      cssRebuild:{
        files: ['<%= config.src %>/**/*.scss'],
        tasks: ['sass','copy']
      },

  		livereload: {
                  options: {
                      livereload: '<%= connect.livereload.options %>'
                  },
                  files: [
                      '<%= config.src %>/_templates/**/*.html',
                  ]
  		},

    }


  });

  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-flats');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-copy');
 

  grunt.registerTask('default', [
								'flats' ,
								'sass' ,
								'connect',
								'copy',
								'watch']);

};