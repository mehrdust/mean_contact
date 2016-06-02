(function () {
    'use strict';

    angular
    	.module('app.core')
    	.factory('ContactApi', ContactApi);

	ContactApi.$inject = ['$http'];
	function ContactApi($http) {
		var ContactApi = {
			getAllContacts  : getAllContacts,
			getOneContact 	: getOneContact,
			addNewContact 	: addNewContact,
			updateContact 	: updateContact,
			deleteContact 	: deleteContact,
			searchContacts	: searchContacts
		}

		return ContactApi;

		// API methods for Contact
		function getAllContacts() {
			return $http.get('api/contacts/');
		}
		function getOneContact(id) {
			return $http.get('api/contacts/' + id);
		}
		function addNewContact(data) {
			return $http.post('api/contacts/', data);
		}
		function updateContact(id, data) {
			return $http.put('api/contacts/' + id, data);
		}
		function deleteContact(id) {
			return $http.delete('api/contacts/' + id);
		}
		function searchContacts(params) {
			return $http.get('/api/search/contacts/', params);
		}
	}
})();