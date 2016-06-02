(function () {
    'use strict';

    angular
    	.module('app.core')
    	.directive('homeContent', homeContent);

	homeContent.$inject = []
	function homeContent() {
		return {
			restrict: 'E',
			templateUrl: 'app/core/directives/jombotron/jombotron.tpl.html',
		}
	}
})();