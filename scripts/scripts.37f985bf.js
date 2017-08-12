"use strict";angular.module("wats4000ProjectTowardsAMoreUsableApplicationApp",["ngAnimate","ngAria","ngCookies","ngMessages","ngResource","ngRoute","ngSanitize","ngStorage","ngTouch"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl",controllerAs:"main"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl",controllerAs:"about"}).when("/current/:cityID",{templateUrl:"views/current.html",controller:"CurrentCtrl",controllerAs:"current"}).when("/forecast/:cityID",{templateUrl:"views/forecast.html",controller:"ForecastCtrl",controllerAs:"forecast"}).otherwise({redirectTo:"/"})}]),angular.module("wats4000ProjectTowardsAMoreUsableApplicationApp").controller("MainCtrl",["$scope","citysearch","$localStorage",function(a,b,c){a.citiesFound=b.find(),a.storage=c,a.findCities=function(){a.citiesFound=b.find({query:a.location}),a.searchQuery=a.location}}]),angular.module("wats4000ProjectTowardsAMoreUsableApplicationApp").controller("AboutCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("wats4000ProjectTowardsAMoreUsableApplicationApp").factory("current",["$resource",function(a){return a("http://api.openweathermap.org/data/2.5/weather?id=:cityID&units=imperial&APPID=a8e3a9a92d14fe6ae7e920debac049d1",{},{query:{method:"GET",params:{cityID:"4717560"},isArray:!1}})}]),angular.module("wats4000ProjectTowardsAMoreUsableApplicationApp").factory("citysearch",["$resource",function(a){return a("http://api.openweathermap.org/data/2.5/find?q=:query&units=imperial&type=like&mode=json&APPID=a8e3a9a92d14fe6ae7e920debac049d1",{},{find:{method:"GET",params:{query:"seattle"},isArray:!1}})}]),angular.module("wats4000ProjectTowardsAMoreUsableApplicationApp").controller("CurrentCtrl",["$scope","$routeParams","current","$localStorage",function(a,b,c,d){a.cityID=b.cityID,a.currentWeather=c.query({cityID:b.cityID}),a.saveCity=function(a){var b={name:a.name,id:a.id};if(d.savedCities){for(var c=!0,e=0;e<d.savedCities.length;e++)d.savedCities[e].id==b.id&&(c=!1);1==c?d.savedCities.push(b):console.log("city	already	saved")}else d.savedCities=[b]}}]),angular.module("wats4000ProjectTowardsAMoreUsableApplicationApp").factory("forecast",["$resource",function(a){return a("http://api.openweathermap.org/data/2.5/forecast/daily?id=:cityID&cnt=5&units=imperial&APPID=a8e3a9a92d14fe6ae7e920debac049d1",{},{query:{method:"GET",params:{cityID:"4717560"},isArray:!1}})}]),angular.module("wats4000ProjectTowardsAMoreUsableApplicationApp").controller("ForecastCtrl",["$scope","$routeParams","forecast",function(a,b,c){a.cityID=b.cityID,a.forecastData=c.query({cityID:b.cityID})}]),angular.module("wats4000ProjectTowardsAMoreUsableApplicationApp").run(["$templateCache",function(a){a.put("views/about.html","<p>This is the about view.</p>"),a.put("views/current.html",'<h1>Current Weather for {{currentWeather.name}}</h1> <p><button class="btn btn-sm btn-primary" ng-click="saveCity(currentWeather)">Save City</button></p> <dl> <dt>Currently</dt> <dd>{{currentWeather.weather[0].main}}</dd> <dd>{{currentWeather.weather[0].description}}</dd> <dt>Temperature</dt> <dd>{{currentWeather.main.temp}} &deg;F</dd> <dt>Wind</dt> <dd>{{currentWeather.wind.speed}} mph at {{currentWeather.wind.deg}} &deg;</dd> <dt>Clouds</dt> <dd>{{currentWeather.clouds.all}}%</dd> </dl> <p><a ng-href="#!/forecast/{{cityID}}" class="btn btn-lg btn-primary">View 5-day Forecast</a></p>'),a.put("views/forecast.html",'<h1>5-day Forecast for {{forecastData.city.name}} {{forecastData.city.country}}</h1> <dl ng-repeat="weather	in	forecastData.list" class="weather-report"> <dt>Forecast for {{weather.dt*1000 | date:\'MMM dd, yyyy\'}}</dt> <dd>{{weather.weather[0].main}}</dd> <dd>{{weather.weather[0].description}}</dd> <dt>Temperature</dt> <dd>Min: {{weather.temp.min}} &deg;F Max: {{weather.temp.max}} &deg;F</dd> </dl> <p><a ng-href="#!/current/{{cityID}}" class="btn btn-lg btn-primary">View Current Weather</a></p>'),a.put("views/main.html",'<div ng-app class="jumbotron" ng-controller="MainCtrl"> <h1>Select Your City</h1> <p class="lead"> <div ng-init="location=\'Seattle\'"> <p> <label for="location">Location: <input type="text" name="location" ng-model="location"> </label> </p> <p> <button class="btn btn-lg btn-primary" ng-click="findCities()">Find City</button> </p> </div> <div ng-if="searchQuery"> <p class="lead">{{citiesFound.count}} cities found matching the query: {{searchQuery}}.</p> <dl ng-repeat="city	in	citiesFound.list"> <dt>{{city.name}}, {{city.sys.country}}</dt> <dd>{{city.weather[0].main}} - {{city.weather[0].description}}</dd> <dt>Temperature</dt> <dd>{{city.main.temp}} &deg;F</dd> <dd><a ng-href="#!/current/{{city.id}}" class="btn btn-lg btn-primary">View Weather</a></dd> </dl> </div> </p> </div> <div ng-if="storage.savedCities"> <h2>Saved Cities</h2> <ul class="saved-cities-list"> <li ng-repeat="city	in	storage.savedCities"> <a ng-href="#!/current/{{city.id}}" class="btn btn-lg btn-primary">{{city.name}}</a> </li> </ul> </div>')}]);