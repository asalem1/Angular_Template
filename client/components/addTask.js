angular.module('angular-app')

.component('addTask', {
  templateUrl: 'client/templates/addTask.html',
  controller: function($http) {
    let $ctrl = this;
    $ctrl.addTask = function() {
      $http.post('/api/tasks')
        .then(function(res) {
          console.log('post was success')
            $ctrl.tasks.push($ctrl.task);
            $ctrl.task = '';
        })
    }
  },
  bindings: {
    tasks: '<'
  }
});
