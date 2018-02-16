/**
 * Angular js module and config spa
 */
var app=angular.module('app',['ngRoute']);
app.config(function($routeProvider){
	$routeProvider
	.when("/", {
        templateUrl : "views/home.html"
    })
	.when('/register',{
		templateUrl:'views/registrationform.html',
		controller:'UserController'//$scope
	})
	.when('/login',{
		templateUrl:'views/login.html',
		controller:'UserController'
	})
	.otherwise({
		templateUrl:'views/home.html'
	
	})
})