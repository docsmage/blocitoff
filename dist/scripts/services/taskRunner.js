blocItOff.factory("taskRunner", function ($firebaseObject, $firebaseArray) {

	var ref = new Firebase("https://shining-fire-1964.firebaseio.com/");
		// download the data into a local object using 'new'

	// holds tasks	
	var tasks = $firebaseArray(ref);
	
	// holds selected tasks
	var selectedTasks = [];

	return {

		// retrives all tasks for view
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
				}
			}
			
			return archivedTasks;		
		},
		
		// moves tasks from active to archived view
		archiveTasks: function () {
			
			// loop over selected tasks and set their active to false			
			for (var i = 0; i < selectedTasks.length; i++) {
				task[i].active = false;
			}
			
			// reset selectedTasks = []
			selectedTasks = [];
			// deletetasks will be the same
		},
		
		addTask: function (taskName) {
			tasks.$add({
				name: taskName,
				active: true
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