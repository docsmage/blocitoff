blocItOff.factory("TaskRunner", function ($firebaseObject, $firebaseArray) {

	// downloads data
	var ref = new Firebase("https://shining-fire-1964.firebaseio.com/");

	// holds tasks	
	var tasks = $firebaseArray(ref);
	
	// holds selected tasks
	var selectedTasks = [];

	return {

		// retrieves all tasks for view
		getAllTasks: function () {
			return tasks;	
		},
		
		// retrieves active tasks for view
		getActiveTasks: function () {
			
			var activeTasks = [],
					totalTasks = tasks.length;
			
			for (var i = 0; i < totalTasks; i++) {
				if (tasks[i].active) {
					activeTasks.push(tasks[i]);
				}
			}
			return activeTasks;
		},
		
		// retrieves archived tasks for view
		getArchivedTasks: function () {

		var archivedTasks = [],
				totalTasks = tasks.length;
		
			for (var i = 0; i < totalTasks; i++) {
				if (!tasks[i].active) {
					archivedTasks.push(tasks[i]);
					tasks[i]
				}
			}
			return archivedTasks;		
		},
	
		// retrieves expired tasks for view - IN PROGRESS
		getExpiredTasks: function () {
			
			var expiredTasks = [],
					totalTasks = tasks.length;
			for (var i = 0; i < totalTasks; i++) {
				if (tasks[i].expired) { // doesn't exist yet
					expiredTasks.push(tasks[i]);
				}
			}
			
			return expiredTasks;
		},
		
		// moves tasks from active to archived
		archiveTasks: function () {
			for (var i = 0; i < selectedTasks.length; i++) {				ref.child(selectedTasks[i].$id).update({active: false});
			}
			selectedTasks = [];
		},
		
		// removes tasks completely
		removeTasks: function () {
			for (var i = 0; i < selectedTasks.length; i++) {
//				tasks[i].remove();
				ref.child(selectedTasks[i].$id).remove();
			}
			selectedTasks = [];
		},
		
		// adds one new task at a time
		addTask: function (taskName) {
			tasks.$add({
				name: taskName,
				active: true,
				created_at: Firebase.ServerValue.TIMESTAMP
				// code for the creation date to be added
			});
		},
		
		// selects a task
		selectTask: function (task) {
			if (task.selected) {
			selectedTasks.push(task);
		} else {	selectedTasks.splice(selectedTasks.indexOf(task), 1);
			}
		}
		
	}; // ends return
}); // ends factory