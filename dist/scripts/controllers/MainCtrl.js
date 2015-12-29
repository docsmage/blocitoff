blocItOff.controller('MainCtrl', function($scope, TaskRunner, $rootScope) {
	
	// default title
	$scope.title = "All Tasks";
	// defines tasks object
	$scope.tasks = TaskRunner.getAllTasks();

	// switches view between all, active and archived tasks
	$rootScope.$watch("currentTaskType", function (type) {
		if (type !== undefined) {
			$scope.setTasks(type);
		}
	});
	
	$scope.setTasks = function (type) {
		if (type === "all") {
			$scope.tasks = TaskRunner.getAllTasks();
			$scope.title = "All Tasks";
		}	 else if (type === "active") {
			$scope.tasks = TaskRunner.getActiveTasks();
			$scope.title = "Active Tasks";
		} else {
				$scope.tasks = TaskRunner.getArchivedTasks();
			$scope.title = "Archived Tasks";
		}
	};
	
// add tasks
	$scope.addTask = function() {
	TaskRunner.addTask($scope.newTaskName);
	};
	
	// remove tasks - doesn't work yet
	$scope.removeTask = function (tasks) {
		console.log("removing...", selectedTasks);
		TaskRunner.removeTasks(task);
	};
	
	// select tasks
	$scope.selectTask = function (task) {
		TaskRunner.selectTask(task);
	};

	// archive tasks
	$scope.archiveTasks = function (task) {
		TaskRunner.archiveTasks(task);
	}
	
});