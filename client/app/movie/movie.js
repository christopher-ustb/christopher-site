'use strict';

angular.module('christopherSiteApp')
  .config(function($stateProvider) {
    $stateProvider.state('movie', {
      url: '/movie',
      template: '<movie></movie>'
    });
  });
