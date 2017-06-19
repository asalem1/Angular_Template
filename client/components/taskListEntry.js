angular.module('angular-app')

.component('taskListEntry', {
  templateUrl: 'client/templates/taskListEntry.html',
  controller: function($http) {
    this.deleteTask = (task) => {
      console.log('the delete is calling');
      $http.delete('/api/tasks/' + task._id)
      .then((res) => {
        // delete request needs to render information correctly after deletion
        // $http.get('/api/tasks');
      })
    }
  },
  bindings: {
    task: '=',
    // onClick: '='
  }
});
