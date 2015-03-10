'use strict';

/**
 * @ngdoc function
 * @name blocitoffApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the blocitoffApp
 */
angular.module('blocitoffApp')
  .controller('UserSessionCtrl', function($scope, $auth) {
    $scope.handleBtnClick = function() {
      $auth.submitLogin($scope.loginForm)
        .then(function(resp) { 
          console.log(resp);
        })
        .catch(function(resp) { 
          // handle errors
        });
    };
  });