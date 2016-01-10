'use strict';

angular.module('dentalrecMean3App')
  .config(function($stateProvider) {
    $stateProvider
      .state('main', {
        url: '/oldRoot',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      });
  });
