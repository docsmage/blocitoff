blocItOff.controller('MainCtrl', function($scope, taskRunner, $rootScope) {
	
	$scope.title = "Active Tasks";
	$scope.tasks = taskRunner.getAllTasks();

	$rootScope.$watch("currentTaskType", function (type) {
		if (type !== undefined) {
			$scope.setTasks(type);
		}
	});
	
	$scope.setTasks = function (type) {
		if (type === "all") {
			$scope.tasks = taskRunner.getAllTasks();
		}	 else if (type === "active") {
			$scope.tasks = taskRunner.getActiveTasks();
		} else {
				$scope.tasks = taskRunner.getArchivedTasks();
		}
	};
	
// add a task
	$scope.addTask = function() {
		taskRunner.addTask($scope.newTaskName);
	};
	
	// remove a task - doesn't work yet
//	$scope.removeTasks = function (task) {
//		console.log("removing...", selectedTasks);
//	};
	
	// select a task - needed for removing and archiving multiple tasks at once
	$scope.selectTask = function (task) {
		taskRunner.selectTask(task);
	};
	
});

blocItOff.controller("NavCtrl", function ($rootScope, $scope) {
	$scope.setTasks = function (type) {
		$rootScope.currentTaskType = type;
	};
});