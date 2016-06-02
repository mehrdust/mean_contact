(function () {
    'use strict';

    angular
    	.module('app.core')
    	.directive('navBar', navBar);

	// @ngInject
	navBar.$inject = [];
	function navBar() {
		return {
			restrict: 'E',
			templateUrl: 'app/core/directives/navigation/navigation.tpl.html',
			// controller: 'navBarController as vm'
		}
	}
})();