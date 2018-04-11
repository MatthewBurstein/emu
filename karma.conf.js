module.exports = function (config) {
  config.set({
    frameworks: ['jasmine'],

    files: [
      'src/*.js',
      'spec/*.js'
    ],

    exclude: [
      'src/interface.js',
    ],

    // coverage reporter generates the coverage
    reporters: ['progress', 'coverage'],

    preprocessors: {
      // source files, that you wanna generate coverage for
      // do not include tests or libraries
      // (these files will be instrumented by Istanbul)
      'src/*.js': ['coverage']
    },

    // optionally, configure the reporter
    coverageReporter: {
      type: 'html',
      dir: 'coverage/'
    }
  });
};
