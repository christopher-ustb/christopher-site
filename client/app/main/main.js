'use strict';

angular.module('christopherSiteApp')
  .config(function($stateProvider) {
    $stateProvider.state('main', {
      url: '/main',
      template: '<main></main>'
    });
  });
