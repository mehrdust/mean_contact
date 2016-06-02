describe('Testing AngularJS base module', function () {
    describe('isPageLoaded', function () {
        var AppCtrl, $location, $scope;

        beforeEach(module('app'));

        beforeEach(inject(function ($controller, $rootScope, $state) {
            $scope = $rootScope.$new();
            AppCtrl = $controller('MainController', {$location: $location, $scope: $scope});
        }));

        it('should have access to MainController scope', inject(function () {
            expect(AppCtrl).toBeTruthy();
            expect(AppCtrl.currentState).toBeDefined();
            expect(AppCtrl.currentState).toBe('');
        }));
    });
});