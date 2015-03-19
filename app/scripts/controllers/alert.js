'use strict';

/**
 * @ngdoc function
 * @name blocitoffApp.controller:ListCtrl
 * @description
 * # ListCtrl
 * Controller of the blocitoffApp
 */
angular.module('blocitoffApp')
    .controller('AlertCtrl', function ($scope, $rootScope) {
        $scope.alerts = [];

        $scope.addAlert = function(type, msg) {
            $scope.alerts.push({'type': type, 'msg': msg});
        };

        $scope.closeAlert = function(index) {
            $scope.alerts.splice(index, 1);
        };

        // Alerts
        $rootScope.$on('auth:login-success', function(ev, user) {
            $scope.addAlert('success', 'Welcome '+user.email);
        });
        $rootScope.$on('auth:login-error', function(ev) {
            $scope.addAlert('danger', 'Login failed.  Are your username and password correct?');
        })
        $rootScope.$on('auth:logout-success', function(ev) {
            $scope.addAlert('success', 'Signed out successfully.');
        });
        $rootScope.$on('auth:password-change-success', function(ev) {
            $scope.addAlert('success', 'Password changed successfully.');
        });
        $rootScope.$on('auth:password-change-error', function(ev) {
            $scope.addAlert('error', 'Password change unsuccessful.  Please try again.');
        });
        $rootScope.$on('auth:account-update-success', function(ev) {
            $scope.addAlert('success', 'Account information updated successfuly.');
        });
        $rootScope.$on('auth:registration-email-success', function(ev) {
            $scope.addAlert('success', 'Registration successful.  Welcome to Blocitoff!');
        });
        $rootScope.$on('auth:registration-email-error', function(ev) {
            $scope.addAlert('danger', 'Registration unsuccessful.  Please try again.');
        });
        $rootScope.$on('auth:account-destroy-success', function(ev) {
            $scope.addAlert('success', 'Account deleted successfully.  Good riddance!');
        });
    });