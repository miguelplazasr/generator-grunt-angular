module.exports = function(grunt){
	
	grunt.initConfig({
		ngAnnotate: {
		    dist: {
		        files: [{
		                expand: true,
		                src: ['**/*.js', '!**/*.annotated.js'],
		                ext: '.annotated.js',
		                extDot: 'last'
		            }],
		    }
		},
		bower: {
			install: {
				options: {
					targetDir: 'app/lib',
					layout: 'byComponent',
					install: true,
					verbose: true,
					cleanBowerDir: true
				}
			}
		},
		uglify: {
			my_target: {
				files: {
					'js/scripts.min.js': ['app/js/app.js', 'app/js/services.js', 'app/js/controllers/*.js']
				}
			}
		},
		watch: {
			scripts: {
				files: ['app/js/**/*.js'],
				tasks: ['uglify'],
				options: {
					spawn: false,
				}
			}
		},
		compass: {
			dist: {
				options: {
					config: 'config.rb',
					sourcemap: true
				}
			}
		},
		/*
		express: {
		  all: {
		    options: {
		      bases: 'app',
		      livereload: true,
		      open: 'http://localhost:3000'
		    }
		  }
		},
		*/
		browserSync: {
			dev: {
				bsFiles: {
					src: [
						'app/js/**/*.js',
						'tpl/**/*.html',
						'*.html'
					]
				},
				options: {
					server: {
						baseDir: './'
					},
					watchTask: true,
					debugInfo: true,
					logConnections: true,
					notify: true,
					//proxy: "veedor.dev:8888",
					ghostMode: {
						scroll: true,
						links: true,
						forms: true
					}
				}
			}
		}
		
	});

// loadNpmTasks
grunt.loadNpmTasks('grunt-bower-task');
grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-contrib-compass');
//grunt.loadNpmTasks('grunt-express');
grunt.loadNpmTasks('grunt-browser-sync');
grunt.loadNpmTasks('grunt-ng-annotate');

// defaultTasks
grunt.registerTask('default', ["browserSync", "watch"]);

};