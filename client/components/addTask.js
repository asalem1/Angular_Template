angular.module('angular-app')

.component('addTask', {
  templateUrl: 'client/templates/addTask.html',
  controller: function($http) {
    let $ctrl = this;
    this.addTask = (task) => {
      task = {
        task: task
      };
      $http.post('/api/tasks', task)
      .then((res) => {
        $ctrl.tasks.push($ctrl.task);
        $ctrl.task = '';
      })
    }
  },
  bindings: {
    tasks: '<'
  }
});
