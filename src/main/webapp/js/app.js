angular
    .module('tareasApp', ['ui.router'])
    .service('tareaService', TareaService)
    .controller('tareasController', TareaController)
    .config(routes)