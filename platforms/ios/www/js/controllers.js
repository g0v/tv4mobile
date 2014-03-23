angular.module('starter.controllers', [])


.controller('PetIndexCtrl', function($scope, PetService) {
  $scope.pets = PetService.all();
})


.controller('PetDetailCtrl', function($scope, $stateParams, PetService) {
  $scope.pet = PetService.get($stateParams.petId);
})

.controller('MainCtrl', function($scope, $ionicSideMenuDelegate) {
  $scope.leftButtons = [{
    type: 'button-icon icon ion-navicon',
    tap: function(e) {
      $ionicSideMenuDelegate.toggleLeft($scope.$$childHead);
    }
  }];
  $scope.toggleMenu = function () {
    $ionicSideMenuDelegate.toggleLeft($scope.$$childHead);
  }
});