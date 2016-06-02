(function () {
    'use strict';

    angular
    	.module('myApp')
    	.controller('MainController', MainController);

	// @ngInject
	MainController.$inject = ['$rootScope', '$state'];
	function MainController($rootScope, $state) {
		var vm = this;
		vm.currentState = 'app';

		vm.currentState = $state.current.name;
		$rootScope.$on('$stateChangeSuccess', function() {
            vm.currentState = $state.current.name;
        });
	}
})();