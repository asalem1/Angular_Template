angular.module('angular-app')

.component('taskListEntry', {
  templateUrl: 'client/templates/taskListEntry.html',
  controller: function($http) {
    $ctrl = this;
    $ctrl.toggleEdit = function(task) {
      task.editing = !task.editing;
    }
    $ctrl.updateTask = function(task) {
      if (!task.task) {
        return alert('please enter a task');
      }
      task.editing = false;
      task = {
        task: task
      }
      $http.put('/api/tasks/' + task.task._id, task).then((res) => {
        $ctrl.toggleEdit(task);
      })
    }
    $ctrl.deleteTask = function(task) {
      $http.delete('/api/tasks/' + task._id)
      .then((res) => {
        let i = $ctrl.tasks.indexOf(task);
        $ctrl.tasks.splice(i, 1);
      })
    }
  },
  bindings: {
    task: '<',
    tasks: '<'
  }
});
