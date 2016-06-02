var express = require('express');
var router  = express.Router();

var ctrlContacts = require('../controllers/contacts.controllers.js');

// Contacts Routes
	router
		.route('/contacts')
		.post(ctrlContacts.contactAddNew);

	router
		.route('/contacts')
		.get(ctrlContacts.contactsGetAll);

	router
		.route('/contacts/:contactId')
		.get(ctrlContacts.contactsGetOne);

	router
		.route('/contacts/:contactId')
		.put(ctrlContacts.contactUpdate);

	router
		.route('/contacts/:contactId')
		.delete(ctrlContacts.contactDelete);

module.exports = router;