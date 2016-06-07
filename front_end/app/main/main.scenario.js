describe('my App', function( ) {
	browser.get('index.html');

	it('should go to / when page loads', function() {
        expect(browser.getLocationAbsUrl()).toMatch("/");
    });

    describe('contacts url', function() {
    	beforeEach(function() {
    		browser.get('/contacts/');
    	});
    	it('should go to /contacts', function() {
    		expect(browser.getLocationAbsUrl()).toMatch('/contacts');
    	});
    });
})