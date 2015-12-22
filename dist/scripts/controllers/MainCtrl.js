blocItOff.controller('MainCtrl', function($scope, taskRunner, $rootScope) {
	
	// default title
	$scope.title = "All Tasks";
	// defines tasks object
	$scope.tasks = taskRunner.getAllTasks();

	// switches view between all, active and archived tasks
	$rootScope.$watch("currentTaskType", function (type) {
		if (type !== undefined) {
			$scope.setTasks(type);
		}
	});
	
	$scope.setTasks = function (type) {
		if (type === "all") {
			$scope.tasks = taskRunner.getAllTasks();
			$scope.title = "All Tasks";
		}	 else if (type === "active") {
			$scope.tasks = taskRunner.getActiveTasks();
			$scope.title = "Active Tasks";
		} else {
				$scope.tasks = taskRunner.getArchivedTasks();
			$scope.title = "Archived Tasks";
		}
	};
	
// add a task
	$scope.addTask = function() {
	taskRunner.addTask($scope.newTaskName);
	};
	
	// remove a task - doesn't work yet
	$scope.removeTasks = function (tasks) {
		console.log("removing...", selectedTasks);
	};
	
	// select a task - needed for removing and archiving multiple tasks at once
	$scope.selectTask = function (task) {
		taskRunner.selectTask(task);
	};

	$scope.archiveTasks = function (task) {
		taskRunner.archiveTasks(task);
	}
	
});