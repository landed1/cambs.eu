module.exports = function(grunt) {

  grunt.initConfig({

  	config: {
		dist: 'dist'
        },

  	flats: {
	    build: {
			options: {
		        basePath: '_templates',
		        layoutPath: 'layouts',
		        partialPath: 'partials',
		        masterSrc: 'masterpage/index.html',
		        destPath: '<%= config.dist %>'
			}
	    }
  	},
  	//grunt-contrib-connect
	/*connect: {
		server: {
			options: {
				open:true,
				hostname:'localhost',
				base: '_templates/dist',
				livereload: true //you must have this to dynamic add the js to the html page...
	        },
			livereload: {
                options: {
                    base: ['_templates'],
                    livereload: true,
				},
				files: [
                   
                ]
			}
	        
		}
		
    },*/

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


    watch: {

    	htmlrebuild: {
                files: ['_templates/**/*.html'],
                tasks: ['flats'],
                options: {
                    livereload: true
                }
            },

		livereload: {
                options: {
                    livereload: '<%= connect.livereload.options %>'
                },
                files: [
                    '_templates/**/*.html',
                ]
            },

    }


  });

  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-flats');
 

  grunt.registerTask('default', ['jshint',
								'flats' ,
								'connect',
								'watch']);

};