'use strict';

/**
 * @ngdoc function
 * @name blocitoffApp.controller:ListCtrl
 * @description
 * # ListCtrl
 * Controller of the blocitoffApp
 */
angular.module('blocitoffApp')
  .controller('ListCtrl', function ($scope, $http, $rootScope) {
    $scope.newItem = {};
    $scope.items = [];
    $http.get('http://localhost:3000/api/users/'+$rootScope.user.id+'/items')
      .success(function(response) {
        $scope.items = response
      });
    $scope.deleteItem = function(id) {
        $http.delete('http://localhost:3000/api/users/'+$rootScope.user.id+'/items/'+id).success(function(response) {
            $scope.items = response;
        });
    };
    $scope.addItem = function(itemToAdd) {
        $http.post('http://localhost:3000/api/users/'+$rootScope.user.id+'/items',
            {name: itemToAdd.name}).success(function(item){
                $scope.items.push(item);
            });
        $scope.newItem = {};
    };
  });