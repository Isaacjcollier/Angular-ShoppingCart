(function() {

  'use strict';

  angular
    .module('TeaAppControllerModule', [])
    .controller('TeaAppController', TeaAppController);

  TeaAppController.$inject = ['TeaAppService'];

  function TeaAppController(TeaAppService) {

    this.categories = TeaAppService.categories;

    this.allTeas = TeaAppService.completeTeaList;
  }

})();
