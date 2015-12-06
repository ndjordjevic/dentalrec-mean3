'use strict';

angular.module('dentalrecMean3App', [
  'dentalrecMean3App.auth',
  'dentalrecMean3App.admin',
  'dentalrecMean3App.constants',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'btford.socket-io',
  'ui.router',
  'ui.bootstrap',
  'validation.match'
])
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);
  });
