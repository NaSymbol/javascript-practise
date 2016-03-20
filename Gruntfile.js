var mozjpeg = require('imagemin-mozjpeg');

module.exports = function(grunt) {



  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
/************************************************
					CSSmin
************************************************/
  cssmin: {
  options: {
    shorthandCompacting: false,
    roundingPrecision: -1
  },
  target: {
    files: {
      './css/output.css': ['./css/foo.css', './css/boo.css']
    }
  }
},
/********************************
			copy options
********************************/
copy: {
  main: {
    files: [
      // includes files within path
      {expand: false, src: ['./img/*.svg'], dest: '.img2/', filter: 'isFile'},

    ],
  },
},
/********************************
			image compress options
********************************/
imagemin: {                          // Task
    static: {                          // Target
      options: {                       // Target options
        optimizationLevel: 3,
        svgoPlugins: [{ removeViewBox: false }],
        use: [mozjpeg()]
      },
      files: {                         // Dictionary of files
        'img/*.png': 'img2/*.png', // 'destination': 'source'
        'dist/img.jpg': 'src/img.jpg',
        'dist/img.gif': 'src/img.gif'
      }
    }

  }
/********************************
			html min options
********************************/
htmlmin: {                                     // Task
    dist: {                                      // Target
      options: {                                 // Target options
        removeComments: true,
        collapseWhitespace: true
      },
      files: {                                   // Dictionary of files
        '/inde.html': '/index.html'     // 'destination': 'source'
      }
    },

  },
/********************************
			less options
********************************/
less: {
  development: {
    options: {
      paths: ["./css"]
    },
    files: {
      "./css/style.css": "./less/style.less"
    }
  },
},
/*****************************************
			Watch options
****************************************/
watch: {
  moduleA: {
    files: ['./less/*.less','./css/*.css'],
    tasks: ['less','cssmin'],
    options: {
	  reload:true,
      spawn: true,
    },
  },
},
  });

  /****************************************************
  Load the plugin that provides the "uglify" task.
  *****************************************************/
grunt.loadNpmTasks('grunt-contrib-cssmin');
grunt.loadNpmTasks('grunt-contrib-less');
//watch task added
grunt.loadNpmTasks('grunt-contrib-watch');
//grunt copy
grunt.loadNpmTasks('grunt-contrib-copy');
//grunt htmlmin
grunt.loadNpmTasks('grunt-contrib-htmlmin');
//grunt imagemin
grunt.loadNpmTasks('grunt-contrib-imagemin');

  // Default task(s).
  grunt.registerTask('default', ['']);

};
