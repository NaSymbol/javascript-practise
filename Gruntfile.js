

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
      {expand: false, src: ['index.min.html'], dest: './build/index.html'},

    ],
  },
},

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
        'footerModule.min.html': 'footerModule.html',
        'headerModule.min.html': 'footerModule.html'
       // 'destination': 'source'
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
  css: {
    files: ['./less/*.less','./css/*.css','./html/*.html'],
    tasks: ['less','cssmin','concat'],
    options: {
	  reload:true,
      spawn: true,
    },
  },
  concat: {
    files: ['./html/*.html'],
    tasks: ['concat'],
    options: {
	  reload:true,
      spawn: true,
    },
  },
},
/*********************************************
              concat options
**********************************************/
  concat: {
    options: {
      separator: ' ',
    },
    module1: {
      src: ['html/headerModule.html', 'html/contactModule.html', 'html/footerModule.html'],
      dest: 'build/contact.html',
    },
    module2: {
      src: ['html/headerModule.html', 'html/aboutModule.html', 'html/footerModule.html'],
      dest: 'build/about.html',
    },
  },
  /*********************************************
                Uglify options
  **********************************************/
  uglify: {
   my_target: {
     files: {
       'js/output.min.js': ['js/input1.js', 'js/input2.js']
     }
   }
 },
/***************************************************
image min options
******************************************************/
imagemin: {
    svg:{

    },
    png: {
      options: {
        optimizationLevel: 7
      },
      files: [
        {
          // Set to true to enable the following options…
          expand: true,
          // cwd is 'current working directory'
          cwd: '/img/',
          src: ['*/*.png'],
          // Could also match cwd line above. i.e. project-directory/img/
          dest: './img/compressed/',
          ext: '.png'
        }
      ]
    },
    jpg: {
      options: {
        progressive: true
      },
      files: [
        {
          // Set to true to enable the following options…
          expand: true,
          // cwd is 'current working directory'
          cwd: '.',
          src: ['img/*.jpg'],
          // Could also match cwd. i.e. project-directory/img/
          dest: 'project-directory/img/compressed/',
          ext: '.jpg'
        }
      ]
    }
  },
  compass: {                  // Task
      dist: {                   // Target
        options: {              // Target options
          sassDir: 'sass',
          cssDir: 'css',
          environment: 'production'
        }
      },
      dev: {                    // Another target
        options: {
          sassDir: 'sass',
          cssDir: 'css'
        }
      }
    },
/*****option expand ***/
  });



/******************************
  hello this is a test
*******************************/

  /****************************************************
  Load the plugin that provides the "uglify" task.
  *****************************************************/
grunt.loadNpmTasks('grunt-contrib-cssmin');
// grunt less
grunt.loadNpmTasks('grunt-contrib-less');
//grunt watch
grunt.loadNpmTasks('grunt-contrib-watch');
//grunt copy
grunt.loadNpmTasks('grunt-contrib-copy');
//grunt htmlmin
grunt.loadNpmTasks('grunt-contrib-htmlmin');
//grunt concat
grunt.loadNpmTasks('grunt-contrib-concat');
//grunt
grunt.loadNpmTasks('grunt-contrib-imagemin');
//grunt uglify
grunt.loadNpmTasks('grunt-contrib-uglify');
//grunt sass
grunt.loadNpmTasks('grunt-contrib-compass');

  // Default task(s).
  grunt.registerTask('default', ['']);

};
