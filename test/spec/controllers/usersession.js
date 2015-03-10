'use strict';

describe('Controller: UsersessionCtrl', function () {

  // load the controller's module
  beforeEach(module('blocitoffApp'));

  var UsersessionCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    UsersessionCtrl = $controller('UsersessionCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
