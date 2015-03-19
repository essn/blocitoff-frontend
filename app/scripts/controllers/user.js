'use strict';

/**
 * @ngdoc function
 * @name blocitoffApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the blocitoffApp
 */
angular.module('blocitoffApp')
    .controller('UserCtrl', function ($rootScope, $location) {
        $rootScope.$on('auth:account-destroy-success', function(ev) {
            $location.path('/');
            $rootScope.user.signedIn = false;
        });
    });
