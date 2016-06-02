var mongoose = require('mongoose');

var contactSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	address: String,
	phone: String,
});

mongoose.model('Contact', contactSchema);