'use strict';

/**
 * @ngdoc service
 * @name wats4000ProjectTowardsAMoreUsableApplicationApp.current
 * @description
 * # current
 * Factory in the wats4000ProjectTowardsAMoreUsableApplicationApp.
 */
angular.module('wats4000ProjectTowardsAMoreUsableApplicationApp')
.factory('current',	function	($resource)	{
  //	Service	logic
  //	...
  //	Public	API	here
  return	$resource('http://api.openweathermap.org/data/2.5/weather?id=:cityID&units=imperial&APPID=a8e3a9a92d14fe6ae7e920debac049d1',	{},	{
    query:	{
      method:'GET',
      params:{
        cityID:	'4717560' // Paris, France ID
      },
      isArray:false
    }
  });
});
