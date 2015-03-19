'use strict';

/**
 * @ngdoc function
 * @name blocitoffApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the blocitoffApp
 */
angular.module('blocitoffApp')
  .controller('UserSessionCtrl', function($scope, $rootScope, $auth, $location) {
    $rootScope.$on('auth:login-success', function(ev, user) {
        $location.path('/');
    });
        $rootScope.$on('auth:validation-success', function(ev, user) {
            $rootScope.currentUser = user;
            $rootScope.isUser = true;
        });
  });