'use strict';

/**
 * @ngdoc function
 * @name blocitoffApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the blocitoffApp
 */
angular.module('blocitoffApp')
  .controller('AboutCtrl', function($scope, $http) {
    $http.get('http://localhost:3000/api/users/1/items')
      .success(function(response) {
        $scope.items = response;
      });
  });