'use strict';

/**
 * @ngdoc function
 * @name wats4000ProjectTowardsAMoreUsableApplicationApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the wats4000ProjectTowardsAMoreUsableApplicationApp
 */
angular.module('wats4000ProjectTowardsAMoreUsableApplicationApp')
  .controller('MainCtrl', function ($scope, citysearch) {
    	$scope.citiesFound	=	citysearch.find();

      $scope.findCities	=	function(){
        $scope.citiesFound	=	citysearch.find({
          query:	$scope.location
        });
        $scope.searchQuery = $scope.location;
      };
  });