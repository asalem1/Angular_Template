angular.module('angular-app')

.component('addTask', {
  templateUrl: 'client/templates/addTask.html',
  controller: function($http) {
    let $ctrl = this;
    $ctrl.addTask = (task) => {
      task = {
        task: task
      };
      $http.post('/api/tasks', task)
      .then((res) => {
        $ctrl.tasks.push(res.data);
        $ctrl.task = '';
      })
    }
  },
  bindings: {
    tasks: '<'
  }
});
