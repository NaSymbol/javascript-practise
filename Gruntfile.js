

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
  sass: {
    files: ['./sass/*.scss'],
    tasks: ['sass'],
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
/***************************************************
                sass options
******************************************************/
    sass: {                              // Task
       dist: {                            // Target
         options: {                       // Target options
           style: 'expanded'
         },
         files: {                         // Dictionary of files
           './css/main.css': './sass/main.scss',       // 'destination': 'source
         }
       },
     },
     /***************************************************
                     connect options
     ******************************************************/
     connect: {
    server: {
      options: {
        port: 9001,
        base: 'www-root'
      }
    }
  },
     /***************************************************
                     qunit options
     ******************************************************/
     qunit: {
         all: ['test/*.html']
       },
    /********************************************************
                    browserify options
    ********************************************************/
       browserify: {
         dist: {
           files: {
             'build/module.js': ['client/scripts/**/*.js', 'client/scripts/**/*.coffee']
           },
           options: {
             transform: ['coffeeify']
           }
         }
       },
       /********************************************************
                       babel options
       ********************************************************/
       babel: {
		options: {
			sourceMap: true,
			presets: ['babel-preset-es2015']
		},
		dist: {
			files: {
				'dist/app.js': 'src/app.js'
			}
		}
	}
/*****option expand ***/
  });


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
//grunt compass
grunt.loadNpmTasks('grunt-contrib-compass');
//grunt sass
grunt.loadNpmTasks('grunt-contrib-sass');
//grunt qunit
grunt.loadNpmTasks('grunt-contrib-qunit');
//grunt connect
grunt.loadNpmTasks('grunt-contrib-connect');
//grunt jasmine
grunt.loadNpmTasks('grunt-contrib-jasmine');
//grunt
grunt.loadNpmTasks('grunt-browserify');
//
grunt.loadNpmTasks('grunt-contrib-csslint');


  // Default task(s).
  grunt.registerTask('default', ['']);
  grunt.registerTask('test',[])
};
