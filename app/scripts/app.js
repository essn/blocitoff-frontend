'use strict';

/**
 * @ngdoc overview
 * @name blocitoffApp
 * @description
 * # blocitoffApp
 *
 * Main module of the application.
 */
angular
  .module('blocitoffApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ipCookie',
    'ng-token-auth'
  ])
  .config(function ($routeProvider, $authProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/sign_in', {
        templateUrl: 'views/userSession/new.html',
        controller: 'UserSessionCtrl'
      })
      .when('/list', {
        templateUrl: 'views/list.html',
        controller: 'ListCtrl'
      })
        .when('/sign_up', {
            templateUrl: 'views/userRegistration/new.html',
            controller: 'RegistrationCtrl'
        })
        .when('/account', {
            templateUrl: '../views/user/edit.html',
            controller: 'UserCtrl'
        })
      .otherwise({
        redirectTo: '/'
      });
    $authProvider.configure({
      apiUrl: 'http://localhost:3000/api',
      controller: 'UserSessionCtrl'
    });
  });

