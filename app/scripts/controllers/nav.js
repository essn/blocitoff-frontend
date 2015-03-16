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
        $rootScope.userItems;
        if ($rootScope.user.signedIn) {
            $rootScope.userItems = 'views/partials/authdHeader.html';
        }

        else {
            $rootScope.userItems = 'views/partials/regHeader.html';
        }
    });
