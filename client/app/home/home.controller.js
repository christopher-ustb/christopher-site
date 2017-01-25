'use strict';

(function() {

  class HomeController {

    constructor($http, $scope, socket) {
      this.$http = $http;
      this.socket = socket;
      this.movies = [];
    }

    $onInit() {
      this.$http.get('/api/movies')
        .then(response => {
          this.movies = response.data;
        });
    }
  }

  angular.module('christopherSiteApp')
    .component('home', {
      templateUrl: 'app/home/home.html',
      controller: HomeController
    });
})();
