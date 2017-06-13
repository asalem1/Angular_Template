angular.module('angular-app')

.component('taskListEntry', {
  templateUrl: 'client/templates/taskListEntry.html',
  controller: function() {},
  bindings: {
    task: '<',
    onClick: '<',
  }
});
