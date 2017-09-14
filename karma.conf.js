/* global process */

module.exports = function (config) {
  config.set({
    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',

    plugins: ['karma-webpack',  'karma-tap', 'karma-chrome-launcher', 'karma-coverage', 'karma-istanbuljs-reporter'], //['karma-webpack', 'karma-coverage', 'karma-tap', 'karma-chrome-launcher'],

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['tap'],

    // list of files / patterns to load in the browser
    files: [
      'tests.webpack.js'
    ],

    // list of files to exclude
    exclude: [
    ],

    // preprocess matching files before serving them to the browser
    // available preprocessors:
    // https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'tests.webpack.js': ['coverage', 'webpack']  //['webpack']   //['coverage', 'webpack']  //
    },

    webpack: {
      resolve: {
        extensions: ['*', '.js', '.jsx', '.json']
      },
      module: {
        // used Babel for test
        loaders: [
          {
            test: /\.jsx?|\.js$/,
            loader: ['babel-loader?cacheDirectory=true'],
            exclude: /node_modules/
          }
        ]
      },
      node: {
        fs: 'empty'
      }
    },

    webpackMiddleware: {
      noInfo: true
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress', 'coverage', 'istanbul' ],   //['progress', 'coverage', 'istanbul' ], // 'istanbul', ['progress', 'coverage', 'istanbul' ]

    // Coverage Reporter
    istanbulReporter: {
      reporters: [
        { type: 'text' },
        { type: 'html', subdir: 'report-html' }

      ],
      checkCoverage: true
    },
    coverageReporter: {
      reporters: [
        // {
        //   type: 'html',
        //   dir: 'coverage/'
        // },
        {
          type: 'text-summary'
        }
      ]
    },
    // web server port
    port: 9876,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR ||
    // config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    // enable / disable watching file and executing tests whenever any file
    // changes
    autoWatch: false,

    // enable / disable browser logs on terminal
    browserConsoleLogOptions: {
      level: 'error',
      format: '%b %T: %m',
      terminal: false
    },

    // start these browsers
    // available browser launchers:
    // https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'], //['jsdom'],

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true
  });
};
