describe('Contact Module', function () {

    beforeEach(module('ui.router'));
    beforeEach(module('app.core'));
    beforeEach(module('app.contact'));

    describe('Contact Controller', function () {

        var $controller;

        beforeEach(inject(function (_$controller_) {
            // The injector unwraps the underscores (_) from around the parameter names when matching
            $controller = _$controller_;
        }));

        it('should load the controller with default data', function () {
            var scope = {};
            var contactCtrl = $controller('ContactController', {$scope: scope});
            var expectedContacts = [];
            expect(contactCtrl.contacts).toEqual(expectedContacts);
            expect(contactCtrl.error).toBe(null);
            expect(contactCtrl.selectedContact).toBe(-1);
            expect(contactCtrl.srchInputName).toBe("");
            expect(contactCtrl.srchInputPhone).toBe("");
            expect(contactCtrl.srchInputAddress).toBe("");
        });
    });
});

