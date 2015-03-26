module.exports = function(grunt) {

  grunt.initConfig({

  	config: {
  		src:'src',
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
  	
	sass: {
		dist:{
			options:{},
			files:{'<%= config.dist %>/core.css':'<%= config.src %>/core.scss'}
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


    watch: {

    	htmlrebuild: {
			files: ['_templates/**/*.html'],
			tasks: ['flats'],
			options: {
				livereload: true
			}
		},

        cssliveupdate:{
        	files: ['<%= config.src %>/**/*.scss'],
			tasks: ['sass'],
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
  grunt.loadNpmTasks('grunt-contrib-sass');
 

  grunt.registerTask('default', ['jshint',
								'flats' ,
								'sass' ,
								'connect',
								'watch']);

};