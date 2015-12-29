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

	$stateProvider.state('activeTasks', {
			url: '/',
			controller: 'MainCtrl',
			templateUrl: '/templates/tasks.html'
		});
	
});