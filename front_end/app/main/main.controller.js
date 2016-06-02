(function () {
    'use strict';

    angular
    	.module('myApp')
    	.controller('MainController', MainController);

	// @ngInject
	MainController.$inject = [];
	function MainController() {
		var vm = this;
	}
})();