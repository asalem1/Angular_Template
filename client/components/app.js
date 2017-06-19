angular.module('angular-app', [])

.component('app', {
  templateUrl: 'client/templates/app.html',
  controller: function($http) {
    let $ctrl = this;
    $ctrl.tasks = [];
    $http.get('/api/tasks').then(function(res) {
      res.data.forEach((obj) => {
        $ctrl.tasks.push(obj);
      })
    })
  }
});
