'use strict';

/**
 * @ngdoc function
 * @name blocitoffApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the blocitoffApp
 */
angular.module('blocitoffApp')
  .controller('NavCtrl', function ($scope, $auth) {
    $scope.show = function($auth) {
      return $auth.validateUser();
    };
    // $scope.userItems = $scope.show ? 'views/partials/authdHeader.html' : 'views/partials/regHeader.html';
    $scope.userItems = 'views/partials/regHeader.html';
  });
