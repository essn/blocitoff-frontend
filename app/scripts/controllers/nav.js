'use strict';

/**
 * @ngdoc function
 * @name blocitoffApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the blocitoffApp
 */
angular.module('blocitoffApp')
  .controller('NavCtrl', function ($scope, $rootScope) {
        $rootScope.$on('auth:validation-success', function () {
            $rootScope.isUser = true;
        });

        $rootScope.$on('auth:validation-error', function () {
            $rootScope.isUser = false;
        });

        //$rootScope.isUser = $rootScope.user.signedIn;
        //console.log($rootScope.isUser);
        //$rootScope.userItems = $rootScope.isUser ? 'views/partials/authdHeader.html' : 'views/partials/regheader.html';
    });
