'use strict';

class NavbarController {

  constructor(Auth) {
    this.isCollapsed = true;
    this.menu = [{
      'title': 'Home',
      'state': 'main'
    }];

    this.isLoggedIn = Auth.isLoggedIn;
    this.isAdmin = Auth.isAdmin;
    this.getCurrentUser = Auth.getCurrentUser;
  }
}

angular.module('dentalrecMean3App')
  .controller('NavbarController', NavbarController);
