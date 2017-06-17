angular.module('angular-app')

.component('taskList', {
  templateUrl: 'client/templates/taskList.html',
  controller: function() {},
  bindings: {
    tasks: '<',
    deleteClick: '<',
  }
});
