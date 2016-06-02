describe('Contacts API Service', function() {
	var ContactApi;
});

  	beforeEach(module('app.core'));

  	beforeEach(inject(function($injector) {
	    numberGeneratorService = $injector.get('ContactApi');
	}));

  	it('should add new contact when called', function() {
    
    	var name = 'contact1';
		var phone = '232143242';
		var address = 'somewhere nearby';    

});
