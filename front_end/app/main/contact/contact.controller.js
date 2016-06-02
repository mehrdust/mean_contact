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
		vm.error = null;
		vm.selectedContact = -1;
		vm.srchInputName = "";
		vm.srchInputPhone = "";
		vm.srchInputAddress = "";

		// Controller methods
		vm.modalAddNewContact 	= modalAddNewContact;
		vm.manageContact 		= manageContact;
		vm.editContact 			= editContact;
		vm.removeConfirmContact = removeConfirmContact;
		vm.removeContact 		= removeContact;
		vm.searchContacts		= searchContacts;
		vm.cleanForm			= cleanForm;

		// Initialize the controller
		activate();

		// methods
		function activate() {
			getContacts();
		}
		// gets all contacts from API and stores them in contacts object
		function getContacts() {
			ContactApi.getAllContacts().then(function(data, status) {
				vm.contacts = [];
				angular.forEach(data.data, function(value, key) {
					vm.contacts.push(value);
				});
			})
		}
		// shows the contact form pop-up
		function modalAddNewContact() {
			vm.error = null;
			vm.selectedContact = -1;
			$('#frmContact').modal();
		}
		// shows the contact form pop-up with selected contact details
		function editContact(index) {
			vm.error = null;
			vm.selectedContact = index;
			$('#frmContact').modal();
		}
		// handles the submit function on contact form pop-up
		function manageContact() {
			var data = {
				name: $('#inputName').val(),
				phone: $('#inputPhone').val(),
				address: $('#inputAddress').val()
			}
			// Update Contact
			if (vm.selectedContact > -1) {
				ContactApi.updateContact(vm.contacts[vm.selectedContact]._id, data)
					.then(fnSuccess, fnError);
			}
			// add new contact
			else {
				ContactApi.addNewContact(data)
					.then(fnSuccess, fnError);

			}
		}
		// shows a confirmation prompt for delete action
		function removeConfirmContact(index) {
			vm.selectedContact = index;
			$('#confirm-delete').modal();
		}
		// deletes a given contact
		function removeContact() {
			ContactApi.deleteContact(vm.contacts[vm.selectedContact]._id)
				.success(function() {
					$('#confirm-delete').modal('toggle');
					vm.selectedContact = -1;
					vm.error = null;
					getContacts();
				})
				.error(function(err) {
					vm.error = err.message;
				}
			);
		}
		// Search for contacts
		function searchContacts() {
			var qryParams = {params: {}};
			if (vm.srchInputName) {
				qryParams.params['name'] = vm.srchInputName;
			}
			if (vm.srchInputPhone) {
				qryParams.params['phone'] = vm.srchInputPhone;
			}
			if (vm.srchInputAddress) {
				qryParams.params['address'] = vm.srchInputAddress;
			}
			ContactApi.searchContacts(qryParams)
				.then(function(data) {
					vm.contacts = [];
					angular.forEach(data.data, function(value, key) {
						vm.contacts.push(value);
						vm.error = null;
					});
				}
			);
		}
		// Cleans search contact form
		function cleanForm() {
			vm.srchInputName = "";
			vm.srchInputPhone = "";
			vm.srchInputAddress = "";
			getContacts();
		}
		// Promises
		function fnSuccess(data) {
			$('#frmContact').modal('toggle');
			getContacts();
			vm.error = null;
		}
		function fnError(data) {
			vm.error = data.data.message;
			getContacts();
		};
	}
})();