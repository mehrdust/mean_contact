(function () {
    'use strict';

    angular
    	.module('app.contact')
    	.config(config);

	// @ngInject
	config.$inject = ['$stateProvider'];
	function config($stateProvider) {
		$stateProvider
			.state('app.contact', {
				url: 'contact',
				views: {
					'content@app': {
						templateUrl: 'app/main/contact/contact.tpl.html',
						controller: 'ContactController as vm'
					}
				}
			}
		);
	}
})();