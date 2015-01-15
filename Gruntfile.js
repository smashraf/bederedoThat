module.exports = function(grunt) {
	grunt.initConfig({
		bowercopy : {
			options : {
				// srcPrefix : 'bower_components'
			},
			scripts : {
				files : {
					'vendor/bootstrap/assets' : 'bootstrap-sass-official/assets'
				}
			}

		},

		sass : {

			dev : {

				options : {
					style : 'expanded',
					lineNumbers : true,
					trace : true,
					cacheLocation : 'public/stylesheets/.sass-cache'
				},

				files : {
					'public/stylesheets/style.css' : 'app/scss/style.scss'
				}

			}

		},
		nodemon : {
			dev : {
				script : 'server.js'
			}
		},
		browserify: {
			dev: {
				options: { browserifyOptions : {debug: true, } },

				src: ['app/modules/entry.js'],
				dest: 'public/bundle.js'
			},
			production: {
				options: {
					debug: false
				},
				src: '<%= browserify.dev.src %>',
				dest: 'build/bundle.js'
			}
		}
		// ,
		// watch: {
		// 	scripts: {
		// 		files: ['app/scss/*.scss'],
		// 		tasks: ['sass:dev','nodemon:dev'],
		// 		files: ['app/modules/**'],
		// 		tasks: ['browserify:dev','nodemon:dev'],
		// 		options: {
		// 			spawn: false,
		// 		},
		// 	}
		// }
	});
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-browserify');
	grunt.loadNpmTasks('grunt-bowercopy');
	grunt.loadNpmTasks('grunt-nodemon');
	grunt.registerTask('bower', ['bowercopy']);
	grunt.registerTask('dev', ['bowercopy','sass:dev',  'browserify:dev','nodemon:dev']);

};
