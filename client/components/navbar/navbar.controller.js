'use strict';

class NavbarController {
  //start-non-standard
  //menu = [{
  //  'title': 'Home',
  //  'state': 'main'
  //}];
  //
  //isCollapsed = true;
  //end-non-standard

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
