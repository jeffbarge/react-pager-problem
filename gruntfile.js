module.exports = function(grunt) {

	var pkg = grunt.file.readJSON('package.json');

	grunt.initConfig({ pkg: pkg,

		browserify: {
			options: {
				transform: [ require('grunt-react').browserify]
			},
			client: {
				src: ['main.jsx'],
				dest: 'dist.js'
			}
		},

		connect: {
			server: {
				options: {
					port: 8888,
					hostname: '*',
					base: '',
					keepalive: true
				}
			}
		}

	});

	grunt.loadNpmTasks('grunt-browserify');
	grunt.loadNpmTasks('grunt-contrib-connect');

	grunt.registerTask('default', [
		'browserify',
		'connect'
	])
}