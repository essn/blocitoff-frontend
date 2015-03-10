'use strict';

/**
 * @ngdoc function
 * @name blocitoffApp.controller:ListCtrl
 * @description
 * # ListCtrl
 * Controller of the blocitoffApp
 */
angular.module('blocitoffApp')
  .controller('ListCtrl', function ($scope, $http) {
    $http.get('http://localhost:3000/api/users/1/items')
      .success(function(response) {
        $scope.items = response;
      });
  });