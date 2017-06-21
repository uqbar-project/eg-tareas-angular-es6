TareasController.$inject = ["tareaService"]

const app = angular
    .module('tareasApp', ['ui.router'])
    .service('usuariosService', UsuarioService)
    .service('tareaService', TareaService)
    .component('asignarTarea', asignarTarea)
    .controller('tareasController', TareasController)
