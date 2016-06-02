var mongoose = require('mongoose');
var Contact = mongoose.model('Contact');

// Get list of all contacts with URL: <base URL>/api/contacts
module.exports.contactsGetAll = function(req, res) {
	console.log('Get all contacts');
	Contact
		.find(function(err, contacts) {
			if (err) {
				res
					.status(500)
					.send(err);
			}
			else {
				res
					.status(200)
					.json(contacts);
			}
		}
	);
}

// get an individual contact with URL: <base URL>/api/contacts/<_id>
module.exports.contactsGetOne = function(err, res) {
	var id = req.params.contactId;
	Contact
		.findById(id, function(err, contact) {
			if (err) {
				res
					.status(500)
					.send(err);
			}
			else {
				res
					.status(200)
					.json(contact);
			}
		}
	);
}

// Add a new contact with URL: <base URL>/api/contacts/
module.exports.contactAddNew = function(req, res) {
	console.log('Adding new contact');
	console.log(req.body);
	var contact = new Contact();
	contact.name = req.body.name;
	contact.address = req.body.address;
	contact.phone = req.body.phone;
	console.log("new contact informaiton============");
	console.log(contact);
	contact.save(function(err) {
		if (err) {
			res
				.status(500)
				.send(err);
		}
		else {
			res
				.status(201)
				.json({ message: 'new contact added.'});
		}
	});
}

// Update a given contact with URL: <base URL>/api/contacts/<_id>
module.exports.contactUpdate = function(req, res) {
	var id = req.params.contactId;
	console.log(req.body);
	Contact
		.findById(id, function(err, contact) {
			if (err) {
				res
					.status(500)
					.send(err);
			}
			else {
				if (req.body.name || req.body.name == "") {
					contact.name = req.body.name;
				}
				if (req.body.address || req.body.address == "") {
					contact.address = req.body.address;
				}
				if (req.body.phone || req.body.phone == "") {
					contact.phone = req.body.phone;
				}
				console.log(contact);
				contact.save(function(err) {
					if (err) {
						res
							.status(500)
							.send(err);
					}
					else {
						res
							.status(200)
							.json({ message: 'Contact with id: ' + id + ' updated.'});
					}
				});
			}
		}
	);
}

// Delete a given contact with URL: <base URL>/api/contacts/<_id>
module.exports.contactDelete = function(req, res) {
	var id = req.params.contactId;
	Contact
		.remove({_id: id}, function(err, contact) {
			if (err) {
				res
					.status(500)
					.send(err);
			}
			else {
				res
					.status(200)
					.json({messge: 'Contact with id: ' + id + ' deleted.'});
			}
		}
	);
}