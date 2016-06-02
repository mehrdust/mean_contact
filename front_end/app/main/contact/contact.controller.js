(function () {
    'use strict';

    angular
    	.module('app.contact')
    	.controller('ContactController', ContactController);

	// @ngInject
	ContactController.$inject = ['ContactApi'];
	function ContactController(ContactApi) {
		var vm = this;
		vm.contacts = [];
		// Initialize the controller
		activate();

		// methods
		function activate() {
			getContacts();
		}

		function getContacts() {
			ContactApi.getAllContacts().then(function(data, status) {
				// var contact = {};
				vm.contacts = [];
				angular.forEach(data.data, function(value, key) {
					// contact.id = value._id;
					// contact.name = value.name;
					// contact.phone = value.phone;
					// contact.address = value.address;
					vm.contacts.push(value);
				});
			})
		}
	}
})();