'use strict';

(function(){

class ContactComponent {
  constructor() {
    this.message = 'Hello';
    console.log('contact component constructor called.');
  }
}

angular.module('christopherSiteApp')
  .component('contact', {
    templateUrl: 'app/contact/contact.html',
    controller: ContactComponent,
    controllerAs: 'Contact'
  });

})();
