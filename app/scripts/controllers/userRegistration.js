'use strict';

angular.module('blocitoffApp')
    .controller('RegistrationCtrl', function ($scope, $rootScope, $location) {
        $rootScope.$on('auth:registration-email-success', function (ev) {
            $location.path('/');
        });
    });