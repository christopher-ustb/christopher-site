'use strict';

angular.module('christopherSiteApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('contact', {
        url: '/contact',
        template: '<contact></contact>'
      });
  });
