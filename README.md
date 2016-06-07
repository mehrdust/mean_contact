# mean_contact
Simple MEAN stack application for contacts

### Setup the environment
	
make sure mongo is running on localhost:27017 or do the changes in back_end/data/db.js

	$ git clone https://github.com/mehrdust/mean_contact.git
    $ cd mean_contact
    $ npm insall

### Run application
    $ node app.js

### Run Karma

to run Karma unti testing simply open a new terminal and run:

	$ karma start karma.conf.js

### Run Protractor

make sure you have protractor installed globally.

	$ protractor --version

to run protractor, go to the project's root directory and run:
	
	$ protractor protractor.conf.js
	