module.exports = function (grunt) {

  grunt.initConfig ({
    pkg : grunt.file.readJSON('package.json'),

    clean: {
      css: ['css'],
      temp: ['temp.css']
    },


    sass: {
      dist: {
        files: {
          'css/lato.css': 'scss/lato.scss'
        }
      }
    },

    cssmin :{
      app : {
        files : {
          'css/lato.min.css': 'css/lato.css'
        }
      }
    }
  });

  // Load NPM Tasks
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-sass');

  // Default Task Validates Less and Builds CSS for dist
  grunt.registerTask("default", ['clean', 'sass', 'cssmin' ]);
};
