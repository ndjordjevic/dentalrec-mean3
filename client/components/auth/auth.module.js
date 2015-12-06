'use strict';

angular.module('dentalrecMean3App.auth', [
  'dentalrecMean3App.constants',
  'dentalrecMean3App.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
