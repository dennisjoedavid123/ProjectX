'use strict';

angular.module('mean.mytheme').controller('MythemeController', ['$scope', 'Global', 'Mytheme',
  function($scope, Global, Mytheme) {
    $scope.global = Global;
    $scope.package = {
      name: 'mytheme'
    };
  }
]);
