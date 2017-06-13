angular.module('angular-app', [])

.component('app', {
  templateUrl: 'client/templates/app.html',
  controller: function($http) {
    let $ctrl = this;
    $http.get('/tasks')
      .then(function(res) {
        console.log('it was success')
          $ctrl.tasks = res;
      })
  }
});
