var blocItOff = angular.module("blocItOff", ["ui.router", "firebase"]);
// configured ui router and firebase

blocItOff.config(function($stateProvider, $locationProvider, $urlRouterProvider) {
	
	// ported from bloc jams angular
	$locationProvider.html5Mode({
		enabled: true,
		requireBase: false
	});
	
	$urlRouterProvider.otherwise('/');
		// removes /!/ from URL

	$stateProvider.state('landing', {
			url: '/',
			controller: 'LandingCtrl',
			templateUrl: '/templates/landing.html'
		});	

	// keeping the "main" controller in app.js while I figure things out
	blocItOff.controller("mainCtrl", function($scope, $firebaseObject) {

		var ref = new Firebase("https://shining-fire-1964.firebaseio.com");
		// download the data into a local object
		$scope.data = $firebaseObject(ref);

	});
	
});