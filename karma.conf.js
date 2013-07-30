// Karma configuration
// Generated on Tue Jul 30 2013 16:30:35 GMT+0300 (EEST)
// !!! run on node v0.10.15

module.exports = function(config){
    config.set({

        // base path, that will be used to resolve files and exclude
        basePath   : '',

        // frameworks to use
        frameworks : ['mocha', 'chai'],

        // list of files / patterns to load in the browser
        files      : [
            'scripts/*.js',
            'test/unit/*.js'
        ],

        // list of files to exclude
        exclude    : [

        ],

        // test results reporter to use
        // possible values: 'dots', 'progress', 'junit', 'growl', 'coverage'
        reporters  : ['progress'],

        // web server port
        port       : 9876,

        // enable / disable colors in the output (reporters and logs)
        colors     : true,

        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel   : config.LOG_INFO,

        loggers        : [
            {type : 'console'}
        ],

        // enable / disable watching file and executing tests whenever any file changes
        autoWatch      : true,

        // Start these browsers, currently available:
        // - Chrome
        // - ChromeCanary
        // - Firefox
        // - Opera
        // - Safari (only Mac)
        // - PhantomJS
        // - IE (only Windows)
        browsers       : ['PhantomJS'],

        // If browser does not capture in given timeout [ms], kill it
        captureTimeout : 10000,

        // Continuous Integration mode
        // if true, it capture browsers, run tests and exit
        singleRun      : false
    });
};
