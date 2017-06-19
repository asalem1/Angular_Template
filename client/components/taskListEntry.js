angular.module('angular-app')

.component('taskListEntry', {
  templateUrl: 'client/templates/taskListEntry.html',
  controller: function($http) {
    $ctrl = this;
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
