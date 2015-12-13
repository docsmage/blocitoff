blocItOff.controller('MainCtrl', function($scope, $firebaseObject, $firebaseArray) {
	
	$scope.title = "BlocItOff!";
	// testing		
	
	var ref = new Firebase("https://shining-fire-1964.firebaseio.com/");
		// download the data into a local object using 'new'
	
	$scope.tasks = $firebaseArray(ref);
		// scope object to hold tasks

// function to add a task
	$scope.addTask = function() {
		$scope.tasks.$add({
			name: $scope.newTaskName
		});
	};
	
});