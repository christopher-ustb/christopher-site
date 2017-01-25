'use strict';

angular.module('christopherSiteApp')
  .config(function($stateProvider) {
    $stateProvider.state('home', {
      url: '/',
      template: '<home></home>'
    });
  });
