'use strict';

(function() {

  class MovieController {

    constructor($http, $scope, socket) {
      this.$http = $http;
      this.socket = socket;
      this.movies = [];

      $scope.$on('$destroy', function() {
        socket.unsyncUpdates('thing');
      });
    }

    $onInit() {
      this.$http.get('/api/movies')
        .then(response => {
          this.movies = response.data;
        });
    }
  }

  angular.module('christopherSiteApp')
    .component('movie', {
      templateUrl: 'app/movie/movie.html',
      controller: MovieController
    });
})();
