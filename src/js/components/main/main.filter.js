(function() {
  'use strict';

  angular
  .module('TeaAppControllerModule')
  .filter('yesNo', yesNo);

  yesNo.$inject = [];

  function yesNo() {
    return function(input) {
      if (input) {
        return 'Yes';
      } else {
        return 'No';
      }
    };
  }

}());
