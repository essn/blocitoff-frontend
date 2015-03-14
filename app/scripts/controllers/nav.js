'use strict';

/**
 * @ngdoc function
 * @name blocitoffApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the blocitoffApp
 */
angular.module('blocitoffApp')
  .controller('NavCtrl', function ($scope, $rootScope, $auth) {
        $auth.validateUser();
    $scope.userItems = $rootScope.isUser ? 'views/partials/authdHeader.html' : 'views/partials/regHeader.html';
  });
