angular.module('angular-app')

.component('taskListEntry', {
  templateUrl: 'client/templates/taskListEntry.html',
  controller: function($http) {
    $ctrl = this;
    $ctrl.editting = false;
    $ctrl.id = '';
    let i;
    $ctrl.toggleEdit = function(task) {
      console.log('here is the task ', task)
      console.log('here are the tasks: ',$ctrl.tasks)
      i = $ctrl.tasks
      $ctrl.id = $ctrl.task._id
      $ctrl.editting = !$ctrl.editting;
    }
    $ctrl.updateTask = function(task) {
      if (!task.task) {
        return alert('please enter a task');
      }
      task = {
        task: task
      }
      $http.put('/api/tasks/' + task.task._id, task).then((res) => {
        console.log('here is the res: ', task);
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
