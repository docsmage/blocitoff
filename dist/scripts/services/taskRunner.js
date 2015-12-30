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
		
		// retrieves completed tasks for view
		getCompletedTasks: function () {

		var completedTasks = [],
		totalTasks = tasks.length;
		
			for (var i = 0; i < totalTasks; i++) {
				if (tasks[i].completed) {
					completedTasks.push(tasks[i]);
					tasks[i]
				}
			}
			return completedTasks;		
		},
	
		// retrieves expired tasks for view
		getExpiredTasks: function () {
			
			var expiredTasks = [],
			totalTasks = tasks.length;
			var todaysDateTime = new Date().getTime();
			// timestamp for today's date
			var sevenDays = 604800000;
			// 7 days in milliseconds
			
			for (var i = 0; i < totalTasks; i++) {
				if (tasks[i].created_at <= (todaysDateTime - sevenDays)) {
					expiredTasks.push(tasks[i]);
				}
			}
			return expiredTasks;
		},
		
		//retrieves expired tasks for view
		expireTasks: function () {
			for (var i = 0; i < totalTasks.length; i++) {
				if (tasks[i].created_at <= (todaysDateTime - sevenDays)) {
					ref.child(totalTasks[i].$id).update({expired: true, active: false});
				}
			}
		},
		
		// moves tasks from active to archived
		archiveTasks: function () {
			for (var i = 0; i < selectedTasks.length; i++) {
				ref.child(selectedTasks[i].$id).update({active: false});
			}
			selectedTasks = [];
		},
		
		// moves tasks from archived to active
		reactivateTasks: function () {
			for (var i = 0; i < selectedTasks.length; i++) {
				ref.child(selectedTasks[i].$id).update({active: true, expired: false, completed: false});
			}
			selectedTasks = [];
		},		
		
		// removes tasks completely
		removeTasks: function () {
			for (var i = 0; i < selectedTasks.length; i++) {
				ref.child(selectedTasks[i].$id).remove();
			}
			selectedTasks = [];
		},
		
		// adds one new task at a time
		addTask: function (taskName) {
			tasks.$add({
				name: taskName,
				active: true,
				created_at: Firebase.ServerValue.TIMESTAMP,
				completed: false,
				expired:false
			});
		},
		
		// selects a task
		selectTask: function (task) {
			if (task.selected) {
			selectedTasks.push(task);
		} else {	selectedTasks.splice(selectedTasks.indexOf(task), 1);
			}
		},
		
		markCompleted: function () {
			for (var i = 0; i < selectedTasks.length; i++) {
				ref.child(selectedTasks[i].$id).update({completed: true, active: false});
			}
			selectedTasks = [];
		}
		
	}; // ends return
}); // ends factory