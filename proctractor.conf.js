exports.config = {
  	allScriptsTimeout: 11000,

  	specs: [
    	'front_end/**/*.scenario.js'
  	],

  	capabilities: {
    	'browserName': 'chrome'
  	},

  	baseUrl: 'http://localhost:3000/',

  	framework: 'jasmine',

  	jasmineNodeOpts: {
    	defaultTimeoutInterval: 30000
  	}
};
