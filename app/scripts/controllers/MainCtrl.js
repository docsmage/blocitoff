blocItOff.controller('MainCtrl', function($scope, TaskRunner, $rootScope) {
	
	// default title
	$scope.title = "All Tasks";
	// defines tasks object
	$scope.tasks = TaskRunner.getAllTasks();

	// switches view
	$rootScope.$watch("currentTaskType", function (type) {
		if (type !== undefined) {
			$scope.setTasks(type);
		}
	});
	
	// set tasks in view
	$scope.setTasks = function (type) {
		if (type === "all") {
			$scope.tasks = TaskRunner.getAllTasks();
			$scope.title = "All Tasks";
		}	 else if (type === "active") {
			$scope.tasks = TaskRunner.getActiveTasks();
			$scope.title = "Active Tasks";
		} else if (type === "archived") {
				$scope.tasks = TaskRunner.getArchivedTasks();
			$scope.title = "Archived Tasks";
		}
		else if (type === "completed") {
			$scope.tasks = TaskRunner.getCompletedTasks();
			$scope.title = "Completed Tasks";
		}
		else {
			$scope.tasks = TaskRunner.getExpiredTasks();
			$scope.title = "Expired Tasks";
		}
	};
	
// add tasks
	$scope.addTask = function() {
	TaskRunner.addTask($scope.newTaskName);
	};
	
	// remove tasks
	$scope.removeTask = function (task) {
		TaskRunner.removeTasks(task);
	};
	
	// select tasks
	$scope.selectTask = function (task) {
		TaskRunner.selectTask(task);
	};

	// archive tasks
	$scope.archiveTasks = function (task) {
		TaskRunner.archiveTasks(task);
	};
	
	// reactivate tasks
	$scope.reactivateTasks = function (task) {
	TaskRunner.reactivateTasks(task);
	};
	
	// mark tasks as completed
	$scope.markCompleted = function (task) {
	TaskRunner.markCompleted(task);
	};
										 
});