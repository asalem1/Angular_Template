angular.module('angular-app')

.component('addTask', {
  templateUrl: 'client/templates/addTask.html',
  controller: function($http) {
    let $ctrl = this;
    let dup = false;
    let checkList = function(tasks, task) {
      tasks.forEach((item) => {
        if (item.task === task) {
          dup = true;
        }
      });
    }
    $ctrl.addTask = (task) => {
      if (!task) {
        return alert('please enter a task');
      }
      checkList($ctrl.tasks, task)
      if (dup) {
        dup = false;
        return alert('that task already exists');
      }
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
