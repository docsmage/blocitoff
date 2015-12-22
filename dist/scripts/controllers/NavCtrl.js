blocItOff.controller("NavCtrl", function ($rootScope, $scope) {
	$scope.setTasks = function (type) {
		$rootScope.currentTaskType = type;
	};
});