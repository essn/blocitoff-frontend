'use strict';

/**
 * @ngdoc function
 * @name blocitoffApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the blocitoffApp
 */
angular.module('blocitoffApp')
  .controller('NavCtrl', function ($scope, $rootScope, $location) {

        $rootScope.$on('auth:validation-success', function(ev, user) {
            $rootScope.isUser = user.signedIn;
        });

        $rootScope.$on('auth:login-success', function(ev, user) {
            $rootScope.isUser = user.signedIn;
            $location.path('/');
        });

        $rootScope.$on('auth:validation-error', function(ev, user) {
            $rootScope.isUser = user.signedIn;
        });

        $rootScope.$on('auth:logout-success', function(ev) {
            $rootScope.isUser = false;
        });

        $scope.authUserItems = 'views/partials/authdHeader.html';
        $scope.regUserItems = 'views/partials/regHeader.html';

    });
