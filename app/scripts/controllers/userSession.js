'use strict';

/**
 * @ngdoc function
 * @name blocitoffApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the blocitoffApp
 */
angular.module('blocitoffApp')
  .controller('UserSessionCtrl', function($scope, $auth, $location) {
    $scope.$on('auth:login-success', function(ev, user) {
      $location.path('/');
      alert('Welcome ', user.email);
    });
    $scope.$on('auth:login-error', function(ev, reason) {
      alert('auth failed because', reason.errors[0]);
    });
  });