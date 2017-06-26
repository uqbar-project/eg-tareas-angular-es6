const routes = ($stateProvider, $urlRouterProvider) => {

  $urlRouterProvider.otherwise("/tareas");

  $stateProvider
    .state('tareas', {
      url: '/tareas',
      templateUrl: 'templates/tareas.html',
      controller: 'tareasController as tareasCtrl',
      data: {},
      resolve: {}
    })
}
